# Phase 12: Design Tokens and Core Primitives - Research

**Researched:** 2026-02-21
**Domain:** Tailwind CSS v4 `@theme` tokens, CSS animations, RTL-safe UI primitives
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Animation & Micro-interactions:**

| Element | Decision | Notes |
|---------|----------|-------|
| Button press | `active:scale-[0.97]` subtle scale-down | Keep current behavior — feels native iOS-like |
| Card lift | Shadow lift on tap/hover for ALL cards | Not just clickable ones — gives depth and tactile feedback |
| Staggered entrance | Yes — list items and cards cascade in | ~50ms delay between each item |
| Page transitions | Claude's discretion | Pick what feels best for mobile-native feel |
| Animation approach | CSS-only (no framer-motion) | Key Decision from v1.1 research — saves 34KB |

### Claude's Discretion

- **Color refinement**: Soften the palette per success criteria — white backgrounds, subtle borders, reduced visual noise. Royal blue brand color stays. Must maintain WCAG AA. Specific values up to Claude.
- **Typography hierarchy**: Establish clear size scale. No uppercase headings. Claude decides specific sizes, weights, line-heights. Must read well at 390px.
- **Primitive polish**: Refine WidgetCard, PageHeader, EmptyState, Skeleton — border-radius, padding, shadow levels. Consistency is the priority. Must work in LTR and RTL.

### Constraints

- CSS-only animations — no framer-motion
- Tailwind v4 — use CSS custom properties and `@theme` where appropriate
- RTL-safe — all visual changes must work with `dir="rtl"`
- Mobile-first — 390px is the primary viewport; desktop (1440px) secondary
- No breaking changes — existing pages should look the same or better after token updates

### Deferred Ideas (OUT OF SCOPE)

None explicitly deferred — all areas are either locked or delegated to Claude's discretion.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| DS-01 | Extend `@theme` tokens — modern rounded corners, soft shadows, spacing scale | Tailwind v4 `@theme` supports custom `--shadow-*`, `--radius-*`, and any custom CSS variable; tokens already partially exist and need extension |
| DS-02 | Soften brutalist palette — white background, subtle borders, modern feel | Background is currently `#FFFEF5` (cream), not white. Must change to `#FFFFFF` or near-white and update dark-mode override. Borders already subtle (`#e5e5e5`). |
| DS-03 | Typography — normal case (drop uppercase), readable fonts, proper hierarchy | No `uppercase` class exists in current code. Gap is the lack of a documented, systematic type scale for Phase 13 to follow. |
| DS-06 | Respect `prefers-reduced-motion` media query | Already partially done (custom CSS utility classes). Gap: stagger delays and any `@theme --animate-*` tokens also need reduced-motion treatment. |
| PRIM-01 | WidgetCard — compact stat/widget card for dashboard grid | Component exists in `packages/ui/src/widget-card.tsx`. Needs: hover shadow lift, consistent shadow token usage, RTL check. |
| PRIM-02 | PageHeader — consistent page title + breadcrumb component | Component exists in `packages/ui/src/page-header.tsx`. Not yet adopted in any client page. Needs mobile padding variant and possible subtitle slot enhancement. |
| PRIM-03 | Skeleton loading variants — home cards, meal cards, workout cards, ticket list | `Skeleton`, `SkeletonText`, `SkeletonCircle`, `SkeletonCard` exist. Missing: `SkeletonWidgetCard` (home grid), `SkeletonMealCard`, `SkeletonWorkoutCard`, `SkeletonTicketItem`. Dashboard `loading.tsx` still uses brutalist inline styles — must be replaced. |
| PRIM-04 | Button press feedback — `active:scale-95` + transition on all interactive elements | Button already has `active:scale-[0.97]`. Decision says keep `active:scale-[0.97]` (not -95). Standardize this across all interactive card-like elements — currently inconsistent (WidgetCard uses `scale-[0.98]`, dashboard link cards use `scale-[0.97]`). |
| PRIM-05 | Empty state component — SVG illustration + message + CTA button | `EmptyState` component exists using `LucideIcon`. Requirement mentions "SVG illustration" — could mean inline SVG or stay with LucideIcon. Used in tickets, progress, tracking pages. Needs visual polish (icon container color, spacing, CTA variant). |
</phase_requirements>

