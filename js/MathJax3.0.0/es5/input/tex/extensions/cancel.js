!(function (n) {
  var a = {};
  function o(e) {
    if (a[e]) return a[e].exports;
    var t = (a[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = n),
    (o.c = a),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          o.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n(1);
  },
  function (e, t, n) {
    "use strict";
    var a = n(2),
      o = (function (e) {
        {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
      })(n(3));
    (0, a.combineWithMathJax)({
      _: { input: { tex: { cancel: { CancelConfiguration: o } } } },
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.combineConfig = MathJax._.components.global.combineConfig),
      (t.combineDefaults = MathJax._.components.global.combineDefaults),
      (t.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (t.MathJax = MathJax._.components.global.MathJax);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = n(4),
      i = n(5),
      o = n(6),
      c = n(7),
      u = n(8);
    (t.CancelMethods = {}),
      (t.CancelMethods.Cancel = function (e, t, n) {
        var a = e.GetBrackets(t, ""),
          o = e.ParseArg(t),
          r = c.default.keyvalOptions(a, u.ENCLOSE_OPTIONS);
        (r.notation = n), e.Push(e.create("node", "menclose", [o], r));
      }),
      (t.CancelMethods.CancelTo = function (e, t) {
        var n = e.GetBrackets(t, ""),
          a = e.ParseArg(t),
          o = e.ParseArg(t),
          r = c.default.keyvalOptions(n, u.ENCLOSE_OPTIONS);
        (r.notation = [
          i.TexConstant.Notation.UPDIAGONALSTRIKE,
          i.TexConstant.Notation.UPDIAGONALARROW,
          i.TexConstant.Notation.NORTHEASTARROW,
        ].join(" ")),
          (a = e.create("node", "mpadded", [a], {
            depth: "-.1em",
            height: "+.1em",
            voffset: ".1em",
          })),
          e.Push(
            e.create("node", "msup", [e.create("node", "menclose", [o], r), a])
          );
      }),
      new o.CommandMap(
        "cancel",
        {
          cancel: ["Cancel", i.TexConstant.Notation.UPDIAGONALSTRIKE],
          bcancel: ["Cancel", i.TexConstant.Notation.DOWNDIAGONALSTRIKE],
          xcancel: [
            "Cancel",
            i.TexConstant.Notation.UPDIAGONALSTRIKE +
              " " +
              i.TexConstant.Notation.DOWNDIAGONALSTRIKE,
          ],
          cancelto: "CancelTo",
        },
        t.CancelMethods
      ),
      (t.CancelConfiguration = a.Configuration.create("cancel", {
        handler: { macro: ["cancel"] },
      }));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (t.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TexConstant = MathJax._.input.tex.TexConstants.TexConstant);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.AbstractSymbolMap = MathJax._.input.tex.SymbolMap.AbstractSymbolMap),
      (t.RegExpMap = MathJax._.input.tex.SymbolMap.RegExpMap),
      (t.AbstractParseMap = MathJax._.input.tex.SymbolMap.AbstractParseMap),
      (t.CharacterMap = MathJax._.input.tex.SymbolMap.CharacterMap),
      (t.DelimiterMap = MathJax._.input.tex.SymbolMap.DelimiterMap),
      (t.MacroMap = MathJax._.input.tex.SymbolMap.MacroMap),
      (t.CommandMap = MathJax._.input.tex.SymbolMap.CommandMap),
      (t.EnvironmentMap = MathJax._.input.tex.SymbolMap.EnvironmentMap);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.ParseUtil.default);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ENCLOSE_OPTIONS =
        MathJax._.input.tex.enclose.EncloseConfiguration.ENCLOSE_OPTIONS),
      (t.EncloseMethods =
        MathJax._.input.tex.enclose.EncloseConfiguration.EncloseMethods),
      (t.EncloseConfiguration =
        MathJax._.input.tex.enclose.EncloseConfiguration.EncloseConfiguration);
  },
]);
