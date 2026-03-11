# Plan: Daily Tracking & Progress Pages — Full Overhaul

## Context

Audit revealed 4 critical bugs, 6 additional bugs, multiple accessibility violations, missing data displays, and performance issues across tracking/progress pages. Two rounds of intensive audit (6 explore agents total) uncovered that much of the data already exists in check-ins/completions but is either not wired up, has dead code, or lacks proper UX feedback. The pages are functional at a basic level but well below industry standard (MyFitnessPal, Strong, Fitbod).

**Phases 1-11:** Original plan (P0 bugs → P1 features → P2 features)
**Phases 12-22:** Second audit findings (additional bugs, accessibility, performance, UX polish, hidden data)

---

## Dependency & Parallelism Map

```
WAVE 1 (parallel — no dependencies):
  ├── Phase 1:  Notes persistence bug
  ├── Phase 2:  InBody data in history
  ├── Phase 12: Tracking bug fixes round 2
  └── Phase 13: Backend N+1 fix + rate limiting

WAVE 2 (depends on Wave 1 completing):
  ├── Phase 3:  Adherence stats + measurement charts  ← needs Phase 13 (indexes)
  └── Phase 14: Accessibility pass                    ← needs Phase 2 (photos-tab exists)

WAVE 3 — CodeRabbit P0 checkpoint:
  └── Phase 4:  CodeRabbit review                     ← needs Waves 1-2

WAVE 4 (parallel — after P0 checkpoint):
  ├── Phase 5:  Wellness & adherence trend charts      ← needs Phase 3 (ProgressCharts updated)
  ├── Phase 6:  Streak counter                         ← independent
  ├── Phase 15: Toast & error feedback                 ← needs Phase 1 (notes toggle working)
  ├── Phase 16: Expandable exercise/meal details       ← independent
  └── Phase 17: Display hidden check-in data           ← needs Phase 2 (history-tab updated)

WAVE 5 (parallel — after Wave 4):
  ├── Phase 7:  Rate of change                         ← independent
  ├── Phase 8:  Week-over-week comparison              ← needs Phase 5 (wellness data computed)
  ├── Phase 9:  Before/after photo comparison          ← needs Phase 14 (photos-tab keyboard nav)
  ├── Phase 10: Goal weight visualization              ← needs Phase 5 (ProgressCharts updated)
  ├── Phase 18: Body composition chart                 ← needs Phase 5 (ProgressCharts updated)
  ├── Phase 19: Performance optimizations              ← needs Wave 4 (all components exist)
  ├── Phase 20: Daily completion celebration           ← needs Phase 15 (toast system wired)
  └── Phase 21: Reflection UX polish                   ← independent

WAVE 6 — Final quality gate:
  ├── Phase 11: (merged into Phase 22)
  └── Phase 22: Final CodeRabbit + comprehensive verification ← needs all above
```

**Key dependencies explained:**

- Phase 3 needs Phase 13's indexes to avoid building on the N+1 pattern
- Phase 5 adds charts to ProgressCharts — Phases 8, 10, 18 also modify that component, so they run after
- Phase 15 (toasts) needs Phase 1 (notes toggles work) to add feedback to working mutations
- Phase 19 (perf) should run last before final review since it memoizes/wraps all new components
- Phase 22 is the final gate that merges the old Phase 11

---

## Phase 1: Notes Persistence Bug Fix (P0)

**Goal:** Meal/workout notes entered by the user are saved to the database.

### 1.1 Backend — Add `notes` arg to completion mutations

- [x] **File:** `convex/completions.ts`
- [x] In `toggleMealCompletion` args, add `notes: v.optional(v.string())`
- [x] Add string length guard: `if (args.notes && args.notes.length > 500) throw new Error("Notes too long")`
- [x] In the **insert** path (new completion), include `notes: args.notes` in the document
- [x] In the **patch** path (existing completion), include `notes: args.notes` in the patch object
- [x] Repeat for `toggleWorkoutCompletion` — same `notes` arg, same guard, same insert/patch logic

### 1.2 Hook — Forward `notes` param

- [x] **File:** `apps/client/src/hooks/use-tracking.ts`
- [x] Add `notes?: string` to the params of `toggleMeal` and `toggleWorkout` wrapper functions
- [x] Pass `notes` through to the Convex mutation call

