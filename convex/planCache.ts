import { v } from "convex/values";
import { internalQuery, internalMutation } from "./_generated/server";

/** Cache TTL: 7 days in milliseconds */
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 604800000

/**
 * Check if a cached meal plan exists for the given cache key.
 * Returns the planData if found and not expired, otherwise null.
 */
export const checkPlanCache = internalQuery({
  args: { cacheKey: v.string() },
  returns: v.union(v.any(), v.null()),
  handler: async (ctx, { cacheKey }): Promise<Record<string, unknown> | null> => {
    const entry = await ctx.db
      .query("planCache")
      .withIndex("by_cacheKey", (q) => q.eq("cacheKey", cacheKey))
      .first();

    if (!entry) return null;

    // Check if the cache entry is still within the TTL
    if (Date.now() - entry.createdAt > CACHE_TTL_MS) {
      return null;
    }

    return entry.planData as Record<string, unknown>;
  },
});

/**
 * Save a validated meal plan to the cache for future reuse.
 */
/** Delete expired cache entries (called by static cron). */
export const cleanupExpired = internalMutation({
  args: {},
  handler: async (ctx) => {
    const cutoff = Date.now() - CACHE_TTL_MS;
    const expired = await ctx.db
      .query("planCache")
      .filter((q) => q.lt(q.field("createdAt"), cutoff))
      .take(100);
    for (const entry of expired) {
      await ctx.db.delete(entry._id);
    }
    if (expired.length > 0) {
      console.log(`[PlanCache] Cleaned up ${expired.length} expired entries`);
    }
  },
});

export const savePlanCache = internalMutation({
  args: {
    cacheKey: v.string(),
    planData: v.any(),
  },
  handler: async (ctx, { cacheKey, planData }) => {
    // Check if an entry with this key already exists to avoid duplicates
    const existing = await ctx.db
      .query("planCache")
      .withIndex("by_cacheKey", (q) => q.eq("cacheKey", cacheKey))
      .first();

    if (existing) {
      // Update existing entry with fresh data
      await ctx.db.patch(existing._id, {
        planData,
        createdAt: Date.now(),
      });
    } else {
      await ctx.db.insert("planCache", {
        cacheKey,
        planData,
        createdAt: Date.now(),
      });
    }
  },
});
