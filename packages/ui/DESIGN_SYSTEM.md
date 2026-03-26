# FitFast Design System Specification

> **Source of truth**: Admin app (`apps/admin/src/app/globals.css`)
> **Status**: Applied — shared CSS at `packages/ui/styles.css`, imported by all apps
> **Purpose**: Canonical reference for all design tokens. Applied via branch `001-unified-design-system`.

---

## 1. Colors

### Brand Palette

| Token                  | Value     | Usage                 |
| ---------------------- | --------- | --------------------- |
| `--color-cream`        | `#fffef5` | Warm off-white accent |
| `--color-black`        | `#000000` | Pure black            |
| `--color-brand-orange` | `#ff3b00` | Brand identity orange |
| `--color-brand-green`  | `#00ff94` | Brand identity green  |

### Primary / Accent

| Token                        | Value     | Usage                                    |
| ---------------------------- | --------- | ---------------------------------------- |
| `--color-primary`            | `#ff4500` | Buttons, links, active states            |
| `--color-primary-foreground` | `#ffffff` | Text on primary backgrounds              |
| `--color-primary-light`      | `#ff6633` | Hover states, gradient end               |
| `--color-primary-dark`       | `#cc3700` | Pressed states, hover on primary buttons |
| `--color-accent`             | `#ff4500` | Same as primary                          |
| `--color-accent-foreground`  | `#ffffff` | Text on accent backgrounds               |

### Neutral Scale (11 steps)

| Token                 | Value     |
| --------------------- | --------- |
| `--color-neutral-50`  | `#fafafa` |
| `--color-neutral-100` | `#f5f5f5` |
| `--color-neutral-200` | `#e5e5e5` |
| `--color-neutral-300` | `#d4d4d4` |
| `--color-neutral-400` | `#a3a3a3` |
| `--color-neutral-500` | `#737373` |
| `--color-neutral-600` | `#525252` |
| `--color-neutral-700` | `#404040` |
| `--color-neutral-800` | `#262626` |
| `--color-neutral-900` | `#171717` |
| `--color-neutral-950` | `#0a0a0a` |

### Semantic Colors

| Token                 | Value     | Usage                     |
| --------------------- | --------- | ------------------------- |
| `--color-success-500` | `#22c55e` | Success states            |
| `--color-success-600` | `#16a34a` | Success hover             |
| `--color-warning-500` | `#f59e0b` | Warning states            |
| `--color-warning-600` | `#d97706` | Warning hover             |
| `--color-error-500`   | `#ef4444` | Error states, destructive |
| `--color-error-600`   | `#dc2626` | Error hover               |

### Feature Accents

| Token               | Value     | Domain                       |
| ------------------- | --------- | ---------------------------- |
| `--color-nutrition` | `#10b981` | Meals, diet (Emerald)        |
| `--color-fitness`   | `#f97316` | Workouts, energy (Orange)    |
| `--color-streak`    | `#f59e0b` | Streaks, achievement (Amber) |
| `--color-routine`   | `#8b5cf6` | Tracking, calendar (Violet)  |

### Surface & Background

| Token                        | Value                      | Usage                        |
| ---------------------------- | -------------------------- | ---------------------------- |
| `--color-background`         | `#fafafa`                  | Page background              |
| `--color-foreground`         | `#171717`                  | Default text                 |
| `--color-card`               | `#ffffff`                  | Card backgrounds             |
| `--color-card-foreground`    | `#171717`                  | Card text                    |
| `--color-surface-elevated`   | `#ffffff`                  | Elevated surfaces            |
| `--color-popover`            | `#ffffff`                  | Popover/dropdown backgrounds |
| `--color-popover-foreground` | `#171717`                  | Popover text                 |
| `--color-muted`              | `var(--color-neutral-100)` | Muted backgrounds            |
| `--color-muted-foreground`   | `var(--color-neutral-500)` | Muted/secondary text         |
| `--color-border`             | `#e8eaed`                  | Borders, dividers            |
| `--color-input`              | `#d4d4d4`                  | Input borders                |
| `--color-ring`               | `#ff4500`                  | Focus ring                   |

### Color Divergences

