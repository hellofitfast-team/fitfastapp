/**
 * Deterministic workout plan builder.
 * Takes exercises from the database and builds a workout plan JSON
 * that is backward-compatible with the AI-generated JSON structure.
 *
 * Pure function — no database access, no Convex server imports.
 */

import type { WorkoutSplit } from "./workoutSplitEngine";
import type { ExercisePerformance, PerformanceContext } from "./workoutPerformanceContext";

// ---------------------------------------------------------------------------
// Input types
// ---------------------------------------------------------------------------

export interface Exercise {
  _id: string;
  name: string;
  nameAr: string;
  category: "compound" | "accessory" | "isolation" | "warmup" | "cooldown" | "cardio";
  movementPattern: "push" | "pull" | "squat" | "hinge" | "carry" | "rotation" | "other";
  primaryMuscles: string[];
  secondaryMuscles: string[];
  equipment: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  instructions: string;
  instructionsAr: string;
  contraindications: string[];
  defaultSets: number;
  defaultRepsMin: number;
  defaultRepsMax: number;
  defaultRestSeconds: number;
  isActive: boolean;
  pregnancyUnsafe?: boolean;
  sortOrder?: number;
}

export interface WorkoutPlanInput {
  split: WorkoutSplit;
  planDuration: number;
  experienceLevel: "beginner" | "intermediate" | "advanced";
  goal: string;
  trainingDaysPerWeek: number;
  injuries: string[];
  adherenceLevel: number | null;
  energyLevel: number | null;
  sleepQuality: number | null;
  previousPlan: any | null;
  language: "en" | "ar";
  availableEquipment?: string[];
  sessionDuration?: number; // Client's preferred session duration in minutes
  gender?: "male" | "female";
  femaleHealth?: {
    menstrualStatus?: string;
    isPregnant?: boolean;
    isBreastfeeding?: boolean;
  };
  /** Performance data from exercise logs, completions, and check-ins since last plan */
  performanceContext?: PerformanceContext;
}

// ---------------------------------------------------------------------------
// Output types (backward-compatible with AI-generated JSON)
// ---------------------------------------------------------------------------

interface WarmupCooldownExercise {
  name: string;
  exerciseDbId: string;
  duration: number;
  instructions: string[];
}

interface WorkoutExercise {
  name: string;
  exerciseDbId: string;
  sets: number;
  reps: string;
  restBetweenSets: string;
  targetMuscles: string[];
  instructions: string[];
  suggestedWeight?: string;
}

interface CardioFinisher {
  name: string;
  exerciseDbId: string;
  durationMinutes: number;
  intensity: string;
  instructions: string[];
}

interface TrainingDay {
  workoutName: string;
  duration: number;
  targetMuscles: string[];
  restDay: false;
  warmup: { exercises: WarmupCooldownExercise[] };
  exercises: WorkoutExercise[];
  cooldown: { exercises: WarmupCooldownExercise[] };
  cardioFinisher?: CardioFinisher;
  supersets?: { exerciseA: string; exerciseB: string }[];
}

interface ActiveRecovery {
  recommendation: string;
  durationMinutes: number;
  intensity: string;
}

interface RestDay {
  restDay: true;
  workoutName: string;
  activeRecovery?: ActiveRecovery;
}

interface WeekPhase {
  week: number;
  phase: string;
  volumeMultiplier: number;
}

export interface WorkoutPlanOutput {
  splitType: string;
  splitName: string;
  splitDescription: string;
  weeklyPlan: Record<string, TrainingDay | RestDay>;
  progressionNotes: string;
  safetyTips: string[];
  weekPhases?: WeekPhase[];
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DIFFICULTY_RANK: Record<string, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
};

/** Muscles targeted by each day label (case-insensitive lookup). */
const DAY_LABEL_MUSCLES: Record<string, string[]> = {
  "full body": [
    "chest",
    "back",
    "shoulders",
    "biceps",
    "triceps",
    "quads",
    "hamstrings",
    "glutes",
    "calves",
    "core",
  ],
  upper: ["chest", "back", "shoulders", "biceps", "triceps"],
  lower: ["quads", "hamstrings", "glutes", "calves"],
  push: ["chest", "shoulders", "triceps"],
  pull: ["back", "biceps", "rear_delts"],
  legs: ["quads", "hamstrings", "glutes", "calves"],
  // Arnold Split
  "chest+back": ["chest", "back"],
  "shoulders+arms": ["shoulders", "biceps", "triceps"],
  // Anterior/Posterior
  anterior: ["chest", "quads", "shoulders", "core"],
  posterior: ["back", "hamstrings", "glutes", "rear_delts"],
  // Bro Split
  chest: ["chest"],
  back: ["back"],
  shoulders: ["shoulders", "rear_delts"],
  arms: ["biceps", "triceps", "forearms"],
  // PHUL
  "power upper": ["chest", "back", "shoulders", "biceps", "triceps"],
  "power lower": ["quads", "hamstrings", "glutes", "calves"],
  "hypertrophy upper": ["chest", "back", "shoulders", "biceps", "triceps"],
  "hypertrophy lower": ["quads", "hamstrings", "glutes", "calves"],
  // Arabic labels
  "صدر+ظهر": ["chest", "back"],
  "أكتاف+ذراعين": ["shoulders", "biceps", "triceps"],
  أمامي: ["chest", "quads", "shoulders", "core"],
  خلفي: ["back", "hamstrings", "glutes", "rear_delts"],
  صدر: ["chest"],
  ظهر: ["back"],
  أكتاف: ["shoulders", "rear_delts"],
  ذراعين: ["biceps", "triceps", "forearms"],
  "قوة علوي": ["chest", "back", "shoulders", "biceps", "triceps"],
  "قوة سفلي": ["quads", "hamstrings", "glutes", "calves"],
  "تضخيم علوي": ["chest", "back", "shoulders", "biceps", "triceps"],
  "تضخيم سفلي": ["quads", "hamstrings", "glutes", "calves"],
};

/** Exercise count ranges per experience level. */
const EXERCISE_COUNTS: Record<string, { min: number; max: number }> = {
  beginner: { min: 6, max: 8 },
  intermediate: { min: 7, max: 9 },
  advanced: { min: 8, max: 10 },
};

/** Goal-based programming parameters. */
const GOAL_PARAMS: Record<
  string,
  { sets: number; repsMin: number; repsMax: number; restSeconds: number }
