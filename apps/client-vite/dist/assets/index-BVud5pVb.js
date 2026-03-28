const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-oQ3XNe05.js",
      "assets/widget-card-ChokKurf.js",
      "assets/cn-CDN07tui.js",
      "assets/empty-state-BQ3yrOyd.js",
      "assets/button-B1_2FTXK.js",
      "assets/format-zSzWEmcW.js",
      "assets/loader-circle-BpriWBmn.js",
      "assets/createLucideIcon-CflinLEd.js",
      "assets/dumbbell-DitM0HwP.js",
      "assets/utensils-crossed-Du_1PGDJ.js",
      "assets/calendar-PtChDace.js",
      "assets/shield-BE2ncHmf.js",
      "assets/x-C2ku7ZUf.js",
      "assets/flame-BZ5lZkzP.js",
      "assets/clipboard-check-CSGaMZfn.js",
      "assets/trending-up-yKghX4cs.js",
      "assets/welcome-Bypeqnyb.js",
      "assets/card-BCjwpV6H.js",
      "assets/message-square-ClKQK_G-.js",
      "assets/arrow-right-CWv-e18d.js",
      "assets/pending-h-YpwFZo.js",
      "assets/circle-check-VkPdAKB-.js",
      "assets/clock-4g7FCPWC.js",
      "assets/initial-assessment-DCFraQ_c.js",
      "assets/section-card-CI2ZkxEX.js",
      "assets/target-CiFs4VM2.js",
      "assets/check-ClxIZdHW.js",
      "assets/textarea-_-7z4I7D.js",
      "assets/input-Bb6vjdWa.js",
      "assets/user-Y1q6IynD.js",
      "assets/wrench-BWaosezx.js",
      "assets/info-iCufOcv1.js",
      "assets/ruler-BErsoevN.js",
      "assets/heart-Cfc7SifX.js",
      "assets/triangle-alert-DfzczM4d.js",
      "assets/arrow-left-Bw4Tcehd.js",
      "assets/workout-plan-4w8xGTBm.js",
      "assets/use-workout-plans-B8uBa6gJ.js",
      "assets/day-navigator-rbjImaMu.js",
      "assets/chevron-right-BUhXz13O.js",
      "assets/chevron-down-DOn0ww8M.js",
      "assets/tracking-DBq8ovy3.js",
      "assets/use-meal-plans-Bh59-FAW.js",
      "assets/use-toast-aSGH-up_.js",
      "assets/index.esm-D0Yx9_aU.js",
      "assets/trending-down-CdNIVmod.js",
      "assets/skeleton-eFLYgFmv.js",
      "assets/progress-CCrS6K9_.js",
      "assets/weight-BpUO4uB_.js",
      "assets/meal-plan-DN9MCgQN.js",
      "assets/faq-DC8x9f2o.js",
      "assets/constants-BEcy9OoF.js",
      "assets/message-square-plus-C_t3v5Qb.js",
      "assets/check-in-BOJt1fXa.js",
      "assets/zod-B0rGGjPA.js",
      "assets/login-DT1LNFYJ.js",
      "assets/index-Be4DrOB0.js",
      "assets/send-BC_RPN8O.js",
      "assets/index-BtzM9p3a.js",
      "assets/_id-CgvbNbXh.js",
      "assets/assessment-BrJ374pP.js",
    ]),
) => i.map((i) => d[i]);
var Bb = Object.defineProperty;
var qb = (a, n, s) =>
  n in a ? Bb(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s);
var Ba = (a, n, s) => qb(a, typeof n != "symbol" ? n + "" : n, s);
function zb(a, n) {
  for (var s = 0; s < n.length; s++) {
    const r = n[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in a)) {
          const c = Object.getOwnPropertyDescriptor(r, l);
          c && Object.defineProperty(a, l, c.get ? c : { enumerable: !0, get: () => r[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const d of c.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = s(l);
    fetch(l.href, c);
  }
})();
var dx =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Lf(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Dc = { exports: {} },
  Gs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm;
function Ib() {
  if (zm) return Gs;
  zm = 1;
  var a = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function s(r, l, c) {
    var d = null;
    if ((c !== void 0 && (d = "" + c), l.key !== void 0 && (d = "" + l.key), "key" in l)) {
      c = {};
      for (var g in l) g !== "key" && (c[g] = l[g]);
    } else c = l;
    return ((l = c.ref), { $$typeof: a, type: r, key: d, ref: l !== void 0 ? l : null, props: c });
  }
  return ((Gs.Fragment = n), (Gs.jsx = s), (Gs.jsxs = s), Gs);
}
var Im;
function jb() {
  return (Im || ((Im = 1), (Dc.exports = Ib())), Dc.exports);
}
var ae = jb(),
  Nc = { exports: {} },
  he = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jm;
function Hb() {
  if (jm) return he;
  jm = 1;
  var a = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function w(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (S && A[S]) || A["@@iterator"]), typeof A == "function" ? A : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    E = {};
  function D(A, H, Z) {
    ((this.props = A), (this.context = H), (this.refs = E), (this.updater = Z || R));
  }
  ((D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (A, H) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, H, "setState");
    }),
    (D.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function K() {}
  K.prototype = D.prototype;
  function Y(A, H, Z) {
    ((this.props = A), (this.context = H), (this.refs = E), (this.updater = Z || R));
  }
  var P = (Y.prototype = new K());
  ((P.constructor = Y), T(P, D.prototype), (P.isPureReactComponent = !0));
  var B = Array.isArray;
  function G() {}
  var U = { H: null, A: null, T: null, S: null },
    I = Object.prototype.hasOwnProperty;
  function Q(A, H, Z) {
    var ee = Z.ref;
    return { $$typeof: a, type: A, key: H, ref: ee !== void 0 ? ee : null, props: Z };
  }
  function z(A, H) {
    return Q(A.type, H, A.props);
  }
  function X(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }
  function $(A) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (Z) {
        return H[Z];
      })
    );
  }
  var ne = /\/+/g;
  function te(A, H) {
    return typeof A == "object" && A !== null && A.key != null ? $("" + A.key) : H.toString(36);
  }
  function J(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(G, G)
            : ((A.status = "pending"),
              A.then(
                function (H) {
                  A.status === "pending" && ((A.status = "fulfilled"), (A.value = H));
                },
                function (H) {
                  A.status === "pending" && ((A.status = "rejected"), (A.reason = H));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function O(A, H, Z, ee, fe) {
    var pe = typeof A;
    (pe === "undefined" || pe === "boolean") && (A = null);
    var ye = !1;
    if (A === null) ye = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case a:
            case n:
              ye = !0;
              break;
            case y:
              return ((ye = A._init), O(ye(A._payload), H, Z, ee, fe));
          }
      }
    if (ye)
      return (
        (fe = fe(A)),
        (ye = ee === "" ? "." + te(A, 0) : ee),
        B(fe)
          ? ((Z = ""),
            ye != null && (Z = ye.replace(ne, "$&/") + "/"),
            O(fe, H, Z, "", function (nn) {
              return nn;
            }))
          : fe != null &&
            (X(fe) &&
              (fe = z(
                fe,
                Z +
                  (fe.key == null || (A && A.key === fe.key)
                    ? ""
                    : ("" + fe.key).replace(ne, "$&/") + "/") +
                  ye,
              )),
            H.push(fe)),
        1
      );
    ye = 0;
    var Ve = ee === "" ? "." : ee + ":";
    if (B(A))
      for (var De = 0; De < A.length; De++)
        ((ee = A[De]), (pe = Ve + te(ee, De)), (ye += O(ee, H, Z, pe, fe)));
    else if (((De = w(A)), typeof De == "function"))
      for (A = De.call(A), De = 0; !(ee = A.next()).done; )
        ((ee = ee.value), (pe = Ve + te(ee, De++)), (ye += O(ee, H, Z, pe, fe)));
    else if (pe === "object") {
      if (typeof A.then == "function") return O(J(A), H, Z, ee, fe);
      throw (
        (H = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : H) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ye;
  }
  function j(A, H, Z) {
    if (A == null) return A;
    var ee = [],
      fe = 0;
    return (
      O(A, ee, "", "", function (pe) {
        return H.call(Z, pe, fe++);
      }),
      ee
    );
  }
  function ie(A) {
    if (A._status === -1) {
      var H = A._result;
      ((H = H()),
        H.then(
          function (Z) {
            (A._status === 0 || A._status === -1) && ((A._status = 1), (A._result = Z));
          },
          function (Z) {
            (A._status === 0 || A._status === -1) && ((A._status = 2), (A._result = Z));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = H)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var le =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var H = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" && A !== null && typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(H)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    re = {
      map: j,
      forEach: function (A, H, Z) {
        j(
          A,
          function () {
            H.apply(this, arguments);
          },
          Z,
        );
      },
      count: function (A) {
        var H = 0;
        return (
          j(A, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (A) {
        return (
          j(A, function (H) {
            return H;
          }) || []
        );
      },
      only: function (A) {
        if (!X(A))
          throw Error("React.Children.only expected to receive a single React element child.");
        return A;
      },
    };
  return (
    (he.Activity = v),
    (he.Children = re),
    (he.Component = D),
    (he.Fragment = s),
    (he.Profiler = l),
    (he.PureComponent = Y),
    (he.StrictMode = r),
    (he.Suspense = h),
    (he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
    (he.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return U.H.useMemoCache(A);
      },
    }),
    (he.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (he.cacheSignal = function () {
      return null;
    }),
    (he.cloneElement = function (A, H, Z) {
      if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
      var ee = T({}, A.props),
        fe = A.key;
      if (H != null)
        for (pe in (H.key !== void 0 && (fe = "" + H.key), H))
          !I.call(H, pe) ||
            pe === "key" ||
            pe === "__self" ||
            pe === "__source" ||
            (pe === "ref" && H.ref === void 0) ||
            (ee[pe] = H[pe]);
      var pe = arguments.length - 2;
      if (pe === 1) ee.children = Z;
      else if (1 < pe) {
        for (var ye = Array(pe), Ve = 0; Ve < pe; Ve++) ye[Ve] = arguments[Ve + 2];
        ee.children = ye;
      }
      return Q(A.type, fe, ee);
    }),
    (he.createContext = function (A) {
      return (
        (A = {
          $$typeof: d,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: c, _context: A }),
        A
      );
    }),
    (he.createElement = function (A, H, Z) {
      var ee,
        fe = {},
        pe = null;
      if (H != null)
        for (ee in (H.key !== void 0 && (pe = "" + H.key), H))
          I.call(H, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (fe[ee] = H[ee]);
      var ye = arguments.length - 2;
      if (ye === 1) fe.children = Z;
      else if (1 < ye) {
        for (var Ve = Array(ye), De = 0; De < ye; De++) Ve[De] = arguments[De + 2];
        fe.children = Ve;
      }
      if (A && A.defaultProps)
        for (ee in ((ye = A.defaultProps), ye)) fe[ee] === void 0 && (fe[ee] = ye[ee]);
      return Q(A, pe, fe);
    }),
    (he.createRef = function () {
      return { current: null };
    }),
    (he.forwardRef = function (A) {
      return { $$typeof: g, render: A };
    }),
    (he.isValidElement = X),
    (he.lazy = function (A) {
      return { $$typeof: y, _payload: { _status: -1, _result: A }, _init: ie };
    }),
    (he.memo = function (A, H) {
      return { $$typeof: m, type: A, compare: H === void 0 ? null : H };
    }),
    (he.startTransition = function (A) {
      var H = U.T,
        Z = {};
      U.T = Z;
      try {
        var ee = A(),
          fe = U.S;
        (fe !== null && fe(Z, ee),
          typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(G, le));
      } catch (pe) {
        le(pe);
      } finally {
        (H !== null && Z.types !== null && (H.types = Z.types), (U.T = H));
      }
    }),
    (he.unstable_useCacheRefresh = function () {
      return U.H.useCacheRefresh();
    }),
    (he.use = function (A) {
      return U.H.use(A);
    }),
    (he.useActionState = function (A, H, Z) {
      return U.H.useActionState(A, H, Z);
    }),
    (he.useCallback = function (A, H) {
      return U.H.useCallback(A, H);
    }),
    (he.useContext = function (A) {
      return U.H.useContext(A);
    }),
    (he.useDebugValue = function () {}),
    (he.useDeferredValue = function (A, H) {
      return U.H.useDeferredValue(A, H);
    }),
    (he.useEffect = function (A, H) {
      return U.H.useEffect(A, H);
    }),
    (he.useEffectEvent = function (A) {
      return U.H.useEffectEvent(A);
    }),
    (he.useId = function () {
      return U.H.useId();
    }),
    (he.useImperativeHandle = function (A, H, Z) {
      return U.H.useImperativeHandle(A, H, Z);
    }),
    (he.useInsertionEffect = function (A, H) {
      return U.H.useInsertionEffect(A, H);
    }),
    (he.useLayoutEffect = function (A, H) {
      return U.H.useLayoutEffect(A, H);
    }),
    (he.useMemo = function (A, H) {
      return U.H.useMemo(A, H);
    }),
    (he.useOptimistic = function (A, H) {
      return U.H.useOptimistic(A, H);
    }),
    (he.useReducer = function (A, H, Z) {
      return U.H.useReducer(A, H, Z);
    }),
    (he.useRef = function (A) {
      return U.H.useRef(A);
    }),
    (he.useState = function (A) {
      return U.H.useState(A);
    }),
    (he.useSyncExternalStore = function (A, H, Z) {
      return U.H.useSyncExternalStore(A, H, Z);
    }),
    (he.useTransition = function () {
      return U.H.useTransition();
    }),
    (he.version = "19.2.4"),
    he
  );
}
var Hm;
function So() {
  return (Hm || ((Hm = 1), (Nc.exports = Hb())), Nc.exports);
}
var W = So();
const Dt = Lf(W),
  hx = zb({ __proto__: null, default: Dt }, [W]);
var Pc = { exports: {} },
  Ks = {},
  Uc = { exports: {} },
  Bc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm;
function Vb() {
  return (
    Vm ||
      ((Vm = 1),
      (function (a) {
        function n(O, j) {
          var ie = O.length;
          O.push(j);
          e: for (; 0 < ie; ) {
            var le = (ie - 1) >>> 1,
              re = O[le];
            if (0 < l(re, j)) ((O[le] = j), (O[ie] = re), (ie = le));
            else break e;
          }
        }
        function s(O) {
          return O.length === 0 ? null : O[0];
        }
        function r(O) {
          if (O.length === 0) return null;
          var j = O[0],
            ie = O.pop();
          if (ie !== j) {
            O[0] = ie;
            e: for (var le = 0, re = O.length, A = re >>> 1; le < A; ) {
              var H = 2 * (le + 1) - 1,
                Z = O[H],
                ee = H + 1,
                fe = O[ee];
              if (0 > l(Z, ie))
                ee < re && 0 > l(fe, Z)
                  ? ((O[le] = fe), (O[ee] = ie), (le = ee))
                  : ((O[le] = Z), (O[H] = ie), (le = H));
              else if (ee < re && 0 > l(fe, ie)) ((O[le] = fe), (O[ee] = ie), (le = ee));
              else break e;
            }
          }
          return j;
        }
        function l(O, j) {
          var ie = O.sortIndex - j.sortIndex;
          return ie !== 0 ? ie : O.id - j.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var c = performance;
          a.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            g = d.now();
          a.unstable_now = function () {
            return d.now() - g;
          };
        }
        var h = [],
          m = [],
          y = 1,
          v = null,
          S = 3,
          w = !1,
          R = !1,
          T = !1,
          E = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          K = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function P(O) {
          for (var j = s(m); j !== null; ) {
            if (j.callback === null) r(m);
            else if (j.startTime <= O) (r(m), (j.sortIndex = j.expirationTime), n(h, j));
            else break;
            j = s(m);
          }
        }
        function B(O) {
          if (((T = !1), P(O), !R))
            if (s(h) !== null) ((R = !0), G || ((G = !0), $()));
            else {
              var j = s(m);
              j !== null && J(B, j.startTime - O);
            }
        }
        var G = !1,
          U = -1,
          I = 5,
          Q = -1;
        function z() {
          return E ? !0 : !(a.unstable_now() - Q < I);
        }
        function X() {
          if (((E = !1), G)) {
            var O = a.unstable_now();
            Q = O;
            var j = !0;
            try {
              e: {
                ((R = !1), T && ((T = !1), K(U), (U = -1)), (w = !0));
                var ie = S;
                try {
                  t: {
                    for (P(O), v = s(h); v !== null && !(v.expirationTime > O && z()); ) {
                      var le = v.callback;
                      if (typeof le == "function") {
                        ((v.callback = null), (S = v.priorityLevel));
                        var re = le(v.expirationTime <= O);
                        if (((O = a.unstable_now()), typeof re == "function")) {
                          ((v.callback = re), P(O), (j = !0));
                          break t;
                        }
                        (v === s(h) && r(h), P(O));
                      } else r(h);
                      v = s(h);
                    }
                    if (v !== null) j = !0;
                    else {
                      var A = s(m);
                      (A !== null && J(B, A.startTime - O), (j = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (S = ie), (w = !1));
                }
                j = void 0;
              }
            } finally {
              j ? $() : (G = !1);
            }
          }
        }
        var $;
        if (typeof Y == "function")
          $ = function () {
            Y(X);
          };
        else if (typeof MessageChannel < "u") {
          var ne = new MessageChannel(),
            te = ne.port2;
          ((ne.port1.onmessage = X),
            ($ = function () {
              te.postMessage(null);
            }));
        } else
          $ = function () {
            D(X, 0);
          };
        function J(O, j) {
          U = D(function () {
            O(a.unstable_now());
          }, j);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (a.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (I = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (a.unstable_next = function (O) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = S;
            }
            var ie = S;
            S = j;
            try {
              return O();
            } finally {
              S = ie;
            }
          }),
          (a.unstable_requestPaint = function () {
            E = !0;
          }),
          (a.unstable_runWithPriority = function (O, j) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var ie = S;
            S = O;
            try {
              return j();
            } finally {
              S = ie;
            }
          }),
          (a.unstable_scheduleCallback = function (O, j, ie) {
            var le = a.unstable_now();
            switch (
              (typeof ie == "object" && ie !== null
                ? ((ie = ie.delay), (ie = typeof ie == "number" && 0 < ie ? le + ie : le))
                : (ie = le),
              O)
            ) {
              case 1:
                var re = -1;
                break;
              case 2:
                re = 250;
                break;
              case 5:
                re = 1073741823;
                break;
              case 4:
                re = 1e4;
                break;
              default:
                re = 5e3;
            }
            return (
              (re = ie + re),
              (O = {
                id: y++,
                callback: j,
                priorityLevel: O,
                startTime: ie,
                expirationTime: re,
                sortIndex: -1,
              }),
              ie > le
                ? ((O.sortIndex = ie),
                  n(m, O),
                  s(h) === null && O === s(m) && (T ? (K(U), (U = -1)) : (T = !0), J(B, ie - le)))
                : ((O.sortIndex = re), n(h, O), R || w || ((R = !0), G || ((G = !0), $()))),
              O
            );
          }),
          (a.unstable_shouldYield = z),
          (a.unstable_wrapCallback = function (O) {
            var j = S;
            return function () {
              var ie = S;
              S = j;
              try {
                return O.apply(this, arguments);
              } finally {
                S = ie;
              }
            };
          }));
      })(Bc)),
    Bc
  );
}
var Qm;
function Qb() {
  return (Qm || ((Qm = 1), (Uc.exports = Vb())), Uc.exports);
}
var qc = { exports: {} },
  ut = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m;
function $b() {
  if ($m) return ut;
  $m = 1;
  var a = So();
  function n(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++) m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(n(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function c(h, m, y) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: v == null ? null : "" + v,
      children: h,
      containerInfo: m,
      implementation: y,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(h, m) {
    if (h === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ut.createPortal = function (h, m) {
      var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(n(299));
      return c(h, m, null, y);
    }),
    (ut.flushSync = function (h) {
      var m = d.T,
        y = r.p;
      try {
        if (((d.T = null), (r.p = 2), h)) return h();
      } finally {
        ((d.T = m), (r.p = y), r.d.f());
      }
    }),
    (ut.preconnect = function (h, m) {
      typeof h == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == "string" ? (m === "use-credentials" ? m : "") : void 0))
          : (m = null),
        r.d.C(h, m));
    }),
    (ut.prefetchDNS = function (h) {
      typeof h == "string" && r.d.D(h);
    }),
    (ut.preinit = function (h, m) {
      if (typeof h == "string" && m && typeof m.as == "string") {
        var y = m.as,
          v = g(y, m.crossOrigin),
          S = typeof m.integrity == "string" ? m.integrity : void 0,
          w = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        y === "style"
          ? r.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: w,
            })
          : y === "script" &&
            r.d.X(h, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: w,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (ut.preinitModule = function (h, m) {
      if (typeof h == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var y = g(m.as, m.crossOrigin);
            r.d.M(h, {
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && r.d.M(h);
    }),
    (ut.preload = function (h, m) {
      if (typeof h == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
        var y = m.as,
          v = g(y, m.crossOrigin);
        r.d.L(h, y, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (ut.preloadModule = function (h, m) {
      if (typeof h == "string")
        if (m) {
          var y = g(m.as, m.crossOrigin);
          r.d.m(h, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else r.d.m(h);
    }),
    (ut.requestFormReset = function (h) {
      r.d.r(h);
    }),
    (ut.unstable_batchedUpdates = function (h, m) {
      return h(m);
    }),
    (ut.useFormState = function (h, m, y) {
      return d.H.useFormState(h, m, y);
    }),
    (ut.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (ut.version = "19.2.4"),
    ut
  );
}
var Fm;
function hy() {
  if (Fm) return qc.exports;
  Fm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return (a(), (qc.exports = $b()), qc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ym;
function Fb() {
  if (Ym) return Ks;
  Ym = 1;
  var a = Qb(),
    n = So(),
    s = hy();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (i = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (c(e) !== e) throw Error(r(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((o = u.return), o !== null)) {
          i = o;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === i) return (h(u), e);
          if (f === o) return (h(u), t);
          f = f.sibling;
        }
        throw Error(r(188));
      }
      if (i.return !== o.return) ((i = u), (o = f));
      else {
        for (var p = !1, b = u.child; b; ) {
          if (b === i) {
            ((p = !0), (i = u), (o = f));
            break;
          }
          if (b === o) {
            ((p = !0), (o = u), (i = f));
            break;
          }
          b = b.sibling;
        }
        if (!p) {
          for (b = f.child; b; ) {
            if (b === i) {
              ((p = !0), (i = f), (o = u));
              break;
            }
            if (b === o) {
              ((p = !0), (o = f), (i = u));
              break;
            }
            b = b.sibling;
          }
          if (!p) throw Error(r(189));
        }
      }
      if (i.alternate !== o) throw Error(r(190));
    }
    if (i.tag !== 3) throw Error(r(188));
    return i.stateNode.current === i ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    S = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    T = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    D = Symbol.for("react.profiler"),
    K = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    G = Symbol.for("react.suspense_list"),
    U = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    Q = Symbol.for("react.activity"),
    z = Symbol.for("react.memo_cache_sentinel"),
    X = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (X && e[X]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var ne = Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case D:
        return "Profiler";
      case E:
        return "StrictMode";
      case B:
        return "Suspense";
      case G:
        return "SuspenseList";
      case Q:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case R:
          return "Portal";
        case Y:
          return e.displayName || "Context";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case P:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case U:
          return ((t = e.displayName || null), t !== null ? t : te(e.type) || "Memo");
        case I:
          ((t = e._payload), (e = e._init));
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  var J = Array.isArray,
    O = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ie = { pending: !1, data: null, method: null, action: null },
    le = [],
    re = -1;
  function A(e) {
    return { current: e };
  }
  function H(e) {
    0 > re || ((e.current = le[re]), (le[re] = null), re--);
  }
  function Z(e, t) {
    (re++, (le[re] = e.current), (e.current = t));
  }
  var ee = A(null),
    fe = A(null),
    pe = A(null),
    ye = A(null);
  function Ve(e, t) {
    switch ((Z(pe, t), Z(fe, e), Z(ee, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? lm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) ((t = lm(t)), (e = um(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (H(ee), Z(ee, e));
  }
  function De() {
    (H(ee), H(fe), H(pe));
  }
  function nn(e) {
    e.memoizedState !== null && Z(ye, e);
    var t = ee.current,
      i = um(t, e.type);
    t !== i && (Z(fe, e), Z(ee, i));
  }
  function yn(e) {
    (fe.current === e && (H(ee), H(fe)), ye.current === e && (H(ye), (Qs._currentValue = ie)));
  }
  var Gi, es;
  function vn(e) {
    if (Gi === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        ((Gi = (t && t[1]) || ""),
          (es =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Gi +
      e +
      es
    );
  }
  var Ki = !1;
  function Xi(e, t) {
    if (!e || Ki) return "";
    Ki = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var F = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(F.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(F, []);
                } catch (N) {
                  var L = N;
                }
                Reflect.construct(e, [], F);
              } else {
                try {
                  F.call();
                } catch (N) {
                  L = N;
                }
                e.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                L = N;
              }
              (F = e()) && typeof F.catch == "function" && F.catch(function () {});
            }
          } catch (N) {
            if (N && L && typeof N.stack == "string") return [N.stack, L.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
      u &&
        u.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = o.DetermineComponentFrameRoot(),
        p = f[0],
        b = f[1];
      if (p && b) {
        var _ = p.split(`
`),
          k = b.split(`
`);
        for (u = o = 0; o < _.length && !_[o].includes("DetermineComponentFrameRoot"); ) o++;
        for (; u < k.length && !k[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (o === _.length || u === k.length)
          for (o = _.length - 1, u = k.length - 1; 1 <= o && 0 <= u && _[o] !== k[u]; ) u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (_[o] !== k[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || _[o] !== k[u])) {
                  var q =
                    `
` + _[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      q.includes("<anonymous>") &&
                      (q = q.replace("<anonymous>", e.displayName)),
                    q
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      ((Ki = !1), (Error.prepareStackTrace = i));
    }
    return (i = e ? e.displayName || e.name : "") ? vn(i) : "";
  }
  function In(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return vn(e.type);
      case 16:
        return vn("Lazy");
      case 13:
        return e.child !== t && t !== null ? vn("Suspense Fallback") : vn("Suspense");
      case 19:
        return vn("SuspenseList");
      case 0:
      case 15:
        return Xi(e.type, !1);
      case 11:
        return Xi(e.type.render, !1);
      case 1:
        return Xi(e.type, !0);
      case 31:
        return vn("Activity");
      default:
        return "";
    }
  }
  function Wi(e) {
    try {
      var t = "",
        i = null;
      do ((t += In(e, i)), (i = e), (e = e.return));
      while (e);
      return t;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var Xt = Object.prototype.hasOwnProperty,
    ts = a.unstable_scheduleCallback,
    Zi = a.unstable_cancelCallback,
    bl = a.unstable_shouldYield,
    bo = a.unstable_requestPaint,
    ve = a.unstable_now,
    lt = a.unstable_getCurrentPriorityLevel,
    an = a.unstable_ImmediatePriority,
    Ro = a.unstable_UserBlockingPriority,
    wo = a.unstable_NormalPriority,
    vv = a.unstable_LowPriority,
    Hf = a.unstable_IdlePriority,
    Sv = a.log,
    bv = a.unstable_setDisableYieldValue,
    ns = null,
    Tt = null;
  function jn(e) {
    if ((typeof Sv == "function" && bv(e), Tt && typeof Tt.setStrictMode == "function"))
      try {
        Tt.setStrictMode(ns, e);
      } catch {}
  }
  var _t = Math.clz32 ? Math.clz32 : Tv,
    Rv = Math.log,
    wv = Math.LN2;
  function Tv(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Rv(e) / wv) | 0)) | 0);
  }
  var To = 256,
    _o = 262144,
    Eo = 4194304;
  function vi(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ao(e, t, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var u = 0,
      f = e.suspendedLanes,
      p = e.pingedLanes;
    e = e.warmLanes;
    var b = o & 134217727;
    return (
      b !== 0
        ? ((o = b & ~f),
          o !== 0
            ? (u = vi(o))
            : ((p &= b), p !== 0 ? (u = vi(p)) : i || ((i = b & ~e), i !== 0 && (u = vi(i)))))
        : ((b = o & ~f),
          b !== 0
            ? (u = vi(b))
            : p !== 0
              ? (u = vi(p))
              : i || ((i = o & ~e), i !== 0 && (u = vi(i)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & f) === 0 &&
            ((f = u & -u), (i = t & -t), f >= i || (f === 32 && (i & 4194048) !== 0))
          ? t
          : u
    );
  }
  function is(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function _v(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Vf() {
    var e = Eo;
    return ((Eo <<= 1), (Eo & 62914560) === 0 && (Eo = 4194304), e);
  }
  function Rl(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function as(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ev(e, t, i, o, u, f) {
    var p = e.pendingLanes;
    ((e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0));
    var b = e.entanglements,
      _ = e.expirationTimes,
      k = e.hiddenUpdates;
    for (i = p & ~i; 0 < i; ) {
      var q = 31 - _t(i),
        F = 1 << q;
      ((b[q] = 0), (_[q] = -1));
      var L = k[q];
      if (L !== null)
        for (k[q] = null, q = 0; q < L.length; q++) {
          var N = L[q];
          N !== null && (N.lane &= -536870913);
        }
      i &= ~F;
    }
    (o !== 0 && Qf(e, o, 0),
      f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(p & ~t)));
  }
  function Qf(e, t, i) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var o = 31 - _t(t);
    ((e.entangledLanes |= t),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (i & 261930)));
  }
  function $f(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var o = 31 - _t(i),
        u = 1 << o;
      ((u & t) | (e[o] & t) && (e[o] |= t), (i &= ~u));
    }
  }
  function Ff(e, t) {
    var i = t & -t;
    return ((i = (i & 42) !== 0 ? 1 : wl(i)), (i & (e.suspendedLanes | t)) !== 0 ? 0 : i);
  }
  function wl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Tl(e) {
    return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Yf() {
    var e = j.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Lm(e.type));
  }
  function Gf(e, t) {
    var i = j.p;
    try {
      return ((j.p = e), t());
    } finally {
      j.p = i;
    }
  }
  var Hn = Math.random().toString(36).slice(2),
    it = "__reactFiber$" + Hn,
    gt = "__reactProps$" + Hn,
    Ji = "__reactContainer$" + Hn,
    _l = "__reactEvents$" + Hn,
    Av = "__reactListeners$" + Hn,
    xv = "__reactHandles$" + Hn,
    Kf = "__reactResources$" + Hn,
    ss = "__reactMarker$" + Hn;
  function El(e) {
    (delete e[it], delete e[gt], delete e[_l], delete e[Av], delete e[xv]);
  }
  function ea(e) {
    var t = e[it];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[Ji] || i[it])) {
        if (((i = t.alternate), t.child !== null || (i !== null && i.child !== null)))
          for (e = pm(e); e !== null; ) {
            if ((i = e[it])) return i;
            e = pm(e);
          }
        return t;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function ta(e) {
    if ((e = e[it] || e[Ji])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function os(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function na(e) {
    var t = e[Kf];
    return (t || (t = e[Kf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function et(e) {
    e[ss] = !0;
  }
  var Xf = new Set(),
    Wf = {};
  function Si(e, t) {
    (ia(e, t), ia(e + "Capture", t));
  }
  function ia(e, t) {
    for (Wf[e] = t, e = 0; e < t.length; e++) Xf.add(t[e]);
  }
  var Cv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Zf = {},
    Jf = {};
  function Ov(e) {
    return Xt.call(Jf, e)
      ? !0
      : Xt.call(Zf, e)
        ? !1
        : Cv.test(e)
          ? (Jf[e] = !0)
          : ((Zf[e] = !0), !1);
  }
  function xo(e, t, i) {
    if (Ov(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + i);
      }
  }
  function Co(e, t, i) {
    if (i === null) e.removeAttribute(t);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + i);
    }
  }
  function Sn(e, t, i, o) {
    if (o === null) e.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(t, i, "" + o);
    }
  }
  function Pt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ed(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Mv(e, t, i) {
    var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var u = o.get,
        f = o.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (p) {
            ((i = "" + p), f.call(this, p));
          },
        }),
        Object.defineProperty(e, t, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (p) {
            i = "" + p;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Al(e) {
    if (!e._valueTracker) {
      var t = ed(e) ? "checked" : "value";
      e._valueTracker = Mv(e, t, "" + e[t]);
    }
  }
  function td(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      o = "";
    return (
      e && (o = ed(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function Oo(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var kv = /[\n"\\]/g;
  function Ut(e) {
    return e.replace(kv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function xl(e, t, i, o, u, f, p, b) {
    ((e.name = ""),
      p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean"
        ? (e.type = p)
        : e.removeAttribute("type"),
      t != null
        ? p === "number"
          ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + Pt(t))
          : e.value !== "" + Pt(t) && (e.value = "" + Pt(t))
        : (p !== "submit" && p !== "reset") || e.removeAttribute("value"),
      t != null
        ? Cl(e, p, Pt(t))
        : i != null
          ? Cl(e, p, Pt(i))
          : o != null && e.removeAttribute("value"),
      u == null && f != null && (e.defaultChecked = !!f),
      u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean"
        ? (e.name = "" + Pt(b))
        : e.removeAttribute("name"));
  }
  function nd(e, t, i, o, u, f, p, b) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      t != null || i != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || t != null)) {
        Al(e);
        return;
      }
      ((i = i != null ? "" + Pt(i) : ""),
        (t = t != null ? "" + Pt(t) : i),
        b || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((o = o ?? u),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = b ? e.checked : !!o),
      (e.defaultChecked = !!o),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.name = p),
      Al(e));
  }
  function Cl(e, t, i) {
    (t === "number" && Oo(e.ownerDocument) === e) ||
      e.defaultValue === "" + i ||
      (e.defaultValue = "" + i);
  }
  function aa(e, t, i, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        ((u = t.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && o && (e[i].defaultSelected = !0));
    } else {
      for (i = "" + Pt(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          ((e[u].selected = !0), o && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function id(e, t, i) {
    if (t != null && ((t = "" + Pt(t)), t !== e.value && (e.value = t), i == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? "" + Pt(i) : "";
  }
  function ad(e, t, i, o) {
    if (t == null) {
      if (o != null) {
        if (i != null) throw Error(r(92));
        if (J(o)) {
          if (1 < o.length) throw Error(r(93));
          o = o[0];
        }
        i = o;
      }
      (i == null && (i = ""), (t = i));
    }
    ((i = Pt(t)),
      (e.defaultValue = i),
      (o = e.textContent),
      o === i && o !== "" && o !== null && (e.value = o),
      Al(e));
  }
  function sa(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function sd(e, t, i) {
    var o = t.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? o
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : o
        ? e.setProperty(t, i)
        : typeof i != "number" || i === 0 || Lv.has(t)
          ? t === "float"
            ? (e.cssFloat = i)
            : (e[t] = ("" + i).trim())
          : (e[t] = i + "px");
  }
  function od(e, t, i) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), i != null)) {
      for (var o in i)
        !i.hasOwnProperty(o) ||
          (t != null && t.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
              ? (e.cssFloat = "")
              : (e[o] = ""));
      for (var u in t) ((o = t[u]), t.hasOwnProperty(u) && i[u] !== o && sd(e, u, o));
    } else for (var f in t) t.hasOwnProperty(f) && sd(e, f, t[f]);
  }
  function Ol(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Dv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Nv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mo(e) {
    return Nv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function bn() {}
  var Ml = null;
  function kl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var oa = null,
    ra = null;
  function rd(e) {
    var t = ta(e);
    if (t && (e = t.stateNode)) {
      var i = e[gt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (xl(
              e,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name,
            ),
            (t = i.name),
            i.type === "radio" && t != null)
          ) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll('input[name="' + Ut("" + t) + '"][type="radio"]'), t = 0;
              t < i.length;
              t++
            ) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var u = o[gt] || null;
                if (!u) throw Error(r(90));
                xl(
                  o,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < i.length; t++) ((o = i[t]), o.form === e.form && td(o));
          }
          break e;
        case "textarea":
          id(e, i.value, i.defaultValue);
          break e;
        case "select":
          ((t = i.value), t != null && aa(e, !!i.multiple, t, !1));
      }
    }
  }
  var Ll = !1;
  function ld(e, t, i) {
    if (Ll) return e(t, i);
    Ll = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (
        ((Ll = !1),
        (oa !== null || ra !== null) &&
          (yr(), oa && ((t = oa), (e = ra), (ra = oa = null), rd(t), e)))
      )
        for (t = 0; t < e.length; t++) rd(e[t]);
    }
  }
  function rs(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[gt] || null;
    if (o === null) return null;
    i = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((o = !o.disabled) ||
          ((e = e.type),
          (o = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
          (e = !o));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(r(231, t, typeof i));
    return i;
  }
  var Rn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Dl = !1;
  if (Rn)
    try {
      var ls = {};
      (Object.defineProperty(ls, "passive", {
        get: function () {
          Dl = !0;
        },
      }),
        window.addEventListener("test", ls, ls),
        window.removeEventListener("test", ls, ls));
    } catch {
      Dl = !1;
    }
  var Vn = null,
    Nl = null,
    ko = null;
  function ud() {
    if (ko) return ko;
    var e,
      t = Nl,
      i = t.length,
      o,
      u = "value" in Vn ? Vn.value : Vn.textContent,
      f = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++);
    var p = i - e;
    for (o = 1; o <= p && t[i - o] === u[f - o]; o++);
    return (ko = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Lo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Do() {
    return !0;
  }
  function cd() {
    return !1;
  }
  function mt(e) {
    function t(i, o, u, f, p) {
      ((this._reactName = i),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = f),
        (this.target = p),
        (this.currentTarget = null));
      for (var b in e) e.hasOwnProperty(b) && ((i = e[b]), (this[b] = i ? i(f) : f[b]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Do
          : cd),
        (this.isPropagationStopped = cd),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Do));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Do));
        },
        persist: function () {},
        isPersistent: Do,
      }),
      t
    );
  }
  var bi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    No = mt(bi),
    us = v({}, bi, { view: 0, detail: 0 }),
    Pv = mt(us),
    Pl,
    Ul,
    cs,
    Po = v({}, us, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ql,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== cs &&
              (cs && e.type === "mousemove"
                ? ((Pl = e.screenX - cs.screenX), (Ul = e.screenY - cs.screenY))
                : (Ul = Pl = 0),
              (cs = e)),
            Pl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ul;
      },
    }),
    fd = mt(Po),
    Uv = v({}, Po, { dataTransfer: 0 }),
    Bv = mt(Uv),
    qv = v({}, us, { relatedTarget: 0 }),
    Bl = mt(qv),
    zv = v({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Iv = mt(zv),
    jv = v({}, bi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hv = mt(jv),
    Vv = v({}, bi, { data: 0 }),
    dd = mt(Vv),
    Qv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    $v = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Fv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Fv[e]) ? !!t[e] : !1;
  }
  function ql() {
    return Yv;
  }
  var Gv = v({}, us, {
      key: function (e) {
        if (e.key) {
          var t = Qv[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? $v[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ql,
      charCode: function (e) {
        return e.type === "keypress" ? Lo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Lo(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Kv = mt(Gv),
    Xv = v({}, Po, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    hd = mt(Xv),
    Wv = v({}, us, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ql,
    }),
    Zv = mt(Wv),
    Jv = v({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eS = mt(Jv),
    tS = v({}, Po, {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    nS = mt(tS),
    iS = v({}, bi, { newState: 0, oldState: 0 }),
    aS = mt(iS),
    sS = [9, 13, 27, 32],
    zl = Rn && "CompositionEvent" in window,
    fs = null;
  Rn && "documentMode" in document && (fs = document.documentMode);
  var oS = Rn && "TextEvent" in window && !fs,
    gd = Rn && (!zl || (fs && 8 < fs && 11 >= fs)),
    md = " ",
    pd = !1;
  function yd(e, t) {
    switch (e) {
      case "keyup":
        return sS.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vd(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var la = !1;
  function rS(e, t) {
    switch (e) {
      case "compositionend":
        return vd(t);
      case "keypress":
        return t.which !== 32 ? null : ((pd = !0), md);
      case "textInput":
        return ((e = t.data), e === md && pd ? null : e);
      default:
        return null;
    }
  }
  function lS(e, t) {
    if (la)
      return e === "compositionend" || (!zl && yd(e, t))
        ? ((e = ud()), (ko = Nl = Vn = null), (la = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var uS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!uS[e.type] : t === "textarea";
  }
  function bd(e, t, i, o) {
    (oa ? (ra ? ra.push(o) : (ra = [o])) : (oa = o),
      (t = _r(t, "onChange")),
      0 < t.length &&
        ((i = new No("onChange", "change", null, i, o)), e.push({ event: i, listeners: t })));
  }
  var ds = null,
    hs = null;
  function cS(e) {
    nm(e, 0);
  }
  function Uo(e) {
    var t = os(e);
    if (td(t)) return e;
  }
  function Rd(e, t) {
    if (e === "change") return t;
  }
  var wd = !1;
  if (Rn) {
    var Il;
    if (Rn) {
      var jl = "oninput" in document;
      if (!jl) {
        var Td = document.createElement("div");
        (Td.setAttribute("oninput", "return;"), (jl = typeof Td.oninput == "function"));
      }
      Il = jl;
    } else Il = !1;
    wd = Il && (!document.documentMode || 9 < document.documentMode);
  }
  function _d() {
    ds && (ds.detachEvent("onpropertychange", Ed), (hs = ds = null));
  }
  function Ed(e) {
    if (e.propertyName === "value" && Uo(hs)) {
      var t = [];
      (bd(t, hs, e, kl(e)), ld(cS, t));
    }
  }
  function fS(e, t, i) {
    e === "focusin"
      ? (_d(), (ds = t), (hs = i), ds.attachEvent("onpropertychange", Ed))
      : e === "focusout" && _d();
  }
  function dS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Uo(hs);
  }
  function hS(e, t) {
    if (e === "click") return Uo(t);
  }
  function gS(e, t) {
    if (e === "input" || e === "change") return Uo(t);
  }
  function mS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Et = typeof Object.is == "function" ? Object.is : mS;
  function gs(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e),
      o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var u = i[o];
      if (!Xt.call(t, u) || !Et(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Ad(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xd(e, t) {
    var i = Ad(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (((o = e + i.textContent.length), e <= t && o >= t)) return { node: i, offset: t - e };
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Ad(i);
    }
  }
  function Cd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Cd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Od(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Oo(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Oo(e.document);
    }
    return t;
  }
  function Hl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var pS = Rn && "documentMode" in document && 11 >= document.documentMode,
    ua = null,
    Vl = null,
    ms = null,
    Ql = !1;
  function Md(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Ql ||
      ua == null ||
      ua !== Oo(o) ||
      ((o = ua),
      "selectionStart" in o && Hl(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (ms && gs(ms, o)) ||
        ((ms = o),
        (o = _r(Vl, "onSelect")),
        0 < o.length &&
          ((t = new No("onSelect", "select", null, t, i)),
          e.push({ event: t, listeners: o }),
          (t.target = ua))));
  }
  function Ri(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i["Webkit" + e] = "webkit" + t),
      (i["Moz" + e] = "moz" + t),
      i
    );
  }
  var ca = {
      animationend: Ri("Animation", "AnimationEnd"),
      animationiteration: Ri("Animation", "AnimationIteration"),
      animationstart: Ri("Animation", "AnimationStart"),
      transitionrun: Ri("Transition", "TransitionRun"),
      transitionstart: Ri("Transition", "TransitionStart"),
      transitioncancel: Ri("Transition", "TransitionCancel"),
      transitionend: Ri("Transition", "TransitionEnd"),
    },
    $l = {},
    kd = {};
  Rn &&
    ((kd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ca.animationend.animation,
      delete ca.animationiteration.animation,
      delete ca.animationstart.animation),
    "TransitionEvent" in window || delete ca.transitionend.transition);
  function wi(e) {
    if ($l[e]) return $l[e];
    if (!ca[e]) return e;
    var t = ca[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in kd) return ($l[e] = t[i]);
    return e;
  }
  var Ld = wi("animationend"),
    Dd = wi("animationiteration"),
    Nd = wi("animationstart"),
    yS = wi("transitionrun"),
    vS = wi("transitionstart"),
    SS = wi("transitioncancel"),
    Pd = wi("transitionend"),
    Ud = new Map(),
    Fl =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Fl.push("scrollEnd");
  function Wt(e, t) {
    (Ud.set(e, t), Si(t, [e]));
  }
  var Bo =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" && e !== null && typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Bt = [],
    fa = 0,
    Yl = 0;
  function qo() {
    for (var e = fa, t = (Yl = fa = 0); t < e; ) {
      var i = Bt[t];
      Bt[t++] = null;
      var o = Bt[t];
      Bt[t++] = null;
      var u = Bt[t];
      Bt[t++] = null;
      var f = Bt[t];
      if (((Bt[t++] = null), o !== null && u !== null)) {
        var p = o.pending;
        (p === null ? (u.next = u) : ((u.next = p.next), (p.next = u)), (o.pending = u));
      }
      f !== 0 && Bd(i, u, f);
    }
  }
  function zo(e, t, i, o) {
    ((Bt[fa++] = e),
      (Bt[fa++] = t),
      (Bt[fa++] = i),
      (Bt[fa++] = o),
      (Yl |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o));
  }
  function Gl(e, t, i, o) {
    return (zo(e, t, i, o), Io(e));
  }
  function Ti(e, t) {
    return (zo(e, null, null, t), Io(e));
  }
  function Bd(e, t, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var u = !1, f = e.return; f !== null; )
      ((f.childLanes |= i),
        (o = f.alternate),
        o !== null && (o.childLanes |= i),
        f.tag === 22 && ((e = f.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = f),
        (f = f.return));
    return e.tag === 3
      ? ((f = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - _t(i)),
          (e = f.hiddenUpdates),
          (o = e[u]),
          o === null ? (e[u] = [t]) : o.push(t),
          (t.lane = i | 536870912)),
        f)
      : null;
  }
  function Io(e) {
    if (50 < Bs) throw ((Bs = 0), (ic = null), Error(r(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var da = {};
  function bS(e, t, i, o) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function At(e, t, i, o) {
    return new bS(e, t, i, o);
  }
  function Kl(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function wn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = At(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 65011712),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function qd(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return (
      i === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = i.childLanes),
          (e.lanes = i.lanes),
          (e.child = i.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = i.memoizedProps),
          (e.memoizedState = i.memoizedState),
          (e.updateQueue = i.updateQueue),
          (e.type = i.type),
          (t = i.dependencies),
          (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function jo(e, t, i, o, u, f) {
    var p = 0;
    if (((o = e), typeof e == "function")) Kl(e) && (p = 1);
    else if (typeof e == "string")
      p = Eb(e, i, ee.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Q:
          return ((e = At(31, i, t, u)), (e.elementType = Q), (e.lanes = f), e);
        case T:
          return _i(i.children, u, f, t);
        case E:
          ((p = 8), (u |= 24));
          break;
        case D:
          return ((e = At(12, i, t, u | 2)), (e.elementType = D), (e.lanes = f), e);
        case B:
          return ((e = At(13, i, t, u)), (e.elementType = B), (e.lanes = f), e);
        case G:
          return ((e = At(19, i, t, u)), (e.elementType = G), (e.lanes = f), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Y:
                p = 10;
                break e;
              case K:
                p = 9;
                break e;
              case P:
                p = 11;
                break e;
              case U:
                p = 14;
                break e;
              case I:
                ((p = 16), (o = null));
                break e;
            }
          ((p = 29), (i = Error(r(130, e === null ? "null" : typeof e, ""))), (o = null));
      }
    return ((t = At(p, i, t, u)), (t.elementType = e), (t.type = o), (t.lanes = f), t);
  }
  function _i(e, t, i, o) {
    return ((e = At(7, e, o, t)), (e.lanes = i), e);
  }
  function Xl(e, t, i) {
    return ((e = At(6, e, null, t)), (e.lanes = i), e);
  }
  function zd(e) {
    var t = At(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Wl(e, t, i) {
    return (
      (t = At(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Id = new WeakMap();
  function qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var i = Id.get(e);
      return i !== void 0 ? i : ((t = { value: e, source: t, stack: Wi(t) }), Id.set(e, t), t);
    }
    return { value: e, source: t, stack: Wi(t) };
  }
  var ha = [],
    ga = 0,
    Ho = null,
    ps = 0,
    zt = [],
    It = 0,
    Qn = null,
    sn = 1,
    on = "";
  function Tn(e, t) {
    ((ha[ga++] = ps), (ha[ga++] = Ho), (Ho = e), (ps = t));
  }
  function jd(e, t, i) {
    ((zt[It++] = sn), (zt[It++] = on), (zt[It++] = Qn), (Qn = e));
    var o = sn;
    e = on;
    var u = 32 - _t(o) - 1;
    ((o &= ~(1 << u)), (i += 1));
    var f = 32 - _t(t) + u;
    if (30 < f) {
      var p = u - (u % 5);
      ((f = (o & ((1 << p) - 1)).toString(32)),
        (o >>= p),
        (u -= p),
        (sn = (1 << (32 - _t(t) + u)) | (i << u) | o),
        (on = f + e));
    } else ((sn = (1 << f) | (i << u) | o), (on = e));
  }
  function Zl(e) {
    e.return !== null && (Tn(e, 1), jd(e, 1, 0));
  }
  function Jl(e) {
    for (; e === Ho; ) ((Ho = ha[--ga]), (ha[ga] = null), (ps = ha[--ga]), (ha[ga] = null));
    for (; e === Qn; )
      ((Qn = zt[--It]),
        (zt[It] = null),
        (on = zt[--It]),
        (zt[It] = null),
        (sn = zt[--It]),
        (zt[It] = null));
  }
  function Hd(e, t) {
    ((zt[It++] = sn), (zt[It++] = on), (zt[It++] = Qn), (sn = t.id), (on = t.overflow), (Qn = e));
  }
  var at = null,
    Ne = null,
    Te = !1,
    $n = null,
    jt = !1,
    eu = Error(r(519));
  function Fn(e) {
    var t = Error(
      r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (ys(qt(t, e)), eu);
  }
  function Vd(e) {
    var t = e.stateNode,
      i = e.type,
      o = e.memoizedProps;
    switch (((t[it] = e), (t[gt] = o), i)) {
      case "dialog":
        (be("cancel", t), be("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        be("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < zs.length; i++) be(zs[i], t);
        break;
      case "source":
        be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (be("error", t), be("load", t));
        break;
      case "details":
        be("toggle", t);
        break;
      case "input":
        (be("invalid", t),
          nd(t, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0));
        break;
      case "select":
        be("invalid", t);
        break;
      case "textarea":
        (be("invalid", t), ad(t, o.value, o.defaultValue, o.children));
    }
    ((i = o.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      t.textContent === "" + i ||
      o.suppressHydrationWarning === !0 ||
      om(t.textContent, i)
        ? (o.popover != null && (be("beforetoggle", t), be("toggle", t)),
          o.onScroll != null && be("scroll", t),
          o.onScrollEnd != null && be("scrollend", t),
          o.onClick != null && (t.onclick = bn),
          (t = !0))
        : (t = !1),
      t || Fn(e, !0));
  }
  function Qd(e) {
    for (at = e.return; at; )
      switch (at.tag) {
        case 5:
        case 31:
        case 13:
          jt = !1;
          return;
        case 27:
        case 3:
          jt = !0;
          return;
        default:
          at = at.return;
      }
  }
  function ma(e) {
    if (e !== at) return !1;
    if (!Te) return (Qd(e), (Te = !0), !1);
    var t = e.tag,
      i;
    if (
      ((i = t !== 3 && t !== 27) &&
        ((i = t === 5) &&
          ((i = e.type), (i = !(i !== "form" && i !== "button") || vc(e.type, e.memoizedProps))),
        (i = !i)),
      i && Ne && Fn(e),
      Qd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
      Ne = mm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
      Ne = mm(e);
    } else
      t === 27
        ? ((t = Ne), oi(e.type) ? ((e = Tc), (Tc = null), (Ne = e)) : (Ne = t))
        : (Ne = at ? Vt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ei() {
    ((Ne = at = null), (Te = !1));
  }
  function tu() {
    var e = $n;
    return (e !== null && (St === null ? (St = e) : St.push.apply(St, e), ($n = null)), e);
  }
  function ys(e) {
    $n === null ? ($n = [e]) : $n.push(e);
  }
  var nu = A(null),
    Ai = null,
    _n = null;
  function Yn(e, t, i) {
    (Z(nu, t._currentValue), (t._currentValue = i));
  }
  function En(e) {
    ((e._currentValue = nu.current), H(nu));
  }
  function iu(e, t, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function au(e, t, i, o) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var p = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var b = f;
          f = u;
          for (var _ = 0; _ < t.length; _++)
            if (b.context === t[_]) {
              ((f.lanes |= i),
                (b = f.alternate),
                b !== null && (b.lanes |= i),
                iu(f.return, i, e),
                o || (p = null));
              break e;
            }
          f = b.next;
        }
      } else if (u.tag === 18) {
        if (((p = u.return), p === null)) throw Error(r(341));
        ((p.lanes |= i), (f = p.alternate), f !== null && (f.lanes |= i), iu(p, i, e), (p = null));
      } else p = u.child;
      if (p !== null) p.return = u;
      else
        for (p = u; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((u = p.sibling), u !== null)) {
            ((u.return = p.return), (p = u));
            break;
          }
          p = p.return;
        }
      u = p;
    }
  }
  function pa(e, t, i, o) {
    e = null;
    for (var u = t, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var p = u.alternate;
        if (p === null) throw Error(r(387));
        if (((p = p.memoizedProps), p !== null)) {
          var b = u.type;
          Et(u.pendingProps.value, p.value) || (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (u === ye.current) {
        if (((p = u.alternate), p === null)) throw Error(r(387));
        p.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Qs) : (e = [Qs]));
      }
      u = u.return;
    }
    (e !== null && au(t, e, i, o), (t.flags |= 262144));
  }
  function Vo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Et(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function xi(e) {
    ((Ai = e), (_n = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function st(e) {
    return $d(Ai, e);
  }
  function Qo(e, t) {
    return (Ai === null && xi(e), $d(e, t));
  }
  function $d(e, t) {
    var i = t._currentValue;
    if (((t = { context: t, memoizedValue: i, next: null }), _n === null)) {
      if (e === null) throw Error(r(308));
      ((_n = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
    } else _n = _n.next = t;
    return i;
  }
  var RS =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (i, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (i) {
                  return i();
                }));
            };
          },
    wS = a.unstable_scheduleCallback,
    TS = a.unstable_NormalPriority,
    Fe = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function su() {
    return { controller: new RS(), data: new Map(), refCount: 0 };
  }
  function vs(e) {
    (e.refCount--,
      e.refCount === 0 &&
        wS(TS, function () {
          e.controller.abort();
        }));
  }
  var Ss = null,
    ou = 0,
    ya = 0,
    va = null;
  function _S(e, t) {
    if (Ss === null) {
      var i = (Ss = []);
      ((ou = 0),
        (ya = uc()),
        (va = {
          status: "pending",
          value: void 0,
          then: function (o) {
            i.push(o);
          },
        }));
    }
    return (ou++, t.then(Fd, Fd), t);
  }
  function Fd() {
    if (--ou === 0 && Ss !== null) {
      va !== null && (va.status = "fulfilled");
      var e = Ss;
      ((Ss = null), (ya = 0), (va = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ES(e, t) {
    var i = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          i.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((o.status = "fulfilled"), (o.value = t));
          for (var u = 0; u < i.length; u++) (0, i[u])(t);
        },
        function (u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < i.length; u++) (0, i[u])(void 0);
        },
      ),
      o
    );
  }
  var Yd = O.S;
  O.S = function (e, t) {
    ((Mg = ve()),
      typeof t == "object" && t !== null && typeof t.then == "function" && _S(e, t),
      Yd !== null && Yd(e, t));
  };
  var Ci = A(null);
  function ru() {
    var e = Ci.current;
    return e !== null ? e : Le.pooledCache;
  }
  function $o(e, t) {
    t === null ? Z(Ci, Ci.current) : Z(Ci, t.pool);
  }
  function Gd() {
    var e = ru();
    return e === null ? null : { parent: Fe._currentValue, pool: e };
  }
  var Sa = Error(r(460)),
    lu = Error(r(474)),
    Fo = Error(r(542)),
    Yo = { then: function () {} };
  function Kd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Xd(e, t, i) {
    switch (
      ((i = e[i]), i === void 0 ? e.push(t) : i !== t && (t.then(bn, bn), (t = i)), t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Zd(e), e);
      default:
        if (typeof t.status == "string") t.then(bn, bn);
        else {
          if (((e = Le), e !== null && 100 < e.shellSuspendCounter)) throw Error(r(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = o));
                }
              },
              function (o) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = o));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Zd(e), e);
        }
        throw ((Mi = t), Sa);
    }
  }
  function Oi(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function" ? ((Mi = i), Sa) : i;
    }
  }
  var Mi = null;
  function Wd() {
    if (Mi === null) throw Error(r(459));
    var e = Mi;
    return ((Mi = null), e);
  }
  function Zd(e) {
    if (e === Sa || e === Fo) throw Error(r(483));
  }
  var ba = null,
    bs = 0;
  function Go(e) {
    var t = bs;
    return ((bs += 1), ba === null && (ba = []), Xd(ba, e, t));
  }
  function Rs(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Ko(e, t) {
    throw t.$$typeof === S
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e,
          ),
        ));
  }
  function Jd(e) {
    function t(C, x) {
      if (e) {
        var M = C.deletions;
        M === null ? ((C.deletions = [x]), (C.flags |= 16)) : M.push(x);
      }
    }
    function i(C, x) {
      if (!e) return null;
      for (; x !== null; ) (t(C, x), (x = x.sibling));
      return null;
    }
    function o(C) {
      for (var x = new Map(); C !== null; )
        (C.key !== null ? x.set(C.key, C) : x.set(C.index, C), (C = C.sibling));
      return x;
    }
    function u(C, x) {
      return ((C = wn(C, x)), (C.index = 0), (C.sibling = null), C);
    }
    function f(C, x, M) {
      return (
        (C.index = M),
        e
          ? ((M = C.alternate),
            M !== null
              ? ((M = M.index), M < x ? ((C.flags |= 67108866), x) : M)
              : ((C.flags |= 67108866), x))
          : ((C.flags |= 1048576), x)
      );
    }
    function p(C) {
      return (e && C.alternate === null && (C.flags |= 67108866), C);
    }
    function b(C, x, M, V) {
      return x === null || x.tag !== 6
        ? ((x = Xl(M, C.mode, V)), (x.return = C), x)
        : ((x = u(x, M)), (x.return = C), x);
    }
    function _(C, x, M, V) {
      var ue = M.type;
      return ue === T
        ? q(C, x, M.props.children, V, M.key)
        : x !== null &&
            (x.elementType === ue ||
              (typeof ue == "object" && ue !== null && ue.$$typeof === I && Oi(ue) === x.type))
          ? ((x = u(x, M.props)), Rs(x, M), (x.return = C), x)
          : ((x = jo(M.type, M.key, M.props, null, C.mode, V)), Rs(x, M), (x.return = C), x);
    }
    function k(C, x, M, V) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== M.containerInfo ||
        x.stateNode.implementation !== M.implementation
        ? ((x = Wl(M, C.mode, V)), (x.return = C), x)
        : ((x = u(x, M.children || [])), (x.return = C), x);
    }
    function q(C, x, M, V, ue) {
      return x === null || x.tag !== 7
        ? ((x = _i(M, C.mode, V, ue)), (x.return = C), x)
        : ((x = u(x, M)), (x.return = C), x);
    }
    function F(C, x, M) {
      if ((typeof x == "string" && x !== "") || typeof x == "number" || typeof x == "bigint")
        return ((x = Xl("" + x, C.mode, M)), (x.return = C), x);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case w:
            return ((M = jo(x.type, x.key, x.props, null, C.mode, M)), Rs(M, x), (M.return = C), M);
          case R:
            return ((x = Wl(x, C.mode, M)), (x.return = C), x);
          case I:
            return ((x = Oi(x)), F(C, x, M));
        }
        if (J(x) || $(x)) return ((x = _i(x, C.mode, M, null)), (x.return = C), x);
        if (typeof x.then == "function") return F(C, Go(x), M);
        if (x.$$typeof === Y) return F(C, Qo(C, x), M);
        Ko(C, x);
      }
      return null;
    }
    function L(C, x, M, V) {
      var ue = x !== null ? x.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint")
        return ue !== null ? null : b(C, x, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case w:
            return M.key === ue ? _(C, x, M, V) : null;
          case R:
            return M.key === ue ? k(C, x, M, V) : null;
          case I:
            return ((M = Oi(M)), L(C, x, M, V));
        }
        if (J(M) || $(M)) return ue !== null ? null : q(C, x, M, V, null);
        if (typeof M.then == "function") return L(C, x, Go(M), V);
        if (M.$$typeof === Y) return L(C, x, Qo(C, M), V);
        Ko(C, M);
      }
      return null;
    }
    function N(C, x, M, V, ue) {
      if ((typeof V == "string" && V !== "") || typeof V == "number" || typeof V == "bigint")
        return ((C = C.get(M) || null), b(x, C, "" + V, ue));
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case w:
            return ((C = C.get(V.key === null ? M : V.key) || null), _(x, C, V, ue));
          case R:
            return ((C = C.get(V.key === null ? M : V.key) || null), k(x, C, V, ue));
          case I:
            return ((V = Oi(V)), N(C, x, M, V, ue));
        }
        if (J(V) || $(V)) return ((C = C.get(M) || null), q(x, C, V, ue, null));
        if (typeof V.then == "function") return N(C, x, M, Go(V), ue);
        if (V.$$typeof === Y) return N(C, x, M, Qo(x, V), ue);
        Ko(x, V);
      }
      return null;
    }
    function se(C, x, M, V) {
      for (
        var ue = null, _e = null, oe = x, me = (x = 0), we = null;
        oe !== null && me < M.length;
        me++
      ) {
        oe.index > me ? ((we = oe), (oe = null)) : (we = oe.sibling);
        var Ee = L(C, oe, M[me], V);
        if (Ee === null) {
          oe === null && (oe = we);
          break;
        }
        (e && oe && Ee.alternate === null && t(C, oe),
          (x = f(Ee, x, me)),
          _e === null ? (ue = Ee) : (_e.sibling = Ee),
          (_e = Ee),
          (oe = we));
      }
      if (me === M.length) return (i(C, oe), Te && Tn(C, me), ue);
      if (oe === null) {
        for (; me < M.length; me++)
          ((oe = F(C, M[me], V)),
            oe !== null &&
              ((x = f(oe, x, me)), _e === null ? (ue = oe) : (_e.sibling = oe), (_e = oe)));
        return (Te && Tn(C, me), ue);
      }
      for (oe = o(oe); me < M.length; me++)
        ((we = N(oe, C, me, M[me], V)),
          we !== null &&
            (e && we.alternate !== null && oe.delete(we.key === null ? me : we.key),
            (x = f(we, x, me)),
            _e === null ? (ue = we) : (_e.sibling = we),
            (_e = we)));
      return (
        e &&
          oe.forEach(function (fi) {
            return t(C, fi);
          }),
        Te && Tn(C, me),
        ue
      );
    }
    function ce(C, x, M, V) {
      if (M == null) throw Error(r(151));
      for (
        var ue = null, _e = null, oe = x, me = (x = 0), we = null, Ee = M.next();
        oe !== null && !Ee.done;
        me++, Ee = M.next()
      ) {
        oe.index > me ? ((we = oe), (oe = null)) : (we = oe.sibling);
        var fi = L(C, oe, Ee.value, V);
        if (fi === null) {
          oe === null && (oe = we);
          break;
        }
        (e && oe && fi.alternate === null && t(C, oe),
          (x = f(fi, x, me)),
          _e === null ? (ue = fi) : (_e.sibling = fi),
          (_e = fi),
          (oe = we));
      }
      if (Ee.done) return (i(C, oe), Te && Tn(C, me), ue);
      if (oe === null) {
        for (; !Ee.done; me++, Ee = M.next())
          ((Ee = F(C, Ee.value, V)),
            Ee !== null &&
              ((x = f(Ee, x, me)), _e === null ? (ue = Ee) : (_e.sibling = Ee), (_e = Ee)));
        return (Te && Tn(C, me), ue);
      }
      for (oe = o(oe); !Ee.done; me++, Ee = M.next())
        ((Ee = N(oe, C, me, Ee.value, V)),
          Ee !== null &&
            (e && Ee.alternate !== null && oe.delete(Ee.key === null ? me : Ee.key),
            (x = f(Ee, x, me)),
            _e === null ? (ue = Ee) : (_e.sibling = Ee),
            (_e = Ee)));
      return (
        e &&
          oe.forEach(function (Ub) {
            return t(C, Ub);
          }),
        Te && Tn(C, me),
        ue
      );
    }
    function ke(C, x, M, V) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === T &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case w:
            e: {
              for (var ue = M.key; x !== null; ) {
                if (x.key === ue) {
                  if (((ue = M.type), ue === T)) {
                    if (x.tag === 7) {
                      (i(C, x.sibling), (V = u(x, M.props.children)), (V.return = C), (C = V));
                      break e;
                    }
                  } else if (
                    x.elementType === ue ||
                    (typeof ue == "object" && ue !== null && ue.$$typeof === I && Oi(ue) === x.type)
                  ) {
                    (i(C, x.sibling), (V = u(x, M.props)), Rs(V, M), (V.return = C), (C = V));
                    break e;
                  }
                  i(C, x);
                  break;
                } else t(C, x);
                x = x.sibling;
              }
              M.type === T
                ? ((V = _i(M.props.children, C.mode, V, M.key)), (V.return = C), (C = V))
                : ((V = jo(M.type, M.key, M.props, null, C.mode, V)),
                  Rs(V, M),
                  (V.return = C),
                  (C = V));
            }
            return p(C);
          case R:
            e: {
              for (ue = M.key; x !== null; ) {
                if (x.key === ue)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === M.containerInfo &&
                    x.stateNode.implementation === M.implementation
                  ) {
                    (i(C, x.sibling), (V = u(x, M.children || [])), (V.return = C), (C = V));
                    break e;
                  } else {
                    i(C, x);
                    break;
                  }
                else t(C, x);
                x = x.sibling;
              }
              ((V = Wl(M, C.mode, V)), (V.return = C), (C = V));
            }
            return p(C);
          case I:
            return ((M = Oi(M)), ke(C, x, M, V));
        }
        if (J(M)) return se(C, x, M, V);
        if ($(M)) {
          if (((ue = $(M)), typeof ue != "function")) throw Error(r(150));
          return ((M = ue.call(M)), ce(C, x, M, V));
        }
        if (typeof M.then == "function") return ke(C, x, Go(M), V);
        if (M.$$typeof === Y) return ke(C, x, Qo(C, M), V);
        Ko(C, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint"
        ? ((M = "" + M),
          x !== null && x.tag === 6
            ? (i(C, x.sibling), (V = u(x, M)), (V.return = C), (C = V))
            : (i(C, x), (V = Xl(M, C.mode, V)), (V.return = C), (C = V)),
          p(C))
        : i(C, x);
    }
    return function (C, x, M, V) {
      try {
        bs = 0;
        var ue = ke(C, x, M, V);
        return ((ba = null), ue);
      } catch (oe) {
        if (oe === Sa || oe === Fo) throw oe;
        var _e = At(29, oe, null, C.mode);
        return ((_e.lanes = V), (_e.return = C), _e);
      } finally {
      }
    };
  }
  var ki = Jd(!0),
    eh = Jd(!1),
    Gn = !1;
  function uu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function cu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Kn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Xn(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Ae & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (o.pending = t),
        (t = Io(e)),
        Bd(e, null, i),
        t
      );
    }
    return (zo(e, o, t, i), Io(e));
  }
  function ws(e, t, i) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194048) !== 0))) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (i |= o), (t.lanes = i), $f(e, i));
    }
  }
  function fu(e, t) {
    var i = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var u = null,
        f = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var p = { lane: i.lane, tag: i.tag, payload: i.payload, callback: null, next: null };
          (f === null ? (u = f = p) : (f = f.next = p), (i = i.next));
        } while (i !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      ((i = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t));
  }
  var du = !1;
  function Ts() {
    if (du) {
      var e = va;
      if (e !== null) throw e;
    }
  }
  function _s(e, t, i, o) {
    du = !1;
    var u = e.updateQueue;
    Gn = !1;
    var f = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var _ = b,
        k = _.next;
      ((_.next = null), p === null ? (f = k) : (p.next = k), (p = _));
      var q = e.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (b = q.lastBaseUpdate),
        b !== p && (b === null ? (q.firstBaseUpdate = k) : (b.next = k), (q.lastBaseUpdate = _)));
    }
    if (f !== null) {
      var F = u.baseState;
      ((p = 0), (q = k = _ = null), (b = f));
      do {
        var L = b.lane & -536870913,
          N = L !== b.lane;
        if (N ? (Re & L) === L : (o & L) === L) {
          (L !== 0 && L === ya && (du = !0),
            q !== null &&
              (q = q.next =
                { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null }));
          e: {
            var se = e,
              ce = b;
            L = t;
            var ke = i;
            switch (ce.tag) {
              case 1:
                if (((se = ce.payload), typeof se == "function")) {
                  F = se.call(ke, F, L);
                  break e;
                }
                F = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = ce.payload),
                  (L = typeof se == "function" ? se.call(ke, F, L) : se),
                  L == null)
                )
                  break e;
                F = v({}, F, L);
                break e;
              case 2:
                Gn = !0;
            }
          }
          ((L = b.callback),
            L !== null &&
              ((e.flags |= 64),
              N && (e.flags |= 8192),
              (N = u.callbacks),
              N === null ? (u.callbacks = [L]) : N.push(L)));
        } else
          ((N = { lane: L, tag: b.tag, payload: b.payload, callback: b.callback, next: null }),
            q === null ? ((k = q = N), (_ = F)) : (q = q.next = N),
            (p |= L));
        if (((b = b.next), b === null)) {
          if (((b = u.shared.pending), b === null)) break;
          ((N = b),
            (b = N.next),
            (N.next = null),
            (u.lastBaseUpdate = N),
            (u.shared.pending = null));
        }
      } while (!0);
      (q === null && (_ = F),
        (u.baseState = _),
        (u.firstBaseUpdate = k),
        (u.lastBaseUpdate = q),
        f === null && (u.shared.lanes = 0),
        (ti |= p),
        (e.lanes = p),
        (e.memoizedState = F));
    }
  }
  function th(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function nh(e, t) {
    var i = e.callbacks;
    if (i !== null) for (e.callbacks = null, e = 0; e < i.length; e++) th(i[e], t);
  }
  var Ra = A(null),
    Xo = A(0);
  function ih(e, t) {
    ((e = Nn), Z(Xo, e), Z(Ra, t), (Nn = e | t.baseLanes));
  }
  function hu() {
    (Z(Xo, Nn), Z(Ra, Ra.current));
  }
  function gu() {
    ((Nn = Xo.current), H(Ra), H(Xo));
  }
  var xt = A(null),
    Ht = null;
  function Wn(e) {
    var t = e.alternate;
    (Z(Qe, Qe.current & 1),
      Z(xt, e),
      Ht === null && (t === null || Ra.current !== null || t.memoizedState !== null) && (Ht = e));
  }
  function mu(e) {
    (Z(Qe, Qe.current), Z(xt, e), Ht === null && (Ht = e));
  }
  function ah(e) {
    e.tag === 22 ? (Z(Qe, Qe.current), Z(xt, e), Ht === null && (Ht = e)) : Zn();
  }
  function Zn() {
    (Z(Qe, Qe.current), Z(xt, xt.current));
  }
  function Ct(e) {
    (H(xt), Ht === e && (Ht = null), H(Qe));
  }
  var Qe = A(0);
  function Wo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || Rc(i) || wc(i))) return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var An = 0,
    ge = null,
    Oe = null,
    Ye = null,
    Zo = !1,
    wa = !1,
    Li = !1,
    Jo = 0,
    Es = 0,
    Ta = null,
    AS = 0;
  function qe() {
    throw Error(r(321));
  }
  function pu(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!Et(e[i], t[i])) return !1;
    return !0;
  }
  function yu(e, t, i, o, u, f) {
    return (
      (An = f),
      (ge = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? jh : Lu),
      (Li = !1),
      (f = i(o, u)),
      (Li = !1),
      wa && (f = oh(t, i, o, u)),
      sh(e),
      f
    );
  }
  function sh(e) {
    O.H = Cs;
    var t = Oe !== null && Oe.next !== null;
    if (((An = 0), (Ye = Oe = ge = null), (Zo = !1), (Es = 0), (Ta = null), t)) throw Error(r(300));
    e === null || Ge || ((e = e.dependencies), e !== null && Vo(e) && (Ge = !0));
  }
  function oh(e, t, i, o) {
    ge = e;
    var u = 0;
    do {
      if ((wa && (Ta = null), (Es = 0), (wa = !1), 25 <= u)) throw Error(r(301));
      if (((u += 1), (Ye = Oe = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        ((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0));
      }
      ((O.H = Hh), (f = t(i, o)));
    } while (wa);
    return f;
  }
  function xS() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? As(t) : t),
      (e = e.useState()[0]),
      (Oe !== null ? Oe.memoizedState : null) !== e && (ge.flags |= 1024),
      t
    );
  }
  function vu() {
    var e = Jo !== 0;
    return ((Jo = 0), e);
  }
  function Su(e, t, i) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i));
  }
  function bu(e) {
    if (Zo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Zo = !1;
    }
    ((An = 0), (Ye = Oe = ge = null), (wa = !1), (Es = Jo = 0), (Ta = null));
  }
  function ft() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Ye === null ? (ge.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye);
  }
  function $e() {
    if (Oe === null) {
      var e = ge.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ye === null ? ge.memoizedState : Ye.next;
    if (t !== null) ((Ye = t), (Oe = e));
    else {
      if (e === null) throw ge.alternate === null ? Error(r(467)) : Error(r(310));
      ((Oe = e),
        (e = {
          memoizedState: Oe.memoizedState,
          baseState: Oe.baseState,
          baseQueue: Oe.baseQueue,
          queue: Oe.queue,
          next: null,
        }),
        Ye === null ? (ge.memoizedState = Ye = e) : (Ye = Ye.next = e));
    }
    return Ye;
  }
  function er() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function As(e) {
    var t = Es;
    return (
      (Es += 1),
      Ta === null && (Ta = []),
      (e = Xd(Ta, e, t)),
      (t = ge),
      (Ye === null ? t.memoizedState : Ye.next) === null &&
        ((t = t.alternate), (O.H = t === null || t.memoizedState === null ? jh : Lu)),
      e
    );
  }
  function tr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return As(e);
      if (e.$$typeof === Y) return st(e);
    }
    throw Error(r(438, String(e)));
  }
  function Ru(e) {
    var t = null,
      i = ge.updateQueue;
    if ((i !== null && (t = i.memoCache), t == null)) {
      var o = ge.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (t = {
              data: o.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      i === null && ((i = er()), (ge.updateQueue = i)),
      (i.memoCache = t),
      (i = t.data[t.index]),
      i === void 0)
    )
      for (i = t.data[t.index] = Array(e), o = 0; o < e; o++) i[o] = z;
    return (t.index++, i);
  }
  function xn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function nr(e) {
    var t = $e();
    return wu(t, Oe, e);
  }
  function wu(e, t, i) {
    var o = e.queue;
    if (o === null) throw Error(r(311));
    o.lastRenderedReducer = i;
    var u = e.baseQueue,
      f = o.pending;
    if (f !== null) {
      if (u !== null) {
        var p = u.next;
        ((u.next = f.next), (f.next = p));
      }
      ((t.baseQueue = u = f), (o.pending = null));
    }
    if (((f = e.baseState), u === null)) e.memoizedState = f;
    else {
      t = u.next;
      var b = (p = null),
        _ = null,
        k = t,
        q = !1;
      do {
        var F = k.lane & -536870913;
        if (F !== k.lane ? (Re & F) === F : (An & F) === F) {
          var L = k.revertLane;
          if (L === 0)
            (_ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              F === ya && (q = !0));
          else if ((An & L) === L) {
            ((k = k.next), L === ya && (q = !0));
            continue;
          } else
            ((F = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              _ === null ? ((b = _ = F), (p = f)) : (_ = _.next = F),
              (ge.lanes |= L),
              (ti |= L));
          ((F = k.action), Li && i(f, F), (f = k.hasEagerState ? k.eagerState : i(f, F)));
        } else
          ((L = {
            lane: F,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            _ === null ? ((b = _ = L), (p = f)) : (_ = _.next = L),
            (ge.lanes |= F),
            (ti |= F));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (_ === null ? (p = f) : (_.next = b),
        !Et(f, e.memoizedState) && ((Ge = !0), q && ((i = va), i !== null)))
      )
        throw i;
      ((e.memoizedState = f), (e.baseState = p), (e.baseQueue = _), (o.lastRenderedState = f));
    }
    return (u === null && (o.lanes = 0), [e.memoizedState, o.dispatch]);
  }
  function Tu(e) {
    var t = $e(),
      i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch,
      u = i.pending,
      f = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var p = (u = u.next);
      do ((f = e(f, p.action)), (p = p.next));
      while (p !== u);
      (Et(f, t.memoizedState) || (Ge = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (i.lastRenderedState = f));
    }
    return [f, o];
  }
  function rh(e, t, i) {
    var o = ge,
      u = $e(),
      f = Te;
    if (f) {
      if (i === void 0) throw Error(r(407));
      i = i();
    } else i = t();
    var p = !Et((Oe || u).memoizedState, i);
    if (
      (p && ((u.memoizedState = i), (Ge = !0)),
      (u = u.queue),
      Au(ch.bind(null, o, u, e), [e]),
      u.getSnapshot !== t || p || (Ye !== null && Ye.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        _a(9, { destroy: void 0 }, uh.bind(null, o, u, i, t), null),
        Le === null)
      )
        throw Error(r(349));
      f || (An & 127) !== 0 || lh(o, t, i);
    }
    return i;
  }
  function lh(e, t, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = ge.updateQueue),
      t === null
        ? ((t = er()), (ge.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e)));
  }
  function uh(e, t, i, o) {
    ((t.value = i), (t.getSnapshot = o), fh(t) && dh(e));
  }
  function ch(e, t, i) {
    return i(function () {
      fh(t) && dh(e);
    });
  }
  function fh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Et(e, i);
    } catch {
      return !0;
    }
  }
  function dh(e) {
    var t = Ti(e, 2);
    t !== null && bt(t, e, 2);
  }
  function _u(e) {
    var t = ft();
    if (typeof e == "function") {
      var i = e;
      if (((e = i()), Li)) {
        jn(!0);
        try {
          i();
        } finally {
          jn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function hh(e, t, i, o) {
    return ((e.baseState = i), wu(e, Oe, typeof o == "function" ? o : xn));
  }
  function CS(e, t, i, o, u) {
    if (sr(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          f.listeners.push(p);
        },
      };
      (O.T !== null ? i(!0) : (f.isTransition = !1),
        o(f),
        (i = t.pending),
        i === null
          ? ((f.next = t.pending = f), gh(t, f))
          : ((f.next = i.next), (t.pending = i.next = f)));
    }
  }
  function gh(e, t) {
    var i = t.action,
      o = t.payload,
      u = e.state;
    if (t.isTransition) {
      var f = O.T,
        p = {};
      O.T = p;
      try {
        var b = i(u, o),
          _ = O.S;
        (_ !== null && _(p, b), mh(e, t, b));
      } catch (k) {
        Eu(e, t, k);
      } finally {
        (f !== null && p.types !== null && (f.types = p.types), (O.T = f));
      }
    } else
      try {
        ((f = i(u, o)), mh(e, t, f));
      } catch (k) {
        Eu(e, t, k);
      }
  }
  function mh(e, t, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (o) {
            ph(e, t, o);
          },
          function (o) {
            return Eu(e, t, o);
          },
        )
      : ph(e, t, i);
  }
  function ph(e, t, i) {
    ((t.status = "fulfilled"),
      (t.value = i),
      yh(t),
      (e.state = i),
      (t = e.pending),
      t !== null &&
        ((i = t.next), i === t ? (e.pending = null) : ((i = i.next), (t.next = i), gh(e, i))));
  }
  function Eu(e, t, i) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do ((t.status = "rejected"), (t.reason = i), yh(t), (t = t.next));
      while (t !== o);
    }
    e.action = null;
  }
  function yh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function vh(e, t) {
    return t;
  }
  function Sh(e, t) {
    if (Te) {
      var i = Le.formState;
      if (i !== null) {
        e: {
          var o = ge;
          if (Te) {
            if (Ne) {
              t: {
                for (var u = Ne, f = jt; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (((u = Vt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((f = u.data), (u = f === "F!" || f === "F" ? u : null));
              }
              if (u) {
                ((Ne = Vt(u.nextSibling)), (o = u.data === "F!"));
                break e;
              }
            }
            Fn(o);
          }
          o = !1;
        }
        o && (t = i[0]);
      }
    }
    return (
      (i = ft()),
      (i.memoizedState = i.baseState = t),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vh,
        lastRenderedState: t,
      }),
      (i.queue = o),
      (i = qh.bind(null, ge, o)),
      (o.dispatch = i),
      (o = _u(!1)),
      (f = ku.bind(null, ge, !1, o.queue)),
      (o = ft()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (o.queue = u),
      (i = CS.bind(null, ge, u, f, i)),
      (u.dispatch = i),
      (o.memoizedState = e),
      [t, i, !1]
    );
  }
  function bh(e) {
    var t = $e();
    return Rh(t, Oe, e);
  }
  function Rh(e, t, i) {
    if (
      ((t = wu(e, t, vh)[0]),
      (e = nr(xn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var o = As(t);
      } catch (p) {
        throw p === Sa ? Fo : p;
      }
    else o = t;
    t = $e();
    var u = t.queue,
      f = u.dispatch;
    return (
      i !== t.memoizedState &&
        ((ge.flags |= 2048), _a(9, { destroy: void 0 }, OS.bind(null, u, i), null)),
      [o, f, e]
    );
  }
  function OS(e, t) {
    e.action = t;
  }
  function wh(e) {
    var t = $e(),
      i = Oe;
    if (i !== null) return Rh(t, i, e);
    ($e(), (t = t.memoizedState), (i = $e()));
    var o = i.queue.dispatch;
    return ((i.memoizedState = e), [t, o, !1]);
  }
  function _a(e, t, i, o) {
    return (
      (e = { tag: e, create: i, deps: o, inst: t, next: null }),
      (t = ge.updateQueue),
      t === null && ((t = er()), (ge.updateQueue = t)),
      (i = t.lastEffect),
      i === null
        ? (t.lastEffect = e.next = e)
        : ((o = i.next), (i.next = e), (e.next = o), (t.lastEffect = e)),
      e
    );
  }
  function Th() {
    return $e().memoizedState;
  }
  function ir(e, t, i, o) {
    var u = ft();
    ((ge.flags |= e),
      (u.memoizedState = _a(1 | t, { destroy: void 0 }, i, o === void 0 ? null : o)));
  }
  function ar(e, t, i, o) {
    var u = $e();
    o = o === void 0 ? null : o;
    var f = u.memoizedState.inst;
    Oe !== null && o !== null && pu(o, Oe.memoizedState.deps)
      ? (u.memoizedState = _a(t, f, i, o))
      : ((ge.flags |= e), (u.memoizedState = _a(1 | t, f, i, o)));
  }
  function _h(e, t) {
    ir(8390656, 8, e, t);
  }
  function Au(e, t) {
    ar(2048, 8, e, t);
  }
  function MS(e) {
    ge.flags |= 4;
    var t = ge.updateQueue;
    if (t === null) ((t = er()), (ge.updateQueue = t), (t.events = [e]));
    else {
      var i = t.events;
      i === null ? (t.events = [e]) : i.push(e);
    }
  }
  function Eh(e) {
    var t = $e().memoizedState;
    return (
      MS({ ref: t, nextImpl: e }),
      function () {
        if ((Ae & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Ah(e, t) {
    return ar(4, 2, e, t);
  }
  function xh(e, t) {
    return ar(4, 4, e, t);
  }
  function Ch(e, t) {
    if (typeof t == "function") {
      e = e();
      var i = t(e);
      return function () {
        typeof i == "function" ? i() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Oh(e, t, i) {
    ((i = i != null ? i.concat([e]) : null), ar(4, 4, Ch.bind(null, t, e), i));
  }
  function xu() {}
  function Mh(e, t) {
    var i = $e();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return t !== null && pu(t, o[1]) ? o[0] : ((i.memoizedState = [e, t]), e);
  }
  function kh(e, t) {
    var i = $e();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    if (t !== null && pu(t, o[1])) return o[0];
    if (((o = e()), Li)) {
      jn(!0);
      try {
        e();
      } finally {
        jn(!1);
      }
    }
    return ((i.memoizedState = [o, t]), o);
  }
  function Cu(e, t, i) {
    return i === void 0 || ((An & 1073741824) !== 0 && (Re & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = i), (e = Lg()), (ge.lanes |= e), (ti |= e), i);
  }
  function Lh(e, t, i, o) {
    return Et(i, t)
      ? i
      : Ra.current !== null
        ? ((e = Cu(e, i, o)), Et(e, t) || (Ge = !0), e)
        : (An & 42) === 0 || ((An & 1073741824) !== 0 && (Re & 261930) === 0)
          ? ((Ge = !0), (e.memoizedState = i))
          : ((e = Lg()), (ge.lanes |= e), (ti |= e), t);
  }
  function Dh(e, t, i, o, u) {
    var f = j.p;
    j.p = f !== 0 && 8 > f ? f : 8;
    var p = O.T,
      b = {};
    ((O.T = b), ku(e, !1, t, i));
    try {
      var _ = u(),
        k = O.S;
      if (
        (k !== null && k(b, _), _ !== null && typeof _ == "object" && typeof _.then == "function")
      ) {
        var q = ES(_, o);
        xs(e, t, q, kt(e));
      } else xs(e, t, o, kt(e));
    } catch (F) {
      xs(e, t, { then: function () {}, status: "rejected", reason: F }, kt());
    } finally {
      ((j.p = f), p !== null && b.types !== null && (p.types = b.types), (O.T = p));
    }
  }
  function kS() {}
  function Ou(e, t, i, o) {
    if (e.tag !== 5) throw Error(r(476));
    var u = Nh(e).queue;
    Dh(
      e,
      u,
      t,
      ie,
      i === null
        ? kS
        : function () {
            return (Ph(e), i(o));
          },
    );
  }
  function Nh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xn,
        lastRenderedState: ie,
      },
      next: null,
    };
    var i = {};
    return (
      (t.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: xn,
          lastRenderedState: i,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Ph(e) {
    var t = Nh(e);
    (t.next === null && (t = e.alternate.memoizedState), xs(e, t.next.queue, {}, kt()));
  }
  function Mu() {
    return st(Qs);
  }
  function Uh() {
    return $e().memoizedState;
  }
  function Bh() {
    return $e().memoizedState;
  }
  function LS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = kt();
          e = Kn(i);
          var o = Xn(t, e, i);
          (o !== null && (bt(o, t, i), ws(o, t, i)), (t = { cache: su() }), (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function DS(e, t, i) {
    var o = kt();
    ((i = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      sr(e) ? zh(t, i) : ((i = Gl(e, t, i, o)), i !== null && (bt(i, e, o), Ih(i, t, o))));
  }
  function qh(e, t, i) {
    var o = kt();
    xs(e, t, i, o);
  }
  function xs(e, t, i, o) {
    var u = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (sr(e)) zh(t, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var p = t.lastRenderedState,
            b = f(p, i);
          if (((u.hasEagerState = !0), (u.eagerState = b), Et(b, p)))
            return (zo(e, t, u, 0), Le === null && qo(), !1);
        } catch {
        } finally {
        }
      if (((i = Gl(e, t, u, o)), i !== null)) return (bt(i, e, o), Ih(i, t, o), !0);
    }
    return !1;
  }
  function ku(e, t, i, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: uc(),
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sr(e))
    ) {
      if (t) throw Error(r(479));
    } else ((t = Gl(e, i, o, 2)), t !== null && bt(t, e, 2));
  }
  function sr(e) {
    var t = e.alternate;
    return e === ge || (t !== null && t === ge);
  }
  function zh(e, t) {
    wa = Zo = !0;
    var i = e.pending;
    (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (e.pending = t));
  }
  function Ih(e, t, i) {
    if ((i & 4194048) !== 0) {
      var o = t.lanes;
      ((o &= e.pendingLanes), (i |= o), (t.lanes = i), $f(e, i));
    }
  }
  var Cs = {
    readContext: st,
    use: tr,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useLayoutEffect: qe,
    useInsertionEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useSyncExternalStore: qe,
    useId: qe,
    useHostTransitionStatus: qe,
    useFormState: qe,
    useActionState: qe,
    useOptimistic: qe,
    useMemoCache: qe,
    useCacheRefresh: qe,
  };
  Cs.useEffectEvent = qe;
  var jh = {
      readContext: st,
      use: tr,
      useCallback: function (e, t) {
        return ((ft().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: st,
      useEffect: _h,
      useImperativeHandle: function (e, t, i) {
        ((i = i != null ? i.concat([e]) : null), ir(4194308, 4, Ch.bind(null, t, e), i));
      },
      useLayoutEffect: function (e, t) {
        return ir(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ir(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = ft();
        t = t === void 0 ? null : t;
        var o = e();
        if (Li) {
          jn(!0);
          try {
            e();
          } finally {
            jn(!1);
          }
        }
        return ((i.memoizedState = [o, t]), o);
      },
      useReducer: function (e, t, i) {
        var o = ft();
        if (i !== void 0) {
          var u = i(t);
          if (Li) {
            jn(!0);
            try {
              i(t);
            } finally {
              jn(!1);
            }
          }
        } else u = t;
        return (
          (o.memoizedState = o.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (o.queue = e),
          (e = e.dispatch = DS.bind(null, ge, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ft();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = _u(e);
        var t = e.queue,
          i = qh.bind(null, ge, t);
        return ((t.dispatch = i), [e.memoizedState, i]);
      },
      useDebugValue: xu,
      useDeferredValue: function (e, t) {
        var i = ft();
        return Cu(i, e, t);
      },
      useTransition: function () {
        var e = _u(!1);
        return ((e = Dh.bind(null, ge, e.queue, !0, !1)), (ft().memoizedState = e), [!1, e]);
      },
      useSyncExternalStore: function (e, t, i) {
        var o = ge,
          u = ft();
        if (Te) {
          if (i === void 0) throw Error(r(407));
          i = i();
        } else {
          if (((i = t()), Le === null)) throw Error(r(349));
          (Re & 127) !== 0 || lh(o, t, i);
        }
        u.memoizedState = i;
        var f = { value: i, getSnapshot: t };
        return (
          (u.queue = f),
          _h(ch.bind(null, o, f, e), [e]),
          (o.flags |= 2048),
          _a(9, { destroy: void 0 }, uh.bind(null, o, f, i, t), null),
          i
        );
      },
      useId: function () {
        var e = ft(),
          t = Le.identifierPrefix;
        if (Te) {
          var i = on,
            o = sn;
          ((i = (o & ~(1 << (32 - _t(o) - 1))).toString(32) + i),
            (t = "_" + t + "R_" + i),
            (i = Jo++),
            0 < i && (t += "H" + i.toString(32)),
            (t += "_"));
        } else ((i = AS++), (t = "_" + t + "r_" + i.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Mu,
      useFormState: Sh,
      useActionState: Sh,
      useOptimistic: function (e) {
        var t = ft();
        t.memoizedState = t.baseState = e;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = i), (t = ku.bind(null, ge, !0, i)), (i.dispatch = t), [e, t]);
      },
      useMemoCache: Ru,
      useCacheRefresh: function () {
        return (ft().memoizedState = LS.bind(null, ge));
      },
      useEffectEvent: function (e) {
        var t = ft(),
          i = { impl: e };
        return (
          (t.memoizedState = i),
          function () {
            if ((Ae & 2) !== 0) throw Error(r(440));
            return i.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Lu = {
      readContext: st,
      use: tr,
      useCallback: Mh,
      useContext: st,
      useEffect: Au,
      useImperativeHandle: Oh,
      useInsertionEffect: Ah,
      useLayoutEffect: xh,
      useMemo: kh,
      useReducer: nr,
      useRef: Th,
      useState: function () {
        return nr(xn);
      },
      useDebugValue: xu,
      useDeferredValue: function (e, t) {
        var i = $e();
        return Lh(i, Oe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = nr(xn)[0],
          t = $e().memoizedState;
        return [typeof e == "boolean" ? e : As(e), t];
      },
      useSyncExternalStore: rh,
      useId: Uh,
      useHostTransitionStatus: Mu,
      useFormState: bh,
      useActionState: bh,
      useOptimistic: function (e, t) {
        var i = $e();
        return hh(i, Oe, e, t);
      },
      useMemoCache: Ru,
      useCacheRefresh: Bh,
    };
  Lu.useEffectEvent = Eh;
  var Hh = {
    readContext: st,
    use: tr,
    useCallback: Mh,
    useContext: st,
    useEffect: Au,
    useImperativeHandle: Oh,
    useInsertionEffect: Ah,
    useLayoutEffect: xh,
    useMemo: kh,
    useReducer: Tu,
    useRef: Th,
    useState: function () {
      return Tu(xn);
    },
    useDebugValue: xu,
    useDeferredValue: function (e, t) {
      var i = $e();
      return Oe === null ? Cu(i, e, t) : Lh(i, Oe.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Tu(xn)[0],
        t = $e().memoizedState;
      return [typeof e == "boolean" ? e : As(e), t];
    },
    useSyncExternalStore: rh,
    useId: Uh,
    useHostTransitionStatus: Mu,
    useFormState: wh,
    useActionState: wh,
    useOptimistic: function (e, t) {
      var i = $e();
      return Oe !== null ? hh(i, Oe, e, t) : ((i.baseState = e), [e, i.queue.dispatch]);
    },
    useMemoCache: Ru,
    useCacheRefresh: Bh,
  };
  Hh.useEffectEvent = Eh;
  function Du(e, t, i, o) {
    ((t = e.memoizedState),
      (i = i(o, t)),
      (i = i == null ? t : v({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var Nu = {
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var o = kt(),
        u = Kn(o);
      ((u.payload = t),
        i != null && (u.callback = i),
        (t = Xn(e, u, o)),
        t !== null && (bt(t, e, o), ws(t, e, o)));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var o = kt(),
        u = Kn(o);
      ((u.tag = 1),
        (u.payload = t),
        i != null && (u.callback = i),
        (t = Xn(e, u, o)),
        t !== null && (bt(t, e, o), ws(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = kt(),
        o = Kn(i);
      ((o.tag = 2),
        t != null && (o.callback = t),
        (t = Xn(e, o, i)),
        t !== null && (bt(t, e, i), ws(t, e, i)));
    },
  };
  function Vh(e, t, i, o, u, f, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, f, p)
        : t.prototype && t.prototype.isPureReactComponent
          ? !gs(i, o) || !gs(u, f)
          : !0
    );
  }
  function Qh(e, t, i, o) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, o),
      t.state !== e && Nu.enqueueReplaceState(t, t.state, null));
  }
  function Di(e, t) {
    var i = t;
    if ("ref" in t) {
      i = {};
      for (var o in t) o !== "ref" && (i[o] = t[o]);
    }
    if ((e = e.defaultProps)) {
      i === t && (i = v({}, i));
      for (var u in e) i[u] === void 0 && (i[u] = e[u]);
    }
    return i;
  }
  function $h(e) {
    Bo(e);
  }
  function Fh(e) {
    console.error(e);
  }
  function Yh(e) {
    Bo(e);
  }
  function or(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Gh(e, t, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, { componentStack: i.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Pu(e, t, i) {
    return (
      (i = Kn(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        or(e, t);
      }),
      i
    );
  }
  function Kh(e) {
    return ((e = Kn(e)), (e.tag = 3), e);
  }
  function Xh(e, t, i, o) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = o.value;
      ((e.payload = function () {
        return u(f);
      }),
        (e.callback = function () {
          Gh(t, i, o);
        }));
    }
    var p = i.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (e.callback = function () {
        (Gh(t, i, o),
          typeof u != "function" && (ni === null ? (ni = new Set([this])) : ni.add(this)));
        var b = o.stack;
        this.componentDidCatch(o.value, { componentStack: b !== null ? b : "" });
      });
  }
  function NS(e, t, i, o, u) {
    if (((i.flags |= 32768), o !== null && typeof o == "object" && typeof o.then == "function")) {
      if (((t = i.alternate), t !== null && pa(t, i, u, !0), (i = xt.current), i !== null)) {
        switch (i.tag) {
          case 31:
          case 13:
            return (
              Ht === null ? vr() : i.alternate === null && ze === 0 && (ze = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = u),
              o === Yo
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null ? (i.updateQueue = new Set([o])) : t.add(o),
                  oc(e, o, u)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              o === Yo
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([o]) }),
                      (i.updateQueue = t))
                    : ((i = t.retryQueue), i === null ? (t.retryQueue = new Set([o])) : i.add(o)),
                  oc(e, o, u)),
              !1
            );
        }
        throw Error(r(435, i.tag));
      }
      return (oc(e, o, u), vr(), !1);
    }
    if (Te)
      return (
        (t = xt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            o !== eu && ((e = Error(r(422), { cause: o })), ys(qt(e, i))))
          : (o !== eu && ((t = Error(r(423), { cause: o })), ys(qt(t, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (o = qt(o, i)),
            (u = Pu(e.stateNode, o, u)),
            fu(e, u),
            ze !== 4 && (ze = 2)),
        !1
      );
    var f = Error(r(520), { cause: o });
    if (((f = qt(f, i)), Us === null ? (Us = [f]) : Us.push(f), ze !== 4 && (ze = 2), t === null))
      return !0;
    ((o = qt(o, i)), (i = t));
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = u & -u),
            (i.lanes |= e),
            (e = Pu(i.stateNode, o, e)),
            fu(i, e),
            !1
          );
        case 1:
          if (
            ((t = i.type),
            (f = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (ni === null || !ni.has(f)))))
          )
            return (
              (i.flags |= 65536),
              (u &= -u),
              (i.lanes |= u),
              (u = Kh(u)),
              Xh(u, e, i, o),
              fu(i, u),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Uu = Error(r(461)),
    Ge = !1;
  function ot(e, t, i, o) {
    t.child = e === null ? eh(t, null, i, o) : ki(t, e.child, i, o);
  }
  function Wh(e, t, i, o, u) {
    i = i.render;
    var f = t.ref;
    if ("ref" in o) {
      var p = {};
      for (var b in o) b !== "ref" && (p[b] = o[b]);
    } else p = o;
    return (
      xi(t),
      (o = yu(e, t, i, p, f, u)),
      (b = vu()),
      e !== null && !Ge
        ? (Su(e, t, u), Cn(e, t, u))
        : (Te && b && Zl(t), (t.flags |= 1), ot(e, t, o, u), t.child)
    );
  }
  function Zh(e, t, i, o, u) {
    if (e === null) {
      var f = i.type;
      return typeof f == "function" && !Kl(f) && f.defaultProps === void 0 && i.compare === null
        ? ((t.tag = 15), (t.type = f), Jh(e, t, f, o, u))
        : ((e = jo(i.type, null, o, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((f = e.child), !Qu(e, u))) {
      var p = f.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : gs), i(p, o) && e.ref === t.ref))
        return Cn(e, t, u);
    }
    return ((t.flags |= 1), (e = wn(f, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Jh(e, t, i, o, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (gs(f, o) && e.ref === t.ref)
        if (((Ge = !1), (t.pendingProps = o = f), Qu(e, u))) (e.flags & 131072) !== 0 && (Ge = !0);
        else return ((t.lanes = e.lanes), Cn(e, t, u));
    }
    return Bu(e, t, i, o, u);
  }
  function eg(e, t, i, o) {
    var u = o.children,
      f = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | i : i), e !== null)) {
          for (o = t.child = e.child, u = 0; o !== null; )
            ((u = u | o.lanes | o.childLanes), (o = o.sibling));
          o = u & ~f;
        } else ((o = 0), (t.child = null));
        return tg(e, t, f, i, o);
      }
      if ((i & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && $o(t, f !== null ? f.cachePool : null),
          f !== null ? ih(t, f) : hu(),
          ah(t));
      else return ((o = t.lanes = 536870912), tg(e, t, f !== null ? f.baseLanes | i : i, i, o));
    } else
      f !== null
        ? ($o(t, f.cachePool), ih(t, f), Zn(), (t.memoizedState = null))
        : (e !== null && $o(t, null), hu(), Zn());
    return (ot(e, t, u, i), t.child);
  }
  function Os(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function tg(e, t, i, o, u) {
    var f = ru();
    return (
      (f = f === null ? null : { parent: Fe._currentValue, pool: f }),
      (t.memoizedState = { baseLanes: i, cachePool: f }),
      e !== null && $o(t, null),
      hu(),
      ah(t),
      e !== null && pa(e, t, o, !0),
      (t.childLanes = u),
      null
    );
  }
  function rr(e, t) {
    return (
      (t = ur({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ng(e, t, i) {
    return (
      ki(t, e.child, null, i),
      (e = rr(t, t.pendingProps)),
      (e.flags |= 2),
      Ct(t),
      (t.memoizedState = null),
      e
    );
  }
  function PS(e, t, i) {
    var o = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Te) {
        if (o.mode === "hidden") return ((e = rr(t, o)), (t.lanes = 536870912), Os(null, e));
        if (
          (mu(t),
          (e = Ne)
            ? ((e = gm(e, jt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Qn !== null ? { id: sn, overflow: on } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = zd(e)),
                (i.return = t),
                (t.child = i),
                (at = t),
                (Ne = null)))
            : (e = null),
          e === null)
        )
          throw Fn(t);
        return ((t.lanes = 536870912), null);
      }
      return rr(t, o);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var p = f.dehydrated;
      if ((mu(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = ng(e, t, i)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if ((Ge || pa(e, t, i, !1), (u = (i & e.childLanes) !== 0), Ge || u)) {
        if (((o = Le), o !== null && ((p = Ff(o, i)), p !== 0 && p !== f.retryLane)))
          throw ((f.retryLane = p), Ti(e, p), bt(o, e, p), Uu);
        (vr(), (t = ng(e, t, i)));
      } else
        ((e = f.treeContext),
          (Ne = Vt(p.nextSibling)),
          (at = t),
          (Te = !0),
          ($n = null),
          (jt = !1),
          e !== null && Hd(t, e),
          (t = rr(t, o)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = wn(e.child, { mode: o.mode, children: o.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function lr(e, t) {
    var i = t.ref;
    if (i === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(r(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function Bu(e, t, i, o, u) {
    return (
      xi(t),
      (i = yu(e, t, i, o, void 0, u)),
      (o = vu()),
      e !== null && !Ge
        ? (Su(e, t, u), Cn(e, t, u))
        : (Te && o && Zl(t), (t.flags |= 1), ot(e, t, i, u), t.child)
    );
  }
  function ig(e, t, i, o, u, f) {
    return (
      xi(t),
      (t.updateQueue = null),
      (i = oh(t, o, i, u)),
      sh(e),
      (o = vu()),
      e !== null && !Ge
        ? (Su(e, t, f), Cn(e, t, f))
        : (Te && o && Zl(t), (t.flags |= 1), ot(e, t, i, f), t.child)
    );
  }
  function ag(e, t, i, o, u) {
    if ((xi(t), t.stateNode === null)) {
      var f = da,
        p = i.contextType;
      (typeof p == "object" && p !== null && (f = st(p)),
        (f = new i(o, f)),
        (t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Nu),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = o),
        (f.state = t.memoizedState),
        (f.refs = {}),
        uu(t),
        (p = i.contextType),
        (f.context = typeof p == "object" && p !== null ? st(p) : da),
        (f.state = t.memoizedState),
        (p = i.getDerivedStateFromProps),
        typeof p == "function" && (Du(t, i, p, o), (f.state = t.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((p = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
          p !== f.state && Nu.enqueueReplaceState(f, f.state, null),
          _s(t, o, f, u),
          Ts(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (o = !0));
    } else if (e === null) {
      f = t.stateNode;
      var b = t.memoizedProps,
        _ = Di(i, b);
      f.props = _;
      var k = f.context,
        q = i.contextType;
      ((p = da), typeof q == "object" && q !== null && (p = st(q)));
      var F = i.getDerivedStateFromProps;
      ((q = typeof F == "function" || typeof f.getSnapshotBeforeUpdate == "function"),
        (b = t.pendingProps !== b),
        q ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((b || k !== p) && Qh(t, f, o, p)),
        (Gn = !1));
      var L = t.memoizedState;
      ((f.state = L),
        _s(t, o, f, u),
        Ts(),
        (k = t.memoizedState),
        b || L !== k || Gn
          ? (typeof F == "function" && (Du(t, i, F, o), (k = t.memoizedState)),
            (_ = Gn || Vh(t, i, _, o, L, k, p))
              ? (q ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" && f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = k)),
            (f.props = o),
            (f.state = k),
            (f.context = p),
            (o = _))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (o = !1)));
    } else {
      ((f = t.stateNode),
        cu(e, t),
        (p = t.memoizedProps),
        (q = Di(i, p)),
        (f.props = q),
        (F = t.pendingProps),
        (L = f.context),
        (k = i.contextType),
        (_ = da),
        typeof k == "object" && k !== null && (_ = st(k)),
        (b = i.getDerivedStateFromProps),
        (k = typeof b == "function" || typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((p !== F || L !== _) && Qh(t, f, o, _)),
        (Gn = !1),
        (L = t.memoizedState),
        (f.state = L),
        _s(t, o, f, u),
        Ts());
      var N = t.memoizedState;
      p !== F || L !== N || Gn || (e !== null && e.dependencies !== null && Vo(e.dependencies))
        ? (typeof b == "function" && (Du(t, i, b, o), (N = t.memoizedState)),
          (q =
            Gn ||
            Vh(t, i, q, o, L, N, _) ||
            (e !== null && e.dependencies !== null && Vo(e.dependencies)))
            ? (k ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, N, _),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(o, N, _)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (p === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = N)),
          (f.props = o),
          (f.state = N),
          (f.context = _),
          (o = q))
        : (typeof f.componentDidUpdate != "function" ||
            (p === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return (
      (f = o),
      lr(e, t),
      (o = (t.flags & 128) !== 0),
      f || o
        ? ((f = t.stateNode),
          (i = o && typeof i.getDerivedStateFromError != "function" ? null : f.render()),
          (t.flags |= 1),
          e !== null && o
            ? ((t.child = ki(t, e.child, null, u)), (t.child = ki(t, null, i, u)))
            : ot(e, t, i, u),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = Cn(e, t, u)),
      e
    );
  }
  function sg(e, t, i, o) {
    return (Ei(), (t.flags |= 256), ot(e, t, i, o), t.child);
  }
  var qu = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function zu(e) {
    return { baseLanes: e, cachePool: Gd() };
  }
  function Iu(e, t, i) {
    return ((e = e !== null ? e.childLanes & ~i : 0), t && (e |= Mt), e);
  }
  function og(e, t, i) {
    var o = t.pendingProps,
      u = !1,
      f = (t.flags & 128) !== 0,
      p;
    if (
      ((p = f) || (p = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0),
      p && ((u = !0), (t.flags &= -129)),
      (p = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Te) {
        if (
          (u ? Wn(t) : Zn(),
          (e = Ne)
            ? ((e = gm(e, jt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Qn !== null ? { id: sn, overflow: on } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = zd(e)),
                (i.return = t),
                (t.child = i),
                (at = t),
                (Ne = null)))
            : (e = null),
          e === null)
        )
          throw Fn(t);
        return (wc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var b = o.children;
      return (
        (o = o.fallback),
        u
          ? (Zn(),
            (u = t.mode),
            (b = ur({ mode: "hidden", children: b }, u)),
            (o = _i(o, u, i, null)),
            (b.return = t),
            (o.return = t),
            (b.sibling = o),
            (t.child = b),
            (o = t.child),
            (o.memoizedState = zu(i)),
            (o.childLanes = Iu(e, p, i)),
            (t.memoizedState = qu),
            Os(null, o))
          : (Wn(t), ju(t, b))
      );
    }
    var _ = e.memoizedState;
    if (_ !== null && ((b = _.dehydrated), b !== null)) {
      if (f)
        t.flags & 256
          ? (Wn(t), (t.flags &= -257), (t = Hu(e, t, i)))
          : t.memoizedState !== null
            ? (Zn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Zn(),
              (b = o.fallback),
              (u = t.mode),
              (o = ur({ mode: "visible", children: o.children }, u)),
              (b = _i(b, u, i, null)),
              (b.flags |= 2),
              (o.return = t),
              (b.return = t),
              (o.sibling = b),
              (t.child = o),
              ki(t, e.child, null, i),
              (o = t.child),
              (o.memoizedState = zu(i)),
              (o.childLanes = Iu(e, p, i)),
              (t.memoizedState = qu),
              (t = Os(null, o)));
      else if ((Wn(t), wc(b))) {
        if (((p = b.nextSibling && b.nextSibling.dataset), p)) var k = p.dgst;
        ((p = k),
          (o = Error(r(419))),
          (o.stack = ""),
          (o.digest = p),
          ys({ value: o, source: null, stack: null }),
          (t = Hu(e, t, i)));
      } else if ((Ge || pa(e, t, i, !1), (p = (i & e.childLanes) !== 0), Ge || p)) {
        if (((p = Le), p !== null && ((o = Ff(p, i)), o !== 0 && o !== _.retryLane)))
          throw ((_.retryLane = o), Ti(e, o), bt(p, e, o), Uu);
        (Rc(b) || vr(), (t = Hu(e, t, i)));
      } else
        Rc(b)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = _.treeContext),
            (Ne = Vt(b.nextSibling)),
            (at = t),
            (Te = !0),
            ($n = null),
            (jt = !1),
            e !== null && Hd(t, e),
            (t = ju(t, o.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Zn(),
        (b = o.fallback),
        (u = t.mode),
        (_ = e.child),
        (k = _.sibling),
        (o = wn(_, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = _.subtreeFlags & 65011712),
        k !== null ? (b = wn(k, b)) : ((b = _i(b, u, i, null)), (b.flags |= 2)),
        (b.return = t),
        (o.return = t),
        (o.sibling = b),
        (t.child = o),
        Os(null, o),
        (o = t.child),
        (b = e.child.memoizedState),
        b === null
          ? (b = zu(i))
          : ((u = b.cachePool),
            u !== null
              ? ((_ = Fe._currentValue), (u = u.parent !== _ ? { parent: _, pool: _ } : u))
              : (u = Gd()),
            (b = { baseLanes: b.baseLanes | i, cachePool: u })),
        (o.memoizedState = b),
        (o.childLanes = Iu(e, p, i)),
        (t.memoizedState = qu),
        Os(e.child, o))
      : (Wn(t),
        (i = e.child),
        (e = i.sibling),
        (i = wn(i, { mode: "visible", children: o.children })),
        (i.return = t),
        (i.sibling = null),
        e !== null &&
          ((p = t.deletions), p === null ? ((t.deletions = [e]), (t.flags |= 16)) : p.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i);
  }
  function ju(e, t) {
    return ((t = ur({ mode: "visible", children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function ur(e, t) {
    return ((e = At(22, e, null, t)), (e.lanes = 0), e);
  }
  function Hu(e, t, i) {
    return (
      ki(t, e.child, null, i),
      (e = ju(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function rg(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    (o !== null && (o.lanes |= t), iu(e.return, t, i));
  }
  function Vu(e, t, i, o, u, f) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: i,
          tailMode: u,
          treeForkCount: f,
        })
      : ((p.isBackwards = t),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = o),
        (p.tail = i),
        (p.tailMode = u),
        (p.treeForkCount = f));
  }
  function lg(e, t, i) {
    var o = t.pendingProps,
      u = o.revealOrder,
      f = o.tail;
    o = o.children;
    var p = Qe.current,
      b = (p & 2) !== 0;
    if (
      (b ? ((p = (p & 1) | 2), (t.flags |= 128)) : (p &= 1),
      Z(Qe, p),
      ot(e, t, o, i),
      (o = Te ? ps : 0),
      !b && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rg(e, i, t);
        else if (e.tag === 19) rg(e, i, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (u) {
      case "forwards":
        for (i = t.child, u = null; i !== null; )
          ((e = i.alternate), e !== null && Wo(e) === null && (u = i), (i = i.sibling));
        ((i = u),
          i === null ? ((u = t.child), (t.child = null)) : ((u = i.sibling), (i.sibling = null)),
          Vu(t, !1, u, i, f, o));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Wo(e) === null)) {
            t.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = i), (i = u), (u = e));
        }
        Vu(t, !0, i, null, f, o);
        break;
      case "together":
        Vu(t, !1, null, null, void 0, o);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Cn(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ti |= t.lanes), (i & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((pa(e, t, i, !1), (i & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, i = wn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        ((e = e.sibling), (i = i.sibling = wn(e, e.pendingProps)), (i.return = t));
      i.sibling = null;
    }
    return t.child;
  }
  function Qu(e, t) {
    return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Vo(e)));
  }
  function US(e, t, i) {
    switch (t.tag) {
      case 3:
        (Ve(t, t.stateNode.containerInfo), Yn(t, Fe, e.memoizedState.cache), Ei());
        break;
      case 27:
      case 5:
        nn(t);
        break;
      case 4:
        Ve(t, t.stateNode.containerInfo);
        break;
      case 10:
        Yn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), mu(t), null);
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Wn(t), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
              ? og(e, t, i)
              : (Wn(t), (e = Cn(e, t, i)), e !== null ? e.sibling : null);
        Wn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((o = (i & t.childLanes) !== 0),
          o || (pa(e, t, i, !1), (o = (i & t.childLanes) !== 0)),
          u)
        ) {
          if (o) return lg(e, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Z(Qe, Qe.current),
          o)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), eg(e, t, i, t.pendingProps));
      case 24:
        Yn(t, Fe, e.memoizedState.cache);
    }
    return Cn(e, t, i);
  }
  function ug(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ge = !0;
      else {
        if (!Qu(e, i) && (t.flags & 128) === 0) return ((Ge = !1), US(e, t, i));
        Ge = (e.flags & 131072) !== 0;
      }
    else ((Ge = !1), Te && (t.flags & 1048576) !== 0 && jd(t, ps, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var o = t.pendingProps;
          if (((e = Oi(t.elementType)), (t.type = e), typeof e == "function"))
            Kl(e)
              ? ((o = Di(e, o)), (t.tag = 1), (t = ag(null, t, e, o, i)))
              : ((t.tag = 0), (t = Bu(null, t, e, o, i)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === P) {
                ((t.tag = 11), (t = Wh(null, t, e, o, i)));
                break e;
              } else if (u === U) {
                ((t.tag = 14), (t = Zh(null, t, e, o, i)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return Bu(e, t, t.type, t.pendingProps, i);
      case 1:
        return ((o = t.type), (u = Di(o, t.pendingProps)), ag(e, t, o, u, i));
      case 3:
        e: {
          if ((Ve(t, t.stateNode.containerInfo), e === null)) throw Error(r(387));
          o = t.pendingProps;
          var f = t.memoizedState;
          ((u = f.element), cu(e, t), _s(t, o, null, i));
          var p = t.memoizedState;
          if (
            ((o = p.cache),
            Yn(t, Fe, o),
            o !== f.cache && au(t, [Fe], i, !0),
            Ts(),
            (o = p.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: o, isDehydrated: !1, cache: p.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = sg(e, t, o, i);
              break e;
            } else if (o !== u) {
              ((u = qt(Error(r(424)), t)), ys(u), (t = sg(e, t, o, i)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ne = Vt(e.firstChild),
                  at = t,
                  Te = !0,
                  $n = null,
                  jt = !0,
                  i = eh(t, null, o, i),
                  t.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
            }
          else {
            if ((Ei(), o === u)) {
              t = Cn(e, t, i);
              break e;
            }
            ot(e, t, o, i);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          lr(e, t),
          e === null
            ? (i = bm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = i)
              : Te ||
                ((i = t.type),
                (e = t.pendingProps),
                (o = Er(pe.current).createElement(i)),
                (o[it] = t),
                (o[gt] = e),
                rt(o, i, e),
                et(o),
                (t.stateNode = o))
            : (t.memoizedState = bm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          nn(t),
          e === null &&
            Te &&
            ((o = t.stateNode = ym(t.type, t.pendingProps, pe.current)),
            (at = t),
            (jt = !0),
            (u = Ne),
            oi(t.type) ? ((Tc = u), (Ne = Vt(o.firstChild))) : (Ne = u)),
          ot(e, t, t.pendingProps.children, i),
          lr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Te &&
            ((u = o = Ne) &&
              ((o = db(o, t.type, t.pendingProps, jt)),
              o !== null
                ? ((t.stateNode = o), (at = t), (Ne = Vt(o.firstChild)), (jt = !1), (u = !0))
                : (u = !1)),
            u || Fn(t)),
          nn(t),
          (u = t.type),
          (f = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (o = f.children),
          vc(u, f) ? (o = null) : p !== null && vc(u, p) && (t.flags |= 32),
          t.memoizedState !== null && ((u = yu(e, t, xS, null, null, i)), (Qs._currentValue = u)),
          lr(e, t),
          ot(e, t, o, i),
          t.child
        );
      case 6:
        return (
          e === null &&
            Te &&
            ((e = i = Ne) &&
              ((i = hb(i, t.pendingProps, jt)),
              i !== null ? ((t.stateNode = i), (at = t), (Ne = null), (e = !0)) : (e = !1)),
            e || Fn(t)),
          null
        );
      case 13:
        return og(e, t, i);
      case 4:
        return (
          Ve(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = ki(t, null, o, i)) : ot(e, t, o, i),
          t.child
        );
      case 11:
        return Wh(e, t, t.type, t.pendingProps, i);
      case 7:
        return (ot(e, t, t.pendingProps, i), t.child);
      case 8:
        return (ot(e, t, t.pendingProps.children, i), t.child);
      case 12:
        return (ot(e, t, t.pendingProps.children, i), t.child);
      case 10:
        return ((o = t.pendingProps), Yn(t, t.type, o.value), ot(e, t, o.children, i), t.child);
      case 9:
        return (
          (u = t.type._context),
          (o = t.pendingProps.children),
          xi(t),
          (u = st(u)),
          (o = o(u)),
          (t.flags |= 1),
          ot(e, t, o, i),
          t.child
        );
      case 14:
        return Zh(e, t, t.type, t.pendingProps, i);
      case 15:
        return Jh(e, t, t.type, t.pendingProps, i);
      case 19:
        return lg(e, t, i);
      case 31:
        return PS(e, t, i);
      case 22:
        return eg(e, t, i, t.pendingProps);
      case 24:
        return (
          xi(t),
          (o = st(Fe)),
          e === null
            ? ((u = ru()),
              u === null &&
                ((u = Le),
                (f = su()),
                (u.pooledCache = f),
                f.refCount++,
                f !== null && (u.pooledCacheLanes |= i),
                (u = f)),
              (t.memoizedState = { parent: o, cache: u }),
              uu(t),
              Yn(t, Fe, u))
            : ((e.lanes & i) !== 0 && (cu(e, t), _s(t, null, null, i), Ts()),
              (u = e.memoizedState),
              (f = t.memoizedState),
              u.parent !== o
                ? ((u = { parent: o, cache: o }),
                  (t.memoizedState = u),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                  Yn(t, Fe, o))
                : ((o = f.cache), Yn(t, Fe, o), o !== u.cache && au(t, [Fe], i, !0))),
          ot(e, t, t.pendingProps.children, i),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function On(e) {
    e.flags |= 4;
  }
  function $u(e, t, i, o, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Ug()) e.flags |= 8192;
        else throw ((Mi = Yo), lu);
    } else e.flags &= -16777217;
  }
  function cg(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Em(t)))
      if (Ug()) e.flags |= 8192;
      else throw ((Mi = Yo), lu);
  }
  function cr(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Vf() : 536870912), (e.lanes |= t), (Ca |= t)));
  }
  function Ms(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; ) (t.alternate !== null && (i = t), (t = t.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; ) (i.alternate !== null && (o = i), (i = i.sibling));
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      o = 0;
    if (t)
      for (var u = e.child; u !== null; )
        ((i |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 65011712),
          (o |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((i |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= o), (e.childLanes = i), t);
  }
  function BS(e, t, i) {
    var o = t.pendingProps;
    switch ((Jl(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Pe(t), null);
      case 1:
        return (Pe(t), null);
      case 3:
        return (
          (i = t.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          t.memoizedState.cache !== o && (t.flags |= 2048),
          En(Fe),
          De(),
          i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (ma(t)
              ? On(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), tu())),
          Pe(t),
          null
        );
      case 26:
        var u = t.type,
          f = t.memoizedState;
        return (
          e === null
            ? (On(t), f !== null ? (Pe(t), cg(t, f)) : (Pe(t), $u(t, u, null, o, i)))
            : f
              ? f !== e.memoizedState
                ? (On(t), Pe(t), cg(t, f))
                : (Pe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== o && On(t), Pe(t), $u(t, u, e, o, i)),
          null
        );
      case 27:
        if ((yn(t), (i = pe.current), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== o && On(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(r(166));
            return (Pe(t), null);
          }
          ((e = ee.current), ma(t) ? Vd(t) : ((e = ym(u, o, i)), (t.stateNode = e), On(t)));
        }
        return (Pe(t), null);
      case 5:
        if ((yn(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== o && On(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(r(166));
            return (Pe(t), null);
          }
          if (((f = ee.current), ma(t))) Vd(t);
          else {
            var p = Er(pe.current);
            switch (f) {
              case 1:
                f = p.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                f = p.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    f = p.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    f = p.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    ((f = p.createElement("div")),
                      (f.innerHTML = "<script><\/script>"),
                      (f = f.removeChild(f.firstChild)));
                    break;
                  case "select":
                    ((f =
                      typeof o.is == "string"
                        ? p.createElement("select", { is: o.is })
                        : p.createElement("select")),
                      o.multiple ? (f.multiple = !0) : o.size && (f.size = o.size));
                    break;
                  default:
                    f =
                      typeof o.is == "string"
                        ? p.createElement(u, { is: o.is })
                        : p.createElement(u);
                }
            }
            ((f[it] = t), (f[gt] = o));
            e: for (p = t.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6) f.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                ((p.child.return = p), (p = p.child));
                continue;
              }
              if (p === t) break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === t) break e;
                p = p.return;
              }
              ((p.sibling.return = p.return), (p = p.sibling));
            }
            t.stateNode = f;
            e: switch ((rt(f, u, o), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && On(t);
          }
        }
        return (Pe(t), $u(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, i), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== o && On(t);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = pe.current), ma(t))) {
            if (((e = t.stateNode), (i = t.memoizedProps), (o = null), (u = at), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            ((e[it] = t),
              (e = !!(
                e.nodeValue === i ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                om(e.nodeValue, i)
              )),
              e || Fn(t, !0));
          } else ((e = Er(e).createTextNode(o)), (e[it] = t), (t.stateNode = e));
        }
        return (Pe(t), null);
      case 31:
        if (((i = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((o = ma(t)), i !== null)) {
            if (e === null) {
              if (!o) throw Error(r(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(r(557));
              e[it] = t;
            } else (Ei(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Pe(t), (e = !1));
          } else
            ((i = tu()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
              (e = !0));
          if (!e) return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (Pe(t), null);
      case 13:
        if (
          ((o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = ma(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(r(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(r(317));
              u[it] = t;
            } else (Ei(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Pe(t), (u = !1));
          } else
            ((u = tu()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
        }
        return (
          Ct(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = i), t)
            : ((i = o !== null),
              (e = e !== null && e.memoizedState !== null),
              i &&
                ((o = t.child),
                (u = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (u = o.alternate.memoizedState.cachePool.pool),
                (f = null),
                o.memoizedState !== null &&
                  o.memoizedState.cachePool !== null &&
                  (f = o.memoizedState.cachePool.pool),
                f !== u && (o.flags |= 2048)),
              i !== e && i && (t.child.flags |= 8192),
              cr(t, t.updateQueue),
              Pe(t),
              null)
        );
      case 4:
        return (De(), e === null && hc(t.stateNode.containerInfo), Pe(t), null);
      case 10:
        return (En(t.type), Pe(t), null);
      case 19:
        if ((H(Qe), (o = t.memoizedState), o === null)) return (Pe(t), null);
        if (((u = (t.flags & 128) !== 0), (f = o.rendering), f === null))
          if (u) Ms(o, !1);
          else {
            if (ze !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = Wo(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      Ms(o, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      cr(t, e),
                      t.subtreeFlags = 0,
                      e = i,
                      i = t.child;
                    i !== null;
                  )
                    (qd(i, e), (i = i.sibling));
                  return (Z(Qe, (Qe.current & 1) | 2), Te && Tn(t, o.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ve() > mr &&
              ((t.flags |= 128), (u = !0), Ms(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Wo(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                cr(t, e),
                Ms(o, !0),
                o.tail === null && o.tailMode === "hidden" && !f.alternate && !Te)
              )
                return (Pe(t), null);
            } else
              2 * ve() - o.renderingStartTime > mr &&
                i !== 536870912 &&
                ((t.flags |= 128), (u = !0), Ms(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = o.last), e !== null ? (e.sibling = f) : (t.child = f), (o.last = f));
        }
        return o.tail !== null
          ? ((e = o.tail),
            (o.rendering = e),
            (o.tail = e.sibling),
            (o.renderingStartTime = ve()),
            (e.sibling = null),
            (i = Qe.current),
            Z(Qe, u ? (i & 1) | 2 : i & 1),
            Te && Tn(t, o.treeForkCount),
            e)
          : (Pe(t), null);
      case 22:
      case 23:
        return (
          Ct(t),
          gu(),
          (o = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (t.flags |= 8192)
            : o && (t.flags |= 8192),
          o
            ? (i & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Pe(t),
          (i = t.updateQueue),
          i !== null && cr(t, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (o = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (o = t.memoizedState.cachePool.pool),
          o !== i && (t.flags |= 2048),
          e !== null && H(Ci),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          En(Fe),
          Pe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function qS(e, t) {
    switch ((Jl(t), t.tag)) {
      case 1:
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 3:
        return (
          En(Fe),
          De(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (yn(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Ct(t), t.alternate === null)) throw Error(r(340));
          Ei();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 13:
        if ((Ct(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(r(340));
          Ei();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (H(Qe), null);
      case 4:
        return (De(), null);
      case 10:
        return (En(t.type), null);
      case 22:
      case 23:
        return (
          Ct(t),
          gu(),
          e !== null && H(Ci),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (En(Fe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fg(e, t) {
    switch ((Jl(t), t.tag)) {
      case 3:
        (En(Fe), De());
        break;
      case 26:
      case 27:
      case 5:
        yn(t);
        break;
      case 4:
        De();
        break;
      case 31:
        t.memoizedState !== null && Ct(t);
        break;
      case 13:
        Ct(t);
        break;
      case 19:
        H(Qe);
        break;
      case 10:
        En(t.type);
        break;
      case 22:
      case 23:
        (Ct(t), gu(), e !== null && H(Ci));
        break;
      case 24:
        En(Fe);
    }
  }
  function ks(e, t) {
    try {
      var i = t.updateQueue,
        o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var f = i.create,
              p = i.inst;
            ((o = f()), (p.destroy = o));
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (b) {
      Ce(t, t.return, b);
    }
  }
  function Jn(e, t, i) {
    try {
      var o = t.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        o = f;
        do {
          if ((o.tag & e) === e) {
            var p = o.inst,
              b = p.destroy;
            if (b !== void 0) {
              ((p.destroy = void 0), (u = t));
              var _ = i,
                k = b;
              try {
                k();
              } catch (q) {
                Ce(u, _, q);
              }
            }
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (q) {
      Ce(t, t.return, q);
    }
  }
  function dg(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        nh(t, i);
      } catch (o) {
        Ce(e, e.return, o);
      }
    }
  }
  function hg(e, t, i) {
    ((i.props = Di(e.type, e.memoizedProps)), (i.state = e.memoizedState));
    try {
      i.componentWillUnmount();
    } catch (o) {
      Ce(e, t, o);
    }
  }
  function Ls(e, t) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof i == "function" ? (e.refCleanup = i(o)) : (i.current = o);
      }
    } catch (u) {
      Ce(e, t, u);
    }
  }
  function rn(e, t) {
    var i = e.ref,
      o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          Ce(e, t, u);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (u) {
          Ce(e, t, u);
        }
      else i.current = null;
  }
  function gg(e) {
    var t = e.type,
      i = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? (o.src = i.src) : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (u) {
      Ce(e, e.return, u);
    }
  }
  function Fu(e, t, i) {
    try {
      var o = e.stateNode;
      (ob(o, e.type, i, t), (o[gt] = t));
    } catch (u) {
      Ce(e, e.return, u);
    }
  }
  function mg(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && oi(e.type)) || e.tag === 4
    );
  }
  function Yu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || mg(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && oi(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Gu(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      ((e = e.stateNode),
        t
          ? (i.nodeType === 9
              ? i.body
              : i.nodeName === "HTML"
                ? i.ownerDocument.body
                : i
            ).insertBefore(e, t)
          : ((t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i),
            t.appendChild(e),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = bn)));
    else if (
      o !== 4 &&
      (o === 27 && oi(e.type) && ((i = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (Gu(e, t, i), e = e.sibling; e !== null; ) (Gu(e, t, i), (e = e.sibling));
  }
  function fr(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6) ((e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e));
    else if (o !== 4 && (o === 27 && oi(e.type) && (i = e.stateNode), (e = e.child), e !== null))
      for (fr(e, t, i), e = e.sibling; e !== null; ) (fr(e, t, i), (e = e.sibling));
  }
  function pg(e) {
    var t = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var o = e.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
      (rt(t, o, i), (t[it] = e), (t[gt] = i));
    } catch (f) {
      Ce(e, e.return, f);
    }
  }
  var Mn = !1,
    Ke = !1,
    Ku = !1,
    yg = typeof WeakSet == "function" ? WeakSet : Set,
    tt = null;
  function zS(e, t) {
    if (((e = e.containerInfo), (pc = Lr), (e = Od(e)), Hl(e))) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var u = o.anchorOffset,
              f = o.focusNode;
            o = o.focusOffset;
            try {
              (i.nodeType, f.nodeType);
            } catch {
              i = null;
              break e;
            }
            var p = 0,
              b = -1,
              _ = -1,
              k = 0,
              q = 0,
              F = e,
              L = null;
            t: for (;;) {
              for (
                var N;
                F !== i || (u !== 0 && F.nodeType !== 3) || (b = p + u),
                  F !== f || (o !== 0 && F.nodeType !== 3) || (_ = p + o),
                  F.nodeType === 3 && (p += F.nodeValue.length),
                  (N = F.firstChild) !== null;
              )
                ((L = F), (F = N));
              for (;;) {
                if (F === e) break t;
                if (
                  (L === i && ++k === u && (b = p),
                  L === f && ++q === o && (_ = p),
                  (N = F.nextSibling) !== null)
                )
                  break;
                ((F = L), (L = F.parentNode));
              }
              F = N;
            }
            i = b === -1 || _ === -1 ? null : { start: b, end: _ };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (yc = { focusedElem: e, selectionRange: i }, Lr = !1, tt = t; tt !== null; )
      if (((t = tt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (tt = e));
      else
        for (; tt !== null; ) {
          switch (((t = tt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null)
              )
                for (i = 0; i < e.length; i++) ((u = e[i]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                ((e = void 0),
                  (i = t),
                  (u = f.memoizedProps),
                  (f = f.memoizedState),
                  (o = i.stateNode));
                try {
                  var se = Di(i.type, u);
                  ((e = o.getSnapshotBeforeUpdate(se, f)),
                    (o.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ce) {
                  Ce(i, i.return, ce);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (((e = t.stateNode.containerInfo), (i = e.nodeType), i === 9)) bc(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (tt = e));
            break;
          }
          tt = t.return;
        }
  }
  function vg(e, t, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (Ln(e, i), o & 4 && ks(5, i));
        break;
      case 1:
        if ((Ln(e, i), o & 4))
          if (((e = i.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (p) {
              Ce(i, i.return, p);
            }
          else {
            var u = Di(i.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (p) {
              Ce(i, i.return, p);
            }
          }
        (o & 64 && dg(i), o & 512 && Ls(i, i.return));
        break;
      case 3:
        if ((Ln(e, i), o & 64 && ((e = i.updateQueue), e !== null))) {
          if (((t = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            nh(e, t);
          } catch (p) {
            Ce(i, i.return, p);
          }
        }
        break;
      case 27:
        t === null && o & 4 && pg(i);
      case 26:
      case 5:
        (Ln(e, i), t === null && o & 4 && gg(i), o & 512 && Ls(i, i.return));
        break;
      case 12:
        Ln(e, i);
        break;
      case 31:
        (Ln(e, i), o & 4 && Rg(e, i));
        break;
      case 13:
        (Ln(e, i),
          o & 4 && wg(e, i),
          o & 64 &&
            ((e = i.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((i = GS.bind(null, i)), gb(e, i)))));
        break;
      case 22:
        if (((o = i.memoizedState !== null || Mn), !o)) {
          ((t = (t !== null && t.memoizedState !== null) || Ke), (u = Mn));
          var f = Ke;
          ((Mn = o),
            (Ke = t) && !f ? Dn(e, i, (i.subtreeFlags & 8772) !== 0) : Ln(e, i),
            (Mn = u),
            (Ke = f));
        }
        break;
      case 30:
        break;
      default:
        Ln(e, i);
    }
  }
  function Sg(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Sg(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && El(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ue = null,
    pt = !1;
  function kn(e, t, i) {
    for (i = i.child; i !== null; ) (bg(e, t, i), (i = i.sibling));
  }
  function bg(e, t, i) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
      try {
        Tt.onCommitFiberUnmount(ns, i);
      } catch {}
    switch (i.tag) {
      case 26:
        (Ke || rn(i, t),
          kn(e, t, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i)));
        break;
      case 27:
        Ke || rn(i, t);
        var o = Ue,
          u = pt;
        (oi(i.type) && ((Ue = i.stateNode), (pt = !1)),
          kn(e, t, i),
          js(i.stateNode),
          (Ue = o),
          (pt = u));
        break;
      case 5:
        Ke || rn(i, t);
      case 6:
        if (((o = Ue), (u = pt), (Ue = null), kn(e, t, i), (Ue = o), (pt = u), Ue !== null))
          if (pt)
            try {
              (Ue.nodeType === 9
                ? Ue.body
                : Ue.nodeName === "HTML"
                  ? Ue.ownerDocument.body
                  : Ue
              ).removeChild(i.stateNode);
            } catch (f) {
              Ce(i, t, f);
            }
          else
            try {
              Ue.removeChild(i.stateNode);
            } catch (f) {
              Ce(i, t, f);
            }
        break;
      case 18:
        Ue !== null &&
          (pt
            ? ((e = Ue),
              dm(
                e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
                i.stateNode,
              ),
              Ua(e))
            : dm(Ue, i.stateNode));
        break;
      case 4:
        ((o = Ue),
          (u = pt),
          (Ue = i.stateNode.containerInfo),
          (pt = !0),
          kn(e, t, i),
          (Ue = o),
          (pt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Jn(2, i, t), Ke || Jn(4, i, t), kn(e, t, i));
        break;
      case 1:
        (Ke ||
          (rn(i, t), (o = i.stateNode), typeof o.componentWillUnmount == "function" && hg(i, t, o)),
          kn(e, t, i));
        break;
      case 21:
        kn(e, t, i);
        break;
      case 22:
        ((Ke = (o = Ke) || i.memoizedState !== null), kn(e, t, i), (Ke = o));
        break;
      default:
        kn(e, t, i);
    }
  }
  function Rg(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ua(e);
      } catch (i) {
        Ce(t, t.return, i);
      }
    }
  }
  function wg(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ua(e);
      } catch (i) {
        Ce(t, t.return, i);
      }
  }
  function IS(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new yg()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new yg()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function dr(e, t) {
    var i = IS(e);
    t.forEach(function (o) {
      if (!i.has(o)) {
        i.add(o);
        var u = KS.bind(null, e, o);
        o.then(u, u);
      }
    });
  }
  function yt(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var u = i[o],
          f = e,
          p = t,
          b = p;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (oi(b.type)) {
                ((Ue = b.stateNode), (pt = !1));
                break e;
              }
              break;
            case 5:
              ((Ue = b.stateNode), (pt = !1));
              break e;
            case 3:
            case 4:
              ((Ue = b.stateNode.containerInfo), (pt = !0));
              break e;
          }
          b = b.return;
        }
        if (Ue === null) throw Error(r(160));
        (bg(f, p, u),
          (Ue = null),
          (pt = !1),
          (f = u.alternate),
          f !== null && (f.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Tg(t, e), (t = t.sibling));
  }
  var Zt = null;
  function Tg(e, t) {
    var i = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (yt(t, e), vt(e), o & 4 && (Jn(3, e, e.return), ks(3, e), Jn(5, e, e.return)));
        break;
      case 1:
        (yt(t, e),
          vt(e),
          o & 512 && (Ke || i === null || rn(i, i.return)),
          o & 64 &&
            Mn &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? o : i.concat(o))))));
        break;
      case 26:
        var u = Zt;
        if ((yt(t, e), vt(e), o & 512 && (Ke || i === null || rn(i, i.return)), o & 4)) {
          var f = i !== null ? i.memoizedState : null;
          if (((o = e.memoizedState), i === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  ((o = e.type), (i = e.memoizedProps), (u = u.ownerDocument || u));
                  t: switch (o) {
                    case "title":
                      ((f = u.getElementsByTagName("title")[0]),
                        (!f ||
                          f[ss] ||
                          f[it] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = u.createElement(o)),
                          u.head.insertBefore(f, u.querySelector("head > title"))),
                        rt(f, o, i),
                        (f[it] = e),
                        et(f),
                        (o = f));
                      break e;
                    case "link":
                      var p = Tm("link", "href", u).get(o + (i.href || ""));
                      if (p) {
                        for (var b = 0; b < p.length; b++)
                          if (
                            ((f = p[b]),
                            f.getAttribute("href") ===
                              (i.href == null || i.href === "" ? null : i.href) &&
                              f.getAttribute("rel") === (i.rel == null ? null : i.rel) &&
                              f.getAttribute("title") === (i.title == null ? null : i.title) &&
                              f.getAttribute("crossorigin") ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            p.splice(b, 1);
                            break t;
                          }
                      }
                      ((f = u.createElement(o)), rt(f, o, i), u.head.appendChild(f));
                      break;
                    case "meta":
                      if ((p = Tm("meta", "content", u).get(o + (i.content || "")))) {
                        for (b = 0; b < p.length; b++)
                          if (
                            ((f = p[b]),
                            f.getAttribute("content") ===
                              (i.content == null ? null : "" + i.content) &&
                              f.getAttribute("name") === (i.name == null ? null : i.name) &&
                              f.getAttribute("property") ===
                                (i.property == null ? null : i.property) &&
                              f.getAttribute("http-equiv") ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              f.getAttribute("charset") === (i.charSet == null ? null : i.charSet))
                          ) {
                            p.splice(b, 1);
                            break t;
                          }
                      }
                      ((f = u.createElement(o)), rt(f, o, i), u.head.appendChild(f));
                      break;
                    default:
                      throw Error(r(468, o));
                  }
                  ((f[it] = e), et(f), (o = f));
                }
                e.stateNode = o;
              } else _m(u, e.type, e.stateNode);
            else e.stateNode = wm(u, o, e.memoizedProps);
          else
            f !== o
              ? (f === null
                  ? i.stateNode !== null && ((i = i.stateNode), i.parentNode.removeChild(i))
                  : f.count--,
                o === null ? _m(u, e.type, e.stateNode) : wm(u, o, e.memoizedProps))
              : o === null && e.stateNode !== null && Fu(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        (yt(t, e),
          vt(e),
          o & 512 && (Ke || i === null || rn(i, i.return)),
          i !== null && o & 4 && Fu(e, e.memoizedProps, i.memoizedProps));
        break;
      case 5:
        if ((yt(t, e), vt(e), o & 512 && (Ke || i === null || rn(i, i.return)), e.flags & 32)) {
          u = e.stateNode;
          try {
            sa(u, "");
          } catch (se) {
            Ce(e, e.return, se);
          }
        }
        (o & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Fu(e, u, i !== null ? i.memoizedProps : u)),
          o & 1024 && (Ku = !0));
        break;
      case 6:
        if ((yt(t, e), vt(e), o & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((o = e.memoizedProps), (i = e.stateNode));
          try {
            i.nodeValue = o;
          } catch (se) {
            Ce(e, e.return, se);
          }
        }
        break;
      case 3:
        if (
          ((Cr = null),
          (u = Zt),
          (Zt = Ar(t.containerInfo)),
          yt(t, e),
          (Zt = u),
          vt(e),
          o & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Ua(t.containerInfo);
          } catch (se) {
            Ce(e, e.return, se);
          }
        Ku && ((Ku = !1), _g(e));
        break;
      case 4:
        ((o = Zt), (Zt = Ar(e.stateNode.containerInfo)), yt(t, e), vt(e), (Zt = o));
        break;
      case 12:
        (yt(t, e), vt(e));
        break;
      case 31:
        (yt(t, e),
          vt(e),
          o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), dr(e, o))));
        break;
      case 13:
        (yt(t, e),
          vt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (i !== null && i.memoizedState !== null) &&
            (gr = ve()),
          o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), dr(e, o))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var _ = i !== null && i.memoizedState !== null,
          k = Mn,
          q = Ke;
        if (((Mn = k || u), (Ke = q || _), yt(t, e), (Ke = q), (Mn = k), vt(e), o & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (i === null || _ || Mn || Ke || Ni(e)),
              i = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                _ = i = t;
                try {
                  if (((f = _.stateNode), u))
                    ((p = f.style),
                      typeof p.setProperty == "function"
                        ? p.setProperty("display", "none", "important")
                        : (p.display = "none"));
                  else {
                    b = _.stateNode;
                    var F = _.memoizedProps.style,
                      L = F != null && F.hasOwnProperty("display") ? F.display : null;
                    b.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (se) {
                  Ce(_, _.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                _ = t;
                try {
                  _.stateNode.nodeValue = u ? "" : _.memoizedProps;
                } catch (se) {
                  Ce(_, _.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (i === null) {
                _ = t;
                try {
                  var N = _.stateNode;
                  u ? hm(N, !0) : hm(_.stateNode, !1);
                } catch (se) {
                  Ce(_, _.return, se);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (i === t && (i = null), (t = t.return));
            }
            (i === t && (i = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null && ((i = o.retryQueue), i !== null && ((o.retryQueue = null), dr(e, i))));
        break;
      case 19:
        (yt(t, e),
          vt(e),
          o & 4 && ((o = e.updateQueue), o !== null && ((e.updateQueue = null), dr(e, o))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (yt(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (mg(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(r(160));
        switch (i.tag) {
          case 27:
            var u = i.stateNode,
              f = Yu(e);
            fr(e, f, u);
            break;
          case 5:
            var p = i.stateNode;
            i.flags & 32 && (sa(p, ""), (i.flags &= -33));
            var b = Yu(e);
            fr(e, b, p);
            break;
          case 3:
          case 4:
            var _ = i.stateNode.containerInfo,
              k = Yu(e);
            Gu(e, k, _);
            break;
          default:
            throw Error(r(161));
        }
      } catch (q) {
        Ce(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _g(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (_g(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function Ln(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (vg(e, t.alternate, t), (t = t.sibling));
  }
  function Ni(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Jn(4, t, t.return), Ni(t));
          break;
        case 1:
          rn(t, t.return);
          var i = t.stateNode;
          (typeof i.componentWillUnmount == "function" && hg(t, t.return, i), Ni(t));
          break;
        case 27:
          js(t.stateNode);
        case 26:
        case 5:
          (rn(t, t.return), Ni(t));
          break;
        case 22:
          t.memoizedState === null && Ni(t);
          break;
        case 30:
          Ni(t);
          break;
        default:
          Ni(t);
      }
      e = e.sibling;
    }
  }
  function Dn(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate,
        u = e,
        f = t,
        p = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Dn(u, f, i), ks(4, f));
          break;
        case 1:
          if ((Dn(u, f, i), (o = f), (u = o.stateNode), typeof u.componentDidMount == "function"))
            try {
              u.componentDidMount();
            } catch (k) {
              Ce(o, o.return, k);
            }
          if (((o = f), (u = o.updateQueue), u !== null)) {
            var b = o.stateNode;
            try {
              var _ = u.shared.hiddenCallbacks;
              if (_ !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < _.length; u++) th(_[u], b);
            } catch (k) {
              Ce(o, o.return, k);
            }
          }
          (i && p & 64 && dg(f), Ls(f, f.return));
          break;
        case 27:
          pg(f);
        case 26:
        case 5:
          (Dn(u, f, i), i && o === null && p & 4 && gg(f), Ls(f, f.return));
          break;
        case 12:
          Dn(u, f, i);
          break;
        case 31:
          (Dn(u, f, i), i && p & 4 && Rg(u, f));
          break;
        case 13:
          (Dn(u, f, i), i && p & 4 && wg(u, f));
          break;
        case 22:
          (f.memoizedState === null && Dn(u, f, i), Ls(f, f.return));
          break;
        case 30:
          break;
        default:
          Dn(u, f, i);
      }
      t = t.sibling;
    }
  }
  function Xu(e, t) {
    var i = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && vs(i)));
  }
  function Wu(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && vs(e)));
  }
  function Jt(e, t, i, o) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Eg(e, t, i, o), (t = t.sibling));
  }
  function Eg(e, t, i, o) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Jt(e, t, i, o), u & 2048 && ks(9, t));
        break;
      case 1:
        Jt(e, t, i, o);
        break;
      case 3:
        (Jt(e, t, i, o),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && vs(e))));
        break;
      case 12:
        if (u & 2048) {
          (Jt(e, t, i, o), (e = t.stateNode));
          try {
            var f = t.memoizedProps,
              p = f.id,
              b = f.onPostCommit;
            typeof b == "function" &&
              b(p, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (_) {
            Ce(t, t.return, _);
          }
        } else Jt(e, t, i, o);
        break;
      case 31:
        Jt(e, t, i, o);
        break;
      case 13:
        Jt(e, t, i, o);
        break;
      case 23:
        break;
      case 22:
        ((f = t.stateNode),
          (p = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? Jt(e, t, i, o)
              : Ds(e, t)
            : f._visibility & 2
              ? Jt(e, t, i, o)
              : ((f._visibility |= 2), Ea(e, t, i, o, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Xu(p, t));
        break;
      case 24:
        (Jt(e, t, i, o), u & 2048 && Wu(t.alternate, t));
        break;
      default:
        Jt(e, t, i, o);
    }
  }
  function Ea(e, t, i, o, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e,
        p = t,
        b = i,
        _ = o,
        k = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (Ea(f, p, b, _, u), ks(8, p));
          break;
        case 23:
          break;
        case 22:
          var q = p.stateNode;
          (p.memoizedState !== null
            ? q._visibility & 2
              ? Ea(f, p, b, _, u)
              : Ds(f, p)
            : ((q._visibility |= 2), Ea(f, p, b, _, u)),
            u && k & 2048 && Xu(p.alternate, p));
          break;
        case 24:
          (Ea(f, p, b, _, u), u && k & 2048 && Wu(p.alternate, p));
          break;
        default:
          Ea(f, p, b, _, u);
      }
      t = t.sibling;
    }
  }
  function Ds(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e,
          o = t,
          u = o.flags;
        switch (o.tag) {
          case 22:
            (Ds(i, o), u & 2048 && Xu(o.alternate, o));
            break;
          case 24:
            (Ds(i, o), u & 2048 && Wu(o.alternate, o));
            break;
          default:
            Ds(i, o);
        }
        t = t.sibling;
      }
  }
  var Ns = 8192;
  function Aa(e, t, i) {
    if (e.subtreeFlags & Ns) for (e = e.child; e !== null; ) (Ag(e, t, i), (e = e.sibling));
  }
  function Ag(e, t, i) {
    switch (e.tag) {
      case 26:
        (Aa(e, t, i),
          e.flags & Ns && e.memoizedState !== null && Ab(i, Zt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Aa(e, t, i);
        break;
      case 3:
      case 4:
        var o = Zt;
        ((Zt = Ar(e.stateNode.containerInfo)), Aa(e, t, i), (Zt = o));
        break;
      case 22:
        e.memoizedState === null &&
          ((o = e.alternate),
          o !== null && o.memoizedState !== null
            ? ((o = Ns), (Ns = 16777216), Aa(e, t, i), (Ns = o))
            : Aa(e, t, i));
        break;
      default:
        Aa(e, t, i);
    }
  }
  function xg(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Ps(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          ((tt = o), Og(o, e));
        }
      xg(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Cg(e), (e = e.sibling));
  }
  function Cg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ps(e), e.flags & 2048 && Jn(9, e, e.return));
        break;
      case 3:
        Ps(e);
        break;
      case 12:
        Ps(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), hr(e))
          : Ps(e);
        break;
      default:
        Ps(e);
    }
  }
  function hr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          ((tt = o), Og(o, e));
        }
      xg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Jn(8, t, t.return), hr(t));
          break;
        case 22:
          ((i = t.stateNode), i._visibility & 2 && ((i._visibility &= -3), hr(t)));
          break;
        default:
          hr(t);
      }
      e = e.sibling;
    }
  }
  function Og(e, t) {
    for (; tt !== null; ) {
      var i = tt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Jn(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          vs(i.memoizedState.cache);
      }
      if (((o = i.child), o !== null)) ((o.return = i), (tt = o));
      else
        e: for (i = e; tt !== null; ) {
          o = tt;
          var u = o.sibling,
            f = o.return;
          if ((Sg(o), o === i)) {
            tt = null;
            break e;
          }
          if (u !== null) {
            ((u.return = f), (tt = u));
            break e;
          }
          tt = f;
        }
    }
  }
  var jS = {
      getCacheForType: function (e) {
        var t = st(Fe),
          i = t.data.get(e);
        return (i === void 0 && ((i = e()), t.data.set(e, i)), i);
      },
      cacheSignal: function () {
        return st(Fe).controller.signal;
      },
    },
    HS = typeof WeakMap == "function" ? WeakMap : Map,
    Ae = 0,
    Le = null,
    Se = null,
    Re = 0,
    xe = 0,
    Ot = null,
    ei = !1,
    xa = !1,
    Zu = !1,
    Nn = 0,
    ze = 0,
    ti = 0,
    Pi = 0,
    Ju = 0,
    Mt = 0,
    Ca = 0,
    Us = null,
    St = null,
    ec = !1,
    gr = 0,
    Mg = 0,
    mr = 1 / 0,
    pr = null,
    ni = null,
    Je = 0,
    ii = null,
    Oa = null,
    Pn = 0,
    tc = 0,
    nc = null,
    kg = null,
    Bs = 0,
    ic = null;
  function kt() {
    return (Ae & 2) !== 0 && Re !== 0 ? Re & -Re : O.T !== null ? uc() : Yf();
  }
  function Lg() {
    if (Mt === 0)
      if ((Re & 536870912) === 0 || Te) {
        var e = _o;
        ((_o <<= 1), (_o & 3932160) === 0 && (_o = 262144), (Mt = e));
      } else Mt = 536870912;
    return ((e = xt.current), e !== null && (e.flags |= 32), Mt);
  }
  function bt(e, t, i) {
    (((e === Le && (xe === 2 || xe === 9)) || e.cancelPendingCommit !== null) &&
      (Ma(e, 0), ai(e, Re, Mt, !1)),
      as(e, i),
      ((Ae & 2) === 0 || e !== Le) &&
        (e === Le && ((Ae & 2) === 0 && (Pi |= i), ze === 4 && ai(e, Re, Mt, !1)), ln(e)));
  }
  function Dg(e, t, i) {
    if ((Ae & 6) !== 0) throw Error(r(327));
    var o = (!i && (t & 127) === 0 && (t & e.expiredLanes) === 0) || is(e, t),
      u = o ? $S(e, t) : sc(e, t, !0),
      f = o;
    do {
      if (u === 0) {
        xa && !o && ai(e, t, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), f && !VS(i))) {
          ((u = sc(e, t, !1)), (f = !1));
          continue;
        }
        if (u === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var p = 0;
          else
            ((p = e.pendingLanes & -536870913), (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0));
          if (p !== 0) {
            t = p;
            e: {
              var b = e;
              u = Us;
              var _ = b.current.memoizedState.isDehydrated;
              if ((_ && (Ma(b, p).flags |= 256), (p = sc(b, p, !1)), p !== 2)) {
                if (Zu && !_) {
                  ((b.errorRecoveryDisabledLanes |= f), (Pi |= f), (u = 4));
                  break e;
                }
                ((f = St), (St = u), f !== null && (St === null ? (St = f) : St.push.apply(St, f)));
              }
              u = p;
            }
            if (((f = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Ma(e, 0), ai(e, t, 0, !0));
          break;
        }
        e: {
          switch (((o = e), (f = u), f)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ai(o, t, Mt, !ei);
              break e;
            case 2:
              St = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((u = gr + 300 - ve()), 10 < u)) {
            if ((ai(o, t, Mt, !ei), Ao(o, 0, !0) !== 0)) break e;
            ((Pn = t),
              (o.timeoutHandle = cm(
                Ng.bind(null, o, i, St, pr, ec, t, Mt, Pi, Ca, ei, f, "Throttled", -0, 0),
                u,
              )));
            break e;
          }
          Ng(o, i, St, pr, ec, t, Mt, Pi, Ca, ei, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ln(e);
  }
  function Ng(e, t, i, o, u, f, p, b, _, k, q, F, L, N) {
    if (((e.timeoutHandle = -1), (F = t.subtreeFlags), F & 8192 || (F & 16785408) === 16785408)) {
      ((F = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: bn,
      }),
        Ag(t, f, F));
      var se = (f & 62914560) === f ? gr - ve() : (f & 4194048) === f ? Mg - ve() : 0;
      if (((se = xb(F, se)), se !== null)) {
        ((Pn = f),
          (e.cancelPendingCommit = se(Hg.bind(null, e, t, f, i, o, u, p, b, _, q, F, null, L, N))),
          ai(e, f, p, !k));
        return;
      }
    }
    Hg(e, t, f, i, o, u, p, b, _);
  }
  function VS(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        t.flags & 16384 &&
        ((i = t.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var o = 0; o < i.length; o++) {
          var u = i[o],
            f = u.getSnapshot;
          u = u.value;
          try {
            if (!Et(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null)) ((i.return = t), (t = i));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ai(e, t, i, o) {
    ((t &= ~Ju),
      (t &= ~Pi),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      o && (e.warmLanes |= t),
      (o = e.expirationTimes));
    for (var u = t; 0 < u; ) {
      var f = 31 - _t(u),
        p = 1 << f;
      ((o[f] = -1), (u &= ~p));
    }
    i !== 0 && Qf(e, i, t);
  }
  function yr() {
    return (Ae & 6) === 0 ? (qs(0), !1) : !0;
  }
  function ac() {
    if (Se !== null) {
      if (xe === 0) var e = Se.return;
      else ((e = Se), (_n = Ai = null), bu(e), (ba = null), (bs = 0), (e = Se));
      for (; e !== null; ) (fg(e.alternate, e), (e = e.return));
      Se = null;
    }
  }
  function Ma(e, t) {
    var i = e.timeoutHandle;
    (i !== -1 && ((e.timeoutHandle = -1), ub(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      (Pn = 0),
      ac(),
      (Le = e),
      (Se = i = wn(e.current, null)),
      (Re = t),
      (xe = 0),
      (Ot = null),
      (ei = !1),
      (xa = is(e, t)),
      (Zu = !1),
      (Ca = Mt = Ju = Pi = ti = ze = 0),
      (St = Us = null),
      (ec = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var u = 31 - _t(o),
          f = 1 << u;
        ((t |= e[u]), (o &= ~f));
      }
    return ((Nn = t), qo(), i);
  }
  function Pg(e, t) {
    ((ge = null),
      (O.H = Cs),
      t === Sa || t === Fo
        ? ((t = Wd()), (xe = 3))
        : t === lu
          ? ((t = Wd()), (xe = 4))
          : (xe =
              t === Uu
                ? 8
                : t !== null && typeof t == "object" && typeof t.then == "function"
                  ? 6
                  : 1),
      (Ot = t),
      Se === null && ((ze = 1), or(e, qt(t, e.current))));
  }
  function Ug() {
    var e = xt.current;
    return e === null
      ? !0
      : (Re & 4194048) === Re
        ? Ht === null
        : (Re & 62914560) === Re || (Re & 536870912) !== 0
          ? e === Ht
          : !1;
  }
  function Bg() {
    var e = O.H;
    return ((O.H = Cs), e === null ? Cs : e);
  }
  function qg() {
    var e = O.A;
    return ((O.A = jS), e);
  }
  function vr() {
    ((ze = 4),
      ei || ((Re & 4194048) !== Re && xt.current !== null) || (xa = !0),
      ((ti & 134217727) === 0 && (Pi & 134217727) === 0) || Le === null || ai(Le, Re, Mt, !1));
  }
  function sc(e, t, i) {
    var o = Ae;
    Ae |= 2;
    var u = Bg(),
      f = qg();
    ((Le !== e || Re !== t) && ((pr = null), Ma(e, t)), (t = !1));
    var p = ze;
    e: do
      try {
        if (xe !== 0 && Se !== null) {
          var b = Se,
            _ = Ot;
          switch (xe) {
            case 8:
              (ac(), (p = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xt.current === null && (t = !0);
              var k = xe;
              if (((xe = 0), (Ot = null), ka(e, b, _, k), i && xa)) {
                p = 0;
                break e;
              }
              break;
            default:
              ((k = xe), (xe = 0), (Ot = null), ka(e, b, _, k));
          }
        }
        (QS(), (p = ze));
        break;
      } catch (q) {
        Pg(e, q);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (_n = Ai = null),
      (Ae = o),
      (O.H = u),
      (O.A = f),
      Se === null && ((Le = null), (Re = 0), qo()),
      p
    );
  }
  function QS() {
    for (; Se !== null; ) zg(Se);
  }
  function $S(e, t) {
    var i = Ae;
    Ae |= 2;
    var o = Bg(),
      u = qg();
    Le !== e || Re !== t ? ((pr = null), (mr = ve() + 500), Ma(e, t)) : (xa = is(e, t));
    e: do
      try {
        if (xe !== 0 && Se !== null) {
          t = Se;
          var f = Ot;
          t: switch (xe) {
            case 1:
              ((xe = 0), (Ot = null), ka(e, t, f, 1));
              break;
            case 2:
            case 9:
              if (Kd(f)) {
                ((xe = 0), (Ot = null), Ig(t));
                break;
              }
              ((t = function () {
                ((xe !== 2 && xe !== 9) || Le !== e || (xe = 7), ln(e));
              }),
                f.then(t, t));
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              Kd(f) ? ((xe = 0), (Ot = null), Ig(t)) : ((xe = 0), (Ot = null), ka(e, t, f, 7));
              break;
            case 5:
              var p = null;
              switch (Se.tag) {
                case 26:
                  p = Se.memoizedState;
                case 5:
                case 27:
                  var b = Se;
                  if (p ? Em(p) : b.stateNode.complete) {
                    ((xe = 0), (Ot = null));
                    var _ = b.sibling;
                    if (_ !== null) Se = _;
                    else {
                      var k = b.return;
                      k !== null ? ((Se = k), Sr(k)) : (Se = null);
                    }
                    break t;
                  }
              }
              ((xe = 0), (Ot = null), ka(e, t, f, 5));
              break;
            case 6:
              ((xe = 0), (Ot = null), ka(e, t, f, 6));
              break;
            case 8:
              (ac(), (ze = 6));
              break e;
            default:
              throw Error(r(462));
          }
        }
        FS();
        break;
      } catch (q) {
        Pg(e, q);
      }
    while (!0);
    return (
      (_n = Ai = null),
      (O.H = o),
      (O.A = u),
      (Ae = i),
      Se !== null ? 0 : ((Le = null), (Re = 0), qo(), ze)
    );
  }
  function FS() {
    for (; Se !== null && !bl(); ) zg(Se);
  }
  function zg(e) {
    var t = ug(e.alternate, e, Nn);
    ((e.memoizedProps = e.pendingProps), t === null ? Sr(e) : (Se = t));
  }
  function Ig(e) {
    var t = e,
      i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ig(i, t, t.pendingProps, t.type, void 0, Re);
        break;
      case 11:
        t = ig(i, t, t.pendingProps, t.type.render, t.ref, Re);
        break;
      case 5:
        bu(t);
      default:
        (fg(i, t), (t = Se = qd(t, Nn)), (t = ug(i, t, Nn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Sr(e) : (Se = t));
  }
  function ka(e, t, i, o) {
    ((_n = Ai = null), bu(t), (ba = null), (bs = 0));
    var u = t.return;
    try {
      if (NS(e, u, t, i, Re)) {
        ((ze = 1), or(e, qt(i, e.current)), (Se = null));
        return;
      }
    } catch (f) {
      if (u !== null) throw ((Se = u), f);
      ((ze = 1), or(e, qt(i, e.current)), (Se = null));
      return;
    }
    t.flags & 32768
      ? (Te || o === 1
          ? (e = !0)
          : xa || (Re & 536870912) !== 0
            ? (e = !1)
            : ((ei = e = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = xt.current), o !== null && o.tag === 13 && (o.flags |= 16384))),
        jg(t, e))
      : Sr(t);
  }
  function Sr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        jg(t, ei);
        return;
      }
      e = t.return;
      var i = BS(t.alternate, t, Nn);
      if (i !== null) {
        Se = i;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function jg(e, t) {
    do {
      var i = qS(e.alternate, e);
      if (i !== null) {
        ((i.flags &= 32767), (Se = i));
        return;
      }
      if (
        ((i = e.return),
        i !== null && ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Se = e;
        return;
      }
      Se = e = i;
    } while (e !== null);
    ((ze = 6), (Se = null));
  }
  function Hg(e, t, i, o, u, f, p, b, _) {
    e.cancelPendingCommit = null;
    do br();
    while (Je !== 0);
    if ((Ae & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= Yl),
        Ev(e, i, f, p, b, _),
        e === Le && ((Se = Le = null), (Re = 0)),
        (Oa = t),
        (ii = e),
        (Pn = i),
        (tc = f),
        (nc = u),
        (kg = o),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            XS(wo, function () {
              return (Yg(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || o)
      ) {
        ((o = O.T), (O.T = null), (u = j.p), (j.p = 2), (p = Ae), (Ae |= 4));
        try {
          zS(e, t, i);
        } finally {
          ((Ae = p), (j.p = u), (O.T = o));
        }
      }
      ((Je = 1), Vg(), Qg(), $g());
    }
  }
  function Vg() {
    if (Je === 1) {
      Je = 0;
      var e = ii,
        t = Oa,
        i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        ((i = O.T), (O.T = null));
        var o = j.p;
        j.p = 2;
        var u = Ae;
        Ae |= 4;
        try {
          Tg(t, e);
          var f = yc,
            p = Od(e.containerInfo),
            b = f.focusedElem,
            _ = f.selectionRange;
          if (p !== b && b && b.ownerDocument && Cd(b.ownerDocument.documentElement, b)) {
            if (_ !== null && Hl(b)) {
              var k = _.start,
                q = _.end;
              if ((q === void 0 && (q = k), "selectionStart" in b))
                ((b.selectionStart = k), (b.selectionEnd = Math.min(q, b.value.length)));
              else {
                var F = b.ownerDocument || document,
                  L = (F && F.defaultView) || window;
                if (L.getSelection) {
                  var N = L.getSelection(),
                    se = b.textContent.length,
                    ce = Math.min(_.start, se),
                    ke = _.end === void 0 ? ce : Math.min(_.end, se);
                  !N.extend && ce > ke && ((p = ke), (ke = ce), (ce = p));
                  var C = xd(b, ce),
                    x = xd(b, ke);
                  if (
                    C &&
                    x &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== C.node ||
                      N.anchorOffset !== C.offset ||
                      N.focusNode !== x.node ||
                      N.focusOffset !== x.offset)
                  ) {
                    var M = F.createRange();
                    (M.setStart(C.node, C.offset),
                      N.removeAllRanges(),
                      ce > ke
                        ? (N.addRange(M), N.extend(x.node, x.offset))
                        : (M.setEnd(x.node, x.offset), N.addRange(M)));
                  }
                }
              }
            }
            for (F = [], N = b; (N = N.parentNode); )
              N.nodeType === 1 && F.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < F.length; b++) {
              var V = F[b];
              ((V.element.scrollLeft = V.left), (V.element.scrollTop = V.top));
            }
          }
          ((Lr = !!pc), (yc = pc = null));
        } finally {
          ((Ae = u), (j.p = o), (O.T = i));
        }
      }
      ((e.current = t), (Je = 2));
    }
  }
  function Qg() {
    if (Je === 2) {
      Je = 0;
      var e = ii,
        t = Oa,
        i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        ((i = O.T), (O.T = null));
        var o = j.p;
        j.p = 2;
        var u = Ae;
        Ae |= 4;
        try {
          vg(e, t.alternate, t);
        } finally {
          ((Ae = u), (j.p = o), (O.T = i));
        }
      }
      Je = 3;
    }
  }
  function $g() {
    if (Je === 4 || Je === 3) {
      ((Je = 0), bo());
      var e = ii,
        t = Oa,
        i = Pn,
        o = kg;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Je = 5)
        : ((Je = 0), (Oa = ii = null), Fg(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (ni = null),
        Tl(i),
        (t = t.stateNode),
        Tt && typeof Tt.onCommitFiberRoot == "function")
      )
        try {
          Tt.onCommitFiberRoot(ns, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        ((t = O.T), (u = j.p), (j.p = 2), (O.T = null));
        try {
          for (var f = e.onRecoverableError, p = 0; p < o.length; p++) {
            var b = o[p];
            f(b.value, { componentStack: b.stack });
          }
        } finally {
          ((O.T = t), (j.p = u));
        }
      }
      ((Pn & 3) !== 0 && br(),
        ln(e),
        (u = e.pendingLanes),
        (i & 261930) !== 0 && (u & 42) !== 0 ? (e === ic ? Bs++ : ((Bs = 0), (ic = e))) : (Bs = 0),
        qs(0));
    }
  }
  function Fg(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), vs(t)));
  }
  function br() {
    return (Vg(), Qg(), $g(), Yg());
  }
  function Yg() {
    if (Je !== 5) return !1;
    var e = ii,
      t = tc;
    tc = 0;
    var i = Tl(Pn),
      o = O.T,
      u = j.p;
    try {
      ((j.p = 32 > i ? 32 : i), (O.T = null), (i = nc), (nc = null));
      var f = ii,
        p = Pn;
      if (((Je = 0), (Oa = ii = null), (Pn = 0), (Ae & 6) !== 0)) throw Error(r(331));
      var b = Ae;
      if (
        ((Ae |= 4),
        Cg(f.current),
        Eg(f, f.current, p, i),
        (Ae = b),
        qs(0, !1),
        Tt && typeof Tt.onPostCommitFiberRoot == "function")
      )
        try {
          Tt.onPostCommitFiberRoot(ns, f);
        } catch {}
      return !0;
    } finally {
      ((j.p = u), (O.T = o), Fg(e, t));
    }
  }
  function Gg(e, t, i) {
    ((t = qt(i, t)),
      (t = Pu(e.stateNode, t, 2)),
      (e = Xn(e, t, 2)),
      e !== null && (as(e, 2), ln(e)));
  }
  function Ce(e, t, i) {
    if (e.tag === 3) Gg(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gg(t, e, i);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" && (ni === null || !ni.has(o)))
          ) {
            ((e = qt(i, e)),
              (i = Kh(2)),
              (o = Xn(t, i, 2)),
              o !== null && (Xh(i, o, t, e), as(o, 2), ln(o)));
            break;
          }
        }
        t = t.return;
      }
  }
  function oc(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new HS();
      var u = new Set();
      o.set(t, u);
    } else ((u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u)));
    u.has(i) || ((Zu = !0), u.add(i), (e = YS.bind(null, e, t, i)), t.then(e, e));
  }
  function YS(e, t, i) {
    var o = e.pingCache;
    (o !== null && o.delete(t),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      Le === e &&
        (Re & i) === i &&
        (ze === 4 || (ze === 3 && (Re & 62914560) === Re && 300 > ve() - gr)
          ? (Ae & 2) === 0 && Ma(e, 0)
          : (Ju |= i),
        Ca === Re && (Ca = 0)),
      ln(e));
  }
  function Kg(e, t) {
    (t === 0 && (t = Vf()), (e = Ti(e, t)), e !== null && (as(e, t), ln(e)));
  }
  function GS(e) {
    var t = e.memoizedState,
      i = 0;
    (t !== null && (i = t.retryLane), Kg(e, i));
  }
  function KS(e, t) {
    var i = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (o !== null && o.delete(t), Kg(e, i));
  }
  function XS(e, t) {
    return ts(e, t);
  }
  var Rr = null,
    La = null,
    rc = !1,
    wr = !1,
    lc = !1,
    si = 0;
  function ln(e) {
    (e !== La && e.next === null && (La === null ? (Rr = La = e) : (La = La.next = e)),
      (wr = !0),
      rc || ((rc = !0), ZS()));
  }
  function qs(e, t) {
    if (!lc && wr) {
      lc = !0;
      do
        for (var i = !1, o = Rr; o !== null; ) {
          if (e !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var p = o.suspendedLanes,
                b = o.pingedLanes;
              ((f = (1 << (31 - _t(42 | e) + 1)) - 1),
                (f &= u & ~(p & ~b)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0));
            }
            f !== 0 && ((i = !0), Jg(o, f));
          } else
            ((f = Re),
              (f = Ao(
                o,
                o === Le ? f : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (f & 3) === 0 || is(o, f) || ((i = !0), Jg(o, f)));
          o = o.next;
        }
      while (i);
      lc = !1;
    }
  }
  function WS() {
    Xg();
  }
  function Xg() {
    wr = rc = !1;
    var e = 0;
    si !== 0 && lb() && (e = si);
    for (var t = ve(), i = null, o = Rr; o !== null; ) {
      var u = o.next,
        f = Wg(o, t);
      (f === 0
        ? ((o.next = null), i === null ? (Rr = u) : (i.next = u), u === null && (La = i))
        : ((i = o), (e !== 0 || (f & 3) !== 0) && (wr = !0)),
        (o = u));
    }
    ((Je !== 0 && Je !== 5) || qs(e), si !== 0 && (si = 0));
  }
  function Wg(e, t) {
    for (
      var i = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;
    ) {
      var p = 31 - _t(f),
        b = 1 << p,
        _ = u[p];
      (_ === -1
        ? ((b & i) === 0 || (b & o) !== 0) && (u[p] = _v(b, t))
        : _ <= t && (e.expiredLanes |= b),
        (f &= ~b));
    }
    if (
      ((t = Le),
      (i = Re),
      (i = Ao(e, e === t ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      (o = e.callbackNode),
      i === 0 || (e === t && (xe === 2 || xe === 9)) || e.cancelPendingCommit !== null)
    )
      return (o !== null && o !== null && Zi(o), (e.callbackNode = null), (e.callbackPriority = 0));
    if ((i & 3) === 0 || is(e, i)) {
      if (((t = i & -i), t === e.callbackPriority)) return t;
      switch ((o !== null && Zi(o), Tl(i))) {
        case 2:
        case 8:
          i = Ro;
          break;
        case 32:
          i = wo;
          break;
        case 268435456:
          i = Hf;
          break;
        default:
          i = wo;
      }
      return (
        (o = Zg.bind(null, e)),
        (i = ts(i, o)),
        (e.callbackPriority = t),
        (e.callbackNode = i),
        t
      );
    }
    return (
      o !== null && o !== null && Zi(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Zg(e, t) {
    if (Je !== 0 && Je !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var i = e.callbackNode;
    if (br() && e.callbackNode !== i) return null;
    var o = Re;
    return (
      (o = Ao(e, e === Le ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
      o === 0
        ? null
        : (Dg(e, o, t),
          Wg(e, ve()),
          e.callbackNode != null && e.callbackNode === i ? Zg.bind(null, e) : null)
    );
  }
  function Jg(e, t) {
    if (br()) return null;
    Dg(e, t, !0);
  }
  function ZS() {
    cb(function () {
      (Ae & 6) !== 0 ? ts(an, WS) : Xg();
    });
  }
  function uc() {
    if (si === 0) {
      var e = ya;
      (e === 0 && ((e = To), (To <<= 1), (To & 261888) === 0 && (To = 256)), (si = e));
    }
    return si;
  }
  function em(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Mo("" + e);
  }
  function tm(e, t) {
    var i = t.ownerDocument.createElement("input");
    return (
      (i.name = t.name),
      (i.value = t.value),
      e.id && i.setAttribute("form", e.id),
      t.parentNode.insertBefore(i, t),
      (e = new FormData(e)),
      i.parentNode.removeChild(i),
      e
    );
  }
  function JS(e, t, i, o, u) {
    if (t === "submit" && i && i.stateNode === u) {
      var f = em((u[gt] || null).action),
        p = o.submitter;
      p &&
        ((t = (t = p[gt] || null) ? em(t.formAction) : p.getAttribute("formAction")),
        t !== null && ((f = t), (p = null)));
      var b = new No("action", "action", null, o, u);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (si !== 0) {
                  var _ = p ? tm(u, p) : new FormData(u);
                  Ou(i, { pending: !0, data: _, method: u.method, action: f }, null, _);
                }
              } else
                typeof f == "function" &&
                  (b.preventDefault(),
                  (_ = p ? tm(u, p) : new FormData(u)),
                  Ou(i, { pending: !0, data: _, method: u.method, action: f }, f, _));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var cc = 0; cc < Fl.length; cc++) {
    var fc = Fl[cc],
      eb = fc.toLowerCase(),
      tb = fc[0].toUpperCase() + fc.slice(1);
    Wt(eb, "on" + tb);
  }
  (Wt(Ld, "onAnimationEnd"),
    Wt(Dd, "onAnimationIteration"),
    Wt(Nd, "onAnimationStart"),
    Wt("dblclick", "onDoubleClick"),
    Wt("focusin", "onFocus"),
    Wt("focusout", "onBlur"),
    Wt(yS, "onTransitionRun"),
    Wt(vS, "onTransitionStart"),
    Wt(SS, "onTransitionCancel"),
    Wt(Pd, "onTransitionEnd"),
    ia("onMouseEnter", ["mouseout", "mouseover"]),
    ia("onMouseLeave", ["mouseout", "mouseover"]),
    ia("onPointerEnter", ["pointerout", "pointerover"]),
    ia("onPointerLeave", ["pointerout", "pointerover"]),
    Si("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Si(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Si("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Si("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Si(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Si(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var zs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    nb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zs),
    );
  function nm(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i],
        u = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var p = o.length - 1; 0 <= p; p--) {
            var b = o[p],
              _ = b.instance,
              k = b.currentTarget;
            if (((b = b.listener), _ !== f && u.isPropagationStopped())) break e;
            ((f = b), (u.currentTarget = k));
            try {
              f(u);
            } catch (q) {
              Bo(q);
            }
            ((u.currentTarget = null), (f = _));
          }
        else
          for (p = 0; p < o.length; p++) {
            if (
              ((b = o[p]),
              (_ = b.instance),
              (k = b.currentTarget),
              (b = b.listener),
              _ !== f && u.isPropagationStopped())
            )
              break e;
            ((f = b), (u.currentTarget = k));
            try {
              f(u);
            } catch (q) {
              Bo(q);
            }
            ((u.currentTarget = null), (f = _));
          }
      }
    }
  }
  function be(e, t) {
    var i = t[_l];
    i === void 0 && (i = t[_l] = new Set());
    var o = e + "__bubble";
    i.has(o) || (im(t, e, 2, !1), i.add(o));
  }
  function dc(e, t, i) {
    var o = 0;
    (t && (o |= 4), im(i, e, o, t));
  }
  var Tr = "_reactListening" + Math.random().toString(36).slice(2);
  function hc(e) {
    if (!e[Tr]) {
      ((e[Tr] = !0),
        Xf.forEach(function (i) {
          i !== "selectionchange" && (nb.has(i) || dc(i, !1, e), dc(i, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Tr] || ((t[Tr] = !0), dc("selectionchange", !1, t));
    }
  }
  function im(e, t, i, o) {
    switch (Lm(t)) {
      case 2:
        var u = Mb;
        break;
      case 8:
        u = kb;
        break;
      default:
        u = Cc;
    }
    ((i = u.bind(null, t, i, e)),
      (u = void 0),
      !Dl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: u })
          : e.addEventListener(t, i, !0)
        : u !== void 0
          ? e.addEventListener(t, i, { passive: u })
          : e.addEventListener(t, i, !1));
  }
  function gc(e, t, i, o, u) {
    var f = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var p = o.tag;
        if (p === 3 || p === 4) {
          var b = o.stateNode.containerInfo;
          if (b === u) break;
          if (p === 4)
            for (p = o.return; p !== null; ) {
              var _ = p.tag;
              if ((_ === 3 || _ === 4) && p.stateNode.containerInfo === u) return;
              p = p.return;
            }
          for (; b !== null; ) {
            if (((p = ea(b)), p === null)) return;
            if (((_ = p.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
              o = f = p;
              continue e;
            }
            b = b.parentNode;
          }
        }
        o = o.return;
      }
    ld(function () {
      var k = f,
        q = kl(i),
        F = [];
      e: {
        var L = Ud.get(e);
        if (L !== void 0) {
          var N = No,
            se = e;
          switch (e) {
            case "keypress":
              if (Lo(i) === 0) break e;
            case "keydown":
            case "keyup":
              N = Kv;
              break;
            case "focusin":
              ((se = "focus"), (N = Bl));
              break;
            case "focusout":
              ((se = "blur"), (N = Bl));
              break;
            case "beforeblur":
            case "afterblur":
              N = Bl;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = fd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Bv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Zv;
              break;
            case Ld:
            case Dd:
            case Nd:
              N = Iv;
              break;
            case Pd:
              N = eS;
              break;
            case "scroll":
            case "scrollend":
              N = Pv;
              break;
            case "wheel":
              N = nS;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Hv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = hd;
              break;
            case "toggle":
            case "beforetoggle":
              N = aS;
          }
          var ce = (t & 4) !== 0,
            ke = !ce && (e === "scroll" || e === "scrollend"),
            C = ce ? (L !== null ? L + "Capture" : null) : L;
          ce = [];
          for (var x = k, M; x !== null; ) {
            var V = x;
            if (
              ((M = V.stateNode),
              (V = V.tag),
              (V !== 5 && V !== 26 && V !== 27) ||
                M === null ||
                C === null ||
                ((V = rs(x, C)), V != null && ce.push(Is(x, V, M))),
              ke)
            )
              break;
            x = x.return;
          }
          0 < ce.length && ((L = new N(L, se, null, i, q)), F.push({ event: L, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            L && i !== Ml && (se = i.relatedTarget || i.fromElement) && (ea(se) || se[Ji]))
          )
            break e;
          if (
            (N || L) &&
            ((L =
              q.window === q
                ? q
                : (L = q.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            N
              ? ((se = i.relatedTarget || i.toElement),
                (N = k),
                (se = se ? ea(se) : null),
                se !== null &&
                  ((ke = c(se)), (ce = se.tag), se !== ke || (ce !== 5 && ce !== 27 && ce !== 6)) &&
                  (se = null))
              : ((N = null), (se = k)),
            N !== se)
          ) {
            if (
              ((ce = fd),
              (V = "onMouseLeave"),
              (C = "onMouseEnter"),
              (x = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ce = hd), (V = "onPointerLeave"), (C = "onPointerEnter"), (x = "pointer")),
              (ke = N == null ? L : os(N)),
              (M = se == null ? L : os(se)),
              (L = new ce(V, x + "leave", N, i, q)),
              (L.target = ke),
              (L.relatedTarget = M),
              (V = null),
              ea(q) === k &&
                ((ce = new ce(C, x + "enter", se, i, q)),
                (ce.target = M),
                (ce.relatedTarget = ke),
                (V = ce)),
              (ke = V),
              N && se)
            )
              t: {
                for (ce = ib, C = N, x = se, M = 0, V = C; V; V = ce(V)) M++;
                V = 0;
                for (var ue = x; ue; ue = ce(ue)) V++;
                for (; 0 < M - V; ) ((C = ce(C)), M--);
                for (; 0 < V - M; ) ((x = ce(x)), V--);
                for (; M--; ) {
                  if (C === x || (x !== null && C === x.alternate)) {
                    ce = C;
                    break t;
                  }
                  ((C = ce(C)), (x = ce(x)));
                }
                ce = null;
              }
            else ce = null;
            (N !== null && am(F, L, N, ce, !1),
              se !== null && ke !== null && am(F, ke, se, ce, !0));
          }
        }
        e: {
          if (
            ((L = k ? os(k) : window),
            (N = L.nodeName && L.nodeName.toLowerCase()),
            N === "select" || (N === "input" && L.type === "file"))
          )
            var _e = Rd;
          else if (Sd(L))
            if (wd) _e = gS;
            else {
              _e = dS;
              var oe = fS;
            }
          else
            ((N = L.nodeName),
              !N || N.toLowerCase() !== "input" || (L.type !== "checkbox" && L.type !== "radio")
                ? k && Ol(k.elementType) && (_e = Rd)
                : (_e = hS));
          if (_e && (_e = _e(e, k))) {
            bd(F, _e, i, q);
            break e;
          }
          (oe && oe(e, L, k),
            e === "focusout" &&
              k &&
              L.type === "number" &&
              k.memoizedProps.value != null &&
              Cl(L, "number", L.value));
        }
        switch (((oe = k ? os(k) : window), e)) {
          case "focusin":
            (Sd(oe) || oe.contentEditable === "true") && ((ua = oe), (Vl = k), (ms = null));
            break;
          case "focusout":
            ms = Vl = ua = null;
            break;
          case "mousedown":
            Ql = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ql = !1), Md(F, i, q));
            break;
          case "selectionchange":
            if (pS) break;
          case "keydown":
          case "keyup":
            Md(F, i, q);
        }
        var me;
        if (zl)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          la
            ? yd(e, i) && (we = "onCompositionEnd")
            : e === "keydown" && i.keyCode === 229 && (we = "onCompositionStart");
        (we &&
          (gd &&
            i.locale !== "ko" &&
            (la || we !== "onCompositionStart"
              ? we === "onCompositionEnd" && la && (me = ud())
              : ((Vn = q), (Nl = "value" in Vn ? Vn.value : Vn.textContent), (la = !0))),
          (oe = _r(k, we)),
          0 < oe.length &&
            ((we = new dd(we, e, null, i, q)),
            F.push({ event: we, listeners: oe }),
            me ? (we.data = me) : ((me = vd(i)), me !== null && (we.data = me)))),
          (me = oS ? rS(e, i) : lS(e, i)) &&
            ((we = _r(k, "onBeforeInput")),
            0 < we.length &&
              ((oe = new dd("onBeforeInput", "beforeinput", null, i, q)),
              F.push({ event: oe, listeners: we }),
              (oe.data = me))),
          JS(F, e, k, i, q));
      }
      nm(F, t);
    });
  }
  function Is(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function _r(e, t) {
    for (var i = t + "Capture", o = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          f === null ||
          ((u = rs(e, i)),
          u != null && o.unshift(Is(e, u, f)),
          (u = rs(e, t)),
          u != null && o.push(Is(e, u, f))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function ib(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function am(e, t, i, o, u) {
    for (var f = t._reactName, p = []; i !== null && i !== o; ) {
      var b = i,
        _ = b.alternate,
        k = b.stateNode;
      if (((b = b.tag), _ !== null && _ === o)) break;
      ((b !== 5 && b !== 26 && b !== 27) ||
        k === null ||
        ((_ = k),
        u
          ? ((k = rs(i, f)), k != null && p.unshift(Is(i, k, _)))
          : u || ((k = rs(i, f)), k != null && p.push(Is(i, k, _)))),
        (i = i.return));
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var ab = /\r\n?/g,
    sb = /\u0000|\uFFFD/g;
  function sm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ab,
        `
`,
      )
      .replace(sb, "");
  }
  function om(e, t) {
    return ((t = sm(t)), sm(e) === t);
  }
  function Me(e, t, i, o, u, f) {
    switch (i) {
      case "children":
        typeof o == "string"
          ? t === "body" || (t === "textarea" && o === "") || sa(e, o)
          : (typeof o == "number" || typeof o == "bigint") && t !== "body" && sa(e, "" + o);
        break;
      case "className":
        Co(e, "class", o);
        break;
      case "tabIndex":
        Co(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Co(e, i, o);
        break;
      case "style":
        od(e, o, f);
        break;
      case "data":
        if (t !== "object") {
          Co(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        ((o = Mo("" + o)), e.setAttribute(i, o));
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof f == "function" &&
            (i === "formAction"
              ? (t !== "input" && Me(e, t, "name", u.name, u, null),
                Me(e, t, "formEncType", u.formEncType, u, null),
                Me(e, t, "formMethod", u.formMethod, u, null),
                Me(e, t, "formTarget", u.formTarget, u, null))
              : (Me(e, t, "encType", u.encType, u, null),
                Me(e, t, "method", u.method, u, null),
                Me(e, t, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        ((o = Mo("" + o)), e.setAttribute(i, o));
        break;
      case "onClick":
        o != null && (e.onclick = bn);
        break;
      case "onScroll":
        o != null && be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (((i = o.__html), i != null)) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        ((i = Mo("" + o)), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(i, "" + o)
          : e.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(i, "")
          : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(i, "")
          : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol"
            ? e.setAttribute(i, o)
            : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o
          ? e.setAttribute(i, o)
          : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(i)
          : e.setAttribute(i, o);
        break;
      case "popover":
        (be("beforetoggle", e), be("toggle", e), xo(e, "popover", o));
        break;
      case "xlinkActuate":
        Sn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Sn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Sn(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Sn(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Sn(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Sn(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Sn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Sn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Sn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        xo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || (i[0] !== "o" && i[0] !== "O") || (i[1] !== "n" && i[1] !== "N")) &&
          ((i = Dv.get(i) || i), xo(e, i, o));
    }
  }
  function mc(e, t, i, o, u, f) {
    switch (i) {
      case "style":
        od(e, o, f);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(r(61));
          if (((i = o.__html), i != null)) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? sa(e, o)
          : (typeof o == "number" || typeof o == "bigint") && sa(e, "" + o);
        break;
      case "onScroll":
        o != null && be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && be("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = bn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Wf.hasOwnProperty(i))
          e: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((u = i.endsWith("Capture")),
              (t = i.slice(2, u ? i.length - 7 : void 0)),
              (f = e[gt] || null),
              (f = f != null ? f[i] : null),
              typeof f == "function" && e.removeEventListener(t, f, u),
              typeof o == "function")
            ) {
              (typeof f != "function" &&
                f !== null &&
                (i in e ? (e[i] = null) : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(t, o, u));
              break e;
            }
            i in e ? (e[i] = o) : o === !0 ? e.setAttribute(i, "") : xo(e, i, o);
          }
    }
  }
  function rt(e, t, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (be("error", e), be("load", e));
        var o = !1,
          u = !1,
          f;
        for (f in i)
          if (i.hasOwnProperty(f)) {
            var p = i[f];
            if (p != null)
              switch (f) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Me(e, t, f, p, i, null);
              }
          }
        (u && Me(e, t, "srcSet", i.srcSet, i, null), o && Me(e, t, "src", i.src, i, null));
        return;
      case "input":
        be("invalid", e);
        var b = (f = p = u = null),
          _ = null,
          k = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var q = i[o];
            if (q != null)
              switch (o) {
                case "name":
                  u = q;
                  break;
                case "type":
                  p = q;
                  break;
                case "checked":
                  _ = q;
                  break;
                case "defaultChecked":
                  k = q;
                  break;
                case "value":
                  f = q;
                  break;
                case "defaultValue":
                  b = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(r(137, t));
                  break;
                default:
                  Me(e, t, o, q, i, null);
              }
          }
        nd(e, f, b, _, k, p, u, !1);
        return;
      case "select":
        (be("invalid", e), (o = p = f = null));
        for (u in i)
          if (i.hasOwnProperty(u) && ((b = i[u]), b != null))
            switch (u) {
              case "value":
                f = b;
                break;
              case "defaultValue":
                p = b;
                break;
              case "multiple":
                o = b;
              default:
                Me(e, t, u, b, i, null);
            }
        ((t = f),
          (i = p),
          (e.multiple = !!o),
          t != null ? aa(e, !!o, t, !1) : i != null && aa(e, !!o, i, !0));
        return;
      case "textarea":
        (be("invalid", e), (f = u = o = null));
        for (p in i)
          if (i.hasOwnProperty(p) && ((b = i[p]), b != null))
            switch (p) {
              case "value":
                o = b;
                break;
              case "defaultValue":
                u = b;
                break;
              case "children":
                f = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(91));
                break;
              default:
                Me(e, t, p, b, i, null);
            }
        ad(e, o, u, f);
        return;
      case "option":
        for (_ in i)
          if (i.hasOwnProperty(_) && ((o = i[_]), o != null))
            switch (_) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Me(e, t, _, o, i, null);
            }
        return;
      case "dialog":
        (be("beforetoggle", e), be("toggle", e), be("cancel", e), be("close", e));
        break;
      case "iframe":
      case "object":
        be("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < zs.length; o++) be(zs[o], e);
        break;
      case "image":
        (be("error", e), be("load", e));
        break;
      case "details":
        be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (be("error", e), be("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (k in i)
          if (i.hasOwnProperty(k) && ((o = i[k]), o != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Me(e, t, k, o, i, null);
            }
        return;
      default:
        if (Ol(t)) {
          for (q in i)
            i.hasOwnProperty(q) && ((o = i[q]), o !== void 0 && mc(e, t, q, o, i, void 0));
          return;
        }
    }
    for (b in i) i.hasOwnProperty(b) && ((o = i[b]), o != null && Me(e, t, b, o, i, null));
  }
  function ob(e, t, i, o) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          f = null,
          p = null,
          b = null,
          _ = null,
          k = null,
          q = null;
        for (N in i) {
          var F = i[N];
          if (i.hasOwnProperty(N) && F != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = F;
              default:
                o.hasOwnProperty(N) || Me(e, t, N, null, o, F);
            }
        }
        for (var L in o) {
          var N = o[L];
          if (((F = i[L]), o.hasOwnProperty(L) && (N != null || F != null)))
            switch (L) {
              case "type":
                f = N;
                break;
              case "name":
                u = N;
                break;
              case "checked":
                k = N;
                break;
              case "defaultChecked":
                q = N;
                break;
              case "value":
                p = N;
                break;
              case "defaultValue":
                b = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(r(137, t));
                break;
              default:
                N !== F && Me(e, t, L, N, o, F);
            }
        }
        xl(e, p, b, _, k, q, f, u);
        return;
      case "select":
        N = p = b = L = null;
        for (f in i)
          if (((_ = i[f]), i.hasOwnProperty(f) && _ != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                N = _;
              default:
                o.hasOwnProperty(f) || Me(e, t, f, null, o, _);
            }
        for (u in o)
          if (((f = o[u]), (_ = i[u]), o.hasOwnProperty(u) && (f != null || _ != null)))
            switch (u) {
              case "value":
                L = f;
                break;
              case "defaultValue":
                b = f;
                break;
              case "multiple":
                p = f;
              default:
                f !== _ && Me(e, t, u, f, o, _);
            }
        ((t = b),
          (i = p),
          (o = N),
          L != null
            ? aa(e, !!i, L, !1)
            : !!o != !!i && (t != null ? aa(e, !!i, t, !0) : aa(e, !!i, i ? [] : "", !1)));
        return;
      case "textarea":
        N = L = null;
        for (b in i)
          if (((u = i[b]), i.hasOwnProperty(b) && u != null && !o.hasOwnProperty(b)))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Me(e, t, b, null, o, u);
            }
        for (p in o)
          if (((u = o[p]), (f = i[p]), o.hasOwnProperty(p) && (u != null || f != null)))
            switch (p) {
              case "value":
                L = u;
                break;
              case "defaultValue":
                N = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== f && Me(e, t, p, u, o, f);
            }
        id(e, L, N);
        return;
      case "option":
        for (var se in i)
          if (((L = i[se]), i.hasOwnProperty(se) && L != null && !o.hasOwnProperty(se)))
            switch (se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Me(e, t, se, null, o, L);
            }
        for (_ in o)
          if (((L = o[_]), (N = i[_]), o.hasOwnProperty(_) && L !== N && (L != null || N != null)))
            switch (_) {
              case "selected":
                e.selected = L && typeof L != "function" && typeof L != "symbol";
                break;
              default:
                Me(e, t, _, L, o, N);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ce in i)
          ((L = i[ce]),
            i.hasOwnProperty(ce) && L != null && !o.hasOwnProperty(ce) && Me(e, t, ce, null, o, L));
        for (k in o)
          if (((L = o[k]), (N = i[k]), o.hasOwnProperty(k) && L !== N && (L != null || N != null)))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(r(137, t));
                break;
              default:
                Me(e, t, k, L, o, N);
            }
        return;
      default:
        if (Ol(t)) {
          for (var ke in i)
            ((L = i[ke]),
              i.hasOwnProperty(ke) &&
                L !== void 0 &&
                !o.hasOwnProperty(ke) &&
                mc(e, t, ke, void 0, o, L));
          for (q in o)
            ((L = o[q]),
              (N = i[q]),
              !o.hasOwnProperty(q) ||
                L === N ||
                (L === void 0 && N === void 0) ||
                mc(e, t, q, L, o, N));
          return;
        }
    }
    for (var C in i)
      ((L = i[C]),
        i.hasOwnProperty(C) && L != null && !o.hasOwnProperty(C) && Me(e, t, C, null, o, L));
    for (F in o)
      ((L = o[F]),
        (N = i[F]),
        !o.hasOwnProperty(F) || L === N || (L == null && N == null) || Me(e, t, F, L, o, N));
  }
  function rm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function rb() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, i = performance.getEntriesByType("resource"), o = 0;
        o < i.length;
        o++
      ) {
        var u = i[o],
          f = u.transferSize,
          p = u.initiatorType,
          b = u.duration;
        if (f && b && rm(p)) {
          for (p = 0, b = u.responseEnd, o += 1; o < i.length; o++) {
            var _ = i[o],
              k = _.startTime;
            if (k > b) break;
            var q = _.transferSize,
              F = _.initiatorType;
            q && rm(F) && ((_ = _.responseEnd), (p += q * (_ < b ? 1 : (b - k) / (_ - k))));
          }
          if ((--o, (t += (8 * (f + p)) / (u.duration / 1e3)), e++, 10 < e)) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var pc = null,
    yc = null;
  function Er(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function lm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function um(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function vc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Sc = null;
  function lb() {
    var e = window.event;
    return e && e.type === "popstate" ? (e === Sc ? !1 : ((Sc = e), !0)) : ((Sc = null), !1);
  }
  var cm = typeof setTimeout == "function" ? setTimeout : void 0,
    ub = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fm = typeof Promise == "function" ? Promise : void 0,
    cb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof fm < "u"
          ? function (e) {
              return fm.resolve(null).then(e).catch(fb);
            }
          : cm;
  function fb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function oi(e) {
    return e === "head";
  }
  function dm(e, t) {
    var i = t,
      o = 0;
    do {
      var u = i.nextSibling;
      if ((e.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === "/$" || i === "/&")) {
          if (o === 0) {
            (e.removeChild(u), Ua(t));
            return;
          }
          o--;
        } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&") o++;
        else if (i === "html") js(e.ownerDocument.documentElement);
        else if (i === "head") {
          ((i = e.ownerDocument.head), js(i));
          for (var f = i.firstChild; f; ) {
            var p = f.nextSibling,
              b = f.nodeName;
            (f[ss] ||
              b === "SCRIPT" ||
              b === "STYLE" ||
              (b === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              i.removeChild(f),
              (f = p));
          }
        } else i === "body" && js(e.ownerDocument.body);
      i = u;
    } while (i);
    Ua(t);
  }
  function hm(e, t) {
    var i = e;
    e = 0;
    do {
      var o = i.nextSibling;
      if (
        (i.nodeType === 1
          ? t
            ? ((i._stashedDisplay = i.style.display), (i.style.display = "none"))
            : ((i.style.display = i._stashedDisplay || ""),
              i.getAttribute("style") === "" && i.removeAttribute("style"))
          : i.nodeType === 3 &&
            (t
              ? ((i._stashedText = i.nodeValue), (i.nodeValue = ""))
              : (i.nodeValue = i._stashedText || "")),
        o && o.nodeType === 8)
      )
        if (((i = o.data), i === "/$")) {
          if (e === 0) break;
          e--;
        } else (i !== "$" && i !== "$?" && i !== "$~" && i !== "$!") || e++;
      i = o;
    } while (i);
  }
  function bc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (((t = t.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (bc(i), El(i));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function db(e, t, i, o) {
    for (; e.nodeType === 1; ) {
      var u = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[ss])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== u.rel ||
                e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = Vt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function hb(e, t, i) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i) ||
        ((e = Vt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function gm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t) ||
        ((e = Vt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Rc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function wc(e) {
    return e.data === "$!" || (e.data === "$?" && e.ownerDocument.readyState !== "loading");
  }
  function gb(e, t) {
    var i = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || i.readyState !== "loading") t();
    else {
      var o = function () {
        (t(), i.removeEventListener("DOMContentLoaded", o));
      };
      (i.addEventListener("DOMContentLoaded", o), (e._reactRetry = o));
    }
  }
  function Vt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Tc = null;
  function mm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "/$" || i === "/&") {
          if (t === 0) return Vt(e.nextSibling);
          t--;
        } else (i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&") || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function pm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if (t === 0) return e;
          t--;
        } else (i !== "/$" && i !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ym(e, t, i) {
    switch (((t = Er(i)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function js(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    El(e);
  }
  var Qt = new Map(),
    vm = new Set();
  function Ar(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Un = j.d;
  j.d = { f: mb, r: pb, D: yb, C: vb, L: Sb, m: bb, X: wb, S: Rb, M: Tb };
  function mb() {
    var e = Un.f(),
      t = yr();
    return e || t;
  }
  function pb(e) {
    var t = ta(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ph(t) : Un.r(e);
  }
  var Da = typeof document > "u" ? null : document;
  function Sm(e, t, i) {
    var o = Da;
    if (o && typeof t == "string" && t) {
      var u = Ut(t);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof i == "string" && (u += '[crossorigin="' + i + '"]'),
        vm.has(u) ||
          (vm.add(u),
          (e = { rel: e, crossOrigin: i, href: t }),
          o.querySelector(u) === null &&
            ((t = o.createElement("link")), rt(t, "link", e), et(t), o.head.appendChild(t))));
    }
  }
  function yb(e) {
    (Un.D(e), Sm("dns-prefetch", e, null));
  }
  function vb(e, t) {
    (Un.C(e, t), Sm("preconnect", e, t));
  }
  function Sb(e, t, i) {
    Un.L(e, t, i);
    var o = Da;
    if (o && e && t) {
      var u = 'link[rel="preload"][as="' + Ut(t) + '"]';
      t === "image" && i && i.imageSrcSet
        ? ((u += '[imagesrcset="' + Ut(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" && (u += '[imagesizes="' + Ut(i.imageSizes) + '"]'))
        : (u += '[href="' + Ut(e) + '"]');
      var f = u;
      switch (t) {
        case "style":
          f = Na(e);
          break;
        case "script":
          f = Pa(e);
      }
      Qt.has(f) ||
        ((e = v(
          { rel: "preload", href: t === "image" && i && i.imageSrcSet ? void 0 : e, as: t },
          i,
        )),
        Qt.set(f, e),
        o.querySelector(u) !== null ||
          (t === "style" && o.querySelector(Hs(f))) ||
          (t === "script" && o.querySelector(Vs(f))) ||
          ((t = o.createElement("link")), rt(t, "link", e), et(t), o.head.appendChild(t)));
    }
  }
  function bb(e, t) {
    Un.m(e, t);
    var i = Da;
    if (i && e) {
      var o = t && typeof t.as == "string" ? t.as : "script",
        u = 'link[rel="modulepreload"][as="' + Ut(o) + '"][href="' + Ut(e) + '"]',
        f = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Pa(e);
      }
      if (
        !Qt.has(f) &&
        ((e = v({ rel: "modulepreload", href: e }, t)), Qt.set(f, e), i.querySelector(u) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Vs(f))) return;
        }
        ((o = i.createElement("link")), rt(o, "link", e), et(o), i.head.appendChild(o));
      }
    }
  }
  function Rb(e, t, i) {
    Un.S(e, t, i);
    var o = Da;
    if (o && e) {
      var u = na(o).hoistableStyles,
        f = Na(e);
      t = t || "default";
      var p = u.get(f);
      if (!p) {
        var b = { loading: 0, preload: null };
        if ((p = o.querySelector(Hs(f)))) b.loading = 5;
        else {
          ((e = v({ rel: "stylesheet", href: e, "data-precedence": t }, i)),
            (i = Qt.get(f)) && _c(e, i));
          var _ = (p = o.createElement("link"));
          (et(_),
            rt(_, "link", e),
            (_._p = new Promise(function (k, q) {
              ((_.onload = k), (_.onerror = q));
            })),
            _.addEventListener("load", function () {
              b.loading |= 1;
            }),
            _.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            xr(p, t, o));
        }
        ((p = { type: "stylesheet", instance: p, count: 1, state: b }), u.set(f, p));
      }
    }
  }
  function wb(e, t) {
    Un.X(e, t);
    var i = Da;
    if (i && e) {
      var o = na(i).hoistableScripts,
        u = Pa(e),
        f = o.get(u);
      f ||
        ((f = i.querySelector(Vs(u))),
        f ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = Qt.get(u)) && Ec(e, t),
          (f = i.createElement("script")),
          et(f),
          rt(f, "link", e),
          i.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        o.set(u, f));
    }
  }
  function Tb(e, t) {
    Un.M(e, t);
    var i = Da;
    if (i && e) {
      var o = na(i).hoistableScripts,
        u = Pa(e),
        f = o.get(u);
      f ||
        ((f = i.querySelector(Vs(u))),
        f ||
          ((e = v({ src: e, async: !0, type: "module" }, t)),
          (t = Qt.get(u)) && Ec(e, t),
          (f = i.createElement("script")),
          et(f),
          rt(f, "link", e),
          i.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        o.set(u, f));
    }
  }
  function bm(e, t, i, o) {
    var u = (u = pe.current) ? Ar(u) : null;
    if (!u) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((t = Na(i.href)),
            (i = na(u).hoistableStyles),
            (o = i.get(t)),
            o || ((o = { type: "style", instance: null, count: 0, state: null }), i.set(t, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          i.rel === "stylesheet" &&
          typeof i.href == "string" &&
          typeof i.precedence == "string"
        ) {
          e = Na(i.href);
          var f = na(u).hoistableStyles,
            p = f.get(e);
          if (
            (p ||
              ((u = u.ownerDocument || u),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, p),
              (f = u.querySelector(Hs(e))) && !f._p && ((p.instance = f), (p.state.loading = 5)),
              Qt.has(e) ||
                ((i = {
                  rel: "preload",
                  as: "style",
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                Qt.set(e, i),
                f || _b(u, e, i, p.state))),
            t && o === null)
          )
            throw Error(r(528, ""));
          return p;
        }
        if (t && o !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = i.async),
          (i = i.src),
          typeof i == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = Pa(i)),
              (i = na(u).hoistableScripts),
              (o = i.get(t)),
              o || ((o = { type: "script", instance: null, count: 0, state: null }), i.set(t, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function Na(e) {
    return 'href="' + Ut(e) + '"';
  }
  function Hs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Rm(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function _b(e, t, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (o.loading = 1)
      : ((t = e.createElement("link")),
        (o.preload = t),
        t.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        rt(t, "link", i),
        et(t),
        e.head.appendChild(t));
  }
  function Pa(e) {
    return '[src="' + Ut(e) + '"]';
  }
  function Vs(e) {
    return "script[async]" + e;
  }
  function wm(e, t, i) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + Ut(i.href) + '"]');
          if (o) return ((t.instance = o), et(o), o);
          var u = v({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            et(o),
            rt(o, "style", u),
            xr(o, i.precedence, e),
            (t.instance = o)
          );
        case "stylesheet":
          u = Na(i.href);
          var f = e.querySelector(Hs(u));
          if (f) return ((t.state.loading |= 4), (t.instance = f), et(f), f);
          ((o = Rm(i)),
            (u = Qt.get(u)) && _c(o, u),
            (f = (e.ownerDocument || e).createElement("link")),
            et(f));
          var p = f;
          return (
            (p._p = new Promise(function (b, _) {
              ((p.onload = b), (p.onerror = _));
            })),
            rt(f, "link", o),
            (t.state.loading |= 4),
            xr(f, i.precedence, e),
            (t.instance = f)
          );
        case "script":
          return (
            (f = Pa(i.src)),
            (u = e.querySelector(Vs(f)))
              ? ((t.instance = u), et(u), u)
              : ((o = i),
                (u = Qt.get(f)) && ((o = v({}, i)), Ec(o, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                et(u),
                rt(u, "link", o),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((o = t.instance), (t.state.loading |= 4), xr(o, i.precedence, e));
    return t.instance;
  }
  function xr(e, t, i) {
    for (
      var o = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = o.length ? o[o.length - 1] : null,
        f = u,
        p = 0;
      p < o.length;
      p++
    ) {
      var b = o[p];
      if (b.dataset.precedence === t) f = b;
      else if (f !== u) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = i.nodeType === 9 ? i.head : i), t.insertBefore(e, t.firstChild));
  }
  function _c(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Ec(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Cr = null;
  function Tm(e, t, i) {
    if (Cr === null) {
      var o = new Map(),
        u = (Cr = new Map());
      u.set(i, o);
    } else ((u = Cr), (o = u.get(i)), o || ((o = new Map()), u.set(i, o)));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), u = 0; u < i.length; u++) {
      var f = i[u];
      if (
        !(f[ss] || f[it] || (e === "link" && f.getAttribute("rel") === "stylesheet")) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = f.getAttribute(t) || "";
        p = e + p;
        var b = o.get(p);
        b ? b.push(f) : o.set(p, [f]);
      }
    }
    return o;
  }
  function _m(e, t, i) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(i, t === "title" ? e.querySelector("head > title") : null));
  }
  function Eb(e, t, i) {
    if (i === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return ((e = t.disabled), typeof t.precedence == "string" && e == null);
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Em(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Ab(e, t, i, o) {
    if (
      i.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var u = Na(o.href),
          f = t.querySelector(Hs(u));
        if (f) {
          ((t = f._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Or.bind(e)), t.then(e, e)),
            (i.state.loading |= 4),
            (i.instance = f),
            et(f));
          return;
        }
        ((f = t.ownerDocument || t),
          (o = Rm(o)),
          (u = Qt.get(u)) && _c(o, u),
          (f = f.createElement("link")),
          et(f));
        var p = f;
        ((p._p = new Promise(function (b, _) {
          ((p.onload = b), (p.onerror = _));
        })),
          rt(f, "link", o),
          (i.instance = f));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(i, t),
        (t = i.state.preload) &&
          (i.state.loading & 3) === 0 &&
          (e.count++,
          (i = Or.bind(e)),
          t.addEventListener("load", i),
          t.addEventListener("error", i)));
    }
  }
  var Ac = 0;
  function xb(e, t) {
    return (
      e.stylesheets && e.count === 0 && kr(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (i) {
            var o = setTimeout(function () {
              if ((e.stylesheets && kr(e, e.stylesheets), e.unsuspend)) {
                var f = e.unsuspend;
                ((e.unsuspend = null), f());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Ac === 0 && (Ac = 62500 * rb());
            var u = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 && (e.stylesheets && kr(e, e.stylesheets), e.unsuspend))
                ) {
                  var f = e.unsuspend;
                  ((e.unsuspend = null), f());
                }
              },
              (e.imgBytes > Ac ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = i),
              function () {
                ((e.unsuspend = null), clearTimeout(o), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Or() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) kr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Mr = null;
  function kr(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Mr = new Map()), t.forEach(Cb, e), (Mr = null), Or.call(e)));
  }
  function Cb(e, t) {
    if (!(t.state.loading & 4)) {
      var i = Mr.get(e);
      if (i) var o = i.get(null);
      else {
        ((i = new Map()), Mr.set(e, i));
        for (
          var u = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0;
          f < u.length;
          f++
        ) {
          var p = u[f];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (i.set(p.dataset.precedence, p), (o = p));
        }
        o && i.set(null, o);
      }
      ((u = t.instance),
        (p = u.getAttribute("data-precedence")),
        (f = i.get(p) || o),
        f === o && i.set(null, u),
        i.set(p, u),
        this.count++,
        (o = Or.bind(this)),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        f
          ? f.parentNode.insertBefore(u, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Qs = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0,
  };
  function Ob(e, t, i, o, u, f, p, b, _) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Rl(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Rl(0)),
      (this.hiddenUpdates = Rl(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = u),
      (this.onCaughtError = f),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = _),
      (this.incompleteTransitions = new Map()));
  }
  function Am(e, t, i, o, u, f, p, b, _, k, q, F) {
    return (
      (e = new Ob(e, t, i, p, _, k, q, F, b)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = At(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = su()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: o, isDehydrated: i, cache: t }),
      uu(f),
      e
    );
  }
  function xm(e) {
    return e ? ((e = da), e) : da;
  }
  function Cm(e, t, i, o, u, f) {
    ((u = xm(u)),
      o.context === null ? (o.context = u) : (o.pendingContext = u),
      (o = Kn(t)),
      (o.payload = { element: i }),
      (f = f === void 0 ? null : f),
      f !== null && (o.callback = f),
      (i = Xn(e, o, t)),
      i !== null && (bt(i, e, t), ws(i, e, t)));
  }
  function Om(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function xc(e, t) {
    (Om(e, t), (e = e.alternate) && Om(e, t));
  }
  function Mm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ti(e, 67108864);
      (t !== null && bt(t, e, 67108864), xc(e, 67108864));
    }
  }
  function km(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = kt();
      t = wl(t);
      var i = Ti(e, t);
      (i !== null && bt(i, e, t), xc(e, t));
    }
  }
  var Lr = !0;
  function Mb(e, t, i, o) {
    var u = O.T;
    O.T = null;
    var f = j.p;
    try {
      ((j.p = 2), Cc(e, t, i, o));
    } finally {
      ((j.p = f), (O.T = u));
    }
  }
  function kb(e, t, i, o) {
    var u = O.T;
    O.T = null;
    var f = j.p;
    try {
      ((j.p = 8), Cc(e, t, i, o));
    } finally {
      ((j.p = f), (O.T = u));
    }
  }
  function Cc(e, t, i, o) {
    if (Lr) {
      var u = Oc(o);
      if (u === null) (gc(e, t, o, Dr, i), Dm(e, o));
      else if (Db(u, e, t, i, o)) o.stopPropagation();
      else if ((Dm(e, o), t & 4 && -1 < Lb.indexOf(e))) {
        for (; u !== null; ) {
          var f = ta(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var p = vi(f.pendingLanes);
                  if (p !== 0) {
                    var b = f;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; p; ) {
                      var _ = 1 << (31 - _t(p));
                      ((b.entanglements[1] |= _), (p &= ~_));
                    }
                    (ln(f), (Ae & 6) === 0 && ((mr = ve() + 500), qs(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((b = Ti(f, 2)), b !== null && bt(b, f, 2), yr(), xc(f, 2));
            }
          if (((f = Oc(o)), f === null && gc(e, t, o, Dr, i), f === u)) break;
          u = f;
        }
        u !== null && o.stopPropagation();
      } else gc(e, t, o, null, i);
    }
  }
  function Oc(e) {
    return ((e = kl(e)), Mc(e));
  }
  var Dr = null;
  function Mc(e) {
    if (((Dr = null), (e = ea(e)), e !== null)) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (i === 31) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Dr = e), null);
  }
  function Lm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (lt()) {
          case an:
            return 2;
          case Ro:
            return 8;
          case wo:
          case vv:
            return 32;
          case Hf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kc = !1,
    ri = null,
    li = null,
    ui = null,
    $s = new Map(),
    Fs = new Map(),
    ci = [],
    Lb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Dm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ri = null;
        break;
      case "dragenter":
      case "dragleave":
        li = null;
        break;
      case "mouseover":
      case "mouseout":
        ui = null;
        break;
      case "pointerover":
      case "pointerout":
        $s.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fs.delete(t.pointerId);
    }
  }
  function Ys(e, t, i, o, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: o,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = ta(t)), t !== null && Mm(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Db(e, t, i, o, u) {
    switch (t) {
      case "focusin":
        return ((ri = Ys(ri, e, t, i, o, u)), !0);
      case "dragenter":
        return ((li = Ys(li, e, t, i, o, u)), !0);
      case "mouseover":
        return ((ui = Ys(ui, e, t, i, o, u)), !0);
      case "pointerover":
        var f = u.pointerId;
        return ($s.set(f, Ys($s.get(f) || null, e, t, i, o, u)), !0);
      case "gotpointercapture":
        return ((f = u.pointerId), Fs.set(f, Ys(Fs.get(f) || null, e, t, i, o, u)), !0);
    }
    return !1;
  }
  function Nm(e) {
    var t = ea(e.target);
    if (t !== null) {
      var i = c(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = d(i)), t !== null)) {
            ((e.blockedOn = t),
              Gf(e.priority, function () {
                km(i);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = g(i)), t !== null)) {
            ((e.blockedOn = t),
              Gf(e.priority, function () {
                km(i);
              }));
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Nr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Oc(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(i.type, i);
        ((Ml = o), i.target.dispatchEvent(o), (Ml = null));
      } else return ((t = ta(i)), t !== null && Mm(t), (e.blockedOn = i), !1);
      t.shift();
    }
    return !0;
  }
  function Pm(e, t, i) {
    Nr(e) && i.delete(t);
  }
  function Nb() {
    ((kc = !1),
      ri !== null && Nr(ri) && (ri = null),
      li !== null && Nr(li) && (li = null),
      ui !== null && Nr(ui) && (ui = null),
      $s.forEach(Pm),
      Fs.forEach(Pm));
  }
  function Pr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      kc || ((kc = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Nb)));
  }
  var Ur = null;
  function Um(e) {
    Ur !== e &&
      ((Ur = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Ur === e && (Ur = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t],
            o = e[t + 1],
            u = e[t + 2];
          if (typeof o != "function") {
            if (Mc(o || i) === null) continue;
            break;
          }
          var f = ta(i);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ou(f, { pending: !0, data: u, method: i.method, action: o }, o, u));
        }
      }));
  }
  function Ua(e) {
    function t(_) {
      return Pr(_, e);
    }
    (ri !== null && Pr(ri, e),
      li !== null && Pr(li, e),
      ui !== null && Pr(ui, e),
      $s.forEach(t),
      Fs.forEach(t));
    for (var i = 0; i < ci.length; i++) {
      var o = ci[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < ci.length && ((i = ci[0]), i.blockedOn === null); )
      (Nm(i), i.blockedOn === null && ci.shift());
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (o = 0; o < i.length; o += 3) {
        var u = i[o],
          f = i[o + 1],
          p = u[gt] || null;
        if (typeof f == "function") p || Um(i);
        else if (p) {
          var b = null;
          if (f && f.hasAttribute("formAction")) {
            if (((u = f), (p = f[gt] || null))) b = p.formAction;
            else if (Mc(u) !== null) continue;
          } else b = p.action;
          (typeof b == "function" ? (i[o + 1] = b) : (i.splice(o, 3), (o -= 3)), Um(i));
        }
      }
  }
  function Bm() {
    function e(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (p) {
              return (u = p);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), o || setTimeout(i, 20));
    }
    function i() {
      if (!o && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var o = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(i, 100),
        function () {
          ((o = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function Lc(e) {
    this._internalRoot = e;
  }
  ((Br.prototype.render = Lc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var i = t.current,
        o = kt();
      Cm(i, o, e, t, null, null);
    }),
    (Br.prototype.unmount = Lc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Cm(e.current, 2, null, e, null, null), yr(), (t[Ji] = null));
        }
      }));
  function Br(e) {
    this._internalRoot = e;
  }
  Br.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Yf();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < ci.length && t !== 0 && t < ci[i].priority; i++);
      (ci.splice(i, 0, e), i === 0 && Nm(e));
    }
  };
  var qm = n.version;
  if (qm !== "19.2.4") throw Error(r(527, qm, "19.2.4"));
  j.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return ((e = m(t)), (e = e !== null ? y(e) : null), (e = e === null ? null : e.stateNode), e);
  };
  var Pb = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qr.isDisabled && qr.supportsFiber)
      try {
        ((ns = qr.inject(Pb)), (Tt = qr));
      } catch {}
  }
  return (
    (Ks.createRoot = function (e, t) {
      if (!l(e)) throw Error(r(299));
      var i = !1,
        o = "",
        u = $h,
        f = Fh,
        p = Yh;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (p = t.onRecoverableError)),
        (t = Am(e, 1, !1, null, null, i, o, null, u, f, p, Bm)),
        (e[Ji] = t.current),
        hc(e),
        new Lc(t)
      );
    }),
    (Ks.hydrateRoot = function (e, t, i) {
      if (!l(e)) throw Error(r(299));
      var o = !1,
        u = "",
        f = $h,
        p = Fh,
        b = Yh,
        _ = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (o = !0),
          i.identifierPrefix !== void 0 && (u = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (f = i.onUncaughtError),
          i.onCaughtError !== void 0 && (p = i.onCaughtError),
          i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
          i.formState !== void 0 && (_ = i.formState)),
        (t = Am(e, 1, !0, t, i ?? null, o, u, _, f, p, b, Bm)),
        (t.context = xm(null)),
        (i = t.current),
        (o = kt()),
        (o = wl(o)),
        (u = Kn(o)),
        (u.callback = null),
        Xn(i, u, o),
        (i = o),
        (t.current.lanes = i),
        as(t, i),
        ln(t),
        (e[Ji] = t.current),
        hc(e),
        new Br(t)
      );
    }),
    (Ks.version = "19.2.4"),
    Ks
  );
}
var Gm;
function Yb() {
  if (Gm) return Pc.exports;
  Gm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return (a(), (Pc.exports = Fb()), Pc.exports);
}
var Gb = Yb();
const Kb = Lf(Gb);
var Km = W.use,
  ao = typeof window < "u" ? W.useLayoutEffect : W.useEffect;
function zc(a) {
  const n = W.useRef({ value: a, prev: null }),
    s = n.current.value;
  return (a !== s && (n.current = { value: a, prev: s }), n.current.prev);
}
function Xb(a, n, s = {}, r = {}) {
  W.useEffect(() => {
    if (!a.current || r.disabled || typeof IntersectionObserver != "function") return;
    const l = new IntersectionObserver(([c]) => {
      n(c);
    }, s);
    return (
      l.observe(a.current),
      () => {
        l.disconnect();
      }
    );
  }, [n, s, r.disabled, a]);
}
function Wb(a) {
  const n = W.useRef(null);
  return (W.useImperativeHandle(a, () => n.current, []), n);
}
var gy = !1;
function uo(a) {
  return a[a.length - 1];
}
function Zb(a) {
  return typeof a == "function";
}
function gi(a, n) {
  return Zb(a) ? a(n) : a;
}
var Jb = Object.prototype.hasOwnProperty,
  Xm = Object.prototype.propertyIsEnumerable,
  e0 = () => Object.create(null),
  Ui = (a, n) => qi(a, n, e0);
function qi(a, n, s = () => ({}), r = 0) {
  if (a === n) return a;
  if (r > 500) return n;
  const l = n,
    c = Jm(a) && Jm(l);
  if (!c && !(Ka(a) && Ka(l))) return l;
  const d = c ? a : Wm(a);
  if (!d) return l;
  const g = c ? l : Wm(l);
  if (!g) return l;
  const h = d.length,
    m = g.length,
    y = c ? new Array(m) : s();
  let v = 0;
  for (let S = 0; S < m; S++) {
    const w = c ? S : g[S],
      R = a[w],
      T = l[w];
    if (R === T) {
      ((y[w] = R), (c ? S < h : Jb.call(a, w)) && v++);
      continue;
    }
    if (R === null || T === null || typeof R != "object" || typeof T != "object") {
      y[w] = T;
      continue;
    }
    const E = qi(R, T, s, r + 1);
    ((y[w] = E), E === R && v++);
  }
  return h === m && v === h ? a : y;
}
function Wm(a) {
  const n = Object.getOwnPropertyNames(a);
  for (const l of n) if (!Xm.call(a, l)) return !1;
  const s = Object.getOwnPropertySymbols(a);
  if (s.length === 0) return n;
  const r = n;
  for (const l of s) {
    if (!Xm.call(a, l)) return !1;
    r.push(l);
  }
  return r;
}
function Ka(a) {
  if (!Zm(a)) return !1;
  const n = a.constructor;
  if (typeof n > "u") return !0;
  const s = n.prototype;
  return !(!Zm(s) || !s.hasOwnProperty("isPrototypeOf"));
}
function Zm(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Jm(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function ji(a, n, s) {
  if (a === n) return !0;
  if (typeof a != typeof n) return !1;
  if (Array.isArray(a) && Array.isArray(n)) {
    if (a.length !== n.length) return !1;
    for (let r = 0, l = a.length; r < l; r++) if (!ji(a[r], n[r], s)) return !1;
    return !0;
  }
  if (Ka(a) && Ka(n)) {
    const r = (s == null ? void 0 : s.ignoreUndefined) ?? !0;
    if (s != null && s.partial) {
      for (const d in n) if ((!r || n[d] !== void 0) && !ji(a[d], n[d], s)) return !1;
      return !0;
    }
    let l = 0;
    if (!r) l = Object.keys(a).length;
    else for (const d in a) a[d] !== void 0 && l++;
    let c = 0;
    for (const d in n) if ((!r || n[d] !== void 0) && (c++, c > l || !ji(a[d], n[d], s))) return !1;
    return l === c;
  }
  return !1;
}
function Xa(a) {
  let n, s;
  const r = new Promise((l, c) => {
    ((n = l), (s = c));
  });
  return (
    (r.status = "pending"),
    (r.resolve = (l) => {
      ((r.status = "resolved"), (r.value = l), n(l), a == null || a(l));
    }),
    (r.reject = (l) => {
      ((r.status = "rejected"), s(l));
    }),
    r
  );
}
function t0(a) {
  return typeof (a == null ? void 0 : a.message) != "string"
    ? !1
    : a.message.startsWith("Failed to fetch dynamically imported module") ||
        a.message.startsWith("error loading dynamically imported module") ||
        a.message.startsWith("Importing a module script failed");
}
function co(a) {
  return !!(a && typeof a == "object" && typeof a.then == "function");
}
function n0(a) {
  return a.replace(/[\x00-\x1f\x7f]/g, "");
}
function ep(a) {
  let n;
  try {
    n = decodeURI(a);
  } catch {
    n = a.replaceAll(/%[0-9A-F]{2}/gi, (s) => {
      try {
        return decodeURI(s);
      } catch {
        return s;
      }
    });
  }
  return n0(n);
}
var i0 = ["http:", "https:", "mailto:", "tel:"];
function tl(a, n) {
  if (!a) return !1;
  try {
    const s = new URL(a);
    return !n.has(s.protocol);
  } catch {
    return !1;
  }
}
function Xs(a) {
  if (!a) return { path: a, handledProtocolRelativeURL: !1 };
  if (!/[%\\\x00-\x1f\x7f]/.test(a) && !a.startsWith("//"))
    return { path: a, handledProtocolRelativeURL: !1 };
  const n = /%25|%5C/gi;
  let s = 0,
    r = "",
    l;
  for (; (l = n.exec(a)) !== null; ) ((r += ep(a.slice(s, l.index)) + l[0]), (s = n.lastIndex));
  r = r + ep(s ? a.slice(s) : a);
  let c = !1;
  return (
    r.startsWith("//") && ((c = !0), (r = "/" + r.replace(/^\/+/, ""))),
    { path: r, handledProtocolRelativeURL: c }
  );
}
function a0(a) {
  return /\s|[^\u0000-\u007F]/.test(a) ? a.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : a;
}
function s0(a, n) {
  if (a === n) return !0;
  if (a.length !== n.length) return !1;
  for (let s = 0; s < a.length; s++) if (a[s] !== n[s]) return !1;
  return !0;
}
function zn() {
  throw new Error("Invariant failed");
}
function fo(a) {
  const n = new Map();
  let s, r;
  const l = (c) => {
    c.next &&
      (c.prev
        ? ((c.prev.next = c.next),
          (c.next.prev = c.prev),
          (c.next = void 0),
          r && ((r.next = c), (c.prev = r)))
        : ((c.next.prev = void 0),
          (s = c.next),
          (c.next = void 0),
          r && ((c.prev = r), (r.next = c))),
      (r = c));
  };
  return {
    get(c) {
      const d = n.get(c);
      if (d) return (l(d), d.value);
    },
    set(c, d) {
      if (n.size >= a && s) {
        const h = s;
        (n.delete(h.key),
          h.next && ((s = h.next), (h.next.prev = void 0)),
          h === r && (r = void 0));
      }
      const g = n.get(c);
      if (g) ((g.value = d), l(g));
      else {
        const h = { key: c, value: d, prev: r };
        (r && (r.next = h), (r = h), s || (s = h), n.set(c, h));
      }
    },
    clear() {
      (n.clear(), (s = void 0), (r = void 0));
    },
  };
}
var zi = 4,
  my = 5;
function o0(a) {
  const n = a.indexOf("{");
  if (n === -1) return null;
  const s = a.indexOf("}", n);
  return s === -1 || n + 1 >= a.length ? null : [n, s];
}
function Df(a, n, s = new Uint16Array(6)) {
  const r = a.indexOf("/", n),
    l = r === -1 ? a.length : r,
    c = a.substring(n, l);
  if (!c || !c.includes("$"))
    return ((s[0] = 0), (s[1] = n), (s[2] = n), (s[3] = l), (s[4] = l), (s[5] = l), s);
  if (c === "$") {
    const g = a.length;
    return ((s[0] = 2), (s[1] = n), (s[2] = n), (s[3] = g), (s[4] = g), (s[5] = g), s);
  }
  if (c.charCodeAt(0) === 36)
    return ((s[0] = 1), (s[1] = n), (s[2] = n + 1), (s[3] = l), (s[4] = l), (s[5] = l), s);
  const d = o0(c);
  if (d) {
    const [g, h] = d,
      m = c.charCodeAt(g + 1);
    if (m === 45) {
      if (g + 2 < c.length && c.charCodeAt(g + 2) === 36) {
        const y = g + 3,
          v = h;
        if (y < v)
          return (
            (s[0] = 3),
            (s[1] = n + g),
            (s[2] = n + y),
            (s[3] = n + v),
            (s[4] = n + h + 1),
            (s[5] = l),
            s
          );
      }
    } else if (m === 36) {
      const y = g + 1,
        v = g + 2;
      return v === h
        ? ((s[0] = 2),
          (s[1] = n + g),
          (s[2] = n + y),
          (s[3] = n + v),
          (s[4] = n + h + 1),
          (s[5] = a.length),
          s)
        : ((s[0] = 1),
          (s[1] = n + g),
          (s[2] = n + v),
          (s[3] = n + h),
          (s[4] = n + h + 1),
          (s[5] = l),
          s);
    }
  }
  return ((s[0] = 0), (s[1] = n), (s[2] = n), (s[3] = l), (s[4] = l), (s[5] = l), s);
}
function dl(a, n, s, r, l, c, d) {
  var h, m, y, v, S, w, R, T, E, D, K, Y, P;
  d == null || d(s);
  let g = r;
  {
    const B = s.fullPath ?? s.from,
      G = B.length,
      U = ((h = s.options) == null ? void 0 : h.caseSensitive) ?? a,
      I = !!(
        (y = (m = s.options) == null ? void 0 : m.params) != null &&
        y.parse &&
        (S = (v = s.options) == null ? void 0 : v.skipRouteOnParseError) != null &&
        S.params
      );
    for (; g < G; ) {
      const z = Df(B, g, n);
      let X;
      const $ = g,
        ne = z[5];
      switch (((g = ne + 1), c++, z[0])) {
        case 0: {
          const te = B.substring(z[2], z[3]);
          if (U) {
            const J = (w = l.static) == null ? void 0 : w.get(te);
            if (J) X = J;
            else {
              l.static ?? (l.static = new Map());
              const O = Ii(s.fullPath ?? s.from);
              ((O.parent = l), (O.depth = c), (X = O), l.static.set(te, O));
            }
          } else {
            const J = te.toLowerCase(),
              O = (R = l.staticInsensitive) == null ? void 0 : R.get(J);
            if (O) X = O;
            else {
              l.staticInsensitive ?? (l.staticInsensitive = new Map());
              const j = Ii(s.fullPath ?? s.from);
              ((j.parent = l), (j.depth = c), (X = j), l.staticInsensitive.set(J, j));
            }
          }
          break;
        }
        case 1: {
          const te = B.substring($, z[1]),
            J = B.substring(z[4], ne),
            O = U && !!(te || J),
            j = te ? (O ? te : te.toLowerCase()) : void 0,
            ie = J ? (O ? J : J.toLowerCase()) : void 0,
            le =
              !I &&
              ((T = l.dynamic) == null
                ? void 0
                : T.find(
                    (re) =>
                      !re.skipOnParamError &&
                      re.caseSensitive === O &&
                      re.prefix === j &&
                      re.suffix === ie,
                  ));
          if (le) X = le;
          else {
            const re = jc(1, s.fullPath ?? s.from, O, j, ie);
            ((X = re),
              (re.depth = c),
              (re.parent = l),
              l.dynamic ?? (l.dynamic = []),
              l.dynamic.push(re));
          }
          break;
        }
        case 3: {
          const te = B.substring($, z[1]),
            J = B.substring(z[4], ne),
            O = U && !!(te || J),
            j = te ? (O ? te : te.toLowerCase()) : void 0,
            ie = J ? (O ? J : J.toLowerCase()) : void 0,
            le =
              !I &&
              ((E = l.optional) == null
                ? void 0
                : E.find(
                    (re) =>
                      !re.skipOnParamError &&
                      re.caseSensitive === O &&
                      re.prefix === j &&
                      re.suffix === ie,
                  ));
          if (le) X = le;
          else {
            const re = jc(3, s.fullPath ?? s.from, O, j, ie);
            ((X = re),
              (re.parent = l),
              (re.depth = c),
              l.optional ?? (l.optional = []),
              l.optional.push(re));
          }
          break;
        }
        case 2: {
          const te = B.substring($, z[1]),
            J = B.substring(z[4], ne),
            O = U && !!(te || J),
            j = te ? (O ? te : te.toLowerCase()) : void 0,
            ie = J ? (O ? J : J.toLowerCase()) : void 0,
            le = jc(2, s.fullPath ?? s.from, O, j, ie);
          ((X = le),
            (le.parent = l),
            (le.depth = c),
            l.wildcard ?? (l.wildcard = []),
            l.wildcard.push(le));
        }
      }
      l = X;
    }
    if (I && s.children && !s.isRoot && s.id && s.id.charCodeAt(s.id.lastIndexOf("/") + 1) === 95) {
      const z = Ii(s.fullPath ?? s.from);
      ((z.kind = my),
        (z.parent = l),
        c++,
        (z.depth = c),
        l.pathless ?? (l.pathless = []),
        l.pathless.push(z),
        (l = z));
    }
    const Q = (s.path || !s.children) && !s.isRoot;
    if (Q && B.endsWith("/")) {
      const z = Ii(s.fullPath ?? s.from);
      ((z.kind = zi), (z.parent = l), c++, (z.depth = c), (l.index = z), (l = z));
    }
    ((l.parse =
      ((K = (D = s.options) == null ? void 0 : D.params) == null ? void 0 : K.parse) ?? null),
      (l.skipOnParamError = I),
      (l.parsingPriority =
        ((P = (Y = s.options) == null ? void 0 : Y.skipRouteOnParseError) == null
          ? void 0
          : P.priority) ?? 0),
      Q && !l.route && ((l.route = s), (l.fullPath = s.fullPath ?? s.from)));
  }
  if (s.children) for (const B of s.children) dl(a, n, B, g, l, c, d);
}
function Ic(a, n) {
  if (a.skipOnParamError && !n.skipOnParamError) return -1;
  if (!a.skipOnParamError && n.skipOnParamError) return 1;
  if (a.skipOnParamError && n.skipOnParamError && (a.parsingPriority || n.parsingPriority))
    return n.parsingPriority - a.parsingPriority;
  if (a.prefix && n.prefix && a.prefix !== n.prefix) {
    if (a.prefix.startsWith(n.prefix)) return -1;
    if (n.prefix.startsWith(a.prefix)) return 1;
  }
  if (a.suffix && n.suffix && a.suffix !== n.suffix) {
    if (a.suffix.endsWith(n.suffix)) return -1;
    if (n.suffix.endsWith(a.suffix)) return 1;
  }
  return a.prefix && !n.prefix
    ? -1
    : !a.prefix && n.prefix
      ? 1
      : a.suffix && !n.suffix
        ? -1
        : !a.suffix && n.suffix
          ? 1
          : a.caseSensitive && !n.caseSensitive
            ? -1
            : !a.caseSensitive && n.caseSensitive
              ? 1
              : 0;
}
function hi(a) {
  var n, s, r;
  if (a.pathless) for (const l of a.pathless) hi(l);
  if (a.static) for (const l of a.static.values()) hi(l);
  if (a.staticInsensitive) for (const l of a.staticInsensitive.values()) hi(l);
  if ((n = a.dynamic) != null && n.length) {
    a.dynamic.sort(Ic);
    for (const l of a.dynamic) hi(l);
  }
  if ((s = a.optional) != null && s.length) {
    a.optional.sort(Ic);
    for (const l of a.optional) hi(l);
  }
  if ((r = a.wildcard) != null && r.length) {
    a.wildcard.sort(Ic);
    for (const l of a.wildcard) hi(l);
  }
}
function Ii(a) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: a,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
  };
}
function jc(a, n, s, r, l) {
  return {
    kind: a,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: n,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
    caseSensitive: s,
    prefix: r,
    suffix: l,
  };
}
function r0(a, n) {
  const s = Ii("/"),
    r = new Uint16Array(6);
  for (const l of a) dl(!1, r, l, 1, s, 0);
  (hi(s), (n.masksTree = s), (n.flatCache = fo(1e3)));
}
function l0(a, n) {
  a || (a = "/");
  const s = n.flatCache.get(a);
  if (s) return s;
  const r = Nf(a, n.masksTree);
  return (n.flatCache.set(a, r), r);
}
function u0(a, n, s, r, l) {
  (a || (a = "/"), r || (r = "/"));
  const c = n ? `case\0${a}` : a;
  let d = l.singleCache.get(c);
  return (
    d || ((d = Ii("/")), dl(n, new Uint16Array(6), { from: a }, 1, d, 0), l.singleCache.set(c, d)),
    Nf(r, d, s)
  );
}
function c0(a, n, s = !1) {
  const r = s ? a : `nofuzz\0${a}`,
    l = n.matchCache.get(r);
  if (l !== void 0) return l;
  a || (a = "/");
  let c;
  try {
    c = Nf(a, n.segmentTree, s);
  } catch (d) {
    if (d instanceof URIError) c = null;
    else throw d;
  }
  return (c && (c.branch = h0(c.route)), n.matchCache.set(r, c), c);
}
function f0(a) {
  return a === "/" ? a : a.replace(/\/{1,}$/, "");
}
function d0(a, n = !1, s) {
  const r = Ii(a.fullPath),
    l = new Uint16Array(6),
    c = {},
    d = {};
  let g = 0;
  return (
    dl(n, l, a, 1, r, 0, (h) => {
      if ((s == null || s(h, g), h.id in c && zn(), (c[h.id] = h), g !== 0 && h.path)) {
        const m = f0(h.fullPath);
        (!d[m] || h.fullPath.endsWith("/")) && (d[m] = h);
      }
      g++;
    }),
    hi(r),
    {
      processedTree: {
        segmentTree: r,
        singleCache: fo(1e3),
        matchCache: fo(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: c,
      routesByPath: d,
    }
  );
}
function Nf(a, n, s = !1) {
  const r = a.split("/"),
    l = m0(a, r, n, s);
  if (!l) return null;
  const [c] = py(a, r, l);
  return { route: l.node.route, rawParams: c, parsedParams: l.parsedParams };
}
function py(a, n, s) {
  var y, v, S, w, R, T, E, D, K, Y;
  const r = g0(s.node);
  let l = null;
  const c = Object.create(null);
  let d = ((y = s.extract) == null ? void 0 : y.part) ?? 0,
    g = ((v = s.extract) == null ? void 0 : v.node) ?? 0,
    h = ((S = s.extract) == null ? void 0 : S.path) ?? 0,
    m = ((w = s.extract) == null ? void 0 : w.segment) ?? 0;
  for (; g < r.length; d++, g++, h++, m++) {
    const P = r[g];
    if (P.kind === zi) break;
    if (P.kind === my) {
      (m--, d--, h--);
      continue;
    }
    const B = n[d],
      G = h;
    if ((B && (h += B.length), P.kind === 1)) {
      l ?? (l = s.node.fullPath.split("/"));
      const U = l[m],
        I = ((R = P.prefix) == null ? void 0 : R.length) ?? 0;
      if (U.charCodeAt(I) === 123) {
        const Q = ((T = P.suffix) == null ? void 0 : T.length) ?? 0,
          z = U.substring(I + 2, U.length - Q - 1),
          X = B.substring(I, B.length - Q);
        c[z] = decodeURIComponent(X);
      } else {
        const Q = U.substring(1);
        c[Q] = decodeURIComponent(B);
      }
    } else if (P.kind === 3) {
      if (s.skipped & (1 << g)) {
        (d--, (h = G - 1));
        continue;
      }
      l ?? (l = s.node.fullPath.split("/"));
      const U = l[m],
        I = ((E = P.prefix) == null ? void 0 : E.length) ?? 0,
        Q = ((D = P.suffix) == null ? void 0 : D.length) ?? 0,
        z = U.substring(I + 3, U.length - Q - 1),
        X = P.suffix || P.prefix ? B.substring(I, B.length - Q) : B;
      X && (c[z] = decodeURIComponent(X));
    } else if (P.kind === 2) {
      const U = P,
        I = a.substring(
          G + (((K = U.prefix) == null ? void 0 : K.length) ?? 0),
          a.length - (((Y = U.suffix) == null ? void 0 : Y.length) ?? 0),
        ),
        Q = decodeURIComponent(I);
      ((c["*"] = Q), (c._splat = Q));
      break;
    }
  }
  return (
    s.rawParams && Object.assign(c, s.rawParams),
    [c, { part: d, node: g, path: h, segment: m }]
  );
}
function h0(a) {
  const n = [a];
  for (; a.parentRoute; ) ((a = a.parentRoute), n.push(a));
  return (n.reverse(), n);
}
function g0(a) {
  const n = Array(a.depth + 1);
  do ((n[a.depth] = a), (a = a.parent));
  while (a);
  return n;
}
function m0(a, n, s, r) {
  if (a === "/" && s.index) return { node: s.index, skipped: 0 };
  const l = !uo(n),
    c = l && a !== "/",
    d = n.length - (l ? 1 : 0),
    g = [{ node: s, index: 1, skipped: 0, depth: 1, statics: 1, dynamics: 0, optionals: 0 }];
  let h = null,
    m = null,
    y = null;
  for (; g.length; ) {
    const v = g.pop(),
      { node: S, index: w, skipped: R, depth: T, statics: E, dynamics: D, optionals: K } = v;
    let { extract: Y, rawParams: P, parsedParams: B } = v;
    if (S.skipOnParamError) {
      if (!Hc(a, n, v)) continue;
      ((P = v.rawParams), (Y = v.extract), (B = v.parsedParams));
    }
    r && S.route && S.kind !== zi && Ws(m, v) && (m = v);
    const G = w === d;
    if (
      G &&
      (S.route && !c && Ws(y, v) && (y = v), !S.optional && !S.wildcard && !S.index && !S.pathless)
    )
      continue;
    const U = G ? void 0 : n[w];
    let I;
    if (G && S.index) {
      const Q = {
        node: S.index,
        index: w,
        skipped: R,
        depth: T + 1,
        statics: E,
        dynamics: D,
        optionals: K,
        extract: Y,
        rawParams: P,
        parsedParams: B,
      };
      let z = !0;
      if ((S.index.skipOnParamError && (Hc(a, n, Q) || (z = !1)), z)) {
        if (E === d && !D && !K && !R) return Q;
        Ws(y, Q) && (y = Q);
      }
    }
    if (S.wildcard && Ws(h, v))
      for (const Q of S.wildcard) {
        const { prefix: z, suffix: X } = Q;
        if (z && (G || !(Q.caseSensitive ? U : (I ?? (I = U.toLowerCase()))).startsWith(z)))
          continue;
        if (X) {
          if (G) continue;
          const ne = n.slice(w).join("/").slice(-X.length);
          if ((Q.caseSensitive ? ne : ne.toLowerCase()) !== X) continue;
        }
        const $ = {
          node: Q,
          index: d,
          skipped: R,
          depth: T,
          statics: E,
          dynamics: D,
          optionals: K,
          extract: Y,
          rawParams: P,
          parsedParams: B,
        };
        if (!(Q.skipOnParamError && !Hc(a, n, $))) {
          h = $;
          break;
        }
      }
    if (S.optional) {
      const Q = R | (1 << T),
        z = T + 1;
      for (let X = S.optional.length - 1; X >= 0; X--) {
        const $ = S.optional[X];
        g.push({
          node: $,
          index: w,
          skipped: Q,
          depth: z,
          statics: E,
          dynamics: D,
          optionals: K,
          extract: Y,
          rawParams: P,
          parsedParams: B,
        });
      }
      if (!G)
        for (let X = S.optional.length - 1; X >= 0; X--) {
          const $ = S.optional[X],
            { prefix: ne, suffix: te } = $;
          if (ne || te) {
            const J = $.caseSensitive ? U : (I ?? (I = U.toLowerCase()));
            if ((ne && !J.startsWith(ne)) || (te && !J.endsWith(te))) continue;
          }
          g.push({
            node: $,
            index: w + 1,
            skipped: R,
            depth: z,
            statics: E,
            dynamics: D,
            optionals: K + 1,
            extract: Y,
            rawParams: P,
            parsedParams: B,
          });
        }
    }
    if (!G && S.dynamic && U)
      for (let Q = S.dynamic.length - 1; Q >= 0; Q--) {
        const z = S.dynamic[Q],
          { prefix: X, suffix: $ } = z;
        if (X || $) {
          const ne = z.caseSensitive ? U : (I ?? (I = U.toLowerCase()));
          if ((X && !ne.startsWith(X)) || ($ && !ne.endsWith($))) continue;
        }
        g.push({
          node: z,
          index: w + 1,
          skipped: R,
          depth: T + 1,
          statics: E,
          dynamics: D + 1,
          optionals: K,
          extract: Y,
          rawParams: P,
          parsedParams: B,
        });
      }
    if (!G && S.staticInsensitive) {
      const Q = S.staticInsensitive.get(I ?? (I = U.toLowerCase()));
      Q &&
        g.push({
          node: Q,
          index: w + 1,
          skipped: R,
          depth: T + 1,
          statics: E + 1,
          dynamics: D,
          optionals: K,
          extract: Y,
          rawParams: P,
          parsedParams: B,
        });
    }
    if (!G && S.static) {
      const Q = S.static.get(U);
      Q &&
        g.push({
          node: Q,
          index: w + 1,
          skipped: R,
          depth: T + 1,
          statics: E + 1,
          dynamics: D,
          optionals: K,
          extract: Y,
          rawParams: P,
          parsedParams: B,
        });
    }
    if (S.pathless) {
      const Q = T + 1;
      for (let z = S.pathless.length - 1; z >= 0; z--) {
        const X = S.pathless[z];
        g.push({
          node: X,
          index: w,
          skipped: R,
          depth: Q,
          statics: E,
          dynamics: D,
          optionals: K,
          extract: Y,
          rawParams: P,
          parsedParams: B,
        });
      }
    }
  }
  if (y && h) return Ws(h, y) ? y : h;
  if (y) return y;
  if (h) return h;
  if (r && m) {
    let v = m.index;
    for (let w = 0; w < m.index; w++) v += n[w].length;
    const S = v === a.length ? "/" : a.slice(v);
    return (
      m.rawParams ?? (m.rawParams = Object.create(null)),
      (m.rawParams["**"] = decodeURIComponent(S)),
      m
    );
  }
  return null;
}
function Hc(a, n, s) {
  try {
    const [r, l] = py(a, n, s);
    ((s.rawParams = r), (s.extract = l));
    const c = s.node.parse(r);
    return ((s.parsedParams = Object.assign(Object.create(null), s.parsedParams, c)), !0);
  } catch {
    return null;
  }
}
function Ws(a, n) {
  return a
    ? n.statics > a.statics ||
        (n.statics === a.statics &&
          (n.dynamics > a.dynamics ||
            (n.dynamics === a.dynamics &&
              (n.optionals > a.optionals ||
                (n.optionals === a.optionals &&
                  ((n.node.kind === zi) > (a.node.kind === zi) ||
                    ((n.node.kind === zi) == (a.node.kind === zi) && n.depth > a.depth)))))))
    : !0;
}
function Yr(a) {
  return Pf(a.filter((n) => n !== void 0).join("/"));
}
function Pf(a) {
  return a.replace(/\/{2,}/g, "/");
}
function yy(a) {
  return a === "/" ? a : a.replace(/^\/{1,}/, "");
}
function pi(a) {
  const n = a.length;
  return n > 1 && a[n - 1] === "/" ? a.replace(/\/{1,}$/, "") : a;
}
function vy(a) {
  return pi(yy(a));
}
function nl(a, n) {
  return a != null && a.endsWith("/") && a !== "/" && a !== `${n}/` ? a.slice(0, -1) : a;
}
function p0(a, n, s) {
  return nl(a, s) === nl(n, s);
}
function y0({ base: a, to: n, trailingSlash: s = "never", cache: r }) {
  const l = n.startsWith("/"),
    c = !l && n === ".";
  let d;
  if (r) {
    d = l ? n : c ? a : a + "\0" + n;
    const v = r.get(d);
    if (v) return v;
  }
  let g;
  if (c) g = a.split("/");
  else if (l) g = n.split("/");
  else {
    for (g = a.split("/"); g.length > 1 && uo(g) === ""; ) g.pop();
    const v = n.split("/");
    for (let S = 0, w = v.length; S < w; S++) {
      const R = v[S];
      R === ""
        ? S
          ? S === w - 1 && g.push(R)
          : (g = [R])
        : R === ".."
          ? g.pop()
          : R === "." || g.push(R);
    }
  }
  g.length > 1 && (uo(g) === "" ? s === "never" && g.pop() : s === "always" && g.push(""));
  let h,
    m = "";
  for (let v = 0; v < g.length; v++) {
    v > 0 && (m += "/");
    const S = g[v];
    if (!S) continue;
    h = Df(S, 0, h);
    const w = h[0];
    if (w === 0) {
      m += S;
      continue;
    }
    const R = h[5],
      T = S.substring(0, h[1]),
      E = S.substring(h[4], R),
      D = S.substring(h[2], h[3]);
    w === 1
      ? (m += T || E ? `${T}{$${D}}${E}` : `$${D}`)
      : w === 2
        ? (m += T || E ? `${T}{$}${E}` : "$")
        : (m += `${T}{-$${D}}${E}`);
  }
  m = Pf(m);
  const y = m || "/";
  return (d && r && r.set(d, y), y);
}
function v0(a) {
  const n = new Map(a.map((l) => [encodeURIComponent(l), l])),
    s = Array.from(n.keys())
      .map((l) => l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    r = new RegExp(s, "g");
  return (l) => l.replace(r, (c) => n.get(c) ?? c);
}
function Vc(a, n, s) {
  const r = n[a];
  return typeof r != "string"
    ? r
    : a === "_splat"
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
        ? r
        : r
            .split("/")
            .map((l) => np(l, s))
            .join("/")
      : np(r, s);
}
function tp({ path: a, params: n, decoder: s, ...r }) {
  let l = !1;
  const c = Object.create(null);
  if (!a || a === "/") return { interpolatedPath: "/", usedParams: c, isMissingParams: l };
  if (!a.includes("$")) return { interpolatedPath: a, usedParams: c, isMissingParams: l };
  const d = a.length;
  let g = 0,
    h,
    m = "";
  for (; g < d; ) {
    const y = g;
    h = Df(a, y, h);
    const v = h[5];
    if (((g = v + 1), y === v)) continue;
    const S = h[0];
    if (S === 0) {
      m += "/" + a.substring(y, v);
      continue;
    }
    if (S === 2) {
      const w = n._splat;
      ((c._splat = w), (c["*"] = w));
      const R = a.substring(y, h[1]),
        T = a.substring(h[4], v);
      if (!w) {
        ((l = !0), (R || T) && (m += "/" + R + T));
        continue;
      }
      const E = Vc("_splat", n, s);
      m += "/" + R + E + T;
      continue;
    }
    if (S === 1) {
      const w = a.substring(h[2], h[3]);
      (!l && !(w in n) && (l = !0), (c[w] = n[w]));
      const R = a.substring(y, h[1]),
        T = a.substring(h[4], v),
        E = Vc(w, n, s) ?? "undefined";
      m += "/" + R + E + T;
      continue;
    }
    if (S === 3) {
      const w = a.substring(h[2], h[3]),
        R = n[w];
      if (R == null) continue;
      c[w] = R;
      const T = a.substring(y, h[1]),
        E = a.substring(h[4], v),
        D = Vc(w, n, s) ?? "";
      m += "/" + T + D + E;
      continue;
    }
  }
  return (
    a.endsWith("/") && (m += "/"),
    { usedParams: c, interpolatedPath: m || "/", isMissingParams: l }
  );
}
function np(a, n) {
  const s = encodeURIComponent(a);
  return (n == null ? void 0 : n(s)) ?? s;
}
function ht(a) {
  return !!(a != null && a.isNotFound);
}
function S0() {
  try {
    return typeof window < "u" && typeof window.sessionStorage == "object"
      ? window.sessionStorage
      : void 0;
  } catch {
    return;
  }
}
var b0 = "tsr-scroll-restoration-v1_3";
function R0() {
  const a = S0();
  if (!a) return null;
  let n = {};
  try {
    const r = JSON.parse(a.getItem("tsr-scroll-restoration-v1_3") || "{}");
    Ka(r) && (n = r);
  } catch {}
  return {
    get state() {
      return n;
    },
    set: (r) => {
      n = gi(r, n) || n;
    },
    persist: () => {
      try {
        a.setItem(b0, JSON.stringify(n));
      } catch {}
    },
  };
}
var ip = R0(),
  w0 = (a) => a.state.__TSR_key || a.href;
function T0(a) {
  const n = [];
  let s;
  for (; (s = a.parentNode); )
    (n.push(`${a.tagName}:nth-child(${Array.prototype.indexOf.call(s.children, a) + 1})`), (a = s));
  return `${n.reverse().join(" > ")}`.toLowerCase();
}
var zr = !1,
  Zs = "window",
  ap = "data-scroll-restoration-id";
function _0(a, n) {
  if (!ip) return;
  const s = ip;
  if (
    ((a.options.scrollRestoration ?? !1) && (a.isScrollRestoring = !0),
    a.isScrollRestorationSetup || !s)
  )
    return;
  ((a.isScrollRestorationSetup = !0), (zr = !1));
  const r = a.options.getScrollRestorationKey || w0,
    l = new Map();
  window.history.scrollRestoration = "manual";
  const c = (g) => {
      if (!(zr || !a.isScrollRestoring))
        if (g.target === document || g.target === window)
          l.set(Zs, { scrollX: window.scrollX || 0, scrollY: window.scrollY || 0 });
        else {
          const h = g.target;
          l.set(h, { scrollX: h.scrollLeft || 0, scrollY: h.scrollTop || 0 });
        }
    },
    d = (g) => {
      var m;
      if (!a.isScrollRestoring || !g || l.size === 0 || !s) return;
      const h = (m = s.state)[g] || (m[g] = {});
      for (const [y, v] of l) {
        let S;
        if (y === Zs) S = Zs;
        else if (y.isConnected) {
          const w = y.getAttribute(ap);
          S = w ? `[${ap}="${w}"]` : T0(y);
        }
        S && (h[S] = v);
      }
    };
  (document.addEventListener("scroll", c, !0),
    a.subscribe("onBeforeLoad", (g) => {
      (d(g.fromLocation ? r(g.fromLocation) : void 0), l.clear());
    }),
    window.addEventListener("pagehide", () => {
      (d(r(a.stores.resolvedLocation.state ?? a.stores.location.state)), s.persist());
    }),
    a.subscribe("onRendered", (g) => {
      var v;
      const h = r(g.toLocation),
        m = a.options.scrollRestorationBehavior,
        y = a.options.scrollToTopSelectors;
      if ((l.clear(), !a.resetNextScroll)) {
        a.resetNextScroll = !0;
        return;
      }
      if (
        !(
          typeof a.options.scrollRestoration == "function" &&
          !a.options.scrollRestoration({ location: a.latestLocation })
        )
      ) {
        zr = !0;
        try {
          const S = a.isScrollRestoring ? s.state[h] : void 0;
          let w = !1;
          if (S)
            for (const R in S) {
              const T = S[R];
              if (!Ka(T)) continue;
              const { scrollX: E, scrollY: D } = T;
              if (!(!Number.isFinite(E) || !Number.isFinite(D))) {
                if (R === Zs) (window.scrollTo({ top: D, left: E, behavior: m }), (w = !0));
                else if (R) {
                  let K;
                  try {
                    K = document.querySelector(R);
                  } catch {
                    continue;
                  }
                  K && ((K.scrollLeft = E), (K.scrollTop = D), (w = !0));
                }
              }
            }
          if (!w) {
            const R = a.history.location.hash.slice(1);
            if (R) {
              const T =
                ((v = window.history.state) == null ? void 0 : v.__hashScrollIntoViewOptions) ?? !0;
              if (T) {
                const E = document.getElementById(R);
                E && E.scrollIntoView(T);
              }
            } else {
              const T = { top: 0, left: 0, behavior: m };
              if ((window.scrollTo(T), y))
                for (const E of y) {
                  if (E === Zs) continue;
                  const D = typeof E == "function" ? E() : document.querySelector(E);
                  D && D.scrollTo(T);
                }
            }
          }
        } finally {
          zr = !1;
        }
        a.isScrollRestoring && s.set((S) => (S[h] || (S[h] = {}), S));
      }
    }));
}
function E0(a, n = String) {
  const s = new URLSearchParams();
  for (const r in a) {
    const l = a[r];
    l !== void 0 && s.set(r, n(l));
  }
  return s.toString();
}
function Qc(a) {
  return a ? (a === "false" ? !1 : a === "true" ? !0 : +a * 0 === 0 && +a + "" === a ? +a : a) : "";
}
function A0(a) {
  const n = new URLSearchParams(a),
    s = Object.create(null);
  for (const [r, l] of n.entries()) {
    const c = s[r];
    c == null ? (s[r] = Qc(l)) : Array.isArray(c) ? c.push(Qc(l)) : (s[r] = [c, Qc(l)]);
  }
  return s;
}
var x0 = O0(JSON.parse),
  C0 = M0(JSON.stringify, JSON.parse);
function O0(a) {
  return (n) => {
    n[0] === "?" && (n = n.substring(1));
    const s = A0(n);
    for (const r in s) {
      const l = s[r];
      if (typeof l == "string")
        try {
          s[r] = a(l);
        } catch {}
    }
    return s;
  };
}
function M0(a, n) {
  const s = typeof n == "function";
  function r(l) {
    if (typeof l == "object" && l !== null)
      try {
        return a(l);
      } catch {}
    else if (s && typeof l == "string")
      try {
        return (n(l), a(l));
      } catch {}
    return l;
  }
  return (l) => {
    const c = E0(l, r);
    return c ? `?${c}` : "";
  };
}
var Hi = "__root__";
function hl(a) {
  if (
    ((a.statusCode = a.statusCode || a.code || 307),
    !a._builtLocation && !a.reloadDocument && typeof a.href == "string")
  )
    try {
      (new URL(a.href), (a.reloadDocument = !0));
    } catch {}
  const n = new Headers(a.headers);
  a.href && n.get("Location") === null && n.set("Location", a.href);
  const s = new Response(null, { status: a.statusCode, headers: n });
  if (((s.options = a), a.throw)) throw s;
  return s;
}
function wt(a) {
  return a instanceof Response && !!a.options;
}
function k0(a) {
  return {
    input: ({ url: n }) => {
      for (const s of a) n = mf(s, n);
      return n;
    },
    output: ({ url: n }) => {
      for (let s = a.length - 1; s >= 0; s--) n = Sy(a[s], n);
      return n;
    },
  };
}
function L0(a) {
  const n = vy(a.basepath),
    s = `/${n}`,
    r = `${s}/`,
    l = a.caseSensitive ? s : s.toLowerCase(),
    c = a.caseSensitive ? r : r.toLowerCase();
  return {
    input: ({ url: d }) => {
      const g = a.caseSensitive ? d.pathname : d.pathname.toLowerCase();
      return (
        g === l ? (d.pathname = "/") : g.startsWith(c) && (d.pathname = d.pathname.slice(s.length)),
        d
      );
    },
    output: ({ url: d }) => ((d.pathname = Yr(["/", n, d.pathname])), d),
  };
}
function mf(a, n) {
  var r;
  const s = (r = a == null ? void 0 : a.input) == null ? void 0 : r.call(a, { url: n });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return n;
}
function Sy(a, n) {
  var r;
  const s = (r = a == null ? void 0 : a.output) == null ? void 0 : r.call(a, { url: n });
  if (s) {
    if (typeof s == "string") return new URL(s);
    if (s instanceof URL) return s;
  }
  return n;
}
function D0(a, n) {
  const { createMutableStore: s, createReadonlyStore: r, batch: l, init: c } = n,
    d = new Map(),
    g = new Map(),
    h = new Map(),
    m = s(a.status),
    y = s(a.loadedAt),
    v = s(a.isLoading),
    S = s(a.isTransitioning),
    w = s(a.location),
    R = s(a.resolvedLocation),
    T = s(a.statusCode),
    E = s(a.redirect),
    D = s([]),
    K = s([]),
    Y = s([]),
    P = r(() => $c(d, D.state)),
    B = r(() => $c(g, K.state)),
    G = r(() => $c(h, Y.state)),
    U = r(() => D.state[0]),
    I = r(() =>
      D.state.some((j) => {
        var ie;
        return ((ie = d.get(j)) == null ? void 0 : ie.state.status) === "pending";
      }),
    ),
    Q = r(() => {
      var j;
      return {
        locationHref: w.state.href,
        resolvedLocationHref: (j = R.state) == null ? void 0 : j.href,
        status: m.state,
      };
    }),
    z = r(() => ({
      status: m.state,
      loadedAt: y.state,
      isLoading: v.state,
      isTransitioning: S.state,
      matches: P.state,
      location: w.state,
      resolvedLocation: R.state,
      statusCode: T.state,
      redirect: E.state,
    })),
    X = fo(64);
  function $(j) {
    let ie = X.get(j);
    return (
      ie ||
        ((ie = r(() => {
          const le = D.state;
          for (const re of le) {
            const A = d.get(re);
            if (A && A.routeId === j) return A.state;
          }
        })),
        X.set(j, ie)),
      ie
    );
  }
  const ne = {
    status: m,
    loadedAt: y,
    isLoading: v,
    isTransitioning: S,
    location: w,
    resolvedLocation: R,
    statusCode: T,
    redirect: E,
    matchesId: D,
    pendingMatchesId: K,
    cachedMatchesId: Y,
    activeMatchesSnapshot: P,
    pendingMatchesSnapshot: B,
    cachedMatchesSnapshot: G,
    firstMatchId: U,
    hasPendingMatches: I,
    matchRouteReactivity: Q,
    activeMatchStoresById: d,
    pendingMatchStoresById: g,
    cachedMatchStoresById: h,
    __store: z,
    getMatchStoreByRouteId: $,
    setActiveMatches: te,
    setPendingMatches: J,
    setCachedMatches: O,
  };
  (te(a.matches), c == null || c(ne));
  function te(j) {
    Fc(j, d, D, s, l);
  }
  function J(j) {
    Fc(j, g, K, s, l);
  }
  function O(j) {
    Fc(j, h, Y, s, l);
  }
  return ne;
}
function $c(a, n) {
  const s = [];
  for (const r of n) {
    const l = a.get(r);
    l && s.push(l.state);
  }
  return s;
}
function Fc(a, n, s, r, l) {
  const c = a.map((g) => g.id),
    d = new Set(c);
  l(() => {
    for (const g of n.keys()) d.has(g) || n.delete(g);
    for (const g of a) {
      const h = n.get(g.id);
      if (!h) {
        const m = r(g);
        ((m.routeId = g.routeId), n.set(g.id, m));
        continue;
      }
      ((h.routeId = g.routeId), h.state !== g && h.setState(() => g));
    }
    s0(s.state, c) || s.setState(() => c);
  });
}
var pf = (a) => {
    var n;
    if (!a.rendered) return ((a.rendered = !0), (n = a.onReady) == null ? void 0 : n.call(a));
  },
  N0 = (a) =>
    a.stores.matchesId.state.some((n) => {
      var s;
      return (s = a.stores.activeMatchStoresById.get(n)) == null ? void 0 : s.state._forcePending;
    }),
  gl = (a, n) => !!(a.preload && !a.router.stores.activeMatchStoresById.has(n)),
  Vi = (a, n, s = !0) => {
    const r = { ...(a.router.options.context ?? {}) },
      l = s ? n : n - 1;
    for (let c = 0; c <= l; c++) {
      const d = a.matches[c];
      if (!d) continue;
      const g = a.router.getMatch(d.id);
      g && Object.assign(r, g.__routeContext, g.__beforeLoadContext);
    }
    return r;
  },
  sp = (a, n) => {
    if (!a.matches.length) return;
    const s = n.routeId,
      r = a.matches.findIndex((d) => d.routeId === a.router.routeTree.id),
      l = r >= 0 ? r : 0;
    let c = s
      ? a.matches.findIndex((d) => d.routeId === s)
      : (a.firstBadMatchIndex ?? a.matches.length - 1);
    c < 0 && (c = l);
    for (let d = c; d >= 0; d--) {
      const g = a.matches[d];
      if (a.router.looseRoutesById[g.routeId].options.notFoundComponent) return d;
    }
    return s ? c : l;
  },
  mi = (a, n, s) => {
    var r, l, c;
    if (!(!wt(s) && !ht(s)))
      throw (
        (wt(s) && s.redirectHandled && !s.options.reloadDocument) ||
          (n &&
            ((r = n._nonReactive.beforeLoadPromise) == null || r.resolve(),
            (l = n._nonReactive.loaderPromise) == null || l.resolve(),
            (n._nonReactive.beforeLoadPromise = void 0),
            (n._nonReactive.loaderPromise = void 0),
            (n._nonReactive.error = s),
            a.updateMatch(n.id, (d) => ({
              ...d,
              status: wt(s) ? "redirected" : d.status === "pending" ? "success" : d.status,
              context: Vi(a, n.index),
              isFetching: !1,
              error: s,
            })),
            ht(s) && !s.routeId && (s.routeId = n.routeId),
            (c = n._nonReactive.loadPromise) == null || c.resolve()),
          wt(s) &&
            ((a.rendered = !0),
            (s.options._fromLocation = a.location),
            (s.redirectHandled = !0),
            (s = a.router.resolveRedirect(s)))),
        s
      );
  },
  by = (a, n) => {
    const s = a.router.getMatch(n);
    return !!(!s || s._nonReactive.dehydrated);
  },
  op = (a, n, s) => {
    const r = Vi(a, s);
    a.updateMatch(n, (l) => ({ ...l, context: r }));
  },
  Js = (a, n, s, r) => {
    var g, h;
    const { id: l, routeId: c } = a.matches[n],
      d = a.router.looseRoutesById[c];
    if (s instanceof Promise) throw s;
    ((s.routerCode = r),
      a.firstBadMatchIndex ?? (a.firstBadMatchIndex = n),
      mi(a, a.router.getMatch(l), s));
    try {
      (h = (g = d.options).onError) == null || h.call(g, s);
    } catch (m) {
      ((s = m), mi(a, a.router.getMatch(l), s));
    }
    (a.updateMatch(l, (m) => {
      var y, v;
      return (
        (y = m._nonReactive.beforeLoadPromise) == null || y.resolve(),
        (m._nonReactive.beforeLoadPromise = void 0),
        (v = m._nonReactive.loadPromise) == null || v.resolve(),
        {
          ...m,
          error: s,
          status: "error",
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      );
    }),
      !a.preload && !wt(s) && !ht(s) && (a.serialError ?? (a.serialError = s)));
  },
  Ry = (a, n, s, r) => {
    var c;
    if (r._nonReactive.pendingTimeout !== void 0) return;
    const l = s.options.pendingMs ?? a.router.options.defaultPendingMs;
    if (
      a.onReady &&
      !gl(a, n) &&
      (s.options.loader || s.options.beforeLoad || Ty(s)) &&
      typeof l == "number" &&
      l !== 1 / 0 &&
      (s.options.pendingComponent ??
        ((c = a.router.options) == null ? void 0 : c.defaultPendingComponent))
    ) {
      const d = setTimeout(() => {
        pf(a);
      }, l);
      r._nonReactive.pendingTimeout = d;
    }
  },
  P0 = (a, n, s) => {
    const r = a.router.getMatch(n);
    if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise) return;
    Ry(a, n, s, r);
    const l = () => {
      const c = a.router.getMatch(n);
      c.preload && (c.status === "redirected" || c.status === "notFound") && mi(a, c, c.error);
    };
    return r._nonReactive.beforeLoadPromise ? r._nonReactive.beforeLoadPromise.then(l) : l();
  },
  U0 = (a, n, s, r) => {
    const l = a.router.getMatch(n);
    let c = l._nonReactive.loadPromise;
    l._nonReactive.loadPromise = Xa(() => {
      (c == null || c.resolve(), (c = void 0));
    });
    const { paramsError: d, searchError: g } = l;
    (d && Js(a, s, d, "PARSE_PARAMS"), g && Js(a, s, g, "VALIDATE_SEARCH"), Ry(a, n, r, l));
    const h = new AbortController();
    let m = !1;
    const y = () => {
        m ||
          ((m = !0),
          a.updateMatch(n, (P) => ({
            ...P,
            isFetching: "beforeLoad",
            fetchCount: P.fetchCount + 1,
            abortController: h,
          })));
      },
      v = () => {
        var P;
        ((P = l._nonReactive.beforeLoadPromise) == null || P.resolve(),
          (l._nonReactive.beforeLoadPromise = void 0),
          a.updateMatch(n, (B) => ({ ...B, isFetching: !1 })));
      };
    if (!r.options.beforeLoad) {
      a.router.batch(() => {
        (y(), v());
      });
      return;
    }
    l._nonReactive.beforeLoadPromise = Xa();
    const S = { ...Vi(a, s, !1), ...l.__routeContext },
      { search: w, params: R, cause: T } = l,
      E = gl(a, n),
      D = {
        search: w,
        abortController: h,
        params: R,
        preload: E,
        context: S,
        location: a.location,
        navigate: (P) => a.router.navigate({ ...P, _fromLocation: a.location }),
        buildLocation: a.router.buildLocation,
        cause: E ? "preload" : T,
        matches: a.matches,
        routeId: r.id,
        ...a.router.options.additionalContext,
      },
      K = (P) => {
        if (P === void 0) {
          a.router.batch(() => {
            (y(), v());
          });
          return;
        }
        ((wt(P) || ht(P)) && (y(), Js(a, s, P, "BEFORE_LOAD")),
          a.router.batch(() => {
            (y(), a.updateMatch(n, (B) => ({ ...B, __beforeLoadContext: P })), v());
          }));
      };
    let Y;
    try {
      if (((Y = r.options.beforeLoad(D)), co(Y)))
        return (
          y(),
          Y.catch((P) => {
            Js(a, s, P, "BEFORE_LOAD");
          }).then(K)
        );
    } catch (P) {
      (y(), Js(a, s, P, "BEFORE_LOAD"));
    }
    K(Y);
  },
  B0 = (a, n) => {
    const { id: s, routeId: r } = a.matches[n],
      l = a.router.looseRoutesById[r],
      c = () => g(),
      d = () => U0(a, s, n, l),
      g = () => {
        if (by(a, s)) return;
        const h = P0(a, s, l);
        return co(h) ? h.then(d) : d();
      };
    return c();
  },
  q0 = (a, n, s) => {
    var c, d, g, h, m, y;
    const r = a.router.getMatch(n);
    if (!r || (!s.options.head && !s.options.scripts && !s.options.headers)) return;
    const l = {
      ssr: a.router.options.ssr,
      matches: a.matches,
      match: r,
      params: r.params,
      loaderData: r.loaderData,
    };
    return Promise.all([
      (d = (c = s.options).head) == null ? void 0 : d.call(c, l),
      (h = (g = s.options).scripts) == null ? void 0 : h.call(g, l),
      (y = (m = s.options).headers) == null ? void 0 : y.call(m, l),
    ]).then(([v, S, w]) => ({
      meta: v == null ? void 0 : v.meta,
      links: v == null ? void 0 : v.links,
      headScripts: v == null ? void 0 : v.scripts,
      headers: w,
      scripts: S,
      styles: v == null ? void 0 : v.styles,
    }));
  },
  wy = (a, n, s, r, l) => {
    const c = n[r - 1],
      { params: d, loaderDeps: g, abortController: h, cause: m } = a.router.getMatch(s),
      y = Vi(a, r),
      v = gl(a, s);
    return {
      params: d,
      deps: g,
      preload: !!v,
      parentMatchPromise: c,
      abortController: h,
      context: y,
      location: a.location,
      navigate: (S) => a.router.navigate({ ...S, _fromLocation: a.location }),
      cause: v ? "preload" : m,
      route: l,
      ...a.router.options.additionalContext,
    };
  },
  rp = async (a, n, s, r, l) => {
    var c, d, g, h, m;
    try {
      const y = a.router.getMatch(s);
      try {
        (!(gy ?? a.router.isServer) || y.ssr === !0) && ho(l);
        const v = l.options.loader,
          S = typeof v == "function" ? v : v == null ? void 0 : v.handler,
          w = S == null ? void 0 : S(wy(a, n, s, r, l)),
          R = !!S && co(w);
        if (
          ((R ||
            l._lazyPromise ||
            l._componentsPromise ||
            l.options.head ||
            l.options.scripts ||
            l.options.headers ||
            y._nonReactive.minPendingPromise) &&
            a.updateMatch(s, (E) => ({ ...E, isFetching: "loader" })),
          S)
        ) {
          const E = R ? await w : w;
          (mi(a, a.router.getMatch(s), E),
            E !== void 0 && a.updateMatch(s, (D) => ({ ...D, loaderData: E })));
        }
        l._lazyPromise && (await l._lazyPromise);
        const T = y._nonReactive.minPendingPromise;
        (T && (await T),
          l._componentsPromise && (await l._componentsPromise),
          a.updateMatch(s, (E) => ({
            ...E,
            error: void 0,
            context: Vi(a, r),
            status: "success",
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (v) {
        let S = v;
        if ((S == null ? void 0 : S.name) === "AbortError") {
          if (y.abortController.signal.aborted) {
            ((c = y._nonReactive.loaderPromise) == null || c.resolve(),
              (y._nonReactive.loaderPromise = void 0));
            return;
          }
          a.updateMatch(s, (R) => ({
            ...R,
            status: R.status === "pending" ? "success" : R.status,
            isFetching: !1,
            context: Vi(a, r),
          }));
          return;
        }
        const w = y._nonReactive.minPendingPromise;
        (w && (await w),
          ht(v) &&
            (await ((g = (d = l.options.notFoundComponent) == null ? void 0 : d.preload) == null
              ? void 0
              : g.call(d))),
          mi(a, a.router.getMatch(s), v));
        try {
          (m = (h = l.options).onError) == null || m.call(h, v);
        } catch (R) {
          ((S = R), mi(a, a.router.getMatch(s), R));
        }
        (!wt(S) && !ht(S) && (await ho(l, ["errorComponent"])),
          a.updateMatch(s, (R) => ({
            ...R,
            error: S,
            context: Vi(a, r),
            status: "error",
            isFetching: !1,
          })));
      }
    } catch (y) {
      const v = a.router.getMatch(s);
      (v && (v._nonReactive.loaderPromise = void 0), mi(a, v, y));
    }
  },
  z0 = async (a, n, s) => {
    var w, R, T, E;
    async function r(D, K, Y, P, B) {
      const G = Date.now() - K.updatedAt,
        U = D
          ? (B.options.preloadStaleTime ?? a.router.options.defaultPreloadStaleTime ?? 3e4)
          : (B.options.staleTime ?? a.router.options.defaultStaleTime ?? 0),
        I = B.options.shouldReload,
        Q = typeof I == "function" ? I(wy(a, n, l, s, B)) : I,
        { status: z, invalid: X } = P,
        $ = G >= U && (!!a.forceStaleReload || P.cause === "enter" || (Y !== void 0 && Y !== P.id));
      ((d = z === "success" && (X || (Q ?? $))),
        (D && B.options.preload === !1) ||
          (d && !a.sync && y
            ? ((g = !0),
              (async () => {
                var ne, te;
                try {
                  await rp(a, n, l, s, B);
                  const J = a.router.getMatch(l);
                  ((ne = J._nonReactive.loaderPromise) == null || ne.resolve(),
                    (te = J._nonReactive.loadPromise) == null || te.resolve(),
                    (J._nonReactive.loaderPromise = void 0),
                    (J._nonReactive.loadPromise = void 0));
                } catch (J) {
                  wt(J) && (await a.router.navigate(J.options));
                }
              })())
            : z !== "success" || d
              ? await rp(a, n, l, s, B)
              : op(a, l, s)));
    }
    const { id: l, routeId: c } = a.matches[s];
    let d = !1,
      g = !1;
    const h = a.router.looseRoutesById[c],
      m = h.options.loader,
      y =
        ((typeof m == "function" || m == null ? void 0 : m.staleReloadMode) ??
          a.router.options.defaultStaleReloadMode) !== "blocking";
    if (by(a, l)) {
      if (!a.router.getMatch(l)) return a.matches[s];
      op(a, l, s);
    } else {
      const D = a.router.getMatch(l),
        K = a.router.stores.matchesId.state[s],
        Y =
          ((w = (K && a.router.stores.activeMatchStoresById.get(K)) || null) == null
            ? void 0
            : w.routeId) === c
            ? K
            : (R = a.router.stores.activeMatchesSnapshot.state.find((B) => B.routeId === c)) == null
              ? void 0
              : R.id,
        P = gl(a, l);
      if (D._nonReactive.loaderPromise) {
        if (D.status === "success" && !a.sync && !D.preload && y) return D;
        await D._nonReactive.loaderPromise;
        const B = a.router.getMatch(l),
          G = B._nonReactive.error || B.error;
        (G && mi(a, B, G), B.status === "pending" && (await r(P, D, Y, B, h)));
      } else {
        const B = P && !a.router.stores.activeMatchStoresById.has(l),
          G = a.router.getMatch(l);
        ((G._nonReactive.loaderPromise = Xa()),
          B !== G.preload && a.updateMatch(l, (U) => ({ ...U, preload: B })),
          await r(P, D, Y, G, h));
      }
    }
    const v = a.router.getMatch(l);
    (g ||
      ((T = v._nonReactive.loaderPromise) == null || T.resolve(),
      (E = v._nonReactive.loadPromise) == null || E.resolve(),
      (v._nonReactive.loadPromise = void 0)),
      clearTimeout(v._nonReactive.pendingTimeout),
      (v._nonReactive.pendingTimeout = void 0),
      g || (v._nonReactive.loaderPromise = void 0),
      (v._nonReactive.dehydrated = void 0));
    const S = g ? v.isFetching : !1;
    return S !== v.isFetching || v.invalid !== !1
      ? (a.updateMatch(l, (D) => ({ ...D, isFetching: S, invalid: !1 })), a.router.getMatch(l))
      : v;
  };
async function lp(a) {
  var S, w;
  const n = a,
    s = [];
  N0(n.router) && pf(n);
  let r;
  for (let R = 0; R < n.matches.length; R++) {
    try {
      const T = B0(n, R);
      co(T) && (await T);
    } catch (T) {
      if (wt(T)) throw T;
      if (ht(T)) r = T;
      else if (!n.preload) throw T;
      break;
    }
    if (n.serialError) break;
  }
  const l = n.firstBadMatchIndex ?? n.matches.length,
    c = r && !n.preload ? sp(n, r) : void 0,
    d = r && n.preload ? 0 : c !== void 0 ? Math.min(c + 1, l) : l;
  let g, h;
  for (let R = 0; R < d; R++) s.push(z0(n, s, R));
  try {
    await Promise.all(s);
  } catch {
    const R = await Promise.allSettled(s);
    for (const T of R) {
      if (T.status !== "rejected") continue;
      const E = T.reason;
      if (wt(E)) throw E;
      ht(E) ? (g ?? (g = E)) : (h ?? (h = E));
    }
    if (h !== void 0) throw h;
  }
  const m = g ?? (r && !n.preload ? r : void 0);
  let y = n.serialError ? (n.firstBadMatchIndex ?? 0) : n.matches.length - 1;
  if (!m && r && n.preload) return n.matches;
  if (m) {
    const R = sp(n, m);
    R === void 0 && zn();
    const T = n.matches[R],
      E = n.router.looseRoutesById[T.routeId],
      D = (S = n.router.options) == null ? void 0 : S.defaultNotFoundComponent;
    (!E.options.notFoundComponent && D && (E.options.notFoundComponent = D),
      (m.routeId = T.routeId));
    const K = T.routeId === n.router.routeTree.id;
    (n.updateMatch(T.id, (Y) => ({
      ...Y,
      ...(K
        ? { status: "success", globalNotFound: !0, error: void 0 }
        : { status: "notFound", error: m }),
      isFetching: !1,
    })),
      (y = R),
      await ho(E, ["notFoundComponent"]));
  } else if (!n.preload) {
    const R = n.matches[0];
    R.globalNotFound ||
      ((w = n.router.getMatch(R.id)) != null &&
        w.globalNotFound &&
        n.updateMatch(R.id, (T) => ({ ...T, globalNotFound: !1, error: void 0 })));
  }
  if (n.serialError && n.firstBadMatchIndex !== void 0) {
    const R = n.router.looseRoutesById[n.matches[n.firstBadMatchIndex].routeId];
    await ho(R, ["errorComponent"]);
  }
  for (let R = 0; R <= y; R++) {
    const { id: T, routeId: E } = n.matches[R],
      D = n.router.looseRoutesById[E];
    try {
      const K = q0(n, T, D);
      if (K) {
        const Y = await K;
        n.updateMatch(T, (P) => ({ ...P, ...Y }));
      }
    } catch (K) {
      console.error(`Error executing head for route ${E}:`, K);
    }
  }
  const v = pf(n);
  if ((co(v) && (await v), m)) throw m;
  if (n.serialError && !n.preload && !n.onReady) throw n.serialError;
  return n.matches;
}
function up(a, n) {
  const s = n
    .map((r) => {
      var l, c;
      return (c = (l = a.options[r]) == null ? void 0 : l.preload) == null ? void 0 : c.call(l);
    })
    .filter(Boolean);
  if (s.length !== 0) return Promise.all(s);
}
function ho(a, n = Gr) {
  !a._lazyLoaded &&
    a._lazyPromise === void 0 &&
    (a.lazyFn
      ? (a._lazyPromise = a.lazyFn().then((r) => {
          const { id: l, ...c } = r.options;
          (Object.assign(a.options, c), (a._lazyLoaded = !0), (a._lazyPromise = void 0));
        }))
      : (a._lazyLoaded = !0));
  const s = () =>
    a._componentsLoaded
      ? void 0
      : n === Gr
        ? (() => {
            if (a._componentsPromise === void 0) {
              const r = up(a, Gr);
              r
                ? (a._componentsPromise = r.then(() => {
                    ((a._componentsLoaded = !0), (a._componentsPromise = void 0));
                  }))
                : (a._componentsLoaded = !0);
            }
            return a._componentsPromise;
          })()
        : up(a, n);
  return a._lazyPromise ? a._lazyPromise.then(s) : s();
}
function Ty(a) {
  var n;
  for (const s of Gr) if ((n = a.options[s]) != null && n.preload) return !0;
  return !1;
}
var Gr = ["component", "errorComponent", "pendingComponent", "notFoundComponent"],
  yi = "__TSR_index",
  cp = "popstate",
  fp = "beforeunload";
function I0(a) {
  let n = a.getLocation();
  const s = new Set(),
    r = (d) => {
      ((n = a.getLocation()), s.forEach((g) => g({ location: n, action: d })));
    },
    l = (d) => {
      (a.notifyOnIndexChange ?? !0) ? r(d) : (n = a.getLocation());
    },
    c = async ({ task: d, navigateOpts: g, ...h }) => {
      var v, S;
      if ((g == null ? void 0 : g.ignoreBlocker) ?? !1) {
        d();
        return;
      }
      const m = ((v = a.getBlockers) == null ? void 0 : v.call(a)) ?? [],
        y = h.type === "PUSH" || h.type === "REPLACE";
      if (typeof document < "u" && m.length && y)
        for (const w of m) {
          const R = il(h.path, h.state);
          if (await w.blockerFn({ currentLocation: n, nextLocation: R, action: h.type })) {
            (S = a.onBlocked) == null || S.call(a);
            return;
          }
        }
      d();
    };
  return {
    get location() {
      return n;
    },
    get length() {
      return a.getLength();
    },
    subscribers: s,
    subscribe: (d) => (
      s.add(d),
      () => {
        s.delete(d);
      }
    ),
    push: (d, g, h) => {
      const m = n.state[yi];
      ((g = dp(m + 1, g)),
        c({
          task: () => {
            (a.pushState(d, g), r({ type: "PUSH" }));
          },
          navigateOpts: h,
          type: "PUSH",
          path: d,
          state: g,
        }));
    },
    replace: (d, g, h) => {
      const m = n.state[yi];
      ((g = dp(m, g)),
        c({
          task: () => {
            (a.replaceState(d, g), r({ type: "REPLACE" }));
          },
          navigateOpts: h,
          type: "REPLACE",
          path: d,
          state: g,
        }));
    },
    go: (d, g) => {
      c({
        task: () => {
          (a.go(d), l({ type: "GO", index: d }));
        },
        navigateOpts: g,
        type: "GO",
      });
    },
    back: (d) => {
      c({
        task: () => {
          (a.back((d == null ? void 0 : d.ignoreBlocker) ?? !1), l({ type: "BACK" }));
        },
        navigateOpts: d,
        type: "BACK",
      });
    },
    forward: (d) => {
      c({
        task: () => {
          (a.forward((d == null ? void 0 : d.ignoreBlocker) ?? !1), l({ type: "FORWARD" }));
        },
        navigateOpts: d,
        type: "FORWARD",
      });
    },
    canGoBack: () => n.state[yi] !== 0,
    createHref: (d) => a.createHref(d),
    block: (d) => {
      var h;
      if (!a.setBlockers) return () => {};
      const g = ((h = a.getBlockers) == null ? void 0 : h.call(a)) ?? [];
      return (
        a.setBlockers([...g, d]),
        () => {
          var y, v;
          const m = ((y = a.getBlockers) == null ? void 0 : y.call(a)) ?? [];
          (v = a.setBlockers) == null ||
            v.call(
              a,
              m.filter((S) => S !== d),
            );
        }
      );
    },
    flush: () => {
      var d;
      return (d = a.flush) == null ? void 0 : d.call(a);
    },
    destroy: () => {
      var d;
      return (d = a.destroy) == null ? void 0 : d.call(a);
    },
    notify: r,
  };
}
function dp(a, n) {
  n || (n = {});
  const s = Uf();
  return { ...n, key: s, __TSR_key: s, [yi]: a };
}
function j0(a) {
  var I, Q;
  const n = typeof document < "u" ? window : void 0,
    s = n.history.pushState,
    r = n.history.replaceState;
  let l = [];
  const c = () => l,
    d = (z) => (l = z),
    g = (z) => z,
    h = () => il(`${n.location.pathname}${n.location.search}${n.location.hash}`, n.history.state);
  if (
    !((I = n.history.state) != null && I.__TSR_key) &&
    !((Q = n.history.state) != null && Q.key)
  ) {
    const z = Uf();
    n.history.replaceState({ [yi]: 0, key: z, __TSR_key: z }, "");
  }
  let m = h(),
    y,
    v = !1,
    S = !1,
    w = !1,
    R = !1;
  const T = () => m;
  let E, D;
  const K = () => {
      E &&
        ((U._ignoreSubscribers = !0),
        (E.isPush ? n.history.pushState : n.history.replaceState)(E.state, "", E.href),
        (U._ignoreSubscribers = !1),
        (E = void 0),
        (D = void 0),
        (y = void 0));
    },
    Y = (z, X, $) => {
      const ne = g(X);
      (D || (y = m),
        (m = il(X, $)),
        (E = { href: ne, state: $, isPush: (E == null ? void 0 : E.isPush) || z === "push" }),
        D || (D = Promise.resolve().then(() => K())));
    },
    P = (z) => {
      ((m = h()), U.notify({ type: z }));
    },
    B = async () => {
      if (S) {
        S = !1;
        return;
      }
      const z = h(),
        X = z.state[yi] - m.state[yi],
        $ = X === 1,
        ne = X === -1,
        te = (!$ && !ne) || v;
      v = !1;
      const J = te ? "GO" : ne ? "BACK" : "FORWARD",
        O = te ? { type: "GO", index: X } : { type: ne ? "BACK" : "FORWARD" };
      if (w) w = !1;
      else {
        const j = c();
        if (typeof document < "u" && j.length) {
          for (const ie of j)
            if (await ie.blockerFn({ currentLocation: m, nextLocation: z, action: J })) {
              ((S = !0), n.history.go(1), U.notify(O));
              return;
            }
        }
      }
      ((m = h()), U.notify(O));
    },
    G = (z) => {
      if (R) {
        R = !1;
        return;
      }
      let X = !1;
      const $ = c();
      if (typeof document < "u" && $.length)
        for (const ne of $) {
          const te = ne.enableBeforeUnload ?? !0;
          if (te === !0) {
            X = !0;
            break;
          }
          if (typeof te == "function" && te() === !0) {
            X = !0;
            break;
          }
        }
      if (X) return (z.preventDefault(), (z.returnValue = ""));
    },
    U = I0({
      getLocation: T,
      getLength: () => n.history.length,
      pushState: (z, X) => Y("push", z, X),
      replaceState: (z, X) => Y("replace", z, X),
      back: (z) => (z && (w = !0), (R = !0), n.history.back()),
      forward: (z) => {
        (z && (w = !0), (R = !0), n.history.forward());
      },
      go: (z) => {
        ((v = !0), n.history.go(z));
      },
      createHref: (z) => g(z),
      flush: K,
      destroy: () => {
        ((n.history.pushState = s),
          (n.history.replaceState = r),
          n.removeEventListener(fp, G, { capture: !0 }),
          n.removeEventListener(cp, B));
      },
      onBlocked: () => {
        y && m !== y && (m = y);
      },
      getBlockers: c,
      setBlockers: d,
      notifyOnIndexChange: !1,
    });
  return (
    n.addEventListener(fp, G, { capture: !0 }),
    n.addEventListener(cp, B),
    (n.history.pushState = function (...z) {
      const X = s.apply(n.history, z);
      return (U._ignoreSubscribers || P("PUSH"), X);
    }),
    (n.history.replaceState = function (...z) {
      const X = r.apply(n.history, z);
      return (U._ignoreSubscribers || P("REPLACE"), X);
    }),
    U
  );
}
function H0(a) {
  let n = a.replace(/[\x00-\x1f\x7f]/g, "");
  return (n.startsWith("//") && (n = "/" + n.replace(/^\/+/, "")), n);
}
function il(a, n) {
  const s = H0(a),
    r = s.indexOf("#"),
    l = s.indexOf("?"),
    c = Uf();
  return {
    href: s,
    pathname: s.substring(0, r > 0 ? (l > 0 ? Math.min(r, l) : r) : l > 0 ? l : s.length),
    hash: r > -1 ? s.substring(r) : "",
    search: l > -1 ? s.slice(l, r === -1 ? void 0 : r) : "",
    state: n || { [yi]: 0, key: c, __TSR_key: c },
  };
}
function Uf() {
  return (Math.random() + 1).toString(36).substring(7);
}
function Ga(a, n) {
  const s = n,
    r = a;
  return {
    fromLocation: s,
    toLocation: r,
    pathChanged: (s == null ? void 0 : s.pathname) !== r.pathname,
    hrefChanged: (s == null ? void 0 : s.href) !== r.href,
    hashChanged: (s == null ? void 0 : s.hash) !== r.hash,
  };
}
var V0 = class {
    constructor(a, n) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this.resetNextScroll = !0),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.isScrollRestoring = !1),
        (this.isScrollRestorationSetup = !1),
        (this.startTransition = (s) => s()),
        (this.update = (s) => {
          var y;
          const r = this.options,
            l = this.basepath ?? (r == null ? void 0 : r.basepath) ?? "/",
            c = this.basepath === void 0,
            d = r == null ? void 0 : r.rewrite;
          if (
            ((this.options = { ...r, ...s }),
            (this.isServer = this.options.isServer ?? typeof document > "u"),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = v0(this.options.pathParamsAllowedCharacters)),
            (!this.history || (this.options.history && this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = j0())),
            (this.origin = this.options.origin),
            this.origin ||
              (window != null && window.origin && window.origin !== "null"
                ? (this.origin = window.origin)
                : (this.origin = "http://localhost")),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let v;
            ((this.resolvePathCache = fo(1e3)), (v = this.buildRouteTree()), this.setRoutes(v));
          }
          if (!this.stores && this.latestLocation) {
            const v = this.getStoreConfig(this);
            ((this.batch = v.batch), (this.stores = D0($0(this.latestLocation), v)), _0(this));
          }
          let g = !1;
          const h = this.options.basepath ?? "/",
            m = this.options.rewrite;
          if (c || l !== h || d !== m) {
            this.basepath = h;
            const v = [],
              S = vy(h);
            (S && S !== "/" && v.push(L0({ basepath: h })),
              m && v.push(m),
              (this.rewrite = v.length === 0 ? void 0 : v.length === 1 ? v[0] : k0(v)),
              this.history && this.updateLatestLocation(),
              (g = !0));
          }
          (g && this.stores && this.stores.location.setState(() => this.latestLocation),
            typeof window < "u" &&
              "CSS" in window &&
              typeof ((y = window.CSS) == null ? void 0 : y.supports) == "function" &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                "selector(:active-view-transition-type(a)",
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
        }),
        (this.buildRouteTree = () => {
          const s = d0(this.routeTree, this.options.caseSensitive, (r, l) => {
            r.init({ originalIndex: l });
          });
          return (this.options.routeMasks && r0(this.options.routeMasks, s.processedTree), s);
        }),
        (this.subscribe = (s, r) => {
          const l = { eventType: s, fn: r };
          return (
            this.subscribers.add(l),
            () => {
              this.subscribers.delete(l);
            }
          );
        }),
        (this.emit = (s) => {
          this.subscribers.forEach((r) => {
            r.eventType === s.type && r.fn(s);
          });
        }),
        (this.parseLocation = (s, r) => {
          const l = ({ pathname: h, search: m, hash: y, href: v, state: S }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(h)) {
                const D = this.options.parseSearch(m),
                  K = this.options.stringifySearch(D);
                return {
                  href: h + K + y,
                  publicHref: v,
                  pathname: Xs(h).path,
                  external: !1,
                  searchStr: K,
                  search: Ui(r == null ? void 0 : r.search, D),
                  hash: Xs(y.slice(1)).path,
                  state: qi(r == null ? void 0 : r.state, S),
                };
              }
              const w = new URL(v, this.origin),
                R = mf(this.rewrite, w),
                T = this.options.parseSearch(R.search),
                E = this.options.stringifySearch(T);
              return (
                (R.search = E),
                {
                  href: R.href.replace(R.origin, ""),
                  publicHref: v,
                  pathname: Xs(R.pathname).path,
                  external: !!this.rewrite && R.origin !== this.origin,
                  searchStr: E,
                  search: Ui(r == null ? void 0 : r.search, T),
                  hash: Xs(R.hash.slice(1)).path,
                  state: qi(r == null ? void 0 : r.state, S),
                }
              );
            },
            c = l(s),
            { __tempLocation: d, __tempKey: g } = c.state;
          if (d && (!g || g === this.tempLocationKey)) {
            const h = l(d);
            return (
              (h.state.key = c.state.key),
              (h.state.__TSR_key = c.state.__TSR_key),
              delete h.state.__tempLocation,
              { ...h, maskedLocation: c }
            );
          }
          return c;
        }),
        (this.resolvePathWithBase = (s, r) =>
          y0({
            base: s,
            to: Pf(r),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (s, r, l) =>
          typeof s == "string"
            ? this.matchRoutesInternal({ pathname: s, search: r }, l)
            : this.matchRoutesInternal(s, r)),
        (this.getMatchedRoutes = (s) =>
          F0({ pathname: s, routesById: this.routesById, processedTree: this.processedTree })),
        (this.cancelMatch = (s) => {
          const r = this.getMatch(s);
          r &&
            (r.abortController.abort(),
            clearTimeout(r._nonReactive.pendingTimeout),
            (r._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingMatchesId.state.forEach((s) => {
            this.cancelMatch(s);
          }),
            this.stores.matchesId.state.forEach((s) => {
              var l;
              if (this.stores.pendingMatchStoresById.has(s)) return;
              const r = (l = this.stores.activeMatchStoresById.get(s)) == null ? void 0 : l.state;
              r && (r.status === "pending" || r.isFetching === "loader") && this.cancelMatch(s);
            }));
        }),
        (this.buildLocation = (s) => {
          const r = (c = {}) => {
              var z, X;
              const d = c._fromLocation || this.pendingBuiltLocation || this.latestLocation,
                g = this.matchRoutesLightweight(d);
              c.from;
              const h = c.unsafeRelative === "path" ? d.pathname : (c.from ?? g.fullPath),
                m = this.resolvePathWithBase(h, "."),
                y = g.search,
                v = Object.assign(Object.create(null), g.params),
                S = c.to
                  ? this.resolvePathWithBase(m, `${c.to}`)
                  : this.resolvePathWithBase(m, "."),
                w =
                  c.params === !1 || c.params === null
                    ? Object.create(null)
                    : (c.params ?? !0) === !0
                      ? v
                      : Object.assign(v, gi(c.params, v)),
                R = this.getMatchedRoutes(S);
              let T = R.matchedRoutes;
              if (
                ((!R.foundRoute || (R.foundRoute.path !== "/" && R.routeParams["**"])) &&
                  this.options.notFoundRoute &&
                  (T = [...T, this.options.notFoundRoute]),
                Object.keys(w).length > 0)
              )
                for (const $ of T) {
                  const ne =
                    ((z = $.options.params) == null ? void 0 : z.stringify) ??
                    $.options.stringifyParams;
                  if (ne)
                    try {
                      Object.assign(w, ne(w));
                    } catch {}
                }
              const E = s.leaveParams
                ? S
                : Xs(
                    tp({
                      path: S,
                      params: w,
                      decoder: this.pathParamsDecoder,
                      server: this.isServer,
                    }).interpolatedPath,
                  ).path;
              let D = y;
              if (s._includeValidateSearch && (X = this.options.search) != null && X.strict) {
                const $ = {};
                (T.forEach((ne) => {
                  if (ne.options.validateSearch)
                    try {
                      Object.assign($, Kr(ne.options.validateSearch, { ...$, ...D }));
                    } catch {}
                }),
                  (D = $));
              }
              ((D = Y0({
                search: D,
                dest: c,
                destRoutes: T,
                _includeValidateSearch: s._includeValidateSearch,
              })),
                (D = Ui(y, D)));
              const K = this.options.stringifySearch(D),
                Y = c.hash === !0 ? d.hash : c.hash ? gi(c.hash, d.hash) : void 0,
                P = Y ? `#${Y}` : "";
              let B = c.state === !0 ? d.state : c.state ? gi(c.state, d.state) : {};
              B = qi(d.state, B);
              const G = `${E}${K}${P}`;
              let U,
                I,
                Q = !1;
              if (this.rewrite) {
                const $ = new URL(G, this.origin),
                  ne = Sy(this.rewrite, $);
                ((U = $.href.replace($.origin, "")),
                  ne.origin !== this.origin
                    ? ((I = ne.href), (Q = !0))
                    : (I = ne.pathname + ne.search + ne.hash));
              } else ((U = a0(G)), (I = U));
              return {
                publicHref: I,
                href: U,
                pathname: E,
                search: D,
                searchStr: K,
                state: B,
                hash: Y ?? "",
                external: Q,
                unmaskOnReload: c.unmaskOnReload,
              };
            },
            l = (c = {}, d) => {
              const g = r(c);
              let h = d ? r(d) : void 0;
              if (!h) {
                const m = Object.create(null);
                if (this.options.routeMasks) {
                  const y = l0(g.pathname, this.processedTree);
                  if (y) {
                    Object.assign(m, y.rawParams);
                    const { from: v, params: S, ...w } = y.route,
                      R =
                        S === !1 || S === null
                          ? Object.create(null)
                          : (S ?? !0) === !0
                            ? m
                            : Object.assign(m, gi(S, m));
                    ((d = { from: s.from, ...w, params: R }), (h = r(d)));
                  }
                }
              }
              return (h && (g.maskedLocation = h), g);
            };
          return s.mask ? l(s, { from: s.from, ...s.mask }) : l(s);
        }),
        (this.commitLocation = async ({ viewTransition: s, ignoreBlocker: r, ...l }) => {
          const c = () => {
              const h = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
              h.forEach((y) => {
                l.state[y] = this.latestLocation.state[y];
              });
              const m = ji(l.state, this.latestLocation.state);
              return (
                h.forEach((y) => {
                  delete l.state[y];
                }),
                m
              );
            },
            d = pi(this.latestLocation.href) === pi(l.href);
          let g = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = Xa(() => {
              (g == null || g.resolve(), (g = void 0));
            })),
            d && c())
          )
            this.load();
          else {
            let { maskedLocation: h, hashScrollIntoView: m, ...y } = l;
            (h &&
              ((y = {
                ...h,
                state: {
                  ...h.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...y,
                    search: y.searchStr,
                    state: {
                      ...y.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (y.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (y.state.__tempKey = this.tempLocationKey)),
              (y.state.__hashScrollIntoViewOptions =
                m ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = s),
              this.history[l.replace ? "replace" : "push"](y.publicHref, y.state, {
                ignoreBlocker: r,
              }));
          }
          return (
            (this.resetNextScroll = l.resetScroll ?? !0),
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: s,
          resetScroll: r,
          hashScrollIntoView: l,
          viewTransition: c,
          ignoreBlocker: d,
          href: g,
          ...h
        } = {}) => {
          if (g) {
            const v = this.history.location.state.__TSR_index,
              S = il(g, { __TSR_index: s ? v : v + 1 }),
              w = new URL(S.pathname, this.origin);
            ((h.to = mf(this.rewrite, w).pathname),
              (h.search = this.options.parseSearch(S.search)),
              (h.hash = S.hash.slice(1)));
          }
          const m = this.buildLocation({ ...h, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = m;
          const y = this.commitLocation({
            ...m,
            viewTransition: c,
            replace: s,
            resetScroll: r,
            hashScrollIntoView: l,
            ignoreBlocker: d,
          });
          return (
            Promise.resolve().then(() => {
              this.pendingBuiltLocation === m && (this.pendingBuiltLocation = void 0);
            }),
            y
          );
        }),
        (this.navigate = async ({ to: s, reloadDocument: r, href: l, publicHref: c, ...d }) => {
          var h, m;
          let g = !1;
          if (l)
            try {
              (new URL(`${l}`), (g = !0));
            } catch {}
          if ((g && !r && (r = !0), r)) {
            if (s !== void 0 || !l) {
              const v = this.buildLocation({ to: s, ...d });
              ((l = l ?? v.publicHref), (c = c ?? v.publicHref));
            }
            const y = !g && c ? c : l;
            if (tl(y, this.protocolAllowlist)) return Promise.resolve();
            if (!d.ignoreBlocker) {
              const v = ((m = (h = this.history).getBlockers) == null ? void 0 : m.call(h)) ?? [];
              for (const S of v)
                if (
                  S != null &&
                  S.blockerFn &&
                  (await S.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: "PUSH",
                  }))
                )
                  return Promise.resolve();
            }
            return (
              d.replace ? window.location.replace(y) : (window.location.href = y),
              Promise.resolve()
            );
          }
          return this.buildAndCommitLocation({ ...d, href: l, to: s, _isNavigate: !0 });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          const s = this.matchRoutes(this.latestLocation),
            r = this.stores.cachedMatchesSnapshot.state.filter(
              (l) => !s.some((c) => c.id === l.id),
            );
          this.batch(() => {
            (this.stores.status.setState(() => "pending"),
              this.stores.statusCode.setState(() => 200),
              this.stores.isLoading.setState(() => !0),
              this.stores.location.setState(() => this.latestLocation),
              this.stores.setPendingMatches(s),
              this.stores.setCachedMatches(r));
          });
        }),
        (this.load = async (s) => {
          let r, l, c;
          const d = this.stores.resolvedLocation.state ?? this.stores.location.state;
          for (
            c = new Promise((h) => {
              this.startTransition(async () => {
                var m;
                try {
                  this.beforeLoad();
                  const y = this.latestLocation,
                    v = this.stores.resolvedLocation.state,
                    S = Ga(y, v);
                  (this.stores.redirect.state || this.emit({ type: "onBeforeNavigate", ...S }),
                    this.emit({ type: "onBeforeLoad", ...S }),
                    await lp({
                      router: this,
                      sync: s == null ? void 0 : s.sync,
                      forceStaleReload: d.href === y.href,
                      matches: this.stores.pendingMatchesSnapshot.state,
                      location: y,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            var D, K;
                            let w = null,
                              R = null,
                              T = null,
                              E = null;
                            this.batch(() => {
                              const Y = this.stores.pendingMatchesSnapshot.state,
                                P = Y.length,
                                B = this.stores.activeMatchesSnapshot.state;
                              w = P
                                ? B.filter((I) => !this.stores.pendingMatchStoresById.has(I.id))
                                : null;
                              const G = new Set();
                              for (const I of this.stores.pendingMatchStoresById.values())
                                I.routeId && G.add(I.routeId);
                              const U = new Set();
                              for (const I of this.stores.activeMatchStoresById.values())
                                I.routeId && U.add(I.routeId);
                              ((R = P ? B.filter((I) => !G.has(I.routeId)) : null),
                                (T = P ? Y.filter((I) => !U.has(I.routeId)) : null),
                                (E = P ? Y.filter((I) => U.has(I.routeId)) : B),
                                this.stores.isLoading.setState(() => !1),
                                this.stores.loadedAt.setState(() => Date.now()),
                                P &&
                                  (this.stores.setActiveMatches(Y),
                                  this.stores.setPendingMatches([]),
                                  this.stores.setCachedMatches([
                                    ...this.stores.cachedMatchesSnapshot.state,
                                    ...w.filter(
                                      (I) =>
                                        I.status !== "error" &&
                                        I.status !== "notFound" &&
                                        I.status !== "redirected",
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (const [Y, P] of [
                              [R, "onLeave"],
                              [T, "onEnter"],
                              [E, "onStay"],
                            ])
                              if (Y)
                                for (const B of Y)
                                  (K = (D = this.looseRoutesById[B.routeId].options)[P]) == null ||
                                    K.call(D, B);
                          });
                        });
                      },
                    }));
                } catch (y) {
                  wt(y)
                    ? ((r = y), this.navigate({ ...r.options, replace: !0, ignoreBlocker: !0 }))
                    : ht(y) && (l = y);
                  const v = r
                    ? r.status
                    : l
                      ? 404
                      : this.stores.activeMatchesSnapshot.state.some((S) => S.status === "error")
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.setState(() => v),
                      this.stores.redirect.setState(() => r));
                  });
                }
                (this.latestLoadPromise === c &&
                  ((m = this.commitLocationPromise) == null || m.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  h());
              });
            }),
              this.latestLoadPromise = c,
              await c;
            this.latestLoadPromise && c !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let g;
          (this.hasNotFoundMatch()
            ? (g = 404)
            : this.stores.activeMatchesSnapshot.state.some((h) => h.status === "error") &&
              (g = 500),
            g !== void 0 && this.stores.statusCode.setState(() => g));
        }),
        (this.startViewTransition = (s) => {
          const r = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            r &&
              typeof document < "u" &&
              "startViewTransition" in document &&
              typeof document.startViewTransition == "function")
          ) {
            let l;
            if (typeof r == "object" && this.isViewTransitionTypesSupported) {
              const c = this.latestLocation,
                d = this.stores.resolvedLocation.state,
                g = typeof r.types == "function" ? r.types(Ga(c, d)) : r.types;
              if (g === !1) {
                s();
                return;
              }
              l = { update: s, types: g };
            } else l = s;
            document.startViewTransition(l);
          } else s();
        }),
        (this.updateMatch = (s, r) => {
          this.startTransition(() => {
            const l = this.stores.pendingMatchStoresById.get(s);
            if (l) {
              l.setState(r);
              return;
            }
            const c = this.stores.activeMatchStoresById.get(s);
            if (c) {
              c.setState(r);
              return;
            }
            const d = this.stores.cachedMatchStoresById.get(s);
            if (d) {
              const g = r(d.state);
              g.status === "redirected"
                ? this.stores.cachedMatchStoresById.delete(s) &&
                  this.stores.cachedMatchesId.setState((h) => h.filter((m) => m !== s))
                : d.setState(() => g);
            }
          });
        }),
        (this.getMatch = (s) => {
          var r, l, c;
          return (
            ((r = this.stores.cachedMatchStoresById.get(s)) == null ? void 0 : r.state) ??
            ((l = this.stores.pendingMatchStoresById.get(s)) == null ? void 0 : l.state) ??
            ((c = this.stores.activeMatchStoresById.get(s)) == null ? void 0 : c.state)
          );
        }),
        (this.invalidate = (s) => {
          const r = (l) => {
            var c;
            return (((c = s == null ? void 0 : s.filter) == null ? void 0 : c.call(s, l)) ?? !0)
              ? {
                  ...l,
                  invalid: !0,
                  ...((s != null && s.forcePending) ||
                  l.status === "error" ||
                  l.status === "notFound"
                    ? { status: "pending", error: void 0 }
                    : void 0),
                }
              : l;
          };
          return (
            this.batch(() => {
              (this.stores.setActiveMatches(this.stores.activeMatchesSnapshot.state.map(r)),
                this.stores.setCachedMatches(this.stores.cachedMatchesSnapshot.state.map(r)),
                this.stores.setPendingMatches(this.stores.pendingMatchesSnapshot.state.map(r)));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: s == null ? void 0 : s.sync })
          );
        }),
        (this.getParsedLocationHref = (s) => s.publicHref || "/"),
        (this.resolveRedirect = (s) => {
          const r = s.headers.get("Location");
          if (!s.options.href || s.options._builtLocation) {
            const l = s.options._builtLocation ?? this.buildLocation(s.options),
              c = this.getParsedLocationHref(l);
            ((s.options.href = c), s.headers.set("Location", c));
          } else if (r)
            try {
              const l = new URL(r);
              if (this.origin && l.origin === this.origin) {
                const c = l.pathname + l.search + l.hash;
                ((s.options.href = c), s.headers.set("Location", c));
              }
            } catch {}
          if (
            s.options.href &&
            !s.options._builtLocation &&
            tl(s.options.href, this.protocolAllowlist)
          )
            throw new Error("Redirect blocked: unsafe protocol");
          return (s.headers.get("Location") || s.headers.set("Location", s.options.href), s);
        }),
        (this.clearCache = (s) => {
          const r = s == null ? void 0 : s.filter;
          r !== void 0
            ? this.stores.setCachedMatches(
                this.stores.cachedMatchesSnapshot.state.filter((l) => !r(l)),
              )
            : this.stores.setCachedMatches([]);
        }),
        (this.clearExpiredCache = () => {
          const s = Date.now(),
            r = (l) => {
              const c = this.looseRoutesById[l.routeId];
              if (!c.options.loader) return !0;
              const d =
                (l.preload
                  ? (c.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                  : (c.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
              return l.status === "error" ? !0 : s - l.updatedAt >= d;
            };
          this.clearCache({ filter: r });
        }),
        (this.loadRouteChunk = ho),
        (this.preloadRoute = async (s) => {
          const r = s._builtLocation ?? this.buildLocation(s);
          let l = this.matchRoutes(r, { throwOnError: !0, preload: !0, dest: s });
          const c = new Set([
              ...this.stores.matchesId.state,
              ...this.stores.pendingMatchesId.state,
            ]),
            d = new Set([...c, ...this.stores.cachedMatchesId.state]),
            g = l.filter((h) => !d.has(h.id));
          if (g.length) {
            const h = this.stores.cachedMatchesSnapshot.state;
            this.stores.setCachedMatches([...h, ...g]);
          }
          try {
            return (
              (l = await lp({
                router: this,
                matches: l,
                location: r,
                preload: !0,
                updateMatch: (h, m) => {
                  c.has(h) ? (l = l.map((y) => (y.id === h ? m(y) : y))) : this.updateMatch(h, m);
                },
              })),
              l
            );
          } catch (h) {
            if (wt(h))
              return h.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...h.options, _fromLocation: r });
            ht(h) || console.error(h);
            return;
          }
        }),
        (this.matchRoute = (s, r) => {
          const l = {
              ...s,
              to: s.to ? this.resolvePathWithBase(s.from || "", s.to) : void 0,
              params: s.params || {},
              leaveParams: !0,
            },
            c = this.buildLocation(l);
          if (r != null && r.pending && this.stores.status.state !== "pending") return !1;
          const d = (
              (r == null ? void 0 : r.pending) === void 0 ? !this.stores.isLoading.state : r.pending
            )
              ? this.latestLocation
              : this.stores.resolvedLocation.state || this.stores.location.state,
            g = u0(
              c.pathname,
              (r == null ? void 0 : r.caseSensitive) ?? !1,
              (r == null ? void 0 : r.fuzzy) ?? !1,
              d.pathname,
              this.processedTree,
            );
          return !g || (s.params && !ji(g.rawParams, s.params, { partial: !0 }))
            ? !1
            : ((r == null ? void 0 : r.includeSearch) ?? !0)
              ? ji(d.search, c.search, { partial: !0 })
                ? g.rawParams
                : !1
              : g.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.activeMatchesSnapshot.state.some(
            (s) => s.status === "notFound" || s.globalNotFound,
          )),
        (this.getStoreConfig = n),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...a,
          caseSensitive: a.caseSensitive ?? !1,
          notFoundMode: a.notFoundMode ?? "fuzzy",
          stringifySearch: a.stringifySearch ?? C0,
          parseSearch: a.parseSearch ?? x0,
          protocolAllowlist: a.protocolAllowlist ?? i0,
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.state;
    }
    setRoutes({ routesById: a, routesByPath: n, processedTree: s }) {
      ((this.routesById = a), (this.routesByPath = n), (this.processedTree = s));
      const r = this.options.notFoundRoute;
      r && (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(a) {
      return a != null && a.id
        ? (a.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(a, n) {
      var v, S;
      const s = this.getMatchedRoutes(a.pathname),
        { foundRoute: r, routeParams: l, parsedParams: c } = s;
      let { matchedRoutes: d } = s,
        g = !1;
      (r ? r.path !== "/" && l["**"] : pi(a.pathname)) &&
        (this.options.notFoundRoute ? (d = [...d, this.options.notFoundRoute]) : (g = !0));
      const h = g ? K0(this.options.notFoundMode, d) : void 0,
        m = new Array(d.length),
        y = new Map();
      for (const w of this.stores.activeMatchStoresById.values())
        w.routeId && y.set(w.routeId, w.state);
      for (let w = 0; w < d.length; w++) {
        const R = d[w],
          T = m[w - 1];
        let E, D, K;
        {
          const J = (T == null ? void 0 : T.search) ?? a.search,
            O = (T == null ? void 0 : T._strictSearch) ?? void 0;
          try {
            const j = Kr(R.options.validateSearch, { ...J }) ?? void 0;
            ((E = { ...J, ...j }), (D = { ...O, ...j }), (K = void 0));
          } catch (j) {
            let ie = j;
            if (
              (j instanceof al || (ie = new al(j.message, { cause: j })),
              n != null && n.throwOnError)
            )
              throw ie;
            ((E = J), (D = {}), (K = ie));
          }
        }
        const Y =
            ((S = (v = R.options).loaderDeps) == null ? void 0 : S.call(v, { search: E })) ?? "",
          P = Y ? JSON.stringify(Y) : "",
          { interpolatedPath: B, usedParams: G } = tp({
            path: R.fullPath,
            params: l,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          U = R.id + B + P,
          I = this.getMatch(U),
          Q = y.get(R.id),
          z = (I == null ? void 0 : I._strictParams) ?? G;
        let X;
        if (!I)
          try {
            hp(R, G, c, z);
          } catch (J) {
            if (
              (ht(J) || wt(J) ? (X = J) : (X = new Q0(J.message, { cause: J })),
              n != null && n.throwOnError)
            )
              throw X;
          }
        Object.assign(l, z);
        const $ = Q ? "stay" : "enter";
        let ne;
        if (I)
          ne = {
            ...I,
            cause: $,
            params: (Q == null ? void 0 : Q.params) ?? l,
            _strictParams: z,
            search: Ui(Q ? Q.search : I.search, E),
            _strictSearch: D,
          };
        else {
          const J =
            R.options.loader || R.options.beforeLoad || R.lazyFn || Ty(R) ? "pending" : "success";
          ne = {
            id: U,
            ssr: R.options.ssr,
            index: w,
            routeId: R.id,
            params: (Q == null ? void 0 : Q.params) ?? l,
            _strictParams: z,
            pathname: B,
            updatedAt: Date.now(),
            search: Q ? Ui(Q.search, E) : E,
            _strictSearch: D,
            searchError: void 0,
            status: J,
            isFetching: !1,
            error: void 0,
            paramsError: X,
            __routeContext: void 0,
            _nonReactive: { loadPromise: Xa() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: $,
            loaderDeps: Q ? qi(Q.loaderDeps, Y) : Y,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: R.options.staticData || {},
            fullPath: R.fullPath,
          };
        }
        ((n != null && n.preload) || (ne.globalNotFound = h === R.id), (ne.searchError = K));
        const te = this.getParentContext(T);
        ((ne.context = { ...te, ...ne.__routeContext, ...ne.__beforeLoadContext }), (m[w] = ne));
      }
      for (let w = 0; w < m.length; w++) {
        const R = m[w],
          T = this.looseRoutesById[R.routeId],
          E = this.getMatch(R.id),
          D = y.get(R.routeId);
        if (((R.params = D ? Ui(D.params, l) : l), !E)) {
          const K = m[w - 1],
            Y = this.getParentContext(K);
          if (T.options.context) {
            const P = {
              deps: R.loaderDeps,
              params: R.params,
              context: Y ?? {},
              location: a,
              navigate: (B) => this.navigate({ ...B, _fromLocation: a }),
              buildLocation: this.buildLocation,
              cause: R.cause,
              abortController: R.abortController,
              preload: !!R.preload,
              matches: m,
              routeId: T.id,
            };
            R.__routeContext = T.options.context(P) ?? void 0;
          }
          R.context = { ...Y, ...R.__routeContext, ...R.__beforeLoadContext };
        }
      }
      return m;
    }
    matchRoutesLightweight(a) {
      var y;
      const {
          matchedRoutes: n,
          routeParams: s,
          parsedParams: r,
        } = this.getMatchedRoutes(a.pathname),
        l = uo(n),
        c = { ...a.search };
      for (const v of n)
        try {
          Object.assign(c, Kr(v.options.validateSearch, c));
        } catch {}
      const d = uo(this.stores.matchesId.state),
        g = d && ((y = this.stores.activeMatchStoresById.get(d)) == null ? void 0 : y.state),
        h = g && g.routeId === l.id && g.pathname === a.pathname;
      let m;
      if (h) m = g.params;
      else {
        const v = Object.assign(Object.create(null), s);
        for (const S of n)
          try {
            hp(S, s, r ?? {}, v);
          } catch {}
        m = v;
      }
      return { matchedRoutes: n, fullPath: l.fullPath, search: c, params: m };
    }
  },
  al = class extends Error {},
  Q0 = class extends Error {};
function $0(a) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: a,
    matches: [],
    statusCode: 200,
  };
}
function Kr(a, n) {
  if (a == null) return {};
  if ("~standard" in a) {
    const s = a["~standard"].validate(n);
    if (s instanceof Promise) throw new al("Async validation not supported");
    if (s.issues) throw new al(JSON.stringify(s.issues, void 0, 2), { cause: s });
    return s.value;
  }
  return "parse" in a ? a.parse(n) : typeof a == "function" ? a(n) : {};
}
function F0({ pathname: a, routesById: n, processedTree: s }) {
  const r = Object.create(null),
    l = pi(a);
  let c, d;
  const g = c0(l, s, !0);
  return (
    g &&
      ((c = g.route),
      Object.assign(r, g.rawParams),
      (d = Object.assign(Object.create(null), g.parsedParams))),
    {
      matchedRoutes: (g == null ? void 0 : g.branch) || [n.__root__],
      routeParams: r,
      foundRoute: c,
      parsedParams: d,
    }
  );
}
function Y0({ search: a, dest: n, destRoutes: s, _includeValidateSearch: r }) {
  return G0(s)(a, n, r ?? !1);
}
function G0(a) {
  var l;
  const n = { dest: null, _includeValidateSearch: !1, middlewares: [] };
  for (const c of a) {
    if ("search" in c.options)
      (l = c.options.search) != null &&
        l.middlewares &&
        n.middlewares.push(...c.options.search.middlewares);
    else if (c.options.preSearchFilters || c.options.postSearchFilters) {
      const d = ({ search: g, next: h }) => {
        let m = g;
        "preSearchFilters" in c.options &&
          c.options.preSearchFilters &&
          (m = c.options.preSearchFilters.reduce((v, S) => S(v), g));
        const y = h(m);
        return "postSearchFilters" in c.options && c.options.postSearchFilters
          ? c.options.postSearchFilters.reduce((v, S) => S(v), y)
          : y;
      };
      n.middlewares.push(d);
    }
    if (c.options.validateSearch) {
      const d = ({ search: g, next: h }) => {
        const m = h(g);
        if (!n._includeValidateSearch) return m;
        try {
          return { ...m, ...(Kr(c.options.validateSearch, m) ?? void 0) };
        } catch {
          return m;
        }
      };
      n.middlewares.push(d);
    }
  }
  const s = ({ search: c }) => {
    const d = n.dest;
    return d.search ? (d.search === !0 ? c : gi(d.search, c)) : {};
  };
  n.middlewares.push(s);
  const r = (c, d, g) => {
    if (c >= g.length) return d;
    const h = g[c];
    return h({ search: d, next: (y) => r(c + 1, y, g) });
  };
  return function (d, g, h) {
    return ((n.dest = g), (n._includeValidateSearch = h), r(0, d, n.middlewares));
  };
}
function K0(a, n) {
  if (a !== "root")
    for (let s = n.length - 1; s >= 0; s--) {
      const r = n[s];
      if (r.children) return r.id;
    }
  return Hi;
}
function hp(a, n, s, r) {
  var c;
  const l = ((c = a.options.params) == null ? void 0 : c.parse) ?? a.options.parseParams;
  if (l)
    if (a.options.skipRouteOnParseError) for (const d in n) d in s && (r[d] = s[d]);
    else {
      const d = l(r);
      Object.assign(r, d);
    }
}
var X0 = "Error preloading route! ☝️",
  _y = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(a) {
      if (
        ((this.init = (n) => {
          var h, m;
          this.originalIndex = n.originalIndex;
          const s = this.options,
            r = !(s != null && s.path) && !(s != null && s.id);
          ((this.parentRoute =
            (m = (h = this.options).getParentRoute) == null ? void 0 : m.call(h)),
            r ? (this._path = Hi) : this.parentRoute || zn());
          let l = r ? Hi : s == null ? void 0 : s.path;
          l && l !== "/" && (l = yy(l));
          const c = (s == null ? void 0 : s.id) || l;
          let d = r ? Hi : Yr([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, c]);
          (l === "__root__" && (l = "/"), d !== "__root__" && (d = Yr(["/", d])));
          const g = d === "__root__" ? "/" : Yr([this.parentRoute.fullPath, l]);
          ((this._path = l), (this._id = d), (this._fullPath = g), (this._to = pi(g)));
        }),
        (this.addChildren = (n) => this._addFileChildren(n)),
        (this._addFileChildren = (n) => (
          Array.isArray(n) && (this.children = n),
          typeof n == "object" && n !== null && (this.children = Object.values(n)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
        (this.update = (n) => (Object.assign(this.options, n), this)),
        (this.lazy = (n) => ((this.lazyFn = n), this)),
        (this.redirect = (n) => hl({ from: this.fullPath, ...n })),
        (this.options = a || {}),
        (this.isRoot = !(a != null && a.getParentRoute)),
        a != null && a.id && a != null && a.path)
      )
        throw new Error("Route cannot have both an 'id' and a 'path' option.");
    }
  },
  W0 = class extends _y {
    constructor(a) {
      super(a);
    }
  };
function Z0(a) {
  if (typeof document < "u" && document.querySelector) {
    const n = a.stores.location.state,
      s = n.state.__hashScrollIntoViewOptions ?? !0;
    if (s && n.hash !== "") {
      const r = document.getElementById(n.hash);
      r && r.scrollIntoView(s);
    }
  }
}
function Bf(a) {
  const n = a.errorComponent ?? qf;
  return ae.jsx(J0, {
    getResetKey: a.getResetKey,
    onCatch: a.onCatch,
    children: ({ error: s, reset: r }) =>
      s ? W.createElement(n, { error: s, reset: r }) : a.children,
  });
}
var J0 = class extends W.Component {
  constructor(...a) {
    (super(...a), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(a) {
    return { resetKey: a.getResetKey() };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(a, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(a, n) {
    this.props.onCatch && this.props.onCatch(a, n);
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function qf({ error: a }) {
  const [n, s] = W.useState(!1);
  return ae.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      ae.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          ae.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
          ae.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => s((r) => !r),
            children: n ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      ae.jsx("div", { style: { height: ".25rem" } }),
      n
        ? ae.jsx("div", {
            children: ae.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: a.message ? ae.jsx("code", { children: a.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function eR({ children: a, fallback: n = null }) {
  return Ey() ? ae.jsx(Dt.Fragment, { children: a }) : ae.jsx(Dt.Fragment, { children: n });
}
function Ey() {
  return Dt.useSyncExternalStore(
    tR,
    () => !0,
    () => !1,
  );
}
function tR() {
  return () => {};
}
var Ay = W.createContext(null);
function Gt(a) {
  return W.useContext(Ay);
}
var ml = W.createContext(void 0),
  nR = W.createContext(void 0),
  Be = ((a) => (
    (a[(a.None = 0)] = "None"),
    (a[(a.Mutable = 1)] = "Mutable"),
    (a[(a.Watching = 2)] = "Watching"),
    (a[(a.RecursedCheck = 4)] = "RecursedCheck"),
    (a[(a.Recursed = 8)] = "Recursed"),
    (a[(a.Dirty = 16)] = "Dirty"),
    (a[(a.Pending = 32)] = "Pending"),
    a
  ))(Be || {});
function iR({ update: a, notify: n, unwatched: s }) {
  return { link: r, unlink: l, propagate: c, checkDirty: d, shallowPropagate: g };
  function r(m, y, v) {
    const S = y.depsTail;
    if (S !== void 0 && S.dep === m) return;
    const w = S !== void 0 ? S.nextDep : y.deps;
    if (w !== void 0 && w.dep === m) {
      ((w.version = v), (y.depsTail = w));
      return;
    }
    const R = m.subsTail;
    if (R !== void 0 && R.version === v && R.sub === y) return;
    const T =
      (y.depsTail =
      m.subsTail =
        { version: v, dep: m, sub: y, prevDep: S, nextDep: w, prevSub: R, nextSub: void 0 });
    (w !== void 0 && (w.prevDep = T),
      S !== void 0 ? (S.nextDep = T) : (y.deps = T),
      R !== void 0 ? (R.nextSub = T) : (m.subs = T));
  }
  function l(m, y = m.sub) {
    const v = m.dep,
      S = m.prevDep,
      w = m.nextDep,
      R = m.nextSub,
      T = m.prevSub;
    return (
      w !== void 0 ? (w.prevDep = S) : (y.depsTail = S),
      S !== void 0 ? (S.nextDep = w) : (y.deps = w),
      R !== void 0 ? (R.prevSub = T) : (v.subsTail = T),
      T !== void 0 ? (T.nextSub = R) : (v.subs = R) === void 0 && s(v),
      w
    );
  }
  function c(m) {
    let y = m.nextSub,
      v;
    e: do {
      const S = m.sub;
      let w = S.flags;
      if (
        (w & 60
          ? w & 12
            ? w & 4
              ? !(w & 48) && h(m, S)
                ? ((S.flags = w | 40), (w &= 1))
                : (w = 0)
              : (S.flags = (w & -9) | 32)
            : (w = 0)
          : (S.flags = w | 32),
        w & 2 && n(S),
        w & 1)
      ) {
        const R = S.subs;
        if (R !== void 0) {
          const T = (m = R).nextSub;
          T !== void 0 && ((v = { value: y, prev: v }), (y = T));
          continue;
        }
      }
      if ((m = y) !== void 0) {
        y = m.nextSub;
        continue;
      }
      for (; v !== void 0; )
        if (((m = v.value), (v = v.prev), m !== void 0)) {
          y = m.nextSub;
          continue e;
        }
      break;
    } while (!0);
  }
  function d(m, y) {
    let v,
      S = 0,
      w = !1;
    e: do {
      const R = m.dep,
        T = R.flags;
      if (y.flags & 16) w = !0;
      else if ((T & 17) === 17) {
        if (a(R)) {
          const E = R.subs;
          (E.nextSub !== void 0 && g(E), (w = !0));
        }
      } else if ((T & 33) === 33) {
        ((m.nextSub !== void 0 || m.prevSub !== void 0) && (v = { value: m, prev: v }),
          (m = R.deps),
          (y = R),
          ++S);
        continue;
      }
      if (!w) {
        const E = m.nextDep;
        if (E !== void 0) {
          m = E;
          continue;
        }
      }
      for (; S--; ) {
        const E = y.subs,
          D = E.nextSub !== void 0;
        if ((D ? ((m = v.value), (v = v.prev)) : (m = E), w)) {
          if (a(y)) {
            (D && g(E), (y = m.sub));
            continue;
          }
          w = !1;
        } else y.flags &= -33;
        y = m.sub;
        const K = m.nextDep;
        if (K !== void 0) {
          m = K;
          continue e;
        }
      }
      return w;
    } while (!0);
  }
  function g(m) {
    do {
      const y = m.sub,
        v = y.flags;
      (v & 48) === 32 && ((y.flags = v | 16), (v & 6) === 2 && n(y));
    } while ((m = m.nextSub) !== void 0);
  }
  function h(m, y) {
    let v = y.depsTail;
    for (; v !== void 0; ) {
      if (v === m) return !0;
      v = v.prevDep;
    }
    return !1;
  }
}
function zf(a, n, s) {
  var c, d, g;
  const r = typeof a == "object",
    l = r ? a : void 0;
  return {
    next: (c = r ? a.next : a) == null ? void 0 : c.bind(l),
    error: (d = r ? a.error : n) == null ? void 0 : d.bind(l),
    complete: (g = r ? a.complete : s) == null ? void 0 : g.bind(l),
  };
}
const yf = [];
let Xr = 0;
const {
  link: gp,
  unlink: aR,
  propagate: sR,
  checkDirty: xy,
  shallowPropagate: mp,
} = iR({
  update(a) {
    return a._update();
  },
  notify(a) {
    ((yf[vf++] = a), (a.flags &= ~Be.Watching));
  },
  unwatched(a) {
    a.depsTail !== void 0 && ((a.depsTail = void 0), (a.flags = Be.Mutable | Be.Dirty), sl(a));
  },
});
let Ir = 0,
  vf = 0,
  cn,
  Sf = 0;
function Cy(a) {
  try {
    (++Sf, a());
  } finally {
    --Sf || Oy();
  }
}
function sl(a) {
  const n = a.depsTail;
  let s = n !== void 0 ? n.nextDep : a.deps;
  for (; s !== void 0; ) s = aR(s, a);
}
function Oy() {
  if (!(Sf > 0)) {
    for (; Ir < vf; ) {
      const a = yf[Ir];
      ((yf[Ir++] = void 0), a.notify());
    }
    ((Ir = 0), (vf = 0));
  }
}
function My(a, n) {
  const s = typeof a == "function",
    r = a,
    l = {
      _snapshot: s ? void 0 : a,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: s ? Be.None : Be.Mutable,
      get() {
        return (cn !== void 0 && gp(l, cn, Xr), l._snapshot);
      },
      subscribe(c) {
        const d = zf(c),
          g = { current: !1 },
          h = oR(() => {
            var m;
            (l.get(),
              g.current ? (m = d.next) == null || m.call(d, l._snapshot) : (g.current = !0));
          });
        return {
          unsubscribe: () => {
            h.stop();
          },
        };
      },
      _update(c) {
        const d = cn,
          g = Object.is;
        if (s) ((cn = l), ++Xr, (l.depsTail = void 0));
        else if (c === void 0) return !1;
        s && (l.flags = Be.Mutable | Be.RecursedCheck);
        try {
          const h = l._snapshot,
            m = typeof c == "function" ? c(h) : c === void 0 && s ? r(h) : c;
          return h === void 0 || !g(h, m) ? ((l._snapshot = m), !0) : !1;
        } finally {
          ((cn = d), s && (l.flags &= ~Be.RecursedCheck), sl(l));
        }
      },
    };
  return (
    s
      ? ((l.flags = Be.Mutable | Be.Dirty),
        (l.get = function () {
          const c = l.flags;
          if (c & Be.Dirty || (c & Be.Pending && xy(l.deps, l))) {
            if (l._update()) {
              const d = l.subs;
              d !== void 0 && mp(d);
            }
          } else c & Be.Pending && (l.flags = c & ~Be.Pending);
          return (cn !== void 0 && gp(l, cn, Xr), l._snapshot);
        }))
      : (l.set = function (c) {
          if (l._update(c)) {
            const d = l.subs;
            d !== void 0 && (sR(d), mp(d), Oy());
          }
        }),
    l
  );
}
function oR(a) {
  const n = () => {
      const r = cn;
      ((cn = s), ++Xr, (s.depsTail = void 0), (s.flags = Be.Watching | Be.RecursedCheck));
      try {
        return a();
      } finally {
        ((cn = r), (s.flags &= ~Be.RecursedCheck), sl(s));
      }
    },
    s = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: Be.Watching | Be.RecursedCheck,
      notify() {
        const r = this.flags;
        r & Be.Dirty || (r & Be.Pending && xy(this.deps, this)) ? n() : (this.flags = Be.Watching);
      },
      stop() {
        ((this.flags = Be.None), (this.depsTail = void 0), sl(this));
      },
    };
  return (n(), s);
}
class rR {
  constructor(n) {
    this.atom = My(n);
  }
  setState(n) {
    this.atom.set(n);
  }
  get state() {
    return this.atom.get();
  }
  get() {
    return this.state;
  }
  subscribe(n) {
    return this.atom.subscribe(zf(n));
  }
}
class lR {
  constructor(n) {
    this.atom = My(n);
  }
  get state() {
    return this.atom.get();
  }
  get() {
    return this.state;
  }
  subscribe(n) {
    return this.atom.subscribe(zf(n));
  }
}
function pp(a) {
  return typeof a == "function" ? new lR(a) : new rR(a);
}
var Yc = { exports: {} },
  Gc = {},
  Kc = { exports: {} },
  Xc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp;
function uR() {
  if (yp) return Xc;
  yp = 1;
  var a = So();
  function n(v, S) {
    return (v === S && (v !== 0 || 1 / v === 1 / S)) || (v !== v && S !== S);
  }
  var s = typeof Object.is == "function" ? Object.is : n,
    r = a.useState,
    l = a.useEffect,
    c = a.useLayoutEffect,
    d = a.useDebugValue;
  function g(v, S) {
    var w = S(),
      R = r({ inst: { value: w, getSnapshot: S } }),
      T = R[0].inst,
      E = R[1];
    return (
      c(
        function () {
          ((T.value = w), (T.getSnapshot = S), h(T) && E({ inst: T }));
        },
        [v, w, S],
      ),
      l(
        function () {
          return (
            h(T) && E({ inst: T }),
            v(function () {
              h(T) && E({ inst: T });
            })
          );
        },
        [v],
      ),
      d(w),
      w
    );
  }
  function h(v) {
    var S = v.getSnapshot;
    v = v.value;
    try {
      var w = S();
      return !s(v, w);
    } catch {
      return !0;
    }
  }
  function m(v, S) {
    return S();
  }
  var y =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? m
      : g;
  return (
    (Xc.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : y),
    Xc
  );
}
var vp;
function cR() {
  return (vp || ((vp = 1), (Kc.exports = uR())), Kc.exports);
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sp;
function fR() {
  if (Sp) return Gc;
  Sp = 1;
  var a = So(),
    n = cR();
  function s(m, y) {
    return (m === y && (m !== 0 || 1 / m === 1 / y)) || (m !== m && y !== y);
  }
  var r = typeof Object.is == "function" ? Object.is : s,
    l = n.useSyncExternalStore,
    c = a.useRef,
    d = a.useEffect,
    g = a.useMemo,
    h = a.useDebugValue;
  return (
    (Gc.useSyncExternalStoreWithSelector = function (m, y, v, S, w) {
      var R = c(null);
      if (R.current === null) {
        var T = { hasValue: !1, value: null };
        R.current = T;
      } else T = R.current;
      R = g(
        function () {
          function D(G) {
            if (!K) {
              if (((K = !0), (Y = G), (G = S(G)), w !== void 0 && T.hasValue)) {
                var U = T.value;
                if (w(U, G)) return (P = U);
              }
              return (P = G);
            }
            if (((U = P), r(Y, G))) return U;
            var I = S(G);
            return w !== void 0 && w(U, I) ? ((Y = G), U) : ((Y = G), (P = I));
          }
          var K = !1,
            Y,
            P,
            B = v === void 0 ? null : v;
          return [
            function () {
              return D(y());
            },
            B === null
              ? void 0
              : function () {
                  return D(B());
                },
          ];
        },
        [y, v, S, w],
      );
      var E = l(m, R[0], R[1]);
      return (
        d(
          function () {
            ((T.hasValue = !0), (T.value = E));
          },
          [E],
        ),
        h(E),
        E
      );
    }),
    Gc
  );
}
var bp;
function dR() {
  return (bp || ((bp = 1), (Yc.exports = fR())), Yc.exports);
}
var hR = dR();
function gR(a, n) {
  return a === n;
}
function Nt(a, n, s = gR) {
  const r = W.useCallback(
      (d) => {
        if (!a) return () => {};
        const { unsubscribe: g } = a.subscribe(d);
        return g;
      },
      [a],
    ),
    l = W.useCallback(() => (a == null ? void 0 : a.get()), [a]);
  return hR.useSyncExternalStoreWithSelector(r, l, l, n, s);
}
var mR = { state: void 0, get: () => {}, subscribe: () => () => {} };
function Yi(a) {
  const n = Gt(),
    s = W.useContext(a.from ? nR : ml),
    r = a.from ?? s,
    l = r
      ? a.from
        ? n.stores.getMatchStoreByRouteId(r)
        : n.stores.activeMatchStoresById.get(r)
      : void 0,
    c = W.useRef(void 0);
  return Nt(l ?? mR, (d) => {
    if (((a.shouldThrow ?? !0) && !d && zn(), d === void 0)) return;
    const g = a.select ? a.select(d) : d;
    if (a.structuralSharing ?? n.options.defaultStructuralSharing) {
      const h = qi(c.current, g);
      return ((c.current = h), h);
    }
    return g;
  });
}
function ky(a) {
  return Yi({
    from: a.from,
    strict: a.strict,
    structuralSharing: a.structuralSharing,
    select: (n) => (a.select ? a.select(n.loaderData) : n.loaderData),
  });
}
function Ly(a) {
  const { select: n, ...s } = a;
  return Yi({ ...s, select: (r) => (n ? n(r.loaderDeps) : r.loaderDeps) });
}
function Dy(a) {
  return Yi({
    from: a.from,
    shouldThrow: a.shouldThrow,
    structuralSharing: a.structuralSharing,
    strict: a.strict,
    select: (n) => {
      const s = a.strict === !1 ? n.params : n._strictParams;
      return a.select ? a.select(s) : s;
    },
  });
}
function Ny(a) {
  return Yi({
    from: a.from,
    strict: a.strict,
    shouldThrow: a.shouldThrow,
    structuralSharing: a.structuralSharing,
    select: (n) => (a.select ? a.select(n.search) : n.search),
  });
}
function Py(a) {
  const n = Gt();
  return W.useCallback(
    (s) => n.navigate({ ...s, from: s.from ?? (a == null ? void 0 : a.from) }),
    [a == null ? void 0 : a.from, n],
  );
}
function Uy(a) {
  return Yi({ ...a, select: (n) => (a.select ? a.select(n.context) : n.context) });
}
var By = hy();
const gx = Lf(By);
function pR(a, n) {
  const s = Gt(),
    r = Wb(n),
    {
      activeProps: l,
      inactiveProps: c,
      activeOptions: d,
      to: g,
      preload: h,
      preloadDelay: m,
      hashScrollIntoView: y,
      replace: v,
      startTransition: S,
      resetScroll: w,
      viewTransition: R,
      children: T,
      target: E,
      disabled: D,
      style: K,
      className: Y,
      onClick: P,
      onBlur: B,
      onFocus: G,
      onMouseEnter: U,
      onMouseLeave: I,
      onTouchStart: Q,
      ignoreBlocker: z,
      params: X,
      search: $,
      hash: ne,
      state: te,
      mask: J,
      reloadDocument: O,
      unsafeRelative: j,
      from: ie,
      _fromLocation: le,
      ...re
    } = a,
    A = Ey(),
    H = W.useMemo(
      () => a,
      [
        s,
        a.from,
        a._fromLocation,
        a.hash,
        a.to,
        a.search,
        a.params,
        a.state,
        a.mask,
        a.unsafeRelative,
      ],
    ),
    Z = Nt(
      s.stores.location,
      (ve) => ve,
      (ve, lt) => ve.href === lt.href,
    ),
    ee = W.useMemo(() => {
      const ve = { _fromLocation: Z, ...H };
      return s.buildLocation(ve);
    }, [s, Z, H]),
    fe = ee.maskedLocation ? ee.maskedLocation.publicHref : ee.publicHref,
    pe = ee.maskedLocation ? ee.maskedLocation.external : ee.external,
    ye = W.useMemo(() => wR(fe, pe, s.history, D), [D, pe, fe, s.history]),
    Ve = W.useMemo(() => {
      if (ye != null && ye.external) return tl(ye.href, s.protocolAllowlist) ? void 0 : ye.href;
      if (!TR(g) && !(typeof g != "string" || g.indexOf(":") === -1))
        try {
          return (new URL(g), tl(g, s.protocolAllowlist) ? void 0 : g);
        } catch {}
    }, [g, ye, s.protocolAllowlist]),
    De = W.useMemo(() => {
      if (Ve) return !1;
      if (d != null && d.exact) {
        if (!p0(Z.pathname, ee.pathname, s.basepath)) return !1;
      } else {
        const ve = nl(Z.pathname, s.basepath),
          lt = nl(ee.pathname, s.basepath);
        if (!(ve.startsWith(lt) && (ve.length === lt.length || ve[lt.length] === "/"))) return !1;
      }
      return ((d == null ? void 0 : d.includeSearch) ?? !0) &&
        !ji(Z.search, ee.search, {
          partial: !(d != null && d.exact),
          ignoreUndefined: !(d != null && d.explicitUndefined),
        })
        ? !1
        : d != null && d.includeHash
          ? A && Z.hash === ee.hash
          : !0;
    }, [
      d == null ? void 0 : d.exact,
      d == null ? void 0 : d.explicitUndefined,
      d == null ? void 0 : d.includeHash,
      d == null ? void 0 : d.includeSearch,
      Z,
      Ve,
      A,
      ee.hash,
      ee.pathname,
      ee.search,
      s.basepath,
    ]),
    nn = De ? (gi(l, {}) ?? yR) : Wc,
    yn = De ? Wc : (gi(c, {}) ?? Wc),
    Gi = [Y, nn.className, yn.className].filter(Boolean).join(" "),
    es = (K || nn.style || yn.style) && { ...K, ...nn.style, ...yn.style },
    [vn, Ki] = W.useState(!1),
    Xi = W.useRef(!1),
    In = a.reloadDocument || Ve ? !1 : (h ?? s.options.defaultPreload),
    Wi = m ?? s.options.defaultPreloadDelay ?? 0,
    Xt = W.useCallback(() => {
      s.preloadRoute({ ...H, _builtLocation: ee }).catch((ve) => {
        (console.warn(ve), console.warn(X0));
      });
    }, [s, H, ee]);
  (Xb(
    r,
    W.useCallback(
      (ve) => {
        ve != null && ve.isIntersecting && Xt();
      },
      [Xt],
    ),
    RR,
    { disabled: !!D || In !== "viewport" },
  ),
    W.useEffect(() => {
      Xi.current || (!D && In === "render" && (Xt(), (Xi.current = !0)));
    }, [D, Xt, In]));
  const ts = (ve) => {
    const lt = ve.currentTarget.getAttribute("target"),
      an = E !== void 0 ? E : lt;
    if (!D && !_R(ve) && !ve.defaultPrevented && (!an || an === "_self") && ve.button === 0) {
      (ve.preventDefault(),
        By.flushSync(() => {
          Ki(!0);
        }));
      const Ro = s.subscribe("onResolved", () => {
        (Ro(), Ki(!1));
      });
      s.navigate({
        ...H,
        replace: v,
        resetScroll: w,
        hashScrollIntoView: y,
        startTransition: S,
        viewTransition: R,
        ignoreBlocker: z,
      });
    }
  };
  if (Ve)
    return {
      ...re,
      ref: r,
      href: Ve,
      ...(T && { children: T }),
      ...(E && { target: E }),
      ...(D && { disabled: D }),
      ...(K && { style: K }),
      ...(Y && { className: Y }),
      ...(P && { onClick: P }),
      ...(B && { onBlur: B }),
      ...(G && { onFocus: G }),
      ...(U && { onMouseEnter: U }),
      ...(I && { onMouseLeave: I }),
      ...(Q && { onTouchStart: Q }),
    };
  const Zi = (ve) => {
      if (D || In !== "intent") return;
      if (!Wi) {
        Xt();
        return;
      }
      const lt = ve.currentTarget;
      if (eo.has(lt)) return;
      const an = setTimeout(() => {
        (eo.delete(lt), Xt());
      }, Wi);
      eo.set(lt, an);
    },
    bl = (ve) => {
      D || In !== "intent" || Xt();
    },
    bo = (ve) => {
      if (D || !In || !Wi) return;
      const lt = ve.currentTarget,
        an = eo.get(lt);
      an && (clearTimeout(an), eo.delete(lt));
    };
  return {
    ...re,
    ...nn,
    ...yn,
    href: ye == null ? void 0 : ye.href,
    ref: r,
    onClick: qa([P, ts]),
    onBlur: qa([B, bo]),
    onFocus: qa([G, Zi]),
    onMouseEnter: qa([U, Zi]),
    onMouseLeave: qa([I, bo]),
    onTouchStart: qa([Q, bl]),
    disabled: !!D,
    target: E,
    ...(es && { style: es }),
    ...(Gi && { className: Gi }),
    ...(D && vR),
    ...(De && SR),
    ...(A && vn && bR),
  };
}
var Wc = {},
  yR = { className: "active" },
  vR = { role: "link", "aria-disabled": !0 },
  SR = { "data-status": "active", "aria-current": "page" },
  bR = { "data-transitioning": "transitioning" },
  eo = new WeakMap(),
  RR = { rootMargin: "100px" },
  qa = (a) => (n) => {
    for (const s of a)
      if (s) {
        if (n.defaultPrevented) return;
        s(n);
      }
  };
function wR(a, n, s, r) {
  if (!r) return n ? { href: a, external: !0 } : { href: s.createHref(a) || "/", external: !1 };
}
function TR(a) {
  if (typeof a != "string") return !1;
  const n = a.charCodeAt(0);
  return n === 47 ? a.charCodeAt(1) !== 47 : n === 46;
}
var qy = W.forwardRef((a, n) => {
  const { _asChild: s, ...r } = a,
    { type: l, ...c } = pR(r, n),
    d =
      typeof r.children == "function"
        ? r.children({ isActive: c["data-status"] === "active" })
        : r.children;
  if (!s) {
    const { disabled: g, ...h } = c;
    return W.createElement("a", h, d);
  }
  return W.createElement(s, c, d);
});
function _R(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
var ER = class extends _y {
  constructor(n) {
    (super(n),
      (this.useMatch = (s) =>
        Yi({
          select: s == null ? void 0 : s.select,
          from: this.id,
          structuralSharing: s == null ? void 0 : s.structuralSharing,
        })),
      (this.useRouteContext = (s) => Uy({ ...s, from: this.id })),
      (this.useSearch = (s) =>
        Ny({
          select: s == null ? void 0 : s.select,
          structuralSharing: s == null ? void 0 : s.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (s) =>
        Dy({
          select: s == null ? void 0 : s.select,
          structuralSharing: s == null ? void 0 : s.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (s) => Ly({ ...s, from: this.id })),
      (this.useLoaderData = (s) => ky({ ...s, from: this.id })),
      (this.useNavigate = () => Py({ from: this.fullPath })),
      (this.Link = Dt.forwardRef((s, r) => ae.jsx(qy, { ref: r, from: this.fullPath, ...s }))));
  }
};
function AR(a) {
  return new ER(a);
}
function xR() {
  return (a) => OR(a);
}
var CR = class extends W0 {
  constructor(a) {
    (super(a),
      (this.useMatch = (n) =>
        Yi({
          select: n == null ? void 0 : n.select,
          from: this.id,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
        })),
      (this.useRouteContext = (n) => Uy({ ...n, from: this.id })),
      (this.useSearch = (n) =>
        Ny({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (n) =>
        Dy({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (n) => Ly({ ...n, from: this.id })),
      (this.useLoaderData = (n) => ky({ ...n, from: this.id })),
      (this.useNavigate = () => Py({ from: this.fullPath })),
      (this.Link = Dt.forwardRef((n, s) => ae.jsx(qy, { ref: s, from: this.fullPath, ...n }))));
  }
};
function OR(a) {
  return new CR(a);
}
function Ie(a) {
  return typeof a == "object"
    ? new Rp(a, { silent: !0 }).createRoute(a)
    : new Rp(a, { silent: !0 }).createRoute;
}
var Rp = class {
  constructor(a, n) {
    ((this.path = a),
      (this.createRoute = (s) => {
        const r = AR(s);
        return ((r.isRoot = !1), r);
      }),
      (this.silent = n == null ? void 0 : n.silent));
  }
};
function je(a, n) {
  let s, r, l, c;
  const d = () => (
      s ||
        (s = a()
          .then((h) => {
            ((s = void 0), (r = h[n]));
          })
          .catch((h) => {
            if (
              ((l = h),
              t0(l) && l instanceof Error && typeof window < "u" && typeof sessionStorage < "u")
            ) {
              const m = `tanstack_router_reload:${l.message}`;
              sessionStorage.getItem(m) || (sessionStorage.setItem(m, "1"), (c = !0));
            }
          })),
      s
    ),
    g = function (m) {
      if (c) throw (window.location.reload(), new Promise(() => {}));
      if (l) throw l;
      if (!r)
        if (Km) Km(d());
        else throw d();
      return W.createElement(r, m);
    };
  return ((g.preload = d), g);
}
function MR(a) {
  const n = Gt(),
    s = `not-found-${Nt(n.stores.location, (r) => r.pathname)}-${Nt(n.stores.status, (r) => r)}`;
  return ae.jsx(Bf, {
    getResetKey: () => s,
    onCatch: (r, l) => {
      var c;
      if (ht(r)) (c = a.onCatch) == null || c.call(a, r, l);
      else throw r;
    },
    errorComponent: ({ error: r }) => {
      var l;
      if (ht(r)) return (l = a.fallback) == null ? void 0 : l.call(a, r);
      throw r;
    },
    children: a.children,
  });
}
function kR() {
  return ae.jsx("p", { children: "Not Found" });
}
function $a(a) {
  return ae.jsx(ae.Fragment, { children: a.children });
}
function zy(a, n, s) {
  return n.options.notFoundComponent
    ? ae.jsx(n.options.notFoundComponent, { ...s })
    : a.options.defaultNotFoundComponent
      ? ae.jsx(a.options.defaultNotFoundComponent, { ...s })
      : ae.jsx(kR, {});
}
function LR(a) {
  return null;
}
function DR() {
  return (LR(Gt()), null);
}
var Iy = W.memo(function ({ matchId: n }) {
  const s = Gt(),
    r = s.stores.activeMatchStoresById.get(n);
  r || zn();
  const l = Nt(s.stores.loadedAt, (d) => d),
    c = Nt(r, (d) => d);
  return ae.jsx(NR, {
    router: s,
    matchId: n,
    resetKey: l,
    matchState: W.useMemo(() => {
      var h;
      const d = c.routeId,
        g = (h = s.routesById[d].parentRoute) == null ? void 0 : h.id;
      return { routeId: d, ssr: c.ssr, _displayPending: c._displayPending, parentRouteId: g };
    }, [c._displayPending, c.routeId, c.ssr, s.routesById]),
  });
});
function NR({ router: a, matchId: n, resetKey: s, matchState: r }) {
  var R, T;
  const l = a.routesById[r.routeId],
    c = l.options.pendingComponent ?? a.options.defaultPendingComponent,
    d = c ? ae.jsx(c, {}) : null,
    g = l.options.errorComponent ?? a.options.defaultErrorComponent,
    h = l.options.onCatch ?? a.options.defaultOnCatch,
    m = l.isRoot
      ? (l.options.notFoundComponent ??
        ((R = a.options.notFoundRoute) == null ? void 0 : R.options.component))
      : l.options.notFoundComponent,
    y = r.ssr === !1 || r.ssr === "data-only",
    v =
      (!l.isRoot || l.options.wrapInSuspense || y) &&
      (l.options.wrapInSuspense ??
        c ??
        (((T = l.options.errorComponent) == null ? void 0 : T.preload) || y))
        ? W.Suspense
        : $a,
    S = g ? Bf : $a,
    w = m ? MR : $a;
  return ae.jsxs(l.isRoot ? (l.options.shellComponent ?? $a) : $a, {
    children: [
      ae.jsx(ml.Provider, {
        value: n,
        children: ae.jsx(v, {
          fallback: d,
          children: ae.jsx(S, {
            getResetKey: () => s,
            errorComponent: g || qf,
            onCatch: (E, D) => {
              if (ht(E)) throw E;
              h == null || h(E, D);
            },
            children: ae.jsx(w, {
              fallback: (E) => {
                if (!m || (E.routeId && E.routeId !== r.routeId) || (!E.routeId && !l.isRoot))
                  throw E;
                return W.createElement(m, E);
              },
              children:
                y || r._displayPending
                  ? ae.jsx(eR, { fallback: d, children: ae.jsx(wp, { matchId: n }) })
                  : ae.jsx(wp, { matchId: n }),
            }),
          }),
        }),
      }),
      r.parentRouteId === Hi
        ? ae.jsxs(ae.Fragment, {
            children: [
              ae.jsx(PR, { resetKey: s }),
              a.options.scrollRestoration && gy ? ae.jsx(DR, {}) : null,
            ],
          })
        : null,
    ],
  });
}
function PR({ resetKey: a }) {
  const n = Gt(),
    s = W.useRef(void 0);
  return (
    ao(() => {
      const r = n.latestLocation.href;
      (s.current === void 0 || s.current !== r) &&
        (n.emit({
          type: "onRendered",
          ...Ga(n.stores.location.state, n.stores.resolvedLocation.state),
        }),
        (s.current = r));
    }, [n.latestLocation.state.__TSR_key, a, n]),
    null
  );
}
var wp = W.memo(function ({ matchId: n }) {
    var m, y, v, S;
    const s = Gt(),
      r = s.stores.activeMatchStoresById.get(n);
    r || zn();
    const l = Nt(r, (w) => w),
      c = l.routeId,
      d = s.routesById[c],
      g = W.useMemo(() => {
        var R;
        const w =
          (R = s.routesById[c].options.remountDeps ?? s.options.defaultRemountDeps) == null
            ? void 0
            : R({
                routeId: c,
                loaderDeps: l.loaderDeps,
                params: l._strictParams,
                search: l._strictSearch,
              });
        return w ? JSON.stringify(w) : void 0;
      }, [
        c,
        l.loaderDeps,
        l._strictParams,
        l._strictSearch,
        s.options.defaultRemountDeps,
        s.routesById,
      ]),
      h = W.useMemo(() => {
        const w = d.options.component ?? s.options.defaultComponent;
        return w ? ae.jsx(w, {}, g) : ae.jsx(jy, {});
      }, [g, d.options.component, s.options.defaultComponent]);
    if (l._displayPending)
      throw (m = s.getMatch(l.id)) == null ? void 0 : m._nonReactive.displayPendingPromise;
    if (l._forcePending)
      throw (y = s.getMatch(l.id)) == null ? void 0 : y._nonReactive.minPendingPromise;
    if (l.status === "pending") {
      const w = d.options.pendingMinMs ?? s.options.defaultPendingMinMs;
      if (w) {
        const R = s.getMatch(l.id);
        if (R && !R._nonReactive.minPendingPromise) {
          const T = Xa();
          ((R._nonReactive.minPendingPromise = T),
            setTimeout(() => {
              (T.resolve(), (R._nonReactive.minPendingPromise = void 0));
            }, w));
        }
      }
      throw (v = s.getMatch(l.id)) == null ? void 0 : v._nonReactive.loadPromise;
    }
    if (l.status === "notFound") return (ht(l.error) || zn(), zy(s, d, l.error));
    if (l.status === "redirected")
      throw (
        wt(l.error) || zn(),
        (S = s.getMatch(l.id)) == null ? void 0 : S._nonReactive.loadPromise
      );
    if (l.status === "error") throw l.error;
    return h;
  }),
  jy = W.memo(function () {
    const n = Gt(),
      s = W.useContext(ml);
    let r,
      l = !1,
      c;
    {
      const m = s ? n.stores.activeMatchStoresById.get(s) : void 0;
      (([r, l] = Nt(m, (y) => [
        y == null ? void 0 : y.routeId,
        (y == null ? void 0 : y.globalNotFound) ?? !1,
      ])),
        (c = Nt(n.stores.matchesId, (y) => y[y.findIndex((v) => v === s) + 1])));
    }
    const d = r ? n.routesById[r] : void 0,
      g = n.options.defaultPendingComponent ? ae.jsx(n.options.defaultPendingComponent, {}) : null;
    if (l) return (d || zn(), zy(n, d, void 0));
    if (!c) return null;
    const h = ae.jsx(Iy, { matchId: c });
    return r === Hi ? ae.jsx(W.Suspense, { fallback: g, children: h }) : h;
  });
function UR() {
  const a = Gt(),
    n = W.useRef({ router: a, mounted: !1 }),
    [s, r] = W.useState(!1),
    l = Nt(a.stores.isLoading, (v) => v),
    c = Nt(a.stores.hasPendingMatches, (v) => v),
    d = zc(l),
    g = l || s || c,
    h = zc(g),
    m = l || c,
    y = zc(m);
  return (
    (a.startTransition = (v) => {
      (r(!0),
        W.startTransition(() => {
          (v(), r(!1));
        }));
    }),
    W.useEffect(() => {
      const v = a.history.subscribe(a.load),
        S = a.buildLocation({
          to: a.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        pi(a.latestLocation.publicHref) !== pi(S.publicHref) &&
          a.commitLocation({ ...S, replace: !0 }),
        () => {
          v();
        }
      );
    }, [a, a.history]),
    ao(() => {
      if ((typeof window < "u" && a.ssr) || (n.current.router === a && n.current.mounted)) return;
      ((n.current = { router: a, mounted: !0 }),
        (async () => {
          try {
            await a.load();
          } catch (S) {
            console.error(S);
          }
        })());
    }, [a]),
    ao(() => {
      d &&
        !l &&
        a.emit({ type: "onLoad", ...Ga(a.stores.location.state, a.stores.resolvedLocation.state) });
    }, [d, a, l]),
    ao(() => {
      y &&
        !m &&
        a.emit({
          type: "onBeforeRouteMount",
          ...Ga(a.stores.location.state, a.stores.resolvedLocation.state),
        });
    }, [m, y, a]),
    ao(() => {
      if (h && !g) {
        const v = Ga(a.stores.location.state, a.stores.resolvedLocation.state);
        (a.emit({ type: "onResolved", ...v }),
          Cy(() => {
            (a.stores.status.setState(() => "idle"),
              a.stores.resolvedLocation.setState(() => a.stores.location.state));
          }),
          v.hrefChanged && Z0(a));
      }
    }, [g, h, a]),
    null
  );
}
function BR() {
  const a = Gt(),
    n = a.routesById[Hi].options.pendingComponent ?? a.options.defaultPendingComponent,
    s = n ? ae.jsx(n, {}) : null,
    r = ae.jsxs(typeof document < "u" && a.ssr ? $a : W.Suspense, {
      fallback: s,
      children: [ae.jsx(UR, {}), ae.jsx(qR, {})],
    });
  return a.options.InnerWrap ? ae.jsx(a.options.InnerWrap, { children: r }) : r;
}
function qR() {
  const a = Gt(),
    n = Nt(a.stores.firstMatchId, (l) => l),
    s = Nt(a.stores.loadedAt, (l) => l),
    r = n ? ae.jsx(Iy, { matchId: n }) : null;
  return ae.jsx(ml.Provider, {
    value: n,
    children: a.options.disableGlobalCatchBoundary
      ? r
      : ae.jsx(Bf, { getResetKey: () => s, errorComponent: qf, onCatch: void 0, children: r }),
  });
}
var zR = (a) => ({ createMutableStore: pp, createReadonlyStore: pp, batch: Cy }),
  IR = (a) => new jR(a),
  jR = class extends V0 {
    constructor(a) {
      super(a, zR);
    }
  };
function HR({ router: a, children: n, ...s }) {
  Object.keys(s).length > 0 &&
    a.update({ ...a.options, ...s, context: { ...a.options.context, ...s.context } });
  const r = ae.jsx(Ay.Provider, { value: a, children: n });
  return a.options.Wrap ? ae.jsx(a.options.Wrap, { children: r }) : r;
}
function VR({ router: a, ...n }) {
  return ae.jsx(HR, { router: a, ...n, children: ae.jsx(BR, {}) });
}
var dn = [],
  Ft = [],
  QR = Uint8Array,
  Zc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var za = 0, $R = Zc.length; za < $R; ++za) ((dn[za] = Zc[za]), (Ft[Zc.charCodeAt(za)] = za));
Ft[45] = 62;
Ft[95] = 63;
function FR(a) {
  var n = a.length;
  if (n % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var s = a.indexOf("=");
  s === -1 && (s = n);
  var r = s === n ? 0 : 4 - (s % 4);
  return [s, r];
}
function YR(a, n, s) {
  return ((n + s) * 3) / 4 - s;
}
function go(a) {
  var n,
    s = FR(a),
    r = s[0],
    l = s[1],
    c = new QR(YR(a, r, l)),
    d = 0,
    g = l > 0 ? r - 4 : r,
    h;
  for (h = 0; h < g; h += 4)
    ((n =
      (Ft[a.charCodeAt(h)] << 18) |
      (Ft[a.charCodeAt(h + 1)] << 12) |
      (Ft[a.charCodeAt(h + 2)] << 6) |
      Ft[a.charCodeAt(h + 3)]),
      (c[d++] = (n >> 16) & 255),
      (c[d++] = (n >> 8) & 255),
      (c[d++] = n & 255));
  return (
    l === 2 &&
      ((n = (Ft[a.charCodeAt(h)] << 2) | (Ft[a.charCodeAt(h + 1)] >> 4)), (c[d++] = n & 255)),
    l === 1 &&
      ((n =
        (Ft[a.charCodeAt(h)] << 10) |
        (Ft[a.charCodeAt(h + 1)] << 4) |
        (Ft[a.charCodeAt(h + 2)] >> 2)),
      (c[d++] = (n >> 8) & 255),
      (c[d++] = n & 255)),
    c
  );
}
function GR(a) {
  return dn[(a >> 18) & 63] + dn[(a >> 12) & 63] + dn[(a >> 6) & 63] + dn[a & 63];
}
function KR(a, n, s) {
  for (var r, l = [], c = n; c < s; c += 3)
    ((r = ((a[c] << 16) & 16711680) + ((a[c + 1] << 8) & 65280) + (a[c + 2] & 255)), l.push(GR(r)));
  return l.join("");
}
function mo(a) {
  for (var n, s = a.length, r = s % 3, l = [], c = 16383, d = 0, g = s - r; d < g; d += c)
    l.push(KR(a, d, d + c > g ? g : d + c));
  return (
    r === 1
      ? ((n = a[s - 1]), l.push(dn[n >> 2] + dn[(n << 4) & 63] + "=="))
      : r === 2 &&
        ((n = (a[s - 2] << 8) + a[s - 1]),
        l.push(dn[n >> 10] + dn[(n >> 4) & 63] + dn[(n << 2) & 63] + "=")),
    l.join("")
  );
}
function qn(a) {
  if (a === void 0) return {};
  if (!Hy(a))
    throw new Error(`The arguments to a Convex function must be an object. Received: ${a}`);
  return a;
}
function XR(a) {
  if (typeof a > "u")
    throw new Error(
      "Client created with undefined deployment address. If you used an environment variable, check that it's set.",
    );
  if (typeof a != "string") throw new Error(`Invalid deployment address: found ${a}".`);
  if (!(a.startsWith("http:") || a.startsWith("https:")))
    throw new Error(
      `Invalid deployment address: Must start with "https://" or "http://". Found "${a}".`,
    );
  try {
    new URL(a);
  } catch {
    throw new Error(
      `Invalid deployment address: "${a}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`,
    );
  }
  if (a.endsWith(".convex.site"))
    throw new Error(
      `Invalid deployment address: "${a}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`,
    );
}
function Hy(a) {
  var l;
  const n = typeof a == "object",
    s = Object.getPrototypeOf(a),
    r =
      s === null ||
      s === Object.prototype ||
      ((l = s == null ? void 0 : s.constructor) == null ? void 0 : l.name) === "Object";
  return n && r;
}
const Vy = !0,
  Wa = BigInt("-9223372036854775808"),
  If = BigInt("9223372036854775807"),
  bf = BigInt("0"),
  WR = BigInt("8"),
  ZR = BigInt("256");
function Qy(a) {
  return Number.isNaN(a) || !Number.isFinite(a) || Object.is(a, -0);
}
function JR(a) {
  a < bf && (a -= Wa + Wa);
  let n = a.toString(16);
  n.length % 2 === 1 && (n = "0" + n);
  const s = new Uint8Array(new ArrayBuffer(8));
  let r = 0;
  for (const l of n.match(/.{2}/g).reverse()) (s.set([parseInt(l, 16)], r++), (a >>= WR));
  return mo(s);
}
function ew(a) {
  const n = go(a);
  if (n.byteLength !== 8)
    throw new Error(`Received ${n.byteLength} bytes, expected 8 for $integer`);
  let s = bf,
    r = bf;
  for (const l of n) ((s += BigInt(l) * ZR ** r), r++);
  return (s > If && (s += Wa + Wa), s);
}
function tw(a) {
  if (a < Wa || If < a) throw new Error(`BigInt ${a} does not fit into a 64-bit signed integer.`);
  const n = new ArrayBuffer(8);
  return (new DataView(n).setBigInt64(0, a, !0), mo(new Uint8Array(n)));
}
function nw(a) {
  const n = go(a);
  if (n.byteLength !== 8)
    throw new Error(`Received ${n.byteLength} bytes, expected 8 for $integer`);
  return new DataView(n.buffer).getBigInt64(0, !0);
}
const iw = DataView.prototype.setBigInt64 ? tw : JR,
  aw = DataView.prototype.getBigInt64 ? nw : ew,
  Tp = 1024;
function $y(a) {
  if (a.length > Tp) throw new Error(`Field name ${a} exceeds maximum field name length ${Tp}.`);
  if (a.startsWith("$")) throw new Error(`Field name ${a} starts with a '$', which is reserved.`);
  for (let n = 0; n < a.length; n += 1) {
    const s = a.charCodeAt(n);
    if (s < 32 || s >= 127)
      throw new Error(
        `Field name ${a} has invalid character '${a[n]}': Field names can only contain non-control ASCII characters`,
      );
  }
}
function Za(a) {
  if (a === null || typeof a == "boolean" || typeof a == "number" || typeof a == "string") return a;
  if (Array.isArray(a)) return a.map((r) => Za(r));
  if (typeof a != "object") throw new Error(`Unexpected type of ${a}`);
  const n = Object.entries(a);
  if (n.length === 1) {
    const r = n[0][0];
    if (r === "$bytes") {
      if (typeof a.$bytes != "string") throw new Error(`Malformed $bytes field on ${a}`);
      return go(a.$bytes).buffer;
    }
    if (r === "$integer") {
      if (typeof a.$integer != "string") throw new Error(`Malformed $integer field on ${a}`);
      return aw(a.$integer);
    }
    if (r === "$float") {
      if (typeof a.$float != "string") throw new Error(`Malformed $float field on ${a}`);
      const l = go(a.$float);
      if (l.byteLength !== 8)
        throw new Error(`Received ${l.byteLength} bytes, expected 8 for $float`);
      const d = new DataView(l.buffer).getFloat64(0, Vy);
      if (!Qy(d)) throw new Error(`Float ${d} should be encoded as a number`);
      return d;
    }
    if (r === "$set")
      throw new Error("Received a Set which is no longer supported as a Convex type.");
    if (r === "$map")
      throw new Error("Received a Map which is no longer supported as a Convex type.");
  }
  const s = {};
  for (const [r, l] of Object.entries(a)) ($y(r), (s[r] = Za(l)));
  return s;
}
const _p = 16384;
function oo(a) {
  const n = JSON.stringify(a, (s, r) =>
    r === void 0 ? "undefined" : typeof r == "bigint" ? `${r.toString()}n` : r,
  );
  if (n.length > _p) {
    const s = "[...truncated]";
    let r = _p - s.length;
    const l = n.codePointAt(r - 1);
    return (l !== void 0 && l > 65535 && (r -= 1), n.substring(0, r) + s);
  }
  return n;
}
function Rf(a, n, s, r) {
  var d;
  if (a === void 0) {
    const g = s && ` (present at path ${s} in original object ${oo(n)})`;
    throw new Error(
      `undefined is not a valid Convex value${g}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`,
    );
  }
  if (a === null) return a;
  if (typeof a == "bigint") {
    if (a < Wa || If < a) throw new Error(`BigInt ${a} does not fit into a 64-bit signed integer.`);
    return { $integer: iw(a) };
  }
  if (typeof a == "number")
    if (Qy(a)) {
      const g = new ArrayBuffer(8);
      return (new DataView(g).setFloat64(0, a, Vy), { $float: mo(new Uint8Array(g)) });
    } else return a;
  if (typeof a == "boolean" || typeof a == "string") return a;
  if (a instanceof ArrayBuffer) return { $bytes: mo(new Uint8Array(a)) };
  if (Array.isArray(a)) return a.map((g, h) => Rf(g, n, s + `[${h}]`));
  if (a instanceof Set) throw new Error(Jc(s, "Set", [...a], n));
  if (a instanceof Map) throw new Error(Jc(s, "Map", [...a], n));
  if (!Hy(a)) {
    const g = (d = a == null ? void 0 : a.constructor) == null ? void 0 : d.name,
      h = g ? `${g} ` : "";
    throw new Error(Jc(s, h, a, n));
  }
  const l = {},
    c = Object.entries(a);
  c.sort(([g, h], [m, y]) => (g === m ? 0 : g < m ? -1 : 1));
  for (const [g, h] of c) h !== void 0 && ($y(g), (l[g] = Rf(h, n, s + `.${g}`)));
  return l;
}
function Jc(a, n, s, r) {
  return a
    ? `${n}${oo(s)} is not a supported Convex type (present at path ${a} in original object ${oo(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    : `${n}${oo(s)} is not a supported Convex type.`;
}
function pn(a) {
  return Rf(a, a, "");
}
var sw = Object.defineProperty,
  ow = (a, n, s) =>
    n in a ? sw(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  ef = (a, n, s) => ow(a, typeof n != "symbol" ? n + "" : n, s),
  Ep,
  Ap;
const rw = Symbol.for("ConvexError");
class wf extends ((Ap = Error), (Ep = rw), Ap) {
  constructor(n) {
    (super(typeof n == "string" ? n : oo(n)),
      ef(this, "name", "ConvexError"),
      ef(this, "data"),
      ef(this, Ep, !0),
      (this.data = n));
  }
}
const Fy = () => Array.from({ length: 4 }, () => 0);
Fy();
Fy();
const xp = "1.34.0";
var lw = Object.defineProperty,
  uw = (a, n, s) =>
    n in a ? lw(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  Cp = (a, n, s) => uw(a, typeof n != "symbol" ? n + "" : n, s);
const cw = "color:rgb(0, 145, 255)";
function Yy(a) {
  switch (a) {
    case "query":
      return "Q";
    case "mutation":
      return "M";
    case "action":
      return "A";
    case "any":
      return "?";
  }
}
class Gy {
  constructor(n) {
    (Cp(this, "_onLogLineFuncs"),
      Cp(this, "_verbose"),
      (this._onLogLineFuncs = {}),
      (this._verbose = n.verbose));
  }
  addLogLineListener(n) {
    let s = Math.random().toString(36).substring(2, 15);
    for (let r = 0; r < 10 && this._onLogLineFuncs[s] !== void 0; r++)
      s = Math.random().toString(36).substring(2, 15);
    return (
      (this._onLogLineFuncs[s] = n),
      () => {
        delete this._onLogLineFuncs[s];
      }
    );
  }
  logVerbose(...n) {
    if (this._verbose)
      for (const s of Object.values(this._onLogLineFuncs))
        s("debug", `${new Date().toISOString()}`, ...n);
  }
  log(...n) {
    for (const s of Object.values(this._onLogLineFuncs)) s("info", ...n);
  }
  warn(...n) {
    for (const s of Object.values(this._onLogLineFuncs)) s("warn", ...n);
  }
  error(...n) {
    for (const s of Object.values(this._onLogLineFuncs)) s("error", ...n);
  }
}
function Ky(a) {
  const n = new Gy(a);
  return (
    n.addLogLineListener((s, ...r) => {
      switch (s) {
        case "debug":
          console.debug(...r);
          break;
        case "info":
          console.log(...r);
          break;
        case "warn":
          console.warn(...r);
          break;
        case "error":
          console.error(...r);
          break;
        default:
          console.log(...r);
      }
    }),
    n
  );
}
function Xy(a) {
  return new Gy(a);
}
function ol(a, n, s, r, l) {
  const c = Yy(s);
  if (
    (typeof l == "object" && (l = `ConvexError ${JSON.stringify(l.errorData, null, 2)}`),
    n === "info")
  ) {
    const d = l.match(/^\[.*?\] /);
    if (d === null) {
      a.error(`[CONVEX ${c}(${r})] Could not parse console.log`);
      return;
    }
    const g = l.slice(1, d[0].length - 2),
      h = l.slice(d[0].length);
    a.log(`%c[CONVEX ${c}(${r})] [${g}]`, cw, h);
  } else a.error(`[CONVEX ${c}(${r})] ${l}`);
}
function fw(a, n) {
  const s = `[CONVEX FATAL ERROR] ${n}`;
  return (a.error(s), new Error(s));
}
function Ya(a, n, s) {
  return `[CONVEX ${Yy(a)}(${n})] ${s.errorMessage}
  Called by client`;
}
function Tf(a, n) {
  return ((n.data = a.errorData), n);
}
function Fi(a) {
  const n = a.split(":");
  let s, r;
  return (
    n.length === 1
      ? ((s = n[0]), (r = "default"))
      : ((s = n.slice(0, n.length - 1).join(":")), (r = n[n.length - 1])),
    s.endsWith(".js") && (s = s.slice(0, -3)),
    `${s}:${r}`
  );
}
function Qi(a, n) {
  return JSON.stringify({ udfPath: Fi(a), args: pn(n) });
}
function Op(a, n, s) {
  const { initialNumItems: r, id: l } = s;
  return JSON.stringify({
    type: "paginated",
    udfPath: Fi(a),
    args: pn(n),
    options: pn({ initialNumItems: r, id: l }),
  });
}
var dw = Object.defineProperty,
  hw = (a, n, s) =>
    n in a ? dw(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  un = (a, n, s) => hw(a, typeof n != "symbol" ? n + "" : n, s);
class gw {
  constructor() {
    (un(this, "nextQueryId"),
      un(this, "querySetVersion"),
      un(this, "querySet"),
      un(this, "queryIdToToken"),
      un(this, "identityVersion"),
      un(this, "auth"),
      un(this, "outstandingQueriesOlderThanRestart"),
      un(this, "outstandingAuthOlderThanRestart"),
      un(this, "paused"),
      un(this, "pendingQuerySetModifications"),
      (this.nextQueryId = 0),
      (this.querySetVersion = 0),
      (this.identityVersion = 0),
      (this.querySet = new Map()),
      (this.queryIdToToken = new Map()),
      (this.outstandingQueriesOlderThanRestart = new Set()),
      (this.outstandingAuthOlderThanRestart = !1),
      (this.paused = !1),
      (this.pendingQuerySetModifications = new Map()));
  }
  hasSyncedPastLastReconnect() {
    return (
      this.outstandingQueriesOlderThanRestart.size === 0 && !this.outstandingAuthOlderThanRestart
    );
  }
  markAuthCompletion() {
    this.outstandingAuthOlderThanRestart = !1;
  }
  subscribe(n, s, r, l) {
    const c = Fi(n),
      d = Qi(c, s),
      g = this.querySet.get(d);
    if (g !== void 0)
      return (
        (g.numSubscribers += 1),
        { queryToken: d, modification: null, unsubscribe: () => this.removeSubscriber(d) }
      );
    {
      const h = this.nextQueryId++,
        m = {
          id: h,
          canonicalizedUdfPath: c,
          args: s,
          numSubscribers: 1,
          journal: r,
          componentPath: l,
        };
      (this.querySet.set(d, m), this.queryIdToToken.set(h, d));
      const y = this.querySetVersion,
        v = this.querySetVersion + 1,
        S = { type: "Add", queryId: h, udfPath: c, args: [pn(s)], journal: r, componentPath: l };
      return (
        this.paused ? this.pendingQuerySetModifications.set(h, S) : (this.querySetVersion = v),
        {
          queryToken: d,
          modification: {
            type: "ModifyQuerySet",
            baseVersion: y,
            newVersion: v,
            modifications: [S],
          },
          unsubscribe: () => this.removeSubscriber(d),
        }
      );
    }
  }
  transition(n) {
    for (const s of n.modifications)
      switch (s.type) {
        case "QueryUpdated":
        case "QueryFailed": {
          this.outstandingQueriesOlderThanRestart.delete(s.queryId);
          const r = s.journal;
          if (r !== void 0) {
            const l = this.queryIdToToken.get(s.queryId);
            l !== void 0 && (this.querySet.get(l).journal = r);
          }
          break;
        }
        case "QueryRemoved": {
          this.outstandingQueriesOlderThanRestart.delete(s.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${s.type}`);
      }
  }
  queryId(n, s) {
    const r = Fi(n),
      l = Qi(r, s),
      c = this.querySet.get(l);
    return c !== void 0 ? c.id : null;
  }
  isCurrentOrNewerAuthVersion(n) {
    return n >= this.identityVersion;
  }
  getAuth() {
    return this.auth;
  }
  setAuth(n) {
    this.auth = { tokenType: "User", value: n };
    const s = this.identityVersion;
    return (
      this.paused || (this.identityVersion = s + 1),
      { type: "Authenticate", baseVersion: s, ...this.auth }
    );
  }
  setAdminAuth(n, s) {
    const r = { tokenType: "Admin", value: n, impersonating: s };
    this.auth = r;
    const l = this.identityVersion;
    return (
      this.paused || (this.identityVersion = l + 1),
      { type: "Authenticate", baseVersion: l, ...r }
    );
  }
  clearAuth() {
    ((this.auth = void 0), this.markAuthCompletion());
    const n = this.identityVersion;
    return (
      this.paused || (this.identityVersion = n + 1),
      { type: "Authenticate", tokenType: "None", baseVersion: n }
    );
  }
  hasAuth() {
    return !!this.auth;
  }
  isNewAuth(n) {
    var s;
    return ((s = this.auth) == null ? void 0 : s.value) !== n;
  }
  queryPath(n) {
    const s = this.queryIdToToken.get(n);
    return s ? this.querySet.get(s).canonicalizedUdfPath : null;
  }
  queryArgs(n) {
    const s = this.queryIdToToken.get(n);
    return s ? this.querySet.get(s).args : null;
  }
  queryToken(n) {
    return this.queryIdToToken.get(n) ?? null;
  }
  queryJournal(n) {
    var s;
    return (s = this.querySet.get(n)) == null ? void 0 : s.journal;
  }
  restart() {
    (this.unpause(), this.outstandingQueriesOlderThanRestart.clear());
    const n = [];
    for (const l of this.querySet.values()) {
      const c = {
        type: "Add",
        queryId: l.id,
        udfPath: l.canonicalizedUdfPath,
        args: [pn(l.args)],
        journal: l.journal,
        componentPath: l.componentPath,
      };
      (n.push(c), this.outstandingQueriesOlderThanRestart.add(l.id));
    }
    this.querySetVersion = 1;
    const s = { type: "ModifyQuerySet", baseVersion: 0, newVersion: 1, modifications: n };
    if (!this.auth) return ((this.identityVersion = 0), [s, void 0]);
    this.outstandingAuthOlderThanRestart = !0;
    const r = { type: "Authenticate", baseVersion: 0, ...this.auth };
    return ((this.identityVersion = 1), [s, r]);
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    const n =
        this.pendingQuerySetModifications.size > 0
          ? {
              type: "ModifyQuerySet",
              baseVersion: this.querySetVersion,
              newVersion: ++this.querySetVersion,
              modifications: Array.from(this.pendingQuerySetModifications.values()),
            }
          : void 0,
      s =
        this.auth !== void 0
          ? { type: "Authenticate", baseVersion: this.identityVersion++, ...this.auth }
          : void 0;
    return (this.unpause(), [n, s]);
  }
  unpause() {
    ((this.paused = !1), this.pendingQuerySetModifications.clear());
  }
  removeSubscriber(n) {
    const s = this.querySet.get(n);
    if (s.numSubscribers > 1) return ((s.numSubscribers -= 1), null);
    {
      (this.querySet.delete(n),
        this.queryIdToToken.delete(s.id),
        this.outstandingQueriesOlderThanRestart.delete(s.id));
      const r = this.querySetVersion,
        l = this.querySetVersion + 1,
        c = { type: "Remove", queryId: s.id };
      return (
        this.paused
          ? this.pendingQuerySetModifications.has(s.id)
            ? this.pendingQuerySetModifications.delete(s.id)
            : this.pendingQuerySetModifications.set(s.id, c)
          : (this.querySetVersion = l),
        { type: "ModifyQuerySet", baseVersion: r, newVersion: l, modifications: [c] }
      );
    }
  }
}
var mw = Object.defineProperty,
  pw = (a, n, s) =>
    n in a ? mw(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  jr = (a, n, s) => pw(a, typeof n != "symbol" ? n + "" : n, s);
class yw {
  constructor(n, s) {
    ((this.logger = n),
      (this.markConnectionStateDirty = s),
      jr(this, "inflightRequests"),
      jr(this, "requestsOlderThanRestart"),
      jr(this, "inflightMutationsCount", 0),
      jr(this, "inflightActionsCount", 0),
      (this.inflightRequests = new Map()),
      (this.requestsOlderThanRestart = new Set()));
  }
  request(n, s) {
    const r = new Promise((l) => {
      const c = s ? "Requested" : "NotSent";
      (this.inflightRequests.set(n.requestId, {
        message: n,
        status: { status: c, requestedAt: new Date(), onResult: l },
      }),
        n.type === "Mutation"
          ? this.inflightMutationsCount++
          : n.type === "Action" && this.inflightActionsCount++);
    });
    return (this.markConnectionStateDirty(), r);
  }
  onResponse(n) {
    const s = this.inflightRequests.get(n.requestId);
    if (s === void 0 || s.status.status === "Completed") return null;
    const r = s.message.type === "Mutation" ? "mutation" : "action",
      l = s.message.udfPath;
    for (const h of n.logLines) ol(this.logger, "info", r, l, h);
    const c = s.status;
    let d, g;
    if (n.success)
      ((d = { success: !0, logLines: n.logLines, value: Za(n.result) }), (g = () => c.onResult(d)));
    else {
      const h = n.result,
        { errorData: m } = n;
      (ol(this.logger, "error", r, l, h),
        (d = {
          success: !1,
          errorMessage: h,
          errorData: m !== void 0 ? Za(m) : void 0,
          logLines: n.logLines,
        }),
        (g = () => c.onResult(d)));
    }
    return n.type === "ActionResponse" || !n.success
      ? (g(),
        this.inflightRequests.delete(n.requestId),
        this.requestsOlderThanRestart.delete(n.requestId),
        s.message.type === "Action"
          ? this.inflightActionsCount--
          : s.message.type === "Mutation" && this.inflightMutationsCount--,
        this.markConnectionStateDirty(),
        { requestId: n.requestId, result: d })
      : ((s.status = { status: "Completed", result: d, ts: n.ts, onResolve: g }), null);
  }
  removeCompleted(n) {
    const s = new Map();
    for (const [r, l] of this.inflightRequests.entries()) {
      const c = l.status;
      c.status === "Completed" &&
        c.ts.lessThanOrEqual(n) &&
        (c.onResolve(),
        s.set(r, c.result),
        l.message.type === "Mutation"
          ? this.inflightMutationsCount--
          : l.message.type === "Action" && this.inflightActionsCount--,
        this.inflightRequests.delete(r),
        this.requestsOlderThanRestart.delete(r));
    }
    return (s.size > 0 && this.markConnectionStateDirty(), s);
  }
  restart() {
    this.requestsOlderThanRestart = new Set(this.inflightRequests.keys());
    const n = [];
    for (const [s, r] of this.inflightRequests) {
      if (r.status.status === "NotSent") {
        ((r.status.status = "Requested"), n.push(r.message));
        continue;
      }
      if (r.message.type === "Mutation") n.push(r.message);
      else if (r.message.type === "Action") {
        if (
          (this.inflightRequests.delete(s),
          this.requestsOlderThanRestart.delete(s),
          this.inflightActionsCount--,
          r.status.status === "Completed")
        )
          throw new Error("Action should never be in 'Completed' state");
        r.status.onResult({
          success: !1,
          errorMessage: "Connection lost while action was in flight",
          logLines: [],
        });
      }
    }
    return (this.markConnectionStateDirty(), n);
  }
  resume() {
    const n = [];
    for (const [, s] of this.inflightRequests)
      if (s.status.status === "NotSent") {
        ((s.status.status = "Requested"), n.push(s.message));
        continue;
      }
    return n;
  }
  hasIncompleteRequests() {
    for (const n of this.inflightRequests.values()) if (n.status.status === "Requested") return !0;
    return !1;
  }
  hasInflightRequests() {
    return this.inflightRequests.size > 0;
  }
  hasSyncedPastLastReconnect() {
    return this.requestsOlderThanRestart.size === 0;
  }
  timeOfOldestInflightRequest() {
    if (this.inflightRequests.size === 0) return null;
    let n = Date.now();
    for (const s of this.inflightRequests.values())
      s.status.status !== "Completed" &&
        s.status.requestedAt.getTime() < n &&
        (n = s.status.requestedAt.getTime());
    return new Date(n);
  }
  inflightMutations() {
    return this.inflightMutationsCount;
  }
  inflightActions() {
    return this.inflightActionsCount;
  }
}
const po = Symbol.for("functionName"),
  Wy = Symbol.for("toReferencePath");
function vw(a) {
  return a[Wy] ?? null;
}
function Sw(a) {
  return a.startsWith("function://");
}
function bw(a) {
  let n;
  if (typeof a == "string") Sw(a) ? (n = { functionHandle: a }) : (n = { name: a });
  else if (a[po]) n = { name: a[po] };
  else {
    const s = vw(a);
    if (!s) throw new Error(`${a} is not a functionReference`);
    n = { reference: s };
  }
  return n;
}
function dt(a) {
  const n = bw(a);
  if (n.name === void 0)
    throw n.functionHandle !== void 0
      ? new Error(
          `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${n.functionHandle}`,
        )
      : n.reference !== void 0
        ? new Error(
            `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${n.reference}`,
          )
        : new Error(
            `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(n)}`,
          );
  if (typeof a == "string") return a;
  const s = a[po];
  if (!s) throw new Error(`${a} is not a functionReference`);
  return s;
}
function jf(a) {
  return { [po]: a };
}
function Zy(a = []) {
  const n = {
    get(s, r) {
      if (typeof r == "string") {
        const l = [...a, r];
        return Zy(l);
      } else if (r === po) {
        if (a.length < 2) {
          const d = ["api", ...a].join(".");
          throw new Error(
            `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${d}\``,
          );
        }
        const l = a.slice(0, -1).join("/"),
          c = a[a.length - 1];
        return c === "default" ? l : l + ":" + c;
      } else return r === Symbol.toStringTag ? "FunctionReference" : void 0;
    },
  };
  return new Proxy({}, n);
}
const Rw = Zy();
var ww = Object.defineProperty,
  Tw = (a, n, s) =>
    n in a ? ww(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  rl = (a, n, s) => Tw(a, typeof n != "symbol" ? n + "" : n, s);
class yo {
  constructor(n) {
    (rl(this, "queryResults"),
      rl(this, "modifiedQueries"),
      (this.queryResults = n),
      (this.modifiedQueries = []));
  }
  getQuery(n, ...s) {
    const r = qn(s[0]),
      l = dt(n),
      c = this.queryResults.get(Qi(l, r));
    if (c !== void 0) return yo.queryValue(c.result);
  }
  getAllQueries(n) {
    const s = [],
      r = dt(n);
    for (const l of this.queryResults.values())
      l.udfPath === Fi(r) && s.push({ args: l.args, value: yo.queryValue(l.result) });
    return s;
  }
  setQuery(n, s, r) {
    const l = qn(s),
      c = dt(n),
      d = Qi(c, l);
    let g;
    r === void 0 ? (g = void 0) : (g = { success: !0, value: r, logLines: [] });
    const h = { udfPath: c, args: l, result: g };
    (this.queryResults.set(d, h), this.modifiedQueries.push(d));
  }
  static queryValue(n) {
    if (n !== void 0) return n.success ? n.value : void 0;
  }
}
class _w {
  constructor() {
    (rl(this, "queryResults"),
      rl(this, "optimisticUpdates"),
      (this.queryResults = new Map()),
      (this.optimisticUpdates = []));
  }
  ingestQueryResultsFromServer(n, s) {
    this.optimisticUpdates = this.optimisticUpdates.filter((d) => !s.has(d.mutationId));
    const r = this.queryResults;
    this.queryResults = new Map(n);
    const l = new yo(this.queryResults);
    for (const d of this.optimisticUpdates) d.update(l);
    const c = [];
    for (const [d, g] of this.queryResults) {
      const h = r.get(d);
      (h === void 0 || h.result !== g.result) && c.push(d);
    }
    return c;
  }
  applyOptimisticUpdate(n, s) {
    this.optimisticUpdates.push({ update: n, mutationId: s });
    const r = new yo(this.queryResults);
    return (n(r), r.modifiedQueries);
  }
  rawQueryResult(n) {
    const s = this.queryResults.get(n);
    if (s !== void 0) return s.result;
  }
  queryResult(n) {
    const s = this.queryResults.get(n);
    if (s === void 0) return;
    const r = s.result;
    if (r !== void 0) {
      if (r.success) return r.value;
      throw r.errorData !== void 0
        ? Tf(r, new wf(Ya("query", s.udfPath, r)))
        : new Error(Ya("query", s.udfPath, r));
    }
  }
  hasQueryResult(n) {
    return this.queryResults.get(n) !== void 0;
  }
  queryLogs(n) {
    var r;
    const s = this.queryResults.get(n);
    return (r = s == null ? void 0 : s.result) == null ? void 0 : r.logLines;
  }
}
var Ew = Object.defineProperty,
  Aw = (a, n, s) =>
    n in a ? Ew(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  tf = (a, n, s) => Aw(a, typeof n != "symbol" ? n + "" : n, s);
class Rt {
  constructor(n, s) {
    (tf(this, "low"),
      tf(this, "high"),
      tf(this, "__isUnsignedLong__"),
      (this.low = n | 0),
      (this.high = s | 0),
      (this.__isUnsignedLong__ = !0));
  }
  static isLong(n) {
    return (n && n.__isUnsignedLong__) === !0;
  }
  static fromBytesLE(n) {
    return new Rt(
      n[0] | (n[1] << 8) | (n[2] << 16) | (n[3] << 24),
      n[4] | (n[5] << 8) | (n[6] << 16) | (n[7] << 24),
    );
  }
  toBytesLE() {
    const n = this.high,
      s = this.low;
    return [
      s & 255,
      (s >>> 8) & 255,
      (s >>> 16) & 255,
      s >>> 24,
      n & 255,
      (n >>> 8) & 255,
      (n >>> 16) & 255,
      n >>> 24,
    ];
  }
  static fromNumber(n) {
    return isNaN(n) || n < 0 ? Mp : n >= xw ? Cw : new Rt((n % ro) | 0, (n / ro) | 0);
  }
  toString() {
    return (BigInt(this.high) * BigInt(ro) + BigInt(this.low)).toString();
  }
  equals(n) {
    return (
      Rt.isLong(n) || (n = Rt.fromValue(n)),
      this.high >>> 31 === 1 && n.high >>> 31 === 1
        ? !1
        : this.high === n.high && this.low === n.low
    );
  }
  notEquals(n) {
    return !this.equals(n);
  }
  comp(n) {
    return (
      Rt.isLong(n) || (n = Rt.fromValue(n)),
      this.equals(n)
        ? 0
        : n.high >>> 0 > this.high >>> 0 || (n.high === this.high && n.low >>> 0 > this.low >>> 0)
          ? -1
          : 1
    );
  }
  lessThanOrEqual(n) {
    return this.comp(n) <= 0;
  }
  static fromValue(n) {
    return typeof n == "number" ? Rt.fromNumber(n) : new Rt(n.low, n.high);
  }
}
const Mp = new Rt(0, 0),
  kp = 65536,
  ro = kp * kp,
  xw = ro * ro,
  Cw = new Rt(-1, -1);
var Ow = Object.defineProperty,
  Mw = (a, n, s) =>
    n in a ? Ow(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  Hr = (a, n, s) => Mw(a, typeof n != "symbol" ? n + "" : n, s);
class Lp {
  constructor(n, s) {
    (Hr(this, "version"),
      Hr(this, "remoteQuerySet"),
      Hr(this, "queryPath"),
      Hr(this, "logger"),
      (this.version = { querySet: 0, ts: Rt.fromNumber(0), identity: 0 }),
      (this.remoteQuerySet = new Map()),
      (this.queryPath = n),
      (this.logger = s));
  }
  transition(n) {
    const s = n.startVersion;
    if (
      this.version.querySet !== s.querySet ||
      this.version.ts.notEquals(s.ts) ||
      this.version.identity !== s.identity
    )
      throw new Error(
        `Invalid start version: ${s.ts.toString()}:${s.querySet}:${s.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`,
      );
    for (const r of n.modifications)
      switch (r.type) {
        case "QueryUpdated": {
          const l = this.queryPath(r.queryId);
          if (l) for (const d of r.logLines) ol(this.logger, "info", "query", l, d);
          const c = Za(r.value ?? null);
          this.remoteQuerySet.set(r.queryId, { success: !0, value: c, logLines: r.logLines });
          break;
        }
        case "QueryFailed": {
          const l = this.queryPath(r.queryId);
          if (l) for (const d of r.logLines) ol(this.logger, "info", "query", l, d);
          const { errorData: c } = r;
          this.remoteQuerySet.set(r.queryId, {
            success: !1,
            errorMessage: r.errorMessage,
            errorData: c !== void 0 ? Za(c) : void 0,
            logLines: r.logLines,
          });
          break;
        }
        case "QueryRemoved": {
          this.remoteQuerySet.delete(r.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${r.type}`);
      }
    this.version = n.endVersion;
  }
  remoteQueryResults() {
    return this.remoteQuerySet;
  }
  timestamp() {
    return this.version.ts;
  }
}
function nf(a) {
  const n = go(a);
  return Rt.fromBytesLE(Array.from(n));
}
function kw(a) {
  const n = new Uint8Array(a.toBytesLE());
  return mo(n);
}
function Dp(a) {
  switch (a.type) {
    case "FatalError":
    case "AuthError":
    case "ActionResponse":
    case "TransitionChunk":
    case "Ping":
      return { ...a };
    case "MutationResponse":
      return a.success ? { ...a, ts: nf(a.ts) } : { ...a };
    case "Transition":
      return {
        ...a,
        startVersion: { ...a.startVersion, ts: nf(a.startVersion.ts) },
        endVersion: { ...a.endVersion, ts: nf(a.endVersion.ts) },
      };
  }
}
function Lw(a) {
  switch (a.type) {
    case "Authenticate":
    case "ModifyQuerySet":
    case "Mutation":
    case "Action":
    case "Event":
      return { ...a };
    case "Connect":
      return a.maxObservedTimestamp !== void 0
        ? { ...a, maxObservedTimestamp: kw(a.maxObservedTimestamp) }
        : { ...a, maxObservedTimestamp: void 0 };
  }
}
var Dw = Object.defineProperty,
  Nw = (a, n, s) =>
    n in a ? Dw(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  Xe = (a, n, s) => Nw(a, typeof n != "symbol" ? n + "" : n, s);
const Pw = 1e3,
  Uw = 1001,
  Bw = 1005,
  qw = 4040;
let Wr;
function Fa() {
  return (
    Wr === void 0 && (Wr = Date.now()),
    typeof performance > "u" || !performance.now ? Date.now() : Math.round(Wr + performance.now())
  );
}
function Np() {
  return `t=${Math.round((Fa() - Wr) / 100) / 10}s`;
}
const Jy = {
  InternalServerError: { timeout: 1e3 },
  SubscriptionsWorkerFullError: { timeout: 3e3 },
  TooManyConcurrentRequests: { timeout: 3e3 },
  CommitterFullError: { timeout: 3e3 },
  AwsTooManyRequestsException: { timeout: 3e3 },
  ExecuteFullError: { timeout: 3e3 },
  SystemTimeoutError: { timeout: 3e3 },
  ExpiredInQueue: { timeout: 3e3 },
  VectorIndexesUnavailable: { timeout: 1e3 },
  SearchIndexesUnavailable: { timeout: 1e3 },
  TableSummariesUnavailable: { timeout: 1e3 },
  ServiceUnavailable: { timeout: 3e3 },
  WorkerOverloaded: { timeout: 3e3 },
  IsolateNotClean: { timeout: 3e3 },
  InitialPermitTimeoutError: { timeout: 3e3 },
  VectorIndexTooLarge: { timeout: 3e3 },
  SearchIndexTooLarge: { timeout: 3e3 },
  TooManyWritesInTimePeriod: { timeout: 3e3 },
};
function zw(a) {
  if (a === void 0) return "Unknown";
  for (const n of Object.keys(Jy)) if (a.startsWith(n)) return n;
  return "Unknown";
}
class Iw {
  constructor(n, s, r, l, c, d) {
    ((this.markConnectionStateDirty = c),
      (this.debug = d),
      Xe(this, "socket"),
      Xe(this, "connectionCount"),
      Xe(this, "_hasEverConnected", !1),
      Xe(this, "lastCloseReason"),
      Xe(this, "transitionChunkBuffer", null),
      Xe(this, "defaultInitialBackoff"),
      Xe(this, "maxBackoff"),
      Xe(this, "retries"),
      Xe(this, "serverInactivityThreshold"),
      Xe(this, "reconnectDueToServerInactivityTimeout"),
      Xe(this, "scheduledReconnect", null),
      Xe(this, "networkOnlineHandler", null),
      Xe(this, "pendingNetworkRecoveryInfo", null),
      Xe(this, "uri"),
      Xe(this, "onOpen"),
      Xe(this, "onResume"),
      Xe(this, "onMessage"),
      Xe(this, "webSocketConstructor"),
      Xe(this, "logger"),
      Xe(this, "onServerDisconnectError"),
      (this.webSocketConstructor = r),
      (this.socket = { state: "disconnected" }),
      (this.connectionCount = 0),
      (this.lastCloseReason = "InitialConnect"),
      (this.defaultInitialBackoff = 1e3),
      (this.maxBackoff = 64e3),
      (this.retries = 0),
      (this.serverInactivityThreshold = 6e4),
      (this.reconnectDueToServerInactivityTimeout = null),
      (this.uri = n),
      (this.onOpen = s.onOpen),
      (this.onResume = s.onResume),
      (this.onMessage = s.onMessage),
      (this.onServerDisconnectError = s.onServerDisconnectError),
      (this.logger = l),
      this.setupNetworkListener(),
      this.connect());
  }
  setSocketState(n) {
    ((this.socket = n),
      this._logVerbose(
        `socket state changed: ${this.socket.state}, paused: ${"paused" in this.socket ? this.socket.paused : void 0}`,
      ),
      this.markConnectionStateDirty());
  }
  setupNetworkListener() {
    typeof window > "u" ||
      typeof window.addEventListener != "function" ||
      (this.networkOnlineHandler === null &&
        ((this.networkOnlineHandler = () => {
          (this._logVerbose("network online event detected"), this.tryReconnectImmediately());
        }),
        window.addEventListener("online", this.networkOnlineHandler),
        this._logVerbose("network online event listener registered")));
  }
  cleanupNetworkListener() {
    this.networkOnlineHandler &&
      typeof window < "u" &&
      typeof window.removeEventListener == "function" &&
      (window.removeEventListener("online", this.networkOnlineHandler),
      (this.networkOnlineHandler = null),
      this._logVerbose("network online event listener removed"));
  }
  assembleTransition(n) {
    if (
      n.partNumber < 0 ||
      n.partNumber >= n.totalParts ||
      n.totalParts === 0 ||
      (this.transitionChunkBuffer &&
        (this.transitionChunkBuffer.totalParts !== n.totalParts ||
          this.transitionChunkBuffer.transitionId !== n.transitionId))
    )
      throw ((this.transitionChunkBuffer = null), new Error("Invalid TransitionChunk"));
    if (
      (this.transitionChunkBuffer === null &&
        (this.transitionChunkBuffer = {
          chunks: [],
          totalParts: n.totalParts,
          transitionId: n.transitionId,
        }),
      n.partNumber !== this.transitionChunkBuffer.chunks.length)
    ) {
      const s = this.transitionChunkBuffer.chunks.length;
      throw (
        (this.transitionChunkBuffer = null),
        new Error(`TransitionChunk received out of order: expected part ${s}, got ${n.partNumber}`)
      );
    }
    if (
      (this.transitionChunkBuffer.chunks.push(n.chunk),
      this.transitionChunkBuffer.chunks.length === n.totalParts)
    ) {
      const s = this.transitionChunkBuffer.chunks.join("");
      this.transitionChunkBuffer = null;
      const r = Dp(JSON.parse(s));
      if (r.type !== "Transition")
        throw new Error(`Expected Transition, got ${r.type} after assembling chunks`);
      return r;
    }
    return null;
  }
  connect() {
    if (this.socket.state === "terminated") return;
    if (this.socket.state !== "disconnected" && this.socket.state !== "stopped")
      throw new Error("Didn't start connection from disconnected state: " + this.socket.state);
    const n = new this.webSocketConstructor(this.uri);
    (this._logVerbose("constructed WebSocket"),
      this.setSocketState({ state: "connecting", ws: n, paused: "no" }),
      this.resetServerInactivityTimeout(),
      (n.onopen = () => {
        if ((this.logger.logVerbose("begin ws.onopen"), this.socket.state !== "connecting"))
          throw new Error("onopen called with socket not in connecting state");
        if (
          (this.setSocketState({
            state: "ready",
            ws: n,
            paused: this.socket.paused === "yes" ? "uninitialized" : "no",
          }),
          this.resetServerInactivityTimeout(),
          this.socket.paused === "no" &&
            ((this._hasEverConnected = !0),
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
              clientTs: Fa(),
            })),
          this.lastCloseReason !== "InitialConnect" &&
            (this.lastCloseReason
              ? this.logger.log(
                  "WebSocket reconnected at",
                  Np(),
                  "after disconnect due to",
                  this.lastCloseReason,
                )
              : this.logger.log("WebSocket reconnected at", Np())),
          (this.connectionCount += 1),
          (this.lastCloseReason = null),
          this.pendingNetworkRecoveryInfo !== null)
        ) {
          const { timeSavedMs: s } = this.pendingNetworkRecoveryInfo;
          ((this.pendingNetworkRecoveryInfo = null),
            this.sendMessage({
              type: "Event",
              eventType: "NetworkRecoveryReconnect",
              event: { timeSavedMs: s },
            }),
            this.logger.log(
              `Network recovery reconnect saved ~${Math.round(s / 1e3)}s of waiting`,
            ));
        }
      }),
      (n.onerror = (s) => {
        this.transitionChunkBuffer = null;
        const r = s.message;
        r && this.logger.log(`WebSocket error message: ${r}`);
      }),
      (n.onmessage = (s) => {
        this.resetServerInactivityTimeout();
        const r = s.data.length;
        let l = Dp(JSON.parse(s.data));
        if ((this._logVerbose(`received ws message with type ${l.type}`), l.type === "Ping"))
          return;
        if (l.type === "TransitionChunk") {
          const d = this.assembleTransition(l);
          if (!d) return;
          ((l = d), this._logVerbose(`assembled full ws message of type ${l.type}`));
        }
        (this.transitionChunkBuffer !== null &&
          ((this.transitionChunkBuffer = null),
          this.logger.log(`Received unexpected ${l.type} while buffering TransitionChunks`)),
          l.type === "Transition" &&
            this.reportLargeTransition({ messageLength: r, transition: l }),
          this.onMessage(l).hasSyncedPastLastReconnect &&
            ((this.retries = 0), this.markConnectionStateDirty()));
      }),
      (n.onclose = (s) => {
        if (
          (this._logVerbose("begin ws.onclose"),
          (this.transitionChunkBuffer = null),
          this.lastCloseReason === null &&
            (this.lastCloseReason = s.reason || `closed with code ${s.code}`),
          s.code !== Pw && s.code !== Uw && s.code !== Bw && s.code !== qw)
        ) {
          let l = `WebSocket closed with code ${s.code}`;
          (s.reason && (l += `: ${s.reason}`),
            this.logger.log(l),
            this.onServerDisconnectError && s.reason && this.onServerDisconnectError(l));
        }
        const r = zw(s.reason);
        this.scheduleReconnect(r);
      }));
  }
  socketState() {
    return this.socket.state;
  }
  sendMessage(n) {
    const s = {
      type: n.type,
      ...(n.type === "Authenticate" && n.tokenType === "User"
        ? { value: `...${n.value.slice(-7)}` }
        : {}),
    };
    if (this.socket.state === "ready" && this.socket.paused === "no") {
      const r = Lw(n),
        l = JSON.stringify(r);
      let c = !1;
      try {
        (this.socket.ws.send(l), (c = !0));
      } catch (d) {
        (this.logger.log(`Failed to send message on WebSocket, reconnecting: ${d}`),
          this.closeAndReconnect("FailedToSendMessage"));
      }
      return (
        this._logVerbose(
          `${c ? "sent" : "failed to send"} message with type ${n.type}: ${JSON.stringify(s)}`,
        ),
        !0
      );
    }
    return (
      this._logVerbose(
        `message not sent (socket state: ${this.socket.state}, paused: ${"paused" in this.socket ? this.socket.paused : void 0}): ${JSON.stringify(s)}`,
      ),
      !1
    );
  }
  resetServerInactivityTimeout() {
    this.socket.state !== "terminated" &&
      (this.reconnectDueToServerInactivityTimeout !== null &&
        (clearTimeout(this.reconnectDueToServerInactivityTimeout),
        (this.reconnectDueToServerInactivityTimeout = null)),
      (this.reconnectDueToServerInactivityTimeout = setTimeout(() => {
        this.closeAndReconnect("InactiveServer");
      }, this.serverInactivityThreshold)));
  }
  scheduleReconnect(n) {
    (this.scheduledReconnect &&
      (clearTimeout(this.scheduledReconnect.timeout), (this.scheduledReconnect = null)),
      (this.socket = { state: "disconnected" }));
    const s = this.nextBackoff(n);
    (this.markConnectionStateDirty(),
      this.logger.log(`Attempting reconnect in ${Math.round(s)}ms`));
    const r = Fa(),
      l = setTimeout(() => {
        var c;
        ((c = this.scheduledReconnect) == null ? void 0 : c.timeout) === l &&
          ((this.scheduledReconnect = null), this.connect());
      }, s);
    this.scheduledReconnect = { timeout: l, scheduledAt: r, backoffMs: s };
  }
  closeAndReconnect(n) {
    switch ((this._logVerbose(`begin closeAndReconnect with reason ${n}`), this.socket.state)) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return;
      case "connecting":
      case "ready": {
        ((this.lastCloseReason = n), this.close(), this.scheduleReconnect("client"));
        return;
      }
      default:
        this.socket;
    }
  }
  close() {
    switch (((this.transitionChunkBuffer = null), this.socket.state)) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return Promise.resolve();
      case "connecting": {
        const n = this.socket.ws;
        return (
          (n.onmessage = (s) => {
            this._logVerbose("Ignoring message received after close");
          }),
          new Promise((s) => {
            ((n.onclose = () => {
              (this._logVerbose("Closed after connecting"), s());
            }),
              (n.onopen = () => {
                (this._logVerbose("Opened after connecting"), n.close());
              }));
          })
        );
      }
      case "ready": {
        this._logVerbose("ws.close called");
        const n = this.socket.ws;
        n.onmessage = (r) => {
          this._logVerbose("Ignoring message received after close");
        };
        const s = new Promise((r) => {
          n.onclose = () => {
            r();
          };
        });
        return (n.close(), s);
      }
      default:
        return (this.socket, Promise.resolve());
    }
  }
  terminate() {
    switch (
      (this.reconnectDueToServerInactivityTimeout &&
        clearTimeout(this.reconnectDueToServerInactivityTimeout),
      this.scheduledReconnect &&
        (clearTimeout(this.scheduledReconnect.timeout), (this.scheduledReconnect = null)),
      this.cleanupNetworkListener(),
      this.socket.state)
    ) {
      case "terminated":
      case "stopped":
      case "disconnected":
      case "connecting":
      case "ready": {
        const n = this.close();
        return (this.setSocketState({ state: "terminated" }), n);
      }
      default:
        throw (this.socket, new Error(`Invalid websocket state: ${this.socket.state}`));
    }
  }
  stop() {
    switch (this.socket.state) {
      case "terminated":
        return Promise.resolve();
      case "connecting":
      case "stopped":
      case "disconnected":
      case "ready": {
        this.cleanupNetworkListener();
        const n = this.close();
        return ((this.socket = { state: "stopped" }), n);
      }
      default:
        return (this.socket, Promise.resolve());
    }
  }
  tryRestart() {
    switch (this.socket.state) {
      case "stopped":
        break;
      case "terminated":
      case "connecting":
      case "ready":
      case "disconnected":
        this.logger.logVerbose("Restart called without stopping first");
        return;
      default:
        this.socket;
    }
    (this.setupNetworkListener(), this.connect());
  }
  pause() {
    switch (this.socket.state) {
      case "disconnected":
      case "stopped":
      case "terminated":
        return;
      case "connecting":
      case "ready": {
        this.socket = { ...this.socket, paused: "yes" };
        return;
      }
      default: {
        this.socket;
        return;
      }
    }
  }
  tryReconnectImmediately() {
    if (
      (this._logVerbose("tryReconnectImmediately called"), this.socket.state !== "disconnected")
    ) {
      this._logVerbose(
        `tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`,
      );
      return;
    }
    let n = null;
    if (this.scheduledReconnect) {
      const s = Fa() - this.scheduledReconnect.scheduledAt;
      ((n = Math.max(0, this.scheduledReconnect.backoffMs - s)),
        this._logVerbose(
          `would have waited ${Math.round(n)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(s)}ms)`,
        ),
        clearTimeout(this.scheduledReconnect.timeout),
        (this.scheduledReconnect = null),
        this._logVerbose("canceled scheduled reconnect"));
    }
    (this.logger.log("Network recovery detected, reconnecting immediately"),
      (this.pendingNetworkRecoveryInfo = n !== null ? { timeSavedMs: n } : null),
      this.connect());
  }
  resume() {
    switch (this.socket.state) {
      case "connecting":
        this.socket = { ...this.socket, paused: "no" };
        return;
      case "ready":
        this.socket.paused === "uninitialized"
          ? ((this.socket = { ...this.socket, paused: "no" }),
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
              clientTs: Fa(),
            }))
          : this.socket.paused === "yes" &&
            ((this.socket = { ...this.socket, paused: "no" }), this.onResume());
        return;
      case "terminated":
      case "stopped":
      case "disconnected":
        return;
      default:
        this.socket;
    }
    this.connect();
  }
  connectionState() {
    return {
      isConnected: this.socket.state === "ready",
      hasEverConnected: this._hasEverConnected,
      connectionCount: this.connectionCount,
      connectionRetries: this.retries,
    };
  }
  _logVerbose(n) {
    this.logger.logVerbose(n);
  }
  nextBackoff(n) {
    const r =
      (n === "client" ? 100 : n === "Unknown" ? this.defaultInitialBackoff : Jy[n].timeout) *
      Math.pow(2, this.retries);
    this.retries += 1;
    const l = Math.min(r, this.maxBackoff),
      c = l * (Math.random() - 0.5);
    return l + c;
  }
  reportLargeTransition({ transition: n, messageLength: s }) {
    if (n.clientClockSkew === void 0 || n.serverTs === void 0) return;
    const r = Fa() - n.clientClockSkew - n.serverTs / 1e6,
      l = `${Math.round(r)}ms`,
      c = `${Math.round(s / 1e4) / 100}MB`,
      d = s / (r / 1e3),
      g = `${Math.round(d / 1e4) / 100}MB per second`;
    (this._logVerbose(`received ${c} transition in ${l} at ${g}`),
      s > 2e7
        ? this.logger.log(
            `received query results totaling more that 20MB (${c}) which will take a long time to download on slower connections`,
          )
        : r > 2e4 &&
          this.logger.log(
            `received query results totaling ${c} which took more than 20s to arrive (${l})`,
          ),
      this.debug &&
        this.sendMessage({
          type: "Event",
          eventType: "ClientReceivedTransition",
          event: { transitionTransitTime: r, messageLength: s },
        }));
  }
}
function jw() {
  return Hw();
}
function Hw() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (a) => {
    const n = (Math.random() * 16) | 0;
    return (a === "x" ? n : (n & 3) | 8).toString(16);
  });
}
class so extends Error {}
so.prototype.name = "InvalidTokenError";
function Vw(a) {
  return decodeURIComponent(
    atob(a).replace(/(.)/g, (n, s) => {
      let r = s.charCodeAt(0).toString(16).toUpperCase();
      return (r.length < 2 && (r = "0" + r), "%" + r);
    }),
  );
}
function Qw(a) {
  let n = a.replace(/-/g, "+").replace(/_/g, "/");
  switch (n.length % 4) {
    case 0:
      break;
    case 2:
      n += "==";
      break;
    case 3:
      n += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return Vw(n);
  } catch {
    return atob(n);
  }
}
function ev(a, n) {
  if (typeof a != "string") throw new so("Invalid token specified: must be a string");
  n || (n = {});
  const s = n.header === !0 ? 0 : 1,
    r = a.split(".")[s];
  if (typeof r != "string") throw new so(`Invalid token specified: missing part #${s + 1}`);
  let l;
  try {
    l = Qw(r);
  } catch (c) {
    throw new so(`Invalid token specified: invalid base64 for part #${s + 1} (${c.message})`);
  }
  try {
    return JSON.parse(l);
  } catch (c) {
    throw new so(`Invalid token specified: invalid json for part #${s + 1} (${c.message})`);
  }
}
var $w = Object.defineProperty,
  Fw = (a, n, s) =>
    n in a ? $w(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  $t = (a, n, s) => Fw(a, typeof n != "symbol" ? n + "" : n, s);
const Yw = 480 * 60 * 60 * 1e3,
  Pp = 2;
class Gw {
  constructor(n, s, r) {
    ($t(this, "authState", { state: "noAuth" }),
      $t(this, "configVersion", 0),
      $t(this, "syncState"),
      $t(this, "authenticate"),
      $t(this, "stopSocket"),
      $t(this, "tryRestartSocket"),
      $t(this, "pauseSocket"),
      $t(this, "resumeSocket"),
      $t(this, "clearAuth"),
      $t(this, "logger"),
      $t(this, "refreshTokenLeewaySeconds"),
      $t(this, "tokenConfirmationAttempts", 0),
      (this.syncState = n),
      (this.authenticate = s.authenticate),
      (this.stopSocket = s.stopSocket),
      (this.tryRestartSocket = s.tryRestartSocket),
      (this.pauseSocket = s.pauseSocket),
      (this.resumeSocket = s.resumeSocket),
      (this.clearAuth = s.clearAuth),
      (this.logger = r.logger),
      (this.refreshTokenLeewaySeconds = r.refreshTokenLeewaySeconds));
  }
  async setConfig(n, s) {
    (this.resetAuthState(),
      this._logVerbose("pausing WS for auth token fetch"),
      this.pauseSocket());
    const r = await this.fetchTokenAndGuardAgainstRace(n, { forceRefreshToken: !1 });
    r.isFromOutdatedConfig ||
      (r.value
        ? (this.setAuthState({
            state: "waitingForServerConfirmationOfCachedToken",
            config: { fetchToken: n, onAuthChange: s },
            hasRetried: !1,
          }),
          this.authenticate(r.value))
        : (this.setAuthState({
            state: "initialRefetch",
            config: { fetchToken: n, onAuthChange: s },
          }),
          await this.refetchToken()),
      this._logVerbose("resuming WS after auth token fetch"),
      this.resumeSocket());
  }
  onTransition(n) {
    if (
      this.syncState.isCurrentOrNewerAuthVersion(n.endVersion.identity) &&
      !(n.endVersion.identity <= n.startVersion.identity)
    ) {
      if (this.authState.state === "waitingForServerConfirmationOfCachedToken") {
        (this._logVerbose("server confirmed auth token is valid"),
          this.refetchToken(),
          this.authState.config.onAuthChange(!0));
        return;
      }
      this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
        (this._logVerbose("server confirmed new auth token is valid"),
        this.scheduleTokenRefetch(this.authState.token),
        (this.tokenConfirmationAttempts = 0),
        this.authState.hadAuth || this.authState.config.onAuthChange(!0));
    }
  }
  onAuthError(n) {
    if (
      n.authUpdateAttempted === !1 &&
      (this.authState.state === "waitingForServerConfirmationOfFreshToken" ||
        this.authState.state === "waitingForServerConfirmationOfCachedToken")
    ) {
      this._logVerbose("ignoring non-auth token expired error");
      return;
    }
    const { baseVersion: s } = n;
    if (!this.syncState.isCurrentOrNewerAuthVersion(s + 1)) {
      this._logVerbose("ignoring auth error for previous auth attempt");
      return;
    }
    this.tryToReauthenticate(n);
  }
  async tryToReauthenticate(n) {
    if (
      (this._logVerbose(`attempting to reauthenticate: ${n.error}`),
      this.authState.state === "noAuth" ||
        (this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
          this.tokenConfirmationAttempts >= Pp))
    ) {
      (this.logger.error(`Failed to authenticate: "${n.error}", check your server auth config`),
        this.syncState.hasAuth() && this.syncState.clearAuth(),
        this.authState.state !== "noAuth" &&
          this.setAndReportAuthFailed(this.authState.config.onAuthChange));
      return;
    }
    (this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
      (this.tokenConfirmationAttempts++,
      this._logVerbose(
        `retrying reauthentication, ${Pp - this.tokenConfirmationAttempts} attempts remaining`,
      )),
      await this.stopSocket());
    const s = await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken, {
      forceRefreshToken: !0,
    });
    s.isFromOutdatedConfig ||
      (s.value && this.syncState.isNewAuth(s.value)
        ? (this.authenticate(s.value),
          this.setAuthState({
            state: "waitingForServerConfirmationOfFreshToken",
            config: this.authState.config,
            token: s.value,
            hadAuth:
              this.authState.state === "notRefetching" ||
              this.authState.state === "waitingForScheduledRefetch",
          }))
        : (this._logVerbose("reauthentication failed, could not fetch a new token"),
          this.syncState.hasAuth() && this.syncState.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this.tryRestartSocket());
  }
  async refetchToken() {
    if (this.authState.state === "noAuth") return;
    this._logVerbose("refetching auth token");
    const n = await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken, {
      forceRefreshToken: !0,
    });
    n.isFromOutdatedConfig ||
      (n.value
        ? this.syncState.isNewAuth(n.value)
          ? (this.setAuthState({
              state: "waitingForServerConfirmationOfFreshToken",
              hadAuth: this.syncState.hasAuth(),
              token: n.value,
              config: this.authState.config,
            }),
            this.authenticate(n.value))
          : this.setAuthState({ state: "notRefetching", config: this.authState.config })
        : (this._logVerbose("refetching token failed"),
          this.syncState.hasAuth() && this.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this._logVerbose("restarting WS after auth token fetch (if currently stopped)"),
      this.tryRestartSocket());
  }
  scheduleTokenRefetch(n) {
    if (this.authState.state === "noAuth") return;
    const s = this.decodeToken(n);
    if (!s) {
      this.logger.error("Auth token is not a valid JWT, cannot refetch the token");
      return;
    }
    const { iat: r, exp: l } = s;
    if (!r || !l) {
      this.logger.error("Auth token does not have required fields, cannot refetch the token");
      return;
    }
    const c = l - r;
    if (c <= 2) {
      this.logger.error("Auth token does not live long enough, cannot refetch the token");
      return;
    }
    let d = Math.min(Yw, (c - this.refreshTokenLeewaySeconds) * 1e3);
    d <= 0 &&
      (this.logger.warn(
        `Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${c}s`,
      ),
      (d = 0));
    const g = setTimeout(() => {
      (this._logVerbose("running scheduled token refetch"), this.refetchToken());
    }, d);
    (this.setAuthState({
      state: "waitingForScheduledRefetch",
      refetchTokenTimeoutId: g,
      config: this.authState.config,
    }),
      this._logVerbose(`scheduled preemptive auth token refetching in ${d}ms`));
  }
  async fetchTokenAndGuardAgainstRace(n, s) {
    const r = ++this.configVersion;
    this._logVerbose(`fetching token with config version ${r}`);
    const l = await n(s);
    return this.configVersion !== r
      ? (this._logVerbose(`stale config version, expected ${r}, got ${this.configVersion}`),
        { isFromOutdatedConfig: !0 })
      : { isFromOutdatedConfig: !1, value: l };
  }
  stop() {
    (this.resetAuthState(),
      this.configVersion++,
      this._logVerbose(`config version bumped to ${this.configVersion}`));
  }
  setAndReportAuthFailed(n) {
    (n(!1), this.resetAuthState());
  }
  resetAuthState() {
    this.setAuthState({ state: "noAuth" });
  }
  setAuthState(n) {
    const s =
      n.state === "waitingForServerConfirmationOfFreshToken"
        ? { hadAuth: n.hadAuth, state: n.state, token: `...${n.token.slice(-7)}` }
        : { state: n.state };
    switch ((this._logVerbose(`setting auth state to ${JSON.stringify(s)}`), n.state)) {
      case "waitingForScheduledRefetch":
      case "notRefetching":
      case "noAuth":
        this.tokenConfirmationAttempts = 0;
        break;
    }
    (this.authState.state === "waitingForScheduledRefetch" &&
      (clearTimeout(this.authState.refetchTokenTimeoutId), this.syncState.markAuthCompletion()),
      (this.authState = n));
  }
  decodeToken(n) {
    try {
      return ev(n);
    } catch (s) {
      return (
        this._logVerbose(
          `Error decoding token: ${s instanceof Error ? s.message : "Unknown error"}`,
        ),
        null
      );
    }
  }
  _logVerbose(n) {
    this.logger.logVerbose(`${n} [v${this.configVersion}]`);
  }
}
const Kw = ["convexClientConstructed", "convexWebSocketOpen", "convexFirstMessageReceived"];
function Xw(a, n) {
  const s = { sessionId: n };
  typeof performance > "u" || !performance.mark || performance.mark(a, { detail: s });
}
function Ww(a) {
  let n = a.name.slice(6);
  return ((n = n.charAt(0).toLowerCase() + n.slice(1)), { name: n, startTime: a.startTime });
}
function Zw(a) {
  if (typeof performance > "u" || !performance.getEntriesByName) return [];
  const n = [];
  for (const s of Kw) {
    const r = performance
      .getEntriesByName(s)
      .filter((l) => l.entryType === "mark")
      .filter((l) => l.detail.sessionId === a);
    n.push(...r);
  }
  return n.map(Ww);
}
var Jw = Object.defineProperty,
  eT = (a, n, s) =>
    n in a ? Jw(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  We = (a, n, s) => eT(a, typeof n != "symbol" ? n + "" : n, s);
class tT {
  constructor(n, s, r) {
    if (
      (We(this, "address"),
      We(this, "state"),
      We(this, "requestManager"),
      We(this, "webSocketManager"),
      We(this, "authenticationManager"),
      We(this, "remoteQuerySet"),
      We(this, "optimisticQueryResults"),
      We(this, "_transitionHandlerCounter", 0),
      We(this, "_nextRequestId"),
      We(this, "_onTransitionFns", new Map()),
      We(this, "_sessionId"),
      We(this, "firstMessageReceived", !1),
      We(this, "debug"),
      We(this, "logger"),
      We(this, "maxObservedTimestamp"),
      We(this, "connectionStateSubscribers", new Map()),
      We(this, "nextConnectionStateSubscriberId", 0),
      We(this, "_lastPublishedConnectionState"),
      We(this, "markConnectionStateDirty", () => {
        Promise.resolve().then(() => {
          const w = this.connectionState();
          if (JSON.stringify(w) !== JSON.stringify(this._lastPublishedConnectionState)) {
            this._lastPublishedConnectionState = w;
            for (const R of this.connectionStateSubscribers.values()) R(w);
          }
        });
      }),
      We(this, "mark", (w) => {
        this.debug && Xw(w, this.sessionId);
      }),
      typeof n == "object")
    )
      throw new Error(
        "Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly.",
      );
    ((r == null ? void 0 : r.skipConvexDeploymentUrlCheck) !== !0 && XR(n), (r = { ...r }));
    const l = r.authRefreshTokenLeewaySeconds ?? 10;
    let c = r.webSocketConstructor;
    if (!c && typeof WebSocket > "u")
      throw new Error(
        "No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient",
      );
    ((c = c || WebSocket),
      (this.debug = r.reportDebugInfoToConvex ?? !1),
      (this.address = n),
      (this.logger =
        r.logger === !1
          ? Xy({ verbose: r.verbose ?? !1 })
          : r.logger !== !0 && r.logger
            ? r.logger
            : Ky({ verbose: r.verbose ?? !1 })));
    const d = n.search("://");
    if (d === -1) throw new Error("Provided address was not an absolute URL.");
    const g = n.substring(d + 3),
      h = n.substring(0, d);
    let m;
    if (h === "http") m = "ws";
    else if (h === "https") m = "wss";
    else throw new Error(`Unknown parent protocol ${h}`);
    const y = `${m}://${g}/api/${xp}/sync`;
    ((this.state = new gw()),
      (this.remoteQuerySet = new Lp((w) => this.state.queryPath(w), this.logger)),
      (this.requestManager = new yw(this.logger, this.markConnectionStateDirty)));
    const v = () => {
      (this.webSocketManager.pause(), this.state.pause());
    };
    ((this.authenticationManager = new Gw(
      this.state,
      {
        authenticate: (w) => {
          const R = this.state.setAuth(w);
          return (this.webSocketManager.sendMessage(R), R.baseVersion);
        },
        stopSocket: () => this.webSocketManager.stop(),
        tryRestartSocket: () => this.webSocketManager.tryRestart(),
        pauseSocket: v,
        resumeSocket: () => this.webSocketManager.resume(),
        clearAuth: () => {
          this.clearAuth();
        },
      },
      { logger: this.logger, refreshTokenLeewaySeconds: l },
    )),
      (this.optimisticQueryResults = new _w()),
      this.addOnTransitionHandler((w) => {
        s(w.queries.map((R) => R.token));
      }),
      (this._nextRequestId = 0),
      (this._sessionId = jw()));
    const { unsavedChangesWarning: S } = r;
    if (typeof window > "u" || typeof window.addEventListener > "u") {
      if (S === !0)
        throw new Error(
          "unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options.",
        );
    } else
      S !== !1 &&
        window.addEventListener("beforeunload", (w) => {
          if (this.requestManager.hasIncompleteRequests()) {
            w.preventDefault();
            const R = "Are you sure you want to leave? Your changes may not be saved.";
            return (((w || window.event).returnValue = R), R);
          }
        });
    ((this.webSocketManager = new Iw(
      y,
      {
        onOpen: (w) => {
          (this.mark("convexWebSocketOpen"),
            this.webSocketManager.sendMessage({
              ...w,
              type: "Connect",
              sessionId: this._sessionId,
              maxObservedTimestamp: this.maxObservedTimestamp,
            }),
            (this.remoteQuerySet = new Lp((E) => this.state.queryPath(E), this.logger)));
          const [R, T] = this.state.restart();
          (T && this.webSocketManager.sendMessage(T), this.webSocketManager.sendMessage(R));
          for (const E of this.requestManager.restart()) this.webSocketManager.sendMessage(E);
        },
        onResume: () => {
          const [w, R] = this.state.resume();
          (R && this.webSocketManager.sendMessage(R), w && this.webSocketManager.sendMessage(w));
          for (const T of this.requestManager.resume()) this.webSocketManager.sendMessage(T);
        },
        onMessage: (w) => {
          switch (
            (this.firstMessageReceived ||
              ((this.firstMessageReceived = !0),
              this.mark("convexFirstMessageReceived"),
              this.reportMarks()),
            w.type)
          ) {
            case "Transition": {
              (this.observedTimestamp(w.endVersion.ts),
                this.authenticationManager.onTransition(w),
                this.remoteQuerySet.transition(w),
                this.state.transition(w));
              const R = this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());
              this.notifyOnQueryResultChanges(R);
              break;
            }
            case "MutationResponse": {
              w.success && this.observedTimestamp(w.ts);
              const R = this.requestManager.onResponse(w);
              R !== null && this.notifyOnQueryResultChanges(new Map([[R.requestId, R.result]]));
              break;
            }
            case "ActionResponse": {
              this.requestManager.onResponse(w);
              break;
            }
            case "AuthError": {
              this.authenticationManager.onAuthError(w);
              break;
            }
            case "FatalError": {
              const R = fw(this.logger, w.error);
              throw (this.webSocketManager.terminate(), R);
            }
          }
          return { hasSyncedPastLastReconnect: this.hasSyncedPastLastReconnect() };
        },
        onServerDisconnectError: r.onServerDisconnectError,
      },
      c,
      this.logger,
      this.markConnectionStateDirty,
      this.debug,
    )),
      this.mark("convexClientConstructed"),
      r.expectAuth && v());
  }
  hasSyncedPastLastReconnect() {
    return (
      this.requestManager.hasSyncedPastLastReconnect() && this.state.hasSyncedPastLastReconnect()
    );
  }
  observedTimestamp(n) {
    (this.maxObservedTimestamp === void 0 || this.maxObservedTimestamp.lessThanOrEqual(n)) &&
      (this.maxObservedTimestamp = n);
  }
  getMaxObservedTimestamp() {
    return this.maxObservedTimestamp;
  }
  notifyOnQueryResultChanges(n) {
    const s = this.remoteQuerySet.remoteQueryResults(),
      r = new Map();
    for (const [c, d] of s) {
      const g = this.state.queryToken(c);
      if (g !== null) {
        const h = { result: d, udfPath: this.state.queryPath(c), args: this.state.queryArgs(c) };
        r.set(g, h);
      }
    }
    const l = this.optimisticQueryResults.ingestQueryResultsFromServer(r, new Set(n.keys()));
    this.handleTransition({
      queries: l.map((c) => {
        const d = this.optimisticQueryResults.rawQueryResult(c);
        return { token: c, modification: { kind: "Updated", result: d } };
      }),
      reflectedMutations: Array.from(n).map(([c, d]) => ({ requestId: c, result: d })),
      timestamp: this.remoteQuerySet.timestamp(),
    });
  }
  handleTransition(n) {
    for (const s of this._onTransitionFns.values()) s(n);
  }
  addOnTransitionHandler(n) {
    const s = this._transitionHandlerCounter++;
    return (this._onTransitionFns.set(s, n), () => this._onTransitionFns.delete(s));
  }
  getCurrentAuthClaims() {
    const n = this.state.getAuth();
    let s = {};
    if (n && n.tokenType === "User")
      try {
        s = n ? ev(n.value) : {};
      } catch {
        s = {};
      }
    else return;
    return { token: n.value, decoded: s };
  }
  setAuth(n, s) {
    this.authenticationManager.setConfig(n, s);
  }
  hasAuth() {
    return this.state.hasAuth();
  }
  setAdminAuth(n, s) {
    const r = this.state.setAdminAuth(n, s);
    this.webSocketManager.sendMessage(r);
  }
  clearAuth() {
    const n = this.state.clearAuth();
    this.webSocketManager.sendMessage(n);
  }
  subscribe(n, s, r) {
    const l = qn(s),
      {
        modification: c,
        queryToken: d,
        unsubscribe: g,
      } = this.state.subscribe(
        n,
        l,
        r == null ? void 0 : r.journal,
        r == null ? void 0 : r.componentPath,
      );
    return (
      c !== null && this.webSocketManager.sendMessage(c),
      {
        queryToken: d,
        unsubscribe: () => {
          const h = g();
          h && this.webSocketManager.sendMessage(h);
        },
      }
    );
  }
  localQueryResult(n, s) {
    const r = qn(s),
      l = Qi(n, r);
    return this.optimisticQueryResults.queryResult(l);
  }
  localQueryResultByToken(n) {
    return this.optimisticQueryResults.queryResult(n);
  }
  hasLocalQueryResultByToken(n) {
    return this.optimisticQueryResults.hasQueryResult(n);
  }
  localQueryLogs(n, s) {
    const r = qn(s),
      l = Qi(n, r);
    return this.optimisticQueryResults.queryLogs(l);
  }
  queryJournal(n, s) {
    const r = qn(s),
      l = Qi(n, r);
    return this.state.queryJournal(l);
  }
  connectionState() {
    const n = this.webSocketManager.connectionState();
    return {
      hasInflightRequests: this.requestManager.hasInflightRequests(),
      isWebSocketConnected: n.isConnected,
      hasEverConnected: n.hasEverConnected,
      connectionCount: n.connectionCount,
      connectionRetries: n.connectionRetries,
      timeOfOldestInflightRequest: this.requestManager.timeOfOldestInflightRequest(),
      inflightMutations: this.requestManager.inflightMutations(),
      inflightActions: this.requestManager.inflightActions(),
    };
  }
  subscribeToConnectionState(n) {
    const s = this.nextConnectionStateSubscriberId++;
    return (
      this.connectionStateSubscribers.set(s, n),
      () => {
        this.connectionStateSubscribers.delete(s);
      }
    );
  }
  async mutation(n, s, r) {
    const l = await this.mutationInternal(n, s, r);
    if (!l.success)
      throw l.errorData !== void 0
        ? Tf(l, new wf(Ya("mutation", n, l)))
        : new Error(Ya("mutation", n, l));
    return l.value;
  }
  async mutationInternal(n, s, r, l) {
    const { mutationPromise: c } = this.enqueueMutation(n, s, r, l);
    return c;
  }
  enqueueMutation(n, s, r, l) {
    const c = qn(s);
    this.tryReportLongDisconnect();
    const d = this.nextRequestId;
    if ((this._nextRequestId++, r !== void 0)) {
      const y = r.optimisticUpdate;
      if (y !== void 0) {
        const v = (R) => {
            y(R, c) instanceof Promise &&
              this.logger.warn(
                "Optimistic update handler returned a Promise. Optimistic updates should be synchronous.",
              );
          },
          w = this.optimisticQueryResults.applyOptimisticUpdate(v, d).map((R) => {
            const T = this.localQueryResultByToken(R);
            return {
              token: R,
              modification: {
                kind: "Updated",
                result: T === void 0 ? void 0 : { success: !0, value: T, logLines: [] },
              },
            };
          });
        this.handleTransition({
          queries: w,
          reflectedMutations: [],
          timestamp: this.remoteQuerySet.timestamp(),
        });
      }
    }
    const g = { type: "Mutation", requestId: d, udfPath: n, componentPath: l, args: [pn(c)] },
      h = this.webSocketManager.sendMessage(g),
      m = this.requestManager.request(g, h);
    return { requestId: d, mutationPromise: m };
  }
  async action(n, s) {
    const r = await this.actionInternal(n, s);
    if (!r.success)
      throw r.errorData !== void 0
        ? Tf(r, new wf(Ya("action", n, r)))
        : new Error(Ya("action", n, r));
    return r.value;
  }
  async actionInternal(n, s, r) {
    const l = qn(s),
      c = this.nextRequestId;
    (this._nextRequestId++, this.tryReportLongDisconnect());
    const d = { type: "Action", requestId: c, udfPath: n, componentPath: r, args: [pn(l)] },
      g = this.webSocketManager.sendMessage(d);
    return this.requestManager.request(d, g);
  }
  async close() {
    return (this.authenticationManager.stop(), this.webSocketManager.terminate());
  }
  get url() {
    return this.address;
  }
  get nextRequestId() {
    return this._nextRequestId;
  }
  get sessionId() {
    return this._sessionId;
  }
  reportMarks() {
    if (this.debug) {
      const n = Zw(this.sessionId);
      this.webSocketManager.sendMessage({ type: "Event", eventType: "ClientConnect", event: n });
    }
  }
  tryReportLongDisconnect() {
    if (!this.debug) return;
    const n = this.connectionState().timeOfOldestInflightRequest;
    if (n === null || Date.now() - n.getTime() <= 60 * 1e3) return;
    const s = `${this.address}/api/debug_event`;
    fetch(s, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Convex-Client": `npm-${xp}` },
      body: JSON.stringify({ event: "LongWebsocketDisconnect" }),
    })
      .then((r) => {
        r.ok || this.logger.warn("Analytics request failed with response:", r.body);
      })
      .catch((r) => {
        this.logger.warn("Analytics response failed with error:", r);
      });
  }
}
function af(a) {
  if (
    typeof a != "object" ||
    a === null ||
    !Array.isArray(a.page) ||
    typeof a.isDone != "boolean" ||
    typeof a.continueCursor != "string"
  )
    throw new Error(`Not a valid paginated query result: ${a == null ? void 0 : a.toString()}`);
  return a;
}
var nT = Object.defineProperty,
  iT = (a, n, s) =>
    n in a ? nT(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  Up = (a, n, s) => iT(a, typeof n != "symbol" ? n + "" : n, s);
class aT {
  constructor(n, s) {
    ((this.client = n),
      (this.onTransition = s),
      Up(this, "paginatedQuerySet", new Map()),
      Up(this, "lastTransitionTs"),
      (this.lastTransitionTs = Rt.fromNumber(0)),
      this.client.addOnTransitionHandler((r) => this.onBaseTransition(r)));
  }
  subscribe(n, s, r) {
    const l = Fi(n),
      c = Op(l, s, r),
      d = () => this.removePaginatedQuerySubscriber(c),
      g = this.paginatedQuerySet.get(c);
    return g
      ? ((g.numSubscribers += 1), { paginatedQueryToken: c, unsubscribe: d })
      : (this.paginatedQuerySet.set(c, {
          token: c,
          canonicalizedUdfPath: l,
          args: s,
          numSubscribers: 1,
          options: { initialNumItems: r.initialNumItems },
          nextPageKey: 0,
          pageKeys: [],
          pageKeyToQuery: new Map(),
          ongoingSplits: new Map(),
          skip: !1,
          id: r.id,
        }),
        this.addPageToPaginatedQuery(c, null, r.initialNumItems),
        { paginatedQueryToken: c, unsubscribe: d });
  }
  localQueryResult(n, s, r) {
    const l = Fi(n),
      c = Op(l, s, r);
    return this.localQueryResultByToken(c);
  }
  localQueryResultByToken(n) {
    const s = this.paginatedQuerySet.get(n);
    if (!s) return;
    const r = this.activePageQueryTokens(s);
    if (r.length === 0)
      return {
        results: [],
        status: "LoadingFirstPage",
        loadMore: (h) => this.loadMoreOfPaginatedQuery(n, h),
      };
    let l = [],
      c = !1,
      d = !1;
    for (const h of r) {
      const m = this.client.localQueryResultByToken(h);
      if (m === void 0) {
        ((c = !0), (d = !1));
        continue;
      }
      const y = af(m);
      ((l = l.concat(y.page)), (d = !!y.isDone));
    }
    let g;
    return (
      c
        ? (g = l.length === 0 ? "LoadingFirstPage" : "LoadingMore")
        : d
          ? (g = "Exhausted")
          : (g = "CanLoadMore"),
      { results: l, status: g, loadMore: (h) => this.loadMoreOfPaginatedQuery(n, h) }
    );
  }
  onBaseTransition(n) {
    const s = n.queries.map((d) => d.token),
      r = this.queriesContainingTokens(s);
    let l = [];
    r.length > 0 &&
      (this.processPaginatedQuerySplits(r, (d) => this.client.localQueryResultByToken(d)),
      (l = r.map((d) => ({
        token: d,
        modification: { kind: "Updated", result: this.localQueryResultByToken(d) },
      }))));
    const c = { ...n, paginatedQueries: l };
    this.onTransition(c);
  }
  loadMoreOfPaginatedQuery(n, s) {
    this.mustGetPaginatedQuery(n);
    const r = this.queryTokenForLastPageOfPaginatedQuery(n),
      l = this.client.localQueryResultByToken(r);
    if (!l) return !1;
    const c = af(l);
    if (c.isDone) return !1;
    this.addPageToPaginatedQuery(n, c.continueCursor, s);
    const d = {
      timestamp: this.lastTransitionTs,
      reflectedMutations: [],
      queries: [],
      paginatedQueries: [
        { token: n, modification: { kind: "Updated", result: this.localQueryResultByToken(n) } },
      ],
    };
    return (this.onTransition(d), !0);
  }
  queriesContainingTokens(n) {
    if (n.length === 0) return [];
    const s = [],
      r = new Set(n);
    for (const [l, c] of this.paginatedQuerySet)
      for (const d of this.allQueryTokens(c))
        if (r.has(d)) {
          s.push(l);
          break;
        }
    return s;
  }
  processPaginatedQuerySplits(n, s) {
    for (const r of n) {
      const l = this.mustGetPaginatedQuery(r),
        { ongoingSplits: c, pageKeyToQuery: d, pageKeys: g } = l;
      for (const [h, [m, y]] of c)
        s(d.get(m).queryToken) !== void 0 &&
          s(d.get(y).queryToken) !== void 0 &&
          this.completePaginatedQuerySplit(l, h, m, y);
      for (const h of g) {
        if (c.has(h)) continue;
        const m = d.get(h).queryToken,
          y = s(m);
        if (!y) continue;
        const v = af(y);
        v.splitCursor &&
          (v.pageStatus === "SplitRecommended" ||
            v.pageStatus === "SplitRequired" ||
            v.page.length > l.options.initialNumItems * 2) &&
          this.splitPaginatedQueryPage(l, h, v.splitCursor, v.continueCursor);
      }
    }
  }
  splitPaginatedQueryPage(n, s, r, l) {
    const c = n.nextPageKey++,
      d = n.nextPageKey++,
      g = { cursor: l, numItems: n.options.initialNumItems, id: n.id },
      h = this.client.subscribe(n.canonicalizedUdfPath, {
        ...n.args,
        paginationOpts: { ...g, cursor: null, endCursor: r },
      });
    n.pageKeyToQuery.set(c, h);
    const m = this.client.subscribe(n.canonicalizedUdfPath, {
      ...n.args,
      paginationOpts: { ...g, cursor: r, endCursor: l },
    });
    (n.pageKeyToQuery.set(d, m), n.ongoingSplits.set(s, [c, d]));
  }
  addPageToPaginatedQuery(n, s, r) {
    const l = this.mustGetPaginatedQuery(n),
      c = l.nextPageKey++,
      d = { cursor: s, numItems: r, id: l.id },
      g = { ...l.args, paginationOpts: d },
      h = this.client.subscribe(l.canonicalizedUdfPath, g);
    return (l.pageKeys.push(c), l.pageKeyToQuery.set(c, h), h);
  }
  removePaginatedQuerySubscriber(n) {
    const s = this.paginatedQuerySet.get(n);
    if (s && ((s.numSubscribers -= 1), !(s.numSubscribers > 0))) {
      for (const r of s.pageKeyToQuery.values()) r.unsubscribe();
      this.paginatedQuerySet.delete(n);
    }
  }
  completePaginatedQuerySplit(n, s, r, l) {
    const c = n.pageKeyToQuery.get(s);
    n.pageKeyToQuery.delete(s);
    const d = n.pageKeys.indexOf(s);
    (n.pageKeys.splice(d, 1, r, l), n.ongoingSplits.delete(s), c.unsubscribe());
  }
  activePageQueryTokens(n) {
    return n.pageKeys.map((s) => n.pageKeyToQuery.get(s).queryToken);
  }
  allQueryTokens(n) {
    return Array.from(n.pageKeyToQuery.values()).map((s) => s.queryToken);
  }
  queryTokenForLastPageOfPaginatedQuery(n) {
    const s = this.mustGetPaginatedQuery(n),
      r = s.pageKeys[s.pageKeys.length - 1];
    if (r === void 0) throw new Error(`No pages for paginated query ${n}`);
    return s.pageKeyToQuery.get(r).queryToken;
  }
  mustGetPaginatedQuery(n) {
    const s = this.paginatedQuerySet.get(n);
    if (!s) throw new Error("paginated query no longer exists for token " + n);
    return s;
  }
}
function sT({ getCurrentValue: a, subscribe: n }) {
  const [s, r] = W.useState(() => ({ getCurrentValue: a, subscribe: n, value: a() }));
  let l = s.value;
  return (
    (s.getCurrentValue !== a || s.subscribe !== n) &&
      ((l = a()), r({ getCurrentValue: a, subscribe: n, value: l })),
    W.useEffect(() => {
      let c = !1;
      const d = () => {
          c ||
            r((h) => {
              if (h.getCurrentValue !== a || h.subscribe !== n) return h;
              const m = a();
              return h.value === m ? h : { ...h, value: m };
            });
        },
        g = n(d);
      return (
        d(),
        () => {
          ((c = !0), g());
        }
      );
    }, [a, n]),
    l
  );
}
var oT = Object.defineProperty,
  rT = (a, n, s) =>
    n in a ? oT(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  Bn = (a, n, s) => rT(a, typeof n != "symbol" ? n + "" : n, s);
const lT = 5e3;
if (typeof Dt > "u") throw new Error("Required dependency 'react' not found");
function tv(a, n, s) {
  function r(l) {
    return (gT(l), n.mutation(a, l, { optimisticUpdate: s }));
  }
  return (
    (r.withOptimisticUpdate = function (c) {
      if (s !== void 0)
        throw new Error(`Already specified optimistic update for mutation ${dt(a)}`);
      return tv(a, n, c);
    }),
    r
  );
}
function uT(a, n) {
  return function (s) {
    return n.action(a, s);
  };
}
class cT {
  constructor(n, s) {
    if (
      (Bn(this, "address"),
      Bn(this, "cachedSync"),
      Bn(this, "cachedPaginatedQueryClient"),
      Bn(this, "listeners"),
      Bn(this, "options"),
      Bn(this, "closed", !1),
      Bn(this, "_logger"),
      Bn(this, "adminAuth"),
      Bn(this, "fakeUserIdentity"),
      n === void 0)
    )
      throw new Error(
        "No address provided to ConvexReactClient.\nIf trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/\nIf running locally, make sure to run `convex dev` and ensure the .env.local file is populated.",
      );
    if (typeof n != "string")
      throw new Error(
        `ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof n} instead.`,
      );
    if (!n.includes("://")) throw new Error("Provided address was not an absolute URL.");
    ((this.address = n),
      (this.listeners = new Map()),
      (this._logger =
        (s == null ? void 0 : s.logger) === !1
          ? Xy({ verbose: (s == null ? void 0 : s.verbose) ?? !1 })
          : (s == null ? void 0 : s.logger) !== !0 && s != null && s.logger
            ? s.logger
            : Ky({ verbose: (s == null ? void 0 : s.verbose) ?? !1 })),
      (this.options = { ...s, logger: this._logger }));
  }
  get url() {
    return this.address;
  }
  get sync() {
    if (this.closed) throw new Error("ConvexReactClient has already been closed.");
    return this.cachedSync
      ? this.cachedSync
      : ((this.cachedSync = new tT(this.address, () => {}, this.options)),
        this.adminAuth && this.cachedSync.setAdminAuth(this.adminAuth, this.fakeUserIdentity),
        (this.cachedPaginatedQueryClient = new aT(this.cachedSync, (n) =>
          this.handleTransition(n),
        )),
        this.cachedSync);
  }
  get paginatedQueryClient() {
    if ((this.sync, this.cachedPaginatedQueryClient)) return this.cachedPaginatedQueryClient;
    throw new Error("Should already be instantiated");
  }
  setAuth(n, s) {
    if (typeof n == "string")
      throw new Error(
        "Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication.",
      );
    this.sync.setAuth(n, s ?? (() => {}));
  }
  clearAuth() {
    this.sync.clearAuth();
  }
  setAdminAuth(n, s) {
    if (((this.adminAuth = n), (this.fakeUserIdentity = s), this.closed))
      throw new Error("ConvexReactClient has already been closed.");
    this.cachedSync && this.sync.setAdminAuth(n, s);
  }
  watchQuery(n, ...s) {
    const [r, l] = s,
      c = dt(n);
    return {
      onUpdate: (d) => {
        const { queryToken: g, unsubscribe: h } = this.sync.subscribe(c, r, l),
          m = this.listeners.get(g);
        return (
          m !== void 0 ? m.add(d) : this.listeners.set(g, new Set([d])),
          () => {
            if (this.closed) return;
            const y = this.listeners.get(g);
            (y.delete(d), y.size === 0 && this.listeners.delete(g), h());
          }
        );
      },
      localQueryResult: () => {
        if (this.cachedSync) return this.cachedSync.localQueryResult(c, r);
      },
      localQueryLogs: () => {
        if (this.cachedSync) return this.cachedSync.localQueryLogs(c, r);
      },
      journal: () => {
        if (this.cachedSync) return this.cachedSync.queryJournal(c, r);
      },
    };
  }
  prewarmQuery(n) {
    const s = n.extendSubscriptionFor ?? lT,
      l = this.watchQuery(n.query, n.args || {}).onUpdate(() => {});
    setTimeout(l, s);
  }
  watchPaginatedQuery(n, s, r) {
    const l = dt(n);
    return {
      onUpdate: (c) => {
        const { paginatedQueryToken: d, unsubscribe: g } = this.paginatedQueryClient.subscribe(
            l,
            s || {},
            r,
          ),
          h = this.listeners.get(d);
        return (
          h !== void 0 ? h.add(c) : this.listeners.set(d, new Set([c])),
          () => {
            if (this.closed) return;
            const m = this.listeners.get(d);
            (m.delete(c), m.size === 0 && this.listeners.delete(d), g());
          }
        );
      },
      localQueryResult: () => this.paginatedQueryClient.localQueryResult(l, s, r),
    };
  }
  mutation(n, ...s) {
    const [r, l] = s,
      c = dt(n);
    return this.sync.mutation(c, r, l);
  }
  action(n, ...s) {
    const r = dt(n);
    return this.sync.action(r, ...s);
  }
  query(n, ...s) {
    const r = this.watchQuery(n, ...s),
      l = r.localQueryResult();
    return l !== void 0
      ? Promise.resolve(l)
      : new Promise((c, d) => {
          const g = r.onUpdate(() => {
            g();
            try {
              c(r.localQueryResult());
            } catch (h) {
              d(h);
            }
          });
        });
  }
  connectionState() {
    return this.sync.connectionState();
  }
  subscribeToConnectionState(n) {
    return this.sync.subscribeToConnectionState(n);
  }
  get logger() {
    return this._logger;
  }
  async close() {
    if (
      ((this.closed = !0),
      (this.listeners = new Map()),
      this.cachedPaginatedQueryClient && (this.cachedPaginatedQueryClient = void 0),
      this.cachedSync)
    ) {
      const n = this.cachedSync;
      ((this.cachedSync = void 0), await n.close());
    }
  }
  handleTransition(n) {
    const s = n.queries.map((l) => l.token),
      r = n.paginatedQueries.map((l) => l.token);
    this.transition([...s, ...r]);
  }
  transition(n) {
    for (const s of n) {
      const r = this.listeners.get(s);
      if (r) for (const l of r) l();
    }
  }
}
const pl = Dt.createContext(void 0);
function fT() {
  return W.useContext(pl);
}
const dT = ({ client: a, children: n }) => Dt.createElement(pl.Provider, { value: a }, n);
function hT(a, ...n) {
  const s = n[0] === "skip",
    r = n[0] === "skip" ? {} : qn(n[0]),
    l = typeof a == "string" ? jf(a) : a,
    c = dt(l),
    d = W.useMemo(() => (s ? {} : { query: { query: l, args: r } }), [JSON.stringify(pn(r)), c, s]),
    h = vT(d).query;
  if (h instanceof Error) throw h;
  return h;
}
function px(a) {
  const n = typeof a == "string" ? jf(a) : a,
    s = W.useContext(pl);
  if (s === void 0)
    throw new Error(
      "Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app",
    );
  return W.useMemo(() => tv(n, s), [s, dt(n)]);
}
function yx(a) {
  const n = W.useContext(pl),
    s = typeof a == "string" ? jf(a) : a;
  if (n === void 0)
    throw new Error(
      "Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app",
    );
  return W.useMemo(() => uT(s, n), [n, dt(s)]);
}
function gT(a) {
  if (
    typeof a == "object" &&
    a !== null &&
    "bubbles" in a &&
    "persist" in a &&
    "isDefaultPrevented" in a
  )
    throw new Error(
      "Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler.",
    );
}
var mT = Object.defineProperty,
  pT = (a, n, s) =>
    n in a ? mT(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  sf = (a, n, s) => pT(a, typeof n != "symbol" ? n + "" : n, s);
class yT {
  constructor(n) {
    (sf(this, "createWatch"),
      sf(this, "queries"),
      sf(this, "listeners"),
      (this.createWatch = n),
      (this.queries = {}),
      (this.listeners = new Set()));
  }
  setQueries(n) {
    for (const s of Object.keys(n)) {
      const { query: r, args: l, paginationOptions: c } = n[s];
      if ((dt(r), this.queries[s] === void 0))
        this.addQuery(s, r, l, c ? { paginationOptions: c } : {});
      else {
        const d = this.queries[s];
        (dt(r) !== dt(d.query) ||
          JSON.stringify(pn(l)) !== JSON.stringify(pn(d.args)) ||
          JSON.stringify(c) !== JSON.stringify(d.paginationOptions)) &&
          (this.removeQuery(s), this.addQuery(s, r, l, c ? { paginationOptions: c } : {}));
      }
    }
    for (const s of Object.keys(this.queries)) n[s] === void 0 && this.removeQuery(s);
  }
  subscribe(n) {
    return (
      this.listeners.add(n),
      () => {
        this.listeners.delete(n);
      }
    );
  }
  getLocalResults(n) {
    const s = {};
    for (const r of Object.keys(n)) {
      const { query: l, args: c } = n[r],
        d = n[r].paginationOptions;
      dt(l);
      const g = this.createWatch(l, c, d ? { paginationOptions: d } : {});
      let h;
      try {
        h = g.localQueryResult();
      } catch (m) {
        if (m instanceof Error) h = m;
        else throw m;
      }
      s[r] = h;
    }
    return s;
  }
  setCreateWatch(n) {
    this.createWatch = n;
    for (const s of Object.keys(this.queries)) {
      const { query: r, args: l, watch: c, paginationOptions: d } = this.queries[s],
        g = "journal" in c ? c.journal() : void 0;
      (this.removeQuery(s),
        this.addQuery(s, r, l, {
          ...(g ? { journal: g } : []),
          ...(d ? { paginationOptions: d } : {}),
        }));
    }
  }
  destroy() {
    for (const n of Object.keys(this.queries)) this.removeQuery(n);
    this.listeners = new Set();
  }
  addQuery(n, s, r, { paginationOptions: l, journal: c }) {
    if (this.queries[n] !== void 0)
      throw new Error(`Tried to add a new query with identifier ${n} when it already exists.`);
    const d = this.createWatch(s, r, {
        ...(c ? { journal: c } : []),
        ...(l ? { paginationOptions: l } : {}),
      }),
      g = d.onUpdate(() => this.notifyListeners());
    this.queries[n] = {
      query: s,
      args: r,
      watch: d,
      unsubscribe: g,
      ...(l ? { paginationOptions: l } : {}),
    };
  }
  removeQuery(n) {
    const s = this.queries[n];
    if (s === void 0) throw new Error(`No query found with identifier ${n}.`);
    (s.unsubscribe(), delete this.queries[n]);
  }
  notifyListeners() {
    for (const n of this.listeners) n();
  }
}
function vT(a) {
  const n = fT();
  if (n === void 0)
    throw new Error(
      "Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app",
    );
  const s = W.useMemo(
    () =>
      (r, l, { journal: c, paginationOptions: d }) =>
        d ? n.watchPaginatedQuery(r, l, d) : n.watchQuery(r, l, c ? { journal: c } : {}),
    [n],
  );
  return ST(a, s);
}
function ST(a, n) {
  const [s] = W.useState(() => new yT(n));
  (s.createWatch !== n && s.setCreateWatch(n), W.useEffect(() => () => s.destroy(), [s]));
  const r = W.useMemo(
    () => ({
      getCurrentValue: () => s.getLocalResults(a),
      subscribe: (l) => (s.setQueries(a), s.subscribe(l)),
    }),
    [s, a],
  );
  return sT(r);
}
const nv = W.createContext(void 0);
function bT() {
  const a = W.useContext(nv);
  if (a === void 0)
    throw new Error(
      "Could not find `ConvexProviderWithAuth` (or `ConvexProviderWithClerk` or `ConvexProviderWithAuth0`) as an ancestor component. This component may be missing, or you might have two instances of the `convex/react` module loaded in your project.",
    );
  return a;
}
function RT({ children: a, client: n, useAuth: s }) {
  const { isLoading: r, isAuthenticated: l, fetchAccessToken: c } = s(),
    [d, g] = W.useState(null);
  return (
    r && d !== null && g(null),
    !r && !l && d !== !1 && g(!1),
    Dt.createElement(
      nv.Provider,
      { value: { isLoading: d === null, isAuthenticated: l && (d ?? !1) } },
      Dt.createElement(wT, {
        authProviderAuthenticated: l,
        fetchAccessToken: c,
        authProviderLoading: r,
        client: n,
        setIsConvexAuthenticated: g,
      }),
      Dt.createElement(dT, { client: n }, a),
      Dt.createElement(TT, {
        authProviderAuthenticated: l,
        fetchAccessToken: c,
        authProviderLoading: r,
        client: n,
        setIsConvexAuthenticated: g,
      }),
    )
  );
}
function wT({
  authProviderAuthenticated: a,
  fetchAccessToken: n,
  authProviderLoading: s,
  client: r,
  setIsConvexAuthenticated: l,
}) {
  return (
    W.useEffect(() => {
      let c = !0;
      if (a)
        return (
          r.setAuth(n, (d) => {
            c && l(() => d);
          }),
          () => {
            ((c = !1), l((d) => (d ? !1 : null)));
          }
        );
    }, [a, n, s, r, l]),
    null
  );
}
function TT({
  authProviderAuthenticated: a,
  fetchAccessToken: n,
  authProviderLoading: s,
  client: r,
  setIsConvexAuthenticated: l,
}) {
  return (
    W.useEffect(() => {
      if (a)
        return () => {
          (r.clearAuth(), l(() => null));
        };
    }, [a, n, s, r, l]),
    null
  );
}
function _T({ children: a, client: n, authClient: s, initialToken: r }) {
  const l = ET(s, r);
  return (
    W.useEffect(() => {
      (async () => {
        var g, h;
        if (typeof window > "u" || !((g = window.location) != null && g.href)) return;
        const c = new URL(window.location.href),
          d = c.searchParams.get("ott");
        if (d) {
          const m = s;
          (c.searchParams.delete("ott"), window.history.replaceState({}, "", c));
          const v =
            (h = (await m.crossDomain.oneTimeToken.verify({ token: d })).data) == null
              ? void 0
              : h.session;
          v &&
            (await s.getSession({
              fetchOptions: { headers: { Authorization: `Bearer ${v.token}` } },
            }),
            m.updateSession());
        }
      })();
    }, [s]),
    ae.jsx(RT, { client: n, useAuth: l, children: ae.jsx(ae.Fragment, { children: a }) })
  );
}
let of = !1;
function ET(a, n) {
  const [s, r] = W.useState(of ? null : (n ?? null)),
    l = W.useRef(null);
  return (
    W.useEffect(() => {
      of || (of = !0);
    }, []),
    W.useMemo(
      () =>
        function () {
          var y;
          const { data: d, isPending: g } = a.useSession(),
            h = (y = d == null ? void 0 : d.session) == null ? void 0 : y.id;
          W.useEffect(() => {
            !d && !g && s && r(null);
          }, [d, g]);
          const m = W.useCallback(
            async ({ forceRefreshToken: v = !1 } = {}) =>
              s && !v
                ? s
                : ((!v && l.current) ||
                    (l.current = a.convex
                      .token({ fetchOptions: { throw: !1 } })
                      .then(({ data: S }) => {
                        const w = (S == null ? void 0 : S.token) || null;
                        return (r(w), w);
                      })
                      .catch(() => (r(null), null))
                      .finally(() => {
                        l.current = null;
                      })),
                  l.current),
            [h],
          );
          return W.useMemo(
            () => ({
              isLoading: g && !s,
              isAuthenticated: !!(d != null && d.session) || s !== null,
              fetchAccessToken: m,
            }),
            [g, h, m, s],
          );
        },
      [a],
    )
  );
}
var AT = {},
  Bp = {};
const Zr = Object.create(null),
  to = (a) => {
    var n;
    return (
      AT ||
      ((n = globalThis.Deno) == null ? void 0 : n.env.toObject()) ||
      globalThis.__env__ ||
      (a ? Zr : globalThis)
    );
  },
  Yt = new Proxy(Zr, {
    get(a, n) {
      return to()[n] ?? Zr[n];
    },
    has(a, n) {
      return n in to() || n in Zr;
    },
    set(a, n, s) {
      const r = to(!0);
      return ((r[n] = s), !0);
    },
    deleteProperty(a, n) {
      if (!n) return !1;
      const s = to(!0);
      return (delete s[n], !0);
    },
    ownKeys() {
      const a = to(!0);
      return Object.keys(a);
    },
  });
function Ze(a, n) {
  return typeof process < "u" && Bp
    ? (Bp[a] ?? n)
    : typeof Deno < "u"
      ? (Deno.env.get(a) ?? n)
      : typeof Bun < "u"
        ? (Bun.env[a] ?? n)
        : n;
}
const no = 1,
  nt = 4,
  hn = 8,
  Lt = 24,
  qp = {
    eterm: nt,
    cons25: nt,
    console: nt,
    cygwin: nt,
    dtterm: nt,
    gnome: nt,
    hurd: nt,
    jfbterm: nt,
    konsole: nt,
    kterm: nt,
    mlterm: nt,
    mosh: Lt,
    putty: nt,
    st: nt,
    "rxvt-unicode-24bit": Lt,
    terminator: Lt,
    "xterm-kitty": Lt,
  },
  xT = new Map(
    Object.entries({
      APPVEYOR: hn,
      BUILDKITE: hn,
      CIRCLECI: Lt,
      DRONE: hn,
      GITEA_ACTIONS: Lt,
      GITHUB_ACTIONS: Lt,
      GITLAB_CI: hn,
      TRAVIS: hn,
    }),
  ),
  CT = [
    /ansi/,
    /color/,
    /linux/,
    /direct/,
    /^con[0-9]*x[0-9]/,
    /^rxvt/,
    /^screen/,
    /^xterm/,
    /^vt100/,
    /^vt220/,
  ];
function OT() {
  if (Ze("FORCE_COLOR") !== void 0)
    switch (Ze("FORCE_COLOR")) {
      case "":
      case "1":
      case "true":
        return nt;
      case "2":
        return hn;
      case "3":
        return Lt;
      default:
        return no;
    }
  if (
    (Ze("NODE_DISABLE_COLORS") !== void 0 && Ze("NODE_DISABLE_COLORS") !== "") ||
    (Ze("NO_COLOR") !== void 0 && Ze("NO_COLOR") !== "") ||
    Ze("TERM") === "dumb"
  )
    return no;
  if (Ze("TMUX")) return Lt;
  if ("TF_BUILD" in Yt && "AGENT_NAME" in Yt) return nt;
  if ("CI" in Yt) {
    for (const { 0: a, 1: n } of xT) if (a in Yt) return n;
    return Ze("CI_NAME") === "codeship" ? hn : no;
  }
  if ("TEAMCITY_VERSION" in Yt)
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.exec(Ze("TEAMCITY_VERSION")) !== null ? nt : no;
  switch (Ze("TERM_PROGRAM")) {
    case "iTerm.app":
      return !Ze("TERM_PROGRAM_VERSION") || /^[0-2]\./.exec(Ze("TERM_PROGRAM_VERSION")) !== null
        ? hn
        : Lt;
    case "HyperTerm":
    case "MacTerm":
      return Lt;
    case "Apple_Terminal":
      return hn;
  }
  if (Ze("COLORTERM") === "truecolor" || Ze("COLORTERM") === "24bit") return Lt;
  if (Ze("TERM")) {
    if (/truecolor/.exec(Ze("TERM")) !== null) return Lt;
    if (/^xterm-256/.exec(Ze("TERM")) !== null) return hn;
    const a = Ze("TERM").toLowerCase();
    if (qp[a]) return qp[a];
    if (CT.some((n) => n.exec(a) !== null)) return nt;
  }
  return Ze("COLORTERM") ? nt : no;
}
const gn = {
    reset: "\x1B[0m",
    bright: "\x1B[1m",
    dim: "\x1B[2m",
    fg: {
      red: "\x1B[31m",
      green: "\x1B[32m",
      yellow: "\x1B[33m",
      blue: "\x1B[34m",
      magenta: "\x1B[35m",
    },
  },
  _f = ["debug", "info", "success", "warn", "error"];
function MT(a, n) {
  return _f.indexOf(n) >= _f.indexOf(a);
}
const kT = {
    info: gn.fg.blue,
    success: gn.fg.green,
    warn: gn.fg.yellow,
    error: gn.fg.red,
    debug: gn.fg.magenta,
  },
  LT = (a, n, s) => {
    const r = new Date().toISOString();
    return s
      ? `${gn.dim}${r}${gn.reset} ${kT[a]}${a.toUpperCase()}${gn.reset} ${gn.bright}[Better Auth]:${gn.reset} ${n}`
      : `${r} ${a.toUpperCase()} [Better Auth]: ${n}`;
  },
  DT = (a) => {
    const n = "warn",
      s = OT() !== 1,
      r = (l, c, d = []) => {
        if (!MT(n, l)) return;
        const g = LT(l, c, s);
        {
          l === "error"
            ? console.error(g, ...d)
            : l === "warn"
              ? console.warn(g, ...d)
              : console.log(g, ...d);
          return;
        }
      };
    return {
      ...Object.fromEntries(_f.map((l) => [l, (...[c, ...d]) => r(l, c, d)])),
      get level() {
        return n;
      },
    };
  };
DT();
function NT(a) {
  return Object.fromEntries(
    Object.entries(a).map(([n, s]) => [n, { code: n, message: s, toString: () => n }]),
  );
}
NT({
  USER_NOT_FOUND: "User not found",
  FAILED_TO_CREATE_USER: "Failed to create user",
  FAILED_TO_CREATE_SESSION: "Failed to create session",
  FAILED_TO_UPDATE_USER: "Failed to update user",
  FAILED_TO_GET_SESSION: "Failed to get session",
  INVALID_PASSWORD: "Invalid password",
  INVALID_EMAIL: "Invalid email",
  INVALID_EMAIL_OR_PASSWORD: "Invalid email or password",
  INVALID_USER: "Invalid user",
  SOCIAL_ACCOUNT_ALREADY_LINKED: "Social account already linked",
  PROVIDER_NOT_FOUND: "Provider not found",
  INVALID_TOKEN: "Invalid token",
  TOKEN_EXPIRED: "Token expired",
  ID_TOKEN_NOT_SUPPORTED: "id_token not supported",
  FAILED_TO_GET_USER_INFO: "Failed to get user info",
  USER_EMAIL_NOT_FOUND: "User email not found",
  EMAIL_NOT_VERIFIED: "Email not verified",
  PASSWORD_TOO_SHORT: "Password too short",
  PASSWORD_TOO_LONG: "Password too long",
  USER_ALREADY_EXISTS: "User already exists.",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "User already exists. Use another email.",
  EMAIL_CAN_NOT_BE_UPDATED: "Email can not be updated",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "Credential account not found",
  SESSION_EXPIRED: "Session expired. Re-authenticate to perform this action.",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "You can't unlink your last account",
  ACCOUNT_NOT_FOUND: "Account not found",
  USER_ALREADY_HAS_PASSWORD: "User already has a password. Provide that to delete the account.",
  CROSS_SITE_NAVIGATION_LOGIN_BLOCKED:
    "Cross-site navigation login blocked. This request appears to be a CSRF attack.",
  VERIFICATION_EMAIL_NOT_ENABLED: "Verification email isn't enabled",
  EMAIL_ALREADY_VERIFIED: "Email is already verified",
  EMAIL_MISMATCH: "Email mismatch",
  SESSION_NOT_FRESH: "Session is not fresh",
  LINKED_ACCOUNT_ALREADY_EXISTS: "Linked account already exists",
  INVALID_ORIGIN: "Invalid origin",
  INVALID_CALLBACK_URL: "Invalid callbackURL",
  INVALID_REDIRECT_URL: "Invalid redirectURL",
  INVALID_ERROR_CALLBACK_URL: "Invalid errorCallbackURL",
  INVALID_NEW_USER_CALLBACK_URL: "Invalid newUserCallbackURL",
  MISSING_OR_NULL_ORIGIN: "Missing or null Origin",
  CALLBACK_URL_REQUIRED: "callbackURL is required",
  FAILED_TO_CREATE_VERIFICATION: "Unable to create verification",
  FIELD_NOT_ALLOWED: "Field not allowed to be set",
  ASYNC_VALIDATION_NOT_SUPPORTED: "Async validation is not supported",
  VALIDATION_ERROR: "Validation Error",
  MISSING_FIELD: "Field is required",
  METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED:
    "POST method requires deferSessionRefresh to be enabled in session config",
  BODY_MUST_BE_AN_OBJECT: "Body must be an object",
  PASSWORD_ALREADY_SET: "User already has a password set",
});
var Jr = class extends Error {
  constructor(a, n) {
    (super(a, n), (this.name = "BetterAuthError"), (this.message = a), (this.stack = ""));
  }
};
function PT(a) {
  try {
    return (new URL(a).pathname.replace(/\/+$/, "") || "/") !== "/";
  } catch {
    throw new Jr(`Invalid base URL: ${a}. Please provide a valid base URL.`);
  }
}
function UT(a) {
  try {
    const n = new URL(a);
    if (n.protocol !== "http:" && n.protocol !== "https:")
      throw new Jr(`Invalid base URL: ${a}. URL must include 'http://' or 'https://'`);
  } catch (n) {
    throw n instanceof Jr
      ? n
      : new Jr(`Invalid base URL: ${a}. Please provide a valid base URL.`, { cause: n });
  }
}
function rf(a, n = "/api/auth") {
  if ((UT(a), PT(a))) return a;
  const s = a.replace(/\/+$/, "");
  return !n || n === "/" ? s : ((n = n.startsWith("/") ? n : `/${n}`), `${s}${n}`);
}
function BT(a, n, s, r, l) {
  if (a) return rf(a, n);
  {
    const c =
      Yt.BETTER_AUTH_URL ||
      Yt.NEXT_PUBLIC_BETTER_AUTH_URL ||
      Yt.PUBLIC_BETTER_AUTH_URL ||
      Yt.NUXT_PUBLIC_BETTER_AUTH_URL ||
      Yt.NUXT_PUBLIC_AUTH_URL ||
      (Yt.BASE_URL !== "/" ? Yt.BASE_URL : void 0);
    if (c) return rf(c, n);
  }
  if (typeof window < "u" && window.location) return rf(window.location.origin, n);
}
const qT = {
    proto:
      /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    constructor:
      /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    protoShort: /"__proto__"\s*:/,
    constructorShort: /"constructor"\s*:/,
  },
  zT = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
  zp = {
    true: !0,
    false: !1,
    null: null,
    undefined: void 0,
    nan: NaN,
    infinity: Number.POSITIVE_INFINITY,
    "-infinity": Number.NEGATIVE_INFINITY,
  },
  IT =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function jT(a) {
  return a instanceof Date && !isNaN(a.getTime());
}
function HT(a) {
  const n = IT.exec(a);
  if (!n) return null;
  const [, s, r, l, c, d, g, h, m, y, v] = n,
    S = new Date(
      Date.UTC(
        parseInt(s, 10),
        parseInt(r, 10) - 1,
        parseInt(l, 10),
        parseInt(c, 10),
        parseInt(d, 10),
        parseInt(g, 10),
        h ? parseInt(h.padEnd(3, "0"), 10) : 0,
      ),
    );
  if (m) {
    const w = (parseInt(y, 10) * 60 + parseInt(v, 10)) * (m === "+" ? -1 : 1);
    S.setUTCMinutes(S.getUTCMinutes() + w);
  }
  return jT(S) ? S : null;
}
function VT(a, n = {}) {
  const { strict: s = !1, warnings: r = !1, reviver: l, parseDates: c = !0 } = n;
  if (typeof a != "string") return a;
  const d = a.trim();
  if (d.length > 0 && d[0] === '"' && d.endsWith('"') && !d.slice(1, -1).includes('"'))
    return d.slice(1, -1);
  const g = d.toLowerCase();
  if (g.length <= 9 && g in zp) return zp[g];
  if (!zT.test(d)) {
    if (s) throw new SyntaxError("[better-json] Invalid JSON");
    return a;
  }
  if (
    Object.entries(qT).some(([h, m]) => {
      const y = m.test(d);
      return (
        y &&
          r &&
          console.warn(
            `[better-json] Detected potential prototype pollution attempt using ${h} pattern`,
          ),
        y
      );
    }) &&
    s
  )
    throw new Error("[better-json] Potential prototype pollution attempt detected");
  try {
    return JSON.parse(d, (m, y) => {
      if (
        m === "__proto__" ||
        (m === "constructor" && y && typeof y == "object" && "prototype" in y)
      ) {
        r && console.warn(`[better-json] Dropping "${m}" key to prevent prototype pollution`);
        return;
      }
      if (c && typeof y == "string") {
        const v = HT(y);
        if (v) return v;
      }
      return l ? l(m, y) : y;
    });
  } catch (h) {
    if (s) throw h;
    return a;
  }
}
function QT(a, n = { strict: !0 }) {
  return VT(a, n);
}
const $T = {
  id: "redirect",
  name: "Redirect",
  hooks: {
    onSuccess(a) {
      var n, s;
      if (
        (n = a.data) != null &&
        n.url &&
        (s = a.data) != null &&
        s.redirect &&
        typeof window < "u" &&
        window.location &&
        window.location
      )
        try {
          window.location.href = a.data.url;
        } catch {}
    },
  },
};
let en = [],
  di = 0;
const Vr = 4,
  iv = (a) => {
    let n = [],
      s = {
        get() {
          return (s.lc || s.listen(() => {})(), s.value);
        },
        init: a,
        lc: 0,
        listen(r) {
          return (
            (s.lc = n.push(r)),
            () => {
              for (let c = di + Vr; c < en.length; ) en[c] === r ? en.splice(c, Vr) : (c += Vr);
              let l = n.indexOf(r);
              ~l && (n.splice(l, 1), --s.lc || s.off());
            }
          );
        },
        notify(r, l) {
          let c = !en.length;
          for (let d of n) en.push(d, s.value, r, l);
          if (c) {
            for (di = 0; di < en.length; di += Vr) en[di](en[di + 1], en[di + 2], en[di + 3]);
            en.length = 0;
          }
        },
        off() {},
        set(r) {
          let l = s.value;
          l !== r && ((s.value = r), s.notify(l));
        },
        subscribe(r) {
          let l = s.listen(r);
          return (r(s.value), l);
        },
        value: a,
      };
    return s;
  },
  FT = 5,
  Qr = 6,
  $r = 10;
let YT = (a, n, s, r) => (
    (a.events = a.events || {}),
    a.events[s + $r] ||
      (a.events[s + $r] = r((l) => {
        a.events[s].reduceRight((c, d) => (d(c), c), { shared: {}, ...l });
      })),
    (a.events[s] = a.events[s] || []),
    a.events[s].push(n),
    () => {
      let l = a.events[s],
        c = l.indexOf(n);
      (l.splice(c, 1),
        l.length || (delete a.events[s], a.events[s + $r](), delete a.events[s + $r]));
    }
  ),
  GT = 1e3,
  av = (a, n) =>
    YT(
      a,
      (r) => {
        let l = n(r);
        l && a.events[Qr].push(l);
      },
      FT,
      (r) => {
        let l = a.listen;
        a.listen = (...d) => (!a.lc && !a.active && ((a.active = !0), r()), l(...d));
        let c = a.off;
        return (
          (a.events[Qr] = []),
          (a.off = () => {
            (c(),
              setTimeout(() => {
                if (a.active && !a.lc) {
                  a.active = !1;
                  for (let d of a.events[Qr]) d();
                  a.events[Qr] = [];
                }
              }, GT));
          }),
          () => {
            ((a.listen = l), (a.off = c));
          }
        );
      },
    );
function KT(a, n, s) {
  let r = new Set(n).add(void 0);
  return a.listen((l, c, d) => {
    r.has(d) && s(l, c, d);
  });
}
const XT = () => typeof window > "u",
  WT = (a, n, s, r) => {
    const l = iv({
        data: null,
        error: null,
        isPending: !0,
        isRefetching: !1,
        refetch: (g) => c(g),
      }),
      c = async (g) =>
        new Promise((h) => {
          const m =
            typeof r == "function"
              ? r({ data: l.get().data, error: l.get().error, isPending: l.get().isPending })
              : r;
          s(n, {
            ...m,
            query: { ...(m == null ? void 0 : m.query), ...(g == null ? void 0 : g.query) },
            async onSuccess(y) {
              var v;
              (l.set({
                data: y.data,
                error: null,
                isPending: !1,
                isRefetching: !1,
                refetch: l.value.refetch,
              }),
                await ((v = m == null ? void 0 : m.onSuccess) == null ? void 0 : v.call(m, y)));
            },
            async onError(y) {
              var R, T;
              const { request: v } = y,
                S =
                  typeof v.retry == "number"
                    ? v.retry
                    : (R = v.retry) == null
                      ? void 0
                      : R.attempts,
                w = v.retryAttempt || 0;
              (S && w < S) ||
                (l.set({
                  error: y.error,
                  data: null,
                  isPending: !1,
                  isRefetching: !1,
                  refetch: l.value.refetch,
                }),
                await ((T = m == null ? void 0 : m.onError) == null ? void 0 : T.call(m, y)));
            },
            async onRequest(y) {
              var S;
              const v = l.get();
              (l.set({
                isPending: v.data === null,
                data: v.data,
                error: null,
                isRefetching: !0,
                refetch: l.value.refetch,
              }),
                await ((S = m == null ? void 0 : m.onRequest) == null ? void 0 : S.call(m, y)));
            },
          })
            .catch((y) => {
              l.set({
                error: y,
                data: null,
                isPending: !1,
                isRefetching: !1,
                refetch: l.value.refetch,
              });
            })
            .finally(() => {
              h(void 0);
            });
        });
    a = Array.isArray(a) ? a : [a];
    let d = !1;
    for (const g of a)
      g.subscribe(async () => {
        XT() ||
          (d
            ? await c()
            : av(l, () => {
                const h = setTimeout(async () => {
                  d || (await c(), (d = !0));
                }, 0);
                return () => {
                  (l.off(), g.off(), clearTimeout(h));
                };
              }));
      });
    return l;
  },
  lf = Symbol.for("better-auth:broadcast-channel"),
  ZT = () => Math.floor(Date.now() / 1e3);
var JT = class {
  constructor(a = "better-auth.message") {
    Ba(this, "listeners", new Set());
    Ba(this, "name");
    this.name = a;
  }
  subscribe(a) {
    return (
      this.listeners.add(a),
      () => {
        this.listeners.delete(a);
      }
    );
  }
  post(a) {
    if (!(typeof window > "u"))
      try {
        localStorage.setItem(this.name, JSON.stringify({ ...a, timestamp: ZT() }));
      } catch {}
  }
  setup() {
    if (typeof window > "u" || typeof window.addEventListener > "u") return () => {};
    const a = (n) => {
      if (n.key !== this.name) return;
      const s = JSON.parse(n.newValue ?? "{}");
      (s == null ? void 0 : s.event) !== "session" ||
        !(s != null && s.data) ||
        this.listeners.forEach((r) => r(s));
    };
    return (
      window.addEventListener("storage", a),
      () => {
        window.removeEventListener("storage", a);
      }
    );
  }
};
function uf(a = "better-auth.message") {
  return (globalThis[lf] || (globalThis[lf] = new JT(a)), globalThis[lf]);
}
const cf = Symbol.for("better-auth:focus-manager");
var e1 = class {
  constructor() {
    Ba(this, "listeners", new Set());
  }
  subscribe(a) {
    return (
      this.listeners.add(a),
      () => {
        this.listeners.delete(a);
      }
    );
  }
  setFocused(a) {
    this.listeners.forEach((n) => n(a));
  }
  setup() {
    if (typeof window > "u" || typeof document > "u" || typeof window.addEventListener > "u")
      return () => {};
    const a = () => {
      document.visibilityState === "visible" && this.setFocused(!0);
    };
    return (
      document.addEventListener("visibilitychange", a, !1),
      () => {
        document.removeEventListener("visibilitychange", a, !1);
      }
    );
  }
};
function Ip() {
  return (globalThis[cf] || (globalThis[cf] = new e1()), globalThis[cf]);
}
const ff = Symbol.for("better-auth:online-manager");
var t1 = class {
  constructor() {
    Ba(this, "listeners", new Set());
    Ba(this, "isOnline", typeof navigator < "u" ? navigator.onLine : !0);
  }
  subscribe(a) {
    return (
      this.listeners.add(a),
      () => {
        this.listeners.delete(a);
      }
    );
  }
  setOnline(a) {
    ((this.isOnline = a), this.listeners.forEach((n) => n(a)));
  }
  setup() {
    if (typeof window > "u" || typeof window.addEventListener > "u") return () => {};
    const a = () => this.setOnline(!0),
      n = () => this.setOnline(!1);
    return (
      window.addEventListener("online", a, !1),
      window.addEventListener("offline", n, !1),
      () => {
        (window.removeEventListener("online", a, !1), window.removeEventListener("offline", n, !1));
      }
    );
  }
};
function df() {
  return (globalThis[ff] || (globalThis[ff] = new t1()), globalThis[ff]);
}
const Ia = () => Math.floor(Date.now() / 1e3),
  n1 = 5;
function i1(a) {
  var K, Y, P;
  const { sessionAtom: n, sessionSignal: s, $fetch: r, options: l = {} } = a,
    c = ((K = l.sessionOptions) == null ? void 0 : K.refetchInterval) ?? 0,
    d = ((Y = l.sessionOptions) == null ? void 0 : Y.refetchOnWindowFocus) ?? !0,
    g = ((P = l.sessionOptions) == null ? void 0 : P.refetchWhenOffline) ?? !1,
    h = { lastSync: 0, lastSessionRequest: 0, cachedSession: void 0 },
    m = () => g || df().isOnline,
    y = (B) => {
      if (!m()) return;
      if ((B == null ? void 0 : B.event) === "storage") {
        ((h.lastSync = Ia()), s.set(!s.get()));
        return;
      }
      const G = n.get(),
        U = () => {
          ((h.lastSessionRequest = Ia()),
            r("/get-session")
              .then(async (I) => {
                let Q = I.data,
                  z = I.error || null;
                if (Q != null && Q.needsRefresh)
                  try {
                    const $ = await r("/get-session", { method: "POST" });
                    ((Q = $.data), (z = $.error || null));
                  } catch {}
                const X =
                  Q != null && Q.session && Q != null && Q.user
                    ? { session: Q.session, user: Q.user }
                    : null;
                (n.set({ ...G, data: X, error: z }), (h.lastSync = Ia()), s.set(!s.get()));
              })
              .catch(() => {}));
        };
      if ((B == null ? void 0 : B.event) === "poll") {
        U();
        return;
      }
      if ((B == null ? void 0 : B.event) === "visibilitychange") {
        if (Ia() - h.lastSessionRequest < n1) return;
        h.lastSessionRequest = Ia();
      }
      if ((B == null ? void 0 : B.event) === "visibilitychange") {
        U();
        return;
      }
      ((G == null ? void 0 : G.data) === null || (G == null ? void 0 : G.data) === void 0) &&
        ((h.lastSync = Ia()), s.set(!s.get()));
    },
    v = (B) => {
      uf().post({
        event: "session",
        data: { trigger: B },
        clientId: Math.random().toString(36).substring(7),
      });
    },
    S = () => {
      c &&
        c > 0 &&
        (h.pollInterval = setInterval(() => {
          var B;
          (B = n.get()) != null && B.data && y({ event: "poll" });
        }, c * 1e3));
    },
    w = () => {
      h.unsubscribeBroadcast = uf().subscribe(() => {
        y({ event: "storage" });
      });
    },
    R = () => {
      d &&
        (h.unsubscribeFocus = Ip().subscribe(() => {
          y({ event: "visibilitychange" });
        }));
    },
    T = () => {
      h.unsubscribeOnline = df().subscribe((B) => {
        B && y({ event: "visibilitychange" });
      });
    };
  return {
    init: () => {
      (S(), w(), R(), T(), uf().setup(), Ip().setup(), df().setup());
    },
    cleanup: () => {
      (h.pollInterval && (clearInterval(h.pollInterval), (h.pollInterval = void 0)),
        h.unsubscribeBroadcast && (h.unsubscribeBroadcast(), (h.unsubscribeBroadcast = void 0)),
        h.unsubscribeFocus && (h.unsubscribeFocus(), (h.unsubscribeFocus = void 0)),
        h.unsubscribeOnline && (h.unsubscribeOnline(), (h.unsubscribeOnline = void 0)),
        (h.lastSync = 0),
        (h.lastSessionRequest = 0),
        (h.cachedSession = void 0));
    },
    triggerRefetch: y,
    broadcastSessionUpdate: v,
  };
}
function a1(a, n) {
  const s = iv(!1),
    r = WT(s, "/get-session", a, { method: "GET" });
  let l = () => {};
  return (
    av(r, () => {
      const c = i1({ sessionAtom: r, sessionSignal: s, $fetch: a, options: n });
      return (
        c.init(),
        (l = c.broadcastSessionUpdate),
        () => {
          c.cleanup();
        }
      );
    }),
    { session: r, $sessionSignal: s, broadcastSessionUpdate: (c) => l(c) }
  );
}
function hf(a) {
  if (a === null || typeof a != "object") return !1;
  const n = Object.getPrototypeOf(a);
  return (n !== null && n !== Object.prototype && Object.getPrototypeOf(n) !== null) ||
    Symbol.iterator in a
    ? !1
    : Symbol.toStringTag in a
      ? Object.prototype.toString.call(a) === "[object Module]"
      : !0;
}
function Ef(a, n, s = ".", r) {
  if (!hf(n)) return Ef(a, {}, s, r);
  const l = Object.assign({}, n);
  for (const c in a) {
    if (c === "__proto__" || c === "constructor") continue;
    const d = a[c];
    d != null &&
      ((r && r(l, c, d, s)) ||
        (Array.isArray(d) && Array.isArray(l[c])
          ? (l[c] = [...d, ...l[c]])
          : hf(d) && hf(l[c])
            ? (l[c] = Ef(d, l[c], (s ? `${s}.` : "") + c.toString(), r))
            : (l[c] = d)));
  }
  return l;
}
function s1(a) {
  return (...n) => n.reduce((s, r) => Ef(s, r, "", a), {});
}
const o1 = s1();
var r1 = Object.defineProperty,
  l1 = Object.defineProperties,
  u1 = Object.getOwnPropertyDescriptors,
  jp = Object.getOwnPropertySymbols,
  c1 = Object.prototype.hasOwnProperty,
  f1 = Object.prototype.propertyIsEnumerable,
  Hp = (a, n, s) =>
    n in a ? r1(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (a[n] = s),
  tn = (a, n) => {
    for (var s in n || (n = {})) c1.call(n, s) && Hp(a, s, n[s]);
    if (jp) for (var s of jp(n)) f1.call(n, s) && Hp(a, s, n[s]);
    return a;
  },
  fn = (a, n) => l1(a, u1(n)),
  d1 = class extends Error {
    constructor(a, n, s) {
      (super(n || a.toString(), { cause: s }),
        (this.status = a),
        (this.statusText = n),
        (this.error = s),
        Error.captureStackTrace(this, this.constructor));
    }
  },
  h1 = async (a, n) => {
    var s, r, l, c, d, g;
    let h = n || {};
    const m = {
      onRequest: [n == null ? void 0 : n.onRequest],
      onResponse: [n == null ? void 0 : n.onResponse],
      onSuccess: [n == null ? void 0 : n.onSuccess],
      onError: [n == null ? void 0 : n.onError],
      onRetry: [n == null ? void 0 : n.onRetry],
    };
    if (!n || !(n != null && n.plugins)) return { url: a, options: h, hooks: m };
    for (const y of (n == null ? void 0 : n.plugins) || []) {
      if (y.init) {
        const v = await ((s = y.init) == null ? void 0 : s.call(y, a.toString(), n));
        ((h = v.options || h), (a = v.url));
      }
      (m.onRequest.push((r = y.hooks) == null ? void 0 : r.onRequest),
        m.onResponse.push((l = y.hooks) == null ? void 0 : l.onResponse),
        m.onSuccess.push((c = y.hooks) == null ? void 0 : c.onSuccess),
        m.onError.push((d = y.hooks) == null ? void 0 : d.onError),
        m.onRetry.push((g = y.hooks) == null ? void 0 : g.onRetry));
    }
    return { url: a, options: h, hooks: m };
  },
  Vp = class {
    constructor(a) {
      this.options = a;
    }
    shouldAttemptRetry(a, n) {
      return this.options.shouldRetry
        ? Promise.resolve(a < this.options.attempts && this.options.shouldRetry(n))
        : Promise.resolve(a < this.options.attempts);
    }
    getDelay() {
      return this.options.delay;
    }
  },
  g1 = class {
    constructor(a) {
      this.options = a;
    }
    shouldAttemptRetry(a, n) {
      return this.options.shouldRetry
        ? Promise.resolve(a < this.options.attempts && this.options.shouldRetry(n))
        : Promise.resolve(a < this.options.attempts);
    }
    getDelay(a) {
      return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** a);
    }
  };
function m1(a) {
  if (typeof a == "number") return new Vp({ type: "linear", attempts: a, delay: 1e3 });
  switch (a.type) {
    case "linear":
      return new Vp(a);
    case "exponential":
      return new g1(a);
    default:
      throw new Error("Invalid retry strategy");
  }
}
var p1 = async (a) => {
    const n = {},
      s = async (r) => (typeof r == "function" ? await r() : r);
    if (a != null && a.auth) {
      if (a.auth.type === "Bearer") {
        const r = await s(a.auth.token);
        if (!r) return n;
        n.authorization = `Bearer ${r}`;
      } else if (a.auth.type === "Basic") {
        const [r, l] = await Promise.all([s(a.auth.username), s(a.auth.password)]);
        if (!r || !l) return n;
        n.authorization = `Basic ${btoa(`${r}:${l}`)}`;
      } else if (a.auth.type === "Custom") {
        const [r, l] = await Promise.all([s(a.auth.prefix), s(a.auth.value)]);
        if (!l) return n;
        n.authorization = `${r ?? ""} ${l}`;
      }
    }
    return n;
  },
  y1 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function v1(a) {
  const n = a.headers.get("content-type"),
    s = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
  if (!n) return "json";
  const r = n.split(";").shift() || "";
  return y1.test(r) ? "json" : s.has(r) || r.startsWith("text/") ? "text" : "blob";
}
function S1(a) {
  try {
    return (JSON.parse(a), !0);
  } catch {
    return !1;
  }
}
function Af(a) {
  if (a === void 0) return !1;
  const n = typeof a;
  return n === "string" || n === "number" || n === "boolean" || n === null
    ? !0
    : n !== "object"
      ? !1
      : Array.isArray(a)
        ? !0
        : a.buffer
          ? !1
          : (a.constructor && a.constructor.name === "Object") || typeof a.toJSON == "function";
}
function Qp(a) {
  try {
    return JSON.parse(a);
  } catch {
    return a;
  }
}
function $p(a) {
  return typeof a == "function";
}
function b1(a) {
  if (a != null && a.customFetchImpl) return a.customFetchImpl;
  if (typeof globalThis < "u" && $p(globalThis.fetch)) return globalThis.fetch;
  if (typeof window < "u" && $p(window.fetch)) return window.fetch;
  throw new Error("No fetch implementation found");
}
async function R1(a) {
  const n = new Headers(a == null ? void 0 : a.headers),
    s = await p1(a);
  for (const [r, l] of Object.entries(s || {})) n.set(r, l);
  if (!n.has("content-type")) {
    const r = w1(a == null ? void 0 : a.body);
    r && n.set("content-type", r);
  }
  return n;
}
function w1(a) {
  return Af(a) ? "application/json" : null;
}
function T1(a) {
  if (!(a != null && a.body)) return null;
  const n = new Headers(a == null ? void 0 : a.headers);
  if (Af(a.body) && !n.has("content-type")) {
    for (const [s, r] of Object.entries(a == null ? void 0 : a.body))
      r instanceof Date && (a.body[s] = r.toISOString());
    return JSON.stringify(a.body);
  }
  return n.has("content-type") &&
    n.get("content-type") === "application/x-www-form-urlencoded" &&
    Af(a.body)
    ? new URLSearchParams(a.body).toString()
    : a.body;
}
function _1(a, n) {
  var s;
  if (n != null && n.method) return n.method.toUpperCase();
  if (a.startsWith("@")) {
    const r = (s = a.split("@")[1]) == null ? void 0 : s.split("/")[0];
    return ov.includes(r) ? r.toUpperCase() : n != null && n.body ? "POST" : "GET";
  }
  return n != null && n.body ? "POST" : "GET";
}
function E1(a, n) {
  let s;
  return (
    !(a != null && a.signal) &&
      a != null &&
      a.timeout &&
      (s = setTimeout(() => (n == null ? void 0 : n.abort()), a == null ? void 0 : a.timeout)),
    {
      abortTimeout: s,
      clearTimeout: () => {
        s && clearTimeout(s);
      },
    }
  );
}
var A1 = class sv extends Error {
  constructor(n, s) {
    (super(s || JSON.stringify(n, null, 2)),
      (this.issues = n),
      Object.setPrototypeOf(this, sv.prototype));
  }
};
async function el(a, n) {
  const s = await a["~standard"].validate(n);
  if (s.issues) throw new A1(s.issues);
  return s.value;
}
var ov = ["get", "post", "put", "patch", "delete"],
  x1 = (a) => ({
    id: "apply-schema",
    name: "Apply Schema",
    version: "1.0.0",
    async init(n, s) {
      var r, l, c, d;
      const g =
        ((l =
          (r = a.plugins) == null
            ? void 0
            : r.find((h) => {
                var m;
                return (m = h.schema) != null && m.config
                  ? n.startsWith(h.schema.config.baseURL || "") ||
                      n.startsWith(h.schema.config.prefix || "")
                  : !1;
              })) == null
          ? void 0
          : l.schema) || a.schema;
      if (g) {
        let h = n;
        ((c = g.config) != null &&
          c.prefix &&
          h.startsWith(g.config.prefix) &&
          ((h = h.replace(g.config.prefix, "")),
          g.config.baseURL && (n = n.replace(g.config.prefix, g.config.baseURL))),
          (d = g.config) != null &&
            d.baseURL &&
            h.startsWith(g.config.baseURL) &&
            (h = h.replace(g.config.baseURL, "")));
        const m = g.schema[h];
        if (m) {
          let y = fn(tn({}, s), { method: m.method, output: m.output });
          return (
            (s != null && s.disableValidation) ||
              (y = fn(tn({}, y), {
                body: m.input
                  ? await el(m.input, s == null ? void 0 : s.body)
                  : s == null
                    ? void 0
                    : s.body,
                params: m.params
                  ? await el(m.params, s == null ? void 0 : s.params)
                  : s == null
                    ? void 0
                    : s.params,
                query: m.query
                  ? await el(m.query, s == null ? void 0 : s.query)
                  : s == null
                    ? void 0
                    : s.query,
              })),
            { url: n, options: y }
          );
        }
      }
      return { url: n, options: s };
    },
  }),
  C1 = (a) => {
    async function n(s, r) {
      const l = fn(tn(tn({}, a), r), {
        plugins: [
          ...((a == null ? void 0 : a.plugins) || []),
          x1(a || {}),
          ...((r == null ? void 0 : r.plugins) || []),
        ],
      });
      if (a != null && a.catchAllError)
        try {
          return await xf(s, l);
        } catch (c) {
          return {
            data: null,
            error: {
              status: 500,
              statusText: "Fetch Error",
              message:
                "Fetch related error. Captured by catchAllError option. See error property for more details.",
              error: c,
            },
          };
        }
      return await xf(s, l);
    }
    return n;
  };
function O1(a, n) {
  const { baseURL: s, params: r, query: l } = n || { query: {}, params: {}, baseURL: "" };
  let c = a.startsWith("http") ? a.split("/").slice(0, 3).join("/") : s || "";
  if (a.startsWith("@")) {
    const v = a.toString().split("@")[1].split("/")[0];
    ov.includes(v) && (a = a.replace(`@${v}/`, "/"));
  }
  c.endsWith("/") || (c += "/");
  let [d, g] = a.replace(c, "").split("?");
  const h = new URLSearchParams(g);
  for (const [v, S] of Object.entries(l || {})) {
    if (S == null) continue;
    let w;
    if (typeof S == "string") w = S;
    else if (Array.isArray(S)) {
      for (const R of S) h.append(v, R);
      continue;
    } else w = JSON.stringify(S);
    h.set(v, w);
  }
  if (r)
    if (Array.isArray(r)) {
      const v = d.split("/").filter((S) => S.startsWith(":"));
      for (const [S, w] of v.entries()) {
        const R = r[S];
        d = d.replace(w, R);
      }
    } else for (const [v, S] of Object.entries(r)) d = d.replace(`:${v}`, String(S));
  ((d = d.split("/").map(encodeURIComponent).join("/")), d.startsWith("/") && (d = d.slice(1)));
  let m = h.toString();
  return (
    (m = m.length > 0 ? `?${m}`.replace(/\+/g, "%20") : ""),
    c.startsWith("http") ? new URL(`${d}${m}`, c) : `${c}${d}${m}`
  );
}
var xf = async (a, n) => {
    var s, r, l, c, d, g, h, m;
    const { hooks: y, url: v, options: S } = await h1(a, n),
      w = b1(S),
      R = new AbortController(),
      T = (s = S.signal) != null ? s : R.signal,
      E = O1(v, S),
      D = T1(S),
      K = await R1(S),
      Y = _1(v, S);
    let P = fn(tn({}, S), { url: E, headers: K, body: D, method: Y, signal: T });
    for (const ne of y.onRequest)
      if (ne) {
        const te = await ne(P);
        typeof te == "object" && te !== null && (P = te);
      }
    (("pipeTo" in P && typeof P.pipeTo == "function") ||
      typeof ((r = n == null ? void 0 : n.body) == null ? void 0 : r.pipe) == "function") &&
      ("duplex" in P || (P.duplex = "half"));
    const { clearTimeout: B } = E1(S, R);
    let G = await w(P.url, P);
    B();
    const U = { response: G, request: P };
    for (const ne of y.onResponse)
      if (ne) {
        const te = await ne(
          fn(tn({}, U), {
            response:
              (l = n == null ? void 0 : n.hookOptions) != null && l.cloneResponse ? G.clone() : G,
          }),
        );
        te instanceof Response
          ? (G = te)
          : typeof te == "object" && te !== null && (G = te.response);
      }
    if (G.ok) {
      if (!(P.method !== "HEAD")) return { data: "", error: null };
      const te = v1(G),
        J = { data: null, response: G, request: P };
      if (te === "json" || te === "text") {
        const O = await G.text(),
          j = (c = P.jsonParser) != null ? c : Qp;
        J.data = await j(O);
      } else J.data = await G[te]();
      P != null &&
        P.output &&
        P.output &&
        !P.disableValidation &&
        (J.data = await el(P.output, J.data));
      for (const O of y.onSuccess)
        O &&
          (await O(
            fn(tn({}, J), {
              response:
                (d = n == null ? void 0 : n.hookOptions) != null && d.cloneResponse ? G.clone() : G,
            }),
          ));
      return n != null && n.throw ? J.data : { data: J.data, error: null };
    }
    const I = (g = n == null ? void 0 : n.jsonParser) != null ? g : Qp,
      Q = await G.text(),
      z = S1(Q),
      X = z ? await I(Q) : null,
      $ = {
        response: G,
        responseText: Q,
        request: P,
        error: fn(tn({}, X), { status: G.status, statusText: G.statusText }),
      };
    for (const ne of y.onError)
      ne &&
        (await ne(
          fn(tn({}, $), {
            response:
              (h = n == null ? void 0 : n.hookOptions) != null && h.cloneResponse ? G.clone() : G,
          }),
        ));
    if (n != null && n.retry) {
      const ne = m1(n.retry),
        te = (m = n.retryAttempt) != null ? m : 0;
      if (await ne.shouldAttemptRetry(te, G)) {
        for (const O of y.onRetry) O && (await O(U));
        const J = ne.getDelay(te);
        return (
          await new Promise((O) => setTimeout(O, J)),
          await xf(a, fn(tn({}, n), { retryAttempt: te + 1 }))
        );
      }
    }
    if (n != null && n.throw) throw new d1(G.status, G.statusText, z ? X : Q);
    return { data: null, error: fn(tn({}, X), { status: G.status, statusText: G.statusText }) };
  },
  Bi = {};
const M1 = (a) => {
    if (typeof process > "u") return;
    const n = a ?? "/api/auth";
    if (Bi.NEXT_PUBLIC_AUTH_URL) return Bi.NEXT_PUBLIC_AUTH_URL;
    if (typeof window > "u") {
      if (Bi.NEXTAUTH_URL)
        try {
          return Bi.NEXTAUTH_URL;
        } catch {}
      if (Bi.VERCEL_URL)
        try {
          const s = Bi.VERCEL_URL.startsWith("http") ? "" : "https://";
          return `${new URL(`${s}${Bi.VERCEL_URL}`).origin}${n}`;
        } catch {}
    }
  },
  k1 = (a, n) => {
    var B, G, U, I, Q, z, X;
    const s = "credentials" in Request.prototype,
      r =
        BT(a == null ? void 0 : a.baseURL, a == null ? void 0 : a.basePath) ??
        M1(a == null ? void 0 : a.basePath) ??
        "/api/auth",
      l =
        ((B = a == null ? void 0 : a.plugins) == null
          ? void 0
          : B.flatMap(($) => $.fetchPlugins).filter(($) => $ !== void 0)) || [],
      c = {
        id: "lifecycle-hooks",
        name: "lifecycle-hooks",
        hooks: {
          onSuccess: (G = a == null ? void 0 : a.fetchOptions) == null ? void 0 : G.onSuccess,
          onError: (U = a == null ? void 0 : a.fetchOptions) == null ? void 0 : U.onError,
          onRequest: (I = a == null ? void 0 : a.fetchOptions) == null ? void 0 : I.onRequest,
          onResponse: (Q = a == null ? void 0 : a.fetchOptions) == null ? void 0 : Q.onResponse,
        },
      },
      {
        onSuccess: d,
        onError: g,
        onRequest: h,
        onResponse: m,
        ...y
      } = (a == null ? void 0 : a.fetchOptions) || {},
      v = C1({
        baseURL: r,
        ...(s ? { credentials: "include" } : {}),
        method: "GET",
        jsonParser($) {
          return $ ? QT($, { strict: !1 }) : null;
        },
        customFetchImpl: fetch,
        ...y,
        plugins: [
          c,
          ...(y.plugins || []),
          ...(a != null && a.disableDefaultFetchPlugins ? [] : [$T]),
          ...l,
        ],
      }),
      { $sessionSignal: S, session: w, broadcastSessionUpdate: R } = a1(v, a),
      T = (a == null ? void 0 : a.plugins) || [];
    let E = {};
    const D = { $sessionSignal: S, session: w },
      K = {
        "/sign-out": "POST",
        "/revoke-sessions": "POST",
        "/revoke-other-sessions": "POST",
        "/delete-user": "POST",
      },
      Y = [
        {
          signal: "$sessionSignal",
          matcher($) {
            return (
              $ === "/sign-out" ||
              $ === "/update-user" ||
              $ === "/update-session" ||
              $ === "/sign-up/email" ||
              $ === "/sign-in/email" ||
              $ === "/delete-user" ||
              $ === "/verify-email" ||
              $ === "/revoke-sessions" ||
              $ === "/revoke-session" ||
              $ === "/change-email"
            );
          },
          callback($) {
            $ === "/sign-out"
              ? R("signout")
              : ($ === "/update-user" || $ === "/update-session") && R("updateUser");
          },
        },
      ];
    for (const $ of T)
      ($.getAtoms && Object.assign(D, (z = $.getAtoms) == null ? void 0 : z.call($, v)),
        $.pathMethods && Object.assign(K, $.pathMethods),
        $.atomListeners && Y.push(...$.atomListeners));
    const P = {
      notify: ($) => {
        D[$].set(!D[$].get());
      },
      listen: ($, ne) => {
        D[$].subscribe(ne);
      },
      atoms: D,
    };
    for (const $ of T)
      $.getActions && (E = o1(((X = $.getActions) == null ? void 0 : X.call($, v, P, a)) ?? {}, E));
    return {
      get baseURL() {
        return r;
      },
      pluginsActions: E,
      pluginsAtoms: D,
      pluginPathMethods: K,
      atomListeners: Y,
      $fetch: v,
      $store: P,
    };
  };
function L1(a) {
  return (
    typeof a == "object" &&
    a !== null &&
    "get" in a &&
    typeof a.get == "function" &&
    "lc" in a &&
    typeof a.lc == "number"
  );
}
function D1(a, n, s) {
  const r = n[a],
    { fetchOptions: l, query: c, ...d } = s || {};
  return r || (l != null && l.method ? l.method : d && Object.keys(d).length > 0 ? "POST" : "GET");
}
function N1(a, n, s, r, l) {
  function c(d = []) {
    return new Proxy(function () {}, {
      get(g, h) {
        if (typeof h != "string" || h === "then" || h === "catch" || h === "finally") return;
        const m = [...d, h];
        let y = a;
        for (const v of m)
          if (y && typeof y == "object" && v in y) y = y[v];
          else {
            y = void 0;
            break;
          }
        return typeof y == "function" || L1(y) ? y : c(m);
      },
      apply: async (g, h, m) => {
        const y = "/" + d.map((K) => K.replace(/[A-Z]/g, (Y) => `-${Y.toLowerCase()}`)).join("/"),
          v = m[0] || {},
          S = m[1] || {},
          { query: w, fetchOptions: R, ...T } = v,
          E = { ...S, ...R },
          D = D1(y, s, v);
        return await n(y, {
          ...E,
          body: D === "GET" ? void 0 : { ...T, ...((E == null ? void 0 : E.body) || {}) },
          query: w || (E == null ? void 0 : E.query),
          method: D,
          async onSuccess(K) {
            var B, G;
            if (
              (await ((B = E == null ? void 0 : E.onSuccess) == null ? void 0 : B.call(E, K)),
              !l || E.disableSignal)
            )
              return;
            const Y = l.filter((U) => U.matcher(y));
            if (!Y.length) return;
            const P = new Set();
            for (const U of Y) {
              const I = r[U.signal];
              if (!I) return;
              if (P.has(U.signal)) continue;
              P.add(U.signal);
              const Q = I.get();
              (setTimeout(() => {
                I.set(!Q);
              }, 10),
                (G = U.callback) == null || G.call(U, y));
            }
          },
        });
      },
    });
  }
  return c();
}
function P1(a, n = {}) {
  const s = W.useRef(a.get()),
    { keys: r, deps: l = [a, r] } = n,
    c = W.useCallback((g) => {
      const h = (m) => {
        s.current !== m && ((s.current = m), g());
      };
      return (h(a.value), r != null && r.length ? KT(a, r, h) : a.listen(h));
    }, l),
    d = () => s.current;
  return W.useSyncExternalStore(c, d, d);
}
function U1(a) {
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function B1(a) {
  return `use${U1(a)}`;
}
function q1(a) {
  const {
      pluginPathMethods: n,
      pluginsActions: s,
      pluginsAtoms: r,
      $fetch: l,
      $store: c,
      atomListeners: d,
    } = k1(a),
    g = {};
  for (const [h, m] of Object.entries(r)) g[B1(h)] = () => P1(m);
  return N1({ ...s, ...g, $fetch: l, $store: c }, l, n, r, d);
}
const z1 = () => ({ id: "convex", $InferServerPlugin: {} });
function rv(a) {
  const n = new Map();
  return (
    a.split(", ").forEach((r) => {
      const [l, ...c] = r.split("; "),
        [d, g] = l.split("="),
        h = { value: g };
      (c.forEach((m) => {
        const [y, v] = m.split("=");
        h[y.toLowerCase()] = v;
      }),
        n.set(d, h));
    }),
    n
  );
}
function I1(a, n) {
  const s = rv(a);
  let r = {};
  if (
    (s.forEach((l, c) => {
      const d = l.expires,
        g = l["max-age"],
        h = d ? new Date(String(d)) : g ? new Date(Date.now() + Number(g) * 1e3) : null;
      r[c] = { value: l.value, expires: h ? h.toISOString() : null };
    }),
    n)
  )
    try {
      r = { ...JSON.parse(n), ...r };
    } catch {}
  return JSON.stringify(r);
}
function Fp(a) {
  let n = {};
  try {
    n = JSON.parse(a);
  } catch {}
  return Object.entries(n).reduce(
    (r, [l, c]) => (c.expires && new Date(c.expires) < new Date() ? r : `${r}; ${l}=${c.value}`),
    "",
  );
}
const j1 = (a = {}) => {
    let n = null;
    const s = `${(a == null ? void 0 : a.storagePrefix) || "better-auth"}_cookie`,
      r = `${(a == null ? void 0 : a.storagePrefix) || "better-auth"}_session_data`,
      l = (a == null ? void 0 : a.storage) || (typeof window < "u" ? localStorage : void 0);
    return {
      id: "cross-domain",
      $InferServerPlugin: {},
      getActions(c, d) {
        return (
          (n = d),
          {
            getCookie: () => {
              const g = l == null ? void 0 : l.getItem(s);
              return Fp(g || "{}");
            },
            updateSession: () => {
              d.notify("$sessionSignal");
            },
            getSessionData: () => {
              const g = l == null ? void 0 : l.getItem(r);
              if (!g) return null;
              try {
                const h = JSON.parse(g);
                return h && typeof h == "object" && Object.keys(h).length === 0 ? null : h;
              } catch {
                return null;
              }
            },
          }
        );
      },
      fetchPlugins: [
        {
          id: "convex",
          name: "Convex",
          hooks: {
            async onSuccess(c) {
              var g, h;
              if (!l) return;
              const d = c.response.headers.get("set-better-auth-cookie");
              if (d) {
                const m = l.getItem(s),
                  y = I1(d || "", m ?? void 0);
                if ((await l.setItem(s, y), d.includes(".session_token="))) {
                  const v = rv(d);
                  let S = {};
                  try {
                    S = JSON.parse(m || "{}");
                  } catch {}
                  const w = [...v.keys()].find((R) => R.includes("session_token"));
                  w &&
                    ((g = S[w]) == null ? void 0 : g.value) !==
                      ((h = v.get(w)) == null ? void 0 : h.value) &&
                    (n == null || n.notify("$sessionSignal"));
                }
              }
              if (
                c.request.url.toString().includes("/get-session") &&
                !(a != null && a.disableCache)
              ) {
                const m = c.data;
                (l.setItem(r, JSON.stringify(m)), m === null && l.setItem(s, "{}"));
              }
            },
          },
          async init(c, d) {
            var m;
            if (!l) return { url: c, options: d };
            d = d || {};
            const g = l.getItem(s),
              h = Fp(g || "{}");
            return (
              (d.credentials = "omit"),
              (d.headers = { ...d.headers, "Better-Auth-Cookie": h }),
              c.includes("/sign-out") &&
                (await l.setItem(s, "{}"),
                (m = n == null ? void 0 : n.atoms.session) == null ||
                  m.set({ data: null, error: null, isPending: !1 }),
                l.setItem(r, "{}")),
              { url: c, options: d }
            );
          },
        },
      ],
    };
  },
  H1 = q1({ baseURL: "https://earnest-spaniel-753.convex.site", plugins: [z1(), j1()] });
function lv(a, n) {
  const s = {
    get(r, l) {
      if (typeof l == "string") {
        const c = [...n, l];
        return lv(a, c);
      } else if (l === Wy) {
        if (n.length < 1) {
          const c = [a, ...n].join(".");
          throw new Error(
            `API path is expected to be of the form \`${a}.childComponent.functionName\`. Found: \`${c}\``,
          );
        }
        return "_reference/childComponent/" + n.join("/");
      } else return;
    },
  };
  return new Proxy({}, s);
}
const V1 = () => lv("components", []),
  Q1 = Rw;
V1();
const uv = W.createContext({ isAuthenticated: !1, isLoading: !0, userId: null, isCoach: !1 });
function $1({ children: a }) {
  const { isAuthenticated: n, isLoading: s } = bT(),
    r = hT(Q1.profiles.getMyProfile, n ? {} : "skip"),
    l = {
      isAuthenticated: n,
      isLoading: s || (n && r === void 0),
      userId: (r == null ? void 0 : r.userId) ?? null,
      isCoach: (r == null ? void 0 : r.isCoach) ?? !1,
    };
  return ae.jsx(uv.Provider, { value: l, children: a });
}
function F1() {
  return W.useContext(uv);
}
const Y1 = (a, n, s, r) => {
    var c, d, g, h;
    const l = [s, { code: n, ...(r || {}) }];
    if (
      (d = (c = a == null ? void 0 : a.services) == null ? void 0 : c.logger) != null &&
      d.forward
    )
      return a.services.logger.forward(l, "warn", "react-i18next::", !0);
    ($i(l[0]) && (l[0] = `react-i18next:: ${l[0]}`),
      (h = (g = a == null ? void 0 : a.services) == null ? void 0 : g.logger) != null && h.warn
        ? a.services.logger.warn(...l)
        : console != null && console.warn && console.warn(...l));
  },
  Yp = {},
  Cf = (a, n, s, r) => {
    ($i(s) && Yp[s]) || ($i(s) && (Yp[s] = new Date()), Y1(a, n, s, r));
  },
  cv = (a, n) => () => {
    if (a.isInitialized) n();
    else {
      const s = () => {
        (setTimeout(() => {
          a.off("initialized", s);
        }, 0),
          n());
      };
      a.on("initialized", s);
    }
  },
  Of = (a, n, s) => {
    a.loadNamespaces(n, cv(a, s));
  },
  Gp = (a, n, s, r) => {
    if (($i(s) && (s = [s]), a.options.preload && a.options.preload.indexOf(n) > -1))
      return Of(a, s, r);
    (s.forEach((l) => {
      a.options.ns.indexOf(l) < 0 && a.options.ns.push(l);
    }),
      a.loadLanguages(n, cv(a, r)));
  },
  G1 = (a, n, s = {}) =>
    !n.languages || !n.languages.length
      ? (Cf(n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: n.languages,
        }),
        !0)
      : n.hasLoadedNamespace(a, {
          lng: s.lng,
          precheck: (r, l) => {
            if (
              s.bindI18n &&
              s.bindI18n.indexOf("languageChanging") > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !l(r.isLanguageChangingTo, a)
            )
              return !1;
          },
        }),
  $i = (a) => typeof a == "string",
  K1 = (a) => typeof a == "object" && a !== null,
  X1 =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  W1 = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Z1 = (a) => W1[a],
  J1 = (a) => a.replace(X1, Z1);
let Mf = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: J1,
};
const e_ = (a = {}) => {
    Mf = { ...Mf, ...a };
  },
  t_ = () => Mf;
let fv;
const n_ = (a) => {
    fv = a;
  },
  i_ = () => fv,
  a_ = {
    type: "3rdParty",
    init(a) {
      (e_(a.options.react), n_(a));
    },
  },
  s_ = W.createContext();
class o_ {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(n) {
    n.forEach((s) => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const r_ = (a, n) => {
    const s = W.useRef();
    return (
      W.useEffect(() => {
        s.current = a;
      }, [a, n]),
      s.current
    );
  },
  dv = (a, n, s, r) => a.getFixedT(n, s, r),
  l_ = (a, n, s, r) => W.useCallback(dv(a, n, s, r), [a, n, s, r]),
  u_ = (a, n = {}) => {
    var P, B, G, U;
    const { i18n: s } = n,
      { i18n: r, defaultNS: l } = W.useContext(s_) || {},
      c = s || r || i_();
    if ((c && !c.reportNamespaces && (c.reportNamespaces = new o_()), !c)) {
      Cf(
        c,
        "NO_I18NEXT_INSTANCE",
        "useTranslation: You will need to pass in an i18next instance by using initReactI18next",
      );
      const I = (z, X) =>
          $i(X)
            ? X
            : K1(X) && $i(X.defaultValue)
              ? X.defaultValue
              : Array.isArray(z)
                ? z[z.length - 1]
                : z,
        Q = [I, {}, !1];
      return ((Q.t = I), (Q.i18n = {}), (Q.ready = !1), Q);
    }
    (P = c.options.react) != null &&
      P.wait &&
      Cf(
        c,
        "DEPRECATED_OPTION",
        "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
      );
    const d = { ...t_(), ...c.options.react, ...n },
      { useSuspense: g, keyPrefix: h } = d;
    let m = a || l || ((B = c.options) == null ? void 0 : B.defaultNS);
    ((m = $i(m) ? [m] : m || ["translation"]),
      (U = (G = c.reportNamespaces).addUsedNamespaces) == null || U.call(G, m));
    const y = (c.isInitialized || c.initializedStoreOnce) && m.every((I) => G1(I, c, d)),
      v = l_(c, n.lng || null, d.nsMode === "fallback" ? m : m[0], h),
      S = () => v,
      w = () => dv(c, n.lng || null, d.nsMode === "fallback" ? m : m[0], h),
      [R, T] = W.useState(S);
    let E = m.join();
    n.lng && (E = `${n.lng}${E}`);
    const D = r_(E),
      K = W.useRef(!0);
    (W.useEffect(() => {
      const { bindI18n: I, bindI18nStore: Q } = d;
      ((K.current = !0),
        !y &&
          !g &&
          (n.lng
            ? Gp(c, n.lng, m, () => {
                K.current && T(w);
              })
            : Of(c, m, () => {
                K.current && T(w);
              })),
        y && D && D !== E && K.current && T(w));
      const z = () => {
        K.current && T(w);
      };
      return (
        I && (c == null || c.on(I, z)),
        Q && (c == null || c.store.on(Q, z)),
        () => {
          ((K.current = !1),
            c && I && (I == null || I.split(" ").forEach((X) => c.off(X, z))),
            Q && c && Q.split(" ").forEach((X) => c.store.off(X, z)));
        }
      );
    }, [c, E]),
      W.useEffect(() => {
        K.current && y && T(S);
      }, [c, h, y]));
    const Y = [R, c, y];
    if (((Y.t = R), (Y.i18n = c), (Y.ready = y), y || (!y && !g))) return Y;
    throw new Promise((I) => {
      n.lng ? Gp(c, n.lng, m, () => I()) : Of(c, m, () => I());
    });
  },
  c_ = new Set(["ar"]),
  f_ = () => null,
  yl = xR()({ component: d_ });
function d_() {
  const { i18n: a } = u_();
  return (
    W.useEffect(() => {
      const n = a.language;
      ((document.documentElement.dir = c_.has(n) ? "rtl" : "ltr"),
        (document.documentElement.lang = n));
    }, [a.language]),
    ae.jsxs(ae.Fragment, {
      children: [ae.jsx(jy, {}), ae.jsx(W.Suspense, { children: ae.jsx(f_, {}) })],
    })
  );
}
const h_ = "modulepreload",
  g_ = function (a) {
    return "/" + a;
  },
  Kp = {},
  He = function (n, s, r) {
    let l = Promise.resolve();
    if (s && s.length > 0) {
      let d = function (m) {
        return Promise.all(
          m.map((y) =>
            Promise.resolve(y).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const g = document.querySelector("meta[property=csp-nonce]"),
        h = (g == null ? void 0 : g.nonce) || (g == null ? void 0 : g.getAttribute("nonce"));
      l = d(
        s.map((m) => {
          if (((m = g_(m)), m in Kp)) return;
          Kp[m] = !0;
          const y = m.endsWith(".css"),
            v = y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${v}`)) return;
          const S = document.createElement("link");
          if (
            ((S.rel = y ? "stylesheet" : h_),
            y || (S.as = "script"),
            (S.crossOrigin = ""),
            (S.href = m),
            h && S.setAttribute("nonce", h),
            document.head.appendChild(S),
            y)
          )
            return new Promise((w, R) => {
              (S.addEventListener("load", w),
                S.addEventListener("error", () => R(new Error(`Unable to preload CSS for ${m}`))));
            });
        }),
      );
    }
    function c(d) {
      const g = new Event("vite:preloadError", { cancelable: !0 });
      if (((g.payload = d), window.dispatchEvent(g), !g.defaultPrevented)) throw d;
    }
    return l.then((d) => {
      for (const g of d || []) g.status === "rejected" && c(g.reason);
      return n().catch(c);
    });
  },
  m_ = () => He(() => import("./_onboarding-BBtHEbTz.js"), []),
  p_ = Ie("/_onboarding")({
    beforeLoad: ({ context: a }) => {
      if (!a.auth.isAuthenticated && !a.auth.isLoading) throw hl({ to: "/login" });
    },
    component: je(m_, "component"),
  }),
  y_ = () => He(() => import("./_dashboard-DTN0l_oB.js"), []),
  v_ = Ie("/_dashboard")({
    beforeLoad: ({ context: a }) => {
      if (!a.auth.isAuthenticated && !a.auth.isLoading) throw hl({ to: "/login" });
    },
    pendingComponent: () =>
      ae.jsx("div", {
        className: "flex min-h-dvh items-center justify-center",
        children: ae.jsx("div", {
          className:
            "border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent",
        }),
      }),
    component: je(y_, "component"),
  }),
  S_ = () => He(() => import("./_auth-OJfO5v3T.js"), []),
  b_ = Ie("/_auth")({
    beforeLoad: ({ context: a }) => {
      if (a.auth.isAuthenticated && !a.auth.isLoading) throw hl({ to: "/" });
    },
    component: je(S_, "component"),
  }),
  R_ = () =>
    He(
      () => import("./index-oQ3XNe05.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    ),
  w_ = Ie("/_dashboard/")({ component: je(R_, "component") }),
  T_ = () =>
    He(() => import("./welcome-Bypeqnyb.js"), __vite__mapDeps([16, 17, 2, 4, 9, 7, 8, 15, 18, 19])),
  __ = Ie("/_onboarding/welcome")({ component: je(T_, "component") }),
  E_ = () => He(() => import("./pending-h-YpwFZo.js"), __vite__mapDeps([20, 17, 2, 21, 7, 22])),
  A_ = Ie("/_onboarding/pending")({ component: je(E_, "component") }),
  x_ = () =>
    He(
      () => import("./initial-assessment-DCFraQ_c.js"),
      __vite__mapDeps([
        23, 4, 2, 24, 25, 7, 26, 27, 28, 29, 8, 30, 10, 31, 22, 9, 32, 12, 33, 34, 6, 35, 19,
      ]),
    ),
  C_ = Ie("/_onboarding/initial-assessment")({ component: je(x_, "component") }),
  O_ = () =>
    He(
      () => import("./workout-plan-4w8xGTBm.js"),
      __vite__mapDeps([36, 2, 5, 37, 7, 38, 39, 4, 3, 6, 8, 34, 40, 15, 33]),
    ),
  M_ = Ie("/_dashboard/workout-plan")({ component: je(O_, "component") }),
  k_ = () =>
    He(
      () => import("./tracking-DBq8ovy3.js"),
      __vite__mapDeps([41, 42, 37, 7, 43, 3, 4, 2, 5, 13, 8, 10, 9, 40, 6, 26, 44, 15, 45, 46, 25]),
    ),
  L_ = Ie("/_dashboard/tracking")({ component: je(k_, "component") }),
  D_ = () =>
    He(
      () => import("./progress-CCrS6K9_.js").then((a) => a.p),
      __vite__mapDeps([47, 1, 2, 5, 48, 7, 45, 15, 10, 24, 3, 4, 12, 8, 34, 46]),
    ),
  N_ = Ie("/_dashboard/progress")({ component: je(D_, "component") }),
  P_ = () =>
    He(
      () => import("./meal-plan-DN9MCgQN.js"),
      __vite__mapDeps([49, 2, 5, 42, 38, 7, 39, 3, 4, 6, 31, 9, 34, 40]),
    ),
  U_ = Ie("/_dashboard/meal-plan")({ component: je(P_, "component") }),
  B_ = () => He(() => import("./faq-DC8x9f2o.js"), __vite__mapDeps([50, 5, 46, 2, 51, 7, 40, 52])),
  q_ = Ie("/_dashboard/faq")({ component: je(B_, "component") }),
  z_ = () =>
    He(
      () => import("./check-in-BOJt1fXa.js"),
      __vite__mapDeps([
        53, 44, 54, 43, 51, 5, 7, 10, 24, 2, 27, 28, 48, 12, 8, 9, 14, 4, 35, 19, 26, 6,
      ]),
    ),
  I_ = Ie("/_dashboard/check-in")({ component: je(z_, "component") }),
  j_ = () => He(() => import("./set-password-C3I9sgBJ.js"), []),
  H_ = Ie("/_auth/set-password")({ component: je(j_, "component") }),
  V_ = () => He(() => import("./magic-link-CrP6V2GY.js"), []),
  Q_ = Ie("/_auth/magic-link")({ component: je(V_, "component") }),
  $_ = () => He(() => import("./login-DT1LNFYJ.js"), __vite__mapDeps([55, 4, 2, 28])),
  F_ = Ie("/_auth/login")({ component: je($_, "component") }),
  Y_ = () => He(() => import("./expired-FOniVBbF.js"), []),
  G_ = Ie("/_auth/expired")({ component: je(Y_, "component") }),
  K_ = () => He(() => import("./accept-invite-CcX0Zx2k.js"), []),
  X_ = Ie("/_auth/accept-invite")({ component: je(K_, "component") }),
  W_ = () =>
    He(
      () => import("./index-Be4DrOB0.js"),
      __vite__mapDeps([56, 43, 3, 4, 2, 46, 28, 27, 7, 51, 44, 54, 5, 52, 6, 57, 18, 39, 21, 22]),
    ),
  Z_ = Ie("/_dashboard/tickets/")({ component: je(W_, "component") }),
  J_ = () =>
    He(
      () => import("./index-BtzM9p3a.js"),
      __vite__mapDeps([58, 44, 54, 2, 43, 5, 29, 7, 11, 39, 12, 6]),
    ),
  eE = Ie("/_dashboard/settings/")({ component: je(J_, "component") }),
  tE = () =>
    He(
      () => import("./_id-CgvbNbXh.js"),
      __vite__mapDeps([59, 46, 2, 5, 43, 35, 7, 18, 11, 6, 57]),
    ),
  nE = Ie("/_dashboard/tickets/$id")({ component: je(tE, "component") }),
  iE = () =>
    He(
      () => import("./assessment-BrJ374pP.js"),
      __vite__mapDeps([60, 46, 2, 43, 25, 7, 6, 30, 10, 9, 32, 33, 34, 35]),
    ),
  aE = Ie("/_dashboard/settings/assessment")({ component: je(iE, "component") }),
  vl = p_.update({ id: "/_onboarding", getParentRoute: () => yl }),
  Kt = v_.update({ id: "/_dashboard", getParentRoute: () => yl }),
  Ja = b_.update({ id: "/_auth", getParentRoute: () => yl }),
  sE = w_.update({ id: "/", path: "/", getParentRoute: () => Kt }),
  oE = __.update({ id: "/welcome", path: "/welcome", getParentRoute: () => vl }),
  rE = A_.update({ id: "/pending", path: "/pending", getParentRoute: () => vl }),
  lE = C_.update({
    id: "/initial-assessment",
    path: "/initial-assessment",
    getParentRoute: () => vl,
  }),
  uE = M_.update({ id: "/workout-plan", path: "/workout-plan", getParentRoute: () => Kt }),
  cE = L_.update({ id: "/tracking", path: "/tracking", getParentRoute: () => Kt }),
  fE = N_.update({ id: "/progress", path: "/progress", getParentRoute: () => Kt }),
  dE = U_.update({ id: "/meal-plan", path: "/meal-plan", getParentRoute: () => Kt }),
  hE = q_.update({ id: "/faq", path: "/faq", getParentRoute: () => Kt }),
  gE = I_.update({ id: "/check-in", path: "/check-in", getParentRoute: () => Kt }),
  mE = H_.update({ id: "/set-password", path: "/set-password", getParentRoute: () => Ja }),
  pE = Q_.update({ id: "/magic-link", path: "/magic-link", getParentRoute: () => Ja }),
  yE = F_.update({ id: "/login", path: "/login", getParentRoute: () => Ja }),
  vE = G_.update({ id: "/expired", path: "/expired", getParentRoute: () => Ja }),
  SE = X_.update({ id: "/accept-invite", path: "/accept-invite", getParentRoute: () => Ja }),
  bE = Z_.update({ id: "/tickets/", path: "/tickets/", getParentRoute: () => Kt }),
  RE = eE.update({ id: "/settings/", path: "/settings/", getParentRoute: () => Kt }),
  wE = nE.update({ id: "/tickets/$id", path: "/tickets/$id", getParentRoute: () => Kt }),
  TE = aE.update({
    id: "/settings/assessment",
    path: "/settings/assessment",
    getParentRoute: () => Kt,
  }),
  _E = {
    AuthAcceptInviteRoute: SE,
    AuthExpiredRoute: vE,
    AuthLoginRoute: yE,
    AuthMagicLinkRoute: pE,
    AuthSetPasswordRoute: mE,
  },
  EE = Ja._addFileChildren(_E),
  AE = {
    DashboardCheckInRoute: gE,
    DashboardFaqRoute: hE,
    DashboardMealPlanRoute: dE,
    DashboardProgressRoute: fE,
    DashboardTrackingRoute: cE,
    DashboardWorkoutPlanRoute: uE,
    DashboardIndexRoute: sE,
    DashboardSettingsAssessmentRoute: TE,
    DashboardTicketsIdRoute: wE,
    DashboardSettingsIndexRoute: RE,
    DashboardTicketsIndexRoute: bE,
  },
  xE = Kt._addFileChildren(AE),
  CE = {
    OnboardingInitialAssessmentRoute: lE,
    OnboardingPendingRoute: rE,
    OnboardingWelcomeRoute: oE,
  },
  OE = vl._addFileChildren(CE),
  ME = { AuthRoute: EE, DashboardRoute: xE, OnboardingRoute: OE },
  kE = yl._addFileChildren(ME)._addFileTypes(),
  de = (a) => typeof a == "string",
  io = () => {
    let a, n;
    const s = new Promise((r, l) => {
      ((a = r), (n = l));
    });
    return ((s.resolve = a), (s.reject = n), s);
  },
  Xp = (a) => (a == null ? "" : "" + a),
  LE = (a, n, s) => {
    a.forEach((r) => {
      n[r] && (s[r] = n[r]);
    });
  },
  DE = /###/g,
  Wp = (a) => (a && a.indexOf("###") > -1 ? a.replace(DE, ".") : a),
  Zp = (a) => !a || de(a),
  lo = (a, n, s) => {
    const r = de(n) ? n.split(".") : n;
    let l = 0;
    for (; l < r.length - 1; ) {
      if (Zp(a)) return {};
      const c = Wp(r[l]);
      (!a[c] && s && (a[c] = new s()),
        Object.prototype.hasOwnProperty.call(a, c) ? (a = a[c]) : (a = {}),
        ++l);
    }
    return Zp(a) ? {} : { obj: a, k: Wp(r[l]) };
  },
  Jp = (a, n, s) => {
    const { obj: r, k: l } = lo(a, n, Object);
    if (r !== void 0 || n.length === 1) {
      r[l] = s;
      return;
    }
    let c = n[n.length - 1],
      d = n.slice(0, n.length - 1),
      g = lo(a, d, Object);
    for (; g.obj === void 0 && d.length; )
      ((c = `${d[d.length - 1]}.${c}`),
        (d = d.slice(0, d.length - 1)),
        (g = lo(a, d, Object)),
        g != null && g.obj && typeof g.obj[`${g.k}.${c}`] < "u" && (g.obj = void 0));
    g.obj[`${g.k}.${c}`] = s;
  },
  NE = (a, n, s, r) => {
    const { obj: l, k: c } = lo(a, n, Object);
    ((l[c] = l[c] || []), l[c].push(s));
  },
  ll = (a, n) => {
    const { obj: s, k: r } = lo(a, n);
    if (s && Object.prototype.hasOwnProperty.call(s, r)) return s[r];
  },
  PE = (a, n, s) => {
    const r = ll(a, s);
    return r !== void 0 ? r : ll(n, s);
  },
  hv = (a, n, s) => {
    for (const r in n)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in a
          ? de(a[r]) || a[r] instanceof String || de(n[r]) || n[r] instanceof String
            ? s && (a[r] = n[r])
            : hv(a[r], n[r], s)
          : (a[r] = n[r]));
    return a;
  },
  ja = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var UE = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
const BE = (a) => (de(a) ? a.replace(/[&<>"'\/]/g, (n) => UE[n]) : a);
class qE {
  constructor(n) {
    ((this.capacity = n), (this.regExpMap = new Map()), (this.regExpQueue = []));
  }
  getRegExp(n) {
    const s = this.regExpMap.get(n);
    if (s !== void 0) return s;
    const r = new RegExp(n);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(n, r),
      this.regExpQueue.push(n),
      r
    );
  }
}
const zE = [" ", ",", "?", "!", ";"],
  IE = new qE(20),
  jE = (a, n, s) => {
    ((n = n || ""), (s = s || ""));
    const r = zE.filter((d) => n.indexOf(d) < 0 && s.indexOf(d) < 0);
    if (r.length === 0) return !0;
    const l = IE.getRegExp(`(${r.map((d) => (d === "?" ? "\\?" : d)).join("|")})`);
    let c = !l.test(a);
    if (!c) {
      const d = a.indexOf(s);
      d > 0 && !l.test(a.substring(0, d)) && (c = !0);
    }
    return c;
  },
  kf = function (a, n) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!a) return;
    if (a[n]) return Object.prototype.hasOwnProperty.call(a, n) ? a[n] : void 0;
    const r = n.split(s);
    let l = a;
    for (let c = 0; c < r.length; ) {
      if (!l || typeof l != "object") return;
      let d,
        g = "";
      for (let h = c; h < r.length; ++h)
        if ((h !== c && (g += s), (g += r[h]), (d = l[g]), d !== void 0)) {
          if (["string", "number", "boolean"].indexOf(typeof d) > -1 && h < r.length - 1) continue;
          c += h - c + 1;
          break;
        }
      l = d;
    }
    return l;
  },
  ul = (a) => (a == null ? void 0 : a.replace("_", "-")),
  HE = {
    type: "logger",
    log(a) {
      this.output("log", a);
    },
    warn(a) {
      this.output("warn", a);
    },
    error(a) {
      this.output("error", a);
    },
    output(a, n) {
      var s, r;
      (r = (s = console == null ? void 0 : console[a]) == null ? void 0 : s.apply) == null ||
        r.call(s, console, n);
    },
  };
class cl {
  constructor(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(n, s);
  }
  init(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.prefix = s.prefix || "i18next:"),
      (this.logger = n || HE),
      (this.options = s),
      (this.debug = s.debug));
  }
  log() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return this.forward(s, "log", "", !0);
  }
  warn() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return this.forward(s, "warn", "", !0);
  }
  error() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return this.forward(s, "error", "");
  }
  deprecate() {
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return this.forward(s, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(n, s, r, l) {
    return l && !this.debug
      ? null
      : (de(n[0]) && (n[0] = `${r}${this.prefix} ${n[0]}`), this.logger[s](n));
  }
  create(n) {
    return new cl(this.logger, { prefix: `${this.prefix}:${n}:`, ...this.options });
  }
  clone(n) {
    return ((n = n || this.options), (n.prefix = n.prefix || this.prefix), new cl(this.logger, n));
  }
}
var mn = new cl();
class Sl {
  constructor() {
    this.observers = {};
  }
  on(n, s) {
    return (
      n.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const l = this.observers[r].get(s) || 0;
        this.observers[r].set(s, l + 1);
      }),
      this
    );
  }
  off(n, s) {
    if (this.observers[n]) {
      if (!s) {
        delete this.observers[n];
        return;
      }
      this.observers[n].delete(s);
    }
  }
  emit(n) {
    for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
      r[l - 1] = arguments[l];
    (this.observers[n] &&
      Array.from(this.observers[n].entries()).forEach((d) => {
        let [g, h] = d;
        for (let m = 0; m < h; m++) g(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((d) => {
          let [g, h] = d;
          for (let m = 0; m < h; m++) g.apply(g, [n, ...r]);
        }));
  }
}
class ey extends Sl {
  constructor(n) {
    let s =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    (super(),
      (this.data = n || {}),
      (this.options = s),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(n) {
    this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
  }
  removeNamespaces(n) {
    const s = this.options.ns.indexOf(n);
    s > -1 && this.options.ns.splice(s, 1);
  }
  getResource(n, s, r) {
    var m, y;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator,
      d =
        l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let g;
    n.indexOf(".") > -1
      ? (g = n.split("."))
      : ((g = [n, s]),
        r && (Array.isArray(r) ? g.push(...r) : de(r) && c ? g.push(...r.split(c)) : g.push(r)));
    const h = ll(this.data, g);
    return (
      !h && !s && !r && n.indexOf(".") > -1 && ((n = g[0]), (s = g[1]), (r = g.slice(2).join("."))),
      h || !d || !de(r)
        ? h
        : kf((y = (m = this.data) == null ? void 0 : m[n]) == null ? void 0 : y[s], r, c)
    );
  }
  addResource(n, s, r, l) {
    let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let g = [n, s];
    (r && (g = g.concat(d ? r.split(d) : r)),
      n.indexOf(".") > -1 && ((g = n.split(".")), (l = s), (s = g[1])),
      this.addNamespaces(s),
      Jp(this.data, g, l),
      c.silent || this.emit("added", n, s, r, l));
  }
  addResources(n, s, r) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const c in r)
      (de(r[c]) || Array.isArray(r[c])) && this.addResource(n, s, c, r[c], { silent: !0 });
    l.silent || this.emit("added", n, s, r);
  }
  addResourceBundle(n, s, r, l, c) {
    let d =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      g = [n, s];
    (n.indexOf(".") > -1 && ((g = n.split(".")), (l = r), (r = s), (s = g[1])),
      this.addNamespaces(s));
    let h = ll(this.data, g) || {};
    (d.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      l ? hv(h, r, c) : (h = { ...h, ...r }),
      Jp(this.data, g, h),
      d.silent || this.emit("added", n, s, r));
  }
  removeResourceBundle(n, s) {
    (this.hasResourceBundle(n, s) && delete this.data[n][s],
      this.removeNamespaces(s),
      this.emit("removed", n, s));
  }
  hasResourceBundle(n, s) {
    return this.getResource(n, s) !== void 0;
  }
  getResourceBundle(n, s) {
    return (s || (s = this.options.defaultNS), this.getResource(n, s));
  }
  getDataByLanguage(n) {
    return this.data[n];
  }
  hasLanguageSomeTranslations(n) {
    const s = this.getDataByLanguage(n);
    return !!((s && Object.keys(s)) || []).find((l) => s[l] && Object.keys(s[l]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var gv = {
  processors: {},
  addPostProcessor(a) {
    this.processors[a.name] = a;
  },
  handle(a, n, s, r, l) {
    return (
      a.forEach((c) => {
        var d;
        n = ((d = this.processors[c]) == null ? void 0 : d.process(n, s, r, l)) ?? n;
      }),
      n
    );
  },
};
const ty = {},
  ny = (a) => !de(a) && typeof a != "boolean" && typeof a != "number";
class fl extends Sl {
  constructor(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (super(),
      LE(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        n,
        this,
      ),
      (this.options = s),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = mn.create("translator")));
  }
  changeLanguage(n) {
    n && (this.language = n);
  }
  exists(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (n == null) return !1;
    const r = this.resolve(n, s);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(n, s) {
    let r = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const l = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let c = s.ns || this.options.defaultNS || [];
    const d = r && n.indexOf(r) > -1,
      g =
        !this.options.userDefinedKeySeparator &&
        !s.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !s.nsSeparator &&
        !jE(n, r, l);
    if (d && !g) {
      const h = n.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0) return { key: n, namespaces: de(c) ? [c] : c };
      const m = n.split(r);
      ((r !== l || (r === l && this.options.ns.indexOf(m[0]) > -1)) && (c = m.shift()),
        (n = m.join(l)));
    }
    return { key: n, namespaces: de(c) ? [c] : c };
  }
  translate(n, s, r) {
    if (
      (typeof s != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (s = this.options.overloadTranslationOptionHandler(arguments)),
      typeof s == "object" && (s = { ...s }),
      s || (s = {}),
      n == null)
    )
      return "";
    Array.isArray(n) || (n = [String(n)]);
    const l = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails,
      c = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      { key: d, namespaces: g } = this.extractFromKey(n[n.length - 1], s),
      h = g[g.length - 1],
      m = s.lng || this.language,
      y = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((m == null ? void 0 : m.toLowerCase()) === "cimode") {
      if (y) {
        const X = s.nsSeparator || this.options.nsSeparator;
        return l
          ? {
              res: `${h}${X}${d}`,
              usedKey: d,
              exactUsedKey: d,
              usedLng: m,
              usedNS: h,
              usedParams: this.getUsedParamsDetails(s),
            }
          : `${h}${X}${d}`;
      }
      return l
        ? {
            res: d,
            usedKey: d,
            exactUsedKey: d,
            usedLng: m,
            usedNS: h,
            usedParams: this.getUsedParamsDetails(s),
          }
        : d;
    }
    const v = this.resolve(n, s);
    let S = v == null ? void 0 : v.res;
    const w = (v == null ? void 0 : v.usedKey) || d,
      R = (v == null ? void 0 : v.exactUsedKey) || d,
      T = ["[object Number]", "[object Function]", "[object RegExp]"],
      E = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays,
      D = !this.i18nFormat || this.i18nFormat.handleAsObject,
      K = s.count !== void 0 && !de(s.count),
      Y = fl.hasDefaultValue(s),
      P = K ? this.pluralResolver.getSuffix(m, s.count, s) : "",
      B = s.ordinal && K ? this.pluralResolver.getSuffix(m, s.count, { ordinal: !1 }) : "",
      G = K && !s.ordinal && s.count === 0,
      U =
        (G && s[`defaultValue${this.options.pluralSeparator}zero`]) ||
        s[`defaultValue${P}`] ||
        s[`defaultValue${B}`] ||
        s.defaultValue;
    let I = S;
    D && !S && Y && (I = U);
    const Q = ny(I),
      z = Object.prototype.toString.apply(I);
    if (D && I && Q && T.indexOf(z) < 0 && !(de(E) && Array.isArray(I))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const X = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(w, I, { ...s, ns: g })
          : `key '${d} (${this.language})' returned an object instead of string.`;
        return l ? ((v.res = X), (v.usedParams = this.getUsedParamsDetails(s)), v) : X;
      }
      if (c) {
        const X = Array.isArray(I),
          $ = X ? [] : {},
          ne = X ? R : w;
        for (const te in I)
          if (Object.prototype.hasOwnProperty.call(I, te)) {
            const J = `${ne}${c}${te}`;
            (Y && !S
              ? ($[te] = this.translate(J, {
                  ...s,
                  defaultValue: ny(U) ? U[te] : void 0,
                  joinArrays: !1,
                  ns: g,
                }))
              : ($[te] = this.translate(J, { ...s, joinArrays: !1, ns: g })),
              $[te] === J && ($[te] = I[te]));
          }
        S = $;
      }
    } else if (D && de(E) && Array.isArray(S))
      ((S = S.join(E)), S && (S = this.extendTranslation(S, n, s, r)));
    else {
      let X = !1,
        $ = !1;
      (!this.isValidLookup(S) && Y && ((X = !0), (S = U)),
        this.isValidLookup(S) || (($ = !0), (S = d)));
      const te =
          (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && $
            ? void 0
            : S,
        J = Y && U !== S && this.options.updateMissing;
      if ($ || X || J) {
        if ((this.logger.log(J ? "updateKey" : "missingKey", m, h, d, J ? U : S), c)) {
          const le = this.resolve(d, { ...s, keySeparator: !1 });
          le &&
            le.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let O = [];
        const j = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          s.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && j && j[0])
          for (let le = 0; le < j.length; le++) O.push(j[le]);
        else
          this.options.saveMissingTo === "all"
            ? (O = this.languageUtils.toResolveHierarchy(s.lng || this.language))
            : O.push(s.lng || this.language);
        const ie = (le, re, A) => {
          var Z;
          const H = Y && A !== S ? A : te;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(le, h, re, H, J, s)
            : (Z = this.backendConnector) != null &&
              Z.saveMissing &&
              this.backendConnector.saveMissing(le, h, re, H, J, s),
            this.emit("missingKey", le, h, re, S));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && K
            ? O.forEach((le) => {
                const re = this.pluralResolver.getSuffixes(le, s);
                (G &&
                  s[`defaultValue${this.options.pluralSeparator}zero`] &&
                  re.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  re.push(`${this.options.pluralSeparator}zero`),
                  re.forEach((A) => {
                    ie([le], d + A, s[`defaultValue${A}`] || U);
                  }));
              })
            : ie(O, d, U));
      }
      ((S = this.extendTranslation(S, n, s, v, r)),
        $ && S === d && this.options.appendNamespaceToMissingKey && (S = `${h}:${d}`),
        ($ || X) &&
          this.options.parseMissingKeyHandler &&
          (S = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${h}:${d}` : d,
            X ? S : void 0,
          )));
    }
    return l ? ((v.res = S), (v.usedParams = this.getUsedParamsDetails(s)), v) : S;
  }
  extendTranslation(n, s, r, l, c) {
    var m, y;
    var d = this;
    if ((m = this.i18nFormat) != null && m.parse)
      n = this.i18nFormat.parse(
        n,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || l.usedLng,
        l.usedNS,
        l.usedKey,
        { resolved: l },
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const v =
        de(n) &&
        (((y = r == null ? void 0 : r.interpolation) == null ? void 0 : y.skipOnVariables) !==
        void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let S;
      if (v) {
        const R = n.match(this.interpolator.nestingRegexp);
        S = R && R.length;
      }
      let w = r.replace && !de(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (w = { ...this.options.interpolation.defaultVariables, ...w }),
        (n = this.interpolator.interpolate(n, w, r.lng || this.language || l.usedLng, r)),
        v)
      ) {
        const R = n.match(this.interpolator.nestingRegexp),
          T = R && R.length;
        S < T && (r.nest = !1);
      }
      (!r.lng && l && l.res && (r.lng = this.language || l.usedLng),
        r.nest !== !1 &&
          (n = this.interpolator.nest(
            n,
            function () {
              for (var R = arguments.length, T = new Array(R), E = 0; E < R; E++)
                T[E] = arguments[E];
              return (c == null ? void 0 : c[0]) === T[0] && !r.context
                ? (d.logger.warn(
                    `It seems you are nesting recursively key: ${T[0]} in key: ${s[0]}`,
                  ),
                  null)
                : d.translate(...T, s);
            },
            r,
          )),
        r.interpolation && this.interpolator.reset());
    }
    const g = r.postProcess || this.options.postProcess,
      h = de(g) ? [g] : g;
    return (
      n != null &&
        h != null &&
        h.length &&
        r.applyPostProcessor !== !1 &&
        (n = gv.handle(
          h,
          n,
          s,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...l, usedParams: this.getUsedParamsDetails(r) }, ...r }
            : r,
          this,
        )),
      n
    );
  }
  resolve(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      l,
      c,
      d,
      g;
    return (
      de(n) && (n = [n]),
      n.forEach((h) => {
        if (this.isValidLookup(r)) return;
        const m = this.extractFromKey(h, s),
          y = m.key;
        l = y;
        let v = m.namespaces;
        this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
        const S = s.count !== void 0 && !de(s.count),
          w = S && !s.ordinal && s.count === 0,
          R =
            s.context !== void 0 &&
            (de(s.context) || typeof s.context == "number") &&
            s.context !== "",
          T = s.lngs
            ? s.lngs
            : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
        v.forEach((E) => {
          var D, K;
          this.isValidLookup(r) ||
            ((g = E),
            !ty[`${T[0]}-${E}`] &&
              (D = this.utils) != null &&
              D.hasLoadedNamespace &&
              !((K = this.utils) != null && K.hasLoadedNamespace(g)) &&
              ((ty[`${T[0]}-${E}`] = !0),
              this.logger.warn(
                `key "${l}" for languages "${T.join(", ")}" won't get resolved as namespace "${g}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            T.forEach((Y) => {
              var G;
              if (this.isValidLookup(r)) return;
              d = Y;
              const P = [y];
              if ((G = this.i18nFormat) != null && G.addLookupKeys)
                this.i18nFormat.addLookupKeys(P, y, Y, E, s);
              else {
                let U;
                S && (U = this.pluralResolver.getSuffix(Y, s.count, s));
                const I = `${this.options.pluralSeparator}zero`,
                  Q = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (S &&
                    (P.push(y + U),
                    s.ordinal &&
                      U.indexOf(Q) === 0 &&
                      P.push(y + U.replace(Q, this.options.pluralSeparator)),
                    w && P.push(y + I)),
                  R)
                ) {
                  const z = `${y}${this.options.contextSeparator}${s.context}`;
                  (P.push(z),
                    S &&
                      (P.push(z + U),
                      s.ordinal &&
                        U.indexOf(Q) === 0 &&
                        P.push(z + U.replace(Q, this.options.pluralSeparator)),
                      w && P.push(z + I)));
                }
              }
              let B;
              for (; (B = P.pop()); )
                this.isValidLookup(r) || ((c = B), (r = this.getResource(Y, E, B, s)));
            }));
        });
      }),
      { res: r, usedKey: l, exactUsedKey: c, usedLng: d, usedNS: g }
    );
  }
  isValidLookup(n) {
    return (
      n !== void 0 &&
      !(!this.options.returnNull && n === null) &&
      !(!this.options.returnEmptyString && n === "")
    );
  }
  getResource(n, s, r) {
    var c;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (c = this.i18nFormat) != null && c.getResource
      ? this.i18nFormat.getResource(n, s, r, l)
      : this.resourceStore.getResource(n, s, r, l);
  }
  getUsedParamsDetails() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const s = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = n.replace && !de(n.replace);
    let l = r ? n.replace : n;
    if (
      (r && typeof n.count < "u" && (l.count = n.count),
      this.options.interpolation.defaultVariables &&
        (l = { ...this.options.interpolation.defaultVariables, ...l }),
      !r)
    ) {
      l = { ...l };
      for (const c of s) delete l[c];
    }
    return l;
  }
  static hasDefaultValue(n) {
    const s = "defaultValue";
    for (const r in n)
      if (
        Object.prototype.hasOwnProperty.call(n, r) &&
        s === r.substring(0, s.length) &&
        n[r] !== void 0
      )
        return !0;
    return !1;
  }
}
class iy {
  constructor(n) {
    ((this.options = n),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = mn.create("languageUtils")));
  }
  getScriptPartFromCode(n) {
    if (((n = ul(n)), !n || n.indexOf("-") < 0)) return null;
    const s = n.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(n) {
    if (((n = ul(n)), !n || n.indexOf("-") < 0)) return n;
    const s = n.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(n) {
    if (de(n) && n.indexOf("-") > -1) {
      let s;
      try {
        s = Intl.getCanonicalLocales(n)[0];
      } catch {}
      return (
        s && this.options.lowerCaseLng && (s = s.toLowerCase()),
        s || (this.options.lowerCaseLng ? n.toLowerCase() : n)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
  }
  isSupportedCode(n) {
    return (
      (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) &&
        (n = this.getLanguagePartFromCode(n)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(n) > -1
    );
  }
  getBestMatchFromCodes(n) {
    if (!n) return null;
    let s;
    return (
      n.forEach((r) => {
        if (s) return;
        const l = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(l)) && (s = l);
      }),
      !s &&
        this.options.supportedLngs &&
        n.forEach((r) => {
          if (s) return;
          const l = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(l)) return (s = l);
          s = this.options.supportedLngs.find((c) => {
            if (c === l) return c;
            if (
              !(c.indexOf("-") < 0 && l.indexOf("-") < 0) &&
              ((c.indexOf("-") > 0 && l.indexOf("-") < 0 && c.substring(0, c.indexOf("-")) === l) ||
                (c.indexOf(l) === 0 && l.length > 1))
            )
              return c;
          });
        }),
      s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]),
      s
    );
  }
  getFallbackCodes(n, s) {
    if (!n) return [];
    if ((typeof n == "function" && (n = n(s)), de(n) && (n = [n]), Array.isArray(n))) return n;
    if (!s) return n.default || [];
    let r = n[s];
    return (
      r || (r = n[this.getScriptPartFromCode(s)]),
      r || (r = n[this.formatLanguageCode(s)]),
      r || (r = n[this.getLanguagePartFromCode(s)]),
      r || (r = n.default),
      r || []
    );
  }
  toResolveHierarchy(n, s) {
    const r = this.getFallbackCodes(s || this.options.fallbackLng || [], n),
      l = [],
      c = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? l.push(d)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
      };
    return (
      de(n) && (n.indexOf("-") > -1 || n.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" && c(this.formatLanguageCode(n)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            c(this.getScriptPartFromCode(n)),
          this.options.load !== "currentOnly" && c(this.getLanguagePartFromCode(n)))
        : de(n) && c(this.formatLanguageCode(n)),
      r.forEach((d) => {
        l.indexOf(d) < 0 && c(this.formatLanguageCode(d));
      }),
      l
    );
  }
}
const ay = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  sy = {
    select: (a) => (a === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class VE {
  constructor(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.languageUtils = n),
      (this.options = s),
      (this.logger = mn.create("pluralResolver")),
      (this.pluralRulesCache = {}));
  }
  addRule(n, s) {
    this.rules[n] = s;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = ul(n === "dev" ? "en" : n),
      l = s.ordinal ? "ordinal" : "cardinal",
      c = JSON.stringify({ cleanedCode: r, type: l });
    if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
    let d;
    try {
      d = new Intl.PluralRules(r, { type: l });
    } catch {
      if (!Intl) return (this.logger.error("No Intl support, please use an Intl polyfill!"), sy);
      if (!n.match(/-|_/)) return sy;
      const h = this.languageUtils.getLanguagePartFromCode(n);
      d = this.getRule(h, s);
    }
    return ((this.pluralRulesCache[c] = d), d);
  }
  needsPlural(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = this.getRule(n, s);
    return (
      r || (r = this.getRule("dev", s)),
      (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(n, s) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(n, r).map((l) => `${s}${l}`);
  }
  getSuffixes(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = this.getRule(n, s);
    return (
      r || (r = this.getRule("dev", s)),
      r
        ? r
            .resolvedOptions()
            .pluralCategories.sort((l, c) => ay[l] - ay[c])
            .map(
              (l) =>
                `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${l}`,
            )
        : []
    );
  }
  getSuffix(n, s) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(n, r);
    return l
      ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${l.select(s)}`
      : (this.logger.warn(`no plural rule found for: ${n}`), this.getSuffix("dev", s, r));
  }
}
const oy = function (a, n, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      c = PE(a, n, s);
    return (!c && l && de(s) && ((c = kf(a, s, r)), c === void 0 && (c = kf(n, s, r))), c);
  },
  gf = (a) => a.replace(/\$/g, "$$$$");
class QE {
  constructor() {
    var s;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = mn.create("interpolator")),
      (this.options = n),
      (this.format =
        ((s = n == null ? void 0 : n.interpolation) == null ? void 0 : s.format) || ((r) => r)),
      this.init(n));
  }
  init() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    n.interpolation || (n.interpolation = { escapeValue: !0 });
    const {
      escape: s,
      escapeValue: r,
      useRawValueToEscape: l,
      prefix: c,
      prefixEscaped: d,
      suffix: g,
      suffixEscaped: h,
      formatSeparator: m,
      unescapeSuffix: y,
      unescapePrefix: v,
      nestingPrefix: S,
      nestingPrefixEscaped: w,
      nestingSuffix: R,
      nestingSuffixEscaped: T,
      nestingOptionsSeparator: E,
      maxReplaces: D,
      alwaysFormat: K,
    } = n.interpolation;
    ((this.escape = s !== void 0 ? s : BE),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = l !== void 0 ? l : !1),
      (this.prefix = c ? ja(c) : d || "{{"),
      (this.suffix = g ? ja(g) : h || "}}"),
      (this.formatSeparator = m || ","),
      (this.unescapePrefix = y ? "" : v || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : y || ""),
      (this.nestingPrefix = S ? ja(S) : w || ja("$t(")),
      (this.nestingSuffix = R ? ja(R) : T || ja(")")),
      (this.nestingOptionsSeparator = E || ","),
      (this.maxReplaces = D || 1e3),
      (this.alwaysFormat = K !== void 0 ? K : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const n = (s, r) =>
      (s == null ? void 0 : s.source) === r ? ((s.lastIndex = 0), s) : new RegExp(r, "g");
    ((this.regexp = n(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = n(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = n(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      )));
  }
  interpolate(n, s, r, l) {
    var w;
    let c, d, g;
    const h =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      m = (R) => {
        if (R.indexOf(this.formatSeparator) < 0) {
          const K = oy(s, h, R, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(K, void 0, r, { ...l, ...s, interpolationkey: R })
            : K;
        }
        const T = R.split(this.formatSeparator),
          E = T.shift().trim(),
          D = T.join(this.formatSeparator).trim();
        return this.format(
          oy(s, h, E, this.options.keySeparator, this.options.ignoreJSONStructure),
          D,
          r,
          { ...l, ...s, interpolationkey: E },
        );
      };
    this.resetRegExp();
    const y =
        (l == null ? void 0 : l.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      v =
        ((w = l == null ? void 0 : l.interpolation) == null ? void 0 : w.skipOnVariables) !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (R) => gf(R) },
        { regex: this.regexp, safeValue: (R) => (this.escapeValue ? gf(this.escape(R)) : gf(R)) },
      ].forEach((R) => {
        for (g = 0; (c = R.regex.exec(n)); ) {
          const T = c[1].trim();
          if (((d = m(T)), d === void 0))
            if (typeof y == "function") {
              const D = y(n, c, l);
              d = de(D) ? D : "";
            } else if (l && Object.prototype.hasOwnProperty.call(l, T)) d = "";
            else if (v) {
              d = c[0];
              continue;
            } else
              (this.logger.warn(`missed to pass in variable ${T} for interpolating ${n}`),
                (d = ""));
          else !de(d) && !this.useRawValueToEscape && (d = Xp(d));
          const E = R.safeValue(d);
          if (
            ((n = n.replace(c[0], E)),
            v
              ? ((R.regex.lastIndex += d.length), (R.regex.lastIndex -= c[0].length))
              : (R.regex.lastIndex = 0),
            g++,
            g >= this.maxReplaces)
          )
            break;
        }
      }),
      n
    );
  }
  nest(n, s) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l,
      c,
      d;
    const g = (h, m) => {
      const y = this.nestingOptionsSeparator;
      if (h.indexOf(y) < 0) return h;
      const v = h.split(new RegExp(`${y}[ ]*{`));
      let S = `{${v[1]}`;
      ((h = v[0]), (S = this.interpolate(S, d)));
      const w = S.match(/'/g),
        R = S.match(/"/g);
      ((((w == null ? void 0 : w.length) ?? 0) % 2 === 0 && !R) || R.length % 2 !== 0) &&
        (S = S.replace(/'/g, '"'));
      try {
        ((d = JSON.parse(S)), m && (d = { ...m, ...d }));
      } catch (T) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${h}`, T),
          `${h}${y}${S}`
        );
      }
      return (
        d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue,
        h
      );
    };
    for (; (l = this.nestingRegexp.exec(n)); ) {
      let h = [];
      ((d = { ...r }),
        (d = d.replace && !de(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue);
      let m = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const y = l[1].split(this.formatSeparator).map((v) => v.trim());
        ((l[1] = y.shift()), (h = y), (m = !0));
      }
      if (((c = s(g.call(this, l[1].trim(), d), d)), c && l[0] === n && !de(c))) return c;
      (de(c) || (c = Xp(c)),
        c || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${n}`), (c = "")),
        m &&
          (c = h.reduce(
            (y, v) => this.format(y, v, r.lng, { ...r, interpolationkey: l[1].trim() }),
            c.trim(),
          )),
        (n = n.replace(l[0], c)),
        (this.regexp.lastIndex = 0));
    }
    return n;
  }
}
const $E = (a) => {
    let n = a.toLowerCase().trim();
    const s = {};
    if (a.indexOf("(") > -1) {
      const r = a.split("(");
      n = r[0].toLowerCase().trim();
      const l = r[1].substring(0, r[1].length - 1);
      n === "currency" && l.indexOf(":") < 0
        ? s.currency || (s.currency = l.trim())
        : n === "relativetime" && l.indexOf(":") < 0
          ? s.range || (s.range = l.trim())
          : l.split(";").forEach((d) => {
              if (d) {
                const [g, ...h] = d.split(":"),
                  m = h
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  y = g.trim();
                (s[y] || (s[y] = m),
                  m === "false" && (s[y] = !1),
                  m === "true" && (s[y] = !0),
                  isNaN(m) || (s[y] = parseInt(m, 10)));
              }
            });
    }
    return { formatName: n, formatOptions: s };
  },
  Ha = (a) => {
    const n = {};
    return (s, r, l) => {
      let c = l;
      l &&
        l.interpolationkey &&
        l.formatParams &&
        l.formatParams[l.interpolationkey] &&
        l[l.interpolationkey] &&
        (c = { ...c, [l.interpolationkey]: void 0 });
      const d = r + JSON.stringify(c);
      let g = n[d];
      return (g || ((g = a(ul(r), l)), (n[d] = g)), g(s));
    };
  };
class FE {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = mn.create("formatter")),
      (this.options = n),
      (this.formats = {
        number: Ha((s, r) => {
          const l = new Intl.NumberFormat(s, { ...r });
          return (c) => l.format(c);
        }),
        currency: Ha((s, r) => {
          const l = new Intl.NumberFormat(s, { ...r, style: "currency" });
          return (c) => l.format(c);
        }),
        datetime: Ha((s, r) => {
          const l = new Intl.DateTimeFormat(s, { ...r });
          return (c) => l.format(c);
        }),
        relativetime: Ha((s, r) => {
          const l = new Intl.RelativeTimeFormat(s, { ...r });
          return (c) => l.format(c, r.range || "day");
        }),
        list: Ha((s, r) => {
          const l = new Intl.ListFormat(s, { ...r });
          return (c) => l.format(c);
        }),
      }),
      this.init(n));
  }
  init(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    this.formatSeparator = s.interpolation.formatSeparator || ",";
  }
  add(n, s) {
    this.formats[n.toLowerCase().trim()] = s;
  }
  addCached(n, s) {
    this.formats[n.toLowerCase().trim()] = Ha(s);
  }
  format(n, s, r) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = s.split(this.formatSeparator);
    if (
      c.length > 1 &&
      c[0].indexOf("(") > 1 &&
      c[0].indexOf(")") < 0 &&
      c.find((g) => g.indexOf(")") > -1)
    ) {
      const g = c.findIndex((h) => h.indexOf(")") > -1);
      c[0] = [c[0], ...c.splice(1, g)].join(this.formatSeparator);
    }
    return c.reduce((g, h) => {
      var v;
      const { formatName: m, formatOptions: y } = $E(h);
      if (this.formats[m]) {
        let S = g;
        try {
          const w =
              ((v = l == null ? void 0 : l.formatParams) == null
                ? void 0
                : v[l.interpolationkey]) || {},
            R = w.locale || w.lng || l.locale || l.lng || r;
          S = this.formats[m](g, R, { ...y, ...l, ...w });
        } catch (w) {
          this.logger.warn(w);
        }
        return S;
      } else this.logger.warn(`there was no format function for ${m}`);
      return g;
    }, n);
  }
}
const YE = (a, n) => {
  a.pending[n] !== void 0 && (delete a.pending[n], a.pendingCount--);
};
class GE extends Sl {
  constructor(n, s, r) {
    var c, d;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    (super(),
      (this.backend = n),
      (this.store = s),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = l),
      (this.logger = mn.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = l.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5),
      (this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (d = (c = this.backend) == null ? void 0 : c.init) == null || d.call(c, r, l.backend, l));
  }
  queueLoad(n, s, r, l) {
    const c = {},
      d = {},
      g = {},
      h = {};
    return (
      n.forEach((m) => {
        let y = !0;
        (s.forEach((v) => {
          const S = `${m}|${v}`;
          !r.reload && this.store.hasResourceBundle(m, v)
            ? (this.state[S] = 2)
            : this.state[S] < 0 ||
              (this.state[S] === 1
                ? d[S] === void 0 && (d[S] = !0)
                : ((this.state[S] = 1),
                  (y = !1),
                  d[S] === void 0 && (d[S] = !0),
                  c[S] === void 0 && (c[S] = !0),
                  h[v] === void 0 && (h[v] = !0)));
        }),
          y || (g[m] = !0));
      }),
      (Object.keys(c).length || Object.keys(d).length) &&
        this.queue.push({
          pending: d,
          pendingCount: Object.keys(d).length,
          loaded: {},
          errors: [],
          callback: l,
        }),
      {
        toLoad: Object.keys(c),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(g),
        toLoadNamespaces: Object.keys(h),
      }
    );
  }
  loaded(n, s, r) {
    const l = n.split("|"),
      c = l[0],
      d = l[1];
    (s && this.emit("failedLoading", c, d, s),
      !s && r && this.store.addResourceBundle(c, d, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[n] = s ? -1 : 2),
      s && r && (this.state[n] = 0));
    const g = {};
    (this.queue.forEach((h) => {
      (NE(h.loaded, [c], d),
        YE(h, n),
        s && h.errors.push(s),
        h.pendingCount === 0 &&
          !h.done &&
          (Object.keys(h.loaded).forEach((m) => {
            g[m] || (g[m] = {});
            const y = h.loaded[m];
            y.length &&
              y.forEach((v) => {
                g[m][v] === void 0 && (g[m][v] = !0);
              });
          }),
          (h.done = !0),
          h.errors.length ? h.callback(h.errors) : h.callback()));
    }),
      this.emit("loaded", g),
      (this.queue = this.queue.filter((h) => !h.done)));
  }
  read(n, s, r) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      d = arguments.length > 5 ? arguments[5] : void 0;
    if (!n.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: n, ns: s, fcName: r, tried: l, wait: c, callback: d });
      return;
    }
    this.readingCalls++;
    const g = (m, y) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const v = this.waitingReads.shift();
          this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
        }
        if (m && y && l < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, n, s, r, l + 1, c * 2, d);
          }, c);
          return;
        }
        d(m, y);
      },
      h = this.backend[r].bind(this.backend);
    if (h.length === 2) {
      try {
        const m = h(n, s);
        m && typeof m.then == "function" ? m.then((y) => g(null, y)).catch(g) : g(null, m);
      } catch (m) {
        g(m);
      }
      return;
    }
    return h(n, s, g);
  }
  prepareLoading(n, s) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn("No backend was added via i18next.use. Will not load resources."),
        l && l()
      );
    (de(n) && (n = this.languageUtils.toResolveHierarchy(n)), de(s) && (s = [s]));
    const c = this.queueLoad(n, s, r, l);
    if (!c.toLoad.length) return (c.pending.length || l(), null);
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(n, s, r) {
    this.prepareLoading(n, s, {}, r);
  }
  reload(n, s, r) {
    this.prepareLoading(n, s, { reload: !0 }, r);
  }
  loadOne(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = n.split("|"),
      l = r[0],
      c = r[1];
    this.read(l, c, "read", void 0, void 0, (d, g) => {
      (d && this.logger.warn(`${s}loading namespace ${c} for language ${l} failed`, d),
        !d && g && this.logger.log(`${s}loaded namespace ${c} for language ${l}`, g),
        this.loaded(n, d, g));
    });
  }
  saveMissing(n, s, r, l, c) {
    var h, m, y, v, S;
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      g = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (
      (m = (h = this.services) == null ? void 0 : h.utils) != null &&
      m.hasLoadedNamespace &&
      !((v = (y = this.services) == null ? void 0 : y.utils) != null && v.hasLoadedNamespace(s))
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${s}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(r == null || r === "")) {
      if ((S = this.backend) != null && S.create) {
        const w = { ...d, isUpdate: c },
          R = this.backend.create.bind(this.backend);
        if (R.length < 6)
          try {
            let T;
            (R.length === 5 ? (T = R(n, s, r, l, w)) : (T = R(n, s, r, l)),
              T && typeof T.then == "function" ? T.then((E) => g(null, E)).catch(g) : g(null, T));
          } catch (T) {
            g(T);
          }
        else R(n, s, r, l, g, w);
      }
      !n || !n[0] || this.store.addResource(n[0], s, r, l);
    }
  }
}
const ry = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (a) => {
      let n = {};
      if (
        (typeof a[1] == "object" && (n = a[1]),
        de(a[1]) && (n.defaultValue = a[1]),
        de(a[2]) && (n.tDescription = a[2]),
        typeof a[2] == "object" || typeof a[3] == "object")
      ) {
        const s = a[3] || a[2];
        Object.keys(s).forEach((r) => {
          n[r] = s[r];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (a) => a,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  ly = (a) => {
    var n, s;
    return (
      de(a.ns) && (a.ns = [a.ns]),
      de(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]),
      de(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]),
      ((s = (n = a.supportedLngs) == null ? void 0 : n.indexOf) == null
        ? void 0
        : s.call(n, "cimode")) < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])),
      typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate),
      a
    );
  },
  Fr = () => {},
  KE = (a) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((s) => {
      typeof a[s] == "function" && (a[s] = a[s].bind(a));
    });
  };
class vo extends Sl {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = ly(n)),
      (this.services = {}),
      (this.logger = mn),
      (this.modules = { external: [] }),
      KE(this),
      s && !this.isInitialized && !n.isClone)
    ) {
      if (!this.options.initAsync) return (this.init(n, s), this);
      setTimeout(() => {
        this.init(n, s);
      }, 0);
    }
  }
  init() {
    var n = this;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    ((this.isInitializing = !0),
      typeof s == "function" && ((r = s), (s = {})),
      s.defaultNS == null &&
        s.ns &&
        (de(s.ns)
          ? (s.defaultNS = s.ns)
          : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0])));
    const l = ry();
    ((this.options = { ...l, ...this.options, ...ly(s) }),
      (this.options.interpolation = { ...l.interpolation, ...this.options.interpolation }),
      s.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = s.keySeparator),
      s.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = s.nsSeparator));
    const c = (y) => (y ? (typeof y == "function" ? new y() : y) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? mn.init(c(this.modules.logger), this.options)
        : mn.init(null, this.options);
      let y;
      this.modules.formatter ? (y = this.modules.formatter) : (y = FE);
      const v = new iy(this.options);
      this.store = new ey(this.options.resources, this.options);
      const S = this.services;
      ((S.logger = mn),
        (S.resourceStore = this.store),
        (S.languageUtils = v),
        (S.pluralResolver = new VE(v, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        y &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === l.interpolation.format) &&
          ((S.formatter = c(y)),
          S.formatter.init(S, this.options),
          (this.options.interpolation.format = S.formatter.format.bind(S.formatter))),
        (S.interpolator = new QE(this.options)),
        (S.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (S.backendConnector = new GE(c(this.modules.backend), S.resourceStore, S, this.options)),
        S.backendConnector.on("*", function (w) {
          for (var R = arguments.length, T = new Array(R > 1 ? R - 1 : 0), E = 1; E < R; E++)
            T[E - 1] = arguments[E];
          n.emit(w, ...T);
        }),
        this.modules.languageDetector &&
          ((S.languageDetector = c(this.modules.languageDetector)),
          S.languageDetector.init &&
            S.languageDetector.init(S, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((S.i18nFormat = c(this.modules.i18nFormat)),
          S.i18nFormat.init && S.i18nFormat.init(this)),
        (this.translator = new fl(this.services, this.options)),
        this.translator.on("*", function (w) {
          for (var R = arguments.length, T = new Array(R > 1 ? R - 1 : 0), E = 1; E < R; E++)
            T[E - 1] = arguments[E];
          n.emit(w, ...T);
        }),
        this.modules.external.forEach((w) => {
          w.init && w.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Fr),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const y = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      y.length > 0 && y[0] !== "dev" && (this.options.lng = y[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn("init: no languageDetector is used and no lng is defined"),
      ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(
        (y) => {
          this[y] = function () {
            return n.store[y](...arguments);
          };
        },
      ),
      ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((y) => {
        this[y] = function () {
          return (n.store[y](...arguments), n);
        };
      }));
    const h = io(),
      m = () => {
        const y = (v, S) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            h.resolve(S),
            r(v, S));
        };
        if (this.languages && !this.isInitialized) return y(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, y);
      };
    return (this.options.resources || !this.options.initAsync ? m() : setTimeout(m, 0), h);
  }
  loadResources(n) {
    var c, d;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fr;
    const l = de(n) ? n : this.language;
    if (
      (typeof n == "function" && (r = n),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (l == null ? void 0 : l.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const g = [],
        h = (m) => {
          if (!m || m === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(m).forEach((v) => {
            v !== "cimode" && g.indexOf(v) < 0 && g.push(v);
          });
        };
      (l
        ? h(l)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((y) => h(y)),
        (d = (c = this.options.preload) == null ? void 0 : c.forEach) == null ||
          d.call(c, (m) => h(m)),
        this.services.backendConnector.load(g, this.options.ns, (m) => {
          (!m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            r(m));
        }));
    } else r(null);
  }
  reloadResources(n, s, r) {
    const l = io();
    return (
      typeof n == "function" && ((r = n), (n = void 0)),
      typeof s == "function" && ((r = s), (s = void 0)),
      n || (n = this.languages),
      s || (s = this.options.ns),
      r || (r = Fr),
      this.services.backendConnector.reload(n, s, (c) => {
        (l.resolve(), r(c));
      }),
      l
    );
  }
  use(n) {
    if (!n)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!n.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      n.type === "backend" && (this.modules.backend = n),
      (n.type === "logger" || (n.log && n.warn && n.error)) && (this.modules.logger = n),
      n.type === "languageDetector" && (this.modules.languageDetector = n),
      n.type === "i18nFormat" && (this.modules.i18nFormat = n),
      n.type === "postProcessor" && gv.addPostProcessor(n),
      n.type === "formatter" && (this.modules.formatter = n),
      n.type === "3rdParty" && this.modules.external.push(n),
      this
    );
  }
  setResolvedLanguage(n) {
    if (!(!n || !this.languages) && !(["cimode", "dev"].indexOf(n) > -1))
      for (let s = 0; s < this.languages.length; s++) {
        const r = this.languages[s];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(n, s) {
    var r = this;
    this.isLanguageChangingTo = n;
    const l = io();
    this.emit("languageChanging", n);
    const c = (h) => {
        ((this.language = h),
          (this.languages = this.services.languageUtils.toResolveHierarchy(h)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(h));
      },
      d = (h, m) => {
        (m
          ? (c(m),
            this.translator.changeLanguage(m),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", m),
            this.logger.log("languageChanged", m))
          : (this.isLanguageChangingTo = void 0),
          l.resolve(function () {
            return r.t(...arguments);
          }),
          s &&
            s(h, function () {
              return r.t(...arguments);
            }));
      },
      g = (h) => {
        var y, v;
        !n && !h && this.services.languageDetector && (h = []);
        const m = de(h) ? h : this.services.languageUtils.getBestMatchFromCodes(h);
        (m &&
          (this.language || c(m),
          this.translator.language || this.translator.changeLanguage(m),
          (v = (y = this.services.languageDetector) == null ? void 0 : y.cacheUserLanguage) ==
            null || v.call(y, m)),
          this.loadResources(m, (S) => {
            d(S, m);
          }));
      };
    return (
      !n && this.services.languageDetector && !this.services.languageDetector.async
        ? g(this.services.languageDetector.detect())
        : !n && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(g)
            : this.services.languageDetector.detect(g)
          : g(n),
      l
    );
  }
  getFixedT(n, s, r) {
    var l = this;
    const c = function (d, g) {
      let h;
      if (typeof g != "object") {
        for (var m = arguments.length, y = new Array(m > 2 ? m - 2 : 0), v = 2; v < m; v++)
          y[v - 2] = arguments[v];
        h = l.options.overloadTranslationOptionHandler([d, g].concat(y));
      } else h = { ...g };
      ((h.lng = h.lng || c.lng),
        (h.lngs = h.lngs || c.lngs),
        (h.ns = h.ns || c.ns),
        h.keyPrefix !== "" && (h.keyPrefix = h.keyPrefix || r || c.keyPrefix));
      const S = l.options.keySeparator || ".";
      let w;
      return (
        h.keyPrefix && Array.isArray(d)
          ? (w = d.map((R) => `${h.keyPrefix}${S}${R}`))
          : (w = h.keyPrefix ? `${h.keyPrefix}${S}${d}` : d),
        l.t(w, h)
      );
    };
    return (de(n) ? (c.lng = n) : (c.lngs = n), (c.ns = s), (c.keyPrefix = r), c);
  }
  t() {
    var l;
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return (l = this.translator) == null ? void 0 : l.translate(...s);
  }
  exists() {
    var l;
    for (var n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
    return (l = this.translator) == null ? void 0 : l.exists(...s);
  }
  setDefaultNamespace(n) {
    this.options.defaultNS = n;
  }
  hasLoadedNamespace(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const r = s.lng || this.resolvedLanguage || this.languages[0],
      l = this.options ? this.options.fallbackLng : !1,
      c = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const d = (g, h) => {
      const m = this.services.backendConnector.state[`${g}|${h}`];
      return m === -1 || m === 0 || m === 2;
    };
    if (s.precheck) {
      const g = s.precheck(this, d);
      if (g !== void 0) return g;
    }
    return !!(
      this.hasResourceBundle(r, n) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(r, n) && (!l || d(c, n)))
    );
  }
  loadNamespaces(n, s) {
    const r = io();
    return this.options.ns
      ? (de(n) && (n = [n]),
        n.forEach((l) => {
          this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
        }),
        this.loadResources((l) => {
          (r.resolve(), s && s(l));
        }),
        r)
      : (s && s(), Promise.resolve());
  }
  loadLanguages(n, s) {
    const r = io();
    de(n) && (n = [n]);
    const l = this.options.preload || [],
      c = n.filter((d) => l.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return c.length
      ? ((this.options.preload = l.concat(c)),
        this.loadResources((d) => {
          (r.resolve(), s && s(d));
        }),
        r)
      : (s && s(), Promise.resolve());
  }
  dir(n) {
    var l, c;
    if (
      (n ||
        (n =
          this.resolvedLanguage ||
          (((l = this.languages) == null ? void 0 : l.length) > 0
            ? this.languages[0]
            : this.language)),
      !n)
    )
      return "rtl";
    const s = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = ((c = this.services) == null ? void 0 : c.languageUtils) || new iy(ry());
    return s.indexOf(r.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0;
    return new vo(n, s);
  }
  cloneInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fr;
    const r = n.forkResourceStore;
    r && delete n.forkResourceStore;
    const l = { ...this.options, ...n, isClone: !0 },
      c = new vo(l);
    if (
      ((n.debug !== void 0 || n.prefix !== void 0) && (c.logger = c.logger.clone(n)),
      ["store", "services", "language"].forEach((g) => {
        c[g] = this[g];
      }),
      (c.services = { ...this.services }),
      (c.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
      r)
    ) {
      const g = Object.keys(this.store.data).reduce(
        (h, m) => (
          (h[m] = { ...this.store.data[m] }),
          Object.keys(h[m]).reduce((y, v) => ((y[v] = { ...h[m][v] }), y), {})
        ),
        {},
      );
      ((c.store = new ey(g, l)), (c.services.resourceStore = c.store));
    }
    return (
      (c.translator = new fl(c.services, l)),
      c.translator.on("*", function (g) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), y = 1; y < h; y++)
          m[y - 1] = arguments[y];
        c.emit(g, ...m);
      }),
      c.init(l, s),
      (c.translator.options = l),
      (c.translator.backendConnector.services.utils = {
        hasLoadedNamespace: c.hasLoadedNamespace.bind(c),
      }),
      c
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const ct = vo.createInstance();
ct.createInstance = vo.createInstance;
ct.createInstance;
ct.dir;
ct.init;
ct.loadResources;
ct.reloadResources;
ct.use;
ct.changeLanguage;
ct.getFixedT;
ct.t;
ct.exists;
ct.setDefaultNamespace;
ct.hasLoadedNamespace;
ct.loadNamespaces;
ct.loadLanguages;
const { slice: XE, forEach: WE } = [];
function ZE(a) {
  return (
    WE.call(XE.call(arguments, 1), (n) => {
      if (n) for (const s in n) a[s] === void 0 && (a[s] = n[s]);
    }),
    a
  );
}
function JE(a) {
  return typeof a != "string"
    ? !1
    : [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i,
      ].some((s) => s.test(a));
}
const uy = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  eA = function (a, n) {
    const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { path: "/" },
      l = encodeURIComponent(n);
    let c = `${a}=${l}`;
    if (r.maxAge > 0) {
      const d = r.maxAge - 0;
      if (Number.isNaN(d)) throw new Error("maxAge should be a Number");
      c += `; Max-Age=${Math.floor(d)}`;
    }
    if (r.domain) {
      if (!uy.test(r.domain)) throw new TypeError("option domain is invalid");
      c += `; Domain=${r.domain}`;
    }
    if (r.path) {
      if (!uy.test(r.path)) throw new TypeError("option path is invalid");
      c += `; Path=${r.path}`;
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      c += `; Expires=${r.expires.toUTCString()}`;
    }
    if ((r.httpOnly && (c += "; HttpOnly"), r.secure && (c += "; Secure"), r.sameSite))
      switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
          c += "; SameSite=Strict";
          break;
        case "lax":
          c += "; SameSite=Lax";
          break;
        case "strict":
          c += "; SameSite=Strict";
          break;
        case "none":
          c += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return (r.partitioned && (c += "; Partitioned"), c);
  },
  cy = {
    create(a, n, s, r) {
      let l =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      (s && ((l.expires = new Date()), l.expires.setTime(l.expires.getTime() + s * 60 * 1e3)),
        r && (l.domain = r),
        (document.cookie = eA(a, n, l)));
    },
    read(a) {
      const n = `${a}=`,
        s = document.cookie.split(";");
      for (let r = 0; r < s.length; r++) {
        let l = s[r];
        for (; l.charAt(0) === " "; ) l = l.substring(1, l.length);
        if (l.indexOf(n) === 0) return l.substring(n.length, l.length);
      }
      return null;
    },
    remove(a, n) {
      this.create(a, "", -1, n);
    },
  };
var tA = {
    name: "cookie",
    lookup(a) {
      let { lookupCookie: n } = a;
      if (n && typeof document < "u") return cy.read(n) || void 0;
    },
    cacheUserLanguage(a, n) {
      let { lookupCookie: s, cookieMinutes: r, cookieDomain: l, cookieOptions: c } = n;
      s && typeof document < "u" && cy.create(s, a, r, l, c);
    },
  },
  nA = {
    name: "querystring",
    lookup(a) {
      var r;
      let { lookupQuerystring: n } = a,
        s;
      if (typeof window < "u") {
        let { search: l } = window.location;
        !window.location.search &&
          ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 &&
          (l = window.location.hash.substring(window.location.hash.indexOf("?")));
        const d = l.substring(1).split("&");
        for (let g = 0; g < d.length; g++) {
          const h = d[g].indexOf("=");
          h > 0 && d[g].substring(0, h) === n && (s = d[g].substring(h + 1));
        }
      }
      return s;
    },
  },
  iA = {
    name: "hash",
    lookup(a) {
      var l;
      let { lookupHash: n, lookupFromHashIndex: s } = a,
        r;
      if (typeof window < "u") {
        const { hash: c } = window.location;
        if (c && c.length > 2) {
          const d = c.substring(1);
          if (n) {
            const g = d.split("&");
            for (let h = 0; h < g.length; h++) {
              const m = g[h].indexOf("=");
              m > 0 && g[h].substring(0, m) === n && (r = g[h].substring(m + 1));
            }
          }
          if (r) return r;
          if (!r && s > -1) {
            const g = c.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(g)
              ? (l = g[typeof s == "number" ? s : 0]) == null
                ? void 0
                : l.replace("/", "")
              : void 0;
          }
        }
      }
      return r;
    },
  };
let Va = null;
const fy = () => {
  if (Va !== null) return Va;
  try {
    if (((Va = typeof window < "u" && window.localStorage !== null), !Va)) return !1;
    const a = "i18next.translate.boo";
    (window.localStorage.setItem(a, "foo"), window.localStorage.removeItem(a));
  } catch {
    Va = !1;
  }
  return Va;
};
var aA = {
  name: "localStorage",
  lookup(a) {
    let { lookupLocalStorage: n } = a;
    if (n && fy()) return window.localStorage.getItem(n) || void 0;
  },
  cacheUserLanguage(a, n) {
    let { lookupLocalStorage: s } = n;
    s && fy() && window.localStorage.setItem(s, a);
  },
};
let Qa = null;
const dy = () => {
  if (Qa !== null) return Qa;
  try {
    if (((Qa = typeof window < "u" && window.sessionStorage !== null), !Qa)) return !1;
    const a = "i18next.translate.boo";
    (window.sessionStorage.setItem(a, "foo"), window.sessionStorage.removeItem(a));
  } catch {
    Qa = !1;
  }
  return Qa;
};
var sA = {
    name: "sessionStorage",
    lookup(a) {
      let { lookupSessionStorage: n } = a;
      if (n && dy()) return window.sessionStorage.getItem(n) || void 0;
    },
    cacheUserLanguage(a, n) {
      let { lookupSessionStorage: s } = n;
      s && dy() && window.sessionStorage.setItem(s, a);
    },
  },
  oA = {
    name: "navigator",
    lookup(a) {
      const n = [];
      if (typeof navigator < "u") {
        const { languages: s, userLanguage: r, language: l } = navigator;
        if (s) for (let c = 0; c < s.length; c++) n.push(s[c]);
        (r && n.push(r), l && n.push(l));
      }
      return n.length > 0 ? n : void 0;
    },
  },
  rA = {
    name: "htmlTag",
    lookup(a) {
      let { htmlTag: n } = a,
        s;
      const r = n || (typeof document < "u" ? document.documentElement : null);
      return (r && typeof r.getAttribute == "function" && (s = r.getAttribute("lang")), s);
    },
  },
  lA = {
    name: "path",
    lookup(a) {
      var l;
      let { lookupFromPathIndex: n } = a;
      if (typeof window > "u") return;
      const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(s)
        ? (l = s[typeof n == "number" ? n : 0]) == null
          ? void 0
          : l.replace("/", "")
        : void 0;
    },
  },
  uA = {
    name: "subdomain",
    lookup(a) {
      var l, c;
      let { lookupFromSubdomainIndex: n } = a;
      const s = typeof n == "number" ? n + 1 : 1,
        r =
          typeof window < "u" &&
          ((c = (l = window.location) == null ? void 0 : l.hostname) == null
            ? void 0
            : c.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
      if (r) return r[s];
    },
  };
let mv = !1;
try {
  (document.cookie, (mv = !0));
} catch {}
const pv = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
mv || pv.splice(1, 1);
const cA = () => ({
  order: pv,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (a) => a,
});
class yv {
  constructor(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.type = "languageDetector"), (this.detectors = {}), this.init(n, s));
  }
  init() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { languageUtils: {} },
      s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    ((this.services = n),
      (this.options = ZE(s, this.options || {}, cA())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (l) => l.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = r),
      this.addDetector(tA),
      this.addDetector(nA),
      this.addDetector(aA),
      this.addDetector(sA),
      this.addDetector(oA),
      this.addDetector(rA),
      this.addDetector(lA),
      this.addDetector(uA),
      this.addDetector(iA));
  }
  addDetector(n) {
    return ((this.detectors[n.name] = n), this);
  }
  detect() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order,
      s = [];
    return (
      n.forEach((r) => {
        if (this.detectors[r]) {
          let l = this.detectors[r].lookup(this.options);
          (l && typeof l == "string" && (l = [l]), l && (s = s.concat(l)));
        }
      }),
      (s = s
        .filter((r) => r != null && !JE(r))
        .map((r) => this.options.convertDetectedLanguage(r))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? s
        : s.length > 0
          ? s[0]
          : null
    );
  }
  cacheUserLanguage(n) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    s &&
      ((this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(n) > -1) ||
        s.forEach((r) => {
          this.detectors[r] && this.detectors[r].cacheUserLanguage(n, this.options);
        }));
  }
}
yv.type = "languageDetector";
const fA = {
    appName: "FitFast",
    loading: "Loading...",
    error: "Something went wrong",
    retry: "Try again",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    edit: "Edit",
    back: "Back",
    next: "Next",
    submit: "Submit",
    close: "Close",
    search: "Search",
    noResults: "No results found",
    today: "Today",
    backToToday: "Back to Today",
    yesterday: "Yesterday",
    week: "Week",
    month: "Month",
    year: "Year",
    min: "min",
    offline: "You are offline",
  },
  dA = {
    noPlan: {
      title: "No Plan Yet",
      description:
        "Complete your initial assessment to receive your personalized AI-generated plans.",
      action: "Let's get started!",
    },
    plansGenerating: {
      title: "Generating Your Plans...",
      description:
        "Our AI is creating your personalized meal and workout plans. This usually takes a few minutes. This page will update automatically.",
    },
    noMealPlan: {
      title: "No Meal Plan Yet",
      description:
        "Your AI-powered meal plan will appear here after your initial assessment or next check-in.",
      action: "Time to check in!",
    },
    mealPlanGenerating: {
      title: "Generating Your Meal Plan...",
      description:
        "Our AI is creating your personalized meal plan. This usually takes a few minutes. This page will update automatically.",
      timeoutTitle: "Generation Taking Longer Than Expected",
      timeoutDescription:
        "Your meal plan is still being generated. If it doesn't appear soon, please raise a support ticket for assistance.",
    },
    noWorkoutPlan: {
      title: "No Workout Plan Yet",
      description:
        "Your personalized workout plan will appear here after your initial assessment or next check-in.",
      action: "Let's get started!",
    },
    workoutPlanGenerating: {
      title: "Generating Your Workout Plan...",
      description:
        "Our AI is creating your personalized workout plan. This usually takes a few minutes. This page will update automatically.",
    },
    noTickets: {
      title: "No Support Tickets",
      description:
        "Having an issue with your plan? Submit a ticket and your coach will respond as soon as possible.",
      action: "Your coach is here to help",
    },
    noCheckIns: {
      title: "No Check-Ins Yet",
      description:
        "Track your progress by submitting regular check-ins. Your coach uses this data to optimize your plans.",
      action: "Complete your first check-in!",
    },
    noPhotos: {
      title: "No Progress Photos",
      description: "Upload photos during your check-ins to track your visual progress over time.",
      action: "Complete a check-in",
    },
    noFaqs: {
      title: "No Results Found",
      description: "Try a different search term or browse all questions below.",
    },
    noTrackingData: {
      title: "Nothing to Track Today",
      description:
        "You need an active meal or workout plan to start tracking. Complete a check-in to generate your plans.",
      action: "Time to check in!",
    },
  },
  hA = {
    login: "Login",
    logout: "Logout",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot password?",
    signIn: "Sign In",
    signUp: "Sign Up",
    signingIn: "Signing in...",
    magicLink: "Sign in with magic link",
    checkEmail: "Check your email",
    magicLinkSent: "We've sent you a magic link to sign in",
    magicLinkDescription: "We'll send you a link to sign in without a password",
    sendMagicLink: "Send Magic Link",
    sendingMagicLink: "Sending...",
    emailSent: "Email sent!",
    emailSentDescription:
      "Check your email for a magic link to sign in. The link will expire in 1 hour.",
    setPassword: "Set Password",
    confirmPassword: "Confirm Password",
    passwordMismatch: "Passwords don't match",
    invalidEmail: "Please enter a valid email",
    invalidPassword: "Password must be at least 8 characters",
    passwordComplexity:
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    createPasswordDescription: "Create a secure password for your account",
    updatingPassword: "Updating...",
    passwordSet: "Password set successfully!",
    redirectingToDashboard: "Redirecting to dashboard...",
    signInDescription: "Welcome back to FitFast",
    or: "or",
    selectLanguage: "Select Language",
    english: "English",
    arabic: "العربية",
    coachAccountError: "This is a coach account. Please use the admin panel to sign in.",
    accountNotFound: "No account found. Please contact your coach or sign up first.",
    acceptInvite: "Welcome to FitFast",
    createAccount: "Create Account",
    invalidInviteLink: "Invalid invitation link. Please contact your coach.",
    inviteExpired: "This invitation link is invalid or has expired. Please contact your coach.",
    accountCreationFailed: "Account creation failed. Please try again or contact your coach.",
    passwordsMustMatch: "Passwords don't match",
    brandTagline: "Your AI-Powered Fitness Coach",
    validEmail: "Please enter a valid email",
    passwordMinLength: "Password must be at least 6 characters",
    invalidCredentials: "Invalid email or password",
    verificationRequired: "Verification code is required",
    passwordRequirements: "Password must be at least 8 characters",
    passwordStrength: { weak: "Weak", medium: "Medium", strong: "Strong", label: "Strength" },
    emailNotFound: "Email not found. Please start the password reset process again.",
    unexpectedError: "An unexpected error occurred. Please try again.",
    loginMessages: {
      session_expired: "Your session has expired. Please log in again.",
      account_pending: "Your account is pending approval.",
      password_changed: "Password changed successfully. Please log in.",
      account_inactive: "Your account is inactive. Please contact support.",
    },
  },
  gA = {
    dashboard: "Dashboard",
    mealPlan: "Meal Plan",
    workoutPlan: "Workout Plan",
    checkIn: "Check-in",
    tracking: "Daily Tracking",
    progress: "Progress",
    tickets: "Support",
    faq: "FAQ",
    settings: "Settings",
    more: "More",
  },
  mA = {
    welcome: "Welcome back",
    todayOverview: "Today's Overview",
    upcomingCheckIn: "Upcoming Check-in",
    daysUntilCheckIn: "days until your next check-in",
    quickActions: "Quick Actions",
    recentActivity: "Recent Activity",
    mealProgress: "Meal Progress",
    workoutProgress: "Workout Progress",
    completedToday: "completed today",
    viewPlan: "View Plan",
    startWorkout: "Start Workout",
    logMeal: "Log Meal",
    motivational: {
      0: "Keep pushing, {name}!",
      1: "You're on a roll, {name}!",
      2: "Stay consistent, {name}!",
      3: "Every rep counts, {name}!",
      4: "You've got this, {name}!",
      5: "Strong effort, {name}!",
      6: "One day at a time, {name}!",
    },
    coachMessageBanner: "Your coach responded to your ticket",
    viewTicket: "View",
    planDay: "Day {current} of {total}",
    planProgress: "Plan Progress",
    todaysStats: "Today's Stats",
    todaysMeals: "Today's Meals",
    todaysWorkout: "Today's Workout",
    noMealsToday: "No meals for today",
    restDayOrNoWorkout: "Rest day or no workout today",
    totalCalories: "Total Calories",
    mealCount: "{count} meals",
    exerciseCount: "{count} exercises",
    estDuration: "Est. {duration}",
  },
  pA = {
    title: "Meal Plan",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snack: "Snack",
    snacks: "Snacks",
    calories: "Calories",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    ingredients: "Ingredients",
    instructions: "Instructions",
    alternatives: "Alternatives",
    details: "Details",
    swap: "Swap",
    swapFailed: "Failed to swap meal. Please try again.",
    markComplete: "Mark as Complete",
    completed: "Completed",
    todaysMeals: "Today's Meals",
    weeklyOverview: "Weekly Overview",
    nutritionSummary: "Nutrition Summary",
    noActivePlan: "No Active Meal Plan",
    getStarted: "Get started with your personalized meal plan",
    generatePlan: "Generate Meal Plan",
    generating: "Generating...",
    generateDescription: "Generate your personalized meal plan based on your goals and preferences",
    newPlan: "New Plan",
    dailyTotals: "Daily Totals",
    coachNotes: "Coach Notes",
    kcal: "KCAL",
    aiGenerating: "AI is crafting your meal plan...",
    generatingDay: "Generating day {day}...",
    generatingDayDescription:
      "Your meals for this day are being prepared. Other days are ready to browse.",
    calorieExplanation:
      "AI aims for around {calories} kcal/day ({protein}g protein) based on your profile and {trainingDays} training days/week. Actual meals may vary slightly.",
    dayLabel: "Day {n}",
    translating: "Translating your meal plan...",
    translatingDescription: "Your plan will update automatically in a few seconds.",
    translationFailed: "Translation failed",
    translationFailedDescription:
      "Could not translate your meal plan. You can retry or view in the original language.",
    retry: "Retry",
  },
  yA = {
    title: "Workout Plan",
    exercise: "Exercise",
    exercises: "Exercises",
    sets: "Sets",
    reps: "Reps",
    rest: "Rest",
    duration: "Duration",
    durationMin: "Duration (min)",
    warmup: "Warm-up",
    cooldown: "Cool-down",
    startWorkout: "Start Workout",
    completeWorkout: "Complete Workout",
    skipExercise: "Skip",
    nextExercise: "Next Exercise",
    previousExercise: "Previous",
    restDay: "Rest Day",
    todaysWorkout: "Today's Workout",
    weeklySchedule: "Weekly Schedule",
    notes: "Notes",
    targetMuscles: "Target Muscles",
    noActivePlan: "No Active Workout Plan",
    getStarted: "Get started with your personalized workout plan",
    generatePlan: "Generate Workout Plan",
    generating: "Generating...",
    generateDescription:
      "Generate your personalized workout plan based on your goals and fitness level",
    newPlan: "New Plan",
    timeToRecover: "Time to Recover",
    restDescription:
      "Rest and recovery are essential for muscle growth. Take this day to relax and let your body recover.",
    progressionNotes: "Progression Notes",
    safetyTips: "Safety Tips",
    aiGenerating: "AI is crafting your workout plan...",
    trainingSplit: "Training Split",
    translating: "Translating your workout plan...",
    translatingDescription: "Your plan will update automatically in a few seconds.",
    translationFailed: "Translation failed",
    translationFailedDescription:
      "Could not translate your workout plan. You can retry or view in the original language.",
    retry: "Retry",
    swapExercise: "Swap Exercise",
    swapping: "Swapping...",
    restDayTitle: "Rest & Recovery",
    restDayRecovery: "Your muscles are recovering after {workout}",
    nextWorkout: "Next workout",
    exerciseGuide: "Exercise Guide",
    suggestedWeight: "Suggested: {weight}",
    cardioFinisher: "Cardio Finisher",
    cardioFinisherDuration: "{duration} min · {intensity}",
    activeRecovery: "Active Recovery",
    supersetWith: "Superset with {exercise}",
    phaseFoundation: "Foundation",
    phaseBuild: "Build",
    phasePeak: "Peak",
    phaseDeload: "Deload",
    phaseRetest: "Retest",
  },
  vA = {
    title: "Check-in",
    subtitle: "Let us know how you're doing",
    stepOf: "Step {current} of {total}",
    weight: "Current Weight",
    measurements: "Body Measurements",
    chest: "Chest",
    waist: "Waist",
    hips: "Hips",
    arms: "Arms",
    thighs: "Thighs",
    performance: "Workout Performance",
    energy: "Energy Level",
    sleep: "Sleep Quality",
    adherence: "Dietary Adherence",
    injuries: "Any New Injuries?",
    photos: "Progress Photos",
    uploadPhotos: "Upload Photos",
    additionalNotes: "Additional Notes",
    submitCheckIn: "Submit Check-in",
    checkInSuccess: "Check-in submitted successfully!",
    newPlanGenerated: "Your new plans are being generated",
    planGenerationWarning:
      "Check-in saved! Plan generation is taking longer than expected. You'll see your new plans shortly.",
    planGenerationFailed:
      "Check-in saved, but we couldn't generate your plans right now. Your coach has been notified.",
    optional: "Optional",
    review: "Review Your Check-in",
    wellbeingMetrics: "Wellbeing Metrics",
    adherenceRating: "Adherence Rating",
    addMorePhotos: "Add More Photos",
    submitting: "Submitting...",
    allIn: "All in",
    maxPhotos: "Optional, max {maxPhotos} photos, {maxFileMB}MB each",
    fileTypes: "PNG, JPG up to {maxFileMB}MB",
    uploaded: "uploaded",
    invalidFile: "Invalid file",
    invalidFileDescription: "Please upload images under {maxFileMB}MB",
    authRequired: "Authentication required",
    authRequiredDescription: "Please sign in to submit check-in",
    submissionFailed: "Submission failed",
    tryAgain: "Please try again",
    checkInLocked: "Check-in Locked",
    nextCheckInAvailable: "Next Check-in Available",
    days: "Days",
    lockReason:
      "Check-ins are scheduled every {days} days to ensure optimal progress tracking and AI plan generation. Use this time to follow your current meal and workout plans.",
    steps: {
      weight: "Weight & Measurements",
      fitness: "Fitness Metrics",
      dietary: "Dietary Adherence",
      photos: "Progress Photos",
      review: "Review & Submit",
    },
    reviewBody: "Body",
    reviewFitness: "Fitness",
    reviewDiet: "Diet",
    dietNotes: "Diet Notes",
    none: "None",
    photosUploaded: "{count} photos uploaded",
    noPhotos: "No photos",
    manualMeasurements: "Body Measurements",
    recommended: "Recommended",
    inBodyUpload: "InBody Upload",
    uploadInBody: "Upload InBody Result",
    uploadInBodyDescription:
      "Take a photo or upload your InBody result sheet for automatic body composition extraction",
    inBodyRequired: "Please upload your InBody result sheet",
    measurementsRequired: "Measurements required",
    measurementsRequiredDescription:
      "Please enter at least one body measurement (chest, waist, hips, arms, or thighs) or switch to InBody upload",
    removeFile: "Remove file",
    removePhoto: "Remove photo",
    inBodyResult: "InBody result",
    inBodyProcessing: "Processing InBody data...",
    inBodyExtracted: "InBody data extracted",
    aiExtracted: "AI-extracted",
    photoFront: "Front",
    photoBack: "Back",
    photoSide: "Side",
    tapToUpload: "Tap to upload",
    plansGenerateInBackground:
      "Your plans will be generated in the background. You'll be notified when ready.",
    placeholders: {
      performance: "Describe your workout performance, improvements, or challenges...",
      dietNotes: "Any challenges with your meal plan? Foods you enjoyed or disliked?",
      injuries: "Describe any new injuries, pain, or discomfort...",
      notes: "Share any other thoughts, questions, or concerns...",
      photoUpload: "Click to upload photos",
    },
    cyclePhase: "Current Cycle Phase",
    cyclePhaseDescription: "Helps us adjust your plan intensity",
    cyclePhaseOptions: {
      menstrual: "Menstrual (days 1-5)",
      follicular: "Follicular (days 6-13)",
      ovulatory: "Ovulatory (days 14-16)",
      luteal: "Luteal (days 17-28)",
      notTracking: "Not tracking",
    },
    validation: {
      weightPositive: "Weight must be positive",
      weightTooLow: "Weight seems too low",
      weightTooHigh: "Weight seems too high",
      workoutPerformanceMin: "Please provide at least 10 characters about your workout performance",
      ratingRange: "Must be between 1 and 10",
      measurementRange: "Measurement must be between 10 and 500 cm",
    },
  },
  SA = {
    title: "Daily Tracking",
    dailyReflection: "Daily Reflection",
    howWasYourDay: "How was your day?",
    writeReflection: "Write your thoughts...",
    mealTracking: "Meal Tracking",
    workoutTracking: "Workout Tracking",
    streakDays: "day streak",
    keepItUp: "Keep it up!",
    subtitle: "Track your daily meals and workouts",
    selectDate: "Select Date",
    todaysProgress: "Today's Progress",
    noMealsPlanned: "No meals planned for this day",
    addNotes: "Add notes (optional)...",
    noWorkoutPlanned: "No workout planned for this day",
    workoutCompleted: "Workout Completed",
    workoutNotCompleted: "Workout Not Completed",
    saveReflection: "Save Reflection",
    saving: "Saving...",
    of: "of",
    mealsCompleted: "meals completed",
    addWorkoutNotes: "Add workout notes (optional)...",
    takeTimeToRecover: "Take time to recover and prepare for your next workout",
    complete: "complete",
    markComplete: "Mark as complete",
    markIncomplete: "Mark as incomplete",
    mealCompleted: "Meal marked as complete",
    mealUncompleted: "Meal marked as incomplete",
    workoutMarkedDone: "Workout marked as done",
    workoutMarkedUndone: "Workout marked as undone",
    saveFailed: "Failed to save. Please try again.",
    reflectionSaved: "Reflection saved",
    allComplete: "All tasks completed for today! Great job!",
    exercisesDone: "exercises done",
    sets: "sets",
    setLabel: "Set",
    weight: "Weight",
    reps: "reps",
    lastWeight: "Last",
    lastSession: "Last time",
    quickComplete: "Quick Complete All",
    undoQuickComplete: "Undo Quick Complete",
    viewHistory: "View exercise history",
    exerciseHistory: "Exercise History",
    pastSessions: "past sessions",
    noHistoryYet: "No history yet",
    startLogging: "Start logging sets to build your history",
    personalBest: "Personal Best",
    improving: "Up",
    decreased: "Down",
    same: "Same",
  },
  bA = {
    title: "Your Progress",
    weightHistory: "Weight History",
    measurementHistory: "Measurement History",
    adherenceHistory: "Adherence History",
    photoComparison: "Photo Comparison",
    startDate: "Start Date",
    currentDate: "Current Date",
    totalChange: "Total Change",
    weeklyAverage: "Weekly Average",
    description: "Track your fitness journey",
    days30: "30 Days",
    days90: "90 Days",
    all: "All",
    startWeight: "Start Weight",
    currentWeight: "Current Weight",
    checkIns: "Check-ins",
    totalRecorded: "Total Recorded",
    charts: "Charts",
    photos: "Photos",
    history: "History",
    weightTrend: "Weight Trend",
    weightTrendDescription: "Your weight progress over time",
    noWeightData: "No weight data available",
    mealAdherence: "Meal Adherence",
    workoutAdherence: "Workout Adherence",
    progressPhotos: "Progress Photos",
    progressPhotosDescription: "Visual timeline of your transformation",
    noPhotos: "No progress photos yet",
    noPhotosHint: "Add photos during your check-ins",
    checkInHistory: "Check-in History",
    checkInHistoryDescription: "All your recorded check-ins",
    noCheckIns: "No check-ins recorded yet",
    progressPhoto: "Progress Photo",
    close: "Close",
    loading: "Loading...",
    bodyFatPercent: "Body Fat %",
    leanMass: "Lean Mass",
    skeletalMuscleMass: "Skeletal Muscle Mass",
    bmi: "BMI",
    measurementTrends: "Measurement Trends",
    measurementTrendsDescription: "Body measurements over time",
    adherence: "Adherence",
    wellnessTrends: "Wellness Trends",
    wellnessTrendsDescription: "Sleep quality and energy levels over time",
    sleepQuality: "Sleep Quality",
    energyLevel: "Energy Level",
    dietaryAdherence: "Dietary Adherence",
    adherenceTrend: "Dietary Adherence Trend",
    adherenceTrendDescription: "Your dietary adherence score over time",
    cyclePhase_menstrual: "Menstrual",
    cyclePhase_follicular: "Follicular",
    cyclePhase_ovulatory: "Ovulatory",
    cyclePhase_luteal: "Luteal",
    kgPerWeek: "kg/week",
    weekComparison: "Week-over-Week",
    thisWeek: "This Week",
    lastWeek: "Last Week",
    avgWeight: "Avg Weight",
    avgEnergy: "Avg Energy",
    avgSleep: "Avg Sleep",
    avgAdherence: "Avg Adherence",
    bodyComposition: "Body Composition",
    bodyCompositionDescription: "InBody scan trends over time",
    beforeAfter: "Before & After",
    before: "Before",
    after: "After",
    slideToCompare: "Slide to compare",
    needTwoPhotos: "Upload at least 2 progress photos during check-ins to see a comparison",
    goalLine: "Goal",
  },
  RA = {
    title: "Support",
    newTicket: "New Ticket",
    myTickets: "My Tickets",
    subject: "Subject",
    category: "Category",
    description: "Description",
    categories: {
      mealIssue: "Meal Plan Issue",
      workoutIssue: "Workout Plan Issue",
      technical: "Technical Issue",
      bugReport: "Bug Report",
      other: "Other",
    },
    status: { open: "Open", coachResponded: "Coach Responded", closed: "Closed" },
    submitTicket: "Submit Ticket",
    ticketSubmitted: "Ticket submitted successfully",
    noTickets: "You haven't submitted any tickets yet",
    screenshot: "Screenshot",
    coachResponse: "Coach Response",
    subjectPlaceholder: "Brief description of your issue",
    descriptionPlaceholder: "Describe your issue in detail...",
    uploadHint: "Click to upload screenshot",
    noTicketsTitle: "No Tickets Yet",
    backToTickets: "Back to Tickets",
    you: "You",
    coach: "Coach",
    viewScreenshot: "View Screenshot",
    replyToTicket: "Reply",
    replyPlaceholder: "Type your reply...",
    sendReply: "Send Reply",
    sending: "Sending...",
    clientReply: "Client Reply",
    ticketClosed: "This ticket has been closed",
    ticketNotFound: "Ticket not found",
    fetchError: "Failed to load ticket",
    chat: { today: "Today", yesterday: "Yesterday" },
    lastMessage: "Last message",
    uploadFailed: "Screenshot upload failed",
    uploadFailedDescription: "Could not upload the screenshot. Please try again.",
    subjectMinLength: "Subject must be at least 3 characters",
    subjectMaxLength: "Subject must be under 100 characters",
    descriptionMaxLength: "Description must be under 3000 characters",
    submitFailed: "Failed to submit ticket. Please try again.",
    optional: "optional",
  },
  wA = {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to commonly asked questions",
    searchPlaceholder: "Search questions...",
    noResults: "No matching questions found",
    noResultsHint: "Try a different search term",
    stillNeedHelp: "Still need help?",
    stillNeedHelpHint: "Can't find what you're looking for? Contact support.",
    contactSupport: "Contact Support",
    questions: {
      checkInFrequency: {
        q: "How often should I check in?",
        a: "You should submit a check-in every {days} days. This allows your coach to track your progress and adjust your meal and workout plans accordingly.",
      },
      changeMeals: {
        q: "Can I change meals in my meal plan?",
        a: "Yes! Each meal comes with alternative options that you can swap. If you have specific dietary requirements, please submit a support ticket and your coach will help you.",
      },
      missWorkout: {
        q: "What if I miss a workout?",
        a: "It's okay to miss a workout occasionally. Just try to stay consistent. If you need to adjust your schedule, mention it in your next check-in.",
      },
      trackProgress: {
        q: "How do I track my progress?",
        a: "You can view your progress in the Progress section. It shows your weight history, measurements, and photo comparisons over time.",
      },
      newPlanTiming: {
        q: "When will I receive my new plan?",
        a: "After submitting a check-in, your AI-generated meal and workout plans are typically ready within a few minutes. You'll see them in your respective sections.",
      },
      contactCoach: {
        q: "How do I contact my coach?",
        a: "You can reach your coach by submitting a support ticket. Select the appropriate category and describe your question or concern. Your coach will respond as soon as possible.",
      },
      paymentMethods: {
        q: "What payment methods are accepted?",
        a: "We accept InstaPay transfers. After making a payment, upload a screenshot of the transaction in your signup or renewal request.",
      },
      changeLanguage: {
        q: "Can I change my language preference?",
        a: "Yes! You can switch between English and Arabic in the Settings page. Your meal and workout plans will be generated in your preferred language.",
      },
    },
  },
  TA = {
    title: "Settings",
    profile: "Profile",
    fullName: "Full Name",
    phone: "Phone Number",
    language: "Language",
    notifications: "Notifications",
    enableNotifications: "Enable Notifications",
    reminderTime: "Daily Reminder Time",
    appearance: "Appearance",
    darkMode: "Dark Mode",
    account: "Account",
    changePassword: "Change Password",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    passwordChanged: "Password changed successfully",
    passwordMismatch: "Passwords don't match",
    passwordTooShort: "Password must be at least 8 characters",
    wrongPassword: "Current password is incorrect",
    planDetails: "Plan Details",
    planTier: "Plan Tier",
    planExpiry: "Plan Expiry",
    daysRemaining: "Days Remaining",
    subtitle: "Manage your account settings and preferences",
    notificationsDescription: "Receive reminders for meals and workouts",
    notificationsDenied: "Notifications blocked in browser settings",
    notificationsUnsupported: "Notifications not supported on this device",
    notificationsUnavailableTitle: "Notifications Unavailable",
    notificationsUnavailableDescription:
      "Push notifications could not be initialized. This may be caused by an ad blocker or browser settings.",
    darkModeDescription: "Toggle dark mode on or off",
    email: "Email",
    saveChanges: "Save Changes",
    saveSuccess: "Settings saved successfully",
    signOut: "Sign Out",
    status: "Status",
    planStart: "Started",
    planTiers: {
      monthly: "Monthly",
      quarterly: "Quarterly",
      "3_months": "3 Months",
      "6_months": "6 Months",
      "12_months": "12 Months",
    },
    statuses: {
      active: "Active",
      pending_approval: "Pending",
      inactive: "Inactive",
      expired: "Expired",
    },
    noPlan: "No plan assigned",
    namePlaceholder: "e.g. John Doe",
    phonePlaceholder: "e.g. 01xxxxxxxxx",
    closeDialog: "Close dialog",
    errors: { saveFailed: "Failed to save. Please try again." },
    assessment: {
      myAssessment: "My Assessment",
      myAssessmentDesc: "Update your fitness profile",
      backToSettings: "Back to Settings",
      goalsTitle: "Goals & Fitness Level",
      equipmentTitle: "Equipment Access",
      scheduleTitle: "Training Schedule",
      dietaryTitle: "Dietary Preferences",
      measurementsTitle: "Body Measurements",
      medicalTitle: "Medical & Health",
      primaryGoal: "Primary Goal",
      activityLevel: "Activity Level",
      experienceLevel: "Experience Level",
      equipment: "Equipment",
      mealsPerDay: "Meals Per Day",
      trainingDays: "Training Days",
      sessionDuration: "Session Duration",
      preferredTime: "Preferred Time",
      foodPreferences: "Food Preferences",
      allergies: "Allergies",
      dietaryRestrictions: "Dietary Restrictions",
      currentWeight: "Current Weight",
      height: "Height",
      age: "Age",
      chest: "Chest",
      waist: "Waist",
      hips: "Hips",
      arms: "Arms",
      thighs: "Thighs",
      medicalConditions: "Medical Conditions",
      injuries: "Injuries",
      femaleHealth: "Female Health",
      menstrualStatus: "Menstrual Status",
      pregnancy: "Pregnant",
      breastfeeding: "Breastfeeding",
      hormonalMedication: "Hormonal Medication",
      save: "Save Changes",
      saving: "Saving...",
      saved: "Changes saved successfully",
      noChanges: "No changes to save",
      safetyWarning: "Safety Notice",
      safetyWarningDesc:
        "Changes to medical or health information may significantly affect your exercise and nutrition plans. Are you sure you want to save these changes?",
      confirm: "Yes, Save Changes",
      cancel: "Cancel",
      planUpdateNote: "Your updated information will be used when your next plan is generated.",
    },
  },
  _A = {
    welcome: {
      title: "Welcome to FitFast",
      subtitle: "Your personalized fitness journey starts here",
      getStarted: "Get Started",
      features: {
        mealPlans: "Personalized Meal Plans",
        mealPlansDesc: "AI-generated meal plans tailored to your goals and preferences",
        workoutPlans: "Custom Workout Plans",
        workoutPlansDesc: "Exercise routines designed for your fitness level and schedule",
        progressTracking: "Progress Tracking",
        progressTrackingDesc: "Monitor your weight, measurements, and achievements over time",
        coachSupport: "Coach Support",
        coachSupportDesc: "Direct communication with your coach through the ticket system",
      },
      completeAssessment: "Complete your assessment to receive your personalized plans",
      remember: "Remember",
      journeyMessage: "Your journey to a better you starts now",
    },
    assessment: {
      title: "Initial Assessment",
      subtitle: "Help us create your personalized plan",
      goals: "What are your fitness goals?",
      primaryGoalTitle: "What's your main goal?",
      primaryGoalDesc: "Pick one — this drives your nutrition and training plan",
      secondaryFocusTitle: "Anything else you'd like to focus on?",
      secondaryFocusDesc: "Optional — pick up to 2",
      primaryGoals: {
        lose_fat: "Lose Fat",
        lose_fat_desc: "Reduce body fat while preserving muscle",
        build_muscle: "Build Muscle",
        build_muscle_desc: "Gain muscle mass and size",
        body_recomposition: "Body Recomposition",
        body_recomposition_desc: "Lose fat and build muscle simultaneously — best for beginners",
        get_stronger: "Get Stronger",
        get_stronger_desc: "Increase strength and lifting performance",
        improve_fitness: "Improve Overall Fitness",
        improve_fitness_desc: "Balanced health, energy, and body composition",
      },
      secondaryFocuses: {
        improve_endurance: "Improve Endurance",
        improve_flexibility: "Improve Flexibility",
        boost_energy: "Boost Energy & Recovery",
        build_habit: "Build A Consistent Habit",
      },
      currentWeight: "Current Weight",
      height: "Height",
      schedule: "Weekly Schedule Availability",
      scheduleTitle: "Workout Days",
      scheduleDesc: "Select the days you can train",
      scheduleHint:
        "Based on your goal and experience, we recommend {recommended} days per week (min {min}, max {max}). Recovery days are essential for progress.",
      daysSelected: "{count} days selected (min {min}, max {max})",
      sessionDurationTitle: "Session Duration",
      sessionDurationDesc: "How long can you train per session?",
      sessionDurations: { 30: "30 min", 45: "45 min", 60: "60 min", 90: "90+ min" },
      trainingTimeTitle: "Preferred Training Time",
      trainingTimeDesc: "Optional — helps optimize your meal timing",
      trainingTimes: {
        morning: "Morning",
        afternoon: "Afternoon",
        evening: "Evening",
        varies: "Varies",
      },
      days: { Mon: "Mon", Tue: "Tue", Wed: "Wed", Thu: "Thu", Fri: "Fri", Sat: "Sat", Sun: "Sun" },
      cuisineTitle: "Cuisine Preferences",
      cuisineDesc:
        "What kind of food do you enjoy? This helps us create meals you'll actually love",
      cuisines: {
        mediterranean: "Mediterranean",
        middle_eastern: "Middle Eastern",
        asian: "Asian",
        western: "Western",
        indian: "Indian",
        latin: "Latin American",
        mixed: "No Preference",
      },
      mealsPerDayTitle: "Meals Per Day",
      mealsPerDayDesc: "How do you prefer to eat throughout the day?",
      mealsPerDayOptions: {
        "3_meals": "3 Meals",
        "3_plus_snacks": "3 Meals + Snacks",
        "5_small": "5 Small Meals",
        flexible: "Flexible",
      },
      foodPreferences: "Food Preferences",
      allergiesTitle: "Food Allergies",
      allergies: {
        none: "None",
        nuts: "Nuts",
        dairy: "Dairy",
        eggs: "Eggs",
        shellfish: "Shellfish",
        gluten: "Gluten",
        soy: "Soy",
        fish: "Fish",
        lactose: "Lactose",
        other: "Other",
      },
      restrictionsTitle: "Dietary Restrictions",
      restrictions: {
        none: "None",
        halal: "Halal",
        kosher: "Kosher",
        no_pork: "No Pork",
        no_beef: "No Beef",
        vegetarian: "Vegetarian",
        vegan: "Vegan",
        other: "Other",
      },
      medicalConditions: "Medical Conditions",
      medicalNotesTitle: "Medical Notes",
      medicalNotesDescription: "Optional: injuries, conditions, or limitations",
      medicalNotesPlaceholder: "E.g., knee injury, back pain, diabetes, high blood pressure...",
      femaleHealth: {
        title: "Female Health",
        description:
          "Helps us tailor your nutrition and workout plans to your body's needs. All fields are optional.",
        menstrualStatus: "Menstrual Cycle",
        regular: "Regular",
        irregular: "Irregular",
        amenorrhea: "Absent",
        postmenopausal: "Postmenopausal",
        preferNotSay: "Prefer not to say",
        pregnant: "Are you currently pregnant?",
        breastfeeding: "Are you currently breastfeeding?",
        yes: "Yes",
        no: "No",
        hormonalMedication: "Hormonal medication (optional)",
        hormonalMedicationPlaceholder: "e.g., birth control type, HRT",
        notes: "Additional notes (optional)",
        notesPlaceholder: "Any other health details you'd like us to know",
        pregnancyWarning:
          "Please consult your doctor before following any exercise or diet plan during pregnancy.",
      },
      injuries: "Current Injuries",
      exerciseHistory: "Exercise History",
      basicInfo: "Basic Information",
      currentWeightLabel: "Current Weight",
      heightLabel: "Height",
      ageLabel: "Age",
      genderLabel: "Gender",
      genders: { male: "Male", female: "Female" },
      experienceLevel: "Experience Level",
      levels: {
        beginner: "Beginner",
        beginner_desc: "New to fitness",
        intermediate: "Intermediate",
        intermediate_desc: "1-2 years",
        advanced: "Advanced",
        advanced_desc: "3+ years",
      },
      equipmentTitle: "Available Equipment",
      equipmentOptions: {
        full_gym: "Full Gym Access",
        home_basic: "Home (Basic: Dumbbells, Mat)",
        home_advanced: "Home (Advanced: Bench, Barbell)",
        bodyweight: "Bodyweight Only",
        resistance_bands: "Resistance Bands",
      },
      otherOption: "Other",
      specifyPlaceholder: "Please specify...",
      steps: {
        goals: "Goals",
        bodyInfo: "Body Info",
        schedule: "Schedule",
        diet: "Diet",
        measurements: "Measurements",
        medical: "Medical",
      },
      measurementsTitle: "Body Measurements",
      measurementsDesc: "Enter your body measurements or upload an InBody assessment",
      manualMeasurements: "Manual Input",
      inBodyUpload: "InBody Upload",
      recommended: "recommended",
      manualRecommended:
        "Manual measurements are recommended for best results, even if you upload an InBody sheet.",
      chest: "Chest",
      waist: "Waist",
      hips: "Hips",
      arms: "Arms",
      thighs: "Thighs",
      allInCm: "All measurements in cm",
      uploadInBody: "Tap to upload InBody result",
      uploadInBodyDescription: "Upload a photo of your InBody assessment result sheet",
      inBodyResult: "InBody result",
      removeFile: "Remove file",
      fileTypes: "Image files only, max {maxFileMB}MB",
      inBodyFileRequired: "Please upload your InBody result sheet",
      completeAssessment: "Complete Assessment",
      submitting: "Creating your plan...",
      generatingDescription:
        "We're generating your personalized meal and workout plans. This may take a moment.",
      activityLevelTitle: "Daily Activity Level",
      activityLevelDesc: "How active is your daily life outside of exercise?",
      activityLevels: {
        sedentary: "Sedentary",
        sedentary_desc: "Desk job, little daily movement",
        lightly_active: "Lightly Active",
        lightly_active_desc: "Some walking, light daily activity",
        moderately_active: "Moderately Active",
        moderately_active_desc: "Active job or regular movement throughout day",
        very_active: "Very Active",
        very_active_desc: "Physical labor or very active lifestyle",
      },
    },
    pending: {
      title: "Account Pending Approval",
      subtitle: "Your coach is reviewing your application",
      message: "We'll notify you once your account is approved",
      currentStatus: "Current Status",
      checkStatus: "Check Status",
      approvalTime:
        "Approval typically takes 24-48 hours. You'll receive an email notification when approved.",
      stepSignupComplete: "Signup Complete",
      stepSignupCompleteDesc: "Your account has been created successfully",
      stepUnderReview: "Under Review",
      stepUnderReviewDesc: "Your coach is reviewing your application",
      stepApprovalNotification: "Approval Notification",
      stepApprovalNotificationDesc: "You'll receive an email when your account is approved",
      infoLabel: "Info",
      statuses: {
        pending_approval: "Pending Approval",
        active: "Active",
        inactive: "Inactive",
        expired: "Expired",
      },
    },
  },
  EA = { kg: "kg", lb: "lb", cm: "cm", inch: "in", kcal: "kcal", g: "g", min: "min", sec: "sec" },
  AA = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
    sun: "Sun",
  },
  xA = {
    name: "FITFAST",
    tagline: "AI-POWERED FITNESS COACHING",
    marquee: "FITFAST • AI-POWERED FITNESS • TRANSFORM YOUR BODY • TRACK YOUR PROGRESS",
    copyright: "ALL RIGHTS RESERVED",
  },
  CA = {
    installTitle: "Install FitFast",
    installDescription: "Add FitFast to your home screen",
    installButton: "Install",
    dismissButton: "Not Now",
    manualTitle: "Install FitFast",
    manualDescription:
      "Get the full app experience by adding FitFast to your home screen. It only takes a few seconds.",
    iosSafariStep1: "Tap the Share button",
    iosSafariStep1Hint: "At the bottom of your screen",
    iosSafariStep2: 'Tap "Add to Home Screen"',
    iosSafariStep2Hint: "Scroll down in the share menu",
    iosSafariStep3: 'Tap "Add" to confirm',
    iosOtherStep1: "Open this page in Safari",
    iosOtherStep1Hint: "Only Safari can add apps to your home screen",
    iosOtherStep2: "Tap the Share button",
    iosOtherStep2Hint: "At the bottom of Safari",
    iosOtherStep3: 'Tap "Add to Home Screen"',
    iosOtherStep3Hint: "Scroll down in the share menu",
    iosOtherStep4: 'Tap "Add" to confirm',
    androidStep1: "Open the browser menu",
    androidStep1Hint: "Tap the three dots at the top right",
    androidStep2: 'Tap "Install app" or "Add to Home Screen"',
    androidStep2Hint: "The option name varies by browser",
    androidStep3: 'Tap "Install" to confirm',
  },
  OA = {
    networkError: "Network error. Please check your connection.",
    serverError: "Server error. Please try again later.",
    unauthorized: "Please log in to continue.",
    notFound: "Page not found",
    validation: "Please check your input",
    uploadFailed: "Upload failed. Please try again.",
    goalRequired: "Please select at least one fitness goal",
    weightHeightRequired: "Please enter your weight and height",
    ageGenderRequired: "Please enter your age and select your gender",
    weightOutOfRange: "Weight must be between 30 and 300 kg",
    heightOutOfRange: "Height must be between 100 and 250 cm",
    ageOutOfRange: "Age must be between 13 and 120 years",
    activityLevelRequired: "Please select your activity level",
    experienceLevelRequired: "Please select your experience level",
    workoutDaysRequired: "Please select at least one workout day",
    workoutDaysMin: "Please select at least {min} workout days for meaningful results",
    sessionDurationRequired: "Please select your session duration",
    equipmentRequired: "Please select your available equipment",
    equipmentSpecify: "Please specify your equipment",
    inBodyFileRequired: "Please upload your InBody result sheet",
    signInRequired: "Please sign in to continue",
    unexpectedError: "An unexpected error occurred",
    somethingWentWrong:
      "Something went wrong. Our team has been notified and we're working to fix it.",
    errorId: "Error ID",
    tryAgain: "Try again",
    replyFailed: "Failed to send reply. Please try again.",
    saveFailed: "Failed to save. Please try again.",
    pageNotFound: "Page Not Found",
    pageNotFoundDescription: "The page you're looking for doesn't exist or has been moved.",
    goHome: "Go Home",
  },
  MA = {
    banner: {
      expiresIn: "Your subscription expires in {days} days.",
      expiresInOne: "Your subscription expires tomorrow!",
      renewNow: "Renew now",
    },
    expired: {
      title: "Subscription Expired",
      subtitle: "Your subscription has ended",
      dataWarning:
        "Your data will be retained for {days} days. After that, it will be permanently deleted.",
      renewButton: "Renew Subscription",
      logoutButton: "Log Out",
      contactCoach: "Contact your coach for help",
    },
    renewal: {
      title: "Renew Your Subscription",
      selectPlan: "Select a Plan",
      paymentMethod: "Payment Method",
      uploadScreenshot: "Upload Payment Screenshot",
      uploadHint: "Upload a screenshot of your payment transfer",
      submitRenewal: "Submit Renewal Request",
      submitting: "Submitting...",
      pendingTitle: "Renewal Submitted!",
      pendingMessage:
        "Your renewal request has been submitted. Your coach will review it shortly. You'll be redirected to the dashboard once approved.",
      alreadyPending:
        "You already have a pending renewal request. Your coach will review it shortly.",
      selectPlanFirst: "Please select a plan",
      transferReferenceNumber: "Transfer Reference Number",
      transferReferenceNumberPlaceholder: "Enter the transfer reference number",
      transferAmount: "Transfer Amount",
      transferAmountPlaceholder: "e.g. 2500",
      refRequired: "Transfer reference number is required",
      amountRequired: "Transfer amount is required",
      screenshotRequired: "Payment screenshot is required",
      perMonth: "/month",
      perQuarter: "/quarter",
      popular: "Popular",
    },
  },
  kA = {
    nameMinLength: "Name must be at least 2 characters",
    nameMaxLength: "Name must be under 100 characters",
    invalidPhone: "Invalid phone number format",
    invalidEmail: "Please enter a valid email",
    passwordMinLength: "Password must be at least 6 characters",
  },
  LA = {
    checkIn: {
      title: "CHECK-IN ERROR",
      description: "We couldn't load the check-in form. Please try again.",
      retry: "TRY AGAIN",
    },
    settings: {
      title: "SETTINGS ERROR",
      description: "We couldn't load your settings. Please try again.",
      retry: "TRY AGAIN",
    },
    tickets: {
      title: "TICKETS ERROR",
      description: "We couldn't load your tickets. Please try again.",
      retry: "TRY AGAIN",
    },
    progress: {
      title: "PROGRESS ERROR",
      description: "We couldn't load your progress data. Please try again.",
      retry: "TRY AGAIN",
    },
    tracking: {
      title: "TRACKING ERROR",
      description: "We couldn't load your tracking data. Please try again.",
      retry: "TRY AGAIN",
    },
    dashboard: {
      title: "DASHBOARD ERROR",
      description: "We couldn't load the dashboard. Please try again.",
      retry: "TRY AGAIN",
    },
    adminSettings: {
      title: "SETTINGS ERROR",
      description: "We couldn't load the admin settings. Please try again.",
      retry: "TRY AGAIN",
    },
    adminSignups: {
      title: "SIGNUPS ERROR",
      description: "We couldn't load the signups page. Please try again.",
      retry: "TRY AGAIN",
    },
    adminTickets: {
      title: "TICKETS ERROR",
      description: "We couldn't load the admin tickets. Please try again.",
      retry: "TRY AGAIN",
    },
    workoutPlan: {
      title: "WORKOUT PLAN ERROR",
      description: "We couldn't load your workout plan. Please try again.",
      retry: "TRY AGAIN",
    },
    mealPlan: {
      title: "MEAL PLAN ERROR",
      description: "We couldn't load your meal plan. Please try again.",
      retry: "TRY AGAIN",
    },
    faq: {
      title: "FAQ ERROR",
      description: "We couldn't load the FAQs. Please try again.",
      retry: "TRY AGAIN",
    },
    adminPanel: {
      title: "ADMIN ERROR",
      description: "Something went wrong in the admin panel. Please try again.",
      retry: "TRY AGAIN",
    },
  },
  DA = {
    title: "Notifications",
    markAllRead: "Mark all as read",
    empty: "No notifications yet",
    justNow: "Just now",
    minutesAgo: "{count}m ago",
    hoursAgo: "{count}h ago",
    daysAgo: "{count}d ago",
  },
  NA = {
    not_supported: "Push notifications are not supported on this device",
    not_configured: "Notification service is not configured. Please contact your coach.",
    profile_not_loaded: "Profile not loaded yet. Please try again.",
    permission_denied: "Notifications were blocked. Please enable them in your browser settings.",
    permission_dismissed:
      "Permission request was dismissed. Please try again to enable notifications.",
    subscribe_failed: "Failed to enable notifications. Please try again.",
    unsubscribe_failed: "Failed to disable notifications. Please try again.",
  },
  PA = {
    common: fA,
    emptyStates: dA,
    auth: hA,
    nav: gA,
    dashboard: mA,
    meals: pA,
    workouts: yA,
    checkIn: vA,
    tracking: SA,
    progress: bA,
    tickets: RA,
    faq: wA,
    settings: TA,
    onboarding: _A,
    units: EA,
    days: AA,
    brand: xA,
    pwa: CA,
    errors: OA,
    subscription: MA,
    validation: kA,
    routeErrors: LA,
    notificationCenter: DA,
    notificationErrors: NA,
  },
  UA = {
    appName: "فيت فاست",
    loading: "جاري التحميل...",
    error: "حدث خطأ ما",
    retry: "حاول مرة أخرى",
    save: "حفظ",
    cancel: "إلغاء",
    confirm: "تأكيد",
    delete: "حذف",
    edit: "تعديل",
    back: "رجوع",
    next: "التالي",
    submit: "إرسال",
    close: "إغلاق",
    search: "بحث",
    noResults: "لا توجد نتائج",
    today: "اليوم",
    backToToday: "العودة لليوم",
    yesterday: "أمس",
    week: "أسبوع",
    month: "شهر",
    year: "سنة",
    min: "د",
    offline: "أنت غير متصل بالإنترنت",
  },
  BA = {
    noPlan: {
      title: "لا توجد خطة بعد",
      description: "أكمل التقييم الأولي لتلقي خططك المخصصة المولدة بالذكاء الاصطناعي.",
      action: "هيا نبدأ!",
    },
    plansGenerating: {
      title: "جارٍ إنشاء خططك...",
      description:
        "الذكاء الاصطناعي يقوم بإنشاء خطط الوجبات والتمارين المخصصة لك. عادةً يستغرق ذلك بضع دقائق. ستتحدث هذه الصفحة تلقائياً.",
    },
    noMealPlan: {
      title: "لا توجد خطة وجبات بعد",
      description:
        "ستظهر خطة وجباتك المدعومة بالذكاء الاصطناعي هنا بعد التقييم الأولي أو التسجيل التالي.",
      action: "حان وقت التسجيل!",
    },
    mealPlanGenerating: {
      title: "جارٍ إنشاء خطة وجباتك...",
      description:
        "الذكاء الاصطناعي يقوم بإنشاء خطة وجباتك المخصصة. عادةً يستغرق ذلك بضع دقائق. ستتحدث هذه الصفحة تلقائياً.",
      timeoutTitle: "الإنشاء يستغرق وقتاً أطول من المتوقع",
      timeoutDescription:
        "لا يزال يتم إنشاء خطة وجباتك. إذا لم تظهر قريباً، يرجى رفع تذكرة دعم للمساعدة.",
    },
    noWorkoutPlan: {
      title: "لا توجد خطة تمارين بعد",
      description: "ستظهر خطة تمارينك المخصصة هنا بعد التقييم الأولي أو التسجيل التالي.",
      action: "هيا نبدأ!",
    },
    workoutPlanGenerating: {
      title: "جارٍ إنشاء خطة تمارينك...",
      description:
        "الذكاء الاصطناعي يقوم بإنشاء خطة تمارينك المخصصة. عادةً يستغرق ذلك بضع دقائق. ستتحدث هذه الصفحة تلقائياً.",
    },
    noTickets: {
      title: "لا توجد تذاكر دعم",
      description: "هل لديك مشكلة في خطتك؟ أرسل تذكرة وسيرد مدربك في أقرب وقت ممكن.",
      action: "مدربك هنا لمساعدتك",
    },
    noCheckIns: {
      title: "لا توجد تسجيلات بعد",
      description: "تابع تقدمك عبر تقديم تسجيلات منتظمة. يستخدم مدربك هذه البيانات لتحسين خططك.",
      action: "أكمل أول تسجيل!",
    },
    noPhotos: {
      title: "لا توجد صور تقدم",
      description: "ارفع صورًا أثناء تسجيلاتك لتتبع تقدمك البصري مع مرور الوقت.",
      action: "أكمل تسجيل الدخول",
    },
    noFaqs: {
      title: "لا توجد نتائج",
      description: "جرب مصطلح بحث مختلف أو تصفح جميع الأسئلة أدناه.",
    },
    noTrackingData: {
      title: "لا يوجد شيء للتتبع اليوم",
      description: "تحتاج إلى خطة وجبات أو تمارين نشطة لبدء التتبع. أكمل تسجيلًا لإنشاء خططك.",
      action: "حان وقت التسجيل!",
    },
  },
  qA = {
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    signIn: "دخول",
    signUp: "تسجيل",
    signingIn: "جاري تسجيل الدخول...",
    magicLink: "تسجيل الدخول برابط سحري",
    checkEmail: "تحقق من بريدك الإلكتروني",
    magicLinkSent: "لقد أرسلنا لك رابط سحري لتسجيل الدخول",
    magicLinkDescription: "سنرسل لك رابط لتسجيل الدخول بدون كلمة مرور",
    sendMagicLink: "إرسال الرابط السحري",
    sendingMagicLink: "جاري الإرسال...",
    emailSent: "تم إرسال البريد الإلكتروني!",
    emailSentDescription:
      "تحقق من بريدك الإلكتروني للحصول على رابط سحري لتسجيل الدخول. الرابط صالح لمدة ساعة واحدة.",
    setPassword: "تعيين كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    passwordMismatch: "كلمات المرور غير متطابقة",
    invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
    invalidPassword: "يجب أن تكون كلمة المرور 8 أحرف على الأقل",
    passwordComplexity: "يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم واحد على الأقل",
    createPasswordDescription: "قم بإنشاء كلمة مرور آمنة لحسابك",
    updatingPassword: "جاري التحديث...",
    passwordSet: "تم تعيين كلمة المرور بنجاح!",
    redirectingToDashboard: "جاري التوجيه إلى لوحة التحكم...",
    signInDescription: "مرحباً بعودتك إلى فيت فاست",
    or: "أو",
    selectLanguage: "اختر اللغة",
    english: "English",
    arabic: "العربية",
    coachAccountError: "هذا حساب مدرب. يرجى استخدام لوحة الإدارة لتسجيل الدخول.",
    accountNotFound: "لم يتم العثور على حساب. يرجى التواصل مع مدربك أو التسجيل أولاً.",
    acceptInvite: "مرحباً بك في فيت فاست",
    createAccount: "إنشاء حساب",
    invalidInviteLink: "رابط الدعوة غير صالح. يرجى التواصل مع مدربك.",
    inviteExpired: "رابط الدعوة غير صالح أو منتهي الصلاحية. يرجى التواصل مع مدربك.",
    accountCreationFailed: "فشل إنشاء الحساب. يرجى المحاولة مرة أخرى أو التواصل مع مدربك.",
    passwordsMustMatch: "كلمات المرور غير متطابقة",
    brandTagline: "مدربك الرياضي المدعوم بالذكاء الاصطناعي",
    validEmail: "يرجى إدخال بريد إلكتروني صالح",
    passwordMinLength: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
    invalidCredentials: "بريد إلكتروني أو كلمة مرور غير صحيحة",
    verificationRequired: "رمز التحقق مطلوب",
    passwordRequirements: "يجب أن تكون كلمة المرور 8 أحرف على الأقل",
    passwordStrength: { weak: "ضعيفة", medium: "متوسطة", strong: "قوية", label: "القوة" },
    emailNotFound: "البريد الإلكتروني غير موجود. يرجى بدء عملية إعادة تعيين كلمة المرور مرة أخرى.",
    unexpectedError: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.",
    loginMessages: {
      session_expired: "انتهت جلستك. يرجى تسجيل الدخول مرة أخرى.",
      account_pending: "حسابك قيد المراجعة.",
      password_changed: "تم تغيير كلمة المرور بنجاح. يرجى تسجيل الدخول.",
      account_inactive: "حسابك غير نشط. يرجى التواصل مع الدعم.",
    },
  },
  zA = {
    dashboard: "لوحة التحكم",
    mealPlan: "خطة الوجبات",
    workoutPlan: "خطة التمارين",
    checkIn: "المتابعة",
    tracking: "التتبع اليومي",
    progress: "التقدم",
    tickets: "الدعم",
    faq: "الأسئلة الشائعة",
    settings: "الإعدادات",
    more: "المزيد",
  },
  IA = {
    welcome: "مرحباً بعودتك",
    todayOverview: "نظرة عامة على اليوم",
    upcomingCheckIn: "المتابعة القادمة",
    daysUntilCheckIn: "أيام حتى المتابعة القادمة",
    quickActions: "إجراءات سريعة",
    recentActivity: "النشاط الأخير",
    mealProgress: "تقدم الوجبات",
    workoutProgress: "تقدم التمارين",
    completedToday: "مكتمل اليوم",
    viewPlan: "عرض الخطة",
    startWorkout: "بدء التمرين",
    logMeal: "تسجيل الوجبة",
    motivational: {
      0: "يالله يا {name}، كمّل!",
      1: "ماشي صح يا {name}!",
      2: "الاستمرارية هي المفتاح يا {name}!",
      3: "كل تمرين بيفرق يا {name}!",
      4: "قدها وقدود يا {name}!",
      5: "مجهود رائع يا {name}!",
      6: "يوم بيوم يا {name}!",
    },
    coachMessageBanner: "ردّ المدرب على تذكرتك",
    viewTicket: "عرض",
    planDay: "اليوم {current} من {total}",
    planProgress: "تقدم الخطة",
    todaysStats: "إحصائيات اليوم",
    todaysMeals: "وجبات اليوم",
    todaysWorkout: "تمرين اليوم",
    noMealsToday: "لا توجد وجبات اليوم",
    restDayOrNoWorkout: "يوم راحة أو لا يوجد تمرين اليوم",
    totalCalories: "إجمالي السعرات",
    mealCount: "{count} وجبات",
    exerciseCount: "{count} تمارين",
    estDuration: "المدة المقدرة {duration}",
  },
  jA = {
    title: "خطة الوجبات",
    breakfast: "الإفطار",
    lunch: "الغداء",
    dinner: "العشاء",
    snack: "وجبة خفيفة",
    snacks: "الوجبات الخفيفة",
    calories: "السعرات",
    protein: "البروتين",
    carbs: "الكربوهيدرات",
    fat: "الدهون",
    ingredients: "المكونات",
    instructions: "طريقة التحضير",
    alternatives: "البدائل",
    details: "التفاصيل",
    swap: "استبدال",
    swapFailed: "فشل استبدال الوجبة. يرجى المحاولة مرة أخرى.",
    markComplete: "تم الإكمال",
    completed: "مكتمل",
    todaysMeals: "وجبات اليوم",
    weeklyOverview: "نظرة أسبوعية",
    nutritionSummary: "ملخص التغذية",
    noActivePlan: "لا توجد خطة وجبات نشطة",
    getStarted: "ابدأ بخطة وجباتك المخصصة",
    generatePlan: "إنشاء خطة الوجبات",
    generating: "جاري الإنشاء...",
    generateDescription: "أنشئ خطة وجباتك المخصصة بناءً على أهدافك وتفضيلاتك",
    newPlan: "خطة جديدة",
    dailyTotals: "إجمالي اليوم",
    coachNotes: "ملاحظات المدرب",
    kcal: "سعرة",
    aiGenerating: "الذكاء الاصطناعي يُعد خطة وجباتك...",
    generatingDay: "جاري إعداد يوم {day}...",
    generatingDayDescription: "وجباتك لهذا اليوم قيد التحضير. الأيام الأخرى جاهزة للتصفح.",
    calorieExplanation:
      "الذكاء الاصطناعي بيستهدف حوالي {calories} سعرة/يوم ({protein} جرام بروتين) بناءً على بياناتك و{trainingDays} أيام تمرين/أسبوع. الوجبات الفعلية ممكن تختلف بسيط.",
    dayLabel: "يوم {n}",
    translating: "جاري ترجمة خطة الوجبات...",
    translatingDescription: "ستُحدَّث الخطة تلقائيًا خلال ثوانٍ.",
    translationFailed: "فشلت الترجمة",
    translationFailedDescription:
      "تعذّر ترجمة خطة الوجبات. يمكنك إعادة المحاولة أو عرضها باللغة الأصلية.",
    retry: "إعادة المحاولة",
  },
  HA = {
    title: "خطة التمارين",
    exercise: "تمرين",
    exercises: "التمارين",
    sets: "مجموعات",
    reps: "تكرارات",
    rest: "راحة",
    duration: "المدة",
    durationMin: "المدة (د)",
    warmup: "الإحماء",
    cooldown: "التهدئة",
    startWorkout: "بدء التمرين",
    completeWorkout: "إنهاء التمرين",
    skipExercise: "تخطي",
    nextExercise: "التالي",
    previousExercise: "السابق",
    restDay: "يوم راحة",
    todaysWorkout: "تمرين اليوم",
    weeklySchedule: "الجدول الأسبوعي",
    notes: "ملاحظات",
    targetMuscles: "العضلات المستهدفة",
    noActivePlan: "لا توجد خطة تمارين نشطة",
    getStarted: "ابدأ بخطة تمارينك المخصصة",
    generatePlan: "إنشاء خطة التمارين",
    generating: "جاري الإنشاء...",
    generateDescription: "أنشئ خطة تمارينك المخصصة بناءً على أهدافك ومستوى لياقتك",
    newPlan: "خطة جديدة",
    timeToRecover: "وقت التعافي",
    restDescription:
      "الراحة والتعافي ضروريان لنمو العضلات. خذ هذا اليوم للاسترخاء ودع جسمك يتعافى.",
    progressionNotes: "ملاحظات التقدم",
    safetyTips: "نصائح السلامة",
    aiGenerating: "الذكاء الاصطناعي يُعد خطة تمارينك...",
    trainingSplit: "نظام التقسيم",
    translating: "جاري ترجمة خطة التمارين...",
    translatingDescription: "ستُحدَّث الخطة تلقائيًا خلال ثوانٍ.",
    translationFailed: "فشلت الترجمة",
    translationFailedDescription:
      "تعذّر ترجمة خطة التمارين. يمكنك إعادة المحاولة أو عرضها باللغة الأصلية.",
    retry: "إعادة المحاولة",
    swapExercise: "استبدال التمرين",
    swapping: "جاري الاستبدال...",
    restDayTitle: "راحة واستشفاء",
    restDayRecovery: "عضلاتك تتعافى بعد {workout}",
    nextWorkout: "التمرين القادم",
    exerciseGuide: "دليل التمرين",
    suggestedWeight: "مقترح: {weight}",
    cardioFinisher: "كارديو ختامي",
    cardioFinisherDuration: "{duration} د · {intensity}",
    activeRecovery: "استشفاء نشط",
    supersetWith: "سوبرسيت مع {exercise}",
    phaseFoundation: "التأسيس",
    phaseBuild: "البناء",
    phasePeak: "الذروة",
    phaseDeload: "التخفيف",
    phaseRetest: "إعادة الاختبار",
  },
  VA = {
    title: "المتابعة",
    subtitle: "أخبرنا كيف حالك",
    stepOf: "الخطوة {current} من {total}",
    weight: "الوزن الحالي",
    measurements: "قياسات الجسم",
    chest: "الصدر",
    waist: "الخصر",
    hips: "الأرداف",
    arms: "الذراعين",
    thighs: "الفخذين",
    performance: "أداء التمارين",
    energy: "مستوى الطاقة",
    sleep: "جودة النوم",
    adherence: "الالتزام بالنظام الغذائي",
    injuries: "إصابات جديدة؟",
    photos: "صور التقدم",
    uploadPhotos: "رفع الصور",
    additionalNotes: "ملاحظات إضافية",
    submitCheckIn: "إرسال المتابعة",
    checkInSuccess: "تم إرسال المتابعة بنجاح!",
    newPlanGenerated: "جاري إنشاء خططك الجديدة",
    planGenerationWarning: "تم حفظ التسجيل! جاري إعداد الخطة الخاصة بك. ستراها قريباً.",
    planGenerationFailed: "تم حفظ التسجيل، لكن لم نتمكن من إنشاء خططك الآن. تم إبلاغ مدربك.",
    optional: "اختياري",
    review: "راجع متابعتك",
    wellbeingMetrics: "مقاييس الصحة",
    adherenceRating: "تقييم الالتزام",
    addMorePhotos: "إضافة المزيد من الصور",
    submitting: "جاري الإرسال...",
    allIn: "الكل بـ",
    maxPhotos: "اختياري، حد أقصى {maxPhotos} صور، {maxFileMB} ميجا لكل صورة",
    fileTypes: "PNG، JPG حتى {maxFileMB} ميجا",
    uploaded: "تم رفعها",
    invalidFile: "ملف غير صالح",
    invalidFileDescription: "يرجى رفع صور أقل من {maxFileMB} ميجا",
    authRequired: "مطلوب تسجيل الدخول",
    authRequiredDescription: "يرجى تسجيل الدخول لإرسال المتابعة",
    submissionFailed: "فشل الإرسال",
    tryAgain: "يرجى المحاولة مرة أخرى",
    checkInLocked: "المتابعة مغلقة",
    nextCheckInAvailable: "المتابعة القادمة متاحة",
    days: "أيام",
    lockReason:
      "يتم جدولة المتابعات كل {days} يومًا لضمان تتبع التقدم الأمثل وإنشاء خطط الذكاء الاصطناعي. استخدم هذا الوقت لاتباع خطط الوجبات والتمارين الحالية.",
    steps: {
      weight: "الوزن والقياسات",
      fitness: "مقاييس اللياقة",
      dietary: "الالتزام الغذائي",
      photos: "صور التقدم",
      review: "مراجعة وإرسال",
    },
    reviewBody: "الجسم",
    reviewFitness: "اللياقة",
    reviewDiet: "النظام الغذائي",
    dietNotes: "ملاحظات النظام الغذائي",
    none: "لا يوجد",
    photosUploaded: "{count} صور تم رفعها",
    noPhotos: "لا توجد صور",
    manualMeasurements: "قياسات الجسم",
    recommended: "موصى به",
    inBodyUpload: "رفع InBody",
    uploadInBody: "رفع نتيجة InBody",
    uploadInBodyDescription: "التقط صورة أو ارفع ورقة نتائج InBody لاستخراج تركيب الجسم تلقائياً",
    inBodyRequired: "يرجى رفع ورقة نتائج InBody",
    measurementsRequired: "القياسات مطلوبة",
    measurementsRequiredDescription:
      "يرجى إدخال قياس واحد على الأقل (الصدر، الخصر، الأرداف، الذراعين، أو الفخذين) أو التبديل إلى رفع InBody",
    removeFile: "إزالة الملف",
    removePhoto: "إزالة الصورة",
    inBodyResult: "نتيجة InBody",
    inBodyProcessing: "جاري معالجة بيانات InBody...",
    inBodyExtracted: "تم استخراج بيانات InBody",
    aiExtracted: "مستخرج بالذكاء الاصطناعي",
    photoFront: "أمامي",
    photoBack: "خلفي",
    photoSide: "جانبي",
    tapToUpload: "اضغط للرفع",
    plansGenerateInBackground: "سيتم إنشاء خططك في الخلفية. ستُبلَّغ عند الجاهزية.",
    placeholders: {
      performance: "صف أداء تمارينك، التحسينات، أو التحديات...",
      dietNotes: "أي تحديات في خطة وجباتك؟ أطعمة أعجبتك أو لم تعجبك؟",
      injuries: "صف أي إصابات جديدة، ألم، أو انزعاج...",
      notes: "شارك أي أفكار، أسئلة، أو مخاوف أخرى...",
      photoUpload: "اضغط لرفع الصور",
    },
    cyclePhase: "مرحلة الدورة الحالية",
    cyclePhaseDescription: "يساعدنا في ضبط شدة خطتك",
    cyclePhaseOptions: {
      menstrual: "الحيض (أيام 1-5)",
      follicular: "الجريبية (أيام 6-13)",
      ovulatory: "الإباضة (أيام 14-16)",
      luteal: "الأصفرية (أيام 17-28)",
      notTracking: "لا أتتبع",
    },
    validation: {
      weightPositive: "يجب أن يكون الوزن موجبًا",
      weightTooLow: "الوزن يبدو منخفضًا جدًا",
      weightTooHigh: "الوزن يبدو مرتفعًا جدًا",
      workoutPerformanceMin: "يرجى كتابة 10 أحرف على الأقل عن أدائك في التمارين",
      ratingRange: "يجب أن يكون بين 1 و 10",
      measurementRange: "يجب أن يكون القياس بين 10 و 500 سم",
    },
  },
  QA = {
    title: "التتبع اليومي",
    dailyReflection: "التأمل اليومي",
    howWasYourDay: "كيف كان يومك؟",
    writeReflection: "اكتب أفكارك...",
    mealTracking: "تتبع الوجبات",
    workoutTracking: "تتبع التمارين",
    streakDays: "يوم متتالي",
    keepItUp: "استمر هكذا!",
    subtitle: "تتبع وجباتك وتمارينك اليومية",
    selectDate: "اختر التاريخ",
    todaysProgress: "تقدم اليوم",
    noMealsPlanned: "لا توجد وجبات مخططة لهذا اليوم",
    addNotes: "أضف ملاحظات (اختياري)...",
    noWorkoutPlanned: "لا يوجد تمرين مخطط لهذا اليوم",
    workoutCompleted: "تم إكمال التمرين",
    workoutNotCompleted: "لم يكتمل التمرين",
    saveReflection: "حفظ التأمل",
    saving: "جاري الحفظ...",
    of: "من",
    mealsCompleted: "وجبات مكتملة",
    addWorkoutNotes: "أضف ملاحظات التمرين (اختياري)...",
    takeTimeToRecover: "خذ وقتك للتعافي والاستعداد لتمرينك القادم",
    complete: "مكتمل",
    markComplete: "تحديد كمكتمل",
    markIncomplete: "تحديد كغير مكتمل",
    mealCompleted: "تم تحديد الوجبة كمكتملة",
    mealUncompleted: "تم تحديد الوجبة كغير مكتملة",
    workoutMarkedDone: "تم تحديد التمرين كمكتمل",
    workoutMarkedUndone: "تم تحديد التمرين كغير مكتمل",
    saveFailed: "فشل الحفظ. يرجى المحاولة مرة أخرى.",
    reflectionSaved: "تم حفظ التأمل",
    allComplete: "تم إكمال جميع المهام لليوم! عمل رائع!",
    exercisesDone: "تمارين مكتملة",
    sets: "مجموعات",
    setLabel: "مجموعة",
    weight: "الوزن",
    reps: "تكرارات",
    lastWeight: "آخر",
    lastSession: "آخر مرة",
    quickComplete: "إكمال سريع للكل",
    undoQuickComplete: "تراجع عن الإكمال السريع",
    viewHistory: "عرض سجل التمرين",
    exerciseHistory: "سجل التمرين",
    pastSessions: "جلسات سابقة",
    noHistoryYet: "لا يوجد سجل بعد",
    startLogging: "ابدأ بتسجيل المجموعات لبناء سجلك",
    personalBest: "أفضل أداء شخصي",
    improving: "تحسن",
    decreased: "انخفض",
    same: "ثابت",
  },
  $A = {
    title: "تقدمك",
    weightHistory: "سجل الوزن",
    measurementHistory: "سجل القياسات",
    adherenceHistory: "سجل الالتزام",
    photoComparison: "مقارنة الصور",
    startDate: "تاريخ البدء",
    currentDate: "التاريخ الحالي",
    totalChange: "إجمالي التغيير",
    weeklyAverage: "المتوسط الأسبوعي",
    description: "تتبع رحلتك الصحية",
    days30: "٣٠ يوم",
    days90: "٩٠ يوم",
    all: "الكل",
    startWeight: "الوزن الابتدائي",
    currentWeight: "الوزن الحالي",
    checkIns: "المتابعات",
    totalRecorded: "إجمالي المسجل",
    charts: "الرسوم البيانية",
    photos: "الصور",
    history: "السجل",
    weightTrend: "اتجاه الوزن",
    weightTrendDescription: "تقدم وزنك عبر الوقت",
    noWeightData: "لا توجد بيانات وزن متاحة",
    mealAdherence: "التزام الوجبات",
    workoutAdherence: "التزام التمارين",
    progressPhotos: "صور التقدم",
    progressPhotosDescription: "جدول زمني مرئي لتحولك",
    noPhotos: "لا توجد صور تقدم بعد",
    noPhotosHint: "أضف صورًا أثناء متابعاتك",
    checkInHistory: "سجل المتابعات",
    checkInHistoryDescription: "جميع متابعاتك المسجلة",
    noCheckIns: "لا توجد متابعات مسجلة بعد",
    progressPhoto: "صورة التقدم",
    close: "إغلاق",
    loading: "جاري التحميل...",
    bodyFatPercent: "نسبة الدهون",
    leanMass: "الكتلة العضلية الصافية",
    skeletalMuscleMass: "كتلة العضلات الهيكلية",
    bmi: "مؤشر كتلة الجسم",
    measurementTrends: "اتجاهات القياسات",
    measurementTrendsDescription: "قياسات الجسم عبر الوقت",
    adherence: "الالتزام",
    wellnessTrends: "اتجاهات الصحة",
    wellnessTrendsDescription: "جودة النوم ومستويات الطاقة عبر الوقت",
    sleepQuality: "جودة النوم",
    energyLevel: "مستوى الطاقة",
    dietaryAdherence: "الالتزام الغذائي",
    adherenceTrend: "اتجاه الالتزام الغذائي",
    adherenceTrendDescription: "درجة التزامك الغذائي عبر الوقت",
    cyclePhase_menstrual: "الحيض",
    cyclePhase_follicular: "الجريبية",
    cyclePhase_ovulatory: "الإباضة",
    cyclePhase_luteal: "الأصفرية",
    kgPerWeek: "كجم/أسبوع",
    weekComparison: "مقارنة أسبوعية",
    thisWeek: "هذا الأسبوع",
    lastWeek: "الأسبوع الماضي",
    avgWeight: "متوسط الوزن",
    avgEnergy: "متوسط الطاقة",
    avgSleep: "متوسط النوم",
    avgAdherence: "متوسط الالتزام",
    bodyComposition: "تكوين الجسم",
    bodyCompositionDescription: "اتجاهات فحص InBody عبر الوقت",
    beforeAfter: "قبل وبعد",
    before: "قبل",
    after: "بعد",
    slideToCompare: "اسحب للمقارنة",
    needTwoPhotos: "ارفع صورتين على الأقل أثناء المتابعات لرؤية المقارنة",
    goalLine: "الهدف",
  },
  FA = {
    title: "الدعم",
    newTicket: "تذكرة جديدة",
    myTickets: "تذاكري",
    subject: "الموضوع",
    category: "الفئة",
    description: "الوصف",
    categories: {
      mealIssue: "مشكلة في خطة الوجبات",
      workoutIssue: "مشكلة في خطة التمارين",
      technical: "مشكلة تقنية",
      bugReport: "بلاغ خطأ",
      other: "أخرى",
    },
    status: { open: "مفتوحة", coachResponded: "رد المدرب", closed: "مغلقة" },
    submitTicket: "إرسال التذكرة",
    ticketSubmitted: "تم إرسال التذكرة بنجاح",
    noTickets: "لم تقم بإرسال أي تذاكر بعد",
    screenshot: "صورة للشاشة",
    coachResponse: "رد المدرب",
    subjectPlaceholder: "وصف مختصر لمشكلتك",
    descriptionPlaceholder: "صف مشكلتك بالتفصيل...",
    uploadHint: "اضغط لرفع صورة الشاشة",
    noTicketsTitle: "لا توجد تذاكر بعد",
    backToTickets: "العودة للتذاكر",
    you: "أنت",
    coach: "المدرب",
    viewScreenshot: "عرض الصورة",
    replyToTicket: "الرد",
    replyPlaceholder: "اكتب ردك...",
    sendReply: "إرسال الرد",
    sending: "جاري الإرسال...",
    clientReply: "رد العميل",
    ticketClosed: "تم إغلاق هذه التذكرة",
    ticketNotFound: "التذكرة غير موجودة",
    fetchError: "فشل تحميل التذكرة",
    chat: { today: "اليوم", yesterday: "أمس" },
    lastMessage: "آخر رسالة",
    uploadFailed: "فشل رفع الصورة",
    uploadFailedDescription: "تعذر رفع لقطة الشاشة. يرجى المحاولة مرة أخرى.",
    subjectMinLength: "يجب أن يكون الموضوع 3 أحرف على الأقل",
    subjectMaxLength: "يجب أن يكون الموضوع أقل من 100 حرف",
    descriptionMaxLength: "يجب أن يكون الوصف أقل من 3000 حرف",
    submitFailed: "فشل إرسال التذكرة. يرجى المحاولة مرة أخرى.",
    optional: "اختياري",
  },
  YA = {
    title: "الأسئلة الشائعة",
    subtitle: "اعثر على إجابات للأسئلة الشائعة",
    searchPlaceholder: "ابحث في الأسئلة...",
    noResults: "لا توجد أسئلة مطابقة",
    noResultsHint: "جرب كلمة بحث مختلفة",
    stillNeedHelp: "هل تحتاج المزيد من المساعدة؟",
    stillNeedHelpHint: "لم تجد ما تبحث عنه؟ تواصل مع الدعم.",
    contactSupport: "تواصل مع الدعم",
    questions: {
      checkInFrequency: {
        q: "كم مرة يجب أن أقوم بالمتابعة؟",
        a: "يجب عليك تقديم متابعة كل {days} يومًا. هذا يسمح لمدربك بتتبع تقدمك وتعديل خطط الوجبات والتمارين وفقًا لذلك.",
      },
      changeMeals: {
        q: "هل يمكنني تغيير الوجبات في خطة وجباتي؟",
        a: "نعم! كل وجبة تأتي مع خيارات بديلة يمكنك استبدالها. إذا كانت لديك متطلبات غذائية محددة، يرجى تقديم تذكرة دعم وسيساعدك مدربك.",
      },
      missWorkout: {
        q: "ماذا لو فاتني تمرين؟",
        a: "لا بأس بتفويت تمرين من حين لآخر. فقط حاول أن تبقى منتظمًا. إذا كنت بحاجة لتعديل جدولك، اذكر ذلك في متابعتك القادمة.",
      },
      trackProgress: {
        q: "كيف أتتبع تقدمي؟",
        a: "يمكنك عرض تقدمك في قسم التقدم. يعرض سجل وزنك والقياسات ومقارنات الصور عبر الوقت.",
      },
      newPlanTiming: {
        q: "متى سأستلم خطتي الجديدة؟",
        a: "بعد تقديم المتابعة، عادةً ما تكون خطط الوجبات والتمارين المُنشأة بالذكاء الاصطناعي جاهزة خلال دقائق قليلة. ستراها في الأقسام المخصصة.",
      },
      contactCoach: {
        q: "كيف أتواصل مع مدربي؟",
        a: "يمكنك التواصل مع مدربك عن طريق تقديم تذكرة دعم. اختر الفئة المناسبة واوصف سؤالك أو استفسارك. سيرد مدربك في أقرب وقت ممكن.",
      },
      paymentMethods: {
        q: "ما هي طرق الدفع المقبولة؟",
        a: "نقبل تحويلات إنستاباي. بعد إجراء الدفع، قم بتحميل لقطة شاشة للمعاملة في طلب التسجيل أو التجديد.",
      },
      changeLanguage: {
        q: "هل يمكنني تغيير تفضيل اللغة؟",
        a: "نعم! يمكنك التبديل بين الإنجليزية والعربية في صفحة الإعدادات. سيتم إنشاء خطط الوجبات والتمارين باللغة المفضلة لديك.",
      },
    },
  },
  GA = {
    title: "الإعدادات",
    profile: "الملف الشخصي",
    fullName: "الاسم الكامل",
    phone: "رقم الهاتف",
    language: "اللغة",
    notifications: "الإشعارات",
    enableNotifications: "تفعيل الإشعارات",
    reminderTime: "وقت التذكير اليومي",
    appearance: "المظهر",
    darkMode: "الوضع الداكن",
    account: "الحساب",
    changePassword: "تغيير كلمة المرور",
    currentPassword: "كلمة المرور الحالية",
    newPassword: "كلمة المرور الجديدة",
    confirmNewPassword: "تأكيد كلمة المرور الجديدة",
    passwordChanged: "تم تغيير كلمة المرور بنجاح",
    passwordMismatch: "كلمات المرور غير متطابقة",
    passwordTooShort: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
    wrongPassword: "كلمة المرور الحالية غير صحيحة",
    planDetails: "تفاصيل الخطة",
    planTier: "مستوى الخطة",
    planExpiry: "انتهاء الخطة",
    daysRemaining: "أيام متبقية",
    subtitle: "إدارة إعدادات حسابك وتفضيلاتك",
    notificationsDescription: "تلقي تذكيرات للوجبات والتمارين",
    notificationsDenied: "تم حظر الإشعارات في إعدادات المتصفح",
    notificationsUnsupported: "الإشعارات غير مدعومة على هذا الجهاز",
    notificationsUnavailableTitle: "الإشعارات غير متاحة",
    notificationsUnavailableDescription:
      "تعذر تهيئة الإشعارات. قد يكون السبب أداة حظر الإعلانات أو إعدادات المتصفح.",
    darkModeDescription: "تبديل الوضع الداكن",
    email: "البريد الإلكتروني",
    saveChanges: "حفظ التغييرات",
    saveSuccess: "تم حفظ الإعدادات بنجاح",
    signOut: "تسجيل الخروج",
    status: "الحالة",
    planStart: "تاريخ البدء",
    planTiers: {
      monthly: "شهري",
      quarterly: "ربع سنوي",
      "3_months": "3 أشهر",
      "6_months": "6 أشهر",
      "12_months": "12 شهر",
    },
    statuses: {
      active: "نشط",
      pending_approval: "قيد المراجعة",
      inactive: "غير نشط",
      expired: "منتهي",
    },
    noPlan: "لا توجد خطة حالية",
    namePlaceholder: "مثال: أحمد محمد",
    phonePlaceholder: "مثال: 01xxxxxxxxx",
    closeDialog: "إغلاق النافذة",
    errors: { saveFailed: "فشل الحفظ. يرجى المحاولة مرة أخرى." },
    assessment: {
      myAssessment: "تقييمي",
      myAssessmentDesc: "تحديث ملفك الرياضي",
      backToSettings: "العودة للإعدادات",
      goalsTitle: "الأهداف ومستوى اللياقة",
      equipmentTitle: "المعدات المتاحة",
      scheduleTitle: "جدول التمرين",
      dietaryTitle: "التفضيلات الغذائية",
      measurementsTitle: "قياسات الجسم",
      medicalTitle: "الصحة والطب",
      primaryGoal: "الهدف الرئيسي",
      activityLevel: "مستوى النشاط",
      experienceLevel: "مستوى الخبرة",
      equipment: "المعدات",
      mealsPerDay: "عدد الوجبات يومياً",
      trainingDays: "أيام التمرين",
      sessionDuration: "مدة الجلسة",
      preferredTime: "الوقت المفضل",
      foodPreferences: "تفضيلات الطعام",
      allergies: "الحساسية",
      dietaryRestrictions: "القيود الغذائية",
      currentWeight: "الوزن الحالي",
      height: "الطول",
      age: "العمر",
      chest: "الصدر",
      waist: "الخصر",
      hips: "الأرداف",
      arms: "الذراعين",
      thighs: "الفخذين",
      medicalConditions: "الحالات الطبية",
      injuries: "الإصابات",
      femaleHealth: "صحة المرأة",
      menstrualStatus: "حالة الدورة الشهرية",
      pregnancy: "حامل",
      breastfeeding: "مُرضعة",
      hormonalMedication: "أدوية هرمونية",
      save: "حفظ التغييرات",
      saving: "جاري الحفظ...",
      saved: "تم حفظ التغييرات بنجاح",
      noChanges: "لا توجد تغييرات للحفظ",
      safetyWarning: "تنبيه أمان",
      safetyWarningDesc:
        "التغييرات في المعلومات الطبية أو الصحية قد تؤثر بشكل كبير على خطط التمارين والتغذية. هل أنت متأكد من حفظ هذه التغييرات؟",
      confirm: "نعم، احفظ التغييرات",
      cancel: "إلغاء",
      planUpdateNote: "سيتم استخدام معلوماتك المحدثة عند إنشاء خطتك القادمة.",
    },
  },
  KA = {
    welcome: {
      title: "مرحباً بك في فيت فاست",
      subtitle: "رحلتك الصحية المخصصة تبدأ هنا",
      getStarted: "ابدأ الآن",
      features: {
        mealPlans: "خطط وجبات مخصصة",
        mealPlansDesc: "خطط وجبات مولدة بالذكاء الاصطناعي مصممة لأهدافك وتفضيلاتك",
        workoutPlans: "خطط تمارين مخصصة",
        workoutPlansDesc: "تمارين مصممة لمستوى لياقتك وجدولك",
        progressTracking: "تتبع التقدم",
        progressTrackingDesc: "راقب وزنك وقياساتك وإنجازاتك بمرور الوقت",
        coachSupport: "دعم المدرب",
        coachSupportDesc: "تواصل مباشر مع مدربك من خلال نظام التذاكر",
      },
      completeAssessment: "أكمل التقييم لتحصل على خططك المخصصة",
      remember: "تذكر",
      journeyMessage: "رحلتك نحو الأفضل تبدأ الآن",
    },
    assessment: {
      title: "التقييم الأولي",
      subtitle: "ساعدنا في إنشاء خطتك المخصصة",
      goals: "ما هي أهدافك اللياقية؟",
      primaryGoalTitle: "إيه هدفك الأساسي؟",
      primaryGoalDesc: "اختار واحد — ده اللي هيحدد خطة التغذية والتمرين",
      secondaryFocusTitle: "عايز تركز على حاجة تانية؟",
      secondaryFocusDesc: "اختياري — اختار لحد ٢",
      primaryGoals: {
        lose_fat: "خسارة دهون",
        lose_fat_desc: "تقليل دهون الجسم مع الحفاظ على العضلات",
        build_muscle: "بناء عضلات",
        build_muscle_desc: "زيادة الكتلة العضلية والحجم",
        body_recomposition: "إعادة تكوين الجسم",
        body_recomposition_desc: "خسارة دهون وبناء عضلات في نفس الوقت — الأفضل للمبتدئين",
        get_stronger: "زيادة القوة",
        get_stronger_desc: "زيادة القوة وأداء رفع الأثقال",
        improve_fitness: "تحسين اللياقة العامة",
        improve_fitness_desc: "صحة متوازنة وطاقة وتكوين جسم أفضل",
      },
      secondaryFocuses: {
        improve_endurance: "تحسين التحمل",
        improve_flexibility: "تحسين المرونة",
        boost_energy: "زيادة الطاقة والتعافي",
        build_habit: "بناء عادة ثابتة",
      },
      currentWeight: "الوزن الحالي",
      height: "الطول",
      schedule: "جدولك الأسبوعي المتاح",
      scheduleTitle: "أيام التمرين",
      scheduleDesc: "اختار الأيام اللي تقدر تتمرن فيها",
      scheduleHint:
        "بناءً على هدفك ومستواك، ننصح بـ {recommended} أيام في الأسبوع (الحد الأدنى {min}، الحد الأقصى {max}). أيام الراحة ضرورية للتقدم.",
      daysSelected: "{count} أيام مختارة (الحد الأدنى {min}، الحد الأقصى {max})",
      sessionDurationTitle: "مدة الجلسة",
      sessionDurationDesc: "قد إيه تقدر تتمرن في الجلسة الواحدة؟",
      sessionDurations: { 30: "٣٠ دقيقة", 45: "٤٥ دقيقة", 60: "٦٠ دقيقة", 90: "٩٠+ دقيقة" },
      trainingTimeTitle: "وقت التمرين المفضل",
      trainingTimeDesc: "اختياري — بيساعد في تحسين توقيت وجباتك",
      trainingTimes: {
        morning: "الصبح",
        afternoon: "بعد الظهر",
        evening: "بالليل",
        varies: "متغير",
      },
      days: {
        Mon: "الاثنين",
        Tue: "الثلاثاء",
        Wed: "الأربعاء",
        Thu: "الخميس",
        Fri: "الجمعة",
        Sat: "السبت",
        Sun: "الأحد",
      },
      cuisineTitle: "تفضيلات المطبخ",
      cuisineDesc: "إيه نوع الأكل اللي بتحبه؟ ده بيساعدنا نعمل وجبات هتعجبك فعلاً",
      cuisines: {
        mediterranean: "متوسطي",
        middle_eastern: "شرق أوسطي",
        asian: "آسيوي",
        western: "غربي",
        indian: "هندي",
        latin: "لاتيني",
        mixed: "بدون تفضيل",
      },
      mealsPerDayTitle: "عدد الوجبات في اليوم",
      mealsPerDayDesc: "بتفضل تاكل إزاي على مدار اليوم؟",
      mealsPerDayOptions: {
        "3_meals": "٣ وجبات",
        "3_plus_snacks": "٣ وجبات + سناكس",
        "5_small": "٥ وجبات صغيرة",
        flexible: "مرن",
      },
      foodPreferences: "تفضيلات الطعام",
      allergiesTitle: "حساسية الطعام",
      allergies: {
        none: "لا يوجد",
        nuts: "مكسرات",
        dairy: "ألبان",
        eggs: "بيض",
        shellfish: "مأكولات بحرية",
        gluten: "جلوتين",
        soy: "صويا",
        fish: "سمك",
        lactose: "لاكتوز",
        other: "أخرى",
      },
      restrictionsTitle: "القيود الغذائية",
      restrictions: {
        none: "لا يوجد",
        halal: "حلال",
        kosher: "كوشر",
        no_pork: "بدون لحم خنزير",
        no_beef: "بدون لحم بقري",
        vegetarian: "نباتي",
        vegan: "نباتي صرف",
        other: "أخرى",
      },
      medicalConditions: "الحالات الطبية",
      medicalNotesTitle: "ملاحظات طبية",
      medicalNotesDescription: "اختياري: إصابات أو حالات صحية أو قيود",
      medicalNotesPlaceholder: "مثال: إصابة في الركبة، آلام الظهر، سكري، ضغط دم مرتفع...",
      femaleHealth: {
        title: "صحة المرأة",
        description:
          "يساعدنا في تخصيص خطط التغذية والتمارين حسب احتياجات جسمك. جميع الحقول اختيارية.",
        menstrualStatus: "الدورة الشهرية",
        regular: "منتظمة",
        irregular: "غير منتظمة",
        amenorrhea: "غائبة",
        postmenopausal: "بعد سن اليأس",
        preferNotSay: "أفضل عدم الإجابة",
        pregnant: "هل أنتِ حامل حالياً؟",
        breastfeeding: "هل ترضعين طبيعياً حالياً؟",
        yes: "نعم",
        no: "لا",
        hormonalMedication: "أدوية هرمونية (اختياري)",
        hormonalMedicationPlaceholder: "مثال: نوع وسيلة منع الحمل، العلاج الهرموني البديل",
        notes: "ملاحظات إضافية (اختياري)",
        notesPlaceholder: "أي تفاصيل صحية أخرى تودين إخبارنا بها",
        pregnancyWarning: "يرجى استشارة طبيبتك قبل اتباع أي خطة تمارين أو نظام غذائي أثناء الحمل.",
      },
      injuries: "الإصابات الحالية",
      exerciseHistory: "تاريخ التمارين",
      basicInfo: "المعلومات الأساسية",
      currentWeightLabel: "الوزن الحالي",
      heightLabel: "الطول",
      ageLabel: "العمر",
      genderLabel: "الجنس",
      genders: { male: "ذكر", female: "أنثى" },
      experienceLevel: "مستوى الخبرة",
      levels: {
        beginner: "مبتدئ",
        beginner_desc: "جديد على التمارين",
        intermediate: "متوسط",
        intermediate_desc: "سنة - سنتين",
        advanced: "متقدم",
        advanced_desc: "+٣ سنوات",
      },
      equipmentTitle: "المعدات المتاحة",
      equipmentOptions: {
        full_gym: "جيم كامل",
        home_basic: "منزلي (أساسي: دامبلز، مات)",
        home_advanced: "منزلي (متقدم: بنش، بار)",
        bodyweight: "وزن الجسم فقط",
        resistance_bands: "أحبال مقاومة",
      },
      otherOption: "أخرى",
      specifyPlaceholder: "حدد من فضلك...",
      steps: {
        goals: "الأهداف",
        bodyInfo: "معلومات الجسم",
        schedule: "الجدول",
        diet: "التغذية",
        measurements: "القياسات",
        medical: "طبي",
      },
      measurementsTitle: "قياسات الجسم",
      measurementsDesc: "أدخل قياسات جسمك أو ارفع تقرير InBody",
      manualMeasurements: "إدخال يدوي",
      inBodyUpload: "رفع InBody",
      recommended: "موصى به",
      manualRecommended:
        "يُنصح بإدخال القياسات يدوياً للحصول على أفضل النتائج، حتى لو رفعت ورقة InBody.",
      chest: "الصدر",
      waist: "الخصر",
      hips: "الأرداف",
      arms: "الذراعين",
      thighs: "الفخذين",
      allInCm: "جميع القياسات بالسنتيمتر",
      uploadInBody: "اضغط لرفع نتيجة InBody",
      uploadInBodyDescription: "ارفع صورة تقرير InBody الخاص بك",
      inBodyResult: "نتيجة InBody",
      removeFile: "إزالة الملف",
      fileTypes: "صور فقط، الحد الأقصى {maxFileMB} ميجابايت",
      inBodyFileRequired: "يرجى رفع ورقة InBody",
      completeAssessment: "إكمال التقييم",
      submitting: "جاري إنشاء خطتك...",
      generatingDescription: "نقوم بإنشاء خطط الوجبات والتمارين المخصصة لك. قد يستغرق هذا لحظة.",
      activityLevelTitle: "مستوى النشاط اليومي",
      activityLevelDesc: "قد إيه يومك نشيط بعيداً عن التمرين؟",
      activityLevels: {
        sedentary: "قليل الحركة",
        sedentary_desc: "شغل مكتبي، حركة يومية قليلة",
        lightly_active: "نشاط خفيف",
        lightly_active_desc: "مشي بسيط ونشاط يومي خفيف",
        moderately_active: "نشاط متوسط",
        moderately_active_desc: "شغل نشيط أو حركة منتظمة طول اليوم",
        very_active: "نشاط عالي",
        very_active_desc: "شغل بدني أو نمط حياة نشيط جداً",
      },
    },
    pending: {
      title: "الحساب قيد المراجعة",
      subtitle: "مدربك يراجع طلبك",
      message: "سنقوم بإعلامك عند الموافقة على حسابك",
      currentStatus: "الحالة الحالية",
      checkStatus: "تحقق من الحالة",
      approvalTime:
        "تستغرق الموافقة عادةً من 24 إلى 48 ساعة. ستتلقى إشعاراً عبر البريد الإلكتروني عند الموافقة.",
      stepSignupComplete: "اكتمال التسجيل",
      stepSignupCompleteDesc: "تم إنشاء حسابك بنجاح",
      stepUnderReview: "قيد المراجعة",
      stepUnderReviewDesc: "مدربك يراجع طلبك",
      stepApprovalNotification: "إشعار الموافقة",
      stepApprovalNotificationDesc: "ستتلقى بريدًا إلكترونيًا عند الموافقة على حسابك",
      infoLabel: "معلومات",
      statuses: {
        pending_approval: "قيد الموافقة",
        active: "نشط",
        inactive: "غير نشط",
        expired: "منتهي",
      },
    },
  },
  XA = { kg: "كجم", lb: "رطل", cm: "سم", inch: "بوصة", kcal: "سعرة", g: "جم", min: "د", sec: "ث" },
  WA = {
    monday: "الاثنين",
    tuesday: "الثلاثاء",
    wednesday: "الأربعاء",
    thursday: "الخميس",
    friday: "الجمعة",
    saturday: "السبت",
    sunday: "الأحد",
    mon: "اثنين",
    tue: "ثلاثاء",
    wed: "أربعاء",
    thu: "خميس",
    fri: "جمعة",
    sat: "سبت",
    sun: "أحد",
  },
  ZA = {
    name: "فيت فاست",
    tagline: "تدريب لياقة مدعوم بالذكاء الاصطناعي",
    marquee: "فيت فاست • لياقة مدعومة بالذكاء الاصطناعي • حوّل جسمك • تتبع تقدمك",
    copyright: "جميع الحقوق محفوظة",
  },
  JA = {
    installTitle: "تثبيت FitFast",
    installDescription: "أضف FitFast إلى شاشتك الرئيسية",
    installButton: "تثبيت",
    dismissButton: "ليس الآن",
    manualTitle: "تثبيت FitFast",
    manualDescription:
      "احصل على تجربة التطبيق الكاملة بإضافة FitFast إلى شاشتك الرئيسية. لن يستغرق الأمر سوى ثوانٍ قليلة.",
    iosSafariStep1: "اضغط على زر المشاركة",
    iosSafariStep1Hint: "في أسفل الشاشة",
    iosSafariStep2: 'اضغط على "إضافة إلى الشاشة الرئيسية"',
    iosSafariStep2Hint: "مرّر للأسفل في قائمة المشاركة",
    iosSafariStep3: 'اضغط "إضافة" للتأكيد',
    iosOtherStep1: "افتح هذه الصفحة في سفاري",
    iosOtherStep1Hint: "سفاري فقط يمكنه إضافة التطبيقات للشاشة الرئيسية",
    iosOtherStep2: "اضغط على زر المشاركة",
    iosOtherStep2Hint: "في أسفل متصفح سفاري",
    iosOtherStep3: 'اضغط على "إضافة إلى الشاشة الرئيسية"',
    iosOtherStep3Hint: "مرّر للأسفل في قائمة المشاركة",
    iosOtherStep4: 'اضغط "إضافة" للتأكيد',
    androidStep1: "افتح قائمة المتصفح",
    androidStep1Hint: "اضغط على النقاط الثلاث في أعلى اليسار",
    androidStep2: 'اضغط على "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية"',
    androidStep2Hint: "يختلف اسم الخيار حسب المتصفح",
    androidStep3: 'اضغط "تثبيت" للتأكيد',
  },
  ex = {
    networkError: "خطأ في الشبكة. يرجى التحقق من اتصالك.",
    serverError: "خطأ في الخادم. يرجى المحاولة لاحقاً.",
    unauthorized: "يرجى تسجيل الدخول للمتابعة.",
    notFound: "الصفحة غير موجودة",
    validation: "يرجى التحقق من البيانات المدخلة",
    uploadFailed: "فشل الرفع. يرجى المحاولة مرة أخرى.",
    goalRequired: "يرجى اختيار هدف واحد على الأقل",
    weightHeightRequired: "يرجى إدخال وزنك وطولك",
    ageGenderRequired: "يرجى إدخال عمرك واختيار جنسك",
    weightOutOfRange: "يجب أن يكون الوزن بين 30 و 300 كجم",
    heightOutOfRange: "يجب أن يكون الطول بين 100 و 250 سم",
    ageOutOfRange: "يجب أن يكون العمر بين 13 و 120 سنة",
    activityLevelRequired: "يرجى اختيار مستوى النشاط",
    experienceLevelRequired: "يرجى اختيار مستوى الخبرة",
    workoutDaysRequired: "يرجى اختيار يوم تمرين واحد على الأقل",
    workoutDaysMin: "يرجى اختيار {min} أيام تمرين على الأقل لنتائج فعلية",
    sessionDurationRequired: "يرجى اختيار مدة الجلسة",
    equipmentRequired: "يرجى اختيار المعدات المتاحة",
    equipmentSpecify: "يرجى تحديد المعدات الخاصة بك",
    inBodyFileRequired: "يرجى رفع ورقة نتيجة InBody",
    signInRequired: "يرجى تسجيل الدخول للمتابعة",
    unexpectedError: "حدث خطأ غير متوقع",
    somethingWentWrong: "حدث خطأ ما. تم إبلاغ فريقنا ونعمل على إصلاحه.",
    errorId: "رقم الخطأ",
    tryAgain: "حاول مرة أخرى",
    replyFailed: "فشل إرسال الرد. يرجى المحاولة مرة أخرى.",
    saveFailed: "فشل الحفظ. يرجى المحاولة مرة أخرى.",
    pageNotFound: "الصفحة غير موجودة",
    pageNotFoundDescription: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    goHome: "العودة للرئيسية",
  },
  tx = {
    banner: {
      expiresIn: "ينتهي اشتراكك خلال {days} أيام.",
      expiresInOne: "ينتهي اشتراكك غداً!",
      renewNow: "جدّد الآن",
    },
    expired: {
      title: "انتهى الاشتراك",
      subtitle: "انتهت صلاحية اشتراكك",
      dataWarning: "سيتم الاحتفاظ ببياناتك لمدة {days} يوماً. بعد ذلك، سيتم حذفها نهائياً.",
      renewButton: "تجديد الاشتراك",
      logoutButton: "تسجيل الخروج",
      contactCoach: "تواصل مع مدربك للمساعدة",
    },
    renewal: {
      title: "تجديد اشتراكك",
      selectPlan: "اختر خطة",
      paymentMethod: "طريقة الدفع",
      uploadScreenshot: "ارفع لقطة شاشة الدفع",
      uploadHint: "ارفع لقطة شاشة لتحويل الدفع",
      submitRenewal: "إرسال طلب التجديد",
      submitting: "جارٍ الإرسال...",
      pendingTitle: "تم إرسال التجديد!",
      pendingMessage:
        "تم إرسال طلب التجديد. سيراجعه مدربك قريباً. سيتم توجيهك إلى لوحة التحكم بمجرد الموافقة.",
      alreadyPending: "لديك بالفعل طلب تجديد قيد المراجعة. سيراجعه مدربك قريباً.",
      selectPlanFirst: "يرجى اختيار خطة أولاً",
      transferReferenceNumber: "رقم مرجع التحويل",
      transferReferenceNumberPlaceholder: "أدخل رقم مرجع التحويل",
      transferAmount: "مبلغ التحويل",
      transferAmountPlaceholder: "مثال: 2500",
      refRequired: "رقم مرجع التحويل مطلوب",
      amountRequired: "مبلغ التحويل مطلوب",
      screenshotRequired: "لقطة شاشة الدفع مطلوبة",
      perMonth: "/شهر",
      perQuarter: "/ربع سنة",
      popular: "الأكثر شيوعاً",
    },
  },
  nx = {
    nameMinLength: "يجب أن يكون الاسم حرفين على الأقل",
    nameMaxLength: "يجب أن يكون الاسم أقل من ١٠٠ حرف",
    invalidPhone: "صيغة رقم الهاتف غير صحيحة",
    invalidEmail: "يرجى إدخال بريد إلكتروني صالح",
    passwordMinLength: "يجب أن تكون كلمة المرور ٦ أحرف على الأقل",
  },
  ix = {
    checkIn: {
      title: "خطأ في المتابعة",
      description: "لم نتمكن من تحميل نموذج المتابعة. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    settings: {
      title: "خطأ في الإعدادات",
      description: "لم نتمكن من تحميل إعداداتك. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    tickets: {
      title: "خطأ في التذاكر",
      description: "لم نتمكن من تحميل تذاكرك. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    progress: {
      title: "خطأ في التقدم",
      description: "لم نتمكن من تحميل بيانات تقدمك. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    tracking: {
      title: "خطأ في التتبع",
      description: "لم نتمكن من تحميل بيانات التتبع. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    dashboard: {
      title: "خطأ في لوحة التحكم",
      description: "لم نتمكن من تحميل لوحة التحكم. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    adminSettings: {
      title: "خطأ في الإعدادات",
      description: "لم نتمكن من تحميل إعدادات المشرف. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    adminSignups: {
      title: "خطأ في التسجيلات",
      description: "لم نتمكن من تحميل صفحة التسجيلات. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    adminTickets: {
      title: "خطأ في التذاكر",
      description: "لم نتمكن من تحميل تذاكر المشرف. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    workoutPlan: {
      title: "خطأ في خطة التمارين",
      description: "لم نتمكن من تحميل خطة التمارين. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    mealPlan: {
      title: "خطأ في خطة الوجبات",
      description: "لم نتمكن من تحميل خطة الوجبات. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    faq: {
      title: "خطأ في الأسئلة الشائعة",
      description: "لم نتمكن من تحميل الأسئلة الشائعة. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
    adminPanel: {
      title: "خطأ في لوحة المشرف",
      description: "حدث خطأ في لوحة المشرف. يرجى المحاولة مرة أخرى.",
      retry: "حاول مرة أخرى",
    },
  },
  ax = {
    title: "الإشعارات",
    markAllRead: "تحديد الكل كمقروء",
    empty: "لا توجد إشعارات بعد",
    justNow: "الآن",
    minutesAgo: "منذ {count} دقيقة",
    hoursAgo: "منذ {count} ساعة",
    daysAgo: "منذ {count} يوم",
  },
  sx = {
    not_supported: "إشعارات الدفع غير مدعومة على هذا الجهاز",
    not_configured: "خدمة الإشعارات غير مُعدّة. يرجى التواصل مع المدرب.",
    profile_not_loaded: "لم يتم تحميل الملف الشخصي بعد. يرجى المحاولة مرة أخرى.",
    permission_denied: "تم حظر الإشعارات. يرجى تفعيلها من إعدادات المتصفح.",
    permission_dismissed: "تم رفض طلب الإذن. يرجى المحاولة مرة أخرى لتفعيل الإشعارات.",
    subscribe_failed: "فشل تفعيل الإشعارات. يرجى المحاولة مرة أخرى.",
    unsubscribe_failed: "فشل إيقاف الإشعارات. يرجى المحاولة مرة أخرى.",
  },
  ox = {
    common: UA,
    emptyStates: BA,
    auth: qA,
    nav: zA,
    dashboard: IA,
    meals: jA,
    workouts: HA,
    checkIn: VA,
    tracking: QA,
    progress: $A,
    tickets: FA,
    faq: YA,
    settings: GA,
    onboarding: KA,
    units: XA,
    days: WA,
    brand: ZA,
    pwa: JA,
    errors: ex,
    subscription: tx,
    validation: nx,
    routeErrors: ix,
    notificationCenter: ax,
    notificationErrors: sx,
  };
ct.use(yv)
  .use(a_)
  .init({
    resources: { en: { translation: PA }, ar: { translation: ox } },
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    interpolation: { escapeValue: !1 },
    detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
  });
const rx = new cT("https://earnest-spaniel-753.convex.cloud"),
  lx = IR({
    routeTree: kE,
    context: { auth: void 0 },
    defaultPendingMs: 200,
    defaultPendingMinMs: 100,
  });
function ux() {
  const a = F1();
  return ae.jsx(VR, { router: lx, context: { auth: a } });
}
function cx() {
  return ae.jsx(_T, {
    client: rx,
    authClient: H1,
    children: ae.jsx($1, { children: ae.jsx(ux, {}) }),
  });
}
Kb.createRoot(document.getElementById("root")).render(
  ae.jsx(W.StrictMode, { children: ae.jsx(cx, {}) }),
);
export {
  qy as L,
  jy as O,
  hx as R,
  He as _,
  Q1 as a,
  Py as b,
  u_ as c,
  px as d,
  bT as e,
  yx as f,
  By as g,
  gx as h,
  Dt as i,
  ae as j,
  F1 as k,
  H1 as l,
  nE as m,
  dx as n,
  Lf as o,
  W as r,
  hT as u,
};
