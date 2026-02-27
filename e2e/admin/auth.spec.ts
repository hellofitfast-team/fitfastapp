import { test, expect } from "@playwright/test";

test.describe("Admin Auth", () => {
  test("redirects unauthenticated users to login", async ({ page }) => {
    await page.goto("/en");
    // Admin middleware should redirect unauthenticated visitors to the login page
    await expect(page).toHaveURL(/\/en\/login/, { timeout: 10000 });
  });

  test("admin login page renders correctly", async ({ page }) => {
    await page.goto("/en/login");

    // The page should display the FitFast branding and login form
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();

    // Submit button should be present
    await expect(page.getByRole("button", { name: /sign in/i }).first()).toBeVisible();

    // The page should show the "Coach Panel" footer text
    await expect(page.getByText("Coach Panel").first()).toBeVisible();
  });

  test("shows error for invalid credentials", async ({ page }) => {
    await page.goto("/en/login");

    await page.locator("#email").fill("wrong@example.com");
    await page.locator("#password").fill("wrongpassword123");
    await page
      .getByRole("button", { name: /sign in/i })
      .first()
      .click();

    // The form should display an error message after the server round-trip
    await expect(page.locator("[class*='red']").first()).toBeVisible({
      timeout: 10000,
    });
  });
});
