import { test, expect } from "@playwright/test";

test.describe("Admin Clients", () => {
  test("clients page requires authentication", async ({ page }) => {
    await page.goto("/en/clients");
    // Unauthenticated users should be redirected to the login page
    await expect(page).toHaveURL(/\/en\/login/, { timeout: 10000 });
  });
});
