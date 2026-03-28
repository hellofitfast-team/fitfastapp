import {
  c as m,
  b as ee,
  u as se,
  a as j,
  d as te,
  f as re,
  r as o,
  j as e,
  L as ae,
  l as ne,
} from "./index-BVud5pVb.js";
import { u as oe } from "./index.esm-D0Yx9_aU.js";
import { a as ie, o as le, e as ce, s as E, l as de } from "./zod-B0rGGjPA.js";
import { c as v } from "./cn-CDN07tui.js";
import { t as l } from "./use-toast-aSGH-up_.js";
import { u as me, b as F, l as ue } from "./format-zSzWEmcW.js";
import { U as xe } from "./user-Y1q6IynD.js";
import { c as x } from "./createLucideIcon-CflinLEd.js";
import { S as he } from "./shield-BE2ncHmf.js";
import { C as ge } from "./chevron-right-BUhXz13O.js";
import { X as pe } from "./x-C2ku7ZUf.js";
import { L as fe } from "./loader-circle-BpriWBmn.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const be = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi",
      },
    ],
  ],
  ye = x("bell", be);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const we = [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
    [
      "path",
      {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196",
      },
    ],
    ["path", { d: "M12 11h4", key: "1jrz19" }],
    ["path", { d: "M12 16h4", key: "n85exb" }],
    ["path", { d: "M8 11h.01", key: "1dfujw" }],
    ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ],
  je = x("clipboard-list", we);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ve = [
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  Ne = x("credit-card", ve);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ke = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  Pe = x("log-out", ke);
function u({ icon: s, title: h, children: g, animationDelay: p = "0ms" }) {
  return e.jsxs("div", {
    className:
      "border-border bg-card shadow-card animate-slide-up overflow-hidden rounded-xl border",
    style: { animationDelay: p },
    children: [
      e.jsxs("div", {
        className: "border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4",
        children: [s, e.jsx("h3", { className: "text-sm font-semibold", children: h })],
      }),
      g,
    ],
  });
}
function De(s) {
  return le({
    fullName: E().min(2, s("nameMinLength")).max(100, s("nameMaxLength")),
    phone: E()
      .regex(/^[\d+\-\s()]*$/, s("invalidPhone"))
      .optional()
      .or(de("")),
    language: ce(["en", "ar"]),
  });
}
function Ie() {
  const { t: s } = m("settings"),
    { t: h } = m("tracking"),
    { t: g } = m("validation"),
    p = De((r) => g(r)),
    { i18n: N } = m(),
    c = N.language,
    L = ee(),
    t = se(j.profiles.getMyProfile),
    k = te(j.profiles.updateProfile),
    {
      register: f,
      handleSubmit: _,
      formState: { errors: i },
      reset: P,
    } = oe({
      resolver: ie(p),
      mode: "onBlur",
      reValidateMode: "onBlur",
      defaultValues: {
        fullName: (t == null ? void 0 : t.fullName) || "",
        phone: (t == null ? void 0 : t.phone) || "",
        language: (t == null ? void 0 : t.language) || "en",
      },
    }),
    $ = re(j.passwordChange.changePassword),
    [A, D] = o.useState("08:00"),
    [z, I] = o.useState(!1),
    [T, C] = o.useState(!1),
    [O, b] = o.useState(!1),
    [n, d] = o.useState({ current: "", new: "", confirm: "" }),
    [S, M] = o.useState(!1);
  (t != null && t.notificationReminderTime && !z && (D(me(t.notificationReminderTime)), I(!0)),
    o.useEffect(() => {
      t && P({ fullName: t.fullName || "", phone: t.phone || "", language: t.language || "en" });
    }, [t, P]));
  const V = async (r) => {
      C(!0);
      try {
        (await k({ fullName: r.fullName, phone: r.phone || void 0, language: r.language }),
          l({ title: s("saveSuccess"), variant: "success" }),
          r.language !== c && N.changeLanguage(r.language));
      } catch (a) {
        (console.error("Failed to update profile:", a),
          l({ title: s("errors.saveFailed"), variant: "destructive" }));
      }
      C(!1);
    },
    y = o.useRef(void 0);
  o.useEffect(() => () => clearTimeout(y.current), []);
  const B = (r) => {
      (D(r),
        clearTimeout(y.current),
        (y.current = setTimeout(async () => {
          try {
            await k({ notificationReminderTime: ue(r) });
          } catch {
            l({ title: s("errors.saveFailed"), variant: "destructive" });
          }
        }, 300)));
    },
    H = () => {
      if (!(t != null && t.planStartDate) || !(t != null && t.planEndDate))
        return { daysRemaining: 0, progressPercentage: 0, formattedEndDate: "--" };
      const r = new Date(),
        a = new Date(t.planEndDate),
        J = new Date(t.planStartDate),
        K = a.getTime() - r.getTime(),
        R = Math.max(0, Math.ceil(K / (1e3 * 60 * 60 * 24))),
        w = Math.ceil((a.getTime() - J.getTime()) / (1e3 * 60 * 60 * 24)),
        W = w - R,
        Y = w > 0 ? Math.min(100, Math.max(0, (W / w) * 100)) : 0,
        Z = F(a, c);
      return { daysRemaining: R, progressPercentage: Y, formattedEndDate: Z };
    },
    { daysRemaining: U, progressPercentage: Q, formattedEndDate: X } = H(),
    q = async () => {
      (await ne.signOut(), L({ to: "/login" }));
    },
    G = async () => {
      if (n.new.length < 8) {
        l({ title: s("passwordTooShort"), variant: "destructive" });
        return;
      }
      if (n.new !== n.confirm) {
        l({ title: s("passwordMismatch"), variant: "destructive" });
        return;
      }
      M(!0);
      try {
        (await $({ currentPassword: n.current, newPassword: n.new }),
          l({ title: s("passwordChanged"), variant: "success" }),
          b(!1),
          d({ current: "", new: "", confirm: "" }));
      } catch (r) {
        const a = r instanceof Error ? r.message : s("errors.saveFailed");
        l({ title: a.includes("incorrect") ? s("wrongPassword") : a, variant: "destructive" });
      } finally {
        M(!1);
      }
    };
  return e.jsxs("div", {
    className: "mx-auto max-w-2xl space-y-5 py-4 lg:px-6 lg:py-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", { className: "text-2xl font-bold", children: s("title") }),
          e.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: s("subtitle") }),
        ],
      }),
      e.jsx(u, {
        icon: e.jsx(xe, { className: "text-primary h-4 w-4" }),
        title: s("profile"),
        animationDelay: "0ms",
        children: e.jsxs("form", {
          onSubmit: _(V),
          className: "space-y-4 p-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("label", {
                  className: "mb-1.5 block text-sm font-medium",
                  children: s("email"),
                }),
                e.jsx("input", {
                  type: "email",
                  value: (t == null ? void 0 : t.email) || "",
                  readOnly: !0,
                  className:
                    "border-input text-muted-foreground h-11 w-full cursor-not-allowed rounded-lg border bg-neutral-50 px-3.5 text-sm",
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("label", {
                  className: "mb-1.5 block text-sm font-medium",
                  children: s("fullName"),
                }),
                e.jsx("input", {
                  type: "text",
                  placeholder: s("namePlaceholder"),
                  ...f("fullName"),
                  className: v(
                    "bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
                    i.fullName ? "border-error-500" : "border-input",
                  ),
                  "aria-invalid": i.fullName ? "true" : "false",
                }),
                i.fullName &&
                  e.jsx("p", {
                    className: "text-error-500 mt-1 text-xs",
                    role: "alert",
                    children: i.fullName.message,
                  }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("label", {
                  className: "mb-1.5 block text-sm font-medium",
                  children: s("phone"),
                }),
                e.jsx("input", {
                  type: "tel",
                  placeholder: s("phonePlaceholder"),
                  ...f("phone"),
                  className: v(
                    "bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
                    i.phone ? "border-error-500" : "border-input",
                  ),
                  "aria-invalid": i.phone ? "true" : "false",
                }),
                i.phone &&
                  e.jsx("p", {
                    className: "text-error-500 mt-1 text-xs",
                    role: "alert",
                    children: i.phone.message,
                  }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("label", {
                  className: "mb-1.5 block text-sm font-medium",
                  children: s("language"),
                }),
                e.jsxs("select", {
                  ...f("language"),
                  className:
                    "border-input bg-card focus:ring-ring h-11 w-full cursor-pointer appearance-none rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
                  children: [
                    e.jsx("option", { value: "en", children: "English" }),
                    e.jsx("option", { value: "ar", children: "العربية" }),
                  ],
                }),
              ],
            }),
            e.jsx("button", {
              type: "submit",
              disabled: T,
              className:
                "bg-primary hover:bg-primary/90 focus-visible:ring-ring w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.97] disabled:opacity-50",
              children: T ? h("saving") : s("saveChanges"),
            }),
          ],
        }),
      }),
      e.jsx(u, {
        icon: e.jsx(ye, { className: "text-primary h-4 w-4" }),
        title: s("notifications"),
        animationDelay: "50ms",
        children: e.jsx("div", {
          className: "space-y-5 p-4",
          children: e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-sm font-medium",
                children: s("reminderTime"),
              }),
              e.jsx("input", {
                type: "time",
                value: A,
                onChange: (r) => B(r.target.value),
                className:
                  "border-input bg-card focus:ring-ring h-11 rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
              }),
            ],
          }),
        }),
      }),
      e.jsx(u, {
        icon: e.jsx(he, { className: "text-primary h-4 w-4" }),
        title: s("account"),
        animationDelay: "100ms",
        children: e.jsxs("div", {
          className: "space-y-3 p-4",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: () => b(!0),
              className:
                "focus-visible:ring-ring border-border w-full rounded-lg border py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              children: s("changePassword"),
            }),
            e.jsxs("button", {
              type: "button",
              onClick: q,
              className:
                "border-error-500/30 bg-error-500/5 text-error-500 hover:bg-error-500/10 focus-visible:ring-error-500/50 flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              children: [e.jsx(Pe, { className: "h-4 w-4" }), s("signOut")],
            }),
          ],
        }),
      }),
      e.jsx(u, {
        icon: e.jsx(Ne, { className: "text-primary h-4 w-4" }),
        title: s("planDetails"),
        animationDelay: "150ms",
        children: e.jsx("div", {
          className: "space-y-4 p-4",
          children:
            t != null && t.planTier
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs("div", {
                      className: "border-border flex items-center justify-between border-b py-2",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground text-xs",
                          children: s("planTier"),
                        }),
                        e.jsx("span", {
                          className: "text-sm font-semibold",
                          children: s(`planTiers.${t.planTier}`),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "border-border flex items-center justify-between border-b py-2",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground text-xs",
                          children: s("planStart"),
                        }),
                        e.jsx("span", {
                          className: "text-sm font-semibold",
                          children: t.planStartDate ? F(t.planStartDate, c) : "--",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "border-border flex items-center justify-between border-b py-2",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground text-xs",
                          children: s("planExpiry"),
                        }),
                        e.jsx("span", { className: "text-sm font-semibold", children: X }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "border-border flex items-center justify-between border-b py-2",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground text-xs",
                          children: s("status"),
                        }),
                        e.jsx("span", {
                          className: v(
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                            t.status === "active"
                              ? "bg-nutrition/10 text-nutrition"
                              : t.status === "expired"
                                ? "bg-error-500/10 text-error-500"
                                : "bg-amber-500/10 text-amber-600",
                          ),
                          children: s(`statuses.${t.status}`),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "border-border rounded-lg border bg-neutral-50 p-4",
                      children: [
                        e.jsx("p", {
                          className: "text-muted-foreground mb-1 text-xs",
                          children: s("daysRemaining"),
                        }),
                        e.jsx("p", { className: "text-3xl font-bold", children: U }),
                        e.jsx("div", {
                          className: "mt-3 h-2 overflow-hidden rounded-full bg-neutral-200",
                          dir: c === "ar" ? "rtl" : "ltr",
                          children: e.jsx("div", {
                            className: "bg-primary h-full rounded-full transition-all",
                            style: { width: `${Q.toFixed(1)}%` },
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : e.jsx("p", {
                  className: "text-muted-foreground py-4 text-center text-sm",
                  children: s("noPlan"),
                }),
        }),
      }),
      e.jsxs(ae, {
        to: "/settings/assessment",
        className:
          "border-border bg-card shadow-card animate-slide-up flex items-center gap-3 overflow-hidden rounded-xl border p-4 transition-colors hover:bg-neutral-50 active:scale-[0.99]",
        style: { animationDelay: "200ms" },
        children: [
          e.jsx("div", {
            className:
              "bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            children: e.jsx(je, { className: "text-primary h-4 w-4" }),
          }),
          e.jsxs("div", {
            className: "min-w-0 flex-1",
            children: [
              e.jsx("p", {
                className: "text-sm font-semibold",
                children: s("assessment.myAssessment"),
              }),
              e.jsx("p", {
                className: "text-muted-foreground text-xs",
                children: s("assessment.myAssessmentDesc"),
              }),
            ],
          }),
          e.jsx(ge, { className: "text-muted-foreground h-4 w-4 shrink-0 rtl:rotate-180" }),
        ],
      }),
      O &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
          children: e.jsxs("div", {
            className: "bg-card w-full max-w-sm rounded-2xl shadow-xl",
            children: [
              e.jsxs("div", {
                className: "border-border flex items-center justify-between border-b p-4",
                children: [
                  e.jsx("h3", {
                    className: "text-sm font-semibold",
                    children: s("changePassword"),
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => b(!1),
                    "aria-label": s("closeDialog"),
                    className:
                      "flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100",
                    children: e.jsx(pe, { className: "h-4 w-4" }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-3 p-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        htmlFor: "current-password",
                        className: "mb-1.5 block text-sm font-medium",
                        children: s("currentPassword"),
                      }),
                      e.jsx("input", {
                        id: "current-password",
                        type: "password",
                        autoComplete: "current-password",
                        value: n.current,
                        onChange: (r) => d((a) => ({ ...a, current: r.target.value })),
                        className:
                          "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        htmlFor: "new-password",
                        className: "mb-1.5 block text-sm font-medium",
                        children: s("newPassword"),
                      }),
                      e.jsx("input", {
                        id: "new-password",
                        type: "password",
                        autoComplete: "new-password",
                        value: n.new,
                        onChange: (r) => d((a) => ({ ...a, new: r.target.value })),
                        className:
                          "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        htmlFor: "confirm-password",
                        className: "mb-1.5 block text-sm font-medium",
                        children: s("confirmNewPassword"),
                      }),
                      e.jsx("input", {
                        id: "confirm-password",
                        type: "password",
                        autoComplete: "new-password",
                        value: n.confirm,
                        onChange: (r) => d((a) => ({ ...a, confirm: r.target.value })),
                        className:
                          "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm transition-colors focus:ring-2 focus:outline-none",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: G,
                    disabled: S || !n.current || !n.new || !n.confirm,
                    className:
                      "bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50",
                    children: [
                      S && e.jsx(fe, { className: "h-4 w-4 animate-spin" }),
                      s("changePassword"),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
export { Ie as component };
