/**
 * k6 Scenario: Production Stress Test (1000 VUs + AI Generation)
 *
 * Mixed realistic load against production:
 * - read_load:    0→500→1000 VUs reading dashboard + plans
 * - write_load:   50 VUs submitting check-ins (no AI)
 * - ai_generation: 12 VUs triggering real AI plan generation (~$0.60-$0.96)
 *
 * Budget: ~$1 max AI cost (12 generations × ~$0.05-$0.08 each)
 *
 * Run:
 *   k6 run e2e/load/scenarios/prod-stress.js \
 *     -e E2E_CONVEX_URL=https://blessed-clam-706.convex.cloud \
 *     -e CONVEX_SITE_URL=https://blessed-clam-706.convex.site
 */

import { sleep, check, group } from "k6";
import { Counter, Trend } from "k6/metrics";
import { convexQuery, convexMutation } from "../helpers/convex-client.js";
import { authenticateUsers, getVUEmail } from "../helpers/auth.js";
import { thresholds } from "../k6.config.js";

// Custom metrics
const readErrors = new Counter("read_errors");
const writeErrors = new Counter("write_errors");
const aiGenerationsCompleted = new Counter("ai_generations_completed");
const aiGenerationsFailed = new Counter("ai_generations_failed");
const aiGenerationDuration = new Trend("ai_generation_duration", true);

export const options = {
  setupTimeout: "300s", // 5 min to authenticate 100 users
  scenarios: {
    // Phase 1: Read-heavy load (dashboard browsing)
    read_load: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "2m", target: 500 }, // Ramp to 500
        { duration: "2m", target: 500 }, // Hold
        { duration: "2m", target: 1000 }, // Ramp to 1000
        { duration: "1m", target: 1000 }, // Hold at peak
        { duration: "1m", target: 0 }, // Ramp down
      ],
      exec: "readLoad",
    },
    // Phase 2: Write load (check-in submissions, no AI)
    write_load: {
      executor: "constant-vus",
      vus: 50,
      duration: "5m",
      startTime: "1m", // Start 1 min in (let reads warm up)
      exec: "writeLoad",
    },
    // Phase 3: AI generation (budget-capped)
    ai_generation: {
      executor: "per-vu-iterations",
      vus: 12,
      iterations: 1,
      maxDuration: "6m",
      startTime: "2m", // Start 2 min in (during peak read load)
      exec: "aiGeneration",
    },
  },
  thresholds: {
    ...thresholds,
    // Relax for AI calls
    "http_req_duration{type:query}": ["p(95)<5000"],
    "http_req_duration{type:mutation}": ["p(95)<5000"],
    ai_generation_duration: ["p(95)<120000"], // 2 min max for AI
  },
};

// Pre-authenticate all test users
export function setup() {
  // NO production guard — this scenario is explicitly for prod
  console.log("=== PRODUCTION STRESS TEST ===");
  console.log(`Target: ${__ENV.E2E_CONVEX_URL}`);
  console.log("Authenticating 100 load test users...");

  const tokens = authenticateUsers(100);
  const tokenCount = Object.keys(tokens).length;

  if (tokenCount < 10) {
    throw new Error(
      `Only ${tokenCount} users authenticated — need at least 10. ` +
        "Run: npx convex run seedLoadTest:seedUsers '{\"count\":100}' first.",
    );
  }

  console.log(`${tokenCount} users authenticated. Starting stress test...`);
  return { tokens };
}

/**
 * Read load: simulate dashboard browsing.
 * Each VU reads dashboard data, meal plan, and workout plan.
 */
export function readLoad(data) {
  const vuIndex = ((__VU - 1) % 100) + 1;
  const email = getVUEmail(vuIndex);
  const token = data.tokens[email];

  if (!token) {
    sleep(1);
    return;
  }

  group("dashboard_browse", () => {
    // Dashboard data
    const dash = convexQuery("dashboard:getDashboardData", {}, token);
    if (dash && dash.error) readErrors.add(1);

    sleep(0.3);

    // Meal plan
    const meal = convexQuery("mealPlans:getCurrentPlan", {}, token);
    if (meal && meal.error) readErrors.add(1);

    sleep(0.3);

    // Workout plan
    const workout = convexQuery("workoutPlans:getCurrentPlan", {}, token);
    if (workout && workout.error) readErrors.add(1);
  });

  // Think time (simulates user reading content)
  sleep(Math.random() * 2 + 1);
}

/**
 * Write load: submit check-ins without triggering AI.
 */
