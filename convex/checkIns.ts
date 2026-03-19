import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { getAuthUserId } from "./auth";
import {
  getCheckInFrequencyDays,
  getMealPlanDurationDays,
  getWorkoutPlanDurationDays,
} from "./helpers";
import { DEFAULT_CHECK_IN_FREQUENCY_DAYS } from "./constants";
import { rateLimiter } from "./rateLimiter";
import { workflow } from "./workflowManager";

/** Validate check-in free-text fields to prevent database bloat / token cost inflation */
function validateCheckInStrings(fields: {
  workoutPerformance?: string;
  newInjuries?: string;
  notes?: string;
}) {
  if (fields.workoutPerformance && fields.workoutPerformance.length > 2000)
    throw new Error("Workout performance too long (max 2000 characters)");
  if (fields.newInjuries && fields.newInjuries.length > 1000)
    throw new Error("New injuries too long (max 1000 characters)");
  if (fields.notes && fields.notes.length > 2000)
    throw new Error("Notes too long (max 2000 characters)");
}

/** Validate numeric check-in fields are within sane ranges */
function validateCheckInNumbers(fields: {
  weight?: number;
  energyLevel?: number;
  sleepQuality?: number;
  dietaryAdherence?: number;
}) {
  if (fields.weight !== undefined && (fields.weight < 20 || fields.weight > 500))
    throw new Error("Weight must be between 20 and 500 kg");
  if (fields.energyLevel !== undefined && (fields.energyLevel < 1 || fields.energyLevel > 10))
    throw new Error("Energy level must be between 1 and 10");
  if (fields.sleepQuality !== undefined && (fields.sleepQuality < 1 || fields.sleepQuality > 10))
    throw new Error("Sleep quality must be between 1 and 10");
  if (
    fields.dietaryAdherence !== undefined &&
    (fields.dietaryAdherence < 1 || fields.dietaryAdherence > 10)
  )
    throw new Error("Dietary adherence must be between 1 and 10");
}

/** Shared InBody data validator — reused across check-in mutations and workflow */
export const inBodyDataValidator = v.object({
  bodyFatPercentage: v.optional(v.number()),
  leanBodyMass: v.optional(v.number()),
  skeletalMuscleMass: v.optional(v.number()),
  bmi: v.optional(v.number()),
  visceralFatLevel: v.optional(v.number()),
  basalMetabolicRate: v.optional(v.number()),
  totalBodyWater: v.optional(v.number()),
});

export const getMyCheckIns = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    // Capped at 100 most recent check-ins (bi-weekly = ~52 per year)
    return ctx.db
      .query("checkIns")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .order("desc")
      .take(100);
  },
});

export const getLatestCheckIn = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    return ctx.db
      .query("checkIns")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .order("desc")
      .first();
  },
});

/**
 * Shared lock-status logic used by both the getLockStatus query (UI)
 * and the startCheckInWorkflow mutation (server-side enforcement).
 */
async function checkLockStatus(
  ctx: { db: any },
  userId: string,
): Promise<{
  isLocked: boolean;
  nextCheckInDate: string | null;
  lastCheckInDate?: string;
  frequencyDays: number;
}> {
  const frequencyDays = await getCheckInFrequencyDays(ctx);

  const latestCheckIn = await ctx.db
    .query("checkIns")
    .withIndex("by_userId", (q: any) => q.eq("userId", userId))
    .order("desc")
    .first();

  // Determine the anchor date: last check-in, or if none, the latest plan creation
  let anchorTime: number | null = latestCheckIn?._creationTime ?? null;

  if (!anchorTime) {
    const latestMealPlan = await ctx.db
      .query("mealPlans")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .order("desc")
      .first();
    const latestWorkoutPlan = await ctx.db
      .query("workoutPlans")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .order("desc")
      .first();

    const planTimes = [latestMealPlan?._creationTime, latestWorkoutPlan?._creationTime].filter(
      (t: any): t is number => t != null,
    );
    anchorTime = planTimes.length > 0 ? Math.min(...planTimes) : null;
  }

  if (!anchorTime) {
    const GENERATION_WINDOW_MS = 10 * 60 * 1000;
    const assessment = await ctx.db
      .query("initialAssessments")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .first();
    if (assessment && Date.now() - assessment._creationTime < GENERATION_WINDOW_MS) {
      anchorTime = assessment._creationTime;
    }
  }

  if (!anchorTime) return { isLocked: false, nextCheckInDate: null, frequencyDays };

  const anchorDate = new Date(anchorTime);
  const nextCheckInDate = new Date(anchorDate);
  nextCheckInDate.setDate(nextCheckInDate.getDate() + frequencyDays);

  const isLocked = Date.now() < nextCheckInDate.getTime();

  // Test users (@fitfast.test) bypass the lock — only check when locked to avoid extra query
  if (isLocked) {
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .unique();
    if (profile?.email?.endsWith("@fitfast.test")) {
      return { isLocked: false, nextCheckInDate: null, frequencyDays };
    }
  }

  return {
    isLocked,
    nextCheckInDate: nextCheckInDate.toISOString(),
    lastCheckInDate: anchorDate.toISOString(),
    frequencyDays,
  };
}

export const getLockStatus = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId)
      return {
        isLocked: false,
        nextCheckInDate: null,
        frequencyDays: DEFAULT_CHECK_IN_FREQUENCY_DAYS,
      };

    return checkLockStatus(ctx, userId);
  },
});

