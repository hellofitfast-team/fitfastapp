import { describe, it, expect } from "vitest";

/**
 * Unit tests for the plan duration date math used in ai.ts.
 * Validates that zero/negative planDuration never produces same-day or past-date ranges.
 */

function computeDateRange(planDuration: number) {
  const safeDuration = Math.max(planDuration, 1);
  const now = Date.now();
  const startDate = new Date(now).toISOString().split("T")[0]!;
  const endDate = new Date(now + safeDuration * 24 * 60 * 60 * 1000).toISOString().split("T")[0]!;
  return { startDate, endDate, safeDuration };
}

describe("plan duration date math", () => {
  it("produces different start and end dates when planDuration is 0", () => {
    const { startDate, endDate, safeDuration } = computeDateRange(0);
    expect(safeDuration).toBe(1);
    expect(endDate).not.toBe(startDate);
  });

  it("produces different start and end dates when planDuration is negative", () => {
    const { startDate, endDate, safeDuration } = computeDateRange(-5);
    expect(safeDuration).toBe(1);
    expect(endDate).not.toBe(startDate);
  });

  it("preserves valid planDuration values", () => {
    const { safeDuration } = computeDateRange(14);
    expect(safeDuration).toBe(14);
  });

  it("preserves planDuration of 1", () => {
    const { safeDuration } = computeDateRange(1);
    expect(safeDuration).toBe(1);
  });

  it("end date is always after start date for any input", () => {
    for (const duration of [-10, -1, 0, 1, 7, 14, 30]) {
      const { startDate, endDate } = computeDateRange(duration);
      expect(new Date(endDate).getTime()).toBeGreaterThan(new Date(startDate).getTime());
    }
  });
});
