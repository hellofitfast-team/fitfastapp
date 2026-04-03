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
  const { isAuthenticated, isLoading: isAuthLoading } = useConvexAuth();
  const profile = useQuery(api.profiles.getMyProfile, isAuthenticated ? {} : "skip");
  const pendingSignups = useQuery(
    api.pendingSignups.getPendingSignups,
    isAuthenticated ? {} : "skip",
  );
  const openTickets = useQuery(api.tickets.getOpenTicketCount, isAuthenticated ? {} : "skip");
  const navigate = useNavigate();

  const shouldSignOut = profile !== undefined && (!profile || !profile.isCoach);
  const hasRedirected = useRef(false);

  // Redirect unauthenticated users to login (handles race where beforeLoad
  // ran while auth was still loading and couldn't redirect)
  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated && !hasRedirected.current) {
      hasRedirected.current = true;
      navigate({ to: "/login", search: { error: "" } });
    }
  }, [isAuthLoading, isAuthenticated, navigate]);

  // Sign out non-coach users
  useEffect(() => {
    if (shouldSignOut && !hasRedirected.current) {
      hasRedirected.current = true;
      void authClient.signOut().finally(() => navigate({ to: "/login", search: { error: "" } }));
    }
  }, [shouldSignOut, navigate]);

  if (isAuthLoading || !isAuthenticated || profile === undefined || shouldSignOut) {
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
