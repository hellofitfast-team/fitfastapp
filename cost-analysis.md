# FitFast — Monthly Cost Breakdown

> Last updated: 2026-03-15

---

## Your Monthly Bill (Summary)

This is what you pay each month to keep FitFast running for your clients.

### At 500 Clients

| What You're Paying For      | Monthly Cost     | Why You Need It                                                            |
| --------------------------- | ---------------- | -------------------------------------------------------------------------- |
| Convex (database + backend) | $25              | Stores all client data, handles logins, real-time updates                  |
| Vercel (hosting)            | $20              | Runs the 3 apps (client, admin, marketing) on the internet                 |
| Sentry (error alerts)       | $26              | Emails you when something breaks so you can fix it fast                    |
| AI (meal plans + OCR)       | $15-25           | Generates personalized meal plans and reads payment screenshots            |
| Resend (emails)             | $0               | Sends invitation, plan-ready, and reminder emails (free up to 3,000/month) |
| Langfuse (AI monitoring)    | $0               | Tracks AI performance and costs (free up to 50K events/month)              |
| Domain name                 | ~$1              | Your custom web address (billed annually ~$12/year)                        |
| **Total**                   | **$87-97/month** |                                                                            |

### How Cost Changes With More Clients

| Number of Clients | AI Cost | Total Monthly Bill | Cost Per Client |
| ----------------- | ------- | ------------------ | --------------- |
| 100               | $3-5    | $75-77             | $0.75           |
| 250               | $8-13   | $80-85             | $0.32           |
| 500               | $15-25  | $87-97             | $0.19           |
| 1,000             | $30-50  | $102-122           | $0.12           |

The more clients you have, the cheaper it gets per person. The fixed costs ($72/month for hosting, database, and monitoring) stay the same whether you have 10 or 1,000 clients.

---

## What Does Each Service Do?

### Convex ($25/month) — Your Database

Stores everything: client profiles, meal plans, workout plans, check-ins, tickets, payment records. Also handles login/authentication and sends real-time updates to the app.

- **Plan**: Pro ($25/month)
- **Includes**: 1 million function calls/month, automatic backups
- **When to upgrade**: If you exceed 1M function calls (unlikely under 1,000 clients)

### Vercel ($20/month) — Your Web Host

Runs all 3 apps on the internet so your clients and you can access them from any browser or phone.

- **Plan**: Pro ($20/month for 3 projects)
- **What you get**: Fast page loads worldwide, automatic SSL (security), custom domain support
- **When to upgrade**: Only if you need advanced analytics or team collaboration features

### Sentry ($26/month) — Error Monitoring

Watches all 3 apps for errors 24/7. When something breaks, you get an email. Helps your developer find and fix problems quickly.

- **Plan**: Team ($26/month)
- **Includes**: 50,000 error events/month, performance monitoring
- **When to upgrade**: Only if error volume exceeds 50K events (very unlikely)

### AI Services (~$0.03-0.05 per client/month)

The AI creates personalized meal plans, translates content between English and Arabic, and reads payment screenshots. Here's what each AI task costs:

| What the AI Does                | When It Happens                      | Cost Per Use                         |
| ------------------------------- | ------------------------------------ | ------------------------------------ |
| Generate a meal plan            | Every check-in (every 10-14 days)    | $0.005-0.013                         |
| Generate a workout plan         | Every check-in                       | Free (uses exercise database, no AI) |
| Translate a meal plan to Arabic | When client switches language        | ~$0.003                              |
| Translate a workout plan        | When client switches language        | Free (instant, uses database)        |
| Read a payment screenshot (OCR) | Once per signup                      | $0.0002                              |
| Read an InBody scan             | Per check-in (if client uploads one) | $0.0001                              |

**Key insight**: Workout plans and workout translations are **free** — they use a built-in exercise database with Arabic translations already included. No AI is needed. Only meal plans require AI.

### Resend ($0/month) — Emails

Sends automated emails to your clients: signup invitations, plan-ready notifications, check-in reminders, and ticket replies.

- **Plan**: Free (up to 3,000 emails/month)
- **When to upgrade**: If you send more than 3,000 emails/month ($20/month for 50,000 emails)
- **At 500 clients**: You'll send roughly 1,000-2,000 emails/month — well within the free tier

### Domain (~$12/year)

Your custom web address (e.g., `fitfast.app`). Billed annually by your domain registrar.

---

## How Fast Is the AI?

| Task                       | Speed         | Notes                                           |
| -------------------------- | ------------- | ----------------------------------------------- |
| Meal plan generation       | 15-60 seconds | Creates a full 10-14 day personalized meal plan |
| Workout plan generation    | Instant       | No AI needed — built from exercise database     |
| Meal plan translation      | ~3-4 seconds  | Translates all 10 days in parallel              |
| Workout plan translation   | Instant       | Swaps to Arabic fields already in the database  |
| Payment screenshot reading | ~3 seconds    | Extracts amount, sender, reference number       |
| InBody scan reading        | ~4 seconds    | Extracts body composition measurements          |

---

