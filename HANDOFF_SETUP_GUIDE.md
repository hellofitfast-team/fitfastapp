# FitFast — Coach Handoff Setup Guide

Step-by-step guide for setting up all external services and domains during the handoff meeting. Follow in order.

---

## Before the Meeting — What the Coach Needs Ready

- [ ] A domain purchased on GoDaddy (e.g., `coachname.com`)
- [ ] A credit/debit card for topping up AI wallets
- [ ] A Google account (for Google Cloud / AI Studio billing)
- [ ] An email they want to use for all service accounts

---

## Step 1: Domain & Subdomains on GoDaddy

You need **3 subdomains** pointing to Vercel:

| Subdomain          | Purpose                  | Example               |
| ------------------ | ------------------------ | --------------------- |
| `@` (root) + `www` | Marketing / landing page | `coachname.com`       |
| `app`              | Client PWA               | `app.coachname.com`   |
| `admin`            | Coach dashboard          | `admin.coachname.com` |

### How to add DNS records on GoDaddy:

1. Log in to GoDaddy → **My Products** → click **DNS** next to the domain
2. Add these **CNAME** records:

| Type  | Name    | Value                  | TTL |
| ----- | ------- | ---------------------- | --- |
| CNAME | `app`   | `cname.vercel-dns.com` | 600 |
| CNAME | `admin` | `cname.vercel-dns.com` | 600 |
| CNAME | `www`   | `cname.vercel-dns.com` | 600 |

3. For the **root domain** (`coachname.com` without subdomain):
   - GoDaddy doesn't support CNAME on root. Use an **A record**:

| Type | Name | Value         | TTL |
| ---- | ---- | ------------- | --- |
| A    | `@`  | `76.76.21.21` | 600 |

> **Note:** `76.76.21.21` is Vercel's anycast IP. This is the standard way to point a root domain to Vercel.

4. Wait 5-10 minutes for DNS propagation.

---

## Step 2: Vercel — Connect Domain to Projects

You have **3 Vercel projects**. Add custom domains to each:

### Marketing Site (`fitfast-marketing`):

1. Go to Vercel → Project → **Settings** → **Domains**
2. Add `coachname.com`
3. Add `www.coachname.com` (redirects to root)

### Client App (`fitfast-client`):

1. Go to Vercel → Project → **Settings** → **Domains**
2. Add `app.coachname.com`

### Admin Panel (`fitfast-admin`):

1. Go to Vercel → Project → **Settings** → **Domains**
2. Add `admin.coachname.com`

Vercel will verify DNS automatically. Green checkmark = ready.

---

## Step 3: Convex (Already Set Up — Just Update URLs)

Update the Convex environment variables with the coach's domain:

```bash
npx convex env set CLIENT_APP_URL "https://app.coachname.com"
npx convex env set MARKETING_SITE_URL "https://coachname.com"
npx convex env set VAPID_SUBJECT "mailto:noreply@coachname.com"
npx convex env set RESEND_FROM_EMAIL "FitFast <noreply@coachname.com>"
```

Also update the Vercel env vars for each project:

- `NEXT_PUBLIC_APP_URL` → `https://app.coachname.com` (client project only)

---

## Step 4: Resend — Email Setup

### 4a. Create Account

1. Go to https://resend.com → sign up with coach's email

### 4b. Add & Verify Domain

1. Go to **Domains** → **Add Domain** → enter `coachname.com`
2. Resend gives you **3 DNS records** to add on GoDaddy:

| What  | Type  | Name              | Value                               |
| ----- | ----- | ----------------- | ----------------------------------- |
| SPF   | TXT   | `@`               | `v=spf1 include:amazonses.com ~all` |
| DKIM  | CNAME | (Resend provides) | (Resend provides)                   |
| DMARC | TXT   | `_dmarc`          | `v=DMARC1; p=none;`                 |

3. Add these in GoDaddy DNS settings
4. Back in Resend, click **Verify** — usually takes 2-5 minutes

### 4c. Create API Key

1. Go to **API Keys** → **Create API Key**
2. Name: `fitfast-production`
3. Permission: **Sending access**
4. Copy the key → set it in Convex:

```bash
npx convex env set RESEND_API_KEY "re_xxxxxxxxxxxx"
```

### Cost: Free tier = 3,000 emails/month (more than enough for 500-1000 clients)

---

## Step 5: Google Cloud — AI API Key (Primary Model)

FitFast uses **Google Gemini** as the primary AI model for plan generation.

### 5a. Set Up Google Cloud Billing

1. Go to https://aistudio.google.com/
2. Sign in with coach's Google account
3. Click **Get API Key** → **Create API key in new project**
4. Copy the API key

