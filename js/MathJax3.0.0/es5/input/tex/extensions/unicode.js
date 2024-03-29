!(function (a) {
  var n = {};
  function o(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return a[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = a),
    (o.c = n),
    (o.d = function (t, e, a) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 0));
})([
  function (t, e, a) {
    "use strict";
    a(1);
  },
  function (t, e, a) {
    "use strict";
    var n = a(2),
      o = (function (t) {
        {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return (e.default = t), e;
        }
      })(a(3));
    (0, n.combineWithMathJax)({
      _: { input: { tex: { unicode: { UnicodeConfiguration: o } } } },
    });
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.combineConfig = MathJax._.components.global.combineConfig),
      (e.combineDefaults = MathJax._.components.global.combineDefaults),
      (e.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (e.MathJax = MathJax._.components.global.MathJax);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = a(4),
      p = a(5),
      o = a(6),
      d = a(7),
      s = a(8),
      f = a(9);
    e.UnicodeMethods = {};
    var M = {};
    (e.UnicodeMethods.Unicode = function (t, e) {
      var a = t.GetBrackets(e),
        n = null,
        o = null;
      a &&
        (o = a
          .replace(/ /g, "")
          .match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)
          ? ((n = a.replace(/ /g, "").split(/,/)), t.GetBrackets(e))
          : a);
      var i = d.default.trimSpaces(t.GetArgument(e)).replace(/^0x/, "x");
      if (!i.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/))
        throw new p.default(
          "BadUnicode",
          "Argument to \\unicode must be a number"
        );
      var r = parseInt(i.match(/^x/) ? "0" + i : i);
      M[r] ? (o = o || M[r][2]) : (M[r] = [800, 200, o, r]),
        n &&
          ((M[r][0] = Math.floor(1e3 * parseFloat(n[0]))),
          (M[r][1] = Math.floor(1e3 * parseFloat(n[1]))));
      var u = t.stack.env.font,
        l = {};
      o
        ? ((M[r][2] = l.fontfamily = o.replace(/'/g, "'")),
          u &&
            (u.match(/bold/) && (l.fontweight = "bold"),
            u.match(/italic|-mathit/) && (l.fontstyle = "italic")))
        : u && (l.mathvariant = u);
      var c = t.create("token", "mtext", l, f.numeric(i));
      s.default.setProperty(c, "unicode", !0), t.Push(c);
    }),
      new o.CommandMap("unicode", { unicode: "Unicode" }, e.UnicodeMethods),
      (e.UnicodeConfiguration = n.Configuration.create("unicode", {
        handler: { macro: ["unicode"] },
      }));
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (e.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.TexError.default);
  },
  function (t, e, a) {
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
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.ParseUtil.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.NodeUtil.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.options = MathJax._.util.Entities.options),
      (e.entities = MathJax._.util.Entities.entities),
      (e.add = MathJax._.util.Entities.add),
      (e.remove = MathJax._.util.Entities.remove),
      (e.translate = MathJax._.util.Entities.translate),
      (e.numeric = MathJax._.util.Entities.numeric);
  },
]);
