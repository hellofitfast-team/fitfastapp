"use node";

import { v } from "convex/values";
import { action, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { getAuthUserId } from "@convex-dev/auth/server";
import crypto from "crypto";

/**
 * Invite a new coach from the admin panel.
 * Creates an invite token and sends a setup link via email.
 */
export const inviteAdmin = action({
  args: {
    email: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, fullName }): Promise<string> => {
    // Verify caller is an authenticated coach
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const profile = await ctx.runQuery(internal.helpers.getProfileInternal, {
      userId,
    });
    if (!profile?.isCoach) throw new Error("Not authorized — coach only");

    const token = crypto.randomBytes(32).toString("hex");

    await ctx.runMutation(internal.adminInvite.createInviteRecord, {
      email,
      fullName,
      token,
      invitedBy: userId,
    });

    // Send invite email with setup link
    const adminUrl = process.env.ADMIN_APP_URL ?? "https://admin.fitfast.app";
    await ctx.runAction(internal.email.sendAdminInviteEmail, {
      email,
      fullName,
      setupLink: `${adminUrl}/en/setup?token=${token}`,
    });

    return `Invitation sent to ${fullName} (${email})`;
  },
});

/**
 * Request a magic setup link for the initial owner admin.
 * Only works when no owner exists yet in the system.
 * Public action — called from the login page UI.
 */
export const requestInitialSetupLink = action({
  args: {
    email: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, fullName }): Promise<string> => {
    // Only allow if no owner exists yet
    const ownerExists = await ctx.runQuery(internal.adminInvite.hasOwnerInternal);
    if (ownerExists) {
      throw new Error("Owner account already exists. Please sign in with your password.");
    }

    // Check if user already has an account
    const existingAccount = await ctx.runQuery(internal.seed.findAuthAccountByEmail, { email });
    if (existingAccount) {
      throw new Error("Account already exists. Please sign in with your password.");
    }

    const token = crypto.randomBytes(32).toString("hex");

    // Create or refresh invite
    try {
      await ctx.runMutation(internal.adminInvite.createInviteRecord, {
        email,
        fullName,
        token,
      });
    } catch {
      // Active invite exists — resend it
      const existingInvite = await ctx.runQuery(internal.adminInvite.getInviteByEmail, { email });
      if (existingInvite && !existingInvite.usedAt) {
        const adminUrl = process.env.ADMIN_APP_URL ?? "https://admin.fitfast.app";
        await ctx.runAction(internal.email.sendAdminInviteEmail, {
          email,
          fullName: existingInvite.fullName,
          setupLink: `${adminUrl}/en/setup?token=${existingInvite.token}`,
        });
        return "Setup link sent — check your email";
      }
      throw new Error("Could not create invite. Please try again.");
    }

    const adminUrl = process.env.ADMIN_APP_URL ?? "https://admin.fitfast.app";
    await ctx.runAction(internal.email.sendAdminInviteEmail, {
      email,
      fullName,
      setupLink: `${adminUrl}/en/setup?token=${token}`,
    });

    return "Setup link sent — check your email";
  },
});

/**
 * Create initial admin invite via CLI (no auth required).
 * Run: npx convex run adminInviteActions:createInitialInvite '{"email":"...","fullName":"..."}'
 */
export const createInitialInvite = internalAction({
  args: {
    email: v.string(),
    fullName: v.string(),
  },
  handler: async (ctx, { email, fullName }): Promise<string> => {
    const token = crypto.randomBytes(32).toString("hex");

    await ctx.runMutation(internal.adminInvite.createInviteRecord, {
      email,
      fullName,
      token,
    });

    // Send invite email
    const adminUrl = process.env.ADMIN_APP_URL ?? "https://admin.fitfast.app";
    await ctx.runAction(internal.email.sendAdminInviteEmail, {
      email,
      fullName,
      setupLink: `${adminUrl}/en/setup?token=${token}`,
    });

    return `Initial admin invite sent to ${email}. Setup link: ${adminUrl}/en/setup?token=${token}`;
  },
});
