import { describe, it, expect } from "vitest";
import { validateAndCorrectMealPlan, type ValidationWarning } from "../aiUtils";
import type { NutritionTargets } from "../nutritionEngine";

function makeTargets(overrides?: Partial<NutritionTargets>): NutritionTargets {
  return {
    bmr: 1700,
    tdee: 2200,
    calories: 2200,
    protein: 165,
    carbs: 248,
    fat: 73,
    proteinPerKg: 2.0,
    minCalories: 1200,
    ...overrides,
  };
}

function makeMeal(overrides?: Record<string, unknown>) {
  // Default: 40*4 + 60*4 + 15*9 = 160 + 240 + 135 = 535
  return {
    name: "Lunch",
    type: "lunch",
    calories: 535,
    protein: 40,
    carbs: 60,
    fat: 15,
    ...overrides,
  };
}

function makePlan(meals: Record<string, unknown>[], dailyTotals?: Record<string, unknown>) {
  const totals = dailyTotals ?? {
    calories: meals.reduce((s, m) => s + (Number(m.calories) || 0), 0),
    protein: meals.reduce((s, m) => s + (Number(m.protein) || 0), 0),
    carbs: meals.reduce((s, m) => s + (Number(m.carbs) || 0), 0),
    fat: meals.reduce((s, m) => s + (Number(m.fat) || 0), 0),
  };
  return {
    weeklyPlan: {
      day1: {
        meals,
        dailyTotals: totals,
      },
    },
  };
}

