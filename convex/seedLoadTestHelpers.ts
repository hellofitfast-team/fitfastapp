import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

/**
 * Ensure a load test user has an initial assessment so dashboard queries work.
 */
export const ensureAssessment = internalMutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_email", (q) => q.eq("email", email.toLowerCase()))
      .first();

    if (!profile) return { success: false, message: "No profile found" };

    // Check if assessment already exists
    const existing = await ctx.db
      .query("initialAssessments")
      .filter((q) => q.eq(q.field("userId"), profile.userId))
      .first();

    if (existing) return { success: true, message: "Assessment already exists" };

    // Create minimal assessment matching initialAssessments schema
    await ctx.db.insert("initialAssessments", {
      userId: profile.userId,
      goals: "lose_fat,build_muscle",
      gender: "male",
      age: 25 + Math.floor(Math.random() * 15),
      height: 170 + Math.floor(Math.random() * 20),
      currentWeight: 70 + Math.floor(Math.random() * 20),
      activityLevel: "moderately_active",
      experienceLevel: "intermediate",
      allergies: [],
      medicalConditions: [],
      injuries: [],
      foodPreferences: [],
      dietaryRestrictions: [],
      scheduleAvailability: {
        days: ["monday", "tuesday", "thursday", "friday"],
        sessionDuration: 60,
        preferredTime: "morning",
      },
    });

    // Patch profile to active with plan start date
    await ctx.db.patch(profile._id, {
      status: "active",
      planStartDate: new Date().toISOString().split("T")[0],
    });

    return { success: true, message: `Assessment created for ${email}` };
  },
});

/**
 * Delete a load test user and all their related data.
 */
export const deleteLoadTestUser = internalMutation({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    const normalizedEmail = email.toLowerCase();

    // Find profile
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
      .first();

    if (!profile) return { success: false };

    const userId = profile.userId;

    // Delete related data
    const tables = [
      "checkIns",
      "mealPlans",
      "workoutPlans",
      "initialAssessments",
      "exerciseLogs",
      "tickets",
      "inAppNotifications",
      "pushSubscriptions",
    ] as const;

    for (const table of tables) {
      const docs = await ctx.db
        .query(table)
        .filter((q) => q.eq(q.field("userId"), userId))
        .collect();
      for (const doc of docs) {
        await ctx.db.delete(doc._id);
      }
    }

    // Delete pending signups
    const signups = await ctx.db
      .query("pendingSignups")
      .filter((q) => q.eq(q.field("email"), normalizedEmail))
      .collect();
    for (const s of signups) {
      await ctx.db.delete(s._id);
    }

    // Delete profile
    await ctx.db.delete(profile._id);

    return { success: true };
  },
});
