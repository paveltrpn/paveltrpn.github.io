!(function (r) {
  var n = {};
  function o(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = r),
    (o.c = n),
    (o.d = function (t, e, r) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 64));
})([
  function (t, a, e) {
    "use strict";
    var n,
      r =
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
      l =
        (this && this.__assign) ||
        function () {
          return (l =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
      d =
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
      y =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        };
    Object.defineProperty(a, "__esModule", { value: !0 });
    var o = e(2),
      i = e(10);
    (a.TEXCLASS = {
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
    }),
      (a.TEXCLASSNAMES = [
        "ORD",
        "OP",
        "BIN",
        "REL",
        "OPEN",
        "CLOSE",
        "PUNCT",
        "INNER",
        "VCENTER",
      ]);
    var s = ["", "thinmathspace", "mediummathspace", "thickmathspace"],
      u = [
        [0, -1, 2, 3, 0, 0, 0, 1],
        [-1, -1, 0, 3, 0, 0, 0, 1],
        [2, 2, 0, 0, 2, 0, 0, 2],
        [3, 3, 0, 0, 3, 0, 0, 3],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, -1, 2, 3, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1],
        [1, -1, 2, 3, 1, 0, 1, 1],
      ];
    a.indentAttributes = [
      "indentalign",
      "indentalignfirst",
      "indentshift",
      "indentshiftfirst",
    ];
    var c,
      p =
        ((c = i.AbstractNode),
        r(O, c),
        Object.defineProperty(O.prototype, "isToken", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "isEmbellished", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "isSpacelike", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "linebreakContainer", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "hasNewLine", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "arity", {
          get: function () {
            return 1 / 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "isInferred", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "Parent", {
          get: function () {
            for (var t = this.parent; t && t.notParent; ) t = t.Parent;
            return t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "notParent", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (O.prototype.setChildren = function (t) {
          return this.arity < 0
            ? this.childNodes[0].setChildren(t)
            : c.prototype.setChildren.call(this, t);
        }),
        (O.prototype.appendChild = function (t) {
          return this.arity < 0
            ? (this.childNodes[0].appendChild(t), t)
            : c.prototype.appendChild.call(this, t);
        }),
        (O.prototype.replaceChild = function (t, e) {
          return this.arity < 0
            ? (this.childNodes[0].replaceChild(t, e), t)
            : c.prototype.replaceChild.call(this, t, e);
        }),
        (O.prototype.core = function () {
          return this;
        }),
        (O.prototype.coreMO = function () {
          return this;
        }),
        (O.prototype.coreIndex = function () {
          return 0;
        }),
        (O.prototype.childPosition = function () {
          for (var e, t, r = this, n = r.parent; n && n.notParent; )
            n = (r = n).parent;
          if (n) {
            var o = 0;
            try {
              for (
                var i = d(n.childNodes), s = i.next();
                !s.done;
                s = i.next()
              ) {
                if (s.value === r) return o;
                o++;
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                s && !s.done && (t = i.return) && t.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
          }
          return null;
        }),
        (O.prototype.setTeXclass = function (t) {
          return this.getPrevClass(t), null != this.texClass ? this : t;
        }),
        (O.prototype.updateTeXclass = function (t) {
          t &&
            ((this.prevClass = t.prevClass),
            (this.prevLevel = t.prevLevel),
            (t.prevClass = t.prevLevel = null),
            (this.texClass = t.texClass));
        }),
        (O.prototype.getPrevClass = function (t) {
          t &&
            ((this.prevClass = t.texClass),
            (this.prevLevel = t.attributes.get("scriptlevel")));
        }),
        (O.prototype.texSpacing = function () {
          var t = null != this.prevClass ? this.prevClass : a.TEXCLASS.NONE,
            e = this.texClass || a.TEXCLASS.ORD;
          if (t === a.TEXCLASS.NONE || e === a.TEXCLASS.NONE) return "";
          t === a.TEXCLASS.VCENTER && (t = a.TEXCLASS.ORD),
            e === a.TEXCLASS.VCENTER && (e = a.TEXCLASS.ORD);
          var r = u[t][e];
          return 0 < this.prevLevel &&
            0 < this.attributes.get("scriptlevel") &&
            0 <= r
            ? ""
            : s[Math.abs(r)];
        }),
        (O.prototype.hasSpacingAttributes = function () {
          return this.isEmbellished && this.coreMO().hasSpacingAttributes();
        }),
        (O.prototype.setInheritedAttributes = function (t, e, r, n) {
          var o, i;
          void 0 === t && (t = {}),
            void 0 === e && (e = !1),
            void 0 === r && (r = 0),
            void 0 === n && (n = !1);
          var s = this.attributes.getAllDefaults();
          try {
            for (
              var a = d(Object.keys(t)), l = a.next();
              !l.done;
              l = a.next()
            ) {
              var u = l.value;
              if (s.hasOwnProperty(u)) {
                var c = y(t[u], 2),
                  p = c[0],
                  f = c[1];
                ((O.noInherit[p] || {})[this.kind] || {})[u] ||
                  this.attributes.setInherited(u, f);
              }
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              l && !l.done && (i = a.return) && i.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
          void 0 === this.attributes.getExplicit("displaystyle") &&
            this.attributes.setInherited("displaystyle", e),
            void 0 === this.attributes.getExplicit("scriptlevel") &&
              this.attributes.setInherited("scriptlevel", r),
            n && this.setProperty("texprimestyle", n);
          var h = this.arity;
          if (
            0 <= h &&
            h !== 1 / 0 &&
            ((1 === h && 0 === this.childNodes.length) ||
              (1 !== h && this.childNodes.length !== h))
          )
            if (h < this.childNodes.length)
              this.childNodes = this.childNodes.slice(0, h);
            else
              for (; this.childNodes.length < h; )
                this.appendChild(this.factory.create("mrow"));
          this.setChildInheritedAttributes(t, e, r, n);
        }),
        (O.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o, i;
          try {
            for (
              var s = d(this.childNodes), a = s.next();
              !a.done;
              a = s.next()
            )
              a.value.setInheritedAttributes(t, e, r, n);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              a && !a.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
        }),
        (O.prototype.addInheritedAttributes = function (t, e) {
          var r,
            n,
            o = l({}, t);
          try {
            for (
              var i = d(Object.keys(e)), s = i.next();
              !s.done;
              s = i.next()
            ) {
              var a = s.value;
              "displaystyle" !== a &&
                "scriptlevel" !== a &&
                "style" !== a &&
                (o[a] = [this.kind, e[a]]);
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
          return o;
        }),
        (O.prototype.inheritAttributesFrom = function (t) {
          var e = t.attributes,
            r = e.get("displaystyle"),
            n = e.get("scriptlevel"),
            o = e.isSet("mathsize")
              ? { mathsize: ["math", e.get("mathsize")] }
              : {},
            i = t.getProperty("texprimestyle") || !1;
          this.setInheritedAttributes(o, r, n, i);
        }),
        (O.prototype.verifyTree = function (t) {
          if ((void 0 === t && (t = null), null !== t)) {
            this.verifyAttributes(t);
            var e = this.arity;
            t.checkArity &&
              0 <= e &&
              e !== 1 / 0 &&
              ((1 === e && 0 === this.childNodes.length) ||
                (1 !== e && this.childNodes.length !== e)) &&
              this.mError(
                'Wrong number of children for "' + this.kind + '" node',
                t,
                !0
              ),
              this.verifyChildren(t);
          }
        }),
        (O.prototype.verifyAttributes = function (t) {
          var e, r;
          if (t.checkAttributes) {
            var n = this.attributes,
              o = [];
            try {
              for (
                var i = d(n.getExplicitNames()), s = i.next();
                !s.done;
                s = i.next()
              ) {
                var a = s.value;
                "data-" === a.substr(0, 5) ||
                  void 0 !== n.getDefault(a) ||
                  a.match(/^(?:class|style|id|(?:xlink:)?href)$/) ||
                  o.push(a);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                s && !s.done && (r = i.return) && r.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            o.length &&
              this.mError(
                "Unknown attributes for " +
                  this.kind +
                  " node: " +
                  o.join(", "),
                t
              );
          }
        }),
        (O.prototype.verifyChildren = function (t) {
          var e, r;
          try {
            for (
              var n = d(this.childNodes), o = n.next();
              !o.done;
              o = n.next()
            )
              o.value.verifyTree(t);
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (O.prototype.mError = function (t, e, r) {
          if (
            (void 0 === r && (r = !1),
            !this.parent || !this.parent.isKind("merror"))
          ) {
            var n = this.factory.create("merror");
            if (e.fullErrors || r) {
              var o = this.factory.create("mtext"),
                i = this.factory.create("text");
              i.setText(e.fullErrors ? t : this.kind),
                o.appendChild(i),
                n.appendChild(o),
                this.parent.replaceChild(n, this);
            } else this.parent.replaceChild(n, this), n.appendChild(this);
            return n;
          }
        }),
        (O.defaults = {
          mathbackground: o.INHERIT,
          mathcolor: o.INHERIT,
          mathsize: o.INHERIT,
          dir: o.INHERIT,
        }),
        (O.noInherit = {
          mstyle: {
            mpadded: {
              width: !0,
              height: !0,
              depth: !0,
              lspace: !0,
              voffset: !0,
            },
            mtable: { width: !0, height: !0, depth: !0, align: !0 },
          },
          maligngroup: { mrow: { groupalign: !0 }, mtable: { groupalign: !0 } },
        }),
        (O.verifyDefaults = {
          checkArity: !0,
          checkAttributes: !1,
          fullErrors: !1,
          fixMmultiscripts: !0,
          fixMtables: !0,
        }),
        O);
    function O(t, e, r) {
      void 0 === e && (e = {}), void 0 === r && (r = []);
      var n = c.call(this, t) || this;
      return (
        (n.texClass = null),
        (n.prevClass = null),
        (n.prevLevel = null),
        n.arity < 0 &&
          ((n.childNodes = [t.create("inferredMrow")]),
          (n.childNodes[0].parent = n)),
        n.setChildren(r),
        (n.attributes = new o.Attributes(
          t.getNodeClass(n.kind).defaults,
          t.getNodeClass("math").defaults
        )),
        n.attributes.setList(e),
        n
      );
    }
    a.AbstractMmlNode = p;
    var f,
      h =
        (r(M, (f = p)),
        Object.defineProperty(M.prototype, "isToken", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (M.prototype.getText = function () {
          var e,
            t,
            r = "";
          try {
            for (
              var n = d(this.childNodes), o = n.next();
              !o.done;
              o = n.next()
            ) {
              var i = o.value;
              i instanceof A && (r += i.getText());
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return r;
        }),
        (M.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o, i;
          try {
            for (
              var s = d(this.childNodes), a = s.next();
              !a.done;
              a = s.next()
            ) {
              var l = a.value;
              l instanceof p && l.setInheritedAttributes(t, e, r, n);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              a && !a.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
        }),
        (M.prototype.walkTree = function (t, e) {
          var r, n;
          t(this, e);
          try {
            for (
              var o = d(this.childNodes), i = o.next();
              !i.done;
              i = o.next()
            ) {
              var s = i.value;
              s instanceof p && s.walkTree(t, e);
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
          return e;
        }),
        (M.defaults = l(l({}, p.defaults), {
          mathvariant: "normal",
          mathsize: o.INHERIT,
        })),
        M);
    function M() {
      return (null !== f && f.apply(this, arguments)) || this;
    }
    a.AbstractMmlTokenNode = h;
    var E,
      b =
        (r(v, (E = p)),
        Object.defineProperty(v.prototype, "isSpacelike", {
          get: function () {
            return this.childNodes[0].isSpacelike;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(v.prototype, "isEmbellished", {
          get: function () {
            return this.childNodes[0].isEmbellished;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(v.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (v.prototype.core = function () {
          return this.childNodes[0];
        }),
        (v.prototype.coreMO = function () {
          return this.childNodes[0].coreMO();
        }),
        (v.prototype.setTeXclass = function (t) {
          return (
            (t = this.childNodes[0].setTeXclass(t)),
            this.updateTeXclass(this.childNodes[0]),
            t
          );
        }),
        (v.defaults = p.defaults),
        v);
    function v() {
      return (null !== E && E.apply(this, arguments)) || this;
    }
    a.AbstractMmlLayoutNode = b;
    var m,
      g =
        (r(L, (m = p)),
        Object.defineProperty(L.prototype, "isEmbellished", {
          get: function () {
            return this.childNodes[0].isEmbellished;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (L.prototype.core = function () {
          return this.childNodes[0];
        }),
        (L.prototype.coreMO = function () {
          return this.childNodes[0].coreMO();
        }),
        (L.prototype.setTeXclass = function (t) {
          var e, r;
          this.getPrevClass(t), (this.texClass = a.TEXCLASS.NONE);
          var n = this.childNodes[0];
          n
            ? this.isEmbellished || n.isKind("mi")
              ? ((t = n.setTeXclass(t)), this.updateTeXclass(this.core()))
              : (n.setTeXclass(null), (t = this))
            : (t = this);
          try {
            for (
              var o = d(this.childNodes.slice(1)), i = o.next();
              !i.done;
              i = o.next()
            ) {
              var s = i.value;
              s && s.setTeXclass(null);
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
          return t;
        }),
        (L.defaults = p.defaults),
        L);
    function L() {
      return (null !== m && m.apply(this, arguments)) || this;
    }
    a.AbstractMmlBaseNode = g;
    var R,
      N =
        ((R = i.AbstractEmptyNode),
        r(T, R),
        Object.defineProperty(T.prototype, "isToken", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "isEmbellished", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "isSpacelike", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "linebreakContainer", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "hasNewLine", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "isInferred", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "notParent", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "Parent", {
          get: function () {
            return this.parent;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "texClass", {
          get: function () {
            return a.TEXCLASS.NONE;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "prevClass", {
          get: function () {
            return a.TEXCLASS.NONE;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(T.prototype, "prevLevel", {
          get: function () {
            return 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (T.prototype.hasSpacingAttributes = function () {
          return !1;
        }),
        Object.defineProperty(T.prototype, "attributes", {
          get: function () {
            return null;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (T.prototype.core = function () {
          return this;
        }),
        (T.prototype.coreMO = function () {
          return this;
        }),
        (T.prototype.coreIndex = function () {
          return 0;
        }),
        (T.prototype.childPosition = function () {
          return 0;
        }),
        (T.prototype.setTeXclass = function (t) {
          return t;
        }),
        (T.prototype.texSpacing = function () {
          return "";
        }),
        (T.prototype.setInheritedAttributes = function (t, e, r, n) {}),
        (T.prototype.inheritAttributesFrom = function (t) {}),
        (T.prototype.verifyTree = function (t) {}),
        (T.prototype.mError = function (t, e, r) {
          void 0 === r && (r = !1);
        }),
        T);
    function T() {
      return (null !== R && R.apply(this, arguments)) || this;
    }
    a.AbstractMmlEmptyNode = N;
    var _,
      A =
        (r(S, (_ = N)),
        Object.defineProperty(S.prototype, "kind", {
          get: function () {
            return "text";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (S.prototype.getText = function () {
          return this.text;
        }),
        (S.prototype.setText = function (t) {
          return (this.text = t), this;
        }),
        (S.prototype.toString = function () {
          return this.text;
        }),
        S);
    function S() {
      var t = (null !== _ && _.apply(this, arguments)) || this;
      return (t.text = ""), t;
    }
    a.TextNode = A;
    var C,
      I =
        (r(x, (C = N)),
        Object.defineProperty(x.prototype, "kind", {
          get: function () {
            return "XML";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (x.prototype.getXML = function () {
          return this.xml;
        }),
        (x.prototype.setXML = function (t) {
          return (this.xml = t), this;
        }),
        (x.prototype.toString = function () {
          return "XML data";
        }),
        x);
    function x() {
      var t = (null !== C && C.apply(this, arguments)) || this;
      return (t.xml = null), t;
    }
    a.XMLNode = I;
  },
  function (t, l, e) {
    "use strict";
    var O =
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
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      u =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(r(arguments[e]));
          return t;
        };
    Object.defineProperty(l, "__esModule", { value: !0 });
    var n = {}.constructor;
    function c(t) {
      return "object" == typeof t && null !== t && t.constructor === n;
    }
    (l.APPEND = "[+]"), (l.REMOVE = "[-]");
    var p = function () {};
    function f(t) {
      return t ? Object.keys(t).concat(Object.getOwnPropertySymbols(t)) : [];
    }
    function h(t) {
      var e,
        r,
        n = {};
      try {
        for (var o = O(f(t)), i = o.next(); !i.done; i = o.next()) {
          var s = i.value,
            a = Object.getOwnPropertyDescriptor(t, s),
            l = a.value;
          Array.isArray(l)
            ? (a.value = d([], l, !1))
            : c(l) && (a.value = h(l)),
            a.enumerable && (n[s] = a);
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
      return Object.defineProperties({}, n);
    }
    function d(o, i, s) {
      var e, t;
      void 0 === s && (s = !0);
      function r(t) {
        if (s && void 0 === o[t] && !(o instanceof p))
          throw (
            ("symbol" == typeof t && (t = t.toString()),
            new Error('Invalid option "' + t + '" (no default value).'))
          );
        var e = i[t],
          r = o[t];
        if (
          !c(e) ||
          null === r ||
          ("object" != typeof r && "function" != typeof r)
        )
          Array.isArray(e)
            ? ((o[t] = []), d(o[t], e, !1))
            : c(e)
            ? (o[t] = h(e))
            : (o[t] = e);
        else {
          var n = f(e);
          Array.isArray(r) &&
          ((1 === n.length &&
            (n[0] === l.APPEND || n[0] === l.REMOVE) &&
            Array.isArray(e[n[0]])) ||
            (2 === n.length &&
              n.sort().join(",") === l.APPEND + "," + l.REMOVE &&
              Array.isArray(e[l.APPEND]) &&
              Array.isArray(e[l.REMOVE])))
            ? (e[l.REMOVE] &&
                (r = o[t] =
                  r.filter(function (t) {
                    return e[l.REMOVE].indexOf(t) < 0;
                  })),
              e[l.APPEND] && (o[t] = u(r, e[l.APPEND])))
            : d(r, e, s);
        }
      }
      try {
        for (var n = O(f(i)), a = n.next(); !a.done; a = n.next()) {
          r(a.value);
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
      return o;
    }
    function o(t) {
      for (var e, r, n = [], o = 1; o < arguments.length; o++)
        n[o - 1] = arguments[o];
      var i = {};
      try {
        for (var s = O(n), a = s.next(); !a.done; a = s.next()) {
          var l = a.value;
          t.hasOwnProperty(l) && (i[l] = t[l]);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          a && !a.done && (r = s.return) && r.call(s);
        } finally {
          if (e) throw e.error;
        }
      }
      return i;
    }
    (l.Expandable = p),
      (l.expandable = function (t) {
        return Object.assign(Object.create(p.prototype), t);
      }),
      (l.makeArray = function (t) {
        return Array.isArray(t) ? t : [t];
      }),
      (l.keys = f),
      (l.copy = h),
      (l.insert = d),
      (l.defaultOptions = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return (
          t.forEach(function (t) {
            return d(e, t, !1);
          }),
          e
        );
      }),
      (l.userOptions = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return (
          t.forEach(function (t) {
            return d(e, t, !0);
          }),
          e
        );
      }),
      (l.selectOptions = o),
      (l.selectOptionsFromKeys = function (t, e) {
        return o.apply(void 0, u([t], Object.keys(e)));
      }),
      (l.separateOptions = function (t) {
        for (var e, r, n, o, i = [], s = 1; s < arguments.length; s++)
          i[s - 1] = arguments[s];
        var a = [];
        try {
          for (var l = O(i), u = l.next(); !u.done; u = l.next()) {
            var c = u.value,
              p = {},
              f = {};
            try {
              for (
                var h = ((n = void 0), O(Object.keys(t || {}))), d = h.next();
                !d.done;
                d = h.next()
              ) {
                var y = d.value;
                (void 0 === c[y] ? f : p)[y] = t[y];
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                d && !d.done && (o = h.return) && o.call(h);
              } finally {
                if (n) throw n.error;
              }
            }
            a.push(p), (t = f);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            u && !u.done && (r = l.return) && r.call(l);
          } finally {
            if (e) throw e.error;
          }
        }
        return a.unshift(t), a;
      });
  },
  function (t, r, e) {
    "use strict";
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
      };
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.INHERIT = "_inherit_");
    var n =
      ((o.prototype.set = function (t, e) {
        this.attributes[t] = e;
      }),
      (o.prototype.setList = function (t) {
        Object.assign(this.attributes, t);
      }),
      (o.prototype.get = function (t) {
        var e = this.attributes[t];
        return e === r.INHERIT && (e = this.global[t]), e;
      }),
      (o.prototype.getExplicit = function (t) {
        if (this.attributes.hasOwnProperty(t)) return this.attributes[t];
      }),
      (o.prototype.getList = function () {
        for (var e, t, r = [], n = 0; n < arguments.length; n++)
          r[n] = arguments[n];
        var o = {};
        try {
          for (var i = l(r), s = i.next(); !s.done; s = i.next()) {
            var a = s.value;
            o[a] = this.get(a);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            s && !s.done && (t = i.return) && t.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return o;
      }),
      (o.prototype.setInherited = function (t, e) {
        this.inherited[t] = e;
      }),
      (o.prototype.getInherited = function (t) {
        return this.inherited[t];
      }),
      (o.prototype.getDefault = function (t) {
        return this.defaults[t];
      }),
      (o.prototype.isSet = function (t) {
        return (
          this.attributes.hasOwnProperty(t) || this.inherited.hasOwnProperty(t)
        );
      }),
      (o.prototype.hasDefault = function (t) {
        return t in this.defaults;
      }),
      (o.prototype.getExplicitNames = function () {
        return Object.keys(this.attributes);
      }),
      (o.prototype.getInheritedNames = function () {
        return Object.keys(this.inherited);
      }),
      (o.prototype.getDefaultNames = function () {
        return Object.keys(this.defaults);
      }),
      (o.prototype.getGlobalNames = function () {
        return Object.keys(this.global);
      }),
      (o.prototype.getAllAttributes = function () {
        return this.attributes;
      }),
      (o.prototype.getAllInherited = function () {
        return this.inherited;
      }),
      (o.prototype.getAllDefaults = function () {
        return this.defaults;
      }),
      (o.prototype.getAllGlobals = function () {
        return this.global;
      }),
      o);
    function o(t, e) {
      (this.global = e),
        (this.defaults = Object.create(e)),
        (this.inherited = Object.create(this.defaults)),
        (this.attributes = Object.create(this.inherited)),
        Object.assign(this.defaults, t);
    }
    r.Attributes = n;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
      ((o.prototype[Symbol.iterator] = function () {
        var t = 0,
          e = this.items;
        return {
          next: function () {
            return { value: e[t++], done: t > e.length };
          },
        };
      }),
      (o.prototype.add = function (t, e) {
        void 0 === e && (e = o.DEFAULTPRIORITY);
        for (
          var r = this.items.length;
          0 <= --r && e < this.items[r].priority;

        );
        return this.items.splice(r + 1, 0, { item: t, priority: e }), t;
      }),
      (o.prototype.remove = function (t) {
        for (var e = this.items.length; 0 <= --e && this.items[e].item !== t; );
        0 <= e && this.items.splice(e, 1);
      }),
      (o.prototype.toArray = function () {
        return Array.from(this);
      }),
      (o.DEFAULTPRIORITY = 5),
      o);
    function o() {
      (this.items = []), (this.items = []);
    }
    e.PrioritizedList = n;
  },
  function (t, i, e) {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      (i.protoItem = function (t, e, r, n, o, i, s) {
        return (
          void 0 === s && (s = null),
          {
            open: t,
            math: e,
            close: r,
            n: n,
            start: { n: o },
            end: { n: i },
            display: s,
          }
        );
      });
    var r =
      ((n.prototype.render = function (t) {
        t.renderActions.renderMath(this, t);
      }),
      (n.prototype.rerender = function (t, e) {
        void 0 === e && (e = i.STATE.RERENDER),
          this.state() >= e && this.state(e - 1),
          t.renderActions.renderMath(this, t, e);
      }),
      (n.prototype.convert = function (t, e) {
        void 0 === e && (e = i.STATE.LAST),
          t.renderActions.renderConvert(this, t, e);
      }),
      (n.prototype.compile = function (t) {
        this.state() < i.STATE.COMPILED &&
          ((this.root = this.inputJax.compile(this, t)),
          this.state(i.STATE.COMPILED));
      }),
      (n.prototype.typeset = function (t) {
        this.state() < i.STATE.TYPESET &&
          ((this.typesetRoot = t.outputJax[
            null === this.display ? "escaped" : "typeset"
          ](this, t)),
          this.state(i.STATE.TYPESET));
      }),
      (n.prototype.updateDocument = function (t) {}),
      (n.prototype.removeFromDocument = function (t) {
        void 0 === t && (t = !1);
      }),
      (n.prototype.setMetrics = function (t, e, r, n, o) {
        this.metrics = {
          em: t,
          ex: e,
          containerWidth: r,
          lineWidth: n,
          scale: o,
        };
      }),
      (n.prototype.state = function (t, e) {
        return (
          void 0 === t && (t = null),
          void 0 === e && (e = !1),
          null != t &&
            (t < i.STATE.INSERTED &&
              this._state >= i.STATE.INSERTED &&
              this.removeFromDocument(e),
            t < i.STATE.TYPESET &&
              this._state >= i.STATE.TYPESET &&
              ((this.bbox = {}), (this.outputData = {})),
            t < i.STATE.COMPILED &&
              this._state >= i.STATE.COMPILED &&
              (this.inputData = {}),
            (this._state = t)),
          this._state
        );
      }),
      (n.prototype.reset = function (t) {
        void 0 === t && (t = !1), this.state(i.STATE.UNPROCESSED);
      }),
      n);
    function n(t, e, r, n, o) {
      void 0 === r && (r = !0),
        void 0 === n && (n = { i: 0, n: 0, delim: "" }),
        void 0 === o && (o = { i: 0, n: 0, delim: "" }),
        (this.root = null),
        (this.typesetRoot = null),
        (this._state = i.STATE.UNPROCESSED),
        (this.metrics = {}),
        (this.bbox = {}),
        (this.inputData = {}),
        (this.outputData = {}),
        (this.math = t),
        (this.inputJax = e),
        (this.display = r),
        (this.start = n),
        (this.end = o),
        (this.root = null),
        (this.typesetRoot = null),
        (this.metrics = {}),
        (this.bbox = {}),
        (this.inputData = {}),
        (this.outputData = {});
    }
    (i.AbstractMathItem = r),
      (i.STATE = {
        UNPROCESSED: 0,
        FINDMATH: 10,
        COMPILED: 20,
        CONVERT: 100,
        METRICS: 110,
        RERENDER: 125,
        TYPESET: 150,
        INSERTED: 200,
        RESET: 500,
        LAST: 1e4,
      }),
      (i.newState = function (t, e) {
        if (t in i.STATE) throw Error("State " + t + " already exists");
        i.STATE[t] = e;
      });
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      p =
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
      h =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      d = r(1),
      s = r(22),
      a = r(23),
      l = r(7),
      y = r(4),
      u = r(8),
      c = r(56),
      f = r(3),
      O =
        ((i = f.PrioritizedList),
        o(M, i),
        (M.create = function (t) {
          var e,
            r,
            n = new this();
          try {
            for (
              var o = p(Object.keys(t)), i = o.next();
              !i.done;
              i = o.next()
            ) {
              var s = i.value,
                a = h(this.action(s, t[s]), 2),
                l = a[0],
                u = a[1];
              u && n.add(l, u);
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
        (M.action = function (t, e) {
          var r,
            n,
            o,
            i,
            s,
            a,
            l = !0,
            u = e[0];
          if (1 === e.length || "boolean" == typeof e[1])
            2 === e.length && (l = e[1]),
              (s = (r = h(this.methodActions(t), 2))[0]),
              (a = r[1]);
          else if ("string" == typeof e[1])
            if ("string" == typeof e[2]) {
              4 === e.length && (l = e[3]);
              var c = h(e.slice(1), 2),
                p = c[0],
                f = c[1];
              (s = (n = h(this.methodActions(p, f), 2))[0]), (a = n[1]);
            } else
              3 === e.length && (l = e[2]),
                (s = (o = h(this.methodActions(e[1]), 2))[0]),
                (a = o[1]);
          else
            4 === e.length && (l = e[3]),
              (s = (i = h(e.slice(1), 2))[0]),
              (a = i[1]);
          return [{ id: t, renderDoc: s, renderMath: a, convert: l }, u];
        }),
        (M.methodActions = function (e, r) {
          return (
            void 0 === r && (r = e),
            [
              function (t) {
                return e && t[e](), !1;
              },
              function (t, e) {
                return r && t[r](e), !1;
              },
            ]
          );
        }),
        (M.prototype.renderDoc = function (t, e) {
          var r, n;
          void 0 === e && (e = y.STATE.UNPROCESSED);
          try {
            for (var o = p(this.items), i = o.next(); !i.done; i = o.next()) {
              var s = i.value;
              if (s.priority >= e && s.item.renderDoc(t)) return;
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
        }),
        (M.prototype.renderMath = function (t, e, r) {
          var n, o;
          void 0 === r && (r = y.STATE.UNPROCESSED);
          try {
            for (var i = p(this.items), s = i.next(); !s.done; s = i.next()) {
              var a = s.value;
              if (a.priority >= r && a.item.renderMath(t, e)) return;
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              s && !s.done && (o = i.return) && o.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
        }),
        (M.prototype.renderConvert = function (t, e, r) {
          var n, o;
          void 0 === r && (r = y.STATE.LAST);
          try {
            for (var i = p(this.items), s = i.next(); !s.done; s = i.next()) {
              var a = s.value;
              if (a.priority >= r) return;
              if (a.item.convert && a.item.renderMath(t, e)) return;
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              s && !s.done && (o = i.return) && o.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
        }),
        (M.prototype.findID = function (t) {
          var e, r;
          try {
            for (var n = p(this.items), o = n.next(); !o.done; o = n.next()) {
              var i = o.value;
              if (i.item.id === t) return i.item;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return null;
        }),
        M);
    function M() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.RenderList = O;
    var E,
      b =
        ((E = s.AbstractInputJax),
        o(v, E),
        (v.prototype.compile = function (t) {
          return null;
        }),
        v);
    function v() {
      return (null !== E && E.apply(this, arguments)) || this;
    }
    var m,
      g =
        ((m = a.AbstractOutputJax),
        o(L, m),
        (L.prototype.typeset = function (t, e) {
          return void 0 === e && (e = null), null;
        }),
        (L.prototype.escaped = function (t, e) {
          return null;
        }),
        L);
    function L() {
      return (null !== m && m.apply(this, arguments)) || this;
    }
    var R,
      N = ((R = l.AbstractMathList), o(T, R), T);
    function T() {
      return (null !== R && R.apply(this, arguments)) || this;
    }
    var _,
      A = ((_ = y.AbstractMathItem), o(S, _), S);
    function S() {
      return (null !== _ && _.apply(this, arguments)) || this;
    }
    var C =
      (Object.defineProperty(I.prototype, "kind", {
        get: function () {
          return this.constructor.KIND;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (I.prototype.addRenderAction = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        var n = h(O.action(t, e), 2),
          o = n[0],
          i = n[1];
        this.renderActions.add(o, i);
      }),
      (I.prototype.removeRenderAction = function (t) {
        var e = this.renderActions.findID(t);
        e && this.renderActions.remove(e);
      }),
      (I.prototype.render = function () {
        return this.renderActions.renderDoc(this), this;
      }),
      (I.prototype.rerender = function (t) {
        return (
          void 0 === t && (t = y.STATE.RERENDER),
          this.state(t - 1),
          this.render(),
          this
        );
      }),
      (I.prototype.convert = function (t, e) {
        void 0 === e && (e = {});
        var r = d.userOptions(
            {
              format: this.inputJax[0].name,
              display: !0,
              end: y.STATE.LAST,
              em: 16,
              ex: 8,
              containerWidth: null,
              lineWidth: 1e6,
              scale: 1,
            },
            e
          ),
          n = r.format,
          o = r.display,
          i = r.end,
          s = r.ex,
          a = r.em,
          l = r.containerWidth,
          u = r.lineWidth,
          c = r.scale;
        null === l && (l = 80 * s);
        var p = this.inputJax.reduce(function (t, e) {
            return e.name === n ? e : t;
          }, null),
          f = new this.options.MathItem(t, p, o);
        return (
          f.setMetrics(a, s, l, u, c),
          f.convert(this, i),
          f.typesetRoot || f.root
        );
      }),
      (I.prototype.findMath = function (t) {
        return void 0 === t && (t = null), this.processed.set("findMath"), this;
      }),
      (I.prototype.compile = function () {
        var e, t, r, n;
        if (!this.processed.isSet("compile")) {
          var o = [];
          try {
            for (var i = p(this.math), s = i.next(); !s.done; s = i.next()) {
              var a = s.value;
              this.compileMath(a),
                void 0 !== a.inputData.recompile && o.push(a);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (t = i.return) && t.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          try {
            for (var l = p(o), u = l.next(); !u.done; u = l.next()) {
              var c = (a = u.value).inputData.recompile;
              a.state(c.state),
                (a.inputData.recompile = c),
                this.compileMath(a);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              u && !u.done && (n = l.return) && n.call(l);
            } finally {
              if (r) throw r.error;
            }
          }
          this.processed.set("compile");
        }
        return this;
      }),
      (I.prototype.compileMath = function (e) {
        try {
          e.compile(this);
        } catch (t) {
          if (t.retry || t.restart) throw t;
          this.options.compileError(this, e, t), (e.inputData.error = t);
        }
      }),
      (I.prototype.compileError = function (t, e) {
        (t.root = this.mmlFactory.create("math", null, [
          this.mmlFactory.create("merror", { "data-mjx-error": e.message }, [
            this.mmlFactory.create("mtext", null, [
              this.mmlFactory.create("text").setText("Math input error"),
            ]),
          ]),
        ])),
          t.display && t.root.attributes.set("display", "block");
      }),
      (I.prototype.typeset = function () {
        var e, t;
        if (!this.processed.isSet("typeset")) {
          try {
            for (var r = p(this.math), n = r.next(); !n.done; n = r.next()) {
              var o = n.value;
              try {
                o.typeset(this);
              } catch (t) {
                if (t.retry || t.restart) throw t;
                this.options.typesetError(this, o, t), (o.outputData.error = t);
              }
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
          this.processed.set("typeset");
        }
        return this;
      }),
      (I.prototype.typesetError = function (t, e) {
        t.typesetRoot = this.adaptor.node(
          "span",
          { "data-mjx-error": e.message },
          [this.adaptor.text("Math output error")]
        );
      }),
      (I.prototype.getMetrics = function () {
        return (
          this.processed.isSet("getMetrics") ||
            (this.outputJax.getMetrics(this), this.processed.set("getMetrics")),
          this
        );
      }),
      (I.prototype.updateDocument = function () {
        var e, t;
        if (!this.processed.isSet("updateDocument")) {
          try {
            for (
              var r = p(this.math.reversed()), n = r.next();
              !n.done;
              n = r.next()
            )
              n.value.updateDocument(this);
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              n && !n.done && (t = r.return) && t.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
          this.processed.set("updateDocument");
        }
        return this;
      }),
      (I.prototype.removeFromDocument = function (t) {
        return void 0 === t && (t = !1), this;
      }),
      (I.prototype.state = function (t, e) {
        var r, n;
        void 0 === e && (e = !1);
        try {
          for (var o = p(this.math), i = o.next(); !i.done; i = o.next())
            i.value.state(t, e);
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
        return (
          t < y.STATE.INSERTED && this.processed.clear("updateDocument"),
          t < y.STATE.TYPESET &&
            (this.processed.clear("typeset"),
            this.processed.clear("getMetrics")),
          t < y.STATE.COMPILED && this.processed.clear("compile"),
          this
        );
      }),
      (I.prototype.reset = function () {
        return this.processed.reset(), this;
      }),
      (I.prototype.clear = function () {
        return this.reset(), this.math.clear(), this;
      }),
      (I.prototype.concat = function (t) {
        return this.math.merge(t), this;
      }),
      (I.KIND = "MathDocument"),
      (I.OPTIONS = {
        OutputJax: null,
        InputJax: null,
        MmlFactory: null,
        MathList: N,
        MathItem: A,
        compileError: function (t, e, r) {
          t.compileError(e, r);
        },
        typesetError: function (t, e, r) {
          t.typesetError(e, r);
        },
        renderActions: d.expandable({
          find: [
            y.STATE.FINDMATH,
            function (t) {
              var e = t.options.elements;
              t.findMath(e ? { elements: e } : {});
            },
            function () {},
            !1,
          ],
          compile: [y.STATE.COMPILED],
          metrics: [y.STATE.METRICS, "getMetrics", "", !1],
          typeset: [y.STATE.TYPESET],
          update: [y.STATE.INSERTED, "updateDocument", !1],
          reset: [y.STATE.RESET, "reset", "", !1],
        }),
      }),
      (I.ProcessBits = c.BitFieldClass(
        "findMath",
        "compile",
        "getMetrics",
        "typeset",
        "updateDocument"
      )),
      I);
    function I(t, e, r) {
      var n = this,
        o = this.constructor;
      (this.document = t),
        (this.options = d.userOptions(d.defaultOptions({}, o.OPTIONS), r)),
        (this.math = new (this.options.MathList || N)()),
        (this.renderActions = O.create(this.options.renderActions)),
        (this.processed = new I.ProcessBits()),
        (this.outputJax = this.options.OutputJax || new g());
      var i = this.options.InputJax || [new b()];
      Array.isArray(i) || (i = [i]),
        (this.inputJax = i),
        (this.adaptor = e),
        this.outputJax.setAdaptor(e),
        this.inputJax.map(function (t) {
          return t.setAdaptor(e);
        }),
        (this.mmlFactory = this.options.MmlFactory || new u.MmlFactory()),
        this.inputJax.map(function (t) {
          return t.setMmlFactory(n.mmlFactory);
        }),
        this.outputJax.initialize(),
        this.inputJax.map(function (t) {
          return t.initialize();
        });
    }
    e.AbstractMathDocument = C;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      a =
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
      i =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      l =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(i(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      u = r(3),
      c =
        ((s = u.PrioritizedList),
        o(p, s),
        (p.prototype.execute = function () {
          for (var e, t, r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          try {
            for (var o = a(this), i = o.next(); !i.done; i = o.next()) {
              var s = i.value;
              if (!1 === s.item.apply(s, l(r))) return !1;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              i && !i.done && (t = o.return) && t.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          return !0;
        }),
        (p.prototype.asyncExecute = function () {
          for (var i = [], t = 0; t < arguments.length; t++)
            i[t] = arguments[t];
          var s = -1,
            a = this.items;
          return new Promise(function (n, o) {
            !(function t() {
              for (var e; ++s < a.length; ) {
                var r = (e = a[s]).item.apply(e, l(i));
                if (r instanceof Promise)
                  return void r.then(t).catch(function (t) {
                    return o(t);
                  });
                if (!1 === r) return void n(!1);
              }
              n(!0);
            })();
          });
        }),
        p);
    function p() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.FunctionList = c;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
      s = r(24),
      a =
        ((i = s.LinkedList),
        o(l, i),
        (l.prototype.isBefore = function (t, e) {
          return (
            t.start.i < e.start.i ||
            (t.start.i === e.start.i && t.start.n < e.start.n)
          );
        }),
        l);
    function l() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.AbstractMathList = a;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
      s = r(25),
      a = r(26),
      l =
        ((i = s.AbstractNodeFactory),
        o(u, i),
        Object.defineProperty(u.prototype, "MML", {
          get: function () {
            return this.node;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaultNodes = a.MML),
        u);
    function u() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.MmlFactory = l;
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
        },
      n =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      o =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
      ((a.prototype.create = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        return (this.node[t] || this.node[this.defaultKind]).apply(
          void 0,
          o(e)
        );
      }),
      (a.prototype.setNodeClass = function (t, e) {
        this.nodeMap.set(t, e);
        var r = this,
          n = this.nodeMap.get(t);
        this.node[t] = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return new (n.bind.apply(n, o([void 0, r], t)))();
        };
      }),
      (a.prototype.getNodeClass = function (t) {
        return this.nodeMap.get(t);
      }),
      (a.prototype.deleteNodeClass = function (t) {
        this.nodeMap.delete(t), delete this.node[t];
      }),
      (a.prototype.nodeIsKind = function (t, e) {
        return t instanceof this.getNodeClass(e);
      }),
      (a.prototype.getKinds = function () {
        return Array.from(this.nodeMap.keys());
      }),
      (a.defaultNodes = {}),
      a);
    function a(t) {
      var e, r;
      void 0 === t && (t = null),
        (this.defaultKind = "unknown"),
        (this.nodeMap = new Map()),
        (this.node = {}),
        null === t && (t = this.constructor.defaultNodes);
      try {
        for (var n = s(Object.keys(t)), o = n.next(); !o.done; o = n.next()) {
          var i = o.value;
          this.setNodeClass(i, t[i]);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    e.AbstractFactory = i;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
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
    var i =
      (Object.defineProperty(s.prototype, "factory", {
        get: function () {
          return this._factory;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(s.prototype, "kind", {
        get: function () {
          return "unknown";
        },
        enumerable: !0,
        configurable: !0,
      }),
      (s.prototype.setProperty = function (t, e) {
        this.properties[t] = e;
      }),
      (s.prototype.getProperty = function (t) {
        return this.properties[t];
      }),
      (s.prototype.getPropertyNames = function () {
        return Object.keys(this.properties);
      }),
      (s.prototype.getAllProperties = function () {
        return this.properties;
      }),
      (s.prototype.removeProperty = function () {
        for (var e, t, r = [], n = 0; n < arguments.length; n++)
          r[n] = arguments[n];
        try {
          for (var o = l(r), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            delete this.properties[s];
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (t = o.return) && t.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (s.prototype.isKind = function (t) {
        return this.factory.nodeIsKind(this, t);
      }),
      (s.prototype.setChildren = function (t) {
        var e, r;
        this.childNodes = [];
        try {
          for (var n = l(t), o = n.next(); !o.done; o = n.next()) {
            var i = o.value;
            this.appendChild(i);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (s.prototype.appendChild = function (t) {
        return this.childNodes.push(t), (t.parent = this), t;
      }),
      (s.prototype.replaceChild = function (t, e) {
        var r = this.childIndex(e);
        return null !== r && ((this.childNodes[r] = t).parent = this), t;
      }),
      (s.prototype.childIndex = function (t) {
        var e = this.childNodes.indexOf(t);
        return -1 === e ? null : e;
      }),
      (s.prototype.findNodes = function (e) {
        var r = [];
        return (
          this.walkTree(function (t) {
            t.isKind(e) && r.push(t);
          }),
          r
        );
      }),
      (s.prototype.walkTree = function (t, e) {
        var r, n;
        t(this, e);
        try {
          for (
            var o = l(this.childNodes), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var s = i.value;
            s && s.walkTree(t, e);
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
        return e;
      }),
      (s.prototype.toString = function () {
        return this.kind + "(" + this.childNodes.join(",") + ")";
      }),
      s);
    function s(t, e, r) {
      var n, o;
      void 0 === e && (e = {}),
        void 0 === r && (r = []),
        (this.parent = null),
        (this.properties = {}),
        (this._factory = null),
        (this.childNodes = []),
        (this._factory = t);
      try {
        for (var i = l(Object.keys(e)), s = i.next(); !s.done; s = i.next()) {
          var a = s.value;
          this.setProperty(a, e[a]);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (o = i.return) && o.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      r.length && this.setChildren(r);
    }
    e.AbstractNode = i;
    var a,
      u =
        (o(c, (a = i)),
        (c.prototype.setChildren = function (t) {}),
        (c.prototype.appendChild = function (t) {
          return t;
        }),
        (c.prototype.replaceChild = function (t, e) {
          return e;
        }),
        (c.prototype.childIndex = function (t) {
          return null;
        }),
        (c.prototype.walkTree = function (t, e) {
          return t(this, e), e;
        }),
        (c.prototype.toString = function () {
          return this.kind;
        }),
        c);
    function c() {
      return (null !== a && a.apply(this, arguments)) || this;
    }
    e.AbstractEmptyNode = u;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
      E =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      b =
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
      s = r(0),
      a = r(30),
      l =
        ((v = s.AbstractMmlTokenNode),
        o(u, v),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mo";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "isEmbellished", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "hasNewLine", {
          get: function () {
            return "newline" === this.attributes.get("linebreak");
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.coreParent = function () {
          for (
            var t = this, e = this.factory.getNodeClass("math");
            t && t.isEmbellished && t.coreMO() === this && !(t instanceof e);

          )
            t = t.Parent;
          return t;
        }),
        (u.prototype.coreText = function (t) {
          if (!t) return "";
          if (t.isEmbellished) return t.coreMO().getText();
          for (
            ;
            (((t.isKind("mrow") ||
              t.isKind("TeXAtom") ||
              t.isKind("mstyle") ||
              t.isKind("mphantom")) &&
              1 === t.childNodes.length) ||
              t.isKind("munderover")) &&
            t.childNodes[0];

          )
            t = t.childNodes[0];
          return t.isToken ? t.getText() : "";
        }),
        (u.prototype.hasSpacingAttributes = function () {
          return (
            this.attributes.isSet("lspace") || this.attributes.isSet("rspace")
          );
        }),
        Object.defineProperty(u.prototype, "isAccent", {
          get: function () {
            var t = !1,
              e = this.coreParent();
            if (e) {
              var r = e.isKind("mover")
                ? e.childNodes[e.over].coreMO()
                  ? "accent"
                  : ""
                : e.isKind("munder")
                ? e.childNodes[e.under].coreMO()
                  ? "accentunder"
                  : ""
                : e.isKind("munderover")
                ? this === e.childNodes[e.over].coreMO()
                  ? "accent"
                  : this === e.childNodes[e.under].coreMO()
                  ? "accentunder"
                  : ""
                : "";
              r &&
                (t =
                  void 0 !== e.attributes.getExplicit(r)
                    ? t
                    : this.attributes.get("accent"));
            }
            return t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setTeXclass = function (t) {
          var e = this.attributes.getList("form", "fence"),
            r = e.form,
            n = e.fence;
          return this.attributes.isSet("lspace") ||
            this.attributes.isSet("rspace")
            ? ((this.texClass = s.TEXCLASS.NONE), null)
            : (n &&
                this.texClass === s.TEXCLASS.REL &&
                ("prefix" === r && (this.texClass = s.TEXCLASS.OPEN),
                "postfix" === r && (this.texClass = s.TEXCLASS.CLOSE)),
              "\u2061" === this.getText()
                ? (t &&
                    ((t.texClass = s.TEXCLASS.OP), t.setProperty("fnOP", !0)),
                  (this.texClass = this.prevClass = s.TEXCLASS.NONE),
                  t)
                : this.adjustTeXclass(t));
        }),
        (u.prototype.adjustTeXclass = function (t) {
          var e = this.texClass,
            r = this.prevClass;
          if (e === s.TEXCLASS.NONE) return t;
          if (
            (t
              ? (!t.getProperty("autoOp") ||
                  (e !== s.TEXCLASS.BIN && e !== s.TEXCLASS.REL) ||
                  (e = this.texClass = s.TEXCLASS.ORD),
                (r = this.prevClass = t.texClass || s.TEXCLASS.ORD),
                (this.prevLevel = this.attributes.getInherited("scriptlevel")))
              : (r = this.prevClass = s.TEXCLASS.NONE),
            e !== s.TEXCLASS.BIN ||
              (r !== s.TEXCLASS.NONE &&
                r !== s.TEXCLASS.BIN &&
                r !== s.TEXCLASS.OP &&
                r !== s.TEXCLASS.REL &&
                r !== s.TEXCLASS.OPEN &&
                r !== s.TEXCLASS.PUNCT))
          )
            if (
              r !== s.TEXCLASS.BIN ||
              (e !== s.TEXCLASS.REL &&
                e !== s.TEXCLASS.CLOSE &&
                e !== s.TEXCLASS.PUNCT)
            ) {
              if (e === s.TEXCLASS.BIN) {
                for (
                  var n = this, o = this.parent;
                  o &&
                  o.parent &&
                  o.isEmbellished &&
                  (1 === o.childNodes.length ||
                    (!o.isKind("mrow") && o.core() === n));

                )
                  o = (n = o).parent;
                o.childNodes[o.childNodes.length - 1] === n &&
                  (this.texClass = s.TEXCLASS.ORD);
              }
            } else t.texClass = this.prevClass = s.TEXCLASS.ORD;
          else this.texClass = s.TEXCLASS.ORD;
          return this;
        }),
        (u.prototype.setInheritedAttributes = function (t, e, r, n) {
          var o, i;
          void 0 === t && (t = {}),
            void 0 === e && (e = !1),
            void 0 === r && (r = 0),
            void 0 === n && (n = !1),
            v.prototype.setInheritedAttributes.call(this, t, e, r, n);
          var s = this.getText(),
            a = E(this.handleExplicitForm(this.getForms()), 3),
            l = a[0],
            u = a[1],
            c = a[2];
          this.attributes.setInherited("form", l);
          var p = this.constructor.OPTABLE,
            f = p[l][s] || p[u][s] || p[c][s];
          if (f) {
            void 0 === this.getProperty("texClass") && (this.texClass = f[2]);
            try {
              for (
                var h = b(Object.keys(f[3] || {})), d = h.next();
                !d.done;
                d = h.next()
              ) {
                var y = d.value;
                this.attributes.setInherited(y, f[3][y]);
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                d && !d.done && (i = h.return) && i.call(h);
              } finally {
                if (o) throw o.error;
              }
            }
            (this.lspace = (f[0] + 1) / 18), (this.rspace = (f[1] + 1) / 18);
          } else {
            var O = this.getRange(s);
            if (O) {
              void 0 === this.getProperty("texClass") && (this.texClass = O[2]);
              var M = this.constructor.MMLSPACING[O[2]];
              (this.lspace = (M[0] + 1) / 18), (this.rspace = (M[1] + 1) / 18);
            }
          }
        }),
        (u.prototype.getForms = function () {
          for (
            var t = this, e = this.parent, r = this.Parent;
            r && r.isEmbellished;

          )
            (t = e), (e = r.parent), (r = r.Parent);
          if (e && e.isKind("mrow") && 1 !== e.nonSpaceLength()) {
            if (e.firstNonSpace() === t) return ["prefix", "infix", "postfix"];
            if (e.lastNonSpace() === t) return ["postfix", "infix", "prefix"];
          }
          return ["infix", "prefix", "postfix"];
        }),
        (u.prototype.handleExplicitForm = function (t) {
          if (this.attributes.isSet("form")) {
            var e = this.attributes.get("form");
            t = [e].concat(
              t.filter(function (t) {
                return t !== e;
              })
            );
          }
          return t;
        }),
        (u.prototype.getRange = function (t) {
          var e, r;
          if (!t.match(/^[\uD800-\uDBFF]?.$/)) return null;
          var n = t.charCodeAt(0);
          2 === t.length &&
            (n = 1024 * (n - 55296) + t.charCodeAt(1) - 56320 + 65536);
          var o = this.constructor.RANGES;
          try {
            for (var i = b(o), s = i.next(); !s.done; s = i.next()) {
              var a = s.value;
              if (a[0] <= n && n <= a[1]) return a;
              if (n < a[0]) return null;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (r = i.return) && r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return null;
        }),
        (u.defaults = i(i({}, s.AbstractMmlTokenNode.defaults), {
          form: "infix",
          fence: !1,
          separator: !1,
          lspace: "thickmathspace",
          rspace: "thickmathspace",
          stretchy: !1,
          symmetric: !1,
          maxsize: "infinity",
          minsize: "0em",
          largeop: !1,
          movablelimits: !1,
          accent: !1,
          linebreak: "auto",
          lineleading: "1ex",
          linebreakstyle: "before",
          indentalign: "auto",
          indentshift: "0",
          indenttarget: "",
          indentalignfirst: "indentalign",
          indentshiftfirst: "indentshift",
          indentalignlast: "indentalign",
          indentshiftlast: "indentshift",
        })),
        (u.RANGES = a.RANGES),
        (u.MMLSPACING = a.MMLSPACING),
        (u.OPTABLE = a.OPTABLE),
        u);
    function u() {
      var t = (null !== v && v.apply(this, arguments)) || this;
      return (
        (t.texClass = s.TEXCLASS.REL),
        (t.lspace = 5 / 18),
        (t.rspace = 5 / 18),
        t
      );
    }
    e.MmlMo = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlBaseNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "msubsup";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return 3;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "base", {
          get: function () {
            return 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "sub", {
          get: function () {
            return 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "sup", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o = this.childNodes;
          o[0].setInheritedAttributes(t, e, r, n),
            o[1].setInheritedAttributes(t, !1, r + 1, n || 1 === this.sub),
            o[2] &&
              o[2].setInheritedAttributes(t, !1, r + 1, n || 2 === this.sub);
        }),
        (u.defaults = i(i({}, a.AbstractMmlBaseNode.defaults), {
          subscriptshift: "",
          superscriptshift: "",
        })),
        u);
    function u() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMsubsup = l;
    var c,
      p =
        (o(f, (c = l)),
        Object.defineProperty(f.prototype, "kind", {
          get: function () {
            return "msub";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(f.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (f.defaults = i({}, l.defaults)),
        f);
    function f() {
      return (null !== c && c.apply(this, arguments)) || this;
    }
    e.MmlMsub = p;
    var h,
      d =
        (o(y, (h = l)),
        Object.defineProperty(y.prototype, "kind", {
          get: function () {
            return "msup";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(y.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(y.prototype, "sup", {
          get: function () {
            return 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(y.prototype, "sub", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (y.defaults = i({}, l.defaults)),
        y);
    function y() {
      return (null !== h && h.apply(this, arguments)) || this;
    }
    e.MmlMsup = d;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sortLength = function (t, e) {
        return t.length !== e.length
          ? e.length - t.length
          : t === e
          ? 0
          : t < e
          ? -1
          : 1;
      }),
      (e.quotePattern = function (t) {
        return t.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1");
      }),
      (e.unicodeChars = function (t) {
        for (var e = [], r = 0, n = t.length; r < n; r++) {
          var o = t.charCodeAt(r);
          55296 <= o &&
            o < 56319 &&
            (o = ((o - 55296) << 10) + (t.charCodeAt(++r) - 56320) + 65536),
            e.push(o);
        }
        return e;
      }),
      (e.isPercent = function (t) {
        return !!t.match(/%\s*$/);
      }),
      (e.split = function (t) {
        return t.trim().split(/\s+/);
      });
  },
  function (t, e, r) {
    "use strict";
    var n,
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
      s = r(8),
      a = r(58),
      l =
        ((i = a.AbstractVisitor),
        o(u, i),
        (u.prototype.visitTextNode = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
        }),
        (u.prototype.visitXMLNode = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
        }),
        u);
    function u(t) {
      void 0 === t && (t = null);
      return (t = t || new s.MmlFactory()), i.call(this, t) || this;
    }
    e.MmlVisitor = l;
  },
  function (t, r, e) {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = e(57),
      o = e(16);
    r.mathjax = {
      version: "3.0.0",
      handlers: new n.HandlerList(),
      document: function (t, e) {
        return r.mathjax.handlers.document(t, e);
      },
      handleRetriesFor: o.handleRetriesFor,
      retryAfter: o.retryAfter,
      asyncLoad: null,
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.handleRetriesFor = function (t) {
        return new Promise(function e(r, n) {
          try {
            r(t());
          } catch (t) {
            t.retry && t.retry instanceof Promise
              ? t.retry
                  .then(function () {
                    return e(r, n);
                  })
                  .catch(function (t) {
                    return n(t);
                  })
              : t.restart && t.restart.isCallback
              ? MathJax.Callback.After(function () {
                  return e(r, n);
                }, t.restart)
              : n(t);
          }
        });
      }),
      (e.retryAfter = function (t) {
        var e = new Error("MathJax retry");
        throw ((e.retry = t), e);
      });
  },
  function (t, e, r) {
    "use strict";
    var n,
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
      s = r(21),
      a = r(59),
      l =
        ((i = s.AbstractHandler),
        o(u, i),
        (u.prototype.handlesDocument = function (t) {
          var e = this.adaptor;
          if ("string" == typeof t)
            try {
              t = e.parse(t, "text/html");
            } catch (t) {}
          return (
            t instanceof e.window.Document ||
            t instanceof e.window.HTMLElement ||
            t instanceof e.window.DocumentFragment
          );
        }),
        (u.prototype.create = function (t, e) {
          var r = this.adaptor;
          if ("string" == typeof t) t = r.parse(t, "text/html");
          else if (
            t instanceof r.window.HTMLElement ||
            t instanceof r.window.DocumentFragment
          ) {
            var n = t;
            (t = r.parse("", "text/html")), r.append(r.body(t), n);
          }
          return i.prototype.create.call(this, t, e);
        }),
        u);
    function u() {
      var t = (null !== i && i.apply(this, arguments)) || this;
      return (t.documentClass = a.HTMLDocument), t;
    }
    e.HTMLHandler = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
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
    var i,
      s = r(19),
      a =
        ((i = s.AbstractDOMAdaptor),
        o(u, i),
        (u.prototype.parse = function (t, e) {
          return (
            void 0 === e && (e = "text/html"), this.parser.parseFromString(t, e)
          );
        }),
        (u.prototype.create = function (t, e) {
          return e
            ? this.document.createElementNS(e, t)
            : this.document.createElement(t);
        }),
        (u.prototype.text = function (t) {
          return this.document.createTextNode(t);
        }),
        (u.prototype.head = function (t) {
          return t.head;
        }),
        (u.prototype.body = function (t) {
          return t.body;
        }),
        (u.prototype.root = function (t) {
          return t.documentElement;
        }),
        (u.prototype.tags = function (t, e, r) {
          void 0 === r && (r = null);
          var n = r
            ? t.getElementsByTagNameNS(r, e)
            : t.getElementsByTagName(e);
          return Array.from(n);
        }),
        (u.prototype.getElements = function (t, e) {
          var r,
            n,
            o = [];
          try {
            for (var i = l(t), s = i.next(); !s.done; s = i.next()) {
              var a = s.value;
              "string" == typeof a
                ? (o = o.concat(Array.from(this.document.querySelectorAll(a))))
                : Array.isArray(a)
                ? (o = o.concat(Array.from(a)))
                : a instanceof this.window.NodeList ||
                  a instanceof this.window.HTMLCollection
                ? (o = o.concat(Array.from(a)))
                : o.push(a);
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
          return o;
        }),
        (u.prototype.parent = function (t) {
          return t.parentNode;
        }),
        (u.prototype.append = function (t, e) {
          return t.appendChild(e);
        }),
        (u.prototype.insert = function (t, e) {
          return this.parent(e).insertBefore(t, e);
        }),
        (u.prototype.remove = function (t) {
          return this.parent(t).removeChild(t);
        }),
        (u.prototype.replace = function (t, e) {
          return this.parent(e).replaceChild(t, e);
        }),
        (u.prototype.clone = function (t) {
          return t.cloneNode(!0);
        }),
        (u.prototype.split = function (t, e) {
          return t.splitText(e);
        }),
        (u.prototype.next = function (t) {
          return t.nextSibling;
        }),
        (u.prototype.previous = function (t) {
          return t.previousSibling;
        }),
        (u.prototype.firstChild = function (t) {
          return t.firstChild;
        }),
        (u.prototype.lastChild = function (t) {
          return t.lastChild;
        }),
        (u.prototype.childNodes = function (t) {
          return Array.from(t.childNodes);
        }),
        (u.prototype.childNode = function (t, e) {
          return t.childNodes[e];
        }),
        (u.prototype.kind = function (t) {
          return t.nodeName.toLowerCase();
        }),
        (u.prototype.value = function (t) {
          return t.nodeValue || "";
        }),
        (u.prototype.textContent = function (t) {
          return t.textContent;
        }),
        (u.prototype.innerHTML = function (t) {
          return t.innerHTML;
        }),
        (u.prototype.outerHTML = function (t) {
          return t.outerHTML;
        }),
        (u.prototype.setAttribute = function (t, e, r, n) {
          return (
            void 0 === n && (n = null),
            n ? t.setAttributeNS(n, e, r) : t.setAttribute(e, r)
          );
        }),
        (u.prototype.getAttribute = function (t, e) {
          return t.getAttribute(e);
        }),
        (u.prototype.removeAttribute = function (t, e) {
          return t.removeAttribute(e);
        }),
        (u.prototype.hasAttribute = function (t, e) {
          return t.hasAttribute(e);
        }),
        (u.prototype.allAttributes = function (t) {
          return Array.from(t.attributes).map(function (t) {
            return { name: t.name, value: t.value };
          });
        }),
        (u.prototype.addClass = function (t, e) {
          t.classList.add(e);
        }),
        (u.prototype.removeClass = function (t, e) {
          return t.classList.remove(e);
        }),
        (u.prototype.hasClass = function (t, e) {
          return t.classList.contains(e);
        }),
        (u.prototype.setStyle = function (t, e, r) {
          t.style[e] = r;
        }),
        (u.prototype.getStyle = function (t, e) {
          return t.style[e];
        }),
        (u.prototype.allStyles = function (t) {
          return t.style.cssText;
        }),
        (u.prototype.fontSize = function (t) {
          var e = this.window.getComputedStyle(t);
          return parseFloat(e.fontSize);
        }),
        (u.prototype.nodeSize = function (t, e, r) {
          if (
            (void 0 === e && (e = 1), void 0 === r && (r = !1), r && t.getBBox)
          ) {
            var n = t.getBBox();
            return [n.width / e, n.height / e];
          }
          return [t.offsetWidth / e, t.offsetHeight / e];
        }),
        (u.prototype.nodeBBox = function (t) {
          var e = t.getBoundingClientRect();
          return { left: e.left, right: e.right, top: e.top, bottom: e.bottom };
        }),
        u);
    function u(t) {
      var e = i.call(this, t.document) || this;
      return (e.window = t), (e.parser = new t.DOMParser()), e;
    }
    e.HTMLAdaptor = a;
  },
  function (t, e, r) {
    "use strict";
    var y =
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
    var n =
      ((o.prototype.node = function (t, e, r, n) {
        var o, i;
        void 0 === e && (e = {}), void 0 === r && (r = []);
        var s = this.create(t, n);
        this.setAttributes(s, e);
        try {
          for (var a = y(r), l = a.next(); !l.done; l = a.next()) {
            var u = l.value;
            this.append(s, u);
          }
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            l && !l.done && (i = a.return) && i.call(a);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      }),
      (o.prototype.setAttributes = function (t, e) {
        var r, n, o, i, s, a;
        if (e.style && "string" != typeof e.style)
          try {
            for (
              var l = y(Object.keys(e.style)), u = l.next();
              !u.done;
              u = l.next()
            ) {
              var c = u.value;
              this.setStyle(
                t,
                c.replace(/-([a-z])/g, function (t, e) {
                  return e.toUpperCase();
                }),
                e.style[c]
              );
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              u && !u.done && (n = l.return) && n.call(l);
            } finally {
              if (r) throw r.error;
            }
          }
        if (e.properties)
          try {
            for (
              var p = y(Object.keys(e.properties)), f = p.next();
              !f.done;
              f = p.next()
            )
              t[(c = f.value)] = e.properties[c];
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              f && !f.done && (i = p.return) && i.call(p);
            } finally {
              if (o) throw o.error;
            }
          }
        try {
          for (var h = y(Object.keys(e)), d = h.next(); !d.done; d = h.next())
            ("style" === (c = d.value) && "string" != typeof e.style) ||
              "properties" === c ||
              this.setAttribute(t, c, e[c]);
        } catch (t) {
          s = { error: t };
        } finally {
          try {
            d && !d.done && (a = h.return) && a.call(h);
          } finally {
            if (s) throw s.error;
          }
        }
      }),
      (o.prototype.replace = function (t, e) {
        return this.insert(t, e), this.remove(e), e;
      }),
      (o.prototype.childNode = function (t, e) {
        return this.childNodes(t)[e];
      }),
      (o.prototype.allClasses = function (t) {
        var e = this.getAttribute(t, "class");
        return e
          ? e
              .replace(/  +/g, " ")
              .replace(/^ /, "")
              .replace(/ $/, "")
              .split(/ /)
          : [];
      }),
      o);
    function o(t) {
      void 0 === t && (t = null), (this.document = t);
    }
    e.AbstractDOMAdaptor = n;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(18);
    e.browserAdaptor = function () {
      return new n.HTMLAdaptor(window);
    };
  },
  function (t, e, r) {
    "use strict";
    var n,
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
      s = r(5),
      a = ((i = s.AbstractMathDocument), o(l, i), l);
    function l() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    var u =
      (Object.defineProperty(c.prototype, "name", {
        get: function () {
          return this.constructor.NAME;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (c.prototype.handlesDocument = function (t) {
        return !1;
      }),
      (c.prototype.create = function (t, e) {
        return new this.documentClass(t, this.adaptor, e);
      }),
      (c.NAME = "generic"),
      c);
    function c(t, e) {
      void 0 === e && (e = 5),
        (this.documentClass = a),
        (this.adaptor = t),
        (this.priority = e);
    }
    e.AbstractHandler = u;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(6),
      i =
        (Object.defineProperty(s.prototype, "name", {
          get: function () {
            return this.constructor.NAME;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (s.prototype.setAdaptor = function (t) {
          this.adaptor = t;
        }),
        (s.prototype.setMmlFactory = function (t) {
          this.mmlFactory = t;
        }),
        (s.prototype.initialize = function () {}),
        Object.defineProperty(s.prototype, "processStrings", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (s.prototype.findMath = function (t, e) {
          return [];
        }),
        (s.prototype.executeFilters = function (t, e, r, n) {
          var o = { math: e, document: r, data: n };
          return t.execute(o), o.data;
        }),
        (s.NAME = "generic"),
        (s.OPTIONS = {}),
        s);
    function s(t) {
      void 0 === t && (t = {}), (this.adaptor = null), (this.mmlFactory = null);
      var e = this.constructor;
      (this.options = n.userOptions(n.defaultOptions({}, e.OPTIONS), t)),
        (this.preFilters = new o.FunctionList()),
        (this.postFilters = new o.FunctionList());
    }
    e.AbstractInputJax = i;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = r(6),
      i =
        (Object.defineProperty(s.prototype, "name", {
          get: function () {
            return this.constructor.NAME;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (s.prototype.setAdaptor = function (t) {
          this.adaptor = t;
        }),
        (s.prototype.initialize = function () {}),
        (s.prototype.getMetrics = function (t) {}),
        (s.prototype.styleSheet = function (t) {
          return null;
        }),
        (s.prototype.pageElements = function (t) {
          return null;
        }),
        (s.prototype.executeFilters = function (t, e, r, n) {
          var o = { math: e, document: r, data: n };
          return t.execute(o), o.data;
        }),
        (s.NAME = "generic"),
        (s.OPTIONS = {}),
        s);
    function s(t) {
      void 0 === t && (t = {}), (this.adaptor = null);
      var e = this.constructor;
      (this.options = n.userOptions(n.defaultOptions({}, e.OPTIONS), t)),
        (this.postFilters = new o.FunctionList());
    }
    e.AbstractOutputJax = i;
  },
  function (t, e, r) {
    "use strict";
    var u =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      n =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(u(arguments[e]));
          return t;
        },
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
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var p = Symbol(),
      l = function (t) {
        void 0 === t && (t = null),
          (this.next = null),
          (this.prev = null),
          (this.data = t);
      };
    e.ListItem = l;
    var o =
      ((f.prototype.toArray = function () {
        return Array.from(this);
      }),
      (f.prototype.isBefore = function (t, e) {
        return t < e;
      }),
      (f.prototype.push = function () {
        for (var e, t, r = [], n = 0; n < arguments.length; n++)
          r[n] = arguments[n];
        try {
          for (var o = c(r), i = o.next(); !i.done; i = o.next()) {
            var s = i.value,
              a = new l(s);
            (a.next = this.list),
              (a.prev = this.list.prev),
              ((this.list.prev = a).prev.next = a);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (t = o.return) && t.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return this;
      }),
      (f.prototype.pop = function () {
        var t = this.list.prev;
        return t.data === p
          ? null
          : ((this.list.prev = t.prev),
            (t.prev.next = this.list),
            (t.next = t.prev = null),
            t.data);
      }),
      (f.prototype.unshift = function () {
        for (var e, t, r = [], n = 0; n < arguments.length; n++)
          r[n] = arguments[n];
        try {
          for (
            var o = c(r.slice(0).reverse()), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var s = i.value,
              a = new l(s);
            (a.next = this.list.next),
              (a.prev = this.list),
              ((this.list.next = a).next.prev = a);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (t = o.return) && t.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return this;
      }),
      (f.prototype.shift = function () {
        var t = this.list.next;
        return t.data === p
          ? null
          : ((this.list.next = t.next),
            (t.next.prev = this.list),
            (t.next = t.prev = null),
            t.data);
      }),
      (f.prototype.clear = function () {
        return (
          (this.list.next.prev = this.list.prev.next = null),
          (this.list.next = this.list.prev = this.list),
          this
        );
      }),
      (f.prototype[Symbol.iterator] = function () {
        var t = this.list;
        return {
          next: function () {
            return (t = t.next).data === p
              ? { value: null, done: !0 }
              : { value: t.data, done: !1 };
          },
        };
      }),
      (f.prototype.reversed = function () {
        var t,
          e = this.list;
        return (
          ((t = {})[Symbol.iterator] = function () {
            return this;
          }),
          (t.next = function () {
            return (e = e.prev).data === p
              ? { value: null, done: !0 }
              : { value: e.data, done: !1 };
          }),
          (t.toArray = function () {
            return Array.from(this);
          }),
          t
        );
      }),
      (f.prototype.insert = function (t, e) {
        void 0 === e && (e = null),
          null === e && (e = this.isBefore.bind(this));
        for (
          var r = new l(t), n = this.list.next;
          n.data !== p && e(n.data, r.data);

        )
          n = n.next;
        return (r.prev = n.prev), ((r.next = n).prev.next = n.prev = r), this;
      }),
      (f.prototype.sort = function (t) {
        var e, r;
        void 0 === t && (t = null),
          null === t && (t = this.isBefore.bind(this));
        var n = [];
        try {
          for (var o = c(this), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            n.push(new f(s));
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
        for (this.list.next = this.list.prev = this.list; 1 < n.length; ) {
          var a = n.shift(),
            l = n.shift();
          a.merge(l, t), n.push(a);
        }
        return n.length && (this.list = n[0].list), this;
      }),
      (f.prototype.merge = function (t, e) {
        var r, n, o, i, s;
        void 0 === e && (e = null),
          null === e && (e = this.isBefore.bind(this));
        for (
          var a = this.list.next, l = t.list.next;
          a.data !== p && l.data !== p;

        )
          e(l.data, a.data)
            ? ((r = u([a, l], 2)),
              (l.prev.next = r[0]),
              (a.prev.next = r[1]),
              (n = u([a.prev, l.prev], 2)),
              (l.prev = n[0]),
              (a.prev = n[1]),
              (o = u([t.list, this.list], 2)),
              (this.list.prev.next = o[0]),
              (t.list.prev.next = o[1]),
              (i = u([t.list.prev, this.list.prev], 2)),
              (this.list.prev = i[0]),
              (t.list.prev = i[1]),
              (a = (s = u([l.next, a], 2))[0]),
              (l = s[1]))
            : (a = a.next);
        return (
          l.data !== p &&
            ((this.list.prev.next = t.list.next),
            (t.list.next.prev = this.list.prev),
            (t.list.prev.next = this.list),
            (this.list.prev = t.list.prev),
            (t.list.next = t.list.prev = t.list)),
          this
        );
      }),
      f);
    function f() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      (this.list = new l(p)),
        (this.list.next = this.list.prev = this.list),
        this.push.apply(this, n(t));
    }
    e.LinkedList = o;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
      s = r(9),
      a =
        ((i = s.AbstractFactory),
        o(l, i),
        (l.prototype.create = function (t, e, r) {
          return (
            void 0 === e && (e = {}),
            void 0 === r && (r = []),
            this.node[t](e, r)
          );
        }),
        l);
    function l() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.AbstractNodeFactory = a;
  },
  function (t, e, r) {
    "use strict";
    var n;
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(0),
      i = r(27),
      s = r(28),
      a = r(29),
      l = r(11),
      u = r(31),
      c = r(32),
      p = r(33),
      f = r(34),
      h = r(35),
      d = r(36),
      y = r(37),
      O = r(38),
      M = r(39),
      E = r(40),
      b = r(41),
      v = r(42),
      m = r(43),
      g = r(44),
      L = r(12),
      R = r(45),
      N = r(46),
      T = r(47),
      _ = r(48),
      A = r(49),
      S = r(50),
      C = r(51),
      I = r(52),
      x = r(53),
      P = r(54),
      w = r(55);
    e.MML =
      (((n = {})[i.MmlMath.prototype.kind] = i.MmlMath),
      (n[s.MmlMi.prototype.kind] = s.MmlMi),
      (n[a.MmlMn.prototype.kind] = a.MmlMn),
      (n[l.MmlMo.prototype.kind] = l.MmlMo),
      (n[u.MmlMtext.prototype.kind] = u.MmlMtext),
      (n[c.MmlMspace.prototype.kind] = c.MmlMspace),
      (n[p.MmlMs.prototype.kind] = p.MmlMs),
      (n[f.MmlMrow.prototype.kind] = f.MmlMrow),
      (n[f.MmlInferredMrow.prototype.kind] = f.MmlInferredMrow),
      (n[h.MmlMfrac.prototype.kind] = h.MmlMfrac),
      (n[d.MmlMsqrt.prototype.kind] = d.MmlMsqrt),
      (n[y.MmlMroot.prototype.kind] = y.MmlMroot),
      (n[O.MmlMstyle.prototype.kind] = O.MmlMstyle),
      (n[M.MmlMerror.prototype.kind] = M.MmlMerror),
      (n[E.MmlMpadded.prototype.kind] = E.MmlMpadded),
      (n[b.MmlMphantom.prototype.kind] = b.MmlMphantom),
      (n[v.MmlMfenced.prototype.kind] = v.MmlMfenced),
      (n[m.MmlMenclose.prototype.kind] = m.MmlMenclose),
      (n[g.MmlMaction.prototype.kind] = g.MmlMaction),
      (n[L.MmlMsub.prototype.kind] = L.MmlMsub),
      (n[L.MmlMsup.prototype.kind] = L.MmlMsup),
      (n[L.MmlMsubsup.prototype.kind] = L.MmlMsubsup),
      (n[R.MmlMunder.prototype.kind] = R.MmlMunder),
      (n[R.MmlMover.prototype.kind] = R.MmlMover),
      (n[R.MmlMunderover.prototype.kind] = R.MmlMunderover),
      (n[N.MmlMmultiscripts.prototype.kind] = N.MmlMmultiscripts),
      (n[N.MmlMprescripts.prototype.kind] = N.MmlMprescripts),
      (n[N.MmlNone.prototype.kind] = N.MmlNone),
      (n[T.MmlMtable.prototype.kind] = T.MmlMtable),
      (n[_.MmlMlabeledtr.prototype.kind] = _.MmlMlabeledtr),
      (n[_.MmlMtr.prototype.kind] = _.MmlMtr),
      (n[A.MmlMtd.prototype.kind] = A.MmlMtd),
      (n[S.MmlMaligngroup.prototype.kind] = S.MmlMaligngroup),
      (n[C.MmlMalignmark.prototype.kind] = C.MmlMalignmark),
      (n[I.MmlMglyph.prototype.kind] = I.MmlMglyph),
      (n[x.MmlSemantics.prototype.kind] = x.MmlSemantics),
      (n[x.MmlAnnotation.prototype.kind] = x.MmlAnnotation),
      (n[x.MmlAnnotationXML.prototype.kind] = x.MmlAnnotationXML),
      (n[P.TeXAtom.prototype.kind] = P.TeXAtom),
      (n[w.mathchoice.prototype.kind] = w.mathchoice),
      (n[o.TextNode.prototype.kind] = o.TextNode),
      (n[o.XMLNode.prototype.kind] = o.XMLNode),
      n);
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlLayoutNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "math";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "linebreakContainer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          "display" === this.attributes.get("mode") &&
            this.attributes.setInherited("display", "block"),
            (t = this.addInheritedAttributes(
              t,
              this.attributes.getAllAttributes()
            )),
            (e =
              !!this.attributes.get("displaystyle") ||
              (!this.attributes.get("displaystyle") &&
                "block" === this.attributes.get("display"))),
            this.attributes.setInherited("displaystyle", e),
            (r =
              this.attributes.get("scriptlevel") ||
              this.constructor.defaults.scriptlevel),
            s.prototype.setChildInheritedAttributes.call(this, t, e, r, n);
        }),
        (u.defaults = i(i({}, a.AbstractMmlLayoutNode.defaults), {
          mathvariant: "normal",
          mathsize: "normal",
          mathcolor: "",
          mathbackground: "transparent",
          dir: "ltr",
          scriptlevel: 0,
          displaystyle: !1,
          display: "inline",
          maxwidth: "",
          overflow: "linebreak",
          altimg: "",
          "altimg-width": "",
          "altimg-height": "",
          "altimg-valign": "",
          alttext: "",
          cdgroup: "",
          scriptsizemultiplier: 1 / Math.sqrt(2),
          scriptminsize: "8px",
          infixlinebreakstyle: "before",
          lineleading: "1ex",
          linebreakmultchar: "\u2062",
          indentshift: "auto",
          indentalign: "auto",
          indenttarget: "",
          indentalignfirst: "indentalign",
          indentshiftfirst: "indentshift",
          indentalignlast: "indentalign",
          indentshiftlast: "indentshift",
        })),
        u);
    function u() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMath = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlTokenNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mi";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setInheritedAttributes = function (t, e, r, n) {
          void 0 === t && (t = {}),
            void 0 === e && (e = !1),
            void 0 === r && (r = 0),
            void 0 === n && (n = !1),
            s.prototype.setInheritedAttributes.call(this, t, e, r, n),
            this.getText().match(u.singleCharacter) &&
              !t.mathvariant &&
              this.attributes.setInherited("mathvariant", "italic");
        }),
        (u.prototype.setTeXclass = function (t) {
          this.getPrevClass(t);
          var e = this.getText();
          return (
            1 < e.length &&
              e.match(u.operatorName) &&
              this.texClass === a.TEXCLASS.ORD &&
              ((this.texClass = a.TEXCLASS.OP), this.setProperty("autoOP", !0)),
            this
          );
        }),
        (u.defaults = i({}, a.AbstractMmlTokenNode.defaults)),
        (u.operatorName = /^[a-z][a-z0-9]*$/i),
        (u.singleCharacter = /^[\uD800-\uDBFF]?.$/),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMi = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlTokenNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mn";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i({}, a.AbstractMmlTokenNode.defaults)),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMn = l;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(0);
    function n(t, e, r, n) {
      return (
        void 0 === r && (r = o.TEXCLASS.BIN),
        void 0 === n && (n = null),
        [t, e, r, n]
      );
    }
    (e.OPDEF = n),
      (e.MO = {
        ORD: n(0, 0, o.TEXCLASS.ORD),
        ORD11: n(1, 1, o.TEXCLASS.ORD),
        ORD21: n(2, 1, o.TEXCLASS.ORD),
        ORD02: n(0, 2, o.TEXCLASS.ORD),
        ORD55: n(5, 5, o.TEXCLASS.ORD),
        OP: n(1, 2, o.TEXCLASS.OP, {
          largeop: !0,
          movablelimits: !0,
          symmetric: !0,
        }),
        OPFIXED: n(1, 2, o.TEXCLASS.OP, { largeop: !0, movablelimits: !0 }),
        INTEGRAL: n(0, 1, o.TEXCLASS.OP, { largeop: !0, symmetric: !0 }),
        INTEGRAL2: n(1, 2, o.TEXCLASS.OP, { largeop: !0, symmetric: !0 }),
        BIN3: n(3, 3, o.TEXCLASS.BIN),
        BIN4: n(4, 4, o.TEXCLASS.BIN),
        BIN01: n(0, 1, o.TEXCLASS.BIN),
        BIN5: n(5, 5, o.TEXCLASS.BIN),
        TALLBIN: n(4, 4, o.TEXCLASS.BIN, { stretchy: !0 }),
        BINOP: n(4, 4, o.TEXCLASS.BIN, { largeop: !0, movablelimits: !0 }),
        REL: n(5, 5, o.TEXCLASS.REL),
        REL1: n(1, 1, o.TEXCLASS.REL, { stretchy: !0 }),
        REL4: n(4, 4, o.TEXCLASS.REL),
        RELSTRETCH: n(5, 5, o.TEXCLASS.REL, { stretchy: !0 }),
        RELACCENT: n(5, 5, o.TEXCLASS.REL, { accent: !0 }),
        WIDEREL: n(5, 5, o.TEXCLASS.REL, { accent: !0, stretchy: !0 }),
        OPEN: n(0, 0, o.TEXCLASS.OPEN, {
          fence: !0,
          stretchy: !0,
          symmetric: !0,
        }),
        CLOSE: n(0, 0, o.TEXCLASS.CLOSE, {
          fence: !0,
          stretchy: !0,
          symmetric: !0,
        }),
        INNER: n(0, 0, o.TEXCLASS.INNER),
        PUNCT: n(0, 3, o.TEXCLASS.PUNCT),
        ACCENT: n(0, 0, o.TEXCLASS.ORD, { accent: !0 }),
        WIDEACCENT: n(0, 0, o.TEXCLASS.ORD, { accent: !0, stretchy: !0 }),
      }),
      (e.RANGES = [
        [32, 127, o.TEXCLASS.REL, "BasicLatin"],
        [160, 255, o.TEXCLASS.ORD, "Latin1Supplement"],
        [256, 383, o.TEXCLASS.ORD, "LatinExtendedA"],
        [384, 591, o.TEXCLASS.ORD, "LatinExtendedB"],
        [688, 767, o.TEXCLASS.ORD, "SpacingModLetters"],
        [768, 879, o.TEXCLASS.ORD, "CombDiacritMarks"],
        [880, 1023, o.TEXCLASS.ORD, "GreekAndCoptic"],
        [7680, 7935, o.TEXCLASS.ORD, "LatinExtendedAdditional"],
        [8192, 8303, o.TEXCLASS.PUNCT, "GeneralPunctuation"],
        [8304, 8351, o.TEXCLASS.ORD, "SuperAndSubscripts"],
        [8352, 8399, o.TEXCLASS.ORD, "Currency"],
        [8400, 8447, o.TEXCLASS.ORD, "CombDiactForSymbols"],
        [8448, 8527, o.TEXCLASS.ORD, "LetterlikeSymbols"],
        [8528, 8591, o.TEXCLASS.ORD, "NumberForms"],
        [8592, 8703, o.TEXCLASS.REL, "Arrows"],
        [8704, 8959, o.TEXCLASS.BIN, "MathOperators"],
        [8960, 9215, o.TEXCLASS.ORD, "MiscTechnical"],
        [9312, 9471, o.TEXCLASS.ORD, "EnclosedAlphaNums"],
        [9472, 9631, o.TEXCLASS.ORD, "BoxDrawing"],
        [9632, 9727, o.TEXCLASS.ORD, "GeometricShapes"],
        [9984, 10175, o.TEXCLASS.ORD, "Dingbats"],
        [10176, 10223, o.TEXCLASS.ORD, "MiscMathSymbolsA"],
        [10224, 10239, o.TEXCLASS.REL, "SupplementalArrowsA"],
        [10496, 10623, o.TEXCLASS.REL, "SupplementalArrowsB"],
        [10624, 10751, o.TEXCLASS.ORD, "MiscMathSymbolsB"],
        [10752, 11007, o.TEXCLASS.BIN, "SuppMathOperators"],
        [11008, 11263, o.TEXCLASS.ORD, "MiscSymbolsAndArrows"],
        [119808, 120831, o.TEXCLASS.ORD, "MathAlphabets"],
      ]),
      (e.MMLSPACING = [
        [0, 0],
        [1, 2],
        [3, 3],
        [4, 4],
        [0, 0],
        [0, 0],
        [0, 3],
      ]),
      (e.OPTABLE = {
        prefix: {
          "(": e.MO.OPEN,
          "+": e.MO.BIN01,
          "-": e.MO.BIN01,
          "[": e.MO.OPEN,
          "{": e.MO.OPEN,
          "|": e.MO.OPEN,
          "||": [
            0,
            0,
            o.TEXCLASS.BIN,
            { fence: !0, stretchy: !0, symmetric: !0 },
          ],
          "|||": [
            0,
            0,
            o.TEXCLASS.ORD,
            { fence: !0, stretchy: !0, symmetric: !0 },
          ],
          "\xac": e.MO.ORD21,
          "\xb1": e.MO.BIN01,
          "\u2016": [0, 0, o.TEXCLASS.ORD, { fence: !0, stretchy: !0 }],
          "\u2018": [0, 0, o.TEXCLASS.OPEN, { fence: !0 }],
          "\u201c": [0, 0, o.TEXCLASS.OPEN, { fence: !0 }],
          "\u2145": e.MO.ORD21,
          "\u2146": n(2, 0, o.TEXCLASS.ORD),
          "\u2200": e.MO.ORD21,
          "\u2202": e.MO.ORD21,
          "\u2203": e.MO.ORD21,
          "\u2204": e.MO.ORD21,
          "\u2207": e.MO.ORD21,
          "\u220f": e.MO.OP,
          "\u2210": e.MO.OP,
          "\u2211": e.MO.OP,
          "\u2212": e.MO.BIN01,
          "\u2213": e.MO.BIN01,
          "\u221a": [1, 1, o.TEXCLASS.ORD, { stretchy: !0 }],
          "\u221b": e.MO.ORD11,
          "\u221c": e.MO.ORD11,
          "\u2220": e.MO.ORD,
          "\u2221": e.MO.ORD,
          "\u2222": e.MO.ORD,
          "\u222b": e.MO.INTEGRAL,
          "\u222c": e.MO.INTEGRAL,
          "\u222d": e.MO.INTEGRAL,
          "\u222e": e.MO.INTEGRAL,
          "\u222f": e.MO.INTEGRAL,
          "\u2230": e.MO.INTEGRAL,
          "\u2231": e.MO.INTEGRAL,
          "\u2232": e.MO.INTEGRAL,
          "\u2233": e.MO.INTEGRAL,
          "\u22c0": e.MO.OP,
          "\u22c1": e.MO.OP,
          "\u22c2": e.MO.OP,
          "\u22c3": e.MO.OP,
          "\u2308": e.MO.OPEN,
          "\u230a": e.MO.OPEN,
          "\u2772": e.MO.OPEN,
          "\u27e6": e.MO.OPEN,
          "\u27e8": e.MO.OPEN,
          "\u27ea": e.MO.OPEN,
          "\u27ec": e.MO.OPEN,
          "\u27ee": e.MO.OPEN,
          "\u2980": [0, 0, o.TEXCLASS.ORD, { fence: !0, stretchy: !0 }],
          "\u2983": e.MO.OPEN,
          "\u2985": e.MO.OPEN,
          "\u2987": e.MO.OPEN,
          "\u2989": e.MO.OPEN,
          "\u298b": e.MO.OPEN,
          "\u298d": e.MO.OPEN,
          "\u298f": e.MO.OPEN,
          "\u2991": e.MO.OPEN,
          "\u2993": e.MO.OPEN,
          "\u2995": e.MO.OPEN,
          "\u2997": e.MO.OPEN,
          "\u29fc": e.MO.OPEN,
          "\u2a00": e.MO.OP,
          "\u2a01": e.MO.OP,
          "\u2a02": e.MO.OP,
          "\u2a03": e.MO.OP,
          "\u2a04": e.MO.OP,
          "\u2a05": e.MO.OP,
          "\u2a06": e.MO.OP,
          "\u2a07": e.MO.OP,
          "\u2a08": e.MO.OP,
          "\u2a09": e.MO.OP,
          "\u2a0a": e.MO.OP,
          "\u2a0b": e.MO.INTEGRAL2,
          "\u2a0c": e.MO.INTEGRAL,
          "\u2a0d": e.MO.INTEGRAL2,
          "\u2a0e": e.MO.INTEGRAL2,
          "\u2a0f": e.MO.INTEGRAL2,
          "\u2a10": e.MO.OP,
          "\u2a11": e.MO.OP,
          "\u2a12": e.MO.OP,
          "\u2a13": e.MO.OP,
          "\u2a14": e.MO.OP,
          "\u2a15": e.MO.INTEGRAL2,
          "\u2a16": e.MO.INTEGRAL2,
          "\u2a17": e.MO.INTEGRAL2,
          "\u2a18": e.MO.INTEGRAL2,
          "\u2a19": e.MO.INTEGRAL2,
          "\u2a1a": e.MO.INTEGRAL2,
          "\u2a1b": e.MO.INTEGRAL2,
          "\u2a1c": e.MO.INTEGRAL2,
          "\u2afc": e.MO.OP,
          "\u2aff": e.MO.OP,
        },
        postfix: {
          "!!": n(1, 0),
          "!": [1, 0, o.TEXCLASS.CLOSE, null],
          "&": e.MO.ORD,
          ")": e.MO.CLOSE,
          "++": n(0, 0),
          "--": n(0, 0),
          "..": n(0, 0),
          "...": e.MO.ORD,
          "'": e.MO.ACCENT,
          "]": e.MO.CLOSE,
          "^": e.MO.WIDEACCENT,
          _: e.MO.WIDEACCENT,
          "`": e.MO.ACCENT,
          "|": e.MO.CLOSE,
          "}": e.MO.CLOSE,
          "~": e.MO.WIDEACCENT,
          "||": [
            0,
            0,
            o.TEXCLASS.BIN,
            { fence: !0, stretchy: !0, symmetric: !0 },
          ],
          "|||": [
            0,
            0,
            o.TEXCLASS.ORD,
            { fence: !0, stretchy: !0, symmetric: !0 },
          ],
          "\xa8": e.MO.ACCENT,
          "\xaf": e.MO.WIDEACCENT,
          "\xb0": e.MO.ORD,
          "\xb4": e.MO.ACCENT,
          "\xb8": e.MO.ACCENT,
          "\u02c6": e.MO.WIDEACCENT,
          "\u02c7": e.MO.WIDEACCENT,
          "\u02c9": e.MO.WIDEACCENT,
          "\u02ca": e.MO.ACCENT,
          "\u02cb": e.MO.ACCENT,
          "\u02cd": e.MO.WIDEACCENT,
          "\u02d8": e.MO.ACCENT,
          "\u02d9": e.MO.ACCENT,
          "\u02da": e.MO.ACCENT,
          "\u02dc": e.MO.WIDEACCENT,
          "\u02dd": e.MO.ACCENT,
          "\u02f7": e.MO.WIDEACCENT,
          "\u0302": e.MO.WIDEACCENT,
          "\u0311": e.MO.ACCENT,
          "\u03f6": e.MO.REL,
          "\u2016": [0, 0, o.TEXCLASS.ORD, { fence: !0, stretchy: !0 }],
          "\u2019": [0, 0, o.TEXCLASS.CLOSE, { fence: !0 }],
          "\u201d": [0, 0, o.TEXCLASS.CLOSE, { fence: !0 }],
          "\u2032": e.MO.ORD02,
          "\u203e": e.MO.WIDEACCENT,
          "\u20db": e.MO.ACCENT,
          "\u20dc": e.MO.ACCENT,
          "\u2309": e.MO.CLOSE,
          "\u230b": e.MO.CLOSE,
          "\u23b4": e.MO.WIDEACCENT,
          "\u23b5": e.MO.WIDEACCENT,
          "\u23dc": e.MO.WIDEACCENT,
          "\u23dd": e.MO.WIDEACCENT,
          "\u23de": e.MO.WIDEACCENT,
          "\u23df": e.MO.WIDEACCENT,
          "\u23e0": e.MO.WIDEACCENT,
          "\u23e1": e.MO.WIDEACCENT,
          "\u25a0": e.MO.BIN3,
          "\u25a1": e.MO.BIN3,
          "\u25aa": e.MO.BIN3,
          "\u25ab": e.MO.BIN3,
          "\u25ad": e.MO.BIN3,
          "\u25ae": e.MO.BIN3,
          "\u25af": e.MO.BIN3,
          "\u25b0": e.MO.BIN3,
          "\u25b1": e.MO.BIN3,
          "\u25b2": e.MO.BIN4,
          "\u25b4": e.MO.BIN4,
          "\u25b6": e.MO.BIN4,
          "\u25b7": e.MO.BIN4,
          "\u25b8": e.MO.BIN4,
          "\u25bc": e.MO.BIN4,
          "\u25be": e.MO.BIN4,
          "\u25c0": e.MO.BIN4,
          "\u25c1": e.MO.BIN4,
          "\u25c2": e.MO.BIN4,
          "\u25c4": e.MO.BIN4,
          "\u25c5": e.MO.BIN4,
          "\u25c6": e.MO.BIN4,
          "\u25c7": e.MO.BIN4,
          "\u25c8": e.MO.BIN4,
          "\u25c9": e.MO.BIN4,
          "\u25cc": e.MO.BIN4,
          "\u25cd": e.MO.BIN4,
          "\u25ce": e.MO.BIN4,
          "\u25cf": e.MO.BIN4,
          "\u25d6": e.MO.BIN4,
          "\u25d7": e.MO.BIN4,
          "\u25e6": e.MO.BIN4,
          "\u266d": e.MO.ORD02,
          "\u266e": e.MO.ORD02,
          "\u266f": e.MO.ORD02,
          "\u2773": e.MO.CLOSE,
          "\u27e7": e.MO.CLOSE,
          "\u27e9": e.MO.CLOSE,
          "\u27eb": e.MO.CLOSE,
          "\u27ed": e.MO.CLOSE,
          "\u27ef": e.MO.CLOSE,
          "\u2980": [0, 0, o.TEXCLASS.ORD, { fence: !0, stretchy: !0 }],
          "\u2984": e.MO.CLOSE,
          "\u2986": e.MO.CLOSE,
          "\u2988": e.MO.CLOSE,
          "\u298a": e.MO.CLOSE,
          "\u298c": e.MO.CLOSE,
          "\u298e": e.MO.CLOSE,
          "\u2990": e.MO.CLOSE,
          "\u2992": e.MO.CLOSE,
          "\u2994": e.MO.CLOSE,
          "\u2996": e.MO.CLOSE,
          "\u2998": e.MO.CLOSE,
          "\u29fd": e.MO.CLOSE,
        },
        infix: {
          "!=": e.MO.BIN4,
          "#": e.MO.ORD,
          $: e.MO.ORD,
          "%": [3, 3, o.TEXCLASS.ORD, null],
          "&&": e.MO.BIN4,
          "": e.MO.ORD,
          "*": e.MO.BIN3,
          "**": n(1, 1),
          "*=": e.MO.BIN4,
          "+": e.MO.BIN4,
          "+=": e.MO.BIN4,
          ",": [
            0,
            3,
            o.TEXCLASS.PUNCT,
            { linebreakstyle: "after", separator: !0 },
          ],
          "-": e.MO.BIN4,
          "-=": e.MO.BIN4,
          "->": e.MO.BIN5,
          ".": [0, 3, o.TEXCLASS.PUNCT, { separator: !0 }],
          "/": e.MO.ORD11,
          "//": n(1, 1),
          "/=": e.MO.BIN4,
          ":": [1, 2, o.TEXCLASS.REL, null],
          ":=": e.MO.BIN4,
          ";": [
            0,
            3,
            o.TEXCLASS.PUNCT,
            { linebreakstyle: "after", separator: !0 },
          ],
          "<": e.MO.REL,
          "<=": e.MO.BIN5,
          "<>": n(1, 1),
          "=": e.MO.REL,
          "==": e.MO.BIN4,
          ">": e.MO.REL,
          ">=": e.MO.BIN5,
          "?": [1, 1, o.TEXCLASS.CLOSE, null],
          "@": e.MO.ORD11,
          "\\": e.MO.ORD,
          "^": e.MO.ORD11,
          _: e.MO.ORD11,
          "|": [
            2,
            2,
            o.TEXCLASS.ORD,
            { fence: !0, stretchy: !0, symmetric: !0 },
          ],
          "||": [
            2,
            2,
            o.TEXCLASS.BIN,
            { fence: !0, stretchy: !0, symmetric: !0 },
          ],
          "|||": [
            2,
            2,
            o.TEXCLASS.ORD,
            { fence: !0, stretchy: !0, symmetric: !0 },
          ],
          "\xb1": e.MO.BIN4,
          "\xb7": e.MO.BIN4,
          "\xd7": e.MO.BIN4,
          "\xf7": e.MO.BIN4,
          "\u02b9": e.MO.ORD,
          "\u0300": e.MO.ACCENT,
          "\u0301": e.MO.ACCENT,
          "\u0303": e.MO.WIDEACCENT,
          "\u0304": e.MO.ACCENT,
          "\u0306": e.MO.ACCENT,
          "\u0307": e.MO.ACCENT,
          "\u0308": e.MO.ACCENT,
          "\u030c": e.MO.ACCENT,
          "\u0332": e.MO.WIDEACCENT,
          "\u0338": e.MO.REL4,
          "\u2015": [0, 0, o.TEXCLASS.ORD, { stretchy: !0 }],
          "\u2017": [0, 0, o.TEXCLASS.ORD, { stretchy: !0 }],
          "\u2020": e.MO.BIN3,
          "\u2021": e.MO.BIN3,
          "\u2022": e.MO.BIN4,
          "\u2026": e.MO.INNER,
          "\u2044": e.MO.TALLBIN,
          "\u2061": e.MO.ORD,
          "\u2062": e.MO.ORD,
          "\u2063": [
            0,
            0,
            o.TEXCLASS.ORD,
            { linebreakstyle: "after", separator: !0 },
          ],
          "\u2064": e.MO.ORD,
          "\u20d7": e.MO.ACCENT,
          "\u2111": e.MO.ORD,
          "\u2113": e.MO.ORD,
          "\u2118": e.MO.ORD,
          "\u211c": e.MO.ORD,
          "\u2190": e.MO.WIDEREL,
          "\u2191": e.MO.RELSTRETCH,
          "\u2192": e.MO.WIDEREL,
          "\u2193": e.MO.RELSTRETCH,
          "\u2194": e.MO.WIDEREL,
          "\u2195": e.MO.RELSTRETCH,
          "\u2196": e.MO.RELSTRETCH,
          "\u2197": e.MO.RELSTRETCH,
          "\u2198": e.MO.RELSTRETCH,
          "\u2199": e.MO.RELSTRETCH,
          "\u219a": e.MO.RELACCENT,
          "\u219b": e.MO.RELACCENT,
          "\u219c": e.MO.WIDEREL,
          "\u219d": e.MO.WIDEREL,
          "\u219e": e.MO.WIDEREL,
          "\u219f": e.MO.WIDEREL,
          "\u21a0": e.MO.WIDEREL,
          "\u21a1": e.MO.RELSTRETCH,
          "\u21a2": e.MO.WIDEREL,
          "\u21a3": e.MO.WIDEREL,
          "\u21a4": e.MO.WIDEREL,
          "\u21a5": e.MO.RELSTRETCH,
          "\u21a6": e.MO.WIDEREL,
          "\u21a7": e.MO.RELSTRETCH,
          "\u21a8": e.MO.RELSTRETCH,
          "\u21a9": e.MO.WIDEREL,
          "\u21aa": e.MO.WIDEREL,
          "\u21ab": e.MO.WIDEREL,
          "\u21ac": e.MO.WIDEREL,
          "\u21ad": e.MO.WIDEREL,
          "\u21ae": e.MO.RELACCENT,
          "\u21af": e.MO.RELSTRETCH,
          "\u21b0": e.MO.RELSTRETCH,
          "\u21b1": e.MO.RELSTRETCH,
          "\u21b2": e.MO.RELSTRETCH,
          "\u21b3": e.MO.RELSTRETCH,
          "\u21b4": e.MO.RELSTRETCH,
          "\u21b5": e.MO.RELSTRETCH,
          "\u21b6": e.MO.RELACCENT,
          "\u21b7": e.MO.RELACCENT,
          "\u21b8": e.MO.REL,
          "\u21b9": e.MO.WIDEREL,
          "\u21ba": e.MO.REL,
          "\u21bb": e.MO.REL,
          "\u21bc": e.MO.WIDEREL,
          "\u21bd": e.MO.WIDEREL,
          "\u21be": e.MO.RELSTRETCH,
          "\u21bf": e.MO.RELSTRETCH,
          "\u21c0": e.MO.WIDEREL,
          "\u21c1": e.MO.WIDEREL,
          "\u21c2": e.MO.RELSTRETCH,
          "\u21c3": e.MO.RELSTRETCH,
          "\u21c4": e.MO.WIDEREL,
          "\u21c5": e.MO.RELSTRETCH,
          "\u21c6": e.MO.WIDEREL,
          "\u21c7": e.MO.WIDEREL,
          "\u21c8": e.MO.RELSTRETCH,
          "\u21c9": e.MO.WIDEREL,
          "\u21ca": e.MO.RELSTRETCH,
          "\u21cb": e.MO.WIDEREL,
          "\u21cc": e.MO.WIDEREL,
          "\u21cd": e.MO.RELACCENT,
          "\u21ce": e.MO.RELACCENT,
          "\u21cf": e.MO.RELACCENT,
          "\u21d0": e.MO.WIDEREL,
          "\u21d1": e.MO.RELSTRETCH,
          "\u21d2": e.MO.WIDEREL,
          "\u21d3": e.MO.RELSTRETCH,
          "\u21d4": e.MO.WIDEREL,
          "\u21d5": e.MO.RELSTRETCH,
          "\u21d6": e.MO.RELSTRETCH,
          "\u21d7": e.MO.RELSTRETCH,
          "\u21d8": e.MO.RELSTRETCH,
          "\u21d9": e.MO.RELSTRETCH,
          "\u21da": e.MO.WIDEREL,
          "\u21db": e.MO.WIDEREL,
          "\u21dc": e.MO.WIDEREL,
          "\u21dd": e.MO.WIDEREL,
          "\u21de": e.MO.REL,
          "\u21df": e.MO.REL,
          "\u21e0": e.MO.WIDEREL,
          "\u21e1": e.MO.RELSTRETCH,
          "\u21e2": e.MO.WIDEREL,
          "\u21e3": e.MO.RELSTRETCH,
          "\u21e4": e.MO.WIDEREL,
          "\u21e5": e.MO.WIDEREL,
          "\u21e6": e.MO.WIDEREL,
          "\u21e7": e.MO.RELSTRETCH,
          "\u21e8": e.MO.WIDEREL,
          "\u21e9": e.MO.RELSTRETCH,
          "\u21ea": e.MO.RELSTRETCH,
          "\u21eb": e.MO.RELSTRETCH,
          "\u21ec": e.MO.RELSTRETCH,
          "\u21ed": e.MO.RELSTRETCH,
          "\u21ee": e.MO.RELSTRETCH,
          "\u21ef": e.MO.RELSTRETCH,
          "\u21f0": e.MO.WIDEREL,
          "\u21f1": e.MO.REL,
          "\u21f2": e.MO.REL,
          "\u21f3": e.MO.RELSTRETCH,
          "\u21f4": e.MO.RELACCENT,
          "\u21f5": e.MO.RELSTRETCH,
          "\u21f6": e.MO.WIDEREL,
          "\u21f7": e.MO.RELACCENT,
          "\u21f8": e.MO.RELACCENT,
          "\u21f9": e.MO.RELACCENT,
          "\u21fa": e.MO.RELACCENT,
          "\u21fb": e.MO.RELACCENT,
          "\u21fc": e.MO.RELACCENT,
          "\u21fd": e.MO.WIDEREL,
          "\u21fe": e.MO.WIDEREL,
          "\u21ff": e.MO.WIDEREL,
          "\u2201": n(1, 2, o.TEXCLASS.ORD),
          "\u2205": e.MO.ORD,
          "\u2206": e.MO.BIN3,
          "\u2208": e.MO.REL,
          "\u2209": e.MO.REL,
          "\u220a": e.MO.REL,
          "\u220b": e.MO.REL,
          "\u220c": e.MO.REL,
          "\u220d": e.MO.REL,
          "\u220e": e.MO.BIN3,
          "\u2212": e.MO.BIN4,
          "\u2213": e.MO.BIN4,
          "\u2214": e.MO.BIN4,
          "\u2215": e.MO.TALLBIN,
          "\u2216": e.MO.BIN4,
          "\u2217": e.MO.BIN4,
          "\u2218": e.MO.BIN4,
          "\u2219": e.MO.BIN4,
          "\u221d": e.MO.REL,
          "\u221e": e.MO.ORD,
          "\u221f": e.MO.REL,
          "\u2223": e.MO.REL,
          "\u2224": e.MO.REL,
          "\u2225": e.MO.REL,
          "\u2226": e.MO.REL,
          "\u2227": e.MO.BIN4,
          "\u2228": e.MO.BIN4,
          "\u2229": e.MO.BIN4,
          "\u222a": e.MO.BIN4,
          "\u2234": e.MO.REL,
          "\u2235": e.MO.REL,
          "\u2236": e.MO.REL,
          "\u2237": e.MO.REL,
          "\u2238": e.MO.BIN4,
          "\u2239": e.MO.REL,
          "\u223a": e.MO.BIN4,
          "\u223b": e.MO.REL,
          "\u223c": e.MO.REL,
          "\u223d": e.MO.REL,
          "\u223d\u0331": e.MO.BIN3,
          "\u223e": e.MO.REL,
          "\u223f": e.MO.BIN3,
          "\u2240": e.MO.BIN4,
          "\u2241": e.MO.REL,
          "\u2242": e.MO.REL,
          "\u2242\u0338": e.MO.REL,
          "\u2243": e.MO.REL,
          "\u2244": e.MO.REL,
          "\u2245": e.MO.REL,
          "\u2246": e.MO.REL,
          "\u2247": e.MO.REL,
          "\u2248": e.MO.REL,
          "\u2249": e.MO.REL,
          "\u224a": e.MO.REL,
          "\u224b": e.MO.REL,
          "\u224c": e.MO.REL,
          "\u224d": e.MO.REL,
          "\u224e": e.MO.REL,
          "\u224e\u0338": e.MO.REL,
          "\u224f": e.MO.REL,
          "\u224f\u0338": e.MO.REL,
          "\u2250": e.MO.REL,
          "\u2251": e.MO.REL,
          "\u2252": e.MO.REL,
          "\u2253": e.MO.REL,
          "\u2254": e.MO.REL,
          "\u2255": e.MO.REL,
          "\u2256": e.MO.REL,
          "\u2257": e.MO.REL,
          "\u2258": e.MO.REL,
          "\u2259": e.MO.REL,
          "\u225a": e.MO.REL,
          "\u225c": e.MO.REL,
          "\u225d": e.MO.REL,
          "\u225e": e.MO.REL,
          "\u225f": e.MO.REL,
          "\u2260": e.MO.REL,
          "\u2261": e.MO.REL,
          "\u2262": e.MO.REL,
          "\u2263": e.MO.REL,
          "\u2264": e.MO.REL,
          "\u2265": e.MO.REL,
          "\u2266": e.MO.REL,
          "\u2266\u0338": e.MO.REL,
          "\u2267": e.MO.REL,
          "\u2268": e.MO.REL,
          "\u2269": e.MO.REL,
          "\u226a": e.MO.REL,
          "\u226a\u0338": e.MO.REL,
          "\u226b": e.MO.REL,
          "\u226b\u0338": e.MO.REL,
          "\u226c": e.MO.REL,
          "\u226d": e.MO.REL,
          "\u226e": e.MO.REL,
          "\u226f": e.MO.REL,
          "\u2270": e.MO.REL,
          "\u2271": e.MO.REL,
          "\u2272": e.MO.REL,
          "\u2273": e.MO.REL,
          "\u2274": e.MO.REL,
          "\u2275": e.MO.REL,
          "\u2276": e.MO.REL,
          "\u2277": e.MO.REL,
          "\u2278": e.MO.REL,
          "\u2279": e.MO.REL,
          "\u227a": e.MO.REL,
          "\u227b": e.MO.REL,
          "\u227c": e.MO.REL,
          "\u227d": e.MO.REL,
          "\u227e": e.MO.REL,
          "\u227f": e.MO.REL,
          "\u227f\u0338": e.MO.REL,
          "\u2280": e.MO.REL,
          "\u2281": e.MO.REL,
          "\u2282": e.MO.REL,
          "\u2282\u20d2": e.MO.REL,
          "\u2283": e.MO.REL,
          "\u2283\u20d2": e.MO.REL,
          "\u2284": e.MO.REL,
          "\u2285": e.MO.REL,
          "\u2286": e.MO.REL,
          "\u2287": e.MO.REL,
          "\u2288": e.MO.REL,
          "\u2289": e.MO.REL,
          "\u228a": e.MO.REL,
          "\u228b": e.MO.REL,
          "\u228c": e.MO.BIN4,
          "\u228d": e.MO.BIN4,
          "\u228e": e.MO.BIN4,
          "\u228f": e.MO.REL,
          "\u228f\u0338": e.MO.REL,
          "\u2290": e.MO.REL,
          "\u2290\u0338": e.MO.REL,
          "\u2291": e.MO.REL,
          "\u2292": e.MO.REL,
          "\u2293": e.MO.BIN4,
          "\u2294": e.MO.BIN4,
          "\u2295": e.MO.BIN4,
          "\u2296": e.MO.BIN4,
          "\u2297": e.MO.BIN4,
          "\u2298": e.MO.BIN4,
          "\u2299": e.MO.BIN4,
          "\u229a": e.MO.BIN4,
          "\u229b": e.MO.BIN4,
          "\u229c": e.MO.BIN4,
          "\u229d": e.MO.BIN4,
          "\u229e": e.MO.BIN4,
          "\u229f": e.MO.BIN4,
          "\u22a0": e.MO.BIN4,
          "\u22a1": e.MO.BIN4,
          "\u22a2": e.MO.REL,
          "\u22a3": e.MO.REL,
          "\u22a4": e.MO.ORD55,
          "\u22a5": e.MO.REL,
          "\u22a6": e.MO.REL,
          "\u22a7": e.MO.REL,
          "\u22a8": e.MO.REL,
          "\u22a9": e.MO.REL,
          "\u22aa": e.MO.REL,
          "\u22ab": e.MO.REL,
          "\u22ac": e.MO.REL,
          "\u22ad": e.MO.REL,
          "\u22ae": e.MO.REL,
          "\u22af": e.MO.REL,
          "\u22b0": e.MO.REL,
          "\u22b1": e.MO.REL,
          "\u22b2": e.MO.REL,
          "\u22b3": e.MO.REL,
          "\u22b4": e.MO.REL,
          "\u22b5": e.MO.REL,
          "\u22b6": e.MO.REL,
          "\u22b7": e.MO.REL,
          "\u22b8": e.MO.REL,
          "\u22b9": e.MO.REL,
          "\u22ba": e.MO.BIN4,
          "\u22bb": e.MO.BIN4,
          "\u22bc": e.MO.BIN4,
          "\u22bd": e.MO.BIN4,
          "\u22be": e.MO.BIN3,
          "\u22bf": e.MO.BIN3,
          "\u22c4": e.MO.BIN4,
          "\u22c5": e.MO.BIN4,
          "\u22c6": e.MO.BIN4,
          "\u22c7": e.MO.BIN4,
          "\u22c8": e.MO.REL,
          "\u22c9": e.MO.BIN4,
          "\u22ca": e.MO.BIN4,
          "\u22cb": e.MO.BIN4,
          "\u22cc": e.MO.BIN4,
          "\u22cd": e.MO.REL,
          "\u22ce": e.MO.BIN4,
          "\u22cf": e.MO.BIN4,
          "\u22d0": e.MO.REL,
          "\u22d1": e.MO.REL,
          "\u22d2": e.MO.BIN4,
          "\u22d3": e.MO.BIN4,
          "\u22d4": e.MO.REL,
          "\u22d5": e.MO.REL,
          "\u22d6": e.MO.REL,
          "\u22d7": e.MO.REL,
          "\u22d8": e.MO.REL,
          "\u22d9": e.MO.REL,
          "\u22da": e.MO.REL,
          "\u22db": e.MO.REL,
          "\u22dc": e.MO.REL,
          "\u22dd": e.MO.REL,
          "\u22de": e.MO.REL,
          "\u22df": e.MO.REL,
          "\u22e0": e.MO.REL,
          "\u22e1": e.MO.REL,
          "\u22e2": e.MO.REL,
          "\u22e3": e.MO.REL,
          "\u22e4": e.MO.REL,
          "\u22e5": e.MO.REL,
          "\u22e6": e.MO.REL,
          "\u22e7": e.MO.REL,
          "\u22e8": e.MO.REL,
          "\u22e9": e.MO.REL,
          "\u22ea": e.MO.REL,
          "\u22eb": e.MO.REL,
          "\u22ec": e.MO.REL,
          "\u22ed": e.MO.REL,
          "\u22ee": e.MO.ORD55,
          "\u22ef": e.MO.INNER,
          "\u22f0": e.MO.REL,
          "\u22f1": [5, 5, o.TEXCLASS.INNER, null],
          "\u22f2": e.MO.REL,
          "\u22f3": e.MO.REL,
          "\u22f4": e.MO.REL,
          "\u22f5": e.MO.REL,
          "\u22f6": e.MO.REL,
          "\u22f7": e.MO.REL,
          "\u22f8": e.MO.REL,
          "\u22f9": e.MO.REL,
          "\u22fa": e.MO.REL,
          "\u22fb": e.MO.REL,
          "\u22fc": e.MO.REL,
          "\u22fd": e.MO.REL,
          "\u22fe": e.MO.REL,
          "\u22ff": e.MO.REL,
          "\u2305": e.MO.BIN3,
          "\u2306": e.MO.BIN3,
          "\u2322": e.MO.REL4,
          "\u2323": e.MO.REL4,
          "\u2329": e.MO.OPEN,
          "\u232a": e.MO.CLOSE,
          "\u23aa": e.MO.ORD,
          "\u23af": [0, 0, o.TEXCLASS.ORD, { stretchy: !0 }],
          "\u23b0": e.MO.OPEN,
          "\u23b1": e.MO.CLOSE,
          "\u2500": e.MO.ORD,
          "\u25b3": e.MO.BIN4,
          "\u25b5": e.MO.BIN4,
          "\u25b9": e.MO.BIN4,
          "\u25bd": e.MO.BIN4,
          "\u25bf": e.MO.BIN4,
          "\u25c3": e.MO.BIN4,
          "\u25ef": e.MO.BIN3,
          "\u2660": e.MO.ORD,
          "\u2661": e.MO.ORD,
          "\u2662": e.MO.ORD,
          "\u2663": e.MO.ORD,
          "\u2758": e.MO.REL,
          "\u27f0": e.MO.RELSTRETCH,
          "\u27f1": e.MO.RELSTRETCH,
          "\u27f5": e.MO.WIDEREL,
          "\u27f6": e.MO.WIDEREL,
          "\u27f7": e.MO.WIDEREL,
          "\u27f8": e.MO.WIDEREL,
          "\u27f9": e.MO.WIDEREL,
          "\u27fa": e.MO.WIDEREL,
          "\u27fb": e.MO.WIDEREL,
          "\u27fc": e.MO.WIDEREL,
          "\u27fd": e.MO.WIDEREL,
          "\u27fe": e.MO.WIDEREL,
          "\u27ff": e.MO.WIDEREL,
          "\u2900": e.MO.RELACCENT,
          "\u2901": e.MO.RELACCENT,
          "\u2902": e.MO.RELACCENT,
          "\u2903": e.MO.RELACCENT,
          "\u2904": e.MO.RELACCENT,
          "\u2905": e.MO.RELACCENT,
          "\u2906": e.MO.RELACCENT,
          "\u2907": e.MO.RELACCENT,
          "\u2908": e.MO.REL,
          "\u2909": e.MO.REL,
          "\u290a": e.MO.RELSTRETCH,
          "\u290b": e.MO.RELSTRETCH,
          "\u290c": e.MO.WIDEREL,
          "\u290d": e.MO.WIDEREL,
          "\u290e": e.MO.WIDEREL,
          "\u290f": e.MO.WIDEREL,
          "\u2910": e.MO.WIDEREL,
          "\u2911": e.MO.RELACCENT,
          "\u2912": e.MO.RELSTRETCH,
          "\u2913": e.MO.RELSTRETCH,
          "\u2914": e.MO.RELACCENT,
          "\u2915": e.MO.RELACCENT,
          "\u2916": e.MO.RELACCENT,
          "\u2917": e.MO.RELACCENT,
          "\u2918": e.MO.RELACCENT,
          "\u2919": e.MO.RELACCENT,
          "\u291a": e.MO.RELACCENT,
          "\u291b": e.MO.RELACCENT,
          "\u291c": e.MO.RELACCENT,
          "\u291d": e.MO.RELACCENT,
          "\u291e": e.MO.RELACCENT,
          "\u291f": e.MO.RELACCENT,
          "\u2920": e.MO.RELACCENT,
          "\u2921": e.MO.RELSTRETCH,
          "\u2922": e.MO.RELSTRETCH,
          "\u2923": e.MO.REL,
          "\u2924": e.MO.REL,
          "\u2925": e.MO.REL,
          "\u2926": e.MO.REL,
          "\u2927": e.MO.REL,
          "\u2928": e.MO.REL,
          "\u2929": e.MO.REL,
          "\u292a": e.MO.REL,
          "\u292b": e.MO.REL,
          "\u292c": e.MO.REL,
          "\u292d": e.MO.REL,
          "\u292e": e.MO.REL,
          "\u292f": e.MO.REL,
          "\u2930": e.MO.REL,
          "\u2931": e.MO.REL,
          "\u2932": e.MO.REL,
          "\u2933": e.MO.RELACCENT,
          "\u2934": e.MO.REL,
          "\u2935": e.MO.REL,
          "\u2936": e.MO.REL,
          "\u2937": e.MO.REL,
          "\u2938": e.MO.REL,
          "\u2939": e.MO.REL,
          "\u293a": e.MO.RELACCENT,
          "\u293b": e.MO.RELACCENT,
          "\u293c": e.MO.RELACCENT,
          "\u293d": e.MO.RELACCENT,
          "\u293e": e.MO.REL,
          "\u293f": e.MO.REL,
          "\u2940": e.MO.REL,
          "\u2941": e.MO.REL,
          "\u2942": e.MO.RELACCENT,
          "\u2943": e.MO.RELACCENT,
          "\u2944": e.MO.RELACCENT,
          "\u2945": e.MO.RELACCENT,
          "\u2946": e.MO.RELACCENT,
          "\u2947": e.MO.RELACCENT,
          "\u2948": e.MO.RELACCENT,
          "\u2949": e.MO.REL,
          "\u294a": e.MO.RELACCENT,
          "\u294b": e.MO.RELACCENT,
          "\u294c": e.MO.REL,
          "\u294d": e.MO.REL,
          "\u294e": e.MO.WIDEREL,
          "\u294f": e.MO.RELSTRETCH,
          "\u2950": e.MO.WIDEREL,
          "\u2951": e.MO.RELSTRETCH,
          "\u2952": e.MO.WIDEREL,
          "\u2953": e.MO.WIDEREL,
          "\u2954": e.MO.RELSTRETCH,
          "\u2955": e.MO.RELSTRETCH,
          "\u2956": e.MO.RELSTRETCH,
          "\u2957": e.MO.RELSTRETCH,
          "\u2958": e.MO.RELSTRETCH,
          "\u2959": e.MO.RELSTRETCH,
          "\u295a": e.MO.WIDEREL,
          "\u295b": e.MO.WIDEREL,
          "\u295c": e.MO.RELSTRETCH,
          "\u295d": e.MO.RELSTRETCH,
          "\u295e": e.MO.WIDEREL,
          "\u295f": e.MO.WIDEREL,
          "\u2960": e.MO.RELSTRETCH,
          "\u2961": e.MO.RELSTRETCH,
          "\u2962": e.MO.RELACCENT,
          "\u2963": e.MO.REL,
          "\u2964": e.MO.RELACCENT,
          "\u2965": e.MO.REL,
          "\u2966": e.MO.RELACCENT,
          "\u2967": e.MO.RELACCENT,
          "\u2968": e.MO.RELACCENT,
          "\u2969": e.MO.RELACCENT,
          "\u296a": e.MO.RELACCENT,
          "\u296b": e.MO.RELACCENT,
          "\u296c": e.MO.RELACCENT,
          "\u296d": e.MO.RELACCENT,
          "\u296e": e.MO.RELSTRETCH,
          "\u296f": e.MO.RELSTRETCH,
          "\u2970": e.MO.RELACCENT,
          "\u2971": e.MO.RELACCENT,
          "\u2972": e.MO.RELACCENT,
          "\u2973": e.MO.RELACCENT,
          "\u2974": e.MO.RELACCENT,
          "\u2975": e.MO.RELACCENT,
          "\u2976": e.MO.RELACCENT,
          "\u2977": e.MO.RELACCENT,
          "\u2978": e.MO.RELACCENT,
          "\u2979": e.MO.RELACCENT,
          "\u297a": e.MO.RELACCENT,
          "\u297b": e.MO.RELACCENT,
          "\u297c": e.MO.RELACCENT,
          "\u297d": e.MO.RELACCENT,
          "\u297e": e.MO.REL,
          "\u297f": e.MO.REL,
          "\u2981": e.MO.BIN3,
          "\u2982": e.MO.BIN3,
          "\u2999": e.MO.BIN3,
          "\u299a": e.MO.BIN3,
          "\u299b": e.MO.BIN3,
          "\u299c": e.MO.BIN3,
          "\u299d": e.MO.BIN3,
          "\u299e": e.MO.BIN3,
          "\u299f": e.MO.BIN3,
          "\u29a0": e.MO.BIN3,
          "\u29a1": e.MO.BIN3,
          "\u29a2": e.MO.BIN3,
          "\u29a3": e.MO.BIN3,
          "\u29a4": e.MO.BIN3,
          "\u29a5": e.MO.BIN3,
          "\u29a6": e.MO.BIN3,
          "\u29a7": e.MO.BIN3,
          "\u29a8": e.MO.BIN3,
          "\u29a9": e.MO.BIN3,
          "\u29aa": e.MO.BIN3,
          "\u29ab": e.MO.BIN3,
          "\u29ac": e.MO.BIN3,
          "\u29ad": e.MO.BIN3,
          "\u29ae": e.MO.BIN3,
          "\u29af": e.MO.BIN3,
          "\u29b0": e.MO.BIN3,
          "\u29b1": e.MO.BIN3,
          "\u29b2": e.MO.BIN3,
          "\u29b3": e.MO.BIN3,
          "\u29b4": e.MO.BIN3,
          "\u29b5": e.MO.BIN3,
          "\u29b6": e.MO.BIN4,
          "\u29b7": e.MO.BIN4,
          "\u29b8": e.MO.BIN4,
          "\u29b9": e.MO.BIN4,
          "\u29ba": e.MO.BIN4,
          "\u29bb": e.MO.BIN4,
          "\u29bc": e.MO.BIN4,
          "\u29bd": e.MO.BIN4,
          "\u29be": e.MO.BIN4,
          "\u29bf": e.MO.BIN4,
          "\u29c0": e.MO.REL,
          "\u29c1": e.MO.REL,
          "\u29c2": e.MO.BIN3,
          "\u29c3": e.MO.BIN3,
          "\u29c4": e.MO.BIN4,
          "\u29c5": e.MO.BIN4,
          "\u29c6": e.MO.BIN4,
          "\u29c7": e.MO.BIN4,
          "\u29c8": e.MO.BIN4,
          "\u29c9": e.MO.BIN3,
          "\u29ca": e.MO.BIN3,
          "\u29cb": e.MO.BIN3,
          "\u29cc": e.MO.BIN3,
          "\u29cd": e.MO.BIN3,
          "\u29ce": e.MO.REL,
          "\u29cf": e.MO.REL,
          "\u29cf\u0338": e.MO.REL,
          "\u29d0": e.MO.REL,
          "\u29d0\u0338": e.MO.REL,
          "\u29d1": e.MO.REL,
          "\u29d2": e.MO.REL,
          "\u29d3": e.MO.REL,
          "\u29d4": e.MO.REL,
          "\u29d5": e.MO.REL,
          "\u29d6": e.MO.BIN4,
          "\u29d7": e.MO.BIN4,
          "\u29d8": e.MO.BIN3,
          "\u29d9": e.MO.BIN3,
          "\u29db": e.MO.BIN3,
          "\u29dc": e.MO.BIN3,
          "\u29dd": e.MO.BIN3,
          "\u29de": e.MO.REL,
          "\u29df": e.MO.BIN3,
          "\u29e0": e.MO.BIN3,
          "\u29e1": e.MO.REL,
          "\u29e2": e.MO.BIN4,
          "\u29e3": e.MO.REL,
          "\u29e4": e.MO.REL,
          "\u29e5": e.MO.REL,
          "\u29e6": e.MO.REL,
          "\u29e7": e.MO.BIN3,
          "\u29e8": e.MO.BIN3,
          "\u29e9": e.MO.BIN3,
          "\u29ea": e.MO.BIN3,
          "\u29eb": e.MO.BIN3,
          "\u29ec": e.MO.BIN3,
          "\u29ed": e.MO.BIN3,
          "\u29ee": e.MO.BIN3,
          "\u29ef": e.MO.BIN3,
          "\u29f0": e.MO.BIN3,
          "\u29f1": e.MO.BIN3,
          "\u29f2": e.MO.BIN3,
          "\u29f3": e.MO.BIN3,
          "\u29f4": e.MO.REL,
          "\u29f5": e.MO.BIN4,
          "\u29f6": e.MO.BIN4,
          "\u29f7": e.MO.BIN4,
          "\u29f8": e.MO.BIN3,
          "\u29f9": e.MO.BIN3,
          "\u29fa": e.MO.BIN3,
          "\u29fb": e.MO.BIN3,
          "\u29fe": e.MO.BIN4,
          "\u29ff": e.MO.BIN4,
          "\u2a1d": e.MO.BIN3,
          "\u2a1e": e.MO.BIN3,
          "\u2a1f": e.MO.BIN3,
          "\u2a20": e.MO.BIN3,
          "\u2a21": e.MO.BIN3,
          "\u2a22": e.MO.BIN4,
          "\u2a23": e.MO.BIN4,
          "\u2a24": e.MO.BIN4,
          "\u2a25": e.MO.BIN4,
          "\u2a26": e.MO.BIN4,
          "\u2a27": e.MO.BIN4,
          "\u2a28": e.MO.BIN4,
          "\u2a29": e.MO.BIN4,
          "\u2a2a": e.MO.BIN4,
          "\u2a2b": e.MO.BIN4,
          "\u2a2c": e.MO.BIN4,
          "\u2a2d": e.MO.BIN4,
          "\u2a2e": e.MO.BIN4,
          "\u2a2f": e.MO.BIN4,
          "\u2a30": e.MO.BIN4,
          "\u2a31": e.MO.BIN4,
          "\u2a32": e.MO.BIN4,
          "\u2a33": e.MO.BIN4,
          "\u2a34": e.MO.BIN4,
          "\u2a35": e.MO.BIN4,
          "\u2a36": e.MO.BIN4,
          "\u2a37": e.MO.BIN4,
          "\u2a38": e.MO.BIN4,
          "\u2a39": e.MO.BIN4,
          "\u2a3a": e.MO.BIN4,
          "\u2a3b": e.MO.BIN4,
          "\u2a3c": e.MO.BIN4,
          "\u2a3d": e.MO.BIN4,
          "\u2a3e": e.MO.BIN4,
          "\u2a3f": e.MO.BIN4,
          "\u2a40": e.MO.BIN4,
          "\u2a41": e.MO.BIN4,
          "\u2a42": e.MO.BIN4,
          "\u2a43": e.MO.BIN4,
          "\u2a44": e.MO.BIN4,
          "\u2a45": e.MO.BIN4,
          "\u2a46": e.MO.BIN4,
          "\u2a47": e.MO.BIN4,
          "\u2a48": e.MO.BIN4,
          "\u2a49": e.MO.BIN4,
          "\u2a4a": e.MO.BIN4,
          "\u2a4b": e.MO.BIN4,
          "\u2a4c": e.MO.BIN4,
          "\u2a4d": e.MO.BIN4,
          "\u2a4e": e.MO.BIN4,
          "\u2a4f": e.MO.BIN4,
          "\u2a50": e.MO.BIN4,
          "\u2a51": e.MO.BIN4,
          "\u2a52": e.MO.BIN4,
          "\u2a53": e.MO.BIN4,
          "\u2a54": e.MO.BIN4,
          "\u2a55": e.MO.BIN4,
          "\u2a56": e.MO.BIN4,
          "\u2a57": e.MO.BIN4,
          "\u2a58": e.MO.BIN4,
          "\u2a59": e.MO.REL,
          "\u2a5a": e.MO.BIN4,
          "\u2a5b": e.MO.BIN4,
          "\u2a5c": e.MO.BIN4,
          "\u2a5d": e.MO.BIN4,
          "\u2a5e": e.MO.BIN4,
          "\u2a5f": e.MO.BIN4,
          "\u2a60": e.MO.BIN4,
          "\u2a61": e.MO.BIN4,
          "\u2a62": e.MO.BIN4,
          "\u2a63": e.MO.BIN4,
          "\u2a64": e.MO.BIN4,
          "\u2a65": e.MO.BIN4,
          "\u2a66": e.MO.REL,
          "\u2a67": e.MO.REL,
          "\u2a68": e.MO.REL,
          "\u2a69": e.MO.REL,
          "\u2a6a": e.MO.REL,
          "\u2a6b": e.MO.REL,
          "\u2a6c": e.MO.REL,
          "\u2a6d": e.MO.REL,
          "\u2a6e": e.MO.REL,
          "\u2a6f": e.MO.REL,
          "\u2a70": e.MO.REL,
          "\u2a71": e.MO.BIN4,
          "\u2a72": e.MO.BIN4,
          "\u2a73": e.MO.REL,
          "\u2a74": e.MO.REL,
          "\u2a75": e.MO.REL,
          "\u2a76": e.MO.REL,
          "\u2a77": e.MO.REL,
          "\u2a78": e.MO.REL,
          "\u2a79": e.MO.REL,
          "\u2a7a": e.MO.REL,
          "\u2a7b": e.MO.REL,
          "\u2a7c": e.MO.REL,
          "\u2a7d": e.MO.REL,
          "\u2a7d\u0338": e.MO.REL,
          "\u2a7e": e.MO.REL,
          "\u2a7e\u0338": e.MO.REL,
          "\u2a7f": e.MO.REL,
          "\u2a80": e.MO.REL,
          "\u2a81": e.MO.REL,
          "\u2a82": e.MO.REL,
          "\u2a83": e.MO.REL,
          "\u2a84": e.MO.REL,
          "\u2a85": e.MO.REL,
          "\u2a86": e.MO.REL,
          "\u2a87": e.MO.REL,
          "\u2a88": e.MO.REL,
          "\u2a89": e.MO.REL,
          "\u2a8a": e.MO.REL,
          "\u2a8b": e.MO.REL,
          "\u2a8c": e.MO.REL,
          "\u2a8d": e.MO.REL,
          "\u2a8e": e.MO.REL,
          "\u2a8f": e.MO.REL,
          "\u2a90": e.MO.REL,
          "\u2a91": e.MO.REL,
          "\u2a92": e.MO.REL,
          "\u2a93": e.MO.REL,
          "\u2a94": e.MO.REL,
          "\u2a95": e.MO.REL,
          "\u2a96": e.MO.REL,
          "\u2a97": e.MO.REL,
          "\u2a98": e.MO.REL,
          "\u2a99": e.MO.REL,
          "\u2a9a": e.MO.REL,
          "\u2a9b": e.MO.REL,
          "\u2a9c": e.MO.REL,
          "\u2a9d": e.MO.REL,
          "\u2a9e": e.MO.REL,
          "\u2a9f": e.MO.REL,
          "\u2aa0": e.MO.REL,
          "\u2aa1": e.MO.REL,
          "\u2aa1\u0338": e.MO.REL,
          "\u2aa2": e.MO.REL,
          "\u2aa2\u0338": e.MO.REL,
          "\u2aa3": e.MO.REL,
          "\u2aa4": e.MO.REL,
          "\u2aa5": e.MO.REL,
          "\u2aa6": e.MO.REL,
          "\u2aa7": e.MO.REL,
          "\u2aa8": e.MO.REL,
          "\u2aa9": e.MO.REL,
          "\u2aaa": e.MO.REL,
          "\u2aab": e.MO.REL,
          "\u2aac": e.MO.REL,
          "\u2aad": e.MO.REL,
          "\u2aae": e.MO.REL,
          "\u2aaf": e.MO.REL,
          "\u2aaf\u0338": e.MO.REL,
          "\u2ab0": e.MO.REL,
          "\u2ab0\u0338": e.MO.REL,
          "\u2ab1": e.MO.REL,
          "\u2ab2": e.MO.REL,
          "\u2ab3": e.MO.REL,
          "\u2ab4": e.MO.REL,
          "\u2ab5": e.MO.REL,
          "\u2ab6": e.MO.REL,
          "\u2ab7": e.MO.REL,
          "\u2ab8": e.MO.REL,
          "\u2ab9": e.MO.REL,
          "\u2aba": e.MO.REL,
          "\u2abb": e.MO.REL,
          "\u2abc": e.MO.REL,
          "\u2abd": e.MO.REL,
          "\u2abe": e.MO.REL,
          "\u2abf": e.MO.REL,
          "\u2ac0": e.MO.REL,
          "\u2ac1": e.MO.REL,
          "\u2ac2": e.MO.REL,
          "\u2ac3": e.MO.REL,
          "\u2ac4": e.MO.REL,
          "\u2ac5": e.MO.REL,
          "\u2ac6": e.MO.REL,
          "\u2ac7": e.MO.REL,
          "\u2ac8": e.MO.REL,
          "\u2ac9": e.MO.REL,
          "\u2aca": e.MO.REL,
          "\u2acb": e.MO.REL,
          "\u2acc": e.MO.REL,
          "\u2acd": e.MO.REL,
          "\u2ace": e.MO.REL,
          "\u2acf": e.MO.REL,
          "\u2ad0": e.MO.REL,
          "\u2ad1": e.MO.REL,
          "\u2ad2": e.MO.REL,
          "\u2ad3": e.MO.REL,
          "\u2ad4": e.MO.REL,
          "\u2ad5": e.MO.REL,
          "\u2ad6": e.MO.REL,
          "\u2ad7": e.MO.REL,
          "\u2ad8": e.MO.REL,
          "\u2ad9": e.MO.REL,
          "\u2ada": e.MO.REL,
          "\u2adb": e.MO.REL,
          "\u2adc": e.MO.REL,
          "\u2add": e.MO.REL,
          "\u2ade": e.MO.REL,
          "\u2adf": e.MO.REL,
          "\u2ae0": e.MO.REL,
          "\u2ae1": e.MO.REL,
          "\u2ae2": e.MO.REL,
          "\u2ae3": e.MO.REL,
          "\u2ae4": e.MO.REL,
          "\u2ae5": e.MO.REL,
          "\u2ae6": e.MO.REL,
          "\u2ae7": e.MO.REL,
          "\u2ae8": e.MO.REL,
          "\u2ae9": e.MO.REL,
          "\u2aea": e.MO.REL,
          "\u2aeb": e.MO.REL,
          "\u2aec": e.MO.REL,
          "\u2aed": e.MO.REL,
          "\u2aee": e.MO.REL,
          "\u2aef": e.MO.REL,
          "\u2af0": e.MO.REL,
          "\u2af1": e.MO.REL,
          "\u2af2": e.MO.REL,
          "\u2af3": e.MO.REL,
          "\u2af4": e.MO.BIN4,
          "\u2af5": e.MO.BIN4,
          "\u2af6": e.MO.BIN4,
          "\u2af7": e.MO.REL,
          "\u2af8": e.MO.REL,
          "\u2af9": e.MO.REL,
          "\u2afa": e.MO.REL,
          "\u2afb": e.MO.BIN4,
          "\u2afd": e.MO.BIN4,
          "\u2afe": e.MO.BIN3,
          "\u2b45": e.MO.RELSTRETCH,
          "\u2b46": e.MO.RELSTRETCH,
          "\u3008": e.MO.OPEN,
          "\u3009": e.MO.CLOSE,
          "\ufe37": e.MO.WIDEACCENT,
          "\ufe38": e.MO.WIDEACCENT,
        },
      }),
      (e.OPTABLE.infix["^"] = e.MO.WIDEREL),
      (e.OPTABLE.infix._ = e.MO.WIDEREL),
      (e.OPTABLE.prefix["\u2223"] = e.MO.OPEN),
      (e.OPTABLE.prefix["\u2225"] = e.MO.OPEN),
      (e.OPTABLE.postfix["\u2223"] = e.MO.CLOSE),
      (e.OPTABLE.postfix["\u2225"] = e.MO.CLOSE);
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlTokenNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mtext";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "isSpacelike", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i({}, a.AbstractMmlTokenNode.defaults)),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMtext = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlTokenNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mspace";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "isSpacelike", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "hasNewline", {
          get: function () {
            var t = this.attributes;
            return (
              null == t.getExplicit("width") &&
              null == t.getExplicit("height") &&
              null == t.getExplicit("depth") &&
              "newline" === t.get("linebreak")
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i(i({}, a.AbstractMmlTokenNode.defaults), {
          width: "0em",
          height: "0ex",
          depth: "0ex",
          linebreak: "auto",
        })),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMspace = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlTokenNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "ms";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i(i({}, a.AbstractMmlTokenNode.defaults), {
          lquote: '"',
          rquote: '"',
        })),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMs = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
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
    var s,
      c = r(0),
      a =
        ((s = c.AbstractMmlNode),
        o(l, s),
        Object.defineProperty(l.prototype, "kind", {
          get: function () {
            return "mrow";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(l.prototype, "isSpacelike", {
          get: function () {
            var e, t;
            try {
              for (
                var r = u(this.childNodes), n = r.next();
                !n.done;
                n = r.next()
              )
                if (!n.value.isSpacelike) return !1;
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                n && !n.done && (t = r.return) && t.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(l.prototype, "isEmbellished", {
          get: function () {
            var e,
              t,
              r = !1,
              n = 0;
            try {
              for (
                var o = u(this.childNodes), i = o.next();
                !i.done;
                i = o.next()
              ) {
                var s = i.value;
                if (s)
                  if (s.isEmbellished) {
                    if (r) return !1;
                    (r = !0), (this._core = n);
                  } else if (!s.isSpacelike) return !1;
                n++;
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (t = o.return) && t.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
            return r;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (l.prototype.core = function () {
          return this.isEmbellished && null != this._core
            ? this.childNodes[this._core]
            : this;
        }),
        (l.prototype.coreMO = function () {
          return this.isEmbellished && null != this._core
            ? this.childNodes[this._core].coreMO()
            : this;
        }),
        (l.prototype.nonSpaceLength = function () {
          var e,
            t,
            r = 0;
          try {
            for (
              var n = u(this.childNodes), o = n.next();
              !o.done;
              o = n.next()
            ) {
              var i = o.value;
              i && !i.isSpacelike && r++;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return r;
        }),
        (l.prototype.firstNonSpace = function () {
          var e, t;
          try {
            for (
              var r = u(this.childNodes), n = r.next();
              !n.done;
              n = r.next()
            ) {
              var o = n.value;
              if (o && !o.isSpacelike) return o;
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
          return null;
        }),
        (l.prototype.lastNonSpace = function () {
          for (var t = this.childNodes.length; 0 <= --t; ) {
            var e = this.childNodes[t];
            if (e && !e.isSpacelike) return e;
          }
          return null;
        }),
        (l.prototype.setTeXclass = function (t) {
          var e, r, n, o;
          if (
            (null == this.getProperty("open") &&
              null == this.getProperty("close")) ||
            (t && null == t.getProperty("fnOp"))
          ) {
            try {
              for (
                var i = u(this.childNodes), s = i.next();
                !s.done;
                s = i.next()
              )
                t = s.value.setTeXclass(t);
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                s && !s.done && (o = i.return) && o.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            this.childNodes[0] && this.updateTeXclass(this.childNodes[0]);
          } else {
            this.getPrevClass(t), (t = null);
            try {
              for (
                var a = u(this.childNodes), l = a.next();
                !l.done;
                l = a.next()
              )
                t = l.value.setTeXclass(t);
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                l && !l.done && (r = a.return) && r.call(a);
              } finally {
                if (e) throw e.error;
              }
            }
            null == this.texClass && (this.texClass = c.TEXCLASS.INNER);
          }
          return t;
        }),
        (l.defaults = i({}, c.AbstractMmlNode.defaults)),
        l);
    function l() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t._core = null), t;
    }
    e.MmlMrow = a;
    var p,
      f =
        (o(h, (p = a)),
        Object.defineProperty(h.prototype, "kind", {
          get: function () {
            return "inferredMrow";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(h.prototype, "isInferred", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(h.prototype, "notParent", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (h.prototype.toString = function () {
          return "[" + this.childNodes.join(",") + "]";
        }),
        (h.defaults = a.defaults),
        h);
    function h() {
      return (null !== p && p.apply(this, arguments)) || this;
    }
    e.MmlInferredMrow = f;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
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
    var a,
      l = r(0),
      u =
        ((a = l.AbstractMmlBaseNode),
        o(c, a),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "mfrac";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "linebreakContainer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.setTeXclass = function (t) {
          var e, r;
          this.getPrevClass(t);
          try {
            for (
              var n = s(this.childNodes), o = n.next();
              !o.done;
              o = n.next()
            )
              o.value.setTeXclass(null);
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return this.isEmbellished && this.updateTeXclass(this.core()), this;
        }),
        (c.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          (!e || 0 < r) && r++,
            this.childNodes[0].setInheritedAttributes(t, !1, r, n),
            this.childNodes[1].setInheritedAttributes(t, !1, r, !0);
        }),
        (c.defaults = i(i({}, l.AbstractMmlBaseNode.defaults), {
          linethickness: "medium",
          numalign: "center",
          denomalign: "center",
          bevelled: !1,
        })),
        c);
    function c() {
      return (null !== a && a.apply(this, arguments)) || this;
    }
    e.MmlMfrac = u;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "msqrt";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "linebreakContainer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setTeXclass = function (t) {
          return (
            this.getPrevClass(t), this.childNodes[0].setTeXclass(null), this
          );
        }),
        (u.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          this.childNodes[0].setInheritedAttributes(t, e, r, !0);
        }),
        (u.defaults = i({}, a.AbstractMmlNode.defaults)),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMsqrt = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mroot";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          this.childNodes[0].setInheritedAttributes(t, e, r, !0),
            this.childNodes[1].setInheritedAttributes(t, !1, r + 2, n);
        }),
        (u.defaults = i({}, a.AbstractMmlNode.defaults)),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMroot = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l = r(2),
      u =
        ((s = a.AbstractMmlLayoutNode),
        o(c, s),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "mstyle";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "notParent", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o = this.attributes.getExplicit("scriptlevel");
          null != o &&
            ((o = o.toString()).match(/^\s*[-+]/)
              ? (r += parseInt(o))
              : (r = parseInt(o)));
          var i = this.attributes.getExplicit("displaystyle");
          null != i && (e = !0 === i),
            (t = this.addInheritedAttributes(
              t,
              this.attributes.getAllAttributes()
            )),
            this.childNodes[0].setInheritedAttributes(t, e, r, n);
        }),
        (c.defaults = i(i({}, a.AbstractMmlLayoutNode.defaults), {
          scriptlevel: l.INHERIT,
          displaystyle: l.INHERIT,
          scriptsizemultiplier: 1 / Math.sqrt(2),
          scriptminsize: "8px",
          mathbackground: l.INHERIT,
          mathcolor: l.INHERIT,
          dir: l.INHERIT,
          infixlinebreakstyle: "before",
        })),
        c);
    function c() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMstyle = u;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "merror";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "linebreakContainer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i({}, a.AbstractMmlNode.defaults)),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMerror = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlLayoutNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mpadded";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i(i({}, a.AbstractMmlLayoutNode.defaults), {
          width: "",
          height: "",
          depth: "",
          lspace: 0,
          voffset: 0,
        })),
        u);
    function u() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMpadded = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlLayoutNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mphantom";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i({}, a.AbstractMmlLayoutNode.defaults)),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMphantom = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
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
    var c,
      p = r(0),
      s =
        ((c = p.AbstractMmlNode),
        o(a, c),
        Object.defineProperty(a.prototype, "kind", {
          get: function () {
            return "mfenced";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (a.prototype.setTeXclass = function (t) {
          this.getPrevClass(t),
            this.open && (t = this.open.setTeXclass(t)),
            this.childNodes[0] && (t = this.childNodes[0].setTeXclass(t));
          for (var e = 1, r = this.childNodes.length; e < r; e++)
            this.separators[e - 1] &&
              (t = this.separators[e - 1].setTeXclass(t)),
              this.childNodes[e] && (t = this.childNodes[e].setTeXclass(t));
          return (
            this.close && (t = this.close.setTeXclass(t)),
            this.updateTeXclass(this.open),
            t
          );
        }),
        (a.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o, i;
          this.addFakeNodes();
          try {
            for (
              var s = u([this.open, this.close].concat(this.separators)),
                a = s.next();
              !a.done;
              a = s.next()
            ) {
              var l = a.value;
              l && l.setInheritedAttributes(t, e, r, n);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              a && !a.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
          c.prototype.setChildInheritedAttributes.call(this, t, e, r, n);
        }),
        (a.prototype.addFakeNodes = function () {
          var e,
            t,
            r = this.attributes.getList("open", "close", "separators"),
            n = r.open,
            o = r.close,
            i = r.separators;
          if (
            ((n = n.replace(/[ \t\n\r]/g, "")),
            (o = o.replace(/[ \t\n\r]/g, "")),
            (i = i.replace(/[ \t\n\r]/g, "")),
            n &&
              (this.open = this.fakeNode(
                n,
                { fence: !0, form: "prefix" },
                p.TEXCLASS.OPEN
              )),
            i)
          ) {
            for (; i.length < this.childNodes.length - 1; )
              i += i.charAt(i.length - 1);
            var s = 0;
            try {
              for (
                var a = u(this.childNodes.slice(1)), l = a.next();
                !l.done;
                l = a.next()
              )
                l.value && this.separators.push(this.fakeNode(i.charAt(s++)));
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                l && !l.done && (t = a.return) && t.call(a);
              } finally {
                if (e) throw e.error;
              }
            }
          }
          o &&
            (this.close = this.fakeNode(
              o,
              { fence: !0, form: "postfix" },
              p.TEXCLASS.CLOSE
            ));
        }),
        (a.prototype.fakeNode = function (t, e, r) {
          void 0 === e && (e = {}), void 0 === r && (r = null);
          var n = this.factory.create("text").setText(t),
            o = this.factory.create("mo", e, [n]);
          return (o.texClass = r), (o.parent = this), o;
        }),
        (a.defaults = i(i({}, p.AbstractMmlNode.defaults), {
          open: "(",
          close: ")",
          separators: ",",
        })),
        a);
    function a() {
      var t = (null !== c && c.apply(this, arguments)) || this;
      return (
        (t.texClass = p.TEXCLASS.INNER),
        (t.separators = []),
        (t.open = null),
        (t.close = null),
        t
      );
    }
    e.MmlMfenced = s;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "menclose";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "linebreakContininer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setTeXclass = function (t) {
          return (
            (t = this.childNodes[0].setTeXclass(t)),
            this.updateTeXclass(this.childNodes[0]),
            t
          );
        }),
        (u.defaults = i(i({}, a.AbstractMmlNode.defaults), {
          notation: "longdiv",
        })),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMenclose = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "maction";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "selected", {
          get: function () {
            var t = this.attributes.get("selection"),
              e = Math.max(1, Math.min(this.childNodes.length, t)) - 1;
            return this.childNodes[e] || this.factory.create("mrow");
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "isEmbellished", {
          get: function () {
            return this.selected.isEmbellished;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "isSpacelike", {
          get: function () {
            return this.selected.isSpacelike;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.core = function () {
          return this.selected.core();
        }),
        (u.prototype.coreMO = function () {
          return this.selected.coreMO();
        }),
        (u.prototype.verifyAttributes = function (t) {
          s.prototype.verifyAttributes.call(this, t),
            "toggle" !== this.attributes.get("actiontype") &&
              void 0 !== this.attributes.getExplicit("selection") &&
              delete this.attributes.getAllAttributes().selection;
        }),
        (u.prototype.setTeXclass = function (t) {
          "tooltip" === this.attributes.get("actiontype") &&
            this.childNodes[1] &&
            this.childNodes[1].setTeXclass(null);
          var e = this.selected;
          return (t = e.setTeXclass(t)), this.updateTeXclass(e), t;
        }),
        (u.prototype.nextToggleSelection = function () {
          var t = Math.max(1, this.attributes.get("selection") + 1);
          t > this.childNodes.length && (t = 1),
            this.attributes.set("selection", t);
        }),
        (u.defaults = i(i({}, a.AbstractMmlNode.defaults), {
          actiontype: "toggle",
          selection: 1,
        })),
        u);
    function u() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMaction = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlBaseNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "munderover";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return 3;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "base", {
          get: function () {
            return 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "under", {
          get: function () {
            return 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "over", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "linebreakContainer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o = this.childNodes;
          o[0].setInheritedAttributes(t, e, r, n || !!o[this.over]);
          var i = !(e || !o[0].coreMO().attributes.get("movablelimits")),
            s = this.constructor.ACCENTS;
          o[1].setInheritedAttributes(
            t,
            !1,
            this.getScriptlevel(s[1], i, r),
            n || 1 === this.under
          ),
            this.setInheritedAccent(1, s[1], e, r, n, i),
            o[2] &&
              (o[2].setInheritedAttributes(
                t,
                !1,
                this.getScriptlevel(s[2], i, r),
                n || 2 === this.under
              ),
              this.setInheritedAccent(2, s[2], e, r, n, i));
        }),
        (u.prototype.getScriptlevel = function (t, e, r) {
          return (!e && this.attributes.get(t)) || r++, r;
        }),
        (u.prototype.setInheritedAccent = function (t, e, r, n, o, i) {
          var s = this.childNodes[t];
          if (null == this.attributes.getExplicit(e) && s.isEmbellished) {
            var a = s.coreMO().attributes.get("accent");
            this.attributes.setInherited(e, a),
              a !== this.attributes.getDefault(e) &&
                s.setInheritedAttributes(
                  {},
                  r,
                  this.getScriptlevel(e, i, n),
                  o
                );
          }
        }),
        (u.defaults = i(i({}, a.AbstractMmlBaseNode.defaults), {
          accent: !1,
          accentunder: !1,
          align: "center",
        })),
        (u.ACCENTS = ["", "accentunder", "accent"]),
        u);
    function u() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMunderover = l;
    var c,
      p =
        (o(f, (c = l)),
        Object.defineProperty(f.prototype, "kind", {
          get: function () {
            return "munder";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(f.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (f.defaults = i({}, l.defaults)),
        f);
    function f() {
      return (null !== c && c.apply(this, arguments)) || this;
    }
    e.MmlMunder = p;
    var h,
      d =
        (o(y, (h = l)),
        Object.defineProperty(y.prototype, "kind", {
          get: function () {
            return "mover";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(y.prototype, "arity", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(y.prototype, "over", {
          get: function () {
            return 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(y.prototype, "under", {
          get: function () {
            return 2;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (y.defaults = i({}, l.defaults)),
        (y.ACCENTS = ["", "accent", "accentunder"]),
        y);
    function y() {
      return (null !== h && h.apply(this, arguments)) || this;
    }
    e.MmlMover = d;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l = r(12),
      u =
        ((s = l.MmlMsubsup),
        o(c, s),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "mmultiscripts";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "arity", {
          get: function () {
            return 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          this.childNodes[0].setInheritedAttributes(t, e, r, n);
          for (var o = !1, i = 1, s = 0; i < this.childNodes.length; i++) {
            var a = this.childNodes[i];
            if (a.isKind("mprescripts")) {
              if (!o && ((o = !0), i % 2 == 0)) {
                var l = this.factory.create("mrow");
                this.childNodes.splice(i, 0, l), (l.parent = this), i++;
              }
            } else {
              var u = n || s % 2 == 0;
              a.setInheritedAttributes(t, !1, r + 1, u), s++;
            }
          }
          this.childNodes.length % 2 == (o ? 1 : 0) &&
            (this.appendChild(this.factory.create("mrow")),
            this.childNodes[this.childNodes.length - 1].setInheritedAttributes(
              t,
              !1,
              r + 1,
              n
            ));
        }),
        (c.prototype.verifyChildren = function (t) {
          for (
            var e = !1, r = t.fixMmultiscripts, n = 0;
            n < this.childNodes.length;
            n++
          ) {
            var o = this.childNodes[n];
            o.isKind("mprescripts") &&
              (e
                ? o.mError(
                    o.kind + " can only appear once in " + this.kind,
                    t,
                    !0
                  )
                : ((e = !0),
                  n % 2 != 0 ||
                    r ||
                    this.mError(
                      "There must be an equal number of prescripts of each type",
                      t
                    )));
          }
          this.childNodes.length % 2 != (e ? 1 : 0) ||
            r ||
            this.mError(
              "There must be an equal number of scripts of each type",
              t
            ),
            s.prototype.verifyChildren.call(this, t);
        }),
        (c.defaults = i({}, l.MmlMsubsup.defaults)),
        c);
    function c() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMmultiscripts = u;
    var p,
      f =
        ((p = a.AbstractMmlNode),
        o(h, p),
        Object.defineProperty(h.prototype, "kind", {
          get: function () {
            return "mprescripts";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(h.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (h.prototype.verifyTree = function (t) {
          p.prototype.verifyTree.call(this, t),
            this.parent &&
              !this.parent.isKind("mmultiscripts") &&
              this.mError(
                this.kind + " must be a child of mmultiscripts",
                t,
                !0
              );
        }),
        (h.defaults = i({}, a.AbstractMmlNode.defaults)),
        h);
    function h() {
      return (null !== p && p.apply(this, arguments)) || this;
    }
    e.MmlMprescripts = f;
    var d,
      y =
        ((d = a.AbstractMmlNode),
        o(O, d),
        Object.defineProperty(O.prototype, "kind", {
          get: function () {
            return "none";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(O.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (O.prototype.verifyTree = function (t) {
          d.prototype.verifyTree.call(this, t),
            this.parent &&
              !this.parent.isKind("mmultiscripts") &&
              this.mError(
                this.kind + " must be a child of mmultiscripts",
                t,
                !0
              );
        }),
        (O.defaults = i({}, a.AbstractMmlNode.defaults)),
        O);
    function O() {
      return (null !== d && d.apply(this, arguments)) || this;
    }
    e.MmlNone = y;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
      d =
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
    var u,
      c = r(0),
      y = r(13),
      s =
        ((u = c.AbstractMmlNode),
        o(a, u),
        Object.defineProperty(a.prototype, "kind", {
          get: function () {
            return "mtable";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(a.prototype, "linebreakContainer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (a.prototype.setInheritedAttributes = function (t, e, r, n) {
          var o, i;
          try {
            for (
              var s = d(c.indentAttributes), a = s.next();
              !a.done;
              a = s.next()
            ) {
              var l = a.value;
              t[l] && this.attributes.setInherited(l, t[l][1]),
                void 0 !== this.attributes.getExplicit(l) &&
                  delete this.attributes.getAllAttributes()[l];
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              a && !a.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
          u.prototype.setInheritedAttributes.call(this, t, e, r, n);
        }),
        (a.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o, i, s, a;
          try {
            for (
              var l = d(this.childNodes), u = l.next();
              !u.done;
              u = l.next()
            )
              (h = u.value).isKind("mtr") ||
                this.replaceChild(this.factory.create("mtr"), h).appendChild(h);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              u && !u.done && (i = l.return) && i.call(l);
            } finally {
              if (o) throw o.error;
            }
          }
          (e = !(
            !this.attributes.getExplicit("displaystyle") &&
            !this.attributes.getDefault("displaystyle")
          )),
            (t = this.addInheritedAttributes(t, {
              columnalign: this.attributes.get("columnalign"),
              rowalign: "center",
            }));
          var c = y.split(this.attributes.get("rowalign"));
          try {
            for (
              var p = d(this.childNodes), f = p.next();
              !f.done;
              f = p.next()
            ) {
              var h = f.value;
              (t.rowalign[1] = c.shift() || t.rowalign[1]),
                h.setInheritedAttributes(t, e, r, n);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              f && !f.done && (a = p.return) && a.call(p);
            } finally {
              if (s) throw s.error;
            }
          }
        }),
        (a.prototype.verifyChildren = function (t) {
          var e, r;
          if (!t.fixMtables)
            try {
              for (
                var n = d(this.childNodes), o = n.next();
                !o.done;
                o = n.next()
              )
                o.value.isKind("mtr") ||
                  this.mError(
                    "Children of " + this.kind + " must be mtr or mlabeledtr",
                    t
                  );
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (r = n.return) && r.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
          u.prototype.verifyChildren.call(this, t);
        }),
        (a.prototype.setTeXclass = function (t) {
          var e, r;
          this.getPrevClass(t);
          try {
            for (
              var n = d(this.childNodes), o = n.next();
              !o.done;
              o = n.next()
            )
              o.value.setTeXclass(null);
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return this;
        }),
        (a.defaults = i(i({}, c.AbstractMmlNode.defaults), {
          align: "axis",
          rowalign: "baseline",
          columnalign: "center",
          groupalign: "{left}",
          alignmentscope: !0,
          columnwidth: "auto",
          width: "auto",
          rowspacing: "1ex",
          columnspacing: ".8em",
          rowlines: "none",
          columnlines: "none",
          frame: "none",
          framespacing: "0.4em 0.5ex",
          equalrows: !1,
          equalcolumns: !1,
          displaystyle: !1,
          side: "right",
          minlabelspacing: "0.8em",
        })),
        a);
    function a() {
      var t = (null !== u && u.apply(this, arguments)) || this;
      return (
        (t.properties = { useHeight: 1 }), (t.texClass = c.TEXCLASS.ORD), t
      );
    }
    e.MmlMtable = s;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
      d =
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
    var s,
      a = r(0),
      l = r(2),
      y = r(13),
      u =
        ((s = a.AbstractMmlNode),
        o(c, s),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "mtr";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "linebreakContainer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          var o, i, s, a;
          try {
            for (
              var l = d(this.childNodes), u = l.next();
              !u.done;
              u = l.next()
            )
              (h = u.value).isKind("mtd") ||
                this.replaceChild(this.factory.create("mtd"), h).appendChild(h);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              u && !u.done && (i = l.return) && i.call(l);
            } finally {
              if (o) throw o.error;
            }
          }
          var c = y.split(this.attributes.get("columnalign"));
          1 === this.arity && c.unshift(this.parent.attributes.get("side")),
            (t = this.addInheritedAttributes(t, {
              rowalign: this.attributes.get("rowalign"),
              columnalign: "center",
            }));
          try {
            for (
              var p = d(this.childNodes), f = p.next();
              !f.done;
              f = p.next()
            ) {
              var h = f.value;
              (t.columnalign[1] = c.shift() || t.columnalign[1]),
                h.setInheritedAttributes(t, e, r, n);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              f && !f.done && (a = p.return) && a.call(p);
            } finally {
              if (s) throw s.error;
            }
          }
        }),
        (c.prototype.verifyChildren = function (t) {
          var e, r;
          if (!this.parent || this.parent.isKind("mtable")) {
            if (!t.fixMtables)
              try {
                for (
                  var n = d(this.childNodes), o = n.next();
                  !o.done;
                  o = n.next()
                ) {
                  var i = o.value;
                  i.isKind("mtd") ||
                    this.replaceChild(this.factory.create("mtr"), i).mError(
                      "Children of " + this.kind + " must be mtd",
                      t,
                      !0
                    );
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (r = n.return) && r.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
            s.prototype.verifyChildren.call(this, t);
          } else
            this.mError(this.kind + " can only be a child of an mtable", t, !0);
        }),
        (c.prototype.setTeXclass = function (t) {
          var e, r;
          this.getPrevClass(t);
          try {
            for (
              var n = d(this.childNodes), o = n.next();
              !o.done;
              o = n.next()
            )
              o.value.setTeXclass(null);
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return this;
        }),
        (c.defaults = i(i({}, a.AbstractMmlNode.defaults), {
          rowalign: l.INHERIT,
          columnalign: l.INHERIT,
          groupalign: l.INHERIT,
        })),
        c);
    function c() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMtr = u;
    var p,
      f =
        (o(h, (p = u)),
        Object.defineProperty(h.prototype, "kind", {
          get: function () {
            return "mlabeledtr";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(h.prototype, "arity", {
          get: function () {
            return 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        h);
    function h() {
      return (null !== p && p.apply(this, arguments)) || this;
    }
    e.MmlMlabeledtr = f;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l = r(2),
      u =
        ((s = a.AbstractMmlBaseNode),
        o(c, s),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "mtd";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "linebreakContainer", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.verifyChildren = function (t) {
          !this.parent || this.parent.isKind("mtr")
            ? s.prototype.verifyChildren.call(this, t)
            : this.mError(
                this.kind + " can only be a child of an mtr or mlabeledtr",
                t,
                !0
              );
        }),
        (c.prototype.setTeXclass = function (t) {
          return (
            this.getPrevClass(t), this.childNodes[0].setTeXclass(null), this
          );
        }),
        (c.defaults = i(i({}, a.AbstractMmlBaseNode.defaults), {
          rowspan: 1,
          columnspan: 1,
          rowalign: l.INHERIT,
          columnalign: l.INHERIT,
          groupalign: l.INHERIT,
        })),
        c);
    function c() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMtd = u;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l = r(2),
      u =
        ((s = a.AbstractMmlNode),
        o(c, s),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "maligngroup";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "isSpacelike", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.setChildInheritedAttributes = function (t, e, r, n) {
          (t = this.addInheritedAttributes(
            t,
            this.attributes.getAllAttributes()
          )),
            s.prototype.setChildInheritedAttributes.call(this, t, e, r, n);
        }),
        (c.defaults = i(i({}, a.AbstractMmlNode.defaults), {
          groupalign: l.INHERIT,
        })),
        c);
    function c() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMaligngroup = u;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "malignmark";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return 0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "isSpacelike", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i(i({}, a.AbstractMmlNode.defaults), { edge: "left" })),
        u);
    function u() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlMalignmark = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlTokenNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mglyph";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i(i({}, a.AbstractMmlTokenNode.defaults), {
          alt: "",
          src: "",
          width: "auto",
          height: "auto",
          valign: "0em",
        })),
        u);
    function u() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    e.MmlMglyph = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlBaseNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "semantics";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return 1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "notParent", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.defaults = i(i({}, a.AbstractMmlBaseNode.defaults), {
          definitionUrl: null,
          encoding: null,
        })),
        u);
    function u() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.MmlSemantics = l;
    var c,
      p =
        ((c = a.AbstractMmlNode),
        o(f, c),
        Object.defineProperty(f.prototype, "kind", {
          get: function () {
            return "annotation-xml";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (f.prototype.setChildInheritedAttributes = function () {}),
        (f.defaults = i(i({}, a.AbstractMmlNode.defaults), {
          definitionUrl: null,
          encoding: null,
          cd: "mathmlkeys",
          name: "",
          src: null,
        })),
        f);
    function f() {
      return (null !== c && c.apply(this, arguments)) || this;
    }
    e.MmlAnnotationXML = p;
    var h,
      d =
        (o(y, (h = p)),
        Object.defineProperty(y.prototype, "kind", {
          get: function () {
            return "annotation";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (y.defaults = i({}, p.defaults)),
        y);
    function y() {
      var t = (null !== h && h.apply(this, arguments)) || this;
      return (t.properties = { isChars: !0 }), t;
    }
    e.MmlAnnotation = d;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l = r(11),
      u =
        ((s = a.AbstractMmlBaseNode),
        o(c, s),
        Object.defineProperty(c.prototype, "kind", {
          get: function () {
            return "TeXAtom";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "arity", {
          get: function () {
            return -1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "notParent", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.setTeXclass = function (t) {
          return this.childNodes[0].setTeXclass(null), this.adjustTeXclass(t);
        }),
        (c.prototype.adjustTeXclass = function (t) {
          return t;
        }),
        (c.defaults = i({}, a.AbstractMmlBaseNode.defaults)),
        c);
    function c() {
      var t = (null !== s && s.apply(this, arguments)) || this;
      return (t.texClass = a.TEXCLASS.ORD), t;
    }
    (e.TeXAtom = u).prototype.adjustTeXclass = l.MmlMo.prototype.adjustTeXclass;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      a = r(0),
      l =
        ((s = a.AbstractMmlBaseNode),
        o(u, s),
        Object.defineProperty(u.prototype, "kind", {
          get: function () {
            return "mathchoice";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "arity", {
          get: function () {
            return 4;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(u.prototype, "notParent", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (u.prototype.setInheritedAttributes = function (t, e, r, n) {
          var o = e ? 0 : Math.max(0, Math.min(r, 2)) + 1,
            i = this.childNodes[o] || this.factory.create("mrow");
          this.parent.replaceChild(i, this),
            i.setInheritedAttributes(t, e, r, n);
        }),
        (u.defaults = i({}, a.AbstractMmlBaseNode.defaults)),
        u);
    function u() {
      return (null !== s && s.apply(this, arguments)) || this;
    }
    e.mathchoice = l;
  },
  function (t, e, r) {
    "use strict";
    var n,
      i =
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
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      s =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(o(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l =
      ((u.allocate = function () {
        for (var e, t, r = [], n = 0; n < arguments.length; n++)
          r[n] = arguments[n];
        try {
          for (var o = a(r), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            if (this.has(s)) throw new Error("Bit already allocated for " + s);
            if (this.next === u.MAXBIT)
              throw new Error("Maximum number of bits already allocated");
            this.names.set(s, this.next), (this.next <<= 1);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (t = o.return) && t.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (u.has = function (t) {
        return this.names.has(t);
      }),
      (u.prototype.set = function (t) {
        this.bits |= this.getBit(t);
      }),
      (u.prototype.clear = function (t) {
        this.bits &= ~this.getBit(t);
      }),
      (u.prototype.isSet = function (t) {
        return !!(this.bits & this.getBit(t));
      }),
      (u.prototype.reset = function () {
        this.bits = 0;
      }),
      (u.prototype.getBit = function (t) {
        var e = this.constructor.names.get(t);
        if (!e) throw new Error("Unknown bit-field name: " + t);
        return e;
      }),
      (u.MAXBIT = 1 << 31),
      (u.next = 1),
      (u.names = new Map()),
      u);
    function u() {
      this.bits = 0;
    }
    (e.BitField = l),
      (e.BitFieldClass = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var r,
          n = (i(o, (r = l)), o);
        function o() {
          return (null !== r && r.apply(this, arguments)) || this;
        }
        return n.allocate.apply(n, s(t)), n;
      });
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
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
    var i,
      a = r(3),
      l =
        ((i = a.PrioritizedList),
        o(u, i),
        (u.prototype.register = function (t) {
          return this.add(t, t.priority);
        }),
        (u.prototype.unregister = function (t) {
          this.remove(t);
        }),
        (u.prototype.handlesDocument = function (t) {
          var e, r;
          try {
            for (var n = s(this), o = n.next(); !o.done; o = n.next()) {
              var i = o.value.item;
              if (i.handlesDocument(t)) return i;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          throw new Error("Can't find handler for document");
        }),
        (u.prototype.document = function (t, e) {
          return (
            void 0 === e && (e = null), this.handlesDocument(t).create(t, e)
          );
        }),
        u);
    function u() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.HandlerList = l;
  },
  function (t, e, r) {
    "use strict";
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
      n =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      u =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = r(10),
      o =
        ((a.methodName = function (t) {
          return (
            "visit" +
            (t.charAt(0).toUpperCase() + t.substr(1)).replace(
              /[^a-z0-9_]/gi,
              "_"
            ) +
            "Node"
          );
        }),
        (a.prototype.visitTree = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
          return this.visitNode.apply(this, u([t], e));
        }),
        (a.prototype.visitNode = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
          var n = this.nodeHandlers.get(t.kind) || this.visitDefault;
          return n.call.apply(n, u([this, t], e));
        }),
        (a.prototype.visitDefault = function (t) {
          for (var e, r, n = [], o = 1; o < arguments.length; o++)
            n[o - 1] = arguments[o];
          if (t instanceof c.AbstractNode)
            try {
              for (
                var i = l(t.childNodes), s = i.next();
                !s.done;
                s = i.next()
              ) {
                var a = s.value;
                this.visitNode.apply(this, u([a], n));
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                s && !s.done && (r = i.return) && r.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
        }),
        (a.prototype.setNodeHandler = function (t, e) {
          this.nodeHandlers.set(t, e);
        }),
        (a.prototype.removeNodeHandler = function (t) {
          this.nodeHandlers.delete(t);
        }),
        a);
    function a(t) {
      var e, r;
      this.nodeHandlers = new Map();
      try {
        for (var n = l(t.getKinds()), o = n.next(); !o.done; o = n.next()) {
          var i = o.value,
            s = this[a.methodName(i)];
          s && this.nodeHandlers.set(i, s);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    e.AbstractVisitor = o;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
      T =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      _ =
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
    var a,
      s = r(5),
      A = r(1),
      l = r(60),
      u = r(61),
      c = r(62),
      p = r(4),
      f =
        ((a = s.AbstractMathDocument),
        o(h, a),
        (h.prototype.findPosition = function (t, e, r, n) {
          var o, i;
          try {
            for (var s = _(n[t]), a = s.next(); !a.done; a = s.next()) {
              var l = a.value,
                u = T(l, 2),
                c = u[0],
                p = u[1];
              if (e <= p) return { node: c, n: e, delim: r };
              e -= p;
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              a && !a.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
          return { node: null, n: 0, delim: r };
        }),
        (h.prototype.mathItem = function (t, e, r) {
          var n = t.math,
            o = this.findPosition(t.n, t.start.n, t.open, r),
            i = this.findPosition(t.n, t.end.n, t.close, r);
          return new this.options.MathItem(n, e, t.display, o, i);
        }),
        (h.prototype.findMath = function (t) {
          var e, r, n, o, i, s, a, l, u;
          if (!this.processed.isSet("findMath")) {
            (this.adaptor.document = this.document),
              (t = A.userOptions(
                { elements: [this.adaptor.body(this.document)] },
                t
              ));
            try {
              for (
                var c = _(this.adaptor.getElements(t.elements, this.document)),
                  p = c.next();
                !p.done;
                p = c.next()
              ) {
                var f = p.value,
                  h = T([null, null], 2),
                  d = h[0],
                  y = h[1];
                try {
                  for (
                    var O = ((n = void 0), _(this.inputJax)), M = O.next();
                    !M.done;
                    M = O.next()
                  ) {
                    var E = M.value,
                      b = new this.options.MathList();
                    if (E.processStrings) {
                      null === d &&
                        ((d = (i = T(this.domStrings.find(f), 2))[0]),
                        (y = i[1]));
                      try {
                        for (
                          var v = ((s = void 0), _(E.findMath(d))),
                            m = v.next();
                          !m.done;
                          m = v.next()
                        ) {
                          var g = m.value;
                          b.push(this.mathItem(g, E, y));
                        }
                      } catch (t) {
                        s = { error: t };
                      } finally {
                        try {
                          m && !m.done && (a = v.return) && a.call(v);
                        } finally {
                          if (s) throw s.error;
                        }
                      }
                    } else
                      try {
                        for (
                          var L = ((l = void 0), _(E.findMath(f))),
                            R = L.next();
                          !R.done;
                          R = L.next()
                        ) {
                          g = R.value;
                          var N = new this.options.MathItem(
                            g.math,
                            E,
                            g.display,
                            g.start,
                            g.end
                          );
                          b.push(N);
                        }
                      } catch (t) {
                        l = { error: t };
                      } finally {
                        try {
                          R && !R.done && (u = L.return) && u.call(L);
                        } finally {
                          if (l) throw l.error;
                        }
                      }
                    this.math.merge(b);
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    M && !M.done && (o = O.return) && o.call(O);
                  } finally {
                    if (n) throw n.error;
                  }
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                p && !p.done && (r = c.return) && r.call(c);
              } finally {
                if (e) throw e.error;
              }
            }
            this.processed.set("findMath");
          }
          return this;
        }),
        (h.prototype.updateDocument = function () {
          return (
            this.processed.isSet("updateDocument") ||
              (this.addPageElements(),
              this.addStyleSheet(),
              a.prototype.updateDocument.call(this),
              this.processed.set("updateDocument")),
            this
          );
        }),
        (h.prototype.addPageElements = function () {
          var t = this.adaptor.body(this.document),
            e = this.documentPageElements();
          e && this.adaptor.append(t, e);
        }),
        (h.prototype.addStyleSheet = function () {
          var t = this.documentStyleSheet();
          if (t) {
            var e = this.adaptor.head(this.document),
              r = this.findSheet(e, this.adaptor.getAttribute(t, "id"));
            r ? this.adaptor.replace(t, r) : this.adaptor.append(e, t);
          }
        }),
        (h.prototype.findSheet = function (t, e) {
          var r, n;
          if (e)
            try {
              for (
                var o = _(this.adaptor.tags(t, "style")), i = o.next();
                !i.done;
                i = o.next()
              ) {
                var s = i.value;
                if (this.adaptor.getAttribute(s, "id") === e) return s;
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
          return null;
        }),
        (h.prototype.removeFromDocument = function (t) {
          var e, r;
          if (
            (void 0 === t && (t = !1), this.processed.isSet("updateDocument"))
          )
            try {
              for (var n = _(this.math), o = n.next(); !o.done; o = n.next()) {
                var i = o.value;
                i.state() >= p.STATE.INSERTED && i.state(p.STATE.TYPESET, t);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (r = n.return) && r.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
          return this.processed.clear("updateDocument"), this;
        }),
        (h.prototype.documentStyleSheet = function () {
          return this.outputJax.styleSheet(this);
        }),
        (h.prototype.documentPageElements = function () {
          return this.outputJax.pageElements(this);
        }),
        (h.KIND = "HTML"),
        (h.OPTIONS = i(i({}, s.AbstractMathDocument.OPTIONS), {
          renderActions: A.expandable(
            i(i({}, s.AbstractMathDocument.OPTIONS.renderActions), {
              styles: [p.STATE.INSERTED + 1, "", "updateStyleSheet", !1],
            })
          ),
          MathList: u.HTMLMathList,
          MathItem: l.HTMLMathItem,
          DomStrings: null,
        })),
        h);
    function h(t, e, r) {
      var n = this,
        o = T(A.separateOptions(r, c.HTMLDomStrings.OPTIONS), 2),
        i = o[0],
        s = o[1];
      return (
        ((n = a.call(this, t, e, i) || this).domStrings =
          n.options.DomStrings || new c.HTMLDomStrings(s)),
        (n.domStrings.adaptor = e),
        n
      );
    }
    e.HTMLDocument = f;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
      s = r(4),
      a =
        ((i = s.AbstractMathItem),
        o(l, i),
        Object.defineProperty(l.prototype, "adaptor", {
          get: function () {
            return this.inputJax.adaptor;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (l.prototype.updateDocument = function (t) {
          if (this.state() < s.STATE.INSERTED) {
            if (this.inputJax.processStrings) {
              var e = this.start.node;
              if (e === this.end.node)
                this.end.n &&
                  this.end.n < this.adaptor.value(this.end.node).length &&
                  this.adaptor.split(this.end.node, this.end.n),
                  this.start.n &&
                    (e = this.adaptor.split(this.start.node, this.start.n)),
                  this.adaptor.replace(this.typesetRoot, e);
              else {
                for (
                  this.start.n && (e = this.adaptor.split(e, this.start.n));
                  e !== this.end.node;

                ) {
                  var r = this.adaptor.next(e);
                  this.adaptor.remove(e), (e = r);
                }
                this.adaptor.insert(this.typesetRoot, e),
                  this.end.n < this.adaptor.value(e).length &&
                    this.adaptor.split(e, this.end.n),
                  this.adaptor.remove(e);
              }
            } else this.adaptor.replace(this.typesetRoot, this.start.node);
            (this.start.node = this.end.node = this.typesetRoot),
              (this.start.n = this.end.n = 0),
              this.state(s.STATE.INSERTED);
          }
        }),
        (l.prototype.updateStyleSheet = function (t) {
          t.addStyleSheet();
        }),
        (l.prototype.removeFromDocument = function (t) {
          if ((void 0 === t && (t = !1), this.state() >= s.STATE.TYPESET)) {
            var e = this.start.node,
              r = this.adaptor.text("");
            if (t) {
              var n = this.start.delim + this.math + this.end.delim;
              if (this.inputJax.processStrings) r = this.adaptor.text(n);
              else {
                var o = this.adaptor.parse(n, "text/html");
                r = this.adaptor.firstChild(this.adaptor.body(o));
              }
            }
            this.adaptor.replace(r, e),
              (this.start.node = this.end.node = r),
              (this.start.n = this.end.n = 0);
          }
        }),
        l);
    function l(t, e, r, n, o) {
      return (
        void 0 === r && (r = !0),
        void 0 === n && (n = { node: null, n: 0, delim: "" }),
        void 0 === o && (o = { node: null, n: 0, delim: "" }),
        i.call(this, t, e, r, n, o) || this
      );
    }
    e.HTMLMathItem = a;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
      s = r(7),
      a = ((i = s.AbstractMathList), o(l, i), l);
    function l() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.HTMLMathList = a;
  },
  function (t, e, r) {
    "use strict";
    var a =
      (this && this.__read) ||
      function (t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n,
          o,
          i = r.call(t),
          s = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
            s.push(n.value);
        } catch (t) {
          o = { error: t };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o =
        ((i.prototype.init = function () {
          (this.strings = []),
            (this.string = ""),
            (this.snodes = []),
            (this.nodes = []),
            (this.stack = []);
        }),
        (i.prototype.getPatterns = function () {
          var t = n.makeArray(this.options.skipHtmlTags),
            e = n.makeArray(this.options.ignoreHtmlClass),
            r = n.makeArray(this.options.processHtmlClass);
          (this.skipHtmlTags = new RegExp("^(?:" + t.join("|") + ")$", "i")),
            (this.ignoreHtmlClass = new RegExp(
              "(?:^| )(?:" + e.join("|") + ")(?: |$)"
            )),
            (this.processHtmlClass = new RegExp("(?:^| )(?:" + r + ")(?: |$)"));
        }),
        (i.prototype.pushString = function () {
          this.string.match(/\S/) &&
            (this.strings.push(this.string), this.nodes.push(this.snodes)),
            (this.string = ""),
            (this.snodes = []);
        }),
        (i.prototype.extendString = function (t, e) {
          this.snodes.push([t, e.length]), (this.string += e);
        }),
        (i.prototype.handleText = function (t, e) {
          return (
            e || this.extendString(t, this.adaptor.value(t)),
            this.adaptor.next(t)
          );
        }),
        (i.prototype.handleTag = function (t, e) {
          if (!e) {
            var r = this.options.includeHtmlTags[this.adaptor.kind(t)];
            this.extendString(t, r);
          }
          return this.adaptor.next(t);
        }),
        (i.prototype.handleContainer = function (t, e) {
          this.pushString();
          var r = this.adaptor.getAttribute(t, "class") || "",
            n = this.adaptor.kind(t) || "",
            o = this.processHtmlClass.exec(r),
            i = t;
          return (
            !this.adaptor.firstChild(t) ||
            this.adaptor.getAttribute(t, "data-MJX") ||
            (!o && this.skipHtmlTags.exec(n))
              ? (i = this.adaptor.next(t))
              : (this.adaptor.next(t) &&
                  this.stack.push([this.adaptor.next(t), e]),
                (i = this.adaptor.firstChild(t)),
                (e = (e || this.ignoreHtmlClass.exec(r)) && !o)),
            [i, e]
          );
        }),
        (i.prototype.find = function (t) {
          var e, r;
          this.init();
          for (
            var n = this.adaptor.next(t),
              o = !1,
              i = this.options.includeHtmlTags;
            t && t !== n;

          )
            "#text" === this.adaptor.kind(t)
              ? (t = this.handleText(t, o))
              : void 0 !== i[this.adaptor.kind(t)]
              ? (t = this.handleTag(t, o))
              : ((t = (e = a(this.handleContainer(t, o), 2))[0]), (o = e[1])),
              !t &&
                this.stack.length &&
                (this.pushString(),
                (t = (r = a(this.stack.pop(), 2))[0]),
                (o = r[1]));
          this.pushString();
          var s = [this.strings, this.nodes];
          return this.init(), s;
        }),
        (i.OPTIONS = {
          skipHtmlTags: [
            "script",
            "noscript",
            "style",
            "textarea",
            "pre",
            "code",
            "annotation",
            "annotation-xml",
          ],
          includeHtmlTags: { br: "\n", wbr: "", "#comment": "" },
          ignoreHtmlClass: "mathjax_ignore",
          processHtmlClass: "mathjax_process",
        }),
        i);
    function i(t) {
      void 0 === t && (t = null);
      var e = this.constructor;
      (this.options = n.userOptions(n.defaultOptions({}, e.OPTIONS), t)),
        this.init(),
        this.getPatterns();
    }
    e.HTMLDomStrings = o;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(15);
    e.asyncLoad = function (n) {
      return o.mathjax.asyncLoad
        ? new Promise(function (e, r) {
            var t = o.mathjax.asyncLoad(n);
            t instanceof Promise
              ? t
                  .then(function (t) {
                    return e(t);
                  })
                  .catch(function (t) {
                    return r(t);
                  })
              : e(t);
          })
        : Promise.reject(
            "Can't load '" + n + "': No asyncLoad method specified"
          );
    };
  },
  function (t, e, r) {
    "use strict";
    r(65);
    var n = r(17),
      o = r(20);
    MathJax.startup &&
      (MathJax.startup.registerConstructor("HTMLHandler", n.HTMLHandler),
      MathJax.startup.registerConstructor("browserAdaptor", o.browserAdaptor),
      MathJax.startup.useHandler("HTMLHandler"),
      MathJax.startup.useAdaptor("browserAdaptor")),
      MathJax.loader &&
        (MathJax._.mathjax.mathjax.asyncLoad = function (t) {
          return MathJax.loader.load(t);
        });
  },
  function (t, e, r) {
    "use strict";
    var n = r(66),
      o = Nt(n),
      i = Nt(r(18)),
      s = Nt(r(20)),
      a = Nt(r(19)),
      l = Nt(r(68)),
      u = Nt(r(21)),
      c = Nt(r(57)),
      p = Nt(r(22)),
      f = Nt(r(5)),
      h = Nt(r(4)),
      d = Nt(r(7)),
      y = Nt(r(2)),
      O = Nt(r(26)),
      M = Nt(r(69)),
      E = Nt(r(8)),
      b = Nt(r(0)),
      v = Nt(r(54)),
      m = Nt(r(44)),
      g = Nt(r(50)),
      L = Nt(r(51)),
      R = Nt(r(27)),
      N = Nt(r(55)),
      T = Nt(r(43)),
      _ = Nt(r(39)),
      A = Nt(r(42)),
      S = Nt(r(35)),
      C = Nt(r(52)),
      I = Nt(r(28)),
      x = Nt(r(46)),
      P = Nt(r(29)),
      w = Nt(r(11)),
      j = Nt(r(40)),
      B = Nt(r(41)),
      D = Nt(r(37)),
      k = Nt(r(34)),
      X = Nt(r(33)),
      H = Nt(r(32)),
      W = Nt(r(36)),
      F = Nt(r(38)),
      q = Nt(r(12)),
      G = Nt(r(47)),
      J = Nt(r(49)),
      z = Nt(r(31)),
      U = Nt(r(48)),
      V = Nt(r(45)),
      K = Nt(r(53)),
      $ = Nt(r(14)),
      Y = Nt(r(30)),
      Z = Nt(r(70)),
      Q = Nt(r(23)),
      tt = Nt(r(9)),
      et = Nt(r(10)),
      rt = Nt(r(25)),
      nt = Nt(r(58)),
      ot = Nt(r(71)),
      it = Nt(r(72)),
      st = Nt(r(73)),
      at = Nt(r(59)),
      lt = Nt(r(62)),
      ut = Nt(r(17)),
      ct = Nt(r(60)),
      pt = Nt(r(61)),
      ft = Nt(r(15)),
      ht = Nt(r(63)),
      dt = Nt(r(56)),
      yt = Nt(r(74)),
      Ot = Nt(r(6)),
      Mt = Nt(r(24)),
      Et = Nt(r(1)),
      bt = Nt(r(3)),
      vt = Nt(r(16)),
      mt = Nt(r(75)),
      gt = Nt(r(76)),
      Lt = Nt(r(77)),
      Rt = Nt(r(13));
    function Nt(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return (e.default = t), e;
    }
    (0, n.combineWithMathJax)({
      _: {
        adaptors: { HTMLAdaptor: i, browserAdaptor: s },
        components: { global: o },
        core: {
          DOMAdaptor: a,
          FindMath: l,
          Handler: u,
          HandlerList: c,
          InputJax: p,
          MathDocument: f,
          MathItem: h,
          MathList: d,
          MmlTree: {
            Attributes: y,
            MML: O,
            MathMLVisitor: M,
            MmlFactory: E,
            MmlNode: b,
            MmlNodes: {
              TeXAtom: v,
              maction: m,
              maligngroup: g,
              malignmark: L,
              math: R,
              mathchoice: N,
              menclose: T,
              merror: _,
              mfenced: A,
              mfrac: S,
              mglyph: C,
              mi: I,
              mmultiscripts: x,
              mn: P,
              mo: w,
              mpadded: j,
              mphantom: B,
              mroot: D,
              mrow: k,
              ms: X,
              mspace: H,
              msqrt: W,
              mstyle: F,
              msubsup: q,
              mtable: G,
              mtd: J,
              mtext: z,
              mtr: U,
              munderover: V,
              semantics: K,
            },
            MmlVisitor: $,
            OperatorDictionary: Y,
            SerializedMmlVisitor: Z,
          },
          OutputJax: Q,
          Tree: {
            Factory: tt,
            Node: et,
            NodeFactory: rt,
            Visitor: nt,
            Wrapper: ot,
            WrapperFactory: it,
          },
        },
        handlers: {
          html_ts: st,
          html: {
            HTMLDocument: at,
            HTMLDomStrings: lt,
            HTMLHandler: ut,
            HTMLMathItem: ct,
            HTMLMathList: pt,
          },
        },
        mathjax: ft,
        util: {
          AsyncLoad: ht,
          BitField: dt,
          Entities: yt,
          FunctionList: Ot,
          LinkedList: Mt,
          Options: Et,
          PrioritizedList: bt,
          Retries: vt,
          Styles: mt,
          lengths: gt,
          numeric: Lt,
          string: Rt,
        },
      },
    });
  },
  function (t, e, r) {
    "use strict";
    (function (t) {
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
      function a(t, e) {
        var r, n;
        try {
          for (var o = u(Object.keys(e)), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            "__esModule" !== s &&
              ("object" == typeof t[s] && "object" == typeof e[s]
                ? a(t[s], e[s])
                : null !== e[s] && void 0 !== e[s] && (t[s] = e[s]));
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
        return t;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.combineConfig = a),
        (e.combineDefaults = function t(e, r, n) {
          var o, i;
          e[r] || (e[r] = {}), (e = e[r]);
          try {
            for (
              var s = u(Object.keys(n)), a = s.next();
              !a.done;
              a = s.next()
            ) {
              var l = a.value;
              "object" == typeof e[l] && "object" == typeof n[l]
                ? t(e, l, n[l])
                : null == e[l] && null != n[l] && (e[l] = n[l]);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              a && !a.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
          return e;
        }),
        (e.combineWithMathJax = function (t) {
          return a(e.MathJax, t);
        }),
        void 0 === t.MathJax && (t.MathJax = {}),
        t.MathJax.version ||
          (t.MathJax = { version: "3.0.0", _: {}, config: t.MathJax }),
        (e.MathJax = t.MathJax);
    }.call(this, r(67)));
  },
  function (j0, k0) {
    var l0;
    l0 = (function () {
      return this;
    })();
    try {
      l0 = l0 || Function("return this")() || eval("this");
    } catch (t) {
      "object" == typeof window && (l0 = window);
    }
    j0.exports = l0;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(1),
      o = ((i.OPTIONS = {}), i);
    function i(t) {
      var e = this.constructor;
      this.options = n.userOptions(n.defaultOptions({}, e.OPTIONS), t);
    }
    e.AbstractFindMath = o;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
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
    var i,
      s = r(14),
      a =
        ((i = s.MmlVisitor),
        o(l, i),
        (l.prototype.visitTree = function (t, e) {
          var r = (this.document = e).createElement("top");
          return this.visitNode(t, r), (this.document = null), r.firstChild;
        }),
        (l.prototype.visitTextNode = function (t, e) {
          e.appendChild(this.document.createTextNode(t.getText()));
        }),
        (l.prototype.visitXMLNode = function (t, e) {
          e.appendChild(t.getXML().cloneNode(!0));
        }),
        (l.prototype.visitInferredMrowNode = function (t, e) {
          var r, n;
          try {
            for (var o = u(t.childNodes), i = o.next(); !i.done; i = o.next()) {
              var s = i.value;
              this.visitNode(s, e);
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
        }),
        (l.prototype.visitDefault = function (t, e) {
          var r,
            n,
            o = this.document.createElement(t.kind);
          this.addAttributes(t, o);
          try {
            for (var i = u(t.childNodes), s = i.next(); !s.done; s = i.next()) {
              var a = s.value;
              this.visitNode(a, o);
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
          e.appendChild(o);
        }),
        (l.prototype.addAttributes = function (t, e) {
          var r,
            n,
            o = t.attributes,
            i = o.getExplicitNames();
          try {
            for (var s = u(i), a = s.next(); !a.done; a = s.next()) {
              var l = a.value;
              e.setAttribute(l, o.getExplicit(l).toString());
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              a && !a.done && (n = s.return) && n.call(s);
            } finally {
              if (r) throw r.error;
            }
          }
        }),
        l);
    function l() {
      var t = (null !== i && i.apply(this, arguments)) || this;
      return (t.document = null), t;
    }
    e.MathMLVisitor = a;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
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
        },
      a =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      s = r(14),
      c = r(0),
      l =
        ((i = s.MmlVisitor),
        o(p, i),
        (p.prototype.visitTree = function (t) {
          return this.visitNode(t, "");
        }),
        (p.prototype.visitTextNode = function (t, e) {
          return this.quoteHTML(t.getText());
        }),
        (p.prototype.visitXMLNode = function (t, e) {
          return "[XML Node not implemented]";
        }),
        (p.prototype.visitInferredMrowNode = function (t, e) {
          var r,
            n,
            o = [];
          try {
            for (var i = u(t.childNodes), s = i.next(); !s.done; s = i.next()) {
              var a = s.value;
              o.push(this.visitNode(a, e));
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
          return o.join("\n");
        }),
        (p.prototype.visitTeXAtomNode = function (t, e) {
          var r,
            n,
            o =
              e +
              '<mrow class="MJX-TeXAtom-' +
              (t.texClass < 0 ? "NONE" : c.TEXCLASSNAMES[t.texClass]) +
              '"' +
              this.getAttributes(t) +
              ">\n",
            i = e;
          e += "  ";
          try {
            for (var s = u(t.childNodes), a = s.next(); !a.done; a = s.next()) {
              var l = a.value;
              o += this.visitNode(l, e);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              a && !a.done && (n = s.return) && n.call(s);
            } finally {
              if (r) throw r.error;
            }
          }
          return (o += "\n" + i + "</mrow>");
        }),
        (p.prototype.visitAnnotationNode = function (t, e) {
          return (
            e +
            "<annotation" +
            this.getAttributes(t) +
            ">" +
            this.childNodeMml(t, "", "") +
            "</annotation>"
          );
        }),
        (p.prototype.visitDefault = function (t, e) {
          var r = t.kind,
            n = a(
              t.isToken || 0 === t.childNodes.length ? ["", ""] : ["\n", e],
              2
            ),
            o = n[0],
            i = n[1],
            s = this.childNodeMml(t, e + "  ", o);
          return (
            e +
            "<" +
            r +
            this.getAttributes(t) +
            ">" +
            (s.match(/\S/) ? o + s + i : "") +
            "</" +
            r +
            ">"
          );
        }),
        (p.prototype.childNodeMml = function (t, e, r) {
          var n,
            o,
            i = "";
          try {
            for (var s = u(t.childNodes), a = s.next(); !a.done; a = s.next()) {
              var l = a.value;
              i += this.visitNode(l, e) + r;
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (o = s.return) && o.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          return i;
        }),
        (p.prototype.getAttributes = function (t) {
          var e,
            r,
            n = "",
            o = t.attributes.getAllAttributes();
          try {
            for (
              var i = u(Object.keys(o)), s = i.next();
              !s.done;
              s = i.next()
            ) {
              var a = s.value;
              void 0 !== o[a] &&
                (n += " " + a + '="' + this.quoteHTML(o[a].toString()) + '"');
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (r = i.return) && r.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return n;
        }),
        (p.prototype.quoteHTML = function (t) {
          return t
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/([\uD800-\uDBFF].)/g, function (t, e) {
              return (
                "&#x" +
                (
                  1024 * (e.charCodeAt(0) - 55296) +
                  (e.charCodeAt(1) - 56320) +
                  65536
                )
                  .toString(16)
                  .toUpperCase() +
                ";"
              );
            })
            .replace(/([\u0080-\uD7FF\uE000-\uFFFF])/g, function (t, e) {
              return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";";
            });
        }),
        p);
    function p() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    e.SerializedMmlVisitor = l;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
      (Object.defineProperty(o.prototype, "kind", {
        get: function () {
          return this.node.kind;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (o.prototype.wrap = function (t) {
        return this.factory.wrap(t);
      }),
      o);
    function o(t, e) {
      (this.factory = t), (this.node = e);
    }
    e.AbstractWrapper = n;
  },
  function (t, e, r) {
    "use strict";
    var n,
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
        }),
      i =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      s =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(i(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a,
      l = r(9),
      u =
        ((a = l.AbstractFactory),
        o(c, a),
        (c.prototype.wrap = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
          return this.create.apply(this, s([t.kind, t], e));
        }),
        c);
    function c() {
      return (null !== a && a.apply(this, arguments)) || this;
    }
    e.AbstractWrapperFactory = u;
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(15),
      o = r(17);
    e.RegisterHTMLHandler = function (t) {
      var e = new o.HTMLHandler(t);
      return n.mathjax.handlers.register(e), e;
    };
  },
  function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var o = e(16),
      i = e(63);
    (n.options = { loadMissingEntities: !0 }),
      (n.entities = {
        ApplyFunction: "\u2061",
        Backslash: "\u2216",
        Because: "\u2235",
        Breve: "\u02d8",
        Cap: "\u22d2",
        CenterDot: "\xb7",
        CircleDot: "\u2299",
        CircleMinus: "\u2296",
        CirclePlus: "\u2295",
        CircleTimes: "\u2297",
        Congruent: "\u2261",
        ContourIntegral: "\u222e",
        Coproduct: "\u2210",
        Cross: "\u2a2f",
        Cup: "\u22d3",
        CupCap: "\u224d",
        Dagger: "\u2021",
        Del: "\u2207",
        Delta: "\u0394",
        Diamond: "\u22c4",
        DifferentialD: "\u2146",
        DotEqual: "\u2250",
        DoubleDot: "\xa8",
        DoubleRightTee: "\u22a8",
        DoubleVerticalBar: "\u2225",
        DownArrow: "\u2193",
        DownLeftVector: "\u21bd",
        DownRightVector: "\u21c1",
        DownTee: "\u22a4",
        Downarrow: "\u21d3",
        Element: "\u2208",
        EqualTilde: "\u2242",
        Equilibrium: "\u21cc",
        Exists: "\u2203",
        ExponentialE: "\u2147",
        FilledVerySmallSquare: "\u25aa",
        ForAll: "\u2200",
        Gamma: "\u0393",
        Gg: "\u22d9",
        GreaterEqual: "\u2265",
        GreaterEqualLess: "\u22db",
        GreaterFullEqual: "\u2267",
        GreaterLess: "\u2277",
        GreaterSlantEqual: "\u2a7e",
        GreaterTilde: "\u2273",
        Hacek: "\u02c7",
        Hat: "^",
        HumpDownHump: "\u224e",
        HumpEqual: "\u224f",
        Im: "\u2111",
        ImaginaryI: "\u2148",
        Integral: "\u222b",
        Intersection: "\u22c2",
        InvisibleComma: "\u2063",
        InvisibleTimes: "\u2062",
        Lambda: "\u039b",
        Larr: "\u219e",
        LeftAngleBracket: "\u27e8",
        LeftArrow: "\u2190",
        LeftArrowRightArrow: "\u21c6",
        LeftCeiling: "\u2308",
        LeftDownVector: "\u21c3",
        LeftFloor: "\u230a",
        LeftRightArrow: "\u2194",
        LeftTee: "\u22a3",
        LeftTriangle: "\u22b2",
        LeftTriangleEqual: "\u22b4",
        LeftUpVector: "\u21bf",
        LeftVector: "\u21bc",
        Leftarrow: "\u21d0",
        Leftrightarrow: "\u21d4",
        LessEqualGreater: "\u22da",
        LessFullEqual: "\u2266",
        LessGreater: "\u2276",
        LessSlantEqual: "\u2a7d",
        LessTilde: "\u2272",
        Ll: "\u22d8",
        Lleftarrow: "\u21da",
        LongLeftArrow: "\u27f5",
        LongLeftRightArrow: "\u27f7",
        LongRightArrow: "\u27f6",
        Longleftarrow: "\u27f8",
        Longleftrightarrow: "\u27fa",
        Longrightarrow: "\u27f9",
        Lsh: "\u21b0",
        MinusPlus: "\u2213",
        NestedGreaterGreater: "\u226b",
        NestedLessLess: "\u226a",
        NotDoubleVerticalBar: "\u2226",
        NotElement: "\u2209",
        NotEqual: "\u2260",
        NotExists: "\u2204",
        NotGreater: "\u226f",
        NotGreaterEqual: "\u2271",
        NotLeftTriangle: "\u22ea",
        NotLeftTriangleEqual: "\u22ec",
        NotLess: "\u226e",
        NotLessEqual: "\u2270",
        NotPrecedes: "\u2280",
        NotPrecedesSlantEqual: "\u22e0",
        NotRightTriangle: "\u22eb",
        NotRightTriangleEqual: "\u22ed",
        NotSubsetEqual: "\u2288",
        NotSucceeds: "\u2281",
        NotSucceedsSlantEqual: "\u22e1",
        NotSupersetEqual: "\u2289",
        NotTilde: "\u2241",
        NotVerticalBar: "\u2224",
        Omega: "\u03a9",
        OverBar: "\u203e",
        OverBrace: "\u23de",
        PartialD: "\u2202",
        Phi: "\u03a6",
        Pi: "\u03a0",
        PlusMinus: "\xb1",
        Precedes: "\u227a",
        PrecedesEqual: "\u2aaf",
        PrecedesSlantEqual: "\u227c",
        PrecedesTilde: "\u227e",
        Product: "\u220f",
        Proportional: "\u221d",
        Psi: "\u03a8",
        Rarr: "\u21a0",
        Re: "\u211c",
        ReverseEquilibrium: "\u21cb",
        RightAngleBracket: "\u27e9",
        RightArrow: "\u2192",
        RightArrowLeftArrow: "\u21c4",
        RightCeiling: "\u2309",
        RightDownVector: "\u21c2",
        RightFloor: "\u230b",
        RightTee: "\u22a2",
        RightTeeArrow: "\u21a6",
        RightTriangle: "\u22b3",
        RightTriangleEqual: "\u22b5",
        RightUpVector: "\u21be",
        RightVector: "\u21c0",
        Rightarrow: "\u21d2",
        Rrightarrow: "\u21db",
        Rsh: "\u21b1",
        Sigma: "\u03a3",
        SmallCircle: "\u2218",
        Sqrt: "\u221a",
        Square: "\u25a1",
        SquareIntersection: "\u2293",
        SquareSubset: "\u228f",
        SquareSubsetEqual: "\u2291",
        SquareSuperset: "\u2290",
        SquareSupersetEqual: "\u2292",
        SquareUnion: "\u2294",
        Star: "\u22c6",
        Subset: "\u22d0",
        SubsetEqual: "\u2286",
        Succeeds: "\u227b",
        SucceedsEqual: "\u2ab0",
        SucceedsSlantEqual: "\u227d",
        SucceedsTilde: "\u227f",
        SuchThat: "\u220b",
        Sum: "\u2211",
        Superset: "\u2283",
        SupersetEqual: "\u2287",
        Supset: "\u22d1",
        Therefore: "\u2234",
        Theta: "\u0398",
        Tilde: "\u223c",
        TildeEqual: "\u2243",
        TildeFullEqual: "\u2245",
        TildeTilde: "\u2248",
        UnderBar: "_",
        UnderBrace: "\u23df",
        Union: "\u22c3",
        UnionPlus: "\u228e",
        UpArrow: "\u2191",
        UpDownArrow: "\u2195",
        UpTee: "\u22a5",
        Uparrow: "\u21d1",
        Updownarrow: "\u21d5",
        Upsilon: "\u03a5",
        Vdash: "\u22a9",
        Vee: "\u22c1",
        VerticalBar: "\u2223",
        VerticalTilde: "\u2240",
        Vvdash: "\u22aa",
        Wedge: "\u22c0",
        Xi: "\u039e",
        amp: "&",
        acute: "\xb4",
        aleph: "\u2135",
        alpha: "\u03b1",
        amalg: "\u2a3f",
        and: "\u2227",
        ang: "\u2220",
        angmsd: "\u2221",
        angsph: "\u2222",
        ape: "\u224a",
        backprime: "\u2035",
        backsim: "\u223d",
        backsimeq: "\u22cd",
        beta: "\u03b2",
        beth: "\u2136",
        between: "\u226c",
        bigcirc: "\u25ef",
        bigodot: "\u2a00",
        bigoplus: "\u2a01",
        bigotimes: "\u2a02",
        bigsqcup: "\u2a06",
        bigstar: "\u2605",
        bigtriangledown: "\u25bd",
        bigtriangleup: "\u25b3",
        biguplus: "\u2a04",
        blacklozenge: "\u29eb",
        blacktriangle: "\u25b4",
        blacktriangledown: "\u25be",
        blacktriangleleft: "\u25c2",
        bowtie: "\u22c8",
        boxdl: "\u2510",
        boxdr: "\u250c",
        boxminus: "\u229f",
        boxplus: "\u229e",
        boxtimes: "\u22a0",
        boxul: "\u2518",
        boxur: "\u2514",
        bsol: "\\",
        bull: "\u2022",
        cap: "\u2229",
        check: "\u2713",
        chi: "\u03c7",
        circ: "\u02c6",
        circeq: "\u2257",
        circlearrowleft: "\u21ba",
        circlearrowright: "\u21bb",
        circledR: "\xae",
        circledS: "\u24c8",
        circledast: "\u229b",
        circledcirc: "\u229a",
        circleddash: "\u229d",
        clubs: "\u2663",
        colon: ":",
        comp: "\u2201",
        ctdot: "\u22ef",
        cuepr: "\u22de",
        cuesc: "\u22df",
        cularr: "\u21b6",
        cup: "\u222a",
        curarr: "\u21b7",
        curlyvee: "\u22ce",
        curlywedge: "\u22cf",
        dagger: "\u2020",
        daleth: "\u2138",
        ddarr: "\u21ca",
        deg: "\xb0",
        delta: "\u03b4",
        digamma: "\u03dd",
        div: "\xf7",
        divideontimes: "\u22c7",
        dot: "\u02d9",
        doteqdot: "\u2251",
        dotplus: "\u2214",
        dotsquare: "\u22a1",
        dtdot: "\u22f1",
        ecir: "\u2256",
        efDot: "\u2252",
        egs: "\u2a96",
        ell: "\u2113",
        els: "\u2a95",
        empty: "\u2205",
        epsi: "\u03b5",
        epsiv: "\u03f5",
        erDot: "\u2253",
        eta: "\u03b7",
        eth: "\xf0",
        flat: "\u266d",
        fork: "\u22d4",
        frown: "\u2322",
        gEl: "\u2a8c",
        gamma: "\u03b3",
        gap: "\u2a86",
        gimel: "\u2137",
        gnE: "\u2269",
        gnap: "\u2a8a",
        gne: "\u2a88",
        gnsim: "\u22e7",
        gt: ">",
        gtdot: "\u22d7",
        harrw: "\u21ad",
        hbar: "\u210f",
        hellip: "\u2026",
        hookleftarrow: "\u21a9",
        hookrightarrow: "\u21aa",
        imath: "\u0131",
        infin: "\u221e",
        intcal: "\u22ba",
        iota: "\u03b9",
        jmath: "\u0237",
        kappa: "\u03ba",
        kappav: "\u03f0",
        lEg: "\u2a8b",
        lambda: "\u03bb",
        lap: "\u2a85",
        larrlp: "\u21ab",
        larrtl: "\u21a2",
        lbrace: "{",
        lbrack: "[",
        le: "\u2264",
        leftleftarrows: "\u21c7",
        leftthreetimes: "\u22cb",
        lessdot: "\u22d6",
        lmoust: "\u23b0",
        lnE: "\u2268",
        lnap: "\u2a89",
        lne: "\u2a87",
        lnsim: "\u22e6",
        longmapsto: "\u27fc",
        looparrowright: "\u21ac",
        lowast: "\u2217",
        loz: "\u25ca",
        lt: "<",
        ltimes: "\u22c9",
        ltri: "\u25c3",
        macr: "\xaf",
        malt: "\u2720",
        mho: "\u2127",
        mu: "\u03bc",
        multimap: "\u22b8",
        nLeftarrow: "\u21cd",
        nLeftrightarrow: "\u21ce",
        nRightarrow: "\u21cf",
        nVDash: "\u22af",
        nVdash: "\u22ae",
        natur: "\u266e",
        nearr: "\u2197",
        nharr: "\u21ae",
        nlarr: "\u219a",
        not: "\xac",
        nrarr: "\u219b",
        nu: "\u03bd",
        nvDash: "\u22ad",
        nvdash: "\u22ac",
        nwarr: "\u2196",
        omega: "\u03c9",
        omicron: "\u03bf",
        or: "\u2228",
        osol: "\u2298",
        period: ".",
        phi: "\u03c6",
        phiv: "\u03d5",
        pi: "\u03c0",
        piv: "\u03d6",
        prap: "\u2ab7",
        precnapprox: "\u2ab9",
        precneqq: "\u2ab5",
        precnsim: "\u22e8",
        prime: "\u2032",
        psi: "\u03c8",
        quot: '"',
        rarrtl: "\u21a3",
        rbrace: "}",
        rbrack: "]",
        rho: "\u03c1",
        rhov: "\u03f1",
        rightrightarrows: "\u21c9",
        rightthreetimes: "\u22cc",
        ring: "\u02da",
        rmoust: "\u23b1",
        rtimes: "\u22ca",
        rtri: "\u25b9",
        scap: "\u2ab8",
        scnE: "\u2ab6",
        scnap: "\u2aba",
        scnsim: "\u22e9",
        sdot: "\u22c5",
        searr: "\u2198",
        sect: "\xa7",
        sharp: "\u266f",
        sigma: "\u03c3",
        sigmav: "\u03c2",
        simne: "\u2246",
        smile: "\u2323",
        spades: "\u2660",
        sub: "\u2282",
        subE: "\u2ac5",
        subnE: "\u2acb",
        subne: "\u228a",
        supE: "\u2ac6",
        supnE: "\u2acc",
        supne: "\u228b",
        swarr: "\u2199",
        tau: "\u03c4",
        theta: "\u03b8",
        thetav: "\u03d1",
        tilde: "\u02dc",
        times: "\xd7",
        triangle: "\u25b5",
        triangleq: "\u225c",
        upsi: "\u03c5",
        upuparrows: "\u21c8",
        veebar: "\u22bb",
        vellip: "\u22ee",
        weierp: "\u2118",
        xi: "\u03be",
        yen: "\xa5",
        zeta: "\u03b6",
        zigrarr: "\u21dd",
      });
    var s = {};
    function r(t, e) {
      if ("#" === e.charAt(0)) return a(e.slice(1));
      if (n.entities[e]) return n.entities[e];
      if (n.options.loadMissingEntities) {
        var r = e.match(/^[a-zA-Z](fr|scr|opf)$/)
          ? RegExp.$1
          : e.charAt(0).toLowerCase();
        s[r] ||
          ((s[r] = !0),
          o.retryAfter(i.asyncLoad("./util/entities/" + r + ".js")));
      }
      return t;
    }
    function a(t) {
      var e = "x" === t.charAt(0) ? parseInt(t.slice(1), 16) : parseInt(t);
      if (e < 65536) return String.fromCharCode(e);
      var r = 55296 + ((e -= 65536) >> 10),
        n = 56320 + (1023 & e);
      return String.fromCharCode(r, n);
    }
    (n.add = function (t, e) {
      Object.assign(n.entities, t), (s[e] = !0);
    }),
      (n.remove = function (t) {
        delete n.entities[t];
      }),
      (n.translate = function (t) {
        return t.replace(/&([a-z][a-z0-9]*|#(?:[0-9]+|x[0-9a-f]+));/gi, r);
      }),
      (n.numeric = a);
  },
  function (t, e, r) {
    "use strict";
    var O =
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
      M =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              s.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      l =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(M(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = ["top", "right", "bottom", "left"],
      o = ["width", "style", "color"];
    function E(t) {
      for (
        var e = t.split(/((?:'[^']*'|"[^"]*"|,[\s\n]|[^\s\n])*)/g), r = [];
        1 < e.length;

      )
        e.shift(), r.push(e.shift());
      return r;
    }
    function i(t) {
      var e,
        r,
        n = E(this.styles[t]);
      0 === n.length && n.push(""),
        1 === n.length && n.push(n[0]),
        2 === n.length && n.push(n[0]),
        3 === n.length && n.push(n[1]);
      try {
        for (
          var o = O(v.connect[t].children), i = o.next();
          !i.done;
          i = o.next()
        ) {
          var s = i.value;
          this.setStyle(this.childName(t, s), n.shift());
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
    }
    function s(t) {
      var e,
        r,
        n = v.connect[t].children,
        o = [];
      try {
        for (var i = O(n), s = i.next(); !s.done; s = i.next()) {
          var a = s.value,
            l = this.styles[t + "-" + a];
          if (!l) return void delete this.styles[t];
          o.push(l);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          s && !s.done && (r = i.return) && r.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      o[3] === o[1] &&
        (o.pop(), o[2] === o[0] && (o.pop(), o[1] === o[0] && o.pop())),
        (this.styles[t] = o.join(" "));
    }
    function a(t) {
      var e, r;
      try {
        for (
          var n = O(v.connect[t].children), o = n.next();
          !o.done;
          o = n.next()
        ) {
          var i = o.value;
          this.setStyle(this.childName(t, i), this.styles[t]);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          o && !o.done && (r = n.return) && r.call(n);
        } finally {
          if (e) throw e.error;
        }
      }
    }
    function u(t) {
      var e,
        r,
        n = l(v.connect[t].children),
        o = this.styles[this.childName(t, n.shift())];
      try {
        for (var i = O(n), s = i.next(); !s.done; s = i.next()) {
          var a = s.value;
          if (this.styles[this.childName(t, a)] !== o)
            return void delete this.styles[t];
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          s && !s.done && (r = i.return) && r.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      this.styles[t] = o;
    }
    var f = {
      width: /^(?:[\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$/,
      style:
        /^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$/,
    };
    function c(t) {
      var e,
        r,
        n,
        o,
        i = { width: "", style: "", color: "" };
      try {
        for (
          var s = O(E(this.styles[t])), a = s.next();
          !a.done;
          a = s.next()
        ) {
          var l = a.value;
          l.match(f.width) && "" === i.width
            ? (i.width = l)
            : l.match(f.style) && "" === i.style
            ? (i.style = l)
            : (i.color = l);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          a && !a.done && (r = s.return) && r.call(s);
        } finally {
          if (e) throw e.error;
        }
      }
      try {
        for (
          var u = O(v.connect[t].children), c = u.next();
          !c.done;
          c = u.next()
        ) {
          var p = c.value;
          this.setStyle(this.childName(t, p), i[p]);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          c && !c.done && (o = u.return) && o.call(u);
        } finally {
          if (n) throw n.error;
        }
      }
    }
    function p(t) {
      var e,
        r,
        n = [];
      try {
        for (
          var o = O(v.connect[t].children), i = o.next();
          !i.done;
          i = o.next()
        ) {
          var s = i.value,
            a = this.styles[this.childName(t, s)];
          a && n.push(a);
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
      n.length ? (this.styles[t] = n.join(" ")) : delete this.styles[t];
    }
    var b = {
      style: /^(?:normal|italic|oblique|inherit|initial|unset)$/,
      variant: new RegExp(
        "^(?:" +
          [
            "normal|none",
            "inherit|initial|unset",
            "common-ligatures|no-common-ligatures",
            "discretionary-ligatures|no-discretionary-ligatures",
            "historical-ligatures|no-historical-ligatures",
            "contextual|no-contextual",
            "(?:stylistic|character-variant|swash|ornaments|annotation)\\([^)]*\\)",
            "small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
            "lining-nums|oldstyle-nums|proportional-nums|tabular-nums",
            "diagonal-fractions|stacked-fractions",
            "ordinal|slashed-zero",
            "jis78|jis83|jis90|jis04|simplified|traditional",
            "full-width|proportional-width",
            "ruby",
          ].join("|") +
          ")$"
      ),
      weight: /^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$/,
      stretch: new RegExp(
        "^(?:" +
          [
            "normal",
            "(?:(?:ultra|extra|semi)-)?condensed",
            "(?:(?:semi|extra|ulta)-)?expanded",
            "inherit|initial|unset",
          ].join("|") +
          ")$"
      ),
      size: new RegExp(
        "^(?:" +
          [
            "xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller",
            "[d.]+%|[d.]+[a-z]+",
            "inherit|initial|unset",
          ].join("|") +
          ")(?:/(?:normal|[d.+](?:%|[a-z]+)?))?$"
      ),
    };
    function h(t) {
      var e,
        r,
        n,
        o,
        i = E(this.styles[t]),
        s = {
          style: "",
          variant: [],
          weight: "",
          stretch: "",
          size: "",
          family: "",
          "line-height": "",
        };
      try {
        for (var a = O(i), l = a.next(); !l.done; l = a.next()) {
          var u = l.value;
          s.family = u;
          try {
            for (
              var c = ((n = void 0), O(Object.keys(b))), p = c.next();
              !p.done;
              p = c.next()
            ) {
              var f = p.value;
              if ((Array.isArray(s[f]) || "" === s[f]) && u.match(b[f]))
                if ("size" === f) {
                  var h = M(u.split(/\//), 2),
                    d = h[0],
                    y = h[1];
                  (s[f] = d), y && (s["line-height"] = y);
                } else
                  "" === s.size &&
                    (Array.isArray(s[f]) ? s[f].push(u) : (s[f] = u));
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              p && !p.done && (o = c.return) && o.call(c);
            } finally {
              if (n) throw n.error;
            }
          }
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          l && !l.done && (r = a.return) && r.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
      !(function (t, e) {
        var r, n;
        try {
          for (
            var o = O(v.connect[t].children), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var s = i.value,
              a = this.childName(t, s);
            if (Array.isArray(e[s])) {
              var l = e[s];
              l.length && (this.styles[a] = l.join(" "));
            } else "" !== e[s] && (this.styles[a] = e[s]);
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
      })(t, s),
        delete this.styles[t];
    }
    function d(t) {}
    var v =
      (Object.defineProperty(y.prototype, "cssText", {
        get: function () {
          var e,
            t,
            r = [];
          try {
            for (
              var n = O(Object.keys(this.styles)), o = n.next();
              !o.done;
              o = n.next()
            ) {
              var i = o.value,
                s = this.parentName(i);
              this.styles[s] || r.push(i + ": " + this.styles[i]);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return r.join("; ");
        },
        enumerable: !0,
        configurable: !0,
      }),
      (y.prototype.set = function (t, e) {
        for (
          t = this.normalizeName(t),
            this.setStyle(t, e),
            y.connect[t] &&
              !y.connect[t].combine &&
              (this.combineChildren(t), delete this.styles[t]);
          t.match(/-/) && ((t = this.parentName(t)), y.connect[t]);

        )
          y.connect[t].combine.call(this, t);
      }),
      (y.prototype.get = function (t) {
        return (
          (t = this.normalizeName(t)),
          this.styles.hasOwnProperty(t) ? this.styles[t] : ""
        );
      }),
      (y.prototype.setStyle = function (t, e) {
        (this.styles[t] = e),
          y.connect[t] &&
            y.connect[t].children &&
            y.connect[t].split.call(this, t),
          "" === e && delete this.styles[t];
      }),
      (y.prototype.combineChildren = function (t) {
        var e,
          r,
          n = this.parentName(t);
        try {
          for (
            var o = O(y.connect[t].children), i = o.next();
            !i.done;
            i = o.next()
          ) {
            var s = i.value,
              a = this.childName(n, s);
            y.connect[a].combine.call(this, a);
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
      }),
      (y.prototype.parentName = function (t) {
        var e = t.replace(/-[^-]*$/, "");
        return t === e ? "" : e;
      }),
      (y.prototype.childName = function (t, e) {
        return e.match(/-/)
          ? e
          : (y.connect[t] &&
              !y.connect[t].combine &&
              ((e += t.replace(/.*-/, "-")), (t = this.parentName(t))),
            t + "-" + e);
      }),
      (y.prototype.normalizeName = function (t) {
        return t.replace(/[A-Z]/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }),
      (y.prototype.parse = function (t) {
        void 0 === t && (t = "");
        var e = this.constructor.pattern;
        this.styles = {};
        for (var r = t.replace(e.comment, "").split(e.style); 1 < r.length; ) {
          var n = M(r.splice(0, 3), 3),
            o = n[0],
            i = n[1],
            s = n[2];
          if (o.match(/[^\s\n]/)) return;
          this.set(i, s);
        }
      }),
      (y.pattern = {
        style:
          /([-a-z]+)[\s\n]*:[\s\n]*((?:'[^']*'|"[^"]*"|\n|.)*?)[\s\n]*(?:;|$)/g,
        comment: /\/\*[^]*?\*\//g,
      }),
      (y.connect = {
        padding: { children: n, split: i, combine: s },
        border: { children: n, split: a, combine: u },
        "border-top": { children: o, split: c, combine: p },
        "border-right": { children: o, split: c, combine: p },
        "border-bottom": { children: o, split: c, combine: p },
        "border-left": { children: o, split: c, combine: p },
        "border-width": { children: n, split: i, combine: null },
        "border-style": { children: n, split: i, combine: null },
        "border-color": { children: n, split: i, combine: null },
        font: {
          children: [
            "style",
            "variant",
            "weight",
            "stretch",
            "line-height",
            "size",
            "family",
          ],
          split: h,
          combine: d,
        },
      }),
      y);
    function y(t) {
      void 0 === t && (t = ""), this.parse(t);
    }
    e.Styles = v;
  },
  function (t, a, e) {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 }),
      (a.BIGDIMEN = 1e6),
      (a.UNITS = {
        px: 1,
        pt: 96 / 72,
        pc: 8,
        in: 96,
        cm: 96 / 2.54,
        mm: 96 / 25.4,
      }),
      (a.RELUNITS = { em: 1, ex: 0.431, mu: 1 / 18 }),
      (a.MATHSPACE = {
        veryverythinmathspace: 1 / 18,
        verythinmathspace: 2 / 18,
        thinmathspace: 3 / 18,
        mediummathspace: 4 / 18,
        thickmathspace: 5 / 18,
        verythickmathspace: 6 / 18,
        veryverythickmathspace: 7 / 18,
        negativeveryverythinmathspace: -1 / 18,
        negativeverythinmathspace: -2 / 18,
        negativethinmathspace: -3 / 18,
        negativemediummathspace: -4 / 18,
        negativethickmathspace: -5 / 18,
        negativeverythickmathspace: -6 / 18,
        negativeveryverythickmathspace: -7 / 18,
        thin: 0.04,
        medium: 0.06,
        thick: 0.1,
        normal: 1,
        big: 2,
        small: 1 / Math.sqrt(2),
        infinity: a.BIGDIMEN,
      }),
      (a.length2em = function (t, e, r, n) {
        if (
          (void 0 === e && (e = 0),
          void 0 === r && (r = 1),
          void 0 === n && (n = 16),
          "string" != typeof t && (t = String(t)),
          "" === t || null == t)
        )
          return e;
        if (a.MATHSPACE[t]) return a.MATHSPACE[t];
        var o = t.match(
          /^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/
        );
        if (!o) return e;
        var i = parseFloat(o[1] || "1"),
          s = o[2];
        return a.UNITS.hasOwnProperty(s)
          ? (i * a.UNITS[s]) / n / r
          : a.RELUNITS.hasOwnProperty(s)
          ? i * a.RELUNITS[s]
          : "%" === s
          ? (i / 100) * e
          : i * e;
      }),
      (a.percent = function (t) {
        return (100 * t).toFixed(1).replace(/\.?0+$/, "") + "%";
      }),
      (a.em = function (t) {
        return Math.abs(t) < 0.001
          ? "0"
          : t.toFixed(3).replace(/\.?0+$/, "") + "em";
      }),
      (a.emRounded = function (t, e) {
        return (
          void 0 === e && (e = 16),
          (t = (Math.round(t * e) + 0.05) / e),
          Math.abs(t) < 0.001
            ? "0em"
            : t.toFixed(3).replace(/\.?0+$/, "") + "em"
        );
      }),
      (a.px = function (t, e, r) {
        return (
          void 0 === e && (e = -a.BIGDIMEN),
          void 0 === r && (r = 16),
          (t *= r),
          e && t < e && (t = e),
          Math.abs(t) < 0.1 ? "0" : t.toFixed(1).replace(/\.0$/, "") + "px"
        );
      });
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sum = function (t) {
        return t.reduce(function (t, e) {
          return t + e;
        }, 0);
      }),
      (e.max = function (t) {
        return t.reduce(function (t, e) {
          return Math.max(t, e);
        }, 0);
      });
  },
]);
