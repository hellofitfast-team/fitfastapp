import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    tsconfigRaw: JSON.stringify({
      compilerOptions: {
        target: "ES2017",
        jsx: "react-jsx",
        esModuleInterop: true,
        module: "esnext",
        moduleResolution: "bundler",
        strict: true,
      },
    }),
  },
  test: {
    name: "client",
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: [
      { find: "@/convex", replacement: path.resolve(__dirname, "../../convex") },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@fitfast/ui", replacement: path.resolve(__dirname, "../../packages/ui/src") },
      { find: "@fitfast/i18n", replacement: path.resolve(__dirname, "../../packages/i18n/src") },
    ],
  },
});
