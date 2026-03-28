import { j as e } from "./index-BVud5pVb.js";
import { c as r } from "./cn-CDN07tui.js";
function d({ className: a, ...s }) {
  return e.jsx("div", {
    role: "status",
    "aria-label": "Loading",
    className: r("animate-pulse rounded-lg bg-neutral-200", a),
    ...s,
  });
}
function i({ className: a, ...s }) {
  return e.jsx("div", {
    role: "status",
    "aria-label": "Loading",
    className: r("border-border bg-card rounded-xl border p-4", a),
    ...s,
    children: e.jsxs("div", {
      className: "flex items-center gap-3",
      children: [
        e.jsx("div", { className: "h-10 w-10 shrink-0 animate-pulse rounded-lg bg-neutral-200" }),
        e.jsxs("div", {
          className: "flex-1 space-y-2",
          children: [
            e.jsx("div", { className: "h-4 w-48 animate-pulse rounded bg-neutral-200" }),
            e.jsx("div", { className: "h-3 w-32 animate-pulse rounded bg-neutral-200" }),
          ],
        }),
        e.jsx("div", { className: "h-4 w-4 shrink-0 animate-pulse rounded bg-neutral-200" }),
      ],
    }),
  });
}
export { d as S, i as a };
