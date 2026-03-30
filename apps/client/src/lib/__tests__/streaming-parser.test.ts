import { describe, it, expect } from "vitest";
import { createParseState, parseIncrementalDays } from "../streaming-parser";

describe("Streaming JSON Parser", () => {
  it("creates empty initial state", () => {
    const state = createParseState();
    expect(state.lastParsedOffset).toBe(0);
    expect(state.parsedDays.size).toBe(0);
  });

  it("parses a complete day block", () => {
    const state = createParseState();
    const text = '{"weeklyPlan": {"day1": {"meals": [], "dailyTotals": {"calories": 2000}}}}';
    parseIncrementalDays(text, state);
    expect(state.parsedDays.has("day1")).toBe(true);
    const day1 = state.parsedDays.get("day1") as any;
    expect(day1.dailyTotals.calories).toBe(2000);
  });

  it("parses multiple day blocks", () => {
    const state = createParseState();
    const text =
      '{"weeklyPlan": {"day1": {"meals": []}, "day2": {"meals": []}, "day3": {"meals": []}}}';
    parseIncrementalDays(text, state);
    expect(state.parsedDays.size).toBe(3);
    expect(state.parsedDays.has("day1")).toBe(true);
    expect(state.parsedDays.has("day2")).toBe(true);
    expect(state.parsedDays.has("day3")).toBe(true);
  });

  it("handles incomplete JSON (streaming)", () => {
    const state = createParseState();
    // First chunk: day1 complete, day2 incomplete
    const chunk1 = '{"weeklyPlan": {"day1": {"meals": [{"name": "Oats"}]}, "day2": {"meals": [{"na';
    parseIncrementalDays(chunk1, state);
    expect(state.parsedDays.size).toBe(1);
    expect(state.parsedDays.has("day1")).toBe(true);
    expect(state.parsedDays.has("day2")).toBe(false);

    // Second chunk completes day2
    const chunk2 = chunk1 + 'me": "Rice"}]}}}';
    parseIncrementalDays(chunk2, state);
    expect(state.parsedDays.size).toBe(2);
    expect(state.parsedDays.has("day2")).toBe(true);
  });

  it("does not re-parse already parsed days", () => {
    const state = createParseState();
    const text = '{"day1": {"value": "first"}}';
    parseIncrementalDays(text, state);
    const first = state.parsedDays.get("day1");

    // Same text again — should not change the parsed value
    parseIncrementalDays(text, state);
    expect(state.parsedDays.get("day1")).toBe(first);
  });

  it("handles nested braces inside strings", () => {
    const state = createParseState();
    const text = '{"day1": {"instructions": ["Mix {ingredient} well"], "calories": 500}}';
    parseIncrementalDays(text, state);
    expect(state.parsedDays.has("day1")).toBe(true);
    const day1 = state.parsedDays.get("day1") as any;
    expect(day1.calories).toBe(500);
  });

  it("handles escaped quotes in strings", () => {
    const state = createParseState();
    const text = '{"day1": {"name": "Chef\\"s Special", "calories": 400}}';
    parseIncrementalDays(text, state);
    expect(state.parsedDays.has("day1")).toBe(true);
  });

  it("no-ops on empty text", () => {
    const state = createParseState();
    parseIncrementalDays("", state);
    expect(state.parsedDays.size).toBe(0);
  });
});
