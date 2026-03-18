import { Migrations } from "@convex-dev/migrations";
import { internalMutation } from "./_generated/server";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";

export const migrations = new Migrations<DataModel>(components.migrations);

export const run = migrations.runner();

// Migrate FAQ docs from per-language (question/answer/language) to bilingual
// (questionEn/answerEn + questionAr/answerAr). Run once, then remove legacy fields from schema.
export const migrateFaqsToBilingual = migrations.define({
  table: "faqs",
  migrateOne: async (_ctx, doc) => {
    // Skip docs already migrated
    if ((doc as any).questionEn) return;

    const q = (doc as any).question as string | undefined;
    const a = (doc as any).answer as string | undefined;
    const lang = (doc as any).language as "en" | "ar" | undefined;

    if (!q || !a) return;

    if (lang === "ar") {
      return {
        questionAr: q,
        answerAr: a,
        questionEn: undefined,
        answerEn: undefined,
        question: undefined,
        answer: undefined,
        language: undefined,
        translationStatus: "completed" as const,
      };
    }
    // Default: English
    return {
      questionEn: q,
      answerEn: a,
      question: undefined,
      answer: undefined,
      language: undefined,
      translationStatus: "pending" as const,
    };
  },
});

// Merge paired EN+AR FAQ docs into single bilingual docs.
// After migrateFaqsToBilingual, prod may have separate EN-only and AR-only docs
// with the same displayOrder. This merges them and deletes the AR-only orphans.
export const mergeFaqPairs = internalMutation({
  args: {},
  handler: async (ctx) => {
    const faqs = await ctx.db.query("faqs").collect();

    // Group by displayOrder
    const byOrder = new Map<number, typeof faqs>();
    for (const faq of faqs) {
      const order = faq.displayOrder;
      if (!byOrder.has(order)) byOrder.set(order, []);
      byOrder.get(order)!.push(faq);
    }

    let merged = 0;
    let deleted = 0;

    for (const [, group] of byOrder) {
      if (group.length < 2) continue;

      // Find the EN doc and AR doc
      const enDoc = group.find((f) => f.questionEn && !f.questionAr);
      const arDoc = group.find((f) => f.questionAr && !f.questionEn);

      if (enDoc && arDoc) {
        // Merge AR into EN doc
        await ctx.db.patch(enDoc._id, {
          questionAr: arDoc.questionAr,
          answerAr: arDoc.answerAr,
          translationStatus: "completed" as const,
          updatedAt: Date.now(),
        });
        // Delete the AR-only doc
        await ctx.db.delete(arDoc._id);
        merged++;
        deleted++;
      }
    }

    return { merged, deleted, totalRemaining: faqs.length - deleted };
  },
});
