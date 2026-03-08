"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";
import { Button } from "@fitfast/ui/button";
import { useKeyboardVisible } from "@/hooks/useKeyboardVisible";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const t = useTranslations("pwa");
  const keyboardVisible = useKeyboardVisible();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIos, setShowIos] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Already installed as PWA — hide permanently
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync with browser install state
    setVisible(true);

    // iOS detection (Safari on iOS doesn't fire beforeinstallprompt)
    // iPadOS 13+ reports as "Macintosh" so also check maxTouchPoints
    const userAgent = navigator.userAgent;
    const isIos =
      (/iPad|iPhone|iPod/.test(userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
      !(window as unknown as { MSStream?: unknown }).MSStream;

    if (isIos) {
      setShowIos(true);
      return;
    }

    // Android/Chrome install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setVisible(false);
    }
  };

  // Hidden: not ready, keyboard open, or already installed
  if (!visible || keyboardVisible || (!deferredPrompt && !showIos)) return null;

  return (
    <div className="bg-card/95 fixed inset-x-0 bottom-[calc(var(--height-bottom-nav)+max(0.5rem,env(safe-area-inset-bottom))+1rem)] z-[var(--z-bottom-nav)] mx-auto flex w-fit items-center gap-2.5 rounded-full px-4 py-2 shadow-lg backdrop-blur-md lg:hidden">
      <Download className="text-primary h-4 w-4 shrink-0" />

      <p className="max-w-[200px] truncate text-xs font-medium">
        {showIos ? t("iosInstructions") : t("installDescription")}
      </p>

      {!showIos && (
        <Button
          onClick={handleInstall}
          size="sm"
          className="h-7 shrink-0 rounded-full px-3 text-xs"
        >
          {t("installButton")}
        </Button>
      )}
    </div>
  );
}
