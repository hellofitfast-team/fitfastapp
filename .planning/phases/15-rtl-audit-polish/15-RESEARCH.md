# Phase 15: RTL Audit and Polish — Research

## RTL Infrastructure (Already Working)

- `apps/client/src/app/layout.tsx` sets `dir={locale === "ar" ? "rtl" : "ltr"}` on `<html>` element
- Tailwind v4 `rtl:` variant is used throughout for directional arrow rotation
- Logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) are used extensively in Phase 11+ components
- `next-intl` provides locale via `useLocale()` hook

## RTL Issues Found in Codebase Audit

### 1. Physical CSS Properties (left/right) — Must Convert to Logical

**Critical files with physical properties:**

| File | Issue | Fix |
|------|-------|-----|
| `apps/client/src/app/[locale]/(dashboard)/progress/_components/photos-tab.tsx:41` | `left-0 right-0` in photo overlay | Change to `inset-x-0` (already directional-neutral) or `start-0 end-0` |
| `apps/client/src/app/[locale]/(dashboard)/loading.tsx` | Still uses old brutalist layout (border-black, black backgrounds) — entire skeleton is outdated | Rewrite skeleton to match renovated home page layout |

### 2. Carousel scrollLeft RTL Bug

**File:** `apps/client/src/app/[locale]/(dashboard)/page.tsx:71`
```js
const index = Math.round(el.scrollLeft / el.offsetWidth);
```
- In RTL mode, `scrollLeft` returns negative values in most browsers
- The `Math.abs(index)` on line 72 partially handles this but is not robust across browsers
- Firefox returns negative values, Chrome returns positive for RTL scroll
- Fix: Use `Math.abs(el.scrollLeft)` before dividing

### 3. DaySelector Scroll Direction

**File:** `apps/client/src/app/[locale]/(dashboard)/meal-plan/_components/day-selector.tsx`
- Uses `overflow-x-auto` with `flex` — browser natively handles RTL scroll direction
- BUT `scrollIntoView({ inline: "center" })` works correctly in both directions
- The `"Day {i + 1}"` text on line 71 is hardcoded English — not using translations
- Needs RTL scroll-start verification: in RTL, the first day should appear on the right side

### 4. Chat Bubble Alignment

**File:** `apps/client/src/app/[locale]/(dashboard)/tickets/[id]/page.tsx`
- Lines 206/227: `justify-start` and `justify-end` for coach/client messages
- These are direction-neutral (flex respects dir), so they work correctly in RTL
- Lines 214/232: `rounded-bl-sm`/`rounded-br-sm` are already conditionally applied via `isRtl` check -- GOOD
- The `isRtl` variable needs verification it exists and is correctly derived

### 5. Send Button Icon Direction

**File:** `apps/client/src/app/[locale]/(dashboard)/tickets/[id]/page.tsx:270`
- `<Send>` icon does not rotate in RTL — should point left in RTL mode
- Fix: Add `rtl:rotate-180` or `rtl:-scale-x-100` class

### 6. Dashboard Loading Skeleton is Brutalist

**File:** `apps/client/src/app/[locale]/(dashboard)/loading.tsx`
- Still has `border-b-4 border-black`, `bg-black`, `text-black` — old brutalist style
- Should match the renovated home page skeleton (WidgetCard shapes, soft colors)
- Contains `border-e-4 border-black` which is logical (good) but wrong style

### 7. Check-in Step Progress — No RTL Issues

**File:** `apps/client/src/app/[locale]/(dashboard)/check-in/_components/step-progress.tsx`
- Uses `flex items-center justify-between` — direction-neutral
- Connector lines use `flex-1` — auto-adapts
- No physical left/right properties

### 8. No Swipe Implementation Yet

- `react-swipeable` is not imported anywhere in the codebase
- Phase 14 (check-in wizard swipe) has NOT been executed yet
- RTL swipe inversion (RTL-06) depends on Phase 14 delivering swipe functionality
- Plan 15-01 should handle swipe RTL IF Phase 14 adds it; otherwise note as conditional

## UI Package Components — RTL Status

All `@fitfast/ui` components checked:
- `widget-card.tsx`: Uses `ms-3`, `text-start` — RTL-safe
- `section-card.tsx`: Uses flexbox, no physical properties — RTL-safe
- `empty-state.tsx`: Centered layout — RTL-safe
- `page-header.tsx`: Check needed
- `select.tsx`: Has `rtl:` variant for dropdown positioning — RTL-safe
- `dropdown-menu.tsx`: Has slide-in-from-left/right but these are animation directions (Radix handles RTL) — acceptable
- `toast.tsx`: Has slide animations — needs review
- `dialog.tsx`: Centered — RTL-safe

## PWA Standalone Mode

**manifest.json:**
- `"dir": "auto"` — good, respects page direction
- `"display": "standalone"` — correct
- `"orientation": "portrait-primary"` — correct for mobile
- No language-specific manifest variants needed (single manifest with `dir: auto`)

**Safe areas:**
- `dashboard-shell.tsx:36`: Uses `env(safe-area-inset-bottom)` — correct
- `bottom-nav.tsx:50`: Uses `env(safe-area-inset-bottom)` — correct
- viewport meta: `viewportFit: "cover"` — enables safe area insets

**Service Worker:**
- `ServiceWorkerRegistration` component handles SW registration
- No RTL-specific concerns for SW

## Touch Targets Audit

Minimum 44px requirement (VERIFY-02):

| Component | Current Size | Status |
|-----------|-------------|--------|
| Bottom nav items | `min-h-[44px]` | PASS |
| Bottom nav FAB | `h-14 w-14` (56px) | PASS |
| More button | `min-h-[44px]` | PASS |
| Mobile header icons | `h-9 w-9` (36px) | FAIL — needs 44px |
| Desktop nav icons | `h-9 w-9` (36px) | OK (desktop, mouse) |
| DaySelector buttons | `min-w-[48px]` + `py-2.5` | PASS |
| Locale switcher | `h-10 w-10` (40px) | BORDERLINE — needs 44px |
| Carousel dot indicators | `h-1.5 w-1.5/w-4` | FAIL — too small for touch |
| Ticket list chevron | h-4 w-4 (16px) | The row itself is tappable — OK |
| FAQ expand buttons | `h-8 w-8` (32px) | FAIL — needs 44px |
| Photo modal close | `h-9 w-9` (36px) | FAIL — needs 44px |
| Step nav buttons | shadcn Button default | Check height |

## Summary of Work Needed

### Plan 15-01: Logical Properties + RTL Fixes
1. Fix `photos-tab.tsx` physical `left-0 right-0` to `inset-x-0`
2. Fix carousel `scrollLeft` RTL bug in `page.tsx`
3. Fix DaySelector hardcoded "Day" text to use translations
4. Add `rtl:-scale-x-100` to Send icon in ticket conversation
5. Rewrite `loading.tsx` skeleton to match renovated design (removes brutalist artifacts)
6. Audit and fix any remaining physical properties

### Plan 15-02: Visual Verification (checkpoint)
1. Verify all pages in Arabic at 390px viewport
2. Verify all pages in Arabic at 1440px viewport
3. Check DaySelector scrolls from right in RTL
4. Check chat bubbles alignment in RTL

### Plan 15-03: Touch Targets + Regression + PWA
1. Fix mobile header icons to 44px minimum
2. Fix locale switcher to 44px minimum
3. Fix FAQ expand buttons to 44px minimum
4. Fix photo modal close to 44px minimum
5. Fix carousel dots to be tappable (or remove as touch targets)
6. Verify all features work identically to v1.0
7. Verify PWA standalone mode with safe areas