---

## Summary

Phase 12 is almost entirely a **refinement phase**, not a greenfield build. The infrastructure is already in place: `@theme` tokens defined, keyframes written, primitive components created. The actual work is closing three specific gaps:

1. **Token gap**: `--color-background` is `#FFFEF5` (cream), not `#FFFFFF` (white). No spacing scale tokens exist (`--spacing-*`). Animations live as raw CSS utility classes outside `@theme`, so Tailwind's `animate-*` shorthand cannot be used. The stagger animation pattern (~50ms delay) is not yet defined anywhere.

2. **Animation gap**: All five keyframes (fadeIn, slideUp, slideDown, scaleIn, slideInFromBottom) exist as raw `@keyframes` + custom utility classes but are **not** moved into `@theme` as `--animate-*` variables. There is no CSS mechanism for staggered entrance delays (this needs a `--stagger-delay` CSS variable approach or inline `style` with `animation-delay`). The reduced-motion `@media` block only covers the custom utility classes, not the stagger pattern or any future `@theme`-defined animations.

3. **Primitive gap**: Five Skeleton variants are missing for the shapes Phase 13 will need (home widget grid, meal card, workout card, ticket list item). The dashboard `loading.tsx` is an outdated brutalist design using `bg-black`, `border-black` — it needs complete replacement. `EmptyState` uses a Lucide icon in a gray circle; the requirement asks for "SVG illustration" which needs a decision on whether that means inline SVG per use-case or a shared set of 5-6 spot illustrations.

**Primary recommendation:** Work in three sequential plans: (1) update `globals.css` tokens in both `apps/client` and `apps/admin`, (2) extend animation system with stagger support and `@theme --animate-*` integration, (3) polish existing primitives and add the missing Skeleton variants. No new dependencies required — pure CSS and TypeScript component work.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS v4 | `^4.1.18` | Token system via `@theme` | Already installed; `@theme inline` is the v4 canonical way to define design tokens |
| class-variance-authority (CVA) | `^0.7.1` | Component variant API | Already used in `button.tsx`, `skeleton.tsx`; the right tool for multi-variant primitives |
| tailwind-merge | `^3.4.0` | Safe className merging | Already used via `cn()` in all components |
| lucide-react | `^0.563.0` | Icon set for EmptyState + primitives | Already installed; use `LucideIcon` type for prop typing |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `@fitfast/ui` internal | workspace:* | Shared primitive components | All UI primitives live here, consumed by both apps |
| CSS `animation-delay` | native | Stagger entrance pattern | Pure CSS approach; use `--stagger-i` multiplied by a base delay |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS stagger via `animation-delay` | Framer Motion `staggerChildren` | Framer adds 34KB — locked out by user decision |
| CSS `animation-delay` via inline style | Intersection Observer + JS class toggling | Adds JS complexity; CSS-only is simpler and sufficient |
| LucideIcon in EmptyState | Custom SVG illustrations per screen | Custom SVGs require design assets; Lucide is already consistent and sufficient for v1.1 |

**Installation:** No new packages needed.

---

## Architecture Patterns

### File Locations

```
apps/
├── client/src/app/globals.css          # Token definitions (BOTH apps share same token set)
├── admin/src/app/globals.css           # Mirror of client globals.css minus Clerk @layer declaration
└── client/src/app/[locale]/(dashboard)/loading.tsx   # Replace brutalist skeleton

packages/ui/src/
├── widget-card.tsx                     # PRIM-01 — polish + hover shadow
├── page-header.tsx                     # PRIM-02 — polish + mobile variant
├── skeleton.tsx                        # PRIM-03 — add 4 new variant exports
├── empty-state.tsx                     # PRIM-05 — polish icon container
└── button.tsx                          # PRIM-04 — already has active:scale-[0.97], verify coverage
```

### Pattern 1: Tailwind v4 `@theme` Token Definition

**What:** Use `@theme inline` for tokens that reference other CSS variables. Use `@theme` (no `inline`) for standalone tokens. Define `--animate-*` variables **inside** `@theme` alongside `@keyframes` so Tailwind auto-generates `animate-*` utility classes.

**When to use:** All design token definitions belong in `@theme`.

