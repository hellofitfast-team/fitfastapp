# Phase 13: Page-Level Renovation — Research

**Researched:** 2026-02-22
**Domain:** Next.js App Router page composition, CSS-only carousel, chat bubble UI, React state patterns, RTL-aware responsive layout
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Home Screen Layout:**
- Motivational greeting with user's name — rotating motivational messages (not time-of-day), e.g., "Keep pushing, Ahmed"
- Horizontal carousel-style cards on mobile — auto-scroll every few seconds + manual swipe with dot indicators
- Desktop layout is at Claude's discretion (carousel may not be ideal for wide screens)
- Cards should use royal blue brand color accents — match the main brand color throughout
- Today's plan card density: Claude's discretion
- Coach message banner behavior: Claude's discretion
- Plan cycle countdown style: Claude's discretion
- Quick stats widget metrics: Claude's discretion

**Plan Pages (Meal + Workout):**
- Day selector (1-14) style: Claude's discretion (horizontal scrollable pills or calendar strip)
- Meal cards use accordion collapse — only one card open at a time, tap header to toggle
- Collapsed meal card info density: Claude's discretion
- Workout exercises when expanded: detailed mini-cards with muscle group tags, sets/reps, and optional notes (not a simple list)

**Tickets & Conversation UI:**
- WhatsApp/iMessage-style rounded chat bubbles — client messages right/blue, coach messages left/gray
- Both date separators ("Today", "Yesterday", "Feb 15") AND per-message timestamps (small time under each bubble)
- Ticket list view: minimal — subject, status badge, last message preview, time ago
- Ticket status: colored pill badges — green for open, gray for closed, yellow for waiting

**Empty States & Auth Pages:**
- Flat vector illustrations — colorful, friendly, modern SaaS style
- Royal blue as dominant color in illustrations with neutral accents
- CTA buttons use friendly nudge tone — "Let's get started!", "Your coach is here to help", "Time to check in!" (conversational, not command-like)
- Auth page layout: Claude's discretion

### Claude's Discretion

- Today's plan card information density (minimal summary vs preview with details)
- Coach message banner behavior (persistent vs dismissible)
- Plan cycle countdown presentation (ring vs badge vs other)
- Quick stats widget metrics selection
- Day selector style for plan pages
- Collapsed meal card info shown
- Desktop layout adaptation (home screen carousel → appropriate desktop pattern)
- Auth page layout (centered card vs split layout)
- Loading skeleton designs throughout
- Exact spacing, typography, and error state handling

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| HOME-01 | Greeting header with time-of-day context ("Good morning, Ahmed") — CONTEXT overrides to rotating motivational messages, not time-of-day | Use `useEffect` with `setInterval` to rotate through a curated motivational messages array; user name from `useDashboardData()` |
| HOME-02 | Today's plan at-a-glance card (meal or workout focus) | Already partially exists in `page.tsx`; needs renovation into WidgetCard-style carousel card |
| HOME-03 | Quick stats widget cards (weight trend, streak, next check-in) | WidgetCard primitive from Phase 12 is ready; `useDashboardData()` supplies the data |
| HOME-04 | Coach message banner when unread ticket reply exists | Read unread coach responses from `useTickets()` hook; render dismissible/persistent banner |
| HOME-05 | Plan cycle countdown ("Day 8 of 14") | Compute from `mealPlan.startDate`/`endDate` in `useDashboardData()` |
| MEAL-01 | Horizontal scrollable day selector (1-14) with current day highlighted | Days 1-14 mapped from plan start date; overflow-x-auto pills; today pre-selected |
| MEAL-02 | Collapsed meal cards (name, calories, ingredient preview) — tap to expand | Accordion pattern already exists in `meal-plan/page.tsx`; needs: one-open-at-a-time enforcement (confirmed locked) |
| MEAL-03 | Daily nutrition summary bar (calories, protein/carbs/fat) | Exists as "daily totals" section; needs visual renovation to pill/badge summary bar |
| MEAL-04 | Meal swap indicator surfacing AI alternatives | Meal data includes `alternatives` array; collapsed card can show "↔ 2 alternatives" badge |
| WORK-01 | Day selector matching meal plan pattern (reuse component) | Extract shared `DaySelector` component; workout uses same horizontal scrollable pills |
| WORK-02 | Exercise cards with sets/reps/weight in clean grid | Exists but uses simple list; renovate to mini-cards with tag grid layout |
| WORK-03 | Muscle group tags (color-coded pills) | `targetMuscles` array exists in plan data; render as colored `bg-fitness/10 text-fitness` pills |
| WORK-04 | Collapsible exercise detail (summary → full set breakdown) | New pattern: collapsed shows name + sets/reps; expanded shows all details + notes |
| WORK-05 | Daily workout summary card (type, exercise count, est. duration) | Workout overview card already exists; needs WidgetCard treatment + visual polish |
| TRACK-01 | Renovated tracking page with modern card layout | `tracking/page.tsx` uses sub-components; renovate `TrackingHeader`, `MealTracking`, `WorkoutTracking`, `DailyReflection` sub-components |
| TRACK-02 | Renovated progress charts page | `progress/page.tsx` with tabs; renovate stats overview, chart cards, history tab |
| TICKET-01 | Chat bubble conversation view (client right/blue, coach left/gray) | `tickets/[id]/page.tsx` has basic chat layout; needs: true bubble styling, date separators, per-message timestamps, reply area renovation |
| TICKET-02 | Ticket list with modern card styling | `tickets/page.tsx` list exists; needs: status badge redesign (green/gray/yellow per CONTEXT), last message preview, time ago format |
| SET-01 | Gear icon access from header | `MobileHeader` and `DesktopTopNav` already exist; gear icon links to `/settings` — verify or add if missing |
| SET-02 | Settings page with modern form layout | `settings/page.tsx` exists; needs: section card renovation, profile form polish, notification toggle visual |
| FAQ-01 | FAQ page with collapsible question cards | `faq/page.tsx` accordion exists; needs: animation, better expanded state, search result highlight |
| EMPTY-01 | Home — "Coach is preparing your first plan" / "Account under review" | Use `EmptyState` with `variant="primary"` when no plan exists on home page |
| EMPTY-02 | Meal Plan — "No meal plan yet, complete check-in" | `EmptyState` with `variant="nutrition"` + CTA to check-in; friendly CTA copy per CONTEXT |
| EMPTY-03 | Workout Plan — "No workout plan yet" | `EmptyState` with `variant="fitness"` + CTA |
| EMPTY-04 | Check-in — "Next check-in on [date]" | Check-in locked state shows countdown; `check-in-locked.tsx` exists; renovate to EmptyState pattern |
| EMPTY-05 | Tickets — "No messages yet" | Already uses `EmptyState`; update variant + friendly CTA copy per CONTEXT |
| EMPTY-06 | Tracking/Progress — "Complete check-ins to see data" | Already uses `EmptyState` in tracking page; update variant + copy |
| AUTH-01 | Login page — modern clean layout, mobile-optimized form | `login/page.tsx` form exists (already clean); auth layout is centered card; needs auth layout renovation if split layout chosen |
| AUTH-02 | Signup page — matching design, social proof elements | Signup via `accept-invite/page.tsx` — confirm page exists and matches login design |
| DESK-02 | Content area with max-width constraint and centered layout | All pages use `max-w-3xl mx-auto` or `max-w-5xl mx-auto` with `px-4 lg:px-6`; verify consistency |
| DESK-03 | Responsive card grids (2-3 columns on desktop) | Stats grid uses `grid-cols-2 lg:grid-cols-4`; home cards on desktop get grid layout |
</phase_requirements>

