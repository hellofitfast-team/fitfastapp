import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { activeClientsCount } from "./adminStats";
import type { Id } from "./_generated/dataModel";

// ─── Check if a user is a coach ────────────────────────────────────────────

export const checkIsCoach = internalQuery({
  args: { userId: v.string() },
  handler: async (ctx, { userId }): Promise<boolean> => {
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    return profile?.isCoach === true;
  },
});

// ─── Insert a test auth user + profile ──────────────────────────────────────

export const insertTestUser = internalMutation({
  args: {
    email: v.string(),
    hashedPassword: v.string(),
    fullName: v.string(),
    status: v.union(v.literal("active"), v.literal("expired"), v.literal("pending_approval")),
    planTier: v.union(v.literal("monthly"), v.literal("quarterly")),
    planStartDate: v.optional(v.string()),
    planEndDate: v.optional(v.string()),
  },
  handler: async (ctx, args): Promise<string> => {
    // Check for existing user
    const existing = await ctx.db
      .query("authAccounts")
      .filter((q) =>
        q.and(
          q.eq(q.field("provider"), "password"),
          q.eq(q.field("providerAccountId"), args.email),
        ),
      )
      .first();
    if (existing) throw new Error(`User ${args.email} already exists`);

    // 1. Create user record
    const userId = await ctx.db.insert("users", { email: args.email });

    // 2. Create auth account
    await ctx.db.insert("authAccounts", {
      userId,
      provider: "password",
      providerAccountId: args.email,
      secret: args.hashedPassword,
    });

    // 3. Create profile
    const profileId = await ctx.db.insert("profiles", {
      userId,
      email: args.email,
      fullName: args.fullName,
      language: "en",
      status: args.status,
      isCoach: false,
      planTier: args.status === "pending_approval" ? undefined : args.planTier,
      planStartDate: args.planStartDate,
      planEndDate: args.planEndDate,
      updatedAt: Date.now(),
    });

    // Maintain active clients counter
    if (args.status === "active") {
      await activeClientsCount.insert(ctx, { key: profileId, id: profileId });
    }

    return profileId;
  },
});

// ─── Delete a test user (safety: only @fitfast.test emails) ─────────────────

export const deleteTestUserMutation = internalMutation({
  args: {
    profileId: v.id("profiles"),
    callerUserId: v.string(),
  },
  handler: async (ctx, { profileId, callerUserId }): Promise<void> => {
    // Verify coach
    const callerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", callerUserId))
      .unique();
    if (!callerProfile?.isCoach) throw new Error("Not authorized");

    const profile = await ctx.db.get(profileId);
    if (!profile) throw new Error("Profile not found");

    // Safety: only allow deleting test users
    if (!profile.email?.endsWith("@fitfast.test")) {
      throw new Error("Can only delete test users (@fitfast.test)");
    }

    // Remove from active count if applicable
    if (profile.status === "active") {
      await activeClientsCount.deleteIfExists(ctx, { key: profileId, id: profileId });
    }

    // Delete auth records
    const authAccount = await ctx.db
      .query("authAccounts")
      .filter((q) =>
        q.and(
          q.eq(q.field("provider"), "password"),
          q.eq(q.field("providerAccountId"), profile.email),
        ),
      )
      .first();

    if (authAccount) {
      // Delete sessions + refresh tokens
      const sessions = await ctx.db
        .query("authSessions")
        .filter((q) => q.eq(q.field("userId"), authAccount.userId))
        .collect();
      for (const s of sessions) {
        const tokens = await ctx.db
          .query("authRefreshTokens")
          .filter((q) => q.eq(q.field("sessionId"), s._id))
          .collect();
        for (const t of tokens) await ctx.db.delete(t._id);
        await ctx.db.delete(s._id);
      }
      await ctx.db.delete(authAccount._id);
    }

    // Delete user record
    try {
      await ctx.db.delete(profile.userId as Id<"users">);
    } catch {
      // User record may already be deleted
    }

    // Cascade delete profile + all user data
    await ctx.scheduler.runAfter(0, internal.dataRetention.cascadeDeleteUser, {
      userId: profile.userId,
      profileId: profile._id,
    });
  },
});
