import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export function useNotifications() {
  const { isAuthenticated } = useConvexAuth();
  const notifications = useQuery(
    api.inAppNotifications.getMyNotifications,
    isAuthenticated ? {} : "skip",
  );
  const unreadCount = useQuery(
    api.inAppNotifications.getUnreadCount,
    isAuthenticated ? {} : "skip",
  );

  return {
    notifications: notifications ?? [],
    unreadCount: unreadCount ?? 0,
    isLoading: isAuthenticated && notifications === undefined,
  };
}
