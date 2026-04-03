"use node";

/**
 * Lazy environment variable validation for Convex Node actions.
 * Call validateEnv() at the start of critical actions to fail-fast
 * with a clear message when required env vars are missing.
 *
 * Env vars are only available in "use node" actions at runtime,
 * so validation must happen lazily (not at module load).
 */

const REQUIRED_ENVS: Record<string, string> = {
  OPENROUTER_API_KEY: "AI plan generation",
  RESEND_API_KEY: "Email sending (signup invites, approvals, notifications)",
  VAPID_PUBLIC_KEY: "Push notifications",
  VAPID_PRIVATE_KEY: "Push notifications",
};

const OPTIONAL_WITH_WARNING: Record<string, string> = {
  CLIENT_APP_URL: "Client app links in emails (defaults to https://client.fitfast.app)",
  ADMIN_APP_URL: "Admin app links (defaults to https://admin.fitfast.app)",
  LANGFUSE_SECRET_KEY: "AI observability (Langfuse tracing)",
  LANGFUSE_PUBLIC_KEY: "AI observability (Langfuse tracing)",
};

let _validated = false;

/**
 * Validate that all required env vars are set. Logs warnings for optional ones.
 * Only runs once per action runtime (cached after first call).
 */
export function validateEnv(): void {
  if (_validated) return;
  _validated = true;

  const missing: string[] = [];
  for (const [key, purpose] of Object.entries(REQUIRED_ENVS)) {
    if (!process.env[key]) {
      missing.push(`  - ${key}: ${purpose}`);
    }
  }

  if (missing.length > 0) {
    const msg =
      `Missing required environment variables:\n${missing.join("\n")}\n` +
      `Set these in your Convex dashboard under Settings → Environment Variables.`;
    console.error(`[EnvValidation] ${msg}`);
    throw new Error(msg);
  }

  for (const [key, purpose] of Object.entries(OPTIONAL_WITH_WARNING)) {
    if (!process.env[key]) {
      console.warn(`[EnvValidation] Optional env var not set: ${key} — ${purpose}`);
    }
  }
}
