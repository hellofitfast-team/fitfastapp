---
phase: 12-design-tokens-primitives
plan: 03
subsystem: ui
tags: [tailwindcss, design-tokens, shadcn, skeleton, empty-state, widget-card, page-header, rtl]

# Dependency graph
requires:
  - phase: 12-01
    provides: semantic color tokens (bg-primary, bg-nutrition, bg-fitness, bg-streak, bg-routine) and typography scale
  - phase: 12-02
    provides: animation system with CSS variables

provides:
  - PRIM-01: WidgetCard with hover shadow on all cards and semantic color tokens
  - PRIM-02: PageHeader with text-xl font-semibold and optional subtitle slot
  - PRIM-03: Four new skeleton variants (SkeletonWidgetCard, SkeletonMealCard, SkeletonWorkoutCard, SkeletonTicketItem)
  - PRIM-04: Codebase-wide active:scale-[0.97] consistency (bottom-nav, tickets page fixed)
  - PRIM-05: EmptyState with colored icon container variants and larger h-16 w-16 rounded-2xl container
  - Modern dashboard loading skeleton using SkeletonWidgetCard (no brutalist remnants)

affects:
  - phase 13 (page-level renovation uses all polished primitives)
  - phase 14 (check-in wizard uses skeleton variants and empty states)
  - phase 15 (RTL audit — ms-* logical properties already in place on all new skeletons)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Semantic color tokens in component icon styles (bg-primary vs bg-[#hex]) — future components should use semantic tokens
    - SkeletonWidgetCard/SkeletonMealCard/etc. as composable loading shapes (not generic placeholder)
    - EmptyState variant prop pattern for contextual theming without component duplication
    - hover:shadow-lifted unconditional on all cards (not gated by interactivity) for consistent affordance

key-files:
  created: []
  modified:
    - packages/ui/src/widget-card.tsx
    - packages/ui/src/page-header.tsx
    - packages/ui/src/skeleton.tsx
    - packages/ui/src/empty-state.tsx
    - apps/client/src/app/[locale]/(dashboard)/loading.tsx
    - apps/client/src/components/layouts/bottom-nav.tsx
    - apps/client/src/app/[locale]/(dashboard)/tickets/page.tsx

key-decisions:
  - "hover:shadow-lifted is unconditional on WidgetCard (all cards get it, not just clickable ones) — consistent visual affordance"
  - "active:scale standardized at 0.97 codebase-wide to match Button — bottom-nav FAB (was 0.95/scale-95) and tickets link (was 0.99) corrected"
  - "EmptyState icon container changed from rounded-full to rounded-2xl h-16 w-16 — more prominent, matches WidgetCard's icon shape language"
  - "skeleton variants use bg-card not bg-white — matches the card background token for dark mode readiness"

patterns-established:
  - "Semantic token pattern: component color maps use bg-primary/bg-nutrition/etc. not bg-[#hex]"
  - "Skeleton shape pattern: named exports that match specific card shapes (SkeletonWidgetCard, not SkeletonGeneric)"
  - "ms-* logical property pattern: all skeleton flex gaps use ms-3 not ml-3 for RTL compatibility"
  - "Variant prop pattern: EmptyState/WidgetCard accept variant/featureColor for contextual theming"

requirements-completed:
  - PRIM-01
  - PRIM-02
  - PRIM-03
  - PRIM-04
  - PRIM-05

# Metrics
duration: 25min
completed: 2026-02-21
---

# Phase 12 Plan 03: UI Primitives Polish Summary

**Five core UI primitives polished with semantic tokens, shape variants, and consistent press scale — WidgetCard, PageHeader, Skeleton (four new variants), EmptyState, and dashboard loading skeleton**

## Performance

- **Duration:** ~25 min
- **Started:** 2026-02-21T00:00:00Z
- **Completed:** 2026-02-21
- **Tasks:** 5 of 5
- **Files modified:** 7

## Accomplishments

- WidgetCard now uses semantic color tokens (bg-primary etc.) and hover shadow lifts on all cards (not just clickable ones)
- PageHeader downsized to text-xl font-semibold with new optional subtitle slot for Phase 13 context lines
- Four new skeleton shape variants (SkeletonWidgetCard, SkeletonMealCard, SkeletonWorkoutCard, SkeletonTicketItem) added to skeleton.tsx
- Dashboard loading.tsx replaced — no more brutalist bg-black/border-black styles, uses SkeletonWidgetCard grid
- EmptyState upgraded with five color variants, h-16 w-16 rounded-2xl icon container (was h-14 w-14 rounded-full)
- Codebase-wide active:scale standardized at 0.97 (fixed bottom-nav FAB at scale-95, tickets link at 0.99)

## Task Commits

Each task was committed atomically:

1. **Task 1: Polish WidgetCard** - `d81fd54` (feat)
2. **Task 2: Polish PageHeader** - `e8fb393` (feat)
3. **Task 3: Add four skeleton variant exports** - `7b1db04` (feat)
4. **Task 4: Replace brutalist dashboard loading** - `61b0772` (feat)
5. **Task 5: Polish EmptyState** - `65cb1d3` (feat)

## Files Created/Modified

- `packages/ui/src/widget-card.tsx` - Semantic bg tokens, unconditional hover shadow, active:scale-[0.97]
- `packages/ui/src/page-header.tsx` - text-xl font-semibold, subtitle prop
- `packages/ui/src/skeleton.tsx` - Four new named exports: SkeletonWidgetCard, SkeletonMealCard, SkeletonWorkoutCard, SkeletonTicketItem
- `packages/ui/src/empty-state.tsx` - EmptyStateVariant type, ICON_VARIANTS map, h-16 w-16 rounded-2xl container
- `apps/client/src/app/[locale]/(dashboard)/loading.tsx` - Full replacement with modern skeleton layout
- `apps/client/src/components/layouts/bottom-nav.tsx` - FAB active:scale-95 -> active:scale-[0.97]
- `apps/client/src/app/[locale]/(dashboard)/tickets/page.tsx` - Link active:scale-[0.99] -> active:scale-[0.97]

## Decisions Made

- hover:shadow-lifted is unconditional on WidgetCard — all cards (not just interactive ones) get the shadow lift on hover for consistent visual affordance
- active:scale standardized at exactly 0.97 to match Button — bottom-nav FAB was using shorthand `scale-95` class (Tailwind preset) and tickets link had 0.99
- EmptyState icon container changed from `rounded-full` to `rounded-2xl` to match WidgetCard's icon shape language and feel more prominent
- Skeleton variants use `bg-card` not `bg-white` for future dark mode readiness

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed active:scale-95 in bottom-nav FAB**

- **Found during:** Task 1 (codebase-wide active:scale audit per plan instructions)
- **Issue:** Bottom nav check-in FAB used Tailwind preset `active:scale-95` (equivalent to 0.95) instead of the standardized 0.97
- **Fix:** Changed to `active:scale-[0.97]` and `transition-all` (was `transition-transform`)
- **Files modified:** apps/client/src/components/layouts/bottom-nav.tsx
- **Verification:** No remaining active:scale-95 in codebase
- **Committed in:** d81fd54 (Task 1 commit)

**2. [Rule 1 - Bug] Fixed active:scale-[0.99] in tickets page link**

- **Found during:** Task 1 (codebase-wide active:scale audit per plan instructions)
- **Issue:** Ticket list Link used 0.99 (barely perceptible) instead of the standardized 0.97
- **Fix:** Changed to `active:scale-[0.97]` and `transition-all` (was `transition-colors` which doesn't handle transforms)
- **Files modified:** apps/client/src/app/[locale]/(dashboard)/tickets/page.tsx
- **Verification:** No remaining scale outliers in codebase
- **Committed in:** d81fd54 (Task 1 commit)

---

**Total deviations:** 2 auto-fixed (2 × Rule 1 — bugs found during planned codebase-wide audit)
**Impact on plan:** Both fixes were explicitly within scope — Task 1 instructions said "grep the codebase and fix any active:scale outliers". Not scope creep.

## Issues Encountered

- First `pnpm build` failed with ENOTEMPTY on apps/client/.next/server — stale directory from prior dev session. Fixed by `rm -rf apps/client/.next` before rebuilding. Not a code issue.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- All five primitives are polished and build successfully
- Phase 13 page renovation can consume WidgetCard (semantic colors), PageHeader (subtitle), all skeleton variants, and EmptyState (variants)
- No blockers

---

_Phase: 12-design-tokens-primitives_
_Completed: 2026-02-21_

## Self-Check: PASSED

- FOUND: packages/ui/src/widget-card.tsx
- FOUND: packages/ui/src/page-header.tsx
- FOUND: packages/ui/src/skeleton.tsx
- FOUND: packages/ui/src/empty-state.tsx
- FOUND: apps/client/src/app/[locale]/(dashboard)/loading.tsx
- FOUND commit: d81fd54 (Task 1)
- FOUND commit: e8fb393 (Task 2)
- FOUND commit: 7b1db04 (Task 3)
- FOUND commit: 61b0772 (Task 4)
- FOUND commit: 65cb1d3 (Task 5)