### 1.3 UI — Wire notes from local state to toggle handlers

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/page.tsx`
- [x] When calling `toggleMeal`, pass `notes: mealNotes[mealIndex]` (the existing local state value)
- [x] When calling `toggleWorkout`, pass `notes: workoutNotes` (the existing local state value)

### 1.4 Translations

- [x] **Files:** `apps/client/messages/en.json`, `apps/client/messages/ar.json`
- [x] Add under `tracking` namespace: `"notesSaved"`, `"notesTooLong"` (if showing user-facing error)

### 1.5 Verify Phase 1

- [x] `npx convex dev --once` — no type errors
- [x] Toggle a meal with notes → check Convex dashboard that `notes` field is persisted
- [x] Toggle without notes → verify no regression

---

## Phase 2: InBody Data in Check-in History (P0)

**Goal:** When a check-in has InBody OCR data, show it in the progress history tab.

### 2.1 UI — Add InBody data section to history entries

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/_components/history-tab.tsx`
- [x] After the existing measurements grid, add a conditional block: `if (checkIn.inBodyData)`
- [x] Display fields: body fat %, lean mass (kg), skeletal muscle mass (kg), BMI
- [x] Use a 2-column grid, same styling as existing measurements
- [x] Show a subtle "InBody" badge/label to differentiate from manual measurements

### 2.2 Translations

- [x] **Files:** `en.json`, `ar.json`
- [x] Add under `progress` namespace: `"inBodyData"`, `"bodyFatPercent"`, `"leanMass"`, `"skeletalMuscleMass"`, `"bmi"`, `"inBodyLabel"`

### 2.3 Verify Phase 2

- [x] View a check-in that has `inBodyData` → confirm all 4 fields render
- [x] View a check-in without `inBodyData` → confirm section doesn't appear

---

## Phase 3: Adherence Stats + Measurement Charts (P0)

**Goal:** Wire up the dead-code adherence stats and measurement trend charts in ProgressCharts.

### 3.1 Backend — New `getAdherenceStats` query

- [x] **File:** `convex/completions.ts`
- [x] New query: `getAdherenceStats({ startDate: v.string(), endDate: v.string() })`
- [x] Auth check: `getAuthUserId(ctx)` → throw if null
- [x] Validate date format (YYYY-MM-DD regex)
- [x] Fetch meal completions in range using `by_userId_date` index → count completed vs total
- [x] Fetch workout completions in range using `by_userId_date` index → count completed vs total
- [x] Return `{ mealCompletionRate: number, workoutCompletionRate: number, totalMeals: number, totalWorkouts: number, completedMeals: number, completedWorkouts: number }`

### 3.2 Client — Call query and pass data to charts

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/page.tsx`
- [x] Import and call `getAdherenceStats` with date range from first to last check-in
- [x] Pass the result as `adherenceStats` prop to `ProgressCharts`
- [x] Pass the already-computed `measurementChartData` (from existing `useMemo`) to `ProgressCharts`

### 3.3 Charts — Render measurement trends + adherence bars

- [x] **File:** `apps/client/src/components/charts/ProgressCharts.tsx`
- [x] **Measurement chart:** Multi-line recharts `LineChart` with 5 lines (chest, waist, hips, arms, thighs), each a different color. X-axis = date, Y-axis = cm. Only render lines that have data.
- [x] **Adherence chart:** Two horizontal `BarChart` bars — meal % and workout %. Color-coded (green >80%, yellow 50-80%, red <50%).
- [x] Fix existing dead props that accept but don't render these data structures

### 3.4 Translations

- [x] Add: `"measurementTrends"`, `"adherence"`, `"mealAdherence"`, `"workoutAdherence"`, `"chest"`, `"waist"`, `"hips"`, `"arms"`, `"thighs"`, `"cm"`

### 3.5 Verify Phase 3

- [x] `npx convex dev --once` — no type errors
- [x] Progress Charts tab: measurement trend lines visible for users with body measurement history
- [x] Adherence bars render with correct percentages

---

## Phase 4: CodeRabbit Review — P0 Checkpoint

**Goal:** Quality gate after all P0 bugs are fixed.

### 4.1 Run CodeRabbit review

- [x] `coderabbit review --plain`
- [x] Fix any critical or security findings before proceeding

### 4.2 Build verification

- [x] `pnpm --filter @fitfast/client build` — no build errors

---

## Phase 5: Wellness & Adherence Trend Charts (P1)

**Goal:** Add time-series charts for sleep quality, energy levels, and dietary adherence.

### 5.1 Client — Compute wellness + adherence chart data

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/page.tsx`
- [x] New `useMemo`: compute `wellnessChartData` from check-ins — array of `{ date, sleep, energy }` (both 0-10 scale)
- [x] New `useMemo`: compute `adherenceChartData` from check-ins — array of `{ date, dietaryAdherence }` (0-10 scale)
- [x] Pass both as new props to `ProgressCharts`

