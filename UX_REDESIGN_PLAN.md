# Plan: Tracking & Progress UX Redesign + Per-Exercise Workout Logging

## Context

The previous overhaul wired up missing data (adherence, charts, InBody, streak, etc.) but the **visual UX is unchanged** — all cards look the same, no color hierarchy, flat progress indicators, text-heavy. The tracking page feels like a form, not a fitness app.

Bigger problem: **workout logging is fundamentally broken** — clients can only mark an entire workout done/not done. No per-exercise tracking, no weight logging, no rep logging, no progressive overload history. Coaches can't see what clients actually did.

**This plan has two parts:**

1. **Part A**: Per-exercise workout logging system (backend + UI)
2. **Part B**: Visual UX redesign of tracking + progress pages

---

## Part A: Per-Exercise Workout Logging System

### A1. New `exerciseLogs` Table

**File:** `convex/schema.ts`

```typescript
exerciseLogs: defineTable({
  userId: v.string(),
  workoutPlanId: v.id("workoutPlans"),
  date: v.string(), // YYYY-MM-DD
  exerciseIndex: v.number(), // position in day's exercises array
  exerciseName: v.string(), // denormalized for history queries
  sets: v.array(
    v.object({
      setIndex: v.number(),
      weight: v.optional(v.number()), // kg
      reps: v.optional(v.number()), // actual reps completed
      completed: v.boolean(),
    }),
  ),
  notes: v.optional(v.string()),
  completedAt: v.optional(v.number()), // timestamp when all sets done
})
  .index("by_userId_date", ["userId", "date"])
  .index("by_planId_date_exercise", ["workoutPlanId", "date", "exerciseIndex"])
  .index("by_userId_exerciseName", ["userId", "exerciseName"]);
```

**Why nested sets array:** ~5 exercises x ~4 sets = 20 set entries per workout. One doc per exercise (not per set) keeps doc count at ~15,000/week for 750 clients. 90-day retention = ~180K docs max, ~36MB.

### A2. Backend Mutations & Queries

**New file:** `convex/exerciseLogs.ts`

| Function                | Type     | Purpose                                                                                                 |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `logExerciseSet`        | mutation | Upsert a single set within an exercise log. Auth + ownership + rate limit.                              |
| `logExerciseBulk`       | mutation | Write all sets for an exercise at once (for "save all" UX).                                             |
| `getWorkoutLog`         | query    | Get all exercise logs for a date (by_userId_date index).                                                |
| `getExerciseHistory`    | query    | Last 20 sessions for an exercise name (by_userId_exerciseName index). For progressive overload display. |
| `getClientExerciseLogs` | query    | Coach query — get client's exercise logs for a date (requireCoach).                                     |

**Auto-completion logic:** When all exercises for a workout day have `completedAt` set, auto-upsert `workoutCompletions.completed = true`. When any set is un-completed, set it back to `false`. Existing streak/adherence queries keep working with zero changes.

**Backward compatibility:** The old "mark whole workout done" toggle remains as a quick-complete fallback — creates exercise logs with `completed: true` but no weight/reps data.

### A3. Client Hook

**New file:** `apps/client/src/hooks/use-exercise-logs.ts`

- Wraps `getWorkoutLog` query + `logExerciseSet` / `logExerciseBulk` mutations
- Also wraps `getExerciseHistory` for the history drawer

### A4. Data Retention

**File:** `convex/dataRetention.ts` — add `exerciseLogs` cleanup alongside existing completions.

### A5. Admin Visibility

**File:** `convex/clientInsights.ts` — extend to return exercise log summary (count, has detailed logs).

**New component:** `apps/admin/.../clients/[id]/_components/workout-log-card.tsx` — shows prescribed vs actual for each exercise on a date.

---

## Part B: Visual UX Redesign

### Design System Constraints — NO New Colors or Fonts

All visual changes MUST use only existing design tokens from `apps/client/src/app/globals.css`. No new colors, fonts, shadows, or radius values will be introduced.

**Colors (CSS variables already defined):**

