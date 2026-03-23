# FitFast Marketing App (Landing Page) - Complete Documentation

The FitFast Marketing App is the public-facing website that introduces potential clients to the FitFast fitness coaching service. It serves as a sales funnel: visitors learn about the service, view pricing, and complete a signup with payment proof. It is fully bilingual (English and Arabic with RTL support) and features smooth scroll-triggered animations.

---

## Technology Overview

- **Next.js 16** with App Router
- **GSAP 3.14** for scroll-triggered animations and parallax effects
- **next-intl** for full internationalization (English + Arabic with RTL)
- **Convex** for dynamic data (pricing plans, payment methods, signup submissions)
- **React Hook Form + Zod** for form validation
- **Tailwind CSS v4** for styling

---

## URL Structure

All routes include a locale prefix:

- English: `/en`, `/en/confirmation`
- Arabic: `/ar`, `/ar/confirmation`

The root `/` redirects to `/en` (default locale).

---

## Pages

### 1. Landing Page - `/{locale}/`

The landing page is a single long-scroll page composed of multiple sections, each revealing with scroll-triggered animations. It tells the FitFast story from top to bottom, ending with pricing and a checkout flow.

---

#### Section A: Navbar (Fixed)

A fixed navigation bar at the top of the page that stays visible as the user scrolls.

**Elements:**

- **Logo + "FITFAST"** branding with the "Fast" portion in the accent color (orange/red).
- **Navigation links** (smooth scroll to sections):
  - "Method" - Scrolls to the Features section.
  - "Ecosystem" - Scrolls to the Bento Grid section.
  - "Pricing" - Scrolls to the Pricing section.
- **Language switcher** - EN/AR toggle buttons. Active language has a highlighted background.
- **"Start Free" CTA button** - Scrolls directly to the Pricing section.

**Scroll Behavior:**

- On initial load: transparent background.
- On scroll: gains a blurred backdrop (backdrop-blur) and semi-transparent dark background for readability over page content.

---

#### Section B: Hero

The first thing visitors see. Designed to capture attention and communicate the core value proposition immediately.

**Content:**

- **Badge** (animated entrance): "Your body. Your plan. AI-powered." — A small pill-shaped badge that fades in above the headline.
- **Headline** (large, stacked): "TRAIN FASTER. LIVE STRONGER." — Bold, uppercase typography for maximum impact.
- **Subheading**: "Stop guessing. FitFast combines AI-powered plans with dedicated coaching to create a fitness experience that's uniquely yours." — Explains the service in one sentence.
- **Two CTA buttons**:
  - **"Begin Transformation"** (primary, solid) - Scrolls to Pricing.
  - **"Watch The Film"** (secondary, outline) - Placeholder for a future promotional video.
- **Hero image** - A large athlete training photo with a parallax scroll effect (image moves at a different speed than the page scroll, creating depth).

**Animations:**

- Badge slides in from below with a fade.
- Headline letters/words animate in with staggered timing.
- CTA buttons fade up.
- Hero image has parallax movement on scroll.

---

#### Section C: Features (id="method")

Explains the three core pillars of the FitFast service.

**Headline**: "NOT A TRACKER. AN ARCHITECT." — Positions FitFast as something fundamentally different from calorie-counting apps.

**Three Feature Cards** displayed in a row (stacked on mobile):

1. **Algorithmic Nutrition** (Zap icon)
   - Description: "Personalized meal plans with precise macros, ingredients, and step-by-step recipes."
   - What the client should expect: AI-generated meal plans tailored to their goals, dietary preferences, and restrictions. Not generic templates — every meal is calculated for their specific caloric and macro needs.

2. **Adaptive Training** (Dumbbell icon)
   - Description: "14-day workout programs that evolve with your progress."
   - What the client should expect: Workout plans that change every check-in cycle based on their performance data, energy levels, and progression. The AI adapts difficulty, exercises, and volume.

