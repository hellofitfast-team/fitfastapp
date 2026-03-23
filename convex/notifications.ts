"use node";

import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { ActionRetrier } from "@convex-dev/action-retrier";
import { components } from "./_generated/api";
import webpush from "web-push";
import {
  NOTIFICATION_MAX_RETRIES,
  NOTIFICATION_INITIAL_BACKOFF_MS,
  NOTIFICATION_BACKOFF_BASE,
} from "./constants";

const retrier = new ActionRetrier(components.actionRetrier, {
  initialBackoffMs: NOTIFICATION_INITIAL_BACKOFF_MS,
  base: NOTIFICATION_BACKOFF_BASE,
  maxFailures: NOTIFICATION_MAX_RETRIES,
});

function getWebPushConfig() {
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT || "mailto:noreply@fitfast.app";

  if (!publicKey || !privateKey) {
    throw new Error("VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY env vars not configured");
  }

  return { publicKey, privateKey, subject };
}

/** Check if the global notifications toggle is enabled */
async function isNotificationsEnabled(ctx: {
  runQuery: (
    ref: typeof internal.systemConfig.getConfigInternal,
    args: { key: string },
  ) => Promise<{ value: unknown } | null>;
}): Promise<boolean> {
  const config = await ctx.runQuery(internal.systemConfig.getConfigInternal, {
    key: "notifications_enabled",
  });
  // Default to enabled if no config exists
  return config?.value !== false;
}

/**
 * Called as a workflow step after plans are ready.
 * Schedules the push notification with automatic retry on failure.
 */
export const sendPlanReadyNotification = internalAction({
  args: {
    userId: v.string(),
    mealPlanId: v.optional(v.id("mealPlans")),
    workoutPlanId: v.optional(v.id("workoutPlans")),
  },
  handler: async (ctx, { userId, mealPlanId, workoutPlanId }) => {
    if (!mealPlanId && !workoutPlanId) {
      console.warn("[Notification] sendPlanReadyNotification called with no plan IDs — skipping");
      return;
    }

    // Check global toggle, fetch subscription and profile in parallel
    const [enabled, subscription, profile] = await Promise.all([
      isNotificationsEnabled(ctx),
      ctx.runQuery(internal.pushSubscriptions.getSubscriptionByUserId, { userId }),
      ctx.runQuery(internal.helpers.getProfileInternal, { userId }),
    ]);
    if (!enabled) return;

    const lang: Lang = (profile?.language as Lang) || "en";
    const title = "FitFast";
    const body =
      mealPlanId && workoutPlanId
        ? msg("plan_ready_both", lang)
        : mealPlanId
          ? msg("plan_ready_meal", lang)
          : msg("plan_ready_workout", lang);

    // Always create in-app notification (never lost guarantee)
    await ctx.runMutation(internal.inAppNotifications.createInAppNotification, {
      userId,
      type: "plan_ready",
      title,
      body,
      url: "/",
    });

    if (subscription?.isActive && subscription.endpoint) {
      try {
        await retrier.run(ctx, internal.notifications.sendPushToEndpoint, {
          endpoint: subscription.endpoint,
          p256dh: subscription.p256dh,
          auth: subscription.auth,
          title,
          body,
          url: "/",
          lang,
        });

        await ctx.runMutation(internal.notificationLog.logNotification, {
          type: "plan_ready",
          title,
          body,
          recipientCount: 1,
          recipientUserId: userId,
          sentBy: "system",
          status: "sent",
        });
      } catch {
        await ctx.runMutation(internal.notificationLog.logNotification, {
          type: "plan_ready",
          title,
          body,
          recipientCount: 1,
          recipientUserId: userId,
          sentBy: "system",
          status: "failed",
          failedCount: 1,
        });
        // Push failed — fall back to email
        await ctx.runAction(internal.email.sendPlanReadyEmail, { userId, force: true });
      }
    } else {
      // No push subscription — fall back to email
      await ctx.runAction(internal.email.sendPlanReadyEmail, { userId, force: true });
    }
  },
});

/**
 * Generic push action: sends a web push notification and auto-deactivates expired subscriptions.
 * Used by orchestrators (sendPlanReadyNotification, sendReminderToUser) via the retrier.
 */
