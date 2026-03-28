import { v } from "convex/values";
import { internalQuery, internalMutation } from "./_generated/server";

// TODO: Reimplement with BetterAuth's password change API.
// Old implementation queried authAccounts table directly, which is now
// in BetterAuth's component namespace and not accessible via ctx.db.

export const getPasswordAccount = internalQuery({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    // BetterAuth manages accounts in its component namespace.
    // Password change should use BetterAuth's changePassword API instead.
    void ctx;
    void args;
    return null;
  },
});

export const updateAccountSecret = internalMutation({
  args: {
    accountId: v.string(),
    newSecret: v.string(),
  },
  handler: async (ctx, args) => {
    // No-op — password updates go through BetterAuth's API
    void ctx;
    void args;
  },
});