### 5.2 Charts — Render wellness + adherence trend lines

- [x] **File:** `apps/client/src/components/charts/ProgressCharts.tsx`
- [x] **Wellness chart:** `LineChart` with 2 lines (sleep = blue, energy = orange), Y-axis 0-10, X-axis = date
- [x] **Dietary adherence chart:** Single-line `LineChart`, Y-axis 0-10
- [x] Add chart section headers with translated labels

### 5.3 Translations

- [x] Add: `"wellnessTrends"`, `"sleepQuality"`, `"energyLevel"`, `"dietaryAdherence"`, `"adherenceTrend"`

### 5.4 Verify Phase 5

- [x] Users with 2+ check-ins should see trend lines
- [x] Users with 0-1 check-ins should see empty state message

---

## Phase 6: Streak Counter (P1)

**Goal:** Show consecutive-day tracking streak on the daily tracking page.

### 6.1 Backend — New `getStreak` query

- [x] **File:** `convex/completions.ts`
- [x] New query: `getStreak({})` — no args
- [x] Auth check: `getAuthUserId(ctx)` → throw if null
- [x] Fetch completions using `by_userId_date` index, ordered desc
- [x] Count consecutive days from today where at least 1 completion exists
- [x] Return `{ currentStreak: number, lastActiveDate: string }`
- [x] Bound: `.take(365)` to limit scan

### 6.2 Client hook

- [x] **New file:** `apps/client/src/hooks/use-streak.ts`
- [x] Wrap `useQuery(api.completions.getStreak)` with auth skip pattern
- [x] Return `{ streak, isLoading }`

### 6.3 UI — Streak badge on tracking header

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/_components/tracking-header.tsx`
- [x] Import `useStreak` hook
- [x] Add flame icon + streak count badge (e.g., using Lucide `Flame` icon)
- [x] Only show when streak > 0
- [x] Use existing `streakDays` translation key if available, else add new one

### 6.4 Translations

- [x] Add/verify: `"streakDays"`, `"streakLabel"`, `"dayStreak"`

### 6.5 Verify Phase 6

- [x] Track meals for 3 consecutive days → streak shows 3
- [x] Skip a day → streak resets to 0

---

## Phase 7: Rate of Change (P2)

**Goal:** Show weight change velocity on the stats overview card.

### 7.1 Client — Compute rate of change

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/page.tsx`
- [x] Compute `rateOfChange`: `(latestWeight - firstWeight) / weeksBetween`
- [x] Pass as prop to `StatsOverview`

### 7.2 UI — Display as subtitle

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/_components/stats-overview.tsx`
- [x] On the "Total Change" card, add subtitle text: e.g., "-0.5 kg/week"
- [x] Color: green if losing (when goal is loss), red if gaining (context-aware if possible, else neutral)

### 7.3 Translations

- [x] Add: `"rateOfChange"`, `"kgPerWeek"`, `"perWeek"`

### 7.4 Verify Phase 7

- [x] User with 2+ check-ins spanning 2+ weeks → shows rate
- [x] User with <2 check-ins → subtitle hidden

---

## Phase 8: Week-over-Week Comparison (P2)

**Goal:** Cards comparing this week vs last week metrics.

### 8.1 New component

- [x] **New file:** `apps/client/src/app/[locale]/(dashboard)/progress/_components/week-comparison.tsx`
- [x] Accept check-ins array as prop
- [x] Split into "this week" and "last week" buckets
- [x] 4 comparison cards: weight change, avg energy, avg sleep, avg dietary adherence
- [x] Green arrow up for improvement, red arrow down for decline
- [x] Use `Card` from `@fitfast/ui`

### 8.2 Wire into progress page

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/page.tsx`
- [x] Import `WeekComparison`, render at top of Charts tab

### 8.3 Translations