- `--color-primary` / `--color-primary-foreground` — Orange #FF4500 (main brand)
- `--color-nutrition` — Emerald #10B981 (meal/nutrition features)
- `--color-fitness` — Orange #F97316 (workout/fitness features)
- `--color-streak` — Amber #F59E0B (streak/consistency)
- `--color-routine` — Violet #8B5CF6 (routine/habits)
- `--color-muted` / `--color-muted-foreground` — Neutral grays
- `--color-destructive` — Red for errors
- Standard Tailwind palette colors (amber-100, emerald-50, etc.) only as tints of the above

**Fonts (already in layout.tsx):**

- Cairo — Arabic/RTL text
- Outfit — accent headings
- System sans-serif fallback for body

**Shadows:**

- `--shadow-card` (subtle card elevation)
- `--shadow-lifted` (hover/active state lift)

**Radius:**

- `--radius-lg` (12px) — cards
- `--radius-xl` (16px) — modals/drawers

**Rule:** Every color reference in Part B must map to one of the above tokens. Tailwind utility classes like `bg-primary/10`, `text-nutrition`, `bg-fitness/10` are the correct pattern.

### B1. Tracking Page Header Redesign

**File:** `tracking/_components/tracking-header.tsx`

**Current:** Small title + tiny text badges in a row.
**New:**

- Large bold greeting area with date
- **Hero progress ring** — 80px+ circular progress (not buried in a card), color fills as percentage increases (gray → amber → green at 100%)
- Streak flame prominently beside the ring (not a small badge)
- Below: two colored stat pills — meals (nutrition color) + workout (fitness color) — each with a mini progress bar fill inside

### B2. Tracking Page — Workout Section Redesign

**File:** `tracking/_components/workout-tracking.tsx` (major rewrite)

**Current:** Single checkbox + read-only exercise list.
**New per-exercise logging UI:**

Each exercise becomes an expandable card:

- **Collapsed:** Exercise name + completion badge (0/4 sets) + last session weight hint
- **Expanded:** Set-by-set logging table:
  ```
  Set 1:  [60 kg]  x  [10 reps]  [✓]
  Set 2:  [60 kg]  x  [8 reps]   [✓]
  Set 3:  [    ]   x  [    ]     [ ]
  ```

  - Weight input pre-filled from last session (progressive overload UX)
  - Rep input shows planned reps as placeholder (e.g., "10-12")
  - Individual set checkmarks
  - "Last time: 60kg × 10" hint text below each row
- **Exercise complete** indicator when all sets checked
- **Workout auto-complete** when all exercises done → triggers celebration toast
- **Quick complete** button at bottom as fallback (marks everything done without logging details)
- Tap exercise name → opens **exercise history drawer** (last 10-20 sessions, simple table)

### B3. Tracking Page — Meal Section Visual Polish

**File:** `tracking/_components/meal-tracking.tsx`

- Larger meal name text (base instead of sm)
- Color-coded meal type badges (breakfast=amber, lunch=green, dinner=blue, snack=purple)
- Macro chips with background colors instead of plain text
- Completion checkbox transitions: gray → green with scale animation
- Ingredients section gets a cleaner card treatment (not just gray box)

### B4. Tracking Page — Overall Layout

**File:** `tracking/page.tsx`

- Sticky date picker bar at top (stays visible on scroll)
- Loading state: skeleton shimmer instead of opacity dim
- Section spacing increased from space-y-4 to space-y-6
- Meal and workout sections get colored left borders (nutrition green, fitness orange)

### B5. Progress Page — Stats Cards

**File:** `progress/_components/stats-overview.tsx`

- Key numbers in 3xl-4xl font (currently sm/base)
- Rate of change gets its own dedicated card (not a subtitle)
- Trend arrows larger (20px) with bold color backgrounds
- Card hover: subtle lift effect (`hover:-translate-y-0.5 hover:shadow-lg`)

### B6. Progress Page — Charts Visual Polish

**File:** `components/charts/ProgressCharts.tsx`

- Section cards get feature-color accent headers (not all neutral)
- Weight chart: gradient fill under the line (not just a line)
- Adherence bars: use feature colors (nutrition green, fitness orange) not generic success/primary
- Empty states: illustrated placeholders instead of just icon + text

