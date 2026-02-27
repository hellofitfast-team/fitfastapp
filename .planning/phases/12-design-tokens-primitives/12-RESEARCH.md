# Phase 12: Design Tokens and Core Primitives - Research

**Researched:** 2026-02-22
**Domain:** CSS design tokens (Tailwind v4), component primitives, animation, accessibility
**Confidence:** HIGH

## Summary

Phase 12 builds the visual vocabulary for FitFast's v1.1 renovation. The codebase already has significant groundwork -- `globals.css` uses Tailwind v4's `@theme inline` block with a well-structured token system (colors, radii, shadows, z-indices, layout dimensions), animation keyframes with reduced-motion support, and key primitives (WidgetCard, PageHeader, EmptyState, Skeleton variants) already exist in `@fitfast/ui`.

The remaining work is incremental refinement, not greenfield creation. The main background is still `#FFFEF5` (cream) rather than pure white, one dashboard loading skeleton still uses brutalist `border-4 border-black` patterns, animations exist but are not registered as Tailwind theme values (they are plain CSS classes), and the skeleton/empty-state components need minor visual alignment updates. The primitives are functionally complete but need visual polish to match the "modern clean" direction.

**Primary recommendation:** Refine existing `@theme inline` tokens (shift background to white, add typography scale tokens), register animation utilities properly in the Tailwind theme, and polish existing primitives rather than rebuilding them.

<phase_requirements>

## Phase Requirements

| ID      | Description                                                                       | Research Support                                                                                                                                                                                        |
| ------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DS-01   | Extend @theme tokens -- modern rounded corners, soft shadows, spacing scale       | Existing `@theme inline` already has radius and shadow tokens. Need to add spacing scale and possibly typography scale tokens. Corners and shadows are already modernized.                              |
| DS-02   | Soften brutalist palette -- white background, subtle borders, modern feel         | Background is `#FFFEF5` (cream), needs to become `#FFFFFF` or `#FAFAFA`. `loading.tsx` still has brutalist `border-4 border-black`. All other pages already use `border-border` (subtle).               |
| DS-03   | Typography -- normal case, readable fonts, proper hierarchy                       | No `uppercase` usage found in app components (only in `offline.html` static page). Fonts are already clean (system sans, Cairo for Arabic, Outfit available). Need to formalize a type scale in tokens. |
| DS-06   | Respect prefers-reduced-motion media query                                        | Already implemented in `globals.css` lines 277-285. Covers fadeIn, slideIn, slideUp, slideDown, scaleIn. Needs to also cover `animate-spin` and `animate-marquee` for completeness.                     |
| PRIM-01 | WidgetCard -- compact stat/widget card for dashboard grid                         | Already exists at `packages/ui/src/widget-card.tsx` with feature colors, trend display, icon support, click handler, and active:scale feedback. Functionally complete.                                  |
| PRIM-02 | PageHeader -- consistent page title + breadcrumb component                        | Already exists at `packages/ui/src/page-header.tsx`. Simple but effective: title, description, action slot. No breadcrumb yet -- may need adding if required.                                           |
| PRIM-03 | Skeleton loading variants -- home cards, meal cards, workout cards, ticket list   | Base `Skeleton`, `SkeletonText`, `SkeletonCircle`, `SkeletonCard` exist. Page-specific skeletons exist in tracking and progress. Dashboard `loading.tsx` needs rewrite (still brutalist).               |
| PRIM-04 | Button press feedback -- active:scale-95 + transition on all interactive elements | Already implemented: Button has `active:scale-[0.97]`, WidgetCard has `active:scale-[0.98]`. Consistent pattern exists.                                                                                 |
| PRIM-05 | Empty state component -- SVG illustration + message + CTA button                  | Already exists at `packages/ui/src/empty-state.tsx` with LucideIcon, title, description, action button. Uses icon instead of SVG illustration -- may need update.                                       |

</phase_requirements>

## Standard Stack

### Core (Already In Use)

| Library                  | Version  | Purpose                                | Status                   |
| ------------------------ | -------- | -------------------------------------- | ------------------------ |
| TailwindCSS              | v4       | Utility-first CSS with `@theme inline` | Already configured       |
| class-variance-authority | ^0.7.1   | Component variant management           | Already in `@fitfast/ui` |
| tailwind-merge           | ^3.4.0   | Class deduplication                    | Already in `@fitfast/ui` |
| clsx                     | ^2.1.1   | Conditional classes                    | Already in `@fitfast/ui` |
| lucide-react             | ^0.563.0 | Icons for primitives                   | Already in `@fitfast/ui` |
| @radix-ui/\*             | Various  | Accessible primitives                  | Already in `@fitfast/ui` |

