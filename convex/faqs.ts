import { v } from "convex/values";
import {
  query,
  mutation,
  internalMutation,
  internalAction,
  internalQuery,
} from "./_generated/server";
import { internal } from "./_generated/api";
import { requireCoach } from "./authHelpers";

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

/** Get all FAQs ordered by displayOrder (bilingual docs) */
export const getFAQs = query({
  args: { language: v.union(v.literal("en"), v.literal("ar")) },
  handler: async (ctx, { language }) => {
    const faqs = await ctx.db.query("faqs").withIndex("by_displayOrder").collect();
    // Return localized view for backwards compatibility with client
    return faqs.map((faq) => ({
      _id: faq._id,
      _creationTime: faq._creationTime,
      question: language === "ar" ? (faq.questionAr ?? faq.questionEn) : faq.questionEn,
      answer: language === "ar" ? (faq.answerAr ?? faq.answerEn) : faq.answerEn,
      questionEn: faq.questionEn,
      questionAr: faq.questionAr,
      answerEn: faq.answerEn,
      answerAr: faq.answerAr,
      displayOrder: faq.displayOrder,
      translationStatus: faq.translationStatus,
      updatedAt: faq.updatedAt,
    }));
  },
});

/** Internal query for cache layer */
export const getFAQsInternal = internalQuery({
  args: { language: v.union(v.literal("en"), v.literal("ar")) },
  handler: async (ctx, { language }) => {
    const faqs = await ctx.db.query("faqs").withIndex("by_displayOrder").collect();
    return faqs.map((faq) => ({
      _id: faq._id,
      _creationTime: faq._creationTime,
      question: language === "ar" ? (faq.questionAr ?? faq.questionEn) : faq.questionEn,
      answer: language === "ar" ? (faq.answerAr ?? faq.answerEn) : faq.answerEn,
      displayOrder: faq.displayOrder,
      updatedAt: faq.updatedAt,
    }));
  },
});

/** Internal action called by ActionCache on a cache miss */
export const getFAQsUncached = internalAction({
  args: { language: v.union(v.literal("en"), v.literal("ar")) },
  returns: v.array(v.any()),
  handler: async (ctx, { language }): Promise<unknown[]> => {
    return ctx.runQuery(internal.faqs.getFAQsInternal, { language });
  },
});

// ---------------------------------------------------------------------------
// Mutations
// ---------------------------------------------------------------------------

export const createFAQ = mutation({
  args: {
    questionEn: v.string(),
    answerEn: v.string(),
    questionAr: v.optional(v.string()),
    answerAr: v.optional(v.string()),
    displayOrder: v.number(),
  },
  handler: async (ctx, args) => {
    await requireCoach(ctx);

    const hasArabic = args.questionAr?.trim() && args.answerAr?.trim();
    const faqId = await ctx.db.insert("faqs", {
      questionEn: args.questionEn,
      answerEn: args.answerEn,
      questionAr: args.questionAr || undefined,
      answerAr: args.answerAr || undefined,
      displayOrder: args.displayOrder,
      translationStatus: hasArabic ? "completed" : "pending",
      updatedAt: Date.now(),
    });

    // Auto-translate if Arabic not provided
    if (!hasArabic) {
      await ctx.scheduler.runAfter(0, internal.faqs.translateFAQ, { faqId });
    }

    return faqId;
  },
});

export const updateFAQ = mutation({
  args: {
    faqId: v.id("faqs"),
    questionEn: v.optional(v.string()),
    answerEn: v.optional(v.string()),
    questionAr: v.optional(v.string()),
    answerAr: v.optional(v.string()),
    displayOrder: v.optional(v.number()),
  },
  handler: async (ctx, { faqId, ...updates }) => {
    await requireCoach(ctx);

    const existing = await ctx.db.get(faqId);
    if (!existing) throw new Error("FAQ not found");

    // If English content changed and no Arabic override provided, re-translate
    const enChanged =
      (updates.questionEn && updates.questionEn !== existing.questionEn) ||
      (updates.answerEn && updates.answerEn !== existing.answerEn);
    const arProvided = updates.questionAr?.trim() || updates.answerAr?.trim();

    const patch: Record<string, unknown> = { updatedAt: Date.now() };
    if (updates.questionEn !== undefined) patch.questionEn = updates.questionEn;
    if (updates.answerEn !== undefined) patch.answerEn = updates.answerEn;
    if (updates.questionAr !== undefined) patch.questionAr = updates.questionAr;
    if (updates.answerAr !== undefined) patch.answerAr = updates.answerAr;
    if (updates.displayOrder !== undefined) patch.displayOrder = updates.displayOrder;

    if (enChanged && !arProvided) {
      patch.translationStatus = "pending";
    }

    await ctx.db.patch(faqId, patch);

    // Trigger re-translation if English changed and no manual Arabic
    if (enChanged && !arProvided) {
      await ctx.scheduler.runAfter(0, internal.faqs.translateFAQ, { faqId });
    }
  },
});

