# FitFast Client App (PWA) - Complete Documentation

The FitFast Client App is a Progressive Web App (PWA) designed for fitness clients to manage their personalized meal plans, workout routines, progress tracking, and direct coach communication. It supports English and Arabic (with full RTL), works offline via service workers, and delivers push notifications.

---

## Navigation Structure

### Mobile (Default)

A **bottom tab bar** with 5 items:

| Tab          | Icon              | Description                                               |
| ------------ | ----------------- | --------------------------------------------------------- |
| Home         | Home icon         | Dashboard overview                                        |
| Meal Plan    | Utensils icon     | Weekly meal viewer                                        |
| Check-In     | Center FAB button | Periodic check-in wizard (red dot when due)               |
| Workout Plan | Dumbbell icon     | Weekly workout viewer                                     |
| More         | Grid icon         | Drawer with extra pages (badge shows unread ticket count) |

The **"More" drawer** slides up from the bottom and contains:

- Tracking
- Progress
- Tickets
- FAQ

Settings and Logout are accessed via the user profile menu in the header.

### Desktop (lg+ breakpoint)

A **top horizontal navigation bar** displays all 9 sections in a single row:
Dashboard, Meal Plan, Workout Plan, Check-In, Tracking, Progress, Tickets, FAQ, Settings.

Additional desktop elements:

- Language switcher (EN/AR toggle)
- Notification bell icon
- User profile dropdown (Settings + Logout)

### Notification Badges

- **Check-In button**: Shows a red dot when a check-in is due.
- **More / Tickets**: Shows a red badge with unread ticket count (caps at "9+").

---

## Pages In Detail

### 1. Dashboard (Home) - `/`

The dashboard is the first thing clients see after logging in. It provides a daily snapshot of their fitness journey.

#### Greeting Section

- A rotating motivational greeting cycles through 7 messages every 5 seconds.
- Displays the current date with the weekday name.
- Shows the client's first name extracted from their full profile name.

#### Coach Message Banner

- A highlighted banner appears whenever the coach has responded to one of the client's support tickets.
- Tapping it navigates directly to the relevant ticket thread.

#### Stats Grid (4 Cards)

Displayed in a 2x2 grid on desktop, scrollable row on mobile:

1. **Overall Progress** - Combined completion percentage of meals and workouts.
2. **Meal Progress** - "X of Y meals completed today" with a progress indicator.
3. **Workout Progress** - "X of Y exercises completed today" with a progress indicator.
4. **Next Check-In** - Countdown in days until the next check-in window opens. Shows "-" if not locked.

#### Daily Carousel (Mobile) / Grid (Desktop)

Four informational cards:

1. **Today's Stats** - Quick summary of today's completion numbers.
2. **Today's Meals** - Lists today's meals from the active meal plan with total calorie count.
3. **Today's Workout** - Shows today's workout name, number of exercises, and estimated duration.
4. **Plan Progress** - "Day X of Y" with a visual progress bar showing how far into the current plan cycle the client is.

On mobile, these cards are in a horizontally scrollable carousel with snap scrolling and dot indicators. On desktop, they display in a 2x2 grid.

#### Quick Action Cards

Two prominent action buttons:

- **Submit Check-In** - Direct link to the check-in wizard.
- **View Progress** - Direct link to the Progress page.

#### Empty States

- **"Plans Generating..."** - Shown when the client has completed their assessment but AI plans haven't finished generating yet. Includes a loading animation.
- **"Complete Assessment"** - Shown when no assessment exists. Links to the initial assessment wizard.

---

### 2. Meal Plan - `/meal-plan`

The meal plan page displays the client's current AI-generated meal plan organized by day of the week.

#### Day Navigation

- Left and right arrow buttons to navigate between days.
- The current day is highlighted by default.
- Days are labeled with their weekday names.

#### Daily Meal Cards

For each day, the page shows every meal in the plan:

- **Meal name** (e.g., "Grilled Chicken Salad")
- **Meal type/time** (Breakfast, Lunch, Dinner, Snack)
- **Calorie count** per meal
- **Macro breakdown** (protein, carbs, fats in grams)
- **Ingredients list** with quantities
- **Preparation instructions** (step-by-step recipe)

#### Completion Tracking

