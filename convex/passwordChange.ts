"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { getAuthUserId, authComponent, createAuth } from "./auth";

// TODO: Reimplement using BetterAuth's changePassword API directly.
// This is a temporary stub that will be replaced during the full auth migration.

export const changePassword = action({
  args: {
    currentPassword: v.string(),
    newPassword: v.string(),
  },
  handler: async (ctx, { currentPassword, newPassword }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Rate limit: 3 password changes per hour (brute-force protection)
    const { ok, retryAfter } = await ctx.runMutation(internal.rateLimiter.checkRateLimit, {
      name: "changePassword",
      key: userId,
    });
    if (!ok) {
      throw new Error(
        `Too many password change attempts — try again in ${Math.ceil(retryAfter / 1000)}s`,
      );
    }

    if (newPassword.length < 8) {
      throw new Error("New password must be at least 8 characters");
    }

    // Use BetterAuth's API to change password
    const { auth, headers } = await authComponent.getAuth(createAuth, ctx);
    const result = await auth.api.changePassword({
      body: {
        currentPassword,
        newPassword,
      },
      headers,
    });
    if (!result) {
      throw new Error("Password change failed");
    }
  },
});
