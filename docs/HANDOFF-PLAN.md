# FitFast — Client Handoff Plan

How to hand off the FitFast platform to a non-technical fitness coach. This is YOUR checklist as the developer — not a document to give the coach directly.

---

## Overview

The coach receives a fully working AI fitness coaching platform. They need to:

1. Use the admin panel daily (approve signups, reply to tickets, review AI plans)
2. Pay monthly service bills (~$25-50/month at 500 clients)
3. Know who to call when something breaks

They do NOT need to: touch code, use a terminal, understand Git, or manage servers.

---

## Phase 1: Account Ownership Transfer (Do First)

Transfer ownership of every paid service account to the coach's email. Do this BEFORE the handoff meeting — they should own everything from day one.

### Accounts to Transfer

| Service              | Purpose                       | Monthly Cost                           | Transfer Method                                     |
| -------------------- | ----------------------------- | -------------------------------------- | --------------------------------------------------- |
| **Vercel**           | Hosts all 3 apps              | Free (Hobby) or $20 (Pro)              | Transfer team ownership or create under their email |
| **Convex**           | Database + backend            | Free (up to 1M function calls)         | Transfer project ownership in dashboard             |
| **OpenRouter**       | AI models (plans, OCR)        | ~$5-15 (usage-based, ~$0.05/client/mo) | Create account under their email, add credits       |
| **Resend**           | Emails                        | Free (3000/day) or $20/mo              | Create under their email, verify their domain       |
| **Sentry**           | Error alerts                  | Free (5K errors/mo)                    | Transfer org ownership                              |
| **Domain registrar** | fitfast.app (or their domain) | ~$12/year                              | Transfer domain to their registrar account          |
| **GitHub**           | Code repository               | Free (private repo)                    | Transfer repo or add as owner                       |

### Step-by-Step

1. **Create a shared document** (Google Doc or Notion) titled "FitFast — Account Credentials"
2. For each service above:
   - Create account using the **coach's email** (not yours)
   - Set a strong password and share it via the doc
   - Enable 2FA and give them the recovery codes
   - If the account already exists under your email: transfer ownership, then remove yourself
3. **DNS**: If using their own domain, transfer nameservers to their registrar. Point:
   - `app.theirdomain.com` → Vercel (client app)
   - `admin.theirdomain.com` → Vercel (admin panel)
   - Root domain → Vercel (marketing site)
4. **OpenRouter**: Pre-load $20-50 in credits so they don't hit a $0 balance on day one

### What to Update After Domain Change

If the coach uses a different domain than your dev domain:

- Convex env: `CLIENT_APP_URL`, `MARKETING_SITE_URL`
- Vercel: Custom domains per project
- Resend: Domain verification (SPF/DKIM/DMARC DNS records)
- Update email templates if any hardcoded URLs exist

---

## Phase 2: Prepare the "Coach Binder"

Create a simple PDF or printed document the coach keeps. Non-technical language only. No code, no terminal commands.

### What Goes in the Binder

**Page 1 — Your Logins**

| What             | URL                   | Email     | Password |
| ---------------- | --------------------- | --------- | -------- |
| Admin Panel      | admin.theirdomain.com | coach@... | •••••    |
| Vercel Dashboard | vercel.com            | coach@... | •••••    |
| Convex Dashboard | dashboard.convex.dev  | coach@... | •••••    |
| OpenRouter       | openrouter.ai         | coach@... | •••••    |
| Resend           | resend.com            | coach@... | •••••    |
| Sentry           | sentry.io             | coach@... | •••••    |
| GitHub           | github.com            | coach@... | •••••    |

**Page 2 — Daily Operations**

- Open the admin panel → Dashboard shows today's stats
- Check "Signups" for new pending clients → Review payment screenshot → Approve or Reject
- Check "Tickets" for client questions → Reply in the thread
- That's it. AI generates meal/workout plans automatically after each client check-in.

**Page 3 — Weekly Check**

- Open Sentry → Look for red "unresolved issues" count → If > 10 new issues, contact developer
- Open OpenRouter → Check credit balance → Add credits if below $5
- Open Vercel → Verify all 3 apps show "Ready" status (green)

**Page 4 — Monthly Bills**

| Service    | Expected Cost           | How to Pay          |
| ---------- | ----------------------- | ------------------- |
| Vercel     | $0-20                   | Credit card on file |
| OpenRouter | $5-15                   | Pre-paid credits    |
| Resend     | $0-20                   | Credit card on file |
| Domain     | ~$1/mo (annual billing) | Credit card on file |
| **Total**  | **~$25-50/mo**          |                     |

**Page 5 — When Things Go Wrong**

| Symptom                                | What Happened                          | What to Do                                                                                                            |
| -------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Clients can't log in                   | Auth service issue                     | Check Convex dashboard → Status page. If red, wait 30 min. If still down, contact developer.                          |
| No AI plans generating                 | OpenRouter credits empty OR API outage | Check OpenRouter balance. Add credits if $0. If credits exist, contact developer.                                     |
| Emails not sending                     | Resend issue                           | Check Resend dashboard for bounces/failures. If domain shows "unverified", contact developer.                         |
| "502" or blank page                    | Vercel deployment failed               | Check Vercel dashboard → Deployments tab. Last one should be green. If red, contact developer.                        |
| You get a "downtime" email from GitHub | Uptime monitor detected an outage      | Check if the app loads in your browser. If it does, it was a brief glitch (ignore). If it doesn't, contact developer. |

**Page 6 — Emergency Contact**