---

## Summary

Phase 13 is the largest visual renovation in this milestone — it touches every client-facing page, applying the design system from Phase 12 into cohesive, mobile-native experiences. The good news: the data layer is fully functional (Convex queries, hooks, existing logic) and Phase 12 delivered the building blocks (WidgetCard, EmptyState, Skeleton variants, animation tokens). Phase 13's work is 100% presentational.

The key technical challenges in this phase are:

1. **The home page carousel** — a CSS-only auto-scrolling card carousel with manual swipe and dot indicators. No Framer Motion is available (locked out). The scroll-snap API is the right approach; `setInterval` drives the auto-advance; touch events via `onTouchStart`/`onTouchEnd` detect swipe direction. RTL complicates scroll direction.

2. **Chat bubble layout** — the tickets conversation view needs a structural overhaul. The current implementation uses a left-aligned list with avatar+card layout. The target is WhatsApp-style: client messages right-aligned in blue rounded bubbles, coach messages left-aligned in gray bubbles, with date separators between groups and time stamps below each bubble.

3. **Accordion one-at-a-time** — the meal plan page currently allows multiple open cards simultaneously. The CONTEXT decision is: only one card open at a time. This is already the pattern used (single `expandedMeal` state integer vs `null`), but must be verified and enforced in the renovation.

4. **Rotating motivational greeting** — the CONTEXT decision overrides HOME-01 from "time-of-day" to "rotating motivational messages." This is a pure frontend pattern: a fixed array of message templates, `useState` for the current index, and `useEffect` with `setInterval` to advance every few seconds.

5. **i18n key additions** — motivational messages, chat date separators, new empty state CTA copy, and ticket status badge labels all need new translation keys in both `en.json` and `ar.json`.

**Primary recommendation:** Organize Phase 13 into page-by-page implementation units (Home, Plan pages, Tickets, Tracking/Progress, Settings/FAQ, Auth/Empty states). Each unit is self-contained and can be planned as a separate PLAN.md task group.

---

## Standard Stack

### Core (already installed — no new dependencies needed)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React (useState, useEffect, useRef) | 19.2.3 | Carousel state, scroll behavior, date grouping | Already installed; no external carousel lib needed |
| CSS Scroll Snap | Browser native | Smooth carousel scrolling with snap points | Zero bundle cost; hardware-accelerated; works with RTL |
| Tailwind CSS v4 | 4.1.18 | All visual classes; `@theme` tokens from Phase 12 | Already installed; Phase 12 tokens now available |
| lucide-react | 0.563.0 | Icons throughout all pages | Already installed and optimized |
| `@fitfast/ui` primitives | workspace | WidgetCard, EmptyState, Skeleton, PageHeader, Button | Phase 12 delivered all needed primitives |
| next-intl | 4.8.2 | All string translations; new keys needed in en.json + ar.json | Already integrated |
| date-fns or native Date | — | Date grouping for chat separators ("Today", "Yesterday") | Use native Date — no additional library needed |

### Pattern Libraries Already in Codebase

| Pattern | Where Used | How Phase 13 Uses It |
|---------|-----------|----------------------|
| `animate-slide-up` with `animationDelay` stagger | Phase 12 defined | Apply to card lists, chat bubbles, FAQ items |
| `active:scale-[0.97]` press feedback | All interactive elements | Continue on all new interactive cards |
| `hover:shadow-lifted` | WidgetCard | All card types |
| `scrollbar-hide` utility class | Day selector pills | Carousel + scrollable areas |
| `overflow-x-auto` scrollable strips | Day selector | Carousel outer track |
| `cn()` from `@fitfast/ui/cn` | All component files | Continue |
| `EmptyState` with `variant` prop | tickets/tracking pages | Propagate to all 6 empty states with correct variants |

### No New Dependencies

