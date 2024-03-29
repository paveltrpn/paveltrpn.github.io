!(function (o) {
  var i = {};
  function r(t) {
    if (i[t]) return i[t].exports;
    var e = (i[t] = { i: t, l: !1, exports: {} });
    return o[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  (r.m = o),
    (r.c = i),
    (r.d = function (t, e, o) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            o,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return o;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 6));
})([
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
    var i,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
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
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        }),
      s =
        (this && this.__assign) ||
        function () {
          return (s =
            Object.assign ||
            function (t) {
              for (var e, o = 1, i = arguments.length; o < i; o++)
                for (var r in (e = arguments[o]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        },
      n =
        (this && this.__read) ||
        function (t, e) {
          var o = "function" == typeof Symbol && t[Symbol.iterator];
          if (!o) return t;
          var i,
            r,
            n = o.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(i = n.next()).done; )
              s.push(i.value);
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              i && !i.done && (o = n.return) && o.call(n);
            } finally {
              if (r) throw r.error;
            }
          }
          return s;
        },
      l =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        },
      a =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            o = e && t[e],
            i = 0;
          if (o) return o.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = o(8),
      p = o(2),
      u = o(3),
      h = o(5);
    function d(t, e) {
      return (
        r(o, (i = t)),
        (o.prototype.complexity = function (t) {
          this.state() < c.STATE.COMPLEXITY &&
            (this.enrich(t), e(this.root), this.state(c.STATE.COMPLEXITY));
        }),
        o
      );
      function o() {
        return (null !== i && i.apply(this, arguments)) || this;
      }
      var i;
    }
    function y(t) {
      var e, n;
      return (
        r(o, (n = t)),
        (o.prototype.complexity = function () {
          var e, t;
          if (!this.processed.isSet("complexity")) {
            try {
              for (var o = a(this.math), i = o.next(); !i.done; i = o.next())
                i.value.complexity(this);
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (t = o.return) && t.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
            this.processed.set("complexity");
          }
          return this;
        }),
        (o.prototype.state = function (t, e) {
          return (
            void 0 === e && (e = !1),
            n.prototype.state.call(this, t, e),
            t < c.STATE.COMPLEXITY && this.processed.clear("complexity"),
            this
          );
        }),
        ((e = o).OPTIONS = s(s(s({}, t.OPTIONS), u.ComplexityVisitor.OPTIONS), {
          ComplexityVisitor: u.ComplexityVisitor,
          renderActions: h.expandable(
            s(s({}, t.OPTIONS.renderActions), {
              complexity: [c.STATE.COMPLEXITY],
            })
          ),
        })),
        e
      );
      function o() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var o = n.apply(this, l(t)) || this,
          i = o.constructor.ProcessBits;
        i.has("complexity") || i.allocate("complexity");
        var r = h.selectOptionsFromKeys(
          o.options,
          o.options.ComplexityVisitor.OPTIONS
        );
        o.complexityVisitor = new o.options.ComplexityVisitor(o.mmlFactory, r);
        return (
          (o.options.MathItem = d(o.options.MathItem, function (t) {
            return o.complexityVisitor.visitTree(t);
          })),
          o
        );
      }
    }
    c.newState("COMPLEXITY", 40),
      (e.ComplexityMathItemMixin = d),
      (e.ComplexityMathDocumentMixin = y),
      (e.ComplexityHandler = function (t, e) {
        return (
          void 0 === e && (e = null),
          !t.documentClass.prototype.enrich && e && (t = p.EnrichHandler(t, e)),
          (t.documentClass = y(t.documentClass)),
          t
        );
      });
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EnrichedMathItemMixin =
        MathJax._.a11y["semantic-enrich"].EnrichedMathItemMixin),
      (e.EnrichedMathDocumentMixin =
        MathJax._.a11y["semantic-enrich"].EnrichedMathDocumentMixin),
      (e.EnrichHandler = MathJax._.a11y["semantic-enrich"].EnrichHandler);
  },
  function (t, e, o) {
    "use strict";
    var i,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
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
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        }),
      l =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            o = e && t[e],
            i = 0;
          if (o) return o.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a,
      n = o(9),
      s = o(4),
      c = o(5),
      p =
        ((a = n.MmlVisitor),
        r(u, a),
        (u.prototype.visitTree = function (t) {
          a.prototype.visitTree.call(this, t, !0),
            this.options.makeCollapsible && this.collapse.makeCollapse(t);
        }),
        (u.prototype.visitNode = function (t, e) {
          if (!t.attributes.get("data-semantic-complexity"))
            return a.prototype.visitNode.call(this, t, e);
        }),
        (u.prototype.visitDefault = function (t, e) {
          var o;
          if (t.isToken) {
            var i = t.getText();
            o = this.complexity.text * i.length + this.complexity.token;
          } else o = this.childrenComplexity(t);
          return this.setComplexity(t, o, e);
        }),
        (u.prototype.visitMfracNode = function (t, e) {
          var o =
            this.childrenComplexity(t) * this.complexity.script +
            this.complexity.fraction;
          return this.setComplexity(t, o, e);
        }),
        (u.prototype.visitMsqrtNode = function (t, e) {
          var o = this.childrenComplexity(t) + this.complexity.sqrt;
          return this.setComplexity(t, o, e);
        }),
        (u.prototype.visitMrootNode = function (t, e) {
          var o =
            this.childrenComplexity(t) +
            this.complexity.sqrt -
            (1 - this.complexity.script) * this.getComplexity(t.childNodes[1]);
          return this.setComplexity(t, o, e);
        }),
        (u.prototype.visitMphantomNode = function (t, e) {
          return this.setComplexity(t, this.complexity.phantom, e);
        }),
        (u.prototype.visitMsNode = function (t, e) {
          var o =
            (
              t.attributes.get("lquote") +
              t.getText() +
              t.attributes.get("rquote")
            ).length * this.complexity.text;
          return this.setComplexity(t, o, e);
        }),
        (u.prototype.visitMsubsupNode = function (t, e) {
          a.prototype.visitDefault.call(this, t, !0);
          var o = t.childNodes[t.sub],
            i = t.childNodes[t.sup],
            r = t.childNodes[t.base],
            n =
              Math.max(
                o ? this.getComplexity(o) : 0,
                i ? this.getComplexity(i) : 0
              ) * this.complexity.script;
          return (
            (n += this.complexity.child * ((o ? 1 : 0) + (i ? 1 : 0))),
            (n += r ? this.getComplexity(r) + this.complexity.child : 0),
            (n += this.complexity.subsup),
            this.setComplexity(t, n, e)
          );
        }),
        (u.prototype.visitMsubNode = function (t, e) {
          return this.visitMsubsupNode(t, e);
        }),
        (u.prototype.visitMsupNode = function (t, e) {
          return this.visitMsubsupNode(t, e);
        }),
        (u.prototype.visitMunderoverNode = function (t, e) {
          a.prototype.visitDefault.call(this, t, !0);
          var o = t.childNodes[t.under],
            i = t.childNodes[t.over],
            r = t.childNodes[t.base],
            n =
              Math.max(
                o ? this.getComplexity(o) : 0,
                i ? this.getComplexity(i) : 0
              ) * this.complexity.script;
          return (
            r && (n = Math.max(this.getComplexity(r), n)),
            (n +=
              this.complexity.child *
              ((o ? 1 : 0) + (i ? 1 : 0) + (r ? 1 : 0))),
            (n += this.complexity.underover),
            this.setComplexity(t, n, e)
          );
        }),
        (u.prototype.visitMunderNode = function (t, e) {
          return this.visitMunderoverNode(t, e);
        }),
        (u.prototype.visitMoverNode = function (t, e) {
          return this.visitMunderoverNode(t, e);
        }),
        (u.prototype.visitMencloseNode = function (t, e) {
          var o = this.childrenComplexity(t) + this.complexity.enclose;
          return this.setComplexity(t, o, e);
        }),
        (u.prototype.visitMactionNode = function (t, e) {
          this.childrenComplexity(t);
          var o = this.getComplexity(t.selected);
          return this.setComplexity(t, o, e);
        }),
        (u.prototype.visitMsemanticsNode = function (t, e) {
          var o = t.childNodes[0],
            i = 0;
          return (
            o && (this.visitNode(o, !0), (i = this.getComplexity(o))),
            this.setComplexity(t, i, e)
          );
        }),
        (u.prototype.visitAnnotationNode = function (t, e) {
          return this.setComplexity(t, this.complexity.xml, e);
        }),
        (u.prototype.visitAnnotation_xmlNode = function (t, e) {
          return this.setComplexity(t, this.complexity.xml, e);
        }),
        (u.prototype.visitMglyphNode = function (t, e) {
          return this.setComplexity(t, this.complexity.glyph, e);
        }),
        (u.prototype.getComplexity = function (t) {
          var e = t.getProperty("collapsedComplexity");
          return null != e ? e : t.attributes.get("data-semantic-complexity");
        }),
        (u.prototype.setComplexity = function (t, e, o) {
          return (
            o &&
              (this.options.identifyCollapsible &&
                (e = this.collapse.check(t, e)),
              t.attributes.set("data-semantic-complexity", e)),
            e
          );
        }),
        (u.prototype.childrenComplexity = function (t) {
          var e, o;
          a.prototype.visitDefault.call(this, t, !0);
          var i = 0;
          try {
            for (var r = l(t.childNodes), n = r.next(); !n.done; n = r.next()) {
              var s = n.value;
              i += this.getComplexity(s);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              n && !n.done && (o = r.return) && o.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
          return (
            1 < t.childNodes.length &&
              (i += t.childNodes.length * this.complexity.child),
            i
          );
        }),
        (u.OPTIONS = {
          identifyCollapsible: !0,
          makeCollapsible: !0,
          Collapse: s.Collapse,
        }),
        u);
    function u(t, e) {
      var o = a.call(this, t) || this;
      o.complexity = {
        text: 0.5,
        token: 0.5,
        child: 1,
        script: 0.8,
        sqrt: 2,
        subsup: 2,
        underover: 2,
        fraction: 2,
        enclose: 2,
        action: 2,
        phantom: 0,
        xml: 2,
        glyph: 2,
      };
      var i = o.constructor;
      return (
        (o.options = c.userOptions(c.defaultOptions({}, i.OPTIONS), e)),
        (o.collapse = new o.options.Collapse(o)),
        (o.factory = t),
        o
      );
    }
    e.ComplexityVisitor = p;
  },
  function (t, e, o) {
    "use strict";
    var a =
      (this && this.__values) ||
      function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          i = 0;
        if (o) return o.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && i >= t.length && (t = void 0),
                { value: t && t[i++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
      ((n.prototype.check = function (t, e) {
        var o = t.attributes.get("data-semantic-type");
        return this.collapse.has(o)
          ? this.collapse.get(o).call(this, t, e)
          : this.cutoff.hasOwnProperty(o)
          ? this.defaultCheck(t, e, o)
          : e;
      }),
      (n.prototype.defaultCheck = function (t, e, o) {
        var i = t.attributes.get("data-semantic-role"),
          r = this.cutoff[o];
        if (("number" == typeof r ? r : r[i] || r.value) < e) {
          var n = this.marker[o] || "??",
            s = "string" == typeof n ? n : n[i] || n.value;
          e = this.recordCollapse(t, e, s);
        }
        return e;
      }),
      (n.prototype.recordCollapse = function (t, e, o) {
        return (
          (o = "\u25c2" + o + "\u25b8"),
          t.setProperty("collapse-marker", o),
          t.setProperty("collapse-complexity", e),
          o.length * this.complexity.complexity.text
        );
      }),
      (n.prototype.unrecordCollapse = function (t) {
        var e = t.getProperty("collapse-complexity");
        null != e &&
          (t.attributes.set("data-semantic-complexity", e),
          t.removeProperty("collapse-complexity"),
          t.removeProperty("collapse-marker"));
      }),
      (n.prototype.canUncollapse = function (t, e, o) {
        if (
          (void 0 === o && (o = 1),
          this.splitAttribute(t, "children").length === o)
        ) {
          var i =
            1 === t.childNodes.length && t.childNodes[0].isInferred
              ? t.childNodes[0]
              : t;
          if (i && i.childNodes[e]) {
            var r = i.childNodes[e];
            if (r.getProperty("collapse-marker")) return r;
          }
        }
        return null;
      }),
      (n.prototype.uncollapseChild = function (t, e, o, i) {
        void 0 === i && (i = 1);
        var r = this.canUncollapse(e, o, i);
        return (
          r &&
            (this.unrecordCollapse(r),
            r.parent !== e &&
              r.parent.attributes.set("data-semantic-complexity", void 0),
            (t = this.complexity.visitNode(e, !1))),
          t
        );
      }),
      (n.prototype.splitAttribute = function (t, e) {
        return (t.attributes.get("data-semantic-" + e) || "").split(/,/);
      }),
      (n.prototype.getText = function (t) {
        var e = this;
        return t.isToken
          ? t.getText()
          : t.childNodes
              .map(function (t) {
                return e.getText(t);
              })
              .join("");
      }),
      (n.prototype.findChildText = function (t, e) {
        var o = this.findChild(t, e);
        return this.getText(o.coreMO() || o);
      }),
      (n.prototype.findChild = function (t, e) {
        var o, i;
        if (!t || t.attributes.get("data-semantic-id") === e) return t;
        if (!t.isToken)
          try {
            for (var r = a(t.childNodes), n = r.next(); !n.done; n = r.next()) {
              var s = n.value,
                l = this.findChild(s, e);
              if (l) return l;
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (i = r.return) && i.call(r);
            } finally {
              if (o) throw o.error;
            }
          }
        return null;
      }),
      (n.prototype.makeCollapse = function (t) {
        var e = [];
        t.walkTree(function (t) {
          t.getProperty("collapse-marker") && e.push(t);
        }),
          this.makeActions(e);
      }),
      (n.prototype.makeActions = function (t) {
        var e, o;
        try {
          for (var i = a(t), r = i.next(); !r.done; r = i.next()) {
            var n = r.value;
            this.makeAction(n);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            r && !r.done && (o = i.return) && o.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (n.prototype.makeId = function () {
        return "mjx-collapse-" + this.idCount++;
      }),
      (n.prototype.makeAction = function (t) {
        t.isKind("math") && (t = this.addMrow(t));
        var e = this.complexity.factory,
          o = t.getProperty("collapse-marker"),
          i = t.parent,
          r = e.create(
            "maction",
            {
              actiontype: "toggle",
              selection: 2,
              "data-collapsible": !0,
              id: this.makeId(),
              "data-semantic-complexity": t.attributes.get(
                "data-semantic-complexity"
              ),
            },
            [
              e.create("mtext", { mathcolor: "blue" }, [
                e.create("text").setText(o),
              ]),
            ]
          );
        r.inheritAttributesFrom(t),
          t.attributes.set(
            "data-semantic-complexity",
            t.getProperty("collapse-complexity")
          ),
          t.removeProperty("collapse-marker"),
          t.removeProperty("collapse-complexity"),
          i.replaceChild(r, t),
          r.appendChild(t);
      }),
      (n.prototype.addMrow = function (t) {
        var e,
          o,
          i = this.complexity.factory.create(
            "mrow",
            null,
            t.childNodes[0].childNodes
          );
        t.childNodes[0].setChildren([i]);
        var r = t.attributes.getAllAttributes();
        try {
          for (var n = a(Object.keys(r)), s = n.next(); !s.done; s = n.next()) {
            var l = s.value;
            "data-semantic-" === l.substr(0, 14) &&
              (i.attributes.set(l, r[l]), delete r[l]);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            s && !s.done && (o = n.return) && o.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        return (
          i.setProperty("collapse-marker", t.getProperty("collapse-marker")),
          i.setProperty(
            "collapse-complexity",
            t.getProperty("collapse-complexity")
          ),
          t.removeProperty("collapse-marker"),
          t.removeProperty("collapse-complexity"),
          i
        );
      }),
      (n.NOCOLLAPSE = 1e7),
      n);
    function n(t) {
      var r = this;
      (this.cutoff = {
        identifier: 3,
        number: 3,
        text: 10,
        infixop: 15,
        relseq: 15,
        multirel: 15,
        fenced: 18,
        bigop: 20,
        integral: 20,
        fraction: 12,
        sqrt: 9,
        root: 12,
        vector: 15,
        matrix: 15,
        cases: 15,
        superscript: 9,
        subscript: 9,
        subsup: 9,
        punctuated: {
          endpunct: n.NOCOLLAPSE,
          startpunct: n.NOCOLLAPSE,
          value: 12,
        },
      }),
        (this.marker = {
          identifier: "x",
          number: "#",
          text: "...",
          appl: { "limit function": "lim", value: "f()" },
          fraction: "/",
          sqrt: "\u221a",
          root: "\u221a",
          superscript: "\u25fd\u02d9",
          subscript: "\u25fd.",
          subsup: "\u25fd:",
          vector: {
            binomial: "(:)",
            determinant: "|:|",
            value: "\u27e8:\u27e9",
          },
          matrix: {
            squarematrix: "[::]",
            rowvector: "\u27e8\u22ef\u27e9",
            columnvector: "\u27e8\u22ee\u27e9",
            determinant: "|::|",
            value: "(::)",
          },
          cases: "{:",
          infixop: {
            addition: "+",
            subtraction: "\u2212",
            multiplication: "\u22c5",
            implicit: "\u22c5",
            value: "+",
          },
          punctuated: { text: "...", value: "," },
        }),
        (this.collapse = new Map([
          [
            "fenced",
            function (t, e) {
              return (
                (e = r.uncollapseChild(e, t, 1)) > r.cutoff.fenced &&
                  "leftright" === t.attributes.get("data-semantic-role") &&
                  (e = r.recordCollapse(
                    t,
                    e,
                    r.getText(t.childNodes[0]) +
                      r.getText(t.childNodes[t.childNodes.length - 1])
                  )),
                e
              );
            },
          ],
          [
            "appl",
            function (t, e) {
              if (r.canUncollapse(t, 2, 2)) {
                e = r.complexity.visitNode(t, !1);
                var o = r.marker.appl,
                  i = o[t.attributes.get("data-semantic-role")] || o.value;
                e = r.recordCollapse(t, e, i);
              }
              return e;
            },
          ],
          [
            "sqrt",
            function (t, e) {
              return (
                (e = r.uncollapseChild(e, t, 0)) > r.cutoff.sqrt &&
                  (e = r.recordCollapse(t, e, r.marker.sqrt)),
                e
              );
            },
          ],
          [
            "root",
            function (t, e) {
              return (
                (e = r.uncollapseChild(e, t, 0, 2)) > r.cutoff.sqrt &&
                  (e = r.recordCollapse(t, e, r.marker.sqrt)),
                e
              );
            },
          ],
          [
            "enclose",
            function (t, e) {
              if (1 === r.splitAttribute(t, "children").length) {
                var o = r.canUncollapse(t, 1);
                if (o) {
                  var i = o.getProperty("collapse-marker");
                  r.unrecordCollapse(o),
                    (e = r.recordCollapse(t, r.complexity.visitNode(t, !1), i));
                }
              }
              return e;
            },
          ],
          [
            "bigop",
            function (t, e) {
              if (e > r.cutoff.bigop || !t.isKind("mo")) {
                var o = r.splitAttribute(t, "content").pop(),
                  i = r.findChildText(t, o);
                e = r.recordCollapse(t, e, i);
              }
              return e;
            },
          ],
          [
            "integral",
            function (t, e) {
              if (e > r.cutoff.integral || !t.isKind("mo")) {
                var o = r.splitAttribute(t, "content").pop(),
                  i = r.findChildText(t, o);
                e = r.recordCollapse(t, e, i);
              }
              return e;
            },
          ],
          [
            "relseq",
            function (t, e) {
              if (e > r.cutoff.relseq) {
                var o = r.splitAttribute(t, "content")[0],
                  i = r.findChildText(t, o);
                e = r.recordCollapse(t, e, i);
              }
              return e;
            },
          ],
          [
            "multirel",
            function (t, e) {
              if (e > r.cutoff.relseq) {
                var o = r.splitAttribute(t, "content")[0],
                  i = r.findChildText(t, o) + "\u22ef";
                e = r.recordCollapse(t, e, i);
              }
              return e;
            },
          ],
          [
            "superscript",
            function (t, e) {
              return (
                (e = r.uncollapseChild(e, t, 0, 2)) > r.cutoff.superscript &&
                  (e = r.recordCollapse(t, e, r.marker.superscript)),
                e
              );
            },
          ],
          [
            "subscript",
            function (t, e) {
              return (
                (e = r.uncollapseChild(e, t, 0, 2)) > r.cutoff.subscript &&
                  (e = r.recordCollapse(t, e, r.marker.subscript)),
                e
              );
            },
          ],
          [
            "subsup",
            function (t, e) {
              return (
                (e = r.uncollapseChild(e, t, 0, 3)) > r.cutoff.subsup &&
                  (e = r.recordCollapse(t, e, r.marker.subsup)),
                e
              );
            },
          ],
        ])),
        (this.idCount = 0),
        (this.complexity = t);
    }
    e.Collapse = i;
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
  function (t, e, o) {
    "use strict";
    o(7);
    var i = o(0),
      r = o(1);
    MathJax.startup &&
      (MathJax.startup.extendHandler(function (t) {
        return (0, r.ComplexityHandler)(t);
      }),
      (0, i.combineDefaults)(
        MathJax.config,
        "options",
        MathJax.config["a11y/complexity"] || {}
      ));
  },
  function (t, e, o) {
    "use strict";
    var i = o(0),
      r = c(o(1)),
      n = c(o(4)),
      s = c(o(3)),
      l = c(o(2)),
      a = c(o(10));
    function c(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return (e.default = t), e;
    }
    (0, i.combineWithMathJax)({
      _: {
        a11y: {
          complexity_ts: r,
          complexity: { collapse: n, visitor: s },
          "semantic-enrich": l,
          sre: a,
        },
      },
    });
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.protoItem = MathJax._.core.MathItem.protoItem),
      (e.AbstractMathItem = MathJax._.core.MathItem.AbstractMathItem),
      (e.STATE = MathJax._.core.MathItem.STATE),
      (e.newState = MathJax._.core.MathItem.newState);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MmlVisitor = MathJax._.core.MmlTree.MmlVisitor.MmlVisitor);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sreReady = MathJax._.a11y.sre.sreReady);
  },
]);
