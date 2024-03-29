!(function (r) {
  var n = {};
  function a(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = r),
    (a.c = n),
    (a.d = function (t, e, r) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (a.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          a.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = ""),
    a((a.s = 3));
})([
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(9),
      a =
        "undefined" == typeof window
          ? "./a11y/sre-node.js"
          : "../../../speech-rule-engine/lib/sre_browser.js",
      o = "undefined" == typeof sre ? n.asyncLoad(a) : Promise.resolve();
    e.sreReady = new Promise(function (r, n) {
      o.then(function () {
        var e = new Date().getTime();
        !(function t() {
          sre.Engine.isReady()
            ? r()
            : new Date().getTime() - e < 5e3
            ? setTimeout(t, 100)
            : n("Timed out waiting for Speech-Rule-Engine");
        })();
      }).catch(function (t) {
        return n(t.message || t);
      });
    });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.combineConfig = MathJax._.components.global.combineConfig),
      (e.combineDefaults = MathJax._.components.global.combineDefaults),
      (e.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (e.MathJax = MathJax._.components.global.MathJax);
  },
  function (t, e, r) {
    "use strict";
    var n,
      s =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        }),
        function (t, e) {
          function r() {
            this.constructor = t;
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        }),
      a =
        (this && this.__assign) ||
        function () {
          return (a =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var a in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
              return t;
            }).apply(this, arguments);
        },
      l =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
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
        },
      o =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            o = r.call(t),
            i = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = o.next()).done; )
              i.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (a) throw a.error;
            }
          }
          return i;
        },
      c =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(o(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = r(5),
      h = r(6),
      u = r(7),
      p = r(8),
      f = r(0),
      d = "none";
    function y(t, n, a) {
      return (
        s(e, (r = t)),
        (e.prototype.enrich = function (t) {
          if (!(this.state() >= h.STATE.ENRICHED)) {
            ("undefined" != typeof sre && sre.Engine.isReady()) ||
              i.mathjax.retryAfter(f.sreReady),
              t.options.enrichSpeech !== d &&
                (SRE.setupEngine({ speech: t.options.enrichSpeech }),
                (d = t.options.enrichSpeech));
            var e = new t.options.MathItem("", n),
              r = SRE.toEnriched(a(this.root));
            (e.math = "outerHTML" in r ? r.outerHTML : r.toString()),
              (e.display = this.display),
              e.compile(t),
              (this.root = e.root),
              (this.inputData.originalMml = e.math),
              this.state(h.STATE.ENRICHED);
          }
        }),
        (e.prototype.attachSpeech = function (t) {
          var e, r;
          if (!(this.state() >= h.STATE.ATTACHSPEECH)) {
            var n = this.root.attributes,
              a = n.get("aria-label") || n.get("data-semantic-speech");
            if (a) {
              var o = t.adaptor,
                i = this.typesetRoot;
              o.setAttribute(i, "aria-label", a);
              try {
                for (
                  var s = l(o.childNodes(i)), c = s.next();
                  !c.done;
                  c = s.next()
                ) {
                  var u = c.value;
                  o.setAttribute(u, "aria-hidden", "true");
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  c && !c.done && (r = s.return) && r.call(s);
                } finally {
                  if (e) throw e.error;
                }
              }
            }
            this.state(h.STATE.ATTACHSPEECH);
          }
        }),
        e
      );
      function e() {
        return (null !== r && r.apply(this, arguments)) || this;
      }
      var r;
    }
    function M(t, o) {
      var e, i;
      return (
        s(r, (i = t)),
        (r.prototype.attachSpeech = function () {
          var e, t;
          if (!this.processed.isSet("attach-speech")) {
            try {
              for (var r = l(this.math), n = r.next(); !n.done; n = r.next())
                n.value.attachSpeech(this);
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                n && !n.done && (t = r.return) && t.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
            this.processed.set("attach-speech");
          }
          return this;
        }),
        (r.prototype.enrich = function () {
          var e, t;
          if (!this.processed.isSet("enriched")) {
            try {
              for (var r = l(this.math), n = r.next(); !n.done; n = r.next())
                n.value.enrich(this);
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                n && !n.done && (t = r.return) && t.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
            this.processed.set("enriched");
          }
          return this;
        }),
        (r.prototype.state = function (t, e) {
          return (
            void 0 === e && (e = !1),
            i.prototype.state.call(this, t, e),
            t < h.STATE.ENRICHED && this.processed.clear("enriched"),
            this
          );
        }),
        ((e = r).OPTIONS = a(a({}, t.OPTIONS), {
          enrichSpeech: "none",
          renderActions: p.expandable(
            a(a({}, t.OPTIONS.renderActions), {
              enrich: [h.STATE.ENRICHED],
              attachSpeech: [h.STATE.ATTACHSPEECH],
            })
          ),
        })),
        e
      );
      function r() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r = i.apply(this, c(t)) || this;
        o.setMmlFactory(r.mmlFactory);
        var n = r.constructor.ProcessBits;
        n.has("enriched") ||
          (n.allocate("enriched"), n.allocate("attach-speech"));
        var a = new u.SerializedMmlVisitor(r.mmlFactory);
        return (
          (r.options.MathItem = y(r.options.MathItem, o, function (t) {
            return a.visitTree(t);
          })),
          r
        );
      }
    }
    h.newState("ENRICHED", 30),
      h.newState("ATTACHSPEECH", 155),
      (e.EnrichedMathItemMixin = y),
      (e.EnrichedMathDocumentMixin = M),
      (e.EnrichHandler = function (t, e) {
        return (
          e.setAdaptor(t.adaptor), (t.documentClass = M(t.documentClass, e)), t
        );
      });
  },
  function (t, e, r) {
    "use strict";
    r(4);
    var n = r(1),
      a = r(0),
      o = r(2),
      i = r(10);
    MathJax.loader &&
      (0, n.combineDefaults)(MathJax.config.loader, "a11y/semantic-enrich", {
        checkReady: function () {
          return a.sreReady;
        },
      }),
      MathJax.startup &&
        MathJax.startup.extendHandler(function (t) {
          return (0, o.EnrichHandler)(t, new i.MathML());
        });
  },
  function (t, e, r) {
    "use strict";
    var n = r(1),
      a = i(r(2)),
      o = i(r(0));
    function i(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return (e.default = t), e;
    }
    (0, n.combineWithMathJax)({
      _: { a11y: { "semantic-enrich": a, sre: o } },
    });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.mathjax = MathJax._.mathjax.mathjax);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.protoItem = MathJax._.core.MathItem.protoItem),
      (e.AbstractMathItem = MathJax._.core.MathItem.AbstractMathItem),
      (e.STATE = MathJax._.core.MathItem.STATE),
      (e.newState = MathJax._.core.MathItem.newState);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SerializedMmlVisitor =
        MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor);
  },
  function (t, e, r) {
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
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.asyncLoad = MathJax._.util.AsyncLoad.asyncLoad);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MathML = MathJax._.input.mathml_ts.MathML);
  },
]);