All required functionality can be implemented with React, CSS, and the existing Tailwind token set. Specifically:
- **Carousel**: CSS `scroll-snap-type: x mandatory` + `setInterval` auto-scroll via `scrollLeft` manipulation
- **Swipe detection**: `onTouchStart`/`onTouchEnd` native events — no library needed
- **Chat bubbles**: Conditional className based on `msg.sender === "coach"` — pure CSS
- **Date separators**: Group messages by date using native `Date` comparisons
- **Rotating messages**: `useState` index + `useEffect` with `setInterval`

---

## Architecture Patterns

### Recommended File Structure for Phase 13

```
apps/client/src/
├── app/[locale]/(dashboard)/
│   ├── page.tsx                          # HOME: full renovation (carousel + greeting + stats)
│   ├── loading.tsx                       # Already modernized in Phase 12 — no changes
│   ├── meal-plan/
│   │   ├── page.tsx                      # MEAL: day selector + accordion renovation
│   │   └── _components/
│   │       └── day-selector.tsx          # NEW: shared with workout-plan
│   ├── workout-plan/
│   │   ├── page.tsx                      # WORK: exercises as mini-cards + muscle tags
│   │   └── _components/
│   │       └── day-selector.tsx          # Use shared component from meal-plan OR extract to ui
│   ├── tracking/
│   │   ├── page.tsx                      # TRACK-01: no changes to orchestration
│   │   └── _components/
│   │       ├── tracking-header.tsx       # Renovate
│   │       ├── meal-tracking.tsx         # Renovate card layout
│   │       ├── workout-tracking.tsx      # Renovate card layout
│   │       └── daily-reflection.tsx      # Renovate card layout
│   ├── tickets/
│   │   ├── page.tsx                      # TICKET-02: ticket list + modern status badges
│   │   └── [id]/
│   │       └── page.tsx                  # TICKET-01: chat bubble overhaul
│   ├── settings/
│   │   └── page.tsx                      # SET-02: form layout renovation
│   ├── faq/
│   │   └── page.tsx                      # FAQ-01: accordion animation + search highlight
│   └── progress/
│       ├── page.tsx                      # TRACK-02: tab navigation renovation
│       └── _components/
│           └── (existing components)     # Renovate each stats-overview, history-tab, photos-tab
├── app/[locale]/(auth)/
│   ├── layout.tsx                        # AUTH: layout renovation decision
│   └── login/page.tsx                    # AUTH-01: polish (already fairly clean)
└── messages/
    ├── en.json                           # ADD: motivational messages, new CTA copy, date labels
    └── ar.json                           # MIRROR: all new keys in Arabic
```

### Pattern 1: CSS-Only Carousel with Auto-Scroll and Dot Indicators

**What:** Home page horizontal scrollable cards with auto-advance every few seconds and manual swipe/click support. RTL-aware.

**When to use:** Home page carousel only (mobile). Desktop gets a different layout.

**Implementation approach (verified for RTL compatibility):**

```tsx
// apps/client/src/app/[locale]/(dashboard)/page.tsx
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useLocale } from "next-intl";
import { cn } from "@fitfast/ui/cn";

// Carousel card data (sections of the home screen)
const SECTIONS = ["greeting", "today-meals", "today-workout", "quick-stats"] as const;

export function HomeCarousel({ children }: { children: React.ReactNode[] }) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = children.length;

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth;
    // RTL: scroll direction is reversed
    const scrollTarget = isRtl
      ? (totalCards - 1 - index) * cardWidth
      : index * cardWidth;
    el.scrollTo({ left: scrollTarget, behavior: "smooth" });
    setActiveIndex(index);
  }, [isRtl, totalCards]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalCards;
        scrollToIndex(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [totalCards, scrollToIndex]);

  return (
    <div className="relative -mx-4">
      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
        onScroll={(e) => {
          const el = e.currentTarget;
          const cardWidth = el.offsetWidth;
          const rawIndex = Math.round(el.scrollLeft / cardWidth);
          const index = isRtl ? totalCards - 1 - rawIndex : rawIndex;
          setActiveIndex(Math.max(0, Math.min(totalCards - 1, index)));
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-center px-4"
            style={{ scrollSnapAlign: "center" }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeIndex
                ? "w-4 bg-primary"
                : "w-1.5 bg-neutral-300"
            )}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
```

**RTL consideration**: `scrollLeft` in RTL mode behaves differently across browsers. On Firefox/Safari, RTL scroll starts at a negative value or the max; on Chrome it starts at 0. Use `scrollRef.current.scrollLeft` carefully or use `scrollIntoView()` on card elements instead for more reliable cross-browser RTL behavior.

**Alternative (more reliable RTL)**: Use `element.scrollIntoView({ behavior: 'smooth', inline: 'center' })` on individual card refs instead of manipulating `scrollLeft` directly.

**Desktop**: Replace the carousel with a 2-column grid showing the same content without auto-scroll. The carousel wrapper is `lg:hidden`; a static grid is `hidden lg:grid lg:grid-cols-2`.

### Pattern 2: Accordion with One-Open-At-A-Time Enforcement

**What:** Meal plan cards where only one meal can be expanded at a time. Tap header to toggle; opening a new card closes the current one.

**When to use:** Meal plan page (enforced by CONTEXT decision). FAQ page also uses this pattern.

**Current state:** `meal-plan/page.tsx` already has `const [expandedMeal, setExpandedMeal] = useState<number | null>(0)` — this is correct. Opening a meal sets the index; clicking the same one sets `null`. This already enforces one-open-at-a-time.

**The gap:** The animation on expand/collapse is missing. CSS `max-height` transition is the standard CSS-only approach.

```tsx
// Expand/collapse animation pattern (CSS-only, no framer-motion)
<div
  className={cn(
    "overflow-hidden transition-all duration-300 ease-in-out",
    expandedMeal === index
      ? "max-h-[800px] opacity-100"
      : "max-h-0 opacity-0"
  )}
>
  {/* expanded content */}
</div>
```

