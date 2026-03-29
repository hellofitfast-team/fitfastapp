"use node";

import { v } from "convex/values";
import { action, internalAction, type ActionCtx } from "./_generated/server";
import { internal } from "./_generated/api";
import { Id } from "./_generated/dataModel";
import { getAuthUserId } from "./auth";
import { type ClientContext, formatContextForPrompt } from "./clientContext";
import { calculateNutritionTargets, type NutritionTargets } from "./nutritionEngine";
import { selectWorkoutSplit, type WorkoutSplit } from "./workoutSplitEngine";
import { generateWorkoutPlan as buildWorkoutPlan, parseInjuries } from "./workoutPlanEngine";
import { getRagClient } from "./ragManager";
import { traceAI, classifyError, flushLangfuse } from "./langfuse";
import {
  extractJSON,
  validateAndCorrectMealPlan,
  validateWorkoutPlan,
  shouldActivateDemoMode,
  type ValidationWarning,
} from "./aiUtils";
import {
  WORKOUT_OUTPUT_TOKENS_EN,
  WORKOUT_OUTPUT_TOKENS_AR,
  PLAN_GENERATION_MAX_RETRIES,
  MEAL_CHUNK_SIZE,
  MEAL_CHUNK_TOKENS_EN,
  MEAL_CHUNK_TOKENS_AR,
  MEAL_CHUNK_TIMEOUT_MS,
  MEAL_CHUNK_MAX_RETRIES,
} from "./constants";

// ---------------------------------------------------------------------------
// AI Model Configuration
// ---------------------------------------------------------------------------

/** Primary plan generation model — Mercury 2 via OpenRouter (testing performance vs Gemini) */
const PLAN_MODEL_PRIMARY = "inception/mercury-2";
/** Fallback model — Google Gemini, used when primary is congested/unavailable */
const PLAN_MODEL_FALLBACK = "gemini-2.5-flash";

// extractJSON, validateAndCorrectMealPlan, validateWorkoutPlan, and ValidationWarning
// are imported from ./aiUtils (extracted for testability)

// ---------------------------------------------------------------------------
// Pregnancy compliance: scan generated meal plan for prohibited foods
// ---------------------------------------------------------------------------

const PREGNANCY_PROHIBITED_FOODS = [
  "sushi",
  "raw fish",
  "sashimi",
  "unpasteurized",
  "raw milk",
  "deli meat",
  "cold cuts",
  "luncheon meat",
  "shark",
  "swordfish",
  "king mackerel",
  "tilefish",
  "marlin",
];

interface ProhibitedFoodViolation {
  dayKey: string;
  mealIndex: number;
  mealName: string;
  matchedKeyword: string;
}

function scanForProhibitedFoods(planData: Record<string, unknown>): ProhibitedFoodViolation[] {
  const violations: ProhibitedFoodViolation[] = [];
  const weeklyPlan = planData.weeklyPlan as Record<string, unknown> | undefined;
  if (!weeklyPlan) return violations;

  for (const [dayKey, dayData] of Object.entries(weeklyPlan)) {
    const meals = (dayData as any)?.meals;
    if (!Array.isArray(meals)) continue;

    for (let i = 0; i < meals.length; i++) {
      const meal = meals[i];
      // Scan primary meal + alternatives for prohibited foods
      const mealsToScan = [meal, ...(Array.isArray(meal.alternatives) ? meal.alternatives : [])];
      for (const m of mealsToScan) {
        const searchText = [
          m.name ?? "",
          ...(Array.isArray(m.ingredients) ? m.ingredients : []),
          m.description ?? "",
        ]
          .join(" ")
          .toLowerCase();

        for (const keyword of PREGNANCY_PROHIBITED_FOODS) {
          if (searchText.includes(keyword.toLowerCase())) {
            violations.push({
              dayKey,
              mealIndex: i,
              mealName: m.name ?? meal.name ?? `Meal ${i + 1}`,
              matchedKeyword: keyword,
            });
            break; // one violation per meal/alternative is enough
          }
        }
      }
    }
  }

  return violations;
}

// ---------------------------------------------------------------------------
// InBody measured BMR extraction — prefer latest check-in, fallback to assessment
// ---------------------------------------------------------------------------

