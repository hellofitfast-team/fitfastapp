import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "./auth";
import { requireCoach } from "./helpers";
import { rateLimiter } from "./rateLimiter";

// ---------------------------------------------------------------------------
// Validators — reused across mutations to keep args DRY
// ---------------------------------------------------------------------------

/** Validator for a single set entry within an exercise log */
const setEntryValidator = v.object({
  setIndex: v.number(),
  weight: v.optional(v.number()), // kg
  reps: v.optional(v.number()), // actual reps completed
  completed: v.boolean(),
});

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

/**
 * Get all exercise logs for the authenticated user on a specific date.
 * Used by the workout tracking UI to show current logging state.
 *
 * @param date - YYYY-MM-DD string
 * @returns Array of exercise log documents, empty if unauthenticated
 */
export const getWorkoutLog = query({
  args: { date: v.string() },
  handler: async (ctx, { date }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return ctx.db
      .query("exerciseLogs")
      .withIndex("by_userId_date", (q) => q.eq("userId", userId).eq("date", date))
      .collect();
  },
});

/**
 * Get the last N sessions for a specific exercise by name.
 * Powers the progressive overload history drawer — shows weight/rep trends.
 *
 * @param exerciseName - Exact exercise name (denormalized on log creation)
 * @param limit - Max sessions to return (default 20, capped at 50)
 * @returns Array of exercise logs ordered by date descending
 */
export const getExerciseHistory = query({
  args: {
    exerciseName: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { exerciseName, limit }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    // Cap at 50 to prevent excessive reads
    const take = Math.min(limit ?? 20, 50);

    return ctx.db
      .query("exerciseLogs")
      .withIndex("by_userId_exerciseName", (q) =>
        q.eq("userId", userId).eq("exerciseName", exerciseName),
      )
      .order("desc")
      .take(take);
  },
});

/**
 * Get the most recent logged weight/reps for a list of exercises (before a given date).
 * Powers the progressive overload pre-fill — shows last session's data in input fields.
 *
 * @param exerciseNames - Array of exercise names to look up
 * @param beforeDate - Only return logs before this date (YYYY-MM-DD)
 * @returns Record<exerciseName, { weight, reps }> from the best (heaviest) set of the most recent session
 */
export const getLastSessionData = query({
  args: {
    exerciseNames: v.array(v.string()),
    beforeDate: v.string(),
  },
  handler: async (ctx, { exerciseNames, beforeDate }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return {};

    // Cap to avoid excessive reads
    const names = exerciseNames.slice(0, 20);
    const result: Record<string, { weight?: number; reps?: number }> = {};

    for (const name of names) {
      // Get the most recent log for this exercise before the given date
      const logs = await ctx.db
        .query("exerciseLogs")
        .withIndex("by_userId_exerciseName", (q) => q.eq("userId", userId).eq("exerciseName", name))
        .order("desc")
        .take(10);

      // Find the first log that's before the requested date
      const prevLog = logs.find((l) => l.date < beforeDate);
      if (!prevLog) continue;

      // Find the heaviest completed set
      const completedSets = prevLog.sets.filter((s) => s.completed && s.weight != null);
      if (completedSets.length === 0) continue;

      const bestSet = completedSets.reduce((best, s) =>
        (s.weight ?? 0) > (best.weight ?? 0) ? s : best,
      );
      result[name] = { weight: bestSet.weight, reps: bestSet.reps };
    }

    return result;
  },
});

/**
 * Coach-only query: get a client's exercise logs for a specific date.
 * Used in admin panel to see prescribed vs actual workout data.
 *
 * @param userId - The client's user ID
 * @param date - YYYY-MM-DD string
 * @returns Array of exercise log documents
 */
export const getClientExerciseLogs = query({
  args: {
    userId: v.string(),
    date: v.string(),
  },
  handler: async (ctx, { userId, date }) => {
    await requireCoach(ctx);

    return ctx.db
      .query("exerciseLogs")
      .withIndex("by_userId_date", (q) => q.eq("userId", userId).eq("date", date))
      .collect();
  },
});

// ---------------------------------------------------------------------------
// Mutations
// ---------------------------------------------------------------------------

