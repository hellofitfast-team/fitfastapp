import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ConvexReactClient } from "convex/react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { authClient } from "@/lib/auth-client";
import { AuthProvider, useAuth } from "@/lib/auth-context";
import { routeTree } from "./routeTree.gen";
import "@fitfast/ui/styles";
import "./i18n";

// Create Convex client
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

// Create router with auth context
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
  defaultPendingMs: 200,
  defaultPendingMinMs: 100,
});

// Required for TanStack Router type safety
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
    <ConvexBetterAuthProvider client={convex} authClient={authClient}>
      <AuthProvider>
        <InnerApp />
      </AuthProvider>
    </ConvexBetterAuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