**Pitfall:** `max-height` animation requires a fixed max value — use a value larger than the content will ever be (e.g., `max-h-[800px]`). The animation still looks natural because it only animates the visible portion. Do NOT use `max-h-screen` as this creates a very slow animation on tall screens.

### Pattern 3: Chat Bubble Layout

**What:** WhatsApp-style conversation with client messages right/blue and coach messages left/gray. Date separators group messages by day. Per-message timestamps appear under each bubble.

**When to use:** `tickets/[id]/page.tsx` conversation thread.

**Current state:** The existing implementation uses a `flex gap-2.5` layout with avatar circles + content cards. It needs to be replaced structurally.

```tsx
// Chat message bubble pattern
function ChatBubble({ message, isCoach }: { message: TicketMessage; isCoach: boolean }) {
  return (
    <div className={cn("flex items-end gap-2", isCoach ? "justify-start" : "justify-end")}>
      {/* Coach avatar — left side only */}
      {isCoach && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 mb-1">
          <Shield className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
      )}

      {/* Bubble */}
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm",
          isCoach
            ? "rounded-bl-sm bg-neutral-100 text-foreground"          // coach: left, gray, flat bottom-left
            : "rounded-br-sm bg-primary text-primary-foreground"       // client: right, blue, flat bottom-right
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.message}</p>
        <p className={cn(
          "text-[10px] mt-1",
          isCoach ? "text-muted-foreground" : "text-primary-foreground/70"
        )}>
          {formatTime(message.timestamp)}
        </p>
      </div>

      {/* Client avatar — right side only (optional, WhatsApp omits it) */}
    </div>
  );
}

// Date separator
function DateSeparator({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs text-muted-foreground font-medium px-2 bg-background rounded-full">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// Grouping logic — group messages by calendar day
function groupMessagesByDate(messages: TicketMessage[]): Array<{ date: string; label: string; messages: TicketMessage[] }> {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const groups: Map<string, TicketMessage[]> = new Map();
  for (const msg of messages) {
    const d = new Date(msg.timestamp);
    const key = d.toISOString().split("T")[0]; // "2026-02-20"
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(msg);
  }

  return Array.from(groups.entries()).map(([key, msgs]) => {
    const d = new Date(key);
    const isToday = d.toDateString() === today.toDateString();
    const isYesterday = d.toDateString() === yesterday.toDateString();
    const label = isToday ? "Today" : isYesterday ? "Yesterday" : d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return { date: key, label, messages: msgs };
  });
}
```

**RTL consideration**: The `justify-start`/`justify-end` flex direction is RTL-safe — the browser handles it. The bubble radius exceptions (`rounded-bl-sm`, `rounded-br-sm`) do NOT flip in RTL automatically. Solution: use `rounded-ss-sm` (start-start) instead of `rounded-bl-sm` and `rounded-se-sm` (start-end) instead of `rounded-br-sm`. However CSS logical border-radius properties have limited support. Safer approach: detect locale and apply conditional class.

### Pattern 4: Rotating Motivational Greeting

**What:** Replace static "Welcome, [name]" with rotating motivational messages from a fixed array. A new message appears every few seconds.

**When to use:** Home page greeting header only.

```tsx
// Motivational messages — needs Arabic translation too
const MOTIVATIONAL_MESSAGES_EN = [
  "Keep pushing, {name}!",
  "You're on a roll, {name}!",
  "Stay consistent, {name}!",
  "Every rep counts, {name}!",
  "You've got this, {name}!",
  "Strong effort, {name}!",
  "One day at a time, {name}!",
] as const;

// Better: store in en.json/ar.json under dashboard.motivational[0..6]
// Then use: t(`dashboard.motivational.${currentIndex}`, { name: userName })

function MotivationalGreeting({ userName }: { userName: string }) {
  const t = useTranslations("dashboard");
  const [messageIndex, setMessageIndex] = useState(0);
  const MESSAGE_COUNT = 7; // matches number of keys in dashboard.motivational.*

  useEffect(() => {
    const id = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGE_COUNT);
    }, 5000); // rotate every 5 seconds
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">
        {formatDateWithWeekday(new Date(), locale)}
      </p>
      <h1 className="text-2xl font-bold animate-fade-in" key={messageIndex}>
        {t(`motivational.${messageIndex}`, { name: userName })}
      </h1>
    </div>
  );
}
```

**Note:** Using `key={messageIndex}` on the `<h1>` causes React to remount the element on each message change, re-triggering the `animate-fade-in` CSS animation. This is the correct CSS-only approach for "text swaps with fade" — no JS animation library needed.

### Pattern 5: Ticket Status Badges (CONTEXT spec)

**What:** Colored pill badges for ticket status. Green for open, gray for closed, yellow for waiting.

**Current state:** `tickets/page.tsx` uses `bg-primary/10 text-primary` for open/coach_responded and `bg-success-500/10 text-success-500` for closed. CONTEXT specifies: green for open, gray for closed, yellow for waiting (coach_responded).

```tsx
// Updated status badge style mapping
const STATUS_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  open: { bg: "bg-success-500/10", text: "text-success-500", label: "Open" },
  coach_responded: { bg: "bg-[#F59E0B]/10", text: "text-[#F59E0B]", label: "Waiting" },
  closed: { bg: "bg-neutral-100", text: "text-muted-foreground", label: "Closed" },
};
// Note: use semantic token bg-streak/10 text-streak for yellow if --color-streak is #F59E0B
// Verify: is --color-streak defined in globals.css? YES — confirmed in Phase 12 verification.
// So: bg-streak/10 text-streak for coach_responded
```

### Pattern 6: Workout Exercise Mini-Cards with Muscle Group Tags

