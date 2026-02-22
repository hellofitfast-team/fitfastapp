# Phase 13: Page-Level Renovation - Research

**Researched:** 2026-02-22
**Domain:** UI renovation of all client dashboard, auth, and empty-state pages
**Confidence:** HIGH

## Summary

Phase 13 is a UI renovation phase -- all the infrastructure (design system components, shell, navigation) is already built from Phase 12. This phase applies those components to every page. The codebase is well-structured with clear patterns: each page is a client component that fetches data via Convex hooks and renders with Tailwind utility classes. The existing pages already have a functional design but use inconsistent patterns -- some inline all UI, others extract sub-components.

The key finding is that the existing pages are already quite functional with a modern card-based design. The renovation is about: (1) adopting the shared `@fitfast/ui` design system components (`PageContainer`, `PageHeader`, `SectionCard`, `WidgetCard`, `EmptyState`), (2) adding missing features specified in requirements (time-of-day greeting, plan cycle countdown, chat bubbles, SVG empty states, horizontal 1-14 day selector), and (3) ensuring desktop responsiveness with proper two-column layouts on large screens.

**Primary recommendation:** Refactor each page to use shared `@fitfast/ui` components, add the missing home screen widgets, convert ticket detail to chat-bubble layout, create SVG-illustrated empty states, and add desktop responsive breakpoints. No new Convex queries needed -- all data is already available.

## Current Page Architecture

### Dashboard Shell (Active: v2)
The app uses `DashboardShell` from `dashboard-shell-v2.tsx` which provides:
- `DesktopTopNav` for large screens
- `MobileHeader` for mobile
- `BottomNav` with 5 items (Home, Meals, Check-In FAB, Workouts, More)
- `MoreMenu` bottom sheet for secondary nav items
- Noise texture overlay, safe-area padding
- `pb-[calc(var(--height-bottom-nav)+env(safe-area-inset-bottom))]` on main content

### Dashboard Layout (Server Component)
`apps/client/src/app/[locale]/(dashboard)/layout.tsx`:
- Server component with Clerk auth + Convex profile/assessment fetch
- Routes based on profile status (pending_approval, inactive, expired, active)
- Passes `userName` to `DashboardShell`

### Data Flow Pattern
All pages follow this pattern:
```typescript
"use client";
// 1. Hook fetches data via Convex
const { data, isLoading, error } = useXxxHook();
// 2. Loading state (inline Loader2 spinner)
// 3. Error/empty state (inline or EmptyState component)
// 4. Main content with Tailwind classes
```

## Page-by-Page Analysis

### 1. Home Screen (`page.tsx` -- 335 lines)
**Current state:** Functional with greeting, stats grid (4 cards), today's meals list, today's workout card, quick actions, progress bar.
**Data source:** `useDashboardData()` -> `api.dashboard.getDashboardData` (single query fetching profile, assessment, plans, completions, tickets, check-in lock)
**Available data already fetched:**
- `profile.fullName` -- for greeting
- `checkInLock.nextCheckInDate` -- for countdown
- `currentMealPlan.planData` -- today's meals
- `currentWorkoutPlan.planData` -- today's workout
- `todayMealCompletions` / `todayWorkoutCompletions` -- completion tracking
- `recentTickets` -- recent tickets (top 5)
- `latestCheckIn` -- last check-in data

**What needs changing for requirements:**
- HOME-01: Time-of-day greeting (Good morning/afternoon/evening) -- currently just "Welcome {name}", needs hour-based greeting
- HOME-02: Today's plan card -- already exists but needs polish with WidgetCard
- HOME-03: Quick stats widgets -- already exists as 4-card grid, adopt WidgetCard component
- HOME-04: Coach message banner -- NEW. Need to check if `recentTickets` with `coach_responded` can serve this, or if a new `systemConfig` entry is needed. The dashboard query already fetches recent tickets.
- HOME-05: Plan cycle countdown -- partially exists (days to next check-in). Need actual plan start/end countdown.

**Plan data for cycle countdown:** `currentMealPlan.startDate` and `currentMealPlan.endDate` are available. Can calculate days remaining in cycle.

### 2. Meal Plan Page (`meal-plan/page.tsx` -- 315 lines)
**Current state:** Has day selector (7 days: Mon-Sun), collapsible meal cards with ingredients/instructions/alternatives, weekly overview stats, streaming support.
**Data source:** `useCurrentMealPlan()` + `usePlanStream()`

**What needs changing:**
- MEAL-01: Horizontal day selector 1-14 -- currently only 7 days (weekday names). The plan is 14-day but `planData.weeklyPlan` is keyed by day name. Need to map days 1-14 to actual dates within `startDate..endDate` range, then derive which weekday for each.
- MEAL-02: Collapsible cards -- already exists with expand/collapse
- MEAL-03: Full details on expand -- already shows macros, ingredients, instructions, alternatives
- MEAL-04: Daily totals -- already shown in green banner

