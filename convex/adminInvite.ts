import { v } from "convex/values";
import { query, internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";

const INVITE_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

/** Validate an invite token (public — used by the setup page). */
export const validateInvite = query({
  args: { token: v.string() },
  handler: async (ctx, { token }) => {
    const invite = await ctx.db
      .query("adminInvites")
      .withIndex("by_token", (q) => q.eq("token", token))
      .unique();

    if (!invite) return { valid: false as const, error: "invalid" as const };
    if (invite.usedAt) return { valid: false as const, error: "used" as const };
    if (Date.now() > invite.expiresAt) return { valid: false as const, error: "expired" as const };

    return {
      valid: true as const,
      email: invite.email,
      fullName: invite.fullName,
    };
  },
});

/** Check if a profile with isOwner exists (to determine if initial setup is needed). */
export const hasOwner = query({
  args: {},
  handler: async (ctx) => {
    const owner = await ctx.db
      .query("profiles")
      .withIndex("by_isCoach", (q) => q.eq("isCoach", true))
      .filter((q) => q.eq(q.field("isOwner"), true))
      .first();
    return !!owner;
  },
});

/** Internal version of hasOwner for use in actions. */
export const hasOwnerInternal = internalQuery({
  args: {},
  handler: async (ctx) => {
    const owner = await ctx.db
      .query("profiles")
      .withIndex("by_isCoach", (q) => q.eq("isCoach", true))
      .filter((q) => q.eq(q.field("isOwner"), true))
      .first();
    return !!owner;
  },
});

/** Check if an admin invite exists for an email (internal — used by profile callback). */
export const getInviteByEmail = internalQuery({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    return ctx.db
      .query("adminInvites")
      .withIndex("by_email", (q) => q.eq("email", email))
      .order("desc")
      .first();
  },
});

// ---------------------------------------------------------------------------
// Mutations
// ---------------------------------------------------------------------------

/** Mark an invite as used (internal — called after account creation). */
export const markInviteUsed = internalMutation({
  args: { token: v.string() },
  handler: async (ctx, { token }) => {
    const invite = await ctx.db
      .query("adminInvites")
      .withIndex("by_token", (q) => q.eq("token", token))
      .unique();
    if (invite) {
      await ctx.db.patch(invite._id, { usedAt: Date.now() });
    }
  },
});

/** Create an invite record (internal — used by actions). */
export const createInviteRecord = internalMutation({
  args: {
    email: v.string(),
    fullName: v.string(),
    token: v.string(),
    invitedBy: v.optional(v.string()),
  },
  handler: async (ctx, { email, fullName, token, invitedBy }) => {
    // Check for existing unused invite
    const existing = await ctx.db
      .query("adminInvites")
      .withIndex("by_email", (q) => q.eq("email", email))
      .order("desc")
      .first();
    if (existing && !existing.usedAt && Date.now() < existing.expiresAt) {
      throw new Error(`An active invite already exists for ${email}`);
    }

    // Check if user already has an account
    const existingAccount = await ctx.runQuery(internal.seed.findAuthAccountByEmail, { email });
    if (existingAccount) {
      throw new Error(`User with email ${email} already has an account`);
    }

    return ctx.db.insert("adminInvites", {
      email,
      fullName,
      token,
      expiresAt: Date.now() + INVITE_EXPIRY_MS,
      invitedBy,
      createdAt: Date.now(),
    });
  },
});
