import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withSentryConfig } from "@sentry/nextjs";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@sentry/nextjs"],
  },

  transpilePackages: ["@fitfast/ui", "@fitfast/i18n"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

const configWithIntl = withNextIntl(nextConfig);

// Skip Sentry bundler wrapping in dev — it adds source map overhead that slows Turbopack
const finalConfig =
  process.env.NODE_ENV === "development"
    ? configWithIntl
    : withSentryConfig(configWithIntl, {
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        silent: !process.env.CI,
        widenClientFileUpload: !!process.env.CI,
        tunnelRoute: "/monitoring",
        sourcemaps: {
          deleteSourcemapsAfterUpload: true,
        },
      });

export default finalConfig;
