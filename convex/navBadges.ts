import { query } from "./_generated/server";
import { getAuthUserId } from "./auth";
import { getCheckInFrequencyDays } from "./helpers";

/**
 * Single query returning badge counts for navigation items.
 * Used by both mobile bottom nav and desktop top nav.
 *
 * Check-in-due logic mirrors checkIns.ts:checkLockStatus to avoid drift:
 * - Prefers submittedAt over _creationTime for anchor date
 * - Falls back to plan startDate if no check-ins exist
 * - Falls back to assessment creation within 10-min generation window
 */
export const getNavBadges = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return { checkInDue: false, unreadTicketCount: 0 };

    const frequencyDays = await getCheckInFrequencyDays(ctx);

    // Check if check-in is due — mirrors checkLockStatus anchor logic
    const latestCheckIn = await ctx.db
      .query("checkIns")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .order("desc")
      .first();

    // Prefer submittedAt (domain timestamp) over _creationTime (insertion time)
    let anchorTime: number | null =
      latestCheckIn?.submittedAt ?? latestCheckIn?._creationTime ?? null;

    // Fallback: use plan start dates if no check-in exists
    if (!anchorTime) {
      const latestMealPlan = await ctx.db
        .query("mealPlans")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .order("desc")
        .first();
      const latestWorkoutPlan = await ctx.db
        .query("workoutPlans")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .order("desc")
        .first();

      const parseStartDate = (d?: string) => (d ? new Date(d + "T00:00:00Z").getTime() : null);
      const planTimes = [
        parseStartDate(latestMealPlan?.startDate),
        parseStartDate(latestWorkoutPlan?.startDate),
      ].filter((t): t is number => t != null);
      anchorTime = planTimes.length > 0 ? Math.min(...planTimes) : null;
    }

    // Fallback: assessment within 10-min generation window → not due yet
    if (!anchorTime) {
      const GENERATION_WINDOW_MS = 10 * 60 * 1000;
      const assessment = await ctx.db
        .query("initialAssessments")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .first();
      if (assessment && Date.now() - assessment._creationTime < GENERATION_WINDOW_MS) {
        // Within generation window — plans are still being generated, not due
        anchorTime = assessment._creationTime;
      }
    }

    // No anchor at all → check-in is due
    let checkInDue = false;
    if (!anchorTime) {
      checkInDue = true;
    } else {
      const anchorDate = new Date(anchorTime);
      const nextCheckInDate = new Date(anchorDate);
      nextCheckInDate.setDate(nextCheckInDate.getDate() + frequencyDays);
      checkInDue = Date.now() >= nextCheckInDate.getTime();
    }

    // Count tickets where coach responded but client hasn't read yet
    const coachRespondedTickets = await ctx.db
      .query("tickets")
      .withIndex("by_userId_status", (q) => q.eq("userId", userId).eq("status", "coach_responded"))
      .collect();

    return {
      checkInDue,
      unreadTicketCount: coachRespondedTickets.length,
    };
  },
});
