import { convexTest } from "convex-test";
import { describe, it, expect, beforeEach } from "vitest";
import { api } from "../_generated/api";
import schema from "../schema";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — importing the compiled component schema directly
import aggregateSchema from "../../node_modules/@convex-dev/aggregate/dist/component/schema.js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — importing the compiled component schema directly
import rateLimiterSchema from "../../node_modules/@convex-dev/rate-limiter/dist/component/schema.js";

const modules = import.meta.glob("../**/*.*s");
const aggregateModules = import.meta.glob(
  "../../node_modules/@convex-dev/aggregate/dist/component/**/*.js",
);
const rateLimiterModules = import.meta.glob(
  "../../node_modules/@convex-dev/rate-limiter/dist/component/**/*.js",
);

/**
 * Create a test instance with the required aggregate and rate limiter components registered.
 * createTicket/replyToTicket use rateLimiter, createTicket/closeTicket use openTicketsCount.
 */
function createTestWithComponents() {
  const t = convexTest(schema, modules);
  t.registerComponent("openTickets", aggregateSchema, aggregateModules);
  t.registerComponent("rateLimiter", rateLimiterSchema, rateLimiterModules);
  return t;
}

/**
 * Helper: seed a client profile and optionally a coach profile.
 * Returns the userId strings for each.
 */
async function seedProfiles(t: ReturnType<typeof convexTest>, options?: { withCoach?: boolean }) {
  await t.run(async (ctx) => {
    await ctx.db.insert("profiles", {
      userId: "client1",
      fullName: "Test Client",
      email: "client@test.com",
      language: "en",
      status: "active",
      isCoach: false,
      updatedAt: Date.now(),
    });
    if (options?.withCoach) {
      await ctx.db.insert("profiles", {
        userId: "coach1",
        fullName: "Test Coach",
        email: "coach@test.com",
        language: "en",
        status: "active",
        isCoach: true,
        updatedAt: Date.now(),
      });
    }
  });
}

