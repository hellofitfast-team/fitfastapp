"use node";

import { v } from "convex/values";
import { action, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { authComponent, createAuth } from "./auth";

/**
 * Seed initial users via BetterAuth's server-side API.
 * Creates users with proper password hashing in BetterAuth's tables.
 * The user.onCreate trigger creates profiles via onNewUserCreated.
 *
 * ADMIN SETUP:
 *   Step 1: Create the admin invite first (so onNewUserCreated picks it up):
 *     npx convex run seedBetterAuth:createAdminInvite '{"email":"testadmin@admin.com","fullName":"Coach Mohamed"}'
 *   Step 2: Create the user via BetterAuth:
 *     npx convex run seedBetterAuth:createUser '{"email":"testadmin@admin.com","password":"test12345","fullName":"Coach Mohamed"}'
 *
 * CLIENT SETUP:
 *   Step 1: Create an approved pending signup first:
 *     npx convex run seedBetterAuth:createApprovedSignup '{"email":"client@fitfast.app","fullName":"Test Client"}'
 *   Step 2: Create the user via BetterAuth:
 *     npx convex run seedBetterAuth:createUser '{"email":"client@fitfast.app","password":"test12345","fullName":"Test Client"}'
 */

export const createUser = action({
  args: {
    email: v.string(),
    password: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, password, fullName }) => {
    const { auth } = await authComponent.getAuth(createAuth, ctx);

    // Create user via BetterAuth API — triggers user.onCreate → onNewUserCreated
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: fullName,
      },
    });

    if (!result?.user) {
      return { success: false, message: "Failed to create user — may already exist" };
    }

    return {
      success: true,
      message: `User ${email} created. onNewUserCreated trigger will create the profile.`,
      userId: result.user.id,
    };
  },
});

/**
 * Create an admin invite so that when the user signs up,
 * onNewUserCreated finds the invite and creates a coach profile.
 */
export const createAdminInvite = internalMutation({
  args: {
    email: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, fullName }) => {
    // Check if invite already exists
    const existing = await ctx.db
      .query("adminInvites")
      .filter((q) => q.eq(q.field("email"), email.toLowerCase()))
      .first();

    if (existing) {
      return { success: true, message: "Invite already exists", inviteId: existing._id };
    }

    const token = crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");
    const inviteId = await ctx.db.insert("adminInvites", {
      email: email.toLowerCase(),
      fullName,
      token,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
      createdAt: Date.now(),
    });

    return { success: true, message: `Admin invite created for ${email}`, inviteId };
  },
});

/**
 * Create an approved pending signup so that when the client signs up,
 * onNewUserCreated finds the signup and creates an active client profile.
 */
export const createApprovedSignup = internalMutation({
  args: {
    email: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, fullName }) => {
    const existing = await ctx.db
      .query("pendingSignups")
      .filter((q) => q.eq(q.field("email"), email.toLowerCase()))
      .first();

    if (existing) {
      return { success: true, message: "Signup already exists", signupId: existing._id };
    }

    const signupId = await ctx.db.insert("pendingSignups", {
      email: email.toLowerCase(),
      fullName,
      phone: "",
      planTier: "monthly",
      status: "approved",
      createdAt: Date.now(),
    });

    return { success: true, message: `Approved signup created for ${email}`, signupId };
  },
});

/**
 * Force-promote a profile to coach status (for fixing profiles after seeding).
 */
export const promoteToCoach = internalMutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, { email }) => {
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_email", (q) => q.eq("email", email.toLowerCase()))
      .first();

    if (!profile) {
      return { success: false, message: `No profile found for ${email}` };
    }

    await ctx.db.patch(profile._id, {
      isCoach: true,
      isOwner: true,
      status: "active",
    });

    return { success: true, message: `${email} promoted to coach/owner` };
  },
});
