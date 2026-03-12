import { describe, it, expect } from "vitest";
import { extractJSON } from "../aiUtils";

describe("extractJSON", () => {
  // 1. Clean JSON
  it("parses clean JSON object", () => {
    const input = '{"name": "John", "age": 30}';
    expect(extractJSON(input)).toEqual({ name: "John", age: 30 });
  });

  it("parses clean nested JSON", () => {
    const input = '{"user": {"name": "Jane"}, "scores": [1, 2, 3]}';
    expect(extractJSON(input)).toEqual({ user: { name: "Jane" }, scores: [1, 2, 3] });
  });

  // 2. Markdown-fenced JSON
  it("strips ```json fences", () => {
    const input = '```json\n{"key": "value"}\n```';
    expect(extractJSON(input)).toEqual({ key: "value" });
  });

  it("strips ``` fences without language tag", () => {
    const input = '```\n{"key": "value"}\n```';
    expect(extractJSON(input)).toEqual({ key: "value" });
  });

  it("handles markdown fences with surrounding text", () => {
    const input = 'Here is the result:\n```json\n{"meal": "chicken"}\n```\nHope that helps!';
    expect(extractJSON(input)).toEqual({ meal: "chicken" });
  });

  // 3. Leading/trailing text around JSON
  it("extracts JSON from leading/trailing prose", () => {
    const input = 'Sure, here is the plan: {"calories": 2000} Let me know if you need changes.';
    expect(extractJSON(input)).toEqual({ calories: 2000 });
  });

  // 4. Trailing commas
  it("removes trailing comma before closing brace", () => {
    const input = '{"a": 1, "b": 2,}';
    expect(extractJSON(input)).toEqual({ a: 1, b: 2 });
  });

  it("removes trailing comma before closing bracket", () => {
    const input = '{"items": [1, 2, 3,]}';
    expect(extractJSON(input)).toEqual({ items: [1, 2, 3] });
  });

  it("removes nested trailing commas at multiple levels", () => {
    const input = '{"outer": {"inner": [1, 2,], "x": 3,},}';
    expect(extractJSON(input)).toEqual({ outer: { inner: [1, 2], x: 3 } });
  });

  // 5. Truncated JSON
  it("auto-closes truncated object with missing closing brace", () => {
    const input = '{"name": "test", "value": 42';
    expect(extractJSON(input)).toEqual({ name: "test", value: 42 });
  });

  it("auto-closes truncated array inside object", () => {
    // Truncated after a complete array element — auto-close repairs brackets then braces
    const input = '{"meals": ["chicken", "rice"';
    const result = extractJSON(input);
    expect(result).toEqual({ meals: ["chicken", "rice"] });
  });

  it("auto-closes mid-string truncation", () => {
    const input = '{"description": "This is a trun';
    const result = extractJSON(input);
    expect(result).toHaveProperty("description");
    expect(typeof (result as any).description).toBe("string");
  });

  it("handles truncation with trailing comma before auto-close", () => {
    const input = '{"a": 1, "b": 2,';
    const result = extractJSON(input);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it("handles deeply nested truncation", () => {
    const input = '{"level1": {"level2": {"level3": [1, 2';
    const result = extractJSON(input);
    expect((result as any).level1.level2.level3).toEqual([1, 2]);
  });

  // 6. Non-JSON text
  it("throws on non-JSON text", () => {
    expect(() => extractJSON("This is just a sentence with no JSON.")).toThrow();
  });

  it("throws on text without any braces", () => {
    expect(() => extractJSON("hello world")).toThrow();
  });

  // 7. Empty string
  it("throws on empty string", () => {
    expect(() => extractJSON("")).toThrow();
  });

  it("throws on whitespace-only string", () => {
    expect(() => extractJSON("   \n\t  ")).toThrow();
  });
});