describe("tickets", () => {
  describe("getMyTickets", () => {
    it("returns empty array when user is not authenticated", async () => {
      const t = createTestWithComponents();
      const result = await t.query(api.tickets.getMyTickets);
      expect(result).toEqual([]);
    });

    it("returns empty array when user has no tickets", async () => {
      const t = createTestWithComponents();
      const asUser = t.withIdentity({ subject: "client1" });
      const result = await asUser.query(api.tickets.getMyTickets);
      expect(result).toEqual([]);
    });

    it("returns only the authenticated user's tickets", async () => {
      const t = createTestWithComponents();
      // Seed tickets for two different users
      await t.run(async (ctx) => {
        await ctx.db.insert("tickets", {
          userId: "client1",
          subject: "My Ticket",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
        await ctx.db.insert("tickets", {
          userId: "otheruser",
          subject: "Other Ticket",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asClient = t.withIdentity({ subject: "client1" });
      const tickets = await asClient.query(api.tickets.getMyTickets);

      expect(tickets).toHaveLength(1);
      expect(tickets[0].subject).toBe("My Ticket");
    });
  });

  describe("createTicket", () => {
    it("throws when user is not authenticated", async () => {
      const t = createTestWithComponents();
      await expect(t.mutation(api.tickets.createTicket, { subject: "Help" })).rejects.toThrow(
        "Not authenticated",
      );
    });

    it("creates a ticket with correct initial status and subject", async () => {
      const t = createTestWithComponents();
      const asClient = t.withIdentity({ subject: "client1" });

      const ticketId = await asClient.mutation(api.tickets.createTicket, {
        subject: "Need help with meal plan",
        category: "meal_issue",
        description: "My meal plan doesn't show up",
      });

      expect(ticketId).toBeDefined();

      // Read the ticket directly from DB to verify
      const ticket = await t.run(async (ctx) => {
        return ctx.db.get(ticketId);
      });

      expect(ticket).not.toBeNull();
      expect(ticket!.subject).toBe("Need help with meal plan");
      expect(ticket!.category).toBe("meal_issue");
      expect(ticket!.status).toBe("open");
      expect(ticket!.userId).toBe("client1");
      // Description is added as first message
      expect(ticket!.messages).toHaveLength(1);
      expect(ticket!.messages[0].sender).toBe("client");
      expect(ticket!.messages[0].message).toBe("My meal plan doesn't show up");
    });

    it("creates a ticket with no description (empty messages)", async () => {
      const t = createTestWithComponents();
      const asClient = t.withIdentity({ subject: "client1" });

      const ticketId = await asClient.mutation(api.tickets.createTicket, {
        subject: "Quick question",
      });

      const ticket = await t.run(async (ctx) => ctx.db.get(ticketId));
      expect(ticket!.messages).toHaveLength(0);
    });

    it("creates a ticket with device info and page URL", async () => {
      const t = createTestWithComponents();
      const asClient = t.withIdentity({ subject: "client1" });

      const ticketId = await asClient.mutation(api.tickets.createTicket, {
        subject: "Bug report",
        category: "bug_report",
        description: "Something broke",
        deviceInfo: {
          browser: "Chrome 120",
          os: "iOS 17",
          screenSize: "390x844",
        },
        pageUrl: "/dashboard/meal-plan",
      });

      const ticket = await t.run(async (ctx) => ctx.db.get(ticketId));
      expect(ticket!.deviceInfo?.browser).toBe("Chrome 120");
      expect(ticket!.deviceInfo?.os).toBe("iOS 17");
      expect(ticket!.pageUrl).toBe("/dashboard/meal-plan");
    });
  });

  describe("getTicketById", () => {
    it("throws when user is not authenticated", async () => {
      const t = createTestWithComponents();
      // We need a valid ticket ID, so seed one first
      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Test",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      await expect(t.query(api.tickets.getTicketById, { ticketId })).rejects.toThrow(
        "Not authenticated",
      );
    });

    it("returns ticket with userName for the owner", async () => {
      const t = createTestWithComponents();
      await seedProfiles(t);

      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Test Ticket",
          status: "open",
          messages: [
            {
              sender: "client" as const,
              message: "Hello",
              timestamp: Date.now(),
            },
          ],
          updatedAt: Date.now(),
        });
      });

      const asClient = t.withIdentity({ subject: "client1" });
      const ticket = await asClient.query(api.tickets.getTicketById, {
        ticketId,
      });

      expect(ticket).not.toBeNull();
      expect(ticket!.subject).toBe("Test Ticket");
      expect(ticket!.userName).toBe("Test Client");
      expect(ticket!.messages).toHaveLength(1);
    });

    it("allows coach to view any ticket", async () => {
      const t = createTestWithComponents();
      await seedProfiles(t, { withCoach: true });

      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Client Ticket",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asCoach = t.withIdentity({ subject: "coach1" });
      const ticket = await asCoach.query(api.tickets.getTicketById, {
        ticketId,
      });

      expect(ticket).not.toBeNull();
      expect(ticket!.subject).toBe("Client Ticket");
    });

    it("prevents non-owner non-coach from viewing ticket", async () => {
      const t = createTestWithComponents();
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "client2",
          fullName: "Other Client",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Private Ticket",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asOtherClient = t.withIdentity({ subject: "client2" });
      await expect(asOtherClient.query(api.tickets.getTicketById, { ticketId })).rejects.toThrow(
        "Not authorized",
      );
    });

    it("returns null for non-existent ticket", async () => {
      const t = createTestWithComponents();
      await seedProfiles(t);

      // Create then delete to get a valid-format ID that doesn't exist
      const ticketId = await t.run(async (ctx) => {
        const id = await ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Temp",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
        await ctx.db.delete(id);
        return id;
      });

      const asClient = t.withIdentity({ subject: "client1" });
      const result = await asClient.query(api.tickets.getTicketById, {
        ticketId,
      });
      expect(result).toBeNull();
    });
  });

  describe("replyToTicket", () => {
    it("throws when user is not authenticated", async () => {
      const t = createTestWithComponents();
      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Test",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      await expect(
        t.mutation(api.tickets.replyToTicket, {
          ticketId,
          message: "Reply",
        }),
      ).rejects.toThrow("Not authenticated");
    });

    it("appends a client message to the ticket", async () => {
      const t = createTestWithComponents();
      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Test",
          status: "open",
          messages: [
            {
              sender: "client" as const,
              message: "First message",
              timestamp: Date.now(),
            },
          ],
          updatedAt: Date.now(),
        });
      });

      const asClient = t.withIdentity({ subject: "client1" });
      await asClient.mutation(api.tickets.replyToTicket, {
        ticketId,
        message: "Follow-up question",
      });

      const ticket = await t.run(async (ctx) => ctx.db.get(ticketId));
      expect(ticket!.messages).toHaveLength(2);
      expect(ticket!.messages[1].sender).toBe("client");
      expect(ticket!.messages[1].message).toBe("Follow-up question");
    });

    it("throws when ticket is closed", async () => {
      const t = createTestWithComponents();
      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Closed",
          status: "closed",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asClient = t.withIdentity({ subject: "client1" });
      await expect(
        asClient.mutation(api.tickets.replyToTicket, {
          ticketId,
          message: "Can't reply",
        }),
      ).rejects.toThrow("Cannot reply to closed ticket");
    });

    it("throws when user is not the ticket owner", async () => {
      const t = createTestWithComponents();
      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Not mine",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asOther = t.withIdentity({ subject: "client2" });
      await expect(
        asOther.mutation(api.tickets.replyToTicket, {
          ticketId,
          message: "Sneaky reply",
        }),
      ).rejects.toThrow("Not authorized");
    });
  });

  describe("closeTicket", () => {
    it("allows owner to close their ticket", async () => {
      const t = createTestWithComponents();
      await seedProfiles(t);

      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "To close",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asClient = t.withIdentity({ subject: "client1" });
      await asClient.mutation(api.tickets.closeTicket, { ticketId });

      const ticket = await t.run(async (ctx) => ctx.db.get(ticketId));
      expect(ticket!.status).toBe("closed");
    });

    it("allows coach to close any ticket", async () => {
      const t = createTestWithComponents();
      await seedProfiles(t, { withCoach: true });

      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Coach closes",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asCoach = t.withIdentity({ subject: "coach1" });
      await asCoach.mutation(api.tickets.closeTicket, { ticketId });

      const ticket = await t.run(async (ctx) => ctx.db.get(ticketId));
      expect(ticket!.status).toBe("closed");
    });

    it("throws when non-owner non-coach tries to close", async () => {
      const t = createTestWithComponents();
      await t.run(async (ctx) => {
        await ctx.db.insert("profiles", {
          userId: "client2",
          fullName: "Other",
          language: "en",
          status: "active",
          isCoach: false,
          updatedAt: Date.now(),
        });
      });

      const ticketId = await t.run(async (ctx) => {
        return ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Protected",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asOther = t.withIdentity({ subject: "client2" });
      await expect(asOther.mutation(api.tickets.closeTicket, { ticketId })).rejects.toThrow(
        "Not authorized",
      );
    });
  });

  describe("getAllTickets (coach-only)", () => {
    it("throws when caller is not a coach", async () => {
      const t = createTestWithComponents();
      await seedProfiles(t);

      const asClient = t.withIdentity({ subject: "client1" });
      await expect(asClient.query(api.tickets.getAllTickets)).rejects.toThrow("Not authorized");
    });

    it("returns all tickets for coach", async () => {
      const t = createTestWithComponents();
      await seedProfiles(t, { withCoach: true });

      await t.run(async (ctx) => {
        await ctx.db.insert("tickets", {
          userId: "client1",
          subject: "Ticket A",
          status: "open",
          messages: [],
          updatedAt: Date.now(),
        });
        await ctx.db.insert("tickets", {
          userId: "someoneelse",
          subject: "Ticket B",
          status: "closed",
          messages: [],
          updatedAt: Date.now(),
        });
      });

      const asCoach = t.withIdentity({ subject: "coach1" });
      const tickets = await asCoach.query(api.tickets.getAllTickets);

      expect(tickets).toHaveLength(2);
    });
  });
});
