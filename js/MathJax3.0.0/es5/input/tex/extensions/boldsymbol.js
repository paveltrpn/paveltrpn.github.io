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
      _: { input: { tex: { boldsymbol: { BoldsymbolConfiguration: n } } } },
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
    var l =
      (this && this.__values) ||
      function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          a = 0;
        if (o) return o.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && a >= t.length && (t = void 0),
                { value: t && t[a++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = o(4),
      u = o(5),
      s = o(6),
      n = o(7),
      r = o(8),
      c = {};
    function i(t, e, o, a) {
      var n = r.NodeFactory.createToken(t, e, o, a);
      return (
        "mtext" !== e &&
          t.configuration.parser.stack.env.boldsymbol &&
          (u.default.setProperty(n, "fixBold", !0),
          t.configuration.addNode("fixBold", n)),
        n
      );
    }
    function d(t) {
      var e, o;
      try {
        for (
          var a = l(t.data.getList("fixBold")), n = a.next();
          !n.done;
          n = a.next()
        ) {
          var r = n.value;
          if (u.default.getProperty(r, "fixBold")) {
            var i = u.default.getAttribute(r, "mathvariant");
            null == i
              ? u.default.setAttribute(
                  r,
                  "mathvariant",
                  s.TexConstant.Variant.BOLD
                )
              : u.default.setAttribute(r, "mathvariant", c[i] || i),
              u.default.removeProperties(r, "fixBold");
          }
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          n && !n.done && (o = a.return) && o.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    (c[s.TexConstant.Variant.NORMAL] = s.TexConstant.Variant.BOLD),
      (c[s.TexConstant.Variant.ITALIC] = s.TexConstant.Variant.BOLDITALIC),
      (c[s.TexConstant.Variant.FRAKTUR] = s.TexConstant.Variant.BOLDFRAKTUR),
      (c[s.TexConstant.Variant.SCRIPT] = s.TexConstant.Variant.BOLDSCRIPT),
      (c[s.TexConstant.Variant.SANSSERIF] =
        s.TexConstant.Variant.BOLDSANSSERIF),
      (c["-tex-calligraphic"] = "-tex-bold-calligraphic"),
      (c["-tex-oldstyle"] = "-tex-bold-oldstyle"),
      (e.BoldsymbolMethods = {}),
      (e.BoldsymbolMethods.Boldsymbol = function (t, e) {
        var o = t.stack.env.boldsymbol;
        t.stack.env.boldsymbol = !0;
        var a = t.ParseArg(e);
        (t.stack.env.boldsymbol = o), t.Push(a);
      }),
      new n.CommandMap(
        "boldsymbol",
        { boldsymbol: "Boldsymbol" },
        e.BoldsymbolMethods
      ),
      (e.createBoldToken = i),
      (e.rewriteBoldTokens = d),
      (e.BoldsymbolConfiguration = a.Configuration.create("boldsymbol", {
        handler: { macro: ["boldsymbol"] },
        nodes: { token: i },
        postprocessors: [d],
      }));
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (e.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.NodeUtil.default);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TexConstant = MathJax._.input.tex.TexConstants.TexConstant);
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
      (e.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory);
  },
]);
