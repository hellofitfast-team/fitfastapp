import { test, expect } from "@playwright/test";
import { loginAsAdmin } from "../fixtures/auth";

/**
 * Admin/Coach user journey — validates the full flow works after schema changes.
 * Tests against Convex dev deployment with seeded test user.
 *
 * Credentials: testadmin@admin.com / test12345
 *
 * Note: Admin pages are under TanStack Router's _panel layout which has an auth
 * guard. After page.goto(), we need to wait for Convex WebSocket + auth check
 * before content renders (typically 3-5s).
 */

/** Navigate to an admin page after login, waiting for auth guard to resolve. */
async function gotoAdminPage(page: import("@playwright/test").Page, path: string) {
  await loginAsAdmin(page);
  await page.goto(path);
  // Wait for _panel layout auth guard + Convex data to resolve
  await page.waitForTimeout(5000);
}

test.describe("Admin Journey", () => {
  // ── Auth ───────────────────────────────────────────────────────────
  test("unauthenticated user is redirected to login", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/login/, { timeout: 15000 });
  });

  test("login page renders with coach branding", async ({ page }) => {
    await page.goto("/login");
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();
    await expect(page.getByRole("button", { name: /sign in/i }).first()).toBeVisible();
  });

  test("invalid credentials show error", async ({ page }) => {
    await page.goto("/login");
    await page.locator("#email").fill("wrong@example.com");
    await page.locator("#password").fill("wrongpassword123");
    await page
      .getByRole("button", { name: /sign in/i })
      .first()
      .click();

    await expect(
      page.locator("[class*='error'], [class*='red'], [role='alert']").first(),
    ).toBeVisible({ timeout: 10000 });
  });

  test("successful login navigates to admin dashboard", async ({ page }) => {
    await loginAsAdmin(page);
    await page.waitForTimeout(5000);

    await expect(page).not.toHaveURL(/\/login/);

    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    expect(body!.length).toBeGreaterThan(50);
  });

  // ── Dashboard ──────────────────────────────────────────────────────
  test("dashboard displays stat cards", async ({ page }) => {
    await loginAsAdmin(page);
    await page.waitForTimeout(5000);

    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    expect(body!.match(/client|signup|ticket|pending|active|total/i)).toBeTruthy();
  });

  // ── Navigation (all pages accessible) ──────────────────────────────
  test("signups page is accessible", async ({ page }) => {
    await gotoAdminPage(page, "/signups");
    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
    expect(body!.match(/signup|pending|registration/i)).toBeTruthy();
  });

  test("clients page is accessible", async ({ page }) => {
    await gotoAdminPage(page, "/clients");
    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("tickets page is accessible", async ({ page }) => {
    await gotoAdminPage(page, "/tickets");
    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("FAQs page is accessible", async ({ page }) => {
    await gotoAdminPage(page, "/faqs");
    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("knowledge base page is accessible", async ({ page }) => {
    await gotoAdminPage(page, "/knowledge");
    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("exercises page is accessible", async ({ page }) => {
    await gotoAdminPage(page, "/exercises");
    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("notifications page is accessible", async ({ page }) => {
    await gotoAdminPage(page, "/notifications");
    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  test("settings page is accessible", async ({ page }) => {
    await gotoAdminPage(page, "/settings");
    const body = await page.textContent("body");
    expect(body).not.toContain("Not Found");
  });

  // ── Detailed Page Content ──────────────────────────────────────────
  test("clients page shows client list or empty state", async ({ page }) => {
    await gotoAdminPage(page, "/clients");
    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    expect(body!.match(/client|name|email|status|no.*client|active|plan/i)).toBeTruthy();
  });

  test("signups page shows pending signups or empty state", async ({ page }) => {
    await gotoAdminPage(page, "/signups");
    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    expect(body!.match(/signup|pending|name|email|status|no.*signup|registration/i)).toBeTruthy();
  });

  test("settings page shows configuration options", async ({ page }) => {
    await gotoAdminPage(page, "/settings");
    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    expect(
      body!.match(/settings|check.?in|frequency|pricing|payment|social|notification/i),
    ).toBeTruthy();
  });

  test("notifications page shows send form or history", async ({ page }) => {
    await gotoAdminPage(page, "/notifications");
    const body = await page.textContent("body");
    expect(body).toBeTruthy();
    expect(body!.match(/notification|broadcast|send|title|body|history/i)).toBeTruthy();
  });
});
