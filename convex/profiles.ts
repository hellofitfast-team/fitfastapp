import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { query, mutation, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { getAuthUserId, authComponent } from "./auth";
import { activeClientsCount } from "./adminStats";
import { deleteAuthRecords, normalizeEmail } from "./helpers";
import { logAuditEvent } from "./auditLog";
import { rateLimiter } from "./rateLimiter";

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

/**
 * Recovery mutation: if an authenticated user has no profile (e.g. onNewUserCreated
 * scheduler job failed), re-trigger profile creation. Safe to call multiple times —
 * onNewUserCreated has an idempotency guard that skips if profile already exists.
 */
export const ensureProfile = mutation({
  args: {},
  handler: async (ctx): Promise<{ status: "exists" | "scheduled" | "not_authenticated" }> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return { status: "not_authenticated" };

    await rateLimiter.limit(ctx, "ensureProfile", { key: userId });

    // Check ALL profile tables (legacy + new) for idempotency
    const existingLegacy = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    const existingCoach = await ctx.db
      .query("coachProfiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    const existingClient = await ctx.db
      .query("clientProfiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (existingLegacy || existingCoach || existingClient) return { status: "exists" };

    // Need email for onNewUserCreated — look it up from the auth user
    // Use authComponent directly here since we already confirmed auth via getAuthUserId
    let email = "";
    try {
      const authUser = await authComponent.safeGetAuthUser(ctx);
      email = authUser?.email ?? "";
    } catch {
      // In test environments, fall back to identity tokenIdentifier
      const identity = await ctx.auth?.getUserIdentity?.();
      email = identity?.email ?? "";
    }

    if (!email) {
      console.warn("[ensureProfile] No email found for userId:", userId);
      return { status: "not_authenticated" };
    }

    // Profile missing — schedule creation (same path as the auth trigger)
    await ctx.scheduler.runAfter(0, internal.profiles.onNewUserCreated, {
      userId,
      email,
    });

    return { status: "scheduled" };
  },
});

/** Client-specific profile query — reads from clientProfiles (new) with legacy fallback */
export const getMyClientProfile = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    // Try new table first
    const clientProfile = await ctx.db
      .query("clientProfiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (clientProfile) return clientProfile;

    // Fallback to legacy profiles table during migration
    const legacy = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (legacy && !legacy.isCoach) return legacy;

    return null;
  },
});

