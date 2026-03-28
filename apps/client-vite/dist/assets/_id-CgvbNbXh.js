import {
  m as L,
  c as $,
  u as I,
  a as k,
  d as K,
  r as p,
  j as e,
  L as v,
} from "./index-BVud5pVb.js";
import { S as h } from "./skeleton-eFLYgFmv.js";
import { c as y } from "./cn-CDN07tui.js";
import { c as S, d as E } from "./format-zSzWEmcW.js";
import { t as M } from "./use-toast-aSGH-up_.js";
import { A as T } from "./arrow-left-Bw4Tcehd.js";
import { M as _ } from "./message-square-ClKQK_G-.js";
import { S as O } from "./shield-BE2ncHmf.js";
import { L as P } from "./loader-circle-BpriWBmn.js";
import { S as z } from "./send-BC_RPN8O.js";
import "./createLucideIcon-CflinLEd.js";
function A(m, a, x) {
  const n = [],
    u = new Date().toISOString().split("T")[0],
    t = new Date(Date.now() - 864e5).toISOString().split("T")[0];
  for (const d of m) {
    const l = new Date(d.timestamp).toISOString().split("T")[0],
      i = n.find((r) => r.dateKey === l);
    if (i) i.messages.push(d);
    else {
      let r;
      (l === u
        ? (r = x("tickets.chat.today"))
        : l === t
          ? (r = x("tickets.chat.yesterday"))
          : (r = new Date(l).toLocaleDateString(E(a), { month: "short", day: "numeric" })),
        n.push({ dateKey: l, label: r, messages: [d] }));
    }
  }
  return n;
}
function Z() {
  var w;
  const { id: m } = L.useParams(),
    { t: a, i18n: x } = $(),
    n = x.language,
    u = n === "ar",
    t = I(k.tickets.getTicketById, { ticketId: m }),
    d = K(k.tickets.replyToTicket),
    l = t === void 0,
    [i, r] = p.useState(""),
    [f, b] = p.useState(!1),
    j = p.useRef(null);
  p.useEffect(() => {
    var s;
    (s = j.current) == null || s.scrollIntoView({ behavior: "smooth" });
  }, [(w = t == null ? void 0 : t.messages) == null ? void 0 : w.length]);
  const N = async () => {
      if (!(!i.trim() || !t)) {
        b(!0);
        try {
          (await d({ ticketId: m, message: i.trim() }), r(""));
        } catch {
          M({ title: a("tickets.errors.replyFailed"), variant: "destructive" });
        } finally {
          b(!1);
        }
      }
    },
    D = (s) => s.replace(/_([a-z])/g, (o, c) => c.toUpperCase()),
    g = (s, o) => a(s, { defaultValue: o }),
    C = (s) => {
      switch (s) {
        case "open":
          return "bg-success-500/10 text-success-500";
        case "coach_responded":
          return "bg-warning-500/10 text-warning-500";
        case "closed":
          return "bg-neutral-100 text-muted-foreground";
        default:
          return "";
      }
    };
  if (l)
    return e.jsxs("div", {
      className: "mx-auto max-w-3xl space-y-4 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsx(h, { className: "h-10 w-32 rounded-lg" }),
        e.jsx(h, { className: "h-20 w-full rounded-xl" }),
        e.jsx(h, { className: "h-32 w-full rounded-xl" }),
      ],
    });
  if (!t)
    return e.jsxs("div", {
      className: "mx-auto max-w-3xl space-y-6 py-4 lg:px-6 lg:py-6",
      children: [
        e.jsxs(v, {
          to: "/tickets",
          className:
            "text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
          children: [e.jsx(T, { className: "h-4 w-4 rtl:rotate-180" }), a("tickets.backToTickets")],
        }),
        e.jsxs("div", {
          className: "border-border bg-card rounded-xl border p-10 text-center",
          children: [
            e.jsx(_, { className: "text-muted-foreground/40 mx-auto mb-3 h-10 w-10" }),
            e.jsx("p", { className: "font-medium", children: a("tickets.ticketNotFound") }),
          ],
        }),
      ],
    });
  const R = A(t.messages, n, (s) => g(s, s));
  return e.jsxs("div", {
    className:
      "mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl flex-col space-y-4 py-4 lg:px-6 lg:py-6",
    children: [
      e.jsxs(v, {
        to: "/tickets",
        className:
          "text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
        children: [e.jsx(T, { className: "h-4 w-4 rtl:rotate-180" }), a("tickets.backToTickets")],
      }),
      e.jsx("div", {
        className: "border-border bg-card shadow-card rounded-xl border p-4",
        children: e.jsxs("div", {
          className: "flex items-start justify-between gap-3",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", { className: "text-lg font-semibold", children: t.subject }),
                e.jsx("div", {
                  className: "mt-1 flex flex-wrap items-center gap-2",
                  children:
                    t.category &&
                    e.jsx("span", {
                      className: "text-muted-foreground text-xs",
                      children: g(`tickets.categories.${D(t.category)}`, t.category),
                    }),
                }),
              ],
            }),
            e.jsx("span", {
              className: y(
                "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                C(t.status),
              ),
              children: g(
                `tickets.status.${t.status === "coach_responded" ? "coachResponded" : t.status}`,
                t.status,
              ),
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "flex-1 space-y-1",
        children: [
          R.map((s) =>
            e.jsxs(
              "div",
              {
                children: [
                  e.jsxs("div", {
                    className: "my-4 flex items-center gap-3",
                    children: [
                      e.jsx("div", { className: "bg-border h-px flex-1" }),
                      e.jsx("span", {
                        className:
                          "text-muted-foreground rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium",
                        children: s.label,
                      }),
                      e.jsx("div", { className: "bg-border h-px flex-1" }),
                    ],
                  }),
                  s.messages.map((o, c) =>
                    o.sender === "coach"
                      ? e.jsxs(
                          "div",
                          {
                            className: "animate-slide-up mb-2 flex items-end justify-start gap-2",
                            style: { animationDelay: `${c * 30}ms` },
                            children: [
                              e.jsx("div", {
                                className:
                                  "mb-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200",
                                children: e.jsx(O, {
                                  className: "text-muted-foreground h-3.5 w-3.5",
                                }),
                              }),
                              e.jsxs("div", {
                                className: y(
                                  "text-foreground max-w-[75%] rounded-2xl bg-neutral-100 px-4 py-2.5 shadow-sm",
                                  u ? "rounded-br-sm" : "rounded-bl-sm",
                                ),
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm leading-relaxed whitespace-pre-wrap",
                                    children: o.message,
                                  }),
                                  e.jsx("p", {
                                    className: "text-muted-foreground mt-1 text-[10px]",
                                    children: S(new Date(o.timestamp), n),
                                  }),
                                ],
                              }),
                            ],
                          },
                          `${s.dateKey}-${c}`,
                        )
                      : e.jsx(
                          "div",
                          {
                            className: "animate-slide-up mb-2 flex items-end justify-end gap-2",
                            style: { animationDelay: `${c * 30}ms` },
                            children: e.jsxs("div", {
                              className: y(
                                "bg-primary text-primary-foreground max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm",
                                u ? "rounded-bl-sm" : "rounded-br-sm",
                              ),
                              children: [
                                e.jsx("p", {
                                  className: "text-sm leading-relaxed whitespace-pre-wrap",
                                  children: o.message,
                                }),
                                e.jsx("p", {
                                  className: "text-primary-foreground/70 mt-1 text-[10px]",
                                  children: S(new Date(o.timestamp), n),
                                }),
                              ],
                            }),
                          },
                          `${s.dateKey}-${c}`,
                        ),
                  ),
                ],
              },
              s.dateKey,
            ),
          ),
          e.jsx("div", { ref: j }),
        ],
      }),
      t.status !== "closed"
        ? e.jsxs("div", {
            className:
              "bg-background border-border sticky bottom-0 -mx-4 flex gap-2 border-t p-3 px-4 lg:-mx-6 lg:px-6",
            children: [
              e.jsx("textarea", {
                value: i,
                onChange: (s) => r(s.target.value),
                placeholder: a("tickets.replyPlaceholder"),
                rows: 1,
                className:
                  "border-border bg-card placeholder:text-muted-foreground focus:ring-ring flex-1 resize-none rounded-xl border px-3 py-2 text-sm transition-colors focus:ring-2 focus:outline-none",
                disabled: f,
                onKeyDown: (s) => {
                  s.key === "Enter" && !s.shiftKey && (s.preventDefault(), N());
                },
              }),
              e.jsx("button", {
                type: "button",
                onClick: N,
                disabled: f || !i.trim(),
                "aria-label": a("tickets.sendReply"),
                className:
                  "bg-primary text-primary-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all active:scale-[0.97] disabled:opacity-50",
                children: f
                  ? e.jsx(P, { className: "h-4 w-4 animate-spin" })
                  : e.jsx(z, { className: "h-4 w-4" }),
              }),
            ],
          })
        : e.jsx("div", {
            className: "border-border rounded-lg border bg-neutral-50 p-3 text-center",
            children: e.jsx("p", {
              className: "text-muted-foreground text-sm",
              children: a("tickets.ticketClosed"),
            }),
          }),
    ],
  });
}
export { Z as component };
