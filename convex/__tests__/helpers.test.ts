import { describe, it, expect } from "vitest";
import { getCheckInFrequencyDays } from "../helpers";

describe("getCheckInFrequencyDays", () => {
  it("returns 14 when config row does not exist", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => null,
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    expect(result).toBe(14);
  });

  it("returns 14 when config value is null", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => ({ key: "check_in_frequency_days", value: null }),
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    expect(result).toBe(14);
  });

  it("returns 14 when config value is undefined", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => ({ key: "check_in_frequency_days", value: undefined }),
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    expect(result).toBe(14);
  });

  it("returns the numeric value when config value is a number", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => ({ key: "check_in_frequency_days", value: 7 }),
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    expect(result).toBe(7);
  });

  it("converts string value to number", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => ({ key: "check_in_frequency_days", value: "21" }),
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    expect(result).toBe(21);
  });

  it("returns 14 when string value is not a valid number", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => ({ key: "check_in_frequency_days", value: "invalid" }),
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    expect(result).toBe(14);
  });

  it("returns 0 when config value is 0 (falsy but valid)", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => ({ key: "check_in_frequency_days", value: 0 }),
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    // 0 is a number, so it passes `typeof raw === "number"` check
    expect(result).toBe(0);
  });
});
