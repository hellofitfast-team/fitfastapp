import { ConvexError, v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { activeClientsCount } from "./adminStats";
import type { Id } from "./_generated/dataModel";
import { deleteAuthRecords } from "./helpers";

// ─── Check if a user is a coach ────────────────────────────────────────────

export const checkIsCoach = internalQuery({
  args: { userId: v.string() },
  handler: async (ctx, { userId }): Promise<boolean> => {
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    return profile?.isCoach === true;
  },
});

// ─── Insert a test auth user + profile ──────────────────────────────────────

export const insertTestUser = internalMutation({
  args: {
    email: v.string(),
    hashedPassword: v.string(),
    fullName: v.string(),
    status: v.union(v.literal("active"), v.literal("expired"), v.literal("pending_approval")),
    planTier: v.union(v.literal("monthly"), v.literal("quarterly")),
    planStartDate: v.optional(v.string()),
    planEndDate: v.optional(v.string()),
    language: v.optional(v.union(v.literal("en"), v.literal("ar"))),
  },
  handler: async (ctx, args): Promise<{ profileId: Id<"profiles">; userId: Id<"users"> }> => {
    // Check for existing user
    const existing = await ctx.db
      .query("authAccounts")
      .filter((q) =>
        q.and(
          q.eq(q.field("provider"), "password"),
          q.eq(q.field("providerAccountId"), args.email),
        ),
      )
      .first();
    if (existing) throw new ConvexError(`User ${args.email} already exists`);

    // 1. Create user record
    const userId = await ctx.db.insert("users", { email: args.email });

    // 2. Create auth account
    await ctx.db.insert("authAccounts", {
      userId,
      provider: "password",
      providerAccountId: args.email,
      secret: args.hashedPassword,
    });

    // 3. Create profile
    const profileId = await ctx.db.insert("profiles", {
      userId,
      email: args.email,
      fullName: args.fullName,
      language: args.language ?? "en",
      status: args.status,
      isCoach: false,
      planTier: args.status === "pending_approval" ? undefined : args.planTier,
      planStartDate: args.planStartDate,
      planEndDate: args.planEndDate,
      updatedAt: Date.now(),
    });

    // Maintain active clients counter
    if (args.status === "active") {
      await activeClientsCount.insert(ctx, { key: profileId, id: profileId });
    }

    return { profileId, userId };
  },
});

// ─── Shared test assessment data ─────────────────────────────────────────────

const TEST_ASSESSMENT = {
  goals: "fat_loss",
  currentWeight: 85,
  height: 178,
  age: 28,
  gender: "male" as const,
  activityLevel: "moderately_active" as const,
  experienceLevel: "intermediate" as const,
  exerciseHistory: "2 years of gym training",
  measurements: { chest: 100, waist: 88, hips: 95, arms: 35, thighs: 58 },
  scheduleAvailability: {
    days: ["sunday", "tuesday", "thursday", "saturday"],
    sessionDuration: 60,
    preferredTime: "morning",
  },
  foodPreferences: ["chicken", "rice", "eggs", "fish", "oats"],
  allergies: [] as string[],
  dietaryRestrictions: [] as string[],
  medicalConditions: [] as string[],
  injuries: [] as string[],
  lifestyleHabits: { equipment: "full_gym", mealsPerDay: 4 },
  measurementMethod: "manual" as const,
};

// ─── Seed assessment + plans for "active_with_plans" / "active_with_history" ──

export const seedTestUserData = internalMutation({
  args: {
    userId: v.string(),
    planStartDate: v.string(),
    planEndDate: v.string(),
    includeHistory: v.optional(v.boolean()),
    language: v.optional(v.union(v.literal("en"), v.literal("ar"))),
  },
  handler: async (
    ctx,
    { userId, planStartDate, planEndDate, includeHistory, language },
  ): Promise<void> => {
    const planLanguage = language ?? "en";
    // 1. Create initial assessment
    await ctx.db.insert("initialAssessments", { userId, ...TEST_ASSESSMENT });

    // 2. Get real exercise IDs from the database (collect all — only ~133 exercises)
    const exercises = (await ctx.db.query("exerciseDatabase").collect()).filter(
      (e) => e.isActive !== false,
    );
    if (exercises.length === 0) {
      throw new ConvexError("No active exercises in database — seed exercises first");
    }
    const exerciseMap = new Map(exercises.map((e) => [e.name, e._id]));
    const getExId = (name: string): string => {
      const id = exerciseMap.get(name);
      if (!id) {
        console.warn(`Exercise "${name}" not found in database, falling back to first exercise`);
        return exercises[0]._id;
      }
      return id;
    };

    // 3. Create meal plan (10-day default)
    const mealEndDate = new Date(planStartDate);
    mealEndDate.setDate(mealEndDate.getDate() + 10);

    const makeMeal = (
      name: string,
      type: string,
      cals: number,
      p: number,
      c: number,
      f: number,
      ingredients: string[],
      instructions: string[],
    ) => ({
      name,
      type,
      calories: cals,
      protein: p,
      carbs: c,
      fat: f,
      ingredients,
      instructions,
      alternatives: [
        {
          name: `${name} Alt 1`,
          type,
          calories: cals,
          protein: p,
          carbs: c,
          fat: f,
          ingredients: ["Alternative ingredients"],
          instructions: ["Prepare as preferred"],
        },
        {
          name: `${name} Alt 2`,
          type,
          calories: cals,
          protein: p,
          carbs: c,
          fat: f,
          ingredients: ["Alternative ingredients"],
          instructions: ["Prepare as preferred"],
        },
        {
          name: `${name} Alt 3`,
          type,
          calories: cals,
          protein: p,
          carbs: c,
          fat: f,
          ingredients: ["Alternative ingredients"],
          instructions: ["Prepare as preferred"],
        },
      ],
    });

    const dayMeals = {
      dailyTotals: { calories: 2200, protein: 180, carbs: 220, fat: 70 },
      meals: [
        makeMeal(
          "Scrambled Eggs & Toast",
          "breakfast",
          450,
          30,
          40,
          18,
          ["3 eggs", "2 slices whole wheat toast", "1 tbsp olive oil"],
          ["Scramble eggs in olive oil", "Toast bread", "Serve together"],
        ),
        makeMeal(
          "Greek Yogurt & Nuts",
          "snack",
          250,
          20,
          15,
          12,
          ["200g Greek yogurt", "30g almonds", "1 tbsp honey"],
          ["Mix yogurt with honey", "Top with almonds"],
        ),
        makeMeal(
          "Grilled Chicken & Rice",
          "lunch",
          650,
          50,
          70,
          15,
          ["200g chicken breast", "150g rice", "Mixed vegetables"],
          ["Grill chicken with spices", "Cook rice", "Steam vegetables"],
        ),
        makeMeal(
          "Protein Shake",
          "snack",
          200,
          30,
          15,
          5,
          ["1 scoop whey protein", "250ml milk", "1 banana"],
          ["Blend all ingredients"],
        ),
        makeMeal(
          "Salmon & Sweet Potato",
          "dinner",
          650,
          50,
          80,
          20,
          ["200g salmon fillet", "200g sweet potato", "Broccoli"],
          ["Bake salmon at 200°C for 20 min", "Roast sweet potato", "Steam broccoli"],
        ),
      ],
    };

    // Build 10-day plan reusing the same day template
    const weeklyPlan: Record<string, typeof dayMeals> = {};
    for (let i = 1; i <= 10; i++) {
      weeklyPlan[`day${i}`] = dayMeals;
    }

    const mealPlanId = await ctx.db.insert("mealPlans", {
      userId,
      planData: {
        dailyTargets: { calories: 2200, protein: 180, carbs: 220, fat: 70 },
        weeklyPlan,
      },
      language: planLanguage,
      startDate: planStartDate,
      endDate: formatDate(mealEndDate),
      assessmentVersion: 1,
    });

    // 4. Create workout plan (30-day default)
    const workoutEndDate = new Date(planStartDate);
    workoutEndDate.setDate(workoutEndDate.getDate() + 30);

    const makeExercise = (name: string, sets: number, reps: string, muscles: string[]) => ({
      name,
      exerciseDbId: getExId(name),
      sets,
      reps,
      restBetweenSets: "90s",
      targetMuscles: muscles,
      instructions: [`Perform ${name} with controlled form`, "Breathe out on exertion"],
    });

    const makeWarmup = () => ({
      exercises: [
        {
          name: "Light Treadmill Walk",
          duration: 5,
          instructions: ["5 minutes at moderate pace"],
        },
      ],
    });

    const makeCooldown = () => ({
      exercises: [
        {
          name: "Full Body Stretching",
          duration: 5,
          instructions: ["Hold each stretch for 30 seconds"],
        },
      ],
    });

    const pushDay = {
      workoutName: "Push Day",
      duration: 60,
      targetMuscles: ["chest", "shoulders", "triceps"],
      restDay: false,
      warmup: makeWarmup(),
      exercises: [
        makeExercise("Barbell Bench Press", 4, "8-10", ["chest", "triceps"]),
        makeExercise("Incline Bench Press", 3, "10-12", ["upper chest"]),
        makeExercise("Overhead Press", 3, "8-10", ["shoulders"]),
        makeExercise("Dip", 3, "10-12", ["chest", "triceps"]),
      ],
      cooldown: makeCooldown(),
    };

    const pullDay = {
      workoutName: "Pull Day",
      duration: 60,
      targetMuscles: ["back", "biceps"],
      restDay: false,
      warmup: makeWarmup(),
      exercises: [
        makeExercise("Conventional Deadlift", 4, "6-8", ["back", "hamstrings"]),
        makeExercise("Pull-Up", 3, "8-10", ["back", "biceps"]),
        makeExercise("Barbell Row", 3, "10-12", ["back"]),
        makeExercise("Lat Pulldown", 3, "10-12", ["lats"]),
      ],
      cooldown: makeCooldown(),
    };

    const legDay = {
      workoutName: "Leg Day",
      duration: 65,
      targetMuscles: ["quads", "hamstrings", "glutes"],
      restDay: false,
      warmup: makeWarmup(),
      exercises: [
        makeExercise("Barbell Back Squat", 4, "8-10", ["quads", "glutes"]),
        makeExercise("Romanian Deadlift", 3, "10-12", ["hamstrings"]),
        makeExercise("Leg Press", 3, "12-15", ["quads"]),
        makeExercise("Bulgarian Split Squat", 3, "10-12", ["quads", "glutes"]),
      ],
      cooldown: makeCooldown(),
    };

    const restDay = { workoutName: "Rest Day", restDay: true };

    const workoutPlanId = await ctx.db.insert("workoutPlans", {
      userId,
      planData: {
        splitType: "push_pull_legs",
        splitName: "Push/Pull/Legs Split",
        splitDescription: "Classic 3-day split targeting push, pull, and leg muscle groups",
        weeklyPlan: {
          day1: pushDay,
          day2: pullDay,
          day3: legDay,
          day4: restDay,
          day5: pushDay,
          day6: pullDay,
          day7: legDay,
        },
        progressionNotes: "Increase weight by 2.5kg when hitting top of rep range for all sets",
        safetyTips: [
          "Always warm up thoroughly before lifting",
          "Stop immediately if you feel sharp pain",
          "Maintain neutral spine during deadlifts and squats",
        ],
      },
      language: planLanguage,
      startDate: planStartDate,
      endDate: formatDate(workoutEndDate),
      assessmentVersion: 1,
    });

    // 5. Optionally seed check-in, completions, and ticket for "active_with_history"
    if (includeHistory) {
      const startDate = new Date(planStartDate);

      // Check-in record
      await ctx.db.insert("checkIns", {
        userId,
        weight: 75,
        energyLevel: 7,
        sleepQuality: 8,
        dietaryAdherence: 8,
        workoutPerformance: "Good progress, increased weights on compound lifts",
        measurementMethod: "manual" as const,
        measurements: { chest: 95, waist: 80, hips: 95, arms: 35, thighs: 55 },
        submittedAt: startDate.getTime(),
      });

      // Meal completions — 5 days, 3 meals per day
      for (let day = 0; day < 5; day++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + day);
        const dateStr = formatDate(date);

        // 5 meals per day matches the plan structure (breakfast, snack, lunch, snack, dinner)
        for (let mealIdx = 0; mealIdx < 5; mealIdx++) {
          await ctx.db.insert("mealCompletions", {
            userId,
            mealPlanId,
            date: dateStr,
            mealIndex: mealIdx,
            completed: day < 4 || mealIdx < 4, // Last day: skip dinner for realism
          });
        }
      }

      // Workout completions — 3 sessions on alternating days
      for (let day = 0; day < 3; day++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + day * 2 + 1); // Every other day
        const dateStr = formatDate(date);

        await ctx.db.insert("workoutCompletions", {
          userId,
          workoutPlanId,
          date: dateStr,
          workoutIndex: day,
          completed: true,
        });
      }

      // Support ticket with a client message
      await ctx.db.insert("tickets", {
        userId,
        subject: "Question about my meal plan",
        status: "open" as const,
        messages: [
          {
            sender: "client" as const,
            message:
              "Hi coach, I noticed my lunch calories seem high compared to breakfast. Is this intentional?",
            timestamp: startDate.getTime() + 2 * 24 * 60 * 60 * 1000,
          },
        ],
        updatedAt: startDate.getTime() + 2 * 24 * 60 * 60 * 1000,
      });
    }
  },
});

