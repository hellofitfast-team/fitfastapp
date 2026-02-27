"use client";

import { useEffect, useRef } from "react";
import OneSignal from "react-onesignal";

export function OneSignalProvider() {
  const initialized = useRef(false);

  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
    if (!appId || initialized.current) return;
    initialized.current = true;

    OneSignal.init({
      appId,
      serviceWorkerParam: { scope: "/" },
      serviceWorkerPath: "/OneSignalSDKWorker.js",
      allowLocalhostAsSecureOrigin: process.env.NODE_ENV === "development",
    }).catch(async (err) => {
      if (String(err).includes("already initialized")) return;
      // Lazy-load Sentry only on error to avoid pulling it into the initial bundle
      const Sentry = await import("@sentry/nextjs");
      Sentry.captureException(err instanceof Error ? err : new Error(String(err)), {
        tags: { feature: "push-notifications", integration: "onesignal" },
        extra: { appId: appId ? "present" : "missing", environment: process.env.NODE_ENV },
      });
    });
  }, []);

  return null;
}
