"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Download, Plus, SquareArrowOutUpRight, EllipsisVertical, Compass } from "lucide-react";
import { Button } from "@fitfast/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@fitfast/ui/drawer";
import { useKeyboardVisible } from "@/hooks/useKeyboardVisible";
import { usePathname } from "next/navigation";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

type ManualInstructionType = "ios-safari" | "ios-other" | "android-fallback" | null;

/**
 * Detects the browser and platform to determine the right install instructions.
 *
 * - iOS + Safari → show Safari share instructions
 * - iOS + any other browser → tell user to open in Safari (only Safari can add to home screen on iOS)
 * - Android + no beforeinstallprompt → show menu-based instructions (Firefox, etc.)
 * - Android + beforeinstallprompt → handled via the native prompt API (no manual instructions needed)
 */
function detectManualInstructionType(ua: string): ManualInstructionType {
  const isIos =
    (/iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !(window as unknown as { MSStream?: unknown }).MSStream;

  if (isIos) {
    // On iOS, only Safari supports "Add to Home Screen".
    // Chrome/Firefox/etc. on iOS are WebKit shells but can't add PWAs.
    // Safari UA doesn't contain "CriOS" (Chrome), "FxiOS" (Firefox), "EdgiOS" (Edge), "OPiOS" (Opera)
    const isNonSafari = /CriOS|FxiOS|EdgiOS|OPiOS|GSA/.test(ua);
    return isNonSafari ? "ios-other" : "ios-safari";
  }

  // Android without beforeinstallprompt will be set later as "android-fallback"
  return null;
}

export function InstallPrompt() {
  const t = useTranslations("pwa");
  const keyboardVisible = useKeyboardVisible();
  const pathname = usePathname();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [manualType, setManualType] = useState<ManualInstructionType>(null);
  const [visible, setVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Detect if we're on a dashboard page (has bottom nav)
  const isDashboard =
    /^\/(en|ar)(\/|$)/.test(pathname) &&
    !/^\/(en|ar)\/(login|set-password|magic-link|accept-invite|expired|welcome|initial-assessment|pending)/.test(
      pathname,
    );

  useEffect(() => {
    // Already installed as PWA — hide permanently
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true
    ) {
      return;
    }

    const ua = navigator.userAgent;
    const detected = detectManualInstructionType(ua);

    if (detected) {
      // iOS device — show manual instructions immediately
      setManualType(detected);
      setVisible(true);
      return;
    }

    // Non-iOS: listen for beforeinstallprompt (Chrome/Edge/Samsung/Opera on Android)
    let gotPromptEvent = false;

    const handler = (e: Event) => {
      e.preventDefault();
      gotPromptEvent = true;
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    const installedHandler = () => {
      setDeferredPrompt(null);
      setVisible(false);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", installedHandler);

    // If beforeinstallprompt doesn't fire within 3s, this is likely Firefox/other Android browser
    // Show manual "Menu → Install" instructions as fallback
    const fallbackTimer = setTimeout(() => {
      if (!gotPromptEvent) {
        // Check if this is actually Android (not desktop)
        const isAndroid = /Android/i.test(ua);
        if (isAndroid) {
          setManualType("android-fallback");
          setVisible(true);
        }
      }
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", installedHandler);
    };
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setVisible(false);
    }
  }, [deferredPrompt]);

  // Hidden: not ready, keyboard open, or already installed
  const showManual = manualType !== null;
  if (!visible || keyboardVisible || (!deferredPrompt && !showManual)) return null;

  return (
    <>
      <div
        className={
          "bg-card/95 fixed inset-x-0 z-[var(--z-bottom-nav)] mx-auto flex w-fit items-center gap-2.5 rounded-full px-4 py-2.5 shadow-lg backdrop-blur-md lg:hidden " +
          (isDashboard
            ? "bottom-[calc(var(--height-bottom-nav)+max(0.5rem,env(safe-area-inset-bottom))+1rem)]"
            : "bottom-[max(1rem,env(safe-area-inset-bottom,0px))]")
        }
      >
        <Download className="text-primary h-4 w-4 shrink-0" />

        <p className="max-w-[220px] text-xs leading-tight font-medium">{t("installDescription")}</p>

        {showManual ? (
          <Button
            onClick={() => setDrawerOpen(true)}
            size="sm"
            className="h-7 shrink-0 rounded-full px-3 text-xs"
          >
            {t("installButton")}
          </Button>
        ) : (
          <Button
            onClick={handleInstall}
            size="sm"
            className="h-7 shrink-0 rounded-full px-3 text-xs"
          >
            {t("installButton")}
          </Button>
        )}
      </div>

      {/* Manual instructions bottom sheet — content adapts to platform/browser */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("manualTitle")}</DrawerTitle>
          </DrawerHeader>
          <div className="px-6 pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
            <p className="text-muted-foreground mb-6 text-sm">{t("manualDescription")}</p>

            {manualType === "ios-safari" && <IosSafariSteps t={t} />}
            {manualType === "ios-other" && <IosOtherBrowserSteps t={t} />}
            {manualType === "android-fallback" && <AndroidFallbackSteps t={t} />}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

/** iOS Safari: Share → Add to Home Screen → Add */
function IosSafariSteps({ t }: { t: (key: string) => string }) {
  return (
    <div className="space-y-5">
      <Step number={1} label={t("iosSafariStep1")} hint={t("iosSafariStep1Hint")}>
        <SquareArrowOutUpRight className="text-primary h-5 w-5" />
      </Step>
      <Step number={2} label={t("iosSafariStep2")} hint={t("iosSafariStep2Hint")}>
        <Plus className="text-primary h-5 w-5" />
      </Step>
      <Step number={3} label={t("iosSafariStep3")} />
    </div>
  );
}

/** iOS non-Safari: must open in Safari first */
function IosOtherBrowserSteps({ t }: { t: (key: string) => string }) {
  return (
    <div className="space-y-5">
      <Step number={1} label={t("iosOtherStep1")} hint={t("iosOtherStep1Hint")}>
        <Compass className="text-primary h-5 w-5" />
      </Step>
      <Step number={2} label={t("iosOtherStep2")} hint={t("iosOtherStep2Hint")}>
        <SquareArrowOutUpRight className="text-primary h-5 w-5" />
      </Step>
      <Step number={3} label={t("iosOtherStep3")} hint={t("iosOtherStep3Hint")}>
        <Plus className="text-primary h-5 w-5" />
      </Step>
      <Step number={4} label={t("iosOtherStep4")} />
    </div>
  );
}

/** Android Firefox/other: Menu → Install */
function AndroidFallbackSteps({ t }: { t: (key: string) => string }) {
  return (
    <div className="space-y-5">
      <Step number={1} label={t("androidStep1")} hint={t("androidStep1Hint")}>
        <EllipsisVertical className="text-primary h-5 w-5" />
      </Step>
      <Step number={2} label={t("androidStep2")} hint={t("androidStep2Hint")}>
        <Download className="text-primary h-5 w-5" />
      </Step>
      <Step number={3} label={t("androidStep3")} />
    </div>
  );
}

function Step({
  number,
  label,
  hint,
  children,
}: {
  number: number;
  label: string;
  hint?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
        {number}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{label}</p>
        {(hint || children) && (
          <div className="text-muted-foreground mt-1.5 flex items-center gap-1.5">
            {children}
            {hint && <span className="text-xs">{hint}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
