import { v } from "convex/values";
import { internalQuery } from "./_generated/server";
import { DEFAULT_CHECK_IN_FREQUENCY_DAYS } from "./constants";

/**
 * Fetch the coach-configured check-in frequency from systemConfig.
 * Falls back to DEFAULT_CHECK_IN_FREQUENCY_DAYS if not configured.
 * Works in any context with direct DB access (queries, mutations).
 */
export async function getCheckInFrequencyDays(ctx: { db: any }): Promise<number> {
  const config = await ctx.db
    .query("systemConfig")
    .withIndex("by_key", (q: any) => q.eq("key", "check_in_frequency_days"))
    .unique();
  const raw = config?.value;
  if (raw == null) return DEFAULT_CHECK_IN_FREQUENCY_DAYS;
  const num = typeof raw === "number" ? raw : Number(raw) || DEFAULT_CHECK_IN_FREQUENCY_DAYS;
  return num > 0 ? num : DEFAULT_CHECK_IN_FREQUENCY_DAYS;
}

// Internal queries used by AI actions to fetch data
export const getProfileInternal = internalQuery({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
  },
});

export const getAssessmentInternal = internalQuery({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return ctx.db
      .query("initialAssessments")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
  },
});

export const getCheckInInternal = internalQuery({
  args: { checkInId: v.id("checkIns") },
  handler: async (ctx, { checkInId }) => {
    return ctx.db.get(checkInId);
  },
});

/**
 * Internal query wrapper for getCheckInFrequencyDays — used by actions
 * (which can't access ctx.db directly and must use ctx.runQuery).
 */
export const getCheckInFrequencyInternal = internalQuery({
  args: {},
  returns: v.number(),
  handler: async (ctx): Promise<number> => {
    return getCheckInFrequencyDays(ctx);
  },
});

export const getTicketInternal = internalQuery({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, { ticketId }) => {
    return ctx.db.get(ticketId);
  },
});

/**
 * Count recent plan generation pairs (meal + workout = 1 pair) for a user since a given timestamp.
 * Used for dynamic plan-generation rate limiting.
 * Returns the MAX of meal plans or workout plans (not the sum),
 * since each check-in generates one of each — counting the sum would
 * exhaust the limit after a single generation cycle.
 */
export const countRecentPlans = internalQuery({
  args: { userId: v.string(), since: v.number() },
  returns: v.number(),
  handler: async (ctx, { userId, since }): Promise<number> => {
    const meals = await ctx.db
      .query("mealPlans")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .filter((q: any) => q.gte(q.field("_creationTime"), since))
      .collect();
    const workouts = await ctx.db
      .query("workoutPlans")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .filter((q: any) => q.gte(q.field("_creationTime"), since))
      .collect();
    // Each generation cycle produces one meal + one workout plan.
    // Use the max count so the limit represents generation cycles, not individual plans.
    return Math.max(meals.length, workouts.length);
  },
});
