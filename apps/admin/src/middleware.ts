import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "@fitfast/i18n/routing";
import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const intlMiddleware = createMiddleware(routing);

function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|ar)/, "");
  return stripped || "/";
}

function getLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(en|ar)/);
  return match ? match[1] : "en";
}

const isPublicRoute = createRouteMatcher([
  "/login",
  "/en/login",
  "/ar/login",
]);

export default convexAuthNextjsMiddleware(
  async (request, { convexAuth }) => {
    const { pathname } = request.nextUrl;

    // Skip static files (but NOT /api/auth — handled by convexAuthNextjsMiddleware)
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/favicon") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    const path = stripLocale(pathname);
    const locale = getLocaleFromPath(pathname);

    // Login page is public
    if (path === "/login") {
      return intlMiddleware(request);
    }

    // All other routes require authentication
    const isAuthenticated = await convexAuth.isAuthenticated();

    if (!isAuthenticated) {
      return nextjsMiddlewareRedirect(request, `/${locale}/login`);
    }

    // Coach role check is done at the layout level via Convex query
    // (checking profile.isCoach) — middleware only checks authentication
    return intlMiddleware(request);
  },
);

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