/**
 * Upsert a single set within an exercise log.
 * Creates the exercise log document if it doesn't exist, then patches the
 * specific set entry. Triggers auto-completion check after each update.
 *
 * Auth → Rate limit → Input validation → Ownership check → Upsert → Auto-complete check
 *
 * @param workoutPlanId - The workout plan this exercise belongs to
 * @param date - YYYY-MM-DD string
 * @param exerciseIndex - Position in the day's exercise array
 * @param exerciseName - Human-readable name (denormalized for history queries)
 * @param set - The set data to upsert (setIndex, weight, reps, completed)
 * @param totalSetsInExercise - How many sets the exercise has (for auto-complete)
 * @param totalExercisesInWorkout - How many exercises in the day (for workout auto-complete)
 */
export const logExerciseSet = mutation({
  args: {
    workoutPlanId: v.id("workoutPlans"),
    date: v.string(),
    exerciseIndex: v.number(),
    exerciseName: v.string(),
    set: setEntryValidator,
    totalSetsInExercise: v.number(),
    totalExercisesInWorkout: v.number(),
  },
  handler: async (
    ctx,
    {
      workoutPlanId,
      date,
      exerciseIndex,
      exerciseName,
      set,
      totalSetsInExercise,
      totalExercisesInWorkout,
    },
  ) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Rate limit — reuses toggleCompletion (120/hour, fast enough for set logging)
    const { ok, retryAfter } = await rateLimiter.limit(ctx, "toggleCompletion", { key: userId });
    if (!ok) {
      throw new Error(`Too many requests — try again in ${Math.ceil((retryAfter ?? 0) / 1000)}s`);
    }

    // Input validation
    if (set.weight != null && (set.weight < 0 || set.weight > 999)) {
      throw new Error("Weight must be between 0 and 999 kg");
    }
    if (set.reps != null && (set.reps < 0 || set.reps > 999)) {
      throw new Error("Reps must be between 0 and 999");
    }

    // Ownership verification — client must own the workout plan
    const plan = await ctx.db.get(workoutPlanId);
    if (!plan || plan.userId !== userId) throw new Error("Not authorized");

    // Find existing log for this exercise via 3-way composite index (O(1) lookup)
    const existing = await ctx.db
      .query("exerciseLogs")
      .withIndex("by_planId_date_exercise", (q) =>
        q.eq("workoutPlanId", workoutPlanId).eq("date", date).eq("exerciseIndex", exerciseIndex),
      )
      .unique();

    if (existing) {
      // Update the specific set in the existing sets array
      const updatedSets = [...existing.sets];
      const setIdx = updatedSets.findIndex((s) => s.setIndex === set.setIndex);
      if (setIdx >= 0) {
        updatedSets[setIdx] = set;
      } else {
        updatedSets.push(set);
      }

      // Check if all sets in this exercise are completed
      const allSetsCompleted =
        updatedSets.length >= totalSetsInExercise && updatedSets.every((s) => s.completed);

      await ctx.db.patch(existing._id, {
        sets: updatedSets,
        completedAt: allSetsCompleted ? (existing.completedAt ?? Date.now()) : undefined,
      });
    } else {
      // Create new exercise log document
      const allSetsCompleted = totalSetsInExercise === 1 && set.completed;

      await ctx.db.insert("exerciseLogs", {
        userId,
        workoutPlanId,
        date,
        exerciseIndex,
        exerciseName,
        sets: [set],
        completedAt: allSetsCompleted ? Date.now() : undefined,
      });
    }

    // Auto-completion: check if all exercises in the workout are done
    await checkAndUpdateWorkoutCompletion(
      ctx,
      userId,
      workoutPlanId,
      date,
      totalExercisesInWorkout,
    );
  },
});

/**
 * Bulk-write all sets for an exercise at once.
 * Used by the "save all" UX when a user fills in all sets and taps save.
 * Same auth/rate-limit/ownership pattern as logExerciseSet.
 *
 * @param workoutPlanId - The workout plan this exercise belongs to
 * @param date - YYYY-MM-DD string
 * @param exerciseIndex - Position in the day's exercise array
 * @param exerciseName - Human-readable name (denormalized for history queries)
 * @param sets - Complete array of set entries
 * @param notes - Optional notes for this exercise
 * @param totalExercisesInWorkout - How many exercises in the day (for workout auto-complete)
 */
