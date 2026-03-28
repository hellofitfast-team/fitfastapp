import { c as S, d as L, a as _, r, j as e, u as O, L as R } from "./index-BVud5pVb.js";
import { S as P } from "./skeleton-eFLYgFmv.js";
import { c as j } from "./cn-CDN07tui.js";
import { t as N } from "./use-toast-aSGH-up_.js";
import { T as F } from "./target-CiFs4VM2.js";
import { L as D } from "./loader-circle-BpriWBmn.js";
import { W as G } from "./wrench-BWaosezx.js";
import { C as U } from "./calendar-PtChDace.js";
import { U as B } from "./utensils-crossed-Du_1PGDJ.js";
import { R as V } from "./ruler-BErsoevN.js";
import { H as Y } from "./heart-Cfc7SifX.js";
import { T as Q } from "./triangle-alert-DfzczM4d.js";
import { A as H } from "./arrow-left-Bw4Tcehd.js";
import "./createLucideIcon-CflinLEd.js";
const z = ["lose_fat", "build_muscle", "body_recomposition", "get_stronger", "improve_fitness"],
  X = ["sedentary", "lightly_active", "moderately_active", "very_active"],
  K = ["beginner", "intermediate", "advanced"];
function Z({ assessment: n }) {
  var g;
  const { t } = S("settings"),
    { t: m } = S("onboarding"),
    w = L(_.assessments.submitAssessment),
    s = ((g = n.goals) == null ? void 0 : g.split(",")[0]) ?? "",
    [o, b] = r.useState(s),
    [c, h] = r.useState(n.activityLevel ?? ""),
    [d, y] = r.useState(n.experienceLevel ?? ""),
    [u, p] = r.useState(!1),
    v = o !== s || c !== (n.activityLevel ?? "") || d !== (n.experienceLevel ?? ""),
    f = async () => {
      if (v) {
        p(!0);
        try {
          (await w({ goals: o, activityLevel: c, experienceLevel: d }),
            N({ title: t("assessment.saved"), variant: "success" }));
        } catch {
          N({ title: t("assessment.noChanges"), variant: "destructive" });
        }
        p(!1);
      }
    };
  return e.jsxs("div", {
    className: "border-border bg-card overflow-hidden rounded-xl border",
    children: [
      e.jsxs("div", {
        className: "border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4",
        children: [
          e.jsx(F, { className: "text-primary h-4 w-4" }),
          e.jsx("h3", { className: "text-sm font-semibold", children: t("assessment.goalsTitle") }),
        ],
      }),
      e.jsxs("div", {
        className: "space-y-4 p-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.primaryGoal"),
              }),
              e.jsx("div", {
                className: "flex flex-col gap-2",
                children: z.map((a) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => b(a),
                      className: j(
                        "rounded-lg border p-3 text-start text-sm font-medium transition-colors",
                        o === a
                          ? "border-fitness/30 bg-fitness/8 text-fitness"
                          : "border-border hover:bg-neutral-50",
                      ),
                      children: m(`assessment.primaryGoals.${a}`),
                    },
                    a,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.activityLevel"),
              }),
              e.jsx("select", {
                value: c,
                onChange: (a) => h(a.target.value),
                className:
                  "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none",
                children: X.map((a) =>
                  e.jsx("option", { value: a, children: m(`assessment.activityLevels.${a}`) }, a),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.experienceLevel"),
              }),
              e.jsx("select", {
                value: d,
                onChange: (a) => y(a.target.value),
                className:
                  "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none",
                children: K.map((a) =>
                  e.jsx("option", { value: a, children: m(`assessment.levels.${a}`) }, a),
                ),
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: f,
            disabled: !v || u,
            className:
              "bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50",
            children: u
              ? e.jsx(D, { className: "mx-auto h-4 w-4 animate-spin" })
              : t(v ? "assessment.save" : "assessment.noChanges"),
          }),
        ],
      }),
    ],
  });
}
const ee = ["full_gym", "home_basic", "home_advanced", "bodyweight", "resistance_bands"],
  se = [3, 5];
