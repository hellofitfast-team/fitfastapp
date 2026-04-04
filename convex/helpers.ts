import { v } from "convex/values";
import { internalQuery, internalMutation } from "./_generated/server";
import { components } from "./_generated/api";
import { getAuthUserId } from "./auth";
import { DEFAULT_CHECK_IN_FREQUENCY_DAYS, DEFAULT_WORKOUT_PLAN_DURATION_DAYS } from "./constants";

/**
 * Normalize an email address — trim whitespace and lowercase.
 * Used by ALL mutations that write email fields to ensure consistent storage.
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

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
  const num = typeof raw === "number" ? raw : Number(raw);
  // 0 means "no lock" (useful for testing); NaN or negative falls back to default
  return num >= 0 && !isNaN(num) ? num : DEFAULT_CHECK_IN_FREQUENCY_DAYS;
}

/**
 * Require the current user to be an authenticated coach.
 * Throws if not authenticated or not a coach.
 * Works in queries, mutations, and any context with direct DB access.
 */
export async function requireCoach(ctx: { db: any; auth: any }): Promise<string> {
  const userId = await getAuthUserId(ctx);
  if (!userId) throw new Error("Not authenticated");
  const profile = await ctx.db
    .query("profiles")
    .withIndex("by_userId", (q: any) => q.eq("userId", userId))
    .unique();
  if (!profile?.isCoach) throw new Error("Not authorized");
  return userId;
}

/**
 * Delete auth records for a user via BetterAuth component adapter.
 * Deletes sessions, accounts, and the user record from BetterAuth's
 * isolated component namespace.
 *
 * Must be called from a mutation context (needs ctx.runMutation).
 * The profile and app data should be deleted separately by the caller.
 */
export async function deleteAuthRecords(ctx: { runMutation: any }, userId: string): Promise<void> {
  const paginationOpts = { numItems: 100, cursor: null };

  // Best-effort cleanup: delete each record type independently so a failure
  // in one step doesn't prevent the others from being cleaned up.
  const errors: string[] = [];

  try {
    await ctx.runMutation(components.betterAuth.adapter.deleteMany, {
      input: { model: "session", where: [{ field: "userId", value: userId }] },
      paginationOpts,
    });
  } catch (e) {
    errors.push(`sessions: ${e}`);
  }

  try {
    await ctx.runMutation(components.betterAuth.adapter.deleteMany, {
      input: { model: "account", where: [{ field: "userId", value: userId }] },
      paginationOpts,
    });
  } catch (e) {
    errors.push(`accounts: ${e}`);
  }

  try {
    await ctx.runMutation(components.betterAuth.adapter.deleteOne, {
      input: { model: "user", where: [{ field: "_id", value: userId }] },
    });
  } catch (e) {
    errors.push(`user: ${e}`);
  }

  if (errors.length > 0) {
    console.warn(`[deleteAuthRecords] Partial cleanup for ${userId}: ${errors.join("; ")}`);
  }
}

/**
 * Delete auth records by email — finds the BetterAuth user by email,
 * then delegates to deleteAuthRecords.
 */
export async function deleteAuthRecordsByEmail(
  ctx: { runMutation: any; runQuery: any },
  email: string,
): Promise<void> {
  // Find the BetterAuth user by email
  const user = await ctx.runQuery(components.betterAuth.adapter.findOne, {
    model: "user",
    where: [{ field: "email", value: email.toLowerCase() }],
  });
  if (!user) return; // No auth record for this email
  await deleteAuthRecords(ctx, user._id);
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

/** Coach profile lookup for actions — checks coachProfiles first, falls back to legacy */
export const getCoachProfileInternal = internalQuery({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const coachProfile = await ctx.db
      .query("coachProfiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (coachProfile) return { ...coachProfile, isCoach: true as const };

    const legacy = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    return legacy;
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
 * Meal plan duration always equals check-in frequency
 * (plans regenerate every check-in, so a separate config is redundant).
 */
export async function getMealPlanDurationDays(ctx: { db: any }): Promise<number> {
  return getCheckInFrequencyDays(ctx);
}

/**
 * Fetch the coach-configured workout plan duration from systemConfig.
 * Fallback chain: workout_plan_duration_days → check_in_frequency_days → DEFAULT_WORKOUT_PLAN_DURATION_DAYS
 */
export async function getWorkoutPlanDurationDays(ctx: { db: any }): Promise<number> {
  const config = await ctx.db
    .query("systemConfig")
    .withIndex("by_key", (q: any) => q.eq("key", "workout_plan_duration_days"))
    .unique();
  const raw = config?.value;
  if (raw != null) {
    const num = typeof raw === "number" ? raw : Number(raw);
    if (!isNaN(num) && num >= 1) return num;
  }
  const freq = await getCheckInFrequencyDays(ctx);
  return freq > 0 ? freq : DEFAULT_WORKOUT_PLAN_DURATION_DAYS;
}

/** Internal query wrapper for getMealPlanDurationDays — used by actions */
export const getMealPlanDurationInternal = internalQuery({
  args: {},
  returns: v.number(),
  handler: async (ctx): Promise<number> => {
    return getMealPlanDurationDays(ctx);
  },
});

/** Internal query wrapper for getWorkoutPlanDurationDays — used by actions */
export const getWorkoutPlanDurationInternal = internalQuery({
  args: {},
  returns: v.number(),
  handler: async (ctx): Promise<number> => {
    return getWorkoutPlanDurationDays(ctx);
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
