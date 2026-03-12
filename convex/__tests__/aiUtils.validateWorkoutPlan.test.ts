import { describe, expect, it } from "vitest";
import { validateWorkoutPlan, type ValidationWarning } from "../aiUtils";

function makeTrainingDay(overrides: Record<string, unknown> = {}) {
  return {
    workoutName: "Push Day",
    restDay: false,
    exercises: [{ name: "Bench Press", sets: 3, reps: 10 }],
    warmup: { exercises: [{ name: "Arm circles" }] },
    cooldown: { exercises: [{ name: "Stretching" }] },
    ...overrides,
  };
}

describe("validateWorkoutPlan", () => {
  it("returns zero warnings for a valid training day", () => {
    const plan = { weeklyPlan: { day1: makeTrainingDay() } };
    const warnings = validateWorkoutPlan(plan);
    expect(warnings).toEqual([]);
  });

  it("returns zero warnings for a rest day", () => {
    const plan = {
      weeklyPlan: { day1: { restDay: true, workoutName: "Rest" } },
    };
    const warnings = validateWorkoutPlan(plan);
    expect(warnings).toEqual([]);
  });

  it("warns when a training day has no exercises property", () => {
    const plan = {
      weeklyPlan: {
        day1: makeTrainingDay({ exercises: undefined }),
      },
    };
    const warnings = validateWorkoutPlan(plan);
    expect(warnings).toContainEqual(
      expect.objectContaining({ type: "missing_exercises", day: "day1" }),
    );
  });

  it("warns when a training day has an empty exercises array", () => {
    const plan = {
      weeklyPlan: {
        day1: makeTrainingDay({ exercises: [] }),
      },
    };
    const warnings = validateWorkoutPlan(plan);
    expect(warnings).toContainEqual(
      expect.objectContaining({ type: "missing_exercises", day: "day1" }),
    );
  });

  it("warns when a training day is missing warmup", () => {
    const plan = {
      weeklyPlan: {
        day1: makeTrainingDay({ warmup: undefined }),
      },
    };
    const warnings = validateWorkoutPlan(plan);
    expect(warnings).toContainEqual(
      expect.objectContaining({
        type: "missing_warmup_cooldown",
        day: "day1",
        message: expect.stringContaining("warmup"),
      }),
    );
  });

  it("warns when a training day is missing cooldown", () => {
    const plan = {
      weeklyPlan: {
        day1: makeTrainingDay({ cooldown: undefined }),
      },
    };
    const warnings = validateWorkoutPlan(plan);
    expect(warnings).toContainEqual(
      expect.objectContaining({
        type: "missing_warmup_cooldown",
        day: "day1",
        message: expect.stringContaining("cooldown"),
      }),
    );
  });
});
