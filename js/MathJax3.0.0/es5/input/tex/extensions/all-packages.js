!(function (r) {
  var a = {};
  function n(t) {
    if (a[t]) return a[t].exports;
    var e = (a[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = r),
    (n.c = a),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
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
    n((n.s = 26));
})([
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (e.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (t, e, r) {
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
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.TexError.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.ParseUtil.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.NodeUtil.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TexConstant = MathJax._.input.tex.TexConstants.TexConstant);
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
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.TexParser.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.base.BaseMethods.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Symbol = MathJax._.input.tex.Symbol.Symbol),
      (e.Macro = MathJax._.input.tex.Symbol.Macro);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.ParseMethods.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MmlStack = MathJax._.input.tex.StackItem.MmlStack),
      (e.BaseItem = MathJax._.input.tex.StackItem.BaseItem);
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var p = r(3),
      m = r(4),
      l = r(5),
      f = r(7),
      h = r(2),
      o = r(9),
      i = r(14),
      u = r(8),
      g = r(6),
      v = {
        AmsEqnArray: function (t, e, r, a, n, o, i) {
          var s = t.GetBrackets("\\begin{" + e.getName() + "}"),
            c = u.default.EqnArray(t, e, r, a, n, o, i);
          return p.default.setArrayAlign(c, s);
        },
        AlignAt: function (t, e, r, a) {
          var n,
            o,
            i = e.getName(),
            s = "",
            c = [];
          if (
            (a || (o = t.GetBrackets("\\begin{" + i + "}")),
            (n = t.GetArgument("\\begin{" + i + "}")).match(/[^0-9]/))
          )
            throw new h.default(
              "PositiveIntegerArg",
              "Argument to %1 must me a positive integer",
              "\\begin{" + i + "}"
            );
          for (var l = parseInt(n, 10); 0 < l; )
            (s += "rl"), c.push("0em 0em"), l--;
          var u = c.join(" ");
          if (a) return v.EqnArray(t, e, r, a, s, u);
          var d = v.EqnArray(t, e, r, a, s, u);
          return p.default.setArrayAlign(d, o);
        },
        Multline: function (t, e, r) {
          t.Push(e), p.default.checkEqnEnv(t);
          var a = t.itemFactory.create("multline", r, t.stack);
          return (
            (a.arraydef = {
              displaystyle: !0,
              rowspacing: ".5em",
              columnwidth: "100%",
              width: t.options.multlineWidth,
              side: t.options.tagSide,
              minlabelspacing: t.options.tagIndent,
            }),
            a
          );
        },
        HandleDeclareOp: function (t, e) {
          var r = t.GetStar() ? "" : "\\nolimits\\SkipLimits",
            a = p.default.trimSpaces(t.GetArgument(e));
          "\\" === a.charAt(0) && (a = a.substr(1));
          var n = t.GetArgument(e);
          (n = n.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}")),
            t.configuration.handlers
              .retrieve(i.ExtensionMaps.NEW_COMMAND)
              .add(
                a,
                new o.Macro(a, v.Macro, ["\\mathop{\\rm " + n + "}" + r])
              );
        },
        HandleOperatorName: function (t, e) {
          var r = t.GetStar() ? "" : "\\nolimits\\SkipLimits",
            a = p.default.trimSpaces(t.GetArgument(e));
          (a = a.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}")),
            (t.string =
              "\\mathop{\\rm " + a + "}" + r + " " + t.string.slice(t.i)),
            (t.i = 0);
        },
        SkipLimits: function (t, e) {
          var r = t.GetNext(),
            a = t.i;
          "\\" === r && ++t.i && "limits" !== t.GetCS() && (t.i = a);
        },
        MultiIntegral: function (t, e, r) {
          var a = t.GetNext();
          if ("\\" === a) {
            var n = t.i;
            (a = t.GetArgument(e)),
              (t.i = n),
              "\\limits" === a &&
                (r =
                  "\\idotsint" === e
                    ? "\\!\\!\\mathop{\\,\\," + r + "}"
                    : "\\!\\!\\!\\mathop{\\,\\,\\," + r + "}");
          }
          (t.string = r + " " + t.string.slice(t.i)), (t.i = 0);
        },
        xArrow: function (t, e, r, a, n) {
          var o = { width: "+" + (a + n) + "mu", lspace: a + "mu" },
            i = t.GetBrackets(e),
            s = t.ParseArg(e),
            c = t.create(
              "token",
              "mo",
              { stretchy: !0, texClass: g.TEXCLASS.REL },
              String.fromCharCode(r)
            ),
            l = t.create("node", "munderover", [c]),
            u = t.create("node", "mpadded", [s], o);
          if (
            (m.default.setAttribute(u, "voffset", ".15em"),
            m.default.setChild(l, l.over, u),
            i)
          ) {
            var d = new f.default(i, t.stack.env, t.configuration).mml();
            (u = t.create("node", "mpadded", [d], o)),
              m.default.setAttribute(u, "voffset", "-.24em"),
              m.default.setChild(l, l.under, u);
          }
          m.default.setProperty(l, "subsupOK", !0), t.Push(l);
        },
        HandleShove: function (t, e, r) {
          var a = t.stack.Top();
          if ("multline" !== a.kind)
            throw new h.default(
              "CommandOnlyAllowedInEnv",
              "%1 only allowed in %2 environment",
              t.currentCS,
              "multline"
            );
          if (a.Size())
            throw new h.default(
              "CommandAtTheBeginingOfLine",
              "%1 must come at the beginning of the line",
              t.currentCS
            );
          a.setProperty("shove", r);
        },
        CFrac: function (t, e) {
          var r = p.default.trimSpaces(t.GetBrackets(e, "")),
            a = t.GetArgument(e),
            n = t.GetArgument(e),
            o = {
              l: l.TexConstant.Align.LEFT,
              r: l.TexConstant.Align.RIGHT,
              "": "",
            },
            i = new f.default(
              "\\strut\\textstyle{" + a + "}",
              t.stack.env,
              t.configuration
            ).mml(),
            s = new f.default(
              "\\strut\\textstyle{" + n + "}",
              t.stack.env,
              t.configuration
            ).mml(),
            c = t.create("node", "mfrac", [i, s]);
          if (null == (r = o[r]))
            throw new h.default(
              "IllegalAlign",
              "Illegal alignment specified in %1",
              t.currentCS
            );
          r && m.default.setProperties(c, { numalign: r, denomalign: r }),
            t.Push(c);
        },
        Genfrac: function (t, e, r, a, n, o) {
          null == r && (r = t.GetDelimiterArg(e)),
            null == a && (a = t.GetDelimiterArg(e)),
            null == n && (n = t.GetArgument(e)),
            null == o && (o = p.default.trimSpaces(t.GetArgument(e)));
          var i = t.ParseArg(e),
            s = t.ParseArg(e),
            c = t.create("node", "mfrac", [i, s]);
          if (
            ("" !== n && m.default.setAttribute(c, "linethickness", n),
            (r || a) &&
              (m.default.setProperty(c, "withDelims", !0),
              (c = p.default.fixedFence(t.configuration, r, c, a))),
            "" !== o)
          ) {
            var l = parseInt(o, 10),
              u = ["D", "T", "S", "SS"][l];
            if (null == u)
              throw new h.default(
                "BadMathStyleFor",
                "Bad math style for %1",
                t.currentCS
              );
            (c = t.create("node", "mstyle", [c])),
              "D" === u
                ? m.default.setProperties(c, {
                    displaystyle: !0,
                    scriptlevel: 0,
                  })
                : m.default.setProperties(c, {
                    displaystyle: !1,
                    scriptlevel: l - 1,
                  });
          }
          t.Push(c);
        },
        HandleTag: function (t, e) {
          if (!t.tags.currentTag.taggable && t.tags.env)
            throw new h.default(
              "CommandNotAllowedInEnv",
              "%1 not allowed in %2 environment",
              t.currentCS,
              t.tags.env
            );
          if (t.tags.currentTag.tag)
            throw new h.default("MultipleCommand", "Multiple %1", t.currentCS);
          var r = t.GetStar(),
            a = p.default.trimSpaces(t.GetArgument(e));
          t.tags.tag(a, r);
        },
      };
    (v.HandleNoTag = u.default.HandleNoTag),
      (v.HandleRef = u.default.HandleRef),
      (v.Macro = u.default.Macro),
      (v.Accent = u.default.Accent),
      (v.Tilde = u.default.Tilde),
      (v.Array = u.default.Array),
      (v.Spacer = u.default.Spacer),
      (v.NamedOp = u.default.NamedOp),
      (v.EqnArray = u.default.EqnArray),
      (e.default = v);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MapHandler = MathJax._.input.tex.MapHandler.MapHandler),
      (e.ExtensionMaps = MathJax._.input.tex.MapHandler.ExtensionMaps),
      (e.SubHandler = MathJax._.input.tex.MapHandler.SubHandler),
      (e.SubHandlers = MathJax._.input.tex.MapHandler.SubHandlers);
  },
  function (t, A, e) {
    "use strict";
    var r,
      s =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var a,
            n,
            o = r.call(t),
            i = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(a = o.next()).done; )
              i.push(a.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return i;
        },
      C =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            a = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && a >= t.length && (t = void 0),
                  { value: t && t[a++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(A, "__esModule", { value: !0 });
    function c(t) {
      return (G.root = t), a.outputJax.getBBox(G, a).w;
    }
    function P(t) {
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
    function k(t, e) {
      return t.childNodes[e].childNodes[0].childNodes[0];
    }
    function q(t) {
      return k(t, 0);
    }
    function O(t, e) {
      return t.childNodes["up" === e ? 0 : 1].childNodes[0].childNodes[0]
        .childNodes[0];
    }
    function T(t) {
      for (; t && !u.default.isType(t, "mtd"); ) t = t.parent;
      return t;
    }
    function I(t) {
      for (; t && null == A.getProperty(t, "inference"); ) t = t.parent;
      return t;
    }
    function E(t, e, r) {
      void 0 === r && (r = !1);
      var a = 0;
      if (t === e) return a;
      if (t !== e.parent) {
        var n = t.childNodes,
          o = r ? n.length - 1 : 0;
        u.default.isType(n[o], "mspace") && (a += c(n[o])), (t = e.parent);
      }
      if (t === e) return a;
      var i = t.childNodes,
        s = r ? i.length - 1 : 0;
      return i[s] !== e && (a += c(i[s])), a;
    }
    function N(t, e) {
      void 0 === e && (e = !1);
      var r = P(t),
        a = O(r, A.getProperty(r, "inferenceRule"));
      return E(t, r, e) + (c(r) - c(a)) / 2;
    }
    function B(t, e, r, a) {
      if (
        (void 0 === a && (a = !1),
        A.getProperty(e, "inferenceRule") || A.getProperty(e, "labelledRule"))
      ) {
        var n = t.nodeFactory.create("node", "mrow");
        e.parent.replaceChild(n, e), n.setChildren([e]), p(e, n), (e = n);
      }
      var o = a ? e.childNodes.length - 1 : 0,
        i = e.childNodes[o];
      u.default.isType(i, "mspace")
        ? u.default.setAttribute(
            i,
            "width",
            d.default.Em(
              d.default.dimen2em(u.default.getAttribute(i, "width")) + r
            )
          )
        : ((i = t.nodeFactory.create("node", "mspace", [], {
            width: d.default.Em(r),
          })),
          a ? e.appendChild(i) : (i.parent = e).childNodes.unshift(i));
    }
    function l(t, e, r, a, n) {
      var o = t.nodeFactory.create("node", "mspace", [], {
        width: d.default.Em(n),
      });
      if ("left" === a) {
        var i = e.childNodes[r].childNodes[0];
        (o.parent = i).childNodes.unshift(o);
      } else e.childNodes[r].appendChild(o);
      A.setProperty(e.parent, "sequentAdjust_" + a, n);
    }
    var u = e(4),
      d = e(3),
      a = null,
      G = null,
      p = function (r, a) {
        ["inference", "proof", "maxAdjust", "labelledRule"].forEach(function (
          t
        ) {
          var e = A.getProperty(r, t);
          null != e && (A.setProperty(a, t, e), A.removeProperty(r, t));
        });
      },
      F = function (t, e) {
        for (var r = e.pop(); e.length; ) {
          var a = e.pop(),
            n = s(m(r, a), 2),
            o = n[0],
            i = n[1];
          A.getProperty(r.parent, "axiom") &&
            (l(t, o < 0 ? r : a, 0, "left", Math.abs(o)),
            l(t, i < 0 ? r : a, 2, "right", Math.abs(i))),
            (r = a);
        }
      },
      m = function (t, e) {
        var r = c(t.childNodes[2]),
          a = c(e.childNodes[2]);
        return [c(t.childNodes[0]) - c(e.childNodes[0]), r - a];
      };
    A.balanceRules = function (t) {
      var e, r;
      G = new t.document.options.MathItem("", null, t.math.display);
      var a = t.data;
      !(function (t) {
        var e = t.nodeLists.sequent;
        if (e)
          for (var r = e.length - 1, a = void 0; (a = e[r]); r--)
            if (A.getProperty(a, "sequentProcessed"))
              A.removeProperty(a, "sequentProcessed");
            else {
              var n = [],
                o = I(a);
              if (1 === A.getProperty(o, "inference")) {
                for (n.push(a); 1 === A.getProperty(o, "inference"); ) {
                  o = P(o);
                  var i = q(S(o, A.getProperty(o, "inferenceRule"))),
                    s = A.getProperty(i, "inferenceRule")
                      ? O(i, A.getProperty(i, "inferenceRule"))
                      : i;
                  A.getProperty(s, "sequent") &&
                    ((a = s.childNodes[0]),
                    n.push(a),
                    A.setProperty(a, "sequentProcessed", !0)),
                    (o = i);
                }
                F(t, n);
              }
            }
      })(a);
      var n,
        o,
        i = a.nodeLists.inference || [];
      try {
        for (var s = C(i), c = s.next(); !c.done; c = s.next()) {
          var l = c.value,
            u = A.getProperty(l, "proof"),
            d = (A.getProperty(l, "labelledRule"), P(l)),
            p = S(d, A.getProperty(d, "inferenceRule")),
            m = q(p);
          if (A.getProperty(m, "inference")) {
            var f = N(m);
            if (f) {
              B(a, m, -f);
              var h = E(l, d, !1);
              B(a, l, f - h);
            }
          }
          var g = k((o = p), o.childNodes.length - 1);
          if (null != A.getProperty(g, "inference")) {
            var v = N(g, !0);
            B(a, g, -v, !0);
            var x = E(l, d, !0),
              y = A.getProperty(l, "maxAdjust");
            null != y && (v = Math.max(v, y));
            var b = void 0;
            if (!u && (b = T(l))) {
              var _ = (n = b).parent.childNodes[
                n.parent.childNodes.indexOf(n) + 1
              ];
              if (_) {
                var M = a.nodeFactory.create("node", "mspace", [], {
                  width: v - x + "em",
                });
                _.appendChild(M), l.removeProperty("maxAdjust");
              } else {
                var w = I(b);
                w &&
                  ((v = A.getProperty(w, "maxAdjust")
                    ? Math.max(A.getProperty(w, "maxAdjust"), v)
                    : v),
                  A.setProperty(w, "maxAdjust", v));
              }
            } else B(a, A.getProperty(l, "proof") ? l : l.parent, v - x, !0);
          }
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
    };
    var n = "bspr_",
      o = (((r = {}).bspr_maxAdjust = !0), r);
    (A.setProperty = function (t, e, r) {
      u.default.setProperty(t, n + e, r);
    }),
      (A.getProperty = function (t, e) {
        return u.default.getProperty(t, n + e);
      }),
      (A.removeProperty = function (t, e) {
        t.removeProperty(n + e);
      }),
      (A.makeBsprAttributes = function (t) {
        t.data.root.walkTree(function (e, t) {
          var r = [];
          e.getPropertyNames().forEach(function (t) {
            !o[t] &&
              t.match(RegExp("^" + n)) &&
              r.push(t + ":" + e.getProperty(t));
          }),
            r.length && u.default.setAttribute(e, "semantics", r.join(";"));
        });
      }),
      (A.saveDocument = function (t) {
        if (!("getBBox" in (a = t.document).outputJax))
          throw Error(
            "The bussproofs extension requires an output jax with a getBBox() method"
          );
      }),
      (A.clearDocument = function (t) {
        a = null;
      });
  },
  function (t, f, h) {
    "use strict";
    (function (t) {
      var c =
          (this && this.__values) ||
          function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              r = e && t[e],
              a = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length)
              return {
                next: function () {
                  return (
                    t && a >= t.length && (t = void 0),
                    { value: t && t[a++], done: !t }
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
            var a,
              n,
              o = r.call(t),
              i = [];
            try {
              for (; (void 0 === e || 0 < e--) && !(a = o.next()).done; )
                i.push(a.value);
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                a && !a.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return i;
          },
        n =
          (this && this.__spread) ||
          function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(r(arguments[e]));
            return t;
          };
      Object.defineProperty(f, "__esModule", { value: !0 });
      var s = h(0),
        e = h(1),
        o = h(2),
        i = h(25),
        l = h(73),
        u = h(74),
        a = h(12),
        d = (t.MathJax && t.MathJax.config) || {};
      function p(t, e) {
        var r,
          a = t.parseOptions.options.require,
          n = e.substr(a.prefix.length);
        if (a.required.indexOf(n) < 0) {
          a.required.push(n),
            (function (t, e) {
              var r, a;
              void 0 === e && (e = []);
              var n = t.parseOptions.options.require.prefix;
              try {
                for (var o = c(e), i = o.next(); !i.done; i = o.next()) {
                  var s = i.value;
                  s.substr(0, n.length) === n && p(t, s);
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  i && !i.done && (a = o.return) && a.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
            })(t, l.CONFIG.dependencies[e]);
          var o = s.ConfigurationHandler.get(n);
          if (o) {
            var i = d[e] || {};
            o.options &&
              1 === Object.keys(o.options).length &&
              o.options[n] &&
              (((r = {})[n] = i), (i = r)),
              t.configuration.register(o, t, i);
          }
        }
      }
      function m(t, e) {
        var r = t.options.require,
          a = r.allow,
          n = ("[" === e.substr(0, 1) ? "" : r.prefix) + e;
        if (
          !(a.hasOwnProperty(n)
            ? a[n]
            : a.hasOwnProperty(e)
            ? a[e]
            : r.defaultAllow)
        )
          throw new o.default(
            "BadRequire",
            'Extension "%1" is now allowed to be loaded',
            n
          );
        i.Package.packages.has(n)
          ? p(r.jax, n)
          : u.mathjax.retryAfter(l.Loader.load(n));
      }
      (f.RequireLoad = m),
        (f.RequireMethods = {
          Require: function (t, e) {
            var r = t.GetArgument(e);
            if (r.match(/[^_a-zA-Z0-9]/) || "" === r)
              throw new o.default(
                "BadPackageName",
                "Argument for %1 is not a valid package name",
                e
              );
            m(t, r);
          },
        }),
        (f.options = {
          require: {
            allow: a.expandable({ base: !1, "all-packages": !1 }),
            defaultAllow: !0,
            prefix: "tex",
          },
        }),
        new e.CommandMap("require", { require: "Require" }, f.RequireMethods),
        (f.RequireConfiguration = s.Configuration.create("require", {
          handler: { macro: ["require"] },
          config: function (t, e) {
            var r = e.parseOptions.options.require;
            (r.jax = e), (r.required = n(e.options.packages));
            var a = r.prefix;
            if (a.match(/[^_a-zA-Z0-9]/))
              throw Error("Illegal characters used in \\require prefix");
            l.CONFIG.paths[a] ||
              (l.CONFIG.paths[a] = "[mathjax]/input/tex/extensions"),
              (r.prefix = "[" + a + "]/");
          },
          options: f.options,
        }));
    }.call(this, h(72)));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      r(18),
      r(29),
      r(30),
      r(35),
      r(38),
      r(39),
      r(40),
      r(44),
      r(49),
      r(50),
      r(54),
      r(55),
      r(20),
      r(56),
      r(59),
      r(61),
      r(23),
      r(63),
      r(64),
      r(65),
      r(69),
      r(71),
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
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Other = MathJax._.input.tex.base.BaseConfiguration.Other),
      (e.BaseTags = MathJax._.input.tex.base.BaseConfiguration.BaseTags),
      (e.BaseConfiguration =
        MathJax._.input.tex.base.BaseConfiguration.BaseConfiguration);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory);
  },
  function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = e(0),
      a = e(1),
      s = e(3);
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
          a = t.GetBrackets(e, ""),
          n = t.ParseArg(e),
          o = s.default.keyvalOptions(a, i.ENCLOSE_OPTIONS);
        (o.notation = r), t.Push(t.create("node", "menclose", [n], o));
      }),
      new a.CommandMap("enclose", { enclose: "Enclose" }, i.EncloseMethods),
      (i.EncloseConfiguration = r.Configuration.create("enclose", {
        handler: { macro: ["enclose"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l = r(2),
      u = r(1),
      a = r(8),
      d = r(3),
      p = r(22),
      m = {
        NewCommand: function (t, e) {
          var r = d.default.trimSpaces(t.GetArgument(e)),
            a = t.GetBrackets(e),
            n = t.GetBrackets(e),
            o = t.GetArgument(e);
          if (
            ("\\" === r.charAt(0) && (r = r.substr(1)),
            !r.match(/^(.|[a-z]+)$/i))
          )
            throw new l.default(
              "IllegalControlSequenceName",
              "Illegal control sequence name for %1",
              e
            );
          if (a && !(a = d.default.trimSpaces(a)).match(/^[0-9]+$/))
            throw new l.default(
              "IllegalParamNumber",
              "Illegal number of parameters specified in %1",
              e
            );
          p.default.addMacro(t, r, m.Macro, [o, a, n]);
        },
        NewEnvironment: function (t, e) {
          var r = d.default.trimSpaces(t.GetArgument(e)),
            a = t.GetBrackets(e),
            n = t.GetBrackets(e),
            o = t.GetArgument(e),
            i = t.GetArgument(e);
          if (a && !(a = d.default.trimSpaces(a)).match(/^[0-9]+$/))
            throw new l.default(
              "IllegalParamNumber",
              "Illegal number of parameters specified in %1",
              e
            );
          p.default.addEnvironment(t, r, m.BeginEnv, [!0, o, i, a, n]);
        },
        MacroDef: function (t, e) {
          var r = p.default.GetCSname(t, e),
            a = p.default.GetTemplate(t, e, "\\" + r),
            n = t.GetArgument(e);
          a instanceof Array
            ? p.default.addMacro(t, r, m.MacroWithTemplate, [n].concat(a))
            : p.default.addMacro(t, r, m.Macro, [n, a]);
        },
        Let: function (t, e) {
          var r = p.default.GetCSname(t, e),
            a = t.GetNext();
          "=" === a && (t.i++, (a = t.GetNext()));
          var n = t.configuration.handlers;
          if ("\\" !== a) {
            t.i++;
            var o = n.get("delimiter").lookup(a);
            o
              ? p.default.addDelimiter(t, "\\" + r, o.char, o.attributes)
              : p.default.addMacro(t, r, m.Macro, [a]);
          } else {
            e = p.default.GetCSname(t, e);
            var i = n.get("delimiter").lookup("\\" + e);
            if (i)
              return void p.default.addDelimiter(
                t,
                "\\" + r,
                i.char,
                i.attributes
              );
            var s = n.get("macro").applicable(e);
            if (!s) return;
            if (s instanceof u.MacroMap) {
              var c = s.lookup(e);
              return void p.default.addMacro(t, r, c.func, c.args, c.symbol);
            }
            i = s.lookup(e);
            var l = p.default.disassembleSymbol(r, i);
            p.default.addMacro(
              t,
              r,
              function (t, e) {
                for (var r = [], a = 2; a < arguments.length; a++)
                  r[a - 2] = arguments[a];
                var n = p.default.assembleSymbol(r);
                return s.parser(t, n);
              },
              l
            );
          }
        },
        MacroWithTemplate: function (t, e, r, a) {
          for (var n = [], o = 4; o < arguments.length; o++)
            n[o - 4] = arguments[o];
          var i = parseInt(a, 10);
          if (i) {
            var s = [];
            if ((t.GetNext(), n[0] && !p.default.MatchParam(t, n[0])))
              throw new l.default(
                "MismatchUseDef",
                "Use of %1 doesn't match its definition",
                e
              );
            for (var c = 0; c < i; c++)
              s.push(p.default.GetParameter(t, e, n[c + 1]));
            r = d.default.substituteArgs(t, s, r);
          }
          if (
            ((t.string = d.default.addArgs(t, r, t.string.slice(t.i))),
            (t.i = 0),
            ++t.macroCount > t.configuration.options.maxMacros)
          )
            throw new l.default(
              "MaxMacroSub1",
              "MathJax maximum macro substitution count exceeded; is here a recursive macro call?"
            );
        },
        BeginEnv: function (t, e, r, a, n, o) {
          if (e.getProperty("end") && t.stack.env.closing === e.getName()) {
            delete t.stack.env.closing;
            var i = t.string.slice(t.i);
            return (
              (t.string = a),
              (t.i = 0),
              t.Parse(),
              (t.string = i),
              (t.i = 0),
              t.itemFactory.create("end").setProperty("name", e.getName())
            );
          }
          if (n) {
            var s = [];
            if (null != o) {
              var c = t.GetBrackets("\\begin{" + e.getName() + "}");
              s.push(null == c ? o : c);
            }
            for (var l = s.length; l < n; l++)
              s.push(t.GetArgument("\\begin{" + e.getName() + "}"));
            (r = d.default.substituteArgs(t, s, r)),
              (a = d.default.substituteArgs(t, [], a));
          }
          return (
            (t.string = d.default.addArgs(t, r, t.string.slice(t.i))),
            (t.i = 0),
            t.itemFactory.create("beginEnv").setProperty("name", e.getName())
          );
        },
      };
    (m.Macro = a.default.Macro), (e.default = m);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a,
      n,
      o = r(3),
      c = r(2),
      i = r(9),
      s = r(14);
    function l(t, e) {
      return t.string.substr(t.i, e.length) !== e
        ? 0
        : e.match(/\\[a-z]+$/i) &&
          t.string.charAt(t.i + e.length).match(/[a-z]/i)
        ? 0
        : ((t.i += e.length), 1);
    }
    ((n = a = a || {}).disassembleSymbol = function (t, e) {
      var r = [t, e.char];
      if (e.attributes)
        for (var a in e.attributes) r.push(a), r.push(e.attributes[a]);
      return r;
    }),
      (n.assembleSymbol = function (t) {
        for (var e = t[0], r = t[1], a = {}, n = 2; n < t.length; n += 2)
          a[t[n]] = t[n + 1];
        return new i.Symbol(e, r, a);
      }),
      (n.GetCSname = function (t, e) {
        if ("\\" !== t.GetNext())
          throw new c.default(
            "MissingCS",
            "%1 must be followed by a control sequence",
            e
          );
        return o.default.trimSpaces(t.GetArgument(e)).substr(1);
      }),
      (n.GetTemplate = function (t, e, r) {
        for (
          var a = t.GetNext(), n = [], o = 0, i = t.i;
          t.i < t.string.length;

        ) {
          if ("#" === (a = t.GetNext())) {
            if (
              (i !== t.i && (n[o] = t.string.substr(i, t.i - i)),
              !(a = t.string.charAt(++t.i)).match(/^[1-9]$/))
            )
              throw new c.default(
                "CantUseHash2",
                "Illegal use of # in template for %1",
                r
              );
            if (parseInt(a) !== ++o)
              throw new c.default(
                "SequentialParam",
                "Parameters for %1 must be numbered sequentially",
                r
              );
            i = t.i + 1;
          } else if ("{" === a)
            return (
              i !== t.i && (n[o] = t.string.substr(i, t.i - i)),
              0 < n.length ? [o.toString()].concat(n) : o
            );
          t.i++;
        }
        throw new c.default(
          "MissingReplacementString",
          "Missing replacement string for definition of %1",
          e
        );
      }),
      (n.GetParameter = function (t, e, r) {
        if (null == r) return t.GetArgument(e);
        for (var a = t.i, n = 0, o = 0; t.i < t.string.length; ) {
          var i = t.string.charAt(t.i);
          if ("{" === i) t.i === a && (o = 1), t.GetArgument(e), (n = t.i - a);
          else {
            if (l(t, r)) return o && (a++, (n -= 2)), t.string.substr(a, n);
            if ("\\" === i) {
              t.i++, n++, (o = 0);
              var s = t.string.substr(t.i).match(/[a-z]+|./i);
              s && ((t.i += s[0].length), (n = t.i - a));
            } else t.i++, n++, (o = 0);
          }
        }
        throw new c.default("RunawayArgument", "Runaway argument for %1?", e);
      }),
      (n.MatchParam = l),
      (n.addDelimiter = function (t, e, r, a) {
        t.configuration.handlers
          .retrieve(s.ExtensionMaps.NEW_DELIMITER)
          .add(e, new i.Symbol(e, r, a));
      }),
      (n.addMacro = function (t, e, r, a, n) {
        void 0 === n && (n = ""),
          t.configuration.handlers
            .retrieve(s.ExtensionMaps.NEW_COMMAND)
            .add(e, new i.Macro(n || e, r, a));
      }),
      (n.addEnvironment = function (t, e, r, a) {
        t.configuration.handlers
          .retrieve(s.ExtensionMaps.NEW_ENVIRONMENT)
          .add(e, new i.Macro(e, r, a));
      }),
      (e.default = a);
  },
  function (t, e, r) {
    "use strict";
    var a;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = r(57),
      i = r(14);
    r(58);
    e.NewcommandConfiguration = n.Configuration.create("newcommand", {
      handler: { macro: ["Newcommand-macros"] },
      items: ((a = {}), (a[o.BeginEnvItem.prototype.kind] = o.BeginEnvItem), a),
      options: { maxMacros: 1e3 },
      init: function (t) {
        t.handler.macro.indexOf(i.ExtensionMaps.NEW_COMMAND) < 0 &&
          t.append(n.Configuration.extension());
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var a,
      n =
        (this && this.__extends) ||
        ((a = function (t, e) {
          return (a =
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
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        }),
      C =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var a,
            n,
            o = r.call(t),
            i = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(a = o.next()).done; )
              i.push(a.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return i;
        },
      P =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            a = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && a >= t.length && (t = void 0),
                  { value: t && t[a++], done: !t }
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
      S = r(9),
      k = r(16),
      x = r(25),
      c = r(12),
      l =
        ((o = s.CommandMap),
        n(u, o),
        (u.prototype.remove = function (t) {
          this.map.delete(t);
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    function q(t, e, r, a) {
      var n, o, i, s;
      if (x.Package.packages.has(t.options.require.prefix + r)) {
        var c = t.options.autoload[r],
          l = C(2 === c.length && Array.isArray(c[0]) ? c : [c, []], 2),
          u = l[0],
          d = l[1];
        try {
          for (var p = P(u), m = p.next(); !m.done; m = p.next()) {
            var f = m.value;
            O.remove(f);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            m && !m.done && (o = p.return) && o.call(p);
          } finally {
            if (n) throw n.error;
          }
        }
        try {
          for (var h = P(d), g = h.next(); !g.done; g = h.next()) {
            var v = g.value;
            T.remove(v);
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            g && !g.done && (s = h.return) && s.call(h);
          } finally {
            if (i) throw i.error;
          }
        }
        t.i -= e.length + (a ? 0 : 7);
      }
      k.RequireLoad(t, r);
    }
    var O = new (e.AutoloadCommandMap = l)("autoload-macros", {}, {}),
      T = new l("autoload-environments", {}, {});
    e.AutoloadConfiguration = i.Configuration.create("autoload", {
      handler: {
        macro: ["autoload-macros"],
        environment: ["autoload-environments"],
      },
      options: {
        autoload: c.expandable({
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
          a,
          n,
          o,
          i,
          s,
          c = e.parseOptions,
          l = c.handlers.get("macro"),
          u = c.handlers.get("environment"),
          d = c.options.autoload;
        try {
          for (var p = P(Object.keys(d)), m = p.next(); !m.done; m = p.next()) {
            var f = m.value,
              h = d[f],
              g = C(2 === h.length && Array.isArray(h[0]) ? h : [h, []], 2),
              v = g[0],
              x = g[1];
            try {
              for (
                var y = ((n = void 0), P(v)), b = y.next();
                !b.done;
                b = y.next()
              ) {
                var _ = b.value;
                (l.lookup(_) && "color" !== _) ||
                  O.add(_, new S.Macro(_, q, [f, !0]));
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                b && !b.done && (o = y.return) && o.call(y);
              } finally {
                if (n) throw n.error;
              }
            }
            try {
              for (
                var M = ((i = void 0), P(x)), w = M.next();
                !w.done;
                w = M.next()
              ) {
                var A = w.value;
                u.lookup(A) || T.add(A, new S.Macro(A, q, [f, !1]));
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                w && !w.done && (s = M.return) && s.call(M);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            m && !m.done && (a = p.return) && a.call(p);
          } finally {
            if (r) throw r.error;
          }
        }
        c.options.require.jax || k.RequireConfiguration.config(t, e);
      },
      configPriority: 10,
      init: function (t) {
        t.options.require ||
          c.defaultOptions(t.options, k.RequireConfiguration.options);
      },
      priority: 10,
    });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PackageError = MathJax._.components.package.PackageError),
      (e.Package = MathJax._.components.package.Package);
  },
  function (t, e, r) {
    "use strict";
    r(27);
    var a = r(17);
    r(24), r(16);
    var n = r(12);
    if (
      (MathJax.loader &&
        MathJax.loader.preLoad("[tex]/autoload", "[tex]/require"),
      MathJax.startup)
    ) {
      MathJax.config.tex || (MathJax.config.tex = {});
      var o = MathJax.config.tex.packages;
      (MathJax.config.tex.packages = ["autoload", "require"].concat(
        (function (t) {
          if (Array.isArray(t)) {
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r;
          }
          return Array.from(t);
        })(a.AllPackages)
      )),
        o && (0, n.insert)(MathJax.config.tex, { packages: o });
    }
  },
  function (t, e, r) {
    "use strict";
    var a = r(28),
      n = s(r(17)),
      o = s(r(24)),
      i = s(r(16));
    function s(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return (e.default = t), e;
    }
    (0, a.combineWithMathJax)({
      _: {
        input: {
          tex: {
            AllPackages: n,
            autoload: { AutoloadConfiguration: o },
            require: { RequireConfiguration: i },
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      n = r(7),
      o = r(1),
      i = r(8);
    (e.ActionMethods = {}),
      (e.ActionMethods.Macro = i.default.Macro),
      (e.ActionMethods.Toggle = function (t, e) {
        for (var r, a = []; "\\endtoggle" !== (r = t.GetArgument(e)); )
          a.push(new n.default(r, t.stack.env, t.configuration).mml());
        t.Push(t.create("node", "maction", a, { actiontype: "toggle" }));
      }),
      (e.ActionMethods.Mathtip = function (t, e) {
        var r = t.ParseArg(e),
          a = t.ParseArg(e);
        t.Push(t.create("node", "maction", [r, a], { actiontype: "tooltip" }));
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
      (e.ActionConfiguration = a.Configuration.create("action", {
        handler: { macro: ["action-macros"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    var a,
      n,
      o =
        (this && this.__extends) ||
        ((a = function (t, e) {
          return (a =
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
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = r(0),
      s = r(31),
      c = r(33);
    r(34);
    var l,
      u = ((l = c.AbstractTags), o(d, l), d);
    function d() {
      return (null !== l && l.apply(this, arguments)) || this;
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
      items: ((n = {}), (n[s.MultlineItem.prototype.kind] = s.MultlineItem), n),
      tags: { ams: u },
      init: function (t) {
        t.append(i.Configuration.extension());
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var a,
      n =
        (this && this.__extends) ||
        ((a = function (t, e) {
          return (a =
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
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(32),
      s = r(3),
      c = r(4),
      l = r(2),
      u = r(5),
      d =
        ((o = i.ArrayItem),
        n(p, o),
        Object.defineProperty(p.prototype, "kind", {
          get: function () {
            return "multline";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (p.prototype.EndEntry = function () {
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
        (p.prototype.EndRow = function () {
          if (1 !== this.row.length)
            throw new l.default(
              "MultlineRowsOneCol",
              "The rows within the %1 environment must have exactly one column",
              "multline"
            );
          var t = this.create("node", "mtr", this.row);
          this.table.push(t), (this.row = []);
        }),
        (p.prototype.EndTable = function () {
          if ((o.prototype.EndTable.call(this), this.table.length)) {
            var t = this.table.length - 1,
              e = -1;
            c.default.getAttribute(
              c.default.getChildren(this.table[0])[0],
              "columnalign"
            ) ||
              c.default.setAttribute(
                c.default.getChildren(this.table[0])[0],
                "columnalign",
                u.TexConstant.Align.LEFT
              ),
              c.default.getAttribute(
                c.default.getChildren(this.table[t])[0],
                "columnalign"
              ) ||
                c.default.setAttribute(
                  c.default.getChildren(this.table[t])[0],
                  "columnalign",
                  u.TexConstant.Align.RIGHT
                );
            var r = this.factory.configuration.tags.getTag();
            if (r) {
              e =
                this.arraydef.side === u.TexConstant.Align.LEFT
                  ? 0
                  : this.table.length - 1;
              var a = this.table[e],
                n = this.create(
                  "node",
                  "mlabeledtr",
                  [r].concat(c.default.getChildren(a))
                );
              c.default.copyAttributes(a, n), (this.table[e] = n);
            }
          }
          this.factory.configuration.tags.end();
        }),
        p);
    function p(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      var a = o.call(this, t) || this;
      return a.factory.configuration.tags.start("multline", !0, e[0]), a;
    }
    e.MultlineItem = d;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.StartItem = MathJax._.input.tex.base.BaseItems.StartItem),
      (e.StopItem = MathJax._.input.tex.base.BaseItems.StopItem),
      (e.OpenItem = MathJax._.input.tex.base.BaseItems.OpenItem),
      (e.CloseItem = MathJax._.input.tex.base.BaseItems.CloseItem),
      (e.PrimeItem = MathJax._.input.tex.base.BaseItems.PrimeItem),
      (e.SubsupItem = MathJax._.input.tex.base.BaseItems.SubsupItem),
      (e.OverItem = MathJax._.input.tex.base.BaseItems.OverItem),
      (e.LeftItem = MathJax._.input.tex.base.BaseItems.LeftItem),
      (e.RightItem = MathJax._.input.tex.base.BaseItems.RightItem),
      (e.BeginItem = MathJax._.input.tex.base.BaseItems.BeginItem),
      (e.EndItem = MathJax._.input.tex.base.BaseItems.EndItem),
      (e.StyleItem = MathJax._.input.tex.base.BaseItems.StyleItem),
      (e.PositionItem = MathJax._.input.tex.base.BaseItems.PositionItem),
      (e.CellItem = MathJax._.input.tex.base.BaseItems.CellItem),
      (e.MmlItem = MathJax._.input.tex.base.BaseItems.MmlItem),
      (e.FnItem = MathJax._.input.tex.base.BaseItems.FnItem),
      (e.NotItem = MathJax._.input.tex.base.BaseItems.NotItem),
      (e.DotsItem = MathJax._.input.tex.base.BaseItems.DotsItem),
      (e.ArrayItem = MathJax._.input.tex.base.BaseItems.ArrayItem),
      (e.EqnArrayItem = MathJax._.input.tex.base.BaseItems.EqnArrayItem),
      (e.EquationItem = MathJax._.input.tex.base.BaseItems.EquationItem);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Label = MathJax._.input.tex.Tags.Label),
      (e.TagInfo = MathJax._.input.tex.Tags.TagInfo),
      (e.AbstractTags = MathJax._.input.tex.Tags.AbstractTags),
      (e.NoTags = MathJax._.input.tex.Tags.NoTags),
      (e.AllTags = MathJax._.input.tex.Tags.AllTags),
      (e.TagsFactory = MathJax._.input.tex.Tags.TagsFactory);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    function a(t) {
      for (var e = [], r = 0, a = t.length; r < a; r++)
        e[r] = c.default.Em(t[r]);
      return e.join(" ");
    }
    var n = r(13),
      o = r(1),
      i = r(5),
      s = r(10),
      c = r(3),
      l = r(6);
    new o.CharacterMap("AMSmath-mathchar0mo", s.default.mathchar0mo, {
      iiiint: ["\u2a0c", { texClass: l.TEXCLASS.OP }],
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
        n.default
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
            a([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
          ],
          "align*": [
            "EqnArray",
            null,
            !1,
            !0,
            "rlrlrlrlrlrl",
            a([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
          ],
          multline: ["Multline", null, !0],
          "multline*": ["Multline", null, !1],
          split: ["EqnArray", null, !1, !1, "rl", a([0])],
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
            a([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
            ".5em",
            "D",
          ],
          gathered: ["AmsEqnArray", null, null, null, "c", null, ".5em", "D"],
          subarray: ["Array", null, null, null, null, a([0]), "0.1em", "S", 1],
          smallmatrix: [
            "Array",
            null,
            null,
            null,
            "c",
            a([1 / 3]),
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
        n.default
      ),
      new o.DelimiterMap("AMSmath-delimiter", s.default.delimiter, {
        "\\lvert": ["|", { texClass: l.TEXCLASS.OPEN }],
        "\\rvert": ["|", { texClass: l.TEXCLASS.CLOSE }],
        "\\lVert": ["\u2016", { texClass: l.TEXCLASS.OPEN }],
        "\\rVert": ["\u2016", { texClass: l.TEXCLASS.CLOSE }],
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
        n.default
      );
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0);
    r(36),
      (e.AmsCdConfiguration = a.Configuration.create("amsCd", {
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
    var a = r(1),
      n = r(10),
      o = r(37);
    new a.EnvironmentMap(
      "amsCd_environment",
      n.default.environment,
      { CD: "CD" },
      o.default
    ),
      new a.CommandMap(
        "amsCd_macros",
        {
          minCDarrowwidth: "minCDarrowwidth",
          minCDarrowheight: "minCDarrowheight",
        },
        o.default
      ),
      new a.MacroMap("amsCd_special", { "@": "arrow" }, o.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var x = r(7),
      y = r(18),
      b = r(6),
      _ = r(4),
      M = {
        CD: function (t, e) {
          t.Push(e);
          var r = t.itemFactory.create("array"),
            a = t.configuration.options.amsCd;
          return (
            r.setProperties({
              minw: t.stack.env.CD_minw || a.harrowsize,
              minh: t.stack.env.CD_minh || a.varrowsize,
            }),
            (r.arraydef = {
              columnalign: "center",
              columnspacing: a.colspace,
              rowspacing: a.rowspace,
              displaystyle: !0,
            }),
            r
          );
        },
        arrow: function (t, e) {
          var r = t.string.charAt(t.i);
          if (!r.match(/[><VA.|=]/)) return y.Other(t, e);
          t.i++;
          var a = t.stack.Top();
          (a.isKind("array") && !a.Size()) ||
            (M.cell(t, e), (a = t.stack.Top()));
          for (
            var n,
              o = a,
              i = o.table.length % 2 == 1,
              s = (o.row.length + (i ? 0 : 1)) % 2;
            s;

          )
            M.cell(t, e), s--;
          var c = { minsize: o.getProperty("minw"), stretchy: !0 },
            l = {
              minsize: o.getProperty("minh"),
              stretchy: !0,
              symmetric: !0,
              lspace: 0,
              rspace: 0,
            };
          if ("." === r);
          else if ("|" === r) n = t.create("token", "mo", l, "\u2225");
          else if ("=" === r) n = t.create("token", "mo", c, "=");
          else {
            var u = { ">": "\u2192", "<": "\u2190", V: "\u2193", A: "\u2191" }[
                r
              ],
              d = t.GetUpTo(e + r, r),
              p = t.GetUpTo(e + r, r);
            if (">" === r || "<" === r) {
              if (
                ((n = t.create("token", "mo", c, u)),
                (d = d || "\\kern " + o.getProperty("minw")) || p)
              ) {
                var m = { width: "+11mu", lspace: "6mu" };
                if (((n = t.create("node", "munderover", [n])), d)) {
                  var f = new x.default(d, t.stack.env, t.configuration).mml(),
                    h = t.create("node", "mpadded", [f], m);
                  _.default.setAttribute(h, "voffset", ".1em"),
                    _.default.setChild(n, n.over, h);
                }
                if (p) {
                  var g = new x.default(p, t.stack.env, t.configuration).mml();
                  _.default.setChild(
                    n,
                    n.under,
                    t.create("node", "mpadded", [g], m)
                  );
                }
                t.configuration.options.amsCd.hideHorizontalLabels &&
                  (n = t.create("node", "mpadded", n, {
                    depth: 0,
                    height: ".67em",
                  }));
              }
            } else {
              var v = t.create("token", "mo", l, u);
              (n = v),
                (d || p) &&
                  ((n = t.create("node", "mrow")),
                  d &&
                    _.default.appendChildren(n, [
                      new x.default(
                        "\\scriptstyle\\llap{" + d + "}",
                        t.stack.env,
                        t.configuration
                      ).mml(),
                    ]),
                  (v.texClass = b.TEXCLASS.ORD),
                  _.default.appendChildren(n, [v]),
                  p &&
                    _.default.appendChildren(n, [
                      new x.default(
                        "\\scriptstyle\\rlap{" + p + "}",
                        t.stack.env,
                        t.configuration
                      ).mml(),
                    ]));
            }
          }
          n && t.Push(n), M.cell(t, e);
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
    e.default = M;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      n = r(1),
      m = r(2);
    (e.BboxMethods = {}),
      (e.BboxMethods.BBox = function (t, e) {
        for (
          var r,
            a,
            n,
            o = t.GetBrackets(e, ""),
            i = t.ParseArg(e),
            s = o.split(/,/),
            c = 0,
            l = s.length;
          c < l;
          c++
        ) {
          var u = s[c].trim(),
            d = u.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);
          if (d) {
            if (r)
              throw new m.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Padding",
                e
              );
            var p = h(d[1] + d[3]);
            p &&
              (r = {
                height: "+" + p,
                depth: "+" + p,
                lspace: p,
                width: "+" + 2 * parseInt(d[1], 10) + d[3],
              });
          } else if (u.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)) {
            if (a)
              throw new m.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Background",
                e
              );
            a = u;
          } else if (u.match(/^[-a-z]+:/i)) {
            if (n)
              throw new m.default(
                "MultipleBBoxProperty",
                "%1 specified twice in %2",
                "Style",
                e
              );
            n = f(u);
          } else if ("" !== u)
            throw new m.default(
              "InvalidBBoxProperty",
              '"%1" doesn\'t look like a color, a padding dimension, or a style',
              u
            );
        }
        r && (i = t.create("node", "mpadded", [i], r)),
          (a || n) &&
            ((r = {}),
            a && Object.assign(r, { mathbackground: a }),
            n && Object.assign(r, { style: n }),
            (i = t.create("node", "mstyle", [i], r))),
          t.Push(i);
      });
    var f = function (t) {
        return t;
      },
      h = function (t) {
        return t;
      };
    new n.CommandMap("bbox", { bbox: "BBox" }, e.BboxMethods),
      (e.BboxConfiguration = a.Configuration.create("bbox", {
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
          a = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && a >= t.length && (t = void 0),
                { value: t && t[a++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      c = r(4),
      l = r(5),
      n = r(1),
      o = r(19),
      u = {};
    function i(t, e, r, a) {
      var n = o.NodeFactory.createToken(t, e, r, a);
      return (
        "mtext" !== e &&
          t.configuration.parser.stack.env.boldsymbol &&
          (c.default.setProperty(n, "fixBold", !0),
          t.configuration.addNode("fixBold", n)),
        n
      );
    }
    function d(t) {
      var e, r;
      try {
        for (
          var a = s(t.data.getList("fixBold")), n = a.next();
          !n.done;
          n = a.next()
        ) {
          var o = n.value;
          if (c.default.getProperty(o, "fixBold")) {
            var i = c.default.getAttribute(o, "mathvariant");
            null == i
              ? c.default.setAttribute(
                  o,
                  "mathvariant",
                  l.TexConstant.Variant.BOLD
                )
              : c.default.setAttribute(o, "mathvariant", u[i] || i),
              c.default.removeProperties(o, "fixBold");
          }
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          n && !n.done && (r = a.return) && r.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    (u[l.TexConstant.Variant.NORMAL] = l.TexConstant.Variant.BOLD),
      (u[l.TexConstant.Variant.ITALIC] = l.TexConstant.Variant.BOLDITALIC),
      (u[l.TexConstant.Variant.FRAKTUR] = l.TexConstant.Variant.BOLDFRAKTUR),
      (u[l.TexConstant.Variant.SCRIPT] = l.TexConstant.Variant.BOLDSCRIPT),
      (u[l.TexConstant.Variant.SANSSERIF] =
        l.TexConstant.Variant.BOLDSANSSERIF),
      (u["-tex-calligraphic"] = "-tex-bold-calligraphic"),
      (u["-tex-oldstyle"] = "-tex-bold-oldstyle"),
      (e.BoldsymbolMethods = {}),
      (e.BoldsymbolMethods.Boldsymbol = function (t, e) {
        var r = t.stack.env.boldsymbol;
        t.stack.env.boldsymbol = !0;
        var a = t.ParseArg(e);
        (t.stack.env.boldsymbol = r), t.Push(a);
      }),
      new n.CommandMap(
        "boldsymbol",
        { boldsymbol: "Boldsymbol" },
        e.BoldsymbolMethods
      ),
      (e.createBoldToken = i),
      (e.rewriteBoldTokens = d),
      (e.BoldsymbolConfiguration = a.Configuration.create("boldsymbol", {
        handler: { macro: ["boldsymbol"] },
        nodes: { token: i },
        postprocessors: [d],
      }));
  },
  function (t, e, r) {
    "use strict";
    var a;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = r(41);
    r(42),
      (e.BraketConfiguration = n.Configuration.create("braket", {
        handler: { character: ["Braket-characters"], macro: ["Braket-macros"] },
        items: ((a = {}), (a[o.BraketItem.prototype.kind] = o.BraketItem), a),
      }));
  },
  function (t, e, r) {
    "use strict";
    var a,
      n =
        (this && this.__extends) ||
        ((a = function (t, e) {
          return (a =
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
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      o = r(11),
      s = r(6),
      c = r(3),
      l =
        ((i = o.BaseItem),
        n(u, i),
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
            return c.default.fenced(this.factory.configuration, e, t, r);
          var a = {
              fence: !0,
              stretchy: !1,
              symmetric: !0,
              texClass: s.TEXCLASS.OPEN,
            },
            n = this.create("token", "mo", a, e);
          a.texClass = s.TEXCLASS.CLOSE;
          var o = this.create("token", "mo", a, r);
          return this.create("node", "mrow", [n, t, o], {
            open: e,
            close: r,
            texClass: s.TEXCLASS.INNER,
          });
        }),
        u);
    function u() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.BraketItem = l;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(1),
      n = r(43);
    new a.CommandMap(
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
      n.default
    ),
      new a.MacroMap("Braket-characters", { "|": "Bar" }, n.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(8),
      s = r(6),
      n = {};
    (n.Macro = a.default.Macro),
      (n.Braket = function (t, e, r, a, n, o) {
        var i = !0;
        "{" === t.GetNext() && (t.i++, (i = !1)),
          t.Push(
            t.itemFactory
              .create("braket")
              .setProperties({
                barmax: o,
                barcount: 0,
                open: r,
                close: a,
                stretchy: n,
                single: i,
              })
          );
      }),
      (n.Bar = function (t, e) {
        var r = "|" === e ? "|" : "\u2225",
          a = t.stack.Top();
        if (
          "braket" !== a.kind ||
          a.getProperty("barcount") >= a.getProperty("barmax")
        ) {
          var n = t.create(
            "token",
            "mo",
            { texClass: s.TEXCLASS.ORD, stretchy: !1 },
            r
          );
          t.Push(n);
        } else {
          if (
            ("|" === r && "|" === t.GetNext() && (t.i++, (r = "\u2225")),
            a.getProperty("stretchy"))
          ) {
            var o = t.create("node", "TeXAtom", [], {
              texClass: s.TEXCLASS.CLOSE,
            });
            t.Push(o),
              a.setProperty("barcount", a.getProperty("barcount") + 1),
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
      (e.default = n);
  },
  function (t, e, r) {
    "use strict";
    var a;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = r(45),
      i = r(15);
    r(47),
      (e.BussproofsConfiguration = n.Configuration.create("bussproofs", {
        handler: {
          macro: ["Bussproofs-macros"],
          environment: ["Bussproofs-environments"],
        },
        items:
          ((a = {}), (a[o.ProofTreeItem.prototype.kind] = o.ProofTreeItem), a),
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
    var a,
      n =
        (this && this.__extends) ||
        ((a = function (t, e) {
          return (a =
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
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(2),
      s = r(11),
      c = r(46),
      l = r(15),
      u =
        ((o = s.BaseItem),
        n(d, o),
        Object.defineProperty(d.prototype, "kind", {
          get: function () {
            return "proofTree";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (d.prototype.checkItem = function (t) {
          if (t.isKind("end") && "prooftree" === t.getName()) {
            var e = this.toMml();
            return (
              l.setProperty(e, "proof", !0),
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
        (d.prototype.toMml = function () {
          var t = o.prototype.toMml.call(this),
            e = this.innerStack.Top();
          if (e.isKind("start") && !e.Size()) return t;
          this.innerStack.Push(this.factory.create("stop"));
          var r = this.innerStack.Top().toMml();
          return this.create("node", "mrow", [r, t], {});
        }),
        d);
    function d() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      return (
        (t.leftLabel = null),
        (t.rigthLabel = null),
        (t.innerStack = new c.default(t.factory, {}, !0)),
        t
      );
    }
    e.ProofTreeItem = u;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.Stack.default);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(48),
      n = r(10),
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
      a.default
    ),
      new o.EnvironmentMap(
        "Bussproofs-environments",
        n.default.environment,
        { prooftree: ["Prooftree", null, !1] },
        a.default
      );
  },
  function (t, e, r) {
    "use strict";
    var f =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var a,
            n,
            o = r.call(t),
            i = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(a = o.next()).done; )
              i.push(a.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return i;
        },
      o =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(f(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var h = r(2),
      g = r(7),
      i = r(3),
      v = r(15),
      a = {
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
            throw new h.default(
              "IllegalProofCommand",
              "Proof commands only allowed in prooftree environment."
            );
          var a = p(t, t.GetArgument(e));
          v.setProperty(a, "axiom", !0), r.Push(a);
        },
      },
      p = function (t, e) {
        var r = i.default.internalMath(t, i.default.trimSpaces(e), 0);
        if (!r[0].childNodes[0].childNodes.length)
          return t.create("node", "mrow", []);
        var a = t.create("node", "mspace", [], { width: ".5ex" }),
          n = t.create("node", "mspace", [], { width: ".5ex" });
        return t.create("node", "mrow", o([a], r, [n]));
      };
    function m(t, e, r, a, n, o, i) {
      var s,
        c,
        l,
        u,
        d = t.create("node", "mtr", [t.create("node", "mtd", [e], {})], {}),
        p = t.create("node", "mtr", [t.create("node", "mtd", r, {})], {}),
        m = t.create("node", "mtable", i ? [p, d] : [d, p], {
          align: "top 2",
          rowlines: o,
          framespacing: "0 0",
        });
      if (
        (v.setProperty(m, "inferenceRule", i ? "up" : "down"),
        a &&
          ((s = t.create("node", "mpadded", [a], {
            height: "+.5em",
            width: "+.5em",
            voffset: "-.15em",
          })),
          v.setProperty(s, "prooflabel", "left")),
        n &&
          ((c = t.create("node", "mpadded", [n], {
            height: "+.5em",
            width: "+.5em",
            voffset: "-.15em",
          })),
          v.setProperty(c, "prooflabel", "right")),
        a && n)
      )
        (l = [s, m, c]), (u = "both");
      else if (a) (l = [s, m]), (u = "left");
      else {
        if (!n) return m;
        (l = [m, c]), (u = "right");
      }
      return (
        (m = t.create("node", "mrow", l)),
        v.setProperty(m, "labelledRule", u),
        m
      );
    }
    function x(t, e) {
      if ("$" !== t.GetNext())
        throw new h.default(
          "IllegalUseOfCommand",
          "Use of %1 does not match it's definition.",
          e
        );
      t.i++;
      var r = t.GetUpTo(e, "$");
      if (-1 === r.indexOf("\\fCenter"))
        throw new h.default(
          "IllegalUseOfCommand",
          "Missing \\fCenter in %1.",
          e
        );
      var a = f(r.split("\\fCenter"), 2),
        n = a[0],
        o = a[1],
        i = new g.default(n, t.stack.env, t.configuration).mml(),
        s = new g.default(o, t.stack.env, t.configuration).mml(),
        c = new g.default("\\fCenter", t.stack.env, t.configuration).mml(),
        l = t.create("node", "mtd", [i], {}),
        u = t.create("node", "mtd", [c], {}),
        d = t.create("node", "mtd", [s], {}),
        p = t.create("node", "mtr", [l, u, d], {}),
        m = t.create("node", "mtable", [p], {
          columnspacing: ".5ex",
          columnalign: "center 2",
        });
      return (
        v.setProperty(m, "sequent", !0),
        t.configuration.addNode("sequent", p),
        m
      );
    }
    (a.Inference = function (t, e, r) {
      var a = t.stack.Top();
      if ("proofTree" !== a.kind)
        throw new h.default(
          "IllegalProofCommand",
          "Proof commands only allowed in prooftree environment."
        );
      if (a.Size() < r)
        throw new h.default("BadProofTree", "Proof tree badly specified.");
      for (
        var n = a.getProperty("rootAtTop"),
          o = 1 !== r || a.Peek()[0].childNodes.length ? r : 0,
          i = [];
        i.length && i.unshift(t.create("node", "mtd", [], {})),
          i.unshift(
            t.create("node", "mtd", [a.Pop()], {
              rowalign: n ? "top" : "bottom",
            })
          ),
          0 < --r;

      );
      var s = t.create("node", "mtr", i, {}),
        c = t.create("node", "mtable", [s], { framespacing: "0 0" }),
        l = p(t, t.GetArgument(e)),
        u = a.getProperty("currentLine");
      u !== a.getProperty("line") &&
        a.setProperty("currentLine", a.getProperty("line"));
      var d = m(t, c, [l], a.getProperty("left"), a.getProperty("right"), u, n);
      a.setProperty("left", null),
        a.setProperty("right", null),
        v.setProperty(d, "inference", o),
        t.configuration.addNode("inference", d),
        a.Push(d);
    }),
      (a.Label = function (t, e, r) {
        var a = t.stack.Top();
        if ("proofTree" !== a.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        var n = i.default.internalMath(t, t.GetArgument(e), 0),
          o = 1 < n.length ? t.create("node", "mrow", n, {}) : n[0];
        a.setProperty(r, o);
      }),
      (a.SetLine = function (t, e, r, a) {
        var n = t.stack.Top();
        if ("proofTree" !== n.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        n.setProperty("currentLine", r), a && n.setProperty("line", r);
      }),
      (a.RootAtTop = function (t, e, r) {
        var a = t.stack.Top();
        if ("proofTree" !== a.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        a.setProperty("rootAtTop", r);
      }),
      (a.AxiomF = function (t, e) {
        var r = t.stack.Top();
        if ("proofTree" !== r.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        var a = x(t, e);
        v.setProperty(a, "axiom", !0), r.Push(a);
      }),
      (a.FCenter = function (t, e) {}),
      (a.InferenceF = function (t, e, r) {
        var a = t.stack.Top();
        if ("proofTree" !== a.kind)
          throw new h.default(
            "IllegalProofCommand",
            "Proof commands only allowed in prooftree environment."
          );
        if (a.Size() < r)
          throw new h.default("BadProofTree", "Proof tree badly specified.");
        for (
          var n = a.getProperty("rootAtTop"),
            o = 1 !== r || a.Peek()[0].childNodes.length ? r : 0,
            i = [];
          i.length && i.unshift(t.create("node", "mtd", [], {})),
            i.unshift(
              t.create("node", "mtd", [a.Pop()], {
                rowalign: n ? "top" : "bottom",
              })
            ),
            0 < --r;

        );
        var s = t.create("node", "mtr", i, {}),
          c = t.create("node", "mtable", [s], { framespacing: "0 0" }),
          l = x(t, e),
          u = a.getProperty("currentLine");
        u !== a.getProperty("line") &&
          a.setProperty("currentLine", a.getProperty("line"));
        var d = m(
          t,
          c,
          [l],
          a.getProperty("left"),
          a.getProperty("right"),
          u,
          n
        );
        a.setProperty("left", null),
          a.setProperty("right", null),
          v.setProperty(d, "inference", o),
          t.configuration.addNode("inference", d),
          a.Push(d);
      }),
      (e.default = a);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      i = r(5),
      n = r(1),
      s = r(3),
      c = r(20);
    (e.CancelMethods = {}),
      (e.CancelMethods.Cancel = function (t, e, r) {
        var a = t.GetBrackets(e, ""),
          n = t.ParseArg(e),
          o = s.default.keyvalOptions(a, c.ENCLOSE_OPTIONS);
        (o.notation = r), t.Push(t.create("node", "menclose", [n], o));
      }),
      (e.CancelMethods.CancelTo = function (t, e) {
        var r = t.GetBrackets(e, ""),
          a = t.ParseArg(e),
          n = t.ParseArg(e),
          o = s.default.keyvalOptions(r, c.ENCLOSE_OPTIONS);
        (o.notation = [
          i.TexConstant.Notation.UPDIAGONALSTRIKE,
          i.TexConstant.Notation.UPDIAGONALARROW,
          i.TexConstant.Notation.NORTHEASTARROW,
        ].join(" ")),
          (a = t.create("node", "mpadded", [a], {
            depth: "-.1em",
            height: "+.1em",
            voffset: ".1em",
          })),
          t.Push(
            t.create("node", "msup", [t.create("node", "menclose", [n], o), a])
          );
      }),
      new n.CommandMap(
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
      (e.CancelConfiguration = a.Configuration.create("cancel", {
        handler: { macro: ["cancel"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(1),
      n = r(0),
      o = r(51),
      i = r(52);
    new a.CommandMap(
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
    e.ColorConfiguration = n.Configuration.create("color", {
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
    var c = r(4),
      l = r(3);
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
          a = t.GetArgument(e),
          n = t.options.color.model.getColor(r, a),
          o = t.itemFactory
            .create("style")
            .setProperties({ styles: { mathcolor: n } });
        (t.stack.env.color = n), t.Push(o);
      }),
      (e.ColorMethods.TextColor = function (t, e) {
        var r = t.GetBrackets(e, ""),
          a = t.GetArgument(e),
          n = t.options.color.model.getColor(r, a),
          o = t.stack.env.color;
        t.stack.env.color = n;
        var i = t.ParseArg(e);
        o ? (t.stack.env.color = o) : delete t.stack.env.color;
        var s = t.create("node", "mstyle", [i], { mathcolor: n });
        t.Push(s);
      }),
      (e.ColorMethods.DefineColor = function (t, e) {
        var r = t.GetArgument(e),
          a = t.GetArgument(e),
          n = t.GetArgument(e);
        t.options.color.model.defineColor(a, r, n);
      }),
      (e.ColorMethods.ColorBox = function (t, e) {
        var r = t.GetArgument(e),
          a = l.default.internalMath(t, t.GetArgument(e)),
          n = t.options.color,
          o = n.model,
          i = t.create("node", "mpadded", a, {
            mathbackground: o.getColor("named", r),
          });
        c.default.setProperties(i, u(n.padding)), t.Push(i);
      }),
      (e.ColorMethods.FColorBox = function (t, e) {
        var r = t.GetArgument(e),
          a = t.GetArgument(e),
          n = l.default.internalMath(t, t.GetArgument(e)),
          o = t.options.color,
          i = o.model,
          s = t.create("node", "mpadded", n, {
            mathbackground: i.getColor("named", a),
            style:
              "border: " + o.borderWidth + " solid " + i.getColor("named", r),
          });
        c.default.setProperties(s, u(o.padding)), t.Push(s);
      });
  },
  function (t, e, r) {
    "use strict";
    var u =
      (this && this.__values) ||
      function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          r = e && t[e],
          a = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && a >= t.length && (t = void 0),
                { value: t && t[a++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var d = r(2),
      a = r(53),
      n = new Map(),
      o =
        ((i.prototype.normalizeColor = function (t, e) {
          if (!t || "named" === t) return e;
          if (n.has(t)) return n.get(t)(e);
          throw new d.default(
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
            : a.COLORS.has(t)
            ? a.COLORS.get(t)
            : t;
        }),
        (i.prototype.defineColor = function (t, e, r) {
          var a = this.normalizeColor(t, r);
          this.userColors.set(e, a);
        }),
        i);
    function i() {
      this.userColors = new Map();
    }
    (e.ColorModel = o),
      n.set("rgb", function (t) {
        var e,
          r,
          a = t.trim().split(/\s*,\s*/),
          n = "#";
        if (3 !== a.length)
          throw new d.default(
            "ModelArg1",
            "Color values for the %1 model require 3 numbers",
            "rgb"
          );
        try {
          for (var o = u(a), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            if (!s.match(/^(\d+(\.\d*)?|\.\d+)$/))
              throw new d.default(
                "InvalidDecimalNumber",
                "Invalid decimal number"
              );
            var c = parseFloat(s);
            if (c < 0 || 1 < c)
              throw new d.default(
                "ModelArg2",
                "Color values for the %1 model must be between %2 and %3",
                "rgb",
                "0",
                "1"
              );
            var l = Math.floor(255 * c).toString(16);
            l.length < 2 && (l = "0" + l), (n += l);
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
        return n;
      }),
      n.set("RGB", function (t) {
        var e,
          r,
          a = t.trim().split(/\s*,\s*/),
          n = "#";
        if (3 !== a.length)
          throw new d.default(
            "ModelArg1",
            "Color values for the %1 model require 3 numbers",
            "RGB"
          );
        try {
          for (var o = u(a), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            if (!s.match(/^\d+$/))
              throw new d.default("InvalidNumber", "Invalid number");
            var c = parseInt(s);
            if (255 < c)
              throw new d.default(
                "ModelArg2",
                "Color values for the %1 model must be between %2 and %3",
                "RGB",
                "0",
                "255"
              );
            var l = c.toString(16);
            l.length < 2 && (l = "0" + l), (n += l);
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
        return n;
      }),
      n.set("gray", function (t) {
        if (!t.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/))
          throw new d.default("InvalidDecimalNumber", "Invalid decimal number");
        var e = parseFloat(t);
        if (e < 0 || 1 < e)
          throw new d.default(
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
    var a = r(1),
      n = r(0);
    (e.ColorV2Methods = {
      Color: function (t, e) {
        var r = t.GetArgument(e),
          a = t.stack.env.color;
        t.stack.env.color = r;
        var n = t.ParseArg(e);
        a ? (t.stack.env.color = a) : delete t.stack.env.color;
        var o = t.create("node", "mstyle", [n], { mathcolor: r });
        t.Push(o);
      },
    }),
      new a.CommandMap("colorV2", { color: "Color" }, e.ColorV2Methods),
      (e.ColorConfiguration = n.Configuration.create("colorV2", {
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
          a = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && a >= t.length && (t = void 0),
                { value: t && t[a++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      n = r(12),
      o = r(1),
      d = r(9),
      p = r(21);
    var m = new o.CommandMap("configMacros", {}, {});
    e.ConfigMacrosConfiguration = a.Configuration.create("configMacros", {
      handler: { macro: ["configMacros"] },
      config: function (t, e) {
        var r,
          a,
          n = t.options.macros;
        try {
          for (var o = u(Object.keys(n)), i = o.next(); !i.done; i = o.next()) {
            var s = i.value,
              c = "string" == typeof n[s] ? [n[s]] : n[s],
              l = Array.isArray(c[2])
                ? new d.Macro(
                    s,
                    p.default.MacroWithTemplate,
                    c.slice(0, 2).concat(c[2])
                  )
                : new d.Macro(s, p.default.Macro, c);
            m.add(s, l);
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            i && !i.done && (a = o.return) && a.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
      },
      options: { macros: n.expandable({}) },
    });
  },
  function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = e(0),
      a = e(1),
      n = e(13),
      s = e(22),
      o = e(23),
      c = e(2);
    (i.ExtpfeilMethods = {}),
      (i.ExtpfeilMethods.xArrow = n.default.xArrow),
      (i.ExtpfeilMethods.NewExtArrow = function (t, e) {
        var r = t.GetArgument(e),
          a = t.GetArgument(e),
          n = t.GetArgument(e);
        if (!r.match(/^\\([a-z]+|.)$/i))
          throw new c.default(
            "NewextarrowArg1",
            "First argument to %1 must be a control sequence name",
            e
          );
        if (!a.match(/^(\d+),(\d+)$/))
          throw new c.default(
            "NewextarrowArg2",
            "Second argument to %1 must be two integers separated by a comma",
            e
          );
        if (!n.match(/^(\d+|0x[0-9A-F]+)$/i))
          throw new c.default(
            "NewextarrowArg3",
            "Third argument to %1 must be a unicode character number",
            e
          );
        r = r.substr(1);
        var o = a.split(",");
        s.default.addMacro(t, r, i.ExtpfeilMethods.xArrow, [
          parseInt(n),
          parseInt(o[0]),
          parseInt(o[1]),
        ]);
      }),
      new a.CommandMap(
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
    var a,
      n =
        (this && this.__extends) ||
        ((a = function (t, e) {
          return (a =
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
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(2),
      s = r(11),
      c =
        ((o = s.BaseItem),
        n(l, o),
        Object.defineProperty(l.prototype, "kind", {
          get: function () {
            return "beginEnv";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(l.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (l.prototype.checkItem = function (t) {
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
        l);
    function l() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.BeginEnvItem = c;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(21);
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
      a.default
    );
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      n = r(1),
      o = r(60);
    new n.CommandMap(
      "html_macros",
      { href: "Href", class: "Class", style: "Style", cssId: "Id" },
      o.default
    ),
      (e.HtmlConfiguration = a.Configuration.create("html", {
        handler: { macro: ["html_macros"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(4),
      a = {
        Href: function (t, e) {
          var r = t.GetArgument(e),
            a = i(t, e);
          o.default.setAttribute(a, "href", r), t.Push(a);
        },
        Class: function (t, e) {
          var r = t.GetArgument(e),
            a = i(t, e),
            n = o.default.getAttribute(a, "class");
          n && (r = n + " " + r),
            o.default.setAttribute(a, "class", r),
            t.Push(a);
        },
        Style: function (t, e) {
          var r = t.GetArgument(e),
            a = i(t, e),
            n = o.default.getAttribute(a, "style");
          n &&
            (";" !== r.charAt(r.length - 1) && (r += ";"), (r = n + " " + r)),
            o.default.setAttribute(a, "style", r),
            t.Push(a);
        },
        Id: function (t, e) {
          var r = t.GetArgument(e),
            a = i(t, e);
          o.default.setAttribute(a, "id", r), t.Push(a);
        },
      },
      i = function (t, e) {
        var r = t.ParseArg(e);
        if (!o.default.isInferred(r)) return r;
        var a = o.default.getChildren(r);
        if (1 === a.length) return a[0];
        var n = t.create("node", "mrow");
        return o.default.copyChildren(r, n), o.default.copyAttributes(r, n), n;
      };
    e.default = a;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      n = r(1),
      i = r(2),
      o = r(8),
      s = r(13),
      c = r(62),
      l = {};
    (l.Macro = o.default.Macro),
      (l.xArrow = s.default.xArrow),
      (l.Machine = function (t, e, r) {
        try {
          var a = t.GetArgument(e),
            n = c.mhchemParser.go(a, r),
            o = c.texify.go(n);
          (t.string = o + t.string.substr(t.i)), (t.i = 0);
        } catch (t) {
          throw new i.default(t[0], t[1], t.slice(2));
        }
      }),
      new n.CommandMap(
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
        l
      ),
      (e.MhchemConfiguration = a.Configuration.create("mhchem", {
        handler: { macro: ["mhchem"] },
      }));
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var f = {
      go: function (t, e) {
        if (!t) return [];
        void 0 === e && (e = "ce");
        var r,
          a = "0",
          n = {};
        (n.parenthesisLevel = 0),
          (t = (t = (t = t.replace(/\n/g, " ")).replace(
            /[\u2212\u2013\u2014\u2010]/g,
            "-"
          )).replace(/[\u2026]/g, "..."));
        for (var o = 10, i = []; ; ) {
          r !== t ? ((o = 10), (r = t)) : o--;
          var s = f.stateMachines[e],
            c = s.transitions[a] || s.transitions["*"];
          t: for (var l = 0; l < c.length; l++) {
            var u = f.patterns.match_(c[l].pattern, t);
            if (u) {
              for (var d = c[l].task, p = 0; p < d.action_.length; p++) {
                var m;
                if (s.actions[d.action_[p].type_])
                  m = s.actions[d.action_[p].type_](
                    n,
                    u.match_,
                    d.action_[p].option
                  );
                else {
                  if (!f.actions[d.action_[p].type_])
                    throw [
                      "MhchemBugA",
                      "mhchem bug A. Please report. (" +
                        d.action_[p].type_ +
                        ")",
                    ];
                  m = f.actions[d.action_[p].type_](
                    n,
                    u.match_,
                    d.action_[p].option
                  );
                }
                f.concatArray(i, m);
              }
              if (((a = d.nextState || a), !(0 < t.length))) return i;
              if ((d.revisit || (t = u.remainder), !d.toContinue)) break t;
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
            var e = f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(t, "^{", "", "", "}");
          },
          "^($...$)": function (t) {
            return f.patterns.findObserveGroups(t, "^", "$", "$", "");
          },
          "^a": /^\^([0-9]+|[^\\_])/,
          "^\\x{}{}": function (t) {
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(t, "_{", "", "", "}");
          },
          "_($...$)": function (t) {
            return f.patterns.findObserveGroups(t, "_", "$", "$", "");
          },
          _9: /^_([+\-]?[0-9]+|[^\\])/,
          "_\\x{}{}": function (t) {
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(t, "", "{", "}", "");
          },
          "{(...)}": function (t) {
            return f.patterns.findObserveGroups(t, "{", "", "", "}");
          },
          "$...$": function (t) {
            return f.patterns.findObserveGroups(t, "", "$", "$", "");
          },
          "${(...)}$": function (t) {
            return f.patterns.findObserveGroups(t, "${", "", "", "}$");
          },
          "$(...)$": function (t) {
            return f.patterns.findObserveGroups(t, "$", "", "", "$");
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
            return f.patterns.findObserveGroups(t, "\\bond{", "", "", "}");
          },
          "->": /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,
          CMT: /^[CMT](?=\[)/,
          "[(...)]": function (t) {
            return f.patterns.findObserveGroups(t, "[", "", "", "]");
          },
          "1st-level escape": /^(&|\\\\|\\hline)\s*/,
          "\\,": /^(?:\\[,\ ;:])/,
          "\\x{}{}": function (t) {
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(t, "\\color{", "", "", "}");
          },
          "\\color{(...)}{(...)}1": function (t) {
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(
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
            return f.patterns.findObserveGroups(t, "\\ce{", "", "", "}");
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
            var r = f.patterns.findObserveGroups(t, "", "$", "$", "");
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
        findObserveGroups: function (t, e, r, a, n, o, i, s, c, l) {
          function u(t, e) {
            if ("string" == typeof e) return 0 !== t.indexOf(e) ? null : e;
            var r = t.match(e);
            return r ? r[0] : null;
          }
          var d = u(t, e);
          if (null === d) return null;
          if (((t = t.substr(d.length)), null === (d = u(t, r)))) return null;
          var p = (function (t, e, r) {
            for (var a = 0; e < t.length; ) {
              var n = t.charAt(e),
                o = u(t.substr(e), r);
              if (null !== o && 0 === a)
                return { endMatchBegin: e, endMatchEnd: e + o.length };
              if ("{" === n) a++;
              else if ("}" === n) {
                if (0 === a)
                  throw [
                    "ExtraCloseMissingOpen",
                    "Extra close brace or missing open brace",
                  ];
                a--;
              }
              e++;
            }
            return null;
          })(t, d.length, a || n);
          if (null === p) return null;
          var m = t.substring(0, a ? p.endMatchEnd : p.endMatchBegin);
          if (o || i) {
            var f = this.findObserveGroups(t.substr(p.endMatchEnd), o, i, s, c);
            if (null === f) return null;
            var h = [m, f.match_];
            return { match_: l ? h.join("") : h, remainder: f.remainder };
          }
          return { match_: m, remainder: t.substr(p.endMatchEnd) };
        },
        match_: function (t, e) {
          var r = f.patterns.patterns[t];
          if (void 0 === r)
            throw ["MhchemBugP", "mhchem bug P. Please report. (" + t + ")"];
          if ("function" == typeof r) return f.patterns.patterns[t](e);
          var a = e.match(r);
          return a
            ? {
                match_: a[2] ? [a[1], a[2]] : a[1] ? a[1] : a[0],
                remainder: e.substr(a[0].length),
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
          return f.go(e, "text");
        },
        "{text}": function (t, e) {
          var r = ["{"];
          return f.concatArray(r, f.go(e, "text")), r.push("}"), r;
        },
        "tex-math": function (t, e) {
          return f.go(e, "tex-math");
        },
        "tex-math tight": function (t, e) {
          return f.go(e, "tex-math tight");
        },
        bond: function (t, e, r) {
          return { type_: "bond", kind_: r || e };
        },
        "color0-output": function (t, e) {
          return { type_: "color0", color: e[0] };
        },
        ce: function (t, e) {
          return f.go(e);
        },
        "1/2": function (t, e) {
          var r = [];
          e.match(/^[+\-]/) && (r.push(e.substr(0, 1)), (e = e.substr(1)));
          var a = e.match(
            /^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/
          );
          return (
            (a[1] = a[1].replace(/\$/g, "")),
            r.push({ type_: "frac", p1: a[1], p2: a[2] }),
            a[3] &&
              ((a[3] = a[3].replace(/\$/g, "")),
              r.push({ type_: "tex-math", p1: a[3] })),
            r
          );
        },
        "9,9": function (t, e) {
          return f.go(e, "9,9");
        },
      },
      createTransitions: function (t) {
        var e,
          r,
          a,
          n,
          o = {};
        for (e in t)
          for (r in t[e])
            for (
              a = r.split("|"), t[e][r].stateArray = a, n = 0;
              n < a.length;
              n++
            )
              o[a[n]] = [];
        for (e in t)
          for (r in t[e])
            for (a = t[e][r].stateArray || [], n = 0; n < a.length; n++) {
              var i = t[e][r];
              if (i.action_) {
                i.action_ = [].concat(i.action_);
                for (var s = 0; s < i.action_.length; s++)
                  "string" == typeof i.action_[s] &&
                    (i.action_[s] = { type_: i.action_[s] });
              } else i.action_ = [];
              for (var c = e.split("|"), l = 0; l < c.length; l++)
                if ("*" === a[n])
                  for (var u in o) o[u].push({ pattern: c[l], task: i });
                else o[a[n]].push({ pattern: c[l], task: i });
            }
        return o;
      },
      stateMachines: {},
    };
    f.stateMachines = {
      ce: {
        transitions: f.createTransitions({
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
              var a = t.d;
              (t.d = void 0), (r = this.output(t)), (t.b = a);
            } else r = this.output(t);
            return f.actions["o="](t, e), r;
          },
          "d= kv": function (t, e) {
            (t.d = e), (t.dType = "kv");
          },
          "charge or bond": function (t, e) {
            if (t.beginsWithBond) {
              var r = [];
              return (
                f.concatArray(r, this.output(t)),
                f.concatArray(r, f.actions.bond(t, e, "-")),
                r
              );
            }
            t.d = e;
          },
          "- after o/d": function (t, e, r) {
            var a = f.patterns.match_("orbital", t.o || ""),
              n = f.patterns.match_("one lowercase greek letter $", t.o || ""),
              o = f.patterns.match_("one lowercase latin letter $", t.o || ""),
              i = f.patterns.match_(
                "$one lowercase latin letter$ $",
                t.o || ""
              ),
              s = "-" === e && ((a && "" === a.remainder) || n || o || i);
            !s ||
              t.a ||
              t.b ||
              t.p ||
              t.d ||
              t.q ||
              a ||
              !o ||
              (t.o = "$" + t.o + "$");
            var c = [];
            return (
              s
                ? (f.concatArray(c, this.output(t)),
                  c.push({ type_: "hyphen" }))
                : ((a = f.patterns.match_("digits", t.d || "")),
                  r && a && "" === a.remainder
                    ? (f.concatArray(c, f.actions["d="](t, e)),
                      f.concatArray(c, this.output(t)))
                    : (f.concatArray(c, this.output(t)),
                      f.concatArray(c, f.actions.bond(t, e, "-")))),
              c
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
            return { type_: "state of aggregation", p1: f.go(e, "o") };
          },
          comma: function (t, e) {
            var r = e.replace(/\s*$/, "");
            return r !== e && 0 === t.parenthesisLevel
              ? { type_: "comma enumeration L", p1: r }
              : { type_: "comma enumeration M", p1: r };
          },
          output: function (t, e, r) {
            var a, n, o;
            t.r
              ? ((n =
                  "M" === t.rdt
                    ? f.go(t.rd, "tex-math")
                    : "T" === t.rdt
                    ? [{ type_: "text", p1: t.rd || "" }]
                    : f.go(t.rd)),
                (o =
                  "M" === t.rqt
                    ? f.go(t.rq, "tex-math")
                    : "T" === t.rqt
                    ? [{ type_: "text", p1: t.rq || "" }]
                    : f.go(t.rq)),
                (a = { type_: "arrow", r: t.r, rd: n, rq: o }))
              : ((a = []),
                (t.a || t.b || t.p || t.o || t.q || t.d || r) &&
                  (t.sb && a.push({ type_: "entitySkip" }),
                  t.o || t.q || t.d || t.b || t.p || 2 === r
                    ? t.o || t.q || t.d || (!t.b && !t.p)
                      ? t.o &&
                        "kv" === t.dType &&
                        f.patterns.match_("d-oxidation$", t.d || "")
                        ? (t.dType = "oxidation")
                        : t.o && "kv" === t.dType && !t.q && (t.dType = void 0)
                      : ((t.o = t.a),
                        (t.d = t.b),
                        (t.q = t.p),
                        (t.a = t.b = t.p = void 0))
                    : ((t.o = t.a), (t.a = void 0)),
                  a.push({
                    type_: "chemfive",
                    a: f.go(t.a, "a"),
                    b: f.go(t.b, "bd"),
                    p: f.go(t.p, "pq"),
                    o: f.go(t.o, "o"),
                    q: f.go(t.q, "pq"),
                    d: f.go(t.d, "oxidation" === t.dType ? "oxidation" : "bd"),
                    dType: t.dType,
                  })));
            for (var i in t)
              "parenthesisLevel" !== i && "beginsWithBond" !== i && delete t[i];
            return a;
          },
          "oxidation-output": function (t, e) {
            var r = ["{"];
            return f.concatArray(r, f.go(e, "oxidation")), r.push("}"), r;
          },
          "frac-output": function (t, e) {
            return { type_: "frac-ce", p1: f.go(e[0]), p2: f.go(e[1]) };
          },
          "overset-output": function (t, e) {
            return { type_: "overset", p1: f.go(e[0]), p2: f.go(e[1]) };
          },
          "underset-output": function (t, e) {
            return { type_: "underset", p1: f.go(e[0]), p2: f.go(e[1]) };
          },
          "underbrace-output": function (t, e) {
            return { type_: "underbrace", p1: f.go(e[0]), p2: f.go(e[1]) };
          },
          "color-output": function (t, e) {
            return { type_: "color", color1: e[0], color2: f.go(e[1]) };
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
        transitions: f.createTransitions({
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
        transitions: f.createTransitions({
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
        transitions: f.createTransitions({
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
        transitions: f.createTransitions({
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
              p1: f.go(e, "o"),
            };
          },
          "color-output": function (t, e) {
            return { type_: "color", color1: e[0], color2: f.go(e[1], "pq") };
          },
        },
      },
      bd: {
        transitions: f.createTransitions({
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
            return { type_: "color", color1: e[0], color2: f.go(e[1], "bd") };
          },
        },
      },
      oxidation: {
        transitions: f.createTransitions({
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
        transitions: f.createTransitions({
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
        transitions: f.createTransitions({
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
        transitions: f.createTransitions({
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
        transitions: f.createTransitions({
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
                (f.concatArray(r, f.go(e[1], "pu-9,9")),
                e[2] &&
                  (e[2].match(/[,.]/)
                    ? f.concatArray(r, f.go(e[2], "pu-9,9"))
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
              f.concatArray(r, f.go(e[1], "pu-9,9")),
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
              r = f.patterns.match_("{(...)}", t.d || "");
            r && "" === r.remainder && (t.d = r.match_);
            var a = f.patterns.match_("{(...)}", t.q || "");
            if (
              (a && "" === a.remainder && (t.q = a.match_),
              t.d &&
                ((t.d = t.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C")),
                (t.d = t.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F"))),
              t.q)
            ) {
              (t.q = t.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C")),
                (t.q = t.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F"));
              var n = { d: f.go(t.d, "pu"), q: f.go(t.q, "pu") };
              "//" === t.o
                ? (e = { type_: "pu-frac", p1: n.d, p2: n.q })
                : (1 < (e = n.d).length || 1 < n.q.length
                    ? e.push({ type_: " / " })
                    : e.push({ type_: "/" }),
                  f.concatArray(e, n.q));
            } else e = f.go(t.d, "pu-2");
            for (var o in t) delete t[o];
            return e;
          },
        },
      },
      "pu-2": {
        transitions: f.createTransitions({
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
              var r = f.patterns.match_("{(...)}", t.rm || "");
              e =
                r && "" === r.remainder
                  ? f.go(r.match_, "pu")
                  : { type_: "rm", p1: t.rm };
            }
            for (var a in t) delete t[a];
            return e;
          },
        },
      },
      "pu-9,9": {
        transitions: f.createTransitions({
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
              for (var a = t.text_.length - 3; 0 < a; a -= 3)
                e.push(t.text_.substr(a, 3)),
                  e.push({ type_: "1000 separator" });
              e.push(t.text_.substr(0, r)), e.reverse();
            } else e.push(t.text_);
            for (var n in t) delete t[n];
            return e;
          },
          "output-o": function (t) {
            var e = [];
            if (((t.text_ = t.text_ || ""), 4 < t.text_.length)) {
              for (var r = t.text_.length - 3, a = 0; a < r; a += 3)
                e.push(t.text_.substr(a, 3)),
                  e.push({ type_: "1000 separator" });
              e.push(t.text_.substr(a));
            } else e.push(t.text_);
            for (var n in t) delete t[n];
            return e;
          },
        },
      },
    };
    var c = {
      go: function (t, e) {
        if (!t) return "";
        for (var r = "", a = !1, n = 0; n < t.length; n++) {
          var o = t[n];
          "string" == typeof o
            ? (r += o)
            : ((r += c._go2(o)), "1st-level escape" === o.type_ && (a = !0));
        }
        return e || a || !r || (r = "{" + r + "}"), r;
      },
      _goInner: function (t) {
        return t ? c.go(t, !0) : t;
      },
      _go2: function (t) {
        var e;
        switch (t.type_) {
          case "chemfive":
            e = "";
            var r = {
              a: c._goInner(t.a),
              b: c._goInner(t.b),
              p: c._goInner(t.p),
              o: c._goInner(t.o),
              q: c._goInner(t.q),
              d: c._goInner(t.d),
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
            e = "\\mskip2mu " + c._goInner(t.p1);
            break;
          case "state of aggregation subscript":
            e = "\\mskip1mu " + c._goInner(t.p1);
            break;
          case "bond":
            if (!(e = c._getBond(t.kind_)))
              throw [
                "MhchemErrorBond",
                "mhchem Error. Unknown bond type (" + t.kind_ + ")",
              ];
            break;
          case "frac":
            var a = "\\frac{" + t.p1 + "}{" + t.p2 + "}";
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
          case "pu-frac":
            var n =
              "\\frac{" + c._goInner(t.p1) + "}{" + c._goInner(t.p2) + "}";
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
          case "tex-math":
            e = t.p1 + " ";
            break;
          case "frac-ce":
            e = "\\frac{" + c._goInner(t.p1) + "}{" + c._goInner(t.p2) + "}";
            break;
          case "overset":
            e = "\\overset{" + c._goInner(t.p1) + "}{" + c._goInner(t.p2) + "}";
            break;
          case "underset":
            e =
              "\\underset{" + c._goInner(t.p1) + "}{" + c._goInner(t.p2) + "}";
            break;
          case "underbrace":
            e =
              "\\underbrace{" +
              c._goInner(t.p1) +
              "}_{" +
              c._goInner(t.p2) +
              "}";
            break;
          case "color":
            e = "{\\color{" + t.color1 + "}{" + c._goInner(t.color2) + "}}";
            break;
          case "color0":
            e = "\\color{" + t.color + "}";
            break;
          case "arrow":
            var o = c._goInner(t.rd),
              i = c._goInner(t.rq),
              s = c._getArrow(t.r);
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
            e = c._getOperator(t.kind_);
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
    function a(t) {}
    function n(t) {}
    (e.mhchemParser = f),
      (e.texify = c),
      (e.assertNever = a),
      (e.assertString = n);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0);
    e.NoErrorsConfiguration = a.Configuration.create("noerrors", {
      nodes: {
        error: function (t, e, r, a) {
          var n = t.create("token", "mtext", {}, a.replace(/\n/g, " "));
          return t.create("node", "merror", [n], { "data-mjx-error": e });
        },
      },
    });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0);
    e.NoUndefinedConfiguration = a.Configuration.create("noundefined", {
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
    var a;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = r(66);
    r(67),
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
        items: ((a = {}), (a[o.AutoOpen.prototype.kind] = o.AutoOpen), a),
      }));
  },
  function (t, e, r) {
    "use strict";
    var a,
      n =
        (this && this.__extends) ||
        ((a = function (t, e) {
          return (a =
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
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = r(11),
      s = r(3),
      c = r(7),
      l =
        ((o = i.BaseItem),
        n(u, o),
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
              a = t.create("node", "mpadded", [r], { height: 0, depth: 0 });
            this.Clear(), this.Push(t.create("node", "TeXAtom", [a]));
          }
          e && this.Push(new c.default(e, t.stack.env, t.configuration).mml());
          var n = o.prototype.toMml.call(this);
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
            : o.prototype.checkItem.call(this, t);
        }),
        u);
    function u() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    e.AutoOpen = l;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(1),
      n = r(68),
      o = r(5),
      i = r(10),
      s = r(6);
    new a.CommandMap(
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
      n.default
    ),
      new a.CharacterMap("Physics-vector-chars", i.default.mathchar0mi, {
        dotproduct: ["\u22c5", { mathvariant: o.TexConstant.Variant.BOLD }],
        vdot: ["\u22c5", { mathvariant: o.TexConstant.Variant.BOLD }],
        crossproduct: "\xd7",
        cross: "\xd7",
        cp: "\xd7",
        gradientnabla: ["\u2207", { mathvariant: o.TexConstant.Variant.BOLD }],
        real: ["\u211c", { mathvariant: o.TexConstant.Variant.NORMAL }],
        imaginary: ["\u2111", { mathvariant: o.TexConstant.Variant.NORMAL }],
      }),
      new a.CommandMap(
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
      new a.CommandMap(
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
      new a.CommandMap(
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
      new a.CommandMap(
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
      new a.CommandMap(
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
      new a.CommandMap(
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
      new a.EnvironmentMap(
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
        n.default
      ),
      new a.MacroMap(
        "Physics-characters",
        {
          "|": ["AutoClose", s.TEXCLASS.ORD],
          ")": "AutoClose",
          "]": "AutoClose",
        },
        n.default
      );
  },
  function (t, e, r) {
    "use strict";
    var s =
      (this && this.__read) ||
      function (t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var a,
          n,
          o = r.call(t),
          i = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(a = o.next()).done; )
            i.push(a.value);
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return i;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(8),
      x = r(7),
      h = r(2),
      g = r(6),
      v = r(3),
      y = r(4),
      c = r(19),
      n = {},
      b = { "(": ")", "[": "]", "{": "}", "|": "|" },
      _ = /^(b|B)i(g{1,2})$/;
    (n.Quantity = function (t, e, r, a, n, o, i) {
      void 0 === r && (r = "("),
        void 0 === a && (a = ")"),
        void 0 === n && (n = !1),
        void 0 === o && (o = ""),
        void 0 === i && (i = "");
      var s = !!n && t.GetStar(),
        c = t.GetNext(),
        l = t.i,
        u = null;
      if ("\\" === c) {
        if ((t.i++, !(u = t.GetCS()).match(_))) {
          var d = t.create("node", "mrow");
          return (
            t.Push(v.default.fenced(t.configuration, r, d, a)), void (t.i = l)
          );
        }
        c = t.GetNext();
      }
      var p = b[c];
      if (n && "{" !== c)
        throw new h.default(
          "MissingArgFor",
          "Missing argument for %1",
          t.currentCS
        );
      if (!p) {
        d = t.create("node", "mrow");
        return (
          t.Push(v.default.fenced(t.configuration, r, d, a)), void (t.i = l)
        );
      }
      if (o) {
        var m = t.create("token", "mi", { texClass: g.TEXCLASS.OP }, o);
        i && y.default.setAttribute(m, "mathvariant", i),
          t.Push(t.itemFactory.create("fn", m));
      }
      if ("{" === c) {
        var f = t.GetArgument(e);
        return (
          (c = n ? r : "\\{"),
          (p = n ? a : "\\}"),
          (f = s
            ? c + " " + f + " " + p
            : u
            ? "\\" + u + "l" + c + " " + f + " \\" + u + "r" + p
            : "\\left" + c + " " + f + " \\right" + p),
          void t.Push(new x.default(f, t.stack.env, t.configuration).mml())
        );
      }
      n && ((c = r), (p = a)),
        t.i++,
        t.Push(
          t.itemFactory
            .create("auto open")
            .setProperties({ open: c, close: p, big: u })
        );
    }),
      (n.Eval = function (t, e) {
        var r = t.GetStar(),
          a = t.GetNext();
        if ("{" !== a) {
          if ("(" === a || "[" === a)
            return (
              t.i++,
              void t.Push(
                t.itemFactory
                  .create("auto open")
                  .setProperties({
                    open: a,
                    close: "|",
                    smash: r,
                    right: "\\vphantom{\\int}",
                  })
              )
            );
          throw new h.default(
            "MissingArgFor",
            "Missing argument for %1",
            t.currentCS
          );
        }
        var n = t.GetArgument(e),
          o =
            "\\left. " +
            (r ? "\\smash{" + n + "}" : n) +
            " \\vphantom{\\int}\\right|";
        t.string = t.string.slice(0, t.i) + o + t.string.slice(t.i);
      }),
      (n.Commutator = function (t, e, r, a) {
        void 0 === r && (r = "["), void 0 === a && (a = "]");
        var n = t.GetStar(),
          o = t.GetNext(),
          i = null;
        if ("\\" === o) {
          if ((t.i++, !(i = t.GetCS()).match(_)))
            throw new h.default(
              "MissingArgFor",
              "Missing argument for %1",
              t.currentCS
            );
          o = t.GetNext();
        }
        if ("{" !== o)
          throw new h.default(
            "MissingArgFor",
            "Missing argument for %1",
            t.currentCS
          );
        var s = t.GetArgument(e) + "," + t.GetArgument(e);
        (s = n
          ? r + " " + s + " " + a
          : i
          ? "\\" + i + "l" + r + " " + s + " \\" + i + "r" + a
          : "\\left" + r + " " + s + " \\right" + a),
          t.Push(new x.default(s, t.stack.env, t.configuration).mml());
      });
    var l = [65, 90],
      u = [97, 122],
      d = [913, 937],
      p = [945, 969],
      m = [48, 57];
    function f(t, e) {
      return t >= e[0] && t <= e[1];
    }
    function M(t, e, r, a) {
      var n = t.configuration.parser,
        o = c.NodeFactory.createToken(t, e, r, a),
        i = a.charCodeAt(0);
      return (
        1 === a.length &&
          !n.stack.env.font &&
          n.stack.env.vectorFont &&
          (f(i, l) ||
            f(i, u) ||
            f(i, d) ||
            f(i, m) ||
            (f(i, p) && n.stack.env.vectorStar) ||
            y.default.getAttribute(o, "accent")) &&
          y.default.setAttribute(o, "mathvariant", n.stack.env.vectorFont),
        o
      );
    }
    (n.VectorBold = function (t, e) {
      var r = t.GetStar(),
        a = t.GetArgument(e),
        n = t.configuration.nodeFactory.get("token"),
        o = t.stack.env.font;
      delete t.stack.env.font,
        t.configuration.nodeFactory.set("token", M),
        (t.stack.env.vectorFont = r ? "bold-italic" : "bold"),
        (t.stack.env.vectorStar = r);
      var i = new x.default(a, t.stack.env, t.configuration).mml();
      o && (t.stack.env.font = o),
        delete t.stack.env.vectorFont,
        delete t.stack.env.vectorStar,
        t.configuration.nodeFactory.set("token", n),
        t.Push(i);
    }),
      (n.StarMacro = function (t, e, r) {
        for (var a = [], n = 3; n < arguments.length; n++)
          a[n - 3] = arguments[n];
        var o = t.GetStar(),
          i = [];
        if (r) for (var s = i.length; s < r; s++) i.push(t.GetArgument(e));
        var c = a.join(o ? "*" : "");
        if (
          ((c = v.default.substituteArgs(t, i, c)),
          (t.string = v.default.addArgs(t, c, t.string.slice(t.i))),
          (t.i = 0),
          ++t.macroCount > t.configuration.options.maxMacros)
        )
          throw new h.default(
            "MaxMacroSub1",
            "MathJax maximum macro substitution count exceeded; is there a recursive macro call?"
          );
      });
    function o(t, e, r, a, n) {
      var o = new x.default(a, t.stack.env, t.configuration).mml();
      t.Push(t.itemFactory.create(e, o));
      var i = t.GetNext(),
        s = b[i];
      if (s) {
        var c = -1 !== n.indexOf(i);
        if ("{" === i) {
          var l =
            (c ? "\\left\\{" : "") +
            " " +
            t.GetArgument(r) +
            " " +
            (c ? "\\right\\}" : "");
          return (t.string = l + t.string.slice(t.i)), void (t.i = 0);
        }
        c &&
          (t.i++,
          t.Push(
            t.itemFactory
              .create("auto open")
              .setProperties({ open: i, close: s })
          ));
      }
    }
    function w(t, e, r) {
      var a = s(t, 3),
        n = a[0],
        o = a[1],
        i = a[2];
      return e && r
        ? "\\left\\langle{" +
            n +
            "}\\middle\\vert{" +
            o +
            "}\\middle\\vert{" +
            i +
            "}\\right\\rangle"
        : e
        ? "\\langle{" + n + "}\\vert{" + o + "}\\vert{" + i + "}\\rangle"
        : "\\left\\langle{" +
          n +
          "}\\right\\vert{" +
          o +
          "}\\left\\vert{" +
          i +
          "}\\right\\rangle";
    }
    (n.OperatorApplication = function (t, e, r) {
      for (var a = [], n = 3; n < arguments.length; n++)
        a[n - 3] = arguments[n];
      o(t, "fn", e, r, a);
    }),
      (n.VectorOperator = function (t, e, r) {
        for (var a = [], n = 3; n < arguments.length; n++)
          a[n - 3] = arguments[n];
        o(t, "mml", e, r, a);
      }),
      (n.Expression = function (t, e, r, a) {
        void 0 === r && (r = !0),
          void 0 === a && (a = ""),
          (a = a || e.slice(1));
        var n = r ? t.GetBrackets(e) : null,
          o = t.create("token", "mi", { texClass: g.TEXCLASS.OP }, a);
        if (n) {
          var i = new x.default(n, t.stack.env, t.configuration).mml();
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
      (n.Qqtext = function (t, e, r) {
        var a =
          (t.GetStar() ? "" : "\\quad") +
          "\\text{" +
          (r || t.GetArgument(e)) +
          "}\\quad ";
        t.string = t.string.slice(0, t.i) + a + t.string.slice(t.i);
      }),
      (n.Differential = function (t, e, r) {
        var a = t.GetBrackets(e),
          n = null != a ? "^{" + a + "}" : " ",
          o = "(" === t.GetNext(),
          i = "{" === t.GetNext(),
          s = r + n;
        if (o || i)
          if (i) {
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
      (n.Derivative = function (t, e, r, a) {
        var n = t.GetStar(),
          o = t.GetBrackets(e),
          i = 1,
          s = [];
        for (s.push(t.GetArgument(e)); "{" === t.GetNext() && i < r; )
          s.push(t.GetArgument(e)), i++;
        var c = !1,
          l = " ",
          u = " ";
        2 < r && 2 < s.length
          ? ((l = "^{" + (s.length - 1) + "}"), (c = !0))
          : null != o &&
            (2 < r && 1 < s.length && (c = !0), (u = l = "^{" + o + "}"));
        for (
          var d = n ? "\\flatfrac" : "\\frac",
            p = 1 < s.length ? s[0] : "",
            m = 1 < s.length ? s[1] : s[0],
            f = "",
            h = 2,
            g = void 0;
          (g = s[h]);
          h++
        )
          f += a + " " + g;
        var v = d + "{" + a + l + p + "}{" + a + " " + m + u + " " + f + "}";
        t.Push(new x.default(v, t.stack.env, t.configuration).mml()),
          "(" === t.GetNext() &&
            (t.i++,
            t.Push(
              t.itemFactory
                .create("auto open")
                .setProperties({ open: "(", close: ")", ignore: c })
            ));
      }),
      (n.Bra = function (t, e) {
        var r = t.GetStar(),
          a = t.GetArgument(e),
          n = "",
          o = !1,
          i = !1;
        if ("\\" === t.GetNext()) {
          var s = t.i;
          t.i++;
          var c = t.GetCS(),
            l = t.lookup("macro", c);
          l && "ket" === l.symbol
            ? ((o = !0),
              (s = t.i),
              (i = t.GetStar()),
              "{" === t.GetNext()
                ? (n = t.GetArgument(c, !0))
                : ((t.i = s), (i = !1)))
            : (t.i = s);
        }
        var u = "";
        (u = o
          ? r || i
            ? "\\langle{" + a + "}\\vert{" + n + "}\\rangle"
            : "\\left\\langle{" +
              a +
              "}\\middle\\vert{" +
              n +
              "}\\right\\rangle"
          : r || i
          ? "\\langle{" + a + "}\\vert"
          : "\\left\\langle{" + a + "}\\right\\vert{" + n + "}"),
          t.Push(new x.default(u, t.stack.env, t.configuration).mml());
      }),
      (n.Ket = function (t, e) {
        var r = t.GetStar(),
          a = t.GetArgument(e),
          n = r
            ? "\\vert{" + a + "}\\rangle"
            : "\\left\\vert{" + a + "}\\right\\rangle";
        t.Push(new x.default(n, t.stack.env, t.configuration).mml());
      }),
      (n.BraKet = function (t, e) {
        var r = t.GetStar(),
          a = t.GetArgument(e),
          n = null;
        "{" === t.GetNext() && (n = t.GetArgument(e, !0));
        var o = "";
        (o =
          null == n
            ? r
              ? "\\langle{" + a + "}\\vert{" + a + "}\\rangle"
              : "\\left\\langle{" +
                a +
                "}\\middle\\vert{" +
                a +
                "}\\right\\rangle"
            : r
            ? "\\langle{" + a + "}\\vert{" + n + "}\\rangle"
            : "\\left\\langle{" +
              a +
              "}\\middle\\vert{" +
              n +
              "}\\right\\rangle"),
          t.Push(new x.default(o, t.stack.env, t.configuration).mml());
      }),
      (n.KetBra = function (t, e) {
        var r = t.GetStar(),
          a = t.GetArgument(e),
          n = null;
        "{" === t.GetNext() && (n = t.GetArgument(e, !0));
        var o = "";
        (o =
          null == n
            ? r
              ? "\\vert{" + a + "}\\rangle\\!\\langle{" + a + "}\\vert"
              : "\\left\\vert{" +
                a +
                "}\\middle\\rangle\\!\\middle\\langle{" +
                a +
                "}\\right\\vert"
            : r
            ? "\\vert{" + a + "}\\rangle\\!\\langle{" + n + "}\\vert"
            : "\\left\\vert{" +
              a +
              "}\\middle\\rangle\\!\\middle\\langle{" +
              n +
              "}\\right\\vert"),
          t.Push(new x.default(o, t.stack.env, t.configuration).mml());
      }),
      (n.Expectation = function (t, e) {
        var r = t.GetStar(),
          a = r && t.GetStar(),
          n = (t.GetNext(), t.GetArgument(e)),
          o = null;
        "{" === t.GetNext() && (o = t.GetArgument(e, !0));
        var i =
          n && o
            ? w([o, n, o], r, a)
            : r
            ? "\\langle {" + n + "} \\rangle"
            : "\\left\\langle {" + n + "} \\right\\rangle";
        t.Push(new x.default(i, t.stack.env, t.configuration).mml());
      }),
      (n.MatrixElement = function (t, e) {
        var r = t.GetStar(),
          a = r && t.GetStar(),
          n =
            (t.GetNext(),
            w([t.GetArgument(e), t.GetArgument(e), t.GetArgument(e)], r, a));
        t.Push(new x.default(n, t.stack.env, t.configuration).mml());
      }),
      (n.MatrixQuantity = function (t, e, r) {
        var a = t.GetStar(),
          n = r ? "smallmatrix" : "array",
          o = "",
          i = "",
          s = "";
        switch (t.GetNext()) {
          case "{":
            o = t.GetArgument(e);
            break;
          case "(":
            t.i++,
              (i = a ? "\\lgroup" : "("),
              (s = a ? "\\rgroup" : ")"),
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
        var c =
          (i ? "\\left" : "") +
          i +
          "\\begin{" +
          n +
          "}{} " +
          o +
          "\\end{" +
          n +
          "}" +
          (i ? "\\right" : "") +
          s;
        t.Push(new x.default(c, t.stack.env, t.configuration).mml());
      }),
      (n.IdentityMatrix = function (t, e) {
        var r = t.GetArgument(e),
          a = parseInt(r, 10);
        if (isNaN(a)) throw new h.default("InvalidNumber", "Invalid number");
        if (a <= 1)
          return (t.string = "1" + t.string.slice(t.i)), void (t.i = 0);
        for (var n = Array(a).fill("0"), o = [], i = 0; i < a; i++) {
          var s = n.slice();
          (s[i] = "1"), o.push(s.join(" & "));
        }
        (t.string = o.join("\\\\ ") + t.string.slice(t.i)), (t.i = 0);
      }),
      (n.XMatrix = function (t, e) {
        var r = t.GetStar(),
          a = t.GetArgument(e),
          n = t.GetArgument(e),
          o = t.GetArgument(e),
          i = parseInt(n, 10),
          s = parseInt(o, 10);
        if (isNaN(i) || isNaN(s) || s.toString() !== o || i.toString() !== n)
          throw new h.default("InvalidNumber", "Invalid number");
        if (((i = i < 1 ? 1 : i), (s = s < 1 ? 1 : s), !r)) {
          var c = Array(s).fill(a).join(" & "),
            l = Array(i).fill(c).join("\\\\ ");
          return (t.string = l + t.string.slice(t.i)), void (t.i = 0);
        }
        var u = "";
        if (1 === i && 1 === s) u = a;
        else if (1 === i) {
          c = [];
          for (var d = 1; d <= s; d++) c.push(a + "_{" + d + "}");
          u = c.join(" & ");
        } else if (1 === s) {
          for (c = [], d = 1; d <= i; d++) c.push(a + "_{" + d + "}");
          u = c.join("\\\\ ");
        } else {
          var p = [];
          for (d = 1; d <= i; d++) {
            c = [];
            for (var m = 1; m <= s; m++)
              c.push(a + "_{{" + d + "}{" + m + "}}");
            p.push(c.join(" & "));
          }
          u = p.join("\\\\ ");
        }
        (t.string = u + t.string.slice(t.i)), (t.i = 0);
      }),
      (n.PauliMatrix = function (t, e) {
        var r = t.GetArgument(e),
          a = r.slice(1);
        switch (r[0]) {
          case "0":
            a += " 1 & 0\\\\ 0 & 1";
            break;
          case "1":
          case "x":
            a += " 0 & 1\\\\ 1 & 0";
            break;
          case "2":
          case "y":
            a += " 0 & -i\\\\ i & 0";
            break;
          case "3":
          case "z":
            a += " 1 & 0\\\\ 0 & -1";
        }
        (t.string = a + t.string.slice(t.i)), (t.i = 0);
      }),
      (n.DiagonalMatrix = function (e, t, r) {
        if ("{" === e.GetNext()) {
          var a = e.i,
            n = (e.GetArgument(t), e.i);
          e.i = a + 1;
          for (var o = [], i = "", s = e.i; s < n; ) {
            try {
              i = e.GetUpTo(t, ",");
            } catch (t) {
              (e.i = n), o.push(e.string.slice(s, n - 1));
              break;
            }
            if (e.i >= n) {
              o.push(e.string.slice(s, n));
              break;
            }
            (s = e.i), o.push(i);
          }
          (e.string =
            (function (t, e) {
              for (var r = t.length, a = [], n = 0; n < r; n++)
                a.push(
                  Array(e ? r - n : n + 1).join("&") + "\\mqty{" + t[n] + "}"
                );
              return a.join("\\\\ ");
            })(o, r) + e.string.slice(n)),
            (e.i = 0);
        }
      }),
      (n.AutoClose = function (t, e, r) {
        var a = t.create("token", "mo", { stretchy: !1 }, e),
          n = t.itemFactory.create("mml", a).setProperties({ autoclose: e });
        t.Push(n);
      }),
      (n.Macro = a.default.Macro),
      (n.NamedFn = a.default.NamedFn),
      (n.Array = a.default.Array),
      (e.default = n);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      u = r(2),
      n = r(1),
      d = r(3),
      p = r(4),
      m = r(70);
    e.UnicodeMethods = {};
    var f = {};
    (e.UnicodeMethods.Unicode = function (t, e) {
      var r = t.GetBrackets(e),
        a = null,
        n = null;
      r &&
        (n = r
          .replace(/ /g, "")
          .match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)
          ? ((a = r.replace(/ /g, "").split(/,/)), t.GetBrackets(e))
          : r);
      var o = d.default.trimSpaces(t.GetArgument(e)).replace(/^0x/, "x");
      if (!o.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/))
        throw new u.default(
          "BadUnicode",
          "Argument to \\unicode must be a number"
        );
      var i = parseInt(o.match(/^x/) ? "0" + o : o);
      f[i] ? (n = n || f[i][2]) : (f[i] = [800, 200, n, i]),
        a &&
          ((f[i][0] = Math.floor(1e3 * parseFloat(a[0]))),
          (f[i][1] = Math.floor(1e3 * parseFloat(a[1]))));
      var s = t.stack.env.font,
        c = {};
      n
        ? ((f[i][2] = c.fontfamily = n.replace(/'/g, "'")),
          s &&
            (s.match(/bold/) && (c.fontweight = "bold"),
            s.match(/italic|-mathit/) && (c.fontstyle = "italic")))
        : s && (c.mathvariant = s);
      var l = t.create("token", "mtext", c, m.numeric(o));
      p.default.setProperty(l, "unicode", !0), t.Push(l);
    }),
      new n.CommandMap("unicode", { unicode: "Unicode" }, e.UnicodeMethods),
      (e.UnicodeConfiguration = a.Configuration.create("unicode", {
        handler: { macro: ["unicode"] },
      }));
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(0),
      o = r(5),
      n = r(1),
      i = r(2);
    (e.VerbMethods = {}),
      (e.VerbMethods.Verb = function (t, e) {
        var r = t.GetNext(),
          a = ++t.i;
        if ("" === r)
          throw new i.default("MissingArgFor", "Missing argument for %1", e);
        for (; t.i < t.string.length && t.string.charAt(t.i) !== r; ) t.i++;
        if (t.i === t.string.length)
          throw new i.default(
            "NoClosingDelim",
            "Can't find closing delimiter for %1",
            t.currentCS
          );
        var n = t.string.slice(a, t.i).replace(/ /g, "\xa0");
        t.i++,
          t.Push(
            t.create(
              "token",
              "mtext",
              { mathvariant: o.TexConstant.Variant.MONOSPACE },
              n
            )
          );
      }),
      new n.CommandMap("verb", { verb: "Verb" }, e.VerbMethods),
      (e.VerbConfiguration = a.Configuration.create("verb", {
        handler: { macro: ["verb"] },
      }));
  },
  function (GJ, HJ) {
    var IJ;
    IJ = (function () {
      return this;
    })();
    try {
      IJ = IJ || Function("return this")() || eval("this");
    } catch (t) {
      "object" == typeof window && (IJ = window);
    }
    GJ.exports = IJ;
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
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.mathjax = MathJax._.mathjax.mathjax);
  },
]);
