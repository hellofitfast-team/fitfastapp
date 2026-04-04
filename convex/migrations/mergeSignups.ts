/**
 * One-time migration: merge pendingSignups into clientProfiles + signupPayments.
 * Only creates clientProfile records for pendingSignups that don't already have one.
 * Idempotent — safe to run multiple times.
 *
 * Usage: npx convex run migrations/mergeSignups:mergeAll
 */
import { internalMutation } from "../_generated/server";
import { normalizeEmail } from "../helpers";

export const mergeAll = internalMutation({
  args: {},
  handler: async (ctx) => {
    let created = 0;
    let skipped = 0;
    let paymentsMigrated = 0;

    const allSignups = await ctx.db.query("pendingSignups").collect();

    for (const signup of allSignups) {
      const email = normalizeEmail(signup.email);

      // Check if a clientProfile already exists for this email
      const existing = await ctx.db
        .query("clientProfiles")
        .withIndex("by_email", (q: any) => q.eq("email", email))
        .first();

      if (existing) {
        skipped++;

        // Still migrate payment data if not yet done
        const existingPayment = await ctx.db
          .query("signupPayments")
          .withIndex("by_clientProfileId", (q: any) => q.eq("clientProfileId", existing._id))
          .first();

        if (!existingPayment && signup.transferReferenceNumber) {
          await ctx.db.insert("signupPayments", {
            clientProfileId: existing._id,
            transferReferenceNumber: signup.transferReferenceNumber,
            transferAmount: signup.transferAmount,
            paymentScreenshotId: signup.paymentScreenshotId,
            ocrExtractedData: signup.ocrExtractedData,
            rejectionReason: signup.rejectionReason,
            reviewedAt: signup.reviewedAt,
          });
          paymentsMigrated++;
        }
        continue;
      }

      // Map status
      let status: "signup_pending" | "approved" | "active" | "inactive" | "expired" =
        "signup_pending";
      if (signup.status === "approved") status = "approved";
      // Rejected signups don't get a clientProfile

      if (signup.status === "rejected") {
        skipped++;
        continue;
      }

      const now = Date.now();
      const clientProfileId = await ctx.db.insert("clientProfiles", {
        email,
        fullName: signup.fullName,
        phone: signup.phone,
        language: "en",
        status,
        planTier: signup.planTier ?? "monthly",
        inviteToken: signup.inviteToken,
        createdAt: signup._creationTime,
        updatedAt: now,
      });

      // Migrate payment data
      if (signup.transferReferenceNumber) {
        await ctx.db.insert("signupPayments", {
          clientProfileId,
          transferReferenceNumber: signup.transferReferenceNumber,
          transferAmount: signup.transferAmount,
          paymentScreenshotId: signup.paymentScreenshotId,
          ocrExtractedData: signup.ocrExtractedData,
          rejectionReason: signup.rejectionReason,
          reviewedAt: signup.reviewedAt,
        });
        paymentsMigrated++;
      }

      created++;
    }

    console.log(
      `[mergeSignups] Created ${created} clientProfiles, skipped ${skipped}, migrated ${paymentsMigrated} payments`,
    );
    return { created, skipped, paymentsMigrated };
  },
});