**Example (verified against Context7/official docs):**
```css
/* Source: Tailwind CSS v4 official docs via Context7 */
@import "tailwindcss";

@theme {
  /* Standalone token — use without `inline` */
  --color-background: #FFFFFF;

  /* Animate token — keyframe defined inside @theme, class auto-generated */
  --animate-fade-in: fadeIn 0.2s ease-out;
  --animate-slide-up: slideUp 0.3s ease-out;
  --animate-slide-down: slideDown 0.3s ease-out;
  --animate-scale-in: scaleIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
}
```

**Result:** Tailwind generates `animate-fade-in`, `animate-slide-up`, `animate-slide-down`, `animate-scale-in` classes automatically. The manual `.animate-*` CSS utility classes in `globals.css` become redundant and can be removed after migration.

**IMPORTANT:** The existing `globals.css` currently defines keyframes and utility classes **outside** `@theme`. Both approaches work, but mixing creates duplication. Plan 12-02 should move keyframes **into** `@theme` and remove the duplicate manual utility classes.

### Pattern 2: CSS Stagger Animation with CSS Custom Properties

**What:** Implement staggered list entrance using `animation-delay` and a CSS variable for the index multiplier. No JavaScript required.

**When to use:** Any list of cards or items that should cascade in with ~50ms delay.

**Example:**
```tsx
// In a React component — apply stagger via inline style
{items.map((item, i) => (
  <div
    key={item.id}
    className="animate-slide-up"
    style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
  >
    {/* item content */}
  </div>
))}
```

**CSS approach (alternative if no inline style desired):**
```css
/* Define stagger delay as CSS variable on the element */
@layer utilities {
  .stagger-1 { animation-delay: 50ms; }
  .stagger-2 { animation-delay: 100ms; }
  .stagger-3 { animation-delay: 150ms; }
  .stagger-4 { animation-delay: 200ms; }
  /* etc up to stagger-8 or so */
}
```

**Recommended approach:** Inline `style={{ animationDelay: `${i * 50}ms` }}` at the usage site in Phase 13. Phase 12 only needs to ensure `animation-fill-mode: both` is part of the base animation definition so items don't flash before their delay fires.

### Pattern 3: Reduced-Motion Coverage

**What:** Use `@media (prefers-reduced-motion: reduce)` to disable all animations. Must cover both `@theme`-generated `animate-*` classes AND the stagger pattern.

**Verified pattern:**
```css
/* Source: Tailwind CSS v4 official docs via Context7 */
/* Also works as Tailwind utility: motion-reduce:transition-none motion-reduce:hover:transform-none */

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Better than listing individual classes:** The wildcard approach catches stagger delays and any future animations without needing to enumerate every class.

**Tailwind variant approach (alternative):** Apply `motion-reduce:animate-none` inline to individual components — but this is verbose and easy to miss. The global `@media` block is more reliable for a phase-wide change.

### Pattern 4: Semantic Color Token Update (DS-02)

**What:** Change `--color-background` from `#FFFEF5` to `#FFFFFF` (or near-white), update the dark mode override block too. Keep `--color-cream` as a named token but stop using it as the page background.

**Current state:**
```css
@theme inline {
  --color-background: #FFFEF5;  /* ← CREAM, needs to change */
  --color-card: #FFFFFF;
}

@media (prefers-color-scheme: dark) {
  @theme inline {
    --color-background: #FFFEF5;  /* ← also needs to change */
  }
}
```

**Target state (recommended values):**
```css
@theme inline {
  --color-background: #F8F9FA;  /* near-white, slightly warmer than pure #FFFFFF to reduce harshness */
  --color-card: #FFFFFF;         /* card surfaces pop against background */
  --color-border: #E8EAED;       /* slightly refined from #e5e5e5 */
  --color-surface-elevated: #FFFFFF;  /* new token: elevated surfaces (bottom sheet headers, etc) */
}
```