> = {
  strength: { sets: 4, repsMin: 3, repsMax: 6, restSeconds: 150 },
  hypertrophy: { sets: 3, repsMin: 8, repsMax: 12, restSeconds: 90 },
  fat_loss: { sets: 3, repsMin: 10, repsMax: 15, restSeconds: 45 },
  endurance: { sets: 3, repsMin: 15, repsMax: 20, restSeconds: 45 },
};

/** Volume ranges per muscle group per week by experience level. */
const WEEKLY_VOLUME_RANGES: Record<string, { min: number; max: number }> = {
  beginner: { min: 8, max: 12 },
  intermediate: { min: 10, max: 16 },
  advanced: { min: 12, max: 20 },
};

/** Category sort priority (lower = earlier in session). */
const CATEGORY_ORDER: Record<string, number> = {
  compound: 0,
  accessory: 1,
  isolation: 2,
  cardio: 3,
};

/** Periodization phase definitions for 8-week cycles. */
const PERIODIZATION_PHASES: {
  name: string;
  volumeMultiplier: number;
  weeks: [number, number];
}[] = [
  { name: "foundation", volumeMultiplier: 0.85, weeks: [1, 2] },
  { name: "build", volumeMultiplier: 1.0, weeks: [3, 4] },
  { name: "peak", volumeMultiplier: 1.15, weeks: [5, 6] },
  { name: "deload", volumeMultiplier: 0.55, weeks: [7, 7] },
  { name: "retest", volumeMultiplier: 1.0, weeks: [8, 8] },
];

/** Standard weight increments for progressive overload. */
const WEIGHT_INCREMENT = { upper: 2.5, lower: 5 };

