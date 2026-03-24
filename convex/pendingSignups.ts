import { v } from "convex/values";
import { query, mutation, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { getAuthUserId } from "./auth";
import { activeClientsCount, pendingSignupsCount } from "./adminStats";
import { rateLimiter } from "./rateLimiter";

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

/** Approved signups where the prospect hasn't created their account yet */
export const getApprovedAwaitingAccount = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    const approved = await ctx.db
      .query("pendingSignups")
      .withIndex("by_status", (q) => q.eq("status", "approved"))
      .collect();

    // Filter out signups where the prospect already has a profile
    const awaiting = [];
    for (const signup of approved) {
      const existing = await ctx.db
        .query("profiles")
        .withIndex("by_email", (q) => q.eq("email", signup.email))
        .first();
      if (!existing) {
        awaiting.push(signup);
      }
    }
    return awaiting;
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

    // Capped at 500 most recent signups to prevent unbounded queries
    const signups = await ctx.db.query("pendingSignups").order("desc").take(500);
    return signups;
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

export const getSignupByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    return ctx.db
      .query("pendingSignups")
      .withIndex("by_email", (q) => q.eq("email", email))
      .order("desc")
      .first();
  },
});

export const getSignupsByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    return ctx.db
      .query("pendingSignups")
      .withIndex("by_email", (q) => q.eq("email", email))
      .order("desc")
      .collect();
  },
});

export const createSignup = mutation({
  args: {
    email: v.string(),
    fullName: v.string(),
    phone: v.optional(v.string()),
    planId: v.optional(v.string()),
    planTier: v.optional(v.union(v.literal("monthly"), v.literal("quarterly"))),
    transferReferenceNumber: v.string(),
    transferAmount: v.string(),
    paymentScreenshotId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    // Server-side input validation
    const email = args.email.trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Invalid email address");
    }
    if (!args.fullName || args.fullName.length < 2 || args.fullName.length > 100) {
      throw new Error("Full name must be 2-100 characters");
    }
    if (args.phone && (args.phone.length > 20 || !/^\+?[0-9\s-]{7,20}$/.test(args.phone))) {
      throw new Error("Invalid phone number");
    }
    if (args.transferReferenceNumber.length > 50) {
      throw new Error("Transfer reference too long");
    }
    if (args.transferAmount.length > 20) {
      throw new Error("Transfer amount too long");
    }

    await rateLimiter.limit(ctx, "createSignup", { key: email });
    // Duplicate email guard (case-insensitive)
    const existingPending = await ctx.db
      .query("pendingSignups")
      .withIndex("by_email_status", (q) => q.eq("email", email).eq("status", "pending"))
      .first();
    if (existingPending) throw new Error("A signup with this email is already pending");

    // Generate invite token upfront so the prospect can create their account
    // immediately and land on the pending-approval screen while the coach reviews.
    const inviteToken =
      crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");

    const id = await ctx.db.insert("pendingSignups", {
      ...args,
      email,
      status: "pending",
      inviteToken,
    });
    // Increment the denormalized pending count for the admin dashboard
    await pendingSignupsCount.insert(ctx, { key: id, id });

    // Schedule OCR extraction if a payment screenshot was uploaded
    if (args.paymentScreenshotId) {
      await ctx.scheduler.runAfter(0, internal.ocrExtraction.extractPaymentData, {
        signupId: id,
        storageId: args.paymentScreenshotId,
      });
    }

    // Send invitation email with magic link to create account
    // (serves as both confirmation and account-setup in a single email)
    await ctx.scheduler.runAfter(0, internal.email.sendInvitationEmail, {
      email,
      fullName: args.fullName,
      inviteToken,
      language: "en" as const,
    });

    return id;
  },
});

