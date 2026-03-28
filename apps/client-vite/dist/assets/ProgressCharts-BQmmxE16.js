import { n as pi, o as le, r as q, i as A, c as uo, j as R } from "./index-BVud5pVb.js";
import { S as an } from "./section-card-CI2ZkxEX.js";
import { W as Ch } from "./weight-BpUO4uB_.js";
import { a as ee } from "./cn-CDN07tui.js";
import { R as jw } from "./ruler-BErsoevN.js";
import { H as Mw } from "./heart-Cfc7SifX.js";
import { c as $w } from "./createLucideIcon-CflinLEd.js";
import { A as Cw } from "./progress-CCrS6K9_.js";
import "./widget-card-ChokKurf.js";
import "./format-zSzWEmcW.js";
import "./trending-down-CdNIVmod.js";
import "./trending-up-yKghX4cs.js";
import "./calendar-PtChDace.js";
import "./empty-state-BQ3yrOyd.js";
import "./button-B1_2FTXK.js";
import "./x-C2ku7ZUf.js";
import "./dumbbell-DitM0HwP.js";
import "./triangle-alert-DfzczM4d.js";
import "./skeleton-eFLYgFmv.js";
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iw = [
    ["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0", key: "11qiee" }],
    [
      "path",
      {
        d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",
        key: "110c12",
      },
    ],
  ],
  kw = $w("apple", Iw);
var so, Ih;
function Le() {
  if (Ih) return so;
  Ih = 1;
  var e = Array.isArray;
  return ((so = e), so);
}
var co, kh;
function mb() {
  if (kh) return co;
  kh = 1;
  var e = typeof pi == "object" && pi && pi.Object === Object && pi;
  return ((co = e), co);
}
var lo, Nh;
function ht() {
  if (Nh) return lo;
  Nh = 1;
  var e = mb(),
    t = typeof self == "object" && self && self.Object === Object && self,
    r = e || t || Function("return this")();
  return ((lo = r), lo);
}
var fo, Dh;
function ai() {
  if (Dh) return fo;
  Dh = 1;
  var e = ht(),
    t = e.Symbol;
  return ((fo = t), fo);
}
var ho, Rh;
function Nw() {
  if (Rh) return ho;
  Rh = 1;
  var e = ai(),
    t = Object.prototype,
    r = t.hasOwnProperty,
    n = t.toString,
    i = e ? e.toStringTag : void 0;
  function a(o) {
    var u = r.call(o, i),
      s = o[i];
    try {
      o[i] = void 0;
      var c = !0;
    } catch {}
    var f = n.call(o);
    return (c && (u ? (o[i] = s) : delete o[i]), f);
  }
  return ((ho = a), ho);
}
var po, qh;
function Dw() {
  if (qh) return po;
  qh = 1;
  var e = Object.prototype,
    t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return ((po = r), po);
}
var vo, Lh;
function Pt() {
  if (Lh) return vo;
  Lh = 1;
  var e = ai(),
    t = Nw(),
    r = Dw(),
    n = "[object Null]",
    i = "[object Undefined]",
    a = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? (u === void 0 ? i : n) : a && a in Object(u) ? t(u) : r(u);
  }
  return ((vo = o), vo);
}
var yo, Bh;
function Tt() {
  if (Bh) return yo;
  Bh = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return ((yo = e), yo);
}
var mo, Fh;
function Xr() {
  if (Fh) return mo;
  Fh = 1;
  var e = Pt(),
    t = Tt(),
    r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || (t(i) && e(i) == r);
  }
  return ((mo = n), mo);
}
var go, Wh;
function Ef() {
  if (Wh) return go;
  Wh = 1;
  var e = Le(),
    t = Xr(),
    r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n = /^\w*$/;
  function i(a, o) {
    if (e(a)) return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a)
      ? !0
      : n.test(a) || !r.test(a) || (o != null && a in Object(o));
  }
  return ((go = i), go);
}
var bo, zh;
function Dt() {
  if (zh) return bo;
  zh = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return ((bo = e), bo);
}
var xo, Uh;
function jf() {
  if (Uh) return xo;
  Uh = 1;
  var e = Pt(),
    t = Dt(),
    r = "[object AsyncFunction]",
    n = "[object Function]",
    i = "[object GeneratorFunction]",
    a = "[object Proxy]";
  function o(u) {
    if (!t(u)) return !1;
    var s = e(u);
    return s == n || s == i || s == r || s == a;
  }
  return ((xo = o), xo);
}
var wo, Hh;
function Rw() {
  if (Hh) return wo;
  Hh = 1;
  var e = ht(),
    t = e["__core-js_shared__"];
  return ((wo = t), wo);
}
var Oo, Gh;
function qw() {
  if (Gh) return Oo;
  Gh = 1;
  var e = Rw(),
    t = (function () {
      var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
  function r(n) {
    return !!t && t in n;
  }
  return ((Oo = r), Oo);
}
var _o, Kh;
function gb() {
  if (Kh) return _o;
  Kh = 1;
  var e = Function.prototype,
    t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {}
      try {
        return n + "";
      } catch {}
    }
    return "";
  }
  return ((_o = r), _o);
}
var So, Vh;
function Lw() {
  if (Vh) return So;
  Vh = 1;
  var e = jf(),
    t = qw(),
    r = Dt(),
    n = gb(),
    i = /[\\^$.*+?()[\]{}|]/g,
    a = /^\[object .+?Constructor\]$/,
    o = Function.prototype,
    u = Object.prototype,
    s = o.toString,
    c = u.hasOwnProperty,
    f = RegExp(
      "^" +
        s
          .call(c)
          .replace(i, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    );
  function l(h) {
    if (!r(h) || t(h)) return !1;
    var p = e(h) ? f : a;
    return p.test(n(h));
  }
  return ((So = l), So);
}
var Ao, Xh;
function Bw() {
  if (Xh) return Ao;
  Xh = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return ((Ao = e), Ao);
}
var Po, Yh;
function or() {
  if (Yh) return Po;
  Yh = 1;
  var e = Lw(),
    t = Bw();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return ((Po = r), Po);
}
var To, Zh;
function ja() {
  if (Zh) return To;
  Zh = 1;
  var e = or(),
    t = e(Object, "create");
  return ((To = t), To);
}
var Eo, Jh;
function Fw() {
  if (Jh) return Eo;
  Jh = 1;
  var e = ja();
  function t() {
    ((this.__data__ = e ? e(null) : {}), (this.size = 0));
  }
  return ((Eo = t), Eo);
}
var jo, Qh;
function Ww() {
  if (Qh) return jo;
  Qh = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return ((this.size -= r ? 1 : 0), r);
  }
  return ((jo = e), jo);
}
var Mo, ed;
function zw() {
  if (ed) return Mo;
  ed = 1;
  var e = ja(),
    t = "__lodash_hash_undefined__",
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var u = o[a];
      return u === t ? void 0 : u;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return ((Mo = i), Mo);
}
var $o, td;
function Uw() {
  if (td) return $o;
  td = 1;
  var e = ja(),
    t = Object.prototype,
    r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return (($o = n), $o);
}
var Co, rd;
function Hw() {
  if (rd) return Co;
  rd = 1;
  var e = ja(),
    t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return ((this.size += this.has(n) ? 0 : 1), (a[n] = e && i === void 0 ? t : i), this);
  }
  return ((Co = r), Co);
}
var Io, nd;
function Gw() {
  if (nd) return Io;
  nd = 1;
  var e = Fw(),
    t = Ww(),
    r = zw(),
    n = Uw(),
    i = Hw();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (Io = a),
    Io
  );
}
var ko, id;
function Kw() {
  if (id) return ko;
  id = 1;
  function e() {
    ((this.__data__ = []), (this.size = 0));
  }
  return ((ko = e), ko);
}
var No, ad;
function Mf() {
  if (ad) return No;
  ad = 1;
  function e(t, r) {
    return t === r || (t !== t && r !== r);
  }
  return ((No = e), No);
}
var Do, od;
function Ma() {
  if (od) return Do;
  od = 1;
  var e = Mf();
  function t(r, n) {
    for (var i = r.length; i--; ) if (e(r[i][0], n)) return i;
    return -1;
  }
  return ((Do = t), Do);
}
var Ro, ud;
function Vw() {
  if (ud) return Ro;
  ud = 1;
  var e = Ma(),
    t = Array.prototype,
    r = t.splice;
  function n(i) {
    var a = this.__data__,
      o = e(a, i);
    if (o < 0) return !1;
    var u = a.length - 1;
    return (o == u ? a.pop() : r.call(a, o, 1), --this.size, !0);
  }
  return ((Ro = n), Ro);
}
var qo, sd;
function Xw() {
  if (sd) return qo;
  sd = 1;
  var e = Ma();
  function t(r) {
    var n = this.__data__,
      i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return ((qo = t), qo);
}
var Lo, cd;
function Yw() {
  if (cd) return Lo;
  cd = 1;
  var e = Ma();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return ((Lo = t), Lo);
}
var Bo, ld;
function Zw() {
  if (ld) return Bo;
  ld = 1;
  var e = Ma();
  function t(r, n) {
    var i = this.__data__,
      a = e(i, r);
    return (a < 0 ? (++this.size, i.push([r, n])) : (i[a][1] = n), this);
  }
  return ((Bo = t), Bo);
}
var Fo, fd;
function $a() {
  if (fd) return Fo;
  fd = 1;
  var e = Kw(),
    t = Vw(),
    r = Xw(),
    n = Yw(),
    i = Zw();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (Fo = a),
    Fo
  );
}
var Wo, hd;
function $f() {
  if (hd) return Wo;
  hd = 1;
  var e = or(),
    t = ht(),
    r = e(t, "Map");
  return ((Wo = r), Wo);
}
var zo, dd;
function Jw() {
  if (dd) return zo;
  dd = 1;
  var e = Gw(),
    t = $a(),
    r = $f();
  function n() {
    ((this.size = 0), (this.__data__ = { hash: new e(), map: new (r || t)(), string: new e() }));
  }
  return ((zo = n), zo);
}
var Uo, pd;
function Qw() {
  if (pd) return Uo;
  pd = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? t !== "__proto__"
      : t === null;
  }
  return ((Uo = e), Uo);
}
var Ho, vd;
function Ca() {
  if (vd) return Ho;
  vd = 1;
  var e = Qw();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return ((Ho = t), Ho);
}
var Go, yd;
function eO() {
  if (yd) return Go;
  yd = 1;
  var e = Ca();
  function t(r) {
    var n = e(this, r).delete(r);
    return ((this.size -= n ? 1 : 0), n);
  }
  return ((Go = t), Go);
}
var Ko, md;
function tO() {
  if (md) return Ko;
  md = 1;
  var e = Ca();
  function t(r) {
    return e(this, r).get(r);
  }
  return ((Ko = t), Ko);
}
var Vo, gd;
function rO() {
  if (gd) return Vo;
  gd = 1;
  var e = Ca();
  function t(r) {
    return e(this, r).has(r);
  }
  return ((Vo = t), Vo);
}
var Xo, bd;
function nO() {
  if (bd) return Xo;
  bd = 1;
  var e = Ca();
  function t(r, n) {
    var i = e(this, r),
      a = i.size;
    return (i.set(r, n), (this.size += i.size == a ? 0 : 1), this);
  }
  return ((Xo = t), Xo);
}
var Yo, xd;
function Cf() {
  if (xd) return Yo;
  xd = 1;
  var e = Jw(),
    t = eO(),
    r = tO(),
    n = rO(),
    i = nO();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (Yo = a),
    Yo
  );
}
var Zo, wd;
function bb() {
  if (wd) return Zo;
  wd = 1;
  var e = Cf(),
    t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || (i != null && typeof i != "function")) throw new TypeError(t);
    var a = function () {
      var o = arguments,
        u = i ? i.apply(this, o) : o[0],
        s = a.cache;
      if (s.has(u)) return s.get(u);
      var c = n.apply(this, o);
      return ((a.cache = s.set(u, c) || s), c);
    };
    return ((a.cache = new (r.Cache || e)()), a);
  }
  return ((r.Cache = e), (Zo = r), Zo);
}
var Jo, Od;
function iO() {
  if (Od) return Jo;
  Od = 1;
  var e = bb(),
    t = 500;
  function r(n) {
    var i = e(n, function (o) {
        return (a.size === t && a.clear(), o);
      }),
      a = i.cache;
    return i;
  }
  return ((Jo = r), Jo);
}
var Qo, _d;
function aO() {
  if (_d) return Qo;
  _d = 1;
  var e = iO(),
    t =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    r = /\\(\\)?/g,
    n = e(function (i) {
      var a = [];
      return (
        i.charCodeAt(0) === 46 && a.push(""),
        i.replace(t, function (o, u, s, c) {
          a.push(s ? c.replace(r, "$1") : u || o);
        }),
        a
      );
    });
  return ((Qo = n), Qo);
}
var eu, Sd;
function If() {
  if (Sd) return eu;
  Sd = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; ) a[n] = r(t[n], n, t);
    return a;
  }
  return ((eu = e), eu);
}
var tu, Ad;
function oO() {
  if (Ad) return tu;
  Ad = 1;
  var e = ai(),
    t = If(),
    r = Le(),
    n = Xr(),
    i = e ? e.prototype : void 0,
    a = i ? i.toString : void 0;
  function o(u) {
    if (typeof u == "string") return u;
    if (r(u)) return t(u, o) + "";
    if (n(u)) return a ? a.call(u) : "";
    var s = u + "";
    return s == "0" && 1 / u == -1 / 0 ? "-0" : s;
  }
  return ((tu = o), tu);
}
var ru, Pd;
function xb() {
  if (Pd) return ru;
  Pd = 1;
  var e = oO();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return ((ru = t), ru);
}
var nu, Td;
function wb() {
  if (Td) return nu;
  Td = 1;
  var e = Le(),
    t = Ef(),
    r = aO(),
    n = xb();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return ((nu = i), nu);
}
var iu, Ed;
function Ia() {
  if (Ed) return iu;
  Ed = 1;
  var e = Xr();
  function t(r) {
    if (typeof r == "string" || e(r)) return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return ((iu = t), iu);
}
var au, jd;
function kf() {
  if (jd) return au;
  jd = 1;
  var e = wb(),
    t = Ia();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; ) n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return ((au = r), au);
}
var ou, Md;
function Ob() {
  if (Md) return ou;
  Md = 1;
  var e = kf();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return ((ou = t), ou);
}
var uO = Ob();
const Xe = le(uO);
var uu, $d;
function sO() {
  if ($d) return uu;
  $d = 1;
  function e(t) {
    return t == null;
  }
  return ((uu = e), uu);
}
var cO = sO();
const Q = le(cO);
var su, Cd;
function lO() {
  if (Cd) return su;
  Cd = 1;
  var e = Pt(),
    t = Le(),
    r = Tt(),
    n = "[object String]";
  function i(a) {
    return typeof a == "string" || (!t(a) && r(a) && e(a) == n);
  }
  return ((su = i), su);
}
var fO = lO();
const tr = le(fO);
var hO = jf();
const X = le(hO);
var dO = Dt();
const Yr = le(dO);
var cu = { exports: {} },
  ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function pO() {
  if (Id) return ie;
  Id = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    i = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    o = Symbol.for("react.context"),
    u = Symbol.for("react.server_context"),
    s = Symbol.for("react.forward_ref"),
    c = Symbol.for("react.suspense"),
    f = Symbol.for("react.suspense_list"),
    l = Symbol.for("react.memo"),
    h = Symbol.for("react.lazy"),
    p = Symbol.for("react.offscreen"),
    y;
  y = Symbol.for("react.module.reference");
  function v(d) {
    if (typeof d == "object" && d !== null) {
      var b = d.$$typeof;
      switch (b) {
        case e:
          switch (((d = d.type), d)) {
            case r:
            case i:
            case n:
            case c:
            case f:
              return d;
            default:
              switch (((d = d && d.$$typeof), d)) {
                case u:
                case o:
                case s:
                case h:
                case l:
                case a:
                  return d;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return (
    (ie.ContextConsumer = o),
    (ie.ContextProvider = a),
    (ie.Element = e),
    (ie.ForwardRef = s),
    (ie.Fragment = r),
    (ie.Lazy = h),
    (ie.Memo = l),
    (ie.Portal = t),
    (ie.Profiler = i),
    (ie.StrictMode = n),
    (ie.Suspense = c),
    (ie.SuspenseList = f),
    (ie.isAsyncMode = function () {
      return !1;
    }),
    (ie.isConcurrentMode = function () {
      return !1;
    }),
    (ie.isContextConsumer = function (d) {
      return v(d) === o;
    }),
    (ie.isContextProvider = function (d) {
      return v(d) === a;
    }),
    (ie.isElement = function (d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }),
    (ie.isForwardRef = function (d) {
      return v(d) === s;
    }),
    (ie.isFragment = function (d) {
      return v(d) === r;
    }),
    (ie.isLazy = function (d) {
      return v(d) === h;
    }),
    (ie.isMemo = function (d) {
      return v(d) === l;
    }),
    (ie.isPortal = function (d) {
      return v(d) === t;
    }),
    (ie.isProfiler = function (d) {
      return v(d) === i;
    }),
    (ie.isStrictMode = function (d) {
      return v(d) === n;
    }),
    (ie.isSuspense = function (d) {
      return v(d) === c;
    }),
    (ie.isSuspenseList = function (d) {
      return v(d) === f;
    }),
    (ie.isValidElementType = function (d) {
      return (
        typeof d == "string" ||
        typeof d == "function" ||
        d === r ||
        d === i ||
        d === n ||
        d === c ||
        d === f ||
        d === p ||
        (typeof d == "object" &&
          d !== null &&
          (d.$$typeof === h ||
            d.$$typeof === l ||
            d.$$typeof === a ||
            d.$$typeof === o ||
            d.$$typeof === s ||
            d.$$typeof === y ||
            d.getModuleId !== void 0))
      );
    }),
    (ie.typeOf = v),
    ie
  );
}
var kd;
function vO() {
  return (kd || ((kd = 1), (cu.exports = pO())), cu.exports);
}
var yO = vO(),
  lu,
  Nd;
function _b() {
  if (Nd) return lu;
  Nd = 1;
  var e = Pt(),
    t = Tt(),
    r = "[object Number]";
  function n(i) {
    return typeof i == "number" || (t(i) && e(i) == r);
  }
  return ((lu = n), lu);
}
var fu, Dd;
function mO() {
  if (Dd) return fu;
  Dd = 1;
  var e = _b();
  function t(r) {
    return e(r) && r != +r;
  }
  return ((fu = t), fu);
}
var gO = mO();
const Zr = le(gO);
var bO = _b();
const xO = le(bO);
var it = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  Vt = function (t) {
    return tr(t) && t.indexOf("%") === t.length - 1;
  },
  L = function (t) {
    return xO(t) && !Zr(t);
  },
  wO = function (t) {
    return Q(t);
  },
  _e = function (t) {
    return L(t) || tr(t);
  },
  OO = 0,
  Jr = function (t) {
    var r = ++OO;
    return "".concat(t || "").concat(r);
  },
  rr = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!L(t) && !tr(t)) return n;
    var a;
    if (Vt(t)) {
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return (Zr(a) && (a = n), i && a > r && (a = r), a);
  },
  Ct = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  _O = function (t) {
    if (!Array.isArray(t)) return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0;
      else return !0;
    return !1;
  },
  Ee = function (t, r) {
    return L(t) && L(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function ji(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : Xe(n, t)) === r;
      });
}
var SO = function (t, r) {
  return L(t) && L(r)
    ? t - r
    : tr(t) && tr(r)
      ? t.localeCompare(r)
      : t instanceof Date && r instanceof Date
        ? t.getTime() - r.getTime()
        : String(t).localeCompare(String(r));
};
function xr(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])) return !1;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n)) return !1;
  return !0;
}
function cl(e) {
  "@babel/helpers - typeof";
  return (
    (cl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    cl(e)
  );
}
var AO = ["viewBox", "children"],
  PO = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  Rd = ["points", "pathLength"],
  hu = { svg: AO, polygon: Rd, polyline: Rd },
  Nf = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  Mi = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((q.isValidElement(t) && (n = t.props), !Yr(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        Nf.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  TO = function (t, r, n) {
    return function (i) {
      return (t(r, n, i), null);
    };
  },
  $i = function (t, r, n) {
    if (!Yr(t) || cl(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        Nf.includes(a) && typeof o == "function" && (i || (i = {}), (i[a] = TO(o, r, n)));
      }),
      i
    );
  },
  EO = ["children"],
  jO = ["children"];
function qd(e, t) {
  if (e == null) return {};
  var r = MO(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function MO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ll(e) {
  "@babel/helpers - typeof";
  return (
    (ll =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ll(e)
  );
}
var Ld = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
  },
  bt = function (t) {
    return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
  },
  Bd = null,
  du = null,
  Df = function e(t) {
    if (t === Bd && Array.isArray(du)) return du;
    var r = [];
    return (
      q.Children.forEach(t, function (n) {
        Q(n) || (yO.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (du = r),
      (Bd = t),
      r
    );
  };
function Ye(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t)
      ? (n = t.map(function (i) {
          return bt(i);
        }))
      : (n = [bt(t)]),
    Df(e).forEach(function (i) {
      var a = Xe(i, "type.displayName") || Xe(i, "type.name");
      n.indexOf(a) !== -1 && r.push(i);
    }),
    r
  );
}
function ze(e, t) {
  var r = Ye(e, t);
  return r && r[0];
}
var Fd = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      i = r.height;
    return !(!L(n) || n <= 0 || !L(i) || i <= 0);
  },
  $O = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  CO = function (t) {
    return t && t.type && tr(t.type) && $O.indexOf(t.type) >= 0;
  },
  Sb = function (t) {
    return t && ll(t) === "object" && "clipDot" in t;
  },
  IO = function (t, r, n, i) {
    var a,
      o = (a = hu == null ? void 0 : hu[i]) !== null && a !== void 0 ? a : [];
    return (
      r.startsWith("data-") ||
      (!X(t) && ((i && o.includes(r)) || PO.includes(r))) ||
      (n && Nf.includes(r))
    );
  },
  Z = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((q.isValidElement(t) && (i = t.props), !Yr(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        var u;
        IO((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
      }),
      a
    );
  },
  fl = function e(t, r) {
    if (t === r) return !0;
    var n = q.Children.count(t);
    if (n !== q.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1) return Wd(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!Wd(a, o)) return !1;
    }
    return !0;
  },
  Wd = function (t, r) {
    if (Q(t) && Q(r)) return !0;
    if (!Q(t) && !Q(r)) {
      var n = t.props || {},
        i = n.children,
        a = qd(n, EO),
        o = r.props || {},
        u = o.children,
        s = qd(o, jO);
      return i && u ? xr(a, s) && fl(i, u) : !i && !u ? xr(a, s) : !1;
    }
    return !1;
  },
  zd = function (t, r) {
    var n = [],
      i = {};
    return (
      Df(t).forEach(function (a, o) {
        if (CO(a)) n.push(a);
        else if (a) {
          var u = bt(a.type),
            s = r[u] || {},
            c = s.handler,
            f = s.once;
          if (c && (!f || !i[u])) {
            var l = c(a, u, o);
            (n.push(l), (i[u] = !0));
          }
        }
      }),
      n
    );
  },
  kO = function (t) {
    var r = t && t.type;
    return r && Ld[r] ? Ld[r] : null;
  },
  NO = function (t, r) {
    return Df(r).indexOf(t);
  },
  DO = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function hl() {
  return (
    (hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    hl.apply(this, arguments)
  );
}
function RO(e, t) {
  if (e == null) return {};
  var r = qO(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function qO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function dl(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = e.title,
    s = e.desc,
    c = RO(e, DO),
    f = i || { width: r, height: n, x: 0, y: 0 },
    l = ee("recharts-surface", a);
  return A.createElement(
    "svg",
    hl({}, Z(c, !0, "svg"), {
      className: l,
      width: r,
      height: n,
      style: o,
      viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    }),
    A.createElement("title", null, u),
    A.createElement("desc", null, s),
    t,
  );
}
var LO = ["children", "className"];
function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
function BO(e, t) {
  if (e == null) return {};
  var r = FO(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function FO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ce = A.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      i = BO(e, LO),
      a = ee("recharts-layer", n);
    return A.createElement("g", pl({ className: a }, Z(i, !0), { ref: t }), r);
  }),
  xt = function (t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
      i[a - 2] = arguments[a];
  },
  pu,
  Ud;
function WO() {
  if (Ud) return pu;
  Ud = 1;
  function e(t, r, n) {
    var i = -1,
      a = t.length;
    (r < 0 && (r = -r > a ? 0 : a + r),
      (n = n > a ? a : n),
      n < 0 && (n += a),
      (a = r > n ? 0 : (n - r) >>> 0),
      (r >>>= 0));
    for (var o = Array(a); ++i < a; ) o[i] = t[i + r];
    return o;
  }
  return ((pu = e), pu);
}
var vu, Hd;
function zO() {
  if (Hd) return vu;
  Hd = 1;
  var e = WO();
  function t(r, n, i) {
    var a = r.length;
    return ((i = i === void 0 ? a : i), !n && i >= a ? r : e(r, n, i));
  }
  return ((vu = t), vu);
}
var yu, Gd;
function Ab() {
  if (Gd) return yu;
  Gd = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    i = t + r + n,
    a = "\\ufe0e\\ufe0f",
    o = "\\u200d",
    u = RegExp("[" + o + e + i + a + "]");
  function s(c) {
    return u.test(c);
  }
  return ((yu = s), yu);
}
var mu, Kd;
function UO() {
  if (Kd) return mu;
  Kd = 1;
  function e(t) {
    return t.split("");
  }
  return ((mu = e), mu);
}
var gu, Vd;
function HO() {
  if (Vd) return gu;
  Vd = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    i = t + r + n,
    a = "\\ufe0e\\ufe0f",
    o = "[" + e + "]",
    u = "[" + i + "]",
    s = "\\ud83c[\\udffb-\\udfff]",
    c = "(?:" + u + "|" + s + ")",
    f = "[^" + e + "]",
    l = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    h = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    p = "\\u200d",
    y = c + "?",
    v = "[" + a + "]?",
    d = "(?:" + p + "(?:" + [f, l, h].join("|") + ")" + v + y + ")*",
    b = v + y + d,
    x = "(?:" + [f + u + "?", u, l, h, o].join("|") + ")",
    w = RegExp(s + "(?=" + s + ")|" + x + b, "g");
  function O(m) {
    return m.match(w) || [];
  }
  return ((gu = O), gu);
}
var bu, Xd;
function GO() {
  if (Xd) return bu;
  Xd = 1;
  var e = UO(),
    t = Ab(),
    r = HO();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return ((bu = n), bu);
}
var xu, Yd;
function KO() {
  if (Yd) return xu;
  Yd = 1;
  var e = zO(),
    t = Ab(),
    r = GO(),
    n = xb();
  function i(a) {
    return function (o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0,
        s = u ? u[0] : o.charAt(0),
        c = u ? e(u, 1).join("") : o.slice(1);
      return s[a]() + c;
    };
  }
  return ((xu = i), xu);
}
var wu, Zd;
function VO() {
  if (Zd) return wu;
  Zd = 1;
  var e = KO(),
    t = e("toUpperCase");
  return ((wu = t), wu);
}
var XO = VO();
const ka = le(XO);
function se(e) {
  return function () {
    return e;
  };
}
const Pb = Math.cos,
  Ci = Math.sin,
  at = Math.sqrt,
  Ii = Math.PI,
  Na = 2 * Ii,
  vl = Math.PI,
  yl = 2 * vl,
  Gt = 1e-6,
  YO = yl - Gt;
function Tb(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function ZO(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Tb;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class JO {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? Tb : ZO(t)));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      u = this._y1,
      s = n - t,
      c = i - r,
      f = o - t,
      l = u - r,
      h = f * f + l * l;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (h > Gt)
      if (!(Math.abs(l * s - c * f) > Gt) || !a) this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let p = n - o,
          y = i - u,
          v = s * s + c * c,
          d = p * p + y * y,
          b = Math.sqrt(v),
          x = Math.sqrt(h),
          w = a * Math.tan((vl - Math.acos((v + h - d) / (2 * b * x))) / 2),
          O = w / x,
          m = w / b;
        (Math.abs(O - 1) > Gt && this._append`L${t + O * f},${r + O * l}`,
          this
            ._append`A${a},${a},0,0,${+(l * p > f * y)},${(this._x1 = t + m * s)},${(this._y1 = r + m * c)}`);
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0)) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i),
      s = n * Math.sin(i),
      c = t + u,
      f = r + s,
      l = 1 ^ o,
      h = o ? i - a : a - i;
    (this._x1 === null
      ? this._append`M${c},${f}`
      : (Math.abs(this._x1 - c) > Gt || Math.abs(this._y1 - f) > Gt) && this._append`L${c},${f}`,
      n &&
        (h < 0 && (h = (h % yl) + yl),
        h > YO
          ? this
              ._append`A${n},${n},0,1,${l},${t - u},${r - s}A${n},${n},0,1,${l},${(this._x1 = c)},${(this._y1 = f)}`
          : h > Gt &&
            this
              ._append`A${n},${n},0,${+(h >= vl)},${l},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`));
  }
  rect(t, r, n, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Rf(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new JO(t)
  );
}
function qf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Eb(e) {
  this._context = e;
}
Eb.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function Da(e) {
  return new Eb(e);
}
function jb(e) {
  return e[0];
}
function Mb(e) {
  return e[1];
}
function $b(e, t) {
  var r = se(!0),
    n = null,
    i = Da,
    a = null,
    o = Rf(u);
  ((e = typeof e == "function" ? e : e === void 0 ? jb : se(e)),
    (t = typeof t == "function" ? t : t === void 0 ? Mb : se(t)));
  function u(s) {
    var c,
      f = (s = qf(s)).length,
      l,
      h = !1,
      p;
    for (n == null && (a = i((p = o()))), c = 0; c <= f; ++c)
      (!(c < f && r((l = s[c]), c, s)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()),
        h && a.point(+e(l, c, s), +t(l, c, s)));
    if (p) return ((a = null), p + "" || null);
  }
  return (
    (u.x = function (s) {
      return arguments.length ? ((e = typeof s == "function" ? s : se(+s)), u) : e;
    }),
    (u.y = function (s) {
      return arguments.length ? ((t = typeof s == "function" ? s : se(+s)), u) : t;
    }),
    (u.defined = function (s) {
      return arguments.length ? ((r = typeof s == "function" ? s : se(!!s)), u) : r;
    }),
    (u.curve = function (s) {
      return arguments.length ? ((i = s), n != null && (a = i(n)), u) : i;
    }),
    (u.context = function (s) {
      return arguments.length ? (s == null ? (n = a = null) : (a = i((n = s))), u) : n;
    }),
    u
  );
}
function vi(e, t, r) {
  var n = null,
    i = se(!0),
    a = null,
    o = Da,
    u = null,
    s = Rf(c);
  ((e = typeof e == "function" ? e : e === void 0 ? jb : se(+e)),
    (t = typeof t == "function" ? t : se(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? Mb : se(+r)));
  function c(l) {
    var h,
      p,
      y,
      v = (l = qf(l)).length,
      d,
      b = !1,
      x,
      w = new Array(v),
      O = new Array(v);
    for (a == null && (u = o((x = s()))), h = 0; h <= v; ++h) {
      if (!(h < v && i((d = l[h]), h, l)) === b)
        if ((b = !b)) ((p = h), u.areaStart(), u.lineStart());
        else {
          for (u.lineEnd(), u.lineStart(), y = h - 1; y >= p; --y) u.point(w[y], O[y]);
          (u.lineEnd(), u.areaEnd());
        }
      b &&
        ((w[h] = +e(d, h, l)),
        (O[h] = +t(d, h, l)),
        u.point(n ? +n(d, h, l) : w[h], r ? +r(d, h, l) : O[h]));
    }
    if (x) return ((u = null), x + "" || null);
  }
  function f() {
    return $b().defined(i).curve(o).context(a);
  }
  return (
    (c.x = function (l) {
      return arguments.length ? ((e = typeof l == "function" ? l : se(+l)), (n = null), c) : e;
    }),
    (c.x0 = function (l) {
      return arguments.length ? ((e = typeof l == "function" ? l : se(+l)), c) : e;
    }),
    (c.x1 = function (l) {
      return arguments.length
        ? ((n = l == null ? null : typeof l == "function" ? l : se(+l)), c)
        : n;
    }),
    (c.y = function (l) {
      return arguments.length ? ((t = typeof l == "function" ? l : se(+l)), (r = null), c) : t;
    }),
    (c.y0 = function (l) {
      return arguments.length ? ((t = typeof l == "function" ? l : se(+l)), c) : t;
    }),
    (c.y1 = function (l) {
      return arguments.length
        ? ((r = l == null ? null : typeof l == "function" ? l : se(+l)), c)
        : r;
    }),
    (c.lineX0 = c.lineY0 =
      function () {
        return f().x(e).y(t);
      }),
    (c.lineY1 = function () {
      return f().x(e).y(r);
    }),
    (c.lineX1 = function () {
      return f().x(n).y(t);
    }),
    (c.defined = function (l) {
      return arguments.length ? ((i = typeof l == "function" ? l : se(!!l)), c) : i;
    }),
    (c.curve = function (l) {
      return arguments.length ? ((o = l), a != null && (u = o(a)), c) : o;
    }),
    (c.context = function (l) {
      return arguments.length ? (l == null ? (a = u = null) : (u = o((a = l))), c) : a;
    }),
    c
  );
}
class Cb {
  constructor(t, r) {
    ((this._context = t), (this._x = r));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        ((this._point = 1), this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r));
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    ((this._x0 = t), (this._y0 = r));
  }
}
function QO(e) {
  return new Cb(e, !0);
}
function e1(e) {
  return new Cb(e, !1);
}
const Lf = {
    draw(e, t) {
      const r = at(t / Ii);
      (e.moveTo(r, 0), e.arc(0, 0, r, 0, Na));
    },
  },
  t1 = {
    draw(e, t) {
      const r = at(t / 5) / 2;
      (e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath());
    },
  },
  Ib = at(1 / 3),
  r1 = Ib * 2,
  n1 = {
    draw(e, t) {
      const r = at(t / r1),
        n = r * Ib;
      (e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath());
    },
  },
  i1 = {
    draw(e, t) {
      const r = at(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  a1 = 0.8908130915292852,
  kb = Ci(Ii / 10) / Ci((7 * Ii) / 10),
  o1 = Ci(Na / 10) * kb,
  u1 = -Pb(Na / 10) * kb,
  s1 = {
    draw(e, t) {
      const r = at(t * a1),
        n = o1 * r,
        i = u1 * r;
      (e.moveTo(0, -r), e.lineTo(n, i));
      for (let a = 1; a < 5; ++a) {
        const o = (Na * a) / 5,
          u = Pb(o),
          s = Ci(o);
        (e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i));
      }
      e.closePath();
    },
  },
  Ou = at(3),
  c1 = {
    draw(e, t) {
      const r = -at(t / (Ou * 3));
      (e.moveTo(0, r * 2), e.lineTo(-Ou * r, -r), e.lineTo(Ou * r, -r), e.closePath());
    },
  },
  He = -0.5,
  Ge = at(3) / 2,
  ml = 1 / at(12),
  l1 = (ml / 2 + 1) * 3,
  f1 = {
    draw(e, t) {
      const r = at(t / l1),
        n = r / 2,
        i = r * ml,
        a = n,
        o = r * ml + r,
        u = -a,
        s = o;
      (e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(u, s),
        e.lineTo(He * n - Ge * i, Ge * n + He * i),
        e.lineTo(He * a - Ge * o, Ge * a + He * o),
        e.lineTo(He * u - Ge * s, Ge * u + He * s),
        e.lineTo(He * n + Ge * i, He * i - Ge * n),
        e.lineTo(He * a + Ge * o, He * o - Ge * a),
        e.lineTo(He * u + Ge * s, He * s - Ge * u),
        e.closePath());
    },
  };
function h1(e, t) {
  let r = null,
    n = Rf(i);
  ((e = typeof e == "function" ? e : se(e || Lf)),
    (t = typeof t == "function" ? t : se(t === void 0 ? 64 : +t)));
  function i() {
    let a;
    if ((r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a))
      return ((r = null), a + "" || null);
  }
  return (
    (i.type = function (a) {
      return arguments.length ? ((e = typeof a == "function" ? a : se(a)), i) : e;
    }),
    (i.size = function (a) {
      return arguments.length ? ((t = typeof a == "function" ? a : se(+a)), i) : t;
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r;
    }),
    i
  );
}
function ki() {}
function Ni(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function Nb(e) {
  this._context = e;
}
Nb.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        Ni(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6));
      default:
        Ni(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function d1(e) {
  return new Nb(e);
}
function Db(e) {
  this._context = e;
}
Db.prototype = {
  areaStart: ki,
  areaEnd: ki,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      }
      case 2: {
        (this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
          this._context.closePath());
        break;
      }
      case 3: {
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        Ni(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function p1(e) {
  return new Db(e);
}
function Rb(e) {
  this._context = e;
}
Rb.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Ni(this, e, t);
        break;
    }
    ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
  },
};
function v1(e) {
  return new Rb(e);
}
function qb(e) {
  this._context = e;
}
qb.prototype = {
  areaStart: ki,
  areaEnd: ki,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point ? this._context.lineTo(e, t) : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function y1(e) {
  return new qb(e);
}
function Jd(e) {
  return e < 0 ? -1 : 1;
}
function Qd(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i);
  return (Jd(a) + Jd(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function ep(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function _u(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Di(e) {
  this._context = e;
}
Di.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        _u(this, this._t0, ep(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), _u(this, ep(this, (r = Qd(this, e, t))), r));
          break;
        default:
          _u(this, this._t0, (r = Qd(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r));
    }
  },
};
function Lb(e) {
  this._context = new Bb(e);
}
(Lb.prototype = Object.create(Di.prototype)).point = function (e, t) {
  Di.prototype.point.call(this, t, e);
};
function Bb(e) {
  this._context = e;
}
Bb.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function m1(e) {
  return new Di(e);
}
function g1(e) {
  return new Lb(e);
}
function Fb(e) {
  this._context = e;
}
Fb.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = tp(e), i = tp(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    ((this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function tp(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    ((n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]));
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function b1(e) {
  return new Fb(e);
}
function Ra(e, t) {
  ((this._context = e), (this._t = t));
}
Ra.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) && this._context.closePath(),
      this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
        }
        break;
      }
    }
    ((this._x = e), (this._y = t));
  },
};
function x1(e) {
  return new Ra(e, 0.5);
}
function w1(e) {
  return new Ra(e, 0);
}
function O1(e) {
  return new Ra(e, 1);
}
function Ar(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function gl(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function _1(e, t) {
  return e[t];
}
function S1(e) {
  const t = [];
  return ((t.key = e), t);
}
function A1() {
  var e = se([]),
    t = gl,
    r = Ar,
    n = _1;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), S1),
      u,
      s = o.length,
      c = -1,
      f;
    for (const l of a) for (u = 0, ++c; u < s; ++u) (o[u][c] = [0, +n(l, o[u].key, c, a)]).data = l;
    for (u = 0, f = qf(t(o)); u < s; ++u) o[f[u]].index = u;
    return (r(o, f), o);
  }
  return (
    (i.keys = function (a) {
      return arguments.length ? ((e = typeof a == "function" ? a : se(Array.from(a))), i) : e;
    }),
    (i.value = function (a) {
      return arguments.length ? ((n = typeof a == "function" ? a : se(+a)), i) : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t = a == null ? gl : typeof a == "function" ? a : se(Array.from(a))), i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? Ar), i) : r;
    }),
    i
  );
}
function P1(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Ar(e, t);
  }
}
function T1(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Ar(e, t);
  }
}
function E1(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (
          var f = e[t[u]], l = f[n][1] || 0, h = f[n - 1][1] || 0, p = (l - h) / 2, y = 0;
          y < u;
          ++y
        ) {
          var v = e[t[y]],
            d = v[n][1] || 0,
            b = v[n - 1][1] || 0;
          p += d - b;
        }
        ((s += l), (c += p * l));
      }
      ((i[n - 1][1] += i[n - 1][0] = r), s && (r -= c / s));
    }
    ((i[n - 1][1] += i[n - 1][0] = r), Ar(e, t));
  }
}
function Sn(e) {
  "@babel/helpers - typeof";
  return (
    (Sn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sn(e)
  );
}
var j1 = ["type", "size", "sizeType"];
function bl() {
  return (
    (bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    bl.apply(this, arguments)
  );
}
function rp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function np(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rp(Object(r), !0).forEach(function (n) {
          M1(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rp(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function M1(e, t, r) {
  return (
    (t = $1(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function $1(e) {
  var t = C1(e, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function C1(e, t) {
  if (Sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I1(e, t) {
  if (e == null) return {};
  var r = k1(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function k1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Wb = {
    symbolCircle: Lf,
    symbolCross: t1,
    symbolDiamond: n1,
    symbolSquare: i1,
    symbolStar: s1,
    symbolTriangle: c1,
    symbolWye: f1,
  },
  N1 = Math.PI / 180,
  D1 = function (t) {
    var r = "symbol".concat(ka(t));
    return Wb[r] || Lf;
  },
  R1 = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * N1;
        return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  q1 = function (t, r) {
    Wb["symbol".concat(ka(t))] = r;
  },
  Bf = function (t) {
    var r = t.type,
      n = r === void 0 ? "circle" : r,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      u = o === void 0 ? "area" : o,
      s = I1(t, j1),
      c = np(np({}, s), {}, { type: n, size: a, sizeType: u }),
      f = function () {
        var d = D1(n),
          b = h1()
            .type(d)
            .size(R1(a, u, n));
        return b();
      },
      l = c.className,
      h = c.cx,
      p = c.cy,
      y = Z(c, !0);
    return h === +h && p === +p && a === +a
      ? A.createElement(
          "path",
          bl({}, y, {
            className: ee("recharts-symbols", l),
            transform: "translate(".concat(h, ", ").concat(p, ")"),
            d: f(),
          }),
        )
      : null;
  };
Bf.registerSymbol = q1;
function Pr(e) {
  "@babel/helpers - typeof";
  return (
    (Pr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pr(e)
  );
}
function xl() {
  return (
    (xl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xl.apply(this, arguments)
  );
}
function ip(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function L1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ip(Object(r), !0).forEach(function (n) {
          An(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ip(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function B1(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function F1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Ub(n.key), n));
  }
}
function W1(e, t, r) {
  return (t && F1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function z1(e, t, r) {
  return (
    (t = Ri(t)),
    U1(e, zb() ? Reflect.construct(t, r || [], Ri(e).constructor) : t.apply(e, r))
  );
}
function U1(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return H1(e);
}
function H1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (zb = function () {
    return !!e;
  })();
}
function Ri(e) {
  return (
    (Ri = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ri(e)
  );
}
function G1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wl(e, t));
}
function wl(e, t) {
  return (
    (wl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    wl(e, t)
  );
}
function An(e, t, r) {
  return (
    (t = Ub(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Ub(e) {
  var t = K1(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function K1(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ke = 32,
  Ff = (function (e) {
    function t() {
      return (B1(this, t), z1(this, t, arguments));
    }
    return (
      G1(t, e),
      W1(t, [
        {
          key: "renderIcon",
          value: function (n) {
            var i = this.props.inactiveColor,
              a = Ke / 2,
              o = Ke / 6,
              u = Ke / 3,
              s = n.inactive ? i : n.color;
            if (n.type === "plainline")
              return A.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: s,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: Ke,
                y2: a,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return A.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: s,
                d: "M0,"
                  .concat(a, "h")
                  .concat(
                    u,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(Ke, "M")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(u, ",")
                  .concat(a),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return A.createElement("path", {
                stroke: "none",
                fill: s,
                d: "M0,"
                  .concat(Ke / 8, "h")
                  .concat(Ke, "v")
                  .concat((Ke * 3) / 4, "h")
                  .concat(-Ke, "z"),
                className: "recharts-legend-icon",
              });
            if (A.isValidElement(n.legendIcon)) {
              var c = L1({}, n);
              return (delete c.legendIcon, A.cloneElement(n.legendIcon, c));
            }
            return A.createElement(Bf, {
              fill: s,
              cx: a,
              cy: a,
              size: Ke,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              u = i.layout,
              s = i.formatter,
              c = i.inactiveColor,
              f = { x: 0, y: 0, width: Ke, height: Ke },
              l = { display: u === "horizontal" ? "inline-block" : "block", marginRight: 10 },
              h = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
            return a.map(function (p, y) {
              var v = p.formatter || s,
                d = ee(
                  An(
                    An({ "recharts-legend-item": !0 }, "legend-item-".concat(y), !0),
                    "inactive",
                    p.inactive,
                  ),
                );
              if (p.type === "none") return null;
              var b = X(p.value) ? null : p.value;
              xt(
                !X(p.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var x = p.inactive ? c : p.color;
              return A.createElement(
                "li",
                xl({ className: d, style: l, key: "legend-item-".concat(y) }, $i(n.props, p, y)),
                A.createElement(dl, { width: o, height: o, viewBox: f, style: h }, n.renderIcon(p)),
                A.createElement(
                  "span",
                  { className: "recharts-legend-item-text", style: { color: x } },
                  v ? v(b, p, y) : b,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align;
            if (!i || !i.length) return null;
            var u = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
            return A.createElement(
              "ul",
              { className: "recharts-default-legend", style: u },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(q.PureComponent);
An(Ff, "displayName", "Legend");
An(Ff, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var Su, ap;
function V1() {
  if (ap) return Su;
  ap = 1;
  var e = $a();
  function t() {
    ((this.__data__ = new e()), (this.size = 0));
  }
  return ((Su = t), Su);
}
var Au, op;
function X1() {
  if (op) return Au;
  op = 1;
  function e(t) {
    var r = this.__data__,
      n = r.delete(t);
    return ((this.size = r.size), n);
  }
  return ((Au = e), Au);
}
var Pu, up;
function Y1() {
  if (up) return Pu;
  up = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ((Pu = e), Pu);
}
var Tu, sp;
function Z1() {
  if (sp) return Tu;
  sp = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ((Tu = e), Tu);
}
var Eu, cp;
function J1() {
  if (cp) return Eu;
  cp = 1;
  var e = $a(),
    t = $f(),
    r = Cf(),
    n = 200;
  function i(a, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var s = u.__data__;
      if (!t || s.length < n - 1) return (s.push([a, o]), (this.size = ++u.size), this);
      u = this.__data__ = new r(s);
    }
    return (u.set(a, o), (this.size = u.size), this);
  }
  return ((Eu = i), Eu);
}
var ju, lp;
function Hb() {
  if (lp) return ju;
  lp = 1;
  var e = $a(),
    t = V1(),
    r = X1(),
    n = Y1(),
    i = Z1(),
    a = J1();
  function o(u) {
    var s = (this.__data__ = new e(u));
    this.size = s.size;
  }
  return (
    (o.prototype.clear = t),
    (o.prototype.delete = r),
    (o.prototype.get = n),
    (o.prototype.has = i),
    (o.prototype.set = a),
    (ju = o),
    ju
  );
}
var Mu, fp;
function Q1() {
  if (fp) return Mu;
  fp = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return (this.__data__.set(r, e), this);
  }
  return ((Mu = t), Mu);
}
var $u, hp;
function e_() {
  if (hp) return $u;
  hp = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (($u = e), $u);
}
var Cu, dp;
function Gb() {
  if (dp) return Cu;
  dp = 1;
  var e = Cf(),
    t = Q1(),
    r = e_();
  function n(i) {
    var a = -1,
      o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; ) this.add(i[a]);
  }
  return ((n.prototype.add = n.prototype.push = t), (n.prototype.has = r), (Cu = n), Cu);
}
var Iu, pp;
function Kb() {
  if (pp) return Iu;
  pp = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; ) if (r(t[n], n, t)) return !0;
    return !1;
  }
  return ((Iu = e), Iu);
}
var ku, vp;
function Vb() {
  if (vp) return ku;
  vp = 1;
  function e(t, r) {
    return t.has(r);
  }
  return ((ku = e), ku);
}
var Nu, yp;
function Xb() {
  if (yp) return Nu;
  yp = 1;
  var e = Gb(),
    t = Kb(),
    r = Vb(),
    n = 1,
    i = 2;
  function a(o, u, s, c, f, l) {
    var h = s & n,
      p = o.length,
      y = u.length;
    if (p != y && !(h && y > p)) return !1;
    var v = l.get(o),
      d = l.get(u);
    if (v && d) return v == u && d == o;
    var b = -1,
      x = !0,
      w = s & i ? new e() : void 0;
    for (l.set(o, u), l.set(u, o); ++b < p; ) {
      var O = o[b],
        m = u[b];
      if (c) var g = h ? c(m, O, b, u, o, l) : c(O, m, b, o, u, l);
      if (g !== void 0) {
        if (g) continue;
        x = !1;
        break;
      }
      if (w) {
        if (
          !t(u, function (_, S) {
            if (!r(w, S) && (O === _ || f(O, _, s, c, l))) return w.push(S);
          })
        ) {
          x = !1;
          break;
        }
      } else if (!(O === m || f(O, m, s, c, l))) {
        x = !1;
        break;
      }
    }
    return (l.delete(o), l.delete(u), x);
  }
  return ((Nu = a), Nu);
}
var Du, mp;
function t_() {
  if (mp) return Du;
  mp = 1;
  var e = ht(),
    t = e.Uint8Array;
  return ((Du = t), Du);
}
var Ru, gp;
function r_() {
  if (gp) return Ru;
  gp = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (i, a) {
        n[++r] = [a, i];
      }),
      n
    );
  }
  return ((Ru = e), Ru);
}
var qu, bp;
function Wf() {
  if (bp) return qu;
  bp = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (i) {
        n[++r] = i;
      }),
      n
    );
  }
  return ((qu = e), qu);
}
var Lu, xp;
function n_() {
  if (xp) return Lu;
  xp = 1;
  var e = ai(),
    t = t_(),
    r = Mf(),
    n = Xb(),
    i = r_(),
    a = Wf(),
    o = 1,
    u = 2,
    s = "[object Boolean]",
    c = "[object Date]",
    f = "[object Error]",
    l = "[object Map]",
    h = "[object Number]",
    p = "[object RegExp]",
    y = "[object Set]",
    v = "[object String]",
    d = "[object Symbol]",
    b = "[object ArrayBuffer]",
    x = "[object DataView]",
    w = e ? e.prototype : void 0,
    O = w ? w.valueOf : void 0;
  function m(g, _, S, P, M, E, T) {
    switch (S) {
      case x:
        if (g.byteLength != _.byteLength || g.byteOffset != _.byteOffset) return !1;
        ((g = g.buffer), (_ = _.buffer));
      case b:
        return !(g.byteLength != _.byteLength || !E(new t(g), new t(_)));
      case s:
      case c:
      case h:
        return r(+g, +_);
      case f:
        return g.name == _.name && g.message == _.message;
      case p:
      case v:
        return g == _ + "";
      case l:
        var j = i;
      case y:
        var C = P & o;
        if ((j || (j = a), g.size != _.size && !C)) return !1;
        var $ = T.get(g);
        if ($) return $ == _;
        ((P |= u), T.set(g, _));
        var k = n(j(g), j(_), P, M, E, T);
        return (T.delete(g), k);
      case d:
        if (O) return O.call(g) == O.call(_);
    }
    return !1;
  }
  return ((Lu = m), Lu);
}
var Bu, wp;
function Yb() {
  if (wp) return Bu;
  wp = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; ) t[a + n] = r[n];
    return t;
  }
  return ((Bu = e), Bu);
}
var Fu, Op;
function i_() {
  if (Op) return Fu;
  Op = 1;
  var e = Yb(),
    t = Le();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return ((Fu = r), Fu);
}
var Wu, _p;
function a_() {
  if (_p) return Wu;
  _p = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var u = t[n];
      r(u, n, t) && (o[a++] = u);
    }
    return o;
  }
  return ((Wu = e), Wu);
}
var zu, Sp;
function o_() {
  if (Sp) return zu;
  Sp = 1;
  function e() {
    return [];
  }
  return ((zu = e), zu);
}
var Uu, Ap;
function u_() {
  if (Ap) return Uu;
  Ap = 1;
  var e = a_(),
    t = o_(),
    r = Object.prototype,
    n = r.propertyIsEnumerable,
    i = Object.getOwnPropertySymbols,
    a = i
      ? function (o) {
          return o == null
            ? []
            : ((o = Object(o)),
              e(i(o), function (u) {
                return n.call(o, u);
              }));
        }
      : t;
  return ((Uu = a), Uu);
}
var Hu, Pp;
function s_() {
  if (Pp) return Hu;
  Pp = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; ) i[n] = r(n);
    return i;
  }
  return ((Hu = e), Hu);
}
var Gu, Tp;
function c_() {
  if (Tp) return Gu;
  Tp = 1;
  var e = Pt(),
    t = Tt(),
    r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return ((Gu = n), Gu);
}
var Ku, Ep;
function zf() {
  if (Ep) return Ku;
  Ep = 1;
  var e = c_(),
    t = Tt(),
    r = Object.prototype,
    n = r.hasOwnProperty,
    i = r.propertyIsEnumerable,
    a = e(
      (function () {
        return arguments;
      })(),
    )
      ? e
      : function (o) {
          return t(o) && n.call(o, "callee") && !i.call(o, "callee");
        };
  return ((Ku = a), Ku);
}
var yn = { exports: {} },
  Vu,
  jp;
function l_() {
  if (jp) return Vu;
  jp = 1;
  function e() {
    return !1;
  }
  return ((Vu = e), Vu);
}
yn.exports;
var Mp;
function Zb() {
  return (
    Mp ||
      ((Mp = 1),
      (function (e, t) {
        var r = ht(),
          n = l_(),
          i = t && !t.nodeType && t,
          a = i && !0 && e && !e.nodeType && e,
          o = a && a.exports === i,
          u = o ? r.Buffer : void 0,
          s = u ? u.isBuffer : void 0,
          c = s || n;
        e.exports = c;
      })(yn, yn.exports)),
    yn.exports
  );
}
var Xu, $p;
function Uf() {
  if ($p) return Xu;
  $p = 1;
  var e = 9007199254740991,
    t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return (
      (i = i ?? e),
      !!i && (a == "number" || (a != "symbol" && t.test(n))) && n > -1 && n % 1 == 0 && n < i
    );
  }
  return ((Xu = r), Xu);
}
var Yu, Cp;
function Hf() {
  if (Cp) return Yu;
  Cp = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return ((Yu = t), Yu);
}
var Zu, Ip;
function f_() {
  if (Ip) return Zu;
  Ip = 1;
  var e = Pt(),
    t = Hf(),
    r = Tt(),
    n = "[object Arguments]",
    i = "[object Array]",
    a = "[object Boolean]",
    o = "[object Date]",
    u = "[object Error]",
    s = "[object Function]",
    c = "[object Map]",
    f = "[object Number]",
    l = "[object Object]",
    h = "[object RegExp]",
    p = "[object Set]",
    y = "[object String]",
    v = "[object WeakMap]",
    d = "[object ArrayBuffer]",
    b = "[object DataView]",
    x = "[object Float32Array]",
    w = "[object Float64Array]",
    O = "[object Int8Array]",
    m = "[object Int16Array]",
    g = "[object Int32Array]",
    _ = "[object Uint8Array]",
    S = "[object Uint8ClampedArray]",
    P = "[object Uint16Array]",
    M = "[object Uint32Array]",
    E = {};
  ((E[x] = E[w] = E[O] = E[m] = E[g] = E[_] = E[S] = E[P] = E[M] = !0),
    (E[n] =
      E[i] =
      E[d] =
      E[a] =
      E[b] =
      E[o] =
      E[u] =
      E[s] =
      E[c] =
      E[f] =
      E[l] =
      E[h] =
      E[p] =
      E[y] =
      E[v] =
        !1));
  function T(j) {
    return r(j) && t(j.length) && !!E[e(j)];
  }
  return ((Zu = T), Zu);
}
var Ju, kp;
function Jb() {
  if (kp) return Ju;
  kp = 1;
  function e(t) {
    return function (r) {
      return t(r);
    };
  }
  return ((Ju = e), Ju);
}
var mn = { exports: {} };
mn.exports;
var Np;
function h_() {
  return (
    Np ||
      ((Np = 1),
      (function (e, t) {
        var r = mb(),
          n = t && !t.nodeType && t,
          i = n && !0 && e && !e.nodeType && e,
          a = i && i.exports === n,
          o = a && r.process,
          u = (function () {
            try {
              var s = i && i.require && i.require("util").types;
              return s || (o && o.binding && o.binding("util"));
            } catch {}
          })();
        e.exports = u;
      })(mn, mn.exports)),
    mn.exports
  );
}
var Qu, Dp;
function Qb() {
  if (Dp) return Qu;
  Dp = 1;
  var e = f_(),
    t = Jb(),
    r = h_(),
    n = r && r.isTypedArray,
    i = n ? t(n) : e;
  return ((Qu = i), Qu);
}
var es, Rp;
function d_() {
  if (Rp) return es;
  Rp = 1;
  var e = s_(),
    t = zf(),
    r = Le(),
    n = Zb(),
    i = Uf(),
    a = Qb(),
    o = Object.prototype,
    u = o.hasOwnProperty;
  function s(c, f) {
    var l = r(c),
      h = !l && t(c),
      p = !l && !h && n(c),
      y = !l && !h && !p && a(c),
      v = l || h || p || y,
      d = v ? e(c.length, String) : [],
      b = d.length;
    for (var x in c)
      (f || u.call(c, x)) &&
        !(
          v &&
          (x == "length" ||
            (p && (x == "offset" || x == "parent")) ||
            (y && (x == "buffer" || x == "byteLength" || x == "byteOffset")) ||
            i(x, b))
        ) &&
        d.push(x);
    return d;
  }
  return ((es = s), es);
}
var ts, qp;
function p_() {
  if (qp) return ts;
  qp = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor,
      i = (typeof n == "function" && n.prototype) || e;
    return r === i;
  }
  return ((ts = t), ts);
}
var rs, Lp;
function e0() {
  if (Lp) return rs;
  Lp = 1;
  function e(t, r) {
    return function (n) {
      return t(r(n));
    };
  }
  return ((rs = e), rs);
}
var ns, Bp;
function v_() {
  if (Bp) return ns;
  Bp = 1;
  var e = e0(),
    t = e(Object.keys, Object);
  return ((ns = t), ns);
}
var is, Fp;
function y_() {
  if (Fp) return is;
  Fp = 1;
  var e = p_(),
    t = v_(),
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a) {
    if (!e(a)) return t(a);
    var o = [];
    for (var u in Object(a)) n.call(a, u) && u != "constructor" && o.push(u);
    return o;
  }
  return ((is = i), is);
}
var as, Wp;
function oi() {
  if (Wp) return as;
  Wp = 1;
  var e = jf(),
    t = Hf();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return ((as = r), as);
}
var os, zp;
function qa() {
  if (zp) return os;
  zp = 1;
  var e = d_(),
    t = y_(),
    r = oi();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return ((os = n), os);
}
var us, Up;
function m_() {
  if (Up) return us;
  Up = 1;
  var e = i_(),
    t = u_(),
    r = qa();
  function n(i) {
    return e(i, r, t);
  }
  return ((us = n), us);
}
var ss, Hp;
function g_() {
  if (Hp) return ss;
  Hp = 1;
  var e = m_(),
    t = 1,
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a, o, u, s, c, f) {
    var l = u & t,
      h = e(a),
      p = h.length,
      y = e(o),
      v = y.length;
    if (p != v && !l) return !1;
    for (var d = p; d--; ) {
      var b = h[d];
      if (!(l ? b in o : n.call(o, b))) return !1;
    }
    var x = f.get(a),
      w = f.get(o);
    if (x && w) return x == o && w == a;
    var O = !0;
    (f.set(a, o), f.set(o, a));
    for (var m = l; ++d < p; ) {
      b = h[d];
      var g = a[b],
        _ = o[b];
      if (s) var S = l ? s(_, g, b, o, a, f) : s(g, _, b, a, o, f);
      if (!(S === void 0 ? g === _ || c(g, _, u, s, f) : S)) {
        O = !1;
        break;
      }
      m || (m = b == "constructor");
    }
    if (O && !m) {
      var P = a.constructor,
        M = o.constructor;
      P != M &&
        "constructor" in a &&
        "constructor" in o &&
        !(typeof P == "function" && P instanceof P && typeof M == "function" && M instanceof M) &&
        (O = !1);
    }
    return (f.delete(a), f.delete(o), O);
  }
  return ((ss = i), ss);
}
var cs, Gp;
function b_() {
  if (Gp) return cs;
  Gp = 1;
  var e = or(),
    t = ht(),
    r = e(t, "DataView");
  return ((cs = r), cs);
}
var ls, Kp;
function x_() {
  if (Kp) return ls;
  Kp = 1;
  var e = or(),
    t = ht(),
    r = e(t, "Promise");
  return ((ls = r), ls);
}
var fs, Vp;
function t0() {
  if (Vp) return fs;
  Vp = 1;
  var e = or(),
    t = ht(),
    r = e(t, "Set");
  return ((fs = r), fs);
}
var hs, Xp;
function w_() {
  if (Xp) return hs;
  Xp = 1;
  var e = or(),
    t = ht(),
    r = e(t, "WeakMap");
  return ((hs = r), hs);
}
var ds, Yp;
function O_() {
  if (Yp) return ds;
  Yp = 1;
  var e = b_(),
    t = $f(),
    r = x_(),
    n = t0(),
    i = w_(),
    a = Pt(),
    o = gb(),
    u = "[object Map]",
    s = "[object Object]",
    c = "[object Promise]",
    f = "[object Set]",
    l = "[object WeakMap]",
    h = "[object DataView]",
    p = o(e),
    y = o(t),
    v = o(r),
    d = o(n),
    b = o(i),
    x = a;
  return (
    ((e && x(new e(new ArrayBuffer(1))) != h) ||
      (t && x(new t()) != u) ||
      (r && x(r.resolve()) != c) ||
      (n && x(new n()) != f) ||
      (i && x(new i()) != l)) &&
      (x = function (w) {
        var O = a(w),
          m = O == s ? w.constructor : void 0,
          g = m ? o(m) : "";
        if (g)
          switch (g) {
            case p:
              return h;
            case y:
              return u;
            case v:
              return c;
            case d:
              return f;
            case b:
              return l;
          }
        return O;
      }),
    (ds = x),
    ds
  );
}
var ps, Zp;
function __() {
  if (Zp) return ps;
  Zp = 1;
  var e = Hb(),
    t = Xb(),
    r = n_(),
    n = g_(),
    i = O_(),
    a = Le(),
    o = Zb(),
    u = Qb(),
    s = 1,
    c = "[object Arguments]",
    f = "[object Array]",
    l = "[object Object]",
    h = Object.prototype,
    p = h.hasOwnProperty;
  function y(v, d, b, x, w, O) {
    var m = a(v),
      g = a(d),
      _ = m ? f : i(v),
      S = g ? f : i(d);
    ((_ = _ == c ? l : _), (S = S == c ? l : S));
    var P = _ == l,
      M = S == l,
      E = _ == S;
    if (E && o(v)) {
      if (!o(d)) return !1;
      ((m = !0), (P = !1));
    }
    if (E && !P)
      return (O || (O = new e()), m || u(v) ? t(v, d, b, x, w, O) : r(v, d, _, b, x, w, O));
    if (!(b & s)) {
      var T = P && p.call(v, "__wrapped__"),
        j = M && p.call(d, "__wrapped__");
      if (T || j) {
        var C = T ? v.value() : v,
          $ = j ? d.value() : d;
        return (O || (O = new e()), w(C, $, b, x, O));
      }
    }
    return E ? (O || (O = new e()), n(v, d, b, x, w, O)) : !1;
  }
  return ((ps = y), ps);
}
var vs, Jp;
function Gf() {
  if (Jp) return vs;
  Jp = 1;
  var e = __(),
    t = Tt();
  function r(n, i, a, o, u) {
    return n === i
      ? !0
      : n == null || i == null || (!t(n) && !t(i))
        ? n !== n && i !== i
        : e(n, i, a, o, r, u);
  }
  return ((vs = r), vs);
}
var ys, Qp;
function S_() {
  if (Qp) return ys;
  Qp = 1;
  var e = Hb(),
    t = Gf(),
    r = 1,
    n = 2;
  function i(a, o, u, s) {
    var c = u.length,
      f = c,
      l = !s;
    if (a == null) return !f;
    for (a = Object(a); c--; ) {
      var h = u[c];
      if (l && h[2] ? h[1] !== a[h[0]] : !(h[0] in a)) return !1;
    }
    for (; ++c < f; ) {
      h = u[c];
      var p = h[0],
        y = a[p],
        v = h[1];
      if (l && h[2]) {
        if (y === void 0 && !(p in a)) return !1;
      } else {
        var d = new e();
        if (s) var b = s(y, v, p, a, o, d);
        if (!(b === void 0 ? t(v, y, r | n, s, d) : b)) return !1;
      }
    }
    return !0;
  }
  return ((ys = i), ys);
}
var ms, ev;
function r0() {
  if (ev) return ms;
  ev = 1;
  var e = Dt();
  function t(r) {
    return r === r && !e(r);
  }
  return ((ms = t), ms);
}
var gs, tv;
function A_() {
  if (tv) return gs;
  tv = 1;
  var e = r0(),
    t = qa();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a],
        u = n[o];
      i[a] = [o, u, e(u)];
    }
    return i;
  }
  return ((gs = r), gs);
}
var bs, rv;
function n0() {
  if (rv) return bs;
  rv = 1;
  function e(t, r) {
    return function (n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return ((bs = e), bs);
}
var xs, nv;
function P_() {
  if (nv) return xs;
  nv = 1;
  var e = S_(),
    t = A_(),
    r = n0();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2]
      ? r(a[0][0], a[0][1])
      : function (o) {
          return o === i || e(o, i, a);
        };
  }
  return ((xs = n), xs);
}
var ws, iv;
function T_() {
  if (iv) return ws;
  iv = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return ((ws = e), ws);
}
var Os, av;
function E_() {
  if (av) return Os;
  av = 1;
  var e = wb(),
    t = zf(),
    r = Le(),
    n = Uf(),
    i = Hf(),
    a = Ia();
  function o(u, s, c) {
    s = e(s, u);
    for (var f = -1, l = s.length, h = !1; ++f < l; ) {
      var p = a(s[f]);
      if (!(h = u != null && c(u, p))) break;
      u = u[p];
    }
    return h || ++f != l
      ? h
      : ((l = u == null ? 0 : u.length), !!l && i(l) && n(p, l) && (r(u) || t(u)));
  }
  return ((Os = o), Os);
}
var _s, ov;
function j_() {
  if (ov) return _s;
  ov = 1;
  var e = T_(),
    t = E_();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return ((_s = r), _s);
}
var Ss, uv;
function M_() {
  if (uv) return Ss;
  uv = 1;
  var e = Gf(),
    t = Ob(),
    r = j_(),
    n = Ef(),
    i = r0(),
    a = n0(),
    o = Ia(),
    u = 1,
    s = 2;
  function c(f, l) {
    return n(f) && i(l)
      ? a(o(f), l)
      : function (h) {
          var p = t(h, f);
          return p === void 0 && p === l ? r(h, f) : e(l, p, u | s);
        };
  }
  return ((Ss = c), Ss);
}
var As, sv;
function Qr() {
  if (sv) return As;
  sv = 1;
  function e(t) {
    return t;
  }
  return ((As = e), As);
}
var Ps, cv;
function $_() {
  if (cv) return Ps;
  cv = 1;
  function e(t) {
    return function (r) {
      return r == null ? void 0 : r[t];
    };
  }
  return ((Ps = e), Ps);
}
var Ts, lv;
function C_() {
  if (lv) return Ts;
  lv = 1;
  var e = kf();
  function t(r) {
    return function (n) {
      return e(n, r);
    };
  }
  return ((Ts = t), Ts);
}
var Es, fv;
function I_() {
  if (fv) return Es;
  fv = 1;
  var e = $_(),
    t = C_(),
    r = Ef(),
    n = Ia();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return ((Es = i), Es);
}
var js, hv;
function Rt() {
  if (hv) return js;
  hv = 1;
  var e = P_(),
    t = M_(),
    r = Qr(),
    n = Le(),
    i = I_();
  function a(o) {
    return typeof o == "function"
      ? o
      : o == null
        ? r
        : typeof o == "object"
          ? n(o)
            ? t(o[0], o[1])
            : e(o)
          : i(o);
  }
  return ((js = a), js);
}
var Ms, dv;
function i0() {
  if (dv) return Ms;
  dv = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; ) if (r(t[o], o, t)) return o;
    return -1;
  }
  return ((Ms = e), Ms);
}
var $s, pv;
function k_() {
  if (pv) return $s;
  pv = 1;
  function e(t) {
    return t !== t;
  }
  return (($s = e), $s);
}
var Cs, vv;
function N_() {
  if (vv) return Cs;
  vv = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; ) if (t[i] === r) return i;
    return -1;
  }
  return ((Cs = e), Cs);
}
var Is, yv;
function D_() {
  if (yv) return Is;
  yv = 1;
  var e = i0(),
    t = k_(),
    r = N_();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return ((Is = n), Is);
}
var ks, mv;
function R_() {
  if (mv) return ks;
  mv = 1;
  var e = D_();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return ((ks = t), ks);
}
var Ns, gv;
function q_() {
  if (gv) return Ns;
  gv = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; ) if (n(r, t[i])) return !0;
    return !1;
  }
  return ((Ns = e), Ns);
}
var Ds, bv;
function L_() {
  if (bv) return Ds;
  bv = 1;
  function e() {}
  return ((Ds = e), Ds);
}
var Rs, xv;
function B_() {
  if (xv) return Rs;
  xv = 1;
  var e = t0(),
    t = L_(),
    r = Wf(),
    n = 1 / 0,
    i =
      e && 1 / r(new e([, -0]))[1] == n
        ? function (a) {
            return new e(a);
          }
        : t;
  return ((Rs = i), Rs);
}
var qs, wv;
function F_() {
  if (wv) return qs;
  wv = 1;
  var e = Gb(),
    t = R_(),
    r = q_(),
    n = Vb(),
    i = B_(),
    a = Wf(),
    o = 200;
  function u(s, c, f) {
    var l = -1,
      h = t,
      p = s.length,
      y = !0,
      v = [],
      d = v;
    if (f) ((y = !1), (h = r));
    else if (p >= o) {
      var b = c ? null : i(s);
      if (b) return a(b);
      ((y = !1), (h = n), (d = new e()));
    } else d = c ? [] : v;
    e: for (; ++l < p; ) {
      var x = s[l],
        w = c ? c(x) : x;
      if (((x = f || x !== 0 ? x : 0), y && w === w)) {
        for (var O = d.length; O--; ) if (d[O] === w) continue e;
        (c && d.push(w), v.push(x));
      } else h(d, w, f) || (d !== v && d.push(w), v.push(x));
    }
    return v;
  }
  return ((qs = u), qs);
}
var Ls, Ov;
function W_() {
  if (Ov) return Ls;
  Ov = 1;
  var e = Rt(),
    t = F_();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return ((Ls = r), Ls);
}
var z_ = W_();
const _v = le(z_);
function a0(e, t, r) {
  return t === !0 ? _v(e, r) : X(t) ? _v(e, t) : e;
}
function Tr(e) {
  "@babel/helpers - typeof";
  return (
    (Tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tr(e)
  );
}
var U_ = ["ref"];
function Sv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sv(Object(r), !0).forEach(function (n) {
          La(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function H_(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Av(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, u0(n.key), n));
  }
}
function G_(e, t, r) {
  return (
    t && Av(e.prototype, t),
    r && Av(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function K_(e, t, r) {
  return (
    (t = qi(t)),
    V_(e, o0() ? Reflect.construct(t, r || [], qi(e).constructor) : t.apply(e, r))
  );
}
function V_(e, t) {
  if (t && (Tr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return X_(e);
}
function X_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function o0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (o0 = function () {
    return !!e;
  })();
}
function qi(e) {
  return (
    (qi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    qi(e)
  );
}
function Y_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ol(e, t));
}
function Ol(e, t) {
  return (
    (Ol = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Ol(e, t)
  );
}
function La(e, t, r) {
  return (
    (t = u0(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function u0(e) {
  var t = Z_(e, "string");
  return Tr(t) == "symbol" ? t : t + "";
}
function Z_(e, t) {
  if (Tr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function J_(e, t) {
  if (e == null) return {};
  var r = Q_(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function Q_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function eS(e) {
  return e.value;
}
function tS(e, t) {
  if (A.isValidElement(e)) return A.cloneElement(e, t);
  if (typeof e == "function") return A.createElement(e, t);
  t.ref;
  var r = J_(t, U_);
  return A.createElement(Ff, r);
}
var Pv = 1,
  wr = (function (e) {
    function t() {
      var r;
      H_(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = K_(this, t, [].concat(i))),
        La(r, "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      Y_(t, e),
      G_(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > Pv ||
                    Math.abs(i.height - this.lastBoundingBox.height) > Pv) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  n && n(i))
                : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0
                ? dt({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                u = i.verticalAlign,
                s = i.margin,
                c = i.chartWidth,
                f = i.chartHeight,
                l,
                h;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
              )
                if (o === "center" && a === "vertical") {
                  var p = this.getBBoxSnapshot();
                  l = { left: ((c || 0) - p.width) / 2 };
                } else
                  l = o === "right" ? { right: (s && s.right) || 0 } : { left: (s && s.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
              )
                if (u === "middle") {
                  var y = this.getBBoxSnapshot();
                  h = { top: ((f || 0) - y.height) / 2 };
                } else
                  h =
                    u === "bottom" ? { bottom: (s && s.bottom) || 0 } : { top: (s && s.top) || 0 };
              return dt(dt({}, l), h);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                u = i.height,
                s = i.wrapperStyle,
                c = i.payloadUniqBy,
                f = i.payload,
                l = dt(
                  dt(
                    { position: "absolute", width: o || "auto", height: u || "auto" },
                    this.getDefaultPosition(s),
                  ),
                  s,
                );
              return A.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: l,
                  ref: function (p) {
                    n.wrapperNode = p;
                  },
                },
                tS(a, dt(dt({}, this.props), {}, { payload: a0(f, c, eS) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, i) {
              var a = dt(dt({}, this.defaultProps), n.props),
                o = a.layout;
              return o === "vertical" && L(n.props.height)
                ? { height: n.props.height }
                : o === "horizontal"
                  ? { width: n.props.width || i }
                  : null;
            },
          },
        ],
      )
    );
  })(q.PureComponent);
La(wr, "displayName", "Legend");
La(wr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var Bs, Tv;
function rS() {
  if (Tv) return Bs;
  Tv = 1;
  var e = ai(),
    t = zf(),
    r = Le(),
    n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return ((Bs = i), Bs);
}
var Fs, Ev;
function s0() {
  if (Ev) return Fs;
  Ev = 1;
  var e = Yb(),
    t = rS();
  function r(n, i, a, o, u) {
    var s = -1,
      c = n.length;
    for (a || (a = t), u || (u = []); ++s < c; ) {
      var f = n[s];
      i > 0 && a(f) ? (i > 1 ? r(f, i - 1, a, o, u) : e(u, f)) : o || (u[u.length] = f);
    }
    return u;
  }
  return ((Fs = r), Fs);
}
var Ws, jv;
function nS() {
  if (jv) return Ws;
  jv = 1;
  function e(t) {
    return function (r, n, i) {
      for (var a = -1, o = Object(r), u = i(r), s = u.length; s--; ) {
        var c = u[t ? s : ++a];
        if (n(o[c], c, o) === !1) break;
      }
      return r;
    };
  }
  return ((Ws = e), Ws);
}
var zs, Mv;
function iS() {
  if (Mv) return zs;
  Mv = 1;
  var e = nS(),
    t = e();
  return ((zs = t), zs);
}
var Us, $v;
function c0() {
  if ($v) return Us;
  $v = 1;
  var e = iS(),
    t = qa();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return ((Us = r), Us);
}
var Hs, Cv;
function aS() {
  if (Cv) return Hs;
  Cv = 1;
  var e = oi();
  function t(r, n) {
    return function (i, a) {
      if (i == null) return i;
      if (!e(i)) return r(i, a);
      for (
        var o = i.length, u = n ? o : -1, s = Object(i);
        (n ? u-- : ++u < o) && a(s[u], u, s) !== !1;
      );
      return i;
    };
  }
  return ((Hs = t), Hs);
}
var Gs, Iv;
function Kf() {
  if (Iv) return Gs;
  Iv = 1;
  var e = c0(),
    t = aS(),
    r = t(e);
  return ((Gs = r), Gs);
}
var Ks, kv;
function l0() {
  if (kv) return Ks;
  kv = 1;
  var e = Kf(),
    t = oi();
  function r(n, i) {
    var a = -1,
      o = t(n) ? Array(n.length) : [];
    return (
      e(n, function (u, s, c) {
        o[++a] = i(u, s, c);
      }),
      o
    );
  }
  return ((Ks = r), Ks);
}
var Vs, Nv;
function oS() {
  if (Nv) return Vs;
  Nv = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; ) t[n] = t[n].value;
    return t;
  }
  return ((Vs = e), Vs);
}
var Xs, Dv;
function uS() {
  if (Dv) return Xs;
  Dv = 1;
  var e = Xr();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0,
        a = r === null,
        o = r === r,
        u = e(r),
        s = n !== void 0,
        c = n === null,
        f = n === n,
        l = e(n);
      if (
        (!c && !l && !u && r > n) ||
        (u && s && f && !c && !l) ||
        (a && s && f) ||
        (!i && f) ||
        !o
      )
        return 1;
      if (
        (!a && !u && !l && r < n) ||
        (l && i && o && !a && !u) ||
        (c && i && o) ||
        (!s && o) ||
        !f
      )
        return -1;
    }
    return 0;
  }
  return ((Xs = t), Xs);
}
var Ys, Rv;
function sS() {
  if (Rv) return Ys;
  Rv = 1;
  var e = uS();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, u = n.criteria, s = o.length, c = i.length; ++a < s; ) {
      var f = e(o[a], u[a]);
      if (f) {
        if (a >= c) return f;
        var l = i[a];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return ((Ys = t), Ys);
}
var Zs, qv;
function cS() {
  if (qv) return Zs;
  qv = 1;
  var e = If(),
    t = kf(),
    r = Rt(),
    n = l0(),
    i = oS(),
    a = Jb(),
    o = sS(),
    u = Qr(),
    s = Le();
  function c(f, l, h) {
    l.length
      ? (l = e(l, function (v) {
          return s(v)
            ? function (d) {
                return t(d, v.length === 1 ? v[0] : v);
              }
            : v;
        }))
      : (l = [u]);
    var p = -1;
    l = e(l, a(r));
    var y = n(f, function (v, d, b) {
      var x = e(l, function (w) {
        return w(v);
      });
      return { criteria: x, index: ++p, value: v };
    });
    return i(y, function (v, d) {
      return o(v, d, h);
    });
  }
  return ((Zs = c), Zs);
}
var Js, Lv;
function lS() {
  if (Lv) return Js;
  Lv = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return ((Js = e), Js);
}
var Qs, Bv;
function fS() {
  if (Bv) return Qs;
  Bv = 1;
  var e = lS(),
    t = Math.max;
  function r(n, i, a) {
    return (
      (i = t(i === void 0 ? n.length - 1 : i, 0)),
      function () {
        for (var o = arguments, u = -1, s = t(o.length - i, 0), c = Array(s); ++u < s; )
          c[u] = o[i + u];
        u = -1;
        for (var f = Array(i + 1); ++u < i; ) f[u] = o[u];
        return ((f[i] = a(c)), e(n, this, f));
      }
    );
  }
  return ((Qs = r), Qs);
}
var ec, Fv;
function hS() {
  if (Fv) return ec;
  Fv = 1;
  function e(t) {
    return function () {
      return t;
    };
  }
  return ((ec = e), ec);
}
var tc, Wv;
function f0() {
  if (Wv) return tc;
  Wv = 1;
  var e = or(),
    t = (function () {
      try {
        var r = e(Object, "defineProperty");
        return (r({}, "", {}), r);
      } catch {}
    })();
  return ((tc = t), tc);
}
var rc, zv;
function dS() {
  if (zv) return rc;
  zv = 1;
  var e = hS(),
    t = f0(),
    r = Qr(),
    n = t
      ? function (i, a) {
          return t(i, "toString", { configurable: !0, enumerable: !1, value: e(a), writable: !0 });
        }
      : r;
  return ((rc = n), rc);
}
var nc, Uv;
function pS() {
  if (Uv) return nc;
  Uv = 1;
  var e = 800,
    t = 16,
    r = Date.now;
  function n(i) {
    var a = 0,
      o = 0;
    return function () {
      var u = r(),
        s = t - (u - o);
      if (((o = u), s > 0)) {
        if (++a >= e) return arguments[0];
      } else a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return ((nc = n), nc);
}
var ic, Hv;
function vS() {
  if (Hv) return ic;
  Hv = 1;
  var e = dS(),
    t = pS(),
    r = t(e);
  return ((ic = r), ic);
}
var ac, Gv;
function yS() {
  if (Gv) return ac;
  Gv = 1;
  var e = Qr(),
    t = fS(),
    r = vS();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return ((ac = n), ac);
}
var oc, Kv;
function Ba() {
  if (Kv) return oc;
  Kv = 1;
  var e = Mf(),
    t = oi(),
    r = Uf(),
    n = Dt();
  function i(a, o, u) {
    if (!n(u)) return !1;
    var s = typeof o;
    return (s == "number" ? t(u) && r(o, u.length) : s == "string" && o in u) ? e(u[o], a) : !1;
  }
  return ((oc = i), oc);
}
var uc, Vv;
function mS() {
  if (Vv) return uc;
  Vv = 1;
  var e = s0(),
    t = cS(),
    r = yS(),
    n = Ba(),
    i = r(function (a, o) {
      if (a == null) return [];
      var u = o.length;
      return (
        u > 1 && n(a, o[0], o[1]) ? (o = []) : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]),
        t(a, e(o, 1), [])
      );
    });
  return ((uc = i), uc);
}
var gS = mS();
const Vf = le(gS);
function Pn(e) {
  "@babel/helpers - typeof";
  return (
    (Pn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pn(e)
  );
}
function _l() {
  return (
    (_l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _l.apply(this, arguments)
  );
}
function bS(e, t) {
  return _S(e) || OS(e, t) || wS(e, t) || xS();
}
function xS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wS(e, t) {
  if (e) {
    if (typeof e == "string") return Xv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xv(e, t);
  }
}
function Xv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OS(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function _S(e) {
  if (Array.isArray(e)) return e;
}
function Yv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yv(Object(r), !0).forEach(function (n) {
          SS(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function SS(e, t, r) {
  return (
    (t = AS(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function AS(e) {
  var t = PS(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function PS(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TS(e) {
  return Array.isArray(e) && _e(e[0]) && _e(e[1]) ? e.join(" ~ ") : e;
}
var ES = function (t) {
  var r = t.separator,
    n = r === void 0 ? " : " : r,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    u = o === void 0 ? {} : o,
    s = t.labelStyle,
    c = s === void 0 ? {} : s,
    f = t.payload,
    l = t.formatter,
    h = t.itemSorter,
    p = t.wrapperClassName,
    y = t.labelClassName,
    v = t.label,
    d = t.labelFormatter,
    b = t.accessibilityLayer,
    x = b === void 0 ? !1 : b,
    w = function () {
      if (f && f.length) {
        var T = { padding: 0, margin: 0 },
          j = (h ? Vf(f, h) : f).map(function (C, $) {
            if (C.type === "none") return null;
            var k = sc(
                { display: "block", paddingTop: 4, paddingBottom: 4, color: C.color || "#000" },
                u,
              ),
              N = C.formatter || l || TS,
              B = C.value,
              F = C.name,
              H = B,
              K = F;
            if (N && H != null && K != null) {
              var z = N(B, F, C, $, f);
              if (Array.isArray(z)) {
                var V = bS(z, 2);
                ((H = V[0]), (K = V[1]));
              } else H = z;
            }
            return A.createElement(
              "li",
              { className: "recharts-tooltip-item", key: "tooltip-item-".concat($), style: k },
              _e(K)
                ? A.createElement("span", { className: "recharts-tooltip-item-name" }, K)
                : null,
              _e(K)
                ? A.createElement("span", { className: "recharts-tooltip-item-separator" }, n)
                : null,
              A.createElement("span", { className: "recharts-tooltip-item-value" }, H),
              A.createElement("span", { className: "recharts-tooltip-item-unit" }, C.unit || ""),
            );
          });
        return A.createElement("ul", { className: "recharts-tooltip-item-list", style: T }, j);
      }
      return null;
    },
    O = sc(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      a,
    ),
    m = sc({ margin: 0 }, c),
    g = !Q(v),
    _ = g ? v : "",
    S = ee("recharts-default-tooltip", p),
    P = ee("recharts-tooltip-label", y);
  g && d && f !== void 0 && f !== null && (_ = d(v, f));
  var M = x ? { role: "status", "aria-live": "assertive" } : {};
  return A.createElement(
    "div",
    _l({ className: S, style: O }, M),
    A.createElement("p", { className: P, style: m }, A.isValidElement(_) ? _ : "".concat(_)),
    w(),
  );
};
function Tn(e) {
  "@babel/helpers - typeof";
  return (
    (Tn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tn(e)
  );
}
function yi(e, t, r) {
  return (
    (t = jS(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function jS(e) {
  var t = MS(e, "string");
  return Tn(t) == "symbol" ? t : t + "";
}
function MS(e, t) {
  if (Tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var on = "recharts-tooltip-wrapper",
  $S = { visibility: "hidden" };
function CS(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return ee(
    on,
    yi(
      yi(
        yi(
          yi({}, "".concat(on, "-right"), L(r) && t && L(t.x) && r >= t.x),
          "".concat(on, "-left"),
          L(r) && t && L(t.x) && r < t.x,
        ),
        "".concat(on, "-bottom"),
        L(n) && t && L(t.y) && n >= t.y,
      ),
      "".concat(on, "-top"),
      L(n) && t && L(t.y) && n < t.y,
    ),
  );
}
function Zv(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    u = e.tooltipDimension,
    s = e.viewBox,
    c = e.viewBoxDimension;
  if (a && L(a[n])) return a[n];
  var f = r[n] - u - i,
    l = r[n] + i;
  if (t[n]) return o[n] ? f : l;
  if (o[n]) {
    var h = f,
      p = s[n];
    return h < p ? Math.max(l, s[n]) : Math.max(f, s[n]);
  }
  var y = l + u,
    v = s[n] + c;
  return y > v ? Math.max(f, s[n]) : Math.max(l, s[n]);
}
function IS(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function kS(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    u = e.useTranslate3d,
    s = e.viewBox,
    c,
    f,
    l;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = Zv({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: s,
          viewBoxDimension: s.width,
        })),
        (l = Zv({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: s,
          viewBoxDimension: s.height,
        })),
        (c = IS({ translateX: f, translateY: l, useTranslate3d: u })))
      : (c = $S),
    { cssProperties: c, cssClasses: CS({ translateX: f, translateY: l, coordinate: r }) }
  );
}
function Er(e) {
  "@babel/helpers - typeof";
  return (
    (Er =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Er(e)
  );
}
function Jv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Qv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jv(Object(r), !0).forEach(function (n) {
          Al(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function NS(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function DS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, d0(n.key), n));
  }
}
function RS(e, t, r) {
  return (t && DS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function qS(e, t, r) {
  return (
    (t = Li(t)),
    LS(e, h0() ? Reflect.construct(t, r || [], Li(e).constructor) : t.apply(e, r))
  );
}
function LS(e, t) {
  if (t && (Er(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return BS(e);
}
function BS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function h0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (h0 = function () {
    return !!e;
  })();
}
function Li(e) {
  return (
    (Li = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Li(e)
  );
}
function FS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Sl(e, t));
}
function Sl(e, t) {
  return (
    (Sl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Sl(e, t)
  );
}
function Al(e, t, r) {
  return (
    (t = d0(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function d0(e) {
  var t = WS(e, "string");
  return Er(t) == "symbol" ? t : t + "";
}
function WS(e, t) {
  if (Er(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Er(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ey = 1,
  zS = (function (e) {
    function t() {
      var r;
      NS(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
      return (
        (r = qS(this, t, [].concat(i))),
        Al(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Al(r, "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var u, s, c, f;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null &&
                  u !== void 0
                    ? u
                    : 0,
                y:
                  (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null &&
                  c !== void 0
                    ? c
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      FS(t, e),
      RS(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > ey ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > ey) &&
                this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            (document.addEventListener("keydown", this.handleKeyDown), this.updateBBox());
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, i;
            (this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !==
                  this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !==
                    this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1));
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              u = i.animationDuration,
              s = i.animationEasing,
              c = i.children,
              f = i.coordinate,
              l = i.hasPayload,
              h = i.isAnimationActive,
              p = i.offset,
              y = i.position,
              v = i.reverseDirection,
              d = i.useTranslate3d,
              b = i.viewBox,
              x = i.wrapperStyle,
              w = kS({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: p,
                position: y,
                reverseDirection: v,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: d,
                viewBox: b,
              }),
              O = w.cssClasses,
              m = w.cssProperties,
              g = Qv(
                Qv({ transition: h && a ? "transform ".concat(u, "ms ").concat(s) : void 0 }, m),
                {},
                {
                  pointerEvents: "none",
                  visibility: !this.state.dismissed && a && l ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                x,
              );
            return A.createElement(
              "div",
              {
                tabIndex: -1,
                className: O,
                style: g,
                ref: function (S) {
                  n.wrapperNode = S;
                },
              },
              c,
            );
          },
        },
      ])
    );
  })(q.PureComponent),
  US = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  ur = { isSsr: US() };
function jr(e) {
  "@babel/helpers - typeof";
  return (
    (jr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jr(e)
  );
}
function ty(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ry(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ty(Object(r), !0).forEach(function (n) {
          Xf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ty(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function HS(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function GS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, v0(n.key), n));
  }
}
function KS(e, t, r) {
  return (t && GS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function VS(e, t, r) {
  return (
    (t = Bi(t)),
    XS(e, p0() ? Reflect.construct(t, r || [], Bi(e).constructor) : t.apply(e, r))
  );
}
function XS(e, t) {
  if (t && (jr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return YS(e);
}
function YS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function p0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (p0 = function () {
    return !!e;
  })();
}
function Bi(e) {
  return (
    (Bi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Bi(e)
  );
}
function ZS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Pl(e, t));
}
function Pl(e, t) {
  return (
    (Pl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Pl(e, t)
  );
}
function Xf(e, t, r) {
  return (
    (t = v0(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function v0(e) {
  var t = JS(e, "string");
  return jr(t) == "symbol" ? t : t + "";
}
function JS(e, t) {
  if (jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function QS(e) {
  return e.dataKey;
}
function eA(e, t) {
  return A.isValidElement(e)
    ? A.cloneElement(e, t)
    : typeof e == "function"
      ? A.createElement(e, t)
      : A.createElement(ES, t);
}
var Re = (function (e) {
  function t() {
    return (HS(this, t), VS(this, t, arguments));
  }
  return (
    ZS(t, e),
    KS(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            u = i.animationDuration,
            s = i.animationEasing,
            c = i.content,
            f = i.coordinate,
            l = i.filterNull,
            h = i.isAnimationActive,
            p = i.offset,
            y = i.payload,
            v = i.payloadUniqBy,
            d = i.position,
            b = i.reverseDirection,
            x = i.useTranslate3d,
            w = i.viewBox,
            O = i.wrapperStyle,
            m = y ?? [];
          l &&
            m.length &&
            (m = a0(
              y.filter(function (_) {
                return _.value != null && (_.hide !== !0 || n.props.includeHidden);
              }),
              v,
              QS,
            ));
          var g = m.length > 0;
          return A.createElement(
            zS,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: s,
              isAnimationActive: h,
              active: a,
              coordinate: f,
              hasPayload: g,
              offset: p,
              position: d,
              reverseDirection: b,
              useTranslate3d: x,
              viewBox: w,
              wrapperStyle: O,
            },
            eA(c, ry(ry({}, this.props), {}, { payload: m })),
          );
        },
      },
    ])
  );
})(q.PureComponent);
Xf(Re, "displayName", "Tooltip");
Xf(Re, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !ur.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
var cc, ny;
function tA() {
  if (ny) return cc;
  ny = 1;
  var e = ht(),
    t = function () {
      return e.Date.now();
    };
  return ((cc = t), cc);
}
var lc, iy;
function rA() {
  if (iy) return lc;
  iy = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); );
    return n;
  }
  return ((lc = t), lc);
}
var fc, ay;
function nA() {
  if (ay) return fc;
  ay = 1;
  var e = rA(),
    t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return ((fc = r), fc);
}
var hc, oy;
function y0() {
  if (oy) return hc;
  oy = 1;
  var e = nA(),
    t = Dt(),
    r = Xr(),
    n = NaN,
    i = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    u = parseInt;
  function s(c) {
    if (typeof c == "number") return c;
    if (r(c)) return n;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string") return c === 0 ? c : +c;
    c = e(c);
    var l = a.test(c);
    return l || o.test(c) ? u(c.slice(2), l ? 2 : 8) : i.test(c) ? n : +c;
  }
  return ((hc = s), hc);
}
var dc, uy;
function iA() {
  if (uy) return dc;
  uy = 1;
  var e = Dt(),
    t = tA(),
    r = y0(),
    n = "Expected a function",
    i = Math.max,
    a = Math.min;
  function o(u, s, c) {
    var f,
      l,
      h,
      p,
      y,
      v,
      d = 0,
      b = !1,
      x = !1,
      w = !0;
    if (typeof u != "function") throw new TypeError(n);
    ((s = r(s) || 0),
      e(c) &&
        ((b = !!c.leading),
        (x = "maxWait" in c),
        (h = x ? i(r(c.maxWait) || 0, s) : h),
        (w = "trailing" in c ? !!c.trailing : w)));
    function O(j) {
      var C = f,
        $ = l;
      return ((f = l = void 0), (d = j), (p = u.apply($, C)), p);
    }
    function m(j) {
      return ((d = j), (y = setTimeout(S, s)), b ? O(j) : p);
    }
    function g(j) {
      var C = j - v,
        $ = j - d,
        k = s - C;
      return x ? a(k, h - $) : k;
    }
    function _(j) {
      var C = j - v,
        $ = j - d;
      return v === void 0 || C >= s || C < 0 || (x && $ >= h);
    }
    function S() {
      var j = t();
      if (_(j)) return P(j);
      y = setTimeout(S, g(j));
    }
    function P(j) {
      return ((y = void 0), w && f ? O(j) : ((f = l = void 0), p));
    }
    function M() {
      (y !== void 0 && clearTimeout(y), (d = 0), (f = v = l = y = void 0));
    }
    function E() {
      return y === void 0 ? p : P(t());
    }
    function T() {
      var j = t(),
        C = _(j);
      if (((f = arguments), (l = this), (v = j), C)) {
        if (y === void 0) return m(v);
        if (x) return (clearTimeout(y), (y = setTimeout(S, s)), O(v));
      }
      return (y === void 0 && (y = setTimeout(S, s)), p);
    }
    return ((T.cancel = M), (T.flush = E), T);
  }
  return ((dc = o), dc);
}
var pc, sy;
function aA() {
  if (sy) return pc;
  sy = 1;
  var e = iA(),
    t = Dt(),
    r = "Expected a function";
  function n(i, a, o) {
    var u = !0,
      s = !0;
    if (typeof i != "function") throw new TypeError(r);
    return (
      t(o) && ((u = "leading" in o ? !!o.leading : u), (s = "trailing" in o ? !!o.trailing : s)),
      e(i, a, { leading: u, maxWait: a, trailing: s })
    );
  }
  return ((pc = n), pc);
}
var oA = aA();
const m0 = le(oA);
function En(e) {
  "@babel/helpers - typeof";
  return (
    (En =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    En(e)
  );
}
function cy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function mi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cy(Object(r), !0).forEach(function (n) {
          uA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function uA(e, t, r) {
  return (
    (t = sA(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function sA(e) {
  var t = cA(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function cA(e, t) {
  if (En(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (En(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lA(e, t) {
  return pA(e) || dA(e, t) || hA(e, t) || fA();
}
function fA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hA(e, t) {
  if (e) {
    if (typeof e == "string") return ly(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ly(e, t);
  }
}
function ly(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dA(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function pA(e) {
  if (Array.isArray(e)) return e;
}
var un = q.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      i = n === void 0 ? { width: -1, height: -1 } : n,
      a = e.width,
      o = a === void 0 ? "100%" : a,
      u = e.height,
      s = u === void 0 ? "100%" : u,
      c = e.minWidth,
      f = c === void 0 ? 0 : c,
      l = e.minHeight,
      h = e.maxHeight,
      p = e.children,
      y = e.debounce,
      v = y === void 0 ? 0 : y,
      d = e.id,
      b = e.className,
      x = e.onResize,
      w = e.style,
      O = w === void 0 ? {} : w,
      m = q.useRef(null),
      g = q.useRef();
    ((g.current = x),
      q.useImperativeHandle(t, function () {
        return Object.defineProperty(m.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported.",
              ),
              m.current
            );
          },
          configurable: !0,
        });
      }));
    var _ = q.useState({ containerWidth: i.width, containerHeight: i.height }),
      S = lA(_, 2),
      P = S[0],
      M = S[1],
      E = q.useCallback(function (j, C) {
        M(function ($) {
          var k = Math.round(j),
            N = Math.round(C);
          return $.containerWidth === k && $.containerHeight === N
            ? $
            : { containerWidth: k, containerHeight: N };
        });
      }, []);
    q.useEffect(
      function () {
        var j = function (F) {
          var H,
            K = F[0].contentRect,
            z = K.width,
            V = K.height;
          (E(z, V), (H = g.current) === null || H === void 0 || H.call(g, z, V));
        };
        v > 0 && (j = m0(j, v, { trailing: !0, leading: !1 }));
        var C = new ResizeObserver(j),
          $ = m.current.getBoundingClientRect(),
          k = $.width,
          N = $.height;
        return (
          E(k, N),
          C.observe(m.current),
          function () {
            C.disconnect();
          }
        );
      },
      [E, v],
    );
    var T = q.useMemo(
      function () {
        var j = P.containerWidth,
          C = P.containerHeight;
        if (j < 0 || C < 0) return null;
        (xt(
          Vt(o) || Vt(s),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          s,
        ),
          xt(!r || r > 0, "The aspect(%s) must be greater than zero.", r));
        var $ = Vt(o) ? j : o,
          k = Vt(s) ? C : s;
        (r && r > 0 && ($ ? (k = $ / r) : k && ($ = k * r), h && k > h && (k = h)),
          xt(
            $ > 0 || k > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            $,
            k,
            o,
            s,
            f,
            l,
            r,
          ));
        var N = !Array.isArray(p) && bt(p.type).endsWith("Chart");
        return A.Children.map(p, function (B) {
          return A.isValidElement(B)
            ? q.cloneElement(
                B,
                mi(
                  { width: $, height: k },
                  N
                    ? {
                        style: mi(
                          { height: "100%", width: "100%", maxHeight: k, maxWidth: $ },
                          B.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : B;
        });
      },
      [r, p, s, h, l, f, P, o],
    );
    return A.createElement(
      "div",
      {
        id: d ? "".concat(d) : void 0,
        className: ee("recharts-responsive-container", b),
        style: mi(mi({}, O), {}, { width: o, height: s, minWidth: f, minHeight: l, maxHeight: h }),
        ref: m,
      },
      T,
    );
  }),
  g0 = function (t) {
    return null;
  };
g0.displayName = "Cell";
function jn(e) {
  "@babel/helpers - typeof";
  return (
    (jn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jn(e)
  );
}
function fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fy(Object(r), !0).forEach(function (n) {
          vA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function vA(e, t, r) {
  return (
    (t = yA(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function yA(e) {
  var t = mA(e, "string");
  return jn(t) == "symbol" ? t : t + "";
}
function mA(e, t) {
  if (jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hr = { widthCache: {}, cacheCount: 0 },
  gA = 2e3,
  bA = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  hy = "recharts_measurement_span";
function xA(e) {
  var t = Tl({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var bn = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || ur.isSsr) return { width: 0, height: 0 };
    var n = xA(r),
      i = JSON.stringify({ text: t, copyStyle: n });
    if (hr.widthCache[i]) return hr.widthCache[i];
    try {
      var a = document.getElementById(hy);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", hy),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = Tl(Tl({}, bA), n);
      (Object.assign(a.style, o), (a.textContent = "".concat(t)));
      var u = a.getBoundingClientRect(),
        s = { width: u.width, height: u.height };
      return (
        (hr.widthCache[i] = s),
        ++hr.cacheCount > gA && ((hr.cacheCount = 0), (hr.widthCache = {})),
        s
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  wA = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function Mn(e) {
  "@babel/helpers - typeof";
  return (
    (Mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mn(e)
  );
}
function Fi(e, t) {
  return AA(e) || SA(e, t) || _A(e, t) || OA();
}
function OA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _A(e, t) {
  if (e) {
    if (typeof e == "string") return dy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dy(e, t);
  }
}
function dy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function SA(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function AA(e) {
  if (Array.isArray(e)) return e;
}
function PA(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function py(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, EA(n.key), n));
  }
}
function TA(e, t, r) {
  return (
    t && py(e.prototype, t),
    r && py(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function EA(e) {
  var t = jA(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function jA(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var vy = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  yy = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  MA = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  $A = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  b0 = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  CA = Object.keys(b0),
  mr = "NaN";
function IA(e, t) {
  return e * b0[t];
}
var gi = (function () {
  function e(t, r) {
    (PA(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !MA.test(r) && ((this.num = NaN), (this.unit = "")),
      CA.includes(r) && ((this.num = IA(t, r)), (this.unit = "px")));
  }
  return TA(
    e,
    [
      {
        key: "add",
        value: function (r) {
          return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (r) {
          return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: "divide",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (r) {
          var n,
            i = (n = $A.exec(r)) !== null && n !== void 0 ? n : [],
            a = Fi(i, 3),
            o = a[1],
            u = a[2];
          return new e(parseFloat(o), u ?? "");
        },
      },
    ],
  );
})();
function x0(e) {
  if (e.includes(mr)) return mr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = vy.exec(t)) !== null && r !== void 0 ? r : [],
      i = Fi(n, 4),
      a = i[1],
      o = i[2],
      u = i[3],
      s = gi.parse(a ?? ""),
      c = gi.parse(u ?? ""),
      f = o === "*" ? s.multiply(c) : s.divide(c);
    if (f.isNaN()) return mr;
    t = t.replace(vy, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l,
      h = (l = yy.exec(t)) !== null && l !== void 0 ? l : [],
      p = Fi(h, 4),
      y = p[1],
      v = p[2],
      d = p[3],
      b = gi.parse(y ?? ""),
      x = gi.parse(d ?? ""),
      w = v === "+" ? b.add(x) : b.subtract(x);
    if (w.isNaN()) return mr;
    t = t.replace(yy, w.toString());
  }
  return t;
}
var my = /\(([^()]*)\)/;
function kA(e) {
  for (var t = e; t.includes("("); ) {
    var r = my.exec(t),
      n = Fi(r, 2),
      i = n[1];
    t = t.replace(my, x0(i));
  }
  return t;
}
function NA(e) {
  var t = e.replace(/\s+/g, "");
  return ((t = kA(t)), (t = x0(t)), t);
}
function DA(e) {
  try {
    return NA(e);
  } catch {
    return mr;
  }
}
function vc(e) {
  var t = DA(e.slice(5, -1));
  return t === mr ? "" : t;
}
var RA = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  qA = ["dx", "dy", "angle", "className", "breakAll"];
function El() {
  return (
    (El = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    El.apply(this, arguments)
  );
}
function gy(e, t) {
  if (e == null) return {};
  var r = LA(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function LA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function by(e, t) {
  return zA(e) || WA(e, t) || FA(e, t) || BA();
}
function BA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FA(e, t) {
  if (e) {
    if (typeof e == "string") return xy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xy(e, t);
  }
}
function xy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function WA(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function zA(e) {
  if (Array.isArray(e)) return e;
}
var w0 = /[ \f\n\r\t\v\u2028\u2029]+/,
  O0 = function (t) {
    var r = t.children,
      n = t.breakAll,
      i = t.style;
    try {
      var a = [];
      Q(r) || (n ? (a = r.toString().split("")) : (a = r.toString().split(w0)));
      var o = a.map(function (s) {
          return { word: s, width: bn(s, i).width };
        }),
        u = n ? 0 : bn(" ", i).width;
      return { wordsWithComputedWidth: o, spaceWidth: u };
    } catch {
      return null;
    }
  },
  UA = function (t, r, n, i, a) {
    var o = t.maxLines,
      u = t.children,
      s = t.style,
      c = t.breakAll,
      f = L(o),
      l = u,
      h = function () {
        var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return $.reduce(function (k, N) {
          var B = N.word,
            F = N.width,
            H = k[k.length - 1];
          if (H && (i == null || a || H.width + F + n < Number(i)))
            (H.words.push(B), (H.width += F + n));
          else {
            var K = { words: [B], width: F };
            k.push(K);
          }
          return k;
        }, []);
      },
      p = h(r),
      y = function ($) {
        return $.reduce(function (k, N) {
          return k.width > N.width ? k : N;
        });
      };
    if (!f) return p;
    for (
      var v = "…",
        d = function ($) {
          var k = l.slice(0, $),
            N = O0({ breakAll: c, style: s, children: k + v }).wordsWithComputedWidth,
            B = h(N),
            F = B.length > o || y(B).width > Number(i);
          return [F, B];
        },
        b = 0,
        x = l.length - 1,
        w = 0,
        O;
      b <= x && w <= l.length - 1;
    ) {
      var m = Math.floor((b + x) / 2),
        g = m - 1,
        _ = d(g),
        S = by(_, 2),
        P = S[0],
        M = S[1],
        E = d(m),
        T = by(E, 1),
        j = T[0];
      if ((!P && !j && (b = m + 1), P && j && (x = m - 1), !P && j)) {
        O = M;
        break;
      }
      w++;
    }
    return O || p;
  },
  wy = function (t) {
    var r = Q(t) ? [] : t.toString().split(w0);
    return [{ words: r }];
  },
  HA = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      u = t.maxLines;
    if ((r || n) && !ur.isSsr) {
      var s,
        c,
        f = O0({ breakAll: o, children: i, style: a });
      if (f) {
        var l = f.wordsWithComputedWidth,
          h = f.spaceWidth;
        ((s = l), (c = h));
      } else return wy(i);
      return UA({ breakAll: o, children: i, maxLines: u, style: a }, s, c, r, n);
    }
    return wy(i);
  },
  Oy = "#808080",
  Wi = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      u = o === void 0 ? "1em" : o,
      s = t.capHeight,
      c = s === void 0 ? "0.71em" : s,
      f = t.scaleToFit,
      l = f === void 0 ? !1 : f,
      h = t.textAnchor,
      p = h === void 0 ? "start" : h,
      y = t.verticalAnchor,
      v = y === void 0 ? "end" : y,
      d = t.fill,
      b = d === void 0 ? Oy : d,
      x = gy(t, RA),
      w = q.useMemo(
        function () {
          return HA({
            breakAll: x.breakAll,
            children: x.children,
            maxLines: x.maxLines,
            scaleToFit: l,
            style: x.style,
            width: x.width,
          });
        },
        [x.breakAll, x.children, x.maxLines, l, x.style, x.width],
      ),
      O = x.dx,
      m = x.dy,
      g = x.angle,
      _ = x.className,
      S = x.breakAll,
      P = gy(x, qA);
    if (!_e(n) || !_e(a)) return null;
    var M = n + (L(O) ? O : 0),
      E = a + (L(m) ? m : 0),
      T;
    switch (v) {
      case "start":
        T = vc("calc(".concat(c, ")"));
        break;
      case "middle":
        T = vc(
          "calc("
            .concat((w.length - 1) / 2, " * -")
            .concat(u, " + (")
            .concat(c, " / 2))"),
        );
        break;
      default:
        T = vc("calc(".concat(w.length - 1, " * -").concat(u, ")"));
        break;
    }
    var j = [];
    if (l) {
      var C = w[0].width,
        $ = x.width;
      j.push("scale(".concat((L($) ? $ / C : 1) / C, ")"));
    }
    return (
      g && j.push("rotate(".concat(g, ", ").concat(M, ", ").concat(E, ")")),
      j.length && (P.transform = j.join(" ")),
      A.createElement(
        "text",
        El({}, Z(P, !0), {
          x: M,
          y: E,
          className: ee("recharts-text", _),
          textAnchor: p,
          fill: b.includes("url") ? Oy : b,
        }),
        w.map(function (k, N) {
          var B = k.words.join(S ? "" : " ");
          return A.createElement(
            "tspan",
            { x: M, dy: N === 0 ? T : u, key: "".concat(B, "-").concat(N) },
            B,
          );
        }),
      )
    );
  };
function Nt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function GA(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Yf(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = Nt), (r = (u, s) => Nt(e(u), s)), (n = (u, s) => e(u) - s))
    : ((t = e === Nt || e === GA ? e : KA), (r = e), (n = e));
  function i(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = (c + f) >>> 1;
        r(u[l], s) < 0 ? (c = l + 1) : (f = l);
      } while (c < f);
    }
    return c;
  }
  function a(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = (c + f) >>> 1;
        r(u[l], s) <= 0 ? (c = l + 1) : (f = l);
      } while (c < f);
    }
    return c;
  }
  function o(u, s, c = 0, f = u.length) {
    const l = i(u, s, c, f - 1);
    return l > c && n(u[l - 1], s) > -n(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function KA() {
  return 0;
}
function _0(e) {
  return e === null ? NaN : +e;
}
function* VA(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const XA = Yf(Nt),
  ui = XA.right;
Yf(_0).center;
class _y extends Map {
  constructor(t, r = JA) {
    if (
      (super(),
      Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: r } }),
      t != null)
    )
      for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Sy(this, t));
  }
  has(t) {
    return super.has(Sy(this, t));
  }
  set(t, r) {
    return super.set(YA(this, t), r);
  }
  delete(t) {
    return super.delete(ZA(this, t));
  }
}
function Sy({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function YA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function ZA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
}
function JA(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function QA(e = Nt) {
  if (e === Nt) return S0;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function S0(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const eP = Math.sqrt(50),
  tP = Math.sqrt(10),
  rP = Math.sqrt(2);
function zi(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= eP ? 10 : a >= tP ? 5 : a >= rP ? 2 : 1;
  let u, s, c;
  return (
    i < 0
      ? ((c = Math.pow(10, -i) / o),
        (u = Math.round(e * c)),
        (s = Math.round(t * c)),
        u / c < e && ++u,
        s / c > t && --s,
        (c = -c))
      : ((c = Math.pow(10, i) * o),
        (u = Math.round(e / c)),
        (s = Math.round(t / c)),
        u * c < e && ++u,
        s * c > t && --s),
    s < u && 0.5 <= r && r < 2 ? zi(e, t, r * 2) : [u, s, c]
  );
}
function jl(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [i, a, o] = n ? zi(t, e, r) : zi(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1,
    s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function Ml(e, t, r) {
  return ((t = +t), (e = +e), (r = +r), zi(e, t, r)[2]);
}
function $l(e, t, r) {
  ((t = +t), (e = +e), (r = +r));
  const n = t < e,
    i = n ? Ml(t, e, r) : Ml(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ay(e, t) {
  let r;
  for (const n of e) n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function Py(e, t) {
  let r;
  for (const n of e) n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function A0(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (i = i === void 0 ? S0 : QA(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1,
        c = t - r + 1,
        f = Math.log(s),
        l = 0.5 * Math.exp((2 * f) / 3),
        h = 0.5 * Math.sqrt((f * l * (s - l)) / s) * (c - s / 2 < 0 ? -1 : 1),
        p = Math.max(r, Math.floor(t - (c * l) / s + h)),
        y = Math.min(n, Math.floor(t + ((s - c) * l) / s + h));
      A0(e, t, p, y, i);
    }
    const a = e[t];
    let o = r,
      u = n;
    for (sn(e, r, t), i(e[n], a) > 0 && sn(e, r, n); o < u; ) {
      for (sn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    (i(e[r], a) === 0 ? sn(e, r, u) : (++u, sn(e, u, n)),
      u <= t && (r = u + 1),
      t <= u && (n = u - 1));
  }
  return e;
}
function sn(e, t, r) {
  const n = e[t];
  ((e[t] = e[r]), (e[r] = n));
}
function nP(e, t, r) {
  if (((e = Float64Array.from(VA(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return Py(e);
    if (t >= 1) return Ay(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = Ay(A0(e, a).subarray(0, a + 1)),
      u = Py(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function iP(e, t, r = _0) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function aP(e, t, r) {
  ((e = +e), (t = +t), (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r));
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Je(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Et(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      (this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t));
      break;
    }
  }
  return this;
}
const Cl = Symbol("implicit");
function Zf() {
  var e = new _y(),
    t = [],
    r = [],
    n = Cl;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Cl) return n;
      e.set(a, (o = t.push(a) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new _y()));
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Zf(t, r).unknown(n);
    }),
    Je.apply(i, arguments),
    i
  );
}
function $n() {
  var e = Zf().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    s = 0,
    c = 0,
    f = 0.5;
  delete e.unknown;
  function l() {
    var h = t().length,
      p = i < n,
      y = p ? i : n,
      v = p ? n : i;
    ((a = (v - y) / Math.max(1, h - s + c * 2)),
      u && (a = Math.floor(a)),
      (y += (v - y - a * (h - s)) * f),
      (o = a * (1 - s)),
      u && ((y = Math.round(y)), (o = Math.round(o))));
    var d = aP(h).map(function (b) {
      return y + a * b;
    });
    return r(p ? d.reverse() : d);
  }
  return (
    (e.domain = function (h) {
      return arguments.length ? (t(h), l()) : t();
    }),
    (e.range = function (h) {
      return arguments.length ? (([n, i] = h), (n = +n), (i = +i), l()) : [n, i];
    }),
    (e.rangeRound = function (h) {
      return (([n, i] = h), (n = +n), (i = +i), (u = !0), l());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (h) {
      return arguments.length ? ((u = !!h), l()) : u;
    }),
    (e.padding = function (h) {
      return arguments.length ? ((s = Math.min(1, (c = +h))), l()) : s;
    }),
    (e.paddingInner = function (h) {
      return arguments.length ? ((s = Math.min(1, h)), l()) : s;
    }),
    (e.paddingOuter = function (h) {
      return arguments.length ? ((c = +h), l()) : c;
    }),
    (e.align = function (h) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, h))), l()) : f;
    }),
    (e.copy = function () {
      return $n(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(f);
    }),
    Je.apply(l(), arguments)
  );
}
function P0(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return P0(t());
    }),
    e
  );
}
function xn() {
  return P0($n.apply(null, arguments).paddingInner(1));
}
function Jf(e, t, r) {
  ((e.prototype = t.prototype = r), (r.constructor = e));
}
function T0(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function si() {}
var Cn = 0.7,
  Ui = 1 / Cn,
  Or = "\\s*([+-]?\\d+)\\s*",
  In = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  st = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  oP = /^#([0-9a-f]{3,8})$/,
  uP = new RegExp(`^rgb\\(${Or},${Or},${Or}\\)$`),
  sP = new RegExp(`^rgb\\(${st},${st},${st}\\)$`),
  cP = new RegExp(`^rgba\\(${Or},${Or},${Or},${In}\\)$`),
  lP = new RegExp(`^rgba\\(${st},${st},${st},${In}\\)$`),
  fP = new RegExp(`^hsl\\(${In},${st},${st}\\)$`),
  hP = new RegExp(`^hsla\\(${In},${st},${st},${In}\\)$`),
  Ty = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Jf(si, kn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ey,
  formatHex: Ey,
  formatHex8: dP,
  formatHsl: pP,
  formatRgb: jy,
  toString: jy,
});
function Ey() {
  return this.rgb().formatHex();
}
function dP() {
  return this.rgb().formatHex8();
}
function pP() {
  return E0(this).formatHsl();
}
function jy() {
  return this.rgb().formatRgb();
}
function kn(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = oP.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? My(t)
          : r === 3
            ? new qe(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? bi((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : r === 4
                ? bi(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = uP.exec(e))
        ? new qe(t[1], t[2], t[3], 1)
        : (t = sP.exec(e))
          ? new qe((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = cP.exec(e))
            ? bi(t[1], t[2], t[3], t[4])
            : (t = lP.exec(e))
              ? bi((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = fP.exec(e))
                ? Iy(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = hP.exec(e))
                  ? Iy(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Ty.hasOwnProperty(e)
                    ? My(Ty[e])
                    : e === "transparent"
                      ? new qe(NaN, NaN, NaN, 0)
                      : null
  );
}
function My(e) {
  return new qe((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function bi(e, t, r, n) {
  return (n <= 0 && (e = t = r = NaN), new qe(e, t, r, n));
}
function vP(e) {
  return (
    e instanceof si || (e = kn(e)),
    e ? ((e = e.rgb()), new qe(e.r, e.g, e.b, e.opacity)) : new qe()
  );
}
function Il(e, t, r, n) {
  return arguments.length === 1 ? vP(e) : new qe(e, t, r, n ?? 1);
}
function qe(e, t, r, n) {
  ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
}
Jf(
  qe,
  Il,
  T0(si, {
    brighter(e) {
      return (
        (e = e == null ? Ui : Math.pow(Ui, e)),
        new qe(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Cn : Math.pow(Cn, e)),
        new qe(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new qe(Qt(this.r), Qt(this.g), Qt(this.b), Hi(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: $y,
    formatHex: $y,
    formatHex8: yP,
    formatRgb: Cy,
    toString: Cy,
  }),
);
function $y() {
  return `#${Xt(this.r)}${Xt(this.g)}${Xt(this.b)}`;
}
function yP() {
  return `#${Xt(this.r)}${Xt(this.g)}${Xt(this.b)}${Xt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Cy() {
  const e = Hi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qt(this.r)}, ${Qt(this.g)}, ${Qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Hi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Xt(e) {
  return ((e = Qt(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function Iy(e, t, r, n) {
  return (
    n <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
    new nt(e, t, r, n)
  );
}
function E0(e) {
  if (e instanceof nt) return new nt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof si || (e = kn(e)), !e)) return new nt();
  if (e instanceof nt) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    s = (a + i) / 2;
  return (
    u
      ? (t === a
          ? (o = (r - n) / u + (r < n) * 6)
          : r === a
            ? (o = (n - t) / u + 2)
            : (o = (t - r) / u + 4),
        (u /= s < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = s > 0 && s < 1 ? 0 : o),
    new nt(o, u, s, e.opacity)
  );
}
function mP(e, t, r, n) {
  return arguments.length === 1 ? E0(e) : new nt(e, t, r, n ?? 1);
}
function nt(e, t, r, n) {
  ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
}
Jf(
  nt,
  mP,
  T0(si, {
    brighter(e) {
      return (
        (e = e == null ? Ui : Math.pow(Ui, e)),
        new nt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Cn : Math.pow(Cn, e)),
        new nt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new qe(
        yc(e >= 240 ? e - 240 : e + 120, i, n),
        yc(e, i, n),
        yc(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    clamp() {
      return new nt(ky(this.h), xi(this.s), xi(this.l), Hi(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Hi(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${ky(this.h)}, ${xi(this.s) * 100}%, ${xi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function ky(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function xi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function yc(e, t, r) {
  return (
    (e < 60 ? t + ((r - t) * e) / 60 : e < 180 ? r : e < 240 ? t + ((r - t) * (240 - e)) / 60 : t) *
    255
  );
}
const Qf = (e) => () => e;
function gP(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function bP(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function xP(e) {
  return (e = +e) == 1
    ? j0
    : function (t, r) {
        return r - t ? bP(t, r, e) : Qf(isNaN(t) ? r : t);
      };
}
function j0(e, t) {
  var r = t - e;
  return r ? gP(e, r) : Qf(isNaN(e) ? t : e);
}
const Ny = (function e(t) {
  var r = xP(t);
  function n(i, a) {
    var o = r((i = Il(i)).r, (a = Il(a)).r),
      u = r(i.g, a.g),
      s = r(i.b, a.b),
      c = j0(i.opacity, a.opacity);
    return function (f) {
      return ((i.r = o(f)), (i.g = u(f)), (i.b = s(f)), (i.opacity = c(f)), i + "");
    };
  }
  return ((n.gamma = e), n);
})(1);
function wP(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function OP(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _P(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = en(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function SP(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return (r.setTime(e * (1 - n) + t * n), r);
    }
  );
}
function Gi(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function AP(e, t) {
  var r = {},
    n = {},
    i;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (i in t) i in e ? (r[i] = en(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var kl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  mc = new RegExp(kl.source, "g");
function PP(e) {
  return function () {
    return e;
  };
}
function TP(e) {
  return function (t) {
    return e(t) + "";
  };
}
function EP(e, t) {
  var r = (kl.lastIndex = mc.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    s = [];
  for (e = e + "", t = t + ""; (n = kl.exec(e)) && (i = mc.exec(t)); )
    ((a = i.index) > r && ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null), s.push({ i: o, x: Gi(n, i) })),
      (r = mc.lastIndex));
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? s[0]
        ? TP(s[0].x)
        : PP(t)
      : ((t = s.length),
        function (c) {
          for (var f = 0, l; f < t; ++f) u[(l = s[f]).i] = l.x(c);
          return u.join("");
        })
  );
}
function en(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? Qf(t)
    : (r === "number"
        ? Gi
        : r === "string"
          ? (n = kn(t))
            ? ((t = n), Ny)
            : EP
          : t instanceof kn
            ? Ny
            : t instanceof Date
              ? SP
              : OP(t)
                ? wP
                : Array.isArray(t)
                  ? _P
                  : (typeof t.valueOf != "function" && typeof t.toString != "function") || isNaN(t)
                    ? AP
                    : Gi)(e, t);
}
function eh(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function jP(e, t) {
  t === void 0 && ((t = e), (e = en));
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}
function MP(e) {
  return function () {
    return e;
  };
}
function Ki(e) {
  return +e;
}
var Dy = [0, 1];
function Ie(e) {
  return e;
}
function Nl(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : MP(isNaN(t) ? NaN : 0.5);
}
function $P(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function CP(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = Nl(i, n)), (a = r(o, a))) : ((n = Nl(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u));
    }
  );
}
function IP(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++o < n; )
    ((i[o] = Nl(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1])));
  return function (u) {
    var s = ui(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function ci(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Fa() {
  var e = Dy,
    t = Dy,
    r = en,
    n,
    i,
    a,
    o = Ie,
    u,
    s,
    c;
  function f() {
    var h = Math.min(e.length, t.length);
    return (o !== Ie && (o = $P(e[0], e[h - 1])), (u = h > 2 ? IP : CP), (s = c = null), l);
  }
  function l(h) {
    return h == null || isNaN((h = +h)) ? a : (s || (s = u(e.map(n), t, r)))(n(o(h)));
  }
  return (
    (l.invert = function (h) {
      return o(i((c || (c = u(t, e.map(n), Gi)))(h)));
    }),
    (l.domain = function (h) {
      return arguments.length ? ((e = Array.from(h, Ki)), f()) : e.slice();
    }),
    (l.range = function (h) {
      return arguments.length ? ((t = Array.from(h)), f()) : t.slice();
    }),
    (l.rangeRound = function (h) {
      return ((t = Array.from(h)), (r = eh), f());
    }),
    (l.clamp = function (h) {
      return arguments.length ? ((o = h ? !0 : Ie), f()) : o !== Ie;
    }),
    (l.interpolate = function (h) {
      return arguments.length ? ((r = h), f()) : r;
    }),
    (l.unknown = function (h) {
      return arguments.length ? ((a = h), l) : a;
    }),
    function (h, p) {
      return ((n = h), (i = p), f());
    }
  );
}
function th() {
  return Fa()(Ie, Ie);
}
function kP(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Vi(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function Mr(e) {
  return ((e = Vi(Math.abs(e))), e ? e[1] : NaN);
}
function NP(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], s = 0;
      i > 0 &&
      u > 0 &&
      (s + u + 1 > n && (u = Math.max(1, n - s)),
      a.push(r.substring((i -= u), i + u)),
      !((s += u + 1) > n));
    )
      u = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function DP(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var RP = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Nn(e) {
  if (!(t = RP.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new rh({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
Nn.prototype = rh.prototype;
function rh(e) {
  ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + ""));
}
rh.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function qP(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        (n === 0 && (n = r), (i = r));
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Xi;
function LP(e, t) {
  var r = Vi(e, t);
  if (!r) return ((Xi = void 0), e.toPrecision(t));
  var n = r[0],
    i = r[1],
    a = i - (Xi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join("0")
      : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + Vi(e, Math.max(0, t + a - 1))[0];
}
function Ry(e, t) {
  var r = Vi(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + "." + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join("0");
}
const qy = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: kP,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ry(e * 100, t),
  r: Ry,
  s: LP,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Ly(e) {
  return e;
}
var By = Array.prototype.map,
  Fy = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function BP(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Ly
        : NP(By.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? Ly : DP(By.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    u = e.minus === void 0 ? "−" : e.minus + "",
    s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l, h) {
    l = Nn(l);
    var p = l.fill,
      y = l.align,
      v = l.sign,
      d = l.symbol,
      b = l.zero,
      x = l.width,
      w = l.comma,
      O = l.precision,
      m = l.trim,
      g = l.type;
    (g === "n" ? ((w = !0), (g = "g")) : qy[g] || (O === void 0 && (O = 12), (m = !0), (g = "g")),
      (b || (p === "0" && y === "=")) && ((b = !0), (p = "0"), (y = "=")));
    var _ =
        (h && h.prefix !== void 0 ? h.prefix : "") +
        (d === "$" ? r : d === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : ""),
      S = (d === "$" ? n : /[%p]/.test(g) ? o : "") + (h && h.suffix !== void 0 ? h.suffix : ""),
      P = qy[g],
      M = /[defgprs%]/.test(g);
    O =
      O === void 0
        ? 6
        : /[gprs]/.test(g)
          ? Math.max(1, Math.min(21, O))
          : Math.max(0, Math.min(20, O));
    function E(T) {
      var j = _,
        C = S,
        $,
        k,
        N;
      if (g === "c") ((C = P(T) + C), (T = ""));
      else {
        T = +T;
        var B = T < 0 || 1 / T < 0;
        if (
          ((T = isNaN(T) ? s : P(Math.abs(T), O)),
          m && (T = qP(T)),
          B && +T == 0 && v !== "+" && (B = !1),
          (j = (B ? (v === "(" ? v : u) : v === "-" || v === "(" ? "" : v) + j),
          (C =
            (g === "s" && !isNaN(T) && Xi !== void 0 ? Fy[8 + Xi / 3] : "") +
            C +
            (B && v === "(" ? ")" : "")),
          M)
        ) {
          for ($ = -1, k = T.length; ++$ < k; )
            if (((N = T.charCodeAt($)), 48 > N || N > 57)) {
              ((C = (N === 46 ? i + T.slice($ + 1) : T.slice($)) + C), (T = T.slice(0, $)));
              break;
            }
        }
      }
      w && !b && (T = t(T, 1 / 0));
      var F = j.length + T.length + C.length,
        H = F < x ? new Array(x - F + 1).join(p) : "";
      switch ((w && b && ((T = t(H + T, H.length ? x - C.length : 1 / 0)), (H = "")), y)) {
        case "<":
          T = j + T + C + H;
          break;
        case "=":
          T = j + H + T + C;
          break;
        case "^":
          T = H.slice(0, (F = H.length >> 1)) + j + T + C + H.slice(F);
          break;
        default:
          T = H + j + T + C;
          break;
      }
      return a(T);
    }
    return (
      (E.toString = function () {
        return l + "";
      }),
      E
    );
  }
  function f(l, h) {
    var p = Math.max(-8, Math.min(8, Math.floor(Mr(h) / 3))) * 3,
      y = Math.pow(10, -p),
      v = c(((l = Nn(l)), (l.type = "f"), l), { suffix: Fy[8 + p / 3] });
    return function (d) {
      return v(y * d);
    };
  }
  return { format: c, formatPrefix: f };
}
var wi, nh, M0;
FP({ thousands: ",", grouping: [3], currency: ["$", ""] });
function FP(e) {
  return ((wi = BP(e)), (nh = wi.format), (M0 = wi.formatPrefix), wi);
}
function WP(e) {
  return Math.max(0, -Mr(Math.abs(e)));
}
function zP(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Mr(t) / 3))) * 3 - Mr(Math.abs(e)));
}
function UP(e, t) {
  return ((e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Mr(t) - Mr(e)) + 1);
}
function $0(e, t, r, n) {
  var i = $l(e, t, r),
    a;
  switch (((n = Nn(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (n.precision == null && !isNaN((a = zP(i, o))) && (n.precision = a), M0(n, o));
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = UP(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN((a = WP(i))) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return nh(n);
}
function qt(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return jl(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return $0(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        s,
        c,
        f = 10;
      for (u < o && ((c = o), (o = u), (u = c), (c = i), (i = a), (a = c)); f-- > 0; ) {
        if (((c = Ml(o, u, r)), c === s)) return ((n[i] = o), (n[a] = u), t(n));
        if (c > 0) ((o = Math.floor(o / c) * c), (u = Math.ceil(u / c) * c));
        else if (c < 0) ((o = Math.ceil(o * c) / c), (u = Math.floor(u * c) / c));
        else break;
        s = c;
      }
      return e;
    }),
    e
  );
}
function Yi() {
  var e = th();
  return (
    (e.copy = function () {
      return ci(e, Yi());
    }),
    Je.apply(e, arguments),
    qt(e)
  );
}
function C0(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, Ki)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return C0(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Ki) : [0, 1]),
    qt(r)
  );
}
function I0(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}
function Wy(e) {
  return Math.log(e);
}
function zy(e) {
  return Math.exp(e);
}
function HP(e) {
  return -Math.log(-e);
}
function GP(e) {
  return -Math.exp(-e);
}
function KP(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function VP(e) {
  return e === 10 ? KP : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function XP(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Uy(e) {
  return (t, r) => -e(-t, r);
}
function ih(e) {
  const t = e(Wy, zy),
    r = t.domain;
  let n = 10,
    i,
    a;
  function o() {
    return (
      (i = XP(n)),
      (a = VP(n)),
      r()[0] < 0 ? ((i = Uy(i)), (a = Uy(a)), e(HP, GP)) : e(Wy, zy),
      t
    );
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (t.ticks = (u) => {
      const s = r();
      let c = s[0],
        f = s[s.length - 1];
      const l = f < c;
      l && ([c, f] = [f, c]);
      let h = i(c),
        p = i(f),
        y,
        v;
      const d = u == null ? 10 : +u;
      let b = [];
      if (!(n % 1) && p - h < d) {
        if (((h = Math.floor(h)), (p = Math.ceil(p)), c > 0)) {
          for (; h <= p; ++h)
            for (y = 1; y < n; ++y)
              if (((v = h < 0 ? y / a(-h) : y * a(h)), !(v < c))) {
                if (v > f) break;
                b.push(v);
              }
        } else
          for (; h <= p; ++h)
            for (y = n - 1; y >= 1; --y)
              if (((v = h > 0 ? y / a(-h) : y * a(h)), !(v < c))) {
                if (v > f) break;
                b.push(v);
              }
        b.length * 2 < d && (b = jl(c, f, d));
      } else b = jl(h, p, Math.min(p - h, d)).map(a);
      return l ? b.reverse() : b;
    }),
    (t.tickFormat = (u, s) => {
      if (
        (u == null && (u = 10),
        s == null && (s = n === 10 ? "s" : ","),
        typeof s != "function" &&
          (!(n % 1) && (s = Nn(s)).precision == null && (s.trim = !0), (s = nh(s))),
        u === 1 / 0)
      )
        return s;
      const c = Math.max(1, (n * u) / t.ticks().length);
      return (f) => {
        let l = f / a(Math.round(i(f)));
        return (l * n < n - 0.5 && (l *= n), l <= c ? s(f) : "");
      };
    }),
    (t.nice = () =>
      r(I0(r(), { floor: (u) => a(Math.floor(i(u))), ceil: (u) => a(Math.ceil(i(u))) }))),
    t
  );
}
function k0() {
  const e = ih(Fa()).domain([1, 10]);
  return ((e.copy = () => ci(e, k0()).base(e.base())), Je.apply(e, arguments), e);
}
function Hy(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Gy(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ah(e) {
  var t = 1,
    r = e(Hy(t), Gy(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(Hy((t = +n)), Gy(t)) : t;
    }),
    qt(r)
  );
}
function N0() {
  var e = ah(Fa());
  return (
    (e.copy = function () {
      return ci(e, N0()).constant(e.constant());
    }),
    Je.apply(e, arguments)
  );
}
function Ky(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function YP(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function ZP(e) {
  return e < 0 ? -e * e : e * e;
}
function oh(e) {
  var t = e(Ie, Ie),
    r = 1;
  function n() {
    return r === 1 ? e(Ie, Ie) : r === 0.5 ? e(YP, ZP) : e(Ky(r), Ky(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    qt(t)
  );
}
function uh() {
  var e = oh(Fa());
  return (
    (e.copy = function () {
      return ci(e, uh()).exponent(e.exponent());
    }),
    Je.apply(e, arguments),
    e
  );
}
function JP() {
  return uh.apply(null, arguments).exponent(0.5);
}
function Vy(e) {
  return Math.sign(e) * e * e;
}
function QP(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function D0() {
  var e = th(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = QP(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(Vy(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length ? (e.range((t = Array.from(a, Ki)).map(Vy)), i) : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return D0(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Je.apply(i, arguments),
    qt(i)
  );
}
function R0() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = iP(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[ui(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o);
      return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
      return (e.sort(Nt), i());
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return R0().domain(e).range(t).unknown(n);
    }),
    Je.apply(a, arguments)
  );
}
function q0() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(s) {
    return s != null && s <= s ? i[ui(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (s) {
      return arguments.length ? (([e, t] = s), (e = +e), (t = +t), u()) : [e, t];
    }),
    (o.range = function (s) {
      return arguments.length ? ((r = (i = Array.from(s)).length - 1), u()) : i.slice();
    }),
    (o.invertExtent = function (s) {
      var c = i.indexOf(s);
      return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
    }),
    (o.unknown = function (s) {
      return (arguments.length && (a = s), o);
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return q0().domain([e, t]).range(i).unknown(a);
    }),
    Je.apply(qt(o), arguments)
  );
}
function L0() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[ui(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return L0().domain(e).range(t).unknown(r);
    }),
    Je.apply(i, arguments)
  );
}
const gc = new Date(),
  bc = new Date();
function Se(e, t, r, n) {
  function i(a) {
    return (e((a = arguments.length === 0 ? new Date() : new Date(+a))), a);
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        u = i.ceil(a);
      return a - o < u - a ? o : u;
    }),
    (i.offset = (a, o) => (t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a)),
    (i.range = (a, o, u) => {
      const s = [];
      if (((a = i.ceil(a)), (u = u == null ? 1 : Math.floor(u)), !(a < o) || !(u > 0))) return s;
      let c;
      do (s.push((c = new Date(+a))), t(a, u), e(a));
      while (c < a && a < o);
      return s;
    }),
    (i.filter = (a) =>
      Se(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, u) => {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (gc.setTime(+a), bc.setTime(+o), e(gc), e(bc), Math.floor(r(gc, bc)))),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0)
            : i
      ))),
    i
  );
}
const Zi = Se(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
Zi.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Se(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : Zi
);
Zi.range;
const yt = 1e3,
  Ve = yt * 60,
  mt = Ve * 60,
  _t = mt * 24,
  sh = _t * 7,
  Xy = _t * 30,
  xc = _t * 365,
  Yt = Se(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * yt);
    },
    (e, t) => (t - e) / yt,
    (e) => e.getUTCSeconds(),
  );
Yt.range;
const ch = Se(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * yt);
  },
  (e, t) => {
    e.setTime(+e + t * Ve);
  },
  (e, t) => (t - e) / Ve,
  (e) => e.getMinutes(),
);
ch.range;
const lh = Se(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Ve);
  },
  (e, t) => (t - e) / Ve,
  (e) => e.getUTCMinutes(),
);
lh.range;
const fh = Se(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * yt - e.getMinutes() * Ve);
  },
  (e, t) => {
    e.setTime(+e + t * mt);
  },
  (e, t) => (t - e) / mt,
  (e) => e.getHours(),
);
fh.range;
const hh = Se(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * mt);
  },
  (e, t) => (t - e) / mt,
  (e) => e.getUTCHours(),
);
hh.range;
const li = Se(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ve) / _t,
  (e) => e.getDate() - 1,
);
li.range;
const Wa = Se(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / _t,
  (e) => e.getUTCDate() - 1,
);
Wa.range;
const B0 = Se(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / _t,
  (e) => Math.floor(e / _t),
);
B0.range;
function sr(e) {
  return Se(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ve) / sh,
  );
}
const za = sr(0),
  Ji = sr(1),
  eT = sr(2),
  tT = sr(3),
  $r = sr(4),
  rT = sr(5),
  nT = sr(6);
za.range;
Ji.range;
eT.range;
tT.range;
$r.range;
rT.range;
nT.range;
function cr(e) {
  return Se(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)), t.setUTCHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / sh,
  );
}
const Ua = cr(0),
  Qi = cr(1),
  iT = cr(2),
  aT = cr(3),
  Cr = cr(4),
  oT = cr(5),
  uT = cr(6);
Ua.range;
Qi.range;
iT.range;
aT.range;
Cr.range;
oT.range;
uT.range;
const dh = Se(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
dh.range;
const ph = Se(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
ph.range;
const St = Se(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
St.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Se(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
St.range;
const At = Se(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
At.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Se(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
At.range;
function F0(e, t, r, n, i, a) {
  const o = [
    [Yt, 1, yt],
    [Yt, 5, 5 * yt],
    [Yt, 15, 15 * yt],
    [Yt, 30, 30 * yt],
    [a, 1, Ve],
    [a, 5, 5 * Ve],
    [a, 15, 15 * Ve],
    [a, 30, 30 * Ve],
    [i, 1, mt],
    [i, 3, 3 * mt],
    [i, 6, 6 * mt],
    [i, 12, 12 * mt],
    [n, 1, _t],
    [n, 2, 2 * _t],
    [r, 1, sh],
    [t, 1, Xy],
    [t, 3, 3 * Xy],
    [e, 1, xc],
  ];
  function u(c, f, l) {
    const h = f < c;
    h && ([c, f] = [f, c]);
    const p = l && typeof l.range == "function" ? l : s(c, f, l),
      y = p ? p.range(c, +f + 1) : [];
    return h ? y.reverse() : y;
  }
  function s(c, f, l) {
    const h = Math.abs(f - c) / l,
      p = Yf(([, , d]) => d).right(o, h);
    if (p === o.length) return e.every($l(c / xc, f / xc, l));
    if (p === 0) return Zi.every(Math.max($l(c, f, l), 1));
    const [y, v] = o[h / o[p - 1][2] < o[p][2] / h ? p - 1 : p];
    return y.every(v);
  }
  return [u, s];
}
const [sT, cT] = F0(At, ph, Ua, B0, hh, lh),
  [lT, fT] = F0(St, dh, za, li, fh, ch);
function wc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Oc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function cn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function hT(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    s = e.shortMonths,
    c = ln(i),
    f = fn(i),
    l = ln(a),
    h = fn(a),
    p = ln(o),
    y = fn(o),
    v = ln(u),
    d = fn(u),
    b = ln(s),
    x = fn(s),
    w = {
      a: N,
      A: B,
      b: F,
      B: H,
      c: null,
      d: tm,
      e: tm,
      f: NT,
      g: HT,
      G: KT,
      H: CT,
      I: IT,
      j: kT,
      L: W0,
      m: DT,
      M: RT,
      p: K,
      q: z,
      Q: im,
      s: am,
      S: qT,
      u: LT,
      U: BT,
      V: FT,
      w: WT,
      W: zT,
      x: null,
      X: null,
      y: UT,
      Y: GT,
      Z: VT,
      "%": nm,
    },
    O = {
      a: V,
      A: fe,
      b: ye,
      B: Be,
      c: null,
      d: rm,
      e: rm,
      f: JT,
      g: sE,
      G: lE,
      H: XT,
      I: YT,
      j: ZT,
      L: U0,
      m: QT,
      M: eE,
      p: Wt,
      q: Ne,
      Q: im,
      s: am,
      S: tE,
      u: rE,
      U: nE,
      V: iE,
      w: aE,
      W: oE,
      x: null,
      X: null,
      y: uE,
      Y: cE,
      Z: fE,
      "%": nm,
    },
    m = {
      a: M,
      A: E,
      b: T,
      B: j,
      c: C,
      d: Qy,
      e: Qy,
      f: ET,
      g: Jy,
      G: Zy,
      H: em,
      I: em,
      j: ST,
      L: TT,
      m: _T,
      M: AT,
      p: P,
      q: OT,
      Q: MT,
      s: $T,
      S: PT,
      u: mT,
      U: gT,
      V: bT,
      w: yT,
      W: xT,
      x: $,
      X: k,
      y: Jy,
      Y: Zy,
      Z: wT,
      "%": jT,
    };
  ((w.x = g(r, w)),
    (w.X = g(n, w)),
    (w.c = g(t, w)),
    (O.x = g(r, O)),
    (O.X = g(n, O)),
    (O.c = g(t, O)));
  function g(W, Y) {
    return function (J) {
      var D = [],
        pe = -1,
        te = 0,
        be = W.length,
        xe,
        De,
        jt;
      for (J instanceof Date || (J = new Date(+J)); ++pe < be; )
        W.charCodeAt(pe) === 37 &&
          (D.push(W.slice(te, pe)),
          (De = Yy[(xe = W.charAt(++pe))]) != null
            ? (xe = W.charAt(++pe))
            : (De = xe === "e" ? " " : "0"),
          (jt = Y[xe]) && (xe = jt(J, De)),
          D.push(xe),
          (te = pe + 1));
      return (D.push(W.slice(te, pe)), D.join(""));
    };
  }
  function _(W, Y) {
    return function (J) {
      var D = cn(1900, void 0, 1),
        pe = S(D, W, (J += ""), 0),
        te,
        be;
      if (pe != J.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (
        (Y && !("Z" in D) && (D.Z = 0),
        "p" in D && (D.H = (D.H % 12) + D.p * 12),
        D.m === void 0 && (D.m = "q" in D ? D.q : 0),
        "V" in D)
      ) {
        if (D.V < 1 || D.V > 53) return null;
        ("w" in D || (D.w = 1),
          "Z" in D
            ? ((te = Oc(cn(D.y, 0, 1))),
              (be = te.getUTCDay()),
              (te = be > 4 || be === 0 ? Qi.ceil(te) : Qi(te)),
              (te = Wa.offset(te, (D.V - 1) * 7)),
              (D.y = te.getUTCFullYear()),
              (D.m = te.getUTCMonth()),
              (D.d = te.getUTCDate() + ((D.w + 6) % 7)))
            : ((te = wc(cn(D.y, 0, 1))),
              (be = te.getDay()),
              (te = be > 4 || be === 0 ? Ji.ceil(te) : Ji(te)),
              (te = li.offset(te, (D.V - 1) * 7)),
              (D.y = te.getFullYear()),
              (D.m = te.getMonth()),
              (D.d = te.getDate() + ((D.w + 6) % 7))));
      } else
        ("W" in D || "U" in D) &&
          ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0),
          (be = "Z" in D ? Oc(cn(D.y, 0, 1)).getUTCDay() : wc(cn(D.y, 0, 1)).getDay()),
          (D.m = 0),
          (D.d =
            "W" in D
              ? ((D.w + 6) % 7) + D.W * 7 - ((be + 5) % 7)
              : D.w + D.U * 7 - ((be + 6) % 7)));
      return "Z" in D ? ((D.H += (D.Z / 100) | 0), (D.M += D.Z % 100), Oc(D)) : wc(D);
    };
  }
  function S(W, Y, J, D) {
    for (var pe = 0, te = Y.length, be = J.length, xe, De; pe < te; ) {
      if (D >= be) return -1;
      if (((xe = Y.charCodeAt(pe++)), xe === 37)) {
        if (
          ((xe = Y.charAt(pe++)),
          (De = m[xe in Yy ? Y.charAt(pe++) : xe]),
          !De || (D = De(W, J, D)) < 0)
        )
          return -1;
      } else if (xe != J.charCodeAt(D++)) return -1;
    }
    return D;
  }
  function P(W, Y, J) {
    var D = c.exec(Y.slice(J));
    return D ? ((W.p = f.get(D[0].toLowerCase())), J + D[0].length) : -1;
  }
  function M(W, Y, J) {
    var D = p.exec(Y.slice(J));
    return D ? ((W.w = y.get(D[0].toLowerCase())), J + D[0].length) : -1;
  }
  function E(W, Y, J) {
    var D = l.exec(Y.slice(J));
    return D ? ((W.w = h.get(D[0].toLowerCase())), J + D[0].length) : -1;
  }
  function T(W, Y, J) {
    var D = b.exec(Y.slice(J));
    return D ? ((W.m = x.get(D[0].toLowerCase())), J + D[0].length) : -1;
  }
  function j(W, Y, J) {
    var D = v.exec(Y.slice(J));
    return D ? ((W.m = d.get(D[0].toLowerCase())), J + D[0].length) : -1;
  }
  function C(W, Y, J) {
    return S(W, t, Y, J);
  }
  function $(W, Y, J) {
    return S(W, r, Y, J);
  }
  function k(W, Y, J) {
    return S(W, n, Y, J);
  }
  function N(W) {
    return o[W.getDay()];
  }
  function B(W) {
    return a[W.getDay()];
  }
  function F(W) {
    return s[W.getMonth()];
  }
  function H(W) {
    return u[W.getMonth()];
  }
  function K(W) {
    return i[+(W.getHours() >= 12)];
  }
  function z(W) {
    return 1 + ~~(W.getMonth() / 3);
  }
  function V(W) {
    return o[W.getUTCDay()];
  }
  function fe(W) {
    return a[W.getUTCDay()];
  }
  function ye(W) {
    return s[W.getUTCMonth()];
  }
  function Be(W) {
    return u[W.getUTCMonth()];
  }
  function Wt(W) {
    return i[+(W.getUTCHours() >= 12)];
  }
  function Ne(W) {
    return 1 + ~~(W.getUTCMonth() / 3);
  }
  return {
    format: function (W) {
      var Y = g((W += ""), w);
      return (
        (Y.toString = function () {
          return W;
        }),
        Y
      );
    },
    parse: function (W) {
      var Y = _((W += ""), !1);
      return (
        (Y.toString = function () {
          return W;
        }),
        Y
      );
    },
    utcFormat: function (W) {
      var Y = g((W += ""), O);
      return (
        (Y.toString = function () {
          return W;
        }),
        Y
      );
    },
    utcParse: function (W) {
      var Y = _((W += ""), !0);
      return (
        (Y.toString = function () {
          return W;
        }),
        Y
      );
    },
  };
}
var Yy = { "-": "", _: " ", 0: "0" },
  Pe = /^\s*\d+/,
  dT = /^%/,
  pT = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function vT(e) {
  return e.replace(pT, "\\$&");
}
function ln(e) {
  return new RegExp("^(?:" + e.map(vT).join("|") + ")", "i");
}
function fn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function yT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function mT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function gT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function bT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function xT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function Zy(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function Jy(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function wT(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length) : -1;
}
function OT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function _T(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function Qy(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function ST(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function em(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function AT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function PT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function TT(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function ET(e, t, r) {
  var n = Pe.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function jT(e, t, r) {
  var n = dT.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function MT(e, t, r) {
  var n = Pe.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function $T(e, t, r) {
  var n = Pe.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function tm(e, t) {
  return re(e.getDate(), t, 2);
}
function CT(e, t) {
  return re(e.getHours(), t, 2);
}
function IT(e, t) {
  return re(e.getHours() % 12 || 12, t, 2);
}
function kT(e, t) {
  return re(1 + li.count(St(e), e), t, 3);
}
function W0(e, t) {
  return re(e.getMilliseconds(), t, 3);
}
function NT(e, t) {
  return W0(e, t) + "000";
}
function DT(e, t) {
  return re(e.getMonth() + 1, t, 2);
}
function RT(e, t) {
  return re(e.getMinutes(), t, 2);
}
function qT(e, t) {
  return re(e.getSeconds(), t, 2);
}
function LT(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function BT(e, t) {
  return re(za.count(St(e) - 1, e), t, 2);
}
function z0(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? $r(e) : $r.ceil(e);
}
function FT(e, t) {
  return ((e = z0(e)), re($r.count(St(e), e) + (St(e).getDay() === 4), t, 2));
}
function WT(e) {
  return e.getDay();
}
function zT(e, t) {
  return re(Ji.count(St(e) - 1, e), t, 2);
}
function UT(e, t) {
  return re(e.getFullYear() % 100, t, 2);
}
function HT(e, t) {
  return ((e = z0(e)), re(e.getFullYear() % 100, t, 2));
}
function GT(e, t) {
  return re(e.getFullYear() % 1e4, t, 4);
}
function KT(e, t) {
  var r = e.getDay();
  return ((e = r >= 4 || r === 0 ? $r(e) : $r.ceil(e)), re(e.getFullYear() % 1e4, t, 4));
}
function VT(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : ((t *= -1), "+")) + re((t / 60) | 0, "0", 2) + re(t % 60, "0", 2);
}
function rm(e, t) {
  return re(e.getUTCDate(), t, 2);
}
function XT(e, t) {
  return re(e.getUTCHours(), t, 2);
}
function YT(e, t) {
  return re(e.getUTCHours() % 12 || 12, t, 2);
}
function ZT(e, t) {
  return re(1 + Wa.count(At(e), e), t, 3);
}
function U0(e, t) {
  return re(e.getUTCMilliseconds(), t, 3);
}
function JT(e, t) {
  return U0(e, t) + "000";
}
function QT(e, t) {
  return re(e.getUTCMonth() + 1, t, 2);
}
function eE(e, t) {
  return re(e.getUTCMinutes(), t, 2);
}
function tE(e, t) {
  return re(e.getUTCSeconds(), t, 2);
}
function rE(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function nE(e, t) {
  return re(Ua.count(At(e) - 1, e), t, 2);
}
function H0(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Cr(e) : Cr.ceil(e);
}
function iE(e, t) {
  return ((e = H0(e)), re(Cr.count(At(e), e) + (At(e).getUTCDay() === 4), t, 2));
}
function aE(e) {
  return e.getUTCDay();
}
function oE(e, t) {
  return re(Qi.count(At(e) - 1, e), t, 2);
}
function uE(e, t) {
  return re(e.getUTCFullYear() % 100, t, 2);
}
function sE(e, t) {
  return ((e = H0(e)), re(e.getUTCFullYear() % 100, t, 2));
}
function cE(e, t) {
  return re(e.getUTCFullYear() % 1e4, t, 4);
}
function lE(e, t) {
  var r = e.getUTCDay();
  return ((e = r >= 4 || r === 0 ? Cr(e) : Cr.ceil(e)), re(e.getUTCFullYear() % 1e4, t, 4));
}
function fE() {
  return "+0000";
}
function nm() {
  return "%";
}
function im(e) {
  return +e;
}
function am(e) {
  return Math.floor(+e / 1e3);
}
var dr, G0, K0;
hE({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
});
function hE(e) {
  return ((dr = hT(e)), (G0 = dr.format), dr.parse, (K0 = dr.utcFormat), dr.utcParse, dr);
}
function dE(e) {
  return new Date(e);
}
function pE(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function vh(e, t, r, n, i, a, o, u, s, c) {
  var f = th(),
    l = f.invert,
    h = f.domain,
    p = c(".%L"),
    y = c(":%S"),
    v = c("%I:%M"),
    d = c("%I %p"),
    b = c("%a %d"),
    x = c("%b %d"),
    w = c("%B"),
    O = c("%Y");
  function m(g) {
    return (
      s(g) < g
        ? p
        : u(g) < g
          ? y
          : o(g) < g
            ? v
            : a(g) < g
              ? d
              : n(g) < g
                ? i(g) < g
                  ? b
                  : x
                : r(g) < g
                  ? w
                  : O
    )(g);
  }
  return (
    (f.invert = function (g) {
      return new Date(l(g));
    }),
    (f.domain = function (g) {
      return arguments.length ? h(Array.from(g, pE)) : h().map(dE);
    }),
    (f.ticks = function (g) {
      var _ = h();
      return e(_[0], _[_.length - 1], g ?? 10);
    }),
    (f.tickFormat = function (g, _) {
      return _ == null ? m : c(_);
    }),
    (f.nice = function (g) {
      var _ = h();
      return (
        (!g || typeof g.range != "function") && (g = t(_[0], _[_.length - 1], g ?? 10)),
        g ? h(I0(_, g)) : f
      );
    }),
    (f.copy = function () {
      return ci(f, vh(e, t, r, n, i, a, o, u, s, c));
    }),
    f
  );
}
function vE() {
  return Je.apply(
    vh(lT, fT, St, dh, za, li, fh, ch, Yt, G0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
    arguments,
  );
}
function yE() {
  return Je.apply(
    vh(sT, cT, At, ph, Ua, Wa, hh, lh, Yt, K0).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
    arguments,
  );
}
function Ha() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = Ie,
    u = !1,
    s;
  function c(l) {
    return l == null || isNaN((l = +l))
      ? s
      : o(i === 0 ? 0.5 : ((l = (a(l) - r) * i), u ? Math.max(0, Math.min(1, l)) : l));
  }
  ((c.domain = function (l) {
    return arguments.length
      ? (([e, t] = l), (r = a((e = +e))), (n = a((t = +t))), (i = r === n ? 0 : 1 / (n - r)), c)
      : [e, t];
  }),
    (c.clamp = function (l) {
      return arguments.length ? ((u = !!l), c) : u;
    }),
    (c.interpolator = function (l) {
      return arguments.length ? ((o = l), c) : o;
    }));
  function f(l) {
    return function (h) {
      var p, y;
      return arguments.length ? (([p, y] = h), (o = l(p, y)), c) : [o(0), o(1)];
    };
  }
  return (
    (c.range = f(en)),
    (c.rangeRound = f(eh)),
    (c.unknown = function (l) {
      return arguments.length ? ((s = l), c) : s;
    }),
    function (l) {
      return ((a = l), (r = l(e)), (n = l(t)), (i = r === n ? 0 : 1 / (n - r)), c);
    }
  );
}
function Lt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function V0() {
  var e = qt(Ha()(Ie));
  return (
    (e.copy = function () {
      return Lt(e, V0());
    }),
    Et.apply(e, arguments)
  );
}
function X0() {
  var e = ih(Ha()).domain([1, 10]);
  return (
    (e.copy = function () {
      return Lt(e, X0()).base(e.base());
    }),
    Et.apply(e, arguments)
  );
}
function Y0() {
  var e = ah(Ha());
  return (
    (e.copy = function () {
      return Lt(e, Y0()).constant(e.constant());
    }),
    Et.apply(e, arguments)
  );
}
function yh() {
  var e = oh(Ha());
  return (
    (e.copy = function () {
      return Lt(e, yh()).exponent(e.exponent());
    }),
    Et.apply(e, arguments)
  );
}
function mE() {
  return yh.apply(null, arguments).exponent(0.5);
}
function Z0() {
  var e = [],
    t = Ie;
  function r(n) {
    if (n != null && !isNaN((n = +n))) return t((ui(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return (e.sort(Nt), r);
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => nP(e, a / n));
    }),
    (r.copy = function () {
      return Z0(t).domain(e);
    }),
    Et.apply(r, arguments)
  );
}
function Ga() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    s,
    c = Ie,
    f,
    l = !1,
    h;
  function p(v) {
    return isNaN((v = +v))
      ? h
      : ((v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? u : s)),
        c(l ? Math.max(0, Math.min(1, v)) : v));
  }
  ((p.domain = function (v) {
    return arguments.length
      ? (([e, t, r] = v),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p)
      : [e, t, r];
  }),
    (p.clamp = function (v) {
      return arguments.length ? ((l = !!v), p) : l;
    }),
    (p.interpolator = function (v) {
      return arguments.length ? ((c = v), p) : c;
    }));
  function y(v) {
    return function (d) {
      var b, x, w;
      return arguments.length ? (([b, x, w] = d), (c = jP(v, [b, x, w])), p) : [c(0), c(0.5), c(1)];
    };
  }
  return (
    (p.range = y(en)),
    (p.rangeRound = y(eh)),
    (p.unknown = function (v) {
      return arguments.length ? ((h = v), p) : h;
    }),
    function (v) {
      return (
        (f = v),
        (i = v(e)),
        (a = v(t)),
        (o = v(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p
      );
    }
  );
}
function J0() {
  var e = qt(Ga()(Ie));
  return (
    (e.copy = function () {
      return Lt(e, J0());
    }),
    Et.apply(e, arguments)
  );
}
function Q0() {
  var e = ih(Ga()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return Lt(e, Q0()).base(e.base());
    }),
    Et.apply(e, arguments)
  );
}
function ex() {
  var e = ah(Ga());
  return (
    (e.copy = function () {
      return Lt(e, ex()).constant(e.constant());
    }),
    Et.apply(e, arguments)
  );
}
function mh() {
  var e = oh(Ga());
  return (
    (e.copy = function () {
      return Lt(e, mh()).exponent(e.exponent());
    }),
    Et.apply(e, arguments)
  );
}
function gE() {
  return mh.apply(null, arguments).exponent(0.5);
}
const om = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: $n,
      scaleDiverging: J0,
      scaleDivergingLog: Q0,
      scaleDivergingPow: mh,
      scaleDivergingSqrt: gE,
      scaleDivergingSymlog: ex,
      scaleIdentity: C0,
      scaleImplicit: Cl,
      scaleLinear: Yi,
      scaleLog: k0,
      scaleOrdinal: Zf,
      scalePoint: xn,
      scalePow: uh,
      scaleQuantile: R0,
      scaleQuantize: q0,
      scaleRadial: D0,
      scaleSequential: V0,
      scaleSequentialLog: X0,
      scaleSequentialPow: yh,
      scaleSequentialQuantile: Z0,
      scaleSequentialSqrt: mE,
      scaleSequentialSymlog: Y0,
      scaleSqrt: JP,
      scaleSymlog: N0,
      scaleThreshold: L0,
      scaleTime: vE,
      scaleUtc: yE,
      tickFormat: $0,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var _c, um;
function tx() {
  if (um) return _c;
  um = 1;
  var e = Xr();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var u = r[a],
        s = n(u);
      if (s != null && (c === void 0 ? s === s && !e(s) : i(s, c)))
        var c = s,
          f = u;
    }
    return f;
  }
  return ((_c = t), _c);
}
var Sc, sm;
function bE() {
  if (sm) return Sc;
  sm = 1;
  function e(t, r) {
    return t > r;
  }
  return ((Sc = e), Sc);
}
var Ac, cm;
function xE() {
  if (cm) return Ac;
  cm = 1;
  var e = tx(),
    t = bE(),
    r = Qr();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return ((Ac = n), Ac);
}
var wE = xE();
const It = le(wE);
var Pc, lm;
function OE() {
  if (lm) return Pc;
  lm = 1;
  function e(t, r) {
    return t < r;
  }
  return ((Pc = e), Pc);
}
var Tc, fm;
function _E() {
  if (fm) return Tc;
  fm = 1;
  var e = tx(),
    t = OE(),
    r = Qr();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return ((Tc = n), Tc);
}
var SE = _E();
const Ka = le(SE);
var Ec, hm;
function AE() {
  if (hm) return Ec;
  hm = 1;
  var e = If(),
    t = Rt(),
    r = l0(),
    n = Le();
  function i(a, o) {
    var u = n(a) ? e : r;
    return u(a, t(o, 3));
  }
  return ((Ec = i), Ec);
}
var jc, dm;
function PE() {
  if (dm) return jc;
  dm = 1;
  var e = s0(),
    t = AE();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return ((jc = r), jc);
}
var TE = PE();
const EE = le(TE);
var Mc, pm;
function jE() {
  if (pm) return Mc;
  pm = 1;
  var e = Gf();
  function t(r, n) {
    return e(r, n);
  }
  return ((Mc = t), Mc);
}
var ME = jE();
const Ir = le(ME);
var tn = 1e9,
  $E = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  bh,
  de = !0,
  Ze = "[DecimalError] ",
  er = Ze + "Invalid argument: ",
  gh = Ze + "Exponent out of range: ",
  rn = Math.floor,
  Kt = Math.pow,
  CE = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Ue,
  Ae = 1e7,
  he = 7,
  rx = 9007199254740991,
  ea = rn(rx / he),
  U = {};
U.absoluteValue = U.abs = function () {
  var e = new this.constructor(this);
  return (e.s && (e.s = 1), e);
};
U.comparedTo = U.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
U.decimalPlaces = U.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * he;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
U.dividedBy = U.div = function (e) {
  return wt(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return ue(wt(t, new r(e), 0, 1), r.precision);
};
U.equals = U.eq = function (e) {
  return !this.cmp(e);
};
U.exponent = function () {
  return ge(this);
};
U.greaterThan = U.gt = function (e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function (e) {
  return this.cmp(e) >= 0;
};
U.isInteger = U.isint = function () {
  return this.e > this.d.length - 2;
};
U.isNegative = U.isneg = function () {
  return this.s < 0;
};
U.isPositive = U.ispos = function () {
  return this.s > 0;
};
U.isZero = function () {
  return this.s === 0;
};
U.lessThan = U.lt = function (e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function (e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(Ue))) throw Error(Ze + "NaN");
  if (r.s < 1) throw Error(Ze + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Ue) ? new n(0) : ((de = !1), (t = wt(Dn(r, a), Dn(e, a), a)), (de = !0), ue(t, i));
};
U.minus = U.sub = function (e) {
  var t = this;
  return ((e = new t.constructor(e)), t.s == e.s ? ax(t, e) : nx(t, ((e.s = -e.s), e)));
};
U.modulo = U.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(Ze + "NaN");
  return r.s ? ((de = !1), (t = wt(r, e, 0, 1).times(e)), (de = !0), r.minus(t)) : ue(new n(r), i);
};
U.naturalExponential = U.exp = function () {
  return ix(this);
};
U.naturalLogarithm = U.ln = function () {
  return Dn(this);
};
U.negated = U.neg = function () {
  var e = new this.constructor(this);
  return ((e.s = -e.s || 0), e);
};
U.plus = U.add = function (e) {
  var t = this;
  return ((e = new t.constructor(e)), t.s == e.s ? nx(t, e) : ax(t, ((e.s = -e.s), e)));
};
U.precision = U.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(er + e);
  if (((t = ge(i) + 1), (n = i.d.length - 1), (r = n * he + 1), (n = i.d[n]), n)) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
U.squareRoot = U.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(Ze + "NaN");
  }
  for (
    e = ge(u),
      de = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = ot(u.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = rn((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()), (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new s(t)))
        : (n = new s(i.toString())),
      r = s.precision,
      i = o = r + 3;
    ;
  )
    if (
      ((a = n),
      (n = a.plus(wt(u, a, o + 2)).times(0.5)),
      ot(a.d).slice(0, o) === (t = ot(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((ue(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return ((de = !0), ue(n, r));
};
U.times = U.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    s,
    c,
    f = this,
    l = f.constructor,
    h = f.d,
    p = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (
    e.s *= f.s,
      r = f.e + e.e,
      s = h.length,
      c = p.length,
      s < c && ((a = h), (h = p), (p = a), (o = s), (s = c), (c = o)),
      a = [],
      o = s + c,
      n = o;
    n--;
  )
    a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      ((u = a[i] + p[n] * h[i - n - 1] + t), (a[i--] = (u % Ae) | 0), (t = (u / Ae) | 0));
    a[i] = ((a[i] + t) % Ae) | 0;
  }
  for (; !a[--o]; ) a.pop();
  return (t ? ++r : a.shift(), (e.d = a), (e.e = r), de ? ue(e, l.precision) : e);
};
U.toDecimalPlaces = U.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (lt(e, 0, tn), t === void 0 ? (t = n.rounding) : lt(t, 0, 8), ue(r, e + ge(r) + 1, t))
  );
};
U.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = nr(n, !0))
      : (lt(e, 0, tn),
        t === void 0 ? (t = i.rounding) : lt(t, 0, 8),
        (n = ue(new i(n), e + 1, t)),
        (r = nr(n, !0, e + 1))),
    r
  );
};
U.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? nr(i)
    : (lt(e, 0, tn),
      t === void 0 ? (t = a.rounding) : lt(t, 0, 8),
      (n = ue(new a(i), e + ge(i) + 1, t)),
      (r = nr(n.abs(), !1, e + ge(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
U.toInteger = U.toint = function () {
  var e = this,
    t = e.constructor;
  return ue(new t(e), ge(e) + 1, t.rounding);
};
U.toNumber = function () {
  return +this;
};
U.toPower = U.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    s = u.constructor,
    c = 12,
    f = +(e = new s(e));
  if (!e.s) return new s(Ue);
  if (((u = new s(u)), !u.s)) {
    if (e.s < 1) throw Error(Ze + "Infinity");
    return u;
  }
  if (u.eq(Ue)) return u;
  if (((n = s.precision), e.eq(Ue))) return ue(u, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = f < 0 ? -f : f) <= rx) {
      for (
        i = new s(Ue), t = Math.ceil(n / he + 4), de = !1;
        r % 2 && ((i = i.times(u)), ym(i.d, t)), (r = rn(r / 2)), r !== 0;
      )
        ((u = u.times(u)), ym(u.d, t));
      return ((de = !0), e.s < 0 ? new s(Ue).div(i) : ue(i, n));
    }
  } else if (a < 0) throw Error(Ze + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (de = !1),
    (i = e.times(Dn(u, n + c))),
    (de = !0),
    (i = ix(i)),
    (i.s = a),
    i
  );
};
U.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = ge(i)), (n = nr(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (lt(e, 1, tn),
        t === void 0 ? (t = a.rounding) : lt(t, 0, 8),
        (i = ue(new a(i), e, t)),
        (r = ge(i)),
        (n = nr(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
U.toSignificantDigits = U.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (lt(e, 1, tn), t === void 0 ? (t = n.rounding) : lt(t, 0, 8)),
    ue(new n(r), e, t)
  );
};
U.toString =
  U.valueOf =
  U.val =
  U.toJSON =
  U[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = ge(e),
        r = e.constructor;
      return nr(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function nx(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    c,
    f = e.constructor,
    l = f.precision;
  if (!e.s || !t.s) return (t.s || (t = new f(e)), de ? ue(t, l) : t);
  if (((s = e.d), (c = t.d), (o = e.e), (i = t.e), (s = s.slice()), (a = o - i), a)) {
    for (
      a < 0 ? ((n = s), (a = -a), (u = c.length)) : ((n = c), (i = o), (u = s.length)),
        o = Math.ceil(l / he),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;
    )
      n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && ((a = u), (n = c), (c = s), (s = n)), r = 0; a; )
    ((r = ((s[--a] = s[a] + c[a] + r) / Ae) | 0), (s[a] %= Ae));
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return ((t.d = s), (t.e = i), de ? ue(t, l) : t);
}
function lt(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(er + e);
}
function ot(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      ((n = e[t] + ""), (r = he - n.length), r && (a += $t(r)), (a += n));
    ((o = e[t]), (n = o + ""), (r = he - n.length), r && (a += $t(r)));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var wt = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; ) ((a = n[u] * i + o), (n[u] = (a % Ae) | 0), (o = (a / Ae) | 0));
    return (o && n.unshift(o), n);
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o) s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) ((n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * Ae + n[a] - i[a]));
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      s,
      c,
      f,
      l,
      h,
      p,
      y,
      v,
      d,
      b,
      x,
      w,
      O,
      m,
      g,
      _,
      S,
      P = n.constructor,
      M = n.s == i.s ? 1 : -1,
      E = n.d,
      T = i.d;
    if (!n.s) return new P(n);
    if (!i.s) throw Error(Ze + "Division by zero");
    for (
      s = n.e - i.e, _ = T.length, m = E.length, p = new P(M), y = p.d = [], c = 0;
      T[c] == (E[c] || 0);
    )
      ++c;
    if (
      (T[c] > (E[c] || 0) && --s,
      a == null ? (x = a = P.precision) : o ? (x = a + (ge(n) - ge(i)) + 1) : (x = a),
      x < 0)
    )
      return new P(0);
    if (((x = (x / he + 2) | 0), (c = 0), _ == 1))
      for (f = 0, T = T[0], x++; (c < m || f) && x--; c++)
        ((w = f * Ae + (E[c] || 0)), (y[c] = (w / T) | 0), (f = (w % T) | 0));
    else {
      for (
        f = (Ae / (T[0] + 1)) | 0,
          f > 1 && ((T = e(T, f)), (E = e(E, f)), (_ = T.length), (m = E.length)),
          O = _,
          v = E.slice(0, _),
          d = v.length;
        d < _;
      )
        v[d++] = 0;
      ((S = T.slice()), S.unshift(0), (g = T[0]), T[1] >= Ae / 2 && ++g);
      do
        ((f = 0),
          (u = t(T, v, _, d)),
          u < 0
            ? ((b = v[0]),
              _ != d && (b = b * Ae + (v[1] || 0)),
              (f = (b / g) | 0),
              f > 1
                ? (f >= Ae && (f = Ae - 1),
                  (l = e(T, f)),
                  (h = l.length),
                  (d = v.length),
                  (u = t(l, v, h, d)),
                  u == 1 && (f--, r(l, _ < h ? S : T, h)))
                : (f == 0 && (u = f = 1), (l = T.slice())),
              (h = l.length),
              h < d && l.unshift(0),
              r(v, l, d),
              u == -1 &&
                ((d = v.length), (u = t(T, v, _, d)), u < 1 && (f++, r(v, _ < d ? S : T, d))),
              (d = v.length))
            : u === 0 && (f++, (v = [0])),
          (y[c++] = f),
          u && v[0] ? (v[d++] = E[O] || 0) : ((v = [E[O]]), (d = 1)));
      while ((O++ < m || v[0] !== void 0) && x--);
    }
    return (y[0] || y.shift(), (p.e = s), ue(p, o ? a + ge(p) + 1 : a));
  };
})();
function ix(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s = 0,
    c = 0,
    f = e.constructor,
    l = f.precision;
  if (ge(e) > 16) throw Error(gh + ge(e));
  if (!e.s) return new f(Ue);
  for (de = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); ) ((e = e.times(o)), (c += 5));
  for (
    n = ((Math.log(Kt(2, c)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = a = new f(Ue),
      f.precision = u;
    ;
  ) {
    if (
      ((i = ue(i.times(e), u)),
      (r = r.times(++s)),
      (o = a.plus(wt(i, r, u))),
      ot(o.d).slice(0, u) === ot(a.d).slice(0, u))
    ) {
      for (; c--; ) a = ue(a.times(a), u);
      return ((f.precision = l), t == null ? ((de = !0), ue(a, l)) : a);
    }
    a = o;
  }
}
function ge(e) {
  for (var t = e.e * he, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function $c(e, t, r) {
  if (t > e.LN10.sd())
    throw ((de = !0), r && (e.precision = r), Error(Ze + "LN10 precision limit exceeded"));
  return ue(new e(e.LN10), t);
}
function $t(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Dn(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    c,
    f,
    l = 1,
    h = 10,
    p = e,
    y = p.d,
    v = p.constructor,
    d = v.precision;
  if (p.s < 1) throw Error(Ze + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Ue)) return new v(0);
  if ((t == null ? ((de = !1), (c = d)) : (c = t), p.eq(10)))
    return (t == null && (de = !0), $c(v, c));
  if (
    ((c += h), (v.precision = c), (r = ot(y)), (n = r.charAt(0)), (a = ge(p)), Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      ((p = p.times(e)), (r = ot(p.d)), (n = r.charAt(0)), l++);
    ((a = ge(p)), n > 1 ? ((p = new v("0." + r)), a++) : (p = new v(n + "." + r.slice(1))));
  } else
    return (
      (s = $c(v, c + 2, d).times(a + "")),
      (p = Dn(new v(n + "." + r.slice(1)), c - h).plus(s)),
      (v.precision = d),
      t == null ? ((de = !0), ue(p, d)) : p
    );
  for (u = o = p = wt(p.minus(Ue), p.plus(Ue), c), f = ue(p.times(p), c), i = 3; ; ) {
    if (
      ((o = ue(o.times(f), c)),
      (s = u.plus(wt(o, new v(i), c))),
      ot(s.d).slice(0, c) === ot(u.d).slice(0, c))
    )
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus($c(v, c + 2, d).times(a + ""))),
        (u = wt(u, new v(l), c)),
        (v.precision = d),
        t == null ? ((de = !0), ue(u, d)) : u
      );
    ((u = s), (i += 2));
  }
}
function vm(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = rn(r / he)),
      (e.d = []),
      (n = (r + 1) % he),
      r < 0 && (n += he),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= he; n < i; ) e.d.push(+t.slice(n, (n += he)));
      ((t = t.slice(n)), (n = he - t.length));
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), de && (e.e > ea || e.e < -ea))) throw Error(gh + r);
  } else ((e.s = 0), (e.e = 0), (e.d = [0]));
  return e;
}
function ue(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    s,
    c,
    f,
    l = e.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) ((n += he), (i = t), (c = l[(f = 0)]));
  else {
    if (((f = Math.ceil((n + 1) / he)), (a = l.length), f >= a)) return e;
    for (c = a = l[f], o = 1; a >= 10; a /= 10) o++;
    ((n %= he), (i = n - he + o));
  }
  if (
    (r !== void 0 &&
      ((a = Kt(10, o - i - 1)),
      (u = ((c / a) % 10) | 0),
      (s = t < 0 || l[f + 1] !== void 0 || c % a),
      (s =
        r < 4
          ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                s ||
                (r == 6 && ((n > 0 ? (i > 0 ? c / Kt(10, o - i) : 0) : l[f - 1]) % 10) & 1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !l[0])
  )
    return (
      s
        ? ((a = ge(e)),
          (l.length = 1),
          (t = t - a - 1),
          (l[0] = Kt(10, (he - (t % he)) % he)),
          (e.e = rn(-t / he) || 0))
        : ((l.length = 1), (l[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((l.length = f), (a = 1), f--)
      : ((l.length = f + 1),
        (a = Kt(10, he - n)),
        (l[f] = i > 0 ? (((c / Kt(10, o - i)) % Kt(10, i)) | 0) * a : 0)),
    s)
  )
    for (;;)
      if (f == 0) {
        (l[0] += a) == Ae && ((l[0] = 1), ++e.e);
        break;
      } else {
        if (((l[f] += a), l[f] != Ae)) break;
        ((l[f--] = 0), (a = 1));
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (de && (e.e > ea || e.e < -ea)) throw Error(gh + ge(e));
  return e;
}
function ax(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    c,
    f,
    l,
    h = e.constructor,
    p = h.precision;
  if (!e.s || !t.s) return (t.s ? (t.s = -t.s) : (t = new h(e)), de ? ue(t, p) : t);
  if (((s = e.d), (l = t.d), (n = t.e), (c = e.e), (s = s.slice()), (o = c - n), o)) {
    for (
      f = o < 0,
        f ? ((r = s), (o = -o), (u = l.length)) : ((r = l), (n = c), (u = s.length)),
        i = Math.max(Math.ceil(p / he), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;
    )
      r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (s[i] != l[i]) {
        f = s[i] < l[i];
        break;
      }
    o = 0;
  }
  for (f && ((r = s), (s = l), (l = r), (t.s = -t.s)), u = s.length, i = l.length - u; i > 0; --i)
    s[u++] = 0;
  for (i = l.length; i > o; ) {
    if (s[--i] < l[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Ae - 1;
      (--s[a], (s[i] += Ae));
    }
    s[i] -= l[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? ((t.d = s), (t.e = n), de ? ue(t, p) : t) : new h(0);
}
function nr(e, t, r) {
  var n,
    i = ge(e),
    a = ot(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + $t(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
        ? ((a = "0." + $t(-i - 1) + a), r && (n = r - o) > 0 && (a += $t(n)))
        : i >= o
          ? ((a += $t(i + 1 - o)), r && (n = r - i - 1) > 0 && (a = a + "." + $t(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += $t(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function ym(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function ox(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      ((o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a));
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(er + a);
      if (a > 0) o.s = 1;
      else if (a < 0) ((a = -a), (o.s = -1));
      else {
        ((o.s = 0), (o.e = 0), (o.d = [0]));
        return;
      }
      if (a === ~~a && a < 1e7) {
        ((o.e = 0), (o.d = [a]));
        return;
      }
      return vm(o, a.toString());
    } else if (typeof a != "string") throw Error(er + a);
    if ((a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1), CE.test(a))) vm(o, a);
    else throw Error(er + a);
  }
  if (
    ((i.prototype = U),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = ox),
    (i.config = i.set = IE),
    e === void 0 && (e = {}),
    e)
  )
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return (i.config(e), i);
}
function IE(e) {
  if (!e || typeof e != "object") throw Error(Ze + "Object expected");
  var t,
    r,
    n,
    i = ["precision", 1, tn, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (rn(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(er + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(er + r + ": " + n);
  return this;
}
var bh = ox($E);
Ue = new bh(1);
const oe = bh;
function kE(e) {
  return qE(e) || RE(e) || DE(e) || NE();
}
function NE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DE(e, t) {
  if (e) {
    if (typeof e == "string") return Dl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dl(e, t);
  }
}
function RE(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function qE(e) {
  if (Array.isArray(e)) return Dl(e);
}
function Dl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var LE = function (t) {
    return t;
  },
  ux = {},
  sx = function (t) {
    return t === ux;
  },
  mm = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 && sx(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  BE = function e(t, r) {
    return t === 1
      ? r
      : mm(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== ux;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                mm(function () {
                  for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
                    s[c] = arguments[c];
                  var f = i.map(function (l) {
                    return sx(l) ? s.shift() : l;
                  });
                  return r.apply(void 0, kE(f).concat(s));
                }),
              );
        });
  },
  Va = function (t) {
    return BE(t.length, t);
  },
  Rl = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  FE = Va(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  WE = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    if (!r.length) return LE;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (u, s) {
          return s(u);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  ql = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  cx = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, s) {
            return u === r[s];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };
function zE(e) {
  var t;
  return (e === 0 ? (t = 1) : (t = Math.floor(new oe(e).abs().log(10).toNumber()) + 1), t);
}
function UE(e, t, r) {
  for (var n = new oe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    (a.push(n.toNumber()), (n = n.add(r)), i++);
  return a;
}
var HE = Va(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  GE = Va(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), (r - e) / n);
  }),
  KE = Va(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n)));
  });
const Xa = {
  rangeStep: UE,
  getDigitCount: zE,
  interpolateNumber: HE,
  uninterpolateNumber: GE,
  uninterpolateTruncation: KE,
};
function Ll(e) {
  return YE(e) || XE(e) || lx(e) || VE();
}
function VE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XE(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function YE(e) {
  if (Array.isArray(e)) return Bl(e);
}
function Rn(e, t) {
  return QE(e) || JE(e, t) || lx(e, t) || ZE();
}
function ZE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lx(e, t) {
  if (e) {
    if (typeof e == "string") return Bl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Bl(e, t);
  }
}
function Bl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JE(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      ((i = !0), (a = s));
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function QE(e) {
  if (Array.isArray(e)) return e;
}
function fx(e) {
  var t = Rn(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return (r > n && ((i = n), (a = r)), [i, a]);
}
function hx(e, t, r) {
  if (e.lte(0)) return new oe(0);
  var n = Xa.getDigitCount(e.toNumber()),
    i = new oe(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new oe(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    s = u.mul(i);
  return t ? s : new oe(Math.ceil(s));
}
function ej(e, t, r) {
  var n = 1,
    i = new oe(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new oe(10).pow(Xa.getDigitCount(e) - 1)),
        (i = new oe(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new oe(Math.floor(e)));
  } else e === 0 ? (i = new oe(Math.floor((t - 1) / 2))) : r || (i = new oe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    u = WE(
      FE(function (s) {
        return i.add(new oe(s - o).mul(n)).toNumber();
      }),
      Rl,
    );
  return u(0, t);
}
function dx(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new oe(0), tickMin: new oe(0), tickMax: new oe(0) };
  var a = hx(new oe(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0
    ? (o = new oe(0))
    : ((o = new oe(e).add(t).div(2)), (o = o.sub(new oe(o).mod(a))));
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    s = Math.ceil(new oe(t).sub(o).div(a).toNumber()),
    c = u + s + 1;
  return c > r
    ? dx(e, t, r, n, i + 1)
    : (c < r && ((s = t > 0 ? s + (r - c) : s), (u = t > 0 ? u : u + (r - c))),
      { step: a, tickMin: o.sub(new oe(u).mul(a)), tickMax: o.add(new oe(s).mul(a)) });
}
function tj(e) {
  var t = Rn(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = fx([r, n]),
    s = Rn(u, 2),
    c = s[0],
    f = s[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l =
      f === 1 / 0
        ? [c].concat(
            Ll(
              Rl(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            Ll(
              Rl(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [f],
          );
    return r > n ? ql(l) : l;
  }
  if (c === f) return ej(c, i, a);
  var h = dx(c, f, o, a),
    p = h.step,
    y = h.tickMin,
    v = h.tickMax,
    d = Xa.rangeStep(y, v.add(new oe(0.1).mul(p)), p);
  return r > n ? ql(d) : d;
}
function rj(e, t) {
  var r = Rn(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = fx([n, i]),
    u = Rn(o, 2),
    s = u[0],
    c = u[1];
  if (s === -1 / 0 || c === 1 / 0) return [n, i];
  if (s === c) return [s];
  var f = Math.max(t, 2),
    l = hx(new oe(c).sub(s).div(f - 1), a, 0),
    h = [].concat(Ll(Xa.rangeStep(new oe(s), new oe(c).sub(new oe(0.99).mul(l)), l)), [c]);
  return n > i ? ql(h) : h;
}
var nj = cx(tj),
  ij = cx(rj),
  aj = "Invariant failed";
function ir(e, t) {
  throw new Error(aj);
}
var oj = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function kr(e) {
  "@babel/helpers - typeof";
  return (
    (kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kr(e)
  );
}
function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ta.apply(this, arguments)
  );
}
function uj(e, t) {
  return fj(e) || lj(e, t) || cj(e, t) || sj();
}
function sj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cj(e, t) {
  if (e) {
    if (typeof e == "string") return gm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gm(e, t);
  }
}
function gm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lj(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function fj(e) {
  if (Array.isArray(e)) return e;
}
function hj(e, t) {
  if (e == null) return {};
  var r = dj(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function dj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function pj(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function vj(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, yx(n.key), n));
  }
}
function yj(e, t, r) {
  return (t && vj(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function mj(e, t, r) {
  return (
    (t = ra(t)),
    gj(e, px() ? Reflect.construct(t, r || [], ra(e).constructor) : t.apply(e, r))
  );
}
function gj(e, t) {
  if (t && (kr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return bj(e);
}
function bj(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function px() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (px = function () {
    return !!e;
  })();
}
function ra(e) {
  return (
    (ra = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ra(e)
  );
}
function xj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Fl(e, t));
}
function Fl(e, t) {
  return (
    (Fl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Fl(e, t)
  );
}
function vx(e, t, r) {
  return (
    (t = yx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function yx(e) {
  var t = wj(e, "string");
  return kr(t) == "symbol" ? t : t + "";
}
function wj(e, t) {
  if (kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var fi = (function (e) {
  function t() {
    return (pj(this, t), mj(this, t, arguments));
  }
  return (
    xj(t, e),
    yj(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.offset,
            a = n.layout,
            o = n.width,
            u = n.dataKey,
            s = n.data,
            c = n.dataPointFormatter,
            f = n.xAxis,
            l = n.yAxis,
            h = hj(n, oj),
            p = Z(h, !1);
          this.props.direction === "x" && f.type !== "number" && ir();
          var y = s.map(function (v) {
            var d = c(v, u),
              b = d.x,
              x = d.y,
              w = d.value,
              O = d.errorVal;
            if (!O) return null;
            var m = [],
              g,
              _;
            if (Array.isArray(O)) {
              var S = uj(O, 2);
              ((g = S[0]), (_ = S[1]));
            } else g = _ = O;
            if (a === "vertical") {
              var P = f.scale,
                M = x + i,
                E = M + o,
                T = M - o,
                j = P(w - g),
                C = P(w + _);
              (m.push({ x1: C, y1: E, x2: C, y2: T }),
                m.push({ x1: j, y1: M, x2: C, y2: M }),
                m.push({ x1: j, y1: E, x2: j, y2: T }));
            } else if (a === "horizontal") {
              var $ = l.scale,
                k = b + i,
                N = k - o,
                B = k + o,
                F = $(w - g),
                H = $(w + _);
              (m.push({ x1: N, y1: H, x2: B, y2: H }),
                m.push({ x1: k, y1: F, x2: k, y2: H }),
                m.push({ x1: N, y1: F, x2: B, y2: F }));
            }
            return A.createElement(
              ce,
              ta(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    m.map(function (K) {
                      return "".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2);
                    }),
                  ),
                },
                p,
              ),
              m.map(function (K) {
                return A.createElement(
                  "line",
                  ta({}, K, {
                    key: "line-".concat(K.x1, "-").concat(K.x2, "-").concat(K.y1, "-").concat(K.y2),
                  }),
                );
              }),
            );
          });
          return A.createElement(ce, { className: "recharts-errorBars" }, y);
        },
      },
    ])
  );
})(A.Component);
vx(fi, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
});
vx(fi, "displayName", "ErrorBar");
function qn(e) {
  "@babel/helpers - typeof";
  return (
    (qn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qn(e)
  );
}
function bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bm(Object(r), !0).forEach(function (n) {
          Oj(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Oj(e, t, r) {
  return (
    (t = _j(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function _j(e) {
  var t = Sj(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function Sj(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mx = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = ze(r, wr);
  if (!o) return null;
  var u = wr.defaultProps,
    s = u !== void 0 ? Ht(Ht({}, u), o.props) : {},
    c;
  return (
    o.props && o.props.payload
      ? (c = o.props && o.props.payload)
      : a === "children"
        ? (c = (n || []).reduce(function (f, l) {
            var h = l.item,
              p = l.props,
              y = p.sectors || p.data || [];
            return f.concat(
              y.map(function (v) {
                return {
                  type: o.props.iconType || h.props.legendType,
                  value: v.name,
                  color: v.fill,
                  payload: v,
                };
              }),
            );
          }, []))
        : (c = (n || []).map(function (f) {
            var l = f.item,
              h = l.type.defaultProps,
              p = h !== void 0 ? Ht(Ht({}, h), l.props) : {},
              y = p.dataKey,
              v = p.name,
              d = p.legendType,
              b = p.hide;
            return {
              inactive: b,
              dataKey: y,
              type: s.iconType || d || "square",
              color: xh(l),
              value: v || y,
              payload: p,
            };
          })),
    Ht(Ht(Ht({}, s), wr.getWithHeight(o, i)), {}, { payload: c, item: o })
  );
};
function Ln(e) {
  "@babel/helpers - typeof";
  return (
    (Ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ln(e)
  );
}
function xm(e) {
  return Ej(e) || Tj(e) || Pj(e) || Aj();
}
function Aj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pj(e, t) {
  if (e) {
    if (typeof e == "string") return Wl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wl(e, t);
  }
}
function Tj(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function Ej(e) {
  if (Array.isArray(e)) return Wl(e);
}
function Wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wm(Object(r), !0).forEach(function (n) {
          _r(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _r(e, t, r) {
  return (
    (t = jj(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function jj(e) {
  var t = Mj(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function Mj(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ke(e, t, r) {
  return Q(e) || Q(t) ? r : _e(t) ? Xe(e, t, r) : X(t) ? t(e) : r;
}
function wn(e, t, r, n) {
  var i = EE(e, function (u) {
    return ke(u, t);
  });
  if (r === "number") {
    var a = i.filter(function (u) {
      return L(u) || parseFloat(u);
    });
    return a.length ? [Ka(a), It(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !Q(u);
      })
    : i;
  return o.map(function (u) {
    return _e(u) || u instanceof Date ? u : "";
  });
}
var $j = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (u <= 1) return 0;
    if (
      a &&
      a.axisType === "angleAxis" &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var s = a.range, c = 0; c < u; c++) {
        var f = c > 0 ? i[c - 1].coordinate : i[u - 1].coordinate,
          l = i[c].coordinate,
          h = c >= u - 1 ? i[0].coordinate : i[c + 1].coordinate,
          p = void 0;
        if (it(l - f) !== it(h - l)) {
          var y = [];
          if (it(h - l) === it(s[1] - s[0])) {
            p = h;
            var v = l + s[1] - s[0];
            ((y[0] = Math.min(v, (v + f) / 2)), (y[1] = Math.max(v, (v + f) / 2)));
          } else {
            p = f;
            var d = h + s[1] - s[0];
            ((y[0] = Math.min(l, (d + l) / 2)), (y[1] = Math.max(l, (d + l) / 2)));
          }
          var b = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
          if ((t > b[0] && t <= b[1]) || (t >= y[0] && t <= y[1])) {
            o = i[c].index;
            break;
          }
        } else {
          var x = Math.min(f, h),
            w = Math.max(f, h);
          if (t > (x + l) / 2 && t <= (w + l) / 2) {
            o = i[c].index;
            break;
          }
        }
      }
    else
      for (var O = 0; O < u; O++)
        if (
          (O === 0 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2) ||
          (O > 0 &&
            O < u - 1 &&
            t > (n[O].coordinate + n[O - 1].coordinate) / 2 &&
            t <= (n[O].coordinate + n[O + 1].coordinate) / 2) ||
          (O === u - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2)
        ) {
          o = n[O].index;
          break;
        }
    return o;
  },
  xh = function (t) {
    var r,
      n = t,
      i = n.type.displayName,
      a =
        (r = t.type) !== null && r !== void 0 && r.defaultProps
          ? ve(ve({}, t.type.defaultProps), t.props)
          : t.props,
      o = a.stroke,
      u = a.fill,
      s;
    switch (i) {
      case "Line":
        s = o;
        break;
      case "Area":
      case "Radar":
        s = o && o !== "none" ? o : u;
        break;
      default:
        s = u;
        break;
    }
    return s;
  },
  Cj = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, u = Object.keys(a), s = 0, c = u.length; s < c; s++)
      for (var f = a[u[s]].stackGroups, l = Object.keys(f), h = 0, p = l.length; h < p; h++) {
        var y = f[l[h]],
          v = y.items,
          d = y.cateAxisId,
          b = v.filter(function (_) {
            return bt(_.type).indexOf("Bar") >= 0;
          });
        if (b && b.length) {
          var x = b[0].type.defaultProps,
            w = x !== void 0 ? ve(ve({}, x), b[0].props) : b[0].props,
            O = w.barSize,
            m = w[d];
          o[m] || (o[m] = []);
          var g = Q(O) ? r : O;
          o[m].push({ item: b[0], stackList: b.slice(1), barSize: Q(g) ? void 0 : rr(g, n, 0) });
        }
      }
    return o;
  },
  Ij = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      s = o.length;
    if (s < 1) return null;
    var c = rr(r, i, 0, !0),
      f,
      l = [];
    if (o[0].barSize === +o[0].barSize) {
      var h = !1,
        p = i / s,
        y = o.reduce(function (O, m) {
          return O + m.barSize || 0;
        }, 0);
      ((y += (s - 1) * c),
        y >= i && ((y -= (s - 1) * c), (c = 0)),
        y >= i && p > 0 && ((h = !0), (p *= 0.9), (y = s * p)));
      var v = ((i - y) / 2) >> 0,
        d = { offset: v - c, size: 0 };
      f = o.reduce(function (O, m) {
        var g = {
            item: m.item,
            position: { offset: d.offset + d.size + c, size: h ? p : m.barSize },
          },
          _ = [].concat(xm(O), [g]);
        return (
          (d = _[_.length - 1].position),
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (S) {
              _.push({ item: S, position: d });
            }),
          _
        );
      }, l);
    } else {
      var b = rr(n, i, 0, !0);
      i - 2 * b - (s - 1) * c <= 0 && (c = 0);
      var x = (i - 2 * b - (s - 1) * c) / s;
      x > 1 && (x >>= 0);
      var w = u === +u ? Math.min(x, u) : x;
      f = o.reduce(function (O, m, g) {
        var _ = [].concat(xm(O), [
          { item: m.item, position: { offset: b + (x + c) * g + (x - w) / 2, size: w } },
        ]);
        return (
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (S) {
              _.push({ item: S, position: _[_.length - 1].position });
            }),
          _
        );
      }, l);
    }
    return f;
  },
  kj = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      s = o - (u.left || 0) - (u.right || 0),
      c = mx({ children: a, legendWidth: s });
    if (c) {
      var f = i || {},
        l = f.width,
        h = f.height,
        p = c.align,
        y = c.verticalAlign,
        v = c.layout;
      if ((v === "vertical" || (v === "horizontal" && y === "middle")) && p !== "center" && L(t[p]))
        return ve(ve({}, t), {}, _r({}, p, t[p] + (l || 0)));
      if ((v === "horizontal" || (v === "vertical" && p === "center")) && y !== "middle" && L(t[y]))
        return ve(ve({}, t), {}, _r({}, y, t[y] + (h || 0)));
    }
    return t;
  },
  Nj = function (t, r, n) {
    return Q(r)
      ? !0
      : t === "horizontal"
        ? r === "yAxis"
        : t === "vertical" || n === "x"
          ? r === "xAxis"
          : n === "y"
            ? r === "yAxis"
            : !0;
  },
  gx = function (t, r, n, i, a) {
    var o = r.props.children,
      u = Ye(o, fi).filter(function (c) {
        return Nj(i, a, c.props.direction);
      });
    if (u && u.length) {
      var s = u.map(function (c) {
        return c.props.dataKey;
      });
      return t.reduce(
        function (c, f) {
          var l = ke(f, n);
          if (Q(l)) return c;
          var h = Array.isArray(l) ? [Ka(l), It(l)] : [l, l],
            p = s.reduce(
              function (y, v) {
                var d = ke(f, v, 0),
                  b = h[0] - Math.abs(Array.isArray(d) ? d[0] : d),
                  x = h[1] + Math.abs(Array.isArray(d) ? d[1] : d);
                return [Math.min(b, y[0]), Math.max(x, y[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  Dj = function (t, r, n, i, a) {
    var o = r
      .map(function (u) {
        return gx(t, u, n, a, i);
      })
      .filter(function (u) {
        return !Q(u);
      });
    return o && o.length
      ? o.reduce(
          function (u, s) {
            return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  bx = function (t, r, n, i, a) {
    var o = r.map(function (s) {
      var c = s.props.dataKey;
      return (n === "number" && c && gx(t, s, c, i)) || wn(t, c, n, a);
    });
    if (n === "number")
      return o.reduce(
        function (s, c) {
          return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
        },
        [1 / 0, -1 / 0],
      );
    var u = {};
    return o.reduce(function (s, c) {
      for (var f = 0, l = c.length; f < l; f++) u[c[f]] || ((u[c[f]] = !0), s.push(c[f]));
      return s;
    }, []);
  },
  xx = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  wx = function (t, r, n, i) {
    if (i)
      return t.map(function (s) {
        return s.coordinate;
      });
    var a,
      o,
      u = t.map(function (s) {
        return (s.coordinate === r && (a = !0), s.coordinate === n && (o = !0), s.coordinate);
      });
    return (a || u.push(r), o || u.push(n), u);
  },
  gt = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      s = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / s : 0;
    if (
      ((c =
        t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2
          ? it(u[0] - u[1]) * 2 * c
          : c),
      r && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (l) {
        var h = a ? a.indexOf(l) : l;
        return { coordinate: i(h) + c, value: l, offset: c };
      });
      return f.filter(function (l) {
        return !Zr(l.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (l, h) {
          return { coordinate: i(l) + c, value: l, index: h, offset: c };
        })
      : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (l) {
            return { coordinate: i(l) + c, value: l, offset: c };
          })
        : i.domain().map(function (l, h) {
            return { coordinate: i(l) + c, value: a ? a[l] : l, index: h, offset: c };
          });
  },
  Cc = new WeakMap(),
  Oi = function (t, r) {
    if (typeof r != "function") return t;
    Cc.has(t) || Cc.set(t, new WeakMap());
    var n = Cc.get(t);
    if (n.has(r)) return n.get(r);
    var i = function () {
      (t.apply(void 0, arguments), r.apply(void 0, arguments));
    };
    return (n.set(r, i), i);
  },
  Rj = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType;
    if (i === "auto")
      return o === "radial" && u === "radiusAxis"
        ? { scale: $n(), realScaleType: "band" }
        : o === "radial" && u === "angleAxis"
          ? { scale: Yi(), realScaleType: "linear" }
          : a === "category" &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !n))
            ? { scale: xn(), realScaleType: "point" }
            : a === "category"
              ? { scale: $n(), realScaleType: "band" }
              : { scale: Yi(), realScaleType: "linear" };
    if (tr(i)) {
      var s = "scale".concat(ka(i));
      return { scale: (om[s] || xn)(), realScaleType: om[s] ? s : "point" };
    }
    return X(i) ? { scale: i } : { scale: xn(), realScaleType: "point" };
  },
  Om = 1e-4,
  qj = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - Om,
        o = Math.max(i[0], i[1]) + Om,
        u = t(r[0]),
        s = t(r[n - 1]);
      (u < a || u > o || s < a || s > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  Lj = function (t, r) {
    if (!t) return null;
    for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
    return null;
  },
  Bj = function (t, r) {
    if (!r || r.length !== 2 || !L(r[0]) || !L(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [t[0], t[1]];
    return (
      (!L(t[0]) || t[0] < n) && (a[0] = n),
      (!L(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    );
  },
  Fj = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var s = Zr(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
          s >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + s), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + s), (o = t[u][n][1]));
        }
  },
  Wj = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = Zr(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          u >= 0
            ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  zj = { sign: Fj, expand: P1, none: Ar, silhouette: T1, wiggle: E1, positive: Wj },
  Uj = function (t, r, n) {
    var i = r.map(function (u) {
        return u.props.dataKey;
      }),
      a = zj[n],
      o = A1()
        .keys(i)
        .value(function (u, s) {
          return +ke(u, s, 0);
        })
        .order(gl)
        .offset(a);
    return o(t);
  },
  Hj = function (t, r, n, i, a, o) {
    if (!t) return null;
    var u = o ? r.reverse() : r,
      s = {},
      c = u.reduce(function (l, h) {
        var p,
          y =
            (p = h.type) !== null && p !== void 0 && p.defaultProps
              ? ve(ve({}, h.type.defaultProps), h.props)
              : h.props,
          v = y.stackId,
          d = y.hide;
        if (d) return l;
        var b = y[n],
          x = l[b] || { hasStack: !1, stackGroups: {} };
        if (_e(v)) {
          var w = x.stackGroups[v] || { numericAxisId: n, cateAxisId: i, items: [] };
          (w.items.push(h), (x.hasStack = !0), (x.stackGroups[v] = w));
        } else x.stackGroups[Jr("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [h] };
        return ve(ve({}, l), {}, _r({}, b, x));
      }, s),
      f = {};
    return Object.keys(c).reduce(function (l, h) {
      var p = c[h];
      if (p.hasStack) {
        var y = {};
        p.stackGroups = Object.keys(p.stackGroups).reduce(function (v, d) {
          var b = p.stackGroups[d];
          return ve(
            ve({}, v),
            {},
            _r({}, d, {
              numericAxisId: n,
              cateAxisId: i,
              items: b.items,
              stackedData: Uj(t, b.items, a),
            }),
          );
        }, y);
      }
      return ve(ve({}, l), {}, _r({}, h, p));
    }, f);
  },
  Gj = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      s = n || r.scale;
    if (s !== "auto" && s !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var c = t.domain();
      if (!c.length) return null;
      var f = nj(c, a, u);
      return (t.domain([Ka(f), It(f)]), { niceTicks: f });
    }
    if (a && i === "number") {
      var l = t.domain(),
        h = ij(l, a, u);
      return { niceTicks: h };
    }
    return null;
  };
function na(e) {
  var t = e.axis,
    r = e.ticks,
    n = e.bandSize,
    i = e.entry,
    a = e.index,
    o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Q(i[t.dataKey])) {
      var u = ji(r, "value", i[t.dataKey]);
      if (u) return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var s = ke(i, Q(o) ? t.dataKey : o);
  return Q(s) ? null : t.scale(s);
}
var _m = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      u = t.index;
    if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
    var s = ke(o, r.dataKey, r.domain[u]);
    return Q(s) ? null : r.scale(s) - a / 2 + i;
  },
  Kj = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return n[0];
  },
  Vj = function (t, r) {
    var n,
      i =
        (n = t.type) !== null && n !== void 0 && n.defaultProps
          ? ve(ve({}, t.type.defaultProps), t.props)
          : t.props,
      a = i.stackId;
    if (_e(a)) {
      var o = r[a];
      if (o) {
        var u = o.items.indexOf(t);
        return u >= 0 ? o.stackedData[u] : null;
      }
    }
    return null;
  },
  Xj = function (t) {
    return t.reduce(
      function (r, n) {
        return [Ka(n.concat([r[0]]).filter(L)), It(n.concat([r[1]]).filter(L))];
      },
      [1 / 0, -1 / 0],
    );
  },
  Ox = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            s = u.reduce(
              function (c, f) {
                var l = Xj(f.slice(r, n + 1));
                return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(s[0], i[0]), Math.max(s[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  Sm = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Am = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  zl = function (t, r, n) {
    if (X(t)) return t(r, n);
    if (!Array.isArray(t)) return r;
    var i = [];
    if (L(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (Sm.test(t[0])) {
      var a = +Sm.exec(t[0])[1];
      i[0] = r[0] - a;
    } else X(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (L(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (Am.test(t[1])) {
      var o = +Am.exec(t[1])[1];
      i[1] = r[1] + o;
    } else X(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  ia = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = Vf(r, function (l) {
            return l.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          s = a.length;
        u < s;
        u++
      ) {
        var c = a[u],
          f = a[u - 1];
        o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  Pm = function (t, r, n) {
    return !t || !t.length || Ir(t, Xe(n, "type.defaultProps.domain")) ? r : t;
  },
  _x = function (t, r) {
    var n = t.type.defaultProps ? ve(ve({}, t.type.defaultProps), t.props) : t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      s = n.tooltipType,
      c = n.chartType,
      f = n.hide;
    return ve(
      ve({}, Z(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: xh(t),
        value: ke(r, i),
        type: s,
        payload: r,
        chartType: c,
        hide: f,
      },
    );
  };
function Bn(e) {
  "@babel/helpers - typeof";
  return (
    (Bn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Bn(e)
  );
}
function Tm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Em(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tm(Object(r), !0).forEach(function (n) {
          Yj(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Tm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Yj(e, t, r) {
  return (
    (t = Zj(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Zj(e) {
  var t = Jj(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function Jj(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var aa = Math.PI / 180,
  Qj = function (t) {
    return (t * 180) / Math.PI;
  },
  je = function (t, r, n, i) {
    return { x: t + Math.cos(-aa * i) * n, y: r + Math.sin(-aa * i) * n };
  },
  eM = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  tM = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = eM({ x: n, y: i }, { x: a, y: o });
    if (u <= 0) return { radius: u };
    var s = (n - a) / u,
      c = Math.acos(s);
    return (i > o && (c = 2 * Math.PI - c), { radius: u, angle: Qj(c), angleInRadian: c });
  },
  rM = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  nM = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return t + u * 360;
  },
  jm = function (t, r) {
    var n = t.x,
      i = t.y,
      a = tM({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      s = r.innerRadius,
      c = r.outerRadius;
    if (o < s || o > c) return !1;
    if (o === 0) return !0;
    var f = rM(r),
      l = f.startAngle,
      h = f.endAngle,
      p = u,
      y;
    if (l <= h) {
      for (; p > h; ) p -= 360;
      for (; p < l; ) p += 360;
      y = p >= l && p <= h;
    } else {
      for (; p > l; ) p -= 360;
      for (; p < h; ) p += 360;
      y = p >= h && p <= l;
    }
    return y ? Em(Em({}, r), {}, { radius: o, angle: nM(p, r) }) : null;
  };
function Fn(e) {
  "@babel/helpers - typeof";
  return (
    (Fn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fn(e)
  );
}
var iM = ["offset"];
function aM(e) {
  return cM(e) || sM(e) || uM(e) || oM();
}
function oM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uM(e, t) {
  if (e) {
    if (typeof e == "string") return Ul(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ul(e, t);
  }
}
function sM(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function cM(e) {
  if (Array.isArray(e)) return Ul(e);
}
function Ul(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lM(e, t) {
  if (e == null) return {};
  var r = fM(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function fM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Mm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Mm(Object(r), !0).forEach(function (n) {
          hM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Mm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function hM(e, t, r) {
  return (
    (t = dM(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function dM(e) {
  var t = pM(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function pM(e, t) {
  if (Fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wn() {
  return (
    (Wn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wn.apply(this, arguments)
  );
}
var vM = function (t) {
    var r = t.value,
      n = t.formatter,
      i = Q(t.children) ? r : t.children;
    return X(n) ? n(i) : i;
  },
  yM = function (t, r) {
    var n = it(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  mM = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      s = a,
      c = s.cx,
      f = s.cy,
      l = s.innerRadius,
      h = s.outerRadius,
      p = s.startAngle,
      y = s.endAngle,
      v = s.clockWise,
      d = (l + h) / 2,
      b = yM(p, y),
      x = b >= 0 ? 1 : -1,
      w,
      O;
    (i === "insideStart"
      ? ((w = p + x * o), (O = v))
      : i === "insideEnd"
        ? ((w = y - x * o), (O = !v))
        : i === "end" && ((w = y + x * o), (O = v)),
      (O = b <= 0 ? O : !O));
    var m = je(c, f, d, w),
      g = je(c, f, d, w + (O ? 1 : -1) * 359),
      _ = "M"
        .concat(m.x, ",")
        .concat(
          m.y,
          `
    A`,
        )
        .concat(d, ",")
        .concat(d, ",0,1,")
        .concat(
          O ? 0 : 1,
          `,
    `,
        )
        .concat(g.x, ",")
        .concat(g.y),
      S = Q(t.id) ? Jr("recharts-radial-line-") : t.id;
    return A.createElement(
      "text",
      Wn({}, n, { dominantBaseline: "central", className: ee("recharts-radial-bar-label", u) }),
      A.createElement("defs", null, A.createElement("path", { id: S, d: _ })),
      A.createElement("textPath", { xlinkHref: "#".concat(S) }, r),
    );
  },
  gM = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      s = a.innerRadius,
      c = a.outerRadius,
      f = a.startAngle,
      l = a.endAngle,
      h = (f + l) / 2;
    if (i === "outside") {
      var p = je(o, u, c + n, h),
        y = p.x,
        v = p.y;
      return { x: y, y: v, textAnchor: y >= o ? "start" : "end", verticalAnchor: "middle" };
    }
    if (i === "center") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "end" };
    var d = (s + c) / 2,
      b = je(o, u, d, h),
      x = b.x,
      w = b.y;
    return { x, y: w, textAnchor: "middle", verticalAnchor: "middle" };
  },
  bM = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      s = o.y,
      c = o.width,
      f = o.height,
      l = f >= 0 ? 1 : -1,
      h = l * i,
      p = l > 0 ? "end" : "start",
      y = l > 0 ? "start" : "end",
      v = c >= 0 ? 1 : -1,
      d = v * i,
      b = v > 0 ? "end" : "start",
      x = v > 0 ? "start" : "end";
    if (a === "top") {
      var w = { x: u + c / 2, y: s - l * i, textAnchor: "middle", verticalAnchor: p };
      return Oe(Oe({}, w), n ? { height: Math.max(s - n.y, 0), width: c } : {});
    }
    if (a === "bottom") {
      var O = { x: u + c / 2, y: s + f + h, textAnchor: "middle", verticalAnchor: y };
      return Oe(Oe({}, O), n ? { height: Math.max(n.y + n.height - (s + f), 0), width: c } : {});
    }
    if (a === "left") {
      var m = { x: u - d, y: s + f / 2, textAnchor: b, verticalAnchor: "middle" };
      return Oe(Oe({}, m), n ? { width: Math.max(m.x - n.x, 0), height: f } : {});
    }
    if (a === "right") {
      var g = { x: u + c + d, y: s + f / 2, textAnchor: x, verticalAnchor: "middle" };
      return Oe(Oe({}, g), n ? { width: Math.max(n.x + n.width - g.x, 0), height: f } : {});
    }
    var _ = n ? { width: c, height: f } : {};
    return a === "insideLeft"
      ? Oe({ x: u + d, y: s + f / 2, textAnchor: x, verticalAnchor: "middle" }, _)
      : a === "insideRight"
        ? Oe({ x: u + c - d, y: s + f / 2, textAnchor: b, verticalAnchor: "middle" }, _)
        : a === "insideTop"
          ? Oe({ x: u + c / 2, y: s + h, textAnchor: "middle", verticalAnchor: y }, _)
          : a === "insideBottom"
            ? Oe({ x: u + c / 2, y: s + f - h, textAnchor: "middle", verticalAnchor: p }, _)
            : a === "insideTopLeft"
              ? Oe({ x: u + d, y: s + h, textAnchor: x, verticalAnchor: y }, _)
              : a === "insideTopRight"
                ? Oe({ x: u + c - d, y: s + h, textAnchor: b, verticalAnchor: y }, _)
                : a === "insideBottomLeft"
                  ? Oe({ x: u + d, y: s + f - h, textAnchor: x, verticalAnchor: p }, _)
                  : a === "insideBottomRight"
                    ? Oe({ x: u + c - d, y: s + f - h, textAnchor: b, verticalAnchor: p }, _)
                    : Yr(a) && (L(a.x) || Vt(a.x)) && (L(a.y) || Vt(a.y))
                      ? Oe(
                          {
                            x: u + rr(a.x, c),
                            y: s + rr(a.y, f),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          _,
                        )
                      : Oe(
                          {
                            x: u + c / 2,
                            y: s + f / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          _,
                        );
  },
  xM = function (t) {
    return "cx" in t && L(t.cx);
  };
function $e(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = lM(e, iM),
    i = Oe({ offset: r }, n),
    a = i.viewBox,
    o = i.position,
    u = i.value,
    s = i.children,
    c = i.content,
    f = i.className,
    l = f === void 0 ? "" : f,
    h = i.textBreakAll;
  if (!a || (Q(u) && Q(s) && !q.isValidElement(c) && !X(c))) return null;
  if (q.isValidElement(c)) return q.cloneElement(c, i);
  var p;
  if (X(c)) {
    if (((p = q.createElement(c, i)), q.isValidElement(p))) return p;
  } else p = vM(i);
  var y = xM(a),
    v = Z(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return mM(i, p, v);
  var d = y ? gM(i) : bM(i);
  return A.createElement(Wi, Wn({ className: ee("recharts-label", l) }, v, d, { breakAll: h }), p);
}
$e.displayName = "Label";
var Sx = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      s = t.radius,
      c = t.innerRadius,
      f = t.outerRadius,
      l = t.x,
      h = t.y,
      p = t.top,
      y = t.left,
      v = t.width,
      d = t.height,
      b = t.clockWise,
      x = t.labelViewBox;
    if (x) return x;
    if (L(v) && L(d)) {
      if (L(l) && L(h)) return { x: l, y: h, width: v, height: d };
      if (L(p) && L(y)) return { x: p, y, width: v, height: d };
    }
    return L(l) && L(h)
      ? { x: l, y: h, width: 0, height: 0 }
      : L(r) && L(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: c || 0,
            outerRadius: f || s || u || 0,
            clockWise: b,
          }
        : t.viewBox
          ? t.viewBox
          : {};
  },
  wM = function (t, r) {
    return t
      ? t === !0
        ? A.createElement($e, { key: "label-implicit", viewBox: r })
        : _e(t)
          ? A.createElement($e, { key: "label-implicit", viewBox: r, value: t })
          : q.isValidElement(t)
            ? t.type === $e
              ? q.cloneElement(t, { key: "label-implicit", viewBox: r })
              : A.createElement($e, { key: "label-implicit", content: t, viewBox: r })
            : X(t)
              ? A.createElement($e, { key: "label-implicit", content: t, viewBox: r })
              : Yr(t)
                ? A.createElement($e, Wn({ viewBox: r }, t, { key: "label-implicit" }))
                : null
      : null;
  },
  OM = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = Sx(t),
      o = Ye(i, $e).map(function (s, c) {
        return q.cloneElement(s, { viewBox: r || a, key: "label-".concat(c) });
      });
    if (!n) return o;
    var u = wM(t.label, r || a);
    return [u].concat(aM(o));
  };
$e.parseViewBox = Sx;
$e.renderCallByParent = OM;
var Ic, $m;
function _M() {
  if ($m) return Ic;
  $m = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return ((Ic = e), Ic);
}
var SM = _M();
const AM = le(SM);
function zn(e) {
  "@babel/helpers - typeof";
  return (
    (zn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zn(e)
  );
}
var PM = ["valueAccessor"],
  TM = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function EM(e) {
  return CM(e) || $M(e) || MM(e) || jM();
}
function jM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MM(e, t) {
  if (e) {
    if (typeof e == "string") return Hl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hl(e, t);
  }
}
function $M(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function CM(e) {
  if (Array.isArray(e)) return Hl(e);
}
function Hl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oa() {
  return (
    (oa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    oa.apply(this, arguments)
  );
}
function Cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Im(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cm(Object(r), !0).forEach(function (n) {
          IM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function IM(e, t, r) {
  return (
    (t = kM(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function kM(e) {
  var t = NM(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function NM(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function km(e, t) {
  if (e == null) return {};
  var r = DM(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function DM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var RM = function (t) {
  return Array.isArray(t.value) ? AM(t.value) : t.value;
};
function Ot(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? RM : t,
    n = km(e, PM),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    u = n.id,
    s = n.textBreakAll,
    c = km(n, TM);
  return !i || !i.length
    ? null
    : A.createElement(
        ce,
        { className: "recharts-label-list" },
        i.map(function (f, l) {
          var h = Q(a) ? r(f, l) : ke(f && f.payload, a),
            p = Q(u) ? {} : { id: "".concat(u, "-").concat(l) };
          return A.createElement(
            $e,
            oa({}, Z(f, !0), c, p, {
              parentViewBox: f.parentViewBox,
              value: h,
              textBreakAll: s,
              viewBox: $e.parseViewBox(Q(o) ? f : Im(Im({}, f), {}, { clockWise: o })),
              key: "label-".concat(l),
              index: l,
            }),
          );
        }),
      );
}
Ot.displayName = "LabelList";
function qM(e, t) {
  return e
    ? e === !0
      ? A.createElement(Ot, { key: "labelList-implicit", data: t })
      : A.isValidElement(e) || X(e)
        ? A.createElement(Ot, { key: "labelList-implicit", data: t, content: e })
        : Yr(e)
          ? A.createElement(Ot, oa({ data: t }, e, { key: "labelList-implicit" }))
          : null
    : null;
}
function LM(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = Ye(n, Ot).map(function (o, u) {
      return q.cloneElement(o, { data: t, key: "labelList-".concat(u) });
    });
  if (!r) return i;
  var a = qM(e.label, t);
  return [a].concat(EM(i));
}
Ot.renderCallByParent = LM;
function Un(e) {
  "@babel/helpers - typeof";
  return (
    (Un =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Un(e)
  );
}
function Gl() {
  return (
    (Gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gl.apply(this, arguments)
  );
}
function Nm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Dm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nm(Object(r), !0).forEach(function (n) {
          BM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function BM(e, t, r) {
  return (
    (t = FM(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function FM(e) {
  var t = WM(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function WM(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zM = function (t, r) {
    var n = it(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  _i = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      s = t.cornerRadius,
      c = t.cornerIsExternal,
      f = s * (u ? 1 : -1) + i,
      l = Math.asin(s / f) / aa,
      h = c ? a : a + o * l,
      p = je(r, n, f, h),
      y = je(r, n, i, h),
      v = c ? a - o * l : a,
      d = je(r, n, f * Math.cos(l * aa), v);
    return { center: p, circleTangency: y, lineTangency: d, theta: l };
  },
  Ax = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      s = zM(o, u),
      c = o + s,
      f = je(r, n, a, o),
      l = je(r, n, a, c),
      h = "M "
        .concat(f.x, ",")
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o > c),
          `,
    `,
        )
        .concat(l.x, ",")
        .concat(
          l.y,
          `
  `,
        );
    if (i > 0) {
      var p = je(r, n, i, o),
        y = je(r, n, i, c);
      h += "L "
        .concat(y.x, ",")
        .concat(
          y.y,
          `
            A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o <= c),
          `,
            `,
        )
        .concat(p.x, ",")
        .concat(p.y, " Z");
    } else h += "L ".concat(r, ",").concat(n, " Z");
    return h;
  },
  UM = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      s = t.cornerIsExternal,
      c = t.startAngle,
      f = t.endAngle,
      l = it(f - c),
      h = _i({ cx: r, cy: n, radius: a, angle: c, sign: l, cornerRadius: o, cornerIsExternal: s }),
      p = h.circleTangency,
      y = h.lineTangency,
      v = h.theta,
      d = _i({ cx: r, cy: n, radius: a, angle: f, sign: -l, cornerRadius: o, cornerIsExternal: s }),
      b = d.circleTangency,
      x = d.lineTangency,
      w = d.theta,
      O = s ? Math.abs(c - f) : Math.abs(c - f) - v - w;
    if (O < 0)
      return u
        ? "M "
            .concat(y.x, ",")
            .concat(
              y.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : Ax({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: c, endAngle: f });
    var m = "M "
      .concat(y.x, ",")
      .concat(
        y.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(l < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(O > 180), ",")
      .concat(+(l < 0), ",")
      .concat(b.x, ",")
      .concat(
        b.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(l < 0), ",")
      .concat(x.x, ",")
      .concat(
        x.y,
        `
  `,
      );
    if (i > 0) {
      var g = _i({
          cx: r,
          cy: n,
          radius: i,
          angle: c,
          sign: l,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: s,
        }),
        _ = g.circleTangency,
        S = g.lineTangency,
        P = g.theta,
        M = _i({
          cx: r,
          cy: n,
          radius: i,
          angle: f,
          sign: -l,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: s,
        }),
        E = M.circleTangency,
        T = M.lineTangency,
        j = M.theta,
        C = s ? Math.abs(c - f) : Math.abs(c - f) - P - j;
      if (C < 0 && o === 0) return "".concat(m, "L").concat(r, ",").concat(n, "Z");
      m += "L"
        .concat(T.x, ",")
        .concat(
          T.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(l < 0), ",")
        .concat(E.x, ",")
        .concat(
          E.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(C > 180), ",")
        .concat(+(l > 0), ",")
        .concat(_.x, ",")
        .concat(
          _.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(l < 0), ",")
        .concat(S.x, ",")
        .concat(S.y, "Z");
    } else m += "L".concat(r, ",").concat(n, "Z");
    return m;
  },
  HM = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  Px = function (t) {
    var r = Dm(Dm({}, HM), t),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      u = r.cornerRadius,
      s = r.forceCornerRadius,
      c = r.cornerIsExternal,
      f = r.startAngle,
      l = r.endAngle,
      h = r.className;
    if (o < a || f === l) return null;
    var p = ee("recharts-sector", h),
      y = o - a,
      v = rr(u, y, 0, !0),
      d;
    return (
      v > 0 && Math.abs(f - l) < 360
        ? (d = UM({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(v, y / 2),
            forceCornerRadius: s,
            cornerIsExternal: c,
            startAngle: f,
            endAngle: l,
          }))
        : (d = Ax({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: f, endAngle: l })),
      A.createElement("path", Gl({}, Z(r, !0), { className: p, d, role: "img" }))
    );
  };
function Hn(e) {
  "@babel/helpers - typeof";
  return (
    (Hn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hn(e)
  );
}
function Kl() {
  return (
    (Kl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Kl.apply(this, arguments)
  );
}
function Rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rm(Object(r), !0).forEach(function (n) {
          GM(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function GM(e, t, r) {
  return (
    (t = KM(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function KM(e) {
  var t = VM(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function VM(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lm = {
    curveBasisClosed: p1,
    curveBasisOpen: v1,
    curveBasis: d1,
    curveBumpX: QO,
    curveBumpY: e1,
    curveLinearClosed: y1,
    curveLinear: Da,
    curveMonotoneX: m1,
    curveMonotoneY: g1,
    curveNatural: b1,
    curveStep: x1,
    curveStepAfter: O1,
    curveStepBefore: w1,
  },
  Si = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  hn = function (t) {
    return t.x;
  },
  dn = function (t) {
    return t.y;
  },
  XM = function (t, r) {
    if (X(t)) return t;
    var n = "curve".concat(ka(t));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? Lm["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : Lm[n] || Da;
  },
  YM = function (t) {
    var r = t.type,
      n = r === void 0 ? "linear" : r,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      u = t.layout,
      s = t.connectNulls,
      c = s === void 0 ? !1 : s,
      f = XM(n, u),
      l = c
        ? a.filter(function (v) {
            return Si(v);
          })
        : a,
      h;
    if (Array.isArray(o)) {
      var p = c
          ? o.filter(function (v) {
              return Si(v);
            })
          : o,
        y = l.map(function (v, d) {
          return qm(qm({}, v), {}, { base: p[d] });
        });
      return (
        u === "vertical"
          ? (h = vi()
              .y(dn)
              .x1(hn)
              .x0(function (v) {
                return v.base.x;
              }))
          : (h = vi()
              .x(hn)
              .y1(dn)
              .y0(function (v) {
                return v.base.y;
              })),
        h.defined(Si).curve(f),
        h(y)
      );
    }
    return (
      u === "vertical" && L(o)
        ? (h = vi().y(dn).x1(hn).x0(o))
        : L(o)
          ? (h = vi().x(hn).y1(dn).y0(o))
          : (h = $b().x(hn).y(dn)),
      h.defined(Si).curve(f),
      h(l)
    );
  },
  Sr = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      a = t.pathRef;
    if ((!n || !n.length) && !i) return null;
    var o = n && n.length ? YM(t) : i;
    return q.createElement(
      "path",
      Kl({}, Z(t, !1), Mi(t), { className: ee("recharts-curve", r), d: o, ref: a }),
    );
  },
  kc = { exports: {} },
  Nc,
  Bm;
function ZM() {
  if (Bm) return Nc;
  Bm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ((Nc = e), Nc);
}
var Dc, Fm;
function JM() {
  if (Fm) return Dc;
  Fm = 1;
  var e = ZM();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    (Dc = function () {
      function n(o, u, s, c, f, l) {
        if (l !== e) {
          var h = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((h.name = "Invariant Violation"), h);
        }
      }
      n.isRequired = n;
      function i() {
        return n;
      }
      var a = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: i,
        element: n,
        elementType: n,
        instanceOf: i,
        node: n,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return ((a.PropTypes = a), a);
    }),
    Dc
  );
}
var Wm;
function QM() {
  return (Wm || ((Wm = 1), (kc.exports = JM()())), kc.exports);
}
var e$ = QM();
const ae = le(e$),
  { getOwnPropertyNames: t$, getOwnPropertySymbols: r$ } = Object,
  { hasOwnProperty: n$ } = Object.prototype;
function Rc(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function Ai(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e(r, n, i);
    const { cache: a } = i,
      o = a.get(r),
      u = a.get(n);
    if (o && u) return o === n && u === r;
    (a.set(r, n), a.set(n, r));
    const s = e(r, n, i);
    return (a.delete(r), a.delete(n), s);
  };
}
function i$(e) {
  return e != null ? e[Symbol.toStringTag] : void 0;
}
function zm(e) {
  return t$(e).concat(r$(e));
}
const a$ = Object.hasOwn || ((e, t) => n$.call(e, t));
function lr(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
const o$ = "__v",
  u$ = "__o",
  s$ = "_owner",
  { getOwnPropertyDescriptor: Um, keys: Hm } = Object;
function c$(e, t) {
  return e.byteLength === t.byteLength && ua(new Uint8Array(e), new Uint8Array(t));
}
function l$(e, t, r) {
  let n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function f$(e, t) {
  return (
    e.byteLength === t.byteLength &&
    ua(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function h$(e, t) {
  return lr(e.getTime(), t.getTime());
}
function d$(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function p$(e, t) {
  return e === t;
}
function Gm(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = e.entries();
  let o,
    u,
    s = 0;
  for (; (o = a.next()) && !o.done; ) {
    const c = t.entries();
    let f = !1,
      l = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (i[l]) {
        l++;
        continue;
      }
      const h = o.value,
        p = u.value;
      if (r.equals(h[0], p[0], s, l, e, t, r) && r.equals(h[1], p[1], h[0], p[0], e, t, r)) {
        f = i[l] = !0;
        break;
      }
      l++;
    }
    if (!f) return !1;
    s++;
  }
  return !0;
}
const v$ = lr;
function y$(e, t, r) {
  const n = Hm(e);
  let i = n.length;
  if (Hm(t).length !== i) return !1;
  for (; i-- > 0; ) if (!Tx(e, t, r, n[i])) return !1;
  return !0;
}
function pn(e, t, r) {
  const n = zm(e);
  let i = n.length;
  if (zm(t).length !== i) return !1;
  let a, o, u;
  for (; i-- > 0; )
    if (
      ((a = n[i]),
      !Tx(e, t, r, a) ||
        ((o = Um(e, a)),
        (u = Um(t, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1;
  return !0;
}
function m$(e, t) {
  return lr(e.valueOf(), t.valueOf());
}
function g$(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Km(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = e.values();
  let o, u;
  for (; (o = a.next()) && !o.done; ) {
    const s = t.values();
    let c = !1,
      f = 0;
    for (; (u = s.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        c = i[f] = !0;
        break;
      }
      f++;
    }
    if (!c) return !1;
  }
  return !0;
}
function ua(e, t) {
  let r = e.byteLength;
  if (t.byteLength !== r || e.byteOffset !== t.byteOffset) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
function b$(e, t) {
  return (
    e.hostname === t.hostname &&
    e.pathname === t.pathname &&
    e.protocol === t.protocol &&
    e.port === t.port &&
    e.hash === t.hash &&
    e.username === t.username &&
    e.password === t.password
  );
}
function Tx(e, t, r, n) {
  return (n === s$ || n === u$ || n === o$) && (e.$$typeof || t.$$typeof)
    ? !0
    : a$(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const x$ = "[object ArrayBuffer]",
  w$ = "[object Arguments]",
  O$ = "[object Boolean]",
  _$ = "[object DataView]",
  S$ = "[object Date]",
  A$ = "[object Error]",
  P$ = "[object Map]",
  T$ = "[object Number]",
  E$ = "[object Object]",
  j$ = "[object RegExp]",
  M$ = "[object Set]",
  $$ = "[object String]",
  C$ = {
    "[object Int8Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Int16Array]": !0,
    "[object Uint16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float16Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
    "[object BigInt64Array]": !0,
    "[object BigUint64Array]": !0,
  },
  I$ = "[object URL]",
  k$ = Object.prototype.toString;
function N$({
  areArrayBuffersEqual: e,
  areArraysEqual: t,
  areDataViewsEqual: r,
  areDatesEqual: n,
  areErrorsEqual: i,
  areFunctionsEqual: a,
  areMapsEqual: o,
  areNumbersEqual: u,
  areObjectsEqual: s,
  arePrimitiveWrappersEqual: c,
  areRegExpsEqual: f,
  areSetsEqual: l,
  areTypedArraysEqual: h,
  areUrlsEqual: p,
  unknownTagComparators: y,
}) {
  return function (d, b, x) {
    if (d === b) return !0;
    if (d == null || b == null) return !1;
    const w = typeof d;
    if (w !== typeof b) return !1;
    if (w !== "object") return w === "number" ? u(d, b, x) : w === "function" ? a(d, b, x) : !1;
    const O = d.constructor;
    if (O !== b.constructor) return !1;
    if (O === Object) return s(d, b, x);
    if (Array.isArray(d)) return t(d, b, x);
    if (O === Date) return n(d, b, x);
    if (O === RegExp) return f(d, b, x);
    if (O === Map) return o(d, b, x);
    if (O === Set) return l(d, b, x);
    const m = k$.call(d);
    if (m === S$) return n(d, b, x);
    if (m === j$) return f(d, b, x);
    if (m === P$) return o(d, b, x);
    if (m === M$) return l(d, b, x);
    if (m === E$) return typeof d.then != "function" && typeof b.then != "function" && s(d, b, x);
    if (m === I$) return p(d, b, x);
    if (m === A$) return i(d, b, x);
    if (m === w$) return s(d, b, x);
    if (C$[m]) return h(d, b, x);
    if (m === x$) return e(d, b, x);
    if (m === _$) return r(d, b, x);
    if (m === O$ || m === T$ || m === $$) return c(d, b, x);
    if (y) {
      let g = y[m];
      if (!g) {
        const _ = i$(d);
        _ && (g = y[_]);
      }
      if (g) return g(d, b, x);
    }
    return !1;
  };
}
function D$({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: c$,
    areArraysEqual: r ? pn : l$,
    areDataViewsEqual: f$,
    areDatesEqual: h$,
    areErrorsEqual: d$,
    areFunctionsEqual: p$,
    areMapsEqual: r ? Rc(Gm, pn) : Gm,
    areNumbersEqual: v$,
    areObjectsEqual: r ? pn : y$,
    arePrimitiveWrappersEqual: m$,
    areRegExpsEqual: g$,
    areSetsEqual: r ? Rc(Km, pn) : Km,
    areTypedArraysEqual: r ? Rc(ua, pn) : ua,
    areUrlsEqual: b$,
    unknownTagComparators: void 0,
  };
  if ((t && (n = Object.assign({}, n, t(n))), e)) {
    const i = Ai(n.areArraysEqual),
      a = Ai(n.areMapsEqual),
      o = Ai(n.areObjectsEqual),
      u = Ai(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: i,
      areMapsEqual: a,
      areObjectsEqual: o,
      areSetsEqual: u,
    });
  }
  return n;
}
function R$(e) {
  return function (t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function q$({ circular: e, comparator: t, createState: r, equals: n, strict: i }) {
  if (r)
    return function (u, s) {
      const { cache: c = e ? new WeakMap() : void 0, meta: f } = r();
      return t(u, s, { cache: c, equals: n, meta: f, strict: i });
    };
  if (e)
    return function (u, s) {
      return t(u, s, { cache: new WeakMap(), equals: n, meta: void 0, strict: i });
    };
  const a = { cache: void 0, equals: n, meta: void 0, strict: i };
  return function (u, s) {
    return t(u, s, a);
  };
}
const L$ = Bt();
Bt({ strict: !0 });
Bt({ circular: !0 });
Bt({ circular: !0, strict: !0 });
Bt({ createInternalComparator: () => lr });
Bt({ strict: !0, createInternalComparator: () => lr });
Bt({ circular: !0, createInternalComparator: () => lr });
Bt({ circular: !0, createInternalComparator: () => lr, strict: !0 });
function Bt(e = {}) {
  const { circular: t = !1, createInternalComparator: r, createState: n, strict: i = !1 } = e,
    a = D$(e),
    o = N$(a),
    u = r ? r(o) : R$(o);
  return q$({ circular: t, comparator: o, createState: n, equals: u, strict: i });
}
function B$(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Vm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      (r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : B$(i));
    };
  requestAnimationFrame(n);
}
function Vl(e) {
  "@babel/helpers - typeof";
  return (
    (Vl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vl(e)
  );
}
function F$(e) {
  return H$(e) || U$(e) || z$(e) || W$();
}
function W$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z$(e, t) {
  if (e) {
    if (typeof e == "string") return Xm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xm(e, t);
  }
}
function Xm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function U$(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function H$(e) {
  if (Array.isArray(e)) return e;
}
function G$() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = F$(o),
            s = u[0],
            c = u.slice(1);
          if (typeof s == "number") {
            Vm(i.bind(null, c), s);
            return;
          }
          (i(s), Vm(i.bind(null, c)));
          return;
        }
        (Vl(a) === "object" && ((e = a), t(e)), typeof a == "function" && a());
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      ((r = !1), n(a));
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Gn(e) {
  "@babel/helpers - typeof";
  return (
    (Gn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Gn(e)
  );
}
function Ym(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ym(Object(r), !0).forEach(function (n) {
          Ex(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ym(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ex(e, t, r) {
  return (
    (t = K$(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function K$(e) {
  var t = V$(e, "string");
  return Gn(t) === "symbol" ? t : String(t);
}
function V$(e, t) {
  if (Gn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var X$ = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  Y$ = function (t) {
    return t;
  },
  Z$ = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  On = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return Zm(Zm({}, n), {}, Ex({}, i, t(i, r[i])));
    }, {});
  },
  Jm = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(Z$(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function J$(e, t) {
  return tC(e) || eC(e, t) || jx(e, t) || Q$();
}
function Q$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eC(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function tC(e) {
  if (Array.isArray(e)) return e;
}
function rC(e) {
  return aC(e) || iC(e) || jx(e) || nC();
}
function nC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jx(e, t) {
  if (e) {
    if (typeof e == "string") return Xl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xl(e, t);
  }
}
function iC(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function aC(e) {
  if (Array.isArray(e)) return Xl(e);
}
function Xl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var sa = 1e-4,
  Mx = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  $x = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  Qm = function (t, r) {
    return function (n) {
      var i = Mx(t, r);
      return $x(i, n);
    };
  },
  oC = function (t, r) {
    return function (n) {
      var i = Mx(t, r),
        a = [].concat(
          rC(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1),
          ),
          [0],
        );
      return $x(a, n);
    };
  },
  eg = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          ((i = 0), (a = 0), (o = 1), (u = 1));
          break;
        case "ease":
          ((i = 0.25), (a = 0.1), (o = 0.25), (u = 1));
          break;
        case "ease-in":
          ((i = 0.42), (a = 0), (o = 1), (u = 1));
          break;
        case "ease-out":
          ((i = 0.42), (a = 0), (o = 0.58), (u = 1));
          break;
        case "ease-in-out":
          ((i = 0), (a = 0), (o = 0.58), (u = 1));
          break;
        default: {
          var s = r[0].split("(");
          if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
            var c = s[1]
                .split(")")[0]
                .split(",")
                .map(function (d) {
                  return parseFloat(d);
                }),
              f = J$(c, 4);
            ((i = f[0]), (a = f[1]), (o = f[2]), (u = f[3]));
          }
        }
      }
    var l = Qm(i, o),
      h = Qm(a, u),
      p = oC(i, o),
      y = function (b) {
        return b > 1 ? 1 : b < 0 ? 0 : b;
      },
      v = function (b) {
        for (var x = b > 1 ? 1 : b, w = x, O = 0; O < 8; ++O) {
          var m = l(w) - x,
            g = p(w);
          if (Math.abs(m - x) < sa || g < sa) return h(w);
          w = y(w - m / g);
        }
        return h(w);
      };
    return ((v.isStepper = !1), v);
  },
  uC = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      s = function (f, l, h) {
        var p = -(f - l) * n,
          y = h * a,
          v = h + ((p - y) * u) / 1e3,
          d = (h * u) / 1e3 + f;
        return Math.abs(d - l) < sa && Math.abs(v) < sa ? [l, 0] : [d, v];
      };
    return ((s.isStepper = !0), (s.dt = u), s);
  },
  sC = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return eg(i);
        case "spring":
          return uC();
        default:
          if (i.split("(")[0] === "cubic-bezier") return eg(i);
      }
    return typeof i == "function" ? i : null;
  };
function Kn(e) {
  "@babel/helpers - typeof";
  return (
    (Kn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Kn(e)
  );
}
function tg(e) {
  return fC(e) || lC(e) || Cx(e) || cC();
}
function cC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lC(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function fC(e) {
  if (Array.isArray(e)) return Zl(e);
}
function rg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rg(Object(r), !0).forEach(function (n) {
          Yl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Yl(e, t, r) {
  return (
    (t = hC(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function hC(e) {
  var t = dC(e, "string");
  return Kn(t) === "symbol" ? t : String(t);
}
function dC(e, t) {
  if (Kn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pC(e, t) {
  return mC(e) || yC(e, t) || Cx(e, t) || vC();
}
function vC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cx(e, t) {
  if (e) {
    if (typeof e == "string") return Zl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zl(e, t);
  }
}
function Zl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yC(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function mC(e) {
  if (Array.isArray(e)) return e;
}
var ca = function (t, r, n) {
    return t + (r - t) * n;
  },
  Jl = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  gC = function e(t, r, n) {
    var i = On(function (a, o) {
      if (Jl(o)) {
        var u = t(o.from, o.to, o.velocity),
          s = pC(u, 2),
          c = s[0],
          f = s[1];
        return Te(Te({}, o), {}, { from: c, velocity: f });
      }
      return o;
    }, r);
    return n < 1
      ? On(function (a, o) {
          return Jl(o)
            ? Te(
                Te({}, o),
                {},
                { velocity: ca(o.velocity, i[a].velocity, n), from: ca(o.from, i[a].from, n) },
              )
            : o;
        }, r)
      : e(t, i, n - 1);
  };
const bC = function (e, t, r, n, i) {
  var a = X$(e, t),
    o = a.reduce(function (d, b) {
      return Te(Te({}, d), {}, Yl({}, b, [e[b], t[b]]));
    }, {}),
    u = a.reduce(function (d, b) {
      return Te(Te({}, d), {}, Yl({}, b, { from: e[b], velocity: 0, to: t[b] }));
    }, {}),
    s = -1,
    c,
    f,
    l = function () {
      return null;
    },
    h = function () {
      return On(function (b, x) {
        return x.from;
      }, u);
    },
    p = function () {
      return !Object.values(u).filter(Jl).length;
    },
    y = function (b) {
      c || (c = b);
      var x = b - c,
        w = x / r.dt;
      ((u = gC(r, u, w)),
        i(Te(Te(Te({}, e), t), h())),
        (c = b),
        p() || (s = requestAnimationFrame(l)));
    },
    v = function (b) {
      f || (f = b);
      var x = (b - f) / n,
        w = On(function (m, g) {
          return ca.apply(void 0, tg(g).concat([r(x)]));
        }, o);
      if ((i(Te(Te(Te({}, e), t), w)), x < 1)) s = requestAnimationFrame(l);
      else {
        var O = On(function (m, g) {
          return ca.apply(void 0, tg(g).concat([r(1)]));
        }, o);
        i(Te(Te(Te({}, e), t), O));
      }
    };
  return (
    (l = r.isStepper ? y : v),
    function () {
      return (
        requestAnimationFrame(l),
        function () {
          cancelAnimationFrame(s);
        }
      );
    }
  );
};
function Nr(e) {
  "@babel/helpers - typeof";
  return (
    (Nr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nr(e)
  );
}
var xC = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function wC(e, t) {
  if (e == null) return {};
  var r = OC(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function OC(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++) ((i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]));
  return r;
}
function qc(e) {
  return PC(e) || AC(e) || SC(e) || _C();
}
function _C() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SC(e, t) {
  if (e) {
    if (typeof e == "string") return Ql(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ql(e, t);
  }
}
function AC(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function PC(e) {
  if (Array.isArray(e)) return Ql(e);
}
function Ql(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ng(Object(r), !0).forEach(function (n) {
          gn(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ng(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gn(e, t, r) {
  return (
    (t = Ix(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function TC(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function EC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Ix(n.key), n));
  }
}
function jC(e, t, r) {
  return (t && EC(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Ix(e) {
  var t = MC(e, "string");
  return Nr(t) === "symbol" ? t : String(t);
}
function MC(e, t) {
  if (Nr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $C(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ef(e, t));
}
function ef(e, t) {
  return (
    (ef = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    ef(e, t)
  );
}
function CC(e) {
  var t = IC();
  return function () {
    var n = la(e),
      i;
    if (t) {
      var a = la(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return tf(this, i);
  };
}
function tf(e, t) {
  if (t && (Nr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rf(e);
}
function rf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function IC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0);
  } catch {
    return !1;
  }
}
function la(e) {
  return (
    (la = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    la(e)
  );
}
var ft = (function (e) {
  $C(r, e);
  var t = CC(r);
  function r(n, i) {
    var a;
    (TC(this, r), (a = t.call(this, n, i)));
    var o = a.props,
      u = o.isActive,
      s = o.attributeName,
      c = o.from,
      f = o.to,
      l = o.steps,
      h = o.children,
      p = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(rf(a))),
      (a.changeStyle = a.changeStyle.bind(rf(a))),
      !u || p <= 0)
    )
      return ((a.state = { style: {} }), typeof h == "function" && (a.state = { style: f }), tf(a));
    if (l && l.length) a.state = { style: l[0].style };
    else if (c) {
      if (typeof h == "function") return ((a.state = { style: c }), tf(a));
      a.state = { style: s ? gn({}, s, c) : c };
    } else a.state = { style: {} };
    return a;
  }
  return (
    jC(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          ((this.mounted = !0), !(!a || !o) && this.runAnimation(this.props));
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            s = a.attributeName,
            c = a.shouldReAnimate,
            f = a.to,
            l = a.from,
            h = this.state.style;
          if (u) {
            if (!o) {
              var p = { style: s ? gn({}, s, f) : f };
              this.state && h && ((s && h[s] !== f) || (!s && h !== f)) && this.setState(p);
              return;
            }
            if (!(L$(i.to, f) && i.canBegin && i.isActive)) {
              var y = !i.canBegin || !i.isActive;
              (this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation());
              var v = y || c ? l : i.to;
              if (this.state && h) {
                var d = { style: s ? gn({}, s, v) : v };
                ((s && h[s] !== v) || (!s && h !== v)) && this.setState(d);
              }
              this.runAnimation(Qe(Qe({}, this.props), {}, { from: v, begin: 0 }));
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          (this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i());
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            s = i.duration,
            c = i.easing,
            f = i.begin,
            l = i.onAnimationEnd,
            h = i.onAnimationStart,
            p = bC(o, u, sC(c), s, this.changeStyle),
            y = function () {
              a.stopJSAnimation = p();
            };
          this.manager.start([h, f, y, s, l]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            s = i.onAnimationStart,
            c = o[0],
            f = c.style,
            l = c.duration,
            h = l === void 0 ? 0 : l,
            p = function (v, d, b) {
              if (b === 0) return v;
              var x = d.duration,
                w = d.easing,
                O = w === void 0 ? "ease" : w,
                m = d.style,
                g = d.properties,
                _ = d.onAnimationEnd,
                S = b > 0 ? o[b - 1] : d,
                P = g || Object.keys(m);
              if (typeof O == "function" || O === "spring")
                return [].concat(qc(v), [
                  a.runJSAnimation.bind(a, { from: S.style, to: m, duration: x, easing: O }),
                  x,
                ]);
              var M = Jm(P, x, O),
                E = Qe(Qe(Qe({}, S.style), m), {}, { transition: M });
              return [].concat(qc(v), [E, x, _]).filter(Y$);
            };
          return this.manager.start(
            [s].concat(qc(o.reduce(p, [f, Math.max(h, u)])), [i.onAnimationEnd]),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = G$());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            s = i.to,
            c = i.easing,
            f = i.onAnimationStart,
            l = i.onAnimationEnd,
            h = i.steps,
            p = i.children,
            y = this.manager;
          if (
            ((this.unSubscribe = y.subscribe(this.handleStyleChange)),
            typeof c == "function" || typeof p == "function" || c === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (h.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var v = u ? gn({}, u, s) : s,
            d = Jm(Object.keys(v), o, c);
          y.start([f, a, Qe(Qe({}, v), {}, { transition: d }), o, l]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          (i.attributeName, i.easing);
          var u = i.isActive;
          (i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart);
          var s = wC(i, xC),
            c = q.Children.count(a),
            f = this.state.style;
          if (typeof a == "function") return a(f);
          if (!u || c === 0 || o <= 0) return a;
          var l = function (p) {
            var y = p.props,
              v = y.style,
              d = v === void 0 ? {} : v,
              b = y.className,
              x = q.cloneElement(p, Qe(Qe({}, s), {}, { style: Qe(Qe({}, d), f), className: b }));
            return x;
          };
          return c === 1
            ? l(q.Children.only(a))
            : A.createElement(
                "div",
                null,
                q.Children.map(a, function (h) {
                  return l(h);
                }),
              );
        },
      },
    ]),
    r
  );
})(q.PureComponent);
ft.displayName = "Animate";
ft.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
ft.propTypes = {
  from: ae.oneOfType([ae.object, ae.string]),
  to: ae.oneOfType([ae.object, ae.string]),
  attributeName: ae.string,
  duration: ae.number,
  begin: ae.number,
  easing: ae.oneOfType([ae.string, ae.func]),
  steps: ae.arrayOf(
    ae.shape({
      duration: ae.number.isRequired,
      style: ae.object.isRequired,
      easing: ae.oneOfType([
        ae.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        ae.func,
      ]),
      properties: ae.arrayOf("string"),
      onAnimationEnd: ae.func,
    }),
  ),
  children: ae.oneOfType([ae.node, ae.func]),
  isActive: ae.bool,
  canBegin: ae.bool,
  onAnimationEnd: ae.func,
  shouldReAnimate: ae.bool,
  onAnimationStart: ae.func,
  onAnimationReStart: ae.func,
};
function Vn(e) {
  "@babel/helpers - typeof";
  return (
    (Vn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vn(e)
  );
}
function fa() {
  return (
    (fa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fa.apply(this, arguments)
  );
}
function kC(e, t) {
  return qC(e) || RC(e, t) || DC(e, t) || NC();
}
function NC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DC(e, t) {
  if (e) {
    if (typeof e == "string") return ig(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ig(e, t);
  }
}
function ig(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function RC(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function qC(e) {
  if (Array.isArray(e)) return e;
}
function ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function og(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ag(Object(r), !0).forEach(function (n) {
          LC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ag(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function LC(e, t, r) {
  return (
    (t = BC(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function BC(e) {
  var t = FC(e, "string");
  return Vn(t) == "symbol" ? t : t + "";
}
function FC(e, t) {
  if (Vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ug = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      s = n >= 0 ? 1 : -1,
      c = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var l = [0, 0, 0, 0], h = 0, p = 4; h < p; h++) l[h] = a[h] > o ? o : a[h];
      ((f = "M".concat(t, ",").concat(r + u * l[0])),
        l[0] > 0 &&
          (f += "A "
            .concat(l[0], ",")
            .concat(l[0], ",0,0,")
            .concat(c, ",")
            .concat(t + s * l[0], ",")
            .concat(r)),
        (f += "L ".concat(t + n - s * l[1], ",").concat(r)),
        l[1] > 0 &&
          (f += "A "
            .concat(l[1], ",")
            .concat(l[1], ",0,0,")
            .concat(
              c,
              `,
        `,
            )
            .concat(t + n, ",")
            .concat(r + u * l[1])),
        (f += "L ".concat(t + n, ",").concat(r + i - u * l[2])),
        l[2] > 0 &&
          (f += "A "
            .concat(l[2], ",")
            .concat(l[2], ",0,0,")
            .concat(
              c,
              `,
        `,
            )
            .concat(t + n - s * l[2], ",")
            .concat(r + i)),
        (f += "L ".concat(t + s * l[3], ",").concat(r + i)),
        l[3] > 0 &&
          (f += "A "
            .concat(l[3], ",")
            .concat(l[3], ",0,0,")
            .concat(
              c,
              `,
        `,
            )
            .concat(t, ",")
            .concat(r + i - u * l[3])),
        (f += "Z"));
    } else if (o > 0 && a === +a && a > 0) {
      var y = Math.min(o, a);
      f = "M "
        .concat(t, ",")
        .concat(
          r + u * y,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(c, ",")
        .concat(t + s * y, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - s * y, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(c, ",")
        .concat(t + n, ",")
        .concat(
          r + u * y,
          `
            L `,
        )
        .concat(t + n, ",")
        .concat(
          r + i - u * y,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(c, ",")
        .concat(t + n - s * y, ",")
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + s * y, ",")
        .concat(
          r + i,
          `
            A `,
        )
        .concat(y, ",")
        .concat(y, ",0,0,")
        .concat(c, ",")
        .concat(t, ",")
        .concat(r + i - u * y, " Z");
    } else
      f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
    return f;
  },
  WC = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      s = r.height;
    if (Math.abs(u) > 0 && Math.abs(s) > 0) {
      var c = Math.min(a, a + u),
        f = Math.max(a, a + u),
        l = Math.min(o, o + s),
        h = Math.max(o, o + s);
      return n >= c && n <= f && i >= l && i <= h;
    }
    return !1;
  },
  zC = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  wh = function (t) {
    var r = og(og({}, zC), t),
      n = q.useRef(),
      i = q.useState(-1),
      a = kC(i, 2),
      o = a[0],
      u = a[1];
    q.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var O = n.current.getTotalLength();
          O && u(O);
        } catch {}
    }, []);
    var s = r.x,
      c = r.y,
      f = r.width,
      l = r.height,
      h = r.radius,
      p = r.className,
      y = r.animationEasing,
      v = r.animationDuration,
      d = r.animationBegin,
      b = r.isAnimationActive,
      x = r.isUpdateAnimationActive;
    if (s !== +s || c !== +c || f !== +f || l !== +l || f === 0 || l === 0) return null;
    var w = ee("recharts-rectangle", p);
    return x
      ? A.createElement(
          ft,
          {
            canBegin: o > 0,
            from: { width: f, height: l, x: s, y: c },
            to: { width: f, height: l, x: s, y: c },
            duration: v,
            animationEasing: y,
            isActive: x,
          },
          function (O) {
            var m = O.width,
              g = O.height,
              _ = O.x,
              S = O.y;
            return A.createElement(
              ft,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: d,
                duration: v,
                isActive: b,
                easing: y,
              },
              A.createElement(
                "path",
                fa({}, Z(r, !0), { className: w, d: ug(_, S, m, g, h), ref: n }),
              ),
            );
          },
        )
      : A.createElement("path", fa({}, Z(r, !0), { className: w, d: ug(s, c, f, l, h) }));
  };
function nf() {
  return (
    (nf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    nf.apply(this, arguments)
  );
}
var Ya = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    a = t.className,
    o = ee("recharts-dot", a);
  return r === +r && n === +n && i === +i
    ? q.createElement("circle", nf({}, Z(t, !1), Mi(t), { className: o, cx: r, cy: n, r: i }))
    : null;
};
function Xn(e) {
  "@babel/helpers - typeof";
  return (
    (Xn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Xn(e)
  );
}
var UC = ["x", "y", "top", "left", "width", "height", "className"];
function af() {
  return (
    (af = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    af.apply(this, arguments)
  );
}
function sg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function HC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sg(Object(r), !0).forEach(function (n) {
          GC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function GC(e, t, r) {
  return (
    (t = KC(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function KC(e) {
  var t = VC(e, "string");
  return Xn(t) == "symbol" ? t : t + "";
}
function VC(e, t) {
  if (Xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XC(e, t) {
  if (e == null) return {};
  var r = YC(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function YC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ZC = function (t, r, n, i, a, o) {
    return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
  },
  JC = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      u = o === void 0 ? 0 : o,
      s = t.left,
      c = s === void 0 ? 0 : s,
      f = t.width,
      l = f === void 0 ? 0 : f,
      h = t.height,
      p = h === void 0 ? 0 : h,
      y = t.className,
      v = XC(t, UC),
      d = HC({ x: n, y: a, top: u, left: c, width: l, height: p }, v);
    return !L(n) || !L(a) || !L(l) || !L(p) || !L(u) || !L(c)
      ? null
      : A.createElement(
          "path",
          af({}, Z(d, !0), { className: ee("recharts-cross", y), d: ZC(n, a, l, p, u, c) }),
        );
  },
  Lc,
  cg;
function QC() {
  if (cg) return Lc;
  cg = 1;
  var e = e0(),
    t = e(Object.getPrototypeOf, Object);
  return ((Lc = t), Lc);
}
var Bc, lg;
function eI() {
  if (lg) return Bc;
  lg = 1;
  var e = Pt(),
    t = QC(),
    r = Tt(),
    n = "[object Object]",
    i = Function.prototype,
    a = Object.prototype,
    o = i.toString,
    u = a.hasOwnProperty,
    s = o.call(Object);
  function c(f) {
    if (!r(f) || e(f) != n) return !1;
    var l = t(f);
    if (l === null) return !0;
    var h = u.call(l, "constructor") && l.constructor;
    return typeof h == "function" && h instanceof h && o.call(h) == s;
  }
  return ((Bc = c), Bc);
}
var tI = eI();
const rI = le(tI);
var Fc, fg;
function nI() {
  if (fg) return Fc;
  fg = 1;
  var e = Pt(),
    t = Tt(),
    r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || (t(i) && e(i) == r);
  }
  return ((Fc = n), Fc);
}
var iI = nI();
const aI = le(iI);
function Yn(e) {
  "@babel/helpers - typeof";
  return (
    (Yn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yn(e)
  );
}
function ha() {
  return (
    (ha = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ha.apply(this, arguments)
  );
}
function oI(e, t) {
  return lI(e) || cI(e, t) || sI(e, t) || uI();
}
function uI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sI(e, t) {
  if (e) {
    if (typeof e == "string") return hg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hg(e, t);
  }
}
function hg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cI(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function lI(e) {
  if (Array.isArray(e)) return e;
}
function dg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function pg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dg(Object(r), !0).forEach(function (n) {
          fI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function fI(e, t, r) {
  return (
    (t = hI(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function hI(e) {
  var t = dI(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function dI(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vg = function (t, r, n, i, a) {
    var o = n - i,
      u;
    return (
      (u = "M ".concat(t, ",").concat(r)),
      (u += "L ".concat(t + n, ",").concat(r)),
      (u += "L ".concat(t + n - o / 2, ",").concat(r + a)),
      (u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a)),
      (u += "L ".concat(t, ",").concat(r, " Z")),
      u
    );
  },
  pI = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  vI = function (t) {
    var r = pg(pg({}, pI), t),
      n = q.useRef(),
      i = q.useState(-1),
      a = oI(i, 2),
      o = a[0],
      u = a[1];
    q.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var w = n.current.getTotalLength();
          w && u(w);
        } catch {}
    }, []);
    var s = r.x,
      c = r.y,
      f = r.upperWidth,
      l = r.lowerWidth,
      h = r.height,
      p = r.className,
      y = r.animationEasing,
      v = r.animationDuration,
      d = r.animationBegin,
      b = r.isUpdateAnimationActive;
    if (s !== +s || c !== +c || f !== +f || l !== +l || h !== +h || (f === 0 && l === 0) || h === 0)
      return null;
    var x = ee("recharts-trapezoid", p);
    return b
      ? A.createElement(
          ft,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: h, x: s, y: c },
            to: { upperWidth: f, lowerWidth: l, height: h, x: s, y: c },
            duration: v,
            animationEasing: y,
            isActive: b,
          },
          function (w) {
            var O = w.upperWidth,
              m = w.lowerWidth,
              g = w.height,
              _ = w.x,
              S = w.y;
            return A.createElement(
              ft,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: d,
                duration: v,
                easing: y,
              },
              A.createElement(
                "path",
                ha({}, Z(r, !0), { className: x, d: vg(_, S, O, m, g), ref: n }),
              ),
            );
          },
        )
      : A.createElement(
          "g",
          null,
          A.createElement("path", ha({}, Z(r, !0), { className: x, d: vg(s, c, f, l, h) })),
        );
  },
  yI = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Zn(e) {
  "@babel/helpers - typeof";
  return (
    (Zn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zn(e)
  );
}
function mI(e, t) {
  if (e == null) return {};
  var r = gI(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function gI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function yg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yg(Object(r), !0).forEach(function (n) {
          bI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function bI(e, t, r) {
  return (
    (t = xI(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function xI(e) {
  var t = wI(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function wI(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OI(e, t) {
  return da(da({}, t), e);
}
function _I(e, t) {
  return e === "symbols";
}
function mg(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return A.createElement(wh, r);
    case "trapezoid":
      return A.createElement(vI, r);
    case "sector":
      return A.createElement(Px, r);
    case "symbols":
      if (_I(t)) return A.createElement(Bf, r);
      break;
    default:
      return null;
  }
}
function SI(e) {
  return q.isValidElement(e) ? e.props : e;
}
function AI(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    i = n === void 0 ? OI : n,
    a = e.activeClassName,
    o = a === void 0 ? "recharts-active-shape" : a,
    u = e.isActive,
    s = mI(e, yI),
    c;
  if (q.isValidElement(t)) c = q.cloneElement(t, da(da({}, s), SI(t)));
  else if (X(t)) c = t(s);
  else if (rI(t) && !aI(t)) {
    var f = i(t, s);
    c = A.createElement(mg, { shapeType: r, elementProps: f });
  } else {
    var l = s;
    c = A.createElement(mg, { shapeType: r, elementProps: l });
  }
  return u ? A.createElement(ce, { className: o }, c) : c;
}
function Za(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Ja(e, t) {
  return t != null && "sectors" in e.props;
}
function Jn(e, t) {
  return t != null && "points" in e.props;
}
function PI(e, t) {
  var r,
    n,
    i =
      e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) ||
      e.x === t.x,
    a =
      e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) ||
      e.y === t.y;
  return i && a;
}
function TI(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}
function EI(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    i = e.z === t.z;
  return r && n && i;
}
function jI(e, t) {
  var r;
  return (Za(e, t) ? (r = PI) : Ja(e, t) ? (r = TI) : Jn(e, t) && (r = EI), r);
}
function MI(e, t) {
  var r;
  return (
    Za(e, t) ? (r = "trapezoids") : Ja(e, t) ? (r = "sectors") : Jn(e, t) && (r = "points"),
    r
  );
}
function $I(e, t) {
  if (Za(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (Ja(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return Jn(e, t) ? t.payload : {};
}
function CI(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    i = MI(r, t),
    a = $I(r, t),
    o = n.filter(function (s, c) {
      var f = Ir(a, s),
        l = r.props[i].filter(function (y) {
          var v = jI(r, t);
          return v(y, t);
        }),
        h = r.props[i].indexOf(l[l.length - 1]),
        p = c === h;
      return f && p;
    }),
    u = n.indexOf(o[o.length - 1]);
  return u;
}
var Wc, gg;
function II() {
  if (gg) return Wc;
  gg = 1;
  var e = Math.ceil,
    t = Math.max;
  function r(n, i, a, o) {
    for (var u = -1, s = t(e((i - n) / (a || 1)), 0), c = Array(s); s--; )
      ((c[o ? s : ++u] = n), (n += a));
    return c;
  }
  return ((Wc = r), Wc);
}
var zc, bg;
function kx() {
  if (bg) return zc;
  bg = 1;
  var e = y0(),
    t = 1 / 0,
    r = 17976931348623157e292;
  function n(i) {
    if (!i) return i === 0 ? i : 0;
    if (((i = e(i)), i === t || i === -t)) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return ((zc = n), zc);
}
var Uc, xg;
function kI() {
  if (xg) return Uc;
  xg = 1;
  var e = II(),
    t = Ba(),
    r = kx();
  function n(i) {
    return function (a, o, u) {
      return (
        u && typeof u != "number" && t(a, o, u) && (o = u = void 0),
        (a = r(a)),
        o === void 0 ? ((o = a), (a = 0)) : (o = r(o)),
        (u = u === void 0 ? (a < o ? 1 : -1) : r(u)),
        e(a, o, u, i)
      );
    };
  }
  return ((Uc = n), Uc);
}
var Hc, wg;
function NI() {
  if (wg) return Hc;
  wg = 1;
  var e = kI(),
    t = e();
  return ((Hc = t), Hc);
}
var DI = NI();
const pa = le(DI);
function Qn(e) {
  "@babel/helpers - typeof";
  return (
    (Qn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qn(e)
  );
}
function Og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function _g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Og(Object(r), !0).forEach(function (n) {
          Nx(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Og(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Nx(e, t, r) {
  return (
    (t = RI(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function RI(e) {
  var t = qI(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function qI(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var LI = ["Webkit", "Moz", "O", "ms"],
  BI = function (t, r) {
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = LI.reduce(function (a, o) {
        return _g(_g({}, a), {}, Nx({}, o + n, r));
      }, {});
    return ((i[t] = r), i);
  };
function Dr(e) {
  "@babel/helpers - typeof";
  return (
    (Dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dr(e)
  );
}
function va() {
  return (
    (va = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    va.apply(this, arguments)
  );
}
function Sg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sg(Object(r), !0).forEach(function (n) {
          We(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function FI(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ag(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Rx(n.key), n));
  }
}
function WI(e, t, r) {
  return (
    t && Ag(e.prototype, t),
    r && Ag(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function zI(e, t, r) {
  return (
    (t = ya(t)),
    UI(e, Dx() ? Reflect.construct(t, r || [], ya(e).constructor) : t.apply(e, r))
  );
}
function UI(e, t) {
  if (t && (Dr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return HI(e);
}
function HI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Dx = function () {
    return !!e;
  })();
}
function ya(e) {
  return (
    (ya = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ya(e)
  );
}
function GI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && of(e, t));
}
function of(e, t) {
  return (
    (of = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    of(e, t)
  );
}
function We(e, t, r) {
  return (
    (t = Rx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Rx(e) {
  var t = KI(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function KI(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var VI = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth;
    if (!r || !r.length) return {};
    var s = r.length,
      c = xn()
        .domain(pa(0, s))
        .range([a, a + o - u]),
      f = c.domain().map(function (l) {
        return c(l);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: c(n),
      endX: c(i),
      scale: c,
      scaleValues: f,
    };
  },
  Pg = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Rr = (function (e) {
    function t(r) {
      var n;
      return (
        FI(this, t),
        (n = zI(this, t, [r])),
        We(n, "handleDrag", function (i) {
          (n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(i)
              : n.state.isSlideMoving && n.handleSlideDrag(i));
        }),
        We(n, "handleTouchMove", function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            n.handleDrag(i.changedTouches[0]);
        }),
        We(n, "handleDragEnd", function () {
          (n.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var i = n.props,
              a = i.endIndex,
              o = i.onDragEnd,
              u = i.startIndex;
            o == null || o({ endIndex: a, startIndex: u });
          }),
            n.detachDragEndListener());
        }),
        We(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
        }),
        We(n, "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        We(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        We(n, "handleSlideDragStart", function (i) {
          var a = Pg(i) ? i.changedTouches[0] : i;
          (n.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: a.pageX }),
            n.attachDragEndListener());
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      GI(t, e),
      WI(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              (this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener());
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                u = this.props,
                s = u.gap,
                c = u.data,
                f = c.length - 1,
                l = Math.min(i, a),
                h = Math.max(i, a),
                p = t.getIndexInRange(o, l),
                y = t.getIndexInRange(o, h);
              return { startIndex: p - (p % s), endIndex: y === f ? f : y - (y % s) };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                u = i.dataKey,
                s = ke(a[n], u, n);
              return X(o) ? o(s, n) : s;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              (window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              (window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                u = i.endX,
                s = this.props,
                c = s.x,
                f = s.width,
                l = s.travellerWidth,
                h = s.startIndex,
                p = s.endIndex,
                y = s.onChange,
                v = n.pageX - a;
              v > 0
                ? (v = Math.min(v, c + f - l - u, c + f - l - o))
                : v < 0 && (v = Math.max(v, c - o, c - u));
              var d = this.getIndex({ startX: o + v, endX: u + v });
              ((d.startIndex !== h || d.endIndex !== p) && y && y(d),
                this.setState({ startX: o + v, endX: u + v, slideMoveStartX: n.pageX }));
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, i) {
              var a = Pg(i) ? i.changedTouches[0] : i;
              (this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener());
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                u = i.endX,
                s = i.startX,
                c = this.state[o],
                f = this.props,
                l = f.x,
                h = f.width,
                p = f.travellerWidth,
                y = f.onChange,
                v = f.gap,
                d = f.data,
                b = { startX: this.state.startX, endX: this.state.endX },
                x = n.pageX - a;
              (x > 0 ? (x = Math.min(x, l + h - p - c)) : x < 0 && (x = Math.max(x, l - c)),
                (b[o] = c + x));
              var w = this.getIndex(b),
                O = w.startIndex,
                m = w.endIndex,
                g = function () {
                  var S = d.length - 1;
                  return (
                    (o === "startX" && (u > s ? O % v === 0 : m % v === 0)) ||
                    (u < s && m === S) ||
                    (o === "endX" && (u > s ? m % v === 0 : O % v === 0)) ||
                    (u > s && m === S)
                  );
                };
              this.setState(We(We({}, o, c + x), "brushMoveStartX", n.pageX), function () {
                y && g() && y(w);
              });
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, i) {
              var a = this,
                o = this.state,
                u = o.scaleValues,
                s = o.startX,
                c = o.endX,
                f = this.state[i],
                l = u.indexOf(f);
              if (l !== -1) {
                var h = l + n;
                if (!(h === -1 || h >= u.length)) {
                  var p = u[h];
                  (i === "startX" && p >= c) ||
                    (i === "endX" && p <= s) ||
                    this.setState(We({}, i, p), function () {
                      a.props.onChange(a.getIndex({ startX: a.state.startX, endX: a.state.endX }));
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.fill,
                c = n.stroke;
              return A.createElement("rect", {
                stroke: c,
                fill: s,
                x: i,
                y: a,
                width: o,
                height: u,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.data,
                c = n.children,
                f = n.padding,
                l = q.Children.only(c);
              return l
                ? A.cloneElement(l, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: s,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, i) {
              var a,
                o,
                u = this,
                s = this.props,
                c = s.y,
                f = s.travellerWidth,
                l = s.height,
                h = s.traveller,
                p = s.ariaLabel,
                y = s.data,
                v = s.startIndex,
                d = s.endIndex,
                b = Math.max(n, this.props.x),
                x = Gc(Gc({}, Z(this.props, !1)), {}, { x: b, y: c, width: f, height: l }),
                w =
                  p ||
                  "Min value: "
                    .concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ")
                    .concat((o = y[d]) === null || o === void 0 ? void 0 : o.name);
              return A.createElement(
                ce,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": w,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (m) {
                    ["ArrowLeft", "ArrowRight"].includes(m.key) &&
                      (m.preventDefault(),
                      m.stopPropagation(),
                      u.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i));
                  },
                  onFocus: function () {
                    u.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    u.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(h, x),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                u = a.height,
                s = a.stroke,
                c = a.travellerWidth,
                f = Math.min(n, i) + c,
                l = Math.max(Math.abs(i - n) - c, 0);
              return A.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: s,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: l,
                height: u,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                u = n.height,
                s = n.travellerWidth,
                c = n.stroke,
                f = this.state,
                l = f.startX,
                h = f.endX,
                p = 5,
                y = { pointerEvents: "none", fill: c };
              return A.createElement(
                ce,
                { className: "recharts-brush-texts" },
                A.createElement(
                  Wi,
                  va(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(l, h) - p,
                      y: o + u / 2,
                    },
                    y,
                  ),
                  this.getTextOfTick(i),
                ),
                A.createElement(
                  Wi,
                  va(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(l, h) + s + p,
                      y: o + u / 2,
                    },
                    y,
                  ),
                  this.getTextOfTick(a),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                u = n.x,
                s = n.y,
                c = n.width,
                f = n.height,
                l = n.alwaysShowText,
                h = this.state,
                p = h.startX,
                y = h.endX,
                v = h.isTextActive,
                d = h.isSlideMoving,
                b = h.isTravellerMoving,
                x = h.isTravellerFocused;
              if (!i || !i.length || !L(u) || !L(s) || !L(c) || !L(f) || c <= 0 || f <= 0)
                return null;
              var w = ee("recharts-brush", a),
                O = A.Children.count(o) === 1,
                m = BI("userSelect", "none");
              return A.createElement(
                ce,
                {
                  className: w,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: m,
                },
                this.renderBackground(),
                O && this.renderPanorama(),
                this.renderSlide(p, y),
                this.renderTravellerLayer(p, "startX"),
                this.renderTravellerLayer(y, "endX"),
                (v || d || b || x || l) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.stroke,
                c = Math.floor(a + u / 2) - 1;
              return A.createElement(
                A.Fragment,
                null,
                A.createElement("rect", {
                  x: i,
                  y: a,
                  width: o,
                  height: u,
                  fill: s,
                  stroke: "none",
                }),
                A.createElement("line", {
                  x1: i + 1,
                  y1: c,
                  x2: i + o - 1,
                  y2: c,
                  fill: "none",
                  stroke: "#fff",
                }),
                A.createElement("line", {
                  x1: i + 1,
                  y1: c + 2,
                  x2: i + o - 1,
                  y2: c + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, i) {
              var a;
              return (
                A.isValidElement(n)
                  ? (a = A.cloneElement(n, i))
                  : X(n)
                    ? (a = n(i))
                    : (a = t.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                u = n.x,
                s = n.travellerWidth,
                c = n.updateId,
                f = n.startIndex,
                l = n.endIndex;
              if (a !== i.prevData || c !== i.prevUpdateId)
                return Gc(
                  { prevData: a, prevTravellerWidth: s, prevUpdateId: c, prevX: u, prevWidth: o },
                  a && a.length
                    ? VI({ data: a, width: o, x: u, travellerWidth: s, startIndex: f, endIndex: l })
                    : { scale: null, scaleValues: null },
                );
              if (i.scale && (o !== i.prevWidth || u !== i.prevX || s !== i.prevTravellerWidth)) {
                i.scale.range([u, u + o - s]);
                var h = i.scale.domain().map(function (p) {
                  return i.scale(p);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: s,
                  prevUpdateId: c,
                  prevX: u,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: h,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, i) {
              for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
                var s = Math.floor((o + u) / 2);
                n[s] > i ? (u = s) : (o = s);
              }
              return i >= n[u] ? u : o;
            },
          },
        ],
      )
    );
  })(q.PureComponent);
We(Rr, "displayName", "Brush");
We(Rr, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var Kc, Tg;
function XI() {
  if (Tg) return Kc;
  Tg = 1;
  var e = Kf();
  function t(r, n) {
    var i;
    return (
      e(r, function (a, o, u) {
        return ((i = n(a, o, u)), !i);
      }),
      !!i
    );
  }
  return ((Kc = t), Kc);
}
var Vc, Eg;
function YI() {
  if (Eg) return Vc;
  Eg = 1;
  var e = Kb(),
    t = Rt(),
    r = XI(),
    n = Le(),
    i = Ba();
  function a(o, u, s) {
    var c = n(o) ? e : r;
    return (s && i(o, u, s) && (u = void 0), c(o, t(u, 3)));
  }
  return ((Vc = a), Vc);
}
var ZI = YI();
const JI = le(ZI);
var ct = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow;
    return (n && (i = "extendDomain"), i === r);
  },
  Xc,
  jg;
function QI() {
  if (jg) return Xc;
  jg = 1;
  var e = f0();
  function t(r, n, i) {
    n == "__proto__" && e
      ? e(r, n, { configurable: !0, enumerable: !0, value: i, writable: !0 })
      : (r[n] = i);
  }
  return ((Xc = t), Xc);
}
var Yc, Mg;
function ek() {
  if (Mg) return Yc;
  Mg = 1;
  var e = QI(),
    t = c0(),
    r = Rt();
  function n(i, a) {
    var o = {};
    return (
      (a = r(a, 3)),
      t(i, function (u, s, c) {
        e(o, s, a(u, s, c));
      }),
      o
    );
  }
  return ((Yc = n), Yc);
}
var tk = ek();
const rk = le(tk);
var Zc, $g;
function nk() {
  if ($g) return Zc;
  $g = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; ) if (!r(t[n], n, t)) return !1;
    return !0;
  }
  return ((Zc = e), Zc);
}
var Jc, Cg;
function ik() {
  if (Cg) return Jc;
  Cg = 1;
  var e = Kf();
  function t(r, n) {
    var i = !0;
    return (
      e(r, function (a, o, u) {
        return ((i = !!n(a, o, u)), i);
      }),
      i
    );
  }
  return ((Jc = t), Jc);
}
var Qc, Ig;
function ak() {
  if (Ig) return Qc;
  Ig = 1;
  var e = nk(),
    t = ik(),
    r = Rt(),
    n = Le(),
    i = Ba();
  function a(o, u, s) {
    var c = n(o) ? e : t;
    return (s && i(o, u, s) && (u = void 0), c(o, r(u, 3)));
  }
  return ((Qc = a), Qc);
}
var ok = ak();
const qx = le(ok);
var uk = ["x", "y"];
function ei(e) {
  "@babel/helpers - typeof";
  return (
    (ei =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ei(e)
  );
}
function uf() {
  return (
    (uf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    uf.apply(this, arguments)
  );
}
function kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kg(Object(r), !0).forEach(function (n) {
          sk(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function sk(e, t, r) {
  return (
    (t = ck(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ck(e) {
  var t = lk(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function lk(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fk(e, t) {
  if (e == null) return {};
  var r = hk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function hk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function dk(e, t) {
  var r = e.x,
    n = e.y,
    i = fk(e, uk),
    a = "".concat(r),
    o = parseInt(a, 10),
    u = "".concat(n),
    s = parseInt(u, 10),
    c = "".concat(t.height || i.height),
    f = parseInt(c, 10),
    l = "".concat(t.width || i.width),
    h = parseInt(l, 10);
  return vn(
    vn(vn(vn(vn({}, t), i), o ? { x: o } : {}), s ? { y: s } : {}),
    {},
    { height: f, width: h, name: t.name, radius: t.radius },
  );
}
function Ng(e) {
  return A.createElement(
    AI,
    uf({ shapeType: "rectangle", propTransformer: dk, activeClassName: "recharts-active-bar" }, e),
  );
}
var pk = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, i) {
      if (typeof t == "number") return t;
      var a = L(n) || wO(n);
      return a ? t(n, i) : (a || ir(), r);
    };
  },
  vk = ["value", "background"],
  Lx;
function qr(e) {
  "@babel/helpers - typeof";
  return (
    (qr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qr(e)
  );
}
function yk(e, t) {
  if (e == null) return {};
  var r = mk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function mk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ma() {
  return (
    (ma = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ma.apply(this, arguments)
  );
}
function Dg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dg(Object(r), !0).forEach(function (n) {
          kt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gk(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Rg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Fx(n.key), n));
  }
}
function bk(e, t, r) {
  return (
    t && Rg(e.prototype, t),
    r && Rg(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function xk(e, t, r) {
  return (
    (t = ga(t)),
    wk(e, Bx() ? Reflect.construct(t, r || [], ga(e).constructor) : t.apply(e, r))
  );
}
function wk(e, t) {
  if (t && (qr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ok(e);
}
function Ok(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Bx = function () {
    return !!e;
  })();
}
function ga(e) {
  return (
    (ga = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ga(e)
  );
}
function _k(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && sf(e, t));
}
function sf(e, t) {
  return (
    (sf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    sf(e, t)
  );
}
function kt(e, t, r) {
  return (
    (t = Fx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Fx(e) {
  var t = Sk(e, "string");
  return qr(t) == "symbol" ? t : t + "";
}
function Sk(e, t) {
  if (qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var hi = (function (e) {
  function t() {
    var r;
    gk(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = xk(this, t, [].concat(i))),
      kt(r, "state", { isAnimationFinished: !1 }),
      kt(r, "id", Jr("recharts-bar-")),
      kt(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        (r.setState({ isAnimationFinished: !0 }), o && o());
      }),
      kt(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        (r.setState({ isAnimationFinished: !1 }), o && o());
      }),
      r
    );
  }
  return (
    _k(t, e),
    bk(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              u = a.dataKey,
              s = a.activeIndex,
              c = a.activeBar,
              f = Z(this.props, !1);
            return (
              n &&
              n.map(function (l, h) {
                var p = h === s,
                  y = p ? c : o,
                  v = me(
                    me(me({}, f), l),
                    {},
                    {
                      isActive: p,
                      option: y,
                      index: h,
                      dataKey: u,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  );
                return A.createElement(
                  ce,
                  ma({ className: "recharts-bar-rectangle" }, $i(i.props, l, h), {
                    key: "rectangle-"
                      .concat(l == null ? void 0 : l.x, "-")
                      .concat(l == null ? void 0 : l.y, "-")
                      .concat(l == null ? void 0 : l.value, "-")
                      .concat(h),
                  }),
                  A.createElement(Ng, v),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              u = i.isAnimationActive,
              s = i.animationBegin,
              c = i.animationDuration,
              f = i.animationEasing,
              l = i.animationId,
              h = this.state.prevData;
            return A.createElement(
              ft,
              {
                begin: s,
                duration: c,
                isActive: u,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(l),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (p) {
                var y = p.t,
                  v = a.map(function (d, b) {
                    var x = h && h[b];
                    if (x) {
                      var w = Ee(x.x, d.x),
                        O = Ee(x.y, d.y),
                        m = Ee(x.width, d.width),
                        g = Ee(x.height, d.height);
                      return me(me({}, d), {}, { x: w(y), y: O(y), width: m(y), height: g(y) });
                    }
                    if (o === "horizontal") {
                      var _ = Ee(0, d.height),
                        S = _(y);
                      return me(me({}, d), {}, { y: d.y + d.height - S, height: S });
                    }
                    var P = Ee(0, d.width),
                      M = P(y);
                    return me(me({}, d), {}, { width: M });
                  });
                return A.createElement(ce, null, n.renderRectanglesStatically(v));
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !Ir(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              u = i.activeIndex,
              s = Z(this.props.background, !1);
            return a.map(function (c, f) {
              c.value;
              var l = c.background,
                h = yk(c, vk);
              if (!l) return null;
              var p = me(
                me(me(me(me({}, h), {}, { fill: "#eee" }, l), s), $i(n.props, c, f)),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  className: "recharts-bar-background-rectangle",
                },
              );
              return A.createElement(
                Ng,
                ma(
                  {
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === u,
                  },
                  p,
                ),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var a = this.props,
              o = a.data,
              u = a.xAxis,
              s = a.yAxis,
              c = a.layout,
              f = a.children,
              l = Ye(f, fi);
            if (!l) return null;
            var h = c === "vertical" ? o[0].height / 2 : o[0].width / 2,
              p = function (d, b) {
                var x = Array.isArray(d.value) ? d.value[1] : d.value;
                return { x: d.x, y: d.y, value: x, errorVal: ke(d, b) };
              },
              y = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
            return A.createElement(
              ce,
              y,
              l.map(function (v) {
                return A.cloneElement(v, {
                  key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: s,
                  layout: c,
                  offset: h,
                  dataPointFormatter: p,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              u = n.xAxis,
              s = n.yAxis,
              c = n.left,
              f = n.top,
              l = n.width,
              h = n.height,
              p = n.isAnimationActive,
              y = n.background,
              v = n.id;
            if (i || !a || !a.length) return null;
            var d = this.state.isAnimationFinished,
              b = ee("recharts-bar", o),
              x = u && u.allowDataOverflow,
              w = s && s.allowDataOverflow,
              O = x || w,
              m = Q(v) ? this.id : v;
            return A.createElement(
              ce,
              { className: b },
              x || w
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(m) },
                      A.createElement("rect", {
                        x: x ? c : c - l / 2,
                        y: w ? f : f - h / 2,
                        width: x ? l : l * 2,
                        height: w ? h : h * 2,
                      }),
                    ),
                  )
                : null,
              A.createElement(
                ce,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: O ? "url(#clipPath-".concat(m, ")") : null,
                },
                y ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(O, m),
              (!p || d) && Ot.renderCallByParent(this.props, a),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData }
              : n.data !== i.curData
                ? { curData: n.data }
                : null;
          },
        },
      ],
    )
  );
})(q.PureComponent);
Lx = hi;
kt(hi, "displayName", "Bar");
kt(hi, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !ur.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
kt(hi, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    u = e.xAxisTicks,
    s = e.yAxisTicks,
    c = e.stackedData,
    f = e.dataStartIndex,
    l = e.displayedData,
    h = e.offset,
    p = Lj(n, r);
  if (!p) return null;
  var y = t.layout,
    v = r.type.defaultProps,
    d = v !== void 0 ? me(me({}, v), r.props) : r.props,
    b = d.dataKey,
    x = d.children,
    w = d.minPointSize,
    O = y === "horizontal" ? o : a,
    m = c ? O.scale.domain() : null,
    g = Kj({ numericAxis: O }),
    _ = Ye(x, g0),
    S = l.map(function (P, M) {
      var E, T, j, C, $, k;
      c ? (E = Bj(c[f + M], m)) : ((E = ke(P, b)), Array.isArray(E) || (E = [g, E]));
      var N = pk(w, Lx.defaultProps.minPointSize)(E[1], M);
      if (y === "horizontal") {
        var B,
          F = [o.scale(E[0]), o.scale(E[1])],
          H = F[0],
          K = F[1];
        ((T = _m({ axis: a, ticks: u, bandSize: i, offset: p.offset, entry: P, index: M })),
          (j = (B = K ?? H) !== null && B !== void 0 ? B : void 0),
          (C = p.size));
        var z = H - K;
        if (
          (($ = Number.isNaN(z) ? 0 : z),
          (k = { x: T, y: o.y, width: C, height: o.height }),
          Math.abs(N) > 0 && Math.abs($) < Math.abs(N))
        ) {
          var V = it($ || N) * (Math.abs(N) - Math.abs($));
          ((j -= V), ($ += V));
        }
      } else {
        var fe = [a.scale(E[0]), a.scale(E[1])],
          ye = fe[0],
          Be = fe[1];
        if (
          ((T = ye),
          (j = _m({ axis: o, ticks: s, bandSize: i, offset: p.offset, entry: P, index: M })),
          (C = Be - ye),
          ($ = p.size),
          (k = { x: a.x, y: j, width: a.width, height: $ }),
          Math.abs(N) > 0 && Math.abs(C) < Math.abs(N))
        ) {
          var Wt = it(C || N) * (Math.abs(N) - Math.abs(C));
          C += Wt;
        }
      }
      return me(
        me(
          me({}, P),
          {},
          { x: T, y: j, width: C, height: $, value: c ? E : E[1], payload: P, background: k },
          _ && _[M] && _[M].props,
        ),
        {},
        { tooltipPayload: [_x(r, P)], tooltipPosition: { x: T + C / 2, y: j + $ / 2 } },
      );
    });
  return me({ data: S, layout: y }, h);
});
function ti(e) {
  "@babel/helpers - typeof";
  return (
    (ti =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ti(e)
  );
}
function Ak(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function qg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Wx(n.key), n));
  }
}
function Pk(e, t, r) {
  return (
    t && qg(e.prototype, t),
    r && qg(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lg(Object(r), !0).forEach(function (n) {
          Qa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Qa(e, t, r) {
  return (
    (t = Wx(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Wx(e) {
  var t = Tk(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function Tk(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zx = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      s = t.layout,
      c = t.children,
      f = Object.keys(r),
      l = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      h = !!ze(c, hi);
    return f.reduce(function (p, y) {
      var v = r[y],
        d = v.orientation,
        b = v.domain,
        x = v.padding,
        w = x === void 0 ? {} : x,
        O = v.mirror,
        m = v.reversed,
        g = "".concat(d).concat(O ? "Mirror" : ""),
        _,
        S,
        P,
        M,
        E;
      if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
        var T = b[1] - b[0],
          j = 1 / 0,
          C = v.categoricalDomain.sort(SO);
        if (
          (C.forEach(function (fe, ye) {
            ye > 0 && (j = Math.min((fe || 0) - (C[ye - 1] || 0), j));
          }),
          Number.isFinite(j))
        ) {
          var $ = j / T,
            k = v.layout === "vertical" ? n.height : n.width;
          if ((v.padding === "gap" && (_ = ($ * k) / 2), v.padding === "no-gap")) {
            var N = rr(t.barCategoryGap, $ * k),
              B = ($ * k) / 2;
            _ = B - N - ((B - N) / k) * N;
          }
        }
      }
      (i === "xAxis"
        ? (S = [n.left + (w.left || 0) + (_ || 0), n.left + n.width - (w.right || 0) - (_ || 0)])
        : i === "yAxis"
          ? (S =
              s === "horizontal"
                ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)]
                : [n.top + (w.top || 0) + (_ || 0), n.top + n.height - (w.bottom || 0) - (_ || 0)])
          : (S = v.range),
        m && (S = [S[1], S[0]]));
      var F = Rj(v, a, h),
        H = F.scale,
        K = F.realScaleType;
      (H.domain(b).range(S), qj(H));
      var z = Gj(H, et(et({}, v), {}, { realScaleType: K }));
      i === "xAxis"
        ? ((E = (d === "top" && !O) || (d === "bottom" && O)),
          (P = n.left),
          (M = l[g] - E * v.height))
        : i === "yAxis" &&
          ((E = (d === "left" && !O) || (d === "right" && O)),
          (P = l[g] - E * v.width),
          (M = n.top));
      var V = et(
        et(et({}, v), z),
        {},
        {
          realScaleType: K,
          x: P,
          y: M,
          scale: H,
          width: i === "xAxis" ? n.width : v.width,
          height: i === "yAxis" ? n.height : v.height,
        },
      );
      return (
        (V.bandSize = ia(V, z)),
        !v.hide && i === "xAxis"
          ? (l[g] += (E ? -1 : 1) * V.height)
          : v.hide || (l[g] += (E ? -1 : 1) * V.width),
        et(et({}, p), {}, Qa({}, y, V))
      );
    }, {});
  },
  Ux = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  Ek = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return Ux({ x: r, y: n }, { x: i, y: a });
  },
  Hx = (function () {
    function e(t) {
      (Ak(this, e), (this.scale = t));
    }
    return Pk(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (r) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
              i = n.bandAware,
              a = n.position;
            if (r !== void 0) {
              if (a)
                switch (a) {
                  case "start":
                    return this.scale(r);
                  case "middle": {
                    var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + o;
                  }
                  case "end": {
                    var u = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + u;
                  }
                  default:
                    return this.scale(r);
                }
              if (i) {
                var s = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + s;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: "isInRange",
          value: function (r) {
            var n = this.range(),
              i = n[0],
              a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (r) {
            return new e(r);
          },
        },
      ],
    );
  })();
Qa(Hx, "EPS", 1e-4);
var Oh = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return et(et({}, n), {}, Qa({}, i, Hx.create(t[i])));
  }, {});
  return et(
    et({}, r),
    {},
    {
      apply: function (i) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return rk(i, function (s, c) {
          return r[c].apply(s, { bandAware: o, position: u });
        });
      },
      isInRange: function (i) {
        return qx(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};
function jk(e) {
  return ((e % 180) + 180) % 180;
}
var Mk = function (t) {
    var r = t.width,
      n = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = jk(i),
      o = (a * Math.PI) / 180,
      u = Math.atan(n / r),
      s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(s);
  },
  el,
  Bg;
function $k() {
  if (Bg) return el;
  Bg = 1;
  var e = Rt(),
    t = oi(),
    r = qa();
  function n(i) {
    return function (a, o, u) {
      var s = Object(a);
      if (!t(a)) {
        var c = e(o, 3);
        ((a = r(a)),
          (o = function (l) {
            return c(s[l], l, s);
          }));
      }
      var f = i(a, o, u);
      return f > -1 ? s[c ? a[f] : f] : void 0;
    };
  }
  return ((el = n), el);
}
var tl, Fg;
function Ck() {
  if (Fg) return tl;
  Fg = 1;
  var e = kx();
  function t(r) {
    var n = e(r),
      i = n % 1;
    return n === n ? (i ? n - i : n) : 0;
  }
  return ((tl = t), tl);
}
var rl, Wg;
function Ik() {
  if (Wg) return rl;
  Wg = 1;
  var e = i0(),
    t = Rt(),
    r = Ck(),
    n = Math.max;
  function i(a, o, u) {
    var s = a == null ? 0 : a.length;
    if (!s) return -1;
    var c = u == null ? 0 : r(u);
    return (c < 0 && (c = n(s + c, 0)), e(a, t(o, 3), c));
  }
  return ((rl = i), rl);
}
var nl, zg;
function kk() {
  if (zg) return nl;
  zg = 1;
  var e = $k(),
    t = Ik(),
    r = e(t);
  return ((nl = r), nl);
}
var Nk = kk();
const Dk = le(Nk);
var Rk = bb();
const qk = le(Rk);
var Lk = qk(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    },
  ),
  _h = q.createContext(void 0),
  Sh = q.createContext(void 0),
  Gx = q.createContext(void 0),
  Kx = q.createContext({}),
  Vx = q.createContext(void 0),
  Xx = q.createContext(0),
  Yx = q.createContext(0),
  Ug = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = t.clipPathId,
      u = t.children,
      s = t.width,
      c = t.height,
      f = Lk(a);
    return A.createElement(
      _h.Provider,
      { value: n },
      A.createElement(
        Sh.Provider,
        { value: i },
        A.createElement(
          Kx.Provider,
          { value: a },
          A.createElement(
            Gx.Provider,
            { value: f },
            A.createElement(
              Vx.Provider,
              { value: o },
              A.createElement(
                Xx.Provider,
                { value: c },
                A.createElement(Yx.Provider, { value: s }, u),
              ),
            ),
          ),
        ),
      ),
    );
  },
  Bk = function () {
    return q.useContext(Vx);
  },
  Zx = function (t) {
    var r = q.useContext(_h);
    r == null && ir();
    var n = r[t];
    return (n == null && ir(), n);
  },
  Fk = function () {
    var t = q.useContext(_h);
    return Ct(t);
  },
  Wk = function () {
    var t = q.useContext(Sh),
      r = Dk(t, function (n) {
        return qx(n.domain, Number.isFinite);
      });
    return r || Ct(t);
  },
  Jx = function (t) {
    var r = q.useContext(Sh);
    r == null && ir();
    var n = r[t];
    return (n == null && ir(), n);
  },
  zk = function () {
    var t = q.useContext(Gx);
    return t;
  },
  Uk = function () {
    return q.useContext(Kx);
  },
  Ah = function () {
    return q.useContext(Yx);
  },
  Ph = function () {
    return q.useContext(Xx);
  };
function Lr(e) {
  "@babel/helpers - typeof";
  return (
    (Lr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Lr(e)
  );
}
function Hk(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Gk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ew(n.key), n));
  }
}
function Kk(e, t, r) {
  return (t && Gk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Vk(e, t, r) {
  return (
    (t = ba(t)),
    Xk(e, Qx() ? Reflect.construct(t, r || [], ba(e).constructor) : t.apply(e, r))
  );
}
function Xk(e, t) {
  if (t && (Lr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Yk(e);
}
function Yk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Qx = function () {
    return !!e;
  })();
}
function ba(e) {
  return (
    (ba = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ba(e)
  );
}
function Zk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && cf(e, t));
}
function cf(e, t) {
  return (
    (cf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    cf(e, t)
  );
}
function Hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hg(Object(r), !0).forEach(function (n) {
          Th(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Th(e, t, r) {
  return (
    (t = ew(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ew(e) {
  var t = Jk(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function Jk(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Qk(e, t) {
  return nN(e) || rN(e, t) || tN(e, t) || eN();
}
function eN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tN(e, t) {
  if (e) {
    if (typeof e == "string") return Kg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Kg(e, t);
  }
}
function Kg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rN(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function nN(e) {
  if (Array.isArray(e)) return e;
}
function lf() {
  return (
    (lf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    lf.apply(this, arguments)
  );
}
var iN = function (t, r) {
    var n;
    return (
      A.isValidElement(t)
        ? (n = A.cloneElement(t, r))
        : X(t)
          ? (n = t(r))
          : (n = A.createElement("line", lf({}, r, { className: "recharts-reference-line-line" }))),
      n
    );
  },
  aN = function (t, r, n, i, a, o, u, s, c) {
    var f = a.x,
      l = a.y,
      h = a.width,
      p = a.height;
    if (n) {
      var y = c.y,
        v = t.y.apply(y, { position: o });
      if (ct(c, "discard") && !t.y.isInRange(v)) return null;
      var d = [
        { x: f + h, y: v },
        { x: f, y: v },
      ];
      return s === "left" ? d.reverse() : d;
    }
    if (r) {
      var b = c.x,
        x = t.x.apply(b, { position: o });
      if (ct(c, "discard") && !t.x.isInRange(x)) return null;
      var w = [
        { x, y: l + p },
        { x, y: l },
      ];
      return u === "top" ? w.reverse() : w;
    }
    if (i) {
      var O = c.segment,
        m = O.map(function (g) {
          return t.apply(g, { position: o });
        });
      return ct(c, "discard") &&
        JI(m, function (g) {
          return !t.isInRange(g);
        })
        ? null
        : m;
    }
    return null;
  };
function oN(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    u = e.className,
    s = e.alwaysShow,
    c = Bk(),
    f = Zx(i),
    l = Jx(a),
    h = zk();
  if (!c || !h) return null;
  xt(
    s === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var p = Oh({ x: f.scale, y: l.scale }),
    y = _e(t),
    v = _e(r),
    d = n && n.length === 2,
    b = aN(p, y, v, d, h, e.position, f.orientation, l.orientation, e);
  if (!b) return null;
  var x = Qk(b, 2),
    w = x[0],
    O = w.x,
    m = w.y,
    g = x[1],
    _ = g.x,
    S = g.y,
    P = ct(e, "hidden") ? "url(#".concat(c, ")") : void 0,
    M = Gg(Gg({ clipPath: P }, Z(e, !0)), {}, { x1: O, y1: m, x2: _, y2: S });
  return A.createElement(
    ce,
    { className: ee("recharts-reference-line", u) },
    iN(o, M),
    $e.renderCallByParent(e, Ek({ x1: O, y1: m, x2: _, y2: S })),
  );
}
var eo = (function (e) {
  function t() {
    return (Hk(this, t), Vk(this, t, arguments));
  }
  return (
    Zk(t, e),
    Kk(t, [
      {
        key: "render",
        value: function () {
          return A.createElement(oN, this.props);
        },
      },
    ])
  );
})(A.Component);
Th(eo, "displayName", "ReferenceLine");
Th(eo, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
});
function ff() {
  return (
    (ff = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ff.apply(this, arguments)
  );
}
function Br(e) {
  "@babel/helpers - typeof";
  return (
    (Br =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Br(e)
  );
}
function Vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Xg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vg(Object(r), !0).forEach(function (n) {
          to(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function uN(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function sN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, rw(n.key), n));
  }
}
function cN(e, t, r) {
  return (t && sN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function lN(e, t, r) {
  return (
    (t = xa(t)),
    fN(e, tw() ? Reflect.construct(t, r || [], xa(e).constructor) : t.apply(e, r))
  );
}
function fN(e, t) {
  if (t && (Br(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return hN(e);
}
function hN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (tw = function () {
    return !!e;
  })();
}
function xa(e) {
  return (
    (xa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    xa(e)
  );
}
function dN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && hf(e, t));
}
function hf(e, t) {
  return (
    (hf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    hf(e, t)
  );
}
function to(e, t, r) {
  return (
    (t = rw(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function rw(e) {
  var t = pN(e, "string");
  return Br(t) == "symbol" ? t : t + "";
}
function pN(e, t) {
  if (Br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var vN = function (t) {
    var r = t.x,
      n = t.y,
      i = t.xAxis,
      a = t.yAxis,
      o = Oh({ x: i.scale, y: a.scale }),
      u = o.apply({ x: r, y: n }, { bandAware: !0 });
    return ct(t, "discard") && !o.isInRange(u) ? null : u;
  },
  ro = (function (e) {
    function t() {
      return (uN(this, t), lN(this, t, arguments));
    }
    return (
      dN(t, e),
      cN(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.r,
              u = n.alwaysShow,
              s = n.clipPathId,
              c = _e(i),
              f = _e(a);
            if (
              (xt(
                u === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !c || !f)
            )
              return null;
            var l = vN(this.props);
            if (!l) return null;
            var h = l.x,
              p = l.y,
              y = this.props,
              v = y.shape,
              d = y.className,
              b = ct(this.props, "hidden") ? "url(#".concat(s, ")") : void 0,
              x = Xg(Xg({ clipPath: b }, Z(this.props, !0)), {}, { cx: h, cy: p });
            return A.createElement(
              ce,
              { className: ee("recharts-reference-dot", d) },
              t.renderDot(v, x),
              $e.renderCallByParent(this.props, {
                x: h - o,
                y: p - o,
                width: 2 * o,
                height: 2 * o,
              }),
            );
          },
        },
      ])
    );
  })(A.Component);
to(ro, "displayName", "ReferenceDot");
to(ro, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
});
to(ro, "renderDot", function (e, t) {
  var r;
  return (
    A.isValidElement(e)
      ? (r = A.cloneElement(e, t))
      : X(e)
        ? (r = e(t))
        : (r = A.createElement(
            Ya,
            ff({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" }),
          )),
    r
  );
});
function df() {
  return (
    (df = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    df.apply(this, arguments)
  );
}
function Fr(e) {
  "@babel/helpers - typeof";
  return (
    (Fr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fr(e)
  );
}
function Yg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Zg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yg(Object(r), !0).forEach(function (n) {
          no(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function yN(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function mN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, iw(n.key), n));
  }
}
function gN(e, t, r) {
  return (t && mN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function bN(e, t, r) {
  return (
    (t = wa(t)),
    xN(e, nw() ? Reflect.construct(t, r || [], wa(e).constructor) : t.apply(e, r))
  );
}
function xN(e, t) {
  if (t && (Fr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return wN(e);
}
function wN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (nw = function () {
    return !!e;
  })();
}
function wa(e) {
  return (
    (wa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    wa(e)
  );
}
function ON(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && pf(e, t));
}
function pf(e, t) {
  return (
    (pf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    pf(e, t)
  );
}
function no(e, t, r) {
  return (
    (t = iw(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function iw(e) {
  var t = _N(e, "string");
  return Fr(t) == "symbol" ? t : t + "";
}
function _N(e, t) {
  if (Fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var SN = function (t, r, n, i, a) {
    var o = a.x1,
      u = a.x2,
      s = a.y1,
      c = a.y2,
      f = a.xAxis,
      l = a.yAxis;
    if (!f || !l) return null;
    var h = Oh({ x: f.scale, y: l.scale }),
      p = {
        x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin,
        y: n ? h.y.apply(s, { position: "start" }) : h.y.rangeMin,
      },
      y = {
        x: r ? h.x.apply(u, { position: "end" }) : h.x.rangeMax,
        y: i ? h.y.apply(c, { position: "end" }) : h.y.rangeMax,
      };
    return ct(a, "discard") && (!h.isInRange(p) || !h.isInRange(y)) ? null : Ux(p, y);
  },
  io = (function (e) {
    function t() {
      return (yN(this, t), bN(this, t, arguments));
    }
    return (
      ON(t, e),
      gN(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x1,
              a = n.x2,
              o = n.y1,
              u = n.y2,
              s = n.className,
              c = n.alwaysShow,
              f = n.clipPathId;
            xt(
              c === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var l = _e(i),
              h = _e(a),
              p = _e(o),
              y = _e(u),
              v = this.props.shape;
            if (!l && !h && !p && !y && !v) return null;
            var d = SN(l, h, p, y, this.props);
            if (!d && !v) return null;
            var b = ct(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
            return A.createElement(
              ce,
              { className: ee("recharts-reference-area", s) },
              t.renderRect(v, Zg(Zg({ clipPath: b }, Z(this.props, !0)), d)),
              $e.renderCallByParent(this.props, d),
            );
          },
        },
      ])
    );
  })(A.Component);
no(io, "displayName", "ReferenceArea");
no(io, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
no(io, "renderRect", function (e, t) {
  var r;
  return (
    A.isValidElement(e)
      ? (r = A.cloneElement(e, t))
      : X(e)
        ? (r = e(t))
        : (r = A.createElement(wh, df({}, t, { className: "recharts-reference-area-rect" }))),
    r
  );
});
function aw(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
  return n;
}
function AN(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height };
  return Mk(n, r);
}
function PN(e, t, r) {
  var n = r === "width",
    i = e.x,
    a = e.y,
    o = e.width,
    u = e.height;
  return t === 1
    ? { start: n ? i : a, end: n ? i + o : a + u }
    : { start: n ? i + o : a + u, end: n ? i : a };
}
function Oa(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i) return !1;
  var a = r();
  return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function TN(e, t) {
  return aw(e, t + 1);
}
function EN(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = t.start,
      u = t.end,
      s = 0,
      c = 1,
      f = o,
      l = function () {
        var y = n == null ? void 0 : n[s];
        if (y === void 0) return { v: aw(n, c) };
        var v = s,
          d,
          b = function () {
            return (d === void 0 && (d = r(y, v)), d);
          },
          x = y.coordinate,
          w = s === 0 || Oa(e, x, b, f, u);
        (w || ((s = 0), (f = o), (c += 1)), w && ((f = x + e * (b() / 2 + i)), (s += c)));
      },
      h;
    c <= a.length;
  )
    if (((h = l()), h)) return h.v;
  return [];
}
function ri(e) {
  "@babel/helpers - typeof";
  return (
    (ri =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ri(e)
  );
}
function Jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jg(Object(r), !0).forEach(function (n) {
          jN(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jN(e, t, r) {
  return (
    (t = MN(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function MN(e) {
  var t = $N(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function $N(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function CN(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      u = t.start,
      s = t.end,
      c = function (h) {
        var p = a[h],
          y,
          v = function () {
            return (y === void 0 && (y = r(p, h)), y);
          };
        if (h === o - 1) {
          var d = e * (p.coordinate + (e * v()) / 2 - s);
          a[h] = p = Me(Me({}, p), {}, { tickCoord: d > 0 ? p.coordinate - d * e : p.coordinate });
        } else a[h] = p = Me(Me({}, p), {}, { tickCoord: p.coordinate });
        var b = Oa(e, p.tickCoord, v, u, s);
        b && ((s = p.tickCoord - e * (v() / 2 + i)), (a[h] = Me(Me({}, p), {}, { isShow: !0 })));
      },
      f = o - 1;
    f >= 0;
    f--
  )
    c(f);
  return a;
}
function IN(e, t, r, n, i, a) {
  var o = (n || []).slice(),
    u = o.length,
    s = t.start,
    c = t.end;
  if (a) {
    var f = n[u - 1],
      l = r(f, u - 1),
      h = e * (f.coordinate + (e * l) / 2 - c);
    o[u - 1] = f = Me(Me({}, f), {}, { tickCoord: h > 0 ? f.coordinate - h * e : f.coordinate });
    var p = Oa(
      e,
      f.tickCoord,
      function () {
        return l;
      },
      s,
      c,
    );
    p && ((c = f.tickCoord - e * (l / 2 + i)), (o[u - 1] = Me(Me({}, f), {}, { isShow: !0 })));
  }
  for (
    var y = a ? u - 1 : u,
      v = function (x) {
        var w = o[x],
          O,
          m = function () {
            return (O === void 0 && (O = r(w, x)), O);
          };
        if (x === 0) {
          var g = e * (w.coordinate - (e * m()) / 2 - s);
          o[x] = w = Me(Me({}, w), {}, { tickCoord: g < 0 ? w.coordinate - g * e : w.coordinate });
        } else o[x] = w = Me(Me({}, w), {}, { tickCoord: w.coordinate });
        var _ = Oa(e, w.tickCoord, m, s, c);
        _ && ((s = w.tickCoord + e * (m() / 2 + i)), (o[x] = Me(Me({}, w), {}, { isShow: !0 })));
      },
      d = 0;
    d < y;
    d++
  )
    v(d);
  return o;
}
function Eh(e, t, r) {
  var n = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    u = e.orientation,
    s = e.interval,
    c = e.tickFormatter,
    f = e.unit,
    l = e.angle;
  if (!i || !i.length || !n) return [];
  if (L(s) || ur.isSsr) return TN(i, typeof s == "number" && L(s) ? s : 0);
  var h = [],
    p = u === "top" || u === "bottom" ? "width" : "height",
    y = f && p === "width" ? bn(f, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 },
    v = function (w, O) {
      var m = X(c) ? c(w.value, O) : w.value;
      return p === "width"
        ? AN(bn(m, { fontSize: t, letterSpacing: r }), y, l)
        : bn(m, { fontSize: t, letterSpacing: r })[p];
    },
    d = i.length >= 2 ? it(i[1].coordinate - i[0].coordinate) : 1,
    b = PN(a, d, p);
  return s === "equidistantPreserveStart"
    ? EN(d, b, v, i, o)
    : (s === "preserveStart" || s === "preserveStartEnd"
        ? (h = IN(d, b, v, i, o, s === "preserveStartEnd"))
        : (h = CN(d, b, v, i, o)),
      h.filter(function (x) {
        return x.isShow;
      }));
}
var kN = ["viewBox"],
  NN = ["viewBox"],
  DN = ["ticks"];
function Wr(e) {
  "@babel/helpers - typeof";
  return (
    (Wr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wr(e)
  );
}
function gr() {
  return (
    (gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gr.apply(this, arguments)
  );
}
function Qg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function we(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qg(Object(r), !0).forEach(function (n) {
          jh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function il(e, t) {
  if (e == null) return {};
  var r = RN(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function RN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function qN(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function eb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, uw(n.key), n));
  }
}
function LN(e, t, r) {
  return (
    t && eb(e.prototype, t),
    r && eb(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function BN(e, t, r) {
  return (
    (t = _a(t)),
    FN(e, ow() ? Reflect.construct(t, r || [], _a(e).constructor) : t.apply(e, r))
  );
}
function FN(e, t) {
  if (t && (Wr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return WN(e);
}
function WN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ow() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (ow = function () {
    return !!e;
  })();
}
function _a(e) {
  return (
    (_a = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    _a(e)
  );
}
function zN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && vf(e, t));
}
function vf(e, t) {
  return (
    (vf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    vf(e, t)
  );
}
function jh(e, t, r) {
  return (
    (t = uw(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function uw(e) {
  var t = UN(e, "string");
  return Wr(t) == "symbol" ? t : t + "";
}
function UN(e, t) {
  if (Wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nn = (function (e) {
  function t(r) {
    var n;
    return (
      qN(this, t),
      (n = BN(this, t, [r])),
      (n.state = { fontSize: "", letterSpacing: "" }),
      n
    );
  }
  return (
    zN(t, e),
    LN(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (n, i) {
            var a = n.viewBox,
              o = il(n, kN),
              u = this.props,
              s = u.viewBox,
              c = il(u, NN);
            return !xr(a, s) || !xr(o, c) || !xr(i, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var n = this.layerReference;
            if (n) {
              var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (n) {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              s = i.height,
              c = i.orientation,
              f = i.tickSize,
              l = i.mirror,
              h = i.tickMargin,
              p,
              y,
              v,
              d,
              b,
              x,
              w = l ? -1 : 1,
              O = n.tickSize || f,
              m = L(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (c) {
              case "top":
                ((p = y = n.coordinate),
                  (d = o + +!l * s),
                  (v = d - w * O),
                  (x = v - w * h),
                  (b = m));
                break;
              case "left":
                ((v = d = n.coordinate),
                  (y = a + +!l * u),
                  (p = y - w * O),
                  (b = p - w * h),
                  (x = m));
                break;
              case "right":
                ((v = d = n.coordinate),
                  (y = a + +l * u),
                  (p = y + w * O),
                  (b = p + w * h),
                  (x = m));
                break;
              default:
                ((p = y = n.coordinate),
                  (d = o + +l * s),
                  (v = d + w * O),
                  (x = v + w * h),
                  (b = m));
                break;
            }
            return { line: { x1: p, y1: v, x2: y, y2: d }, tick: { x: b, y: x } };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o;
            switch (i) {
              case "left":
                o = a ? "start" : "end";
                break;
              case "right":
                o = a ? "end" : "start";
                break;
              default:
                o = "middle";
                break;
            }
            return o;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o = "end";
            switch (i) {
              case "left":
              case "right":
                o = "middle";
                break;
              case "top":
                o = a ? "start" : "end";
                break;
              default:
                o = a ? "end" : "start";
                break;
            }
            return o;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.width,
              u = n.height,
              s = n.orientation,
              c = n.mirror,
              f = n.axisLine,
              l = we(we(we({}, Z(this.props, !1)), Z(f, !1)), {}, { fill: "none" });
            if (s === "top" || s === "bottom") {
              var h = +((s === "top" && !c) || (s === "bottom" && c));
              l = we(we({}, l), {}, { x1: i, y1: a + h * u, x2: i + o, y2: a + h * u });
            } else {
              var p = +((s === "left" && !c) || (s === "right" && c));
              l = we(we({}, l), {}, { x1: i + p * o, y1: a, x2: i + p * o, y2: a + u });
            }
            return A.createElement(
              "line",
              gr({}, l, { className: ee("recharts-cartesian-axis-line", Xe(f, "className")) }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (n, i, a) {
            var o = this,
              u = this.props,
              s = u.tickLine,
              c = u.stroke,
              f = u.tick,
              l = u.tickFormatter,
              h = u.unit,
              p = Eh(we(we({}, this.props), {}, { ticks: n }), i, a),
              y = this.getTickTextAnchor(),
              v = this.getTickVerticalAnchor(),
              d = Z(this.props, !1),
              b = Z(f, !1),
              x = we(we({}, d), {}, { fill: "none" }, Z(s, !1)),
              w = p.map(function (O, m) {
                var g = o.getTickLineCoord(O),
                  _ = g.line,
                  S = g.tick,
                  P = we(
                    we(
                      we(
                        we({ textAnchor: y, verticalAnchor: v }, d),
                        {},
                        { stroke: "none", fill: c },
                        b,
                      ),
                      S,
                    ),
                    {},
                    { index: m, payload: O, visibleTicksCount: p.length, tickFormatter: l },
                  );
                return A.createElement(
                  ce,
                  gr(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(O.value, "-")
                        .concat(O.coordinate, "-")
                        .concat(O.tickCoord),
                    },
                    $i(o.props, O, m),
                  ),
                  s &&
                    A.createElement(
                      "line",
                      gr({}, x, _, {
                        className: ee("recharts-cartesian-axis-tick-line", Xe(s, "className")),
                      }),
                    ),
                  f &&
                    t.renderTickItem(
                      f,
                      P,
                      "".concat(X(l) ? l(O.value, m) : O.value).concat(h || ""),
                    ),
                );
              });
            return A.createElement("g", { className: "recharts-cartesian-axis-ticks" }, w);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              s = i.ticksGenerator,
              c = i.className,
              f = i.hide;
            if (f) return null;
            var l = this.props,
              h = l.ticks,
              p = il(l, DN),
              y = h;
            return (
              X(s) && (y = h && h.length > 0 ? s(this.props) : s(p)),
              o <= 0 || u <= 0 || !y || !y.length
                ? null
                : A.createElement(
                    ce,
                    {
                      className: ee("recharts-cartesian-axis", c),
                      ref: function (d) {
                        n.layerReference = d;
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(y, this.state.fontSize, this.state.letterSpacing),
                    $e.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, i, a) {
            var o,
              u = ee(i.className, "recharts-cartesian-axis-tick-value");
            return (
              A.isValidElement(n)
                ? (o = A.cloneElement(n, we(we({}, i), {}, { className: u })))
                : X(n)
                  ? (o = n(we(we({}, i), {}, { className: u })))
                  : (o = A.createElement(
                      Wi,
                      gr({}, i, { className: "recharts-cartesian-axis-tick-value" }),
                      a,
                    )),
              o
            );
          },
        },
      ],
    )
  );
})(q.Component);
jh(nn, "displayName", "CartesianAxis");
jh(nn, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
var HN = ["x1", "y1", "x2", "y2", "key"],
  GN = ["offset"];
function ar(e) {
  "@babel/helpers - typeof";
  return (
    (ar =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ar(e)
  );
}
function tb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tb(Object(r), !0).forEach(function (n) {
          KN(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function KN(e, t, r) {
  return (
    (t = VN(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function VN(e) {
  var t = XN(e, "string");
  return ar(t) == "symbol" ? t : t + "";
}
function XN(e, t) {
  if (ar(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zt() {
  return (
    (Zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Zt.apply(this, arguments)
  );
}
function rb(e, t) {
  if (e == null) return {};
  var r = YN(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function YN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ZN = function (t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity,
    i = t.x,
    a = t.y,
    o = t.width,
    u = t.height,
    s = t.ry;
  return A.createElement("rect", {
    x: i,
    y: a,
    ry: s,
    width: o,
    height: u,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg",
  });
};
function sw(e, t) {
  var r;
  if (A.isValidElement(e)) r = A.cloneElement(e, t);
  else if (X(e)) r = e(t);
  else {
    var n = t.x1,
      i = t.y1,
      a = t.x2,
      o = t.y2,
      u = t.key,
      s = rb(t, HN),
      c = Z(s, !1);
    c.offset;
    var f = rb(c, GN);
    r = A.createElement("line", Zt({}, f, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: u }));
  }
  return r;
}
function JN(e) {
  var t = e.x,
    r = e.width,
    n = e.horizontal,
    i = n === void 0 ? !0 : n,
    a = e.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function (u, s) {
    var c = Ce(Ce({}, e), {}, { x1: t, y1: u, x2: t + r, y2: u, key: "line-".concat(s), index: s });
    return sw(i, c);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function QN(e) {
  var t = e.y,
    r = e.height,
    n = e.vertical,
    i = n === void 0 ? !0 : n,
    a = e.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function (u, s) {
    var c = Ce(Ce({}, e), {}, { x1: u, y1: t, x2: u, y2: t + r, key: "line-".concat(s), index: s });
    return sw(i, c);
  });
  return A.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function eD(e) {
  var t = e.horizontalFill,
    r = e.fillOpacity,
    n = e.x,
    i = e.y,
    a = e.width,
    o = e.height,
    u = e.horizontalPoints,
    s = e.horizontal,
    c = s === void 0 ? !0 : s;
  if (!c || !t || !t.length) return null;
  var f = u
    .map(function (h) {
      return Math.round(h + i - i);
    })
    .sort(function (h, p) {
      return h - p;
    });
  i !== f[0] && f.unshift(0);
  var l = f.map(function (h, p) {
    var y = !f[p + 1],
      v = y ? i + o - h : f[p + 1] - h;
    if (v <= 0) return null;
    var d = p % t.length;
    return A.createElement("rect", {
      key: "react-".concat(p),
      y: h,
      x: n,
      height: v,
      width: a,
      stroke: "none",
      fill: t[d],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return A.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, l);
}
function tD(e) {
  var t = e.vertical,
    r = t === void 0 ? !0 : t,
    n = e.verticalFill,
    i = e.fillOpacity,
    a = e.x,
    o = e.y,
    u = e.width,
    s = e.height,
    c = e.verticalPoints;
  if (!r || !n || !n.length) return null;
  var f = c
    .map(function (h) {
      return Math.round(h + a - a);
    })
    .sort(function (h, p) {
      return h - p;
    });
  a !== f[0] && f.unshift(0);
  var l = f.map(function (h, p) {
    var y = !f[p + 1],
      v = y ? a + u - h : f[p + 1] - h;
    if (v <= 0) return null;
    var d = p % n.length;
    return A.createElement("rect", {
      key: "react-".concat(p),
      x: h,
      y: o,
      width: v,
      height: s,
      stroke: "none",
      fill: n[d],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return A.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, l);
}
var rD = function (t, r) {
    var n = t.xAxis,
      i = t.width,
      a = t.height,
      o = t.offset;
    return wx(
      Eh(
        Ce(
          Ce(Ce({}, nn.defaultProps), n),
          {},
          { ticks: gt(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } },
        ),
      ),
      o.left,
      o.left + o.width,
      r,
    );
  },
  nD = function (t, r) {
    var n = t.yAxis,
      i = t.width,
      a = t.height,
      o = t.offset;
    return wx(
      Eh(
        Ce(
          Ce(Ce({}, nn.defaultProps), n),
          {},
          { ticks: gt(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } },
        ),
      ),
      o.top,
      o.top + o.height,
      r,
    );
  },
  pr = {
    horizontal: !0,
    vertical: !0,
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
  };
function yr(e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = Ah(),
    s = Ph(),
    c = Uk(),
    f = Ce(
      Ce({}, e),
      {},
      {
        stroke: (t = e.stroke) !== null && t !== void 0 ? t : pr.stroke,
        fill: (r = e.fill) !== null && r !== void 0 ? r : pr.fill,
        horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : pr.horizontal,
        horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : pr.horizontalFill,
        vertical: (a = e.vertical) !== null && a !== void 0 ? a : pr.vertical,
        verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : pr.verticalFill,
        x: L(e.x) ? e.x : c.left,
        y: L(e.y) ? e.y : c.top,
        width: L(e.width) ? e.width : c.width,
        height: L(e.height) ? e.height : c.height,
      },
    ),
    l = f.x,
    h = f.y,
    p = f.width,
    y = f.height,
    v = f.syncWithTicks,
    d = f.horizontalValues,
    b = f.verticalValues,
    x = Fk(),
    w = Wk();
  if (!L(p) || p <= 0 || !L(y) || y <= 0 || !L(l) || l !== +l || !L(h) || h !== +h) return null;
  var O = f.verticalCoordinatesGenerator || rD,
    m = f.horizontalCoordinatesGenerator || nD,
    g = f.horizontalPoints,
    _ = f.verticalPoints;
  if ((!g || !g.length) && X(m)) {
    var S = d && d.length,
      P = m(
        {
          yAxis: w ? Ce(Ce({}, w), {}, { ticks: S ? d : w.ticks }) : void 0,
          width: u,
          height: s,
          offset: c,
        },
        S ? !0 : v,
      );
    (xt(
      Array.isArray(P),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        ar(P),
        "]",
      ),
    ),
      Array.isArray(P) && (g = P));
  }
  if ((!_ || !_.length) && X(O)) {
    var M = b && b.length,
      E = O(
        {
          xAxis: x ? Ce(Ce({}, x), {}, { ticks: M ? b : x.ticks }) : void 0,
          width: u,
          height: s,
          offset: c,
        },
        M ? !0 : v,
      );
    (xt(
      Array.isArray(E),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        ar(E),
        "]",
      ),
    ),
      Array.isArray(E) && (_ = E));
  }
  return A.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    A.createElement(ZN, {
      fill: f.fill,
      fillOpacity: f.fillOpacity,
      x: f.x,
      y: f.y,
      width: f.width,
      height: f.height,
      ry: f.ry,
    }),
    A.createElement(JN, Zt({}, f, { offset: c, horizontalPoints: g, xAxis: x, yAxis: w })),
    A.createElement(QN, Zt({}, f, { offset: c, verticalPoints: _, xAxis: x, yAxis: w })),
    A.createElement(eD, Zt({}, f, { horizontalPoints: g })),
    A.createElement(tD, Zt({}, f, { verticalPoints: _ })),
  );
}
yr.displayName = "CartesianGrid";
var iD = ["type", "layout", "connectNulls", "ref"],
  aD = ["key"];
function zr(e) {
  "@babel/helpers - typeof";
  return (
    (zr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zr(e)
  );
}
function nb(e, t) {
  if (e == null) return {};
  var r = oD(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function oD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _n() {
  return (
    (_n = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _n.apply(this, arguments)
  );
}
function ib(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ib(Object(r), !0).forEach(function (n) {
          tt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ib(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function vr(e) {
  return lD(e) || cD(e) || sD(e) || uD();
}
function uD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sD(e, t) {
  if (e) {
    if (typeof e == "string") return yf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yf(e, t);
  }
}
function cD(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function lD(e) {
  if (Array.isArray(e)) return yf(e);
}
function yf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fD(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ab(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, lw(n.key), n));
  }
}
function hD(e, t, r) {
  return (
    t && ab(e.prototype, t),
    r && ab(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function dD(e, t, r) {
  return (
    (t = Sa(t)),
    pD(e, cw() ? Reflect.construct(t, r || [], Sa(e).constructor) : t.apply(e, r))
  );
}
function pD(e, t) {
  if (t && (zr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vD(e);
}
function vD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (cw = function () {
    return !!e;
  })();
}
function Sa(e) {
  return (
    (Sa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Sa(e)
  );
}
function yD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && mf(e, t));
}
function mf(e, t) {
  return (
    (mf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    mf(e, t)
  );
}
function tt(e, t, r) {
  return (
    (t = lw(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function lw(e) {
  var t = mD(e, "string");
  return zr(t) == "symbol" ? t : t + "";
}
function mD(e, t) {
  if (zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var rt = (function (e) {
  function t() {
    var r;
    fD(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = dD(this, t, [].concat(i))),
      tt(r, "state", { isAnimationFinished: !0, totalLength: 0 }),
      tt(r, "generateSimpleStrokeDasharray", function (o, u) {
        return "".concat(u, "px ").concat(o - u, "px");
      }),
      tt(r, "getStrokeDasharray", function (o, u, s) {
        var c = s.reduce(function (b, x) {
          return b + x;
        });
        if (!c) return r.generateSimpleStrokeDasharray(u, o);
        for (
          var f = Math.floor(o / c), l = o % c, h = u - o, p = [], y = 0, v = 0;
          y < s.length;
          v += s[y], ++y
        )
          if (v + s[y] > l) {
            p = [].concat(vr(s.slice(0, y)), [l - v]);
            break;
          }
        var d = p.length % 2 === 0 ? [0, h] : [h];
        return []
          .concat(vr(t.repeat(s, f)), vr(p), d)
          .map(function (b) {
            return "".concat(b, "px");
          })
          .join(", ");
      }),
      tt(r, "id", Jr("recharts-line-")),
      tt(r, "pathRef", function (o) {
        r.mainCurve = o;
      }),
      tt(r, "handleAnimationEnd", function () {
        (r.setState({ isAnimationFinished: !0 }),
          r.props.onAnimationEnd && r.props.onAnimationEnd());
      }),
      tt(r, "handleAnimationStart", function () {
        (r.setState({ isAnimationFinished: !1 }),
          r.props.onAnimationStart && r.props.onAnimationStart());
      }),
      r
    );
  }
  return (
    yD(t, e),
    hD(
      t,
      [
        {
          key: "componentDidMount",
          value: function () {
            if (this.props.isAnimationActive) {
              var n = this.getTotalLength();
              this.setState({ totalLength: n });
            }
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            if (this.props.isAnimationActive) {
              var n = this.getTotalLength();
              n !== this.state.totalLength && this.setState({ totalLength: n });
            }
          },
        },
        {
          key: "getTotalLength",
          value: function () {
            var n = this.mainCurve;
            try {
              return (n && n.getTotalLength && n.getTotalLength()) || 0;
            } catch {
              return 0;
            }
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var a = this.props,
              o = a.points,
              u = a.xAxis,
              s = a.yAxis,
              c = a.layout,
              f = a.children,
              l = Ye(f, fi);
            if (!l) return null;
            var h = function (v, d) {
                return { x: v.x, y: v.y, value: v.value, errorVal: ke(v.payload, d) };
              },
              p = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
            return A.createElement(
              ce,
              p,
              l.map(function (y) {
                return A.cloneElement(y, {
                  key: "bar-".concat(y.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: s,
                  layout: c,
                  dataPointFormatter: h,
                });
              }),
            );
          },
        },
        {
          key: "renderDots",
          value: function (n, i, a) {
            var o = this.props.isAnimationActive;
            if (o && !this.state.isAnimationFinished) return null;
            var u = this.props,
              s = u.dot,
              c = u.points,
              f = u.dataKey,
              l = Z(this.props, !1),
              h = Z(s, !0),
              p = c.map(function (v, d) {
                var b = Fe(
                  Fe(Fe({ key: "dot-".concat(d), r: 3 }, l), h),
                  {},
                  {
                    index: d,
                    cx: v.x,
                    cy: v.y,
                    value: v.value,
                    dataKey: f,
                    payload: v.payload,
                    points: c,
                  },
                );
                return t.renderDotItem(s, b);
              }),
              y = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
            return A.createElement(ce, _n({ className: "recharts-line-dots", key: "dots" }, y), p);
          },
        },
        {
          key: "renderCurveStatically",
          value: function (n, i, a, o) {
            var u = this.props,
              s = u.type,
              c = u.layout,
              f = u.connectNulls;
            u.ref;
            var l = nb(u, iD),
              h = Fe(
                Fe(
                  Fe({}, Z(l, !0)),
                  {},
                  {
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
                    points: n,
                  },
                  o,
                ),
                {},
                { type: s, layout: c, connectNulls: f },
              );
            return A.createElement(Sr, _n({}, h, { pathRef: this.pathRef }));
          },
        },
        {
          key: "renderCurveWithAnimation",
          value: function (n, i) {
            var a = this,
              o = this.props,
              u = o.points,
              s = o.strokeDasharray,
              c = o.isAnimationActive,
              f = o.animationBegin,
              l = o.animationDuration,
              h = o.animationEasing,
              p = o.animationId,
              y = o.animateNewValues,
              v = o.width,
              d = o.height,
              b = this.state,
              x = b.prevPoints,
              w = b.totalLength;
            return A.createElement(
              ft,
              {
                begin: f,
                duration: l,
                isActive: c,
                easing: h,
                from: { t: 0 },
                to: { t: 1 },
                key: "line-".concat(p),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (O) {
                var m = O.t;
                if (x) {
                  var g = x.length / u.length,
                    _ = u.map(function (T, j) {
                      var C = Math.floor(j * g);
                      if (x[C]) {
                        var $ = x[C],
                          k = Ee($.x, T.x),
                          N = Ee($.y, T.y);
                        return Fe(Fe({}, T), {}, { x: k(m), y: N(m) });
                      }
                      if (y) {
                        var B = Ee(v * 2, T.x),
                          F = Ee(d / 2, T.y);
                        return Fe(Fe({}, T), {}, { x: B(m), y: F(m) });
                      }
                      return Fe(Fe({}, T), {}, { x: T.x, y: T.y });
                    });
                  return a.renderCurveStatically(_, n, i);
                }
                var S = Ee(0, w),
                  P = S(m),
                  M;
                if (s) {
                  var E = ""
                    .concat(s)
                    .split(/[,\s]+/gim)
                    .map(function (T) {
                      return parseFloat(T);
                    });
                  M = a.getStrokeDasharray(P, w, E);
                } else M = a.generateSimpleStrokeDasharray(w, P);
                return a.renderCurveStatically(u, n, i, { strokeDasharray: M });
              },
            );
          },
        },
        {
          key: "renderCurve",
          value: function (n, i) {
            var a = this.props,
              o = a.points,
              u = a.isAnimationActive,
              s = this.state,
              c = s.prevPoints,
              f = s.totalLength;
            return u && o && o.length && ((!c && f > 0) || !Ir(c, o))
              ? this.renderCurveWithAnimation(n, i)
              : this.renderCurveStatically(o, n, i);
          },
        },
        {
          key: "render",
          value: function () {
            var n,
              i = this.props,
              a = i.hide,
              o = i.dot,
              u = i.points,
              s = i.className,
              c = i.xAxis,
              f = i.yAxis,
              l = i.top,
              h = i.left,
              p = i.width,
              y = i.height,
              v = i.isAnimationActive,
              d = i.id;
            if (a || !u || !u.length) return null;
            var b = this.state.isAnimationFinished,
              x = u.length === 1,
              w = ee("recharts-line", s),
              O = c && c.allowDataOverflow,
              m = f && f.allowDataOverflow,
              g = O || m,
              _ = Q(d) ? this.id : d,
              S = (n = Z(o, !1)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 },
              P = S.r,
              M = P === void 0 ? 3 : P,
              E = S.strokeWidth,
              T = E === void 0 ? 2 : E,
              j = Sb(o) ? o : {},
              C = j.clipDot,
              $ = C === void 0 ? !0 : C,
              k = M * 2 + T;
            return A.createElement(
              ce,
              { className: w },
              O || m
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(_) },
                      A.createElement("rect", {
                        x: O ? h : h - p / 2,
                        y: m ? l : l - y / 2,
                        width: O ? p : p * 2,
                        height: m ? y : y * 2,
                      }),
                    ),
                    !$ &&
                      A.createElement(
                        "clipPath",
                        { id: "clipPath-dots-".concat(_) },
                        A.createElement("rect", {
                          x: h - k / 2,
                          y: l - k / 2,
                          width: p + k,
                          height: y + k,
                        }),
                      ),
                  )
                : null,
              !x && this.renderCurve(g, _),
              this.renderErrorBar(g, _),
              (x || o) && this.renderDots(g, $, _),
              (!v || b) && Ot.renderCallByParent(this.props, u),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? { prevAnimationId: n.animationId, curPoints: n.points, prevPoints: i.curPoints }
              : n.points !== i.curPoints
                ? { curPoints: n.points }
                : null;
          },
        },
        {
          key: "repeat",
          value: function (n, i) {
            for (var a = n.length % 2 !== 0 ? [].concat(vr(n), [0]) : n, o = [], u = 0; u < i; ++u)
              o = [].concat(vr(o), vr(a));
            return o;
          },
        },
        {
          key: "renderDotItem",
          value: function (n, i) {
            var a;
            if (A.isValidElement(n)) a = A.cloneElement(n, i);
            else if (X(n)) a = n(i);
            else {
              var o = i.key,
                u = nb(i, aD),
                s = ee("recharts-line-dot", typeof n != "boolean" ? n.className : "");
              a = A.createElement(Ya, _n({ key: o }, u, { className: s }));
            }
            return a;
          },
        },
      ],
    )
  );
})(q.PureComponent);
tt(rt, "displayName", "Line");
tt(rt, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !ur.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1,
});
tt(rt, "getComposedData", function (e) {
  var t = e.props,
    r = e.xAxis,
    n = e.yAxis,
    i = e.xAxisTicks,
    a = e.yAxisTicks,
    o = e.dataKey,
    u = e.bandSize,
    s = e.displayedData,
    c = e.offset,
    f = t.layout,
    l = s.map(function (h, p) {
      var y = ke(h, o);
      return f === "horizontal"
        ? {
            x: na({ axis: r, ticks: i, bandSize: u, entry: h, index: p }),
            y: Q(y) ? null : n.scale(y),
            value: y,
            payload: h,
          }
        : {
            x: Q(y) ? null : r.scale(y),
            y: na({ axis: n, ticks: a, bandSize: u, entry: h, index: p }),
            value: y,
            payload: h,
          };
    });
  return Fe({ points: l, layout: f }, c);
});
var gD = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
  bD = ["key"],
  fw;
function Ur(e) {
  "@babel/helpers - typeof";
  return (
    (Ur =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ur(e)
  );
}
function hw(e, t) {
  if (e == null) return {};
  var r = xD(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function xD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Jt() {
  return (
    (Jt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Jt.apply(this, arguments)
  );
}
function ob(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ob(Object(r), !0).forEach(function (n) {
          ut(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ob(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function wD(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ub(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, pw(n.key), n));
  }
}
function OD(e, t, r) {
  return (
    t && ub(e.prototype, t),
    r && ub(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _D(e, t, r) {
  return (
    (t = Aa(t)),
    SD(e, dw() ? Reflect.construct(t, r || [], Aa(e).constructor) : t.apply(e, r))
  );
}
function SD(e, t) {
  if (t && (Ur(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return AD(e);
}
function AD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (dw = function () {
    return !!e;
  })();
}
function Aa(e) {
  return (
    (Aa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Aa(e)
  );
}
function PD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && gf(e, t));
}
function gf(e, t) {
  return (
    (gf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    gf(e, t)
  );
}
function ut(e, t, r) {
  return (
    (t = pw(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function pw(e) {
  var t = TD(e, "string");
  return Ur(t) == "symbol" ? t : t + "";
}
function TD(e, t) {
  if (Ur(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ur(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ft = (function (e) {
  function t() {
    var r;
    wD(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return (
      (r = _D(this, t, [].concat(i))),
      ut(r, "state", { isAnimationFinished: !0 }),
      ut(r, "id", Jr("recharts-area-")),
      ut(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        (r.setState({ isAnimationFinished: !0 }), X(o) && o());
      }),
      ut(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        (r.setState({ isAnimationFinished: !1 }), X(o) && o());
      }),
      r
    );
  }
  return (
    PD(t, e),
    OD(
      t,
      [
        {
          key: "renderDots",
          value: function (n, i, a) {
            var o = this.props.isAnimationActive,
              u = this.state.isAnimationFinished;
            if (o && !u) return null;
            var s = this.props,
              c = s.dot,
              f = s.points,
              l = s.dataKey,
              h = Z(this.props, !1),
              p = Z(c, !0),
              y = f.map(function (d, b) {
                var x = Mt(
                  Mt(Mt({ key: "dot-".concat(b), r: 3 }, h), p),
                  {},
                  {
                    index: b,
                    cx: d.x,
                    cy: d.y,
                    dataKey: l,
                    value: d.value,
                    payload: d.payload,
                    points: f,
                  },
                );
                return t.renderDotItem(c, x);
              }),
              v = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
            return A.createElement(ce, Jt({ className: "recharts-area-dots" }, v), y);
          },
        },
        {
          key: "renderHorizontalRect",
          value: function (n) {
            var i = this.props,
              a = i.baseLine,
              o = i.points,
              u = i.strokeWidth,
              s = o[0].x,
              c = o[o.length - 1].x,
              f = n * Math.abs(s - c),
              l = It(
                o.map(function (h) {
                  return h.y || 0;
                }),
              );
            return (
              L(a) && typeof a == "number"
                ? (l = Math.max(a, l))
                : a &&
                  Array.isArray(a) &&
                  a.length &&
                  (l = Math.max(
                    It(
                      a.map(function (h) {
                        return h.y || 0;
                      }),
                    ),
                    l,
                  )),
              L(l)
                ? A.createElement("rect", {
                    x: s < c ? s : s - f,
                    y: 0,
                    width: f,
                    height: Math.floor(l + (u ? parseInt("".concat(u), 10) : 1)),
                  })
                : null
            );
          },
        },
        {
          key: "renderVerticalRect",
          value: function (n) {
            var i = this.props,
              a = i.baseLine,
              o = i.points,
              u = i.strokeWidth,
              s = o[0].y,
              c = o[o.length - 1].y,
              f = n * Math.abs(s - c),
              l = It(
                o.map(function (h) {
                  return h.x || 0;
                }),
              );
            return (
              L(a) && typeof a == "number"
                ? (l = Math.max(a, l))
                : a &&
                  Array.isArray(a) &&
                  a.length &&
                  (l = Math.max(
                    It(
                      a.map(function (h) {
                        return h.x || 0;
                      }),
                    ),
                    l,
                  )),
              L(l)
                ? A.createElement("rect", {
                    x: 0,
                    y: s < c ? s : s - f,
                    width: l + (u ? parseInt("".concat(u), 10) : 1),
                    height: Math.floor(f),
                  })
                : null
            );
          },
        },
        {
          key: "renderClipRect",
          value: function (n) {
            var i = this.props.layout;
            return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
          },
        },
        {
          key: "renderAreaStatically",
          value: function (n, i, a, o) {
            var u = this.props,
              s = u.layout,
              c = u.type,
              f = u.stroke,
              l = u.connectNulls,
              h = u.isRange;
            u.ref;
            var p = hw(u, gD);
            return A.createElement(
              ce,
              { clipPath: a ? "url(#clipPath-".concat(o, ")") : null },
              A.createElement(
                Sr,
                Jt({}, Z(p, !0), {
                  points: n,
                  connectNulls: l,
                  type: c,
                  baseLine: i,
                  layout: s,
                  stroke: "none",
                  className: "recharts-area-area",
                }),
              ),
              f !== "none" &&
                A.createElement(
                  Sr,
                  Jt({}, Z(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: s,
                    type: c,
                    connectNulls: l,
                    fill: "none",
                    points: n,
                  }),
                ),
              f !== "none" &&
                h &&
                A.createElement(
                  Sr,
                  Jt({}, Z(this.props, !1), {
                    className: "recharts-area-curve",
                    layout: s,
                    type: c,
                    connectNulls: l,
                    fill: "none",
                    points: i,
                  }),
                ),
            );
          },
        },
        {
          key: "renderAreaWithAnimation",
          value: function (n, i) {
            var a = this,
              o = this.props,
              u = o.points,
              s = o.baseLine,
              c = o.isAnimationActive,
              f = o.animationBegin,
              l = o.animationDuration,
              h = o.animationEasing,
              p = o.animationId,
              y = this.state,
              v = y.prevPoints,
              d = y.prevBaseLine;
            return A.createElement(
              ft,
              {
                begin: f,
                duration: l,
                isActive: c,
                easing: h,
                from: { t: 0 },
                to: { t: 1 },
                key: "area-".concat(p),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (b) {
                var x = b.t;
                if (v) {
                  var w = v.length / u.length,
                    O = u.map(function (S, P) {
                      var M = Math.floor(P * w);
                      if (v[M]) {
                        var E = v[M],
                          T = Ee(E.x, S.x),
                          j = Ee(E.y, S.y);
                        return Mt(Mt({}, S), {}, { x: T(x), y: j(x) });
                      }
                      return S;
                    }),
                    m;
                  if (L(s) && typeof s == "number") {
                    var g = Ee(d, s);
                    m = g(x);
                  } else if (Q(s) || Zr(s)) {
                    var _ = Ee(d, 0);
                    m = _(x);
                  } else
                    m = s.map(function (S, P) {
                      var M = Math.floor(P * w);
                      if (d[M]) {
                        var E = d[M],
                          T = Ee(E.x, S.x),
                          j = Ee(E.y, S.y);
                        return Mt(Mt({}, S), {}, { x: T(x), y: j(x) });
                      }
                      return S;
                    });
                  return a.renderAreaStatically(O, m, n, i);
                }
                return A.createElement(
                  ce,
                  null,
                  A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "animationClipPath-".concat(i) },
                      a.renderClipRect(x),
                    ),
                  ),
                  A.createElement(
                    ce,
                    { clipPath: "url(#animationClipPath-".concat(i, ")") },
                    a.renderAreaStatically(u, s, n, i),
                  ),
                );
              },
            );
          },
        },
        {
          key: "renderArea",
          value: function (n, i) {
            var a = this.props,
              o = a.points,
              u = a.baseLine,
              s = a.isAnimationActive,
              c = this.state,
              f = c.prevPoints,
              l = c.prevBaseLine,
              h = c.totalLength;
            return s && o && o.length && ((!f && h > 0) || !Ir(f, o) || !Ir(l, u))
              ? this.renderAreaWithAnimation(n, i)
              : this.renderAreaStatically(o, u, n, i);
          },
        },
        {
          key: "render",
          value: function () {
            var n,
              i = this.props,
              a = i.hide,
              o = i.dot,
              u = i.points,
              s = i.className,
              c = i.top,
              f = i.left,
              l = i.xAxis,
              h = i.yAxis,
              p = i.width,
              y = i.height,
              v = i.isAnimationActive,
              d = i.id;
            if (a || !u || !u.length) return null;
            var b = this.state.isAnimationFinished,
              x = u.length === 1,
              w = ee("recharts-area", s),
              O = l && l.allowDataOverflow,
              m = h && h.allowDataOverflow,
              g = O || m,
              _ = Q(d) ? this.id : d,
              S = (n = Z(o, !1)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 },
              P = S.r,
              M = P === void 0 ? 3 : P,
              E = S.strokeWidth,
              T = E === void 0 ? 2 : E,
              j = Sb(o) ? o : {},
              C = j.clipDot,
              $ = C === void 0 ? !0 : C,
              k = M * 2 + T;
            return A.createElement(
              ce,
              { className: w },
              O || m
                ? A.createElement(
                    "defs",
                    null,
                    A.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(_) },
                      A.createElement("rect", {
                        x: O ? f : f - p / 2,
                        y: m ? c : c - y / 2,
                        width: O ? p : p * 2,
                        height: m ? y : y * 2,
                      }),
                    ),
                    !$ &&
                      A.createElement(
                        "clipPath",
                        { id: "clipPath-dots-".concat(_) },
                        A.createElement("rect", {
                          x: f - k / 2,
                          y: c - k / 2,
                          width: p + k,
                          height: y + k,
                        }),
                      ),
                  )
                : null,
              x ? null : this.renderArea(g, _),
              (o || x) && this.renderDots(g, $, _),
              (!v || b) && Ot.renderCallByParent(this.props, u),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curPoints: n.points,
                  curBaseLine: n.baseLine,
                  prevPoints: i.curPoints,
                  prevBaseLine: i.curBaseLine,
                }
              : n.points !== i.curPoints || n.baseLine !== i.curBaseLine
                ? { curPoints: n.points, curBaseLine: n.baseLine }
                : null;
          },
        },
      ],
    )
  );
})(q.PureComponent);
fw = Ft;
ut(Ft, "displayName", "Area");
ut(Ft, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !ur.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
});
ut(Ft, "getBaseValue", function (e, t, r, n) {
  var i = e.layout,
    a = e.baseValue,
    o = t.props.baseValue,
    u = o ?? a;
  if (L(u) && typeof u == "number") return u;
  var s = i === "horizontal" ? n : r,
    c = s.scale.domain();
  if (s.type === "number") {
    var f = Math.max(c[0], c[1]),
      l = Math.min(c[0], c[1]);
    return u === "dataMin" ? l : u === "dataMax" || f < 0 ? f : Math.max(Math.min(c[0], c[1]), 0);
  }
  return u === "dataMin" ? c[0] : u === "dataMax" ? c[1] : c[0];
});
ut(Ft, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.xAxis,
    i = e.yAxis,
    a = e.xAxisTicks,
    o = e.yAxisTicks,
    u = e.bandSize,
    s = e.dataKey,
    c = e.stackedData,
    f = e.dataStartIndex,
    l = e.displayedData,
    h = e.offset,
    p = t.layout,
    y = c && c.length,
    v = fw.getBaseValue(t, r, n, i),
    d = p === "horizontal",
    b = !1,
    x = l.map(function (O, m) {
      var g;
      y ? (g = c[f + m]) : ((g = ke(O, s)), Array.isArray(g) ? (b = !0) : (g = [v, g]));
      var _ = g[1] == null || (y && ke(O, s) == null);
      return d
        ? {
            x: na({ axis: n, ticks: a, bandSize: u, entry: O, index: m }),
            y: _ ? null : i.scale(g[1]),
            value: g,
            payload: O,
          }
        : {
            x: _ ? null : n.scale(g[1]),
            y: na({ axis: i, ticks: o, bandSize: u, entry: O, index: m }),
            value: g,
            payload: O,
          };
    }),
    w;
  return (
    y || b
      ? (w = x.map(function (O) {
          var m = Array.isArray(O.value) ? O.value[0] : null;
          return d
            ? { x: O.x, y: m != null && O.y != null ? i.scale(m) : null }
            : { x: m != null ? n.scale(m) : null, y: O.y };
        }))
      : (w = d ? i.scale(v) : n.scale(v)),
    Mt({ points: x, baseLine: w, layout: p, isRange: b }, h)
  );
});
ut(Ft, "renderDotItem", function (e, t) {
  var r;
  if (A.isValidElement(e)) r = A.cloneElement(e, t);
  else if (X(e)) r = e(t);
  else {
    var n = ee("recharts-area-dot", typeof e != "boolean" ? e.className : ""),
      i = t.key,
      a = hw(t, bD);
    r = A.createElement(Ya, Jt({}, a, { key: i, className: n }));
  }
  return r;
});
function Hr(e) {
  "@babel/helpers - typeof";
  return (
    (Hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hr(e)
  );
}
function ED(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function jD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, mw(n.key), n));
  }
}
function MD(e, t, r) {
  return (t && jD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function $D(e, t, r) {
  return (
    (t = Pa(t)),
    CD(e, vw() ? Reflect.construct(t, r || [], Pa(e).constructor) : t.apply(e, r))
  );
}
function CD(e, t) {
  if (t && (Hr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ID(e);
}
function ID(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (vw = function () {
    return !!e;
  })();
}
function Pa(e) {
  return (
    (Pa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Pa(e)
  );
}
function kD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && bf(e, t));
}
function bf(e, t) {
  return (
    (bf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    bf(e, t)
  );
}
function yw(e, t, r) {
  return (
    (t = mw(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function mw(e) {
  var t = ND(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function ND(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function xf() {
  return (
    (xf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xf.apply(this, arguments)
  );
}
function DD(e) {
  var t = e.xAxisId,
    r = Ah(),
    n = Ph(),
    i = Zx(t);
  return i == null
    ? null
    : q.createElement(
        nn,
        xf({}, i, {
          className: ee("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
          viewBox: { x: 0, y: 0, width: r, height: n },
          ticksGenerator: function (o) {
            return gt(o, !0);
          },
        }),
      );
}
var pt = (function (e) {
  function t() {
    return (ED(this, t), $D(this, t, arguments));
  }
  return (
    kD(t, e),
    MD(t, [
      {
        key: "render",
        value: function () {
          return q.createElement(DD, this.props);
        },
      },
    ])
  );
})(q.Component);
yw(pt, "displayName", "XAxis");
yw(pt, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
});
function Gr(e) {
  "@babel/helpers - typeof";
  return (
    (Gr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Gr(e)
  );
}
function RD(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function qD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, xw(n.key), n));
  }
}
function LD(e, t, r) {
  return (t && qD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function BD(e, t, r) {
  return (
    (t = Ta(t)),
    FD(e, gw() ? Reflect.construct(t, r || [], Ta(e).constructor) : t.apply(e, r))
  );
}
function FD(e, t) {
  if (t && (Gr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return WD(e);
}
function WD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (gw = function () {
    return !!e;
  })();
}
function Ta(e) {
  return (
    (Ta = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ta(e)
  );
}
function zD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wf(e, t));
}
function wf(e, t) {
  return (
    (wf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    wf(e, t)
  );
}
function bw(e, t, r) {
  return (
    (t = xw(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function xw(e) {
  var t = UD(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function UD(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Of() {
  return (
    (Of = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Of.apply(this, arguments)
  );
}
var HD = function (t) {
    var r = t.yAxisId,
      n = Ah(),
      i = Ph(),
      a = Jx(r);
    return a == null
      ? null
      : q.createElement(
          nn,
          Of({}, a, {
            className: ee("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
            viewBox: { x: 0, y: 0, width: n, height: i },
            ticksGenerator: function (u) {
              return gt(u, !0);
            },
          }),
        );
  },
  vt = (function (e) {
    function t() {
      return (RD(this, t), BD(this, t, arguments));
    }
    return (
      zD(t, e),
      LD(t, [
        {
          key: "render",
          value: function () {
            return q.createElement(HD, this.props);
          },
        },
      ])
    );
  })(q.Component);
bw(vt, "displayName", "YAxis");
bw(vt, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
});
function sb(e) {
  return XD(e) || VD(e) || KD(e) || GD();
}
function GD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KD(e, t) {
  if (e) {
    if (typeof e == "string") return _f(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _f(e, t);
  }
}
function VD(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function XD(e) {
  if (Array.isArray(e)) return _f(e);
}
function _f(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Sf = function (t, r, n, i, a) {
    var o = Ye(t, eo),
      u = Ye(t, ro),
      s = [].concat(sb(o), sb(u)),
      c = Ye(t, io),
      f = "".concat(i, "Id"),
      l = i[0],
      h = r;
    if (
      (s.length &&
        (h = s.reduce(function (v, d) {
          if (d.props[f] === n && ct(d.props, "extendDomain") && L(d.props[l])) {
            var b = d.props[l];
            return [Math.min(v[0], b), Math.max(v[1], b)];
          }
          return v;
        }, h)),
      c.length)
    ) {
      var p = "".concat(l, "1"),
        y = "".concat(l, "2");
      h = c.reduce(function (v, d) {
        if (d.props[f] === n && ct(d.props, "extendDomain") && L(d.props[p]) && L(d.props[y])) {
          var b = d.props[p],
            x = d.props[y];
          return [Math.min(v[0], b, x), Math.max(v[1], b, x)];
        }
        return v;
      }, h);
    }
    return (
      a &&
        a.length &&
        (h = a.reduce(function (v, d) {
          return L(d) ? [Math.min(v[0], d), Math.max(v[1], d)] : v;
        }, h)),
      h
    );
  },
  al = { exports: {} },
  cb;
function YD() {
  return (
    cb ||
      ((cb = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function i(s, c, f) {
          ((this.fn = s), (this.context = c), (this.once = f || !1));
        }
        function a(s, c, f, l, h) {
          if (typeof f != "function") throw new TypeError("The listener must be a function");
          var p = new i(f, l || s, h),
            y = r ? r + c : c;
          return (
            s._events[y]
              ? s._events[y].fn
                ? (s._events[y] = [s._events[y], p])
                : s._events[y].push(p)
              : ((s._events[y] = p), s._eventsCount++),
            s
          );
        }
        function o(s, c) {
          --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[c];
        }
        function u() {
          ((this._events = new n()), (this._eventsCount = 0));
        }
        ((u.prototype.eventNames = function () {
          var c = [],
            f,
            l;
          if (this._eventsCount === 0) return c;
          for (l in (f = this._events)) t.call(f, l) && c.push(r ? l.slice(1) : l);
          return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
        }),
          (u.prototype.listeners = function (c) {
            var f = r ? r + c : c,
              l = this._events[f];
            if (!l) return [];
            if (l.fn) return [l.fn];
            for (var h = 0, p = l.length, y = new Array(p); h < p; h++) y[h] = l[h].fn;
            return y;
          }),
          (u.prototype.listenerCount = function (c) {
            var f = r ? r + c : c,
              l = this._events[f];
            return l ? (l.fn ? 1 : l.length) : 0;
          }),
          (u.prototype.emit = function (c, f, l, h, p, y) {
            var v = r ? r + c : c;
            if (!this._events[v]) return !1;
            var d = this._events[v],
              b = arguments.length,
              x,
              w;
            if (d.fn) {
              switch ((d.once && this.removeListener(c, d.fn, void 0, !0), b)) {
                case 1:
                  return (d.fn.call(d.context), !0);
                case 2:
                  return (d.fn.call(d.context, f), !0);
                case 3:
                  return (d.fn.call(d.context, f, l), !0);
                case 4:
                  return (d.fn.call(d.context, f, l, h), !0);
                case 5:
                  return (d.fn.call(d.context, f, l, h, p), !0);
                case 6:
                  return (d.fn.call(d.context, f, l, h, p, y), !0);
              }
              for (w = 1, x = new Array(b - 1); w < b; w++) x[w - 1] = arguments[w];
              d.fn.apply(d.context, x);
            } else {
              var O = d.length,
                m;
              for (w = 0; w < O; w++)
                switch ((d[w].once && this.removeListener(c, d[w].fn, void 0, !0), b)) {
                  case 1:
                    d[w].fn.call(d[w].context);
                    break;
                  case 2:
                    d[w].fn.call(d[w].context, f);
                    break;
                  case 3:
                    d[w].fn.call(d[w].context, f, l);
                    break;
                  case 4:
                    d[w].fn.call(d[w].context, f, l, h);
                    break;
                  default:
                    if (!x) for (m = 1, x = new Array(b - 1); m < b; m++) x[m - 1] = arguments[m];
                    d[w].fn.apply(d[w].context, x);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (c, f, l) {
            return a(this, c, f, l, !1);
          }),
          (u.prototype.once = function (c, f, l) {
            return a(this, c, f, l, !0);
          }),
          (u.prototype.removeListener = function (c, f, l, h) {
            var p = r ? r + c : c;
            if (!this._events[p]) return this;
            if (!f) return (o(this, p), this);
            var y = this._events[p];
            if (y.fn) y.fn === f && (!h || y.once) && (!l || y.context === l) && o(this, p);
            else {
              for (var v = 0, d = [], b = y.length; v < b; v++)
                (y[v].fn !== f || (h && !y[v].once) || (l && y[v].context !== l)) && d.push(y[v]);
              d.length ? (this._events[p] = d.length === 1 ? d[0] : d) : o(this, p);
            }
            return this;
          }),
          (u.prototype.removeAllListeners = function (c) {
            var f;
            return (
              c
                ? ((f = r ? r + c : c), this._events[f] && o(this, f))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (u.prototype.off = u.prototype.removeListener),
          (u.prototype.addListener = u.prototype.on),
          (u.prefixed = r),
          (u.EventEmitter = u),
          (e.exports = u));
      })(al)),
    al.exports
  );
}
var ZD = YD();
const JD = le(ZD);
var ol = new JD(),
  ul = "recharts.syncMouseEvents";
function ni(e) {
  "@babel/helpers - typeof";
  return (
    (ni =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ni(e)
  );
}
function QD(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function eR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ww(n.key), n));
  }
}
function tR(e, t, r) {
  return (t && eR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function sl(e, t, r) {
  return (
    (t = ww(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function ww(e) {
  var t = rR(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function rR(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nR = (function () {
  function e() {
    (QD(this, e),
      sl(this, "activeIndex", 0),
      sl(this, "coordinateList", []),
      sl(this, "layout", "horizontal"));
  }
  return tR(e, [
    {
      key: "setDetails",
      value: function (r) {
        var n,
          i = r.coordinateList,
          a = i === void 0 ? null : i,
          o = r.container,
          u = o === void 0 ? null : o,
          s = r.layout,
          c = s === void 0 ? null : s,
          f = r.offset,
          l = f === void 0 ? null : f,
          h = r.mouseHandlerCallback,
          p = h === void 0 ? null : h;
        ((this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = u ?? this.container),
          (this.layout = c ?? this.layout),
          (this.offset = l ?? this.offset),
          (this.mouseHandlerCallback = p ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          )));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1)),
                this.spoofMouse());
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.max(this.activeIndex - 1, 0)), this.spoofMouse());
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var r, n;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var i = this.container.getBoundingClientRect(),
            a = i.x,
            o = i.y,
            u = i.height,
            s = this.coordinateList[this.activeIndex].coordinate,
            c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            l = a + s + c,
            h = o + this.offset.top + u / 2 + f;
          this.mouseHandlerCallback({ pageX: l, pageY: h });
        }
      },
    },
  ]);
})();
function iR(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0],
      i = e == null ? void 0 : e[1];
    if (n && i && L(n) && L(i)) return !0;
  }
  return !1;
}
function aR(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function Ow(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = je(t, r, n, i),
    u = je(t, r, n, a);
  return { points: [o, u], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function oR(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal") ((n = t.x), (a = n), (i = r.top), (o = r.top + r.height));
  else if (e === "vertical") ((i = t.y), (o = i), (n = r.left), (a = r.left + r.width));
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx,
        s = t.cy,
        c = t.innerRadius,
        f = t.outerRadius,
        l = t.angle,
        h = je(u, s, c, l),
        p = je(u, s, f, l);
      ((n = h.x), (i = h.y), (a = p.x), (o = p.y));
    } else return Ow(t);
  return [
    { x: n, y: i },
    { x: a, y: o },
  ];
}
function ii(e) {
  "@babel/helpers - typeof";
  return (
    (ii =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ii(e)
  );
}
function lb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lb(Object(r), !0).forEach(function (n) {
          uR(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : lb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function uR(e, t, r) {
  return (
    (t = sR(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function sR(e) {
  var t = cR(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function cR(e, t) {
  if (ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lR(e) {
  var t,
    r,
    n = e.element,
    i = e.tooltipEventType,
    a = e.isActive,
    o = e.activeCoordinate,
    u = e.activePayload,
    s = e.offset,
    c = e.activeTooltipIndex,
    f = e.tooltipAxisBandSize,
    l = e.layout,
    h = e.chartName,
    p =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !p || !a || !o || (h !== "ScatterChart" && i !== "axis")) return null;
  var y,
    v = Sr;
  if (h === "ScatterChart") ((y = o), (v = JC));
  else if (h === "BarChart") ((y = aR(l, o, s, f)), (v = wh));
  else if (l === "radial") {
    var d = Ow(o),
      b = d.cx,
      x = d.cy,
      w = d.radius,
      O = d.startAngle,
      m = d.endAngle;
    ((y = { cx: b, cy: x, startAngle: O, endAngle: m, innerRadius: w, outerRadius: w }), (v = Px));
  } else ((y = { points: oR(l, o, s) }), (v = Sr));
  var g = Pi(
    Pi(Pi(Pi({ stroke: "#ccc", pointerEvents: "none" }, s), y), Z(p, !1)),
    {},
    { payload: u, payloadIndex: c, className: ee("recharts-tooltip-cursor", p.className) },
  );
  return q.isValidElement(p) ? q.cloneElement(p, g) : q.createElement(v, g);
}
var fR = ["item"],
  hR = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Kr(e) {
  "@babel/helpers - typeof";
  return (
    (Kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Kr(e)
  );
}
function br() {
  return (
    (br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    br.apply(this, arguments)
  );
}
function fb(e, t) {
  return vR(e) || pR(e, t) || Sw(e, t) || dR();
}
function dR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pR(e, t) {
  var r = e == null ? null : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      c = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
    } catch (f) {
      ((c = !0), (i = f));
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function vR(e) {
  if (Array.isArray(e)) return e;
}
function hb(e, t) {
  if (e == null) return {};
  var r = yR(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function yR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function mR(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function gR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Aw(n.key), n));
  }
}
function bR(e, t, r) {
  return (t && gR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function xR(e, t, r) {
  return (
    (t = Ea(t)),
    wR(e, _w() ? Reflect.construct(t, r || [], Ea(e).constructor) : t.apply(e, r))
  );
}
function wR(e, t) {
  if (t && (Kr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return OR(e);
}
function OR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _w() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_w = function () {
    return !!e;
  })();
}
function Ea(e) {
  return (
    (Ea = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ea(e)
  );
}
function _R(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Af(e, t));
}
function Af(e, t) {
  return (
    (Af = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Af(e, t)
  );
}
function Vr(e) {
  return PR(e) || AR(e) || Sw(e) || SR();
}
function SR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sw(e, t) {
  if (e) {
    if (typeof e == "string") return Pf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pf(e, t);
  }
}
function AR(e) {
  if ((typeof Symbol < "u" && e[Symbol.iterator] != null) || e["@@iterator"] != null)
    return Array.from(e);
}
function PR(e) {
  if (Array.isArray(e)) return Pf(e);
}
function Pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function db(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? db(Object(r), !0).forEach(function (n) {
          G(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : db(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function G(e, t, r) {
  return (
    (t = Aw(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Aw(e) {
  var t = TR(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function TR(e, t) {
  if (Kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ER = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  jR = { width: "100%", height: "100%" },
  Pw = { x: 0, y: 0 };
function Ti(e) {
  return e;
}
var MR = function (t, r) {
    return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
  },
  $R = function (t, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          u = i.radius;
        return I(I(I({}, i), je(i.cx, i.cy, u, o)), {}, { angle: o, radius: u });
      }
      var s = a.coordinate,
        c = i.angle;
      return I(I(I({}, i), je(i.cx, i.cy, s, c)), {}, { angle: c, radius: s });
    }
    return Pw;
  },
  ao = function (t, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (u, s) {
        var c = s.props.data;
        return c && c.length ? [].concat(Vr(u), Vr(c)) : u;
      }, []);
    return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
  };
function Tw(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Tf = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = ao(r, t);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (s, c) {
          var f,
            l = (f = c.props.data) !== null && f !== void 0 ? f : r;
          l &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            t.dataEndIndex - t.dataStartIndex >= n &&
            (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var h;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var p = l === void 0 ? u : l;
            h = ji(p, o.dataKey, i);
          } else h = (l && l[n]) || u[n];
          return h ? [].concat(Vr(s), [_x(c, h)]) : s;
        }, []);
  },
  pb = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = MR(a, n),
      u = t.orderedTooltipTicks,
      s = t.tooltipAxis,
      c = t.tooltipTicks,
      f = $j(o, u, c, s);
    if (f >= 0 && c) {
      var l = c[f] && c[f].value,
        h = Tf(t, r, f, l),
        p = $R(n, u, f, a);
      return { activeTooltipIndex: f, activeLabel: l, activePayload: h, activeCoordinate: p };
    }
    return null;
  },
  CR = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      s = r.dataStartIndex,
      c = r.dataEndIndex,
      f = t.layout,
      l = t.children,
      h = t.stackOffset,
      p = xx(f, a);
    return n.reduce(function (y, v) {
      var d,
        b = v.type.defaultProps !== void 0 ? I(I({}, v.type.defaultProps), v.props) : v.props,
        x = b.type,
        w = b.dataKey,
        O = b.allowDataOverflow,
        m = b.allowDuplicatedCategory,
        g = b.scale,
        _ = b.ticks,
        S = b.includeHidden,
        P = b[o];
      if (y[P]) return y;
      var M = ao(t.data, {
          graphicalItems: i.filter(function (z) {
            var V,
              fe =
                o in z.props
                  ? z.props[o]
                  : (V = z.type.defaultProps) === null || V === void 0
                    ? void 0
                    : V[o];
            return fe === P;
          }),
          dataStartIndex: s,
          dataEndIndex: c,
        }),
        E = M.length,
        T,
        j,
        C;
      iR(b.domain, O, x) &&
        ((T = zl(b.domain, null, O)),
        p && (x === "number" || g !== "auto") && (C = wn(M, w, "category")));
      var $ = Tw(x);
      if (!T || T.length === 0) {
        var k,
          N = (k = b.domain) !== null && k !== void 0 ? k : $;
        if (w) {
          if (((T = wn(M, w, x)), x === "category" && p)) {
            var B = _O(T);
            m && B
              ? ((j = T), (T = pa(0, E)))
              : m ||
                (T = Pm(N, T, v).reduce(function (z, V) {
                  return z.indexOf(V) >= 0 ? z : [].concat(Vr(z), [V]);
                }, []));
          } else if (x === "category")
            m
              ? (T = T.filter(function (z) {
                  return z !== "" && !Q(z);
                }))
              : (T = Pm(N, T, v).reduce(function (z, V) {
                  return z.indexOf(V) >= 0 || V === "" || Q(V) ? z : [].concat(Vr(z), [V]);
                }, []));
          else if (x === "number") {
            var F = Dj(
              M,
              i.filter(function (z) {
                var V,
                  fe,
                  ye =
                    o in z.props
                      ? z.props[o]
                      : (V = z.type.defaultProps) === null || V === void 0
                        ? void 0
                        : V[o],
                  Be =
                    "hide" in z.props
                      ? z.props.hide
                      : (fe = z.type.defaultProps) === null || fe === void 0
                        ? void 0
                        : fe.hide;
                return ye === P && (S || !Be);
              }),
              w,
              a,
              f,
            );
            F && (T = F);
          }
          p && (x === "number" || g !== "auto") && (C = wn(M, w, "category"));
        } else
          p
            ? (T = pa(0, E))
            : u && u[P] && u[P].hasStack && x === "number"
              ? (T = h === "expand" ? [0, 1] : Ox(u[P].stackGroups, s, c))
              : (T = bx(
                  M,
                  i.filter(function (z) {
                    var V = o in z.props ? z.props[o] : z.type.defaultProps[o],
                      fe = "hide" in z.props ? z.props.hide : z.type.defaultProps.hide;
                    return V === P && (S || !fe);
                  }),
                  x,
                  f,
                  !0,
                ));
        if (x === "number") ((T = Sf(l, T, P, a, _)), N && (T = zl(N, T, O)));
        else if (x === "category" && N) {
          var H = N,
            K = T.every(function (z) {
              return H.indexOf(z) >= 0;
            });
          K && (T = H);
        }
      }
      return I(
        I({}, y),
        {},
        G(
          {},
          P,
          I(
            I({}, b),
            {},
            {
              axisType: a,
              domain: T,
              categoricalDomain: C,
              duplicateDomain: j,
              originalDomain: (d = b.domain) !== null && d !== void 0 ? d : $,
              isCategorical: p,
              layout: f,
            },
          ),
        ),
      );
    }, {});
  },
  IR = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      s = r.dataStartIndex,
      c = r.dataEndIndex,
      f = t.layout,
      l = t.children,
      h = ao(t.data, { graphicalItems: n, dataStartIndex: s, dataEndIndex: c }),
      p = h.length,
      y = xx(f, a),
      v = -1;
    return n.reduce(function (d, b) {
      var x = b.type.defaultProps !== void 0 ? I(I({}, b.type.defaultProps), b.props) : b.props,
        w = x[o],
        O = Tw("number");
      if (!d[w]) {
        v++;
        var m;
        return (
          y
            ? (m = pa(0, p))
            : u && u[w] && u[w].hasStack
              ? ((m = Ox(u[w].stackGroups, s, c)), (m = Sf(l, m, w, a)))
              : ((m = zl(
                  O,
                  bx(
                    h,
                    n.filter(function (g) {
                      var _,
                        S,
                        P =
                          o in g.props
                            ? g.props[o]
                            : (_ = g.type.defaultProps) === null || _ === void 0
                              ? void 0
                              : _[o],
                        M =
                          "hide" in g.props
                            ? g.props.hide
                            : (S = g.type.defaultProps) === null || S === void 0
                              ? void 0
                              : S.hide;
                      return P === w && !M;
                    }),
                    "number",
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (m = Sf(l, m, w, a))),
          I(
            I({}, d),
            {},
            G(
              {},
              w,
              I(
                I({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: Xe(ER, "".concat(a, ".").concat(v % 2), null),
                  domain: m,
                  originalDomain: O,
                  isCategorical: y,
                  layout: f,
                },
              ),
            ),
          )
        );
      }
      return d;
    }, {});
  },
  kR = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      s = r.dataStartIndex,
      c = r.dataEndIndex,
      f = t.children,
      l = "".concat(i, "Id"),
      h = Ye(f, a),
      p = {};
    return (
      h && h.length
        ? (p = CR(t, {
            axes: h,
            graphicalItems: o,
            axisType: i,
            axisIdKey: l,
            stackGroups: u,
            dataStartIndex: s,
            dataEndIndex: c,
          }))
        : o &&
          o.length &&
          (p = IR(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: l,
            stackGroups: u,
            dataStartIndex: s,
            dataEndIndex: c,
          })),
      p
    );
  },
  NR = function (t) {
    var r = Ct(t),
      n = gt(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: Vf(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: ia(r, n),
    };
  },
  vb = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = ze(r, Rr),
      a = 0,
      o = 0;
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  DR = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = bt(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  yb = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : t === "centric"
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  RR = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      s = u === void 0 ? {} : u,
      c = n.width,
      f = n.height,
      l = n.children,
      h = n.margin || {},
      p = ze(l, Rr),
      y = ze(l, wr),
      v = Object.keys(s).reduce(
        function (m, g) {
          var _ = s[g],
            S = _.orientation;
          return !_.mirror && !_.hide ? I(I({}, m), {}, G({}, S, m[S] + _.width)) : m;
        },
        { left: h.left || 0, right: h.right || 0 },
      ),
      d = Object.keys(o).reduce(
        function (m, g) {
          var _ = o[g],
            S = _.orientation;
          return !_.mirror && !_.hide
            ? I(I({}, m), {}, G({}, S, Xe(m, "".concat(S)) + _.height))
            : m;
        },
        { top: h.top || 0, bottom: h.bottom || 0 },
      ),
      b = I(I({}, d), v),
      x = b.bottom;
    (p && (b.bottom += p.props.height || Rr.defaultProps.height), y && r && (b = kj(b, i, n, r)));
    var w = c - b.left - b.right,
      O = f - b.top - b.bottom;
    return I(I({ brushBottom: x }, b), {}, { width: Math.max(w, 0), height: Math.max(O, 0) });
  },
  qR = function (t, r) {
    if (r === "xAxis") return t[r].width;
    if (r === "yAxis") return t[r].height;
  },
  Ew = function (t) {
    var r = t.chartName,
      n = t.GraphicalChild,
      i = t.defaultTooltipEventType,
      a = i === void 0 ? "axis" : i,
      o = t.validateTooltipEventTypes,
      u = o === void 0 ? ["axis"] : o,
      s = t.axisComponents,
      c = t.legendContent,
      f = t.formatAxisMap,
      l = t.defaultProps,
      h = function (b, x) {
        var w = x.graphicalItems,
          O = x.stackGroups,
          m = x.offset,
          g = x.updateId,
          _ = x.dataStartIndex,
          S = x.dataEndIndex,
          P = b.barSize,
          M = b.layout,
          E = b.barGap,
          T = b.barCategoryGap,
          j = b.maxBarSize,
          C = yb(M),
          $ = C.numericAxisName,
          k = C.cateAxisName,
          N = DR(w),
          B = [];
        return (
          w.forEach(function (F, H) {
            var K = ao(b.data, { graphicalItems: [F], dataStartIndex: _, dataEndIndex: S }),
              z = F.type.defaultProps !== void 0 ? I(I({}, F.type.defaultProps), F.props) : F.props,
              V = z.dataKey,
              fe = z.maxBarSize,
              ye = z["".concat($, "Id")],
              Be = z["".concat(k, "Id")],
              Wt = {},
              Ne = s.reduce(function (zt, Ut) {
                var oo = x["".concat(Ut.axisType, "Map")],
                  Mh = z["".concat(Ut.axisType, "Id")];
                (oo && oo[Mh]) || Ut.axisType === "zAxis" || ir();
                var $h = oo[Mh];
                return I(
                  I({}, zt),
                  {},
                  G(G({}, Ut.axisType, $h), "".concat(Ut.axisType, "Ticks"), gt($h)),
                );
              }, Wt),
              W = Ne[k],
              Y = Ne["".concat(k, "Ticks")],
              J = O && O[ye] && O[ye].hasStack && Vj(F, O[ye].stackGroups),
              D = bt(F.type).indexOf("Bar") >= 0,
              pe = ia(W, Y),
              te = [],
              be = N && Cj({ barSize: P, stackGroups: O, totalSize: qR(Ne, k) });
            if (D) {
              var xe,
                De,
                jt = Q(fe) ? j : fe,
                fr =
                  (xe = (De = ia(W, Y, !0)) !== null && De !== void 0 ? De : jt) !== null &&
                  xe !== void 0
                    ? xe
                    : 0;
              ((te = Ij({
                barGap: E,
                barCategoryGap: T,
                bandSize: fr !== pe ? fr : pe,
                sizeList: be[Be],
                maxBarSize: jt,
              })),
                fr !== pe &&
                  (te = te.map(function (zt) {
                    return I(
                      I({}, zt),
                      {},
                      {
                        position: I(
                          I({}, zt.position),
                          {},
                          { offset: zt.position.offset - fr / 2 },
                        ),
                      },
                    );
                  })));
            }
            var di = F && F.type && F.type.getComposedData;
            di &&
              B.push({
                props: I(
                  I(
                    {},
                    di(
                      I(
                        I({}, Ne),
                        {},
                        {
                          displayedData: K,
                          props: b,
                          dataKey: V,
                          item: F,
                          bandSize: pe,
                          barPosition: te,
                          offset: m,
                          stackedData: J,
                          layout: M,
                          dataStartIndex: _,
                          dataEndIndex: S,
                        },
                      ),
                    ),
                  ),
                  {},
                  G(
                    G(G({ key: F.key || "item-".concat(H) }, $, Ne[$]), k, Ne[k]),
                    "animationId",
                    g,
                  ),
                ),
                childIndex: NO(F, b.children),
                item: F,
              });
          }),
          B
        );
      },
      p = function (b, x) {
        var w = b.props,
          O = b.dataStartIndex,
          m = b.dataEndIndex,
          g = b.updateId;
        if (!Fd({ props: w })) return null;
        var _ = w.children,
          S = w.layout,
          P = w.stackOffset,
          M = w.data,
          E = w.reverseStackOrder,
          T = yb(S),
          j = T.numericAxisName,
          C = T.cateAxisName,
          $ = Ye(_, n),
          k = Hj(M, $, "".concat(j, "Id"), "".concat(C, "Id"), P, E),
          N = s.reduce(function (z, V) {
            var fe = "".concat(V.axisType, "Map");
            return I(
              I({}, z),
              {},
              G(
                {},
                fe,
                kR(
                  w,
                  I(
                    I({}, V),
                    {},
                    {
                      graphicalItems: $,
                      stackGroups: V.axisType === j && k,
                      dataStartIndex: O,
                      dataEndIndex: m,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          B = RR(
            I(I({}, N), {}, { props: w, graphicalItems: $ }),
            x == null ? void 0 : x.legendBBox,
          );
        Object.keys(N).forEach(function (z) {
          N[z] = f(w, N[z], B, z.replace("Map", ""), r);
        });
        var F = N["".concat(C, "Map")],
          H = NR(F),
          K = h(
            w,
            I(
              I({}, N),
              {},
              {
                dataStartIndex: O,
                dataEndIndex: m,
                updateId: g,
                graphicalItems: $,
                stackGroups: k,
                offset: B,
              },
            ),
          );
        return I(
          I({ formattedGraphicalItems: K, graphicalItems: $, offset: B, stackGroups: k }, H),
          N,
        );
      },
      y = (function (d) {
        function b(x) {
          var w, O, m;
          return (
            mR(this, b),
            (m = xR(this, b, [x])),
            G(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            G(m, "accessibilityManager", new nR()),
            G(m, "handleLegendBBoxUpdate", function (g) {
              if (g) {
                var _ = m.state,
                  S = _.dataStartIndex,
                  P = _.dataEndIndex,
                  M = _.updateId;
                m.setState(
                  I(
                    { legendBBox: g },
                    p(
                      { props: m.props, dataStartIndex: S, dataEndIndex: P, updateId: M },
                      I(I({}, m.state), {}, { legendBBox: g }),
                    ),
                  ),
                );
              }
            }),
            G(m, "handleReceiveSyncEvent", function (g, _, S) {
              if (m.props.syncId === g) {
                if (S === m.eventEmitterSymbol && typeof m.props.syncMethod != "function") return;
                m.applySyncEvent(_);
              }
            }),
            G(m, "handleBrushChange", function (g) {
              var _ = g.startIndex,
                S = g.endIndex;
              if (_ !== m.state.dataStartIndex || S !== m.state.dataEndIndex) {
                var P = m.state.updateId;
                (m.setState(function () {
                  return I(
                    { dataStartIndex: _, dataEndIndex: S },
                    p({ props: m.props, dataStartIndex: _, dataEndIndex: S, updateId: P }, m.state),
                  );
                }),
                  m.triggerSyncEvent({ dataStartIndex: _, dataEndIndex: S }));
              }
            }),
            G(m, "handleMouseEnter", function (g) {
              var _ = m.getMouseInfo(g);
              if (_) {
                var S = I(I({}, _), {}, { isTooltipActive: !0 });
                (m.setState(S), m.triggerSyncEvent(S));
                var P = m.props.onMouseEnter;
                X(P) && P(S, g);
              }
            }),
            G(m, "triggeredAfterMouseMove", function (g) {
              var _ = m.getMouseInfo(g),
                S = _ ? I(I({}, _), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
              (m.setState(S), m.triggerSyncEvent(S));
              var P = m.props.onMouseMove;
              X(P) && P(S, g);
            }),
            G(m, "handleItemMouseEnter", function (g) {
              m.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: g,
                  activePayload: g.tooltipPayload,
                  activeCoordinate: g.tooltipPosition || { x: g.cx, y: g.cy },
                };
              });
            }),
            G(m, "handleItemMouseLeave", function () {
              m.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            G(m, "handleMouseMove", function (g) {
              (g.persist(), m.throttleTriggeredAfterMouseMove(g));
            }),
            G(m, "handleMouseLeave", function (g) {
              m.throttleTriggeredAfterMouseMove.cancel();
              var _ = { isTooltipActive: !1 };
              (m.setState(_), m.triggerSyncEvent(_));
              var S = m.props.onMouseLeave;
              X(S) && S(_, g);
            }),
            G(m, "handleOuterEvent", function (g) {
              var _ = kO(g),
                S = Xe(m.props, "".concat(_));
              if (_ && X(S)) {
                var P, M;
                (/.*touch.*/i.test(_)
                  ? (M = m.getMouseInfo(g.changedTouches[0]))
                  : (M = m.getMouseInfo(g)),
                  S((P = M) !== null && P !== void 0 ? P : {}, g));
              }
            }),
            G(m, "handleClick", function (g) {
              var _ = m.getMouseInfo(g);
              if (_) {
                var S = I(I({}, _), {}, { isTooltipActive: !0 });
                (m.setState(S), m.triggerSyncEvent(S));
                var P = m.props.onClick;
                X(P) && P(S, g);
              }
            }),
            G(m, "handleMouseDown", function (g) {
              var _ = m.props.onMouseDown;
              if (X(_)) {
                var S = m.getMouseInfo(g);
                _(S, g);
              }
            }),
            G(m, "handleMouseUp", function (g) {
              var _ = m.props.onMouseUp;
              if (X(_)) {
                var S = m.getMouseInfo(g);
                _(S, g);
              }
            }),
            G(m, "handleTouchMove", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                m.throttleTriggeredAfterMouseMove(g.changedTouches[0]);
            }),
            G(m, "handleTouchStart", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                m.handleMouseDown(g.changedTouches[0]);
            }),
            G(m, "handleTouchEnd", function (g) {
              g.changedTouches != null &&
                g.changedTouches.length > 0 &&
                m.handleMouseUp(g.changedTouches[0]);
            }),
            G(m, "handleDoubleClick", function (g) {
              var _ = m.props.onDoubleClick;
              if (X(_)) {
                var S = m.getMouseInfo(g);
                _(S, g);
              }
            }),
            G(m, "handleContextMenu", function (g) {
              var _ = m.props.onContextMenu;
              if (X(_)) {
                var S = m.getMouseInfo(g);
                _(S, g);
              }
            }),
            G(m, "triggerSyncEvent", function (g) {
              m.props.syncId !== void 0 && ol.emit(ul, m.props.syncId, g, m.eventEmitterSymbol);
            }),
            G(m, "applySyncEvent", function (g) {
              var _ = m.props,
                S = _.layout,
                P = _.syncMethod,
                M = m.state.updateId,
                E = g.dataStartIndex,
                T = g.dataEndIndex;
              if (g.dataStartIndex !== void 0 || g.dataEndIndex !== void 0)
                m.setState(
                  I(
                    { dataStartIndex: E, dataEndIndex: T },
                    p({ props: m.props, dataStartIndex: E, dataEndIndex: T, updateId: M }, m.state),
                  ),
                );
              else if (g.activeTooltipIndex !== void 0) {
                var j = g.chartX,
                  C = g.chartY,
                  $ = g.activeTooltipIndex,
                  k = m.state,
                  N = k.offset,
                  B = k.tooltipTicks;
                if (!N) return;
                if (typeof P == "function") $ = P(B, g);
                else if (P === "value") {
                  $ = -1;
                  for (var F = 0; F < B.length; F++)
                    if (B[F].value === g.activeLabel) {
                      $ = F;
                      break;
                    }
                }
                var H = I(I({}, N), {}, { x: N.left, y: N.top }),
                  K = Math.min(j, H.x + H.width),
                  z = Math.min(C, H.y + H.height),
                  V = B[$] && B[$].value,
                  fe = Tf(m.state, m.props.data, $),
                  ye = B[$]
                    ? {
                        x: S === "horizontal" ? B[$].coordinate : K,
                        y: S === "horizontal" ? z : B[$].coordinate,
                      }
                    : Pw;
                m.setState(
                  I(
                    I({}, g),
                    {},
                    {
                      activeLabel: V,
                      activeCoordinate: ye,
                      activePayload: fe,
                      activeTooltipIndex: $,
                    },
                  ),
                );
              } else m.setState(g);
            }),
            G(m, "renderCursor", function (g) {
              var _,
                S = m.state,
                P = S.isTooltipActive,
                M = S.activeCoordinate,
                E = S.activePayload,
                T = S.offset,
                j = S.activeTooltipIndex,
                C = S.tooltipAxisBandSize,
                $ = m.getTooltipEventType(),
                k = (_ = g.props.active) !== null && _ !== void 0 ? _ : P,
                N = m.props.layout,
                B = g.key || "_recharts-cursor";
              return A.createElement(lR, {
                key: B,
                activeCoordinate: M,
                activePayload: E,
                activeTooltipIndex: j,
                chartName: r,
                element: g,
                isActive: k,
                layout: N,
                offset: T,
                tooltipAxisBandSize: C,
                tooltipEventType: $,
              });
            }),
            G(m, "renderPolarAxis", function (g, _, S) {
              var P = Xe(g, "type.axisType"),
                M = Xe(m.state, "".concat(P, "Map")),
                E = g.type.defaultProps,
                T = E !== void 0 ? I(I({}, E), g.props) : g.props,
                j = M && M[T["".concat(P, "Id")]];
              return q.cloneElement(
                g,
                I(
                  I({}, j),
                  {},
                  {
                    className: ee(P, j.className),
                    key: g.key || "".concat(_, "-").concat(S),
                    ticks: gt(j, !0),
                  },
                ),
              );
            }),
            G(m, "renderPolarGrid", function (g) {
              var _ = g.props,
                S = _.radialLines,
                P = _.polarAngles,
                M = _.polarRadius,
                E = m.state,
                T = E.radiusAxisMap,
                j = E.angleAxisMap,
                C = Ct(T),
                $ = Ct(j),
                k = $.cx,
                N = $.cy,
                B = $.innerRadius,
                F = $.outerRadius;
              return q.cloneElement(g, {
                polarAngles: Array.isArray(P)
                  ? P
                  : gt($, !0).map(function (H) {
                      return H.coordinate;
                    }),
                polarRadius: Array.isArray(M)
                  ? M
                  : gt(C, !0).map(function (H) {
                      return H.coordinate;
                    }),
                cx: k,
                cy: N,
                innerRadius: B,
                outerRadius: F,
                key: g.key || "polar-grid",
                radialLines: S,
              });
            }),
            G(m, "renderLegend", function () {
              var g = m.state.formattedGraphicalItems,
                _ = m.props,
                S = _.children,
                P = _.width,
                M = _.height,
                E = m.props.margin || {},
                T = P - (E.left || 0) - (E.right || 0),
                j = mx({
                  children: S,
                  formattedGraphicalItems: g,
                  legendWidth: T,
                  legendContent: c,
                });
              if (!j) return null;
              var C = j.item,
                $ = hb(j, fR);
              return q.cloneElement(
                C,
                I(
                  I({}, $),
                  {},
                  {
                    chartWidth: P,
                    chartHeight: M,
                    margin: E,
                    onBBoxUpdate: m.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            G(m, "renderTooltip", function () {
              var g,
                _ = m.props,
                S = _.children,
                P = _.accessibilityLayer,
                M = ze(S, Re);
              if (!M) return null;
              var E = m.state,
                T = E.isTooltipActive,
                j = E.activeCoordinate,
                C = E.activePayload,
                $ = E.activeLabel,
                k = E.offset,
                N = (g = M.props.active) !== null && g !== void 0 ? g : T;
              return q.cloneElement(M, {
                viewBox: I(I({}, k), {}, { x: k.left, y: k.top }),
                active: N,
                label: $,
                payload: N ? C : [],
                coordinate: j,
                accessibilityLayer: P,
              });
            }),
            G(m, "renderBrush", function (g) {
              var _ = m.props,
                S = _.margin,
                P = _.data,
                M = m.state,
                E = M.offset,
                T = M.dataStartIndex,
                j = M.dataEndIndex,
                C = M.updateId;
              return q.cloneElement(g, {
                key: g.key || "_recharts-brush",
                onChange: Oi(m.handleBrushChange, g.props.onChange),
                data: P,
                x: L(g.props.x) ? g.props.x : E.left,
                y: L(g.props.y) ? g.props.y : E.top + E.height + E.brushBottom - (S.bottom || 0),
                width: L(g.props.width) ? g.props.width : E.width,
                startIndex: T,
                endIndex: j,
                updateId: "brush-".concat(C),
              });
            }),
            G(m, "renderReferenceElement", function (g, _, S) {
              if (!g) return null;
              var P = m,
                M = P.clipPathId,
                E = m.state,
                T = E.xAxisMap,
                j = E.yAxisMap,
                C = E.offset,
                $ = g.type.defaultProps || {},
                k = g.props,
                N = k.xAxisId,
                B = N === void 0 ? $.xAxisId : N,
                F = k.yAxisId,
                H = F === void 0 ? $.yAxisId : F;
              return q.cloneElement(g, {
                key: g.key || "".concat(_, "-").concat(S),
                xAxis: T[B],
                yAxis: j[H],
                viewBox: { x: C.left, y: C.top, width: C.width, height: C.height },
                clipPathId: M,
              });
            }),
            G(m, "renderActivePoints", function (g) {
              var _ = g.item,
                S = g.activePoint,
                P = g.basePoint,
                M = g.childIndex,
                E = g.isRange,
                T = [],
                j = _.props.key,
                C =
                  _.item.type.defaultProps !== void 0
                    ? I(I({}, _.item.type.defaultProps), _.item.props)
                    : _.item.props,
                $ = C.activeDot,
                k = C.dataKey,
                N = I(
                  I(
                    {
                      index: M,
                      dataKey: k,
                      cx: S.x,
                      cy: S.y,
                      r: 4,
                      fill: xh(_.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: S.payload,
                      value: S.value,
                    },
                    Z($, !1),
                  ),
                  Mi($),
                );
              return (
                T.push(b.renderActiveDot($, N, "".concat(j, "-activePoint-").concat(M))),
                P
                  ? T.push(
                      b.renderActiveDot(
                        $,
                        I(I({}, N), {}, { cx: P.x, cy: P.y }),
                        "".concat(j, "-basePoint-").concat(M),
                      ),
                    )
                  : E && T.push(null),
                T
              );
            }),
            G(m, "renderGraphicChild", function (g, _, S) {
              var P = m.filterFormatItem(g, _, S);
              if (!P) return null;
              var M = m.getTooltipEventType(),
                E = m.state,
                T = E.isTooltipActive,
                j = E.tooltipAxis,
                C = E.activeTooltipIndex,
                $ = E.activeLabel,
                k = m.props.children,
                N = ze(k, Re),
                B = P.props,
                F = B.points,
                H = B.isRange,
                K = B.baseLine,
                z =
                  P.item.type.defaultProps !== void 0
                    ? I(I({}, P.item.type.defaultProps), P.item.props)
                    : P.item.props,
                V = z.activeDot,
                fe = z.hide,
                ye = z.activeBar,
                Be = z.activeShape,
                Wt = !!(!fe && T && N && (V || ye || Be)),
                Ne = {};
              M !== "axis" && N && N.props.trigger === "click"
                ? (Ne = { onClick: Oi(m.handleItemMouseEnter, g.props.onClick) })
                : M !== "axis" &&
                  (Ne = {
                    onMouseLeave: Oi(m.handleItemMouseLeave, g.props.onMouseLeave),
                    onMouseEnter: Oi(m.handleItemMouseEnter, g.props.onMouseEnter),
                  });
              var W = q.cloneElement(g, I(I({}, P.props), Ne));
              function Y(Ut) {
                return typeof j.dataKey == "function" ? j.dataKey(Ut.payload) : null;
              }
              if (Wt)
                if (C >= 0) {
                  var J, D;
                  if (j.dataKey && !j.allowDuplicatedCategory) {
                    var pe =
                      typeof j.dataKey == "function" ? Y : "payload.".concat(j.dataKey.toString());
                    ((J = ji(F, pe, $)), (D = H && K && ji(K, pe, $)));
                  } else ((J = F == null ? void 0 : F[C]), (D = H && K && K[C]));
                  if (Be || ye) {
                    var te = g.props.activeIndex !== void 0 ? g.props.activeIndex : C;
                    return [
                      q.cloneElement(g, I(I(I({}, P.props), Ne), {}, { activeIndex: te })),
                      null,
                      null,
                    ];
                  }
                  if (!Q(J))
                    return [W].concat(
                      Vr(
                        m.renderActivePoints({
                          item: P,
                          activePoint: J,
                          basePoint: D,
                          childIndex: C,
                          isRange: H,
                        }),
                      ),
                    );
                } else {
                  var be,
                    xe =
                      (be = m.getItemByXY(m.state.activeCoordinate)) !== null && be !== void 0
                        ? be
                        : { graphicalItem: W },
                    De = xe.graphicalItem,
                    jt = De.item,
                    fr = jt === void 0 ? g : jt,
                    di = De.childIndex,
                    zt = I(I(I({}, P.props), Ne), {}, { activeIndex: di });
                  return [q.cloneElement(fr, zt), null, null];
                }
              return H ? [W, null, null] : [W, null];
            }),
            G(m, "renderCustomized", function (g, _, S) {
              return q.cloneElement(
                g,
                I(I({ key: "recharts-customized-".concat(S) }, m.props), m.state),
              );
            }),
            G(m, "renderMap", {
              CartesianGrid: { handler: Ti, once: !0 },
              ReferenceArea: { handler: m.renderReferenceElement },
              ReferenceLine: { handler: Ti },
              ReferenceDot: { handler: m.renderReferenceElement },
              XAxis: { handler: Ti },
              YAxis: { handler: Ti },
              Brush: { handler: m.renderBrush, once: !0 },
              Bar: { handler: m.renderGraphicChild },
              Line: { handler: m.renderGraphicChild },
              Area: { handler: m.renderGraphicChild },
              Radar: { handler: m.renderGraphicChild },
              RadialBar: { handler: m.renderGraphicChild },
              Scatter: { handler: m.renderGraphicChild },
              Pie: { handler: m.renderGraphicChild },
              Funnel: { handler: m.renderGraphicChild },
              Tooltip: { handler: m.renderCursor, once: !0 },
              PolarGrid: { handler: m.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: m.renderPolarAxis },
              PolarRadiusAxis: { handler: m.renderPolarAxis },
              Customized: { handler: m.renderCustomized },
            }),
            (m.clipPathId = "".concat(
              (w = x.id) !== null && w !== void 0 ? w : Jr("recharts"),
              "-clip",
            )),
            (m.throttleTriggeredAfterMouseMove = m0(
              m.triggeredAfterMouseMove,
              (O = x.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60,
            )),
            (m.state = {}),
            m
          );
        }
        return (
          _R(b, d),
          bR(b, [
            {
              key: "componentDidMount",
              value: function () {
                var w, O;
                (this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
                      top: (O = this.props.margin.top) !== null && O !== void 0 ? O : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip());
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var w = this.props,
                  O = w.children,
                  m = w.data,
                  g = w.height,
                  _ = w.layout,
                  S = ze(O, Re);
                if (S) {
                  var P = S.props.defaultIndex;
                  if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
                    var M = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value,
                      E = Tf(this.state, m, P, M),
                      T = this.state.tooltipTicks[P].coordinate,
                      j = (this.state.offset.top + g) / 2,
                      C = _ === "horizontal",
                      $ = C ? { x: T, y: j } : { y: T, x: j },
                      k = this.state.formattedGraphicalItems.find(function (B) {
                        var F = B.item;
                        return F.type.name === "Scatter";
                      });
                    k &&
                      (($ = I(I({}, $), k.props.points[P].tooltipPosition)),
                      (E = k.props.points[P].tooltipPayload));
                    var N = {
                      activeTooltipIndex: P,
                      isTooltipActive: !0,
                      activeLabel: M,
                      activePayload: E,
                      activeCoordinate: $,
                    };
                    (this.setState(N), this.renderCursor(S), this.accessibilityManager.setIndex(P));
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (w, O) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== O.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== w.layout &&
                    this.accessibilityManager.setDetails({ layout: this.props.layout }),
                  this.props.margin !== w.margin)
                ) {
                  var m, g;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
                      top: (g = this.props.margin.top) !== null && g !== void 0 ? g : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (w) {
                fl([ze(w.children, Re)], [ze(this.props.children, Re)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel());
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var w = ze(this.props.children, Re);
                if (w && typeof w.props.shared == "boolean") {
                  var O = w.props.shared ? "axis" : "item";
                  return u.indexOf(O) >= 0 ? O : a;
                }
                return a;
              },
            },
            {
              key: "getMouseInfo",
              value: function (w) {
                if (!this.container) return null;
                var O = this.container,
                  m = O.getBoundingClientRect(),
                  g = wA(m),
                  _ = { chartX: Math.round(w.pageX - g.left), chartY: Math.round(w.pageY - g.top) },
                  S = m.width / O.offsetWidth || 1,
                  P = this.inRange(_.chartX, _.chartY, S);
                if (!P) return null;
                var M = this.state,
                  E = M.xAxisMap,
                  T = M.yAxisMap,
                  j = this.getTooltipEventType(),
                  C = pb(this.state, this.props.data, this.props.layout, P);
                if (j !== "axis" && E && T) {
                  var $ = Ct(E).scale,
                    k = Ct(T).scale,
                    N = $ && $.invert ? $.invert(_.chartX) : null,
                    B = k && k.invert ? k.invert(_.chartY) : null;
                  return I(I({}, _), {}, { xValue: N, yValue: B }, C);
                }
                return C ? I(I({}, _), C) : null;
              },
            },
            {
              key: "inRange",
              value: function (w, O) {
                var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                  g = this.props.layout,
                  _ = w / m,
                  S = O / m;
                if (g === "horizontal" || g === "vertical") {
                  var P = this.state.offset,
                    M = _ >= P.left && _ <= P.left + P.width && S >= P.top && S <= P.top + P.height;
                  return M ? { x: _, y: S } : null;
                }
                var E = this.state,
                  T = E.angleAxisMap,
                  j = E.radiusAxisMap;
                if (T && j) {
                  var C = Ct(T);
                  return jm({ x: _, y: S }, C);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var w = this.props.children,
                  O = this.getTooltipEventType(),
                  m = ze(w, Re),
                  g = {};
                m &&
                  O === "axis" &&
                  (m.props.trigger === "click"
                    ? (g = { onClick: this.handleClick })
                    : (g = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var _ = Mi(this.props, this.handleOuterEvent);
                return I(I({}, _), g);
              },
            },
            {
              key: "addListener",
              value: function () {
                ol.on(ul, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                ol.removeListener(ul, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (w, O, m) {
                for (var g = this.state.formattedGraphicalItems, _ = 0, S = g.length; _ < S; _++) {
                  var P = g[_];
                  if (
                    P.item === w ||
                    P.props.key === w.key ||
                    (O === bt(P.item.type) && m === P.childIndex)
                  )
                    return P;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var w = this.clipPathId,
                  O = this.state.offset,
                  m = O.left,
                  g = O.top,
                  _ = O.height,
                  S = O.width;
                return A.createElement(
                  "defs",
                  null,
                  A.createElement(
                    "clipPath",
                    { id: w },
                    A.createElement("rect", { x: m, y: g, height: _, width: S }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var w = this.state.xAxisMap;
                return w
                  ? Object.entries(w).reduce(function (O, m) {
                      var g = fb(m, 2),
                        _ = g[0],
                        S = g[1];
                      return I(I({}, O), {}, G({}, _, S.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var w = this.state.yAxisMap;
                return w
                  ? Object.entries(w).reduce(function (O, m) {
                      var g = fb(m, 2),
                        _ = g[0],
                        S = g[1];
                      return I(I({}, O), {}, G({}, _, S.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (w) {
                var O;
                return (O = this.state.xAxisMap) === null ||
                  O === void 0 ||
                  (O = O[w]) === null ||
                  O === void 0
                  ? void 0
                  : O.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (w) {
                var O;
                return (O = this.state.yAxisMap) === null ||
                  O === void 0 ||
                  (O = O[w]) === null ||
                  O === void 0
                  ? void 0
                  : O.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (w) {
                var O = this.state,
                  m = O.formattedGraphicalItems,
                  g = O.activeItem;
                if (m && m.length)
                  for (var _ = 0, S = m.length; _ < S; _++) {
                    var P = m[_],
                      M = P.props,
                      E = P.item,
                      T =
                        E.type.defaultProps !== void 0
                          ? I(I({}, E.type.defaultProps), E.props)
                          : E.props,
                      j = bt(E.type);
                    if (j === "Bar") {
                      var C = (M.data || []).find(function (B) {
                        return WC(w, B);
                      });
                      if (C) return { graphicalItem: P, payload: C };
                    } else if (j === "RadialBar") {
                      var $ = (M.data || []).find(function (B) {
                        return jm(w, B);
                      });
                      if ($) return { graphicalItem: P, payload: $ };
                    } else if (Za(P, g) || Ja(P, g) || Jn(P, g)) {
                      var k = CI({ graphicalItem: P, activeTooltipItem: g, itemData: T.data }),
                        N = T.activeIndex === void 0 ? k : T.activeIndex;
                      return {
                        graphicalItem: I(I({}, P), {}, { childIndex: N }),
                        payload: Jn(P, g) ? T.data[k] : P.props.data[k],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var w = this;
                if (!Fd(this)) return null;
                var O = this.props,
                  m = O.children,
                  g = O.className,
                  _ = O.width,
                  S = O.height,
                  P = O.style,
                  M = O.compact,
                  E = O.title,
                  T = O.desc,
                  j = hb(O, hR),
                  C = Z(j, !1);
                if (M)
                  return A.createElement(
                    Ug,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    A.createElement(
                      dl,
                      br({}, C, { width: _, height: S, title: E, desc: T }),
                      this.renderClipPath(),
                      zd(m, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var $, k;
                  ((C.tabIndex = ($ = this.props.tabIndex) !== null && $ !== void 0 ? $ : 0),
                    (C.role = (k = this.props.role) !== null && k !== void 0 ? k : "application"),
                    (C.onKeyDown = function (B) {
                      w.accessibilityManager.keyboardEvent(B);
                    }),
                    (C.onFocus = function () {
                      w.accessibilityManager.focus();
                    }));
                }
                var N = this.parseEventsOfWrapper();
                return A.createElement(
                  Ug,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  A.createElement(
                    "div",
                    br(
                      {
                        className: ee("recharts-wrapper", g),
                        style: I(
                          { position: "relative", cursor: "default", width: _, height: S },
                          P,
                        ),
                      },
                      N,
                      {
                        ref: function (F) {
                          w.container = F;
                        },
                      },
                    ),
                    A.createElement(
                      dl,
                      br({}, C, { width: _, height: S, title: E, desc: T, style: jR }),
                      this.renderClipPath(),
                      zd(m, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(q.Component);
    (G(y, "displayName", r),
      G(
        y,
        "defaultProps",
        I(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          l,
        ),
      ),
      G(y, "getDerivedStateFromProps", function (d, b) {
        var x = d.dataKey,
          w = d.data,
          O = d.children,
          m = d.width,
          g = d.height,
          _ = d.layout,
          S = d.stackOffset,
          P = d.margin,
          M = b.dataStartIndex,
          E = b.dataEndIndex;
        if (b.updateId === void 0) {
          var T = vb(d);
          return I(
            I(I({}, T), {}, { updateId: 0 }, p(I(I({ props: d }, T), {}, { updateId: 0 }), b)),
            {},
            {
              prevDataKey: x,
              prevData: w,
              prevWidth: m,
              prevHeight: g,
              prevLayout: _,
              prevStackOffset: S,
              prevMargin: P,
              prevChildren: O,
            },
          );
        }
        if (
          x !== b.prevDataKey ||
          w !== b.prevData ||
          m !== b.prevWidth ||
          g !== b.prevHeight ||
          _ !== b.prevLayout ||
          S !== b.prevStackOffset ||
          !xr(P, b.prevMargin)
        ) {
          var j = vb(d),
            C = { chartX: b.chartX, chartY: b.chartY, isTooltipActive: b.isTooltipActive },
            $ = I(I({}, pb(b, w, _)), {}, { updateId: b.updateId + 1 }),
            k = I(I(I({}, j), C), $);
          return I(
            I(I({}, k), p(I({ props: d }, k), b)),
            {},
            {
              prevDataKey: x,
              prevData: w,
              prevWidth: m,
              prevHeight: g,
              prevLayout: _,
              prevStackOffset: S,
              prevMargin: P,
              prevChildren: O,
            },
          );
        }
        if (!fl(O, b.prevChildren)) {
          var N,
            B,
            F,
            H,
            K = ze(O, Rr),
            z =
              K &&
              (N = (B = K.props) === null || B === void 0 ? void 0 : B.startIndex) !== null &&
              N !== void 0
                ? N
                : M,
            V =
              K &&
              (F = (H = K.props) === null || H === void 0 ? void 0 : H.endIndex) !== null &&
              F !== void 0
                ? F
                : E,
            fe = z !== M || V !== E,
            ye = !Q(w),
            Be = ye && !fe ? b.updateId : b.updateId + 1;
          return I(
            I(
              { updateId: Be },
              p(I(I({ props: d }, b), {}, { updateId: Be, dataStartIndex: z, dataEndIndex: V }), b),
            ),
            {},
            { prevChildren: O, dataStartIndex: z, dataEndIndex: V },
          );
        }
        return null;
      }),
      G(y, "renderActiveDot", function (d, b, x) {
        var w;
        return (
          q.isValidElement(d)
            ? (w = q.cloneElement(d, b))
            : X(d)
              ? (w = d(b))
              : (w = A.createElement(Ya, b)),
          A.createElement(ce, { className: "recharts-active-dot", key: x }, w)
        );
      }));
    var v = q.forwardRef(function (b, x) {
      return A.createElement(y, br({}, b, { ref: x }));
    });
    return ((v.displayName = y.displayName), v);
  },
  Ei = Ew({
    chartName: "LineChart",
    GraphicalChild: rt,
    axisComponents: [
      { axisType: "xAxis", AxisComp: pt },
      { axisType: "yAxis", AxisComp: vt },
    ],
    formatAxisMap: zx,
  }),
  LR = Ew({
    chartName: "AreaChart",
    GraphicalChild: Ft,
    axisComponents: [
      { axisType: "xAxis", AxisComp: pt },
      { axisType: "yAxis", AxisComp: vt },
    ],
    formatAxisMap: zx,
  });
const ne = {
    primary: "var(--color-primary)",
    background: "#ffffff",
    foreground: "#0a0a0a",
    success: "var(--color-success-500)",
    chest: "#ef4444",
    waist: "#f59e0b",
    hips: "#8b5cf6",
    arms: "#3b82f6",
    thighs: "#10b981",
  },
  BR = [
    { key: "chest", color: ne.chest },
    { key: "waist", color: ne.waist },
    { key: "hips", color: ne.hips },
    { key: "arms", color: ne.arms },
    { key: "thighs", color: ne.thighs },
  ];
function o2({
  weightChartData: e,
  measurementChartData: t,
  adherenceStats: r,
  wellnessChartData: n,
  adherenceChartData: i,
  bodyCompositionData: a,
  targetWeight: o,
}) {
  const { t: u, i18n: s } = uo("progress"),
    { t: c } = uo("checkIn"),
    { t: f } = uo("units"),
    l = s.language,
    p = `weightGradient-${q.useId()}`,
    y = BR.filter((v) => t.some((d) => d[v.key] != null));
  return R.jsxs("div", {
    className: "space-y-4",
    children: [
      R.jsx(an, {
        icon: Ch,
        title: u("weightTrend"),
        description: u("weightTrendDescription"),
        children:
          e.length > 0
            ? R.jsx("div", {
                dir: "ltr",
                role: "img",
                "aria-label": u("weightTrend"),
                children: R.jsx(un, {
                  width: "100%",
                  height: 300,
                  children: R.jsxs(LR, {
                    data: e,
                    children: [
                      R.jsx("defs", {
                        children: R.jsxs("linearGradient", {
                          id: p,
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            R.jsx("stop", {
                              offset: "5%",
                              stopColor: ne.primary,
                              stopOpacity: 0.2,
                            }),
                            R.jsx("stop", { offset: "95%", stopColor: ne.primary, stopOpacity: 0 }),
                          ],
                        }),
                      }),
                      R.jsx(yr, {
                        strokeDasharray: "3 3",
                        stroke: ne.foreground,
                        strokeOpacity: 0.08,
                      }),
                      R.jsx(pt, {
                        dataKey: "date",
                        stroke: ne.foreground,
                        fontSize: 12,
                        tickLine: !1,
                      }),
                      R.jsx(vt, {
                        stroke: ne.foreground,
                        fontSize: 12,
                        tickLine: !1,
                        domain: ["dataMin - 2", "dataMax + 2"],
                      }),
                      R.jsx(Re, {
                        contentStyle: {
                          backgroundColor: ne.background,
                          border: "1px solid #e5e5e5",
                          borderRadius: "8px",
                          fontSize: "13px",
                        },
                      }),
                      R.jsx(Ft, {
                        type: "monotone",
                        dataKey: "weight",
                        stroke: ne.primary,
                        strokeWidth: 2.5,
                        fill: `url(#${p})`,
                        dot: { fill: ne.primary, r: 4, strokeWidth: 0 },
                        activeDot: { r: 6 },
                      }),
                      o != null &&
                        R.jsx(eo, {
                          y: o,
                          stroke: "#10b981",
                          strokeDasharray: "6 3",
                          strokeWidth: 1.5,
                          label: {
                            value: u("goalLine"),
                            position: "insideTopRight",
                            fill: "#10b981",
                            fontSize: 11,
                          },
                        }),
                    ],
                  }),
                }),
              })
            : R.jsx("div", {
                className:
                  "border-border flex h-[300px] items-center justify-center rounded-lg border-2 border-dashed",
                children: R.jsxs("div", {
                  className: "text-center",
                  children: [
                    R.jsx(Ch, { className: "text-muted-foreground/30 mx-auto h-10 w-10" }),
                    R.jsx("p", {
                      className: "mt-3 text-sm font-medium",
                      children: u("noWeightData"),
                    }),
                  ],
                }),
              }),
      }),
      y.length > 0 &&
        t.length >= 2 &&
        R.jsxs(an, {
          icon: jw,
          title: u("measurementTrends"),
          description: u("measurementTrendsDescription"),
          children: [
            R.jsx("div", {
              dir: "ltr",
              role: "img",
              "aria-label": u("measurementTrends"),
              children: R.jsx(un, {
                width: "100%",
                height: 300,
                children: R.jsxs(Ei, {
                  data: t,
                  children: [
                    R.jsx(yr, {
                      strokeDasharray: "3 3",
                      stroke: ne.foreground,
                      strokeOpacity: 0.08,
                    }),
                    R.jsx(pt, {
                      dataKey: "date",
                      stroke: ne.foreground,
                      fontSize: 12,
                      tickLine: !1,
                    }),
                    R.jsx(vt, {
                      stroke: ne.foreground,
                      fontSize: 12,
                      tickLine: !1,
                      unit: ` ${f("cm")}`,
                    }),
                    R.jsx(Re, {
                      contentStyle: {
                        backgroundColor: ne.background,
                        border: "1px solid #e5e5e5",
                        borderRadius: "8px",
                        fontSize: "13px",
                      },
                    }),
                    y.map((v) =>
                      R.jsx(
                        rt,
                        {
                          type: "monotone",
                          dataKey: v.key,
                          name: c(v.key),
                          stroke: v.color,
                          strokeWidth: 2,
                          dot: { fill: v.color, r: 3, strokeWidth: 0 },
                          activeDot: { r: 5 },
                          connectNulls: !0,
                        },
                        v.key,
                      ),
                    ),
                  ],
                }),
              }),
            }),
            R.jsx("div", {
              className: "mt-3 flex flex-wrap gap-3",
              children: y.map((v) =>
                R.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5",
                    children: [
                      R.jsx("div", {
                        className: "h-2.5 w-2.5 rounded-full",
                        style: { backgroundColor: v.color },
                      }),
                      R.jsx("span", {
                        className: "text-muted-foreground text-xs",
                        children: c(v.key),
                      }),
                    ],
                  },
                  v.key,
                ),
              ),
            }),
          ],
        }),
      n &&
        n.length >= 2 &&
        R.jsxs(an, {
          icon: Mw,
          title: u("wellnessTrends"),
          description: u("wellnessTrendsDescription"),
          children: [
            R.jsx("div", {
              dir: "ltr",
              role: "img",
              "aria-label": u("wellnessTrends"),
              children: R.jsx(un, {
                width: "100%",
                height: 250,
                children: R.jsxs(Ei, {
                  data: n,
                  children: [
                    R.jsx(yr, {
                      strokeDasharray: "3 3",
                      stroke: ne.foreground,
                      strokeOpacity: 0.08,
                    }),
                    R.jsx(pt, {
                      dataKey: "date",
                      stroke: ne.foreground,
                      fontSize: 12,
                      tickLine: !1,
                    }),
                    R.jsx(vt, {
                      stroke: ne.foreground,
                      fontSize: 12,
                      tickLine: !1,
                      domain: [0, 10],
                    }),
                    R.jsx(Re, {
                      contentStyle: {
                        backgroundColor: ne.background,
                        border: "1px solid #e5e5e5",
                        borderRadius: "8px",
                        fontSize: "13px",
                      },
                    }),
                    R.jsx(rt, {
                      type: "monotone",
                      dataKey: "sleep",
                      name: u("sleepQuality"),
                      stroke: "#3b82f6",
                      strokeWidth: 2,
                      dot: { fill: "#3b82f6", r: 3, strokeWidth: 0 },
                      connectNulls: !0,
                    }),
                    R.jsx(rt, {
                      type: "monotone",
                      dataKey: "energy",
                      name: u("energyLevel"),
                      stroke: "#f59e0b",
                      strokeWidth: 2,
                      dot: { fill: "#f59e0b", r: 3, strokeWidth: 0 },
                      connectNulls: !0,
                    }),
                  ],
                }),
              }),
            }),
            R.jsxs("div", {
              className: "mt-3 flex gap-4",
              children: [
                R.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    R.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-blue-500" }),
                    R.jsx("span", {
                      className: "text-muted-foreground text-xs",
                      children: u("sleepQuality"),
                    }),
                  ],
                }),
                R.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    R.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-amber-500" }),
                    R.jsx("span", {
                      className: "text-muted-foreground text-xs",
                      children: u("energyLevel"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      i &&
        i.length >= 2 &&
        R.jsx(an, {
          icon: kw,
          title: u("adherenceTrend"),
          description: u("adherenceTrendDescription"),
          children: R.jsx("div", {
            dir: "ltr",
            role: "img",
            "aria-label": u("adherenceTrend"),
            children: R.jsx(un, {
              width: "100%",
              height: 200,
              children: R.jsxs(Ei, {
                data: i,
                children: [
                  R.jsx(yr, { strokeDasharray: "3 3", stroke: ne.foreground, strokeOpacity: 0.08 }),
                  R.jsx(pt, { dataKey: "date", stroke: ne.foreground, fontSize: 12, tickLine: !1 }),
                  R.jsx(vt, { stroke: ne.foreground, fontSize: 12, tickLine: !1, domain: [0, 10] }),
                  R.jsx(Re, {
                    contentStyle: {
                      backgroundColor: ne.background,
                      border: "1px solid #e5e5e5",
                      borderRadius: "8px",
                      fontSize: "13px",
                    },
                  }),
                  R.jsx(rt, {
                    type: "monotone",
                    dataKey: "dietaryAdherence",
                    name: u("dietaryAdherence"),
                    stroke: ne.success,
                    strokeWidth: 2,
                    dot: { fill: ne.success, r: 3, strokeWidth: 0 },
                    connectNulls: !0,
                  }),
                ],
              }),
            }),
          }),
        }),
      a &&
        a.length >= 2 &&
        R.jsxs(an, {
          icon: Cw,
          title: u("bodyComposition"),
          description: u("bodyCompositionDescription"),
          children: [
            R.jsx("div", {
              dir: "ltr",
              role: "img",
              "aria-label": u("bodyComposition"),
              children: R.jsx(un, {
                width: "100%",
                height: 280,
                children: R.jsxs(Ei, {
                  data: a,
                  children: [
                    R.jsx(yr, {
                      strokeDasharray: "3 3",
                      stroke: ne.foreground,
                      strokeOpacity: 0.08,
                    }),
                    R.jsx(pt, {
                      dataKey: "date",
                      stroke: ne.foreground,
                      fontSize: 12,
                      tickLine: !1,
                    }),
                    R.jsx(vt, { stroke: ne.foreground, fontSize: 12, tickLine: !1 }),
                    R.jsx(Re, {
                      contentStyle: {
                        backgroundColor: ne.background,
                        border: "1px solid #e5e5e5",
                        borderRadius: "8px",
                        fontSize: "13px",
                      },
                    }),
                    R.jsx(rt, {
                      type: "monotone",
                      dataKey: "bodyFat",
                      name: u("bodyFatPercent"),
                      stroke: "#ef4444",
                      strokeWidth: 2,
                      dot: { fill: "#ef4444", r: 3, strokeWidth: 0 },
                      connectNulls: !0,
                    }),
                    R.jsx(rt, {
                      type: "monotone",
                      dataKey: "leanMass",
                      name: u("leanMass"),
                      stroke: "#3b82f6",
                      strokeWidth: 2,
                      dot: { fill: "#3b82f6", r: 3, strokeWidth: 0 },
                      connectNulls: !0,
                    }),
                    R.jsx(rt, {
                      type: "monotone",
                      dataKey: "skeletalMuscle",
                      name: u("skeletalMuscleMass"),
                      stroke: "#10b981",
                      strokeWidth: 2,
                      dot: { fill: "#10b981", r: 3, strokeWidth: 0 },
                      connectNulls: !0,
                    }),
                  ],
                }),
              }),
            }),
            R.jsxs("div", {
              className: "mt-3 flex flex-wrap gap-4",
              children: [
                R.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    R.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-red-500" }),
                    R.jsx("span", {
                      className: "text-muted-foreground text-xs",
                      children: u("bodyFatPercent"),
                    }),
                  ],
                }),
                R.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    R.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-blue-500" }),
                    R.jsx("span", {
                      className: "text-muted-foreground text-xs",
                      children: u("leanMass"),
                    }),
                  ],
                }),
                R.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    R.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500" }),
                    R.jsx("span", {
                      className: "text-muted-foreground text-xs",
                      children: u("skeletalMuscleMass"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      r &&
        (r.mealAdherence > 0 || r.workoutAdherence > 0) &&
        R.jsxs("div", {
          className: "grid gap-3 md:grid-cols-2",
          children: [
            R.jsxs("div", {
              className:
                "border-border bg-card shadow-card hover:shadow-lifted overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5",
              children: [
                R.jsx("div", {
                  className: "border-border bg-nutrition/8 border-b p-4",
                  children: R.jsx("h3", {
                    className: "text-nutrition text-sm font-semibold",
                    children: u("mealAdherence"),
                  }),
                }),
                R.jsxs("div", {
                  className: "p-5",
                  children: [
                    R.jsxs("p", {
                      className: "text-4xl font-bold",
                      children: [r.mealAdherence.toFixed(0), "%"],
                    }),
                    R.jsx("div", {
                      className: "mt-3 h-2.5 overflow-hidden rounded-full bg-neutral-100",
                      dir: l === "ar" ? "rtl" : "ltr",
                      children: R.jsx("div", {
                        className: "bg-nutrition h-full rounded-full transition-all duration-500",
                        style: {
                          width: `${r.mealAdherence}%`,
                          marginInlineStart: 0,
                          marginInlineEnd: "auto",
                        },
                      }),
                    }),
                  ],
                }),
              ],
            }),
            R.jsxs("div", {
              className:
                "border-border bg-card shadow-card hover:shadow-lifted overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5",
              children: [
                R.jsx("div", {
                  className: "border-border bg-fitness/8 border-b p-4",
                  children: R.jsx("h3", {
                    className: "text-fitness text-sm font-semibold",
                    children: u("workoutAdherence"),
                  }),
                }),
                R.jsxs("div", {
                  className: "p-5",
                  children: [
                    R.jsxs("p", {
                      className: "text-4xl font-bold",
                      children: [r.workoutAdherence.toFixed(0), "%"],
                    }),
                    R.jsx("div", {
                      className: "mt-3 h-2.5 overflow-hidden rounded-full bg-neutral-100",
                      dir: l === "ar" ? "rtl" : "ltr",
                      children: R.jsx("div", {
                        className: "bg-fitness h-full rounded-full transition-all duration-500",
                        style: {
                          width: `${r.workoutAdherence}%`,
                          marginInlineStart: 0,
                          marginInlineEnd: "auto",
                        },
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
export { o2 as default };
