import { u, a as i, b as f, c as g, d as p, r as n, j as s, O as m } from "./index-BVud5pVb.js";
function j() {
  const e = u(i.profiles.getMyProfile),
    a = u(i.assessments.getMyAssessment),
    t = f(),
    { i18n: r } = g(),
    o = p(i.profiles.updateProfile),
    l = n.useRef(!1),
    [v, x] = n.useState(!1);
  if (
    (n.useEffect(() => {
      if (!(e === void 0 || a === void 0)) {
        if (e === null) {
          t({ to: "/login" });
          return;
        }
        if (e.isCoach) {
          t({ to: "/login" });
          return;
        }
        switch (e.status) {
          case "pending_approval":
            t({ to: "/pending" });
            return;
          case "expired":
            t({ to: "/expired" });
            return;
          case "inactive":
            t({ to: "/login" });
            return;
          case "active":
            a || t({ to: "/initial-assessment" });
            break;
          default:
            t({ to: "/login" });
        }
      }
    }, [e, a, t]),
    n.useEffect(() => {
      e &&
        e.language !== r.language &&
        !l.current &&
        ((l.current = !0), o({ language: r.language }));
    }, [r.language, e, o]),
    e === void 0 || a === void 0)
  )
    return s.jsx("div", {
      className: "flex min-h-dvh items-center justify-center",
      children: s.jsx("div", {
        className: "border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent",
      }),
    });
  if (!e || e.isCoach || e.status !== "active" || !a) return null;
  if (e.planEndDate) {
    const c = new Date(e.planEndDate + "T23:59:59"),
      d = new Date();
    c.getTime() - d.getTime();
  }
  return s.jsx("div", {
    className: "bg-background text-foreground flex min-h-dvh lg:h-dvh",
    children: s.jsx("div", {
      className: "flex flex-1 flex-col",
      children: s.jsx("main", {
        className: "relative z-0 flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-8",
        children: s.jsx(m, {}),
      }),
    }),
  });
}
export { j as component };
