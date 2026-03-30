import { useTranslation } from "react-i18next";
import { useLocation } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { CalendarCheck, TrendingUp, MessageSquare, HelpCircle, LucideIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@fitfast/ui/drawer";
import { cn } from "@fitfast/ui/cn";

interface MoreMenuItemConfig {
  href: string;
  icon: LucideIcon;
  labelKey: string;
}

const MORE_ITEMS: MoreMenuItemConfig[] = [
  { href: "/tracking", icon: CalendarCheck, labelKey: "nav.tracking" },
  { href: "/progress", icon: TrendingUp, labelKey: "nav.progress" },
  { href: "/tickets", icon: MessageSquare, labelKey: "nav.tickets" },
  { href: "/faq", icon: HelpCircle, labelKey: "nav.faq" },
];

interface MoreMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MoreMenu({ open, onOpenChange }: MoreMenuProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{t("nav.more")}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="grid grid-cols-2 gap-3">
            {MORE_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "flex min-h-[60px] items-center gap-3 rounded-xl border p-4 transition-all active:scale-[0.97]",
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card hover:bg-neutral-50",
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{t(item.labelKey)}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
