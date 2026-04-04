"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { internal } from "./_generated/api";
import { requireCoachAction } from "./authHelpers";
import { sendWebPushNotification, SubscriptionExpiredError } from "./notifications";

/** Coach action: send push notification to a single client (with email fallback) */
export const sendToIndividual = action({
  args: {
    userId: v.string(),
    title: v.string(),
    body: v.string(),
  },
  handler: async (ctx, { userId, title, body }) => {
    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();
    if (!trimmedTitle || trimmedTitle.length > 50) throw new Error("Title must be 1-50 characters");
    if (!trimmedBody || trimmedBody.length > 150) throw new Error("Body must be 1-150 characters");

    const coachId = await requireCoachAction(ctx, internal.helpers.getCoachProfileInternal);

    // Rate limit: 50 individual notifications per day per coach
    const { ok, retryAfter } = await ctx.runMutation(internal.rateLimiter.checkRateLimit, {
      name: "sendNotification",
      key: coachId,
    });
    if (!ok) {
      throw new Error(`Too many notifications — try again in ${Math.ceil(retryAfter / 1000)}s`);
    }

    // Check global toggle
    const config = await ctx.runQuery(internal.systemConfig.getConfigInternal, {
      key: "notifications_enabled",
    });
    if (config?.value === false) {
      throw new Error("Notifications are currently disabled");
    }

    // Always create in-app notification (never lost guarantee)
    await ctx.runMutation(internal.inAppNotifications.createInAppNotification, {
      userId,
      type: "individual",
      title: trimmedTitle,
      body: trimmedBody,
      url: "/",
    });

    // Look up subscription
    const subscription = await ctx.runQuery(internal.pushSubscriptions.getSubscriptionByUserId, {
      userId,
    });

    if (!subscription?.isActive || !subscription.endpoint) {
      // No push subscription — fall back to email
      try {
        await ctx.runAction(internal.email.sendCoachNotificationEmail, {
          userId,
          title: trimmedTitle,
          body: trimmedBody,
        });
        await ctx.runMutation(internal.notificationLog.logNotification, {
          type: "individual",
          title: trimmedTitle,
          body: trimmedBody,
          recipientCount: 1,
          recipientUserId: userId,
          sentBy: coachId,
          status: "sent",
        });
        return;
      } catch {
        await ctx.runMutation(internal.notificationLog.logNotification, {
          type: "individual",
          title: trimmedTitle,
          body: trimmedBody,
          recipientCount: 0,
          recipientUserId: userId,
          sentBy: coachId,
          status: "failed",
          failedCount: 1,
        });
        throw new Error("Client has no push subscription and email fallback failed");
      }
    }

    try {
      await sendWebPushNotification(
        {
          endpoint: subscription.endpoint,
          p256dh: subscription.p256dh,
          auth: subscription.auth,
        },
        { title: trimmedTitle, body: trimmedBody, url: "/" },
      );

      await ctx.runMutation(internal.notificationLog.logNotification, {
        type: "individual",
        title: trimmedTitle,
        body: trimmedBody,
        recipientCount: 1,
        recipientUserId: userId,
        sentBy: coachId,
        status: "sent",
      });
    } catch (err) {
      if (err instanceof SubscriptionExpiredError) {
        await ctx.runMutation(internal.pushSubscriptions.deactivateByEndpoint, {
          endpoint: subscription.endpoint,
        });
      }
      // Push failed — try email fallback
      try {
        await ctx.runAction(internal.email.sendCoachNotificationEmail, {
          userId,
          title: trimmedTitle,
          body: trimmedBody,
        });
        await ctx.runMutation(internal.notificationLog.logNotification, {
          type: "individual",
          title: trimmedTitle,
          body: trimmedBody,
          recipientCount: 1,
          recipientUserId: userId,
          sentBy: coachId,
          status: "sent",
        });
        return;
      } catch {
        await ctx.runMutation(internal.notificationLog.logNotification, {
          type: "individual",
          title: trimmedTitle,
          body: trimmedBody,
          recipientCount: 0,
          recipientUserId: userId,
          sentBy: coachId,
          status: "failed",
          failedCount: 1,
        });
        throw new Error("Push notification failed and email fallback also failed");
      }
    }
  },
});