export function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

// ─── Delete a test user (safety: only @fitfast.test emails) ─────────────────

export const deleteTestUserMutation = internalMutation({
  args: {
    profileId: v.id("profiles"),
    callerUserId: v.string(),
  },
  handler: async (ctx, { profileId, callerUserId }): Promise<void> => {
    // Verify coach
    const callerProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", callerUserId))
      .unique();
    if (!callerProfile?.isCoach) throw new ConvexError("Not authorized");

    const profile = await ctx.db.get(profileId);
    if (!profile) throw new ConvexError("Profile not found");

    // Safety: only allow deleting test users
    if (!profile.email?.endsWith("@fitfast.test")) {
      throw new ConvexError("Can only delete test users (@fitfast.test)");
    }

    // Remove from active count if applicable
    if (profile.status === "active") {
      await activeClientsCount.deleteIfExists(ctx, { key: profileId, id: profileId });
    }

    // Delete all auth records (accounts, sessions, tokens, verifiers, user)
    await deleteAuthRecords(ctx, profile.userId);

    // Delete profile synchronously before scheduling cascade to avoid race condition
    await ctx.db.delete(profile._id);

    // Cascade delete remaining user data (cascade will skip already-deleted profile)
    await ctx.scheduler.runAfter(0, internal.dataRetention.cascadeDeleteUser, {
      userId: profile.userId,
      profileId: profile._id,
    });
  },
});
