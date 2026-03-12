import { v } from "convex/values";
import { query, mutation, internalQuery, internalMutation } from "./_generated/server";
import { getAuthUserId } from "./auth";
import { requireCoach } from "./helpers";

// ---------------------------------------------------------------------------
// Public queries
// ---------------------------------------------------------------------------

export const listFoods = query({
  args: {
    category: v.optional(
      v.union(
        v.literal("protein"),
        v.literal("carb"),
        v.literal("fat"),
        v.literal("vegetable"),
        v.literal("fruit"),
        v.literal("dairy"),
        v.literal("dessert"),
        v.literal("recipe"),
      ),
    ),
    isRecipe: v.optional(v.boolean()),
    search: v.optional(v.string()),
  },
  handler: async (ctx, { category, isRecipe, search: searchQuery }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    // Full-text search when a query is provided
    if (searchQuery && searchQuery.trim().length > 0) {
      let searchBuilder = ctx.db.query("foodDatabase").withSearchIndex("search_name", (q) => {
        let sq = q.search("name", searchQuery.trim());
        if (category) sq = sq.eq("category", category);
        if (isRecipe !== undefined) sq = sq.eq("isRecipe", isRecipe);
        return sq;
      });
      return searchBuilder.take(200);
    }

    // Filtered list
    if (category) {
      return ctx.db
        .query("foodDatabase")
        .withIndex("by_category", (q) => q.eq("category", category))
        .take(200);
    }

    if (isRecipe !== undefined) {
      return ctx.db
        .query("foodDatabase")
        .withIndex("by_isRecipe", (q) => q.eq("isRecipe", isRecipe))
        .take(200);
    }

    return ctx.db.query("foodDatabase").take(200);
  },
});

// ---------------------------------------------------------------------------
// Internal query — compact food reference for AI prompt
// ---------------------------------------------------------------------------

export const getFoodReferenceForPrompt = internalQuery({
  args: {},
  handler: async (ctx): Promise<string> => {
    const foods = await ctx.db.query("foodDatabase").collect();
    if (foods.length === 0) return "";

    // Cap at 120 ingredients + 30 recipes
    const ingredients = foods.filter((f) => !f.isRecipe).slice(0, 120);
    const recipes = foods.filter((f) => f.isRecipe).slice(0, 30);

    if (ingredients.length === 0 && recipes.length === 0) return "";

    let result =
      "VERIFIED FOOD DATABASE — You MUST use these exact macros when these foods appear in your plan. Do NOT estimate or fabricate nutritional values.\n\n";

    // Group ingredients by category
    const categoryOrder: Array<{ key: string; label: string }> = [
      { key: "protein", label: "PROTEINS" },
      { key: "carb", label: "CARBOHYDRATES" },
      { key: "fat", label: "FATS & OILS" },
      { key: "dairy", label: "DAIRY" },
      { key: "vegetable", label: "VEGETABLES" },
      { key: "fruit", label: "FRUITS" },
      { key: "dessert", label: "DESSERTS" },
    ];

    for (const { key, label } of categoryOrder) {
      const catFoods = ingredients.filter((f) => f.category === key);
      if (catFoods.length === 0) continue;

      result += `${label} (per 100g):\n`;
      for (const food of catFoods) {
        const p = food.per100g;
        const arName = food.nameAr ? ` (${food.nameAr})` : "";
        const fiberStr = p.fiber ? ` | ${p.fiber}g fiber` : "";
        result += `${food.name}${arName} | ${p.calories} cal | ${p.protein}P | ${p.carbs}C | ${p.fat}F${fiberStr}\n`;
      }
      result += "\n";
    }

    if (recipes.length > 0) {
      result += "RECIPES (per serving):\n";
      for (const recipe of recipes) {
        const ps = recipe.perServing;
        const arName = recipe.nameAr ? ` (${recipe.nameAr})` : "";
        result += `${recipe.name}${arName}`;
        if (recipe.servingSize) result += ` [${recipe.servingSize}]`;
        if (ps) {
          result += ` | ${ps.calories} cal | ${ps.protein}P | ${ps.carbs}C | ${ps.fat}F`;
        }
        if (recipe.ingredients && recipe.ingredients.length > 0) {
          result += `\n  → Ingredients: ${recipe.ingredients.join(", ")}`;
        }
        result += "\n";
      }
      result +=
        "\nINSTRUCTION: Include at least 1 fun/treat meal per day from the recipe database (healthy desserts or 'junk made healthy').\n";
    }

    return result;
  },
});

