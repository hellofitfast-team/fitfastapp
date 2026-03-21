import { internalAction, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import { getWorkoutPlanDurationDays } from "./helpers";

// ---------------------------------------------------------------------------
// Daily cron: find clients whose workout plan has expired and renew
// ---------------------------------------------------------------------------

/**
 * Runs daily via cron. Scans all active clients, checks if their current
 * workout plan has expired (endDate < today), and enqueues a new plan
 * generation for each one.
 *
 * Workout plans are fully decoupled from check-ins. Check-in data is
 * accumulated between plans and fed into the next generation for adaptive
 * progression.
 */
export const renewExpiredWorkoutPlans = internalMutation({
  args: {},
  handler: async (ctx): Promise<void> => {
    const today = new Date().toISOString().split("T")[0];
    const workoutDuration = await getWorkoutPlanDurationDays(ctx);

    // Find all active client profiles
    const activeProfiles = await ctx.db
      .query("profiles")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .filter((q) => q.eq(q.field("isCoach"), false))
      .collect();

    let renewalCount = 0;

    for (const profile of activeProfiles) {
      // Get the user's latest workout plan
      const latestPlan = await ctx.db
        .query("workoutPlans")
        .withIndex("by_userId", (q) => q.eq("userId", profile.userId))
        .order("desc")
        .first();

      // Skip if no plan exists (user hasn't completed initial assessment)
      if (!latestPlan) continue;

      // Skip if plan hasn't expired yet
      if (latestPlan.endDate >= today) continue;

      // Enqueue workout plan generation with staggered delay (30s apart)
      // to avoid burst-firing many AI calls simultaneously
      const language = profile.language ?? "en";
      const delayMs = renewalCount * 30_000;
      await ctx.scheduler.runAfter(
        delayMs,
        internal.workoutPlanRenewal.generateRenewalWorkoutPlan,
        {
          userId: profile.userId,
          language: language as "en" | "ar",
          planDuration: workoutDuration,
        },
      );

      renewalCount++;
    }

    if (renewalCount > 0) {
      console.log(
        `[WorkoutRenewal] Scheduled ${renewalCount} workout plan renewals (duration: ${workoutDuration} days)`,
      );
    }
  },
});

// ---------------------------------------------------------------------------
// Generate a renewal workout plan with enriched context
// ---------------------------------------------------------------------------

/**
 * Generates a new workout plan using all accumulated data since the last plan.
 * Called by the daily cron for each client whose plan has expired.
 */
export const generateRenewalWorkoutPlan = internalAction({
  args: {
    userId: v.string(),
    language: v.union(v.literal("en"), v.literal("ar")),
    planDuration: v.number(),
  },
  handler: async (ctx, { userId, language, planDuration }): Promise<void> => {
    try {
      // Generate the workout plan (reuses existing AI handler)
      const workoutPlanId = await ctx.runAction(internal.ai.generateWorkoutPlanInternal, {
        userId,
        // No checkInId — this is a standalone renewal, not tied to a check-in
        language,
        planDuration,
      });

      // Notify user that new workout plan is ready
      try {
        await ctx.runAction(internal.notifications.sendPlanReadyNotification, {
          userId,
          workoutPlanId,
        });
      } catch {
        // Notification is best-effort — plan is already saved
      }

      console.log(`[WorkoutRenewal] Generated workout plan ${workoutPlanId} for user ${userId}`);
    } catch (err) {
      console.error(
        `[WorkoutRenewal] Failed to generate workout plan for user ${userId}:`,
        err instanceof Error ? err.message : err,
      );
    }
  },
});
