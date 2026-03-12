"use node";

import { ActionCache } from "@convex-dev/action-cache";
import { components, internal } from "./_generated/api";
import { action, internalAction } from "./_generated/server";
import { v } from "convex/values";
import { FAQ_CACHE_TTL_MS, PRICING_CACHE_TTL_MS, FOOD_REF_CACHE_TTL_MS } from "./constants";

/**
 * Read-through caches for rarely-changing data.
 *
 * Both cache instances AND their public-facing action wrappers live here.
 * This prevents circular type inference: faqs.ts defines getFAQsUncached
 * and does NOT import from this file; actionCache.ts imports
 * internal.faqs.getFAQsUncached from _generated/api (a declared type, not
 * a live import from faqs.ts). The cycle is broken.
 */

const faqCache = new ActionCache(components.actionCache, {
  action: internal.faqs.getFAQsUncached,
  name: "faqs-v1",
  ttl: FAQ_CACHE_TTL_MS,
});

const pricingCache = new ActionCache(components.actionCache, {
  action: internal.systemConfig.getPricingUncached,
  name: "pricing-v1",
  ttl: PRICING_CACHE_TTL_MS,
});

// ---------------------------------------------------------------------------
// Food Reference Cache — 1-hour TTL
// ---------------------------------------------------------------------------

/** Uncached food reference fetcher (called by ActionCache) */
export const getFoodReferenceUncached = internalAction({
  args: {},
  returns: v.string(),
  handler: async (ctx): Promise<string> => {
    return ctx.runQuery(internal.foodDatabase.getFoodReferenceForPrompt, {});
  },
});

const foodRefCache = new ActionCache(components.actionCache, {
  action: internal.actionCache.getFoodReferenceUncached,
  name: "food-ref-v2",
  ttl: FOOD_REF_CACHE_TTL_MS,
});

/**
 * Cached food reference lookup — 1-hour TTL.
 * Used by AI meal plan generation to avoid re-fetching + re-formatting
 * the food database on every generation call.
 */
export const getFoodReferenceCached = internalAction({
  args: {},
  returns: v.string(),
  handler: async (ctx): Promise<string> => {
    const result = await foodRefCache.fetch(ctx, {});
    return (result as string) ?? "";
  },
});

/**
 * Cached FAQ lookup — 1-hour TTL. Use on FAQ pages where real-time reactivity
 * isn't needed. Invalidated automatically on TTL expiry.
 */
export const getFAQsCached = action({
  args: { language: v.union(v.literal("en"), v.literal("ar")) },
  returns: v.any(),
  handler: async (ctx, { language }): Promise<unknown> => {
    return faqCache.fetch(ctx, { language });
  },
});

/**
 * Cached pricing lookup — 30-minute TTL. Use on landing/signup pages.
 */
export const getPricingCached = action({
  args: {},
  returns: v.any(),
  handler: async (ctx): Promise<unknown> => {
    return pricingCache.fetch(ctx, {});
  },
});
