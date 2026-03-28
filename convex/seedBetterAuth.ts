"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { authComponent, createAuth } from "./auth";

/**
 * Seed users via BetterAuth. Run in this order:
 *
 * ADMIN:
 *   npx convex run seedBetterAuth:seedAdmin '{"email":"testadmin@admin.com","password":"test12345","fullName":"Coach Mohamed"}'
 *
 * CLIENT:
 *   npx convex run seedBetterAuth:seedClient '{"email":"client@fitfast.app","password":"test12345","fullName":"Test Client"}'
 */

export const seedAdmin = action({
  args: {
    email: v.string(),
    password: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, password, fullName }) => {
    // Step 1: Create admin invite so onNewUserCreated picks it up
    await ctx.runMutation(internal.seedBetterAuthHelpers.createAdminInvite, {
      email,
      fullName,
    });

    // Step 2: Create user via BetterAuth API
    const { auth } = await authComponent.getAuth(createAuth, ctx);
    const result = await auth.api.signUpEmail({
      body: { email, password, name: fullName },
    });

    if (!result?.user) {
      // May already exist
      console.log("signUpEmail failed — user may already exist");
    }

    // Step 3: Wait a moment for the trigger to create the profile, then promote
    // The trigger uses scheduler.runAfter(0, ...) so it's async
    await new Promise((r) => setTimeout(r, 2000));

    await ctx.runMutation(internal.seedBetterAuthHelpers.promoteToCoach, { email });

    return { success: true, message: `Admin ${email} seeded and promoted to coach/owner` };
  },
});

export const seedClient = action({
  args: {
    email: v.string(),
    password: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, password, fullName }) => {
    // Step 1: Create approved signup so onNewUserCreated creates active profile
    await ctx.runMutation(internal.seedBetterAuthHelpers.createApprovedSignup, {
      email,
      fullName,
    });

    // Step 2: Create user via BetterAuth API
    const { auth } = await authComponent.getAuth(createAuth, ctx);
    const result = await auth.api.signUpEmail({
      body: { email, password, name: fullName },
    });

    if (!result?.user) {
      console.log("signUpEmail failed — user may already exist");
    }

    return { success: true, message: `Client ${email} seeded` };
  },
});
