import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test.describe("API Health Checks", () => {
    test("client API returns version", async ({ request }) => {
      const response = await request.get("http://localhost:3000/api/version");
      expect(response.status()).toBe(200);
      const body = await response.json();
      expect(body).toHaveProperty("buildId");
    });

    test("admin API returns healthy", async ({ request }) => {
      const response = await request.get("http://localhost:3001/api/health");
      expect(response.status()).toBe(200);
      const body = await response.json();
      expect(body.status).toBe("ok");
    });

    test("marketing API returns healthy", async ({ request }) => {
      const response = await request.get("http://localhost:3002/api/health");
      expect(response.status()).toBe(200);
      const body = await response.json();
      expect(body.status).toBe("ok");
    });
  });

  test.describe("Page Render Checks", () => {
    test("client renders", async ({ page }) => {
      await page.goto("http://localhost:3000/en", {
        waitUntil: "domcontentloaded",
      });
      await expect(page.locator("body")).not.toBeEmpty();
    });

    test("admin renders", async ({ page }) => {
      await page.goto("http://localhost:3001/en", {
        waitUntil: "domcontentloaded",
      });
      await expect(page.locator("body")).not.toBeEmpty();
    });

    test("marketing renders", async ({ page }) => {
      await page.goto("http://localhost:3002/en", {
        waitUntil: "domcontentloaded",
      });
      await expect(page.locator("body")).not.toBeEmpty();
    });
  });
});
