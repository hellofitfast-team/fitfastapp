/**
 * Typed validators for AI-generated plan data.
 * Replaces v.any() on mealPlans.planData and workoutPlans.planData.
 *
 * Per convex-schema-validator skill: use v.optional() generously for fields
 * that AI may not always generate. Use v.record() for dynamic day keys.
 */
import { v } from "convex/values";

// ── Shared nutrition macros ──────────────────────────────────────────────

const macrosValidator = v.object({
  calories: v.number(),
  protein: v.number(),
  carbs: v.number(),
  fat: v.number(),
});

const optionalMacrosValidator = v.object({
  calories: v.optional(v.number()),
  protein: v.optional(v.number()),
  carbs: v.optional(v.number()),
  fat: v.optional(v.number()),
});

// ── Meal plan validators ─────────────────────────────────────────────────

const mealValidator = v.object({
  name: v.optional(v.string()),
  type: v.optional(v.string()), // "breakfast" | "lunch" | "dinner" | "snack" — AI may produce variants
  time: v.optional(v.string()),
  calories: v.optional(v.number()),
  protein: v.optional(v.number()),
  carbs: v.optional(v.number()),
  fat: v.optional(v.number()),
  // Legacy nested macros format (some older plans use this)
  macros: v.optional(optionalMacrosValidator),
  ingredients: v.optional(
    v.union(
      v.array(v.string()),
      v.array(
        v.object({
          item: v.optional(v.string()),
          quantity: v.optional(v.string()),
        }),
      ),
    ),
  ),
  instructions: v.optional(v.union(v.array(v.string()), v.string())),
  // Alternatives can be strings or meal-like objects; AI output is unpredictable
  // (e.g. typos like "carps" instead of "carbs"), so we keep this permissive
  alternatives: v.optional(v.array(v.any())),
});

const mealDayValidator = v.object({
  meals: v.optional(v.array(mealValidator)),
  dailyTotals: v.optional(optionalMacrosValidator),
});

/** Full meal plan data validator — replaces v.any() on mealPlans.planData */
export const mealPlanDataValidator = v.object({
  dailyTargets: v.optional(macrosValidator),
  weeklyPlan: v.record(v.string(), mealDayValidator),
  weeklyTotals: v.optional(optionalMacrosValidator),
  notes: v.optional(v.string()),
  // Female health disclaimers (added dynamically by AI)
  pregnancyDisclaimer: v.optional(v.string()),
  breastfeedingNote: v.optional(v.string()),
  // Validation warnings from post-generation checks
  validationWarnings: v.optional(
    v.array(
      v.object({
        type: v.string(),
        day: v.optional(v.string()),
        message: v.string(),
      }),
    ),
  ),
});

// ── Workout plan validators ──────────────────────────────────────────────

const exerciseValidator = v.object({
  name: v.optional(v.string()),
  sets: v.optional(v.number()),
  reps: v.optional(v.union(v.string(), v.number())),
  rest: v.optional(v.union(v.string(), v.number())),
  restBetweenSets: v.optional(v.union(v.string(), v.number())), // Alternative field name
  notes: v.optional(v.string()),
  instructions: v.optional(v.union(v.array(v.string()), v.string())),
  targetMuscles: v.optional(v.array(v.string())),
  musclesTargeted: v.optional(v.array(v.string())), // Alternative field name from AI
  equipment: v.optional(v.string()),
  suggestedWeight: v.optional(v.string()),
  exerciseDbId: v.optional(v.string()), // Reference to exerciseDatabase entry
  tempo: v.optional(v.string()), // e.g. "3-1-2-0" eccentric-pause-concentric-pause
  weight: v.optional(v.union(v.string(), v.number())),
  duration: v.optional(v.union(v.string(), v.number())),
  intensity: v.optional(v.string()),
});

const warmupCooldownExerciseValidator = v.object({
  name: v.optional(v.string()),
  duration: v.optional(v.number()),
  instructions: v.optional(v.union(v.array(v.string()), v.string())),
  exerciseDbId: v.optional(v.string()), // Reference to exerciseDatabase entry
});

const workoutDayValidator = v.object({
  restDay: v.optional(v.boolean()),
  workoutName: v.optional(v.string()),
  name: v.optional(v.string()), // Alternative field name
  duration: v.optional(v.number()),
  targetMuscles: v.optional(v.array(v.string())),
  musclesTargeted: v.optional(v.array(v.string())),
  warmup: v.optional(
    v.object({
      exercises: v.optional(v.array(warmupCooldownExerciseValidator)),
    }),
  ),
  exercises: v.optional(v.array(exerciseValidator)),
  cooldown: v.optional(
    v.object({
      exercises: v.optional(v.array(warmupCooldownExerciseValidator)),
    }),
  ),
  cardioFinisher: v.optional(
    v.object({
      name: v.optional(v.string()),
      durationMinutes: v.optional(v.number()),
      intensity: v.optional(v.string()),
      instructions: v.optional(v.union(v.array(v.string()), v.string())),
      exerciseDbId: v.optional(v.string()), // Reference to exerciseDatabase entry
    }),
  ),
  supersets: v.optional(
    v.array(
      v.object({
        exerciseA: v.optional(v.string()),
        exerciseB: v.optional(v.string()),
      }),
    ),
  ),
  activeRecovery: v.optional(
    v.object({
      recommendation: v.optional(v.string()),
      durationMinutes: v.optional(v.number()),
      intensity: v.optional(v.string()),
    }),
  ),
});

/** Full workout plan data validator — replaces v.any() on workoutPlans.planData */
export const workoutPlanDataValidator = v.object({
  weeklyPlan: v.record(v.string(), workoutDayValidator),
  splitType: v.optional(v.string()),
  splitName: v.optional(v.string()),
  splitDescription: v.optional(v.string()),
  weekPhases: v.optional(
    v.array(
      v.object({
        week: v.number(),
        phase: v.string(),
        volumeMultiplier: v.number(),
      }),
    ),
  ),
  progressionNotes: v.optional(v.string()),
  safetyTips: v.optional(v.union(v.array(v.string()), v.string())),
  notes: v.optional(v.string()),
});
