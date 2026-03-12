import { describe, it, expect } from "vitest";

const hasGoogleKey = !!process.env.GOOGLE_GENERATIVE_AI_API_KEY;
const hasLangfuseKeys = !!process.env.LANGFUSE_SECRET_KEY && !!process.env.LANGFUSE_PUBLIC_KEY;
const hasAllKeys = hasGoogleKey && hasLangfuseKeys;

describe.skipIf(!hasAllKeys)("Langfuse Verification (integration)", () => {
  it("creates trace with generation and usage data", async () => {
    const { traceAI, flushLangfuse } = await import("../../langfuse");
    const { google } = await import("@ai-sdk/google");
    const { generateText } = await import("ai");

    const testName = `test-langfuse-${Date.now()}`;
    const trace = traceAI({
      name: testName,
      metadata: { test: true },
      tags: ["test", "integration"],
    });
    expect(trace).not.toBeNull();

    const gen = trace?.generation({
      name: "test-generation",
      model: "gemini-2.5-flash-lite",
      input: { prompt: "Say hello" },
    });

    const { text, usage } = await generateText({
      model: google("gemini-2.5-flash-lite"),
      prompt: "Say hello in one word",
      maxTokens: 10,
    });

    gen?.end({
      output: text,
      usage: { input: usage?.inputTokens, output: usage?.outputTokens },
    });

    trace?.update({
      metadata: { test: true, completed: true },
    });

    await flushLangfuse();

    // Verify trace was created (basic smoke test)
    // Full verification of Langfuse ingestion would require waiting + API call
    expect(text).toBeTruthy();
    expect(usage?.inputTokens).toBeGreaterThan(0);
    expect(usage?.outputTokens).toBeGreaterThan(0);
  }, 30_000);
});