/**
 * Legacy public mutation: just saves the check-in (no AI generation).
 * Rate-limited to 3 per day to prevent spam.
 * Kept for backward compatibility — prefer startCheckInWorkflow for new code.
 */
export const submitCheckIn = mutation({
  args: {
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
    cyclePhase: v.optional(
      v.union(
        v.literal("menstrual"),
        v.literal("follicular"),
        v.literal("ovulatory"),
        v.literal("luteal"),
        v.literal("not_tracking"),
      ),
    ),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    validateCheckInStrings(args);
    validateCheckInNumbers(args);

    const { ok, retryAfter } = await rateLimiter.limit(ctx, "submitCheckIn", { key: userId });
    if (!ok) {
      throw new Error(`Too many check-ins — try again in ${Math.ceil((retryAfter ?? 0) / 1000)}s`);
    }

    return ctx.db.insert("checkIns", { userId, submittedAt: Date.now(), ...args });
  },
});

/**
 * New unified entry point: saves check-in + triggers AI plan generation
 * + sends notification — all as a durable, crash-safe workflow.
 *
 * Returns a workflowId that can be used to query progress.
 */
export const startCheckInWorkflow = mutation({
  args: {
    language: v.union(v.literal("en"), v.literal("ar")),
    planDuration: v.optional(v.number()),
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
    cyclePhase: v.optional(
      v.union(
        v.literal("menstrual"),
        v.literal("follicular"),
        v.literal("ovulatory"),
        v.literal("luteal"),
        v.literal("not_tracking"),
      ),
    ),
  },
  returns: v.string(), // WorkflowId
  handler: async (ctx, { language, planDuration, ...checkInFields }): Promise<string> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    validateCheckInStrings(checkInFields);
    validateCheckInNumbers(checkInFields);

    // Guard 0: enforce check-in lock server-side (not just UI)
    const lockStatus = await checkLockStatus(ctx, userId);
    if (lockStatus.isLocked) {
      throw new Error(`Check-in locked until ${lockStatus.nextCheckInDate ?? "unknown"}`);
    }

    // Guard 1: max 3 check-in attempts per day (anti-spam)
    const checkInLimit = await rateLimiter.limit(ctx, "submitCheckIn", { key: userId });
    if (!checkInLimit.ok) {
      throw new Error(
        `Too many check-ins — try again in ${Math.ceil((checkInLimit.retryAfter ?? 0) / 1000)}s`,
      );
    }

    // Guard 2 + Insert: Atomic plan-count check + check-in creation
    // Combined in a single mutation to prevent race conditions where two
    // concurrent requests both pass the plan limit check before either inserts.
    const frequencyDays = lockStatus.frequencyDays;
    const windowStart = Date.now() - frequencyDays * 24 * 60 * 60 * 1000;
    const recentMeals = await ctx.db
      .query("mealPlans")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .filter((q: any) => q.gte(q.field("_creationTime"), windowStart))
      .collect();
    const recentWorkouts = await ctx.db
      .query("workoutPlans")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .filter((q: any) => q.gte(q.field("_creationTime"), windowStart))
      .collect();
    if (Math.max(recentMeals.length, recentWorkouts.length) >= 2) {
      throw new Error("Plan generation limit reached for this cycle");
    }

    // Also guard against duplicate concurrent check-in submissions:
    // If a check-in was already created in the last 30 seconds, reject.
    const recentCheckIns = await ctx.db
      .query("checkIns")
      .withIndex("by_userId", (q: any) => q.eq("userId", userId))
      .order("desc")
      .take(1);
    if (recentCheckIns.length > 0) {
      const lastSubmitted = recentCheckIns[0].submittedAt ?? recentCheckIns[0]._creationTime;
      if (Date.now() - lastSubmitted < 30_000) {
        throw new Error("Check-in already submitted — please wait before trying again");
      }
    }

    // Resolve separate durations for meal and workout plans
    const mealPlanDuration = await getMealPlanDurationDays(ctx);
    const workoutPlanDuration = await getWorkoutPlanDurationDays(ctx);

    // Create check-in record (within same mutation as guards above = atomic)
    const checkInId = await ctx.db.insert("checkIns", {
      userId,
      submittedAt: Date.now(),
      ...checkInFields,
    });

    // Schedule InBody OCR if photo was uploaded
    if (checkInFields.inBodyStorageId && checkInFields.measurementMethod === "inbody") {
      await ctx.scheduler.runAfter(0, internal.ocrExtraction.extractInBodyData, {
        checkInId,
        storageId: checkInFields.inBodyStorageId,
      });
    }

    const workflowId = await workflow.start(ctx, internal.checkInWorkflow.checkInAndGeneratePlans, {
      userId,
      checkInId,
      language,
      mealPlanDuration,
      workoutPlanDuration,
    });

    return workflowId;
  },
});

/** OCR status query — used by review step to reactively show InBody OCR results */
export const getCheckInOcrStatus = query({
  args: { checkInId: v.id("checkIns") },
  handler: async (ctx, { checkInId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;
    const checkIn = await ctx.db.get(checkInId);
    if (!checkIn || checkIn.userId !== userId) return null;
    return { inBodyData: checkIn.inBodyData ?? null };
  },
});