| Token                        | Admin              | Client             | Marketing             |
| ---------------------------- | ------------------ | ------------------ | --------------------- |
| `--color-brand-orange`       | `#ff3b00`          | `#ff4500`          | n/a                   |
| `--color-primary-light`      | `#ff6633`          | `#ff6833`          | n/a                   |
| `--color-background`         | `#fafafa`          | `#ffffff`          | `#ffffff`             |
| `--color-foreground`         | `#171717`          | `#111111`          | `#111111`             |
| `--color-card-foreground`    | `#171717`          | `#111111`          | `#111111`             |
| `--color-popover-foreground` | `#171717`          | `#111111`          | `#111111`             |
| `--color-border`             | `#e8eaed`          | `#e4e4e7`          | `#e4e4e7`             |
| `--color-muted`              | `var(neutral-100)` | `var(neutral-100)` | `#f4f4f5` (hardcoded) |
| `--color-muted-foreground`   | `var(neutral-500)` | `var(neutral-500)` | `#737373` (hardcoded) |

> **Note**: Marketing defines a minimal token subset. The following token groups are **entirely absent** from marketing: brand palette, neutral scale, semantic colors, feature accents, spacing, layout dimensions, entrance animations, looping animations. Marketing's `--color-accent-dark: #cc3700` is equivalent to admin's `--color-primary-dark`.

---

## 2. Typography

### Font Families

| Token            | Value                                                                         | Usage               |
| ---------------- | ----------------------------------------------------------------------------- | ------------------- |
| `--font-sans`    | `"Inter", ui-sans-serif, system-ui, sans-serif, emoji stacks`                 | Body text, UI       |
| `--font-display` | `"Space Grotesk", ui-sans-serif, system-ui, sans-serif`                       | Headings, hero text |
| `--font-arabic`  | `"Alexandria", ui-sans-serif, system-ui, sans-serif`                          | Arabic RTL text     |
| `--font-mono`    | `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace` | Code, IDs           |

### Font Loading

```html
Inter: weights 400, 500, 600, 700, 900 Space Grotesk: weights 500, 600, 700 Alexandria: weights 500,
600, 700, 900
```

Loaded via Google Fonts `<link>` tag in `layout.tsx` (not `@import`, to avoid Tailwind v4 ordering issues).

### Type Scale

| Level         | Class                   | Size | Weight | Line Height | Usage                          |
| ------------- | ----------------------- | ---- | ------ | ----------- | ------------------------------ |
| Page title    | `text-xl font-semibold` | 20px | 600    | 28px        | PageHeader h1                  |
| Section title | `text-lg font-semibold` | 18px | 600    | 28px        | Card group headings            |
| Card title    | `text-base font-medium` | 16px | 500    | 24px        | WidgetCard, meal card headings |
| Body          | `text-sm`               | 14px | 400    | 20px        | General text                   |
| Caption       | `text-xs`               | 12px | 400    | 16px        | Labels, timestamps, subtitles  |

All headings use normal case (no `text-transform: uppercase`).

### Typography Divergences

| Token            | Admin                     | Client                                    | Marketing                                   |
| ---------------- | ------------------------- | ----------------------------------------- | ------------------------------------------- |
| `--font-sans`    | Inter + system            | system sans-serif (no Inter)              | `var(--font-inter)` via `next/font`         |
| `--font-display` | Space Grotesk             | n/a (has `--font-outfit`: Outfit instead) | `var(--font-space-grotesk)` via `next/font` |
| `--font-arabic`  | Alexandria                | Cairo                                     | `var(--font-alexandria)` via `next/font`    |
| Font loading     | Google Fonts `<link>` tag | Google Fonts `<link>` tag                 | `next/font` CSS variables                   |

---

## 3. Spacing

### Layout Spacing Tokens

| Token                    | Value            | Usage                              |
| ------------------------ | ---------------- | ---------------------------------- |
| `--spacing-page-x`       | `1rem` (16px)    | Horizontal page padding (mobile)   |
| `--spacing-page-x-lg`    | `1.5rem` (24px)  | Horizontal page padding (desktop)  |
| `--spacing-section-gap`  | `1.25rem` (20px) | Gap between sections/widget groups |
| `--spacing-card-padding` | `1rem` (16px)    | Internal card padding              |
| `--spacing-card-gap`     | `0.75rem` (12px) | Gap between cards in a grid        |

### Page Container

```
mx-auto space-y-5 px-4 py-6 lg:px-6
Max widths: sm=max-w-2xl, md=max-w-3xl, lg=max-w-4xl, xl=max-w-5xl
```

### Spacing Divergences

| Token                | Admin   | Client              | Marketing   |
| -------------------- | ------- | ------------------- | ----------- |
| All 5 spacing tokens | Defined | Defined (identical) | Not defined |

---

## 4. Border Radius

