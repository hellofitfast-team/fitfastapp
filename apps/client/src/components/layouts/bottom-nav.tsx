"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@fitfast/i18n/navigation";
import {
  Home,
  UtensilsCrossed,
  Dumbbell,
  ClipboardCheck,
  MoreHorizontal,
  LucideIcon,
} from "lucide-react";
import { cn } from "@fitfast/ui/cn";
import { useKeyboardVisible } from "@/hooks/useKeyboardVisible";
import { useNavBadges } from "@/hooks/useNavBadges";

interface NavItemConfig {
  href: string;
  icon: LucideIcon;
  labelKey: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { href: "/", icon: Home, labelKey: "nav.dashboard" },
  { href: "/meal-plan", icon: UtensilsCrossed, labelKey: "nav.mealPlan" },
  // Check-In is the FAB -- not in this array
  { href: "/workout-plan", icon: Dumbbell, labelKey: "nav.workoutPlan" },
];

interface BottomNavProps {
  onMoreClick?: () => void;
}

export function BottomNav({ onMoreClick }: BottomNavProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const keyboardVisible = useKeyboardVisible();
  const { checkInDue, unreadTicketCount } = useNavBadges();

  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";
  const isCheckInActive =
    pathWithoutLocale === "/check-in" || pathWithoutLocale.startsWith("/check-in/");

  if (keyboardVisible) return null;

  return (
    <nav className="bg-card/95 fixed inset-x-0 bottom-0 z-[var(--z-bottom-nav)] mx-3 mb-[max(0.5rem,env(safe-area-inset-bottom))] rounded-2xl shadow-lg backdrop-blur-md lg:hidden">
      <div className="relative flex h-[var(--height-bottom-nav)] items-end">
        {/* Left two items */}
        {NAV_ITEMS.slice(0, 2).map((item) => {
          const isActive =
            pathWithoutLocale === item.href ||
            (item.href !== "/" && pathWithoutLocale.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-[44px] flex-1 flex-col items-center justify-center pt-2 pb-2"
            >
              <item.icon
                className={cn("h-5 w-5", isActive ? "text-primary" : "text-neutral-400")}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={cn(
                  "mt-1 text-[10px] font-semibold",
                  isActive ? "text-primary" : "text-neutral-400",
                )}
              >
                {t(item.labelKey)}
              </span>
              {isActive && <div className="bg-primary mt-0.5 h-1 w-4 rounded-full" />}
            </Link>
          );
        })}

        {/* Center FAB -- Check-In */}
        <div className="flex flex-1 items-center justify-center">
          <Link href="/check-in" className="relative -mt-7 flex flex-col items-center">
            <div
              className={cn(
                "relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_4px_20px_rgba(255,69,0,0.4)] transition-transform active:scale-[0.97]",
                isCheckInActive ? "bg-primary-dark" : "bg-primary",
              )}
            >
              <ClipboardCheck className="h-6 w-6" />
              {checkInDue && (
                <span className="bg-error-500 border-card absolute end-0 top-0 h-3 w-3 rounded-full border-2" />
              )}
            </div>
            <span
              className={cn(
                "mt-1 text-[10px] font-semibold",
                isCheckInActive ? "text-primary" : "text-primary",
              )}
            >
              {t("nav.checkIn")}
            </span>
          </Link>
        </div>

        {/* Right item */}
        {NAV_ITEMS.slice(2).map((item) => {
          const isActive =
            pathWithoutLocale === item.href ||
            (item.href !== "/" && pathWithoutLocale.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-[44px] flex-1 flex-col items-center justify-center pt-2 pb-2"
            >
              <item.icon
                className={cn("h-5 w-5", isActive ? "text-primary" : "text-neutral-400")}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={cn(
                  "mt-1 text-[10px] font-semibold",
                  isActive ? "text-primary" : "text-neutral-400",
                )}
              >
                {t(item.labelKey)}
              </span>
              {isActive && <div className="bg-primary mt-0.5 h-1 w-4 rounded-full" />}
            </Link>
          );
        })}

        {/* More button */}
        <button
          onClick={onMoreClick}
          className="hover:text-foreground relative flex min-h-[44px] flex-1 flex-col items-center justify-center pt-2 pb-2 text-neutral-400 transition-colors"
        >
          <MoreHorizontal className="h-5 w-5" strokeWidth={2} />
          <span className="mt-1 text-[10px] font-semibold">{t("nav.more")}</span>
          {unreadTicketCount > 0 && (
            <span className="bg-error-500 absolute end-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white">
              {unreadTicketCount > 9 ? "9+" : unreadTicketCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
