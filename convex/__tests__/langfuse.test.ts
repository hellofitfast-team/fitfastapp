import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// We re-import the module in each test to reset the lazy singleton.
let getLangfuse: typeof import("../langfuse").getLangfuse;
let traceAI: typeof import("../langfuse").traceAI;
let classifyError: typeof import("../langfuse").classifyError;
let flushLangfuse: typeof import("../langfuse").flushLangfuse;

beforeEach(async () => {
  vi.resetModules();
  const mod = await import("../langfuse");
  getLangfuse = mod.getLangfuse;
  traceAI = mod.traceAI;
  classifyError = mod.classifyError;
  flushLangfuse = mod.flushLangfuse;
});

afterEach(() => {
  vi.unstubAllEnvs();
});

// ---------------------------------------------------------------------------
// classifyError
// ---------------------------------------------------------------------------
describe("classifyError", () => {
  it("returns 'timeout' for AbortError", () => {
    const err = new DOMException("The operation was aborted", "AbortError");
    expect(classifyError(err)).toBe("timeout");
  });

  it("returns 'api-{statusCode}' for errors with a numeric statusCode", () => {
    const err = new Error("Internal server error");
    (err as any).statusCode = 500;
    expect(classifyError(err)).toBe("api-500");
  });

  it("returns 'rate-limited' when message contains 'Rate Limit' (case insensitive)", () => {
    const err = new Error("Rate Limit exceeded, try again later");
    expect(classifyError(err)).toBe("rate-limited");
  });

  it("returns 'rate-limited' when message contains '429'", () => {
    const err = new Error("Request failed with status 429");
    expect(classifyError(err)).toBe("rate-limited");
  });

  it("returns 'error' for a generic Error", () => {
    const err = new Error("Something went wrong");
    expect(classifyError(err)).toBe("error");
  });

  it("returns 'unknown' for non-Error values", () => {
    expect(classifyError("string error")).toBe("unknown");
    expect(classifyError(42)).toBe("unknown");
    expect(classifyError(null)).toBe("unknown");
    expect(classifyError(undefined)).toBe("unknown");
  });
});

// ---------------------------------------------------------------------------
// getLangfuse
// ---------------------------------------------------------------------------
describe("getLangfuse", () => {
  it("returns null when LANGFUSE_SECRET_KEY is not set", () => {
    vi.stubEnv("LANGFUSE_SECRET_KEY", "");
    vi.stubEnv("LANGFUSE_PUBLIC_KEY", "");
    expect(getLangfuse()).toBeNull();
  });

  it("returns null when only LANGFUSE_PUBLIC_KEY is set", () => {
    vi.stubEnv("LANGFUSE_SECRET_KEY", "");
    vi.stubEnv("LANGFUSE_PUBLIC_KEY", "pk-lf-test");
    expect(getLangfuse()).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// traceAI
// ---------------------------------------------------------------------------
describe("traceAI", () => {
  it("returns null when Langfuse is unavailable", () => {
    vi.stubEnv("LANGFUSE_SECRET_KEY", "");
    vi.stubEnv("LANGFUSE_PUBLIC_KEY", "");
    const result = traceAI({ name: "test-trace", userId: "u1" });
    expect(result).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// flushLangfuse
// ---------------------------------------------------------------------------
describe("flushLangfuse", () => {
  it("does not throw when Langfuse is unavailable", async () => {
    vi.stubEnv("LANGFUSE_SECRET_KEY", "");
    vi.stubEnv("LANGFUSE_PUBLIC_KEY", "");
    await expect(flushLangfuse()).resolves.toBeUndefined();
  });
});
