import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    // If auth is still loading, let pendingComponent handle it
    if (context.auth.isLoading) {
      return;
    }
    // If already authenticated, redirect to dashboard
    if (context.auth.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  pendingComponent: () => (
    <div className="bg-background flex min-h-dvh items-center justify-center p-4">
      <Loader2 className="text-primary h-8 w-8 animate-spin" />
    </div>
  ),
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="bg-background flex min-h-dvh items-center justify-center p-4">
      <Outlet />
    </div>
  );
}