- [x] Add: `"weekComparison"`, `"thisWeek"`, `"lastWeek"`, `"improved"`, `"declined"`, `"noChange"`, `"avgEnergy"`, `"avgSleep"`, `"avgAdherence"`, `"weightChange"`

### 8.4 Verify Phase 8

- [x] User with check-ins in both this/last week → shows comparison cards
- [x] User with only 1 week of data → shows graceful "not enough data" state

---

## Phase 9: Before/After Photo Comparison (P2)

**Goal:** CSS slider comparing first and latest check-in photos.

### 9.1 New component

- [x] **New file:** `apps/client/src/app/[locale]/(dashboard)/progress/_components/photo-comparison.tsx`
- [x] Accept `photos` array (from check-ins with photos)
- [x] Select first and latest photos
- [x] CSS-only slider: `<input type="range">` controlling `clip-path` on overlapping images
- [x] Responsive, mobile-first design
- [x] Empty state when <2 photos available

### 9.2 Wire into Photos tab

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/page.tsx`
- [x] Import `PhotoComparison`, render above the existing photo gallery grid in Photos tab

### 9.3 Translations

- [x] Add: `"beforeAfter"`, `"before"`, `"after"`, `"slideToCompare"`, `"needTwoPhotos"`

### 9.4 Verify Phase 9

- [x] User with 2+ check-in photos → slider works, images align
- [x] User with <2 photos → shows "need at least 2 photos" message

---

## Phase 10: Goal Weight Visualization (P2)

**Goal:** Show target weight as a dashed reference line on the weight trend chart.

### 10.1 Backend — Add `targetWeight` to schema

- [x] **File:** `convex/schema.ts`
- [x] Add `targetWeight: v.optional(v.number())` to `initialAssessments` table (backward-compatible)

### 10.2 Backend — Accept `targetWeight` in mutation

- [x] **File:** `convex/assessments.ts`
- [x] Add `targetWeight: v.optional(v.number())` to `submitAssessment` args
- [x] Validation: if provided, must be > 0 and < 500

### 10.3 Charts — Add goal reference line

- [x] **File:** `apps/client/src/components/charts/ProgressCharts.tsx`
- [x] Accept `targetWeight?: number` prop
- [x] Add recharts `ReferenceLine` at `y={targetWeight}` — dashed, labeled "Goal"
- [x] Only render if `targetWeight` is defined

### 10.4 Client — Pass targetWeight to chart

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/page.tsx`
- [x] Query assessment via existing hook, extract `targetWeight`
- [x] Pass to `ProgressCharts`

### 10.5 Translations

- [x] Add: `"targetWeight"`, `"goalWeight"`, `"goalLine"`

### 10.6 Verify Phase 10

- [x] User with `targetWeight` set → dashed line visible on weight chart
- [x] User without → no line rendered

---

## Phase 11: CodeRabbit Review — Final Checkpoint

**Goal:** Quality gate after all P1+P2 features.

### 11.1 Run CodeRabbit review

- [x] `coderabbit review --plain`
- [x] Fix any critical, security, or performance findings

### 11.2 Full build verification

- [x] `npx convex dev --once` — no type errors
- [x] `pnpm --filter @fitfast/client build` — no build errors

### 11.3 Test in Arabic locale

- [x] Verify all new strings appear in Arabic
- [x] Verify RTL layout for new components (charts, comparison cards, photo slider)

---

---

## Phase 12: Tracking Page Bug Fixes Round 2 (P0)

**Goal:** Fix 4 additional bugs found in second audit.

### 12.1 Fix tracking header showing wrong date

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/_components/tracking-header.tsx` (line 24)
- [x] **Bug:** Header always displays `new Date()` (today), not the user's selected date
- [x] **Fix:** Accept `selectedDate` prop, display `formatDateWithWeekday(new Date(selectedDate), locale)`
- [x] **File:** `tracking/page.tsx` — pass `selectedDate` prop to `TrackingHeader`

### 12.2 Clear notes state on date change

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/page.tsx`
- [x] **Bug:** `mealNotes` and `workoutNotes` persist across date changes — user sees stale notes from previous date
- [x] **Fix:** Add `useEffect` that clears both states when `selectedDate` changes

### 12.3 Fix getDayKey off-by-one potential

- [x] **File:** `tracking/page.tsx` (line 49)
- [x] **Bug:** Uses `Math.round()` which can round up to wrong day near midnight
- [x] **Fix:** Change to `Math.floor()` for consistent day boundaries

