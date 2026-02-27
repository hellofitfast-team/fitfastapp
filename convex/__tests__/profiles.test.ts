import { convexTest } from "convex-test";
import { describe, it, expect } from "vitest";
import { api, internal } from "../_generated/api";
import schema from "../schema";

const modules = import.meta.glob("../**/*.*s");

describe("profiles", () => {
  describe("getMyProfile", () => {
    it("returns null when user is not authenticated", async () => {
      const t = convexTest(schema, modules);
      const result = await t.query(api.profiles.getMyProfile);
      expect(result).toBeNull();
    });

    it("returns null when authenticated user has no profile", async () => {
      const t = convexTest(schema, modules);
      const asUser = t.withIdentity({ subject: "user1" });
      const result = await asUser.query(api.profiles.getMyProfile);
      expect(result).toBeNull();
    });

    it("returns profile for authenticated user", async () => {
      const t = convexTest(schema, modules);
      // Seed a profile directly
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "user1",
          fullName: "Test User",
          email: "test@example.com",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const asUser = t.withIdentity({ subject: "user1" });
      const result = await asUser.query(api.profiles.getMyProfile);

      expect(result).not.toBeNull();
      expect(result!.fullName).toBe("Test User");
      expect(result!.email).toBe("test@example.com");
      expect(result!.language).toBe("en");
      expect(result!.status).toBe("active");
      expect(result!.isCoach).toBe(false);
    });
  });

  describe("updateProfile", () => {
    it("throws when user is not authenticated", async () => {
      const t = convexTest(schema, modules);
      await expect(
        t.mutation(api.profiles.updateProfile, { fullName: "New Name" }),
      ).rejects.toThrow("Not authenticated");
    });

    it("throws when profile does not exist", async () => {
      const t = convexTest(schema, modules);
      const asUser = t.withIdentity({ subject: "user1" });
      await expect(
        asUser.mutation(api.profiles.updateProfile, { fullName: "New Name" }),
      ).rejects.toThrow("Profile not found");
    });

    it("updates fullName on existing profile", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "user1",
          fullName: "Old Name",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const asUser = t.withIdentity({ subject: "user1" });
      await asUser.mutation(api.profiles.updateProfile, {
        fullName: "New Name",
      });

      const updated = await asUser.query(api.profiles.getMyProfile);
      expect(updated!.fullName).toBe("New Name");
    });

    it("updates language to Arabic", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "user1",
          fullName: "Test",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const asUser = t.withIdentity({ subject: "user1" });
      await asUser.mutation(api.profiles.updateProfile, { language: "ar" });

      const updated = await asUser.query(api.profiles.getMyProfile);
      expect(updated!.language).toBe("ar");
    });

    it("updates multiple fields at once", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "user1",
          fullName: "Old",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const asUser = t.withIdentity({ subject: "user1" });
      await asUser.mutation(api.profiles.updateProfile, {
        fullName: "Updated Name",
        phone: "+20123456789",
        notificationReminderTime: "09:00",
      });

      const updated = await asUser.query(api.profiles.getMyProfile);
      expect(updated!.fullName).toBe("Updated Name");
      expect(updated!.phone).toBe("+20123456789");
      expect(updated!.notificationReminderTime).toBe("09:00");
    });
  });

  describe("getProfileByUserId (coach-only)", () => {
    it("throws when caller is not authenticated", async () => {
      const t = convexTest(schema, modules);
      await expect(t.query(api.profiles.getProfileByUserId, { userId: "someone" })).rejects.toThrow(
        "Not authenticated",
      );
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
        asClient.query(api.profiles.getProfileByUserId, { userId: "someone" }),
      ).rejects.toThrow("Not authorized");
    });

    it("returns target profile when caller is coach", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "coach1",
          fullName: "Coach",
          language: "en",
          status: "active",
          isCoach: true,
          updatedAt: Date.now(),
        });
        await ctx.db.insert("profiles", {
          userId: "client1",
          fullName: "Client One",
          language: "ar",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const asCoach = t.withIdentity({ subject: "coach1" });
      const result = await asCoach.query(api.profiles.getProfileByUserId, {
        userId: "client1",
      });

      expect(result).not.toBeNull();
      expect(result!.fullName).toBe("Client One");
      expect(result!.language).toBe("ar");
    });
  });

  describe("getAllClients (coach-only)", () => {
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
      await expect(asClient.query(api.profiles.getAllClients)).rejects.toThrow("Not authorized");
    });

    it("returns only non-coach profiles", async () => {
      const t = convexTest(schema, modules);
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "coach1",
          fullName: "Coach",
          language: "en",
          status: "active",
          isCoach: true,
          updatedAt: Date.now(),
        });
        await ctx.db.insert("profiles", {
          userId: "client1",
          fullName: "Client A",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
        await ctx.db.insert("profiles", {
          userId: "client2",
          fullName: "Client B",
          language: "ar",
          status: "pending_approval",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const asCoach = t.withIdentity({ subject: "coach1" });
      const clients = await asCoach.query(api.profiles.getAllClients);

      expect(clients).toHaveLength(2);
      const names = clients.map((c: any) => c.fullName);
      expect(names).toContain("Client A");
      expect(names).toContain("Client B");
      // Coach should not be in the list
      expect(names).not.toContain("Coach");
    });
  });

  describe("createProfileForNewUser (internal)", () => {
    it("creates a pending profile for a new user", async () => {
      const t = convexTest(schema, modules);
      await t.mutation(internal.profiles.createProfileForNewUser, {
        userId: "newuser1",
        email: "new@example.com",
        fullName: "New User",
      });

      // Verify the profile was created
      const profile = await t.run(async (ctx) => {
        return ctx.db
          .query("profiles")
          .withIndex("by_userId", (q) => q.eq("userId", "newuser1"))
          .unique();
      });

      expect(profile).not.toBeNull();
      expect(profile!.email).toBe("new@example.com");
      expect(profile!.fullName).toBe("New User");
      expect(profile!.language).toBe("en");
      expect(profile!.status).toBe("pending_approval");
      expect(profile!.isCoach).toBe(false);
    });
  });
});
