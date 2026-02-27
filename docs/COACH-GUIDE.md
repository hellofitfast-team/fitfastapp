# FitFast Coach Guide

Welcome to FitFast! This guide covers everything you need to manage your fitness coaching business through the admin panel.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Dashboard Overview](#dashboard-overview)
3. [Managing Client Signups](#managing-client-signups)
4. [Client Management](#client-management)
5. [Tickets (Support)](#tickets-support)
6. [FAQ Management](#faq-management)
7. [Knowledge Base](#knowledge-base)
8. [Subscription Plans](#subscription-plans)
9. [Settings](#settings)
10. [Tips and Best Practices](#tips-and-best-practices)

---

## Getting Started

### Logging In

1. Open your admin panel URL in a web browser (e.g., `https://admin.yourdomain.com`)
2. You will see the login page. Enter your coach email and password.
3. After login, you will be taken directly to the Dashboard.

### Navigation

The admin panel has a sidebar (on desktop) or bottom navigation (on mobile) with these sections:

| Section   | What It Does                                  |
| --------- | --------------------------------------------- |
| Dashboard | Overview stats and charts                     |
| Clients   | View and manage all your clients              |
| Signups   | Review pending client registrations           |
| Tickets   | Handle client support requests                |
| FAQs      | Manage FAQ entries shown to clients           |
| Knowledge | Add coaching knowledge and food data for AI   |
| Settings  | Configure plans, payments, check-in frequency |

---

## Dashboard Overview

The dashboard gives you a real-time snapshot of your coaching business:

### Stat Cards (Top Row)

- **Total Clients** -- The total number of clients in the system
- **Active Clients** -- Clients with an active subscription
- **Pending Signups** -- New registrations waiting for your approval (highlighted in red if > 0)
- **Open Tickets** -- Support tickets needing your response (highlighted in red if > 0)

Clicking any stat card takes you to the corresponding page.

### Charts

- **Client Growth** -- Area chart showing new client registrations over the last 6 months
- **Weekly Activity** -- Bar chart comparing new signups vs. open tickets over the last 4 weeks

### Quick Actions

At the bottom of the dashboard, you can see previews of pending signups and open tickets with direct links to manage them.

---

## Managing Client Signups

When a new client signs up through the marketing site, they appear in the **Signups** page as "pending."

### Signup Information

Each signup row shows:

| Column | Details                                                  |
| ------ | -------------------------------------------------------- |
| Client | Full name, email, and phone number                       |
| Plan   | The subscription plan they selected (Monthly, Quarterly) |
| Status | `pending`, `approved`, or `rejected`                     |
| Date   | When they submitted the signup                           |

### Reviewing Payment Proof

1. Click the **Payment** button on a signup row to expand payment details.
2. You will see the payment screenshot the client uploaded.
3. Click the screenshot to view it full-size.
4. If OCR was able to extract data, you will see fields like: Amount, Sender Name, Reference Number, Date, and Bank.
5. Use this information to verify the payment was received.

### Approving a Signup

1. Verify the payment screenshot matches the expected plan amount.
2. Click the green **Approve** button.
3. The client will receive an email invitation to create their account and get started.

### Rejecting a Signup

1. Click the red **Reject** button.
2. A text field will appear asking for a rejection reason (required).
3. Type a reason (e.g., "Payment not received" or "Screenshot unclear, please resubmit").
4. Click **Confirm Reject**.

### Signup Detail Page

Click **View Details** on any signup to see a full-page view with all signup data and payment information.

---

## Client Management

### Client List

The **Clients** page shows all registered clients with:

- Name and email
- Current status (active, pending approval, expired, inactive)
- Subscription plan tier
- Pagination controls for large client lists

### Client Detail Page

Click on any client to see their full profile:

#### Profile Card

- Status (active / pending approval / expired / inactive)
- Subscription plan tier (Monthly / Quarterly)
- Phone number
- Preferred language (English or Arabic)

#### Plan Period Card

- Subscription start and end dates
- Days remaining on current plan

#### Assessment Summary

- Current weight and height
- Experience level (beginner / intermediate / advanced)
- Fitness goals

#### Payment History

- All past signup/payment records for this client
- Each payment shows: status, screenshot, OCR-extracted data, plan tier, reference number

### Client Actions

#### For Pending Clients

- **Activate** -- Select a plan tier (Monthly or Quarterly), then click Activate. This sets plan start/end dates and marks the client as active.
- **Reject** -- Provide a rejection reason and confirm. The client is removed from the active queue.

#### For Active / Expired Clients

- **Deactivate** -- Marks the client as inactive. Their data is retained for 90 days before automatic cleanup.

---

## Tickets (Support)

Tickets are the primary communication channel between you and your clients. There is no real-time chat; clients submit tickets and you respond.

### Ticket List

The **Tickets** page shows all support tickets sorted by most recent activity:

| Column   | Details                                                 |
| -------- | ------------------------------------------------------- |
| Subject  | Brief description from the client                       |
| Category | meal_issue, workout_issue, technical, bug_report, other |
| Status   | `open`, `coach_responded`, `closed`                     |
| Date     | Last activity timestamp                                 |

### Responding to a Ticket

1. Click on a ticket to open the conversation thread.
2. Read the client's message(s).
3. Type your response in the reply box.
4. Click **Send**. The ticket status changes to `coach_responded`.
5. The client receives a push notification (if enabled) and an email notification.

### Ticket Statuses

| Status            | Meaning                                  |
| ----------------- | ---------------------------------------- |
| `open`            | Client submitted, awaiting your response |
| `coach_responded` | You replied, awaiting client follow-up   |
| `closed`          | Issue resolved                           |

### Tips for Tickets

- Respond promptly -- clients see a banner on their dashboard when you reply.
- If a ticket includes a screenshot, it was attached for context (e.g., showing a bug or issue).
- Device information (browser, OS, screen size) is auto-captured for technical tickets.

---

## FAQ Management

FAQs are shown in the client app's FAQ page. You can manage them per-language.

### Adding a New FAQ

1. Go to the **FAQs** page.
2. Click **Add FAQ**.
3. Enter the question and answer.
4. Select the language (English or Arabic).
5. Set the display order (lower numbers appear first).
6. Click **Save**.

### Editing an FAQ

1. Click the edit icon on any FAQ entry.
2. Modify the question, answer, or display order.
3. Click **Save**.

### Deleting an FAQ

1. Click the delete icon on the FAQ entry.
2. Confirm the deletion.

### Best Practices

- Keep answers concise and helpful.
- Add both English and Arabic versions for bilingual clients.
- Common questions: "How often do I check in?", "How do I change my plan?", "What if I miss a check-in?"

---

## Knowledge Base

The Knowledge Base has two tabs: **Knowledge** and **Food & Recipes**. Both feed into the AI when generating personalized meal and workout plans.

### Knowledge Tab

This is where you add coaching principles, dietary guidelines, and training philosophies that the AI uses as context.

#### Adding a Text Entry

1. Click **Add Text**.
2. Enter a title (e.g., "Egyptian Protein Sources Guide").
3. Write the content with your coaching knowledge.
4. Select relevant tags: Nutrition, Workout, Recovery, or General.
5. Click **Save**.

#### Uploading a PDF

1. Select tags first (optional but recommended).
2. Click **Upload PDF** and select a file.
3. The PDF is processed and its text is extracted for AI context.

#### Editing an Entry

1. Click the pencil icon on any entry.
2. Modify the title, content, or tags.
3. Click **Save**.

#### Deleting an Entry

Click the trash icon on any entry to remove it.

### Food & Recipes Tab

Add foods and recipes that the AI can use in meal plans.

#### Adding a Food Item

1. Click **Add Food**.
2. Enter the name (English and optionally Arabic).
3. Select a category (Protein, Carb, Fat, Vegetable, Fruit, Dairy, Dessert, Recipe).
4. Enter macros per 100g: Calories, Protein, Carbs, Fat.
5. Optionally add tags (high_protein, egyptian, quick_prep, etc.).
6. Click **Save**.

#### Adding a Recipe

1. Click **Add Recipe**.
2. Fill in the same fields as a food item.
3. Additionally, enter: Serving size, macros per serving, ingredients (one per line), and instructions (one per line).
4. Click **Save**.

#### Searching and Filtering

- Use the search bar to find foods by name.
- Filter by category (Protein, Carb, etc.).
- Filter by type (All, Ingredients Only, Recipes Only).

---

## Subscription Plans

### Managing Plans

In **Settings**, under the **Pricing Plans** section:

1. Each plan has: Name (EN + AR), Price, Currency, Duration (EN + AR), Features list (EN + AR), and optional Badge text.
2. Click to edit any plan's fields inline.
3. Add new plans or remove existing ones.
4. Click **Save** when done.

Plans are displayed on the marketing site and during client signup.

### Managing Payment Methods

Under the **Payment Methods** section:

1. Add payment methods clients can use (e.g., InstaPay, Vodafone Cash, bank transfer).
2. Each method has: Type, Account Name, Account Number, and optional Instructions.
3. These are shown to clients during checkout on the marketing site.

---

## Settings

### Check-In Frequency

- Set the number of days between client check-ins (default: 14 days).
- Valid range: 7 to 30 days.
- This applies globally to all clients.
- After each check-in, the client's next check-in is locked for this many days.

### Social Links

Add your social media profiles (Twitter, Instagram, TikTok, YouTube, Facebook, LinkedIn). These are displayed in the client app and marketing site.

---

## Tips and Best Practices

### Daily Routine

1. Check the **Dashboard** for pending signups and open tickets.
2. Review and approve/reject any new signups.
3. Respond to open support tickets.

### Client Onboarding

1. When a new client signs up, review their payment proof promptly.
2. After approval, the client receives an email invite.
3. They complete an initial assessment (goals, measurements, medical history, schedule).
4. AI automatically generates their first meal and workout plans.

### Knowledge Base

- The more knowledge you add, the better the AI-generated plans will be.
- Add region-specific foods (Egyptian dishes, local ingredients).
- Upload PDF nutrition guides you have.
- Keep information current -- update entries as your coaching methodology evolves.

### Check-In Cycle

- Clients submit check-ins every N days (as you configured).
- Each check-in includes: weight, body measurements, workout performance ratings, energy/sleep/diet ratings, progress photos, and notes.
- After submission, AI generates new meal and workout plans based on progress.
- This cycle repeats throughout the subscription.

### Subscription Management

- Monitor client plan expiry dates in the client detail page.
- When a plan is expiring, the client sees a renewal prompt in their app.
- After renewal payment, you can update their plan period.
- Inactive clients' data is automatically cleaned up after 90 days.

### Language Support

- The entire platform supports English and Arabic (with right-to-left layout).
- AI generates plans in the client's selected language.
- Add FAQs and knowledge in both languages for best coverage.
