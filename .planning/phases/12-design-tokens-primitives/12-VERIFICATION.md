---
phase: 12-design-tokens-primitives
verified: 2026-02-21T00:00:00Z
status: passed
score: 16/16 must-haves verified
re_verification: false
---

# Phase 12: Design Tokens and Core Primitives — Verification Report

**Phase Goal:** A consistent design vocabulary exists so every renovated page shares the same visual language
**Verified:** 2026-02-21
**Status:** passed
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths (from Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | App uses softened colors (white backgrounds, subtle borders) instead of brutalist black/cream | VERIFIED | `--color-background: #FAFAFA` and `--color-border: #E8EAED` in all three globals.css; `--color-surface-elevated: #FFFFFF` added |
| 2 | Typography uses normal case throughout — no all-uppercase headings — with clear size hierarchy | VERIFIED | Typography scale comment documents hierarchy (text-xl → text-xs); PageHeader uses `text-xl font-semibold`; no `text-transform: uppercase` in token layer |
| 3 | Animation keyframes (fadeIn, slideUp, slideDown, scaleIn) are defined and respect prefers-reduced-motion | VERIFIED | All five entrance keyframes inside `@theme inline` with `--animate-*` tokens; wildcard `*, ::before, ::after` reduced-motion block present |
| 4 | WidgetCard, PageHeader, Skeleton variants, EmptyState, and button press feedback primitives are available and visually consistent | VERIFIED | All five primitives updated; four new skeleton exports added; `active:scale-[0.97]` standardized codebase-wide |

**Score:** 4/4 success criteria verified

---

### Plan 01 Must-Haves (DS-01, DS-02, DS-03)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Page background is near-white (#FAFAFA), not cream (#FFFEF5) | VERIFIED | `--color-background: #FAFAFA;` at line 52 of client globals.css |
| 2 | Dark-mode override block uses the same near-white value | VERIFIED | `--color-background: #FAFAFA;` at line 153 of client globals.css (inside dark-mode `@media` block) |
| 3 | All three apps (client, admin, marketing) have identical token values | VERIFIED | All three globals.css files have identical `--color-background`, `--color-border`, spacing, animation, and shadow tokens |
| 4 | Shadow comment says 'visible on white' not 'visible on cream' | VERIFIED | `/* Shadows — elevated, visible on white */` at line 91 of client globals.css |
| 5 | No uppercase headings exist in the design token layer | VERIFIED | Typography comment explicitly states "All headings: normal case (no text-transform: uppercase)"; no text-transform utility in token layer |
| 6 | A spacing scale exists in @theme with --spacing-* tokens | VERIFIED | `--spacing-page-x`, `--spacing-page-x-lg`, `--spacing-section-gap`, `--spacing-card-padding`, `--spacing-card-gap` all present at lines 98-103 |
| 7 | Border color is refined (#E8EAED) | VERIFIED | `--color-border: #E8EAED;` at line 61 of client globals.css; identical in admin and marketing |

### Plan 02 Must-Haves (DS-06)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Keyframes defined inside @theme with --animate-* tokens | VERIFIED | `--animate-fade-in`, `--animate-slide-up`, `--animate-slide-down`, `--animate-scale-in`, `--animate-slide-in-bottom` at lines 117-147 of client globals.css; all with keyframes nested inside `@theme inline` |
| 2 | Tailwind auto-generates animate-* utility classes | VERIFIED | `--animate-*` token naming convention in Tailwind v4 `@theme` block auto-generates the corresponding `animate-*` utility classes |
| 3 | All --animate-* tokens include 'both' keyword | VERIFIED | Each token value ends with `both` (e.g., `fadeIn 0.2s ease-out both`) at lines 118-122 |
| 4 | Manual .animate-* utility class definitions outside @theme are removed | VERIFIED | Only `.animate-spin` and `.animate-marquee` remain as manual classes (infinite/looping); entrance animation manual classes deleted |
| 5 | Reduced-motion @media block uses wildcard selector approach | VERIFIED | `*, ::before, ::after` with `animation-duration: 0.01ms !important`, `animation-iteration-count: 1 !important`, `transition-duration: 0.01ms !important`, `scroll-behavior: auto !important` at lines 284-293 |
| 6 | spin and marquee keyframes remain as manual utility classes | VERIFIED | `@keyframes spin`, `@keyframes marquee`, `.animate-spin`, `.animate-marquee` all present outside `@theme` at lines 259-281 |
| 7 | All three apps have identical animation definitions | VERIFIED | admin and marketing globals.css files contain identical animation section |

### Plan 03 Must-Haves (PRIM-01 through PRIM-05)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | WidgetCard shows hover shadow lift on ALL cards and uses active:scale-[0.97] consistently | VERIFIED | `"hover:shadow-lifted"` unconditional at line 63; `onClick && "cursor-pointer active:scale-[0.97]"` at line 64 of widget-card.tsx |
| 2 | WidgetCard uses semantic token classes (bg-primary, bg-nutrition, etc.) | VERIFIED | `FEATURE_ICON_STYLES` at lines 7-28 of widget-card.tsx uses `bg-primary`, `bg-nutrition`, `bg-fitness`, `bg-streak`, `bg-routine` — no hardcoded `bg-[#hex]` values |
| 3 | PageHeader uses text-xl font-semibold | VERIFIED | `<h1 className="text-xl font-semibold">` at line 22 of page-header.tsx |
| 4 | Four new skeleton exports exist: SkeletonWidgetCard, SkeletonMealCard, SkeletonWorkoutCard, SkeletonTicketItem | VERIFIED | All four exported from packages/ui/src/skeleton.tsx at lines 75, 96, 117, 142 |
| 5 | All skeleton variants use rounded-xl, border-border, bg-card, and ms-* (RTL logical properties) | VERIFIED | All four variants use `rounded-xl border border-border bg-card p-4`; icon spacers use `ms-3` |
| 6 | Dashboard loading.tsx uses SkeletonWidgetCard — no brutalist styles remain | VERIFIED | Imports `SkeletonWidgetCard` from `@fitfast/ui/skeleton`; no `bg-black`, `border-black`, or `border-b-4` in loading.tsx |
| 7 | EmptyState has a variant prop supporting 5 color schemes | VERIFIED | `EmptyStateVariant = "default" \| "primary" \| "nutrition" \| "fitness" \| "routine"` at line 8 of empty-state.tsx; `ICON_VARIANTS` map at lines 23-29 |
| 8 | EmptyState icon container uses rounded-2xl and h-16 w-16 | VERIFIED | `"flex h-16 w-16 items-center justify-center mx-auto rounded-2xl"` at line 43 of empty-state.tsx |
| 9 | All interactive elements use active:scale-[0.97] consistently | VERIFIED | Codebase-wide grep for `active:scale` not matching `0.97` returns zero results; button.tsx, widget-card.tsx, bottom-nav.tsx (FAB), tickets page all use `active:scale-[0.97]` |

---

## Required Artifacts

| Artifact | Provides | Status | Details |
|----------|----------|--------|---------|
| `apps/client/src/app/globals.css` | Canonical design token definitions | VERIFIED | `--color-background: #FAFAFA`, spacing scale, animation tokens all present; 294 lines, substantive |
| `apps/admin/src/app/globals.css` | Admin mirror of design tokens | VERIFIED | Identical token values; only difference is absence of Clerk `@layer` declaration |
| `apps/marketing/src/app/globals.css` | Marketing mirror of design tokens | VERIFIED | Identical token values; only difference is absence of Clerk `@layer` declaration |
| `packages/ui/src/widget-card.tsx` | PRIM-01: Polished WidgetCard | VERIFIED | `hover:shadow-lifted` unconditional; semantic bg tokens; 109 lines, substantive |
| `packages/ui/src/page-header.tsx` | PRIM-02: PageHeader with subtitle slot | VERIFIED | `text-xl font-semibold`; `subtitle` prop renders in `text-primary`; 33 lines |
| `packages/ui/src/skeleton.tsx` | PRIM-03: Four new skeleton exports | VERIFIED | All four exports present (SkeletonWidgetCard, SkeletonMealCard, SkeletonWorkoutCard, SkeletonTicketItem); 161 lines |
| `packages/ui/src/empty-state.tsx` | PRIM-05: EmptyState with variants | VERIFIED | `EmptyStateVariant` type exported; `ICON_VARIANTS` map; `h-16 w-16 rounded-2xl`; 57 lines |
| `apps/client/src/app/[locale]/(dashboard)/loading.tsx` | Modern dashboard skeleton | VERIFIED | Imports from `@fitfast/ui/skeleton`; no brutalist styles; 26 lines |

---

## Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `apps/client/src/app/globals.css` | `packages/ui/src/*.tsx` | CSS custom properties → Tailwind utility classes (bg-background, border-border, shadow-card) | VERIFIED | Tokens defined; consumed via class names in widget-card.tsx, skeleton.tsx, empty-state.tsx |
| `apps/client/src/app/[locale]/(dashboard)/loading.tsx` | `packages/ui/src/skeleton.tsx` | `import { SkeletonWidgetCard, Skeleton } from '@fitfast/ui/skeleton'` | VERIFIED | Exact import present at lines 1-2 of loading.tsx; `@fitfast/ui` package.json exports `"./skeleton": "./src/skeleton.tsx"` |
| `packages/ui/src/empty-state.tsx` | `packages/ui/src/button.tsx` | `import { Button } from './button'` | VERIFIED | Import at line 5 of empty-state.tsx; `Button` used at line 51 |

---

## Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|------------|------------|-------------|--------|----------|
| DS-01 | 12-01 | Spacing scale, border refinement, surface-elevated token | SATISFIED | `--spacing-*` tokens, `--color-border: #E8EAED`, `--color-surface-elevated: #FFFFFF` all in globals.css |
| DS-02 | 12-01 | Background softened from cream to near-white | SATISFIED | `--color-background: #FAFAFA` in all three apps (main and dark-mode blocks) |
| DS-03 | 12-01 | Typography scale documented — no uppercase headings | SATISFIED | Typography reference comment in all three globals.css files; no `text-transform: uppercase` in token layer |
| DS-06 | 12-02 | Animation system integrated with @theme, fill-mode: both, reduced-motion wildcard | SATISFIED | `--animate-*` tokens with keyframes inside `@theme`; `both` keyword in all tokens; wildcard reduced-motion block |
| PRIM-01 | 12-03 | WidgetCard: hover shadow on all cards, semantic color tokens | SATISFIED | `hover:shadow-lifted` unconditional; `bg-primary`/`bg-nutrition`/etc. in FEATURE_ICON_STYLES |
| PRIM-02 | 12-03 | PageHeader: mobile-appropriate sizing, subtitle slot | SATISFIED | `text-xl font-semibold` on h1; optional `subtitle` prop with `text-primary` styling |
| PRIM-03 | 12-03 | Four skeleton shape variants | SATISFIED | SkeletonWidgetCard, SkeletonMealCard, SkeletonWorkoutCard, SkeletonTicketItem all exported |
| PRIM-04 | 12-03 | Codebase-wide active:scale-[0.97] consistency | SATISFIED | No `active:scale` variant other than `0.97` found across apps/ and packages/ |
| PRIM-05 | 12-03 | EmptyState with colored icon container variants | SATISFIED | 5-variant system (default, primary, nutrition, fitness, routine); `h-16 w-16 rounded-2xl` container |

No orphaned requirements found — all 9 requirement IDs from the three plans are accounted for in ROADMAP.md Phase 12.

---

## Anti-Patterns Found

None.

- No `TODO/FIXME/PLACEHOLDER` comments in modified files
- No `return null` or empty implementations
- No brutalist remnants (`bg-black`, `border-black`) in dashboard loading.tsx
- No hardcoded `bg-[#hex]` values in WidgetCard icon styles
- No old `animate-slide-in` (pre-rename) class references in component files
- No duplicate entrance `@keyframes` outside the `@theme` block

---

## Human Verification Required

The following items cannot be verified programmatically and should be confirmed by a human before Phase 13 begins:

### 1. Visual background change — cream vs. near-white

**Test:** Open the client app in a browser. Compare page background against a pure `#FFFFFF` element.
**Expected:** Background should appear slightly off-white (#FAFAFA), not cream (#FFFEF5). Cards and modals should visually "pop" against the background.
**Why human:** Color perception difference between `#FFFEF5` (warm cream) and `#FAFAFA` (neutral near-white) requires visual inspection.

### 2. Hover shadow lift on WidgetCard

**Test:** On the home/dashboard screen, hover over any WidgetCard (both clickable and non-clickable variants).
**Expected:** All cards should show a subtle shadow elevation on hover (`shadow-lifted`), not just interactive ones.
**Why human:** Hover behavior requires browser rendering to verify.

### 3. Stagger animation readiness — fill-mode: both

**Test:** If any page already uses `style={{ animationDelay }}` on elements with `animate-slide-up`, verify items do not flash at full opacity before their delay fires.
**Expected:** Items should be invisible before their delay fires, then animate in smoothly.
**Why human:** Animation timing behavior requires visual inspection during the animation.

### 4. EmptyState variant colors in context

**Test:** Render an `EmptyState` component with `variant="nutrition"` and with `variant="primary"`.
**Expected:** Icon container background should be a 10% opacity tint of the respective color (emerald for nutrition, royal blue for primary), with the icon colored to match.
**Why human:** CSS `bg-nutrition/10` opacity rendering requires visual inspection.

---

## Summary

Phase 12 delivered its stated goal. All three layers of the design vocabulary are in place:

**Token layer (Plan 01):** All three apps share identical CSS custom properties — near-white background (#FAFAFA), refined borders (#E8EAED), surface-elevated token, spacing scale, and documented typography hierarchy. The dark-mode override block mirrors the main values, preventing system dark mode from activating.

**Animation layer (Plan 02):** Entrance animation keyframes are integrated into Tailwind's `@theme` block, auto-generating `animate-fade-in`, `animate-slide-up`, `animate-slide-down`, `animate-scale-in`, and `animate-slide-in-bottom` utility classes. All include `animation-fill-mode: both` (required for Phase 13 stagger patterns). The wildcard reduced-motion block covers all current and future animations.

**Primitive layer (Plan 03):** WidgetCard uses semantic color tokens and gives hover shadow lift to all cards. PageHeader is right-sized for mobile. Four named skeleton variants are available for Phase 13 page renovation. Dashboard loading.tsx has no brutalist remnants. EmptyState supports five contextual color variants. `active:scale-[0.97]` is consistent codebase-wide.

Phase 13 (page-level renovation) has everything it needs: token vocabulary, animation system, and polished building blocks.

---

_Verified: 2026-02-21_
_Verifier: Claude (gsd-verifier)_
