import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createAdminInvite = internalMutation({
  args: {
    email: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, fullName }) => {
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
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
      createdAt: Date.now(),
    });

    return { success: true, message: `Admin invite created for ${email}`, inviteId };
  },
});

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
    });

    return { success: true, message: `Approved signup created for ${email}`, signupId };
  },
});

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