| Token           | Value      | Pixels |
| --------------- | ---------- | ------ |
| `--radius-sm`   | `0.375rem` | 6px    |
| `--radius-md`   | `0.5rem`   | 8px    |
| `--radius-lg`   | `0.75rem`  | 12px   |
| `--radius-xl`   | `1rem`     | 16px   |
| `--radius-2xl`  | `1.5rem`   | 24px   |
| `--radius-full` | `9999px`   | Circle |

**Component defaults**: Buttons use `rounded-lg` (12px). Cards use `rounded-xl` (16px). Inputs use `rounded-lg` (12px). Drawers use `rounded-t-2xl` (24px top).

Identical across all apps.

---

## 5. Shadows

| Token             | Value                                                               | Usage                      |
| ----------------- | ------------------------------------------------------------------- | -------------------------- |
| `--shadow-sm`     | `0 1px 2px 0 rgba(0,0,0,0.06)`                                      | Subtle elevation (buttons) |
| `--shadow-md`     | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06)`   | Medium elevation           |
| `--shadow-lg`     | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.06)` | Dialogs, popovers          |
| `--shadow-card`   | `0 2px 8px 0 rgba(0,0,0,0.06), 0 1px 2px 0 rgba(0,0,0,0.04)`        | Card default               |
| `--shadow-lifted` | `0 8px 32px 0 rgba(0,0,0,0.08), 0 2px 8px 0 rgba(0,0,0,0.04)`       | Card hover, elevated       |

Identical across all apps (marketing lacks `--shadow-lifted`).

---

## 6. Layout

### Fixed Dimensions

| Token                  | Value    | Pixels |
| ---------------------- | -------- | ------ |
| `--height-header`      | `4rem`   | 64px   |
| `--height-bottom-nav`  | `4.5rem` | 72px   |
| `--height-desktop-nav` | `4rem`   | 64px   |

### Z-Index Scale

| Token            | Value | Usage                         |
| ---------------- | ----- | ----------------------------- |
| `--z-header`     | `40`  | Top navigation                |
| `--z-bottom-nav` | `40`  | Bottom navigation             |
| `--z-overlay`    | `50`  | Modal overlays, drawers       |
| `--z-drawer`     | `50`  | Drawer panels                 |
| `--z-toast`      | `60`  | Toast notifications (topmost) |

### Layout Divergences

| Token             | Admin         | Client                    | Marketing             |
| ----------------- | ------------- | ------------------------- | --------------------- |
| Layout dimensions | All 3 defined | All 3 defined (identical) | Not defined           |
| Z-index tokens    | All 5 defined | All 5 defined (identical) | Only overlay + drawer |

---

## 7. Animations

### Entrance Animations

| Token                       | Keyframe            | Duration | Easing   |
| --------------------------- | ------------------- | -------- | -------- |
| `--animate-fade-in`         | `fadeIn`            | 0.2s     | ease-out |
| `--animate-slide-up`        | `slideUp`           | 0.3s     | ease-out |
| `--animate-slide-down`      | `slideDown`         | 0.3s     | ease-out |
| `--animate-scale-in`        | `scaleIn`           | 0.2s     | ease-out |
| `--animate-slide-in-bottom` | `slideInFromBottom` | 0.3s     | ease-out |

### Keyframe Definitions

| Keyframe            | From                            | To                          |
| ------------------- | ------------------------------- | --------------------------- |
| `fadeIn`            | `opacity: 0`                    | `opacity: 1`                |
| `slideUp`           | `opacity: 0; translateY(16px)`  | `opacity: 1; translateY(0)` |
| `slideDown`         | `opacity: 0; translateY(-16px)` | `opacity: 1; translateY(0)` |
| `scaleIn`           | `opacity: 0; scale(0.95)`       | `opacity: 1; scale(1)`      |
| `slideInFromBottom` | `opacity: 0; translateY(10px)`  | `opacity: 1; translateY(0)` |

### Looping Animations

| Class              | Keyframe                       | Duration | Timing          |
| ------------------ | ------------------------------ | -------- | --------------- |
| `.animate-spin`    | `spin` (360deg rotation)       | 1s       | linear infinite |
| `.animate-marquee` | `marquee` (translateX -50%)    | 30s      | linear infinite |
| (token only)       | `pulse-soft` (opacity 1→0.5→1) | —        | —               |

### Interactive Effects