**Note:** Pure `#FFFFFF` page backgrounds can feel harsh on mobile — `#F8F9FA` (Google Material's surface) or `#F9FAFB` (Tailwind gray-50) gives the "white feel" while staying comfortable. Claude's discretion per CONTEXT.md.

### Pattern 5: Skeleton Variant Pattern (PRIM-03)

**What:** Name skeleton variants after the component shape they represent, not the page. Export named functions from `packages/ui/src/skeleton.tsx`.

**Example pattern (matching existing file style):**
```tsx
// Source: packages/ui/src/skeleton.tsx pattern
export function SkeletonWidgetCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("rounded-xl border border-border p-4 space-y-3", className)}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />
          <div className="h-7 w-16 animate-pulse rounded-md bg-neutral-200" />
          <div className="h-3 w-20 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="h-11 w-11 animate-pulse rounded-xl bg-neutral-200 ms-3" />
      </div>
    </div>
  );
}
```

### Anti-Patterns to Avoid

- **Defining `@theme` variables that reference CSS vars without `inline`:** Without `@theme inline`, Tailwind inlines the literal string `var(--other-var)` into generated CSS rather than the resolved value. Font definitions that reference Google Fonts vars must use `@theme inline`.
- **Keeping duplicate keyframe definitions:** If keyframes move into `@theme`, remove the `@keyframes` blocks outside it. Two declarations of the same keyframe name can cause subtle animation conflicts.
- **Using `animation: none` on individual classes in reduced-motion:** Fragile — if a new animation class is added, it won't be covered. Use the wildcard `animation-duration: 0.01ms` approach instead.
- **Hardcoded hex colors in component files instead of semantic token names:** `bg-[#4169E1]` in `widget-card.tsx` should be `bg-primary`. The `section-card.tsx` and `multi-select.tsx` files use `bg-[#4169E1]/8` — Tailwind can use `bg-primary/8` if `--color-primary` is a plain hex in `@theme` (not `oklch` or a reference), which it is.
- **Forgetting both `apps/client/globals.css` and `apps/admin/globals.css`:** Both files are near-identical and must stay in sync. The only known difference is the Clerk `@layer` declaration in client (admin doesn't need it).

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Animation token system | Custom JS animation registry | Tailwind v4 `@theme { --animate-*: keyframe timing }` | Auto-generates `animate-*` utility classes; zero runtime cost |
| Stagger animation | JS-based animation queue or IntersectionObserver | CSS `animation-delay` via inline style | CSS is sufficient; framer-motion locked out |
| Component variant API | `if/else` className logic | CVA (`cva()`) — already in use | Handles all variant combinations, maintains type safety |
| Safe color merging | Manual `clsx` string concatenation | `cn()` (tailwind-merge + clsx) — already in use | Handles conflicting Tailwind class deduplication |
| Skeleton animation | Custom `@keyframes pulse` | Tailwind's built-in `animate-pulse` — already used | Standardized, GPU-composited, respects reduced-motion via built-in |

**Key insight:** Phase 12 is pure refinement. The stack is correct. The work is moving existing pieces into the right positions and filling a few named gaps.

---

## Common Pitfalls

### Pitfall 1: Background Change Breaks Dark-Mode Override Block

**What goes wrong:** The `@media (prefers-color-scheme: dark)` block at the bottom of `globals.css` hard-codes `--color-background: #FFFEF5`. If the main `@theme inline` block changes but the dark-mode override doesn't, dark-mode users (or OS-switched users) see the old cream color.

**Why it happens:** The dark-mode override exists specifically to force light-mode appearance, but the value is hardcoded instead of referencing the main token.

**How to avoid:** Update BOTH the main `@theme inline` block and the `@media (prefers-color-scheme: dark)` override block to the same new value.

**Warning signs:** Running Chrome devtools with `prefers-color-scheme: dark` emulation and seeing cream background.

### Pitfall 2: Stagger Delay Makes Items Invisible Until Fired

**What goes wrong:** If `animation-delay` is set but `animation-fill-mode` defaults to `none`, items flash at full opacity first (before the delay fires) then become invisible until the animation starts.

**Why it happens:** Without `fill-mode: both`, the element's opacity/transform state isn't held during the delay period.

**How to avoid:** Set `animation-fill-mode: both` on the animation (or include it in the `--animate-*` token value):
```css
--animate-slide-up: slideUp 0.3s ease-out both;
/* The "both" keyword sets fill-mode: both */
```

**Warning signs:** Cards flicker or appear briefly before disappearing and animating in.

### Pitfall 3: Admin `globals.css` Divergence

**What goes wrong:** `apps/client/globals.css` and `apps/admin/globals.css` are nearly identical but maintained separately. A token change made to one but not the other means the admin panel uses different colors than the client app.

**Why it happens:** No shared CSS file — each app owns its own `globals.css` because Tailwind v4 processes them independently per app.

**How to avoid:** Always diff the two files after any token change. The ONLY intended difference is the `@layer theme, base, clerk, components, utilities;` declaration in client (for Clerk compatibility) which admin does not have.

**Warning signs:** Admin panel cards have wrong shadow or background color while client looks correct.

### Pitfall 4: Feature-Color Hex Values in Components Not Switching on Token Change

**What goes wrong:** `section-card.tsx`, `widget-card.tsx`, and `multi-select.tsx` use hardcoded hex values like `bg-[#4169E1]/8` instead of `bg-primary/8`. Changing `--color-primary` in `@theme` won't affect these components.

**Why it happens:** Opacity modifiers on CSS variables (`bg-primary/8`) work in Tailwind v4 only when the token is a direct color value (hex/rgb) — which it is for `--color-primary: #4169E1`. So `bg-primary/8` actually works. The components were written with explicit hex as a safety measure.

**How to avoid:** Phase 12 should **optionally** migrate hardcoded hex to semantic tokens where the token exactly matches (e.g., `bg-[#4169E1]` → `bg-primary`). For feature colors (`#10B981`, `#F97316`, `#F59E0B`, `#8B5CF6`), the tokens `--color-nutrition`, `--color-fitness`, `--color-streak`, `--color-routine` exist and can be used as `bg-nutrition`, `bg-fitness`, etc. This migration is low-risk and improves maintainability.

**Warning signs:** Brand color change in `@theme` has no effect on card icon backgrounds.

### Pitfall 5: New Skeleton Exports Not Added to `package.json` Exports

**What goes wrong:** New named exports in `skeleton.tsx` are accessible by consuming apps — but if the file is already exported via `"./skeleton": "./src/skeleton.tsx"` (which it is), all named exports from that file are available automatically. No `package.json` change needed.

**Why it happens:** Confusion about whether each exported function needs its own entry. It doesn't — the file entry covers all named exports.

**How to avoid:** No action needed. Just ensure new exports are named exports (not default export) in the file.

---

## Code Examples

Verified patterns from official sources and codebase inspection:

### Moving Keyframes into `@theme` (DS-05 + DS-06)

```css
/* Source: Tailwind CSS v4 official docs, Context7 */
@theme {
  /* Animation tokens — Tailwind auto-generates animate-fade-in, animate-slide-up, etc. */
  --animate-fade-in: fadeIn 0.2s ease-out both;
  --animate-slide-up: slideUp 0.3s ease-out both;
  --animate-slide-down: slideDown 0.3s ease-out both;
  --animate-scale-in: scaleIn 0.2s ease-out both;
  --animate-slide-in-bottom: slideInFromBottom 0.3s ease-out both;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes slideInFromBottom {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
}

/* Global reduced-motion — wildcard approach covers stagger delays too */
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### WidgetCard with Shadow Lift on All States (PRIM-01)

```tsx
// Source: packages/ui/src/widget-card.tsx (current + additions)
// Add hover shadow to ALL WidgetCards, not just clickable ones
<Comp
  onClick={onClick}
  className={cn(
    "rounded-xl border border-border bg-card p-4 text-start shadow-card",
    "transition-all duration-200",
    // Shadow lift on hover for ALL cards (per CONTEXT.md decision)
    "hover:shadow-lifted",
    // Press feedback only for interactive cards
    onClick && "cursor-pointer active:scale-[0.97]",
    className
  )}
>
```

### Stagger Entrance Pattern (CONTEXT.md decision: ~50ms per item)

```tsx
// Usage in Phase 13 page components — Phase 12 defines the animation, Phase 13 applies stagger
{items.map((item, i) => (
  <div
    key={item.id}
    className="animate-slide-up"
    style={{ animationDelay: `${i * 50}ms` }}
  >
    {item content}
  </div>
))}
```

### New Skeleton Variants for PRIM-03

```tsx
// Source: packages/ui/src/skeleton.tsx — add these named exports

/** Home page widget grid skeleton */
export function SkeletonWidgetCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("rounded-xl border border-border bg-card p-4", className)}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <div className="h-3 w-20 animate-pulse rounded bg-neutral-200" />
          <div className="h-7 w-14 animate-pulse rounded-md bg-neutral-200" />
          <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="ms-3 h-11 w-11 animate-pulse rounded-xl bg-neutral-200 shrink-0" />
      </div>
    </div>
  );
}

