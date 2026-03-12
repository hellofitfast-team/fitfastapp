// Shared formatting & utility functions used by both client and admin apps.
// Import via: import { formatDate, toLocalDigits, ... } from "@fitfast/ui/format"

// Convert Western digits (0-9) to Eastern Arabic-Indic digits (٠-٩) when locale is Arabic
const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"] as const;
export function toLocalDigits(value: string | number, locale: string): string {
  const str = String(value);
  if (locale !== "ar") return str;
  return str.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
}

/** Map app locale to Intl-compatible date locale string. */
export function toDateLocale(locale: string): string {
  return locale === "ar" ? "ar-EG" : "en-US";
}

// Date utilities
export function formatDate(date: Date | string, locale: string = "en"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(toDateLocale(locale), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Short date format (e.g., "Feb 15" / "15 فبراير")
export function formatDateShort(date: Date | string, locale: string = "en"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(toDateLocale(locale), {
    month: "short",
    day: "numeric",
  });
}

// Date with weekday (e.g., "Sat, Feb 15" / "السبت، 15 فبراير")
export function formatDateWithWeekday(date: Date | string, locale: string = "en"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(toDateLocale(locale), {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

// Date + time format (e.g., "Feb 15, 02:30 PM" / "15 فبراير، 2:30 م")
export function formatDateTime(date: Date | string, locale: string = "en"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString(toDateLocale(locale), {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Time format (e.g., "02:30 PM" / "2:30 م")
export function formatTime(date: Date | string, locale: string = "en"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleTimeString(toDateLocale(locale), {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatRelativeDate(date: Date | string, locale: string = "en"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - d.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return locale === "ar" ? "اليوم" : "Today";
  if (diffDays === 1) return locale === "ar" ? "أمس" : "Yesterday";
  if (diffDays < 7)
    return locale === "ar" ? `منذ ${toLocalDigits(diffDays, locale)} أيام` : `${diffDays} days ago`;

  return formatDate(d, locale);
}

/**
 * Validate a "HH:MM" time string and return parsed [hours, minutes].
 * Throws on invalid input to prevent silent NaN propagation.
 */
function parseTime(time: string, label: string): [number, number] {
  if (!time || !/^\d{1,2}:\d{2}$/.test(time)) {
    throw new Error(`Invalid ${label} time format: "${time}". Expected "HH:MM".`);
  }
  const [h, m] = time.split(":").map(Number);
  if (h < 0 || h > 23 || m < 0 || m > 59) {
    throw new Error(`Invalid ${label} time values: hours=${h}, minutes=${m}`);
  }
  return [h, m];
}

/**
 * Convert a local "HH:MM" time string to UTC "HH:MM".
 * Used for cron reminder scheduling — the user picks local time,
 * but the cron engine runs in UTC.
 *
 * Note: Uses the browser's current UTC offset. Egypt (UTC+2) has no DST,
 * so this is stable for the target deployment region.
 */
export function localTimeToUtc(localTime: string): string {
  const [h, m] = parseTime(localTime, "local");
  const now = new Date();
  now.setHours(h, m, 0, 0);
  const utcH = now.getUTCHours();
  const utcM = now.getUTCMinutes();
  return `${String(utcH).padStart(2, "0")}:${String(utcM).padStart(2, "0")}`;
}

/**
 * Convert a UTC "HH:MM" time string to local "HH:MM".
 * Used to display stored UTC reminder times in the user's local timezone.
 *
 * Note: Uses the browser's current UTC offset. Egypt (UTC+2) has no DST,
 * so this is stable for the target deployment region.
 */
export function utcTimeToLocal(utcTime: string): string {
  const [h, m] = parseTime(utcTime, "UTC");
  const now = new Date();
  now.setUTCHours(h, m, 0, 0);
  const localH = now.getHours();
  const localM = now.getMinutes();
  return `${String(localH).padStart(2, "0")}:${String(localM).padStart(2, "0")}`;
}

// Number utilities
export function formatNumber(num: number, locale: string = "en"): string {
  return num.toLocaleString(toDateLocale(locale));
}

// Calculate days until a date
export function daysUntil(date: Date | string): number {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffTime = d.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Calculate days since a date
export function daysSince(date: Date | string): number {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffTime = now.getTime() - d.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Get current day index (0 = Sunday, 1 = Monday, etc.)
export function getCurrentDayIndex(): number {
  return new Date().getDay();
}

// Format weight with unit
export function formatWeight(weight: number, unit: "kg" | "lb" = "kg"): string {
  if (unit === "lb") {
    return `${(weight * 2.205).toFixed(1)} lb`;
  }
  return `${weight.toFixed(1)} kg`;
}

// Format height with unit
export function formatHeight(height: number, unit: "cm" | "ft" = "cm"): string {
  if (unit === "ft") {
    const feet = Math.floor(height / 30.48);
    const inches = Math.round((height % 30.48) / 2.54);
    return `${feet}'${inches}"`;
  }
  return `${height.toFixed(0)} cm`;
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone (Egyptian format)
export function isValidEgyptianPhone(phone: string): boolean {
  // Egyptian phone: starts with 01 and has 11 digits total
  const phoneRegex = /^01[0125][0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s|-/g, ""));
}

// Generate initials from name
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Truncate text
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

// Sleep utility for delays
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Get device info for bug reports
export function getDeviceInfo(): Record<string, string> {
  if (typeof window === "undefined") return {};

  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenWidth: window.screen.width.toString(),
    screenHeight: window.screen.height.toString(),
    viewportWidth: window.innerWidth.toString(),
    viewportHeight: window.innerHeight.toString(),
  };
}
