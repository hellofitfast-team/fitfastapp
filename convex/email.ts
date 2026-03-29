"use node";

import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { internal } from "./_generated/api";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/`/g, "&#96;");
}

// ---------------------------------------------------------------------------
// Email sending helper
// ---------------------------------------------------------------------------

async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "FitFast <noreply@fitfast.app>";
  if (!apiKey) {
    console.warn(
      "[Email] RESEND_API_KEY not configured — skipping email send. Plans are still saved.",
    );
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({ from, to, subject, html });
  if (error) throw new Error(`Resend error: ${error.message}`);
}

// ---------------------------------------------------------------------------
// Shared email layout with branded header
// ---------------------------------------------------------------------------

function emailWrapper(isAr: boolean, content: string): string {
  return `
    <div style="background:#f5f5f4;padding:32px 16px">
      <div dir="${isAr ? "rtl" : "ltr"}" style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden">
        <div style="background:#1c1917;padding:24px 32px;text-align:center">
          <span style="font-size:24px;font-weight:900;letter-spacing:-0.5px;color:#ffffff;font-style:italic;text-transform:uppercase">Fit<span style="color:#FF4500">Fast</span></span>
        </div>
        <div style="padding:32px">
          ${content}
        </div>
        <div style="border-top:1px solid #e7e5e4;padding:20px 32px">
          <p style="color:#44403c;font-size:13px;margin:0 0 4px;font-weight:600">${isAr ? "مع تحياتي،" : "Best regards,"}</p>
          <p style="color:#FF4500;font-size:14px;margin:0 0 2px;font-weight:700">${isAr ? "محمد خالد" : "Mohamed Khaled"}</p>
          <p style="color:#78716c;font-size:12px;margin:0">${isAr ? "مدربك في فيت فاست" : "Your FitFast Coach"}</p>
        </div>
        <div style="border-top:1px solid #e7e5e4;padding:12px 32px;text-align:center">
          <p style="color:#a8a29e;font-size:11px;margin:0">© ${new Date().getFullYear()} FitFast. ${isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
        </div>
      </div>
    </div>`;
}

// ---------------------------------------------------------------------------
// Bilingual email templates
// ---------------------------------------------------------------------------

function getWelcomeEmail(fullName: string, language: "en" | "ar") {
  const isAr = language === "ar";
  const safeName = escapeHtml(fullName);
  const clientUrl = process.env.CLIENT_APP_URL ?? "https://client.fitfast.app";
  const loginLink = `${clientUrl}/login`;

  return {
    subject: isAr
      ? "تمت الموافقة على حسابك في فيت فاست! 🎉"
      : "Your FitFast account has been approved! 🎉",
    html: emailWrapper(
      isAr,
      `
        <h2 style="color:#10B981;margin:0 0 16px">${isAr ? `أهلاً ${safeName}!` : `Hey ${safeName}!`}</h2>
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "تمت الموافقة على حسابك. يمكنك الآن تسجيل الدخول وبدء رحلتك في اللياقة البدنية."
            : "Your account has been approved. You can now sign in and start your fitness journey."
        }</p>
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "أكمل التقييم الأولي للحصول على خطة وجباتك وتمارينك المخصصة."
            : "Complete your initial assessment to get your personalized meal and workout plans."
        }</p>
        <div style="text-align:center;margin:32px 0">
          <a href="${loginLink}" style="background:#10B981;color:#fff;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:600;display:inline-block">
            ${isAr ? "ادخل إلى حسابك" : "Access Your Account"}
          </a>
        </div>`,
    ),
  };
}

function getPlanReadyEmail(fullName: string, language: "en" | "ar") {
  const isAr = language === "ar";
  const safeName = escapeHtml(fullName);
  const clientUrl = process.env.CLIENT_APP_URL ?? "https://client.fitfast.app";
  const appLink = clientUrl;
  return {
    subject: isAr ? "خططك الجديدة جاهزة! 💪" : "Your new plans are ready! 💪",
    html: emailWrapper(
      isAr,
      `
        <h2 style="color:#10B981;margin:0 0 16px">${isAr ? `${safeName}، خططك جاهزة!` : `${safeName}, your plans are ready!`}</h2>
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "تم إنشاء خطة الوجبات وخطة التمارين الجديدة بنجاح بناءً على آخر تسجيل متابعة."
            : "Your new meal plan and workout plan have been generated based on your latest check-in."
        }</p>
        <div style="text-align:center;margin:32px 0">
          <a href="${appLink}" style="background:#10B981;color:#fff;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:600;display:inline-block">
            ${isAr ? "عرض خططك" : "View Your Plans"}
          </a>
        </div>`,
    ),
  };
}

function getTicketReplyEmail(
  fullName: string,
  ticketSubject: string,
  coachMessage: string,
  language: "en" | "ar",
) {
  const isAr = language === "ar";
  const safeName = escapeHtml(fullName);
  const safeSubject = escapeHtml(ticketSubject);
  const safeMessage = escapeHtml(coachMessage);
  const clientUrl = process.env.CLIENT_APP_URL ?? "https://client.fitfast.app";
  const ticketsLink = `${clientUrl}/tickets`;
  return {
    subject: isAr
      ? `رد المدرب: ${escapeHtml(ticketSubject)}`
      : `Coach replied: ${escapeHtml(ticketSubject)}`,
    html: emailWrapper(
      isAr,
      `
        <h2 style="color:#10B981;margin:0 0 16px">${isAr ? `${safeName}، رد مدربك` : `${safeName}, your coach replied`}</h2>
        <p style="font-weight:600;color:#44403c">${isAr ? "الموضوع:" : "Subject:"} ${safeSubject}</p>
        <div style="background:#f5f5f4;border-radius:8px;padding:16px;margin:16px 0">
          <p style="margin:0;color:#44403c">${safeMessage}</p>
        </div>
        <div style="text-align:center;margin:32px 0">
          <a href="${ticketsLink}" style="background:#10B981;color:#fff;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:600;display:inline-block">
            ${isAr ? "عرض المحادثة" : "View Conversation"}
          </a>
        </div>`,
    ),
  };
}

function getReminderEmail(fullName: string, language: "en" | "ar") {
  const isAr = language === "ar";
  const safeName = escapeHtml(fullName);
  const clientUrl = process.env.CLIENT_APP_URL ?? "https://client.fitfast.app";
  const checkInLink = `${clientUrl}/check-in`;
  return {
    subject: isAr ? "حان وقت المتابعة! 📊" : "Time for your check-in! 📊",
    html: emailWrapper(
      isAr,
      `
        <h2 style="color:#10B981;margin:0 0 16px">${isAr ? `${safeName}، حان وقت المتابعة` : `${safeName}, it's check-in time`}</h2>
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "سجّل تقدمك اليوم حتى يتمكن مدربك من تحديث خططك."
            : "Track your progress today so your coach can update your plans."
        }</p>
        <div style="text-align:center;margin:32px 0">
          <a href="${checkInLink}" style="background:#FF4500;color:#fff;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:600;display:inline-block">
            ${isAr ? "سجّل متابعتك" : "Start Check-in"}
          </a>
        </div>`,
    ),
  };
}

function getRejectionEmail(fullName: string, rejectionReason: string, language: "en" | "ar") {
  const isAr = language === "ar";
  const safeName = escapeHtml(fullName);
  const safeReason = escapeHtml(rejectionReason);
  return {
    subject: isAr ? "تحديث على طلبك في فيت فاست" : "Your FitFast Application Update",
    html: emailWrapper(
      isAr,
      `
        <h2 style="color:#374151;margin:0 0 16px">${isAr ? `${safeName}، شكرًا لاهتمامك` : `Hi ${safeName},`}</h2>
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "شكرًا لتقديمك للانضمام إلى فيت فاست. بعد مراجعة طلبك، لم نتمكن من الموافقة عليه في هذا الوقت."
            : "Thank you for applying to join FitFast. After reviewing your application, we're unable to approve it at this time."
        }</p>
        ${
          safeReason
            ? `
        <div style="background:#f5f5f4;border-${isAr ? "right" : "left"}:4px solid #d1d5db;border-radius:4px;padding:16px;margin:16px 0">
          <p style="margin:0;font-weight:600;color:#374151">${isAr ? "السبب:" : "Reason:"}</p>
          <p style="margin:8px 0 0;color:#78716c">${safeReason}</p>
        </div>
        `
            : ""
        }
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "يمكنك إعادة التقديم في المستقبل. إذا كان لديك أي أسئلة، يُرجى التواصل معنا."
            : "You're welcome to reapply in the future. If you have any questions, please reach out."
        }</p>`,
    ),
  };
}

function getInvitationEmail(fullName: string, inviteToken: string, language: "en" | "ar") {
  const isAr = language === "ar";
  const safeName = escapeHtml(fullName);
  const clientUrl = process.env.CLIENT_APP_URL ?? "https://client.fitfast.app";
  const acceptLink = `${clientUrl}/accept-invite?token=${encodeURIComponent(inviteToken)}`;

  return {
    subject: isAr
      ? "مرحبًا بك في فيت فاست! أنشئ حسابك 🎉"
      : "Welcome to FitFast! Create your account 🎉",
    html: emailWrapper(
      isAr,
      `
        <h2 style="color:#FF4500;margin:0 0 16px">${isAr ? `أهلاً ${safeName}!` : `Hey ${safeName}!`}</h2>
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "شكرًا لتسجيلك في فيت فاست! اضغط على الزر أدناه لإنشاء حسابك وتعيين كلمة المرور. بعد ذلك سيراجع مدربك طلبك."
            : "Thanks for signing up for FitFast! Click the button below to create your account and set your password. Your coach will then review your application."
        }</p>
        <div style="text-align:center;margin:32px 0">
          <a href="${acceptLink}" style="background:#FF4500;color:#fff;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:600;display:inline-block">
            ${isAr ? "أنشئ حسابك" : "Create Your Account"}
          </a>
        </div>
        <p style="color:#a8a29e;font-size:13px">${
          isAr ? "هذا الرابط مخصص لك فقط." : "This link is unique to you."
        }</p>`,
    ),
  };
}

function getSignupReceivedEmail(fullName: string, language: "en" | "ar") {
  const isAr = language === "ar";
  const safeName = escapeHtml(fullName);
  return {
    subject: isAr ? "تم استلام طلبك في فيت فاست 📋" : "FitFast Signup Received 📋",
    html: emailWrapper(
      isAr,
      `
        <h2 style="color:#FF4500;margin:0 0 16px">${isAr ? `أهلاً ${safeName}!` : `Hey ${safeName}!`}</h2>
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "شكرًا لتسجيلك في فيت فاست! لقد استلمنا طلبك وإثبات الدفع."
            : "Thank you for signing up for FitFast! We've received your application and payment proof."
        }</p>
        <p style="color:#44403c;line-height:1.6">${
          isAr
            ? "مدربك يراجع طلبك الآن. ستصلك رسالة بريد إلكتروني بمجرد الموافقة على حسابك."
            : "Your coach is reviewing your application now. You'll receive an email once your account is approved."
        }</p>
        <div style="background:#f5f5f4;border-radius:8px;padding:16px;margin:24px 0">
          <p style="margin:0;color:#78716c;font-size:14px">${
            isAr
              ? "⏱ تستغرق المراجعة عادةً من 24 إلى 48 ساعة"
              : "⏱ Review typically takes 24–48 hours"
          }</p>
        </div>`,
    ),
  };
}

// ---------------------------------------------------------------------------
// Internal actions — called from workflows and other actions
// ---------------------------------------------------------------------------

export const sendSignupReceivedEmail = internalAction({
  args: {
    email: v.string(),
    fullName: v.string(),
    language: v.union(v.literal("en"), v.literal("ar")),
  },
  handler: async (_ctx, { email, fullName, language }): Promise<void> => {
    const { subject, html } = getSignupReceivedEmail(fullName, language);
    await sendEmail(email, subject, html);
  },
});

export const sendInvitationEmail = internalAction({
  args: {
    email: v.string(),
    fullName: v.string(),
    inviteToken: v.string(),
    language: v.union(v.literal("en"), v.literal("ar")),
  },
  handler: async (_ctx, { email, fullName, inviteToken, language }): Promise<void> => {
    const { subject, html } = getInvitationEmail(fullName, inviteToken, language);
    await sendEmail(email, subject, html);
  },
});

export const sendWelcomeEmail = internalAction({
  args: {
    email: v.string(),
    fullName: v.string(),
    language: v.union(v.literal("en"), v.literal("ar")),
  },
  handler: async (_ctx, { email, fullName, language }): Promise<void> => {
    const { subject, html } = getWelcomeEmail(fullName, language);
    await sendEmail(email, subject, html);
  },
});

export const sendPlanReadyEmail = internalAction({
  args: { userId: v.string(), force: v.optional(v.boolean()) },
  handler: async (ctx, { userId, force }): Promise<void> => {
    // Skip email if user has active push subscription (unless forced by push failure fallback)
    if (!force) {
      const subscription = await ctx.runQuery(internal.pushSubscriptions.getSubscriptionByUserId, {
        userId,
      });
      if (subscription?.isActive) return;
    }

    const profile = await ctx.runQuery(internal.helpers.getProfileInternal, { userId });
    if (!profile?.email) return;

    const { subject, html } = getPlanReadyEmail(profile.fullName ?? "there", profile.language);
    await sendEmail(profile.email, subject, html);
  },
});

export const sendTicketReplyEmail = internalAction({
  args: {
    ticketId: v.id("tickets"),
    coachMessage: v.string(),
  },
  handler: async (ctx, { ticketId, coachMessage }): Promise<void> => {
    const ticket = await ctx.runQuery(internal.helpers.getTicketInternal, { ticketId });
    if (!ticket) return;

    const profile = await ctx.runQuery(internal.helpers.getProfileInternal, {
      userId: ticket.userId,
    });
    if (!profile?.email) return;

    const { subject, html } = getTicketReplyEmail(
      profile.fullName ?? "there",
      ticket.subject,
      coachMessage,
      profile.language,
    );
    await sendEmail(profile.email, subject, html);
  },
});

export const sendReminderEmail = internalAction({
  args: { userId: v.string() },
  handler: async (ctx, { userId }): Promise<void> => {
    // Skip email if user has active push subscription
    const subscription = await ctx.runQuery(internal.pushSubscriptions.getSubscriptionByUserId, {
      userId,
    });
    if (subscription?.isActive) return;

    const profile = await ctx.runQuery(internal.helpers.getProfileInternal, { userId });
    if (!profile?.email) return;

    const { subject, html } = getReminderEmail(profile.fullName ?? "there", profile.language);
    await sendEmail(profile.email, subject, html);
  },
});

export const sendRejectionEmail = internalAction({
  args: {
    email: v.string(),
    fullName: v.string(),
    rejectionReason: v.string(),
    language: v.union(v.literal("en"), v.literal("ar")),
  },
  handler: async (_ctx, { email, fullName, rejectionReason, language }): Promise<void> => {
    const { subject, html } = getRejectionEmail(fullName, rejectionReason, language);
    await sendEmail(email, subject, html);
  },
});

/**
 * Send admin/coach invite email with a setup link.
 * The recipient clicks the link to set their own password.
 */
export const sendAdminInviteEmail = internalAction({
  args: {
    email: v.string(),
    fullName: v.string(),
    setupLink: v.string(),
  },
  handler: async (_ctx, { email, fullName, setupLink }): Promise<void> => {
    const safeName = escapeHtml(fullName);
    const safeLink = escapeHtml(setupLink);

    const subject = "You're Invited to FitFast Coach Panel";
    const html = emailWrapper(
      false,
      `
        <h2 style="color:#FF4500;margin:0 0 16px">Welcome to FitFast, ${safeName}!</h2>
        <p style="color:#44403c;line-height:1.6">You've been invited to join FitFast as a coach. Click the button below to set up your account and create your password.</p>
        <div style="text-align:center;margin:32px 0">
          <a href="${safeLink}" style="background:#FF4500;color:#fff;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:600;display:inline-block">
            Set Up Your Account
          </a>
        </div>
        <p style="color:#a8a29e;font-size:13px">This link expires in 7 days. If you didn't expect this invitation, you can safely ignore this email.</p>`,
    );

    await sendEmail(email, subject, html);
  },
});