### No New Dependencies Needed

This phase is pure CSS tokens + component refinement. No new packages required.

## Architecture Patterns

### Current Token Architecture (Tailwind v4)

```
apps/client/src/app/globals.css    -- Client tokens + animations + base styles
apps/admin/src/app/globals.css     -- Admin tokens (identical palette, simpler setup)
packages/ui/src/                   -- Components reference tokens via Tailwind classes
```

**How Tailwind v4 `@theme inline` works:**

- Variables declared in `@theme inline { }` become first-class Tailwind utilities
- `--color-primary: #4169E1` generates `bg-primary`, `text-primary`, `border-primary`, etc.
- `--shadow-card: ...` generates `shadow-card` utility
- `--radius-lg: ...` generates `rounded-lg` utility
- The `inline` keyword means values are inlined (no CSS custom property reference), which is correct for this project's no-dark-mode approach

### Token Organization (Current)

```
@theme inline {
  /* 1. Color palette (brand, neutral, semantic, feature-specific) */
  /* 2. Background/foreground semantic aliases */
  /* 3. Fonts */
  /* 4. Border radius scale */
  /* 5. Layout dimensions (header, nav heights) */
  /* 6. Z-index scale */
  /* 7. Shadow scale */
}
```

### What Needs Adding to @theme

```css
@theme inline {
  /* Typography scale -- currently missing, should formalize */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  /* Spacing scale -- currently using Tailwind defaults, could add custom */
  --spacing-page: 1rem; /* px-4 equivalent, page gutters */
  --spacing-section: 1.25rem; /* space between sections */
  --spacing-card: 1.25rem; /* internal card padding (p-5) */

  /* Animation durations -- register for Tailwind utility generation */
  --animate-fade-in: fadeIn 0.2s ease-out;
  --animate-slide-up: slideUp 0.3s ease-out;
  --animate-slide-down: slideDown 0.3s ease-out;
  --animate-scale-in: scaleIn 0.2s ease-out;
}
```

### Primitive Component Architecture

```
packages/ui/src/
  widget-card.tsx       -- Dashboard stat cards (EXISTS, needs minor polish)
  page-header.tsx       -- Page titles (EXISTS, needs minor polish)
  skeleton.tsx          -- Loading skeletons (EXISTS: base, text, circle, card)
  empty-state.tsx       -- Empty content states (EXISTS, functional)
  section-card.tsx      -- Feature-colored section cards (EXISTS, complete)
  page-container.tsx    -- Page layout wrapper (EXISTS, complete)
  button.tsx            -- Buttons with press feedback (EXISTS, complete)
  card.tsx              -- Base card component (EXISTS, complete)
```

### Pattern: Registering Animations in Tailwind v4

In Tailwind v4, to make animations available as utilities (e.g., `animate-fade-in` directly in Tailwind), register them in `@theme`:

```css
@theme inline {
  --animate-fade-in: fadeIn 0.2s ease-out;
  --animate-slide-up: slideUp 0.3s ease-out;
  --animate-slide-down: slideDown 0.3s ease-out;
  --animate-scale-in: scaleIn 0.2s ease-out;
}
```

Currently, the codebase defines `@keyframes` and then manually creates `.animate-*` utility classes. Migrating to `@theme` registration would make these proper Tailwind utilities that work with Tailwind's class system (arbitrary values, responsive, etc.). However, this is optional -- the current approach works fine.

### Anti-Patterns to Avoid

- **Hardcoded color values in components:** Use `bg-card`, `border-border`, `text-foreground` -- never `bg-white`, `bg-[#FFFFFF]` in component source
- **Duplicating tokens between client and admin globals.css:** Both files are already near-identical. Consider whether to extract shared tokens, but current duplication is acceptable for 2 files
- **Over-engineering the type scale:** Tailwind v4 already provides `text-xs` through `text-3xl` with sensible defaults. Only add custom tokens if the scale needs non-standard values

## Don't Hand-Roll

| Problem               | Don't Build                 | Use Instead                            | Why                                        |
| --------------------- | --------------------------- | -------------------------------------- | ------------------------------------------ |
| Component variants    | Manual class concatenation  | `cva` from class-variance-authority    | Already used in Button, consistent pattern |
| Class merging         | String concatenation        | `cn()` utility (clsx + tailwind-merge) | Already exists at `@fitfast/ui/cn`         |
| Icon system           | Custom SVG components       | lucide-react                           | Already in use, 1000+ icons                |
| Accessible primitives | Custom dialog/drawer/select | @radix-ui/\*                           | Already in use across the UI package       |
| CSS custom properties | Sass/Less variables         | Tailwind v4 `@theme inline`            | Already the established pattern            |

