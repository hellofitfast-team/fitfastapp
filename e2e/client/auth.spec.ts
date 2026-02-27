import { test, expect } from "@playwright/test";

test.describe("Client Auth", () => {
  test("redirects unauthenticated users to login", async ({ page }) => {
    await page.goto("/en");
    // Middleware should redirect unauthenticated visitors to the login page
    await expect(page).toHaveURL(/\/en\/login/, { timeout: 10000 });
  });

  test("login page renders correctly", async ({ page }) => {
    await page.goto("/en/login");

    // The page should have a heading with "Sign In"
    await expect(page.getByRole("heading", { name: /sign in/i })).toBeVisible();

    // Email and password fields should be present
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();

    // Submit button should be present (exact match to avoid "Sign in with magic link")
    await expect(page.getByRole("button", { name: "Sign In", exact: true })).toBeVisible();
  });

  test("shows validation error for invalid email", async ({ page }) => {
    await page.goto("/en/login");

    // Type an invalid email (missing '@' triggers native HTML5 validation)
    await page.locator("#email").fill("not-an-email");
    await page.locator("#password").fill("test12345");
    await page.getByRole("button", { name: "Sign In", exact: true }).click({ force: true });

    // The browser's native validation prevents submission — verify the email input is invalid
    const isInvalid = await page
      .locator("#email")
      .evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });

  test("shows error for invalid credentials", async ({ page }) => {
    await page.goto("/en/login");

    await page.locator("#email").fill("wrong@example.com");
    await page.locator("#password").fill("wrongpassword123");
    await page.getByRole("button", { name: "Sign In", exact: true }).click({ force: true });

    // The form should display an error message (invalidCredentials translation)
    // Wait for the error to appear after the server round-trip
    await expect(page.locator("[class*='error']").first()).toBeVisible({
      timeout: 10000,
    });
  });
});
