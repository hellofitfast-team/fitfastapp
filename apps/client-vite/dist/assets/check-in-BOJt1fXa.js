import {
  r as x,
  e as rt,
  u as ce,
  a as W,
  c as D,
  j as s,
  b as it,
  k as ot,
  d as we,
} from "./index-BVud5pVb.js";
import { a as se, u as at, F as ct } from "./index.esm-D0Yx9_aU.js";
import { o as lt, e as Se, s as J, c as C, l as q, a as ut } from "./zod-B0rGGjPA.js";
import { t as $ } from "./use-toast-aSGH-up_.js";
import { D as dt, M as me, a as ht } from "./constants-BEcy9OoF.js";
import { t as mt, d as ft } from "./format-zSzWEmcW.js";
import { c as pt } from "./createLucideIcon-CflinLEd.js";
import { C as gt } from "./calendar-PtChDace.js";
import { S as k } from "./section-card-CI2ZkxEX.js";
import { F as xt, U as Be, T as te } from "./textarea-_-7z4I7D.js";
import { I as Ne } from "./input-Bb6vjdWa.js";
import { c as ne } from "./cn-CDN07tui.js";
import { W as Fe, C as fe } from "./weight-BpUO4uB_.js";
import { X as $e } from "./x-C2ku7ZUf.js";
import { D as pe } from "./dumbbell-DitM0HwP.js";
import { U as ge } from "./utensils-crossed-Du_1PGDJ.js";
import { C as Ve } from "./clipboard-check-CSGaMZfn.js";
import { B as oe } from "./button-B1_2FTXK.js";
import { A as bt } from "./arrow-left-Bw4Tcehd.js";
import { A as vt } from "./arrow-right-CWv-e18d.js";
import { C as _t } from "./check-ClxIZdHW.js";
import { L as Le } from "./loader-circle-BpriWBmn.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yt = [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  kt = pt("lock", yt),
  It = "Left",
  jt = "Right",
  wt = "Up",
  St = "Down",
  Y = {
    delta: 10,
    preventScrollOnSwipe: !1,
    rotationAngle: 0,
    trackMouse: !1,
    trackTouch: !0,
    swipeDuration: 1 / 0,
    touchEventOptions: { passive: !0 },
  },
  le = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
  Ce = "mousemove",
  Ee = "mouseup",
  Nt = "touchend",
  Lt = "touchmove",
  Ct = "touchstart";
function Et(t, e, n, r) {
  return t > e ? (n > 0 ? jt : It) : r > 0 ? St : wt;
}
function Re(t, e) {
  if (e === 0) return t;
  const n = (Math.PI / 180) * e,
    r = t[0] * Math.cos(n) + t[1] * Math.sin(n),
    i = t[1] * Math.cos(n) - t[0] * Math.sin(n);
  return [r, i];
}
function Rt(t, e) {
  const n = (l) => {
      const a = "touches" in l;
      (a && l.touches.length > 1) ||
        t((o, m) => {
          m.trackMouse &&
            !a &&
            (document.addEventListener(Ce, r), document.addEventListener(Ee, d));
          const { clientX: y, clientY: j } = a ? l.touches[0] : l,
            v = Re([y, j], m.rotationAngle);
          return (
            m.onTouchStartOrOnMouseDown && m.onTouchStartOrOnMouseDown({ event: l }),
            Object.assign(Object.assign(Object.assign({}, o), le), {
              initial: v.slice(),
              xy: v,
              start: l.timeStamp || 0,
            })
          );
        });
    },
    r = (l) => {
      t((a, o) => {
        const m = "touches" in l;
        if (m && l.touches.length > 1) return a;
        if (l.timeStamp - a.start > o.swipeDuration)
          return a.swiping ? Object.assign(Object.assign({}, a), { swiping: !1 }) : a;
        const { clientX: y, clientY: j } = m ? l.touches[0] : l,
          [v, P] = Re([y, j], o.rotationAngle),
          _ = v - a.xy[0],
          O = P - a.xy[1],
          w = Math.abs(_),
          N = Math.abs(O),
          T = (l.timeStamp || 0) - a.start,
          p = Math.sqrt(w * w + N * N) / (T || 1),
          S = [_ / (T || 1), O / (T || 1)],
          I = Et(w, N, _, O),
          M = typeof o.delta == "number" ? o.delta : o.delta[I.toLowerCase()] || Y.delta;
        if (w < M && N < M && !a.swiping) return a;
        const A = {
          absX: w,
          absY: N,
          deltaX: _,
          deltaY: O,
          dir: I,
          event: l,
          first: a.first,
          initial: a.initial,
          velocity: p,
          vxvy: S,
        };
        (A.first && o.onSwipeStart && o.onSwipeStart(A), o.onSwiping && o.onSwiping(A));
        let z = !1;
        return (
          (o.onSwiping || o.onSwiped || o[`onSwiped${I}`]) && (z = !0),
          z && o.preventScrollOnSwipe && o.trackTouch && l.cancelable && l.preventDefault(),
          Object.assign(Object.assign({}, a), { first: !1, eventData: A, swiping: !0 })
        );
      });
    },
    i = (l) => {
      t((a, o) => {
        let m;
        if (a.swiping && a.eventData) {
          if (l.timeStamp - a.start < o.swipeDuration) {
            ((m = Object.assign(Object.assign({}, a.eventData), { event: l })),
              o.onSwiped && o.onSwiped(m));
            const y = o[`onSwiped${m.dir}`];
            y && y(m);
          }
        } else o.onTap && o.onTap({ event: l });
        return (
          o.onTouchEndOrOnMouseUp && o.onTouchEndOrOnMouseUp({ event: l }),
          Object.assign(Object.assign(Object.assign({}, a), le), { eventData: m })
        );
      });
    },
    c = () => {
      (document.removeEventListener(Ce, r), document.removeEventListener(Ee, d));
    },
    d = (l) => {
      (c(), i(l));
    },
    h = (l, a) => {
      let o = () => {};
      if (l && l.addEventListener) {
        const m = Object.assign(Object.assign({}, Y.touchEventOptions), a.touchEventOptions),
          y = [
            [Ct, n, m],
            [
              Lt,
              r,
              Object.assign(Object.assign({}, m), a.preventScrollOnSwipe ? { passive: !1 } : {}),
            ],
            [Nt, i, m],
          ];
        (y.forEach(([j, v, P]) => l.addEventListener(j, v, P)),
          (o = () => y.forEach(([j, v]) => l.removeEventListener(j, v))));
      }
      return o;
    },
    f = {
      ref: (l) => {
        l !== null &&
          t((a, o) => {
            if (a.el === l) return a;
            const m = {};
            return (
              a.el && a.el !== l && a.cleanUpTouch && (a.cleanUpTouch(), (m.cleanUpTouch = void 0)),
              o.trackTouch && l && (m.cleanUpTouch = h(l, o)),
              Object.assign(Object.assign(Object.assign({}, a), { el: l }), m)
            );
          });
      },
    };
  return (e.trackMouse && (f.onMouseDown = n), [f, h]);
}
function Ot(t, e, n, r) {
  return !e.trackTouch || !t.el
    ? (t.cleanUpTouch && t.cleanUpTouch(),
      Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))
    : t.cleanUpTouch
      ? e.preventScrollOnSwipe !== n.preventScrollOnSwipe ||
        e.touchEventOptions.passive !== n.touchEventOptions.passive
        ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: r(t.el, e) }))
        : t
      : Object.assign(Object.assign({}, t), { cleanUpTouch: r(t.el, e) });
}
function Tt(t) {
  const { trackMouse: e } = t,
    n = x.useRef(Object.assign({}, le)),
    r = x.useRef(Object.assign({}, Y)),
    i = x.useRef(Object.assign({}, r.current));
  ((i.current = Object.assign({}, r.current)),
    (r.current = Object.assign(Object.assign({}, Y), t)));
  let c;
  for (c in Y) r.current[c] === void 0 && (r.current[c] = Y[c]);
  const [d, h] = x.useMemo(
    () => Rt((b) => (n.current = b(n.current, r.current)), { trackMouse: e }),
    [e],
  );
  return ((n.current = Ot(n.current, r.current, i.current, h)), d);
}
function Mt() {
  const { isAuthenticated: t } = rt(),
    e = ce(W.checkIns.getLockStatus, t ? {} : "skip"),
    n = e != null && e.nextCheckInDate ? new Date(e.nextCheckInDate) : null;
  let r = 0;
  return (
    e != null &&
      e.isLocked &&
      n &&
      (r = Math.ceil((n.getTime() - Date.now()) / (1e3 * 60 * 60 * 24))),
    {
      isLocked: (e == null ? void 0 : e.isLocked) ?? !1,
      nextCheckInDate: n,
      daysUntilNextCheckIn: r,
      frequencyDays: (e == null ? void 0 : e.frequencyDays) ?? 10,
      isLoadingLockStatus: t && e === void 0,
    }
  );
}
const Q = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  R = globalThis,
  K = "10.38.0";
