!(function (a) {
  var n = {};
  function o(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return a[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = a),
    (o.c = n),
    (o.d = function (e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
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
  function (e, t, a) {
    "use strict";
    a(1);
  },
  function (e, t, a) {
    "use strict";
    var n = a(2),
      o = (function (e) {
        {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        }
      })(a(3));
    (0, n.combineWithMathJax)({
      _: { input: { tex: { bbox: { BboxConfiguration: o } } } },
    });
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.combineConfig = MathJax._.components.global.combineConfig),
      (t.combineDefaults = MathJax._.components.global.combineDefaults),
      (t.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (t.MathJax = MathJax._.components.global.MathJax);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = a(4),
      o = a(5),
      d = a(6);
    (t.BboxMethods = {}),
      (t.BboxMethods.BBox = function (e, t) {
        for (
          var a,
            n,
            o,
            r = e.GetBrackets(t, ""),
            i = e.ParseArg(t),
            u = r.split(/,/),
            l = 0,
            c = u.length;
          l < c;
          l++
        ) {
          var p = u[l].trim(),
            f = p.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);
          if (f) {
            if (a)
              throw new d.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Padding",
                t
              );
            var s = b(f[1] + f[3]);
            s &&
              (a = {
                height: "+" + s,
                depth: "+" + s,
                lspace: s,
                width: "+" + 2 * parseInt(f[1], 10) + f[3],
              });
          } else if (p.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)) {
            if (n)
              throw new d.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Background",
                t
              );
            n = p;
          } else if (p.match(/^[-a-z]+:/i)) {
            if (o)
              throw new d.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Style",
                t
              );
            o = M(p);
          } else if ("" !== p)
            throw new d.default(
              "InvalidBBoxProperty",
              '"%1" doesn\'t look like a color, a padding dimension, or a style',
              p
            );
        }
        a && (i = e.create("node", "mpadded", [i], a)),
          (n || o) &&
            ((a = {}),
            n && Object.assign(a, { mathbackground: n }),
            o && Object.assign(a, { style: o }),
            (i = e.create("node", "mstyle", [i], a))),
          e.Push(i);
      });
    var M = function (e) {
        return e;
      },
      b = function (e) {
        return e;
      };
    new o.CommandMap("bbox", { bbox: "BBox" }, t.BboxMethods),
      (t.BboxConfiguration = n.Configuration.create("bbox", {
        handler: { macro: ["bbox"] },
      }));
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (t.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (e, t, a) {
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
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.TexError.default);
  },
]);
