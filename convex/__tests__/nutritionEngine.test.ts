import { describe, it, expect } from "vitest";
import { calculateNutritionTargets, type NutritionTargets } from "../nutritionEngine";

describe("calculateNutritionTargets", () => {
  // ─── BMR (Mifflin-St Jeor) ───────────────────────────────────────────

  describe("BMR calculation", () => {
    it("calculates BMR correctly for a male", () => {
      // Male: 10 * 80 + 6.25 * 175 - 5 * 25 + 5 = 800 + 1093.75 - 125 + 5 = 1773.75 → 1774
      const result = calculateNutritionTargets({
        weightKg: 80,
        heightCm: 175,
        age: 25,
        gender: "male",
        trainingDaysPerWeek: 3,
        goal: "general_fitness",
      });
      expect(result.bmr).toBe(1774);
    });

    it("calculates BMR correctly for a female", () => {
      // Female: 10 * 60 + 6.25 * 165 - 5 * 30 - 161 = 600 + 1031.25 - 150 - 161 = 1320.25 → 1320
      const result = calculateNutritionTargets({
        weightKg: 60,
        heightCm: 165,
        age: 30,
        gender: "female",
        trainingDaysPerWeek: 3,
        goal: "general_fitness",
      });
      expect(result.bmr).toBe(1320);
    });
  });

  // ─── Activity Multiplier & TDEE ───────────────────────────────────────

  describe("TDEE with activity levels", () => {
    const baseInput = {
      weightKg: 80,
      heightCm: 175,
      age: 25,
      gender: "male" as const,
      goal: "general_fitness",
    };

    it("uses lightly_active as default when activityLevel is not specified", () => {
      // BMR=1774, multiplier = 1.375 + (3 * 0.05) = 1.525
      // TDEE = 1774 * 1.525 = 2705.35 → 2705
      const result = calculateNutritionTargets({ ...baseInput, trainingDaysPerWeek: 3 });
      expect(result.tdee).toBe(2705);
    });

    it("uses sedentary multiplier correctly", () => {
      // BMR=1774, multiplier = 1.2 + (3 * 0.05) = 1.35
      // TDEE = 1774 * 1.35 = 2394.9 → 2395
      const result = calculateNutritionTargets({
        ...baseInput,
        trainingDaysPerWeek: 3,
        activityLevel: "sedentary",
      });
      expect(result.tdee).toBe(2395);
    });

    it("uses very_active multiplier correctly", () => {
      // BMR=1774, multiplier = 1.725 + (4 * 0.05) = 1.925 → capped at 1.9
      // TDEE = 1774 * 1.9 = 3370.6 → 3371
      const result = calculateNutritionTargets({
        ...baseInput,
        trainingDaysPerWeek: 4,
        activityLevel: "very_active",
      });
      expect(result.tdee).toBe(3371);
    });

    it("caps activity multiplier at 1.9", () => {
      // very_active (1.725) + 7 * 0.05 (0.35) = 2.075 → capped at 1.9
      const result = calculateNutritionTargets({
        ...baseInput,
        trainingDaysPerWeek: 7,
        activityLevel: "very_active",
      });
      // TDEE = 1774 * 1.9 = 3370.6 → 3371
      expect(result.tdee).toBe(3371);
    });
  });

  // ─── Goal-based calorie adjustment ────────────────────────────────────

  describe("goal-based calorie adjustment", () => {
    const baseInput = {
      weightKg: 80,
      heightCm: 175,
      age: 25,
      gender: "male" as const,
      trainingDaysPerWeek: 3,
      activityLevel: "sedentary" as const,
    };
    // BMR=1774, TDEE=2395 for these inputs

    it("applies 20% deficit for weight_loss goal", () => {
      const result = calculateNutritionTargets({ ...baseInput, goal: "weight_loss" });
      // 2395 * 0.80 = 1916
      expect(result.calories).toBe(1916);
    });

    it("applies 20% deficit for fat_loss goal", () => {
      const result = calculateNutritionTargets({ ...baseInput, goal: "fat_loss" });
      expect(result.calories).toBe(1916);
    });

    it("applies 20% deficit for cutting goal", () => {
      const result = calculateNutritionTargets({ ...baseInput, goal: "cutting" });
      expect(result.calories).toBe(1916);
    });

    it("applies 10% surplus for muscle_gain goal", () => {
      const result = calculateNutritionTargets({ ...baseInput, goal: "muscle_gain" });
      // 2395 * 1.10 = 2634.5 → 2635
      expect(result.calories).toBe(2635);
    });

    it("applies 10% surplus for bulking goal", () => {
      const result = calculateNutritionTargets({ ...baseInput, goal: "bulking" });
      expect(result.calories).toBe(2635);
    });

    it("applies 10% surplus for mass_building goal", () => {
      const result = calculateNutritionTargets({ ...baseInput, goal: "mass_building" });
      expect(result.calories).toBe(2635);
    });

    it("uses maintenance (1.0) for body_recomposition", () => {
      const result = calculateNutritionTargets({ ...baseInput, goal: "body_recomposition" });
      // 2395 * 1.0 = 2395
      expect(result.calories).toBe(2395);
    });

    it("uses maintenance (1.0) for general_fitness", () => {
      const result = calculateNutritionTargets({ ...baseInput, goal: "general_fitness" });
      expect(result.calories).toBe(2395);
    });
  });

  // ─── Minimum calorie floor ────────────────────────────────────────────

  describe("minimum calorie floor", () => {
    it("enforces 1500 kcal floor for males", () => {
      // Very light male: BMR will be low, deficit could push below 1500
      const result = calculateNutritionTargets({
        weightKg: 50,
        heightCm: 155,
        age: 60,
        gender: "male",
        trainingDaysPerWeek: 0,
        goal: "weight_loss",
        activityLevel: "sedentary",
      });
      // BMR = 10*50 + 6.25*155 - 5*60 + 5 = 500 + 968.75 - 300 + 5 = 1173.75 → 1174
      // TDEE = 1174 * (1.2 + 0) = 1408.8 → 1409
      // Calories = 1409 * 0.80 = 1127.2 → 1127 → floored to 1500
      expect(result.calories).toBe(1500);
      expect(result.minCalories).toBe(1500);
    });

    it("enforces 1200 kcal floor for females", () => {
      const result = calculateNutritionTargets({
        weightKg: 45,
        heightCm: 150,
        age: 55,
        gender: "female",
        trainingDaysPerWeek: 0,
        goal: "weight_loss",
        activityLevel: "sedentary",
      });
      // BMR = 10*45 + 6.25*150 - 5*55 - 161 = 450 + 937.5 - 275 - 161 = 951.5 → 952
      // TDEE = 952 * 1.2 = 1142.4 → 1142
      // Calories = 1142 * 0.80 = 913.6 → 914 → floored to 1200
      expect(result.calories).toBe(1200);
      expect(result.minCalories).toBe(1200);
    });
  });

  // ─── Macronutrient distribution ───────────────────────────────────────

  describe("macronutrient distribution", () => {
    it("sets protein at 2.0 g/kg for weight_loss", () => {
      const result = calculateNutritionTargets({
        weightKg: 80,
        heightCm: 175,
        age: 25,
        gender: "male",
        trainingDaysPerWeek: 4,
        goal: "weight_loss",
      });
      expect(result.proteinPerKg).toBe(2.0);
      expect(result.protein).toBe(160); // 80 * 2.0
    });

    it("sets protein at 1.8 g/kg for muscle_gain", () => {
      const result = calculateNutritionTargets({
        weightKg: 80,
        heightCm: 175,
        age: 25,
        gender: "male",
        trainingDaysPerWeek: 4,
        goal: "muscle_gain",
      });
      expect(result.proteinPerKg).toBe(1.8);
      expect(result.protein).toBe(144); // 80 * 1.8
    });

    it("sets protein at 1.6 g/kg for general_fitness", () => {
      const result = calculateNutritionTargets({
        weightKg: 80,
        heightCm: 175,
        age: 25,
        gender: "male",
        trainingDaysPerWeek: 4,
        goal: "general_fitness",
      });
      expect(result.proteinPerKg).toBe(1.6);
      expect(result.protein).toBe(128); // 80 * 1.6
    });

    it("sets fat at 0.9 g/kg", () => {
      const result = calculateNutritionTargets({
        weightKg: 80,
        heightCm: 175,
        age: 25,
        gender: "male",
        trainingDaysPerWeek: 4,
        goal: "general_fitness",
      });
      expect(result.fat).toBe(72); // 80 * 0.9
    });

    it("calculates carbs from remaining calories", () => {
      const result = calculateNutritionTargets({
        weightKg: 80,
        heightCm: 175,
        age: 25,
        gender: "male",
        trainingDaysPerWeek: 4,
        goal: "general_fitness",
        activityLevel: "sedentary",
      });
      // Verify carbs = (calories - protein*4 - fat*9) / 4
      const expectedCarbs = Math.round((result.calories - result.protein * 4 - result.fat * 9) / 4);
      expect(result.carbs).toBe(expectedCarbs);
    });

    it("enforces minimum 50g carbs", () => {
      // A very low calorie scenario where carbs would go negative
      const result = calculateNutritionTargets({
        weightKg: 120,
        heightCm: 155,
        age: 60,
        gender: "female",
        trainingDaysPerWeek: 0,
        goal: "weight_loss",
        activityLevel: "sedentary",
      });
      // Heavy person + low calories = protein + fat can exceed total cal budget
      // Carbs should be floored at 50
      expect(result.carbs).toBeGreaterThanOrEqual(50);
    });
  });

  // ─── Edge cases ───────────────────────────────────────────────────────

  describe("edge cases", () => {
    it("handles zero training days", () => {
      const result = calculateNutritionTargets({
        weightKg: 70,
        heightCm: 170,
        age: 30,
        gender: "male",
        trainingDaysPerWeek: 0,
        goal: "general_fitness",
        activityLevel: "sedentary",
      });
      // multiplier = 1.2 + 0 = 1.2
      const expectedBmr = Math.round(10 * 70 + 6.25 * 170 - 5 * 30 + 5);
      expect(result.bmr).toBe(expectedBmr);
      expect(result.tdee).toBe(Math.round(expectedBmr * 1.2));
    });

    it("handles 7 training days per week", () => {
      const result = calculateNutritionTargets({
        weightKg: 70,
        heightCm: 170,
        age: 30,
        gender: "male",
        trainingDaysPerWeek: 7,
        goal: "muscle_gain",
        activityLevel: "moderately_active",
      });
      // 1.55 + 0.35 = 1.9 (exactly at cap)
      const expectedBmr = Math.round(10 * 70 + 6.25 * 170 - 5 * 30 + 5);
      expect(result.tdee).toBe(Math.round(expectedBmr * 1.9));
    });

    it("returns all required fields", () => {
      const result = calculateNutritionTargets({
        weightKg: 75,
        heightCm: 180,
        age: 28,
        gender: "male",
        trainingDaysPerWeek: 4,
        goal: "general_fitness",
      });
      expect(result).toHaveProperty("bmr");
      expect(result).toHaveProperty("tdee");
      expect(result).toHaveProperty("calories");
      expect(result).toHaveProperty("protein");
      expect(result).toHaveProperty("carbs");
      expect(result).toHaveProperty("fat");
      expect(result).toHaveProperty("proteinPerKg");
      expect(result).toHaveProperty("minCalories");
    });

    it("all numeric results are whole numbers (rounded)", () => {
      const result = calculateNutritionTargets({
        weightKg: 73.5,
        heightCm: 177,
        age: 33,
        gender: "female",
        trainingDaysPerWeek: 5,
        goal: "body_recomposition",
      });
      expect(Number.isInteger(result.bmr)).toBe(true);
      expect(Number.isInteger(result.tdee)).toBe(true);
      expect(Number.isInteger(result.calories)).toBe(true);
      expect(Number.isInteger(result.protein)).toBe(true);
      expect(Number.isInteger(result.carbs)).toBe(true);
      expect(Number.isInteger(result.fat)).toBe(true);
    });

    it("handles goal string variations with spaces, dashes, underscores", () => {
      const goals = ["weight_loss", "weight-loss", "weight loss", "WEIGHT_LOSS"];
      const results = goals.map((goal) =>
        calculateNutritionTargets({
          weightKg: 80,
          heightCm: 175,
          age: 25,
          gender: "male",
          trainingDaysPerWeek: 3,
          goal,
          activityLevel: "sedentary",
        }),
      );
      // All variations should produce identical results
      for (let i = 1; i < results.length; i++) {
        expect(results[i]!.calories).toBe(results[0]!.calories);
        expect(results[i]!.protein).toBe(results[0]!.protein);
      }
    });
  });
});
