import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { getAuthUserId } from "./auth";
import { requireCoach } from "./helpers";
import { openTicketsCount } from "./adminStats";
import { rateLimiter } from "./rateLimiter";

export const getMyTickets = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    return ctx.db
      .query("tickets")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

export const getAllTickets = query({
  args: {},
  handler: async (ctx) => {
    await requireCoach(ctx);

    // Capped at 200 most recent tickets to prevent unbounded live subscriptions
    return ctx.db.query("tickets").withIndex("by_updatedAt").order("desc").take(200);
  },
});

export const searchTickets = query({
  args: {
    search: v.string(),
    status: v.optional(
      v.union(v.literal("open"), v.literal("coach_responded"), v.literal("closed")),
    ),
  },
  handler: async (ctx, { search, status }) => {
    await requireCoach(ctx);

    let searchBuilder = ctx.db.query("tickets").withSearchIndex("search_subject", (q) => {
      let sq = q.search("subject", search);
      if (status) sq = sq.eq("status", status);
      return sq;
    });

    return searchBuilder.take(50);
  },
});

export const getTicketById = query({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, { ticketId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const ticket = await ctx.db.get(ticketId);
    if (!ticket) return null;

    // Allow access if owner or coach
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (ticket.userId !== userId && !profile?.isCoach) {
      throw new Error("Not authorized");
    }

    // Get user profile for the ticket
    const ticketUserProfile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", ticket.userId))
      .unique();

    return { ...ticket, userName: ticketUserProfile?.fullName ?? "Unknown" };
  },
});

export const createTicket = mutation({
  args: {
    subject: v.string(),
    category: v.optional(
      v.union(
        v.literal("meal_issue"),
        v.literal("workout_issue"),
        v.literal("technical"),
        v.literal("bug_report"),
        v.literal("other"),
      ),
    ),
    description: v.optional(v.string()),
    screenshotId: v.optional(v.id("_storage")),
    deviceInfo: v.optional(
      v.object({
        browser: v.optional(v.string()),
        os: v.optional(v.string()),
        screenSize: v.optional(v.string()),
        userAgent: v.optional(v.string()),
      }),
    ),
    pageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Rate limit: 10 tickets per day per user
    const { ok, retryAfter } = await rateLimiter.limit(ctx, "createTicket", { key: userId });
    if (!ok) {
      throw new Error(`Too many tickets — try again in ${Math.ceil((retryAfter ?? 0) / 1000)}s`);
    }

    // String length guards — prevent database bloat
    if (args.subject.length > 200) throw new Error("Subject too long (max 200 characters)");
    if (args.description && args.description.length > 3000)
      throw new Error("Description too long (max 3000 characters)");

    const messages = args.description
      ? [{ sender: "client" as const, message: args.description, timestamp: Date.now() }]
      : [];

    const id = await ctx.db.insert("tickets", {
      userId,
      subject: args.subject,
      category: args.category,
      status: "open",
      messages,
      screenshotId: args.screenshotId,
      deviceInfo: args.deviceInfo,
      pageUrl: args.pageUrl,
      updatedAt: Date.now(),
    });
    // Track open ticket count for the admin dashboard
    await openTicketsCount.insert(ctx, { key: id, id });
    return id;
  },
});

export const replyToTicket = mutation({
  args: {
    ticketId: v.id("tickets"),
    message: v.string(),
  },
  handler: async (ctx, { ticketId, message }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    // Rate limit: 20 replies per day per user
    const { ok, retryAfter } = await rateLimiter.limit(ctx, "replyToTicket", { key: userId });
    if (!ok) {
      throw new Error(`Too many replies — try again in ${Math.ceil((retryAfter ?? 0) / 1000)}s`);
    }

    // String length guard — prevent database bloat
    if (message.length > 3000) throw new Error("Message too long (max 3000 characters)");

    const ticket = await ctx.db.get(ticketId);
    if (!ticket) throw new Error("Ticket not found");
    if (ticket.userId !== userId) throw new Error("Not authorized");
    if (ticket.status === "closed") throw new Error("Cannot reply to closed ticket");

    await ctx.db.patch(ticketId, {
      messages: [...ticket.messages, { sender: "client" as const, message, timestamp: Date.now() }],
      updatedAt: Date.now(),
    });
  },
});

export const respondToTicket = mutation({
  args: {
    ticketId: v.id("tickets"),
    message: v.string(),
  },
  handler: async (ctx, { ticketId, message }) => {
    await requireCoach(ctx);

    // String length guard — prevent database bloat
    if (message.length > 3000) throw new Error("Message too long (max 3000 characters)");

    const ticket = await ctx.db.get(ticketId);
    if (!ticket) throw new Error("Ticket not found");

    await ctx.db.patch(ticketId, {
      messages: [...ticket.messages, { sender: "coach" as const, message, timestamp: Date.now() }],
      status: "coach_responded",
      updatedAt: Date.now(),
    });

    // Notify client via email
    await ctx.scheduler.runAfter(0, internal.email.sendTicketReplyEmail, {
      ticketId,
      coachMessage: message,
    });
  },
});

export const closeTicket = mutation({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, { ticketId }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const ticket = await ctx.db.get(ticketId);
    if (!ticket) throw new Error("Ticket not found");

    // Allow owner or coach to close
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
    if (ticket.userId !== userId && !profile?.isCoach) {
      throw new Error("Not authorized");
    }

    await ctx.db.patch(ticketId, { status: "closed", updatedAt: Date.now() });
    // Decrement open ticket count — ticket is no longer open
    await openTicketsCount.deleteIfExists(ctx, { key: ticketId, id: ticketId });
  },
});
