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
    a((a.s = 67));
})([
  function (t, e, r) {
    "use strict";
    var y =
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
      E =
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var v,
      n,
      a,
      o = r(13),
      i = r(8),
      N = r(10),
      s = r(1),
      b = r(8),
      x = r(76),
      l =
        ((c.create = function (t, e) {
          return (
            void 0 === e && (e = {}),
            new c(
              t,
              e.handler || {},
              e.fallback || {},
              e.items || {},
              e.tags || {},
              e.options || {},
              e.nodes || {},
              e.preprocessors || [],
              e.postprocessors || [],
              [e.init, e.priority],
              [e.config, e.configPriority]
            )
          );
        }),
        (c.empty = function () {
          return c.create("empty");
        }),
        (c.extension = function () {
          return (
            new s.MacroMap(i.ExtensionMaps.NEW_MACRO, {}, {}),
            new s.DelimiterMap(
              i.ExtensionMaps.NEW_DELIMITER,
              o.default.delimiter,
              {}
            ),
            new s.CommandMap(i.ExtensionMaps.NEW_COMMAND, {}, {}),
            new s.EnvironmentMap(
              i.ExtensionMaps.NEW_ENVIRONMENT,
              o.default.environment,
              {},
              {}
            ),
            c.create("extension", {
              handler: {
                character: [],
                delimiter: [i.ExtensionMaps.NEW_DELIMITER],
                macro: [
                  i.ExtensionMaps.NEW_DELIMITER,
                  i.ExtensionMaps.NEW_COMMAND,
                  i.ExtensionMaps.NEW_MACRO,
                ],
                environment: [i.ExtensionMaps.NEW_ENVIRONMENT],
              },
            })
          );
        }),
        (c.prototype.init = function (t) {
          this.initMethod.execute(t);
        }),
        (c.prototype.config = function (t, e) {
          var r, n, a, o;
          this.configMethod.execute(t, e);
          try {
            for (
              var i = E(this.preprocessors), s = i.next();
              !s.done;
              s = i.next()
            ) {
              var l = s.value;
              "function" == typeof l
                ? e.preFilters.add(l)
                : e.preFilters.add(l[0], l[1]);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              s && !s.done && (n = i.return) && n.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
          try {
            for (
              var c = E(this.postprocessors), u = c.next();
              !u.done;
              u = c.next()
            ) {
              var p = u.value;
              "function" == typeof p
                ? e.postFilters.add(p)
                : e.postFilters.add(p[0], p[1]);
            }
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              u && !u.done && (o = c.return) && o.call(c);
            } finally {
              if (a) throw a.error;
            }
          }
        }),
        (c.prototype.append = function (t) {
          var e,
            r,
            n,
            a,
            o,
            i,
            s,
            l,
            c,
            u,
            p,
            f,
            d = Object.keys(t.handler);
          try {
            for (var h = E(d), m = h.next(); !m.done; m = h.next()) {
              var g = m.value;
              try {
                for (
                  var y = ((n = void 0), E(t.handler[g])), v = y.next();
                  !v.done;
                  v = y.next()
                ) {
                  var b = v.value;
                  this.handler[g].unshift(b);
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  v && !v.done && (a = y.return) && a.call(y);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              m && !m.done && (r = h.return) && r.call(h);
            } finally {
              if (e) throw e.error;
            }
          }
          Object.assign(this.fallback, t.fallback),
            Object.assign(this.items, t.items),
            Object.assign(this.tags, t.tags),
            N.defaultOptions(this.options, t.options),
            Object.assign(this.nodes, t.nodes);
          try {
            for (
              var x = E(t.preprocessors), _ = x.next();
              !_.done;
              _ = x.next()
            ) {
              var A = _.value;
              this.preprocessors.push(A);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              _ && !_.done && (i = x.return) && i.call(x);
            } finally {
              if (o) throw o.error;
            }
          }
          try {
            for (
              var w = E(t.postprocessors), M = w.next();
              !M.done;
              M = w.next()
            ) {
              var P = M.value;
              this.postprocessors.push(P);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              M && !M.done && (l = w.return) && l.call(w);
            } finally {
              if (s) throw s.error;
            }
          }
          try {
            for (var C = E(t.initMethod), S = C.next(); !S.done; S = C.next()) {
              var T = S.value;
              this.initMethod.add(T.item, T.priority);
            }
          } catch (t) {
            c = { error: t };
          } finally {
            try {
              S && !S.done && (u = C.return) && u.call(C);
            } finally {
              if (c) throw c.error;
            }
          }
          try {
            for (var k = E(t.configMethod), O = k.next(); !O.done; O = k.next())
              (T = O.value), this.configMethod.add(T.item, T.priority);
          } catch (t) {
            p = { error: t };
          } finally {
            try {
              O && !O.done && (f = k.return) && f.call(k);
            } finally {
              if (p) throw p.error;
            }
          }
        }),
        (c.prototype.register = function (t, e, r) {
          var n, a, o, i, s, l;
          void 0 === r && (r = {}), this.append(t), t.init(this);
          var c = e.parseOptions;
          (c.handlers = new b.SubHandlers(this)),
            c.nodeFactory.setCreators(t.nodes);
          try {
            for (
              var u = E(Object.keys(t.items)), p = u.next();
              !p.done;
              p = u.next()
            ) {
              var f = p.value;
              c.itemFactory.setNodeClass(f, t.items[f]);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              p && !p.done && (a = u.return) && a.call(u);
            } finally {
              if (n) throw n.error;
            }
          }
          N.defaultOptions(c.options, t.options),
            N.userOptions(c.options, r),
            t.config(this, e);
          try {
            for (
              var d = E(t.preprocessors), h = d.next();
              !h.done;
              h = d.next()
            ) {
              var m = h.value;
              Array.isArray(m)
                ? e.preFilters.add(m[0], m[1])
                : e.preFilters.add(m);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              h && !h.done && (i = d.return) && i.call(d);
            } finally {
              if (o) throw o.error;
            }
          }
          try {
            for (
              var g = E(t.postprocessors), y = g.next();
              !y.done;
              y = g.next()
            ) {
              var v = y.value;
              Array.isArray(v)
                ? e.postFilters.add(v[0], v[1])
                : e.postFilters.add(v);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              y && !y.done && (l = g.return) && l.call(g);
            } finally {
              if (s) throw s.error;
            }
          }
        }),
        c);
    function c(t, e, r, n, a, o, i, s, l, c, u) {
      void 0 === e && (e = {}),
        void 0 === r && (r = {}),
        void 0 === n && (n = {}),
        void 0 === a && (a = {}),
        void 0 === o && (o = {}),
        void 0 === i && (i = {}),
        void 0 === s && (s = []),
        void 0 === l && (l = []);
      var p = y(c, 2),
        f = p[0],
        d = p[1],
        h = y(u, 2),
        m = h[0],
        g = h[1];
      (this.name = t),
        (this.handler = e),
        (this.fallback = r),
        (this.items = n),
        (this.tags = a),
        (this.options = o),
        (this.nodes = i),
        (this.preprocessors = s),
        (this.postprocessors = l),
        (this.initMethod = new x.FunctionList()),
        (this.configMethod = new x.FunctionList()),
        f && this.initMethod.add(f, d || 0),
        m && this.configMethod.add(m, g || d || 0),
        (this.handler = Object.assign(
          { character: [], delimiter: [], macro: [], environment: [] },
          e
        )),
        v.set(t, this);
    }
    (e.Configuration = l),
      (n = v = e.ConfigurationHandler || (e.ConfigurationHandler = {})),
      (a = new Map()),
      (n.set = function (t, e) {
        a.set(t, e);
      }),
      (n.get = function (t) {
        return a.get(t);
      }),
      (n.keys = function () {
        return a.keys();
      });
  },
  function (t, e, r) {
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
      h =
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
      m =
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
      l =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(h(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var g = r(14),
      o = r(8),
      i =
        (Object.defineProperty(s.prototype, "name", {
          get: function () {
            return this._name;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (s.prototype.parserFor = function (t) {
          return this.contains(t) ? this.parser : null;
        }),
        (s.prototype.parse = function (t) {
          var e = h(t, 2),
            r = e[0],
            n = e[1],
            a = this.parserFor(n),
            o = this.lookup(n);
          return a && o ? a(r, o) || !0 : null;
        }),
        Object.defineProperty(s.prototype, "parser", {
          get: function () {
            return this._parser;
          },
          set: function (t) {
            this._parser = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        s);
    function s(t, e) {
      (this._name = t), (this._parser = e), o.MapHandler.register(this);
    }
    e.AbstractSymbolMap = i;
    var c,
      u =
        (a(p, (c = i)),
        (p.prototype.contains = function (t) {
          return this._regExp.test(t);
        }),
        (p.prototype.lookup = function (t) {
          return this.contains(t) ? t : null;
        }),
        p);
    function p(t, e, r) {
      var n = c.call(this, t, e) || this;
      return (n._regExp = r), n;
    }
    e.RegExpMap = u;
    var f,
      d =
        (a(y, (f = i)),
        (y.prototype.lookup = function (t) {
          return this.map.get(t);
        }),
        (y.prototype.contains = function (t) {
          return this.map.has(t);
        }),
        (y.prototype.add = function (t, e) {
          this.map.set(t, e);
        }),
        y);
    function y() {
      var t = (null !== f && f.apply(this, arguments)) || this;
      return (t.map = new Map()), t;
    }
    e.AbstractParseMap = d;
    var v,
      b = (a(x, (v = d)), x);
    function x(t, e, r) {
      var n,
        a,
        o = v.call(this, t, e) || this;
      try {
        for (var i = m(Object.keys(r)), s = i.next(); !s.done; s = i.next()) {
          var l = s.value,
            c = r[l],
            u = h("string" == typeof c ? [c, null] : c, 2),
            p = u[0],
            f = u[1],
            d = new g.Symbol(l, p, f);
          o.add(l, d);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (a = i.return) && a.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    e.CharacterMap = b;
    var _,
      A =
        (a(w, (_ = b)),
        (w.prototype.parse = function (t) {
          var e = h(t, 2),
            r = e[0],
            n = e[1];
          return _.prototype.parse.call(this, [r, "\\" + n]);
        }),
        w);
    function w() {
      return (null !== _ && _.apply(this, arguments)) || this;
    }
    e.DelimiterMap = A;
    var M,
      P =
        (a(C, (M = d)),
        (C.prototype.parserFor = function (t) {
          var e = this.lookup(t);
          return e ? e.func : null;
        }),
        (C.prototype.parse = function (t) {
          var e = h(t, 2),
            r = e[0],
            n = e[1],
            a = this.lookup(n),
            o = this.parserFor(n);
          return a && o
            ? o.apply(void 0, l([r, a.symbol], a.args)) || !0
            : null;
        }),
        C);
    function C(t, e, r) {
      var n,
        a,
        o = M.call(this, t, null) || this;
      try {
        for (var i = m(Object.keys(e)), s = i.next(); !s.done; s = i.next()) {
          var l = s.value,
            c = e[l],
            u = h("string" == typeof c ? [c] : c),
            p = u[0],
            f = u.slice(1),
            d = new g.Macro(l, r[p], f);
          o.add(l, d);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (a = i.return) && a.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    e.MacroMap = P;
    var S,
      T =
        (a(k, (S = P)),
        (k.prototype.parse = function (t) {
          var e = h(t, 2),
            r = e[0],
            n = e[1],
            a = this.lookup(n),
            o = this.parserFor(n);
          if (!a || !o) return null;
          if ((["\\" + a.symbol].concat(a.args), !o)) return null;
          var i = r.currentCS;
          r.currentCS = "\\" + n;
          var s = o.apply(void 0, l([r, "\\" + a.symbol], a.args));
          return (r.currentCS = i), s || !0;
        }),
        k);
    function k() {
      return (null !== S && S.apply(this, arguments)) || this;
    }
    e.CommandMap = T;
    var O,
      E =
        (a(N, (O = P)),
        (N.prototype.parse = function (t) {
          var e = h(t, 2),
            r = e[0],
            n = e[1],
            a = this.lookup(n),
            o = this.parserFor(n);
          return a && o ? (this.parser(r, a.symbol, o, a.args), !0) : null;
        }),
        N);
    function N(t, e, r, n) {
      var a = O.call(this, t, r, n) || this;
      return (a.parser = e), a;
    }
    e.EnvironmentMap = E;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
      ((i.processString = function (t, e) {
        for (var r = t.split(i.pattern), n = 1, a = r.length; n < a; n += 2) {
          var o = r[n].charAt(0);
          "0" <= o && o <= "9"
            ? ((r[n] = e[parseInt(r[n], 10) - 1]),
              "number" == typeof r[n] && (r[n] = r[n].toString()))
            : "{" === o &&
              ("0" <= (o = r[n].substr(1)) && o <= "9"
                ? ((r[n] =
                    e[parseInt(r[n].substr(1, r[n].length - 2), 10) - 1]),
                  "number" == typeof r[n] && (r[n] = r[n].toString()))
                : r[n].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/) &&
                  (r[n] = "%" + r[n])),
            null == r[n] && (r[n] = "???");
        }
        return r.join("");
      }),
      (i.pattern =
        /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g),
      i);
    function i(t, e) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      (this.id = t), (this.message = i.processString(e, r));
    }
    e.default = n;
  },
  function (t, e, r) {
    "use strict";
    var c =
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
      n =
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
      a =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i,
      l,
      s = r(5),
      u = r(74);
    function p(t, e) {
      var r, n;
      try {
        for (var a = c(Object.keys(e)), o = a.next(); !o.done; o = a.next()) {
          var i = o.value,
            s = e[i];
          "texClass" === i
            ? ((t.texClass = s), t.setProperty(i, s))
            : "movablelimits" === i
            ? (t.setProperty("movablelimits", s),
              (t.isKind("mo") || t.isKind("mstyle")) &&
                t.attributes.set("movablelimits", s))
            : "inferred" === i ||
              (l.has(i) ? t.setProperty(i, s) : t.attributes.set(i, s));
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (r) throw r.error;
        }
      }
    }
    function f(t, e, r) {
      (t.childNodes[e] = r) && (r.parent = t);
    }
    function d(t, e) {
      return t.isKind(e);
    }
    (i = o = o || {}),
      (l = new Map([
        ["autoOP", !0],
        ["fnOP", !0],
        ["movesupsub", !0],
        ["subsupOK", !0],
        ["texprimestyle", !0],
        ["useHeight", !0],
        ["variantForm", !0],
        ["withDelims", !0],
        ["open", !0],
        ["close", !0],
      ])),
      (i.createEntity = function (t) {
        return String.fromCharCode(parseInt(t, 16));
      }),
      (i.getChildren = function (t) {
        return t.childNodes;
      }),
      (i.getText = function (t) {
        return t.getText();
      }),
      (i.appendChildren = function (t, e) {
        var r, n;
        try {
          for (var a = c(e), o = a.next(); !o.done; o = a.next()) {
            var i = o.value;
            t.appendChild(i);
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
      }),
      (i.setAttribute = function (t, e, r) {
        t.attributes.set(e, r);
      }),
      (i.setProperty = function (t, e, r) {
        t.setProperty(e, r);
      }),
      (i.setProperties = p),
      (i.getProperty = function (t, e) {
        return t.getProperty(e);
      }),
      (i.getAttribute = function (t, e) {
        return t.attributes.get(e);
      }),
      (i.removeProperties = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        t.removeProperty.apply(t, a(e));
      }),
      (i.getChildAt = function (t, e) {
        return t.childNodes[e];
      }),
      (i.setChild = f),
      (i.copyChildren = function (t, e) {
        for (var r = t.childNodes, n = 0; n < r.length; n++) f(e, n, r[n]);
      }),
      (i.copyAttributes = function (t, e) {
        (e.attributes = t.attributes), p(e, t.getAllProperties());
      }),
      (i.isType = d),
      (i.isEmbellished = function (t) {
        return t.isEmbellished;
      }),
      (i.getTexClass = function (t) {
        return t.texClass;
      }),
      (i.getCoreMO = function (t) {
        return t.coreMO();
      }),
      (i.isNode = function (t) {
        return (
          t instanceof s.AbstractMmlNode || t instanceof s.AbstractMmlEmptyNode
        );
      }),
      (i.isInferred = function (t) {
        return t.isInferred;
      }),
      (i.getForm = function (t) {
        var e, r;
        if (!d(t, "mo")) return null;
        var n = t,
          a = n.getForms();
        try {
          for (var o = c(a), i = o.next(); !i.done; i = o.next()) {
            var s = i.value,
              l = u.MmlMo.OPTABLE[s][n.getText()];
            if (l) return l;
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return null;
      }),
      (e.default = o);
  },
  function (t, e, r) {
    "use strict";
    var c =
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
      u =
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n,
      a,
      i,
      o,
      s,
      l,
      p,
      f = r(5),
      d = r(3),
      h = r(6),
      m = r(2),
      g = r(11);
    function y(t, e) {
      void 0 === e && (e = !1);
      var r = t.match(e ? p : l);
      return r ? [r[1].replace(/,/, "."), r[4], r[0].length] : [null, null, 0];
    }
    function v(t, e, r) {
      ("{" !== e && "}" !== e) || (e = "\\" + e);
      var n = "{\\bigg" + r + " " + e + "}",
        a = "{\\big" + r + " " + e + "}";
      return new h.default("\\mathchoice" + n + a + a + a, {}, t).mml();
    }
    function b(t, e, r) {
      e = e.replace(/^\s+/, g.entities.nbsp).replace(/\s+$/, g.entities.nbsp);
      var n = t.create("text", e);
      return t.create("node", "mtext", [], r, n);
    }
    function x(t, e, r) {
      if (
        (r.match(/^[a-z]/i) &&
          e.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i) &&
          (e += " "),
        e.length + r.length > t.configuration.options.maxBuffer)
      )
        throw new m.default(
          "MaxBufferSize",
          "MathJax internal buffer size exceeded; is there a recursive macro call?"
        );
      return e + r;
    }
    function _(t, e) {
      for (; 0 < e; ) (t = t.trim().slice(1, -1)), e--;
      return t.trim();
    }
    function A(t, e) {
      for (
        var r = t.length, n = 0, a = "", o = 0, i = 0, s = !0, l = !1;
        o < r;

      ) {
        var c = t[o++];
        switch (c) {
          case " ":
            break;
          case "{":
            s ? i++ : ((l = !1), n < i && (i = n)), n++;
            break;
          case "}":
            n && n--, (s || l) && (i--, (l = !0)), (s = !1);
            break;
          default:
            if (!n && -1 !== e.indexOf(c))
              return [l ? "true" : _(a, i), c, t.slice(o)];
            l = s = !1;
        }
        a += c;
      }
      if (n)
        throw new m.default(
          "ExtraOpenMissingClose",
          "Extra open brace or missing close brace"
        );
      return [l ? "true" : _(a, i), "", t.slice(o)];
    }
    r(30),
      (a = n = n || {}),
      (i = {
        em: function (t) {
          return t;
        },
        ex: function (t) {
          return 0.43 * t;
        },
        pt: function (t) {
          return t / 10;
        },
        pc: function (t) {
          return 1.2 * t;
        },
        px: function (t) {
          return (7.2 * t) / 72;
        },
        in: function (t) {
          return 7.2 * t;
        },
        cm: function (t) {
          return (7.2 * t) / 2.54;
        },
        mm: function (t) {
          return (7.2 * t) / 25.4;
        },
        mu: function (t) {
          return t / 18;
        },
      }),
      (o = "([-+]?([.,]\\d+|\\d+([.,]\\d*)?))"),
      (s = "(pt|em|ex|mu|px|mm|cm|in|pc)"),
      (l = RegExp("^\\s*" + o + "\\s*" + s + "\\s*$")),
      (p = RegExp("^\\s*" + o + "\\s*" + s + " ?")),
      (a.matchDimen = y),
      (a.dimen2em = function (t) {
        var e = c(y(t), 3),
          r = e[0],
          n = e[1],
          a = (e[2], parseFloat(r || "1")),
          o = i[n];
        return o ? o(a) : 0;
      }),
      (a.Em = function (t) {
        return Math.abs(t) < 6e-4
          ? "0em"
          : t.toFixed(3).replace(/\.?0+$/, "") + "em";
      }),
      (a.fenced = function (t, e, r, n, a) {
        void 0 === a && (a = "");
        var o,
          i = t.nodeFactory,
          s = i.create("node", "mrow", [], {
            open: e,
            close: n,
            texClass: f.TEXCLASS.INNER,
          });
        if (a)
          o = new h.default("\\" + a + "l" + e, t.parser.stack.env, t).mml();
        else {
          var l = i.create("text", e);
          o = i.create(
            "node",
            "mo",
            [],
            {
              fence: !0,
              stretchy: !0,
              symmetric: !0,
              texClass: f.TEXCLASS.OPEN,
            },
            l
          );
        }
        if (
          (d.default.appendChildren(s, [o]),
          d.default.isType(r, "mrow") && d.default.isInferred(r)
            ? d.default.appendChildren(s, d.default.getChildren(r))
            : d.default.appendChildren(s, [r]),
          a)
        )
          o = new h.default("\\" + a + "r" + n, t.parser.stack.env, t).mml();
        else {
          var c = i.create("text", n);
          o = i.create(
            "node",
            "mo",
            [],
            {
              fence: !0,
              stretchy: !0,
              symmetric: !0,
              texClass: f.TEXCLASS.CLOSE,
            },
            c
          );
        }
        return d.default.appendChildren(s, [o]), s;
      }),
      (a.fixedFence = function (t, e, r, n) {
        var a = t.nodeFactory.create("node", "mrow", [], {
          open: e,
          close: n,
          texClass: f.TEXCLASS.ORD,
        });
        return (
          e && d.default.appendChildren(a, [v(t, e, "l")]),
          d.default.isType(r, "mrow")
            ? d.default.appendChildren(a, d.default.getChildren(r))
            : d.default.appendChildren(a, [r]),
          n && d.default.appendChildren(a, [v(t, n, "r")]),
          a
        );
      }),
      (a.mathPalette = v),
      (a.fixInitialMO = function (t, e) {
        for (var r = 0, n = e.length; r < n; r++) {
          var a = e[r];
          if (
            a &&
            !d.default.isType(a, "mspace") &&
            (!d.default.isType(a, "TeXAtom") ||
              (d.default.getChildren(a)[0] &&
                d.default.getChildren(d.default.getChildren(a)[0]).length))
          ) {
            if (d.default.isEmbellished(a)) {
              var o = t.nodeFactory.create("node", "mi");
              e.unshift(o);
            }
            break;
          }
        }
      }),
      (a.mi2mo = function (t, e) {
        var r = t.create("node", "mo");
        return (
          d.default.copyChildren(e, r),
          d.default.copyAttributes(e, r),
          d.default.setProperties(r, { lspace: "0", rspace: "0" }),
          d.default.removeProperties(r, "movesupsub"),
          r
        );
      }),
      (a.internalMath = function (t, e, r) {
        var n,
          a,
          o = t.stack.env.font ? { mathvariant: t.stack.env.font } : {},
          i = [],
          s = 0,
          l = 0,
          c = "",
          u = 0;
        if (e.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
          for (; s < e.length; )
            if ("$" === (n = e.charAt(s++)))
              "$" === c && 0 === u
                ? ((a = t.create("node", "TeXAtom", [
                    new h.default(e.slice(l, s - 1), {}, t.configuration).mml(),
                  ])),
                  i.push(a),
                  (c = ""),
                  (l = s))
                : "" === c &&
                  (l < s - 1 && i.push(b(t, e.slice(l, s - 1), o)),
                  (c = "$"),
                  (l = s));
            else if ("{" === n && "" !== c) u++;
            else if ("}" === n)
              if ("}" === c && 0 === u) {
                var p = new h.default(e.slice(l, s), {}, t.configuration).mml();
                (a = t.create("node", "TeXAtom", [p], o)),
                  i.push(a),
                  (c = ""),
                  (l = s);
              } else "" !== c && u && u--;
            else if ("\\" === n)
              if ("" === c && e.substr(s).match(/^(eq)?ref\s*\{/)) {
                var f = RegExp["$&"].length;
                l < s - 1 && i.push(b(t, e.slice(l, s - 1), o)),
                  (c = "}"),
                  (l = s - 1),
                  (s += f);
              } else
                "(" === (n = e.charAt(s++)) && "" === c
                  ? (l < s - 2 && i.push(b(t, e.slice(l, s - 2), o)),
                    (c = ")"),
                    (l = s))
                  : ")" === n && ")" === c && 0 === u
                  ? ((a = t.create("node", "TeXAtom", [
                      new h.default(
                        e.slice(l, s - 2),
                        {},
                        t.configuration
                      ).mml(),
                    ])),
                    i.push(a),
                    (c = ""),
                    (l = s))
                  : n.match(/[${}\\]/) &&
                    "" === c &&
                    (s--, (e = e.substr(0, s - 1) + e.substr(s)));
          if ("" !== c)
            throw new m.default(
              "MathNotTerminated",
              "Math not terminated in text box"
            );
        }
        return (
          l < e.length && i.push(b(t, e.slice(l), o)),
          null != r
            ? (i = [
                t.create("node", "mstyle", i, {
                  displaystyle: !1,
                  scriptlevel: r,
                }),
              ])
            : 1 < i.length && (i = [t.create("node", "mrow", i)]),
          i
        );
      }),
      (a.trimSpaces = function (t) {
        if ("string" != typeof t) return t;
        var e = t.trim();
        return e.match(/\\$/) && t.match(/ $/) && (e += " "), e;
      }),
      (a.setArrayAlign = function (t, e) {
        return (
          "t" === (e = a.trimSpaces(e || ""))
            ? (t.arraydef.align = "baseline 1")
            : "b" === e
            ? (t.arraydef.align = "baseline -1")
            : "c" === e
            ? (t.arraydef.align = "center")
            : e && (t.arraydef.align = e),
          t
        );
      }),
      (a.substituteArgs = function (t, e, r) {
        for (var n = "", a = "", o = 0; o < r.length; ) {
          var i = r.charAt(o++);
          if ("\\" === i) n += i + r.charAt(o++);
          else if ("#" === i)
            if ("#" === (i = r.charAt(o++))) n += i;
            else {
              if (!i.match(/[1-9]/) || parseInt(i, 10) > e.length)
                throw new m.default(
                  "IllegalMacroParam",
                  "Illegal macro parameter reference"
                );
              (a = x(t, x(t, a, n), e[parseInt(i, 10) - 1])), (n = "");
            }
          else n += i;
        }
        return x(t, a, n);
      }),
      (a.addArgs = x),
      (a.checkEqnEnv = function (t) {
        if (t.stack.global.eqnenv)
          throw new m.default(
            "ErroneousNestingEq",
            "Erroneous nesting of equation structures"
          );
        t.stack.global.eqnenv = !0;
      }),
      (a.MmlFilterAttribute = function (t, e, r) {
        return r;
      }),
      (a.getFontDef = function (t) {
        var e = t.stack.env.font;
        return e ? { mathvariant: e } : {};
      }),
      (a.keyvalOptions = function (t, e, r) {
        var n, a;
        void 0 === e && (e = null), void 0 === r && (r = !1);
        var o = (function (t) {
          for (var e, r, n, a, o, i = {}, s = t; s; )
            (e = c(A(s, ["=", ","]), 3)),
              (a = e[0]),
              (n = e[1]),
              (s = e[2]),
              "=" === n
                ? ((r = c(A(s, [","]), 3)),
                  (o = r[0]),
                  (n = r[1]),
                  (s = r[2]),
                  (o = "false" === o || "true" === o ? JSON.parse(o) : o),
                  (i[a] = o))
                : a && (i[a] = !0);
          return i;
        })(t);
        if (e)
          try {
            for (
              var i = u(Object.keys(o)), s = i.next();
              !s.done;
              s = i.next()
            ) {
              var l = s.value;
              if (!e.hasOwnProperty(l)) {
                if (r)
                  throw new m.default(
                    "InvalidOption",
                    "Invalid optional argument: %1",
                    l
                  );
                delete o[l];
              }
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              s && !s.done && (a = i.return) && a.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
        return o;
      }),
      (e.default = n);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TEXCLASS = MathJax._.core.MmlTree.MmlNode.TEXCLASS),
      (e.TEXCLASSNAMES = MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES),
      (e.indentAttributes = MathJax._.core.MmlTree.MmlNode.indentAttributes),
      (e.AbstractMmlNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlNode),
      (e.AbstractMmlTokenNode =
        MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode),
      (e.AbstractMmlLayoutNode =
        MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode),
      (e.AbstractMmlBaseNode =
        MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode),
      (e.AbstractMmlEmptyNode =
        MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode),
      (e.TextNode = MathJax._.core.MmlTree.MmlNode.TextNode),
      (e.XMLNode = MathJax._.core.MmlTree.MmlNode.XMLNode);
  },
  function (t, e, r) {
    "use strict";
    var p =
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
      s =
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
      a =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(s(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l = r(4),
      f = r(21),
      c = r(2),
      n =
        (Object.defineProperty(o.prototype, "options", {
          get: function () {
            return this.configuration.options;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(o.prototype, "itemFactory", {
          get: function () {
            return this.configuration.itemFactory;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(o.prototype, "tags", {
          get: function () {
            return this.configuration.tags;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(o.prototype, "string", {
          get: function () {
            return this._string;
          },
          set: function (t) {
            this._string = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (o.prototype.parse = function (t, e) {
          return this.configuration.handlers.get(t).parse(e);
        }),
        (o.prototype.lookup = function (t, e) {
          return this.configuration.handlers.get(t).lookup(e);
        }),
        (o.prototype.contains = function (t, e) {
          return this.configuration.handlers.get(t).contains(e);
        }),
        (o.prototype.toString = function () {
          var e,
            t,
            r = "";
          try {
            for (
              var n = p(Array.from(this.configuration.handlers.keys())),
                a = n.next();
              !a.done;
              a = n.next()
            ) {
              var o = a.value;
              r += o + ": " + this.configuration.handlers.get(o) + "\n";
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return r;
        }),
        (o.prototype.Parse = function () {
          for (var t, e; this.i < this.string.length; )
            55296 <= (e = (t = this.string.charAt(this.i++)).charCodeAt(0)) &&
              e < 56320 &&
              (t += this.string.charAt(this.i++)),
              this.parse("character", [this, t]);
        }),
        (o.prototype.Push = function (t) {
          this.stack.Push(t);
        }),
        (o.prototype.PushAll = function (t) {
          var e, r;
          try {
            for (var n = p(t), a = n.next(); !a.done; a = n.next()) {
              var o = a.value;
              this.stack.Push(o);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (o.prototype.mml = function () {
          if (!this.stack.Top().isKind("mml")) return null;
          var t = this.stack.Top().First;
          return this.configuration.popParser(), t;
        }),
        (o.prototype.convertDelimiter = function (t) {
          var e = this.lookup("delimiter", t);
          return e ? e.char : null;
        }),
        (o.prototype.nextIsSpace = function () {
          return this.string.charAt(this.i).match(/\s/);
        }),
        (o.prototype.GetNext = function () {
          for (; this.nextIsSpace(); ) this.i++;
          return this.string.charAt(this.i);
        }),
        (o.prototype.GetCS = function () {
          var t = this.string.slice(this.i).match(/^([a-z]+|.) ?/i);
          return t ? ((this.i += t[1].length), t[1]) : (this.i++, " ");
        }),
        (o.prototype.GetArgument = function (t, e) {
          switch (this.GetNext()) {
            case "":
              if (!e)
                throw new c.default(
                  "MissingArgFor",
                  "Missing argument for %1",
                  this.currentCS
                );
              return null;
            case "}":
              if (!e)
                throw new c.default(
                  "ExtraCloseMissingOpen",
                  "Extra close brace or missing open brace"
                );
              return null;
            case "\\":
              return this.i++, "\\" + this.GetCS();
            case "{":
              for (var r = ++this.i, n = 1; this.i < this.string.length; )
                switch (this.string.charAt(this.i++)) {
                  case "\\":
                    this.i++;
                    break;
                  case "{":
                    n++;
                    break;
                  case "}":
                    if (0 == --n) return this.string.slice(r, this.i - 1);
                }
              throw new c.default("MissingCloseBrace", "Missing close brace");
          }
          return this.string.charAt(this.i++);
        }),
        (o.prototype.GetBrackets = function (t, e) {
          if ("[" !== this.GetNext()) return e;
          for (var r = ++this.i, n = 0; this.i < this.string.length; )
            switch (this.string.charAt(this.i++)) {
              case "{":
                n++;
                break;
              case "\\":
                this.i++;
                break;
              case "}":
                if (n-- <= 0)
                  throw new c.default(
                    "ExtraCloseLooking",
                    "Extra close brace while looking for %1",
                    "']'"
                  );
                break;
              case "]":
                if (0 === n) return this.string.slice(r, this.i - 1);
            }
          throw new c.default(
            "MissingCloseBracket",
            "Could not find closing ']' for argument to %1",
            this.currentCS
          );
        }),
        (o.prototype.GetDelimiter = function (t, e) {
          for (; this.nextIsSpace(); ) this.i++;
          var r = this.string.charAt(this.i);
          if (
            (this.i++,
            this.i <= this.string.length &&
              ("\\" === r
                ? (r += this.GetCS())
                : "{" === r && e && (this.i--, (r = this.GetArgument(t))),
              this.contains("delimiter", r)))
          )
            return this.convertDelimiter(r);
          throw new c.default(
            "MissingOrUnrecognizedDelim",
            "Missing or unrecognized delimiter for %1",
            this.currentCS
          );
        }),
        (o.prototype.GetDimen = function (t) {
          if (
            (this.nextIsSpace() && this.i++, "{" === this.string.charAt(this.i))
          ) {
            var e = this.GetArgument(t),
              r = s(l.default.matchDimen(e), 3),
              n = r[0],
              a = r[1];
            if ((r[2], n)) return n + a;
          } else {
            e = this.string.slice(this.i);
            var o = s(l.default.matchDimen(e, !0), 3),
              i = ((n = o[0]), (a = o[1]), o[2]);
            if (n) return (this.i += i), n + a;
          }
          throw new c.default(
            "MissingDimOrUnits",
            "Missing dimension or its units for %1",
            this.currentCS
          );
        }),
        (o.prototype.GetUpTo = function (t, e) {
          for (; this.nextIsSpace(); ) this.i++;
          for (var r = this.i, n = 0; this.i < this.string.length; ) {
            var a = this.i,
              o = this.string.charAt(this.i++);
            switch (o) {
              case "\\":
                o += this.GetCS();
                break;
              case "{":
                n++;
                break;
              case "}":
                if (0 === n)
                  throw new c.default(
                    "ExtraCloseLooking",
                    "Extra close brace while looking for %1",
                    e
                  );
                n--;
            }
            if (0 === n && o === e) return this.string.slice(r, a);
          }
          throw new c.default(
            "TokenNotFoundForCommand",
            "Could not find %1 for %2",
            e,
            this.currentCS
          );
        }),
        (o.prototype.ParseArg = function (t) {
          return new o(
            this.GetArgument(t),
            this.stack.env,
            this.configuration
          ).mml();
        }),
        (o.prototype.ParseUpTo = function (t, e) {
          return new o(
            this.GetUpTo(t, e),
            this.stack.env,
            this.configuration
          ).mml();
        }),
        (o.prototype.GetDelimiterArg = function (t) {
          var e = l.default.trimSpaces(this.GetArgument(t));
          if ("" === e) return null;
          if (this.contains("delimiter", e)) return e;
          throw new c.default(
            "MissingOrUnrecognizedDelim",
            "Missing or unrecognized delimiter for %1",
            this.currentCS
          );
        }),
        (o.prototype.GetStar = function () {
          var t = "*" === this.GetNext();
          return t && this.i++, t;
        }),
        (o.prototype.create = function (t) {
          for (var e, r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n];
          return (e = this.configuration.nodeFactory).create.apply(
            e,
            a([t], r)
          );
        }),
        o);
    function o(t, e, r) {
      var n, a;
      (this._string = t),
        (this.configuration = r),
        (this.macroCount = 0),
        (this.i = 0),
        (this.currentCS = "");
      var o,
        i = e.hasOwnProperty("isInner"),
        s = e.isInner;
      if ((delete e.isInner, e)) {
        o = {};
        try {
          for (var l = p(Object.keys(e)), c = l.next(); !c.done; c = l.next()) {
            var u = c.value;
            o[u] = e[u];
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            c && !c.done && (a = l.return) && a.call(l);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      this.configuration.pushParser(this),
        (this.stack = new f.default(this.itemFactory, o, !i || s)),
        this.Parse(),
        this.Push(this.itemFactory.create("stop"));
    }
    e.default = n;
  },
  function (t, e, r) {
    "use strict";
    var n;
    Object.defineProperty(e, "__esModule", { value: !0 }),
      ((n = e.TexConstant || (e.TexConstant = {})).Variant = {
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
        CALLIGRAPHIC: "-tex-calligraphic",
        OLDSTYLE: "-tex-oldstyle",
      }),
      (n.Form = { PREFIX: "prefix", INFIX: "infix", POSTFIX: "postfix" }),
      (n.LineBreak = {
        AUTO: "auto",
        NEWLINE: "newline",
        NOBREAK: "nobreak",
        GOODBREAK: "goodbreak",
        BADBREAK: "badbreak",
      }),
      (n.LineBreakStyle = {
        BEFORE: "before",
        AFTER: "after",
        DUPLICATE: "duplicate",
        INFIXLINBREAKSTYLE: "infixlinebreakstyle",
      }),
      (n.IndentAlign = {
        LEFT: "left",
        CENTER: "center",
        RIGHT: "right",
        AUTO: "auto",
        ID: "id",
        INDENTALIGN: "indentalign",
      }),
      (n.IndentShift = { INDENTSHIFT: "indentshift" }),
      (n.LineThickness = { THIN: "thin", MEDIUM: "medium", THICK: "thick" }),
      (n.Notation = {
        LONGDIV: "longdiv",
        ACTUARIAL: "actuarial",
        PHASORANGLE: "phasorangle",
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
        VERTICALSTRIKE: "verticalstrike",
        HORIZONTALSTRIKE: "horizontalstrike",
        NORTHEASTARROW: "northeastarrow",
        MADRUWB: "madruwb",
        UPDIAGONALARROW: "updiagonalarrow",
      }),
      (n.Align = {
        TOP: "top",
        BOTTOM: "bottom",
        CENTER: "center",
        BASELINE: "baseline",
        AXIS: "axis",
        LEFT: "left",
        RIGHT: "right",
      }),
      (n.Lines = { NONE: "none", SOLID: "solid", DASHED: "dashed" }),
      (n.Side = {
        LEFT: "left",
        RIGHT: "right",
        LEFTOVERLAP: "leftoverlap",
        RIGHTOVERLAP: "rightoverlap",
      }),
      (n.Width = { AUTO: "auto", FIT: "fit" }),
      (n.Actiontype = {
        TOGGLE: "toggle",
        STATUSLINE: "statusline",
        TOOLTIP: "tooltip",
        INPUT: "input",
      }),
      (n.Length = {
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
      }),
      (n.Overflow = {
        LINBREAK: "linebreak",
        SCROLL: "scroll",
        ELIDE: "elide",
        TRUNCATE: "truncate",
        SCALE: "scale",
      }),
      (n.Unit = {
        EM: "em",
        EX: "ex",
        PX: "px",
        IN: "in",
        CM: "cm",
        MM: "mm",
        PT: "pt",
        PC: "pc",
      });
  },
  function (t, e, r) {
    "use strict";
    var n,
      a,
      o,
      c =
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
      u =
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (a = n = e.MapHandler || (e.MapHandler = {})),
      (o = new Map()),
      (a.register = function (t) {
        o.set(t.name, t);
      }),
      (a.getMap = function (t) {
        return o.get(t);
      }),
      (e.ExtensionMaps = {
        NEW_MACRO: "new-Macro",
        NEW_DELIMITER: "new-Delimiter",
        NEW_COMMAND: "new-Command",
        NEW_ENVIRONMENT: "new-Environment",
      });
    var s =
      ((i.prototype.add = function (t) {
        var e = n.getMap(t);
        e
          ? this._configuration.push(e)
          : this.warn("Configuration " + t + " not found! Omitted.");
      }),
      (i.prototype.parse = function (t) {
        var e, r;
        try {
          for (
            var n = c(this._configuration), a = n.next();
            !a.done;
            a = n.next()
          ) {
            var o = a.value.parse(t);
            if (o) return o;
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            a && !a.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        var i = u(t, 2),
          s = i[0],
          l = i[1];
        this._fallback(s, l);
      }),
      (i.prototype.lookup = function (t) {
        var e = this.applicable(t);
        return e ? e.lookup(t) : null;
      }),
      (i.prototype.contains = function (t) {
        return !!this.applicable(t);
      }),
      (i.prototype.toString = function () {
        return this._configuration
          .map(function (t) {
            return t.name;
          })
          .join(", ");
      }),
      (i.prototype.applicable = function (t) {
        var e, r;
        try {
          for (
            var n = c(this._configuration), a = n.next();
            !a.done;
            a = n.next()
          ) {
            var o = a.value;
            if (o.contains(t)) return o;
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            a && !a.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        return null;
      }),
      (i.prototype.retrieve = function (e) {
        return this._configuration.find(function (t) {
          return t.name === e;
        });
      }),
      (i.prototype.warn = function (t) {
        console.log("TexParser Warning: " + t);
      }),
      i);
    function i(t, e) {
      var r, n;
      (this._fallback = e), (this._configuration = []);
      try {
        for (var a = c(t), o = a.next(); !o.done; o = a.next()) {
          var i = o.value;
          this.add(i);
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (r) throw r.error;
        }
      }
    }
    e.SubHandler = s;
    var l =
      ((p.prototype.set = function (t, e) {
        this.map.set(t, e);
      }),
      (p.prototype.get = function (t) {
        return this.map.get(t);
      }),
      (p.prototype.retrieve = function (t) {
        var e, r;
        try {
          for (
            var n = c(this.map.values()), a = n.next();
            !a.done;
            a = n.next()
          ) {
            var o = a.value.retrieve(t);
            if (o) return o;
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            a && !a.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        return null;
      }),
      (p.prototype.keys = function () {
        return this.map.keys();
      }),
      p);
    function p(t) {
      var e, r;
      this.map = new Map();
      try {
        for (
          var n = c(Object.keys(t.handler)), a = n.next();
          !a.done;
          a = n.next()
        ) {
          var o = a.value,
            i = new s(t.handler[o] || [], t.fallback[o]);
          this.set(o, i);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    e.SubHandlers = l;
  },
  function (t, e, r) {
    "use strict";
    var f =
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
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var d = r(18),
      p = r(3),
      h = r(2),
      c = r(6),
      m = r(7),
      g = r(4),
      y = r(5),
      s = r(15),
      o = r(11);
    r(30), r(78), r(79);
    var a = {},
      u = {
        fontfamily: 1,
        fontsize: 1,
        fontweight: 1,
        fontstyle: 1,
        color: 1,
        background: 1,
        id: 1,
        class: 1,
        href: 1,
        style: 1,
      };
    function i(t, e) {
      var r = t.stack.env,
        n = r.inRoot;
      r.inRoot = !0;
      var a = new c.default(e, r, t.configuration),
        o = a.mml(),
        i = a.stack.global;
      if (i.leftRoot || i.upRoot) {
        var s = {};
        i.leftRoot && (s.width = i.leftRoot),
          i.upRoot && ((s.voffset = i.upRoot), (s.height = i.upRoot)),
          (o = t.create("node", "mpadded", [o], s));
      }
      return (r.inRoot = n), o;
    }
    (a.Open = function (t, e) {
      t.Push(t.itemFactory.create("open"));
    }),
      (a.Close = function (t, e) {
        t.Push(t.itemFactory.create("close"));
      }),
      (a.Tilde = function (t, e) {
        t.Push(t.create("token", "mtext", {}, o.entities.nbsp));
      }),
      (a.Space = function (t, e) {}),
      (a.Superscript = function (t, e) {
        var r, n, a;
        t.GetNext().match(/\d/) &&
          (t.string =
            t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1));
        var o = t.stack.Top();
        o.isKind("prime")
          ? ((a = (r = f(o.Peek(2), 2))[0]), (n = r[1]), t.stack.Pop())
          : (a = (a = t.stack.Prev()) || t.create("token", "mi", {}, ""));
        var i = p.default.getProperty(a, "movesupsub"),
          s = p.default.isType(a, "msubsup") ? a.sup : a.over;
        if (
          (p.default.isType(a, "msubsup") &&
            !p.default.isType(a, "msup") &&
            p.default.getChildAt(a, a.sup)) ||
          (p.default.isType(a, "munderover") &&
            !p.default.isType(a, "mover") &&
            p.default.getChildAt(a, a.over) &&
            !p.default.getProperty(a, "subsupOK"))
        )
          throw new h.default(
            "DoubleExponent",
            "Double exponent: use braces to clarify"
          );
        (p.default.isType(a, "msubsup") && !p.default.isType(a, "msup")) ||
          (s = i
            ? ((p.default.isType(a, "munderover") &&
                !p.default.isType(a, "mover") &&
                !p.default.getChildAt(a, a.over)) ||
                (p.default.getProperty(a, "movablelimits") &&
                  p.default.isType(a, "mi") &&
                  (a = g.default.mi2mo(t, a)),
                (a = t.create("node", "munderover", [a], { movesupsub: !0 }))),
              a.over)
            : (a = t.create("node", "msubsup", [a])).sup),
          t.Push(
            t.itemFactory
              .create("subsup", a)
              .setProperties({ position: s, primes: n, movesupsub: i })
          );
      }),
      (a.Subscript = function (t, e) {
        var r, n, a;
        t.GetNext().match(/\d/) &&
          (t.string =
            t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1));
        var o = t.stack.Top();
        o.isKind("prime")
          ? ((a = (r = f(o.Peek(2), 2))[0]), (n = r[1]), t.stack.Pop())
          : (a = (a = t.stack.Prev()) || t.create("token", "mi", {}, ""));
        var i = p.default.getProperty(a, "movesupsub"),
          s = p.default.isType(a, "msubsup") ? a.sub : a.under;
        if (
          (p.default.isType(a, "msubsup") &&
            !p.default.isType(a, "msup") &&
            p.default.getChildAt(a, a.sub)) ||
          (p.default.isType(a, "munderover") &&
            !p.default.isType(a, "mover") &&
            p.default.getChildAt(a, a.under) &&
            !p.default.getProperty(a, "subsupOK"))
        )
          throw new h.default(
            "DoubleSubscripts",
            "Double subscripts: use braces to clarify"
          );
        (p.default.isType(a, "msubsup") && !p.default.isType(a, "msup")) ||
          (s = i
            ? ((p.default.isType(a, "munderover") &&
                !p.default.isType(a, "mover") &&
                !p.default.getChildAt(a, a.under)) ||
                (p.default.getProperty(a, "movablelimits") &&
                  p.default.isType(a, "mi") &&
                  (a = g.default.mi2mo(t, a)),
                (a = t.create("node", "munderover", [a], { movesupsub: !0 }))),
              a.under)
            : (a = t.create("node", "msubsup", [a])).sub),
          t.Push(
            t.itemFactory
              .create("subsup", a)
              .setProperties({ position: s, primes: n, movesupsub: i })
          );
      }),
      (a.Prime = function (t, e) {
        var r = t.stack.Prev();
        if (
          ((r = r || t.create("node", "mi")),
          p.default.isType(r, "msubsup") &&
            !p.default.isType(r, "msup") &&
            p.default.getChildAt(r, r.sup))
        )
          throw new h.default(
            "DoubleExponentPrime",
            "Prime causes double exponent: use braces to clarify"
          );
        var n = "";
        for (
          t.i--;
          (n += o.entities.prime),
            t.i++,
            "'" === (e = t.GetNext()) || e === o.entities.rquote;

        );
        n = ["", "\u2032", "\u2033", "\u2034", "\u2057"][n.length] || n;
        var a = t.create("token", "mo", {}, n);
        t.Push(t.itemFactory.create("prime", r, a));
      }),
      (a.Comment = function (t, e) {
        for (; t.i < t.string.length && "\n" !== t.string.charAt(t.i); ) t.i++;
      }),
      (a.Hash = function (t, e) {
        throw new h.default(
          "CantUseHash1",
          "You can't use 'macro parameter character #' in math mode"
        );
      }),
      (a.SetFont = function (t, e, r) {
        t.stack.env.font = r;
      }),
      (a.SetStyle = function (t, e, r, n, a) {
        (t.stack.env.style = r),
          (t.stack.env.level = a),
          t.Push(
            t.itemFactory
              .create("style")
              .setProperty("styles", { displaystyle: n, scriptlevel: a })
          );
      }),
      (a.SetSize = function (t, e, r) {
        (t.stack.env.size = r),
          t.Push(
            t.itemFactory
              .create("style")
              .setProperty("styles", { mathsize: r + "em" })
          );
      }),
      (a.Spacer = function (t, e, r) {
        var n = t.create("node", "mspace", [], { width: r }),
          a = t.create("node", "mstyle", [n], { scriptlevel: 0 });
        t.Push(a);
      }),
      (a.LeftRight = function (t, e) {
        var r = e.substr(1);
        t.Push(t.itemFactory.create(r).setProperty("delim", t.GetDelimiter(e)));
      }),
      (a.Middle = function (t, e) {
        var r = t.GetDelimiter(e),
          n = t.create("node", "TeXAtom", [], { texClass: y.TEXCLASS.CLOSE });
        if ((t.Push(n), !t.stack.Top().isKind("left")))
          throw new h.default(
            "MisplacedMiddle",
            "%1 must be within \\left and \\right",
            t.currentCS
          );
        (n = t.create("token", "mo", { stretchy: !0 }, r)),
          t.Push(n),
          (n = t.create("node", "TeXAtom", [], { texClass: y.TEXCLASS.OPEN })),
          t.Push(n);
      }),
      (a.NamedFn = function (t, e, r) {
        r = r || e.substr(1);
        var n = t.create("token", "mi", { texClass: y.TEXCLASS.OP }, r);
        t.Push(t.itemFactory.create("fn", n));
      }),
      (a.NamedOp = function (t, e, r) {
        r = (r = r || e.substr(1)).replace(/&thinsp;/, "\u2006");
        var n = t.create(
          "token",
          "mo",
          {
            movablelimits: !0,
            movesupsub: !0,
            form: m.TexConstant.Form.PREFIX,
            texClass: y.TEXCLASS.OP,
          },
          r
        );
        t.Push(n);
      }),
      (a.Limits = function (t, e, r) {
        var n = t.stack.Prev(!0);
        if (
          !n ||
          (p.default.getTexClass(p.default.getCoreMO(n)) !== y.TEXCLASS.OP &&
            null == p.default.getProperty(n, "movesupsub"))
        )
          throw new h.default(
            "MisplacedLimits",
            "%1 is allowed only on operators",
            t.currentCS
          );
        var a,
          o = t.stack.Top();
        p.default.isType(n, "munderover") && !r
          ? ((a = t.create("node", "msubsup")),
            p.default.copyChildren(n, a),
            (n = o.Last = a))
          : p.default.isType(n, "msubsup") &&
            r &&
            ((a = t.create("node", "munderover")),
            p.default.copyChildren(n, a),
            (n = o.Last = a)),
          p.default.setProperty(n, "movesupsub", !!r),
          p.default.setProperties(p.default.getCoreMO(n), {
            movablelimits: !1,
          }),
          (p.default.getAttribute(n, "movablelimits") ||
            p.default.getProperty(n, "movablelimits")) &&
            p.default.setProperties(n, { movablelimits: !1 });
      }),
      (a.Over = function (t, e, r, n) {
        var a = t.itemFactory.create("over").setProperty("name", t.currentCS);
        r || n
          ? (a.setProperty("open", r), a.setProperty("close", n))
          : e.match(/withdelims$/) &&
            (a.setProperty("open", t.GetDelimiter(e)),
            a.setProperty("close", t.GetDelimiter(e))),
          e.match(/^\\above/)
            ? a.setProperty("thickness", t.GetDimen(e))
            : (e.match(/^\\atop/) || r || n) && a.setProperty("thickness", 0),
          t.Push(a);
      }),
      (a.Frac = function (t, e) {
        var r = t.ParseArg(e),
          n = t.ParseArg(e),
          a = t.create("node", "mfrac", [r, n]);
        t.Push(a);
      }),
      (a.Sqrt = function (t, e) {
        var r = t.GetBrackets(e),
          n = t.GetArgument(e);
        "\\frac" === n &&
          (n += "{" + t.GetArgument(n) + "}{" + t.GetArgument(n) + "}");
        var a = new c.default(n, t.stack.env, t.configuration).mml();
        (a = r
          ? t.create("node", "mroot", [a, i(t, r)])
          : t.create("node", "msqrt", [a])),
          t.Push(a);
      }),
      (a.Root = function (t, e) {
        var r = t.GetUpTo(e, "\\of"),
          n = t.ParseArg(e),
          a = t.create("node", "mroot", [n, i(t, r)]);
        t.Push(a);
      }),
      (a.MoveRoot = function (t, e, r) {
        if (!t.stack.env.inRoot)
          throw new h.default(
            "MisplacedMoveRoot",
            "%1 can appear only within a root",
            t.currentCS
          );
        if (t.stack.global[r])
          throw new h.default(
            "MultipleMoveRoot",
            "Multiple use of %1",
            t.currentCS
          );
        var n = t.GetArgument(e);
        if (!n.match(/-?[0-9]+/))
          throw new h.default(
            "IntegerArg",
            "The argument to %1 must be an integer",
            t.currentCS
          );
        "-" !== (n = parseInt(n, 10) / 15 + "em").substr(0, 1) && (n = "+" + n),
          (t.stack.global[r] = n);
      }),
      (a.Accent = function (t, e, r, n) {
        var a = t.ParseArg(e),
          o = g.default.getFontDef(t);
        o.accent = !0;
        var i = p.default.createEntity(r),
          s = t.create("token", "mo", o, i);
        p.default.setAttribute(s, "stretchy", !!n);
        var l = p.default.isEmbellished(a) ? p.default.getCoreMO(a) : a;
        p.default.isType(l, "mo") &&
          p.default.setProperties(l, { movablelimits: !1 });
        var c = t.create("node", "munderover");
        p.default.setChild(c, 0, a),
          p.default.setChild(c, 1, null),
          p.default.setChild(c, 2, s);
        var u = t.create("node", "TeXAtom", [c]);
        t.Push(u);
      }),
      (a.UnderOver = function (t, e, r, n, a) {
        var o,
          i = t.ParseArg(e),
          s = p.default.getForm(i);
        ((s && s[3] && s[3].movablelimits) ||
          p.default.getProperty(i, "movablelimits")) &&
          p.default.setProperties(i, { movablelimits: !1 }),
          p.default.isType(i, "munderover") &&
            p.default.isEmbellished(i) &&
            (p.default.setProperties(p.default.getCoreMO(i), {
              lspace: 0,
              rspace: 0,
            }),
            (o = t.create("node", "mo", [], { rspace: 0 })),
            (i = t.create("node", "mrow", [o, i])));
        var l = t.create("node", "munderover", [i]),
          c = p.default.createEntity(r);
        (o = t.create("token", "mo", { stretchy: !0, accent: !a }, c)),
          p.default.setChild(l, "o" === e.charAt(1) ? l.over : l.under, o);
        var u = l;
        n &&
          (u = t.create("node", "TeXAtom", [l], {
            texClass: y.TEXCLASS.OP,
            movesupsub: !0,
          })),
          p.default.setProperty(u, "subsupOK", !0),
          t.Push(u);
      }),
      (a.Overset = function (t, e) {
        var r = t.ParseArg(e),
          n = t.ParseArg(e);
        (p.default.getAttribute(n, "movablelimits") ||
          p.default.getProperty(n, "movablelimits")) &&
          p.default.setProperties(n, { movablelimits: !1 });
        var a = t.create("node", "mover", [n, r]);
        t.Push(a);
      }),
      (a.Underset = function (t, e) {
        var r = t.ParseArg(e),
          n = t.ParseArg(e);
        (p.default.getAttribute(n, "movablelimits") ||
          p.default.getProperty(n, "movablelimits")) &&
          p.default.setProperties(n, { movablelimits: !1 });
        var a = t.create("node", "munder", [n, r]);
        t.Push(a);
      }),
      (a.TeXAtom = function (t, e, r) {
        var n,
          a,
          o,
          i = { texClass: r };
        if (r === y.TEXCLASS.OP) {
          i.movesupsub = i.movablelimits = !0;
          var s = t.GetArgument(e),
            l = s.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
          (a = l
            ? ((i.mathvariant = m.TexConstant.Variant.NORMAL),
              t.create("token", "mi", i, l[1]))
            : ((o = new c.default(s, t.stack.env, t.configuration).mml()),
              t.create("node", "TeXAtom", [o], i))),
            (n = t.itemFactory.create("fn", a));
        } else (o = t.ParseArg(e)), (n = t.create("node", "TeXAtom", [o], i));
        t.Push(n);
      }),
      (a.MmlToken = function (t, e) {
        var r,
          n = t.GetArgument(e),
          a = t.GetBrackets(e, "").replace(/^\s+/, ""),
          o = t.GetArgument(e),
          i = {};
        try {
          r = t.create("node", n);
        } catch (t) {
          r = null;
        }
        if (!r || !r.isToken)
          throw new h.default("NotMathMLToken", "%1 is not a token element", n);
        for (; "" !== a; ) {
          var s = a.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i);
          if (!s)
            throw new h.default(
              "InvalidMathMLAttr",
              "Invalid MathML attribute: %1",
              a
            );
          if (!r.attributes.hasDefault(s[1]) && !u[s[1]])
            throw new h.default(
              "UnknownAttrForElement",
              "%1 is not a recognized attribute for %2",
              s[1],
              n
            );
          var l = g.default.MmlFilterAttribute(
            t,
            s[1],
            s[2].replace(/^(['"])(.*)\1$/, "$2")
          );
          l &&
            ("true" === l.toLowerCase()
              ? (l = !0)
              : "false" === l.toLowerCase() && (l = !1),
            (i[s[1]] = l)),
            (a = a.substr(s[0].length));
        }
        var c = t.create("text", o);
        r.appendChild(c), p.default.setProperties(r, i), t.Push(r);
      }),
      (a.Strut = function (t, e) {
        var r = t.create("node", "mrow"),
          n = t.create("node", "mpadded", [r], {
            height: "8.6pt",
            depth: "3pt",
            width: 0,
          });
        t.Push(n);
      }),
      (a.Phantom = function (t, e, r, n) {
        var a = t.create("node", "mphantom", [t.ParseArg(e)]);
        (r || n) &&
          ((a = t.create("node", "mpadded", [a])),
          n &&
            (p.default.setAttribute(a, "height", 0),
            p.default.setAttribute(a, "depth", 0)),
          r && p.default.setAttribute(a, "width", 0));
        var o = t.create("node", "TeXAtom", [a]);
        t.Push(o);
      }),
      (a.Smash = function (t, e) {
        var r = g.default.trimSpaces(t.GetBrackets(e, "")),
          n = t.create("node", "mpadded", [t.ParseArg(e)]);
        switch (r) {
          case "b":
            p.default.setAttribute(n, "depth", 0);
            break;
          case "t":
            p.default.setAttribute(n, "height", 0);
            break;
          default:
            p.default.setAttribute(n, "height", 0),
              p.default.setAttribute(n, "depth", 0);
        }
        var a = t.create("node", "TeXAtom", [n]);
        t.Push(a);
      }),
      (a.Lap = function (t, e) {
        var r = t.create("node", "mpadded", [t.ParseArg(e)], { width: 0 });
        "\\llap" === e && p.default.setAttribute(r, "lspace", "-1width");
        var n = t.create("node", "TeXAtom", [r]);
        t.Push(n);
      }),
      (a.RaiseLower = function (t, e) {
        var r = t.GetDimen(e),
          n = t.itemFactory
            .create("position")
            .setProperties({ name: t.currentCS, move: "vertical" });
        "-" === r.charAt(0) &&
          ((r = r.slice(1)),
          (e = "raise" === e.substr(1) ? "\\lower" : "\\raise")),
          "\\lower" === e
            ? (n.setProperty("dh", "-" + r), n.setProperty("dd", "+" + r))
            : (n.setProperty("dh", "+" + r), n.setProperty("dd", "-" + r)),
          t.Push(n);
      }),
      (a.MoveLeftRight = function (t, e) {
        var r = t.GetDimen(e),
          n = "-" === r.charAt(0) ? r.slice(1) : "-" + r;
        if ("\\moveleft" === e) {
          var a = r;
          (r = n), (n = a);
        }
        t.Push(
          t.itemFactory
            .create("position")
            .setProperties({
              name: t.currentCS,
              move: "horizontal",
              left: t.create("node", "mspace", [], { width: r }),
              right: t.create("node", "mspace", [], { width: n }),
            })
        );
      }),
      (a.Hskip = function (t, e) {
        var r = t.create("node", "mspace", [], { width: t.GetDimen(e) });
        t.Push(r);
      }),
      (a.Rule = function (t, e, r) {
        var n = {
          width: t.GetDimen(e),
          height: t.GetDimen(e),
          depth: t.GetDimen(e),
        };
        "blank" !== r && (n.mathbackground = t.stack.env.color || "black");
        var a = t.create("node", "mspace", [], n);
        t.Push(a);
      }),
      (a.rule = function (t, e) {
        var r = t.GetBrackets(e),
          n = t.GetDimen(e),
          a = t.GetDimen(e),
          o = t.create("node", "mspace", [], {
            width: n,
            height: a,
            mathbackground: t.stack.env.color || "black",
          });
        r &&
          ((o = t.create("node", "mpadded", [o], { voffset: r })),
          r.match(/^\-/)
            ? (p.default.setAttribute(o, "height", r),
              p.default.setAttribute(o, "depth", "+" + r.substr(1)))
            : p.default.setAttribute(o, "height", "+" + r)),
          t.Push(o);
      }),
      (a.MakeBig = function (t, e, r, n) {
        var a = String((n *= 1.2 / 0.85)).replace(/(\.\d\d\d).+/, "$1") + "em",
          o = t.GetDelimiter(e, !0),
          i = t.create(
            "token",
            "mo",
            { minsize: a, maxsize: a, fence: !0, stretchy: !0, symmetric: !0 },
            o
          ),
          s = t.create("node", "TeXAtom", [i], { texClass: r });
        t.Push(s);
      }),
      (a.BuildRel = function (t, e) {
        var r = t.ParseUpTo(e, "\\over"),
          n = t.ParseArg(e),
          a = t.create("node", "munderover");
        p.default.setChild(a, 0, n),
          p.default.setChild(a, 1, null),
          p.default.setChild(a, 2, r);
        var o = t.create("node", "TeXAtom", [a], { texClass: y.TEXCLASS.REL });
        t.Push(o);
      }),
      (a.HBox = function (t, e, r) {
        t.PushAll(g.default.internalMath(t, t.GetArgument(e), r));
      }),
      (a.FBox = function (t, e) {
        var r = g.default.internalMath(t, t.GetArgument(e)),
          n = t.create("node", "menclose", r, { notation: "box" });
        t.Push(n);
      }),
      (a.Not = function (t, e) {
        t.Push(t.itemFactory.create("not"));
      }),
      (a.Dots = function (t, e) {
        var r = p.default.createEntity("2026"),
          n = p.default.createEntity("22EF"),
          a = t.create("token", "mo", { stretchy: !1 }, r),
          o = t.create("token", "mo", { stretchy: !1 }, n);
        t.Push(
          t.itemFactory.create("dots").setProperties({ ldots: a, cdots: o })
        );
      }),
      (a.Matrix = function (t, e, r, n, a, o, i, s, l, c) {
        var u = t.GetNext();
        if ("" === u)
          throw new h.default(
            "MissingArgFor",
            "Missing argument for %1",
            t.currentCS
          );
        "{" === u
          ? t.i++
          : ((t.string = u + "}" + t.string.slice(t.i + 1)), (t.i = 0));
        var p = t.itemFactory.create("array").setProperty("requireClose", !0);
        (p.arraydef = { rowspacing: i || "4pt", columnspacing: o || "1em" }),
          l && p.setProperty("isCases", !0),
          c && (p.setProperty("isNumbered", !0), (p.arraydef.side = c)),
          (r || n) && (p.setProperty("open", r), p.setProperty("close", n)),
          "D" === s && (p.arraydef.displaystyle = !0),
          null != a && (p.arraydef.columnalign = a),
          t.Push(p);
      }),
      (a.Entry = function (t, e) {
        if (
          (t.Push(
            t.itemFactory.create("cell").setProperties({ isEntry: !0, name: e })
          ),
          t.stack.Top().getProperty("isCases"))
        ) {
          for (
            var r = t.string, n = 0, a = -1, o = t.i, i = r.length;
            o < i;

          ) {
            var s = r.charAt(o);
            if ("{" === s) n++, o++;
            else if ("}" === s)
              0 === n ? (i = 0) : (0 === --n && a < 0 && (a = o - t.i), o++);
            else {
              if ("&" === s && 0 === n)
                throw new h.default(
                  "ExtraAlignTab",
                  "Extra alignment tab in \\cases text"
                );
              "\\" === s
                ? r.substr(o).match(/^((\\cr)[^a-zA-Z]|\\\\)/)
                  ? (i = 0)
                  : (o += 2)
                : o++;
            }
          }
          var l = r.substr(t.i, o - t.i);
          if (
            !l.match(/^\s*\\text[^a-zA-Z]/) ||
            a !== l.replace(/\s+$/, "").length - 1
          ) {
            var c = g.default.internalMath(t, l, 0);
            t.PushAll(c), (t.i = o);
          }
        }
      }),
      (a.Cr = function (t, e) {
        t.Push(
          t.itemFactory.create("cell").setProperties({ isCR: !0, name: e })
        );
      }),
      (a.CrLaTeX = function (t, e) {
        var r;
        if ("[" === t.string.charAt(t.i)) {
          var n = t.GetBrackets(e, ""),
            a = f(g.default.matchDimen(n), 3),
            o = a[0],
            i = a[1];
          a[2];
          if (n && !o)
            throw new h.default(
              "BracketMustBeDimension",
              "Bracket argument to %1 must be a dimension",
              t.currentCS
            );
          r = o + i;
        }
        t.Push(
          t.itemFactory
            .create("cell")
            .setProperties({ isCR: !0, name: e, linebreak: !0 })
        );
        var s,
          l = t.stack.Top();
        if (l instanceof d.ArrayItem) {
          if (r && l.arraydef.rowspacing) {
            var c = l.arraydef.rowspacing.split(/ /);
            if (!l.getProperty("rowspacing")) {
              var u = g.default.dimen2em(c[0]);
              l.setProperty("rowspacing", u);
            }
            for (
              var p = l.getProperty("rowspacing");
              c.length < l.table.length;

            )
              c.push(g.default.Em(p));
            (c[l.table.length - 1] = g.default.Em(
              Math.max(0, p + g.default.dimen2em(r))
            )),
              (l.arraydef.rowspacing = c.join(" "));
          }
        } else
          r && ((s = t.create("node", "mspace", [], { depth: r })), t.Push(s)),
            (s = t.create("node", "mspace", [], {
              linebreak: m.TexConstant.LineBreak.NEWLINE,
            })),
            t.Push(s);
      }),
      (a.HLine = function (t, e, r) {
        null == r && (r = "solid");
        var n = t.stack.Top();
        if (!(n instanceof d.ArrayItem) || n.Size())
          throw new h.default("Misplaced", "Misplaced %1", t.currentCS);
        if (n.table.length) {
          for (
            var a = n.arraydef.rowlines ? n.arraydef.rowlines.split(/ /) : [];
            a.length < n.table.length;

          )
            a.push("none");
          (a[n.table.length - 1] = r), (n.arraydef.rowlines = a.join(" "));
        } else n.frame.push("top");
      }),
      (a.HFill = function (t, e) {
        var r = t.stack.Top();
        if (!(r instanceof d.ArrayItem))
          throw new h.default(
            "UnsupportedHFill",
            "Unsupported use of %1",
            t.currentCS
          );
        r.hfill.push(r.Size());
      }),
      (a.BeginEnd = function (t, e) {
        var r = t.GetArgument(e);
        if (r.match(/\\/i))
          throw new h.default("InvalidEnv", "Invalid environment name '%1'", r);
        var n = t.configuration.handlers.get("environment").lookup(r);
        if (n && "\\end" === e) {
          if (!n.args[0]) {
            var a = t.itemFactory.create("end").setProperty("name", r);
            return void t.Push(a);
          }
          t.stack.env.closing = r;
        }
        if (++t.macroCount > t.configuration.options.maxMacros)
          throw new h.default(
            "MaxMacroSub2",
            "MathJax maximum substitution count exceeded; is there a recursive latex environment?"
          );
        t.parse("environment", [t, r]);
      }),
      (a.Array = function (t, e, r, n, a, o, i, s, l) {
        var c = ("c" + (a = a || t.GetArgument("\\begin{" + e.getName() + "}")))
          .replace(/[^clr|:]/g, "")
          .replace(/[^|:]([|:])+/g, "$1");
        a = (a = a
          .replace(/[^clr]/g, "")
          .split("")
          .join(" "))
          .replace(/l/g, "left")
          .replace(/r/g, "right")
          .replace(/c/g, "center");
        var u = t.itemFactory.create("array");
        return (
          (u.arraydef = {
            columnalign: a,
            columnspacing: o || "1em",
            rowspacing: i || "4pt",
          }),
          c.match(/[|:]/) &&
            (c.charAt(0).match(/[|:]/) &&
              (u.frame.push("left"), (u.dashed = ":" === c.charAt(0))),
            c.charAt(c.length - 1).match(/[|:]/) && u.frame.push("right"),
            (c = c.substr(1, c.length - 2)),
            (u.arraydef.columnlines = c
              .split("")
              .join(" ")
              .replace(/[^|: ]/g, "none")
              .replace(/\|/g, "solid")
              .replace(/:/g, "dashed"))),
          r && u.setProperty("open", t.convertDelimiter(r)),
          n && u.setProperty("close", t.convertDelimiter(n)),
          "D" === s
            ? (u.arraydef.displaystyle = !0)
            : s && (u.arraydef.displaystyle = !1),
          "S" === s && (u.arraydef.scriptlevel = 1),
          l && (u.arraydef.useHeight = !1),
          t.Push(e),
          u
        );
      }),
      (a.AlignedArray = function (t, e) {
        var r = t.GetBrackets("\\begin{" + e.getName() + "}"),
          n = a.Array(t, e);
        return g.default.setArrayAlign(n, r);
      }),
      (a.Equation = function (t, e, r) {
        return (
          t.Push(e),
          g.default.checkEqnEnv(t),
          t.itemFactory.create("equation", r).setProperty("name", e.getName())
        );
      }),
      (a.EqnArray = function (t, e, r, n, a, o) {
        t.Push(e),
          n && g.default.checkEqnEnv(t),
          (a = (a = a
            .replace(/[^clr]/g, "")
            .split("")
            .join(" "))
            .replace(/l/g, "left")
            .replace(/r/g, "right")
            .replace(/c/g, "center"));
        var i = t.itemFactory.create(
          "eqnarray",
          e.getName(),
          r,
          n,
          t.stack.global
        );
        return (
          (i.arraydef = {
            displaystyle: !0,
            columnalign: a,
            columnspacing: o || "1em",
            rowspacing: "3pt",
            side: t.options.tagSide,
            minlabelspacing: t.options.tagIndent,
          }),
          i
        );
      }),
      (a.HandleNoTag = function (t, e) {
        t.tags.notag();
      }),
      (a.HandleLabel = function (t, e) {
        t.stack.global;
        var r = t.GetArgument(e);
        if ("" !== r && !t.tags.refUpdate) {
          if (t.tags.label)
            throw new h.default("MultipleCommand", "Multiple %1", t.currentCS);
          if (
            ((t.tags.label = r),
            (t.tags.allLabels[r] || t.tags.labels[r]) &&
              !t.options.ignoreDuplicateLabels)
          )
            throw new h.default(
              "MultipleLabel",
              "Label '%1' multiply defined",
              r
            );
          t.tags.labels[r] = new s.Label();
        }
      }),
      (a.HandleRef = function (t, e, r) {
        var n = t.GetArgument(e),
          a = t.tags.allLabels[n] || t.tags.labels[n];
        a || (t.tags.refUpdate || (t.tags.redo = !0), (a = new s.Label()));
        var o = a.tag;
        r && (o = t.tags.formatTag(o));
        var i = t.create("node", "mrow", g.default.internalMath(t, o), {
          href: t.tags.formatUrl(a.id, t.options.baseURL),
          class: "MathJax_ref",
        });
        t.Push(i);
      }),
      (a.Macro = function (t, e, r, n, a) {
        if (n) {
          var o = [];
          if (null != a) {
            var i = t.GetBrackets(e);
            o.push(null == i ? a : i);
          }
          for (var s = o.length; s < n; s++) o.push(t.GetArgument(e));
          r = g.default.substituteArgs(t, o, r);
        }
        if (
          ((t.string = g.default.addArgs(t, r, t.string.slice(t.i))),
          (t.i = 0),
          ++t.macroCount > t.configuration.options.maxMacros)
        )
          throw new h.default(
            "MaxMacroSub1",
            "MathJax maximum macro substitution count exceeded; is there a recursive macro call?"
          );
      }),
      (a.MathChoice = function (t, e) {
        var r = t.ParseArg(e),
          n = t.ParseArg(e),
          a = t.ParseArg(e),
          o = t.ParseArg(e);
        t.Push(t.create("node", "mathchoice", [r, n, a, o]));
      }),
      (e.default = a);
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
      (e.options = MathJax._.util.Entities.options),
      (e.entities = MathJax._.util.Entities.entities),
      (e.add = MathJax._.util.Entities.add),
      (e.remove = MathJax._.util.Entities.remove),
      (e.translate = MathJax._.util.Entities.translate),
      (e.numeric = MathJax._.util.Entities.numeric);
  },
  function (t, e, r) {
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
      i =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(o(arguments[e]));
          return t;
        },
      s =
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l = r(2),
      c =
        (Object.defineProperty(u.prototype, "nodes", {
          get: function () {
            return this._nodes;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.Push = function () {
          for (var t, e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
          (t = this._nodes).push.apply(t, i(e));
        }),
        (u.prototype.Pop = function () {
          return this._nodes.pop();
        }),
        Object.defineProperty(u.prototype, "First", {
          get: function () {
            return this._nodes[this.Size() - 1];
          },
          set: function (t) {
            this._nodes[this.Size() - 1] = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "Last", {
          get: function () {
            return this._nodes[0];
          },
          set: function (t) {
            this._nodes[0] = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.Peek = function (t) {
          return null == t && (t = 1), this._nodes.slice(this.Size() - t);
        }),
        (u.prototype.Size = function () {
          return this._nodes.length;
        }),
        (u.prototype.Clear = function () {
          this._nodes = [];
        }),
        (u.prototype.toMml = function (t, e) {
          return (
            void 0 === t && (t = !0),
            1 !== this._nodes.length || e
              ? this.create(
                  "node",
                  t ? "inferredMrow" : "mrow",
                  this._nodes,
                  {}
                )
              : this.First
          );
        }),
        (u.prototype.create = function (t) {
          for (var e, r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n];
          return (e = this.factory.configuration.nodeFactory).create.apply(
            e,
            i([t], r)
          );
        }),
        u);
    function u(t) {
      this._nodes = t;
    }
    e.MmlStack = c;
    var p,
      f =
        (a(d, (p = c)),
        Object.defineProperty(d.prototype, "kind", {
          get: function () {
            return "base";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(d.prototype, "env", {
          get: function () {
            return this._env;
          },
          set: function (t) {
            this._env = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (d.prototype.getProperty = function (t) {
          return this._properties[t];
        }),
        (d.prototype.setProperty = function (t, e) {
          return (this._properties[t] = e), this;
        }),
        Object.defineProperty(d.prototype, "isOpen", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(d.prototype, "isClose", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(d.prototype, "isFinal", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (d.prototype.isKind = function (t) {
          return t === this.kind;
        }),
        (d.prototype.checkItem = function (t) {
          if (
            (t.isKind("over") &&
              this.isOpen &&
              (t.setProperty("num", this.toMml(!1)), this.Clear()),
            t.isKind("cell") && this.isOpen)
          ) {
            if (t.getProperty("linebreak")) return d.fail;
            throw new l.default("Misplaced", "Misplaced %1", t.getName());
          }
          if (t.isClose && this.getErrors(t.kind)) {
            var e = o(this.getErrors(t.kind), 2),
              r = e[0],
              n = e[1];
            throw new l.default(r, n, t.getName());
          }
          return t.isFinal ? (this.Push(t.First), d.fail) : d.success;
        }),
        (d.prototype.clearEnv = function () {
          var e, t;
          try {
            for (
              var r = s(Object.keys(this.env)), n = r.next();
              !n.done;
              n = r.next()
            ) {
              var a = n.value;
              delete this.env[a];
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              n && !n.done && (t = r.return) && t.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (d.prototype.setProperties = function (t) {
          return Object.assign(this._properties, t), this;
        }),
        (d.prototype.getName = function () {
          return this.getProperty("name");
        }),
        (d.prototype.toString = function () {
          return this.kind + "[" + this.nodes.join("; ") + "]";
        }),
        (d.prototype.getErrors = function (t) {
          return (this.constructor.errors || {})[t] || d.errors[t];
        }),
        (d.fail = [null, !1]),
        (d.success = [null, !0]),
        (d.errors = {
          end: [
            "MissingBeginExtraEnd",
            "Missing \\begin{%1} or extra \\end{%1}",
          ],
          close: [
            "ExtraCloseMissingOpen",
            "Extra close brace or missing open brace",
          ],
          right: ["MissingLeftExtraRight", "Missing \\left or extra \\right"],
        }),
        d);
    function d(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      var n = p.call(this, e) || this;
      return (
        (n.factory = t),
        (n.global = {}),
        (n._properties = {}),
        n.isOpen && (n._env = {}),
        n
      );
    }
    e.BaseItem = f;
  },
  function (t, e, r) {
    "use strict";
    var n =
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
      i =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a,
      o,
      s = r(3),
      l = r(7),
      c = r(4);
    ((o = a = a || {}).variable = function (t, e) {
      var r = c.default.getFontDef(t),
        n = t.create("token", "mi", r, e);
      t.Push(n);
    }),
      (o.digit = function (t, e) {
        var r,
          n = t.configuration.options.digits,
          a = t.string.slice(t.i - 1).match(n),
          o = c.default.getFontDef(t);
        a
          ? ((r = t.create("token", "mn", o, a[0].replace(/[{}]/g, ""))),
            (t.i += a[0].length - 1))
          : (r = t.create("token", "mo", o, e)),
          t.Push(r);
      }),
      (o.controlSequence = function (t, e) {
        var r = t.GetCS();
        t.parse("macro", [t, r]);
      }),
      (o.mathchar0mi = function (t, e) {
        var r = e.attributes || { mathvariant: l.TexConstant.Variant.ITALIC },
          n = t.create("token", "mi", r, e.char);
        t.Push(n);
      }),
      (o.mathchar0mo = function (t, e) {
        var r = e.attributes || {};
        r.stretchy = !1;
        var n = t.create("token", "mo", r, e.char);
        s.default.setProperty(n, "fixStretchy", !0),
          t.configuration.addNode("fixStretchy", n),
          t.Push(n);
      }),
      (o.mathchar7 = function (t, e) {
        var r = e.attributes || { mathvariant: l.TexConstant.Variant.NORMAL };
        t.stack.env.font && (r.mathvariant = t.stack.env.font);
        var n = t.create("token", "mi", r, e.char);
        t.Push(n);
      }),
      (o.delimiter = function (t, e) {
        var r = e.attributes || {};
        r = Object.assign({ fence: !1, stretchy: !1 }, r);
        var n = t.create("token", "mo", r, e.char);
        t.Push(n);
      }),
      (o.environment = function (t, e, r, n) {
        var a = n[0],
          o = t.itemFactory.create("begin").setProperties({ name: e, end: a });
        (o = r.apply(void 0, i([t, o], n.slice(1)))), t.Push(o);
      }),
      (e.default = a);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
      (Object.defineProperty(a.prototype, "symbol", {
        get: function () {
          return this._symbol;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(a.prototype, "char", {
        get: function () {
          return this._char;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(a.prototype, "attributes", {
        get: function () {
          return this._attributes;
        },
        enumerable: !0,
        configurable: !0,
      }),
      a);
    function a(t, e, r) {
      (this._symbol = t), (this._char = e), (this._attributes = r);
    }
    e.Symbol = n;
    var o =
      (Object.defineProperty(i.prototype, "symbol", {
        get: function () {
          return this._symbol;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(i.prototype, "func", {
        get: function () {
          return this._func;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(i.prototype, "args", {
        get: function () {
          return this._args;
        },
        enumerable: !0,
        configurable: !0,
      }),
      i);
    function i(t, e, r) {
      void 0 === r && (r = []),
        (this._symbol = t),
        (this._func = e),
        (this._args = r);
    }
    e.Macro = o;
  },
  function (t, e, r) {
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
      i =
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(6),
      s = function (t, e) {
        void 0 === t && (t = "???"),
          void 0 === e && (e = ""),
          (this.tag = t),
          (this.id = e);
      };
    e.Label = s;
    var l = function (t, e, r, n, a, o, i, s) {
      void 0 === t && (t = ""),
        void 0 === e && (e = !1),
        void 0 === r && (r = !1),
        void 0 === n && (n = null),
        void 0 === a && (a = ""),
        void 0 === o && (o = ""),
        void 0 === i && (i = !1),
        void 0 === s && (s = ""),
        (this.env = t),
        (this.taggable = e),
        (this.defaultTags = r),
        (this.tag = n),
        (this.tagId = a),
        (this.tagFormat = o),
        (this.noTag = i),
        (this.labelId = s);
    };
    e.TagInfo = l;
    var c =
      ((u.prototype.start = function (t, e, r) {
        this.currentTag && this.stack.push(this.currentTag),
          (this.currentTag = new l(t, e, r));
      }),
      Object.defineProperty(u.prototype, "env", {
        get: function () {
          return this.currentTag.env;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (u.prototype.end = function () {
        this.history.push(this.currentTag),
          (this.currentTag = this.stack.pop());
      }),
      (u.prototype.tag = function (t, e) {
        (this.currentTag.tag = t),
          (this.currentTag.tagFormat = e ? t : this.formatTag(t)),
          (this.currentTag.noTag = !1);
      }),
      (u.prototype.notag = function () {
        this.tag("", !0), (this.currentTag.noTag = !0);
      }),
      Object.defineProperty(u.prototype, "noTag", {
        get: function () {
          return this.currentTag.noTag;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(u.prototype, "label", {
        get: function () {
          return this.currentTag.labelId;
        },
        set: function (t) {
          this.currentTag.labelId = t;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (u.prototype.formatUrl = function (t, e) {
        return e + "#" + encodeURIComponent(t);
      }),
      (u.prototype.formatTag = function (t) {
        return "(" + t + ")";
      }),
      (u.prototype.formatId = function (t) {
        return "mjx-eqn-" + t.replace(/\s/g, "_");
      }),
      (u.prototype.formatNumber = function (t) {
        return t.toString();
      }),
      (u.prototype.autoTag = function () {
        null == this.currentTag.tag &&
          (this.counter++, this.tag(this.formatNumber(this.counter), !1));
      }),
      (u.prototype.clearTag = function () {
        (this.label = ""), this.tag(null, !0), (this.currentTag.tagId = "");
      }),
      (u.prototype.getTag = function (t) {
        if ((void 0 === t && (t = !1), t))
          return this.autoTag(), this.makeTag();
        var e = this.currentTag;
        return e.taggable &&
          !e.noTag &&
          (e.defaultTags && this.autoTag(), e.tag)
          ? this.makeTag()
          : null;
      }),
      (u.prototype.resetTag = function () {
        (this.history = []),
          (this.redo = !1),
          (this.refUpdate = !1),
          this.clearTag();
      }),
      (u.prototype.reset = function (t) {
        void 0 === t && (t = 0),
          this.resetTag(),
          (this.counter = this.allCounter = t),
          (this.allLabels = {}),
          (this.allIds = {});
      }),
      (u.prototype.startEquation = function (t) {
        (this.labels = {}),
          (this.ids = {}),
          (this.counter = this.allCounter),
          (this.redo = !1);
        var e = t.inputData.recompile;
        e && ((this.refUpdate = !0), (this.counter = e.counter));
      }),
      (u.prototype.finishEquation = function (t) {
        this.redo &&
          (t.inputData.recompile = {
            state: t.state(),
            counter: this.allCounter,
          }),
          this.refUpdate || (this.allCounter = this.counter),
          Object.assign(this.allIds, this.ids),
          Object.assign(this.allLabels, this.labels);
      }),
      (u.prototype.finalize = function (t, e) {
        if (!e.display || this.currentTag.env || null == this.currentTag.tag)
          return t;
        var r = this.makeTag();
        return this.enTag(t, r);
      }),
      (u.prototype.makeId = function () {
        this.currentTag.tagId = this.formatId(
          (this.configuration.options.useLabelIds && this.label) ||
            this.currentTag.tag
        );
      }),
      (u.prototype.makeTag = function () {
        this.makeId(),
          this.label &&
            (this.labels[this.label] = new s(
              this.currentTag.tag,
              this.currentTag.tagId
            ));
        var t = new o.default(
          "\\text{" + this.currentTag.tagFormat + "}",
          {},
          this.configuration
        ).mml();
        return this.configuration.nodeFactory.create("node", "mtd", [t], {
          id: this.currentTag.tagId,
        });
      }),
      u);
    function u() {
      (this.counter = 0),
        (this.allCounter = 0),
        (this.configuration = null),
        (this.ids = {}),
        (this.allIds = {}),
        (this.labels = {}),
        (this.allLabels = {}),
        (this.redo = !1),
        (this.refUpdate = !1),
        (this.currentTag = new l()),
        (this.history = []),
        (this.stack = []),
        (this.enTag = function (t, e) {
          var r = this.configuration.nodeFactory,
            n = r.create("node", "mtd", [t]),
            a = r.create("node", "mlabeledtr", [e, n]);
          return r.create("node", "mtable", [a], {
            side: this.configuration.options.tagSide,
            minlabelspacing: this.configuration.options.tagIndent,
            displaystyle: !0,
          });
        });
    }
    e.AbstractTags = c;
    var p,
      f =
        (a(d, (p = c)),
        (d.prototype.autoTag = function () {}),
        (d.prototype.getTag = function () {
          return this.currentTag.tag ? p.prototype.getTag.call(this) : null;
        }),
        d);
    function d() {
      return (null !== p && p.apply(this, arguments)) || this;
    }
    e.NoTags = f;
    var h,
      m,
      g,
      y,
      v =
        (a(b, (h = c)),
        (b.prototype.finalize = function (t, e) {
          if (
            !e.display ||
            this.history.find(function (t) {
              return t.taggable;
            })
          )
            return t;
          var r = this.getTag(!0);
          return this.enTag(t, r);
        }),
        b);
    function b() {
      return (null !== h && h.apply(this, arguments)) || this;
    }
    (e.AllTags = v),
      (m = e.TagsFactory || (e.TagsFactory = {})),
      (g = new Map([
        ["none", f],
        ["all", v],
      ])),
      (y = "none"),
      (m.OPTIONS = {
        tags: y,
        tagSide: "right",
        tagIndent: "0.8em",
        multlineWidth: "85%",
        useLabelIds: !0,
        ignoreDuplicateLabels: !1,
      }),
      (m.add = function (t, e) {
        g.set(t, e);
      }),
      (m.addTags = function (t) {
        var e, r;
        try {
          for (var n = i(Object.keys(t)), a = n.next(); !a.done; a = n.next()) {
            var o = a.value;
            m.add(o, t[o]);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            a && !a.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (m.create = function (t) {
        return new (g.get(t) || this.defaultTags)();
      }),
      (m.setDefault = function (t) {
        y = t;
      }),
      (m.getDefault = function () {
        return m.create(y);
      });
  },
  function (t, e, r) {
    "use strict";
    var n =
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
      a =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var p = r(3),
      o =
        ((i.prototype.setMmlFactory = function (t) {
          this.mmlFactory = t;
        }),
        (i.createNode = function (t, e, r, n, a) {
          void 0 === r && (r = []), void 0 === n && (n = {});
          var o = t.mmlFactory.create(e),
            i = o.arity;
          if (i === 1 / 0 || -1 === i)
            1 === r.length && r[0].isInferred
              ? o.setChildren(p.default.getChildren(r[0]))
              : o.setChildren(r);
          else {
            for (var s = [], l = 0, c = void 0; (c = r[l]); l++)
              if (c.isInferred) {
                var u = t.mmlFactory.create(
                  "mrow",
                  {},
                  p.default.getChildren(c)
                );
                p.default.copyAttributes(c, u), s.push(u);
              } else s.push(c);
            o.setChildren(s);
          }
          return a && o.appendChild(a), p.default.setProperties(o, n), o;
        }),
        (i.createToken = function (t, e, r, n) {
          void 0 === r && (r = {}), void 0 === n && (n = "");
          var a = t.create("text", n);
          return t.create("node", e, [], r, a);
        }),
        (i.createText = function (t, e) {
          return null == e ? null : t.mmlFactory.create("text").setText(e);
        }),
        (i.createError = function (t, e) {
          var r = t.create("text", e),
            n = t.create("node", "mtext", [], {}, r);
          return t.create("node", "merror", [n]);
        }),
        (i.prototype.set = function (t, e) {
          this.factory[t] = e;
        }),
        (i.prototype.setCreators = function (t) {
          for (var e in t) this.set(e, t[e]);
        }),
        (i.prototype.create = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
          var n = (this.factory[t] || this.factory.node).apply(
            void 0,
            a([this, e[0]], e.slice(1))
          );
          return this.configuration.addNode(e[0], n), n;
        }),
        (i.prototype.get = function (t) {
          return this.factory[t];
        }),
        i);
    function i() {
      (this.mmlFactory = null),
        (this.factory = {
          node: i.createNode,
          token: i.createToken,
          text: i.createText,
          error: i.createError,
        });
    }
    e.NodeFactory = o;
  },
  function (t, e, r) {
    "use strict";
    var n,
      a,
      o =
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = r(0),
      s = r(8),
      l = r(2),
      c = r(3),
      u = r(1),
      p = r(18),
      f = r(15);
    function d(t, e) {
      var r = t.stack.env.font ? { mathvariant: t.stack.env.font } : {},
        n = s.MapHandler.getMap("remap").lookup(e),
        a = t.create("token", "mo", r, n ? n.char : e);
      c.default.setProperty(a, "fixStretchy", !0),
        t.configuration.addNode("fixStretchy", a),
        t.Push(a);
    }
    r(77),
      new u.CharacterMap("remap", null, {
        "-": "\u2212",
        "*": "\u2217",
        "`": "\u2018",
      }),
      (e.Other = d);
    var h,
      m = ((h = f.AbstractTags), o(g, h), g);
    function g() {
      return (null !== h && h.apply(this, arguments)) || this;
    }
    (e.BaseTags = m),
      (e.BaseConfiguration = i.Configuration.create("base", {
        handler: {
          character: ["command", "special", "letter", "digit"],
          delimiter: ["delimiter"],
          macro: [
            "delimiter",
            "macros",
            "mathchar0mi",
            "mathchar0mo",
            "mathchar7",
          ],
          environment: ["environment"],
        },
        fallback: {
          character: d,
          macro: function (t, e) {
            throw new l.default(
              "UndefinedControlSequence",
              "Undefined control sequence %1",
              "\\" + e
            );
          },
          environment: function (t, e) {
            throw new l.default("UnknownEnv", "Unknown environment '%1'", e);
          },
        },
        items:
          ((a = {}),
          (a[p.StartItem.prototype.kind] = p.StartItem),
          (a[p.StopItem.prototype.kind] = p.StopItem),
          (a[p.OpenItem.prototype.kind] = p.OpenItem),
          (a[p.CloseItem.prototype.kind] = p.CloseItem),
          (a[p.PrimeItem.prototype.kind] = p.PrimeItem),
          (a[p.SubsupItem.prototype.kind] = p.SubsupItem),
          (a[p.OverItem.prototype.kind] = p.OverItem),
          (a[p.LeftItem.prototype.kind] = p.LeftItem),
          (a[p.RightItem.prototype.kind] = p.RightItem),
          (a[p.BeginItem.prototype.kind] = p.BeginItem),
          (a[p.EndItem.prototype.kind] = p.EndItem),
          (a[p.StyleItem.prototype.kind] = p.StyleItem),
          (a[p.PositionItem.prototype.kind] = p.PositionItem),
          (a[p.CellItem.prototype.kind] = p.CellItem),
          (a[p.MmlItem.prototype.kind] = p.MmlItem),
          (a[p.FnItem.prototype.kind] = p.FnItem),
          (a[p.NotItem.prototype.kind] = p.NotItem),
          (a[p.DotsItem.prototype.kind] = p.DotsItem),
          (a[p.ArrayItem.prototype.kind] = p.ArrayItem),
          (a[p.EqnArrayItem.prototype.kind] = p.EqnArrayItem),
          (a[p.EquationItem.prototype.kind] = p.EquationItem),
          a),
        options: {
          maxMacros: 1e3,
          baseURL:
            "undefined" == typeof document ||
            0 === document.getElementsByTagName("base").length
              ? ""
              : String(document.location).replace(/#.*$/, ""),
        },
        tags: { base: m },
      }));
  },
  function (t, e, r) {
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
      i =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(o(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      l = r(8),
      c = r(11),
      u = r(5),
      p = r(2),
      f = r(4),
      d = r(3),
      h = r(12),
      m =
        ((s = h.BaseItem),
        a(g, s),
        Object.defineProperty(g.prototype, "kind", {
          get: function () {
            return "start";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(g.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (g.prototype.checkItem = function (t) {
          if (t.isKind("stop")) {
            var e = this.toMml();
            return (
              this.global.isInner ||
                (e = this.factory.configuration.tags.finalize(e, this.env)),
              [[this.factory.create("mml", e)], !0]
            );
          }
          return s.prototype.checkItem.call(this, t);
        }),
        g);
    function g(t, e) {
      var r = s.call(this, t) || this;
      return (r.global = e), r;
    }
    e.StartItem = m;
    var y,
      v =
        ((y = h.BaseItem),
        a(b, y),
        Object.defineProperty(b.prototype, "kind", {
          get: function () {
            return "stop";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(b.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        b);
    function b() {
      return (null !== y && y.apply(this, arguments)) || this;
    }
    e.StopItem = v;
    var x,
      _ =
        ((x = h.BaseItem),
        a(A, x),
        Object.defineProperty(A.prototype, "kind", {
          get: function () {
            return "open";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(A.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (A.prototype.checkItem = function (t) {
          if (t.isKind("close")) {
            var e = this.toMml(),
              r = this.create("node", "TeXAtom", [e]);
            return [[this.factory.create("mml", r)], !0];
          }
          return x.prototype.checkItem.call(this, t);
        }),
        (A.errors = Object.assign(Object.create(h.BaseItem.errors), {
          stop: [
            "ExtraOpenMissingClose",
            "Extra open brace or missing close brace",
          ],
        })),
        A);
    function A() {
      return (null !== x && x.apply(this, arguments)) || this;
    }
    e.OpenItem = _;
    var w,
      M =
        ((w = h.BaseItem),
        a(P, w),
        Object.defineProperty(P.prototype, "kind", {
          get: function () {
            return "close";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(P.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        P);
    function P() {
      return (null !== w && w.apply(this, arguments)) || this;
    }
    e.CloseItem = M;
    var C,
      S =
        ((C = h.BaseItem),
        a(T, C),
        Object.defineProperty(T.prototype, "kind", {
          get: function () {
            return "prime";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (T.prototype.checkItem = function (t) {
          var e = o(this.Peek(2), 2),
            r = e[0],
            n = e[1];
          return !d.default.isType(r, "msubsup") || d.default.isType(r, "msup")
            ? [[this.create("node", "msup", [r, n]), t], !0]
            : (d.default.setChild(r, r.sup, n), [[r, t], !0]);
        }),
        T);
    function T() {
      return (null !== C && C.apply(this, arguments)) || this;
    }
    e.PrimeItem = S;
    var k,
      O =
        ((k = h.BaseItem),
        a(E, k),
        Object.defineProperty(E.prototype, "kind", {
          get: function () {
            return "subsup";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (E.prototype.checkItem = function (t) {
          if (t.isKind("open") || t.isKind("left")) return h.BaseItem.success;
          var e = this.First,
            r = this.getProperty("position");
          if (t.isKind("mml")) {
            if (this.getProperty("primes"))
              if (2 !== r) d.default.setChild(e, 2, this.getProperty("primes"));
              else {
                d.default.setProperty(
                  this.getProperty("primes"),
                  "variantForm",
                  !0
                );
                var n = this.create("node", "mrow", [
                  this.getProperty("primes"),
                  t.First,
                ]);
                t.First = n;
              }
            return (
              d.default.setChild(e, r, t.First),
              null != this.getProperty("movesupsub") &&
                d.default.setProperty(
                  e,
                  "movesupsub",
                  this.getProperty("movesupsub")
                ),
              [[this.factory.create("mml", e)], !0]
            );
          }
          if (k.prototype.checkItem.call(this, t)[1]) {
            var a = this.getErrors(["", "sub", "sup"][r]);
            throw new (p.default.bind.apply(
              p.default,
              i([void 0, a[0], a[1]], a.splice(2))
            ))();
          }
        }),
        (E.errors = Object.assign(Object.create(h.BaseItem.errors), {
          stop: ["MissingScript", "Missing superscript or subscript argument"],
          sup: ["MissingOpenForSup", "Missing open brace for superscript"],
          sub: ["MissingOpenForSub", "Missing open brace for subscript"],
        })),
        E);
    function E() {
      return (null !== k && k.apply(this, arguments)) || this;
    }
    e.SubsupItem = O;
    var N,
      I =
        ((N = h.BaseItem),
        a(q, N),
        Object.defineProperty(q.prototype, "kind", {
          get: function () {
            return "over";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(q.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (q.prototype.checkItem = function (t) {
          if (t.isKind("over"))
            throw new p.default(
              "AmbiguousUseOf",
              "Ambiguous use of %1",
              t.getName()
            );
          if (t.isClose) {
            var e = this.create("node", "mfrac", [
              this.getProperty("num"),
              this.toMml(!1),
            ]);
            return (
              null != this.getProperty("thickness") &&
                d.default.setAttribute(
                  e,
                  "linethickness",
                  this.getProperty("thickness")
                ),
              (this.getProperty("open") || this.getProperty("close")) &&
                (d.default.setProperty(e, "withDelims", !0),
                (e = f.default.fixedFence(
                  this.factory.configuration,
                  this.getProperty("open"),
                  e,
                  this.getProperty("close")
                ))),
              [[this.factory.create("mml", e), t], !0]
            );
          }
          return N.prototype.checkItem.call(this, t);
        }),
        (q.prototype.toString = function () {
          return (
            "over[" +
            this.getProperty("num") +
            " / " +
            this.nodes.join("; ") +
            "]"
          );
        }),
        q);
    function q(t) {
      var e = N.call(this, t) || this;
      return e.setProperty("name", "\\over"), e;
    }
    e.OverItem = I;
    var L,
      F =
        ((L = h.BaseItem),
        a(B, L),
        Object.defineProperty(B.prototype, "kind", {
          get: function () {
            return "left";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(B.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (B.prototype.checkItem = function (t) {
          return t.isKind("right")
            ? [
                [
                  this.factory.create(
                    "mml",
                    f.default.fenced(
                      this.factory.configuration,
                      this.getProperty("delim"),
                      this.toMml(),
                      t.getProperty("delim")
                    )
                  ),
                ],
                !0,
              ]
            : L.prototype.checkItem.call(this, t);
        }),
        (B.errors = Object.assign(Object.create(h.BaseItem.errors), {
          stop: ["ExtraLeftMissingRight", "Extra \\left or missing \\right"],
        })),
        B);
    function B(t) {
      var e = L.call(this, t) || this;
      return e.setProperty("delim", "("), e;
    }
    e.LeftItem = F;
    var G,
      R =
        ((G = h.BaseItem),
        a(j, G),
        Object.defineProperty(j.prototype, "kind", {
          get: function () {
            return "right";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(j.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        j);
    function j(t) {
      var e = G.call(this, t) || this;
      return e.setProperty("delim", ")"), e;
    }
    e.RightItem = R;
    var D,
      $ =
        ((D = h.BaseItem),
        a(X, D),
        Object.defineProperty(X.prototype, "kind", {
          get: function () {
            return "begin";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(X.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (X.prototype.checkItem = function (t) {
          if (t.isKind("end")) {
            if (t.getName() !== this.getName())
              throw new p.default(
                "EnvBadEnd",
                "\\begin{%1} ended with \\end{%2}",
                this.getName(),
                t.getName()
              );
            return this.getProperty("end")
              ? h.BaseItem.fail
              : [[this.factory.create("mml", this.toMml())], !0];
          }
          if (t.isKind("stop"))
            throw new p.default(
              "EnvMissingEnd",
              "Missing \\end{%1}",
              this.getName()
            );
          return D.prototype.checkItem.call(this, t);
        }),
        X);
    function X() {
      return (null !== D && D.apply(this, arguments)) || this;
    }
    e.BeginItem = $;
    var V,
      H =
        ((V = h.BaseItem),
        a(z, V),
        Object.defineProperty(z.prototype, "kind", {
          get: function () {
            return "end";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(z.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        z);
    function z() {
      return (null !== V && V.apply(this, arguments)) || this;
    }
    e.EndItem = H;
    var U,
      K =
        ((U = h.BaseItem),
        a(J, U),
        Object.defineProperty(J.prototype, "kind", {
          get: function () {
            return "style";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (J.prototype.checkItem = function (t) {
          if (!t.isClose) return U.prototype.checkItem.call(this, t);
          var e = this.create(
            "node",
            "mstyle",
            this.nodes,
            this.getProperty("styles")
          );
          return [[this.factory.create("mml", e), t], !0];
        }),
        J);
    function J() {
      return (null !== U && U.apply(this, arguments)) || this;
    }
    e.StyleItem = K;
    var W,
      Q =
        ((W = h.BaseItem),
        a(Z, W),
        Object.defineProperty(Z.prototype, "kind", {
          get: function () {
            return "position";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (Z.prototype.checkItem = function (t) {
          if (t.isClose)
            throw new p.default(
              "MissingBoxFor",
              "Missing box for %1",
              this.getName()
            );
          if (t.isFinal) {
            var e = t.toMml();
            switch (this.getProperty("move")) {
              case "vertical":
                return (
                  (e = this.create("node", "mpadded", [e], {
                    height: this.getProperty("dh"),
                    depth: this.getProperty("dd"),
                    voffset: this.getProperty("dh"),
                  })),
                  [[this.factory.create("mml", e)], !0]
                );
              case "horizontal":
                return [
                  [
                    this.factory.create("mml", this.getProperty("left")),
                    t,
                    this.factory.create("mml", this.getProperty("right")),
                  ],
                  !0,
                ];
            }
          }
          return W.prototype.checkItem.call(this, t);
        }),
        Z);
    function Z() {
      return (null !== W && W.apply(this, arguments)) || this;
    }
    e.PositionItem = Q;
    var Y,
      tt =
        ((Y = h.BaseItem),
        a(et, Y),
        Object.defineProperty(et.prototype, "kind", {
          get: function () {
            return "cell";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(et.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        et);
    function et() {
      return (null !== Y && Y.apply(this, arguments)) || this;
    }
    e.CellItem = tt;
    var rt,
      nt =
        ((rt = h.BaseItem),
        a(at, rt),
        Object.defineProperty(at.prototype, "isFinal", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(at.prototype, "kind", {
          get: function () {
            return "mml";
          },
          enumerable: !0,
          configurable: !0,
        }),
        at);
    function at() {
      return (null !== rt && rt.apply(this, arguments)) || this;
    }
    e.MmlItem = nt;
    var ot,
      it =
        ((ot = h.BaseItem),
        a(st, ot),
        Object.defineProperty(st.prototype, "kind", {
          get: function () {
            return "fn";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (st.prototype.checkItem = function (t) {
          var e = this.First;
          if (e) {
            if (t.isOpen) return h.BaseItem.success;
            if (!t.isKind("fn")) {
              var r = t.First;
              if (!t.isKind("mml") || !r) return [[e, t], !0];
              if (
                (d.default.isType(r, "mstyle") &&
                  r.childNodes.length &&
                  d.default.isType(r.childNodes[0].childNodes[0], "mspace")) ||
                d.default.isType(r, "mspace")
              )
                return [[e, t], !0];
              d.default.isEmbellished(r) && (r = d.default.getCoreMO(r));
              var n = d.default.getForm(r);
              if (null != n && [0, 0, 1, 1, 0, 1, 1, 0, 0, 0][n[2]])
                return [[e, t], !0];
            }
            return [
              [
                e,
                this.create(
                  "token",
                  "mo",
                  { texClass: u.TEXCLASS.NONE },
                  c.entities.ApplyFunction
                ),
                t,
              ],
              !0,
            ];
          }
          return ot.prototype.checkItem.apply(this, arguments);
        }),
        st);
    function st() {
      return (null !== ot && ot.apply(this, arguments)) || this;
    }
    e.FnItem = it;
    var lt,
      ct =
        ((lt = h.BaseItem),
        a(ut, lt),
        Object.defineProperty(ut.prototype, "kind", {
          get: function () {
            return "not";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (ut.prototype.checkItem = function (t) {
          var e, r, n;
          if (t.isKind("open") || t.isKind("left")) return h.BaseItem.success;
          if (
            t.isKind("mml") &&
            (d.default.isType(t.First, "mo") ||
              d.default.isType(t.First, "mi") ||
              d.default.isType(t.First, "mtext")) &&
            ((e = t.First),
            1 === (r = d.default.getText(e)).length &&
              !d.default.getProperty(e, "movesupsub") &&
              1 === d.default.getChildren(e).length)
          )
            return (
              this.remap.contains(r)
                ? ((n = this.create("text", this.remap.lookup(r).char)),
                  d.default.setChild(e, 0, n))
                : ((n = this.create("text", "\u0338")),
                  d.default.appendChildren(e, [n])),
              [[t], !0]
            );
          n = this.create("text", "\u29f8");
          var a = this.create("node", "mtext", [], {}, n),
            o = this.create("node", "mpadded", [a], { width: 0 });
          return [
            [
              (e = this.create("node", "TeXAtom", [o], {
                texClass: u.TEXCLASS.REL,
              })),
              t,
            ],
            !0,
          ];
        }),
        ut);
    function ut() {
      var t = (null !== lt && lt.apply(this, arguments)) || this;
      return (t.remap = l.MapHandler.getMap("not_remap")), t;
    }
    e.NotItem = ct;
    var pt,
      ft =
        ((pt = h.BaseItem),
        a(dt, pt),
        Object.defineProperty(dt.prototype, "kind", {
          get: function () {
            return "dots";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (dt.prototype.checkItem = function (t) {
          if (t.isKind("open") || t.isKind("left")) return h.BaseItem.success;
          var e = this.getProperty("ldots"),
            r = t.First;
          if (t.isKind("mml") && d.default.isEmbellished(r)) {
            var n = d.default.getTexClass(d.default.getCoreMO(r));
            (n !== u.TEXCLASS.BIN && n !== u.TEXCLASS.REL) ||
              (e = this.getProperty("cdots"));
          }
          return [[e, t], !0];
        }),
        dt);
    function dt() {
      return (null !== pt && pt.apply(this, arguments)) || this;
    }
    e.DotsItem = ft;
    var ht,
      mt =
        ((ht = h.BaseItem),
        a(gt, ht),
        Object.defineProperty(gt.prototype, "kind", {
          get: function () {
            return "array";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(gt.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (gt.prototype.checkItem = function (t) {
          if (!t.isClose || t.isKind("over"))
            return ht.prototype.checkItem.call(this, t);
          if (t.getProperty("isEntry"))
            return this.EndEntry(), this.clearEnv(), h.BaseItem.fail;
          if (t.getProperty("isCR"))
            return (
              this.EndEntry(), this.EndRow(), this.clearEnv(), h.BaseItem.fail
            );
          this.EndTable(), this.clearEnv();
          var e = this.arraydef.scriptlevel;
          delete this.arraydef.scriptlevel;
          var r = this.create("node", "mtable", this.table, this.arraydef);
          4 === this.frame.length
            ? d.default.setAttribute(
                r,
                "frame",
                this.dashed ? "dashed" : "solid"
              )
            : this.frame.length &&
              (this.arraydef.rowlines &&
                (this.arraydef.rowlines = this.arraydef.rowlines.replace(
                  /none( none)+$/,
                  "none"
                )),
              (r = this.create("node", "menclose", [r], {
                notation: this.frame.join(" "),
                isFrame: !0,
              })),
              ("none" === (this.arraydef.columnlines || "none") &&
                "none" === (this.arraydef.rowlines || "none")) ||
                d.default.setAttribute(r, "padding", 0)),
            e && (r = this.create("node", "mstyle", [r], { scriptlevel: e })),
            (this.getProperty("open") || this.getProperty("close")) &&
              (r = f.default.fenced(
                this.factory.configuration,
                this.getProperty("open"),
                r,
                this.getProperty("close")
              ));
          var n = this.factory.create("mml", r);
          if (this.getProperty("requireClose")) {
            if (t.isKind("close")) return [[n], !0];
            throw new p.default("MissingCloseBrace", "Missing close brace");
          }
          return [[n, t], !0];
        }),
        (gt.prototype.EndEntry = function () {
          var t = this.create("node", "mtd", this.nodes);
          this.hfill.length &&
            (0 === this.hfill[0] &&
              d.default.setAttribute(t, "columnalign", "right"),
            this.hfill[this.hfill.length - 1] === this.Size() &&
              d.default.setAttribute(
                t,
                "columnalign",
                d.default.getAttribute(t, "columnalign") ? "center" : "left"
              )),
            this.row.push(t),
            this.Clear(),
            (this.hfill = []);
        }),
        (gt.prototype.EndRow = function () {
          var t;
          (t =
            this.getProperty("isNumbered") && 3 === this.row.length
              ? (this.row.unshift(this.row.pop()),
                this.create("node", "mlabeledtr", this.row))
              : this.create("node", "mtr", this.row)),
            this.table.push(t),
            (this.row = []);
        }),
        (gt.prototype.EndTable = function () {
          (this.Size() || this.row.length) && (this.EndEntry(), this.EndRow()),
            this.checkLines();
        }),
        (gt.prototype.checkLines = function () {
          if (this.arraydef.rowlines) {
            var t = this.arraydef.rowlines.split(/ /);
            t.length === this.table.length
              ? (this.frame.push("bottom"),
                t.pop(),
                (this.arraydef.rowlines = t.join(" ")))
              : t.length < this.table.length - 1 &&
                (this.arraydef.rowlines += " none");
          }
          if (this.getProperty("rowspacing")) {
            for (
              var e = this.arraydef.rowspacing.split(/ /);
              e.length < this.table.length;

            )
              e.push(this.getProperty("rowspacing") + "em");
            this.arraydef.rowspacing = e.join(" ");
          }
        }),
        gt);
    function gt() {
      var t = (null !== ht && ht.apply(this, arguments)) || this;
      return (
        (t.table = []),
        (t.row = []),
        (t.frame = []),
        (t.hfill = []),
        (t.arraydef = {}),
        (t.dashed = !1),
        t
      );
    }
    e.ArrayItem = mt;
    var yt,
      vt =
        (a(bt, (yt = mt)),
        Object.defineProperty(bt.prototype, "kind", {
          get: function () {
            return "eqnarray";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (bt.prototype.EndEntry = function () {
          this.row.length &&
            f.default.fixInitialMO(this.factory.configuration, this.nodes);
          var t = this.create("node", "mtd", this.nodes);
          this.row.push(t), this.Clear();
        }),
        (bt.prototype.EndRow = function () {
          var t = "mtr",
            e = this.factory.configuration.tags.getTag();
          e && ((this.row = [e].concat(this.row)), (t = "mlabeledtr")),
            this.factory.configuration.tags.clearTag();
          var r = this.create("node", t, this.row);
          this.table.push(r), (this.row = []);
        }),
        (bt.prototype.EndTable = function () {
          yt.prototype.EndTable.call(this),
            this.factory.configuration.tags.end();
        }),
        bt);
    function bt(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      var n = yt.call(this, t) || this;
      return n.factory.configuration.tags.start(e[0], e[2], e[1]), n;
    }
    e.EqnArrayItem = vt;
    var xt,
      _t =
        ((xt = h.BaseItem),
        a(At, xt),
        Object.defineProperty(At.prototype, "kind", {
          get: function () {
            return "equation";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(At.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (At.prototype.checkItem = function (t) {
          if (t.isKind("end")) {
            var e = this.toMml(),
              r = this.factory.configuration.tags.getTag();
            return (
              this.factory.configuration.tags.end(),
              [[r ? this.factory.configuration.tags.enTag(e, r) : e, t], !0]
            );
          }
          if (t.isKind("stop"))
            throw new p.default(
              "EnvMissingEnd",
              "Missing \\end{%1}",
              this.getName()
            );
          return xt.prototype.checkItem.call(this, t);
        }),
        At);
    function At(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      var n = xt.call(this, t) || this;
      return n.factory.configuration.tags.start("equation", !0, e[0]), n;
    }
    e.EquationItem = _t;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var f = r(4),
      d = r(3),
      c = r(7),
      h = r(6),
      m = r(2),
      o = r(14),
      i = r(8),
      u = r(9),
      g = r(5),
      y = {
        AmsEqnArray: function (t, e, r, n, a, o, i) {
          var s = t.GetBrackets("\\begin{" + e.getName() + "}"),
            l = u.default.EqnArray(t, e, r, n, a, o, i);
          return f.default.setArrayAlign(l, s);
        },
        AlignAt: function (t, e, r, n) {
          var a,
            o,
            i = e.getName(),
            s = "",
            l = [];
          if (
            (n || (o = t.GetBrackets("\\begin{" + i + "}")),
            (a = t.GetArgument("\\begin{" + i + "}")).match(/[^0-9]/))
          )
            throw new m.default(
              "PositiveIntegerArg",
              "Argument to %1 must me a positive integer",
              "\\begin{" + i + "}"
            );
          for (var c = parseInt(a, 10); 0 < c; )
            (s += "rl"), l.push("0em 0em"), c--;
          var u = l.join(" ");
          if (n) return y.EqnArray(t, e, r, n, s, u);
          var p = y.EqnArray(t, e, r, n, s, u);
          return f.default.setArrayAlign(p, o);
        },
        Multline: function (t, e, r) {
          t.Push(e), f.default.checkEqnEnv(t);
          var n = t.itemFactory.create("multline", r, t.stack);
          return (
            (n.arraydef = {
              displaystyle: !0,
              rowspacing: ".5em",
              columnwidth: "100%",
              width: t.options.multlineWidth,
              side: t.options.tagSide,
              minlabelspacing: t.options.tagIndent,
            }),
            n
          );
        },
        HandleDeclareOp: function (t, e) {
          var r = t.GetStar() ? "" : "\\nolimits\\SkipLimits",
            n = f.default.trimSpaces(t.GetArgument(e));
          "\\" === n.charAt(0) && (n = n.substr(1));
          var a = t.GetArgument(e);
          (a = a.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}")),
            t.configuration.handlers
              .retrieve(i.ExtensionMaps.NEW_COMMAND)
              .add(
                n,
                new o.Macro(n, y.Macro, ["\\mathop{\\rm " + a + "}" + r])
              );
        },
        HandleOperatorName: function (t, e) {
          var r = t.GetStar() ? "" : "\\nolimits\\SkipLimits",
            n = f.default.trimSpaces(t.GetArgument(e));
          (n = n.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}")),
            (t.string =
              "\\mathop{\\rm " + n + "}" + r + " " + t.string.slice(t.i)),
            (t.i = 0);
        },
        SkipLimits: function (t, e) {
          var r = t.GetNext(),
            n = t.i;
          "\\" === r && ++t.i && "limits" !== t.GetCS() && (t.i = n);
        },
        MultiIntegral: function (t, e, r) {
          var n = t.GetNext();
          if ("\\" === n) {
            var a = t.i;
            (n = t.GetArgument(e)),
              (t.i = a),
              "\\limits" === n &&
                (r =
                  "\\idotsint" === e
                    ? "\\!\\!\\mathop{\\,\\," + r + "}"
                    : "\\!\\!\\!\\mathop{\\,\\,\\," + r + "}");
          }
          (t.string = r + " " + t.string.slice(t.i)), (t.i = 0);
        },
        xArrow: function (t, e, r, n, a) {
          var o = { width: "+" + (n + a) + "mu", lspace: n + "mu" },
            i = t.GetBrackets(e),
            s = t.ParseArg(e),
            l = t.create(
              "token",
              "mo",
              { stretchy: !0, texClass: g.TEXCLASS.REL },
              String.fromCharCode(r)
            ),
            c = t.create("node", "munderover", [l]),
            u = t.create("node", "mpadded", [s], o);
          if (
            (d.default.setAttribute(u, "voffset", ".15em"),
            d.default.setChild(c, c.over, u),
            i)
          ) {
            var p = new h.default(i, t.stack.env, t.configuration).mml();
            (u = t.create("node", "mpadded", [p], o)),
              d.default.setAttribute(u, "voffset", "-.24em"),
              d.default.setChild(c, c.under, u);
          }
          d.default.setProperty(c, "subsupOK", !0), t.Push(c);
        },
        HandleShove: function (t, e, r) {
          var n = t.stack.Top();
          if ("multline" !== n.kind)
            throw new m.default(
              "CommandOnlyAllowedInEnv",
              "%1 only allowed in %2 environment",
              t.currentCS,
              "multline"
            );
          if (n.Size())
            throw new m.default(
              "CommandAtTheBeginingOfLine",
              "%1 must come at the beginning of the line",
              t.currentCS
            );
          n.setProperty("shove", r);
        },
        CFrac: function (t, e) {
          var r = f.default.trimSpaces(t.GetBrackets(e, "")),
            n = t.GetArgument(e),
            a = t.GetArgument(e),
            o = {
              l: c.TexConstant.Align.LEFT,
              r: c.TexConstant.Align.RIGHT,
              "": "",
            },
            i = new h.default(
              "\\strut\\textstyle{" + n + "}",
              t.stack.env,
              t.configuration
            ).mml(),
            s = new h.default(
              "\\strut\\textstyle{" + a + "}",
              t.stack.env,
              t.configuration
            ).mml(),
            l = t.create("node", "mfrac", [i, s]);
          if (null == (r = o[r]))
            throw new m.default(
              "IllegalAlign",
              "Illegal alignment specified in %1",
              t.currentCS
            );
          r && d.default.setProperties(l, { numalign: r, denomalign: r }),
            t.Push(l);
        },
        Genfrac: function (t, e, r, n, a, o) {
          null == r && (r = t.GetDelimiterArg(e)),
            null == n && (n = t.GetDelimiterArg(e)),
            null == a && (a = t.GetArgument(e)),
            null == o && (o = f.default.trimSpaces(t.GetArgument(e)));
          var i = t.ParseArg(e),
            s = t.ParseArg(e),
            l = t.create("node", "mfrac", [i, s]);
          if (
            ("" !== a && d.default.setAttribute(l, "linethickness", a),
            (r || n) &&
              (d.default.setProperty(l, "withDelims", !0),
              (l = f.default.fixedFence(t.configuration, r, l, n))),
            "" !== o)
          ) {
            var c = parseInt(o, 10),
              u = ["D", "T", "S", "SS"][c];
            if (null == u)
              throw new m.default(
                "BadMathStyleFor",
                "Bad math style for %1",
                t.currentCS
              );
            (l = t.create("node", "mstyle", [l])),
              "D" === u
                ? d.default.setProperties(l, {
                    displaystyle: !0,
                    scriptlevel: 0,
                  })
                : d.default.setProperties(l, {
                    displaystyle: !1,
                    scriptlevel: c - 1,
                  });
          }
          t.Push(l);
        },
        HandleTag: function (t, e) {
          if (!t.tags.currentTag.taggable && t.tags.env)
            throw new m.default(
              "CommandNotAllowedInEnv",
              "%1 not allowed in %2 environment",
              t.currentCS,
              t.tags.env
            );
          if (t.tags.currentTag.tag)
            throw new m.default("MultipleCommand", "Multiple %1", t.currentCS);
          var r = t.GetStar(),
            n = f.default.trimSpaces(t.GetArgument(e));
          t.tags.tag(n, r);
        },
      };
    (y.HandleNoTag = u.default.HandleNoTag),
      (y.HandleRef = u.default.HandleRef),
      (y.Macro = u.default.Macro),
      (y.Accent = u.default.Accent),
      (y.Tilde = u.default.Tilde),
      (y.Array = u.default.Array),
      (y.Spacer = u.default.Spacer),
      (y.NamedOp = u.default.NamedOp),
      (y.EqnArray = u.default.EqnArray),
      (e.default = y);
  },
  function (t, M, e) {
    "use strict";
    var r,
      s =
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
      P =
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
        };
    Object.defineProperty(M, "__esModule", { value: !0 });
    function l(t) {
      return (F.root = t), n.outputJax.getBBox(F, n).w;
    }
    function C(t) {
      for (var e = 0; t && !u.default.isType(t, "mtable"); ) {
        if (u.default.isType(t, "text")) return null;
        u.default.isType(t, "mrow")
          ? ((t = t.childNodes[0]), (e = 0))
          : ((t = t.parent.childNodes[e]), e++);
      }
      return t;
    }
    function S(t, e) {
      return t.childNodes["up" === e ? 1 : 0].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[0];
    }
    function T(t, e) {
      return t.childNodes[e].childNodes[0].childNodes[0];
    }
    function k(t) {
      return T(t, 0);
    }
    function O(t, e) {
      return t.childNodes["up" === e ? 0 : 1].childNodes[0].childNodes[0]
        .childNodes[0];
    }
    function E(t) {
      for (; t && !u.default.isType(t, "mtd"); ) t = t.parent;
      return t;
    }
    function N(t) {
      for (; t && null == M.getProperty(t, "inference"); ) t = t.parent;
      return t;
    }
    function I(t, e, r) {
      void 0 === r && (r = !1);
      var n = 0;
      if (t === e) return n;
      if (t !== e.parent) {
        var a = t.childNodes,
          o = r ? a.length - 1 : 0;
        u.default.isType(a[o], "mspace") && (n += l(a[o])), (t = e.parent);
      }
      if (t === e) return n;
      var i = t.childNodes,
        s = r ? i.length - 1 : 0;
      return i[s] !== e && (n += l(i[s])), n;
    }
    function q(t, e) {
      void 0 === e && (e = !1);
      var r = C(t),
        n = O(r, M.getProperty(r, "inferenceRule"));
      return I(t, r, e) + (l(r) - l(n)) / 2;
    }
    function L(t, e, r, n) {
      if (
        (void 0 === n && (n = !1),
        M.getProperty(e, "inferenceRule") || M.getProperty(e, "labelledRule"))
      ) {
        var a = t.nodeFactory.create("node", "mrow");
        e.parent.replaceChild(a, e), a.setChildren([e]), f(e, a), (e = a);
      }
      var o = n ? e.childNodes.length - 1 : 0,
        i = e.childNodes[o];
      u.default.isType(i, "mspace")
        ? u.default.setAttribute(
            i,
            "width",
            p.default.Em(
              p.default.dimen2em(u.default.getAttribute(i, "width")) + r
            )
          )
        : ((i = t.nodeFactory.create("node", "mspace", [], {
            width: p.default.Em(r),
          })),
          n ? e.appendChild(i) : (i.parent = e).childNodes.unshift(i));
    }
    function c(t, e, r, n, a) {
      var o = t.nodeFactory.create("node", "mspace", [], {
        width: p.default.Em(a),
      });
      if ("left" === n) {
        var i = e.childNodes[r].childNodes[0];
        (o.parent = i).childNodes.unshift(o);
      } else e.childNodes[r].appendChild(o);
      M.setProperty(e.parent, "sequentAdjust_" + n, a);
    }
    var u = e(3),
      p = e(4),
      n = null,
      F = null,
      f = function (r, n) {
        ["inference", "proof", "maxAdjust", "labelledRule"].forEach(function (
          t
        ) {
          var e = M.getProperty(r, t);
          null != e && (M.setProperty(n, t, e), M.removeProperty(r, t));
        });
      },
      B = function (t, e) {
        for (var r = e.pop(); e.length; ) {
          var n = e.pop(),
            a = s(d(r, n), 2),
            o = a[0],
            i = a[1];
          M.getProperty(r.parent, "axiom") &&
            (c(t, o < 0 ? r : n, 0, "left", Math.abs(o)),
            c(t, i < 0 ? r : n, 2, "right", Math.abs(i))),
            (r = n);
        }
      },
      d = function (t, e) {
        var r = l(t.childNodes[2]),
          n = l(e.childNodes[2]);
        return [l(t.childNodes[0]) - l(e.childNodes[0]), r - n];
      };
    M.balanceRules = function (t) {
      var e, r;
      F = new t.document.options.MathItem("", null, t.math.display);
      var n = t.data;
      !(function (t) {
        var e = t.nodeLists.sequent;
        if (e)
          for (var r = e.length - 1, n = void 0; (n = e[r]); r--)
            if (M.getProperty(n, "sequentProcessed"))
              M.removeProperty(n, "sequentProcessed");
            else {
              var a = [],
                o = N(n);
              if (1 === M.getProperty(o, "inference")) {
                for (a.push(n); 1 === M.getProperty(o, "inference"); ) {
                  o = C(o);
                  var i = k(S(o, M.getProperty(o, "inferenceRule"))),
                    s = M.getProperty(i, "inferenceRule")
                      ? O(i, M.getProperty(i, "inferenceRule"))
                      : i;
                  M.getProperty(s, "sequent") &&
                    ((n = s.childNodes[0]),
                    a.push(n),
                    M.setProperty(n, "sequentProcessed", !0)),
                    (o = i);
                }
                B(t, a);
              }
            }
      })(n);
      var a,
        o,
        i = n.nodeLists.inference || [];
      try {
        for (var s = P(i), l = s.next(); !l.done; l = s.next()) {
          var c = l.value,
            u = M.getProperty(c, "proof"),
            p = (M.getProperty(c, "labelledRule"), C(c)),
            f = S(p, M.getProperty(p, "inferenceRule")),
            d = k(f);
          if (M.getProperty(d, "inference")) {
            var h = q(d);
            if (h) {
              L(n, d, -h);
              var m = I(c, p, !1);
              L(n, c, h - m);
            }
          }
          var g = T((o = f), o.childNodes.length - 1);
          if (null != M.getProperty(g, "inference")) {
            var y = q(g, !0);
            L(n, g, -y, !0);
            var v = I(c, p, !0),
              b = M.getProperty(c, "maxAdjust");
            null != b && (y = Math.max(y, b));
            var x = void 0;
            if (!u && (x = E(c))) {
              var _ = (a = x).parent.childNodes[
                a.parent.childNodes.indexOf(a) + 1
              ];
              if (_) {
                var A = n.nodeFactory.create("node", "mspace", [], {
                  width: y - v + "em",
                });
                _.appendChild(A), c.removeProperty("maxAdjust");
              } else {
                var w = N(x);
                w &&
                  ((y = M.getProperty(w, "maxAdjust")
                    ? Math.max(M.getProperty(w, "maxAdjust"), y)
                    : y),
                  M.setProperty(w, "maxAdjust", y));
              }
            } else L(n, M.getProperty(c, "proof") ? c : c.parent, y - v, !0);
          }
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          l && !l.done && (r = s.return) && r.call(s);
        } finally {
          if (e) throw e.error;
        }
      }
    };
    var a = "bspr_",
      o = (((r = {}).bspr_maxAdjust = !0), r);
    (M.setProperty = function (t, e, r) {
      u.default.setProperty(t, a + e, r);
    }),
      (M.getProperty = function (t, e) {
        return u.default.getProperty(t, a + e);
      }),
      (M.removeProperty = function (t, e) {
        t.removeProperty(a + e);
      }),
      (M.makeBsprAttributes = function (t) {
        t.data.root.walkTree(function (e, t) {
          var r = [];
          e.getPropertyNames().forEach(function (t) {
            !o[t] &&
              t.match(RegExp("^" + a)) &&
              r.push(t + ":" + e.getProperty(t));
          }),
            r.length && u.default.setAttribute(e, "semantics", r.join(";"));
        });
      }),
      (M.saveDocument = function (t) {
        if (!("getBBox" in (n = t.document).outputJax))
          throw Error(
            "The bussproofs extension requires an output jax with a getBBox() method"
          );
      }),
      (M.clearDocument = function (t) {
        n = null;
      });
  },
  function (t, e, r) {
    "use strict";
    var u =
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
      p =
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
      f =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(p(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var d = r(3),
      n =
        (Object.defineProperty(a.prototype, "env", {
          get: function () {
            return this._env;
          },
          set: function (t) {
            this._env = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (a.prototype.Push = function () {
          for (var e, t, r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          try {
            for (var a = u(r), o = a.next(); !o.done; o = a.next()) {
              var i = o.value;
              if (i) {
                var s = d.default.isNode(i)
                  ? this._factory.create("mml", i)
                  : i;
                s.global = this.global;
                var l = p(
                    this.stack.length ? this.Top().checkItem(s) : [null, !0],
                    2
                  ),
                  c = l[0];
                l[1] &&
                  (c
                    ? (this.Pop(), this.Push.apply(this, f(c)))
                    : (this.stack.push(s),
                      s.env
                        ? (Object.assign(s.env, this.env), (this.env = s.env))
                        : (s.env = this.env)));
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (t = a.return) && t.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (a.prototype.Pop = function () {
          var t = this.stack.pop();
          return (
            t.isOpen || delete t.env,
            (this.env = this.stack.length ? this.Top().env : {}),
            t
          );
        }),
        (a.prototype.Top = function (t) {
          return (
            void 0 === t && (t = 1),
            this.stack.length < t ? null : this.stack[this.stack.length - t]
          );
        }),
        (a.prototype.Prev = function (t) {
          var e = this.Top();
          return t ? e.First : e.Pop();
        }),
        (a.prototype.toString = function () {
          return "stack[\n  " + this.stack.join("\n  ") + "\n]";
        }),
        a);
    function a(t, e, r) {
      (this._factory = t),
        (this._env = e),
        (this.global = {}),
        (this.stack = []),
        (this.global = { isInner: r }),
        (this.stack = [this._factory.create("start", this.global)]),
        e && (this.stack[0].env = e),
        (this.env = this.stack[0].env);
    }
    e.default = n;
  },
  function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = e(0),
      n = e(1),
      s = e(4);
    (i.ENCLOSE_OPTIONS = {
      "data-arrowhead": 1,
      color: 1,
      mathcolor: 1,
      background: 1,
      mathbackground: 1,
      "data-padding": 1,
      "data-thickness": 1,
    }),
      (i.EncloseMethods = {}),
      (i.EncloseMethods.Enclose = function (t, e) {
        var r = t.GetArgument(e).replace(/,/g, " "),
          n = t.GetBrackets(e, ""),
          a = t.ParseArg(e),
          o = s.default.keyvalOptions(n, i.ENCLOSE_OPTIONS);
        (o.notation = r), t.Push(t.create("node", "menclose", [a], o));
      }),
      new n.CommandMap("enclose", { enclose: "Enclose" }, i.EncloseMethods),
      (i.EncloseConfiguration = r.Configuration.create("enclose", {
        handler: { macro: ["enclose"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = r(2),
      u = r(1),
      n = r(9),
      p = r(4),
      f = r(24),
      d = {
        NewCommand: function (t, e) {
          var r = p.default.trimSpaces(t.GetArgument(e)),
            n = t.GetBrackets(e),
            a = t.GetBrackets(e),
            o = t.GetArgument(e);
          if (
            ("\\" === r.charAt(0) && (r = r.substr(1)),
            !r.match(/^(.|[a-z]+)$/i))
          )
            throw new c.default(
              "IllegalControlSequenceName",
              "Illegal control sequence name for %1",
              e
            );
          if (n && !(n = p.default.trimSpaces(n)).match(/^[0-9]+$/))
            throw new c.default(
              "IllegalParamNumber",
              "Illegal number of parameters specified in %1",
              e
            );
          f.default.addMacro(t, r, d.Macro, [o, n, a]);
        },
        NewEnvironment: function (t, e) {
          var r = p.default.trimSpaces(t.GetArgument(e)),
            n = t.GetBrackets(e),
            a = t.GetBrackets(e),
            o = t.GetArgument(e),
            i = t.GetArgument(e);
          if (n && !(n = p.default.trimSpaces(n)).match(/^[0-9]+$/))
            throw new c.default(
              "IllegalParamNumber",
              "Illegal number of parameters specified in %1",
              e
            );
          f.default.addEnvironment(t, r, d.BeginEnv, [!0, o, i, n, a]);
        },
        MacroDef: function (t, e) {
          var r = f.default.GetCSname(t, e),
            n = f.default.GetTemplate(t, e, "\\" + r),
            a = t.GetArgument(e);
          n instanceof Array
            ? f.default.addMacro(t, r, d.MacroWithTemplate, [a].concat(n))
            : f.default.addMacro(t, r, d.Macro, [a, n]);
        },
        Let: function (t, e) {
          var r = f.default.GetCSname(t, e),
            n = t.GetNext();
          "=" === n && (t.i++, (n = t.GetNext()));
          var a = t.configuration.handlers;
          if ("\\" !== n) {
            t.i++;
            var o = a.get("delimiter").lookup(n);
            o
              ? f.default.addDelimiter(t, "\\" + r, o.char, o.attributes)
              : f.default.addMacro(t, r, d.Macro, [n]);
          } else {
            e = f.default.GetCSname(t, e);
            var i = a.get("delimiter").lookup("\\" + e);
            if (i)
              return void f.default.addDelimiter(
                t,
                "\\" + r,
                i.char,
                i.attributes
              );
            var s = a.get("macro").applicable(e);
            if (!s) return;
            if (s instanceof u.MacroMap) {
              var l = s.lookup(e);
              return void f.default.addMacro(t, r, l.func, l.args, l.symbol);
            }
            i = s.lookup(e);
            var c = f.default.disassembleSymbol(r, i);
            f.default.addMacro(
              t,
              r,
              function (t, e) {
                for (var r = [], n = 2; n < arguments.length; n++)
                  r[n - 2] = arguments[n];
                var a = f.default.assembleSymbol(r);
                return s.parser(t, a);
              },
              c
            );
          }
        },
        MacroWithTemplate: function (t, e, r, n) {
          for (var a = [], o = 4; o < arguments.length; o++)
            a[o - 4] = arguments[o];
          var i = parseInt(n, 10);
          if (i) {
            var s = [];
            if ((t.GetNext(), a[0] && !f.default.MatchParam(t, a[0])))
              throw new c.default(
                "MismatchUseDef",
                "Use of %1 doesn't match its definition",
                e
              );
            for (var l = 0; l < i; l++)
              s.push(f.default.GetParameter(t, e, a[l + 1]));
            r = p.default.substituteArgs(t, s, r);
          }
          if (
            ((t.string = p.default.addArgs(t, r, t.string.slice(t.i))),
            (t.i = 0),
            ++t.macroCount > t.configuration.options.maxMacros)
          )
            throw new c.default(
              "MaxMacroSub1",
              "MathJax maximum macro substitution count exceeded; is here a recursive macro call?"
            );
        },
        BeginEnv: function (t, e, r, n, a, o) {
          if (e.getProperty("end") && t.stack.env.closing === e.getName()) {
            delete t.stack.env.closing;
            var i = t.string.slice(t.i);
            return (
              (t.string = n),
              (t.i = 0),
              t.Parse(),
              (t.string = i),
              (t.i = 0),
              t.itemFactory.create("end").setProperty("name", e.getName())
            );
          }
          if (a) {
            var s = [];
            if (null != o) {
              var l = t.GetBrackets("\\begin{" + e.getName() + "}");
              s.push(null == l ? o : l);
            }
            for (var c = s.length; c < a; c++)
              s.push(t.GetArgument("\\begin{" + e.getName() + "}"));
            (r = p.default.substituteArgs(t, s, r)),
              (n = p.default.substituteArgs(t, [], n));
          }
          return (
            (t.string = p.default.addArgs(t, r, t.string.slice(t.i))),
            (t.i = 0),
            t.itemFactory.create("beginEnv").setProperty("name", e.getName())
          );
        },
      };
    (d.Macro = n.default.Macro), (e.default = d);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n,
      a,
      o = r(4),
      l = r(2),
      i = r(14),
      s = r(8);
    function c(t, e) {
      return t.string.substr(t.i, e.length) !== e
        ? 0
        : e.match(/\\[a-z]+$/i) &&
          t.string.charAt(t.i + e.length).match(/[a-z]/i)
        ? 0
        : ((t.i += e.length), 1);
    }
    ((a = n = n || {}).disassembleSymbol = function (t, e) {
      var r = [t, e.char];
      if (e.attributes)
        for (var n in e.attributes) r.push(n), r.push(e.attributes[n]);
      return r;
    }),
      (a.assembleSymbol = function (t) {
        for (var e = t[0], r = t[1], n = {}, a = 2; a < t.length; a += 2)
          n[t[a]] = t[a + 1];
        return new i.Symbol(e, r, n);
      }),
      (a.GetCSname = function (t, e) {
        if ("\\" !== t.GetNext())
          throw new l.default(
            "MissingCS",
            "%1 must be followed by a control sequence",
            e
          );
        return o.default.trimSpaces(t.GetArgument(e)).substr(1);
      }),
      (a.GetTemplate = function (t, e, r) {
        for (
          var n = t.GetNext(), a = [], o = 0, i = t.i;
          t.i < t.string.length;

        ) {
          if ("#" === (n = t.GetNext())) {
            if (
              (i !== t.i && (a[o] = t.string.substr(i, t.i - i)),
              !(n = t.string.charAt(++t.i)).match(/^[1-9]$/))
            )
              throw new l.default(
                "CantUseHash2",
                "Illegal use of # in template for %1",
                r
              );
            if (parseInt(n) !== ++o)
              throw new l.default(
                "SequentialParam",
                "Parameters for %1 must be numbered sequentially",
                r
              );
            i = t.i + 1;
          } else if ("{" === n)
            return (
              i !== t.i && (a[o] = t.string.substr(i, t.i - i)),
              0 < a.length ? [o.toString()].concat(a) : o
            );
          t.i++;
        }
        throw new l.default(
          "MissingReplacementString",
          "Missing replacement string for definition of %1",
          e
        );
      }),
      (a.GetParameter = function (t, e, r) {
        if (null == r) return t.GetArgument(e);
        for (var n = t.i, a = 0, o = 0; t.i < t.string.length; ) {
          var i = t.string.charAt(t.i);
          if ("{" === i) t.i === n && (o = 1), t.GetArgument(e), (a = t.i - n);
          else {
            if (c(t, r)) return o && (n++, (a -= 2)), t.string.substr(n, a);
            if ("\\" === i) {
              t.i++, a++, (o = 0);
              var s = t.string.substr(t.i).match(/[a-z]+|./i);
              s && ((t.i += s[0].length), (a = t.i - n));
            } else t.i++, a++, (o = 0);
          }
        }
        throw new l.default("RunawayArgument", "Runaway argument for %1?", e);
      }),
      (a.MatchParam = c),
      (a.addDelimiter = function (t, e, r, n) {
        t.configuration.handlers
          .retrieve(s.ExtensionMaps.NEW_DELIMITER)
          .add(e, new i.Symbol(e, r, n));
      }),
      (a.addMacro = function (t, e, r, n, a) {
        void 0 === a && (a = ""),
          t.configuration.handlers
            .retrieve(s.ExtensionMaps.NEW_COMMAND)
            .add(e, new i.Macro(a || e, r, n));
      }),
      (a.addEnvironment = function (t, e, r, n) {
        t.configuration.handlers
          .retrieve(s.ExtensionMaps.NEW_ENVIRONMENT)
          .add(e, new i.Macro(e, r, n));
      }),
      (e.default = n);
  },
  function (t, e, r) {
    "use strict";
    var n;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      o = r(54),
      i = r(8);
    r(85);
    e.NewcommandConfiguration = a.Configuration.create("newcommand", {
      handler: { macro: ["Newcommand-macros"] },
      items: ((n = {}), (n[o.BeginEnvItem.prototype.kind] = o.BeginEnvItem), n),
      options: { maxMacros: 1e3 },
      init: function (t) {
        t.handler.macro.indexOf(i.ExtensionMaps.NEW_COMMAND) < 0 &&
          t.append(a.Configuration.extension());
      },
    });
  },
  function (t, h, m) {
    "use strict";
    (function (t) {
      var l =
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
        r =
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
        a =
          (this && this.__spread) ||
          function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(r(arguments[e]));
            return t;
          };
      Object.defineProperty(h, "__esModule", { value: !0 });
      var s = m(0),
        e = m(1),
        o = m(2),
        i = m(65),
        c = m(66),
        u = m(90),
        n = m(10),
        p = (t.MathJax && t.MathJax.config) || {};
      function f(t, e) {
        var r,
          n = t.parseOptions.options.require,
          a = e.substr(n.prefix.length);
        if (n.required.indexOf(a) < 0) {
          n.required.push(a),
            (function (t, e) {
              var r, n;
              void 0 === e && (e = []);
              var a = t.parseOptions.options.require.prefix;
              try {
                for (var o = l(e), i = o.next(); !i.done; i = o.next()) {
                  var s = i.value;
                  s.substr(0, a.length) === a && f(t, s);
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
            })(t, c.CONFIG.dependencies[e]);
          var o = s.ConfigurationHandler.get(a);
          if (o) {
            var i = p[e] || {};
            o.options &&
              1 === Object.keys(o.options).length &&
              o.options[a] &&
              (((r = {})[a] = i), (i = r)),
              t.configuration.register(o, t, i);
          }
        }
      }
      function d(t, e) {
        var r = t.options.require,
          n = r.allow,
          a = ("[" === e.substr(0, 1) ? "" : r.prefix) + e;
        if (
          !(n.hasOwnProperty(a)
            ? n[a]
            : n.hasOwnProperty(e)
            ? n[e]
            : r.defaultAllow)
        )
          throw new o.default(
            "BadRequire",
            'Extension "%1" is now allowed to be loaded',
            a
          );
        i.Package.packages.has(a)
          ? f(r.jax, a)
          : u.mathjax.retryAfter(c.Loader.load(a));
      }
      (h.RequireLoad = d),
        (h.RequireMethods = {
          Require: function (t, e) {
            var r = t.GetArgument(e);
            if (r.match(/[^_a-zA-Z0-9]/) || "" === r)
              throw new o.default(
                "BadPackageName",
                "Argument for %1 is not a valid package name",
                e
              );
            d(t, r);
          },
        }),
        (h.options = {
          require: {
            allow: n.expandable({ base: !1, "all-packages": !1 }),
            defaultAllow: !0,
            prefix: "tex",
          },
        }),
        new e.CommandMap("require", { require: "Require" }, h.RequireMethods),
        (h.RequireConfiguration = s.Configuration.create("require", {
          handler: { macro: ["require"] },
          config: function (t, e) {
            var r = e.parseOptions.options.require;
            (r.jax = e), (r.required = a(e.options.packages));
            var n = r.prefix;
            if (n.match(/[^_a-zA-Z0-9]/))
              throw Error("Illegal characters used in \\require prefix");
            c.CONFIG.paths[n] ||
              (c.CONFIG.paths[n] = "[mathjax]/input/tex/extensions"),
              (r.prefix = "[" + n + "]/");
          },
          options: h.options,
        }));
    }.call(this, m(89)));
  },
  function (t, e, r) {
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
      o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var a in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
              return t;
            }).apply(this, arguments);
        },
      c =
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = r(70),
      u = r(10),
      p = r(28),
      f = r(29),
      s = r(3),
      d = r(6),
      h = r(2),
      m = r(31),
      g = r(15),
      y = r(0);
    r(17);
    var v,
      b =
        ((v = i.AbstractInputJax),
        a(x, v),
        (x.configure = function (t) {
          var e,
            r,
            n = y.Configuration.empty();
          try {
            for (var a = l(t), o = a.next(); !o.done; o = a.next()) {
              var i = o.value,
                s = y.ConfigurationHandler.get(i);
              s && n.append(s);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (r = a.return) && r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          return n.init(n), n;
        }),
        (x.tags = function (t, e) {
          g.TagsFactory.addTags(e.tags),
            g.TagsFactory.setDefault(t.options.tags),
            (t.tags = g.TagsFactory.getDefault()),
            (t.tags.configuration = t);
        }),
        (x.prototype.setMmlFactory = function (t) {
          v.prototype.setMmlFactory.call(this, t),
            this._parseOptions.nodeFactory.setMmlFactory(t);
        }),
        Object.defineProperty(x.prototype, "parseOptions", {
          get: function () {
            return this._parseOptions;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (x.prototype.compile = function (t, e) {
          this.parseOptions.clear(),
            this.executeFilters(this.preFilters, t, e, this.parseOptions);
          var r,
            n = t.display;
          (this.latex = t.math), this.parseOptions.tags.startEquation(t);
          try {
            r = new d.default(
              this.latex,
              { display: n, isInner: !1 },
              this.parseOptions
            ).mml();
          } catch (t) {
            if (!(t instanceof h.default)) throw t;
            (this.parseOptions.error = !0), (r = this.formatError(t));
          }
          return (
            (r = this.parseOptions.nodeFactory.create("node", "math", [r])),
            n && s.default.setAttribute(r, "display", "block"),
            this.parseOptions.tags.finishEquation(t),
            (this.parseOptions.root = r),
            this.executeFilters(this.postFilters, t, e, this.parseOptions),
            (this.mathNode = this.parseOptions.root),
            this.mathNode
          );
        }),
        (x.prototype.findMath = function (t) {
          return this.findTeX.findMath(t);
        }),
        (x.prototype.formatError = function (t) {
          var e = t.message.replace(/\n.*/, "");
          return this.parseOptions.nodeFactory.create(
            "error",
            e,
            t.id,
            this.latex
          );
        }),
        (x.NAME = "TeX"),
        (x.OPTIONS = o(o({}, i.AbstractInputJax.OPTIONS), {
          FindTeX: null,
          packages: ["base"],
          digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
          maxBuffer: 5120,
        })),
        x);
    function x(t) {
      void 0 === t && (t = {});
      var e = this,
        r = c(u.separateOptions(t, x.OPTIONS, p.FindTeX.OPTIONS), 3),
        n = r[0],
        a = r[1],
        o = r[2];
      (e = v.call(this, a) || this).findTeX =
        e.options.FindTeX || new p.FindTeX(o);
      var i = e.options.packages,
        s = (e.configuration = x.configure(i)),
        l = (e._parseOptions = new m.default(s, [
          e.options,
          g.TagsFactory.OPTIONS,
        ]));
      return (
        u.userOptions(l.options, n),
        s.config(s, e),
        x.tags(l, s),
        e.postFilters.add(f.default.cleanSubSup, -5),
        e.postFilters.add(f.default.setInherited, -4),
        e.postFilters.add(f.default.cleanStretchy, -3),
        e.postFilters.add(f.default.cleanAttributes, -2),
        e.postFilters.add(f.default.combineRelations, -1),
        e
      );
    }
    e.TeX = b;
  },
  function (t, e, r) {
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
      p =
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(71),
      s = r(72),
      f = r(73),
      l =
        ((o = i.AbstractFindMath),
        a(c, o),
        (c.prototype.getPatterns = function () {
          var e = this,
            t = this.options,
            r = [],
            n = [],
            a = [];
          (this.end = {}), (this.env = this.sub = 0);
          var o = 1;
          t.inlineMath.forEach(function (t) {
            return e.addPattern(r, t, !1);
          }),
            t.displayMath.forEach(function (t) {
              return e.addPattern(r, t, !0);
            }),
            r.length && n.push(r.sort(s.sortLength).join("|")),
            t.processEnvironments &&
              (n.push("\\\\begin\\{([^}]*)\\}"), (this.env = o), o++),
            t.processEscapes && a.push("\\\\([\\\\$])"),
            t.processRefs && a.push("(\\\\(?:eq)?ref\\{[^}]*\\})"),
            a.length && (n.push("(" + a.join("|") + ")"), (this.sub = o)),
            (this.start = new RegExp(n.join("|"), "g")),
            (this.hasPatterns = 0 < n.length);
        }),
        (c.prototype.addPattern = function (t, e, r) {
          var n = p(e, 2),
            a = n[0],
            o = n[1];
          t.push(s.quotePattern(a)), (this.end[a] = [o, r, this.endPattern(o)]);
        }),
        (c.prototype.endPattern = function (t) {
          return new RegExp(
            s.quotePattern(t) + "|\\\\(?:[a-zA-Z]|.)|[{}]",
            "g"
          );
        }),
        (c.prototype.findEnd = function (t, e, r, n) {
          for (
            var a,
              o = p(n, 3),
              i = o[0],
              s = o[1],
              l = o[2],
              c = (l.lastIndex = r.index + r[0].length),
              u = 0;
            (a = l.exec(t));

          ) {
            if (a[0] === i && 0 === u)
              return f.protoItem(
                r[0],
                t.substr(c, a.index - c),
                a[0],
                e,
                r.index,
                a.index + a[0].length,
                s
              );
            "{" === a[0] ? u++ : "}" === a[0] && u && u--;
          }
          return null;
        }),
        (c.prototype.findMathInString = function (t, e, r) {
          var n, a;
          for (this.start.lastIndex = 0; (n = this.start.exec(r)); ) {
            if (void 0 !== n[this.env] && this.env) {
              var o = "\\end{" + n[this.env] + "}";
              (a = this.findEnd(r, e, n, [o, !0, this.endPattern(o)])) &&
                ((a.math = a.open + a.math + a.close), (a.open = a.close = ""));
            } else if (void 0 !== n[this.sub] && this.sub) {
              var i = n[this.sub];
              (o = n.index + n[this.sub].length),
                (a =
                  2 === i.length
                    ? f.protoItem("", i.substr(1), "", e, n.index, o)
                    : f.protoItem("", i, "", e, n.index, o, !1));
            } else a = this.findEnd(r, e, n, this.end[n[0]]);
            a && (t.push(a), (this.start.lastIndex = a.end.n));
          }
        }),
        (c.prototype.findMath = function (t) {
          var e = [];
          if (this.hasPatterns)
            for (var r = 0, n = t.length; r < n; r++)
              this.findMathInString(e, r, t[r]);
          return e;
        }),
        (c.OPTIONS = {
          inlineMath: [["\\(", "\\)"]],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
          processEscapes: !0,
          processEnvironments: !0,
          processRefs: !0,
        }),
        c);
    function c(t) {
      var e = o.call(this, t) || this;
      return e.getPatterns(), e;
    }
    e.FindTeX = l;
  },
  function (t, e, r) {
    "use strict";
    var d =
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
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n,
      h = r(5),
      m = r(3);
    !(function (t) {
      (t.cleanStretchy = function (t) {
        var e,
          r,
          n = t.data;
        try {
          for (
            var a = d(n.getList("fixStretchy")), o = a.next();
            !o.done;
            o = a.next()
          ) {
            var i = o.value;
            if (m.default.getProperty(i, "fixStretchy")) {
              var s = m.default.getForm(i);
              s &&
                s[3] &&
                s[3].stretchy &&
                m.default.setAttribute(i, "stretchy", !1);
              var l = i.parent;
              if (!(m.default.getTexClass(i) || (s && s[2]))) {
                var c = n.nodeFactory.create("node", "TeXAtom", [i]);
                l.replaceChild(c, i), c.inheritAttributesFrom(i);
              }
              m.default.removeProperties(i, "fixStretchy");
            }
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
        (t.cleanAttributes = function (t) {
          t.data.root.walkTree(function (t, e) {
            var r,
              n,
              a = t.attributes;
            try {
              for (
                var o = d(a.getExplicitNames()), i = o.next();
                !i.done;
                i = o.next()
              ) {
                var s = i.value;
                a.attributes[s] === t.attributes.getInherited(s) &&
                  delete a.attributes[s];
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                i && !i.done && (n = o.return) && n.call(o);
              } finally {
                if (r) throw r.error;
              }
            }
          }, {});
        }),
        (t.combineRelations = function (t) {
          var e, r;
          try {
            for (
              var n = d(t.data.getList("mo")), a = n.next();
              !a.done;
              a = n.next()
            ) {
              var o = a.value;
              if (
                !o.getProperty("relationsCombined") &&
                o.parent &&
                (!o.parent || m.default.isType(o.parent, "mrow")) &&
                m.default.getTexClass(o) === h.TEXCLASS.REL
              ) {
                for (
                  var i = o.parent,
                    s = void 0,
                    l = i.childNodes,
                    c = l.indexOf(o) + 1,
                    u = m.default.getProperty(o, "variantForm");
                  c < l.length &&
                  (s = l[c]) &&
                  m.default.isType(s, "mo") &&
                  m.default.getTexClass(s) === h.TEXCLASS.REL;

                ) {
                  if (
                    u !== m.default.getProperty(s, "variantForm") ||
                    !f(o, s)
                  ) {
                    null == o.attributes.getExplicit("rspace") &&
                      m.default.setAttribute(o, "rspace", "0pt"),
                      null == s.attributes.getExplicit("lspace") &&
                        m.default.setAttribute(s, "lspace", "0pt");
                    break;
                  }
                  m.default.appendChildren(o, m.default.getChildren(s)),
                    p(["stretchy", "rspace"], o, s),
                    m.default.setProperties(o, s.getAllProperties()),
                    l.splice(c, 1),
                    (s.parent = null),
                    s.setProperty("relationsCombined", !0);
                }
                o.attributes.setInherited("form", o.getForms()[0]);
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        });
      function r(t, e, r) {
        var n, a;
        try {
          for (
            var o = d(t.getList("m" + e + r)), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var s = i.value,
              l = s.childNodes;
            if (!l[s[e]] || !l[s[r]]) {
              var c = s.parent,
                u = l[s[e]]
                  ? t.nodeFactory.create("node", "m" + e, [l[s.base], l[s[e]]])
                  : t.nodeFactory.create("node", "m" + r, [l[s.base], l[s[r]]]);
              m.default.copyAttributes(s, u),
                c ? c.replaceChild(u, s) : (t.root = u);
            }
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            i && !i.done && (a = o.return) && a.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      var p = function (t, e, r) {
          var n = e.attributes,
            a = r.attributes;
          t.forEach(function (t) {
            var e = a.getExplicit(t);
            null != e && n.set(t, e);
          });
        },
        f = function (t, e) {
          function r(e, r) {
            return e.getExplicitNames().filter(function (t) {
              return t !== r && ("stretchy" !== t || e.getExplicit("stretchy"));
            });
          }
          var n,
            a,
            o = t.attributes,
            i = e.attributes,
            s = r(o, "lspace"),
            l = r(i, "rspace");
          if (s.length !== l.length) return !1;
          try {
            for (var c = d(s), u = c.next(); !u.done; u = c.next()) {
              var p = u.value;
              if (o.getExplicit(p) !== i.getExplicit(p)) return !1;
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              u && !u.done && (a = c.return) && a.call(c);
            } finally {
              if (n) throw n.error;
            }
          }
          return !0;
        };
      (t.cleanSubSup = function (t) {
        var e = t.data;
        e.error || (r(e, "sub", "sup"), r(e, "under", "over"));
      }),
        (t.setInherited = function (t) {
          t.data.root.setInheritedAttributes({}, t.math.display, 0, !1);
        });
    })((n = n || {})),
      (e.default = n);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(11).add(
        {
          NJcy: "\u040a",
          Nacute: "\u0143",
          Ncaron: "\u0147",
          Ncedil: "\u0145",
          Ncy: "\u041d",
          NegativeMediumSpace: "\u200b",
          NegativeThickSpace: "\u200b",
          NegativeThinSpace: "\u200b",
          NegativeVeryThinSpace: "\u200b",
          NewLine: "\n",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xa0",
          Not: "\u2aec",
          NotCongruent: "\u2262",
          NotCupCap: "\u226d",
          NotEqualTilde: "\u2242\u0338",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226b\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2a7e\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224e\u0338",
          NotHumpEqual: "\u224f\u0338",
          NotLeftTriangleBar: "\u29cf\u0338",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226a\u0338",
          NotLessSlantEqual: "\u2a7d\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2aa2\u0338",
          NotNestedLessLess: "\u2aa1\u0338",
          NotPrecedesEqual: "\u2aaf\u0338",
          NotReverseElement: "\u220c",
          NotRightTriangleBar: "\u29d0\u0338",
          NotSquareSubset: "\u228f\u0338",
          NotSquareSubsetEqual: "\u22e2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22e3",
          NotSubset: "\u2282\u20d2",
          NotSucceedsEqual: "\u2ab0\u0338",
          NotSucceedsTilde: "\u227f\u0338",
          NotSuperset: "\u2283\u20d2",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          Ntilde: "\xd1",
          Nu: "\u039d",
          nGg: "\u22d9\u0338",
          nGt: "\u226b\u20d2",
          nGtv: "\u226b\u0338",
          nLl: "\u22d8\u0338",
          nLt: "\u226a\u20d2",
          nLtv: "\u226a\u0338",
          nabla: "\u2207",
          nacute: "\u0144",
          nang: "\u2220\u20d2",
          nap: "\u2249",
          napE: "\u2a70\u0338",
          napid: "\u224b\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natural: "\u266e",
          naturals: "\u2115",
          nbsp: "\xa0",
          nbump: "\u224e\u0338",
          nbumpe: "\u224f\u0338",
          ncap: "\u2a43",
          ncaron: "\u0148",
          ncedil: "\u0146",
          ncong: "\u2247",
          ncongdot: "\u2a6d\u0338",
          ncup: "\u2a42",
          ncy: "\u043d",
          ndash: "\u2013",
          ne: "\u2260",
          neArr: "\u21d7",
          nearhk: "\u2924",
          nearrow: "\u2197",
          nedot: "\u2250\u0338",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          nexist: "\u2204",
          nexists: "\u2204",
          ngE: "\u2267\u0338",
          nge: "\u2271",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2a7e\u0338",
          nges: "\u2a7e\u0338",
          ngsim: "\u2275",
          ngt: "\u226f",
          ngtr: "\u226f",
          nhArr: "\u21ce",
          nhpar: "\u2af2",
          ni: "\u220b",
          nis: "\u22fc",
          nisd: "\u22fa",
          niv: "\u220b",
          njcy: "\u045a",
          nlArr: "\u21cd",
          nlE: "\u2266\u0338",
          nldr: "\u2025",
          nle: "\u2270",
          nleftarrow: "\u219a",
          nleftrightarrow: "\u21ae",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2a7d\u0338",
          nles: "\u2a7d\u0338",
          nless: "\u226e",
          nlsim: "\u2274",
          nlt: "\u226e",
          nltri: "\u22ea",
          nltrie: "\u22ec",
          nmid: "\u2224",
          notin: "\u2209",
          notinE: "\u22f9\u0338",
          notindot: "\u22f5\u0338",
          notinva: "\u2209",
          notinvb: "\u22f7",
          notinvc: "\u22f6",
          notni: "\u220c",
          notniva: "\u220c",
          notnivb: "\u22fe",
          notnivc: "\u22fd",
          npar: "\u2226",
          nparallel: "\u2226",
          nparsl: "\u2afd\u20e5",
          npart: "\u2202\u0338",
          npolint: "\u2a14",
          npr: "\u2280",
          nprcue: "\u22e0",
          npre: "\u2aaf\u0338",
          nprec: "\u2280",
          npreceq: "\u2aaf\u0338",
          nrArr: "\u21cf",
          nrarrc: "\u2933\u0338",
          nrarrw: "\u219d\u0338",
          nrightarrow: "\u219b",
          nrtri: "\u22eb",
          nrtrie: "\u22ed",
          nsc: "\u2281",
          nsccue: "\u22e1",
          nsce: "\u2ab0\u0338",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22e2",
          nsqsupe: "\u22e3",
          nsub: "\u2284",
          nsubE: "\u2ac5\u0338",
          nsube: "\u2288",
          nsubset: "\u2282\u20d2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2ac5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2ab0\u0338",
          nsup: "\u2285",
          nsupE: "\u2ac6\u0338",
          nsupe: "\u2289",
          nsupset: "\u2283\u20d2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2ac6\u0338",
          ntgl: "\u2279",
          ntilde: "\xf1",
          ntlg: "\u2278",
          ntriangleleft: "\u22ea",
          ntrianglelefteq: "\u22ec",
          ntriangleright: "\u22eb",
          ntrianglerighteq: "\u22ed",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvHarr: "\u2904",
          nvap: "\u224d\u20d2",
          nvge: "\u2265\u20d2",
          nvgt: ">\u20d2",
          nvinfin: "\u29de",
          nvlArr: "\u2902",
          nvle: "\u2264\u20d2",
          nvlt: "<\u20d2",
          nvltrie: "\u22b4\u20d2",
          nvrArr: "\u2903",
          nvrtrie: "\u22b5\u20d2",
          nvsim: "\u223c\u20d2",
          nwArr: "\u21d6",
          nwarhk: "\u2923",
          nwarrow: "\u2196",
          nwnear: "\u2927",
        },
        "n"
      );
  },
  function (t, e, r) {
    "use strict";
    var n =
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
      a =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(32),
      i = r(8),
      s = r(16),
      c = r(10),
      u =
        ((p.prototype.pushParser = function (t) {
          this.parsers.unshift(t);
        }),
        (p.prototype.popParser = function () {
          this.parsers.shift();
        }),
        Object.defineProperty(p.prototype, "parser", {
          get: function () {
            return this.parsers[0];
          },
          enumerable: !0,
          configurable: !0,
        }),
        (p.prototype.clear = function () {
          (this.parsers = []),
            (this.root = null),
            (this.nodeLists = {}),
            (this.error = !1),
            this.tags.resetTag();
        }),
        (p.prototype.addNode = function (t, e) {
          var r = this.nodeLists[t];
          (r = r || (this.nodeLists[t] = [])).push(e);
        }),
        (p.prototype.getList = function (t) {
          var e,
            r,
            n = this.nodeLists[t] || [],
            a = [];
          try {
            for (var o = l(n), i = o.next(); !i.done; i = o.next()) {
              var s = i.value;
              this.inTree(s) && a.push(s);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              i && !i.done && (r = o.return) && r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          return (this.nodeLists[t] = a);
        }),
        (p.prototype.inTree = function (t) {
          for (; t && t !== this.root; ) t = t.parent;
          return !!t;
        }),
        p);
    function p(t, e) {
      void 0 === e && (e = []),
        (this.options = {}),
        (this.parsers = []),
        (this.root = null),
        (this.nodeLists = {}),
        (this.error = !1),
        (this.handlers = new i.SubHandlers(t)),
        (this.nodeFactory = new s.NodeFactory()),
        (this.nodeFactory.configuration = this).nodeFactory.setCreators(
          t.nodes
        ),
        (this.itemFactory = new o.default(t.items)),
        (this.itemFactory.configuration = this),
        c.defaultOptions.apply(void 0, a([this.options], e)),
        c.defaultOptions(this.options, t.options);
    }
    e.default = u;
  },
  function (t, e, r) {
    "use strict";
    var n,
      a,
      o =
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      s = r(12),
      l = r(75),
      c = ((i = s.BaseItem), o(u, i), u);
    function u() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    var p,
      f =
        ((p = l.AbstractFactory),
        o(d, p),
        (d.DefaultStackItems = (((a = {})[c.prototype.kind] = c), a)),
        d);
    function d() {
      var t = (null !== p && p.apply(this, arguments)) || this;
      return (t.defaultKind = "dummy"), (t.configuration = null), t;
    }
    e.default = f;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(17),
      r(34),
      r(35),
      r(37),
      r(39),
      r(40),
      r(41),
      r(44),
      r(47),
      r(48),
      r(51),
      r(52),
      r(22),
      r(53),
      r(55),
      r(57),
      r(25),
      r(58),
      r(59),
      r(60),
      r(63),
      r(64),
      "undefined" != typeof MathJax &&
        MathJax.loader &&
        MathJax.loader.preLoad(
          "[tex]/action",
          "[tex]/ams",
          "[tex]/amsCd",
          "[tex]/bbox",
          "[tex]/boldsymbol",
          "[tex]/braket",
          "[tex]/bussproofs",
          "[tex]/cancel",
          "[tex]/color",
          "[tex]/enclose",
          "[tex]/extpfeil",
          "[tex]/html",
          "[tex]/mhchem",
          "[tex]/newcommand",
          "[tex]/noerrors",
          "[tex]/noundefined",
          "[tex]/physics",
          "[tex]/unicode",
          "[tex]/verb",
          "[tex]/configMacros"
        ),
      (e.AllPackages = [
        "base",
        "action",
        "ams",
        "amsCd",
        "bbox",
        "boldsymbol",
        "braket",
        "cancel",
        "color",
        "enclose",
        "extpfeil",
        "html",
        "mhchem",
        "newcommand",
        "noerrors",
        "noundefined",
        "unicode",
        "verb",
        "configMacros",
      ]);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      a = r(6),
      o = r(1),
      i = r(9);
    (e.ActionMethods = {}),
      (e.ActionMethods.Macro = i.default.Macro),
      (e.ActionMethods.Toggle = function (t, e) {
        for (var r, n = []; "\\endtoggle" !== (r = t.GetArgument(e)); )
          n.push(new a.default(r, t.stack.env, t.configuration).mml());
        t.Push(t.create("node", "maction", n, { actiontype: "toggle" }));
      }),
      (e.ActionMethods.Mathtip = function (t, e) {
        var r = t.ParseArg(e),
          n = t.ParseArg(e);
        t.Push(t.create("node", "maction", [r, n], { actiontype: "tooltip" }));
      }),
      new o.CommandMap(
        "action-macros",
        {
          toggle: "Toggle",
          mathtip: "Mathtip",
          texttip: ["Macro", "\\mathtip{#1}{\\text{#2}}", 2],
        },
        e.ActionMethods
      ),
      (e.ActionConfiguration = n.Configuration.create("action", {
        handler: { macro: ["action-macros"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    var n,
      a,
      o =
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = r(0),
      s = r(36),
      l = r(15);
    r(80);
    var c,
      u = ((c = l.AbstractTags), o(p, c), p);
    function p() {
      return (null !== c && c.apply(this, arguments)) || this;
    }
    e.AmsTags = u;
    e.AmsConfiguration = i.Configuration.create("ams", {
      handler: {
        delimiter: ["AMSsymbols-delimiter", "AMSmath-delimiter"],
        macro: [
          "AMSsymbols-mathchar0mi",
          "AMSsymbols-mathchar0m0",
          "AMSsymbols-delimiter",
          "AMSsymbols-macros",
          "AMSmath-mathchar0mo",
          "AMSmath-macros",
          "AMSmath-delimiter",
        ],
        environment: ["AMSmath-environment"],
      },
      items: ((a = {}), (a[s.MultlineItem.prototype.kind] = s.MultlineItem), a),
      tags: { ams: u },
      init: function (t) {
        t.append(i.Configuration.extension());
      },
    });
  },
  function (t, e, r) {
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(18),
      s = r(4),
      l = r(3),
      c = r(2),
      u = r(7),
      p =
        ((o = i.ArrayItem),
        a(f, o),
        Object.defineProperty(f.prototype, "kind", {
          get: function () {
            return "multline";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (f.prototype.EndEntry = function () {
          this.table.length &&
            s.default.fixInitialMO(this.factory.configuration, this.nodes);
          var t = this.getProperty("shove"),
            e = this.create(
              "node",
              "mtd",
              this.nodes,
              t ? { columnalign: t } : {}
            );
          this.setProperty("shove", null), this.row.push(e), this.Clear();
        }),
        (f.prototype.EndRow = function () {
          if (1 !== this.row.length)
            throw new c.default(
              "MultlineRowsOneCol",
              "The rows within the %1 environment must have exactly one column",
              "multline"
            );
          var t = this.create("node", "mtr", this.row);
          this.table.push(t), (this.row = []);
        }),
        (f.prototype.EndTable = function () {
          if ((o.prototype.EndTable.call(this), this.table.length)) {
            var t = this.table.length - 1,
              e = -1;
            l.default.getAttribute(
              l.default.getChildren(this.table[0])[0],
              "columnalign"
            ) ||
              l.default.setAttribute(
                l.default.getChildren(this.table[0])[0],
                "columnalign",
                u.TexConstant.Align.LEFT
              ),
              l.default.getAttribute(
                l.default.getChildren(this.table[t])[0],
                "columnalign"
              ) ||
                l.default.setAttribute(
                  l.default.getChildren(this.table[t])[0],
                  "columnalign",
                  u.TexConstant.Align.RIGHT
                );
            var r = this.factory.configuration.tags.getTag();
            if (r) {
              e =
                this.arraydef.side === u.TexConstant.Align.LEFT
                  ? 0
                  : this.table.length - 1;
              var n = this.table[e],
                a = this.create(
                  "node",
                  "mlabeledtr",
                  [r].concat(l.default.getChildren(n))
                );
              l.default.copyAttributes(n, a), (this.table[e] = a);
            }
          }
          this.factory.configuration.tags.end();
        }),
        f);
    function f(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      var n = o.call(this, t) || this;
      return n.factory.configuration.tags.start("multline", !0, e[0]), n;
    }
    e.MultlineItem = p;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0);
    r(81),
      (e.AmsCdConfiguration = n.Configuration.create("amsCd", {
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
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var v = r(6),
      b = r(17),
      x = r(5),
      _ = r(3),
      A = {
        CD: function (t, e) {
          t.Push(e);
          var r = t.itemFactory.create("array"),
            n = t.configuration.options.amsCd;
          return (
            r.setProperties({
              minw: t.stack.env.CD_minw || n.harrowsize,
              minh: t.stack.env.CD_minh || n.varrowsize,
            }),
            (r.arraydef = {
              columnalign: "center",
              columnspacing: n.colspace,
              rowspacing: n.rowspace,
              displaystyle: !0,
            }),
            r
          );
        },
        arrow: function (t, e) {
          var r = t.string.charAt(t.i);
          if (!r.match(/[><VA.|=]/)) return b.Other(t, e);
          t.i++;
          var n = t.stack.Top();
          (n.isKind("array") && !n.Size()) ||
            (A.cell(t, e), (n = t.stack.Top()));
          for (
            var a,
              o = n,
              i = o.table.length % 2 == 1,
              s = (o.row.length + (i ? 0 : 1)) % 2;
            s;

          )
            A.cell(t, e), s--;
          var l = { minsize: o.getProperty("minw"), stretchy: !0 },
            c = {
              minsize: o.getProperty("minh"),
              stretchy: !0,
              symmetric: !0,
              lspace: 0,
              rspace: 0,
            };
          if ("." === r);
          else if ("|" === r) a = t.create("token", "mo", c, "\u2225");
          else if ("=" === r) a = t.create("token", "mo", l, "=");
          else {
            var u = { ">": "\u2192", "<": "\u2190", V: "\u2193", A: "\u2191" }[
                r
              ],
              p = t.GetUpTo(e + r, r),
              f = t.GetUpTo(e + r, r);
            if (">" === r || "<" === r) {
              if (
                ((a = t.create("token", "mo", l, u)),
                (p = p || "\\kern " + o.getProperty("minw")) || f)
              ) {
                var d = { width: "+11mu", lspace: "6mu" };
                if (((a = t.create("node", "munderover", [a])), p)) {
                  var h = new v.default(p, t.stack.env, t.configuration).mml(),
                    m = t.create("node", "mpadded", [h], d);
                  _.default.setAttribute(m, "voffset", ".1em"),
                    _.default.setChild(a, a.over, m);
                }
                if (f) {
                  var g = new v.default(f, t.stack.env, t.configuration).mml();
                  _.default.setChild(
                    a,
                    a.under,
                    t.create("node", "mpadded", [g], d)
                  );
                }
                t.configuration.options.amsCd.hideHorizontalLabels &&
                  (a = t.create("node", "mpadded", a, {
                    depth: 0,
                    height: ".67em",
                  }));
              }
            } else {
              var y = t.create("token", "mo", c, u);
              (a = y),
                (p || f) &&
                  ((a = t.create("node", "mrow")),
                  p &&
                    _.default.appendChildren(a, [
                      new v.default(
                        "\\scriptstyle\\llap{" + p + "}",
                        t.stack.env,
                        t.configuration
                      ).mml(),
                    ]),
                  (y.texClass = x.TEXCLASS.ORD),
                  _.default.appendChildren(a, [y]),
                  f &&
                    _.default.appendChildren(a, [
                      new v.default(
                        "\\scriptstyle\\rlap{" + f + "}",
                        t.stack.env,
                        t.configuration
                      ).mml(),
                    ]));
            }
          }
          a && t.Push(a), A.cell(t, e);
        },
        cell: function (t, e) {
          var r = t.stack.Top();
          (r.table || []).length % 2 == 0 &&
            0 === (r.row || []).length &&
            t.Push(
              t.create("node", "mpadded", [], { height: "8.5pt", depth: "2pt" })
            ),
            t.Push(
              t.itemFactory
                .create("cell")
                .setProperties({ isEntry: !0, name: e })
            );
        },
        minCDarrowwidth: function (t, e) {
          t.stack.env.CD_minw = t.GetDimen(e);
        },
        minCDarrowheight: function (t, e) {
          t.stack.env.CD_minh = t.GetDimen(e);
        },
      };
    e.default = A;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      a = r(1),
      d = r(2);
    (e.BboxMethods = {}),
      (e.BboxMethods.BBox = function (t, e) {
        for (
          var r,
            n,
            a,
            o = t.GetBrackets(e, ""),
            i = t.ParseArg(e),
            s = o.split(/,/),
            l = 0,
            c = s.length;
          l < c;
          l++
        ) {
          var u = s[l].trim(),
            p = u.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);
          if (p) {
            if (r)
              throw new d.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Padding",
                e
              );
            var f = m(p[1] + p[3]);
            f &&
              (r = {
                height: "+" + f,
                depth: "+" + f,
                lspace: f,
                width: "+" + 2 * parseInt(p[1], 10) + p[3],
              });
          } else if (u.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)) {
            if (n)
              throw new d.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Background",
                e
              );
            n = u;
          } else if (u.match(/^[-a-z]+:/i)) {
            if (a)
              throw new d.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Style",
                e
              );
            a = h(u);
          } else if ("" !== u)
            throw new d.default(
              "InvalidBBoxProperty",
              '"%1" doesn\'t look like a color, a padding dimension, or a style',
              u
            );
        }
        r && (i = t.create("node", "mpadded", [i], r)),
          (n || a) &&
            ((r = {}),
            n && Object.assign(r, { mathbackground: n }),
            a && Object.assign(r, { style: a }),
            (i = t.create("node", "mstyle", [i], r))),
          t.Push(i);
      });
    var h = function (t) {
        return t;
      },
      m = function (t) {
        return t;
      };
    new a.CommandMap("bbox", { bbox: "BBox" }, e.BboxMethods),
      (e.BboxConfiguration = n.Configuration.create("bbox", {
        handler: { macro: ["bbox"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    var s =
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
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      l = r(3),
      c = r(7),
      a = r(1),
      o = r(16),
      u = {};
    function i(t, e, r, n) {
      var a = o.NodeFactory.createToken(t, e, r, n);
      return (
        "mtext" !== e &&
          t.configuration.parser.stack.env.boldsymbol &&
          (l.default.setProperty(a, "fixBold", !0),
          t.configuration.addNode("fixBold", a)),
        a
      );
    }
    function p(t) {
      var e, r;
      try {
        for (
          var n = s(t.data.getList("fixBold")), a = n.next();
          !a.done;
          a = n.next()
        ) {
          var o = a.value;
          if (l.default.getProperty(o, "fixBold")) {
            var i = l.default.getAttribute(o, "mathvariant");
            null == i
              ? l.default.setAttribute(
                  o,
                  "mathvariant",
                  c.TexConstant.Variant.BOLD
                )
              : l.default.setAttribute(o, "mathvariant", u[i] || i),
              l.default.removeProperties(o, "fixBold");
          }
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    (u[c.TexConstant.Variant.NORMAL] = c.TexConstant.Variant.BOLD),
      (u[c.TexConstant.Variant.ITALIC] = c.TexConstant.Variant.BOLDITALIC),
      (u[c.TexConstant.Variant.FRAKTUR] = c.TexConstant.Variant.BOLDFRAKTUR),
      (u[c.TexConstant.Variant.SCRIPT] = c.TexConstant.Variant.BOLDSCRIPT),
      (u[c.TexConstant.Variant.SANSSERIF] =
        c.TexConstant.Variant.BOLDSANSSERIF),
      (u["-tex-calligraphic"] = "-tex-bold-calligraphic"),
      (u["-tex-oldstyle"] = "-tex-bold-oldstyle"),
      (e.BoldsymbolMethods = {}),
      (e.BoldsymbolMethods.Boldsymbol = function (t, e) {
        var r = t.stack.env.boldsymbol;
        t.stack.env.boldsymbol = !0;
        var n = t.ParseArg(e);
        (t.stack.env.boldsymbol = r), t.Push(n);
      }),
      new a.CommandMap(
        "boldsymbol",
        { boldsymbol: "Boldsymbol" },
        e.BoldsymbolMethods
      ),
      (e.createBoldToken = i),
      (e.rewriteBoldTokens = p),
      (e.BoldsymbolConfiguration = n.Configuration.create("boldsymbol", {
        handler: { macro: ["boldsymbol"] },
        nodes: { token: i },
        postprocessors: [p],
      }));
  },
  function (t, e, r) {
    "use strict";
    var n;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      o = r(42);
    r(82),
      (e.BraketConfiguration = a.Configuration.create("braket", {
        handler: { character: ["Braket-characters"], macro: ["Braket-macros"] },
        items: ((n = {}), (n[o.BraketItem.prototype.kind] = o.BraketItem), n),
      }));
  },
  function (t, e, r) {
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      o = r(12),
      s = r(5),
      l = r(4),
      c =
        ((i = o.BaseItem),
        a(u, i),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "braket";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.checkItem = function (t) {
          return t.isKind("close")
            ? [[this.factory.create("mml", this.toMml())], !0]
            : t.isKind("mml")
            ? (this.Push(t.toMml()),
              this.getProperty("single")
                ? [[this.toMml()], !0]
                : o.BaseItem.fail)
            : i.prototype.checkItem.call(this, t);
        }),
        (u.prototype.toMml = function () {
          var t = i.prototype.toMml.call(this),
            e = this.getProperty("open"),
            r = this.getProperty("close");
          if (this.getProperty("stretchy"))
            return l.default.fenced(this.factory.configuration, e, t, r);
          var n = {
              fence: !0,
              stretchy: !1,
              symmetric: !0,
              texClass: s.TEXCLASS.OPEN,
            },
            a = this.create("token", "mo", n, e);
          n.texClass = s.TEXCLASS.CLOSE;
          var o = this.create("token", "mo", n, r);
          return this.create("node", "mrow", [a, t, o], {
            open: e,
            close: r,
            texClass: s.TEXCLASS.INNER,
          });
        }),
        u);
    function u() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.BraketItem = c;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(9),
      s = r(5),
      a = {};
    (a.Macro = n.default.Macro),
      (a.Braket = function (t, e, r, n, a, o) {
        var i = !0;
        "{" === t.GetNext() && (t.i++, (i = !1)),
          t.Push(
            t.itemFactory
              .create("braket")
              .setProperties({
                barmax: o,
                barcount: 0,
                open: r,
                close: n,
                stretchy: a,
                single: i,
              })
          );
      }),
      (a.Bar = function (t, e) {
        var r = "|" === e ? "|" : "\u2225",
          n = t.stack.Top();
        if (
          "braket" !== n.kind ||
          n.getProperty("barcount") >= n.getProperty("barmax")
        ) {
          var a = t.create(
            "token",
            "mo",
            { texClass: s.TEXCLASS.ORD, stretchy: !1 },
            r
          );
          t.Push(a);
        } else {
          if (
            ("|" === r && "|" === t.GetNext() && (t.i++, (r = "\u2225")),
            n.getProperty("stretchy"))
          ) {
            var o = t.create("node", "TeXAtom", [], {
              texClass: s.TEXCLASS.CLOSE,
            });
            t.Push(o),
              n.setProperty("barcount", n.getProperty("barcount") + 1),
              (o = t.create("token", "mo", { stretchy: !0, braketbar: !0 }, r)),
              t.Push(o),
              (o = t.create("node", "TeXAtom", [], {
                texClass: s.TEXCLASS.OPEN,
              })),
              t.Push(o);
          } else {
            var i = t.create("token", "mo", { stretchy: !1, braketbar: !0 }, r);
            t.Push(i);
          }
        }
      }),
      (e.default = a);
  },
  function (t, e, r) {
    "use strict";
    var n;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      o = r(45),
      i = r(20);
    r(83),
      (e.BussproofsConfiguration = a.Configuration.create("bussproofs", {
        handler: {
          macro: ["Bussproofs-macros"],
          environment: ["Bussproofs-environments"],
        },
        items:
          ((n = {}), (n[o.ProofTreeItem.prototype.kind] = o.ProofTreeItem), n),
        preprocessors: [[i.saveDocument, 1]],
        postprocessors: [
          [i.clearDocument, 3],
          [i.makeBsprAttributes, 2],
          [i.balanceRules, 1],
        ],
      }));
  },
  function (t, e, r) {
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(2),
      s = r(12),
      l = r(21),
      c = r(20),
      u =
        ((o = s.BaseItem),
        a(p, o),
        Object.defineProperty(p.prototype, "kind", {
          get: function () {
            return "proofTree";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (p.prototype.checkItem = function (t) {
          if (t.isKind("end") && "prooftree" === t.getName()) {
            var e = this.toMml();
            return (
              c.setProperty(e, "proof", !0),
              [[this.factory.create("mml", e), t], !0]
            );
          }
          if (t.isKind("stop"))
            throw new i.default(
              "EnvMissingEnd",
              "Missing \\end{%1}",
              this.getName()
            );
          return this.innerStack.Push(t), s.BaseItem.fail;
        }),
        (p.prototype.toMml = function () {
          var t = o.prototype.toMml.call(this),
            e = this.innerStack.Top();
          if (e.isKind("start") && !e.Size()) return t;
          this.innerStack.Push(this.factory.create("stop"));
          var r = this.innerStack.Top().toMml();
          return this.create("node", "mrow", [r, t], {});
        }),
        p);
    function p() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.leftLabel = null),
        (t.rigthLabel = null),
        (t.innerStack = new l.default(t.factory, {}, !0)),
        t
      );
    }
    e.ProofTreeItem = u;
  },
  function (t, e, r) {
    "use strict";
    var h =
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
      o =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(h(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var m = r(2),
      g = r(6),
      i = r(4),
      y = r(20),
      n = {
        Prooftree: function (t, e) {
          return (
            t.Push(e),
            t.itemFactory
              .create("proofTree")
              .setProperties({
                name: e.getName(),
                line: "solid",
                currentLine: "solid",
                rootAtTop: !1,
              })
          );
        },
        Axiom: function (t, e) {
          var r = t.stack.Top();
          if ("proofTree" !== r.kind)
            throw new m.default(
              "IllegalProofCommand",
              "Proof commands only allowed in prooftree environment."
            );
          var n = f(t, t.GetArgument(e));
          y.setProperty(n, "axiom", !0), r.Push(n);
        },
      },
      f = function (t, e) {
        var r = i.default.internalMath(t, i.default.trimSpaces(e), 0);
        if (!r[0].childNodes[0].childNodes.length)
          return t.create("node", "mrow", []);
        var n = t.create("node", "mspace", [], { width: ".5ex" }),
          a = t.create("node", "mspace", [], { width: ".5ex" });
        return t.create("node", "mrow", o([n], r, [a]));
      };
    function d(t, e, r, n, a, o, i) {
      var s,
        l,
        c,
        u,
        p = t.create("node", "mtr", [t.create("node", "mtd", [e], {})], {}),
        f = t.create("node", "mtr", [t.create("node", "mtd", r, {})], {}),
        d = t.create("node", "mtable", i ? [f, p] : [p, f], {
          align: "top 2",
          rowlines: o,
          framespacing: "0 0",
        });
      if (
        (y.setProperty(d, "inferenceRule", i ? "up" : "down"),
        n &&
          ((s = t.create("node", "mpadded", [n], {
            height: "+.5em",
            width: "+.5em",
            voffset: "-.15em",
          })),
          y.setProperty(s, "prooflabel", "left")),
        a &&
          ((l = t.create("node", "mpadded", [a], {
            height: "+.5em",
            width: "+.5em",
            voffset: "-.15em",
          })),
          y.setProperty(l, "prooflabel", "right")),
        n && a)
      )
        (c = [s, d, l]), (u = "both");
      else if (n) (c = [s, d]), (u = "left");
      else {
        if (!a) return d;
        (c = [d, l]), (u = "right");
      }
      return (
        (d = t.create("node", "mrow", c)),
        y.setProperty(d, "labelledRule", u),
        d
      );
    }
    function v(t, e) {
      if ("$" !== t.GetNext())
        throw new m.default(
          "IllegalUseOfCommand",
          "Use of %1 does not match it's definition.",
          e
        );
      t.i++;
      var r = t.GetUpTo(e, "$");
      if (-1 === r.indexOf("\\fCenter"))
        throw new m.default(
          "IllegalUseOfCommand",
          "Missing \\fCenter in %1.",
          e
        );
      var n = h(r.split("\\fCenter"), 2),
        a = n[0],
        o = n[1],
        i = new g.default(a, t.stack.env, t.configuration).mml(),
        s = new g.default(o, t.stack.env, t.configuration).mml(),
        l = new g.default("\\fCenter", t.stack.env, t.configuration).mml(),
        c = t.create("node", "mtd", [i], {}),
        u = t.create("node", "mtd", [l], {}),
        p = t.create("node", "mtd", [s], {}),
        f = t.create("node", "mtr", [c, u, p], {}),
        d = t.create("node", "mtable", [f], {
          columnspacing: ".5ex",
          columnalign: "center 2",
        });
      return (
        y.setProperty(d, "sequent", !0),
        t.configuration.addNode("sequent", f),
        d
      );
    }
    (n.Inference = function (t, e, r) {
      var n = t.stack.Top();
      if ("proofTree" !== n.kind)
        throw new m.default(
          "IllegalProofCommand",
          "Proof commands only allowed in prooftree environment."
        );
      if (n.Size() < r)
        throw new m.default("BadProofTree", "Proof tree badly specified.");
      for (
        var a = n.getProperty("rootAtTop"),
          o = 1 !== r || n.Peek()[0].childNodes.length ? r : 0,
          i = [];
        i.length && i.unshift(t.create("node", "mtd", [], {})),
          i.unshift(
            t.create("node", "mtd", [n.Pop()], {
              rowalign: a ? "top" : "bottom",
            })
          ),
          0 < --r;

      );
      var s = t.create("node", "mtr", i, {}),
        l = t.create("node", "mtable", [s], { framespacing: "0 0" }),
        c = f(t, t.GetArgument(e)),
        u = n.getProperty("currentLine");
      u !== n.getProperty("line") &&
        n.setProperty("currentLine", n.getProperty("line"));
      var p = d(t, l, [c], n.getProperty("left"), n.getProperty("right"), u, a);
      n.setProperty("left", null),
        n.setProperty("right", null),
        y.setProperty(p, "inference", o),
        t.configuration.addNode("inference", p),
        n.Push(p);
    }),
      (n.Label = function (t, e, r) {
        var n = t.stack.Top();
        if ("proofTree" !== n.kind)
          throw new m.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        var a = i.default.internalMath(t, t.GetArgument(e), 0),
          o = 1 < a.length ? t.create("node", "mrow", a, {}) : a[0];
        n.setProperty(r, o);
      }),
      (n.SetLine = function (t, e, r, n) {
        var a = t.stack.Top();
        if ("proofTree" !== a.kind)
          throw new m.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        a.setProperty("currentLine", r), n && a.setProperty("line", r);
      }),
      (n.RootAtTop = function (t, e, r) {
        var n = t.stack.Top();
        if ("proofTree" !== n.kind)
          throw new m.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        n.setProperty("rootAtTop", r);
      }),
      (n.AxiomF = function (t, e) {
        var r = t.stack.Top();
        if ("proofTree" !== r.kind)
          throw new m.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        var n = v(t, e);
        y.setProperty(n, "axiom", !0), r.Push(n);
      }),
      (n.FCenter = function (t, e) {}),
      (n.InferenceF = function (t, e, r) {
        var n = t.stack.Top();
        if ("proofTree" !== n.kind)
          throw new m.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        if (n.Size() < r)
          throw new m.default("BadProofTree", "Proof tree badly specified.");
        for (
          var a = n.getProperty("rootAtTop"),
            o = 1 !== r || n.Peek()[0].childNodes.length ? r : 0,
            i = [];
          i.length && i.unshift(t.create("node", "mtd", [], {})),
            i.unshift(
              t.create("node", "mtd", [n.Pop()], {
                rowalign: a ? "top" : "bottom",
              })
            ),
            0 < --r;

        );
        var s = t.create("node", "mtr", i, {}),
          l = t.create("node", "mtable", [s], { framespacing: "0 0" }),
          c = v(t, e),
          u = n.getProperty("currentLine");
        u !== n.getProperty("line") &&
          n.setProperty("currentLine", n.getProperty("line"));
        var p = d(
          t,
          l,
          [c],
          n.getProperty("left"),
          n.getProperty("right"),
          u,
          a
        );
        n.setProperty("left", null),
          n.setProperty("right", null),
          y.setProperty(p, "inference", o),
          t.configuration.addNode("inference", p),
          n.Push(p);
      }),
      (e.default = n);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      i = r(7),
      a = r(1),
      s = r(4),
      l = r(22);
    (e.CancelMethods = {}),
      (e.CancelMethods.Cancel = function (t, e, r) {
        var n = t.GetBrackets(e, ""),
          a = t.ParseArg(e),
          o = s.default.keyvalOptions(n, l.ENCLOSE_OPTIONS);
        (o.notation = r), t.Push(t.create("node", "menclose", [a], o));
      }),
      (e.CancelMethods.CancelTo = function (t, e) {
        var r = t.GetBrackets(e, ""),
          n = t.ParseArg(e),
          a = t.ParseArg(e),
          o = s.default.keyvalOptions(r, l.ENCLOSE_OPTIONS);
        (o.notation = [
          i.TexConstant.Notation.UPDIAGONALSTRIKE,
          i.TexConstant.Notation.UPDIAGONALARROW,
          i.TexConstant.Notation.NORTHEASTARROW,
        ].join(" ")),
          (n = t.create("node", "mpadded", [n], {
            depth: "-.1em",
            height: "+.1em",
            voffset: ".1em",
          })),
          t.Push(
            t.create("node", "msup", [t.create("node", "menclose", [a], o), n])
          );
      }),
      new a.CommandMap(
        "cancel",
        {
          cancel: ["Cancel", i.TexConstant.Notation.UPDIAGONALSTRIKE],
          bcancel: ["Cancel", i.TexConstant.Notation.DOWNDIAGONALSTRIKE],
          xcancel: [
            "Cancel",
            i.TexConstant.Notation.UPDIAGONALSTRIKE +
              " " +
              i.TexConstant.Notation.DOWNDIAGONALSTRIKE,
          ],
          cancelto: "CancelTo",
        },
        e.CancelMethods
      ),
      (e.CancelConfiguration = n.Configuration.create("cancel", {
        handler: { macro: ["cancel"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      a = r(0),
      o = r(49),
      i = r(50);
    new n.CommandMap(
      "color",
      {
        color: "Color",
        textcolor: "TextColor",
        definecolor: "DefineColor",
        colorbox: "ColorBox",
        fcolorbox: "FColorBox",
      },
      o.ColorMethods
    );
    e.ColorConfiguration = a.Configuration.create("color", {
      handler: { macro: ["color"] },
      options: { color: { padding: "5px", borderWidth: "2px" } },
      config: function (t, e) {
        e.parseOptions.options.color.model = new i.ColorModel();
      },
    });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l = r(3),
      c = r(4);
    function u(t) {
      var e = "+" + t,
        r = t.replace(/^.*?([a-z]*)$/, "$1");
      return {
        width: "+" + 2 * parseFloat(e) + r,
        height: e,
        depth: e,
        lspace: t,
      };
    }
    (e.ColorMethods = {}),
      (e.ColorMethods.Color = function (t, e) {
        var r = t.GetBrackets(e, ""),
          n = t.GetArgument(e),
          a = t.options.color.model.getColor(r, n),
          o = t.itemFactory
            .create("style")
            .setProperties({ styles: { mathcolor: a } });
        (t.stack.env.color = a), t.Push(o);
      }),
      (e.ColorMethods.TextColor = function (t, e) {
        var r = t.GetBrackets(e, ""),
          n = t.GetArgument(e),
          a = t.options.color.model.getColor(r, n),
          o = t.stack.env.color;
        t.stack.env.color = a;
        var i = t.ParseArg(e);
        o ? (t.stack.env.color = o) : delete t.stack.env.color;
        var s = t.create("node", "mstyle", [i], { mathcolor: a });
        t.Push(s);
      }),
      (e.ColorMethods.DefineColor = function (t, e) {
        var r = t.GetArgument(e),
          n = t.GetArgument(e),
          a = t.GetArgument(e);
        t.options.color.model.defineColor(n, r, a);
      }),
      (e.ColorMethods.ColorBox = function (t, e) {
        var r = t.GetArgument(e),
          n = c.default.internalMath(t, t.GetArgument(e)),
          a = t.options.color,
          o = a.model,
          i = t.create("node", "mpadded", n, {
            mathbackground: o.getColor("named", r),
          });
        l.default.setProperties(i, u(a.padding)), t.Push(i);
      }),
      (e.ColorMethods.FColorBox = function (t, e) {
        var r = t.GetArgument(e),
          n = t.GetArgument(e),
          a = c.default.internalMath(t, t.GetArgument(e)),
          o = t.options.color,
          i = o.model,
          s = t.create("node", "mpadded", a, {
            mathbackground: i.getColor("named", n),
            style:
              "border: " + o.borderWidth + " solid " + i.getColor("named", r),
          });
        l.default.setProperties(s, u(o.padding)), t.Push(s);
      });
  },
  function (t, e, r) {
    "use strict";
    var u =
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
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var p = r(2),
      n = r(84),
      a = new Map(),
      o =
        ((i.prototype.normalizeColor = function (t, e) {
          if (!t || "named" === t) return e;
          if (a.has(t)) return a.get(t)(e);
          throw new p.default(
            "UndefinedColorModel",
            "Color model '%1' not defined",
            t
          );
        }),
        (i.prototype.getColor = function (t, e) {
          return t && "named" !== t
            ? this.normalizeColor(t, e)
            : this.getColorByName(e);
        }),
        (i.prototype.getColorByName = function (t) {
          return this.userColors.has(t)
            ? this.userColors.get(t)
            : n.COLORS.has(t)
            ? n.COLORS.get(t)
            : t;
        }),
        (i.prototype.defineColor = function (t, e, r) {
          var n = this.normalizeColor(t, r);
          this.userColors.set(e, n);
        }),
        i);
    function i() {
      this.userColors = new Map();
    }
    (e.ColorModel = o),
      a.set("rgb", function (t) {
        var e,
          r,
          n = t.trim().split(/\s*,\s*/),
          a = "#";
        if (3 !== n.length)
          throw new p.default(
            "ModelArg1",
            "Color values for the %1 model require 3 numbers",
            "rgb"
          );
        try {
          for (var o = u(n), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            if (!s.match(/^(\d+(\.\d*)?|\.\d+)$/))
              throw new p.default(
                "InvalidDecimalNumber",
                "Invalid decimal number"
              );
            var l = parseFloat(s);
            if (l < 0 || 1 < l)
              throw new p.default(
                "ModelArg2",
                "Color values for the %1 model must be between %2 and %3",
                "rgb",
                "0",
                "1"
              );
            var c = Math.floor(255 * l).toString(16);
            c.length < 2 && (c = "0" + c), (a += c);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return a;
      }),
      a.set("RGB", function (t) {
        var e,
          r,
          n = t.trim().split(/\s*,\s*/),
          a = "#";
        if (3 !== n.length)
          throw new p.default(
            "ModelArg1",
            "Color values for the %1 model require 3 numbers",
            "RGB"
          );
        try {
          for (var o = u(n), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            if (!s.match(/^\d+$/))
              throw new p.default("InvalidNumber", "Invalid number");
            var l = parseInt(s);
            if (255 < l)
              throw new p.default(
                "ModelArg2",
                "Color values for the %1 model must be between %2 and %3",
                "RGB",
                "0",
                "255"
              );
            var c = l.toString(16);
            c.length < 2 && (c = "0" + c), (a += c);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return a;
      }),
      a.set("gray", function (t) {
        if (!t.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/))
          throw new p.default("InvalidDecimalNumber", "Invalid decimal number");
        var e = parseFloat(t);
        if (e < 0 || 1 < e)
          throw new p.default(
            "ModelArg2",
            "Color values for the %1 model must be between %2 and %3",
            "gray",
            "0",
            "1"
          );
        var r = Math.floor(255 * e).toString(16);
        return r.length < 2 && (r = "0" + r), "#" + r + r + r;
      });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      a = r(0);
    (e.ColorV2Methods = {
      Color: function (t, e) {
        var r = t.GetArgument(e),
          n = t.stack.env.color;
        t.stack.env.color = r;
        var a = t.ParseArg(e);
        n ? (t.stack.env.color = n) : delete t.stack.env.color;
        var o = t.create("node", "mstyle", [a], { mathcolor: r });
        t.Push(o);
      },
    }),
      new n.CommandMap("colorV2", { color: "Color" }, e.ColorV2Methods),
      (e.ColorConfiguration = a.Configuration.create("colorV2", {
        handler: { macro: ["colorV2"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    var u =
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
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      a = r(10),
      o = r(1),
      p = r(14),
      f = r(23);
    var d = new o.CommandMap("configMacros", {}, {});
    e.ConfigMacrosConfiguration = n.Configuration.create("configMacros", {
      handler: { macro: ["configMacros"] },
      config: function (t, e) {
        var r,
          n,
          a = t.options.macros;
        try {
          for (var o = u(Object.keys(a)), i = o.next(); !i.done; i = o.next()) {
            var s = i.value,
              l = "string" == typeof a[s] ? [a[s]] : a[s],
              c = Array.isArray(l[2])
                ? new p.Macro(
                    s,
                    f.default.MacroWithTemplate,
                    l.slice(0, 2).concat(l[2])
                  )
                : new p.Macro(s, f.default.Macro, l);
            d.add(s, c);
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
      },
      options: { macros: a.expandable({}) },
    });
  },
  function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = e(0),
      n = e(1),
      a = e(19),
      s = e(24),
      o = e(25),
      l = e(2);
    (i.ExtpfeilMethods = {}),
      (i.ExtpfeilMethods.xArrow = a.default.xArrow),
      (i.ExtpfeilMethods.NewExtArrow = function (t, e) {
        var r = t.GetArgument(e),
          n = t.GetArgument(e),
          a = t.GetArgument(e);
        if (!r.match(/^\\([a-z]+|.)$/i))
          throw new l.default(
            "NewextarrowArg1",
            "First argument to %1 must be a control sequence name",
            e
          );
        if (!n.match(/^(\d+),(\d+)$/))
          throw new l.default(
            "NewextarrowArg2",
            "Second argument to %1 must be two integers separated by a comma",
            e
          );
        if (!a.match(/^(\d+|0x[0-9A-F]+)$/i))
          throw new l.default(
            "NewextarrowArg3",
            "Third argument to %1 must be a unicode character number",
            e
          );
        r = r.substr(1);
        var o = n.split(",");
        s.default.addMacro(t, r, i.ExtpfeilMethods.xArrow, [
          parseInt(a),
          parseInt(o[0]),
          parseInt(o[1]),
        ]);
      }),
      new n.CommandMap(
        "extpfeil",
        {
          xtwoheadrightarrow: ["xArrow", 8608, 12, 16],
          xtwoheadleftarrow: ["xArrow", 8606, 17, 13],
          xmapsto: ["xArrow", 8614, 6, 7],
          xlongequal: ["xArrow", 61, 7, 7],
          xtofrom: ["xArrow", 8644, 12, 12],
          Newextarrow: "NewExtArrow",
        },
        i.ExtpfeilMethods
      );
    i.ExtpfeilConfiguration = r.Configuration.create("extpfeil", {
      handler: { macro: ["extpfeil"] },
      init: function (t) {
        o.NewcommandConfiguration.init(t);
      },
    });
  },
  function (t, e, r) {
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(2),
      s = r(12),
      l =
        ((o = s.BaseItem),
        a(c, o),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "beginEnv";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.checkItem = function (t) {
          if (t.isKind("end")) {
            if (t.getName() !== this.getName())
              throw new i.default(
                "EnvBadEnd",
                "\\begin{%1} ended with \\end{%2}",
                this.getName(),
                t.getName()
              );
            return [[this.factory.create("mml", this.toMml())], !0];
          }
          if (t.isKind("stop"))
            throw new i.default(
              "EnvMissingEnd",
              "Missing \\end{%1}",
              this.getName()
            );
          return o.prototype.checkItem.call(this, t);
        }),
        c);
    function c() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.BeginEnvItem = l;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      a = r(1),
      o = r(56);
    new a.CommandMap(
      "html_macros",
      { href: "Href", class: "Class", style: "Style", cssId: "Id" },
      o.default
    ),
      (e.HtmlConfiguration = n.Configuration.create("html", {
        handler: { macro: ["html_macros"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(3),
      n = {
        Href: function (t, e) {
          var r = t.GetArgument(e),
            n = i(t, e);
          o.default.setAttribute(n, "href", r), t.Push(n);
        },
        Class: function (t, e) {
          var r = t.GetArgument(e),
            n = i(t, e),
            a = o.default.getAttribute(n, "class");
          a && (r = a + " " + r),
            o.default.setAttribute(n, "class", r),
            t.Push(n);
        },
        Style: function (t, e) {
          var r = t.GetArgument(e),
            n = i(t, e),
            a = o.default.getAttribute(n, "style");
          a &&
            (";" !== r.charAt(r.length - 1) && (r += ";"), (r = a + " " + r)),
            o.default.setAttribute(n, "style", r),
            t.Push(n);
        },
        Id: function (t, e) {
          var r = t.GetArgument(e),
            n = i(t, e);
          o.default.setAttribute(n, "id", r), t.Push(n);
        },
      },
      i = function (t, e) {
        var r = t.ParseArg(e);
        if (!o.default.isInferred(r)) return r;
        var n = o.default.getChildren(r);
        if (1 === n.length) return n[0];
        var a = t.create("node", "mrow");
        return o.default.copyChildren(r, a), o.default.copyAttributes(r, a), a;
      };
    e.default = n;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      a = r(1),
      i = r(2),
      o = r(9),
      s = r(19),
      l = r(86),
      c = {};
    (c.Macro = o.default.Macro),
      (c.xArrow = s.default.xArrow),
      (c.Machine = function (t, e, r) {
        try {
          var n = t.GetArgument(e),
            a = l.mhchemParser.go(n, r),
            o = l.texify.go(a);
          (t.string = o + t.string.substr(t.i)), (t.i = 0);
        } catch (t) {
          throw new i.default(t[0], t[1], t.slice(2));
        }
      }),
      new a.CommandMap(
        "mhchem",
        {
          ce: ["Machine", "ce"],
          pu: ["Machine", "pu"],
          longrightleftharpoons: [
            "Macro",
            "\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}",
          ],
          longRightleftharpoons: [
            "Macro",
            "\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{\\leftharpoondown}}",
          ],
          longLeftrightharpoons: [
            "Macro",
            "\\stackrel{\\textstyle\\vphantom{{-}}{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}",
          ],
          longleftrightarrows: [
            "Macro",
            "\\stackrel{\\longrightarrow}{\\smash{\\longleftarrow}\\Rule{0px}{.25em}{0px}}",
          ],
          tripledash: [
            "Macro",
            "\\vphantom{-}\\raise2mu{\\kern2mu\\tiny\\text{-}\\kern1mu\\text{-}\\kern1mu\\text{-}\\kern2mu}",
          ],
          xrightarrow: ["xArrow", 8594, 5, 6],
          xleftarrow: ["xArrow", 8592, 7, 3],
          xleftrightarrow: ["xArrow", 8596, 6, 6],
          xrightleftharpoons: ["xArrow", 8652, 5, 7],
          xRightleftharpoons: ["xArrow", 8652, 5, 7],
          xLeftrightharpoons: ["xArrow", 8652, 5, 7],
        },
        c
      ),
      (e.MhchemConfiguration = n.Configuration.create("mhchem", {
        handler: { macro: ["mhchem"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0);
    e.NoErrorsConfiguration = n.Configuration.create("noerrors", {
      nodes: {
        error: function (t, e, r, n) {
          var a = t.create("token", "mtext", {}, n.replace(/\n/g, " "));
          return t.create("node", "merror", [a], { "data-mjx-error": e });
        },
      },
    });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0);
    e.NoUndefinedConfiguration = n.Configuration.create("noundefined", {
      fallback: {
        macro: function (t, e) {
          var r = t.create("text", "\\" + e);
          t.Push(t.create("node", "mtext", [], { mathcolor: "red" }, r));
        },
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      o = r(61);
    r(87),
      (e.PhysicsConfiguration = a.Configuration.create("physics", {
        handler: {
          macro: [
            "Physics-automatic-bracing-macros",
            "Physics-vector-macros",
            "Physics-vector-chars",
            "Physics-derivative-macros",
            "Physics-expressions-macros",
            "Physics-quick-quad-macros",
            "Physics-bra-ket-macros",
            "Physics-matrix-macros",
          ],
          character: ["Physics-characters"],
          environment: ["Physics-aux-envs"],
        },
        items: ((n = {}), (n[o.AutoOpen.prototype.kind] = o.AutoOpen), n),
      }));
  },
  function (t, e, r) {
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(12),
      s = r(4),
      l = r(6),
      c =
        ((o = i.BaseItem),
        a(u, o),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "auto open";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.toMml = function () {
          var t = this.factory.configuration.parser,
            e = this.getProperty("right");
          if (this.getProperty("smash")) {
            var r = o.prototype.toMml.call(this),
              n = t.create("node", "mpadded", [r], { height: 0, depth: 0 });
            this.Clear(), this.Push(t.create("node", "TeXAtom", [n]));
          }
          e && this.Push(new l.default(e, t.stack.env, t.configuration).mml());
          var a = o.prototype.toMml.call(this);
          return s.default.fenced(
            this.factory.configuration,
            this.getProperty("open"),
            a,
            this.getProperty("close"),
            this.getProperty("big")
          );
        }),
        (u.prototype.checkItem = function (t) {
          var e = t.getProperty("autoclose");
          return e && e === this.getProperty("close")
            ? this.getProperty("ignore")
              ? (this.Clear(), [[], !0])
              : [[this.toMml()], !0]
            : o.prototype.checkItem.call(this, t);
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.AutoOpen = c;
  },
  function (t, e, r) {
    "use strict";
    var s =
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
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(9),
      v = r(6),
      m = r(2),
      g = r(5),
      y = r(4),
      b = r(3),
      l = r(16),
      a = {},
      x = { "(": ")", "[": "]", "{": "}", "|": "|" },
      _ = /^(b|B)i(g{1,2})$/;
    (a.Quantity = function (t, e, r, n, a, o, i) {
      void 0 === r && (r = "("),
        void 0 === n && (n = ")"),
        void 0 === a && (a = !1),
        void 0 === o && (o = ""),
        void 0 === i && (i = "");
      var s = !!a && t.GetStar(),
        l = t.GetNext(),
        c = t.i,
        u = null;
      if ("\\" === l) {
        if ((t.i++, !(u = t.GetCS()).match(_))) {
          var p = t.create("node", "mrow");
          return (
            t.Push(y.default.fenced(t.configuration, r, p, n)), void (t.i = c)
          );
        }
        l = t.GetNext();
      }
      var f = x[l];
      if (a && "{" !== l)
        throw new m.default(
          "MissingArgFor",
          "Missing argument for %1",
          t.currentCS
        );
      if (!f) {
        p = t.create("node", "mrow");
        return (
          t.Push(y.default.fenced(t.configuration, r, p, n)), void (t.i = c)
        );
      }
      if (o) {
        var d = t.create("token", "mi", { texClass: g.TEXCLASS.OP }, o);
        i && b.default.setAttribute(d, "mathvariant", i),
          t.Push(t.itemFactory.create("fn", d));
      }
      if ("{" === l) {
        var h = t.GetArgument(e);
        return (
          (l = a ? r : "\\{"),
          (f = a ? n : "\\}"),
          (h = s
            ? l + " " + h + " " + f
            : u
            ? "\\" + u + "l" + l + " " + h + " \\" + u + "r" + f
            : "\\left" + l + " " + h + " \\right" + f),
          void t.Push(new v.default(h, t.stack.env, t.configuration).mml())
        );
      }
      a && ((l = r), (f = n)),
        t.i++,
        t.Push(
          t.itemFactory
            .create("auto open")
            .setProperties({ open: l, close: f, big: u })
        );
    }),
      (a.Eval = function (t, e) {
        var r = t.GetStar(),
          n = t.GetNext();
        if ("{" !== n) {
          if ("(" === n || "[" === n)
            return (
              t.i++,
              void t.Push(
                t.itemFactory
                  .create("auto open")
                  .setProperties({
                    open: n,
                    close: "|",
                    smash: r,
                    right: "\\vphantom{\\int}",
                  })
              )
            );
          throw new m.default(
            "MissingArgFor",
            "Missing argument for %1",
            t.currentCS
          );
        }
        var a = t.GetArgument(e),
          o =
            "\\left. " +
            (r ? "\\smash{" + a + "}" : a) +
            " \\vphantom{\\int}\\right|";
        t.string = t.string.slice(0, t.i) + o + t.string.slice(t.i);
      }),
      (a.Commutator = function (t, e, r, n) {
        void 0 === r && (r = "["), void 0 === n && (n = "]");
        var a = t.GetStar(),
          o = t.GetNext(),
          i = null;
        if ("\\" === o) {
          if ((t.i++, !(i = t.GetCS()).match(_)))
            throw new m.default(
              "MissingArgFor",
              "Missing argument for %1",
              t.currentCS
            );
          o = t.GetNext();
        }
        if ("{" !== o)
          throw new m.default(
            "MissingArgFor",
            "Missing argument for %1",
            t.currentCS
          );
        var s = t.GetArgument(e) + "," + t.GetArgument(e);
        (s = a
          ? r + " " + s + " " + n
          : i
          ? "\\" + i + "l" + r + " " + s + " \\" + i + "r" + n
          : "\\left" + r + " " + s + " \\right" + n),
          t.Push(new v.default(s, t.stack.env, t.configuration).mml());
      });
    var c = [65, 90],
      u = [97, 122],
      p = [913, 937],
      f = [945, 969],
      d = [48, 57];
    function h(t, e) {
      return t >= e[0] && t <= e[1];
    }
    function A(t, e, r, n) {
      var a = t.configuration.parser,
        o = l.NodeFactory.createToken(t, e, r, n),
        i = n.charCodeAt(0);
      return (
        1 === n.length &&
          !a.stack.env.font &&
          a.stack.env.vectorFont &&
          (h(i, c) ||
            h(i, u) ||
            h(i, p) ||
            h(i, d) ||
            (h(i, f) && a.stack.env.vectorStar) ||
            b.default.getAttribute(o, "accent")) &&
          b.default.setAttribute(o, "mathvariant", a.stack.env.vectorFont),
        o
      );
    }
    (a.VectorBold = function (t, e) {
      var r = t.GetStar(),
        n = t.GetArgument(e),
        a = t.configuration.nodeFactory.get("token"),
        o = t.stack.env.font;
      delete t.stack.env.font,
        t.configuration.nodeFactory.set("token", A),
        (t.stack.env.vectorFont = r ? "bold-italic" : "bold"),
        (t.stack.env.vectorStar = r);
      var i = new v.default(n, t.stack.env, t.configuration).mml();
      o && (t.stack.env.font = o),
        delete t.stack.env.vectorFont,
        delete t.stack.env.vectorStar,
        t.configuration.nodeFactory.set("token", a),
        t.Push(i);
    }),
      (a.StarMacro = function (t, e, r) {
        for (var n = [], a = 3; a < arguments.length; a++)
          n[a - 3] = arguments[a];
        var o = t.GetStar(),
          i = [];
        if (r) for (var s = i.length; s < r; s++) i.push(t.GetArgument(e));
        var l = n.join(o ? "*" : "");
        if (
          ((l = y.default.substituteArgs(t, i, l)),
          (t.string = y.default.addArgs(t, l, t.string.slice(t.i))),
          (t.i = 0),
          ++t.macroCount > t.configuration.options.maxMacros)
        )
          throw new m.default(
            "MaxMacroSub1",
            "MathJax maximum macro substitution count exceeded; is there a recursive macro call?"
          );
      });
    function o(t, e, r, n, a) {
      var o = new v.default(n, t.stack.env, t.configuration).mml();
      t.Push(t.itemFactory.create(e, o));
      var i = t.GetNext(),
        s = x[i];
      if (s) {
        var l = -1 !== a.indexOf(i);
        if ("{" === i) {
          var c =
            (l ? "\\left\\{" : "") +
            " " +
            t.GetArgument(r) +
            " " +
            (l ? "\\right\\}" : "");
          return (t.string = c + t.string.slice(t.i)), void (t.i = 0);
        }
        l &&
          (t.i++,
          t.Push(
            t.itemFactory
              .create("auto open")
              .setProperties({ open: i, close: s })
          ));
      }
    }
    function w(t, e, r) {
      var n = s(t, 3),
        a = n[0],
        o = n[1],
        i = n[2];
      return e && r
        ? "\\left\\langle{" +
            a +
            "}\\middle\\vert{" +
            o +
            "}\\middle\\vert{" +
            i +
            "}\\right\\rangle"
        : e
        ? "\\langle{" + a + "}\\vert{" + o + "}\\vert{" + i + "}\\rangle"
        : "\\left\\langle{" +
          a +
          "}\\right\\vert{" +
          o +
          "}\\left\\vert{" +
          i +
          "}\\right\\rangle";
    }
    (a.OperatorApplication = function (t, e, r) {
      for (var n = [], a = 3; a < arguments.length; a++)
        n[a - 3] = arguments[a];
      o(t, "fn", e, r, n);
    }),
      (a.VectorOperator = function (t, e, r) {
        for (var n = [], a = 3; a < arguments.length; a++)
          n[a - 3] = arguments[a];
        o(t, "mml", e, r, n);
      }),
      (a.Expression = function (t, e, r, n) {
        void 0 === r && (r = !0),
          void 0 === n && (n = ""),
          (n = n || e.slice(1));
        var a = r ? t.GetBrackets(e) : null,
          o = t.create("token", "mi", { texClass: g.TEXCLASS.OP }, n);
        if (a) {
          var i = new v.default(a, t.stack.env, t.configuration).mml();
          o = t.create("node", "msup", [o, i]);
        }
        t.Push(t.itemFactory.create("fn", o)),
          "(" === t.GetNext() &&
            (t.i++,
            t.Push(
              t.itemFactory
                .create("auto open")
                .setProperties({ open: "(", close: ")" })
            ));
      }),
      (a.Qqtext = function (t, e, r) {
        var n =
          (t.GetStar() ? "" : "\\quad") +
          "\\text{" +
          (r || t.GetArgument(e)) +
          "}\\quad ";
        t.string = t.string.slice(0, t.i) + n + t.string.slice(t.i);
      }),
      (a.Differential = function (t, e, r) {
        var n = t.GetBrackets(e),
          a = null != n ? "^{" + n + "}" : " ",
          o = "(" === t.GetNext(),
          i = "{" === t.GetNext(),
          s = r + a;
        if (o || i)
          if (i) {
            s += t.GetArgument(e);
            l = new v.default(s, t.stack.env, t.configuration).mml();
            t.Push(
              t.create("node", "TeXAtom", [l], { texClass: g.TEXCLASS.OP })
            );
          } else
            t.Push(new v.default(s, t.stack.env, t.configuration).mml()),
              t.i++,
              t.Push(
                t.itemFactory
                  .create("auto open")
                  .setProperties({ open: "(", close: ")" })
              );
        else {
          s += t.GetArgument(e, !0) || "";
          var l = new v.default(s, t.stack.env, t.configuration).mml();
          t.Push(l);
        }
      }),
      (a.Derivative = function (t, e, r, n) {
        var a = t.GetStar(),
          o = t.GetBrackets(e),
          i = 1,
          s = [];
        for (s.push(t.GetArgument(e)); "{" === t.GetNext() && i < r; )
          s.push(t.GetArgument(e)), i++;
        var l = !1,
          c = " ",
          u = " ";
        2 < r && 2 < s.length
          ? ((c = "^{" + (s.length - 1) + "}"), (l = !0))
          : null != o &&
            (2 < r && 1 < s.length && (l = !0), (u = c = "^{" + o + "}"));
        for (
          var p = a ? "\\flatfrac" : "\\frac",
            f = 1 < s.length ? s[0] : "",
            d = 1 < s.length ? s[1] : s[0],
            h = "",
            m = 2,
            g = void 0;
          (g = s[m]);
          m++
        )
          h += n + " " + g;
        var y = p + "{" + n + c + f + "}{" + n + " " + d + u + " " + h + "}";
        t.Push(new v.default(y, t.stack.env, t.configuration).mml()),
          "(" === t.GetNext() &&
            (t.i++,
            t.Push(
              t.itemFactory
                .create("auto open")
                .setProperties({ open: "(", close: ")", ignore: l })
            ));
      }),
      (a.Bra = function (t, e) {
        var r = t.GetStar(),
          n = t.GetArgument(e),
          a = "",
          o = !1,
          i = !1;
        if ("\\" === t.GetNext()) {
          var s = t.i;
          t.i++;
          var l = t.GetCS(),
            c = t.lookup("macro", l);
          c && "ket" === c.symbol
            ? ((o = !0),
              (s = t.i),
              (i = t.GetStar()),
              "{" === t.GetNext()
                ? (a = t.GetArgument(l, !0))
                : ((t.i = s), (i = !1)))
            : (t.i = s);
        }
        var u = "";
        (u = o
          ? r || i
            ? "\\langle{" + n + "}\\vert{" + a + "}\\rangle"
            : "\\left\\langle{" +
              n +
              "}\\middle\\vert{" +
              a +
              "}\\right\\rangle"
          : r || i
          ? "\\langle{" + n + "}\\vert"
          : "\\left\\langle{" + n + "}\\right\\vert{" + a + "}"),
          t.Push(new v.default(u, t.stack.env, t.configuration).mml());
      }),
      (a.Ket = function (t, e) {
        var r = t.GetStar(),
          n = t.GetArgument(e),
          a = r
            ? "\\vert{" + n + "}\\rangle"
            : "\\left\\vert{" + n + "}\\right\\rangle";
        t.Push(new v.default(a, t.stack.env, t.configuration).mml());
      }),
      (a.BraKet = function (t, e) {
        var r = t.GetStar(),
          n = t.GetArgument(e),
          a = null;
        "{" === t.GetNext() && (a = t.GetArgument(e, !0));
        var o = "";
        (o =
          null == a
            ? r
              ? "\\langle{" + n + "}\\vert{" + n + "}\\rangle"
              : "\\left\\langle{" +
                n +
                "}\\middle\\vert{" +
                n +
                "}\\right\\rangle"
            : r
            ? "\\langle{" + n + "}\\vert{" + a + "}\\rangle"
            : "\\left\\langle{" +
              n +
              "}\\middle\\vert{" +
              a +
              "}\\right\\rangle"),
          t.Push(new v.default(o, t.stack.env, t.configuration).mml());
      }),
      (a.KetBra = function (t, e) {
        var r = t.GetStar(),
          n = t.GetArgument(e),
          a = null;
        "{" === t.GetNext() && (a = t.GetArgument(e, !0));
        var o = "";
        (o =
          null == a
            ? r
              ? "\\vert{" + n + "}\\rangle\\!\\langle{" + n + "}\\vert"
              : "\\left\\vert{" +
                n +
                "}\\middle\\rangle\\!\\middle\\langle{" +
                n +
                "}\\right\\vert"
            : r
            ? "\\vert{" + n + "}\\rangle\\!\\langle{" + a + "}\\vert"
            : "\\left\\vert{" +
              n +
              "}\\middle\\rangle\\!\\middle\\langle{" +
              a +
              "}\\right\\vert"),
          t.Push(new v.default(o, t.stack.env, t.configuration).mml());
      }),
      (a.Expectation = function (t, e) {
        var r = t.GetStar(),
          n = r && t.GetStar(),
          a = (t.GetNext(), t.GetArgument(e)),
          o = null;
        "{" === t.GetNext() && (o = t.GetArgument(e, !0));
        var i =
          a && o
            ? w([o, a, o], r, n)
            : r
            ? "\\langle {" + a + "} \\rangle"
            : "\\left\\langle {" + a + "} \\right\\rangle";
        t.Push(new v.default(i, t.stack.env, t.configuration).mml());
      }),
      (a.MatrixElement = function (t, e) {
        var r = t.GetStar(),
          n = r && t.GetStar(),
          a =
            (t.GetNext(),
            w([t.GetArgument(e), t.GetArgument(e), t.GetArgument(e)], r, n));
        t.Push(new v.default(a, t.stack.env, t.configuration).mml());
      }),
      (a.MatrixQuantity = function (t, e, r) {
        var n = t.GetStar(),
          a = r ? "smallmatrix" : "array",
          o = "",
          i = "",
          s = "";
        switch (t.GetNext()) {
          case "{":
            o = t.GetArgument(e);
            break;
          case "(":
            t.i++,
              (i = n ? "\\lgroup" : "("),
              (s = n ? "\\rgroup" : ")"),
              (o = t.GetUpTo(e, ")"));
            break;
          case "[":
            t.i++, (i = "["), (s = "]"), (o = t.GetUpTo(e, "]"));
            break;
          case "|":
            t.i++, (s = i = "|"), (o = t.GetUpTo(e, "|"));
            break;
          default:
            (i = "("), (s = ")");
        }
        var l =
          (i ? "\\left" : "") +
          i +
          "\\begin{" +
          a +
          "}{} " +
          o +
          "\\end{" +
          a +
          "}" +
          (i ? "\\right" : "") +
          s;
        t.Push(new v.default(l, t.stack.env, t.configuration).mml());
      }),
      (a.IdentityMatrix = function (t, e) {
        var r = t.GetArgument(e),
          n = parseInt(r, 10);
        if (isNaN(n)) throw new m.default("InvalidNumber", "Invalid number");
        if (n <= 1)
          return (t.string = "1" + t.string.slice(t.i)), void (t.i = 0);
        for (var a = Array(n).fill("0"), o = [], i = 0; i < n; i++) {
          var s = a.slice();
          (s[i] = "1"), o.push(s.join(" & "));
        }
        (t.string = o.join("\\\\ ") + t.string.slice(t.i)), (t.i = 0);
      }),
      (a.XMatrix = function (t, e) {
        var r = t.GetStar(),
          n = t.GetArgument(e),
          a = t.GetArgument(e),
          o = t.GetArgument(e),
          i = parseInt(a, 10),
          s = parseInt(o, 10);
        if (isNaN(i) || isNaN(s) || s.toString() !== o || i.toString() !== a)
          throw new m.default("InvalidNumber", "Invalid number");
        if (((i = i < 1 ? 1 : i), (s = s < 1 ? 1 : s), !r)) {
          var l = Array(s).fill(n).join(" & "),
            c = Array(i).fill(l).join("\\\\ ");
          return (t.string = c + t.string.slice(t.i)), void (t.i = 0);
        }
        var u = "";
        if (1 === i && 1 === s) u = n;
        else if (1 === i) {
          l = [];
          for (var p = 1; p <= s; p++) l.push(n + "_{" + p + "}");
          u = l.join(" & ");
        } else if (1 === s) {
          for (l = [], p = 1; p <= i; p++) l.push(n + "_{" + p + "}");
          u = l.join("\\\\ ");
        } else {
          var f = [];
          for (p = 1; p <= i; p++) {
            l = [];
            for (var d = 1; d <= s; d++)
              l.push(n + "_{{" + p + "}{" + d + "}}");
            f.push(l.join(" & "));
          }
          u = f.join("\\\\ ");
        }
        (t.string = u + t.string.slice(t.i)), (t.i = 0);
      }),
      (a.PauliMatrix = function (t, e) {
        var r = t.GetArgument(e),
          n = r.slice(1);
        switch (r[0]) {
          case "0":
            n += " 1 & 0\\\\ 0 & 1";
            break;
          case "1":
          case "x":
            n += " 0 & 1\\\\ 1 & 0";
            break;
          case "2":
          case "y":
            n += " 0 & -i\\\\ i & 0";
            break;
          case "3":
          case "z":
            n += " 1 & 0\\\\ 0 & -1";
        }
        (t.string = n + t.string.slice(t.i)), (t.i = 0);
      }),
      (a.DiagonalMatrix = function (e, t, r) {
        if ("{" === e.GetNext()) {
          var n = e.i,
            a = (e.GetArgument(t), e.i);
          e.i = n + 1;
          for (var o = [], i = "", s = e.i; s < a; ) {
            try {
              i = e.GetUpTo(t, ",");
            } catch (t) {
              (e.i = a), o.push(e.string.slice(s, a - 1));
              break;
            }
            if (e.i >= a) {
              o.push(e.string.slice(s, a));
              break;
            }
            (s = e.i), o.push(i);
          }
          (e.string =
            (function (t, e) {
              for (var r = t.length, n = [], a = 0; a < r; a++)
                n.push(
                  Array(e ? r - a : a + 1).join("&") + "\\mqty{" + t[a] + "}"
                );
              return n.join("\\\\ ");
            })(o, r) + e.string.slice(a)),
            (e.i = 0);
        }
      }),
      (a.AutoClose = function (t, e, r) {
        var n = t.create("token", "mo", { stretchy: !1 }, e),
          a = t.itemFactory.create("mml", n).setProperties({ autoclose: e });
        t.Push(a);
      }),
      (a.Macro = n.default.Macro),
      (a.NamedFn = n.default.NamedFn),
      (a.Array = n.default.Array),
      (e.default = a);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      u = r(2),
      a = r(1),
      p = r(4),
      f = r(3),
      d = r(11);
    e.UnicodeMethods = {};
    var h = {};
    (e.UnicodeMethods.Unicode = function (t, e) {
      var r = t.GetBrackets(e),
        n = null,
        a = null;
      r &&
        (a = r
          .replace(/ /g, "")
          .match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)
          ? ((n = r.replace(/ /g, "").split(/,/)), t.GetBrackets(e))
          : r);
      var o = p.default.trimSpaces(t.GetArgument(e)).replace(/^0x/, "x");
      if (!o.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/))
        throw new u.default(
          "BadUnicode",
          "Argument to \\unicode must be a number"
        );
      var i = parseInt(o.match(/^x/) ? "0" + o : o);
      h[i] ? (a = a || h[i][2]) : (h[i] = [800, 200, a, i]),
        n &&
          ((h[i][0] = Math.floor(1e3 * parseFloat(n[0]))),
          (h[i][1] = Math.floor(1e3 * parseFloat(n[1]))));
      var s = t.stack.env.font,
        l = {};
      a
        ? ((h[i][2] = l.fontfamily = a.replace(/'/g, "'")),
          s &&
            (s.match(/bold/) && (l.fontweight = "bold"),
            s.match(/italic|-mathit/) && (l.fontstyle = "italic")))
        : s && (l.mathvariant = s);
      var c = t.create("token", "mtext", l, d.numeric(o));
      f.default.setProperty(c, "unicode", !0), t.Push(c);
    }),
      new a.CommandMap("unicode", { unicode: "Unicode" }, e.UnicodeMethods),
      (e.UnicodeConfiguration = n.Configuration.create("unicode", {
        handler: { macro: ["unicode"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = r(7),
      a = r(1),
      i = r(2);
    (e.VerbMethods = {}),
      (e.VerbMethods.Verb = function (t, e) {
        var r = t.GetNext(),
          n = ++t.i;
        if ("" === r)
          throw new i.default("MissingArgFor", "Missing argument for %1", e);
        for (; t.i < t.string.length && t.string.charAt(t.i) !== r; ) t.i++;
        if (t.i === t.string.length)
          throw new i.default(
            "NoClosingDelim",
            "Can't find closing delimiter for %1",
            t.currentCS
          );
        var a = t.string.slice(n, t.i).replace(/ /g, "\xa0");
        t.i++,
          t.Push(
            t.create(
              "token",
              "mtext",
              { mathvariant: o.TexConstant.Variant.MONOSPACE },
              a
            )
          );
      }),
      new a.CommandMap("verb", { verb: "Verb" }, e.VerbMethods),
      (e.VerbConfiguration = n.Configuration.create("verb", {
        handler: { macro: ["verb"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PackageError = MathJax._.components.package.PackageError),
      (e.Package = MathJax._.components.package.Package);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Loader = MathJax._.components.loader.Loader),
      (e.MathJax = MathJax._.components.loader.MathJax),
      (e.CONFIG = MathJax._.components.loader.CONFIG);
  },
  function (t, e, r) {
    "use strict";
    r(68);
    var n = r(91),
      a = r(66),
      o = r(33);
    r(26),
      a.Loader.preLoad("input/tex-base", "[tex]/all-packages", "[tex]/require"),
      (0, n.registerTeX)(
        ["require"].concat(
          (function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, r = Array(t.length); e < t.length; e++)
                r[e] = t[e];
              return r;
            }
            return Array.from(t);
          })(o.AllPackages)
        )
      );
  },
  function (t, e, r) {
    "use strict";
    var n = r(69),
      a = ft(r(27)),
      o = ft(r(33)),
      i = ft(r(0)),
      s = ft(r(29)),
      l = ft(r(28)),
      c = ft(r(8)),
      u = ft(r(16)),
      p = ft(r(3)),
      f = ft(r(13)),
      d = ft(r(31)),
      h = ft(r(4)),
      m = ft(r(21)),
      g = ft(r(12)),
      y = ft(r(32)),
      v = ft(r(14)),
      b = ft(r(1)),
      x = ft(r(15)),
      _ = ft(r(7)),
      A = ft(r(2)),
      w = ft(r(6)),
      M = ft(r(34)),
      P = ft(r(37)),
      C = ft(r(38)),
      S = ft(r(35)),
      T = ft(r(36)),
      k = ft(r(19)),
      O = ft(r(88)),
      E = ft(r(17)),
      N = ft(r(18)),
      I = ft(r(9)),
      q = ft(r(39)),
      L = ft(r(40)),
      F = ft(r(41)),
      B = ft(r(42)),
      G = ft(r(43)),
      R = ft(r(44)),
      j = ft(r(45)),
      D = ft(r(46)),
      $ = ft(r(20)),
      X = ft(r(47)),
      V = ft(r(51)),
      H = ft(r(48)),
      z = ft(r(49)),
      U = ft(r(50)),
      K = ft(r(52)),
      J = ft(r(22)),
      W = ft(r(53)),
      Q = ft(r(55)),
      Z = ft(r(56)),
      Y = ft(r(57)),
      tt = ft(r(25)),
      et = ft(r(54)),
      rt = ft(r(23)),
      nt = ft(r(24)),
      at = ft(r(58)),
      ot = ft(r(59)),
      it = ft(r(60)),
      st = ft(r(61)),
      lt = ft(r(62)),
      ct = ft(r(26)),
      ut = ft(r(63)),
      pt = ft(r(64));
    function ft(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return (e.default = t), e;
    }
    (0, n.combineWithMathJax)({
      _: {
        input: {
          tex_ts: a,
          tex: {
            AllPackages: o,
            Configuration: i,
            FilterUtil: s,
            FindTeX: l,
            MapHandler: c,
            NodeFactory: u,
            NodeUtil: p,
            ParseMethods: f,
            ParseOptions: d,
            ParseUtil: h,
            Stack: m,
            StackItem: g,
            StackItemFactory: y,
            Symbol: v,
            SymbolMap: b,
            Tags: x,
            TexConstants: _,
            TexError: A,
            TexParser: w,
            action: { ActionConfiguration: M },
            ams_cd: { AmsCdConfiguration: P, AmsCdMethods: C },
            ams: { AmsConfiguration: S, AmsItems: T, AmsMethods: k },
            autoload: { AutoloadConfiguration: O },
            base: { BaseConfiguration: E, BaseItems: N, BaseMethods: I },
            bbox: { BboxConfiguration: q },
            boldsymbol: { BoldsymbolConfiguration: L },
            braket: {
              BraketConfiguration: F,
              BraketItems: B,
              BraketMethods: G,
            },
            bussproofs: {
              BussproofsConfiguration: R,
              BussproofsItems: j,
              BussproofsMethods: D,
              BussproofsUtil: $,
            },
            cancel: { CancelConfiguration: X },
            color_v2: { ColorV2Configuration: V },
            color: { ColorConfiguration: H, ColorMethods: z, ColorUtil: U },
            config_macros: { ConfigMacrosConfiguration: K },
            enclose: { EncloseConfiguration: J },
            extpfeil: { ExtpfeilConfiguration: W },
            html: { HtmlConfiguration: Q, HtmlMethods: Z },
            mhchem: { MhchemConfiguration: Y },
            newcommand: {
              NewcommandConfiguration: tt,
              NewcommandItems: et,
              NewcommandMethods: rt,
              NewcommandUtil: nt,
            },
            noerrors: { NoErrorsConfiguration: at },
            noundefined: { NoUndefinedConfiguration: ot },
            physics: {
              PhysicsConfiguration: it,
              PhysicsItems: st,
              PhysicsMethods: lt,
            },
            require: { RequireConfiguration: ct },
            unicode: { UnicodeConfiguration: ut },
            verb: { VerbConfiguration: pt },
          },
        },
      },
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
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractInputJax = MathJax._.core.InputJax.AbstractInputJax);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractFindMath = MathJax._.core.FindMath.AbstractFindMath);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sortLength = MathJax._.util.string.sortLength),
      (e.quotePattern = MathJax._.util.string.quotePattern),
      (e.unicodeChars = MathJax._.util.string.unicodeChars),
      (e.isPercent = MathJax._.util.string.isPercent),
      (e.split = MathJax._.util.string.split);
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
      (e.MmlMo = MathJax._.core.MmlTree.MmlNodes.mo.MmlMo);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractFactory = MathJax._.core.Tree.Factory.AbstractFactory);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FunctionList = MathJax._.util.FunctionList.FunctionList);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      a = r(7),
      o = r(9),
      i = r(13),
      s = r(5);
    new n.RegExpMap("letter", i.default.variable, /[a-z]/i),
      new n.RegExpMap("digit", i.default.digit, /[0-9.,]/),
      new n.RegExpMap("command", i.default.controlSequence, /^\\/),
      new n.MacroMap(
        "special",
        {
          "{": "Open",
          "}": "Close",
          "~": "Tilde",
          "^": "Superscript",
          _: "Subscript",
          " ": "Space",
          "\t": "Space",
          "\r": "Space",
          "\n": "Space",
          "'": "Prime",
          "%": "Comment",
          "&": "Entry",
          "#": "Hash",
          "\xa0": "Space",
          "\u2019": "Prime",
        },
        o.default
      ),
      new n.CharacterMap("mathchar0mi", i.default.mathchar0mi, {
        alpha: "\u03b1",
        beta: "\u03b2",
        gamma: "\u03b3",
        delta: "\u03b4",
        epsilon: "\u03f5",
        zeta: "\u03b6",
        eta: "\u03b7",
        theta: "\u03b8",
        iota: "\u03b9",
        kappa: "\u03ba",
        lambda: "\u03bb",
        mu: "\u03bc",
        nu: "\u03bd",
        xi: "\u03be",
        omicron: "\u03bf",
        pi: "\u03c0",
        rho: "\u03c1",
        sigma: "\u03c3",
        tau: "\u03c4",
        upsilon: "\u03c5",
        phi: "\u03d5",
        chi: "\u03c7",
        psi: "\u03c8",
        omega: "\u03c9",
        varepsilon: "\u03b5",
        vartheta: "\u03d1",
        varpi: "\u03d6",
        varrho: "\u03f1",
        varsigma: "\u03c2",
        varphi: "\u03c6",
        S: ["\xa7", { mathvariant: a.TexConstant.Variant.NORMAL }],
        aleph: ["\u2135", { mathvariant: a.TexConstant.Variant.NORMAL }],
        hbar: ["\u210f", { variantForm: !0 }],
        imath: "\u0131",
        jmath: "\u0237",
        ell: "\u2113",
        wp: ["\u2118", { mathvariant: a.TexConstant.Variant.NORMAL }],
        Re: ["\u211c", { mathvariant: a.TexConstant.Variant.NORMAL }],
        Im: ["\u2111", { mathvariant: a.TexConstant.Variant.NORMAL }],
        partial: ["\u2202", { mathvariant: a.TexConstant.Variant.NORMAL }],
        infty: ["\u221e", { mathvariant: a.TexConstant.Variant.NORMAL }],
        prime: [
          "\u2032",
          { mathvariant: a.TexConstant.Variant.NORMAL, variantForm: !0 },
        ],
        emptyset: ["\u2205", { mathvariant: a.TexConstant.Variant.NORMAL }],
        nabla: ["\u2207", { mathvariant: a.TexConstant.Variant.NORMAL }],
        top: ["\u22a4", { mathvariant: a.TexConstant.Variant.NORMAL }],
        bot: ["\u22a5", { mathvariant: a.TexConstant.Variant.NORMAL }],
        angle: ["\u2220", { mathvariant: a.TexConstant.Variant.NORMAL }],
        triangle: ["\u25b3", { mathvariant: a.TexConstant.Variant.NORMAL }],
        backslash: [
          "\u2216",
          { mathvariant: a.TexConstant.Variant.NORMAL, variantForm: !0 },
        ],
        forall: ["\u2200", { mathvariant: a.TexConstant.Variant.NORMAL }],
        exists: ["\u2203", { mathvariant: a.TexConstant.Variant.NORMAL }],
        neg: ["\xac", { mathvariant: a.TexConstant.Variant.NORMAL }],
        lnot: ["\xac", { mathvariant: a.TexConstant.Variant.NORMAL }],
        flat: ["\u266d", { mathvariant: a.TexConstant.Variant.NORMAL }],
        natural: ["\u266e", { mathvariant: a.TexConstant.Variant.NORMAL }],
        sharp: ["\u266f", { mathvariant: a.TexConstant.Variant.NORMAL }],
        clubsuit: ["\u2663", { mathvariant: a.TexConstant.Variant.NORMAL }],
        diamondsuit: ["\u2662", { mathvariant: a.TexConstant.Variant.NORMAL }],
        heartsuit: ["\u2661", { mathvariant: a.TexConstant.Variant.NORMAL }],
        spadesuit: ["\u2660", { mathvariant: a.TexConstant.Variant.NORMAL }],
      }),
      new n.CharacterMap("mathchar0mo", i.default.mathchar0mo, {
        surd: "\u221a",
        coprod: ["\u2210", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        bigvee: ["\u22c1", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        bigwedge: ["\u22c0", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        biguplus: ["\u2a04", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        bigcap: ["\u22c2", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        bigcup: ["\u22c3", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        int: ["\u222b", { texClass: s.TEXCLASS.OP }],
        intop: [
          "\u222b",
          { texClass: s.TEXCLASS.OP, movesupsub: !0, movablelimits: !0 },
        ],
        iint: ["\u222c", { texClass: s.TEXCLASS.OP }],
        iiint: ["\u222d", { texClass: s.TEXCLASS.OP }],
        prod: ["\u220f", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        sum: ["\u2211", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        bigotimes: ["\u2a02", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        bigoplus: ["\u2a01", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        bigodot: ["\u2a00", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        oint: ["\u222e", { texClass: s.TEXCLASS.OP }],
        bigsqcup: ["\u2a06", { texClass: s.TEXCLASS.OP, movesupsub: !0 }],
        smallint: ["\u222b", { largeop: !1 }],
        triangleleft: "\u25c3",
        triangleright: "\u25b9",
        bigtriangleup: "\u25b3",
        bigtriangledown: "\u25bd",
        wedge: "\u2227",
        land: "\u2227",
        vee: "\u2228",
        lor: "\u2228",
        cap: "\u2229",
        cup: "\u222a",
        ddagger: "\u2021",
        dagger: "\u2020",
        sqcap: "\u2293",
        sqcup: "\u2294",
        uplus: "\u228e",
        amalg: "\u2a3f",
        diamond: "\u22c4",
        bullet: "\u2219",
        wr: "\u2240",
        div: "\xf7",
        odot: ["\u2299", { largeop: !1 }],
        oslash: ["\u2298", { largeop: !1 }],
        otimes: ["\u2297", { largeop: !1 }],
        ominus: ["\u2296", { largeop: !1 }],
        oplus: ["\u2295", { largeop: !1 }],
        mp: "\u2213",
        pm: "\xb1",
        circ: "\u2218",
        bigcirc: "\u25ef",
        setminus: ["\u2216", { variantForm: !0 }],
        cdot: "\u22c5",
        ast: "\u2217",
        times: "\xd7",
        star: "\u22c6",
        propto: "\u221d",
        sqsubseteq: "\u2291",
        sqsupseteq: "\u2292",
        parallel: "\u2225",
        mid: "\u2223",
        dashv: "\u22a3",
        vdash: "\u22a2",
        leq: "\u2264",
        le: "\u2264",
        geq: "\u2265",
        ge: "\u2265",
        lt: "<",
        gt: ">",
        succ: "\u227b",
        prec: "\u227a",
        approx: "\u2248",
        succeq: "\u2ab0",
        preceq: "\u2aaf",
        supset: "\u2283",
        subset: "\u2282",
        supseteq: "\u2287",
        subseteq: "\u2286",
        in: "\u2208",
        ni: "\u220b",
        notin: "\u2209",
        owns: "\u220b",
        gg: "\u226b",
        ll: "\u226a",
        sim: "\u223c",
        simeq: "\u2243",
        perp: "\u22a5",
        equiv: "\u2261",
        asymp: "\u224d",
        smile: "\u2323",
        frown: "\u2322",
        ne: "\u2260",
        neq: "\u2260",
        cong: "\u2245",
        doteq: "\u2250",
        bowtie: "\u22c8",
        models: "\u22a8",
        notChar: "\u29f8",
        Leftrightarrow: "\u21d4",
        Leftarrow: "\u21d0",
        Rightarrow: "\u21d2",
        leftrightarrow: "\u2194",
        leftarrow: "\u2190",
        gets: "\u2190",
        rightarrow: "\u2192",
        to: "\u2192",
        mapsto: "\u21a6",
        leftharpoonup: "\u21bc",
        leftharpoondown: "\u21bd",
        rightharpoonup: "\u21c0",
        rightharpoondown: "\u21c1",
        nearrow: "\u2197",
        searrow: "\u2198",
        nwarrow: "\u2196",
        swarrow: "\u2199",
        rightleftharpoons: "\u21cc",
        hookrightarrow: "\u21aa",
        hookleftarrow: "\u21a9",
        longleftarrow: "\u27f5",
        Longleftarrow: "\u27f8",
        longrightarrow: "\u27f6",
        Longrightarrow: "\u27f9",
        Longleftrightarrow: "\u27fa",
        longleftrightarrow: "\u27f7",
        longmapsto: "\u27fc",
        ldots: "\u2026",
        cdots: "\u22ef",
        vdots: "\u22ee",
        ddots: "\u22f1",
        dotsc: "\u2026",
        dotsb: "\u22ef",
        dotsm: "\u22ef",
        dotsi: "\u22ef",
        dotso: "\u2026",
        ldotp: [".", { texClass: s.TEXCLASS.PUNCT }],
        cdotp: ["\u22c5", { texClass: s.TEXCLASS.PUNCT }],
        colon: [":", { texClass: s.TEXCLASS.PUNCT }],
      }),
      new n.CharacterMap("mathchar7", i.default.mathchar7, {
        Gamma: "\u0393",
        Delta: "\u0394",
        Theta: "\u0398",
        Lambda: "\u039b",
        Xi: "\u039e",
        Pi: "\u03a0",
        Sigma: "\u03a3",
        Upsilon: "\u03a5",
        Phi: "\u03a6",
        Psi: "\u03a8",
        Omega: "\u03a9",
        _: "_",
        "#": "#",
        $: "$",
        "%": "%",
        "&": "&",
        And: "&",
      }),
      new n.DelimiterMap("delimiter", i.default.delimiter, {
        "(": "(",
        ")": ")",
        "[": "[",
        "]": "]",
        "<": "\u27e8",
        ">": "\u27e9",
        "\\lt": "\u27e8",
        "\\gt": "\u27e9",
        "/": "/",
        "|": ["|", { texClass: s.TEXCLASS.ORD }],
        ".": "",
        "\\\\": "\\",
        "\\lmoustache": "\u23b0",
        "\\rmoustache": "\u23b1",
        "\\lgroup": "\u27ee",
        "\\rgroup": "\u27ef",
        "\\arrowvert": "\u23d0",
        "\\Arrowvert": "\u2016",
        "\\bracevert": "\u23aa",
        "\\Vert": ["\u2225", { texClass: s.TEXCLASS.ORD }],
        "\\|": ["\u2225", { texClass: s.TEXCLASS.ORD }],
        "\\vert": ["|", { texClass: s.TEXCLASS.ORD }],
        "\\uparrow": "\u2191",
        "\\downarrow": "\u2193",
        "\\updownarrow": "\u2195",
        "\\Uparrow": "\u21d1",
        "\\Downarrow": "\u21d3",
        "\\Updownarrow": "\u21d5",
        "\\backslash": "\\",
        "\\rangle": "\u27e9",
        "\\langle": "\u27e8",
        "\\rbrace": "}",
        "\\lbrace": "{",
        "\\}": "}",
        "\\{": "{",
        "\\rceil": "\u2309",
        "\\lceil": "\u2308",
        "\\rfloor": "\u230b",
        "\\lfloor": "\u230a",
        "\\lbrack": "[",
        "\\rbrack": "]",
      }),
      new n.CommandMap(
        "macros",
        {
          displaystyle: ["SetStyle", "D", !0, 0],
          textstyle: ["SetStyle", "T", !1, 0],
          scriptstyle: ["SetStyle", "S", !1, 1],
          scriptscriptstyle: ["SetStyle", "SS", !1, 2],
          rm: ["SetFont", a.TexConstant.Variant.NORMAL],
          mit: ["SetFont", a.TexConstant.Variant.ITALIC],
          oldstyle: ["SetFont", a.TexConstant.Variant.OLDSTYLE],
          cal: ["SetFont", a.TexConstant.Variant.CALLIGRAPHIC],
          it: ["SetFont", "-tex-mathit"],
          bf: ["SetFont", a.TexConstant.Variant.BOLD],
          bbFont: ["SetFont", a.TexConstant.Variant.DOUBLESTRUCK],
          scr: ["SetFont", a.TexConstant.Variant.SCRIPT],
          frak: ["SetFont", a.TexConstant.Variant.FRAKTUR],
          sf: ["SetFont", a.TexConstant.Variant.SANSSERIF],
          tt: ["SetFont", a.TexConstant.Variant.MONOSPACE],
          tiny: ["SetSize", 0.5],
          Tiny: ["SetSize", 0.6],
          scriptsize: ["SetSize", 0.7],
          small: ["SetSize", 0.85],
          normalsize: ["SetSize", 1],
          large: ["SetSize", 1.2],
          Large: ["SetSize", 1.44],
          LARGE: ["SetSize", 1.73],
          huge: ["SetSize", 2.07],
          Huge: ["SetSize", 2.49],
          arcsin: ["NamedFn"],
          arccos: ["NamedFn"],
          arctan: ["NamedFn"],
          arg: ["NamedFn"],
          cos: ["NamedFn"],
          cosh: ["NamedFn"],
          cot: ["NamedFn"],
          coth: ["NamedFn"],
          csc: ["NamedFn"],
          deg: ["NamedFn"],
          det: "NamedOp",
          dim: ["NamedFn"],
          exp: ["NamedFn"],
          gcd: "NamedOp",
          hom: ["NamedFn"],
          inf: "NamedOp",
          ker: ["NamedFn"],
          lg: ["NamedFn"],
          lim: "NamedOp",
          liminf: ["NamedOp", "lim&thinsp;inf"],
          limsup: ["NamedOp", "lim&thinsp;sup"],
          ln: ["NamedFn"],
          log: ["NamedFn"],
          max: "NamedOp",
          min: "NamedOp",
          Pr: "NamedOp",
          sec: ["NamedFn"],
          sin: ["NamedFn"],
          sinh: ["NamedFn"],
          sup: "NamedOp",
          tan: ["NamedFn"],
          tanh: ["NamedFn"],
          limits: ["Limits", 1],
          nolimits: ["Limits", 0],
          overline: ["UnderOver", "00AF", null, 1],
          underline: ["UnderOver", "005F"],
          overbrace: ["UnderOver", "23DE", 1],
          underbrace: ["UnderOver", "23DF", 1],
          overparen: ["UnderOver", "23DC"],
          underparen: ["UnderOver", "23DD"],
          overrightarrow: ["UnderOver", "2192"],
          underrightarrow: ["UnderOver", "2192"],
          overleftarrow: ["UnderOver", "2190"],
          underleftarrow: ["UnderOver", "2190"],
          overleftrightarrow: ["UnderOver", "2194"],
          underleftrightarrow: ["UnderOver", "2194"],
          overset: "Overset",
          underset: "Underset",
          stackrel: ["Macro", "\\mathrel{\\mathop{#2}\\limits^{#1}}", 2],
          over: "Over",
          overwithdelims: "Over",
          atop: "Over",
          atopwithdelims: "Over",
          above: "Over",
          abovewithdelims: "Over",
          brace: ["Over", "{", "}"],
          brack: ["Over", "[", "]"],
          choose: ["Over", "(", ")"],
          frac: "Frac",
          sqrt: "Sqrt",
          root: "Root",
          uproot: ["MoveRoot", "upRoot"],
          leftroot: ["MoveRoot", "leftRoot"],
          left: "LeftRight",
          right: "LeftRight",
          middle: "Middle",
          llap: "Lap",
          rlap: "Lap",
          raise: "RaiseLower",
          lower: "RaiseLower",
          moveleft: "MoveLeftRight",
          moveright: "MoveLeftRight",
          ",": ["Spacer", a.TexConstant.Length.THINMATHSPACE],
          ":": ["Spacer", a.TexConstant.Length.MEDIUMMATHSPACE],
          ">": ["Spacer", a.TexConstant.Length.MEDIUMMATHSPACE],
          ";": ["Spacer", a.TexConstant.Length.THICKMATHSPACE],
          "!": ["Spacer", a.TexConstant.Length.NEGATIVETHINMATHSPACE],
          enspace: ["Spacer", ".5em"],
          quad: ["Spacer", "1em"],
          qquad: ["Spacer", "2em"],
          thinspace: ["Spacer", a.TexConstant.Length.THINMATHSPACE],
          negthinspace: ["Spacer", a.TexConstant.Length.NEGATIVETHINMATHSPACE],
          hskip: "Hskip",
          hspace: "Hskip",
          kern: "Hskip",
          mskip: "Hskip",
          mspace: "Hskip",
          mkern: "Hskip",
          rule: "rule",
          Rule: ["Rule"],
          Space: ["Rule", "blank"],
          big: ["MakeBig", s.TEXCLASS.ORD, 0.85],
          Big: ["MakeBig", s.TEXCLASS.ORD, 1.15],
          bigg: ["MakeBig", s.TEXCLASS.ORD, 1.45],
          Bigg: ["MakeBig", s.TEXCLASS.ORD, 1.75],
          bigl: ["MakeBig", s.TEXCLASS.OPEN, 0.85],
          Bigl: ["MakeBig", s.TEXCLASS.OPEN, 1.15],
          biggl: ["MakeBig", s.TEXCLASS.OPEN, 1.45],
          Biggl: ["MakeBig", s.TEXCLASS.OPEN, 1.75],
          bigr: ["MakeBig", s.TEXCLASS.CLOSE, 0.85],
          Bigr: ["MakeBig", s.TEXCLASS.CLOSE, 1.15],
          biggr: ["MakeBig", s.TEXCLASS.CLOSE, 1.45],
          Biggr: ["MakeBig", s.TEXCLASS.CLOSE, 1.75],
          bigm: ["MakeBig", s.TEXCLASS.REL, 0.85],
          Bigm: ["MakeBig", s.TEXCLASS.REL, 1.15],
          biggm: ["MakeBig", s.TEXCLASS.REL, 1.45],
          Biggm: ["MakeBig", s.TEXCLASS.REL, 1.75],
          mathord: ["TeXAtom", s.TEXCLASS.ORD],
          mathop: ["TeXAtom", s.TEXCLASS.OP],
          mathopen: ["TeXAtom", s.TEXCLASS.OPEN],
          mathclose: ["TeXAtom", s.TEXCLASS.CLOSE],
          mathbin: ["TeXAtom", s.TEXCLASS.BIN],
          mathrel: ["TeXAtom", s.TEXCLASS.REL],
          mathpunct: ["TeXAtom", s.TEXCLASS.PUNCT],
          mathinner: ["TeXAtom", s.TEXCLASS.INNER],
          vcenter: ["TeXAtom", s.TEXCLASS.VCENTER],
          buildrel: "BuildRel",
          hbox: ["HBox", 0],
          text: "HBox",
          mbox: ["HBox", 0],
          fbox: "FBox",
          strut: "Strut",
          mathstrut: ["Macro", "\\vphantom{(}"],
          phantom: "Phantom",
          vphantom: ["Phantom", 1, 0],
          hphantom: ["Phantom", 0, 1],
          smash: "Smash",
          acute: ["Accent", "00B4"],
          grave: ["Accent", "0060"],
          ddot: ["Accent", "00A8"],
          tilde: ["Accent", "007E"],
          bar: ["Accent", "00AF"],
          breve: ["Accent", "02D8"],
          check: ["Accent", "02C7"],
          hat: ["Accent", "005E"],
          vec: ["Accent", "2192"],
          dot: ["Accent", "02D9"],
          widetilde: ["Accent", "007E", 1],
          widehat: ["Accent", "005E", 1],
          matrix: "Matrix",
          array: "Matrix",
          pmatrix: ["Matrix", "(", ")"],
          cases: ["Matrix", "{", "", "left left", null, ".1em", null, !0],
          eqalign: [
            "Matrix",
            null,
            null,
            "right left",
            a.TexConstant.Length.THICKMATHSPACE,
            ".5em",
            "D",
          ],
          displaylines: ["Matrix", null, null, "center", null, ".5em", "D"],
          cr: "Cr",
          "\\": "CrLaTeX",
          newline: "Cr",
          hline: ["HLine", "solid"],
          hdashline: ["HLine", "dashed"],
          eqalignno: [
            "Matrix",
            null,
            null,
            "right left",
            a.TexConstant.Length.THICKMATHSPACE,
            ".5em",
            "D",
            null,
            "right",
          ],
          leqalignno: [
            "Matrix",
            null,
            null,
            "right left",
            a.TexConstant.Length.THICKMATHSPACE,
            ".5em",
            "D",
            null,
            "left",
          ],
          hfill: "HFill",
          hfil: "HFill",
          hfilll: "HFill",
          bmod: [
            "Macro",
            '\\mmlToken{mo}[lspace="thickmathspace" rspace="thickmathspace"]{mod}',
          ],
          pmod: ["Macro", "\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}", 1],
          mod: [
            "Macro",
            "\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1",
            1,
          ],
          pod: [
            "Macro",
            "\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)",
            1,
          ],
          iff: ["Macro", "\\;\\Longleftrightarrow\\;"],
          skew: ["Macro", "{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}", 3],
          mathcal: ["Macro", "{\\cal #1}", 1],
          mathscr: ["Macro", "{\\scr #1}", 1],
          mathrm: ["Macro", "{\\rm #1}", 1],
          mathbf: ["Macro", "{\\bf #1}", 1],
          mathbb: ["Macro", "{\\bbFont #1}", 1],
          Bbb: ["Macro", "{\\bbFont #1}", 1],
          mathit: ["Macro", "{\\it #1}", 1],
          mathfrak: ["Macro", "{\\frak #1}", 1],
          mathsf: ["Macro", "{\\sf #1}", 1],
          mathtt: ["Macro", "{\\tt #1}", 1],
          textrm: ["Macro", "\\mathord{\\rm\\text{#1}}", 1],
          textit: ["Macro", "\\mathord{\\it\\text{#1}}", 1],
          textbf: ["Macro", "\\mathord{\\bf\\text{#1}}", 1],
          textsf: ["Macro", "\\mathord{\\sf\\text{#1}}", 1],
          texttt: ["Macro", "\\mathord{\\tt\\text{#1}}", 1],
          pmb: ["Macro", "\\rlap{#1}\\kern1px{#1}", 1],
          TeX: ["Macro", "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
          LaTeX: [
            "Macro",
            "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX",
          ],
          " ": ["Macro", "\\text{ }"],
          not: "Not",
          dots: "Dots",
          space: "Tilde",
          "\xa0": "Tilde",
          begin: "BeginEnd",
          end: "BeginEnd",
          label: "HandleLabel",
          ref: "HandleRef",
          nonumber: "HandleNoTag",
          mathchoice: "MathChoice",
          mmlToken: "MmlToken",
        },
        o.default
      );
    new n.EnvironmentMap(
      "environment",
      i.default.environment,
      {
        array: ["AlignedArray"],
        equation: ["Equation", null, !0],
        "equation*": ["Equation", null, !1],
        eqnarray: [
          "EqnArray",
          null,
          !0,
          !0,
          "rcl",
          "0 " + a.TexConstant.Length.THICKMATHSPACE,
          ".5em",
        ],
      },
      o.default
    );
    new n.CharacterMap("not_remap", null, {
      "\u2190": "\u219a",
      "\u2192": "\u219b",
      "\u2194": "\u21ae",
      "\u21d0": "\u21cd",
      "\u21d2": "\u21cf",
      "\u21d4": "\u21ce",
      "\u2208": "\u2209",
      "\u220b": "\u220c",
      "\u2223": "\u2224",
      "\u2225": "\u2226",
      "\u223c": "\u2241",
      "~": "\u2241",
      "\u2243": "\u2244",
      "\u2245": "\u2247",
      "\u2248": "\u2249",
      "\u224d": "\u226d",
      "=": "\u2260",
      "\u2261": "\u2262",
      "<": "\u226e",
      ">": "\u226f",
      "\u2264": "\u2270",
      "\u2265": "\u2271",
      "\u2272": "\u2274",
      "\u2273": "\u2275",
      "\u2276": "\u2278",
      "\u2277": "\u2279",
      "\u227a": "\u2280",
      "\u227b": "\u2281",
      "\u2282": "\u2284",
      "\u2283": "\u2285",
      "\u2286": "\u2288",
      "\u2287": "\u2289",
      "\u22a2": "\u22ac",
      "\u22a8": "\u22ad",
      "\u22a9": "\u22ae",
      "\u22ab": "\u22af",
      "\u227c": "\u22e0",
      "\u227d": "\u22e1",
      "\u2291": "\u22e2",
      "\u2292": "\u22e3",
      "\u22b2": "\u22ea",
      "\u22b3": "\u22eb",
      "\u22b4": "\u22ec",
      "\u22b5": "\u22ed",
      "\u2203": "\u2204",
    });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(11).add(
        {
          Pcy: "\u041f",
          Poincareplane: "\u210c",
          Pr: "\u2abb",
          Prime: "\u2033",
          Proportion: "\u2237",
          par: "\u2225",
          para: "\xb6",
          parallel: "\u2225",
          parsim: "\u2af3",
          parsl: "\u2afd",
          part: "\u2202",
          pcy: "\u043f",
          percnt: "%",
          permil: "\u2030",
          perp: "\u22a5",
          pertenk: "\u2031",
          phmmat: "\u2133",
          phone: "\u260e",
          pitchfork: "\u22d4",
          planck: "\u210f",
          planckh: "\u210e",
          plankv: "\u210f",
          plus: "+",
          plusacir: "\u2a23",
          plusb: "\u229e",
          pluscir: "\u2a22",
          plusdo: "\u2214",
          plusdu: "\u2a25",
          pluse: "\u2a72",
          plusmn: "\xb1",
          plussim: "\u2a26",
          plustwo: "\u2a27",
          pm: "\xb1",
          pointint: "\u2a15",
          pound: "\xa3",
          pr: "\u227a",
          prE: "\u2ab3",
          prcue: "\u227c",
          pre: "\u2aaf",
          prec: "\u227a",
          precapprox: "\u2ab7",
          preccurlyeq: "\u227c",
          preceq: "\u2aaf",
          precsim: "\u227e",
          primes: "\u2119",
          prnE: "\u2ab5",
          prnap: "\u2ab9",
          prnsim: "\u22e8",
          prod: "\u220f",
          profalar: "\u232e",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221d",
          propto: "\u221d",
          prsim: "\u227e",
          prurel: "\u22b0",
          puncsp: "\u2008",
        },
        "p"
      );
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(11).add(
        {
          RBarr: "\u2910",
          REG: "\xae",
          Racute: "\u0154",
          Rang: "\u27eb",
          Rarrtl: "\u2916",
          Rcaron: "\u0158",
          Rcedil: "\u0156",
          Rcy: "\u0420",
          ReverseElement: "\u220b",
          ReverseUpEquilibrium: "\u296f",
          Rho: "\u03a1",
          RightArrowBar: "\u21e5",
          RightDoubleBracket: "\u27e7",
          RightDownTeeVector: "\u295d",
          RightDownVectorBar: "\u2955",
          RightTeeVector: "\u295b",
          RightTriangleBar: "\u29d0",
          RightUpDownVector: "\u294f",
          RightUpTeeVector: "\u295c",
          RightUpVectorBar: "\u2954",
          RightVectorBar: "\u2953",
          RoundImplies: "\u2970",
          RuleDelayed: "\u29f4",
          rAarr: "\u21db",
          rArr: "\u21d2",
          rAtail: "\u291c",
          rBarr: "\u290f",
          rHar: "\u2964",
          race: "\u223d\u0331",
          racute: "\u0155",
          radic: "\u221a",
          raemptyv: "\u29b3",
          rang: "\u27e9",
          rangd: "\u2992",
          range: "\u29a5",
          rangle: "\u27e9",
          raquo: "\xbb",
          rarr: "\u2192",
          rarrap: "\u2975",
          rarrb: "\u21e5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarrfs: "\u291e",
          rarrhk: "\u21aa",
          rarrlp: "\u21ac",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          rarrw: "\u219d",
          ratail: "\u291a",
          ratio: "\u2236",
          rationals: "\u211a",
          rbarr: "\u290d",
          rbbrk: "\u2773",
          rbrke: "\u298c",
          rbrksld: "\u298e",
          rbrkslu: "\u2990",
          rcaron: "\u0159",
          rcedil: "\u0157",
          rceil: "\u2309",
          rcub: "}",
          rcy: "\u0440",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201d",
          rdquor: "\u201d",
          rdsh: "\u21b3",
          real: "\u211c",
          realine: "\u211b",
          realpart: "\u211c",
          reals: "\u211d",
          rect: "\u25ad",
          reg: "\xae",
          rfisht: "\u297d",
          rfloor: "\u230b",
          rhard: "\u21c1",
          rharu: "\u21c0",
          rharul: "\u296c",
          rightarrow: "\u2192",
          rightarrowtail: "\u21a3",
          rightharpoondown: "\u21c1",
          rightharpoonup: "\u21c0",
          rightleftarrows: "\u21c4",
          rightleftharpoons: "\u21cc",
          rightsquigarrow: "\u219d",
          risingdotseq: "\u2253",
          rlarr: "\u21c4",
          rlhar: "\u21cc",
          rlm: "\u200f",
          rmoustache: "\u23b1",
          rnmid: "\u2aee",
          roang: "\u27ed",
          roarr: "\u21fe",
          robrk: "\u27e7",
          ropar: "\u2986",
          roplus: "\u2a2e",
          rotimes: "\u2a35",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2a12",
          rrarr: "\u21c9",
          rsaquo: "\u203a",
          rsh: "\u21b1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22cc",
          rtrie: "\u22b5",
          rtrif: "\u25b8",
          rtriltri: "\u29ce",
          ruluhar: "\u2968",
          rx: "\u211e",
        },
        "r"
      );
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    function n(t) {
      for (var e = [], r = 0, n = t.length; r < n; r++)
        e[r] = l.default.Em(t[r]);
      return e.join(" ");
    }
    var a = r(19),
      o = r(1),
      i = r(7),
      s = r(13),
      l = r(4),
      c = r(5);
    new o.CharacterMap("AMSmath-mathchar0mo", s.default.mathchar0mo, {
      iiiint: ["\u2a0c", { texClass: c.TEXCLASS.OP }],
    }),
      new o.CommandMap(
        "AMSmath-macros",
        {
          mathring: ["Accent", "02DA"],
          nobreakspace: "Tilde",
          negmedspace: ["Spacer", i.TexConstant.Length.NEGATIVEMEDIUMMATHSPACE],
          negthickspace: [
            "Spacer",
            i.TexConstant.Length.NEGATIVETHICKMATHSPACE,
          ],
          idotsint: ["MultiIntegral", "\\int\\cdots\\int"],
          dddot: ["Accent", "20DB"],
          ddddot: ["Accent", "20DC"],
          sideset: [
            "Macro",
            "\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}",
            3,
          ],
          boxed: ["Macro", "\\fbox{$\\displaystyle{#1}$}", 1],
          tag: "HandleTag",
          notag: "HandleNoTag",
          eqref: ["HandleRef", !0],
          substack: ["Macro", "\\begin{subarray}{c}#1\\end{subarray}", 1],
          injlim: ["NamedOp", "inj&thinsp;lim"],
          projlim: ["NamedOp", "proj&thinsp;lim"],
          varliminf: ["Macro", "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],
          varlimsup: ["Macro", "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],
          varinjlim: [
            "Macro",
            "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}",
          ],
          varprojlim: [
            "Macro",
            "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}",
          ],
          DeclareMathOperator: "HandleDeclareOp",
          operatorname: "HandleOperatorName",
          SkipLimits: "SkipLimits",
          genfrac: "Genfrac",
          frac: ["Genfrac", "", "", "", ""],
          tfrac: ["Genfrac", "", "", "", "1"],
          dfrac: ["Genfrac", "", "", "", "0"],
          binom: ["Genfrac", "(", ")", "0", ""],
          tbinom: ["Genfrac", "(", ")", "0", "1"],
          dbinom: ["Genfrac", "(", ")", "0", "0"],
          cfrac: "CFrac",
          shoveleft: ["HandleShove", i.TexConstant.Align.LEFT],
          shoveright: ["HandleShove", i.TexConstant.Align.RIGHT],
          xrightarrow: ["xArrow", 8594, 5, 6],
          xleftarrow: ["xArrow", 8592, 7, 3],
        },
        a.default
      ),
      new o.EnvironmentMap(
        "AMSmath-environment",
        s.default.environment,
        {
          "eqnarray*": [
            "EqnArray",
            null,
            !1,
            !0,
            "rcl",
            "0 " + i.TexConstant.Length.THICKMATHSPACE,
            ".5em",
          ],
          align: [
            "EqnArray",
            null,
            !0,
            !0,
            "rlrlrlrlrlrl",
            n([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
          ],
          "align*": [
            "EqnArray",
            null,
            !1,
            !0,
            "rlrlrlrlrlrl",
            n([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
          ],
          multline: ["Multline", null, !0],
          "multline*": ["Multline", null, !1],
          split: ["EqnArray", null, !1, !1, "rl", n([0])],
          gather: ["EqnArray", null, !0, !0, "c"],
          "gather*": ["EqnArray", null, !1, !0, "c"],
          alignat: ["AlignAt", null, !0, !0],
          "alignat*": ["AlignAt", null, !1, !0],
          alignedat: ["AlignAt", null, !1, !1],
          aligned: [
            "AmsEqnArray",
            null,
            null,
            null,
            "rlrlrlrlrlrl",
            n([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
            ".5em",
            "D",
          ],
          gathered: ["AmsEqnArray", null, null, null, "c", null, ".5em", "D"],
          subarray: ["Array", null, null, null, null, n([0]), "0.1em", "S", 1],
          smallmatrix: [
            "Array",
            null,
            null,
            null,
            "c",
            n([1 / 3]),
            ".2em",
            "S",
            1,
          ],
          matrix: ["Array", null, null, null, "c"],
          pmatrix: ["Array", null, "(", ")", "c"],
          bmatrix: ["Array", null, "[", "]", "c"],
          Bmatrix: ["Array", null, "\\{", "\\}", "c"],
          vmatrix: ["Array", null, "\\vert", "\\vert", "c"],
          Vmatrix: ["Array", null, "\\Vert", "\\Vert", "c"],
          cases: ["Array", null, "\\{", ".", "ll", null, ".2em", "T"],
        },
        a.default
      ),
      new o.DelimiterMap("AMSmath-delimiter", s.default.delimiter, {
        "\\lvert": ["|", { texClass: c.TEXCLASS.OPEN }],
        "\\rvert": ["|", { texClass: c.TEXCLASS.CLOSE }],
        "\\lVert": ["\u2016", { texClass: c.TEXCLASS.OPEN }],
        "\\rVert": ["\u2016", { texClass: c.TEXCLASS.CLOSE }],
      }),
      new o.CharacterMap("AMSsymbols-mathchar0mi", s.default.mathchar0mi, {
        digamma: "\u03dd",
        varkappa: "\u03f0",
        varGamma: ["\u0393", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varDelta: ["\u0394", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varTheta: ["\u0398", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varLambda: ["\u039b", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varXi: ["\u039e", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varPi: ["\u03a0", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varSigma: ["\u03a3", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varUpsilon: ["\u03a5", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varPhi: ["\u03a6", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varPsi: ["\u03a8", { mathvariant: i.TexConstant.Variant.ITALIC }],
        varOmega: ["\u03a9", { mathvariant: i.TexConstant.Variant.ITALIC }],
        beth: "\u2136",
        gimel: "\u2137",
        daleth: "\u2138",
        backprime: ["\u2035", { variantForm: !0 }],
        hslash: "\u210f",
        varnothing: ["\u2205", { variantForm: !0 }],
        blacktriangle: "\u25b4",
        triangledown: ["\u25bd", { variantForm: !0 }],
        blacktriangledown: "\u25be",
        square: "\u25fb",
        Box: "\u25fb",
        blacksquare: "\u25fc",
        lozenge: "\u25ca",
        Diamond: "\u25ca",
        blacklozenge: "\u29eb",
        circledS: ["\u24c8", { mathvariant: i.TexConstant.Variant.NORMAL }],
        bigstar: "\u2605",
        sphericalangle: "\u2222",
        measuredangle: "\u2221",
        nexists: "\u2204",
        complement: "\u2201",
        mho: "\u2127",
        eth: ["\xf0", { mathvariant: i.TexConstant.Variant.NORMAL }],
        Finv: "\u2132",
        diagup: "\u2571",
        Game: "\u2141",
        diagdown: "\u2572",
        Bbbk: ["k", { mathvariant: i.TexConstant.Variant.DOUBLESTRUCK }],
        yen: "\xa5",
        circledR: "\xae",
        checkmark: "\u2713",
        maltese: "\u2720",
      }),
      new o.CharacterMap("AMSsymbols-mathchar0m0", s.default.mathchar0mo, {
        dotplus: "\u2214",
        ltimes: "\u22c9",
        smallsetminus: "\u2216",
        rtimes: "\u22ca",
        Cap: "\u22d2",
        doublecap: "\u22d2",
        leftthreetimes: "\u22cb",
        Cup: "\u22d3",
        doublecup: "\u22d3",
        rightthreetimes: "\u22cc",
        barwedge: "\u22bc",
        curlywedge: "\u22cf",
        veebar: "\u22bb",
        curlyvee: "\u22ce",
        doublebarwedge: "\u2a5e",
        boxminus: "\u229f",
        circleddash: "\u229d",
        boxtimes: "\u22a0",
        circledast: "\u229b",
        boxdot: "\u22a1",
        circledcirc: "\u229a",
        boxplus: "\u229e",
        centerdot: ["\u22c5", { variantForm: !0 }],
        divideontimes: "\u22c7",
        intercal: "\u22ba",
        leqq: "\u2266",
        geqq: "\u2267",
        leqslant: "\u2a7d",
        geqslant: "\u2a7e",
        eqslantless: "\u2a95",
        eqslantgtr: "\u2a96",
        lesssim: "\u2272",
        gtrsim: "\u2273",
        lessapprox: "\u2a85",
        gtrapprox: "\u2a86",
        approxeq: "\u224a",
        lessdot: "\u22d6",
        gtrdot: "\u22d7",
        lll: "\u22d8",
        llless: "\u22d8",
        ggg: "\u22d9",
        gggtr: "\u22d9",
        lessgtr: "\u2276",
        gtrless: "\u2277",
        lesseqgtr: "\u22da",
        gtreqless: "\u22db",
        lesseqqgtr: "\u2a8b",
        gtreqqless: "\u2a8c",
        doteqdot: "\u2251",
        Doteq: "\u2251",
        eqcirc: "\u2256",
        risingdotseq: "\u2253",
        circeq: "\u2257",
        fallingdotseq: "\u2252",
        triangleq: "\u225c",
        backsim: "\u223d",
        thicksim: ["\u223c", { variantForm: !0 }],
        backsimeq: "\u22cd",
        thickapprox: ["\u2248", { variantForm: !0 }],
        subseteqq: "\u2ac5",
        supseteqq: "\u2ac6",
        Subset: "\u22d0",
        Supset: "\u22d1",
        sqsubset: "\u228f",
        sqsupset: "\u2290",
        preccurlyeq: "\u227c",
        succcurlyeq: "\u227d",
        curlyeqprec: "\u22de",
        curlyeqsucc: "\u22df",
        precsim: "\u227e",
        succsim: "\u227f",
        precapprox: "\u2ab7",
        succapprox: "\u2ab8",
        vartriangleleft: "\u22b2",
        lhd: "\u22b2",
        vartriangleright: "\u22b3",
        rhd: "\u22b3",
        trianglelefteq: "\u22b4",
        unlhd: "\u22b4",
        trianglerighteq: "\u22b5",
        unrhd: "\u22b5",
        vDash: "\u22a8",
        Vdash: "\u22a9",
        Vvdash: "\u22aa",
        smallsmile: ["\u2323", { variantForm: !0 }],
        shortmid: ["\u2223", { variantForm: !0 }],
        smallfrown: ["\u2322", { variantForm: !0 }],
        shortparallel: ["\u2225", { variantForm: !0 }],
        bumpeq: "\u224f",
        between: "\u226c",
        Bumpeq: "\u224e",
        pitchfork: "\u22d4",
        varpropto: "\u221d",
        backepsilon: "\u220d",
        blacktriangleleft: "\u25c2",
        blacktriangleright: "\u25b8",
        therefore: "\u2234",
        because: "\u2235",
        eqsim: "\u2242",
        vartriangle: ["\u25b3", { variantForm: !0 }],
        Join: "\u22c8",
        nless: "\u226e",
        ngtr: "\u226f",
        nleq: "\u2270",
        ngeq: "\u2271",
        nleqslant: ["\u2a87", { variantForm: !0 }],
        ngeqslant: ["\u2a88", { variantForm: !0 }],
        nleqq: ["\u2270", { variantForm: !0 }],
        ngeqq: ["\u2271", { variantForm: !0 }],
        lneq: "\u2a87",
        gneq: "\u2a88",
        lneqq: "\u2268",
        gneqq: "\u2269",
        lvertneqq: ["\u2268", { variantForm: !0 }],
        gvertneqq: ["\u2269", { variantForm: !0 }],
        lnsim: "\u22e6",
        gnsim: "\u22e7",
        lnapprox: "\u2a89",
        gnapprox: "\u2a8a",
        nprec: "\u2280",
        nsucc: "\u2281",
        npreceq: ["\u22e0", { variantForm: !0 }],
        nsucceq: ["\u22e1", { variantForm: !0 }],
        precneqq: "\u2ab5",
        succneqq: "\u2ab6",
        precnsim: "\u22e8",
        succnsim: "\u22e9",
        precnapprox: "\u2ab9",
        succnapprox: "\u2aba",
        nsim: "\u2241",
        ncong: "\u2246",
        nshortmid: ["\u2224", { variantForm: !0 }],
        nshortparallel: ["\u2226", { variantForm: !0 }],
        nmid: "\u2224",
        nparallel: "\u2226",
        nvdash: "\u22ac",
        nvDash: "\u22ad",
        nVdash: "\u22ae",
        nVDash: "\u22af",
        ntriangleleft: "\u22ea",
        ntriangleright: "\u22eb",
        ntrianglelefteq: "\u22ec",
        ntrianglerighteq: "\u22ed",
        nsubseteq: "\u2288",
        nsupseteq: "\u2289",
        nsubseteqq: ["\u2288", { variantForm: !0 }],
        nsupseteqq: ["\u2289", { variantForm: !0 }],
        subsetneq: "\u228a",
        supsetneq: "\u228b",
        varsubsetneq: ["\u228a", { variantForm: !0 }],
        varsupsetneq: ["\u228b", { variantForm: !0 }],
        subsetneqq: "\u2acb",
        supsetneqq: "\u2acc",
        varsubsetneqq: ["\u2acb", { variantForm: !0 }],
        varsupsetneqq: ["\u2acc", { variantForm: !0 }],
        leftleftarrows: "\u21c7",
        rightrightarrows: "\u21c9",
        leftrightarrows: "\u21c6",
        rightleftarrows: "\u21c4",
        Lleftarrow: "\u21da",
        Rrightarrow: "\u21db",
        twoheadleftarrow: "\u219e",
        twoheadrightarrow: "\u21a0",
        leftarrowtail: "\u21a2",
        rightarrowtail: "\u21a3",
        looparrowleft: "\u21ab",
        looparrowright: "\u21ac",
        leftrightharpoons: "\u21cb",
        rightleftharpoons: ["\u21cc", { variantForm: !0 }],
        curvearrowleft: "\u21b6",
        curvearrowright: "\u21b7",
        circlearrowleft: "\u21ba",
        circlearrowright: "\u21bb",
        Lsh: "\u21b0",
        Rsh: "\u21b1",
        upuparrows: "\u21c8",
        downdownarrows: "\u21ca",
        upharpoonleft: "\u21bf",
        upharpoonright: "\u21be",
        downharpoonleft: "\u21c3",
        restriction: "\u21be",
        multimap: "\u22b8",
        downharpoonright: "\u21c2",
        leftrightsquigarrow: "\u21ad",
        rightsquigarrow: "\u21dd",
        leadsto: "\u21dd",
        dashrightarrow: "\u21e2",
        dashleftarrow: "\u21e0",
        nleftarrow: "\u219a",
        nrightarrow: "\u219b",
        nLeftarrow: "\u21cd",
        nRightarrow: "\u21cf",
        nleftrightarrow: "\u21ae",
        nLeftrightarrow: "\u21ce",
      }),
      new o.DelimiterMap("AMSsymbols-delimiter", s.default.delimiter, {
        "\\ulcorner": "\u231c",
        "\\urcorner": "\u231d",
        "\\llcorner": "\u231e",
        "\\lrcorner": "\u231f",
      }),
      new o.CommandMap(
        "AMSsymbols-macros",
        {
          implies: ["Macro", "\\;\\Longrightarrow\\;"],
          impliedby: ["Macro", "\\;\\Longleftarrow\\;"],
        },
        a.default
      );
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      a = r(13),
      o = r(38);
    new n.EnvironmentMap(
      "amsCd_environment",
      a.default.environment,
      { CD: "CD" },
      o.default
    ),
      new n.CommandMap(
        "amsCd_macros",
        {
          minCDarrowwidth: "minCDarrowwidth",
          minCDarrowheight: "minCDarrowheight",
        },
        o.default
      ),
      new n.MacroMap("amsCd_special", { "@": "arrow" }, o.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      a = r(43);
    new n.CommandMap(
      "Braket-macros",
      {
        bra: ["Macro", "{\\langle {#1} \\vert}", 1],
        ket: ["Macro", "{\\vert {#1} \\rangle}", 1],
        braket: ["Braket", "\u27e8", "\u27e9", !1, 1 / 0],
        set: ["Braket", "{", "}", !1, 1],
        Bra: ["Macro", "{\\left\\langle {#1} \\right\\vert}", 1],
        Ket: ["Macro", "{\\left\\vert {#1} \\right\\rangle}", 1],
        Braket: ["Braket", "\u27e8", "\u27e9", !0, 1 / 0],
        Set: ["Braket", "{", "}", !0, 1],
        ketbra: ["Macro", "{\\vert {#1} \\rangle\\langle {#2} \\vert}", 2],
        Ketbra: [
          "Macro",
          "{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}",
          2,
        ],
        "|": "Bar",
      },
      a.default
    ),
      new n.MacroMap("Braket-characters", { "|": "Bar" }, a.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(46),
      a = r(13),
      o = r(1);
    new o.CommandMap(
      "Bussproofs-macros",
      {
        AxiomC: "Axiom",
        UnaryInfC: ["Inference", 1],
        BinaryInfC: ["Inference", 2],
        TrinaryInfC: ["Inference", 3],
        QuaternaryInfC: ["Inference", 4],
        QuinaryInfC: ["Inference", 5],
        RightLabel: ["Label", "right"],
        LeftLabel: ["Label", "left"],
        AXC: "Axiom",
        UIC: ["Inference", 1],
        BIC: ["Inference", 2],
        TIC: ["Inference", 3],
        RL: ["Label", "right"],
        LL: ["Label", "left"],
        noLine: ["SetLine", "none", !1],
        singleLine: ["SetLine", "solid", !1],
        solidLine: ["SetLine", "solid", !1],
        dashedLine: ["SetLine", "dashed", !1],
        alwaysNoLine: ["SetLine", "none", !0],
        alwaysSingleLine: ["SetLine", "solid", !0],
        alwaysSolidLine: ["SetLine", "solid", !0],
        alwaysDashedLine: ["SetLine", "dashed", !0],
        rootAtTop: ["RootAtTop", !0],
        alwaysRootAtTop: ["RootAtTop", !0],
        rootAtBottom: ["RootAtTop", !1],
        alwaysRootAtBottom: ["RootAtTop", !1],
        fCenter: "FCenter",
        Axiom: "AxiomF",
        UnaryInf: ["InferenceF", 1],
        BinaryInf: ["InferenceF", 2],
        TrinaryInf: ["InferenceF", 3],
        QuaternaryInf: ["InferenceF", 4],
        QuinaryInf: ["InferenceF", 5],
      },
      n.default
    ),
      new o.EnvironmentMap(
        "Bussproofs-environments",
        a.default.environment,
        { prooftree: ["Prooftree", null, !1] },
        n.default
      );
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.COLORS = new Map([
        ["Apricot", "#FBB982"],
        ["Aquamarine", "#00B5BE"],
        ["Bittersweet", "#C04F17"],
        ["Black", "#221E1F"],
        ["Blue", "#2D2F92"],
        ["BlueGreen", "#00B3B8"],
        ["BlueViolet", "#473992"],
        ["BrickRed", "#B6321C"],
        ["Brown", "#792500"],
        ["BurntOrange", "#F7921D"],
        ["CadetBlue", "#74729A"],
        ["CarnationPink", "#F282B4"],
        ["Cerulean", "#00A2E3"],
        ["CornflowerBlue", "#41B0E4"],
        ["Cyan", "#00AEEF"],
        ["Dandelion", "#FDBC42"],
        ["DarkOrchid", "#A4538A"],
        ["Emerald", "#00A99D"],
        ["ForestGreen", "#009B55"],
        ["Fuchsia", "#8C368C"],
        ["Goldenrod", "#FFDF42"],
        ["Gray", "#949698"],
        ["Green", "#00A64F"],
        ["GreenYellow", "#DFE674"],
        ["JungleGreen", "#00A99A"],
        ["Lavender", "#F49EC4"],
        ["LimeGreen", "#8DC73E"],
        ["Magenta", "#EC008C"],
        ["Mahogany", "#A9341F"],
        ["Maroon", "#AF3235"],
        ["Melon", "#F89E7B"],
        ["MidnightBlue", "#006795"],
        ["Mulberry", "#A93C93"],
        ["NavyBlue", "#006EB8"],
        ["OliveGreen", "#3C8031"],
        ["Orange", "#F58137"],
        ["OrangeRed", "#ED135A"],
        ["Orchid", "#AF72B0"],
        ["Peach", "#F7965A"],
        ["Periwinkle", "#7977B8"],
        ["PineGreen", "#008B72"],
        ["Plum", "#92268F"],
        ["ProcessBlue", "#00B0F0"],
        ["Purple", "#99479B"],
        ["RawSienna", "#974006"],
        ["Red", "#ED1B23"],
        ["RedOrange", "#F26035"],
        ["RedViolet", "#A1246B"],
        ["Rhodamine", "#EF559F"],
        ["RoyalBlue", "#0071BC"],
        ["RoyalPurple", "#613F99"],
        ["RubineRed", "#ED017D"],
        ["Salmon", "#F69289"],
        ["SeaGreen", "#3FBC9D"],
        ["Sepia", "#671800"],
        ["SkyBlue", "#46C5DD"],
        ["SpringGreen", "#C6DC67"],
        ["Tan", "#DA9D76"],
        ["TealBlue", "#00AEB3"],
        ["Thistle", "#D883B7"],
        ["Turquoise", "#00B4CE"],
        ["Violet", "#58429B"],
        ["VioletRed", "#EF58A0"],
        ["White", "#FFFFFF"],
        ["WildStrawberry", "#EE2967"],
        ["Yellow", "#FFF200"],
        ["YellowGreen", "#98CC70"],
        ["YellowOrange", "#FAA21A"],
      ]));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(23);
    new (r(1).CommandMap)(
      "Newcommand-macros",
      {
        newcommand: "NewCommand",
        renewcommand: "NewCommand",
        newenvironment: "NewEnvironment",
        renewenvironment: "NewEnvironment",
        def: "MacroDef",
        let: "Let",
      },
      n.default
    );
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var h = {
      go: function (t, e) {
        if (!t) return [];
        void 0 === e && (e = "ce");
        var r,
          n = "0",
          a = {};
        (a.parenthesisLevel = 0),
          (t = (t = (t = t.replace(/\n/g, " ")).replace(
            /[\u2212\u2013\u2014\u2010]/g,
            "-"
          )).replace(/[\u2026]/g, "..."));
        for (var o = 10, i = []; ; ) {
          r !== t ? ((o = 10), (r = t)) : o--;
          var s = h.stateMachines[e],
            l = s.transitions[n] || s.transitions["*"];
          t: for (var c = 0; c < l.length; c++) {
            var u = h.patterns.match_(l[c].pattern, t);
            if (u) {
              for (var p = l[c].task, f = 0; f < p.action_.length; f++) {
                var d;
                if (s.actions[p.action_[f].type_])
                  d = s.actions[p.action_[f].type_](
                    a,
                    u.match_,
                    p.action_[f].option
                  );
                else {
                  if (!h.actions[p.action_[f].type_])
                    throw [
                      "MhchemBugA",
                      "mhchem bug A. Please report. (" +
                        p.action_[f].type_ +
                        ")",
                    ];
                  d = h.actions[p.action_[f].type_](
                    a,
                    u.match_,
                    p.action_[f].option
                  );
                }
                h.concatArray(i, d);
              }
              if (((n = p.nextState || n), !(0 < t.length))) return i;
              if ((p.revisit || (t = u.remainder), !p.toContinue)) break t;
            }
          }
          if (o <= 0) throw ["MhchemBugU", "mhchem bug U. Please report."];
        }
      },
      concatArray: function (t, e) {
        if (e)
          if (Array.isArray(e)) for (var r = 0; r < e.length; r++) t.push(e[r]);
          else t.push(e);
      },
      patterns: {
        patterns: {
          empty: /^$/,
          else: /^./,
          else2: /^./,
          space: /^\s/,
          "space A": /^\s(?=[A-Z\\$])/,
          space$: /^\s$/,
          "a-z": /^[a-z]/,
          x: /^x/,
          x$: /^x$/,
          i$: /^i$/,
          letters:
            /^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,
          "\\greek":
            /^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,
          "one lowercase latin letter $": /^(?:([a-z])(?:$|[^a-zA-Z]))$/,
          "$one lowercase latin letter$ $": /^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,
          "one lowercase greek letter $":
            /^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,
          digits: /^[0-9]+/,
          "-9.,9": /^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,
          "-9.,9 no missing 0": /^[+\-]?[0-9]+(?:[.,][0-9]+)?/,
          "(-)(9.,9)(e)(99)": function (t) {
            var e = t.match(
              /^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:([eE]|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/
            );
            return e && e[0]
              ? { match_: e.splice(1), remainder: t.substr(e[0].length) }
              : null;
          },
          "(-)(9)^(-9)": function (t) {
            var e = t.match(
              /^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/
            );
            return e && e[0]
              ? { match_: e.splice(1), remainder: t.substr(e[0].length) }
              : null;
          },
          "state of aggregation $": function (t) {
            var e = h.patterns.findObserveGroups(
              t,
              "",
              /^\([a-z]{1,3}(?=[\),])/,
              ")",
              ""
            );
            if (e && e.remainder.match(/^($|[\s,;\)\]\}])/)) return e;
            var r = t.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);
            return r
              ? { match_: r[0], remainder: t.substr(r[0].length) }
              : null;
          },
          "_{(state of aggregation)}$": /^_\{(\([a-z]{1,3}\))\}/,
          "{[(": /^(?:\\\{|\[|\()/,
          ")]}": /^(?:\)|\]|\\\})/,
          ", ": /^[,;]\s*/,
          ",": /^[,;]/,
          ".": /^[.]/,
          ". ": /^([.\u22C5\u00B7\u2022])\s*/,
          "...": /^\.\.\.(?=$|[^.])/,
          "* ": /^([*])\s*/,
          "^{(...)}": function (t) {
            return h.patterns.findObserveGroups(t, "^{", "", "", "}");
          },
          "^($...$)": function (t) {
            return h.patterns.findObserveGroups(t, "^", "$", "$", "");
          },
          "^a": /^\^([0-9]+|[^\\_])/,
          "^\\x{}{}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "^",
              /^\\[a-zA-Z]+\{/,
              "}",
              "",
              "",
              "{",
              "}",
              "",
              !0
            );
          },
          "^\\x{}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "^",
              /^\\[a-zA-Z]+\{/,
              "}",
              ""
            );
          },
          "^\\x": /^\^(\\[a-zA-Z]+)\s*/,
          "^(-1)": /^\^(-?\d+)/,
          "'": /^'/,
          "_{(...)}": function (t) {
            return h.patterns.findObserveGroups(t, "_{", "", "", "}");
          },
          "_($...$)": function (t) {
            return h.patterns.findObserveGroups(t, "_", "$", "$", "");
          },
          _9: /^_([+\-]?[0-9]+|[^\\])/,
          "_\\x{}{}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "_",
              /^\\[a-zA-Z]+\{/,
              "}",
              "",
              "",
              "{",
              "}",
              "",
              !0
            );
          },
          "_\\x{}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "_",
              /^\\[a-zA-Z]+\{/,
              "}",
              ""
            );
          },
          "_\\x": /^_(\\[a-zA-Z]+)\s*/,
          "^_": /^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,
          "{}": /^\{\}/,
          "{...}": function (t) {
            return h.patterns.findObserveGroups(t, "", "{", "}", "");
          },
          "{(...)}": function (t) {
            return h.patterns.findObserveGroups(t, "{", "", "", "}");
          },
          "$...$": function (t) {
            return h.patterns.findObserveGroups(t, "", "$", "$", "");
          },
          "${(...)}$": function (t) {
            return h.patterns.findObserveGroups(t, "${", "", "", "}$");
          },
          "$(...)$": function (t) {
            return h.patterns.findObserveGroups(t, "$", "", "", "$");
          },
          "=<>": /^[=<>]/,
          "#": /^[#\u2261]/,
          "+": /^\+/,
          "-$": /^-(?=[\s_},;\]/]|$|\([a-z]+\))/,
          "-9": /^-(?=[0-9])/,
          "- orbital overlap": /^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,
          "-": /^-/,
          "pm-operator": /^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,
          operator:
            /^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,
          arrowUpDown: /^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,
          "\\bond{(...)}": function (t) {
            return h.patterns.findObserveGroups(t, "\\bond{", "", "", "}");
          },
          "->": /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,
          CMT: /^[CMT](?=\[)/,
          "[(...)]": function (t) {
            return h.patterns.findObserveGroups(t, "[", "", "", "]");
          },
          "1st-level escape": /^(&|\\\\|\\hline)\s*/,
          "\\,": /^(?:\\[,\ ;:])/,
          "\\x{}{}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "",
              /^\\[a-zA-Z]+\{/,
              "}",
              "",
              "",
              "{",
              "}",
              "",
              !0
            );
          },
          "\\x{}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "",
              /^\\[a-zA-Z]+\{/,
              "}",
              ""
            );
          },
          "\\ca": /^\\ca(?:\s+|(?![a-zA-Z]))/,
          "\\x": /^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,
          orbital: /^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,
          others: /^[\/~|]/,
          "\\frac{(...)}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "\\frac{",
              "",
              "",
              "}",
              "{",
              "",
              "",
              "}"
            );
          },
          "\\overset{(...)}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "\\overset{",
              "",
              "",
              "}",
              "{",
              "",
              "",
              "}"
            );
          },
          "\\underset{(...)}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "\\underset{",
              "",
              "",
              "}",
              "{",
              "",
              "",
              "}"
            );
          },
          "\\underbrace{(...)}": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "\\underbrace{",
              "",
              "",
              "}_",
              "{",
              "",
              "",
              "}"
            );
          },
          "\\color{(...)}0": function (t) {
            return h.patterns.findObserveGroups(t, "\\color{", "", "", "}");
          },
          "\\color{(...)}{(...)}1": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "\\color{",
              "",
              "",
              "}",
              "{",
              "",
              "",
              "}"
            );
          },
          "\\color(...){(...)}2": function (t) {
            return h.patterns.findObserveGroups(
              t,
              "\\color",
              "\\",
              "",
              /^(?=\{)/,
              "{",
              "",
              "",
              "}"
            );
          },
          "\\ce{(...)}": function (t) {
            return h.patterns.findObserveGroups(t, "\\ce{", "", "", "}");
          },
          oxidation$: /^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
          "d-oxidation$": /^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
          "roman numeral": /^[IVX]+/,
          "1/2$":
            /^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,
          amount: function (t) {
            var e;
            if (
              (e = t.match(
                /^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/
              ))
            )
              return { match_: e[0], remainder: t.substr(e[0].length) };
            var r = h.patterns.findObserveGroups(t, "", "$", "$", "");
            return r &&
              (e = r.match_.match(
                /^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/
              ))
              ? { match_: e[0], remainder: t.substr(e[0].length) }
              : null;
          },
          amount2: function (t) {
            return this.amount(t);
          },
          "(KV letters),": /^(?:[A-Z][a-z]{0,2}|i)(?=,)/,
          formula$: function (t) {
            if (t.match(/^\([a-z]+\)$/)) return null;
            var e = t.match(
              /^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/
            );
            return e
              ? { match_: e[0], remainder: t.substr(e[0].length) }
              : null;
          },
          uprightEntities: /^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,
          "/": /^\s*(\/)\s*/,
          "//": /^\s*(\/\/)\s*/,
          "*": /^\s*[*.]\s*/,
        },
        findObserveGroups: function (t, e, r, n, a, o, i, s, l, c) {
          function u(t, e) {
            if ("string" == typeof e) return 0 !== t.indexOf(e) ? null : e;
            var r = t.match(e);
            return r ? r[0] : null;
          }
          var p = u(t, e);
          if (null === p) return null;
          if (((t = t.substr(p.length)), null === (p = u(t, r)))) return null;
          var f = (function (t, e, r) {
            for (var n = 0; e < t.length; ) {
              var a = t.charAt(e),
                o = u(t.substr(e), r);
              if (null !== o && 0 === n)
                return { endMatchBegin: e, endMatchEnd: e + o.length };
              if ("{" === a) n++;
              else if ("}" === a) {
                if (0 === n)
                  throw [
                    "ExtraCloseMissingOpen",
                    "Extra close brace or missing open brace",
                  ];
                n--;
              }
              e++;
            }
            return null;
          })(t, p.length, n || a);
          if (null === f) return null;
          var d = t.substring(0, n ? f.endMatchEnd : f.endMatchBegin);
          if (o || i) {
            var h = this.findObserveGroups(t.substr(f.endMatchEnd), o, i, s, l);
            if (null === h) return null;
            var m = [d, h.match_];
            return { match_: c ? m.join("") : m, remainder: h.remainder };
          }
          return { match_: d, remainder: t.substr(f.endMatchEnd) };
        },
        match_: function (t, e) {
          var r = h.patterns.patterns[t];
          if (void 0 === r)
            throw ["MhchemBugP", "mhchem bug P. Please report. (" + t + ")"];
          if ("function" == typeof r) return h.patterns.patterns[t](e);
          var n = e.match(r);
          return n
            ? {
                match_: n[2] ? [n[1], n[2]] : n[1] ? n[1] : n[0],
                remainder: e.substr(n[0].length),
              }
            : null;
        },
      },
      actions: {
        "a=": function (t, e) {
          t.a = (t.a || "") + e;
        },
        "b=": function (t, e) {
          t.b = (t.b || "") + e;
        },
        "p=": function (t, e) {
          t.p = (t.p || "") + e;
        },
        "o=": function (t, e) {
          t.o = (t.o || "") + e;
        },
        "q=": function (t, e) {
          t.q = (t.q || "") + e;
        },
        "d=": function (t, e) {
          t.d = (t.d || "") + e;
        },
        "rm=": function (t, e) {
          t.rm = (t.rm || "") + e;
        },
        "text=": function (t, e) {
          t.text_ = (t.text_ || "") + e;
        },
        insert: function (t, e, r) {
          return { type_: r };
        },
        "insert+p1": function (t, e, r) {
          return { type_: r, p1: e };
        },
        "insert+p1+p2": function (t, e, r) {
          return { type_: r, p1: e[0], p2: e[1] };
        },
        copy: function (t, e) {
          return e;
        },
        rm: function (t, e) {
          return { type_: "rm", p1: e || "" };
        },
        text: function (t, e) {
          return h.go(e, "text");
        },
        "{text}": function (t, e) {
          var r = ["{"];
          return h.concatArray(r, h.go(e, "text")), r.push("}"), r;
        },
        "tex-math": function (t, e) {
          return h.go(e, "tex-math");
        },
        "tex-math tight": function (t, e) {
          return h.go(e, "tex-math tight");
        },
        bond: function (t, e, r) {
          return { type_: "bond", kind_: r || e };
        },
        "color0-output": function (t, e) {
          return { type_: "color0", color: e[0] };
        },
        ce: function (t, e) {
          return h.go(e);
        },
        "1/2": function (t, e) {
          var r = [];
          e.match(/^[+\-]/) && (r.push(e.substr(0, 1)), (e = e.substr(1)));
          var n = e.match(
            /^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/
          );
          return (
            (n[1] = n[1].replace(/\$/g, "")),
            r.push({ type_: "frac", p1: n[1], p2: n[2] }),
            n[3] &&
              ((n[3] = n[3].replace(/\$/g, "")),
              r.push({ type_: "tex-math", p1: n[3] })),
            r
          );
        },
        "9,9": function (t, e) {
          return h.go(e, "9,9");
        },
      },
      createTransitions: function (t) {
        var e,
          r,
          n,
          a,
          o = {};
        for (e in t)
          for (r in t[e])
            for (
              n = r.split("|"), t[e][r].stateArray = n, a = 0;
              a < n.length;
              a++
            )
              o[n[a]] = [];
        for (e in t)
          for (r in t[e])
            for (n = t[e][r].stateArray || [], a = 0; a < n.length; a++) {
              var i = t[e][r];
              if (i.action_) {
                i.action_ = [].concat(i.action_);
                for (var s = 0; s < i.action_.length; s++)
                  "string" == typeof i.action_[s] &&
                    (i.action_[s] = { type_: i.action_[s] });
              } else i.action_ = [];
              for (var l = e.split("|"), c = 0; c < l.length; c++)
                if ("*" === n[a])
                  for (var u in o) o[u].push({ pattern: l[c], task: i });
                else o[n[a]].push({ pattern: l[c], task: i });
            }
        return o;
      },
      stateMachines: {},
    };
    h.stateMachines = {
      ce: {
        transitions: h.createTransitions({
          empty: { "*": { action_: "output" } },
          else: {
            "0|1|2": {
              action_: "beginsWithBond=false",
              revisit: !0,
              toContinue: !0,
            },
          },
          oxidation$: { 0: { action_: "oxidation-output" } },
          CMT: {
            r: { action_: "rdt=", nextState: "rt" },
            rd: { action_: "rqt=", nextState: "rdt" },
          },
          arrowUpDown: {
            "0|1|2|as": {
              action_: ["sb=false", "output", "operator"],
              nextState: "1",
            },
          },
          uprightEntities: {
            "0|1|2": { action_: ["o=", "output"], nextState: "1" },
          },
          orbital: { "0|1|2|3": { action_: "o=", nextState: "o" } },
          "->": {
            "0|1|2|3": { action_: "r=", nextState: "r" },
            "a|as": { action_: ["output", "r="], nextState: "r" },
            "*": { action_: ["output", "r="], nextState: "r" },
          },
          "+": {
            o: { action_: "d= kv", nextState: "d" },
            "d|D": { action_: "d=", nextState: "d" },
            q: { action_: "d=", nextState: "qd" },
            "qd|qD": { action_: "d=", nextState: "qd" },
            dq: { action_: ["output", "d="], nextState: "d" },
            3: { action_: ["sb=false", "output", "operator"], nextState: "0" },
          },
          amount: { "0|2": { action_: "a=", nextState: "a" } },
          "pm-operator": {
            "0|1|2|a|as": {
              action_: [
                "sb=false",
                "output",
                { type_: "operator", option: "\\pm" },
              ],
              nextState: "0",
            },
          },
          operator: {
            "0|1|2|a|as": {
              action_: ["sb=false", "output", "operator"],
              nextState: "0",
            },
          },
          "-$": {
            "o|q": { action_: ["charge or bond", "output"], nextState: "qd" },
            d: { action_: "d=", nextState: "d" },
            D: {
              action_: ["output", { type_: "bond", option: "-" }],
              nextState: "3",
            },
            q: { action_: "d=", nextState: "qd" },
            qd: { action_: "d=", nextState: "qd" },
            "qD|dq": {
              action_: ["output", { type_: "bond", option: "-" }],
              nextState: "3",
            },
          },
          "-9": {
            "3|o": {
              action_: ["output", { type_: "insert", option: "hyphen" }],
              nextState: "3",
            },
          },
          "- orbital overlap": {
            o: {
              action_: ["output", { type_: "insert", option: "hyphen" }],
              nextState: "2",
            },
            d: {
              action_: ["output", { type_: "insert", option: "hyphen" }],
              nextState: "2",
            },
          },
          "-": {
            "0|1|2": {
              action_: [
                { type_: "output", option: 1 },
                "beginsWithBond=true",
                { type_: "bond", option: "-" },
              ],
              nextState: "3",
            },
            3: { action_: { type_: "bond", option: "-" } },
            a: {
              action_: ["output", { type_: "insert", option: "hyphen" }],
              nextState: "2",
            },
            as: {
              action_: [
                { type_: "output", option: 2 },
                { type_: "bond", option: "-" },
              ],
              nextState: "3",
            },
            b: { action_: "b=" },
            o: {
              action_: { type_: "- after o/d", option: !1 },
              nextState: "2",
            },
            q: {
              action_: { type_: "- after o/d", option: !1 },
              nextState: "2",
            },
            "d|qd|dq": {
              action_: { type_: "- after o/d", option: !0 },
              nextState: "2",
            },
            "D|qD|p": {
              action_: ["output", { type_: "bond", option: "-" }],
              nextState: "3",
            },
          },
          amount2: { "1|3": { action_: "a=", nextState: "a" } },
          letters: {
            "0|1|2|3|a|as|b|p|bp|o": { action_: "o=", nextState: "o" },
            "q|dq": { action_: ["output", "o="], nextState: "o" },
            "d|D|qd|qD": { action_: "o after d", nextState: "o" },
          },
          digits: {
            o: { action_: "q=", nextState: "q" },
            "d|D": { action_: "q=", nextState: "dq" },
            q: { action_: ["output", "o="], nextState: "o" },
            a: { action_: "o=", nextState: "o" },
          },
          "space A": { "b|p|bp": {} },
          space: {
            a: { nextState: "as" },
            0: { action_: "sb=false" },
            "1|2": { action_: "sb=true" },
            "r|rt|rd|rdt|rdq": { action_: "output", nextState: "0" },
            "*": { action_: ["output", "sb=true"], nextState: "1" },
          },
          "1st-level escape": {
            "1|2": {
              action_: [
                "output",
                { type_: "insert+p1", option: "1st-level escape" },
              ],
            },
            "*": {
              action_: [
                "output",
                { type_: "insert+p1", option: "1st-level escape" },
              ],
              nextState: "0",
            },
          },
          "[(...)]": {
            "r|rt": { action_: "rd=", nextState: "rd" },
            "rd|rdt": { action_: "rq=", nextState: "rdq" },
          },
          "...": {
            "o|d|D|dq|qd|qD": {
              action_: ["output", { type_: "bond", option: "..." }],
              nextState: "3",
            },
            "*": {
              action_: [
                { type_: "output", option: 1 },
                { type_: "insert", option: "ellipsis" },
              ],
              nextState: "1",
            },
          },
          ". |* ": {
            "*": {
              action_: [
                "output",
                { type_: "insert", option: "addition compound" },
              ],
              nextState: "1",
            },
          },
          "state of aggregation $": {
            "*": {
              action_: ["output", "state of aggregation"],
              nextState: "1",
            },
          },
          "{[(": {
            "a|as|o": {
              action_: ["o=", "output", "parenthesisLevel++"],
              nextState: "2",
            },
            "0|1|2|3": {
              action_: ["o=", "output", "parenthesisLevel++"],
              nextState: "2",
            },
            "*": {
              action_: ["output", "o=", "output", "parenthesisLevel++"],
              nextState: "2",
            },
          },
          ")]}": {
            "0|1|2|3|b|p|bp|o": {
              action_: ["o=", "parenthesisLevel--"],
              nextState: "o",
            },
            "a|as|d|D|q|qd|qD|dq": {
              action_: ["output", "o=", "parenthesisLevel--"],
              nextState: "o",
            },
          },
          ", ": { "*": { action_: ["output", "comma"], nextState: "0" } },
          "^_": { "*": {} },
          "^{(...)}|^($...$)": {
            "0|1|2|as": { action_: "b=", nextState: "b" },
            p: { action_: "b=", nextState: "bp" },
            "3|o": { action_: "d= kv", nextState: "D" },
            q: { action_: "d=", nextState: "qD" },
            "d|D|qd|qD|dq": { action_: ["output", "d="], nextState: "D" },
          },
          "^a|^\\x{}{}|^\\x{}|^\\x|'": {
            "0|1|2|as": { action_: "b=", nextState: "b" },
            p: { action_: "b=", nextState: "bp" },
            "3|o": { action_: "d= kv", nextState: "d" },
            q: { action_: "d=", nextState: "qd" },
            "d|qd|D|qD": { action_: "d=" },
            dq: { action_: ["output", "d="], nextState: "d" },
          },
          "_{(state of aggregation)}$": {
            "d|D|q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" },
          },
          "_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x": {
            "0|1|2|as": { action_: "p=", nextState: "p" },
            b: { action_: "p=", nextState: "bp" },
            "3|o": { action_: "q=", nextState: "q" },
            "d|D": { action_: "q=", nextState: "dq" },
            "q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" },
          },
          "=<>": {
            "0|1|2|3|a|as|o|q|d|D|qd|qD|dq": {
              action_: [{ type_: "output", option: 2 }, "bond"],
              nextState: "3",
            },
          },
          "#": {
            "0|1|2|3|a|as|o": {
              action_: [
                { type_: "output", option: 2 },
                { type_: "bond", option: "#" },
              ],
              nextState: "3",
            },
          },
          "{}": {
            "*": { action_: { type_: "output", option: 1 }, nextState: "1" },
          },
          "{...}": {
            "0|1|2|3|a|as|b|p|bp": { action_: "o=", nextState: "o" },
            "o|d|D|q|qd|qD|dq": { action_: ["output", "o="], nextState: "o" },
          },
          "$...$": {
            a: { action_: "a=" },
            "0|1|2|3|as|b|p|bp|o": { action_: "o=", nextState: "o" },
            "as|o": { action_: "o=" },
            "q|d|D|qd|qD|dq": { action_: ["output", "o="], nextState: "o" },
          },
          "\\bond{(...)}": {
            "*": {
              action_: [{ type_: "output", option: 2 }, "bond"],
              nextState: "3",
            },
          },
          "\\frac{(...)}": {
            "*": {
              action_: [{ type_: "output", option: 1 }, "frac-output"],
              nextState: "3",
            },
          },
          "\\overset{(...)}": {
            "*": {
              action_: [{ type_: "output", option: 2 }, "overset-output"],
              nextState: "3",
            },
          },
          "\\underset{(...)}": {
            "*": {
              action_: [{ type_: "output", option: 2 }, "underset-output"],
              nextState: "3",
            },
          },
          "\\underbrace{(...)}": {
            "*": {
              action_: [{ type_: "output", option: 2 }, "underbrace-output"],
              nextState: "3",
            },
          },
          "\\color{(...)}{(...)}1|\\color(...){(...)}2": {
            "*": {
              action_: [{ type_: "output", option: 2 }, "color-output"],
              nextState: "3",
            },
          },
          "\\color{(...)}0": {
            "*": { action_: [{ type_: "output", option: 2 }, "color0-output"] },
          },
          "\\ce{(...)}": {
            "*": {
              action_: [{ type_: "output", option: 2 }, "ce"],
              nextState: "3",
            },
          },
          "\\,": {
            "*": {
              action_: [{ type_: "output", option: 1 }, "copy"],
              nextState: "1",
            },
          },
          "\\x{}{}|\\x{}|\\x": {
            "0|1|2|3|a|as|b|p|bp|o|c0": {
              action_: ["o=", "output"],
              nextState: "3",
            },
            "*": { action_: ["output", "o=", "output"], nextState: "3" },
          },
          others: {
            "*": {
              action_: [{ type_: "output", option: 1 }, "copy"],
              nextState: "3",
            },
          },
          else2: {
            a: { action_: "a to o", nextState: "o", revisit: !0 },
            as: { action_: ["output", "sb=true"], nextState: "1", revisit: !0 },
            "r|rt|rd|rdt|rdq": {
              action_: ["output"],
              nextState: "0",
              revisit: !0,
            },
            "*": { action_: ["output", "copy"], nextState: "3" },
          },
        }),
        actions: {
          "o after d": function (t, e) {
            var r;
            if ((t.d || "").match(/^[0-9]+$/)) {
              var n = t.d;
              (t.d = void 0), (r = this.output(t)), (t.b = n);
            } else r = this.output(t);
            return h.actions["o="](t, e), r;
          },
          "d= kv": function (t, e) {
            (t.d = e), (t.dType = "kv");
          },
          "charge or bond": function (t, e) {
            if (t.beginsWithBond) {
              var r = [];
              return (
                h.concatArray(r, this.output(t)),
                h.concatArray(r, h.actions.bond(t, e, "-")),
                r
              );
            }
            t.d = e;
          },
          "- after o/d": function (t, e, r) {
            var n = h.patterns.match_("orbital", t.o || ""),
              a = h.patterns.match_("one lowercase greek letter $", t.o || ""),
              o = h.patterns.match_("one lowercase latin letter $", t.o || ""),
              i = h.patterns.match_(
                "$one lowercase latin letter$ $",
                t.o || ""
              ),
              s = "-" === e && ((n && "" === n.remainder) || a || o || i);
            !s ||
              t.a ||
              t.b ||
              t.p ||
              t.d ||
              t.q ||
              n ||
              !o ||
              (t.o = "$" + t.o + "$");
            var l = [];
            return (
              s
                ? (h.concatArray(l, this.output(t)),
                  l.push({ type_: "hyphen" }))
                : ((n = h.patterns.match_("digits", t.d || "")),
                  r && n && "" === n.remainder
                    ? (h.concatArray(l, h.actions["d="](t, e)),
                      h.concatArray(l, this.output(t)))
                    : (h.concatArray(l, this.output(t)),
                      h.concatArray(l, h.actions.bond(t, e, "-")))),
              l
            );
          },
          "a to o": function (t) {
            (t.o = t.a), (t.a = void 0);
          },
          "sb=true": function (t) {
            t.sb = !0;
          },
          "sb=false": function (t) {
            t.sb = !1;
          },
          "beginsWithBond=true": function (t) {
            t.beginsWithBond = !0;
          },
          "beginsWithBond=false": function (t) {
            t.beginsWithBond = !1;
          },
          "parenthesisLevel++": function (t) {
            t.parenthesisLevel++;
          },
          "parenthesisLevel--": function (t) {
            t.parenthesisLevel--;
          },
          "state of aggregation": function (t, e) {
            return { type_: "state of aggregation", p1: h.go(e, "o") };
          },
          comma: function (t, e) {
            var r = e.replace(/\s*$/, "");
            return r !== e && 0 === t.parenthesisLevel
              ? { type_: "comma enumeration L", p1: r }
              : { type_: "comma enumeration M", p1: r };
          },
          output: function (t, e, r) {
            var n, a, o;
            t.r
              ? ((a =
                  "M" === t.rdt
                    ? h.go(t.rd, "tex-math")
                    : "T" === t.rdt
                    ? [{ type_: "text", p1: t.rd || "" }]
                    : h.go(t.rd)),
                (o =
                  "M" === t.rqt
                    ? h.go(t.rq, "tex-math")
                    : "T" === t.rqt
                    ? [{ type_: "text", p1: t.rq || "" }]
                    : h.go(t.rq)),
                (n = { type_: "arrow", r: t.r, rd: a, rq: o }))
              : ((n = []),
                (t.a || t.b || t.p || t.o || t.q || t.d || r) &&
                  (t.sb && n.push({ type_: "entitySkip" }),
                  t.o || t.q || t.d || t.b || t.p || 2 === r
                    ? t.o || t.q || t.d || (!t.b && !t.p)
                      ? t.o &&
                        "kv" === t.dType &&
                        h.patterns.match_("d-oxidation$", t.d || "")
                        ? (t.dType = "oxidation")
                        : t.o && "kv" === t.dType && !t.q && (t.dType = void 0)
                      : ((t.o = t.a),
                        (t.d = t.b),
                        (t.q = t.p),
                        (t.a = t.b = t.p = void 0))
                    : ((t.o = t.a), (t.a = void 0)),
                  n.push({
                    type_: "chemfive",
                    a: h.go(t.a, "a"),
                    b: h.go(t.b, "bd"),
                    p: h.go(t.p, "pq"),
                    o: h.go(t.o, "o"),
                    q: h.go(t.q, "pq"),
                    d: h.go(t.d, "oxidation" === t.dType ? "oxidation" : "bd"),
                    dType: t.dType,
                  })));
            for (var i in t)
              "parenthesisLevel" !== i && "beginsWithBond" !== i && delete t[i];
            return n;
          },
          "oxidation-output": function (t, e) {
            var r = ["{"];
            return h.concatArray(r, h.go(e, "oxidation")), r.push("}"), r;
          },
          "frac-output": function (t, e) {
            return { type_: "frac-ce", p1: h.go(e[0]), p2: h.go(e[1]) };
          },
          "overset-output": function (t, e) {
            return { type_: "overset", p1: h.go(e[0]), p2: h.go(e[1]) };
          },
          "underset-output": function (t, e) {
            return { type_: "underset", p1: h.go(e[0]), p2: h.go(e[1]) };
          },
          "underbrace-output": function (t, e) {
            return { type_: "underbrace", p1: h.go(e[0]), p2: h.go(e[1]) };
          },
          "color-output": function (t, e) {
            return { type_: "color", color1: e[0], color2: h.go(e[1]) };
          },
          "r=": function (t, e) {
            t.r = e;
          },
          "rdt=": function (t, e) {
            t.rdt = e;
          },
          "rd=": function (t, e) {
            t.rd = e;
          },
          "rqt=": function (t, e) {
            t.rqt = e;
          },
          "rq=": function (t, e) {
            t.rq = e;
          },
          operator: function (t, e, r) {
            return { type_: "operator", kind_: r || e };
          },
        },
      },
      a: {
        transitions: h.createTransitions({
          empty: { "*": {} },
          "1/2$": { 0: { action_: "1/2" } },
          else: { 0: { nextState: "1", revisit: !0 } },
          "$(...)$": { "*": { action_: "tex-math tight", nextState: "1" } },
          ",": {
            "*": { action_: { type_: "insert", option: "commaDecimal" } },
          },
          else2: { "*": { action_: "copy" } },
        }),
        actions: {},
      },
      o: {
        transitions: h.createTransitions({
          empty: { "*": {} },
          "1/2$": { 0: { action_: "1/2" } },
          else: { 0: { nextState: "1", revisit: !0 } },
          letters: { "*": { action_: "rm" } },
          "\\ca": { "*": { action_: { type_: "insert", option: "circa" } } },
          "\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
          "${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
          "{(...)}": { "*": { action_: "{text}" } },
          else2: { "*": { action_: "copy" } },
        }),
        actions: {},
      },
      text: {
        transitions: h.createTransitions({
          empty: { "*": { action_: "output" } },
          "{...}": { "*": { action_: "text=" } },
          "${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
          "\\greek": { "*": { action_: ["output", "rm"] } },
          "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: ["output", "copy"] } },
          else: { "*": { action_: "text=" } },
        }),
        actions: {
          output: function (t) {
            if (t.text_) {
              var e = { type_: "text", p1: t.text_ };
              for (var r in t) delete t[r];
              return e;
            }
          },
        },
      },
      pq: {
        transitions: h.createTransitions({
          empty: { "*": {} },
          "state of aggregation $": {
            "*": { action_: "state of aggregation" },
          },
          i$: { 0: { nextState: "!f", revisit: !0 } },
          "(KV letters),": { 0: { action_: "rm", nextState: "0" } },
          formula$: { 0: { nextState: "f", revisit: !0 } },
          "1/2$": { 0: { action_: "1/2" } },
          else: { 0: { nextState: "!f", revisit: !0 } },
          "${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
          "{(...)}": { "*": { action_: "text" } },
          "a-z": { f: { action_: "tex-math" } },
          letters: { "*": { action_: "rm" } },
          "-9.,9": { "*": { action_: "9,9" } },
          ",": {
            "*": {
              action_: { type_: "insert+p1", option: "comma enumeration S" },
            },
          },
          "\\color{(...)}{(...)}1|\\color(...){(...)}2": {
            "*": { action_: "color-output" },
          },
          "\\color{(...)}0": { "*": { action_: "color0-output" } },
          "\\ce{(...)}": { "*": { action_: "ce" } },
          "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
          else2: { "*": { action_: "copy" } },
        }),
        actions: {
          "state of aggregation": function (t, e) {
            return {
              type_: "state of aggregation subscript",
              p1: h.go(e, "o"),
            };
          },
          "color-output": function (t, e) {
            return { type_: "color", color1: e[0], color2: h.go(e[1], "pq") };
          },
        },
      },
      bd: {
        transitions: h.createTransitions({
          empty: { "*": {} },
          x$: { 0: { nextState: "!f", revisit: !0 } },
          formula$: { 0: { nextState: "f", revisit: !0 } },
          else: { 0: { nextState: "!f", revisit: !0 } },
          "-9.,9 no missing 0": { "*": { action_: "9,9" } },
          ".": {
            "*": { action_: { type_: "insert", option: "electron dot" } },
          },
          "a-z": { f: { action_: "tex-math" } },
          x: { "*": { action_: { type_: "insert", option: "KV x" } } },
          letters: { "*": { action_: "rm" } },
          "'": { "*": { action_: { type_: "insert", option: "prime" } } },
          "${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
          "{(...)}": { "*": { action_: "text" } },
          "\\color{(...)}{(...)}1|\\color(...){(...)}2": {
            "*": { action_: "color-output" },
          },
          "\\color{(...)}0": { "*": { action_: "color0-output" } },
          "\\ce{(...)}": { "*": { action_: "ce" } },
          "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } },
          else2: { "*": { action_: "copy" } },
        }),
        actions: {
          "color-output": function (t, e) {
            return { type_: "color", color1: e[0], color2: h.go(e[1], "bd") };
          },
        },
      },
      oxidation: {
        transitions: h.createTransitions({
          empty: { "*": {} },
          "roman numeral": { "*": { action_: "roman-numeral" } },
          "${(...)}$|$(...)$": { "*": { action_: "tex-math" } },
          else: { "*": { action_: "copy" } },
        }),
        actions: {
          "roman-numeral": function (t, e) {
            return { type_: "roman numeral", p1: e || "" };
          },
        },
      },
      "tex-math": {
        transitions: h.createTransitions({
          empty: { "*": { action_: "output" } },
          "\\ce{(...)}": { "*": { action_: ["output", "ce"] } },
          "{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } },
          else: { "*": { action_: "o=" } },
        }),
        actions: {
          output: function (t) {
            if (t.o) {
              var e = { type_: "tex-math", p1: t.o };
              for (var r in t) delete t[r];
              return e;
            }
          },
        },
      },
      "tex-math tight": {
        transitions: h.createTransitions({
          empty: { "*": { action_: "output" } },
          "\\ce{(...)}": { "*": { action_: ["output", "ce"] } },
          "{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } },
          "-|+": { "*": { action_: "tight operator" } },
          else: { "*": { action_: "o=" } },
        }),
        actions: {
          "tight operator": function (t, e) {
            t.o = (t.o || "") + "{" + e + "}";
          },
          output: function (t) {
            if (t.o) {
              var e = { type_: "tex-math", p1: t.o };
              for (var r in t) delete t[r];
              return e;
            }
          },
        },
      },
      "9,9": {
        transitions: h.createTransitions({
          empty: { "*": {} },
          ",": { "*": { action_: "comma" } },
          else: { "*": { action_: "copy" } },
        }),
        actions: {
          comma: function () {
            return { type_: "commaDecimal" };
          },
        },
      },
      pu: {
        transitions: h.createTransitions({
          empty: { "*": { action_: "output" } },
          space$: { "*": { action_: ["output", "space"] } },
          "{[(|)]}": { "0|a": { action_: "copy" } },
          "(-)(9)^(-9)": { 0: { action_: "number^", nextState: "a" } },
          "(-)(9.,9)(e)(99)": { 0: { action_: "enumber", nextState: "a" } },
          space: { "0|a": {} },
          "pm-operator": {
            "0|a": {
              action_: { type_: "operator", option: "\\pm" },
              nextState: "0",
            },
          },
          operator: { "0|a": { action_: "copy", nextState: "0" } },
          "//": { d: { action_: "o=", nextState: "/" } },
          "/": { d: { action_: "o=", nextState: "/" } },
          "{...}|else": {
            "0|d": { action_: "d=", nextState: "d" },
            a: { action_: ["space", "d="], nextState: "d" },
            "/|q": { action_: "q=", nextState: "q" },
          },
        }),
        actions: {
          enumber: function (t, e) {
            var r = [];
            return (
              "+-" === e[0] || "+/-" === e[0]
                ? r.push("\\pm ")
                : e[0] && r.push(e[0]),
              e[1] &&
                (h.concatArray(r, h.go(e[1], "pu-9,9")),
                e[2] &&
                  (e[2].match(/[,.]/)
                    ? h.concatArray(r, h.go(e[2], "pu-9,9"))
                    : r.push(e[2])),
                (e[3] = e[4] || e[3]),
                e[3] &&
                  ((e[3] = e[3].trim()),
                  "e" === e[3] || "*" === e[3].substr(0, 1)
                    ? r.push({ type_: "cdot" })
                    : r.push({ type_: "times" }))),
              e[3] && r.push("10^{" + e[5] + "}"),
              r
            );
          },
          "number^": function (t, e) {
            var r = [];
            return (
              "+-" === e[0] || "+/-" === e[0]
                ? r.push("\\pm ")
                : e[0] && r.push(e[0]),
              h.concatArray(r, h.go(e[1], "pu-9,9")),
              r.push("^{" + e[2] + "}"),
              r
            );
          },
          operator: function (t, e, r) {
            return { type_: "operator", kind_: r || e };
          },
          space: function () {
            return { type_: "pu-space-1" };
          },
          output: function (t) {
            var e,
              r = h.patterns.match_("{(...)}", t.d || "");
            r && "" === r.remainder && (t.d = r.match_);
            var n = h.patterns.match_("{(...)}", t.q || "");
            if (
              (n && "" === n.remainder && (t.q = n.match_),
              t.d &&
                ((t.d = t.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C")),
                (t.d = t.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F"))),
              t.q)
            ) {
              (t.q = t.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C")),
                (t.q = t.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F"));
              var a = { d: h.go(t.d, "pu"), q: h.go(t.q, "pu") };
              "//" === t.o
                ? (e = { type_: "pu-frac", p1: a.d, p2: a.q })
                : (1 < (e = a.d).length || 1 < a.q.length
                    ? e.push({ type_: " / " })
                    : e.push({ type_: "/" }),
                  h.concatArray(e, a.q));
            } else e = h.go(t.d, "pu-2");
            for (var o in t) delete t[o];
            return e;
          },
        },
      },
      "pu-2": {
        transitions: h.createTransitions({
          empty: { "*": { action_: "output" } },
          "*": { "*": { action_: ["output", "cdot"], nextState: "0" } },
          "\\x": { "*": { action_: "rm=" } },
          space: { "*": { action_: ["output", "space"], nextState: "0" } },
          "^{(...)}|^(-1)": { 1: { action_: "^(-1)" } },
          "-9.,9": {
            0: { action_: "rm=", nextState: "0" },
            1: { action_: "^(-1)", nextState: "0" },
          },
          "{...}|else": { "*": { action_: "rm=", nextState: "1" } },
        }),
        actions: {
          cdot: function () {
            return { type_: "tight cdot" };
          },
          "^(-1)": function (t, e) {
            t.rm += "^{" + e + "}";
          },
          space: function () {
            return { type_: "pu-space-2" };
          },
          output: function (t) {
            var e = [];
            if (t.rm) {
              var r = h.patterns.match_("{(...)}", t.rm || "");
              e =
                r && "" === r.remainder
                  ? h.go(r.match_, "pu")
                  : { type_: "rm", p1: t.rm };
            }
            for (var n in t) delete t[n];
            return e;
          },
        },
      },
      "pu-9,9": {
        transitions: h.createTransitions({
          empty: { 0: { action_: "output-0" }, o: { action_: "output-o" } },
          ",": { 0: { action_: ["output-0", "comma"], nextState: "o" } },
          ".": { 0: { action_: ["output-0", "copy"], nextState: "o" } },
          else: { "*": { action_: "text=" } },
        }),
        actions: {
          comma: function () {
            return { type_: "commaDecimal" };
          },
          "output-0": function (t) {
            var e = [];
            if (((t.text_ = t.text_ || ""), 4 < t.text_.length)) {
              var r = t.text_.length % 3;
              0 === r && (r = 3);
              for (var n = t.text_.length - 3; 0 < n; n -= 3)
                e.push(t.text_.substr(n, 3)),
                  e.push({ type_: "1000 separator" });
              e.push(t.text_.substr(0, r)), e.reverse();
            } else e.push(t.text_);
            for (var a in t) delete t[a];
            return e;
          },
          "output-o": function (t) {
            var e = [];
            if (((t.text_ = t.text_ || ""), 4 < t.text_.length)) {
              for (var r = t.text_.length - 3, n = 0; n < r; n += 3)
                e.push(t.text_.substr(n, 3)),
                  e.push({ type_: "1000 separator" });
              e.push(t.text_.substr(n));
            } else e.push(t.text_);
            for (var a in t) delete t[a];
            return e;
          },
        },
      },
    };
    var l = {
      go: function (t, e) {
        if (!t) return "";
        for (var r = "", n = !1, a = 0; a < t.length; a++) {
          var o = t[a];
          "string" == typeof o
            ? (r += o)
            : ((r += l._go2(o)), "1st-level escape" === o.type_ && (n = !0));
        }
        return e || n || !r || (r = "{" + r + "}"), r;
      },
      _goInner: function (t) {
        return t ? l.go(t, !0) : t;
      },
      _go2: function (t) {
        var e;
        switch (t.type_) {
          case "chemfive":
            e = "";
            var r = {
              a: l._goInner(t.a),
              b: l._goInner(t.b),
              p: l._goInner(t.p),
              o: l._goInner(t.o),
              q: l._goInner(t.q),
              d: l._goInner(t.d),
            };
            r.a &&
              (r.a.match(/^[+\-]/) && (r.a = "{" + r.a + "}"),
              (e += r.a + "\\,")),
              (r.b || r.p) &&
                ((e += "{\\vphantom{X}}"),
                (e +=
                  "^{\\hphantom{" +
                  (r.b || "") +
                  "}}_{\\hphantom{" +
                  (r.p || "") +
                  "}}"),
                (e += "{\\vphantom{X}}"),
                (e +=
                  "^{\\smash[t]{\\vphantom{2}}\\llap{" + (r.b || "") + "}}"),
                (e +=
                  "_{\\vphantom{2}\\llap{\\smash[t]{" + (r.p || "") + "}}}")),
              r.o &&
                (r.o.match(/^[+\-]/) && (r.o = "{" + r.o + "}"), (e += r.o)),
              "kv" === t.dType
                ? ((r.d || r.q) && (e += "{\\vphantom{X}}"),
                  r.d && (e += "^{" + r.d + "}"),
                  r.q && (e += "_{\\smash[t]{" + r.q + "}}"))
                : "oxidation" === t.dType
                ? (r.d && ((e += "{\\vphantom{X}}"), (e += "^{" + r.d + "}")),
                  r.q &&
                    ((e += "{\\vphantom{X}}"),
                    (e += "_{\\smash[t]{" + r.q + "}}")))
                : (r.q &&
                    ((e += "{\\vphantom{X}}"),
                    (e += "_{\\smash[t]{" + r.q + "}}")),
                  r.d && ((e += "{\\vphantom{X}}"), (e += "^{" + r.d + "}")));
            break;
          case "rm":
            e = "\\mathrm{" + t.p1 + "}";
            break;
          case "text":
            e = t.p1.match(/[\^_]/)
              ? ((t.p1 = t.p1.replace(" ", "~").replace("-", "\\text{-}")),
                "\\mathrm{" + t.p1 + "}")
              : "\\text{" + t.p1 + "}";
            break;
          case "roman numeral":
            e = "\\mathrm{" + t.p1 + "}";
            break;
          case "state of aggregation":
            e = "\\mskip2mu " + l._goInner(t.p1);
            break;
          case "state of aggregation subscript":
            e = "\\mskip1mu " + l._goInner(t.p1);
            break;
          case "bond":
            if (!(e = l._getBond(t.kind_)))
              throw [
                "MhchemErrorBond",
                "mhchem Error. Unknown bond type (" + t.kind_ + ")",
              ];
            break;
          case "frac":
            var n = "\\frac{" + t.p1 + "}{" + t.p2 + "}";
            e =
              "\\mathchoice{\\textstyle" +
              n +
              "}{" +
              n +
              "}{" +
              n +
              "}{" +
              n +
              "}";
            break;
          case "pu-frac":
            var a =
              "\\frac{" + l._goInner(t.p1) + "}{" + l._goInner(t.p2) + "}";
            e =
              "\\mathchoice{\\textstyle" +
              a +
              "}{" +
              a +
              "}{" +
              a +
              "}{" +
              a +
              "}";
            break;
          case "tex-math":
            e = t.p1 + " ";
            break;
          case "frac-ce":
            e = "\\frac{" + l._goInner(t.p1) + "}{" + l._goInner(t.p2) + "}";
            break;
          case "overset":
            e = "\\overset{" + l._goInner(t.p1) + "}{" + l._goInner(t.p2) + "}";
            break;
          case "underset":
            e =
              "\\underset{" + l._goInner(t.p1) + "}{" + l._goInner(t.p2) + "}";
            break;
          case "underbrace":
            e =
              "\\underbrace{" +
              l._goInner(t.p1) +
              "}_{" +
              l._goInner(t.p2) +
              "}";
            break;
          case "color":
            e = "{\\color{" + t.color1 + "}{" + l._goInner(t.color2) + "}}";
            break;
          case "color0":
            e = "\\color{" + t.color + "}";
            break;
          case "arrow":
            var o = l._goInner(t.rd),
              i = l._goInner(t.rq),
              s = l._getArrow(t.r);
            e = s =
              o || i
                ? "<=>" === t.r ||
                  "<=>>" === t.r ||
                  "<<=>" === t.r ||
                  "<--\x3e" === t.r
                  ? ((s = "\\long" + s),
                    o && (s = "\\overset{" + o + "}{" + s + "}"),
                    i && (s = "\\underset{\\lower7mu{" + i + "}}{" + s + "}"),
                    " {}\\mathrel{" + s + "}{} ")
                  : (i && (s += "[{" + i + "}]"),
                    " {}\\mathrel{\\x" + (s += "{" + o + "}") + "}{} ")
                : " {}\\mathrel{\\long" + s + "}{} ";
            break;
          case "operator":
            e = l._getOperator(t.kind_);
            break;
          case "1st-level escape":
            e = t.p1 + " ";
            break;
          case "space":
            e = " ";
            break;
          case "entitySkip":
          case "pu-space-1":
            e = "~";
            break;
          case "pu-space-2":
            e = "\\mkern3mu ";
            break;
          case "1000 separator":
            e = "\\mkern2mu ";
            break;
          case "commaDecimal":
            e = "{,}";
            break;
          case "comma enumeration L":
            e = "{" + t.p1 + "}\\mkern6mu ";
            break;
          case "comma enumeration M":
            e = "{" + t.p1 + "}\\mkern3mu ";
            break;
          case "comma enumeration S":
            e = "{" + t.p1 + "}\\mkern1mu ";
            break;
          case "hyphen":
            e = "\\text{-}";
            break;
          case "addition compound":
            e = "\\,{\\cdot}\\,";
            break;
          case "electron dot":
            e = "\\mkern1mu \\bullet\\mkern1mu ";
            break;
          case "KV x":
            e = "{\\times}";
            break;
          case "prime":
            e = "\\prime ";
            break;
          case "cdot":
            e = "\\cdot ";
            break;
          case "tight cdot":
            e = "\\mkern1mu{\\cdot}\\mkern1mu ";
            break;
          case "times":
            e = "\\times ";
            break;
          case "circa":
            e = "{\\sim}";
            break;
          case "^":
            e = "uparrow";
            break;
          case "v":
            e = "downarrow";
            break;
          case "ellipsis":
            e = "\\ldots ";
            break;
          case "/":
            e = "/";
            break;
          case " / ":
            e = "\\,/\\,";
            break;
          default:
            throw ["MhchemBugT", "mhchem bug T. Please report."];
        }
        return e;
      },
      _getArrow: function (t) {
        switch (t) {
          case "->":
          case "\u2192":
          case "\u27f6":
            return "rightarrow";
          case "<-":
            return "leftarrow";
          case "<->":
            return "leftrightarrow";
          case "<--\x3e":
            return "leftrightarrows";
          case "<=>":
          case "\u21cc":
            return "rightleftharpoons";
          case "<=>>":
            return "Rightleftharpoons";
          case "<<=>":
            return "Leftrightharpoons";
          default:
            throw ["MhchemBugT", "mhchem bug T. Please report."];
        }
      },
      _getBond: function (t) {
        switch (t) {
          case "-":
          case "1":
            return "{-}";
          case "=":
          case "2":
            return "{=}";
          case "#":
          case "3":
            return "{\\equiv}";
          case "~":
            return "{\\tripledash}";
          case "~-":
            return "{\\rlap{\\lower.1em{-}}\\raise.1em{\\tripledash}}";
          case "~=":
          case "~--":
            return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";
          case "-~-":
            return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{-}}\\tripledash}";
          case "...":
            return "{{\\cdot}{\\cdot}{\\cdot}}";
          case "....":
            return "{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";
          case "->":
            return "{\\rightarrow}";
          case "<-":
            return "{\\leftarrow}";
          case "<":
            return "{<}";
          case ">":
            return "{>}";
          default:
            throw ["MhchemBugT", "mhchem bug T. Please report."];
        }
      },
      _getOperator: function (t) {
        switch (t) {
          case "+":
            return " {}+{} ";
          case "-":
            return " {}-{} ";
          case "=":
            return " {}={} ";
          case "<":
            return " {}<{} ";
          case ">":
            return " {}>{} ";
          case "<<":
            return " {}\\ll{} ";
          case ">>":
            return " {}\\gg{} ";
          case "\\pm":
            return " {}\\pm{} ";
          case "\\approx":
          case "$\\approx$":
            return " {}\\approx{} ";
          case "v":
          case "(v)":
            return " \\downarrow{} ";
          case "^":
          case "(^)":
            return " \\uparrow{} ";
          default:
            throw ["MhchemBugT", "mhchem bug T. Please report."];
        }
      },
    };
    function n(t) {}
    function a(t) {}
    (e.mhchemParser = h),
      (e.texify = l),
      (e.assertNever = n),
      (e.assertString = a);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      a = r(62),
      o = r(7),
      i = r(13),
      s = r(5);
    new n.CommandMap(
      "Physics-automatic-bracing-macros",
      {
        quantity: "Quantity",
        qty: "Quantity",
        pqty: ["Quantity", "(", ")", !0],
        bqty: ["Quantity", "[", "]", !0],
        vqty: ["Quantity", "|", "|", !0],
        Bqty: ["Quantity", "{", "}", !0],
        absolutevalue: ["Quantity", "|", "|", !0],
        abs: ["Quantity", "|", "|", !0],
        norm: ["Quantity", "\\|", "\\|", !0],
        evaluated: "Eval",
        eval: "Eval",
        order: [
          "Quantity",
          "(",
          ")",
          !0,
          "O",
          o.TexConstant.Variant.CALLIGRAPHIC,
        ],
        commutator: "Commutator",
        comm: "Commutator",
        anticommutator: ["Commutator", "\\{", "\\}"],
        acomm: ["Commutator", "\\{", "\\}"],
        poissonbracket: ["Commutator", "\\{", "\\}"],
        pb: ["Commutator", "\\{", "\\}"],
      },
      a.default
    ),
      new n.CharacterMap("Physics-vector-chars", i.default.mathchar0mi, {
        dotproduct: ["\u22c5", { mathvariant: o.TexConstant.Variant.BOLD }],
        vdot: ["\u22c5", { mathvariant: o.TexConstant.Variant.BOLD }],
        crossproduct: "\xd7",
        cross: "\xd7",
        cp: "\xd7",
        gradientnabla: ["\u2207", { mathvariant: o.TexConstant.Variant.BOLD }],
        real: ["\u211c", { mathvariant: o.TexConstant.Variant.NORMAL }],
        imaginary: ["\u2111", { mathvariant: o.TexConstant.Variant.NORMAL }],
      }),
      new n.CommandMap(
        "Physics-vector-macros",
        {
          vectorbold: "VectorBold",
          vb: "VectorBold",
          vectorarrow: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
          va: ["StarMacro", 1, "\\vec{\\vb", "{#1}}"],
          vectorunit: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
          vu: ["StarMacro", 1, "\\hat{\\vb", "{#1}}"],
          gradient: ["OperatorApplication", "\\gradientnabla", "(", "["],
          grad: ["OperatorApplication", "\\gradientnabla", "(", "["],
          divergence: ["VectorOperator", "\\gradientnabla\\vdot", "(", "["],
          div: ["VectorOperator", "\\gradientnabla\\vdot", "(", "["],
          curl: ["VectorOperator", "\\gradientnabla\\crossproduct", "(", "["],
          laplacian: ["OperatorApplication", "\\nabla^2", "(", "["],
        },
        a.default
      ),
      new n.CommandMap(
        "Physics-expressions-macros",
        {
          sin: "Expression",
          sinh: "Expression",
          arcsin: "Expression",
          asin: "Expression",
          cos: "Expression",
          cosh: "Expression",
          arccos: "Expression",
          acos: "Expression",
          tan: "Expression",
          tanh: "Expression",
          arctan: "Expression",
          atan: "Expression",
          csc: "Expression",
          csch: "Expression",
          arccsc: "Expression",
          acsc: "Expression",
          sec: "Expression",
          sech: "Expression",
          arcsec: "Expression",
          asec: "Expression",
          cot: "Expression",
          coth: "Expression",
          arccot: "Expression",
          acot: "Expression",
          exp: ["Expression", !1],
          log: "Expression",
          ln: "Expression",
          det: ["Expression", !1],
          Pr: ["Expression", !1],
          tr: ["Expression", !1],
          trace: ["Expression", !1, "tr"],
          Tr: ["Expression", !1],
          Trace: ["Expression", !1, "Tr"],
          rank: "NamedFn",
          erf: ["Expression", !1],
          Res: ["OperatorApplication", "{\\rm Res}", "(", "[", "{"],
          principalvalue: ["OperatorApplication", "{\\cal P}"],
          pv: ["OperatorApplication", "{\\cal P}"],
          PV: ["OperatorApplication", "{\\rm P.V.}"],
          Re: ["OperatorApplication", "{\\rm Re}", "{"],
          Im: ["OperatorApplication", "{\\rm Im}", "{"],
          sine: ["NamedFn", "sin"],
          hypsine: ["NamedFn", "sinh"],
          arcsine: ["NamedFn", "arcsin"],
          asine: ["NamedFn", "asin"],
          cosine: ["NamedFn", "cos"],
          hypcosine: ["NamedFn", "cosh"],
          arccosine: ["NamedFn", "arccos"],
          acosine: ["NamedFn", "acos"],
          tangent: ["NamedFn", "tan"],
          hyptangent: ["NamedFn", "tanh"],
          arctangent: ["NamedFn", "arctan"],
          atangent: ["NamedFn", "atan"],
          cosecant: ["NamedFn", "csc"],
          hypcosecant: ["NamedFn", "csch"],
          arccosecant: ["NamedFn", "arccsc"],
          acosecant: ["NamedFn", "acsc"],
          secant: ["NamedFn", "sec"],
          hypsecant: ["NamedFn", "sech"],
          arcsecant: ["NamedFn", "arcsec"],
          asecant: ["NamedFn", "asec"],
          cotangent: ["NamedFn", "cot"],
          hypcotangent: ["NamedFn", "coth"],
          arccotangent: ["NamedFn", "arccot"],
          acotangent: ["NamedFn", "acot"],
          exponential: ["NamedFn", "exp"],
          logarithm: ["NamedFn", "log"],
          naturallogarithm: ["NamedFn", "ln"],
          determinant: ["NamedFn", "det"],
          Probability: ["NamedFn", "Pr"],
        },
        a.default
      ),
      new n.CommandMap(
        "Physics-quick-quad-macros",
        {
          qqtext: "Qqtext",
          qq: "Qqtext",
          qcomma: ["Macro", "\\qqtext*{,}"],
          qc: ["Macro", "\\qqtext*{,}"],
          qcc: ["Qqtext", "c.c."],
          qif: ["Qqtext", "if"],
          qthen: ["Qqtext", "then"],
          qelse: ["Qqtext", "else"],
          qotherwise: ["Qqtext", "otherwise"],
          qunless: ["Qqtext", "unless"],
          qgiven: ["Qqtext", "given"],
          qusing: ["Qqtext", "using"],
          qassume: ["Qqtext", "assume"],
          "qsince,": ["Qqtext", "since,"],
          qlet: ["Qqtext", "let"],
          qfor: ["Qqtext", "for"],
          qall: ["Qqtext", "all"],
          qeven: ["Qqtext", "even"],
          qodd: ["Qqtext", "odd"],
          qinteger: ["Qqtext", "integer"],
          qand: ["Qqtext", "and"],
          qor: ["Qqtext", "or"],
          qas: ["Qqtext", "as"],
          qin: ["Qqtext", "in"],
        },
        a.default
      ),
      new n.CommandMap(
        "Physics-derivative-macros",
        {
          flatfrac: ["Macro", "\\left.#1\\middle/#2\\right.", 2],
          differential: ["Differential", "{\\rm d}"],
          dd: ["Differential", "{\\rm d}"],
          variation: ["Differential", "\\delta"],
          var: ["Differential", "\\delta"],
          derivative: ["Derivative", 2, "{\\rm d}"],
          dv: ["Derivative", 2, "{\\rm d}"],
          partialderivative: ["Derivative", 3, "\\partial"],
          pderivative: ["Derivative", 3, "\\partial"],
          pdv: ["Derivative", 3, "\\partial"],
          functionalderivative: ["Derivative", 2, "\\delta"],
          fderivative: ["Derivative", 2, "\\delta"],
          fdv: ["Derivative", 2, "\\delta"],
        },
        a.default
      ),
      new n.CommandMap(
        "Physics-bra-ket-macros",
        {
          bra: "Bra",
          ket: "Ket",
          innerproduct: "BraKet",
          braket: "BraKet",
          outerproduct: "KetBra",
          dyad: "KetBra",
          ketbra: "KetBra",
          op: "KetBra",
          expectationvalue: "Expectation",
          expval: "Expectation",
          ev: "Expectation",
          matrixelement: "MatrixElement",
          matrixel: "MatrixElement",
          mel: "MatrixElement",
        },
        a.default
      ),
      new n.CommandMap(
        "Physics-matrix-macros",
        {
          matrixquantity: "MatrixQuantity",
          mqty: "MatrixQuantity",
          pmqty: ["Macro", "\\mqty(#1)", 1],
          Pmqty: ["Macro", "\\mqty*(#1)", 1],
          bmqty: ["Macro", "\\mqty[#1]", 1],
          vmqty: ["Macro", "\\mqty|#1|", 1],
          smallmatrixquantity: ["MatrixQuantity", !0],
          smqty: ["MatrixQuantity", !0],
          spmqty: ["Macro", "\\smqty(#1)", 1],
          sPmqty: ["Macro", "\\smqty*(#1)", 1],
          sbmqty: ["Macro", "\\smqty[#1]", 1],
          svmqty: ["Macro", "\\smqty|#1|", 1],
          matrixdeterminant: ["Macro", "\\vmqty{#1}", 1],
          mdet: ["Macro", "\\vmqty{#1}", 1],
          smdet: ["Macro", "\\svmqty{#1}", 1],
          identitymatrix: "IdentityMatrix",
          imat: "IdentityMatrix",
          xmatrix: "XMatrix",
          xmat: "XMatrix",
          zeromatrix: ["Macro", "\\xmat{0}{#1}{#2}", 2],
          zmat: ["Macro", "\\xmat{0}{#1}{#2}", 2],
          paulimatrix: "PauliMatrix",
          pmat: "PauliMatrix",
          diagonalmatrix: "DiagonalMatrix",
          dmat: "DiagonalMatrix",
          antidiagonalmatrix: ["DiagonalMatrix", !0],
          admat: ["DiagonalMatrix", !0],
        },
        a.default
      ),
      new n.EnvironmentMap(
        "Physics-aux-envs",
        i.default.environment,
        {
          smallmatrix: [
            "Array",
            null,
            null,
            null,
            "c",
            "0.333em",
            ".2em",
            "S",
            1,
          ],
        },
        a.default
      ),
      new n.MacroMap(
        "Physics-characters",
        {
          "|": ["AutoClose", s.TEXCLASS.ORD],
          ")": "AutoClose",
          "]": "AutoClose",
        },
        a.default
      );
  },
  function (t, e, r) {
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
      P =
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
      C =
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(0),
      s = r(1),
      S = r(14),
      T = r(26),
      v = r(65),
      l = r(10),
      c =
        ((o = s.CommandMap),
        a(u, o),
        (u.prototype.remove = function (t) {
          this.map.delete(t);
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    function k(t, e, r, n) {
      var a, o, i, s;
      if (v.Package.packages.has(t.options.require.prefix + r)) {
        var l = t.options.autoload[r],
          c = P(2 === l.length && Array.isArray(l[0]) ? l : [l, []], 2),
          u = c[0],
          p = c[1];
        try {
          for (var f = C(u), d = f.next(); !d.done; d = f.next()) {
            var h = d.value;
            O.remove(h);
          }
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            d && !d.done && (o = f.return) && o.call(f);
          } finally {
            if (a) throw a.error;
          }
        }
        try {
          for (var m = C(p), g = m.next(); !g.done; g = m.next()) {
            var y = g.value;
            E.remove(y);
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            g && !g.done && (s = m.return) && s.call(m);
          } finally {
            if (i) throw i.error;
          }
        }
        t.i -= e.length + (n ? 0 : 7);
      }
      T.RequireLoad(t, r);
    }
    var O = new (e.AutoloadCommandMap = c)("autoload-macros", {}, {}),
      E = new c("autoload-environments", {}, {});
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
        var r,
          n,
          a,
          o,
          i,
          s,
          l = e.parseOptions,
          c = l.handlers.get("macro"),
          u = l.handlers.get("environment"),
          p = l.options.autoload;
        try {
          for (var f = C(Object.keys(p)), d = f.next(); !d.done; d = f.next()) {
            var h = d.value,
              m = p[h],
              g = P(2 === m.length && Array.isArray(m[0]) ? m : [m, []], 2),
              y = g[0],
              v = g[1];
            try {
              for (
                var b = ((a = void 0), C(y)), x = b.next();
                !x.done;
                x = b.next()
              ) {
                var _ = x.value;
                (c.lookup(_) && "color" !== _) ||
                  O.add(_, new S.Macro(_, k, [h, !0]));
              }
            } catch (t) {
              a = { error: t };
            } finally {
              try {
                x && !x.done && (o = b.return) && o.call(b);
              } finally {
                if (a) throw a.error;
              }
            }
            try {
              for (
                var A = ((i = void 0), C(v)), w = A.next();
                !w.done;
                w = A.next()
              ) {
                var M = w.value;
                u.lookup(M) || E.add(M, new S.Macro(M, k, [h, !1]));
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                w && !w.done && (s = A.return) && s.call(A);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            d && !d.done && (n = f.return) && n.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
        l.options.require.jax || T.RequireConfiguration.config(t, e);
      },
      configPriority: 10,
      init: function (t) {
        t.options.require ||
          l.defaultOptions(t.options, T.RequireConfiguration.options);
      },
      priority: 10,
    });
  },
  function (Lja, Mja) {
    var Nja;
    Nja = (function () {
      return this;
    })();
    try {
      Nja = Nja || Function("return this")() || eval("this");
    } catch (t) {
      "object" == typeof window && (Nja = window);
    }
    Lja.exports = Nja;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.mathjax = MathJax._.mathjax.mathjax);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.registerTeX = function (t) {
        if (MathJax.startup) {
          MathJax.startup.registerConstructor("tex", n.TeX),
            MathJax.startup.useInput("tex"),
            MathJax.config.tex || (MathJax.config.tex = {});
          var e = MathJax.config.tex.packages;
          (MathJax.config.tex.packages = t),
            e && (0, a.insert)(MathJax.config.tex, { packages: e });
        }
      });
    var n = r(27),
      a = r(10);
  },
]);