/** Collapsed meal card skeleton (for meal plan page) */
export function SkeletonMealCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("rounded-xl border border-border bg-card p-4", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 animate-pulse rounded-lg bg-neutral-200 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 animate-pulse rounded bg-neutral-200" />
          <div className="h-3 w-20 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="h-4 w-12 animate-pulse rounded bg-neutral-200 shrink-0" />
      </div>
    </div>
  );
}

/** Exercise card skeleton (for workout plan page) */
export function SkeletonWorkoutCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("rounded-xl border border-border bg-card p-4 space-y-3", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 animate-pulse rounded-lg bg-neutral-200 shrink-0" />
        <div className="flex-1 space-y-1.5">
          <div className="h-4 w-36 animate-pulse rounded bg-neutral-200" />
          <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-10 animate-pulse rounded-lg bg-neutral-200" />
        ))}
      </div>
    </div>
  );
}

/** Ticket list item skeleton */
export function SkeletonTicketItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("rounded-xl border border-border bg-card p-4", className)}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 animate-pulse rounded-lg bg-neutral-200 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-48 animate-pulse rounded bg-neutral-200" />
          <div className="h-3 w-32 animate-pulse rounded bg-neutral-200" />
        </div>
        <div className="h-4 w-4 animate-pulse rounded bg-neutral-200 shrink-0" />
      </div>
    </div>
  );
}
```

### Dashboard `loading.tsx` Replacement (brutalist → modern)

```tsx
// apps/client/src/app/[locale]/(dashboard)/loading.tsx
// Current: brutalist (bg-black, border-black) — full replacement needed
import { SkeletonWidgetCard } from "@fitfast/ui/skeleton";
import { Skeleton } from "@fitfast/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="px-4 py-6 space-y-5 max-w-3xl mx-auto">
      {/* Greeting header skeleton */}
      <div className="space-y-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-7 w-48" />
      </div>

      {/* Widget grid skeleton — 2 columns */}
      <div className="grid grid-cols-2 gap-3">
        <SkeletonWidgetCard />
        <SkeletonWidgetCard />
        <SkeletonWidgetCard />
        <SkeletonWidgetCard />
      </div>

      {/* Section card skeletons */}
      <Skeleton className="h-52 rounded-xl" />
      <Skeleton className="h-48 rounded-xl" />
    </div>
  );
}
```

### EmptyState with Refined Icon Container (PRIM-05)

```tsx
// The requirement says "SVG illustration" — recommended interpretation:
// Use a feature-colored icon container (matches WidgetCard pattern) instead of plain gray circle
// This creates consistency without requiring custom SVG assets

