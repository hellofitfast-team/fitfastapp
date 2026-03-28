import { c as d } from "./createLucideIcon-CflinLEd.js";
import { j as e, r as l } from "./index-BVud5pVb.js";
import { c as t } from "./cn-CDN07tui.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i = [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ],
  f = d("upload", i);
function h({ label: o, error: r, optional: s, optionalLabel: a, children: n, className: c }) {
  return e.jsxs("div", {
    className: t("space-y-1.5", c),
    children: [
      e.jsxs("label", {
        className: "block text-sm font-medium",
        children: [
          o,
          s &&
            e.jsxs("span", {
              className: "text-muted-foreground ms-1 font-normal",
              children: ["(", a || "optional", ")"],
            }),
        ],
      }),
      n,
      r && e.jsx("p", { className: "text-error-500 text-xs", role: "alert", children: r }),
    ],
  });
}
const m = l.forwardRef(({ className: o, error: r, ...s }, a) =>
  e.jsx("textarea", {
    className: t(
      "border-input bg-card placeholder:text-muted-foreground focus:ring-ring flex min-h-[100px] w-full resize-none rounded-lg border px-3 py-3 text-sm transition-colors focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      r && "border-error-500 focus:ring-error-500",
      o,
    ),
    ref: a,
    ...s,
  }),
);
m.displayName = "Textarea";
export { h as F, m as T, f as U };
