"use client";

import { useTranslations } from "next-intl";
import { Link } from "@fitfast/i18n/navigation";
import { AlertTriangle } from "lucide-react";

interface ExpiryBannerProps {
  daysUntilExpiry: number;
}

export function ExpiryBanner({ daysUntilExpiry }: ExpiryBannerProps) {
  const t = useTranslations("subscription.banner");

  const message =
    daysUntilExpiry <= 1 ? t("expiresInOne") : t("expiresIn", { days: daysUntilExpiry });

  return (
    <div className="sticky top-0 z-50 flex items-center justify-center gap-2 bg-amber-500 px-4 pt-[max(0.5rem,env(safe-area-inset-top,0px))] pb-2 text-sm font-medium text-white lg:pt-2">
      <AlertTriangle className="h-4 w-4 shrink-0" />
      <span>{message}</span>
      <Link
        href="/expired"
        className="font-bold underline underline-offset-2 transition-colors hover:text-white/90"
      >
        {t("renewNow")}
      </Link>
    </div>
  );
}
