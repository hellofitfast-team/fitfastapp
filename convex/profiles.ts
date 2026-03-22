import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { query, mutation, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
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

/** Get all team members (coaches) + pending admin invites for the team management table. */
export const getTeamMembers = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const callerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!callerProfile?.isCoach) throw new Error("Not authorized");

    // Get all coach profiles
    const coaches = await ctx.db
      .query("profiles")
      .withIndex("by_isCoach", (q) => q.eq("isCoach", true))
      .collect();

    // Get all pending (unused, not expired) admin invites
    const allInvites = await ctx.db.query("adminInvites").collect();
    const now = Date.now();
    const pendingInvites = allInvites.filter((inv) => !inv.usedAt && now <= inv.expiresAt);

    // Merge: active coaches + pending invites (exclude invites for existing coaches)
    const coachEmails = new Set(coaches.map((c) => c.email?.toLowerCase()));

    const members: {
      email: string;
      fullName: string;
      role: "owner" | "coach";
      status: "active" | "pending";
    }[] = [];

    for (const coach of coaches) {
      members.push({
        email: coach.email ?? "",
        fullName: coach.fullName ?? "",
        role: coach.isOwner ? "owner" : "coach",
        status: "active",
      });
    }

    for (const invite of pendingInvites) {
      if (!coachEmails.has(invite.email.toLowerCase())) {
        members.push({
          email: invite.email,
          fullName: invite.fullName,
          role: "coach",
          status: "pending",
        });
      }
    }

    return { members, callerIsOwner: !!callerProfile.isOwner };
  },
});

/** Remove a coach from the team (owner-only). Deletes profile + auth account. */
export const removeTeamMember = mutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const callerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!callerProfile?.isOwner) throw new Error("Only the owner can remove team members");

    // Find the target profile
    const allCoaches = await ctx.db
      .query("profiles")
      .withIndex("by_isCoach", (q) => q.eq("isCoach", true))
      .collect();
    const target = allCoaches.find((p) => p.email?.toLowerCase() === email.toLowerCase());

    if (target?.isOwner) throw new Error("Cannot remove the owner account");

    if (target) {
      // Delete profile
      await ctx.db.delete(target._id);

      // Delete auth account
      const authAccount = await ctx.db
        .query("authAccounts")
        .filter((q) =>
          q.and(
            q.eq(q.field("provider"), "password"),
            q.eq(q.field("providerAccountId"), email.toLowerCase()),
          ),
        )
        .first();
      if (authAccount) {
        await ctx.db.delete(authAccount._id);
        // Delete users record too
        const userDoc = await ctx.db
          .query("users")
          .filter((q) => q.eq(q.field("_id"), authAccount.userId))
          .first();
        if (userDoc) await ctx.db.delete(userDoc._id);
      }
    }

    // Also delete any pending invite for this email
    const invites = await ctx.db
      .query("adminInvites")
      .withIndex("by_email", (q) => q.eq("email", email))
      .collect();
    for (const inv of invites) {
      await ctx.db.delete(inv._id);
    }

    return `Removed ${email} from the team`;
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

    // Capped at 1500 to prevent unbounded live subscriptions at scale
    return ctx.db
      .query("profiles")
      .withIndex("by_isCoach", (q) => q.eq("isCoach", false))
      .take(1500);
  },
});

export const listClientsPaginated = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, { paginationOpts }) => {
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
      .order("desc")
      .paginate(paginationOpts);
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
    planTier: v.optional(v.union(v.literal("monthly"), v.literal("quarterly"))),
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

    // Track inactiveSince for data retention policy (90-day cleanup)
    const patchData: Record<string, unknown> = { ...args, updatedAt: Date.now() };
    if (args.status === "inactive" || args.status === "expired") {
      patchData.inactiveSince = Date.now();
    } else if (args.status === "active") {
      // Clear inactiveSince on reactivation
      patchData.inactiveSince = undefined;
    }

    await ctx.db.patch(profileId, patchData);
  },
});

export const rejectClient = mutation({
  args: {
    profileId: v.id("profiles"),
    rejectionReason: v.string(),
  },
  handler: async (ctx, { profileId, rejectionReason }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const callerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!callerProfile?.isCoach) throw new Error("Not authorized");

    const profile = await ctx.db.get(profileId);
    if (!profile) throw new Error("Profile not found");

    // Schedule rejection email before deleting
    if (profile.email) {
      await ctx.scheduler.runAfter(0, internal.email.sendRejectionEmail, {
        email: profile.email,
        fullName: profile.fullName ?? "there",
        rejectionReason,
        language: profile.language ?? "en",
      });
    }

    // Remove from active count if applicable
    if (profile.status === "active") {
      await activeClientsCount.deleteIfExists(ctx, { key: profileId, id: profileId });
    }

    // Cascade-delete all user data (profile, plans, check-ins, tickets, files, etc.)
    await ctx.scheduler.runAfter(0, internal.dataRetention.cascadeDeleteUser, {
      userId: profile.userId,
      profileId: profile._id,
    });
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

    // Check if this user came from an admin invite (coach setup flow)
    // Try exact match first, then case-insensitive fallback
    let adminInvite = await ctx.db
      .query("adminInvites")
      .withIndex("by_email", (q) => q.eq("email", email))
      .order("desc")
      .first();

    // Case-insensitive fallback (email field may differ in case)
    if (!adminInvite) {
      adminInvite = await ctx.db
        .query("adminInvites")
        .withIndex("by_email", (q) => q.eq("email", email.toLowerCase()))
        .order("desc")
        .first();
    }

    console.log(
      `[onNewUserCreated] email=${email}, adminInvite=${adminInvite ? `found(usedAt=${adminInvite.usedAt}, expires=${adminInvite.expiresAt})` : "not found"}`,
    );

    if (adminInvite && !adminInvite.usedAt && Date.now() <= adminInvite.expiresAt) {
      // Create coach profile from admin invite
      // If no invitedBy, this is the initial owner setup
      const isOwner = !adminInvite.invitedBy;
      await ctx.db.insert("profiles", {
        userId,
        email: adminInvite.email,
        fullName: adminInvite.fullName,
        language: "en",
        status: "active",
        isCoach: true,
        isOwner: isOwner || undefined,
        updatedAt: Date.now(),
      });
      // Mark invite as used
      await ctx.db.patch(adminInvite._id, { usedAt: Date.now() });
      return;
    }

    // Check if this user came from an approved pending signup (client invite flow)
    const signup = await ctx.db
      .query("pendingSignups")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (signup && signup.status === "approved") {
      // Create profile from the approved signup data
      const planMonths = signup.planTier === "quarterly" ? 3 : 1;
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + planMonths);

      const profileId = await ctx.db.insert("profiles", {
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

      // Maintain active clients aggregate counter
      await activeClientsCount.insert(ctx, { key: profileId, id: profileId });

      // Mark invite token as used
      if (signup.inviteToken) {
        await ctx.db.patch(signup._id, {
          inviteToken: undefined,
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
