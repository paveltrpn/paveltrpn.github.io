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
      _: {
        input: { tex: { config_macros: { ConfigMacrosConfiguration: o } } },
      },
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
    var p =
      (this && this.__values) ||
      function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          a = e && t[e],
          n = 0;
        if (a) return a.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && n >= t.length && (t = void 0),
                { value: t && t[n++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = a(4),
      o = a(5),
      r = a(6),
      s = a(7),
      M = a(8);
    var f = new r.CommandMap("configMacros", {}, {});
    e.ConfigMacrosConfiguration = n.Configuration.create("configMacros", {
      handler: { macro: ["configMacros"] },
      config: function (t, e) {
        var a,
          n,
          o = t.options.macros;
        try {
          for (var r = p(Object.keys(o)), i = r.next(); !i.done; i = r.next()) {
            var u = i.value,
              l = "string" == typeof o[u] ? [o[u]] : o[u],
              c = Array.isArray(l[2])
                ? new s.Macro(
                    u,
                    M.default.MacroWithTemplate,
                    l.slice(0, 2).concat(l[2])
                  )
                : new s.Macro(u, M.default.Macro, l);
            f.add(u, c);
          }
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (a) throw a.error;
          }
        }
      },
      options: { macros: o.expandable({}) },
    });
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
      (e.APPEND = MathJax._.util.Options.APPEND),
      (e.REMOVE = MathJax._.util.Options.REMOVE),
      (e.Expandable = MathJax._.util.Options.Expandable),
      (e.expandable = MathJax._.util.Options.expandable),
      (e.makeArray = MathJax._.util.Options.makeArray),
      (e.keys = MathJax._.util.Options.keys),
      (e.copy = MathJax._.util.Options.copy),
      (e.insert = MathJax._.util.Options.insert),
      (e.defaultOptions = MathJax._.util.Options.defaultOptions),
      (e.userOptions = MathJax._.util.Options.userOptions),
      (e.selectOptions = MathJax._.util.Options.selectOptions),
      (e.selectOptionsFromKeys = MathJax._.util.Options.selectOptionsFromKeys),
      (e.separateOptions = MathJax._.util.Options.separateOptions);
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
      (e.Symbol = MathJax._.input.tex.Symbol.Symbol),
      (e.Macro = MathJax._.input.tex.Symbol.Macro);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.newcommand.NewcommandMethods.default);
  },
]);
