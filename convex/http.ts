import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { auth } from "./auth";
import { rateLimiter } from "./rateLimiter";

function getAllowedOrigin(): string {
  return process.env.MARKETING_SITE_URL ?? "*";
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
        "Access-Control-Allow-Origin": getAllowedOrigin(),
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
            "Access-Control-Allow-Origin": getAllowedOrigin(),
          },
        },
      );
    }

    const uploadUrl = await ctx.storage.generateUploadUrl();
    return new Response(JSON.stringify({ uploadUrl }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": getAllowedOrigin(),
      },
    });
  }),
});

// CORS preflight for /marketing/upload-url
http.route({
  path: "/marketing/upload-url",
  method: "OPTIONS",
  handler: httpAction(async (_ctx, _request) => {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": getAllowedOrigin(),
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }),
});

export default http;