/** Coach-initiated notification email (used as fallback when push unavailable) */
function getCoachNotificationEmail(
  fullName: string,
  title: string,
  body: string,
  language: "en" | "ar",
) {
  const isAr = language === "ar";
  const safeName = escapeHtml(fullName);
  const safeTitle = escapeHtml(title);
  const safeBody = escapeHtml(body);
  return {
    subject: isAr ? `رسالة من مدربك: ${safeTitle}` : `Message from your coach: ${safeTitle}`,
    html: emailWrapper(
      isAr,
      `
        <h2 style="color:#10B981;margin:0 0 16px">${isAr ? `${safeName}، رسالة من مدربك` : `${safeName}, a message from your coach`}</h2>
        <div style="background:#f5f5f4;border-radius:8px;padding:16px;margin:16px 0">
          <p style="margin:0 0 8px;font-weight:600;color:#44403c">${safeTitle}</p>
          <p style="margin:0;color:#44403c">${safeBody}</p>
        </div>
        <div style="text-align:center;margin:32px 0">
          <a href="${process.env.CLIENT_APP_URL ?? "https://client.fitfast.app"}" style="background:#10B981;color:#fff;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:600;display:inline-block">
            ${isAr ? "افتح التطبيق" : "Open App"}
          </a>
        </div>`,
    ),
  };
}

