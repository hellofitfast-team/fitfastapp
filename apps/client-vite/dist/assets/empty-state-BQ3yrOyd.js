import { j as t } from "./index-BVud5pVb.js";
import { B as a } from "./button-B1_2FTXK.js";
import { c as r } from "./cn-CDN07tui.js";
const l = {
  default: { bg: "bg-neutral-100", icon: "text-muted-foreground" },
  primary: { bg: "bg-primary/10", icon: "text-primary" },
  nutrition: { bg: "bg-nutrition/10", icon: "text-nutrition" },
  fitness: { bg: "bg-fitness/10", icon: "text-fitness" },
  routine: { bg: "bg-routine/10", icon: "text-routine" },
};
function b({ icon: s, title: o, description: i, variant: m = "default", action: e, className: c }) {
  const n = l[m];
  return t.jsxs("div", {
    className: r("border-border bg-card rounded-xl border p-10 text-center", c),
    children: [
      t.jsx("div", {
        className: r("mx-auto flex h-16 w-16 items-center justify-center rounded-2xl", n.bg),
        children: t.jsx(s, { className: r("h-8 w-8", n.icon) }),
      }),
      t.jsx("h3", { className: "mt-5 text-lg font-semibold", children: o }),
      t.jsx("p", { className: "text-muted-foreground mx-auto mt-2 max-w-sm text-sm", children: i }),
      e && t.jsx(a, { onClick: e.onClick, className: "mt-5", children: e.label }),
    ],
  });
}
export { b as E };