- Each meal has a completion toggle connected to the Tracking system.
- Completed meals show a visual checkmark indicator.

#### Plan Dates

- Header shows the plan's start date and end date.
- If no plan is active, a message directs the client to complete their check-in or assessment.

---

### 3. Workout Plan - `/workout-plan`

The workout plan page displays the client's current AI-generated workout routine organized by day.

#### Day Navigation

- Same left/right navigation as the meal plan page.
- Rest days are clearly labeled with a rest icon.

#### Workout Details

For each training day, the page shows:

- **Workout name** (e.g., "Upper Body Push")
- **Target muscle groups** (chest, shoulders, triceps, etc.)
- **Estimated duration** in minutes
- **Exercise list** with:
  - Exercise name (with exercise image if available)
  - Number of sets
  - Rep range (e.g., "8-12 reps")
  - Rest period between sets (in seconds)
  - Target muscles for each exercise
  - Any special instructions or notes

#### Rest Days

- Rest days display a dedicated rest icon with a motivational message.
- No exercises are shown for rest days.

#### Completion Tracking

- Links to the Tracking page for detailed per-exercise logging.
- Overall workout completion status is visible.

---

### 4. Check-In - `/check-in`

The check-in is a 5-step wizard that clients complete periodically (default: every 10 days, configurable by coach). It collects progress data that the AI uses to generate the next cycle's plans.

#### Lock Status

- If a check-in is not yet due, the page displays a countdown: "Next check-in available in X days."
- The check-in button on the dashboard shows a red dot when it becomes available.

#### Step 1: Weight & Measurements

- **Weight input** - Pre-filled with the value from the last check-in for convenience.
- **Measurement method toggle**:
  - **Manual**: Client enters body measurements individually:
    - Chest, Waist, Hips, Arms, Thighs (in cm)
    - At least one measurement is required if manual method is selected.
  - **InBody Scan**: Client uploads a photo/scan of their InBody results.
    - OCR automatically extracts measurements from the uploaded image.
    - Extracted data is displayed for the client to verify before proceeding.

#### Step 2: Fitness Metrics

- **Workout performance** - Free text describing how workouts went (minimum 10 characters). Example: "Increased bench press weight by 2.5kg."
- **Energy level** - 1 to 10 slider/rating.
- **Sleep quality** - 1 to 10 slider/rating.
- **Female health** (shown only for female clients):
  - Cycle phase selector: Menstrual, Follicular, Ovulatory, Luteal, or "Not Tracking."

#### Step 3: Dietary Adherence

- **Dietary adherence rating** - 1 to 10 slider/rating reflecting how closely the client followed the meal plan.
- **Dietary notes** - Optional free text for additional context (e.g., "Had a family gathering, ate off-plan for 2 days").

#### Step 4: Progress Photos

- Three upload slots: **Front**, **Back**, **Side**.
- Accepts image files with size validation.
- Drag-and-drop or tap-to-upload interface.
- Photos are optional but encouraged for visual progress tracking.

#### Step 5: Review & Submit

- Full summary of all entered data across all steps.
- Final **Submit** button.
- On submission:
  - Progress photos are uploaded to cloud storage.
  - InBody file is uploaded if provided.
  - Check-in data is saved to the database.
  - AI plan generation is triggered in the background (meal plan + workout plan).
  - Client is redirected to the dashboard with a success message.

#### Navigation Features

- Swipe left/right to move between steps (RTL-aware: directions are inverted for Arabic).
- Step progress indicator at the top shows current position.
- Per-step validation prevents advancing with invalid data.
- An overlay spinner appears during submission to prevent double-submits.

---

### 5. Tracking - `/tracking`

The tracking page is the detailed daily logging interface where clients record their meal and workout completions.

#### Date Picker

- Calendar or day-by-day navigation to select any date.
- Defaults to today.

#### Meal Tracking Section (Expandable)

For each meal in today's plan:

- **Meal name and type** displayed.
- **Completion toggle** - Mark meal as completed or not.
- **Notes field** - Optional text input for per-meal notes (e.g., "Substituted rice with quinoa").
- **Calorie display** - Shows the meal's calorie count.
- Completed meals show a strikethrough visual effect.
- A "mark all complete" quick action is available.

#### Workout Tracking Section (Expandable)

For each exercise in today's workout:

