!(function (o) {
  var r = {};
  function n(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return o[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = o),
    (n.c = r),
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
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
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
    var r = o(2),
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
    (0, r.combineWithMathJax)({
      _: { input: { tex: { autoload: { AutoloadConfiguration: n } } } },
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
    var r,
      n =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            })(t, e);
        }),
        function (t, e) {
          function o() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        }),
      P =
        (this && this.__read) ||
        function (t, e) {
          var o = "function" == typeof Symbol && t[Symbol.iterator];
          if (!o) return t;
          var r,
            n,
            a = o.call(t),
            i = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = a.next()).done; )
              i.push(r.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              r && !r.done && (o = a.return) && o.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
          return i;
        },
      w =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            o = e && t[e],
            r = 0;
          if (o) return o.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && r >= t.length && (t = void 0),
                  { value: t && t[r++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a,
      i = o(4),
      u = o(5),
      C = o(6),
      S = o(7),
      b = o(8),
      l = o(9),
      c =
        ((a = u.CommandMap),
        n(p, a),
        (p.prototype.remove = function (t) {
          this.map.delete(t);
        }),
        p);
    function p() {
      return (null !== a && a.apply(this, arguments)) || this;
    }
    function j(t, e, o, r) {
      var n, a, i, u;
      if (b.Package.packages.has(t.options.require.prefix + o)) {
        var l = t.options.autoload[o],
          c = P(2 === l.length && Array.isArray(l[0]) ? l : [l, []], 2),
          p = c[0],
          s = c[1];
        try {
          for (var f = w(p), d = f.next(); !d.done; d = f.next()) {
            var x = d.value;
            q.remove(x);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            d && !d.done && (a = f.return) && a.call(f);
          } finally {
            if (n) throw n.error;
          }
        }
        try {
          for (var y = w(s), h = y.next(); !h.done; h = y.next()) {
            var M = h.value;
            k.remove(M);
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            h && !h.done && (u = y.return) && u.call(y);
          } finally {
            if (i) throw i.error;
          }
        }
        t.i -= e.length + (r ? 0 : 7);
      }
      S.RequireLoad(t, o);
    }
    var q = new (e.AutoloadCommandMap = c)("autoload-macros", {}, {}),
      k = new c("autoload-environments", {}, {});
    e.AutoloadConfiguration = i.Configuration.create("autoload", {
      handler: {
        macro: ["autoload-macros"],
        environment: ["autoload-environments"],
      },
      options: {
        autoload: l.expandable({
          action: ["toggle", "mathtip", "texttip"],
          amsCd: [[], ["CD"]],
          bbox: ["bbox"],
          boldsymbol: ["boldsymbol"],
          braket: [
            "bra",
            "ket",
            "braket",
            "set",
            "Bra",
            "Ket",
            "Braket",
            "Set",
            "ketbra",
            "Ketbra",
          ],
          cancel: ["cancel", "bcancel", "xcancel", "cancelto"],
          color: ["color", "definecolor", "textcolor", "colorbox", "fcolorbox"],
          enclose: ["enclose"],
          extpfeil: [
            "xtwoheadrightarrow",
            "xtwoheadleftarrow",
            "xmapsto",
            "xlongequal",
            "xtofrom",
            "Newextarrow",
          ],
          html: ["href", "class", "style", "cssId"],
          mhchem: ["ce", "pu"],
          newcommand: [
            "newcommand",
            "renewcommand",
            "newenvironment",
            "renewenvironment",
            "def",
            "let",
          ],
          unicode: ["unicode"],
          verb: ["verb"],
        }),
      },
      config: function (t, e) {
        var o,
          r,
          n,
          a,
          i,
          u,
          l = e.parseOptions,
          c = l.handlers.get("macro"),
          p = l.handlers.get("environment"),
          s = l.options.autoload;
        try {
          for (var f = w(Object.keys(s)), d = f.next(); !d.done; d = f.next()) {
            var x = d.value,
              y = s[x],
              h = P(2 === y.length && Array.isArray(y[0]) ? y : [y, []], 2),
              M = h[0],
              b = h[1];
            try {
              for (
                var m = ((n = void 0), w(M)), _ = m.next();
                !_.done;
                _ = m.next()
              ) {
                var v = _.value;
                (c.lookup(v) && "color" !== v) ||
                  q.add(v, new C.Macro(v, j, [x, !0]));
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                _ && !_.done && (a = m.return) && a.call(m);
              } finally {
                if (n) throw n.error;
              }
            }
            try {
              for (
                var g = ((i = void 0), w(b)), O = g.next();
                !O.done;
                O = g.next()
              ) {
                var J = O.value;
                p.lookup(J) || k.add(J, new C.Macro(J, j, [x, !1]));
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                O && !O.done && (u = g.return) && u.call(g);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            d && !d.done && (r = f.return) && r.call(f);
          } finally {
            if (o) throw o.error;
          }
        }
        l.options.require.jax || S.RequireConfiguration.config(t, e);
      },
      configPriority: 10,
      init: function (t) {
        t.options.require ||
          l.defaultOptions(t.options, S.RequireConfiguration.options);
      },
      priority: 10,
    });
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
      (e.Symbol = MathJax._.input.tex.Symbol.Symbol),
      (e.Macro = MathJax._.input.tex.Symbol.Macro);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.RequireLoad =
        MathJax._.input.tex.require.RequireConfiguration.RequireLoad),
      (e.RequireMethods =
        MathJax._.input.tex.require.RequireConfiguration.RequireMethods),
      (e.options = MathJax._.input.tex.require.RequireConfiguration.options),
      (e.RequireConfiguration =
        MathJax._.input.tex.require.RequireConfiguration.RequireConfiguration);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PackageError = MathJax._.components.package.PackageError),
      (e.Package = MathJax._.components.package.Package);
  },
  function (t, e, o) {
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
]);
