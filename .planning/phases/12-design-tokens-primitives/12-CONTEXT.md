# Phase 12 Context — Design Tokens and Core Primitives

## Phase Boundary

Extend and refine the existing design vocabulary — softened palette, typography hierarchy, animation system, and polished primitives — so Phase 13 pages share a consistent modern visual language.

**Scope:** Design system infrastructure only. No page-level layout changes (that's Phase 13). No new features or backend changes.

**Downstream consumers:** Phase 13 (Page-Level Renovation), Phase 14 (Check-in Wizard and Onboarding), Phase 15 (RTL Audit and Polish).

---

## Decisions

### Animation & Micro-interactions

| Element | Decision | Notes |
|---------|----------|-------|
| Button press | `active:scale-[0.97]` subtle scale-down | Keep current behavior — feels native iOS-like |
| Card lift | Shadow lift on tap/hover for ALL cards | Not just clickable ones — gives depth and tactile feedback |
| Staggered entrance | Yes — list items and cards cascade in | ~50ms delay between each item |
| Page transitions | Claude's discretion | Pick what feels best for mobile-native feel |
| Animation approach | CSS-only (no framer-motion) | Key Decision from v1.1 research — saves 34KB |

### Color Refinement (Claude's Discretion)

- Soften the palette per success criteria: white backgrounds, subtle borders, reduced visual noise
- User trusts Claude's judgment on specific values
- Must work in both light theme contexts and maintain WCAG AA contrast ratios
- Royal blue brand color stays — refine supporting/neutral colors

### Typography Hierarchy (Claude's Discretion)

- Establish clear size scale across the app
- No uppercase headings — feels aggressive on mobile
- Claude decides specific sizes, weights, and line-heights
- Must feel readable on 390px mobile viewport

### Primitive Polish (Claude's Discretion)

- Refine shared components: WidgetCard, PageHeader, EmptyState, Skeleton
- Claude decides visual details (border-radius, padding, shadow levels)
- Consistency across all primitives is the priority
- Must look correct in both LTR and RTL layouts

---

## Constraints

- **CSS-only animations** — no framer-motion (decided in v1.1 research, saves 34KB)
- **Tailwind v4** — use CSS custom properties and `@theme` where appropriate
- **RTL-safe** — all visual changes must work with `dir="rtl"`
- **Mobile-first** — 390px is the primary viewport; desktop (1440px) secondary
- **No breaking changes** — existing pages should look the same or better after token updates

## Open Questions

None — all areas either have explicit decisions or are delegated to Claude's discretion.
