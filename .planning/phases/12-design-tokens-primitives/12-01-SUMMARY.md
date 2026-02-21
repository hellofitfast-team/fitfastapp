---
phase: 12-design-tokens-primitives
plan: 01
subsystem: ui
tags: [tailwind, css-custom-properties, design-tokens, globals-css, spacing-scale, typography]

# Dependency graph
requires: []
provides:
  - Near-white (#FAFAFA) background token across all three apps
  - Refined border token (#E8EAED) for subtlety against white background
  - --color-surface-elevated (#FFFFFF) for elevated UI surfaces (modals, bottom sheets)
  - Spacing scale tokens (--spacing-page-x, --spacing-section-gap, --spacing-card-padding, --spacing-card-gap)
  - Typography scale reference comment for Phase 13 consumption
  - Identical design tokens across client, admin, and marketing apps
affects: [13-page-level-renovation, 14-checkin-wizard-onboarding]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - CSS custom properties in @theme inline block consumed as Tailwind utility classes
    - Dark-mode override block mirrors main @theme values to prevent system dark-mode from activating
    - Spacing tokens use rem units for accessibility-safe layout rhythm
    - Typography scale documented as CSS comment (not tokens) since Tailwind text-* utilities already handle this

key-files:
  created: []
  modified:
    - apps/client/src/app/globals.css
    - apps/admin/src/app/globals.css
    - apps/marketing/src/app/globals.css

key-decisions:
  - "Background token changed from cream #FFFEF5 to near-white #FAFAFA — reads as white, slightly warmer than harsh #FFFFFF, already in the neutral scale"
  - "Border token changed from #e5e5e5 to #E8EAED — slightly cooler/lighter for better contrast against near-white without being invisible"
  - "Typography scale documented as CSS comment (not CSS custom properties) — Tailwind built-in text-* and font-* utilities already handle this; comment serves as Phase 13 guide"
  - "Only difference between three globals.css files is client's Clerk @layer declaration — all token values are identical"

patterns-established:
  - "Spacing scale tokens: use --spacing-* CSS custom properties for layout rhythm (--spacing-page-x, --spacing-section-gap, --spacing-card-padding, --spacing-card-gap)"
  - "Surface elevation hierarchy: background (#FAFAFA) < card (#FFFFFF) = surface-elevated (#FFFFFF) — elevated surfaces pop against near-white page bg"
  - "Typography scale: text-xl font-semibold (page title), text-lg font-semibold (section), text-base font-medium (card), text-sm (body), text-xs (caption)"

requirements-completed: [DS-01, DS-02, DS-03]

# Metrics
duration: 15min
completed: 2026-02-21
---

# Phase 12 Plan 01: Design Tokens and Primitives Summary

**Near-white background (#FAFAFA), refined borders (#E8EAED), surface-elevated token, and spacing/typography scale added across all three apps (client, admin, marketing)**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-02-21T00:00:00Z
- **Completed:** 2026-02-21
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments
- Changed `--color-background` from cream (#FFFEF5) to near-white (#FAFAFA) in all three apps — main and dark-mode override blocks
- Changed `--color-border` from #e5e5e5 to #E8EAED in all three apps — more subtle against white background
- Added `--color-surface-elevated: #FFFFFF` for elevated surfaces (modals, bottom sheets, headers that need to pop)
- Added spacing scale tokens in all three apps: `--spacing-page-x`, `--spacing-page-x-lg`, `--spacing-section-gap`, `--spacing-card-padding`, `--spacing-card-gap`
- Added typography scale reference comment in all three apps as a guide for Phase 13
- Updated shadow comment from "visible on cream" to "visible on white"
- All three globals.css files are now identical except for client's Clerk `@layer` declaration
- Build passes for all three apps

## Task Commits

Each task was committed atomically:

1. **Tasks 1+2: Update client color tokens and add spacing/typography scale** - `a50ba38` (feat)
2. **Task 3: Sync admin and marketing globals.css** - `4a0e523` (feat)

## Files Created/Modified
- `apps/client/src/app/globals.css` - Updated background, border, added surface-elevated, spacing scale, typography comment
- `apps/admin/src/app/globals.css` - Mirror of client token changes (without Clerk @layer)
- `apps/marketing/src/app/globals.css` - Mirror of client token changes (without Clerk @layer)

## Decisions Made
- Background changed from cream #FFFEF5 to near-white #FAFAFA: reads as white, slightly warmer than harsh #FFFFFF, already present in the neutral scale
- Border changed from #e5e5e5 to #E8EAED: slightly cooler/lighter, better contrast against near-white without being invisible
- Typography documented as CSS comment (not custom properties): Tailwind's built-in text-* and font-* utilities already handle sizing; the comment serves as a reference guide for Phase 13

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All three apps share a consistent, documented token foundation
- Phase 13 (page-level renovation) has a spacing scale and typography hierarchy to follow
- The `--color-surface-elevated` token is available for bottom sheets and modals
- No visual regressions — existing pages look the same or better on near-white background

---
*Phase: 12-design-tokens-primitives*
*Completed: 2026-02-21*
