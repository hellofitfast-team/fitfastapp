---
phase: 11-foundation-shell-navigation
plan: 01
subsystem: navigation
tags: [nav-badges, bottom-nav, desktop-nav, convex-query, rtl]
dependency-graph:
  requires: [convex/checkIns, convex/tickets, convex/helpers]
  provides: [convex/navBadges, useNavBadges-hook, badge-indicators]
  affects: [bottom-nav, desktop-top-nav, dashboard-shell]
tech-stack:
  added: []
  patterns: [convex-query-badge-aggregation, nav-badge-hook-pattern]
key-files:
  created:
    - convex/navBadges.ts
    - apps/client/src/hooks/useNavBadges.ts
  modified:
    - apps/client/src/components/layouts/bottom-nav.tsx
    - apps/client/src/components/layouts/desktop-top-nav.tsx
    - apps/client/src/components/layouts/dashboard-shell-v2.tsx
    - convex/_generated/api.d.ts
decisions:
  - Badge data served via single Convex query for efficiency (one query per page load, reactive)
  - Check-in due uses same logic as getLockStatus (frequency-based)
  - Unread tickets = status "coach_responded" for current user
  - Badge count capped at 9+ in UI for compact display
metrics:
  duration: ~10m
  completed: 2026-02-22
---

# Phase 11 Plan 01: Badge Indicators + Pill-shaped Bottom Nav Summary

Real-time badge indicators on navigation via Convex query aggregating check-in due status and unread ticket count, plus pill-shaped floating bottom nav.

## What was done

### Task 1: Convex navBadges query and client hook

- Created `convex/navBadges.ts` with `getNavBadges` query returning `{ checkInDue: boolean, unreadTicketCount: number }`
- `checkInDue` logic: if no check-in exists OR current time >= next check-in date (using `getCheckInFrequencyDays`)
- `unreadTicketCount`: count of tickets with status "coach_responded" for the authenticated user
- Created `apps/client/src/hooks/useNavBadges.ts` wrapping the query with auth gating
- Updated `convex/_generated/api.d.ts` to include the new module

### Task 2: Badge indicators and pill shape

- **Bottom nav pill shape**: Replaced full-width bar with `rounded-2xl mx-3 mb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-lg`
- **Check-in FAB badge**: Red dot (`h-3 w-3 bg-error-500`) on FAB circle when `checkInDue` is true
- **More button badge**: Count badge (`bg-error-500`) showing unread ticket replies (capped at "9+")
- **Desktop nav badges**: Added `badge` prop to `NavLink` supporting "dot" or number variants
  - Check-in item: dot badge when due
  - Tickets item: count badge for unread replies
- **Dashboard shell**: Updated main content bottom padding to account for floating pill margin
- All badge positions use logical properties (`end-0`, `-end-0.5`) for RTL support

## Commits

| Task | Commit  | Description                                                       |
| ---- | ------- | ----------------------------------------------------------------- |
| 1    | 54a7eec | feat(11-01): add navBadges Convex query and useNavBadges hook     |
| 2    | d031ae7 | feat(11-01): add badge indicators to nav + pill-shaped bottom nav |

## Deviations from Plan

None -- plan executed exactly as written.

## Verification

- `pnpm type-check` passes across all 3 packages
- Bottom nav renders as floating pill (not full-width bar)
- Badge indicators use conditional rendering based on Convex query data
- All badges use logical CSS properties for RTL support