function Ye() {
  return (xe(R), R);
}
function xe(t) {
  const e = (t.__SENTRY__ = t.__SENTRY__ || {});
  return ((e.version = e.version || K), (e[K] = e[K] || {}));
}
function be(t, e, n = R) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {}),
    i = (r[K] = r[K] || {});
  return i[t] || (i[t] = e());
}
const Ut = "Sentry Logger ",
  Oe = {};
function Dt(t) {
  if (!("console" in R)) return t();
  const e = R.console,
    n = {},
    r = Object.keys(Oe);
  r.forEach((i) => {
    const c = Oe[i];
    ((n[i] = e[i]), (e[i] = c));
  });
  try {
    return t();
  } finally {
    r.forEach((i) => {
      e[i] = n[i];
    });
  }
}
function Pt() {
  _e().enabled = !0;
}
function At() {
  _e().enabled = !1;
}
function Qe() {
  return _e().enabled;
}
function Bt(...t) {
  ve("log", ...t);
}
function Ft(...t) {
  ve("warn", ...t);
}
function $t(...t) {
  ve("error", ...t);
}
function ve(t, ...e) {
  Q &&
    Qe() &&
    Dt(() => {
      R.console[t](`${Ut}[${t}]:`, ...e);
    });
}
function _e() {
  return Q ? be("loggerSettings", () => ({ enabled: !1 })) : { enabled: !1 };
}
const ee = { enable: Pt, disable: At, isEnabled: Qe, log: Bt, warn: Ft, error: $t },
  Vt = Object.prototype.toString;
