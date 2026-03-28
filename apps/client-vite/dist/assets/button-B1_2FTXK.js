import { r as l, j as p, R as V } from "./index-BVud5pVb.js";
import { a as _, c as E } from "./cn-CDN07tui.js";
function b(e, r) {
  if (typeof e == "function") return e(r);
  e != null && (e.current = r);
}
function C(...e) {
  return (r) => {
    let t = !1;
    const s = e.map((n) => {
      const o = b(n, r);
      return (!t && typeof o == "function" && (t = !0), o);
    });
    if (t)
      return () => {
        for (let n = 0; n < s.length; n++) {
          const o = s[n];
          typeof o == "function" ? o() : b(e[n], null);
        }
      };
  };
}
function H(...e) {
  return l.useCallback(C(...e), e);
}
var N = Symbol.for("react.lazy"),
  m = V[" use ".trim().toString()];
function R(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function w(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === N &&
    "_payload" in e &&
    R(e._payload)
  );
}
function k(e) {
  const r = O(e),
    t = l.forwardRef((s, n) => {
      let { children: o, ...u } = s;
      w(o) && typeof m == "function" && (o = m(o._payload));
      const a = l.Children.toArray(o),
        d = a.find(z);
      if (d) {
        const i = d.props.children,
          c = a.map((f) =>
            f === d
              ? l.Children.count(i) > 1
                ? l.Children.only(null)
                : l.isValidElement(i)
                  ? i.props.children
                  : null
              : f,
          );
        return p.jsx(r, {
          ...u,
          ref: n,
          children: l.isValidElement(i) ? l.cloneElement(i, void 0, c) : null,
        });
      }
      return p.jsx(r, { ...u, ref: n, children: o });
    });
  return ((t.displayName = `${e}.Slot`), t);
}
var A = k("Slot");
function O(e) {
  const r = l.forwardRef((t, s) => {
    let { children: n, ...o } = t;
    if ((w(n) && typeof m == "function" && (n = m(n._payload)), l.isValidElement(n))) {
      const u = W(n),
        a = F(o, n.props);
      return (n.type !== l.Fragment && (a.ref = s ? C(s, u) : u), l.cloneElement(n, a));
    }
    return l.Children.count(n) > 1 ? l.Children.only(null) : null;
  });
  return ((r.displayName = `${e}.SlotClone`), r);
}
var P = Symbol("radix.slottable");
function z(e) {
  return (
    l.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === P
  );
}
function F(e, r) {
  const t = { ...r };
  for (const s in r) {
    const n = e[s],
      o = r[s];
    /^on[A-Z]/.test(s)
      ? n && o
        ? (t[s] = (...a) => {
            const d = o(...a);
            return (n(...a), d);
          })
        : n && (t[s] = n)
      : s === "style"
        ? (t[s] = { ...n, ...o })
        : s === "className" && (t[s] = [n, o].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function W(e) {
  var s, n;
  let r = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get,
    t = r && "isReactWarning" in r && r.isReactWarning;
  return t
    ? e.ref
    : ((r = (n = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : n.get),
      (t = r && "isReactWarning" in r && r.isReactWarning),
      t ? e.props.ref : e.props.ref || e.ref);
}
const h = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  x = _,
  $ = (e, r) => (t) => {
    var s;
    if ((r == null ? void 0 : r.variants) == null)
      return x(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
    const { variants: n, defaultVariants: o } = r,
      u = Object.keys(n).map((i) => {
        const c = t == null ? void 0 : t[i],
          f = o == null ? void 0 : o[i];
        if (c === null) return null;
        const g = h(c) || h(f);
        return n[i][g];
      }),
      a =
        t &&
        Object.entries(t).reduce((i, c) => {
          let [f, g] = c;
          return (g === void 0 || (i[f] = g), i);
        }, {}),
      d =
        r == null || (s = r.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((i, c) => {
              let { class: f, className: g, ...j } = c;
              return Object.entries(j).every((S) => {
                let [v, y] = S;
                return Array.isArray(y) ? y.includes({ ...o, ...a }[v]) : { ...o, ...a }[v] === y;
              })
                ? [...i, f, g]
                : i;
            }, []);
    return x(e, u, d, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  },
  B = $(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark shadow-sm",
          destructive: "bg-error-500 text-white rounded-lg hover:bg-error-600 shadow-sm",
          outline: "border border-border bg-card text-foreground rounded-lg hover:bg-neutral-50",
          secondary: "bg-neutral-100 text-foreground rounded-lg hover:bg-neutral-200",
          ghost: "text-foreground rounded-lg hover:bg-neutral-100",
          link: "text-primary underline-offset-4 hover:underline",
          success: "bg-success-500 text-white rounded-lg hover:bg-success-600 shadow-sm",
          gradient: "text-white rounded-xl disabled:bg-primary/50",
        },
        size: {
          default: "h-11 px-5",
          sm: "h-11 px-3 text-xs rounded-md",
          lg: "h-12 px-8 text-base rounded-lg",
          icon: "h-12 w-12 rounded-lg",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  I = {
    backgroundImage: "linear-gradient(to right, #FF4500, #FF6833)",
    boxShadow: "0 4px 16px rgba(255, 69, 0, 0.3)",
  },
  T = l.forwardRef(
    (
      {
        className: e,
        variant: r,
        size: t,
        style: s,
        asChild: n = !1,
        loading: o = !1,
        children: u,
        disabled: a,
        ...d
      },
      i,
    ) => {
      const c = n ? A : "button";
      return p.jsx(c, {
        className: E(B({ variant: r, size: t, className: e })),
        ref: i,
        disabled: a || o,
        style: r === "gradient" && !(a || o) ? { ...I, ...s } : s,
        ...d,
        children: o
          ? p.jsxs(p.Fragment, {
              children: [
                p.jsxs("svg", {
                  className: "-ms-1 me-2 h-4 w-4 animate-spin",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    p.jsx("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    p.jsx("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                    }),
                  ],
                }),
                u,
              ],
            })
          : u,
      });
    },
  );
T.displayName = "Button";
export { T as B, k as a, $ as b, C as c, H as u };
