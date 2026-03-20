import { test, expect, type Page } from "@playwright/test";

/**
 * Cross-app E2E: Admin creates a test user via the dialog,
 * then logs in as that user on the client app to test the
 * check-in wizard — happy path, validation errors, and lock state.
 *
 * All tests share the same test user (created once in the first test).
 * Tests 2-5 skip automatically if test 1 fails (no credentials).
 */

let testEmail: string;
let testPassword: string;

/** Helper: log in as admin coach */
async function loginAsAdmin(page: Page) {
  await page.goto("http://localhost:3001/en/login");
  await page.locator("#email").fill("testadmin@admin.com");
  await page.locator("#password").fill("test12345");
  await page
    .getByRole("button", { name: /sign in/i })
    .first()
    .click();
  await page.waitForURL(/\/en(?!\/login)/, {
    timeout: 30000,
    waitUntil: "domcontentloaded",
  });
}

/** Helper: log in to client app with test user credentials */
async function loginAsTestUser(page: Page) {
  await page.goto("http://localhost:3000/en/login");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(2000);

  const emailInput = page.locator("#email");
  await expect(emailInput).toBeVisible({ timeout: 10000 });
  await emailInput.fill(testEmail);
  await page.locator("#password").fill(testPassword);
  await page.getByRole("button", { name: "Sign In", exact: true }).click();
  await page.waitForURL(/\/en(?!\/login)/, {
    timeout: 30000,
    waitUntil: "domcontentloaded",
  });
}

/** Helper: navigate to check-in page and wait for it to load */
async function goToCheckIn(page: Page) {
  await page.goto("http://localhost:3000/en/check-in");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(3000);
}

