import { r as s, j as d } from "./index-BVud5pVb.js";
import { c as o } from "./cn-CDN07tui.js";
const t = s.forwardRef(({ className: a, ...r }, e) =>
  d.jsx("div", {
    ref: e,
    className: o("border-border bg-card text-card-foreground shadow-card rounded-xl border", a),
    ...r,
  }),
);
t.displayName = "Card";
const c = s.forwardRef(({ className: a, ...r }, e) =>
  d.jsx("div", { ref: e, className: o("flex flex-col space-y-1.5 p-5", a), ...r }),
);
c.displayName = "CardHeader";
const i = s.forwardRef(({ className: a, ...r }, e) =>
  d.jsx("h3", {
    ref: e,
    className: o("text-lg leading-none font-semibold tracking-tight", a),
    ...r,
  }),
);
i.displayName = "CardTitle";
const n = s.forwardRef(({ className: a, ...r }, e) =>
  d.jsx("p", { ref: e, className: o("text-muted-foreground text-sm", a), ...r }),
);
n.displayName = "CardDescription";
const l = s.forwardRef(({ className: a, ...r }, e) =>
  d.jsx("div", { ref: e, className: o("p-5 pt-0", a), ...r }),
);
l.displayName = "CardContent";
const m = s.forwardRef(({ className: a, ...r }, e) =>
  d.jsx("div", { ref: e, className: o("flex items-center p-5 pt-0", a), ...r }),
);
m.displayName = "CardFooter";
export { t as C, l as a };