### 5b. Enable Billing (Required for Production)

1. Go to https://console.cloud.google.com/billing
2. Click **Link a billing account** or **Create account**
3. Add the coach's credit card
4. Link the billing account to the project created by AI Studio

### 5c. Set the Key in Convex

```bash
npx convex env set GOOGLE_GENERATIVE_AI_API_KEY "AIza..."
```

### Cost & Wallet Top-Up:

| Model                   | Use                                    | Input           | Output         |
| ----------------------- | -------------------------------------- | --------------- | -------------- |
| `gemini-2.5-flash-lite` | Meal plans, workout plans, translation | $0.015/M tokens | $0.06/M tokens |

**Recommended top-up: $10-20/month** for 500 clients.
Actual expected cost: ~$3-5/month at 500 clients.

> Google AI Studio has a generous free tier. For production, the pay-as-you-go pricing kicks in after free quota is exceeded. Having billing enabled ensures no interruptions.

---

## Step 6: DeepSeek — Fallback AI Key

DeepSeek is the **fallback** model if Gemini fails.

1. Go to https://platform.deepseek.com/
2. Create account with coach's email
3. Go to **API Keys** → **Create new key**
4. Top up wallet: **$5-10** (this is only used when Gemini is down)
5. Set in Convex:

```bash
npx convex env set DEEPSEEK_API_KEY "sk-..."
```

### Cost:

| Model                | Input          | Output         |
| -------------------- | -------------- | -------------- |
| `deepseek-chat` (V3) | $0.27/M tokens | $1.10/M tokens |

**Recommended top-up: $5-10** (fallback only, rarely used).

---

## Step 7: OpenRouter — OCR & Embeddings

OpenRouter is used for payment screenshot OCR and knowledge base embeddings.

### 7a. Create Account & API Key

1. Go to https://openrouter.ai/ → sign up with coach's email
2. Go to **Keys** → **Create Key**
3. Copy the key

### 7b. Top Up Wallet

1. Go to **Credits** → **Add Credits**
2. **Recommended: $10-15**

### 7c. Set in Convex

```bash
npx convex env set OPENROUTER_API_KEY "sk-or-v1-..."
```

### Cost:

| Model                       | Use                       | Cost          |
| --------------------------- | ------------------------- | ------------- |
| `qwen/qwen3-vl-8b-instruct` | Payment screenshot OCR    | $0.06/M input |
| `qwen/qwen3-embedding-8b`   | Knowledge base embeddings | Minimal       |

**Recommended top-up: $10-15** — this covers months of OCR usage.

---

## Step 8: Sentry — Error Monitoring (Optional but Recommended)

### 8a. Create Account

1. Go to https://sentry.io → sign up with coach's email
2. Create organization (e.g., `coachname-fitness`)

### 8b. Create 3 Projects

1. **fitfast-client** (Platform: Next.js)
2. **fitfast-admin** (Platform: Next.js)
3. **fitfast-marketing** (Platform: Next.js)

### 8c. Get DSNs

- Each project → **Settings** → **Client Keys** → copy the DSN URL
- Set each in the matching Vercel project as `NEXT_PUBLIC_SENTRY_DSN`

### 8d. Get Auth Token

1. **Settings** → **Auth Tokens** → **Create New Token**
2. Scopes: `project:releases`, `org:read`
3. Set as `SENTRY_AUTH_TOKEN` in all 3 Vercel projects
4. Set `SENTRY_ORG` = organization slug
5. Set `SENTRY_PROJECT` = project slug (different per Vercel project)

### Cost: Free tier = 5,000 errors/month (plenty for a single coach).

---

## Step 9: Web Push — Generate VAPID Keys

No account needed. Run once:

```bash
npx web-push generate-vapid-keys
```

Copy both keys and set in Convex:

```bash
npx convex env set VAPID_PUBLIC_KEY "BPz..."
npx convex env set VAPID_PRIVATE_KEY "..."
```

Also set in the **client** Vercel project:

- `NEXT_PUBLIC_VAPID_PUBLIC_KEY` = same public key

**Cost: Free forever** — VAPID is a web standard, no service to pay for.

---

## Wallet Top-Up Summary