test.describe.serial("Cross-App: Create Test User → Check-In", () => {
  test.setTimeout(120_000);

  // ═══════════════════════════════════════════════════════
  // TEST 1: Admin creates test user and extracts credentials
  // ═══════════════════════════════════════════════════════
  test("admin creates test user via dialog", async ({ browser }) => {
    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();

    await loginAsAdmin(adminPage);

    // Navigate to clients page
    await adminPage.goto("http://localhost:3001/en/clients");
    await adminPage.waitForLoadState("domcontentloaded");
    await adminPage.waitForTimeout(3000);

    // Open "Create Test User" dialog
    await adminPage.getByRole("button", { name: /create test user/i }).click();
    await adminPage.waitForTimeout(500);

    // Select "Monthly" tier
    await adminPage.getByRole("radio", { name: /monthly/i }).click();

    // Select "Active + Plans Ready" scenario
    await adminPage.getByRole("radio", { name: /active \+ plans ready/i }).click();

    // Click "Create" and wait for credentials panel
    await adminPage.getByRole("button", { name: /^create$/i }).click();

    // The Convex action seeds assessment + plans — can take 10-20s
    const emailCode = adminPage.locator("code").first();
    await expect(emailCode).toBeVisible({ timeout: 45000 });

    // Extract credentials
    const codeElements = adminPage.locator("code");
    testEmail = (await codeElements.nth(0).textContent()) ?? "";
    testPassword = (await codeElements.nth(1).textContent()) ?? "";

    expect(testEmail).toBeTruthy();
    expect(testPassword).toBeTruthy();
    expect(testEmail).toContain("@fitfast.test");

    // Close dialog
    await adminPage.getByRole("button", { name: /done/i }).click();
    await adminPage.waitForTimeout(500);
    await adminContext.close();
  });

  // ═══════════════════════════════════════════════════════
  // TEST 2: Validation errors prevent advancing wizard steps
  // ═══════════════════════════════════════════════════════
  test("check-in wizard shows validation errors for missing fields", async ({ browser }) => {
    test.skip(!testEmail, "test user not created — test 1 must pass first");
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await loginAsTestUser(page);
    await goToCheckIn(page);

    // Verify form is visible (not locked)
    const weightInput = page.locator('input[type="number"]').first();
    await expect(weightInput).toBeVisible({ timeout: 15000 });

    // ── Try to advance Step 1 without filling weight ──
    // Clear any pre-filled weight value
    await weightInput.clear();
    await page.getByRole("button", { name: /next/i }).first().click();
    await page.waitForTimeout(500);

    // Should still be on Step 1 (validation failed)
    // The weight input should still be visible
    await expect(weightInput).toBeVisible();

    // ── Fill weight but skip body measurements ──
    await weightInput.fill("78.5");
    await page.getByRole("button", { name: /next/i }).first().click();
    await page.waitForTimeout(500);

    // Should still be on Step 1 — toast error about measurements required
    // The weight input should still be visible (no measurements filled)
    await expect(weightInput).toBeVisible();

    // ── Fill weight + measurement, advance to Step 2 ──
    await page.locator('input[name="waist"]').fill("85");
    await page.getByRole("button", { name: /next/i }).first().click();
    await page.waitForTimeout(500);

    // Now on Step 2 — try to advance without workout performance
    const perfTextarea = page.locator("textarea").first();
    await expect(perfTextarea).toBeVisible({ timeout: 5000 });

    // Try advancing with empty performance (requires min 10 chars)
    await page.getByRole("button", { name: /next/i }).first().click();
    await page.waitForTimeout(500);

    // Should still be on Step 2 — textarea still visible
    await expect(perfTextarea).toBeVisible();

    // Fill performance with too-short text (< 10 chars)
    await perfTextarea.fill("Good");
    await page.getByRole("button", { name: /next/i }).first().click();
    await page.waitForTimeout(500);

    // Should still be on Step 2
    await expect(perfTextarea).toBeVisible();

    await ctx.close();
  });

  // ═══════════════════════════════════════════════════════
  // TEST 3: Happy path — complete check-in and verify success
  // ═══════════════════════════════════════════════════════
  test("client completes full check-in wizard", async ({ browser }) => {
    test.skip(!testEmail, "test user not created — test 1 must pass first");
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await loginAsTestUser(page);
    await goToCheckIn(page);

    // Verify form is visible (not locked)
    const weightInput = page.locator('input[type="number"]').first();
    await expect(weightInput).toBeVisible({ timeout: 15000 });

    // ── Step 1: Weight & Measurements ──
    await weightInput.fill("78.5");
    await page.locator('input[name="waist"]').fill("85");
    await page.getByRole("button", { name: /next/i }).first().click();
    await page.waitForTimeout(500);

    // ── Step 2: Fitness ──
    const perfTextarea = page.locator("textarea").first();
    await perfTextarea.fill("Good progress on all exercises. Increased bench press by 2.5kg.");

    // RatingSelectors: scope to containers with numbered buttons 1-10
    const ratingSelectors = page.locator(
      'div:has(> div > button:text-is("1")):has(> div > button:text-is("10"))',
    );
    await ratingSelectors.nth(0).locator('button:text-is("7")').click(); // energy
    await ratingSelectors.nth(1).locator('button:text-is("8")').click(); // sleep

    await page.getByRole("button", { name: /next/i }).first().click();
    await page.waitForTimeout(500);

    // ── Step 3: Dietary ──
    const dietRating = page.locator(
      'div:has(> div > button:text-is("1")):has(> div > button:text-is("10"))',
    );
    await dietRating.first().locator('button:text-is("7")').click();

    const dietTextarea = page.locator("textarea").first();
    if (await dietTextarea.isVisible().catch(() => false)) {
      await dietTextarea.fill("Followed the plan closely, enjoyed the recipes.");
    }

    await page.getByRole("button", { name: /next/i }).first().click();
    await page.waitForTimeout(500);

    // ── Step 4: Photos — skip ──
    await page
      .getByRole("button", { name: /next|skip/i })
      .first()
      .click();
    await page.waitForTimeout(500);

    // ── Step 5: Review & Submit ──
    const submitBtn = page.getByRole("button", { name: /submit check-in/i });
    await expect(submitBtn).toBeVisible({ timeout: 5000 });
    await submitBtn.click();

    // Wait for success redirect to home
    await page.waitForURL(/\/en$/, {
      timeout: 30000,
      waitUntil: "domcontentloaded",
    });
    await expect(page).toHaveURL(/\/en$/);

    await ctx.close();
  });

  // ═══════════════════════════════════════════════════════
  // TEST 4: Check-in is locked after submission
  // ═══════════════════════════════════════════════════════
  test("check-in page shows locked state after submission", async ({ browser }) => {
    test.skip(!testEmail, "test user not created — test 1 must pass first");
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await loginAsTestUser(page);

    // Wait for Convex to fully process the check-in
    await page.waitForTimeout(3000);
    await goToCheckIn(page);

    // The locked component shows "Check-In Locked" header
    await expect(page.getByText("Check-In Locked")).toBeVisible({
      timeout: 15000,
    });

    // Verify the day count indicator (e.g., "10 Days")
    await expect(page.locator("p.text-4xl").getByText(/\d+\s*days/i)).toBeVisible({
      timeout: 5000,
    });

    // Verify the check-in form is NOT visible (wizard hidden when locked)
    await expect(page.locator('input[type="number"]').first()).not.toBeVisible({ timeout: 3000 });

    await ctx.close();
  });

  // ═══════════════════════════════════════════════════════
  // TEST 5: Admin can see the check-in in client detail page
  // ═══════════════════════════════════════════════════════
  test("admin sees submitted check-in on client detail page", async ({ browser }) => {
    test.skip(!testEmail, "test user not created — test 1 must pass first");
    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();

    await loginAsAdmin(adminPage);

    // Navigate to clients page and search for the test user by name
    await adminPage.goto("http://localhost:3001/en/clients");
    await adminPage.waitForLoadState("domcontentloaded");
    await adminPage.waitForTimeout(3000);

    // Search filters by name — our test user is "Test User (Active + Plans)"
    const searchInput = adminPage.locator("input[type='text']").first();
    await expect(searchInput).toBeVisible({ timeout: 5000 });
    await searchInput.fill("Test User (Active + Plans)");
    await adminPage.waitForTimeout(2000);

    // Click the arrow link (→) on the first matching row to open detail page
    const viewClientLink = adminPage.locator('a[href*="/clients/"]').first();
    await expect(viewClientLink).toBeVisible({ timeout: 5000 });
    await viewClientLink.click();

    await adminPage.waitForLoadState("domcontentloaded");
    await adminPage.waitForTimeout(3000);

    // Verify we're on the client detail page — check-in data should show weight 78.5 kg
    await expect(adminPage.getByText("78.5 kg").first()).toBeVisible({
      timeout: 15000,
    });

    await adminContext.close();
  });
});
