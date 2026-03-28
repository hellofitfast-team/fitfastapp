import { c as u, b as h, u as f, a as g, r as c, j as e } from "./index-BVud5pVb.js";
import { C as n, a as o } from "./card-BCjwpV6H.js";
import { c as a } from "./cn-CDN07tui.js";
import { C as j } from "./circle-check-VkPdAKB-.js";
import { C as d } from "./clock-4g7FCPWC.js";
import { c as l } from "./createLucideIcon-CflinLEd.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ],
  v = l("mail", b);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N = [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  y = l("refresh-cw", N);
function S() {
  const { t } = u("onboarding"),
    r = h(),
    i = f(g.profiles.getMyProfile);
  c.useEffect(() => {
    i &&
      (i.status === "active"
        ? r({ to: "/initial-assessment" })
        : (i.status === "inactive" || i.status === "expired") &&
          r({ to: "/login", search: { error: "rejected" } }));
  }, [i, r]);
  const m = c.useCallback(() => {
      window.location.reload();
    }, []),
    p = [
      {
        icon: j,
        title: t("pending.stepSignupComplete"),
        description: t("pending.stepSignupCompleteDesc"),
        complete: !0,
      },
      {
        icon: d,
        title: t("pending.stepUnderReview"),
        description: t("pending.stepUnderReviewDesc"),
        complete: !1,
        active: !0,
      },
      {
        icon: v,
        title: t("pending.stepApprovalNotification"),
        description: t("pending.stepApprovalNotificationDesc"),
        complete: !1,
      },
    ];
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        className: "py-6 text-center",
        children: [
          e.jsx("div", {
            className:
              "bg-primary/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full",
            children: e.jsx(d, { className: "text-primary h-8 w-8" }),
          }),
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: t("pending.title"),
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-2 text-sm",
            children: t("pending.subtitle"),
          }),
        ],
      }),
      e.jsx(n, {
        children: e.jsx("div", {
          className: "divide-border divide-y",
          children: p.map((s, x) =>
            e.jsxs(
              "div",
              {
                className: a(
                  "flex items-start gap-4 p-5",
                  s.complete && "bg-success-500/5",
                  s.active && "bg-primary/5",
                ),
                children: [
                  e.jsx("div", {
                    className: a(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                      s.complete
                        ? "bg-success-500 text-white"
                        : s.active
                          ? "bg-primary text-white"
                          : "text-muted-foreground bg-neutral-100",
                    ),
                    children: e.jsx(s.icon, { className: "h-5 w-5" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: a(
                          "font-semibold",
                          !s.complete && !s.active && "text-muted-foreground",
                        ),
                        children: s.title,
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground mt-0.5 text-xs",
                        children: s.description,
                      }),
                    ],
                  }),
                ],
              },
              x,
            ),
          ),
        }),
      }),
      e.jsx(n, {
        className: "bg-primary/5 border-primary/20",
        children: e.jsxs(o, {
          className: "p-5",
          children: [
            e.jsx("p", {
              className: "text-muted-foreground mb-1 text-xs",
              children: t("pending.infoLabel"),
            }),
            e.jsx("p", { className: "text-sm font-medium", children: t("pending.message") }),
          ],
        }),
      }),
      i &&
        e.jsx(n, {
          children: e.jsx(o, {
            className: "flex items-center justify-between gap-4 p-5",
            children: e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-muted-foreground mb-1.5 text-xs",
                  children: t("pending.currentStatus"),
                }),
                e.jsx("span", {
                  className:
                    "bg-primary/10 text-primary inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                  children: t(`pending.statuses.${i.status}`),
                }),
              ],
            }),
          }),
        }),
      e.jsxs("button", {
        type: "button",
        onClick: m,
        className:
          "border-border hover:bg-muted flex w-full items-center justify-center gap-2 rounded-xl border bg-neutral-50 p-4 text-sm font-medium transition-colors",
        children: [e.jsx(y, { className: "h-4 w-4" }), t("pending.checkStatus")],
      }),
      e.jsx("div", {
        className: "border-border rounded-xl border bg-neutral-50 p-6 text-center",
        children: e.jsx("p", {
          className: "text-muted-foreground text-xs",
          children: t("pending.approvalTime"),
        }),
      }),
    ],
  });
}
export { S as component };
