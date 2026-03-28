import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    // TanStack Router MUST come before react
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "public",
      filename: "sw.js",
      injectRegister: null, // We handle registration manually
      manifest: false, // Using existing manifest.json in public/
      devOptions: {
        enabled: false,
      },
      injectManifest: {
        injectionPoint: undefined, // Don't inject precache manifest into custom SW
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@convex": path.resolve(__dirname, "../../convex"),
    },
  },
  server: {
    port: 3010,
  },
});