| Platform                     | What For                        | Recommended Top-Up | Expected Monthly Cost (500 clients) |
| ---------------------------- | ------------------------------- | ------------------ | ----------------------------------- |
| **Google Cloud** (AI Studio) | Primary AI — meal/workout plans | **$10-20**         | ~$3-5/month                         |
| **DeepSeek**                 | Fallback AI (if Gemini fails)   | **$5-10**          | ~$0-2/month (rarely used)           |
| **OpenRouter**               | OCR + embeddings                | **$10-15**         | ~$1-3/month                         |
| **Resend**                   | Transactional emails            | **Free**           | Free (3K emails/month)              |
| **Sentry**                   | Error monitoring                | **Free**           | Free (5K errors/month)              |
| **Vercel**                   | Hosting                         | **Free / $20**     | Free tier or Pro ($20/month)        |
| **Convex**                   | Database + backend              | **Free / $25**     | Free tier or Pro ($25/month)        |

### Total AI wallet to start: **$25-45 one-time top-up**

### Expected monthly AI cost: **~$5-10/month** for 500 clients

> The coach can monitor usage on each platform's dashboard and top up as needed. At 500 clients with biweekly check-ins, AI costs stay well under $10/month.

---

## Step 10: Final Verification Checklist

After all setup is done, walk through these together:

### Domains

- [ ] `coachname.com` loads the marketing/landing page
- [ ] `app.coachname.com` loads the client login
- [ ] `admin.coachname.com` loads the admin login
- [ ] All 3 show HTTPS (green lock)

### Auth

- [ ] Coach can log in to admin panel
- [ ] Create a test client signup from marketing site
- [ ] Approve signup → invitation email arrives
- [ ] Client clicks invite link → creates account successfully

### AI

- [ ] Client submits initial assessment → meal + workout plan generated
- [ ] Plans appear in client dashboard within ~2 minutes

### Email

- [ ] Invitation email arrives (not in spam)
- [ ] Email shows correct sender (`noreply@coachname.com`)

### Push Notifications

- [ ] Client app asks for notification permission
- [ ] After plan generation, push notification received

### Bilingual

- [ ] Switch to Arabic → UI flips RTL
- [ ] Plans generate in Arabic when language is set

---

## Quick Reference — All Environment Variables

### Convex Dashboard (convex.dev → project → Settings → Environment Variables)

| Variable                       | Value                             |
| ------------------------------ | --------------------------------- |
| `GOOGLE_GENERATIVE_AI_API_KEY` | From Google AI Studio             |
| `DEEPSEEK_API_KEY`             | From DeepSeek platform            |
| `OPENROUTER_API_KEY`           | From OpenRouter                   |
| `RESEND_API_KEY`               | From Resend                       |
| `RESEND_FROM_EMAIL`            | `FitFast <noreply@coachname.com>` |
| `VAPID_PUBLIC_KEY`             | Generated VAPID public key        |
| `VAPID_PRIVATE_KEY`            | Generated VAPID private key       |
| `VAPID_SUBJECT`                | `mailto:noreply@coachname.com`    |
| `CLIENT_APP_URL`               | `https://app.coachname.com`       |
| `MARKETING_SITE_URL`           | `https://coachname.com`           |

### Vercel — Client Project (`fitfast-client`)

| Variable                       | Value                        |
| ------------------------------ | ---------------------------- |
| `NEXT_PUBLIC_CONVEX_URL`       | From Convex dashboard        |
| `NEXT_PUBLIC_SENTRY_DSN`       | From Sentry (client project) |
| `NEXT_PUBLIC_APP_URL`          | `https://app.coachname.com`  |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | Same VAPID public key        |
| `SENTRY_AUTH_TOKEN`            | From Sentry                  |
| `SENTRY_ORG`                   | Sentry org slug              |
| `SENTRY_PROJECT`               | `fitfast-client`             |

### Vercel — Admin Project (`fitfast-admin`)

| Variable                 | Value                       |
| ------------------------ | --------------------------- |
| `NEXT_PUBLIC_CONVEX_URL` | Same Convex URL             |
| `NEXT_PUBLIC_SENTRY_DSN` | From Sentry (admin project) |
| `SENTRY_AUTH_TOKEN`      | Same Sentry token           |
| `SENTRY_ORG`             | Same org slug               |
| `SENTRY_PROJECT`         | `fitfast-admin`             |

### Vercel — Marketing Project (`fitfast-marketing`)

| Variable                      | Value                               |
| ----------------------------- | ----------------------------------- |
| `NEXT_PUBLIC_CONVEX_URL`      | Same Convex URL                     |
| `NEXT_PUBLIC_CONVEX_SITE_URL` | Convex HTTP URL (for checkout form) |
| `NEXT_PUBLIC_SENTRY_DSN`      | From Sentry (marketing project)     |
| `SENTRY_AUTH_TOKEN`           | Same Sentry token                   |
| `SENTRY_ORG`                  | Same org slug                       |
| `SENTRY_PROJECT`              | `fitfast-marketing`                 |