**What:** Exercises shown as expanded mini-cards when workout section is open. Each card has: exercise name, sets/reps/rest tags in a grid, muscle group colored pills, optional notes.

**Current state:** `workout-plan/page.tsx` exercises are in a `divide-y` list. CONTEXT says: "detailed mini-cards with muscle group tags, sets/reps, and optional notes."

```tsx
// Exercise mini-card (inside expanded workout section)
function ExerciseMiniCard({ exercise, index }: { exercise: WorkoutExercise; index: number }) {
  return (
    <div className="rounded-xl border border-border bg-background p-3.5 space-y-3">
      {/* Header row */}
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-fitness/10 text-fitness text-xs font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm">{exercise.name}</h4>
          {/* Muscle group tags */}
          {exercise.muscleGroups && (
            <div className="flex flex-wrap gap-1 mt-1">
              {exercise.muscleGroups.map((muscle) => (
                <span key={muscle} className="rounded-full bg-fitness/10 text-fitness px-2 py-0.5 text-[10px] font-medium">
                  {muscle}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sets/reps/rest grid */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-neutral-50 p-2 text-center">
          <p className="text-sm font-bold">{exercise.sets}</p>
          <p className="text-[10px] text-muted-foreground">Sets</p>
        </div>
        <div className="rounded-lg bg-neutral-50 p-2 text-center">
          <p className="text-sm font-bold">{exercise.reps}</p>
          <p className="text-[10px] text-muted-foreground">Reps</p>
        </div>
        <div className="rounded-lg bg-neutral-50 p-2 text-center">
          <p className="text-sm font-bold">{exercise.rest}s</p>
          <p className="text-[10px] text-muted-foreground">Rest</p>
        </div>
      </div>

      {/* Optional notes */}
      {exercise.notes && (
        <p className="text-xs text-muted-foreground italic bg-neutral-50 rounded-lg p-2.5">
          {exercise.notes}
        </p>
      )}
    </div>
  );
}
```

### Pattern 7: EmptyState Integration (All 6 States)

**What:** Use the Phase 12 `EmptyState` component with correct variants and CONTEXT-specified friendly CTA copy.

**Current state:** Some pages already use `EmptyState` (tickets, tracking). Others use inline empty divs (meal-plan, workout-plan, home page).

| Empty State | EMPTY ID | Variant | Icon | CTA Copy (CONTEXT tone) |
|------------|----------|---------|------|------------------------|
| Home — no plan yet | EMPTY-01 | `primary` | `Dumbbell` | "Let's get started!" |
| Meal Plan — no plan | EMPTY-02 | `nutrition` | `UtensilsCrossed` | "Time to check in!" |
| Workout Plan — no plan | EMPTY-03 | `fitness` | `Dumbbell` | "Let's get started!" |
| Check-in locked | EMPTY-04 | `primary` | `ClipboardCheck` | Countdown display, no CTA (locked state) |
| Tickets — none yet | EMPTY-05 | `primary` | `MessageSquare` | "Your coach is here to help" |
| Tracking — no plans | EMPTY-06 | `routine` | `Target` | "Time to check in!" |

**i18n keys needed** in both `en.json`/`ar.json` under `emptyStates`:
- Add `action` key to `noMealPlan`, `noWorkoutPlan`, `noPhotos`, `noFaqs`, `noTrackingData` (currently only `noTickets` and `noCheckIns` have `action`)

### Anti-Patterns to Avoid

- **Custom scroll detection via onTouchStart/End for carousel pagination**: Unreliable for RTL. Use `scroll` event + `scrollLeft` calculation instead for active dot tracking.
- **`max-height: 100%` in expand animations**: Doesn't animate — use a fixed large pixel value like `max-h-[600px]`.
- **Hardcoded hex `bg-[#F59E0B]`** for yellow status badge instead of `bg-streak/10 text-streak` — use semantic token.
- **`margin-left`/`margin-right` for chat bubble alignment**: Use flex `justify-start`/`justify-end` — RTL-safe.
- **`border-radius` values `rounded-bl-sm`/`rounded-br-sm` for chat bubble tails**: Not RTL-aware. Use conditional classes based on locale, or skip the directional radius (just `rounded-2xl` for all bubbles).
- **Putting carousel auto-interval in the render function**: Always clean up with `return () => clearInterval(id)` in the `useEffect` cleanup.
- **Forgetting `key={messageIndex}` on animated text**: Without the key, React does not remount the element and the CSS animation does not re-fire.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Carousel library | Custom swipe gesture system with IntersectionObserver | CSS `scroll-snap-type: x mandatory` + `setInterval` + `scrollTo` | Native browser feature, GPU-accelerated, RTL-compatible, zero bundle cost |
| Animation library for expand/collapse | Framer Motion or React Spring | CSS `max-height` + `transition-all` + `overflow-hidden` | Framer Motion locked out by project decision; CSS is sufficient |
| Date grouping library (chat) | moment.js, date-fns | Native `Date` with `toDateString()` comparison | Only needs today/yesterday/date — no library justified |
| Custom Badge/Pill component | New shared component | Inline Tailwind classes `rounded-full px-2.5 py-0.5 text-xs font-medium` | Simple enough; DRY via local helper function |
| Custom form components | New Input/Select primitives | Use existing HTML elements with Tailwind classes matching current pages | Already consistent across settings, tickets, auth pages |

---

## Common Pitfalls

### Pitfall 1: RTL Carousel `scrollLeft` Cross-Browser Inconsistency

**What goes wrong:** In RTL mode, `scrollLeft` is 0 at the rightmost position in Chrome but at the `scrollWidth - clientWidth` in Firefox. Auto-advance code that sets `scrollLeft` directly breaks in Firefox RTL.

