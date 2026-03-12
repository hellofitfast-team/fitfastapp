import { describe, it, expect } from "vitest";
import { INBODY_FIELD_RANGES, validateInBodyFields } from "../ocrUtils";

describe("INBODY_FIELD_RANGES", () => {
  it("has exactly 7 fields", () => {
    expect(Object.keys(INBODY_FIELD_RANGES)).toHaveLength(7);
  });
});

describe("validateInBodyFields", () => {
  // 1. All fields in range → all returned
  it("returns all fields when all values are within range", () => {
    const parsed = {
      bodyFatPercentage: 20,
      leanBodyMass: 60,
      skeletalMuscleMass: 35,
      bmi: 22,
      visceralFatLevel: 10,
      basalMetabolicRate: 1800,
      totalBodyWater: 45,
    };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual(parsed);
  });

  // 2. Field below minimum → excluded
  it("excludes a field below its minimum", () => {
    const parsed = { bodyFatPercentage: 1 };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual({});
  });

  // 3. Field above maximum → excluded
  it("excludes a field above its maximum", () => {
    const parsed = { bmi: 100 };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual({});
  });

  // 4. String number coercion → included as number
  it("coerces string numbers to numeric values", () => {
    const parsed = { bodyFatPercentage: "25.5" };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual({ bodyFatPercentage: 25.5 });
  });

  // 5. null value → skipped
  it("skips null values", () => {
    const parsed = { bodyFatPercentage: null };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual({});
  });

  // 6. NaN value → skipped
  it("skips NaN-producing values like non-numeric strings", () => {
    const parsed = { bodyFatPercentage: "abc" };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual({});
  });

  // 7. Boundary: exact min value → included
  it("includes a value at the exact minimum boundary", () => {
    const parsed = { bodyFatPercentage: 3 };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual({ bodyFatPercentage: 3 });
  });

  // 8. Boundary: exact max value → included
  it("includes a value at the exact maximum boundary", () => {
    const parsed = { bodyFatPercentage: 60 };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual({ bodyFatPercentage: 60 });
  });

  // 9. Unknown fields → ignored
  it("ignores fields not defined in INBODY_FIELD_RANGES", () => {
    const parsed = {
      bodyFatPercentage: 20,
      unknownField: 999,
      anotherExtra: "hello",
    };
    const result = validateInBodyFields(parsed);
    expect(result).toEqual({ bodyFatPercentage: 20 });
  });
});
