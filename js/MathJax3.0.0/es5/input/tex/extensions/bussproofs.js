!(function (r) {
  var o = {};
  function n(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return r[e].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
  }
  (n.m = r),
    (n.c = o),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
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
    n((n.s = 5));
})([
  function (e, w, t) {
    "use strict";
    var r,
      l =
        (this && this.__read) ||
        function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var o,
            n,
            a = r.call(e),
            i = [];
          try {
            for (; (void 0 === t || 0 < t--) && !(o = a.next()).done; )
              i.push(o.value);
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              o && !o.done && (r = a.return) && r.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
          return i;
        },
      T =
        (this && this.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            o = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && o >= e.length && (e = void 0),
                  { value: e && e[o++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(w, "__esModule", { value: !0 });
    function u(e) {
      return (B.root = e), o.outputJax.getBBox(B, o).w;
    }
    function I(e) {
      for (var t = 0; e && !s.default.isType(e, "mtable"); ) {
        if (s.default.isType(e, "text")) return null;
        s.default.isType(e, "mrow")
          ? ((e = e.childNodes[0]), (t = 0))
          : ((e = e.parent.childNodes[t]), t++);
      }
      return e;
    }
    function C(e, t) {
      return e.childNodes["up" === t ? 1 : 0].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[0];
    }
    function S(e, t) {
      return e.childNodes[t].childNodes[0].childNodes[0];
    }
    function N(e) {
      return S(e, 0);
    }
    function A(e, t) {
      return e.childNodes["up" === t ? 0 : 1].childNodes[0].childNodes[0]
        .childNodes[0];
    }
    function L(e) {
      for (; e && !s.default.isType(e, "mtd"); ) e = e.parent;
      return e;
    }
    function j(e) {
      for (; e && null == w.getProperty(e, "inference"); ) e = e.parent;
      return e;
    }
    function k(e, t, r) {
      void 0 === r && (r = !1);
      var o = 0;
      if (e === t) return o;
      if (e !== t.parent) {
        var n = e.childNodes,
          a = r ? n.length - 1 : 0;
        s.default.isType(n[a], "mspace") && (o += u(n[a])), (e = t.parent);
      }
      if (e === t) return o;
      var i = e.childNodes,
        l = r ? i.length - 1 : 0;
      return i[l] !== t && (o += u(i[l])), o;
    }
    function O(e, t) {
      void 0 === t && (t = !1);
      var r = I(e),
        o = A(r, w.getProperty(r, "inferenceRule"));
      return k(e, r, t) + (u(r) - u(o)) / 2;
    }
    function J(e, t, r, o) {
      if (
        (void 0 === o && (o = !1),
        w.getProperty(t, "inferenceRule") || w.getProperty(t, "labelledRule"))
      ) {
        var n = e.nodeFactory.create("node", "mrow");
        t.parent.replaceChild(n, t), n.setChildren([t]), d(t, n), (t = n);
      }
      var a = o ? t.childNodes.length - 1 : 0,
        i = t.childNodes[a];
      s.default.isType(i, "mspace")
        ? s.default.setAttribute(
            i,
            "width",
            c.default.Em(
              c.default.dimen2em(s.default.getAttribute(i, "width")) + r
            )
          )
        : ((i = e.nodeFactory.create("node", "mspace", [], {
            width: c.default.Em(r),
          })),
          o ? t.appendChild(i) : (i.parent = t).childNodes.unshift(i));
    }
    function f(e, t, r, o, n) {
      var a = e.nodeFactory.create("node", "mspace", [], {
        width: c.default.Em(n),
      });
      if ("left" === o) {
        var i = t.childNodes[r].childNodes[0];
        (a.parent = i).childNodes.unshift(a);
      } else t.childNodes[r].appendChild(a);
      w.setProperty(t.parent, "sequentAdjust_" + o, n);
    }
    var s = t(12),
      c = t(3),
      o = null,
      B = null,
      d = function (r, o) {
        ["inference", "proof", "maxAdjust", "labelledRule"].forEach(function (
          e
        ) {
          var t = w.getProperty(r, e);
          null != t && (w.setProperty(o, e, t), w.removeProperty(r, e));
        });
      },
      R = function (e, t) {
        for (var r = t.pop(); t.length; ) {
          var o = t.pop(),
            n = l(p(r, o), 2),
            a = n[0],
            i = n[1];
          w.getProperty(r.parent, "axiom") &&
            (f(e, a < 0 ? r : o, 0, "left", Math.abs(a)),
            f(e, i < 0 ? r : o, 2, "right", Math.abs(i))),
            (r = o);
        }
      },
      p = function (e, t) {
        var r = u(e.childNodes[2]),
          o = u(t.childNodes[2]);
        return [u(e.childNodes[0]) - u(t.childNodes[0]), r - o];
      };
    w.balanceRules = function (e) {
      var t, r;
      B = new e.document.options.MathItem("", null, e.math.display);
      var o = e.data;
      !(function (e) {
        var t = e.nodeLists.sequent;
        if (t)
          for (var r = t.length - 1, o = void 0; (o = t[r]); r--)
            if (w.getProperty(o, "sequentProcessed"))
              w.removeProperty(o, "sequentProcessed");
            else {
              var n = [],
                a = j(o);
              if (1 === w.getProperty(a, "inference")) {
                for (n.push(o); 1 === w.getProperty(a, "inference"); ) {
                  a = I(a);
                  var i = N(C(a, w.getProperty(a, "inferenceRule"))),
                    l = w.getProperty(i, "inferenceRule")
                      ? A(i, w.getProperty(i, "inferenceRule"))
                      : i;
                  w.getProperty(l, "sequent") &&
                    ((o = l.childNodes[0]),
                    n.push(o),
                    w.setProperty(o, "sequentProcessed", !0)),
                    (a = i);
                }
                R(e, n);
              }
            }
      })(o);
      var n,
        a,
        i = o.nodeLists.inference || [];
      try {
        for (var l = T(i), u = l.next(); !u.done; u = l.next()) {
          var f = u.value,
            s = w.getProperty(f, "proof"),
            c = (w.getProperty(f, "labelledRule"), I(f)),
            d = C(c, w.getProperty(c, "inferenceRule")),
            p = N(d);
          if (w.getProperty(p, "inference")) {
            var m = O(p);
            if (m) {
              J(o, p, -m);
              var h = k(f, c, !1);
              J(o, f, m - h);
            }
          }
          var y = S((a = d), a.childNodes.length - 1);
          if (null != w.getProperty(y, "inference")) {
            var v = O(y, !0);
            J(o, y, -v, !0);
            var P = k(f, c, !0),
              g = w.getProperty(f, "maxAdjust");
            null != g && (v = Math.max(v, g));
            var b = void 0;
            if (!s && (b = L(f))) {
              var x = (n = b).parent.childNodes[
                n.parent.childNodes.indexOf(n) + 1
              ];
              if (x) {
                var M = o.nodeFactory.create("node", "mspace", [], {
                  width: v - P + "em",
                });
                x.appendChild(M), f.removeProperty("maxAdjust");
              } else {
                var _ = j(b);
                _ &&
                  ((v = w.getProperty(_, "maxAdjust")
                    ? Math.max(w.getProperty(_, "maxAdjust"), v)
                    : v),
                  w.setProperty(_, "maxAdjust", v));
              }
            } else J(o, w.getProperty(f, "proof") ? f : f.parent, v - P, !0);
          }
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          u && !u.done && (r = l.return) && r.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
    };
    var n = "bspr_",
      a = (((r = {}).bspr_maxAdjust = !0), r);
    (w.setProperty = function (e, t, r) {
      s.default.setProperty(e, n + t, r);
    }),
      (w.getProperty = function (e, t) {
        return s.default.getProperty(e, n + t);
      }),
      (w.removeProperty = function (e, t) {
        e.removeProperty(n + t);
      }),
      (w.makeBsprAttributes = function (e) {
        e.data.root.walkTree(function (t, e) {
          var r = [];
          t.getPropertyNames().forEach(function (e) {
            !a[e] &&
              e.match(RegExp("^" + n)) &&
              r.push(e + ":" + t.getProperty(e));
          }),
            r.length && s.default.setAttribute(t, "semantics", r.join(";"));
        });
      }),
      (w.saveDocument = function (e) {
        if (!("getBBox" in (o = e.document).outputJax))
          throw Error(
            "The bussproofs extension requires an output jax with a getBBox() method"
          );
      }),
      (w.clearDocument = function (e) {
        o = null;
      });
  },
  function (e, t, r) {
    "use strict";
    var o,
      n =
        (this && this.__extends) ||
        ((o = function (e, t) {
          return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          function r() {
            this.constructor = e;
          }
          o(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a,
      i = r(2),
      l = r(10),
      u = r(11),
      f = r(0),
      s =
        ((a = l.BaseItem),
        n(c, a),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "proofTree";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.checkItem = function (e) {
          if (e.isKind("end") && "prooftree" === e.getName()) {
            var t = this.toMml();
            return (
              f.setProperty(t, "proof", !0),
              [[this.factory.create("mml", t), e], !0]
            );
          }
          if (e.isKind("stop"))
            throw new i.default(
              "EnvMissingEnd",
              "Missing \\end{%1}",
              this.getName()
            );
          return this.innerStack.Push(e), l.BaseItem.fail;
        }),
        (c.prototype.toMml = function () {
          var e = a.prototype.toMml.call(this),
            t = this.innerStack.Top();
          if (t.isKind("start") && !t.Size()) return e;
          this.innerStack.Push(this.factory.create("stop"));
          var r = this.innerStack.Top().toMml();
          return this.create("node", "mrow", [r, e], {});
        }),
        c);
    function c() {
      var e = (null !== a && a.apply(this, arguments)) || this;
      return (
        (e.leftLabel = null),
        (e.rigthLabel = null),
        (e.innerStack = new u.default(e.factory, {}, !0)),
        e
      );
    }
    t.ProofTreeItem = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.TexError.default);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.ParseUtil.default);
  },
  function (e, t, r) {
    "use strict";
    var m =
        (this && this.__read) ||
        function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var o,
            n,
            a = r.call(e),
            i = [];
          try {
            for (; (void 0 === t || 0 < t--) && !(o = a.next()).done; )
              i.push(o.value);
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              o && !o.done && (r = a.return) && r.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
          return i;
        },
      a =
        (this && this.__spread) ||
        function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(m(arguments[t]));
          return e;
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var h = r(2),
      y = r(14),
      i = r(3),
      v = r(0),
      o = {
        Prooftree: function (e, t) {
          return (
            e.Push(t),
            e.itemFactory
              .create("proofTree")
              .setProperties({
                name: t.getName(),
                line: "solid",
                currentLine: "solid",
                rootAtTop: !1,
              })
          );
        },
        Axiom: function (e, t) {
          var r = e.stack.Top();
          if ("proofTree" !== r.kind)
            throw new h.default(
              "IllegalProofCommand",
              "Proof commands only allowed in prooftree environment."
            );
          var o = d(e, e.GetArgument(t));
          v.setProperty(o, "axiom", !0), r.Push(o);
        },
      },
      d = function (e, t) {
        var r = i.default.internalMath(e, i.default.trimSpaces(t), 0);
        if (!r[0].childNodes[0].childNodes.length)
          return e.create("node", "mrow", []);
        var o = e.create("node", "mspace", [], { width: ".5ex" }),
          n = e.create("node", "mspace", [], { width: ".5ex" });
        return e.create("node", "mrow", a([o], r, [n]));
      };
    function p(e, t, r, o, n, a, i) {
      var l,
        u,
        f,
        s,
        c = e.create("node", "mtr", [e.create("node", "mtd", [t], {})], {}),
        d = e.create("node", "mtr", [e.create("node", "mtd", r, {})], {}),
        p = e.create("node", "mtable", i ? [d, c] : [c, d], {
          align: "top 2",
          rowlines: a,
          framespacing: "0 0",
        });
      if (
        (v.setProperty(p, "inferenceRule", i ? "up" : "down"),
        o &&
          ((l = e.create("node", "mpadded", [o], {
            height: "+.5em",
            width: "+.5em",
            voffset: "-.15em",
          })),
          v.setProperty(l, "prooflabel", "left")),
        n &&
          ((u = e.create("node", "mpadded", [n], {
            height: "+.5em",
            width: "+.5em",
            voffset: "-.15em",
          })),
          v.setProperty(u, "prooflabel", "right")),
        o && n)
      )
        (f = [l, p, u]), (s = "both");
      else if (o) (f = [l, p]), (s = "left");
      else {
        if (!n) return p;
        (f = [p, u]), (s = "right");
      }
      return (
        (p = e.create("node", "mrow", f)),
        v.setProperty(p, "labelledRule", s),
        p
      );
    }
    function P(e, t) {
      if ("$" !== e.GetNext())
        throw new h.default(
          "IllegalUseOfCommand",
          "Use of %1 does not match it's definition.",
          t
        );
      e.i++;
      var r = e.GetUpTo(t, "$");
      if (-1 === r.indexOf("\\fCenter"))
        throw new h.default(
          "IllegalUseOfCommand",
          "Missing \\fCenter in %1.",
          t
        );
      var o = m(r.split("\\fCenter"), 2),
        n = o[0],
        a = o[1],
        i = new y.default(n, e.stack.env, e.configuration).mml(),
        l = new y.default(a, e.stack.env, e.configuration).mml(),
        u = new y.default("\\fCenter", e.stack.env, e.configuration).mml(),
        f = e.create("node", "mtd", [i], {}),
        s = e.create("node", "mtd", [u], {}),
        c = e.create("node", "mtd", [l], {}),
        d = e.create("node", "mtr", [f, s, c], {}),
        p = e.create("node", "mtable", [d], {
          columnspacing: ".5ex",
          columnalign: "center 2",
        });
      return (
        v.setProperty(p, "sequent", !0),
        e.configuration.addNode("sequent", d),
        p
      );
    }
    (o.Inference = function (e, t, r) {
      var o = e.stack.Top();
      if ("proofTree" !== o.kind)
        throw new h.default(
          "IllegalProofCommand",
          "Proof commands only allowed in prooftree environment."
        );
      if (o.Size() < r)
        throw new h.default("BadProofTree", "Proof tree badly specified.");
      for (
        var n = o.getProperty("rootAtTop"),
          a = 1 !== r || o.Peek()[0].childNodes.length ? r : 0,
          i = [];
        i.length && i.unshift(e.create("node", "mtd", [], {})),
          i.unshift(
            e.create("node", "mtd", [o.Pop()], {
              rowalign: n ? "top" : "bottom",
            })
          ),
          0 < --r;

      );
      var l = e.create("node", "mtr", i, {}),
        u = e.create("node", "mtable", [l], { framespacing: "0 0" }),
        f = d(e, e.GetArgument(t)),
        s = o.getProperty("currentLine");
      s !== o.getProperty("line") &&
        o.setProperty("currentLine", o.getProperty("line"));
      var c = p(e, u, [f], o.getProperty("left"), o.getProperty("right"), s, n);
      o.setProperty("left", null),
        o.setProperty("right", null),
        v.setProperty(c, "inference", a),
        e.configuration.addNode("inference", c),
        o.Push(c);
    }),
      (o.Label = function (e, t, r) {
        var o = e.stack.Top();
        if ("proofTree" !== o.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        var n = i.default.internalMath(e, e.GetArgument(t), 0),
          a = 1 < n.length ? e.create("node", "mrow", n, {}) : n[0];
        o.setProperty(r, a);
      }),
      (o.SetLine = function (e, t, r, o) {
        var n = e.stack.Top();
        if ("proofTree" !== n.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        n.setProperty("currentLine", r), o && n.setProperty("line", r);
      }),
      (o.RootAtTop = function (e, t, r) {
        var o = e.stack.Top();
        if ("proofTree" !== o.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        o.setProperty("rootAtTop", r);
      }),
      (o.AxiomF = function (e, t) {
        var r = e.stack.Top();
        if ("proofTree" !== r.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        var o = P(e, t);
        v.setProperty(o, "axiom", !0), r.Push(o);
      }),
      (o.FCenter = function (e, t) {}),
      (o.InferenceF = function (e, t, r) {
        var o = e.stack.Top();
        if ("proofTree" !== o.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        if (o.Size() < r)
          throw new h.default("BadProofTree", "Proof tree badly specified.");
        for (
          var n = o.getProperty("rootAtTop"),
            a = 1 !== r || o.Peek()[0].childNodes.length ? r : 0,
            i = [];
          i.length && i.unshift(e.create("node", "mtd", [], {})),
            i.unshift(
              e.create("node", "mtd", [o.Pop()], {
                rowalign: n ? "top" : "bottom",
              })
            ),
            0 < --r;

        );
        var l = e.create("node", "mtr", i, {}),
          u = e.create("node", "mtable", [l], { framespacing: "0 0" }),
          f = P(e, t),
          s = o.getProperty("currentLine");
        s !== o.getProperty("line") &&
          o.setProperty("currentLine", o.getProperty("line"));
        var c = p(
          e,
          u,
          [f],
          o.getProperty("left"),
          o.getProperty("right"),
          s,
          n
        );
        o.setProperty("left", null),
          o.setProperty("right", null),
          v.setProperty(c, "inference", a),
          e.configuration.addNode("inference", c),
          o.Push(c);
      }),
      (t.default = o);
  },
  function (e, t, r) {
    "use strict";
    r(6);
  },
  function (e, t, r) {
    "use strict";
    var o = r(7),
      n = u(r(8)),
      a = u(r(1)),
      i = u(r(4)),
      l = u(r(0));
    function u(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return (t.default = e), t;
    }
    (0, o.combineWithMathJax)({
      _: {
        input: {
          tex: {
            bussproofs: {
              BussproofsConfiguration: n,
              BussproofsItems: a,
              BussproofsMethods: i,
              BussproofsUtil: l,
            },
          },
        },
      },
    });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.combineConfig = MathJax._.components.global.combineConfig),
      (t.combineDefaults = MathJax._.components.global.combineDefaults),
      (t.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (t.MathJax = MathJax._.components.global.MathJax);
  },
  function (e, t, r) {
    "use strict";
    var o;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = r(9),
      a = r(1),
      i = r(0);
    r(13),
      (t.BussproofsConfiguration = n.Configuration.create("bussproofs", {
        handler: {
          macro: ["Bussproofs-macros"],
          environment: ["Bussproofs-environments"],
        },
        items:
          ((o = {}), (o[a.ProofTreeItem.prototype.kind] = a.ProofTreeItem), o),
        preprocessors: [[i.saveDocument, 1]],
        postprocessors: [
          [i.clearDocument, 3],
          [i.makeBsprAttributes, 2],
          [i.balanceRules, 1],
        ],
      }));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (t.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MmlStack = MathJax._.input.tex.StackItem.MmlStack),
      (t.BaseItem = MathJax._.input.tex.StackItem.BaseItem);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.Stack.default);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.NodeUtil.default);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = r(4),
      n = r(15),
      a = r(16);
    new a.CommandMap(
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
      o.default
    ),
      new a.EnvironmentMap(
        "Bussproofs-environments",
        n.default.environment,
        { prooftree: ["Prooftree", null, !1] },
        o.default
      );
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.TexParser.default);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.ParseMethods.default);
  },
  function (e, t, r) {
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
]);