**Why it happens:** The W3C spec was ambiguous; browsers implemented it differently for RTL. Chrome normalized it to start at 0; Firefox/Safari use negative values or start from the other end.

**How to avoid:** Use `scrollIntoView({ behavior: 'smooth', inline: 'center' })` on individual card refs instead of setting `scrollLeft` directly. Keep an array of refs (`cardRefs`) and call `cardRefs[targetIndex].current?.scrollIntoView(...)`. This is RTL-agnostic.

**Warning signs:** Carousel auto-advance works in Chrome but skips or resets in Firefox when the app is in Arabic mode.

### Pitfall 2: `animate-fade-in` Not Retriggering on Message Change

**What goes wrong:** The motivational message changes text but does NOT fade — the animation fired once on mount and won't fire again without a DOM remount.

**Why it happens:** CSS animations only run once per element mount. If the same element's text changes via React state, no new animation fires.

**How to avoid:** Add `key={messageIndex}` to the `<h1>` element. React will unmount and remount it on each key change, re-triggering the CSS animation.

**Warning signs:** Message text changes but appears instantly without fade.

### Pitfall 3: Chat Date Separator i18n Missing Arabic Labels

**What goes wrong:** "Today" and "Yesterday" appear in English in the Arabic app.

**Why it happens:** Hardcoded English strings for date separator labels.

**How to avoid:** Add `dashboard.chat.today`, `dashboard.chat.yesterday` keys to both `en.json` and `ar.json`. Use `t("dashboard.chat.today")` instead of the string literal.

**Warning signs:** Chat view shows English "Today" / "Yesterday" when locale is Arabic.

### Pitfall 4: Missing `emptyStates.*.action` Keys

**What goes wrong:** `EmptyState` component's CTA button throws translation error for states that don't have an `action` key yet.

**Why it happens:** Currently only `noTickets` and `noCheckIns` have `action` keys. `noMealPlan`, `noWorkoutPlan`, `noTrackingData` etc. do not.

**How to avoid:** Before adding CTAs to meal plan, workout plan, and tracking empty states, add the missing `action` keys to BOTH `en.json` and `ar.json`. CONTEXT specifies specific CTA copy — use that copy.

**Warning signs:** TypeScript compilation error or runtime `next-intl` missing key warning.

### Pitfall 5: Stagger Animation Not Applied to Lists

**What goes wrong:** Cards appear all at once instead of cascading in with the ~50ms stagger delay from Phase 12.

**Why it happens:** Phase 12 defined the animation system; Phase 13 must apply `style={{ animationDelay: `${i * 50}ms` }}` at usage sites. It is easy to skip this step.

**How to avoid:** Apply stagger pattern to: home page stat widgets, ticket list items, FAQ items, meal cards, exercise cards. The `animationFillMode: 'both'` is already set in the `@theme` token (Phase 12 verified).

**Warning signs:** All items appear simultaneously instead of cascading.

### Pitfall 6: Desktop Carousel Not Adapted to Grid

**What goes wrong:** The mobile carousel (single card, horizontal scroll) shows on desktop with only one card visible in a huge viewport, looking empty.

**Why it happens:** The carousel's `w-full` cards inside a `flex overflow-x-auto` container naturally show one card at a time regardless of viewport width.

**How to avoid:** Use responsive classes: `hidden lg:grid lg:grid-cols-2 gap-4` for a desktop alternative layout, and `lg:hidden` on the mobile carousel container. Claude's discretion per CONTEXT.

### Pitfall 7: Accordion `max-height` Animation Too Slow on Tall Content

**What goes wrong:** Meal card with many ingredients takes 800ms to expand because `max-h-[800px]` animates the full 800px even when content is only 200px tall.

**Why it happens:** CSS transitions animate from 0 to the declared `max-height` value at a fixed duration, regardless of actual content height. The animation appears fast or slow depending on the ratio.

**How to avoid:** Use a smaller `max-height` estimate (e.g., `max-h-[500px]` for a typical meal card) or use `duration-200` instead of `duration-300` for the transition. Alternatively, use `overflow: hidden` with JavaScript-measured heights — but this requires `useEffect` + `ResizeObserver`. Keep CSS-only; tune `max-height` and `duration` empirically.

---

## Code Examples

### Home Page Full Structure (After Renovation)

```tsx
// apps/client/src/app/[locale]/(dashboard)/page.tsx — target structure
export default function DashboardPage() {
  return (
    <div className="px-4 py-6 space-y-5 max-w-5xl mx-auto lg:px-6">
      {/* 1. Motivational greeting (rotating) */}
      <MotivationalGreeting userName={userName} />

      {/* 2. Coach message banner (conditional) */}
      {hasUnreadCoachMessage && <CoachMessageBanner ticket={latestUnreadTicket} />}

      {/* 3. Mobile: Carousel cards | Desktop: 2-col grid */}
      <div className="lg:hidden">
        <HomeCarousel>
          <TodayStatsCard data={...} />
          <TodayMealsCard meals={todaysMeals} />
          <TodayWorkoutCard workout={todaysWorkout} />
          <PlanCountdownCard mealPlan={mealPlan} />
        </HomeCarousel>
      </div>
      <div className="hidden lg:grid lg:grid-cols-2 gap-4">
        <TodayStatsCard data={...} />
        <TodayMealsCard meals={todaysMeals} />
        <TodayWorkoutCard workout={todaysWorkout} />
        <PlanCountdownCard mealPlan={mealPlan} />
      </div>

      {/* 4. Quick action shortcuts */}
      <QuickActions />

      {/* 5. Today's progress bar */}
      <TodayProgressBar completed={completedItems} total={totalItems} />
    </div>
  );
}
```

### Day Selector (Shared Component for Meal + Workout Plans)

