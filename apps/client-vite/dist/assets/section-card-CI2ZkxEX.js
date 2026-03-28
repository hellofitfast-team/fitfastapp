import { j as e } from "./index-BVud5pVb.js";
import { c as r } from "./cn-CDN07tui.js";
const l = {
  primary: {
    headerBg: "bg-[#FF4500]/8",
    iconContainer: "bg-[#FF4500]/12 border-[#FF4500]/20",
    iconColor: "text-[#FF4500]",
  },
  nutrition: {
    headerBg: "bg-[#10B981]/8",
    iconContainer: "bg-[#10B981]/12 border-[#10B981]/20",
    iconColor: "text-[#10B981]",
  },
  fitness: {
    headerBg: "bg-[#F97316]/8",
    iconContainer: "bg-[#F97316]/12 border-[#F97316]/20",
    iconColor: "text-[#F97316]",
  },
  streak: {
    headerBg: "bg-[#F59E0B]/8",
    iconContainer: "bg-[#F59E0B]/12 border-[#F59E0B]/20",
    iconColor: "text-[#F59E0B]",
  },
  routine: {
    headerBg: "bg-[#8B5CF6]/8",
    iconContainer: "bg-[#8B5CF6]/12 border-[#8B5CF6]/20",
    iconColor: "text-[#8B5CF6]",
  },
  neutral: {
    headerBg: "bg-neutral-50",
    iconContainer: "bg-neutral-100 border-neutral-200",
    iconColor: "text-neutral-600",
  },
};
function m({
  icon: n,
  title: s,
  description: t,
  variant: a = "primary",
  headerAction: i,
  children: d,
  className: c,
}) {
  const o = l[a];
  return e.jsxs("div", {
    className: r("border-border bg-card shadow-card overflow-hidden rounded-xl border", c),
    children: [
      e.jsxs("div", {
        className: r(
          "border-border flex items-center justify-between gap-3 border-b p-4",
          o.headerBg,
        ),
        children: [
          e.jsxs("div", {
            className: "flex min-w-0 items-center gap-3",
            children: [
              n &&
                e.jsx("div", {
                  className: r(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                    o.iconContainer,
                  ),
                  children: e.jsx(n, { className: r("h-[18px] w-[18px]", o.iconColor) }),
                }),
              e.jsxs("div", {
                className: "min-w-0",
                children: [
                  e.jsx("h2", { className: "text-sm font-semibold", children: s }),
                  t &&
                    e.jsx("p", { className: "text-muted-foreground mt-0.5 text-xs", children: t }),
                ],
              }),
            ],
          }),
          i && e.jsx("div", { className: "shrink-0", children: i }),
        ],
      }),
      e.jsx("div", { className: "p-5", children: d }),
    ],
  });
}
export { m as S };