3. **Dedicated Coach Support** (MessageCircle icon)
   - Description: "AI builds your plans, your coach fine-tunes them."
   - What the client should expect: A real human coach reviews their data, answers questions via the in-app ticket system, and can override or adjust AI-generated plans when needed.

**Hover Effects:**

- Cards reveal a background image on hover with a smooth scale animation.
- Icons bounce slightly with a shadow effect on hover.
- Cards slide up into view as the user scrolls down.

---

#### Section D: Bento Grid (id="ecosystem")

A visual grid showcasing the app's feature ecosystem in an editorial-style layout. Different card sizes create visual hierarchy.

**Large Card (2x2): Smart Check-Ins**

- Icon: CalendarCheck
- Headline: "SMART CHECK-INS: Progress that drives your plan."
- Description: "Every 10 days, submit your weight, measurements, photos, and performance data. Your AI uses this to regenerate optimized plans."
- What the client should expect: A structured check-in process that directly influences their next cycle of meal and workout plans. The more data they provide, the better the AI can personalize.

**Medium Card: Macro Meals**

- Shows sample meal examples with full macro breakdowns:
  - "Grilled Salmon Bowl: 45P / 60C / 15F = 555 kcal"
  - "Steak & Sweet Potato: 50P / 40C / 20F = 540 kcal"
- What the client should expect: Meal plans with precise nutritional information — not vague suggestions like "eat chicken and rice," but specific meals with calorie counts, macro splits, ingredient lists, and cooking instructions.

**Accent Card: Your Coach**

- Icon: MessageCircle
- Headline: "YOUR COACH: Direct support via in-app tickets."
- Accent-colored background (orange/red) to draw attention.
- What the client should expect: Direct access to their assigned coach through the app's built-in messaging system. No external apps needed.

**Medium Card: Track It All**

- Icon: LineChart
- Headline: "TRACK IT ALL: Weight trends, progress photos, daily tracking."
- What the client should expect: Visual charts showing weight trends over time, a gallery of progress photos, and daily logging for meals and workouts.

**Scroll Animations:** Each bento card scales up from slightly smaller as the user scrolls into view.

---

#### Section E: Pricing (id="pricing")

The pricing section where visitors choose their plan and begin the signup process.

**Headline**: "COMMIT TO GREATNESS"

**Dynamic Pricing Cards**

