import { internal } from "./_generated/api";
import { internalMutation } from "./_generated/server";
import { type Id } from "./_generated/dataModel";
import { v } from "convex/values";
import { workflow } from "./workflowManager";
import { DEFAULT_CHECK_IN_FREQUENCY_DAYS } from "./constants";

/** Internal mutation: patches InBody OCR data onto a check-in record. */
export const patchInBodyData = internalMutation({
  args: {
    checkInId: v.id("checkIns"),
    inBodyData: v.object({
      bodyFatPercentage: v.optional(v.number()),
      leanBodyMass: v.optional(v.number()),
      skeletalMuscleMass: v.optional(v.number()),
      bmi: v.optional(v.number()),
      visceralFatLevel: v.optional(v.number()),
      basalMetabolicRate: v.optional(v.number()),
      totalBodyWater: v.optional(v.number()),
    }),
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
    inBodyData: v.optional(
      v.object({
        bodyFatPercentage: v.optional(v.number()),
        leanBodyMass: v.optional(v.number()),
        skeletalMuscleMass: v.optional(v.number()),
        bmi: v.optional(v.number()),
        visceralFatLevel: v.optional(v.number()),
        basalMetabolicRate: v.optional(v.number()),
        totalBodyWater: v.optional(v.number()),
      }),
    ),
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

    // Schedule InBody OCR if photo was uploaded
    if (fields.inBodyStorageId && fields.measurementMethod === "inbody") {
      await ctx.scheduler.runAfter(0, internal.ocrExtraction.extractInBodyData, {
        checkInId,
        storageId: fields.inBodyStorageId,
      });
    }

    return checkInId;
  },
});

/**
 * Durable workflow: check-in submission → parallel AI plan generation → notification.
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
      workoutPlanDuration,
    },
  ): Promise<{
    checkInId: Id<"checkIns">;
    mealPlanId: Id<"mealPlans">;
    workoutPlanId: Id<"workoutPlans">;
  }> => {
    // Check-in record already created by startCheckInWorkflow mutation
    // Use specific durations if provided, otherwise fall back to legacy planDuration
    const effectiveMealDuration = mealPlanDuration ?? planDuration;
    const effectiveWorkoutDuration = workoutPlanDuration ?? planDuration;

    // Steps 1 & 2: Enqueue both AI generations via Workpool (max 5 concurrent)
    const [mealWorkId, workoutWorkId] = await Promise.all([
      step.runMutation(internal.workpoolManager.enqueueMealPlan, {
        userId,
        checkInId,
        language,
        planDuration: effectiveMealDuration,
      }),
      step.runMutation(internal.workpoolManager.enqueueWorkoutPlan, {
        userId,
        checkInId,
        language,
        planDuration: effectiveWorkoutDuration,
      }),
    ]);

    // Steps 4 & 5: Poll workpool until both finish (interleaved for efficiency)
    const MAX_POLL_ATTEMPTS = 80;
    let mealDone = false;
    let workoutDone = false;
    let pollCount = 0;

    while (!mealDone || !workoutDone) {
      pollCount++;
      if (pollCount > MAX_POLL_ATTEMPTS) {
        throw new Error(
          `Plan generation timed out after ${MAX_POLL_ATTEMPTS} poll attempts (meal: ${mealDone ? "done" : "pending"}, workout: ${workoutDone ? "done" : "pending"})`,
        );
      }

      if (!mealDone) {
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

      if (!workoutDone) {
        const workoutStatus = await step.runQuery(
          internal.workpoolManager.getWorkStatus,
          { workId: workoutWorkId },
          // Always delay after first poll — avoid rapid no-delay polling when meal finishes first
          pollCount === 1 ? undefined : { runAfter: 1500 },
        );
        if (workoutStatus === null) {
          throw new Error(`Workout plan workpool entry lost (workId: ${workoutWorkId})`);
        }
        if (workoutStatus.state === "finished") {
          workoutDone = true;
        }
      }
    }

    // Look up generated plans by checkInId (workpool status doesn't include return values)
    const mealPlanId = await step.runQuery(internal.mealPlans.getIdByCheckIn, {
      userId,
      checkInId,
    });
    const workoutPlanId = await step.runQuery(internal.workoutPlans.getIdByCheckIn, {
      userId,
      checkInId,
    });

    if (!mealPlanId || !workoutPlanId) {
      throw new Error(
        `Plans not found after generation (checkInId: ${checkInId}, meal: ${!!mealPlanId}, workout: ${!!workoutPlanId})`,
      );
    }

    // Step 6: Notify user via push (best-effort — plans are already saved)
    try {
      await step.runAction(internal.notifications.sendPlanReadyNotification, {
        userId,
        mealPlanId,
        workoutPlanId,
      });
    } catch (err) {
      console.error(
        `[Workflow] Push notification failed for user ${userId}, continuing to email fallback`,
        err,
      );
    }

    // Step 7: Email fallback — sends only if user has no active push subscription
    try {
      await step.runAction(internal.email.sendPlanReadyEmail, { userId });
    } catch (err) {
      console.error(
        `[Workflow] Email fallback failed for user ${userId}. Plans are saved — user will see them in-app.`,
        err,
      );
    }

    return { checkInId, mealPlanId, workoutPlanId };
  },
});
