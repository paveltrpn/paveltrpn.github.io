!(function (i) {
  var n = {};
  function a(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return i[t].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = i),
    (a.c = n),
    (a.d = function (t, e, i) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (a.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          a.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
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
    a((a.s = 2));
})([
  function (t, e, i) {
    "use strict";
    var n,
      a =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        }),
        function (t, e) {
          function i() {
            this.constructor = t;
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()));
        }),
      s =
        (this && this.__assign) ||
        function () {
          return (s =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var a in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
              return t;
            }).apply(this, arguments);
        },
      r =
        (this && this.__read) ||
        function (t, e) {
          var i = "function" == typeof Symbol && t[Symbol.iterator];
          if (!i) return t;
          var n,
            a,
            s = i.call(t),
            r = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = s.next()).done; )
              r.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (i = s.return) && i.call(s);
            } finally {
              if (a) throw a.error;
            }
          }
          return r;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      l = i(5),
      u = i(6),
      h = i(14),
      p = i(1),
      c =
        ((o = l.AbstractInputJax),
        a(d, o),
        (d.prototype.compile = function (t, e) {
          return u.LegacyAsciiMath.Compile(t.math, t.display);
        }),
        (d.prototype.findMath = function (t) {
          return this.findAsciiMath.findMath(t);
        }),
        (d.NAME = "AsciiMath"),
        (d.OPTIONS = s(s({}, l.AbstractInputJax.OPTIONS), {
          FindAsciiMath: null,
        })),
        d);
    function d(t) {
      var e = this,
        i = r(h.separateOptions(t, p.FindAsciiMath.OPTIONS), 2),
        n = i[0],
        a = i[1];
      return (
        ((e = o.call(this, n) || this).findAsciiMath =
          e.options.FindAsciiMath || new p.FindAsciiMath(a)),
        e
      );
    }
    e.AsciiMath = c;
  },
  function (t, e, i) {
    "use strict";
    var n,
      a =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        }),
        function (t, e) {
          function i() {
            this.constructor = t;
          }
          n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i()));
        }),
      u =
        (this && this.__read) ||
        function (t, e) {
          var i = "function" == typeof Symbol && t[Symbol.iterator];
          if (!i) return t;
          var n,
            a,
            s = i.call(t),
            r = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = s.next()).done; )
              r.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (i = s.return) && i.call(s);
            } finally {
              if (a) throw a.error;
            }
          }
          return r;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      r = i(15),
      o = i(16),
      h = i(17),
      l =
        ((s = r.AbstractFindMath),
        a(p, s),
        (p.prototype.getPatterns = function () {
          var e = this,
            t = this.options,
            i = [];
          (this.end = {}),
            t.delimiters.forEach(function (t) {
              return e.addPattern(i, t, !1);
            }),
            (this.start = new RegExp(i.join("|"), "g")),
            (this.hasPatterns = 0 < i.length);
        }),
        (p.prototype.addPattern = function (t, e, i) {
          var n = u(e, 2),
            a = n[0],
            s = n[1];
          t.push(o.quotePattern(a)),
            (this.end[a] = [s, i, new RegExp(o.quotePattern(s), "g")]);
        }),
        (p.prototype.findEnd = function (t, e, i, n) {
          var a = u(n, 3),
            s = (a[0], a[1]),
            r = a[2],
            o = (r.lastIndex = i.index + i[0].length),
            l = r.exec(t);
          return l
            ? h.protoItem(
                i[0],
                t.substr(o, l.index - o),
                l[0],
                e,
                i.index,
                l.index + l[0].length,
                s
              )
            : null;
        }),
        (p.prototype.findMathInString = function (t, e, i) {
          var n, a;
          for (this.start.lastIndex = 0; (n = this.start.exec(i)); )
            (a = this.findEnd(i, e, n, this.end[n[0]])) &&
              (t.push(a), (this.start.lastIndex = a.end.n));
        }),
        (p.prototype.findMath = function (t) {
          var e = [];
          if (this.hasPatterns)
            for (var i = 0, n = t.length; i < n; i++)
              this.findMathInString(e, i, t[i]);
          return e;
        }),
        (p.OPTIONS = { delimiters: [["`", "`"]] }),
        p);
    function p(t) {
      var e = s.call(this, t) || this;
      return e.getPatterns(), e;
    }
    e.FindAsciiMath = l;
  },
  function (t, e, i) {
    "use strict";
    i(3);
    var n = i(0);
    MathJax.startup &&
      (MathJax.Hub.Config({ AsciiMath: MathJax.config.asciimath || {} }),
      MathJax.startup.registerConstructor("asciimath", n.AsciiMath),
      MathJax.startup.useInput("asciimath"));
  },
  function (t, e, i) {
    "use strict";
    var n = i(4),
      a = r(i(0)),
      s = r(i(1));
    function r(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return (e.default = t), e;
    }
    (0, n.combineWithMathJax)({
      _: { input: { asciimath_ts: a, asciimath: { FindAsciiMath: s } } },
    });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.combineConfig = MathJax._.components.global.combineConfig),
      (e.combineDefaults = MathJax._.components.global.combineDefaults),
      (e.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (e.MathJax = MathJax._.components.global.MathJax);
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractInputJax = MathJax._.core.InputJax.AbstractInputJax);
  },
  function (t, e, i) {
    (function (t) {
      (MathJax = Object.assign(t.MathJax || {}, i(8).MathJax)),
        MathJax.Ajax.Preloading(
          "[MathJax]/jax/input/AsciiMath/config.js",
          "[MathJax]/jax/input/AsciiMath/jax.js",
          "[MathJax]/jax/element/mml/jax.js"
        ),
        i(9),
        i(10),
        i(11),
        i(12);
      var a = new (i(13).MmlFactory)();
      e.LegacyAsciiMath = {
        Compile: function (t, e) {
          var i = { type: "math/asciimath", innerText: t, MathJax: {} },
            n = MathJax.InputJax.AsciiMath.Translate(i).root.toMmlNode(a);
          return n.setInheritedAttributes(), n;
        },
        Translate: function (t, e) {
          return this.Compile(t, e);
        },
      };
    }.call(this, i(7)));
  },
  function ($b, _b) {
    var ac;
    ac = (function () {
      return this;
    })();
    try {
      ac = ac || Function("return this")() || eval("this");
    } catch (t) {
      "object" == typeof window && (ac = window);
    }
    $b.exports = ac;
  },
  function (t, e) {
    var i,
      n,
      a,
      s,
      r,
      o,
      l,
      f = { debug: !0 },
      g = { MathJax: f },
      u = {},
      E = null;
    (e.MathJax = f),
      (function (t) {
        var e = g[t];
        e = e || (g[t] = {});
        function i(t) {
          var e = t.constructor;
          for (var i in ((e = e || function () {}), t))
            "constructor" !== i && t.hasOwnProperty(i) && (e[i] = t[i]);
          return e;
        }
        var n = [];
        (e.Object = i({
          constructor: function () {
            return arguments.callee.Init.call(this, arguments);
          },
          Subclass: function (t, e) {
            var i = function () {
              return arguments.callee.Init.call(this, arguments);
            };
            return (
              (i.SUPER = this),
              (i.Init = this.Init),
              (i.Subclass = this.Subclass),
              (i.Augment = this.Augment),
              (i.protoFunction = this.protoFunction),
              (i.can = this.can),
              (i.has = this.has),
              (i.isa = this.isa),
              (i.prototype = new this(n)),
              (i.prototype.constructor = i).Augment(t, e),
              i
            );
          },
          Init: function (t) {
            var e = this;
            return 1 === t.length && t[0] === n
              ? e
              : (e instanceof t.callee || (e = new t.callee(n)),
                e.Init.apply(e, t) || e);
          },
          Augment: function (t, e) {
            var i;
            if (null != t) {
              for (i in t) t.hasOwnProperty(i) && this.protoFunction(i, t[i]);
              t.toString !== this.prototype.toString &&
                t.toString !== {}.toString &&
                this.protoFunction("toString", t.toString);
            }
            if (null != e) for (i in e) e.hasOwnProperty(i) && (this[i] = e[i]);
            return this;
          },
          protoFunction: function (t, e) {
            "function" == typeof (this.prototype[t] = e) &&
              (e.SUPER = this.SUPER.prototype);
          },
          prototype: {
            Init: function () {},
            SUPER: function (t) {
              return t.callee.SUPER;
            },
            can: function (t) {
              return "function" == typeof this[t];
            },
            has: function (t) {
              return void 0 !== this[t];
            },
            isa: function (t) {
              return t instanceof Object && this instanceof t;
            },
          },
          can: function (t) {
            return this.prototype.can.call(this, t);
          },
          has: function (t) {
            return this.prototype.has.call(this, t);
          },
          isa: function (t) {
            for (var e = this; e; ) {
              if (e === t) return !0;
              e = e.SUPER;
            }
            return !1;
          },
          SimpleSUPER: i({
            constructor: function (t) {
              return this.SimpleSUPER.define(t);
            },
            define: function (t) {
              var e = {};
              if (null != t) {
                for (var i in t)
                  t.hasOwnProperty(i) && (e[i] = this.wrap(i, t[i]));
                t.toString !== this.prototype.toString &&
                  t.toString !== {}.toString &&
                  (e.toString = this.wrap("toString", t.toString));
              }
              return e;
            },
            wrap: function (e, i) {
              if (
                "function" != typeof i ||
                !i.toString().match(/\.\s*SUPER\s*\(/)
              )
                return i;
              var n = function () {
                this.SUPER = n.SUPER[e];
                try {
                  var t = i.apply(this, arguments);
                } catch (t) {
                  throw (delete this.SUPER, t);
                }
                return delete this.SUPER, t;
              };
              return (
                (n.toString = function () {
                  return i.toString.apply(i, arguments);
                }),
                n
              );
            },
          }),
        })),
          (e.Object.isArray =
            Array.isArray ||
            function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
          (e.Object.Array = Array);
      })("MathJax"),
      (function (a) {
        var s = g[a];
        s = s || (g[a] = {});
        var n = function (t) {
          function e() {
            return arguments.callee.execute.apply(arguments.callee, arguments);
          }
          for (var i in n.prototype)
            n.prototype.hasOwnProperty(i) &&
              (e[i] = void 0 !== t[i] ? t[i] : n.prototype[i]);
          return (e.toString = n.prototype.toString), e;
        };
        n.prototype = {
          isCallback: !0,
          hook: function () {},
          data: [],
          object: g,
          execute: function () {
            if (!this.called || this.autoReset)
              return (
                (this.called = !this.autoReset),
                this.hook.apply(
                  this.object,
                  this.data.concat([].slice.call(arguments, 0))
                )
              );
          },
          reset: function () {
            delete this.called;
          },
          toString: function () {
            return this.hook.toString.apply(this.hook, arguments);
          },
        };
        function r(t) {
          return "function" == typeof t && t.isCallback;
        }
        function o(t, e) {
          if (
            (1 < arguments.length &&
              (t =
                2 === arguments.length &&
                "function" != typeof t &&
                t instanceof Object &&
                "number" == typeof e
                  ? [].slice.call(t, e)
                  : [].slice.call(arguments, 0)),
            t instanceof Array && 1 === t.length && (t = t[0]),
            "function" == typeof t)
          )
            return t.execute === n.prototype.execute ? t : n({ hook: t });
          if (t instanceof Array) {
            if (
              "string" == typeof t[0] &&
              t[1] instanceof Object &&
              "function" == typeof t[1][t[0]]
            )
              return n({ hook: t[1][t[0]], object: t[1], data: t.slice(2) });
            if ("function" == typeof t[0])
              return n({ hook: t[0], data: t.slice(1) });
            if ("function" == typeof t[1])
              return n({ hook: t[1], object: t[0], data: t.slice(2) });
          } else {
            if ("string" == typeof t)
              return p && p(), n({ hook: h, data: [t] });
            if (t instanceof Object) return n(t);
            if (void 0 === t) return n({});
          }
          throw Error("Can't make callback from given data");
        }
        function l(t, e) {
          (t = o(t)).called || (c(t, e), e.pending++);
        }
        function i() {
          var t = this.signal;
          delete this.signal,
            (this.execute = this.oldExecute),
            delete this.oldExecute;
          var e = this.execute.apply(this, arguments);
          if (r(e) && !e.called) c(e, t);
          else
            for (var i = 0, n = t.length; i < n; i++)
              t[i].pending--, t[i].pending <= 0 && t[i].call();
        }
        function u(t) {
          (t = o(t)).pending = 0;
          for (var e = 1, i = arguments.length; e < i; e++)
            arguments[e] && l(arguments[e], t);
          if (0 === t.pending) {
            var n = t();
            r(n) && (t = n);
          }
          return t;
        }
        var h = function (t) {
            return eval.call(g, t);
          },
          p = function () {
            if ((h("var __TeSt_VaR__ = 1"), g.__TeSt_VaR__))
              try {
                delete g.__TeSt_VaR__;
              } catch (t) {
                g.__TeSt_VaR__ = null;
              }
            else
              h = g.execScript
                ? function (t) {
                    (s.__code = t),
                      (t =
                        "try {" +
                        a +
                        ".__result = eval(" +
                        a +
                        ".__code)} catch(err) {" +
                        a +
                        ".__result = err}"),
                      g.execScript(t);
                    var e = s.__result;
                    if (
                      (delete s.__result, delete s.__code, e instanceof Error)
                    )
                      throw e;
                    return e;
                  }
                : function (t) {
                    (s.__code = t),
                      (t =
                        "try {" +
                        a +
                        ".__result = eval(" +
                        a +
                        ".__code)} catch(err) {" +
                        a +
                        ".__result = err}");
                    var e = E.getElementsByTagName("head")[0];
                    e = e || E.body;
                    var i = E.createElement("script");
                    i.appendChild(E.createTextNode(t)),
                      e.appendChild(i),
                      e.removeChild(i);
                    var n = s.__result;
                    if (
                      (delete s.__result, delete s.__code, n instanceof Error)
                    )
                      throw n;
                    return n;
                  };
            p = null;
          },
          c = function (t, e) {
            e instanceof Array || (e = [e]),
              t.signal
                ? 1 === e.length
                  ? t.signal.push(e[0])
                  : (t.signal = t.signal.concat(e))
                : ((t.oldExecute = t.execute), (t.execute = i), (t.signal = e));
          },
          d = f.Object.Subclass({
            Init: function (t) {
              (this.hooks = []),
                (this.remove = []),
                (this.reset = t),
                (this.running = !1);
            },
            Add: function (t, e) {
              null == e && (e = 10), r(t) || (t = o(t)), (t.priority = e);
              for (
                var i = this.hooks.length;
                0 < i && e < this.hooks[i - 1].priority;

              )
                i--;
              return this.hooks.splice(i, 0, t), t;
            },
            Remove: function (t) {
              for (var e = 0, i = this.hooks.length; e < i; e++)
                if (this.hooks[e] === t)
                  return void (this.running
                    ? this.remove.push(e)
                    : this.hooks.splice(e, 1));
            },
            Execute: function () {
              var t = [{}];
              this.running = !0;
              for (var e = 0, i = this.hooks.length; e < i; e++) {
                this.reset && this.hooks[e].reset();
                var n = this.hooks[e].apply(g, arguments);
                r(n) && !n.called && t.push(n);
              }
              return (
                (this.running = !1),
                this.remove.length && this.RemovePending(),
                1 === t.length ? null : 2 === t.length ? t[1] : u.apply({}, t)
              );
            },
            RemovePending: function () {
              this.remove = this.remove.sort();
              for (var t = this.remove.length - 1; 0 <= t; t--)
                this.hooks.splice(t, 1);
              this.remove = [];
            },
          }),
          e = s.Object.Subclass({
            Init: function () {
              (this.pending = this.running = 0),
                (this.queue = []),
                this.Push.apply(this, arguments);
            },
            Push: function () {
              for (var t, e = 0, i = arguments.length; e < i; e++)
                (t = o(arguments[e])) !== arguments[e] ||
                  t.called ||
                  (t = o(["wait", this, t])),
                  this.queue.push(t);
              return this.running || this.pending || this.Process(), t;
            },
            Process: function (t) {
              for (; !this.running && !this.pending && this.queue.length; ) {
                var e = this.queue[0];
                (t = this.queue.slice(1)), (this.queue = []), this.Suspend();
                var i = e();
                this.Resume(),
                  t.length && (this.queue = t.concat(this.queue)),
                  r(i) && !i.called && l(i, this);
              }
            },
            Suspend: function () {
              this.running++;
            },
            Resume: function () {
              this.running && this.running--;
            },
            call: function () {
              this.Process.apply(this, arguments);
            },
            wait: function (t) {
              return t;
            },
          }),
          m = e.Subclass(
            {
              Init: function (t) {
                e.prototype.Init.call(this),
                  (this.name = t),
                  (this.posted = []),
                  (this.listeners = d(!0)),
                  (this.posting = !1),
                  (this.callback = null);
              },
              Post: function (t, e, i) {
                if (((e = o(e)), this.posting || this.pending))
                  this.Push(["Post", this, t, e, i]);
                else {
                  (this.callback = e).reset(),
                    i || this.posted.push(t),
                    this.Suspend(),
                    (this.posting = !0);
                  var n = this.listeners.Execute(t);
                  r(n) && !n.called && l(n, this),
                    this.Resume(),
                    (this.posting = !1),
                    this.pending || this.call();
                }
                return e;
              },
              Clear: function (t) {
                return (
                  (t = o(t)),
                  this.posting || this.pending
                    ? (t = this.Push(["Clear", this, t]))
                    : ((this.posted = []), t()),
                  t
                );
              },
              call: function () {
                this.callback(this), this.Process();
              },
              Interest: function (t, e, i) {
                if (((t = o(t)), this.listeners.Add(t, i), !e))
                  for (var n = 0, a = this.posted.length; n < a; n++) {
                    t.reset();
                    var s = t(this.posted[n]);
                    r(s) && n === this.posted.length - 1 && l(s, this);
                  }
                return t;
              },
              NoInterest: function (t) {
                this.listeners.Remove(t);
              },
              MessageHook: function (t, e, i) {
                (e = o(e)),
                  this.hooks ||
                    ((this.hooks = {}), this.Interest(["ExecuteHooks", this])),
                  this.hooks[t] || (this.hooks[t] = d(!0)),
                  this.hooks[t].Add(e, i);
                for (var n = 0, a = this.posted.length; n < a; n++)
                  this.posted[n] == t && (e.reset(), e(this.posted[n]));
                return (e.msg = t), e;
              },
              ExecuteHooks: function (t) {
                var e = t instanceof Array ? t[0] : t;
                return this.hooks[e] ? this.hooks[e].Execute(t) : null;
              },
              RemoveHook: function (t) {
                this.hooks[t.msg].Remove(t);
              },
            },
            {
              signals: {},
              find: function (t) {
                return m.signals[t] || (m.signals[t] = new m(t)), m.signals[t];
              },
            }
          );
        (s.Callback = s.CallBack = o),
          (s.Callback.Delay = function (t, e) {
            return ((e = o(e)).timeout = setTimeout(e, t)), e;
          }),
          (s.Callback.After = u),
          (s.Callback.Queue = e),
          (s.Callback.Signal = m.find),
          (s.Callback.Hooks = d),
          (s.Callback.ExecuteHooks = function (t, e, i) {
            if (!t) return null;
            t instanceof Array || (t = [t]),
              e instanceof Array || (e = null == e ? [] : [e]);
            for (var n = d(i), a = 0, s = t.length; a < s; a++) n.Add(t[a]);
            return n.Execute.apply(n, e);
          });
      })("MathJax"),
      (function (n) {
        var s = g[n];
        s = s || (g[n] = {});
        function i() {
          for (var t = 0, e = o.length; t < e; t++)
            s.Ajax.head.removeChild(o[t]);
          o = [];
        }
        var a = "Apple Computer, Inc." === u.vendor && void 0 === u.vendorSub,
          r = 0,
          o = [],
          l = { MathJax: "" };
        s.Ajax = {
          loaded: {},
          loading: {},
          loadHooks: {},
          timeout: 15e3,
          styleDelay: 1,
          config: { root: "", path: l },
          STATUS: { OK: 1, ERROR: -1 },
          fileURL: function (t) {
            var e = t.match(/^\[([-._a-z0-9]+)\]/i);
            return (
              e &&
                e[1] in l &&
                (t = (l[e[1]] || this.config.root) + t.substr(e[1].length + 2)),
              t
            );
          },
          fileName: function (t) {
            var e = this.config.root;
            if (t.substr(0, e.length) === e)
              t = "[" + n + "]" + t.substr(e.length);
            else
              for (var i in l)
                if (
                  l.hasOwnProperty(i) &&
                  l[i] &&
                  t.substr(0, l[i].length) === l[i]
                ) {
                  t = "[" + i + "]" + t.substr(l[i].length);
                  break;
                }
            return t;
          },
          fileRev: function (t) {
            var e = s.cdnFileVersions[name] || s.cdnVersion;
            return (e = e && "?rev=" + e);
          },
          urlRev: function (t) {
            return this.fileURL(t) + this.fileRev(t);
          },
          Require: function (t, e) {
            var i;
            if (((e = s.Callback(e)), t instanceof Object))
              for (var n in t)
                t.hasOwnProperty(n) && ((i = n.toUpperCase()), (t = t[n]));
            else i = t.split(/\./).pop().toUpperCase();
            if (((t = this.fileURL(t)), this.loaded[t])) e(this.loaded[t]);
            else {
              var a = {};
              (a[i] = t), this.Load(a, e);
            }
            return e;
          },
          Load: function (t, e) {
            var i;
            if (((e = s.Callback(e)), t instanceof Object))
              for (var n in t)
                t.hasOwnProperty(n) && ((i = n.toUpperCase()), (t = t[n]));
            else i = t.split(/\./).pop().toUpperCase();
            if (((t = this.fileURL(t)), this.loading[t])) this.addHook(t, e);
            else {
              if (((this.head = (this.head, null)), !this.loader[i]))
                throw Error("Can't load files of type " + i);
              this.loader[i].call(this, t, e);
            }
            return e;
          },
          LoadHook: function (t, e, i) {
            if (((e = s.Callback(e)), t instanceof Object))
              for (var n in t) t.hasOwnProperty(n) && (t = t[n]);
            return (
              (t = this.fileURL(t)),
              this.loaded[t] ? e(this.loaded[t]) : this.addHook(t, e, i),
              e
            );
          },
          addHook: function (t, e, i) {
            this.loadHooks[t] || (this.loadHooks[t] = f.Callback.Hooks()),
              this.loadHooks[t].Add(e, i),
              (e.file = t);
          },
          removeHook: function (t) {
            this.loadHooks[t.file] &&
              (this.loadHooks[t.file].Remove(t),
              this.loadHooks[t.file].hooks.length ||
                delete this.loadHooks[t.file]);
          },
          Preloading: function () {
            for (var t = 0, e = arguments.length; t < e; t++) {
              var i = this.fileURL(arguments[t]);
              this.loading[i] ||
                this.loaded[i] ||
                (this.loading[i] = { preloaded: !0 });
            }
          },
          loader: {
            JS: function (t, e) {
              var i = this.fileName(t),
                n = s.Callback(["loadTimeout", this, t]);
              (this.loading[t] = {
                callback: e,
                timeout: setTimeout(n, this.timeout),
                status: this.STATUS.OK,
                script: null,
              }),
                (this.loading[t].message = s.Message.File(i)),
                g.System ? g.System.import(t).catch(n) : n();
            },
            CSS: function (t, e) {
              var i = this.fileName(t),
                n = E.createElement("link");
              (n.rel = "stylesheet"),
                (n.type = "text/css"),
                (n.href = t + this.fileRev(i)),
                (this.loading[t] = {
                  callback: e,
                  message: s.Message.File(i),
                  status: this.STATUS.OK,
                }),
                this.head.appendChild(n),
                this.timer.create.call(this, [this.timer.file, t], n);
            },
          },
          timer: {
            create: function (t, e) {
              return (
                (t = s.Callback(t)),
                "STYLE" === e.nodeName &&
                e.styleSheet &&
                void 0 !== e.styleSheet.cssText
                  ? t(this.STATUS.OK)
                  : g.chrome && "LINK" === e.nodeName
                  ? t(this.STATUS.OK)
                  : a
                  ? this.timer.start(
                      this,
                      [this.timer.checkSafari2, r++, t],
                      this.styleDelay
                    )
                  : this.timer.start(
                      this,
                      [this.timer.checkLength, e, t],
                      this.styleDelay
                    ),
                t
              );
            },
            start: function (t, e, i, n) {
              ((e = s.Callback(e)).execute = this.execute),
                (e.time = this.time),
                (e.STATUS = t.STATUS),
                (e.timeout = n || t.timeout),
                (e.delay = e.total = i || 0),
                i ? setTimeout(e, i) : e();
            },
            time: function (t) {
              return (
                (this.total += this.delay),
                (this.delay = Math.floor(1.05 * this.delay + 5)),
                this.total >= this.timeout ? (t(this.STATUS.ERROR), 1) : 0
              );
            },
            file: function (t, e) {
              e < 0 ? s.Ajax.loadTimeout(t) : s.Ajax.loadComplete(t);
            },
            execute: function () {
              this.hook.call(this.object, this, this.data[0], this.data[1]);
            },
            checkSafari2: function (t, e, i) {
              t.time(i) ||
                (E.styleSheets.length > e &&
                E.styleSheets[e].cssRules &&
                E.styleSheets[e].cssRules.length
                  ? i(t.STATUS.OK)
                  : setTimeout(t, t.delay));
            },
            checkLength: function (t, e, i) {
              if (!t.time(i)) {
                var n = 0,
                  a = e.sheet || e.styleSheet;
                try {
                  0 < (a.cssRules || a.rules || []).length && (n = 1);
                } catch (t) {
                  t.message.match(/protected variable|restricted URI/)
                    ? (n = 1)
                    : t.message.match(/Security error/) && (n = 1);
                }
                n
                  ? setTimeout(s.Callback([i, t.STATUS.OK]), 0)
                  : setTimeout(t, t.delay);
              }
            },
          },
          loadComplete: function (t) {
            t = this.fileURL(t);
            var e = this.loading[t];
            return (
              e && !e.preloaded
                ? (s.Message.Clear(e.message),
                  e.timeout && clearTimeout(e.timeout),
                  e.script &&
                    (0 === o.length && setTimeout(i, 0), o.push(e.script)),
                  (this.loaded[t] = e.status),
                  delete this.loading[t],
                  this.addHook(t, e.callback))
                : (e && delete this.loading[t],
                  (this.loaded[t] = this.STATUS.OK),
                  (e = { status: this.STATUS.OK })),
              this.loadHooks[t] ? this.loadHooks[t].Execute(e.status) : null
            );
          },
          loadTimeout: function (t) {
            this.loading[t].timeout && clearTimeout(this.loading[t].timeout),
              (this.loading[t].status = this.STATUS.ERROR),
              this.loadError(t),
              this.loadComplete(t);
          },
          loadError: function (t) {
            s.Message.Set(
              ["LoadFailed", "File failed to load: %1", t],
              null,
              2e3
            ),
              s.Hub.signal.Post(["file load error", t]);
          },
          Styles: function (t, e) {
            var i = this.StyleString(t);
            if ("" === i) (e = s.Callback(e))();
            else {
              var n = E.createElement("style");
              (n.type = "text/css"),
                (this.head = (this.head, null)),
                this.head.appendChild(n),
                n.styleSheet && void 0 !== n.styleSheet.cssText
                  ? (n.styleSheet.cssText = i)
                  : n.appendChild(E.createTextNode(i)),
                (e = this.timer.create.call(this, e, n));
            }
            return e;
          },
          StyleString: function (t) {
            if ("string" == typeof t) return t;
            var e,
              i,
              n = "";
            for (e in t)
              if (t.hasOwnProperty(e))
                if ("string" == typeof t[e]) n += e + " {" + t[e] + "}\n";
                else if (t[e] instanceof Array)
                  for (var a = 0; a < t[e].length; a++)
                    ((i = {})[e] = t[e][a]), (n += this.StyleString(i));
                else if ("@media" === e.substr(0, 6))
                  n += e + " {" + this.StyleString(t[e]) + "}\n";
                else if (null != t[e]) {
                  for (var s in ((i = []), t[e]))
                    t[e].hasOwnProperty(s) &&
                      null != t[e][s] &&
                      (i[i.length] = s + ": " + t[e][s]);
                  n += e + " {" + i.join("; ") + "}\n";
                }
            return n;
          },
        };
      })("MathJax"),
      (f.HTML = {
        setDocument: function (t) {
          E = this.document = t;
        },
        Element: function (t, e, i) {
          var n,
            a = E.createElement(t);
          if (e) {
            if (e.hasOwnProperty("style")) {
              var s = e.style;
              for (n in ((e.style = {}), s))
                s.hasOwnProperty(n) &&
                  (e.style[n.replace(/-([a-z])/g, this.ucMatch)] = s[n]);
            }
            for (n in (f.Hub.Insert(a, e), e))
              ("role" !== n && "aria-" !== n.substr(0, 5)) ||
                a.setAttribute(n, e[n]);
          }
          if (i) {
            f.Object.isArray(i) || (i = [i]);
            for (var r = 0, o = i.length; r < o; r++)
              f.Object.isArray(i[r])
                ? a.appendChild(this.Element(i[r][0], i[r][1], i[r][2]))
                : "script" === t
                ? this.setScript(a, i[r])
                : a.appendChild(E.createTextNode(i[r]));
          }
          return a;
        },
        ucMatch: function (t, e) {
          return e.toUpperCase();
        },
        addElement: function (t, e, i, n) {
          return t.appendChild(this.Element(e, i, n));
        },
        TextNode: function (t) {
          return E.createTextNode(t);
        },
        addText: function (t, e) {
          return t.appendChild(this.TextNode(e));
        },
        setScript: function (t, e) {
          if (this.setScriptBug) t.text = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            this.addText(t, e);
          }
        },
        getScript: function (t) {
          return t.innerText;
        },
      }),
      (f.Localization = {
        locale: "en",
        directory: "[MathJax]/localization",
        strings: {
          ast: { menuTitle: "asturianu" },
          bg: {
            menuTitle: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",
          },
          bcc: { menuTitle: "\u0628\u0644\u0648\u0686\u06cc" },
          br: { menuTitle: "brezhoneg" },
          ca: { menuTitle: "catal\xe0" },
          cdo: { menuTitle: "M\xecng-d\u0115\u0324ng-ng\u1e73\u0304" },
          cs: { menuTitle: "\u010de\u0161tina" },
          da: { menuTitle: "dansk" },
          de: { menuTitle: "Deutsch" },
          en: { menuTitle: "English", isLoaded: !0 },
          eo: { menuTitle: "Esperanto" },
          es: { menuTitle: "espa\xf1ol" },
          fa: { menuTitle: "\u0641\u0627\u0631\u0633\u06cc" },
          fi: { menuTitle: "suomi" },
          fr: { menuTitle: "fran\xe7ais" },
          gl: { menuTitle: "galego" },
          he: { menuTitle: "\u05e2\u05d1\u05e8\u05d9\u05ea" },
          ia: { menuTitle: "interlingua" },
          it: { menuTitle: "italiano" },
          ja: { menuTitle: "\u65e5\u672c\u8a9e" },
          kn: { menuTitle: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1" },
          ko: { menuTitle: "\ud55c\uad6d\uc5b4" },
          lb: { menuTitle: "L\xebtzebuergesch" },
          lt: { menuTitle: "lietuvi\u0173" },
          mk: {
            menuTitle:
              "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
          },
          nl: { menuTitle: "Nederlands" },
          oc: { menuTitle: "occitan" },
          pl: { menuTitle: "polski" },
          pt: { menuTitle: "portugus\xea" },
          "pt-br": { menuTitle: "portugu\xeas do Brasil" },
          ru: { menuTitle: "\u0440\u0443\u0441\u0441\u043a\u0438\u0439" },
          sco: { menuTitle: "Scots" },
          scn: { menuTitle: "sicilianu" },
          sl: { menuTitle: "sloven\u0161\u010dina" },
          sv: { menuTitle: "svenska" },
          tr: { menuTitle: "T\xfcrk\xe7e" },
          uk: {
            menuTitle:
              "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
          },
          vi: { menuTitle: "Ti\u1ebfng Vi\u1ec7t" },
          "zh-hans": { menuTitle: "\u4e2d\u6587\uff08\u7b80\u4f53\uff09" },
        },
        pattern:
          /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g,
        SPLIT:
          3 === "axb".split(/(x)/).length
            ? function (t, e) {
                return t.split(e);
              }
            : function (t, e) {
                var i,
                  n = [],
                  a = 0;
                for (e.lastIndex = 0; (i = e.exec(t)); )
                  n.push(t.substr(a, i.index - a)),
                    n.push.apply(n, i.slice(1)),
                    (a = i.index + i[0].length);
                return n.push(t.substr(a)), n;
              },
        _: function (t, e) {
          return e instanceof Array
            ? this.processSnippet(t, e)
            : this.processString(
                this.lookupPhrase(t, e),
                [].slice.call(arguments, 2)
              );
        },
        processString: function (t, e, i) {
          var n, a;
          for (n = 0, a = e.length; n < a; n++)
            i && e[n] instanceof Array && (e[n] = this.processSnippet(i, e[n]));
          var s = this.SPLIT(t, this.pattern);
          for (n = 1, a = s.length; n < a; n += 2) {
            var r = s[n].charAt(0);
            if ("0" <= r && r <= "9")
              (s[n] = e[s[n] - 1]),
                "number" == typeof s[n] && (s[n] = this.number(s[n]));
            else if ("{" === r)
              if ("0" <= (r = s[n].substr(1)) && r <= "9")
                (s[n] = e[s[n].substr(1, s[n].length - 2) - 1]),
                  "number" == typeof s[n] && (s[n] = this.number(s[n]));
              else {
                var o = s[n].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/);
                if (o)
                  if ("plural" === o[1]) {
                    var l = e[o[2] - 1];
                    if (void 0 === l) s[n] = "???";
                    else {
                      l = this.plural(l) - 1;
                      var u = o[3]
                        .replace(/(^|[^%])(%%)*%\|/g, "$1$2%\uefef")
                        .split(/\|/);
                      0 <= l && l < u.length
                        ? (s[n] = this.processString(
                            u[l].replace(/\uEFEF/g, "|"),
                            e,
                            i
                          ))
                        : (s[n] = "???");
                    }
                  } else s[n] = "%" + s[n];
              }
            null == s[n] && (s[n] = "???");
          }
          if (!i) return s.join("");
          var h = [],
            p = "";
          for (n = 0; n < a; n++)
            (p += s[n]),
              ++n < a &&
                (s[n] instanceof Array
                  ? (h.push(p), (h = h.concat(s[n])), (p = ""))
                  : (p += s[n]));
          return "" !== p && h.push(p), h;
        },
        processSnippet: function (t, e) {
          for (var i = [], n = 0, a = e.length; n < a; n++)
            if (e[n] instanceof Array) {
              var s = e[n];
              if ("string" == typeof s[1]) {
                var r = s[0];
                r instanceof Array || (r = [t, r]);
                var o = this.lookupPhrase(r, s[1]);
                i = i.concat(this.processMarkdown(o, s.slice(2), t));
              } else
                s[1] instanceof Array
                  ? (i = i.concat(this.processSnippet.apply(this, s)))
                  : 3 <= s.length
                  ? i.push([s[0], s[1], this.processSnippet(t, s[2])])
                  : i.push(e[n]);
            } else i.push(e[n]);
          return i;
        },
        markdownPattern:
          /(%.)|(\*{1,3})((?:%.|.)+?)\2|(`+)((?:%.|.)+?)\4|\[((?:%.|.)+?)\]\(([^\s\)]+)\)/,
        processMarkdown: function (t, e, i) {
          for (
            var n,
              a = [],
              s = t.split(this.markdownPattern),
              r = s[0],
              o = 1,
              l = s.length;
            o < l;
            o += 8
          )
            s[o + 1]
              ? ((n = this.processString(s[o + 2], e, i)) instanceof Array ||
                  (n = [n]),
                (n = [["b", "i", "i"][s[o + 1].length - 1], {}, n]),
                3 === s[o + 1].length && (n = ["b", {}, n]))
              : (n = s[o + 3]
                  ? ((n = this.processString(
                      s[o + 4].replace(/^\s/, "").replace(/\s$/, ""),
                      e,
                      i
                    )) instanceof Array || (n = [n]),
                    ["code", {}, n])
                  : s[o + 5]
                  ? ((n = this.processString(s[o + 5], e, i)) instanceof
                      Array || (n = [n]),
                    [
                      "a",
                      {
                        href: this.processString(s[o + 6], e),
                        target: "_blank",
                      },
                      n,
                    ])
                  : ((r += s[o]), null)),
              n && ((a = this.concatString(a, r, e, i)).push(n), (r = "")),
              "" !== s[o + 7] && (r += s[o + 7]);
          return (a = this.concatString(a, r, e, i));
        },
        concatString: function (t, e, i, n) {
          return (
            "" != e &&
              ((e = this.processString(e, i, n)) instanceof Array || (e = [e]),
              (t = t.concat(e))),
            t
          );
        },
        lookupPhrase: function (t, e, i) {
          (i = i || "_"),
            t instanceof Array && ((i = t[0] || "_"), (t = t[1] || ""));
          var n = this.loadDomain(i);
          n && f.Hub.RestartAfter(n);
          var a = this.strings[this.locale];
          if (a && a.domains && i in a.domains) {
            var s = a.domains[i];
            s.strings && t in s.strings && (e = s.strings[t]);
          }
          return e;
        },
        loadFile: function (t, e, i) {
          (i = f.Callback(i)),
            (t = e.file || t).match(/\.js$/) || (t += ".js"),
            t.match(/^([a-z]+:|\[MathJax\])/) ||
              (t =
                (this.strings[this.locale].directory ||
                  this.directory + "/" + this.locale ||
                  "[MathJax]/localization/" + this.locale) +
                "/" +
                t);
          var n = f.Ajax.Require(t, function () {
            return (e.isLoaded = !0), i();
          });
          return n.called ? null : n;
        },
        loadDomain: function (t, e) {
          var i,
            n = this.strings[this.locale];
          if (n) {
            if (!n.isLoaded && (i = this.loadFile(this.locale, n)))
              return f.Callback.Queue(i, ["loadDomain", this, t]).Push(e || {});
            if (n.domains && t in n.domains) {
              var a = n.domains[t];
              if (!a.isLoaded && (i = this.loadFile(t, a)))
                return f.Callback.Queue(i).Push(e);
            }
          }
          return f.Callback(e)();
        },
        Try: function (e) {
          (e = f.Callback(e)).autoReset = !0;
          try {
            e();
          } catch (t) {
            if (!t.restart) throw t;
            f.Callback.After(["Try", this, e], t.restart);
          }
        },
        resetLocale: function (t) {
          if (t) {
            for (t = t.toLowerCase(); !this.strings[t]; ) {
              var e = t.lastIndexOf("-");
              if (-1 === e) return;
              t = t.substring(0, e);
            }
            var i = this.strings[t].remap;
            this.locale = i || t;
          }
        },
        setLocale: function (t) {
          this.resetLocale(t), f.Menu && this.loadDomain("MathMenu");
        },
        addTranslation: function (t, e, i) {
          var n = this.strings[t],
            a = !1;
          n || ((n = this.strings[t] = {}), (a = !0)),
            n.domains || (n.domains = {}),
            e && (n.domains[e] || (n.domains[e] = {}), (n = n.domains[e])),
            f.Hub.Insert(n, i),
            a && f.Menu.menu && f.Menu.CreateLocaleMenu();
        },
        setCSS: function (t) {
          var e = this.strings[this.locale];
          return (
            e &&
              (e.fontFamily && (t.style.fontFamily = e.fontFamily),
              e.fontDirection &&
                ((t.style.direction = e.fontDirection),
                "rtl" === e.fontDirection && (t.style.textAlign = "right"))),
            t
          );
        },
        fontFamily: function () {
          var t = this.strings[this.locale];
          return t ? t.fontFamily : null;
        },
        fontDirection: function () {
          var t = this.strings[this.locale];
          return t ? t.fontDirection : null;
        },
        plural: function (t) {
          var e = this.strings[this.locale];
          return e && e.plural ? e.plural(t) : 1 == t ? 1 : 2;
        },
        number: function (t) {
          var e = this.strings[this.locale];
          return e && e.number ? e.number(t) : t;
        },
      }),
      (f.Message = {
        localize: function (t) {
          return f.Localization._(t, t);
        },
        filterText: function (t, e, i) {
          return (
            "simple" === f.Hub.config.messageStyle &&
              ("LoadFile" === i
                ? (this.loading ||
                    (this.loading = this.localize("Loading") + " "),
                  (t = this.loading),
                  (this.loading += "."))
                : "ProcessMath" === i
                ? (this.processing ||
                    (this.processing = this.localize("Processing") + " "),
                  (t = this.processing),
                  (this.processing += "."))
                : "TypesetMath" === i &&
                  (this.typesetting ||
                    (this.typesetting = this.localize("Typesetting") + " "),
                  (t = this.typesetting),
                  (this.typesetting += "."))),
            t
          );
        },
        Set: function (t, e, i) {
          f.debug &&
            (Array.isArray(t) &&
              (t = f.Localization._.apply(f.Localization, t)),
            console.log("Message: " + t));
        },
        Clear: function (t, e) {},
        Remove: function () {},
        File: function (t) {
          return this.Set(["LoadFile", "Loading %1", t], null, null);
        },
        Log: function () {},
      }),
      (f.Hub = {
        config: {
          root: "./mathjax2/legacy",
          config: [],
          jax: [],
          extensions: [],
          preJax: null,
          postJax: null,
          displayAlign: "center",
          displayIndent: "0",
          preRemoveClass: "MathJax_Preview",
          showProcessingMessages: !0,
          messageStyle: "normal",
          delayStartupUntil: "none",
          skipStartupTypeset: !1,
          elements: [],
          positionToHash: !0,
          showMathMenu: !0,
          showMathMenuMSIE: !0,
          menuSettings: {
            zoom: "None",
            CTRL: !1,
            ALT: !1,
            CMD: !1,
            Shift: !1,
            discoverable: !1,
            zscale: "200%",
            renderer: null,
            font: "Auto",
            context: "MathJax",
            locale: null,
            mpContext: !1,
            mpMouse: !1,
            texHints: !0,
            FastPreview: null,
            assistiveMML: null,
            inTabOrder: !0,
            semantics: !1,
          },
          errorSettings: {
            message: [
              "[",
              ["MathProcessingError", "Math Processing Error"],
              "]",
            ],
            style: { color: "#CC0000", "font-style": "italic" },
          },
          ignoreMMLattributes: {},
        },
        preProcessors: f.Callback.Hooks(!0),
        inputJax: {},
        outputJax: { order: {} },
        processSectionDelay: 50,
        processUpdateTime: 250,
        processUpdateDelay: 10,
        signal: f.Callback.Signal("Hub"),
        Config: function (t) {
          this.Insert(this.config, t),
            this.config.Augment && this.Augment(this.config.Augment);
        },
        CombineConfig: function (t, e) {
          for (
            var i, n, a = this.config, s = 0, r = (t = t.split(/\./)).length;
            s < r;
            s++
          )
            a[(i = t[s])] || (a[i] = {}), (a = (n = a)[i]);
          return (n[i] = a = this.Insert(e, a)), a;
        },
        Register: {
          PreProcessor: function () {
            return f.Hub.preProcessors.Add.apply(
              f.Hub.preProcessors,
              arguments
            );
          },
          MessageHook: function () {
            return f.Hub.signal.MessageHook.apply(f.Hub.signal, arguments);
          },
          StartupHook: function () {
            return f.Hub.Startup.signal.MessageHook.apply(
              f.Hub.Startup.signal,
              arguments
            );
          },
          LoadHook: function () {
            return f.Ajax.LoadHook.apply(f.Ajax, arguments);
          },
        },
        UnRegister: {
          PreProcessor: function (t) {
            f.Hub.preProcessors.Remove(t);
          },
          MessageHook: function (t) {
            f.Hub.signal.RemoveHook(t);
          },
          StartupHook: function (t) {
            f.Hub.Startup.signal.RemoveHook(t);
          },
          LoadHook: function (t) {
            f.Ajax.removeHook(t);
          },
        },
        setRenderer: function (t, e) {
          if (t) {
            if (f.OutputJax[t]) {
              (this.config.menuSettings.renderer = t),
                null == e && (e = "jax/mml");
              var i = this.outputJax;
              return i[e] && i[e].length && t !== i[e][0].id
                ? (i[e].unshift(f.OutputJax[t]),
                  this.signal.Post(["Renderer Selected", t]))
                : null;
            }
            this.config.menuSettings.renderer = "";
            var n = "[MathJax]/jax/output/" + t + "/config.js";
            return f.Ajax.Require(n, ["setRenderer", this, t, e]);
          }
        },
        Queue: function () {
          return this.queue.Push.apply(this.queue, arguments);
        },
        RestartAfter: function (t) {
          throw this.Insert(Error("restart"), { restart: f.Callback(t) });
        },
        Insert: function (t, e) {
          for (var i in e)
            e.hasOwnProperty(i) &&
              ("object" != typeof e[i] ||
              e[i] instanceof Array ||
              ("object" != typeof t[i] && "function" != typeof t[i])
                ? (t[i] = e[i])
                : this.Insert(t[i], e[i]));
          return t;
        },
        SplitList:
          "trim" in String.prototype
            ? function (t) {
                return t.trim().split(/\s+/);
              }
            : function (t) {
                return t.replace(/^\s+/, "").replace(/\s+$/, "").split(/\s+/);
              },
      }),
      (f.Extension = {}),
      (f.Hub.Startup = {
        queue: f.Callback.Queue(),
        signal: f.Callback.Signal("Startup"),
      }),
      (f.Ajax.config.root = f.Hub.config.root),
      (n = g[(i = "MathJax")]),
      (a = "[" + i + "]"),
      (s = n.Hub),
      (r = n.Ajax),
      (o = n.Callback),
      (l = f.Object.Subclass(
        {
          JAXFILE: "jax.js",
          require: null,
          config: {},
          Init: function (t, e) {
            return 0 === arguments.length
              ? this
              : this.constructor.Subclass(t, e)();
          },
          Augment: function (t, e) {
            var i = this.constructor,
              n = {};
            if (null != t) {
              for (var a in t)
                t.hasOwnProperty(a) &&
                  ("function" == typeof t[a]
                    ? i.protoFunction(a, t[a])
                    : (n[a] = t[a]));
              t.toString !== i.prototype.toString &&
                t.toString !== {}.toString &&
                i.protoFunction("toString", t.toString);
            }
            return s.Insert(i.prototype, n), i.Augment(null, e), this;
          },
          Translate: function (t, e) {
            throw Error(
              this.directory +
                "/" +
                this.JAXFILE +
                " failed to define the Translate() method"
            );
          },
          Register: function (t) {},
          Config: function () {
            (this.config = s.CombineConfig(this.id, this.config)),
              this.config.Augment && this.Augment(this.config.Augment);
          },
          Startup: function () {},
          loadComplete: function (t) {
            if ("config.js" === t)
              return r.loadComplete(this.directory + "/" + t);
            var e = o.Queue();
            return (
              e.Push(
                ["Post", s.Startup.signal, this.id + " Jax Config"],
                ["Config", this],
                ["Post", s.Startup.signal, this.id + " Jax Startup"],
                ["Startup", this],
                ["Post", s.Startup.signal, this.id + " Jax Ready"]
              ),
              this.copyTranslate &&
                e.Push([
                  function (t) {
                    (t.preProcess = t.preTranslate),
                      (t.Process = t.Translate),
                      (t.postProcess = t.postTranslate);
                  },
                  this.constructor.prototype,
                ]),
              e.Push(["loadComplete", r, this.directory + "/" + t])
            );
          },
        },
        {
          id: "Jax",
          version: "2.6.0",
          directory: a + "/jax",
          extensionDir: a + "/extensions",
        }
      )),
      (n.InputJax = l.Subclass(
        {
          elementJax: "mml",
          sourceMenuTitle: ["Original", "Original Form"],
          copyTranslate: !0,
          Process: function (t, e) {
            throw Error("Input jax failed to load properly");
          },
          needsUpdate: function (t) {
            var e = t.SourceElement();
            return t.originalText !== n.HTML.getScript(e);
          },
          Register: function (t) {
            s.inputJax || (s.inputJax = {}), (s.inputJax[t] = this);
          },
        },
        {
          id: "InputJax",
          version: "2.6.0",
          directory: l.directory + "/input",
          extensionDir: l.extensionDir,
        }
      )),
      (n.OutputJax = l.Subclass(
        {
          copyTranslate: !0,
          preProcess: function (t) {
            throw Error("Output jax failed to load properly");
          },
          Register: function (t) {
            var e = s.outputJax;
            e[t] || (e[t] = []),
              e[t].length &&
              (this.id === s.config.menuSettings.renderer ||
                (e.order[this.id] || 0) < (e.order[e[t][0].id] || 0))
                ? e[t].unshift(this)
                : e[t].push(this);
          },
          Remove: function (t) {},
        },
        {
          id: "OutputJax",
          version: "2.6.0",
          directory: l.directory + "/output",
          extensionDir: l.extensionDir,
          fontDir: a + (n.isPacked ? "" : "/..") + "/fonts",
          imageDir: a + (n.isPacked ? "" : "/..") + "/images",
        }
      )),
      (n.ElementJax = l.Subclass(
        {
          Init: function (t, e) {
            return this.constructor.Subclass(t, e);
          },
          inputJax: null,
          outputJax: null,
          inputID: null,
          originalText: "",
          mimeType: "",
          sourceMenuTitle: ["MathMLcode", "MathML Code"],
          Text: function (t, e) {
            var i = this.SourceElement();
            return (
              n.HTML.setScript(i, t),
              (i.MathJax.state = this.STATE.UPDATE),
              s.Update(i, e)
            );
          },
          Reprocess: function (t) {
            var e = this.SourceElement();
            return (e.MathJax.state = this.STATE.UPDATE), s.Reprocess(e, t);
          },
          Update: function (t) {
            return this.Rerender(t);
          },
          Rerender: function (t) {
            var e = this.SourceElement();
            return (e.MathJax.state = this.STATE.OUTPUT), s.Process(e, t);
          },
          Remove: function (t) {
            this.hover && this.hover.clear(this),
              n.OutputJax[this.outputJax].Remove(this),
              t ||
                (s.signal.Post(["Remove Math", this.inputID]), this.Detach());
          },
          needsUpdate: function () {
            return n.InputJax[this.inputJax].needsUpdate(this);
          },
          SourceElement: function () {
            return E.getElementById(this.inputID);
          },
          Attach: function (t, e) {
            var i = t.MathJax.elementJax;
            return (
              t.MathJax.state === this.STATE.UPDATE
                ? i.Clone(this)
                : ((i = t.MathJax.elementJax = this),
                  t.id
                    ? (this.inputID = t.id)
                    : ((t.id = this.inputID = n.ElementJax.GetID()),
                      (this.newID = 1))),
              (i.originalText = n.HTML.getScript(t)),
              (i.inputJax = e),
              i.root && (i.root.inputID = i.inputID),
              i
            );
          },
          Detach: function () {
            var e = this.SourceElement();
            if (e) {
              try {
                delete e.MathJax;
              } catch (t) {
                e.MathJax = null;
              }
              this.newID && (e.id = "");
            }
          },
          Clone: function (t) {
            var e;
            for (e in this)
              this.hasOwnProperty(e) &&
                void 0 === t[e] &&
                "newID" !== e &&
                delete this[e];
            for (e in t)
              t.hasOwnProperty(e) &&
                (void 0 === this[e] || (this[e] !== t[e] && "inputID" !== e)) &&
                (this[e] = t[e]);
          },
        },
        {
          id: "ElementJax",
          version: "2.6.0",
          directory: l.directory + "/element",
          extensionDir: l.extensionDir,
          ID: 0,
          STATE: { PENDING: 1, PROCESSED: 2, UPDATE: 3, OUTPUT: 4 },
          GetID: function () {
            return this.ID++, "MathJax-Element-" + this.ID;
          },
          Subclass: function () {
            var t = l.Subclass.apply(this, arguments);
            return (t.loadComplete = this.prototype.loadComplete), t;
          },
        }
      )),
      (n.ElementJax.prototype.STATE = n.ElementJax.STATE),
      (f.Hub.Browser = { Select: function () {} });
  },
  function (t, e) {
    (MathJax.ElementJax.mml = MathJax.ElementJax(
      { mimeType: "jax/mml" },
      {
        id: "mml",
        version: "2.7.2",
        directory: MathJax.ElementJax.directory + "/mml",
        extensionDir: MathJax.ElementJax.extensionDir + "/mml",
        optableDir: MathJax.ElementJax.directory + "/mml/optable",
      }
    )),
      MathJax.ElementJax.mml.Augment(
        {
          Init: function () {
            if (
              (1 === arguments.length && "math" === arguments[0].type
                ? (this.root = arguments[0])
                : (this.root = MathJax.ElementJax.mml.math.apply(
                    this,
                    arguments
                  )),
              this.root.attr && this.root.attr.mode)
            ) {
              this.root.display ||
                "display" !== this.root.attr.mode ||
                ((this.root.display = "block"),
                this.root.attrNames.push("display")),
                delete this.root.attr.mode;
              for (var t = 0, e = this.root.attrNames.length; t < e; t++)
                if ("mode" === this.root.attrNames[t]) {
                  this.root.attrNames.splice(t, 1);
                  break;
                }
            }
          },
        },
        {
          INHERIT: "_inherit_",
          AUTO: "_auto_",
          SIZE: {
            INFINITY: "infinity",
            SMALL: "small",
            NORMAL: "normal",
            BIG: "big",
          },
          COLOR: { TRANSPARENT: "transparent" },
          VARIANT: {
            NORMAL: "normal",
            BOLD: "bold",
            ITALIC: "italic",
            BOLDITALIC: "bold-italic",
            DOUBLESTRUCK: "double-struck",
            FRAKTUR: "fraktur",
            BOLDFRAKTUR: "bold-fraktur",
            SCRIPT: "script",
            BOLDSCRIPT: "bold-script",
            SANSSERIF: "sans-serif",
            BOLDSANSSERIF: "bold-sans-serif",
            SANSSERIFITALIC: "sans-serif-italic",
            SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
            MONOSPACE: "monospace",
            INITIAL: "inital",
            TAILED: "tailed",
            LOOPED: "looped",
            STRETCHED: "stretched",
            CALIGRAPHIC: "-tex-caligraphic",
            OLDSTYLE: "-tex-oldstyle",
          },
          FORM: { PREFIX: "prefix", INFIX: "infix", POSTFIX: "postfix" },
          LINEBREAK: {
            AUTO: "auto",
            NEWLINE: "newline",
            NOBREAK: "nobreak",
            GOODBREAK: "goodbreak",
            BADBREAK: "badbreak",
          },
          LINEBREAKSTYLE: {
            BEFORE: "before",
            AFTER: "after",
            DUPLICATE: "duplicate",
            INFIXLINBREAKSTYLE: "infixlinebreakstyle",
          },
          INDENTALIGN: {
            LEFT: "left",
            CENTER: "center",
            RIGHT: "right",
            AUTO: "auto",
            ID: "id",
            INDENTALIGN: "indentalign",
          },
          INDENTSHIFT: { INDENTSHIFT: "indentshift" },
          LINETHICKNESS: { THIN: "thin", MEDIUM: "medium", THICK: "thick" },
          NOTATION: {
            LONGDIV: "longdiv",
            ACTUARIAL: "actuarial",
            RADICAL: "radical",
            BOX: "box",
            ROUNDEDBOX: "roundedbox",
            CIRCLE: "circle",
            LEFT: "left",
            RIGHT: "right",
            TOP: "top",
            BOTTOM: "bottom",
            UPDIAGONALSTRIKE: "updiagonalstrike",
            DOWNDIAGONALSTRIKE: "downdiagonalstrike",
            UPDIAGONALARROW: "updiagonalarrow",
            VERTICALSTRIKE: "verticalstrike",
            HORIZONTALSTRIKE: "horizontalstrike",
            PHASORANGLE: "phasorangle",
            MADRUWB: "madruwb",
          },
          ALIGN: {
            TOP: "top",
            BOTTOM: "bottom",
            CENTER: "center",
            BASELINE: "baseline",
            AXIS: "axis",
            LEFT: "left",
            RIGHT: "right",
          },
          LINES: { NONE: "none", SOLID: "solid", DASHED: "dashed" },
          SIDE: {
            LEFT: "left",
            RIGHT: "right",
            LEFTOVERLAP: "leftoverlap",
            RIGHTOVERLAP: "rightoverlap",
          },
          WIDTH: { AUTO: "auto", FIT: "fit" },
          ACTIONTYPE: {
            TOGGLE: "toggle",
            STATUSLINE: "statusline",
            TOOLTIP: "tooltip",
            INPUT: "input",
          },
          LENGTH: {
            VERYVERYTHINMATHSPACE: "veryverythinmathspace",
            VERYTHINMATHSPACE: "verythinmathspace",
            THINMATHSPACE: "thinmathspace",
            MEDIUMMATHSPACE: "mediummathspace",
            THICKMATHSPACE: "thickmathspace",
            VERYTHICKMATHSPACE: "verythickmathspace",
            VERYVERYTHICKMATHSPACE: "veryverythickmathspace",
            NEGATIVEVERYVERYTHINMATHSPACE: "negativeveryverythinmathspace",
            NEGATIVEVERYTHINMATHSPACE: "negativeverythinmathspace",
            NEGATIVETHINMATHSPACE: "negativethinmathspace",
            NEGATIVEMEDIUMMATHSPACE: "negativemediummathspace",
            NEGATIVETHICKMATHSPACE: "negativethickmathspace",
            NEGATIVEVERYTHICKMATHSPACE: "negativeverythickmathspace",
            NEGATIVEVERYVERYTHICKMATHSPACE: "negativeveryverythickmathspace",
          },
          OVERFLOW: {
            LINBREAK: "linebreak",
            SCROLL: "scroll",
            ELIDE: "elide",
            TRUNCATE: "truncate",
            SCALE: "scale",
          },
          UNIT: {
            EM: "em",
            EX: "ex",
            PX: "px",
            IN: "in",
            CM: "cm",
            MM: "mm",
            PT: "pt",
            PC: "pc",
          },
          TEXCLASS: {
            ORD: 0,
            OP: 1,
            BIN: 2,
            REL: 3,
            OPEN: 4,
            CLOSE: 5,
            PUNCT: 6,
            INNER: 7,
            VCENTER: 8,
            NONE: -1,
          },
          TEXCLASSNAMES: [
            "ORD",
            "OP",
            "BIN",
            "REL",
            "OPEN",
            "CLOSE",
            "PUNCT",
            "INNER",
            "VCENTER",
          ],
          skipAttributes: { texClass: !0, useHeight: !0, texprimestyle: !0 },
          copyAttributes: {
            displaystyle: 1,
            scriptlevel: 1,
            open: 1,
            close: 1,
            form: 1,
            actiontype: 1,
            fontfamily: !0,
            fontsize: !0,
            fontweight: !0,
            fontstyle: !0,
            color: !0,
            background: !0,
            id: !0,
            class: 1,
            href: !0,
            style: !0,
          },
          copyAttributeNames: [
            "displaystyle",
            "scriptlevel",
            "open",
            "close",
            "form",
            "actiontype",
            "fontfamily",
            "fontsize",
            "fontweight",
            "fontstyle",
            "color",
            "background",
            "id",
            "class",
            "href",
            "style",
          ],
          nocopyAttributes: {
            fontfamily: !0,
            fontsize: !0,
            fontweight: !0,
            fontstyle: !0,
            color: !0,
            background: !0,
            id: !0,
            class: !0,
            href: !0,
            style: !0,
            xmlns: !0,
          },
          Error: function (t, e) {
            var i = this.merror(t),
              n = MathJax.Localization.fontDirection(),
              a = MathJax.Localization.fontFamily();
            return (
              e && (i = i.With(e)),
              (n || a) &&
                ((i = this.mstyle(i)),
                n && (i.dir = n),
                a && (i.style.fontFamily = "font-family: " + a)),
              i
            );
          },
        }
      ),
      (function (l) {
        (l.mbase = MathJax.Object.Subclass(
          {
            type: "base",
            isToken: !1,
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              dir: l.INHERIT,
            },
            noInherit: {},
            noInheritAttribute: { texClass: !0 },
            getRemoved: {},
            linebreakContainer: !1,
            Init: function () {
              (this.data = []),
                !this.inferRow ||
                  (1 === arguments.length && arguments[0].inferred) ||
                  this.Append(l.mrow().With({ inferred: !0, notParent: !0 })),
                this.Append.apply(this, arguments);
            },
            With: function (t) {
              for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
              return this;
            },
            Append: function () {
              if (this.inferRow && this.data.length)
                this.data[0].Append.apply(this.data[0], arguments);
              else
                for (var t = 0, e = arguments.length; t < e; t++)
                  this.SetData(this.data.length, arguments[t]);
            },
            SetData: function (t, e) {
              null != e &&
                (e instanceof l.mbase ||
                  (e = this.isToken || this.isChars ? l.chars(e) : l.mtext(e)),
                (e.parent = this),
                e.setInherit(this.inheritFromMe ? this : this.inherit)),
                (this.data[t] = e);
            },
            Parent: function () {
              for (var t = this.parent; t && t.notParent; ) t = t.parent;
              return t;
            },
            Get: function (t, e, i) {
              if (!i) {
                if (null != this[t]) return this[t];
                if (this.attr && null != this.attr[t]) return this.attr[t];
              }
              var n = this.Parent();
              if (n && null != n["adjustChild_" + t])
                return n["adjustChild_" + t](this.childPosition(), e);
              for (var a = this.inherit, s = a; a; ) {
                var r = a[t];
                if (
                  (null == r && a.attr && (r = a.attr[t]),
                  a.removedStyles &&
                    a.getRemoved[t] &&
                    null == r &&
                    (r = a.removedStyles[a.getRemoved[t]]),
                  null != r && a.noInheritAttribute && !a.noInheritAttribute[t])
                ) {
                  var o = a.noInherit[this.type];
                  if (!o || !o[t]) return r;
                }
                a = (s = a).inherit;
              }
              if (!e) {
                if (this.defaults[t] === l.AUTO) return this.autoDefault(t);
                if (this.defaults[t] !== l.INHERIT && null != this.defaults[t])
                  return this.defaults[t];
                if (s) return s.defaults[t];
              }
              return null;
            },
            hasValue: function (t) {
              return null != this.Get(t, !0);
            },
            getValues: function () {
              for (var t = {}, e = 0, i = arguments.length; e < i; e++)
                t[arguments[e]] = this.Get(arguments[e]);
              return t;
            },
            adjustChild_scriptlevel: function (t, e) {
              return this.Get("scriptlevel", e);
            },
            adjustChild_displaystyle: function (t, e) {
              return this.Get("displaystyle", e);
            },
            adjustChild_texprimestyle: function (t, e) {
              return this.Get("texprimestyle", e);
            },
            childPosition: function () {
              for (var t = this, e = t.parent; e.notParent; )
                e = (t = e).parent;
              for (var i = 0, n = e.data.length; i < n; i++)
                if (e.data[i] === t) return i;
              return null;
            },
            setInherit: function (t) {
              if (t !== this.inherit && null == this.inherit) {
                this.inherit = t;
                for (var e = 0, i = this.data.length; e < i; e++)
                  this.data[e] &&
                    this.data[e].setInherit &&
                    this.data[e].setInherit(t);
              }
            },
            setTeXclass: function (t) {
              return this.getPrevClass(t), void 0 !== this.texClass ? this : t;
            },
            getPrevClass: function (t) {
              t &&
                ((this.prevClass = t.Get("texClass")),
                (this.prevLevel = t.Get("scriptlevel")));
            },
            updateTeXclass: function (t) {
              t &&
                ((this.prevClass = t.prevClass),
                delete t.prevClass,
                (this.prevLevel = t.prevLevel),
                delete t.prevLevel,
                (this.texClass = t.Get("texClass")));
            },
            texSpacing: function () {
              var t = null != this.prevClass ? this.prevClass : l.TEXCLASS.NONE,
                e = this.Get("texClass") || l.TEXCLASS.ORD;
              if (t === l.TEXCLASS.NONE || e === l.TEXCLASS.NONE) return "";
              t === l.TEXCLASS.VCENTER && (t = l.TEXCLASS.ORD),
                e === l.TEXCLASS.VCENTER && (e = l.TEXCLASS.ORD);
              var i = this.TEXSPACE[t][e];
              return (0 < this.prevLevel || 0 < this.Get("scriptlevel")) &&
                0 <= i
                ? ""
                : this.TEXSPACELENGTH[Math.abs(i)];
            },
            TEXSPACELENGTH: [
              "",
              l.LENGTH.THINMATHSPACE,
              l.LENGTH.MEDIUMMATHSPACE,
              l.LENGTH.THICKMATHSPACE,
            ],
            TEXSPACE: [
              [0, -1, 2, 3, 0, 0, 0, 1],
              [-1, -1, 0, 3, 0, 0, 0, 1],
              [2, 2, 0, 0, 2, 0, 0, 2],
              [3, 3, 0, 0, 3, 0, 0, 3],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, -1, 2, 3, 0, 0, 0, 1],
              [1, 1, 0, 1, 1, 1, 1, 1],
              [1, -1, 2, 3, 1, 0, 1, 1],
            ],
            autoDefault: function (t) {
              return "";
            },
            isSpacelike: function () {
              return !1;
            },
            isEmbellished: function () {
              return !1;
            },
            Core: function () {
              return this;
            },
            CoreMO: function () {
              return this;
            },
            childIndex: function (t) {
              if (null != t)
                for (var e = 0, i = this.data.length; e < i; e++)
                  if (t === this.data[e]) return e;
            },
            CoreIndex: function () {
              return ((this.inferRow && this.data[0]) || this).childIndex(
                this.Core()
              );
            },
            hasNewline: function () {
              if (this.isEmbellished()) return this.CoreMO().hasNewline();
              if (this.isToken || this.linebreakContainer) return !1;
              for (var t = 0, e = this.data.length; t < e; t++)
                if (this.data[t] && this.data[t].hasNewline()) return !0;
              return !1;
            },
            array: function () {
              return this.inferred ? this.data : [this];
            },
            toString: function () {
              return this.type + "(" + this.data.join(",") + ")";
            },
            getAnnotation: function () {
              return null;
            },
          },
          {
            childrenSpacelike: function () {
              for (var t = 0, e = this.data.length; t < e; t++)
                if (!this.data[t].isSpacelike()) return !1;
              return !0;
            },
            childEmbellished: function () {
              return this.data[0] && this.data[0].isEmbellished();
            },
            childCore: function () {
              return this.inferRow && this.data[0]
                ? this.data[0].Core()
                : this.data[0];
            },
            childCoreMO: function () {
              return this.data[0] ? this.data[0].CoreMO() : null;
            },
            setChildTeXclass: function (t) {
              return (
                this.data[0] &&
                  ((t = this.data[0].setTeXclass(t)),
                  this.updateTeXclass(this.data[0])),
                t
              );
            },
            setBaseTeXclasses: function (t) {
              this.getPrevClass(t),
                (this.texClass = null),
                this.data[0]
                  ? this.isEmbellished() || this.data[0].isa(l.mi)
                    ? ((t = this.data[0].setTeXclass(t)),
                      this.updateTeXclass(this.Core()))
                    : (this.data[0].setTeXclass(), (t = this))
                  : (t = this);
              for (var e = 1, i = this.data.length; e < i; e++)
                this.data[e] && this.data[e].setTeXclass();
              return t;
            },
            setSeparateTeXclasses: function (t) {
              this.getPrevClass(t);
              for (var e = 0, i = this.data.length; e < i; e++)
                this.data[e] && this.data[e].setTeXclass();
              return (
                this.isEmbellished() && this.updateTeXclass(this.Core()), this
              );
            },
          }
        )),
          (l.mi = l.mbase.Subclass({
            type: "mi",
            isToken: !0,
            texClass: l.TEXCLASS.ORD,
            defaults: {
              mathvariant: l.AUTO,
              mathsize: l.INHERIT,
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              dir: l.INHERIT,
            },
            autoDefault: function (t) {
              if ("mathvariant" !== t) return "";
              var e = (this.data[0] || "").toString();
              return 1 === e.length ||
                (2 === e.length &&
                  55296 <= e.charCodeAt(0) &&
                  e.charCodeAt(0) < 56320)
                ? l.VARIANT.ITALIC
                : l.VARIANT.NORMAL;
            },
            setTeXclass: function (t) {
              this.getPrevClass(t);
              var e = this.data.join("");
              return (
                1 < e.length &&
                  e.match(/^[a-z][a-z0-9]*$/i) &&
                  this.texClass === l.TEXCLASS.ORD &&
                  ((this.texClass = l.TEXCLASS.OP), (this.autoOP = !0)),
                this
              );
            },
          })),
          (l.mn = l.mbase.Subclass({
            type: "mn",
            isToken: !0,
            texClass: l.TEXCLASS.ORD,
            defaults: {
              mathvariant: l.INHERIT,
              mathsize: l.INHERIT,
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              dir: l.INHERIT,
            },
          })),
          (l.mo = l.mbase.Subclass({
            type: "mo",
            isToken: !0,
            defaults: {
              mathvariant: l.INHERIT,
              mathsize: l.INHERIT,
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              dir: l.INHERIT,
              form: l.AUTO,
              fence: l.AUTO,
              separator: l.AUTO,
              lspace: l.AUTO,
              rspace: l.AUTO,
              stretchy: l.AUTO,
              symmetric: l.AUTO,
              maxsize: l.AUTO,
              minsize: l.AUTO,
              largeop: l.AUTO,
              movablelimits: l.AUTO,
              accent: l.AUTO,
              linebreak: l.LINEBREAK.AUTO,
              lineleading: l.INHERIT,
              linebreakstyle: l.AUTO,
              linebreakmultchar: l.INHERIT,
              indentalign: l.INHERIT,
              indentshift: l.INHERIT,
              indenttarget: l.INHERIT,
              indentalignfirst: l.INHERIT,
              indentshiftfirst: l.INHERIT,
              indentalignlast: l.INHERIT,
              indentshiftlast: l.INHERIT,
              texClass: l.AUTO,
            },
            defaultDef: {
              form: l.FORM.INFIX,
              fence: !1,
              separator: !1,
              lspace: l.LENGTH.THICKMATHSPACE,
              rspace: l.LENGTH.THICKMATHSPACE,
              stretchy: !1,
              symmetric: !1,
              maxsize: l.SIZE.INFINITY,
              minsize: "0em",
              largeop: !1,
              movablelimits: !1,
              accent: !1,
              linebreak: l.LINEBREAK.AUTO,
              lineleading: "1ex",
              linebreakstyle: "before",
              indentalign: l.INDENTALIGN.AUTO,
              indentshift: "0",
              indenttarget: "",
              indentalignfirst: l.INDENTALIGN.INDENTALIGN,
              indentshiftfirst: l.INDENTSHIFT.INDENTSHIFT,
              indentalignlast: l.INDENTALIGN.INDENTALIGN,
              indentshiftlast: l.INDENTSHIFT.INDENTSHIFT,
              texClass: l.TEXCLASS.REL,
            },
            SPACE_ATTR: { lspace: 1, rspace: 2, form: 4 },
            useMMLspacing: 7,
            autoDefault: function (t, e) {
              var i = this.def;
              if (!i) {
                if ("form" === t)
                  return (
                    (this.useMMLspacing &= ~this.SPACE_ATTR.form),
                    this.getForm()
                  );
                for (
                  var n = this.data.join(""),
                    a = [
                      this.Get("form"),
                      l.FORM.INFIX,
                      l.FORM.POSTFIX,
                      l.FORM.PREFIX,
                    ],
                    s = 0,
                    r = a.length;
                  s < r;
                  s++
                ) {
                  var o = this.OPTABLE[a[s]][n];
                  if (o) {
                    i = this.makeDef(o);
                    break;
                  }
                }
                !(i = i || this.CheckRange(n)) && e
                  ? (i = {})
                  : ((i = i || MathJax.Hub.Insert({}, this.defaultDef)),
                    this.parent
                      ? (this.def = i)
                      : (i = MathJax.Hub.Insert({}, i)),
                    (i.form = a[0]));
              }
              return (
                (this.useMMLspacing &= ~(this.SPACE_ATTR[t] || 0)),
                null != i[t] ? i[t] : e ? "" : this.defaultDef[t]
              );
            },
            CheckRange: function (t) {
              var e = t.charCodeAt(0);
              55296 <= e &&
                e < 56320 &&
                (e = ((e - 55296) << 10) + (t.charCodeAt(1) - 56320) + 65536);
              for (
                var i = 0, n = this.RANGES.length;
                i < n && this.RANGES[i][0] <= e;
                i++
              )
                if (e <= this.RANGES[i][1]) {
                  if (this.RANGES[i][3]) {
                    var a = l.optableDir + "/" + this.RANGES[i][3] + ".js";
                    (this.RANGES[i][3] = null),
                      MathJax.Hub.RestartAfter(MathJax.Ajax.Require(a));
                  }
                  var s = l.TEXCLASSNAMES[this.RANGES[i][2]];
                  return (
                    (s = this.OPTABLE.infix[t] =
                      l.mo.OPTYPES["BIN" === s ? "BIN3" : s]),
                    this.makeDef(s)
                  );
                }
              return null;
            },
            makeDef: function (t) {
              null == t[2] && (t[2] = this.defaultDef.texClass),
                t[3] || (t[3] = {});
              var e = MathJax.Hub.Insert({}, t[3]);
              return (
                (e.lspace = this.SPACE[t[0]]),
                (e.rspace = this.SPACE[t[1]]),
                (e.texClass = t[2]),
                e.texClass === l.TEXCLASS.REL &&
                  (this.movablelimits ||
                    this.data.join("").match(/^[a-z]+$/i)) &&
                  (e.texClass = l.TEXCLASS.OP),
                e
              );
            },
            getForm: function () {
              for (
                var t = this, e = this.parent, i = this.Parent();
                i && i.isEmbellished();

              )
                (t = e), (e = i.parent), (i = i.Parent());
              if (e && "mrow" === e.type && 1 !== e.NonSpaceLength()) {
                if (e.FirstNonSpace() === t) return l.FORM.PREFIX;
                if (e.LastNonSpace() === t) return l.FORM.POSTFIX;
              }
              return l.FORM.INFIX;
            },
            isEmbellished: function () {
              return !0;
            },
            hasNewline: function () {
              return this.Get("linebreak") === l.LINEBREAK.NEWLINE;
            },
            CoreParent: function () {
              for (
                var t = this;
                t && t.isEmbellished() && t.CoreMO() === this && !t.isa(l.math);

              )
                t = t.Parent();
              return t;
            },
            CoreText: function (t) {
              if (!t) return "";
              if (t.isEmbellished()) return t.CoreMO().data.join("");
              for (
                ;
                (((t.isa(l.mrow) ||
                  t.isa(l.TeXAtom) ||
                  t.isa(l.mstyle) ||
                  t.isa(l.mphantom)) &&
                  1 === t.data.length) ||
                  t.isa(l.munderover)) &&
                t.data[0];

              )
                t = t.data[0];
              return t.isToken ? t.data.join("") : "";
            },
            remapChars: {
              "*": "\u2217",
              '"': "\u2033",
              "\xb0": "\u2218",
              "\xb2": "2",
              "\xb3": "3",
              "\xb4": "\u2032",
              "\xb9": "1",
            },
            remap: function (t, e) {
              return (
                (t = t.replace(/-/g, "\u2212")),
                e &&
                  1 ===
                    (t = t.replace(/'/g, "\u2032").replace(/`/g, "\u2035"))
                      .length &&
                  (t = e[t] || t),
                t
              );
            },
            setTeXclass: function (t) {
              var e = this.getValues("form", "lspace", "rspace", "fence");
              return this.useMMLspacing
                ? ((this.texClass = l.TEXCLASS.NONE), this)
                : (e.fence &&
                    !this.texClass &&
                    (e.form === l.FORM.PREFIX &&
                      (this.texClass = l.TEXCLASS.OPEN),
                    e.form === l.FORM.POSTFIX &&
                      (this.texClass = l.TEXCLASS.CLOSE)),
                  (this.texClass = this.Get("texClass")),
                  "\u2061" === this.data.join("")
                    ? (t && ((t.texClass = l.TEXCLASS.OP), (t.fnOP = !0)),
                      (this.texClass = this.prevClass = l.TEXCLASS.NONE),
                      t)
                    : this.adjustTeXclass(t));
            },
            adjustTeXclass: function (t) {
              if (this.texClass === l.TEXCLASS.NONE) return t;
              if (
                (t
                  ? (!t.autoOP ||
                      (this.texClass !== l.TEXCLASS.BIN &&
                        this.texClass !== l.TEXCLASS.REL) ||
                      (t.texClass = l.TEXCLASS.ORD),
                    (this.prevClass = t.texClass || l.TEXCLASS.ORD),
                    (this.prevLevel = t.Get("scriptlevel")))
                  : (this.prevClass = l.TEXCLASS.NONE),
                this.texClass !== l.TEXCLASS.BIN ||
                  (this.prevClass !== l.TEXCLASS.NONE &&
                    this.prevClass !== l.TEXCLASS.BIN &&
                    this.prevClass !== l.TEXCLASS.OP &&
                    this.prevClass !== l.TEXCLASS.REL &&
                    this.prevClass !== l.TEXCLASS.OPEN &&
                    this.prevClass !== l.TEXCLASS.PUNCT))
              )
                if (
                  this.prevClass !== l.TEXCLASS.BIN ||
                  (this.texClass !== l.TEXCLASS.REL &&
                    this.texClass !== l.TEXCLASS.CLOSE &&
                    this.texClass !== l.TEXCLASS.PUNCT)
                ) {
                  if (this.texClass === l.TEXCLASS.BIN) {
                    for (
                      var e = this, i = this.parent;
                      i &&
                      i.parent &&
                      i.isEmbellished() &&
                      (1 === i.data.length ||
                        ("mrow" !== i.type && i.Core() === e));

                    )
                      i = (e = i).parent;
                    i.data[i.data.length - 1] === e &&
                      (this.texClass = l.TEXCLASS.ORD);
                  }
                } else t.texClass = this.prevClass = l.TEXCLASS.ORD;
              else this.texClass = l.TEXCLASS.ORD;
              return this;
            },
          })),
          (l.mtext = l.mbase.Subclass({
            type: "mtext",
            isToken: !0,
            isSpacelike: function () {
              return !0;
            },
            texClass: l.TEXCLASS.ORD,
            defaults: {
              mathvariant: l.INHERIT,
              mathsize: l.INHERIT,
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              dir: l.INHERIT,
            },
          })),
          (l.mspace = l.mbase.Subclass({
            type: "mspace",
            isToken: !0,
            isSpacelike: function () {
              return !0;
            },
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              width: "0em",
              height: "0ex",
              depth: "0ex",
              linebreak: l.LINEBREAK.AUTO,
            },
            hasDimAttr: function () {
              return (
                this.hasValue("width") ||
                this.hasValue("height") ||
                this.hasValue("depth")
              );
            },
            hasNewline: function () {
              return (
                !this.hasDimAttr() &&
                this.Get("linebreak") === l.LINEBREAK.NEWLINE
              );
            },
          })),
          (l.ms = l.mbase.Subclass({
            type: "ms",
            isToken: !0,
            texClass: l.TEXCLASS.ORD,
            defaults: {
              mathvariant: l.INHERIT,
              mathsize: l.INHERIT,
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              dir: l.INHERIT,
              lquote: '"',
              rquote: '"',
            },
          })),
          (l.mglyph = l.mbase.Subclass({
            type: "mglyph",
            isToken: !0,
            texClass: l.TEXCLASS.ORD,
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              alt: "",
              src: "",
              width: l.AUTO,
              height: l.AUTO,
              valign: "0em",
            },
          })),
          (l.mrow = l.mbase.Subclass({
            type: "mrow",
            isSpacelike: l.mbase.childrenSpacelike,
            inferred: !1,
            notParent: !1,
            isEmbellished: function () {
              for (var t = !1, e = 0, i = this.data.length; e < i; e++)
                if (null != this.data[e])
                  if (this.data[e].isEmbellished()) {
                    if (t) return !1;
                    (t = !0), (this.core = e);
                  } else if (!this.data[e].isSpacelike()) return !1;
              return t;
            },
            NonSpaceLength: function () {
              for (var t = 0, e = 0, i = this.data.length; e < i; e++)
                this.data[e] && !this.data[e].isSpacelike() && t++;
              return t;
            },
            FirstNonSpace: function () {
              for (var t = 0, e = this.data.length; t < e; t++)
                if (this.data[t] && !this.data[t].isSpacelike())
                  return this.data[t];
              return null;
            },
            LastNonSpace: function () {
              for (var t = this.data.length - 1; 0 <= t; t--)
                if (this.data[0] && !this.data[t].isSpacelike())
                  return this.data[t];
              return null;
            },
            Core: function () {
              return this.isEmbellished() && void 0 !== this.core
                ? this.data[this.core]
                : this;
            },
            CoreMO: function () {
              return this.isEmbellished() && void 0 !== this.core
                ? this.data[this.core].CoreMO()
                : this;
            },
            toString: function () {
              return this.inferred
                ? "[" + this.data.join(",") + "]"
                : this.SUPER(arguments).toString.call(this);
            },
            setTeXclass: function (t) {
              var e,
                i = this.data.length;
              if ((!this.open && !this.close) || (t && t.fnOP)) {
                for (e = 0; e < i; e++)
                  this.data[e] && (t = this.data[e].setTeXclass(t));
                return this.data[0] && this.updateTeXclass(this.data[0]), t;
              }
              for (this.getPrevClass(t), t = null, e = 0; e < i; e++)
                this.data[e] && (t = this.data[e].setTeXclass(t));
              return (
                this.hasOwnProperty("texClass") ||
                  (this.texClass = l.TEXCLASS.INNER),
                this
              );
            },
            getAnnotation: function (t) {
              return 1 != this.data.length
                ? null
                : this.data[0].getAnnotation(t);
            },
          })),
          (l.mfrac = l.mbase.Subclass({
            type: "mfrac",
            num: 0,
            den: 1,
            linebreakContainer: !0,
            isEmbellished: l.mbase.childEmbellished,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              linethickness: l.LINETHICKNESS.MEDIUM,
              numalign: l.ALIGN.CENTER,
              denomalign: l.ALIGN.CENTER,
              bevelled: !1,
            },
            adjustChild_displaystyle: function (t) {
              return !1;
            },
            adjustChild_scriptlevel: function (t) {
              var e = this.Get("scriptlevel");
              return (!this.Get("displaystyle") || 0 < e) && e++, e;
            },
            adjustChild_texprimestyle: function (t) {
              return t == this.den || this.Get("texprimestyle");
            },
            setTeXclass: l.mbase.setSeparateTeXclasses,
          })),
          (l.msqrt = l.mbase.Subclass({
            type: "msqrt",
            inferRow: !0,
            linebreakContainer: !0,
            texClass: l.TEXCLASS.ORD,
            setTeXclass: l.mbase.setSeparateTeXclasses,
            adjustChild_texprimestyle: function (t) {
              return !0;
            },
          })),
          (l.mroot = l.mbase.Subclass({
            type: "mroot",
            linebreakContainer: !0,
            texClass: l.TEXCLASS.ORD,
            adjustChild_displaystyle: function (t) {
              return 1 !== t && this.Get("displaystyle");
            },
            adjustChild_scriptlevel: function (t) {
              var e = this.Get("scriptlevel");
              return 1 === t && (e += 2), e;
            },
            adjustChild_texprimestyle: function (t) {
              return 0 === t || this.Get("texprimestyle");
            },
            setTeXclass: l.mbase.setSeparateTeXclasses,
          })),
          (l.mstyle = l.mbase.Subclass({
            type: "mstyle",
            isSpacelike: l.mbase.childrenSpacelike,
            isEmbellished: l.mbase.childEmbellished,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            inferRow: !0,
            defaults: {
              scriptlevel: l.INHERIT,
              displaystyle: l.INHERIT,
              scriptsizemultiplier: Math.sqrt(0.5),
              scriptminsize: "8pt",
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              dir: l.INHERIT,
              infixlinebreakstyle: l.LINEBREAKSTYLE.BEFORE,
              decimalseparator: ".",
            },
            adjustChild_scriptlevel: function (t) {
              var e = this.scriptlevel;
              if (null == e) e = this.Get("scriptlevel");
              else if (String(e).match(/^ *[-+]/)) {
                e = this.Get("scriptlevel", null, !0) + parseInt(e);
              }
              return e;
            },
            inheritFromMe: !0,
            noInherit: {
              mpadded: {
                width: !0,
                height: !0,
                depth: !0,
                lspace: !0,
                voffset: !0,
              },
              mtable: { width: !0, height: !0, depth: !0, align: !0 },
            },
            getRemoved: {
              fontfamily: "fontFamily",
              fontweight: "fontWeight",
              fontstyle: "fontStyle",
              fontsize: "fontSize",
            },
            setTeXclass: l.mbase.setChildTeXclass,
          })),
          (l.merror = l.mbase.Subclass({
            type: "merror",
            inferRow: !0,
            linebreakContainer: !0,
            texClass: l.TEXCLASS.ORD,
          })),
          (l.mpadded = l.mbase.Subclass({
            type: "mpadded",
            inferRow: !0,
            isSpacelike: l.mbase.childrenSpacelike,
            isEmbellished: l.mbase.childEmbellished,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              width: "",
              height: "",
              depth: "",
              lspace: 0,
              voffset: 0,
            },
            setTeXclass: l.mbase.setChildTeXclass,
          })),
          (l.mphantom = l.mbase.Subclass({
            type: "mphantom",
            texClass: l.TEXCLASS.ORD,
            inferRow: !0,
            isSpacelike: l.mbase.childrenSpacelike,
            isEmbellished: l.mbase.childEmbellished,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            setTeXclass: l.mbase.setChildTeXclass,
          })),
          (l.mfenced = l.mbase.Subclass({
            type: "mfenced",
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              open: "(",
              close: ")",
              separators: ",",
            },
            addFakeNodes: function () {
              var t = this.getValues("open", "close", "separators");
              if (
                ((t.open = t.open.replace(/[ \t\n\r]/g, "")),
                (t.close = t.close.replace(/[ \t\n\r]/g, "")),
                (t.separators = t.separators.replace(/[ \t\n\r]/g, "")),
                "" !== t.open &&
                  (this.SetData(
                    "open",
                    l.mo(t.open).With({
                      fence: !0,
                      form: l.FORM.PREFIX,
                      texClass: l.TEXCLASS.OPEN,
                    })
                  ),
                  (this.data.open.useMMLspacing = 0)),
                "" !== t.separators)
              ) {
                for (; t.separators.length < this.data.length; )
                  t.separators += t.separators.charAt(t.separators.length - 1);
                for (var e = 1, i = this.data.length; e < i; e++)
                  this.data[e] &&
                    (this.SetData(
                      "sep" + e,
                      l.mo(t.separators.charAt(e - 1)).With({ separator: !0 })
                    ),
                    (this.data["sep" + e].useMMLspacing = 0));
              }
              "" !== t.close &&
                (this.SetData(
                  "close",
                  l.mo(t.close).With({
                    fence: !0,
                    form: l.FORM.POSTFIX,
                    texClass: l.TEXCLASS.CLOSE,
                  })
                ),
                (this.data.close.useMMLspacing = 0));
            },
            texClass: l.TEXCLASS.OPEN,
            setTeXclass: function (t) {
              this.addFakeNodes(),
                this.getPrevClass(t),
                this.data.open && (t = this.data.open.setTeXclass(t)),
                this.data[0] && (t = this.data[0].setTeXclass(t));
              for (var e = 1, i = this.data.length; e < i; e++)
                this.data["sep" + e] &&
                  (t = this.data["sep" + e].setTeXclass(t)),
                  this.data[e] && (t = this.data[e].setTeXclass(t));
              return (
                this.data.close && (t = this.data.close.setTeXclass(t)),
                this.updateTeXclass(this.data.open),
                (this.texClass = l.TEXCLASS.INNER),
                t
              );
            },
          })),
          (l.menclose = l.mbase.Subclass({
            type: "menclose",
            inferRow: !0,
            linebreakContainer: !0,
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              notation: l.NOTATION.LONGDIV,
              texClass: l.TEXCLASS.ORD,
            },
            setTeXclass: l.mbase.setSeparateTeXclasses,
          })),
          (l.msubsup = l.mbase.Subclass({
            type: "msubsup",
            base: 0,
            sub: 1,
            sup: 2,
            isEmbellished: l.mbase.childEmbellished,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              subscriptshift: "",
              superscriptshift: "",
              texClass: l.AUTO,
            },
            autoDefault: function (t) {
              return "texClass" === t
                ? this.isEmbellished()
                  ? this.CoreMO().Get(t)
                  : l.TEXCLASS.ORD
                : 0;
            },
            adjustChild_displaystyle: function (t) {
              return !(0 < t) && this.Get("displaystyle");
            },
            adjustChild_scriptlevel: function (t) {
              var e = this.Get("scriptlevel");
              return 0 < t && e++, e;
            },
            adjustChild_texprimestyle: function (t) {
              return t === this.sub || this.Get("texprimestyle");
            },
            setTeXclass: l.mbase.setBaseTeXclasses,
          })),
          (l.msub = l.msubsup.Subclass({ type: "msub" })),
          (l.msup = l.msubsup.Subclass({ type: "msup", sub: 2, sup: 1 })),
          (l.mmultiscripts = l.msubsup.Subclass({
            type: "mmultiscripts",
            adjustChild_texprimestyle: function (t) {
              return t % 2 == 1 || this.Get("texprimestyle");
            },
          })),
          (l.mprescripts = l.mbase.Subclass({ type: "mprescripts" })),
          (l.none = l.mbase.Subclass({ type: "none" })),
          (l.munderover = l.mbase.Subclass({
            type: "munderover",
            base: 0,
            under: 1,
            over: 2,
            sub: 1,
            sup: 2,
            ACCENTS: ["", "accentunder", "accent"],
            linebreakContainer: !0,
            isEmbellished: l.mbase.childEmbellished,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              accent: l.AUTO,
              accentunder: l.AUTO,
              align: l.ALIGN.CENTER,
              texClass: l.AUTO,
              subscriptshift: "",
              superscriptshift: "",
            },
            autoDefault: function (t) {
              return "texClass" === t
                ? this.isEmbellished()
                  ? this.CoreMO().Get(t)
                  : l.TEXCLASS.ORD
                : "accent" === t && this.data[this.over]
                ? this.data[this.over].CoreMO().Get("accent")
                : !("accentunder" !== t || !this.data[this.under]) &&
                  this.data[this.under].CoreMO().Get("accent");
            },
            adjustChild_displaystyle: function (t) {
              return !(0 < t) && this.Get("displaystyle");
            },
            adjustChild_scriptlevel: function (t) {
              var e = this.Get("scriptlevel"),
                i =
                  this.data[this.base] &&
                  !this.Get("displaystyle") &&
                  this.data[this.base].CoreMO().Get("movablelimits");
              return (
                t != this.under || (!i && this.Get("accentunder")) || e++,
                t != this.over || (!i && this.Get("accent")) || e++,
                e
              );
            },
            adjustChild_texprimestyle: function (t) {
              return (
                !(t !== this.base || !this.data[this.over]) ||
                this.Get("texprimestyle")
              );
            },
            setTeXclass: l.mbase.setBaseTeXclasses,
          })),
          (l.munder = l.munderover.Subclass({ type: "munder" })),
          (l.mover = l.munderover.Subclass({
            type: "mover",
            over: 1,
            under: 2,
            sup: 1,
            sub: 2,
            ACCENTS: ["", "accent", "accentunder"],
          })),
          (l.mtable = l.mbase.Subclass({
            type: "mtable",
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              align: l.ALIGN.AXIS,
              rowalign: l.ALIGN.BASELINE,
              columnalign: l.ALIGN.CENTER,
              groupalign: "{left}",
              alignmentscope: !0,
              columnwidth: l.WIDTH.AUTO,
              width: l.WIDTH.AUTO,
              rowspacing: "1ex",
              columnspacing: ".8em",
              rowlines: l.LINES.NONE,
              columnlines: l.LINES.NONE,
              frame: l.LINES.NONE,
              framespacing: "0.4em 0.5ex",
              equalrows: !1,
              equalcolumns: !1,
              displaystyle: !1,
              side: l.SIDE.RIGHT,
              minlabelspacing: "0.8em",
              texClass: l.TEXCLASS.ORD,
              useHeight: 1,
            },
            adjustChild_displaystyle: function () {
              return null != this.displaystyle
                ? this.displaystyle
                : this.defaults.displaystyle;
            },
            inheritFromMe: !0,
            noInherit: {
              mover: { align: !0 },
              munder: { align: !0 },
              munderover: { align: !0 },
              mtable: {
                align: !0,
                rowalign: !0,
                columnalign: !0,
                groupalign: !0,
                alignmentscope: !0,
                columnwidth: !0,
                width: !0,
                rowspacing: !0,
                columnspacing: !0,
                rowlines: !0,
                columnlines: !0,
                frame: !0,
                framespacing: !0,
                equalrows: !0,
                equalcolumns: !0,
                displaystyle: !0,
                side: !0,
                minlabelspacing: !0,
                texClass: !0,
                useHeight: 1,
              },
            },
            linebreakContainer: !0,
            Append: function () {
              for (var t = 0, e = arguments.length; t < e; t++)
                arguments[t] instanceof l.mtr ||
                  arguments[t] instanceof l.mlabeledtr ||
                  (arguments[t] = l.mtr(arguments[t]));
              this.SUPER(arguments).Append.apply(this, arguments);
            },
            setTeXclass: l.mbase.setSeparateTeXclasses,
          })),
          (l.mtr = l.mbase.Subclass({
            type: "mtr",
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              rowalign: l.INHERIT,
              columnalign: l.INHERIT,
              groupalign: l.INHERIT,
            },
            inheritFromMe: !0,
            noInherit: {
              mrow: { rowalign: !0, columnalign: !0, groupalign: !0 },
              mtable: { rowalign: !0, columnalign: !0, groupalign: !0 },
            },
            linebreakContainer: !0,
            Append: function () {
              for (var t = 0, e = arguments.length; t < e; t++)
                arguments[t] instanceof l.mtd ||
                  (arguments[t] = l.mtd(arguments[t]));
              this.SUPER(arguments).Append.apply(this, arguments);
            },
            setTeXclass: l.mbase.setSeparateTeXclasses,
          })),
          (l.mtd = l.mbase.Subclass({
            type: "mtd",
            inferRow: !0,
            linebreakContainer: !0,
            isEmbellished: l.mbase.childEmbellished,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              rowspan: 1,
              columnspan: 1,
              rowalign: l.INHERIT,
              columnalign: l.INHERIT,
              groupalign: l.INHERIT,
            },
            setTeXclass: l.mbase.setSeparateTeXclasses,
          })),
          (l.maligngroup = l.mbase.Subclass({
            type: "maligngroup",
            isSpacelike: function () {
              return !0;
            },
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              groupalign: l.INHERIT,
            },
            inheritFromMe: !0,
            noInherit: { mrow: { groupalign: !0 }, mtable: { groupalign: !0 } },
          })),
          (l.malignmark = l.mbase.Subclass({
            type: "malignmark",
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              edge: l.SIDE.LEFT,
            },
            isSpacelike: function () {
              return !0;
            },
          })),
          (l.mlabeledtr = l.mtr.Subclass({ type: "mlabeledtr" })),
          (l.maction = l.mbase.Subclass({
            type: "maction",
            defaults: {
              mathbackground: l.INHERIT,
              mathcolor: l.INHERIT,
              actiontype: l.ACTIONTYPE.TOGGLE,
              selection: 1,
            },
            selected: function () {
              return this.data[this.Get("selection") - 1] || l.NULL;
            },
            isEmbellished: function () {
              return this.selected().isEmbellished();
            },
            isSpacelike: function () {
              return this.selected().isSpacelike();
            },
            Core: function () {
              return this.selected().Core();
            },
            CoreMO: function () {
              return this.selected().CoreMO();
            },
            setTeXclass: function (t) {
              this.Get("actiontype") === l.ACTIONTYPE.TOOLTIP &&
                this.data[1] &&
                this.data[1].setTeXclass();
              var e = this.selected();
              return (t = e.setTeXclass(t)), this.updateTeXclass(e), t;
            },
          })),
          (l.semantics = l.mbase.Subclass({
            type: "semantics",
            notParent: !0,
            isEmbellished: l.mbase.childEmbellished,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            defaults: { definitionURL: null, encoding: null },
            setTeXclass: l.mbase.setChildTeXclass,
            getAnnotation: function (t) {
              var e = MathJax.Hub.config.MathMenu.semanticsAnnotations[t];
              if (e)
                for (var i = 0, n = this.data.length; i < n; i++) {
                  var a = this.data[i].Get("encoding");
                  if (a)
                    for (var s = 0, r = e.length; s < r; s++)
                      if (e[s] === a) return this.data[i];
                }
              return null;
            },
          })),
          (l.annotation = l.mbase.Subclass({
            type: "annotation",
            isChars: !0,
            linebreakContainer: !0,
            defaults: {
              definitionURL: null,
              encoding: null,
              cd: "mathmlkeys",
              name: "",
              src: null,
            },
          })),
          (l["annotation-xml"] = l.mbase.Subclass({
            type: "annotation-xml",
            linebreakContainer: !0,
            defaults: {
              definitionURL: null,
              encoding: null,
              cd: "mathmlkeys",
              name: "",
              src: null,
            },
          })),
          (l.math = l.mstyle.Subclass({
            type: "math",
            defaults: {
              mathvariant: l.VARIANT.NORMAL,
              mathsize: l.SIZE.NORMAL,
              mathcolor: "",
              mathbackground: l.COLOR.TRANSPARENT,
              dir: "ltr",
              scriptlevel: 0,
              displaystyle: l.AUTO,
              display: "inline",
              maxwidth: "",
              overflow: l.OVERFLOW.LINEBREAK,
              altimg: "",
              "altimg-width": "",
              "altimg-height": "",
              "altimg-valign": "",
              alttext: "",
              cdgroup: "",
              scriptsizemultiplier: Math.sqrt(0.5),
              scriptminsize: "8px",
              infixlinebreakstyle: l.LINEBREAKSTYLE.BEFORE,
              lineleading: "1ex",
              indentshift: "auto",
              indentalign: l.INDENTALIGN.AUTO,
              indentalignfirst: l.INDENTALIGN.INDENTALIGN,
              indentshiftfirst: l.INDENTSHIFT.INDENTSHIFT,
              indentalignlast: l.INDENTALIGN.INDENTALIGN,
              indentshiftlast: l.INDENTSHIFT.INDENTSHIFT,
              decimalseparator: ".",
              texprimestyle: !1,
            },
            autoDefault: function (t) {
              return "displaystyle" === t
                ? "block" === this.Get("display")
                : "";
            },
            linebreakContainer: !0,
            setTeXclass: l.mbase.setChildTeXclass,
            getAnnotation: function (t) {
              return 1 != this.data.length
                ? null
                : this.data[0].getAnnotation(t);
            },
          })),
          (l.chars = l.mbase.Subclass({
            type: "chars",
            Append: function () {
              this.data.push.apply(this.data, arguments);
            },
            value: function () {
              return this.data.join("");
            },
            toString: function () {
              return this.data.join("");
            },
          })),
          (l.entity = l.mbase.Subclass({
            type: "entity",
            Append: function () {
              this.data.push.apply(this.data, arguments);
            },
            value: function () {
              return "#x" === this.data[0].substr(0, 2)
                ? parseInt(this.data[0].substr(2), 16)
                : "#" === this.data[0].substr(0, 1)
                ? parseInt(this.data[0].substr(1))
                : 0;
            },
            toString: function () {
              var t = this.value();
              return t <= 65535
                ? String.fromCharCode(t)
                : ((t -= 65536),
                  String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
            },
          })),
          (l.xml = l.mbase.Subclass({
            type: "xml",
            Init: function () {
              return (
                (this.div = document.createElement("div")),
                this.SUPER(arguments).Init.apply(this, arguments)
              );
            },
            Append: function () {
              for (var t = 0, e = arguments.length; t < e; t++) {
                var i = this.Import(arguments[t]);
                this.data.push(i), this.div.appendChild(i);
              }
            },
            Import: function (t) {
              if (document.importNode) return document.importNode(t, !0);
              var e, i, n;
              if (1 === t.nodeType) {
                for (
                  e = document.createElement(t.nodeName),
                    i = 0,
                    n = t.attributes.length;
                  i < n;
                  i++
                ) {
                  var a = t.attributes[i];
                  a.specified &&
                    null != a.nodeValue &&
                    "" != a.nodeValue &&
                    e.setAttribute(a.nodeName, a.nodeValue),
                    "style" === a.nodeName && (e.style.cssText = a.nodeValue);
                }
                t.className && (e.className = t.className);
              } else if (3 === t.nodeType || 4 === t.nodeType)
                e = document.createTextNode(t.nodeValue);
              else {
                if (8 !== t.nodeType) return document.createTextNode("");
                e = document.createComment(t.nodeValue);
              }
              for (i = 0, n = t.childNodes.length; i < n; i++)
                e.appendChild(this.Import(t.childNodes[i]));
              return e;
            },
            value: function () {
              return this.div;
            },
            toString: function () {
              return this.div.innerHTML;
            },
          })),
          (l.TeXAtom = l.mbase.Subclass({
            type: "texatom",
            linebreakContainer: !0,
            inferRow: !0,
            notParent: !0,
            texClass: l.TEXCLASS.ORD,
            Core: l.mbase.childCore,
            CoreMO: l.mbase.childCoreMO,
            isEmbellished: l.mbase.childEmbellished,
            setTeXclass: function (t) {
              return this.data[0].setTeXclass(), this.adjustTeXclass(t);
            },
            adjustTeXclass: l.mo.prototype.adjustTeXclass,
          })),
          (l.NULL = l.mbase().With({ type: "null" }));
        var t = l.TEXCLASS,
          e = {
            ORD: [0, 0, t.ORD],
            ORD11: [1, 1, t.ORD],
            ORD21: [2, 1, t.ORD],
            ORD02: [0, 2, t.ORD],
            ORD55: [5, 5, t.ORD],
            OP: [1, 2, t.OP, { largeop: !0, movablelimits: !0, symmetric: !0 }],
            OPFIXED: [1, 2, t.OP, { largeop: !0, movablelimits: !0 }],
            INTEGRAL: [0, 1, t.OP, { largeop: !0, symmetric: !0 }],
            INTEGRAL2: [1, 2, t.OP, { largeop: !0, symmetric: !0 }],
            BIN3: [3, 3, t.BIN],
            BIN4: [4, 4, t.BIN],
            BIN01: [0, 1, t.BIN],
            BIN5: [5, 5, t.BIN],
            TALLBIN: [4, 4, t.BIN, { stretchy: !0 }],
            BINOP: [4, 4, t.BIN, { largeop: !0, movablelimits: !0 }],
            REL: [5, 5, t.REL],
            REL1: [1, 1, t.REL, { stretchy: !0 }],
            REL4: [4, 4, t.REL],
            RELSTRETCH: [5, 5, t.REL, { stretchy: !0 }],
            RELACCENT: [5, 5, t.REL, { accent: !0 }],
            WIDEREL: [5, 5, t.REL, { accent: !0, stretchy: !0 }],
            OPEN: [0, 0, t.OPEN, { fence: !0, stretchy: !0, symmetric: !0 }],
            CLOSE: [0, 0, t.CLOSE, { fence: !0, stretchy: !0, symmetric: !0 }],
            INNER: [0, 0, t.INNER],
            PUNCT: [0, 3, t.PUNCT],
            ACCENT: [0, 0, t.ORD, { accent: !0 }],
            WIDEACCENT: [0, 0, t.ORD, { accent: !0, stretchy: !0 }],
          };
        l.mo.Augment(
          {
            SPACE: [
              "0em",
              "0.1111em",
              "0.1667em",
              "0.2222em",
              "0.2667em",
              "0.3333em",
            ],
            RANGES: [
              [32, 127, t.REL, "BasicLatin"],
              [160, 255, t.ORD, "Latin1Supplement"],
              [256, 383, t.ORD],
              [384, 591, t.ORD],
              [688, 767, t.ORD, "SpacingModLetters"],
              [768, 879, t.ORD, "CombDiacritMarks"],
              [880, 1023, t.ORD, "GreekAndCoptic"],
              [7680, 7935, t.ORD],
              [8192, 8303, t.PUNCT, "GeneralPunctuation"],
              [8304, 8351, t.ORD],
              [8352, 8399, t.ORD],
              [8400, 8447, t.ORD, "CombDiactForSymbols"],
              [8448, 8527, t.ORD, "LetterlikeSymbols"],
              [8528, 8591, t.ORD],
              [8592, 8703, t.REL, "Arrows"],
              [8704, 8959, t.BIN, "MathOperators"],
              [8960, 9215, t.ORD, "MiscTechnical"],
              [9312, 9471, t.ORD],
              [9472, 9631, t.ORD],
              [9632, 9727, t.ORD, "GeometricShapes"],
              [9984, 10175, t.ORD, "Dingbats"],
              [10176, 10223, t.ORD, "MiscMathSymbolsA"],
              [10224, 10239, t.REL, "SupplementalArrowsA"],
              [10496, 10623, t.REL, "SupplementalArrowsB"],
              [10624, 10751, t.ORD, "MiscMathSymbolsB"],
              [10752, 11007, t.BIN, "SuppMathOperators"],
              [11008, 11263, t.ORD, "MiscSymbolsAndArrows"],
              [119808, 120831, t.ORD],
            ],
            OPTABLE: {
              prefix: {
                "\u2200": e.ORD21,
                "\u2202": e.ORD21,
                "\u2203": e.ORD21,
                "\u2207": e.ORD21,
                "\u220f": e.OP,
                "\u2210": e.OP,
                "\u2211": e.OP,
                "\u2212": e.BIN01,
                "\u2213": e.BIN01,
                "\u221a": [1, 1, t.ORD, { stretchy: !0 }],
                "\u2220": e.ORD,
                "\u222b": e.INTEGRAL,
                "\u222e": e.INTEGRAL,
                "\u22c0": e.OP,
                "\u22c1": e.OP,
                "\u22c2": e.OP,
                "\u22c3": e.OP,
                "\u2308": e.OPEN,
                "\u230a": e.OPEN,
                "\u27e8": e.OPEN,
                "\u27ee": e.OPEN,
                "\u2a00": e.OP,
                "\u2a01": e.OP,
                "\u2a02": e.OP,
                "\u2a04": e.OP,
                "\u2a06": e.OP,
                "\xac": e.ORD21,
                "\xb1": e.BIN01,
                "(": e.OPEN,
                "+": e.BIN01,
                "-": e.BIN01,
                "[": e.OPEN,
                "{": e.OPEN,
                "|": e.OPEN,
              },
              postfix: {
                "!": [1, 0, t.CLOSE],
                "&": e.ORD,
                "\u2032": e.ORD02,
                "\u203e": e.WIDEACCENT,
                "\u2309": e.CLOSE,
                "\u230b": e.CLOSE,
                "\u23de": e.WIDEACCENT,
                "\u23df": e.WIDEACCENT,
                "\u266d": e.ORD02,
                "\u266e": e.ORD02,
                "\u266f": e.ORD02,
                "\u27e9": e.CLOSE,
                "\u27ef": e.CLOSE,
                "\u02c6": e.WIDEACCENT,
                "\u02c7": e.WIDEACCENT,
                "\u02c9": e.WIDEACCENT,
                "\u02ca": e.ACCENT,
                "\u02cb": e.ACCENT,
                "\u02d8": e.ACCENT,
                "\u02d9": e.ACCENT,
                "\u02dc": e.WIDEACCENT,
                "\u0302": e.WIDEACCENT,
                "\xa8": e.ACCENT,
                "\xaf": e.WIDEACCENT,
                ")": e.CLOSE,
                "]": e.CLOSE,
                "^": e.WIDEACCENT,
                _: e.WIDEACCENT,
                "`": e.ACCENT,
                "|": e.CLOSE,
                "}": e.CLOSE,
                "~": e.WIDEACCENT,
              },
              infix: {
                "": e.ORD,
                "%": [3, 3, t.ORD],
                "\u2022": e.BIN4,
                "\u2026": e.INNER,
                "\u2044": e.TALLBIN,
                "\u2061": e.ORD,
                "\u2062": e.ORD,
                "\u2063": [
                  0,
                  0,
                  t.ORD,
                  { linebreakstyle: "after", separator: !0 },
                ],
                "\u2064": e.ORD,
                "\u2190": e.WIDEREL,
                "\u2191": e.RELSTRETCH,
                "\u2192": e.WIDEREL,
                "\u2193": e.RELSTRETCH,
                "\u2194": e.WIDEREL,
                "\u2195": e.RELSTRETCH,
                "\u2196": e.RELSTRETCH,
                "\u2197": e.RELSTRETCH,
                "\u2198": e.RELSTRETCH,
                "\u2199": e.RELSTRETCH,
                "\u21a6": e.WIDEREL,
                "\u21a9": e.WIDEREL,
                "\u21aa": e.WIDEREL,
                "\u21bc": e.WIDEREL,
                "\u21bd": e.WIDEREL,
                "\u21c0": e.WIDEREL,
                "\u21c1": e.WIDEREL,
                "\u21cc": e.WIDEREL,
                "\u21d0": e.WIDEREL,
                "\u21d1": e.RELSTRETCH,
                "\u21d2": e.WIDEREL,
                "\u21d3": e.RELSTRETCH,
                "\u21d4": e.WIDEREL,
                "\u21d5": e.RELSTRETCH,
                "\u2208": e.REL,
                "\u2209": e.REL,
                "\u220b": e.REL,
                "\u2212": e.BIN4,
                "\u2213": e.BIN4,
                "\u2215": e.TALLBIN,
                "\u2216": e.BIN4,
                "\u2217": e.BIN4,
                "\u2218": e.BIN4,
                "\u2219": e.BIN4,
                "\u221d": e.REL,
                "\u2223": e.REL,
                "\u2225": e.REL,
                "\u2227": e.BIN4,
                "\u2228": e.BIN4,
                "\u2229": e.BIN4,
                "\u222a": e.BIN4,
                "\u223c": e.REL,
                "\u2240": e.BIN4,
                "\u2243": e.REL,
                "\u2245": e.REL,
                "\u2248": e.REL,
                "\u224d": e.REL,
                "\u2250": e.REL,
                "\u2260": e.REL,
                "\u2261": e.REL,
                "\u2264": e.REL,
                "\u2265": e.REL,
                "\u226a": e.REL,
                "\u226b": e.REL,
                "\u227a": e.REL,
                "\u227b": e.REL,
                "\u2282": e.REL,
                "\u2283": e.REL,
                "\u2286": e.REL,
                "\u2287": e.REL,
                "\u228e": e.BIN4,
                "\u2291": e.REL,
                "\u2292": e.REL,
                "\u2293": e.BIN4,
                "\u2294": e.BIN4,
                "\u2295": e.BIN4,
                "\u2296": e.BIN4,
                "\u2297": e.BIN4,
                "\u2298": e.BIN4,
                "\u2299": e.BIN4,
                "\u22a2": e.REL,
                "\u22a3": e.REL,
                "\u22a4": e.ORD55,
                "\u22a5": e.REL,
                "\u22a8": e.REL,
                "\u22c4": e.BIN4,
                "\u22c5": e.BIN4,
                "\u22c6": e.BIN4,
                "\u22c8": e.REL,
                "\u22ee": e.ORD55,
                "\u22ef": e.INNER,
                "\u22f1": [5, 5, t.INNER],
                "\u25b3": e.BIN4,
                "\u25b5": e.BIN4,
                "\u25b9": e.BIN4,
                "\u25bd": e.BIN4,
                "\u25bf": e.BIN4,
                "\u25c3": e.BIN4,
                "\u2758": e.REL,
                "\u27f5": e.WIDEREL,
                "\u27f6": e.WIDEREL,
                "\u27f7": e.WIDEREL,
                "\u27f8": e.WIDEREL,
                "\u27f9": e.WIDEREL,
                "\u27fa": e.WIDEREL,
                "\u27fc": e.WIDEREL,
                "\u2a2f": e.BIN4,
                "\u2a3f": e.BIN4,
                "\u2aaf": e.REL,
                "\u2ab0": e.REL,
                "\xb1": e.BIN4,
                "\xb7": e.BIN4,
                "\xd7": e.BIN4,
                "\xf7": e.BIN4,
                "*": e.BIN3,
                "+": e.BIN4,
                ",": [
                  0,
                  3,
                  t.PUNCT,
                  { linebreakstyle: "after", separator: !0 },
                ],
                "-": e.BIN4,
                ".": [3, 3, t.ORD],
                "/": e.ORD11,
                ":": [1, 2, t.REL],
                ";": [
                  0,
                  3,
                  t.PUNCT,
                  { linebreakstyle: "after", separator: !0 },
                ],
                "<": e.REL,
                "=": e.REL,
                ">": e.REL,
                "?": [1, 1, t.CLOSE],
                "\\": e.ORD,
                "^": e.ORD11,
                _: e.ORD11,
                "|": [2, 2, t.ORD, { fence: !0, stretchy: !0, symmetric: !0 }],
                "#": e.ORD,
                $: e.ORD,
                ".": [0, 3, t.PUNCT, { separator: !0 }],
                "\u02b9": e.ORD,
                "\u0300": e.ACCENT,
                "\u0301": e.ACCENT,
                "\u0303": e.WIDEACCENT,
                "\u0304": e.ACCENT,
                "\u0306": e.ACCENT,
                "\u0307": e.ACCENT,
                "\u0308": e.ACCENT,
                "\u030c": e.ACCENT,
                "\u0332": e.WIDEACCENT,
                "\u0338": e.REL4,
                "\u2015": [0, 0, t.ORD, { stretchy: !0 }],
                "\u2017": [0, 0, t.ORD, { stretchy: !0 }],
                "\u2020": e.BIN3,
                "\u2021": e.BIN3,
                "\u20d7": e.ACCENT,
                "\u2111": e.ORD,
                "\u2113": e.ORD,
                "\u2118": e.ORD,
                "\u211c": e.ORD,
                "\u2205": e.ORD,
                "\u221e": e.ORD,
                "\u2305": e.BIN3,
                "\u2306": e.BIN3,
                "\u2322": e.REL4,
                "\u2323": e.REL4,
                "\u2329": e.OPEN,
                "\u232a": e.CLOSE,
                "\u23aa": e.ORD,
                "\u23af": [0, 0, t.ORD, { stretchy: !0 }],
                "\u23b0": e.OPEN,
                "\u23b1": e.CLOSE,
                "\u2500": e.ORD,
                "\u25ef": e.BIN3,
                "\u2660": e.ORD,
                "\u2661": e.ORD,
                "\u2662": e.ORD,
                "\u2663": e.ORD,
                "\u3008": e.OPEN,
                "\u3009": e.CLOSE,
                "\ufe37": e.WIDEACCENT,
                "\ufe38": e.WIDEACCENT,
              },
            },
          },
          { OPTYPES: e }
        );
        var i = l.mo.prototype.OPTABLE;
        (i.infix["^"] = e.WIDEREL),
          (i.infix._ = e.WIDEREL),
          (i.prefix["\u2223"] = e.OPEN),
          (i.prefix["\u2225"] = e.OPEN),
          (i.postfix["\u2223"] = e.CLOSE),
          (i.postfix["\u2225"] = e.CLOSE);
      })(MathJax.ElementJax.mml),
      MathJax.ElementJax.mml.loadComplete("jax.js");
  },
  function (t, e) {
    (MathJax.InputJax.AsciiMath = MathJax.InputJax({
      id: "AsciiMath",
      version: "2.7.2",
      directory: MathJax.InputJax.directory + "/AsciiMath",
      extensionDir: MathJax.InputJax.extensionDir + "/AsciiMath",
      config: {
        fixphi: !0,
        useMathMLspacing: !0,
        displaystyle: !0,
        decimalsign: ".",
      },
    })),
      MathJax.InputJax.AsciiMath.Register("math/asciimath"),
      MathJax.InputJax.AsciiMath.loadComplete("config.js");
  },
  function (t, e) {
    function i(t) {
      return N
        ? I.createElement(t)
        : I.createElementNS("http://www.w3.org/1999/xhtml", t);
    }
    function n(t) {
      return N ? I.createElement("m:" + t) : I.createElementNS(A, t);
    }
    function x(t, e) {
      var i;
      return (
        (i = N ? I.createElement("m:" + t) : I.createElementNS(A, t)),
        e && i.appendChild(e),
        i
      );
    }
    function a(t, e) {
      return t.input > e.input ? 1 : -1;
    }
    function s() {
      var t,
        e = B.length;
      for (t = 0; t < e; t++)
        B[t].tex &&
          B.push({
            input: B[t].tex,
            tag: B[t].tag,
            output: B[t].output,
            ttype: B[t].ttype,
            acc: B[t].acc || !1,
          });
      r();
    }
    function r() {
      var t;
      for (B.sort(a), t = 0; t < B.length; t++) K[t] = B[t].input;
    }
    function T(t, e) {
      var i;
      i =
        "\\" == t.charAt(e) && "\\" != t.charAt(e + 1) && " " != t.charAt(e + 1)
          ? t.slice(e + 1)
          : t.slice(e);
      for (var n = 0; n < i.length && i.charCodeAt(n) <= 32; n += 1);
      return i.slice(n);
    }
    function u(t, e, i) {
      if (0 == i) {
        var n, a;
        for (i = -1, n = t.length; i + 1 < n; )
          t[(a = (i + n) >> 1)] < e ? (i = a) : (n = a);
        return n;
      }
      for (var s = i; s < t.length && t[s] < e; s++);
      return s;
    }
    function C(t) {
      for (var e, i, n, a = 0, s = "", r = !0, o = 1; o <= t.length && r; o++)
        (i = t.slice(0, o)),
          (a = u(K, i, a)) < K.length &&
            t.slice(0, K[a].length) == K[a] &&
            (o = (s = K[(e = a)]).length),
          (r = a < K.length && t.slice(0, K[a].length) >= K[a]);
      if (((V = W), "" != s)) return (W = B[e].ttype), B[e];
      (W = L), (a = 1), (i = t.slice(0, 1));
      for (var l = !0; "0" <= i && i <= "9" && a <= t.length; )
        (i = t.slice(a, a + 1)), a++;
      if (i == y && "0" <= (i = t.slice(a, a + 1)) && i <= "9")
        for (l = !1, a++; "0" <= i && i <= "9" && a <= t.length; )
          (i = t.slice(a, a + 1)), a++;
      return (
        (n =
          (l && 1 < a) || 2 < a
            ? ((i = t.slice(0, a - 1)), "mn")
            : ((a = 2),
              ((i = t.slice(0, 1)) < "A" || "Z" < i) && (i < "a" || "z" < i)
                ? "mo"
                : "mi")),
        "-" == i && V == P
          ? ((W = P), { input: i, tag: n, output: i, ttype: M, func: !0 })
          : { input: i, tag: n, output: i, ttype: L }
      );
    }
    function b(t) {
      var e;
      t.hasChildNodes() &&
        (!t.firstChild.hasChildNodes() ||
          ("mrow" != t.nodeName && "M:MROW" != t.nodeName) ||
          ("(" != (e = t.firstChild.firstChild.nodeValue) &&
            "[" != e &&
            "{" != e) ||
          t.removeChild(t.firstChild),
        !t.lastChild.hasChildNodes() ||
          ("mrow" != t.nodeName && "M:MROW" != t.nodeName) ||
          (")" != (e = t.lastChild.firstChild.nodeValue) &&
            "]" != e &&
            "}" != e) ||
          t.removeChild(t.lastChild));
    }
    function h(t) {
      var e,
        i,
        n,
        a,
        s,
        r = I.createDocumentFragment();
      if (null == (e = C((t = T(t, 0)))) || (e.ttype == H && 0 < G))
        return [null, t];
      switch (
        (e.ttype == J && (e = C((t = e.output + T(t, e.input.length)))),
        e.ttype)
      ) {
        case _:
        case L:
          return (
            (t = T(t, e.input.length)),
            [x(e.tag, I.createTextNode(e.output)), t]
          );
        case k:
          return (
            G++,
            (n = p((t = T(t, e.input.length)), !0)),
            G--,
            "boolean" == typeof e.invisible && e.invisible
              ? (i = x("mrow", n[0]))
              : (i = x(
                  "mrow",
                  (i = x("mo", I.createTextNode(e.output)))
                )).appendChild(n[0]),
            [i, n[1]]
          );
        case j:
          return (
            e != F && (t = T(t, e.input.length)),
            -1 ==
              (a =
                "{" == t.charAt(0)
                  ? t.indexOf("}")
                  : "(" == t.charAt(0)
                  ? t.indexOf(")")
                  : "[" == t.charAt(0)
                  ? t.indexOf("]")
                  : e == F
                  ? t.slice(1).indexOf('"') + 1
                  : 0) && (a = t.length),
            " " == (s = t.slice(1, a)).charAt(0) &&
              ((i = x("mspace")).setAttribute("width", "1ex"),
              r.appendChild(i)),
            r.appendChild(x(e.tag, I.createTextNode(s))),
            " " == s.charAt(s.length - 1) &&
              ((i = x("mspace")).setAttribute("width", "1ex"),
              r.appendChild(i)),
            (t = T(t, a + 1)),
            [x("mrow", r), t]
          );
        case U:
        case M:
          if (null == (n = h((t = T(t, e.input.length))))[0])
            return [x(e.tag, I.createTextNode(e.output)), t];
          if ("boolean" == typeof e.func && e.func)
            return "^" == (s = t.charAt(0)) ||
              "_" == s ||
              "/" == s ||
              "|" == s ||
              "," == s ||
              (1 == e.input.length && e.input.match(/\w/) && "(" != s)
              ? [x(e.tag, I.createTextNode(e.output)), t]
              : ((i = x(
                  "mrow",
                  x(e.tag, I.createTextNode(e.output))
                )).appendChild(n[0]),
                [i, n[1]]);
          if ((b(n[0]), "sqrt" == e.input)) return [x(e.tag, n[0]), n[1]];
          if (void 0 !== e.rewriteleftright)
            return (
              (i = x(
                "mrow",
                x("mo", I.createTextNode(e.rewriteleftright[0]))
              )).appendChild(n[0]),
              i.appendChild(x("mo", I.createTextNode(e.rewriteleftright[1]))),
              [i, n[1]]
            );
          if ("cancel" == e.input)
            return (
              (i = x(e.tag, n[0])).setAttribute("notation", "updiagonalstrike"),
              [i, n[1]]
            );
          if ("boolean" == typeof e.acc && e.acc)
            return (
              (i = x(e.tag, n[0])).appendChild(
                x("mo", I.createTextNode(e.output))
              ),
              [i, n[1]]
            );
          if (!N && void 0 !== e.codes)
            for (a = 0; a < n[0].childNodes.length; a++)
              if (
                "mi" == n[0].childNodes[a].nodeName ||
                "mi" == n[0].nodeName
              ) {
                s =
                  "mi" == n[0].nodeName
                    ? n[0].firstChild.nodeValue
                    : n[0].childNodes[a].firstChild.nodeValue;
                for (var o = [], l = 0; l < s.length; l++)
                  64 < s.charCodeAt(l) && s.charCodeAt(l) < 91
                    ? (o += e.codes[s.charCodeAt(l) - 65])
                    : 96 < s.charCodeAt(l) && s.charCodeAt(l) < 123
                    ? (o += e.codes[s.charCodeAt(l) - 71])
                    : (o += s.charAt(l));
                "mi" == n[0].nodeName
                  ? (n[0] = x("mo").appendChild(I.createTextNode(o)))
                  : n[0].replaceChild(
                      x("mo").appendChild(I.createTextNode(o)),
                      n[0].childNodes[a]
                    );
              }
          return (
            (i = x(e.tag, n[0])).setAttribute(e.atname, e.atval), [i, n[1]]
          );
        case D:
          if (null == (n = h((t = T(t, e.input.length))))[0])
            return [x("mo", I.createTextNode(e.input)), t];
          b(n[0]);
          var u = h(n[1]);
          return null == u[0]
            ? [x("mo", I.createTextNode(e.input)), t]
            : (b(u[0]),
              "color" == e.input
                ? ("{" == t.charAt(0)
                    ? (a = t.indexOf("}"))
                    : "(" == t.charAt(0)
                    ? (a = t.indexOf(")"))
                    : "[" == t.charAt(0) && (a = t.indexOf("]")),
                  (s = t.slice(1, a)),
                  (i = x(e.tag, u[0])).setAttribute("mathcolor", s),
                  [i, u[1]])
                : (("root" != e.input && "stackrel" != e.output) ||
                    r.appendChild(u[0]),
                  r.appendChild(n[0]),
                  "frac" == e.input && r.appendChild(u[0]),
                  [x(e.tag, r), u[1]]));
        case P:
          return (
            (t = T(t, e.input.length)), [x("mo", I.createTextNode(e.output)), t]
          );
        case w:
          return (
            (t = T(t, e.input.length)),
            (i = x("mspace")).setAttribute("width", "1ex"),
            r.appendChild(i),
            r.appendChild(x(e.tag, I.createTextNode(e.output))),
            (i = x("mspace")).setAttribute("width", "1ex"),
            r.appendChild(i),
            [x("mrow", r), t]
          );
        case X:
          return (
            G++,
            (n = p((t = T(t, e.input.length)), !1)),
            G--,
            (s = ""),
            null != n[0].lastChild && (s = n[0].lastChild.firstChild.nodeValue),
            "|" == s
              ? ((i = x(
                  "mrow",
                  (i = x("mo", I.createTextNode(e.output)))
                )).appendChild(n[0]),
                [i, n[1]])
              : [(i = x("mrow", (i = x("mo", I.createTextNode("\u2223"))))), t]
          );
        default:
          return (
            (t = T(t, e.input.length)),
            [x(e.tag, I.createTextNode(e.output)), t]
          );
      }
    }
    function S(t) {
      var e, i, n, a, s, r;
      if (
        ((i = C((t = T(t, 0)))),
        (a = (s = h(t))[0]),
        (e = C((t = s[1]))).ttype == P && "/" != e.input)
      ) {
        if (
          (null == (s = h((t = T(t, e.input.length))))[0]
            ? (s[0] = x("mo", I.createTextNode("\u25a1")))
            : b(s[0]),
          (t = s[1]),
          (r = i.ttype == _ || i.ttype == U),
          "_" == e.input)
        )
          if ("^" == (n = C(t)).input) {
            var o = h((t = T(t, n.input.length)));
            b(o[0]),
              (t = o[1]),
              (a = x(r ? "munderover" : "msubsup", a)).appendChild(s[0]),
              a.appendChild(o[0]),
              (a = x("mrow", a));
          } else (a = x(r ? "munder" : "msub", a)).appendChild(s[0]);
        else
          "^" == e.input && r
            ? (a = x("mover", a)).appendChild(s[0])
            : (a = x(e.tag, a)).appendChild(s[0]);
        void 0 !== i.func &&
          i.func &&
          (n = C(t)).ttype != P &&
          n.ttype != H &&
          ((s = S(t)), (a = x("mrow", a)).appendChild(s[0]), (t = s[1]));
      }
      return [a, t];
    }
    function p(t, e) {
      for (
        var i, n, a, s, r = I.createDocumentFragment();
        (n = (a = S((t = T(t, 0))))[0]),
          (i = C((t = a[1]))).ttype == P && "/" == i.input
            ? (null == (a = S((t = T(t, i.input.length))))[0]
                ? (a[0] = x("mo", I.createTextNode("\u25a1")))
                : b(a[0]),
              (t = a[1]),
              b(n),
              (n = x(i.tag, n)).appendChild(a[0]),
              r.appendChild(n),
              (i = C(t)))
            : null != n && r.appendChild(n),
          ((i.ttype != H && (i.ttype != X || e)) || 0 == G) &&
            null != i &&
            "" != i.output;

      );
      if (i.ttype == H || i.ttype == X) {
        var o = r.childNodes.length;
        if (
          0 < o &&
          "mrow" == r.childNodes[o - 1].nodeName &&
          r.childNodes[o - 1].lastChild &&
          r.childNodes[o - 1].lastChild.firstChild
        ) {
          var l = r.childNodes[o - 1].lastChild.firstChild.nodeValue;
          if (")" == l || "]" == l) {
            var u = r.childNodes[o - 1].firstChild.firstChild.nodeValue;
            if (
              ("(" == u && ")" == l && "}" != i.output) ||
              ("[" == u && "]" == l)
            ) {
              var h = [],
                p = !0,
                c = r.childNodes.length;
              for (s = 0; p && s < c; s += 2) {
                if (
                  ((h[s] = []),
                  (n = r.childNodes[s]),
                  (p =
                    p &&
                    "mrow" == n.nodeName &&
                    (s == c - 1 ||
                      ("mo" == n.nextSibling.nodeName &&
                        "," == n.nextSibling.firstChild.nodeValue)) &&
                    n.firstChild.firstChild.nodeValue == u &&
                    n.lastChild.firstChild.nodeValue == l))
                )
                  for (var d = 0; d < n.childNodes.length; d++)
                    "," == n.childNodes[d].firstChild.nodeValue &&
                      (h[s][h[s].length] = d);
                p && 1 < s && (p = h[s].length == h[s - 2].length);
              }
              if ((p = p && (1 < h.length || 0 < h[0].length))) {
                var m,
                  f,
                  g,
                  E,
                  y = I.createDocumentFragment();
                for (s = 0; s < c; s += 2) {
                  for (
                    m = I.createDocumentFragment(),
                      f = I.createDocumentFragment(),
                      g = (n = r.firstChild).childNodes.length,
                      E = 0,
                      n.removeChild(n.firstChild),
                      d = 1;
                    d < g - 1;
                    d++
                  )
                    void 0 !== h[s][E] && d == h[s][E]
                      ? (n.removeChild(n.firstChild),
                        m.appendChild(x("mtd", f)),
                        E++)
                      : f.appendChild(n.firstChild);
                  m.appendChild(x("mtd", f)),
                    2 < r.childNodes.length &&
                      (r.removeChild(r.firstChild),
                      r.removeChild(r.firstChild)),
                    y.appendChild(x("mtr", m));
                }
                (n = x("mtable", y)),
                  "boolean" == typeof i.invisible &&
                    i.invisible &&
                    n.setAttribute("columnalign", "left"),
                  r.replaceChild(n, r.firstChild);
              }
            }
          }
        }
        (t = T(t, i.input.length)),
          ("boolean" == typeof i.invisible && i.invisible) ||
            ((n = x("mo", I.createTextNode(i.output))), r.appendChild(n));
      }
      return [r, t];
    }
    function o(t, e) {
      var i;
      return (
        (G = 0),
        (i = x(
          "mstyle",
          p(
            (t = (t = (t = (t = t.replace(/&nbsp;/g, "")).replace(
              /&gt;/g,
              ">"
            )).replace(/&lt;/g, "<")).replace(
              /(Sin|Cos|Tan|Arcsin|Arccos|Arctan|Sinh|Cosh|Tanh|Cot|Sec|Csc|Log|Ln|Abs)/g,
              function (t) {
                return t.toLowerCase();
              }
            )).replace(/^\s+/g, ""),
            !1
          )[0]
        )),
        "" != m && i.setAttribute("mathcolor", m),
        "" != f && i.setAttribute("fontfamily", f),
        g && i.setAttribute("displaystyle", "true"),
        (i = x("math", i)),
        E && i.setAttribute("title", t.replace(/\s+/g, " ")),
        i
      );
    }
    var l,
      c,
      d,
      I,
      m,
      f,
      g,
      E,
      y,
      N,
      A,
      v,
      R,
      O,
      L,
      M,
      D,
      P,
      k,
      H,
      w,
      _,
      J,
      X,
      j,
      U,
      F,
      B,
      G,
      V,
      W,
      K,
      z,
      q;
    (l = MathJax.InputJax.AsciiMath),
      (d = MathJax.Object.Subclass({
        firstChild: null,
        lastChild: null,
        Init: function () {
          this.childNodes = [];
        },
        appendChild: function (t) {
          return (
            t.parent && t.parent.removeChild(t),
            this.lastChild && (this.lastChild.nextSibling = t),
            this.firstChild || (this.firstChild = t),
            this.childNodes.push(t),
            ((t.parent = this).lastChild = t)
          );
        },
        removeChild: function (t) {
          for (
            var e = 0, i = this.childNodes.length;
            e < i && this.childNodes[e] !== t;
            e++
          );
          if (e !== i)
            return (
              this.childNodes.splice(e, 1),
              t === this.firstChild && (this.firstChild = t.nextSibling),
              t === this.lastChild &&
                (this.childNodes.length
                  ? (this.lastChild =
                      this.childNodes[this.childNodes.length - 1])
                  : (this.lastChild = null)),
              e && (this.childNodes[e - 1].nextSibling = t.nextSibling),
              (t.nextSibling = t.parent = null),
              t
            );
        },
        replaceChild: function (t, e) {
          for (
            var i = 0, n = this.childNodes.length;
            i < n && this.childNodes[i] !== e;
            i++
          );
          return (
            i
              ? (this.childNodes[i - 1].nextSibling = t)
              : (this.firstChild = t),
            n - 1 <= i && (this.lastChild = t),
            ((this.childNodes[i] = t).nextSibling = e.nextSibling),
            (e.nextSibling = e.parent = null),
            e
          );
        },
        hasChildNodes: function (t) {
          return 0 < this.childNodes.length;
        },
        toString: function () {
          return "{" + this.childNodes.join("") + "}";
        },
      })),
      (I = {
        getElementById: !0,
        createElementNS: function (t, e) {
          var i = c[e]();
          return (
            "mo" === e && l.config.useMathMLspacing && (i.useMMLspacing = 128),
            i
          );
        },
        createTextNode: function (t) {
          return c.chars(t).With({ nodeValue: t });
        },
        createDocumentFragment: function () {
          return d();
        },
      }),
      (m = "blue"),
      (f = "serif"),
      (E = g = !0),
      (y = "."),
      (N = "Microsoft" == { appName: "MathJax" }.appName.slice(0, 9)),
      (A = "http://www.w3.org/1998/Math/MathML"),
      (B = [
        {
          input: "alpha",
          tag: "mi",
          output: "\u03b1",
          tex: null,
          ttype: (L = 0),
        },
        { input: "beta", tag: "mi", output: "\u03b2", tex: null, ttype: L },
        { input: "chi", tag: "mi", output: "\u03c7", tex: null, ttype: L },
        { input: "delta", tag: "mi", output: "\u03b4", tex: null, ttype: L },
        { input: "Delta", tag: "mo", output: "\u0394", tex: null, ttype: L },
        {
          input: "epsi",
          tag: "mi",
          output: "\u03b5",
          tex: "epsilon",
          ttype: L,
        },
        {
          input: "varepsilon",
          tag: "mi",
          output: "\u025b",
          tex: null,
          ttype: L,
        },
        { input: "eta", tag: "mi", output: "\u03b7", tex: null, ttype: L },
        { input: "gamma", tag: "mi", output: "\u03b3", tex: null, ttype: L },
        { input: "Gamma", tag: "mo", output: "\u0393", tex: null, ttype: L },
        { input: "iota", tag: "mi", output: "\u03b9", tex: null, ttype: L },
        { input: "kappa", tag: "mi", output: "\u03ba", tex: null, ttype: L },
        { input: "lambda", tag: "mi", output: "\u03bb", tex: null, ttype: L },
        { input: "Lambda", tag: "mo", output: "\u039b", tex: null, ttype: L },
        { input: "lamda", tag: "mi", output: "\u03bb", tex: null, ttype: L },
        { input: "Lamda", tag: "mo", output: "\u039b", tex: null, ttype: L },
        { input: "mu", tag: "mi", output: "\u03bc", tex: null, ttype: L },
        { input: "nu", tag: "mi", output: "\u03bd", tex: null, ttype: L },
        { input: "omega", tag: "mi", output: "\u03c9", tex: null, ttype: L },
        { input: "Omega", tag: "mo", output: "\u03a9", tex: null, ttype: L },
        { input: "phi", tag: "mi", output: "\u03d5", tex: null, ttype: L },
        { input: "varphi", tag: "mi", output: "\u03c6", tex: null, ttype: L },
        { input: "Phi", tag: "mo", output: "\u03a6", tex: null, ttype: L },
        { input: "pi", tag: "mi", output: "\u03c0", tex: null, ttype: L },
        { input: "Pi", tag: "mo", output: "\u03a0", tex: null, ttype: L },
        { input: "psi", tag: "mi", output: "\u03c8", tex: null, ttype: L },
        { input: "Psi", tag: "mi", output: "\u03a8", tex: null, ttype: L },
        { input: "rho", tag: "mi", output: "\u03c1", tex: null, ttype: L },
        { input: "sigma", tag: "mi", output: "\u03c3", tex: null, ttype: L },
        { input: "Sigma", tag: "mo", output: "\u03a3", tex: null, ttype: L },
        { input: "tau", tag: "mi", output: "\u03c4", tex: null, ttype: L },
        { input: "theta", tag: "mi", output: "\u03b8", tex: null, ttype: L },
        { input: "vartheta", tag: "mi", output: "\u03d1", tex: null, ttype: L },
        { input: "Theta", tag: "mo", output: "\u0398", tex: null, ttype: L },
        { input: "upsilon", tag: "mi", output: "\u03c5", tex: null, ttype: L },
        { input: "xi", tag: "mi", output: "\u03be", tex: null, ttype: L },
        { input: "Xi", tag: "mo", output: "\u039e", tex: null, ttype: L },
        { input: "zeta", tag: "mi", output: "\u03b6", tex: null, ttype: L },
        { input: "*", tag: "mo", output: "\u22c5", tex: "cdot", ttype: L },
        { input: "**", tag: "mo", output: "\u2217", tex: "ast", ttype: L },
        { input: "***", tag: "mo", output: "\u22c6", tex: "star", ttype: L },
        { input: "//", tag: "mo", output: "/", tex: null, ttype: L },
        { input: "\\\\", tag: "mo", output: "\\", tex: "backslash", ttype: L },
        { input: "setminus", tag: "mo", output: "\\", tex: null, ttype: L },
        { input: "xx", tag: "mo", output: "\xd7", tex: "times", ttype: L },
        { input: "|><", tag: "mo", output: "\u22c9", tex: "ltimes", ttype: L },
        { input: "><|", tag: "mo", output: "\u22ca", tex: "rtimes", ttype: L },
        { input: "|><|", tag: "mo", output: "\u22c8", tex: "bowtie", ttype: L },
        { input: "-:", tag: "mo", output: "\xf7", tex: "div", ttype: L },
        { input: "divide", tag: "mo", output: "-:", tex: null, ttype: (J = 8) },
        { input: "@", tag: "mo", output: "\u2218", tex: "circ", ttype: L },
        { input: "o+", tag: "mo", output: "\u2295", tex: "oplus", ttype: L },
        { input: "ox", tag: "mo", output: "\u2297", tex: "otimes", ttype: L },
        { input: "o.", tag: "mo", output: "\u2299", tex: "odot", ttype: L },
        {
          input: "sum",
          tag: "mo",
          output: "\u2211",
          tex: null,
          ttype: (_ = 7),
        },
        { input: "prod", tag: "mo", output: "\u220f", tex: null, ttype: _ },
        { input: "^^", tag: "mo", output: "\u2227", tex: "wedge", ttype: L },
        {
          input: "^^^",
          tag: "mo",
          output: "\u22c0",
          tex: "bigwedge",
          ttype: _,
        },
        { input: "vv", tag: "mo", output: "\u2228", tex: "vee", ttype: L },
        { input: "vvv", tag: "mo", output: "\u22c1", tex: "bigvee", ttype: _ },
        { input: "nn", tag: "mo", output: "\u2229", tex: "cap", ttype: L },
        { input: "nnn", tag: "mo", output: "\u22c2", tex: "bigcap", ttype: _ },
        { input: "uu", tag: "mo", output: "\u222a", tex: "cup", ttype: L },
        { input: "uuu", tag: "mo", output: "\u22c3", tex: "bigcup", ttype: _ },
        { input: "!=", tag: "mo", output: "\u2260", tex: "ne", ttype: L },
        { input: ":=", tag: "mo", output: ":=", tex: null, ttype: L },
        { input: "lt", tag: "mo", output: "<", tex: null, ttype: L },
        { input: "<=", tag: "mo", output: "\u2264", tex: "le", ttype: L },
        { input: "lt=", tag: "mo", output: "\u2264", tex: "leq", ttype: L },
        { input: "gt", tag: "mo", output: ">", tex: null, ttype: L },
        { input: ">=", tag: "mo", output: "\u2265", tex: "ge", ttype: L },
        { input: "gt=", tag: "mo", output: "\u2265", tex: "geq", ttype: L },
        { input: "-<", tag: "mo", output: "\u227a", tex: "prec", ttype: L },
        { input: "-lt", tag: "mo", output: "\u227a", tex: null, ttype: L },
        { input: ">-", tag: "mo", output: "\u227b", tex: "succ", ttype: L },
        { input: "-<=", tag: "mo", output: "\u2aaf", tex: "preceq", ttype: L },
        { input: ">-=", tag: "mo", output: "\u2ab0", tex: "succeq", ttype: L },
        { input: "in", tag: "mo", output: "\u2208", tex: null, ttype: L },
        { input: "!in", tag: "mo", output: "\u2209", tex: "notin", ttype: L },
        { input: "sub", tag: "mo", output: "\u2282", tex: "subset", ttype: L },
        { input: "sup", tag: "mo", output: "\u2283", tex: "supset", ttype: L },
        {
          input: "sube",
          tag: "mo",
          output: "\u2286",
          tex: "subseteq",
          ttype: L,
        },
        {
          input: "supe",
          tag: "mo",
          output: "\u2287",
          tex: "supseteq",
          ttype: L,
        },
        { input: "-=", tag: "mo", output: "\u2261", tex: "equiv", ttype: L },
        { input: "~=", tag: "mo", output: "\u2245", tex: "cong", ttype: L },
        { input: "~~", tag: "mo", output: "\u2248", tex: "approx", ttype: L },
        { input: "prop", tag: "mo", output: "\u221d", tex: "propto", ttype: L },
        {
          input: "and",
          tag: "mtext",
          output: "and",
          tex: null,
          ttype: (w = 6),
        },
        { input: "or", tag: "mtext", output: "or", tex: null, ttype: w },
        { input: "not", tag: "mo", output: "\xac", tex: "neg", ttype: L },
        { input: "=>", tag: "mo", output: "\u21d2", tex: "implies", ttype: L },
        { input: "if", tag: "mo", output: "if", tex: null, ttype: w },
        { input: "<=>", tag: "mo", output: "\u21d4", tex: "iff", ttype: L },
        { input: "AA", tag: "mo", output: "\u2200", tex: "forall", ttype: L },
        { input: "EE", tag: "mo", output: "\u2203", tex: "exists", ttype: L },
        { input: "_|_", tag: "mo", output: "\u22a5", tex: "bot", ttype: L },
        { input: "TT", tag: "mo", output: "\u22a4", tex: "top", ttype: L },
        { input: "|--", tag: "mo", output: "\u22a2", tex: "vdash", ttype: L },
        { input: "|==", tag: "mo", output: "\u22a8", tex: "models", ttype: L },
        { input: "(", tag: "mo", output: "(", tex: null, ttype: (k = 4) },
        { input: ")", tag: "mo", output: ")", tex: null, ttype: (H = 5) },
        { input: "[", tag: "mo", output: "[", tex: null, ttype: k },
        { input: "]", tag: "mo", output: "]", tex: null, ttype: H },
        { input: "{", tag: "mo", output: "{", tex: null, ttype: k },
        { input: "}", tag: "mo", output: "}", tex: null, ttype: H },
        { input: "|", tag: "mo", output: "|", tex: null, ttype: (X = 9) },
        { input: "(:", tag: "mo", output: "\u2329", tex: "langle", ttype: k },
        { input: ":)", tag: "mo", output: "\u232a", tex: "rangle", ttype: H },
        { input: "<<", tag: "mo", output: "\u2329", tex: null, ttype: k },
        { input: ">>", tag: "mo", output: "\u232a", tex: null, ttype: H },
        {
          input: "{:",
          tag: "mo",
          output: "{:",
          tex: null,
          ttype: k,
          invisible: !0,
        },
        {
          input: ":}",
          tag: "mo",
          output: ":}",
          tex: null,
          ttype: H,
          invisible: !0,
        },
        { input: "int", tag: "mo", output: "\u222b", tex: null, ttype: L },
        { input: "dx", tag: "mi", output: "{:d x:}", tex: null, ttype: J },
        { input: "dy", tag: "mi", output: "{:d y:}", tex: null, ttype: J },
        { input: "dz", tag: "mi", output: "{:d z:}", tex: null, ttype: J },
        { input: "dt", tag: "mi", output: "{:d t:}", tex: null, ttype: J },
        { input: "oint", tag: "mo", output: "\u222e", tex: null, ttype: L },
        { input: "del", tag: "mo", output: "\u2202", tex: "partial", ttype: L },
        { input: "grad", tag: "mo", output: "\u2207", tex: "nabla", ttype: L },
        { input: "+-", tag: "mo", output: "\xb1", tex: "pm", ttype: L },
        { input: "O/", tag: "mo", output: "\u2205", tex: "emptyset", ttype: L },
        { input: "oo", tag: "mo", output: "\u221e", tex: "infty", ttype: L },
        { input: "aleph", tag: "mo", output: "\u2135", tex: null, ttype: L },
        { input: "...", tag: "mo", output: "...", tex: "ldots", ttype: L },
        {
          input: ":.",
          tag: "mo",
          output: "\u2234",
          tex: "therefore",
          ttype: L,
        },
        { input: ":'", tag: "mo", output: "\u2235", tex: "because", ttype: L },
        { input: "/_", tag: "mo", output: "\u2220", tex: "angle", ttype: L },
        {
          input: "/_\\",
          tag: "mo",
          output: "\u25b3",
          tex: "triangle",
          ttype: L,
        },
        { input: "'", tag: "mo", output: "\u2032", tex: "prime", ttype: L },
        {
          input: "tilde",
          tag: "mover",
          output: "~",
          tex: null,
          ttype: (M = 1),
          acc: !0,
        },
        { input: "\\ ", tag: "mo", output: "\xa0", tex: null, ttype: L },
        { input: "frown", tag: "mo", output: "\u2322", tex: null, ttype: L },
        { input: "quad", tag: "mo", output: "\xa0\xa0", tex: null, ttype: L },
        {
          input: "qquad",
          tag: "mo",
          output: "\xa0\xa0\xa0\xa0",
          tex: null,
          ttype: L,
        },
        { input: "cdots", tag: "mo", output: "\u22ef", tex: null, ttype: L },
        { input: "vdots", tag: "mo", output: "\u22ee", tex: null, ttype: L },
        { input: "ddots", tag: "mo", output: "\u22f1", tex: null, ttype: L },
        { input: "diamond", tag: "mo", output: "\u22c4", tex: null, ttype: L },
        { input: "square", tag: "mo", output: "\u25a1", tex: null, ttype: L },
        { input: "|__", tag: "mo", output: "\u230a", tex: "lfloor", ttype: L },
        { input: "__|", tag: "mo", output: "\u230b", tex: "rfloor", ttype: L },
        { input: "|~", tag: "mo", output: "\u2308", tex: "lceiling", ttype: L },
        { input: "~|", tag: "mo", output: "\u2309", tex: "rceiling", ttype: L },
        { input: "CC", tag: "mo", output: "\u2102", tex: null, ttype: L },
        { input: "NN", tag: "mo", output: "\u2115", tex: null, ttype: L },
        { input: "QQ", tag: "mo", output: "\u211a", tex: null, ttype: L },
        { input: "RR", tag: "mo", output: "\u211d", tex: null, ttype: L },
        { input: "ZZ", tag: "mo", output: "\u2124", tex: null, ttype: L },
        { input: "f", tag: "mi", output: "f", tex: null, ttype: M, func: !0 },
        { input: "g", tag: "mi", output: "g", tex: null, ttype: M, func: !0 },
        { input: "lim", tag: "mo", output: "lim", tex: null, ttype: _ },
        { input: "Lim", tag: "mo", output: "Lim", tex: null, ttype: _ },
        {
          input: "sin",
          tag: "mo",
          output: "sin",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "cos",
          tag: "mo",
          output: "cos",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "tan",
          tag: "mo",
          output: "tan",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "sinh",
          tag: "mo",
          output: "sinh",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "cosh",
          tag: "mo",
          output: "cosh",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "tanh",
          tag: "mo",
          output: "tanh",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "cot",
          tag: "mo",
          output: "cot",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "sec",
          tag: "mo",
          output: "sec",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "csc",
          tag: "mo",
          output: "csc",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "arcsin",
          tag: "mo",
          output: "arcsin",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "arccos",
          tag: "mo",
          output: "arccos",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "arctan",
          tag: "mo",
          output: "arctan",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "coth",
          tag: "mo",
          output: "coth",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "sech",
          tag: "mo",
          output: "sech",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "csch",
          tag: "mo",
          output: "csch",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "exp",
          tag: "mo",
          output: "exp",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "abs",
          tag: "mo",
          output: "abs",
          tex: null,
          ttype: M,
          rewriteleftright: ["|", "|"],
        },
        {
          input: "norm",
          tag: "mo",
          output: "norm",
          tex: null,
          ttype: M,
          rewriteleftright: ["\u2225", "\u2225"],
        },
        {
          input: "floor",
          tag: "mo",
          output: "floor",
          tex: null,
          ttype: M,
          rewriteleftright: ["\u230a", "\u230b"],
        },
        {
          input: "ceil",
          tag: "mo",
          output: "ceil",
          tex: null,
          ttype: M,
          rewriteleftright: ["\u2308", "\u2309"],
        },
        {
          input: "log",
          tag: "mo",
          output: "log",
          tex: null,
          ttype: M,
          func: !0,
        },
        { input: "ln", tag: "mo", output: "ln", tex: null, ttype: M, func: !0 },
        {
          input: "det",
          tag: "mo",
          output: "det",
          tex: null,
          ttype: M,
          func: !0,
        },
        { input: "dim", tag: "mo", output: "dim", tex: null, ttype: L },
        { input: "mod", tag: "mo", output: "mod", tex: null, ttype: L },
        {
          input: "gcd",
          tag: "mo",
          output: "gcd",
          tex: null,
          ttype: M,
          func: !0,
        },
        {
          input: "lcm",
          tag: "mo",
          output: "lcm",
          tex: null,
          ttype: M,
          func: !0,
        },
        { input: "lub", tag: "mo", output: "lub", tex: null, ttype: L },
        { input: "glb", tag: "mo", output: "glb", tex: null, ttype: L },
        { input: "min", tag: "mo", output: "min", tex: null, ttype: _ },
        { input: "max", tag: "mo", output: "max", tex: null, ttype: _ },
        {
          input: "uarr",
          tag: "mo",
          output: "\u2191",
          tex: "uparrow",
          ttype: L,
        },
        {
          input: "darr",
          tag: "mo",
          output: "\u2193",
          tex: "downarrow",
          ttype: L,
        },
        {
          input: "rarr",
          tag: "mo",
          output: "\u2192",
          tex: "rightarrow",
          ttype: L,
        },
        { input: "->", tag: "mo", output: "\u2192", tex: "to", ttype: L },
        {
          input: ">->",
          tag: "mo",
          output: "\u21a3",
          tex: "rightarrowtail",
          ttype: L,
        },
        {
          input: "->>",
          tag: "mo",
          output: "\u21a0",
          tex: "twoheadrightarrow",
          ttype: L,
        },
        {
          input: ">->>",
          tag: "mo",
          output: "\u2916",
          tex: "twoheadrightarrowtail",
          ttype: L,
        },
        { input: "|->", tag: "mo", output: "\u21a6", tex: "mapsto", ttype: L },
        {
          input: "larr",
          tag: "mo",
          output: "\u2190",
          tex: "leftarrow",
          ttype: L,
        },
        {
          input: "harr",
          tag: "mo",
          output: "\u2194",
          tex: "leftrightarrow",
          ttype: L,
        },
        {
          input: "rArr",
          tag: "mo",
          output: "\u21d2",
          tex: "Rightarrow",
          ttype: L,
        },
        {
          input: "lArr",
          tag: "mo",
          output: "\u21d0",
          tex: "Leftarrow",
          ttype: L,
        },
        {
          input: "hArr",
          tag: "mo",
          output: "\u21d4",
          tex: "Leftrightarrow",
          ttype: L,
        },
        { input: "sqrt", tag: "msqrt", output: "sqrt", tex: null, ttype: M },
        {
          input: "root",
          tag: "mroot",
          output: "root",
          tex: null,
          ttype: (D = 2),
        },
        { input: "frac", tag: "mfrac", output: "/", tex: null, ttype: D },
        { input: "/", tag: "mfrac", output: "/", tex: null, ttype: (P = 3) },
        {
          input: "stackrel",
          tag: "mover",
          output: "stackrel",
          tex: null,
          ttype: D,
        },
        {
          input: "overset",
          tag: "mover",
          output: "stackrel",
          tex: null,
          ttype: D,
        },
        {
          input: "underset",
          tag: "munder",
          output: "stackrel",
          tex: null,
          ttype: D,
        },
        { input: "_", tag: "msub", output: "_", tex: null, ttype: P },
        { input: "^", tag: "msup", output: "^", tex: null, ttype: P },
        {
          input: "hat",
          tag: "mover",
          output: "^",
          tex: null,
          ttype: M,
          acc: !0,
        },
        {
          input: "bar",
          tag: "mover",
          output: "\xaf",
          tex: "overline",
          ttype: M,
          acc: !0,
        },
        {
          input: "vec",
          tag: "mover",
          output: "\u2192",
          tex: null,
          ttype: M,
          acc: !0,
        },
        {
          input: "dot",
          tag: "mover",
          output: ".",
          tex: null,
          ttype: M,
          acc: !0,
        },
        {
          input: "ddot",
          tag: "mover",
          output: "..",
          tex: null,
          ttype: M,
          acc: !0,
        },
        {
          input: "ul",
          tag: "munder",
          output: "\u0332",
          tex: "underline",
          ttype: M,
          acc: !0,
        },
        {
          input: "ubrace",
          tag: "munder",
          output: "\u23df",
          tex: "underbrace",
          ttype: (U = 15),
          acc: !0,
        },
        {
          input: "obrace",
          tag: "mover",
          output: "\u23de",
          tex: "overbrace",
          ttype: U,
          acc: !0,
        },
        {
          input: "text",
          tag: "mtext",
          output: "text",
          tex: null,
          ttype: (j = 10),
        },
        { input: "mbox", tag: "mtext", output: "mbox", tex: null, ttype: j },
        { input: "color", tag: "mstyle", ttype: D },
        {
          input: "cancel",
          tag: "menclose",
          output: "cancel",
          tex: null,
          ttype: M,
        },
        (F = { input: '"', tag: "mtext", output: "mbox", tex: null, ttype: j }),
        {
          input: "bb",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "bold",
          output: "bb",
          tex: null,
          ttype: M,
        },
        {
          input: "mathbf",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "bold",
          output: "mathbf",
          tex: null,
          ttype: M,
        },
        {
          input: "sf",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "sans-serif",
          output: "sf",
          tex: null,
          ttype: M,
        },
        {
          input: "mathsf",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "sans-serif",
          output: "mathsf",
          tex: null,
          ttype: M,
        },
        {
          input: "bbb",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "double-struck",
          output: "bbb",
          tex: null,
          ttype: M,
          codes: (O = [
            "\ud835\udd38",
            "\ud835\udd39",
            "\u2102",
            "\ud835\udd3b",
            "\ud835\udd3c",
            "\ud835\udd3d",
            "\ud835\udd3e",
            "\u210d",
            "\ud835\udd40",
            "\ud835\udd41",
            "\ud835\udd42",
            "\ud835\udd43",
            "\ud835\udd44",
            "\u2115",
            "\ud835\udd46",
            "\u2119",
            "\u211a",
            "\u211d",
            "\ud835\udd4a",
            "\ud835\udd4b",
            "\ud835\udd4c",
            "\ud835\udd4d",
            "\ud835\udd4e",
            "\ud835\udd4f",
            "\ud835\udd50",
            "\u2124",
            "\ud835\udd52",
            "\ud835\udd53",
            "\ud835\udd54",
            "\ud835\udd55",
            "\ud835\udd56",
            "\ud835\udd57",
            "\ud835\udd58",
            "\ud835\udd59",
            "\ud835\udd5a",
            "\ud835\udd5b",
            "\ud835\udd5c",
            "\ud835\udd5d",
            "\ud835\udd5e",
            "\ud835\udd5f",
            "\ud835\udd60",
            "\ud835\udd61",
            "\ud835\udd62",
            "\ud835\udd63",
            "\ud835\udd64",
            "\ud835\udd65",
            "\ud835\udd66",
            "\ud835\udd67",
            "\ud835\udd68",
            "\ud835\udd69",
            "\ud835\udd6a",
            "\ud835\udd6b",
          ]),
        },
        {
          input: "mathbb",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "double-struck",
          output: "mathbb",
          tex: null,
          ttype: M,
          codes: O,
        },
        {
          input: "cc",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "script",
          output: "cc",
          tex: null,
          ttype: M,
          codes: (v = [
            "\ud835\udc9c",
            "\u212c",
            "\ud835\udc9e",
            "\ud835\udc9f",
            "\u2130",
            "\u2131",
            "\ud835\udca2",
            "\u210b",
            "\u2110",
            "\ud835\udca5",
            "\ud835\udca6",
            "\u2112",
            "\u2133",
            "\ud835\udca9",
            "\ud835\udcaa",
            "\ud835\udcab",
            "\ud835\udcac",
            "\u211b",
            "\ud835\udcae",
            "\ud835\udcaf",
            "\ud835\udcb0",
            "\ud835\udcb1",
            "\ud835\udcb2",
            "\ud835\udcb3",
            "\ud835\udcb4",
            "\ud835\udcb5",
            "\ud835\udcb6",
            "\ud835\udcb7",
            "\ud835\udcb8",
            "\ud835\udcb9",
            "\u212f",
            "\ud835\udcbb",
            "\u210a",
            "\ud835\udcbd",
            "\ud835\udcbe",
            "\ud835\udcbf",
            "\ud835\udcc0",
            "\ud835\udcc1",
            "\ud835\udcc2",
            "\ud835\udcc3",
            "\u2134",
            "\ud835\udcc5",
            "\ud835\udcc6",
            "\ud835\udcc7",
            "\ud835\udcc8",
            "\ud835\udcc9",
            "\ud835\udcca",
            "\ud835\udccb",
            "\ud835\udccc",
            "\ud835\udccd",
            "\ud835\udcce",
            "\ud835\udccf",
          ]),
        },
        {
          input: "mathcal",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "script",
          output: "mathcal",
          tex: null,
          ttype: M,
          codes: v,
        },
        {
          input: "tt",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "monospace",
          output: "tt",
          tex: null,
          ttype: M,
        },
        {
          input: "mathtt",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "monospace",
          output: "mathtt",
          tex: null,
          ttype: M,
        },
        {
          input: "fr",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "fraktur",
          output: "fr",
          tex: null,
          ttype: M,
          codes: (R = [
            "\ud835\udd04",
            "\ud835\udd05",
            "\u212d",
            "\ud835\udd07",
            "\ud835\udd08",
            "\ud835\udd09",
            "\ud835\udd0a",
            "\u210c",
            "\u2111",
            "\ud835\udd0d",
            "\ud835\udd0e",
            "\ud835\udd0f",
            "\ud835\udd10",
            "\ud835\udd11",
            "\ud835\udd12",
            "\ud835\udd13",
            "\ud835\udd14",
            "\u211c",
            "\ud835\udd16",
            "\ud835\udd17",
            "\ud835\udd18",
            "\ud835\udd19",
            "\ud835\udd1a",
            "\ud835\udd1b",
            "\ud835\udd1c",
            "\u2128",
            "\ud835\udd1e",
            "\ud835\udd1f",
            "\ud835\udd20",
            "\ud835\udd21",
            "\ud835\udd22",
            "\ud835\udd23",
            "\ud835\udd24",
            "\ud835\udd25",
            "\ud835\udd26",
            "\ud835\udd27",
            "\ud835\udd28",
            "\ud835\udd29",
            "\ud835\udd2a",
            "\ud835\udd2b",
            "\ud835\udd2c",
            "\ud835\udd2d",
            "\ud835\udd2e",
            "\ud835\udd2f",
            "\ud835\udd30",
            "\ud835\udd31",
            "\ud835\udd32",
            "\ud835\udd33",
            "\ud835\udd34",
            "\ud835\udd35",
            "\ud835\udd36",
            "\ud835\udd37",
          ]),
        },
        {
          input: "mathfrak",
          tag: "mstyle",
          atname: "mathvariant",
          atval: "fraktur",
          output: "mathfrak",
          tex: null,
          ttype: M,
          codes: R,
        },
      ]),
      (E = !(K = [])),
      (m = f = ""),
      (function () {
        for (var t = 0, e = B.length; t < e; t++)
          B[t].codes && delete B[t].codes, B[t].func && (B[t].tag = "mi");
      })(),
      l.Augment({
        AM: {
          Init: function () {
            if (
              ((g = l.config.displaystyle),
              (y = l.config.decimal || l.config.decimalsign),
              !l.config.fixphi)
            )
              for (var t = 0, e = B.length; t < e; t++)
                "phi" === B[t].input && (B[t].output = "\u03c6"),
                  "varphi" === B[t].input &&
                    ((B[t].output = "\u03d5"), (t = e));
            !(function () {
              var e = (c = MathJax.ElementJax.mml).mbase.prototype.Init;
              c.mbase.Augment({
                firstChild: null,
                lastChild: null,
                nodeValue: null,
                nextSibling: null,
                Init: function () {
                  var t = e.apply(this, arguments) || this;
                  return (t.childNodes = t.data), (t.nodeName = t.type), t;
                },
                appendChild: function (t) {
                  t.parent && t.parent.removeChild(t);
                  var e = arguments;
                  t.isa(d) &&
                    ((e = t.childNodes),
                    (t.data = t.childNodes = []),
                    (t.firstChild = t.lastChild = null));
                  for (var i = 0, n = e.length; i < n; i++)
                    (t = e[i]),
                      this.lastChild && (this.lastChild.nextSibling = t),
                      this.firstChild || (this.firstChild = t),
                      this.Append(t),
                      (this.lastChild = t);
                  return t;
                },
                removeChild: function (t) {
                  for (
                    var e = 0, i = this.childNodes.length;
                    e < i && this.childNodes[e] !== t;
                    e++
                  );
                  if (e !== i)
                    return (
                      this.childNodes.splice(e, 1),
                      t === this.firstChild &&
                        (this.firstChild = t.nextSibling),
                      t === this.lastChild &&
                        (this.childNodes.length
                          ? (this.lastChild =
                              this.childNodes[this.childNodes.length - 1])
                          : (this.lastChild = null)),
                      e && (this.childNodes[e - 1].nextSibling = t.nextSibling),
                      (t.nextSibling = t.parent = null),
                      t
                    );
                },
                replaceChild: function (t, e) {
                  for (
                    var i = 0, n = this.childNodes.length;
                    i < n && this.childNodes[i] !== e;
                    i++
                  );
                  return (
                    i
                      ? (this.childNodes[i - 1].nextSibling = t)
                      : (this.firstChild = t),
                    n - 1 <= i && (this.lastChild = t),
                    this.SetData(i, t),
                    (t.nextSibling = e.nextSibling),
                    (e.nextSibling = e.parent = null),
                    e
                  );
                },
                hasChildNodes: function (t) {
                  return 0 < this.childNodes.length;
                },
                setAttribute: function (t, e) {
                  this[t] = e;
                },
              });
            })(),
              s();
          },
          Augment: function (t) {
            for (var e in t)
              if (t.hasOwnProperty(e)) {
                switch (e) {
                  case "displaystyle":
                    g = t[e];
                    break;
                  case "decimal":
                    decimal = t[e];
                    break;
                  case "parseMath":
                    o = t[e];
                    break;
                  case "parseExpr":
                    p = t[e];
                    break;
                  case "parseIexpr":
                    S = t[e];
                    break;
                  case "parseSexpr":
                    h = t[e];
                    break;
                  case "removeBrackets":
                    b = t[e];
                    break;
                  case "getSymbol":
                    C = t[e];
                    break;
                  case "position":
                    u = t[e];
                    break;
                  case "removeCharsAndBlanks":
                    T = t[e];
                    break;
                  case "createMmlNode":
                    x = t[e];
                    break;
                  case "createElementMathML":
                    n = t[e];
                    break;
                  case "createElementXHTML":
                    i = t[e];
                    break;
                  case "initSymbols":
                    s = t[e];
                    break;
                  case "refreshSymbols":
                    r = t[e];
                    break;
                  case "compareNames":
                    a = t[e];
                }
                this[e] = t[e];
              }
          },
          parseMath: o,
          parseExpr: p,
          parseIexpr: S,
          parseSexr: h,
          removeBrackets: b,
          getSymbol: C,
          position: u,
          removeCharsAndBlanks: T,
          createMmlNode: x,
          createElementMathML: n,
          createElementXHTML: i,
          initSymbols: s,
          refreshSymbols: r,
          compareNames: a,
          createDocumentFragment: d,
          document: I,
          define: function (t, e) {
            B.push({ input: t, tag: "mo", output: e, tex: null, ttype: J }),
              r();
          },
          newcommand: function (t, e) {
            B.push({ input: t, tag: "mo", output: e, tex: null, ttype: J }),
              r();
          },
          newsymbol: function (t) {
            B.push(t), r();
          },
          symbols: B,
          names: K,
          TOKEN: {
            CONST: L,
            UNARY: M,
            BINARY: D,
            INFIX: P,
            LEFTBRACKET: k,
            RIGHTBRACKET: H,
            SPACE: w,
            UNDEROVER: _,
            DEFINITION: J,
            LEFTRIGHT: X,
            TEXT: j,
            UNARYUNDEROVER: U,
          },
        },
      }),
      (z = MathJax.InputJax.AsciiMath).Augment({
        sourceMenuTitle: ["AsciiMathInput", "AsciiMath Input"],
        annotationEncoding: "text/x-asciimath",
        prefilterHooks: MathJax.Callback.Hooks(!0),
        postfilterHooks: MathJax.Callback.Hooks(!0),
        Translate: function (t) {
          var e,
            i = MathJax.HTML.getScript(t),
            n = { math: i, script: t },
            a = this.prefilterHooks.Execute(n);
          if (a) return a;
          i = n.math;
          try {
            e = this.AM.parseMath(i);
          } catch (t) {
            if (!t.asciimathError) throw t;
            e = this.formatError(t, i);
          }
          return (
            (n.math = q(e)),
            this.postfilterHooks.Execute(n),
            this.postfilterHooks.Execute(n) || n.math
          );
        },
        formatError: function (t, e, i) {
          var n = t.message.replace(/\n.*/, "");
          return (
            MathJax.Hub.signal.Post(["AsciiMath Jax - parse error", n, e, i]),
            q.Error(n)
          );
        },
        Error: function (t) {
          throw MathJax.Hub.Insert(Error(t), { asciimathError: !0 });
        },
        Startup: function () {
          (q = MathJax.ElementJax.mml), this.AM.Init();
        },
      }),
      z.loadComplete("jax.js");
  },
  function (t, e) {
    var l, a, s;
    (l = MathJax.ElementJax.mml),
      (a = [
        "texWithDelims",
        "movesupsub",
        "subsupOK",
        "primes",
        "movablelimits",
        "scriptlevel",
        "open",
        "close",
        "isError",
        "multiline",
        "variantForm",
        "autoOP",
        "fnOP",
      ]),
      (s = { texWithDelims: "withDelims" }),
      l.mbase.Augment({
        toMmlNode: function (t) {
          var e = this.type;
          "texatom" === e && (e = "TeXAtom");
          var i = this.nodeMake(t, e);
          return "texClass" in this && (i.texClass = this.texClass), i;
        },
        nodeMake: function (t, e) {
          for (
            var i = t.MML["TeXmathchoice" === e ? "mathchoice" : e](),
              n =
                this.data[0] && this.data[0].inferred && this.inferRow
                  ? this.data[0].data
                  : this.data,
              a = 0,
              s = n.length;
            a < s;
            a++
          ) {
            var r = n[a];
            r && i.appendChild(r.toMmlNode(t));
          }
          return this.nodeAddAttributes(i), this.nodeAddProperties(i), i;
        },
        nodeAddAttributes: function (t) {
          var e =
              "mstyle" === this.type
                ? l.math.prototype.defaults
                : this.defaults,
            i = this.attrNames || l.copyAttributeNames,
            n = l.skipAttributes,
            a = l.copyAttributes;
          if (!this.attrNames) {
            for (var s in e)
              n[s] ||
                a[s] ||
                !e.hasOwnProperty(s) ||
                (null != this[s] &&
                  this[s] !== e[s] &&
                  this.Get(s, null, 1) !== this[s] &&
                  t.attributes.set(s, this[s]));
            this.class && t.attributes.set("class", this.class);
          }
          for (var r = 0, o = i.length; r < o; r++)
            (1 === a[i[r]] && !e.hasOwnProperty(i[r])) ||
              ((value = (this.attr || {})[i[r]]),
              null == value && (value = this[i[r]]),
              null != value && t.attributes.set(i[r], value));
        },
        nodeAddProperties: function (t) {
          for (var e = 0, i = a.length; e < i; e++) {
            var n = a[e];
            null == this[n] ||
              (null != this.defaults[n] && this.defaults[n] !== l.AUTO) ||
              t.setProperty(s[n] || n, this[n]);
          }
        },
      }),
      l.chars.Augment({
        toMmlNode: function (t) {
          return t.MML.text().setText(this.data.join(""));
        },
      }),
      l.entity.Augment({
        toMmlNode: function (t) {
          return t.MML.text().setText(this.toString());
        },
      }),
      l.msubsup.Augment({
        toMmlNode: function (t) {
          var e =
            null == this.data[this.sub]
              ? "msup"
              : null == this.data[this.sup]
              ? "msub"
              : "msubsup";
          return this.nodeMake(t, e);
        },
      }),
      l.munderover.Augment({
        toMmlNode: function (t) {
          var e =
            null == this.data[this.under]
              ? "mover"
              : null == this.data[this.over]
              ? "munder"
              : "munderover";
          return this.nodeMake(t, e);
        },
      }),
      l.xml.Augment({
        toMmlNode: function (t) {
          return t.MML.xml(this.data);
        },
      });
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MmlFactory = MathJax._.core.MmlTree.MmlFactory.MmlFactory);
  },
  function (t, e, i) {
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
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractFindMath = MathJax._.core.FindMath.AbstractFindMath);
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sortLength = MathJax._.util.string.sortLength),
      (e.quotePattern = MathJax._.util.string.quotePattern),
      (e.unicodeChars = MathJax._.util.string.unicodeChars),
      (e.isPercent = MathJax._.util.string.isPercent),
      (e.split = MathJax._.util.string.split);
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.protoItem = MathJax._.core.MathItem.protoItem),
      (e.AbstractMathItem = MathJax._.core.MathItem.AbstractMathItem),
      (e.STATE = MathJax._.core.MathItem.STATE),
      (e.newState = MathJax._.core.MathItem.newState);
  },
]);