export const sendPushToEndpoint = internalAction({
  args: {
    endpoint: v.string(),
    p256dh: v.string(),
    auth: v.string(),
    title: v.string(),
    body: v.string(),
    url: v.optional(v.string()),
    lang: v.optional(v.string()),
  },
  handler: async (ctx, { endpoint, p256dh, auth, title, body, url, lang }) => {
    try {
      await sendWebPushNotification({ endpoint, p256dh, auth }, { title, body, url, lang });
    } catch (err) {
      if (err instanceof SubscriptionExpiredError) {
        await ctx.runMutation(internal.pushSubscriptions.deactivateByEndpoint, { endpoint });
        return; // Don't re-throw — stops the retrier
      }
      throw err;
    }
  },
});

/**
 * Called by per-user dynamic cron jobs to send check-in reminders.
 */
export const sendReminderToUser = internalAction({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    // Check global toggle, fetch subscription and profile in parallel
    const [enabled, subscription, profile] = await Promise.all([
      isNotificationsEnabled(ctx),
      ctx.runQuery(internal.pushSubscriptions.getSubscriptionByUserId, { userId }),
      ctx.runQuery(internal.helpers.getProfileInternal, { userId }),
    ]);

    const lang: Lang = (profile?.language as Lang) || "en";
    const title = "FitFast";
    const body = msg("reminder", lang);

    // Always create in-app notification (never lost guarantee)
    if (enabled) {
      await ctx.runMutation(internal.inAppNotifications.createInAppNotification, {
        userId,
        type: "reminder",
        title,
        body,
        url: "/check-in",
      });
    }

    if (enabled && subscription?.isActive && subscription.endpoint) {
      try {
        await retrier.run(ctx, internal.notifications.sendPushToEndpoint, {
          endpoint: subscription.endpoint,
          p256dh: subscription.p256dh,
          auth: subscription.auth,
          title,
          body,
          url: "/check-in",
          lang,
        });

        await ctx.runMutation(internal.notificationLog.logNotification, {
          type: "reminder",
          title,
          body,
          recipientCount: 1,
          recipientUserId: userId,
          sentBy: "system",
          status: "sent",
        });
      } catch {
        await ctx.runMutation(internal.notificationLog.logNotification, {
          type: "reminder",
          title,
          body,
          recipientCount: 1,
          recipientUserId: userId,
          sentBy: "system",
          status: "failed",
          failedCount: 1,
        });
      }
    } else {
      // Fallback to email when no active push subscription or notifications disabled
      await ctx.runAction(internal.email.sendReminderEmail, { userId });
    }
  },
});

/** Sentinel error class for expired subscriptions (410 Gone / 404 Not Found) */
export class SubscriptionExpiredError extends Error {
  endpoint: string;
  constructor(endpoint: string) {
    super(`Push subscription expired (410/404): ${endpoint}`);
    this.name = "SubscriptionExpiredError";
    this.endpoint = endpoint;
  }
}

// T001: Bilingual notification content map
const NOTIFICATION_MESSAGES = {
  plan_ready_both: {
    en: "Your new meal and workout plans are ready!",
    ar: "خطط الوجبات والتمارين الجديدة جاهزة!",
  },
  plan_ready_meal: { en: "Your new meal plan is ready!", ar: "خطة الوجبات الجديدة جاهزة!" },
  plan_ready_workout: { en: "Your new workout plan is ready!", ar: "خطة التمارين الجديدة جاهزة!" },
  reminder: {
    en: "Time for your check-in! Track your progress today",
    ar: "حان وقت المتابعة! تابع تقدمك اليوم",
  },
  fallback: { en: "You have a new notification", ar: "لديك إشعار جديد" },
} as const;

type Lang = "en" | "ar";
function msg(key: keyof typeof NOTIFICATION_MESSAGES, lang: Lang): string {
  return NOTIFICATION_MESSAGES[key][lang] || NOTIFICATION_MESSAGES[key].en;
}

let vapidConfigured = false;
function ensureVapidConfigured() {
  if (vapidConfigured) return;
  const { publicKey, privateKey, subject } = getWebPushConfig();
  webpush.setVapidDetails(subject, publicKey, privateKey);
  vapidConfigured = true;
}

/** Exported for use by adminNotifications.ts */
export async function sendWebPushNotification(
  sub: { endpoint: string; p256dh: string; auth: string },
  payload: { title: string; body: string; url?: string; lang?: string },
) {
  ensureVapidConfigured();

  const pushSubscription = {
    endpoint: sub.endpoint,
    keys: {
      p256dh: sub.p256dh,
      auth: sub.auth,
    },
  };

  try {
    await webpush.sendNotification(pushSubscription, JSON.stringify(payload));
  } catch (err: unknown) {
    const statusCode = (err as { statusCode?: number }).statusCode;
    if (statusCode === 410 || statusCode === 404) {
      throw new SubscriptionExpiredError(sub.endpoint);
    }
    throw err;
  }
}
