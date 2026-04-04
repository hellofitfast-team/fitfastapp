import { useEffect } from "react";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (!("serviceWorker" in navigator) || !navigator.serviceWorker) return;

    // Guard against multiple reloads during SW activation
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });

    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((registration) => {
        // SW uses self.skipWaiting() on install, so no need to send SKIP_WAITING message.
        // The controllerchange listener above handles the reload.

        // Check for SW updates every 30 minutes
        const UPDATE_INTERVAL_MS = 30 * 60 * 1000;
        setInterval(() => registration.update(), UPDATE_INTERVAL_MS);

        // Also check when app regains focus
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") {
            registration.update();
          }
        });
      })
      .catch((err) => {
        console.error("SW registration failed:", err);
      });
  }, []);

  return null;
}