- **Exercise name and target muscles** displayed.
- **Set-by-set logging** - For each set:
  - Weight used (kg/lbs input)
  - Reps completed (number input)
  - Completion checkbox
- **Quick-complete button** - Marks all sets as completed in one tap.
- **Exercise history drawer** - Swipeable panel showing previous attempts for the same exercise, so the client can see their progression (e.g., "Last time: 40kg x 10 reps").

#### Daily Reflection

- A text area for the client to write a free-form reflection about their day.
- Persisted per date and can be edited later.
- Useful for journaling mood, motivation, or anything fitness-related.

#### Loading States

- Skeleton loaders appear while tracking data is being fetched.
- Individual exercise skeletons show while per-exercise data loads.

---

### 6. Progress - `/progress`

The progress page is a multi-tab analytics dashboard that visualizes the client's fitness journey over time.

#### Tab 1: Charts (Default)

**Weight Chart**

- Line chart showing weight measurements over time.
- Data points come from check-in submissions.
- Trend line helps visualize the overall direction (gaining, losing, maintaining).

**Measurement Chart**

- Multi-line chart tracking body measurements:
  - Chest, Waist, Hips, Arms, Thighs
- Each measurement is a separate colored line.
- Helps the client see body composition changes even when weight stays the same.

**Date Range Filter**

- Three options: 30 days (default), 90 days, All Time.
- Changes the time window for both charts.

Charts are rendered with the Recharts library and are lazy-loaded (no SSR) for performance.

#### Tab 2: Photos

- Grid gallery of all progress photos submitted during check-ins.
- Photos are grouped by check-in date.
- Each check-in shows Front, Back, and Side photos.
- Swipeable gallery view for comparing photos.
- Before/after comparison feature for seeing visual changes over time.
- Timestamps are displayed below each set.

#### Tab 3: History

- Chronological timeline of all past check-ins.
- Each entry shows:
  - Date of check-in
  - Weight recorded
  - Measurement changes (old value -> new value)
  - Energy and sleep ratings
  - Dietary adherence rating
- **Assessment history** with version badges showing when profile reassessments occurred.
- Expandable detail view per check-in for full data.

#### Stats Overview Section

Displayed above the tabs:

- **Current weight** and weight change trend.
- **Meal completion rate** (percentage).
- **Workout completion rate** (percentage).
- **Check-in frequency** and total check-in count.

---

### 7. Tickets - `/tickets` and `/tickets/[id]`

The tickets system provides a thread-style conversation channel between the client and their coach.

#### Tickets List (`/tickets`)

**Create New Ticket Form**

- **Subject** - Brief title for the issue (3-100 characters).
- **Category dropdown** - Options:
  - Meal Issue (questions about the meal plan)
  - Workout Issue (questions about exercises or the workout plan)
  - Technical (app bugs or technical problems)
  - Bug Report (specific bug reports)
  - Other (general inquiries)
- **Description** - Optional detailed explanation.
- **Screenshot upload** - Optional image attachment with file validation.
- **Submit button** - Creates the ticket and notifies the coach.

**Ticket List Display**

- All of the client's tickets listed in reverse chronological order.
- Each ticket shows:
  - Subject line
  - Category badge (color-coded)
  - Status badge:
    - **Open** (orange) - Waiting for coach response
    - **Coach Responded** (green) - Coach has replied, client can view
    - **Closed** (gray) - Resolved, no further responses
  - Time since creation (e.g., "2h ago", "Yesterday", or full date)
- Unread indicator for tickets with new coach responses.

#### Ticket Detail (`/tickets/[id]`)

**Header**

- Back button to return to ticket list.
- Ticket ID and status badge.
- Category badge.
- Subject line.

**Message Thread**

- Messages are grouped by date (Today, Yesterday, or specific date).
- Client messages appear on one side, coach messages on the other.
- Each message bubble shows:
  - Sender name (client or coach)
  - Message text
  - Timestamp
- Thread auto-scrolls to the latest message on load.
- New messages appear in real-time via Convex subscriptions.

**Reply Input**

- Text area for typing a response.
- Send button (disabled while loading or if ticket is closed).
- Auto-scrolls to bottom when a new message is sent.
- Closed tickets display a "This ticket has been closed" notice instead of the reply input.

---

### 8. FAQ - `/faq`

