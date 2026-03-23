# FitFast Admin/Coach Panel - Complete Documentation

The FitFast Admin Panel is the coach's command center for managing clients, reviewing check-ins, responding to support tickets, configuring the system, and overseeing the entire fitness coaching operation. It uses a dark sidebar navigation and is fully bilingual (English and Arabic with RTL support).

---

## Navigation Structure

### Sidebar (Always Visible on Desktop)

A dark-themed sidebar (stone-900 background) with the following sections:

| Section       | Icon          | Badge         | Description                         |
| ------------- | ------------- | ------------- | ----------------------------------- |
| Dashboard     | Home          | -             | Operations overview                 |
| Signups       | UserPlus      | Pending count | Manage new client registrations     |
| Clients       | Users         | -             | View and manage all clients         |
| Tickets       | MessageSquare | Open count    | Client support conversations        |
| FAQs          | HelpCircle    | -             | Knowledge base management           |
| Knowledge     | BookOpen      | -             | Educational content + food database |
| Exercises     | Dumbbell      | -             | Exercise library management         |
| Notifications | Bell          | -             | Broadcast messaging & history       |
| Settings      | Gear          | -             | System configuration                |

On mobile, the sidebar is hidden by default and slides in from the left via a hamburger menu toggle.

### Header Bar

- Coach name display.
- Mobile menu toggle button.
- Notifications icon.
- Settings shortcut icon.

---

## Pages In Detail

### 1. Dashboard - `/`

The dashboard provides a high-level overview of the coach's operations at a glance.

#### Statistics Cards (4 columns)

Four key metrics displayed in a responsive grid:

1. **Total Clients** - The total number of clients ever registered. Clickable, navigates to `/clients`.
2. **Active Clients** - Clients with an active (non-expired) plan. Clickable, navigates to `/clients`.
3. **Pending Signups** - New registrations awaiting approval. Highlighted with a badge if count > 0. Clickable, navigates to `/signups`.
4. **Open Tickets** - Support tickets that need a response. Highlighted if count > 0. Clickable, navigates to `/tickets`.

#### Client Growth Chart

- An area chart showing client acquisition over the past 6 months.
- X-axis: months, Y-axis: cumulative client count.
- Helps the coach visualize business growth trends.

#### Weekly Activity Chart

- A bar chart comparing two metrics over the past 4 weeks:
  - New signups per week.
  - Open tickets per week.
- Helps identify busy periods and support load.

#### Quick Action Cards (2 columns)

- **Pending Signups Preview** - Shows the most recent pending signups with a "View All" link.
- **Open Tickets Preview** - Shows the most recent open tickets with a "View All" link.

#### Animations

- GSAP entrance animations with staggered card reveals and fade-in effects.

---

### 2. Signups - `/signups`

This page manages the client registration approval workflow. When a potential client fills out the marketing site's checkout form and uploads payment proof, their registration appears here.

#### Signups Table

Each signup row displays:

- **Client Name** - Full name from the registration form.
- **Plan** - The pricing tier selected (e.g., Monthly, Quarterly).
- **Status Badge**:
  - **Pending** (orange) - Awaiting coach review.
  - **Approved** (green) - Client has been activated.
  - **Rejected** (red) - Registration was declined.
- **Date** - When the signup was submitted.
- **Actions**:
  - **Approve** button (with loading spinner) - Activates the client account, creates their profile, and sends them an invitation email.
  - **Reject** button - Reveals an inline text input for entering a rejection reason, then confirms rejection.
  - **View** button - Navigates to the signup detail page.

#### Signup Detail Page (`/signups/[id]`)

A full-page view of a single signup with all submitted data:

**Client Information Section**

- Full name, email, phone number.

**Payment Proof Section**

- **OCR-extracted data** from the payment screenshot:
  - Amount transferred
  - Sender name
  - Reference number
  - Bank name
