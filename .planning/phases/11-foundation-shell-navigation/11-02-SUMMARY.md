---
phase: 11-foundation-shell-navigation
plan: 02
subsystem: navigation
tags: [cleanup, barrel-exports, requirements-audit, dead-code]
dependency-graph:
  requires: [11-01]
  provides: [clean-layouts-directory, requirements-verified]
  affects: [layouts/index.ts, more-menu]
tech-stack:
  added: []
  patterns: [barrel-export-cleanup]
key-files:
  created: []
  modified:
    - apps/client/src/components/layouts/index.ts
    - apps/client/src/components/layouts/more-menu.tsx
  deleted:
    - apps/client/src/components/layouts/sidebar.tsx
    - apps/client/src/components/layouts/header.tsx
    - apps/client/src/components/layouts/dashboard-shell.tsx (v1)
  renamed:
    - apps/client/src/components/layouts/dashboard-shell-v2.tsx -> dashboard-shell.tsx
decisions:
  - Renamed dashboard-shell-v2.tsx to dashboard-shell.tsx now that v1 is gone
  - Fixed more-menu duplicate pb classes using CSS max() function
metrics:
  duration: ~5m
  completed: 2026-02-22
---

# Phase 11 Plan 02: Delete v1 Layout Files + Requirements Audit Summary

Removed all deprecated v1 layout components (sidebar, old header, old dashboard-shell) and verified all 10 Phase 11 requirements.

## What was done

### Task 1: Delete deprecated v1 layout files

- Confirmed no imports of Sidebar, Header (v1), or dashboard-shell (v1) exist in the codebase
- Deleted: `sidebar.tsx`, `header.tsx`, `dashboard-shell.tsx` (v1)
- Renamed `dashboard-shell-v2.tsx` to `dashboard-shell.tsx`
- Updated barrel export `index.ts` to export only v2 components: DashboardShell, MobileHeader, DesktopTopNav, BottomNav, MoreMenu

### Task 2: Requirements verification audit

All 10 Phase 11 requirements verified:

| Requirement                | Status | Evidence                                                            |
| -------------------------- | ------ | ------------------------------------------------------------------- |
| NAV-01 (pill bottom nav)   | PASS   | `rounded-2xl`, `mx-3`, `shadow-lg` in bottom-nav.tsx                |
| NAV-02 (desktop top nav)   | PASS   | 9 nav items in desktop-top-nav.tsx, `lg+` breakpoint                |
| NAV-03 (mobile header)     | PASS   | Page title + action icons, no hamburger Menu import                 |
| NAV-04 (More bottom sheet) | PASS   | Vaul Drawer with Tracking, Progress, Tickets, FAQ                   |
| NAV-05 (active states)     | PASS   | Primary color + indicator dot on both navs                          |
| NAV-06 (badge indicators)  | PASS   | Red dot on check-in, count on tickets (Plan 11-01)                  |
| NAV-07 (keyboard hiding)   | PASS   | `useKeyboardVisible` returns null when open                         |
| DS-04 (safe areas)         | PASS   | `viewport-fit: cover` in layout.tsx, `env(safe-area-inset-*)` usage |
| DS-05 (animations)         | PASS   | fadeIn, slideUp, slideDown, scaleIn keyframes in globals.css        |
| DESK-01 (desktop nav)      | PASS   | Same as NAV-02                                                      |

- Fixed more-menu.tsx: duplicate `pb-6 pb-[env(...)]` changed to `pb-[max(1.5rem,env(safe-area-inset-bottom))]`

## Commits

| Task | Commit  | Description                                                                  |
| ---- | ------- | ---------------------------------------------------------------------------- |
| 1    | 0cc67fd | chore(11-02): delete v1 layout files and clean barrel exports                |
| 2    | 638dcc7 | fix(11-02): fix more-menu duplicate pb classes + verify all nav requirements |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed more-menu duplicate padding-bottom**

- **Found during:** Task 2
- **Issue:** `pb-6 pb-[env(safe-area-inset-bottom)]` -- Tailwind applies last class, safe-area-inset may be 0 on non-notched devices losing the pb-6 spacing
- **Fix:** Merged to `pb-[max(1.5rem,env(safe-area-inset-bottom))]`
- **Files modified:** more-menu.tsx
- **Commit:** 638dcc7

## Verification

- `pnpm type-check` passes across all 3 packages
- No imports of deleted files remain
- Layouts directory contains exactly: dashboard-shell.tsx, mobile-header.tsx, bottom-nav.tsx, desktop-top-nav.tsx, more-menu.tsx, index.ts
- All 10 requirements confirmed in code
