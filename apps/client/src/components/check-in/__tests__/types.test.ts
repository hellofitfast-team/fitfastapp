import { describe, it, expect } from "vitest";
import { createCheckInSchema } from "../types";

const t = (key: string) => key; // passthrough for test

describe("Check-in Schema Validation", () => {
  const schema = createCheckInSchema(t);

  it("accepts valid check-in data", () => {
    const result = schema.safeParse({
      weight: 85,
      measurementMethod: "manual",
      workoutPerformance: "Felt strong on all lifts, hit PRs on squat",
      energyLevel: 7,
      sleepQuality: 8,
      dietaryAdherence: 6,
    });
    expect(result.success).toBe(true);
  });

  it("rejects weight below 20", () => {
    const result = schema.safeParse({
      weight: 10,
      workoutPerformance: "Good session overall",
      energyLevel: 5,
      sleepQuality: 5,
      dietaryAdherence: 5,
    });
    expect(result.success).toBe(false);
  });

  it("rejects weight above 300", () => {
    const result = schema.safeParse({
      weight: 500,
      workoutPerformance: "Good session overall",
      energyLevel: 5,
      sleepQuality: 5,
      dietaryAdherence: 5,
    });
    expect(result.success).toBe(false);
  });

  it("rejects too-short workoutPerformance", () => {
    const result = schema.safeParse({
      weight: 85,
      workoutPerformance: "Good",
      energyLevel: 5,
      sleepQuality: 5,
      dietaryAdherence: 5,
    });
    expect(result.success).toBe(false);
  });

  it("rejects energy/sleep/diet ratings outside 1-10", () => {
    const result = schema.safeParse({
      weight: 85,
      workoutPerformance: "Good session, felt energized",
      energyLevel: 0,
      sleepQuality: 11,
      dietaryAdherence: 5,
    });
    expect(result.success).toBe(false);
  });

  it("accepts optional measurements", () => {
    const result = schema.safeParse({
      weight: 85,
      workoutPerformance: "Hit all sets and reps today",
      energyLevel: 7,
      sleepQuality: 8,
      dietaryAdherence: 6,
      chest: 100,
      waist: 88,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.chest).toBe(100);
      expect(result.data.waist).toBe(88);
    }
  });

  it("rejects measurement outside range", () => {
    const result = schema.safeParse({
      weight: 85,
      workoutPerformance: "Good session, felt energized",
      energyLevel: 7,
      sleepQuality: 8,
      dietaryAdherence: 6,
      chest: 5, // too low, min is 10
    });
    expect(result.success).toBe(false);
  });

  it("accepts valid cycle phase", () => {
    const result = schema.safeParse({
      weight: 60,
      workoutPerformance: "Lighter session, adjusted for cycle",
      energyLevel: 6,
      sleepQuality: 7,
      dietaryAdherence: 8,
      cyclePhase: "follicular",
    });
    expect(result.success).toBe(true);
  });
});