function te({ assessment: n }) {
  var f, g;
  const { t } = S("settings"),
    { t: m } = S("onboarding"),
    w = L(_.assessments.submitAssessment),
    s = ((f = n.lifestyleHabits) == null ? void 0 : f.equipment) ?? "",
    o = ((g = n.lifestyleHabits) == null ? void 0 : g.mealsPerDay) ?? 3,
    [b, c] = r.useState(s),
    [h, d] = r.useState(o),
    [y, u] = r.useState(!1),
    p = b !== s || h !== o,
    v = async () => {
      if (p) {
        u(!0);
        try {
          (await w({ lifestyleHabits: { equipment: b, mealsPerDay: h } }),
            N({ title: t("assessment.saved"), variant: "success" }));
        } catch {
          N({ title: t("assessment.noChanges"), variant: "destructive" });
        }
        u(!1);
      }
    };
  return e.jsxs("div", {
    className: "border-border bg-card overflow-hidden rounded-xl border",
    children: [
      e.jsxs("div", {
        className: "border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4",
        children: [
          e.jsx(G, { className: "text-primary h-4 w-4" }),
          e.jsx("h3", {
            className: "text-sm font-semibold",
            children: t("assessment.equipmentTitle"),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "space-y-4 p-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.equipment"),
              }),
              e.jsx("div", {
                className: "flex flex-col gap-2",
                children: ee.map((a) =>
                  e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => c(a),
                      className: j(
                        "flex items-center gap-3 rounded-lg border p-3 text-start text-sm font-medium transition-colors",
                        b === a
                          ? "border-fitness/30 bg-fitness/8 text-fitness"
                          : "border-border hover:bg-neutral-50",
                      ),
                      children: [
                        e.jsx("div", {
                          className: j(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs",
                            b === a
                              ? "border-fitness/30 bg-fitness/12 text-fitness"
                              : "border-border text-muted-foreground bg-neutral-50",
                          ),
                          children: b === a ? "✓" : "",
                        }),
                        m(`assessment.equipmentOptions.${a}`),
                      ],
                    },
                    a,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.mealsPerDay"),
              }),
              e.jsx("div", {
                className: "flex gap-2",
                children: se.map((a) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => d(a),
                      className: j(
                        "flex-1 rounded-lg border p-2.5 text-center text-sm font-medium transition-colors",
                        h === a
                          ? "border-fitness/30 bg-fitness/8 text-fitness"
                          : "border-border hover:bg-neutral-50",
                      ),
                      children: a,
                    },
                    a,
                  ),
                ),
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: v,
            disabled: !p || y,
            className:
              "bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50",
            children: y
              ? e.jsx(D, { className: "mx-auto h-4 w-4 animate-spin" })
              : t(p ? "assessment.save" : "assessment.noChanges"),
          }),
        ],
      }),
    ],
  });
}
const ae = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ne = [30, 45, 60, 90],
  re = ["morning", "afternoon", "evening", "varies"];
