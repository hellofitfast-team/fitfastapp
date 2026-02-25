/**
 * Deterministic nutrition calculation engine.
 * Uses Mifflin-St Jeor equation for BMR, activity multipliers for TDEE,
 * and ISSN macronutrient guidelines for protein/carbs/fat targets.
 *
 * This runs in code (not the LLM) because LLMs can't do math reliably.
 */

interface NutritionInput {
  weightKg: number;
  heightCm: number;
  age: number;
  gender: "male" | "female";
  trainingDaysPerWeek: number;
  goal: string; // "weight_loss" | "muscle_gain" | "body_recomposition" | "general_fitness" | etc.
}

export interface NutritionTargets {
  bmr: number;
  tdee: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  proteinPerKg: number;
  minCalories: number;
}

/**
 * Mifflin-St Jeor BMR equation (most accurate for general population).
 * Male:   10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5
 * Female: 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161
 */
function calculateBMR(weightKg: number, heightCm: number, age: number, gender: "male" | "female"): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

/**
 * Activity multiplier based on training days per week.
 * Based on Harris-Benedict activity factor scale.
 */
function getActivityMultiplier(trainingDaysPerWeek: number): number {
  if (trainingDaysPerWeek <= 1) return 1.2;   // Sedentary
  if (trainingDaysPerWeek <= 3) return 1.375;  // Lightly active
  if (trainingDaysPerWeek <= 5) return 1.55;   // Moderately active
  return 1.725;                                 // Very active
}

/**
 * Map goal string to a calorie adjustment factor.
 */
function getGoalMultiplier(goal: string): number {
  const normalized = goal.toLowerCase().replace(/[\s_-]/g, "");
  if (normalized.includes("weightloss") || normalized.includes("fatloss") || normalized.includes("cutting")) {
    return 0.80; // 20% deficit
  }
  if (normalized.includes("musclegain") || normalized.includes("bulking") || normalized.includes("massbuilding")) {
    return 1.10; // 10% surplus
  }
  // body_recomposition, general_fitness, maintenance, etc.
  return 1.0;
}

/**
 * Protein per kg based on goal (ISSN position stand guidelines).
 * - Weight loss / cutting: 2.0-2.2 g/kg (higher to preserve muscle)
 * - Muscle gain: 1.6-2.0 g/kg
 * - General: 1.6-1.8 g/kg
 */
function getProteinPerKg(goal: string): number {
  const normalized = goal.toLowerCase().replace(/[\s_-]/g, "");
  if (normalized.includes("weightloss") || normalized.includes("fatloss") || normalized.includes("cutting")) {
    return 2.0;
  }
  if (normalized.includes("musclegain") || normalized.includes("bulking")) {
    return 1.8;
  }
  return 1.6;
}

export function calculateNutritionTargets(input: NutritionInput): NutritionTargets {
  const { weightKg, heightCm, age, gender, trainingDaysPerWeek, goal } = input;

  const bmr = Math.round(calculateBMR(weightKg, heightCm, age, gender));
  const activityMultiplier = getActivityMultiplier(trainingDaysPerWeek);
  const tdee = Math.round(bmr * activityMultiplier);

  const goalMultiplier = getGoalMultiplier(goal);
  const minCalories = gender === "male" ? 1500 : 1200;
  const calories = Math.max(minCalories, Math.round(tdee * goalMultiplier));

  // Macros (ISSN guidelines)
  const proteinPerKg = getProteinPerKg(goal);
  const protein = Math.round(weightKg * proteinPerKg);
  const fat = Math.round(weightKg * 0.9); // 0.8-1.0 g/kg, use 0.9 middle ground

  // Carbs fill remaining calories: (calories - protein*4 - fat*9) / 4
  const remainingCalories = calories - (protein * 4) - (fat * 9);
  const carbs = Math.max(50, Math.round(remainingCalories / 4)); // Min 50g carbs

  return { bmr, tdee, calories, protein, carbs, fat, proteinPerKg, minCalories };
}
