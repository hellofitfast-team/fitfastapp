import { type Page } from "@playwright/test";

/**
 * Log in as the seed client user on the client app.
 *
 * Client and admin apps use Vite + TanStack Router (no locale prefix in URLs).
 * Language is set via localStorage i18nextLng, not URL path.
 */
export async function loginAsClient(page: Page) {
  await page.goto("/login", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);

  await page.locator("#email").fill("client@fitfast.app");
  await page.locator("#password").fill("test12345");

  await page.getByRole("button", { name: "Sign In", exact: true }).click();

  // Wait for navigation away from login — Convex WebSocket can be slow
  await page.waitForURL(/^(?!.*\/login)/, { timeout: 45000, waitUntil: "domcontentloaded" });
}

/**
 * Log in as the seed admin/coach user on the admin app.
 */
export async function loginAsAdmin(page: Page) {
  await page.goto("/login");

  await page.locator("#email").fill("testadmin@admin.com");
  await page.locator("#password").fill("test12345");

  await page
    .getByRole("button", { name: /sign in/i })
    .first()
    .click();

  // Wait for navigation away from the login page — admin _panel guard
  // checks auth + profile.isCoach which takes a few seconds via Convex.
  await page.waitForURL(/^(?!.*\/login)/, { timeout: 30000, waitUntil: "domcontentloaded" });
  // Extra wait for Convex WebSocket connection + auth guard to resolve
  await page.waitForTimeout(3000);
}

/**
 * Set the UI language via localStorage and reload.
 * Works for both client and admin apps (i18next-based).
 */
export async function setLanguage(page: Page, lang: "en" | "ar") {
  await page.evaluate((l) => {
    localStorage.setItem("i18nextLng", l);
  }, lang);
  await page.reload({ waitUntil: "domcontentloaded" });
}

/**
 * Log in as the seed client user with Arabic locale.
 */
export async function loginAsClientArabic(page: Page) {
  // Set language before navigating
  await page.goto("/login");
  await page.evaluate(() => {
    localStorage.setItem("i18nextLng", "ar");
  });
  await page.reload({ waitUntil: "domcontentloaded" });

  await page.locator("#email").fill("client@fitfast.app");
  await page.locator("#password").fill("test12345");

  await page
    .getByRole("button", { name: /تسجيل|دخول|sign/i })
    .first()
    .click();

  await page.waitForURL(/^(?!.*\/login)/, { timeout: 30000, waitUntil: "domcontentloaded" });
}

/**
 * Log in as the seed admin/coach user with Arabic locale.
 */
export async function loginAsAdminArabic(page: Page) {
  await page.goto("/login");
  await page.evaluate(() => {
    localStorage.setItem("i18nextLng", "ar");
  });
  await page.reload({ waitUntil: "domcontentloaded" });

  await page.locator("#email").fill("testadmin@admin.com");
  await page.locator("#password").fill("test12345");

  await page
    .getByRole("button", { name: /تسجيل|دخول|sign/i })
    .first()
    .click();

  await page.waitForURL(/^(?!.*\/login)/, { timeout: 30000, waitUntil: "domcontentloaded" });
}
