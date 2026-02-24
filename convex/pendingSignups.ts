import { v } from "convex/values";
import { query, mutation, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { getAuthUserId } from "./auth";
import { pendingSignupsCount } from "./adminStats";

export const getPendingSignups = query({
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
      .query("pendingSignups")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .collect();
  },
});

export const getAllSignups = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    return ctx.db.query("pendingSignups").order("desc").collect();
  },
});

export const getSignupById = query({
  args: { signupId: v.id("pendingSignups") },
  handler: async (ctx, { signupId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    return ctx.db.get(signupId);
  },
});

export const createSignup = mutation({
  args: {
    email: v.string(),
    fullName: v.string(),
    phone: v.optional(v.string()),
    planId: v.optional(v.string()),
    planTier: v.optional(
      v.union(
        v.literal("3_months"),
        v.literal("6_months"),
        v.literal("12_months"),
      ),
    ),
    paymentScreenshotId: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("pendingSignups", { ...args, status: "pending" });
    // Increment the denormalized pending count for the admin dashboard
    await pendingSignupsCount.insert(ctx, { key: id, id });
    return id;
  },
});

export const approveSignup = mutation({
  args: { signupId: v.id("pendingSignups") },
  handler: async (ctx, { signupId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    const signup = await ctx.db.get(signupId);
    if (!signup) throw new Error("Signup not found");

    // Generate a secure invite token
    const inviteToken = crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");
    const inviteExpiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days

    await ctx.db.patch(signupId, {
      status: "approved",
      reviewedAt: Date.now(),
      inviteToken,
      inviteExpiresAt,
    });
    // Decrement pending count — signup is no longer "pending"
    await pendingSignupsCount.deleteIfExists(ctx, { key: signupId, id: signupId });

    // Schedule invitation email
    await ctx.scheduler.runAfter(0, internal.email.sendInvitationEmail, {
      email: signup.email,
      fullName: signup.fullName,
      inviteToken,
      language: "en" as const,
    });
  },
});

export const rejectSignup = mutation({
  args: {
    signupId: v.id("pendingSignups"),
    rejectionReason: v.string(),
  },
  handler: async (ctx, { signupId, rejectionReason }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    const signup = await ctx.db.get(signupId);
    if (!signup) throw new Error("Signup not found");

    await ctx.db.patch(signupId, {
      status: "rejected",
      reviewedAt: Date.now(),
      rejectionReason,
    });
    // Decrement pending count — signup is no longer "pending"
    await pendingSignupsCount.deleteIfExists(ctx, { key: signupId, id: signupId });

    // Schedule rejection email with reason
    await ctx.scheduler.runAfter(0, internal.email.sendRejectionEmail, {
      email: signup.email,
      fullName: signup.fullName,
      rejectionReason,
      language: "en" as const,
    });
  },
});

// ---------------------------------------------------------------------------
// Invite token validation — used by client app accept-invite page
// ---------------------------------------------------------------------------

export const validateInviteToken = query({
  args: { token: v.string() },
  handler: async (ctx, { token }) => {
    const signups = await ctx.db.query("pendingSignups").collect();
    const signup = signups.find((s) => s.inviteToken === token);

    if (!signup) return null;
    if (signup.inviteExpiresAt && signup.inviteExpiresAt < Date.now()) return null;

    return {
      email: signup.email,
      fullName: signup.fullName,
      planTier: signup.planTier,
      signupId: signup._id,
    };
  },
});

export const markInviteUsed = internalMutation({
  args: { signupId: v.id("pendingSignups") },
  handler: async (ctx, { signupId }) => {
    await ctx.db.patch(signupId, {
      inviteToken: undefined,
      inviteExpiresAt: undefined,
    });
  },
});

// ---------------------------------------------------------------------------
// Internal mutations
// ---------------------------------------------------------------------------

export const patchInvitationId = internalMutation({
  args: {
    signupId: v.id("pendingSignups"),
    inviteToken: v.string(),
  },
  handler: async (ctx, { signupId, inviteToken }) => {
    await ctx.db.patch(signupId, { inviteToken });
  },
});
