import {
  e as B,
  u as q,
  a as y,
  d as I,
  r as x,
  c as O,
  j as e,
  L as V,
} from "./index-BVud5pVb.js";
import { t as C } from "./use-toast-aSGH-up_.js";
import { E as Y } from "./empty-state-BQ3yrOyd.js";
import { a as z } from "./skeleton-eFLYgFmv.js";
import { I as H } from "./input-Bb6vjdWa.js";
import { F as j, T as Q, U as X } from "./textarea-_-7z4I7D.js";
import { a as Z } from "./constants-BEcy9OoF.js";
import { u as G } from "./index.esm-D0Yx9_aU.js";
import { a as J, o as K, s as M, e as W } from "./zod-B0rGGjPA.js";
import { c as L } from "./cn-CDN07tui.js";
import { t as D, d as ee } from "./format-zSzWEmcW.js";
import { M as te } from "./message-square-plus-C_t3v5Qb.js";
import { L as se } from "./loader-circle-BpriWBmn.js";
import { S as re } from "./send-BC_RPN8O.js";
import { M as F } from "./message-square-ClKQK_G-.js";
import { C as ae } from "./chevron-right-BUhXz13O.js";
import { C as oe } from "./circle-check-VkPdAKB-.js";
import { C as ie } from "./clock-4g7FCPWC.js";
import "./button-B1_2FTXK.js";
import "./createLucideIcon-CflinLEd.js";
function ce() {
  const { isAuthenticated: t } = B(),
    r = q(y.tickets.getMyTickets, t ? {} : "skip"),
    g = I(y.tickets.createTicket),
    [n, o] = x.useState(!1),
    [l, d] = x.useState(null);
  return {
    tickets: r ?? [],
    isLoading: t && r === void 0,
    error: null,
    createTicket: async (u) => {
      (o(!0), d(null));
      try {
        const i = await g(u);
        return (o(!1), i);
      } catch (i) {
        const k = i instanceof Error ? i.message : "Failed to create ticket";
        return (d(k), o(!1), null);
      }
    },
    isCreating: n,
    createError: l,
  };
}
function ne(t) {
  return K({
    subject: M().min(3, t("tickets.subjectMinLength")).max(100, t("tickets.subjectMaxLength")),
    category: W(["meal_issue", "workout_issue", "technical", "bug_report", "other"]),
    description: M().max(3e3, t("tickets.descriptionMaxLength")).optional(),
  });
}
function le(t, r) {
  const n = Date.now() - t,
    o = Math.floor(n / 6e4),
    l = Math.floor(n / 36e5);
  if (o < 1) return r === "ar" ? "الآن" : "just now";
  if (o < 60) return r === "ar" ? `${D(o, r)}د` : `${o}m ago`;
  if (l < 24) return r === "ar" ? `${D(l, r)}س` : `${l}h ago`;
  const d = new Date(t),
    f = new Date(),
    u = new Date(f);
  return (
    u.setDate(u.getDate() - 1),
    d.toDateString() === u.toDateString()
      ? r === "ar"
        ? "أمس"
        : "Yesterday"
      : d.toLocaleDateString(ee(r), { month: "short", day: "numeric" })
  );
}
function Le() {
  var T, _;
  const { t, i18n: r } = O(),
    g = r.language,
    { tickets: n, isLoading: o, createTicket: l, createError: d } = ce(),
    f = I(y.storage.generateUploadUrl),
    u = ne((s) => t(s)),
    {
      register: i,
      handleSubmit: k,
      formState: { errors: b, isSubmitting: m },
      reset: E,
    } = G({
      resolver: J(u),
      mode: "onBlur",
      reValidateMode: "onBlur",
      defaultValues: { subject: "", category: "meal_issue", description: "" },
    }),
    [U, w] = x.useState(!1),
    [p, v] = x.useState(null),
    [N, S] = x.useState(!1),
    $ = async () => {
      if (p) {
        S(!0);
        try {
          const s = await f({ purpose: "ticket_screenshot" }),
            a = await fetch(s, { method: "POST", headers: { "Content-Type": p.type }, body: p });
          if (!a.ok) throw new Error(`Upload failed: ${a.status}`);
          const { storageId: c } = await a.json();
          return c;
        } catch {
          C({
            title: t("tickets.uploadFailed"),
            description: t("tickets.uploadFailedDescription"),
            variant: "destructive",
          });
          return;
        } finally {
          S(!1);
        }
      }
    },
    P = async (s) => {
      var h;
      const a = await $();
      (await l({
        subject: s.subject.trim(),
        category: s.category,
        description: ((h = s.description) == null ? void 0 : h.trim()) || void 0,
        screenshotId: a,
      }))
        ? (E(), v(null), w(!0), setTimeout(() => w(!1), 3e3))
        : C({ title: t("tickets.submitFailed"), description: d || void 0, variant: "destructive" });
    },
    A = (s) => {
      switch (s) {
        case "open":
          return "bg-success-500/10 text-success-500";
        case "coach_responded":
          return "bg-warning-500/10 text-warning-500";
        case "closed":
          return "bg-neutral-100 text-muted-foreground";
        default:
          return "";
      }
    },
    R = (s) => {
      switch (s) {
        case "open":
          return e.jsx(ie, { className: "h-4 w-4" });
        case "coach_responded":
          return e.jsx(F, { className: "h-4 w-4" });
        case "closed":
          return e.jsx(oe, { className: "h-4 w-4" });
        default:
          return null;
      }
    };
  return e.jsxs("div", {
    className: "mx-auto max-w-3xl space-y-6 py-4 lg:px-6 lg:py-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", { className: "text-2xl font-bold", children: t("tickets.title") }),
          e.jsx("p", {
            className: "text-muted-foreground mt-1 text-sm",
            children: t("tickets.myTickets"),
          }),
        ],
      }),
      U &&
        e.jsx("div", {
          className:
            "bg-success-500/10 border-success-500/20 animate-slide-up rounded-lg border p-3 text-center",
          children: e.jsx("p", {
            className: "text-success-500 text-sm font-medium",
            children: t("tickets.ticketSubmitted"),
          }),
        }),
      e.jsxs("div", {
        className: "border-border bg-card shadow-card overflow-hidden rounded-xl border",
        children: [
          e.jsxs("div", {
            className: "border-border bg-primary/5 flex items-center gap-2 border-b p-4",
            children: [
              e.jsx(te, { className: "text-primary h-4 w-4" }),
              e.jsx("h2", { className: "text-sm font-semibold", children: t("tickets.newTicket") }),
            ],
          }),
          e.jsxs("form", {
            onSubmit: k(P),
            className: "space-y-4 p-4",
            children: [
              e.jsx(j, {
                label: t("tickets.subject"),
                error: (T = b.subject) == null ? void 0 : T.message,
                children: e.jsx(H, {
                  ...i("subject"),
                  placeholder: t("tickets.subjectPlaceholder"),
                  error: !!b.subject,
                  "aria-invalid": b.subject ? "true" : "false",
                  disabled: m,
                }),
              }),
              e.jsx(j, {
                label: t("tickets.category"),
                children: e.jsxs("select", {
                  ...i("category"),
                  className:
                    "border-input bg-card focus:ring-ring h-11 w-full cursor-pointer appearance-none rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                  disabled: m,
                  children: [
                    e.jsx("option", {
                      value: "meal_issue",
                      children: t("tickets.categories.mealIssue"),
                    }),
                    e.jsx("option", {
                      value: "workout_issue",
                      children: t("tickets.categories.workoutIssue"),
                    }),
                    e.jsx("option", {
                      value: "technical",
                      children: t("tickets.categories.technical"),
                    }),
                    e.jsx("option", {
                      value: "bug_report",
                      children: t("tickets.categories.bugReport"),
                    }),
                    e.jsx("option", { value: "other", children: t("tickets.categories.other") }),
                  ],
                }),
              }),
              e.jsx(j, {
                label: t("tickets.description"),
                optional: !0,
                optionalLabel: t("tickets.optional"),
                error: (_ = b.description) == null ? void 0 : _.message,
                children: e.jsx(Q, {
                  ...i("description"),
                  placeholder: t("tickets.descriptionPlaceholder"),
                  disabled: m,
                }),
              }),
              e.jsx(j, {
                label: t("tickets.screenshot"),
                optional: !0,
                optionalLabel: t("tickets.optional"),
                children: e.jsxs("label", {
                  className:
                    "border-border flex h-16 cursor-pointer items-center justify-center rounded-lg border border-dashed bg-neutral-50 transition-colors hover:bg-neutral-100",
                  children: [
                    e.jsx("input", {
                      type: "file",
                      accept: "image/*",
                      className: "hidden",
                      onChange: (s) => {
                        var c;
                        const a = (c = s.target.files) == null ? void 0 : c[0];
                        a && a.size <= Z && v(a);
                      },
                      disabled: m || N,
                    }),
                    e.jsxs("div", {
                      className: "text-muted-foreground flex items-center gap-2",
                      children: [
                        e.jsx(X, { className: "h-4 w-4" }),
                        e.jsx("span", {
                          className: "text-xs",
                          children: p ? p.name : t("tickets.uploadHint"),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx("button", {
                type: "submit",
                disabled: m || N,
                className:
                  "bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-all active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50",
                children: m
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(se, { className: "h-4 w-4 animate-spin" }),
                        t("tickets.sending"),
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [e.jsx(re, { className: "h-4 w-4" }), t("tickets.submitTicket")],
                    }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        children: [
          e.jsx("h2", {
            className: "text-muted-foreground mb-3 text-sm font-semibold",
            children: t("tickets.myTickets"),
          }),
          o
            ? e.jsx("div", {
                className: "space-y-3",
                children: [0, 1, 2].map((s) => e.jsx(z, {}, s)),
              })
            : n.length === 0
              ? e.jsx(Y, {
                  icon: F,
                  title: t("emptyStates.noTickets.title"),
                  description: t("emptyStates.noTickets.description"),
                  action: {
                    label: t("emptyStates.noTickets.action"),
                    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                  },
                })
              : e.jsx("div", {
                  className: "space-y-2",
                  children: n.map((s, a) => {
                    var h;
                    const c = (h = s.messages) == null ? void 0 : h[s.messages.length - 1];
                    return e.jsx(
                      V,
                      {
                        to: "/tickets/$id",
                        params: { id: s._id },
                        className:
                          "border-border bg-card animate-slide-up block rounded-xl border p-4 transition-all hover:bg-neutral-50 active:scale-[0.97]",
                        style: { animationDelay: `${a * 50}ms` },
                        children: e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className: L(
                                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                                s.status === "open"
                                  ? "bg-success-500/10 text-success-500"
                                  : s.status === "coach_responded"
                                    ? "bg-warning-500/10 text-warning-500"
                                    : "text-muted-foreground bg-neutral-100",
                              ),
                              children: R(s.status),
                            }),
                            e.jsxs("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center justify-between gap-2",
                                  children: [
                                    e.jsx("p", {
                                      className: "truncate text-sm font-semibold",
                                      children: s.subject,
                                    }),
                                    e.jsx("span", {
                                      className: L(
                                        "shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium",
                                        A(s.status),
                                      ),
                                      children: t(
                                        `tickets.status.${s.status === "coach_responded" ? "coachResponded" : s.status}`,
                                      ),
                                    }),
                                  ],
                                }),
                                c &&
                                  e.jsx("p", {
                                    className: "text-muted-foreground mt-1 truncate text-xs",
                                    children: c.message,
                                  }),
                                e.jsx("p", {
                                  className: "text-muted-foreground mt-1.5 text-[10px]",
                                  children: le(s._creationTime, g),
                                }),
                              ],
                            }),
                            e.jsx(ae, {
                              className:
                                "text-muted-foreground mt-1 h-4 w-4 shrink-0 rtl:rotate-180",
                            }),
                          ],
                        }),
                      },
                      s._id,
                    );
                  }),
                }),
        ],
      }),
    ],
  });
}
export { Le as component };