**Key challenge:** The AI generates a `weeklyPlan` keyed by day name (monday..sunday), so days 1-7 and 8-14 map to the same weekday data. The day selector needs to show numbered days 1-14 and map to the correct day-of-week.

### 3. Workout Plan Page (`workout-plan/page.tsx` -- 342 lines)
**Current state:** Has day selector (7 days), workout overview with exercises, warmup, cooldown, rest day display, streaming support.
**Data source:** `useCurrentWorkoutPlan()` + `usePlanStream()`

**What needs changing:**
- WORK-01 through WORK-05: Same day selector pattern as meals (1-14), already has good exercise cards. Polish with design system components.
- Same weekday mapping challenge as meals.

### 4. Tickets Page (`tickets/page.tsx` -- 284 lines)
**Current state:** Combined new ticket form + ticket list on same page. Uses `EmptyState` from `@fitfast/ui`. Links to `tickets/[id]/page.tsx` for detail.
**Data source:** `useTickets()` hook

### 5. Ticket Detail Page (`tickets/[id]/page.tsx` -- 214 lines)
**Current state:** Shows ticket header + conversation thread + reply input. Messages use avatar circles with side-by-side layout but NOT chat bubbles.
**What needs changing:**
- TICKET-01/02: Convert to chat bubble layout -- client messages right-aligned/blue, coach messages left-aligned/gray. Currently messages are left-aligned with small avatar icons. Need to flip client messages to right side with blue bg, remove avatars for bubbles.

### 6. Tracking Page (`tracking/page.tsx` -- 173 lines)
**Current state:** Well-componentized with sub-components (TrackingHeader, DateProgress, MealTracking, WorkoutTracking, DailyReflection, TrackingSkeleton). Uses EmptyState.
**Data source:** `useCurrentMealPlan()`, `useCurrentWorkoutPlan()`, `useTracking()`
**What needs changing:** TRACK-01/02 -- adopt design system components, polish.

### 7. Progress Page (`progress/page.tsx` -- 194 lines)
**Current state:** Has tabs (charts/photos/history), date range filter, stats overview, dynamic chart loading. Well-componentized.
**What needs changing:** Polish with design system.

### 8. Settings Page (`settings/page.tsx` -- 289 lines)
**Current state:** Profile form, notification toggle, account section, plan details. All inline.
**What needs changing:** SET-01/02 -- adopt SectionCard, polish.

### 9. FAQ Page (`faq/page.tsx` -- 135 lines)
**Current state:** Search + accordion list + "still need help" CTA. Fetches from Convex or falls back to i18n keys.
**What needs changing:** FAQ-01 -- polish with design system.

### 10. Auth Pages
**Login (`(auth)/login/page.tsx` -- 222 lines):** Email+password form with Clerk, magic link option.
**Accept Invite:** Password setup for invited users.
**Auth Layout:** Simple header/content/footer with locale switcher.
**What needs changing:** AUTH-01/02 -- modern clean layout, mobile-optimized. Currently functional but plain.

### 11. Loading States
**`loading.tsx`:** OUTDATED -- uses brutalist border-4 style from old design. Needs complete rewrite to match new design system.

## Available Design System Components (from Phase 12)

From `@fitfast/ui`:
| Component | Purpose | Used By |
|-----------|---------|---------|
| `PageContainer` | Consistent page padding/maxWidth/spacing | Should wrap all pages |
| `PageHeader` | Title + description + optional action | Should replace inline headers |
| `SectionCard` | Card with colored header + icon + content | Should replace inline card patterns |
| `WidgetCard` | Stat widget with icon, value, trend | Should replace stats grid on home |
| `EmptyState` | Empty state with icon + title + description + CTA | Already used in tickets/tracking |
| `Skeleton` | Loading placeholders | Already used |
| `Button` | Consistent button styling | Should replace inline buttons |
| `Input` / `Textarea` | Form inputs | Should replace inline inputs |
| `Drawer` | Bottom sheet | Available for mobile interactions |
| `Dialog` | Modal | Available |

### SectionCard Variants
`primary`, `nutrition`, `fitness`, `streak`, `routine`, `neutral` -- each with distinct color scheme.

### WidgetCard Features
Supports: `icon`, `title`, `value`, `subtitle`, `trend` (up/down/neutral with label), `featureColor`, `onClick`, `children`.

## Architecture Patterns

