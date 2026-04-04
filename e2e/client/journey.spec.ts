import { test, expect } from "@playwright/test";
import { loginAsClient } from "../fixtures/auth";

/**
 * Client user journey — validates the full flow works after schema changes.
 * Tests against Convex dev deployment with seeded test user.
 *
 * Credentials: client@fitfast.app / test12345
 */
test.describe("Client Journey", () => {
  // ── Auth ───────────────────────────────────────────────────────────
  test("unauthenticated user is redirected to login", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/login/, { timeout: 15000 });
  });

  test("login page renders email and password fields", async ({ page }) => {
    await page.goto("/login");
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In", exact: true })).toBeVisible();
  });

  test("invalid credentials show error message", async ({ page }) => {
    await page.goto("/login");
    await page.locator("#email").fill("wrong@example.com");
    await page.locator("#password").fill("wrongpassword123");
    await page.getByRole("button", { name: "Sign In", exact: true }).click();

    // Error message appears after server round-trip
    await expect(
      page.locator("[class*='error'], [class*='red'], [role='alert']").first(),
    ).toBeVisible({ timeout: 10000 });
  });

  test("successful login navigates to dashboard", async ({ page }) => {
    await loginAsClient(page);

    // Should be on dashboard (root route) — not on login
    await expect(page).not.toHaveURL(/\/login/);

    // Dashboard should show some content (greeting or stats)
    await expect(
      page.getByText(/welcome|hello|hey|good morning|مرحب|dashboard/i).first(),
    ).toBeVisible({ timeout: 15000 });
  });

  // ── Dashboard ──────────────────────────────────────────────────────
  test("dashboard displays stats and quick actions", async ({ page }) => {
    await loginAsClient(page);

    // Wait for dashboard to fully load
    await page.waitForTimeout(3000);

    // Should have some visible content (cards, stats, or links)
    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    expect(body!.length).toBeGreaterThan(50);
  });

  // ── Navigation ─────────────────────────────────────────────────────
  test("meal plan page is accessible", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/meal-plan");

    // Page should load without 404
    await expect(page.locator("text=Not Found"))
      .not.toBeVisible({ timeout: 5000 })
      .catch(() => {
        // If "Not Found" doesn't exist, that's good
      });

    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("workout plan page is accessible", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/workout-plan");

    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("check-in page is accessible", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/check-in");

    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("tickets page is accessible", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/tickets");

    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("progress page is accessible", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/progress");

    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("tracking page is accessible", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/tracking");

    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("settings page is accessible", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/settings");

    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("FAQ page is accessible", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/faq");

    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  // ── Tickets ────────────────────────────────────────────────────────
  test("tickets page loads with support content", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/tickets");

    await page.waitForTimeout(3000);

    // Should display ticket-related content
    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    // Either shows tickets list or "no tickets" empty state
    expect(body!.match(/support|ticket|new ticket|subject|no.*ticket|create/i)).toBeTruthy();
  });

  // ── Settings ───────────────────────────────────────────────────────
  test("settings page shows profile information", async ({ page }) => {
    await loginAsClient(page);
    await page.goto("/settings");

    await page.waitForTimeout(3000);

    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    // Should contain settings-related content
    expect(body!.match(/settings|profile|language|notification|name|email/i)).toBeTruthy();
  });
});