/** Coach-specific profile query — reads from coachProfiles (new) with legacy fallback */
export const getMyCoachProfile = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    // Try new table first
    const coachProfile = await ctx.db
      .query("coachProfiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (coachProfile) return coachProfile;

    // Fallback to legacy profiles table during migration
    const legacy = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (legacy?.isCoach) return legacy;

    return null;
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
    const coachEmails = new Set(coaches.map((c) => (c.email ? normalizeEmail(c.email) : "")));

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
      if (!coachEmails.has(normalizeEmail(invite.email))) {
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
    const normalizedEmail = normalizeEmail(email);
    const target = allCoaches.find((p) =>
      p.email ? normalizeEmail(p.email) === normalizedEmail : false,
    );

    if (target?.isOwner) throw new Error("Cannot remove the owner account");

    const emailLower = normalizedEmail;

    if (target) {
      // Delete all auth records (sessions, tokens, verifiers, accounts, user)
      await deleteAuthRecords(ctx, target.userId);

      // Delete profile
      await ctx.db.delete(target._id);
    }

    // Delete any pending invites for this email (case-insensitive)
    const invites = await ctx.db
      .query("adminInvites")
      .withIndex("by_email", (q) => q.eq("email", emailLower))
      .collect();
    // Also check original case
    const invitesOriginal = await ctx.db
      .query("adminInvites")
      .withIndex("by_email", (q) => q.eq("email", email))
      .collect();
    const allInvites = new Map([...invites, ...invitesOriginal].map((i) => [i._id, i]));
    for (const inv of allInvites.values()) {
      await ctx.db.delete(inv._id);
    }

    await logAuditEvent(ctx, {
      actorUserId: userId,
      action: "remove_team_member",
      resourceType: "profile",
      details: { email, hadProfile: !!target },
    });

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

/**
 * Lightweight count-only query for dashboard stats.
 * Avoids transferring full client records just for counts.
 */
export const getClientCounts = query({
  args: {},
  handler: async (ctx): Promise<{ total: number; active: number; expired: number }> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!profile?.isCoach) throw new Error("Not authorized");

    const clients = await ctx.db
      .query("profiles")
      .withIndex("by_isCoach", (q) => q.eq("isCoach", false))
      .take(1500);

    const now = Date.now();
    let active = 0;
    let expired = 0;
    for (const c of clients) {
      if (c.status === "active") {
        if (c.planEndDate && new Date(c.planEndDate).getTime() < now) {
          expired++;
        } else {
          active++;
        }
      } else if (c.status === "expired") {
        expired++;
      }
    }

    return { total: clients.length, active, expired };
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

/** Bulk-delete multiple client profiles and all their data. Coach-only. */
export const bulkDeleteClients = mutation({
  args: {
    profileIds: v.array(v.id("profiles")),
  },
  handler: async (ctx, { profileIds }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const callerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (!callerProfile?.isCoach) throw new Error("Not authorized");

    if (profileIds.length > 50) throw new Error("Cannot delete more than 50 clients at once");

    let deleted = 0;
    for (const profileId of profileIds) {
      const profile = await ctx.db.get(profileId);
      if (!profile || profile.isCoach) continue; // Skip missing or coach profiles

      // Remove from active count if applicable
      if (profile.status === "active") {
        await activeClientsCount.deleteIfExists(ctx, { key: profileId, id: profileId });
      }

      // Schedule cascade-delete for each user
      await ctx.scheduler.runAfter(0, internal.dataRetention.cascadeDeleteUser, {
        userId: profile.userId,
        profileId: profile._id,
      });
      deleted++;
    }

    return { deleted };
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
      email: email ? normalizeEmail(email) : undefined,
      fullName,
      language: "en",
      status: "pending_approval",
      isCoach: false,
      updatedAt: Date.now(),
    });
  },
});

// Called by BetterAuth user.onCreate trigger via scheduler
export const onNewUserCreated = internalMutation({
  args: {
    userId: v.string(),
    email: v.string(),
  },
  handler: async (ctx, { userId, email }) => {
    try {
      // Idempotency: check if a profile already exists in any table
      const existingLegacy = await ctx.db
        .query("profiles")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .unique();
      const existingCoach = await ctx.db
        .query("coachProfiles")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .unique();
      const existingClient = await ctx.db
        .query("clientProfiles")
        .withIndex("by_userId", (q) => q.eq("userId", userId))
        .unique();

      if (existingLegacy || existingCoach || existingClient) {
        console.log(`[onNewUserCreated] Profile already exists for userId=${userId}, skipping`);
        return;
      }

      const normalizedEmail = normalizeEmail(email);
      const now = Date.now();

      // ── Coach flow: check admin invites ──
      const adminInvite = await ctx.db
        .query("adminInvites")
        .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
        .order("desc")
        .first();

      console.log(
        `[onNewUserCreated] email=${email}, adminInvite=${adminInvite ? `found(usedAt=${adminInvite.usedAt}, expires=${adminInvite.expiresAt})` : "not found"}`,
      );

      if (adminInvite && !adminInvite.usedAt && now <= adminInvite.expiresAt) {
        const isOwner = !adminInvite.invitedBy;

        // Write to BOTH tables (dual-write during migration)
        await ctx.db.insert("coachProfiles", {
          userId,
          email: normalizedEmail,
          fullName: adminInvite.fullName,
          language: "en",
          isOwner: isOwner || undefined,
          updatedAt: now,
        });
        await ctx.db.insert("profiles", {
          userId,
          email: normalizedEmail,
          fullName: adminInvite.fullName,
          language: "en",
          status: "active",
          isCoach: true,
          isOwner: isOwner || undefined,
          updatedAt: now,
        });

        await ctx.db.patch(adminInvite._id, { usedAt: now });
        return;
      }

      // ── Client flow: LINK to existing clientProfiles or check pendingSignups ──

      // First check if a clientProfiles record already exists by email (created at signup time)
      const existingClientByEmail = await ctx.db
        .query("clientProfiles")
        .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
        .first();

      if (existingClientByEmail) {
        // LINK the userId to the existing record (the core fix for the lockout bug)
        const basePatch: {
          userId: string;
          updatedAt: number;
          status?: "active";
          planStartDate?: string;
          planEndDate?: string;
          inviteToken?: undefined;
        } = { userId, updatedAt: now };

        // If status is "approved", activate the profile
        if (existingClientByEmail.status === "approved") {
          const planMonths = existingClientByEmail.planTier === "quarterly" ? 3 : 1;
          const endDate = new Date();
          endDate.setMonth(endDate.getMonth() + planMonths);
          basePatch.status = "active";
          basePatch.planStartDate = new Date().toISOString().split("T")[0];
          basePatch.planEndDate = endDate.toISOString().split("T")[0];
        }

        // Clear invite token
        if (existingClientByEmail.inviteToken) {
          basePatch.inviteToken = undefined;
        }

        await ctx.db.patch(existingClientByEmail._id, basePatch);
        console.log(
          `[onNewUserCreated] Linked userId to existing clientProfile for ${normalizedEmail}, status=${basePatch.status ?? existingClientByEmail.status}`,
        );

        if (basePatch.status === "active") {
          await activeClientsCount.insert(ctx, {
            key: existingClientByEmail._id,
            id: existingClientByEmail._id,
          });
        }

        // Also create legacy profile for backward compat during migration
        await ctx.db.insert("profiles", {
          userId,
          email: normalizedEmail,
          fullName: existingClientByEmail.fullName,
          language: existingClientByEmail.language,
          status: basePatch.status ?? existingClientByEmail.status,
          isCoach: false,
          planTier: existingClientByEmail.planTier,
          planStartDate: basePatch.planStartDate ?? existingClientByEmail.planStartDate,
          planEndDate: basePatch.planEndDate ?? existingClientByEmail.planEndDate,
          updatedAt: now,
        });

        return;
      }

      // Check pendingSignups (legacy table, still active until Phase 4 merges it)
      let signup = await ctx.db
        .query("pendingSignups")
        .withIndex("by_email_status", (q) =>
          q.eq("email", normalizedEmail).eq("status", "approved"),
        )
        .order("desc")
        .first();

      if (!signup) {
        signup = await ctx.db
          .query("pendingSignups")
          .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
          .order("desc")
          .first();
      }

      console.log(
        `[onNewUserCreated] signup lookup: found=${!!signup}, status=${signup?.status ?? "N/A"}, email=${signup?.email ?? "N/A"}`,
      );

      if (signup && signup.status === "approved") {
        const planMonths = signup.planTier === "quarterly" ? 3 : 1;
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + planMonths);

        // Dual-write: new table + legacy table
        const clientProfileId = await ctx.db.insert("clientProfiles", {
          userId,
          email: normalizedEmail,
          fullName: signup.fullName,
          language: "en",
          status: "active",
          planTier: signup.planTier ?? "monthly",
          planStartDate: new Date().toISOString().split("T")[0],
          planEndDate: endDate.toISOString().split("T")[0],
          createdAt: now,
          updatedAt: now,
        });
        const profileId = await ctx.db.insert("profiles", {
          userId,
          email: normalizedEmail,
          fullName: signup.fullName,
          language: "en",
          status: "active",
          isCoach: false,
          planTier: signup.planTier,
          planStartDate: new Date().toISOString().split("T")[0],
          planEndDate: endDate.toISOString().split("T")[0],
          updatedAt: now,
        });

        await activeClientsCount.insert(ctx, { key: profileId, id: profileId });

        if (signup.inviteToken) {
          await ctx.db.patch(signup._id, { inviteToken: undefined });
        }
      } else {
        // Fallback: create a basic pending profile in both tables
        console.log(`[onNewUserCreated] Creating pending_approval profile for ${normalizedEmail}`);
        await ctx.db.insert("clientProfiles", {
          userId,
          email: normalizedEmail,
          fullName: "",
          language: "en",
          status: "pending_approval",
          planTier: "monthly",
          createdAt: now,
          updatedAt: now,
        });
        await ctx.db.insert("profiles", {
          userId,
          email: normalizedEmail,
          language: "en",
          status: "pending_approval",
          isCoach: false,
          updatedAt: now,
        });
      }
    } catch (error) {
      console.error(
        `[onNewUserCreated] FAILED for userId=${userId}, email=${email}:`,
        error instanceof Error ? error.message : String(error),
      );
      throw error;
    }
  },
});
