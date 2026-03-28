import { createClient, type GenericCtx, type AuthFunctions } from "@convex-dev/better-auth";
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
import { components, internal } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { betterAuth } from "better-auth/minimal";
import authConfig from "./auth.config";

const clientAppUrl = process.env.CLIENT_APP_URL ?? "https://app.fitfast.app";
const adminAppUrl = process.env.ADMIN_APP_URL ?? "https://admin.fitfast.app";

// authFunctions is required when using triggers — points to the exported trigger handlers
const authFunctions: AuthFunctions = internal.auth;

export const authComponent = createClient<DataModel>(components.betterAuth, {
  authFunctions,
  triggers: {
    user: {
      onCreate: async (ctx: any, doc: any) => {
        // Delegate profile creation — mirrors old afterUserCreatedOrUpdated callback.
        // Uses scheduler so the trigger itself stays lightweight.
        await ctx.scheduler.runAfter(0, internal.profiles.onNewUserCreated, {
          userId: doc._id,
          email: doc.email,
        });
      },
    },
  },
});

// Export trigger handlers — required for authFunctions binding
export const { onCreate, onUpdate, onDelete } = authComponent.triggersApi();

export const createAuth = (ctx: GenericCtx<DataModel>) => {
  return betterAuth({
    trustedOrigins: [
      clientAppUrl,
      adminAppUrl,
      // Dev origins for Vite client and admin apps
      "http://localhost:3010",
      "http://localhost:3011",
    ],
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
      minPasswordLength: 8,
    },
    session: {
      expiresIn: 8 * 60 * 60, // 8 hours — coach re-logs in each morning
      updateAge: 15 * 60, // refresh session expiry every 15 min
    },
    plugins: [
      // crossDomain siteUrl must match the requesting origin for CORS.
      // In dev, CLIENT_APP_URL is not set so we default to localhost.
      crossDomain({
        siteUrl:
          clientAppUrl === "https://app.fitfast.app"
            ? "http://localhost:3010" // Dev fallback — production uses CLIENT_APP_URL env var
            : clientAppUrl,
      }),
      convex({ authConfig }),
    ],
  });
};

/**
 * Compatibility wrapper — drop-in replacement for the old getAuthUserId.
 * Returns the BetterAuth user ID (string) or null if not authenticated.
 * All 30+ Convex files import this, so preserving the interface avoids a massive rewrite.
 */
export async function getAuthUserId(ctx: any): Promise<string | null> {
  const user = await authComponent.safeGetAuthUser(ctx);
  return user?._id ?? null;
}

// Export client API for use with ClientAuthBoundary / auth-aware queries
export const { getAuthUser } = authComponent.clientApi();
