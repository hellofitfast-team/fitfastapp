"use node";

import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import type { Id } from "./_generated/dataModel";

/**
 * Extract payment data from a screenshot using Qwen3-VL via OpenRouter.
 * Scheduled by createSignup when a paymentScreenshotId is provided.
 */
export const extractPaymentData = internalAction({
  args: {
    signupId: v.id("pendingSignups"),
    storageId: v.id("_storage"),
  },
  handler: async (ctx, { signupId, storageId }): Promise<void> => {
    const imageUrl = await ctx.storage.getUrl(storageId);
    if (!imageUrl) {
      console.error("OCR: Could not resolve storage URL for", storageId);
      return;
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error("OCR: OPENROUTER_API_KEY not set");
      return;
    }

    try {
      const { createOpenRouter } = await import("@openrouter/ai-sdk-provider");
      const { generateText } = await import("ai");

      const openrouter = createOpenRouter({ apiKey });

      const { text } = await generateText({
        model: openrouter("qwen/qwen-2.5-vl-72b-instruct"),
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                image: new URL(imageUrl),
              },
              {
                type: "text",
                text: `Extract payment information from this screenshot. Return ONLY valid JSON with these fields (use null for any field you cannot find):
{
  "amount": "the payment amount as a string including currency if visible",
  "sender_name": "name of the person who sent the payment",
  "reference_number": "transaction or reference number",
  "date": "payment date",
  "bank": "bank or payment provider name"
}
Respond with ONLY the JSON object, no markdown or explanation.`,
              },
            ],
          },
        ],
        maxOutputTokens: 300,
      });

      // Parse the JSON response
      const cleaned = text.replace(/```(?:json)?\s*/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(cleaned);

      // Filter out null/undefined values
      const ocrData: Record<string, string> = {};
      for (const [key, value] of Object.entries(parsed)) {
        if (value !== null && value !== undefined && value !== "") {
          ocrData[key] = String(value);
        }
      }

      if (Object.keys(ocrData).length > 0) {
        await ctx.runMutation(internal.pendingSignups.patchOcrData, {
          signupId,
          ocrExtractedData: ocrData,
        });
      }
    } catch (err) {
      console.error("OCR extraction failed:", err);
      // Non-critical — don't throw. The signup still exists without OCR data.
    }
  },
});
