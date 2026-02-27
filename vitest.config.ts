import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      "apps/client/vitest.config.ts",
      "apps/admin/vitest.config.ts",
      "convex/vitest.config.ts",
    ],
  },
});
