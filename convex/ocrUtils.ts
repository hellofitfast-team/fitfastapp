/**
 * Pure utility functions extracted from ocrExtraction.ts for testability.
 * No Convex runtime dependency — these are plain data transformations.
 */

/** Physiological range validation — skip values outside plausible ranges */
export const INBODY_FIELD_RANGES: Record<string, [number, number]> = {
  bodyFatPercentage: [3, 60],
  leanBodyMass: [20, 150],
  skeletalMuscleMass: [10, 80],
  bmi: [10, 60],
  visceralFatLevel: [1, 30],
  basalMetabolicRate: [800, 4000],
  totalBodyWater: [10, 80],
};

/**
 * Validates parsed InBody fields against physiological ranges.
 * Coerces strings to numbers, skips NaN/null/out-of-range values.
 */
export function validateInBodyFields(parsed: Record<string, unknown>): Record<string, number> {
  const inBodyData: Record<string, number> = {};
  for (const [field, [min, max]] of Object.entries(INBODY_FIELD_RANGES)) {
    const val = parsed[field];
    if (val !== null && val !== undefined) {
      const num = typeof val === "number" ? val : parseFloat(String(val));
      if (!isNaN(num)) {
        if (num >= min && num <= max) {
          inBodyData[field] = num;
        }
      }
    }
  }
  // Cross-validation: leanBodyMass must be >= skeletalMuscleMass
  // (lean body mass = skeletal muscle + organ mass + bone mass + water)
  // OCR can confuse these two fields, returning skeletalMuscleMass value for leanBodyMass.
  if (
    inBodyData.leanBodyMass !== undefined &&
    inBodyData.skeletalMuscleMass !== undefined &&
    inBodyData.leanBodyMass < inBodyData.skeletalMuscleMass
  ) {
    console.warn(
      `InBody OCR cross-validation failed: leanBodyMass (${inBodyData.leanBodyMass}) < skeletalMuscleMass (${inBodyData.skeletalMuscleMass}). Discarding leanBodyMass.`,
    );
    delete inBodyData.leanBodyMass;
  }

  return inBodyData;
}