export const approveSignup = mutation({
  args: { signupId: v.id("pendingSignups") },
  handler: async (ctx, { signupId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const coachProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!coachProfile?.isCoach) throw new Error("Not authorized");

    const signup = await ctx.db.get(signupId);
    if (!signup) throw new Error("Signup not found");
    if (signup.status !== "pending") throw new Error("Signup has already been reviewed");

    await ctx.db.patch(signupId, {
      status: "approved",
      reviewedAt: Date.now(),
    });
    // Decrement pending count — signup is no longer "pending"
    await pendingSignupsCount.deleteIfExists(ctx, { key: signupId, id: signupId });

    // Check if the prospect already created their account (has a pending_approval profile)
    // Try exact match first, then case-insensitive fallback (auth may normalize email case)
    let clientProfile = await ctx.db
      .query("profiles")
      .withIndex("by_email", (q) => q.eq("email", signup.email))
      .first();

    if (!clientProfile) {
      clientProfile = await ctx.db
        .query("profiles")
        .withIndex("by_email", (q) => q.eq("email", signup.email.toLowerCase()))
        .first();
    }

    if (clientProfile && clientProfile.status === "pending_approval") {
      // Activate the existing profile — prospect already set their password
      await ctx.scheduler.runAfter(0, internal.pendingSignups.activateClientProfile, {
        profileId: clientProfile._id,
        signupId,
      });
    } else {
      // Prospect hasn't created their account yet — reuse existing token or generate fresh
      const inviteToken =
        signup.inviteToken ??
        crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");
      if (!signup.inviteToken) {
        await ctx.db.patch(signupId, { inviteToken });
      }

      await ctx.scheduler.runAfter(0, internal.email.sendInvitationEmail, {
        email: signup.email,
        fullName: signup.fullName,
        inviteToken,
        language: "en" as const,
      });
    }
  },
});

export const rejectSignup = mutation({
  args: {
    signupId: v.id("pendingSignups"),
    rejectionReason: v.string(),
  },
  handler: async (ctx, { signupId, rejectionReason }) => {
    if (rejectionReason.length > 1000)
      throw new Error("Rejection reason too long (max 1000 characters)");

    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    const signup = await ctx.db.get(signupId);
    if (!signup) throw new Error("Signup not found");
    if (signup.status !== "pending") throw new Error("Signup has already been reviewed");

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
// Renewal — existing (expired) clients submit a renewal request
// ---------------------------------------------------------------------------

export const createRenewalSignup = mutation({
  args: {
    planId: v.optional(v.string()),
    planTier: v.optional(v.union(v.literal("monthly"), v.literal("quarterly"))),
    transferReferenceNumber: v.string(),
    transferAmount: v.string(),
    paymentScreenshotId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile) throw new Error("Profile not found");
    if (profile.status !== "expired" && profile.status !== "inactive")
      throw new Error("Only expired or inactive accounts can renew");

    const email = profile.email ?? "";
    await rateLimiter.limit(ctx, "createSignup", { key: email });

    // Don't allow duplicate pending renewal
    const existingPending = await ctx.db
      .query("pendingSignups")
      .withIndex("by_email_status", (q) => q.eq("email", email).eq("status", "pending"))
      .first();
    if (existingPending) throw new Error("A renewal request is already pending");

    const id = await ctx.db.insert("pendingSignups", {
      email,
      fullName: profile.fullName ?? "Client",
      planId: args.planId,
      planTier: args.planTier,
      transferReferenceNumber: args.transferReferenceNumber,
      transferAmount: args.transferAmount,
      paymentScreenshotId: args.paymentScreenshotId,
      status: "pending",
    });

    await pendingSignupsCount.insert(ctx, { key: id, id });

    if (args.paymentScreenshotId) {
      await ctx.scheduler.runAfter(0, internal.ocrExtraction.extractPaymentData, {
        signupId: id,
        storageId: args.paymentScreenshotId,
      });
    }

    return id;
  },
});

export const getMyPendingRenewal = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.email) return null;

    return ctx.db
      .query("pendingSignups")
      .withIndex("by_email_status", (q) => q.eq("email", profile.email!).eq("status", "pending"))
      .first();
  },
});

// ---------------------------------------------------------------------------
// Invite token validation — used by client app accept-invite page
// ---------------------------------------------------------------------------

// NOTE: Convex queries cannot call rateLimiter.limit (it requires mutation/write context).
// Token enumeration is mitigated by: 64-char random tokens (infeasible to brute-force),
// minimized response data, and the token being invalidated after use (markInviteUsed).
export const validateInviteToken = query({
  args: { token: v.string() },
  handler: async (ctx, { token }) => {
    const signup = await ctx.db
      .query("pendingSignups")
      .withIndex("by_inviteToken", (q) => q.eq("inviteToken", token))
      .unique();

    if (!signup) return null;

    // Minimized response — only return what the accept-invite page needs
    return {
      email: signup.email,
      fullName: signup.fullName,
    };
  },
});