describe("validateAndCorrectMealPlan", () => {
  it("returns zero warnings for a correct plan", () => {
    // Build 4 meals that sum close to 2200 target
    // Meal macros: P*4 + C*4 + F*9 must be within 30 of claimed calories
    const meals = [
      makeMeal({
        name: "Breakfast",
        type: "breakfast",
        calories: 535,
        protein: 40,
        carbs: 60,
        fat: 15,
      }),
      makeMeal({ name: "Lunch", type: "lunch", calories: 535, protein: 40, carbs: 60, fat: 15 }),
      makeMeal({ name: "Dinner", type: "dinner", calories: 535, protein: 40, carbs: 60, fat: 15 }),
      makeMeal({ name: "Snack", type: "snack", calories: 535, protein: 40, carbs: 60, fat: 15 }),
    ];
    // Total = 2140, which is within 5% of 2200 target (2.7% off)
    const planData = makePlan(meals);
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    expect(warnings).toHaveLength(0);
  });

  it("corrects and warns on meal macro mismatch (P*4+C*4+F*9 != claimed calories)", () => {
    // Actual computed: 30*4 + 50*4 + 10*9 = 120 + 200 + 90 = 410, claimed 500 → diff 90 > 30
    const badMeal = makeMeal({ name: "Bad", calories: 500, protein: 30, carbs: 50, fat: 10 });
    // Need total close to 2200 target to avoid scaling warnings
    const fillerMeal = makeMeal({
      name: "Filler",
      calories: 1790,
      protein: 200,
      carbs: 150,
      fat: 50,
    });
    // Filler computed: 200*4+150*4+50*9 = 800+600+450 = 1850 → diff 60 > 30 → also corrected
    // Use filler that computes correctly: need ~1790 from macros
    // P=120, C=180, F=50 → 480+720+450=1650 nope
    // P=140, C=200, F=50 → 560+800+450=1810 close to 1810
    const filler = makeMeal({ name: "Filler", calories: 1810, protein: 140, carbs: 200, fat: 50 });
    const planData = makePlan([badMeal, filler]);
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    const macroWarnings = warnings.filter((w) => w.type === "macro_mismatch");
    expect(macroWarnings.length).toBeGreaterThanOrEqual(1);
    expect(macroWarnings.some((w) => w.message.includes("Bad"))).toBe(true);
    // Verify the meal was actually corrected
    const correctedMeal = (planData.weeklyPlan as any).day1.meals[0];
    expect(correctedMeal.calories).toBe(410); // P*4+C*4+F*9
  });

  it("warns and corrects when dailyTotals don't match meal sums", () => {
    // Two meals summing to 1070, but dailyTotals claim 1500
    const meals = [
      makeMeal({ name: "M1", calories: 535, protein: 40, carbs: 60, fat: 15 }),
      makeMeal({ name: "M2", calories: 535, protein: 40, carbs: 60, fat: 15 }),
    ];
    const wrongTotals = { calories: 1500, protein: 200, carbs: 120, fat: 30 };
    const planData = makePlan(meals, wrongTotals);
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    const totalsWarnings = warnings.filter((w) => w.type === "totals_corrected");
    expect(totalsWarnings.length).toBeGreaterThanOrEqual(1);
  });

  it("warns when day total is below minimum calories", () => {
    // Use a target close to minCalories so scaling doesn't push it above minimum.
    // Meal: 1000 cal, target: 1050 (within 10% so no scaling), minCalories: 1200
    // Post-correction: 1000 < 1200 → below_minimum_calories warning
    const smallMeal = makeMeal({ name: "Tiny", calories: 1000, protein: 75, carbs: 100, fat: 33 });
    const planData = makePlan([smallMeal]);
    const warnings = validateAndCorrectMealPlan(
      planData,
      makeTargets({ calories: 1050, minCalories: 1200 }),
    );
    const belowMin = warnings.filter((w) => w.type === "below_minimum_calories");
    expect(belowMin).toHaveLength(1);
    expect(belowMin[0].message).toContain("below safe minimum");
  });

  it("warns on zero calorie meal", () => {
    const zeroCalMeal = makeMeal({ name: "Empty", calories: 0, protein: 0, carbs: 0, fat: 0 });
    const normalMeal = makeMeal({ name: "Normal", calories: 535, protein: 40, carbs: 60, fat: 15 });
    const planData = makePlan([zeroCalMeal, normalMeal]);
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    const zeroWarnings = warnings.filter(
      (w) => w.type === "zero_value" && w.message.includes("0 calories"),
    );
    expect(zeroWarnings.length).toBeGreaterThanOrEqual(1);
    expect(zeroWarnings[0].message).toContain("Empty");
  });

  it("warns on zero protein meal", () => {
    // P=0, C=100, F=20 → 0+400+180=580, claim 580
    const zeroProteinMeal = makeMeal({
      name: "NoProtein",
      calories: 580,
      protein: 0,
      carbs: 100,
      fat: 20,
    });
    // Need enough total to avoid below_minimum but that's fine, we just check zero_value
    const planData = makePlan([zeroProteinMeal]);
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    const zeroWarnings = warnings.filter(
      (w) => w.type === "zero_value" && w.message.includes("0 protein"),
    );
    expect(zeroWarnings.length).toBeGreaterThanOrEqual(1);
    expect(zeroWarnings[0].message).toContain("NoProtein");
  });

  it("scales and warns when alternative is >10% off parent meal calories", () => {
    // Parent meal: 500 cal. Alt: 700 cal (40% off > 10%)
    // Parent: P=40, C=50, F=10 → 160+200+90=450, claim 450
    const meal = {
      name: "Main",
      type: "lunch",
      calories: 450,
      protein: 40,
      carbs: 50,
      fat: 10,
      alternatives: [{ name: "AltBig", calories: 700, protein: 50, carbs: 80, fat: 20 }],
    };
    // Fill rest to hit target
    // P=125, C=198, F=63 → 500+792+567=1859, claim 1859 — too far. Let's not worry about day-level warnings.
    const planData = makePlan([meal]);
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    const altWarnings = warnings.filter((w) => w.type === "alt_macro_scaled");
    expect(altWarnings.length).toBeGreaterThanOrEqual(1);
    expect(altWarnings[0].message).toContain("AltBig");
    expect(altWarnings[0].message).toContain("Main");
  });

  it("scales all meals when day is >10% off target calories", () => {
    // Target = 2200. Day total = 3000 (36% off > 10%)
    // Each meal: P=50, C=100, F=30 → 200+400+270=870, claim 870 (within 30? 870-870=0, yes)
    // But we need total ~3000 → nope, 870*3=2610, still within 18% of 2200
    // Use bigger meals: P=80, C=150, F=40 → 320+600+360=1280 each, 3 meals = 3840
    const bigMeal = makeMeal({ name: "Big", calories: 1280, protein: 80, carbs: 150, fat: 40 });
    const planData = makePlan([bigMeal, bigMeal, bigMeal]);
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    const scaleWarnings = warnings.filter(
      (w) => w.type === "totals_corrected" && w.message.includes("scaled"),
    );
    expect(scaleWarnings.length).toBeGreaterThanOrEqual(1);
    // Verify totals were corrected to target
    const totals = (planData.weeklyPlan as any).day1.dailyTotals;
    expect(totals.calories).toBe(2200);
  });

  it("warns but does not scale when day is 5-10% off target", () => {
    // Target = 2200. Day total should be ~2370 (7.7% off)
    // P=50, C=70, F=20 → 200+280+180=660, claim 660
    // 660 * 3 = 1980 → 10% off. Need closer to 7%.
    // Try: 2200 * 1.077 = 2370. Two meals: 1185 each.
    // P=80, C=100, F=35 → 320+400+315=1035, claim 1035
    // 1035*2=2070 → 5.9% off. Good.
    // Actually let's be more precise: need between 5-10% off.
    // 2200*1.07 = 2354. Two meals of ~1177.
    // P=70, C=120, F=33 → 280+480+297=1057. Two = 2114 → 3.9% off, too close.
    // P=80, C=130, F=33 → 320+520+297=1137. Two = 2274 → 3.4% off. Still close.
    // Let's just use 3 meals: P=60, C=80, F=20 → 240+320+180=740. 3*740=2220 → 0.9% off. Too close.
    // Go higher: target * 1.08 = 2376
    // P=60, C=90, F=24 → 240+360+216=816. 3*816=2448 → 11.3% off → triggers scaling.
    // Two meals: P=80, C=110, F=30 → 320+440+270=1030. 2*1030=2060 → 6.4% off. In range.
    // But 1030 claim vs macros 1030 → no macro mismatch.
    // 2060 is 6.4% off 2200 → should get macro_mismatch day-level warning but no scaling.
    const meal = makeMeal({ name: "Med", calories: 1030, protein: 80, carbs: 110, fat: 30 });
    const planData = makePlan([meal, { ...meal, name: "Med2" }]);
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    const dayMacroWarnings = warnings.filter(
      (w) => w.type === "macro_mismatch" && w.message.includes("Day calories"),
    );
    expect(dayMacroWarnings.length).toBeGreaterThanOrEqual(1);
    // No scaling warnings
    const scaleWarnings = warnings.filter(
      (w) => w.type === "totals_corrected" && w.message.includes("scaled"),
    );
    expect(scaleWarnings).toHaveLength(0);
  });

  it("returns empty warnings for empty weeklyPlan", () => {
    const planData = { weeklyPlan: {} };
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    expect(warnings).toHaveLength(0);
  });

  it("returns empty warnings for missing weeklyPlan", () => {
    const planData = {};
    const warnings = validateAndCorrectMealPlan(planData, makeTargets());
    expect(warnings).toHaveLength(0);
  });

  it("skips null/undefined meals in the array gracefully", () => {
    const validMeal = makeMeal({ name: "Valid", calories: 535, protein: 40, carbs: 60, fat: 15 });
    const planData = {
      weeklyPlan: {
        day1: {
          meals: [null, undefined, validMeal, null],
          dailyTotals: { calories: 535, protein: 40, carbs: 60, fat: 15 },
        },
      },
    };
    // Should not throw
    const warnings = validateAndCorrectMealPlan(planData as any, makeTargets());
    // May have day-level warnings (below min, off target) but no crash
    expect(Array.isArray(warnings)).toBe(true);
  });
});
