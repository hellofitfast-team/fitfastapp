"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { Scrypt } from "lucia";
import { getAuthUserId } from "./auth";
import { formatDate } from "./testUsersHelpers";

const DEFAULT_PASSWORD = "test12345";

const SCENARIO_NAMES: Record<string, string> = {
  active: "Test User (Active)",
  active_with_plans: "Test User (Active + Plans)",
  active_with_history: "Test User (Active + Full History)",
  expiring: "Test User (Expiring)",
  expired: "Test User (Expired)",
  pending: "Test User (Pending)",
};

function computeDates(
  planTier: "monthly" | "quarterly",
  scenario: string,
): {
  planStartDate?: string;
  planEndDate?: string;
  status: "active" | "expired" | "pending_approval";
} {
  const tierMonths = planTier === "quarterly" ? 3 : 1;
  const now = new Date();

  switch (scenario) {
    case "active":
    case "active_with_plans":
    case "active_with_history": {
      const start = new Date(now);
      start.setDate(start.getDate() - 7);
      const end = new Date(start);
      end.setDate(end.getDate() + tierMonths * 30);
      return { planStartDate: formatDate(start), planEndDate: formatDate(end), status: "active" };
    }
    case "expiring": {
      const end = new Date(now);
      end.setDate(end.getDate() + 3);
      const start = new Date(end);
      start.setDate(start.getDate() - tierMonths * 30);
      return { planStartDate: formatDate(start), planEndDate: formatDate(end), status: "active" };
    }
    case "expired": {
      const end = new Date(now);
      end.setDate(end.getDate() - 7);
      const start = new Date(end);
      start.setDate(start.getDate() - tierMonths * 30);
      return { planStartDate: formatDate(start), planEndDate: formatDate(end), status: "expired" };
    }
    case "pending":
      return { status: "pending_approval" };
    default:
      throw new Error(`Unknown scenario: ${scenario}`);
  }
}

// ─── Create a test user (requires coach auth) ──────────────────────────────

export const createTestUser = action({
  args: {
    planTier: v.union(v.literal("monthly"), v.literal("quarterly")),
    scenario: v.union(
      v.literal("active"),
      v.literal("active_with_plans"),
      v.literal("active_with_history"),
      v.literal("expiring"),
      v.literal("expired"),
      v.literal("pending"),
    ),
    language: v.optional(v.union(v.literal("en"), v.literal("ar"))),
  },
  handler: async (
    ctx,
    { planTier, scenario, language },
  ): Promise<{ email: string; password: string; fullName: string; status: string }> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Verify coach
    const isCoach = await ctx.runQuery(internal.testUsersHelpers.checkIsCoach, { userId });
    if (!isCoach) throw new Error("Not authorized");

    const email = `test-${Date.now()}@fitfast.test`;
    const fullName = SCENARIO_NAMES[scenario] ?? "Test User";
    const hashedPassword = await new Scrypt().hash(DEFAULT_PASSWORD);
    const { status, planStartDate, planEndDate } = computeDates(planTier, scenario);

    const { userId: newUserId } = await ctx.runMutation(internal.testUsersHelpers.insertTestUser, {
      email,
      hashedPassword,
      fullName,
      status,
      planTier,
      planStartDate,
      planEndDate,
      language,
    });

    // For plan-based scenarios: seed assessment + meal plan + workout plan (+ history)
    if ((scenario === "active_with_plans" || scenario === "active_with_history") && planStartDate) {
      await ctx.runMutation(internal.testUsersHelpers.seedTestUserData, {
        userId: newUserId,
        planStartDate,
        planEndDate: planEndDate!,
        includeHistory: scenario === "active_with_history",
      });
    }

    return { email, password: DEFAULT_PASSWORD, fullName, status };
  },
});

// ─── Delete a test user (requires coach auth) ──────────────────────────────

export const deleteTestUser = action({
  args: { profileId: v.id("profiles") },
  handler: async (ctx, { profileId }): Promise<void> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Verify coach before delegating to internal mutation
    const isCoach = await ctx.runQuery(internal.testUsersHelpers.checkIsCoach, { userId });
    if (!isCoach) throw new Error("Not authorized");

    await ctx.runMutation(internal.testUsersHelpers.deleteTestUserMutation, {
      profileId,
      callerUserId: userId,
    });
  },
});
