import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "@fitfast/i18n/routing";
import {
  convexAuthNextjsMiddleware,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const intlMiddleware = createMiddleware(routing);

const publicRoutes = ["/login", "/magic-link", "/set-password", "/accept-invite"];

function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|ar)/, "");
  return stripped || "/";
}

function isPublicRoute(pathname: string): boolean {
  const path = stripLocale(pathname);
  return publicRoutes.some((route) => path === route);
}

function getLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(en|ar)/);
  return match ? match[1] : "en";
}

export default convexAuthNextjsMiddleware(
  async (request, { convexAuth }) => {
    const { pathname } = request.nextUrl;

    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/favicon") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    if (isPublicRoute(pathname)) {
      return intlMiddleware(request);
    }

    const isAuthenticated = await convexAuth.isAuthenticated();
    const locale = getLocaleFromPath(pathname);

    if (!isAuthenticated) {
      return nextjsMiddlewareRedirect(request, `/${locale}/login`);
    }

    return intlMiddleware(request);
  },
);

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