function Yt(t, e) {
  return Vt.call(t) === `[object ${e}]`;
}
function Qt(t) {
  return Yt(t, "Object");
}
function Xt(t) {
  return !!(t != null && t.then && typeof t.then == "function");
}
function qt(t, e, n) {
  try {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  } catch {
    Q && ee.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
let V;
function re(t) {
  if (V !== void 0) return V ? V(t) : t();
  const e = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    n = R;
  return e in n && typeof n[e] == "function" ? ((V = n[e]), V(t)) : ((V = null), t());
}
function ue() {
  return re(() => Math.random());
}
function Gt() {
  return re(() => Date.now());
}
function Wt(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`;
}
function Kt() {
  const t = R;
  return t.crypto || t.msCrypto;
}
let ae;
function Ht() {
  return ue() * 16;
}
function H(t = Kt()) {
  try {
    if (t != null && t.randomUUID) return re(() => t.randomUUID()).replace(/-/g, "");
  } catch {}
  return (
    ae || (ae = "10000000100040008000" + 1e11),
    ae.replace(/[018]/g, (e) => (e ^ ((Ht() & 15) >> (e / 4))).toString(16))
  );
}
const Xe = 1e3;
function qe() {
  return Gt() / Xe;
}
function zt() {
  const { performance: t } = R;
  if (!(t != null && t.now) || !t.timeOrigin) return qe;
  const e = t.timeOrigin;
  return () => (e + re(() => t.now())) / Xe;
}
let Te;
function Zt() {
  return (Te ?? (Te = zt()))();
}
function Jt(t, e = {}) {
  if (
    (e.user &&
      (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
      !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)),
    (t.timestamp = e.timestamp || Zt()),
    e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : H()),
    e.init !== void 0 && (t.init = e.init),
    !t.did && e.did && (t.did = `${e.did}`),
    typeof e.started == "number" && (t.started = e.started),
    t.ignoreDuration)
  )
    t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0;
  }
  (e.release && (t.release = e.release),
    e.environment && (t.environment = e.environment),
    !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
    !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
    typeof e.errors == "number" && (t.errors = e.errors),
    e.status && (t.status = e.status));
}
function Ge(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) return e;
  if (t && Object.keys(e).length === 0) return t;
  const r = { ...t };
  for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = Ge(r[i], e[i], n - 1));
  return r;
}
function Me() {
  return H();
}
const de = "_sentrySpan";
function Ue(t, e) {
  e ? qt(t, de, e) : delete t[de];
}
function De(t) {
  return t[de];
}
const en = 100;
class U {
  constructor() {
    ((this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._attributes = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = { traceId: Me(), sampleRand: ue() }));
  }
  clone() {
    const e = new U();
    return (
      (e._breadcrumbs = [...this._breadcrumbs]),
      (e._tags = { ...this._tags }),
      (e._attributes = { ...this._attributes }),
      (e._extra = { ...this._extra }),
      (e._contexts = { ...this._contexts }),
      this._contexts.flags && (e._contexts.flags = { values: [...this._contexts.flags.values] }),
      (e._user = this._user),
      (e._level = this._level),
      (e._session = this._session),
      (e._transactionName = this._transactionName),
      (e._fingerprint = this._fingerprint),
      (e._eventProcessors = [...this._eventProcessors]),
      (e._attachments = [...this._attachments]),
      (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (e._propagationContext = { ...this._propagationContext }),
      (e._client = this._client),
      (e._lastEventId = this._lastEventId),
      (e._conversationId = this._conversationId),
      Ue(e, De(this)),
      e
    );
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    return (this._eventProcessors.push(e), this);
  }
  setUser(e) {
    return (
      (this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
      this._session && Jt(this._session, { user: e }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  setConversationId(e) {
    return ((this._conversationId = e || void 0), this._notifyScopeListeners(), this);
  }
  setTags(e) {
    return ((this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this);
  }
  setTag(e, n) {
    return this.setTags({ [e]: n });
  }
  setAttributes(e) {
    return ((this._attributes = { ...this._attributes, ...e }), this._notifyScopeListeners(), this);
  }
  setAttribute(e, n) {
    return this.setAttributes({ [e]: n });
  }
  removeAttribute(e) {
    return (
      e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()),
      this
    );
  }
  setExtras(e) {
    return ((this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this);
  }
  setExtra(e, n) {
    return ((this._extra = { ...this._extra, [e]: n }), this._notifyScopeListeners(), this);
  }
  setFingerprint(e) {
    return ((this._fingerprint = e), this._notifyScopeListeners(), this);
  }
  setLevel(e) {
    return ((this._level = e), this._notifyScopeListeners(), this);
  }
  setTransactionName(e) {
    return ((this._transactionName = e), this._notifyScopeListeners(), this);
  }
  setContext(e, n) {
    return (
      n === null ? delete this._contexts[e] : (this._contexts[e] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSession(e) {
    return (e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this);
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    const n = typeof e == "function" ? e(this) : e,
      r = n instanceof U ? n.getScopeData() : Qt(n) ? e : void 0,
      {
        tags: i,
        attributes: c,
        extra: d,
        user: h,
        contexts: b,
        level: f,
        fingerprint: l = [],
        propagationContext: a,
        conversationId: o,
      } = r || {};
    return (
      (this._tags = { ...this._tags, ...i }),
      (this._attributes = { ...this._attributes, ...c }),
      (this._extra = { ...this._extra, ...d }),
      (this._contexts = { ...this._contexts, ...b }),
      h && Object.keys(h).length && (this._user = h),
      f && (this._level = f),
      l.length && (this._fingerprint = l),
      a && (this._propagationContext = a),
      o && (this._conversationId = o),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._attributes = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._session = void 0),
      (this._conversationId = void 0),
      Ue(this, void 0),
      (this._attachments = []),
      this.setPropagationContext({ traceId: Me(), sampleRand: ue() }),
      this._notifyScopeListeners(),
      this
    );
  }
  addBreadcrumb(e, n) {
    var c;
    const r = typeof n == "number" ? n : en;
    if (r <= 0) return this;
    const i = { timestamp: qe(), ...e, message: e.message ? Wt(e.message, 2048) : e.message };
    return (
      this._breadcrumbs.push(i),
      this._breadcrumbs.length > r &&
        ((this._breadcrumbs = this._breadcrumbs.slice(-r)),
        (c = this._client) == null || c.recordDroppedEvent("buffer_overflow", "log_item")),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
  }
  addAttachment(e) {
    return (this._attachments.push(e), this);
  }
  clearAttachments() {
    return ((this._attachments = []), this);
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: De(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(e) {
    return ((this._sdkProcessingMetadata = Ge(this._sdkProcessingMetadata, e, 2)), this);
  }
  setPropagationContext(e) {
    return ((this._propagationContext = e), this);
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, n) {
    const r = (n == null ? void 0 : n.event_id) || H();
    if (!this._client)
      return (Q && ee.warn("No client configured on scope - will not capture exception!"), r);
    const i = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        e,
        { originalException: e, syntheticException: i, ...n, event_id: r },
        this,
      ),
      r
    );
  }
  captureMessage(e, n, r) {
    const i = (r == null ? void 0 : r.event_id) || H();
    if (!this._client)
      return (Q && ee.warn("No client configured on scope - will not capture message!"), i);
    const c = (r == null ? void 0 : r.syntheticException) ?? new Error(e);
    return (
      this._client.captureMessage(
        e,
        n,
        { originalException: e, syntheticException: c, ...r, event_id: i },
        this,
      ),
      i
    );
  }
  captureEvent(e, n) {
    const r = (n == null ? void 0 : n.event_id) || H();
    return this._client
      ? (this._client.captureEvent(e, { ...n, event_id: r }, this), r)
      : (Q && ee.warn("No client configured on scope - will not capture event!"), r);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((e) => {
        e(this);
      }),
      (this._notifyingListeners = !1));
  }
}
function tn() {
  return be("defaultCurrentScope", () => new U());
}
function nn() {
  return be("defaultIsolationScope", () => new U());
}
class sn {
  constructor(e, n) {
    let r;
    e ? (r = e) : (r = new U());
    let i;
    (n ? (i = n) : (i = new U()), (this._stack = [{ scope: r }]), (this._isolationScope = i));
  }
  withScope(e) {
    const n = this._pushScope();
    let r;
    try {
      r = e(n);
    } catch (i) {
      throw (this._popScope(), i);
    }
    return Xt(r)
      ? r.then(
          (i) => (this._popScope(), i),
          (i) => {
            throw (this._popScope(), i);
          },
        )
      : (this._popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e = this.getScope().clone();
    return (this._stack.push({ client: this.getClient(), scope: e }), e);
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
}
function X() {
  const t = Ye(),
    e = xe(t);
  return (e.stack = e.stack || new sn(tn(), nn()));
}
function rn(t) {
  return X().withScope(t);
}
function on(t, e) {
  const n = X();
  return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
}
function Pe(t) {
  return X().withScope(() => t(X().getIsolationScope()));
}
function an() {
  return {
    withIsolationScope: Pe,
    withScope: rn,
    withSetScope: on,
    withSetIsolationScope: (t, e) => Pe(e),
    getCurrentScope: () => X().getScope(),
    getIsolationScope: () => X().getIsolationScope(),
  };
}
function cn(t) {
  const e = xe(t);
  return e.acs ? e.acs : an();
}
function ln() {
  const t = Ye();
  return cn(t).getCurrentScope();
}
function un(t) {
  if (t) return dn(t) ? { captureContext: t } : mn(t) ? { captureContext: t } : t;
}
function dn(t) {
  return t instanceof U || typeof t == "function";
}
const hn = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
function mn(t) {
  return Object.keys(t).some((e) => hn.includes(e));
}
function fn(t, e) {
  return ln().captureException(t, un(e));
}
function pn(t) {
  return lt({
    weight: C.number()
      .positive(t("checkIn.validation.weightPositive"))
      .min(20, t("checkIn.validation.weightTooLow"))
      .max(300, t("checkIn.validation.weightTooHigh")),
    measurementMethod: Se(["manual", "inbody"]).default("manual"),
    chest: C.number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(q(0).transform(() => {})),
    waist: C.number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(q(0).transform(() => {})),
    hips: C.number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(q(0).transform(() => {})),
    arms: C.number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(q(0).transform(() => {})),
    thighs: C.number()
      .min(10, t("checkIn.validation.measurementRange"))
      .max(500, t("checkIn.validation.measurementRange"))
      .optional()
      .or(q(0).transform(() => {})),
    workoutPerformance: J().min(10, t("checkIn.validation.workoutPerformanceMin")),
    energyLevel: C.number()
      .min(1, t("checkIn.validation.ratingRange"))
      .max(10, t("checkIn.validation.ratingRange")),
    sleepQuality: C.number()
      .min(1, t("checkIn.validation.ratingRange"))
      .max(10, t("checkIn.validation.ratingRange")),
    dietaryAdherence: C.number()
      .min(1, t("checkIn.validation.ratingRange"))
      .max(10, t("checkIn.validation.ratingRange")),
    dietNotes: J().optional(),
    newInjuries: J().optional(),
    notes: J().optional(),
    cyclePhase: Se(["menstrual", "follicular", "ovulatory", "luteal", "not_tracking"]).optional(),
  });
}
function gn({ nextCheckInDate: t, daysUntilNextCheckIn: e, frequencyDays: n = dt }) {
  const { t: r, i18n: i } = D(),
    c = i.language;
  return s.jsxs("div", {
    className: "border-border bg-card shadow-card overflow-hidden rounded-xl border",
    children: [
      s.jsxs("div", {
        className: "border-border bg-primary/5 flex items-center gap-3 border-b p-4",
        children: [
          s.jsx("div", {
            className: "bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg",
            children: s.jsx(kt, { className: "text-primary h-4 w-4" }),
          }),
          s.jsx("h2", {
            className: "text-sm font-semibold",
            children: r("checkIn.checkInLocked", { defaultValue: "Check-In Locked" }),
          }),
        ],
      }),
      s.jsxs("div", {
        className: "p-8 text-center",
        children: [
          s.jsx("div", {
            className:
              "bg-primary/10 mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full",
            children: s.jsx(gt, { className: "text-primary h-8 w-8" }),
          }),
          s.jsx("h3", {
            className: "text-lg font-bold",
            children: r("checkIn.nextCheckInAvailable", {
              defaultValue: "Next Check-In Available",
            }),
          }),
          s.jsxs("p", {
            className: "text-primary mt-3 text-4xl font-bold",
            children: [mt(e, c), " ", r("checkIn.days", { defaultValue: "days" })],
          }),
          s.jsx("p", {
            className: "text-muted-foreground mt-3 text-sm",
            children: t.toLocaleDateString(ft(c), {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          }),
          s.jsx("div", {
            className: "border-border mt-6 rounded-lg border border-dashed bg-neutral-50 p-4",
            children: s.jsx("p", {
              className: "text-muted-foreground text-sm",
              children: r("checkIn.lockReason", { days: n }),
            }),
          }),
        ],
      }),
    ],
  });
}
function xn({ currentStep: t, steps: e }) {
  return s.jsxs("div", {
    className: "space-y-1.5",
    children: [
      s.jsx("div", {
        className: "flex gap-1.5",
        children: e.map((n) =>
          s.jsx(
            "div",
            {
              className: `h-1.5 flex-1 rounded-full transition-colors duration-200 ${t >= n.id ? "bg-primary" : "bg-neutral-200"}`,
            },
            n.id,
          ),
        ),
      }),
      s.jsx("div", {
        className: "flex gap-1.5",
        children: e.map((n) =>
          s.jsx(
            "p",
            {
              className: `flex-1 text-center text-[10px] font-medium ${t >= n.id ? "text-foreground" : "text-muted-foreground"}`,
              children: n.name,
            },
            n.id,
          ),
        ),
      }),
    ],
  });
}
function bn({ inBodyFile: t, onInBodyFileChange: e }) {
  const { t: n } = D(),
    {
      register: r,
      watch: i,
      setValue: c,
      formState: { errors: d },
    } = se(),
    h = i("measurementMethod"),
    b = (a) => {
      (c("measurementMethod", a),
        a === "inbody"
          ? (c("chest", void 0),
            c("waist", void 0),
            c("hips", void 0),
            c("arms", void 0),
            c("thighs", void 0))
          : e(null));
    },
    f = x.useRef(null),
    l = x.useMemo(() => {
      if ((f.current && (URL.revokeObjectURL(f.current), (f.current = null)), t)) {
        const a = URL.createObjectURL(t);
        return ((f.current = a), a);
      }
      return null;
    }, [t]);
  return (
    x.useEffect(
      () => () => {
        f.current && URL.revokeObjectURL(f.current);
      },
      [],
    ),
    s.jsxs("div", {
      className: "space-y-4",
      children: [
        s.jsxs(k, {
          icon: Fe,
          title: n("checkIn.weight"),
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                s.jsx(Ne, {
                  type: "number",
                  step: "0.1",
                  placeholder: "75.5",
                  className: "w-32 text-center text-xl font-bold",
                  ...r("weight"),
                  error: !!d.weight,
                }),
                s.jsx("span", {
                  className: "text-muted-foreground font-semibold",
                  children: n("units.kg"),
                }),
              ],
            }),
            d.weight &&
              s.jsx("p", { className: "text-error-500 mt-2 text-xs", children: d.weight.message }),
          ],
        }),
        s.jsxs("div", {
          className: "flex gap-2",
          children: [
            s.jsxs("button", {
              type: "button",
              onClick: () => b("manual"),
              className: ne(
                "flex-1 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all",
                h === "manual"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border text-muted-foreground hover:border-neutral-300",
              ),
              children: [
                n("checkIn.manualMeasurements"),
                s.jsxs("span", {
                  className: "text-muted-foreground ms-1 text-xs font-normal",
                  children: ["(", n("checkIn.recommended"), ")"],
                }),
              ],
            }),
            s.jsx("button", {
              type: "button",
              onClick: () => b("inbody"),
              className: ne(
                "flex-1 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all",
                h === "inbody"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border text-muted-foreground hover:border-neutral-300",
              ),
              children: n("checkIn.inBodyUpload"),
            }),
          ],
        }),
        h === "manual" &&
          s.jsx(k, {
            title: `${n("checkIn.measurements")} (${n("checkIn.optional")})`,
            description: `${n("checkIn.allIn")} ${n("units.cm")}`,
            variant: "neutral",
            children: s.jsx("div", {
              className: "grid gap-4 sm:grid-cols-2",
              children: [
                { key: "chest", label: n("checkIn.chest") },
                { key: "waist", label: n("checkIn.waist") },
                { key: "hips", label: n("checkIn.hips") },
                { key: "arms", label: n("checkIn.arms") },
                { key: "thighs", label: n("checkIn.thighs") },
              ].map((a) =>
                s.jsx(
                  xt,
                  {
                    label: a.label,
                    children: s.jsx(Ne, {
                      type: "number",
                      step: "0.5",
                      placeholder: "0",
                      ...r(a.key),
                    }),
                  },
                  a.key,
                ),
              ),
            }),
          }),
        h === "inbody" &&
          s.jsxs(k, {
            title: n("checkIn.inBodyUpload"),
            description: n("checkIn.uploadInBodyDescription"),
            variant: "neutral",
            children: [
              s.jsx("input", {
                type: "file",
                id: "inbody-upload",
                accept: "image/*",
                onChange: (a) => {
                  var m;
                  const o = ((m = a.target.files) == null ? void 0 : m[0]) ?? null;
                  (e(o), (a.target.value = ""));
                },
                className: "hidden",
              }),
              t
                ? s.jsxs("div", {
                    className: "border-border relative overflow-hidden rounded-xl border",
                    children: [
                      s.jsx("img", {
                        src: l,
                        alt: n("checkIn.inBodyResult"),
                        className: "max-h-64 w-full object-contain",
                      }),
                      s.jsx("button", {
                        type: "button",
                        onClick: () => e(null),
                        "aria-label": n("checkIn.removeFile"),
                        className:
                          "bg-error-500 hover:bg-error-500/80 absolute end-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors",
                        children: s.jsx($e, { className: "h-4 w-4" }),
                      }),
                    ],
                  })
                : s.jsxs("label", {
                    htmlFor: "inbody-upload",
                    className:
                      "border-border flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-neutral-50 transition-colors hover:bg-neutral-100",
                    children: [
                      s.jsx(Be, { className: "text-muted-foreground/50 mb-3 h-8 w-8" }),
                      s.jsx("p", {
                        className: "text-sm font-semibold",
                        children: n("checkIn.uploadInBody"),
                      }),
                      s.jsx("p", {
                        className: "text-muted-foreground mt-1 text-xs",
                        children: n("checkIn.fileTypes", { maxFileMB: me }),
                      }),
                    ],
                  }),
            ],
          }),
      ],
    })
  );
}
function vn(t, e) {
  return t <= 3
    ? ((e == null ? void 0 : e.low) ?? "Needs work")
    : t <= 7
      ? ((e == null ? void 0 : e.mid) ?? "Moderate")
      : ((e == null ? void 0 : e.high) ?? "Great");
}
function he({ value: t, onChange: e, max: n = 10, label: r, disabled: i, labels: c }) {
  return s.jsxs("div", {
    children: [
      r &&
        s.jsxs("div", {
          className: "mb-5 flex items-center justify-between",
          children: [
            s.jsx("label", { className: "text-sm font-medium", children: r }),
            s.jsxs("span", {
              className: "rounded-full px-2 py-0.5 text-sm font-bold",
              style: {
                backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                color: "var(--color-primary)",
              },
              children: [t, "/", n, " · ", vn(t, c)],
            }),
          ],
        }),
      s.jsx("div", {
        className: "flex gap-1.5",
        children: Array.from({ length: n }, (d, h) => h + 1).map((d) => {
          const h = t === d;
          return s.jsx(
            "button",
            {
              type: "button",
              onClick: () => e(d),
              disabled: i,
              className: ne(
                "flex h-11 flex-1 items-center justify-center rounded-lg text-xs font-semibold transition-all",
                h && "scale-110",
                i && "cursor-not-allowed opacity-50",
              ),
              style: h
                ? {
                    backgroundColor: "var(--color-primary)",
                    color: "#fff",
                    boxShadow:
                      "0 0 0 1px var(--color-background), 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent)",
                  }
                : { backgroundColor: "#f5f5f5", color: "#737373" },
              children: d,
            },
            d,
          );
        }),
      }),
    ],
  });
}
const _n = ["menstrual", "follicular", "ovulatory", "luteal", "not_tracking"];
function yn({ isFemale: t }) {
  const { t: e } = D(),
    {
      register: n,
      formState: { errors: r },
      watch: i,
      setValue: c,
    } = se(),
    d = i("energyLevel"),
    h = i("sleepQuality"),
    b = i("cyclePhase");
  return s.jsxs("div", {
    className: "space-y-4",
    children: [
      t &&
        s.jsx(k, {
          title: e("checkIn.cyclePhase"),
          description: e("checkIn.cyclePhaseDescription"),
          children: s.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: _n.map((f) => {
              const l = f === "not_tracking" ? "notTracking" : f;
              return s.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => c("cyclePhase", b === f ? void 0 : f),
                  className: ne(
                    "rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                    b === f
                      ? "border-fitness/30 bg-fitness/8 text-fitness"
                      : "border-border bg-card hover:bg-neutral-50",
                  ),
                  children: e(`checkIn.cyclePhaseOptions.${l}`),
                },
                f,
              );
            }),
          }),
        }),
      s.jsxs(k, {
        icon: pe,
        title: e("checkIn.performance"),
        variant: "fitness",
        children: [
          s.jsx(te, {
            placeholder: e("checkIn.placeholders.performance"),
            className: "min-h-[120px]",
            ...n("workoutPerformance"),
          }),
          r.workoutPerformance &&
            s.jsx("p", {
              className: "text-error-500 mt-2 text-xs",
              children: r.workoutPerformance.message,
            }),
        ],
      }),
      s.jsx(k, {
        title: e("checkIn.wellbeingMetrics"),
        variant: "fitness",
        children: s.jsxs("div", {
          className: "space-y-5",
          children: [
            s.jsx(he, {
              label: e("checkIn.energy"),
              value: d,
              onChange: (f) => c("energyLevel", f),
            }),
            s.jsx(he, {
              label: e("checkIn.sleep"),
              value: h,
              onChange: (f) => c("sleepQuality", f),
            }),
          ],
        }),
      }),
    ],
  });
}
function kn() {
  const { t } = D(),
    { register: e, watch: n, setValue: r } = se(),
    i = n("dietaryAdherence");
  return s.jsxs("div", {
    className: "space-y-4",
    children: [
      s.jsx(k, {
        icon: ge,
        title: t("checkIn.adherence"),
        variant: "nutrition",
        children: s.jsxs("div", {
          className: "space-y-4",
          children: [
            s.jsx(he, {
              label: t("checkIn.adherenceRating"),
              value: i,
              onChange: (c) => r("dietaryAdherence", c),
            }),
            s.jsx(te, {
              placeholder: t("checkIn.placeholders.dietNotes"),
              className: "min-h-[100px]",
              ...e("dietNotes"),
            }),
          ],
        }),
      }),
      s.jsx(k, {
        title: `${t("checkIn.injuries")} (${t("checkIn.optional")})`,
        variant: "neutral",
        children: s.jsx(te, {
          placeholder: t("checkIn.placeholders.injuries"),
          className: "min-h-[100px]",
          ...e("newInjuries"),
        }),
      }),
    ],
  });
}
const Ae = ["front", "back", "side"];
function In({ progressPhotos: t, onPhotoChange: e }) {
  const { t: n } = D(),
    r = x.useRef([]),
    i = x.useMemo(() => {
      for (const h of r.current) URL.revokeObjectURL(h);
      r.current = [];
      const d = {};
      for (const h of Ae)
        if (t[h]) {
          const b = URL.createObjectURL(t[h]);
          ((d[h] = b), r.current.push(b));
        } else d[h] = null;
      return d;
    }, [t]);
  x.useEffect(
    () => () => {
      for (const d of r.current) URL.revokeObjectURL(d);
    },
    [],
  );
  const c = {
    front: n("checkIn.photoFront"),
    back: n("checkIn.photoBack"),
    side: n("checkIn.photoSide"),
  };
  return s.jsx(k, {
    icon: fe,
    title: n("checkIn.photos"),
    description: `${n("checkIn.optional")} · ${n("checkIn.fileTypes", { maxFileMB: me })}`,
    children: s.jsx("div", {
      className: "grid grid-cols-3 gap-3",
      children: Ae.map((d) =>
        s.jsxs(
          "div",
          {
            className: "flex flex-col gap-2",
            children: [
              s.jsx("span", { className: "text-center text-xs font-semibold", children: c[d] }),
              s.jsx("input", {
                type: "file",
                id: `photo-${d}`,
                accept: "image/*",
                onChange: (h) => {
                  var f;
                  const b = ((f = h.target.files) == null ? void 0 : f[0]) ?? null;
                  (e(d, b), (h.target.value = ""));
                },
                className: "hidden",
              }),
              t[d]
                ? s.jsxs("div", {
                    className:
                      "border-border relative aspect-[3/4] overflow-hidden rounded-xl border",
                    children: [
                      s.jsx("img", {
                        src: i[d],
                        alt: c[d],
                        className: "h-full w-full object-cover",
                      }),
                      s.jsx("button", {
                        type: "button",
                        onClick: () => e(d, null),
                        "aria-label": `${n("checkIn.removePhoto")} ${c[d]}`,
                        className:
                          "bg-error-500 hover:bg-error-500/80 absolute end-1 top-1 flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors",
                        children: s.jsx($e, { className: "h-3.5 w-3.5" }),
                      }),
                    ],
                  })
                : s.jsxs("label", {
                    htmlFor: `photo-${d}`,
                    className:
                      "border-border flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-neutral-50 transition-colors hover:bg-neutral-100",
                    children: [
                      s.jsx(Be, { className: "text-muted-foreground/50 mb-2 h-6 w-6" }),
                      s.jsx("p", {
                        className: "text-muted-foreground text-xs",
                        children: n("checkIn.tapToUpload"),
                      }),
                    ],
                  }),
            ],
          },
          d,
        ),
      ),
    }),
  });
}
function E({ label: t, value: e }) {
  return s.jsxs("div", {
    className: "flex justify-between p-4",
    children: [
      s.jsx("span", { className: "text-muted-foreground text-sm", children: t }),
      s.jsx("span", { className: "text-sm font-semibold", children: e }),
    ],
  });
}
function jn({ progressPhotos: t, inBodyFile: e }) {
  const { t: n } = D(),
    { register: r, watch: i } = se(),
    c = i("weight"),
    d = i("measurementMethod"),
    h = i("chest"),
    b = i("waist"),
    f = i("hips"),
    l = i("arms"),
    a = i("thighs"),
    o = i("workoutPerformance"),
    m = i("energyLevel"),
    y = i("sleepQuality"),
    j = i("dietaryAdherence"),
    v = i("dietNotes"),
    P = i("newInjuries"),
    _ = x.useMemo(() => {
      const p = {};
      for (const S of ["front", "back", "side"]) p[S] = t[S] ? URL.createObjectURL(t[S]) : null;
      return p;
    }, [t]);
  x.useEffect(
    () => () => {
      for (const p of Object.values(_)) p && URL.revokeObjectURL(p);
    },
    [_],
  );
  const O = [
      { label: n("checkIn.chest"), value: h },
      { label: n("checkIn.waist"), value: b },
      { label: n("checkIn.hips"), value: f },
      { label: n("checkIn.arms"), value: l },
      { label: n("checkIn.thighs"), value: a },
    ].filter((p) => p.value && Number(p.value) > 0),
    w = (p, S) => (p ? (p.length > S ? `${p.slice(0, S)}...` : p) : n("checkIn.none")),
    N = [t.front, t.back, t.side].filter(Boolean).length,
    T = {
      front: n("checkIn.photoFront"),
      back: n("checkIn.photoBack"),
      side: n("checkIn.photoSide"),
    };
  return s.jsxs("div", {
    className: "space-y-4",
    children: [
      s.jsx(k, {
        icon: Ve,
        title: n("checkIn.reviewBody"),
        children: s.jsxs("div", {
          className: "divide-border -m-5 divide-y",
          children: [
            s.jsx(E, { label: n("checkIn.weight"), value: c ? `${c} ${n("units.kg")}` : "—" }),
            d === "manual" &&
              O.map((p) =>
                s.jsx(E, { label: p.label, value: `${p.value} ${n("units.cm")}` }, p.label),
              ),
            d === "inbody" &&
              s.jsx(E, { label: n("checkIn.inBodyUpload"), value: e ? e.name : n("checkIn.none") }),
          ],
        }),
      }),
      s.jsx(k, {
        icon: pe,
        title: n("checkIn.reviewFitness"),
        children: s.jsxs("div", {
          className: "divide-border -m-5 divide-y",
          children: [
            s.jsx(E, { label: n("checkIn.performance"), value: w(o, 100) }),
            s.jsx(E, { label: n("checkIn.energy"), value: `${m}/10` }),
            s.jsx(E, { label: n("checkIn.sleep"), value: `${y}/10` }),
          ],
        }),
      }),
      s.jsx(k, {
        icon: ge,
        title: n("checkIn.reviewDiet"),
        children: s.jsxs("div", {
          className: "divide-border -m-5 divide-y",
          children: [
            s.jsx(E, { label: n("checkIn.adherence"), value: `${j}/10` }),
            s.jsx(E, { label: n("checkIn.dietNotes"), value: w(v, 80) }),
            s.jsx(E, { label: n("checkIn.injuries"), value: w(P, 80) }),
          ],
        }),
      }),
      s.jsx(k, {
        icon: fe,
        title: n("checkIn.photos"),
        children:
          N > 0
            ? s.jsx("div", {
                className: "grid grid-cols-3 gap-2",
                children: ["front", "back", "side"].map((p) =>
                  _[p]
                    ? s.jsxs(
                        "div",
                        {
                          className: "text-center",
                          children: [
                            s.jsx("img", {
                              src: _[p],
                              alt: T[p],
                              className:
                                "border-border aspect-[3/4] w-full rounded-lg border object-cover",
                            }),
                            s.jsx("p", {
                              className: "text-muted-foreground mt-1 text-xs",
                              children: T[p],
                            }),
                          ],
                        },
                        p,
                      )
                    : null,
                ),
              })
            : s.jsx("p", {
                className: "text-muted-foreground text-sm",
                children: n("checkIn.noPhotos"),
              }),
      }),
      s.jsx(k, {
        title: `${n("checkIn.additionalNotes")} (${n("checkIn.optional")})`,
        variant: "neutral",
        children: s.jsx(te, {
          placeholder: n("checkIn.placeholders.notes"),
          className: "min-h-[100px]",
          ...r("notes"),
        }),
      }),
    ],
  });
}
function wn({ currentStep: t, totalSteps: e, isSubmitting: n, onBack: r, onNext: i }) {
  const { t: c } = D();
  return s.jsxs("div", {
    className: "flex items-center justify-between gap-3",
    children: [
      s.jsxs(oe, {
        type: "button",
        variant: "outline",
        onClick: r,
        disabled: t === 1 || n,
        children: [s.jsx(bt, { className: "h-4 w-4 rtl:rotate-180" }), c("common.back")],
      }),
      t < e
        ? s.jsxs(oe, {
            type: "button",
            variant: "gradient",
            onClick: i,
            disabled: n,
            children: [c("common.next"), s.jsx(vt, { className: "h-4 w-4 rtl:rotate-180" })],
          })
        : s.jsx(oe, {
            type: "submit",
            variant: "gradient",
            disabled: n,
            loading: n,
            children: n
              ? c("checkIn.submitting")
              : s.jsxs(s.Fragment, {
                  children: [c("checkIn.submitCheckIn"), s.jsx(_t, { className: "h-4 w-4" })],
                }),
          }),
    ],
  });
}
const G = [Fe, pe, ge, fe, Ve];
function Kn() {
  const { t, i18n: e } = D(),
    n = e.language,
    r = n === "ar",
    i = it(),
    { isAuthenticated: c } = ot(),
    d = ce(W.assessments.getMyAssessment),
    h = (d == null ? void 0 : d.gender) === "female",
    b = pn((u) => t(u)),
    f = we(W.checkIns.startCheckInWorkflow),
    l = we(W.storage.generateUploadUrl),
    a = [
      { id: 1, name: t("checkIn.steps.weight"), icon: G[0] },
      { id: 2, name: t("checkIn.steps.fitness"), icon: G[1] },
      { id: 3, name: t("checkIn.steps.dietary"), icon: G[2] },
      { id: 4, name: t("checkIn.steps.photos"), icon: G[3] },
      { id: 5, name: t("checkIn.steps.review"), icon: G[4] },
    ],
    [o, m] = x.useState(1),
    [y, j] = x.useState(!1),
    [v, P] = x.useState({ front: null, back: null, side: null }),
    [_, O] = x.useState(null),
    {
      isLocked: w,
      nextCheckInDate: N,
      daysUntilNextCheckIn: T,
      frequencyDays: p,
      isLoadingLockStatus: S,
    } = Mt(),
    I = at({
      resolver: ut(b),
      defaultValues: {
        energyLevel: 5,
        sleepQuality: 5,
        dietaryAdherence: 5,
        measurementMethod: "manual",
      },
    }),
    M = ce(W.checkIns.getLatestCheckIn);
  x.useEffect(() => {
    M != null && M.weight && !I.getValues("weight") && I.setValue("weight", M.weight);
  }, [M, I]);
  const A = (u) => {
      const g = u.type.startsWith("image/"),
        L = u.size <= ht;
      return !g || !L
        ? ($({
            title: t("checkIn.invalidFile"),
            description: t("checkIn.invalidFileDescription", { maxFileMB: me }),
            variant: "destructive",
          }),
          !1)
        : !0;
    },
    z = (u, g) => {
      (g && !A(g)) || P((L) => ({ ...L, [u]: g }));
    },
    We = (u) => {
      (u && !A(u)) || O(u);
    },
    Z = async (u, g) => {
      const L = await l({ purpose: g }),
        B = await fetch(L, {
          method: "POST",
          headers: { "Content-Type": u.type },
          body: u,
          signal: AbortSignal.timeout(3e4),
        });
      if (!B.ok) throw new Error(`Upload failed: ${B.status}`);
      const F = await B.json();
      if (!F.storageId) throw new Error("Upload succeeded but no storageId returned");
      return F.storageId;
    },
    ie = async (u) => {
      let g = [];
      switch (u) {
        case 1: {
          if (((g = ["weight"]), !(await I.trigger(g)))) return !1;
          if (I.getValues("measurementMethod") === "inbody") {
            if (!_)
              return (
                $({
                  title: t("checkIn.invalidFile"),
                  description: t("checkIn.inBodyRequired"),
                  variant: "destructive",
                }),
                !1
              );
          } else {
            const { chest: F, waist: et, hips: tt, arms: nt, thighs: st } = I.getValues();
            if (![F, et, tt, nt, st].some((je) => je !== void 0 && je > 0))
              return (
                $({
                  title: t("checkIn.measurementsRequired"),
                  description: t("checkIn.measurementsRequiredDescription"),
                  variant: "destructive",
                }),
                !1
              );
          }
          return !0;
        }
        case 2:
          g = ["workoutPerformance", "energyLevel", "sleepQuality"];
          break;
        case 3:
          g = ["dietaryAdherence"];
          break;
        case 4:
          return !0;
        default:
          return !0;
      }
      return await I.trigger(g);
    },
    Ke = async (u) => {
      (u == null || u.preventDefault(), (await ie(o)) && o < a.length && m(o + 1));
    },
    He = () => {
      o > 1 && m(o - 1);
    },
    ye = x.useRef(ie);
  ye.current = ie;
  const ke = x.useCallback(async () => {
      if (o === 4) return;
      (await ye.current(o)) && o < a.length && m((g) => g + 1);
    }, [o, a.length]),
    Ie = x.useCallback(() => {
      o !== 4 && o > 1 && m((u) => u - 1);
    }, [o]),
    ze = Tt({
      onSwipedLeft: () => {
        r ? Ie() : ke();
      },
      onSwipedRight: () => {
        r ? ke() : Ie();
      },
      trackMouse: !1,
      trackTouch: !0,
      preventScrollOnSwipe: !1,
      delta: 50,
    }),
    Ze = (u) => {
      u.key === "Enter" && o < a.length && u.preventDefault();
    },
    Je = async (u) => {
      if (!c) {
        $({
          title: t("checkIn.authRequired"),
          description: t("checkIn.authRequiredDescription"),
          variant: "destructive",
        });
        return;
      }
      j(!0);
      try {
        const g = {};
        (v.front && (g.progressPhotoFront = await Z(v.front, "progress_photo")),
          v.back && (g.progressPhotoBack = await Z(v.back, "progress_photo")),
          v.side && (g.progressPhotoSide = await Z(v.side, "progress_photo")));
        let L;
        u.measurementMethod === "inbody" && _ && (L = await Z(_));
        const B =
            u.measurementMethod === "manual"
              ? {
                  chest: u.chest || void 0,
                  waist: u.waist || void 0,
                  hips: u.hips || void 0,
                  arms: u.arms || void 0,
                  thighs: u.thighs || void 0,
                }
              : void 0,
          F = n === "ar" ? "ar" : "en";
        (await f({
          weight: u.weight,
          measurementMethod: u.measurementMethod,
          measurements: B,
          inBodyStorageId: L,
          workoutPerformance: u.workoutPerformance,
          energyLevel: u.energyLevel,
          sleepQuality: u.sleepQuality,
          dietaryAdherence: u.dietaryAdherence,
          newInjuries: u.newInjuries || void 0,
          ...g,
          notes:
            [u.dietNotes, u.notes].filter(Boolean).join(`

`) || void 0,
          cyclePhase: u.cyclePhase || void 0,
          language: F,
          planDuration: p,
        }),
          $({
            title: t("checkIn.checkInSuccess"),
            description: t("checkIn.plansGenerateInBackground"),
          }),
          i({ to: "/" }));
      } catch (g) {
        (fn(g, { tags: { feature: "check-in-submission" } }),
          $({
            title: t("checkIn.submissionFailed"),
            description: g instanceof Error ? g.message : t("checkIn.tryAgain"),
            variant: "destructive",
          }));
      } finally {
        j(!1);
      }
    };
  return s.jsxs("div", {
    className: "mx-auto max-w-2xl space-y-5 px-4 py-6 pb-8",
    children: [
      y &&
        s.jsx("div", {
          className:
            "fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm",
          children: s.jsxs("div", {
            className: "bg-card mx-4 rounded-2xl p-8 text-center shadow-xl",
            children: [
              s.jsx(Le, { className: "text-primary mx-auto mb-4 h-10 w-10 animate-spin" }),
              s.jsx("p", { className: "text-lg font-bold", children: t("checkIn.submitting") }),
              s.jsx("p", {
                className: "text-muted-foreground mt-2 text-sm",
                children: t("checkIn.plansGenerateInBackground"),
              }),
            ],
          }),
        }),
      s.jsxs("div", {
        children: [
          s.jsx("h1", { className: "text-2xl font-bold", children: t("checkIn.title") }),
          s.jsx("p", {
            className: "text-muted-foreground mt-1 text-sm",
            children: t("checkIn.subtitle"),
          }),
        ],
      }),
      S
        ? s.jsxs("div", {
            className: "border-border bg-card rounded-xl border p-12 text-center",
            children: [
              s.jsx(Le, { className: "text-muted-foreground mx-auto mb-4 h-10 w-10 animate-spin" }),
              s.jsx("p", {
                className: "text-muted-foreground text-sm font-semibold",
                children: t("common.loading"),
              }),
            ],
          })
        : w && N
          ? s.jsx(gn, { nextCheckInDate: N, daysUntilNextCheckIn: T, frequencyDays: p })
          : null,
      !S &&
        !w &&
        s.jsxs(s.Fragment, {
          children: [
            s.jsx(xn, { currentStep: o, steps: a }),
            s.jsx("div", {
              className: "sr-only",
              "aria-live": "polite",
              role: "status",
              children: t("checkIn.stepOf", { current: o, total: a.length }),
            }),
            s.jsx(ct, {
              ...I,
              children: s.jsxs("form", {
                onSubmit: I.handleSubmit(Je),
                onKeyDown: Ze,
                className: "space-y-5",
                children: [
                  s.jsx("div", {
                    ...ze,
                    className: "touch-pan-y",
                    children: s.jsxs(
                      "div",
                      {
                        className: "motion-safe:animate-fade-in",
                        children: [
                          o === 1 && s.jsx(bn, { inBodyFile: _, onInBodyFileChange: We }),
                          o === 2 && s.jsx(yn, { isFemale: h }),
                          o === 3 && s.jsx(kn, {}),
                          o === 4 && s.jsx(In, { progressPhotos: v, onPhotoChange: z }),
                          o === 5 && s.jsx(jn, { progressPhotos: v, inBodyFile: _ }),
                        ],
                      },
                      o,
                    ),
                  }),
                  s.jsx(wn, {
                    currentStep: o,
                    totalSteps: a.length,
                    isSubmitting: y,
                    onBack: He,
                    onNext: Ke,
                  }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
export { Kn as component };
