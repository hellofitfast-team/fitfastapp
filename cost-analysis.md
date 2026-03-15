# FitFast — Monthly Cost Breakdown

> Last updated: 2026-03-15 | Costs verified via Langfuse AI tracing + official pricing pages

---

## Your Monthly Bill (Summary)

This is what you pay each month to keep FitFast running for your clients.

### At 500 Clients

| What You're Paying For      | Monthly Cost   | Why You Need It                                                        |
| --------------------------- | -------------- | ---------------------------------------------------------------------- |
| Vercel (hosting)            | $20            | Runs the 3 apps on the internet. Pro plan required for commercial use. |
| AI (meal plans + OCR)       | ~$16           | Generates personalized meal plans and reads payment screenshots        |
| Convex (database + backend) | $0             | Stores all client data, handles logins. Free tier covers 500 clients.  |
| Sentry (error alerts)       | $0             | Emails you when something breaks. Free tier: 5,000 errors/month.       |
| Resend (emails)             | $0             | Sends invitation and reminder emails. Free tier: 3,000 emails/month.   |
| Langfuse (AI monitoring)    | $0             | Tracks AI performance. Free tier: 50,000 events/month.                 |
| Domain name                 | ~$1            | Your custom web address (billed annually ~$12/year)                    |
| **Total**                   | **~$37/month** |                                                                        |

### How Cost Changes With More Clients

| Number of Clients | AI Cost | Fixed Costs | Total Monthly Bill | Cost Per Client |
| ----------------- | ------- | ----------- | ------------------ | --------------- |
| 100               | ~$3     | $21         | ~$24               | $0.24           |
| 250               | ~$8     | $21         | ~$29               | $0.12           |
| 500               | ~$16    | $21         | ~$37               | $0.07           |
| 1,000             | ~$31    | $21         | ~$52               | $0.05           |

The only fixed cost is Vercel Pro ($20/month) + domain (~$1/month). Everything else is either free or pay-per-use. The more clients you have, the cheaper it gets per person.

---

## What Does Each Service Do?

### Vercel ($20/month) — Your Web Host

Runs all 3 apps (client, admin, marketing) on the internet so your clients can access them from any browser or phone.

- **Plan**: Pro ($20/month) — **required for commercial use** (the free Hobby plan is for personal projects only)
- **What you get**: Fast page loads worldwide, automatic security (SSL), custom domain support
- **Includes**: 10 million requests/month, 16 CPU-hours, unlimited projects
- **Hidden fee risk**: None at your scale. The $20/month includes a $20 usage credit that covers all normal usage. You'd only pay extra if you had millions of visitors.

### Convex ($0/month) — Your Database

Stores everything: client profiles, meal plans, workout plans, check-ins, tickets, payment records. Also handles login and sends real-time updates to the app.

- **Plan**: Free Starter (no credit card required)
- **Free tier includes**: 1 million function calls/month, 0.5 GB database storage, 20 GB-hours compute
- **At 500 clients**: You'll use roughly 300-500K function calls/month and ~200-400 MB database — well within free limits
- **When you'd need to upgrade**: If your database grows past 0.5 GB (likely after 6-12 months of operation). Pro plan is $25/month and gives 50 GB.

### Sentry ($0/month) — Error Monitoring

Watches all 3 apps for errors 24/7. When something breaks, you get an email.

- **Plan**: Free Developer tier
- **Free tier includes**: 5,000 errors/month, 1 user, email alerts
- **At 500 clients**: You'll typically see 50-200 errors/month — well within the 5,000 limit
- **Limitation**: Only 1 user can access the dashboard. Fine if only your developer checks it.

### AI Services (~$0.03 per client/month)

The AI creates personalized meal plans and reads payment screenshots. Costs are verified from actual Langfuse traces (real production data, not estimates).