A searchable knowledge base of frequently asked questions.

#### Search Bar

- Full-text search that filters FAQs by matching against both the question and answer text.
- Results update in real-time as the client types.

#### FAQ Accordion List

- Each FAQ is an expandable accordion item.
- Tap to expand and reveal the answer.
- Smooth animation on expand/collapse.
- Only one item can be open at a time (or multiple, depending on implementation).

#### Content

FAQs are fetched from the database (managed by the coach in the admin panel). If no custom FAQs exist, default questions are shown:

- How often should I check in?
- Can I change my meals mid-plan?
- What if I miss a workout?
- How do I track my progress?
- When will I get my new plan?
- How do I contact my coach?
- What payment methods are accepted?
- How do I change the app language?

All questions and answers are fully translated (English and Arabic).

#### Loading State

- Skeleton loaders appear while FAQs are being fetched from the database.

---

### 9. Settings - `/settings`

The settings page is organized into several card sections for managing the client's account and preferences.

#### Profile Settings Card

- **Full name** - Editable text field.
- **Phone number** - Optional, with regex validation for valid phone formats.
- **Language preference** - EN/AR toggle that immediately switches the app language and text direction.
- **Save button** - Saves changes with a success toast notification.

#### Push Notifications Card

- **Permission status** - Shows whether push notifications are enabled, denied, or not supported.
- **Toggle subscription** - Enable or disable push notifications.
  - If the browser supports Web Push: shows an enable/disable toggle.
  - If notifications are denied at the OS level: shows instructions to enable in browser settings.
  - If the browser doesn't support Web Push: shows "Not supported on this browser."

#### Notification Reminder Time Card

- **Time picker** - Lets the client choose when they want their daily reminder notification.
- Default: 08:00 AM.
- Time is stored in UTC and displayed in the client's local timezone.
- Auto-saves when the time is changed.

#### Plan Details Card

- **Plan start date** and **Plan end date** displayed.
- **Days remaining** countdown.
- **Progress percentage bar** showing how far through the current plan cycle.
- **"Renew Plan"** link that directs the client to contact the coach for plan renewal.

#### Account Danger Zone Card

- **Change Password** button:
  - Opens a modal with fields for: Current Password, New Password, Confirm New Password.
  - Validates that new password meets minimum requirements.
  - Validates that confirmation matches.
- **Logout** button:
  - Signs the client out and redirects to the login page.

#### Technical Details

- Auto-save on form field blur (using react-hook-form).
- Toast notifications for success and error states.
- Skeleton loaders while the profile data is loading.
- Real-time sync with the Convex database.

---

## Authentication & Onboarding Pages

### Login - `/(auth)/login`

- Standard email + password login form.
- Error handling for incorrect credentials.
- Detection for coach accounts (shows a message directing them to the admin app instead).
- Query parameter messages for context:
  - `session_expired` - "Your session has expired, please log in again."
  - `password_changed` - "Password changed successfully, please log in."
- Auto-redirects to dashboard if the client is already authenticated.

### Accept Invite - `/(auth)/accept-invite`

- The page clients land on when they receive an invitation link from the coach.
- Validates the invite token from the URL.
- Email is pre-filled from the token (not editable).
- Client sets their password.
- Locale query parameters are preserved across the redirect.

### Magic Link - `/(auth)/magic-link`

- Handles magic link authentication flow.
- Client clicks a magic link in their email and is automatically logged in.

### Set Password - `/(auth)/set-password`

- Password reset/set form for clients who need to change their password.

### Expired - `/(auth)/expired`

- Displayed when the client's plan has expired.
- Shows a notice explaining the plan is no longer active.
- Provides a call-to-action to contact the coach for renewal.

---

## Onboarding Flow

### Welcome - `/(onboarding)/welcome`

The first page new clients see after accepting their invitation.

- **Feature showcase** with 4 cards:
  1. **Personalized Meal Plans** - AI-generated nutrition with macros and recipes.
  2. **Custom Workout Plans** - Training programs tailored to goals and experience.
  3. **Progress Tracking** - Charts, photos, and measurements over time.
  4. **Coach Support** - Direct communication via the ticket system.
- **"Get Started" button** - Navigates to the initial assessment wizard.
- Motivational messaging about the journey ahead.

