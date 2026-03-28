import { useTranslation } from "react-i18next";
import { useLocation, Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  UserPlus,
  Users,
  MessageSquare,
  HelpCircle,
  BookOpen,
  Bell,
  Settings,
  Dumbbell,
  X,
  LucideIcon,
} from "lucide-react";
import { cn } from "@fitfast/ui/cn";

function NavItem({
  to,
  icon: Icon,
  label,
  isActive,
  badge,
  onClick,
}: {
  to: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  badge?: number;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        to={to}
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
        {badge !== undefined && badge > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
            {badge}
          </span>
        )}
      </Link>
    </li>
  );
}

const adminNavItems = [
  { to: "/", icon: LayoutDashboard, labelKey: "adminNav.dashboard" },
  { to: "/signups", icon: UserPlus, labelKey: "adminNav.signups" },
  { to: "/clients", icon: Users, labelKey: "adminNav.clients" },
  { to: "/tickets", icon: MessageSquare, labelKey: "adminNav.tickets" },
  { to: "/faqs", icon: HelpCircle, labelKey: "adminNav.faqs" },
  { to: "/knowledge", icon: BookOpen, labelKey: "adminNav.knowledge" },
  { to: "/exercises", icon: Dumbbell, labelKey: "adminNav.exercises" },
  { to: "/notifications", icon: Bell, labelKey: "adminNav.notifications" },
  { to: "/settings", icon: Settings, labelKey: "adminNav.settings" },
];

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  pendingSignups?: number;
  openTickets?: number;
}

export function AdminSidebar({
  isOpen = false,
  onClose,
  pendingSignups = 0,
  openTickets = 0,
}: AdminSidebarProps) {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const badges: Record<string, number> = {
    "/signups": pendingSignups,
    "/tickets": openTickets,
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
          "fixed inset-y-0 start-0 z-50",
          "lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:shrink-0",
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0 rtl:translate-x-full lg:rtl:translate-x-0",
        )}
      >
        {/* Logo area */}
        <div className="flex h-16 items-center justify-between px-5">
          <div className="group flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="FitFast"
              className="h-7 w-7 transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <span
                className="text-[15px] font-black tracking-tighter text-white uppercase italic"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Fit<span className="text-[#FF4500]">Fast</span>
              </span>
              <p className="-mt-0.5 text-[10px] font-medium text-stone-500">
                {t("admin.coachPanel")}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-stone-500 transition-colors hover:bg-white/5 hover:text-stone-300 lg:hidden"
            onClick={onClose}
            aria-label={t("common.close")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {adminNavItems.map((item) => {
              const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);

              return (
                <NavItem
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  label={t(item.labelKey)}
                  isActive={isActive}
                  badge={badges[item.to]}
                  onClick={onClose}
                />
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/5 px-5 py-4">
          <p className="text-[10px] font-medium text-stone-600">{t("admin.coachPanelVersion")}</p>
        </div>
      </aside>
    </>
  );
}
