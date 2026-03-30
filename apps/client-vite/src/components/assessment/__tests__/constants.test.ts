import { describe, it, expect } from "vitest";
import {
  PRIMARY_GOALS,
  SECONDARY_FOCUSES,
  CUISINE_PREFERENCES,
  MEALS_PER_DAY,
  COMMON_ALLERGIES,
  DIETARY_RESTRICTIONS,
  GENDER_OPTIONS,
  EQUIPMENT_OPTIONS,
  DAYS,
  SESSION_DURATIONS,
  TRAINING_TIMES,
  getDayLimits,
} from "../constants";

describe("Assessment Constants", () => {
  it("all option arrays have unique IDs", () => {
    const arrays = [
      PRIMARY_GOALS,
      SECONDARY_FOCUSES,
      CUISINE_PREFERENCES,
      MEALS_PER_DAY,
      COMMON_ALLERGIES,
      DIETARY_RESTRICTIONS,
      GENDER_OPTIONS,
      EQUIPMENT_OPTIONS,
      SESSION_DURATIONS,
      TRAINING_TIMES,
    ];
    for (const arr of arrays) {
      const ids = arr.map((o) => o.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("DAYS has exactly 7 entries for Mon-Sun", () => {
    expect(DAYS).toHaveLength(7);
    expect(DAYS[0].id).toBe("Mon");
    expect(DAYS[6].id).toBe("Sun");
  });

  it("all option items have non-empty id and label", () => {
    const all = [
      ...PRIMARY_GOALS,
      ...SECONDARY_FOCUSES,
      ...CUISINE_PREFERENCES,
      ...MEALS_PER_DAY,
      ...COMMON_ALLERGIES,
      ...DIETARY_RESTRICTIONS,
      ...GENDER_OPTIONS,
      ...EQUIPMENT_OPTIONS,
      ...DAYS,
      ...SESSION_DURATIONS,
      ...TRAINING_TIMES,
    ];
    for (const item of all) {
      expect(item.id).toBeTruthy();
      expect(item.label).toBeTruthy();
    }
  });
});

describe("getDayLimits", () => {
  it("returns limits for known goal + experience", () => {
    const limits = getDayLimits("lose_fat", "beginner");
    expect(limits.min).toBe(3);
    expect(limits.max).toBe(5);
    expect(limits.recommended).toBe(3);
  });

  it("advanced build_muscle has higher min", () => {
    const limits = getDayLimits("build_muscle", "advanced");
    expect(limits.min).toBe(4);
    expect(limits.max).toBe(6);
  });

  it("returns defaults for unknown goal", () => {
    const limits = getDayLimits("unknown_goal", "beginner");
    expect(limits.min).toBe(3);
    expect(limits.max).toBe(6);
    expect(limits.recommended).toBe(4);
  });

  it("returns defaults for unknown experience", () => {
    const limits = getDayLimits("lose_fat", "unknown_level");
    expect(limits.min).toBe(3);
    expect(limits.recommended).toBe(4);
  });

  it("min is always <= recommended <= max", () => {
    const goals = [
      "lose_fat",
      "build_muscle",
      "body_recomposition",
      "get_stronger",
      "improve_fitness",
    ];
    const levels = ["beginner", "intermediate", "advanced"];
    for (const goal of goals) {
      for (const level of levels) {
        const l = getDayLimits(goal, level);
        expect(l.min).toBeLessThanOrEqual(l.recommended);
        expect(l.recommended).toBeLessThanOrEqual(l.max);
      }
    }
  });
});
