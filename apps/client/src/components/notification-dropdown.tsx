import { useQuery, useMutation, useConvexAuth } from "convex/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";
import { Bell, Utensils, Dumbbell, Megaphone, MessageSquare, CheckCheck } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@fitfast/ui/dropdown-menu";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";

const TYPE_ICONS = {
  plan_ready: Dumbbell,
  reminder: Utensils,
  broadcast: Megaphone,
  individual: MessageSquare,
} as const;

function getRelativeTime(
  timestamp: number,
  t: (key: string, values?: Record<string, number>) => string,
): string {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return t("justNow");
  if (minutes < 60) return t("minutesAgo", { count: minutes });
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return t("hoursAgo", { count: hours });
  const days = Math.floor(hours / 24);
  return t("daysAgo", { count: days });
}

export function NotificationDropdown() {
  const { t } = useTranslation("translation", { keyPrefix: "notificationCenter" });
  const navigate = useNavigate();
  const { isAuthenticated } = useConvexAuth();
  const notifications = useQuery(
    api.inAppNotifications.getMyNotifications,
    isAuthenticated ? {} : "skip",
  );
  const unreadCount = useQuery(
    api.inAppNotifications.getUnreadCount,
    isAuthenticated ? {} : "skip",
  );
  const markAsRead = useMutation(api.inAppNotifications.markAsRead).withOptimisticUpdate(
    (localStore, args) => {
      const current = localStore.getQuery(api.inAppNotifications.getMyNotifications, {});
      if (current !== undefined) {
        localStore.setQuery(
          api.inAppNotifications.getMyNotifications,
          {},
          current.map((n) => (n._id === args.notificationId ? { ...n, isRead: true } : n)),
        );
      }
      const count = localStore.getQuery(api.inAppNotifications.getUnreadCount, {});
      if (count !== undefined && count > 0) {
        localStore.setQuery(api.inAppNotifications.getUnreadCount, {}, count - 1);
      }
    },
  );
  const markAllAsRead = useMutation(api.inAppNotifications.markAllAsRead).withOptimisticUpdate(
    (localStore) => {
      const current = localStore.getQuery(api.inAppNotifications.getMyNotifications, {});
      if (current !== undefined) {
        localStore.setQuery(
          api.inAppNotifications.getMyNotifications,
          {},
          current.map((n) => ({ ...n, isRead: true })),
        );
      }
      localStore.setQuery(api.inAppNotifications.getUnreadCount, {}, 0);
    },
  );

  const handleClick = async (id: Id<"inAppNotifications">, url?: string, isRead?: boolean) => {
    if (!isRead) {
      await markAsRead({ notificationId: id });
    }
    if (url) {
      navigate({ to: url });
    }
  };

  const handleMarkAllRead = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await markAllAsRead();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="text-muted-foreground hover:text-foreground relative flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100"
          aria-label={t("title")}
        >
          <Bell className="h-4 w-4" />
          {(unreadCount ?? 0) > 0 && (
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        {/* Header */}
        <div className="border-border flex items-center justify-between border-b px-4 py-3">
          <h3 className="text-sm font-semibold">{t("title")}</h3>
          {(unreadCount ?? 0) > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="text-primary flex items-center gap-1 text-xs font-medium hover:underline"
            >
              <CheckCheck className="h-3 w-3" />
              {t("markAllRead")}
            </button>
          )}
        </div>

        {/* Notification list */}
        <div className="max-h-96 overflow-y-auto">
          {!notifications || notifications.length === 0 ? (
            <div className="text-muted-foreground flex flex-col items-center gap-2 py-10 text-sm">
              <Bell className="h-8 w-8 opacity-30" />
              <p>{t("empty")}</p>
            </div>
          ) : (
            notifications.map((notif) => {
              const Icon = TYPE_ICONS[notif.type as keyof typeof TYPE_ICONS] ?? Bell;
              return (
                <button
                  key={notif._id}
                  onClick={() => handleClick(notif._id, notif.url, notif.isRead)}
                  className={`hover:bg-muted/50 flex w-full items-start gap-3 px-4 py-3 text-start transition-colors ${
                    !notif.isRead ? "bg-primary/5" : ""
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      !notif.isRead
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`truncate text-sm ${!notif.isRead ? "font-semibold" : "font-medium"}`}
                    >
                      {notif.title}
                    </p>
                    <p className="text-muted-foreground truncate text-xs">{notif.body}</p>
                    <p className="text-muted-foreground mt-0.5 text-xs opacity-70">
                      {getRelativeTime(notif.createdAt, t)}
                    </p>
                  </div>
                  {!notif.isRead && (
                    <span className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
                  )}
                </button>
              );
            })
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
