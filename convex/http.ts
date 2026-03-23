import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { auth } from "./auth";
import { rateLimiter } from "./rateLimiter";

/**
 * Build the set of origins allowed to call these HTTP endpoints.
 * Includes the configured marketing URL plus its www variant (and vice-versa)
 * so CORS works regardless of whether users visit with or without "www".
 */
function buildAllowedOrigins(): Set<string> {
  const base = process.env.MARKETING_SITE_URL ?? "https://fitfast.app";
  const origins = new Set<string>([base]);

  // Automatically allow both www and non-www variants
  try {
    const url = new URL(base);
    if (url.hostname.startsWith("www.")) {
      origins.add(`${url.protocol}//${url.hostname.slice(4)}`);
    } else {
      origins.add(`${url.protocol}//www.${url.hostname}`);
    }
  } catch {
    // base wasn't a valid URL — keep just the literal value
  }

  return origins;
}

const ALLOWED_ORIGINS = buildAllowedOrigins();

/**
 * Return the request's Origin if it is in the allowlist, otherwise fall back
 * to the configured MARKETING_SITE_URL. This lets CORS work for both
 * https://fitfast.app and https://www.fitfast.app.
 */
function getAllowedOrigin(request?: Request): string {
  const requestOrigin = request?.headers.get("Origin") ?? "";
  if (ALLOWED_ORIGINS.has(requestOrigin)) {
    return requestOrigin;
  }
  // Fallback — still returns a value so non-browser clients get a response
  return process.env.MARKETING_SITE_URL ?? "https://fitfast.app";
}

/** Standard CORS headers for all responses — includes Vary: Origin for cache correctness */
function corsHeaders(request: Request): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": getAllowedOrigin(request),
    Vary: "Origin",
  };
}

const http = httpRouter();

// Convex Auth HTTP routes (JWT verification, JWKS, etc.)
auth.addHttpRoutes(http);

// ---------------------------------------------------------------------------
// Stream plan endpoint — returns real-time AI generation text
// Stream IDs are unguessable UUIDs generated server-side — they serve as capability tokens.
// PersistentTextStreaming doesn't support userId storage, so stream IDs are the auth mechanism.
// ---------------------------------------------------------------------------

http.route({
  path: "/stream-plan",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const url = new URL(request.url);
    const streamId = url.searchParams.get("streamId");

    if (!streamId) {
      return new Response(JSON.stringify({ error: "streamId required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch the stream body from the persistent text streaming component
    const body = await ctx.runQuery(internal.streamingManager.getStreamBody, { streamId });

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders(request),
      },
    });
  }),
});

// ---------------------------------------------------------------------------
// Marketing upload URL — unauthenticated endpoint for checkout payment screenshots
// Prospects are not logged in at checkout time, so auth cannot be required here.
// ---------------------------------------------------------------------------

http.route({
  path: "/marketing/upload-url",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    // Rate limit by client IP to prevent abuse of unauthenticated endpoint
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const { ok, retryAfter } = await rateLimiter.limit(ctx, "marketingUpload", {
      key: ip,
    });
    if (!ok) {
      return new Response(
        JSON.stringify({
          error: `Too many requests — try again in ${Math.ceil((retryAfter ?? 0) / 1000)}s`,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(request),
          },
        },
      );
    }

    const uploadUrl = await ctx.storage.generateUploadUrl();
    return new Response(JSON.stringify({ uploadUrl }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders(request),
      },
    });
  }),
});

// CORS preflight for /marketing/upload-url
http.route({
  path: "/marketing/upload-url",
  method: "OPTIONS",
  handler: httpAction(async (_ctx, request) => {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders(request),
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }),
});

export default http;
