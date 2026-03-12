"use client";

/**
 * WorkoutTracking — per-exercise set logging with progressive overload.
 *
 * Renders each exercise as an expandable card with individual set inputs
 * for weight (kg) and reps. Pre-fills weight from the last session when
 * available. Includes quick-complete fallback for users who don't want
 * to log details.
 */

import { memo, useState, useCallback, useMemo, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Dumbbell, ChevronDown, ChevronUp, Check, Loader2, Zap, History } from "lucide-react";
import { cn } from "@fitfast/ui/cn";
import type { GeneratedWorkoutPlan } from "@/types/plans";
import type { Id } from "@/convex/_generated/dataModel";

type WorkoutDay = GeneratedWorkoutPlan["weeklyPlan"][string];
type Exercise = WorkoutDay["exercises"][number];

/** Shape of a single exercise log from the backend */
interface ExerciseLog {
  exerciseIndex: number;
  exerciseName: string;
  sets: Array<{
    setIndex: number;
    weight?: number;
    reps?: number;
    completed: boolean;
  }>;
  completedAt?: number;
  notes?: string;
}

interface WorkoutTrackingProps {
  todaysWorkout: WorkoutDay | undefined;
  workoutPlanId: Id<"workoutPlans"> | undefined;
  exerciseLogs: ExerciseLog[];
  onLogSet: (params: {
    exerciseIndex: number;
    exerciseName: string;
    set: { setIndex: number; weight?: number; reps?: number; completed: boolean };
    totalSetsInExercise: number;
    totalExercisesInWorkout: number;
  }) => Promise<void>;
  onQuickComplete: (params: {
    exercises: Array<{ exerciseIndex: number; exerciseName: string; sets: number }>;
    completed: boolean;
  }) => Promise<void>;
  onOpenHistory: (exerciseName: string) => void;
  /** Last session data keyed by exercise name — for pre-filling weights */
  lastSessionData: Record<string, { weight?: number; reps?: number }>;
  isWorkoutsExpanded: boolean;
  onToggleExpand: () => void;
}

