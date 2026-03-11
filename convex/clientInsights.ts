import { v } from "convex/values";
import { query } from "./_generated/server";
import { requireCoach } from "./helpers";

interface CheckInSummary {
  submittedAt: number;
  weight?: number;
  energyLevel?: number;
  sleepQuality?: number;
  dietaryAdherence?: number;
}

interface ClientInsights {
  lastCheckInDate: number | null;
  checkInCount: number;
  expectedCheckIns: number;
  checkInHistory: CheckInSummary[];
  weightTrend: { date: number; weight: number }[];
  initialWeight: number | null;
  latestWeight: number | null;
  mealCompletionRate: number | null;
  workoutCompletionRate: number | null;
  openTicketsCount: number;
  totalTicketsCount: number;
  lastTicketDate: number | null;
  pushSubscriptionActive: boolean;
  assessmentVersion: number;
  lastAssessmentChangeDate: number | null;
  /** Exercise logging summary — count of detailed logs and whether any exist */
  exerciseLogCount: number;
  hasDetailedLogs: boolean;
}

/** Aggregates all coach-relevant insight data for a client in one query. */
export const getClientInsights = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }): Promise<ClientInsights> => {
    await requireCoach(ctx);

    const [
      checkIns,
      tickets,
      subscription,
      mealCompletions,
      workoutCompletions,
      profile,
      config,
      latestHistoryEntry,
      recentExerciseLogs,
    ] = await Promise.all([
      ctx.db
        .query("checkIns")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .collect(),
      ctx.db
        .query("tickets")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .collect(),
      ctx.db
        .query("pushSubscriptions")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .first(),
      ctx.db
        .query("mealCompletions")
        .withIndex("by_userId_date", (q) => q.eq("userId", userId))
        .collect(),
      ctx.db
        .query("workoutCompletions")
        .withIndex("by_userId_date", (q) => q.eq("userId", userId))
        .collect(),
      ctx.db
        .query("profiles")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .unique(),
      ctx.db
        .query("systemConfig")
        .withIndex("by_key", (q) => q.eq("key", "check_in_frequency_days"))
        .unique(),
      ctx.db
        .query("assessmentHistory")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .order("desc")
        .first(),
      // Exercise logs — take a small sample to check if detailed logging exists
      ctx.db
        .query("exerciseLogs")
        .withIndex("by_userId_date", (q) => q.eq("userId", userId))
        .order("desc")
        .take(100),
    ]);

    // Sort check-ins by date descending
    const sortedCheckIns = checkIns.sort(
      (a, b) => (b.submittedAt ?? b._creationTime) - (a.submittedAt ?? a._creationTime),
    );

    const lastCheckInDate =
      sortedCheckIns.length > 0
        ? (sortedCheckIns[0].submittedAt ?? sortedCheckIns[0]._creationTime)
        : null;

    // Check-in history (last 10)
    const checkInHistory: CheckInSummary[] = sortedCheckIns.slice(0, 10).map((ci) => ({
      submittedAt: ci.submittedAt ?? ci._creationTime,
      weight: ci.weight ?? undefined,
      energyLevel: ci.energyLevel ?? undefined,
      sleepQuality: ci.sleepQuality ?? undefined,
      dietaryAdherence: ci.dietaryAdherence ?? undefined,
    }));

    // Weight trend (all check-ins with weight, chronological)
    const weightTrend = checkIns
      .filter((ci) => ci.weight != null)
      .map((ci) => ({
        date: ci.submittedAt ?? ci._creationTime,
        weight: ci.weight!,
      }))
      .sort((a, b) => a.date - b.date);

    const initialWeight = weightTrend.length > 0 ? weightTrend[0].weight : null;
    const latestWeight = weightTrend.length > 0 ? weightTrend[weightTrend.length - 1].weight : null;

    // Expected check-ins based on plan start and frequency
    const frequencyDays =
      config?.value != null && typeof config.value === "number" ? config.value : 14;
    let expectedCheckIns = 0;
    if (profile?.planStartDate && frequencyDays > 0) {
      const startMs = new Date(profile.planStartDate).getTime();
      const daysSinceStart = Math.floor((Date.now() - startMs) / (1000 * 60 * 60 * 24));
      expectedCheckIns = Math.max(1, Math.floor(daysSinceStart / frequencyDays));
    }

    // Completion rates
    const mealCompletionRate =
      mealCompletions.length > 0
        ? Math.round(
            (mealCompletions.filter((c) => c.completed).length / mealCompletions.length) * 100,
          )
        : null;

    const workoutCompletionRate =
      workoutCompletions.length > 0
        ? Math.round(
            (workoutCompletions.filter((c) => c.completed).length / workoutCompletions.length) *
              100,
          )
        : null;

    // Tickets
    const openTicketsCount = tickets.filter(
      (t) => t.status === "open" || t.status === "coach_responded",
    ).length;
    const lastTicketDate =
      tickets.length > 0 ? Math.max(...tickets.map((t) => t.updatedAt ?? t._creationTime)) : null;

    return {
      lastCheckInDate,
      checkInCount: checkIns.length,
      expectedCheckIns,
      checkInHistory,
      weightTrend,
      initialWeight,
      latestWeight,
      mealCompletionRate,
      workoutCompletionRate,
      openTicketsCount,
      totalTicketsCount: tickets.length,
      lastTicketDate,
      pushSubscriptionActive: subscription?.isActive ?? false,
      assessmentVersion: (latestHistoryEntry?.versionNumber ?? 0) + 1,
      lastAssessmentChangeDate: latestHistoryEntry?.createdAt ?? null,
      exerciseLogCount: recentExerciseLogs.length,
      // "Detailed" = has weight or reps data (not just quick-complete)
      hasDetailedLogs: recentExerciseLogs.some((log) =>
        log.sets.some((s: any) => s.weight != null || s.reps != null),
      ),
    };
  },
});
