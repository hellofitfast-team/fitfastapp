import { createFileRoute, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { useQuery, useConvexAuth } from "convex/react";
import { api } from "@convex/_generated/api";
import { useEffect, useRef } from "react";
import { AdminShell } from "@/components/layouts/admin-shell";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/_panel")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated && !context.auth.isLoading) {
      throw redirect({ to: "/login", search: { error: "" } });
    }
  },
  component: PanelLayout,
});

function PanelLayout() {
  const { isAuthenticated } = useConvexAuth();
  const profile = useQuery(api.profiles.getMyProfile, isAuthenticated ? {} : "skip");
  const pendingSignups = useQuery(
    api.pendingSignups.getPendingSignups,
    isAuthenticated ? {} : "skip",
  );
  const openTickets = useQuery(api.tickets.getOpenTicketCount, isAuthenticated ? {} : "skip");
  const navigate = useNavigate();

  const shouldRedirect = profile !== undefined && (!profile || !profile.isCoach);
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (shouldRedirect && !hasRedirected.current) {
      hasRedirected.current = true;
      void authClient.signOut().finally(() => navigate({ to: "/login", search: { error: "" } }));
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
