import { internal } from "./_generated/api";
import { internalMutation } from "./_generated/server";
import { type Id } from "./_generated/dataModel";
import { v } from "convex/values";
import { workflow } from "./workflowManager";
import { DEFAULT_CHECK_IN_FREQUENCY_DAYS } from "./constants";
import { inBodyDataValidator } from "./checkIns";

/** Internal mutation: patches InBody OCR data onto a check-in record. */
export const patchInBodyData = internalMutation({
  args: {
    checkInId: v.id("checkIns"),
    inBodyData: inBodyDataValidator,
  },
  handler: async (ctx, { checkInId, inBodyData }) => {
    const checkIn = await ctx.db.get(checkInId);
    if (!checkIn) {
      console.warn("[patchInBodyData] Check-in record no longer exists", { checkInId });
      return;
    }
    await ctx.db.patch(checkInId, { inBodyData });
  },
});

/**
 * Internal mutation: writes the check-in record.
 * Kept here (co-located with the workflow) so checkIns.ts doesn't need to
 * import from this file, breaking the TS7022 circular type inference chain.
 */
export const submitCheckInInternal = internalMutation({
  args: {
    userId: v.string(),
    weight: v.optional(v.number()),
    measurementMethod: v.optional(v.union(v.literal("manual"), v.literal("inbody"))),
    measurements: v.optional(
      v.object({
        chest: v.optional(v.number()),
        waist: v.optional(v.number()),
        hips: v.optional(v.number()),
        arms: v.optional(v.number()),
        thighs: v.optional(v.number()),
      }),
    ),
    inBodyStorageId: v.optional(v.id("_storage")),
    inBodyData: v.optional(inBodyDataValidator),
    workoutPerformance: v.optional(v.string()),
    energyLevel: v.optional(v.number()),
    sleepQuality: v.optional(v.number()),
    dietaryAdherence: v.optional(v.number()),
    newInjuries: v.optional(v.string()),
    progressPhotoIds: v.optional(v.array(v.id("_storage"))),
    progressPhotoFront: v.optional(v.id("_storage")),
    progressPhotoBack: v.optional(v.id("_storage")),
    progressPhotoSide: v.optional(v.id("_storage")),
    notes: v.optional(v.string()),
  },
  returns: v.id("checkIns"),
  handler: async (ctx, { userId, ...fields }) => {
    const checkInId = await ctx.db.insert("checkIns", {
      userId,
      submittedAt: Date.now(),
      ...fields,
    });

    return checkInId;
  },
});

/**
 * Durable workflow: check-in submission → meal plan generation → notification.
 *
 * Workout plan generation is DECOUPLED from check-ins — it runs on its own
 * renewal schedule via a daily cron job (see workoutPlanRenewal.ts).
 * Check-in data is accumulated and used when the next workout plan is generated.
 *
 * AI generation is routed through the Workpool (maxParallelism: 5) so that
 * even if 50 clients check in simultaneously, only 5 OpenRouter calls run
 * concurrently. The rest queue and execute as slots free up.
 *
 * Start from a mutation via:
 *   await workflow.start(ctx, internal.checkInWorkflow.checkInAndGeneratePlans, args)
 */
export const checkInAndGeneratePlans = workflow.define({
  args: {
    userId: v.string(),
    checkInId: v.id("checkIns"),
    language: v.union(v.literal("en"), v.literal("ar")),
    planDuration: v.optional(v.number()),
    mealPlanDuration: v.optional(v.number()),
    // Kept for backward compat but no longer used — workout plans renew via cron
    workoutPlanDuration: v.optional(v.number()),
  },
  handler: async (
    step,
    {
      userId,
      checkInId,
      language,
      planDuration = DEFAULT_CHECK_IN_FREQUENCY_DAYS,
      mealPlanDuration,
    },
  ): Promise<{
    checkInId: Id<"checkIns">;
    mealPlanId: Id<"mealPlans">;
  }> => {
    // Use specific meal duration if provided, otherwise fall back to legacy planDuration
    const effectiveMealDuration = mealPlanDuration ?? planDuration;

    // Step 1: Enqueue meal plan generation via Workpool
    const mealWorkId = await step.runMutation(internal.workpoolManager.enqueueMealPlan, {
      userId,
      checkInId,
      language,
      planDuration: effectiveMealDuration,
    });

    // Step 2: Poll workpool until meal plan finishes
    // 180 polls × 1.5s delay = ~4.5 min — covers AI timeout (4 min) + buffer
    const MAX_POLL_ATTEMPTS = 180;
    let mealDone = false;
    let pollCount = 0;

    while (!mealDone) {
      pollCount++;
      if (pollCount > MAX_POLL_ATTEMPTS) {
        console.error(
          `[Workflow] Meal plan generation timed out (checkInId: ${checkInId}, userId: ${userId}, workId: ${mealWorkId})`,
        );
        throw new Error(`Meal plan generation timed out after ${MAX_POLL_ATTEMPTS} poll attempts`);
      }

      const mealStatus = await step.runQuery(
        internal.workpoolManager.getWorkStatus,
        { workId: mealWorkId },
        pollCount === 1 ? undefined : { runAfter: 1500 },
      );
      if (mealStatus === null) {
        throw new Error(`Meal plan workpool entry lost (workId: ${mealWorkId})`);
      }
      if (mealStatus.state === "finished") {
        mealDone = true;
      }
    }

    // Step 3: Look up generated meal plan by checkInId
    const mealPlanId = await step.runQuery(internal.mealPlans.getIdByCheckIn, {
      userId,
      checkInId,
    });

    if (!mealPlanId) {
      throw new Error(`Meal plan not found after generation (checkInId: ${checkInId})`);
    }

    // Step 4: Notify user via push with email fallback (best-effort)
    try {
      await step.runAction(internal.notifications.sendPlanReadyNotification, {
        userId,
        mealPlanId,
      });
    } catch (err) {
      console.error(
        `[Workflow] Notification failed for user ${userId}. Plan is saved — user will see it in-app.`,
        err,
      );
    }

    return { checkInId, mealPlanId };
  },
});
