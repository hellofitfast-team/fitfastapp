import { v } from "convex/values";
import { query, mutation, internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { requireCoach } from "./helpers";

// ---------------------------------------------------------------------------
// Queries & Mutations (run in Convex runtime — no "use node")
// ---------------------------------------------------------------------------

export const listKnowledgeEntries = query({
  args: {},
  handler: async (ctx) => {
    await requireCoach(ctx);
    return ctx.db.query("coachKnowledge").withIndex("by_createdAt").order("desc").collect();
  },
});

export const addTextEntry = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, { title, content, tags }) => {
    await requireCoach(ctx);

    // String length guards — prevent database bloat
    if (title.length > 500) throw new Error("Title too long (max 500 characters)");
    if (content.length > 50000) throw new Error("Content too long (max 50000 characters)");

    const id = await ctx.db.insert("coachKnowledge", {
      title,
      type: "text",
      content,
      tags,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    // Schedule embedding in background (action lives in knowledgeBaseActions.ts)
    await ctx.scheduler.runAfter(0, internal.knowledgeBaseActions.embedEntry, {
      entryId: id,
    });

    return id;
  },
});

export const updateKnowledgeEntry = mutation({
  args: {
    entryId: v.id("coachKnowledge"),
    title: v.string(),
    content: v.string(),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, { entryId, title, content, tags }) => {
    await requireCoach(ctx);

    // String length guards — prevent database bloat
    if (title.length > 500) throw new Error("Title too long (max 500 characters)");
    if (content.length > 50000) throw new Error("Content too long (max 50000 characters)");

    const entry = await ctx.db.get(entryId);
    if (!entry) throw new Error("Entry not found");

    await ctx.db.patch(entryId, {
      title,
      content,
      tags,
      updatedAt: Date.now(),
    });

    // Re-embed with updated content
    await ctx.scheduler.runAfter(0, internal.knowledgeBaseActions.embedEntry, {
      entryId,
    });
  },
});

export const deleteKnowledgeEntry = mutation({
  args: { entryId: v.id("coachKnowledge") },
  handler: async (ctx, { entryId }) => {
    await requireCoach(ctx);

    const entry = await ctx.db.get(entryId);
    if (!entry) throw new Error("Entry not found");

    // Delete from database
    await ctx.db.delete(entryId);

    // Schedule RAG deletion in background
    await ctx.scheduler.runAfter(0, internal.knowledgeBaseActions.removeFromRag, {
      key: entryId,
    });

    // Clean up storage if PDF
    if (entry.storageId) {
      await ctx.storage.delete(entry.storageId);
    }
  },
});

export const updateKnowledgeContent = internalMutation({
  args: {
    entryId: v.id("coachKnowledge"),
    content: v.string(),
  },
  handler: async (ctx, { entryId, content }) => {
    await ctx.db.patch(entryId, { content, updatedAt: Date.now() });
  },
});

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

export const getEntryInternal = internalQuery({
  args: { entryId: v.id("coachKnowledge") },
  handler: async (ctx, { entryId }) => {
    return ctx.db.get(entryId);
  },
});

export const insertTextEntryInternal = internalMutation({
  args: {
    title: v.string(),
    content: v.string(),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, { title, content, tags }) => {
    const id = await ctx.db.insert("coachKnowledge", {
      title,
      type: "text",
      content,
      tags,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    // Schedule embedding in background
    await ctx.scheduler.runAfter(0, internal.knowledgeBaseActions.embedEntry, {
      entryId: id,
    });

    return id;
  },
});

/** Delete a knowledge entry by ID (internal — no auth check). Schedules RAG cleanup. */
export const deleteEntryInternal = internalMutation({
  args: { entryId: v.id("coachKnowledge") },
  handler: async (ctx, { entryId }) => {
    const entry = await ctx.db.get(entryId);
    if (!entry) return;
    await ctx.db.delete(entryId);
    await ctx.scheduler.runAfter(0, internal.knowledgeBaseActions.removeFromRag, {
      key: entryId,
    });
    if (entry.storageId) {
      await ctx.storage.delete(entry.storageId);
    }
  },
});

/** List all knowledge entry IDs that have content (for bulk re-embedding). */
export const listAllEntryIds = internalQuery({
  args: {},
  handler: async (ctx) => {
    const entries = await ctx.db.query("coachKnowledge").collect();
    return entries.filter((e) => e.content).map((e) => e._id);
  },
});

export const insertPdfEntry = internalMutation({
  args: {
    title: v.string(),
    storageId: v.id("_storage"),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, { title, storageId, tags }) => {
    return ctx.db.insert("coachKnowledge", {
      title,
      type: "pdf",
      storageId,
      tags,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});