### B7. Progress Page — Photos Tab

**Files:** `progress/_components/photos-tab.tsx`, `photo-comparison.tsx`

- Before/after slider: add date labels with larger font, subtle shadow on handle
- Photo grid: 3 columns on mobile (currently 2), larger thumbnails
- Modal: swipe gesture support (currently arrow keys only)

### B8. New Component — Exercise History Drawer

**New file:** `tracking/_components/exercise-history-drawer.tsx`

- Uses `@fitfast/ui/drawer` (already exists in UI library)
- Shows last 10-20 sessions in a compact table: Date | Weight | Reps per set
- Highlights personal bests (max weight, max reps)
- Shows trend direction (up/down arrow)

---

## Implementation Order

**Quality gates per phase:** Each phase ends with a CodeRabbit review (`coderabbit review --plain`). All critical/security findings must be fixed before moving to the next phase.

**Code quality standards:**

- Every new function gets a JSDoc comment explaining purpose, params, and return value
- Every new component gets a comment block at top explaining what it renders and when
- Complex logic gets inline comments explaining the "why"
- All mutations validate inputs, check auth, rate-limit, and verify ownership
- All queries handle unauthenticated state gracefully (return empty/null, not throw)
- No `any` types — explicit TypeScript annotations on all public interfaces
- All new routes/pages must be bug-free: handle loading, error, empty, and authenticated states

### Phase 1: Backend — exerciseLogs Schema + Mutations

- [x] 1.1: Add `exerciseLogs` table to `convex/schema.ts` with 3 indexes
- [x] 1.2: Create `convex/exerciseLogs.ts` — `logExerciseSet` mutation (upsert single set, auth + rate limit + ownership)
- [x] 1.3: Create `logExerciseBulk` mutation (write all sets for an exercise at once)
- [x] 1.4: Create `getWorkoutLog` query (all exercise logs for user + date)
- [x] 1.5: Create `getExerciseHistory` query (last 20 sessions for exercise name)
- [x] 1.6: Create `getClientExerciseLogs` coach query (requireCoach guard)
- [x] 1.7: Implement auto-completion logic (all exercises done → upsert workoutCompletions)
- [x] 1.8: Add `exerciseLogs` cleanup to `convex/dataRetention.ts`
- [x] 1.9: Deploy schema — `npx convex dev --once`
- [x] 1.10: **CodeRabbit review** → fix all findings

### Phase 2: Client Hook + Workout Logging UI

- [x] 2.1: Create `apps/client/src/hooks/use-exercise-logs.ts` hook
- [x] 2.2: Rewrite `workout-tracking.tsx` — expandable exercise cards with set-by-set logging
- [x] 2.3: Weight input pre-fill from last session (progressive overload UX)
- [x] 2.4: Rep input with planned reps as placeholder
- [x] 2.5: Exercise complete indicator + workout auto-complete celebration toast
- [x] 2.6: Quick-complete fallback button (marks all done without details)
- [x] 2.7: Create `exercise-history-drawer.tsx` — last 10-20 sessions table, PB highlights
- [x] 2.8: EN + AR translations for all new exercise logging strings
- [x] 2.9: `tsc --noEmit` + manual test of exercise logging flow
- [x] 2.10: **CodeRabbit review** → fix all findings

### Phase 3: Tracking Page — Header + Layout Redesign

- [x] 3.1: Redesign `tracking-header.tsx` — hero progress ring (SVG circle), prominent streak
- [x] 3.2: Two colored stat pills (nutrition + fitness) with mini progress bar fill
- [x] 3.3: Make `DateProgress` sticky at top on scroll
- [x] 3.4: Increase section spacing (space-y-4 → space-y-6)
- [x] 3.5: Add colored left borders — nutrition green for meals, fitness orange for workouts
- [x] 3.6: Loading state: use `TrackingSkeleton` consistently (not opacity dim)
- [x] 3.7: `tsc --noEmit` + visual verification
- [x] 3.8: **CodeRabbit review** → fix all findings

### Phase 4: Tracking Page — Meal Section Visual Polish

