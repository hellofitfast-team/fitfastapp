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

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  const requestId = request.headers.get("x-request-id") ?? crypto.randomUUID();

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/favicon") || pathname.includes(".")) {
    const response = NextResponse.next();
    response.headers.set("x-request-id", requestId);
    return response;
  }

  // Device language detection: when no locale prefix exists (e.g. visiting "/"),
  // let next-intl read the Accept-Language header and redirect to /ar/ or /en/.
  // This makes Arabic-device users land on Arabic automatically.
  const hasLocalePrefix = /^\/(en|ar)(\/|$)/.test(pathname);
  if (!hasLocalePrefix) {
    const response = intlMiddleware(request);
    response.headers.set("x-request-id", requestId);
    return response;
  }

  if (isPublicRoute(pathname)) {
    const response = intlMiddleware(request);
    response.headers.set("x-request-id", requestId);
    return response;
  }

  const isAuthenticated = await convexAuth.isAuthenticated();
  const locale = getLocaleFromPath(pathname);

  if (!isAuthenticated) {
    const response = nextjsMiddlewareRedirect(request, `/${locale}/login`);
    response.headers.set("x-request-id", requestId);
    return response;
  }

  const response = intlMiddleware(request);
  response.headers.set("x-request-id", requestId);
  return response;
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