- Developer name: [Your name]
- Developer email: [Your email]
- Developer phone/WhatsApp: [Your number]
- Response time: [Your SLA, e.g., "within 24 hours on weekdays"]
- Support period: [e.g., "3 months free support included, then $X/hour"]

---

## Phase 3: Handoff Meeting (90 Minutes)

Do this in person or over a screen-share call. Record the session so they can rewatch.

### Agenda

**Part 1 — The Product (30 min)**

Walk them through the full client journey:

1. Open marketing site → Show the landing page they'll share with clients
2. Fill out the signup form as a fake client → Show payment screenshot upload
3. Switch to admin panel → Show the pending signup appearing in real-time
4. Approve the signup → Show the invitation email arriving
5. Accept the invite as the fake client → Complete the initial assessment
6. Show AI generating the first meal + workout plan
7. Show the client dashboard with the generated plans
8. Show the check-in flow (client submits progress → new plans generated)
9. Show a support ticket round-trip (client creates → coach replies → client sees)

**Part 2 — Daily Operations (20 min)**

Live walkthrough of the admin panel:

1. Dashboard — what each stat card means
2. Signups — how to approve/reject with OCR-extracted payment data
3. Clients — how to view client details, progress, assessment history
4. Tickets — how to reply, close tickets
5. FAQs — how to add/edit/reorder FAQ entries
6. Knowledge Base — how adding knowledge improves AI plan quality
7. Settings — check-in frequency, subscription plans, payment methods, social links
8. Notifications — how to send push notifications (individual vs broadcast)

**Part 3 — Bills & Monitoring (15 min)**

Walk through each service dashboard:

1. Vercel — where to see deployment status
2. Convex — where to see usage stats
3. OpenRouter — where to see credit balance and top up
4. Resend — where to see email delivery stats
5. Sentry — where to see error counts (show them what "normal" looks like)

**Part 4 — Emergency Scenarios (15 min)**

Practice the "When Things Go Wrong" page from the binder:

1. Simulate "OpenRouter credits ran out" → Show them how to add credits
2. Show them how to check if Vercel apps are healthy
3. Show them the GitHub uptime alerts (email notifications)
4. Confirm they have your emergency contact saved

**Part 5 — Q&A (10 min)**

---

## Phase 4: Post-Handoff Support Window

### Week 1 (High-Touch)

- Check in daily via WhatsApp/call: "Any questions? Everything working?"
- Monitor Sentry yourself for the first week
- Watch OpenRouter credit burn rate to validate cost projections

### Weeks 2-4 (Medium-Touch)

- Check in every 2-3 days
- Let them handle routine operations independently
- Be available for quick questions

### Month 2-3 (Low-Touch)

- Weekly check-in
- Only intervene for actual technical issues
- Start referring them to the Coach Guide doc for routine questions

### After Support Window

- Define ongoing support terms (hourly rate, retainer, etc.)
- Ensure they have a backup developer contact (not just you)
- Consider: Do they need a maintenance contract? (recommended for non-technical clients)

---

## Phase 5: Technical Handoff (For Future Developers)

If the coach hires a different developer later, they need:

1. **GitHub repo access** — Full codebase with all history
2. **CLAUDE.md** — Complete project overview, architecture, patterns
3. **DATABASE.md** — Schema reference with all indexes and validators
4. **docs/DEPLOYMENT.md** — How to deploy from scratch
5. **docs/OPERATIONS.md** — Day-to-day maintenance and troubleshooting
6. **This file** — Context on the handoff process

### Key Technical Notes for Future Devs

- Monorepo: pnpm workspaces + Turborepo
- All 3 apps share one Convex backend (root `convex/` directory)
- Internal packages (`@fitfast/ui`, `@fitfast/i18n`, `@fitfast/config`) are source-level — no build step
- Convex components are registered in `convex/convex.config.ts` (10 components)
- AI pipeline: `convex/ai.ts` → `convex/checkInWorkflow.ts` (durable workflow with parallel generation)
- Auth: Convex Auth with Password provider only — no OAuth
- Middleware: next-intl + Convex Auth combined (`/api` routes excluded from i18n)
- PWA: Service worker at `apps/client/public/sw.js`, Web Push via VAPID
- CI: `quality → build → smoke → e2e → quality-gate → handoff-report`
- Uptime: `.github/workflows/uptime.yml` (5-min cron, GitHub Issues on failure)

---

## Checklist

### Before the Meeting

- [ ] All service accounts created under coach's email
- [ ] 2FA enabled on all accounts
- [ ] DNS pointing to Vercel with correct subdomains
- [ ] Coach's actual email set as admin/coach login in the app
- [ ] Test the full flow end-to-end with the coach's real domain
- [ ] Coach Binder PDF printed or shared
- [ ] OpenRouter pre-loaded with $20+ credits
- [ ] Resend domain verified with SPF/DKIM/DMARC
- [ ] Uptime monitoring configured with production URLs
- [ ] Sentry alert rules set (email the coach on critical errors)

### During the Meeting

- [ ] Recorded the screen-share session
- [ ] Walked through complete client journey
- [ ] Walked through all admin panel sections
- [ ] Showed each service dashboard
- [ ] Practiced emergency scenarios
- [ ] Coach confirmed they can log into all accounts
- [ ] Coach confirmed they received the Binder

### After the Meeting

- [ ] Sent recording to coach
- [ ] Removed your personal access from all accounts (keep only coach as owner)
- [ ] Set up calendar reminders for your check-in schedule
- [ ] Confirmed uptime alerts are going to coach's email
- [ ] First real client signup processed successfully by coach (solo)
