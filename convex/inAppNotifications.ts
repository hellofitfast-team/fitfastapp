import { v } from "convex/values";
import { query, mutation, internalMutation } from "./_generated/server";
import { getAuthUserId } from "./auth";

const notificationType = v.union(
  v.literal("plan_ready"),
  v.literal("reminder"),
  v.literal("broadcast"),
  v.literal("individual"),
);

/** Internal: create a single in-app notification */
export const createInAppNotification = internalMutation({
  args: {
    userId: v.string(),
    type: notificationType,
    title: v.string(),
    body: v.string(),
    url: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<void> => {
    await ctx.db.insert("inAppNotifications", {
      ...args,
      isRead: false,
      createdAt: Date.now(),
    });
  },
});

/** Internal: create in-app notifications for multiple users (broadcast) */
export const createBulkInAppNotifications = internalMutation({
  args: {
    userIds: v.array(v.string()),
    title: v.string(),
    body: v.string(),
  },
  handler: async (ctx, { userIds, title, body }): Promise<void> => {
    const now = Date.now();
    for (const userId of userIds) {
      await ctx.db.insert("inAppNotifications", {
        userId,
        type: "broadcast",
        title,
        body,
        isRead: false,
        createdAt: now,
      });
    }
  },
});

/** Client query: get 20 most recent notifications */
export const getMyNotifications = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return ctx.db
      .query("inAppNotifications")
      .withIndex("by_userId_createdAt", (q) => q.eq("userId", userId))
      .order("desc")
      .take(20);
  },
});

/** Client query: unread count for badge */
export const getUnreadCount = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return 0;

    const unread = await ctx.db
      .query("inAppNotifications")
      .withIndex("by_userId_isRead", (q) => q.eq("userId", userId).eq("isRead", false))
      .take(100);
    return unread.length;
  },
});

/** Client mutation: mark a single notification as read */
export const markAsRead = mutation({
  args: { notificationId: v.id("inAppNotifications") },
  handler: async (ctx, { notificationId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const notif = await ctx.db.get(notificationId);
    if (!notif || notif.userId !== userId) throw new Error("Not found");

    if (!notif.isRead) {
      await ctx.db.patch(notificationId, { isRead: true });
    }
  },
});

/** Client mutation: mark all notifications as read */
export const markAllAsRead = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Cap at 1000 to stay within mutation limits
    const unread = await ctx.db
      .query("inAppNotifications")
      .withIndex("by_userId_isRead", (q) => q.eq("userId", userId).eq("isRead", false))
      .take(1000);

    for (const notif of unread) {
      await ctx.db.patch(notif._id, { isRead: true });
    }
  },
});