### 12.4 Fix skeleton max-width mismatch

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/_components/tracking-skeleton.tsx`
- [x] **Bug:** Skeleton uses `max-w-3xl`, real page uses `max-w-5xl` — causes layout shift
- [x] **Fix:** Match skeleton to `max-w-5xl`

### 12.5 Verify Phase 12

- [x] Date change: header updates to selected date, notes clear
- [x] Skeleton matches real layout width

---

## Phase 13: Backend Performance — N+1 Fix + Rate Limiting (P0)

**Goal:** Fix N+1 query pattern in completion toggles and add rate limiting.

### 13.1 Add 3-way composite index for completion lookups

- [x] **File:** `convex/schema.ts`
- [x] Add to `mealCompletions`: `.index("by_planId_date_mealIndex", ["mealPlanId", "date", "mealIndex"])`
- [x] Add to `workoutCompletions`: `.index("by_planId_date_workoutIndex", ["workoutPlanId", "date", "workoutIndex"])`

### 13.2 Fix N+1 in toggleMealCompletion

- [x] **File:** `convex/completions.ts` (~line 72-75)
- [x] **Current:** `.collect()` then `.find(c => c.mealIndex === mealIndex)` — O(n) per toggle
- [x] **Fix:** Use new 3-way index with `.unique()` for O(1) lookup

### 13.3 Fix N+1 in toggleWorkoutCompletion

- [x] **File:** `convex/completions.ts` (~line 108-113)
- [x] Same pattern as 13.2 — replace `.collect().find()` with `.unique()` on new index

### 13.4 Add rate limiting on completion toggles

- [x] **File:** `convex/completions.ts`
- [x] Add to both toggle mutations: `rateLimiter.limit(ctx, "toggleCompletion", { key: userId })` — max ~2 per second per user
- [x] **File:** `convex/rateLimiter.ts` — add `toggleCompletion` rate limit config if not present

### 13.5 Verify Phase 13

- [x] `npx convex dev --once` — schema indexes deploy, no type errors
- [x] Toggle meal rapidly → rate limit kicks in after 2nd rapid click

---

## Phase 14: Accessibility Pass (P1)

**Goal:** Fix WCAG violations across tracking + progress pages.

### 14.1 Photo modal keyboard navigation

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/_components/photos-tab.tsx`
- [x] Add `onKeyDown` handler: Escape closes modal, Left/Right arrows navigate photos
- [x] Add `aria-modal="true"`, `role="dialog"`, `aria-label` to modal container
- [x] Trap focus inside modal when open
- [x] Add visible close button (X) and prev/next arrow buttons

### 14.2 Chart accessibility

- [x] **File:** `apps/client/src/components/charts/ProgressCharts.tsx`
- [x] Add `role="img"` and `aria-label` describing chart content to each `ResponsiveContainer`
- [x] Add visually-hidden data table fallback (`sr-only` class) below each chart with tabular data

### 14.3 Date range button touch targets

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/page.tsx` (date filter buttons)
- [x] Increase padding: `px-3 py-1.5` → `px-4 py-2.5` (minimum 44px height for WCAG 2.5.8)

### 14.4 Circular progress ring accessibility

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/_components/date-progress.tsx`
- [x] Add `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"` to SVG
- [x] Add `aria-label` with percentage text

### 14.5 Screen reader announcements for toggle actions

- [x] **Files:** `meal-tracking.tsx`, `workout-tracking.tsx`
- [x] Add `aria-live="polite"` region that announces completion state changes
- [x] Add `aria-pressed` to toggle buttons

### 14.6 Verify Phase 14

- [x] Tab through tracking page with keyboard only — all interactive elements reachable
- [x] VoiceOver/screen reader: charts described, completion states announced
- [x] Photo modal: Escape closes, arrows navigate

---

## Phase 15: Toast Notifications & Error Feedback (P1)

**Goal:** Provide visible feedback for all async operations; show errors to users.

### 15.1 Add toast on completion toggle

- [x] **Files:** `tracking/page.tsx`
- [x] Import `useToast` from existing hook (`apps/client/src/hooks/use-toast.ts`)
- [x] On successful toggle: show subtle toast (e.g., "Meal completed" / "Workout marked done")
- [x] On failure: show error toast with retry suggestion ("Failed to save. Tap to retry.")
- [x] Replace `console.error` in catch blocks with user-visible toast

