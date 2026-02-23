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
    pathWithoutLocale === "/check-in" ||
    pathWithoutLocale.startsWith("/check-in/");

  if (keyboardVisible) return null;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[var(--z-bottom-nav)] mx-3 mb-[max(0.5rem,env(safe-area-inset-bottom))] rounded-2xl bg-card/95 shadow-lg backdrop-blur-md lg:hidden"
    >
      <div className="flex items-end h-[var(--height-bottom-nav)] relative">
        {/* Left two items */}
        {NAV_ITEMS.slice(0, 2).map((item) => {
          const isActive =
            pathWithoutLocale === item.href ||
            (item.href !== "/" && pathWithoutLocale.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center justify-center pb-2 pt-2 min-h-[44px]"
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-primary" : "text-neutral-400"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={cn(
                  "text-[10px] mt-1 font-semibold",
                  isActive ? "text-primary" : "text-neutral-400"
                )}
              >
                {t(item.labelKey)}
              </span>
              {isActive && (
                <div className="h-1 w-4 rounded-full bg-primary mt-0.5" />
              )}
            </Link>
          );
        })}

        {/* Center FAB -- Check-In */}
        <div className="flex flex-1 items-center justify-center">
          <Link href="/check-in" className="relative -mt-7 flex flex-col items-center">
            <div
              className={cn(
                "relative flex h-14 w-14 items-center justify-center rounded-full shadow-[0_4px_20px_rgba(255,69,0,0.4)] text-white transition-transform active:scale-[0.97]",
                isCheckInActive ? "bg-primary-dark" : "bg-primary"
              )}
            >
              <ClipboardCheck className="h-6 w-6" />
              {checkInDue && (
                <span className="absolute top-0 end-0 h-3 w-3 rounded-full bg-error-500 border-2 border-card" />
              )}
            </div>
            <span
              className={cn(
                "text-[10px] font-semibold mt-1",
                isCheckInActive ? "text-primary" : "text-primary"
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
              className="flex flex-1 flex-col items-center justify-center pb-2 pt-2 min-h-[44px]"
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-primary" : "text-neutral-400"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={cn(
                  "text-[10px] mt-1 font-semibold",
                  isActive ? "text-primary" : "text-neutral-400"
                )}
              >
                {t(item.labelKey)}
              </span>
              {isActive && (
                <div className="h-1 w-4 rounded-full bg-primary mt-0.5" />
              )}
            </Link>
          );
        })}

        {/* More button */}
        <button
          onClick={onMoreClick}
          className="relative flex flex-1 flex-col items-center justify-center pb-2 pt-2 text-neutral-400 hover:text-foreground transition-colors min-h-[44px]"
        >
          <MoreHorizontal className="h-5 w-5" strokeWidth={2} />
          <span className="text-[10px] mt-1 font-semibold">
            {t("nav.more")}
          </span>
          {unreadTicketCount > 0 && (
            <span className="absolute -top-1 end-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-error-500 text-[10px] font-bold text-white px-1">
              {unreadTicketCount > 9 ? "9+" : unreadTicketCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
