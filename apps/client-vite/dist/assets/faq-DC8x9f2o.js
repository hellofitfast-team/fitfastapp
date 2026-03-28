import { c as y, r as u, u as x, a as p, j as e, L as w } from "./index-BVud5pVb.js";
import { t as v } from "./format-zSzWEmcW.js";
import { S as h } from "./skeleton-eFLYgFmv.js";
import { c } from "./cn-CDN07tui.js";
import { D as q } from "./constants-BEcy9OoF.js";
import { c as k } from "./createLucideIcon-CflinLEd.js";
import { C } from "./chevron-down-DOn0ww8M.js";
import { M as L } from "./message-square-plus-C_t3v5Qb.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  g = k("search", S),
  _ = [
    "checkInFrequency",
    "changeMeals",
    "missWorkout",
    "trackProgress",
    "newPlanTiming",
    "contactCoach",
    "paymentMethods",
    "changeLanguage",
  ];
function R() {
  const { t, i18n: f } = y(),
    d = f.language,
    [o, j] = u.useState(""),
    [r, b] = u.useState(null),
    n = x(p.faqs.getFAQs, { language: d }),
    l = x(p.systemConfig.getConfig, { key: "check_in_frequency_days" }),
    N = Number(l == null ? void 0 : l.value) || q,
    i = n === void 0,
    m = (
      n && n.length > 0
        ? n.map((s) => ({ key: s._id, question: s.question, answer: s.answer }))
        : i
          ? []
          : _.map((s) => ({
              key: s,
              question: t(`faq.questions.${s}.q`),
              answer: t(`faq.questions.${s}.a`, { days: N }),
            }))
    ).filter(
      (s) =>
        s.question.toLowerCase().includes(o.toLowerCase()) ||
        s.answer.toLowerCase().includes(o.toLowerCase()),
    );
  return e.jsxs("div", {
    className: "mx-auto max-w-3xl space-y-5 py-4 lg:px-6 lg:py-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", { className: "text-2xl font-bold", children: t("faq.title") }),
          e.jsx("p", {
            className: "text-muted-foreground mt-1 text-sm",
            children: t("faq.subtitle"),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx(g, {
            className: "text-muted-foreground absolute start-3.5 top-1/2 h-4 w-4 -translate-y-1/2",
          }),
          e.jsx("input", {
            type: "text",
            placeholder: t("faq.searchPlaceholder"),
            value: o,
            onChange: (s) => j(s.target.value),
            className:
              "border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full max-w-md rounded-xl border ps-10 pe-4 text-sm transition-colors focus:ring-2 focus:outline-none",
          }),
        ],
      }),
      i
        ? e.jsx("div", {
            className: "space-y-2",
            children: [0, 1, 2, 3, 4].map((s) =>
              e.jsx(
                "div",
                {
                  className: "border-border bg-card rounded-xl border p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx(h, { className: "h-8 w-8 rounded-lg" }),
                      e.jsx(h, { className: "h-4 w-3/4" }),
                    ],
                  }),
                },
                s,
              ),
            ),
          })
        : e.jsx("div", {
            className: "space-y-2",
            children: m.map((s, a) =>
              e.jsxs(
                "div",
                {
                  className:
                    "border-border bg-card animate-slide-up overflow-hidden rounded-xl border",
                  style: { animationDelay: `${a * 50}ms` },
                  children: [
                    e.jsxs("button", {
                      onClick: () => b(r === a ? null : a),
                      className:
                        "flex w-full items-start justify-between gap-3 p-4 text-start transition-colors hover:bg-neutral-50",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            e.jsx("div", {
                              className: c(
                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors",
                                r === a
                                  ? "bg-primary text-white"
                                  : "text-muted-foreground bg-neutral-100",
                              ),
                              children: v(String(a + 1).padStart(2, "0"), d),
                            }),
                            e.jsx("span", {
                              className: "pt-1 text-sm font-medium",
                              children: s.question,
                            }),
                          ],
                        }),
                        e.jsx(C, {
                          className: c(
                            "text-muted-foreground mt-1 h-4 w-4 shrink-0 transition-transform duration-200",
                            r === a && "rotate-180",
                          ),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: c(
                        "overflow-hidden transition-all duration-200 ease-in-out",
                        r === a ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
                      ),
                      children: e.jsx("div", {
                        className: "px-4 pt-0 pb-4",
                        children: e.jsx("div", {
                          className: "ms-11 rounded-lg bg-neutral-50 p-3.5",
                          children: e.jsx("p", {
                            className: "text-sm leading-relaxed",
                            children: s.answer,
                          }),
                        }),
                      }),
                    }),
                  ],
                },
                s.key,
              ),
            ),
          }),
      !i &&
        m.length === 0 &&
        e.jsxs("div", {
          className: "border-border bg-card rounded-xl border p-10 text-center",
          children: [
            e.jsx(g, { className: "text-muted-foreground/30 mx-auto h-10 w-10" }),
            e.jsx("p", { className: "mt-3 font-medium", children: t("faq.noResults") }),
            e.jsx("p", {
              className: "text-muted-foreground mt-1 text-sm",
              children: t("faq.noResultsHint"),
            }),
          ],
        }),
      e.jsxs("div", {
        className: "border-primary/20 bg-primary/5 rounded-xl border p-6 text-center",
        children: [
          e.jsx("div", {
            className:
              "bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full",
            children: e.jsx(L, { className: "text-primary h-6 w-6" }),
          }),
          e.jsx("h3", { className: "text-lg font-semibold", children: t("faq.stillNeedHelp") }),
          e.jsx("p", {
            className: "text-muted-foreground mt-1 text-sm",
            children: t("faq.stillNeedHelpHint"),
          }),
          e.jsx(w, {
            to: "/tickets",
            children: e.jsx("button", {
              className:
                "bg-primary hover:bg-primary/90 mt-4 inline-flex h-11 items-center gap-2 rounded-lg px-6 text-sm font-semibold text-white transition-all active:scale-[0.97]",
              children: t("faq.contactSupport"),
            }),
          }),
        ],
      }),
    ],
  });
}
export { R as component };
