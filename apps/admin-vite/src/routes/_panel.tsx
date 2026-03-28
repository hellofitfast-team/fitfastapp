import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { AdminShell } from "@/components/layouts/admin-shell";

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
  const pendingSignups = useQuery(api.pendingSignups.getPendingSignups);
  const openTickets = useQuery(api.tickets.getOpenTicketCount);

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
    <AdminShell
      coachName={profile.fullName ?? "Coach"}
      pendingSignups={pendingSignups?.length ?? 0}
      openTickets={openTickets ?? 0}
    >
      <Outlet />
    </AdminShell>
  );
}
