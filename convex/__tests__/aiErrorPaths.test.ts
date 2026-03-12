import { describe, it, expect } from "vitest";
import { classifyError } from "../langfuse";

describe("AI Error Paths", () => {
  it("classifies timeout errors (AbortError)", () => {
    const err = new DOMException("The operation was aborted", "AbortError");
    expect(classifyError(err)).toBe("timeout");
  });

  it("classifies API errors with status codes", () => {
    const err = new Error("Server error") as any;
    err.statusCode = 503;
    expect(classifyError(err)).toBe("api-503");
  });

  it("classifies rate limit errors from message", () => {
    const err = new Error("You have exceeded the rate limit for this API");
    expect(classifyError(err)).toBe("rate-limited");
  });

  it("classifies 429 errors from message", () => {
    const err = new Error("Request failed with status 429");
    expect(classifyError(err)).toBe("rate-limited");
  });

  it("classifies generic errors", () => {
    const err = new Error("Something unexpected happened");
    expect(classifyError(err)).toBe("error");
  });
});
