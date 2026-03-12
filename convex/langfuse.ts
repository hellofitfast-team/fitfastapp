"use node";

import { Langfuse } from "langfuse";

// ---------------------------------------------------------------------------
// Lazy singleton — created once per Convex action runtime
// ---------------------------------------------------------------------------

let _langfuse: Langfuse | null | undefined;

/**
 * Returns a Langfuse client or `null` when env vars are missing.
 * Safe to call in any action — returns null gracefully in dev without keys.
 */
export function getLangfuse(): Langfuse | null {
  if (_langfuse !== undefined) return _langfuse;

  const secretKey = process.env.LANGFUSE_SECRET_KEY;
  const publicKey = process.env.LANGFUSE_PUBLIC_KEY;

  if (!secretKey || !publicKey) {
    _langfuse = null;
    return null;
  }

  _langfuse = new Langfuse({
    secretKey,
    publicKey,
    baseUrl: process.env.LANGFUSE_BASEURL ?? "https://cloud.langfuse.com",
  });
  return _langfuse;
}

// ---------------------------------------------------------------------------
// Trace helpers
// ---------------------------------------------------------------------------

interface TraceOptions {
  name: string;
  userId?: string;
  metadata?: Record<string, unknown>;
  tags?: string[];
}

/**
 * Creates a Langfuse trace. Returns the trace object or `null` if Langfuse
 * is unavailable. All callers should use optional chaining on the result.
 */
export function traceAI(opts: TraceOptions) {
  const langfuse = getLangfuse();
  if (!langfuse) return null;

  return langfuse.trace({
    name: opts.name,
    userId: opts.userId,
    metadata: opts.metadata,
    tags: opts.tags,
  });
}

/**
 * Classifies an error for Langfuse metadata tagging.
 * Uses AI SDK's `APICallError.isInstance()` when available.
 */
export function classifyError(err: unknown): string {
  if (err instanceof Error) {
    if (err.name === "AbortError") return "timeout";
    // AI SDK APICallError has isInstance static method
    if ("statusCode" in err && typeof (err as any).statusCode === "number") {
      return `api-${(err as any).statusCode}`;
    }
    if (err.message.toLowerCase().includes("rate limit") || err.message.includes("429"))
      return "rate-limited";
    return "error";
  }
  return "unknown";
}

/**
 * Flush all pending Langfuse events. MUST be called at the end of every
 * Convex action that uses Langfuse — serverless runtimes may kill the
 * process before background sends complete.
 */
export async function flushLangfuse(): Promise<void> {
  const langfuse = getLangfuse();
  if (!langfuse) return;
  try {
    await langfuse.flushAsync();
  } catch {
    // Non-critical — don't let observability failures break generation
  }
}