| What the AI Does                | When It Happens                      | Verified Cost Per Use                    |
| ------------------------------- | ------------------------------------ | ---------------------------------------- |
| Generate a meal plan            | Every check-in (every 10-14 days)    | $0.0118 (Langfuse avg of 3 traces)       |
| Generate a workout plan         | Every check-in                       | **Free** (uses exercise database, no AI) |
| Translate a meal plan to Arabic | When client switches language        | ~$0.003                                  |
| Translate a workout plan        | When client switches language        | **Free** (instant, uses database)        |
| Read a payment screenshot (OCR) | Once per signup                      | $0.0002                                  |
| Read an InBody scan             | Per check-in (if client uploads one) | $0.0001                                  |

**How the ~$16/month at 500 clients is calculated (from Langfuse):**

- 500 clients × 2.5 check-ins/month × $0.0118/plan = $14.75 (meal plans)
- 100 clients switching language × $0.003 = $0.30 (translations)
- 50 new signups × $0.0002 = $0.01 (OCR)
- **Total: ~$15.06/month** (rounded to ~$16 for buffer)

### Resend ($0/month) — Emails

Sends automated emails: signup invitations, plan-ready notifications, check-in reminders, ticket replies.

- **Plan**: Free (up to 3,000 emails/month)
- **At 500 clients**: You'll send roughly 1,000-2,000 emails/month — within free tier
- **When you'd need to upgrade**: Over 3,000 emails/month → $20/month for 50,000 emails

### Domain (~$12/year)

Your custom web address (e.g., `fitfast.app`). Billed annually.

---

## What's Free (And Will Stay Free)

| Feature                   | Why It's Free                                               |
| ------------------------- | ----------------------------------------------------------- |
| Workout plan generation   | Uses a built-in algorithm + exercise database — no AI calls |
| Workout translation       | Exercise database has Arabic names/instructions built in    |
| Push notifications        | Uses standard Web Push protocol — no third-party service    |
| Uptime monitoring         | Runs via GitHub Actions (free)                              |
| Code hosting              | GitHub (free private repos)                                 |
| AI monitoring (Langfuse)  | Free tier: 50,000 events/month                              |
| Error monitoring (Sentry) | Free tier: 5,000 errors/month                               |
| Database (Convex)         | Free tier: 1M calls, 0.5 GB storage                         |

---

## How Fast Is the AI?

| Task                       | Speed         | Notes                                           |
| -------------------------- | ------------- | ----------------------------------------------- |
| Meal plan generation       | 15-60 seconds | Creates a full 10-14 day personalized meal plan |
| Workout plan generation    | Instant       | No AI needed — built from exercise database     |
| Meal plan translation      | ~3-4 seconds  | Translates all 10 days in parallel              |
| Workout plan translation   | Instant       | Swaps to Arabic fields already in the database  |
| Payment screenshot reading | ~3 seconds    | Extracts amount, sender, reference number       |

---

## Potential Hidden Fees to Watch

| Service    | What Could Cause Extra Charges                | How Likely                   | How to Avoid                                               |
| ---------- | --------------------------------------------- | ---------------------------- | ---------------------------------------------------------- |
| Vercel     | Going over 10M requests/month or 16 CPU-hours | Very unlikely at 500 clients | Monitor Vercel dashboard monthly                           |
| Convex     | Database growing past 0.5 GB                  | Likely after 6-12 months     | Upgrade to Pro ($25/mo) when needed                        |
| Resend     | Sending more than 3,000 emails/month          | Unlikely at 500 clients      | Monitor email volume                                       |
| Google AI  | Unusual spike in meal plan generations        | Very unlikely                | Rate limiting is built in (max 2 plans per check-in cycle) |
| OpenRouter | OCR usage spike                               | Very unlikely                | Each OCR costs $0.0002 — negligible                        |

**Bottom line**: No surprise bills. The biggest risk is Convex database outgrowing the free tier after 6-12 months, which adds $25/month. Everything else stays within free limits at 500 clients.

---

## Annual Cost Projection

