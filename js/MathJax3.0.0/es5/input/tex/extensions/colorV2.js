!(function (o) {
  var a = {};
  function n(t) {
    if (a[t]) return a[t].exports;
    var e = (a[t] = { i: t, l: !1, exports: {} });
    return o[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = o),
    (n.c = a),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            o,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return o;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (t, e, o) {
    "use strict";
    o(1);
  },
  function (t, e, o) {
    "use strict";
    var a = o(2),
      n = (function (t) {
        {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return (e.default = t), e;
        }
      })(o(3));
    (0, a.combineWithMathJax)({
      _: { input: { tex: { color_v2: { ColorV2Configuration: n } } } },
    });
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.combineConfig = MathJax._.components.global.combineConfig),
      (e.combineDefaults = MathJax._.components.global.combineDefaults),
      (e.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (e.MathJax = MathJax._.components.global.MathJax);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = o(4),
      n = o(5);
    (e.ColorV2Methods = {
      Color: function (t, e) {
        var o = t.GetArgument(e),
          a = t.stack.env.color;
        t.stack.env.color = o;
        var n = t.ParseArg(e);
        a ? (t.stack.env.color = a) : delete t.stack.env.color;
        var r = t.create("node", "mstyle", [n], { mathcolor: o });
        t.Push(r);
      },
    }),
      new a.CommandMap("colorV2", { color: "Color" }, e.ColorV2Methods),
      (e.ColorConfiguration = n.Configuration.create("colorV2", {
        handler: { macro: ["colorV2"] },
      }));
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractSymbolMap = MathJax._.input.tex.SymbolMap.AbstractSymbolMap),
      (e.RegExpMap = MathJax._.input.tex.SymbolMap.RegExpMap),
      (e.AbstractParseMap = MathJax._.input.tex.SymbolMap.AbstractParseMap),
      (e.CharacterMap = MathJax._.input.tex.SymbolMap.CharacterMap),
      (e.DelimiterMap = MathJax._.input.tex.SymbolMap.DelimiterMap),
      (e.MacroMap = MathJax._.input.tex.SymbolMap.MacroMap),
      (e.CommandMap = MathJax._.input.tex.SymbolMap.CommandMap),
      (e.EnvironmentMap = MathJax._.input.tex.SymbolMap.EnvironmentMap);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (e.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
]);