- [x] 4.1: Larger meal name text (base instead of sm)
- [x] 4.2: Color-coded meal type badges (breakfast=amber, lunch=nutrition, dinner=primary, snack=routine)
- [x] 4.3: Macro chips with tinted background colors (not plain text)
- [x] 4.4: Completion checkbox transition — gray → green with subtle scale animation
- [x] 4.5: Cleaner ingredients card treatment (subtle border, not gray box)
- [x] 4.6: EN + AR translations for any new meal tracking strings
- [x] 4.7: `tsc --noEmit` + visual verification
- [x] 4.8: **CodeRabbit review** → fix all findings

### Phase 5: Progress Page — Stats + Charts Redesign

- [x] 5.1: Stats cards — key numbers in 3xl font, trend arrows with color backgrounds
- [x] 5.2: Card hover lift effect (`hover:-translate-y-0.5 hover:shadow-lifted`)
- [x] 5.3: Weight chart — gradient fill under line (using existing primary/nutrition colors)
- [x] 5.4: Adherence bars — nutrition green + fitness orange (not generic colors)
- [x] 5.5: Section cards — feature-color accent headers
- [x] 5.6: `tsc --noEmit` + visual verification
- [x] 5.7: **CodeRabbit review** → fix all findings

### Phase 6: Progress Page — Photos + Admin + Final Verification

- [x] 6.1: Photo grid — 3 columns on mobile, larger thumbnails
- [x] 6.2: Before/after slider — larger date labels, shadow on handle
- [x] 6.3: Extend `convex/clientInsights.ts` with exercise log summary
- [x] 6.4: Create `admin/.../workout-log-card.tsx` — prescribed vs actual for coach view
- [x] 6.5: EN + AR translations for all remaining new strings
- [x] 6.6: Full build verification — `tsc --noEmit` + `npx convex dev --once` + `pnpm build`
- [x] 6.7: **Final CodeRabbit review** → fix all critical/security findings

---

## Critical Files

| File                                                      | Changes                                              |
| --------------------------------------------------------- | ---------------------------------------------------- |
| `convex/schema.ts`                                        | Add `exerciseLogs` table                             |
| `convex/exerciseLogs.ts`                                  | **New** — all exercise log mutations/queries         |
| `convex/dataRetention.ts`                                 | Add `exerciseLogs` cleanup                           |
| `convex/clientInsights.ts`                                | Extend with exercise log summary                     |
| `apps/client/src/hooks/use-exercise-logs.ts`              | **New** — hook wrapping exercise log queries         |
| `tracking/_components/workout-tracking.tsx`               | Major rewrite — per-exercise set logging             |
| `tracking/_components/exercise-history-drawer.tsx`        | **New** — progressive overload history view          |
| `tracking/_components/tracking-header.tsx`                | Redesign — hero progress ring, prominent streak      |
| `tracking/_components/meal-tracking.tsx`                  | Visual polish — colors, typography, animations       |
| `tracking/page.tsx`                                       | Layout — sticky date, spacing, colored borders       |
| `progress/_components/stats-overview.tsx`                 | Bigger numbers, hover effects, dedicated rate card   |
| `components/charts/ProgressCharts.tsx`                    | Gradient fills, feature colors, better empty states  |
| `progress/_components/photos-tab.tsx`                     | 3-col grid, better modal                             |
| `admin/.../clients/[id]/_components/workout-log-card.tsx` | **New** — coach sees prescribed vs actual            |
| `messages/en.json`, `messages/ar.json`                    | New translation keys for exercise logging + redesign |

---

## Verification

- `npx convex dev --once` — schema deploys, no type errors
- `pnpm --filter @fitfast/client exec tsc --noEmit` — zero TS errors
- `pnpm --filter @fitfast/client build` — production build passes
- Exercise logging: log sets for 3 exercises → workout auto-completes → streak updates
- Progressive overload: log same exercise on 2 dates → history drawer shows both sessions
- Admin: view client's exercise log for a date → see prescribed vs actual
- Arabic: all new strings translated, RTL layout correct
- CodeRabbit: `coderabbit review --plain` → fix all critical/security findings
