/**
 * k6 Auth Helper (BetterAuth)
 *
 * Authenticates test users against BetterAuth via the HTTP sign-in endpoint.
 * BetterAuth exposes sign-in at {CONVEX_SITE_URL}/api/auth/sign-in/email.
 *
 * Usage:
 *   import { authenticateUser, getVUEmail } from '../helpers/auth.js';
 *   const token = authenticateUser(getVUEmail(__VU));
 */

import http from "k6/http";
import { check, fail } from "k6";

/**
 * Generate a unique test email for a given VU number.
 * @param {number} vuNum - Virtual user number (1-based)
 * @returns {string} Email like "loaduser-001@test.com"
 */
export function getVUEmail(vuNum) {
  const padded = String(vuNum).padStart(3, "0");
  return `loaduser-${padded}@test.com`;
}

/**
 * Default password for all load test users.
 * Must match what was set in seedLoadTest:seedUsers.
 */
const LOAD_TEST_PASSWORD = "loadtest12345";

/**
 * Get the Convex site URL for BetterAuth HTTP endpoints.
 */
function getSiteUrl() {
  const url = __ENV.CONVEX_SITE_URL || "";
  if (!url) {
    // Derive from E2E_CONVEX_URL by replacing .convex.cloud with .convex.site
    const cloudUrl = __ENV.E2E_CONVEX_URL || "";
    if (cloudUrl.includes(".convex.cloud")) {
      return cloudUrl.replace(".convex.cloud", ".convex.site");
    }
    fail(
      "CONVEX_SITE_URL is required for BetterAuth. " + "Set it to your Convex .convex.site URL.",
    );
    return "";
  }
  return url.replace(/\/$/, "");
}

/**
 * Authenticate a user via BetterAuth password sign-in.
 *
 * BetterAuth exposes sign-in at POST /api/auth/sign-in/email
 * Returns a session token from the response body or Set-Cookie header.
 *
 * @param {string} email - User email
 * @param {string} [password] - User password (defaults to LOAD_TEST_PASSWORD)
 * @returns {string|null} Auth token or null on failure
 */
export function authenticateUser(email, password) {
  const siteUrl = getSiteUrl();
  const pwd = password || LOAD_TEST_PASSWORD;

  const url = `${siteUrl}/api/auth/sign-in/email`;
  const payload = JSON.stringify({
    email: email,
    password: pwd,
  });

  // Origin header required — BetterAuth validates cross-origin requests
  const origin = __ENV.AUTH_ORIGIN || "https://client.fitfast.app";

  const res = http.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
      Origin: origin,
    },
    tags: { type: "auth", name: "signIn" },
    redirects: 0, // Don't follow redirects
  });

  const ok = check(res, {
    "auth response 200": (r) => r.status === 200,
  });

  if (!ok) {
    console.warn(`Auth failed for ${email}: status=${res.status}, body=${res.body}`);
    return null;
  }

  let sessionToken;
  try {
    const body = JSON.parse(res.body);
    sessionToken = body.token || body.session?.token || null;
    if (!sessionToken) {
      console.warn(`No session token in auth response for ${email}`);
      return null;
    }
  } catch {
    console.warn(`Failed to parse auth response for ${email}`);
    return null;
  }

  // Step 2: Exchange BetterAuth session token for Convex JWT
  const convexTokenUrl = `${siteUrl}/api/auth/convex/token`;
  const tokenRes = http.get(convexTokenUrl, {
    headers: {
      Origin: origin,
      Authorization: `Bearer ${sessionToken}`,
    },
    tags: { type: "auth", name: "convexToken" },
  });

  if (tokenRes.status !== 200) {
    console.warn(`Token exchange failed for ${email}: status=${tokenRes.status}`);
    return null;
  }

  try {
    const tokenBody = JSON.parse(tokenRes.body);
    return tokenBody.token || null;
  } catch {
    console.warn(`Failed to parse token exchange response for ${email}`);
    return null;
  }
}

/**
 * Pre-authenticate multiple users and return a map of email → token.
 * Useful for setup() in k6 scenarios.
 *
 * @param {number} count - Number of users to authenticate
 * @returns {object} Map of email → token
 */
export function authenticateUsers(count) {
  const tokens = {};
  let successCount = 0;
  for (let i = 1; i <= count; i++) {
    const email = getVUEmail(i);
    const token = authenticateUser(email);
    if (token) {
      tokens[email] = token;
      successCount++;
    }
  }
  console.log(`Authenticated ${successCount}/${count} load test users`);
  return tokens;
}
