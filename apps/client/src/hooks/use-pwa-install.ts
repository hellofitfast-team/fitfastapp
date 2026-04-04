import { useState, useEffect, useCallback } from "react";

const INSTALL_DISMISSED_KEY = "fitfast_install_dismissed";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

/**
 * Hook to manage the PWA install prompt (A2HS — Add to Home Screen).
 *
 * On Android/desktop Chrome, the browser fires a `beforeinstallprompt` event
 * that we can capture and defer. On iOS Safari, there is no such event — we
 * detect iOS + non-standalone and show manual instructions instead.
 *
 * The prompt is dismissible and the dismissal persists for 7 days.
 */
export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    try {
      const dismissed = localStorage.getItem(INSTALL_DISMISSED_KEY);
      if (!dismissed) return false;
      const timestamp = parseInt(dismissed, 10);
      // Re-show after 7 days
      if (Date.now() - timestamp > DISMISS_DURATION_MS) {
        localStorage.removeItem(INSTALL_DISMISSED_KEY);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  });

  const isIOS =
    typeof navigator !== "undefined" &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !("MSStream" in window);

  const isStandalone =
    typeof window !== "undefined" &&
    (window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as any).standalone === true);

  // Capture the beforeinstallprompt event (Android/desktop Chrome)
  useEffect(() => {
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Detect when app gets installed
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, [isStandalone]);

  /** Trigger the native install prompt (Android/desktop only). */
  const install = useCallback(async () => {
    if (!deferredPrompt) return false;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);

    if (outcome === "accepted") {
      setIsInstalled(true);
      return true;
    }
    return false;
  }, [deferredPrompt]);

  /** Dismiss the install banner for 7 days. */
  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(INSTALL_DISMISSED_KEY, String(Date.now()));
    } catch {
      // Private browsing — still update UI
    }
    setIsDismissed(true);
  }, []);

  // Show the prompt when:
  // - Not already installed (standalone)
  // - Not dismissed within 7 days
  // - Either: has native prompt (Android/desktop) OR is iOS (show manual instructions)
  const canShow = !isInstalled && !isDismissed && (!!deferredPrompt || isIOS);

  return {
    /** Whether the install banner should be shown. */
    canShow,
    /** Whether the app is already installed (standalone mode). */
    isInstalled,
    /** Whether this is an iOS device (needs manual install instructions). */
    isIOS,
    /** Whether the native install prompt is available (Android/desktop). */
    hasNativePrompt: !!deferredPrompt,
    /** Trigger native install prompt. Returns true if accepted. */
    install,
    /** Dismiss the install banner for 7 days. */
    dismiss,
  };
}
