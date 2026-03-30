import { useConvexAuth, useQuery, useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";

export function useTracking(date: string) {
  const { isAuthenticated } = useConvexAuth();
  const queryArgs = isAuthenticated ? { date } : "skip";
  const data = useQuery(api.completions.getTrackingData, queryArgs);

  const toggleMealMutation = useMutation(api.completions.toggleMealCompletion).withOptimisticUpdate(
    (localStore, args) => {
      if (!isAuthenticated) return;
      const current = localStore.getQuery(api.completions.getTrackingData, { date });
      if (current === undefined) return;

      const existingIdx = current.mealCompletions.findIndex(
        (c) => c.mealIndex === args.mealIndex && c.mealPlanId === args.mealPlanId,
      );

      let updatedMealCompletions;
      if (existingIdx >= 0) {
        updatedMealCompletions = current.mealCompletions.map((c, i) =>
          i === existingIdx ? { ...c, completed: args.completed, notes: args.notes ?? c.notes } : c,
        );
      } else {
        updatedMealCompletions = [
          ...current.mealCompletions,
          {
            _id: `optimistic_meal_${Date.now()}` as any,
            _creationTime: Date.now(),
            userId: "" as any,
            mealPlanId: args.mealPlanId,
            date,
            mealIndex: args.mealIndex,
            completed: args.completed,
            notes: args.notes,
          },
        ];
      }

      localStore.setQuery(
        api.completions.getTrackingData,
        { date },
        {
          ...current,
          mealCompletions: updatedMealCompletions,
        },
      );
    },
  );

  const toggleWorkoutMutation = useMutation(
    api.completions.toggleWorkoutCompletion,
  ).withOptimisticUpdate((localStore, args) => {
    if (!isAuthenticated) return;
    const current = localStore.getQuery(api.completions.getTrackingData, { date });
    if (current === undefined) return;

    const existingIdx = current.workoutCompletions.findIndex(
      (c) => c.workoutIndex === args.workoutIndex && c.workoutPlanId === args.workoutPlanId,
    );

    let updatedWorkoutCompletions;
    if (existingIdx >= 0) {
      updatedWorkoutCompletions = current.workoutCompletions.map((c, i) =>
        i === existingIdx ? { ...c, completed: args.completed, notes: args.notes ?? c.notes } : c,
      );
    } else {
      updatedWorkoutCompletions = [
        ...current.workoutCompletions,
        {
          _id: `optimistic_workout_${Date.now()}` as any,
          _creationTime: Date.now(),
          userId: "" as any,
          workoutPlanId: args.workoutPlanId,
          date,
          workoutIndex: args.workoutIndex,
          completed: args.completed,
          notes: args.notes,
        },
      ];
    }

    localStore.setQuery(
      api.completions.getTrackingData,
      { date },
      {
        ...current,
        workoutCompletions: updatedWorkoutCompletions,
      },
    );
  });

  const saveReflectionMutation = useMutation(api.reflections.saveReflection);

  const toggleMealCompletion = async (
    mealPlanId: Id<"mealPlans">,
    mealIndex: number,
    completed: boolean,
    notes?: string,
  ) => {
    await toggleMealMutation({ mealPlanId, date, mealIndex, completed, notes });
  };

  const toggleWorkoutCompletion = async (
    workoutPlanId: Id<"workoutPlans">,
    workoutIndex: number,
    completed: boolean,
    notes?: string,
  ) => {
    await toggleWorkoutMutation({ workoutPlanId, date, workoutIndex, completed, notes });
  };

  const saveDailyReflection = async (reflection: string) => {
    await saveReflectionMutation({ date, reflection });
  };

  return {
    trackingData: data ?? {
      mealCompletions: [],
      workoutCompletions: [],
      reflection: null,
    },
    isLoading: isAuthenticated && data === undefined,
    error: null,
    toggleMealCompletion,
    toggleWorkoutCompletion,
    saveDailyReflection,
  };
}