export const WorkoutTracking = memo(function WorkoutTracking({
  todaysWorkout,
  workoutPlanId,
  exerciseLogs,
  onLogSet,
  onQuickComplete,
  onOpenHistory,
  lastSessionData,
  isWorkoutsExpanded,
  onToggleExpand,
}: WorkoutTrackingProps) {
  const t = useTranslations("tracking");
  const tWorkouts = useTranslations("workouts");
  const tCommon = useTranslations("common");
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
  const [isQuickCompleting, setIsQuickCompleting] = useState(false);

  const exercises = todaysWorkout?.exercises ?? [];
  const totalExercises = exercises.length;

  /** Count how many exercises have all sets completed */
  const completedExerciseCount = useMemo(() => {
    return exerciseLogs.filter((log) => log.completedAt != null).length;
  }, [exerciseLogs]);

  const allExercisesDone = completedExerciseCount >= totalExercises && totalExercises > 0;

  /** Get the log for a specific exercise index */
  const getLog = useCallback(
    (exerciseIndex: number): ExerciseLog | undefined => {
      return exerciseLogs.find((l) => l.exerciseIndex === exerciseIndex);
    },
    [exerciseLogs],
  );

  /** Handle quick-complete toggle */
  const handleQuickComplete = useCallback(async () => {
    if (!workoutPlanId || exercises.length === 0) return;
    setIsQuickCompleting(true);
    try {
      await onQuickComplete({
        exercises: exercises.map((ex, idx) => ({
          exerciseIndex: idx,
          exerciseName: ex.name,
          sets: ex.sets,
        })),
        completed: !allExercisesDone,
      });
    } finally {
      setIsQuickCompleting(false);
    }
  }, [workoutPlanId, exercises, allExercisesDone, onQuickComplete]);

  return (
    <div className="border-border bg-card shadow-card border-l-fitness overflow-hidden rounded-xl border border-l-4">
      {/* Section header — collapsible */}
      <button
        onClick={onToggleExpand}
        className="border-border flex w-full items-center justify-between border-b p-4 transition-colors hover:bg-neutral-50"
      >
        <div className="flex items-center gap-3">
          <div className="bg-fitness/12 flex h-9 w-9 items-center justify-center rounded-lg">
            <Dumbbell className="text-fitness h-4 w-4" />
          </div>
          <div className="text-start">
            <h2 className="text-sm font-semibold">{t("workoutTracking")}</h2>
            <p className="text-muted-foreground text-xs">
              {todaysWorkout?.restDay
                ? tWorkouts("restDay")
                : totalExercises > 0
                  ? `${completedExerciseCount}/${totalExercises} ${t("exercisesDone")}`
                  : t("noWorkoutPlanned")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Mini completion badge */}
          {totalExercises > 0 && !todaysWorkout?.restDay && (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-bold",
                allExercisesDone ? "bg-fitness/15 text-fitness" : "bg-neutral-100 text-neutral-500",
              )}
            >
              {allExercisesDone
                ? t("workoutCompleted")
                : `${completedExerciseCount}/${totalExercises}`}
            </span>
          )}
          {isWorkoutsExpanded ? (
            <ChevronUp className="text-muted-foreground h-4 w-4" />
          ) : (
            <ChevronDown className="text-muted-foreground h-4 w-4" />
          )}
        </div>
      </button>

      {isWorkoutsExpanded && (
        <div className="p-4">
          {!todaysWorkout ? (
            <div className="border-border rounded-lg border border-dashed p-8 text-center">
              <Dumbbell className="text-muted-foreground/30 mx-auto h-10 w-10" />
              <p className="mt-3 text-sm font-medium">{t("noWorkoutPlanned")}</p>
            </div>
          ) : todaysWorkout.restDay ? (
            <div className="rounded-lg bg-neutral-50 p-8 text-center">
              <Dumbbell className="text-muted-foreground/40 mx-auto h-10 w-10" />
              <p className="mt-3 font-semibold">{tWorkouts("restDay")}</p>
              <p className="text-muted-foreground mt-1 text-xs">{t("takeTimeToRecover")}</p>
            </div>
          ) : (
            <div className="space-y-2">
              {/* Workout header info */}
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold">
                    {todaysWorkout.workoutName || tWorkouts("todaysWorkout")}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {todaysWorkout.duration} {tCommon("min")} •{" "}
                    {todaysWorkout.targetMuscles?.join(", ")}
                  </p>
                </div>
              </div>

              {/* Per-exercise cards */}
              {exercises.map((exercise, idx) => (
                <ExerciseCard
                  key={idx}
                  exercise={exercise}
                  exerciseIndex={idx}
                  log={getLog(idx)}
                  lastSession={lastSessionData[exercise.name]}
                  isExpanded={expandedExercise === idx}
                  onToggleExpand={() => setExpandedExercise(expandedExercise === idx ? null : idx)}
                  onLogSet={async (set) => {
                    await onLogSet({
                      exerciseIndex: idx,
                      exerciseName: exercise.name,
                      set,
                      totalSetsInExercise: exercise.sets,
                      totalExercisesInWorkout: totalExercises,
                    });
                  }}
                  onOpenHistory={() => onOpenHistory(exercise.name)}
                />
              ))}

              {/* Quick-complete fallback button */}
              <button
                type="button"
                onClick={handleQuickComplete}
                disabled={isQuickCompleting}
                className={cn(
                  "mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-3 text-xs font-semibold transition-all",
                  allExercisesDone
                    ? "border-fitness/30 bg-fitness/5 text-fitness hover:bg-fitness/10"
                    : "hover:border-fitness/50 hover:text-fitness border-neutral-200 text-neutral-500",
                )}
              >
                {isQuickCompleting ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Zap className="h-3.5 w-3.5" />
                )}
                {allExercisesDone ? t("undoQuickComplete") : t("quickComplete")}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

// ---------------------------------------------------------------------------
// ExerciseCard — individual exercise with expandable set logging
// ---------------------------------------------------------------------------

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseIndex: number;
  log: ExerciseLog | undefined;
  lastSession: { weight?: number; reps?: number } | undefined;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onLogSet: (set: {
    setIndex: number;
    weight?: number;
    reps?: number;
    completed: boolean;
  }) => Promise<void>;
  onOpenHistory: () => void;
}

const ExerciseCard = memo(function ExerciseCard({
  exercise,
  exerciseIndex,
  log,
  lastSession,
  isExpanded,
  onToggleExpand,
  onLogSet,
  onOpenHistory,
}: ExerciseCardProps) {
  const t = useTranslations("tracking");
  const [savingSets, setSavingSets] = useState<Set<number>>(new Set());

  const completedSets = log?.sets.filter((s) => s.completed).length ?? 0;
  const totalSets = exercise.sets;
  const isExerciseDone = log?.completedAt != null;

  /** Toggle a single set's completion, sending current weight/reps with it */
  const handleSetToggle = useCallback(
    async (setIndex: number) => {
      setSavingSets((prev) => new Set(prev).add(setIndex));
      try {
        const existingSet = log?.sets.find((s) => s.setIndex === setIndex);
        await onLogSet({
          setIndex,
          weight: existingSet?.weight ?? lastSession?.weight,
          reps: existingSet?.reps,
          completed: !(existingSet?.completed ?? false),
        });
      } finally {
        setSavingSets((prev) => {
          const next = new Set(prev);
          next.delete(setIndex);
          return next;
        });
      }
    },
    [log, lastSession, onLogSet],
  );

  /** Update weight for a specific set (debounced by user pressing checkmark) */
  const handleWeightChange = useCallback(
    async (setIndex: number, weight: number | undefined) => {
      setSavingSets((prev) => new Set(prev).add(setIndex));
      try {
        const existingSet = log?.sets.find((s) => s.setIndex === setIndex);
        await onLogSet({
          setIndex,
          weight,
          reps: existingSet?.reps,
          completed: existingSet?.completed ?? false,
        });
      } finally {
        setSavingSets((prev) => {
          const next = new Set(prev);
          next.delete(setIndex);
          return next;
        });
      }
    },
    [log, onLogSet],
  );

  /** Update reps for a specific set */
  const handleRepsChange = useCallback(
    async (setIndex: number, reps: number | undefined) => {
      setSavingSets((prev) => new Set(prev).add(setIndex));
      try {
        const existingSet = log?.sets.find((s) => s.setIndex === setIndex);
        await onLogSet({
          setIndex,
          weight: existingSet?.weight ?? lastSession?.weight,
          reps,
          completed: existingSet?.completed ?? false,
        });
      } finally {
        setSavingSets((prev) => {
          const next = new Set(prev);
          next.delete(setIndex);
          return next;
        });
      }
    },
    [log, lastSession, onLogSet],
  );

  return (
    <div
      className={cn(
        "rounded-lg border transition-all",
        isExerciseDone ? "border-fitness/30 bg-fitness/5" : "border-border bg-card",
      )}
    >
      {/* Collapsed header — div instead of button to avoid nesting interactive elements */}
      <div
        role="button"
        tabIndex={0}
        onClick={onToggleExpand}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggleExpand();
          }
        }}
        className="flex w-full cursor-pointer items-center gap-3 p-3"
      >
        {/* Completion indicator */}
        <div
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
            isExerciseDone
              ? "border-fitness bg-fitness"
              : completedSets > 0
                ? "border-fitness/50 bg-fitness/10"
                : "border-neutral-300",
          )}
        >
          {isExerciseDone ? (
            <Check className="h-3.5 w-3.5 text-white" />
          ) : completedSets > 0 ? (
            <span className="text-fitness text-[10px] font-bold">{completedSets}</span>
          ) : (
            <span className="text-[10px] text-neutral-400">{exerciseIndex + 1}</span>
          )}
        </div>

        <div className="flex-1 text-start">
          <p className={cn("text-sm font-medium", isExerciseDone && "text-fitness")}>
            {exercise.name}
          </p>
          <p className="text-muted-foreground text-xs">
            {completedSets}/{totalSets} {t("sets")} • {exercise.reps}
            {lastSession?.weight ? ` • ${t("lastWeight")}: ${lastSession.weight}kg` : ""}
          </p>
        </div>

        <div className="flex items-center gap-1">
          {/* History button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenHistory();
            }}
            className="flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            aria-label={t("viewHistory")}
          >
            <History className="h-3.5 w-3.5" />
          </button>
          {isExpanded ? (
            <ChevronUp className="text-muted-foreground h-4 w-4" />
          ) : (
            <ChevronDown className="text-muted-foreground h-4 w-4" />
          )}
        </div>
      </div>

      {/* Expanded set-by-set logging */}
      {isExpanded && (
        <div className="border-border space-y-1.5 border-t px-3 pt-2 pb-3">
          {/* Equipment + muscle info */}
          {(exercise.equipment || exercise.targetMuscles?.length > 0) && (
            <p className="text-muted-foreground mb-2 text-[11px]">
              {exercise.equipment && `${exercise.equipment}`}
              {exercise.equipment && exercise.targetMuscles?.length > 0 && " • "}
              {exercise.targetMuscles?.join(", ")}
            </p>
          )}

          {/* Set rows */}
          {Array.from({ length: totalSets }, (_, setIdx) => {
            const existingSet = log?.sets.find((s) => s.setIndex === setIdx);
            const isCompleted = existingSet?.completed ?? false;
            const isSaving = savingSets.has(setIdx);

            return (
              <SetRow
                key={setIdx}
                setIndex={setIdx}
                weight={existingSet?.weight}
                reps={existingSet?.reps}
                completed={isCompleted}
                isSaving={isSaving}
                lastWeight={lastSession?.weight}
                plannedReps={exercise.reps}
                onToggle={() => handleSetToggle(setIdx)}
                onWeightChange={(w) => handleWeightChange(setIdx, w)}
                onRepsChange={(r) => handleRepsChange(setIdx, r)}
              />
            );
          })}

          {/* Last session hint */}
          {lastSession?.weight && (
            <p className="text-muted-foreground mt-1 text-[10px]">
              {t("lastSession")}: {lastSession.weight}kg
              {lastSession.reps ? ` × ${lastSession.reps}` : ""}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

// ---------------------------------------------------------------------------
// SetRow — individual set input row (weight × reps + checkmark)
// ---------------------------------------------------------------------------

interface SetRowProps {
  setIndex: number;
  weight: number | undefined;
  reps: number | undefined;
  completed: boolean;
  isSaving: boolean;
  lastWeight: number | undefined;
  plannedReps: string;
  onToggle: () => void;
  onWeightChange: (weight: number | undefined) => void;
  onRepsChange: (reps: number | undefined) => void;
}

/**
 * SetRow renders: [Set N]  [weight kg]  ×  [reps]  [✓]
 * Weight is pre-filled from last session; reps placeholder shows planned range.
 */
const SetRow = memo(function SetRow({
  setIndex,
  weight,
  reps,
  completed,
  isSaving,
  lastWeight,
  plannedReps,
  onToggle,
  onWeightChange,
  onRepsChange,
}: SetRowProps) {
  const t = useTranslations("tracking");

  // Local state to avoid firing API calls on every keystroke.
  // Values sync from props when they change externally.
  const [localWeight, setLocalWeight] = useState<string>(weight != null ? String(weight) : "");
  const [localReps, setLocalReps] = useState<string>(reps != null ? String(reps) : "");

  useEffect(() => {
    setLocalWeight(weight != null ? String(weight) : "");
  }, [weight]);

  useEffect(() => {
    setLocalReps(reps != null ? String(reps) : "");
  }, [reps]);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors",
        completed ? "bg-fitness/8" : "bg-neutral-50",
      )}
    >
      {/* Set label */}
      <span className="text-muted-foreground w-8 text-[11px] font-medium">
        {t("setLabel")} {setIndex + 1}
      </span>

      {/* Weight input — local state on change, API call on blur only */}
      <input
        type="number"
        inputMode="decimal"
        min={0}
        max={999}
        step={0.5}
        placeholder={lastWeight ? String(lastWeight) : "kg"}
        value={localWeight}
        onChange={(e) => setLocalWeight(e.target.value)}
        onBlur={() => {
          const parsed = Number(localWeight);
          const val = localWeight === "" || Number.isNaN(parsed) ? undefined : parsed;
          if (val !== weight) onWeightChange(val);
        }}
        className={cn(
          "focus:ring-fitness h-8 w-16 rounded-md border bg-white px-2 text-center text-xs font-medium transition-colors focus:ring-1 focus:outline-none",
          completed ? "border-fitness/30" : "border-neutral-200",
        )}
        aria-label={`${t("weight")} ${t("setLabel")} ${setIndex + 1}`}
      />

      <span className="text-muted-foreground text-xs">×</span>

      {/* Reps input — local state on change, API call on blur only */}
      <input
        type="number"
        inputMode="numeric"
        min={0}
        max={999}
        placeholder={plannedReps}
        value={localReps}
        onChange={(e) => setLocalReps(e.target.value)}
        onBlur={() => {
          const parsed = Number(localReps);
          const val = localReps === "" || Number.isNaN(parsed) ? undefined : parsed;
          if (val !== reps) onRepsChange(val);
        }}
        className={cn(
          "focus:ring-fitness h-8 w-14 rounded-md border bg-white px-2 text-center text-xs font-medium transition-colors focus:ring-1 focus:outline-none",
          completed ? "border-fitness/30" : "border-neutral-200",
        )}
        aria-label={`${t("reps")} ${t("setLabel")} ${setIndex + 1}`}
      />

      {/* Complete checkmark */}
      <button
        type="button"
        onClick={onToggle}
        disabled={isSaving}
        className={cn(
          "ms-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 transition-all",
          completed
            ? "border-fitness bg-fitness text-white"
            : "hover:border-fitness border-neutral-300",
          isSaving && "opacity-50",
        )}
        aria-label={completed ? t("markIncomplete") : t("markComplete")}
        aria-pressed={completed}
      >
        {isSaving ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : completed ? (
          <Check className="h-3.5 w-3.5" />
        ) : null}
      </button>
    </div>
  );
});
