"use node";

import { v } from "convex/values";
import { action, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { authComponent, createAuth } from "./auth";

/**
 * Seed load test users on ANY deployment (including prod).
 * Creates users via BetterAuth signUpEmail so they can authenticate.
 *
 * Usage:
 *   npx convex run seedLoadTest:seedUsers '{"count":100}'
 */
export const seedUsers = action({
  args: { count: v.optional(v.number()) },
  handler: async (ctx, { count }) => {
    const numUsers = count ?? 100;
    const password = "loadtest12345";
    const results: string[] = [];

    const { auth } = await authComponent.getAuth(createAuth, ctx);

    for (let i = 1; i <= numUsers; i++) {
      const padded = String(i).padStart(3, "0");
      const email = `loaduser-${padded}@test.com`;
      const fullName = `Load Test User ${padded}`;

      try {
        // Create approved signup so onNewUserCreated creates active profile
        await ctx.runMutation(internal.seedBetterAuthHelpers.createApprovedSignup, {
          email,
          fullName,
        });

        // Create user via BetterAuth API
        const result = await auth.api.signUpEmail({
          body: { email, password, name: fullName },
        });

        if (result?.user) {
          results.push(`OK: ${email}`);
        } else {
          results.push(`SKIP: ${email} (may already exist)`);
        }
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        if (msg.includes("already") || msg.includes("exist")) {
          results.push(`SKIP: ${email} (already exists)`);
        } else {
          results.push(`ERROR: ${email} — ${msg}`);
        }
      }
    }

    const okCount = results.filter((r) => r.startsWith("OK")).length;
    const skipCount = results.filter((r) => r.startsWith("SKIP")).length;
    const errorCount = results.filter((r) => r.startsWith("ERROR")).length;

    return `Seeded ${okCount} new, ${skipCount} skipped, ${errorCount} errors out of ${numUsers} users.`;
  },
});

/**
 * Ensure load test users have active profiles with dummy assessment data.
 * Run AFTER seedUsers if profiles need assessment data for dashboard queries.
 *
 * Usage:
 *   npx convex run seedLoadTest:ensureAssessments '{"count":100}'
 */
export const ensureAssessments = action({
  args: { count: v.optional(v.number()) },
  handler: async (ctx, { count }) => {
    const numUsers = count ?? 100;
    let patched = 0;

    for (let i = 1; i <= numUsers; i++) {
      const padded = String(i).padStart(3, "0");
      const email = `loaduser-${padded}@test.com`;

      try {
        await ctx.runMutation(internal.seedLoadTestHelpers.ensureAssessment, { email });
        patched++;
      } catch {
        // Profile may not exist yet — skip
      }
    }

    return `Ensured assessments for ${patched}/${numUsers} users.`;
  },
});

/**
 * Cleanup: delete all load test users and their data.
 *
 * Usage:
 *   npx convex run seedLoadTest:cleanup '{"count":100}'
 */
export const cleanup = action({
  args: { count: v.optional(v.number()) },
  handler: async (ctx, { count }) => {
    const numUsers = count ?? 100;
    let deleted = 0;

    for (let i = 1; i <= numUsers; i++) {
      const padded = String(i).padStart(3, "0");
      const email = `loaduser-${padded}@test.com`;

      try {
        await ctx.runMutation(internal.seedLoadTestHelpers.deleteLoadTestUser, { email });
        deleted++;
      } catch {
        // User may not exist
      }
    }

    return `Deleted ${deleted}/${numUsers} load test users.`;
  },
});
