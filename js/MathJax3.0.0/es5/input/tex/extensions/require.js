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
    n((n.s = 0));
})([
  function (e, t, a) {
    "use strict";
    a(1);
  },
  function (e, t, a) {
    "use strict";
    var r = a(2),
      n = (function (e) {
        {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        }
      })(a(3));
    (0, r.combineWithMathJax)({
      _: { input: { tex: { require: { RequireConfiguration: n } } } },
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
  function (e, h, x) {
    "use strict";
    (function (e) {
      var l =
          (this && this.__values) ||
          function (e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
              a = t && e[t],
              r = 0;
            if (a) return a.call(e);
            if (e && "number" == typeof e.length)
              return {
                next: function () {
                  return (
                    e && r >= e.length && (e = void 0),
                    { value: e && e[r++], done: !e }
                  );
                },
              };
            throw new TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined."
            );
          },
        a =
          (this && this.__read) ||
          function (e, t) {
            var a = "function" == typeof Symbol && e[Symbol.iterator];
            if (!a) return e;
            var r,
              n,
              o = a.call(e),
              i = [];
            try {
              for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
                i.push(r.value);
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                r && !r.done && (a = o.return) && a.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return i;
          },
        n =
          (this && this.__spread) ||
          function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e = e.concat(a(arguments[t]));
            return e;
          };
      Object.defineProperty(h, "__esModule", { value: !0 });
      var u = x(5),
        t = x(6),
        o = x(7),
        i = x(8),
        s = x(9),
        p = x(10),
        r = x(11),
        c = (e.MathJax && e.MathJax.config) || {};
      function f(e, t) {
        var a,
          r = e.parseOptions.options.require,
          n = t.substr(r.prefix.length);
        if (r.required.indexOf(n) < 0) {
          r.required.push(n),
            (function (e, t) {
              var a, r;
              void 0 === t && (t = []);
              var n = e.parseOptions.options.require.prefix;
              try {
                for (var o = l(t), i = o.next(); !i.done; i = o.next()) {
                  var u = i.value;
                  u.substr(0, n.length) === n && f(e, u);
                }
              } catch (e) {
                a = { error: e };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (a) throw a.error;
                }
              }
            })(e, s.CONFIG.dependencies[t]);
          var o = u.ConfigurationHandler.get(n);
          if (o) {
            var i = c[t] || {};
            o.options &&
              1 === Object.keys(o.options).length &&
              o.options[n] &&
              (((a = {})[n] = i), (i = a)),
              e.configuration.register(o, e, i);
          }
        }
      }
      function d(e, t) {
        var a = e.options.require,
          r = a.allow,
          n = ("[" === t.substr(0, 1) ? "" : a.prefix) + t;
        if (
          !(r.hasOwnProperty(n)
            ? r[n]
            : r.hasOwnProperty(t)
            ? r[t]
            : a.defaultAllow)
        )
          throw new o.default(
            "BadRequire",
            'Extension "%1" is now allowed to be loaded',
            n
          );
        i.Package.packages.has(n)
          ? f(a.jax, n)
          : p.mathjax.retryAfter(s.Loader.load(n));
      }
      (h.RequireLoad = d),
        (h.RequireMethods = {
          Require: function (e, t) {
            var a = e.GetArgument(t);
            if (a.match(/[^_a-zA-Z0-9]/) || "" === a)
              throw new o.default(
                "BadPackageName",
                "Argument for %1 is not a valid package name",
                t
              );
            d(e, a);
          },
        }),
        (h.options = {
          require: {
            allow: r.expandable({ base: !1, "all-packages": !1 }),
            defaultAllow: !0,
            prefix: "tex",
          },
        }),
        new t.CommandMap("require", { require: "Require" }, h.RequireMethods),
        (h.RequireConfiguration = u.Configuration.create("require", {
          handler: { macro: ["require"] },
          config: function (e, t) {
            var a = t.parseOptions.options.require;
            (a.jax = t), (a.required = n(t.options.packages));
            var r = a.prefix;
            if (r.match(/[^_a-zA-Z0-9]/))
              throw Error("Illegal characters used in \\require prefix");
            s.CONFIG.paths[r] ||
              (s.CONFIG.paths[r] = "[mathjax]/input/tex/extensions"),
              (a.prefix = "[" + r + "]/");
          },
          options: h.options,
        }));
    }.call(this, x(4)));
  },
  function (Sa, Ta) {
    var Ua;
    Ua = (function () {
      return this;
    })();
    try {
      Ua = Ua || Function("return this")() || eval("this");
    } catch (e) {
      "object" == typeof window && (Ua = window);
    }
    Sa.exports = Ua;
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
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PackageError = MathJax._.components.package.PackageError),
      (t.Package = MathJax._.components.package.Package);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Loader = MathJax._.components.loader.Loader),
      (t.MathJax = MathJax._.components.loader.MathJax),
      (t.CONFIG = MathJax._.components.loader.CONFIG);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.mathjax = MathJax._.mathjax.mathjax);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.APPEND = MathJax._.util.Options.APPEND),
      (t.REMOVE = MathJax._.util.Options.REMOVE),
      (t.Expandable = MathJax._.util.Options.Expandable),
      (t.expandable = MathJax._.util.Options.expandable),
      (t.makeArray = MathJax._.util.Options.makeArray),
      (t.keys = MathJax._.util.Options.keys),
      (t.copy = MathJax._.util.Options.copy),
      (t.insert = MathJax._.util.Options.insert),
      (t.defaultOptions = MathJax._.util.Options.defaultOptions),
      (t.userOptions = MathJax._.util.Options.userOptions),
      (t.selectOptions = MathJax._.util.Options.selectOptions),
      (t.selectOptionsFromKeys = MathJax._.util.Options.selectOptionsFromKeys),
      (t.separateOptions = MathJax._.util.Options.separateOptions);
  },
]);
