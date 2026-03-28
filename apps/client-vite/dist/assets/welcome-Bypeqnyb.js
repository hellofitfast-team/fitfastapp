import { c, j as e, L as l } from "./index-BVud5pVb.js";
import { C as r, a as i } from "./card-BCjwpV6H.js";
import { B as n } from "./button-B1_2FTXK.js";
import { U as m } from "./utensils-crossed-Du_1PGDJ.js";
import { D as d } from "./dumbbell-DitM0HwP.js";
import { T as x } from "./trending-up-yKghX4cs.js";
import { M as p } from "./message-square-ClKQK_G-.js";
import { A as g } from "./arrow-right-CWv-e18d.js";
import "./cn-CDN07tui.js";
import "./createLucideIcon-CflinLEd.js";
function D() {
  const { t: s } = c("onboarding"),
    o = [
      {
        icon: m,
        title: s("welcome.features.mealPlans"),
        description: s("welcome.features.mealPlansDesc"),
        color: "text-nutrition",
        bg: "bg-nutrition/12",
      },
      {
        icon: d,
        title: s("welcome.features.workoutPlans"),
        description: s("welcome.features.workoutPlansDesc"),
        color: "text-fitness",
        bg: "bg-fitness/12",
      },
      {
        icon: x,
        title: s("welcome.features.progressTracking"),
        description: s("welcome.features.progressTrackingDesc"),
        color: "text-primary",
        bg: "bg-primary/12",
      },
      {
        icon: p,
        title: s("welcome.features.coachSupport"),
        description: s("welcome.features.coachSupportDesc"),
        color: "text-routine",
        bg: "bg-routine/12",
      },
    ];
  return e.jsxs("div", {
    className: "space-y-8",
    children: [
      e.jsxs("div", {
        className: "py-8 text-center",
        children: [
          e.jsx("div", {
            className:
              "bg-primary/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl",
            children: e.jsx("span", {
              className: "text-primary text-2xl font-bold",
              children: "FF",
            }),
          }),
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight md:text-4xl",
            children: s("welcome.title"),
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-3 text-sm",
            children: s("welcome.subtitle"),
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid gap-3 sm:grid-cols-2",
        children: o.map((t, a) =>
          e.jsx(
            r,
            {
              className: "transition-shadow hover:shadow-md",
              children: e.jsx(i, {
                className: "p-5",
                children: e.jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [
                    e.jsx("div", {
                      className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${t.bg}`,
                      children: e.jsx(t.icon, { className: `h-5 w-5 ${t.color}` }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h3", { className: "text-sm font-semibold", children: t.title }),
                        e.jsx("p", {
                          className: "text-muted-foreground mt-1 text-xs",
                          children: t.description,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            a,
          ),
        ),
      }),
      e.jsxs("div", {
        className: "space-y-4 text-center",
        children: [
          e.jsx(l, {
            to: "/initial-assessment",
            children: e.jsxs(n, {
              size: "lg",
              variant: "gradient",
              className: "px-10",
              children: [
                s("welcome.getStarted"),
                e.jsx(g, { className: "h-5 w-5 rtl:rotate-180" }),
              ],
            }),
          }),
          e.jsx("p", {
            className: "text-muted-foreground text-xs",
            children: s("welcome.completeAssessment"),
          }),
        ],
      }),
      e.jsx(r, {
        className: "bg-primary/5 border-primary/20",
        children: e.jsxs(i, {
          className: "p-6 text-center",
          children: [
            e.jsx("p", {
              className: "text-muted-foreground mb-2 text-xs",
              children: s("welcome.remember"),
            }),
            e.jsx("p", {
              className: "text-xl leading-tight font-bold",
              children: s("welcome.journeyMessage"),
            }),
          ],
        }),
      }),
    ],
  });
}
export { D as component };
