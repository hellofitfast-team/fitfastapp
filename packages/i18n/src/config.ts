/**
 * Framework-agnostic i18n configuration.
 * Used by Vite apps (react-i18next) — no next-intl dependency.
 * Marketing app continues to use ./routing (next-intl).
 */

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const rtlLocales: ReadonlySet<Locale> = new Set(["ar"]);

export function isRtl(locale: Locale): boolean {
  return rtlLocales.has(locale);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return isRtl(locale) ? "rtl" : "ltr";
}