export function EmptyState({ icon: Icon, title, description, action, variant = "default", className }: EmptyStateProps) {
  const iconVariants = {
    default: { bg: "bg-neutral-100", icon: "text-muted-foreground" },
    primary: { bg: "bg-primary/10", icon: "text-primary" },
    nutrition: { bg: "bg-nutrition/10", icon: "text-nutrition" },
    fitness: { bg: "bg-fitness/10", icon: "text-fitness" },
  };
  const styles = iconVariants[variant];

  return (
    <div className={cn("rounded-xl border border-border bg-card p-10 text-center", className)}>
      <div className={cn("flex h-16 w-16 items-center justify-center mx-auto rounded-2xl", styles.bg)}>
        <Icon className={cn("h-8 w-8", styles.icon)} />
      </div>
      <h3 className="mt-5 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">{description}</p>
      {action && (
        <Button onClick={action.onClick} className="mt-5">
          {action.label}
        </Button>
      )}
    </div>
  );
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tailwind v3 `theme.extend` in `tailwind.config.js` | Tailwind v4 `@theme` in CSS | v4 release | Config file gone; tokens live in CSS alongside `@import "tailwindcss"` |
| `@keyframes` defined globally outside Tailwind | `@keyframes` inside `@theme {}` block | Tailwind v4 | Tailwind auto-generates `animate-*` utilities; no separate utility class definition needed |
| Framer Motion for animations | CSS-only `@keyframes` + `animation` property | Project decision (v1.1) | 34KB saved, simpler mental model |
| `bg-[hex]` hardcoded in components | `bg-semantic-token` using `@theme` tokens | v1.0 rebrand | Tokens allow global palette updates without touching components |

**Deprecated/outdated in this project:**
- The manual `.animate-fade-in { animation: fadeIn ... }` utility classes in `globals.css` — will be replaced by `@theme --animate-*` tokens in Plan 12-02.
- `loading.tsx` brutalist layout — completely superseded by the v1.1 design language.
- `--color-cream: #FFFEF5` as `--color-background` — replaced with white/near-white.

---

## Open Questions

1. **Background color: pure white `#FFFFFF` or near-white `#F8F9FA`?**
   - What we know: DS-02 says "white backgrounds." `#FFFEF5` is cream. The decision is Claude's discretion.
   - What's unclear: Pure `#FFFFFF` can feel harsh on mobile at night. `#F8F9FA` is slightly softer.
   - Recommendation: Use `#FAFAFA` (neutral-50 in the existing scale) — it reads as "white" visually, is in the already-defined neutral scale, and sits between harsh pure white and the cream it replaces.

2. **EmptyState "SVG illustration" — Lucide icon or custom SVGs?**
   - What we know: The requirement says "SVG illustration + message + CTA button." Current component uses a `LucideIcon` in a gray circle.
   - What's unclear: Whether this means hand-crafted spot illustrations (require design work) or is satisfied by a styled Lucide icon.
   - Recommendation: Enhance the icon container style (colored background matching the feature context) rather than introducing custom SVG assets. This is visually distinguishable from plain text while not requiring design asset creation. Document this interpretation in the plan.

3. **Page transitions (Claude's discretion from CONTEXT.md)?**
   - What we know: User says "Pick what feels best for mobile-native feel." Out-of-scope items include "Page-level route transitions — wait for stable View Transitions API."
   - What's unclear: Whether a simple `animate-fade-in` on page layout wrapping element counts.
   - Recommendation: Add `animate-fade-in` on the `<main>` wrapper in `dashboard-shell-v2.tsx`. Very subtle, zero cost, sufficient for v1.1.

4. **Where do the stagger animation patterns live?**
   - What we know: Phase 12's job is to define the token and utility. Phase 13 applies it.
   - Recommendation: Phase 12 documents the stagger pattern (inline `style={{ animationDelay }}`) and ensures `animation-fill-mode: both` is in the `--animate-*` token. Phase 13 planner picks it up. No additional component needed.

---

## Sources

### Primary (HIGH confidence)

- `/tailwindlabs/tailwindcss.com` (Context7) — `@theme` token definition, `@keyframes` inside `@theme`, `--animate-*` variables, `@theme inline` for variable references, logical properties, `motion-reduce` variant
- Codebase inspection of `apps/client/src/app/globals.css` — confirmed current token state, existing keyframes, existing utility classes
- Codebase inspection of `packages/ui/src/*.tsx` — confirmed which primitives exist and their current API
- Codebase inspection of `apps/client/src/app/[locale]/(dashboard)/loading.tsx` — confirmed brutalist design requiring replacement

### Secondary (MEDIUM confidence)

- Project `STATE.md` and `CONTEXT.md` — confirmed CSS-only animation decision, stagger delay specification, card shadow lift decision
- `PROJECT.md` requirements — confirmed exact requirement IDs and descriptions

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new libraries; all existing tools verified via Context7 and codebase
- Architecture: HIGH — patterns verified against Tailwind v4 docs and existing code structure
- Pitfalls: HIGH — identified from direct codebase inspection (duplicate keyframes, dark-mode override, diverging globals.css files)
- Open questions: MEDIUM — the questions are about aesthetic judgment calls (Claude's discretion), not technical unknowns

**Research date:** 2026-02-21
**Valid until:** 2026-03-21 (stable tech — Tailwind v4 is not actively breaking APIs)
