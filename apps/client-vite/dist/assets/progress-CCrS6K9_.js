const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ProgressCharts-BQmmxE16.js",
      "assets/index-BVud5pVb.js",
      "assets/index-C6RvCgIX.css",
      "assets/section-card-CI2ZkxEX.js",
      "assets/cn-CDN07tui.js",
      "assets/weight-BpUO4uB_.js",
      "assets/createLucideIcon-CflinLEd.js",
      "assets/ruler-BErsoevN.js",
      "assets/heart-Cfc7SifX.js",
      "assets/widget-card-ChokKurf.js",
      "assets/format-zSzWEmcW.js",
      "assets/trending-down-CdNIVmod.js",
      "assets/trending-up-yKghX4cs.js",
      "assets/calendar-PtChDace.js",
      "assets/empty-state-BQ3yrOyd.js",
      "assets/button-B1_2FTXK.js",
      "assets/x-C2ku7ZUf.js",
      "assets/dumbbell-DitM0HwP.js",
      "assets/triangle-alert-DfzczM4d.js",
      "assets/skeleton-eFLYgFmv.js",
    ]),
) => i.map((i) => d[i]);
import {
  c as j,
  j as e,
  b as Q,
  r as x,
  e as te,
  u as T,
  a as A,
  _ as re,
} from "./index-BVud5pVb.js";
import { W } from "./widget-card-ChokKurf.js";
import { b as B, c as ae, a as S } from "./format-zSzWEmcW.js";
import { W as H, C as U } from "./weight-BpUO4uB_.js";
import { T as V } from "./trending-down-CdNIVmod.js";
import { T as q } from "./trending-up-yKghX4cs.js";
import { C as E } from "./calendar-PtChDace.js";
import { S as I } from "./section-card-CI2ZkxEX.js";
import { E as K } from "./empty-state-BQ3yrOyd.js";
import { c as D } from "./createLucideIcon-CflinLEd.js";
import { X as le } from "./x-C2ku7ZUf.js";
import { c as L } from "./cn-CDN07tui.js";
import { D as ne } from "./dumbbell-DitM0HwP.js";
import { T as oe } from "./triangle-alert-DfzczM4d.js";
import { S as k } from "./skeleton-eFLYgFmv.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ie = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  de = D("activity", ie);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ce = [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  me = D("image", ce);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ue = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  xe = D("minus", ue);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ge = [
    ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
    ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
    ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
  ],
  $ = D("square-split-horizontal", ge);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const he = [
    [
      "path",
      {
        d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
        key: "1dfntj",
      },
    ],
    ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5", key: "6s6qgf" }],
  ],
  pe = D("sticky-note", he);
