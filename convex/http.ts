import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { auth } from "./auth";

const http = httpRouter();

// Convex Auth HTTP routes (JWT verification, JWKS, etc.)
auth.addHttpRoutes(http);

// ---------------------------------------------------------------------------
// Stream plan endpoint — returns real-time AI generation text
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
    const body = await ctx.runQuery(
      internal.streamingManager.getStreamBody,
      { streamId },
    );

    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
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
  handler: httpAction(async (ctx, _request) => {
    const uploadUrl = await ctx.storage.generateUploadUrl();
    return new Response(JSON.stringify({ uploadUrl }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }),
});

export default http;
