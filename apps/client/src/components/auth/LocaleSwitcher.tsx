"use client";

import { useRouter, usePathname } from "@fitfast/i18n/navigation";
import { useParams, useSearchParams } from "next/navigation";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    const qs = searchParams.toString();
    const target = qs ? `${pathname}?${qs}` : pathname;
    router.replace(target, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="text-muted-foreground hover:text-foreground flex h-11 w-11 items-center justify-center rounded-lg text-xs font-bold transition-colors hover:bg-neutral-100"
    >
      {currentLocale === "en" ? "AR" : "EN"}
    </button>
  );
}
