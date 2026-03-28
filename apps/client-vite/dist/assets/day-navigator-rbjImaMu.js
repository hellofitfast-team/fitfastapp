import { c as m } from "./createLucideIcon-CflinLEd.js";
import { u as D, a as L, r as h, c as P, j as a } from "./index-BVud5pVb.js";
import { c as N } from "./cn-CDN07tui.js";
import { d as S } from "./format-zSzWEmcW.js";
import { C as R } from "./chevron-right-BUhXz13O.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = [
    ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
    ["path", { d: "M4 7h16", key: "6tx8e3" }],
    ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
    ["path", { d: "M20 17H4", key: "h6l3hr" }],
  ],
  W = m("arrow-left-right", _);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  O = m("chevron-left", T);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $ = [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  E = m("rotate-ccw", $);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  G = m("sparkles", A);
function j() {
  return { lastParsedOffset: 0, parsedDays: new Map() };
}
function H(e, t) {
  const { lastParsedOffset: n } = t;
  if (e.length <= n) return;
  const r = /"(day\d+)"\s*:\s*\{/g;
  r.lastIndex = Math.max(0, n - 20);
  let s;
  for (; (s = r.exec(e)) !== null; ) {
    const i = s[1];
    if (t.parsedDays.has(i)) continue;
    const f = s.index + s[0].length - 1;
    let d = 1,
      o = f + 1,
      u = !1,
      l = !1;
    for (; o < e.length && d > 0; ) {
      const c = e[o];
      (l
        ? (l = !1)
        : c === "\\"
          ? (l = !0)
          : c === '"'
            ? (u = !u)
            : u || (c === "{" ? d++ : c === "}" && d--),
        o++);
    }
    if (d === 0) {
      const c = e.substring(f, o);
      try {
        const p = JSON.parse(c);
        (t.parsedDays.set(i, p), (t.lastParsedOffset = Math.max(t.lastParsedOffset, o)));
      } catch {}
    }
  }
}
function U(e) {
  const t = D(L.streamingManager.getStreamBodyPublic, e ? { streamId: e } : "skip"),
    n = h.useRef(j()),
    r = h.useRef(e);
  e !== r.current && ((n.current = j()), (r.current = e));
  const s = (t == null ? void 0 : t.text) ?? "";
  s && H(s, n.current);
  const i = h.useMemo(() => (s ? new Map(n.current.parsedDays) : new Map()), [s]);
  return {
    streamedText: s,
    status: (t == null ? void 0 : t.status) ?? "pending",
    isStreaming:
      (t == null ? void 0 : t.status) === "streaming" ||
      (t == null ? void 0 : t.status) === "pending",
    parsedDays: i,
  };
}
const q = {
  nutrition: {
    dot: "text-nutrition",
    pill: "bg-nutrition/10 text-nutrition hover:bg-nutrition/20",
  },
  fitness: { dot: "text-fitness", pill: "bg-fitness/10 text-fitness hover:bg-fitness/20" },
};
function x(e, t) {
  const [n, r, s] = e.split("-").map(Number),
    i = new Date(n, r - 1, s);
  return (i.setDate(i.getDate() + t), i);
}
function M(e, t) {
  return e.toLocaleDateString(S(t), { weekday: "short", month: "short", day: "numeric" });
}
function v(e, t) {
  return e.toLocaleDateString(S(t), { weekday: "short" });
}
function V({
  totalDays: e,
  selectedDay: t,
  onSelectDay: n,
  planStartDate: r,
  todayDayIndex: s,
  featureColor: i = "nutrition",
}) {
  const { t: f, i18n: d } = P("common"),
    o = d.language,
    u = q[i],
    l = t === s,
    c = t <= 0,
    p = t >= e - 1,
    g = x(r, t),
    C = l ? `${f("today")} · ${M(g, o)}` : M(g, o),
    b = c ? null : x(r, t - 1),
    y = p ? null : x(r, t + 1),
    k = b ? v(b, o) : "",
    w = y ? v(y, o) : "";
  return a.jsxs("div", {
    className:
      "bg-card border-border flex items-center justify-between rounded-xl border px-2 py-2 sm:p-3",
    children: [
      a.jsxs("button", {
        onClick: () => n(t - 1),
        disabled: c,
        className:
          "flex shrink-0 items-center gap-1 text-sm font-medium transition-opacity disabled:opacity-30",
        "aria-label": "Previous day",
        children: [
          a.jsx(O, { className: "h-4 w-4 rtl:rotate-180" }),
          k &&
            a.jsx("span", {
              className: "text-muted-foreground hidden text-xs sm:inline",
              children: k,
            }),
        ],
      }),
      a.jsxs("div", {
        className: "flex min-w-0 flex-1 flex-col items-center gap-1",
        children: [
          a.jsxs("span", {
            className:
              "flex max-w-full items-center gap-1 truncate text-xs font-semibold sm:gap-1.5 sm:text-sm",
            children: [l && a.jsx("span", { className: N("text-xs", u.dot), children: "●" }), C],
          }),
          !l &&
            a.jsxs("button", {
              onClick: () => n(s),
              className: N(
                "rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-colors",
                u.pill,
              ),
              children: [a.jsx(E, { className: "me-1 inline h-2.5 w-2.5" }), f("backToToday")],
            }),
        ],
      }),
      a.jsxs("button", {
        onClick: () => n(t + 1),
        disabled: p,
        className:
          "flex shrink-0 items-center gap-1 text-sm font-medium transition-opacity disabled:opacity-30",
        "aria-label": "Next day",
        children: [
          w &&
            a.jsx("span", {
              className: "text-muted-foreground hidden text-xs sm:inline",
              children: w,
            }),
          a.jsx(R, { className: "h-4 w-4 rtl:rotate-180" }),
        ],
      }),
    ],
  });
}
export { W as A, V as D, G as S, U as u };