// ---------------------------------------------------------------------------
// Internal query — find food by exact name (for idempotent seeding)
// ---------------------------------------------------------------------------

export const findByName = internalQuery({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    // Search index for candidate retrieval, then exact match filter.
    // BM25 search can return fuzzy matches (e.g. "Milk" matches "Full-Fat Milk"),
    // so we must verify the exact name to ensure idempotent seeding.
    const candidates = await ctx.db
      .query("foodDatabase")
      .withSearchIndex("search_name", (q) => q.search("name", name))
      .take(50);
    return candidates.find((f) => f.name === name) ?? null;
  },
});

// ---------------------------------------------------------------------------
// Coach mutations
// ---------------------------------------------------------------------------

export const addFood = mutation({
  args: {
    name: v.string(),
    nameAr: v.optional(v.string()),
    category: v.union(
      v.literal("protein"),
      v.literal("carb"),
      v.literal("fat"),
      v.literal("vegetable"),
      v.literal("fruit"),
      v.literal("dairy"),
      v.literal("dessert"),
      v.literal("recipe"),
    ),
    tags: v.array(v.string()),
    per100g: v.object({
      calories: v.number(),
      protein: v.number(),
      carbs: v.number(),
      fat: v.number(),
      fiber: v.optional(v.number()),
    }),
    isRecipe: v.boolean(),
    servingSize: v.optional(v.string()),
    perServing: v.optional(
      v.object({
        calories: v.number(),
        protein: v.number(),
        carbs: v.number(),
        fat: v.number(),
      }),
    ),
    ingredients: v.optional(v.array(v.string())),
    instructions: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    await requireCoach(ctx);

    const now = Date.now();
    return ctx.db.insert("foodDatabase", {
      ...args,
      source: "coach",
      isVerified: true,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const deleteFood = mutation({
  args: { foodId: v.id("foodDatabase") },
  handler: async (ctx, { foodId }) => {
    await requireCoach(ctx);

    await ctx.db.delete(foodId);
  },
});

// ---------------------------------------------------------------------------
// Internal mutation — used by seed action
// ---------------------------------------------------------------------------

export const insertFood = internalMutation({
  args: {
    name: v.string(),
    nameAr: v.optional(v.string()),
    category: v.union(
      v.literal("protein"),
      v.literal("carb"),
      v.literal("fat"),
      v.literal("vegetable"),
      v.literal("fruit"),
      v.literal("dairy"),
      v.literal("dessert"),
      v.literal("recipe"),
    ),
    tags: v.array(v.string()),
    per100g: v.object({
      calories: v.number(),
      protein: v.number(),
      carbs: v.number(),
      fat: v.number(),
      fiber: v.optional(v.number()),
    }),
    isRecipe: v.boolean(),
    servingSize: v.optional(v.string()),
    perServing: v.optional(
      v.object({
        calories: v.number(),
        protein: v.number(),
        carbs: v.number(),
        fat: v.number(),
      }),
    ),
    ingredients: v.optional(v.array(v.string())),
    instructions: v.optional(v.array(v.string())),
    source: v.union(v.literal("usda"), v.literal("coach"), v.literal("verified_recipe")),
    isVerified: v.boolean(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return ctx.db.insert("foodDatabase", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});
