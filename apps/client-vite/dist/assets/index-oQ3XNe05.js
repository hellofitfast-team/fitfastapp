import { e as ge, u as ye, a as je, c as be, r as d, j as e, L as I } from "./index-BVud5pVb.js";
import { W as u } from "./widget-card-ChokKurf.js";
import { E as Ne } from "./empty-state-BQ3yrOyd.js";
import { c as V } from "./cn-CDN07tui.js";
import { f as Y } from "./format-zSzWEmcW.js";
import { L as Z } from "./loader-circle-BpriWBmn.js";
import { c as ve } from "./createLucideIcon-CflinLEd.js";
import { D as $ } from "./dumbbell-DitM0HwP.js";
import { U as ee } from "./utensils-crossed-Du_1PGDJ.js";
import { C as se } from "./calendar-PtChDace.js";
import { S as ke } from "./shield-BE2ncHmf.js";
import { X as we } from "./x-C2ku7ZUf.js";
import { F as De } from "./flame-BZ5lZkzP.js";
import { C as Ce } from "./clipboard-check-CSGaMZfn.js";
import { T as Me } from "./trending-up-yKghX4cs.js";
import "./button-B1_2FTXK.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ie = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  $e = ve("circle-alert", Ie);
function Pe() {
  const { isAuthenticated: t } = ge(),
    h = ye(je.dashboard.getDashboardData, t ? {} : "skip");
  return { dashboardData: h ?? null, isLoading: t && h === void 0, error: null };
}
function Qe() {
  var G, B, F, K, O, q, H, Q;
  const { t, i18n: h } = be(),
    x = h.language,
    { dashboardData: n, isLoading: te } = Pe(),
    [j] = d.useState(() => Date.now()),
    [p, ae] = d.useState(0),
    [re, ne] = d.useState(!1);
  d.useEffect(() => {
    const s = setInterval(() => {
      ae((a) => (a + 1) % 7);
    }, 5e3);
    return () => clearInterval(s);
  }, []);
  const b = d.useRef(null),
    P = d.useRef([]),
    [le, T] = d.useState(0),
    oe = d.useCallback((s) => {
      const a = b.current,
        o = P.current[s];
      !a || !o || a.scrollTo({ left: o.offsetLeft - a.offsetLeft, behavior: "smooth" });
    }, []),
    de = d.useCallback(() => {
      const s = b.current;
      if (!s) return;
      const a = Math.round(s.scrollLeft / s.offsetWidth);
      T(Math.max(0, Math.min(3, Math.abs(a))));
    }, []);
  if (te)
    return e.jsx("div", {
      className: "flex min-h-[60vh] items-center justify-center",
      children: e.jsxs("div", {
        className: "flex flex-col items-center gap-3",
        children: [
          e.jsx(Z, { className: "text-primary h-8 w-8 animate-spin" }),
          e.jsx("p", { className: "text-muted-foreground text-sm", children: t("common.loading") }),
        ],
      }),
    });
  if (!n)
    return e.jsx("div", {
      className: "flex min-h-[60vh] items-center justify-center",
      children: e.jsxs("div", {
        className: "flex flex-col items-center gap-3 px-4 text-center",
        children: [
          e.jsx("div", {
            className: "bg-error-500/10 flex h-12 w-12 items-center justify-center rounded-full",
            children: e.jsx($e, { className: "text-error-500 h-6 w-6" }),
          }),
          e.jsx("p", { className: "text-error-500 font-semibold", children: t("common.error") }),
        ],
      }),
    });
  const N = n.checkInLock,
    S =
      N.isLocked && N.nextCheckInDate
        ? Math.max(0, Math.ceil((new Date(N.nextCheckInDate).getTime() - j) / (1e3 * 60 * 60 * 24)))
        : null,
    L = S !== null ? `${S}d` : "-",
    A =
      ((B = (G = n.profile) == null ? void 0 : G.fullName) == null ? void 0 : B.split(" ")[0]) ||
      (x === "ar" ? "مستخدم" : "User");
  function W(s, a) {
    if (!s || !a) return null;
    const o = Math.floor((j - new Date(a).getTime()) / 864e5),
      y = /^(day\d+|sunday|monday|tuesday|wednesday|thursday|friday|saturday)$/,
      he = Object.keys(s).filter((fe) => y.test(fe)).length;
    if (o >= he) return null;
    const X = Math.max(0, o),
      z = `day${X + 1}`;
    if (s[z]) return s[z];
    const pe = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      M = new Date(a);
    M.setDate(M.getDate() + X);
    const J = pe[M.getDay()];
    return s[J] ? s[J] : null;
  }
  const v = (F = n.currentMealPlan) == null ? void 0 : F.planData,
    k = W(
      v == null ? void 0 : v.weeklyPlan,
      (K = n.currentMealPlan) == null ? void 0 : K.startDate,
    ),
    ce = (k == null ? void 0 : k.meals) ?? [],
    ie = n.todayMealCompletions ?? [],
    me = n.todayWorkoutCompletions ?? [],
    c = ce.map((s, a) => {
      const o = s.macros || {};
      return {
        id: a,
        name: s.name || "",
        time: s.type || "",
        calories: s.calories ?? o.calories ?? 0,
        done: ie.some((y) => y.mealIndex === a && y.completed),
      };
    }),
    w = (O = n.currentWorkoutPlan) == null ? void 0 : O.planData,
    r = W(
      w == null ? void 0 : w.weeklyPlan,
      (q = n.currentWorkoutPlan) == null ? void 0 : q.startDate,
    ),
    xe = Array.isArray(r == null ? void 0 : r.exercises)
      ? r.exercises
      : Array.isArray(r == null ? void 0 : r.workout)
        ? r.workout
        : [],
    l =
      r && !r.restDay
        ? {
            name: r.workoutName || r.name || "",
            type: (Array.isArray(r.targetMuscles) ? r.targetMuscles : []).join(", "),
            duration: r.duration ? `${r.duration}m` : "-",
            exercises: xe.length,
            done: me.some((s) => s.completed),
          }
        : null,
    i = { completed: c.filter((s) => s.done).length, total: c.length },
    m = { completed: l != null && l.done ? 1 : 0, total: l ? 1 : 0 },
    E = i.total + m.total,
    ue = i.completed + m.completed,
    f = E > 0 ? Math.round((ue / E) * 100) : 0,
    R = (n.recentTickets ?? []).find((s) => s.status === "coach_responded"),
    g = (H = n.currentMealPlan) == null ? void 0 : H.startDate,
    U = (Q = n.currentMealPlan) == null ? void 0 : Q.endDate,
    D = g && U ? Math.ceil((new Date(U).getTime() - new Date(g).getTime()) / 864e5) : 10,
    C = g ? Math.min(D, Math.max(1, Math.floor((j - new Date(g).getTime()) / 864e5) + 1)) : null;
  if (!n.currentMealPlan && !n.currentWorkoutPlan) {
    const s = !!n.assessment;
    return e.jsxs("div", {
      className: "mx-auto max-w-5xl space-y-6 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("p", { className: "text-muted-foreground text-sm", children: Y(new Date(), x) }),
            e.jsx(
              "h1",
              {
                className: "animate-fade-in mt-1 text-2xl font-bold",
                children: t(`dashboard.motivational.${p}`, { name: A }),
              },
              p,
            ),
          ],
        }),
        s
          ? e.jsxs("div", {
              className: "border-border bg-card space-y-4 rounded-xl border p-8 text-center",
              children: [
                e.jsx(Z, { className: "text-primary mx-auto h-10 w-10 animate-spin" }),
                e.jsx("h2", {
                  className: "text-lg font-bold",
                  children: t("emptyStates.plansGenerating.title"),
                }),
                e.jsx("p", {
                  className: "text-muted-foreground mx-auto max-w-md text-sm",
                  children: t("emptyStates.plansGenerating.description"),
                }),
              ],
            })
          : e.jsx(Ne, {
              icon: $,
              title: t("emptyStates.noPlan.title"),
              description: t("emptyStates.noPlan.description"),
            }),
      ],
    });
  }
  const _ = [
    e.jsx(
      u,
      {
        featureColor: "primary",
        title: t("dashboard.todaysStats"),
        className: "h-full",
        children: e.jsxs("div", {
          className: "grid grid-cols-2 gap-3",
          children: [
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsxs("p", { className: "text-lg font-bold", children: [f, "%"] }),
                e.jsx("p", {
                  className: "text-muted-foreground text-[10px]",
                  children: t("tracking.todaysProgress"),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsx("p", { className: "text-lg font-bold", children: L }),
                e.jsx("p", {
                  className: "text-muted-foreground text-[10px]",
                  children: t("dashboard.upcomingCheckIn"),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsxs("p", {
                  className: "text-lg font-bold",
                  children: [i.completed, "/", i.total],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground text-[10px]",
                  children: t("dashboard.todaysMeals"),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsxs("p", {
                  className: "text-lg font-bold",
                  children: [m.completed, "/", m.total],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground text-[10px]",
                  children: t("dashboard.todaysWorkout"),
                }),
              ],
            }),
          ],
        }),
      },
      "stats",
    ),
    e.jsx(
      u,
      {
        featureColor: "nutrition",
        icon: ee,
        title: t("dashboard.todaysMeals"),
        className: "h-full",
        children:
          c.length === 0
            ? e.jsx("p", {
                className: "text-muted-foreground text-xs",
                children: t("dashboard.noMealsToday"),
              })
            : e.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  e.jsxs("p", {
                    className: "text-lg font-bold",
                    children: [
                      t("dashboard.totalCalories"),
                      ": ",
                      c.reduce((s, a) => s + a.calories, 0),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground text-xs",
                    children: t("dashboard.mealCount", { count: c.length }),
                  }),
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      c
                        .slice(0, 3)
                        .map((s) =>
                          e.jsx(
                            "p",
                            {
                              className: V(
                                "truncate text-xs",
                                s.done && "text-muted-foreground line-through",
                              ),
                              children: s.name,
                            },
                            s.id,
                          ),
                        ),
                      c.length > 3 &&
                        e.jsx("p", {
                          className: "text-muted-foreground text-[10px]",
                          children: "...",
                        }),
                    ],
                  }),
                ],
              }),
      },
      "meals",
    ),
    e.jsx(
      u,
      {
        featureColor: "fitness",
        icon: $,
        title: t("dashboard.todaysWorkout"),
        className: "h-full",
        children: l
          ? e.jsxs("div", {
              className: "space-y-1.5",
              children: [
                e.jsx("p", { className: "text-sm font-semibold", children: l.name }),
                e.jsxs("p", {
                  className: "text-muted-foreground text-xs",
                  children: [
                    t("dashboard.exerciseCount", { count: l.exercises }),
                    " -",
                    " ",
                    t("dashboard.estDuration", { duration: l.duration }),
                  ],
                }),
                l.done &&
                  e.jsx("span", {
                    className:
                      "bg-fitness/10 text-fitness inline-block rounded-full px-2 py-0.5 text-[10px] font-medium",
                    children: t("dashboard.completedToday"),
                  }),
              ],
            })
          : e.jsx("p", {
              className: "text-muted-foreground text-xs",
              children: t("dashboard.restDayOrNoWorkout"),
            }),
      },
      "workout",
    ),
    e.jsx(
      u,
      {
        featureColor: "routine",
        icon: se,
        title: t("dashboard.planProgress"),
        className: "h-full",
        children: C
          ? e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx("p", {
                  className: "text-lg font-bold",
                  children: t("dashboard.planDay", { current: C, total: D }),
                }),
                e.jsx("div", {
                  className: "h-1.5 overflow-hidden rounded-full bg-neutral-100",
                  dir: x === "ar" ? "rtl" : "ltr",
                  children: e.jsx("div", {
                    className: "bg-routine h-full rounded-full transition-all",
                    style: { width: `${(C / D) * 100}%` },
                  }),
                }),
              ],
            })
          : e.jsx("p", { className: "text-muted-foreground text-xs", children: "-" }),
      },
      "countdown",
    ),
  ];
  return e.jsxs("div", {
    className: "mx-auto max-w-5xl space-y-5 py-4 lg:px-6 lg:py-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("p", { className: "text-muted-foreground text-sm", children: Y(new Date(), x) }),
          e.jsx(
            "h1",
            {
              className: "animate-fade-in mt-1 text-2xl font-bold",
              children: t(`dashboard.motivational.${p}`, { name: A }),
            },
            p,
          ),
        ],
      }),
      R &&
        !re &&
        e.jsxs("div", {
          className:
            "bg-primary/10 border-primary/20 animate-slide-up flex items-center gap-3 rounded-xl border p-3",
          children: [
            e.jsx("div", {
              className:
                "bg-primary/15 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
              children: e.jsx(ke, { className: "text-primary h-4 w-4" }),
            }),
            e.jsx("p", {
              className: "flex-1 text-sm font-medium",
              children: t("dashboard.coachMessageBanner"),
            }),
            e.jsx(I, {
              to: "/tickets/$id",
              params: { id: R._id },
              className: "text-primary shrink-0 text-xs font-semibold hover:underline",
              children: t("dashboard.viewTicket"),
            }),
            e.jsx("button", {
              onClick: () => ne(!0),
              className: "text-muted-foreground hover:text-foreground shrink-0 p-1",
              "aria-label": "Dismiss",
              children: e.jsx(we, { className: "h-3.5 w-3.5" }),
            }),
          ],
        }),
      e.jsx("div", {
        className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
        children: [
          { icon: De, color: "streak", label: t("tracking.streakDays"), value: `${f}%` },
          {
            icon: ee,
            color: "nutrition",
            label: t("dashboard.mealProgress"),
            value: `${i.completed}/${i.total}`,
          },
          {
            icon: $,
            color: "fitness",
            label: t("dashboard.workoutProgress"),
            value: `${m.completed}/${m.total}`,
          },
          { icon: se, color: "routine", label: t("dashboard.upcomingCheckIn"), value: L },
        ].map((s, a) =>
          e.jsx(
            "div",
            {
              className: "animate-slide-up",
              style: { animationDelay: `${a * 50}ms` },
              children: e.jsx(u, {
                icon: s.icon,
                title: s.label,
                value: s.value,
                featureColor: s.color,
              }),
            },
            a,
          ),
        ),
      }),
      e.jsxs("div", {
        className: "relative -mx-4 lg:hidden",
        children: [
          e.jsx("div", {
            ref: b,
            onScroll: de,
            className: "scrollbar-hide flex snap-x snap-mandatory overflow-x-auto",
            children: _.map((s, a) =>
              e.jsx(
                "div",
                {
                  ref: (o) => {
                    P.current[a] = o;
                  },
                  className: "w-full flex-shrink-0 snap-center px-4",
                  children: e.jsx("div", {
                    className: "animate-slide-up",
                    style: { animationDelay: `${a * 50}ms` },
                    children: s,
                  }),
                },
                a,
              ),
            ),
          }),
          e.jsx("div", {
            className: "mt-3 flex justify-center gap-1.5",
            children: [0, 1, 2, 3].map((s) =>
              e.jsx(
                "button",
                {
                  onClick: () => {
                    (oe(s), T(s));
                  },
                  "aria-label": `Go to card ${s + 1}`,
                  className: V(
                    "h-1.5 rounded-full transition-all duration-300",
                    le === s ? "bg-primary w-4" : "w-1.5 bg-neutral-300",
                  ),
                },
                s,
              ),
            ),
          }),
        ],
      }),
      e.jsx("div", {
        className: "hidden gap-4 lg:grid lg:grid-cols-2",
        children: _.map((s, a) =>
          e.jsx(
            "div",
            {
              className: "animate-slide-up",
              style: { animationDelay: `${a * 50}ms` },
              children: s,
            },
            a,
          ),
        ),
      }),
      e.jsxs("div", {
        className: "grid grid-cols-2 gap-3",
        children: [
          e.jsxs(I, {
            to: "/check-in",
            className:
              "group border-border bg-card shadow-card rounded-xl border p-5 transition-all hover:shadow-md active:scale-[0.97]",
            children: [
              e.jsx("div", {
                className:
                  "bg-primary/12 mb-3 flex h-10 w-10 items-center justify-center rounded-lg",
                children: e.jsx(Ce, { className: "text-primary h-5 w-5" }),
              }),
              e.jsx("p", {
                className: "text-sm font-semibold",
                children: t("checkIn.submitCheckIn"),
              }),
              e.jsx("p", {
                className: "text-muted-foreground mt-0.5 text-xs",
                children: t("checkIn.title"),
              }),
            ],
          }),
          e.jsxs(I, {
            to: "/progress",
            className:
              "group border-border bg-card shadow-card rounded-xl border p-5 transition-all hover:shadow-md active:scale-[0.97]",
            children: [
              e.jsx("div", {
                className:
                  "bg-primary/12 mb-3 flex h-10 w-10 items-center justify-center rounded-lg",
                children: e.jsx(Me, { className: "text-primary h-5 w-5" }),
              }),
              e.jsx("p", { className: "text-sm font-semibold", children: t("progress.title") }),
              e.jsx("p", {
                className: "text-muted-foreground mt-0.5 text-xs",
                children: t("progress.weightHistory"),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "border-border bg-card shadow-card rounded-xl border p-4",
        children: [
          e.jsxs("div", {
            className: "mb-3 flex items-center justify-between",
            children: [
              e.jsx("p", { className: "text-sm font-medium", children: t("progress.title") }),
              e.jsxs("p", { className: "text-primary text-sm font-bold", children: [f, "%"] }),
            ],
          }),
          e.jsx("div", {
            className: "h-2 overflow-hidden rounded-full bg-neutral-100",
            dir: x === "ar" ? "rtl" : "ltr",
            children: e.jsx("div", {
              className: "bg-primary h-full rounded-full transition-all duration-500",
              style: { width: `${f}%` },
            }),
          }),
        ],
      }),
    ],
  });
}
export { Qe as component };
