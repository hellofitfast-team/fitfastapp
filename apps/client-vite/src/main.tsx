import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ConvexReactClient } from "convex/react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import * as Sentry from "@sentry/react";
import { authClient } from "@/lib/auth-client";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import { ErrorFallback } from "@/components/error-fallback";
import { routeTree } from "./routeTree.gen";
import "./globals.css";
import "./i18n";

// Initialize Sentry
if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.PROD ? "production" : "development",
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
  });
}

// Validate required env vars
if (!import.meta.env.VITE_CONVEX_URL) {
  throw new Error("VITE_CONVEX_URL is not set. Add it to your .env.local file.");
}
if (!import.meta.env.VITE_CONVEX_SITE_URL) {
  throw new Error("VITE_CONVEX_SITE_URL is not set. Add it to your .env.local file.");
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
  defaultPendingMs: 200,
  defaultPendingMinMs: 100,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

function App() {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, resetError }) => (
        <ErrorFallback
          error={error instanceof Error ? error : new Error(String(error))}
          resetErrorBoundary={resetError}
        />
      )}
    >
      <ConvexBetterAuthProvider client={convex} authClient={authClient}>
        <AuthProvider>
          <InnerApp />
        </AuthProvider>
      </ConvexBetterAuthProvider>
    </Sentry.ErrorBoundary>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
