import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";

export const Route = createFileRoute("/_panel")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated && !context.auth.isLoading) {
      throw redirect({ to: "/login" });
    }
  },
  component: PanelLayout,
});

function PanelLayout() {
  const profile = useQuery(api.profiles.getMyProfile);

  if (profile === undefined) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
      </div>
    );
  }

  if (!profile || !profile.isCoach) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <p>Not authorized</p>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-dvh">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
