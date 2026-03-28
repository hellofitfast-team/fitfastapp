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

## Phase 2: Client Vite App Scaffold ✅

- [x] Scaffold apps/client-vite/ (package.json, vite.config.ts, index.html, main.tsx)
- [x] TanStack Router file-based routing with auth guards
- [x] react-i18next with existing translation files
- [x] BetterAuth client + ConvexBetterAuthProvider
- [x] All 18 route stubs matching Next.js structure
- [x] Dashboard layout with profile/assessment guards matching Next.js
- [x] Login page with BetterAuth signIn.email
- [x] Vite builds successfully
- [ ] Migrate remaining pages with full functionality (file-by-file)
- [ ] Add optimistic updates to all mutations
- [ ] Set up vite-plugin-pwa (manifest + custom SW copied)

## Phase 3: Admin Vite App Scaffold ✅

- [x] Scaffold apps/admin-vite/ with all route stubs
- [x] Coach auth guard in \_panel layout
- [x] Vite builds successfully
- [ ] Migrate remaining pages with full functionality
- [ ] Add TanStack Virtual to long lists
- [ ] Add optimistic updates

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
