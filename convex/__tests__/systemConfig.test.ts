import { convexTest } from "convex-test";
import { describe, it, expect } from "vitest";
import { api } from "../_generated/api";
import schema from "../schema";

const modules = import.meta.glob("../**/*.*s");

/**
 * Helper to seed a coach profile so coach-only mutations pass auth checks.
 */
async function seedCoach(t: ReturnType<typeof convexTest>) {
  await t.run(async (ctx) => {
    await ctx.db.insert("profiles", {
      userId: "coach1",
      fullName: "Coach",
      email: "coach@test.com",
      language: "en",
      status: "active",
      isCoach: true,
      updatedAt: Date.now(),
    });
  });
}

describe("systemConfig", () => {
  describe("getConfig", () => {
    it("returns null when config key does not exist (public key)", async () => {
      const t = convexTest(schema, modules);
      const result = await t.query(api.systemConfig.getConfig, {
        key: "pricing",
      });
      expect(result).toBeNull();
    });

    it("returns config value for a public key without auth", async () => {
      const t = convexTest(schema, modules);
      // Seed a config entry
      await t.run(async (ctx) => {
        await ctx.db.insert("systemConfig", {
          key: "pricing",
          value: { monthly: 500, quarterly: 1200 },
          updatedAt: Date.now(),
        });
      });

      const result = await t.query(api.systemConfig.getConfig, {
        key: "pricing",
      });
      expect(result).not.toBeNull();
      expect(result!.value).toEqual({ monthly: 500, quarterly: 1200 });
    });

    it("throws for non-public key when unauthenticated", async () => {
      const t = convexTest(schema, modules);
      await expect(
        t.query(api.systemConfig.getConfig, { key: "some_private_key" }),
      ).rejects.toThrow("Not authenticated");
    });

    it("throws for non-public key when caller is not coach", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "client1",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const asClient = t.withIdentity({ subject: "client1" });
      await expect(
        asClient.query(api.systemConfig.getConfig, {
          key: "some_private_key",
        }),
      ).rejects.toThrow("Not authorized");
    });

    it("allows coach to read non-public config key", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      await t.run(async (ctx) => {
        await ctx.db.insert("systemConfig", {
          key: "some_private_key",
          value: "secret_value",
          updatedAt: Date.now(),
        });
      });

      const asCoach = t.withIdentity({ subject: "coach1" });
      const result = await asCoach.query(api.systemConfig.getConfig, {
        key: "some_private_key",
      });
      expect(result!.value).toBe("secret_value");
    });

    it("allows unauthenticated access to all public config keys", async () => {
      const t = convexTest(schema, modules);
      const publicKeys = [
        "pricing",
        "plans",
        "paymentMethods",
        "social_links",
        "check_in_frequency_days",
      ];

      for (const key of publicKeys) {
        // Should NOT throw -- returns null since no config is seeded
        const result = await t.query(api.systemConfig.getConfig, { key });
        expect(result).toBeNull();
      }
    });
  });

  describe("setConfig", () => {
    it("throws when caller is not authenticated", async () => {
      const t = convexTest(schema, modules);
      await expect(
        t.mutation(api.systemConfig.setConfig, {
          key: "test_key",
          value: "test",
        }),
      ).rejects.toThrow("Not authenticated");
    });

    it("throws when caller is not a coach", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "client1",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const asClient = t.withIdentity({ subject: "client1" });
      await expect(
        asClient.mutation(api.systemConfig.setConfig, {
          key: "test_key",
          value: "test",
        }),
      ).rejects.toThrow("Not authorized");
    });

    it("inserts a new config entry", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "brand_name",
        value: "FitFast Egypt",
      });

      const result = await asCoach.query(api.systemConfig.getConfig, {
        key: "brand_name",
      });
      expect(result!.value).toBe("FitFast Egypt");
    });

    it("updates an existing config entry", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });

      // Set initial value
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "brand_name",
        value: "V1",
      });

      // Update to new value
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "brand_name",
        value: "V2",
      });

      const result = await asCoach.query(api.systemConfig.getConfig, {
        key: "brand_name",
      });
      expect(result!.value).toBe("V2");
    });

    it("coerces string to number for check_in_frequency_days", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "check_in_frequency_days",
        value: "7",
      });

      const result = await t.query(api.systemConfig.getConfig, {
        key: "check_in_frequency_days",
      });
      expect(result!.value).toBe(7);
      expect(typeof result!.value).toBe("number");
    });

    it("defaults to fallback for invalid string on check_in_frequency_days", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "check_in_frequency_days",
        value: "not_a_number",
      });

      const result = await t.query(api.systemConfig.getConfig, {
        key: "check_in_frequency_days",
      });
      expect(result!.value).toBe(10);
    });

    it("defaults to fallback for empty string on check_in_frequency_days", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "check_in_frequency_days",
        value: "",
      });

      const result = await t.query(api.systemConfig.getConfig, {
        key: "check_in_frequency_days",
      });
      expect(result!.value).toBe(10);
    });

    it("clamps 0 to 1 for check_in_frequency_days", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "check_in_frequency_days",
        value: 0,
      });

      const result = await t.query(api.systemConfig.getConfig, {
        key: "check_in_frequency_days",
      });
      expect(result!.value).toBe(1);
    });

    it("clamps negative to 1 for check_in_frequency_days", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "check_in_frequency_days",
        value: -5,
      });

      const result = await t.query(api.systemConfig.getConfig, {
        key: "check_in_frequency_days",
      });
      expect(result!.value).toBe(1);
    });

    it("clamps string '0' to 1 for check_in_frequency_days", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "check_in_frequency_days",
        value: "0",
      });

      const result = await t.query(api.systemConfig.getConfig, {
        key: "check_in_frequency_days",
      });
      expect(result!.value).toBe(1);
    });

    it("stores number directly for check_in_frequency_days", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.setConfig, {
        key: "check_in_frequency_days",
        value: 21,
      });

      const result = await t.query(api.systemConfig.getConfig, {
        key: "check_in_frequency_days",
      });
      expect(result!.value).toBe(21);
    });
  });

  describe("getPricing", () => {
    it("returns null when no pricing config exists", async () => {
      const t = convexTest(schema, modules);
      const result = await t.query(api.systemConfig.getPricing);
      expect(result).toBeNull();
    });

    it("returns pricing config when it exists", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("systemConfig", {
          key: "pricing",
          value: { monthly: 500, quarterly: 1200 },
          updatedAt: Date.now(),
        });
      });

      const result = await t.query(api.systemConfig.getPricing);
      expect(result).not.toBeNull();
      expect(result!.key).toBe("pricing");
      expect(result!.value).toEqual({ monthly: 500, quarterly: 1200 });
    });
  });

  describe("getPlans", () => {
    it("returns empty array when no plans config exists", async () => {
      const t = convexTest(schema, modules);
      const result = await t.query(api.systemConfig.getPlans);
      expect(result).toEqual([]);
    });

    it("returns plans when configured", async () => {
      const t = convexTest(schema, modules);
      const plans = [
        {
          id: "monthly",
          name: "Monthly",
          nameAr: "شهري",
          price: 500,
          currency: "EGP",
          duration: "1 month",
          durationAr: "شهر واحد",
          features: ["Meal plan", "Workout plan"],
          featuresAr: ["خطة طعام", "خطة تمرين"],
        },
      ];

      await t.run(async (ctx) => {
        await ctx.db.insert("systemConfig", {
          key: "plans",
          value: plans,
          updatedAt: Date.now(),
        });
      });

      const result = await t.query(api.systemConfig.getPlans);
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe("Monthly");
      expect(result[0].price).toBe(500);
    });
  });

  describe("getPaymentMethods", () => {
    it("returns empty array when no payment methods configured", async () => {
      const t = convexTest(schema, modules);
      const result = await t.query(api.systemConfig.getPaymentMethods);
      expect(result).toEqual([]);
    });

    it("returns payment methods when configured", async () => {
      const t = convexTest(schema, modules);
      const methods = [
        {
          type: "instapay",
          accountName: "FitFast",
          accountNumber: "01234567890",
          instructions: "Send to this number",
        },
      ];

      await t.run(async (ctx) => {
        await ctx.db.insert("systemConfig", {
          key: "paymentMethods",
          value: methods,
          updatedAt: Date.now(),
        });
      });

      const result = await t.query(api.systemConfig.getPaymentMethods);
      expect(result).toHaveLength(1);
      expect(result[0].type).toBe("instapay");
      expect(result[0].accountName).toBe("FitFast");
    });
  });

  describe("getSocialLinks", () => {
    it("returns empty object when no social links configured", async () => {
      const t = convexTest(schema, modules);
      const result = await t.query(api.systemConfig.getSocialLinks);
      expect(result).toEqual({});
    });

    it("returns social links when configured", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("systemConfig", {
          key: "social_links",
          value: {
            instagram: "https://instagram.com/fitfast",
            twitter: "https://twitter.com/fitfast",
          },
          updatedAt: Date.now(),
        });
      });

      const result = await t.query(api.systemConfig.getSocialLinks);
      expect(result).toEqual({
        instagram: "https://instagram.com/fitfast",
        twitter: "https://twitter.com/fitfast",
      });
    });
  });

  describe("updateSocialLinks", () => {
    it("creates social links entry when none exists", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.updateSocialLinks, {
        links: {
          instagram: "https://instagram.com/fitfast",
          tiktok: "https://tiktok.com/@fitfast",
        },
      });

      const result = await t.query(api.systemConfig.getSocialLinks);
      expect(result).toEqual({
        instagram: "https://instagram.com/fitfast",
        tiktok: "https://tiktok.com/@fitfast",
      });
    });

    it("strips empty string values", async () => {
      const t = convexTest(schema, modules);
      await seedCoach(t);

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.systemConfig.updateSocialLinks, {
        links: {
          instagram: "https://instagram.com/fitfast",
          twitter: "",
          tiktok: "   ",
        },
      });

      const result = await t.query(api.systemConfig.getSocialLinks);
      expect(result).toEqual({
        instagram: "https://instagram.com/fitfast",
      });
      expect(result).not.toHaveProperty("twitter");
      expect(result).not.toHaveProperty("tiktok");
    });
  });
});
