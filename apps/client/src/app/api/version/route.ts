import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    buildId: process.env.NEXT_BUILD_ID || process.env.VERCEL_GIT_COMMIT_SHA || "dev",
  });
}