- **Payment screenshot viewer** with zoom functionality (click to enlarge).
- If OCR couldn't extract data, raw screenshot is still available for manual verification.

**Action Buttons**

- **Approve** - Full-width primary button with confirmation dialog.
- **Reject** - Secondary button that prompts for a rejection reason.
- Back navigation to the signups list.

---

### 3. Clients - `/clients`

The clients section is the primary area for managing enrolled clients and viewing their detailed progress.

#### Client List (`/clients`)

**Table Display**

- Paginated list showing 50 clients per page with a "Load More" button.
- **Columns per client**:
  - Name
  - Email
  - Phone
  - Status badge:
    - **Active** (green checkmark) - Plan is current and client is engaged.
    - **Pending Approval** (orange) - Signup approved but client hasn't completed onboarding.
    - **Inactive** (muted gray) - Client account is disabled.
    - **Expired** (red) - Plan has expired.
  - Plan tier (Monthly, Quarterly)
  - Plan start/end dates
  - Account creation date
- **Search** - Filter clients by name or email.
- **Click any row** to navigate to the client's detail page.
- **Create Test User** button (development utility for testing).

#### Client Detail Page (`/clients/[id]`)

The detail page is the coach's deep-dive view into a single client's data, organized into six card sections.

**Header Area**

- Client's full name, email, and phone number.
- Current status badge.
- **Action buttons**:
  - Edit Profile
  - Extend Plan
  - Send Notification
  - More Options dropdown

---

**Card 1: Activity**

Shows the client's engagement level:

- **Last check-in date** with relative time display:
  - Green: checked in within the expected window.
  - Amber: 14+ days since last check-in (falling behind).
  - Red: 21+ days since last check-in (disengaged).
- **Check-in adherence ratio** - "X completed / Y expected" with a colored progress indicator:
  - Green: 70%+ adherence.
  - Amber: 40-70% adherence.
  - Red: below 40% adherence.
- **Push subscription status** - Whether the client has push notifications enabled (active/inactive indicator).

---

**Card 2: Support**

Shows the client's support ticket activity:

- **Open tickets count** - Highlighted if greater than 0 to draw attention.
- **Total tickets count** - Lifetime tickets created by this client.
- **Last ticket date** - When the most recent ticket was created.

---

**Card 3: Check-In History**

A table of the client's recent check-ins:

- Shows the last 5 check-ins by default, expandable to show all.
- **Per check-in row**:
  - Date
  - Weight recorded
  - Energy level (1-10 with score bar)
  - Sleep quality (1-10 with score bar)
  - Dietary adherence (1-10 with score bar)
- **Score bars** are color-coded:
  - Green: 7-10 (good)
  - Amber: 4-6 (moderate)
  - Red: 1-3 (poor)

---

**Card 4: Progress**

Visualizes the client's fitness trajectory:

- **Weight change metric** - Total weight gained or lost since starting.
- **Body composition trends** - Measurement changes over time.
- **Goal progress** - How close the client is to their stated primary goal.

---

**Card 5: Assessment History**

A timeline of the client's profile assessments and reassessments:

- **Assessment version badges** (v1, v2, v3, etc.)
- **Date stamps** for each version.
- **Changelog per reassessment** - Expandable section showing what changed:
  - Old value -> New value for each modified field.
  - E.g., "Weight: 85kg -> 82kg", "Activity Level: Sedentary -> Lightly Active"
- Useful for understanding how the client's profile has evolved and why plans may have changed.

---

**Card 6: Workout Log**

Shows the client's workout completion data:

- List of completed workouts.
- Per-workout: date, exercises completed, total duration.
- Progressive overload tracking (weight and rep increases over time).

---

**Payment Management Card**

Manages the client's payment history and plan extensions:

- **Payment history** - List of all payments with status badges (pending/approved/rejected).
- **OCR-extracted payment data** for each payment.
- **Payment screenshot viewer** with zoom.
- **Approve/Reject** actions for pending payments.
- **Manual Plan Extension Form**:
  - Tier selector (Monthly or Quarterly).
  - Duration input.
  - Effective date picker.
  - Submit button with validation.

