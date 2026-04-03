# P3 Improvements — Production Readiness Audit (2026-04-02)

Low-priority improvements identified during the production-readiness audit. None block launch — address as time permits.

## 1. Pregnancy Safety Food List Needs Medical Review

- **File:** `convex/ai.ts:48-62`
- **Issue:** Static keyword list of 13 prohibited foods. Misses items like ceviche, pate, raw eggs, liver. False positives possible on compound terms ("sushi rice").
- **Action:** Have a medical advisor review and expand the list. Consider semantic matching long-term.

## 2. No CSP Headers on Vite Apps

- **Files:** `apps/client/index.html`, `apps/admin/index.html`
- **Issue:** Client and admin SPAs have no Content-Security-Policy headers. XSS protection relies solely on React's default escaping (which is strong but not defense-in-depth).
- **Action:** Add CSP via Vite plugin or Vercel headers config.

## 3. Self-Deletion Not Prevented in removeTeamMember

- **File:** `convex/profiles.ts:100-148`
- **Issue:** A non-owner coach could remove themselves from the team. Owner removal is blocked (line 120) but self-removal is not.
- **Action:** Add `if (target?._id === callerProfile._id) throw new Error("Cannot remove yourself");`

## 4. No Shared Component Library

- **Files:** `apps/client/src/components/`, `apps/admin/src/components/`
- **Issue:** Both apps implement similar UI patterns (buttons, forms, modals) independently. Tailwind config is shared but components are not.
- **Action:** Extract shared components into a `packages/ui` workspace package.

## 5. Legacy planTier Values in Schema

- **File:** `convex/schema.ts:12-14`
- **Issue:** Schema includes `"3_months"`, `"6_months"`, `"12_months"` for backward compatibility with existing data.
- **Action:** Write a data migration to update existing records, then remove legacy values.

## 6. Marketing App on Next.js vs Client/Admin on Vite

- **Files:** `apps/marketing/` (Next.js), `apps/client/` + `apps/admin/` (Vite + TanStack Router)
- **Issue:** Different build/deploy pipelines, middleware patterns, and SSR/CSR models across the monorepo.
- **Action:** No action needed — marketing benefits from SSR/SEO. Document the intentional architecture difference.

## 7. RAG Failure Silently Skipped

- **File:** `convex/ai.ts:176-178`
- **Issue:** If the coach knowledge base search fails (empty KB, RAG error), plan generation continues without coach guidelines. The coach may not know their training philosophy isn't being applied.
- **Action:** Log a warning to notificationLog table when RAG fails, so coach can see it in admin panel.

## 8. No Re-Embedding Migration Tool

- **File:** `convex/ragManager.ts:7-10`
- **Issue:** Comment warns that changing the embedding model is a breaking change requiring re-embedding all documents. No migration tool exists.
- **Action:** Create a one-time migration script that re-embeds all coachKnowledge entries.

## 9. Frontend Component Test Coverage Is Thin

- **Files:** `apps/*/src/**/__tests__/` (7 test files total)
- **Issue:** Unit tests cover translations, constants, types, and streaming parser. No component render tests with @testing-library/react.
- **Action:** Add render tests for critical components (check-in wizard, assessment form, dashboard cards).

## 10. E2E Tests May Use Placeholder Convex URL in CI

- **File:** `.github/workflows/ci.yml:119`
- **Issue:** E2E job uses `secrets.E2E_CONVEX_URL` but falls back to `https://placeholder.convex.cloud`. If the secret isn't set, E2E tests may not run against a real Convex deployment.
- **Action:** Ensure `E2E_CONVEX_URL` secret is configured in GitHub repository settings, or skip E2E job when the secret is missing.
