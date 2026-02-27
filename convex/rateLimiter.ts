import { RateLimiter, DAY, HOUR } from "@convex-dev/rate-limiter";
import { components } from "./_generated/api";

/**
 * Named rate limits for spam prevention.
 * Works from both mutations and actions (requires ctx with runMutation).
 *
 * Note: "generatePlan" was removed — plan generation is now gated dynamically
 * based on the coach-configured check_in_frequency_days in systemConfig.
 * See checkIns.ts startCheckInWorkflow and ai.ts public actions.
 */
export const rateLimiter = new RateLimiter(components.rateLimiter, {
  // Check-in submission: 3 per day per user (anti-spam, not plan-generation gating)
  submitCheckIn: {
    kind: "fixed window",
    rate: 3,
    period: DAY,
  },
  // Signup creation: 5 per hour per email (prevent spam signups)
  createSignup: { kind: "fixed window", rate: 5, period: HOUR },
  // Marketing upload URL: 10 per hour per IP (unauthenticated endpoint)
  marketingUpload: { kind: "fixed window", rate: 10, period: HOUR },
});
