import { j as s } from "./index-BVud5pVb.js";
import { c as r } from "./cn-CDN07tui.js";
const h = {
  primary: { bg: "bg-primary", shadow: "shadow-[0_4px_16px_rgba(255,69,0,0.15)]" },
  nutrition: { bg: "bg-nutrition", shadow: "shadow-[0_4px_16px_rgba(16,185,129,0.15)]" },
  fitness: { bg: "bg-fitness", shadow: "shadow-[0_4px_16px_rgba(249,115,22,0.15)]" },
  streak: { bg: "bg-streak", shadow: "shadow-[0_4px_16px_rgba(245,158,11,0.15)]" },
  routine: { bg: "bg-routine", shadow: "shadow-[0_4px_16px_rgba(139,92,246,0.15)]" },
};
function b({
  icon: o,
  title: c,
  value: a,
  subtitle: i,
  trend: t,
  featureColor: x = "primary",
  children: d,
  className: m,
  onClick: e,
}) {
  const l = e ? "button" : "div",
    n = h[x];
  return s.jsxs(l, {
    onClick: e,
    className: r(
      "border-border bg-card shadow-card rounded-xl border p-4 text-start transition-all duration-200",
      "hover:shadow-lifted",
      e && "cursor-pointer active:scale-[0.97]",
      m,
    ),
    children: [
      s.jsxs("div", {
        className: "flex items-start justify-between",
        children: [
          s.jsxs("div", {
            className: "min-w-0 flex-1",
            children: [
              s.jsx("p", {
                className: "text-muted-foreground truncate text-xs font-medium",
                children: c,
              }),
              a !== void 0 &&
                s.jsx("p", { className: "mt-1 text-3xl font-bold tracking-tight", children: a }),
              i && s.jsx("p", { className: "text-muted-foreground mt-0.5 text-xs", children: i }),
              t &&
                s.jsxs("p", {
                  className: r(
                    "mt-1 text-xs font-medium",
                    t.direction === "neutral" && "text-muted-foreground",
                  ),
                  style:
                    t.direction === "up"
                      ? { color: "var(--color-success-600)" }
                      : t.direction === "down"
                        ? { color: "var(--color-error-500)" }
                        : void 0,
                  children: [t.direction === "up" && "↑ ", t.direction === "down" && "↓ ", t.label],
                }),
            ],
          }),
          o &&
            s.jsx("div", {
              className: r(
                "ms-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                n.bg,
                n.shadow,
              ),
              children: s.jsx(o, { className: "h-5 w-5 text-white" }),
            }),
        ],
      }),
      d && s.jsx("div", { className: "mt-3", children: d }),
    ],
  });
}
export { b as W };
