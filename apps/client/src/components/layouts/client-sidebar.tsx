"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@fitfast/i18n/navigation";
import {
  Home,
  UtensilsCrossed,
  Dumbbell,
  ClipboardCheck,
  CalendarCheck,
  TrendingUp,
  MessageSquare,
  HelpCircle,
  Settings,
  X,
  LucideIcon,
} from "lucide-react";
import { cn } from "@fitfast/ui/cn";
import { useNavBadges } from "@/hooks/useNavBadges";

function NavItem({
  href,
  icon: Icon,
  label,
  isActive,
  badge,
  onClick,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  badge?: "dot" | number;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "mx-3 flex min-h-11 items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary/10 text-primary"
            : "text-stone-400 hover:bg-white/5 hover:text-stone-200",
        )}
      >
        <Icon className="h-[18px] w-[18px] shrink-0" />
        <span className="flex-1">{label}</span>
        {badge === "dot" && <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />}
        {typeof badge === "number" && badge > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
            {badge > 9 ? "9+" : badge}
          </span>
        )}
      </Link>
    </li>
  );
}

const NAV_ITEMS: { href: string; icon: LucideIcon; labelKey: string }[] = [
  { href: "/", icon: Home, labelKey: "nav.dashboard" },
  { href: "/meal-plan", icon: UtensilsCrossed, labelKey: "nav.mealPlan" },
  { href: "/workout-plan", icon: Dumbbell, labelKey: "nav.workoutPlan" },
  { href: "/check-in", icon: ClipboardCheck, labelKey: "nav.checkIn" },
  { href: "/tracking", icon: CalendarCheck, labelKey: "nav.tracking" },
  { href: "/progress", icon: TrendingUp, labelKey: "nav.progress" },
  { href: "/tickets", icon: MessageSquare, labelKey: "nav.tickets" },
  { href: "/faq", icon: HelpCircle, labelKey: "nav.faq" },
  { href: "/settings", icon: Settings, labelKey: "nav.settings" },
];

interface ClientSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ClientSidebar({ isOpen = false, onClose }: ClientSidebarProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";
  const { checkInDue, unreadTicketCount } = useNavBadges();

  const getBadge = (href: string): "dot" | number | undefined => {
    if (href === "/check-in" && checkInDue) return "dot";
    if (href === "/tickets" && unreadTicketCount > 0) return unreadTicketCount;
    return undefined;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "flex w-64 flex-col bg-stone-900 transition-transform duration-300",
          // Mobile: fixed overlay sidebar
          "fixed inset-y-0 start-0 z-50",
          // Desktop: permanent sidebar in flow
          "lg:relative lg:z-auto lg:shrink-0",
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0 rtl:translate-x-full lg:rtl:translate-x-0",
        )}
      >
        {/* Logo area */}
        <div className="flex h-16 items-center justify-between px-5">
          <Link href="/" className="group flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="FitFast"
              className="h-7 w-7 transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="text-[15px] font-black tracking-tighter text-white uppercase italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fit<span className="text-[#FF4500]">Fast</span>
            </span>
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-stone-500 transition-colors hover:bg-white/5 hover:text-stone-300 lg:hidden"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation" className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathWithoutLocale === "/"
                  : pathWithoutLocale.startsWith(item.href);

              return (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={t(item.labelKey)}
                  isActive={isActive}
                  badge={getBadge(item.href)}
                  onClick={onClose}
                />
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/5 px-5 py-4">
          <p className="text-[10px] font-medium text-stone-600">FitFast Client v1.0</p>
        </div>
      </aside>
    </>
  );
}