### Recommended Refactoring Pattern
For each page:
1. Wrap content in `<PageContainer maxWidth="md|lg|xl">`
2. Replace inline header with `<PageHeader title={t("...")} description={t("...")} action={...} />`
3. Replace inline card sections with `<SectionCard variant="..." icon={...} title={...}>`
4. Replace inline stat widgets with `<WidgetCard>`
5. Ensure empty states use `<EmptyState>` with SVG illustrations
6. Extract large inline blocks into sub-components (files in `_components/`)

### Page Component Structure
```
page.tsx (thin orchestrator)
├── _components/
│   ├── feature-section.tsx
│   ├── stats-grid.tsx
│   └── empty-state-content.tsx
```

### Day Selector (1-14) Pattern
For meal and workout plans with 14-day cycles:
```typescript
// Map day number (1-14) to weekday name
const getDayOfWeek = (dayNumber: number, startDate: string): string => {
  const start = new Date(startDate);
  const date = new Date(start);
  date.setDate(start.getDate() + dayNumber - 1);
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  return dayNames[date.getDay()];
};
```

### Chat Bubble Pattern for Tickets
```typescript
// Client message (right-aligned, blue)
<div className="flex justify-end">
  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary text-white px-4 py-2.5">
    <p className="text-sm">{msg.message}</p>
    <p className="text-[10px] opacity-70 mt-1">{time}</p>
  </div>
</div>

// Coach message (left-aligned, gray)
<div className="flex justify-start">
  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-neutral-100 px-4 py-2.5">
    <p className="text-sm">{msg.message}</p>
    <p className="text-[10px] text-muted-foreground mt-1">{time}</p>
  </div>
</div>
```

### Empty States with SVG Illustrations
The current `EmptyState` component accepts a LucideIcon. For Phase 13, it needs to support SVG illustrations. Options:
1. Extend `EmptyState` to accept `illustration?: React.ReactNode` as alternative to `icon`
2. Create inline SVG components for each empty state context
3. Use simple, contextual SVG illustrations (not complex art)

Six empty states needed (EMPTY-01 through EMPTY-06):
- No meal plan yet
- No workout plan yet
- No check-in history
- No tickets
- No tracking data
- No progress data

