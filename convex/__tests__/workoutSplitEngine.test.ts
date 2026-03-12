import { describe, it, expect } from "vitest";
import { selectWorkoutSplit, type WorkoutSplit } from "../workoutSplitEngine";

describe("selectWorkoutSplit", () => {
  // ─── Split selection decision matrix ──────────────────────────────────

  describe("beginner split selection", () => {
    it("selects full_body for beginner with 2 days/week", () => {
      const result = selectWorkoutSplit("beginner", 2);
      expect(result.splitType).toBe("full_body");
    });

    it("selects full_body for beginner with 3 days/week", () => {
      const result = selectWorkoutSplit("beginner", 3);
      expect(result.splitType).toBe("full_body");
    });

    it("selects full_body for beginner with 4 days/week", () => {
      const result = selectWorkoutSplit("beginner", 4);
      expect(result.splitType).toBe("full_body");
    });

    it("selects upper_lower for beginner with 5 days/week", () => {
      const result = selectWorkoutSplit("beginner", 5);
      expect(result.splitType).toBe("upper_lower");
    });

    it("selects upper_lower for beginner with 6 days/week", () => {
      const result = selectWorkoutSplit("beginner", 6);
      expect(result.splitType).toBe("upper_lower");
    });
  });

  describe("intermediate split selection", () => {
    it("selects full_body for intermediate with 3 days/week", () => {
      const result = selectWorkoutSplit("intermediate", 3);
      expect(result.splitType).toBe("full_body");
    });

    it("selects phul for intermediate with 4 days/week", () => {
      const result = selectWorkoutSplit("intermediate", 4);
      expect(result.splitType).toBe("phul");
    });

    it("selects anterior_posterior for intermediate with 5 days/week", () => {
      const result = selectWorkoutSplit("intermediate", 5);
      expect(result.splitType).toBe("anterior_posterior");
    });
  });

  describe("advanced split selection", () => {
    it("selects upper_lower for advanced with 3 days/week", () => {
      const result = selectWorkoutSplit("advanced", 3);
      expect(result.splitType).toBe("upper_lower");
    });

    it("selects push_pull_legs for advanced with 4 days/week", () => {
      const result = selectWorkoutSplit("advanced", 4);
      expect(result.splitType).toBe("push_pull_legs");
    });

    it("selects bro_split for advanced with 5 days/week", () => {
      const result = selectWorkoutSplit("advanced", 5);
      expect(result.splitType).toBe("bro_split");
    });

    it("selects arnold for advanced with 6 days/week", () => {
      const result = selectWorkoutSplit("advanced", 6);
      expect(result.splitType).toBe("arnold");
    });
  });

  // ─── Default experience level ─────────────────────────────────────────

  describe("default experience level", () => {
    it("defaults to beginner when experienceLevel is undefined", () => {
      const result = selectWorkoutSplit(undefined, 3);
      expect(result.splitType).toBe("full_body");
    });

    it("defaults to beginner for undefined with 5 days (upper_lower)", () => {
      const result = selectWorkoutSplit(undefined, 5);
      expect(result.splitType).toBe("upper_lower");
    });
  });

  // ─── Day labels generation ────────────────────────────────────────────

  describe("day labels", () => {
    it("generates correct full_body labels (alternating training/rest)", () => {
      const result = selectWorkoutSplit("beginner", 3, 6);
      // full_body: day0=Full Body, day1=Rest, day2=Full Body, day3=Rest, day4=Full Body, day5=Rest
      expect(result.dayLabels).toEqual([
        "Full Body",
        "Rest",
        "Full Body",
        "Rest",
        "Full Body",
        "Rest",
      ]);
    });

    it("generates correct phul labels (6-day cycle)", () => {
      const result = selectWorkoutSplit("intermediate", 4, 6);
      // phul: 0=Power Upper, 1=Power Lower, 2=Rest, 3=Hypertrophy Upper, 4=Hypertrophy Lower, 5=Rest
      expect(result.dayLabels).toEqual([
        "Power Upper",
        "Power Lower",
        "Rest",
        "Hypertrophy Upper",
        "Hypertrophy Lower",
        "Rest",
      ]);
    });

    it("generates correct anterior_posterior labels (3-day cycle)", () => {
      const result = selectWorkoutSplit("intermediate", 5, 6);
      // anterior_posterior: 0=Anterior, 1=Posterior, 2=Rest, 3=Anterior, 4=Posterior, 5=Rest
      expect(result.dayLabels).toEqual([
        "Anterior",
        "Posterior",
        "Rest",
        "Anterior",
        "Posterior",
        "Rest",
      ]);
    });

    it("generates correct arnold labels (4-day cycle)", () => {
      const result = selectWorkoutSplit("advanced", 6, 8);
      // arnold: 0=Chest+Back, 1=Shoulders+Arms, 2=Legs, 3=Rest, 4=Chest+Back, 5=Shoulders+Arms, 6=Legs, 7=Rest
      expect(result.dayLabels).toEqual([
        "Chest+Back",
        "Shoulders+Arms",
        "Legs",
        "Rest",
        "Chest+Back",
        "Shoulders+Arms",
        "Legs",
        "Rest",
      ]);
    });

    it("generates Arabic labels alongside English labels", () => {
      const result = selectWorkoutSplit("advanced", 6, 8);
      expect(result.dayLabelsAr).toEqual([
        "صدر+ظهر",
        "أكتاف+ذراعين",
        "أرجل",
        "راحة",
        "صدر+ظهر",
        "أكتاف+ذراعين",
        "أرجل",
        "راحة",
      ]);
    });

    it("defaults totalPlanDays to 10", () => {
      const result = selectWorkoutSplit("beginner", 3);
      expect(result.dayLabels).toHaveLength(10);
      expect(result.dayLabelsAr).toHaveLength(10);
    });
  });

  // ─── Split metadata ───────────────────────────────────────────────────

  describe("split metadata", () => {
    it("includes splitName and splitNameAr", () => {
      const result = selectWorkoutSplit("beginner", 3);
      expect(result.splitName).toBe("Full Body");
      expect(result.splitNameAr).toBe("تمرين الجسم الكامل");
    });

    it("includes splitDescription and splitDescriptionAr", () => {
      const result = selectWorkoutSplit("advanced", 6);
      expect(result.splitDescription).toContain("Chest and back");
      expect(result.splitDescriptionAr).toBeTruthy();
    });

    it("returns all required WorkoutSplit fields", () => {
      const result = selectWorkoutSplit("intermediate", 4);
      expect(result).toHaveProperty("splitType");
      expect(result).toHaveProperty("splitName");
      expect(result).toHaveProperty("splitNameAr");
      expect(result).toHaveProperty("splitDescription");
      expect(result).toHaveProperty("splitDescriptionAr");
      expect(result).toHaveProperty("dayLabels");
      expect(result).toHaveProperty("dayLabelsAr");
    });
  });

  // ─── Edge cases ───────────────────────────────────────────────────────

  describe("edge cases", () => {
    it("handles 1 day per week (treated as <= 3)", () => {
      const result = selectWorkoutSplit("beginner", 1);
      expect(result.splitType).toBe("full_body");
    });

    it("handles 0 days per week (treated as <= 3)", () => {
      const result = selectWorkoutSplit("beginner", 0);
      expect(result.splitType).toBe("full_body");
    });

    it("handles 7 days per week (treated as >= 6)", () => {
      const result = selectWorkoutSplit("advanced", 7);
      expect(result.splitType).toBe("arnold");
    });

    it("handles totalPlanDays of 1", () => {
      const result = selectWorkoutSplit("beginner", 3, 1);
      expect(result.dayLabels).toHaveLength(1);
      expect(result.dayLabels[0]).toBe("Full Body");
    });

    it("is deterministic — same inputs always produce same output", () => {
      const a = selectWorkoutSplit("intermediate", 4, 14);
      const b = selectWorkoutSplit("intermediate", 4, 14);
      expect(a).toEqual(b);
    });
  });
});
