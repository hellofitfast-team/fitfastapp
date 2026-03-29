import { createFileRoute, Outlet, redirect, useMatches } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Loader2, Globe } from "lucide-react";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    if (context.auth.isLoading) {
      return;
    }
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

function LocaleSwitcher() {
  const { i18n } = useTranslation();
  const toggle = () => {
    const next = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(next);
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };
  return (
    <button
      onClick={toggle}
      className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span>{i18n.language === "en" ? "العربية" : "English"}</span>
    </button>
  );
}

function AuthLayout() {
  const matches = useMatches();
  const { t } = useTranslation();

  // Only render if the current route is under this layout
  const isAuthRoute = matches.some((m) => m.id.startsWith("/_auth/"));
  if (!isAuthRoute) return null;

  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex min-h-dvh flex-col">
      {/* Brand Header with Gradient */}
      <div className="from-primary/5 to-background bg-gradient-to-b">
        <header className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 pt-[env(safe-area-inset-top,0px)]">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="FitFast" className="h-6 w-6" />
            <span className="text-sm font-bold tracking-tight">{t("brand.name")}</span>
          </div>
          <LocaleSwitcher />
        </header>

        {/* Brand Logo Section */}
        <div className="flex flex-col items-center gap-2 pt-8 pb-10">
          <img src="/logo.png" alt="FitFast" className="mb-2 h-16 w-16" />
          <h1 className="text-2xl font-bold">FitFast</h1>
          <p className="text-muted-foreground text-sm">{t("auth.brandTagline")}</p>
        </div>
      </div>

      {/* Main Content — overlaps the gradient */}
      <main className="-mt-4 flex flex-1 justify-center px-4 pb-12">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-border bg-card border-t py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-center md:flex-row md:items-center md:justify-between md:text-start">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} FitFast — {t("brand.copyright")}
          </p>
          <p className="text-muted-foreground text-xs">{t("brand.tagline")}</p>
        </div>
      </footer>
    </div>
  );
}
