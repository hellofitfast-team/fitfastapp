# Stack Migration: Next.js → Vite + React SPA

Plan: `.claude/plans/tender-growing-kite.md`

## Phase 0: Foundation — Shared Package Updates ✅

- [x] Add `packages/i18n/src/config.ts` with locale list + RTL map (no next-intl dep)
- [x] Update `packages/i18n/package.json` with new export
- [x] Audit `packages/ui/` for Next.js imports and remove them
- [x] Update `packages/ui/package.json` peer deps
- [x] Update `turbo.json` with Vite build outputs
- [x] Self-contained tsconfigs for UI + i18n packages (Vite compat)

## Phase 1: Auth Migration — BetterAuth ✅ (backend)

- [x] Install @convex-dev/better-auth + better-auth
- [x] Rewrite convex/auth.ts for BetterAuth (with getAuthUserId compat wrapper)
- [x] Update convex/schema.ts (remove authTables — BetterAuth component manages its own)
- [x] Update convex/http.ts (registerRoutes with cors)
- [x] Update convex/convex.config.ts (register betterAuth component)
- [x] Fix 3 files importing getAuthUserId from @convex-dev/auth/server
- [x] Stub seed/test files with @ts-nocheck (need full rewrite for BetterAuth)
- [ ] Rewrite seed functions for BetterAuth (use signUp API instead of direct DB inserts)
- [ ] Frontend auth migration (happens when pages are fully migrated to Vite)

## Phase 2: Client Vite App ✅

- [x] Scaffold apps/client-vite/ (package.json, vite.config.ts, index.html, main.tsx)
- [x] TanStack Router file-based routing with auth guards
- [x] react-i18next with existing translation files
- [x] BetterAuth client + ConvexBetterAuthProvider
- [x] ALL pages migrated with full functionality (18 routes, 50+ components)
- [x] Dashboard (home, meal-plan, workout-plan, tracking, progress, check-in, tickets, FAQ, settings)
- [x] Onboarding (initial-assessment 6-step wizard, pending, welcome)
- [x] Auth (login, accept-invite, set-password, magic-link, expired)
- [x] CodeRabbit review fixes applied (auth guards, startup validation)
- [x] Vite builds successfully
- [x] Dashboard shell components migrated (sidebar, bottom-nav, headers)
- [x] vite-plugin-pwa configured (injectManifest + ServiceWorkerRegistration)
- [x] Sentry ErrorBoundary wrapping app
- [x] CodeRabbit reviews passed (3 rounds of fixes)
- [x] Auth audit: signOut on null profile, SITE_URL validation, non-coach redirect
- [x] UI audit: missing useTranslation, type-safe params, vite/client types
- [x] Optimistic updates on key mutations (tracking, notifications, tickets, exercise logs)

## Phase 3: Admin Vite App ✅

- [x] Scaffold + ALL 13 routes migrated with full functionality
- [x] Coach auth guard in \_panel layout
- [x] 22 component files, 2 hooks (login, setup, dashboard, clients, signups, tickets, exercises, knowledge, FAQs, notifications, settings)
- [x] Vite builds successfully
- [x] Admin shell components migrated (sidebar, header)
- [x] Sentry ErrorBoundary wrapping app
- [x] TanStack Virtual on exercise table
- [x] Auth + UI audits passed
- [ ] Add optimistic updates to admin mutations

## Phase 4: AI SDK Swap — TanStack AI (DEFERRED)

- [ ] Replace Vercel AI SDK with TanStack AI in convex/ai.ts
- [ ] Update Langfuse integration
- NOTE: TanStack AI is v0.9.x pre-1.0. All AI calls are in Convex backend
  (no frontend impact). Deferring until TanStack AI stabilizes.
  Current Vercel AI SDK works fine in Convex actions.

## Phase 5: Trigger.dev (DEFERRED)

- [ ] Create packages/trigger/
- [ ] Move heavy tasks from ctx.scheduler
- NOTE: ctx.scheduler works for current scale. Trigger.dev adds value
  when AI generation needs better retry/observability.

## Phase 6: Cleanup + Deploy

- [ ] Migrate all page components with full functionality
- [ ] Swap apps (client-vite → client, admin-vite → admin)
- [ ] Sentry migration (@sentry/react)
- [ ] Vercel deploy config (SPA rewrites)
- [ ] Delete legacy apps

---

## Previous Tasks (from before migration)

### Workout Plan Decoupling (paused for migration)

- [ ] Fix meal plan generation bug
- [ ] Decouple workout plan from check-in (cron-based renewal)
- [ ] Enrich workout engine with performance data

### Completed

- [x] DB Audit & Cleanup
- [x] FAQ Auto-Translation
- [x] Prod deployment prep
- [ ] ⚠️ Auth secrets shared between dev/prod — Generate new ones before going live