function getLatestMeasuredBmr(clientCtx: ClientContext): number | undefined {
  const sources = [
    clientCtx.currentCheckIn?.inBodyData,
    ...(clientCtx.checkInHistory ?? []).map((c) => c.inBodyData),
    (clientCtx.assessment as any)?.inBodyData,
  ];
  for (const data of sources) {
    if (data && typeof data === "object" && "basalMetabolicRate" in data) {
      const bmr = (data as { basalMetabolicRate?: number }).basalMetabolicRate;
      if (bmr != null && bmr >= 800 && bmr <= 4000) return bmr;
    }
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// RAG context helper — searches coach knowledge base for relevant guidance
// ---------------------------------------------------------------------------

async function getCoachKnowledgeContext(
  ctx: ActionCtx,
  assessment: {
    goals?: string | null;
    dietaryRestrictions?: string[] | null;
    foodPreferences?: string[] | null;
    experienceLevel?: string | null;
  },
  planType: "meal" | "workout",
): Promise<string> {
  const contextParts = [
    assessment.goals,
    assessment.dietaryRestrictions?.join(", "),
    assessment.foodPreferences?.join(", "),
    assessment.experienceLevel,
  ].filter(Boolean);

  if (contextParts.length === 0) return "";

  const clientContext = contextParts.join("; ");

  // Filter by relevant tags so meal prompts get nutrition docs and workout prompts get training docs
  const tags = planType === "meal" ? ["nutrition", "general"] : ["workout", "recovery", "general"];
  const filters = tags.map((tag) => ({ name: "tag" as const, value: tag }));

  try {
    // Use text search (keyword-based) — no embedding API call, zero hang risk.
    // Coach knowledge base is small (<100 entries), so keyword matching on
    // tags + content is sufficient and eliminates the OpenRouter embed() bottleneck.
    const rag = getRagClient();
    const searchResult = await rag.search(ctx, {
      namespace: "coach_knowledge",
      query: clientContext,
      limit: 5,
      filters,
      searchType: "text",
    });

    const chunks = searchResult.results.map((r) => r.content.map((c) => c.text).join("\n"));
    if (chunks.length === 0) return "";

    return `\nCOACH'S TRAINING PHILOSOPHY & GUIDELINES:\n${chunks.join("\n\n")}`;
  } catch {
    // Knowledge base empty or not initialized — continue without RAG context
    return "";
  }
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

/**
 * Fetch client context with a single retry — when triggered from assessment
 * submission via scheduler.runAfter(0), the assessment may not yet be visible
 * in the action's read snapshot.
 */
async function fetchClientContextWithRetry(
  ctx: ActionCtx,
  userId: string,
  checkInId?: Id<"checkIns">,
): Promise<ClientContext> {
  const MAX_RETRIES = 3;
  const RETRY_DELAY_MS = 1500;

  let clientCtx: ClientContext = await ctx.runQuery(internal.clientContext.buildClientContext, {
    userId,
    checkInId,
  });

  // Retry with backoff — assessment may not be visible in the action's read snapshot yet
  for (let attempt = 1; attempt <= MAX_RETRIES && !clientCtx.assessment; attempt++) {
    console.warn(
      `[AI] Assessment not found for user ${userId} (attempt ${attempt}/${MAX_RETRIES}), retrying in ${RETRY_DELAY_MS}ms...`,
    );
    await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
    clientCtx = await ctx.runQuery(internal.clientContext.buildClientContext, {
      userId,
      checkInId,
    });
  }

  if (!clientCtx.assessment)
    throw new Error("Please complete your initial assessment before generating a plan.");

  return clientCtx;
}

// ---------------------------------------------------------------------------
// Demo mode — mock meal plan when no AI API keys are configured
// ---------------------------------------------------------------------------

async function generateDemoMealPlan(
  ctx: ActionCtx,
  {
    userId,
    checkInId,
    language,
    safeDuration,
    clientCtx,
  }: {
    userId: string;
    checkInId?: Id<"checkIns">;
    language: "en" | "ar";
    safeDuration: number;
    clientCtx: ClientContext;
  },
): Promise<Id<"mealPlans">> {
  const assessment = clientCtx.assessment!;
  const isArabic = language === "ar";
  const fhData = assessment.gender === "female" ? (assessment.femaleHealth as any) : undefined;
  const nutritionTargets = calculateNutritionTargets({
    weightKg: assessment.currentWeight ?? 75,
    heightCm: assessment.height ?? 170,
    age: assessment.age ?? 30,
    gender: assessment.gender === "female" ? "female" : "male",
    trainingDaysPerWeek: Math.max(1, (assessment.scheduleAvailability as any)?.days?.length ?? 4),
    goal: assessment.goals?.split(",")[0]?.trim() ?? "general_fitness",
    activityLevel: (assessment as any).activityLevel ?? undefined,
    measuredBmr: getLatestMeasuredBmr(clientCtx),
    femaleHealth: fhData
      ? {
          isPregnant: fhData.isPregnant,
          isBreastfeeding: fhData.isBreastfeeding,
          menstrualStatus: fhData.menstrualStatus,
        }
      : undefined,
  });

  const makeMeal = (name: string, nameAr: string, type: string, calPct: number) => {
    const cal = Math.round(nutritionTargets.calories * calPct);
    const pro = Math.round(nutritionTargets.protein * calPct);
    const carb = Math.round(nutritionTargets.carbs * calPct);
    const fat = Math.round(nutritionTargets.fat * calPct);
    return {
      name: isArabic ? nameAr : name,
      type,
      calories: cal,
      protein: pro,
      carbs: carb,
      fat,
      ingredients: isArabic
        ? ["بيض - 3 حبات", "خبز بلدي - 1", "جبنة بيضاء - 50 جم"]
        : ["3 eggs", "1 baladi bread", "50g white cheese"],
      instructions: isArabic ? ["اطبخ المكونات حسب الرغبة"] : ["Cook ingredients as preferred"],
      alternatives: [
        {
          name: isArabic ? "بديل 1" : "Alternative 1",
          type,
          calories: cal,
          protein: pro,
          carbs: carb,
          fat,
          ingredients: isArabic
            ? ["شوفان - 60 جم", "لبن - 200 مل", "موز - 1"]
            : ["60g oats", "200ml milk", "1 banana"],
          instructions: isArabic ? ["اخلط المكونات"] : ["Mix ingredients"],
        },
        {
          name: isArabic ? "بديل 2" : "Alternative 2",
          type,
          calories: cal,
          protein: pro,
          carbs: carb,
          fat,
          ingredients: isArabic
            ? ["فول - 200 جم", "طحينة - 1 م.ك", "خبز - 1"]
            : ["200g fava beans", "1 tbsp tahini", "1 bread"],
          instructions: isArabic ? ["سخن الفول وقدمه"] : ["Heat beans and serve"],
        },
        {
          name: isArabic ? "بديل 3" : "Alternative 3",
          type,
          calories: cal,
          protein: pro,
          carbs: carb,
          fat,
          ingredients: isArabic
            ? ["زبادي يوناني - 200 جم", "عسل - 1 م.ك", "مكسرات - 30 جم"]
            : ["200g Greek yogurt", "1 tbsp honey", "30g nuts"],
          instructions: isArabic ? ["اخلط وقدم"] : ["Mix and serve"],
        },
      ],
    };
  };

  const weeklyPlan: Record<string, unknown> = {};
  for (let d = 1; d <= safeDuration; d++) {
    weeklyPlan[`day${d}`] = {
      dailyTotals: {
        calories: nutritionTargets.calories,
        protein: nutritionTargets.protein,
        carbs: nutritionTargets.carbs,
        fat: nutritionTargets.fat,
      },
      meals: [
        makeMeal("Breakfast", "فطور", "breakfast", 0.25),
        makeMeal("Morning Snack", "سناك صباحي", "snack", 0.1),
        makeMeal("Lunch", "غداء", "lunch", 0.3),
        makeMeal("Afternoon Snack", "سناك مسائي", "snack", 0.1),
        makeMeal("Dinner", "عشاء", "dinner", 0.25),
      ],
    };
  }

  const planData = {
    dailyTargets: {
      calories: nutritionTargets.calories,
      protein: nutritionTargets.protein,
      carbs: nutritionTargets.carbs,
      fat: nutritionTargets.fat,
    },
    weeklyPlan,
    notes: isArabic
      ? "⚠️ خطة تجريبية — سيتم إنشاء خطة مخصصة بالذكاء الاصطناعي عند تفعيل المفتاح"
      : "⚠️ Demo plan — a personalized AI plan will be generated once API keys are configured",
  };

  const streamId: string = await ctx.runMutation(internal.streamingManager.createStream, {});
  await ctx.runMutation(internal.streamingManager.appendChunk, {
    streamId,
    text: JSON.stringify(planData),
    final: true,
  });

  const startDate = new Date().toISOString().split("T")[0]!;
  const endDate = new Date(Date.now() + safeDuration * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0]!;

  return ctx.runMutation(internal.mealPlans.savePlanInternal, {
    userId,
    checkInId,
    planData,
    streamId,
    language,
    startDate,
    endDate,
    assessmentVersion: clientCtx.assessmentVersion,
  });
}

// ---------------------------------------------------------------------------
// Shared generation logic
// ---------------------------------------------------------------------------

async function generateMealPlanHandler(
  ctx: ActionCtx,
  {
    userId,
    checkInId,
    language,
    planDuration,
  }: {
    userId: string;
    checkInId?: Id<"checkIns">;
    language: "en" | "ar";
    planDuration: number;
  },
): Promise<Id<"mealPlans">> {
  // Defense in depth: ensure planDuration is always at least 1
  const safeDuration = Math.max(planDuration, 1);

  // --- DEMO MODE: skip AI when explicitly enabled or no API keys are configured ---
  const demoMode = process.env.DEMO_MODE === "true";
  const hasOpenRouterKey = !!process.env.OPENROUTER_API_KEY;
  const hasFallbackKey = !!process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (shouldActivateDemoMode(demoMode, hasOpenRouterKey, hasFallbackKey)) {
    console.warn(
      `[AI] DEMO MODE: ${demoMode ? "Explicitly enabled" : "No AI API keys configured"} — generating mock meal plan for user ${userId}`,
    );
    const clientCtx = await fetchClientContextWithRetry(ctx, userId, checkInId);
    return generateDemoMealPlan(ctx, { userId, checkInId, language, safeDuration, clientCtx });
  }

  const clientCtx = await fetchClientContextWithRetry(ctx, userId, checkInId);

  // Pre-calculate nutrition targets deterministically
  const startTime = Date.now();
  const assessment = clientCtx.assessment!;
  const scheduleData = assessment.scheduleAvailability as { days?: string[] } | null;
  const trainingDays = Math.max(1, scheduleData?.days?.length ?? 4);
  console.log(
    `[AI] Generating meal plan for user ${userId} (${language}), training days: ${trainingDays}`,
  );

  // Validate anthropometric data with safe ranges — use defaults if out of range
  let weightKg = assessment.currentWeight ?? 75;
  let heightCm = assessment.height ?? 170;
  let age = assessment.age ?? 30;
  if (weightKg < 30 || weightKg > 300) {
    console.warn(
      `[AI] Weight ${weightKg}kg out of range (30-300) for user ${userId}, using default 75kg`,
    );
    weightKg = 75;
  }
  if (heightCm < 100 || heightCm > 250) {
    console.warn(
      `[AI] Height ${heightCm}cm out of range (100-250) for user ${userId}, using default 170cm`,
    );
    heightCm = 170;
  }
  if (age < 13 || age > 120) {
    console.warn(`[AI] Age ${age} out of range (13-120) for user ${userId}, using default 30`);
    age = 30;
  }

  const fhCheck = assessment.gender === "female" ? (assessment.femaleHealth as any) : undefined;
  const nutritionTargets: NutritionTargets = calculateNutritionTargets({
    weightKg,
    heightCm,
    age,
    gender: assessment.gender === "female" ? "female" : "male",
    trainingDaysPerWeek: trainingDays,
    goal: assessment.goals?.split(",")[0]?.trim() ?? "general_fitness",
    activityLevel: (assessment as any).activityLevel ?? undefined,
    measuredBmr: getLatestMeasuredBmr(clientCtx),
    femaleHealth: fhCheck
      ? {
          isPregnant: fhCheck.isPregnant,
          isBreastfeeding: fhCheck.isBreastfeeding,
          menstrualStatus: fhCheck.menstrualStatus,
        }
      : undefined,
  });

  // --- PLAN CACHE CHECK: per-user cache for identical nutrition targets ---
  // Scoped per-user to avoid cross-client data leaks (pregnancy safety, personalization).
  // Helps when same user re-generates (e.g., retry after failure, same cycle macros).
  let mealPlanCacheKey: string | null = null;
  try {
    const restrictions = [...((assessment.dietaryRestrictions as string[] | undefined) ?? [])]
      .sort()
      .join(",");
    const allergies = [...((assessment.allergies as string[] | undefined) ?? [])].sort().join(",");
    const gender = assessment.gender ?? "male";
    const fh = (assessment.femaleHealth ?? {}) as Record<string, unknown>;
    const femaleHash =
      gender === "female"
        ? `-${fh.isPregnant ?? false}-${fh.isBreastfeeding ?? false}-${fh.menstrualStatus ?? "none"}`
        : "";
    const isInitial = !checkInId;
    mealPlanCacheKey = `${userId}-${nutritionTargets.calories}-${nutritionTargets.protein}-${nutritionTargets.carbs}-${nutritionTargets.fat}-${language}-${safeDuration}-${restrictions}|${allergies}${femaleHash}-${isInitial}`;

    const cachedPlan = await ctx.runQuery(internal.planCache.checkPlanCache, {
      cacheKey: mealPlanCacheKey,
    });
    if (cachedPlan) {
      console.log(`[AI] Cache HIT for key ${mealPlanCacheKey} — skipping generation`);

      const cacheTrace = traceAI({
        name: "generate-meal-plan",
        userId,
        metadata: { language, planDuration: safeDuration, checkInId, cacheKey: mealPlanCacheKey },
        tags: ["meal-plan", "cache-hit"],
      });
      cacheTrace?.update({ metadata: { cacheHit: true } });

      const startDate = new Date().toISOString().split("T")[0]!;
      const endDate = new Date(Date.now() + safeDuration * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0]!;

      // Create a stream with the cached plan data so clients can display it
      const cachedStreamId: string = await ctx.runMutation(
        internal.streamingManager.createStream,
        {},
      );
      await ctx.runMutation(internal.streamingManager.appendChunk, {
        streamId: cachedStreamId,
        text: JSON.stringify(cachedPlan),
        final: true,
      });

      const planId = await ctx.runMutation(internal.mealPlans.savePlanInternal, {
        userId,
        checkInId,
        planData: cachedPlan,
        streamId: cachedStreamId,
        language,
        startDate,
        endDate,
        assessmentVersion: clientCtx.assessmentVersion,
      });

      await flushLangfuse();
      return planId;
    }

    console.log(`[AI] Cache MISS for key ${mealPlanCacheKey} — proceeding with AI generation`);
  } catch (cacheErr) {
    // Never let cache issues break generation
    console.warn(`[AI] Plan cache check failed, proceeding with generation:`, cacheErr);
  }

  // Fetch coach knowledge context via RAG (filtered to nutrition/general docs)
  // Skip RAG search entirely if knowledge base is empty — saves compute for ~80% of coaches
  const kbHasEntries: boolean = await ctx.runQuery(internal.knowledgeBase.hasEntries, {});
  const knowledgeSection = kbHasEntries
    ? await getCoachKnowledgeContext(ctx, assessment, "meal")
    : "";

  // Fetch food database reference (cached 1h — rarely changes)
  const foodReference: string = await ctx.runAction(
    internal.actionCache.getFoodReferenceCached,
    {},
  );

  const { createOpenRouter } = await import("@openrouter/ai-sdk-provider");
  const { createGoogleGenerativeAI } = await import("@ai-sdk/google");
  const { generateText, streamText } = await import("ai");
  const openrouterApiKey = process.env.OPENROUTER_API_KEY;
  if (!openrouterApiKey) throw new Error("OPENROUTER_API_KEY environment variable is not set");
  const openrouter = createOpenRouter({ apiKey: openrouterApiKey });
  const isArabic = language === "ar";

  const contextBlock = formatContextForPrompt(clientCtx);
  const isFemale = assessment.gender === "female";

  // Build dynamic female nutrition block based on actual collected health data
  const femaleNutritionBlock = (() => {
    if (!isFemale) return "";

    const fh = (assessment.femaleHealth ?? {}) as {
      menstrualStatus?: string;
      isPregnant?: boolean;
      isBreastfeeding?: boolean;
      hormonalMedication?: string;
    };
    const cyclePhase = (clientCtx.currentCheckIn as any)?.cyclePhase as string | undefined;
    const lines: string[] = ["\nFEMALE-SPECIFIC NUTRITION GUIDELINES (MANDATORY for this client):"];

    // ── Pregnancy: highest priority, overrides most other advice ──
    if (fh.isPregnant) {
      lines.push(
        "- ⚠️ CLIENT IS PREGNANT — All dietary advice must be pregnancy-safe.",
        "- Add 300-500 extra calories/day beyond maintenance (do NOT apply deficit).",
        "- FOLATE: Prioritize folate-rich foods (dark leafy greens, lentils, fortified grains) — critical for fetal development.",
        "- AVOID: raw fish/sushi, unpasteurized dairy, deli meats, excessive caffeine (limit to 200mg/day), high-mercury fish.",
        "- IRON: 27mg/day target — include red meat, lentils, spinach + vitamin C pairing.",
        "- CALCIUM: 1000mg/day — dairy, tahini, sardines.",
        '- ADD DISCLAIMER at top of plan: "⚠️ You are pregnant. Please consult your OB-GYN before following any diet plan. This plan is a general guide only."',
      );
      return lines.join("\n");
    }

    // ── Breastfeeding ──
    if (fh.isBreastfeeding) {
      lines.push(
        "- CLIENT IS BREASTFEEDING — Add ~500 extra calories/day beyond maintenance.",
        "- Extra hydration: note to drink 3-4L water daily.",
        "- CALCIUM: 1000mg/day — dairy, tahini, sardines.",
        "- Include galactagogue foods where culturally appropriate (oats, fenugreek/helba).",
        '- ADD NOTE: "Consult your doctor before making major dietary changes while breastfeeding."',
      );
    }

    // ── Cycle-aware nutrition (only if menstruating) ──
    if (fh.menstrualStatus === "regular" || fh.menstrualStatus === "irregular") {
      lines.push(
        "- IRON: Include iron-rich foods daily (red meat 2-3x/week, lentils, spinach, molasses). Pair with vitamin C (lemon, tomato, bell pepper). Target ~18mg/day due to menstrual blood loss.",
      );

      if (cyclePhase === "menstrual") {
        lines.push(
          "- CLIENT IS IN MENSTRUAL PHASE: Increase iron-rich foods. Include anti-inflammatory foods (ginger, turmeric, omega-3). Warm, comforting meals preferred. Limit excess sodium to reduce bloating.",
        );
      } else if (cyclePhase === "luteal") {
        lines.push(
          "- CLIENT IS IN LUTEAL PHASE (pre-menstrual): Include complex carbs and magnesium-rich foods (dark chocolate, nuts, bananas) to manage PMS cravings. Anti-inflammatory foods (ginger, turmeric, omega-3). Potassium-rich foods (bananas, sweet potatoes, avocado) to reduce bloating.",
        );
      } else if (cyclePhase === "follicular" || cyclePhase === "ovulatory") {
        lines.push(
          "- CLIENT IS IN FOLLICULAR/OVULATORY PHASE: Energy levels are typically higher. Good time for higher-protein, performance-focused meals.",
        );
      }
    }

    // ── Amenorrhea (absent periods) — possible RED-S ──
    if (fh.menstrualStatus === "amenorrhea") {
      lines.push(
        "- ⚠️ CLIENT HAS AMENORRHEA (absent periods) — This may indicate Relative Energy Deficiency in Sport (RED-S).",
        "- Do NOT apply aggressive caloric deficit. Ensure adequate energy availability.",
        "- Prioritize calcium (1200mg/day), vitamin D, and healthy fats.",
        "- Include calorie-dense nutrient foods — don't restrict fat below 25% of total calories.",
      );
    }

    // ── Postmenopausal ──
    if (fh.menstrualStatus === "postmenopausal") {
      lines.push(
        "- CLIENT IS POSTMENOPAUSAL — Bone health is priority.",
        "- CALCIUM: Target 1200mg/day — dairy, tahini, sardines, fortified alternatives.",
        "- VITAMIN D: Recommend supplementation or sun exposure.",
        "- Adequate protein (1.2-1.5g/kg) to prevent muscle loss.",
        "- Include phytoestrogen foods (soy, flaxseed, chickpeas) where appropriate.",
      );
    }

    // ── General female baseline (if no specific status or prefer_not_say) ──
    if (!fh.menstrualStatus || fh.menstrualStatus === "prefer_not_say") {
      lines.push(
        "- IRON: Include iron-rich foods regularly (red meat, lentils, spinach). Pair with vitamin C.",
        "- CALCIUM & VITAMIN D: Target 1000mg calcium/day — dairy, tahini, sardines.",
        "- FOLATE: Include folate-rich foods (dark leafy greens, lentils, chickpeas).",
      );
    }

    // ── Hormonal medication note ──
    if (fh.hormonalMedication) {
      lines.push(
        `- Note: Client is on hormonal medication (${fh.hormonalMedication}). This may affect appetite, water retention, and metabolism.`,
      );
    }

    // ── Always include bone health for all female clients ──
    lines.push("- BONE HEALTH: Ensure adequate protein + calcium + vitamin K (leafy greens).");

    return lines.join("\n");
  })();

  // Determine prompt complexity — initial generations (no check-in history) skip adherence guidelines
  const isInitialGeneration = !checkInId;
  const promptComplexity = isInitialGeneration && !knowledgeSection ? "simple" : "complex";

  // Guideline #7 only applies when there's check-in history (weight trend data)
  const weightStallGuideline = isInitialGeneration
    ? ""
    : "\n7. If weight trend shows stall (>2 weeks same weight on fat loss), slightly increase protein and reduce carbs";

  const systemPrompt = `You are an expert sports nutritionist and meal planning AI specializing in ${isArabic ? "Middle Eastern and Egyptian cuisine" : "international cuisine"}. Create personalized meal plans.
HARD CONSTRAINT: All meals MUST be halal. Never include pork, alcohol, or non-halal meat. This is non-negotiable.

NUTRITION CONSTRAINTS (calculated from client data via Mifflin-St Jeor — DO NOT deviate):
- Daily calories: ${nutritionTargets.calories} kcal (TDEE: ${nutritionTargets.tdee}, BMR: ${nutritionTargets.bmr})
- Protein: ${nutritionTargets.protein}g (${nutritionTargets.proteinPerKg}g/kg body weight)
- Carbs: ${nutritionTargets.carbs}g
- Fat: ${nutritionTargets.fat}g
- Each day's meals MUST sum to these daily totals (±5% tolerance)
- CRITICAL: Do NOT round or simplify calorie targets to "nice" numbers. Use the EXACT values above.
- Macro cross-check: Protein(g)×4 + Carbs(g)×4 + Fat(g)×9 must equal total calories for each meal (±30 cal tolerance)
- MINIMUM daily calories: ${nutritionTargets.minCalories} kcal — NEVER go below this
- Distribute calories across 4-5 meals (breakfast, snack, lunch, snack, dinner)
${femaleNutritionBlock}
GUIDELINES:
1. Consider food preferences, allergies, and dietary restrictions
2. Each meal must have accurate macros that sum to the daily totals above
3. Use locally available, affordable ingredients
4. Include specific measurements (grams, cups, tablespoons) and cooking instructions with times/temperatures
5. Each meal MUST have exactly 3 alternatives with matching macros (±10% calories each)
6. If adherence data is provided, adjust meal complexity accordingly${weightStallGuideline}
7. Vary meals across days — avoid repeating the same meal more than twice per week
${isArabic ? "ALL content MUST be in Arabic language. Focus on Egyptian/Middle Eastern cuisine." : ""}${knowledgeSection}
${foodReference}
IMPORTANT: Respond ONLY with valid JSON. No markdown, no code blocks, just raw JSON.`;

  const chunkTokens = isArabic ? MEAL_CHUNK_TOKENS_AR : MEAL_CHUNK_TOKENS_EN;

  // Create stream for live progress
  const streamId: string = await ctx.runMutation(internal.streamingManager.createStream, {});

  // --- Langfuse trace for full generation lifecycle ---
  const trace = traceAI({
    name: "generate-meal-plan",
    userId,
    metadata: { language, planDuration: safeDuration, checkInId, promptComplexity },
    tags: ["meal-plan", `complexity:${promptComplexity}`],
  });

  // --- Chunked generation: generate in batches of MEAL_CHUNK_SIZE days ---
  // Each chunk is small enough to guarantee zero truncation.
  // Langfuse data: EN ~2.3-3K/day, AR ~3.9K/day. Chunk tokens have 50% buffer.
  try {
    // Build day chunks: e.g. 10 days → [[1,2,3], [4,5,6], [7,8,9], [10]]
    const allDays: number[][] = [];
    for (let d = 1; d <= safeDuration; d += MEAL_CHUNK_SIZE) {
      const chunk: number[] = [];
      for (let j = d; j < d + MEAL_CHUNK_SIZE && j <= safeDuration; j++) {
        chunk.push(j);
      }
      allDays.push(chunk);
    }
    console.log(
      `[AI] Chunked generation: ${safeDuration} days → ${allDays.length} chunks: ${allDays.map((c) => c.join("-")).join(", ")}`,
    );

    const accumulatedWeeklyPlan: Record<string, unknown> = {};
    let dailyTargets: Record<string, number> | null = null;
    let allRawText = "";
    let lastFinishReason = "stop";
    const streamChunkSize = 500;

    // Helper: generate a single chunk with primary + fallback
    async function generateChunk(
      days: number[],
      previousMealNames: string[],
      chunkIndex: number,
    ): Promise<{ text: string; finishReason: string }> {
      const dayRange =
        days.length === 1 ? `day ${days[0]}` : `days ${days[0]} to ${days[days.length - 1]}`;
      const dayKeysStr = days.map((d) => `"day${d}"`).join(", ");

      const previousMealsBlock =
        previousMealNames.length > 0
          ? `\nPREVIOUS DAYS' MEALS (vary from these — no repeats >2/week):\n${previousMealNames.join("\n")}`
          : "";

      const chunkPrompt = `Generate meals for ${dayRange} of a ${safeDuration}-day meal plan ${isArabic ? "ENTIRELY IN ARABIC" : "in English"}:

CLIENT PROFILE:
${contextBlock}

DAILY NUTRITION TARGETS: ${nutritionTargets.calories} kcal | ${nutritionTargets.protein}g protein | ${nutritionTargets.carbs}g carbs | ${nutritionTargets.fat}g fat
${previousMealsBlock}
Be concise — short ingredient lists (3-5 per meal), 1-2 instruction steps, 3 alternatives per meal.

Return a JSON object with ONLY these day keys: ${dayKeysStr}
{
${chunkIndex === 0 ? `  "dailyTargets": { "calories": ${nutritionTargets.calories}, "protein": ${nutritionTargets.protein}, "carbs": ${nutritionTargets.carbs}, "fat": ${nutritionTargets.fat} },\n` : ""}  "weeklyPlan": {
    "day${days[0]}": {
      "dailyTotals": { "calories": number, "protein": number, "carbs": number, "fat": number },
      "meals": [
        {
          "name": "string",
          "type": "breakfast|snack|lunch|dinner",
          "calories": number, "protein": number, "carbs": number, "fat": number,
          "ingredients": ["string with amount"],
          "instructions": ["step with time/temp"],
          "alternatives": [{ same fields as meal, without alternatives }]
        }
      ]
    }${days.length > 1 ? `,\n    ...same structure for ${dayKeysStr}` : ""}
  }${chunkIndex === 0 ? `,\n  "notes": "string"` : ""}
}
Each meal MUST have: name, type, calories, protein, carbs, fat, ingredients, instructions, alternatives (exactly 3).
Daily meal macros MUST sum to targets (±5% tolerance). Respond ONLY with valid JSON.`;

      const chunkMaxTokens = days.length < MEAL_CHUNK_SIZE ? 8000 : chunkTokens;

      // Primary model attempt
      const gen = trace?.generation({
        name: `chunk-${chunkIndex}-primary`,
        model: PLAN_MODEL_PRIMARY,
        input: { prompt: chunkPrompt.slice(0, 500) },
        metadata: { days: days.join(","), chunkIndex },
      });
      try {
        // Stream first chunk for live UX; batch for subsequent chunks
        if (chunkIndex === 0) {
          const streamResult = streamText({
            model: openrouter(PLAN_MODEL_PRIMARY),
            system: systemPrompt,
            prompt: chunkPrompt,
            temperature: 0.4,
            maxOutputTokens: chunkMaxTokens,
            maxRetries: PLAN_GENERATION_MAX_RETRIES,
            abortSignal: AbortSignal.timeout(MEAL_CHUNK_TIMEOUT_MS),
          });
          let fullText = "";
          let lastFlushed = 0;
          try {
            for await (const chunk of streamResult.textStream) {
              fullText += chunk;
              if (fullText.length - lastFlushed > streamChunkSize) {
                await ctx.runMutation(internal.streamingManager.appendChunk, {
                  streamId,
                  text: fullText.substring(lastFlushed),
                  final: false,
                });
                lastFlushed = fullText.length;
              }
            }
          } finally {
            await ctx.runMutation(internal.streamingManager.appendChunk, {
              streamId,
              text: fullText.length > lastFlushed ? fullText.substring(lastFlushed) : "",
              final: true,
            });
          }
          const finishReason = await streamResult.finishReason;
          const usage = await streamResult.usage;
          gen?.end({
            output: fullText.slice(0, 500),
            usage: { input: usage.inputTokens, output: usage.outputTokens },
            metadata: { finishReason, textLength: fullText.length },
          });
          return { text: fullText, finishReason };
        } else {
          const batchResult = await generateText({
            model: openrouter(PLAN_MODEL_PRIMARY),
            system: systemPrompt,
            prompt: chunkPrompt,
            temperature: 0.4,
            maxOutputTokens: chunkMaxTokens,
            maxRetries: PLAN_GENERATION_MAX_RETRIES,
            abortSignal: AbortSignal.timeout(MEAL_CHUNK_TIMEOUT_MS),
          });
          gen?.end({
            output: batchResult.text.slice(0, 500),
            usage: {
              input: batchResult.usage?.inputTokens,
              output: batchResult.usage?.outputTokens,
            },
            metadata: {
              finishReason: batchResult.finishReason,
              textLength: batchResult.text.length,
            },
          });
          return { text: batchResult.text, finishReason: batchResult.finishReason };
        }
      } catch (primaryErr) {
        gen?.end({
          metadata: {
            errorType: classifyError(primaryErr),
            error: primaryErr instanceof Error ? primaryErr.message : String(primaryErr),
          },
          level: "ERROR",
        });
        console.warn(
          `[AI] Chunk ${chunkIndex} primary failed, falling back to Gemini: ${primaryErr}`,
        );

        // Fallback to Gemini
        const googleApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
        if (!googleApiKey)
          throw new Error("GOOGLE_GENERATIVE_AI_API_KEY environment variable is not set");
        const google = createGoogleGenerativeAI({ apiKey: googleApiKey });
        const fallbackGen = trace?.generation({
          name: `chunk-${chunkIndex}-fallback`,
          model: PLAN_MODEL_FALLBACK,
          metadata: { days: days.join(","), chunkIndex },
        });
        try {
          const fbResult = await generateText({
            model: google(PLAN_MODEL_FALLBACK),
            system: systemPrompt,
            prompt: chunkPrompt,
            temperature: 0.4,
            maxOutputTokens: chunkMaxTokens,
            maxRetries: 1,
            abortSignal: AbortSignal.timeout(MEAL_CHUNK_TIMEOUT_MS),
          });
          fallbackGen?.end({
            output: fbResult.text.slice(0, 500),
            usage: { input: fbResult.usage?.inputTokens, output: fbResult.usage?.outputTokens },
            metadata: { finishReason: fbResult.finishReason },
          });
          return { text: fbResult.text, finishReason: fbResult.finishReason };
        } catch (fbErr) {
          fallbackGen?.end({
            metadata: {
              errorType: classifyError(fbErr),
              error: fbErr instanceof Error ? fbErr.message : String(fbErr),
            },
            level: "ERROR",
          });
          throw fbErr;
        }
      }
    }

    // Plan ID for intermediate saves (created after first chunk)
    let planId: Id<"mealPlans"> | null = null;
    let planNotes: string | null = null;

    const startDate = new Date().toISOString().split("T")[0]!;
    const endDate = new Date(Date.now() + safeDuration * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0]!;

    // --- Execute chunks sequentially ---
    for (let ci = 0; ci < allDays.length; ci++) {
      const days = allDays[ci];
      console.log(`[AI] Generating chunk ${ci + 1}/${allDays.length}: days ${days.join(",")}`);

      // Collect meal names from last 2 chunks only (cap prompt bloat)
      const recentDayKeys = Object.keys(accumulatedWeeklyPlan).slice(-(MEAL_CHUNK_SIZE * 2));
      const previousMealNames: string[] = [];
      for (const dayKey of recentDayKeys) {
        const meals = (accumulatedWeeklyPlan[dayKey] as any)?.meals;
        if (Array.isArray(meals)) {
          const names = meals
            .map((m: any) => m.name)
            .filter(Boolean)
            .join(", ");
          if (names) previousMealNames.push(`${dayKey}: ${names}`);
        }
      }

      // Per-chunk error recovery: if a chunk fails, log and continue with partial plan
      let chunkResult: { text: string; finishReason: string };
      try {
        chunkResult = await generateChunk(days, previousMealNames, ci);
      } catch (chunkErr) {
        console.error(
          `[AI] Chunk ${ci + 1} failed (days ${days.join(",")}): ${chunkErr instanceof Error ? chunkErr.message : String(chunkErr)}`,
        );
        // Save partial plan with days we have so far rather than losing everything
        if (Object.keys(accumulatedWeeklyPlan).length > 0) {
          console.warn(
            `[AI] Saving partial plan with ${Object.keys(accumulatedWeeklyPlan).length} days`,
          );
          break; // Exit loop, proceed to save what we have
        }
        throw chunkErr; // No days at all — rethrow
      }

      allRawText += chunkResult.text + "\n";
      lastFinishReason = chunkResult.finishReason;

      // Parse chunk JSON — retry on failure (Mercury 2 occasionally produces malformed JSON)
      let chunkData: Record<string, unknown> | null = null;
      let lastParseErr: unknown = null;
      for (let attempt = 0; attempt <= MEAL_CHUNK_MAX_RETRIES; attempt++) {
        const textToParse = attempt === 0 ? chunkResult.text : null;
        try {
          if (attempt > 0) {
            console.warn(
              `[AI] Retrying chunk ${ci + 1} (attempt ${attempt + 1}/${MEAL_CHUNK_MAX_RETRIES + 1})`,
            );
            const retryResult = await generateChunk(days, previousMealNames, ci);
            chunkData = extractJSON(retryResult.text) as Record<string, unknown>;
            allRawText += retryResult.text + "\n";
            lastFinishReason = retryResult.finishReason;
          } else {
            chunkData = extractJSON(textToParse!) as Record<string, unknown>;
          }
          break; // Success — exit retry loop
        } catch (parseErr) {
          lastParseErr = parseErr;
          console.error(
            `[AI] Chunk ${ci + 1} JSON parse failed (attempt ${attempt + 1}): ${parseErr instanceof Error ? parseErr.message : String(parseErr)}`,
          );
        }
      }
      if (!chunkData) {
        if (Object.keys(accumulatedWeeklyPlan).length > 0) {
          console.warn(
            `[AI] Saving partial plan with ${Object.keys(accumulatedWeeklyPlan).length} days after ${MEAL_CHUNK_MAX_RETRIES + 1} attempts`,
          );
          break;
        }
        throw lastParseErr;
      }

      const chunkWeekly = chunkData.weeklyPlan as Record<string, unknown> | undefined;
      if (chunkWeekly) {
        Object.assign(accumulatedWeeklyPlan, chunkWeekly);
      } else {
        // Chunk might return day keys at top level (no weeklyPlan wrapper)
        for (const [key, val] of Object.entries(chunkData)) {
          if (key.startsWith("day") && typeof val === "object") {
            accumulatedWeeklyPlan[key] = val;
          }
        }
      }

      // Extract dailyTargets and notes from first chunk
      if (ci === 0) {
        if (chunkData.dailyTargets) dailyTargets = chunkData.dailyTargets as Record<string, number>;
        if (typeof chunkData.notes === "string") planNotes = chunkData.notes;
      }

      console.log(
        `[AI] Chunk ${ci + 1} complete: ${Object.keys(accumulatedWeeklyPlan).length} days accumulated`,
      );

      // Persist intermediate results so client can progressively render
      const intermediatePlanData: Record<string, unknown> = {
        dailyTargets: dailyTargets ?? {
          calories: nutritionTargets.calories,
          protein: nutritionTargets.protein,
          carbs: nutritionTargets.carbs,
          fat: nutritionTargets.fat,
        },
        weeklyPlan: { ...accumulatedWeeklyPlan },
        ...(planNotes ? { notes: planNotes } : {}),
      };
      if (!planId) {
        // First chunk: create the plan record
        planId = await ctx.runMutation(internal.mealPlans.savePlanInternal, {
          userId,
          checkInId,
          planData: intermediatePlanData,
          aiGeneratedContent: chunkResult.text,
          streamId,
          language,
          startDate,
          endDate,
          assessmentVersion: clientCtx.assessmentVersion,
        });
      } else {
        // Subsequent chunks: patch existing plan
        await ctx.runMutation(internal.mealPlans.updatePlanData, {
          planId,
          planData: intermediatePlanData,
          aiGeneratedContent: allRawText,
        });
      }
    }

    // Assemble final planData from all chunks
    const finalResult = {
      text: allRawText,
      finishReason: lastFinishReason,
    };

    let planData: Record<string, unknown> = {
      dailyTargets: dailyTargets ?? {
        calories: nutritionTargets.calories,
        protein: nutritionTargets.protein,
        carbs: nutritionTargets.carbs,
        fat: nutritionTargets.fat,
      },
      weeklyPlan: accumulatedWeeklyPlan,
      ...(planNotes ? { notes: planNotes } : {}),
    };

    // Log day coverage
    const generatedDays = Object.keys(accumulatedWeeklyPlan).length;
    console.log(
      `[AI] Chunked generation complete: ${generatedDays}/${safeDuration} days generated`,
    );

    // Post-generation validation & auto-correction
    const validationWarnings = validateAndCorrectMealPlan(planData, nutritionTargets);
    if (validationWarnings.length > 0) {
      planData.validationWarnings = validationWarnings;
      console.warn(
        `[AI] Meal plan validation: ${validationWarnings.length} warnings for user ${userId}`,
        validationWarnings,
      );
    }

    const durationMs = Date.now() - startTime;
    console.log(`[AI] Meal plan generated in ${durationMs}ms for user ${userId}`);

    trace?.update({
      metadata: {
        durationMs,
        finishReason: finalResult.finishReason,
        textLength: finalResult.text.length,
        validationWarnings: validationWarnings.length,
        chunksGenerated: allDays.length,
        daysGenerated: generatedDays,
        cacheHit: false,
      },
    });

    // --- PLAN CACHE WRITE: save validated plan for future reuse ---
    if (mealPlanCacheKey) {
      try {
        await ctx.runMutation(internal.planCache.savePlanCache, {
          cacheKey: mealPlanCacheKey,
          planData,
        });
        console.log(`[AI] Cached meal plan with key ${mealPlanCacheKey}`);
      } catch (cacheWriteErr) {
        // Never let cache write failures break the flow
        console.warn(`[AI] Failed to cache meal plan:`, cacheWriteErr);
      }
    }

    // --- Pregnancy compliance: scan + fix prohibited foods ---
    const isPregnant =
      assessment.gender === "female" && (assessment.femaleHealth as any)?.isPregnant;
    if (isPregnant) {
      const violations = scanForProhibitedFoods(planData as Record<string, unknown>);
      if (violations.length > 0) {
        console.log(
          `[AI] Pregnancy compliance: ${violations.length} violation(s) found, re-generating meals`,
        );
        const weeklyPlan = (planData as any).weeklyPlan;
        for (const v of violations) {
          try {
            const dayMeals = weeklyPlan[v.dayKey]?.meals;
            if (!dayMeals?.[v.mealIndex]) continue;
            const oldMeal = dayMeals[v.mealIndex];
            const correctionRes = await generateText({
              model: openrouter(PLAN_MODEL_PRIMARY),
              maxOutputTokens: 1500,
              temperature: 0.5,
              messages: [
                {
                  role: "system" as const,
                  content: `You are a pregnancy-safe nutrition expert. Generate a replacement meal in ${language === "ar" ? "Arabic" : "English"} as valid JSON. Match the same calorie/macro targets. Do NOT include any of these prohibited foods: ${PREGNANCY_PROHIBITED_FOODS.join(", ")}. Return JSON with: name, type, calories, protein, carbs, fat, ingredients (array), instructions (string).`,
                },
                {
                  role: "user" as const,
                  content: `Replace this meal that contained "${v.matchedKeyword}" (prohibited during pregnancy):\n${JSON.stringify(oldMeal)}\nReturn only the replacement meal as JSON.`,
                },
              ],
              abortSignal: AbortSignal.timeout(30_000),
            });
            const replacement = extractJSON(correctionRes.text);
            // Re-scan replacement to ensure it's also compliant
            const recheck = scanForProhibitedFoods({
              weeklyPlan: { [v.dayKey]: { meals: [replacement] } },
            } as Record<string, unknown>);
            if (recheck.length > 0) {
              console.warn(
                `[AI] Replacement meal still contains "${recheck[0].matchedKeyword}" — keeping original with warning`,
              );
            } else {
              dayMeals[v.mealIndex] = replacement;
              console.log(
                `[AI] Replaced meal "${v.mealName}" in ${v.dayKey} (contained: ${v.matchedKeyword})`,
              );
            }
          } catch (regenErr) {
            console.warn(
              `[AI] Failed to re-generate meal "${v.mealName}": ${regenErr instanceof Error ? regenErr.message : String(regenErr)}`,
            );
          }
        }
      }

      // Inject pregnancy disclaimer (language-aware, no emoji — icon rendered client-side)
      (planData as any).pregnancyDisclaimer =
        language === "ar"
          ? "أنتِ حامل. يرجى استشارة طبيبتك قبل اتباع أي خطة غذائية. هذه الخطة دليل عام فقط."
          : "You are pregnant. Please consult your OB-GYN before following any diet plan. This plan is a general guide only.";
    }

    // Inject breastfeeding note
    const isBreastfeeding =
      assessment.gender === "female" &&
      (assessment.femaleHealth as any)?.isBreastfeeding &&
      !isPregnant;
    if (isBreastfeeding) {
      (planData as any).breastfeedingNote =
        language === "ar"
          ? "أنتِ مُرضعة. تأكدي من شرب ٣-٤ لترات ماء يومياً. استشيري طبيبتك قبل إجراء تغييرات غذائية كبيرة."
          : "You are breastfeeding. Ensure adequate hydration (3-4L water daily). Consult your doctor before making major dietary changes.";
    }

    // Final save with validated + post-processed planData
    if (planId) {
      await ctx.runMutation(internal.mealPlans.updatePlanData, {
        planId,
        planData,
        aiGeneratedContent: finalResult.text,
      });
      return planId;
    }
    // Fallback: if no chunks succeeded (shouldn't happen due to earlier throw)
    return ctx.runMutation(internal.mealPlans.savePlanInternal, {
      userId,
      checkInId,
      planData,
      aiGeneratedContent: finalResult.text,
      streamId,
      language,
      startDate,
      endDate,
      assessmentVersion: clientCtx.assessmentVersion,
    });
  } finally {
    await flushLangfuse();
  }
}

async function generateWorkoutPlanHandler(
  ctx: ActionCtx,
  {
    userId,
    checkInId,
    language,
    planDuration,
  }: {
    userId: string;
    checkInId?: Id<"checkIns">;
    language: "en" | "ar";
    planDuration: number;
  },
): Promise<Id<"workoutPlans">> {
  const safeDuration = Math.max(planDuration, 1);
  const startTime = Date.now();

  // Fetch client context + exercise database in parallel
  const [clientCtx, exercises, previousPlanForPerf] = await Promise.all([
    fetchClientContextWithRetry(ctx, userId, checkInId),
    ctx.runQuery(internal.exerciseDatabase.getActiveExercises, {}),
    ctx.runQuery(internal.workoutPlans.getCurrentPlanInternal, { userId }),
  ]);

  // Fetch performance context since last workout plan (for adaptive progression)
  const perfSinceDate =
    previousPlanForPerf?.startDate ??
    new Date(Date.now() - 30 * 86400000).toISOString().split("T")[0]!;
  const performanceContext = await ctx.runQuery(
    internal.workoutPerformanceContext.getPerformanceContext,
    { userId, sinceDate: perfSinceDate },
  );

  const assessment = clientCtx.assessment!;
  const scheduleData = assessment.scheduleAvailability as { days?: string[] } | null;
  const trainingDays = Math.max(1, scheduleData?.days?.length ?? 4);

  // Deterministic split selection (same logic as before)
  const split = selectWorkoutSplit(
    assessment.experienceLevel as "beginner" | "intermediate" | "advanced" | undefined,
    trainingDays,
    safeDuration,
  );

  // Use already-fetched previous plan for progressive overload
  const previousPlan = previousPlanForPerf;

  // Parse injuries from assessment + latest check-in
  const latestCheckIn = clientCtx.checkInHistory?.[0] ?? null;
  const injuries = parseInjuries(assessment, latestCheckIn);

  // Compute adherence/energy/sleep from check-in history (nullish-safe: 0 is a valid value)
  const recentCheckIns = clientCtx.checkInHistory ?? [];
  function avgField(field: string): number | null {
    if (recentCheckIns.length === 0) return null;
    const values = recentCheckIns
      .map((c: Record<string, unknown>) => {
        const v = c[field];
        return v != null ? Number(v) : null;
      })
      .filter((v): v is number => v != null && !isNaN(v));
    if (values.length === 0) return null;
    return values.reduce((s, v) => s + v, 0) / values.length;
  }
  const avgAdherence = avgField("dietaryAdherence");
  const avgEnergy = avgField("energyLevel");
  const avgSleep = avgField("sleepQuality");

  // Generate deterministic plan from exercise database
  const sessionDuration = (scheduleData as any)?.sessionDuration as number | undefined;
  const planData = buildWorkoutPlan(exercises as any[], {
    split,
    planDuration: safeDuration,
    experienceLevel:
      (assessment.experienceLevel as "beginner" | "intermediate" | "advanced") ?? "intermediate",
    goal: assessment.goals ?? "hypertrophy",
    trainingDaysPerWeek: trainingDays,
    injuries,
    adherenceLevel: avgAdherence,
    energyLevel: avgEnergy,
    sleepQuality: avgSleep,
    previousPlan: previousPlan?.planData ?? null,
    language,
    sessionDuration: sessionDuration ?? undefined,
    availableEquipment: (() => {
      const eq = (assessment.lifestyleHabits as any)?.equipment;
      if (!eq) return undefined;
      if (Array.isArray(eq)) return eq;
      if (typeof eq !== "string") return undefined;
      // Map assessment equipment options to exercise database equipment tags.
      // Both "dumbbells" and "dumbbell" are included because seed data uses both forms.
      const EQUIPMENT_MAP: Record<string, string[]> = {
        full_gym: [], // empty = allow all
        home_basic: ["dumbbells", "dumbbell", "resistance_band"],
        home_advanced: [
          "dumbbells",
          "dumbbell",
          "barbell",
          "bench",
          "incline_bench",
          "decline_bench",
          "ez_bar",
          "pull_up_bar",
        ],
        bodyweight: ["__bodyweight_only__"], // sentinel: only exercises with empty equipment[]
        resistance_bands: ["resistance_band"],
      };
      const key = eq.toLowerCase();
      const mapped = EQUIPMENT_MAP[key];
      // Unrecognized values (including legacy "other", "home", "gym", "limited") → allow all
      if (mapped === undefined) return undefined;
      // full_gym returns empty array → undefined means allow all
      if (mapped.length === 0) return undefined;
      return mapped;
    })(),
    gender: assessment.gender === "female" ? "female" : "male",
    femaleHealth:
      assessment.gender === "female" && assessment.femaleHealth
        ? (assessment.femaleHealth as {
            menstrualStatus?: string;
            isPregnant?: boolean;
            isBreastfeeding?: boolean;
          })
        : undefined,
    performanceContext: performanceContext ?? undefined,
  });

  // Create stream and mark it done immediately (backward compat)
  const streamId: string = await ctx.runMutation(internal.streamingManager.createStream, {});
  // Mark stream as complete right away since generation is instant
  await ctx.runMutation(internal.streamingManager.appendChunk, {
    streamId,
    text: JSON.stringify(planData),
    final: true,
  });

  const durationMs = Date.now() - startTime;
  console.log(
    `[Engine] Workout plan generated in ${durationMs}ms for user ${userId} (deterministic, ${exercises.length} exercises in DB)`,
  );

  const startDate = new Date().toISOString().split("T")[0]!;
  const endDate = new Date(Date.now() + safeDuration * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0]!;

  return ctx.runMutation(internal.workoutPlans.savePlanInternal, {
    userId,
    checkInId,
    planData,
    streamId,
    language,
    startDate,
    endDate,
    assessmentVersion: clientCtx.assessmentVersion,
  });
}

// ---------------------------------------------------------------------------
// Internal actions — called by the durable workflow
// ---------------------------------------------------------------------------

export const generateMealPlanInternal = internalAction({
  args: {
    userId: v.string(),
    checkInId: v.optional(v.id("checkIns")),
    language: v.union(v.literal("en"), v.literal("ar")),
    planDuration: v.optional(v.number()),
  },
  returns: v.id("mealPlans"),
  handler: async (ctx, { userId, checkInId, language, planDuration }): Promise<Id<"mealPlans">> => {
    const resolvedDuration: number =
      planDuration ?? (await ctx.runQuery(internal.helpers.getMealPlanDurationInternal));
    return generateMealPlanHandler(ctx, {
      userId,
      checkInId,
      language,
      planDuration: resolvedDuration,
    });
  },
});

export const generateWorkoutPlanInternal = internalAction({
  args: {
    userId: v.string(),
    checkInId: v.optional(v.id("checkIns")),
    language: v.union(v.literal("en"), v.literal("ar")),
    planDuration: v.optional(v.number()),
  },
  returns: v.id("workoutPlans"),
  handler: async (
    ctx,
    { userId, checkInId, language, planDuration },
  ): Promise<Id<"workoutPlans">> => {
    const resolvedDuration: number =
      planDuration ?? (await ctx.runQuery(internal.helpers.getWorkoutPlanDurationInternal));
    return generateWorkoutPlanHandler(ctx, {
      userId,
      checkInId,
      language,
      planDuration: resolvedDuration,
    });
  },
});

// ---------------------------------------------------------------------------
// Dynamic plan-generation rate limiting
// ---------------------------------------------------------------------------

async function checkPlanGenerationLimit(
  ctx: ActionCtx,
  userId: string,
  isInitialGeneration?: boolean,
): Promise<void> {
  if (isInitialGeneration) {
    // Server-side verification: user must have zero existing plans
    const existingCount: number = await ctx.runQuery(internal.helpers.countRecentPlans, {
      userId,
      since: 0,
    });
    if (existingCount >= 2) throw new Error("Initial generation already completed");
    return;
  }

  const frequencyDays: number = await ctx.runQuery(internal.helpers.getCheckInFrequencyInternal);
  const windowStart = Date.now() - frequencyDays * 24 * 60 * 60 * 1000;
  const recentCount: number = await ctx.runQuery(internal.helpers.countRecentPlans, {
    userId,
    since: windowStart,
  });
  if (recentCount >= 2) {
    throw new Error("Plan generation limit reached for this cycle");
  }
}

// ---------------------------------------------------------------------------
// Public actions — dynamically rate-limited; for direct client calls
// ---------------------------------------------------------------------------

export const generateMealPlan = action({
  args: {
    checkInId: v.optional(v.id("checkIns")),
    language: v.union(v.literal("en"), v.literal("ar")),
    planDuration: v.optional(v.number()),
    isInitialGeneration: v.optional(v.boolean()),
  },
  returns: v.id("mealPlans"),
  handler: async (
    ctx,
    { checkInId, language, planDuration, isInitialGeneration },
  ): Promise<Id<"mealPlans">> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    await checkPlanGenerationLimit(ctx, userId, isInitialGeneration);

    const resolvedDuration =
      planDuration ?? (await ctx.runQuery(internal.helpers.getMealPlanDurationInternal));
    return generateMealPlanHandler(ctx, {
      userId,
      checkInId,
      language,
      planDuration: resolvedDuration,
    });
  },
});

export const generateWorkoutPlan = action({
  args: {
    checkInId: v.optional(v.id("checkIns")),
    language: v.union(v.literal("en"), v.literal("ar")),
    planDuration: v.optional(v.number()),
    isInitialGeneration: v.optional(v.boolean()),
  },
  returns: v.id("workoutPlans"),
  handler: async (
    ctx,
    { checkInId, language, planDuration, isInitialGeneration },
  ): Promise<Id<"workoutPlans">> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    await checkPlanGenerationLimit(ctx, userId, isInitialGeneration);

    const resolvedDuration =
      planDuration ?? (await ctx.runQuery(internal.helpers.getWorkoutPlanDurationInternal));
    return generateWorkoutPlanHandler(ctx, {
      userId,
      checkInId,
      language,
      planDuration: resolvedDuration,
    });
  },
});

// ---------------------------------------------------------------------------
// Plan content translation (lazy, on-demand when locale mismatches plan language)
// ---------------------------------------------------------------------------

const LANGUAGE_NAMES: Record<string, string> = { en: "English", ar: "Arabic" };

export const translatePlanContent = internalAction({
  args: {
    planId: v.string(),
    planType: v.union(v.literal("meal"), v.literal("workout")),
    planData: v.any(),
    sourceLanguage: v.union(v.literal("en"), v.literal("ar")),
    targetLanguage: v.union(v.literal("en"), v.literal("ar")),
  },
  handler: async (ctx, args) => {
    const statusMutation =
      args.planType === "meal"
        ? internal.mealPlans.setTranslationStatus
        : internal.workoutPlans.setTranslationStatus;

    try {
      const { createOpenRouter } = await import("@openrouter/ai-sdk-provider");
      const { generateText } = await import("ai");
      const orApiKey = process.env.OPENROUTER_API_KEY;
      if (!orApiKey) throw new Error("OPENROUTER_API_KEY environment variable is not set");
      const openrouter = createOpenRouter({ apiKey: orApiKey });

      const sourceName = LANGUAGE_NAMES[args.sourceLanguage];
      const targetName = LANGUAGE_NAMES[args.targetLanguage];

      const systemPrompt =
        `You are a professional fitness content translator. Translate all human-readable text values in the JSON below from ${sourceName} to ${targetName}. ` +
        `Keep ALL JSON keys, numbers, booleans, and structure EXACTLY the same. ` +
        `Only translate values that are: meal/exercise names, ingredients, instructions, notes, alternatives, workout names, muscle names, safety tips, progression notes. ` +
        `Do NOT translate JSON keys like "name", "type", "calories", "day1", etc. Do NOT change any numeric values. ` +
        `Return ONLY valid JSON with the exact same structure.`;

      const trace = traceAI({
        name: "translate-plan",
        metadata: {
          planType: args.planType,
          sourceLanguage: args.sourceLanguage,
          targetLanguage: args.targetLanguage,
          planId: args.planId,
          strategy: "parallel-day-by-day",
        },
        tags: ["translation"],
      });

      // Parallel day-by-day translation with per-day retry + Gemini fallback
      const planObj = args.planData as Record<string, unknown>;
      const weeklyPlan = planObj.weeklyPlan as Record<string, unknown> | undefined;

      if (!weeklyPlan || typeof weeklyPlan !== "object") {
        throw new Error("Plan has no weeklyPlan structure to translate");
      }

      // Set up Gemini fallback for days that fail with Mercury 2
      const { createGoogleGenerativeAI } = await import("@ai-sdk/google");
      const googleApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
      const google = googleApiKey ? createGoogleGenerativeAI({ apiKey: googleApiKey }) : null;

      const dayKeys = Object.keys(weeklyPlan);
      const parallelSpan = trace?.span({
        name: "parallel-day-translate",
        metadata: { totalDays: dayKeys.length },
      });

      // Helper: translate a single day with retry + fallback
      async function translateDay(
        dayKey: string,
      ): Promise<{ dayKey: string; result: Record<string, unknown> }> {
        const dayJson = JSON.stringify({ [dayKey]: weeklyPlan![dayKey] });
        const RETRY_DELAYS = [2000, 4000, 8000]; // exponential backoff
        const TOKEN_LIMITS = [8000, 12000, 16000, 16000]; // scale up per retry (truncation recovery)

        // Try primary model (Mercury 2) with retries
        let lastError: unknown;
        for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt++) {
          if (attempt > 0) {
            await new Promise((r) => setTimeout(r, RETRY_DELAYS[attempt - 1]));
          }
          const maxTokens = TOKEN_LIMITS[attempt] ?? 16000;
          const dayGen = parallelSpan?.generation({
            name: `translate-${dayKey}-attempt-${attempt}`,
            model: PLAN_MODEL_PRIMARY,
          });
          try {
            const dayRes = await generateText({
              model: openrouter(PLAN_MODEL_PRIMARY),
              maxOutputTokens: maxTokens,
              temperature: 0.3,
              messages: [
                { role: "system" as const, content: systemPrompt },
                { role: "user" as const, content: dayJson },
              ],
              abortSignal: AbortSignal.timeout(60_000),
            });
            dayGen?.end({
              usage: { input: dayRes.usage?.inputTokens, output: dayRes.usage?.outputTokens },
              metadata: { finishReason: dayRes.finishReason },
            });
            return { dayKey, result: extractJSON(dayRes.text) as Record<string, unknown> };
          } catch (err) {
            lastError = err;
            dayGen?.end({
              metadata: {
                errorType: classifyError(err),
                error: err instanceof Error ? err.message : String(err),
                attempt,
              },
              level: "ERROR",
            });
          }
        }

        // Fallback to Gemini if available
        if (google) {
          const fallbackGen = parallelSpan?.generation({
            name: `translate-${dayKey}-fallback`,
            model: PLAN_MODEL_FALLBACK,
          });
          try {
            const dayRes = await generateText({
              model: google(PLAN_MODEL_FALLBACK),
              maxOutputTokens: 16000,
              temperature: 0.3,
              messages: [
                { role: "system" as const, content: systemPrompt },
                { role: "user" as const, content: dayJson },
              ],
              abortSignal: AbortSignal.timeout(60_000),
            });
            fallbackGen?.end({
              usage: { input: dayRes.usage?.inputTokens, output: dayRes.usage?.outputTokens },
              metadata: { finishReason: dayRes.finishReason },
            });
            return { dayKey, result: extractJSON(dayRes.text) as Record<string, unknown> };
          } catch (fallbackErr) {
            fallbackGen?.end({
              metadata: {
                errorType: classifyError(fallbackErr),
                error: fallbackErr instanceof Error ? fallbackErr.message : String(fallbackErr),
              },
              level: "ERROR",
            });
          }
        }

        // All retries + fallback exhausted
        throw lastError ?? new Error(`Translation failed for ${dayKey} after all retries`);
      }

      // Translate all days in parallel with per-day retry
      const settled = await Promise.allSettled(dayKeys.map((dk) => translateDay(dk)));

      // Check for failures (all-or-nothing: if any day fails, entire translation fails)
      const failures = settled.filter((s): s is PromiseRejectedResult => s.status === "rejected");
      if (failures.length > 0) {
        const failedDays = dayKeys.filter((_, i) => settled[i].status === "rejected");
        const firstError = failures[0].reason;
        throw new Error(
          `Translation failed for days [${failedDays.join(", ")}]: ${firstError instanceof Error ? firstError.message : String(firstError)}`,
        );
      }

      // Merge all translated days, validating each has actual meal content
      const translatedWeeklyPlan: Record<string, unknown> = {};
      for (const s of settled) {
        if (s.status === "fulfilled") {
          Object.assign(translatedWeeklyPlan, s.value.result);
        }
      }

      // Validate: if a translated day lost its meals, fall back to original data
      for (const dayKey of dayKeys) {
        const original = weeklyPlan[dayKey] as Record<string, unknown> | undefined;
        const translated = translatedWeeklyPlan[dayKey] as Record<string, unknown> | undefined;
        const originalMeals = Array.isArray(original?.["meals"]) ? original["meals"] : [];
        const translatedMeals = Array.isArray(translated?.["meals"]) ? translated["meals"] : [];
        // If original had meals but translation lost them, keep original
        if (originalMeals.length > 0 && translatedMeals.length === 0) {
          console.warn(
            `[AI] Translation for ${dayKey} returned empty meals (original had ${originalMeals.length}), keeping original`,
          );
          translatedWeeklyPlan[dayKey] = original;
        }
      }

      parallelSpan?.end();

      // Translate top-level string fields (notes, etc.) in parallel with days
      const topLevelFields: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(planObj)) {
        if (key !== "weeklyPlan" && typeof val === "string" && val.length > 0) {
          topLevelFields[key] = val;
        }
      }

      let translatedTopLevel: Record<string, unknown> = {};
      if (Object.keys(topLevelFields).length > 0) {
        const topGen = trace?.generation({
          name: "translate-top-level",
          model: PLAN_MODEL_PRIMARY,
        });
        try {
          const topRes = await generateText({
            model: openrouter(PLAN_MODEL_PRIMARY),
            maxOutputTokens: 1000,
            temperature: 0.3,
            messages: [
              { role: "system" as const, content: systemPrompt },
              { role: "user" as const, content: JSON.stringify(topLevelFields) },
            ],
            abortSignal: AbortSignal.timeout(15_000),
          });
          topGen?.end({
            usage: { input: topRes.usage?.inputTokens, output: topRes.usage?.outputTokens },
          });
          translatedTopLevel = extractJSON(topRes.text) as Record<string, unknown>;
        } catch {
          topGen?.end({ level: "WARNING" });
        }
      }

      const translatedData = {
        ...planObj,
        ...translatedTopLevel,
        weeklyPlan: translatedWeeklyPlan,
      };

      const saveMutation =
        args.planType === "meal"
          ? internal.mealPlans.saveTranslation
          : internal.workoutPlans.saveTranslation;

      await ctx.runMutation(saveMutation, {
        planId: args.planId as any,
        translatedPlanData: translatedData,
        translatedLanguage: args.targetLanguage,
      });

      await flushLangfuse();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error(
        `[AI] Translation failed for ${args.planType} plan ${args.planId}: ${errorMessage}`,
      );

      await ctx.runMutation(statusMutation, {
        planId: args.planId as any,
        status: "failed",
        error: errorMessage.slice(0, 500),
      });

      await flushLangfuse();
    }
  },
});