- Pricing data is fetched in real-time from the Convex database (configured by the coach in the admin panel's Settings page).
- Displayed in a responsive grid (1 column on mobile, 2 columns on desktop if multiple plans exist).

**Each Pricing Card shows:**

- **Plan name** (localized — different in English and Arabic).
- **Price** formatted with currency: e.g., "2,500 EGP / 1 month" or "6,000 EGP / 3 months."
- **Badge** (optional): "Most Popular" or "Best Value" if configured by the coach.
- **Feature list** (5 features, localized):
  - Personalized AI meal plans
  - Custom workout programs
  - Dedicated coach support
  - Progress tracking & analytics
  - Push notification reminders
- **"Choose This Plan" button** - Opens the checkout drawer.

**Highlighted Plans:** Plans marked as highlighted by the coach have a dark background with an accent border to stand out.

**Loading State:** Skeleton cards appear while pricing data is being fetched.

**Fallback:** If no plans are configured yet, displays: "Pricing plans coming soon."

**Scroll Animations:** Pricing cards slide up with staggered timing as the section enters the viewport.

---

#### Section F: Footer

A dark-themed footer at the bottom of the page.

**Content:**

- FitFast logo and branding.
- "All rights reserved" text with the current year (localized).
- **System status indicator**: "System Operational" with an animated green ping dot — communicates reliability to potential clients.

**Layout:** Stacked on mobile, horizontal row on desktop.

---

### 2. Confirmation Page - `/{locale}/confirmation`

The success page shown after a client completes the signup checkout form.

**Content:**

- **Green checkmark icon** inside a circular badge — immediate visual confirmation of success.
- **Title**: "Success!" (localized).
- **Subtitle**: A confirmation message (localized) explaining the signup was received.
- **Body text**: Explains what happens next — the coach will review their registration and payment proof.
- **Timeline box**: "Your coach will contact you within 24 hours" — sets clear expectations for the client.
- **"Back to Home" button** - Returns to the landing page.

This page is the final step of the marketing funnel. After seeing it, the client waits for the coach to approve their signup in the admin panel.

---

### 3. Error Page - `/{locale}/error`

A client-side error boundary that catches and displays runtime errors gracefully.

**Content:**

- Red error icon.
- "Something went wrong" title.
- Error digest/code if available (for debugging).
- **"Try Again" button** - Resets the error state and re-renders the page.

---

## Checkout Flow (Drawer + Form)

The checkout flow is triggered when a visitor clicks "Choose This Plan" on any pricing card.

### Checkout Drawer

A full-screen bottom sheet modal that slides up from the bottom of the screen:

- **Header**: "Complete Your Subscription" with the selected plan name and price.
- **Close button** (X icon) in the top corner.
- **Scrollable body** containing the checkout form.

### Checkout Form

A multi-field form that collects all information needed for the coach to process the registration.

**Form Fields:**

1. **Full Name** (text input)
   - Minimum 2 characters.
   - Validation error: "Name must be at least 2 characters."

2. **Email** (email input)
   - Standard email format validation.
   - This becomes the client's login email.

3. **Phone** (telephone input)
   - Regex validation: `^\+?[0-9\s-]{10,15}$`
   - Accepts international format with optional + prefix.

4. **Payment Instructions Display**
   - Not an input field — this section displays the coach's configured payment methods.
   - Shows bank account details, wallet numbers, and transfer instructions.
   - Fetched dynamically from Convex.
   - Each method shows: Type, Account Name, Account Number (in monospace blue text), and any additional instructions.
   - Skeleton loading state while fetching.
   - Fallback: "Contact us for payment details" if none configured.

5. **Transfer Reference Number** (text input)
   - Required. The reference number from their bank transfer.

6. **Transfer Amount** (text input)
   - Required. The amount transferred.

7. **Payment Screenshot** (file upload)
   - Required. Proof of payment.
   - Accepts: PNG, JPG, WEBP image files.
   - Maximum file size: 5MB.
   - **Drag-and-drop** support on desktop ("Drag & drop your screenshot here").
   - **Tap to upload** on mobile.
   - File preview with filename and a remove button.
   - Validation errors for wrong file type or size.

**Submit Flow:**

1. Client-side validation runs via React Hook Form + Zod schema.
2. If valid, the form enters a loading state (all inputs disabled, submit button shows spinner).
3. An upload URL is requested from the backend (`/api/marketing/upload-url`).
4. The payment screenshot is uploaded to Convex storage.
5. A signup mutation is called with all form data:
   - User info (name, email, phone)
   - Payment proof (storage ID of uploaded screenshot)
   - Plan details (plan ID, tier name)
   - Transfer details (reference number, amount)
6. On success: redirect to `/{locale}/confirmation`.
7. On failure: a red error alert appears above the form with the error message.

---

## API Routes

### Health Check - `/api/health`

- **GET** request.
- Returns: `{ status: "ok", app: "marketing" }`
- Static route (force-static, no dynamic data).
- Used by monitoring systems to verify the app is running.

---

## Internationalization (i18n)

### Routing

- Two locales: `en` (English) and `ar` (Arabic).
- Locale prefix is always present in URLs: `/en/...` or `/ar/...`.
- Default locale: English.

### Language Switching

- The navbar contains EN/AR toggle buttons.
- Switching languages changes the URL locale segment and reloads content in the new language.
- Arabic automatically activates RTL (right-to-left) layout.

### Font Switching

- **English**: Space Grotesk (modern geometric sans-serif).
- **Arabic**: Alexandria (Arabic-optimized typeface).
- Fonts switch automatically based on the active locale.

### Translation Coverage

All visible text on every page is translated, including:

- Landing page headlines, descriptions, and CTAs.
- Feature names and descriptions.
- Pricing card content and feature lists.
- Checkout form labels, placeholders, and error messages.
- Confirmation page text.
- Error page text.
- Navigation items.
- Footer text.

---

## Animations (GSAP)

The marketing app uses GSAP (GreenSock Animation Platform) with ScrollTrigger for scroll-based animations:

| Element                  | Animation                      | Trigger              |
| ------------------------ | ------------------------------ | -------------------- |
| Hero badge               | Fade in + slide up             | Page load            |
| Hero headline            | Staggered letter/word entrance | Page load            |
| Hero CTA buttons         | Fade up                        | Page load            |
| Hero image               | Parallax vertical movement     | Scroll position      |
| Feature cards            | Slide up from below            | Scroll into viewport |
| Feature card icons       | Bounce on hover                | Mouse hover          |
| Feature card backgrounds | Scale reveal on hover          | Mouse hover          |
| Bento grid items         | Scale up from 0.95 to 1.0      | Scroll into viewport |
| Pricing cards            | Slide up with stagger          | Scroll into viewport |
| Pricing card hover       | Shadow + slight elevation      | Mouse hover          |

All animations are performance-optimized (GPU-accelerated transforms) and respect reduced-motion preferences.

---

## Data Flow Summary

### Landing Page Load

1. Page renders with static content (headlines, descriptions, features).
2. Convex query fetches pricing plans from the database.
3. Pricing cards render with real data (or skeleton loaders while fetching).
4. GSAP registers scroll triggers for all animated sections.

### Plan Selection -> Checkout

1. Visitor clicks "Choose This Plan" on a pricing card.
2. Checkout drawer slides up with the selected plan's name and price in the header.
3. Payment methods are fetched from Convex and displayed.
4. Visitor fills out the form and uploads payment proof.

### Signup Submission -> Confirmation

1. Form is validated client-side.
2. Screenshot is uploaded to Convex storage.
3. Signup record is created in the `pendingSignups` table.
4. Visitor is redirected to the confirmation page.
5. The signup now appears in the coach's admin panel under Signups as "Pending."

### Post-Signup (What Happens Next)

1. Coach sees the new signup in the admin panel.
2. Coach reviews payment proof (screenshot + OCR-extracted data).
3. Coach approves or rejects the signup.
4. If approved: client receives an invitation email with a link to set up their account.
5. Client clicks the link, sets their password, and enters the client app.
6. Client completes the initial assessment wizard.
7. AI generates personalized meal and workout plans.
8. Client begins their fitness journey.

---

## File Structure

```
apps/marketing/src/
├── app/
│   ├── page.tsx                    # Root redirect to /en
│   ├── layout.tsx                  # Root layout (fonts, metadata, Sentry)
│   ├── globals.css                 # Theme, animations, RTL styles
│   ├── sitemap.ts                  # SEO sitemap generation
│   ├── [locale]/
│   │   ├── page.tsx                # Main landing page (all sections)
│   │   ├── layout.tsx              # Locale wrapper + Convex provider
│   │   ├── error.tsx               # Error boundary
│   │   └── confirmation/
│   │       └── page.tsx            # Post-signup success page
│   └── api/
│       └── health/route.ts         # Health check endpoint
├── components/
│   ├── checkout/
│   │   ├── checkout-drawer.tsx     # Bottom sheet modal
│   │   ├── checkout-form.tsx       # Registration form + submission logic
│   │   └── payment-instructions.tsx # Bank details display
│   ├── layout/
│   │   ├── navbar.tsx              # Fixed navigation bar
│   │   └── footer.tsx              # Page footer
│   ├── language-switcher.tsx       # EN/AR locale toggle
│   └── providers/
│       └── convex-provider.tsx     # Convex React client wrapper
├── i18n/
│   ├── routing.ts                  # Locale configuration
│   └── request.ts                  # Message file loading
├── messages/
│   ├── en.json                     # English translations
│   └── ar.json                     # Arabic translations
└── middleware.ts                    # Locale routing middleware
```
