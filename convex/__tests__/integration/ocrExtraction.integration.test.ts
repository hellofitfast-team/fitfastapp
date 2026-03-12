import { describe, it, expect } from "vitest";
import { validateInBodyFields } from "../../ocrUtils";

const hasOpenRouterKey = !!process.env.OPENROUTER_API_KEY;

describe.skipIf(!hasOpenRouterKey)("OCR Extraction (integration)", () => {
  it("validates InBody fields from a mock parsed response", () => {
    // Simulate what OCR would return — test the validation pipeline
    const mockOcrOutput = {
      bodyFatPercentage: 22.5,
      leanBodyMass: 55.3,
      skeletalMuscleMass: 28.1,
      bmi: 24.2,
      visceralFatLevel: 8,
      basalMetabolicRate: 1650,
      totalBodyWater: 38.5,
    };

    const validated = validateInBodyFields(mockOcrOutput);
    expect(Object.keys(validated).length).toBe(7);
    expect(validated.bodyFatPercentage).toBe(22.5);
    expect(validated.basalMetabolicRate).toBe(1650);
  });

  it("handles string values from OCR output", () => {
    const mockOcrOutput = {
      bodyFatPercentage: "22.5",
      leanBodyMass: "55.3",
      bmi: "invalid",
      visceralFatLevel: null,
    };

    const validated = validateInBodyFields(mockOcrOutput);
    expect(validated.bodyFatPercentage).toBe(22.5);
    expect(validated.leanBodyMass).toBe(55.3);
    expect(validated.bmi).toBeUndefined();
    expect(validated.visceralFatLevel).toBeUndefined();
  });
});
