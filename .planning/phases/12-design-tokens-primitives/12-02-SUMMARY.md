---
phase: 12-design-tokens-primitives
plan: 02
subsystem: ui
tags: [tailwindcss, css, animations, design-tokens, globals-css]

# Dependency graph
requires:
  - phase: 12-01
    provides: "@theme inline token structure in all three globals.css files"
provides:
  - "@theme-integrated entrance animation keyframes with --animate-* tokens"
  - "Tailwind auto-generated animate-fade-in, animate-slide-up, animate-slide-down, animate-scale-in, animate-slide-in-bottom utility classes"
  - "animation-fill-mode: both on all entrance animations (stagger-ready for Phase 13)"
  - "Wildcard reduced-motion support covering all current and future animations"
  - "Consistent animation system across client, admin, marketing, and ui package"
affects:
  - "Phase 13 — Page-Level Renovation (can now use animate-slide-up with style.animationDelay for stagger patterns)"
  - "Any component using animate-slide-in class (renamed to animate-slide-in-bottom)"

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "@theme-integrated @keyframes — entrance animation keyframes defined inside @theme block, not outside it"
    - "animation-fill-mode: both via shorthand — included in --animate-* token value, not a separate property"
    - "Wildcard reduced-motion — *, ::before, ::after with 0.01ms duration instead of per-class listing"

key-files:
  created: []
  modified:
    - apps/client/src/app/globals.css
    - apps/admin/src/app/globals.css
    - apps/marketing/src/app/globals.css
    - packages/ui/styles.css

key-decisions:
  - "[12-02] Entrance @keyframes placed inside @theme block — Tailwind v4 requires keyframes inside @theme for auto-generated animate-* utilities"
  - "[12-02] animation-fill-mode: both included in --animate-* token shorthand value — prevents stagger flash when animationDelay is set via inline style"
  - "[12-02] Wildcard reduced-motion (*, ::before, ::after) replaces per-class listing — future animations are automatically covered without manual maintenance"
  - "[12-02] animate-slide-in renamed to animate-slide-in-bottom — aligns class name with the token name (--animate-slide-in-bottom); no component files used the old name"
  - "[12-02] packages/ui/styles.css updated alongside app globals.css — keep the exported UI package style in sync even though no app currently imports it"

patterns-established:
  - "Animation tokens in @theme: New entrance animations should be added as --animate-* tokens with @keyframes inside the @theme block"
  - "Stagger pattern: Use animate-slide-up class with style={{ animationDelay: '${index * 50}ms' }} for stagger effects (fill-mode: both prevents flash)"

requirements-completed: [DS-06]

# Metrics
duration: 19min
completed: 2026-02-21
---

# Phase 12 Plan 02: Animation System — @theme Integration Summary

**Entrance animation keyframes moved into Tailwind v4 @theme block with fill-mode: both, enabling stagger patterns in Phase 13, plus wildcard reduced-motion replacing fragile per-class approach**

## Performance

- **Duration:** ~19 min
- **Started:** 2026-02-21T18:08:42Z
- **Completed:** 2026-02-21T18:27:00Z
- **Tasks:** 4 (task 4 was no-op — no component references to migrate)
- **Files modified:** 4

## Accomplishments

- All five entrance animation keyframes (fadeIn, slideUp, slideDown, scaleIn, slideInFromBottom) moved into `@theme inline` block across all three app globals.css files and packages/ui/styles.css
- All `--animate-*` tokens include `both` keyword (animation-fill-mode: both) — Phase 13 stagger patterns can use `style={{ animationDelay }}` without pre-animation flash
- Wildcard reduced-motion block replaces per-class listing — covers all current and future animations automatically
- `animate-slide-in` renamed to `animate-slide-in-bottom` (matching `--animate-slide-in-bottom` token name); search confirmed zero component files used the old name
- All three apps build successfully (pnpm build: 3/3 tasks successful)

## Task Commits

Each task was committed atomically:

1. **Task 1+2: Move entrance keyframes into @theme and update reduced-motion in client** - `434c804` (feat)
2. **Task 3: Sync animation changes to admin, marketing, and ui package** - `90327d7` (feat)
3. **Task 4: Audit animate-slide-in references** - `d9dd1c5` (chore — no-op)

## Files Created/Modified

- `apps/client/src/app/globals.css` — Added @theme animation tokens + keyframes, removed duplicate outer keyframes and manual utility classes, wildcard reduced-motion
- `apps/admin/src/app/globals.css` — Same changes mirrored from client
- `apps/marketing/src/app/globals.css` — Same changes mirrored from client
- `packages/ui/styles.css` — Same changes applied for consistency (Rule 2 auto-fix — exported file should match app files)

## Decisions Made

- Placed `@keyframes` inside `@theme` block alongside the `--animate-*` tokens — Tailwind v4 requires this for auto-generation of `animate-*` utility classes
- Used `both` in the shorthand value (e.g., `fadeIn 0.2s ease-out both`) rather than a separate `animation-fill-mode` property — cleaner and fully supported in CSS shorthand
- Wildcard approach uses `0.01ms` not `0s` — this still fires `animationend` events, preventing stuck UI states that depend on animation completion
- `spin`, `marquee`, and `pulse-soft` keyframes kept outside `@theme` with manual `.animate-spin` / `.animate-marquee` classes — these are infinite/looping, not entrance animations; adding them to @theme would generate utilities that set `animation-iteration-count: infinite` which conflicts with wildcard reduced-motion's `iteration-count: 1`

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Consistency] Updated packages/ui/styles.css alongside app globals.css**
- **Found during:** Task 3 (sync to admin and marketing)
- **Issue:** Plan specified only three app globals.css files; packages/ui/styles.css had the identical old pattern and is exported via `@fitfast/ui/styles` path. Leaving it stale would cause inconsistency if ever imported.
- **Fix:** Applied identical animation changes to packages/ui/styles.css (moved @keyframes into @theme, removed manual classes, wildcard reduced-motion)
- **Files modified:** packages/ui/styles.css
- **Verification:** File structure matches all three app globals.css files; no app currently imports it so no runtime impact
- **Committed in:** 90327d7 (Task 3 commit)

---

**Total deviations:** 1 auto-fixed (Rule 2 — missing consistency)
**Impact on plan:** Minor scope extension; packages/ui/styles.css is exported and should stay in sync with app styles. No additional risk.

## Issues Encountered

None — all changes were straightforward CSS token restructuring.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Phase 13 (Page-Level Renovation) can now use stagger patterns: `animate-slide-up` class + `style={{ animationDelay: '${index * 50}ms' }}` without flash
- All Tailwind-generated utility classes work: `animate-fade-in`, `animate-slide-up`, `animate-slide-down`, `animate-scale-in`, `animate-slide-in-bottom`
- Reduced-motion is comprehensive — any new animations added in Phase 13 are automatically covered
- No blockers

---
*Phase: 12-design-tokens-primitives*
*Completed: 2026-02-21*
