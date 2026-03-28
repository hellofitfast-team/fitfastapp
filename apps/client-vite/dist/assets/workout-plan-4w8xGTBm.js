import { r as f, j as e, u as X, a as $, c as E, d as he, f as fe } from "./index-BVud5pVb.js";
import { c as b } from "./cn-CDN07tui.js";
import { a as Q, t as h } from "./format-zSzWEmcW.js";
import { u as ge, Z as be } from "./use-workout-plans-B8uBa6gJ.js";
import { u as ye, S as je, D as Ne, A as ve } from "./day-navigator-rbjImaMu.js";
import { B as De } from "./button-B1_2FTXK.js";
import { E as we } from "./empty-state-BQ3yrOyd.js";
import { L } from "./loader-circle-BpriWBmn.js";
import { D as Ae } from "./dumbbell-DitM0HwP.js";
import { T as V } from "./triangle-alert-DfzczM4d.js";
import { C as ee } from "./chevron-down-DOn0ww8M.js";
import { T as Me } from "./trending-up-yKghX4cs.js";
import { H as se } from "./heart-Cfc7SifX.js";
import { c as Se } from "./createLucideIcon-CflinLEd.js";
import "./chevron-right-BUhXz13O.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ee = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  Te = Se("moon", Ee);
function ke({ url: s, alt: x }) {
  const [c, d] = f.useState(!1),
    [m, a] = f.useState(!1);
  return c || !/^https:\/\/.+/.test(s)
    ? null
    : e.jsxs("div", {
        className: "relative w-full overflow-hidden rounded-lg",
        children: [
          !m &&
            e.jsx("div", {
              className:
                "aspect-[4/3] w-full animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-700",
            }),
          e.jsx("img", {
            src: s,
            alt: x,
            width: 512,
            height: 384,
            className: `h-auto w-full rounded-lg transition-opacity duration-200 ${m ? "opacity-100" : "absolute opacity-0"}`,
            onLoad: () => a(!0),
            onError: () => d(!0),
            loading: "lazy",
          }),
        ],
      });
}
function Fe(s) {
  const x = s.map((d) => d.exerciseDbId).filter((d) => !!d);
  return X($.exerciseDatabase.getExerciseMedia, x.length > 0 ? { exerciseIds: x } : "skip") ?? {};
}
function R(s, x, c) {
  const d = `day${x + 1}`;
  if (s[d]) return s[d];
  if (c) {
    const m = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      a = new Date(c);
    a.setDate(a.getDate() + x);
    const t = m[a.getDay()];
    if (s[t]) return s[t];
  }
  return null;
}
function W(s) {
  var D;
  if (!s) return null;
  const c = (
    Array.isArray(s.exercises) ? s.exercises : Array.isArray(s.workout) ? s.workout : []
  ).map((n) => ({
    name: n.name || n.exercise || "",
    exerciseDbId: n.exerciseDbId,
    sets: n.sets || 0,
    reps: n.reps || "",
    rest: String(n.rest || n.restBetweenSets || "-"),
    targetMuscles: Array.isArray(n.targetMuscles)
      ? n.targetMuscles
      : Array.isArray(n.musclesTargeted)
        ? n.musclesTargeted
        : [],
    instructions: Array.isArray(n.instructions) ? n.instructions : [],
    equipment: n.equipment || "",
    notes: n.notes || "",
    suggestedWeight: n.suggestedWeight,
  }));
  let d = [];
  const m = s.warmup || s.warmUp;
  m &&
    (Array.isArray(m.exercises) && m.exercises.length > 0
      ? (d = m.exercises)
      : (m.cardio && d.push({ name: m.cardio, duration: m.duration || 60, instructions: [] }),
        Array.isArray(m.dynamicStretching) &&
          m.dynamicStretching.forEach((n) => {
            d.push({ name: n, duration: 30, instructions: [] });
          })));
  let a = [];
  const t = s.cooldown || s.coolDown;
  t &&
    (Array.isArray(t.exercises) && t.exercises.length > 0
      ? (a = t.exercises)
      : Array.isArray(t.staticStretching) &&
        t.staticStretching.forEach((n) => {
          a.push({ name: n, duration: 30, instructions: [] });
        }));
  const y =
      (D = s.cardioFinisher) != null && D.name
        ? {
            name: s.cardioFinisher.name,
            exerciseDbId: s.cardioFinisher.exerciseDbId,
            durationMinutes: s.cardioFinisher.durationMinutes ?? s.cardioFinisher.duration ?? 12,
            intensity: s.cardioFinisher.intensity ?? "",
            instructions: Array.isArray(s.cardioFinisher.instructions)
              ? s.cardioFinisher.instructions
              : [],
          }
        : void 0,
    j = Array.isArray(s.supersets)
      ? s.supersets
          .map((n) => {
            var T, u;
            return {
              exerciseA: n.exerciseA ?? ((T = n.exercises) == null ? void 0 : T[0]) ?? "",
              exerciseB: n.exerciseB ?? ((u = n.exercises) == null ? void 0 : u[1]) ?? "",
            };
          })
          .filter((n) => n.exerciseA && n.exerciseB)
      : void 0,
    v = s.activeRecovery
      ? {
          recommendation: s.activeRecovery.recommendation ?? s.activeRecovery.description ?? "",
          durationMinutes: s.activeRecovery.durationMinutes ?? s.activeRecovery.duration ?? 45,
          intensity: s.activeRecovery.intensity ?? "",
        }
      : void 0;
  return {
    workoutName: s.workoutName || s.name || "",
    duration: s.duration || null,
    targetMuscles: Array.isArray(s.targetMuscles)
      ? s.targetMuscles
      : Array.isArray(s.musclesTargeted)
        ? s.musclesTargeted
        : [],
    restDay: s.restDay || !1,
    exercises: c,
    warmup: { exercises: d },
    cooldown: { exercises: a },
    cardioFinisher: y,
    supersets: j && j.length > 0 ? j : void 0,
    activeRecovery: v,
  };
}
function Y(s) {
  const x = s.reduce((c, d) => c + (d.duration || 0), 0);
  return Math.max(1, Math.round(x / 60));
}
const Ie = {
    foundation: "phaseFoundation",
    build: "phaseBuild",
    peak: "phasePeak",
    deload: "phaseDeload",
    retest: "phaseRetest",
  },
  Ce = {
    foundation: "bg-sky-100 text-sky-700",
    build: "bg-emerald-100 text-emerald-700",
    peak: "bg-amber-100 text-amber-700",
    deload: "bg-violet-100 text-violet-700",
    retest: "bg-rose-100 text-rose-700",
  };
