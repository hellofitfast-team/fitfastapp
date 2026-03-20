"use client";

import { useId } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter, usePathname } from "@fitfast/i18n/navigation";
import { useParams } from "next/navigation";
import { Bell, User, LogOut, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@fitfast/ui/dropdown-menu";
import { useAuthActions } from "@convex-dev/auth/react";

interface DesktopHeaderProps {
  userName?: string;
}

export function DesktopHeader({ userName }: DesktopHeaderProps) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;
  const { signOut } = useAuthActions();
  const menuId = useId();

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  const handleLogout = async () => {
    await signOut();
    router.replace("/login");
  };

  return (
    <header className="border-border bg-card sticky top-0 z-40 hidden h-16 border-b lg:block">
      <div className="flex h-full items-center justify-between px-4 lg:px-8">
        {/* Left spacer */}
        <div />

        {/* Right: Lang switch, notifications, user menu */}
        <div className="flex items-center gap-1.5">
          {/* Language Switcher */}
          <button
            className="text-muted-foreground hover:text-foreground flex h-11 w-11 items-center justify-center rounded-lg text-xs font-semibold transition-colors hover:bg-neutral-100"
            onClick={switchLocale}
            aria-label="Switch language"
          >
            {currentLocale === "en" ? "AR" : "EN"}
          </button>

          {/* Notifications */}
          <button
            className="text-muted-foreground hover:text-foreground flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                id={`desktop-user-menu-${menuId}`}
                className="text-muted-foreground hover:text-foreground flex h-11 items-center gap-2 rounded-lg px-3 transition-colors hover:bg-neutral-100"
                aria-label="User menu"
              >
                <User className="h-4 w-4" />
                {userName && <span className="text-sm font-medium">{userName}</span>}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex cursor-pointer items-center gap-2">
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