| Class              | Effect                                       | Timing                                      |
| ------------------ | -------------------------------------------- | ------------------------------------------- |
| `.btn-magnetic`    | `scale(1.03)` on hover                       | 0.3s `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `.btn-magnetic-bg` | Background slide from bottom (top: 100% → 0) | 0.4s same easing                            |
| `.link-lift`       | `translateY(-1px)` on hover                  | 0.3s same easing                            |

### Reduced Motion

All animations reduced to `0.01ms` duration with `iteration-count: 1` via `@media (prefers-reduced-motion: reduce)`.

### Animation Divergences

| Feature                 | Admin                                     | Client                                    | Marketing                                                                        |
| ----------------------- | ----------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| Entrance animations (5) | Yes                                       | Yes (identical)                           | Not defined                                                                      |
| `.btn-magnetic`         | Yes                                       | No                                        | Yes                                                                              |
| `.link-lift`            | Yes                                       | No                                        | Yes                                                                              |
| Reduced motion scope    | `*, ::before, ::after` (duration: 0.01ms) | `*, ::before, ::after` (duration: 0.01ms) | Only `.btn-magnetic`, `.btn-magnetic-bg`, `.link-lift` (uses `transition: none`) |

---

## 8. Component Patterns

### Button

**Variants** (via CVA):

| Variant       | Classes                                                                         |
| ------------- | ------------------------------------------------------------------------------- |
| `default`     | `bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark shadow-sm` |
| `destructive` | `bg-error-500 text-white rounded-lg hover:bg-error-600 shadow-sm`               |
| `outline`     | `border border-border bg-card text-foreground rounded-lg hover:bg-neutral-50`   |
| `secondary`   | `bg-neutral-100 text-foreground rounded-lg hover:bg-neutral-200`                |
| `ghost`       | `text-foreground rounded-lg hover:bg-neutral-100`                               |
| `link`        | `text-primary underline-offset-4 hover:underline`                               |
| `success`     | `bg-success-500 text-white rounded-lg hover:bg-success-600 shadow-sm`           |
| `gradient`    | `text-white rounded-xl` + inline gradient style                                 |

**Sizes**:

| Size      | Classes                          |
| --------- | -------------------------------- |
| `default` | `h-11 px-5`                      |
| `sm`      | `h-11 px-3 text-xs rounded-md`   |
| `lg`      | `h-12 px-8 text-base rounded-lg` |
| `icon`    | `h-12 w-12 rounded-lg`           |

**Shared traits**: `active:scale-[0.97]`, loading state with spinner, `asChild` via Radix Slot.

**Gradient inline style**: `background-image: linear-gradient(to right, #FF4500, #FF6833)` with `box-shadow: 0 4px 16px rgba(255, 69, 0, 0.3)`.

### Card

| Part              | Classes                                                                    |
| ----------------- | -------------------------------------------------------------------------- |
| `Card`            | `border-border bg-card text-card-foreground shadow-card rounded-xl border` |
| `CardHeader`      | `flex flex-col space-y-1.5 p-5`                                            |
| `CardTitle`       | `text-lg leading-none font-semibold tracking-tight`                        |
| `CardDescription` | `text-muted-foreground text-sm`                                            |
| `CardContent`     | `p-5 pt-0`                                                                 |
| `CardFooter`      | `flex items-center p-5 pt-0`                                               |

### Input

```
border-input bg-card placeholder:text-muted-foreground focus:ring-ring
h-11 rounded-lg border px-3 text-sm
focus:ring-2 focus:ring-offset-1
Error: border-error-500 focus:ring-error-500
```

### Textarea

```
Same as Input but: min-h-[100px] resize-none py-3
```

### Dialog

| Part    | Key Classes                                |
| ------- | ------------------------------------------ |
| Overlay | `bg-black/60 backdrop-blur-sm`             |
| Content | `rounded-xl border p-6 shadow-lg max-w-lg` |
| Close   | `absolute end-4 top-4 rounded-md p-1`      |

### Tabs

| Part    | Key Classes                                                  |
| ------- | ------------------------------------------------------------ |
| List    | `rounded-lg bg-neutral-100 p-1 gap-1` (pill style)           |
| Trigger | `rounded-md px-4 py-2 text-sm` / active: `bg-card shadow-sm` |
| Content | `mt-3`                                                       |

### Drawer

| Part    | Key Classes                                   |
| ------- | --------------------------------------------- |
| Overlay | `bg-black/60 backdrop-blur-sm`                |
| Content | `rounded-t-2xl border-t` (slides from bottom) |
| Handle  | `h-1.5 w-12 rounded-full bg-neutral-300`      |

### Select

```
Trigger: h-11 rounded-lg border (same as Input)
Content: rounded-lg border shadow-lg
Item: rounded-md py-2 ps-8 pe-3 focus:bg-neutral-100
```

### WidgetCard

```
Base: rounded-xl border p-4 shadow-card hover:shadow-lifted
Feature icon styles: primary/nutrition/fitness/streak/routine variants
  Each with colored bg + subtle colored shadow (rgba at 0.15)
```

### SectionCard

```
Header variants: primary/nutrition/fitness/streak/routine/neutral
  headerBg: bg-[color]/8
  iconContainer: bg-[color]/12 border-[color]/20
  iconColor: text-[color]
```

---

## 9. Global Behaviors

### Dark Mode

Explicitly disabled. The `@media (prefers-color-scheme: dark)` block re-declares the same light values, forcing a consistent light appearance regardless of OS setting.

```css
color-scheme: light; /* on <html> */
```

### Focus Styles

```css
:focus-visible {
  outline: 2px solid var(--color-ring); /* #ff4500 */
  outline-offset: 2px;
}
```

### Scrollbar

```css
width/height: 6px
track: transparent
thumb: var(--color-neutral-300)
thumb:hover: var(--color-neutral-400)
border-radius: 9999px
```

### Base Styles

```css
* {
  border-color: var(--color-border);
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
input/textarea::placeholder {
  color: var(--color-neutral-400);
}
```

### RTL / Arabic Support

```css
[dir="rtl"] {
  text-align: right;
  font-family: var(--font-arabic);     /* Alexandria */
  --font-sans: var(--font-arabic);     /* Override sans stack */
  --font-display: var(--font-arabic);  /* Override display stack */
}

[dir="rtl"] * {
  font-family: var(--font-arabic);
  letter-spacing: 0 !important;
}

/* Monospace override in RTL */
[dir="rtl"] .font-mono → font-family: var(--font-arabic), font-weight: 600

/* Size bumps for readability */
[dir="rtl"] .text-xs → 0.875rem / 1.4 line-height
[dir="rtl"] .text-[8px], .text-[10px] → 0.75rem / 1.4 line-height

/* Tracking resets */
[dir="rtl"] .tracking-* → letter-spacing: 0
```

### RTL Divergences

| Feature           | Admin                            | Client                     | Marketing                        |
| ----------------- | -------------------------------- | -------------------------- | -------------------------------- |
| Arabic font       | Alexandria                       | Cairo                      | `var(--font-alexandria)`         |
| RTL var overrides | `--font-sans` + `--font-display` | Neither (font-family only) | `--font-sans` + `--font-display` |

---

## 10. Per-App Features (Not Universalized)

These features are app-specific and should remain in each app's `globals.css` even after unification:

| Feature                                                   | App       | Reason                                                                                          |
| --------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| PWA safe-area insets                                      | Client    | `env(safe-area-inset-*)` for iOS standalone mode                                                |
| PWA standalone mode styles                                | Client    | `touch-action`, `-webkit-touch-callout`, `user-select` restrictions on nav/header/footer/button |
| `overflow-x: hidden`, `overscroll-behavior-y: none`       | Client    | Prevents horizontal scroll and pull-to-refresh on mobile                                        |
| `-webkit-text-size-adjust`, `-webkit-tap-highlight-color` | Client    | iOS text scaling and tap highlight suppression                                                  |
| `@utility scrollbar-hide`                                 | Client    | Custom utility for hidden scrollbars in mobile UI                                               |
| iOS zoom prevention                                       | Client    | `input { font-size: max(1rem, 16px) }` via `@supports (-webkit-touch-callout: none)`            |
| `.noise-overlay`                                          | Marketing | Decorative grain texture effect                                                                 |
| Marketing-only tokens                                     | Marketing | `--color-surface`, `--color-surface-light`, `--color-accent-dark` (= `--color-primary-dark`)    |
| Marketing scrollbar                                       | Marketing | Hardcodes `#d4d4d4` thumb (no hover state), vs admin's `var(--color-neutral-300)` with hover    |

---

## 11. DarwinUI — Future Exploration

DarwinUI (`@pikoloo/darwin-ui`) is a macOS-inspired, shadcn-compatible component library with glass-morphism aesthetics. It is **technically compatible** with this codebase (React 19, Tailwind v4, Radix primitives) and could be explored as a future design evolution.

**What would need customization**:

- Swap DarwinUI's gray/silver palette for FitFast orange brand tokens
- Add RTL/Arabic support (Alexandria font, `[dir="rtl"]` rules)
- Preserve domain-specific components (SectionCard, WidgetCard, FormField, RatingSelector)

**Not in scope for current task.** Document the existing design first; consider DarwinUI as a Phase 2 visual evolution.

---

## Utility: `cn()`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

All components use `cn()` for intelligent Tailwind class merging.