/** Coach action: broadcast notification to all active clients (push + email fallback) */
export const broadcastToAllActive = action({
  args: {
    title: v.string(),
    body: v.string(),
  },
  handler: async (ctx, { title, body }) => {
    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();
    if (!trimmedTitle || trimmedTitle.length > 50) throw new Error("Title must be 1-50 characters");
    if (!trimmedBody || trimmedBody.length > 150) throw new Error("Body must be 1-150 characters");

    const coachId = await requireCoachAction(ctx, internal.helpers.getCoachProfileInternal);

    // Rate limit: 5 broadcasts per day per coach
    const broadcastLimit = await ctx.runMutation(internal.rateLimiter.checkRateLimit, {
      name: "broadcastNotification",
      key: coachId,
    });
    if (!broadcastLimit.ok) {
      throw new Error(
        `Too many broadcasts — try again in ${Math.ceil(broadcastLimit.retryAfter / 1000)}s`,
      );
    }

    // Check global toggle
    const config = await ctx.runQuery(internal.systemConfig.getConfigInternal, {
      key: "notifications_enabled",
    });
    if (config?.value === false) {
      throw new Error("Notifications are currently disabled");
    }

    // Fetch push subscriptions and all active client profiles in parallel
    const [subscriptions, allActiveProfiles] = await Promise.all([
      ctx.runQuery(internal.pushSubscriptions.getAllActiveSubscriptions),
      ctx.runQuery(internal.pushSubscriptions.getAllActiveClientProfiles),
    ]);

    // Create in-app notifications for ALL active clients (never lost guarantee)
    const allUserIds = allActiveProfiles.map((p) => p.userId);
    const BULK_CHUNK = 500;
    for (let i = 0; i < allUserIds.length; i += BULK_CHUNK) {
      await ctx.runMutation(internal.inAppNotifications.createBulkInAppNotifications, {
        userIds: allUserIds.slice(i, i + BULK_CHUNK),
        title: trimmedTitle,
        body: trimmedBody,
      });
    }

    // Track unique users reached vs failed (not delivery attempts)
    const reachedUserIds = new Set<string>();
    const failedUserIds = new Set<string>();

    // --- Phase 1: Push notifications to clients with active subscriptions ---
    const CHUNK_SIZE = 50;
    const expiredEndpoints: string[] = [];

    for (let i = 0; i < subscriptions.length; i += CHUNK_SIZE) {
      const chunk = subscriptions.slice(i, i + CHUNK_SIZE);
      const results = await Promise.allSettled(
        chunk.map((sub) =>
          sendWebPushNotification(
            { endpoint: sub.endpoint, p256dh: sub.p256dh, auth: sub.auth },
            { title: trimmedTitle, body: trimmedBody, url: "/" },
          ),
        ),
      );

      for (let j = 0; j < results.length; j++) {
        const result = results[j];
        if (result.status === "fulfilled") {
          reachedUserIds.add(chunk[j].userId);
        } else {
          if (result.reason instanceof SubscriptionExpiredError) {
            expiredEndpoints.push(chunk[j].endpoint);
          }
          // Push failed — will try email fallback in phase 2
        }
      }
    }

    // Deactivate all expired subscriptions in parallel
    await Promise.all(
      expiredEndpoints.map((endpoint) =>
        ctx.runMutation(internal.pushSubscriptions.deactivateByEndpoint, { endpoint }),
      ),
    );

    // --- Phase 2: Email fallback for clients NOT reached via push ---
    const emailTargets = allActiveProfiles.filter((p) => !reachedUserIds.has(p.userId));

    for (let i = 0; i < emailTargets.length; i += CHUNK_SIZE) {
      const chunk = emailTargets.slice(i, i + CHUNK_SIZE);
      const results = await Promise.allSettled(
        chunk.map((p) =>
          ctx.runAction(internal.email.sendCoachNotificationEmail, {
            userId: p.userId,
            title: trimmedTitle,
            body: trimmedBody,
          }),
        ),
      );

      for (let j = 0; j < results.length; j++) {
        if (results[j].status === "fulfilled") {
          reachedUserIds.add(chunk[j].userId);
        } else {
          failedUserIds.add(chunk[j].userId);
        }
      }
    }

    const sentCount = reachedUserIds.size;
    const failedCount = failedUserIds.size;

    const status =
      failedCount === 0
        ? ("sent" as const)
        : sentCount === 0
          ? ("failed" as const)
          : ("partial" as const);

    await ctx.runMutation(internal.notificationLog.logNotification, {
      type: "broadcast",
      title: trimmedTitle,
      body: trimmedBody,
      recipientCount: sentCount,
      sentBy: coachId,
      status,
      failedCount: failedCount > 0 ? failedCount : undefined,
    });

    return { sent: sentCount, failed: failedCount };
  },
});