**Plan Extension Dialog**

- Tier picker.
- New end date automatically calculated.
- Confirmation before submission.

---

### 4. Tickets - `/tickets`

The tickets page is where the coach manages all client support conversations.

#### Ticket List View

All tickets displayed in a scrollable list:

- **Status indicators** for quick triage:
  - **Open** (orange) - Client is waiting for a response.
  - **Coach Responded** (green) - Coach has replied, waiting for client.
  - **Closed** (gray) - Resolved and archived.
- **Quick view per ticket**:
  - Subject line.
  - Category badge (meal_issue, workout_issue, technical, bug_report, other).
  - Creation date.
  - Status badge.

#### Expandable Ticket Detail

Clicking a ticket expands it inline to reveal:

- **Full conversation thread**:
  - Client's original message.
  - All subsequent messages between client and coach.
  - Coach responses are visually distinguished with a left accent border.
  - Messages show sender name and timestamp.
- **Response area**:
  - Text area for composing the coach's reply.
  - **Send Response** button - Posts the reply and updates ticket status to "Coach Responded."
  - **Close Ticket** button - Marks the ticket as resolved. Once closed, no further replies can be sent.
- **Closed ticket state**:
  - Response area is disabled.
  - A "This ticket is closed" message is displayed.

---

### 5. FAQs - `/faqs`

The FAQ management page allows the coach to create and maintain a knowledge base that clients can browse.

#### FAQ List

- All existing FAQs displayed in a list.
- Each FAQ shows the question text.

#### Bilingual Editing

Every FAQ has four fields:

- **Question (English)**
- **Answer (English)**
- **Question (Arabic)**
- **Answer (Arabic)**

This ensures clients see FAQs in their preferred language.

#### Actions Per FAQ

- **Edit** button - Switches the FAQ into inline edit mode where all four fields become editable.
- **Save** / **Cancel** buttons appear during editing.
- **Delete** button - Removes the FAQ with confirmation.

#### Bulk Operations

- **Checkbox per FAQ** for multi-selection.
- **Select All** button.
- **Bulk Delete** with confirmation dialog showing the count of items to be deleted.

#### Add New FAQ

- **"Add FAQ"** button opens a form with input fields for all four bilingual fields.
- Submit adds the FAQ to the database and it appears in the client app immediately.

---

### 6. Knowledge - `/knowledge`

The knowledge section is a two-tab content management system for educational resources.

#### Knowledge Tab

Manages educational articles and resources for the AI context and coach reference.

**Add Content**

- **Text Entry** - Modal form with:
  - Title
  - Content (rich text)
  - Tag selection: Nutrition, Workout, Recovery, General
- **PDF Upload** - Drag-and-drop or click to upload PDF files.
  - PDFs are automatically processed via OCR to extract text content.
  - Extracted text becomes searchable and usable as AI context.

**Content List**

- Each entry shows:
  - Title.
  - Creation date.
  - Tags (color-coded badges).
- **Expandable** to reveal the full content text.
- **Edit** button for inline editing with save/cancel.
- **Delete** button with confirmation.

Tags help organize content and can be used to feed relevant context to the AI during plan generation.

#### Food Tab

A nutrition database for managing food items and their nutritional information.

**Food Categories**

- Protein, Carbohydrate, Fat, Vegetable, Fruit, Dairy, Dessert, Recipe.

**Food Entry Fields**

- Name
- Category
- Calories (per serving)
- Macronutrients (protein, carbs, fat in grams)
- Ingredients (for recipes)
- Serving size
- Additional notes

**Actions**

- Add new food entries.
- Edit existing entries inline.
- Delete entries with confirmation.

The food database is used as reference material by the AI when generating meal plans, ensuring generated meals use foods the coach has vetted.