## Common Pitfalls

### Pitfall 1: Tailwind v4 @theme inline vs @theme

**What goes wrong:** Using `@theme` (without `inline`) generates CSS custom property references, which means dark mode could override them. Using `@theme inline` bakes values directly into utilities.
**Why it happens:** Tailwind v4 documentation shows both forms.
**How to avoid:** This project already correctly uses `@theme inline` and explicitly overrides dark mode to maintain the same light-only scheme. Keep this pattern.

### Pitfall 2: Animation classes outside @layer

**What goes wrong:** The current `.animate-*` classes are defined outside any `@layer`, which means they have higher specificity than `@layer components` or `@layer utilities`. This is actually correct for animation utilities that should "just work."
**How to avoid:** Keep animation utility classes outside `@layer` blocks OR register them in `@theme`. Do not put them in `@layer components` as they would lose specificity battles.

### Pitfall 3: RTL letter-spacing reset

**What goes wrong:** Arabic text with `letter-spacing` looks wrong because Arabic is cursive and doesn't use letter spacing.
**Why it happens:** Tailwind's `tracking-*` utilities apply uniformly.
**How to avoid:** Already handled in `globals.css` with `[dir="rtl"] .tracking-* { letter-spacing: 0; }`. Any new tracking utilities need to be added to this list.

### Pitfall 4: Forgetting to sync admin globals.css

**What goes wrong:** Token changes in client `globals.css` are not reflected in admin `globals.css`, causing visual inconsistency between apps.
**How to avoid:** When modifying `@theme inline` tokens, update BOTH `apps/client/src/app/globals.css` AND `apps/admin/src/app/globals.css`. Consider a checklist step for this.

### Pitfall 5: prefers-reduced-motion incomplete coverage

**What goes wrong:** The current reduced-motion block covers 5 animation classes but misses `animate-spin` and `animate-marquee`.
**How to avoid:** For `animate-spin`, keep it (accessibility: spinners indicate loading, removing them hides status). For `animate-marquee`, either disable or slow it significantly.

### Pitfall 6: Background cream (#FFFEF5) vs white (#FFFFFF)

**What goes wrong:** The "softened" background `#FFFEF5` is almost white but has a warm cream tint. The phase goal says "white backgrounds" -- changing to `#FFFFFF` affects the entire app feel.
**How to avoid:** Decision needed: pure `#FFFFFF` for background, or `#FAFAFA` (neutral-50) for a very subtle warmth without the cream. Recommend `#FFFFFF` for `--color-background` to match the "white backgrounds" requirement.

## Code Examples

### Current Token Declaration Pattern (verified from globals.css)

```css
/* Source: apps/client/src/app/globals.css lines 9-96 */
@theme inline {
  --color-primary: #4169e1;
  --color-background: #fffef5; /* Change to #FFFFFF */
  --color-card: #ffffff;
  --color-border: #e5e5e5;
  --shadow-card: 0 2px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  --radius-xl: 1rem;
}
```

### Current Animation Pattern (verified from globals.css)

```css
/* Source: apps/client/src/app/globals.css lines 207-285 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in {
    animation: none;
  }
}
```

### Current Button Press Feedback (verified from button.tsx)

```tsx
/* Source: packages/ui/src/button.tsx line 9 */
const buttonVariants = cva("... transition-all ... active:scale-[0.97]", {
  /* variants */
});
```

### Current WidgetCard Pattern (verified from widget-card.tsx)

```tsx
/* Source: packages/ui/src/widget-card.tsx lines 58-66 */
<Comp className={cn(
  "rounded-xl border border-border bg-card p-4 text-start shadow-card transition-all",
  onClick && "cursor-pointer hover:shadow-lifted active:scale-[0.98]",
  className
)}>
```

### Brutalist Loading Skeleton to Replace (verified from loading.tsx)

```tsx
/* Source: apps/client/src/app/[locale]/(dashboard)/loading.tsx -- NEEDS REWRITE */
/* Still using: border-4, border-black, bg-black, border-e-4 */
<div className="py-2 px-4 bg-black">
<div className="border-b-4 border-black px-6 py-8">
```

## State of the Art