function ie({ assessment: n }) {
  const { t } = S("settings"),
    { t: m } = S("onboarding"),
    w = L(_.assessments.submitAssessment),
    s = n.scheduleAvailability,
    [o, b] = r.useState((s == null ? void 0 : s.days) ?? []),
    [c, h] = r.useState((s == null ? void 0 : s.sessionDuration) ?? 60),
    [d, y] = r.useState((s == null ? void 0 : s.preferredTime) ?? "varies"),
    [u, p] = r.useState(!1),
    v = (s == null ? void 0 : s.days) ?? [],
    f =
      JSON.stringify([...o].sort()) !== JSON.stringify([...v].sort()) ||
      c !== ((s == null ? void 0 : s.sessionDuration) ?? 60) ||
      d !== ((s == null ? void 0 : s.preferredTime) ?? "varies"),
    g = (i) => {
      b((l) => (l.includes(i) ? l.filter((A) => A !== i) : [...l, i]));
    },
    a = async () => {
      if (o.length === 0) {
        N({ title: "Select at least 1 training day", variant: "destructive" });
        return;
      }
      if (f) {
        p(!0);
        try {
          (await w({ scheduleAvailability: { days: o, sessionDuration: c, preferredTime: d } }),
            N({ title: t("assessment.saved"), variant: "success" }));
        } catch {
          N({ title: t("assessment.noChanges"), variant: "destructive" });
        }
        p(!1);
      }
    };
  return e.jsxs("div", {
    className: "border-border bg-card overflow-hidden rounded-xl border",
    children: [
      e.jsxs("div", {
        className: "border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4",
        children: [
          e.jsx(U, { className: "text-primary h-4 w-4" }),
          e.jsx("h3", {
            className: "text-sm font-semibold",
            children: t("assessment.scheduleTitle"),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "space-y-4 p-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.trainingDays"),
              }),
              e.jsx("div", {
                className: "flex flex-wrap gap-2",
                children: ae.map((i) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => g(i),
                      className: j(
                        "min-w-[44px] rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors",
                        o.includes(i)
                          ? "border-fitness/30 bg-fitness/8 text-fitness"
                          : "border-border hover:bg-neutral-50",
                      ),
                      children: m(`assessment.days.${i}`),
                    },
                    i,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.sessionDuration"),
              }),
              e.jsx("div", {
                className: "flex gap-2",
                children: ne.map((i) =>
                  e.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => h(i),
                      className: j(
                        "flex-1 rounded-lg border p-2.5 text-center text-xs font-medium transition-colors",
                        c === i
                          ? "border-fitness/30 bg-fitness/8 text-fitness"
                          : "border-border hover:bg-neutral-50",
                      ),
                      children: [i, " min"],
                    },
                    i,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.preferredTime"),
              }),
              e.jsx("select", {
                value: d,
                onChange: (i) => y(i.target.value),
                className:
                  "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none",
                children: re.map((i) =>
                  e.jsx("option", { value: i, children: m(`assessment.trainingTimes.${i}`) }, i),
                ),
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: a,
            disabled: !f || u || o.length === 0,
            className:
              "bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50",
            children: u
              ? e.jsx(D, { className: "mx-auto h-4 w-4 animate-spin" })
              : t(f ? "assessment.save" : "assessment.noChanges"),
          }),
        ],
      }),
    ],
  });
}
const le = ["mediterranean", "middle_eastern", "asian", "western", "indian", "latin"],
  oe = ["nuts", "dairy", "eggs", "shellfish", "gluten", "soy", "fish", "lactose"],
  ce = ["no_beef", "vegetarian", "vegan"];