export const deleteFAQ = mutation({
  args: { faqId: v.id("faqs") },
  handler: async (ctx, { faqId }) => {
    await requireCoach(ctx);
    const doc = await ctx.db.get(faqId);
    if (doc) await ctx.db.delete(faqId);
  },
});

export const bulkDeleteFAQs = mutation({
  args: { faqIds: v.array(v.id("faqs")) },
  handler: async (ctx, { faqIds }) => {
    if (faqIds.length === 0) return;
    if (faqIds.length > 100) throw new Error("Cannot delete more than 100 FAQs at once");
    await requireCoach(ctx);
    await Promise.all(
      faqIds.map(async (id) => {
        const doc = await ctx.db.get(id);
        if (doc) await ctx.db.delete(id);
      }),
    );
  },
});

// ---------------------------------------------------------------------------
// Internal: AI Translation
// ---------------------------------------------------------------------------

/** Save translation result back to the FAQ doc */
export const patchTranslation = internalMutation({
  args: {
    faqId: v.id("faqs"),
    questionAr: v.string(),
    answerAr: v.string(),
  },
  handler: async (ctx, { faqId, questionAr, answerAr }) => {
    const existing = await ctx.db.get(faqId);
    if (!existing) return;
    // Don't overwrite manual edits — only patch if still pending
    if (existing.translationStatus !== "pending") return;
    await ctx.db.patch(faqId, {
      questionAr,
      answerAr,
      translationStatus: "completed" as const,
      updatedAt: Date.now(),
    });
  },
});

export const markTranslationFailed = internalMutation({
  args: { faqId: v.id("faqs") },
  handler: async (ctx, { faqId }) => {
    const existing = await ctx.db.get(faqId);
    if (!existing) return;
    await ctx.db.patch(faqId, {
      translationStatus: "failed" as const,
      updatedAt: Date.now(),
    });
  },
});

/** Translate FAQ English → Arabic using AI */
export const translateFAQ = internalAction({
  args: { faqId: v.id("faqs") },
  handler: async (ctx, { faqId }) => {
    // Fetch current FAQ
    const faq = await ctx.runQuery(internal.faqs.getFAQForTranslation, { faqId });
    if (!faq) return;

    try {
      const { createOpenRouter } = await import("@openrouter/ai-sdk-provider");
      const { generateText } = await import("ai");

      const apiKey = process.env.OPENROUTER_API_KEY;
      if (!apiKey) throw new Error("OPENROUTER_API_KEY not set");

      const openrouter = createOpenRouter({ apiKey });
      const result = await generateText({
        model: openrouter("google/gemini-2.0-flash-001"),
        system:
          "You are a professional English-to-Arabic translator for a fitness coaching app. " +
          "Translate the user-provided FAQ question and answer. " +
          'Return ONLY valid JSON: {"questionAr": "...", "answerAr": "..."}. No markdown fences.',
        messages: [
          {
            role: "user",
            content: `Question: ${faq.questionEn}\nAnswer: ${faq.answerEn}`,
          },
        ],
        maxOutputTokens: 1000,
      });

      // Parse and sanitize the JSON response
      const text = result.text.trim();
      const jsonStr = text.replace(/^```json?\s*/i, "").replace(/```\s*$/, "");
      const parsed = JSON.parse(jsonStr);

      if (
        typeof parsed.questionAr !== "string" ||
        typeof parsed.answerAr !== "string" ||
        !parsed.questionAr.trim() ||
        !parsed.answerAr.trim()
      ) {
        throw new Error(
          "Invalid translation response: expected non-empty questionAr and answerAr strings",
        );
      }

      // Strip any HTML tags from AI output
      const stripHtml = (s: string) => s.replace(/<[^>]*>/g, "");

      await ctx.runMutation(internal.faqs.patchTranslation, {
        faqId,
        questionAr: stripHtml(parsed.questionAr),
        answerAr: stripHtml(parsed.answerAr),
      });

      console.log(`[FAQ Translation] Translated FAQ ${faqId} to Arabic`);
    } catch (err) {
      console.error(`[FAQ Translation] Failed for ${faqId}:`, err);
      await ctx.runMutation(internal.faqs.markTranslationFailed, { faqId });
    }
  },
});

/** Internal query to fetch FAQ for translation */
export const getFAQForTranslation = internalQuery({
  args: { faqId: v.id("faqs") },
  handler: async (ctx, { faqId }) => {
    return ctx.db.get(faqId);
  },
});
