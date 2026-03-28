# Stack Migration: Next.js → Vite + React SPA

Plan: `.claude/plans/tender-growing-kite.md`

## Phase 0: Foundation — Shared Package Updates

- [ ] Add `packages/i18n/src/config.ts` with locale list + RTL map (no next-intl dep)
- [ ] Update `packages/i18n/package.json` with new export
- [ ] Audit `packages/ui/` for Next.js imports and remove them
- [ ] Update `packages/ui/package.json` peer deps
- [ ] Update `turbo.json` with Vite build outputs
- [ ] Verify: `pnpm build` succeeds for all apps + marketing still works

## Phase 1: Auth Migration — BetterAuth

- [ ] Install @convex-dev/better-auth
- [ ] Rewrite convex/auth.ts for BetterAuth
- [ ] Update convex/schema.ts (replace authTables)
- [ ] Update convex/http.ts (mount BetterAuth routes)
- [ ] Update ~25 Convex files using getAuthUserId
- [ ] Write data migration script
- [ ] Update both apps' convex-provider, middleware, use-auth
- [ ] Update auth pages (login, set-password, accept-invite, setup)
- [ ] Verify: full signup → approval → login flow

## Phase 2: Client Vite App (parallel at :3010)

- [ ] Scaffold apps/client-vite/ (package.json, vite.config.ts, index.html, main.tsx)
- [ ] Set up TanStack Router with file-based routing
- [ ] Set up react-i18next with existing translation files
- [ ] Migrate auth pages
- [ ] Migrate onboarding pages
- [ ] Migrate dashboard pages
- [ ] Migrate all components (swap Next.js imports)
- [ ] Migrate all hooks
- [ ] Add optimistic updates to all mutations
- [ ] Set up vite-plugin-pwa
- [ ] Side-by-side verification on all pages

## Phase 3: Admin Vite App (parallel at :3011)

- [ ] Scaffold apps/admin-vite/
- [ ] Migrate all routes
- [ ] Add TanStack Virtual to long lists
- [ ] Add optimistic updates
- [ ] Side-by-side verification

## Phase 4: AI SDK Swap — TanStack AI

- [ ] Replace Vercel AI SDK with TanStack AI in convex/ai.ts
- [ ] Update Langfuse integration
- [ ] Verify plan generation + streaming

## Phase 5: Trigger.dev

- [ ] Create packages/trigger/
- [ ] Move heavy tasks from ctx.scheduler
- [ ] Verify task execution

## Phase 6: Cleanup + Deploy

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