export function writeLoad(data) {
  const vuIndex = ((__VU - 1) % 50) + 1;
  const email = getVUEmail(vuIndex);
  const token = data.tokens[email];

  if (!token) {
    sleep(1);
    return;
  }

  group("checkin_submit", () => {
    const result = convexMutation(
      "checkIns:submitCheckIn",
      {
        weight: 70 + Math.random() * 20,
        energyLevel: Math.floor(Math.random() * 5) + 1,
        sleepQuality: Math.floor(Math.random() * 5) + 1,
        dietaryAdherence: Math.floor(Math.random() * 5) + 1,
        notes: `Stress test VU ${__VU} at ${new Date().toISOString()}`,
      },
      token,
    );

    if (result && result.error) {
      writeErrors.add(1);
    }
  });

  // Longer think time for writes
  sleep(Math.random() * 3 + 2);
}

/**
 * AI generation: trigger real plan generation and poll for completion.
 * Each VU does exactly 1 generation (12 total = ~$0.60-$0.96).
 */
export function aiGeneration(data) {
  // AI users use indices 51-62 (separate from write load users 1-50)
  const vuIndex = 50 + __VU;
  const email = getVUEmail(vuIndex);
  const token = data.tokens[email];

  if (!token) {
    console.warn(`No token for AI VU ${__VU} (${email})`);
    aiGenerationsFailed.add(1);
    return;
  }

  const startTime = Date.now();

  group("ai_plan_generation", () => {
    // Trigger AI plan generation via the workflow
    console.log(`AI VU ${__VU}: Starting plan generation for ${email}`);

    const result = convexMutation(
      "checkIns:startCheckInWorkflow",
      {
        language: "en",
        weight: 70 + __VU * 2,
        energyLevel: 4,
        sleepQuality: 4,
        dietaryAdherence: 4,
        notes: `AI stress test VU ${__VU}`,
      },
      token,
    );

    if (result && result.error) {
      console.warn(`AI VU ${__VU}: Check-in failed — ${JSON.stringify(result.error)}`);
      aiGenerationsFailed.add(1);
      return;
    }

    // Poll for plan completion (up to 120s)
    let mealPlanFound = false;
    let workoutPlanFound = false;
    const maxWait = 120;
    const pollInterval = 5;

    for (let elapsed = 0; elapsed < maxWait; elapsed += pollInterval) {
      sleep(pollInterval);

      if (!mealPlanFound) {
        const mealPlan = convexQuery("mealPlans:getCurrentPlan", {}, token);
        if (mealPlan && mealPlan.value && !mealPlan.error) {
          mealPlanFound = true;
          console.log(`AI VU ${__VU}: Meal plan ready at ${elapsed + pollInterval}s`);
        }
      }

      if (!workoutPlanFound) {
        const workoutPlan = convexQuery("workoutPlans:getCurrentPlan", {}, token);
        if (workoutPlan && workoutPlan.value && !workoutPlan.error) {
          workoutPlanFound = true;
          console.log(`AI VU ${__VU}: Workout plan ready at ${elapsed + pollInterval}s`);
        }
      }

      if (mealPlanFound && workoutPlanFound) break;
    }

    const duration = Date.now() - startTime;
    aiGenerationDuration.add(duration);

    const success = check(null, {
      "meal plan generated within 120s": () => mealPlanFound,
      "workout plan generated within 120s": () => workoutPlanFound,
    });

    if (success) {
      aiGenerationsCompleted.add(1);
      console.log(`AI VU ${__VU}: Both plans ready in ${Math.round(duration / 1000)}s`);
    } else {
      aiGenerationsFailed.add(1);
      console.warn(
        `AI VU ${__VU}: TIMEOUT — meal=${mealPlanFound}, workout=${workoutPlanFound} after ${Math.round(duration / 1000)}s`,
      );
    }
  });
}

export function teardown(data) {
  console.log("=== STRESS TEST COMPLETE ===");
  console.log("Check k6 output for:");
  console.log("  - read_errors: total read query failures");
  console.log("  - write_errors: total write mutation failures");
  console.log("  - ai_generations_completed: successful AI plan generations");
  console.log("  - ai_generations_failed: failed AI plan generations");
  console.log("  - ai_generation_duration: time from check-in to both plans ready");
  console.log("  - http_req_duration: overall latency distribution");
  console.log("");
  console.log("Cleanup: npx convex run seedLoadTest:cleanup '{\"count\":100}'");
}
