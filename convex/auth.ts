import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { internal } from "./_generated/api";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password],
  callbacks: {
    async afterUserCreatedOrUpdated(ctx, { userId, existingUserId }) {
      // Only run for brand-new users (not updates)
      if (existingUserId) return;

      // Look up the user's email from authAccounts
      const accounts = await ctx.db
        .query("authAccounts")
        .filter((q) => q.eq(q.field("userId"), userId))
        .collect();
      const email = accounts[0]?.providerAccountId; // Password provider uses email as account ID
      if (!email) return;

      // Delegate profile creation to an internal mutation that has full schema types
      await ctx.scheduler.runAfter(0, internal.profiles.onNewUserCreated, {
        userId,
        email,
      });
    },
  },
});

// Re-export getAuthUserId so existing convex functions keep working
// with `import { getAuthUserId } from "./auth"`
export { getAuthUserId } from "@convex-dev/auth/server";
