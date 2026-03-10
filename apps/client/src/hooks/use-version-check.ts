"use client";

import { useEffect, useRef } from "react";

const CLIENT_BUILD_ID = process.env.NEXT_PUBLIC_BUILD_ID || "dev";

export function useVersionCheck() {
  const hasReloaded = useRef(false);

  useEffect(() => {
    if (CLIENT_BUILD_ID === "dev") return;

    async function checkVersion() {
      if (hasReloaded.current) return;
      try {
        const res = await fetch("/api/version", { cache: "no-store" });
        if (!res.ok) return;
        const { buildId } = await res.json();
        if (buildId && buildId !== CLIENT_BUILD_ID) {
          hasReloaded.current = true;
          window.location.reload();
        }
      } catch {
        // Network error — skip silently (user may be offline)
      }
    }

    checkVersion();

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") checkVersion();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);
}
