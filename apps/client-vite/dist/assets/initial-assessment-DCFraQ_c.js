import { j as e, c as k, r as d, b as as, u as is, a as H, d as ae } from "./index-BVud5pVb.js";
import { B as ie } from "./button-B1_2FTXK.js";
import { S as v } from "./section-card-CI2ZkxEX.js";
import { c as y } from "./cn-CDN07tui.js";
import { T as Ne } from "./target-CiFs4VM2.js";
import { C as oe } from "./check-ClxIZdHW.js";
import { F as G, T as ke, U as ls } from "./textarea-_-7z4I7D.js";
import { I as F } from "./input-Bb6vjdWa.js";
import { U as ve } from "./user-Y1q6IynD.js";
import { D as os } from "./dumbbell-DitM0HwP.js";
import { W as ds } from "./wrench-BWaosezx.js";
import { C as cs } from "./calendar-PtChDace.js";
import { I as ms } from "./info-iCufOcv1.js";
import { C as we } from "./clock-4g7FCPWC.js";
import { c as $ } from "./createLucideIcon-CflinLEd.js";
import { U as us } from "./utensils-crossed-Du_1PGDJ.js";
import { R as xs } from "./ruler-BErsoevN.js";
import { X as bs } from "./x-C2ku7ZUf.js";
import { H as hs } from "./heart-Cfc7SifX.js";
import { T as ps } from "./triangle-alert-DfzczM4d.js";
import { L as fs } from "./loader-circle-BpriWBmn.js";
import { A as gs } from "./arrow-left-Bw4Tcehd.js";
import { A as Se } from "./arrow-right-CWv-e18d.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ys = [
    ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  js = $("ban", ys);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ns = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ],
  vs = $("shield-alert", Ns);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ss = [
    ["path", { d: "M11 2v2", key: "1539x4" }],
    ["path", { d: "M5 2v2", key: "1yf1q8" }],
    ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
    ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
    ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
  ],
  Es = $("stethoscope", Ss);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Is = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  ks = $("sun", Is);
function ws({ currentStep: r, totalSteps: m, stepLabels: l }) {
  return e.jsx("div", {
    className: "flex gap-1.5",
    children: Array.from({ length: m }, (a, b) => {
      const u = b + 1;
      return e.jsxs(
        "div",
        {
          className: "flex flex-1 flex-col items-center",
          children: [
            e.jsx("div", {
              className: `h-1.5 w-full rounded-full transition-colors duration-200 ${u <= r ? "bg-primary" : "bg-neutral-200"}`,
            }),
            e.jsx("span", {
              className: "text-muted-foreground mt-1.5 text-center text-[10px]",
              children: l[b],
            }),
          ],
        },
        u,
      );
    }),
  });
}
const Ts = [
    { id: "lose_fat", label: "LOSE FAT", description: "Reduce body fat while preserving muscle" },
    { id: "build_muscle", label: "BUILD MUSCLE", description: "Gain muscle mass and size" },
    {
      id: "body_recomposition",
      label: "BODY RECOMPOSITION",
      description: "Lose fat and build muscle simultaneously — best for beginners",
    },
    {
      id: "get_stronger",
      label: "GET STRONGER",
      description: "Increase strength and lifting performance",
    },
    {
      id: "improve_fitness",
      label: "IMPROVE OVERALL FITNESS",
      description: "Balanced health, energy, and body composition",
    },
  ],
  Cs = [
    { id: "improve_endurance", label: "IMPROVE ENDURANCE" },
    { id: "improve_flexibility", label: "IMPROVE FLEXIBILITY" },
    { id: "boost_energy", label: "BOOST ENERGY & RECOVERY" },
    { id: "build_habit", label: "BUILD A CONSISTENT HABIT" },
  ],
  Rs = [
    { id: "mediterranean", label: "MEDITERRANEAN" },
    { id: "middle_eastern", label: "MIDDLE EASTERN" },
    { id: "asian", label: "ASIAN CUISINE" },
    { id: "western", label: "WESTERN" },
    { id: "indian", label: "INDIAN" },
    { id: "latin", label: "LATIN" },
    { id: "mixed", label: "NO PREFERENCE" },
  ],
  As = [
    { id: "3_meals", label: "3 MEALS" },
    { id: "3_plus_snacks", label: "3 MEALS + SNACKS" },
    { id: "5_small", label: "5 SMALL MEALS" },
    { id: "flexible", label: "FLEXIBLE" },
  ],
  _s = [
    { id: "none", label: "NONE" },
    { id: "nuts", label: "NUTS" },
    { id: "dairy", label: "DAIRY" },
    { id: "eggs", label: "EGGS" },
    { id: "shellfish", label: "SHELLFISH" },
    { id: "gluten", label: "GLUTEN" },
    { id: "soy", label: "SOY" },
    { id: "fish", label: "FISH" },
    { id: "lactose", label: "LACTOSE" },
  ],
  Ms = [
    { id: "none", label: "NONE" },
    { id: "no_beef", label: "NO BEEF" },
    { id: "vegetarian", label: "VEGETARIAN" },
    { id: "vegan", label: "VEGAN" },
  ],
  Ee = [
    { id: "Mon", label: "M" },
    { id: "Tue", label: "T" },
    { id: "Wed", label: "W" },
    { id: "Thu", label: "T" },
    { id: "Fri", label: "F" },
    { id: "Sat", label: "S" },
    { id: "Sun", label: "S" },
  ],
  Os = [
    { id: "30", label: "30 MIN" },
    { id: "45", label: "45 MIN" },
    { id: "60", label: "60 MIN" },
    { id: "90", label: "90+ MIN" },
  ],
  Fs = [
    { id: "morning", label: "MORNING" },
    { id: "afternoon", label: "AFTERNOON" },
    { id: "evening", label: "EVENING" },
    { id: "varies", label: "VARIES" },
  ],
  Ps = {
    lose_fat: {
      beginner: { min: 3, max: 5, recommended: 3 },
      intermediate: { min: 3, max: 5, recommended: 4 },
      advanced: { min: 3, max: 6, recommended: 5 },
    },
    build_muscle: {
      beginner: { min: 3, max: 4, recommended: 3 },
      intermediate: { min: 3, max: 5, recommended: 4 },
      advanced: { min: 4, max: 6, recommended: 5 },
    },
    body_recomposition: {
      beginner: { min: 3, max: 4, recommended: 3 },
      intermediate: { min: 3, max: 5, recommended: 4 },
      advanced: { min: 4, max: 6, recommended: 5 },
    },
    get_stronger: {
      beginner: { min: 3, max: 4, recommended: 3 },
      intermediate: { min: 3, max: 5, recommended: 4 },
      advanced: { min: 3, max: 5, recommended: 4 },
    },
    improve_fitness: {
      beginner: { min: 3, max: 5, recommended: 3 },
      intermediate: { min: 3, max: 5, recommended: 4 },
      advanced: { min: 3, max: 6, recommended: 5 },
    },
  },
  Ds = { min: 3, max: 6, recommended: 4 };
