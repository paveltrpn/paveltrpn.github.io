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
    n((n.s = 7));
})([
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.ParseUtil.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TexConstant = MathJax._.input.tex.TexConstants.TexConstant);
  },
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
      l = a(12),
      o = a(0),
      s = a(3),
      u = a(4),
      m = a(1),
      c =
        ((i = l.ArrayItem),
        n(d, i),
        Object.defineProperty(d.prototype, "kind", {
          get: function () {
            return "multline";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (d.prototype.EndEntry = function () {
          this.table.length &&
            o.default.fixInitialMO(this.factory.configuration, this.nodes);
          var t = this.getProperty("shove"),
            e = this.create(
              "node",
              "mtd",
              this.nodes,
              t ? { columnalign: t } : {}
            );
          this.setProperty("shove", null), this.row.push(e), this.Clear();
        }),
        (d.prototype.EndRow = function () {
          if (1 !== this.row.length)
            throw new u.default(
              "MultlineRowsOneCol",
              "The rows within the %1 environment must have exactly one column",
              "multline"
            );
          var t = this.create("node", "mtr", this.row);
          this.table.push(t), (this.row = []);
        }),
        (d.prototype.EndTable = function () {
          if ((i.prototype.EndTable.call(this), this.table.length)) {
            var t = this.table.length - 1,
              e = -1;
            s.default.getAttribute(
              s.default.getChildren(this.table[0])[0],
              "columnalign"
            ) ||
              s.default.setAttribute(
                s.default.getChildren(this.table[0])[0],
                "columnalign",
                m.TexConstant.Align.LEFT
              ),
              s.default.getAttribute(
                s.default.getChildren(this.table[t])[0],
                "columnalign"
              ) ||
                s.default.setAttribute(
                  s.default.getChildren(this.table[t])[0],
                  "columnalign",
                  m.TexConstant.Align.RIGHT
                );
            var a = this.factory.configuration.tags.getTag();
            if (a) {
              e =
                this.arraydef.side === m.TexConstant.Align.LEFT
                  ? 0
                  : this.table.length - 1;
              var r = this.table[e],
                n = this.create(
                  "node",
                  "mlabeledtr",
                  [a].concat(s.default.getChildren(r))
                );
              s.default.copyAttributes(r, n), (this.table[e] = n);
            }
          }
          this.factory.configuration.tags.end();
        }),
        d);
    function d(t) {
      for (var e = [], a = 1; a < arguments.length; a++)
        e[a - 1] = arguments[a];
      var r = i.call(this, t) || this;
      return r.factory.configuration.tags.start("multline", !0, e[0]), r;
    }
    e.MultlineItem = c;
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.NodeUtil.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.TexError.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var d = a(0),
      p = a(3),
      u = a(1),
      h = a(15),
      f = a(4),
      i = a(16),
      l = a(17),
      m = a(18),
      g = a(6),
      M = {
        AmsEqnArray: function (t, e, a, r, n, i, l) {
          var o = t.GetBrackets("\\begin{" + e.getName() + "}"),
            s = m.default.EqnArray(t, e, a, r, n, i, l);
          return d.default.setArrayAlign(s, o);
        },
        AlignAt: function (t, e, a, r) {
          var n,
            i,
            l = e.getName(),
            o = "",
            s = [];
          if (
            (r || (i = t.GetBrackets("\\begin{" + l + "}")),
            (n = t.GetArgument("\\begin{" + l + "}")).match(/[^0-9]/))
          )
            throw new f.default(
              "PositiveIntegerArg",
              "Argument to %1 must me a positive integer",
              "\\begin{" + l + "}"
            );
          for (var u = parseInt(n, 10); 0 < u; )
            (o += "rl"), s.push("0em 0em"), u--;
          var m = s.join(" ");
          if (r) return M.EqnArray(t, e, a, r, o, m);
          var c = M.EqnArray(t, e, a, r, o, m);
          return d.default.setArrayAlign(c, i);
        },
        Multline: function (t, e, a) {
          t.Push(e), d.default.checkEqnEnv(t);
          var r = t.itemFactory.create("multline", a, t.stack);
          return (
            (r.arraydef = {
              displaystyle: !0,
              rowspacing: ".5em",
              columnwidth: "100%",
              width: t.options.multlineWidth,
              side: t.options.tagSide,
              minlabelspacing: t.options.tagIndent,
            }),
            r
          );
        },
        HandleDeclareOp: function (t, e) {
          var a = t.GetStar() ? "" : "\\nolimits\\SkipLimits",
            r = d.default.trimSpaces(t.GetArgument(e));
          "\\" === r.charAt(0) && (r = r.substr(1));
          var n = t.GetArgument(e);
          (n = n.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}")),
            t.configuration.handlers
              .retrieve(l.ExtensionMaps.NEW_COMMAND)
              .add(
                r,
                new i.Macro(r, M.Macro, ["\\mathop{\\rm " + n + "}" + a])
              );
        },
        HandleOperatorName: function (t, e) {
          var a = t.GetStar() ? "" : "\\nolimits\\SkipLimits",
            r = d.default.trimSpaces(t.GetArgument(e));
          (r = r.replace(/\*/g, "\\text{*}").replace(/-/g, "\\text{-}")),
            (t.string =
              "\\mathop{\\rm " + r + "}" + a + " " + t.string.slice(t.i)),
            (t.i = 0);
        },
        SkipLimits: function (t, e) {
          var a = t.GetNext(),
            r = t.i;
          "\\" === a && ++t.i && "limits" !== t.GetCS() && (t.i = r);
        },
        MultiIntegral: function (t, e, a) {
          var r = t.GetNext();
          if ("\\" === r) {
            var n = t.i;
            (r = t.GetArgument(e)),
              (t.i = n),
              "\\limits" === r &&
                (a =
                  "\\idotsint" === e
                    ? "\\!\\!\\mathop{\\,\\," + a + "}"
                    : "\\!\\!\\!\\mathop{\\,\\,\\," + a + "}");
          }
          (t.string = a + " " + t.string.slice(t.i)), (t.i = 0);
        },
        xArrow: function (t, e, a, r, n) {
          var i = { width: "+" + (r + n) + "mu", lspace: r + "mu" },
            l = t.GetBrackets(e),
            o = t.ParseArg(e),
            s = t.create(
              "token",
              "mo",
              { stretchy: !0, texClass: g.TEXCLASS.REL },
              String.fromCharCode(a)
            ),
            u = t.create("node", "munderover", [s]),
            m = t.create("node", "mpadded", [o], i);
          if (
            (p.default.setAttribute(m, "voffset", ".15em"),
            p.default.setChild(u, u.over, m),
            l)
          ) {
            var c = new h.default(l, t.stack.env, t.configuration).mml();
            (m = t.create("node", "mpadded", [c], i)),
              p.default.setAttribute(m, "voffset", "-.24em"),
              p.default.setChild(u, u.under, m);
          }
          p.default.setProperty(u, "subsupOK", !0), t.Push(u);
        },
        HandleShove: function (t, e, a) {
          var r = t.stack.Top();
          if ("multline" !== r.kind)
            throw new f.default(
              "CommandOnlyAllowedInEnv",
              "%1 only allowed in %2 environment",
              t.currentCS,
              "multline"
            );
          if (r.Size())
            throw new f.default(
              "CommandAtTheBeginingOfLine",
              "%1 must come at the beginning of the line",
              t.currentCS
            );
          r.setProperty("shove", a);
        },
        CFrac: function (t, e) {
          var a = d.default.trimSpaces(t.GetBrackets(e, "")),
            r = t.GetArgument(e),
            n = t.GetArgument(e),
            i = {
              l: u.TexConstant.Align.LEFT,
              r: u.TexConstant.Align.RIGHT,
              "": "",
            },
            l = new h.default(
              "\\strut\\textstyle{" + r + "}",
              t.stack.env,
              t.configuration
            ).mml(),
            o = new h.default(
              "\\strut\\textstyle{" + n + "}",
              t.stack.env,
              t.configuration
            ).mml(),
            s = t.create("node", "mfrac", [l, o]);
          if (null == (a = i[a]))
            throw new f.default(
              "IllegalAlign",
              "Illegal alignment specified in %1",
              t.currentCS
            );
          a && p.default.setProperties(s, { numalign: a, denomalign: a }),
            t.Push(s);
        },
        Genfrac: function (t, e, a, r, n, i) {
          null == a && (a = t.GetDelimiterArg(e)),
            null == r && (r = t.GetDelimiterArg(e)),
            null == n && (n = t.GetArgument(e)),
            null == i && (i = d.default.trimSpaces(t.GetArgument(e)));
          var l = t.ParseArg(e),
            o = t.ParseArg(e),
            s = t.create("node", "mfrac", [l, o]);
          if (
            ("" !== n && p.default.setAttribute(s, "linethickness", n),
            (a || r) &&
              (p.default.setProperty(s, "withDelims", !0),
              (s = d.default.fixedFence(t.configuration, a, s, r))),
            "" !== i)
          ) {
            var u = parseInt(i, 10),
              m = ["D", "T", "S", "SS"][u];
            if (null == m)
              throw new f.default(
                "BadMathStyleFor",
                "Bad math style for %1",
                t.currentCS
              );
            (s = t.create("node", "mstyle", [s])),
              "D" === m
                ? p.default.setProperties(s, {
                    displaystyle: !0,
                    scriptlevel: 0,
                  })
                : p.default.setProperties(s, {
                    displaystyle: !1,
                    scriptlevel: u - 1,
                  });
          }
          t.Push(s);
        },
        HandleTag: function (t, e) {
          if (!t.tags.currentTag.taggable && t.tags.env)
            throw new f.default(
              "CommandNotAllowedInEnv",
              "%1 not allowed in %2 environment",
              t.currentCS,
              t.tags.env
            );
          if (t.tags.currentTag.tag)
            throw new f.default("MultipleCommand", "Multiple %1", t.currentCS);
          var a = t.GetStar(),
            r = d.default.trimSpaces(t.GetArgument(e));
          t.tags.tag(r, a);
        },
      };
    (M.HandleNoTag = m.default.HandleNoTag),
      (M.HandleRef = m.default.HandleRef),
      (M.Macro = m.default.Macro),
      (M.Accent = m.default.Accent),
      (M.Tilde = m.default.Tilde),
      (M.Array = m.default.Array),
      (M.Spacer = m.default.Spacer),
      (M.NamedOp = m.default.NamedOp),
      (M.EqnArray = m.default.EqnArray),
      (e.default = M);
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
    a(8);
  },
  function (t, e, a) {
    "use strict";
    var r = a(9),
      n = o(a(10)),
      i = o(a(2)),
      l = o(a(5));
    function o(t) {
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
          tex: { ams: { AmsConfiguration: n, AmsItems: i, AmsMethods: l } },
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
    var r,
      n,
      i =
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
    var l = a(11),
      o = a(2),
      s = a(13);
    a(14);
    var u,
      m = ((u = s.AbstractTags), i(c, u), c);
    function c() {
      return (null !== u && u.apply(this, arguments)) || this;
    }
    e.AmsTags = m;
    e.AmsConfiguration = l.Configuration.create("ams", {
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
      items: ((n = {}), (n[o.MultlineItem.prototype.kind] = o.MultlineItem), n),
      tags: { ams: m },
      init: function (t) {
        t.append(l.Configuration.extension());
      },
    });
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
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Label = MathJax._.input.tex.Tags.Label),
      (e.TagInfo = MathJax._.input.tex.Tags.TagInfo),
      (e.AbstractTags = MathJax._.input.tex.Tags.AbstractTags),
      (e.NoTags = MathJax._.input.tex.Tags.NoTags),
      (e.AllTags = MathJax._.input.tex.Tags.AllTags),
      (e.TagsFactory = MathJax._.input.tex.Tags.TagsFactory);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    function r(t) {
      for (var e = [], a = 0, r = t.length; a < r; a++)
        e[a] = s.default.Em(t[a]);
      return e.join(" ");
    }
    var n = a(5),
      i = a(19),
      l = a(1),
      o = a(20),
      s = a(0),
      u = a(6);
    new i.CharacterMap("AMSmath-mathchar0mo", o.default.mathchar0mo, {
      iiiint: ["\u2a0c", { texClass: u.TEXCLASS.OP }],
    }),
      new i.CommandMap(
        "AMSmath-macros",
        {
          mathring: ["Accent", "02DA"],
          nobreakspace: "Tilde",
          negmedspace: ["Spacer", l.TexConstant.Length.NEGATIVEMEDIUMMATHSPACE],
          negthickspace: [
            "Spacer",
            l.TexConstant.Length.NEGATIVETHICKMATHSPACE,
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
          shoveleft: ["HandleShove", l.TexConstant.Align.LEFT],
          shoveright: ["HandleShove", l.TexConstant.Align.RIGHT],
          xrightarrow: ["xArrow", 8594, 5, 6],
          xleftarrow: ["xArrow", 8592, 7, 3],
        },
        n.default
      ),
      new i.EnvironmentMap(
        "AMSmath-environment",
        o.default.environment,
        {
          "eqnarray*": [
            "EqnArray",
            null,
            !1,
            !0,
            "rcl",
            "0 " + l.TexConstant.Length.THICKMATHSPACE,
            ".5em",
          ],
          align: [
            "EqnArray",
            null,
            !0,
            !0,
            "rlrlrlrlrlrl",
            r([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
          ],
          "align*": [
            "EqnArray",
            null,
            !1,
            !0,
            "rlrlrlrlrlrl",
            r([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
          ],
          multline: ["Multline", null, !0],
          "multline*": ["Multline", null, !1],
          split: ["EqnArray", null, !1, !1, "rl", r([0])],
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
            r([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]),
            ".5em",
            "D",
          ],
          gathered: ["AmsEqnArray", null, null, null, "c", null, ".5em", "D"],
          subarray: ["Array", null, null, null, null, r([0]), "0.1em", "S", 1],
          smallmatrix: [
            "Array",
            null,
            null,
            null,
            "c",
            r([1 / 3]),
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
      new i.DelimiterMap("AMSmath-delimiter", o.default.delimiter, {
        "\\lvert": ["|", { texClass: u.TEXCLASS.OPEN }],
        "\\rvert": ["|", { texClass: u.TEXCLASS.CLOSE }],
        "\\lVert": ["\u2016", { texClass: u.TEXCLASS.OPEN }],
        "\\rVert": ["\u2016", { texClass: u.TEXCLASS.CLOSE }],
      }),
      new i.CharacterMap("AMSsymbols-mathchar0mi", o.default.mathchar0mi, {
        digamma: "\u03dd",
        varkappa: "\u03f0",
        varGamma: ["\u0393", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varDelta: ["\u0394", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varTheta: ["\u0398", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varLambda: ["\u039b", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varXi: ["\u039e", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varPi: ["\u03a0", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varSigma: ["\u03a3", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varUpsilon: ["\u03a5", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varPhi: ["\u03a6", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varPsi: ["\u03a8", { mathvariant: l.TexConstant.Variant.ITALIC }],
        varOmega: ["\u03a9", { mathvariant: l.TexConstant.Variant.ITALIC }],
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
        circledS: ["\u24c8", { mathvariant: l.TexConstant.Variant.NORMAL }],
        bigstar: "\u2605",
        sphericalangle: "\u2222",
        measuredangle: "\u2221",
        nexists: "\u2204",
        complement: "\u2201",
        mho: "\u2127",
        eth: ["\xf0", { mathvariant: l.TexConstant.Variant.NORMAL }],
        Finv: "\u2132",
        diagup: "\u2571",
        Game: "\u2141",
        diagdown: "\u2572",
        Bbbk: ["k", { mathvariant: l.TexConstant.Variant.DOUBLESTRUCK }],
        yen: "\xa5",
        circledR: "\xae",
        checkmark: "\u2713",
        maltese: "\u2720",
      }),
      new i.CharacterMap("AMSsymbols-mathchar0m0", o.default.mathchar0mo, {
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
      new i.DelimiterMap("AMSsymbols-delimiter", o.default.delimiter, {
        "\\ulcorner": "\u231c",
        "\\urcorner": "\u231d",
        "\\llcorner": "\u231e",
        "\\lrcorner": "\u231f",
      }),
      new i.CommandMap(
        "AMSsymbols-macros",
        {
          implies: ["Macro", "\\;\\Longrightarrow\\;"],
          impliedby: ["Macro", "\\;\\Longleftarrow\\;"],
        },
        n.default
      );
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.TexParser.default);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Symbol = MathJax._.input.tex.Symbol.Symbol),
      (e.Macro = MathJax._.input.tex.Symbol.Macro);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MapHandler = MathJax._.input.tex.MapHandler.MapHandler),
      (e.ExtensionMaps = MathJax._.input.tex.MapHandler.ExtensionMaps),
      (e.SubHandler = MathJax._.input.tex.MapHandler.SubHandler),
      (e.SubHandlers = MathJax._.input.tex.MapHandler.SubHandlers);
  },
  function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = MathJax._.input.tex.base.BaseMethods.default);
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
      (e.default = MathJax._.input.tex.ParseMethods.default);
  },
]);