| Scenario                             | Monthly | Annual | Notes                             |
| ------------------------------------ | ------- | ------ | --------------------------------- |
| Year 1 (500 clients, all free tiers) | ~$37    | ~$444  | Convex and Sentry on free tiers   |
| Year 2+ (500 clients, Convex Pro)    | ~$62    | ~$744  | After database outgrows 0.5 GB    |
| 1,000 clients (Convex Pro)           | ~$77    | ~$924  | Near the upper limit per instance |

---

## Technical Details (For Developers)

### AI Model Configuration

| Model                       | Use Case                   | Input Cost     | Output Cost    | Provider           |
| --------------------------- | -------------------------- | -------------- | -------------- | ------------------ |
| `gemini-2.5-flash-lite`     | Meal plans, translation    | $0.10/M tokens | $0.40/M tokens | Google AI (direct) |
| `qwen/qwen3-vl-8b-instruct` | Payment & InBody OCR       | $0.06/M tokens | $0.40/M tokens | OpenRouter         |
| `qwen/qwen3-embedding-8b`   | RAG embeddings (1024 dims) | —              | —              | OpenRouter         |

### Per-Operation Cost (Langfuse-Verified)

| Operation                          | Tokens (in/out) | Cost    | Latency | Langfuse Trace |
| ---------------------------------- | --------------- | ------- | ------- | -------------- |
| Meal plan gen (EN, 7-day)          | 21K/21K         | $0.0105 | 53.4s   | `ffd3ee5d`     |
| Meal plan gen (EN, 10-day)         | 25K/23K         | $0.0119 | —       | `01e81597`     |
| Meal plan gen (AR, 7-day)          | 21K/27K         | $0.0130 | 59.3s   | `b0905287`     |
| Meal translation (10-day parallel) | 5K/5K           | $0.003  | 3.8s    | `d1d7b293`     |
| Workout plan generation            | 0               | $0      | <100ms  | deterministic  |
| Workout translation (DB swap)      | 0               | $0      | <100ms  | no AI call     |
| Payment OCR                        | 2.6K/66         | $0.0002 | 3.2s    | `8f75ec9d`     |
| InBody OCR                         | 1.3K/89         | $0.0001 | 4.0s    | `11bd4897`     |

### Translation Architecture

**Meal plans**: Parallel day-by-day AI translation via `Promise.all`. Each day is an independent Gemini Flash Lite call (~500 tokens, ~1-2s). All 10 days run concurrently, total wall time ~3-4s.

**Workout plans**: Programmatic DB field swap — no AI. The exercise database has bilingual fields (`name`/`nameAr`, `instructions`/`instructionsAr`). The workout engine regenerates the plan in the target language. Result: instant, free, zero tokens.

### Service Tier Details

| Service  | Free Tier Limits                     | When to Upgrade                  | Paid Tier             |
| -------- | ------------------------------------ | -------------------------------- | --------------------- |
| Convex   | 1M calls, 0.5GB DB, 20 GB-hr compute | DB > 0.5 GB (~6-12 months)       | Pro: $25/mo (50GB DB) |
| Vercel   | Non-commercial only                  | Required from day 1 (commercial) | Pro: $20/user/mo      |
| Sentry   | 5K errors, 1 user                    | Need >1 user or >5K errors       | Team: $26/mo          |
| Resend   | 3K emails/month                      | >3K emails                       | Pro: $20/mo           |
| Langfuse | 50K observations/month               | >50K observations                | Pro: $59/mo           |

### Environment Variables (AI-related)

| Variable                       | Service                            | Set In     |
| ------------------------------ | ---------------------------------- | ---------- |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI (Gemini)                 | Convex env |
| `OPENROUTER_API_KEY`           | OpenRouter (Qwen OCR + embeddings) | Convex env |
| `LANGFUSE_PUBLIC_KEY`          | Langfuse observability             | Convex env |
| `LANGFUSE_SECRET_KEY`          | Langfuse observability             | Convex env |