function Te(r, m) {
  var l;
  return ((l = Ps[r]) == null ? void 0 : l[m]) ?? Ds;
}
const Ls = 5;
function Bs({
  primaryGoal: r,
  setPrimaryGoal: m,
  secondaryFocuses: l,
  setSecondaryFocuses: a,
  isLoading: b,
}) {
  const { t: u } = k("onboarding"),
    o = (i) => {
      l.includes(i) ? a(l.filter((h) => h !== i)) : l.length < 2 && a([...l, i]);
    };
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsx(v, {
        icon: Ne,
        title: u("assessment.primaryGoalTitle"),
        description: u("assessment.primaryGoalDesc"),
        variant: "fitness",
        children: e.jsx("div", {
          className: "space-y-2",
          children: Ts.map((i) => {
            const h = r === i.id;
            return e.jsxs(
              "button",
              {
                type: "button",
                disabled: b,
                onClick: () => m(i.id),
                className: y(
                  "flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-start transition-all",
                  h ? "border-primary bg-primary/5" : "border-stone-200 hover:border-stone-300",
                ),
                children: [
                  e.jsx("div", {
                    className: y(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                      h ? "border-primary bg-primary" : "border-stone-300",
                    ),
                    children: h && e.jsx(oe, { className: "h-3 w-3 text-white" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: y(
                          "text-sm font-semibold tracking-wide uppercase",
                          h ? "text-primary" : "text-stone-700",
                        ),
                        children: u(`assessment.primaryGoals.${i.id}`),
                      }),
                      e.jsx("p", {
                        className: "mt-0.5 text-xs text-stone-400",
                        children: u(`assessment.primaryGoals.${i.id}_desc`),
                      }),
                    ],
                  }),
                ],
              },
              i.id,
            );
          }),
        }),
      }),
      r &&
        e.jsx(v, {
          icon: Ne,
          title: u("assessment.secondaryFocusTitle"),
          description: u("assessment.secondaryFocusDesc"),
          variant: "fitness",
          children: e.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: Cs.map((i) => {
              const h = l.includes(i.id),
                f = !h && l.length >= 2;
              return e.jsxs(
                "button",
                {
                  type: "button",
                  disabled: b || f,
                  onClick: () => o(i.id),
                  className: y(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-wide uppercase transition-all",
                    h
                      ? "border-primary bg-primary/10 text-primary"
                      : f
                        ? "cursor-not-allowed border-stone-100 bg-stone-50 text-stone-300"
                        : "border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700",
                  ),
                  children: [
                    h && e.jsx(oe, { className: "h-3 w-3" }),
                    u(`assessment.secondaryFocuses.${i.id}`),
                  ],
                },
                i.id,
              );
            }),
          }),
        }),
    ],
  });
}
const Us = ["male", "female"],
  Hs = ["beginner", "intermediate", "advanced"],
  Gs = ["full_gym", "home_basic", "home_advanced", "bodyweight", "resistance_bands"];