```tsx
// apps/client/src/app/[locale]/(dashboard)/meal-plan/_components/day-selector.tsx
// Reuse in workout-plan by import or extract to packages/ui if truly shared

interface DaySelectorProps {
  days: string[];           // ["Mon 3", "Tue 4", ...] or ["1", "2", ... "14"]
  selectedIndex: number;
  onSelect: (index: number) => void;
  disabledIndices?: number[]; // Rest days get muted style
  featureColor?: "nutrition" | "fitness";
}

export function DaySelector({ days, selectedIndex, onSelect, disabledIndices = [], featureColor = "nutrition" }: DaySelectorProps) {
  const activeClass = featureColor === "nutrition"
    ? "bg-nutrition text-white"
    : "bg-fitness text-white";

  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
      {days.map((label, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={cn(
            "flex-shrink-0 min-w-[48px] px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors text-center",
            selectedIndex === i
              ? activeClass
              : disabledIndices.includes(i)
              ? "bg-neutral-100 text-neutral-400"
              : "bg-neutral-100 text-muted-foreground hover:bg-neutral-200"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
```

### Auth Page Layout Recommendation (Claude's Discretion)

The auth layout is already a clean centered card (`max-w-md mx-auto`). The locked decision says layout is Claude's discretion. Recommendation: keep the centered card layout but improve the auth layout header:
- Add a more prominent FitFast brand section with the logo, app name, and tagline above the card
- The current header is functional but minimal — adding a subtle gradient background behind the form area creates visual hierarchy
- A split layout (left: brand/illustration, right: form) is common on desktop but complex to implement and adds no value at 390px where the auth form is primarily used

**Recommendation:** Enhance centered card with improved brand section, not split layout.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Horizontal scroll with JS scroll library | CSS `scroll-snap-type` + native `scrollTo` | 2023+ standard practice | Zero bundle cost, GPU-accelerated |
| Custom accordion animation with JS height measurement | CSS `max-height` transition | Phase 12 decided CSS-only | Simpler, no ResizeObserver needed |
| Hardcoded "Good morning/evening" time-of-day greeting | Rotating motivational messages | CONTEXT.md decision | More engaging, no timezone issues |
| Static status classes (only open/closed) | Three-state status: open (green), waiting (yellow), closed (gray) | CONTEXT.md decision | Better visual communication of ticket state |
| Simple list for exercises | Mini-cards with muscle group tags | CONTEXT.md decision | More scannable, mobile-native |

---

## Current State of Each Page (Gap Analysis)

This is the most actionable section for the planner. Documents what exists vs what needs to change.

### Home Page (`page.tsx`)

**Exists:** Stats grid (2x4), today's meals list, today's workout card, quick actions, progress bar. Static greeting.
**Gaps:** No carousel wrapper, static greeting instead of rotating messages, no coach message banner, no plan countdown widget, stats aren't using WidgetCard primitive, desktop layout is same as mobile (no adaptation).
**Effort:** HIGH — structural refactor of the whole page. Carousel requires new component.

### Meal Plan (`meal-plan/page.tsx`)

**Exists:** Day selector (7 days, Mon-Sun), accordion meal cards (one-open-at-a-time enforced via `expandedMeal` state), daily totals bar, weekly overview, coach notes.
**Gaps:** Day selector should support 1-14 (plan days) not just Mon-Sun. Weekly overview card needs visual renovation. Daily totals needs renovation to pill/badge style. Missing stagger animation on meal list. MEAL-04 (alternatives badge) not surfaced in collapsed view.
**Effort:** MEDIUM — refine existing structure. The day selector change (Mon-Sun → Day 1-14) requires data mapping logic change.

### Workout Plan (`workout-plan/page.tsx`)

**Exists:** Day selector (Mon-Sun), workout overview card, warmup/cooldown sections, exercise list in `divide-y` rows.
**Gaps:** Exercise rows need to become mini-cards (WORK-02). Muscle group tags exist in data but aren't rendered as pills (WORK-03). No collapsible exercise detail (WORK-04). Day selector needs same Day 1-14 treatment as meal plan.
**Effort:** MEDIUM — exercise card redesign is significant but contained.

### Tickets List (`tickets/page.tsx`)

**Exists:** Ticket list with status icon + category + date. New ticket form. Empty state using EmptyState component.
**Gaps:** Status badges need color redesign (CONTEXT: green/gray/yellow). Last message preview not shown. Time-ago format not used (shows full date). Status icons from Lucide don't convey the new color semantics visually.
**Effort:** LOW — targeted changes to existing rendering logic and CSS.

### Ticket Detail (`tickets/[id]/page.tsx`)

**Exists:** Left-aligned message list with avatar circles. Reply textarea. Ticket header with status. Back button.
**Gaps:** Messages need full structural restructure to bubble layout. Date separators need adding. Per-message timestamps need moving below bubble (not in header). Reply area needs send-button-on-right treatment.
**Effort:** HIGH — structural overhaul of message rendering.

### Tracking Page (`tracking/page.tsx`)

**Exists:** Sub-component architecture (TrackingHeader, DateProgress, MealTracking, WorkoutTracking, DailyReflection). EmptyState for no-plan state.
**Gaps:** Each sub-component needs visual renovation. No stagger animation on meal/workout list items.
**Effort:** MEDIUM — work across 4-5 sub-component files.

### Progress Page (`progress/page.tsx`)

**Exists:** Tab navigation (Charts, Photos, History), stats overview, Recharts weight chart.
**Gaps:** Visual renovation of stats cards, chart card wrapper, history timeline styling.
**Effort:** MEDIUM — stat cards need WidgetCard treatment; chart wrapper needs shadow/border.

### Settings Page (`settings/page.tsx`)

**Exists:** Section cards (Profile, Notifications, Account, Plan Details). Forms with RHF validation. Toggle switch.
**Gaps:** Section card headers need visual improvement. Toggle switch styling is functional but basic. "Change Password" button leads nowhere (known gap — not in Phase 13 scope).
**Effort:** LOW — cosmetic improvements to existing clean layout.

