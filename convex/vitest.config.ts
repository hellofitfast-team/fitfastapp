import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "convex",
    environment: "node",
    globals: true,
    include: ["__tests__/**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
