/**
 * Pure utility functions extracted from ai.ts for testability.
 * No Convex runtime dependency — these are plain data transformations.
 */

import type { NutritionTargets } from "./nutritionEngine";

// ---------------------------------------------------------------------------
// Demo mode detection
// ---------------------------------------------------------------------------

/**
 * Determines whether AI should run in demo mode (returning mock plans).
 * Demo mode activates when explicitly enabled OR when no AI API keys are configured.
 */
export function shouldActivateDemoMode(
  demoMode: boolean,
  hasGoogleKey: boolean,
  hasDeepSeekKey: boolean,
): boolean {
  return demoMode || (!hasGoogleKey && !hasDeepSeekKey);
}

// ---------------------------------------------------------------------------
// Robust JSON extraction & repair
// ---------------------------------------------------------------------------

/**
 * Attempts to extract and parse a JSON object from potentially messy LLM output.
 * Handles: markdown fences, leading/trailing text, trailing commas, truncated JSON.
 */
export function extractJSON(raw: string): Record<string, unknown> {
  // 1. Strip markdown code fences
  let text = raw.replace(/```(?:json)?\s*\n?/g, "").trim();

  // 2. Extract the outermost { ... } if surrounded by extra text
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    text = text.slice(firstBrace, lastBrace + 1);
  }

  // 3. Try direct parse first
  try {
    return JSON.parse(text);
  } catch {
    // continue to repairs
  }

  // 4. Fix trailing commas before } or ] (common LLM mistake)
  let repaired = text.replace(/,\s*([\]}])/g, "$1");

  try {
    return JSON.parse(repaired);
  } catch {
    // continue
  }

  // 5. Handle truncated JSON: try closing open brackets/braces
  repaired = repaired.trimEnd();
  // Count unmatched openers
  let braces = 0,
    brackets = 0;
  let inString = false,
    escaped = false;
  for (const ch of repaired) {
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === "\\") {
      escaped = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (inString) continue;
    if (ch === "{") braces++;
    else if (ch === "}") braces--;
    else if (ch === "[") brackets++;
    else if (ch === "]") brackets--;
  }
  // If we're inside a string, close it
  if (inString) repaired += '"';
  // Close unmatched brackets/braces
  for (let i = 0; i < brackets; i++) repaired += "]";
  for (let i = 0; i < braces; i++) repaired += "}";

  // Remove any trailing commas that appeared before our closers
  repaired = repaired.replace(/,\s*([\]}])/g, "$1");

  return JSON.parse(repaired); // let this throw if still broken
}

// ---------------------------------------------------------------------------
// Post-generation validation & auto-correction
// ---------------------------------------------------------------------------

export interface ValidationWarning {
  type:
    | "macro_mismatch"
    | "below_minimum_calories"
    | "zero_value"
    | "missing_exercises"
    | "missing_warmup_cooldown"
    | "totals_corrected"
    | "alt_macro_scaled";
  day?: string;
  message: string;
}

export function validateAndCorrectMealPlan(
  planData: Record<string, unknown>,
  nutritionTargets: NutritionTargets,
): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];
  const weeklyPlan = planData.weeklyPlan as Record<string, any> | undefined;
  if (!weeklyPlan || typeof weeklyPlan !== "object") return warnings;

  for (const [dayKey, dayData] of Object.entries(weeklyPlan)) {
    if (!dayData?.meals || !Array.isArray(dayData.meals)) continue;

    // Sum actual meal macros
    let sumCalories = 0,
      sumProtein = 0,
      sumCarbs = 0,
      sumFat = 0;
    for (const meal of dayData.meals) {
      if (!meal || typeof meal !== "object") continue;
      sumCalories += Number(meal.calories) || 0;
      sumProtein += Number(meal.protein) || 0;
      sumCarbs += Number(meal.carbs) || 0;
      sumFat += Number(meal.fat) || 0;

      // Flag zero-value meals
      if ((Number(meal.calories) || 0) === 0) {
        warnings.push({
          type: "zero_value",
          day: dayKey,
          message: `Meal "${meal.name}" has 0 calories`,
        });
      }
      if ((Number(meal.protein) || 0) === 0) {
        warnings.push({
          type: "zero_value",
          day: dayKey,
          message: `Meal "${meal.name}" has 0 protein`,
        });
      }

      // Validate and correct alternatives' macros
      if (Array.isArray(meal.alternatives)) {
        const mealCal = Number(meal.calories) || 0;
        for (const alt of meal.alternatives) {
          if (!alt || typeof alt !== "object") continue;
          // Per-alternative macro cross-check: P*4 + C*4 + F*9 should ≈ claimed calories
          const altCal = Number(alt.calories) || 0;
          const computedAltCal =
            (Number(alt.protein) || 0) * 4 +
            (Number(alt.carbs) || 0) * 4 +
            (Number(alt.fat) || 0) * 9;
          if (altCal > 0 && Math.abs(computedAltCal - altCal) > 30) {
            alt.calories = Math.round(computedAltCal);
          }
          // Scale alternative if >10% off from parent meal calories
          const correctedAltCal = Number(alt.calories) || 0;
          if (mealCal > 0 && correctedAltCal > 0) {
            const altDiff = Math.abs(correctedAltCal - mealCal) / mealCal;
            if (altDiff > 0.1) {
              const altScale = mealCal / correctedAltCal;
              alt.calories = Math.round(correctedAltCal * altScale);
              alt.protein = Math.round((Number(alt.protein) || 0) * altScale);
              alt.carbs = Math.round((Number(alt.carbs) || 0) * altScale);
              alt.fat = Math.round((Number(alt.fat) || 0) * altScale);
              warnings.push({
                type: "alt_macro_scaled",
                day: dayKey,
                message: `Alt "${alt.name}" for "${meal.name}" scaled by ${altScale.toFixed(2)}x to match meal calories`,
              });
            }
          }
        }
      }
    }

    // Auto-correct dailyTotals to match actual meal sums
    const existingTotals = dayData.dailyTotals;
    const correctedTotals = {
      calories: Math.round(sumCalories),
      protein: Math.round(sumProtein),
      carbs: Math.round(sumCarbs),
      fat: Math.round(sumFat),
    };

    if (
      existingTotals &&
      (Math.abs((existingTotals.calories ?? 0) - sumCalories) > 1 ||
        Math.abs((existingTotals.protein ?? 0) - sumProtein) > 1)
    ) {
      warnings.push({
        type: "totals_corrected",
        day: dayKey,
        message: `dailyTotals corrected: was ${existingTotals.calories}cal/${existingTotals.protein}p, actual sum ${correctedTotals.calories}cal/${correctedTotals.protein}p`,
      });
    }
    dayData.dailyTotals = correctedTotals;

    // Per-meal macro cross-check: P*4 + C*4 + F*9 should ≈ claimed calories
    for (const meal of dayData.meals) {
      if (!meal || typeof meal !== "object") continue;
      const mealCal = Number(meal.calories) || 0;
      const computedCal =
        (Number(meal.protein) || 0) * 4 +
        (Number(meal.carbs) || 0) * 4 +
        (Number(meal.fat) || 0) * 9;
      if (mealCal > 0 && Math.abs(computedCal - mealCal) > 30) {
        meal.calories = Math.round(computedCal);
        warnings.push({
          type: "macro_mismatch",
          day: dayKey,
          message: `Meal "${meal.name}" calories corrected: claimed ${mealCal}, macro sum ${Math.round(computedCal)}`,
        });
      }
    }

    // Recalculate after per-meal corrections
    sumCalories = 0;
    sumProtein = 0;
    sumCarbs = 0;
    sumFat = 0;
    for (const meal of dayData.meals) {
      if (!meal || typeof meal !== "object") continue;
      sumCalories += Number(meal.calories) || 0;
      sumProtein += Number(meal.protein) || 0;
      sumCarbs += Number(meal.carbs) || 0;
      sumFat += Number(meal.fat) || 0;
    }
    dayData.dailyTotals = {
      calories: Math.round(sumCalories),
      protein: Math.round(sumProtein),
      carbs: Math.round(sumCarbs),
      fat: Math.round(sumFat),
    };

    // Check if day is significantly off from nutrition targets
    const calorieDiff =
      Math.abs(sumCalories - nutritionTargets.calories) / nutritionTargets.calories;
    if (calorieDiff > 0.1 && sumCalories > 0) {
      // Scale at daily level first: preserve protein ratio, scale fat, derive carbs from remainder
      const scaleFactor = nutritionTargets.calories / sumCalories;
      const scaledProtein = Math.round(sumProtein * scaleFactor);
      const scaledFat = Math.round(sumFat * scaleFactor);
      // Derive carbs from calorie remainder to avoid cumulative rounding errors
      const scaledCarbs = Math.round(
        (nutritionTargets.calories - scaledProtein * 4 - scaledFat * 9) / 4,
      );

      // Distribute proportionally to meals
      for (const meal of dayData.meals) {
        if (!meal || typeof meal !== "object") continue;
        meal.calories = Math.round((Number(meal.calories) || 0) * scaleFactor);
        meal.protein = Math.round((Number(meal.protein) || 0) * scaleFactor);
        meal.carbs = Math.round((Number(meal.carbs) || 0) * scaleFactor);
        meal.fat = Math.round((Number(meal.fat) || 0) * scaleFactor);
      }
      dayData.dailyTotals = {
        calories: nutritionTargets.calories,
        protein: scaledProtein,
        carbs: scaledCarbs,
        fat: scaledFat,
      };
      warnings.push({
        type: "totals_corrected",
        day: dayKey,
        message: `Day calories ${Math.round(sumCalories)} were ${Math.round(calorieDiff * 100)}% off — portions scaled by ${scaleFactor.toFixed(2)}x`,
      });
    } else if (calorieDiff > 0.05) {
      warnings.push({
        type: "macro_mismatch",
        day: dayKey,
        message: `Day calories ${Math.round(sumCalories)} are ${Math.round(calorieDiff * 100)}% off from target ${nutritionTargets.calories}`,
      });
    }

    // Check minimum calorie floor (use post-scaling value)
    const finalCalories = dayData.dailyTotals.calories;
    if (finalCalories > 0 && finalCalories < nutritionTargets.minCalories) {
      warnings.push({
        type: "below_minimum_calories",
        day: dayKey,
        message: `Day calories ${finalCalories} below safe minimum ${nutritionTargets.minCalories}`,
      });
    }
  }

  return warnings;
}

export function validateWorkoutPlan(planData: Record<string, unknown>): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];
  const weeklyPlan = planData.weeklyPlan as Record<string, any> | undefined;
  if (!weeklyPlan || typeof weeklyPlan !== "object") return warnings;

  for (const [dayKey, dayData] of Object.entries(weeklyPlan)) {
    if (!dayData || typeof dayData !== "object") continue;

    const isRestDay = dayData.restDay === true;

    if (!isRestDay) {
      // Training day checks
      if (
        !dayData.exercises ||
        !Array.isArray(dayData.exercises) ||
        dayData.exercises.length === 0
      ) {
        warnings.push({
          type: "missing_exercises",
          day: dayKey,
          message: `Training day "${dayData.workoutName}" has no exercises`,
        });
      }
      if (!dayData.warmup?.exercises?.length) {
        warnings.push({
          type: "missing_warmup_cooldown",
          day: dayKey,
          message: `Training day "${dayData.workoutName}" missing warmup`,
        });
      }
      if (!dayData.cooldown?.exercises?.length) {
        warnings.push({
          type: "missing_warmup_cooldown",
          day: dayKey,
          message: `Training day "${dayData.workoutName}" missing cooldown`,
        });
      }
    }
  }

  return warnings;
}
