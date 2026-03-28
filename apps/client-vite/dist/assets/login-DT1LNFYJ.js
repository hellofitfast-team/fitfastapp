import { r as i, j as a, c as b, b as w, l as j } from "./index-BVud5pVb.js";
import { a as N, b as y, B as S } from "./button-B1_2FTXK.js";
import { I as x } from "./input-Bb6vjdWa.js";
import { c as P } from "./cn-CDN07tui.js";
var E = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  C = E.reduce((e, s) => {
    const t = N(`Primitive.${s}`),
      l = i.forwardRef((r, m) => {
        const { asChild: c, ...o } = r,
          d = c ? t : s;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          a.jsx(d, { ...o, ref: m })
        );
      });
    return ((l.displayName = `Primitive.${s}`), { ...e, [s]: l });
  }, {}),
  D = "Label",
  g = i.forwardRef((e, s) =>
    a.jsx(C.label, {
      ...e,
      ref: s,
      onMouseDown: (t) => {
        var r;
        t.target.closest("button, input, select, textarea") ||
          ((r = e.onMouseDown) == null || r.call(e, t),
          !t.defaultPrevented && t.detail > 1 && t.preventDefault());
      },
    }),
  );
g.displayName = D;
var h = g;
const L = y(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  u = i.forwardRef(({ className: e, ...s }, t) => a.jsx(h, { ref: t, className: P(L(), e), ...s }));
u.displayName = h.displayName;
function q() {
  const { t: e } = b(),
    s = w(),
    [t, l] = i.useState(""),
    [r, m] = i.useState(""),
    [c, o] = i.useState(""),
    [d, f] = i.useState(!1),
    v = async (n) => {
      (n.preventDefault(), o(""), f(!0));
      try {
        const p = await j.signIn.email({ email: t, password: r });
        p.error ? o(p.error.message ?? e("login.error")) : s({ to: "/" });
      } catch {
        o(e("login.error"));
      } finally {
        f(!1);
      }
    };
  return a.jsxs("div", {
    className: "w-full max-w-md space-y-6",
    children: [
      a.jsxs("div", {
        className: "text-center",
        children: [
          a.jsx("h1", { className: "text-2xl font-bold", children: e("login.title") }),
          a.jsx("p", { className: "text-muted-foreground mt-2", children: e("login.subtitle") }),
        ],
      }),
      a.jsxs("form", {
        onSubmit: v,
        className: "space-y-4",
        children: [
          a.jsxs("div", {
            className: "space-y-2",
            children: [
              a.jsx(u, { htmlFor: "email", children: e("login.email") }),
              a.jsx(x, {
                id: "email",
                type: "email",
                value: t,
                onChange: (n) => l(n.target.value),
                required: !0,
              }),
            ],
          }),
          a.jsxs("div", {
            className: "space-y-2",
            children: [
              a.jsx(u, { htmlFor: "password", children: e("login.password") }),
              a.jsx(x, {
                id: "password",
                type: "password",
                value: r,
                onChange: (n) => m(n.target.value),
                required: !0,
              }),
            ],
          }),
          c && a.jsx("p", { className: "text-sm text-red-500", children: c }),
          a.jsx(S, {
            type: "submit",
            className: "w-full",
            disabled: d,
            children: e(d ? "common.loading" : "login.submit"),
          }),
        ],
      }),
    ],
  });
}
export { q as component };
