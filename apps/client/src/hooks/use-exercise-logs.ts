"use client";

import { useConvexAuth, useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

/** Single set entry for logging */
interface SetEntry {
  setIndex: number;
  weight?: number;
  reps?: number;
  completed: boolean;
}

/**
 * Hook for per-exercise workout logging.
 * Wraps the exerciseLogs queries and mutations for the tracking UI.
 *
 * @param date - YYYY-MM-DD date string to fetch/write logs for
 * @returns Exercise logs for the date, plus mutation wrappers
 */
export function useExerciseLogs(date: string) {
  const { isAuthenticated } = useConvexAuth();
  const logs = useQuery(api.exerciseLogs.getWorkoutLog, isAuthenticated ? { date } : "skip");

  const logSetMutation = useMutation(api.exerciseLogs.logExerciseSet);
  const logBulkMutation = useMutation(api.exerciseLogs.logExerciseBulk);
  const quickCompleteMutation = useMutation(api.exerciseLogs.quickCompleteWorkout);

  /** Log a single set for an exercise */
  const logSet = async (params: {
    workoutPlanId: Id<"workoutPlans">;
    exerciseIndex: number;
    exerciseName: string;
    set: SetEntry;
    totalSetsInExercise: number;
    totalExercisesInWorkout: number;
  }) => {
    await logSetMutation({ ...params, date });
  };

  /** Log all sets for an exercise at once */
  const logBulk = async (params: {
    workoutPlanId: Id<"workoutPlans">;
    exerciseIndex: number;
    exerciseName: string;
    sets: SetEntry[];
    notes?: string;
    totalExercisesInWorkout: number;
  }) => {
    await logBulkMutation({ ...params, date });
  };

  /** Quick-complete all exercises in a workout */
  const quickComplete = async (params: {
    workoutPlanId: Id<"workoutPlans">;
    exercises: Array<{ exerciseIndex: number; exerciseName: string; sets: number }>;
    completed: boolean;
  }) => {
    await quickCompleteMutation({ ...params, date });
  };

  return {
    exerciseLogs: logs ?? [],
    isLoading: isAuthenticated && logs === undefined,
    logSet,
    logBulk,
    quickComplete,
  };
}

/**
 * Hook for fetching last session data (progressive overload pre-fill).
 * Returns the heaviest completed set per exercise from the most recent prior session.
 *
 * @param exerciseNames - List of exercise names in today's workout
 * @param beforeDate - Only look at sessions before this date
 * @returns Record<exerciseName, { weight, reps }>
 */
export function useLastSessionData(exerciseNames: string[], beforeDate: string) {
  const { isAuthenticated } = useConvexAuth();
  const shouldFetch = isAuthenticated && exerciseNames.length > 0;

  const data = useQuery(
    api.exerciseLogs.getLastSessionData,
    shouldFetch ? { exerciseNames, beforeDate } : "skip",
  );

  return {
    lastSessionData: data ?? {},
    isLoading: shouldFetch && data === undefined,
  };
}

/**
 * Hook for fetching exercise history (progressive overload tracking).
 * Used by the exercise history drawer to show past sessions.
 *
 * @param exerciseName - Name of the exercise to fetch history for
 * @param enabled - Whether to actually fetch (false when drawer is closed)
 * @returns Array of past exercise log entries ordered by date desc
 */
export function useExerciseHistory(exerciseName: string | null, enabled: boolean = true) {
  const { isAuthenticated } = useConvexAuth();
  const shouldFetch = isAuthenticated && enabled && exerciseName != null;

  const history = useQuery(
    api.exerciseLogs.getExerciseHistory,
    shouldFetch ? { exerciseName: exerciseName!, limit: 20 } : "skip",
  );

  return {
    history: history ?? [],
    isLoading: shouldFetch && history === undefined,
  };
}
