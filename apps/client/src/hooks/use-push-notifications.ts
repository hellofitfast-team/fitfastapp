import { useState, useEffect, useCallback, useRef } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

const IOS_BANNER_DISMISSED_KEY = "fitfast_ios_push_dismissed";

/** Convert a base64url-encoded VAPID public key to a Uint8Array for PushManager.subscribe(). */
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/** Detect iOS device (includes iPadOS 13+ which reports macOS user agent). */
function getIsIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !("MSStream" in window)
  );
}

/** Detect standalone (installed PWA) mode. */
function getIsStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as any).standalone === true
  );
}

/** Check if push notifications are supported in this browser. */
function getIsSupported(): boolean {
  if (typeof window === "undefined") return false;
  return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
}

export function usePushNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof Notification !== "undefined" ? Notification.permission : "default",
  );
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isIOSBannerDismissed, setIsIOSBannerDismissed] = useState(() => {
    try {
      return localStorage.getItem(IOS_BANNER_DISMISSED_KEY) === "true";
    } catch {
      return false;
    }
  });

  const isSupported = getIsSupported();
  const isIOS = getIsIOS();
  const isStandalone = getIsStandalone();

  // Conditional queries — skip when push is not supported to avoid unnecessary network traffic
  const vapidKey = useQuery(api.pushSubscriptions.getVapidPublicKey, isSupported ? {} : "skip");
  const backendSub = useQuery(api.pushSubscriptions.getMySubscription, isSupported ? {} : "skip");
  const saveSubscription = useMutation(api.pushSubscriptions.saveSubscription);
  const deactivateSubscription = useMutation(api.pushSubscriptions.deactivateSubscription);

  // Track whether we've done initial sync
  const didInitialSync = useRef(false);

  // Sync subscription state from browser + backend on mount
  useEffect(() => {
    if (!isSupported || didInitialSync.current) return;
    didInitialSync.current = true;

    (async () => {
      try {
        const reg = await navigator.serviceWorker.ready;
        const sub = await reg.pushManager.getSubscription();
        setIsSubscribed(!!sub);
        setPermission(Notification.permission);
      } catch {
        // SW not ready or push not available
      }
    })();
  }, [isSupported]);

  // Keep isSubscribed in sync with backend query
  useEffect(() => {
    if (backendSub !== undefined) {
      setIsSubscribed(backendSub !== null && backendSub.isActive);
    }
  }, [backendSub]);

  const subscribe = useCallback(async () => {
    if (!isSupported || isLoading) return;
    setIsLoading(true);

    try {
      // 1. Request permission (must be triggered by user action)
      const result = await Notification.requestPermission();
      setPermission(result);

      if (result !== "granted") {
        return;
      }

      // 2. Get VAPID key
      if (!vapidKey) {
        console.error("[Push] VAPID public key not available");
        return;
      }

      // 3. Subscribe via PushManager
      const reg = await navigator.serviceWorker.ready;
      const applicationServerKey = urlBase64ToUint8Array(vapidKey);
      const pushSub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      });

      // 4. Extract keys and save to backend
      const subJson = pushSub.toJSON();
      const endpoint = pushSub.endpoint;
      const p256dh = subJson.keys?.p256dh ?? "";
      const auth = subJson.keys?.auth ?? "";

      if (!endpoint || !p256dh || !auth) {
        console.error("[Push] Subscription missing required fields");
        return;
      }

      await saveSubscription({ endpoint, p256dh, auth });
      setIsSubscribed(true);
      return true; // success signal for toast
    } catch (err) {
      // AbortError = user dismissed permission prompt (Firefox) — not an error
      if (err instanceof DOMException && err.name === "AbortError") return;
      console.error("[Push] Subscribe failed:", err);
      throw err; // re-throw so caller can show toast
    } finally {
      setIsLoading(false);
    }
  }, [isSupported, isLoading, vapidKey, saveSubscription]);

  const unsubscribe = useCallback(async () => {
    if (!isSupported || isLoading) return;
    setIsLoading(true);

    try {
      const reg = await navigator.serviceWorker.ready;
      const pushSub = await reg.pushManager.getSubscription();

      if (pushSub) {
        const endpoint = pushSub.endpoint;
        // Deactivate backend FIRST, then browser — ensures consistency on failure
        await deactivateSubscription({ endpoint });
        await pushSub.unsubscribe();
      }

      setIsSubscribed(false);
      return true; // success signal for toast
    } catch (err) {
      console.error("[Push] Unsubscribe failed:", err);
      throw err; // re-throw so caller can show toast
    } finally {
      setIsLoading(false);
    }
  }, [isSupported, isLoading, deactivateSubscription]);

  const dismissIOSBanner = useCallback(() => {
    try {
      localStorage.setItem(IOS_BANNER_DISMISSED_KEY, "true");
    } catch {
      // Private browsing or quota exceeded — still update UI state
    }
    setIsIOSBannerDismissed(true);
  }, []);

  /**
   * Silently sync browser subscription with backend.
   * Call from dashboard layout after login — no UI prompts.
   */
  const syncSubscription = useCallback(async () => {
    if (!isSupported || typeof navigator === "undefined") return;
    // Guard: wait until backendSub query has loaded (undefined = loading)
    if (backendSub === undefined) return;

    try {
      const reg = await navigator.serviceWorker.ready;
      const browserSub = await reg.pushManager.getSubscription();

      if (browserSub && (backendSub === null || !backendSub.isActive)) {
        // Browser has subscription but backend doesn't — re-save
        const subJson = browserSub.toJSON();
        const endpoint = browserSub.endpoint;
        const p256dh = subJson.keys?.p256dh ?? "";
        const auth = subJson.keys?.auth ?? "";

        if (endpoint && p256dh && auth) {
          await saveSubscription({ endpoint, p256dh, auth });
          setIsSubscribed(true);
        }
      } else if (browserSub && backendSub && backendSub.endpoint !== browserSub.endpoint) {
        // Endpoints differ — update backend with current browser endpoint
        const subJson = browserSub.toJSON();
        await saveSubscription({
          endpoint: browserSub.endpoint,
          p256dh: subJson.keys?.p256dh ?? "",
          auth: subJson.keys?.auth ?? "",
        });
      }
    } catch {
      // Silent — don't disrupt login flow
    }
  }, [isSupported, backendSub, saveSubscription]);

  return {
    isSupported,
    isIOS,
    isStandalone,
    permission,
    isSubscribed,
    isLoading,
    isIOSBannerDismissed,
    subscribe,
    unsubscribe,
    dismissIOSBanner,
    syncSubscription,
  };
}
