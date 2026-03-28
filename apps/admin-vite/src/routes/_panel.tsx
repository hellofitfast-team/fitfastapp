import { createFileRoute, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import { api } from "@convex/_generated/api";
import { useEffect } from "react";
import { AdminShell } from "@/components/layouts/admin-shell";
import { authClient } from "@/lib/auth-client";

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
  const navigate = useNavigate();

  const shouldRedirect = profile !== undefined && (!profile || !profile.isCoach);

  useEffect(() => {
    if (shouldRedirect) {
      void authClient.signOut().then(() => navigate({ to: "/login" }));
    }
  }, [shouldRedirect, navigate]);

  if (profile === undefined || shouldRedirect) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
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
