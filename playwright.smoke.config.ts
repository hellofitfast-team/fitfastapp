import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/smoke",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : 2,
  timeout: 15000,
  reporter: process.env.CI
    ? [["github"], ["json", { outputFile: "e2e/reports/smoke-report.json" }]]
    : [["list"], ["json", { outputFile: "e2e/reports/smoke-report.json" }]],
  use: {
    ...devices["Desktop Chrome"],
    trace: "off",
    screenshot: "off",
  },
  webServer: [
    {
      command: "pnpm --filter @fitfast/client start -p 3000",
      url: "http://localhost:3000",
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
    },
    {
      command: "pnpm --filter @fitfast/admin start -p 3001",
      url: "http://localhost:3001",
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
    },
    {
      command: "pnpm --filter @fitfast/marketing start -p 3002",
      url: "http://localhost:3002",
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
    },
  ],
});
