"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCurrentMealPlan } from "@/hooks/use-meal-plans";
import { useCurrentWorkoutPlan } from "@/hooks/use-workout-plans";
import { useTracking } from "@/hooks/use-tracking";
import { useExerciseLogs } from "@/hooks/use-exercise-logs";
import { toast } from "@/hooks/use-toast";
import { Target } from "lucide-react";
import type { GeneratedMealPlan } from "@/lib/ai/meal-plan-generator";
import type { GeneratedWorkoutPlan } from "@/lib/ai/workout-plan-generator";
import { EmptyState } from "@fitfast/ui/empty-state";
import { cn } from "@fitfast/ui/cn";
import { TrackingHeader } from "./_components/tracking-header";
import { DateProgress } from "./_components/date-progress";
import { MealTracking } from "./_components/meal-tracking";
import { WorkoutTracking } from "./_components/workout-tracking";
import { DailyReflection } from "./_components/daily-reflection";
import { ExerciseHistoryDrawer } from "./_components/exercise-history-drawer";
import { TrackingSkeleton } from "./_components/tracking-skeleton";

export default function TrackingPage() {
  const t = useTranslations("tracking");
  const tEmpty = useTranslations("emptyStates");
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [isMealsExpanded, setIsMealsExpanded] = useState(true);
  const [isWorkoutsExpanded, setIsWorkoutsExpanded] = useState(true);
  const [mealNotes, setMealNotes] = useState<{ [key: number]: string }>({});
  const [isTogglingMeal, setIsTogglingMeal] = useState<number | null>(null);

  // Exercise history drawer state
  const [historyExercise, setHistoryExercise] = useState<string | null>(null);

  // Clear notes when date changes to avoid stale data from previous date
  useEffect(() => {
    setMealNotes({});
  }, [selectedDate]);

  const { mealPlan, isLoading: mealPlanLoading } = useCurrentMealPlan();
  const { workoutPlan, isLoading: workoutPlanLoading } = useCurrentWorkoutPlan();
  const {
    trackingData,
    isLoading: trackingLoading,
    toggleMealCompletion,
    saveDailyReflection,
  } = useTracking(selectedDate);

  // Per-exercise logging
  const {
    exerciseLogs,
    isLoading: exerciseLogsLoading,
    logSet,
    quickComplete,
  } = useExerciseLogs(selectedDate);

  // Map a calendar date to the plan's "day1", "day2", etc. key
  const getDayKey = (date: string, planStartDate?: string): string => {
    if (!planStartDate) return "day1";
    const start = new Date(
      planStartDate.includes("T") ? planStartDate : planStartDate + "T00:00:00Z",
    );
    const current = new Date(date.includes("T") ? date : date + "T00:00:00Z");
    const diffDays = Math.floor((current.getTime() - start.getTime()) / 86400000);
    return `day${Math.max(1, diffDays + 1)}`;
  };

  const handleMealToggle = async (mealIndex: number, currentlyCompleted: boolean) => {
    if (!mealPlan?._id) return;
    setIsTogglingMeal(mealIndex);
    try {
      await toggleMealCompletion(
        mealPlan._id,
        mealIndex,
        !currentlyCompleted,
        mealNotes[mealIndex] || undefined,
      );
      toast({ title: !currentlyCompleted ? t("mealCompleted") : t("mealUncompleted") });
    } catch (error) {
      console.error("Failed to toggle meal completion:", error);
      toast({ title: t("saveFailed"), variant: "destructive" });
    } finally {
      setIsTogglingMeal(null);
    }
  };

  /** Handle per-exercise set logging — wraps the hook with toast feedback */
  const handleLogSet = useCallback(
    async (params: {
      exerciseIndex: number;
      exerciseName: string;
      set: { setIndex: number; weight?: number; reps?: number; completed: boolean };
      totalSetsInExercise: number;
      totalExercisesInWorkout: number;
    }) => {
      if (!workoutPlan?._id) return;
      try {
        await logSet({ ...params, workoutPlanId: workoutPlan._id });
      } catch (error) {
        console.error("Failed to log exercise set:", error);
        toast({ title: t("saveFailed"), variant: "destructive" });
      }
    },
    [workoutPlan?._id, logSet, t],
  );

  /** Handle quick-complete — marks all exercises done/undone */
  const handleQuickComplete = useCallback(
    async (params: {
      exercises: Array<{ exerciseIndex: number; exerciseName: string; sets: number }>;
      completed: boolean;
    }) => {
      if (!workoutPlan?._id) return;
      try {
        await quickComplete({ ...params, workoutPlanId: workoutPlan._id });
        toast({
          title: params.completed ? t("workoutMarkedDone") : t("workoutMarkedUndone"),
        });
      } catch (error) {
        console.error("Failed to quick-complete workout:", error);
        toast({ title: t("saveFailed"), variant: "destructive" });
      }
    },
    [workoutPlan?._id, quickComplete, t],
  );

  const onReflectionSubmit = async (data: { reflection: string }) => {
    try {
      await saveDailyReflection(data.reflection);
      toast({ title: t("reflectionSaved") });
    } catch (error) {
      console.error("Failed to save reflection:", error);
      toast({ title: t("saveFailed"), variant: "destructive" });
    }
  };

  const mealPlanData = mealPlan?.planData as unknown as GeneratedMealPlan;
  const workoutPlanData = workoutPlan?.planData as unknown as GeneratedWorkoutPlan;
  const mealDayKey = useMemo(
    () => getDayKey(selectedDate, mealPlan?.startDate),
    [selectedDate, mealPlan?.startDate],
  );
  const workoutDayKey = useMemo(
    () => getDayKey(selectedDate, workoutPlan?.startDate),
    [selectedDate, workoutPlan?.startDate],
  );

  const todaysMeals = mealPlanData?.weeklyPlan?.[mealDayKey]?.meals || [];
  const todaysWorkout = workoutPlanData?.weeklyPlan?.[workoutDayKey];

  const completionPercentage = useMemo(() => {
    let totalItems = 0;
    let completedItems = 0;

    if (mealPlanData?.weeklyPlan?.[mealDayKey]) {
      const meals = mealPlanData.weeklyPlan[mealDayKey].meals ?? [];
      totalItems += meals.length;
      completedItems += trackingData.mealCompletions.filter((c) => c.completed).length;
    }

    if (todaysWorkout && !todaysWorkout.restDay) {
      totalItems += 1;
      // Workout counts as "done" if all exercise logs have completedAt
      const allExercisesDone =
        todaysWorkout.exercises?.length > 0 &&
        exerciseLogs.filter((l) => l.completedAt != null).length >= todaysWorkout.exercises.length;
      if (allExercisesDone) completedItems += 1;
    }

    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  }, [mealPlanData, mealDayKey, todaysWorkout, trackingData, exerciseLogs]);

  const mealProgress = useMemo(
    () => ({
      completed: trackingData.mealCompletions.filter((c) => c.completed).length,
      total: mealPlanData?.weeklyPlan?.[mealDayKey]?.meals?.length || 0,
    }),
    [trackingData.mealCompletions, mealPlanData, mealDayKey],
  );

  /** Build lastSessionData from exercise logs — keyed by exercise name, shows best set */
  const lastSessionData = useMemo(() => {
    const data: Record<string, { weight?: number; reps?: number }> = {};
    // exerciseLogs only has today's data; last session data would come from history
    // For now, provide empty — will be populated when history drawer is opened
    return data;
  }, []);

  // Celebrate 100% completion (only once per session per date)
  const celebratedRef = useRef<string | null>(null);
  useEffect(() => {
    if (
      completionPercentage === 100 &&
      celebratedRef.current !== selectedDate &&
      (mealProgress.total > 0 || (todaysWorkout && !todaysWorkout.restDay))
    ) {
      celebratedRef.current = selectedDate;
      toast({ title: t("allComplete") });
    }
  }, [completionPercentage, selectedDate, mealProgress.total, todaysWorkout, t]);

  if (mealPlanLoading || workoutPlanLoading || trackingLoading || exerciseLogsLoading) {
    return <TrackingSkeleton />;
  }

  // Show empty state if no plans exist
  if (!mealPlan && !workoutPlan) {
    return (
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-6">
        <TrackingHeader
          selectedDate={selectedDate}
          completionPercentage={0}
          mealProgress={{ completed: 0, total: 0 }}
          workoutDone={false}
        />
        <EmptyState
          icon={Target}
          title={tEmpty("noTrackingData.title")}
          description={tEmpty("noTrackingData.description")}
          action={{
            label: tEmpty("noCheckIns.action"),
            onClick: () => router.push("/check-in"),
          }}
        />
      </div>
    );
  }

  const workoutDone =
    !!todaysWorkout &&
    !todaysWorkout.restDay &&
    todaysWorkout.exercises?.length > 0 &&
    exerciseLogs.filter((l) => l.completedAt != null).length >= todaysWorkout.exercises.length;

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 lg:px-6">
      <TrackingHeader
        selectedDate={selectedDate}
        completionPercentage={completionPercentage}
        mealProgress={mealProgress}
        workoutDone={workoutDone}
      />

      <DateProgress
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        completionPercentage={completionPercentage}
      />

      <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
        <MealTracking
          todaysMeals={todaysMeals}
          mealCompletions={trackingData.mealCompletions}
          isTogglingMeal={isTogglingMeal}
          mealNotes={mealNotes}
          onMealToggle={handleMealToggle}
          onMealNotesChange={setMealNotes}
          isMealsExpanded={isMealsExpanded}
          onToggleExpand={() => setIsMealsExpanded(!isMealsExpanded)}
        />

        <WorkoutTracking
          todaysWorkout={todaysWorkout}
          workoutPlanId={workoutPlan?._id}
          exerciseLogs={exerciseLogs}
          onLogSet={handleLogSet}
          onQuickComplete={handleQuickComplete}
          onOpenHistory={setHistoryExercise}
          lastSessionData={lastSessionData}
          isWorkoutsExpanded={isWorkoutsExpanded}
          onToggleExpand={() => setIsWorkoutsExpanded(!isWorkoutsExpanded)}
        />
      </div>

      <DailyReflection
        defaultReflection={
          typeof trackingData.reflection === "object"
            ? trackingData.reflection?.reflection || ""
            : trackingData.reflection || ""
        }
        onSubmit={onReflectionSubmit}
      />

      {/* Exercise history drawer */}
      <ExerciseHistoryDrawer
        exerciseName={historyExercise}
        open={historyExercise !== null}
        onClose={() => setHistoryExercise(null)}
      />
    </div>
  );
}