### FAQ Page (`faq/page.tsx`)

**Exists:** Search input, accordion list with number badges, "still need help" CTA card.
**Gaps:** Accordion expand lacks animation. Stagger animation missing on list items.
**Effort:** LOW — add expand animation and stagger.

### Auth Pages

**Exists:** `login/page.tsx` with form, magic-link option. Auth layout with header/footer.
**Gaps:** AUTH-02 (signup) — this is `accept-invite/page.tsx`. Auth layout header could be more brand-prominent.
**Effort:** LOW-MEDIUM — polish rather than rebuild.

---

## i18n Keys Required

New keys to add to BOTH `en.json` and `ar.json`:

```json
// In "dashboard" namespace — add:
{
  "motivational": {
    "0": "Keep pushing, {name}!",
    "1": "You're on a roll, {name}!",
    "2": "Stay consistent, {name}!",
    "3": "Every rep counts, {name}!",
    "4": "You've got this, {name}!",
    "5": "Strong effort, {name}!",
    "6": "One day at a time, {name}!"
  },
  "chat": {
    "today": "Today",
    "yesterday": "Yesterday"
  },
  "coachMessageBanner": "Your coach responded to your ticket"
}

// In "emptyStates" namespace — add "action" keys to existing states:
{
  "noMealPlan": { "action": "Time to check in!" },
  "noWorkoutPlan": { "action": "Let's get started!" },
  "noPhotos": { "action": "Complete a check-in" },
  "noTrackingData": { "action": "Time to check in!" }
}

// In "tickets" namespace — add:
{
  "status": {
    "open": "Open",
    "coachResponded": "Waiting",
    "closed": "Closed"
  },
  "lastMessage": "Last message"
}
```

---

## Open Questions

1. **Day selector: Mon-Sun vs Day 1-14 for 14-day plans**
   - What we know: MEAL-01 says "horizontal scrollable day selector (1-14)." Current implementation uses Mon-Sun weekday names.
   - What's unclear: A 14-day plan starting on a Wednesday — should Day 1 show as "Wed" or "Day 1"? If "Day 1-14," the day labels need to be computed from the plan's `startDate`.
   - Recommendation: Use "Day 1" through "Day 14" with a sub-label showing the abbreviated weekday (e.g., "Wed"). Highlight today's day automatically based on `Math.floor((today - startDate) / 86400000)` clamped to 0-13.

2. **Coach message banner — persistent vs dismissible?**
   - What we know: CONTEXT says "Claude's discretion."
   - Recommendation: Dismissible per session (store dismiss state in `localStorage` keyed by ticket ID). Prevents repeated notification for the same message on page refresh within the same session.

3. **Plan countdown — which visual style?**
   - What we know: CONTEXT says "Claude's discretion." Options: ring/progress arc, badge "Day 8 of 14", linear progress bar.
   - Recommendation: Linear progress bar within the WidgetCard at the bottom of the card — matches the existing progress bar style used in settings and home page. Simple, clear, no SVG arc needed.

4. **Chat bubble tail radius (rounded corners for bubble "mouth")**
   - What we know: WhatsApp uses `border-radius` exceptions to create a small "tail" at the bottom corner facing the speaker.
   - What's unclear: CSS logical border-radius (`border-start-start-radius`) is not yet in Tailwind v4.
   - Recommendation: Use conditional Tailwind classes based on locale: `isRtl ? (isCoach ? "rounded-br-sm" : "rounded-bl-sm") : (isCoach ? "rounded-bl-sm" : "rounded-br-sm")`. Document this as a known non-logical-property exception.

5. **Empty state illustrations — inline SVG or Lucide icons?**
   - What we know: CONTEXT says "flat vector illustrations — colorful, friendly, modern SaaS style. Royal blue as dominant color."
   - Current EmptyState: uses Lucide icons with colored container from Phase 12.
   - Recommendation: The Phase 12 `EmptyState` with `variant` colors (primary/nutrition/fitness) is sufficient for v1.1. True custom SVG illustrations would require design work. Use the Phase 12 component as-is; the colored icon container is "flat vector" enough at this stage.

---

## Sources

### Primary (HIGH confidence)

- Direct codebase inspection of all 8 dashboard pages and their sub-components
- Phase 12 VERIFICATION.md — confirmed all primitives available (WidgetCard, EmptyState, Skeleton, animation tokens)
- `apps/client/src/messages/en.json` — confirmed existing i18n structure and missing keys
- `packages/ui/src/empty-state.tsx`, `widget-card.tsx` — confirmed component APIs
- `apps/client/src/components/layouts/dashboard-shell-v2.tsx` — confirmed shell structure
- `.planning/PROJECT.md` — confirmed all requirement IDs and descriptions

### Secondary (MEDIUM confidence)

- CSS Scroll Snap API — standard browser feature, no library docs needed; behavior is well-established
- Chat bubble RTL pattern — based on established WhatsApp/iMessage implementation patterns in the web community; RTL scroll behavior per MDN documentation semantics

### Tertiary (LOW confidence)

- Cross-browser RTL `scrollLeft` behavior — documented behavior, but verified indirectly from MDN and community knowledge; recommend empirical testing in the implementation phase

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new libraries; all tools verified in codebase
- Architecture patterns: HIGH — derived from direct page-by-page code inspection
- Pitfalls: HIGH — most identified from gap between current code and CONTEXT requirements
- i18n additions: HIGH — derived from checking actual en.json structure
- Open questions: MEDIUM — aesthetic/UX judgment calls; none are blockers

**Research date:** 2026-02-22
**Valid until:** 2026-03-22 (stable phase — no external APIs changing; pure UI work)
