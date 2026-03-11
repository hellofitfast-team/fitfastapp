import { v } from "convex/values";
import { internalQuery, internalMutation, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { Id } from "./_generated/dataModel";
import { DATA_RETENTION_DAYS as RETENTION_DAYS } from "./constants";

// ---------------------------------------------------------------------------
// Find users whose data should be purged (inactive > 90 days)
// ---------------------------------------------------------------------------

export const findExpiredUsers = internalQuery({
  args: {},
  returns: v.array(v.object({ userId: v.string(), profileId: v.id("profiles") })),
  handler: async (ctx): Promise<{ userId: string; profileId: Id<"profiles"> }[]> => {
    const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000;

    // Find profiles that have been inactive/expired for > 90 days
    const inactiveProfiles = await ctx.db
      .query("profiles")
      .withIndex("by_status", (q) => q.eq("status", "inactive"))
      .collect();
    const expiredProfiles = await ctx.db
      .query("profiles")
      .withIndex("by_status", (q) => q.eq("status", "expired"))
      .collect();

    const allInactive = [...inactiveProfiles, ...expiredProfiles];

    return allInactive
      .filter((p) => p.inactiveSince != null && p.inactiveSince < cutoff)
      .map((p) => ({ userId: p.userId, profileId: p._id }));
  },
});

// ---------------------------------------------------------------------------
// Cascade-delete all data for a single user
// ---------------------------------------------------------------------------

export const cascadeDeleteUser = internalMutation({
  args: { userId: v.string(), profileId: v.id("profiles") },
  handler: async (ctx, { userId, profileId }) => {
    // Helper: collect and delete all docs matching a userId index
    // Some tables use "by_userId", others use compound indexes like "by_userId_date"
    async function deleteByIndex(table: string, indexName: string) {
      const docs = await (ctx.db as any)
        .query(table)
        .withIndex(indexName, (q: any) => q.eq("userId", userId))
        .collect();
      for (const doc of docs) {
        await ctx.db.delete(doc._id);
      }
    }

    // Delete in dependency order (use correct index names from schema)
    await deleteByIndex("dailyReflections", "by_userId_date");
    await deleteByIndex("mealCompletions", "by_userId_date");
    await deleteByIndex("workoutCompletions", "by_userId_date");
    await deleteByIndex("exerciseLogs", "by_userId_date");
    await deleteByIndex("mealPlans", "by_userId");
    await deleteByIndex("workoutPlans", "by_userId");
    await deleteByIndex("checkIns", "by_userId");
    await deleteByIndex("initialAssessments", "by_userId");
    await deleteByIndex("assessmentHistory", "by_userId");
    await deleteByIndex("tickets", "by_userId");
    await deleteByIndex("pushSubscriptions", "by_userId");

    // Delete file metadata + storage objects
    const fileMeta = await ctx.db
      .query("fileMetadata")
      .withIndex("by_uploadedBy", (q) => q.eq("uploadedBy", userId))
      .collect();
    for (const fm of fileMeta) {
      try {
        await ctx.storage.delete(fm.storageId);
      } catch {
        // Storage object may already be deleted
      }
      await ctx.db.delete(fm._id);
    }

    // Finally, delete the profile
    await ctx.db.delete(profileId);
  },
});

// ---------------------------------------------------------------------------
// Orchestrator action — finds expired users and deletes them in parallel batches
// ---------------------------------------------------------------------------

export const runRetentionCleanup = internalAction({
  args: {},
  handler: async (ctx): Promise<void> => {
    const expiredUsers: { userId: string; profileId: Id<"profiles"> }[] = await ctx.runQuery(
      internal.dataRetention.findExpiredUsers,
      {},
    );

    if (expiredUsers.length === 0) return;

    const BATCH_SIZE = 5;
    const failures: string[] = [];

    // Process in parallel batches to avoid overwhelming Convex
    for (let i = 0; i < expiredUsers.length; i += BATCH_SIZE) {
      const batch = expiredUsers.slice(i, i + BATCH_SIZE);
      const results = await Promise.allSettled(
        batch.map(({ userId, profileId }) =>
          ctx.runMutation(internal.dataRetention.cascadeDeleteUser, {
            userId,
            profileId,
          }),
        ),
      );

      for (let j = 0; j < results.length; j++) {
        const result = results[j];
        if (result.status === "rejected") {
          const rawMsg =
            result.reason instanceof Error ? result.reason.message : String(result.reason);
          const msg = rawMsg.replace(batch[j].userId, "[REDACTED]");
          failures.push(`profile:${batch[j].profileId}: ${msg}`);
        }
      }
    }

    if (failures.length > 0) {
      console.error(
        `[DataRetention:runRetentionCleanup] ${failures.length}/${expiredUsers.length} deletions failed`,
        { failures },
      );
    }
  },
});
