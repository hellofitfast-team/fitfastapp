// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  // Enable structured logging (experimental)
  _experiments: {
    enableLogs: true,
  },

  // Sample 10% of server traces in production to manage costs
  tracesSampleRate: 0.1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  integrations: [
    Sentry.consoleLoggingIntegration({
      levels: ["warn", "error"],
    }),
  ],

  // Scrub PII from error events before sending to Sentry
  beforeSend(event) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    if (event.message) {
      event.message = event.message.replace(emailRegex, "[email]");
    }
    if (event.user?.email) {
      event.user.email = "[email]";
    }
    if (event.exception?.values) {
      for (const ex of event.exception.values) {
        if (ex.value) {
          ex.value = ex.value.replace(emailRegex, "[email]");
        }
      }
    }
    if (event.breadcrumbs) {
      for (const bc of event.breadcrumbs) {
        if (bc.message) {
          bc.message = bc.message.replace(emailRegex, "[email]");
        }
        if (bc.data && typeof bc.data === "object") {
          for (const key in bc.data) {
            if (typeof bc.data[key] === "string") {
              (bc.data as Record<string, string>)[key] = bc.data[key].replace(
                emailRegex,
                "[email]",
              );
            }
          }
        }
      }
    }
    /** Recursively scrub email addresses from strings in an object */
    function scrubStrings(obj: unknown): unknown {
      if (typeof obj === "string") {
        return obj.replace(emailRegex, "[email]");
      }
      if (Array.isArray(obj)) {
        return obj.map(scrubStrings);
      }
      if (obj !== null && typeof obj === "object") {
        const result: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(obj)) {
          result[key] = scrubStrings(value);
        }
        return result;
      }
      return obj;
    }

    if (event.extra) {
      event.extra = scrubStrings(event.extra) as Record<string, unknown>;
    }
    if (event.contexts) {
      event.contexts = scrubStrings(event.contexts) as typeof event.contexts;
    }
    if (event.tags) {
      event.tags = scrubStrings(event.tags) as Record<string, string>;
    }
    if (event.request) {
      event.request = scrubStrings(event.request) as typeof event.request;
    }
    return event;
  },

  // Scrub PII from structured logs before sending to Sentry
  beforeSendLog(log) {
    const topLevelKeys = ["email", "password", "token", "userId", "user_id"];
    const nestedPaths: [string, string][] = [
      ["user", "id"],
      ["user", "email"],
      ["user", "name"],
    ];
    if (log.attributes) {
      for (const key of topLevelKeys) {
        delete log.attributes[key];
      }
      for (const [parent, child] of nestedPaths) {
        const nested = log.attributes[parent];
        if (nested && typeof nested === "object") {
          delete (nested as Record<string, unknown>)[child];
        }
      }
    }
    return log;
  },

  // Only send errors in production
  enabled: process.env.NODE_ENV === "production",
});