### Pending - `/(onboarding)/pending`

Displayed after the client completes their payment but before the coach approves their account.

- **3-step progress indicator**:
  1. Signup Complete (checkmark)
  2. Under Review (current, highlighted)
  3. Approval Email (pending, dimmed)
- Real-time monitoring: the page automatically redirects to the welcome page once the coach approves the account.
- Reassuring message that the coach will review their registration soon.

### Initial Assessment - `/(onboarding)/initial-assessment`

A 6-step wizard that collects all the information the AI needs to generate personalized plans.

#### Step 1: Goals

- **Primary goal** selector (required):
  - Weight Loss, Muscle Gain, Body Toning, General Fitness, Strength, Endurance
- **Secondary focus** multi-select (optional):
  - Flexibility, Core Strength, Cardiovascular Health, Stress Relief, Better Sleep

#### Step 2: Body Info

- **Current weight** (kg, required, range validated)
- **Height** (cm, required, range validated)
- **Age** (required)
- **Gender** - Male/Female toggle button
- **Activity level** dropdown:
  - Sedentary, Lightly Active, Moderately Active, Very Active, Extremely Active
- **Experience level** dropdown:
  - Beginner, Intermediate, Advanced
- **Equipment available** dropdown:
  - Full Gym, Home Basic, Home Advanced, Bodyweight Only, Other (with custom text input)

#### Step 3: Schedule

- **Workout days** - Multi-select for days of the week (minimum varies by goal and experience level).
- **Session duration** dropdown:
  - 30 min, 45 min, 60 min, 75 min, 90 min
- **Preferred training time**:
  - Morning, Afternoon, Evening

#### Step 4: Dietary Preferences

- **Meals per day** - Number selector.
- **Food preferences** - Multi-select with common options + custom text input.
- **Allergies** - Multi-select with common allergens + custom text input.
- **Dietary restrictions** - Multi-select (Halal, Vegetarian, Vegan, Keto, etc.) + custom text input.
- This step is optional but helps the AI generate better meal plans.

#### Step 5: Measurements

- **Measurement method toggle**:
  - **Manual**: Body measurements (chest, waist, hips, arms, thighs in cm). Optional fields.
  - **InBody**: Upload an InBody scan image. OCR automatically extracts measurements.

#### Step 6: Medical Information

- **Medical notes** - Free text for any relevant medical conditions, injuries, or limitations.
- **Female health questions** (shown only if gender is female):
  - Current cycle phase, menstrual regularity, related considerations.
- This step is optional.

#### Wizard Features

- Step progress indicator at the top showing current position (1-6).
- Swipe navigation between steps (RTL-aware).
- Per-step validation prevents skipping required fields.
- Final submit on Step 6 triggers:
  - Assessment data saved to the database.
  - AI generation of personalized meal plan and workout plan in the background.
  - Redirect to the dashboard.
- Loading spinner overlay during submission.

---

## Global Features

### Bilingual Support (i18n)

- Full English and Arabic translations for every text string.
- Arabic mode activates RTL (right-to-left) layout automatically.
- Language can be switched from Settings or the desktop navigation bar.
- Persisted in the user's profile.

### Push Notifications

- Powered by the Web Push API with VAPID keys.
- Service worker (`sw.js`) handles incoming push events and notification clicks.
- Notification types:
  - **Plan Ready** - When new meal/workout plans finish generating.
  - **Reminders** - Daily reminders at the client's chosen time.
  - **Coach Messages** - When the coach responds to a ticket.
  - **Broadcasts** - General announcements from the coach.
- Falls back to email notifications if push is not available.

### PWA (Progressive Web App)

- Installable on mobile home screens.
- Service worker for offline caching.
- App manifest with FitFast branding.

### Real-Time Updates

- All data is synced in real-time via Convex subscriptions.
- Plan changes, ticket responses, and notification counts update instantly without page refresh.

### Responsive Design

- Mobile-first with dedicated layouts for phone, tablet, and desktop.
- Safe area insets for devices with notches/home bars.
- Keyboard detection hides the bottom tab bar when the keyboard is open.
- Touch-friendly minimum tap targets (44px).

### Plan Expiry Banner

- A yellow warning banner appears globally when the client's plan expires within 1-3 days.
- Displayed across all pages to ensure the client doesn't miss it.
