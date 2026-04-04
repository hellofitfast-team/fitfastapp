import { v } from "convex/values";
import { query, mutation, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { getAuthUserId } from "./auth";
import { activeClientsCount, pendingSignupsCount } from "./adminStats";
import { rateLimiter } from "./rateLimiter";
import { deleteAuthRecordsByEmail, normalizeEmail } from "./helpers";
import { logAuditEvent } from "./auditLog";

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
    // All emails are normalized to lowercase — direct lookup is sufficient
    const awaiting = [];
    for (const signup of approved) {
      const existing = await ctx.db
        .query("profiles")
        .withIndex("by_email", (q) => q.eq("email", normalizeEmail(signup.email)))
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
    const email = normalizeEmail(args.email);
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
    // Duplicate guard — check both tables
    const existingPending = await ctx.db
      .query("pendingSignups")
      .withIndex("by_email_status", (q) => q.eq("email", email).eq("status", "pending"))
      .first();
    if (existingPending) throw new Error("A signup with this email is already pending");

    const existingClient = await ctx.db
      .query("clientProfiles")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();
    if (
      existingClient &&
      (existingClient.status === "signup_pending" || existingClient.status === "approved")
    ) {
      throw new Error("A signup with this email is already pending");
    }

    // Generate invite token so the user can create their account immediately
    const inviteToken =
      crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");

    // ── Dual-write: legacy pendingSignups + new clientProfiles ──
    const id = await ctx.db.insert("pendingSignups", {
      ...args,
      email,
      status: "pending",
      inviteToken,
    });
    await pendingSignupsCount.insert(ctx, { key: id, id });

    // Create clientProfile at signup time — profile exists BEFORE password is set
    const now = Date.now();
    const clientProfileId = await ctx.db.insert("clientProfiles", {
      email,
      fullName: args.fullName,
      phone: args.phone,
      language: "en",
      status: "signup_pending" as const,
      planTier: args.planTier ?? "monthly",
      inviteToken,
      createdAt: now,
      updatedAt: now,
    });

    // Store payment data in signupPayments
    await ctx.db.insert("signupPayments", {
      clientProfileId,
      transferReferenceNumber: args.transferReferenceNumber,
      transferAmount: args.transferAmount,
      paymentScreenshotId: args.paymentScreenshotId,
    });

    // Schedule OCR extraction if a payment screenshot was uploaded
    if (args.paymentScreenshotId) {
      await ctx.scheduler.runAfter(0, internal.ocrExtraction.extractPaymentData, {
        signupId: id,
        storageId: args.paymentScreenshotId,
      });
    }

    // Send "Create Your Account" email with invite link
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

    const now = Date.now();
    const normalizedEmail = normalizeEmail(signup.email);

    await ctx.db.patch(signupId, {
      status: "approved",
      reviewedAt: now,
    });
    await pendingSignupsCount.deleteIfExists(ctx, { key: signupId, id: signupId });

    await logAuditEvent(ctx, {
      actorUserId: userId,
      action: "approve_signup",
      resourceType: "pendingSignup",
      resourceId: signupId,
      details: { email: signup.email, fullName: signup.fullName },
    });

    // ── Also update clientProfiles (new table) ──
    const newClientProfile = await ctx.db
      .query("clientProfiles")
      .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
      .first();

    // ── Compute plan dates once (shared across both tables) ──
    const userAlreadyHasAccount = !!newClientProfile?.userId;
    const planTier = newClientProfile?.planTier ?? signup.planTier;
    const planMonths = planTier === "quarterly" ? 3 : 1;
    const planEndDate = new Date();
    planEndDate.setMonth(planEndDate.getMonth() + planMonths);
    const planStartStr = new Date().toISOString().split("T")[0];
    const planEndStr = planEndDate.toISOString().split("T")[0];

    // ── Update clientProfiles (new table) ──
    if (newClientProfile) {
      if (userAlreadyHasAccount) {
        // User already set password — activate directly
        await ctx.db.patch(newClientProfile._id, {
          status: "active",
          planStartDate: planStartStr,
          planEndDate: planEndStr,
          inviteToken: undefined,
          updatedAt: now,
        });
      } else {
        // User hasn't set password yet — mark as approved, keep invite token
        await ctx.db.patch(newClientProfile._id, {
          status: "approved",
          updatedAt: now,
        });
      }
    }

    // ── Email + legacy profiles dual-write ──
    const legacyProfile = await ctx.db
      .query("profiles")
      .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
      .first();

    if (userAlreadyHasAccount) {
      // User already set password — activate legacy profile + send welcome email
      if (legacyProfile) {
        if (legacyProfile.status !== "active") {
          await ctx.db.patch(legacyProfile._id, {
            status: "active",
            fullName: signup.fullName,
            planTier,
            planStartDate: planStartStr,
            planEndDate: planEndStr,
            updatedAt: now,
          });
        }
      } else {
        // Legacy profile missing (onNewUserCreated failed) — create it
        await ctx.db.insert("profiles", {
          userId: newClientProfile!.userId!,
          email: normalizedEmail,
          fullName: signup.fullName,
          language: newClientProfile!.language ?? "en",
          status: "active",
          isCoach: false,
          planTier,
          planStartDate: planStartStr,
          planEndDate: planEndStr,
          updatedAt: now,
        });
      }

      // Track active client (use clientProfiles ID as canonical key)
      await activeClientsCount.insert(ctx, {
        key: newClientProfile!._id,
        id: newClientProfile!._id,
      });

      // Send welcome email (green CTA — "Access Your Account")
      await ctx.scheduler.runAfter(0, internal.email.sendWelcomeEmail, {
        email: normalizedEmail,
        fullName: signup.fullName,
        language: (newClientProfile!.language as "en" | "ar") ?? "en",
      });
    } else {
      // User hasn't created account yet
      if (legacyProfile && legacyProfile.status === "pending_approval") {
        // Legacy profile exists — activate via scheduled mutation (sends welcome email)
        await ctx.scheduler.runAfter(0, internal.pendingSignups.activateClientProfile, {
          profileId: legacyProfile._id,
          signupId,
        });
      } else {
        // No account yet — send invite email (orange CTA — "Create Your Account")
        const inviteToken =
          signup.inviteToken ??
          crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");
        if (!signup.inviteToken) {
          await ctx.db.patch(signupId, { inviteToken });
        }
        // Sync invite token to clientProfiles
        if (newClientProfile && !newClientProfile.inviteToken) {
          await ctx.db.patch(newClientProfile._id, { inviteToken, updatedAt: now });
        }

        await ctx.scheduler.runAfter(0, internal.email.sendInvitationEmail, {
          email: signup.email,
          fullName: signup.fullName,
          inviteToken,
          language: "en" as const,
        });
      }
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

    await logAuditEvent(ctx, {
      actorUserId: userId,
      action: "reject_signup",
      resourceType: "pendingSignup",
      resourceId: signupId,
      details: { email: signup.email, fullName: signup.fullName, rejectionReason },
    });

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

    // Allow account creation for both pending and approved signups.
    // Rejected signups should not allow account creation.
    if (signup.status === "rejected") return null;

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

    // Ensure the signup hasn't already created a profile
    const existingProfile = await ctx.db
      .query("profiles")
      .withIndex("by_email", (q) => q.eq("email", normalizeEmail(signup.email)))
      .first();
    if (existingProfile) {
      throw new Error("This signup already has an account — delete the client instead");
    }

    if (signup.paymentScreenshotId) {
      await ctx.storage.delete(signup.paymentScreenshotId);
    }

    // Clean up orphaned auth records if the prospect created an account but has no profile
    await deleteAuthRecordsByEmail(ctx, signup.email);

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

    const planStartDate = new Date().toISOString().split("T")[0];
    const planEndDate = endDate.toISOString().split("T")[0];
    const activationTime = Date.now();

    await ctx.db.patch(profileId, {
      fullName: signup.fullName,
      status: "active",
      planTier: signup.planTier,
      planStartDate,
      planEndDate,
      updatedAt: activationTime,
    });

    // Also activate clientProfiles (dual-write)
    const normalizedEmail = normalizeEmail(profile.email ?? signup.email);
    const clientProfile = await ctx.db
      .query("clientProfiles")
      .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
      .first();
    if (clientProfile && clientProfile.status !== "active") {
      await ctx.db.patch(clientProfile._id, {
        status: "active",
        planStartDate,
        planEndDate,
        inviteToken: undefined,
        updatedAt: activationTime,
      });
    }

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