### Desktop Responsive Layout (DESK-02, DESK-03)
The home page should use a two-column layout on `lg:` breakpoint:
- Left column: Main content (today's plan, meals)
- Right column: Stats widgets, quick actions, progress

Other pages use `max-w-3xl` or `max-w-4xl` with centered content, which works fine for desktop.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Page layout consistency | Custom padding/spacing per page | `PageContainer` from `@fitfast/ui` | Ensures consistent spacing across all pages |
| Card sections | Inline card divs with headers | `SectionCard` with appropriate variant | Consistent header styling, color coding |
| Stat widgets | Inline stat card divs | `WidgetCard` with trend support | Handles layout, trend arrows, click interactions |
| Empty states | Inline empty divs per page | `EmptyState` (extended) | Consistent styling, CTA patterns |
| Chat bubbles | Complex div nesting | Reusable `ChatBubble` component | RTL support, consistent sizing |

## Common Pitfalls

### Pitfall 1: Plan Data Structure Mismatch (1-14 Day Selector)
**What goes wrong:** The AI generates `weeklyPlan` keyed by day name (monday-sunday), not by day number. Trying to access `planData.weeklyPlan[dayNumber]` will return undefined.
**Why it happens:** Plan data is generated for a 7-day week that repeats.
**How to avoid:** Always map day number to weekday name using the plan's `startDate`. Days 1-7 and 8-14 map to the same weekday data since it's a weekly plan that repeats.
**Warning signs:** Empty plan display when selecting days 8-14.

### Pitfall 2: RTL Layout for Chat Bubbles
**What goes wrong:** Chat bubbles that should be right-aligned for client appear left-aligned in Arabic.
**Why it happens:** `justify-end` and `text-right` may flip in RTL mode.
**How to avoid:** Use logical properties (`justify-end` works correctly with RTL). Test both languages. Use `rounded-br-sm` / `rounded-bl-sm` which need to be `rounded-be-sm` / `rounded-bs-sm` for RTL correctness, or use `rtl:` prefixes.
**Warning signs:** Bubbles appearing on wrong side in Arabic.

### Pitfall 3: Loading State Mismatch
**What goes wrong:** The existing `loading.tsx` uses brutalist (border-4, black) design from an old phase. If not updated, users see jarring style change during loading.
**Why it happens:** `loading.tsx` was written for a previous design iteration.
**How to avoid:** Rewrite `loading.tsx` to match the current design system with proper skeleton components.

### Pitfall 4: Hardcoded Strings in Page Components
**What goes wrong:** Some pages have hardcoded Arabic/English strings (e.g., `locale === "ar" ? "..." : "..."`).
**Why it happens:** Quick fixes bypassing i18n.
**How to avoid:** Move all strings to translation files. Search for `locale === "ar"` patterns and replace with `t()` calls.

### Pitfall 5: Inconsistent Max-Width Across Pages
**What goes wrong:** Some pages use `max-w-3xl`, others `max-w-5xl`, others `max-w-2xl`.
**Why it happens:** Each page was built independently.
**How to avoid:** Use `PageContainer` with consistent `maxWidth` prop. Home page: `xl`, plan pages: `md`, settings: `sm`.

### Pitfall 6: Bottom Nav Overlap on Mobile
**What goes wrong:** Content gets hidden behind the bottom nav.
**Why it happens:** Main content needs bottom padding equal to nav height + safe area.
**How to avoid:** The shell already handles this with `pb-[calc(var(--height-bottom-nav)+env(safe-area-inset-bottom))]`. Don't add extra bottom padding in pages.

## Convex Data Availability

All data needed for Phase 13 requirements is already available from existing queries:

| Requirement | Data Source | Available? |
|-------------|-------------|------------|
| Time-of-day greeting | Client-side `new Date().getHours()` | YES |
| User name | `dashboardData.profile.fullName` | YES |
| Today's plan card | `dashboardData.currentMealPlan` + `currentWorkoutPlan` | YES |
| Quick stats (progress %) | Derived from completions | YES |
| Coach message banner | `dashboardData.recentTickets` filtered by `coach_responded` | YES |
| Plan cycle countdown | `currentMealPlan.startDate` / `endDate` | YES |
| Meal plan day data | `mealPlan.planData.weeklyPlan[dayName]` | YES |
| Workout plan day data | `workoutPlan.planData.weeklyPlan[dayName]` | YES |
| Ticket messages | `ticket.messages[]` with sender/message/timestamp | YES |
| Check-in lock | `dashboardData.checkInLock` | YES |

**No new Convex queries or mutations are needed for Phase 13.**

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Inline card divs everywhere | `SectionCard` / `WidgetCard` components | Consistent design, less code per page |
| Brutalist loading skeleton | Modern skeleton with neutral colors | Smooth loading experience |
| 7-day week selector | 1-14 day numbered selector | Better mapping to plan cycle |
| Left-aligned message thread | Chat bubble layout | More intuitive conversation UI |
| LucideIcon-only empty states | SVG illustration empty states | More engaging, contextual |
| Mobile-only layout | Responsive with desktop breakpoints | Better desktop experience |

## Open Questions

1. **Coach Message Banner Data Source**
   - What we know: Dashboard query fetches `recentTickets` (top 5). A ticket with `status: "coach_responded"` could indicate a coach message.
   - What's unclear: Is "coach message" meant to be a special announcement, or just "you have unread coach replies"?
   - Recommendation: Use `recentTickets` filtered by `coach_responded` status as the banner trigger. Shows "Coach replied to your ticket" with link to ticket. If a dedicated announcement feature is needed later, it can use `systemConfig`.

2. **SVG Illustrations for Empty States**
   - What we know: Need 6 contextual SVG illustrations.
   - What's unclear: Complexity level -- simple icons vs. detailed illustrations.
   - Recommendation: Use simple, minimal SVG illustrations (3-5 elements, monochrome with primary color accent). Create as React components in `@fitfast/ui` or as inline SVGs in the empty state wrappers. Keep them lightweight for PWA performance.

3. **14-Day Selector Scrolling UX**
   - What we know: 14 items in a horizontal scroll.
   - What's unclear: Should the current day auto-scroll into view? Should it snap?
   - Recommendation: Auto-scroll to today's day number on mount. Use `scroll-snap-type: x mandatory` with `scroll-snap-align: center` for smooth snapping.

## Sources

### Primary (HIGH confidence)
- Direct codebase analysis of all page files, hooks, Convex schema, and UI components
- `convex/schema.ts` -- full data model
- `convex/dashboard.ts` -- dashboard query returning all home screen data
- `packages/ui/src/` -- all available design system components

### Secondary (MEDIUM confidence)
- Tailwind CSS RTL utilities documentation (logical properties)
- shadcn/ui patterns for card/empty-state components

## Metadata

**Confidence breakdown:**
- Page structure analysis: HIGH -- direct code reading
- Data availability: HIGH -- Convex schema and queries verified
- Design system components: HIGH -- all components read and analyzed
- Chat bubble RTL: MEDIUM -- needs testing
- 14-day selector mapping: HIGH -- logic straightforward

**Research date:** 2026-02-22
**Valid until:** 2026-03-22 (stable codebase, no external dependency changes expected)
