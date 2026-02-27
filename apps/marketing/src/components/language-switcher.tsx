"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "en" | "ar") {
    if (newLocale === locale) return;

    // Replace the locale segment in the path.
    // Pathname from next/navigation always starts with /locale/...
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || "/");
  }

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/10 p-0.5">
      <button
        onClick={() => switchLocale("en")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          locale === "en"
            ? "bg-white text-[var(--color-primary)]"
            : "text-white/80 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("ar")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
          locale === "ar"
            ? "bg-white text-[var(--color-primary)]"
            : "text-white/80 hover:text-white"
        }`}
      >
        AR
      </button>
    </div>
  );
}