| Aspect              | Current State                             | Target State                      | Gap                                  |
| ------------------- | ----------------------------------------- | --------------------------------- | ------------------------------------ |
| Background color    | `#FFFEF5` (cream)                         | `#FFFFFF` (white)                 | Single token change                  |
| Border style        | `border-border` (#e5e5e5) in most places  | Same                              | Already done (except loading.tsx)    |
| Typography casing   | Normal case throughout                    | Normal case                       | Already done (no uppercase found)    |
| Animation keyframes | 7 keyframes defined, 7 utility classes    | Same + proper reduced-motion      | Near-complete, extend reduced-motion |
| WidgetCard          | Exists, feature-colored, interactive      | Same                              | Already done                         |
| PageHeader          | Exists, title+description+action          | Same                              | Already done                         |
| Skeleton variants   | 4 base variants + page-specific           | Polish + update dashboard loading | Dashboard loading.tsx needs rewrite  |
| EmptyState          | Exists with icon+title+desc+CTA           | Same                              | Already done                         |
| Button feedback     | `active:scale-[0.97]` on Button           | Same                              | Already done                         |
| Safe area           | Already in use (`env(safe-area-inset-*)`) | Same                              | Already done (Phase 11)              |

## Inventory of Changes Needed

### Minimal Changes (tokens)

1. Change `--color-background` from `#FFFEF5` to `#FFFFFF` (both globals.css files)
2. Change `--color-cream` from `#FFFEF5` to `#FFFFFF` or remove
3. Update dark mode override block to match
4. Optionally add spacing/typography semantic tokens

### Minimal Changes (animations)

1. Extend `prefers-reduced-motion` to cover `animate-marquee`
2. Optionally register animations in `@theme inline` for Tailwind-native usage

### Component Updates

1. Rewrite `apps/client/src/app/[locale]/(dashboard)/loading.tsx` to use modern card-based skeleton (remove all `border-4 border-black`)
2. Minor visual consistency review of existing primitives (already solid)

### Files That Need Modification

| File                                                   | Change                                                                             |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `apps/client/src/app/globals.css`                      | Update background token, extend reduced-motion, optionally add spacing/type tokens |
| `apps/admin/src/app/globals.css`                       | Mirror client token changes                                                        |
| `apps/client/src/app/[locale]/(dashboard)/loading.tsx` | Rewrite from brutalist to modern card-based skeleton                               |
| `packages/ui/src/skeleton.tsx`                         | Possibly add `SkeletonWidget` variant for dashboard grid                           |

## Open Questions

1. **Typography scale as tokens vs Tailwind defaults**
   - What we know: Tailwind v4 ships with `text-xs` through `text-9xl` built-in
   - What's unclear: Whether the phase requires custom semantic tokens (e.g., `--text-heading`, `--text-body`) or just ensuring consistent usage of existing Tailwind scale
   - Recommendation: Don't add custom typography tokens unless there is a specific non-standard size needed. Document the intended type hierarchy (h1=2xl bold, h2=xl semibold, body=base, caption=sm muted) as a convention

2. **EmptyState: SVG illustration vs Lucide icon**
   - What we know: PRIM-05 says "SVG illustration + message + CTA button" but current implementation uses LucideIcon
   - What's unclear: Whether actual SVG illustrations are needed or if the Lucide icon approach is sufficient
   - Recommendation: Keep Lucide icon approach -- it's simpler, consistent, and avoids maintaining custom SVG assets. The icon-in-circle pattern already looks good.

3. **PageHeader breadcrumb**
   - What we know: PRIM-02 says "page title + breadcrumb" but current PageHeader has title + description + action
   - What's unclear: Whether breadcrumbs are actually needed in a mobile-first PWA
   - Recommendation: Skip breadcrumbs for mobile. The current title + back-button pattern is more appropriate for a PWA.

## Sources

### Primary (HIGH confidence)

- `apps/client/src/app/globals.css` -- Direct code inspection of all tokens, animations, base styles
- `apps/admin/src/app/globals.css` -- Direct code inspection confirming token parity
- `packages/ui/src/*.tsx` -- Direct code inspection of all 30 UI components
- `packages/ui/package.json` -- Dependency versions verified

### Secondary (MEDIUM confidence)

- Tailwind v4 `@theme inline` behavior -- Based on training knowledge of Tailwind v4 CSS-first configuration. The codebase already uses this pattern successfully, confirming the approach works.

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH -- No new dependencies, all tools already in place
- Architecture: HIGH -- Existing patterns are well-established and only need refinement
- Pitfalls: HIGH -- Based on direct code inspection of actual codebase state
- Gap analysis: HIGH -- Every component and token was directly examined

**Research date:** 2026-02-22
**Valid until:** 2026-03-22 (stable -- CSS tokens and component patterns don't change rapidly)