### 15.2 Add loading state on date change

- [x] **File:** `tracking/page.tsx`
- [x] When `selectedDate` changes and `trackingData` is refetching (undefined), show a subtle shimmer/dim overlay
- [x] Use existing `isLoading` from `useTracking` hook or derive from `trackingData === undefined`

### 15.3 Reflection save feedback

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/_components/daily-reflection.tsx`
- [x] Show "Saved" confirmation after reflection submission
- [x] Show error toast on failure

### 15.4 Translations

- [x] Add: `"mealCompleted"`, `"workoutCompleted"`, `"saveFailed"`, `"tapToRetry"`, `"saved"`, `"saving"`

### 15.5 Verify Phase 15

- [x] Toggle meal → toast appears briefly, disappears
- [x] Toggle fails (airplane mode) → error toast with retry message
- [x] Change date → subtle loading indicator shown

---

## Phase 16: Expandable Exercise & Meal Details in Tracking (P1)

**Goal:** Show exercise names/sets/reps and meal ingredients inline without navigating away.

### 16.1 Expand workout exercises inline

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/_components/workout-tracking.tsx`
- [x] Add expandable section below workout card: list exercises with name, sets x reps, target weight
- [x] Use `Collapsible` pattern (already used in tracking page)
- [x] Data comes from `workoutPlanData.weeklyPlan[dayKey].exercises` (already available)

### 16.2 Expand meal details inline

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/_components/meal-tracking.tsx`
- [x] Add expandable section below meal card: show meal description, ingredients, portions
- [x] Data comes from `mealPlanData.weeklyPlan[dayKey].meals[mealIndex]` (already available)

### 16.3 Translations

- [x] Add: `"showExercises"`, `"hideExercises"`, `"showMealDetails"`, `"hideMealDetails"`, `"sets"`, `"reps"`, `"ingredients"`, `"portions"`

### 16.4 Verify Phase 16

- [x] Tap workout card → exercises expand inline with sets/reps
- [x] Tap meal card → description/ingredients expand
- [x] Collapse on second tap

---

## Phase 17: Display Hidden Check-in Data (P1)

**Goal:** Surface valuable data already collected in check-ins but not displayed.

### 17.1 Show injury & performance notes in history

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/_components/history-tab.tsx`
- [x] After measurements, add conditional sections for:
  - [x] `checkIn.workoutPerformance` — "Workout Performance" label
  - [x] `checkIn.newInjuries` — "New Injuries" label with warning icon
  - [x] `checkIn.notes` — "Notes" label
- [x] Only render each section if the field has content

### 17.2 Show cycle phase in history (female clients)

- [x] **File:** `history-tab.tsx`
- [x] Add cycle phase badge if `checkIn.cyclePhase` exists and !== "not_tracking"
- [x] Use color-coded pills: menstrual (red), follicular (green), ovulatory (blue), luteal (yellow)
- [x] Only show for users who track this

### 17.3 Show InBody scan thumbnails in photos tab

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/_components/photos-tab.tsx`
- [x] Include `checkIn.inBodyStorageId` photos in the gallery with "InBody Scan" overlay badge
- [x] Use same photo grid + modal pattern

### 17.4 Translations

- [x] Add: `"workoutPerformance"`, `"newInjuries"`, `"checkInNotes"`, `"cyclePhase"`, `"menstrual"`, `"follicular"`, `"ovulatory"`, `"luteal"`, `"inBodyScan"`

### 17.5 Verify Phase 17

- [x] History tab: injury notes show with warning icon
- [x] Female client with cycle tracking: phase badges visible
- [x] Photos tab: InBody scans appear in gallery with badge

---

## Phase 18: Body Composition Trend Chart (P2)

**Goal:** Chart body fat % and lean mass over time from InBody data.

### 18.1 Compute body composition chart data

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/progress/page.tsx`
- [x] New `useMemo`: extract `{ date, bodyFatPercent, leanMass, skeletalMuscleMass }` from check-ins with `inBodyData`
- [x] Pass as `bodyCompositionData` prop to `ProgressCharts`

### 18.2 Render body composition chart

- [x] **File:** `apps/client/src/components/charts/ProgressCharts.tsx`
- [x] New `LineChart` with 2-3 lines: body fat % (red), lean mass (blue), skeletal muscle (green)
- [x] Dual Y-axis: left for % (body fat), right for kg (lean/muscle mass)
- [x] Only render section if data has >=2 points
- [x] Empty state: "Complete InBody scans during check-ins to see body composition trends"

