import { describe, it, expect } from "vitest";
import { extractJSON } from "../../aiUtils";

const hasGoogleKey = !!process.env.GOOGLE_GENERATIVE_AI_API_KEY;

describe.skipIf(!hasGoogleKey)("Meal Plan Generation (integration)", () => {
  it("generates valid 1-day meal plan JSON via Gemini", async () => {
    const { google } = await import("@ai-sdk/google");
    const { generateText } = await import("ai");

    const result = await generateText({
      model: google("gemini-2.5-flash-lite"),
      prompt: `Create a 1-day meal plan. Return ONLY valid JSON:
{
  "dailyTargets": { "calories": 2000, "protein": 150, "carbs": 200, "fat": 67 },
  "weeklyPlan": {
    "day1": {
      "dailyTotals": { "calories": 2000, "protein": 150, "carbs": 200, "fat": 67 },
      "meals": [{ "name": "string", "type": "breakfast", "calories": 500, "protein": 38, "carbs": 50, "fat": 17, "ingredients": ["item"], "instructions": ["step"] }]
    }
  }
}`,
      temperature: 0.3,
      maxTokens: 4000,
    });

    const parsed = extractJSON(result.text);
    expect(parsed.weeklyPlan).toBeDefined();
    const day1 = (parsed.weeklyPlan as any).day1;
    expect(day1).toBeDefined();
    expect(day1.meals).toBeInstanceOf(Array);
    expect(day1.meals.length).toBeGreaterThan(0);

    const meal = day1.meals[0];
    expect(meal.name).toBeTruthy();
    expect(typeof meal.calories).toBe("number");
    expect(typeof meal.protein).toBe("number");
  }, 60_000);

  it("generates Arabic meal plan", async () => {
    const { google } = await import("@ai-sdk/google");
    const { generateText } = await import("ai");

    const result = await generateText({
      model: google("gemini-2.5-flash-lite"),
      prompt: `Create a 1-day meal plan ENTIRELY IN ARABIC. Return ONLY valid JSON:
{
  "weeklyPlan": {
    "day1": {
      "dailyTotals": { "calories": 2000, "protein": 150, "carbs": 200, "fat": 67 },
      "meals": [{ "name": "string in Arabic", "type": "breakfast", "calories": 500, "protein": 38, "carbs": 50, "fat": 17, "ingredients": ["item in Arabic"], "instructions": ["step in Arabic"] }]
    }
  }
}`,
      temperature: 0.3,
      maxTokens: 4000,
    });

    const parsed = extractJSON(result.text);
    const day1 = (parsed.weeklyPlan as any).day1;
    expect(day1.meals.length).toBeGreaterThan(0);
    // Check for Arabic characters in meal name
    const hasArabic = /[\u0600-\u06FF]/.test(day1.meals[0].name);
    expect(hasArabic).toBe(true);
  }, 60_000);
});