function de({ assessment: n }) {
  const { t } = S("settings"),
    { t: m } = S("onboarding"),
    w = L(_.assessments.submitAssessment),
    [s, o] = r.useState(n.foodPreferences ?? []),
    [b, c] = r.useState(n.allergies ?? []),
    [h, d] = r.useState(n.dietaryRestrictions ?? []),
    [y, u] = r.useState(!1),
    p = n.foodPreferences ?? [],
    v = n.allergies ?? [],
    f = n.dietaryRestrictions ?? [],
    g =
      JSON.stringify([...s].sort()) !== JSON.stringify([...p].sort()) ||
      JSON.stringify([...b].sort()) !== JSON.stringify([...v].sort()) ||
      JSON.stringify([...h].sort()) !== JSON.stringify([...f].sort()),
    a = (l, A, T) => {
      A(l.includes(T) ? l.filter((k) => k !== T) : [...l, T]);
    },
    i = async () => {
      if (g) {
        u(!0);
        try {
          (await w({ foodPreferences: s, allergies: b, dietaryRestrictions: h }),
            N({ title: t("assessment.saved"), variant: "success" }));
        } catch {
          N({ title: t("assessment.noChanges"), variant: "destructive" });
        }
        u(!1);
      }
    };
  return e.jsxs("div", {
    className: "border-border bg-card overflow-hidden rounded-xl border",
    children: [
      e.jsxs("div", {
        className: "border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4",
        children: [
          e.jsx(B, { className: "text-primary h-4 w-4" }),
          e.jsx("h3", {
            className: "text-sm font-semibold",
            children: t("assessment.dietaryTitle"),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "space-y-4 p-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.foodPreferences"),
              }),
              e.jsx("div", {
                className: "flex flex-wrap gap-2",
                children: le.map((l) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => a(s, o, l),
                      className: j(
                        "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                        s.includes(l)
                          ? "border-fitness/30 bg-fitness/8 text-fitness"
                          : "border-border hover:bg-neutral-50",
                      ),
                      children: m(`assessment.cuisines.${l}`),
                    },
                    l,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.allergies"),
              }),
              e.jsx("div", {
                className: "flex flex-wrap gap-2",
                children: oe.map((l) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => a(b, c, l),
                      className: j(
                        "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                        b.includes(l)
                          ? "border-destructive/30 bg-destructive/8 text-destructive"
                          : "border-border hover:bg-neutral-50",
                      ),
                      children: m(`assessment.allergies.${l}`),
                    },
                    l,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("label", {
                className: "mb-1.5 block text-xs font-medium",
                children: t("assessment.dietaryRestrictions"),
              }),
              e.jsx("div", {
                className: "flex flex-wrap gap-2",
                children: ce.map((l) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => a(h, d, l),
                      className: j(
                        "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                        h.includes(l)
                          ? "border-amber-500/30 bg-amber-500/8 text-amber-600"
                          : "border-border hover:bg-neutral-50",
                      ),
                      children: m(`assessment.restrictions.${l}`),
                    },
                    l,
                  ),
                ),
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: i,
            disabled: !g || y,
            className:
              "bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50",
            children: y
              ? e.jsx(D, { className: "mx-auto h-4 w-4 animate-spin" })
              : t(g ? "assessment.save" : "assessment.noChanges"),
          }),
        ],
      }),
    ],
  });
}
function me({ assessment: n }) {
  const { t } = S("settings"),
    { t: m } = S("units"),
    w = L(_.assessments.submitAssessment),
    s = n.measurements,
    [o, b] = r.useState(String(n.currentWeight ?? "")),
    [c, h] = r.useState(String(n.height ?? "")),
    [d, y] = r.useState(String(n.age ?? "")),
    [u, p] = r.useState(String((s == null ? void 0 : s.chest) ?? "")),
    [v, f] = r.useState(String((s == null ? void 0 : s.waist) ?? "")),
    [g, a] = r.useState(String((s == null ? void 0 : s.hips) ?? "")),
    [i, l] = r.useState(String((s == null ? void 0 : s.arms) ?? "")),
    [A, T] = r.useState(String((s == null ? void 0 : s.thighs) ?? "")),
    [k, M] = r.useState(!1),
    x = (C) => (C.trim() ? parseFloat(C) : void 0),
    I =
      x(o) !== n.currentWeight ||
      x(c) !== n.height ||
      x(d) !== n.age ||
      x(u) !== (s == null ? void 0 : s.chest) ||
      x(v) !== (s == null ? void 0 : s.waist) ||
      x(g) !== (s == null ? void 0 : s.hips) ||
      x(i) !== (s == null ? void 0 : s.arms) ||
      x(A) !== (s == null ? void 0 : s.thighs),
    W = async () => {
      if (I) {
        M(!0);
        try {
          (await w({
            ...(x(o) !== void 0 ? { currentWeight: x(o) } : {}),
            ...(x(c) !== void 0 ? { height: x(c) } : {}),
            ...(x(d) !== void 0 ? { age: x(d) } : {}),
            measurements: { chest: x(u), waist: x(v), hips: x(g), arms: x(i), thighs: x(A) },
            measurementMethod: "manual",
          }),
            N({ title: t("assessment.saved"), variant: "success" }));
        } catch {
          N({ title: t("assessment.noChanges"), variant: "destructive" });
        }
        M(!1);
      }
    },
    E =
      "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none";
  return e.jsxs("div", {
    className: "border-border bg-card overflow-hidden rounded-xl border",
    children: [
      e.jsxs("div", {
        className: "border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4",
        children: [
          e.jsx(V, { className: "text-primary h-4 w-4" }),
          e.jsx("h3", {
            className: "text-sm font-semibold",
            children: t("assessment.measurementsTitle"),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "space-y-4 p-4",
        children: [
          e.jsxs("div", {
            className: "grid grid-cols-3 gap-3",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsxs("label", {
                    className: "mb-1.5 block text-xs font-medium",
                    children: [t("assessment.currentWeight"), " (", m("kg"), ")"],
                  }),
                  e.jsx("input", {
                    type: "number",
                    step: "0.1",
                    value: o,
                    onChange: (C) => b(C.target.value),
                    className: E,
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs("label", {
                    className: "mb-1.5 block text-xs font-medium",
                    children: [t("assessment.height"), " (", m("cm"), ")"],
                  }),
                  e.jsx("input", {
                    type: "number",
                    value: c,
                    onChange: (C) => h(C.target.value),
                    className: E,
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "mb-1.5 block text-xs font-medium",
                    children: t("assessment.age"),
                  }),
                  e.jsx("input", {
                    type: "number",
                    min: 13,
                    max: 120,
                    value: d,
                    onChange: (C) => y(C.target.value),
                    className: E,
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "border-border border-t pt-3",
            children: [
              e.jsxs("p", {
                className: "text-muted-foreground mb-2 text-xs font-medium",
                children: ["Body Measurements (", m("cm"), ")"],
              }),
              e.jsx("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
                children: [
                  { key: "chest", value: u, set: p },
                  { key: "waist", value: v, set: f },
                  { key: "hips", value: g, set: a },
                  { key: "arms", value: i, set: l },
                  { key: "thighs", value: A, set: T },
                ].map(({ key: C, value: $, set: q }) =>
                  e.jsxs(
                    "div",
                    {
                      children: [
                        e.jsx("label", {
                          className: "mb-1 block text-xs font-medium",
                          children: t(`assessment.${C}`),
                        }),
                        e.jsx("input", {
                          type: "number",
                          step: "0.1",
                          value: $,
                          onChange: (J) => q(J.target.value),
                          className: E,
                        }),
                      ],
                    },
                    C,
                  ),
                ),
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: W,
            disabled: !I || k,
            className:
              "bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50",
            children: k
              ? e.jsx(D, { className: "mx-auto h-4 w-4 animate-spin" })
              : t(I ? "assessment.save" : "assessment.noChanges"),
          }),
        ],
      }),
    ],
  });
}
const ue = [
  { value: "regular", key: "regular" },
  { value: "irregular", key: "irregular" },
  { value: "amenorrhea", key: "amenorrhea" },
  { value: "postmenopausal", key: "postmenopausal" },
  { value: "prefer_not_say", key: "preferNotSay" },
];
function xe({ assessment: n }) {
  const { t } = S("settings"),
    { t: m } = S("onboarding"),
    w = L(_.assessments.submitAssessment),
    s = n.femaleHealth,
    [o, b] = r.useState((s == null ? void 0 : s.menstrualStatus) ?? ""),
    [c, h] = r.useState((s == null ? void 0 : s.isPregnant) ?? !1),
    [d, y] = r.useState((s == null ? void 0 : s.isBreastfeeding) ?? !1),
    [u, p] = r.useState((s == null ? void 0 : s.hormonalMedication) ?? ""),
    [v, f] = r.useState(!1),
    [g, a] = r.useState(!1),
    i =
      o !== ((s == null ? void 0 : s.menstrualStatus) ?? "") ||
      c !== ((s == null ? void 0 : s.isPregnant) ?? !1) ||
      d !== ((s == null ? void 0 : s.isBreastfeeding) ?? !1) ||
      u !== ((s == null ? void 0 : s.hormonalMedication) ?? ""),
    l = async () => {
      (f(!1), a(!0));
      try {
        (await w({
          femaleHealth: {
            menstrualStatus: o || void 0,
            isPregnant: c,
            isBreastfeeding: d,
            hormonalMedication: u || void 0,
          },
        }),
          N({ title: t("assessment.saved"), variant: "success" }));
      } catch {
        N({ title: t("assessment.noChanges"), variant: "destructive" });
      }
      a(!1);
    },
    A = () => {
      i && f(!0);
    },
    T =
      "border-input bg-card focus:ring-ring h-11 w-full rounded-lg border px-3.5 text-sm focus:ring-2 focus:outline-none";
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "border-border bg-card overflow-hidden rounded-xl border",
        children: [
          e.jsxs("div", {
            className: "border-border flex items-center gap-2 border-b bg-neutral-50/50 p-4",
            children: [
              e.jsx(Y, { className: "text-primary h-4 w-4" }),
              e.jsx("h3", {
                className: "text-sm font-semibold",
                children: t("assessment.medicalTitle"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-4 p-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "mb-1.5 block text-xs font-medium",
                    children: t("assessment.menstrualStatus"),
                  }),
                  e.jsxs("select", {
                    value: o,
                    onChange: (k) => b(k.target.value),
                    className: T,
                    children: [
                      e.jsx("option", { value: "", children: "--" }),
                      ue.map((k) =>
                        e.jsx(
                          "option",
                          { value: k.value, children: m(`assessment.femaleHealth.${k.key}`) },
                          k.value,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsx("label", {
                    className: "text-sm font-medium",
                    children: t("assessment.pregnancy"),
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => h(!c),
                    className: j(
                      "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200",
                      c ? "bg-primary" : "bg-neutral-200",
                    ),
                    role: "switch",
                    "aria-checked": c,
                    children: e.jsx("span", {
                      className: j(
                        "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200",
                        c
                          ? "translate-x-5 rtl:-translate-x-5"
                          : "translate-x-0.5 rtl:-translate-x-0.5",
                      ),
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsx("label", {
                    className: "text-sm font-medium",
                    children: t("assessment.breastfeeding"),
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => y(!d),
                    className: j(
                      "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200",
                      d ? "bg-primary" : "bg-neutral-200",
                    ),
                    role: "switch",
                    "aria-checked": d,
                    children: e.jsx("span", {
                      className: j(
                        "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200",
                        d
                          ? "translate-x-5 rtl:-translate-x-5"
                          : "translate-x-0.5 rtl:-translate-x-0.5",
                      ),
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "mb-1.5 block text-xs font-medium",
                    children: t("assessment.hormonalMedication"),
                  }),
                  e.jsx("input", {
                    type: "text",
                    value: u,
                    onChange: (k) => p(k.target.value),
                    className: T,
                  }),
                ],
              }),
              e.jsx("button", {
                type: "button",
                onClick: A,
                disabled: !i || g,
                className:
                  "bg-primary hover:bg-primary/90 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-all disabled:opacity-50",
                children: g
                  ? e.jsx(D, { className: "mx-auto h-4 w-4 animate-spin" })
                  : t(i ? "assessment.save" : "assessment.noChanges"),
              }),
            ],
          }),
        ],
      }),
      v &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
          children: e.jsx("div", {
            className: "bg-card w-full max-w-sm rounded-2xl shadow-xl",
            children: e.jsxs("div", {
              className: "space-y-3 p-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(Q, { className: "h-5 w-5 text-amber-500" }),
                    e.jsx("h3", {
                      className: "text-sm font-semibold",
                      children: t("assessment.safetyWarning"),
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground text-xs",
                  children: t("assessment.safetyWarningDesc"),
                }),
                e.jsxs("div", {
                  className: "flex gap-2 pt-1",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => f(!1),
                      className:
                        "border-border flex-1 rounded-lg border py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50",
                      children: t("assessment.cancel"),
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: l,
                      className:
                        "bg-primary hover:bg-primary/90 flex-1 rounded-lg py-2.5 text-sm font-semibold text-white transition-all",
                      children: t("assessment.confirm"),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function Te() {
  const { t: n } = S("settings"),
    t = O(_.assessments.getMyAssessment);
  if ((O(_.profiles.getMyProfile), t === void 0))
    return e.jsxs("div", {
      className: "mx-auto max-w-2xl space-y-5 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            e.jsx(P, { className: "h-9 w-9 rounded-lg" }),
            e.jsx(P, { className: "h-7 w-48" }),
          ],
        }),
        Array.from({ length: 4 }).map((w, s) =>
          e.jsx(P, { className: "h-32 w-full rounded-xl" }, s),
        ),
      ],
    });
  if (!t)
    return e.jsxs("div", {
      className: "mx-auto max-w-2xl py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs(R, {
          to: "/settings",
          className:
            "text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-1.5 text-sm transition-colors",
          children: [
            e.jsx(H, { className: "h-4 w-4 rtl:rotate-180" }),
            n("assessment.backToSettings"),
          ],
        }),
        e.jsx("p", {
          className: "text-muted-foreground py-12 text-center text-sm",
          children: "No assessment found. Please complete your initial assessment first.",
        }),
      ],
    });
  const m = t.gender;
  return e.jsxs("div", {
    className: "mx-auto max-w-2xl space-y-5 py-4 lg:px-6 lg:py-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsxs(R, {
            to: "/settings",
            className:
              "text-muted-foreground hover:text-foreground mb-2 inline-flex items-center gap-1.5 text-sm transition-colors",
            children: [
              e.jsx(H, { className: "h-4 w-4 rtl:rotate-180" }),
              n("assessment.backToSettings"),
            ],
          }),
          e.jsx("h1", { className: "text-2xl font-bold", children: n("assessment.myAssessment") }),
          e.jsx("p", {
            className: "text-muted-foreground mt-1 text-xs",
            children: n("assessment.planUpdateNote"),
          }),
        ],
      }),
      e.jsx(Z, { assessment: t }),
      e.jsx(te, { assessment: t }),
      e.jsx(ie, { assessment: t }),
      e.jsx(de, { assessment: t }),
      e.jsx(me, { assessment: t }),
      m === "female" && e.jsx(xe, { assessment: t }),
    ],
  });
}
export { Te as component };