---

### 7. Exercises - `/exercises`

The exercise library manages the database of exercises available for AI workout plan generation.

#### Search and Filter

- **Search bar** - Full-text search on exercise name.
- **Category filter** dropdown:
  - Compound (multi-joint movements like squats, deadlifts)
  - Accessory (supporting exercises)
  - Isolation (single-muscle exercises)
  - Warmup
  - Cooldown
  - Cardio

#### Exercise Display

Each exercise card/row shows:

- **Name** (English + Arabic)
- **Category badge** (color-coded)
- **Difficulty level**: Beginner, Intermediate, Advanced
- **Primary muscles** targeted
- **Secondary muscles** targeted
- **Equipment** required
- **Default configuration**: sets, reps (min/max range), rest seconds
- **Thumbnail image** - AI-generated exercise illustration (loaded lazily)

#### Create / Edit Exercise Modal

Full form for exercise management:

- **Name** (English) - Required
- **Name** (Arabic) - Required for bilingual support
- **Category** dropdown
- **Movement pattern** (push, pull, hinge, squat, etc.)
- **Primary muscles** (comma-separated list)
- **Secondary muscles** (comma-separated list)
- **Equipment** (comma-separated list)
- **Difficulty level** dropdown
- **Instructions** (English) - Step-by-step exercise instructions
- **Instructions** (Arabic) - Arabic translation of instructions
- **Contraindications** - Medical conditions or injuries where this exercise should be avoided
- **Default sets** - Number
- **Default reps** (min) - Number
- **Default reps** (max) - Number
- **Default rest** (seconds) - Number
- **Sort order** - Controls display order in lists
- **GIF URL** - Link to an exercise animation/demonstration

#### Exercise Actions

- **Save** - Create a new exercise or update an existing one.
- **Toggle Active/Inactive** (power icon) - Temporarily disables an exercise without deleting it. Inactive exercises are excluded from AI plan generation.
- **Delete** - Permanently removes the exercise with confirmation.

The exercise database directly feeds the AI workout plan generator. Only active exercises are used in generated plans.

---

### 8. Notifications - `/notifications`

The notifications page handles broadcast messaging to all clients and provides a history of all sent notifications.

#### Disabled State Banner

If push notifications are disabled in Settings, a warning banner appears explaining that notifications are turned off system-wide.

#### Broadcast Card

The broadcast composer for sending messages to all clients at once:

- **Title input** - Maximum 50 characters with a live character counter.
- **Body textarea** - Maximum 150 characters with a live character counter.
- **Send button** - Opens a confirmation dialog before sending.
- **Rate limit**: Maximum 5 broadcasts per day per coach. The remaining count is displayed.

When a broadcast is sent:

- All clients with active push subscriptions receive a push notification.
- Clients without push subscriptions receive an email notification as fallback.
- The notification is logged in the history.

#### Notification History

A log of all notifications ever sent from the system.

**Mobile Layout**: Card view with each notification as a separate card.
**Desktop Layout**: Table with columns:

- **Date** - When the notification was sent.
- **Type badge** (color-coded):
  - **plan_ready** - Automated notification when AI plans finish generating.
  - **reminder** - Automated daily reminders to clients.
  - **broadcast** - Manual broadcast from the coach.
  - **individual** - Manual notification to a specific client.
- **Title** - The notification title text.
- **Recipients** - Number of clients who received it.
- **Status badge**:
  - **Sent** (green) - Successfully delivered.
  - **Failed** (red) - Delivery failed.
  - **Partial** (amber) - Some deliveries succeeded, some failed.

**Pagination**: 10 items per page with previous/next navigation buttons.

---

### 9. Settings - `/settings`

The settings page contains all system-wide configuration options.

#### General Settings Section

1. **Check-in Frequency** (days)
   - Number input: 7-30 days.
   - Controls how often clients are expected to submit a check-in.
   - Default: 10 days.
   - This value is displayed to clients in the FAQ and used by the system to determine when to unlock the check-in form.

