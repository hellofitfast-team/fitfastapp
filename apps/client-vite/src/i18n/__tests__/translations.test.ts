import { describe, it, expect } from "vitest";
import en from "../../messages/en.json";
import ar from "../../messages/ar.json";

function getKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      return getKeys(value as Record<string, unknown>, fullKey);
    }
    return [fullKey];
  });
}

describe("Translation Files", () => {
  it("EN and AR have the same top-level keys", () => {
    const enKeys = Object.keys(en).sort();
    const arKeys = Object.keys(ar).sort();
    expect(enKeys).toEqual(arKeys);
  });

  it("EN and AR have the same nested keys", () => {
    const enKeys = getKeys(en).sort();
    const arKeys = getKeys(ar).sort();

    const missingInAr = enKeys.filter((k) => !arKeys.includes(k));
    const missingInEn = arKeys.filter((k) => !enKeys.includes(k));

    expect(missingInAr).toEqual([]);
    expect(missingInEn).toEqual([]);
  });

  it("no empty translation values in EN", () => {
    const enKeys = getKeys(en);
    const emptyKeys = enKeys.filter((key) => {
      const parts = key.split(".");
      let value: unknown = en;
      for (const part of parts) {
        value = (value as Record<string, unknown>)[part];
      }
      return typeof value === "string" && value.trim() === "";
    });
    expect(emptyKeys).toEqual([]);
  });

  it("interpolation uses double braces {{var}} not single {var}", () => {
    const checkBraces = (obj: unknown, path = ""): string[] => {
      const issues: string[] = [];
      if (typeof obj === "string") {
        const singleBrace = obj.match(/(?<!\{)\{(\w+)\}(?!\})/g);
        if (singleBrace) {
          issues.push(`${path}: found single-brace ${singleBrace.join(", ")}`);
        }
      } else if (typeof obj === "object" && obj !== null) {
        for (const [key, value] of Object.entries(obj)) {
          issues.push(...checkBraces(value, path ? `${path}.${key}` : key));
        }
      }
      return issues;
    };

    expect(checkBraces(en)).toEqual([]);
    expect(checkBraces(ar)).toEqual([]);
  });
});
