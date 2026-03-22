"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { Scrypt } from "lucia";
import { getAuthUserId } from "@convex-dev/auth/server";

/**
 * Invite a new admin/coach user from the admin panel.
 * Requires the caller to be an authenticated coach.
 * Creates the user account, sets isCoach=true, and sends credentials via email.
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

    // Check if user already exists
    const existing = await ctx.runQuery(internal.seed.findAuthAccountByEmail, { email });
    if (existing) {
      throw new Error(`User with email ${email} already exists`);
    }

    // Generate a random temporary password
    const tempPassword = generateTempPassword();
    const hashedPassword = await new Scrypt().hash(tempPassword);

    // Create the user account with isCoach=true
    await ctx.runMutation(internal.seed.insertAuthUser, {
      email,
      hashedPassword,
      fullName,
      isCoach: true,
    });

    // Send credentials email
    const adminUrl = process.env.ADMIN_APP_URL ?? "https://admin.fitfast.app";
    await ctx.runAction(internal.email.sendAdminCredentialsEmail, {
      email,
      fullName,
      password: tempPassword,
      adminUrl,
    });

    return `Invited ${fullName} (${email}) — credentials sent via email.`;
  },
});

/** Generate a random 12-character password with mixed case, digits, and symbols. */
function generateTempPassword(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%";
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => chars[b % chars.length]).join("");
}
