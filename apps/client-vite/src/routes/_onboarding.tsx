import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_onboarding")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated && !context.auth.isLoading) {
      throw redirect({ to: "/login" });
    }
  },
  component: () => (
    <div className="bg-background min-h-dvh">
      <Outlet />
    </div>
  ),
});
