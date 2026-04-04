import { v } from "convex/values";
import { query, internalMutation } from "./_generated/server";
import { requireCoach } from "./authHelpers";

/** Coach-only: returns last 50 notification logs ordered by sentAt desc */
export const getNotificationLogs = query({
  args: {},
  handler: async (ctx) => {
    await requireCoach(ctx);

    return ctx.db.query("notificationLog").withIndex("by_sentAt").order("desc").take(200);
  },
});

/** Internal: inserts a notification log record */
export const logNotification = internalMutation({
  args: {
    type: v.union(
      v.literal("plan_ready"),
      v.literal("reminder"),
      v.literal("broadcast"),
      v.literal("individual"),
    ),
    title: v.string(),
    body: v.string(),
    recipientCount: v.number(),
    recipientUserId: v.optional(v.string()),
    sentBy: v.string(),
    status: v.union(v.literal("sent"), v.literal("failed"), v.literal("partial")),
    failedCount: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("notificationLog", {
      ...args,
      sentAt: Date.now(),
    });
  },
});