export const logExerciseBulk = mutation({
  args: {
    workoutPlanId: v.id("workoutPlans"),
    date: v.string(),
    exerciseIndex: v.number(),
    exerciseName: v.string(),
    sets: v.array(setEntryValidator),
    notes: v.optional(v.string()),
    totalExercisesInWorkout: v.number(),
  },
  handler: async (
    ctx,
    { workoutPlanId, date, exerciseIndex, exerciseName, sets, notes, totalExercisesInWorkout },
  ) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const { ok, retryAfter } = await rateLimiter.limit(ctx, "toggleCompletion", { key: userId });
    if (!ok) {
      throw new Error(`Too many requests — try again in ${Math.ceil((retryAfter ?? 0) / 1000)}s`);
    }

    // Input validation
    if (notes && notes.length > 500) throw new Error("Notes too long (max 500 characters)");
    if (sets.length > 20) throw new Error("Too many sets (max 20 per exercise)");
    for (const s of sets) {
      if (s.weight != null && (s.weight < 0 || s.weight > 999)) {
        throw new Error("Weight must be between 0 and 999 kg");
      }
      if (s.reps != null && (s.reps < 0 || s.reps > 999)) {
        throw new Error("Reps must be between 0 and 999");
      }
    }

    // Ownership verification
    const plan = await ctx.db.get(workoutPlanId);
    if (!plan || plan.userId !== userId) throw new Error("Not authorized");

    // Check if all sets are completed
    const allSetsCompleted = sets.length > 0 && sets.every((s) => s.completed);

    // Find existing log via 3-way composite index (O(1) lookup)
    const existing = await ctx.db
      .query("exerciseLogs")
      .withIndex("by_planId_date_exercise", (q) =>
        q.eq("workoutPlanId", workoutPlanId).eq("date", date).eq("exerciseIndex", exerciseIndex),
      )
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        sets,
        notes,
        completedAt: allSetsCompleted ? (existing.completedAt ?? Date.now()) : undefined,
      });
    } else {
      await ctx.db.insert("exerciseLogs", {
        userId,
        workoutPlanId,
        date,
        exerciseIndex,
        exerciseName,
        sets,
        notes,
        completedAt: allSetsCompleted ? Date.now() : undefined,
      });
    }

    // Auto-completion check
    await checkAndUpdateWorkoutCompletion(
      ctx,
      userId,
      workoutPlanId,
      date,
      totalExercisesInWorkout,
    );
  },
});

/**
 * Quick-complete: mark all exercises in a workout as done without logging details.
 * Creates exercise log entries with completed=true but no weight/reps data.
 * Backward-compatible with the old "mark whole workout done" toggle.
 *
 * @param workoutPlanId - The workout plan to quick-complete
 * @param date - YYYY-MM-DD string
 * @param exercises - Array of {exerciseIndex, exerciseName, sets} describing each exercise
 * @param completed - true to mark all done, false to un-mark all
 */
