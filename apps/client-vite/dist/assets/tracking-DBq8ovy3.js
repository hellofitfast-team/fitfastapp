import {
  e as qe,
  u as Xe,
  a as ne,
  d as Ae,
  c as Q,
  j as o,
  r as l,
  R as mn,
  g as xr,
  h as wr,
  i as N,
  b as br,
} from "./index-BVud5pVb.js";
import { u as yr } from "./use-meal-plans-Bh59-FAW.js";
import { Z as Er, u as Nr } from "./use-workout-plans-B8uBa6gJ.js";
import { t as pe } from "./use-toast-aSGH-up_.js";
import { E as Cr } from "./empty-state-BQ3yrOyd.js";
import { c as I } from "./cn-CDN07tui.js";
import { f as Sr } from "./format-zSzWEmcW.js";
import { F as Dr } from "./flame-BZ5lZkzP.js";
import { c as Le } from "./createLucideIcon-CflinLEd.js";
import { D as it } from "./dumbbell-DitM0HwP.js";
import { C as jr } from "./calendar-PtChDace.js";
import { U as zt } from "./utensils-crossed-Du_1PGDJ.js";
import { C as Ot } from "./chevron-down-DOn0ww8M.js";
import { L as At } from "./loader-circle-BpriWBmn.js";
import { C as Pt } from "./check-ClxIZdHW.js";
import { u as Rr } from "./index.esm-D0Yx9_aU.js";
import { c as Tr, u as Ce } from "./button-B1_2FTXK.js";
import { T as kr } from "./trending-up-yKghX4cs.js";
import { T as Mr } from "./trending-down-CdNIVmod.js";
import { S as ye } from "./skeleton-eFLYgFmv.js";
import { T as Or } from "./target-CiFs4VM2.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ar = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  Pr = Le("book-open", Ar);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lr = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  Lt = Le("chevron-up", Lr);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ir = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]],
  _r = Le("circle", Ir);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $r = [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
  ],
  Dt = Le("history", $r);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fr = [
    ["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }],
    ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }],
    ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }],
    ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }],
  ],
  Yt = Le("trophy", Fr);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wr = [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }],
  ],
  Br = Le("utensils", Wr);
function Ur(e) {
  const { isAuthenticated: t } = qe(),
    n = Xe(ne.completions.getTrackingData, t ? { date: e } : "skip"),
    r = Ae(ne.completions.toggleMealCompletion),
    a = Ae(ne.completions.toggleWorkoutCompletion),
    s = Ae(ne.reflections.saveReflection);
  return {
    trackingData: n ?? { mealCompletions: [], workoutCompletions: [], reflection: null },
    isLoading: t && n === void 0,
    error: null,
    toggleMealCompletion: async (u, f, d, g) => {
      await r({ mealPlanId: u, date: e, mealIndex: f, completed: d, notes: g });
    },
    toggleWorkoutCompletion: async (u, f, d, g) => {
      await a({ workoutPlanId: u, date: e, workoutIndex: f, completed: d, notes: g });
    },
    saveDailyReflection: async (u) => {
      await s({ date: e, reflection: u });
    },
  };
}
function Hr(e) {
  const { isAuthenticated: t } = qe(),
    n = Xe(ne.exerciseLogs.getWorkoutLog, t ? { date: e } : "skip"),
    r = Ae(ne.exerciseLogs.logExerciseSet),
    a = Ae(ne.exerciseLogs.logExerciseBulk),
    s = Ae(ne.exerciseLogs.quickCompleteWorkout);
  return {
    exerciseLogs: n ?? [],
    isLoading: t && n === void 0,
    logSet: async (u) => {
      await r({ ...u, date: e });
    },
    logBulk: async (u) => {
      await a({ ...u, date: e });
    },
    quickComplete: async (u) => {
      await s({ ...u, date: e });
    },
  };
}
function Vr(e, t) {
  const { isAuthenticated: n } = qe(),
    r = n && e.length > 0,
    a = Xe(ne.exerciseLogs.getLastSessionData, r ? { exerciseNames: e, beforeDate: t } : "skip");
  return { lastSessionData: a ?? {}, isLoading: r && a === void 0 };
}
function zr(e, t = !0) {
  const { isAuthenticated: n } = qe(),
    r = n && t && e != null,
    a = Xe(ne.exerciseLogs.getExerciseHistory, r ? { exerciseName: e, limit: 20 } : "skip");
  return { history: a ?? [], isLoading: r && a === void 0 };
}
function Yr() {
  const { isAuthenticated: e, isLoading: t } = qe(),
    n = new Date().toLocaleDateString("en-CA"),
    r = Xe(ne.completions.getStreak, e ? { clientToday: n } : "skip");
  return {
    streak: (r == null ? void 0 : r.currentStreak) ?? 0,
    isLoading: t || (e && r === void 0),
  };
}
const jt = 34,
  qt = 2 * Math.PI * jt;
