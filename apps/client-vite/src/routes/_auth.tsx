import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    // If already authenticated, redirect to dashboard
    if (context.auth.isAuthenticated && !context.auth.isLoading) {
      throw redirect({ to: "/" });
    }
  },
  component: () => (
    <div className="bg-background flex min-h-dvh items-center justify-center p-4">
      <Outlet />
    </div>
  ),
});
