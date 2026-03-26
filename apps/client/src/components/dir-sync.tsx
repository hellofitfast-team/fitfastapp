"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

/**
 * Syncs the `dir` attribute on <html> with the current locale.
 * Guarantees RTL is applied even if the server-side header detection
 * in the root layout fails to set `dir="rtl"`.
 */
export function DirSync() {
  const locale = useLocale();

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    if (document.documentElement.dir !== dir) {
      document.documentElement.dir = dir;
    }
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}