## AI Models Used

FitFast uses affordable, fast AI models — not expensive ones like GPT-4 or Claude.

| Model                 | What It Does                               | Provider        | Why This One                                      |
| --------------------- | ------------------------------------------ | --------------- | ------------------------------------------------- |
| Gemini 2.5 Flash Lite | Meal plans + translation                   | Google (direct) | Fastest available, cheapest for structured output |
| Qwen3 VL 8B           | Reading payment screenshots + InBody scans | OpenRouter      | Best for reading images at lowest cost            |
| Qwen3 Embedding 8B    | Knowledge base search                      | OpenRouter      | Powers the coach knowledge base                   |

**Monthly AI cost at 500 clients: $15-25** (about $0.03-0.05 per client)

---

## What's Free (And Will Stay Free)

| Feature                 | Why It's Free                                               |
| ----------------------- | ----------------------------------------------------------- |
| Workout plan generation | Uses a built-in algorithm + exercise database — no AI calls |
| Workout translation     | Exercise database has Arabic names/instructions built in    |
| Push notifications      | Uses standard Web Push protocol — no third-party service    |
| Uptime monitoring       | Runs via GitHub Actions (free for public repos)             |
| Code hosting            | GitHub free tier (private repos included)                   |
| Langfuse AI monitoring  | Free tier covers 50K observations/month                     |

---

## Annual Cost Projection

| Clients | Monthly | Annual  | Notes                             |
| ------- | ------- | ------- | --------------------------------- |
| 500     | ~$92    | ~$1,104 | Sweet spot for a single coach     |
| 1,000   | ~$112   | ~$1,344 | Near the upper limit per instance |

This is the total cost to run the entire platform — all 3 apps, database, AI, email, monitoring, everything.

---

## Technical Details (For Developers)

### AI Model Configuration

| Model                       | Use Case                   | Input Cost     | Output Cost    | Provider           |
| --------------------------- | -------------------------- | -------------- | -------------- | ------------------ |
| `gemini-2.5-flash-lite`     | Meal plans, translation    | $0.10/M tokens | $0.40/M tokens | Google AI (direct) |
| `qwen/qwen3-vl-8b-instruct` | Payment & InBody OCR       | $0.06/M tokens | $0.40/M tokens | OpenRouter         |
| `qwen/qwen3-embedding-8b`   | RAG embeddings (1024 dims) | —              | —              | OpenRouter         |

### Per-Operation Cost Breakdown

| Operation                                | Tokens (in/out)   | Cost         | Latency |
| ---------------------------------------- | ----------------- | ------------ | ------- |
| Meal plan generation (EN, 10-day)        | ~10K/15K          | $0.005-0.011 | 15-55s  |
| Meal plan generation (AR, 10-day)        | ~10K/22K          | $0.006-0.013 | 20-60s  |
| Meal plan translation (10-day, parallel) | ~5K/5K            | ~$0.003      | 3-4s    |
| Workout plan generation                  | 0 (deterministic) | $0           | <100ms  |
| Workout plan translation                 | 0 (DB field swap) | $0           | <100ms  |
| Payment OCR                              | 2.6K/66           | $0.0002      | 3.2s    |
| InBody OCR                               | 1.3K/89           | $0.0001      | 4.0s    |

### Translation Architecture

**Meal plans**: Parallel day-by-day AI translation via `Promise.all`. Each day is an independent Gemini Flash Lite call (~500 tokens, ~1-2s). All 10 days run concurrently, total wall time ~3-4s. Langfuse-verified.

**Workout plans**: Programmatic DB field swap — no AI. The exercise database has bilingual fields (`name`/`nameAr`, `instructions`/`instructionsAr`). The workout engine regenerates the plan in the target language using these fields. All template text (progressionNotes, safetyTips, splitName, workoutName) is also bilingual in source code. Result: instant, free, zero tokens.

### Langfuse Trace Summary (2026-03-15)

| Trace                                  | Type        | Strategy                   | Duration | Tokens  | Status          |
| -------------------------------------- | ----------- | -------------------------- | -------- | ------- | --------------- |
| Meal translation (10-day)              | AI parallel | 10 concurrent Gemini calls | 3.8s     | 5K/5K   | OK              |
| Workout translation                    | DB swap     | No AI call                 | <100ms   | 0       | OK              |
| Meal translation (old, single-pass)    | AI single   | 1 Gemini call              | 18.8s    | 5K/5K   | OK (deprecated) |
| Workout translation (old, single-pass) | AI single   | 1 Gemini call              | 97.9s    | 21K/27K | OK (deprecated) |

### Environment Variables (AI-related)

| Variable                       | Service                            | Set In     |
| ------------------------------ | ---------------------------------- | ---------- |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI (Gemini)                 | Convex env |
| `OPENROUTER_API_KEY`           | OpenRouter (Qwen OCR + embeddings) | Convex env |
| `LANGFUSE_PUBLIC_KEY`          | Langfuse observability             | Convex env |
| `LANGFUSE_SECRET_KEY`          | Langfuse observability             | Convex env |
