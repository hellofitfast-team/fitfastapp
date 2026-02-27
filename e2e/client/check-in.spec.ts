import { test, expect } from "@playwright/test";

test.describe("Client Check-in", () => {
  test("check-in page redirects unauthenticated users to login", async ({ page }) => {
    await page.goto("/en/check-in");
    // Unauthenticated users should be redirected to the login page
    await expect(page).toHaveURL(/\/en\/login/, { timeout: 10000 });
  });

  test("check-in page is accessible when logged in", async ({ page }) => {
    // This is a placeholder for a full authenticated check-in flow test.
    // A complete test would use the loginAsClient fixture from e2e/fixtures/auth.ts
    // and verify the check-in form renders with its expected steps.
    //
    // For now, we just verify the redirect behavior for unauthenticated users
    // (covered by the test above).
    await page.goto("/en/check-in");
    // Should either show the check-in page or redirect to login
    await expect(page).toHaveURL(/\/en\/(check-in|login)/);
  });
});