function fe({
  firstCheckIn: l,
  latestCheckIn: t,
  weightChange: r,
  weightChangePercent: c,
  totalCheckIns: o,
  rateOfChange: i,
}) {
  const { t: u, i18n: p } = j("progress"),
    n = p.language,
    h = r < 0 ? "down" : r > 0 ? "up" : "neutral";
  return e.jsxs("div", {
    className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
    children: [
      e.jsx("div", {
        className: "animate-slide-up",
        style: { animationDelay: "0ms" },
        children: e.jsx(W, {
          icon: H,
          title: u("startWeight"),
          value: l != null && l.weight ? `${l.weight}` : "-",
          subtitle: l ? B(new Date(l._creationTime).toISOString(), n) : "-",
          featureColor: "primary",
        }),
      }),
      e.jsx("div", {
        className: "animate-slide-up",
        style: { animationDelay: "50ms" },
        children: e.jsx(W, {
          icon: H,
          title: u("currentWeight"),
          value: t != null && t.weight ? `${t.weight}` : "-",
          subtitle: t ? B(new Date(t._creationTime).toISOString(), n) : "-",
          featureColor: "nutrition",
        }),
      }),
      e.jsx("div", {
        className: "animate-slide-up",
        style: { animationDelay: "100ms" },
        children: e.jsx(W, {
          icon: r < 0 ? V : q,
          title: u("totalChange"),
          value: r !== 0 ? `${r > 0 ? "+" : ""}${r.toFixed(1)}` : "-",
          subtitle: i != null ? `${i > 0 ? "+" : ""}${i.toFixed(1)} ${u("kgPerWeek")}` : void 0,
          trend: r !== 0 ? { direction: h, label: `${r > 0 ? "+" : ""}${c}%` } : void 0,
          featureColor: "fitness",
        }),
      }),
      e.jsx("div", {
        className: "animate-slide-up",
        style: { animationDelay: "150ms" },
        children: e.jsx(W, {
          icon: E,
          title: u("checkIns"),
          value: o,
          subtitle: u("totalRecorded"),
          featureColor: "routine",
        }),
      }),
    ],
  });
}
function be({ photos: l }) {
  const { t } = j("progress"),
    { t: r } = j("emptyStates"),
    c = Q(),
    [o, i] = x.useState(null),
    u = x.useRef(null),
    p = x.useRef(null),
    n = x.useRef(!1),
    h = x.useCallback(
      (d) => {
        o !== null &&
          (d.key === "Escape"
            ? i(null)
            : d.key === "ArrowLeft"
              ? (d.preventDefault(), i((g) => (g !== null && g > 0 ? g - 1 : g)))
              : d.key === "ArrowRight" &&
                (d.preventDefault(), i((g) => (g !== null && g < l.length - 1 ? g + 1 : g))));
      },
      [o, l.length],
    );
  return (
    x.useEffect(() => {
      if (o !== null)
        return (
          document.addEventListener("keydown", h),
          () => {
            document.removeEventListener("keydown", h);
          }
        );
    }, [o, h]),
    x.useEffect(() => {
      var g, a;
      const d = o !== null;
      (d && !n.current
        ? (g = u.current) == null || g.focus()
        : !d && n.current && ((a = p.current) == null || a.focus()),
        (n.current = d));
    }, [o]),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(I, {
          icon: U,
          title: t("progressPhotos"),
          description: t("progressPhotosDescription"),
          children:
            l.length > 0
              ? e.jsx("div", {
                  className: "grid grid-cols-3 gap-2.5",
                  children: l.map((d, g) =>
                    e.jsxs(
                      "button",
                      {
                        type: "button",
                        className:
                          "group border-border relative cursor-pointer overflow-hidden rounded-xl border transition-transform hover:scale-[1.02]",
                        onClick: (a) => {
                          ((p.current = a.currentTarget), i(g));
                        },
                        children: [
                          e.jsx("div", {
                            className: "relative aspect-[3/4] bg-neutral-100",
                            children: e.jsx("img", {
                              src: d.url,
                              alt: `Progress photo from ${d.date}`,
                              className: "h-full w-full object-cover",
                              loading: "lazy",
                            }),
                          }),
                          d.label &&
                            e.jsx("div", {
                              className:
                                "absolute top-2 left-2 rounded bg-blue-500/90 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm",
                              children: d.label,
                            }),
                          e.jsx("div", {
                            className:
                              "absolute inset-x-0 bottom-0 bg-black/60 p-2 backdrop-blur-sm",
                            children: e.jsx("p", {
                              className: "text-xs font-medium text-white",
                              children: d.date,
                            }),
                          }),
                        ],
                      },
                      `${d.url}-${g}`,
                    ),
                  ),
                })
              : e.jsx(K, {
                  icon: me,
                  title: r("noPhotos.title"),
                  description: r("noPhotos.description"),
                  action: { label: r("noPhotos.action"), onClick: () => c({ to: "/check-in" }) },
                }),
        }),
        o !== null &&
          l[o] &&
          e.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4",
            onClick: () => i(null),
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t("progressPhoto"),
            children: e.jsxs("div", {
              className: "bg-card relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl",
              onClick: (d) => d.stopPropagation(),
              children: [
                e.jsxs("div", {
                  className: "border-border flex items-center justify-between border-b p-3",
                  children: [
                    e.jsxs("span", {
                      className: "text-sm font-semibold",
                      children: [t("progressPhoto"), " (", o + 1, "/", l.length, ")"],
                    }),
                    e.jsx("button", {
                      ref: u,
                      type: "button",
                      onClick: () => i(null),
                      "aria-label": t("close"),
                      className:
                        "flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-neutral-100",
                      children: e.jsx(le, { className: "h-5 w-5" }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "relative aspect-[3/4] max-h-[70vh] w-full",
                  children: e.jsx("img", {
                    src: l[o].url,
                    alt: `Progress photo from ${l[o].date}`,
                    className: "h-full w-full object-contain",
                  }),
                }),
              ],
            }),
          }),
      ],
    })
  );
}
function je({ photos: l }) {
  const { t } = j("progress"),
    [r, c] = x.useState(50);
  if (l.length < 2)
    return e.jsxs("div", {
      className: "border-border bg-card shadow-card overflow-hidden rounded-xl border",
      children: [
        e.jsxs("div", {
          className: "border-border bg-primary/5 flex items-center gap-2 border-b p-4",
          children: [
            e.jsx($, { className: "text-primary h-4 w-4" }),
            e.jsx("h3", { className: "text-sm font-semibold", children: t("beforeAfter") }),
          ],
        }),
        e.jsxs("div", {
          className: "p-8 text-center",
          children: [
            e.jsx($, { className: "text-muted-foreground/30 mx-auto h-10 w-10" }),
            e.jsx("p", {
              className: "text-muted-foreground mt-3 text-sm",
              children: t("needTwoPhotos"),
            }),
          ],
        }),
      ],
    });
  const o = l[0],
    i = l[l.length - 1];
  return e.jsxs("div", {
    className: "border-border bg-card shadow-card overflow-hidden rounded-xl border",
    children: [
      e.jsxs("div", {
        className: "border-border bg-primary/5 flex items-center gap-2 border-b p-4",
        children: [
          e.jsx($, { className: "text-primary h-4 w-4" }),
          e.jsx("h3", { className: "text-sm font-semibold", children: t("beforeAfter") }),
        ],
      }),
      e.jsxs("div", {
        className: "p-4",
        children: [
          e.jsxs("div", {
            className: "relative aspect-[3/4] overflow-hidden rounded-lg",
            children: [
              e.jsx("img", {
                src: o.url,
                alt: `${t("before")} — ${o.date}`,
                className: "absolute inset-0 h-full w-full object-cover",
              }),
              e.jsx("div", {
                className: "absolute inset-0",
                style: { clipPath: `inset(0 ${100 - r}% 0 0)` },
                children: e.jsx("img", {
                  src: i.url,
                  alt: `${t("after")} — ${i.date}`,
                  className: "h-full w-full object-cover",
                }),
              }),
              e.jsx("div", {
                className: "absolute top-0 bottom-0 w-0.5 bg-white shadow-lg",
                style: { left: `${r}%` },
                children: e.jsx("div", {
                  className:
                    "absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-white/50",
                  children: e.jsx($, { className: "h-4 w-4 text-neutral-600" }),
                }),
              }),
              e.jsxs("div", {
                className:
                  "absolute bottom-3 left-3 rounded-lg bg-black/70 px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm",
                children: [t("before"), " — ", o.date],
              }),
              e.jsxs("div", {
                className:
                  "absolute right-3 bottom-3 rounded-lg bg-black/70 px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm",
                children: [t("after"), " — ", i.date],
              }),
              e.jsx("input", {
                type: "range",
                min: 0,
                max: 100,
                value: r,
                onChange: (u) => c(Number(u.target.value)),
                "aria-label": t("slideToCompare"),
                className: "absolute inset-0 h-full w-full cursor-ew-resize opacity-0",
              }),
            ],
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-2 text-center text-xs",
            children: t("slideToCompare"),
          }),
        ],
      }),
    ],
  });
}
function ye({ checkIns: l }) {
  const { t, i18n: r } = j("progress"),
    { t: c } = j("emptyStates"),
    { t: o } = j("checkIn"),
    { t: i } = j("units"),
    u = r.language,
    p = Q();
  return e.jsx(I, {
    icon: E,
    title: t("checkInHistory"),
    description: t("checkInHistoryDescription"),
    variant: "routine",
    children: e.jsx("div", {
      className: "divide-border -m-5 divide-y",
      children:
        l.length > 0
          ? l
              .slice()
              .reverse()
              .map((n) => {
                const h = n.measurements ?? {},
                  {
                    inBodyData: d,
                    workoutPerformance: g,
                    newInjuries: a,
                    notes: P,
                    cyclePhase: y,
                  } = n;
                return e.jsxs(
                  "div",
                  {
                    className: "p-4 transition-colors hover:bg-neutral-50",
                    children: [
                      e.jsxs("div", {
                        className: "mb-3 flex items-start justify-between",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-sm font-semibold",
                                children: B(new Date(n._creationTime).toISOString(), u),
                              }),
                              e.jsx("p", {
                                className: "text-muted-foreground text-xs",
                                children: ae(new Date(n._creationTime).toISOString(), u),
                              }),
                            ],
                          }),
                          n.weight &&
                            e.jsxs("div", {
                              className: "bg-primary/10 rounded-lg px-3 py-1.5",
                              children: [
                                e.jsx("span", {
                                  className: "text-primary text-lg font-bold",
                                  children: n.weight,
                                }),
                                e.jsx("span", {
                                  className: "text-primary ms-1 text-xs",
                                  children: i("kg") || "KG",
                                }),
                              ],
                            }),
                        ],
                      }),
                      h &&
                        e.jsxs("div", {
                          className: "mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
                          children: [
                            h.chest &&
                              e.jsxs("div", {
                                className: "rounded-lg bg-neutral-100 p-2.5",
                                children: [
                                  e.jsx("p", {
                                    className: "text-muted-foreground text-xs",
                                    children: o("chest"),
                                  }),
                                  e.jsxs("p", {
                                    className: "text-sm font-semibold",
                                    children: [h.chest, " ", i("cm")],
                                  }),
                                ],
                              }),
                            h.waist &&
                              e.jsxs("div", {
                                className: "rounded-lg bg-neutral-100 p-2.5",
                                children: [
                                  e.jsx("p", {
                                    className: "text-muted-foreground text-xs",
                                    children: o("waist"),
                                  }),
                                  e.jsxs("p", {
                                    className: "text-sm font-semibold",
                                    children: [h.waist, " ", i("cm")],
                                  }),
                                ],
                              }),
                            h.hips &&
                              e.jsxs("div", {
                                className: "rounded-lg bg-neutral-100 p-2.5",
                                children: [
                                  e.jsx("p", {
                                    className: "text-muted-foreground text-xs",
                                    children: o("hips"),
                                  }),
                                  e.jsxs("p", {
                                    className: "text-sm font-semibold",
                                    children: [h.hips, " ", i("cm")],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      d &&
                        e.jsxs("div", {
                          className: "mb-3",
                          children: [
                            e.jsx("div", {
                              className: "mb-1.5 flex items-center gap-1.5",
                              children: e.jsx("span", {
                                className:
                                  "rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700",
                                children: "InBody",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
                              children: [
                                d.bodyFatPercentage != null &&
                                  e.jsxs("div", {
                                    className: "rounded-lg bg-blue-50 p-2.5",
                                    children: [
                                      e.jsx("p", {
                                        className: "text-muted-foreground text-xs",
                                        children: t("bodyFatPercent"),
                                      }),
                                      e.jsxs("p", {
                                        className: "text-sm font-semibold",
                                        children: [d.bodyFatPercentage, "%"],
                                      }),
                                    ],
                                  }),
                                d.leanBodyMass != null &&
                                  e.jsxs("div", {
                                    className: "rounded-lg bg-blue-50 p-2.5",
                                    children: [
                                      e.jsx("p", {
                                        className: "text-muted-foreground text-xs",
                                        children: t("leanMass"),
                                      }),
                                      e.jsxs("p", {
                                        className: "text-sm font-semibold",
                                        children: [d.leanBodyMass, " ", i("kg")],
                                      }),
                                    ],
                                  }),
                                d.skeletalMuscleMass != null &&
                                  e.jsxs("div", {
                                    className: "rounded-lg bg-blue-50 p-2.5",
                                    children: [
                                      e.jsx("p", {
                                        className: "text-muted-foreground text-xs",
                                        children: t("skeletalMuscleMass"),
                                      }),
                                      e.jsxs("p", {
                                        className: "text-sm font-semibold",
                                        children: [d.skeletalMuscleMass, " ", i("kg")],
                                      }),
                                    ],
                                  }),
                                d.bmi != null &&
                                  e.jsxs("div", {
                                    className: "rounded-lg bg-blue-50 p-2.5",
                                    children: [
                                      e.jsx("p", {
                                        className: "text-muted-foreground text-xs",
                                        children: t("bmi"),
                                      }),
                                      e.jsx("p", {
                                        className: "text-sm font-semibold",
                                        children: d.bmi,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      e.jsxs("div", {
                        className: "flex flex-wrap gap-3 text-xs",
                        children: [
                          n.energyLevel !== void 0 &&
                            n.energyLevel !== null &&
                            e.jsxs("span", {
                              className: "text-muted-foreground",
                              children: [
                                o("energy"),
                                ":",
                                " ",
                                e.jsxs("span", {
                                  className: "text-foreground font-semibold",
                                  children: [n.energyLevel, "/10"],
                                }),
                              ],
                            }),
                          n.sleepQuality !== void 0 &&
                            n.sleepQuality !== null &&
                            e.jsxs("span", {
                              className: "text-muted-foreground",
                              children: [
                                o("sleep"),
                                ":",
                                " ",
                                e.jsxs("span", {
                                  className: "text-foreground font-semibold",
                                  children: [n.sleepQuality, "/10"],
                                }),
                              ],
                            }),
                          n.dietaryAdherence !== void 0 &&
                            n.dietaryAdherence !== null &&
                            e.jsxs("span", {
                              className: "text-muted-foreground",
                              children: [
                                o("adherence"),
                                ":",
                                " ",
                                e.jsxs("span", {
                                  className: "text-foreground font-semibold",
                                  children: [n.dietaryAdherence, "/10"],
                                }),
                              ],
                            }),
                          y &&
                            y !== "not_tracking" &&
                            e.jsx("span", {
                              className: L(
                                "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                                y === "menstrual" && "bg-red-100 text-red-700",
                                y === "follicular" && "bg-green-100 text-green-700",
                                y === "ovulatory" && "bg-blue-100 text-blue-700",
                                y === "luteal" && "bg-yellow-100 text-yellow-700",
                              ),
                              children: t(`cyclePhase_${y}`),
                            }),
                        ],
                      }),
                      g &&
                        e.jsxs("div", {
                          className: "mt-2 flex items-start gap-1.5 text-xs",
                          children: [
                            e.jsx(ne, {
                              className: "text-muted-foreground mt-0.5 h-3 w-3 shrink-0",
                            }),
                            e.jsx("span", { className: "text-muted-foreground", children: g }),
                          ],
                        }),
                      a &&
                        e.jsxs("div", {
                          className: "mt-2 flex items-start gap-1.5 text-xs",
                          children: [
                            e.jsx(oe, { className: "mt-0.5 h-3 w-3 shrink-0 text-amber-500" }),
                            e.jsx("span", { className: "text-amber-700", children: a }),
                          ],
                        }),
                      P &&
                        e.jsxs("div", {
                          className: "mt-2 flex items-start gap-1.5 text-xs",
                          children: [
                            e.jsx(pe, {
                              className: "text-muted-foreground mt-0.5 h-3 w-3 shrink-0",
                            }),
                            e.jsx("span", { className: "text-muted-foreground", children: P }),
                          ],
                        }),
                    ],
                  },
                  n._id,
                );
              })
          : e.jsx("div", {
              className: "p-5",
              children: e.jsx(K, {
                icon: E,
                title: c("noCheckIns.title"),
                description: c("noCheckIns.description"),
                action: { label: c("noCheckIns.action"), onClick: () => p({ to: "/check-in" }) },
              }),
            }),
    }),
  });
}
function ve(l) {
  const t = new Date(),
    r = new Date(t);
  (r.setDate(t.getDate() - t.getDay()), r.setHours(0, 0, 0, 0));
  const c = new Date(r);
  c.setDate(c.getDate() - 7);
  const o = l.filter((u) => new Date(u._creationTime) >= r),
    i = l.filter((u) => new Date(u._creationTime) >= c && new Date(u._creationTime) < r);
  return { thisWeek: o, lastWeek: i };
}
function N(l) {
  const t = l.filter((r) => r != null);
  return t.length === 0 ? null : t.reduce((r, c) => r + c, 0) / t.length;
}
function O({ label: l, thisWeek: t, lastWeek: r, unit: c, format: o }) {
  const { t: i } = j("progress"),
    u = o ?? ((h) => h.toFixed(1));
  if (t == null && r == null) return null;
  const p = t != null && r != null ? t - r : null,
    n = p == null ? "neutral" : p > 0.05 ? "up" : p < -0.05 ? "down" : "neutral";
  return e.jsxs("div", {
    className: "border-border bg-card shadow-card overflow-hidden rounded-xl border p-4",
    children: [
      e.jsx("p", { className: "text-muted-foreground mb-2 text-xs font-medium", children: l }),
      e.jsxs("div", {
        className: "flex items-end justify-between",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("p", {
                className: "text-2xl font-bold",
                children: [
                  t != null ? u(t) : "-",
                  c &&
                    e.jsx("span", {
                      className: "text-muted-foreground ms-1 text-sm font-normal",
                      children: c,
                    }),
                ],
              }),
              e.jsxs("p", {
                className: "text-muted-foreground text-xs",
                children: [i("lastWeek"), ": ", r != null ? `${u(r)}${c ? ` ${c}` : ""}` : "-"],
              }),
            ],
          }),
          p != null &&
            e.jsxs("div", {
              className: L(
                "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
                n === "up" && "bg-green-100 text-green-700",
                n === "down" && "bg-red-100 text-red-700",
                n === "neutral" && "bg-neutral-100 text-neutral-600",
              ),
              children: [
                n === "up" && e.jsx(q, { className: "h-3 w-3" }),
                n === "down" && e.jsx(V, { className: "h-3 w-3" }),
                n === "neutral" && e.jsx(xe, { className: "h-3 w-3" }),
                p > 0 ? "+" : "",
                u(p),
              ],
            }),
        ],
      }),
    ],
  });
}
function Ne({ checkIns: l }) {
  const { t } = j("progress"),
    { thisWeek: r, lastWeek: c } = x.useMemo(() => ve(l), [l]);
  if (c.length === 0) return null;
  const o = N(r.map((a) => a.weight)),
    i = N(c.map((a) => a.weight)),
    u = N(r.map((a) => a.energyLevel)),
    p = N(c.map((a) => a.energyLevel)),
    n = N(r.map((a) => a.sleepQuality)),
    h = N(c.map((a) => a.sleepQuality)),
    d = N(r.map((a) => a.dietaryAdherence)),
    g = N(c.map((a) => a.dietaryAdherence));
  return e.jsxs("div", {
    className: "space-y-2",
    children: [
      e.jsx("h3", { className: "text-sm font-semibold", children: t("weekComparison") }),
      e.jsxs("div", {
        className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
        children: [
          e.jsx(O, { label: t("avgWeight"), thisWeek: o, lastWeek: i, unit: "kg" }),
          e.jsx(O, { label: t("avgEnergy"), thisWeek: u, lastWeek: p, unit: "/10" }),
          e.jsx(O, { label: t("avgSleep"), thisWeek: n, lastWeek: h, unit: "/10" }),
          e.jsx(O, { label: t("avgAdherence"), thisWeek: d, lastWeek: g, unit: "/10" }),
        ],
      }),
    ],
  });
}
function we() {
  return e.jsxs("div", {
    className: "mx-auto max-w-3xl space-y-5 px-4 py-6",
    children: [
      e.jsxs("div", {
        className: "space-y-1",
        children: [e.jsx(k, { className: "h-7 w-40" }), e.jsx(k, { className: "h-4 w-56" })],
      }),
      e.jsx(k, { className: "h-10 w-full rounded-lg" }),
      e.jsx("div", {
        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
        children: [0, 1, 2, 3].map((l) => e.jsx(k, { className: "h-28 rounded-xl" }, l)),
      }),
      e.jsx(k, { className: "h-10 w-64 rounded-lg" }),
      e.jsx(k, { className: "h-72 rounded-xl" }),
    ],
  });
}
const ke = x.lazy(() =>
    re(
      () => import("./ProgressCharts-BQmmxE16.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
    ),
  ),
  Se = () =>
    e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className: "border-border bg-card shadow-card overflow-hidden rounded-xl border",
          children: [
            e.jsx("div", {
              className: "border-border bg-primary/5 h-14 animate-pulse border-b p-4",
            }),
            e.jsx("div", {
              className: "p-6",
              children: e.jsx("div", {
                className: "h-[300px] animate-pulse rounded-lg bg-neutral-100",
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid gap-3 md:grid-cols-2",
          children: [
            e.jsx("div", {
              className:
                "border-border bg-card shadow-card h-[200px] animate-pulse rounded-xl border",
            }),
            e.jsx("div", {
              className:
                "border-border bg-card shadow-card h-[200px] animate-pulse rounded-xl border",
            }),
          ],
        }),
      ],
    });
function De() {
  const { t: l, i18n: t } = j("progress"),
    r = t.language,
    [c, o] = x.useState("30"),
    [i, u] = x.useState("charts"),
    { isAuthenticated: p } = te(),
    n = T(A.checkIns.getMyCheckIns),
    h = T(A.assessments.getMyAssessment, p ? {} : "skip"),
    d = n === void 0,
    g = x.useMemo(() => (n ? [...n].reverse() : []), [n]),
    a = x.useMemo(() => {
      if (c === "all") return g;
      const s = c === "30" ? 30 : 90,
        m = new Date();
      return (m.setDate(m.getDate() - s), g.filter((v) => new Date(v._creationTime) >= m));
    }, [g, c]),
    P = x.useMemo(
      () =>
        a
          .filter((s) => s.weight)
          .map((s) => ({
            date: S(new Date(s._creationTime).toISOString(), r),
            weight: s.weight ?? null,
          })),
      [a, r],
    ),
    y = x.useMemo(
      () =>
        a
          .filter((s) => s.measurements)
          .map((s) => {
            const m = s.measurements;
            return {
              date: S(new Date(s._creationTime).toISOString(), r),
              chest: m.chest,
              waist: m.waist,
              hips: m.hips,
              arms: m.arms,
              thighs: m.thighs,
            };
          }),
      [a, r],
    ),
    C = x.useMemo(() => {
      if (a.length === 0) return null;
      const s = new Date(a[0]._creationTime),
        m = new Date(a[a.length - 1]._creationTime);
      return { startDate: s.toISOString().split("T")[0], endDate: m.toISOString().split("T")[0] };
    }, [a]),
    G = T(A.completions.getAdherenceStats, p && C ? C : "skip"),
    X = x.useMemo(
      () =>
        a
          .filter((s) => s.sleepQuality != null || s.energyLevel != null)
          .map((s) => ({
            date: S(new Date(s._creationTime).toISOString(), r),
            sleep: s.sleepQuality ?? null,
            energy: s.energyLevel ?? null,
          })),
      [a, r],
    ),
    J = x.useMemo(
      () =>
        a
          .filter((s) => s.dietaryAdherence != null)
          .map((s) => ({
            date: S(new Date(s._creationTime).toISOString(), r),
            dietaryAdherence: s.dietaryAdherence ?? null,
          })),
      [a, r],
    ),
    Y = x.useMemo(
      () =>
        a
          .filter((s) => s.inBodyData)
          .map((s) => {
            const m = s.inBodyData;
            return {
              date: S(new Date(s._creationTime).toISOString(), r),
              bodyFat: m.bodyFatPercentage ?? null,
              leanMass: m.leanBodyMass ?? null,
              skeletalMuscle: m.skeletalMuscleMass ?? null,
            };
          }),
      [a, r],
    ),
    f = a[0],
    b = a[a.length - 1],
    F = b != null && b.weight && f != null && f.weight ? b.weight - f.weight : 0,
    Z = f != null && f.weight ? ((F / f.weight) * 100).toFixed(1) : "0",
    ee = x.useMemo(() => {
      if (!(f != null && f.weight) || !(b != null && b.weight) || f === b) return null;
      const s = (b._creationTime - f._creationTime) / (1e3 * 60 * 60 * 24);
      if (s < 7) return null;
      const m = s / 7;
      return (b.weight - f.weight) / m;
    }, [f, b]),
    _ = x.useMemo(
      () =>
        a.map((s) => {
          const m = [];
          (s.progressPhotoFront && m.push({ id: s.progressPhotoFront }),
            s.progressPhotoBack && m.push({ id: s.progressPhotoBack }),
            s.progressPhotoSide && m.push({ id: s.progressPhotoSide }),
            s.progressPhotoIds && m.push(...s.progressPhotoIds.map((w) => ({ id: w }))));
          const v = s.inBodyStorageId;
          return (v && m.push({ id: v, label: "InBody" }), m);
        }),
      [a],
    ),
    R = x.useMemo(() => _.flatMap((s) => s.map((m) => m.id)), [_]),
    M = T(A.storage.getFileUrlsBatch, R.length > 0 ? { storageIds: R } : "skip"),
    z = x.useMemo(
      () =>
        M
          ? a.flatMap((s, m) => {
              const v = B(new Date(s._creationTime).toISOString(), r);
              return _[m]
                .filter((w) => M[w.id])
                .map((w) => ({ url: M[w.id], date: v, label: w.label }));
            })
          : [],
      [a, _, M, r],
    );
  if (d) return e.jsx(we, {});
  const se = [
    { key: "charts", icon: de, label: l("charts") },
    { key: "photos", icon: U, label: l("photos") },
    { key: "history", icon: E, label: l("history") },
  ];
  return e.jsxs("div", {
    className: "mx-auto max-w-5xl space-y-5 py-4 lg:px-6 lg:py-6",
    children: [
      e.jsxs("div", {
        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", { className: "text-2xl font-bold", children: l("title") }),
              e.jsx("p", {
                className: "text-muted-foreground mt-0.5 text-sm",
                children: l("description"),
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex rounded-lg bg-neutral-100 p-1",
            children: ["30", "90", "all"].map((s) =>
              e.jsx(
                "button",
                {
                  onClick: () => o(s),
                  className: L(
                    "rounded-md px-4 py-2.5 text-xs font-semibold transition-colors",
                    c === s
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  ),
                  children: l(s === "30" ? "days30" : s === "90" ? "days90" : "all"),
                },
                s,
              ),
            ),
          }),
        ],
      }),
      e.jsx(fe, {
        firstCheckIn: f,
        latestCheckIn: b,
        weightChange: F,
        weightChangePercent: Z,
        totalCheckIns: a.length,
        rateOfChange: ee,
      }),
      e.jsx("div", {
        className: "flex rounded-xl bg-neutral-100 p-1",
        children: se.map(({ key: s, icon: m, label: v }) =>
          e.jsxs(
            "button",
            {
              onClick: () => u(s),
              className: L(
                "flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-sm font-medium transition-colors",
                i === s
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              ),
              children: [e.jsx(m, { className: "h-4 w-4" }), v],
            },
            s,
          ),
        ),
      }),
      i === "charts" &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(Ne, { checkIns: a }),
            e.jsx(x.Suspense, {
              fallback: e.jsx(Se, {}),
              children: e.jsx(ke, {
                weightChartData: P,
                measurementChartData: y,
                adherenceStats: G ?? void 0,
                wellnessChartData: X,
                adherenceChartData: J,
                bodyCompositionData: Y,
                targetWeight: h == null ? void 0 : h.targetWeight,
              }),
            }),
          ],
        }),
      i === "photos" &&
        e.jsxs("div", {
          className: "space-y-4",
          children: [e.jsx(je, { photos: z }), e.jsx(be, { photos: z })],
        }),
      i === "history" && e.jsx(ye, { checkIns: a }),
    ],
  });
}
const He = Object.freeze(
  Object.defineProperty({ __proto__: null, component: De }, Symbol.toStringTag, {
    value: "Module",
  }),
);
export { de as A, He as p };
