import { RateLimiter, DAY, HOUR } from "@convex-dev/rate-limiter";
import { components, internal } from "./_generated/api";
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

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
  // Password change: 3 per hour per user (brute-force protection)
  changePassword: { kind: "fixed window", rate: 3, period: HOUR },
  // Ticket creation: 10 per day per user (spam prevention)
  createTicket: { kind: "fixed window", rate: 10, period: DAY },
  // Ticket replies: 20 per day per user (spam prevention)
  replyToTicket: { kind: "fixed window", rate: 20, period: DAY },
  // Assessment submission: 5 per day per user (abuse prevention)
  submitAssessment: { kind: "fixed window", rate: 5, period: DAY },
  // Invite token validation: 10 per hour per token (enumeration prevention)
  validateInviteToken: { kind: "fixed window", rate: 10, period: HOUR },
  // Individual push notification: 50 per day per coach (abuse prevention)
  sendNotification: { kind: "fixed window", rate: 50, period: DAY },
  // Broadcast notification: 5 per day per coach (abuse prevention)
  broadcastNotification: { kind: "fixed window", rate: 5, period: DAY },
});

/**
 * Internal mutation to check rate limits from actions.
 * Actions cannot call rateLimiter.limit directly (it requires mutation context),
 * so they call this via ctx.runMutation.
 */
/** Rate limit names that can be checked from actions via checkRateLimit */
const actionRateLimitNames = [
  "changePassword",
  "sendNotification",
  "broadcastNotification",
] as const;
type ActionRateLimitName = (typeof actionRateLimitNames)[number];

export const checkRateLimit = internalMutation({
  args: {
    name: v.string(),
    key: v.string(),
  },
  handler: async (ctx, { name, key }) => {
    if (!actionRateLimitNames.includes(name as ActionRateLimitName)) {
      throw new Error(`Unknown rate limit name: ${name}`);
    }
    const { ok, retryAfter } = await rateLimiter.limit(ctx, name as ActionRateLimitName, { key });
    return { ok, retryAfter: retryAfter ?? 0 };
  },
});
