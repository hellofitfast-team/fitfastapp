# Task: Workout Plan Decoupling + AI Enrichment + Meal Plan Bug

## Overview

Three interconnected changes to the plan generation architecture:

1. Fix meal plan generation bug (not triggering after check-in)
2. Decouple workout plan generation from check-ins (cron-based renewal)
3. Enrich workout engine with user performance data (hybrid approach)

---

## Task 1: Fix Meal Plan Generation Bug

**Priority: HIGH — Bug fix**

### Investigation

- [ ] Check if the primary AI model (Mercury 2 via OpenRouter) is reachable from prod
- [ ] Verify `DEEPSEEK_API_KEY` is set on prod (currently missing — fallback won't work)
- [ ] Add `ConvexError` to the workflow error paths so failures are visible
- [ ] Test meal plan generation with the test user on dev

### Root cause candidates

1. OpenRouter API error (Mercury 2 model down/timeout)
2. Missing `DEEPSEEK_API_KEY` on prod means no fallback
3. Workflow may have failed silently (errors masked in workpool)
4. Rate limit edge case with seeded plans

### Fix

- [ ] Add DeepSeek API key to prod or switch to Google Gemini as fallback
- [ ] Improve error surfacing in `checkInAndGeneratePlans` workflow
- [ ] Test end-to-end on prod after fix

---

## Task 2: Decouple Workout Plan from Check-in

**Priority: HIGH — Architecture change**

### Current state

- Check-in submission triggers BOTH meal + workout plan generation via `checkInAndGeneratePlans` workflow
- Workout plan duration (30d) is independent from check-in frequency (10d)
- But generation is always tied to check-in submission

### Target state

- Check-in submission triggers ONLY meal plan generation
- Workout plan renewal runs via cron job based on `workout_plan_duration_days`
- New workout plan incorporates ALL check-in data accumulated since last plan

### Implementation steps

- [ ] **Modify `checkInAndGeneratePlans` workflow** — Remove workout plan generation. Only generate meal plans.
- [ ] **Create `workoutPlanRenewal` cron job** in `staticCrons.ts`:
  - Runs daily (e.g., 6 AM UTC)
  - For each active client: check if current workout plan has expired (`endDate < today`)
  - If expired: enqueue workout plan generation via workpool
  - Pass all accumulated check-in data since last workout plan as context
- [ ] **Create `generateWorkoutPlanForRenewal` internal action**:
  - Fetch all check-ins since last workout plan's `startDate`
  - Fetch all exercise logs since last plan
  - Fetch all workout completions since last plan
  - Pass enriched context to workout plan engine
  - Save new plan with correct `startDate`/`endDate`
  - Send notification to user that new workout plan is ready
- [ ] **Update `checkInWorkflow.ts`** — Remove workout-related steps
- [ ] **Update `workpoolManager.ts`** — Keep `enqueueWorkoutPlan` but separate from check-in flow
- [ ] **Update rate limiting** — Remove workout plan from the per-cycle count

### Files to modify

- `convex/checkInWorkflow.ts` — Remove workout generation steps
- `convex/staticCrons.ts` — Add daily workout renewal cron
- `convex/ai.ts` — Add renewal-specific workout generation handler
- `convex/workpoolManager.ts` — Add renewal enqueue function
- `convex/checkIns.ts` — Update rate limiting (only count meals)

---

## Task 3: Enrich Workout Engine (Hybrid Approach)

**Priority: MEDIUM — Feature enhancement**

### Current state

- Workout plan uses fixed goal-based params (strength: 4×3-6, hypertrophy: 3×8-12, etc.)
- Progressive overload only compares exercise names between plans
- Energy/sleep only reduce volume by 20%
- Exercise logs, completion rates, weight trends are UNUSED

### Target state

- Dynamic sets/reps based on actual performance data
- Volume adjustments based on completion rates
- Intensity scaling based on recovery metrics
- Progressive overload using actual weights/reps from exercise logs

### Data sources to integrate

1. **Exercise logs** (`exerciseLogs` table): actualReps, actualSets, actualWeight
2. **Workout completions** (`workoutCompletions` table): session completion rates
3. **Check-in history**: weight trend, energy, sleep, adherence, workoutPerformance notes
4. **Meal completions**: dietary compliance rates

### Implementation steps

- [ ] **Collect performance data** — New function `getWorkoutPerformanceContext(userId, sinceDate)`:
  - Aggregate exercise logs: avg reps completed vs prescribed, weight progression
  - Aggregate completion rates: % sessions completed, % exercises completed
  - Aggregate recovery metrics: avg energy, sleep, adherence over period
  - Detect overperformance (consistently exceeding prescribed reps)
  - Detect underperformance (consistently failing to complete sets)
- [ ] **Dynamic sets/reps algorithm** in `workoutPlanEngine.ts`:
  - Replace hardcoded `GOAL_PARAMS` with dynamic calculation
  - If user consistently completes all sets+reps → increase volume
  - If user frequently skips exercises → reduce volume
  - If recovery metrics low → reduce intensity, increase rest
  - If user logged actual weights → use for progressive overload (not just rep counting)
- [ ] **Adaptive rest periods**: Base rest on recovery metrics, not fixed by goal
- [ ] **Exercise swap intelligence**: If completion rate for an exercise is very low, consider alternatives

### Files to modify

- `convex/workoutPlanEngine.ts` — Core algorithm changes
- `convex/ai.ts` → `generateWorkoutPlanHandler` — Pass enriched context
- New: `convex/workoutPerformanceContext.ts` — Data aggregation helper

---

## Verification

- [ ] Test meal plan generation after check-in (dev + prod)
- [ ] Test workout plan cron renewal (dev)
- [ ] Verify workout plan uses accumulated check-in data
- [ ] Verify dynamic sets/reps adjust based on exercise logs
- [ ] Run `pnpm tsc --noEmit` on convex
- [ ] Deploy to prod and test end-to-end

---

## Previous Tasks (Completed)

### DB Audit & Cleanup ✅

- [x] Clean up auth token bloat
- [x] Remove orphaned exercise log
- [x] Clean E2E test debris
- [x] FAQ Auto-Translation (Bilingual Single Doc)
- [x] Prod deployment prep
- [ ] ⚠️ Auth secrets shared between dev/prod — Generate new ones before going live
- [ ] Add cardio exercises (needs coach input)
- [ ] Add more advanced exercises (needs coach input)
