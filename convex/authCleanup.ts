import { internalMutation, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

// ---------------------------------------------------------------------------
// Batch-delete expired auth sessions and their refresh tokens
// ---------------------------------------------------------------------------

const SESSION_BATCH_SIZE = 500;

export const deleteExpiredSessionsBatch = internalMutation({
  args: {},
  returns: v.object({ deletedSessions: v.number(), deletedTokens: v.number() }),
  handler: async (ctx): Promise<{ deletedSessions: number; deletedTokens: number }> => {
    const now = Date.now();
    let deletedSessions = 0;
    let deletedTokens = 0;

    // Grab oldest sessions first to limit memory usage
    const sessions = await ctx.db
      .query("authSessions")
      .order("asc")
      .take(SESSION_BATCH_SIZE * 2);

    // Filter to sessions that are expired or orphaned, per-session user lookup
    const toDelete = [];
    for (const session of sessions) {
      if (session.expirationTime < now) {
        toDelete.push(session);
      } else {
        // Check if user still exists (point lookup, not full table scan)
        const user = await ctx.db.get(session.userId);
        if (!user) toDelete.push(session);
      }
      if (toDelete.length >= SESSION_BATCH_SIZE) break;
    }

    for (const session of toDelete) {
      // Cascade-delete refresh tokens for this session
      const tokens = await ctx.db
        .query("authRefreshTokens")
        .withIndex("sessionId", (q) => q.eq("sessionId", session._id))
        .collect();
      for (const token of tokens) {
        await ctx.db.delete(token._id);
        deletedTokens++;
      }
      await ctx.db.delete(session._id);
      deletedSessions++;
    }

    return { deletedSessions, deletedTokens };
  },
});

// ---------------------------------------------------------------------------
// Orchestrator — runs batches until all expired sessions are gone
// ---------------------------------------------------------------------------

export const cleanupExpiredSessions = internalAction({
  args: {},
  handler: async (ctx): Promise<void> => {
    let totalSessions = 0;
    let totalTokens = 0;

    // Keep running batches until nothing left to clean
    for (let i = 0; i < 20; i++) {
      const result: { deletedSessions: number; deletedTokens: number } = await ctx.runMutation(
        internal.authCleanup.deleteExpiredSessionsBatch,
        {},
      );
      totalSessions += result.deletedSessions;
      totalTokens += result.deletedTokens;

      if (result.deletedSessions === 0) break;
    }

    if (totalSessions > 0) {
      console.log(
        `[AuthCleanup] Purged ${totalSessions} expired sessions and ${totalTokens} refresh tokens`,
      );
    }
  },
});

// ---------------------------------------------------------------------------
// Dev cleanup utility: remove orphaned data and E2E test debris
// ---------------------------------------------------------------------------

export const devCleanup = internalMutation({
  args: {},
  returns: v.object({
    deletedExerciseLogs: v.number(),
    deletedTestSignups: v.number(),
    deletedRateLimits: v.number(),
  }),
  handler: async (
    ctx,
  ): Promise<{
    deletedExerciseLogs: number;
    deletedTestSignups: number;
    deletedRateLimits: number;
  }> => {
    let deletedExerciseLogs = 0;
    let deletedTestSignups = 0;
    let deletedRateLimits = 0;

    // 1. Delete orphaned exercise logs (references non-existent users)
    const exerciseLogs = await ctx.db.query("exerciseLogs").collect();
    for (const log of exerciseLogs) {
      const user = await ctx.db.get(log.userId as any);
      if (!user) {
        await ctx.db.delete(log._id);
        deletedExerciseLogs++;
      }
    }

    // 2. Delete E2E test pendingSignups
    const signups = await ctx.db.query("pendingSignups").collect();
    for (const s of signups) {
      if (s.email.endsWith("@test.com")) {
        await ctx.db.delete(s._id);
        deletedTestSignups++;
      }
    }

    // 3. Clear stale auth rate limits (older than 24h)
    const staleThreshold = Date.now() - 24 * 60 * 60 * 1000;
    const rateLimits = await ctx.db.query("authRateLimits").collect();
    for (const r of rateLimits) {
      if (r.lastAttemptTime < staleThreshold) {
        await ctx.db.delete(r._id);
        deletedRateLimits++;
      }
    }

    return { deletedExerciseLogs, deletedTestSignups, deletedRateLimits };
  },
});
