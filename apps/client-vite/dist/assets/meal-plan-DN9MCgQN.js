import { c as M, u as ge, a as E, r as c, f as fe, d as Ue, j as e } from "./index-BVud5pVb.js";
import { c as N } from "./cn-CDN07tui.js";
import { t as l, a as je } from "./format-zSzWEmcW.js";
import { u as Qe } from "./use-meal-plans-Bh59-FAW.js";
import { u as He, S as Q, D as Je, A as Ve } from "./day-navigator-rbjImaMu.js";
import { E as ye } from "./empty-state-BQ3yrOyd.js";
import { B as H } from "./button-B1_2FTXK.js";
import { L as _ } from "./loader-circle-BpriWBmn.js";
import { I as be } from "./info-iCufOcv1.js";
import { U as Ne } from "./utensils-crossed-Du_1PGDJ.js";
import { T as J } from "./triangle-alert-DfzczM4d.js";
import { C as ve } from "./chevron-down-DOn0ww8M.js";
import "./createLucideIcon-CflinLEd.js";
import "./chevron-right-BUhXz13O.js";
function we(t) {
  if (typeof t == "string") return t;
  if (t && typeof t == "object") {
    const i = t;
    return i.item
      ? i.quantity
        ? `${i.quantity} ${i.item}`
        : String(i.item)
      : i.name
        ? i.amount
          ? `${i.amount} ${i.name}`
          : String(i.name)
        : Object.values(i).filter(Boolean).join(" ");
  }
  return String(t ?? "");
}
function V(t) {
  const i = t.macros || {};
  return {
    name: t.name || "",
    type: t.type || "",
    calories: t.calories ?? i.calories ?? 0,
    protein: t.protein ?? i.protein ?? 0,
    carbs: t.carbs ?? i.carbs ?? 0,
    fat: t.fat ?? i.fat ?? 0,
    ingredients: Array.isArray(t.ingredients) ? t.ingredients.map(we) : [],
    instructions: Array.isArray(t.instructions)
      ? t.instructions.map(we)
      : typeof t.instructions == "string"
        ? t.instructions.split(/\.\s+/).filter(Boolean)
        : [],
    alternatives: Array.isArray(t.alternatives) ? t.alternatives : [],
  };
}
function We(t, i, u) {
  const x = `day${i + 1}`;
  if (t[x]) return t[x];
  if (u) {
    const K = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      r = new Date(u);
    r.setDate(r.getDate() + i);
    const s = K[r.getDay()];
    if (t[s]) return t[s];
  }
  return null;
}
function xt() {
  var de, ce, xe, me, ue, pe, he;
  const { t } = M("meals"),
    { t: i } = M("common"),
    { t: u } = M("emptyStates"),
    { t: x } = M("units"),
    { i18n: K } = M(),
    r = K.language,
    { mealPlan: s, isLoading: De } = Qe(),
    v = ge(E.assessments.getMyAssessment),
    [w, W] = c.useState(0),
    [Se, X] = c.useState(0),
    [ke, Ae] = c.useState(new Set()),
    B = fe(E.mealPlans.requestTranslation),
    C = c.useRef(!1),
    Y = s == null ? void 0 : s.language,
    D = !!s && !!Y && Y !== r,
    S =
      D &&
      (s == null ? void 0 : s.translatedLanguage) === r &&
      !!(s != null && s.translatedPlanData),
    G = D && (s == null ? void 0 : s.translationStatus) === "failed" && !S,
    Te = D && !S && !G;
  (c.useEffect(() => {
    D &&
      !S &&
      !G &&
      !C.current &&
      ((C.current = !0), B({ targetLanguage: r }).catch(console.error));
  }, [D, S, G, r, B]),
    c.useEffect(() => {
      C.current = !1;
    }, [s == null ? void 0 : s._id]));
  const Me = () => {
      ((C.current = !0), B({ targetLanguage: r }).catch(console.error));
    },
    Ee = Ue(E.mealPlans.swapMeal),
    [Ce, Z] = c.useState(null),
    [P, O] = c.useState(null),
    Ge = fe(E.ai.generateMealPlan),
    j = ge(E.systemConfig.getConfig, { key: "check_in_frequency_days" }),
    ee =
      typeof (j == null ? void 0 : j.value) == "number"
        ? j.value
        : Number(j == null ? void 0 : j.value) || 10,
    $e = ee > 0 ? ee : 10,
    [k, te] = c.useState(!1),
    [se, ne] = c.useState(null),
    [Ie, re] = c.useState(!1),
    R = !s && !!v && !0;
  c.useEffect(() => {
    if (!R && !k) {
      re(!1);
      return;
    }
    const n = setTimeout(() => re(!0), 300 * 1e3);
    return () => clearTimeout(n);
  }, [R, k]);
  const Le = async () => {
      (te(!0), ne(null));
      try {
        await Ge({ language: r === "ar" ? "ar" : "en", planDuration: $e, isInitialGeneration: !0 });
      } catch (n) {
        (console.error("Meal plan generation failed:", n),
          ne(n instanceof Error ? n.message : "Generation failed"));
      } finally {
        te(!1);
      }
    },
    Fe = s == null ? void 0 : s.streamId,
    _e = s && (!s.planData || ((de = s.planData) != null && de.parseError)) ? Fe : void 0,
    { streamedText: Ke, isStreaming: Be, parsedDays: ae } = He(_e),
    ie =
      s != null && s.startDate && s != null && s.endDate
        ? Math.ceil((new Date(s.endDate).getTime() - new Date(s.startDate).getTime()) / 864e5) - 1
        : 13,
    $ = c.useMemo(() => {
      if (!(s != null && s.startDate)) return 0;
      const n = new Date(s.startDate),
        a = Math.floor((Date.now() - n.getTime()) / 864e5);
      return Math.max(0, Math.min(ie, a));
    }, [s == null ? void 0 : s.startDate, ie]);
  if (
    (c.useEffect(() => {
      s != null && s.startDate && W($);
    }, [$, s == null ? void 0 : s.startDate]),
    De)
  )
    return e.jsx("div", {
      className: "flex items-center justify-center py-20",
      children: e.jsxs("div", {
        className: "flex flex-col items-center gap-3",
        children: [
          e.jsx(_, { className: "text-primary h-8 w-8 animate-spin" }),
          e.jsx("p", { className: "text-muted-foreground text-sm", children: i("loading") }),
        ],
      }),
    });
  if (s && Be && Ke && !s.planData) {
    const n = Array.from(ae.keys()).sort(),
      a = n.length > 0;
    return e.jsxs("div", {
      className: "mx-auto max-w-3xl space-y-5 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h1", { className: "text-2xl font-bold", children: t("title") }),
            e.jsx("p", {
              className: "text-muted-foreground mt-0.5 text-sm",
              children: t("generating"),
            }),
          ],
        }),
        a &&
          n.map((g) => {
            const y = ae.get(g);
            if (!(y != null && y.meals)) return null;
            const I = g.replace("day", ""),
              L = (y.meals ?? []).map(V);
            return e.jsxs(
              "div",
              {
                className: "space-y-2",
                children: [
                  e.jsx("h2", {
                    className: "text-sm font-semibold text-stone-600",
                    children: t("dayLabel", { n: I }),
                  }),
                  L.map((p, m) =>
                    e.jsxs(
                      "div",
                      {
                        className: "bg-card border-border rounded-xl border p-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("h3", { className: "text-sm font-semibold", children: p.name }),
                              e.jsxs("span", {
                                className: "text-nutrition text-sm font-semibold",
                                children: [l(p.calories, r), " ", t("kcal")],
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-muted-foreground mt-1 text-xs",
                            children: p.ingredients.slice(0, 3).join(", "),
                          }),
                        ],
                      },
                      m,
                    ),
                  ),
                ],
              },
              g,
            );
          }),
        e.jsx("div", {
          className: "border-nutrition/30 bg-nutrition/5 rounded-xl border p-5",
          children: e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx(Q, { className: "text-nutrition h-4 w-4 animate-pulse" }),
              e.jsx("span", {
                className: "text-nutrition text-sm font-semibold",
                children: t("generatingDay", { day: String(n.length + 1) }),
              }),
            ],
          }),
        }),
      ],
    });
  }
  if (!s)
    return e.jsxs("div", {
      className: "mx-auto max-w-3xl space-y-6 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h1", { className: "text-2xl font-bold", children: t("title") }),
            e.jsx("p", {
              className: "text-muted-foreground mt-1 text-sm",
              children: t("getStarted"),
            }),
          ],
        }),
        R || k
          ? e.jsx("div", {
              className: "border-border bg-card space-y-4 rounded-xl border p-8 text-center",
              children: Ie
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(be, { className: "text-warning mx-auto h-10 w-10" }),
                      e.jsx("h2", {
                        className: "text-lg font-bold",
                        children: u("mealPlanGenerating.timeoutTitle"),
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground mx-auto max-w-md text-sm",
                        children: u("mealPlanGenerating.timeoutDescription"),
                      }),
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(_, { className: "text-primary mx-auto h-10 w-10 animate-spin" }),
                      e.jsx("h2", {
                        className: "text-lg font-bold",
                        children: u("mealPlanGenerating.title"),
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground mx-auto max-w-md text-sm",
                        children: u("mealPlanGenerating.description"),
                      }),
                    ],
                  }),
            })
          : e.jsxs(e.Fragment, {
              children: [
                e.jsx(ye, {
                  icon: Ne,
                  title: u("noMealPlan.title"),
                  description: u("noMealPlan.description"),
                }),
                se &&
                  e.jsx("div", {
                    className:
                      "border-error-500/30 bg-error-500/10 rounded-lg border p-3 text-center",
                    children: e.jsx("p", { className: "text-error-500 text-sm", children: se }),
                  }),
                e.jsx("div", {
                  className: "flex justify-center",
                  children:
                    v === null
                      ? e.jsxs(H, {
                          onClick: () => (window.location.href = "/initial-assessment"),
                          variant: "gradient",
                          children: [e.jsx(Q, { className: "h-4 w-4" }), i("completeAssessment")],
                        })
                      : e.jsxs(H, {
                          onClick: Le,
                          disabled: k || v === void 0,
                          loading: k,
                          variant: "gradient",
                          children: [e.jsx(Q, { className: "h-4 w-4" }), t("generatePlan")],
                        }),
                }),
              ],
            }),
      ],
    });
  const o = D && S ? s.translatedPlanData : s.planData;
  if (!(o != null && o.weeklyPlan))
    return e.jsxs("div", {
      className: "mx-auto max-w-3xl space-y-6 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h1", { className: "text-2xl font-bold", children: t("title") }),
            e.jsx("p", {
              className: "text-muted-foreground mt-1 text-sm",
              children: t("getStarted"),
            }),
          ],
        }),
        e.jsx(ye, {
          icon: Ne,
          title: u("noMealPlan.title"),
          description: u("noMealPlan.description"),
        }),
      ],
    });
  const le =
      s.startDate && s.endDate
        ? Math.ceil((new Date(s.endDate).getTime() - new Date(s.startDate).getTime()) / 864e5)
        : 10,
    h = We(o.weeklyPlan, w, s.startDate),
    oe = Object.keys(o.weeklyPlan).filter((n) => {
      const a = o.weeklyPlan[n];
      return a && Array.isArray(a.meals) && a.meals.length > 0;
    }).length,
    Oe = oe > 0 && oe < le,
    Re = !h && Oe,
    A = ((h == null ? void 0 : h.meals) ?? []).map(V),
    T = h
      ? {
          calories:
            ((ce = h.dailyTotals) == null ? void 0 : ce.calories) ??
            A.reduce((n, a) => n + (a.calories || 0), 0),
          protein:
            ((xe = h.dailyTotals) == null ? void 0 : xe.protein) ??
            A.reduce((n, a) => n + (a.protein || 0), 0),
          carbs:
            ((me = h.dailyTotals) == null ? void 0 : me.carbs) ??
            A.reduce((n, a) => n + (a.carbs || 0), 0),
          fat:
            ((ue = h.dailyTotals) == null ? void 0 : ue.fat) ??
            A.reduce((n, a) => n + (a.fat || 0), 0),
        }
      : null;
  return e.jsxs("div", {
    className: "mx-auto max-w-3xl space-y-3 py-2 sm:space-y-4 sm:py-4 lg:space-y-5 lg:px-6 lg:py-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "text-xl font-bold sm:text-2xl",
            children: t(w === $ ? "todaysMeals" : "title"),
          }),
          e.jsxs("p", {
            className: "text-muted-foreground mt-0.5 text-xs sm:text-sm",
            children: [je(s.startDate, r), " -", " ", je(s.endDate, r)],
          }),
        ],
      }),
      G &&
        e.jsxs("div", {
          className:
            "border-destructive/30 bg-destructive/5 flex items-center justify-between gap-3 rounded-xl border p-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx(J, { className: "text-destructive h-5 w-5 shrink-0" }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-destructive text-sm font-semibold",
                      children: t("translationFailed"),
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground text-xs",
                      children: t("translationFailedDescription"),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(H, { variant: "outline", size: "sm", onClick: Me, children: t("retry") }),
          ],
        }),
      Te &&
        e.jsxs("div", {
          className: "border-primary/30 bg-primary/5 flex items-center gap-3 rounded-xl border p-4",
          children: [
            e.jsx(_, { className: "text-primary h-5 w-5 shrink-0 animate-spin" }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-primary text-sm font-semibold",
                  children: t("translating"),
                }),
                e.jsx("p", {
                  className: "text-muted-foreground text-xs",
                  children: t("translatingDescription"),
                }),
              ],
            }),
          ],
        }),
      (o == null ? void 0 : o.pregnancyDisclaimer) &&
        e.jsxs("div", {
          className:
            "flex items-start gap-3 rounded-xl border border-amber-300/40 bg-amber-50/80 p-4",
          children: [
            e.jsx(J, { className: "mt-0.5 h-5 w-5 shrink-0 text-amber-500" }),
            e.jsx("p", { className: "text-xs text-amber-800", children: o.pregnancyDisclaimer }),
          ],
        }),
      (o == null ? void 0 : o.breastfeedingNote) &&
        e.jsxs("div", {
          className:
            "flex items-start gap-3 rounded-xl border border-blue-300/40 bg-blue-50/80 p-4",
          children: [
            e.jsx(J, { className: "mt-0.5 h-5 w-5 shrink-0 text-blue-500" }),
            e.jsx("p", { className: "text-xs text-blue-800", children: o.breastfeedingNote }),
          ],
        }),
      e.jsx(Je, {
        totalDays: le,
        selectedDay: w,
        onSelectDay: (n) => {
          (W(n), X(0));
        },
        planStartDate: s.startDate,
        todayDayIndex: $,
        featureColor: "nutrition",
      }),
      o.dailyTargets &&
        e.jsxs("div", {
          className:
            "flex items-start gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2.5",
          children: [
            e.jsx(be, { className: "mt-0.5 h-4 w-4 shrink-0 text-blue-500" }),
            e.jsx("p", {
              className: "text-xs text-blue-700",
              children: t("calorieExplanation", {
                calories: l(o.dailyTargets.calories, r),
                protein: l(o.dailyTargets.protein, r),
                trainingDays: l(
                  ((he =
                    (pe = v == null ? void 0 : v.scheduleAvailability) == null
                      ? void 0
                      : pe.days) == null
                    ? void 0
                    : he.length) ?? "—",
                  r,
                ),
              }),
            }),
          ],
        }),
      T &&
        e.jsxs("div", {
          className: "scrollbar-hide flex gap-2 overflow-x-auto",
          children: [
            e.jsxs("span", {
              className:
                "bg-nutrition/10 text-nutrition flex-shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold sm:px-3 sm:py-1.5 sm:text-xs",
              children: [l(T.calories, r), " ", t("calories")],
            }),
            e.jsxs("span", {
              className:
                "bg-nutrition/10 text-nutrition flex-shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold sm:px-3 sm:py-1.5 sm:text-xs",
              children: [l(T.protein, r), x("g"), " ", t("protein")],
            }),
            e.jsxs("span", {
              className:
                "bg-nutrition/10 text-nutrition flex-shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold sm:px-3 sm:py-1.5 sm:text-xs",
              children: [l(T.carbs, r), x("g"), " ", t("carbs")],
            }),
            e.jsxs("span", {
              className:
                "bg-nutrition/10 text-nutrition flex-shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold sm:px-3 sm:py-1.5 sm:text-xs",
              children: [l(T.fat, r), x("g"), " ", t("fat")],
            }),
          ],
        }),
      P &&
        e.jsxs("div", {
          className:
            "border-error-500/30 bg-error-500/10 flex items-center justify-between rounded-lg border px-3 py-2",
          children: [
            e.jsx("p", { className: "text-error-500 text-sm", children: P }),
            e.jsx("button", {
              onClick: () => O(null),
              className: "text-error-500 text-xs font-medium",
              children: "✕",
            }),
          ],
        }),
      Re &&
        e.jsxs("div", {
          className: "border-nutrition/30 bg-nutrition/5 rounded-xl border p-6 text-center",
          children: [
            e.jsx(_, { className: "text-nutrition mx-auto h-8 w-8 animate-spin" }),
            e.jsx("p", {
              className: "text-nutrition mt-3 text-sm font-semibold",
              children: t("generatingDay", { day: String(w + 1) }),
            }),
            e.jsx("p", {
              className: "text-muted-foreground mt-1 text-xs",
              children: t("generatingDayDescription"),
            }),
          ],
        }),
      h &&
        e.jsx("div", {
          className: "space-y-3",
          children: A.map((n, a) => {
            var I, L;
            const g = Se === a,
              y = Array.isArray(n.alternatives) && n.alternatives.length > 0;
            return e.jsxs(
              "div",
              {
                className: N(
                  "bg-card shadow-card animate-slide-up overflow-hidden rounded-xl border transition-colors",
                  g ? "border-primary/40 ring-primary/10 ring-2" : "border-border",
                ),
                style: { animationDelay: `${a * 50}ms` },
                children: [
                  e.jsxs("button", {
                    onClick: () => X(g ? null : a),
                    "aria-expanded": g,
                    className:
                      "flex w-full items-center justify-between gap-3 p-4 text-start transition-colors hover:bg-neutral-50 active:scale-[0.97]",
                    children: [
                      e.jsxs("div", {
                        className: "flex min-w-0 items-center gap-3",
                        children: [
                          e.jsx("div", {
                            className: N(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors",
                              g ? "bg-primary text-white" : "bg-neutral-100 text-neutral-500",
                            ),
                            children: l(String(a + 1).padStart(2, "0"), r),
                          }),
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsx("h3", {
                                className: "truncate text-sm font-semibold",
                                children: n.name,
                              }),
                              e.jsxs("p", {
                                className: "text-muted-foreground mt-0.5 truncate text-xs",
                                children: [
                                  (I = n.ingredients) == null ? void 0 : I.slice(0, 3).join(", "),
                                  (((L = n.ingredients) == null ? void 0 : L.length) ?? 0) > 3 &&
                                    "...",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex shrink-0 items-center gap-2",
                        children: [
                          y &&
                            e.jsxs("span", {
                              className:
                                "bg-primary/10 text-primary rounded-full px-2 py-0.5 text-[10px] font-medium",
                              children: ["↔ ", l(n.alternatives.length, r)],
                            }),
                          e.jsxs("span", {
                            className: "text-nutrition text-sm font-semibold",
                            children: [l(n.calories, r), " ", t("kcal")],
                          }),
                          e.jsx(ve, {
                            className: N(
                              "h-4 w-4 transition-all duration-200",
                              g ? "text-primary rotate-180" : "text-muted-foreground",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: N(
                      "overflow-hidden transition-all duration-200 ease-in-out",
                      g ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
                    ),
                    children: e.jsxs("div", {
                      className: "border-border space-y-4 border-t px-4 pt-4 pb-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex flex-wrap gap-2",
                          children: [
                            e.jsxs("span", {
                              className:
                                "rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium",
                              children: [t("protein"), ": ", l(n.protein, r), x("g")],
                            }),
                            e.jsxs("span", {
                              className:
                                "rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium",
                              children: [t("carbs"), ": ", l(n.carbs, r), x("g")],
                            }),
                            e.jsxs("span", {
                              className:
                                "rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium",
                              children: [t("fat"), ": ", l(n.fat, r), x("g")],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h4", {
                              className: "mb-2 text-sm font-semibold",
                              children: t("ingredients"),
                            }),
                            e.jsx("div", {
                              className: "rounded-lg bg-neutral-50 p-3",
                              children: e.jsx("ul", {
                                className: "space-y-1.5 text-sm",
                                children: (Array.isArray(n.ingredients) ? n.ingredients : []).map(
                                  (p, m) =>
                                    e.jsxs(
                                      "li",
                                      {
                                        className: "flex items-start gap-2",
                                        children: [
                                          e.jsx("span", {
                                            className: "text-nutrition mt-0.5",
                                            children: "•",
                                          }),
                                          p,
                                        ],
                                      },
                                      m,
                                    ),
                                ),
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h4", {
                              className: "mb-2 text-sm font-semibold",
                              children: t("instructions"),
                            }),
                            e.jsx("div", {
                              className: "rounded-lg bg-neutral-50 p-3",
                              children: e.jsx("ol", {
                                className: "space-y-2 text-sm",
                                children: (Array.isArray(n.instructions) ? n.instructions : []).map(
                                  (p, m) =>
                                    e.jsxs(
                                      "li",
                                      {
                                        className: "flex items-start gap-2.5",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "bg-nutrition/12 text-nutrition mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                                            children: l(m + 1, r),
                                          }),
                                          p,
                                        ],
                                      },
                                      m,
                                    ),
                                ),
                              }),
                            }),
                          ],
                        }),
                        y &&
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "mb-2 text-sm font-semibold",
                                children: t("alternatives"),
                              }),
                              e.jsx("div", {
                                className:
                                  "border-nutrition/30 bg-nutrition/5 space-y-1.5 rounded-lg border border-dashed p-3",
                                children: n.alternatives.map((p, m) => {
                                  if (typeof p == "string")
                                    return e.jsxs(
                                      "div",
                                      {
                                        className: "flex items-start gap-2 text-sm",
                                        children: [
                                          e.jsx("span", {
                                            className: "text-nutrition",
                                            children: "↔",
                                          }),
                                          p,
                                        ],
                                      },
                                      m,
                                    );
                                  const F = `${a}-${m}`,
                                    q = ke.has(F),
                                    qe = () => {
                                      Ae((b) => {
                                        const d = new Set(b);
                                        return (d.has(F) ? d.delete(F) : d.add(F), d);
                                      });
                                    },
                                    f = V(p),
                                    z = `${w}-${a}-${m}`,
                                    U = Ce === z,
                                    ze = async (b) => {
                                      if ((b.stopPropagation(), !(!(s != null && s._id) || U))) {
                                        (Z(z), O(null));
                                        try {
                                          await Ee({
                                            planId: s._id,
                                            dayKey: `day${w + 1}`,
                                            mealIndex: a,
                                            alternativeIndex: m,
                                          });
                                        } catch (d) {
                                          (console.error("Swap failed:", d),
                                            O(d instanceof Error ? d.message : t("swapFailed")));
                                        } finally {
                                          Z((d) => (d === z ? null : d));
                                        }
                                      }
                                    };
                                  return e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "border-nutrition/20 overflow-hidden rounded-md border bg-white/60",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex items-center",
                                          children: [
                                            e.jsxs("button", {
                                              onClick: qe,
                                              "aria-expanded": q,
                                              className:
                                                "hover:bg-nutrition/5 flex min-w-0 flex-1 items-center justify-between gap-2 px-3 py-2 text-start transition-colors",
                                              children: [
                                                e.jsxs("div", {
                                                  className: "flex min-w-0 items-center gap-2",
                                                  children: [
                                                    e.jsx("span", {
                                                      className: "text-nutrition shrink-0 text-sm",
                                                      children: "↔",
                                                    }),
                                                    e.jsx("span", {
                                                      className: "truncate text-sm font-medium",
                                                      children: f.name,
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "flex shrink-0 items-center gap-2",
                                                  children: [
                                                    e.jsxs("span", {
                                                      className:
                                                        "bg-nutrition/10 text-nutrition rounded-full px-2 py-0.5 text-[10px] font-semibold",
                                                      children: [l(f.calories, r), " ", t("kcal")],
                                                    }),
                                                    e.jsx(ve, {
                                                      className: N(
                                                        "text-nutrition/60 h-3.5 w-3.5 transition-transform duration-150",
                                                        q && "rotate-180",
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsxs("button", {
                                              onClick: ze,
                                              disabled: U,
                                              className:
                                                "text-nutrition hover:bg-nutrition/10 border-nutrition/20 flex h-full shrink-0 items-center gap-1 border-s px-2.5 py-2 text-xs font-medium transition-colors disabled:opacity-50",
                                              title: t("swap"),
                                              children: [
                                                e.jsx(Ve, {
                                                  className: N("h-3.5 w-3.5", U && "animate-spin"),
                                                }),
                                                e.jsx("span", {
                                                  className: "hidden sm:inline",
                                                  children: t("swap"),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className: N(
                                            "overflow-hidden transition-all duration-150",
                                            q ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
                                          ),
                                          children: e.jsxs("div", {
                                            className:
                                              "border-nutrition/15 space-y-3 border-t px-3 pt-2 pb-3",
                                            children: [
                                              e.jsxs("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: [
                                                  e.jsxs("span", {
                                                    className:
                                                      "bg-nutrition/10 text-nutrition rounded-md px-2 py-0.5 text-[10px] font-medium",
                                                    children: [
                                                      t("protein"),
                                                      ":",
                                                      " ",
                                                      l(f.protein, r),
                                                      x("g"),
                                                    ],
                                                  }),
                                                  e.jsxs("span", {
                                                    className:
                                                      "bg-nutrition/10 text-nutrition rounded-md px-2 py-0.5 text-[10px] font-medium",
                                                    children: [
                                                      t("carbs"),
                                                      ": ",
                                                      l(f.carbs, r),
                                                      x("g"),
                                                    ],
                                                  }),
                                                  e.jsxs("span", {
                                                    className:
                                                      "bg-nutrition/10 text-nutrition rounded-md px-2 py-0.5 text-[10px] font-medium",
                                                    children: [t("fat"), ": ", l(f.fat, r), x("g")],
                                                  }),
                                                ],
                                              }),
                                              f.ingredients.length > 0 &&
                                                e.jsxs("div", {
                                                  children: [
                                                    e.jsx("h5", {
                                                      className:
                                                        "text-muted-foreground mb-1 text-xs font-semibold",
                                                      children: t("ingredients"),
                                                    }),
                                                    e.jsx("ul", {
                                                      className: "space-y-1 text-xs",
                                                      children: f.ingredients.map((b, d) =>
                                                        e.jsxs(
                                                          "li",
                                                          {
                                                            className: "flex items-start gap-1.5",
                                                            children: [
                                                              e.jsx("span", {
                                                                className: "text-nutrition mt-0.5",
                                                                children: "•",
                                                              }),
                                                              b,
                                                            ],
                                                          },
                                                          d,
                                                        ),
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              f.instructions.length > 0 &&
                                                e.jsxs("div", {
                                                  children: [
                                                    e.jsx("h5", {
                                                      className:
                                                        "text-muted-foreground mb-1 text-xs font-semibold",
                                                      children: t("instructions"),
                                                    }),
                                                    e.jsx("ol", {
                                                      className: "space-y-1 text-xs",
                                                      children: f.instructions.map((b, d) =>
                                                        e.jsxs(
                                                          "li",
                                                          {
                                                            className: "flex items-start gap-1.5",
                                                            children: [
                                                              e.jsx("span", {
                                                                className:
                                                                  "bg-nutrition/12 text-nutrition mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold",
                                                                children: l(d + 1, r),
                                                              }),
                                                              b,
                                                            ],
                                                          },
                                                          d,
                                                        ),
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    m,
                                  );
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              },
              a,
            );
          }),
        }),
      o.notes &&
        e.jsxs("div", {
          className: "border-border rounded-xl border bg-neutral-50 p-4",
          children: [
            e.jsx("p", {
              className: "text-muted-foreground mb-1 text-xs font-medium",
              children: t("coachNotes"),
            }),
            e.jsx("p", { className: "text-sm", children: o.notes }),
          ],
        }),
    ],
  });
}
export { xt as component };