### 18.3 Translations

- [x] Add: `"bodyComposition"`, `"bodyFatTrend"`, `"leanMassTrend"`, `"skeletalMuscleTrend"`, `"noInBodyData"`

### 18.4 Verify Phase 18

- [x] User with 2+ InBody check-ins → body composition chart renders
- [x] User with 0-1 InBody check-ins → empty state message

---

## Phase 19: Performance Optimizations (P2)

**Goal:** Memoize expensive computations, fix React anti-patterns.

### 19.1 Memoize completion percentage calculation

- [x] **File:** `tracking/page.tsx`
- [x] Wrap `calculateCompletionPercentage()` result in `useMemo` depending on `trackingData` and plan data

### 19.2 Memoize getDayKey calls

- [x] **File:** `tracking/page.tsx`
- [x] Wrap `mealDayKey` and `workoutDayKey` in `useMemo`

### 19.3 Add React.memo to tracking sub-components

- [x] **Files:** `meal-tracking.tsx`, `workout-tracking.tsx`, `daily-reflection.tsx`
- [x] Wrap exports in `React.memo()` to prevent unnecessary re-renders from parent state changes

### 19.4 Fix photo grid key anti-pattern

- [x] **File:** `progress/_components/photos-tab.tsx`
- [x] Replace `key={index}` with `key={photo.url}` (URLs are unique)

### 19.5 Remove duplicate photo ID collection

- [x] **File:** `progress/page.tsx`
- [x] `photoStorageIds` array is built in two separate `useMemo` hooks — consolidate into one

### 19.6 Fix photo modal image distortion

- [x] **File:** `progress/_components/photos-tab.tsx`
- [x] Replace hardcoded `width={800} height={600}` (landscape) with `fill` + `object-contain` for proper portrait photo display

### 19.7 Fix animations replaying on expand/collapse

- [x] **File:** `meal-tracking.tsx`
- [x] Only apply `animate-slide-up` on initial mount, not on every expand/collapse cycle
- [x] Use a ref or state to track if first render

### 19.8 Verify Phase 19

- [x] No layout shift on photo modal open
- [x] Photos display in correct portrait aspect ratio
- [x] Toggle tracking sections rapidly — no unnecessary re-renders (React DevTools profiler)

---

## Phase 20: Daily Completion Celebration (P2)

**Goal:** Celebrate when user hits 100% daily completion with a subtle animation.

### 20.1 Detect 100% completion

- [x] **File:** `tracking/page.tsx`
- [x] Track previous completion percentage in a ref
- [x] When percentage transitions from <100 to 100, trigger celebration

### 20.2 Add celebration animation

- [x] **File:** `tracking/page.tsx` or new `_components/completion-celebration.tsx`
- [x] Subtle confetti burst or checkmark animation (CSS keyframes, no heavy library)
- [x] Auto-dismiss after 2 seconds
- [x] Accessible: add `aria-live="assertive"` announcement: "All tasks completed for today!"

### 20.3 Translations

- [x] Add: `"allComplete"`, `"greatJob"`, `"dailyGoalReached"`

### 20.4 Verify Phase 20

- [x] Complete all meals + workout → celebration plays once
- [x] Uncomplete one → no celebration on re-complete (only first time per session)

---

## Phase 21: Reflection UX Polish (P2)

**Goal:** Improve the daily reflection textarea with character counter and save indicator.

### 21.1 Add character counter

- [x] **File:** `apps/client/src/app/[locale]/(dashboard)/tracking/_components/daily-reflection.tsx`
- [x] Show `{currentLength}/3000` below textarea
- [x] Change color at 80% (yellow) and 95% (red) of limit

### 21.2 Add save state indicator

- [x] **File:** `daily-reflection.tsx`
- [x] Show "Saving..." during mutation, "Saved" after success, "Failed" on error
- [x] Use subtle text below the textarea, auto-fade after 2 seconds

### 21.3 Prevent double submission

- [x] Add `isSubmitting` guard to prevent multiple simultaneous reflection submissions

### 21.4 Translations

- [x] Add: `"characters"`, `"reflectionSaving"`, `"reflectionSaved"`, `"reflectionFailed"`

### 21.5 Verify Phase 21

