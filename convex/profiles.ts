import { v } from "convex/values";
import { query, mutation, internalMutation } from "./_generated/server";
import { getAuthUserId } from "./auth";
import { activeClientsCount } from "./adminStats";

export const getMyProfile = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    return ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
  },
});

export const getProfileByUserId = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const callerId = await getAuthUserId(ctx);
    if (!callerId) throw new Error("Not authenticated");

    // Check if caller is coach
    const callerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", callerId))
      .unique();
    if (!callerProfile?.isCoach) throw new Error("Not authorized");

    return ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
  },
});

export const getAllClients = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    return ctx.db
      .query("profiles")
      .withIndex("by_isCoach", (q) => q.eq("isCoach", false))
      .collect();
  },
});

export const updateProfile = mutation({
  args: {
    fullName: v.optional(v.string()),
    phone: v.optional(v.string()),
    language: v.optional(v.union(v.literal("en"), v.literal("ar"))),
    notificationReminderTime: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile) throw new Error("Profile not found");

    await ctx.db.patch(profile._id, {
      ...args,
      updatedAt: Date.now(),
    });
  },
});

export const updateClientStatus = mutation({
  args: {
    profileId: v.id("profiles"),
    status: v.union(
      v.literal("pending_approval"),
      v.literal("active"),
      v.literal("inactive"),
      v.literal("expired"),
    ),
    planTier: v.optional(
      v.union(
        v.literal("3_months"),
        v.literal("6_months"),
        v.literal("12_months"),
      ),
    ),
    planStartDate: v.optional(v.string()),
    planEndDate: v.optional(v.string()),
  },
  handler: async (ctx, { profileId, ...args }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const callerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!callerProfile?.isCoach) throw new Error("Not authorized");

    // Maintain the active clients count as status changes
    if (args.status !== undefined) {
      const existing = await ctx.db.get(profileId);
      const wasActive = existing?.status === "active";
      const isNowActive = args.status === "active";

      if (!wasActive && isNowActive) {
        await activeClientsCount.insert(ctx, { key: profileId, id: profileId });
      } else if (wasActive && !isNowActive) {
        await activeClientsCount.deleteIfExists(ctx, { key: profileId, id: profileId });
      }
    }

    await ctx.db.patch(profileId, { ...args, updatedAt: Date.now() });
  },
});

// Internal: create a profile for a new user (called during signup acceptance)
export const createProfileForNewUser = internalMutation({
  args: {
    userId: v.string(),
    email: v.optional(v.string()),
    fullName: v.optional(v.string()),
  },
  handler: async (ctx, { userId, email, fullName }) => {
    await ctx.db.insert("profiles", {
      userId,
      email,
      fullName,
      language: "en",
      status: "pending_approval",
      isCoach: false,
      updatedAt: Date.now(),
    });
  },
});

// Called by auth.ts afterUserCreatedOrUpdated callback via scheduler
export const onNewUserCreated = internalMutation({
  args: {
    userId: v.string(),
    email: v.string(),
  },
  handler: async (ctx, { userId, email }) => {
    // Check if a profile already exists
    const existing = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (existing) return;

    // Check if this user came from an approved pending signup (invite flow)
    const signup = await ctx.db
      .query("pendingSignups")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (signup && signup.status === "approved") {
      // Create profile from the approved signup data
      const planMonths =
        signup.planTier === "12_months" ? 12 : signup.planTier === "6_months" ? 6 : 3;
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + planMonths);

      await ctx.db.insert("profiles", {
        userId,
        email: signup.email,
        fullName: signup.fullName,
        language: "en",
        status: "active",
        isCoach: false,
        planTier: signup.planTier,
        planStartDate: new Date().toISOString().split("T")[0],
        planEndDate: endDate.toISOString().split("T")[0],
        updatedAt: Date.now(),
      });

      // Mark invite token as used
      if (signup.inviteToken) {
        await ctx.db.patch(signup._id, {
          inviteToken: undefined,
          inviteExpiresAt: undefined,
        });
      }
    } else {
      // Fallback: create a basic pending profile
      await ctx.db.insert("profiles", {
        userId,
        email,
        language: "en",
        status: "pending_approval",
        isCoach: false,
        updatedAt: Date.now(),
      });
    }
  },
});