export const sendCoachNotificationEmail = internalAction({
  args: {
    userId: v.string(),
    title: v.string(),
    body: v.string(),
  },
  handler: async (ctx, { userId, title, body }): Promise<void> => {
    const profile = await ctx.runQuery(internal.helpers.getProfileInternal, { userId });
    if (!profile?.email) {
      throw new Error("Client has no email address on profile");
    }

    const { subject, html } = getCoachNotificationEmail(
      profile.fullName ?? "there",
      title,
      body,
      profile.language,
    );
    await sendEmail(profile.email, subject, html);
  },
});

/** @deprecated Use sendAdminInviteEmail instead */
export const sendAdminCredentialsEmail = internalAction({
  args: {
    email: v.string(),
    fullName: v.string(),
    password: v.string(),
    adminUrl: v.optional(v.string()),
  },
  handler: async (_ctx, { email, fullName, password, adminUrl }): Promise<void> => {
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePassword = escapeHtml(password);
    const loginUrl = adminUrl ?? "https://admin.fitfast.app";

    const subject = "Your FitFast Coach Account is Ready";
    const html = `
      <div dir="ltr" style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h1 style="color:#FF4500">Welcome to FitFast, ${safeName}!</h1>
        <p>Your coach account has been created. Here are your login credentials:</p>
        <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin:24px 0">
          <p style="margin:0 0 8px"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0 0 8px"><strong>Password:</strong> <code style="background:#fee2e2;padding:2px 8px;border-radius:4px;font-size:15px">${safePassword}</code></p>
        </div>
        <div style="text-align:center;margin:32px 0">
          <a href="${loginUrl}" style="background:#FF4500;color:#fff;padding:14px 32px;border-radius:12px;text-decoration:none;font-weight:600;display:inline-block">
            Sign In to Coach Panel
          </a>
        </div>
        <p style="color:#ef4444;font-size:13px;font-weight:600">⚠️ Please change your password after your first login.</p>
        <p style="color:#6b7280;font-size:12px;margin-top:32px">— FitFast</p>
      </div>`;

    await sendEmail(email, subject, html);
  },
});