- [x] Type near limit → counter turns yellow/red
- [x] Submit → "Saving..." → "Saved" appears and fades

---

## Phase 22: Final CodeRabbit Review + Comprehensive Verification

**Goal:** Final quality gate after all phases.

### 22.1 Run CodeRabbit review

- [x] `coderabbit review --plain`
- [x] Fix any critical, security, or performance findings

### 22.2 Full build verification

- [x] `npx convex dev --once` — no type errors, new indexes deploy
- [x] `pnpm --filter @fitfast/client build` — no build errors

### 22.3 Arabic locale verification

- [x] All new strings translated in `ar.json`
- [x] RTL layout correct for: charts, comparison cards, photo slider, expandable details, celebration animation, toast messages

### 22.4 Comprehensive functional test

- [x] **Tracking page:**
  - [x] Change date → header updates, notes clear, loading indicator shown
  - [x] Toggle meal with notes → notes persist in DB, toast shown
  - [x] Toggle workout → toast shown, exercises expandable inline
  - [x] Complete all items → celebration animation plays
  - [x] Submit reflection → character counter + save indicator work
  - [x] Streak badge shows correct count
- [x] **Progress page:**
  - [x] Charts tab: weight trend, measurement trends, wellness trends, adherence bars, body composition, week comparison all render
  - [x] History tab: InBody data, injury notes, cycle phase badges visible
  - [x] Photos tab: InBody scans in gallery, before/after slider, modal with keyboard nav
  - [x] Stats: rate of change, goal weight line
- [x] **Keyboard-only navigation:** Tab through all interactive elements
- [x] **Error states:** Toggle in airplane mode → error toast with context

---

## Quality & Backend Standards (applies to ALL phases)

All new/modified Convex queries and mutations must:

- [x] Auth check via `getAuthUserId()` at the top — throw if not authenticated
- [x] Input validation: string length guards (notes max 500 chars), date format validation
- [x] Use existing indexes (`by_userId_date`, `by_planId_date`) — no full table scans
- [x] Bound query results (`.take(N)` or `.collect()` with known small datasets only)
- [x] Ownership verification: verify plan belongs to user before toggling completions

---

## Files Modified Summary

| File                                                              | Phases                        |
| ----------------------------------------------------------------- | ----------------------------- |
| `convex/completions.ts`                                           | 1, 3, 6, 13                   |
| `convex/schema.ts`                                                | 10, 13                        |
| `convex/assessments.ts`                                           | 10                            |
| `convex/rateLimiter.ts`                                           | 13                            |
| `apps/client/src/hooks/use-tracking.ts`                           | 1                             |
| `apps/client/src/hooks/use-streak.ts`                             | 6 (**new**)                   |
| `apps/client/.../tracking/page.tsx`                               | 1, 12, 15, 19, 20             |
| `apps/client/.../tracking/_components/tracking-header.tsx`        | 6, 12                         |
| `apps/client/.../tracking/_components/tracking-skeleton.tsx`      | 12                            |
| `apps/client/.../tracking/_components/meal-tracking.tsx`          | 14, 16, 19                    |
| `apps/client/.../tracking/_components/workout-tracking.tsx`       | 14, 16, 19                    |
| `apps/client/.../tracking/_components/daily-reflection.tsx`       | 15, 19, 21                    |
| `apps/client/.../tracking/_components/date-progress.tsx`          | 14                            |
| `apps/client/.../tracking/_components/completion-celebration.tsx` | 20 (**new**)                  |
| `apps/client/.../progress/page.tsx`                               | 3, 5, 7, 8, 9, 10, 14, 18, 19 |
| `apps/client/.../progress/_components/stats-overview.tsx`         | 7                             |
| `apps/client/.../progress/_components/history-tab.tsx`            | 2, 17                         |
| `apps/client/.../progress/_components/photos-tab.tsx`             | 14, 17, 19                    |
| `apps/client/.../progress/_components/week-comparison.tsx`        | 8 (**new**)                   |
| `apps/client/.../progress/_components/photo-comparison.tsx`       | 9 (**new**)                   |
| `apps/client/src/components/charts/ProgressCharts.tsx`            | 3, 5, 10, 14, 18              |
| `apps/client/messages/en.json`                                    | 1-3, 5-10, 14-21              |
| `apps/client/messages/ar.json`                                    | 1-3, 5-10, 14-21              |
