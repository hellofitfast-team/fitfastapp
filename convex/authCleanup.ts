import { internalMutation, internalAction } from "./_generated/server";
import { v } from "convex/values";

// ---------------------------------------------------------------------------
// Auth cleanup stubs — BetterAuth manages session cleanup in its component.
// These are kept as no-ops so existing cron references don't break.
// TODO: Remove these and their cron triggers once confirmed unnecessary.
// ---------------------------------------------------------------------------

export const deleteExpiredSessionsBatch = internalMutation({
  args: {},
  returns: v.object({ deletedSessions: v.number(), deletedTokens: v.number() }),
  handler: async (_ctx): Promise<{ deletedSessions: number; deletedTokens: number }> => {
    // BetterAuth manages session expiry in its component namespace
    return { deletedSessions: 0, deletedTokens: 0 };
  },
});

export const runSessionCleanup = internalAction({
  args: {},
  handler: async (_ctx): Promise<void> => {
    // No-op — BetterAuth handles session cleanup
  },
});

export const cleanupRateLimits = internalMutation({
  args: {},
  returns: v.number(),
  handler: async (_ctx): Promise<number> => {
    // BetterAuth manages rate limits in its component namespace
    return 0;
  },
});
