import { v } from "convex/values";
import { query } from "./_generated/server";
import { getAuthUserId } from "./auth";
import { requireCoach } from "./helpers";

/**
 * Log an audit event. Call from any mutation context.
 * Resolves the actor's email from their profile automatically.
 */
export async function logAuditEvent(
  ctx: { db: any },
  args: {
    actorUserId: string;
    action: string;
    resourceType: string;
    resourceId?: string;
    details?: Record<string, unknown>;
  },
): Promise<void> {
  const profile = await ctx.db
    .query("profiles")
    .withIndex("by_userId", (q: any) => q.eq("userId", args.actorUserId))
    .unique();

  await ctx.db.insert("auditLog", {
    actorUserId: args.actorUserId,
    actorEmail: profile?.email ?? undefined,
    action: args.action,
    resourceType: args.resourceType,
    resourceId: args.resourceId,
    details: args.details,
    timestamp: Date.now(),
  });
}

/** Coach-only query: recent audit log entries (capped at 200). */
export const getRecentAuditLogs = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { limit }) => {
    await requireCoach(ctx);
    const cap = Math.min(limit ?? 200, 200);
    return ctx.db.query("auditLog").withIndex("by_timestamp").order("desc").take(cap);
  },
});
