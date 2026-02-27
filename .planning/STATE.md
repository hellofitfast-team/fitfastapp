# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-17)

**Core value:** Every user flow works reliably, looks polished, and feels consistent in both languages
**Current focus:** v1.1 Mobile UI Renovation — Phase 15.1: Unit Tests and Code Review

## Current Position

Milestone: v1.1 Mobile UI Renovation
Status: In progress — Phase 15.1 starting
Phase: Phase 15.1 — Unit Tests and Code Review for Client, Admin, and Marketing Apps
Plan: Plan 0 (Full Codebase Review) starting
Progress: [##############......] 14/21 plans (67%)
Started: 2026-02-17

## Previous Milestone

v1.0 Polish & Rebrand — SHIPPED 2026-02-16

- 10 phases, 32 plans, 218 files changed, 134 commits, 9 days

## v1.1 Phase Overview

| Phase | Name                                            | Plans | Status      |
| ----- | ----------------------------------------------- | ----- | ----------- |
| 11    | Foundation — Shell and Navigation               | 2/2   | Complete    |
| 11.1  | Auth, Authorization, and Marketing Landing Page | 7/7   | Complete    |
| 12    | Design Tokens and Core Primitives               | 3/3   | Complete    |
| 13    | Page-Level Renovation                           | 0/7   | Not started |
| 14    | Check-in Wizard and Onboarding                  | 1/3   | In progress |
| 15    | RTL Audit and Polish                            | 0/3   | Not started |
| 15.1  | Unit Tests and Code Review                      | 0/7   | Starting    |

Total: 6 phases, 21+ plans, 65 requirements

## Accumulated Context

### Pending Todos (carried from v1.0)

- AI-generated meal/workout plans are in English even when user locale is Arabic
- Push notifications hardcoded in English
- Ticket system is single-response — needs thread-style conversation
- AI model names and parameters hardcoded — should move to env vars
- localhost:3000 fallback in OpenRouter headers

### v1.1 Notes

- UI-only milestone — no backend/API/business logic changes
- Phases start at 11 (continuing from v1.0's 10 phases)
- Phase 13 and 14 can execute in parallel (both depend on Phase 12, not each other)
- Must verify RTL/Arabic on all renovated pages (Phase 15)
- Must verify mobile (390px) and desktop (1440px) viewports
- New dependencies: Vaul (shadcn drawer) in Phase 11, react-swipeable in Phase 14
- Research recommends parallel build + swap strategy for layout components

### Key Decisions

- CSS-only animations (no framer-motion) — saves 34KB, sufficient for v1.1 scope
- Vaul for bottom sheets (via shadcn drawer) — canonical choice, ~3-5KB
- react-swipeable for check-in wizard swipe — 1.5KB, hook-based
- Parallel build + swap for layout shell — zero-risk rollback
- Marketing app uses plain ConvexProvider (not ConvexProviderWithClerk) — fully public, no auth
- getTranslations (server-side) for landing page — preserves server component benefits over useTranslations

### Roadmap Evolution

- Phase 11.1 inserted after Phase 11: Auth, Authorization, and Marketing Landing Page (URGENT)
- Phase 15.1 inserted after Phase 15: Unit Tests and Code Review (URGENT)

### Blockers/Concerns

None.

## Session Continuity

Last session: 2026-02-26
Stopped at: Starting Phase 15.1 — Full Codebase Review
Resume file: .planning/phases/15.1-unit-tests-and-code-review-for-client-admin-and-marketing-apps/

---

_State initialized: 2026-02-12_
_Last updated: 2026-02-26 — Phase 15.1 starting: codebase review + test infrastructure_
