import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ServiceWorkerRegistration } from "@/components/pwa/ServiceWorkerRegistration";
const RTL_LOCALES = new Set(["ar"]);
import type { AuthState } from "@/lib/auth-context";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import("@tanstack/react-router-devtools").then((m) => ({
        default: m.TanStackRouterDevtools,
      })),
    );

export interface RouterContext {
  auth: AuthState;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
});

function RootLayout() {
  const { i18n } = useTranslation();

  // Sync document direction with current language
  useEffect(() => {
    const locale = i18n.language as "en" | "ar";
    document.documentElement.dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [i18n.language]);

  return (
    <>
      <ServiceWorkerRegistration />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
