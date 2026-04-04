/**
 * One-time migration: normalize all emails to lowercase across tables.
 * Idempotent — safe to run multiple times.
 *
 * Usage: npx convex run migrations/normalizeEmails:normalizeAllEmails
 */
import { internalMutation } from "../_generated/server";
import { normalizeEmail } from "../helpers";

export const normalizeAllEmails = internalMutation({
  args: {},
  handler: async (ctx) => {
    let updated = 0;

    // 1. Normalize profiles emails
    const profiles = await ctx.db.query("profiles").collect();
    for (const profile of profiles) {
      if (profile.email) {
        const normalized = normalizeEmail(profile.email);
        if (normalized !== profile.email) {
          await ctx.db.patch(profile._id, { email: normalized });
          updated++;
        }
      }
    }

    // 2. Normalize pendingSignups emails
    const signups = await ctx.db.query("pendingSignups").collect();
    for (const signup of signups) {
      const normalized = normalizeEmail(signup.email);
      if (normalized !== signup.email) {
        await ctx.db.patch(signup._id, { email: normalized });
        updated++;
      }
    }

    // 3. Normalize adminInvites emails
    const invites = await ctx.db.query("adminInvites").collect();
    for (const invite of invites) {
      const normalized = normalizeEmail(invite.email);
      if (normalized !== invite.email) {
        await ctx.db.patch(invite._id, { email: normalized });
        updated++;
      }
    }

    console.log(`[normalizeEmails] Updated ${updated} records`);
    return { updated };
  },
});
