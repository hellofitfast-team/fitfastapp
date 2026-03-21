import { internalQuery } from "./_generated/server";
import { v } from "convex/values";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Per-exercise performance summary aggregated from exercise logs. */
export interface ExercisePerformance {
  exerciseName: string;
  /** Average completion rate across all logged sets (0-1) */
  completionRate: number;
  /** Average actual reps across completed sets */
  avgReps: number;
  /** Max weight used across all logged sets (kg) */
  maxWeight: number;
  /** Average weight used across all completed sets (kg) */
  avgWeight: number;
  /** Number of sessions where this exercise was logged */
  sessionCount: number;
  /** Whether user consistently hit or exceeded prescribed reps */
  isOverperforming: boolean;
  /** Whether user consistently failed to complete prescribed reps */
  isUnderperforming: boolean;
}

/** Aggregated workout performance context passed to the plan engine. */
export interface PerformanceContext {
  /** Per-exercise performance data keyed by exercise name */
  exercisePerformance: Map<string, ExercisePerformance>;
  /** Overall workout session completion rate (0-1) */
  sessionCompletionRate: number;
  /** Total sessions completed in the period */
  sessionsCompleted: number;
  /** Total sessions expected in the period */
  sessionsExpected: number;
  /** Average energy level from check-ins (1-10) */
  avgEnergy: number;
  /** Average sleep quality from check-ins (1-10) */
  avgSleep: number;
  /** Average dietary adherence from check-ins (1-10) */
  avgAdherence: number;
  /** Weight trend: positive = gaining, negative = losing, 0 = stable */
  weightTrendKg: number;
  /** Number of check-ins in the period */
  checkInCount: number;
}

// ---------------------------------------------------------------------------
// Query: Build performance context from exercise logs + check-ins
// ---------------------------------------------------------------------------

export const getPerformanceContext = internalQuery({
  args: {
    userId: v.string(),
    sinceDate: v.string(), // YYYY-MM-DD — typically the last workout plan's startDate
  },
  handler: async (ctx, { userId, sinceDate }): Promise<PerformanceContext> => {
    // 1. Fetch exercise logs since last plan
    const exerciseLogs = await ctx.db
      .query("exerciseLogs")
      .withIndex("by_userId_date", (q) => q.eq("userId", userId).gte("date", sinceDate))
      .collect();

    // 2. Fetch workout completions since last plan
    const workoutCompletions = await ctx.db
      .query("workoutCompletions")
      .withIndex("by_userId_date", (q) => q.eq("userId", userId).gte("date", sinceDate))
      .collect();

    // 3. Fetch check-ins since last plan
    const sinceTimestamp = new Date(sinceDate).getTime();
    const checkIns = await ctx.db
      .query("checkIns")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect();
    const recentCheckIns = checkIns.filter(
      (c) => (c.submittedAt ?? c._creationTime) >= sinceTimestamp,
    );

    // 4. Aggregate per-exercise performance
    const exerciseMap = new Map<
      string,
      {
        totalSets: number;
        completedSets: number;
        totalReps: number;
        weights: number[];
        sessions: Set<string>;
      }
    >();

    for (const log of exerciseLogs) {
      const key = log.exerciseName;
      if (!exerciseMap.has(key)) {
        exerciseMap.set(key, {
          totalSets: 0,
          completedSets: 0,
          totalReps: 0,
          weights: [],
          sessions: new Set(),
        });
      }
      const entry = exerciseMap.get(key)!;
      entry.sessions.add(log.date);

      for (const set of log.sets) {
        entry.totalSets++;
        if (set.completed) {
          entry.completedSets++;
          if (set.reps != null) entry.totalReps += set.reps;
          if (set.weight != null && set.weight > 0) entry.weights.push(set.weight);
        }
      }
    }

    const exercisePerformance = new Map<string, ExercisePerformance>();
    for (const [name, data] of exerciseMap) {
      const completionRate = data.totalSets > 0 ? data.completedSets / data.totalSets : 0;
      const avgReps = data.completedSets > 0 ? data.totalReps / data.completedSets : 0;
      const maxWeight = data.weights.length > 0 ? Math.max(...data.weights) : 0;
      const avgWeight =
        data.weights.length > 0 ? data.weights.reduce((a, b) => a + b, 0) / data.weights.length : 0;

      exercisePerformance.set(name, {
        exerciseName: name,
        completionRate,
        avgReps,
        maxWeight,
        avgWeight,
        sessionCount: data.sessions.size,
        // Overperforming: completes >90% sets with consistent reps
        isOverperforming: completionRate > 0.9 && data.sessions.size >= 2,
        // Underperforming: completes <60% sets
        isUnderperforming: completionRate < 0.6 && data.sessions.size >= 2,
      });
    }

    // 5. Session completion rate
    const sessionsCompleted = workoutCompletions.filter((w) => w.completed).length;
    const sessionsExpected = Math.max(workoutCompletions.length, 1);
    const sessionCompletionRate = sessionsCompleted / sessionsExpected;

    // 6. Check-in averages
    let totalEnergy = 0,
      totalSleep = 0,
      totalAdherence = 0;
    let energyCount = 0,
      sleepCount = 0,
      adherenceCount = 0;
    const weights: number[] = [];

    for (const ci of recentCheckIns) {
      if (ci.energyLevel != null) {
        totalEnergy += ci.energyLevel;
        energyCount++;
      }
      if (ci.sleepQuality != null) {
        totalSleep += ci.sleepQuality;
        sleepCount++;
      }
      if (ci.dietaryAdherence != null) {
        totalAdherence += ci.dietaryAdherence;
        adherenceCount++;
      }
      if (ci.weight != null) {
        weights.push(ci.weight);
      }
    }

    // Weight trend: compare first and last weight in the period
    let weightTrendKg = 0;
    if (weights.length >= 2) {
      weightTrendKg = weights[weights.length - 1]! - weights[0]!;
    }

    return {
      exercisePerformance,
      sessionCompletionRate,
      sessionsCompleted,
      sessionsExpected,
      avgEnergy: energyCount > 0 ? totalEnergy / energyCount : 7,
      avgSleep: sleepCount > 0 ? totalSleep / sleepCount : 7,
      avgAdherence: adherenceCount > 0 ? totalAdherence / adherenceCount : 7,
      weightTrendKg,
      checkInCount: recentCheckIns.length,
    };
  },
});