function Ve() {
  var H, O;
  const { t: s } = E("workouts"),
    { t: x } = E("common"),
    { t: c } = E("emptyStates"),
    { t: d } = E("units"),
    { i18n: m } = E(),
    a = m.language,
    { workoutPlan: t, isLoading: y } = ge(),
    j = X($.assessments.getMyAssessment),
    v = he($.workoutPlans.swapExercise),
    [D, n] = f.useState(null),
    [T] = f.useState(() => Date.now()),
    [u, z] = f.useState(0),
    [te, U] = f.useState(0),
    B = fe($.workoutPlans.requestTranslation),
    k = f.useRef(!1),
    _ = t == null ? void 0 : t.language,
    N = !!t && !!_ && _ !== a,
    w =
      N &&
      (t == null ? void 0 : t.translatedLanguage) === a &&
      !!(t != null && t.translatedPlanData),
    F = N && (t == null ? void 0 : t.translationStatus) === "failed" && !w,
    re = N && !w && !F;
  (f.useEffect(() => {
    N &&
      !w &&
      !F &&
      !k.current &&
      ((k.current = !0), B({ targetLanguage: a }).catch(console.error));
  }, [N, w, F, a, B]),
    f.useEffect(() => {
      k.current = !1;
    }, [t == null ? void 0 : t._id]));
  const ae = () => {
      ((k.current = !0), B({ targetLanguage: a }).catch(console.error));
    },
    ne = t == null ? void 0 : t.streamId,
    { streamedText: G, isStreaming: ie } = ye(
      t && (!t.planData || ((H = t.planData) != null && H.parseError)) ? ne : void 0,
    ),
    de =
      t != null && t.startDate && t != null && t.endDate
        ? Math.ceil((new Date(t.endDate).getTime() - new Date(t.startDate).getTime()) / 864e5) - 1
        : 13,
    q =
      t != null && t.startDate
        ? Math.max(0, Math.min(de, Math.floor((T - new Date(t.startDate).getTime()) / 864e5)))
        : 0,
    [le, oe] = f.useState(!1);
  t != null && t.startDate && !le && (z(q), oe(!0));
  const K =
      t != null && t.startDate && t != null && t.endDate
        ? Math.ceil((new Date(t.endDate).getTime() - new Date(t.startDate).getTime()) / 864e5)
        : 10,
    ce = (() => {
      if (!(t != null && t.planData)) return [];
      const r = N && w ? t.translatedPlanData : t.planData;
      if (!(r != null && r.weeklyPlan)) return [];
      const l = R(r.weeklyPlan, u, t.startDate),
        o = W(l);
      return (o == null ? void 0 : o.exercises) ?? [];
    })(),
    M = Fe(ce);
  if (y)
    return e.jsx("div", {
      className: "flex items-center justify-center py-20",
      children: e.jsxs("div", {
        className: "flex flex-col items-center gap-3",
        children: [
          e.jsx(L, { className: "text-primary h-8 w-8 animate-spin" }),
          e.jsx("p", { className: "text-muted-foreground text-sm", children: x("loading") }),
        ],
      }),
    });
  if (t && ie && G && !t.planData)
    return e.jsxs("div", {
      className: "mx-auto max-w-3xl space-y-5 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h1", { className: "text-2xl font-bold", children: s("title") }),
            e.jsx("p", {
              className: "text-muted-foreground mt-0.5 text-sm",
              children: s("generating"),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "border-fitness/30 bg-fitness/5 rounded-xl border p-5",
          children: [
            e.jsxs("div", {
              className: "mb-3 flex items-center gap-2",
              children: [
                e.jsx(je, { className: "text-fitness h-4 w-4 animate-pulse" }),
                e.jsx("span", {
                  className: "text-fitness text-sm font-semibold",
                  children: s("aiGenerating"),
                }),
              ],
            }),
            e.jsx("pre", {
              className:
                "text-muted-foreground max-h-96 overflow-y-auto font-sans text-sm leading-relaxed whitespace-pre-wrap",
              children: G,
            }),
          ],
        }),
      ],
    });
  if (!t) {
    const r = !t && !!j;
    return e.jsxs("div", {
      className: "mx-auto max-w-3xl space-y-6 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h1", { className: "text-2xl font-bold", children: s("title") }),
            e.jsx("p", {
              className: "text-muted-foreground mt-1 text-sm",
              children: s("getStarted"),
            }),
          ],
        }),
        r
          ? e.jsxs("div", {
              className: "border-border bg-card space-y-4 rounded-xl border p-8 text-center",
              children: [
                e.jsx(L, { className: "text-primary mx-auto h-10 w-10 animate-spin" }),
                e.jsx("h2", {
                  className: "text-lg font-bold",
                  children: c("workoutPlanGenerating.title"),
                }),
                e.jsx("p", {
                  className: "text-muted-foreground mx-auto max-w-md text-sm",
                  children: c("workoutPlanGenerating.description"),
                }),
              ],
            })
          : e.jsx(we, {
              icon: Ae,
              title: c("noWorkoutPlan.title"),
              description: c("noWorkoutPlan.description"),
            }),
      ],
    });
  }
  const p = N && w ? t.translatedPlanData : t.planData,
    S = (() => {
      if (!p.weekPhases || p.weekPhases.length === 0) return null;
      const r = Math.floor(u / 7) + 1;
      return p.weekPhases.find((l) => l.week === r) ?? null;
    })(),
    me = R(p.weeklyPlan, u, t.startDate),
    i = W(me),
    xe = () => {
      for (let r = u + 1; r < K; r++) {
        const l = R(p.weeklyPlan, r, t.startDate),
          o = W(l);
        if (o && !o.restDay) return o;
      }
      return null;
    },
    ue = () => {
      for (let r = u - 1; r >= 0; r--) {
        const l = R(p.weeklyPlan, r, t.startDate),
          o = W(l);
        if (o && !o.restDay) return o;
      }
      return null;
    },
    pe = u === q;
  return e.jsxs("div", {
    className: "mx-auto max-w-3xl space-y-5 py-4 lg:px-6 lg:py-6",
    children: [
      e.jsxs("div", {
        className:
          "border-border bg-card shadow-card animate-slide-up overflow-hidden rounded-2xl border",
        children: [
          e.jsxs("div", {
            className: "border-border flex items-stretch border-b",
            children: [
              e.jsxs("div", {
                className: "flex-1 p-4 pb-3",
                children: [
                  e.jsx("h1", {
                    className: "text-xl font-bold",
                    children: s(pe ? "todaysWorkout" : "title"),
                  }),
                  e.jsxs("p", {
                    className: "text-muted-foreground mt-0.5 text-xs",
                    children: [Q(t.startDate, a), " –", " ", Q(t.endDate, a)],
                  }),
                ],
              }),
              (p.splitName || S) &&
                e.jsxs("div", {
                  className:
                    "bg-fitness/8 border-border flex flex-col items-center justify-center gap-1 border-s px-4",
                  children: [
                    p.splitName &&
                      e.jsx("span", {
                        className: "text-fitness text-sm font-bold",
                        children: p.splitName,
                      }),
                    S &&
                      e.jsx("span", {
                        className: b(
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                          Ce[S.phase] ?? "bg-neutral-100 text-neutral-700",
                        ),
                        children: s(Ie[S.phase] ?? S.phase),
                      }),
                  ],
                }),
            ],
          }),
          i &&
            !i.restDay &&
            e.jsxs("div", {
              className: "space-y-0",
              children: [
                e.jsxs("div", {
                  className: "divide-border flex items-center divide-x",
                  children: [
                    e.jsxs("div", {
                      className: "flex-1 py-3 text-center",
                      children: [
                        e.jsx("p", {
                          className: "text-fitness text-lg font-bold",
                          children: h(((O = i.exercises) == null ? void 0 : O.length) || 0, a),
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground text-[10px]",
                          children: s("exercises"),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex-1 py-3 text-center",
                      children: [
                        e.jsx("p", {
                          className: "text-fitness text-lg font-bold",
                          children: i.duration ? h(i.duration, a) : "–",
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground text-[10px]",
                          children: s("durationMin"),
                        }),
                      ],
                    }),
                  ],
                }),
                Array.isArray(i.targetMuscles) &&
                  i.targetMuscles.length > 0 &&
                  e.jsxs("div", {
                    className: "border-border border-t px-4 py-2.5",
                    children: [
                      e.jsx("p", {
                        className: "text-muted-foreground mb-1.5 text-[10px]",
                        children: s("targetMuscles"),
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: i.targetMuscles
                          .slice(0, 5)
                          .map((r) =>
                            e.jsx(
                              "span",
                              {
                                className:
                                  "bg-fitness/8 text-fitness rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                                children: r,
                              },
                              r,
                            ),
                          ),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
      e.jsx(Ne, {
        totalDays: K,
        selectedDay: u,
        onSelectDay: (r) => {
          (z(r), U(0));
        },
        planStartDate: t.startDate,
        todayDayIndex: q,
        featureColor: "fitness",
      }),
      F &&
        e.jsxs("div", {
          className:
            "border-destructive/30 bg-destructive/5 flex items-center justify-between gap-3 rounded-xl border p-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx(V, { className: "text-destructive h-5 w-5 shrink-0" }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-destructive text-sm font-semibold",
                      children: s("translationFailed"),
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground text-xs",
                      children: s("translationFailedDescription"),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(De, { variant: "outline", size: "sm", onClick: ae, children: s("retry") }),
          ],
        }),
      re &&
        e.jsxs("div", {
          className: "border-primary/30 bg-primary/5 flex items-center gap-3 rounded-xl border p-4",
          children: [
            e.jsx(L, { className: "text-primary h-5 w-5 shrink-0 animate-spin" }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-primary text-sm font-semibold",
                  children: s("translating"),
                }),
                e.jsx("p", {
                  className: "text-muted-foreground text-xs",
                  children: s("translatingDescription"),
                }),
              ],
            }),
          ],
        }),
      i &&
        e.jsx(e.Fragment, {
          children: i.restDay
            ? e.jsx(Le, {
                t: s,
                prevWorkout: ue(),
                nextWorkout: xe(),
                activeRecovery: i.activeRecovery,
                locale: a,
              })
            : e.jsxs(e.Fragment, {
                children: [
                  i.warmup.exercises.length > 0 &&
                    e.jsx(J, {
                      title: s("warmup"),
                      durationMins: Y(i.warmup.exercises),
                      tUnits: d,
                      locale: a,
                      colorClass: "bg-amber-50 border-amber-200",
                      badgeClass: "bg-amber-100 text-amber-700",
                      children: e.jsx("div", {
                        className: "divide-border divide-y",
                        children: i.warmup.exercises.map((r, l) =>
                          e.jsxs(
                            "div",
                            {
                              className: "p-4",
                              children: [
                                e.jsxs("div", {
                                  className: "mb-1.5 flex items-center justify-between",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-sm font-medium",
                                      children: r.name,
                                    }),
                                    e.jsxs("span", {
                                      className:
                                        "text-muted-foreground rounded-md bg-neutral-100 px-2 py-0.5 text-xs",
                                      children: [h(r.duration, a), d("sec")],
                                    }),
                                  ],
                                }),
                                e.jsx("ul", {
                                  className: "text-muted-foreground space-y-0.5 text-xs",
                                  children: (Array.isArray(r.instructions)
                                    ? r.instructions
                                    : []
                                  ).map((o, A) => e.jsxs("li", { children: ["• ", o] }, A)),
                                }),
                              ],
                            },
                            l,
                          ),
                        ),
                      }),
                    }),
                  e.jsx("div", {
                    className: "space-y-3",
                    children: (i.exercises ?? []).map((r, l) => {
                      var A, P, Z;
                      const o = te === l;
                      return e.jsxs(
                        "div",
                        {
                          className: b(
                            "bg-card shadow-card animate-slide-up overflow-hidden rounded-xl border transition-colors",
                            o ? "border-primary/40 ring-primary/10 ring-2" : "border-border",
                          ),
                          style: { animationDelay: `${l * 50}ms` },
                          children: [
                            e.jsxs("button", {
                              onClick: () => U(o ? null : l),
                              "aria-expanded": o,
                              className:
                                "flex w-full items-center justify-between gap-3 p-3.5 text-start transition-colors hover:bg-neutral-50 active:scale-[0.97]",
                              children: [
                                e.jsxs("div", {
                                  className: "flex min-w-0 items-center gap-3",
                                  children: [
                                    e.jsx("div", {
                                      className: b(
                                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors",
                                        o ? "bg-primary text-white" : "bg-fitness/10 text-fitness",
                                      ),
                                      children: h(String(l + 1).padStart(2, "0"), a),
                                    }),
                                    e.jsxs("div", {
                                      className: "min-w-0",
                                      children: [
                                        e.jsx("h4", {
                                          className: "truncate text-sm font-semibold",
                                          children: r.name,
                                        }),
                                        e.jsxs("p", {
                                          className: "text-muted-foreground mt-0.5 text-xs",
                                          children: [
                                            h(r.sets, a),
                                            "x",
                                            h(r.reps, a),
                                            " ",
                                            s("reps"),
                                            r.rest &&
                                              r.rest !== "-" &&
                                              e.jsxs("span", {
                                                className: "text-muted-foreground/70",
                                                children: [" ", "· ", h(r.rest, a), " ", s("rest")],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex shrink-0 items-center gap-2",
                                  children: [
                                    r.equipment &&
                                      e.jsx("span", {
                                        className:
                                          "bg-fitness/8 text-fitness hidden rounded-full px-2 py-0.5 text-[10px] font-medium sm:inline-block",
                                        children: r.equipment,
                                      }),
                                    e.jsx(ee, {
                                      className: b(
                                        "h-4 w-4 transition-all duration-200",
                                        o ? "text-primary rotate-180" : "text-muted-foreground",
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            o &&
                              t &&
                              e.jsx("div", {
                                className: "border-border flex justify-end border-t px-3.5 py-2",
                                children: e.jsxs("button", {
                                  type: "button",
                                  disabled: D === `${u}-${l}`,
                                  onClick: async (g) => {
                                    g.stopPropagation();
                                    const I = `${u}-${l}`;
                                    n(I);
                                    try {
                                      await v({
                                        planId: t._id,
                                        dayKey: `day${u + 1}`,
                                        exerciseIndex: l,
                                      });
                                    } catch (C) {
                                      console.error("Swap failed:", C);
                                    } finally {
                                      n((C) => (C === I ? null : C));
                                    }
                                  },
                                  className:
                                    "text-fitness hover:bg-fitness/10 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
                                  children: [
                                    D === `${u}-${l}`
                                      ? e.jsx(L, { className: "h-3.5 w-3.5 animate-spin" })
                                      : e.jsx(ve, { className: "h-3.5 w-3.5" }),
                                    D === `${u}-${l}` ? s("swapping") : s("swapExercise"),
                                  ],
                                }),
                              }),
                            e.jsx("div", {
                              className: b(
                                "overflow-hidden transition-all duration-200 ease-in-out",
                                o ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
                              ),
                              children: e.jsxs("div", {
                                className: "border-border space-y-3 border-t px-3.5 pt-3 pb-3.5",
                                children: [
                                  r.exerciseDbId &&
                                    M[r.exerciseDbId] &&
                                    (M[r.exerciseDbId].gifStorageUrl || M[r.exerciseDbId].gifUrl) &&
                                    e.jsx(ke, {
                                      url:
                                        M[r.exerciseDbId].gifStorageUrl || M[r.exerciseDbId].gifUrl,
                                      alt: r.name,
                                    }),
                                  r.targetMuscles &&
                                    r.targetMuscles.length > 0 &&
                                    e.jsx("div", {
                                      className: "flex flex-wrap gap-1",
                                      children: r.targetMuscles.map((g, I) =>
                                        e.jsx(
                                          "span",
                                          {
                                            className:
                                              "bg-fitness/10 text-fitness rounded-full px-2 py-0.5 text-[10px] font-medium",
                                            children: g,
                                          },
                                          I,
                                        ),
                                      ),
                                    }),
                                  e.jsxs("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: [
                                      e.jsxs("div", {
                                        className: "rounded-lg bg-neutral-50 p-2 text-center",
                                        children: [
                                          e.jsx("p", {
                                            className: "text-sm font-bold",
                                            children: h(r.sets, a),
                                          }),
                                          e.jsx("p", {
                                            className: "text-muted-foreground text-[10px]",
                                            children: s("sets"),
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "rounded-lg bg-neutral-50 p-2 text-center",
                                        children: [
                                          e.jsx("p", {
                                            className: "text-sm font-bold",
                                            children: h(r.reps, a),
                                          }),
                                          e.jsx("p", {
                                            className: "text-muted-foreground text-[10px]",
                                            children: s("reps"),
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "rounded-lg bg-neutral-50 p-2 text-center",
                                        children: [
                                          e.jsx("p", {
                                            className: "text-sm font-bold",
                                            children: r.rest ? h(r.rest, a) : "-",
                                          }),
                                          e.jsx("p", {
                                            className: "text-muted-foreground text-[10px]",
                                            children: s("rest"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  r.suggestedWeight &&
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5",
                                      children: [
                                        e.jsx(Me, { className: "h-3.5 w-3.5 text-emerald-600" }),
                                        e.jsx("span", {
                                          className: "text-xs font-medium text-emerald-700",
                                          children: s("suggestedWeight", {
                                            weight: r.suggestedWeight,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ((A = i == null ? void 0 : i.supersets) == null
                                    ? void 0
                                    : A.some(
                                        (g) => g.exerciseA === r.name || g.exerciseB === r.name,
                                      )) &&
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1.5",
                                      children: [
                                        e.jsx(be, { className: "h-3.5 w-3.5 text-violet-600" }),
                                        e.jsx("span", {
                                          className: "text-xs font-medium text-violet-700",
                                          children: s("supersetWith", {
                                            exercise:
                                              ((P = i.supersets.find(
                                                (g) => g.exerciseA === r.name,
                                              )) == null
                                                ? void 0
                                                : P.exerciseB) ??
                                              ((Z = i.supersets.find(
                                                (g) => g.exerciseB === r.name,
                                              )) == null
                                                ? void 0
                                                : Z.exerciseA) ??
                                              "",
                                          }),
                                        }),
                                      ],
                                    }),
                                  r.equipment &&
                                    e.jsx("span", {
                                      className:
                                        "bg-fitness/12 text-fitness inline-block rounded-md px-2.5 py-1 text-xs font-medium",
                                      children: r.equipment,
                                    }),
                                  r.notes &&
                                    e.jsx("p", {
                                      className:
                                        "text-muted-foreground rounded-lg bg-neutral-50 p-2.5 text-xs italic",
                                      children: r.notes,
                                    }),
                                ],
                              }),
                            }),
                          ],
                        },
                        l,
                      );
                    }),
                  }),
                  i.cooldown.exercises.length > 0 &&
                    e.jsx(J, {
                      title: s("cooldown"),
                      durationMins: Y(i.cooldown.exercises),
                      tUnits: d,
                      locale: a,
                      colorClass: "bg-blue-50 border-blue-200",
                      badgeClass: "bg-blue-100 text-blue-700",
                      children: e.jsx("div", {
                        className: "divide-border divide-y",
                        children: i.cooldown.exercises.map((r, l) =>
                          e.jsxs(
                            "div",
                            {
                              className: "p-4",
                              children: [
                                e.jsxs("div", {
                                  className: "mb-1.5 flex items-center justify-between",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-sm font-medium",
                                      children: r.name,
                                    }),
                                    e.jsxs("span", {
                                      className:
                                        "text-muted-foreground rounded-md bg-neutral-100 px-2 py-0.5 text-xs",
                                      children: [h(r.duration, a), d("sec")],
                                    }),
                                  ],
                                }),
                                e.jsx("ul", {
                                  className: "text-muted-foreground space-y-0.5 text-xs",
                                  children: (Array.isArray(r.instructions)
                                    ? r.instructions
                                    : []
                                  ).map((o, A) => e.jsxs("li", { children: ["• ", o] }, A)),
                                }),
                              ],
                            },
                            l,
                          ),
                        ),
                      }),
                    }),
                  i.cardioFinisher &&
                    e.jsxs("div", {
                      className:
                        "animate-slide-up overflow-hidden rounded-xl border border-rose-200 bg-rose-50",
                      children: [
                        e.jsx("div", {
                          className: "flex items-center justify-between p-4",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100",
                                children: e.jsx(se, { className: "h-4 w-4 text-rose-600" }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm font-semibold text-rose-900",
                                    children: s("cardioFinisher"),
                                  }),
                                  e.jsx("p", {
                                    className: "text-xs text-rose-600",
                                    children: s("cardioFinisherDuration", {
                                      duration: h(i.cardioFinisher.durationMinutes, a),
                                      intensity: i.cardioFinisher.intensity,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className: "border-t border-rose-200 px-4 py-3",
                          children: [
                            e.jsx("p", {
                              className: "text-sm font-medium text-rose-800",
                              children: i.cardioFinisher.name,
                            }),
                            i.cardioFinisher.instructions.length > 0 &&
                              e.jsx("ul", {
                                className: "mt-1 space-y-0.5 text-xs text-rose-600",
                                children: i.cardioFinisher.instructions.map((r, l) =>
                                  e.jsxs("li", { children: ["• ", r] }, l),
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
        }),
      p.progressionNotes &&
        e.jsxs("div", {
          className: "border-fitness/20 bg-fitness/8 rounded-xl border p-4",
          children: [
            e.jsx("p", {
              className: "text-muted-foreground mb-1 text-xs font-medium",
              children: s("progressionNotes"),
            }),
            e.jsx("p", { className: "text-sm font-medium", children: p.progressionNotes }),
          ],
        }),
      p.safetyTips &&
        p.safetyTips.length > 0 &&
        e.jsxs("div", {
          className: "bg-error-500/5 border-error-500/20 rounded-xl border p-4",
          children: [
            e.jsxs("div", {
              className: "mb-2 flex items-center gap-2",
              children: [
                e.jsx(V, { className: "text-error-500 h-4 w-4" }),
                e.jsx("p", {
                  className: "text-error-500 text-xs font-semibold",
                  children: s("safetyTips"),
                }),
              ],
            }),
            e.jsx("ul", {
              className: "space-y-1.5",
              children: p.safetyTips.map((r, l) =>
                e.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-sm",
                    children: [
                      e.jsx("span", { className: "text-error-500 mt-0.5", children: "!" }),
                      r,
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function J({
  title: s,
  durationMins: x,
  tUnits: c,
  locale: d,
  colorClass: m,
  badgeClass: a,
  children: t,
}) {
  const [y, j] = f.useState(!1),
    v = `section-panel-${s.toLowerCase().replace(/\s+/g, "-")}`;
  return e.jsxs("div", {
    className: b("animate-slide-up overflow-hidden rounded-xl border", m),
    children: [
      e.jsxs("button", {
        onClick: () => j(!y),
        "aria-expanded": y,
        "aria-controls": v,
        className: "flex w-full items-center justify-between p-4 text-start",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx("span", {
                className: b("rounded-md px-2 py-0.5 text-xs font-bold", a),
                children: s,
              }),
              e.jsxs("span", {
                className: "text-muted-foreground text-xs",
                children: ["· ", h(x, d), " ", c("min")],
              }),
            ],
          }),
          e.jsx(ee, {
            className: b(
              "text-muted-foreground h-4 w-4 transition-transform duration-200",
              y && "rotate-180",
            ),
          }),
        ],
      }),
      e.jsx("div", {
        id: v,
        role: "region",
        className: b(
          "overflow-hidden transition-all duration-200",
          y ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0",
        ),
        children: t,
      }),
    ],
  });
}
function Le({ t: s, prevWorkout: x, nextWorkout: c, activeRecovery: d, locale: m }) {
  return e.jsxs("div", {
    className:
      "border-border bg-card shadow-card animate-slide-up space-y-4 rounded-xl border p-8 text-center",
    children: [
      e.jsx("div", {
        className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50",
        children: e.jsx(Te, { className: "h-8 w-8 text-blue-400" }),
      }),
      e.jsx("h3", { className: "text-lg font-semibold", children: s("restDayTitle") }),
      e.jsx("p", {
        className: "text-muted-foreground mx-auto max-w-sm text-sm",
        children: s("restDescription"),
      }),
      x &&
        x.workoutName &&
        e.jsx("p", {
          className: "text-muted-foreground text-sm",
          children: s("restDayRecovery", { workout: x.workoutName }),
        }),
      d &&
        d.recommendation &&
        e.jsxs("div", {
          className:
            "mx-auto max-w-xs rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-start",
          children: [
            e.jsxs("div", {
              className: "mb-1.5 flex items-center gap-1.5",
              children: [
                e.jsx(se, { className: "h-3.5 w-3.5 text-emerald-600" }),
                e.jsx("p", {
                  className: "text-xs font-semibold text-emerald-700",
                  children: s("activeRecovery"),
                }),
              ],
            }),
            e.jsx("p", { className: "text-sm text-emerald-800", children: d.recommendation }),
            e.jsx("p", {
              className: "text-muted-foreground mt-1 text-xs",
              children: s("cardioFinisherDuration", {
                duration: h(d.durationMinutes, m),
                intensity: d.intensity,
              }),
            }),
          ],
        }),
      c &&
        e.jsxs("div", {
          className:
            "mx-auto max-w-xs rounded-lg border border-blue-100 bg-blue-50/50 p-3 text-start",
          children: [
            e.jsx("p", {
              className: "mb-1 text-xs font-semibold text-blue-600",
              children: s("nextWorkout"),
            }),
            e.jsx("p", { className: "text-sm font-medium", children: c.workoutName }),
            c.targetMuscles.length > 0 &&
              e.jsx("div", {
                className: "mt-1.5 flex flex-wrap gap-1",
                children: c.targetMuscles.map((a, t) =>
                  e.jsx(
                    "span",
                    {
                      className:
                        "rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-medium text-blue-700",
                      children: a,
                    },
                    t,
                  ),
                ),
              }),
          ],
        }),
    ],
  });
}
export { Ve as component };
