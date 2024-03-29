!(function (a) {
  var r = {};
  function n(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return a[e].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
  }
  (n.m = a),
    (n.c = r),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            a,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var b = a(9),
      x = a(10),
      C = a(11),
      v = a(12),
      y = {
        CD: function (e, t) {
          e.Push(t);
          var a = e.itemFactory.create("array"),
            r = e.configuration.options.amsCd;
          return (
            a.setProperties({
              minw: e.stack.env.CD_minw || r.harrowsize,
              minh: e.stack.env.CD_minh || r.varrowsize,
            }),
            (a.arraydef = {
              columnalign: "center",
              columnspacing: r.colspace,
              rowspacing: r.rowspace,
              displaystyle: !0,
            }),
            a
          );
        },
        arrow: function (e, t) {
          var a = e.string.charAt(e.i);
          if (!a.match(/[><VA.|=]/)) return x.Other(e, t);
          e.i++;
          var r = e.stack.Top();
          (r.isKind("array") && !r.Size()) ||
            (y.cell(e, t), (r = e.stack.Top()));
          for (
            var n,
              o = r,
              i = o.table.length % 2 == 1,
              l = (o.row.length + (i ? 0 : 1)) % 2;
            l;

          )
            y.cell(e, t), l--;
          var c = { minsize: o.getProperty("minw"), stretchy: !0 },
            s = {
              minsize: o.getProperty("minh"),
              stretchy: !0,
              symmetric: !0,
              lspace: 0,
              rspace: 0,
            };
          if ("." === a);
          else if ("|" === a) n = e.create("token", "mo", s, "\u2225");
          else if ("=" === a) n = e.create("token", "mo", c, "=");
          else {
            var u = { ">": "\u2192", "<": "\u2190", V: "\u2193", A: "\u2191" }[
                a
              ],
              d = e.GetUpTo(t + a, a),
              m = e.GetUpTo(t + a, a);
            if (">" === a || "<" === a) {
              if (
                ((n = e.create("token", "mo", c, u)),
                (d = d || "\\kern " + o.getProperty("minw")) || m)
              ) {
                var p = { width: "+11mu", lspace: "6mu" };
                if (((n = e.create("node", "munderover", [n])), d)) {
                  var M = new b.default(d, e.stack.env, e.configuration).mml(),
                    f = e.create("node", "mpadded", [M], p);
                  v.default.setAttribute(f, "voffset", ".1em"),
                    v.default.setChild(n, n.over, f);
                }
                if (m) {
                  var h = new b.default(m, e.stack.env, e.configuration).mml();
                  v.default.setChild(
                    n,
                    n.under,
                    e.create("node", "mpadded", [h], p)
                  );
                }
                e.configuration.options.amsCd.hideHorizontalLabels &&
                  (n = e.create("node", "mpadded", n, {
                    depth: 0,
                    height: ".67em",
                  }));
              }
            } else {
              var _ = e.create("token", "mo", s, u);
              (n = _),
                (d || m) &&
                  ((n = e.create("node", "mrow")),
                  d &&
                    v.default.appendChildren(n, [
                      new b.default(
                        "\\scriptstyle\\llap{" + d + "}",
                        e.stack.env,
                        e.configuration
                      ).mml(),
                    ]),
                  (_.texClass = C.TEXCLASS.ORD),
                  v.default.appendChildren(n, [_]),
                  m &&
                    v.default.appendChildren(n, [
                      new b.default(
                        "\\scriptstyle\\rlap{" + m + "}",
                        e.stack.env,
                        e.configuration
                      ).mml(),
                    ]));
            }
          }
          n && e.Push(n), y.cell(e, t);
        },
        cell: function (e, t) {
          var a = e.stack.Top();
          (a.table || []).length % 2 == 0 &&
            0 === (a.row || []).length &&
            e.Push(
              e.create("node", "mpadded", [], { height: "8.5pt", depth: "2pt" })
            ),
            e.Push(
              e.itemFactory
                .create("cell")
                .setProperties({ isEntry: !0, name: t })
            );
        },
        minCDarrowwidth: function (e, t) {
          e.stack.env.CD_minw = e.GetDimen(t);
        },
        minCDarrowheight: function (e, t) {
          e.stack.env.CD_minh = e.GetDimen(t);
        },
      };
    t.default = y;
  },
  function (e, t, a) {
    "use strict";
    a(2);
  },
  function (e, t, a) {
    "use strict";
    var r = a(3),
      n = i(a(4)),
      o = i(a(0));
    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
      return (t.default = e), t;
    }
    (0, r.combineWithMathJax)({
      _: {
        input: { tex: { ams_cd: { AmsCdConfiguration: n, AmsCdMethods: o } } },
      },
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
    var r = a(5);
    a(6),
      (t.AmsCdConfiguration = r.Configuration.create("amsCd", {
        handler: {
          character: ["amsCd_special"],
          macro: ["amsCd_macros"],
          environment: ["amsCd_environment"],
        },
        options: {
          amsCd: {
            colspace: "5pt",
            rowspace: "5pt",
            harrowsize: "2.75em",
            varrowsize: "1.75em",
            hideHorizontalLabels: !1,
          },
        },
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
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = a(7),
      n = a(8),
      o = a(0);
    new r.EnvironmentMap(
      "amsCd_environment",
      n.default.environment,
      { CD: "CD" },
      o.default
    ),
      new r.CommandMap(
        "amsCd_macros",
        {
          minCDarrowwidth: "minCDarrowwidth",
          minCDarrowheight: "minCDarrowheight",
        },
        o.default
      ),
      new r.MacroMap("amsCd_special", { "@": "arrow" }, o.default);
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
      (t.default = MathJax._.input.tex.ParseMethods.default);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.TexParser.default);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Other = MathJax._.input.tex.base.BaseConfiguration.Other),
      (t.BaseTags = MathJax._.input.tex.base.BaseConfiguration.BaseTags),
      (t.BaseConfiguration =
        MathJax._.input.tex.base.BaseConfiguration.BaseConfiguration);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TEXCLASS = MathJax._.core.MmlTree.MmlNode.TEXCLASS),
      (t.TEXCLASSNAMES = MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES),
      (t.indentAttributes = MathJax._.core.MmlTree.MmlNode.indentAttributes),
      (t.AbstractMmlNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlNode),
      (t.AbstractMmlTokenNode =
        MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode),
      (t.AbstractMmlLayoutNode =
        MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode),
      (t.AbstractMmlBaseNode =
        MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode),
      (t.AbstractMmlEmptyNode =
        MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode),
      (t.TextNode = MathJax._.core.MmlTree.MmlNode.TextNode),
      (t.XMLNode = MathJax._.core.MmlTree.MmlNode.XMLNode);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.NodeUtil.default);
  },
]);
