import { describe, it, expect } from "vitest";
import { shouldActivateDemoMode } from "../aiUtils";

describe("AI Demo Mode Detection", () => {
  it("activates demo mode when DEMO_MODE=true", () => {
    expect(shouldActivateDemoMode(true, false, false)).toBe(true);
  });

  it("activates demo mode when no API keys configured", () => {
    expect(shouldActivateDemoMode(false, false, false)).toBe(true);
  });

  it("does not activate when Google key is present", () => {
    expect(shouldActivateDemoMode(false, true, false)).toBe(false);
  });

  it("does not activate when DeepSeek key is present", () => {
    expect(shouldActivateDemoMode(false, false, true)).toBe(false);
  });

  it("activates demo mode even when keys are present if explicitly enabled", () => {
    expect(shouldActivateDemoMode(true, true, true)).toBe(true);
  });
});
