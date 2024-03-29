!(function (r) {
  var o = {};
  function a(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, a), (e.l = !0), e.exports;
  }
  (a.m = r),
    (a.c = o),
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
        for (var o in e)
          a.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
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
    a((a.s = 4));
})([
  function (t, e, r) {
    "use strict";
    var o,
      a =
        (this && this.__extends) ||
        ((o = function (t, e) {
          return (o =
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
          o(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        }),
      n =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var o,
            a,
            i = r.call(t),
            n = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(o = i.next()).done; )
              n.push(o.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              o && !o.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return n;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      i = r(7),
      l = r(1),
      u = r(8),
      c = r(2),
      h = r(3),
      p =
        ((s = i.AbstractInputJax),
        a(d, s),
        (d.prototype.setAdaptor = function (t) {
          s.prototype.setAdaptor.call(this, t),
            (this.findMathML.adaptor = t),
            (this.mathml.adaptor = t);
        }),
        (d.prototype.setMmlFactory = function (t) {
          s.prototype.setMmlFactory.call(this, t), this.mathml.setMmlFactory(t);
        }),
        Object.defineProperty(d.prototype, "processStrings", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (d.prototype.compile = function (t, e) {
          var r = t.start.node;
          if (!r || this.options.forceReparse) {
            var o = this.executeFilters(
                this.preFilters,
                t,
                e,
                t.math || "<math></math>"
              ),
              a = this.checkForErrors(
                this.adaptor.parse(o, "text/" + this.options.parseAs)
              ),
              i = this.adaptor.body(a);
            1 !== this.adaptor.childNodes(i).length &&
              this.error("MathML must consist of a single element"),
              (r = this.adaptor.remove(this.adaptor.firstChild(i))),
              "math" !== this.adaptor.kind(r).replace(/^[a-z]+:/, "") &&
                this.error(
                  "MathML must be formed by a <math> element, not <" +
                    this.adaptor.kind(r) +
                    ">"
                );
          }
          return (
            (r = this.executeFilters(this.mmlFilters, t, e, r)),
            this.executeFilters(this.postFilters, t, e, this.mathml.compile(r))
          );
        }),
        (d.prototype.checkForErrors = function (t) {
          var e = this.adaptor.tags(this.adaptor.body(t), "parsererror")[0];
          return (
            e &&
              ("" === this.adaptor.textContent(e) &&
                this.error("Error processing MathML"),
              this.options.parseError.call(this, e)),
            t
          );
        }),
        (d.prototype.error = function (t) {
          throw new Error(t);
        }),
        (d.prototype.findMath = function (t) {
          return this.findMathML.findMath(t);
        }),
        (d.NAME = "MathML"),
        (d.OPTIONS = l.defaultOptions(
          {
            parseAs: "html",
            forceReparse: !1,
            FindMathML: null,
            MathMLCompile: null,
            parseError: function (t) {
              this.error(this.adaptor.textContent(t).replace(/\n.*/g, ""));
            },
          },
          i.AbstractInputJax.OPTIONS
        )),
        d);
    function d(t) {
      void 0 === t && (t = {});
      var e = this,
        r = n(
          l.separateOptions(t, c.FindMathML.OPTIONS, h.MathMLCompile.OPTIONS),
          3
        ),
        o = r[0],
        a = r[1],
        i = r[2];
      return (
        ((e = s.call(this, o) || this).findMathML =
          e.options.FindMathML || new c.FindMathML(a)),
        (e.mathml = e.options.MathMLCompile || new h.MathMLCompile(i)),
        (e.mmlFilters = new u.FunctionList()),
        e
      );
    }
    e.MathML = p;
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
    var o,
      a =
        (this && this.__extends) ||
        ((o = function (t, e) {
          return (o =
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
          o(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        }),
      f =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            o = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && o >= t.length && (t = void 0),
                  { value: t && t[o++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      n = r(9),
      M = "http://www.w3.org/1998/Math/MathML",
      s =
        ((i = n.AbstractFindMath),
        a(l, i),
        (l.prototype.findMath = function (t) {
          var e = new Set();
          this.findMathNodes(t, e), this.findMathPrefixed(t, e);
          var r = this.adaptor.root(this.adaptor.document);
          return (
            "html" === this.adaptor.kind(r) &&
              0 === e.size &&
              this.findMathNS(t, e),
            this.processMath(e)
          );
        }),
        (l.prototype.findMathNodes = function (t, e) {
          var r, o;
          try {
            for (
              var a = f(this.adaptor.tags(t, "math")), i = a.next();
              !i.done;
              i = a.next()
            ) {
              var n = i.value;
              e.add(n);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              i && !i.done && (o = a.return) && o.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
        }),
        (l.prototype.findMathPrefixed = function (t, e) {
          var r,
            o,
            a,
            i,
            n = this.adaptor.root(this.adaptor.document);
          try {
            for (
              var s = f(this.adaptor.allAttributes(n)), l = s.next();
              !l.done;
              l = s.next()
            ) {
              var u = l.value;
              if ("xmlns:" === u.name.substr(0, 6) && u.value === M) {
                var c = u.name.substr(6);
                try {
                  for (
                    var h =
                        ((a = void 0), f(this.adaptor.tags(t, c + ":math"))),
                      p = h.next();
                    !p.done;
                    p = h.next()
                  ) {
                    var d = p.value;
                    e.add(d);
                  }
                } catch (t) {
                  a = { error: t };
                } finally {
                  try {
                    p && !p.done && (i = h.return) && i.call(h);
                  } finally {
                    if (a) throw a.error;
                  }
                }
              }
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              l && !l.done && (o = s.return) && o.call(s);
            } finally {
              if (r) throw r.error;
            }
          }
        }),
        (l.prototype.findMathNS = function (t, e) {
          var r, o;
          try {
            for (
              var a = f(this.adaptor.tags(t, "math", M)), i = a.next();
              !i.done;
              i = a.next()
            ) {
              var n = i.value;
              e.add(n);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              i && !i.done && (o = a.return) && o.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
        }),
        (l.prototype.processMath = function (t) {
          var e,
            r,
            o = [];
          try {
            for (
              var a = f(Array.from(t)), i = a.next();
              !i.done;
              i = a.next()
            ) {
              var n = i.value,
                s =
                  "block" === this.adaptor.getAttribute(n, "display") ||
                  "display" === this.adaptor.getAttribute(n, "mode"),
                l = { node: n, n: 0, delim: "" },
                u = { node: n, n: 0, delim: "" };
              o.push({
                math: this.adaptor.outerHTML(n),
                start: l,
                end: u,
                display: s,
              });
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              i && !i.done && (r = a.return) && r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          return o;
        }),
        (l.OPTIONS = {}),
        l);
    function l() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.FindMathML = s;
  },
  function (t, e, r) {
    "use strict";
    var o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++)
                for (var a in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
              return t;
            }).apply(this, arguments);
        },
      c =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            o = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && o >= t.length && (t = void 0),
                  { value: t && t[o++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = r(10),
      i = r(1),
      n = r(11),
      s =
        ((l.prototype.setMmlFactory = function (t) {
          this.factory = t;
        }),
        (l.prototype.compile = function (t) {
          var e = this.makeNode(t);
          return (
            e.verifyTree(this.options.verify),
            e.setInheritedAttributes({}, !1, 0, !1),
            e.walkTree(this.markMrows),
            e
          );
        }),
        (l.prototype.makeNode = function (t) {
          var e,
            r,
            o = !1,
            a = "",
            i = this.adaptor.kind(t).replace(/^.*:/, "");
          try {
            for (
              var n = c(this.adaptor.allClasses(t)), s = n.next();
              !s.done;
              s = n.next()
            ) {
              var l = s.value;
              l.match(/^MJX-TeXAtom-/)
                ? ((a = l.substr(12)), (i = "TeXAtom"))
                : "MJX-fixedlimits" === l && (o = !0);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          this.factory.getNodeClass(i) ||
            this.error('Unknown node type "' + i + '"');
          var u = this.factory.create(i);
          return (
            a && this.texAtom(u, a, o),
            this.addAttributes(u, t),
            this.checkClass(u, t),
            this.addChildren(u, t),
            u
          );
        }),
        (l.prototype.addAttributes = function (t, e) {
          var r, o;
          try {
            for (
              var a = c(this.adaptor.allAttributes(e)), i = a.next();
              !i.done;
              i = a.next()
            ) {
              var n = i.value,
                s = n.name;
              if ("class" !== s) {
                var l = this.filterAttribute(s, n.value);
                if (null !== l) {
                  var u = l.toLowerCase();
                  "true" === u || "false" === u
                    ? t.attributes.set(s, "true" === u)
                    : t.attributes.set(s, l);
                }
              }
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              i && !i.done && (o = a.return) && o.call(a);
            } finally {
              if (r) throw r.error;
            }
          }
        }),
        (l.prototype.filterAttribute = function (t, e) {
          return e;
        }),
        (l.prototype.addChildren = function (t, e) {
          var r, o;
          if (0 !== t.arity)
            try {
              for (
                var a = c(this.adaptor.childNodes(e)), i = a.next();
                !i.done;
                i = a.next()
              ) {
                var n = i.value,
                  s = this.adaptor.kind(n);
                if ("#comment" !== s)
                  if ("#text" === s) this.addText(t, n);
                  else if (t.isKind("annotation-xml"))
                    t.appendChild(this.factory.create("XML").setXML(n));
                  else {
                    var l = t.appendChild(this.makeNode(n));
                    0 === l.arity &&
                      this.adaptor.childNodes(n).length &&
                      (this.options.fixMisplacedChildren
                        ? this.addChildren(t, n)
                        : l.mError(
                            "There should not be children for " +
                              l.kind +
                              " nodes",
                            this.options.verify,
                            !0
                          ));
                  }
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                i && !i.done && (o = a.return) && o.call(a);
              } finally {
                if (r) throw r.error;
              }
            }
        }),
        (l.prototype.addText = function (t, e) {
          var r = this.adaptor.value(e);
          (t.isToken || t.getProperty("isChars")) && t.arity
            ? (t.isToken && ((r = n.translate(r)), (r = this.trimSpace(r))),
              t.appendChild(this.factory.create("text").setText(r)))
            : r.match(/\S/) && this.error('Unexpected text node "' + r + '"');
        }),
        (l.prototype.checkClass = function (t, e) {
          var r,
            o,
            a = [];
          try {
            for (
              var i = c(this.adaptor.allClasses(e)), n = i.next();
              !n.done;
              n = i.next()
            ) {
              var s = n.value;
              "MJX-" === s.substr(0, 4)
                ? "MJX-variant" === s
                  ? t.setProperty("variantForm", !0)
                  : "MJX-TeXAtom" !== s.substr(0, 11) &&
                    t.attributes.set("mathvariant", s.substr(3))
                : a.push(s);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              n && !n.done && (o = i.return) && o.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
          a.length && t.attributes.set("class", a.join(" "));
        }),
        (l.prototype.texAtom = function (t, e, r) {
          (t.texClass = a.TEXCLASS[e]),
            "OP" !== e ||
              r ||
              (t.setProperty("movesupsub", !0),
              t.attributes.setInherited("movablelimits", !0));
        }),
        (l.prototype.markMrows = function (t) {
          if (t.isKind("mrow") && !t.isInferred && 2 <= t.childNodes.length) {
            var e = t.childNodes[0],
              r = t.childNodes[t.childNodes.length - 1];
            e.isKind("mo") &&
              e.attributes.get("fence") &&
              r.isKind("mo") &&
              r.attributes.get("fence") &&
              (e.childNodes.length && t.setProperty("open", e.getText()),
              r.childNodes.length && t.setProperty("close", r.getText()));
          }
        }),
        (l.prototype.trimSpace = function (t) {
          return t
            .replace(/[\t\n\r]/g, " ")
            .trim()
            .replace(/  +/g, " ");
        }),
        (l.prototype.error = function (t) {
          throw new Error(t);
        }),
        (l.OPTIONS = {
          MmlFactory: null,
          fixMisplacedChildren: !0,
          verify: {},
          translateEntities: !0,
        }),
        (l.VERIFY = o({}, a.AbstractMmlNode.verifyDefaults)),
        l);
    function l(t) {
      void 0 === t && (t = {});
      var e = this.constructor;
      (this.options = i.userOptions(i.defaultOptions({}, e.OPTIONS), t)),
        this.options.verify &&
          (this.options.verify = i.userOptions(
            i.defaultOptions({}, e.VERIFY),
            this.options.verify
          ));
    }
    e.MathMLCompile = s;
  },
  function (t, e, r) {
    "use strict";
    r(5);
    var o = r(0);
    MathJax.startup &&
      (MathJax.startup.registerConstructor("mml", o.MathML),
      MathJax.startup.useInput("mml"));
  },
  function (t, e, r) {
    "use strict";
    var o = r(6),
      a = s(r(0)),
      i = s(r(2)),
      n = s(r(3));
    function s(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return (e.default = t), e;
    }
    (0, o.combineWithMathJax)({
      _: {
        input: { mathml_ts: a, mathml: { FindMathML: i, MathMLCompile: n } },
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
      (e.FunctionList = MathJax._.util.FunctionList.FunctionList);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractFindMath = MathJax._.core.FindMath.AbstractFindMath);
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
      (e.options = MathJax._.util.Entities.options),
      (e.entities = MathJax._.util.Entities.entities),
      (e.add = MathJax._.util.Entities.add),
      (e.remove = MathJax._.util.Entities.remove),
      (e.translate = MathJax._.util.Entities.translate),
      (e.numeric = MathJax._.util.Entities.numeric);
  },
]);