export const quickCompleteWorkout = mutation({
  args: {
    workoutPlanId: v.id("workoutPlans"),
    date: v.string(),
    exercises: v.array(
      v.object({
        exerciseIndex: v.number(),
        exerciseName: v.string(),
        sets: v.number(), // number of sets per exercise
      }),
    ),
    completed: v.boolean(),
  },
  handler: async (ctx, { workoutPlanId, date, exercises, completed }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const { ok, retryAfter } = await rateLimiter.limit(ctx, "toggleCompletion", { key: userId });
    if (!ok) {
      throw new Error(`Too many requests — try again in ${Math.ceil((retryAfter ?? 0) / 1000)}s`);
    }

    // Ownership verification
    const plan = await ctx.db.get(workoutPlanId);
    if (!plan || plan.userId !== userId) throw new Error("Not authorized");

    // Server-side validation: verify exercise count matches the plan for this day
    if (completed) {
      const planData = plan.planData as Record<string, any>;
      const weeklyPlan = planData?.weeklyPlan;
      if (weeklyPlan && plan.startDate) {
        const start = new Date(plan.startDate + "T00:00:00Z");
        const current = new Date(date + "T00:00:00Z");
        const diffDays = Math.floor((current.getTime() - start.getTime()) / 86400000);
        if (diffDays >= 0) {
          const dayIndex = (((diffDays % 7) + 7) % 7) + 1;
          const dayKey = `day${dayIndex}`;
          const dayPlan = weeklyPlan[dayKey];
          if (dayPlan && !dayPlan.restDay && Array.isArray(dayPlan.exercises)) {
            const expectedCount = dayPlan.exercises.length;
            if (exercises.length < expectedCount) {
              throw new Error(
                `Incomplete workout: expected ${expectedCount} exercises but received ${exercises.length}`,
              );
            }
          }
        }
      }
    }

    // Upsert exercise logs for each exercise
    for (const ex of exercises) {
      const existing = await ctx.db
        .query("exerciseLogs")
        .withIndex("by_planId_date_exercise", (q) =>
          q
            .eq("workoutPlanId", workoutPlanId)
            .eq("date", date)
            .eq("exerciseIndex", ex.exerciseIndex),
        )
        .unique();

      // Build sets array — mark all completed/uncompleted without weight/reps
      const setsArray = Array.from({ length: ex.sets }, (_, i) => ({
        setIndex: i,
        completed,
      }));

      if (existing) {
        await ctx.db.patch(existing._id, {
          sets: setsArray,
          completedAt: completed ? (existing.completedAt ?? Date.now()) : undefined,
        });
      } else {
        await ctx.db.insert("exerciseLogs", {
          userId,
          workoutPlanId,
          date,
          exerciseIndex: ex.exerciseIndex,
          exerciseName: ex.exerciseName,
          sets: setsArray,
          completedAt: completed ? Date.now() : undefined,
        });
      }
    }

    // Sync the workoutCompletions record (backward compat with streak/adherence)
    await syncWorkoutCompletionRecord(ctx, userId, workoutPlanId, date, completed);
  },
});

// ---------------------------------------------------------------------------
// Internal helpers (not exported to the public API)
// ---------------------------------------------------------------------------

/**
 * Check if all exercises in a workout are completed, and sync the
 * workoutCompletions record accordingly. This keeps streak/adherence
 * queries working with zero changes — they read workoutCompletions.
 */
async function checkAndUpdateWorkoutCompletion(
  ctx: { db: any },
  userId: string,
  workoutPlanId: any,
  date: string,
  totalExercisesInWorkout: number,
) {
  // Get all exercise logs for this workout on this date
  const logs = await ctx.db
    .query("exerciseLogs")
    .withIndex("by_planId_date_exercise", (q: any) =>
      q.eq("workoutPlanId", workoutPlanId).eq("date", date),
    )
    .collect();

  // Workout is complete when all exercises have completedAt set
  const allDone =
    logs.length >= totalExercisesInWorkout && logs.every((log: any) => log.completedAt != null);

  await syncWorkoutCompletionRecord(ctx, userId, workoutPlanId, date, allDone);
}

/**
 * Upsert the workoutCompletions record to match the exercise-level completion state.
 * Uses workoutIndex=0 as the canonical "workout done" flag (backward compat).
 */
async function syncWorkoutCompletionRecord(
  ctx: { db: any },
  userId: string,
  workoutPlanId: any,
  date: string,
  completed: boolean,
) {
  // Use the existing 3-way index on workoutCompletions
  const existing = await ctx.db
    .query("workoutCompletions")
    .withIndex("by_planId_date_workoutIndex", (q: any) =>
      q.eq("workoutPlanId", workoutPlanId).eq("date", date).eq("workoutIndex", 0),
    )
    .unique();

  if (existing) {
    if (existing.completed !== completed) {
      await ctx.db.patch(existing._id, { completed });
    }
  } else if (completed) {
    // Only create the record if marking as completed
    await ctx.db.insert("workoutCompletions", {
      userId,
      workoutPlanId,
      date,
      workoutIndex: 0,
      completed: true,
    });
  }
}