export const markInviteUsed = internalMutation({
  args: { signupId: v.id("pendingSignups") },
  handler: async (ctx, { signupId }) => {
    await ctx.db.patch(signupId, {
      inviteToken: undefined,
    });
  },
});

// ---------------------------------------------------------------------------
// Internal mutations
// ---------------------------------------------------------------------------

export const patchOcrData = internalMutation({
  args: {
    signupId: v.id("pendingSignups"),
    ocrExtractedData: v.object({
      amount: v.optional(v.string()),
      sender_name: v.optional(v.string()),
      reference_number: v.optional(v.string()),
      date: v.optional(v.string()),
      bank: v.optional(v.string()),
    }),
  },
  handler: async (ctx, { signupId, ocrExtractedData }) => {
    await ctx.db.patch(signupId, { ocrExtractedData });
  },
});

/** Delete an approved signup that hasn't created an account yet (coach UI) */
export const deleteApprovedSignup = mutation({
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
    if (signup.status !== "approved") {
      throw new Error("Only approved signups can be deleted from this action");
    }

    // Ensure the signup hasn't already created a profile (email is lowercased on insert)
    const existingProfile = await ctx.db
      .query("profiles")
      .withIndex("by_email", (q) => q.eq("email", signup.email.toLowerCase()))
      .first();
    if (existingProfile) {
      throw new Error("This signup already has an account — delete the client instead");
    }

    if (signup.paymentScreenshotId) {
      await ctx.storage.delete(signup.paymentScreenshotId);
    }
    await ctx.db.delete(signupId);
  },
});

/** Delete a signup record and its payment screenshot (internal — for CLI cleanup) */
export const deleteSignupInternal = internalMutation({
  args: { signupId: v.id("pendingSignups") },
  handler: async (ctx, { signupId }) => {
    const signup = await ctx.db.get(signupId);
    if (!signup) throw new Error("Signup not found");

    if (signup.paymentScreenshotId) {
      await ctx.storage.delete(signup.paymentScreenshotId);
    }
    if (signup.status === "pending") {
      await pendingSignupsCount.deleteIfExists(ctx, { key: signupId, id: signupId });
    }
    await ctx.db.delete(signupId);
  },
});

export const patchInvitationId = internalMutation({
  args: {
    signupId: v.id("pendingSignups"),
    inviteToken: v.string(),
  },
  handler: async (ctx, { signupId, inviteToken }) => {
    await ctx.db.patch(signupId, { inviteToken });
  },
});

/**
 * Activate a client profile that was created at signup (pending_approval)
 * when the coach approves. Sets status to active, populates plan dates,
 * and sends the welcome email.
 */
export const activateClientProfile = internalMutation({
  args: {
    profileId: v.id("profiles"),
    signupId: v.id("pendingSignups"),
  },
  handler: async (ctx, { profileId, signupId }) => {
    const profile = await ctx.db.get(profileId);
    if (!profile || profile.status !== "pending_approval") return;

    const signup = await ctx.db.get(signupId);
    if (!signup) return;

    const planMonths = signup.planTier === "quarterly" ? 3 : 1;
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + planMonths);

    await ctx.db.patch(profileId, {
      fullName: signup.fullName,
      status: "active",
      planTier: signup.planTier,
      planStartDate: new Date().toISOString().split("T")[0],
      planEndDate: endDate.toISOString().split("T")[0],
      updatedAt: Date.now(),
    });

    // Maintain active clients aggregate counter
    await activeClientsCount.insert(ctx, { key: profileId, id: profileId });

    // Clear invite token — no longer needed
    if (signup.inviteToken) {
      await ctx.db.patch(signupId, { inviteToken: undefined });
    }

    // Send welcome email
    await ctx.scheduler.runAfter(0, internal.email.sendWelcomeEmail, {
      email: profile.email ?? signup.email,
      fullName: signup.fullName,
      language: profile.language ?? "en",
    });
  },
});