function $s({
  currentWeight: r,
  setCurrentWeight: m,
  height: l,
  setHeight: a,
  age: b,
  setAge: u,
  gender: o,
  setGender: i,
  activityLevel: h,
  setActivityLevel: f,
  experienceLevel: c,
  setExperienceLevel: p,
  equipment: j,
  setEquipment: x,
  isLoading: t,
}) {
  const { t: s } = k("onboarding"),
    { t: g } = k("units");
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(v, {
        icon: ve,
        title: s("assessment.basicInfo"),
        children: e.jsxs("div", {
          className: "grid gap-4 sm:grid-cols-2",
          children: [
            e.jsx(G, {
              label: s("assessment.currentWeightLabel"),
              children: e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(F, {
                    type: "number",
                    step: "0.1",
                    placeholder: "75",
                    value: r,
                    onChange: (n) => m(n.target.value),
                    disabled: t,
                  }),
                  e.jsx("span", {
                    className: "text-muted-foreground text-sm font-semibold",
                    children: g("kg"),
                  }),
                ],
              }),
            }),
            e.jsx(G, {
              label: s("assessment.heightLabel"),
              children: e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(F, {
                    type: "number",
                    placeholder: "175",
                    value: l,
                    onChange: (n) => a(n.target.value),
                    disabled: t,
                  }),
                  e.jsx("span", {
                    className: "text-muted-foreground text-sm font-semibold",
                    children: g("cm"),
                  }),
                ],
              }),
            }),
            e.jsx(G, {
              label: s("assessment.ageLabel"),
              children: e.jsx(F, {
                type: "number",
                min: 14,
                max: 80,
                placeholder: "25",
                value: b,
                onChange: (n) => u(n.target.value),
                disabled: t,
              }),
            }),
            e.jsx(G, {
              label: s("assessment.genderLabel"),
              children: e.jsx("div", {
                className: "flex gap-2",
                children: Us.map((n) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => i(n),
                      disabled: t,
                      className: y(
                        "flex-1 rounded-lg border p-2.5 text-sm font-medium transition-colors",
                        o === n
                          ? "border-fitness/30 bg-fitness/8 text-fitness"
                          : "border-border bg-card hover:bg-neutral-50",
                        t ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.97]",
                      ),
                      children: s(`assessment.genders.${n}`),
                    },
                    n,
                  ),
                ),
              }),
            }),
          ],
        }),
      }),
      e.jsxs(v, {
        icon: ve,
        title: s("assessment.activityLevelTitle"),
        children: [
          e.jsx("p", {
            className: "text-muted-foreground mb-3 text-xs",
            children: s("assessment.activityLevelDesc"),
          }),
          e.jsx("div", {
            className: "flex flex-col gap-2",
            children: [
              { id: "sedentary", emoji: "1" },
              { id: "lightly_active", emoji: "2" },
              { id: "moderately_active", emoji: "3" },
              { id: "very_active", emoji: "4" },
            ].map((n) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => f(n.id),
                  disabled: t,
                  className: y(
                    "flex items-center gap-3 rounded-lg border p-3.5 text-start transition-colors",
                    h === n.id
                      ? "border-fitness/30 bg-fitness/8"
                      : "border-border bg-card hover:bg-neutral-50",
                    t ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.97]",
                  ),
                  children: [
                    e.jsx("div", {
                      className: y(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                        h === n.id
                          ? "border-fitness/30 bg-fitness/12 text-fitness"
                          : "border-border text-muted-foreground bg-neutral-50",
                      ),
                      children: n.emoji,
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: y("block text-sm font-semibold", h === n.id && "text-fitness"),
                          children: s(`assessment.activityLevels.${n.id}`),
                        }),
                        e.jsx("span", {
                          className: "text-muted-foreground block text-xs",
                          children: s(`assessment.activityLevels.${n.id}_desc`),
                        }),
                      ],
                    }),
                  ],
                },
                n.id,
              ),
            ),
          }),
        ],
      }),
      e.jsx(v, {
        icon: os,
        title: s("assessment.experienceLevel"),
        variant: "fitness",
        children: e.jsx("div", {
          className: "flex flex-col gap-2",
          children: Hs.map((n) =>
            e.jsxs(
              "button",
              {
                type: "button",
                onClick: () => p(n),
                disabled: t,
                className: y(
                  "flex items-center gap-3 rounded-lg border p-3.5 text-start transition-colors",
                  c === n
                    ? "border-fitness/30 bg-fitness/8"
                    : "border-border bg-card hover:bg-neutral-50",
                  t ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.97]",
                ),
                children: [
                  e.jsx("div", {
                    className: y(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                      c === n
                        ? "border-fitness/30 bg-fitness/12 text-fitness"
                        : "border-border text-muted-foreground bg-neutral-50",
                    ),
                    children: n === "beginner" ? "1" : n === "intermediate" ? "2" : "3",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("span", {
                        className: y("block text-sm font-semibold", c === n && "text-fitness"),
                        children: s(`assessment.levels.${n}`),
                      }),
                      e.jsx("span", {
                        className: "text-muted-foreground block text-xs",
                        children: s(`assessment.levels.${n}_desc`),
                      }),
                    ],
                  }),
                ],
              },
              n,
            ),
          ),
        }),
      }),
      e.jsx(v, {
        icon: ds,
        title: s("assessment.equipmentTitle"),
        variant: "fitness",
        children: e.jsx("div", {
          className: "space-y-3",
          children: e.jsx("div", {
            className: "flex flex-col gap-2",
            children: Gs.map((n) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => x(n),
                  disabled: t,
                  className: y(
                    "flex items-center gap-3 rounded-lg border p-3.5 text-start transition-colors",
                    j === n
                      ? "border-fitness/30 bg-fitness/8"
                      : "border-border bg-card hover:bg-neutral-50",
                    t ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.97]",
                  ),
                  children: [
                    e.jsx("div", {
                      className: y(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs",
                        j === n
                          ? "border-fitness/30 bg-fitness/12 text-fitness"
                          : "border-border text-muted-foreground bg-neutral-50",
                      ),
                      children: j === n ? "✓" : "",
                    }),
                    e.jsx("span", {
                      className: y("text-sm font-medium", j === n && "text-fitness"),
                      children: s(`assessment.equipmentOptions.${n}`),
                    }),
                  ],
                },
                n,
              ),
            ),
          }),
        }),
      }),
    ],
  });
}
function qs({
  selectedDays: r,
  setSelectedDays: m,
  sessionDuration: l,
  setSessionDuration: a,
  trainingTime: b,
  setTrainingTime: u,
  primaryGoal: o,
  experienceLevel: i,
  isLoading: h,
}) {
  const { t: f } = k("onboarding"),
    c = Te(o, i);
  d.useEffect(() => {
    r.length > c.max && m(r.slice(0, c.max));
  }, [c.max, r, m]);
  const p = (t) => {
      r.includes(t) ? m(r.filter((s) => s !== t)) : r.length < c.max && m([...r, t]);
    },
    j = r.length >= c.max,
    x = r.length < c.min;
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsx(v, {
        icon: cs,
        title: f("assessment.scheduleTitle"),
        description: f("assessment.scheduleDesc"),
        variant: "routine",
        children: e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsxs("div", {
              className:
                "bg-primary/5 border-primary/10 flex items-start gap-2 rounded-lg border px-3 py-2.5",
              children: [
                e.jsx(ms, { className: "text-primary mt-0.5 h-4 w-4 shrink-0" }),
                e.jsx("p", {
                  className: "text-xs text-stone-600",
                  children: f("assessment.scheduleHint", {
                    min: c.min,
                    max: c.max,
                    recommended: c.recommended,
                  }),
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex gap-1.5",
              children: Ee.map((t) => {
                const s = r.includes(t.id),
                  g = h || (!s && j);
                return e.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => p(t.id),
                    disabled: g,
                    className: y(
                      "flex h-12 flex-1 items-center justify-center rounded-lg text-sm font-semibold transition-all",
                      s
                        ? "bg-primary text-white"
                        : g
                          ? "cursor-not-allowed bg-neutral-50 text-stone-300"
                          : "text-muted-foreground cursor-pointer bg-neutral-100 hover:bg-neutral-200 active:scale-[0.97]",
                    ),
                    children: t.label,
                  },
                  t.id,
                );
              }),
            }),
            e.jsx("div", {
              className: "text-muted-foreground flex justify-between px-1 text-[10px]",
              children: Ee.map((t) =>
                e.jsx("span", { children: f(`assessment.days.${t.id}`) }, t.id),
              ),
            }),
            e.jsx("p", {
              className: y(
                "text-center text-xs font-medium",
                x && r.length > 0 ? "text-amber-600" : j ? "text-stone-400" : "text-stone-500",
              ),
              children: f("assessment.daysSelected", { count: r.length, min: c.min, max: c.max }),
            }),
          ],
        }),
      }),
      e.jsx(v, {
        icon: we,
        title: f("assessment.sessionDurationTitle"),
        description: f("assessment.sessionDurationDesc"),
        variant: "routine",
        children: e.jsx("div", {
          className: "grid grid-cols-4 gap-2",
          children: Os.map((t) => {
            const s = l === t.id;
            return e.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(t.id),
                disabled: h,
                className: y(
                  "flex items-center justify-center rounded-xl border-2 px-3 py-3 text-xs font-semibold tracking-wide uppercase transition-all",
                  s
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-stone-200 text-stone-500 hover:border-stone-300",
                ),
                children: f(`assessment.sessionDurations.${t.id}`),
              },
              t.id,
            );
          }),
        }),
      }),
      e.jsx(v, {
        icon: ks,
        title: f("assessment.trainingTimeTitle"),
        description: f("assessment.trainingTimeDesc"),
        variant: "routine",
        children: e.jsx("div", {
          className: "grid grid-cols-2 gap-2",
          children: Fs.map((t) => {
            const s = b === t.id;
            return e.jsx(
              "button",
              {
                type: "button",
                onClick: () => u(s ? "" : t.id),
                disabled: h,
                className: y(
                  "flex items-center justify-center rounded-xl border-2 px-3 py-3 text-xs font-semibold tracking-wide uppercase transition-all",
                  s
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-stone-200 text-stone-500 hover:border-stone-300",
                ),
                children: f(`assessment.trainingTimes.${t.id}`),
              },
              t.id,
            );
          }),
        }),
      }),
    ],
  });
}
const Vs = {
  primary: {
    selected: "border-[#FF4500]/30 bg-[#FF4500]/8 text-[#FF4500]",
    check: "text-[#FF4500]",
  },
  nutrition: {
    selected: "border-[#10B981]/30 bg-[#10B981]/8 text-[#10B981]",
    check: "text-[#10B981]",
  },
  fitness: {
    selected: "border-[#F97316]/30 bg-[#F97316]/8 text-[#F97316]",
    check: "text-[#F97316]",
  },
  streak: {
    selected: "border-[#F59E0B]/30 bg-[#F59E0B]/8 text-[#F59E0B]",
    check: "text-[#F59E0B]",
  },
  routine: {
    selected: "border-[#8B5CF6]/30 bg-[#8B5CF6]/8 text-[#8B5CF6]",
    check: "text-[#8B5CF6]",
  },
};
function le({
  options: r,
  selected: m,
  onChange: l,
  otherValue: a,
  onOtherChange: b,
  disabled: u,
  hasNoneOption: o = !1,
  featureColor: i = "primary",
  otherLabel: h,
  otherPlaceholder: f,
}) {
  const c = Vs[i],
    p = (x) => {
      if (x === "none") (l(m.includes("none") ? [] : ["none"]), b(""));
      else if (x === "other") {
        const t = m.filter((s) => s !== "none");
        t.includes("other") ? (l(t.filter((s) => s !== "other")), b("")) : l([...t, "other"]);
      } else {
        const t = m.filter((s) => s !== "none");
        t.includes(x) ? l(t.filter((s) => s !== x)) : l([...t, x]);
      }
    },
    j = [...r, { id: "other", label: h ?? "Other" }];
  return e.jsxs("div", {
    className: "space-y-3",
    children: [
      e.jsx("div", {
        className: "flex flex-wrap gap-2",
        children: j.map((x) => {
          const t = m.includes(x.id),
            s = o && m.includes("none") && x.id !== "none";
          return e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => p(x.id),
              disabled: u || s,
              className: y(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium whitespace-nowrap transition-all",
                t ? c.selected : "border-border bg-card text-foreground hover:bg-neutral-50",
                u || s ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.97]",
              ),
              children: [
                t && e.jsx(oe, { className: y("h-3.5 w-3.5", c.check), strokeWidth: 3 }),
                x.label,
              ],
            },
            x.id,
          );
        }),
      }),
      m.includes("other") &&
        e.jsx("input", {
          type: "text",
          placeholder: f ?? "Please specify...",
          value: a,
          onChange: (x) => b(x.target.value),
          onKeyDown: (x) => {
            x.key === "Enter" && x.preventDefault();
          },
          disabled: u,
          className:
            "border-input bg-card placeholder:text-muted-foreground focus:ring-ring h-11 w-full rounded-lg border px-3 text-sm transition-colors focus:ring-2 focus:ring-offset-1 focus:outline-none",
        }),
    ],
  });
}
function Ys({
  selectedFoodPrefs: r,
  setSelectedFoodPrefs: m,
  foodPrefsOther: l,
  setFoodPrefsOther: a,
  mealsPerDay: b,
  setMealsPerDay: u,
  selectedAllergies: o,
  setSelectedAllergies: i,
  allergiesOther: h,
  setAllergiesOther: f,
  selectedRestrictions: c,
  setSelectedRestrictions: p,
  restrictionsOther: j,
  setRestrictionsOther: x,
  isLoading: t,
}) {
  const { t: s } = k("onboarding");
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsx(v, {
        icon: us,
        title: s("assessment.cuisineTitle"),
        description: s("assessment.cuisineDesc"),
        variant: "nutrition",
        children: e.jsx(le, {
          options: Rs.map((g) => ({ ...g, label: s(`assessment.cuisines.${g.id}`) })),
          selected: r,
          onChange: m,
          otherValue: l,
          onOtherChange: a,
          disabled: t,
          featureColor: "nutrition",
          otherLabel: s("assessment.otherOption"),
          otherPlaceholder: s("assessment.specifyPlaceholder"),
        }),
      }),
      e.jsx(v, {
        icon: we,
        title: s("assessment.mealsPerDayTitle"),
        description: s("assessment.mealsPerDayDesc"),
        variant: "nutrition",
        children: e.jsx("div", {
          className: "grid grid-cols-2 gap-2",
          children: As.map((g) => {
            const n = b === g.id;
            return e.jsx(
              "button",
              {
                type: "button",
                onClick: () => u(n ? "" : g.id),
                disabled: t,
                className: y(
                  "flex items-center justify-center rounded-xl border-2 px-3 py-3 text-xs font-semibold tracking-wide uppercase transition-all",
                  n
                    ? "border-success-500 bg-success-500/5 text-success-500"
                    : "border-stone-200 text-stone-500 hover:border-stone-300",
                ),
                children: s(`assessment.mealsPerDayOptions.${g.id}`),
              },
              g.id,
            );
          }),
        }),
      }),
      e.jsx(v, {
        icon: vs,
        title: s("assessment.allergiesTitle"),
        variant: "nutrition",
        children: e.jsx(le, {
          options: _s.map((g) => ({ ...g, label: s(`assessment.allergies.${g.id}`) })),
          selected: o,
          onChange: i,
          otherValue: h,
          onOtherChange: f,
          disabled: t,
          hasNoneOption: !0,
          featureColor: "nutrition",
          otherLabel: s("assessment.otherOption"),
          otherPlaceholder: s("assessment.specifyPlaceholder"),
        }),
      }),
      e.jsx(v, {
        icon: js,
        title: s("assessment.restrictionsTitle"),
        variant: "nutrition",
        children: e.jsx(le, {
          options: Ms.map((g) => ({ ...g, label: s(`assessment.restrictions.${g.id}`) })),
          selected: c,
          onChange: p,
          otherValue: j,
          onOtherChange: x,
          disabled: t,
          hasNoneOption: !0,
          featureColor: "nutrition",
          otherLabel: s("assessment.otherOption"),
          otherPlaceholder: s("assessment.specifyPlaceholder"),
        }),
      }),
    ],
  });
}
function Ws({ medicalNotes: r, setMedicalNotes: m, isLoading: l }) {
  const { t: a } = k("onboarding");
  return e.jsx(v, {
    icon: Es,
    title: a("assessment.medicalNotesTitle"),
    description: a("assessment.medicalNotesDescription"),
    variant: "neutral",
    children: e.jsx(ke, {
      placeholder: a("assessment.medicalNotesPlaceholder"),
      value: r,
      onChange: (b) => m(b.target.value),
      disabled: l,
      className: "min-h-[120px]",
    }),
  });
}
function zs({
  measurementMethod: r,
  setMeasurementMethod: m,
  chest: l,
  setChest: a,
  waist: b,
  setWaist: u,
  hips: o,
  setHips: i,
  arms: h,
  setArms: f,
  thighs: c,
  setThighs: p,
  inBodyFile: j,
  onInBodyFileChange: x,
  isLoading: t,
}) {
  const { t: s } = k("onboarding"),
    g = (S) => {
      (m(S), S === "inbody" ? (a(""), u(""), i(""), f(""), p("")) : x(null));
    },
    n = d.useMemo(() => (j ? URL.createObjectURL(j) : null), [j]);
  d.useEffect(
    () => () => {
      n && URL.revokeObjectURL(n);
    },
    [n],
  );
  const q = [
    { key: "chest", value: l, setter: a, label: s("assessment.chest") },
    { key: "waist", value: b, setter: u, label: s("assessment.waist") },
    { key: "hips", value: o, setter: i, label: s("assessment.hips") },
    { key: "arms", value: h, setter: f, label: s("assessment.arms") },
    { key: "thighs", value: c, setter: p, label: s("assessment.thighs") },
  ];
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsx(v, {
        icon: xs,
        title: s("assessment.measurementsTitle"),
        description: s("assessment.measurementsDesc"),
        children: e.jsxs("div", {
          className: "flex gap-2",
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: () => g("manual"),
              disabled: t,
              className: y(
                "flex-1 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all",
                r === "manual"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border text-muted-foreground hover:border-neutral-300",
              ),
              children: [
                s("assessment.manualMeasurements"),
                e.jsxs("span", {
                  className: "text-muted-foreground ms-1 text-xs font-normal",
                  children: ["(", s("assessment.recommended"), ")"],
                }),
              ],
            }),
            e.jsx("button", {
              type: "button",
              onClick: () => g("inbody"),
              disabled: t,
              className: y(
                "flex-1 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all",
                r === "inbody"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border text-muted-foreground hover:border-neutral-300",
              ),
              children: s("assessment.inBodyUpload"),
            }),
          ],
        }),
      }),
      r === "manual" &&
        e.jsx(v, {
          title: s("assessment.allInCm"),
          variant: "neutral",
          children: e.jsx("div", {
            className: "grid gap-4 sm:grid-cols-2",
            children: q.map((S) =>
              e.jsxs(
                "div",
                {
                  className: "space-y-1.5",
                  children: [
                    e.jsx("label", {
                      className: "text-muted-foreground text-sm font-medium",
                      children: S.label,
                    }),
                    e.jsx(F, {
                      type: "number",
                      step: "0.5",
                      placeholder: "0",
                      value: S.value,
                      onChange: (R) => S.setter(R.target.value),
                      disabled: t,
                    }),
                  ],
                },
                S.key,
              ),
            ),
          }),
        }),
      r === "inbody" &&
        e.jsxs(v, {
          title: s("assessment.inBodyUpload"),
          description: s("assessment.uploadInBodyDescription"),
          variant: "neutral",
          children: [
            e.jsx("p", {
              className: "text-muted-foreground mb-3 text-xs",
              children: s("assessment.manualRecommended"),
            }),
            e.jsx("input", {
              type: "file",
              id: "assessment-inbody-upload",
              accept: "image/*",
              onChange: (S) => {
                var T;
                const R = ((T = S.target.files) == null ? void 0 : T[0]) ?? null;
                (x(R), (S.target.value = ""));
              },
              className: "hidden",
              disabled: t,
            }),
            j
              ? e.jsxs("div", {
                  className: "border-border relative overflow-hidden rounded-xl border",
                  children: [
                    e.jsx("img", {
                      src: n,
                      alt: s("assessment.inBodyResult"),
                      className: "max-h-64 w-full object-contain",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => x(null),
                      "aria-label": s("assessment.removeFile"),
                      disabled: t,
                      className:
                        "bg-error-500 hover:bg-error-500/80 absolute end-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors",
                      children: e.jsx(bs, { className: "h-4 w-4" }),
                    }),
                  ],
                })
              : e.jsxs("label", {
                  htmlFor: "assessment-inbody-upload",
                  className:
                    "border-border flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-neutral-50 transition-colors hover:bg-neutral-100",
                  children: [
                    e.jsx(ls, { className: "text-muted-foreground/50 mb-3 h-8 w-8" }),
                    e.jsx("p", {
                      className: "text-sm font-semibold",
                      children: s("assessment.uploadInBody"),
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground mt-1 text-xs",
                      children: s("assessment.fileTypes", { maxFileMB: Ls }),
                    }),
                  ],
                }),
          ],
        }),
    ],
  });
}
const Xs = ["regular", "irregular", "amenorrhea", "postmenopausal", "preferNotSay"],
  Ie = {
    regular: "regular",
    irregular: "irregular",
    amenorrhea: "amenorrhea",
    postmenopausal: "postmenopausal",
    preferNotSay: "prefer_not_say",
  };
