import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "@fitfast/i18n/routing";
import { clerkClient, clerkMiddleware } from "@clerk/nextjs/server";

const intlMiddleware = createMiddleware(routing);

function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|ar)/, "");
  return stripped || "/";
}

function getLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(en|ar)/);
  return match ? match[1] : "en";
}

export default clerkMiddleware(
  async (auth, request: NextRequest) => {
    const { pathname, origin } = request.nextUrl;

    if (
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname.startsWith("/favicon") ||
      pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    const path = stripLocale(pathname);

    // Login page is public
    if (path === "/login") {
      return intlMiddleware(request);
    }

    // All other routes require authentication
    const { userId, sessionClaims } = await auth();
    const locale = getLocaleFromPath(pathname);

    if (!userId) {
      return NextResponse.redirect(new URL(`/${locale}/login`, origin));
    }

    // Check role: first try JWT claims (fast), then fall back to API (reliable)
    let role = (sessionClaims as CustomJwtSessionClaims)?.metadata?.role;

    if (!role) {
      // Session token not customized — fetch from Clerk Backend API
      try {
        const client = await clerkClient();
        const user = await client.users.getUser(userId);
        role = (user.publicMetadata as { role?: string })?.role as
          | "coach"
          | "client"
          | undefined;
      } catch {
        // Session may be stale (e.g. during sign-out/sign-in flow)
        return NextResponse.redirect(new URL(`/${locale}/login`, origin));
      }
    }

    if (role !== "coach") {
      return NextResponse.redirect(
        new URL(`/${locale}/login?error=not_coach`, origin),
      );
    }

    return intlMiddleware(request);
  },
);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
