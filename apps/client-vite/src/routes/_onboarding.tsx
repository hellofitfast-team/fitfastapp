import { createFileRoute, Outlet, redirect, useMatches } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/_onboarding")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated && !context.auth.isLoading) {
      throw redirect({ to: "/login" });
    }
  },
  component: OnboardingLayout,
});

function OnboardingLayout() {
  const matches = useMatches();
  const { t } = useTranslation();

  // Only render if the current route is under this layout
  const isOnboardingRoute = matches.some((m) => m.id.startsWith("/_onboarding/"));
  if (!isOnboardingRoute) return null;

  return (
    <div className="bg-background text-foreground min-h-dvh">
      {/* Header */}
      <header className="border-border bg-card border-b pt-[env(safe-area-inset-top,0px)]">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-center px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="FitFast" className="h-8 w-8" width={32} height={32} />
            <h1 className="text-lg font-bold tracking-tight">{t("brand.name")}</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl p-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-border bg-card mt-8 border-t py-6 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground text-xs">&copy; {new Date().getFullYear()} FitFast</p>
          <p className="text-muted-foreground text-xs">{t("brand.tagline")}</p>
        </div>
      </footer>
    </div>
  );
}