function Ks({ data: r, onChange: m, isLoading: l }) {
  const { t: a } = k("onboarding"),
    b = (o) => {
      m({ ...r, ...o });
    },
    u = (o) =>
      y(
        "rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
        o
          ? "border-fitness/30 bg-fitness/8 text-fitness"
          : "border-border bg-card hover:bg-neutral-50",
        l ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.97]",
      );
  return e.jsx(v, {
    icon: hs,
    title: a("assessment.femaleHealth.title"),
    description: a("assessment.femaleHealth.description"),
    variant: "neutral",
    children: e.jsxs("div", {
      className: "space-y-5",
      children: [
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx("label", {
              className: "text-sm font-medium",
              children: a("assessment.femaleHealth.menstrualStatus"),
            }),
            e.jsx("div", {
              className: "flex flex-wrap gap-2",
              children: Xs.map((o) =>
                e.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: l,
                    onClick: () => b({ menstrualStatus: Ie[o] }),
                    className: u(r.menstrualStatus === Ie[o]),
                    children: a(`assessment.femaleHealth.${o}`),
                  },
                  o,
                ),
              ),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx("label", {
              className: "text-sm font-medium",
              children: a("assessment.femaleHealth.pregnant"),
            }),
            e.jsx("div", {
              className: "flex gap-2",
              children: [!0, !1].map((o) =>
                e.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: l,
                    onClick: () => b({ isPregnant: o }),
                    className: u(r.isPregnant === o),
                    children: a(o ? "assessment.femaleHealth.yes" : "assessment.femaleHealth.no"),
                  },
                  String(o),
                ),
              ),
            }),
            r.isPregnant &&
              e.jsxs("div", {
                className:
                  "mt-2 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3",
                children: [
                  e.jsx(ps, { className: "mt-0.5 h-4 w-4 shrink-0 text-amber-600" }),
                  e.jsx("p", {
                    className: "text-xs text-amber-700",
                    children: a("assessment.femaleHealth.pregnancyWarning"),
                  }),
                ],
              }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx("label", {
              className: "text-sm font-medium",
              children: a("assessment.femaleHealth.breastfeeding"),
            }),
            e.jsx("div", {
              className: "flex gap-2",
              children: [!0, !1].map((o) =>
                e.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: l,
                    onClick: () => b({ isBreastfeeding: o }),
                    className: u(r.isBreastfeeding === o),
                    children: a(o ? "assessment.femaleHealth.yes" : "assessment.femaleHealth.no"),
                  },
                  String(o),
                ),
              ),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx("label", {
              className: "text-sm font-medium",
              children: a("assessment.femaleHealth.hormonalMedication"),
            }),
            e.jsx(F, {
              placeholder: a("assessment.femaleHealth.hormonalMedicationPlaceholder"),
              value: r.hormonalMedication ?? "",
              onChange: (o) => b({ hormonalMedication: o.target.value || void 0 }),
              disabled: l,
            }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-2",
          children: [
            e.jsx("label", {
              className: "text-sm font-medium",
              children: a("assessment.femaleHealth.notes"),
            }),
            e.jsx(ke, {
              placeholder: a("assessment.femaleHealth.notesPlaceholder"),
              value: r.notes ?? "",
              onChange: (o) => b({ notes: o.target.value || void 0 }),
              disabled: l,
              className: "min-h-[80px]",
            }),
          ],
        }),
      ],
    }),
  });
}
const C = 6;
function jt() {
  const { t: r, i18n: m } = k("onboarding"),
    { t: l } = k("common"),
    { t: a } = k("errors"),
    b = m.language,
    u = as(),
    o = is(H.profiles.getMyProfile),
    [i, h] = d.useState(!1),
    [f, c] = d.useState(null),
    [p, j] = d.useState(1),
    x = ae(H.assessments.submitAssessment),
    t = ae(H.profiles.updateProfile),
    s = ae(H.storage.generateUploadUrl),
    g = [
      r("assessment.steps.goals"),
      r("assessment.steps.bodyInfo"),
      r("assessment.steps.schedule"),
      r("assessment.steps.diet"),
      r("assessment.steps.measurements"),
      r("assessment.steps.medical"),
    ],
    [n, q] = d.useState(""),
    [S, R] = d.useState([]),
    [T, Ce] = d.useState(""),
    [P, Re] = d.useState(""),
    [D, Ae] = d.useState(""),
    [A, _e] = d.useState(""),
    [L, Me] = d.useState(""),
    [_, Oe] = d.useState(""),
    [V, Fe] = d.useState([]),
    [B, Pe] = d.useState(""),
    [de, De] = d.useState(""),
    [Y, Le] = d.useState(""),
    [ce, Be] = d.useState([]),
    [me, Ue] = d.useState(""),
    [ue, He] = d.useState([]),
    [xe, Ge] = d.useState(""),
    [be, $e] = d.useState([]),
    [he, qe] = d.useState(""),
    [W, Ve] = d.useState(""),
    [M, Ye] = d.useState("manual"),
    [z, We] = d.useState(""),
    [X, ze] = d.useState(""),
    [K, Xe] = d.useState(""),
    [Q, Ke] = d.useState(""),
    [Z, Qe] = d.useState(""),
    [O, Ze] = d.useState(null),
    [J, Je] = d.useState(""),
    [ee, pe] = d.useState({}),
    se = (E, N) => {
      const I = E.filter((w) => w !== "other" && w !== "none");
      return (E.includes("other") && N.trim() && I.push(N.trim()), I);
    },
    fe = (E) => {
      switch (E) {
        case 1:
          return n ? null : a("goalRequired");
        case 2: {
          if (!T || !P) return a("weightHeightRequired");
          if (!D || !A) return a("ageGenderRequired");
          const N = parseFloat(String(T)),
            I = parseFloat(String(P)),
            w = parseFloat(String(D));
          return isNaN(N) || N < 30 || N > 300
            ? a("weightOutOfRange")
            : isNaN(I) || I < 100 || I > 250
              ? a("heightOutOfRange")
              : isNaN(w) || w < 13 || w > 120
                ? a("ageOutOfRange")
                : L
                  ? _
                    ? W
                      ? null
                      : a("equipmentRequired")
                    : a("experienceLevelRequired")
                  : a("activityLevelRequired");
        }
        case 3: {
          const N = Te(n, _);
          return V.length < N.min
            ? a("workoutDaysMin", { min: N.min })
            : B
              ? null
              : a("sessionDurationRequired");
        }
        case 4:
          return null;
        case 5:
          return M === "inbody" && !O ? a("inBodyFileRequired") : null;
        case 6:
          return null;
        default:
          return null;
      }
    },
    te = d.useRef(!1),
    es = () => {
      const E = fe(p);
      if (E) {
        c(E);
        return;
      }
      (c(null),
        p < C &&
          (p + 1 === C &&
            ((te.current = !0),
            setTimeout(() => {
              te.current = !1;
            }, 300)),
          j(p + 1)));
    },
    ss = () => {
      (c(null), p > 1 && j(p - 1));
    },
    ts = async (E) => {
      if ((E.preventDefault(), !(p < C) && !te.current)) {
        for (let N = 1; N <= C; N++) {
          const I = fe(N);
          if (I) {
            (j(N), c(I));
            return;
          }
        }
        if (!o) {
          c(a("signInRequired"));
          return;
        }
        (h(!0), c(null));
        try {
          const N = [n, ...S],
            I = se(ce, me),
            w = se(ue, xe),
            ge = se(be, he),
            ye = W,
            rs = b === "ar" ? "ar" : "en";
          let je;
          if (M === "inbody" && O) {
            const re = await s({}),
              ne = await fetch(re, {
                method: "POST",
                headers: { "Content-Type": O.type },
                body: O,
              });
            if (!ne.ok) throw new Error(`Failed to upload InBody file (${ne.status})`);
            const U = await ne.json().catch(() => null);
            if (!(U != null && U.storageId))
              throw new Error("Upload succeeded but no storageId returned");
            je = U.storageId;
          }
          const ns =
            M === "manual"
              ? {
                  chest: z ? parseFloat(z) : void 0,
                  waist: X ? parseFloat(X) : void 0,
                  hips: K ? parseFloat(K) : void 0,
                  arms: Q ? parseFloat(Q) : void 0,
                  thighs: Z ? parseFloat(Z) : void 0,
                }
              : {};
          await x({
            goals: N.join(", "),
            currentWeight: parseFloat(T),
            height: parseFloat(P),
            age: parseInt(D),
            gender: A,
            activityLevel: L || void 0,
            experienceLevel: _,
            scheduleAvailability: {
              days: V,
              sessionDuration: B ? parseInt(B) : void 0,
              preferredTime: de || void 0,
            },
            foodPreferences: I.length > 0 ? I : void 0,
            allergies: w.length > 0 ? w : void 0,
            dietaryRestrictions: ge.length > 0 ? ge : void 0,
            medicalConditions: J ? [J] : void 0,
            exerciseHistory: ye,
            measurements: ns,
            measurementMethod: M,
            inBodyStorageId: je,
            femaleHealth: A === "female" && Object.keys(ee).length > 0 ? ee : void 0,
            lifestyleHabits: { equipment: ye, mealsPerDay: Y ? parseInt(Y) : void 0 },
            generatePlans: { language: rs },
          });
          try {
            await t({});
          } catch (re) {
            console.error("Error updating profile:", re);
          }
          u({ to: "/" });
        } catch (N) {
          (console.error("Assessment error:", N), c(a("unexpectedError")));
        } finally {
          h(!1);
        }
      }
    };
  return o === void 0
    ? e.jsx("div", {
        className: "flex items-center justify-center py-12",
        children: e.jsxs("div", {
          className: "flex flex-col items-center gap-3",
          children: [
            e.jsx(fs, { className: "text-primary h-8 w-8 animate-spin" }),
            e.jsx("p", { className: "text-muted-foreground text-sm", children: l("loading") }),
          ],
        }),
      })
    : e.jsxs("div", {
        className: "relative mx-auto max-w-3xl space-y-6 pb-12",
        children: [
          i &&
            e.jsx("div", {
              className:
                "bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm",
              children: e.jsxs("div", {
                className: "flex flex-col items-center gap-4 px-6 text-center",
                children: [
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx("div", {
                        className: "border-primary/20 h-16 w-16 rounded-full border-4",
                      }),
                      e.jsx("div", {
                        className:
                          "border-primary absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-t-transparent",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      e.jsx("p", {
                        className: "text-lg font-semibold",
                        children: r("assessment.submitting"),
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground max-w-xs text-sm",
                        children: r("assessment.generatingDescription"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          e.jsxs("div", {
            className: "text-center",
            children: [
              e.jsx("h1", {
                className: "text-3xl font-bold tracking-tight",
                children: r("assessment.title"),
              }),
              e.jsx("p", {
                className: "text-muted-foreground mt-2 text-sm",
                children: r("assessment.subtitle"),
              }),
            ],
          }),
          e.jsx(ws, { currentStep: p, totalSteps: C, stepLabels: g }),
          e.jsxs("form", {
            onSubmit: ts,
            className: "space-y-6",
            children: [
              f &&
                e.jsx("div", {
                  className: "border-error-500/30 bg-error-500/10 rounded-lg border p-4",
                  children: e.jsx("p", {
                    className: "text-error-500 text-sm font-medium",
                    children: f,
                  }),
                }),
              e.jsxs("div", {
                className: "touch-pan-y",
                children: [
                  p === 1 &&
                    e.jsx("div", {
                      style: { animation: "fadeIn 0.2s ease-out" },
                      children: e.jsx(Bs, {
                        primaryGoal: n,
                        setPrimaryGoal: q,
                        secondaryFocuses: S,
                        setSecondaryFocuses: R,
                        isLoading: i,
                      }),
                    }),
                  p === 2 &&
                    e.jsx("div", {
                      style: { animation: "fadeIn 0.2s ease-out" },
                      children: e.jsx($s, {
                        currentWeight: T,
                        setCurrentWeight: Ce,
                        height: P,
                        setHeight: Re,
                        age: D,
                        setAge: Ae,
                        gender: A,
                        setGender: (E) => {
                          (_e(E), E !== "female" && pe({}));
                        },
                        activityLevel: L,
                        setActivityLevel: Me,
                        experienceLevel: _,
                        setExperienceLevel: Oe,
                        equipment: W,
                        setEquipment: Ve,
                        isLoading: i,
                      }),
                    }),
                  p === 3 &&
                    e.jsx("div", {
                      style: { animation: "fadeIn 0.2s ease-out" },
                      children: e.jsx(qs, {
                        selectedDays: V,
                        setSelectedDays: Fe,
                        sessionDuration: B,
                        setSessionDuration: Pe,
                        trainingTime: de,
                        setTrainingTime: De,
                        primaryGoal: n,
                        experienceLevel: _,
                        isLoading: i,
                      }),
                    }),
                  p === 4 &&
                    e.jsx("div", {
                      style: { animation: "fadeIn 0.2s ease-out" },
                      children: e.jsx(Ys, {
                        selectedFoodPrefs: ce,
                        setSelectedFoodPrefs: Be,
                        foodPrefsOther: me,
                        setFoodPrefsOther: Ue,
                        mealsPerDay: Y,
                        setMealsPerDay: Le,
                        selectedAllergies: ue,
                        setSelectedAllergies: He,
                        allergiesOther: xe,
                        setAllergiesOther: Ge,
                        selectedRestrictions: be,
                        setSelectedRestrictions: $e,
                        restrictionsOther: he,
                        setRestrictionsOther: qe,
                        isLoading: i,
                      }),
                    }),
                  p === 5 &&
                    e.jsx("div", {
                      style: { animation: "fadeIn 0.2s ease-out" },
                      children: e.jsx(zs, {
                        measurementMethod: M,
                        setMeasurementMethod: Ye,
                        chest: z,
                        setChest: We,
                        waist: X,
                        setWaist: ze,
                        hips: K,
                        setHips: Xe,
                        arms: Q,
                        setArms: Ke,
                        thighs: Z,
                        setThighs: Qe,
                        inBodyFile: O,
                        onInBodyFileChange: Ze,
                        isLoading: i,
                      }),
                    }),
                  p === 6 &&
                    e.jsxs("div", {
                      className: "space-y-4",
                      style: { animation: "fadeIn 0.2s ease-out" },
                      children: [
                        A === "female" && e.jsx(Ks, { data: ee, onChange: pe, isLoading: i }),
                        e.jsx(Ws, { medicalNotes: J, setMedicalNotes: Je, isLoading: i }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                  e.jsxs(ie, {
                    type: "button",
                    variant: "outline",
                    onClick: ss,
                    disabled: p === 1 || i,
                    children: [e.jsx(gs, { className: "h-4 w-4 rtl:rotate-180" }), l("back")],
                  }),
                  p < C
                    ? e.jsxs(ie, {
                        type: "button",
                        variant: "gradient",
                        onClick: es,
                        disabled: i,
                        children: [l("next"), e.jsx(Se, { className: "h-5 w-5 rtl:rotate-180" })],
                      })
                    : e.jsxs(ie, {
                        type: "submit",
                        variant: "gradient",
                        size: "lg",
                        disabled: i,
                        loading: i,
                        children: [
                          r(i ? "assessment.submitting" : "assessment.completeAssessment"),
                          !i && e.jsx(Se, { className: "h-5 w-5 rtl:rotate-180" }),
                        ],
                      }),
                ],
              }),
            ],
          }),
        ],
      });
}
export { jt as component };