/** Minimum rest floors by goal type (seconds). */
const MIN_REST: Record<string, number> = {
  fat_loss: 30,
  endurance: 30,
  hypertrophy: 60,
  strength: 120,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function normalizeLabel(label: string): string {
  return label.trim().toLowerCase();
}

function musclesForLabel(label: string): string[] | null {
  const key = normalizeLabel(label);
  if (key === "rest" || key === "راحة") return null;
  return DAY_LABEL_MUSCLES[key] ?? DAY_LABEL_MUSCLES["full body"]!;
}

function exerciseName(ex: Exercise, lang: "en" | "ar"): string {
  return lang === "ar" && ex.nameAr ? ex.nameAr : ex.name;
}

function exerciseInstructions(ex: Exercise, lang: "en" | "ar"): string[] {
  const raw = lang === "ar" && ex.instructionsAr ? ex.instructionsAr : ex.instructions;
  if (!raw) return [];
  // Split on newlines or periods to get individual steps, filter empties
  return raw
    .split(/\n|(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function hasInjuryConflict(ex: Exercise, injuries: string[]): boolean {
  if (injuries.length === 0) return false;
  const injurySet = new Set(injuries.map((i) => i.toLowerCase()));
  for (const c of ex.contraindications) {
    if (injurySet.has(c.toLowerCase())) return true;
  }
  // Also check if any primary/secondary muscles overlap with injury keywords
  for (const m of [...ex.primaryMuscles, ...ex.secondaryMuscles]) {
    if (injurySet.has(m.toLowerCase())) return true;
  }
  return false;
}

function equipmentAvailable(ex: Exercise, available: string[] | undefined): boolean {
  if (!available || available.length === 0) return true;
  // Bodyweight-only sentinel: only allow exercises with no equipment requirement
  if (available.includes("__bodyweight_only__")) return ex.equipment.length === 0;
  if (ex.equipment.length === 0) return true; // bodyweight exercises always allowed
  const set = new Set(available.map((e) => e.toLowerCase()));
  return ex.equipment.some((eq) => set.has(eq.toLowerCase()));
}

function isPregnancySafe(ex: Exercise, isPregnant: boolean): boolean {
  if (!isPregnant) return true;
  return ex.pregnancyUnsafe !== true;
}

function muscleMatchesTarget(ex: Exercise, targetSet: Set<string>): boolean {
  for (const m of ex.primaryMuscles) {
    if (targetSet.has(m.toLowerCase())) return true;
  }
  for (const m of ex.secondaryMuscles) {
    if (targetSet.has(m.toLowerCase())) return true;
  }
  return false;
}

function isFatLossGoal(goal: string): boolean {
  const key = goal.toLowerCase();
  return (
    key.includes("fat_loss") ||
    key.includes("fat loss") ||
    key.includes("weight_loss") ||
    key.includes("weight loss") ||
    key.includes("lose weight") ||
    key.includes("lose fat") ||
    key.includes("recomp") ||
    key.includes("تنشيف") ||
    key.includes("خسارة")
  );
}

function baseGoalParams(
  goal: string,
  experienceLevel: "beginner" | "intermediate" | "advanced" = "intermediate",
) {
  const key = goal.toLowerCase();
  let params: { sets: number; repsMin: number; repsMax: number; restSeconds: number };

  if (key.includes("strength") || key.includes("قوة")) {
    params = { ...GOAL_PARAMS.strength! };
  } else if (key.includes("endurance") || key.includes("تحمل")) {
    params = { ...GOAL_PARAMS.endurance! };
  } else if (isFatLossGoal(goal)) {
    params = { ...GOAL_PARAMS.fat_loss! };
  } else {
    // Default to hypertrophy for muscle gain, general fitness, etc.
    params = { ...GOAL_PARAMS.hypertrophy! };
  }

  // Experience-based adjustment: beginners get fewer sets
  if (experienceLevel === "beginner") {
    params.sets = Math.max(2, params.sets - 1);
  }

  return params;
}

/**
 * Dynamic goal params adjusted by performance context.
 * If no performance data, falls back to static goal params.
 */
function goalParams(
  goal: string,
  perf?: PerformanceContext,
  experienceLevel: "beginner" | "intermediate" | "advanced" = "intermediate",
) {
  const params = baseGoalParams(goal, experienceLevel);
  if (!perf || perf.checkInCount === 0) return params;

  // Adjust based on overall session completion rate
  if (perf.sessionCompletionRate < 0.5) {
    // Low attendance: reduce volume to make workouts more approachable
    params.sets = Math.max(2, params.sets - 1);
    params.restSeconds = Math.min(params.restSeconds + 30, 180);
  } else if (perf.sessionCompletionRate > 0.85 && perf.sessionsCompleted >= 6) {
    // High consistency: nudge volume up slightly
    params.sets = Math.min(params.sets + 1, 6);
  }

  // Adjust based on recovery metrics
  const recoveryScore = (perf.avgEnergy + perf.avgSleep) / 2;
  if (recoveryScore < 4) {
    // Poor recovery: reduce intensity, increase rest
    params.sets = Math.max(2, params.sets - 1);
    params.restSeconds = Math.min(params.restSeconds + 30, 180);
  } else if (recoveryScore >= 8 && perf.avgAdherence >= 8) {
    // Excellent recovery + adherence: allow higher intensity
    params.restSeconds = Math.max(params.restSeconds - 15, 30);
  }

  return params;
}

/**
 * Per-exercise dynamic adjustments based on actual logged performance.
 * Returns modified sets/reps/rest for a specific exercise.
 */
function adjustForExercisePerformance(
  exerciseName: string,
  baseSets: number,
  baseRepsMin: number,
  baseRepsMax: number,
  baseRestSec: number,
  perf?: PerformanceContext,
): { sets: number; repsMin: number; repsMax: number; restSeconds: number } {
  if (!perf)
    return { sets: baseSets, repsMin: baseRepsMin, repsMax: baseRepsMax, restSeconds: baseRestSec };

  const exPerf = perf.exercisePerformance[exerciseName];
  if (!exPerf || exPerf.sessionCount < 2) {
    return { sets: baseSets, repsMin: baseRepsMin, repsMax: baseRepsMax, restSeconds: baseRestSec };
  }

  let sets = baseSets;
  let repsMin = baseRepsMin;
  let repsMax = baseRepsMax;
  let restSeconds = baseRestSec;

  if (exPerf.isOverperforming) {
    // User consistently completes all sets — bump volume
    if (exPerf.avgReps > baseRepsMax) {
      // Exceeding rep range: bump reps toward actual avg (capped at +4 from goal baseline)
      const repsIncrease = Math.min(Math.ceil(exPerf.avgReps - baseRepsMax), 4);
      repsMin = baseRepsMin + Math.max(1, repsIncrease - 1);
      repsMax = Math.min(baseRepsMax + repsIncrease, baseRepsMax + 4);
    } else {
      // Completing within range: add a set
      sets = Math.min(sets + 1, 6);
    }
  } else if (exPerf.isUnderperforming) {
    // User struggling: reduce volume to build consistency
    sets = Math.max(2, sets - 1);
    restSeconds = Math.min(restSeconds + 15, 180);
  }

  return { sets, repsMin, repsMax, restSeconds };
}

/** Look up a previous plan's exercise by name to apply progressive overload. */
function findPreviousExercise(
  previousPlan: any,
  name: string,
): { sets: number; repsMin: number; repsMax: number } | null {
  if (!previousPlan?.weeklyPlan) return null;
  for (const dayData of Object.values(previousPlan.weeklyPlan) as any[]) {
    if (dayData.restDay || !dayData.exercises) continue;
    for (const ex of dayData.exercises) {
      if (ex.name === name) {
        const repsParts = String(ex.reps).split("-").map(Number);
        const rMin = isNaN(repsParts[0]!) ? 0 : repsParts[0]!;
        const rMax = repsParts.length > 1 && !isNaN(repsParts[1]!) ? repsParts[1]! : rMin;
        return { sets: ex.sets ?? 3, repsMin: rMin, repsMax: rMax };
      }
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Core scoring & selection
// ---------------------------------------------------------------------------

function scoreExercise(
  ex: Exercise,
  targetMuscles: string[],
  coveredPatterns?: Set<string>,
): number {
  let score = 0;
  const targetSet = new Set(targetMuscles.map((m) => m.toLowerCase()));

  // Category bonus
  if (ex.category === "compound") score += 10;
  else if (ex.category === "accessory") score += 3;
  else if (ex.category === "isolation") score += 1;

  // Primary muscle match (strong signal — must outrank category bonus alone)
  for (const m of ex.primaryMuscles) {
    if (targetSet.has(m.toLowerCase())) score += 20;
  }

  // Secondary muscle match
  for (const m of ex.secondaryMuscles) {
    if (targetSet.has(m.toLowerCase())) score += 5;
  }

  // Phase 2A: Movement pattern diversity bonus/penalty
  if (coveredPatterns) {
    if (coveredPatterns.has(ex.movementPattern)) {
      score -= 8; // Penalize already-covered patterns
    } else {
      score += 12; // Bonus for uncovered patterns
    }
  }

  // Stable sort tiebreaker
  if (ex.sortOrder != null) score += (1000 - ex.sortOrder) * 0.001;

  return score;
}

function selectExercisesForDay(
  allExercises: Exercise[],
  targetMuscles: string[],
  input: WorkoutPlanInput,
): Exercise[] {
  const levelRank = DIFFICULTY_RANK[input.experienceLevel] ?? 0;

  // Filter eligible exercises (main categories only)
  let eligible = allExercises.filter(
    (ex) =>
      ex.isActive !== false &&
      (ex.category === "compound" ||
        ex.category === "accessory" ||
        ex.category === "isolation" ||
        ex.category === "cardio") &&
      (DIFFICULTY_RANK[ex.difficulty] ?? 0) <= levelRank &&
      !hasInjuryConflict(ex, input.injuries) &&
      equipmentAvailable(ex, input.availableEquipment) &&
      isPregnancySafe(ex, input.femaleHealth?.isPregnant ?? false),
  );

  // Fallback 1: if too few exercises pass the strict filter, relax difficulty constraint
  if (eligible.length < 6) {
    eligible = allExercises.filter(
      (ex) =>
        ex.isActive !== false &&
        (ex.category === "compound" ||
          ex.category === "accessory" ||
          ex.category === "isolation" ||
          ex.category === "cardio") &&
        !hasInjuryConflict(ex, input.injuries) &&
        equipmentAvailable(ex, input.availableEquipment) &&
        isPregnancySafe(ex, input.femaleHealth?.isPregnant ?? false),
    );
  }

  // Fallback 2: if still too few, relax equipment constraint but NEVER relax pregnancy safety
  if (eligible.length < 6) {
    eligible = allExercises.filter(
      (ex) =>
        ex.isActive !== false &&
        (ex.category === "compound" ||
          ex.category === "accessory" ||
          ex.category === "isolation" ||
          ex.category === "cardio") &&
        !hasInjuryConflict(ex, input.injuries) &&
        isPregnancySafe(ex, input.femaleHealth?.isPregnant ?? false),
    );
  }

  // Phase 2: Score with pattern diversity awareness
  const targetSet = new Set(targetMuscles.map((m) => m.toLowerCase()));
  const coveredPatterns = new Set<string>();

  // First pass: score without pattern penalty to get initial ranking
  const initialScored = eligible
    .map((ex) => ({ ex, score: scoreExercise(ex, targetMuscles) }))
    .sort((a, b) => b.score - a.score);

  // Second pass: re-score with pattern diversity (greedy selection)
  const scored: { ex: Exercise; score: number }[] = [];
  const remaining = [...initialScored];
  while (remaining.length > 0) {
    // Re-score remaining with current pattern coverage
    for (const item of remaining) {
      item.score = scoreExercise(item.ex, targetMuscles, coveredPatterns);
    }
    remaining.sort((a, b) => b.score - a.score);
    const best = remaining.shift()!;
    scored.push(best);
    coveredPatterns.add(best.ex.movementPattern);
  }

  // Partition: muscle-matched exercises vs non-matched
  const matched = scored.filter((s) => muscleMatchesTarget(s.ex, targetSet));
  const unmatched = scored.filter((s) => !muscleMatchesTarget(s.ex, targetSet));

  // Determine count based on session duration if available, otherwise use level-based ranges
  const range = EXERCISE_COUNTS[input.experienceLevel] ?? EXERCISE_COUNTS.intermediate!;
  const gp = goalParams(input.goal, input.performanceContext, input.experienceLevel);
  let count: number;

  if (input.sessionDuration && input.sessionDuration > 0) {
    // Target the client's preferred session duration
    // Formula: duration = 5 (warmup) + exercises * sets * avgTimePerSet + 5 (cooldown)
    // avgTimePerSet ~2.2 min accounts for work (~45s) + rest (60-120s avg ~90s)
    // So: exercises = (duration - 10) / (sets * 2.2)
    const availableMins = input.sessionDuration - 10; // subtract warmup + cooldown
    count = Math.min(range.max, Math.max(range.min, Math.round(availableMins / (gp.sets * 2.2))));
  } else {
    count = range.max;
  }

  // Low adherence: reduce to 3-4 compounds only (prefer matched muscles)
  const lowAdherence = input.adherenceLevel != null && input.adherenceLevel < 50;
  if (lowAdherence) {
    const compounds = matched
      .filter((s) => s.ex.category === "compound")
      .concat(unmatched.filter((s) => s.ex.category === "compound"));
    return compounds.slice(0, Math.min(4, Math.max(3, compounds.length))).map((s) => s.ex);
  }

  // Low energy or poor sleep: reduce volume by 20%
  const lowRecovery =
    (input.energyLevel != null && input.energyLevel < 5) ||
    (input.sleepQuality != null && input.sleepQuality < 5);
  if (lowRecovery) {
    count = Math.max(range.min - 1, Math.round(count * 0.8));
  }

  // Two-pass: fill from matched first, supplement from unmatched only if needed
  const selected = matched.slice(0, count);
  if (selected.length < count) {
    selected.push(...unmatched.slice(0, count - selected.length));
  }

  // Phase 2B: Enforce minimum 3 distinct movement patterns
  const selectedPatterns = new Set(selected.map((s) => s.ex.movementPattern));
  if (selectedPatterns.size < 3 && selected.length >= 3) {
    const missingPatternExercises = scored.filter(
      (s) => !selectedPatterns.has(s.ex.movementPattern) && !selected.includes(s),
    );
    for (const replacement of missingPatternExercises) {
      if (selectedPatterns.size >= 3) break;
      // Find the last (lowest-scored) selected exercise whose pattern appears more than once
      const patternCounts = new Map<string, number>();
      for (const s of selected) {
        patternCounts.set(s.ex.movementPattern, (patternCounts.get(s.ex.movementPattern) ?? 0) + 1);
      }
      let swapIdx = -1;
      for (let k = selected.length - 1; k >= 0; k--) {
        if ((patternCounts.get(selected[k]!.ex.movementPattern) ?? 0) > 1) {
          swapIdx = k;
          break;
        }
      }
      if (swapIdx >= 0) {
        selected[swapIdx] = replacement;
        selectedPatterns.add(replacement.ex.movementPattern);
      }
    }
  }

  return selected.map((s) => s.ex);
}

function selectWarmupExercises(
  allExercises: Exercise[],
  targetMuscles: string[],
  input: WorkoutPlanInput,
): Exercise[] {
  const targetSet = new Set(targetMuscles.map((m) => m.toLowerCase()));

  const warmups = allExercises.filter(
    (ex) =>
      ex.isActive !== false &&
      ex.category === "warmup" &&
      !hasInjuryConflict(ex, input.injuries) &&
      equipmentAvailable(ex, input.availableEquipment) &&
      isPregnancySafe(ex, input.femaleHealth?.isPregnant ?? false),
  );

  // Prefer warmups that target today's muscles
  const sorted = warmups.sort((a, b) => {
    const aMatch = a.primaryMuscles.filter((m) => targetSet.has(m.toLowerCase())).length;
    const bMatch = b.primaryMuscles.filter((m) => targetSet.has(m.toLowerCase())).length;
    return bMatch - aMatch;
  });

  return sorted.slice(0, 3);
}

function selectCooldownExercises(
  allExercises: Exercise[],
  targetMuscles: string[],
  input: WorkoutPlanInput,
): Exercise[] {
  const targetSet = new Set(targetMuscles.map((m) => m.toLowerCase()));

  const cooldowns = allExercises.filter(
    (ex) =>
      ex.isActive !== false &&
      ex.category === "cooldown" &&
      !hasInjuryConflict(ex, input.injuries) &&
      equipmentAvailable(ex, input.availableEquipment) &&
      isPregnancySafe(ex, input.femaleHealth?.isPregnant ?? false),
  );

  const sorted = cooldowns.sort((a, b) => {
    const aMatch = a.primaryMuscles.filter((m) => targetSet.has(m.toLowerCase())).length;
    const bMatch = b.primaryMuscles.filter((m) => targetSet.has(m.toLowerCase())).length;
    return bMatch - aMatch;
  });

  return sorted.slice(0, 3);
}

// ---------------------------------------------------------------------------
// Phase 3: Cardio helpers
// ---------------------------------------------------------------------------

function selectCardioFinisher(
  allExercises: Exercise[],
  input: WorkoutPlanInput,
  dayIndex: number = 0,
): CardioFinisher | undefined {
  if (!isFatLossGoal(input.goal)) return undefined;

  const cardioExercises = allExercises.filter(
    (ex) =>
      ex.isActive !== false &&
      ex.category === "cardio" &&
      !hasInjuryConflict(ex, input.injuries) &&
      equipmentAvailable(ex, input.availableEquipment) &&
      isPregnancySafe(ex, input.femaleHealth?.isPregnant ?? false),
  );

  if (cardioExercises.length === 0) return undefined;

  // Rotate through available cardio exercises by day index for variety
  const sorted = [...cardioExercises].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
  const ex = sorted[dayIndex % sorted.length]!;
  const lang = input.language;

  return {
    name: exerciseName(ex, lang),
    exerciseDbId: ex._id,
    durationMinutes: 12,
    intensity: lang === "ar" ? "متوسطة" : "moderate",
    instructions: exerciseInstructions(ex, lang).slice(0, 2),
  };
}

function buildActiveRecovery(lang: "en" | "ar"): ActiveRecovery {
  return {
    recommendation:
      lang === "ar"
        ? "كارديو منخفض الشدة (مشي سريع، سباحة خفيفة، أو دراجة) لمدة ٣٠-٦٠ دقيقة"
        : "Zone 2 cardio (brisk walking, light swimming, or cycling) for 30-60 minutes",
    durationMinutes: 45,
    intensity: lang === "ar" ? "منخفضة (Zone 2)" : "low (Zone 2)",
  };
}

// ---------------------------------------------------------------------------
// Phase 5: Periodization helpers
// ---------------------------------------------------------------------------

function getWeekPhase(
  weekNumber: number,
  totalWeeks: number,
): { name: string; volumeMultiplier: number } {
  // For plans < 4 weeks: linear progression only (no deload)
  if (totalWeeks < 4) {
    return { name: "build", volumeMultiplier: 1.0 };
  }

  // For longer plans, cycle through phases (modulo 8 weeks)
  const cycleWeek = ((weekNumber - 1) % 8) + 1;
  for (const phase of PERIODIZATION_PHASES) {
    if (cycleWeek >= phase.weeks[0] && cycleWeek <= phase.weeks[1]) {
      return { name: phase.name, volumeMultiplier: phase.volumeMultiplier };
    }
  }
  return { name: "build", volumeMultiplier: 1.0 };
}

function generateWeekPhases(totalWeeks: number): WeekPhase[] {
  const phases: WeekPhase[] = [];
  for (let w = 1; w <= totalWeeks; w++) {
    const { name, volumeMultiplier } = getWeekPhase(w, totalWeeks);
    phases.push({ week: w, phase: name, volumeMultiplier });
  }
  return phases;
}

// ---------------------------------------------------------------------------
// Phase 4: Volume tracking helpers
// ---------------------------------------------------------------------------

function validateWeeklyVolume(
  weeklyPlan: Record<string, TrainingDay | RestDay>,
  experienceLevel: "beginner" | "intermediate" | "advanced",
): void {
  const range = WEEKLY_VOLUME_RANGES[experienceLevel] ?? WEEKLY_VOLUME_RANGES.intermediate!;
  const muscleVolume: Record<string, number> = {};

  // Count sets per muscle group across the week
  for (const day of Object.values(weeklyPlan)) {
    if (day.restDay) continue;
    for (const ex of (day as TrainingDay).exercises) {
      for (const muscle of ex.targetMuscles) {
        const key = muscle.toLowerCase();
        muscleVolume[key] = (muscleVolume[key] ?? 0) + ex.sets;
      }
    }
  }

  // Auto-adjust: reduce isolation first (exercises are sorted compound → accessory → isolation)
  // Process in reverse order so isolation exercises get reduced before compounds
  for (const day of Object.values(weeklyPlan)) {
    if (day.restDay) continue;
    const td = day as TrainingDay;
    // Process exercises in reverse order (isolation last in sorted order → reduce first)
    for (let j = td.exercises.length - 1; j >= 0; j--) {
      const ex = td.exercises[j]!;
      // Take the max needed reduction across all target muscles (avoid double-reducing)
      let maxReduction = 0;
      for (const muscle of ex.targetMuscles) {
        const key = muscle.toLowerCase();
        const vol = muscleVolume[key] ?? 0;
        if (vol > range.max) {
          const excess = vol - range.max;
          maxReduction = Math.max(maxReduction, Math.min(ex.sets - 2, excess));
        }
      }
      if (maxReduction > 0) {
        ex.sets -= maxReduction;
        // Update volume for all target muscles
        for (const muscle of ex.targetMuscles) {
          const key = muscle.toLowerCase();
          muscleVolume[key] = (muscleVolume[key] ?? 0) - maxReduction;
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Phase 6: Enhanced progressive overload helpers
// ---------------------------------------------------------------------------

function getSuggestedWeight(
  ex: Exercise,
  perf: PerformanceContext | undefined,
  lang: "en" | "ar",
): string | undefined {
  if (!perf) return undefined;
  const exPerf = perf.exercisePerformance[ex.name];
  if (!exPerf || exPerf.sessionCount < 2 || exPerf.maxWeight === 0) return undefined;

  // Only suggest weight increase if overperforming
  if (!exPerf.isOverperforming) return undefined;

  const isLower = ["squat", "hinge"].includes(ex.movementPattern);
  const increment = isLower ? WEIGHT_INCREMENT.lower : WEIGHT_INCREMENT.upper;
  const suggestedKg = exPerf.maxWeight + increment;

  return lang === "ar" ? `${suggestedKg} كجم` : `${suggestedKg} kg`;
}

function findDifficultyUpgrade(
  ex: Exercise,
  allExercises: Exercise[],
  perf: PerformanceContext | undefined,
): Exercise | null {
  if (!perf) return null;
  const exPerf = perf.exercisePerformance[ex.name];
  if (!exPerf || !exPerf.isOverperforming || exPerf.sessionCount < 4) return null;
  if (ex.difficulty === "advanced") return null;

  const nextDifficulty = ex.difficulty === "beginner" ? "intermediate" : "advanced";
  const upgrade = allExercises.find(
    (candidate) =>
      candidate._id !== ex._id &&
      candidate.isActive !== false &&
      candidate.movementPattern === ex.movementPattern &&
      candidate.difficulty === nextDifficulty &&
      candidate.primaryMuscles.some((m) => ex.primaryMuscles.includes(m)),
  );

  return upgrade ?? null;
}

// ---------------------------------------------------------------------------
// Phase 7: Tailoring helpers
// ---------------------------------------------------------------------------

function findAlternativeExercise(
  ex: Exercise,
  allExercises: Exercise[],
  injuries: string[],
  availableEquipment?: string[],
  isPregnant?: boolean,
): Exercise | null {
  return (
    allExercises.find(
      (candidate) =>
        candidate._id !== ex._id &&
        candidate.isActive !== false &&
        candidate.movementPattern === ex.movementPattern &&
        !hasInjuryConflict(candidate, injuries) &&
        equipmentAvailable(candidate, availableEquipment) &&
        isPregnancySafe(candidate, isPregnant ?? false) &&
        candidate.primaryMuscles.some((m) => ex.primaryMuscles.includes(m)),
    ) ?? null
  );
}

function buildSupersets(
  exercises: WorkoutExercise[],
  allExercises: Exercise[],
): { exerciseA: string; exerciseB: string }[] {
  const pairs: { exerciseA: string; exerciseB: string }[] = [];
  // Use exerciseDbId for lookup (works for both English and Arabic display names)
  const exMap = new Map(allExercises.map((e) => [e._id, e]));
  const used = new Set<number>();

  for (let i = 0; i < exercises.length; i++) {
    if (used.has(i)) continue;
    const exA = exMap.get(exercises[i]!.exerciseDbId);
    if (!exA) continue;

    for (let j = i + 1; j < exercises.length; j++) {
      if (used.has(j)) continue;
      const exB = exMap.get(exercises[j]!.exerciseDbId);
      if (!exB) continue;

      // Pair opposing patterns: push+pull, squat+hinge
      const isPushPull =
        (exA.movementPattern === "push" && exB.movementPattern === "pull") ||
        (exA.movementPattern === "pull" && exB.movementPattern === "push");
      const isSquatHinge =
        (exA.movementPattern === "squat" && exB.movementPattern === "hinge") ||
        (exA.movementPattern === "hinge" && exB.movementPattern === "squat");

      if (isPushPull || isSquatHinge) {
        pairs.push({ exerciseA: exercises[i]!.name, exerciseB: exercises[j]!.name });
        used.add(i);
        used.add(j);
        break;
      }
    }
  }

  return pairs;
}

// ---------------------------------------------------------------------------
// Build day
// ---------------------------------------------------------------------------

function buildTrainingDay(
  allExercises: Exercise[],
  targetMuscles: string[],
  dayLabel: string,
  input: WorkoutPlanInput,
  dayIndex: number = 0,
): TrainingDay {
  const lang = input.language;
  // PHUL override: power days use strength params, hypertrophy days use hypertrophy params
  const labelLower = dayLabel.toLowerCase();
  const perf = input.performanceContext;
  const exp = input.experienceLevel;
  const gp = labelLower.includes("power")
    ? goalParams("strength", perf, exp)
    : labelLower.includes("hypertrophy") || labelLower.includes("تضخيم")
      ? goalParams("hypertrophy", perf, exp)
      : goalParams(input.goal, perf, exp);

  let mainExercises = selectExercisesForDay(allExercises, targetMuscles, input);

  // Phase 1D: Sort exercises by category: compound → accessory → isolation → cardio
  mainExercises = [...mainExercises].sort(
    (a, b) => (CATEGORY_ORDER[a.category] ?? 9) - (CATEGORY_ORDER[b.category] ?? 9),
  );

  // Phase 7C: Beginner overwhelm detection — cap at 5 compound-focused exercises
  if (exp === "beginner" && mainExercises.length > 6) {
    const compounds = mainExercises.filter((ex) => ex.category === "compound");
    const others = mainExercises.filter((ex) => ex.category !== "compound");
    mainExercises = [...compounds.slice(0, 4), ...others.slice(0, 1)];
  }
  const warmups = selectWarmupExercises(allExercises, targetMuscles, input);
  const cooldowns = selectCooldownExercises(allExercises, targetMuscles, input);

  // Build workout exercises with dynamic sets/reps/rest
  const workoutExercises: WorkoutExercise[] = mainExercises.map((ex) => {
    const exName = exerciseName(ex, lang);

    // Start with goal-based params (already adjusted by performance context)
    let sets = gp.sets;
    let repsMin = gp.repsMin;
    let repsMax = gp.repsMax;
    let restSec = gp.restSeconds;

    // Use exercise defaults if they differ meaningfully from zero
    if (ex.defaultSets > 0 && ex.defaultRepsMin > 0) {
      // Blend: prefer goal params but respect exercise-specific rest
      restSec = ex.defaultRestSeconds > 0 ? ex.defaultRestSeconds : restSec;
    }

    // Phase 6C: Difficulty upgrade if consistently overperforming
    const upgrade = findDifficultyUpgrade(ex, allExercises, perf);
    const effectiveEx = upgrade ?? ex;
    const effectiveName = upgrade ? exerciseName(upgrade, lang) : exName;

    // Per-exercise performance adjustments (from actual logged data)
    const perfAdj = adjustForExercisePerformance(
      effectiveName,
      sets,
      repsMin,
      repsMax,
      restSec,
      perf,
    );
    sets = perfAdj.sets;
    repsMin = perfAdj.repsMin;
    repsMax = perfAdj.repsMax;
    restSec = perfAdj.restSeconds;

    // Phase 6B: Rest time decrease as progression for high performers
    if (perf && perf.avgEnergy >= 7 && perf.avgSleep >= 7) {
      const exPerf = perf.exercisePerformance[effectiveName];
      if (exPerf?.isOverperforming) {
        const goalKey = isFatLossGoal(input.goal)
          ? "fat_loss"
          : input.goal.toLowerCase().includes("strength")
            ? "strength"
            : input.goal.toLowerCase().includes("endurance")
              ? "endurance"
              : "hypertrophy";
        const minRest = MIN_REST[goalKey] ?? 60;
        restSec = Math.max(minRest, restSec - 15);
      }
    }

    // Progressive overload from previous plan — only if performance adjustment didn't already bump
    const perfAlreadyAdjusted =
      sets !== gp.sets || repsMin !== gp.repsMin || repsMax !== gp.repsMax;
    const prev = findPreviousExercise(input.previousPlan, effectiveName);
    if (prev && !perfAlreadyAdjusted) {
      // Try to increment reps by 1-2 (capped at goal max + 4)
      const canAddReps = prev.repsMax + 2 <= gp.repsMax + 4; // allow slight overshoot
      if (canAddReps) {
        repsMin = Math.min(prev.repsMin + 1, gp.repsMin + 4);
        repsMax = Math.min(prev.repsMax + 2, gp.repsMax + 4);
      } else {
        // Cap reps reached: add 1 set instead
        sets = Math.min(prev.sets + 1, 6);
        repsMin = gp.repsMin;
        repsMax = gp.repsMax;
      }
    }

    const repsStr = repsMin === repsMax ? `${repsMin}` : `${repsMin}-${repsMax}`;

    // Phase 6A: Suggested weight for progressive overload
    const suggestedWeight = getSuggestedWeight(effectiveEx, perf, lang);

    const result: WorkoutExercise = {
      name: effectiveName,
      exerciseDbId: effectiveEx._id,
      sets,
      reps: repsStr,
      restBetweenSets: `${restSec}s`,
      targetMuscles: effectiveEx.primaryMuscles,
      instructions: exerciseInstructions(effectiveEx, lang).slice(0, 2),
    };
    if (suggestedWeight) result.suggestedWeight = suggestedWeight;
    return result;
  });

  // Warmup exercises
  const warmupList: WarmupCooldownExercise[] = warmups.map((ex) => ({
    name: exerciseName(ex, lang),
    exerciseDbId: ex._id,
    duration: ex.defaultRestSeconds > 0 ? ex.defaultRestSeconds : 30,
    instructions: exerciseInstructions(ex, lang).slice(0, 1),
  }));

  // Cooldown exercises
  const cooldownList: WarmupCooldownExercise[] = cooldowns.map((ex) => ({
    name: exerciseName(ex, lang),
    exerciseDbId: ex._id,
    duration: ex.defaultRestSeconds > 0 ? ex.defaultRestSeconds : 30,
    instructions: exerciseInstructions(ex, lang).slice(0, 1),
  }));

  // Phase 3A: Cardio finisher for fat loss goals
  const cardioFinisher = selectCardioFinisher(allExercises, input, dayIndex);

  // Estimate duration: warmup ~5min + exercises * (sets * ~1.5min) + cooldown ~5min + cardio
  const exerciseMins = workoutExercises.reduce((sum, ex) => sum + ex.sets * 1.5, 0);
  const cardioMins = cardioFinisher?.durationMinutes ?? 0;
  const duration = Math.round(5 + exerciseMins + 5 + cardioMins);

  // Determine workout name
  const workoutName = lang === "ar" ? `تمرين ${dayLabel}` : `${dayLabel} Day`;

  // Phase 7B: Superset support for time-poor sessions
  const supersets =
    input.sessionDuration && input.sessionDuration < 35
      ? buildSupersets(workoutExercises, allExercises)
      : undefined;

  const day: TrainingDay = {
    workoutName,
    duration,
    targetMuscles,
    restDay: false as const,
    warmup: { exercises: warmupList },
    exercises: workoutExercises,
    cooldown: { exercises: cooldownList },
  };
  if (cardioFinisher) day.cardioFinisher = cardioFinisher;
  if (supersets && supersets.length > 0) day.supersets = supersets;
  return day;
}

function buildRestDay(lang: "en" | "ar", goal: string): RestDay {
  const day: RestDay = {
    restDay: true as const,
    workoutName: lang === "ar" ? "يوم راحة" : "Rest Day",
  };
  // Phase 3B: Active recovery on rest days for fat loss goals
  if (isFatLossGoal(goal)) {
    day.activeRecovery = buildActiveRecovery(lang);
  }
  return day;
}

// ---------------------------------------------------------------------------
// Progression notes & safety tips
// ---------------------------------------------------------------------------

function generateProgressionNotes(input: WorkoutPlanInput): string {
  const { language: lang, experienceLevel, goal, gender, femaleHealth } = input;
  const isCycling =
    femaleHealth?.menstrualStatus === "regular" || femaleHealth?.menstrualStatus === "irregular";

  if (lang === "ar") {
    const goalText =
      goal.toLowerCase().includes("strength") || goal.includes("قوة")
        ? "زيادة الأوزان تدريجياً"
        : "زيادة التكرارات أو المجموعات تدريجياً";
    let note = `ركز على ${goalText} كل أسبوع. حافظ على الأداء الصحيح قبل زيادة الحمل.`;
    if (gender === "female" && femaleHealth?.isPregnant) {
      note += " ⚠️ أنتِ حامل — ركزي على الحفاظ على اللياقة وليس زيادة الأوزان. استشيري طبيبتك.";
    } else if (gender === "female" && isCycling) {
      note +=
        " ملاحظة: من الطبيعي أن يتغير أداؤك خلال الشهر بسبب الدورة الشهرية — استمعي لجسمك وعدّلي الشدة حسب الحاجة.";
    }
    return note;
  }
  const goalText = goal.toLowerCase().includes("strength")
    ? "increasing weight gradually"
    : "adding reps or sets progressively";
  let note = `Focus on ${goalText} each week. Maintain proper form before increasing load. ${
    experienceLevel === "beginner"
      ? "Master movement patterns first. Keep 1-2 reps in reserve on every set."
      : "Track your lifts to ensure consistent progress."
  }`;
  if (gender === "female" && femaleHealth?.isPregnant) {
    note +=
      " You are pregnant — focus on maintaining fitness, not increasing load. Consult your OB-GYN.";
  } else if (gender === "female" && isCycling) {
    note +=
      " Note: Performance naturally fluctuates throughout your menstrual cycle — listen to your body and adjust intensity as needed. This is normal and not a setback.";
  }
  return note;
}

function generateSafetyTips(input: WorkoutPlanInput): string[] {
  const { language: lang, injuries, gender, femaleHealth } = input;
  if (lang === "ar") {
    const tips = [
      "قم بالإحماء دائماً قبل التمرين",
      "اشرب الماء بانتظام أثناء التمرين",
      "توقف فوراً إذا شعرت بألم حاد",
      "حافظ على الأداء الصحيح في جميع التمارين",
    ];
    if (injuries.length > 0) {
      tips.push("تجنب التمارين التي تسبب ألماً في المناطق المصابة");
    }
    if (gender === "female" && femaleHealth?.isPregnant) {
      tips.push(
        "⚠️ أنتِ حامل — تجنبي تمارين الاستلقاء على الظهر بعد الثلث الأول، ولا رياضات تلامس. حافظي على نبض قلب معتدل. استشيري طبيبتك.",
      );
    } else if (gender === "female") {
      if (
        femaleHealth?.menstrualStatus === "regular" ||
        femaleHealth?.menstrualStatus === "irregular"
      ) {
        tips.push(
          "أثناء الدورة الشهرية: خففي شدة التمرين إذا شعرتِ بتعب أو تقلصات، ولا بأس من تقليل الأوزان",
        );
        tips.push(
          "ركزي على تمارين الإحماء والتمدد بشكل أكبر خلال فترة ما قبل الدورة للتخفيف من الانتفاخ والتشنجات",
        );
      }
      if (femaleHealth?.menstrualStatus === "amenorrhea") {
        tips.push(
          "إذا توقفت دورتك الشهرية، قد يكون ذلك مؤشراً على الإفراط في التمرين — تحدثي مع مدربك",
        );
      }
    }
    return tips;
  }
  const tips = [
    "Always warm up before training",
    "Stay hydrated throughout your workout",
    "Stop immediately if you feel sharp pain",
    "Maintain proper form on all exercises",
  ];
  if (injuries.length > 0) {
    tips.push(
      "Avoid exercises that cause pain in injured areas and consult your coach if discomfort persists",
    );
  }
  if (gender === "female" && femaleHealth?.isPregnant) {
    tips.push(
      "You are pregnant — avoid supine (lying on back) exercises after the first trimester, no contact sports, keep heart rate moderate. Consult your OB-GYN before following this plan.",
    );
  } else if (gender === "female") {
    if (
      femaleHealth?.menstrualStatus === "regular" ||
      femaleHealth?.menstrualStatus === "irregular"
    ) {
      tips.push(
        "During your menstrual cycle: reduce intensity if you feel fatigued or experience cramps — lighter weights and fewer sets are perfectly fine",
      );
      tips.push(
        "Focus on extra warm-up and stretching during premenstrual days to help with bloating and cramps",
      );
    }
    if (femaleHealth?.menstrualStatus === "amenorrhea") {
      tips.push(
        "If your period has stopped, this may indicate overtraining or underfueling — please discuss with your coach",
      );
    }
  }
  return tips;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

/**
 * Generate a deterministic workout plan from exercise database entries.
 * Returns a JSON structure backward-compatible with the AI-generated format.
 */
export function generateWorkoutPlan(
  exercises: Exercise[],
  input: WorkoutPlanInput,
): WorkoutPlanOutput {
  const { split, planDuration, language: lang, experienceLevel } = input;
  const dayLabels = lang === "ar" ? split.dayLabelsAr : split.dayLabels;

  // Phase 5: Calculate periodization phases
  const totalWeeks = Math.max(1, Math.ceil(planDuration / 7));
  const weekPhases = generateWeekPhases(totalWeeks);

  const weeklyPlan: Record<string, TrainingDay | RestDay> = {};
  const numDays = Math.min(planDuration, dayLabels.length);

  for (let i = 0; i < numDays; i++) {
    const dayKey = `day${i + 1}`;
    const label = dayLabels[i]!;
    const targetMuscles = musclesForLabel(label);

    if (targetMuscles === null) {
      weeklyPlan[dayKey] = buildRestDay(lang, input.goal);
    } else {
      weeklyPlan[dayKey] = buildTrainingDay(
        exercises,
        targetMuscles,
        lang === "ar" ? split.dayLabelsAr[i]! : split.dayLabels[i]!,
        input,
        i,
      );
    }
  }

  // Phase 5B: Apply periodization volume multiplier to each week's training days
  if (totalWeeks >= 4) {
    for (let i = 0; i < numDays; i++) {
      const dayKey = `day${i + 1}`;
      const day = weeklyPlan[dayKey];
      if (!day || day.restDay) continue;

      const weekNum = Math.floor(i / 7) + 1;
      const phase = weekPhases.find((p) => p.week === weekNum);
      if (!phase || phase.volumeMultiplier === 1.0) continue;

      const td = day as TrainingDay;
      for (const ex of td.exercises) {
        ex.sets = Math.max(2, Math.round(ex.sets * phase.volumeMultiplier));
      }
    }
  }

  // Phase 4B: Validate weekly volume against framework ranges
  validateWeeklyVolume(weeklyPlan, experienceLevel);

  const output: WorkoutPlanOutput = {
    splitType: split.splitType,
    splitName: lang === "ar" ? split.splitNameAr : split.splitName,
    splitDescription: lang === "ar" ? split.splitDescriptionAr : split.splitDescription,
    weeklyPlan,
    progressionNotes: generateProgressionNotes(input),
    safetyTips: generateSafetyTips(input),
  };

  // Phase 5C: Include week phases for plans >= 4 weeks
  if (totalWeeks >= 4) {
    output.weekPhases = weekPhases;
  }

  return output;
}

// ---------------------------------------------------------------------------
// Injury parser helper
// ---------------------------------------------------------------------------

/**
 * Extract injury-related strings from assessment and latest check-in data.
 * Returns a deduplicated array of injury keywords/descriptions.
 */
export function parseInjuries(
  assessment: any | null | undefined,
  latestCheckIn: any | null | undefined,
): string[] {
  const injuries = new Set<string>();

  // From assessment.injuries (string[])
  if (assessment?.injuries && Array.isArray(assessment.injuries)) {
    for (const injury of assessment.injuries) {
      if (typeof injury === "string" && injury.trim()) {
        injuries.add(injury.trim().toLowerCase());
      }
    }
  }

  // From assessment.medicalConditions that look injury-related
  if (assessment?.medicalConditions && Array.isArray(assessment.medicalConditions)) {
    const injuryKeywords = [
      "injury",
      "pain",
      "tear",
      "sprain",
      "strain",
      "fracture",
      "herniat",
      "disc",
      "tendon",
      "ligament",
      "surgery",
      "إصابة",
      "ألم",
      "تمزق",
      "كسر",
    ];
    for (const cond of assessment.medicalConditions) {
      if (typeof cond === "string") {
        const lower = cond.toLowerCase();
        if (injuryKeywords.some((kw) => lower.includes(kw))) {
          injuries.add(cond.trim().toLowerCase());
        }
      }
    }
  }

  // From latest check-in newInjuries (string)
  if (latestCheckIn?.newInjuries && typeof latestCheckIn.newInjuries === "string") {
    const raw = latestCheckIn.newInjuries.trim();
    if (raw) {
      // Split on commas or newlines
      for (const part of raw.split(/[,\n]+/)) {
        const trimmed = part.trim().toLowerCase();
        if (trimmed) injuries.add(trimmed);
      }
    }
  }

  return Array.from(injuries);
}
