!(function (n) {
  var r = {};
  function o(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = n),
    (o.c = r),
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
        for (var r in t)
          o.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
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
    o((o.s = 3));
})([
  function (e, t, n) {
    "use strict";
    (function (e) {
      var u =
        (this && this.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
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
        };
      function c(e, t) {
        var n, r;
        try {
          for (var o = u(Object.keys(t)), a = o.next(); !a.done; a = o.next()) {
            var i = a.value;
            "__esModule" !== i &&
              ("object" == typeof e[i] && "object" == typeof t[i]
                ? c(e[i], t[i])
                : null !== t[i] && void 0 !== t[i] && (e[i] = t[i]));
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.combineConfig = c),
        (t.combineDefaults = function e(t, n, r) {
          var o, a;
          t[n] || (t[n] = {}), (t = t[n]);
          try {
            for (
              var i = u(Object.keys(r)), c = i.next();
              !c.done;
              c = i.next()
            ) {
              var s = c.value;
              "object" == typeof t[s] && "object" == typeof r[s]
                ? e(t, s, r[s])
                : null == t[s] && null != r[s] && (t[s] = r[s]);
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              c && !c.done && (a = i.return) && a.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return t;
        }),
        (t.combineWithMathJax = function (e) {
          return c(t.MathJax, e);
        }),
        void 0 === e.MathJax && (e.MathJax = {}),
        e.MathJax.version ||
          (e.MathJax = { version: "3.0.0", _: {}, config: e.MathJax }),
        (t.MathJax = e.MathJax);
    }.call(this, n(5)));
  },
  function (e, d, a) {
    "use strict";
    (function (n) {
      var u =
        (this && this.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
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
        };
      Object.defineProperty(d, "__esModule", { value: !0 });
      var e,
        t,
        r = a(0),
        l = a(2),
        o = a(2);
      (d.Package = o.Package),
        (d.PackageError = o.PackageError),
        ((t = e = d.Loader || (d.Loader = {})).ready = function () {
          for (var t, e, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          0 === n.length && (n = Array.from(l.Package.packages.keys()));
          var o = [];
          try {
            for (var a = u(n), i = a.next(); !i.done; i = a.next()) {
              var c = i.value,
                s = l.Package.packages.get(c) || new l.Package(c, !0);
              o.push(s.promise);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              i && !i.done && (e = a.return) && e.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
          return Promise.all(o);
        }),
        (t.load = function () {
          for (var t, e, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          if (0 === n.length) return Promise.resolve();
          var o = [];
          try {
            for (var a = u(n), i = a.next(); !i.done; i = a.next()) {
              var c = i.value,
                s = l.Package.packages.get(c);
              s || (s = new l.Package(c)).provides(d.CONFIG.provides[c]),
                s.checkNoLoad(),
                o.push(s.promise);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              i && !i.done && (e = a.return) && e.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
          return l.Package.loadAll(), Promise.all(o);
        }),
        (t.preLoad = function () {
          for (var t, e, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          try {
            for (var o = u(n), a = o.next(); !a.done; a = o.next()) {
              var i = a.value,
                c = l.Package.packages.get(i);
              c || (c = new l.Package(i, !0)).provides(d.CONFIG.provides[i]),
                c.loaded();
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              a && !a.done && (e = o.return) && e.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
        }),
        (t.defaultReady = function () {
          void 0 !== d.MathJax.startup && d.MathJax.config.startup.ready();
        }),
        (t.getRoot = function () {
          var e = n + "/../../es5";
          if ("undefined" != typeof document) {
            var t =
              document.currentScript ||
              document.getElementById("MathJax-script");
            t && (e = t.src.replace(/\/[^\/]*$/, ""));
          }
          return e;
        }),
        (d.MathJax = r.MathJax),
        void 0 === d.MathJax.loader &&
          (r.combineDefaults(d.MathJax.config, "loader", {
            paths: { mathjax: e.getRoot() },
            source: {},
            dependencies: {},
            provides: {},
            load: [],
            ready: e.defaultReady.bind(e),
            failed: function (e) {
              return console.log(
                "MathJax(" + (e.package || "?") + "): " + e.message
              );
            },
            require: null,
          }),
          r.combineWithMathJax({ loader: e })),
        (d.CONFIG = d.MathJax.config.loader);
    }.call(this, "/"));
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      a =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            a = n.call(e),
            i = [];
          try {
            for (; (void 0 === t || 0 < t--) && !(r = a.next()).done; )
              i.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = a.return) && n.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
      d =
        (this && this.__spread) ||
        function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(a(arguments[t]));
          return e;
        },
      f =
        (this && this.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
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
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i,
      h = n(1),
      c = ((i = Error), o(s, i), s);
    function s(e, t) {
      var n = i.call(this, e) || this;
      return (n.package = t), n;
    }
    t.PackageError = c;
    var u =
      ((p.resolvePath = function (e, t) {
        void 0 === t && (t = !0);
        var n,
          r = h.CONFIG.source[e] || e;
        for (
          r.match(/^(?:[a-z]+:\/)?\/|\[/) ||
            (r = "[mathjax]/" + r.replace(/^\.\//, "")),
            t && !r.match(/\.[^\/]+$/) && (r += ".js");
          (n = r.match(/^\[([^\]]*)\]/)) && h.CONFIG.paths.hasOwnProperty(n[1]);

        )
          r = h.CONFIG.paths[n[1]] + r.substr(n[0].length);
        return r;
      }),
      Object.defineProperty(p.prototype, "canLoad", {
        get: function () {
          return (
            0 === this.dependencyCount &&
            !this.noLoad &&
            !this.isLoading &&
            !this.hasFailed
          );
        },
        enumerable: !0,
        configurable: !0,
      }),
      (p.prototype.makeDependencies = function () {
        var t,
          e,
          n = [],
          r = p.packages,
          o = this.noLoad,
          a = this.name,
          i = [];
        h.CONFIG.dependencies.hasOwnProperty(a)
          ? i.push.apply(i, d(h.CONFIG.dependencies[a]))
          : "core" !== a && i.push("core");
        try {
          for (var c = f(i), s = c.next(); !s.done; s = c.next()) {
            var u = s.value,
              l = r.get(u) || new p(u, o);
            this.dependencies.indexOf(l) < 0 &&
              (l.addDependent(this, o),
              this.dependencies.push(l),
              l.isLoaded || (this.dependencyCount++, n.push(l.promise)));
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            s && !s.done && (e = c.return) && e.call(c);
          } finally {
            if (t) throw t.error;
          }
        }
        return n;
      }),
      (p.prototype.makePromise = function (e) {
        var n = this,
          t = new Promise(function (e, t) {
            (n.resolve = e), (n.reject = t);
          }),
          r = h.CONFIG[this.name] || {};
        return (
          r.ready &&
            (t = t.then(function (e) {
              return r.ready(n.name);
            })),
          e.length &&
            (e.push(t),
            (t = Promise.all(e).then(function (e) {
              return e.join(", ");
            }))),
          r.failed &&
            t.catch(function (e) {
              return r.failed(new c(e, n.name));
            }),
          t
        );
      }),
      (p.prototype.load = function () {
        if (!this.isLoaded && !this.isLoading && !this.noLoad) {
          this.isLoading = !0;
          var e = p.resolvePath(this.name);
          h.CONFIG.require ? this.loadCustom(e) : this.loadScript(e);
        }
      }),
      (p.prototype.loadCustom = function (e) {
        var t = this;
        try {
          var n = h.CONFIG.require(e);
          n instanceof Promise
            ? n
                .then(function () {
                  return t.checkLoad();
                })
                .catch(function () {
                  return t.failed("Can't load \"" + e + '"');
                })
            : this.checkLoad();
        } catch (e) {
          this.failed(e.message);
        }
      }),
      (p.prototype.loadScript = function (t) {
        var n = this,
          e = document.createElement("script");
        (e.src = t),
          (e.charset = "UTF-8"),
          (e.onload = function (e) {
            return n.checkLoad();
          }),
          (e.onerror = function (e) {
            return n.failed("Can't load \"" + t + '"');
          }),
          document.head.appendChild(e);
      }),
      (p.prototype.loaded = function () {
        var t, e, n, r;
        (this.isLoaded = !0), (this.isLoading = !1);
        try {
          for (var o = f(this.dependents), a = o.next(); !a.done; a = o.next())
            a.value.requirementSatisfied();
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            a && !a.done && (e = o.return) && e.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
        try {
          for (var i = f(this.provided), c = i.next(); !c.done; c = i.next())
            c.value.loaded();
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            c && !c.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        this.resolve(this.name);
      }),
      (p.prototype.failed = function (e) {
        (this.hasFailed = !0),
          (this.isLoading = !1),
          this.reject(new c(e, this.name));
      }),
      (p.prototype.checkLoad = function () {
        var t = this;
        (
          (h.CONFIG[this.name] || {}).checkReady ||
          function () {
            return Promise.resolve();
          }
        )()
          .then(function () {
            return t.loaded();
          })
          .catch(function (e) {
            return t.failed(e);
          });
      }),
      (p.prototype.requirementSatisfied = function () {
        this.dependencyCount &&
          (this.dependencyCount--, this.canLoad && this.load());
      }),
      (p.prototype.provides = function (e) {
        var t, n;
        void 0 === e && (e = []);
        try {
          for (var r = f(e), o = r.next(); !o.done; o = r.next()) {
            var a = o.value,
              i = p.packages.get(a);
            i ||
              (h.CONFIG.dependencies[a] || (h.CONFIG.dependencies[a] = []),
              h.CONFIG.dependencies[a].push(a),
              ((i = new p(a, !0)).isLoading = !0)),
              this.provided.push(i);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (p.prototype.addDependent = function (e, t) {
        this.dependents.push(e), t || this.checkNoLoad();
      }),
      (p.prototype.checkNoLoad = function () {
        var t, e;
        if (this.noLoad) {
          this.noLoad = !1;
          try {
            for (
              var n = f(this.dependencies), r = n.next();
              !r.done;
              r = n.next()
            )
              r.value.checkNoLoad();
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              r && !r.done && (e = n.return) && e.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
        }
      }),
      (p.loadAll = function () {
        var t, e;
        try {
          for (
            var n = f(this.packages.values()), r = n.next();
            !r.done;
            r = n.next()
          ) {
            var o = r.value;
            o.canLoad && o.load();
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            r && !r.done && (e = n.return) && e.call(n);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (p.packages = new Map()),
      p);
    function p(e, t) {
      void 0 === t && (t = !1),
        (this.isLoaded = !1),
        (this.isLoading = !1),
        (this.hasFailed = !1),
        (this.dependents = []),
        (this.dependencies = []),
        (this.dependencyCount = 0),
        (this.provided = []),
        (this.name = e),
        (this.noLoad = t),
        p.packages.set(e, this),
        (this.promise = this.makePromise(this.makeDependencies()));
    }
    t.Package = u;
  },
  function (e, t, n) {
    "use strict";
    n(4);
    var r = n(1),
      o = n(0),
      a = n(6);
    (0, o.combineDefaults)(
      MathJax.config.loader,
      "dependencies",
      a.dependencies
    ),
      (0, o.combineDefaults)(MathJax.config.loader, "paths", a.paths),
      (0, o.combineDefaults)(MathJax.config.loader, "provides", a.provides),
      r.Loader.load
        .apply(
          r.Loader,
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(r.CONFIG.load)
        )
        .then(function () {
          return r.CONFIG.ready();
        })
        .catch(function (e, t) {
          return r.CONFIG.failed(e, t);
        });
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = i(n(1)),
      a = i(n(2));
    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    }
    (0, r.combineWithMathJax)({ _: { components: { loader: o, package: a } } });
  },
  function (Ad, Bd) {
    var Cd;
    Cd = (function () {
      return this;
    })();
    try {
      Cd = Cd || Function("return this")() || eval("this");
    } catch (e) {
      "object" == typeof window && (Cd = window);
    }
    Ad.exports = Cd;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.dependencies = {
        "a11y/semantic-enrich": ["input/mml", "[sre]", "input/mml"],
        "a11y/complexity": ["a11y/semantic-enrich"],
        "a11y/explorer": ["a11y/semantic-enrich", "ui/menu"],
        "[tex]/all-packages": ["input/tex-base"],
        "[tex]/action": ["input/tex-base", "[tex]/newcommand"],
        "[tex]/autoload": ["input/tex-base", "[tex]/require"],
        "[tex]/ams": ["input/tex-base"],
        "[tex]/ams_cd": ["input/tex-base"],
        "[tex]/bbox": ["input/tex-base", "[tex]/ams", "[tex]/newcommand"],
        "[tex]/boldsymbol": ["input/tex-base"],
        "[tex]/braket": ["input/tex-base"],
        "[tex]/bussproofs": ["input/tex-base"],
        "[tex]/cancel": ["input/tex-base", "[tex]/enclose"],
        "[tex]/color": ["input/tex-base"],
        "[tex]/colorV2": ["input/tex-base"],
        "[tex]/configMacros": ["input/tex-base", "[tex]/newcommand"],
        "[tex]/enclose": ["input/tex-base"],
        "[tex]/extpfeil": ["input/tex-base", "[tex]/newcommand", "[tex]/ams"],
        "[tex]/html": ["input/tex-base"],
        "[tex]/mhchem": ["input/tex-base", "[tex]/ams"],
        "[tex]/newcommand": ["input/tex-base"],
        "[tex]/noerrors": ["input/tex-base"],
        "[tex]/noundefined": ["input/tex-base"],
        "[tex]/physics": ["input/tex-base"],
        "[tex]/require": ["input/tex-base"],
        "[tex]/tagFormat": ["input/tex-base"],
        "[tex]/unicode": ["input/tex-base"],
        "[tex]/verb": ["input/tex-base"],
      }),
      (t.paths = {
        tex: "[mathjax]/input/tex/extensions",
        sre: "[mathjax]/sre/sre_browser",
      });
    var r = [
      "[tex]/action",
      "[tex]/ams",
      "[tex]/ams_cd",
      "[tex]/bbox",
      "[tex]/boldsymbol",
      "[tex]/braket",
      "[tex]/bussproofs",
      "[tex]/cancel",
      "[tex]/color",
      "[tex]/configMacros",
      "[tex]/enclose",
      "[tex]/extpfeil",
      "[tex]/html",
      "[tex]/mhchem",
      "[tex]/newcommand",
      "[tex]/noerrors",
      "[tex]/noundefined",
      "[tex]/physics",
      "[tex]/require",
      "[tex]/unicode",
      "[tex]/verb",
    ];
    t.provides = {
      startup: ["loader"],
      "input/tex": [
        "input/tex-base",
        "[tex]/ams",
        "[tex]/newcommand",
        "[tex]/noundefined",
        "[tex]/require",
        "[tex]/autoload",
        "[tex]/configMacros",
      ],
      "input/tex-full": ["input/tex-base", "[tex]/all-packages"].concat(r),
      "[tex]/all-packages": r,
    };
  },
]);
