/**
 * One-time migration: copy existing profiles to coachProfiles + clientProfiles.
 * Idempotent — safe to run multiple times.
 *
 * Usage: npx convex run migrations/splitProfiles:splitAll
 */
import { internalMutation } from "../_generated/server";
import { normalizeEmail } from "../helpers";

export const splitAll = internalMutation({
  args: {},
  handler: async (ctx) => {
    let coachesCreated = 0;
    let clientsCreated = 0;
    let skipped = 0;

    const allProfiles = await ctx.db.query("profiles").collect();

    for (const profile of allProfiles) {
      const email = profile.email ? normalizeEmail(profile.email) : "";

      if (profile.isCoach) {
        // Check if already migrated
        const existing = await ctx.db
          .query("coachProfiles")
          .withIndex("by_userId", (q: any) => q.eq("userId", profile.userId))
          .unique();
        if (existing) {
          skipped++;
          continue;
        }

        await ctx.db.insert("coachProfiles", {
          userId: profile.userId,
          email,
          fullName: profile.fullName ?? "Coach",
          phone: profile.phone,
          isOwner: profile.isOwner,
          language: profile.language,
          updatedAt: profile.updatedAt,
        });
        coachesCreated++;
      } else {
        // Check if already migrated
        const existing = await ctx.db
          .query("clientProfiles")
          .withIndex("by_userId", (q: any) => q.eq("userId", profile.userId))
          .unique();
        if (existing) {
          skipped++;
          continue;
        }

        // Map old status to new status values
        let status:
          | "pending_approval"
          | "signup_pending"
          | "approved"
          | "active"
          | "inactive"
          | "expired" = "active";
        if (profile.status === "pending_approval") status = "pending_approval";
        else if (profile.status === "inactive") status = "inactive";
        else if (profile.status === "expired") status = "expired";

        await ctx.db.insert("clientProfiles", {
          userId: profile.userId,
          email,
          fullName: profile.fullName ?? "",
          phone: profile.phone,
          language: profile.language,
          status,
          planTier: profile.planTier ?? "monthly", // Backfill default
          planStartDate: profile.planStartDate,
          planEndDate: profile.planEndDate,
          notificationReminderTime: profile.notificationReminderTime,
          inactiveSince: profile.inactiveSince,
          createdAt: profile._creationTime,
          updatedAt: profile.updatedAt,
        });
        clientsCreated++;
      }
    }

    console.log(
      `[splitProfiles] Created ${coachesCreated} coaches, ${clientsCreated} clients, skipped ${skipped} (already migrated)`,
    );
    return { coachesCreated, clientsCreated, skipped };
  },
});
