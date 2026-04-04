import { createFileRoute, Outlet, redirect, useNavigate, useMatches } from "@tanstack/react-router";
import { useQuery, useMutation } from "convex/react";
import { api } from "@convex/_generated/api";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { DashboardShell } from "@/components/layouts";
import { authClient } from "@/lib/auth-client";
import { usePushNotifications } from "@/hooks/use-push-notifications";
import { RouteErrorComponent } from "@/components/route-error";

export const Route = createFileRoute("/_dashboard")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated && !context.auth.isLoading) {
      throw redirect({ to: "/login", search: { error: undefined, message: undefined } });
    }
  },
  pendingComponent: () => (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
    </div>
  ),
  component: DashboardLayout,
  errorComponent: ({ error, reset }) => <RouteErrorComponent error={error} reset={reset} />,
});

function DashboardLayout() {
  const matches = useMatches();
  const profile = useQuery(api.profiles.getMyProfile);
  const assessment = useQuery(api.assessments.getMyAssessment);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const updateProfile = useMutation(api.profiles.updateProfile);
  const ensureProfile = useMutation(api.profiles.ensureProfile);
  const hasSynced = useRef(false);
  const isRecovering = useRef(false);
  const recoveryTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup recovery state on unmount (also handles React Strict Mode double-mount)
  useEffect(() => {
    return () => {
      if (recoveryTimeout.current) clearTimeout(recoveryTimeout.current);
      isRecovering.current = false;
    };
  }, []);

  const isDashboardRoute = matches.some((m) => m.id.startsWith("/_dashboard/"));

  // Profile/assessment guards — mirror Next.js layout logic
  useEffect(() => {
    if (!isDashboardRoute) return;
    if (profile === undefined || assessment === undefined) return; // Still loading

    if (profile === null) {
      // Profile missing — attempt recovery before signing out
      if (!isRecovering.current) {
        isRecovering.current = true;
        ensureProfile()
          .then(() => {
            // Wait for reactive query to pick up the new profile
            recoveryTimeout.current = setTimeout(() => {
              if (isRecovering.current) {
                isRecovering.current = false;
                void authClient
                  .signOut()
                  .finally(() =>
                    navigate({ to: "/login", search: { error: undefined, message: undefined } }),
                  );
              }
            }, 8000);
          })
          .catch(() => {
            isRecovering.current = false;
            void authClient
              .signOut()
              .finally(() =>
                navigate({ to: "/login", search: { error: undefined, message: undefined } }),
              );
          });
      }
      return;
    }

    // Profile found — clear any recovery state
    if (isRecovering.current) {
      isRecovering.current = false;
      if (recoveryTimeout.current) clearTimeout(recoveryTimeout.current);
    }

    if (profile.isCoach) {
      navigate({ to: "/login", search: { error: undefined, message: undefined } });
      return;
    }

    switch (profile.status) {
      case "pending_approval":
        navigate({ to: "/pending" });
        return;
      case "expired":
        navigate({ to: "/expired" });
        return;
      case "inactive":
        navigate({ to: "/login", search: { error: undefined, message: undefined } });
        return;
      case "active":
        if (!assessment) {
          navigate({ to: "/initial-assessment" });
        }
        break;
      default:
        navigate({ to: "/login", search: { error: undefined, message: undefined } });
    }
  }, [isDashboardRoute, profile, assessment, navigate, ensureProfile]);

  // Sync profile language with UI locale
  useEffect(() => {
    if (profile && profile.language !== i18n.language && !hasSynced.current) {
      hasSynced.current = true;
      updateProfile({ language: i18n.language as "en" | "ar" });
    }
  }, [i18n.language, profile, updateProfile]);

  // Auto-sync push subscription between browser and backend on login
  const { syncSubscription } = usePushNotifications();
  const didSyncPush = useRef(false);
  useEffect(() => {
    if (!isDashboardRoute || !profile || profile.status !== "active" || didSyncPush.current) return;
    didSyncPush.current = true;
    syncSubscription();
  }, [isDashboardRoute, profile, syncSubscription]);

  // Only render if the current route is actually under this layout.
  // TanStack Router renders all pathless layouts — we must guard against
  // rendering DashboardShell when a sibling layout (_auth, _onboarding) owns the route.
  if (!isDashboardRoute) return null;

  // Loading state (includes recovery — show spinner while ensureProfile runs)
  if (
    profile === undefined ||
    assessment === undefined ||
    (profile === null && isRecovering.current)
  ) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
      </div>
    );
  }

  // Don't render dashboard content if profile checks failed
  if (!profile || profile.isCoach || profile.status !== "active" || !assessment) {
    return null;
  }

  // Compute days until plan expiry for near-expiry banner
  let daysUntilExpiry: number | null = null;
  if (profile.planEndDate) {
    const endDate = new Date(profile.planEndDate + "T23:59:59");
    const now = new Date();
    const diffMs = endDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays >= 0 && diffDays <= 3) {
      daysUntilExpiry = diffDays;
    }
  }
  const userName = profile.fullName?.split(" ")[0] || "User";

  return (
    <DashboardShell userName={userName} daysUntilExpiry={daysUntilExpiry}>
      <Outlet />
    </DashboardShell>
  );
}