2. **Workout Plan Duration** (days)
   - Number input: 1-90 days.
   - How long each generated workout plan lasts before the system expects a new one.
   - Default: 30 days.

3. **Notification Toggle**
   - Enable/disable push notifications globally for the entire system.
   - When disabled, no push notifications are sent to any client. Email fallbacks are also affected.
   - Useful for maintenance periods or testing.

4. **Save button** - Saves all general settings in one batch.

#### Pricing Plans Manager

Manage the pricing tiers displayed on the marketing site and used during client registration:

- Configure plan names (bilingual).
- Set prices for each tier.
- Mark plans as "Most Popular" or "Best Value" (shown as badges on the marketing site).
- Reorder plans to control display order.
- Add new plans or remove existing ones.
- Maximum 5 plans allowed.

#### Payment Methods Manager

Configure the bank account and payment information shown to clients during checkout:

- **Add payment method** with fields:
  - Type (Bank Transfer, Mobile Wallet, etc.)
  - Account name
  - Account number
  - Additional instructions
- Edit and delete existing payment methods.
- This information is displayed in the marketing site's checkout form and guides clients on how to pay.

#### Social Links Manager

Configure social media links displayed in the client app:

- Instagram URL
- WhatsApp URL/number
- TikTok URL
- These links are shown in the client app footer for easy access.

#### Team Management

Manage coach team members who can access the admin panel:

- **Invite new member** - Send an invitation via email with a magic link.
- **Active members list** - Shows each member with their:
  - Name and email.
  - Role and status.
  - "Owner" designation for the primary account.
- **Remove member** - Revoke a team member's access.

---

## Authentication Pages

### Login - `/login`

- Standard email + password login form.
- Coach-only access: non-coach accounts attempting to log in receive an error message directing them to the client app.
- Error handling for invalid credentials.
- Located outside the `(panel)` route group so it's accessible without authentication.

### Setup - `/setup`

- Initial setup page for first-time deployment.
- Creates the primary coach/owner account via magic link.
- Only accessible if no coach account exists in the system yet.
- After setup, redirects to the login page.

---

## Layout Hierarchy

```
/[locale]/
├── login/page.tsx          (outside panel, no auth required)
├── setup/page.tsx          (outside panel, first-time setup only)
└── (panel)/
    ├── layout.tsx          (auth guard + admin shell wrapper)
    ├── page.tsx            (dashboard)
    ├── signups/
    │   ├── page.tsx        (list)
    │   └── [id]/page.tsx   (detail)
    ├── clients/
    │   ├── page.tsx        (list)
    │   └── [id]/page.tsx   (detail with 6 cards)
    ├── tickets/page.tsx
    ├── faqs/page.tsx
    ├── knowledge/page.tsx  (2 tabs: Knowledge + Food)
    ├── exercises/page.tsx
    ├── notifications/page.tsx
    └── settings/page.tsx
```

All pages under `(panel)/` require authentication. The layout checks for a valid Convex auth token and coach profile. Unauthorized users are redirected to `/login`.

---

## Key Integrations

The admin panel communicates with these Convex backend modules:

- **profiles** - Client profile CRUD and management.
- **pendingSignups** - Signup approval/rejection workflow.
- **tickets** - Support ticket management and messaging.
- **faqs** - FAQ content management.
- **exercises** - Exercise library CRUD.
- **knowledgeBase** - Educational content management.
- **notificationLog** - Notification history and audit trail.
- **systemConfig** - Settings, pricing plans, payment methods, social links.
- **adminNotifications** - Broadcast and individual notification sending.
- **clientInsights** - Aggregated analytics for client detail pages.
- **assessments** - Assessment history and version tracking.

All data is synced in real-time via Convex subscriptions, so changes made by clients (new tickets, completed check-ins) appear instantly without page refresh.
