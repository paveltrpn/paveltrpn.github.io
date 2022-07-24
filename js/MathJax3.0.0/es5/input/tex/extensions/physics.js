!(function (a) {
  var r = {};
  function n(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return a[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = a),
    (n.c = r),
    (n.d = function (t, e, a) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
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
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
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
    n((n.s = 5));
})([
  function (t, e, a) {
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
              for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
            })(t, e);
        }),
        function (t, e) {
          function a() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((a.prototype = e.prototype), new a()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      o = a(10),
      s = a(1),
      c = a(2),
      l =
        ((i = o.BaseItem),
        n(u, i),
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
            var a = i.prototype.toMml.call(this),
              r = t.create("node", "mpadded", [a], { height: 0, depth: 0 });
            this.Clear(), this.Push(t.create("node", "TeXAtom", [r]));
          }
          e && this.Push(new c.default(e, t.stack.env, t.configuration).mml());
          var n = i.prototype.toMml.call(this);
          return s.default.fenced(
            this.factory.configuration,
            this.getProperty("open"),
            n,
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
            : i.prototype.checkItem.call(this, t);
        }),
        u);
    function u() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.AutoOpen = l;
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.ParseUtil.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.TexParser.default);
  },
  function (t, e, a) {
    "use strict";
    var s =
      (this && this.__read) ||
      function (t, e) {
        var a = "function" == typeof Symbol && t[Symbol.iterator];
        if (!a) return t;
        var r,
          n,
          i = a.call(t),
          o = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
            o.push(r.value);
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            r && !r.done && (a = i.return) && a.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = a(13),
      x = a(2),
      v = a(14),
      g = a(4),
      h = a(1),
      M = a(15),
      c = a(16),
      n = {},
      y = { "(": ")", "[": "]", "{": "}", "|": "|" },
      b = /^(b|B)i(g{1,2})$/;
    (n.Quantity = function (t, e, a, r, n, i, o) {
      void 0 === a && (a = "("),
        void 0 === r && (r = ")"),
        void 0 === n && (n = !1),
        void 0 === i && (i = ""),
        void 0 === o && (o = "");
      var s = !!n && t.GetStar(),
        c = t.GetNext(),
        l = t.i,
        u = null;
      if ("\\" === c) {
        if ((t.i++, !(u = t.GetCS()).match(b))) {
          var m = t.create("node", "mrow");
          return (
            t.Push(h.default.fenced(t.configuration, a, m, r)), void (t.i = l)
          );
        }
        c = t.GetNext();
      }
      var d = y[c];
      if (n && "{" !== c)
        throw new v.default(
          "MissingArgFor",
          "Missing argument for %1",
          t.currentCS
        );
      if (!d) {
        m = t.create("node", "mrow");
        return (
          t.Push(h.default.fenced(t.configuration, a, m, r)), void (t.i = l)
        );
      }
      if (i) {
        var f = t.create("token", "mi", { texClass: g.TEXCLASS.OP }, i);
        o && M.default.setAttribute(f, "mathvariant", o),
          t.Push(t.itemFactory.create("fn", f));
      }
      if ("{" === c) {
        var p = t.GetArgument(e);
        return (
          (c = n ? a : "\\{"),
          (d = n ? r : "\\}"),
          (p = s
            ? c + " " + p + " " + d
            : u
            ? "\\" + u + "l" + c + " " + p + " \\" + u + "r" + d
            : "\\left" + c + " " + p + " \\right" + d),
          void t.Push(new x.default(p, t.stack.env, t.configuration).mml())
        );
      }
      n && ((c = a), (d = r)),
        t.i++,
        t.Push(
          t.itemFactory
            .create("auto open")
            .setProperties({ open: c, close: d, big: u })
        );
    }),
      (n.Eval = function (t, e) {
        var a = t.GetStar(),
          r = t.GetNext();
        if ("{" !== r) {
          if ("(" === r || "[" === r)
            return (
              t.i++,
              void t.Push(
                t.itemFactory
                  .create("auto open")
                  .setProperties({
                    open: r,
                    close: "|",
                    smash: a,
                    right: "\\vphantom{\\int}",
                  })
              )
            );
          throw new v.default(
            "MissingArgFor",
            "Missing argument for %1",
            t.currentCS
          );
        }
        var n = t.GetArgument(e),
          i =
            "\\left. " +
            (a ? "\\smash{" + n + "}" : n) +
            " \\vphantom{\\int}\\right|";
        t.string = t.string.slice(0, t.i) + i + t.string.slice(t.i);
      }),
      (n.Commutator = function (t, e, a, r) {
        void 0 === a && (a = "["), void 0 === r && (r = "]");
        var n = t.GetStar(),
          i = t.GetNext(),
          o = null;
        if ("\\" === i) {
          if ((t.i++, !(o = t.GetCS()).match(b)))
            throw new v.default(
              "MissingArgFor",
              "Missing argument for %1",
              t.currentCS
            );
          i = t.GetNext();
        }
        if ("{" !== i)
          throw new v.default(
            "MissingArgFor",
            "Missing argument for %1",
            t.currentCS
          );
        var s = t.GetArgument(e) + "," + t.GetArgument(e);
        (s = n
          ? a + " " + s + " " + r
          : o
          ? "\\" + o + "l" + a + " " + s + " \\" + o + "r" + r
          : "\\left" + a + " " + s + " \\right" + r),
          t.Push(new x.default(s, t.stack.env, t.configuration).mml());
      });
    var l = [65, 90],
      u = [97, 122],
      m = [913, 937],
      d = [945, 969],
      f = [48, 57];
    function p(t, e) {
      return t >= e[0] && t <= e[1];
    }
    function P(t, e, a, r) {
      var n = t.configuration.parser,
        i = c.NodeFactory.createToken(t, e, a, r),
        o = r.charCodeAt(0);
      return (
        1 === r.length &&
          !n.stack.env.font &&
          n.stack.env.vectorFont &&
          (p(o, l) ||
            p(o, u) ||
            p(o, m) ||
            p(o, f) ||
            (p(o, d) && n.stack.env.vectorStar) ||
            M.default.getAttribute(i, "accent")) &&
          M.default.setAttribute(i, "mathvariant", n.stack.env.vectorFont),
        i
      );
    }
    (n.VectorBold = function (t, e) {
      var a = t.GetStar(),
        r = t.GetArgument(e),
        n = t.configuration.nodeFactory.get("token"),
        i = t.stack.env.font;
      delete t.stack.env.font,
        t.configuration.nodeFactory.set("token", P),
        (t.stack.env.vectorFont = a ? "bold-italic" : "bold"),
        (t.stack.env.vectorStar = a);
      var o = new x.default(r, t.stack.env, t.configuration).mml();
      i && (t.stack.env.font = i),
        delete t.stack.env.vectorFont,
        delete t.stack.env.vectorStar,
        t.configuration.nodeFactory.set("token", n),
        t.Push(o);
    }),
      (n.StarMacro = function (t, e, a) {
        for (var r = [], n = 3; n < arguments.length; n++)
          r[n - 3] = arguments[n];
        var i = t.GetStar(),
          o = [];
        if (a) for (var s = o.length; s < a; s++) o.push(t.GetArgument(e));
        var c = r.join(i ? "*" : "");
        if (
          ((c = h.default.substituteArgs(t, o, c)),
          (t.string = h.default.addArgs(t, c, t.string.slice(t.i))),
          (t.i = 0),
          ++t.macroCount > t.configuration.options.maxMacros)
        )
          throw new v.default(
            "MaxMacroSub1",
            "MathJax maximum macro substitution count exceeded; is there a recursive macro call?"
          );
      });
    function i(t, e, a, r, n) {
      var i = new x.default(r, t.stack.env, t.configuration).mml();
      t.Push(t.itemFactory.create(e, i));
      var o = t.GetNext(),
        s = y[o];
      if (s) {
        var c = -1 !== n.indexOf(o);
        if ("{" === o) {
          var l =
            (c ? "\\left\\{" : "") +
            " " +
            t.GetArgument(a) +
            " " +
            (c ? "\\right\\}" : "");
          return (t.string = l + t.string.slice(t.i)), void (t.i = 0);
        }
        c &&
          (t.i++,
          t.Push(
            t.itemFactory
              .create("auto open")
              .setProperties({ open: o, close: s })
          ));
      }
    }
    function A(t, e, a) {
      var r = s(t, 3),
        n = r[0],
        i = r[1],
        o = r[2];
      return e && a
        ? "\\left\\langle{" +
            n +
            "}\\middle\\vert{" +
            i +
            "}\\middle\\vert{" +
            o +
            "}\\right\\rangle"
        : e
        ? "\\langle{" + n + "}\\vert{" + i + "}\\vert{" + o + "}\\rangle"
        : "\\left\\langle{" +
          n +
          "}\\right\\vert{" +
          i +
          "}\\left\\vert{" +
          o +
          "}\\right\\rangle";
    }
    (n.OperatorApplication = function (t, e, a) {
      for (var r = [], n = 3; n < arguments.length; n++)
        r[n - 3] = arguments[n];
      i(t, "fn", e, a, r);
    }),
      (n.VectorOperator = function (t, e, a) {
        for (var r = [], n = 3; n < arguments.length; n++)
          r[n - 3] = arguments[n];
        i(t, "mml", e, a, r);
      }),
      (n.Expression = function (t, e, a, r) {
        void 0 === a && (a = !0),
          void 0 === r && (r = ""),
          (r = r || e.slice(1));
        var n = a ? t.GetBrackets(e) : null,
          i = t.create("token", "mi", { texClass: g.TEXCLASS.OP }, r);
        if (n) {
          var o = new x.default(n, t.stack.env, t.configuration).mml();
          i = t.create("node", "msup", [i, o]);
        }
        t.Push(t.itemFactory.create("fn", i)),
          "(" === t.GetNext() &&
            (t.i++,
            t.Push(
              t.itemFactory
                .create("auto open")
                .setProperties({ open: "(", close: ")" })
            ));
      }),
      (n.Qqtext = function (t, e, a) {
        var r =
          (t.GetStar() ? "" : "\\quad") +
          "\\text{" +
          (a || t.GetArgument(e)) +
          "}\\quad ";
        t.string = t.string.slice(0, t.i) + r + t.string.slice(t.i);
      }),
      (n.Differential = function (t, e, a) {
        var r = t.GetBrackets(e),
          n = null != r ? "^{" + r + "}" : " ",
          i = "(" === t.GetNext(),
          o = "{" === t.GetNext(),
          s = a + n;
        if (i || o)
          if (o) {
            s += t.GetArgument(e);
            c = new x.default(s, t.stack.env, t.configuration).mml();
            t.Push(
              t.create("node", "TeXAtom", [c], { texClass: g.TEXCLASS.OP })
            );
          } else
            t.Push(new x.default(s, t.stack.env, t.configuration).mml()),
              t.i++,
              t.Push(
                t.itemFactory
                  .create("auto open")
                  .setProperties({ open: "(", close: ")" })
              );
        else {
          s += t.GetArgument(e, !0) || "";
          var c = new x.default(s, t.stack.env, t.configuration).mml();
          t.Push(c);
        }
      }),
      (n.Derivative = function (t, e, a, r) {
        var n = t.GetStar(),
          i = t.GetBrackets(e),
          o = 1,
          s = [];
        for (s.push(t.GetArgument(e)); "{" === t.GetNext() && o < a; )
          s.push(t.GetArgument(e)), o++;
        var c = !1,
          l = " ",
          u = " ";
        2 < a && 2 < s.length
          ? ((l = "^{" + (s.length - 1) + "}"), (c = !0))
          : null != i &&
            (2 < a && 1 < s.length && (c = !0), (u = l = "^{" + i + "}"));
        for (
          var m = n ? "\\flatfrac" : "\\frac",
            d = 1 < s.length ? s[0] : "",
            f = 1 < s.length ? s[1] : s[0],
            p = "",
            v = 2,
            g = void 0;
          (g = s[v]);
          v++
        )
          p += r + " " + g;
        var h = m + "{" + r + l + d + "}{" + r + " " + f + u + " " + p + "}";
        t.Push(new x.default(h, t.stack.env, t.configuration).mml()),
          "(" === t.GetNext() &&
            (t.i++,
            t.Push(
              t.itemFactory
                .create("auto open")
                .setProperties({ open: "(", close: ")", ignore: c })
            ));
      }),
      (n.Bra = function (t, e) {
        var a = t.GetStar(),
          r = t.GetArgument(e),
          n = "",
          i = !1,
          o = !1;
        if ("\\" === t.GetNext()) {
          var s = t.i;
          t.i++;
          var c = t.GetCS(),
            l = t.lookup("macro", c);
          l && "ket" === l.symbol
            ? ((i = !0),
              (s = t.i),
              (o = t.GetStar()),
              "{" === t.GetNext()
                ? (n = t.GetArgument(c, !0))
                : ((t.i = s), (o = !1)))
            : (t.i = s);
        }
        var u = "";
        (u = i
          ? a || o
            ? "\\langle{" + r + "}\\vert{" + n + "}\\rangle"
            : "\\left\\langle{" +
              r +
              "}\\middle\\vert{" +
              n +
              "}\\right\\rangle"
          : a || o
          ? "\\langle{" + r + "}\\vert"
          : "\\left\\langle{" + r + "}\\right\\vert{" + n + "}"),
          t.Push(new x.default(u, t.stack.env, t.configuration).mml());
      }),
      (n.Ket = function (t, e) {
        var a = t.GetStar(),
          r = t.GetArgument(e),
          n = a
            ? "\\vert{" + r + "}\\rangle"
            : "\\left\\vert{" + r + "}\\right\\rangle";
        t.Push(new x.default(n, t.stack.env, t.configuration).mml());
      }),
      (n.BraKet = function (t, e) {
        var a = t.GetStar(),
          r = t.GetArgument(e),
          n = null;
        "{" === t.GetNext() && (n = t.GetArgument(e, !0));
        var i = "";
        (i =
          null == n
            ? a
              ? "\\langle{" + r + "}\\vert{" + r + "}\\rangle"
              : "\\left\\langle{" +
                r +
                "}\\middle\\vert{" +
                r +
                "}\\right\\rangle"
            : a
            ? "\\langle{" + r + "}\\vert{" + n + "}\\rangle"
            : "\\left\\langle{" +
              r +
              "}\\middle\\vert{" +
              n +
              "}\\right\\rangle"),
          t.Push(new x.default(i, t.stack.env, t.configuration).mml());
      }),
      (n.KetBra = function (t, e) {
        var a = t.GetStar(),
          r = t.GetArgument(e),
          n = null;
        "{" === t.GetNext() && (n = t.GetArgument(e, !0));
        var i = "";
        (i =
          null == n
            ? a
              ? "\\vert{" + r + "}\\rangle\\!\\langle{" + r + "}\\vert"
              : "\\left\\vert{" +
                r +
                "}\\middle\\rangle\\!\\middle\\langle{" +
                r +
                "}\\right\\vert"
            : a
            ? "\\vert{" + r + "}\\rangle\\!\\langle{" + n + "}\\vert"
            : "\\left\\vert{" +
              r +
              "}\\middle\\rangle\\!\\middle\\langle{" +
              n +
              "}\\right\\vert"),
          t.Push(new x.default(i, t.stack.env, t.configuration).mml());
      }),
      (n.Expectation = function (t, e) {
        var a = t.GetStar(),
          r = a && t.GetStar(),
          n = (t.GetNext(), t.GetArgument(e)),
          i = null;
        "{" === t.GetNext() && (i = t.GetArgument(e, !0));
        var o =
          n && i
            ? A([i, n, i], a, r)
            : a
            ? "\\langle {" + n + "} \\rangle"
            : "\\left\\langle {" + n + "} \\right\\rangle";
        t.Push(new x.default(o, t.stack.env, t.configuration).mml());
      }),
      (n.MatrixElement = function (t, e) {
        var a = t.GetStar(),
          r = a && t.GetStar(),
          n =
            (t.GetNext(),
            A([t.GetArgument(e), t.GetArgument(e), t.GetArgument(e)], a, r));
        t.Push(new x.default(n, t.stack.env, t.configuration).mml());
      }),
      (n.MatrixQuantity = function (t, e, a) {
        var r = t.GetStar(),
          n = a ? "smallmatrix" : "array",
          i = "",
          o = "",
          s = "";
        switch (t.GetNext()) {
          case "{":
            i = t.GetArgument(e);
            break;
          case "(":
            t.i++,
              (o = r ? "\\lgroup" : "("),
              (s = r ? "\\rgroup" : ")"),
              (i = t.GetUpTo(e, ")"));
            break;
          case "[":
            t.i++, (o = "["), (s = "]"), (i = t.GetUpTo(e, "]"));
            break;
          case "|":
            t.i++, (s = o = "|"), (i = t.GetUpTo(e, "|"));
            break;
          default:
            (o = "("), (s = ")");
        }
        var c =
          (o ? "\\left" : "") +
          o +
          "\\begin{" +
          n +
          "}{} " +
          i +
          "\\end{" +
          n +
          "}" +
          (o ? "\\right" : "") +
          s;
        t.Push(new x.default(c, t.stack.env, t.configuration).mml());
      }),
      (n.IdentityMatrix = function (t, e) {
        var a = t.GetArgument(e),
          r = parseInt(a, 10);
        if (isNaN(r)) throw new v.default("InvalidNumber", "Invalid number");
        if (r <= 1)
          return (t.string = "1" + t.string.slice(t.i)), void (t.i = 0);
        for (var n = Array(r).fill("0"), i = [], o = 0; o < r; o++) {
          var s = n.slice();
          (s[o] = "1"), i.push(s.join(" & "));
        }
        (t.string = i.join("\\\\ ") + t.string.slice(t.i)), (t.i = 0);
      }),
      (n.XMatrix = function (t, e) {
        var a = t.GetStar(),
          r = t.GetArgument(e),
          n = t.GetArgument(e),
          i = t.GetArgument(e),
          o = parseInt(n, 10),
          s = parseInt(i, 10);
        if (isNaN(o) || isNaN(s) || s.toString() !== i || o.toString() !== n)
          throw new v.default("InvalidNumber", "Invalid number");
        if (((o = o < 1 ? 1 : o), (s = s < 1 ? 1 : s), !a)) {
          var c = Array(s).fill(r).join(" & "),
            l = Array(o).fill(c).join("\\\\ ");
          return (t.string = l + t.string.slice(t.i)), void (t.i = 0);
        }
        var u = "";
        if (1 === o && 1 === s) u = r;
        else if (1 === o) {
          c = [];
          for (var m = 1; m <= s; m++) c.push(r + "_{" + m + "}");
          u = c.join(" & ");
        } else if (1 === s) {
          for (c = [], m = 1; m <= o; m++) c.push(r + "_{" + m + "}");
          u = c.join("\\\\ ");
        } else {
          var d = [];
          for (m = 1; m <= o; m++) {
            c = [];
            for (var f = 1; f <= s; f++)
              c.push(r + "_{{" + m + "}{" + f + "}}");
            d.push(c.join(" & "));
          }
          u = d.join("\\\\ ");
        }
        (t.string = u + t.string.slice(t.i)), (t.i = 0);
      }),
      (n.PauliMatrix = function (t, e) {
        var a = t.GetArgument(e),
          r = a.slice(1);
        switch (a[0]) {
          case "0":
            r += " 1 & 0\\\\ 0 & 1";
            break;
          case "1":
          case "x":
            r += " 0 & 1\\\\ 1 & 0";
            break;
          case "2":
          case "y":
            r += " 0 & -i\\\\ i & 0";
            break;
          case "3":
          case "z":
            r += " 1 & 0\\\\ 0 & -1";
        }
        (t.string = r + t.string.slice(t.i)), (t.i = 0);
      }),
      (n.DiagonalMatrix = function (e, t, a) {
        if ("{" === e.GetNext()) {
          var r = e.i,
            n = (e.GetArgument(t), e.i);
          e.i = r + 1;
          for (var i = [], o = "", s = e.i; s < n; ) {
            try {
              o = e.GetUpTo(t, ",");
            } catch (t) {
              (e.i = n), i.push(e.string.slice(s, n - 1));
              break;
            }
            if (e.i >= n) {
              i.push(e.string.slice(s, n));
              break;
            }
            (s = e.i), i.push(o);
          }
          (e.string =
            (function (t, e) {
              for (var a = t.length, r = [], n = 0; n < a; n++)
                r.push(
                  Array(e ? a - n : n + 1).join("&") + "\\mqty{" + t[n] + "}"
                );
              return r.join("\\\\ ");
            })(i, a) + e.string.slice(n)),
            (e.i = 0);
        }
      }),
      (n.AutoClose = function (t, e, a) {
        var r = t.create("token", "mo", { stretchy: !1 }, e),
          n = t.itemFactory.create("mml", r).setProperties({ autoclose: e });
        t.Push(n);
      }),
      (n.Macro = r.default.Macro),
      (n.NamedFn = r.default.NamedFn),
      (n.Array = r.default.Array),
      (e.default = n);
  },
  function (t, e, a) {
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
  function (t, e, a) {
    "use strict";
    a(6);
  },
  function (t, e, a) {
    "use strict";
    var r = a(7),
      n = s(a(8)),
      i = s(a(0)),
      o = s(a(3));
    function s(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var a in t)
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return (e.default = t), e;
    }
    (0, r.combineWithMathJax)({
      _: {
        input: {
          tex: {
            physics: {
              PhysicsConfiguration: n,
              PhysicsItems: i,
              PhysicsMethods: o,
            },
          },
        },
      },
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
    var r;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = a(9),
      i = a(0);
    a(11),
      (e.PhysicsConfiguration = n.Configuration.create("physics", {
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
        items: ((r = {}), (r[i.AutoOpen.prototype.kind] = i.AutoOpen), r),
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
      (e.MmlStack = MathJax._.input.tex.StackItem.MmlStack),
      (e.BaseItem = MathJax._.input.tex.StackItem.BaseItem);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = a(12),
      n = a(3),
      i = a(17),
      o = a(18),
      s = a(4);
    new r.CommandMap(
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
          i.TexConstant.Variant.CALLIGRAPHIC,
        ],
        commutator: "Commutator",
        comm: "Commutator",
        anticommutator: ["Commutator", "\\{", "\\}"],
        acomm: ["Commutator", "\\{", "\\}"],
        poissonbracket: ["Commutator", "\\{", "\\}"],
        pb: ["Commutator", "\\{", "\\}"],
      },
      n.default
    ),
      new r.CharacterMap("Physics-vector-chars", o.default.mathchar0mi, {
        dotproduct: ["\u22c5", { mathvariant: i.TexConstant.Variant.BOLD }],
        vdot: ["\u22c5", { mathvariant: i.TexConstant.Variant.BOLD }],
        crossproduct: "\xd7",
        cross: "\xd7",
        cp: "\xd7",
        gradientnabla: ["\u2207", { mathvariant: i.TexConstant.Variant.BOLD }],
        real: ["\u211c", { mathvariant: i.TexConstant.Variant.NORMAL }],
        imaginary: ["\u2111", { mathvariant: i.TexConstant.Variant.NORMAL }],
      }),
      new r.CommandMap(
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
        n.default
      ),
      new r.CommandMap(
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
        n.default
      ),
      new r.CommandMap(
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
        n.default
      ),
      new r.CommandMap(
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
        n.default
      ),
      new r.CommandMap(
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
        n.default
      ),
      new r.CommandMap(
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
        n.default
      ),
      new r.EnvironmentMap(
        "Physics-aux-envs",
        o.default.environment,
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
        n.default
      ),
      new r.MacroMap(
        "Physics-characters",
        {
          "|": ["AutoClose", s.TEXCLASS.ORD],
          ")": "AutoClose",
          "]": "AutoClose",
        },
        n.default
      );
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
      (e.default = MathJax._.input.tex.base.BaseMethods.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.TexError.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.NodeUtil.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TexConstant = MathJax._.input.tex.TexConstants.TexConstant);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.ParseMethods.default);
  },
]);
