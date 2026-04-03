import { useId } from "react";
import { useTranslation } from "react-i18next";
import { User, LogOut, Settings } from "lucide-react";
import { NotificationDropdown } from "@/components/notification-dropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@fitfast/ui/dropdown-menu";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { toDateLocale } from "@fitfast/ui/format";
import { LocaleSwitcher } from "@/components/layouts/locale-switcher";

const PAGE_TITLES: Record<string, string> = {
  "/": "nav.dashboard",
  "/meal-plan": "nav.mealPlan",
  "/workout-plan": "nav.workoutPlan",
  "/check-in": "nav.checkIn",
  "/tracking": "nav.tracking",
  "/progress": "nav.progress",
  "/tickets": "nav.tickets",
  "/faq": "nav.faq",
  "/settings": "nav.settings",
};

interface MobileHeaderProps {
  userName?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function MobileHeader({ userName }: MobileHeaderProps) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocale = i18n.language;

  const pathname = location.pathname;
  const isDashboard = pathname === "/";
  const titleKey = PAGE_TITLES[pathname] || "nav.dashboard";

  const menuId = useId();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } finally {
      navigate({ to: "/login", search: { error: undefined, message: undefined } });
    }
  };

  return (
    <header className="border-border bg-card sticky top-0 z-[var(--z-header)] border-b pt-[env(safe-area-inset-top)] lg:hidden">
      <div className="flex h-[var(--height-header)] items-center justify-between px-4">
        {/* Left side -- Greeting or Title */}
        {isDashboard && userName ? (
          <div className="flex items-center gap-3">
            <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white">
              {getInitials(userName)}
            </div>
            <div>
              <p className="text-sm font-bold">{userName.split(" ")[0]}</p>
              <p className="text-muted-foreground text-xs">
                {new Date().toLocaleDateString(toDateLocale(currentLocale), {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <div className="bg-primary h-5 w-0.5 rounded-full" />
            <h1 className="truncate text-lg font-bold tracking-tight">{t(titleKey)}</h1>
          </div>
        )}

        {/* Right side -- Actions */}
        <div className="flex items-center gap-1.5">
          {/* Language Switcher */}
          <LocaleSwitcher />

          {/* Notifications */}
          <NotificationDropdown />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                id={`mobile-user-menu-${menuId}`}
                className="text-muted-foreground hover:text-foreground flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100"
                aria-label="User menu"
              >
                <User className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {userName && (
                <div className="text-muted-foreground px-3 py-2 text-sm font-medium">
                  {userName}
                </div>
              )}
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex cursor-pointer items-center gap-2">
                  <Settings className="h-4 w-4" />
                  {t("nav.settings")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-error-500 focus:text-error-500 flex cursor-pointer items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                {t("auth.logout")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
