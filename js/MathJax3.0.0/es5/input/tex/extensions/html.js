!(function (a) {
  var n = {};
  function r(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return a[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  (r.m = a),
    (r.c = n),
    (r.d = function (t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 1));
})([
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = a(7),
      n = {
        Href: function (t, e) {
          var a = t.GetArgument(e),
            n = u(t, e);
          o.default.setAttribute(n, "href", a), t.Push(n);
        },
        Class: function (t, e) {
          var a = t.GetArgument(e),
            n = u(t, e),
            r = o.default.getAttribute(n, "class");
          r && (a = r + " " + a),
            o.default.setAttribute(n, "class", a),
            t.Push(n);
        },
        Style: function (t, e) {
          var a = t.GetArgument(e),
            n = u(t, e),
            r = o.default.getAttribute(n, "style");
          r &&
            (";" !== a.charAt(a.length - 1) && (a += ";"), (a = r + " " + a)),
            o.default.setAttribute(n, "style", a),
            t.Push(n);
        },
        Id: function (t, e) {
          var a = t.GetArgument(e),
            n = u(t, e);
          o.default.setAttribute(n, "id", a), t.Push(n);
        },
      },
      u = function (t, e) {
        var a = t.ParseArg(e);
        if (!o.default.isInferred(a)) return a;
        var n = o.default.getChildren(a);
        if (1 === n.length) return n[0];
        var r = t.create("node", "mrow");
        return o.default.copyChildren(a, r), o.default.copyAttributes(a, r), r;
      };
    e.default = n;
  },
  function (t, e, a) {
    "use strict";
    a(2);
  },
  function (t, e, a) {
    "use strict";
    var n = a(3),
      r = u(a(4)),
      o = u(a(0));
    function u(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var a in t)
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return (e.default = t), e;
    }
    (0, n.combineWithMathJax)({
      _: { input: { tex: { html: { HtmlConfiguration: r, HtmlMethods: o } } } },
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
    var n = a(5),
      r = a(6),
      o = a(0);
    new r.CommandMap(
      "html_macros",
      { href: "Href", class: "Class", style: "Style", cssId: "Id" },
      o.default
    ),
      (e.HtmlConfiguration = n.Configuration.create("html", {
        handler: { macro: ["html_macros"] },
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
      (e.default = MathJax._.input.tex.NodeUtil.default);
  },
]);
