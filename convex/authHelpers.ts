/**
 * Centralized auth helpers for coach/client authorization.
 * Replaces the repeated pattern of: getAuthUserId → query profiles → check isCoach → throw.
 */
import { getAuthUserId } from "./auth";
import type { Doc } from "./_generated/dataModel";

type MutationCtx = {
  db: any;
};

/**
 * Require the caller to be an authenticated coach.
 * Returns the coach profile or throws.
 *
 * During migration: checks coachProfiles first, falls back to profiles.
 */
export async function requireCoach(ctx: MutationCtx): Promise<Doc<"coachProfiles">> {
  const userId = await getAuthUserId(ctx);
  if (!userId) throw new Error("Not authenticated");

  // Try new table first
  const coachProfile = await ctx.db
    .query("coachProfiles")
    .withIndex("by_userId", (q: any) => q.eq("userId", userId))
    .unique();

  if (coachProfile) return coachProfile;

  // Fallback to old table during migration
  const legacyProfile = await ctx.db
    .query("profiles")
    .withIndex("by_userId", (q: any) => q.eq("userId", userId))
    .unique();

  if (legacyProfile?.isCoach) {
    // Map legacy fields to coachProfiles shape for compatibility
    return {
      ...legacyProfile,
      email: legacyProfile.email ?? "",
      fullName: legacyProfile.fullName ?? "",
    } as unknown as Doc<"coachProfiles">;
  }

  throw new Error("Not authorized");
}

/**
 * Require the caller to be an authenticated client.
 * Returns the client profile or throws.
 *
 * During migration: checks clientProfiles first, falls back to profiles.
 */
export async function requireClient(ctx: MutationCtx): Promise<Doc<"clientProfiles">> {
  const userId = await getAuthUserId(ctx);
  if (!userId) throw new Error("Not authenticated");

  // Try new table first
  const clientProfile = await ctx.db
    .query("clientProfiles")
    .withIndex("by_userId", (q: any) => q.eq("userId", userId))
    .unique();

  if (clientProfile) return clientProfile;

  // Fallback to old table during migration
  const legacyProfile = await ctx.db
    .query("profiles")
    .withIndex("by_userId", (q: any) => q.eq("userId", userId))
    .unique();

  if (legacyProfile && !legacyProfile.isCoach) {
    return {
      ...legacyProfile,
      email: legacyProfile.email ?? "",
      fullName: legacyProfile.fullName ?? "",
      planTier: legacyProfile.planTier ?? "monthly",
      createdAt: legacyProfile._creationTime,
    } as unknown as Doc<"clientProfiles">;
  }

  throw new Error("Not authorized");
}

/**
 * Get the authenticated user's ID or throw.
 * Convenience wrapper — same as getAuthUserId but throws instead of returning null.
 */
export async function requireAuth(ctx: MutationCtx): Promise<string> {
  const userId = await getAuthUserId(ctx);
  if (!userId) throw new Error("Not authenticated");
  return userId;
}

/**
 * Require the caller to be an authenticated coach — for use in **actions**.
 * Actions don't have ctx.db, so this uses ctx.runQuery to check the profile.
 * Returns the coachId (userId string).
 */
export async function requireCoachAction(
  ctx: { runQuery: any; auth: any },
  getProfileInternalRef: any,
): Promise<string> {
  const userId = await getAuthUserId(ctx as any);
  if (!userId) throw new Error("Not authenticated");

  const profile = await ctx.runQuery(getProfileInternalRef, { userId });
  if (!profile?.isCoach) throw new Error("Not authorized");

  return userId;
}
