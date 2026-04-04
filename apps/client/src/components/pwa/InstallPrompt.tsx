import { useTranslation } from "react-i18next";
import { X, Download, Share } from "lucide-react";
import { usePwaInstall } from "@/hooks/use-pwa-install";

/**
 * Persistent PWA install prompt banner.
 *
 * - Android/Desktop Chrome: Shows "Install" button that triggers native prompt.
 * - iOS Safari: Shows "Add to Home Screen" instructions with share icon.
 * - Auto-hides when already installed or dismissed (7-day cooldown).
 *
 * Place this inside the dashboard layout so it appears after login.
 */
export function InstallPrompt() {
  const { t } = useTranslation("translation", { keyPrefix: "pwaInstall" });
  const { canShow, isIOS, hasNativePrompt, install, dismiss } = usePwaInstall();

  if (!canShow) return null;

  return (
    <div className="border-primary/20 bg-primary/5 animate-slide-up fixed inset-x-0 bottom-20 z-50 mx-4 rounded-xl border p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:mx-auto sm:max-w-md">
      {/* Close button */}
      <button
        type="button"
        onClick={dismiss}
        className="text-muted-foreground hover:text-foreground absolute top-2 right-2 rounded-lg p-1.5 transition-colors"
        aria-label={t("dismiss")}
      >
        <X className="h-4 w-4" />
      </button>

      <div className="flex items-start gap-3 pe-6">
        {/* Icon */}
        <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
          {isIOS ? (
            <Share className="text-primary h-5 w-5" />
          ) : (
            <Download className="text-primary h-5 w-5" />
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">{t("title")}</p>
          <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">
            {isIOS ? t("iosMessage") : t("message")}
          </p>

          {/* Action button — only for native prompt (Android/desktop) */}
          {hasNativePrompt && (
            <button
              type="button"
              onClick={install}
              className="bg-primary hover:bg-primary/90 mt-3 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-colors"
            >
              {t("installButton")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