function qr(e) {
  return e === 0
    ? "var(--color-muted-foreground)"
    : e >= 100
      ? "var(--color-nutrition)"
      : "var(--color-streak)";
}
function Xt({ selectedDate: e, completionPercentage: t, mealProgress: n, workoutDone: r }) {
  const { t: a, i18n: s } = Q("tracking"),
    c = s.language,
    { streak: i } = Yr(),
    p = qt * (1 - t / 100);
  return o.jsxs("div", {
    className: "flex items-start gap-5",
    children: [
      o.jsxs("div", {
        className: "relative shrink-0",
        children: [
          o.jsxs("svg", {
            width: 80,
            height: 80,
            viewBox: "0 0 80 80",
            className: "-rotate-90",
            children: [
              o.jsx("circle", {
                cx: 40,
                cy: 40,
                r: jt,
                fill: "none",
                stroke: "var(--color-muted)",
                strokeWidth: 6,
                opacity: 0.3,
              }),
              o.jsx("circle", {
                cx: 40,
                cy: 40,
                r: jt,
                fill: "none",
                stroke: qr(t),
                strokeWidth: 6,
                strokeLinecap: "round",
                strokeDasharray: qt,
                strokeDashoffset: p,
                className: "transition-all duration-700 ease-out",
              }),
            ],
          }),
          o.jsx("div", {
            className: "absolute inset-0 flex flex-col items-center justify-center",
            children: o.jsxs("span", {
              className: "text-lg leading-none font-bold",
              children: [t, "%"],
            }),
          }),
        ],
      }),
      o.jsxs("div", {
        className: "min-w-0 flex-1",
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [
              o.jsx("h1", { className: "text-xl leading-tight font-bold", children: a("title") }),
              i > 0 &&
                o.jsxs("span", {
                  className:
                    "bg-streak/15 text-streak flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold",
                  children: [o.jsx(Dr, { className: "h-3.5 w-3.5" }), i],
                }),
            ],
          }),
          o.jsx("p", {
            className: "text-muted-foreground mt-0.5 text-sm",
            children: Sr(new Date(e.includes("T") ? e : e + "T12:00:00"), c),
          }),
          o.jsxs("div", {
            className: "mt-3 flex flex-wrap gap-2",
            children: [
              o.jsx(Kt, {
                icon: o.jsx(Br, { className: "h-3 w-3" }),
                label: `${n.completed}/${n.total} ${a("mealsCompleted")}`,
                progress: n.total > 0 ? n.completed / n.total : 0,
                colorClass: "nutrition",
              }),
              o.jsx(Kt, {
                icon: o.jsx(it, { className: "h-3 w-3" }),
                label: a(r ? "workoutCompleted" : "workoutNotCompleted"),
                progress: r ? 1 : 0,
                colorClass: "fitness",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Kt({ icon: e, label: t, progress: n, colorClass: r }) {
  const a = r === "nutrition" ? "bg-nutrition/10" : "bg-fitness/10",
    s = r === "nutrition" ? "text-nutrition" : "text-fitness",
    c = r === "nutrition" ? "bg-nutrition/20" : "bg-fitness/20";
  return o.jsxs("div", {
    className: I("relative overflow-hidden rounded-full px-3 py-1", a),
    children: [
      o.jsx("div", {
        className: I("absolute inset-y-0 start-0 transition-all duration-500", c),
        style: { width: `${Math.round(n * 100)}%` },
      }),
      o.jsxs("span", {
        className: I("relative flex items-center gap-1.5 text-xs font-semibold", s),
        children: [e, t],
      }),
    ],
  });
}
function Xr({ selectedDate: e, onDateChange: t }) {
  const { t: n } = Q("tracking");
  return o.jsx("div", {
    className:
      "bg-card/95 border-border shadow-card sticky top-0 z-10 rounded-xl border backdrop-blur-sm",
    children: o.jsxs("div", {
      className: "flex items-center gap-3 p-3",
      children: [
        o.jsx(jr, { className: "text-routine h-4 w-4 shrink-0" }),
        o.jsx("label", {
          htmlFor: "tracking-date-picker",
          className: "text-sm font-medium",
          children: n("selectDate"),
        }),
        o.jsx("input", {
          id: "tracking-date-picker",
          type: "date",
          value: e,
          onChange: (r) => t(r.target.value),
          max: new Date().toLocaleDateString("en-CA"),
          className:
            "border-input bg-card focus:ring-ring ms-auto h-9 rounded-lg border px-3 text-sm transition-colors focus:ring-2 focus:outline-none",
        }),
      ],
    }),
  });
}
function Kr(e) {
  const t = e.toLowerCase();
  return t.includes("breakfast") || t.includes("فطور")
    ? { bg: "bg-streak/15", text: "text-streak" }
    : t.includes("lunch") || t.includes("غداء")
      ? { bg: "bg-nutrition/15", text: "text-nutrition" }
      : t.includes("dinner") || t.includes("عشاء")
        ? { bg: "bg-primary/12", text: "text-primary" }
        : t.includes("snack") || t.includes("وجبة خفيفة")
          ? { bg: "bg-routine/15", text: "text-routine" }
          : { bg: "bg-neutral-100", text: "text-neutral-600" };
}
const Gr = l.memo(function ({
  todaysMeals: t,
  mealCompletions: n,
  isTogglingMeal: r,
  mealNotes: a,
  onMealToggle: s,
  onMealNotesChange: c,
  isMealsExpanded: i,
  onToggleExpand: p,
}) {
  const { t: u } = Q("tracking"),
    { t: f } = Q("meals"),
    [d, g] = l.useState(null),
    y = (w) => n.find((m) => m.mealIndex === w);
  return o.jsxs("div", {
    className:
      "border-border bg-card shadow-card border-l-nutrition overflow-hidden rounded-xl border border-l-4",
    children: [
      o.jsxs("button", {
        onClick: p,
        className:
          "border-border flex w-full items-center justify-between border-b p-4 transition-colors hover:bg-neutral-50",
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              o.jsx("div", {
                className: "bg-nutrition/12 flex h-9 w-9 items-center justify-center rounded-lg",
                children: o.jsx(zt, { className: "text-nutrition h-4 w-4" }),
              }),
              o.jsxs("div", {
                className: "text-start",
                children: [
                  o.jsx("h2", { className: "text-sm font-semibold", children: u("mealTracking") }),
                  o.jsxs("p", {
                    className: "text-muted-foreground text-xs",
                    children: [
                      n.filter((w) => w.completed).length,
                      "/",
                      t.length,
                      " ",
                      u("mealsCompleted"),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i
            ? o.jsx(Lt, { className: "text-muted-foreground h-4 w-4" })
            : o.jsx(Ot, { className: "text-muted-foreground h-4 w-4" }),
        ],
      }),
      i &&
        o.jsx("div", {
          className: "divide-border divide-y",
          children:
            t.length === 0
              ? o.jsxs("div", {
                  className: "p-10 text-center",
                  children: [
                    o.jsx(zt, { className: "text-muted-foreground/30 mx-auto h-10 w-10" }),
                    o.jsx("p", {
                      className: "mt-3 text-sm font-medium",
                      children: u("noMealsPlanned"),
                    }),
                  ],
                })
              : t.map((w, m) => {
                  const b = y(m),
                    h = (b == null ? void 0 : b.completed) || !1,
                    j = d === m,
                    D = Kr(w.time || "");
                  return o.jsx(
                    "div",
                    {
                      className: I(
                        "p-4 transition-colors",
                        h ? "bg-nutrition/5" : "hover:bg-neutral-50",
                      ),
                      children: o.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                          o.jsx("button", {
                            type: "button",
                            onClick: () => s(m, h),
                            disabled: r === m,
                            "aria-label": u(h ? "markIncomplete" : "markComplete"),
                            "aria-pressed": h,
                            className: I(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200",
                              h
                                ? "border-nutrition bg-nutrition scale-105"
                                : "hover:border-nutrition border-neutral-300",
                            ),
                            children:
                              r === m
                                ? o.jsx(At, { className: "h-3.5 w-3.5 animate-spin" })
                                : h
                                  ? o.jsx(Pt, { className: "h-4 w-4 text-white" })
                                  : o.jsx(_r, { className: "h-4 w-4 text-neutral-300" }),
                          }),
                          o.jsxs("div", {
                            className: "min-w-0 flex-1 space-y-2",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      o.jsx("h4", {
                                        className: I(
                                          "text-base font-semibold",
                                          h && "text-muted-foreground line-through",
                                        ),
                                        children: w.name,
                                      }),
                                      w.time &&
                                        o.jsx("span", {
                                          className: I(
                                            "rounded-full px-2 py-0.5 text-[10px] font-bold",
                                            D.bg,
                                            D.text,
                                          ),
                                          children: w.time,
                                        }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    className: "mt-1.5 flex flex-wrap gap-1.5",
                                    children: [
                                      o.jsx(Qe, {
                                        label: `${w.calories} ${f("calories")}`,
                                        variant: "default",
                                      }),
                                      o.jsx(Qe, {
                                        label: `${w.protein}g ${f("protein")}`,
                                        variant: "protein",
                                      }),
                                      o.jsx(Qe, {
                                        label: `${w.carbs}g ${f("carbs")}`,
                                        variant: "carbs",
                                      }),
                                      o.jsx(Qe, { label: `${w.fat}g ${f("fat")}`, variant: "fat" }),
                                    ],
                                  }),
                                ],
                              }),
                              ((w.ingredients && w.ingredients.length > 0) ||
                                (w.instructions && w.instructions.length > 0) ||
                                (w.alternatives && w.alternatives.length > 0)) &&
                                o.jsxs("button", {
                                  type: "button",
                                  onClick: () => g(j ? null : m),
                                  "aria-expanded": j,
                                  className:
                                    "text-nutrition bg-nutrition/8 hover:bg-nutrition/15 rounded-md px-2 py-0.5 text-xs font-medium transition-colors",
                                  children: [
                                    w.ingredients && w.ingredients.length > 0
                                      ? `${w.ingredients.length} ${f("ingredients")}`
                                      : f("details"),
                                    " ",
                                    j ? "▲" : "▼",
                                  ],
                                }),
                              j &&
                                o.jsxs("div", {
                                  className: "border-border/50 space-y-3 rounded-lg border p-3",
                                  children: [
                                    w.ingredients &&
                                      w.ingredients.length > 0 &&
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("p", {
                                            className: "text-xs font-semibold",
                                            children: f("ingredients"),
                                          }),
                                          o.jsx("ul", {
                                            className:
                                              "text-muted-foreground mt-1 list-inside list-disc text-xs",
                                            children: w.ingredients.map((x, C) =>
                                              o.jsx("li", { children: x }, C),
                                            ),
                                          }),
                                        ],
                                      }),
                                    w.instructions &&
                                      w.instructions.length > 0 &&
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("p", {
                                            className: "text-xs font-semibold",
                                            children: f("instructions"),
                                          }),
                                          o.jsx("ol", {
                                            className:
                                              "text-muted-foreground mt-1 list-inside list-decimal text-xs",
                                            children: w.instructions.map((x, C) =>
                                              o.jsx("li", { children: x }, C),
                                            ),
                                          }),
                                        ],
                                      }),
                                    w.alternatives &&
                                      w.alternatives.length > 0 &&
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("p", {
                                            className: "text-xs font-semibold",
                                            children: f("alternatives"),
                                          }),
                                          o.jsx("ul", {
                                            className:
                                              "text-muted-foreground mt-1 list-inside list-disc text-xs",
                                            children: w.alternatives.map((x, C) =>
                                              o.jsx("li", { children: x }, C),
                                            ),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              o.jsx("textarea", {
                                placeholder: u("addNotes"),
                                value: a[m] ?? (b == null ? void 0 : b.notes) ?? "",
                                onChange: (x) => c({ ...a, [m]: x.target.value }),
                                className:
                                  "border-input placeholder:text-muted-foreground focus:ring-nutrition min-h-[44px] w-full resize-none rounded-lg border bg-neutral-50 p-2.5 text-xs transition-colors focus:ring-2 focus:outline-none",
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    m,
                  );
                }),
        }),
    ],
  });
});
function Qe({ label: e, variant: t }) {
  const n = {
    default: "bg-neutral-100 text-neutral-600",
    protein: "bg-primary/10 text-primary",
    carbs: "bg-streak/10 text-streak",
    fat: "bg-routine/10 text-routine",
  };
  return o.jsx("span", {
    className: I("rounded-md px-1.5 py-0.5 text-[10px] font-semibold", n[t]),
    children: e,
  });
}
const Zr = l.memo(function ({
    todaysWorkout: t,
    workoutPlanId: n,
    exerciseLogs: r,
    onLogSet: a,
    onQuickComplete: s,
    onOpenHistory: c,
    lastSessionData: i,
    isWorkoutsExpanded: p,
    onToggleExpand: u,
  }) {
    var v;
    const { t: f } = Q("tracking"),
      { t: d } = Q("workouts"),
      { t: g } = Q("common"),
      [y, w] = l.useState(null),
      [m, b] = l.useState(!1),
      h = (t == null ? void 0 : t.exercises) ?? [],
      j = h.length,
      D = l.useMemo(() => r.filter((S) => S.completedAt != null).length, [r]),
      x = D >= j && j > 0,
      C = l.useCallback((S) => r.find((R) => R.exerciseIndex === S), [r]),
      T = l.useCallback(async () => {
        if (!(!n || h.length === 0)) {
          b(!0);
          try {
            await s({
              exercises: h.map((S, R) => ({
                exerciseIndex: R,
                exerciseName: S.name,
                sets: S.sets,
              })),
              completed: !x,
            });
          } finally {
            b(!1);
          }
        }
      }, [n, h, x, s]);
    return o.jsxs("div", {
      className:
        "border-border bg-card shadow-card border-l-fitness overflow-hidden rounded-xl border border-l-4",
      children: [
        o.jsxs("button", {
          onClick: u,
          className:
            "border-border flex w-full items-center justify-between border-b p-4 transition-colors hover:bg-neutral-50",
          children: [
            o.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                o.jsx("div", {
                  className: "bg-fitness/12 flex h-9 w-9 items-center justify-center rounded-lg",
                  children: o.jsx(it, { className: "text-fitness h-4 w-4" }),
                }),
                o.jsxs("div", {
                  className: "text-start",
                  children: [
                    o.jsx("h2", {
                      className: "text-sm font-semibold",
                      children: f("workoutTracking"),
                    }),
                    o.jsx("p", {
                      className: "text-muted-foreground text-xs",
                      children:
                        t != null && t.restDay
                          ? d("restDay")
                          : j > 0
                            ? `${D}/${j} ${f("exercisesDone")}`
                            : f("noWorkoutPlanned"),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                j > 0 &&
                  !(t != null && t.restDay) &&
                  o.jsx("span", {
                    className: I(
                      "rounded-full px-2 py-0.5 text-[10px] font-bold",
                      x ? "bg-fitness/15 text-fitness" : "bg-neutral-100 text-neutral-500",
                    ),
                    children: x ? f("workoutCompleted") : `${D}/${j}`,
                  }),
                p
                  ? o.jsx(Lt, { className: "text-muted-foreground h-4 w-4" })
                  : o.jsx(Ot, { className: "text-muted-foreground h-4 w-4" }),
              ],
            }),
          ],
        }),
        p &&
          o.jsx("div", {
            className: "p-4",
            children: t
              ? t.restDay
                ? o.jsxs("div", {
                    className: "rounded-lg bg-neutral-50 p-8 text-center",
                    children: [
                      o.jsx(it, { className: "text-muted-foreground/40 mx-auto h-10 w-10" }),
                      o.jsx("p", { className: "mt-3 font-semibold", children: d("restDay") }),
                      o.jsx("p", {
                        className: "text-muted-foreground mt-1 text-xs",
                        children: f("takeTimeToRecover"),
                      }),
                    ],
                  })
                : o.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      o.jsx("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: o.jsxs("div", {
                          children: [
                            o.jsx("h4", {
                              className: "text-sm font-semibold",
                              children: t.workoutName || d("todaysWorkout"),
                            }),
                            o.jsxs("p", {
                              className: "text-muted-foreground text-xs",
                              children: [
                                t.duration,
                                " ",
                                g("min"),
                                " •",
                                " ",
                                (v = t.targetMuscles) == null ? void 0 : v.join(", "),
                              ],
                            }),
                          ],
                        }),
                      }),
                      h.map((S, R) =>
                        o.jsx(
                          Qr,
                          {
                            exercise: S,
                            exerciseIndex: R,
                            log: C(R),
                            lastSession: i[S.name],
                            isExpanded: y === R,
                            onToggleExpand: () => w(y === R ? null : R),
                            onLogSet: async (O) => {
                              await a({
                                exerciseIndex: R,
                                exerciseName: S.name,
                                set: O,
                                totalSetsInExercise: S.sets,
                                totalExercisesInWorkout: j,
                              });
                            },
                            onOpenHistory: () => c(S.name),
                          },
                          R,
                        ),
                      ),
                      o.jsxs("button", {
                        type: "button",
                        onClick: T,
                        disabled: m,
                        className: I(
                          "mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-3 text-xs font-semibold transition-all",
                          x
                            ? "border-fitness/30 bg-fitness/5 text-fitness hover:bg-fitness/10"
                            : "hover:border-fitness/50 hover:text-fitness border-neutral-200 text-neutral-500",
                        ),
                        children: [
                          m
                            ? o.jsx(At, { className: "h-3.5 w-3.5 animate-spin" })
                            : o.jsx(Er, { className: "h-3.5 w-3.5" }),
                          f(x ? "undoQuickComplete" : "quickComplete"),
                        ],
                      }),
                    ],
                  })
              : o.jsxs("div", {
                  className: "border-border rounded-lg border border-dashed p-8 text-center",
                  children: [
                    o.jsx(it, { className: "text-muted-foreground/30 mx-auto h-10 w-10" }),
                    o.jsx("p", {
                      className: "mt-3 text-sm font-medium",
                      children: f("noWorkoutPlanned"),
                    }),
                  ],
                }),
          }),
      ],
    });
  }),
  Qr = l.memo(function ({
    exercise: t,
    exerciseIndex: n,
    log: r,
    lastSession: a,
    isExpanded: s,
    onToggleExpand: c,
    onLogSet: i,
    onOpenHistory: p,
  }) {
    var j, D, x;
    const { t: u } = Q("tracking"),
      [f, d] = l.useState(new Set()),
      g = (r == null ? void 0 : r.sets.filter((C) => C.completed).length) ?? 0,
      y = t.sets,
      w = (r == null ? void 0 : r.completedAt) != null,
      m = l.useCallback(
        async (C) => {
          d((T) => new Set(T).add(C));
          try {
            const T = r == null ? void 0 : r.sets.find((v) => v.setIndex === C);
            await i({
              setIndex: C,
              weight: (T == null ? void 0 : T.weight) ?? (a == null ? void 0 : a.weight),
              reps: T == null ? void 0 : T.reps,
              completed: !((T == null ? void 0 : T.completed) ?? !1),
            });
          } finally {
            d((T) => {
              const v = new Set(T);
              return (v.delete(C), v);
            });
          }
        },
        [r, a, i],
      ),
      b = l.useCallback(
        async (C, T) => {
          d((v) => new Set(v).add(C));
          try {
            const v = r == null ? void 0 : r.sets.find((S) => S.setIndex === C);
            await i({
              setIndex: C,
              weight: T,
              reps: v == null ? void 0 : v.reps,
              completed: (v == null ? void 0 : v.completed) ?? !1,
            });
          } finally {
            d((v) => {
              const S = new Set(v);
              return (S.delete(C), S);
            });
          }
        },
        [r, i],
      ),
      h = l.useCallback(
        async (C, T) => {
          d((v) => new Set(v).add(C));
          try {
            const v = r == null ? void 0 : r.sets.find((S) => S.setIndex === C);
            await i({
              setIndex: C,
              weight: (v == null ? void 0 : v.weight) ?? (a == null ? void 0 : a.weight),
              reps: T,
              completed: (v == null ? void 0 : v.completed) ?? !1,
            });
          } finally {
            d((v) => {
              const S = new Set(v);
              return (S.delete(C), S);
            });
          }
        },
        [r, a, i],
      );
    return o.jsxs("div", {
      className: I(
        "rounded-lg border transition-all",
        w ? "border-fitness/30 bg-fitness/5" : "border-border bg-card",
      ),
      children: [
        o.jsxs("div", {
          role: "button",
          tabIndex: 0,
          onClick: c,
          onKeyDown: (C) => {
            (C.key === "Enter" || C.key === " ") && (C.preventDefault(), c());
          },
          className: "flex w-full cursor-pointer items-center gap-3 p-3",
          children: [
            o.jsx("div", {
              className: I(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                w
                  ? "border-fitness bg-fitness"
                  : g > 0
                    ? "border-fitness/50 bg-fitness/10"
                    : "border-neutral-300",
              ),
              children: w
                ? o.jsx(Pt, { className: "h-3.5 w-3.5 text-white" })
                : g > 0
                  ? o.jsx("span", { className: "text-fitness text-[10px] font-bold", children: g })
                  : o.jsx("span", { className: "text-[10px] text-neutral-400", children: n + 1 }),
            }),
            o.jsxs("div", {
              className: "flex-1 text-start",
              children: [
                o.jsx("p", {
                  className: I("text-sm font-medium", w && "text-fitness"),
                  children: t.name,
                }),
                o.jsxs("p", {
                  className: "text-muted-foreground text-xs",
                  children: [
                    g,
                    "/",
                    y,
                    " ",
                    u("sets"),
                    " • ",
                    t.reps,
                    a != null && a.weight ? ` • ${u("lastWeight")}: ${a.weight}kg` : "",
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                o.jsx("button", {
                  type: "button",
                  onClick: (C) => {
                    (C.stopPropagation(), p());
                  },
                  className:
                    "flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600",
                  "aria-label": u("viewHistory"),
                  children: o.jsx(Dt, { className: "h-3.5 w-3.5" }),
                }),
                s
                  ? o.jsx(Lt, { className: "text-muted-foreground h-4 w-4" })
                  : o.jsx(Ot, { className: "text-muted-foreground h-4 w-4" }),
              ],
            }),
          ],
        }),
        s &&
          o.jsxs("div", {
            className: "border-border space-y-1.5 border-t px-3 pt-2 pb-3",
            children: [
              (t.equipment || ((j = t.targetMuscles) == null ? void 0 : j.length) > 0) &&
                o.jsxs("p", {
                  className: "text-muted-foreground mb-2 text-[11px]",
                  children: [
                    t.equipment && `${t.equipment}`,
                    t.equipment && ((D = t.targetMuscles) == null ? void 0 : D.length) > 0 && " • ",
                    (x = t.targetMuscles) == null ? void 0 : x.join(", "),
                  ],
                }),
              Array.from({ length: y }, (C, T) => {
                const v = r == null ? void 0 : r.sets.find((O) => O.setIndex === T),
                  S = (v == null ? void 0 : v.completed) ?? !1,
                  R = f.has(T);
                return o.jsx(
                  Jr,
                  {
                    setIndex: T,
                    weight: v == null ? void 0 : v.weight,
                    reps: v == null ? void 0 : v.reps,
                    completed: S,
                    isSaving: R,
                    lastWeight: a == null ? void 0 : a.weight,
                    plannedReps: t.reps,
                    onToggle: () => m(T),
                    onWeightChange: (O) => b(T, O),
                    onRepsChange: (O) => h(T, O),
                  },
                  T,
                );
              }),
              (a == null ? void 0 : a.weight) &&
                o.jsxs("p", {
                  className: "text-muted-foreground mt-1 text-[10px]",
                  children: [u("lastSession"), ": ", a.weight, "kg", a.reps ? ` × ${a.reps}` : ""],
                }),
            ],
          }),
      ],
    });
  }),
  Jr = l.memo(function ({
    setIndex: t,
    weight: n,
    reps: r,
    completed: a,
    isSaving: s,
    lastWeight: c,
    plannedReps: i,
    onToggle: p,
    onWeightChange: u,
    onRepsChange: f,
  }) {
    const { t: d } = Q("tracking"),
      [g, y] = l.useState(n != null ? String(n) : ""),
      [w, m] = l.useState(r != null ? String(r) : "");
    return (
      l.useEffect(() => {
        y(n != null ? String(n) : "");
      }, [n]),
      l.useEffect(() => {
        m(r != null ? String(r) : "");
      }, [r]),
      o.jsxs("div", {
        className: I(
          "flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors",
          a ? "bg-fitness/8" : "bg-neutral-50",
        ),
        children: [
          o.jsxs("span", {
            className: "text-muted-foreground w-8 text-[11px] font-medium",
            children: [d("setLabel"), " ", t + 1],
          }),
          o.jsx("input", {
            type: "number",
            inputMode: "decimal",
            min: 0,
            max: 999,
            step: 0.5,
            placeholder: c ? String(c) : "kg",
            value: g,
            onChange: (b) => y(b.target.value),
            onBlur: () => {
              const b = Number(g),
                h = g === "" || Number.isNaN(b) ? void 0 : b;
              h !== n && u(h);
            },
            className: I(
              "focus:ring-fitness h-8 w-16 rounded-md border bg-white px-2 text-center text-xs font-medium transition-colors focus:ring-1 focus:outline-none",
              a ? "border-fitness/30" : "border-neutral-200",
            ),
            "aria-label": `${d("weight")} ${d("setLabel")} ${t + 1}`,
          }),
          o.jsx("span", { className: "text-muted-foreground text-xs", children: "×" }),
          o.jsx("input", {
            type: "number",
            inputMode: "numeric",
            min: 0,
            max: 999,
            placeholder: i,
            value: w,
            onChange: (b) => m(b.target.value),
            onBlur: () => {
              const b = Number(w),
                h = w === "" || Number.isNaN(b) ? void 0 : b;
              h !== r && f(h);
            },
            className: I(
              "focus:ring-fitness h-8 w-14 rounded-md border bg-white px-2 text-center text-xs font-medium transition-colors focus:ring-1 focus:outline-none",
              a ? "border-fitness/30" : "border-neutral-200",
            ),
            "aria-label": `${d("reps")} ${d("setLabel")} ${t + 1}`,
          }),
          o.jsx("button", {
            type: "button",
            onClick: p,
            disabled: s,
            className: I(
              "ms-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 transition-all",
              a
                ? "border-fitness bg-fitness text-white"
                : "hover:border-fitness border-neutral-300",
              s && "opacity-50",
            ),
            "aria-label": d(a ? "markIncomplete" : "markComplete"),
            "aria-pressed": a,
            children: s
              ? o.jsx(At, { className: "h-3 w-3 animate-spin" })
              : a
                ? o.jsx(Pt, { className: "h-3.5 w-3.5" })
                : null,
          }),
        ],
      })
    );
  }),
  Je = 3e3,
  ea = l.memo(function ({ defaultReflection: t, onSubmit: n }) {
    const { t: r } = Q("tracking"),
      {
        register: a,
        handleSubmit: s,
        reset: c,
        formState: i,
        watch: p,
      } = Rr({ defaultValues: { reflection: t || "" } });
    l.useEffect(() => {
      c({ reflection: t || "" });
    }, [t, c]);
    const u = p("reflection"),
      f = (u == null ? void 0 : u.length) ?? 0,
      d = (f / Je) * 100;
    return o.jsxs("div", {
      className: "border-border bg-card shadow-card overflow-hidden rounded-xl border",
      children: [
        o.jsxs("div", {
          className: "border-border bg-routine/8 flex items-center gap-2 border-b p-4",
          children: [
            o.jsx(Pr, { className: "text-routine h-4 w-4" }),
            o.jsxs("div", {
              children: [
                o.jsx("h2", { className: "text-sm font-semibold", children: r("dailyReflection") }),
                o.jsx("p", {
                  className: "text-muted-foreground text-xs",
                  children: r("howWasYourDay"),
                }),
              ],
            }),
          ],
        }),
        o.jsxs("form", {
          onSubmit: s(n),
          className: "space-y-3 p-4",
          children: [
            o.jsx("textarea", {
              ...a("reflection", { maxLength: Je }),
              placeholder: r("writeReflection"),
              maxLength: Je,
              className:
                "border-input placeholder:text-muted-foreground focus:ring-ring min-h-[100px] w-full resize-none rounded-lg border bg-neutral-50 p-3 text-sm transition-colors focus:ring-2 focus:outline-none",
            }),
            o.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                o.jsx("button", {
                  type: "submit",
                  disabled: i.isSubmitting,
                  className:
                    "bg-primary hover:bg-primary/90 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all active:scale-[0.97] disabled:opacity-50",
                  children: i.isSubmitting ? r("saving") : r("saveReflection"),
                }),
                o.jsxs("span", {
                  className: I(
                    "text-xs",
                    d >= 95
                      ? "font-semibold text-red-500"
                      : d >= 80
                        ? "text-amber-500"
                        : "text-muted-foreground",
                  ),
                  children: [f, "/", Je],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  });
function ve(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (a) {
    if ((e == null || e(a), n === !1 || !a.defaultPrevented)) return t == null ? void 0 : t(a);
  };
}
function ta(e, t) {
  const n = l.createContext(t),
    r = (s) => {
      const { children: c, ...i } = s,
        p = l.useMemo(() => i, Object.values(i));
      return o.jsx(n.Provider, { value: p, children: c });
    };
  r.displayName = e + "Provider";
  function a(s) {
    const c = l.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, a];
}
function na(e, t = []) {
  let n = [];
  function r(s, c) {
    const i = l.createContext(c),
      p = n.length;
    n = [...n, c];
    const u = (d) => {
      var h;
      const { scope: g, children: y, ...w } = d,
        m = ((h = g == null ? void 0 : g[e]) == null ? void 0 : h[p]) || i,
        b = l.useMemo(() => w, Object.values(w));
      return o.jsx(m.Provider, { value: b, children: y });
    };
    u.displayName = s + "Provider";
    function f(d, g) {
      var m;
      const y = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[p]) || i,
        w = l.useContext(y);
      if (w) return w;
      if (c !== void 0) return c;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const a = () => {
    const s = n.map((c) => l.createContext(c));
    return function (i) {
      const p = (i == null ? void 0 : i[e]) || s;
      return l.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: p } }), [i, p]);
    };
  };
  return ((a.scopeName = e), [r, ra(a, ...t)]);
}
function ra(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (s) {
      const c = r.reduce((i, { useScope: p, scopeName: u }) => {
        const d = p(s)[`__scope${u}`];
        return { ...i, ...d };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var ze = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {},
  aa = mn[" useId ".trim().toString()] || (() => {}),
  oa = 0;
function ht(e) {
  const [t, n] = l.useState(aa());
  return (
    ze(() => {
      n((r) => r ?? String(oa++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
var sa = mn[" useInsertionEffect ".trim().toString()] || ze;
function ia({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [a, s, c] = la({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    p = i ? e : a;
  {
    const f = l.useRef(e !== void 0);
    l.useEffect(() => {
      const d = f.current;
      (d !== i &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (f.current = i));
    }, [i, r]);
  }
  const u = l.useCallback(
    (f) => {
      var d;
      if (i) {
        const g = ca(f) ? f(e) : f;
        g !== e && ((d = c.current) == null || d.call(c, g));
      } else s(f);
    },
    [i, e, s, c],
  );
  return [p, u];
}
function la({ defaultProp: e, onChange: t }) {
  const [n, r] = l.useState(e),
    a = l.useRef(n),
    s = l.useRef(t);
  return (
    sa(() => {
      s.current = t;
    }, [t]),
    l.useEffect(() => {
      var c;
      a.current !== n && ((c = s.current) == null || c.call(s, n), (a.current = n));
    }, [n, a]),
    [n, r, s]
  );
}
function ca(e) {
  return typeof e == "function";
}
function hn(e) {
  const t = ua(e),
    n = l.forwardRef((r, a) => {
      const { children: s, ...c } = r,
        i = l.Children.toArray(s),
        p = i.find(fa);
      if (p) {
        const u = p.props.children,
          f = i.map((d) =>
            d === p
              ? l.Children.count(u) > 1
                ? l.Children.only(null)
                : l.isValidElement(u)
                  ? u.props.children
                  : null
              : d,
          );
        return o.jsx(t, {
          ...c,
          ref: a,
          children: l.isValidElement(u) ? l.cloneElement(u, void 0, f) : null,
        });
      }
      return o.jsx(t, { ...c, ref: a, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function ua(e) {
  const t = l.forwardRef((n, r) => {
    const { children: a, ...s } = n;
    if (l.isValidElement(a)) {
      const c = ha(a),
        i = ma(s, a.props);
      return (a.type !== l.Fragment && (i.ref = r ? Tr(r, c) : c), l.cloneElement(a, i));
    }
    return l.Children.count(a) > 1 ? l.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var da = Symbol("radix.slottable");
function fa(e) {
  return (
    l.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === da
  );
}
function ma(e, t) {
  const n = { ...t };
  for (const r in t) {
    const a = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? a && s
        ? (n[r] = (...i) => {
            const p = s(...i);
            return (a(...i), p);
          })
        : a && (n[r] = a)
      : r === "style"
        ? (n[r] = { ...a, ...s })
        : r === "className" && (n[r] = [a, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ha(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var pa = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ce = pa.reduce((e, t) => {
    const n = hn(`Primitive.${t}`),
      r = l.forwardRef((a, s) => {
        const { asChild: c, ...i } = a,
          p = c ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          o.jsx(p, { ...i, ref: s })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function ga(e, t) {
  e && xr.flushSync(() => e.dispatchEvent(t));
}
function Ye(e) {
  const t = l.useRef(e);
  return (
    l.useEffect(() => {
      t.current = e;
    }),
    l.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function va(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e);
  l.useEffect(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var xa = "DismissableLayer",
  Rt = "dismissableLayer.update",
  wa = "dismissableLayer.pointerDownOutside",
  ba = "dismissableLayer.focusOutside",
  Gt,
  pn = l.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  gn = l.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: a,
        onFocusOutside: s,
        onInteractOutside: c,
        onDismiss: i,
        ...p
      } = e,
      u = l.useContext(pn),
      [f, d] = l.useState(null),
      g =
        (f == null ? void 0 : f.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = l.useState({}),
      w = Ce(t, (v) => d(v)),
      m = Array.from(u.layers),
      [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = m.indexOf(b),
      j = f ? m.indexOf(f) : -1,
      D = u.layersWithOutsidePointerEventsDisabled.size > 0,
      x = j >= h,
      C = Na((v) => {
        const S = v.target,
          R = [...u.branches].some((O) => O.contains(S));
        !x || R || (a == null || a(v), c == null || c(v), v.defaultPrevented || i == null || i());
      }, g),
      T = Ca((v) => {
        const S = v.target;
        [...u.branches].some((O) => O.contains(S)) ||
          (s == null || s(v), c == null || c(v), v.defaultPrevented || i == null || i());
      }, g);
    return (
      va((v) => {
        j === u.layers.size - 1 &&
          (r == null || r(v), !v.defaultPrevented && i && (v.preventDefault(), i()));
      }, g),
      l.useEffect(() => {
        if (f)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Gt = g.body.style.pointerEvents), (g.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            Zt(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = Gt);
            }
          );
      }, [f, g, n, u]),
      l.useEffect(
        () => () => {
          f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Zt());
        },
        [f, u],
      ),
      l.useEffect(() => {
        const v = () => y({});
        return (document.addEventListener(Rt, v), () => document.removeEventListener(Rt, v));
      }, []),
      o.jsx(ce.div, {
        ...p,
        ref: w,
        style: { pointerEvents: D ? (x ? "auto" : "none") : void 0, ...e.style },
        onFocusCapture: ve(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: ve(e.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
gn.displayName = xa;
var ya = "DismissableLayerBranch",
  Ea = l.forwardRef((e, t) => {
    const n = l.useContext(pn),
      r = l.useRef(null),
      a = Ce(t, r);
    return (
      l.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      o.jsx(ce.div, { ...e, ref: a })
    );
  });
Ea.displayName = ya;
function Na(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e),
    r = l.useRef(!1),
    a = l.useRef(() => {});
  return (
    l.useEffect(() => {
      const s = (i) => {
          if (i.target && !r.current) {
            let p = function () {
              vn(wa, n, u, { discrete: !0 });
            };
            const u = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", a.current),
                (a.current = p),
                t.addEventListener("click", a.current, { once: !0 }))
              : p();
          } else t.removeEventListener("click", a.current);
          r.current = !1;
        },
        c = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        (window.clearTimeout(c),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", a.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Ca(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e),
    r = l.useRef(!1);
  return (
    l.useEffect(() => {
      const a = (s) => {
        s.target && !r.current && vn(ba, n, { originalEvent: s }, { discrete: !1 });
      };
      return (t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a));
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function Zt() {
  const e = new CustomEvent(Rt);
  document.dispatchEvent(e);
}
function vn(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && a.addEventListener(e, t, { once: !0 }), r ? ga(a, s) : a.dispatchEvent(s));
}
var pt = "focusScope.autoFocusOnMount",
  gt = "focusScope.autoFocusOnUnmount",
  Qt = { bubbles: !1, cancelable: !0 },
  Sa = "FocusScope",
  xn = l.forwardRef((e, t) => {
    const { loop: n = !1, trapped: r = !1, onMountAutoFocus: a, onUnmountAutoFocus: s, ...c } = e,
      [i, p] = l.useState(null),
      u = Ye(a),
      f = Ye(s),
      d = l.useRef(null),
      g = Ce(t, (m) => p(m)),
      y = l.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (l.useEffect(() => {
      if (r) {
        let m = function (D) {
            if (y.paused || !i) return;
            const x = D.target;
            i.contains(x) ? (d.current = x) : ge(d.current, { select: !0 });
          },
          b = function (D) {
            if (y.paused || !i) return;
            const x = D.relatedTarget;
            x !== null && (i.contains(x) || ge(d.current, { select: !0 }));
          },
          h = function (D) {
            if (document.activeElement === document.body)
              for (const C of D) C.removedNodes.length > 0 && ge(i);
          };
        (document.addEventListener("focusin", m), document.addEventListener("focusout", b));
        const j = new MutationObserver(h);
        return (
          i && j.observe(i, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", b),
              j.disconnect());
          }
        );
      }
    }, [r, i, y.paused]),
      l.useEffect(() => {
        if (i) {
          en.add(y);
          const m = document.activeElement;
          if (!i.contains(m)) {
            const h = new CustomEvent(pt, Qt);
            (i.addEventListener(pt, u),
              i.dispatchEvent(h),
              h.defaultPrevented ||
                (Da(Ma(wn(i)), { select: !0 }), document.activeElement === m && ge(i)));
          }
          return () => {
            (i.removeEventListener(pt, u),
              setTimeout(() => {
                const h = new CustomEvent(gt, Qt);
                (i.addEventListener(gt, f),
                  i.dispatchEvent(h),
                  h.defaultPrevented || ge(m ?? document.body, { select: !0 }),
                  i.removeEventListener(gt, f),
                  en.remove(y));
              }, 0));
          };
        }
      }, [i, u, f, y]));
    const w = l.useCallback(
      (m) => {
        if ((!n && !r) || y.paused) return;
        const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          h = document.activeElement;
        if (b && h) {
          const j = m.currentTarget,
            [D, x] = ja(j);
          D && x
            ? !m.shiftKey && h === x
              ? (m.preventDefault(), n && ge(D, { select: !0 }))
              : m.shiftKey && h === D && (m.preventDefault(), n && ge(x, { select: !0 }))
            : h === j && m.preventDefault();
        }
      },
      [n, r, y.paused],
    );
    return o.jsx(ce.div, { tabIndex: -1, ...c, ref: g, onKeyDown: w });
  });
xn.displayName = Sa;
function Da(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e) if ((ge(r, { select: t }), document.activeElement !== n)) return;
}
function ja(e) {
  const t = wn(e),
    n = Jt(t, e),
    r = Jt(t.reverse(), e);
  return [n, r];
}
function wn(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const a = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || a
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Jt(e, t) {
  for (const n of e) if (!Ra(n, { upTo: t })) return n;
}
function Ra(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ta(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ge(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && Ta(e) && t && e.select());
  }
}
var en = ka();
function ka() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = tn(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = tn(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function tn(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function Ma(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Oa = "Portal",
  bn = l.forwardRef((e, t) => {
    var i;
    const { container: n, ...r } = e,
      [a, s] = l.useState(!1);
    ze(() => s(!0), []);
    const c =
      n ||
      (a && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body));
    return c ? wr.createPortal(o.jsx(ce.div, { ...r, ref: t }), c) : null;
  });
bn.displayName = Oa;
function Aa(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var dt = (e) => {
  const { present: t, children: n } = e,
    r = Pa(t),
    a = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n),
    s = Ce(r.ref, La(a));
  return typeof n == "function" || r.isPresent ? l.cloneElement(a, { ref: s }) : null;
};
dt.displayName = "Presence";
function Pa(e) {
  const [t, n] = l.useState(),
    r = l.useRef(null),
    a = l.useRef(e),
    s = l.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [i, p] = Aa(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    l.useEffect(() => {
      const u = et(r.current);
      s.current = i === "mounted" ? u : "none";
    }, [i]),
    ze(() => {
      const u = r.current,
        f = a.current;
      if (f !== e) {
        const g = s.current,
          y = et(u);
        (e
          ? p("MOUNT")
          : y === "none" || (u == null ? void 0 : u.display) === "none"
            ? p("UNMOUNT")
            : p(f && g !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (a.current = e));
      }
    }, [e, p]),
    ze(() => {
      if (t) {
        let u;
        const f = t.ownerDocument.defaultView ?? window,
          d = (y) => {
            const m = et(r.current).includes(CSS.escape(y.animationName));
            if (y.target === t && m && (p("ANIMATION_END"), !a.current)) {
              const b = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = f.setTimeout(() => {
                  t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
                })));
            }
          },
          g = (y) => {
            y.target === t && (s.current = et(r.current));
          };
        return (
          t.addEventListener("animationstart", g),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            (f.clearTimeout(u),
              t.removeEventListener("animationstart", g),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d));
          }
        );
      } else p("ANIMATION_END");
    }, [t, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: l.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function et(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function La(e) {
  var r, a;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var vt = 0;
function Ia() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? nn()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? nn()),
      vt++,
      () => {
        (vt === 1 &&
          document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()),
          vt--);
      }
    );
  }, []);
}
function nn() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var ie = function () {
  return (
    (ie =
      Object.assign ||
      function (t) {
        for (var n, r = 1, a = arguments.length; r < a; r++) {
          n = arguments[r];
          for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    ie.apply(this, arguments)
  );
};
function yn(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
}
function _a(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, s; r < a; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var lt = "right-scroll-bar-position",
  ct = "width-before-scroll-bar",
  $a = "with-scroll-bars-hidden",
  Fa = "--removed-body-scroll-bar-size";
function xt(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function Wa(e, t) {
  var n = l.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && ((n.value = r), n.callback(r, a));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var Ba = typeof window < "u" ? l.useLayoutEffect : l.useEffect,
  rn = new WeakMap();
function Ua(e, t) {
  var n = Wa(null, function (r) {
    return e.forEach(function (a) {
      return xt(a, r);
    });
  });
  return (
    Ba(
      function () {
        var r = rn.get(n);
        if (r) {
          var a = new Set(r),
            s = new Set(e),
            c = n.current;
          (a.forEach(function (i) {
            s.has(i) || xt(i, null);
          }),
            s.forEach(function (i) {
              a.has(i) || xt(i, c);
            }));
        }
        rn.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Ha(e) {
  return e;
}
function Va(e, t) {
  t === void 0 && (t = Ha);
  var n = [],
    r = !1,
    a = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var c = t(s, r);
        return (
          n.push(c),
          function () {
            n = n.filter(function (i) {
              return i !== c;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var c = n;
          ((n = []), c.forEach(s));
        }
        n = {
          push: function (i) {
            return s(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var c = [];
        if (n.length) {
          var i = n;
          ((n = []), i.forEach(s), (c = n));
        }
        var p = function () {
            var f = c;
            ((c = []), f.forEach(s));
          },
          u = function () {
            return Promise.resolve().then(p);
          };
        (u(),
          (n = {
            push: function (f) {
              (c.push(f), u());
            },
            filter: function (f) {
              return ((c = c.filter(f)), n);
            },
          }));
      },
    };
  return a;
}
function za(e) {
  e === void 0 && (e = {});
  var t = Va(null);
  return ((t.options = ie({ async: !0, ssr: !1 }, e)), t);
}
var En = function (e) {
  var t = e.sideCar,
    n = yn(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return l.createElement(r, ie({}, n));
};
En.isSideCarExport = !0;
function Ya(e, t) {
  return (e.useMedium(t), En);
}
var Nn = za(),
  wt = function () {},
  ft = l.forwardRef(function (e, t) {
    var n = l.useRef(null),
      r = l.useState({ onScrollCapture: wt, onWheelCapture: wt, onTouchMoveCapture: wt }),
      a = r[0],
      s = r[1],
      c = e.forwardProps,
      i = e.children,
      p = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      d = e.shards,
      g = e.sideCar,
      y = e.noRelative,
      w = e.noIsolation,
      m = e.inert,
      b = e.allowPinchZoom,
      h = e.as,
      j = h === void 0 ? "div" : h,
      D = e.gapMode,
      x = yn(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = g,
      T = Ua([n, t]),
      v = ie(ie({}, x), a);
    return l.createElement(
      l.Fragment,
      null,
      f &&
        l.createElement(C, {
          sideCar: Nn,
          removeScrollBar: u,
          shards: d,
          noRelative: y,
          noIsolation: w,
          inert: m,
          setCallbacks: s,
          allowPinchZoom: !!b,
          lockRef: n,
          gapMode: D,
        }),
      c
        ? l.cloneElement(l.Children.only(i), ie(ie({}, v), { ref: T }))
        : l.createElement(j, ie({}, v, { className: p, ref: T }), i),
    );
  });
ft.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ft.classNames = { fullWidth: ct, zeroRight: lt };
var qa = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Xa() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = qa();
  return (t && e.setAttribute("nonce", t), e);
}
function Ka(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Ga(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Za = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = Xa()) && (Ka(t, n), Ga(t)), e++);
      },
      remove: function () {
        (e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  Qa = function () {
    var e = Za();
    return function (t, n) {
      l.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Cn = function () {
    var e = Qa(),
      t = function (n) {
        var r = n.styles,
          a = n.dynamic;
        return (e(r, a), null);
      };
    return t;
  },
  Ja = { left: 0, top: 0, right: 0, gap: 0 },
  bt = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  eo = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      a = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [bt(n), bt(r), bt(a)];
  },
  to = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Ja;
    var t = eo(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  no = Cn(),
  Pe = "data-scroll-locked",
  ro = function (e, t, n, r) {
    var a = e.left,
      s = e.top,
      c = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          $a,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Pe,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  a,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(i, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          lt,
          ` {
    right: `,
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          ct,
          ` {
    margin-right: `,
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(lt, " .")
        .concat(
          lt,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ct, " .")
        .concat(
          ct,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Pe,
          `] {
    `,
        )
        .concat(Fa, ": ")
        .concat(
          i,
          `px;
  }
`,
        )
    );
  },
  an = function () {
    var e = parseInt(document.body.getAttribute(Pe) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ao = function () {
    l.useEffect(function () {
      return (
        document.body.setAttribute(Pe, (an() + 1).toString()),
        function () {
          var e = an() - 1;
          e <= 0 ? document.body.removeAttribute(Pe) : document.body.setAttribute(Pe, e.toString());
        }
      );
    }, []);
  },
  oo = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      a = r === void 0 ? "margin" : r;
    ao();
    var s = l.useMemo(
      function () {
        return to(a);
      },
      [a],
    );
    return l.createElement(no, { styles: ro(s, !t, a, n ? "" : "!important") });
  },
  Tt = !1;
if (typeof window < "u")
  try {
    var tt = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Tt = !0), !0);
      },
    });
    (window.addEventListener("test", tt, tt), window.removeEventListener("test", tt, tt));
  } catch {
    Tt = !1;
  }
var ke = Tt ? { passive: !1 } : !1,
  so = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Sn = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !so(e) && n[t] === "visible");
  },
  io = function (e) {
    return Sn(e, "overflowY");
  },
  lo = function (e) {
    return Sn(e, "overflowX");
  },
  on = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var a = Dn(e, r);
      if (a) {
        var s = jn(e, r),
          c = s[1],
          i = s[2];
        if (c > i) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  co = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  uo = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Dn = function (e, t) {
    return e === "v" ? io(t) : lo(t);
  },
  jn = function (e, t) {
    return e === "v" ? co(t) : uo(t);
  },
  fo = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  mo = function (e, t, n, r, a) {
    var s = fo(e, window.getComputedStyle(t).direction),
      c = s * r,
      i = n.target,
      p = t.contains(i),
      u = !1,
      f = c > 0,
      d = 0,
      g = 0;
    do {
      if (!i) break;
      var y = jn(e, i),
        w = y[0],
        m = y[1],
        b = y[2],
        h = m - b - s * w;
      (w || h) && Dn(e, i) && ((d += h), (g += w));
      var j = i.parentNode;
      i = j && j.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? j.host : j;
    } while ((!p && i !== document.body) || (p && (t.contains(i) || t === i)));
    return (((f && Math.abs(d) < 1) || (!f && Math.abs(g) < 1)) && (u = !0), u);
  },
  nt = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  sn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  ln = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ho = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  po = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  go = 0,
  Me = [];
function vo(e) {
  var t = l.useRef([]),
    n = l.useRef([0, 0]),
    r = l.useRef(),
    a = l.useState(go++)[0],
    s = l.useState(Cn)[0],
    c = l.useRef(e);
  (l.useEffect(
    function () {
      c.current = e;
    },
    [e],
  ),
    l.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(a));
          var m = _a([e.lockRef.current], (e.shards || []).map(ln), !0).filter(Boolean);
          return (
            m.forEach(function (b) {
              return b.classList.add("allow-interactivity-".concat(a));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(a)),
                m.forEach(function (b) {
                  return b.classList.remove("allow-interactivity-".concat(a));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var i = l.useCallback(function (m, b) {
      if (("touches" in m && m.touches.length === 2) || (m.type === "wheel" && m.ctrlKey))
        return !c.current.allowPinchZoom;
      var h = nt(m),
        j = n.current,
        D = "deltaX" in m ? m.deltaX : j[0] - h[0],
        x = "deltaY" in m ? m.deltaY : j[1] - h[1],
        C,
        T = m.target,
        v = Math.abs(D) > Math.abs(x) ? "h" : "v";
      if ("touches" in m && v === "h" && T.type === "range") return !1;
      var S = window.getSelection(),
        R = S && S.anchorNode,
        O = R ? R === T || R.contains(T) : !1;
      if (O) return !1;
      var $ = on(v, T);
      if (!$) return !0;
      if (($ ? (C = v) : ((C = v === "v" ? "h" : "v"), ($ = on(v, T))), !$)) return !1;
      if ((!r.current && "changedTouches" in m && (D || x) && (r.current = C), !C)) return !0;
      var Y = r.current || C;
      return mo(Y, b, m, Y === "h" ? D : x);
    }, []),
    p = l.useCallback(function (m) {
      var b = m;
      if (!(!Me.length || Me[Me.length - 1] !== s)) {
        var h = "deltaY" in b ? sn(b) : nt(b),
          j = t.current.filter(function (C) {
            return (
              C.name === b.type &&
              (C.target === b.target || b.target === C.shadowParent) &&
              ho(C.delta, h)
            );
          })[0];
        if (j && j.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!j) {
          var D = (c.current.shards || [])
              .map(ln)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(b.target);
              }),
            x = D.length > 0 ? i(b, D[0]) : !c.current.noIsolation;
          x && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    u = l.useCallback(function (m, b, h, j) {
      var D = { name: m, delta: b, target: h, should: j, shadowParent: xo(h) };
      (t.current.push(D),
        setTimeout(function () {
          t.current = t.current.filter(function (x) {
            return x !== D;
          });
        }, 1));
    }, []),
    f = l.useCallback(function (m) {
      ((n.current = nt(m)), (r.current = void 0));
    }, []),
    d = l.useCallback(function (m) {
      u(m.type, sn(m), m.target, i(m, e.lockRef.current));
    }, []),
    g = l.useCallback(function (m) {
      u(m.type, nt(m), m.target, i(m, e.lockRef.current));
    }, []);
  l.useEffect(function () {
    return (
      Me.push(s),
      e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: g }),
      document.addEventListener("wheel", p, ke),
      document.addEventListener("touchmove", p, ke),
      document.addEventListener("touchstart", f, ke),
      function () {
        ((Me = Me.filter(function (m) {
          return m !== s;
        })),
          document.removeEventListener("wheel", p, ke),
          document.removeEventListener("touchmove", p, ke),
          document.removeEventListener("touchstart", f, ke));
      }
    );
  }, []);
  var y = e.removeScrollBar,
    w = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    w ? l.createElement(s, { styles: po(a) }) : null,
    y ? l.createElement(oo, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
  );
}
function xo(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
  return t;
}
const wo = Ya(Nn, vo);
var Rn = l.forwardRef(function (e, t) {
  return l.createElement(ft, ie({}, e, { ref: t, sideCar: wo }));
});
Rn.classNames = ft.classNames;
var bo = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Oe = new WeakMap(),
  rt = new WeakMap(),
  at = {},
  yt = 0,
  Tn = function (e) {
    return e && (e.host || Tn(e.parentNode));
  },
  yo = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Tn(n);
        return r && e.contains(r)
          ? r
          : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Eo = function (e, t, n, r) {
    var a = yo(t, Array.isArray(e) ? e : [e]);
    at[n] || (at[n] = new WeakMap());
    var s = at[n],
      c = [],
      i = new Set(),
      p = new Set(a),
      u = function (d) {
        !d || i.has(d) || (i.add(d), u(d.parentNode));
      };
    a.forEach(u);
    var f = function (d) {
      !d ||
        p.has(d) ||
        Array.prototype.forEach.call(d.children, function (g) {
          if (i.has(g)) f(g);
          else
            try {
              var y = g.getAttribute(r),
                w = y !== null && y !== "false",
                m = (Oe.get(g) || 0) + 1,
                b = (s.get(g) || 0) + 1;
              (Oe.set(g, m),
                s.set(g, b),
                c.push(g),
                m === 1 && w && rt.set(g, !0),
                b === 1 && g.setAttribute(n, "true"),
                w || g.setAttribute(r, "true"));
            } catch (h) {
              console.error("aria-hidden: cannot operate on ", g, h);
            }
        });
    };
    return (
      f(t),
      i.clear(),
      yt++,
      function () {
        (c.forEach(function (d) {
          var g = Oe.get(d) - 1,
            y = s.get(d) - 1;
          (Oe.set(d, g),
            s.set(d, y),
            g || (rt.has(d) || d.removeAttribute(r), rt.delete(d)),
            y || d.removeAttribute(n));
        }),
          yt--,
          yt || ((Oe = new WeakMap()), (Oe = new WeakMap()), (rt = new WeakMap()), (at = {})));
      }
    );
  },
  No = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      a = bo(e);
    return a
      ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live], script"))),
        Eo(r, a, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  mt = "Dialog",
  [kn] = na(mt),
  [Co, re] = kn(mt),
  Mn = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: a,
        onOpenChange: s,
        modal: c = !0,
      } = e,
      i = l.useRef(null),
      p = l.useRef(null),
      [u, f] = ia({ prop: r, defaultProp: a ?? !1, onChange: s, caller: mt });
    return o.jsx(Co, {
      scope: t,
      triggerRef: i,
      contentRef: p,
      contentId: ht(),
      titleId: ht(),
      descriptionId: ht(),
      open: u,
      onOpenChange: f,
      onOpenToggle: l.useCallback(() => f((d) => !d), [f]),
      modal: c,
      children: n,
    });
  };
Mn.displayName = mt;
var On = "DialogTrigger",
  So = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      a = re(On, n),
      s = Ce(t, a.triggerRef);
    return o.jsx(ce.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": a.open,
      "aria-controls": a.contentId,
      "data-state": $t(a.open),
      ...r,
      ref: s,
      onClick: ve(e.onClick, a.onOpenToggle),
    });
  });
So.displayName = On;
var It = "DialogPortal",
  [Do, An] = kn(It, { forceMount: void 0 }),
  Pn = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: a } = e,
      s = re(It, t);
    return o.jsx(Do, {
      scope: t,
      forceMount: n,
      children: l.Children.map(r, (c) =>
        o.jsx(dt, {
          present: n || s.open,
          children: o.jsx(bn, { asChild: !0, container: a, children: c }),
        }),
      ),
    });
  };
Pn.displayName = It;
var ut = "DialogOverlay",
  Ln = l.forwardRef((e, t) => {
    const n = An(ut, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...a } = e,
      s = re(ut, e.__scopeDialog);
    return s.modal
      ? o.jsx(dt, { present: r || s.open, children: o.jsx(Ro, { ...a, ref: t }) })
      : null;
  });
Ln.displayName = ut;
var jo = hn("DialogOverlay.RemoveScroll"),
  Ro = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      a = re(ut, n);
    return o.jsx(Rn, {
      as: jo,
      allowPinchZoom: !0,
      shards: [a.contentRef],
      children: o.jsx(ce.div, {
        "data-state": $t(a.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Ne = "DialogContent",
  In = l.forwardRef((e, t) => {
    const n = An(Ne, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...a } = e,
      s = re(Ne, e.__scopeDialog);
    return o.jsx(dt, {
      present: r || s.open,
      children: s.modal ? o.jsx(To, { ...a, ref: t }) : o.jsx(ko, { ...a, ref: t }),
    });
  });
In.displayName = Ne;
var To = l.forwardRef((e, t) => {
    const n = re(Ne, e.__scopeDialog),
      r = l.useRef(null),
      a = Ce(t, n.contentRef, r);
    return (
      l.useEffect(() => {
        const s = r.current;
        if (s) return No(s);
      }, []),
      o.jsx(_n, {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ve(e.onCloseAutoFocus, (s) => {
          var c;
          (s.preventDefault(), (c = n.triggerRef.current) == null || c.focus());
        }),
        onPointerDownOutside: ve(e.onPointerDownOutside, (s) => {
          const c = s.detail.originalEvent,
            i = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: ve(e.onFocusOutside, (s) => s.preventDefault()),
      })
    );
  }),
  ko = l.forwardRef((e, t) => {
    const n = re(Ne, e.__scopeDialog),
      r = l.useRef(!1),
      a = l.useRef(!1);
    return o.jsx(_n, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        var c, i;
        ((c = e.onCloseAutoFocus) == null || c.call(e, s),
          s.defaultPrevented ||
            (r.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()),
          (r.current = !1),
          (a.current = !1));
      },
      onInteractOutside: (s) => {
        var p, u;
        ((p = e.onInteractOutside) == null || p.call(e, s),
          s.defaultPrevented ||
            ((r.current = !0), s.detail.originalEvent.type === "pointerdown" && (a.current = !0)));
        const c = s.target;
        (((u = n.triggerRef.current) == null ? void 0 : u.contains(c)) && s.preventDefault(),
          s.detail.originalEvent.type === "focusin" && a.current && s.preventDefault());
      },
    });
  }),
  _n = l.forwardRef((e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: s, ...c } = e,
      i = re(Ne, n),
      p = l.useRef(null),
      u = Ce(t, p);
    return (
      Ia(),
      o.jsxs(o.Fragment, {
        children: [
          o.jsx(xn, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: a,
            onUnmountAutoFocus: s,
            children: o.jsx(gn, {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": $t(i.open),
              ...c,
              ref: u,
              onDismiss: () => i.onOpenChange(!1),
            }),
          }),
          o.jsxs(o.Fragment, {
            children: [
              o.jsx(Oo, { titleId: i.titleId }),
              o.jsx(Po, { contentRef: p, descriptionId: i.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  _t = "DialogTitle",
  $n = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      a = re(_t, n);
    return o.jsx(ce.h2, { id: a.titleId, ...r, ref: t });
  });
$n.displayName = _t;
var Fn = "DialogDescription",
  Wn = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      a = re(Fn, n);
    return o.jsx(ce.p, { id: a.descriptionId, ...r, ref: t });
  });
Wn.displayName = Fn;
var Bn = "DialogClose",
  Mo = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      a = re(Bn, n);
    return o.jsx(ce.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: ve(e.onClick, () => a.onOpenChange(!1)),
    });
  });
Mo.displayName = Bn;
function $t(e) {
  return e ? "open" : "closed";
}
var Un = "DialogTitleWarning",
  [Fs, Hn] = ta(Un, { contentName: Ne, titleName: _t, docsSlug: "dialog" }),
  Oo = ({ titleId: e }) => {
    const t = Hn(Un),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      l.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Ao = "DialogDescriptionWarning",
  Po = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Hn(Ao).contentName}}.`;
    return (
      l.useEffect(() => {
        var s;
        const a = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && a && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  Lo = Mn,
  Io = Pn,
  _o = Ln,
  $o = In,
  Fo = $n,
  Wo = Wn;
function Bo(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  ((n.type = "text/css"),
    t.appendChild(n),
    n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)));
}
const Vn = N.createContext({
    drawerRef: { current: null },
    overlayRef: { current: null },
    onPress: () => {},
    onRelease: () => {},
    onDrag: () => {},
    onNestedDrag: () => {},
    onNestedOpenChange: () => {},
    onNestedRelease: () => {},
    openProp: void 0,
    dismissible: !1,
    isOpen: !1,
    isDragging: !1,
    keyboardIsOpen: { current: !1 },
    snapPointsOffset: null,
    snapPoints: null,
    handleOnly: !1,
    modal: !1,
    shouldFade: !1,
    activeSnapPoint: null,
    onOpenChange: () => {},
    setActiveSnapPoint: () => {},
    closeDrawer: () => {},
    direction: "bottom",
    shouldAnimate: { current: !0 },
    shouldScaleBackground: !1,
    setBackgroundColorOnScale: !0,
    noBodyStyles: !1,
    container: null,
    autoFocus: !1,
  }),
  Ke = () => {
    const e = N.useContext(Vn);
    if (!e) throw new Error("useDrawerContext must be used within a Drawer.Root");
    return e;
  };
Bo(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Uo() {
  const e = navigator.userAgent;
  return typeof window < "u" && ((/Firefox/.test(e) && /Mobile/.test(e)) || /FxiOS/.test(e));
}
function Ho() {
  return Ft(/^Mac/);
}
function Vo() {
  return Ft(/^iPhone/);
}
function cn() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function zo() {
  return Ft(/^iPad/) || (Ho() && navigator.maxTouchPoints > 1);
}
function zn() {
  return Vo() || zo();
}
function Ft(e) {
  return typeof window < "u" && window.navigator != null
    ? e.test(window.navigator.platform)
    : void 0;
}
const Yo = 24,
  qo = typeof window < "u" ? l.useLayoutEffect : l.useEffect;
function un(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const Et = typeof document < "u" && window.visualViewport;
function dn(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Yn(e) {
  for (dn(e) && (e = e.parentElement); e && !dn(e); ) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const Xo = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
let ot = 0,
  Nt;
function Ko(e = {}) {
  let { isDisabled: t } = e;
  qo(() => {
    if (!t)
      return (
        ot++,
        ot === 1 && zn() && (Nt = Go()),
        () => {
          (ot--, ot === 0 && (Nt == null || Nt()));
        }
      );
  }, [t]);
}
function Go() {
  let e,
    t = 0,
    n = (d) => {
      ((e = Yn(d.target)),
        !(e === document.documentElement && e === document.body) &&
          (t = d.changedTouches[0].pageY));
    },
    r = (d) => {
      if (!e || e === document.documentElement || e === document.body) {
        d.preventDefault();
        return;
      }
      let g = d.changedTouches[0].pageY,
        y = e.scrollTop,
        w = e.scrollHeight - e.clientHeight;
      w !== 0 && (((y <= 0 && g > t) || (y >= w && g < t)) && d.preventDefault(), (t = g));
    },
    a = (d) => {
      let g = d.target;
      kt(g) &&
        g !== document.activeElement &&
        (d.preventDefault(),
        (g.style.transform = "translateY(-2000px)"),
        g.focus(),
        requestAnimationFrame(() => {
          g.style.transform = "";
        }));
    },
    s = (d) => {
      let g = d.target;
      kt(g) &&
        ((g.style.transform = "translateY(-2000px)"),
        requestAnimationFrame(() => {
          ((g.style.transform = ""),
            Et &&
              (Et.height < window.innerHeight
                ? requestAnimationFrame(() => {
                    fn(g);
                  })
                : Et.addEventListener("resize", () => fn(g), { once: !0 })));
        }));
    },
    c = () => {
      window.scrollTo(0, 0);
    },
    i = window.pageXOffset,
    p = window.pageYOffset,
    u = un(
      Zo(
        document.documentElement,
        "paddingRight",
        `${window.innerWidth - document.documentElement.clientWidth}px`,
      ),
    );
  window.scrollTo(0, 0);
  let f = un(
    He(document, "touchstart", n, { passive: !1, capture: !0 }),
    He(document, "touchmove", r, { passive: !1, capture: !0 }),
    He(document, "touchend", a, { passive: !1, capture: !0 }),
    He(document, "focus", s, !0),
    He(window, "scroll", c),
  );
  return () => {
    (u(), f(), window.scrollTo(i, p));
  };
}
function Zo(e, t, n) {
  let r = e.style[t];
  return (
    (e.style[t] = n),
    () => {
      e.style[t] = r;
    }
  );
}
function He(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function fn(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Yn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top,
        a = e.getBoundingClientRect().top,
        s = e.getBoundingClientRect().bottom;
      const c = n.getBoundingClientRect().bottom + Yo;
      s > c && (n.scrollTop += a - r);
    }
    e = n.parentElement;
  }
}
function kt(e) {
  return (
    (e instanceof HTMLInputElement && !Xo.has(e.type)) ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLElement && e.isContentEditable)
  );
}
function Qo(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Jo(...e) {
  return (t) => e.forEach((n) => Qo(n, t));
}
function qn(...e) {
  return l.useCallback(Jo(...e), e);
}
const Xn = new WeakMap();
function z(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  (Object.entries(t).forEach(([a, s]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, s);
      return;
    }
    ((r[a] = e.style[a]), (e.style[a] = s));
  }),
    !n && Xn.set(e, r));
}
function es(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Xn.get(e);
  n && (e.style[t] = n[t]);
}
const V = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function st(e, t) {
  if (!e) return null;
  const n = window.getComputedStyle(e),
    r = n.transform || n.webkitTransform || n.mozTransform;
  let a = r.match(/^matrix3d\((.+)\)$/);
  return a
    ? parseFloat(a[1].split(", ")[V(t) ? 13 : 12])
    : ((a = r.match(/^matrix\((.+)\)$/)), a ? parseFloat(a[1].split(", ")[V(t) ? 5 : 4]) : null);
}
function ts(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Ct(e, t) {
  if (!e) return () => {};
  const n = e.style.cssText;
  return (
    Object.assign(e.style, t),
    () => {
      e.style.cssText = n;
    }
  );
}
function ns(...e) {
  return (...t) => {
    for (const n of e) typeof n == "function" && n(...t);
  };
}
const W = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] },
  Kn = 0.4,
  rs = 0.25,
  as = 100,
  Gn = 8,
  Ee = 16,
  Mt = 26,
  St = "vaul-dragging";
function Zn(e) {
  const t = N.useRef(e);
  return (
    N.useEffect(() => {
      t.current = e;
    }),
    N.useMemo(
      () =>
        (...n) =>
          t.current == null ? void 0 : t.current.call(t, ...n),
      [],
    )
  );
}
function os({ defaultProp: e, onChange: t }) {
  const n = N.useState(e),
    [r] = n,
    a = N.useRef(r),
    s = Zn(t);
  return (
    N.useEffect(() => {
      a.current !== r && (s(r), (a.current = r));
    }, [r, a, s]),
    n
  );
}
function Qn({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, a] = os({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    c = s ? e : r,
    i = Zn(n),
    p = N.useCallback(
      (u) => {
        if (s) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && i(d);
        } else a(u);
      },
      [s, e, a, i],
    );
  return [c, p];
}
function ss({
  activeSnapPointProp: e,
  setActiveSnapPointProp: t,
  snapPoints: n,
  drawerRef: r,
  overlayRef: a,
  fadeFromIndex: s,
  onSnapPointChange: c,
  direction: i = "bottom",
  container: p,
  snapToSequentialPoint: u,
}) {
  const [f, d] = Qn({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }),
    [g, y] = N.useState(
      typeof window < "u"
        ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight }
        : void 0,
    );
  N.useEffect(() => {
    function v() {
      y({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    }
    return (window.addEventListener("resize", v), () => window.removeEventListener("resize", v));
  }, []);
  const w = N.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [n, f]),
    m = N.useMemo(() => {
      var v;
      return (v = n == null ? void 0 : n.findIndex((S) => S === f)) != null ? v : null;
    }, [n, f]),
    b = (n && n.length > 0 && (s || s === 0) && !Number.isNaN(s) && n[s] === f) || !n,
    h = N.useMemo(() => {
      const v = p
        ? { width: p.getBoundingClientRect().width, height: p.getBoundingClientRect().height }
        : typeof window < "u"
          ? { width: window.innerWidth, height: window.innerHeight }
          : { width: 0, height: 0 };
      var S;
      return (S =
        n == null
          ? void 0
          : n.map((R) => {
              const O = typeof R == "string";
              let $ = 0;
              if ((O && ($ = parseInt(R, 10)), V(i))) {
                const k = O ? $ : g ? R * v.height : 0;
                return g ? (i === "bottom" ? v.height - k : -v.height + k) : k;
              }
              const Y = O ? $ : g ? R * v.width : 0;
              return g ? (i === "right" ? v.width - Y : -v.width + Y) : Y;
            })) != null
        ? S
        : [];
    }, [n, g, p]),
    j = N.useMemo(() => (m !== null ? (h == null ? void 0 : h[m]) : null), [h, m]),
    D = N.useCallback(
      (v) => {
        var S;
        const R = (S = h == null ? void 0 : h.findIndex((O) => O === v)) != null ? S : null;
        (c(R),
          z(r.current, {
            transition: `transform ${W.DURATION}s cubic-bezier(${W.EASE.join(",")})`,
            transform: V(i) ? `translate3d(0, ${v}px, 0)` : `translate3d(${v}px, 0, 0)`,
          }),
          h && R !== h.length - 1 && s !== void 0 && R !== s && R < s
            ? z(a.current, {
                transition: `opacity ${W.DURATION}s cubic-bezier(${W.EASE.join(",")})`,
                opacity: "0",
              })
            : z(a.current, {
                transition: `opacity ${W.DURATION}s cubic-bezier(${W.EASE.join(",")})`,
                opacity: "1",
              }),
          d(n == null ? void 0 : n[Math.max(R, 0)]));
      },
      [r.current, n, h, s, a, d],
    );
  N.useEffect(() => {
    if (f || e) {
      var v;
      const S = (v = n == null ? void 0 : n.findIndex((R) => R === e || R === f)) != null ? v : -1;
      h && S !== -1 && typeof h[S] == "number" && D(h[S]);
    }
  }, [f, e, n, h, D]);
  function x({ draggedDistance: v, closeDrawer: S, velocity: R, dismissible: O }) {
    if (s === void 0) return;
    const $ = i === "bottom" || i === "right" ? (j ?? 0) - v : (j ?? 0) + v,
      Y = m === s - 1,
      k = m === 0,
      K = v > 0;
    if (
      (Y &&
        z(a.current, { transition: `opacity ${W.DURATION}s cubic-bezier(${W.EASE.join(",")})` }),
      !u && R > 2 && !K)
    ) {
      O ? S() : D(h[0]);
      return;
    }
    if (!u && R > 2 && K && h && n) {
      D(h[n.length - 1]);
      return;
    }
    const q =
        h == null
          ? void 0
          : h.reduce((U, X) =>
              typeof U != "number" || typeof X != "number"
                ? U
                : Math.abs(X - $) < Math.abs(U - $)
                  ? X
                  : U,
            ),
      _ = V(i) ? window.innerHeight : window.innerWidth;
    if (R > Kn && Math.abs(v) < _ * 0.4) {
      const U = K ? 1 : -1;
      if (U > 0 && w && n) {
        D(h[n.length - 1]);
        return;
      }
      if ((k && U < 0 && O && S(), m === null)) return;
      D(h[m + U]);
      return;
    }
    D(q);
  }
  function C({ draggedDistance: v }) {
    if (j === null) return;
    const S = i === "bottom" || i === "right" ? j - v : j + v;
    ((i === "bottom" || i === "right") && S < h[h.length - 1]) ||
      ((i === "top" || i === "left") && S > h[h.length - 1]) ||
      z(r.current, { transform: V(i) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)` });
  }
  function T(v, S) {
    if (!n || typeof m != "number" || !h || s === void 0) return null;
    const R = m === s - 1;
    if (m >= s && S) return 0;
    if (R && !S) return 1;
    if (!b && !R) return null;
    const $ = R ? m + 1 : m - 1,
      Y = R ? h[$] - h[$ - 1] : h[$ + 1] - h[$],
      k = v / Math.abs(Y);
    return R ? 1 - k : k;
  }
  return {
    isLastSnapPoint: w,
    activeSnapPoint: f,
    shouldFade: b,
    getPercentageDragged: T,
    setActiveSnapPoint: d,
    activeSnapPointIndex: m,
    onRelease: x,
    onDrag: C,
    snapPointsOffset: h,
  };
}
const is = () => () => {};
function ls() {
  const {
      direction: e,
      isOpen: t,
      shouldScaleBackground: n,
      setBackgroundColorOnScale: r,
      noBodyStyles: a,
    } = Ke(),
    s = N.useRef(null),
    c = l.useMemo(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - Mt) / window.innerWidth;
  }
  N.useEffect(() => {
    if (t && n) {
      s.current && clearTimeout(s.current);
      const p =
        document.querySelector("[data-vaul-drawer-wrapper]") ||
        document.querySelector("[vaul-drawer-wrapper]");
      if (!p) return;
      ns(
        r && !a ? Ct(document.body, { background: "black" }) : is,
        Ct(p, {
          transformOrigin: V(e) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${W.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${W.EASE.join(",")})`,
        }),
      );
      const u = Ct(p, {
        borderRadius: `${Gn}px`,
        overflow: "hidden",
        ...(V(e)
          ? { transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` }
          : {
              transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
            }),
      });
      return () => {
        (u(),
          (s.current = window.setTimeout(() => {
            c
              ? (document.body.style.background = c)
              : document.body.style.removeProperty("background");
          }, W.DURATION * 1e3)));
      };
    }
  }, [t, n, c]);
}
let Ve = null;
function cs({
  isOpen: e,
  modal: t,
  nested: n,
  hasBeenOpened: r,
  preventScrollRestoration: a,
  noBodyStyles: s,
}) {
  const [c, i] = N.useState(() => (typeof window < "u" ? window.location.href : "")),
    p = N.useRef(0),
    u = N.useCallback(() => {
      if (cn() && Ve === null && e && !s) {
        Ve = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
          height: document.body.style.height,
          right: "unset",
        };
        const { scrollX: d, innerHeight: g } = window;
        (document.body.style.setProperty("position", "fixed", "important"),
          Object.assign(document.body.style, {
            top: `${-p.current}px`,
            left: `${-d}px`,
            right: "0px",
            height: "auto",
          }),
          window.setTimeout(
            () =>
              window.requestAnimationFrame(() => {
                const y = g - window.innerHeight;
                y && p.current >= g && (document.body.style.top = `${-(p.current + y)}px`);
              }),
            300,
          ));
      }
    }, [e]),
    f = N.useCallback(() => {
      if (cn() && Ve !== null && !s) {
        const d = -parseInt(document.body.style.top, 10),
          g = -parseInt(document.body.style.left, 10);
        (Object.assign(document.body.style, Ve),
          window.requestAnimationFrame(() => {
            if (a && c !== window.location.href) {
              i(window.location.href);
              return;
            }
            window.scrollTo(g, d);
          }),
          (Ve = null));
      }
    }, [c]);
  return (
    N.useEffect(() => {
      function d() {
        p.current = window.scrollY;
      }
      return (
        d(),
        window.addEventListener("scroll", d),
        () => {
          window.removeEventListener("scroll", d);
        }
      );
    }, []),
    N.useEffect(() => {
      if (t)
        return () => {
          typeof document > "u" || document.querySelector("[data-vaul-drawer]") || f();
        };
    }, [t, f]),
    N.useEffect(() => {
      n ||
        !r ||
        (e
          ? (!window.matchMedia("(display-mode: standalone)").matches && u(),
            t ||
              window.setTimeout(() => {
                f();
              }, 500))
          : f());
    }, [e, r, c, t, n, u, f]),
    { restorePositionSetting: f }
  );
}
function us({
  open: e,
  onOpenChange: t,
  children: n,
  onDrag: r,
  onRelease: a,
  snapPoints: s,
  shouldScaleBackground: c = !1,
  setBackgroundColorOnScale: i = !0,
  closeThreshold: p = rs,
  scrollLockTimeout: u = as,
  dismissible: f = !0,
  handleOnly: d = !1,
  fadeFromIndex: g = s && s.length - 1,
  activeSnapPoint: y,
  setActiveSnapPoint: w,
  fixed: m,
  modal: b = !0,
  onClose: h,
  nested: j,
  noBodyStyles: D = !1,
  direction: x = "bottom",
  defaultOpen: C = !1,
  disablePreventScroll: T = !0,
  snapToSequentialPoint: v = !1,
  preventScrollRestoration: S = !1,
  repositionInputs: R = !0,
  onAnimationEnd: O,
  container: $,
  autoFocus: Y = !1,
}) {
  var k, K;
  const [q = !1, _] = Qn({
      defaultProp: C,
      prop: e,
      onChange: (M) => {
        (t == null || t(M),
          !M && !j && ur(),
          setTimeout(() => {
            O == null || O(M);
          }, W.DURATION * 1e3),
          M &&
            !b &&
            typeof window < "u" &&
            window.requestAnimationFrame(() => {
              document.body.style.pointerEvents = "auto";
            }),
          M || (document.body.style.pointerEvents = "auto"));
      },
    }),
    [U, X] = N.useState(!1),
    [ae, xe] = N.useState(!1),
    [Se, H] = N.useState(!1),
    ee = N.useRef(null),
    de = N.useRef(null),
    Ie = N.useRef(null),
    _e = N.useRef(null),
    fe = N.useRef(null),
    we = N.useRef(!1),
    De = N.useRef(null),
    je = N.useRef(0),
    le = N.useRef(!1),
    $e = N.useRef(!C),
    Fe = N.useRef(0),
    E = N.useRef(null),
    F = N.useRef(((k = E.current) == null ? void 0 : k.getBoundingClientRect().height) || 0),
    J = N.useRef(((K = E.current) == null ? void 0 : K.getBoundingClientRect().width) || 0),
    oe = N.useRef(0),
    Re = N.useCallback((M) => {
      s && M === Be.length - 1 && (de.current = new Date());
    }, []),
    {
      activeSnapPoint: We,
      activeSnapPointIndex: Te,
      setActiveSnapPoint: Wt,
      onRelease: ir,
      snapPointsOffset: Be,
      onDrag: lr,
      shouldFade: Bt,
      getPercentageDragged: cr,
    } = ss({
      snapPoints: s,
      activeSnapPointProp: y,
      setActiveSnapPointProp: w,
      drawerRef: E,
      fadeFromIndex: g,
      overlayRef: ee,
      onSnapPointChange: Re,
      direction: x,
      container: $,
      snapToSequentialPoint: v,
    });
  Ko({ isDisabled: !q || ae || !b || Se || !U || !R || !T });
  const { restorePositionSetting: ur } = cs({
    isOpen: q,
    modal: b,
    nested: j ?? !1,
    hasBeenOpened: U,
    preventScrollRestoration: S,
    noBodyStyles: D,
  });
  function Ge() {
    return (window.innerWidth - Mt) / window.innerWidth;
  }
  function dr(M) {
    var P, L;
    (!f && !s) ||
      (E.current && !E.current.contains(M.target)) ||
      ((F.current = ((P = E.current) == null ? void 0 : P.getBoundingClientRect().height) || 0),
      (J.current = ((L = E.current) == null ? void 0 : L.getBoundingClientRect().width) || 0),
      xe(!0),
      (Ie.current = new Date()),
      zn() && window.addEventListener("touchend", () => (we.current = !1), { once: !0 }),
      M.target.setPointerCapture(M.pointerId),
      (je.current = V(x) ? M.pageY : M.pageX));
  }
  function Ut(M, P) {
    var L;
    let A = M;
    const B = (L = window.getSelection()) == null ? void 0 : L.toString(),
      Z = E.current ? st(E.current, x) : null,
      G = new Date();
    if (
      A.tagName === "SELECT" ||
      A.hasAttribute("data-vaul-no-drag") ||
      A.closest("[data-vaul-no-drag]")
    )
      return !1;
    if (x === "right" || x === "left") return !0;
    if (de.current && G.getTime() - de.current.getTime() < 500) return !1;
    if (Z !== null && (x === "bottom" ? Z > 0 : Z < 0)) return !0;
    if (B && B.length > 0) return !1;
    if ((fe.current && G.getTime() - fe.current.getTime() < u && Z === 0) || P)
      return ((fe.current = G), !1);
    for (; A; ) {
      if (A.scrollHeight > A.clientHeight) {
        if (A.scrollTop !== 0) return ((fe.current = new Date()), !1);
        if (A.getAttribute("role") === "dialog") return !0;
      }
      A = A.parentNode;
    }
    return !0;
  }
  function fr(M) {
    if (E.current && ae) {
      const P = x === "bottom" || x === "right" ? 1 : -1,
        L = (je.current - (V(x) ? M.pageY : M.pageX)) * P,
        A = L > 0,
        B = s && !f && !A;
      if (B && Te === 0) return;
      const Z = Math.abs(L),
        G = document.querySelector("[data-vaul-drawer-wrapper]"),
        me = x === "bottom" || x === "top" ? F.current : J.current;
      let te = Z / me;
      const be = cr(Z, A);
      if ((be !== null && (te = be), (B && te >= 1) || (!we.current && !Ut(M.target, A)))) return;
      if (
        (E.current.classList.add(St),
        (we.current = !0),
        z(E.current, { transition: "none" }),
        z(ee.current, { transition: "none" }),
        s && lr({ draggedDistance: L }),
        A && !s)
      ) {
        const se = ts(L),
          Ze = Math.min(se * -1, 0) * P;
        z(E.current, {
          transform: V(x) ? `translate3d(0, ${Ze}px, 0)` : `translate3d(${Ze}px, 0, 0)`,
        });
        return;
      }
      const he = 1 - te;
      if (
        ((Bt || (g && Te === g - 1)) &&
          (r == null || r(M, te), z(ee.current, { opacity: `${he}`, transition: "none" }, !0)),
        G && ee.current && c)
      ) {
        const se = Math.min(Ge() + te * (1 - Ge()), 1),
          Ze = 8 - te * 8,
          Vt = Math.max(0, 14 - te * 14);
        z(
          G,
          {
            borderRadius: `${Ze}px`,
            transform: V(x)
              ? `scale(${se}) translate3d(0, ${Vt}px, 0)`
              : `scale(${se}) translate3d(${Vt}px, 0, 0)`,
            transition: "none",
          },
          !0,
        );
      }
      if (!s) {
        const se = Z * P;
        z(E.current, {
          transform: V(x) ? `translate3d(0, ${se}px, 0)` : `translate3d(${se}px, 0, 0)`,
        });
      }
    }
  }
  (N.useEffect(() => {
    window.requestAnimationFrame(() => {
      $e.current = !0;
    });
  }, []),
    N.useEffect(() => {
      var M;
      function P() {
        if (!E.current || !R) return;
        const L = document.activeElement;
        if (kt(L) || le.current) {
          var A;
          const B = ((A = window.visualViewport) == null ? void 0 : A.height) || 0,
            Z = window.innerHeight;
          let G = Z - B;
          const me = E.current.getBoundingClientRect().height || 0,
            te = me > Z * 0.8;
          oe.current || (oe.current = me);
          const be = E.current.getBoundingClientRect().top;
          if (
            (Math.abs(Fe.current - G) > 60 && (le.current = !le.current),
            s && s.length > 0 && Be && Te)
          ) {
            const he = Be[Te] || 0;
            G += he;
          }
          if (((Fe.current = G), me > B || le.current)) {
            const he = E.current.getBoundingClientRect().height;
            let se = he;
            (he > B && (se = B - (te ? be : Mt)),
              m
                ? (E.current.style.height = `${he - Math.max(G, 0)}px`)
                : (E.current.style.height = `${Math.max(se, B - be)}px`));
          } else Uo() || (E.current.style.height = `${oe.current}px`);
          s && s.length > 0 && !le.current
            ? (E.current.style.bottom = "0px")
            : (E.current.style.bottom = `${Math.max(G, 0)}px`);
        }
      }
      return (
        (M = window.visualViewport) == null || M.addEventListener("resize", P),
        () => {
          var L;
          return (L = window.visualViewport) == null ? void 0 : L.removeEventListener("resize", P);
        }
      );
    }, [Te, s, Be]));
  function Ue(M) {
    (mr(),
      h == null || h(),
      M || _(!1),
      setTimeout(() => {
        s && Wt(s[0]);
      }, W.DURATION * 1e3));
  }
  function Ht() {
    if (!E.current) return;
    const M = document.querySelector("[data-vaul-drawer-wrapper]"),
      P = st(E.current, x);
    (z(E.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${W.DURATION}s cubic-bezier(${W.EASE.join(",")})`,
    }),
      z(ee.current, {
        transition: `opacity ${W.DURATION}s cubic-bezier(${W.EASE.join(",")})`,
        opacity: "1",
      }),
      c &&
        P &&
        P > 0 &&
        q &&
        z(
          M,
          {
            borderRadius: `${Gn}px`,
            overflow: "hidden",
            ...(V(x)
              ? {
                  transform: `scale(${Ge()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                  transformOrigin: "top",
                }
              : {
                  transform: `scale(${Ge()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                  transformOrigin: "left",
                }),
            transitionProperty: "transform, border-radius",
            transitionDuration: `${W.DURATION}s`,
            transitionTimingFunction: `cubic-bezier(${W.EASE.join(",")})`,
          },
          !0,
        ));
  }
  function mr() {
    !ae ||
      !E.current ||
      (E.current.classList.remove(St), (we.current = !1), xe(!1), (_e.current = new Date()));
  }
  function hr(M) {
    if (!ae || !E.current) return;
    (E.current.classList.remove(St), (we.current = !1), xe(!1), (_e.current = new Date()));
    const P = st(E.current, x);
    if (!M || !Ut(M.target, !1) || !P || Number.isNaN(P) || Ie.current === null) return;
    const L = _e.current.getTime() - Ie.current.getTime(),
      A = je.current - (V(x) ? M.pageY : M.pageX),
      B = Math.abs(A) / L;
    if (
      (B > 0.05 &&
        (H(!0),
        setTimeout(() => {
          H(!1);
        }, 200)),
      s)
    ) {
      (ir({
        draggedDistance: A * (x === "bottom" || x === "right" ? 1 : -1),
        closeDrawer: Ue,
        velocity: B,
        dismissible: f,
      }),
        a == null || a(M, !0));
      return;
    }
    if (x === "bottom" || x === "right" ? A > 0 : A < 0) {
      (Ht(), a == null || a(M, !0));
      return;
    }
    if (B > Kn) {
      (Ue(), a == null || a(M, !1));
      return;
    }
    var Z;
    const G = Math.min(
      (Z = E.current.getBoundingClientRect().height) != null ? Z : 0,
      window.innerHeight,
    );
    var me;
    const te = Math.min(
        (me = E.current.getBoundingClientRect().width) != null ? me : 0,
        window.innerWidth,
      ),
      be = x === "left" || x === "right";
    if (Math.abs(P) >= (be ? te : G) * p) {
      (Ue(), a == null || a(M, !1));
      return;
    }
    (a == null || a(M, !0), Ht());
  }
  N.useEffect(
    () => (
      q && (z(document.documentElement, { scrollBehavior: "auto" }), (de.current = new Date())),
      () => {
        es(document.documentElement, "scrollBehavior");
      }
    ),
    [q],
  );
  function pr(M) {
    const P = M ? (window.innerWidth - Ee) / window.innerWidth : 1,
      L = M ? -Ee : 0;
    (De.current && window.clearTimeout(De.current),
      z(E.current, {
        transition: `transform ${W.DURATION}s cubic-bezier(${W.EASE.join(",")})`,
        transform: V(x)
          ? `scale(${P}) translate3d(0, ${L}px, 0)`
          : `scale(${P}) translate3d(${L}px, 0, 0)`,
      }),
      !M &&
        E.current &&
        (De.current = setTimeout(() => {
          const A = st(E.current, x);
          z(E.current, {
            transition: "none",
            transform: V(x) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`,
          });
        }, 500)));
  }
  function gr(M, P) {
    if (P < 0) return;
    const L = (window.innerWidth - Ee) / window.innerWidth,
      A = L + P * (1 - L),
      B = -Ee + P * Ee;
    z(E.current, {
      transform: V(x)
        ? `scale(${A}) translate3d(0, ${B}px, 0)`
        : `scale(${A}) translate3d(${B}px, 0, 0)`,
      transition: "none",
    });
  }
  function vr(M, P) {
    const L = V(x) ? window.innerHeight : window.innerWidth,
      A = P ? (L - Ee) / L : 1,
      B = P ? -Ee : 0;
    P &&
      z(E.current, {
        transition: `transform ${W.DURATION}s cubic-bezier(${W.EASE.join(",")})`,
        transform: V(x)
          ? `scale(${A}) translate3d(0, ${B}px, 0)`
          : `scale(${A}) translate3d(${B}px, 0, 0)`,
      });
  }
  return (
    N.useEffect(() => {
      b ||
        window.requestAnimationFrame(() => {
          document.body.style.pointerEvents = "auto";
        });
    }, [b]),
    N.createElement(
      Lo,
      {
        defaultOpen: C,
        onOpenChange: (M) => {
          (!f && !M) || (M ? X(!0) : Ue(!0), _(M));
        },
        open: q,
      },
      N.createElement(
        Vn.Provider,
        {
          value: {
            activeSnapPoint: We,
            snapPoints: s,
            setActiveSnapPoint: Wt,
            drawerRef: E,
            overlayRef: ee,
            onOpenChange: t,
            onPress: dr,
            onRelease: hr,
            onDrag: fr,
            dismissible: f,
            shouldAnimate: $e,
            handleOnly: d,
            isOpen: q,
            isDragging: ae,
            shouldFade: Bt,
            closeDrawer: Ue,
            onNestedDrag: gr,
            onNestedOpenChange: pr,
            onNestedRelease: vr,
            keyboardIsOpen: le,
            modal: b,
            snapPointsOffset: Be,
            activeSnapPointIndex: Te,
            direction: x,
            shouldScaleBackground: c,
            setBackgroundColorOnScale: i,
            noBodyStyles: D,
            container: $,
            autoFocus: Y,
          },
        },
        n,
      ),
    )
  );
}
const Jn = N.forwardRef(function ({ ...e }, t) {
  const {
      overlayRef: n,
      snapPoints: r,
      onRelease: a,
      shouldFade: s,
      isOpen: c,
      modal: i,
      shouldAnimate: p,
    } = Ke(),
    u = qn(t, n),
    f = r && r.length > 0;
  if (!i) return null;
  const d = N.useCallback((g) => a(g), [a]);
  return N.createElement(_o, {
    onMouseUp: d,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": c && f ? "true" : "false",
    "data-vaul-snap-points-overlay": c && s ? "true" : "false",
    "data-vaul-animate": p != null && p.current ? "true" : "false",
    ...e,
  });
});
Jn.displayName = "Drawer.Overlay";
const er = N.forwardRef(function (
  { onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r },
  a,
) {
  const {
      drawerRef: s,
      onPress: c,
      onRelease: i,
      onDrag: p,
      keyboardIsOpen: u,
      snapPointsOffset: f,
      activeSnapPointIndex: d,
      modal: g,
      isOpen: y,
      direction: w,
      snapPoints: m,
      container: b,
      handleOnly: h,
      shouldAnimate: j,
      autoFocus: D,
    } = Ke(),
    [x, C] = N.useState(!1),
    T = qn(a, s),
    v = N.useRef(null),
    S = N.useRef(null),
    R = N.useRef(!1),
    O = m && m.length > 0;
  ls();
  const $ = (k, K, q = 0) => {
    if (R.current) return !0;
    const _ = Math.abs(k.y),
      U = Math.abs(k.x),
      X = U > _,
      ae = ["bottom", "right"].includes(K) ? 1 : -1;
    if (K === "left" || K === "right") {
      if (!(k.x * ae < 0) && U >= 0 && U <= q) return X;
    } else if (!(k.y * ae < 0) && _ >= 0 && _ <= q) return !X;
    return ((R.current = !0), !0);
  };
  N.useEffect(() => {
    O &&
      window.requestAnimationFrame(() => {
        C(!0);
      });
  }, []);
  function Y(k) {
    ((v.current = null), (R.current = !1), i(k));
  }
  return N.createElement($o, {
    "data-vaul-drawer-direction": w,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": x ? "true" : "false",
    "data-vaul-snap-points": y && O ? "true" : "false",
    "data-vaul-custom-container": b ? "true" : "false",
    "data-vaul-animate": j != null && j.current ? "true" : "false",
    ...r,
    ref: T,
    style: f && f.length > 0 ? { "--snap-point-height": `${f[d ?? 0]}px`, ...t } : t,
    onPointerDown: (k) => {
      h ||
        (r.onPointerDown == null || r.onPointerDown.call(r, k),
        (v.current = { x: k.pageX, y: k.pageY }),
        c(k));
    },
    onOpenAutoFocus: (k) => {
      (n == null || n(k), D || k.preventDefault());
    },
    onPointerDownOutside: (k) => {
      if ((e == null || e(k), !g || k.defaultPrevented)) {
        k.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: (k) => {
      if (!g) {
        k.preventDefault();
        return;
      }
    },
    onPointerMove: (k) => {
      if (
        ((S.current = k), h || (r.onPointerMove == null || r.onPointerMove.call(r, k), !v.current))
      )
        return;
      const K = k.pageY - v.current.y,
        q = k.pageX - v.current.x,
        _ = k.pointerType === "touch" ? 10 : 2;
      $({ x: q, y: K }, w, _) ? p(k) : (Math.abs(q) > _ || Math.abs(K) > _) && (v.current = null);
    },
    onPointerUp: (k) => {
      (r.onPointerUp == null || r.onPointerUp.call(r, k),
        (v.current = null),
        (R.current = !1),
        i(k));
    },
    onPointerOut: (k) => {
      (r.onPointerOut == null || r.onPointerOut.call(r, k), Y(S.current));
    },
    onContextMenu: (k) => {
      (r.onContextMenu == null || r.onContextMenu.call(r, k), S.current && Y(S.current));
    },
  });
});
er.displayName = "Drawer.Content";
const ds = 250,
  fs = 120,
  ms = N.forwardRef(function ({ preventCycle: e = !1, children: t, ...n }, r) {
    const {
        closeDrawer: a,
        isDragging: s,
        snapPoints: c,
        activeSnapPoint: i,
        setActiveSnapPoint: p,
        dismissible: u,
        handleOnly: f,
        isOpen: d,
        onPress: g,
        onDrag: y,
      } = Ke(),
      w = N.useRef(null),
      m = N.useRef(!1);
    function b() {
      if (m.current) {
        D();
        return;
      }
      window.setTimeout(() => {
        h();
      }, fs);
    }
    function h() {
      if (s || e || m.current) {
        D();
        return;
      }
      if ((D(), !c || c.length === 0)) {
        u || a();
        return;
      }
      if (i === c[c.length - 1] && u) {
        a();
        return;
      }
      const C = c.findIndex((v) => v === i);
      if (C === -1) return;
      const T = c[C + 1];
      p(T);
    }
    function j() {
      w.current = window.setTimeout(() => {
        m.current = !0;
      }, ds);
    }
    function D() {
      (w.current && window.clearTimeout(w.current), (m.current = !1));
    }
    return N.createElement(
      "div",
      {
        onClick: b,
        onPointerCancel: D,
        onPointerDown: (x) => {
          (f && g(x), j());
        },
        onPointerMove: (x) => {
          f && y(x);
        },
        ref: r,
        "data-vaul-drawer-visible": d ? "true" : "false",
        "data-vaul-handle": "",
        "aria-hidden": "true",
        ...n,
      },
      N.createElement("span", { "data-vaul-handle-hitarea": "", "aria-hidden": "true" }, t),
    );
  });
ms.displayName = "Drawer.Handle";
function hs(e) {
  const t = Ke(),
    { container: n = t.container, ...r } = e;
  return N.createElement(Io, { container: n, ...r });
}
const ue = { Root: us, Content: er, Overlay: Jn, Portal: hs, Title: Fo, Description: Wo },
  tr = ({ shouldScaleBackground: e = !0, ...t }) =>
    o.jsx(ue.Root, { shouldScaleBackground: e, ...t });
tr.displayName = "Drawer";
const ps = ue.Portal,
  nr = l.forwardRef(({ className: e, ...t }, n) =>
    o.jsx(ue.Overlay, {
      ref: n,
      className: I("fixed inset-0 z-[var(--z-overlay)] bg-black/60 backdrop-blur-sm", e),
      ...t,
    }),
  );
nr.displayName = ue.Overlay.displayName;
const rr = l.forwardRef(({ className: e, children: t, ...n }, r) =>
  o.jsxs(ps, {
    children: [
      o.jsx(nr, {}),
      o.jsxs(ue.Content, {
        ref: r,
        className: I(
          "border-border bg-card fixed inset-x-0 bottom-0 z-[var(--z-drawer)] flex flex-col rounded-t-2xl border-t",
          e,
        ),
        ...n,
        children: [
          o.jsx("div", {
            className: "mx-auto mt-4 h-1.5 w-12 shrink-0 rounded-full bg-neutral-300",
          }),
          t,
        ],
      }),
    ],
  }),
);
rr.displayName = "DrawerContent";
const ar = ({ className: e, ...t }) =>
  o.jsx("div", { className: I("grid gap-1.5 p-4 text-center sm:text-start", e), ...t });
ar.displayName = "DrawerHeader";
const or = l.forwardRef(({ className: e, ...t }, n) =>
  o.jsx(ue.Title, {
    ref: n,
    className: I("text-lg leading-none font-semibold tracking-tight", e),
    ...t,
  }),
);
or.displayName = ue.Title.displayName;
const sr = l.forwardRef(({ className: e, ...t }, n) =>
  o.jsx(ue.Description, { ref: n, className: I("text-sm text-neutral-500", e), ...t }),
);
sr.displayName = ue.Description.displayName;
function gs({ exerciseName: e, open: t, onClose: n }) {
  const { t: r } = Q("tracking"),
    { history: a, isLoading: s } = zr(e, t),
    c = l.useMemo(() => {
      let p = 0,
        u = 0;
      for (const f of a)
        for (const d of f.sets)
          (d.weight != null && d.weight > p && (p = d.weight),
            d.reps != null && d.reps > u && (u = d.reps));
      return { maxWeight: p, maxReps: u };
    }, [a]),
    i = l.useMemo(() => {
      if (a.length < 2) return null;
      const p = a[0].sets.map((g) => g.weight ?? 0),
        u = a[1].sets.map((g) => g.weight ?? 0),
        f = p.length > 0 ? Math.max(...p) : 0,
        d = u.length > 0 ? Math.max(...u) : 0;
      return f === 0 && d === 0 ? null : f > d ? "up" : f < d ? "down" : "same";
    }, [a]);
  return o.jsx(tr, {
    open: t,
    onOpenChange: (p) => !p && n(),
    children: o.jsxs(rr, {
      className: "max-h-[85vh]",
      children: [
        o.jsxs(ar, {
          children: [
            o.jsxs(or, {
              className: "flex items-center gap-2",
              children: [
                o.jsx(Dt, { className: "text-fitness h-5 w-5" }),
                e ?? r("exerciseHistory"),
              ],
            }),
            o.jsx(sr, {
              children: a.length > 0 ? `${a.length} ${r("pastSessions")}` : r("noHistoryYet"),
            }),
          ],
        }),
        o.jsxs("div", {
          className: "overflow-y-auto px-4 pb-6",
          children: [
            c.maxWeight > 0 &&
              o.jsxs("div", {
                className: "mb-4 flex items-center gap-3 rounded-lg bg-amber-50 p-3",
                children: [
                  o.jsx(Yt, { className: "h-5 w-5 text-amber-500" }),
                  o.jsxs("div", {
                    className: "flex-1",
                    children: [
                      o.jsx("p", {
                        className: "text-xs font-semibold text-amber-700",
                        children: r("personalBest"),
                      }),
                      o.jsxs("p", {
                        className: "text-xs text-amber-600",
                        children: [
                          c.maxWeight,
                          "kg",
                          c.maxReps > 0 ? ` • ${c.maxReps} ${r("reps")}` : "",
                        ],
                      }),
                    ],
                  }),
                  i &&
                    o.jsxs("div", {
                      className: I(
                        "flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
                        i === "up" && "bg-fitness/15 text-fitness",
                        i === "down" && "bg-destructive/10 text-destructive",
                        i === "same" && "bg-neutral-100 text-neutral-500",
                      ),
                      children: [
                        i === "up" && o.jsx(kr, { className: "h-3 w-3" }),
                        i === "down" && o.jsx(Mr, { className: "h-3 w-3" }),
                        r(i === "up" ? "improving" : i === "down" ? "decreased" : "same"),
                      ],
                    }),
                ],
              }),
            s &&
              o.jsx("div", {
                className: "space-y-3",
                children: Array.from({ length: 5 }, (p, u) =>
                  o.jsx("div", { className: "h-12 animate-pulse rounded-lg bg-neutral-100" }, u),
                ),
              }),
            !s &&
              a.length === 0 &&
              o.jsxs("div", {
                className: "py-8 text-center",
                children: [
                  o.jsx(Dt, { className: "text-muted-foreground/30 mx-auto h-10 w-10" }),
                  o.jsx("p", {
                    className: "text-muted-foreground mt-3 text-sm",
                    children: r("noHistoryYet"),
                  }),
                  o.jsx("p", {
                    className: "text-muted-foreground mt-1 text-xs",
                    children: r("startLogging"),
                  }),
                ],
              }),
            !s &&
              a.length > 0 &&
              o.jsx("div", {
                className: "space-y-2",
                children: a.map((p, u) => {
                  const f = p.sets.map((y) => y.weight ?? 0),
                    d = f.length > 0 ? Math.max(...f) : 0,
                    g = d === c.maxWeight && d > 0;
                  return o.jsxs(
                    "div",
                    {
                      className: I(
                        "rounded-lg border p-3",
                        g ? "border-amber-200 bg-amber-50/50" : "border-border",
                      ),
                      children: [
                        o.jsxs("div", {
                          className: "mb-1.5 flex items-center justify-between",
                          children: [
                            o.jsxs("span", {
                              className: "text-xs font-semibold",
                              children: [
                                p.date,
                                g && o.jsx(Yt, { className: "ms-1 inline h-3 w-3 text-amber-500" }),
                              ],
                            }),
                            o.jsxs("span", {
                              className: "text-muted-foreground text-[10px]",
                              children: [
                                p.sets.filter((y) => y.completed).length,
                                "/",
                                p.sets.length,
                                " ",
                                r("sets"),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className: "flex flex-wrap gap-1.5",
                          children: p.sets.map((y) =>
                            o.jsxs(
                              "span",
                              {
                                className: I(
                                  "rounded-md px-2 py-0.5 text-[10px] font-medium",
                                  y.completed
                                    ? "bg-fitness/10 text-fitness"
                                    : "bg-neutral-100 text-neutral-400",
                                ),
                                children: [
                                  y.weight != null ? `${y.weight}kg` : "—",
                                  y.reps != null ? ` × ${y.reps}` : "",
                                ],
                              },
                              y.setIndex,
                            ),
                          ),
                        }),
                      ],
                    },
                    p.date + "-" + p.exerciseIndex,
                  );
                }),
              }),
          ],
        }),
      ],
    }),
  });
}
function vs() {
  return o.jsxs("div", {
    className: "mx-auto max-w-5xl space-y-5 px-4 py-6",
    children: [
      o.jsxs("div", {
        className: "space-y-1",
        children: [o.jsx(ye, { className: "h-7 w-32" }), o.jsx(ye, { className: "h-4 w-48" })],
      }),
      o.jsxs("div", {
        className: "grid gap-3 sm:grid-cols-2",
        children: [
          o.jsx(ye, { className: "h-32 rounded-xl" }),
          o.jsx(ye, { className: "h-32 rounded-xl" }),
        ],
      }),
      o.jsx(ye, { className: "h-64 rounded-xl" }),
      o.jsx(ye, { className: "h-48 rounded-xl" }),
      o.jsx(ye, { className: "h-40 rounded-xl" }),
    ],
  });
}
function Ws() {
  var De, je, le, $e, Fe;
  const { t: e } = Q("tracking"),
    { t } = Q("emptyStates"),
    n = br(),
    [r, a] = l.useState(new Date().toLocaleDateString("en-CA")),
    [s, c] = l.useState(!0),
    [i, p] = l.useState(!0),
    [u, f] = l.useState({}),
    [d, g] = l.useState(null),
    [y, w] = l.useState(null);
  l.useEffect(() => {
    f({});
  }, [r]);
  const { mealPlan: m, isLoading: b } = yr(),
    { workoutPlan: h, isLoading: j } = Nr(),
    { trackingData: D, isLoading: x, toggleMealCompletion: C, saveDailyReflection: T } = Ur(r),
    { exerciseLogs: v, isLoading: S, logSet: R, quickComplete: O } = Hr(r),
    $ = (E, F) => {
      if (!F) return "day1";
      const J = new Date(F.includes("T") ? F : F + "T00:00:00Z"),
        oe = new Date(E.includes("T") ? E : E + "T00:00:00Z"),
        Re = Math.floor((oe.getTime() - J.getTime()) / 864e5);
      return `day${Math.max(1, Re + 1)}`;
    },
    Y = async (E, F) => {
      if (m != null && m._id) {
        g(E);
        try {
          (await C(m._id, E, !F, u[E] || void 0),
            pe({ title: e(F ? "mealUncompleted" : "mealCompleted") }));
        } catch (J) {
          (console.error("Failed to toggle meal completion:", J),
            pe({ title: e("saveFailed"), variant: "destructive" }));
        } finally {
          g(null);
        }
      }
    },
    k = l.useCallback(
      async (E) => {
        if (h != null && h._id)
          try {
            await R({ ...E, workoutPlanId: h._id });
          } catch (F) {
            (console.error("Failed to log exercise set:", F),
              pe({ title: e("saveFailed"), variant: "destructive" }));
          }
      },
      [h == null ? void 0 : h._id, R, e],
    ),
    K = l.useCallback(
      async (E) => {
        if (h != null && h._id)
          try {
            (await O({ ...E, workoutPlanId: h._id }),
              pe({ title: E.completed ? e("workoutMarkedDone") : e("workoutMarkedUndone") }));
          } catch (F) {
            (console.error("Failed to quick-complete workout:", F),
              pe({ title: e("saveFailed"), variant: "destructive" }));
          }
      },
      [h == null ? void 0 : h._id, O, e],
    ),
    q = async (E) => {
      try {
        (await T(E.reflection), pe({ title: e("reflectionSaved") }));
      } catch (F) {
        (console.error("Failed to save reflection:", F),
          pe({ title: e("saveFailed"), variant: "destructive" }));
      }
    },
    _ = m == null ? void 0 : m.planData,
    U = h == null ? void 0 : h.planData,
    X = l.useMemo(
      () => $(r, m == null ? void 0 : m.startDate),
      [r, m == null ? void 0 : m.startDate],
    ),
    ae = l.useMemo(
      () => $(r, h == null ? void 0 : h.startDate),
      [r, h == null ? void 0 : h.startDate],
    ),
    xe =
      ((je = (De = _ == null ? void 0 : _.weeklyPlan) == null ? void 0 : De[X]) == null
        ? void 0
        : je.meals) || [],
    Se = (le = U == null ? void 0 : U.weeklyPlan) == null ? void 0 : le[ae],
    H = Se != null && Se.restDay ? void 0 : Se,
    ee = l.useMemo(() => {
      var J, oe;
      let E = 0,
        F = 0;
      if ((J = _ == null ? void 0 : _.weeklyPlan) != null && J[X]) {
        const Re = _.weeklyPlan[X].meals ?? [];
        ((E += Re.length), (F += D.mealCompletions.filter((We) => We.completed).length));
      }
      return (
        H &&
          !H.restDay &&
          ((E += 1),
          ((oe = H.exercises) == null ? void 0 : oe.length) > 0 &&
            v.filter((We) => We.completedAt != null).length >= H.exercises.length &&
            (F += 1)),
        E > 0 ? Math.round((F / E) * 100) : 0
      );
    }, [_, X, H, D, v]),
    de = l.useMemo(() => {
      var E, F, J;
      return {
        completed: D.mealCompletions.filter((oe) => oe.completed).length,
        total:
          ((J =
            (F = (E = _ == null ? void 0 : _.weeklyPlan) == null ? void 0 : E[X]) == null
              ? void 0
              : F.meals) == null
            ? void 0
            : J.length) || 0,
      };
    }, [D.mealCompletions, _, X]),
    Ie = l.useMemo(() => ((H == null ? void 0 : H.exercises) ?? []).map((E) => E.name), [H]),
    { lastSessionData: _e } = Vr(Ie, r),
    fe = l.useRef(null);
  if (
    (l.useEffect(() => {
      ee === 100 &&
        fe.current !== r &&
        (de.total > 0 || (H && !H.restDay)) &&
        ((fe.current = r), pe({ title: e("allComplete") }));
    }, [ee, r, de.total, H, e]),
    b || j || x || S)
  )
    return o.jsx(vs, {});
  if (!m && !h)
    return o.jsxs("div", {
      className: "mx-auto max-w-5xl space-y-6 py-4 lg:px-6 lg:py-6",
      children: [
        o.jsx(Xt, {
          selectedDate: r,
          completionPercentage: 0,
          mealProgress: { completed: 0, total: 0 },
          workoutDone: !1,
        }),
        o.jsx(Cr, {
          icon: Or,
          title: t("noTrackingData.title"),
          description: t("noTrackingData.description"),
          action: { label: t("noCheckIns.action"), onClick: () => n({ to: "/check-in" }) },
        }),
      ],
    });
  const we =
    !!H &&
    !H.restDay &&
    (($e = H.exercises) == null ? void 0 : $e.length) > 0 &&
    v.filter((E) => E.completedAt != null).length >= H.exercises.length;
  return o.jsxs("div", {
    className: "mx-auto max-w-5xl space-y-6 py-4 lg:px-6 lg:py-6",
    children: [
      o.jsx(Xt, { selectedDate: r, completionPercentage: ee, mealProgress: de, workoutDone: we }),
      o.jsx(Xr, { selectedDate: r, onDateChange: a, completionPercentage: ee }),
      o.jsxs("div", {
        className: "space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0",
        children: [
          o.jsx(Gr, {
            todaysMeals: xe,
            mealCompletions: D.mealCompletions,
            isTogglingMeal: d,
            mealNotes: u,
            onMealToggle: Y,
            onMealNotesChange: f,
            isMealsExpanded: s,
            onToggleExpand: () => c(!s),
          }),
          o.jsx(Zr, {
            todaysWorkout: H,
            workoutPlanId: h == null ? void 0 : h._id,
            exerciseLogs: v,
            onLogSet: k,
            onQuickComplete: K,
            onOpenHistory: w,
            lastSessionData: _e,
            isWorkoutsExpanded: i,
            onToggleExpand: () => p(!i),
          }),
        ],
      }),
      o.jsx(ea, {
        defaultReflection:
          typeof D.reflection == "object"
            ? ((Fe = D.reflection) == null ? void 0 : Fe.reflection) || ""
            : D.reflection || "",
        onSubmit: q,
      }),
      o.jsx(gs, { exerciseName: y, open: y !== null, onClose: () => w(null) }),
    ],
  });
}
export { Ws as component };