// ---------------------------------------------------------------------------
// Contextual translation EN → AR (used by admin plan name field)
// ---------------------------------------------------------------------------

export const translateToArabic = action({
  args: { text: v.string() },
  returns: v.string(),
  handler: async (ctx, { text }): Promise<string> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    if (!text.trim()) return "";

    // Truncate input to prevent abuse (translation is for short UI strings)
    const truncatedText = text.slice(0, 500);

    const { createOpenRouter } = await import("@openrouter/ai-sdk-provider");
    const { createGoogleGenerativeAI } = await import("@ai-sdk/google");
    const { generateText } = await import("ai");
    const orApiKey = process.env.OPENROUTER_API_KEY;
    if (!orApiKey) throw new Error("OPENROUTER_API_KEY environment variable is not set");
    const openrouter = createOpenRouter({ apiKey: orApiKey });

    const translateMessages = [
      {
        role: "system" as const,
        content:
          "You are a professional Arabic translator for a fitness coaching app. " +
          "Translate the given English text into natural, modern Arabic as it would be used in fitness/gym marketing in Egypt. " +
          "Do NOT do literal word-for-word translation. Use the Arabic word or phrase that conveys the same meaning and feeling. " +
          "For example: 'Starter' → 'مبتدئ', 'Premium' → 'مميز', 'Pro' → 'احترافي', 'Ultimate' → 'شامل'. " +
          "Return ONLY the Arabic translation, nothing else.",
      },
      { role: "user" as const, content: truncatedText },
    ];

    const trace = traceAI({
      name: "translate-arabic",
      userId,
      metadata: { inputLength: truncatedText.length },
      tags: ["translation", "arabic"],
    });

    try {
      let translated: string;
      const primaryGen = trace?.generation({
        name: "primary-mercury-arabic",
        model: PLAN_MODEL_PRIMARY,
        input: { text: truncatedText.slice(0, 200) },
      });
      try {
        const res = await generateText({
          model: openrouter(PLAN_MODEL_PRIMARY),
          maxOutputTokens: 100,
          temperature: 0.3,
          messages: translateMessages,
          abortSignal: AbortSignal.timeout(30_000),
        });
        translated = res.text;
        primaryGen?.end({
          output: translated.slice(0, 200),
          usage: { input: res.usage?.inputTokens, output: res.usage?.outputTokens },
        });
      } catch (primaryErr) {
        primaryGen?.end({
          metadata: {
            errorType: classifyError(primaryErr),
            error: primaryErr instanceof Error ? primaryErr.message : String(primaryErr),
          },
          level: "ERROR",
        });
        console.warn(
          `[AI] Primary model (Mercury 2) failed for Arabic translation, falling back to Gemini: ${primaryErr}`,
        );
        const googleApiKeyAr = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
        if (!googleApiKeyAr)
          throw new Error("GOOGLE_GENERATIVE_AI_API_KEY environment variable is not set");
        const googleAr = createGoogleGenerativeAI({ apiKey: googleApiKeyAr });
        const fallbackGen = trace?.generation({
          name: "fallback-gemini-arabic",
          model: PLAN_MODEL_FALLBACK,
          input: { text: truncatedText.slice(0, 200) },
        });
        const res = await generateText({
          model: googleAr(PLAN_MODEL_FALLBACK),
          maxOutputTokens: 100,
          temperature: 0.3,
          messages: translateMessages,
          abortSignal: AbortSignal.timeout(30_000),
        });
        translated = res.text;
        fallbackGen?.end({
          output: translated.slice(0, 200),
          usage: { input: res.usage?.inputTokens, output: res.usage?.outputTokens },
        });
      }

      await flushLangfuse();
      return translated.trim();
    } catch (err) {
      console.error("[AI] Translation failed:", err);
      await flushLangfuse();
      throw new Error("Translation failed. Please try again.");
    }
  },
});
