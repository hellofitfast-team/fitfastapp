import { describe, it, expect } from "vitest";
import { getCheckInFrequencyDays } from "../helpers";

describe("getCheckInFrequencyDays", () => {
  it("returns default when config row does not exist", async () => {
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
    expect(result).toBe(10);
  });

  it("returns default when config value is null", async () => {
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
    expect(result).toBe(10);
  });

  it("returns default when config value is undefined", async () => {
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
    expect(result).toBe(10);
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

  it("returns default when string value is not a valid number", async () => {
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
    expect(result).toBe(10);
  });

  it("returns 0 when config value is 0 (zero means no-lock, useful for testing)", async () => {
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
    expect(result).toBe(0);
  });

  it("returns default when config value is negative", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => ({ key: "check_in_frequency_days", value: -5 }),
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    expect(result).toBe(10);
  });

  it("returns 0 when config value is string '0' (zero means no-lock)", async () => {
    const mockCtx = {
      db: {
        query: () => ({
          withIndex: () => ({
            unique: async () => ({ key: "check_in_frequency_days", value: "0" }),
          }),
        }),
      },
    };
    const result = await getCheckInFrequencyDays(mockCtx);
    expect(result).toBe(0);
  });
});
