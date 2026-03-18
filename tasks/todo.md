# DB Audit & Cleanup Plan

## Phase 1: Critical Fixes ✅

- [x] **Clean up auth token bloat** — Purged 1,918 orphaned sessions + 5,458 orphaned refresh tokens. Remaining 468 sessions belong to active admin user. Added `authCleanup.ts` with daily cron at 2 AM UTC to auto-purge expired sessions going forward.
- [x] **Remove orphaned exercise log** — Deleted 1 orphaned exercise log referencing non-existent user.
- [x] **Clean E2E test debris** — Removed 6 test `pendingSignups` entries + 3 stale rate limits. Only real signup (ziad.adel@scaleflow.digital) remains.

## Phase 2: FAQ Auto-Translation (Bilingual Single Doc) ✅

- [x] **Migrate FAQ schema** — Changed to bilingual: `questionEn`/`questionAr`, `answerEn`/`answerAr`. New `by_displayOrder` index. Legacy `language`/`question`/`answer` fields removed.
- [x] **Migrate existing FAQ data** — 7 EN FAQs migrated via Convex migrations framework.
- [x] **Add AI translation action** — `translateFAQ` in `convex/faqs.ts` uses `gemini-2.0-flash-001` via OpenRouter. Includes `patchTranslation` and `markTranslationFailed` mutations.
- [x] **Wire translation into create/update** — `createFAQ` and `updateFAQ` auto-trigger translation via `ctx.scheduler.runAfter(0, ...)` when Arabic not provided or English changes.
- [x] **Update admin FAQ UI** — Removed language toggle, added bilingual form with EN primary + AR auto-fill. Shows translation status (pending/completed/failed). Manual AR override supported.
- [x] **Update client FAQ display** — No changes needed — backend `getFAQs` returns localized `question`/`answer` fields based on language param.

## Phase 3: Prod Deployment Prep ✅

- [x] **Prod deployment already existed** — `blessed-clam-706` (US Virginia). No need to create new one.
- [x] **Updated prod URLs** — `CLIENT_APP_URL` → `https://client.fitfast.app`, `SITE_URL` → `https://admin.fitfast.app`, `MARKETING_SITE_URL` → `https://fitfast.app`
- [x] **Removed `SEED_USER_PASSWORD`** from prod.
- [x] **Deployed all code to prod** — Auth cleanup cron + bilingual FAQs live on prod.
- [x] **Migrated + merged prod FAQs** — 14 docs (7 EN + 7 AR) merged into 7 bilingual docs.
- [x] **Populate Arabic FAQs** — All 7 FAQs bilingual on both dev and prod.
- [ ] **Populate `social_links`** in system config. Skipped for now.
- [ ] ⚠️ **Auth secrets shared between dev/prod** — `AUTH_SECRET`, `JWT_PRIVATE_KEY`, `JWKS`, `VAPID_*` are identical. Generate new ones for prod before going live with real users.

## Phase 4: Content Gaps (Low Priority)

- [ ] **Add cardio exercises** — Currently 0 in the exercise database. ⚠️ Requires coach input on which exercises to add.
- [ ] **Add more advanced exercises** — Only 5 advanced vs 100 beginner. ⚠️ Requires coach input.
- [x] **Verify meal vs workout plan duration** — ✅ Intentional. Meal plans = check-in frequency (10 days, regenerate each cycle). Workout plans = 30 days (change less often). Documented in `helpers.ts:68-72`.
