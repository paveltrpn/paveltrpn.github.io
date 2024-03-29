!(function (o) {
  var r = {};
  function n(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return o[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = o),
    (n.c = r),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
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
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
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
    n((n.s = 8));
})([
  function (t, e, o) {
    "use strict";
    var s =
        (this && this.__read) ||
        function (t, e) {
          var o = "function" == typeof Symbol && t[Symbol.iterator];
          if (!o) return t;
          var r,
            n,
            i = o.call(t),
            a = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              r && !r.done && (o = i.return) && o.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
      i =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(s(arguments[e]));
          return t;
        },
      l =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            o = e && t[e],
            r = 0;
          if (o) return o.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && r >= t.length && (t = void 0),
                  { value: t && t[r++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r =
      ((n.stopEvent = function (t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          t.stopImmediatePropagation
            ? t.stopImmediatePropagation()
            : t.stopPropagation && t.stopPropagation(),
          (t.cancelBubble = !0);
      }),
      (n.create = function (t, e, o) {
        for (var r = [], n = 3; n < arguments.length; n++)
          r[n - 3] = arguments[n];
        return new (this.bind.apply(this, i([void 0, t, e, o], r)))();
      }),
      (n.prototype.Events = function () {
        return this.events;
      }),
      Object.defineProperty(n.prototype, "active", {
        get: function () {
          return this._active;
        },
        set: function (t) {
          this._active = t;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (n.prototype.Attach = function () {
        this.AddEvents();
      }),
      (n.prototype.Detach = function () {
        this.RemoveEvents();
      }),
      (n.prototype.Start = function () {
        (this.highlighter = this.getHighlighter()), (this.active = !0);
      }),
      (n.prototype.Stop = function () {
        this.active &&
          (this.region.Clear(), this.region.Hide(), (this.active = !1));
      }),
      (n.prototype.AddEvents = function () {
        var e, t;
        try {
          for (var o = l(this.events), r = o.next(); !r.done; r = o.next()) {
            var n = s(r.value, 2),
              i = n[0],
              a = n[1];
            this.node.addEventListener(i, a);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            r && !r.done && (t = o.return) && t.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (n.prototype.RemoveEvents = function () {
        var e, t;
        try {
          for (var o = l(this.events), r = o.next(); !r.done; r = o.next()) {
            var n = s(r.value, 2),
              i = n[0],
              a = n[1];
            this.node.removeEventListener(i, a);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            r && !r.done && (t = o.return) && t.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (n.prototype.Update = function (t) {
        void 0 === t && (t = !1);
      }),
      (n.prototype.getHighlighter = function () {
        var t = this.document.options.a11y,
          e = {
            color: t.foregroundColor.toLowerCase(),
            alpha: t.foregroundOpacity,
          },
          o = {
            color: t.backgroundColor.toLowerCase(),
            alpha: t.backgroundOpacity,
          };
        return sre.HighlighterFactory.highlighter(o, e, {
          renderer: this.document.outputJax.name,
          browser: "v3",
        });
      }),
      (n.prototype.stopEvent = function (t) {
        this.stoppable && n.stopEvent(t);
      }),
      n);
    function n(t, e, o) {
      for (var r = [], n = 3; n < arguments.length; n++)
        r[n - 3] = arguments[n];
      (this.document = t),
        (this.region = e),
        (this.node = o),
        (this.stoppable = !0),
        (this.events = []),
        (this.highlighter = this.getHighlighter()),
        (this._active = !1);
    }
    e.AbstractExplorer = r;
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sreReady = MathJax._.a11y.sre.sreReady);
  },
  function (t, e, o) {
    "use strict";
    var r,
      n,
      i,
      a,
      s =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
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
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l = o(15);
    o(1);
    var h =
      ((c.prototype.AddStyles = function () {
        if (!this.CLASS.styleAdded) {
          var t = this.document.adaptor.node("style");
          (t.innerHTML = this.CLASS.style.cssText),
            this.document.adaptor
              .head(this.document.adaptor.document)
              .appendChild(t),
            (this.CLASS.styleAdded = !0);
        }
      }),
      (c.prototype.AddElement = function () {
        var t = this.document.adaptor.node("div");
        t.classList.add(this.CLASS.className),
          (t.style.backgroundColor = "white"),
          (this.div = t),
          (this.inner = this.document.adaptor.node("div")),
          this.div.appendChild(this.inner),
          this.document.adaptor
            .body(this.document.adaptor.document)
            .appendChild(this.div);
      }),
      (c.prototype.Show = function (t, e) {
        this.position(t),
          this.highlight(e),
          this.div.classList.add(this.CLASS.className + "_Show");
      }),
      (c.prototype.Hide = function () {
        this.div.classList.remove(this.CLASS.className + "_Show");
      }),
      (c.prototype.stackRegions = function (t) {
        for (
          var e = t.getBoundingClientRect(),
            o = 0,
            r = Number.POSITIVE_INFINITY,
            n = this.document.adaptor.document.getElementsByClassName(
              this.CLASS.className + "_Show"
            ),
            i = 0,
            a = void 0;
          (a = n[i]);
          i++
        )
          a !== this.div &&
            ((o = Math.max(a.getBoundingClientRect().bottom, o)),
            (r = Math.min(a.getBoundingClientRect().left, r)));
        var s = (o || e.bottom + 10) + window.pageYOffset,
          l = (r < Number.POSITIVE_INFINITY ? r : e.left) + window.pageXOffset;
        (this.div.style.top = s + "px"), (this.div.style.left = l + "px");
      }),
      (c.styleAdded = !1),
      c);
    function c(t) {
      (this.document = t),
        (this.CLASS = this.constructor),
        this.AddStyles(),
        this.AddElement();
    }
    e.AbstractRegion = h;
    var p,
      u =
        (s(d, (p = h)),
        (d.prototype.Clear = function () {}),
        (d.prototype.Update = function () {}),
        (d.prototype.Hide = function () {}),
        (d.prototype.Show = function () {}),
        (d.prototype.AddElement = function () {}),
        (d.prototype.AddStyles = function () {}),
        (d.prototype.position = function () {}),
        (d.prototype.highlight = function (t) {}),
        d);
    function d() {
      return (null !== p && p.apply(this, arguments)) || this;
    }
    e.DummyRegion = u;
    var f,
      y =
        (s(v, (f = h)),
        (v.prototype.Clear = function () {
          this.Update(""),
            (this.inner.style.top = ""),
            (this.inner.style.backgroundColor = "");
        }),
        (v.prototype.Update = function (t) {
          (this.inner.textContent = ""), (this.inner.textContent = t);
        }),
        (v.prototype.position = function (t) {
          this.stackRegions(t);
        }),
        (v.prototype.highlight = function (t) {
          var e = t.colorString();
          (this.inner.style.backgroundColor = e.background),
            (this.inner.style.color = e.foreground);
        }),
        v);
    function v() {
      return (null !== f && f.apply(this, arguments)) || this;
    }
    e.StringRegion = y;
    var g,
      m =
        (s(b, (g = y)),
        (b.className = "MJX_ToolTip"),
        (b.style = new l.CssStyles(
          (((n = {})["." + b.className] = {
            position: "absolute",
            display: "inline-block",
            height: "1px",
            width: "1px",
          }),
          (n["." + b.className + "_Show"] = {
            width: "auto",
            height: "auto",
            opacity: 1,
            "text-align": "center",
            "border-radius": "6px",
            padding: "0px 0px",
            "border-bottom": "1px dotted black",
            position: "absolute",
            "z-index": 202,
          }),
          n)
        )),
        b);
    function b() {
      return (null !== g && g.apply(this, arguments)) || this;
    }
    e.ToolTip = m;
    var x,
      _ =
        (s(w, (x = y)),
        (w.className = "MJX_LiveRegion"),
        (w.style = new l.CssStyles(
          (((i = {})["." + w.className] = {
            position: "absolute",
            top: "0",
            height: "1px",
            width: "1px",
            padding: "1px",
            overflow: "hidden",
          }),
          (i["." + w.className + "_Show"] = {
            top: "0",
            position: "absolute",
            width: "auto",
            height: "auto",
            padding: "0px 0px",
            opacity: 1,
            "z-index": "202",
            left: 0,
            right: 0,
            margin: "0 auto",
            "background-color": "rgba(0, 0, 255, 0.2)",
            "box-shadow": "0px 10px 20px #888",
            border: "2px solid #CCCCCC",
          }),
          i)
        )),
        w);
    function w(t) {
      var e = x.call(this, t) || this;
      return (e.document = t), e.div.setAttribute("aria-live", "assertive"), e;
    }
    e.LiveRegion = _;
    var S,
      M =
        (s(O, (S = h)),
        (O.prototype.position = function (t) {
          var e,
            o = t.getBoundingClientRect(),
            r = this.div.getBoundingClientRect(),
            n = o.left + o.width / 2 - r.width / 2;
          switch (
            ((n = n < 0 ? 0 : n),
            (n += window.pageXOffset),
            this.document.options.a11y.align)
          ) {
            case "top":
              e = o.top - r.height - 10;
              break;
            case "bottom":
              e = o.bottom + 10;
              break;
            case "center":
            default:
              e = o.top + o.height / 2 - r.height / 2;
          }
          (e = (e += window.pageYOffset) < 0 ? 0 : e),
            (this.div.style.top = e + "px"),
            (this.div.style.left = n + "px");
        }),
        (O.prototype.highlight = function (t) {
          if (
            !this.inner.firstChild ||
            this.inner.firstChild.hasAttribute("sre-highlight")
          ) {
            var e = t.colorString();
            (this.inner.style.backgroundColor = e.background),
              (this.inner.style.color = e.foreground);
          }
        }),
        (O.prototype.Show = function (t, e) {
          (this.div.style.fontSize = this.document.options.a11y.magnify),
            this.Update(t),
            S.prototype.Show.call(this, t, e);
        }),
        (O.prototype.Clear = function () {
          (this.inner.textContent = ""),
            (this.inner.style.top = ""),
            (this.inner.style.backgroundColor = "");
        }),
        (O.prototype.Update = function (t) {
          this.Clear();
          var e = this.cloneNode(t);
          this.inner.appendChild(e);
        }),
        (O.prototype.cloneNode = function (t) {
          var e = t.cloneNode(!0);
          if ("MJX-CONTAINER" !== e.nodeName) {
            "g" !== e.nodeName &&
              (e.style.marginLeft = e.style.marginRight = "0");
            for (var o = t; o && "MJX-CONTAINER" !== o.nodeName; )
              o = o.parentNode;
            if (
              "MJX-MATH" !== e.nodeName &&
              "svg" !== e.nodeName &&
              "svg" ===
                (e = o.firstChild.cloneNode(!1).appendChild(e).parentNode)
                  .nodeName
            ) {
              e.firstChild.setAttribute("transform", "matrix(1 0 0 -1 0 0)");
              var r = parseFloat(e.getAttribute("viewBox").split(/ /)[2]),
                n = parseFloat(e.getAttribute("width")),
                i = t.getBBox(),
                a = i.x,
                s = i.y,
                l = i.width,
                h = i.height;
              e.setAttribute("viewBox", [a, -(s + h), l, h].join(" ")),
                e.removeAttribute("style"),
                e.setAttribute("width", (n / r) * l + "ex"),
                e.setAttribute("height", (n / r) * h + "ex"),
                o.setAttribute("sre-highlight", "false");
            }
            (e = o.cloneNode(!1).appendChild(e).parentNode).style.margin = "0";
          }
          return e;
        }),
        (O.className = "MJX_HoverRegion"),
        (O.style = new l.CssStyles(
          (((a = {})["." + O.className] = {
            position: "absolute",
            height: "1px",
            width: "1px",
            padding: "1px",
            overflow: "hidden",
          }),
          (a["." + O.className + "_Show"] = {
            position: "absolute",
            width: "max-content",
            height: "auto",
            padding: "0px 0px",
            opacity: 1,
            "z-index": "202",
            margin: "0 auto",
            "background-color": "rgba(0, 0, 255, 0.2)",
            "box-shadow": "0px 10px 20px #888",
            border: "2px solid #CCCCCC",
          }),
          a)
        )),
        O);
    function O(t) {
      var e = S.call(this, t) || this;
      return (e.document = t), (e.inner.style.lineHeight = "0"), e;
    }
    e.HoverRegion = M;
  },
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
              for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            })(t, e);
        }),
        function (t, e) {
          function o() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        }),
      a =
        (this && this.__assign) ||
        function () {
          return (a =
            Object.assign ||
            function (t) {
              for (var e, o = 1, r = arguments.length; o < r; o++)
                for (var n in (e = arguments[o]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }).apply(this, arguments);
        },
      h =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            o = e && t[e],
            r = 0;
          if (o) return o.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && r >= t.length && (t = void 0),
                  { value: t && t[r++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        },
      c =
        (this && this.__read) ||
        function (t, e) {
          var o = "function" == typeof Symbol && t[Symbol.iterator];
          if (!o) return t;
          var r,
            n,
            i = o.call(t),
            a = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              r && !r.done && (o = i.return) && o.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        },
      p =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(c(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l = o(10),
      i = o(11),
      s = o(12),
      u = o(13),
      d = o(14),
      f = o(5),
      y = o(6),
      v = o(7),
      g = o(2);
    function m(t, r) {
      return (
        n(e, (s = t)),
        (e.prototype.explorable = function (t) {
          if (!(this.state() >= l.STATE.EXPLORER)) {
            var e = this.typesetRoot,
              o = r(this.root);
            this.savedId &&
              (this.typesetRoot.setAttribute("sre-explorer-id", this.savedId),
              (this.savedId = null)),
              (this.explorers = (function (t, e, o) {
                var r,
                  n,
                  i = {};
                try {
                  for (
                    var a = h(Object.keys(x)), s = a.next();
                    !s.done;
                    s = a.next()
                  ) {
                    var l = s.value;
                    i[l] = x[l](t, e, o);
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    s && !s.done && (n = a.return) && n.call(a);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                return i;
              })(t, e, o)),
              this.attachExplorers(t),
              this.state(l.STATE.EXPLORER);
          }
        }),
        (e.prototype.attachExplorers = function (t) {
          var e, o;
          this.attached = [];
          try {
            for (
              var r = h(Object.keys(this.explorers)), n = r.next();
              !n.done;
              n = r.next()
            ) {
              var i = n.value,
                a = this.explorers[i];
              t.options.a11y[i]
                ? (a.Attach(), this.attached.push(a))
                : a.Detach();
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
          this.addExplorers(this.attached);
        }),
        (e.prototype.rerender = function (t, e) {
          var o, r;
          void 0 === e && (e = l.STATE.RERENDER),
            (this.savedId = this.typesetRoot.getAttribute("sre-explorer-id")),
            (this.refocus = window.document.activeElement === this.typesetRoot);
          try {
            for (
              var n = h(this.attached), i = n.next();
              !i.done;
              i = n.next()
            ) {
              var a = i.value;
              a.active && ((this.restart = !0), a.Stop());
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              i && !i.done && (r = n.return) && r.call(n);
            } finally {
              if (o) throw o.error;
            }
          }
          s.prototype.rerender.call(this, t, e);
        }),
        (e.prototype.updateDocument = function (t) {
          s.prototype.updateDocument.call(this, t),
            this.refocus && this.typesetRoot.focus(),
            this.restart &&
              this.attached.forEach(function (t) {
                return t.Start();
              }),
            (this.refocus = this.restart = !1);
        }),
        (e.prototype.addExplorers = function (t) {
          var e, o;
          if (!(t.length <= 1)) {
            var r = null;
            try {
              for (
                var n = h(this.attached), i = n.next();
                !i.done;
                i = n.next()
              ) {
                var a = i.value;
                a instanceof f.AbstractKeyExplorer &&
                  ((a.stoppable = !1), (r = a));
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (o = n.return) && o.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
            r && (r.stoppable = !0);
          }
        }),
        e
      );
      function e() {
        var t = (null !== s && s.apply(this, arguments)) || this;
        return (
          (t.explorers = {}),
          (t.attached = []),
          (t.restart = !1),
          (t.refocus = !1),
          (t.savedId = null),
          t
        );
      }
      var s;
    }
    function b(t) {
      var e, i;
      return (
        n(o, (i = t)),
        (o.prototype.explorable = function () {
          var e, t;
          if (!this.processed.isSet("explorer")) {
            try {
              for (var o = h(this.math), r = o.next(); !r.done; r = o.next())
                r.value.explorable(this);
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                r && !r.done && (t = o.return) && t.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
            this.processed.set("explorer");
          }
          return this;
        }),
        (o.prototype.state = function (t, e) {
          return (
            void 0 === e && (e = !1),
            i.prototype.state.call(this, t, e),
            t < l.STATE.EXPLORER && this.processed.clear("explorer"),
            this
          );
        }),
        ((e = o).OPTIONS = a(a({}, t.OPTIONS), {
          renderActions: s.expandable(
            a(a({}, t.OPTIONS.renderActions), {
              explorable: [l.STATE.EXPLORER],
            })
          ),
          a11y: {
            align: "top",
            backgroundColor: "Blue",
            backgroundOpacity: 0.2,
            braille: !0,
            flame: !1,
            foregroundColor: "Black",
            foregroundOpacity: 1,
            highlight: "None",
            hover: !1,
            infoPrefix: !1,
            infoRole: !1,
            infoType: !1,
            keyMagnifier: !1,
            magnification: "None",
            magnify: "400%",
            mouseMagnifier: !1,
            speech: !0,
            speechRules: "mathspeak-default",
            subtitles: !0,
            treeColoring: !1,
            viewBraille: !1,
          },
        })),
        e
      );
      function o() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var o = i.apply(this, p(t)) || this,
          r = o.constructor.ProcessBits;
        r.has("explorer") || r.allocate("explorer");
        var n = new u.SerializedMmlVisitor(o.mmlFactory);
        return (
          (o.options.MathItem = m(o.options.MathItem, function (t) {
            return n.visitTree(t);
          })),
          (o.explorerRegions = (function (t) {
            return {
              speechRegion: new g.LiveRegion(t),
              brailleRegion: new g.LiveRegion(t),
              magnifier: new g.HoverRegion(t),
              tooltip1: new g.ToolTip(t),
              tooltip2: new g.ToolTip(t),
              tooltip3: new g.ToolTip(t),
            };
          })(o)),
          o
        );
      }
    }
    l.newState("EXPLORER", 160),
      (e.ExplorerMathItemMixin = m),
      (e.ExplorerMathDocumentMixin = b),
      (e.ExplorerHandler = function (t, e) {
        return (
          void 0 === e && (e = null),
          !t.documentClass.prototype.enrich && e && (t = i.EnrichHandler(t, e)),
          (t.documentClass = b(t.documentClass)),
          t
        );
      });
    var x = {
      speech: function (t, e) {
        for (var o, r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = (o = f.SpeechExplorer).create.apply(
            o,
            p([t, t.explorerRegions.speechRegion, e], r)
          ),
          a = c(t.options.a11y.speechRules.split("-"), 2),
          s = a[0],
          l = a[1];
        return (
          i.speechGenerator.setOptions({
            locale: "en",
            domain: s,
            style: l,
            modality: "speech",
          }),
          (i.showRegion = "subtitles"),
          i
        );
      },
      braille: function (t, e) {
        for (var o, r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = (o = f.SpeechExplorer).create.apply(
          o,
          p([t, t.explorerRegions.brailleRegion, e], r)
        );
        return (
          i.speechGenerator.setOptions({
            locale: "nemeth",
            domain: "default",
            style: "default",
            modality: "braille",
          }),
          (i.showRegion = "viewBraille"),
          i
        );
      },
      keyMagnifier: function (t, e) {
        for (var o, r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        return (o = f.Magnifier).create.apply(
          o,
          p([t, t.explorerRegions.magnifier, e], r)
        );
      },
      mouseMagnifier: function (t, e) {
        for (var o = [], r = 2; r < arguments.length; r++)
          o[r - 2] = arguments[r];
        return y.ContentHoverer.create(
          t,
          t.explorerRegions.magnifier,
          e,
          function (t) {
            return t.hasAttribute("data-semantic-type");
          },
          function (t) {
            return t;
          }
        );
      },
      hover: function (t, e) {
        for (var o = [], r = 2; r < arguments.length; r++)
          o[r - 2] = arguments[r];
        return y.FlameHoverer.create(t, null, e);
      },
      infoType: function (t, e) {
        for (var o = [], r = 2; r < arguments.length; r++)
          o[r - 2] = arguments[r];
        return y.ValueHoverer.create(
          t,
          t.explorerRegions.tooltip1,
          e,
          function (t) {
            return t.hasAttribute("data-semantic-type");
          },
          function (t) {
            return t.getAttribute("data-semantic-type");
          }
        );
      },
      infoRole: function (t, e) {
        for (var o = [], r = 2; r < arguments.length; r++)
          o[r - 2] = arguments[r];
        return y.ValueHoverer.create(
          t,
          t.explorerRegions.tooltip2,
          e,
          function (t) {
            return t.hasAttribute("data-semantic-role");
          },
          function (t) {
            return t.getAttribute("data-semantic-role");
          }
        );
      },
      infoPrefix: function (t, e) {
        for (var o = [], r = 2; r < arguments.length; r++)
          o[r - 2] = arguments[r];
        return y.ValueHoverer.create(
          t,
          t.explorerRegions.tooltip3,
          e,
          function (t) {
            return t.hasAttribute("data-semantic-prefix");
          },
          function (t) {
            return t.getAttribute("data-semantic-prefix");
          }
        );
      },
      flame: function (t, e) {
        for (var o = [], r = 2; r < arguments.length; r++)
          o[r - 2] = arguments[r];
        return v.FlameColorer.create(t, null, e);
      },
      treeColoring: function (t, e) {
        for (var o = [], r = 2; r < arguments.length; r++)
          o[r - 2] = arguments[r];
        return v.TreeColorer.create.apply(v.TreeColorer, p([t, null, e], o));
      },
    };
    function _(t, e, o) {
      switch (e) {
        case "magnification":
          switch (o) {
            case "None":
              (t.options.a11y.magnification = o),
                (t.options.a11y.keyMagnifier = !1),
                (t.options.a11y.mouseMagnifier = !1);
              break;
            case "Keyboard":
              (t.options.a11y.magnification = o),
                (t.options.a11y.keyMagnifier = !0),
                (t.options.a11y.mouseMagnifier = !1);
              break;
            case "Mouse":
              (t.options.a11y.magnification = o),
                (t.options.a11y.keyMagnifier = !1),
                (t.options.a11y.mouseMagnifier = !0);
          }
          break;
        case "highlight":
          switch (o) {
            case "None":
              (t.options.a11y.highlight = o),
                (t.options.a11y.hover = !1),
                (t.options.a11y.flame = !1);
              break;
            case "Hover":
              (t.options.a11y.highlight = o),
                (t.options.a11y.hover = !0),
                (t.options.a11y.flame = !1);
              break;
            case "Flame":
              (t.options.a11y.highlight = o),
                (t.options.a11y.hover = !1),
                (t.options.a11y.flame = !0);
          }
          break;
        default:
          t.options.a11y[e] = o;
      }
    }
    (e.setA11yOptions = function (t, e) {
      var o, r;
      for (var n in e) void 0 !== t.options.a11y[n] && _(t, n, e[n]);
      try {
        for (var i = h(t.math), a = i.next(); !a.done; a = i.next()) {
          a.value.attachExplorers(t);
        }
      } catch (t) {
        o = { error: t };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
    }),
      (e.setA11yOption = _);
    d.MJContextMenu.DynamicSubmenus.set("Clearspeak", function (t, e) {
      var o = sre.ClearspeakPreferences.smartPreferences(t.mathItem, "en");
      return ContextMenu.SubMenu.parse({ items: o, id: "Clearspeak" }, e);
    });
  },
  function (t, e, o) {
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
              for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            })(t, e);
        }),
        function (t, e) {
          function o() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        }),
      i =
        (this && this.__read) ||
        function (t, e) {
          var o = "function" == typeof Symbol && t[Symbol.iterator];
          if (!o) return t;
          var r,
            n,
            i = o.call(t),
            a = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              r && !r.done && (o = i.return) && o.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a,
      s = o(0),
      l = o(1),
      h =
        ((a = s.AbstractExplorer),
        n(c, a),
        (c.prototype.FocusIn = function (t) {}),
        (c.prototype.FocusOut = function (t) {
          this.Stop();
        }),
        (c.prototype.Update = function (t) {
          void 0 === t && (t = !1),
            (this.active || t) &&
              (this.highlighter.unhighlight(),
              this.highlighter.highlight(this.walker.getFocus(!0).getNodes()));
        }),
        (c.prototype.Attach = function () {
          a.prototype.Attach.call(this),
            (this.oldIndex = this.node.tabIndex),
            (this.node.tabIndex = 1),
            this.node.setAttribute("role", "application");
        }),
        (c.prototype.Detach = function () {
          (this.node.tabIndex = this.oldIndex),
            (this.oldIndex = null),
            this.node.removeAttribute("role"),
            a.prototype.Detach.call(this);
        }),
        (c.prototype.Stop = function () {
          this.active &&
            (this.highlighter.unhighlight(), this.walker.deactivate()),
            a.prototype.Stop.call(this);
        }),
        c);
    function c() {
      var t = (null !== a && a.apply(this, arguments)) || this;
      return (
        (t.events = a.prototype.Events.call(t).concat([
          ["keydown", t.KeyDown.bind(t)],
          ["focusin", t.FocusIn.bind(t)],
          ["focusout", t.FocusOut.bind(t)],
        ])),
        (t.oldIndex = null),
        t
      );
    }
    e.AbstractKeyExplorer = h;
    var p,
      u =
        (n(d, (p = h)),
        (d.prototype.Start = function () {
          p.prototype.Start.call(this);
          var t = this.getOptions();
          (this.speechGenerator =
            sre.SpeechGeneratorFactory.generator("Direct")),
            this.speechGenerator.setOptions(t),
            (this.walker = sre.WalkerFactory.walker(
              "table",
              this.node,
              this.speechGenerator,
              this.highlighter,
              this.mml
            )),
            this.walker.activate(),
            this.Update(),
            this.document.options.a11y[this.showRegion] &&
              this.region.Show(this.node, this.highlighter),
            (this.restarted = !0);
        }),
        (d.prototype.Update = function (t) {
          void 0 === t && (t = !1),
            p.prototype.Update.call(this, t),
            this.region.Update(this.walker.speech());
          var e = this.speechGenerator.getOptions();
          "speech" === e.modality &&
            (this.document.options.a11y.speechRules = e.domain + "-" + e.style);
        }),
        (d.prototype.Speech = function (t) {
          var e = this;
          l.sreReady
            .then(function () {
              t.speech(),
                e.node.setAttribute("hasspeech", "true"),
                e.Update(),
                e.restarted &&
                  e.document.options.a11y[e.showRegion] &&
                  e.region.Show(e.node, e.highlighter);
            })
            .catch(function (t) {
              return console.log(t.message);
            });
        }),
        (d.prototype.KeyDown = function (t) {
          var e = t.keyCode;
          return 27 === e
            ? (this.Stop(), void this.stopEvent(t))
            : this.active
            ? (this.Move(e), void this.stopEvent(t))
            : void (
                ((32 === e && t.shiftKey) || 13 === e) &&
                (this.Start(), this.stopEvent(t))
              );
        }),
        (d.prototype.Move = function (t) {
          this.walker.move(t), this.Update();
        }),
        (d.prototype.initWalker = function () {
          this.speechGenerator = sre.SpeechGeneratorFactory.generator("Tree");
          var t = sre.WalkerFactory.walker(
            "dummy",
            this.node,
            this.speechGenerator,
            this.highlighter,
            this.mml
          );
          (this.walker = t), this.Speech(t);
        }),
        (d.prototype.getOptions = function () {
          var t = this.speechGenerator.getOptions(),
            e = i(this.document.options.a11y.speechRules.split("-"), 2),
            o = e[0],
            r = e[1];
          return (
            "speech" !== t.modality ||
              (t.domain === o && t.style === r) ||
              ((t.domain = o), (t.style = r), this.walker.update(t)),
            t
          );
        }),
        d);
    function d(t, e, o, r) {
      var n = p.call(this, t, e, o) || this;
      return (
        (n.document = t),
        (n.region = e),
        (n.node = o),
        (n.mml = r),
        (n.showRegion = "subtitles"),
        (n.restarted = !1),
        n.initWalker(),
        n
      );
    }
    e.SpeechExplorer = u;
    var f,
      y =
        (n(v, (f = h)),
        (v.prototype.Update = function (t) {
          void 0 === t && (t = !1),
            f.prototype.Update.call(this, t),
            this.showFocus();
        }),
        (v.prototype.Start = function () {
          f.prototype.Start.call(this),
            this.region.Show(this.node, this.highlighter),
            this.walker.activate(),
            this.Update();
        }),
        (v.prototype.showFocus = function () {
          var t = this.walker.getFocus().getNodes()[0];
          this.region.Show(t, this.highlighter);
        }),
        (v.prototype.Move = function (t) {
          this.walker.move(t) && this.Update();
        }),
        (v.prototype.KeyDown = function (t) {
          var e = t.keyCode;
          return 27 === e
            ? (this.Stop(), void this.stopEvent(t))
            : this.active && 13 !== e
            ? (this.Move(e), void this.stopEvent(t))
            : void (
                ((32 === e && t.shiftKey) || 13 === e) &&
                (this.Start(), this.stopEvent(t))
              );
        }),
        v);
    function v(t, e, o, r) {
      var n = f.call(this, t, e, o) || this;
      return (
        (n.document = t),
        (n.region = e),
        (n.node = o),
        (n.mml = r),
        (n.walker = sre.WalkerFactory.walker(
          "table",
          n.node,
          sre.SpeechGeneratorFactory.generator("Dummy"),
          n.highlighter,
          n.mml
        )),
        n
      );
    }
    e.Magnifier = y;
  },
  function (t, e, o) {
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
              for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            })(t, e);
        }),
        function (t, e) {
          function o() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        }),
      i =
        (this && this.__read) ||
        function (t, e) {
          var o = "function" == typeof Symbol && t[Symbol.iterator];
          if (!o) return t;
          var r,
            n,
            i = o.call(t),
            a = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              r && !r.done && (o = i.return) && o.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          return a;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a,
      s = o(2),
      l = o(0),
      h =
        ((a = l.AbstractExplorer),
        n(c, a),
        (c.prototype.MouseOver = function (t) {
          this.Start();
        }),
        (c.prototype.MouseOut = function (t) {
          this.Stop();
        }),
        c);
    function c() {
      var t = (null !== a && a.apply(this, arguments)) || this;
      return (
        (t.events = a.prototype.Events.call(t).concat([
          ["mouseover", t.MouseOver.bind(t)],
          ["mouseout", t.MouseOut.bind(t)],
        ])),
        t
      );
    }
    e.AbstractMouseExplorer = h;
    var p,
      u =
        (n(d, (p = h)),
        (d.prototype.MouseOut = function (t) {
          (t.clientX === this.coord[0] && t.clientY === this.coord[1]) ||
            (this.highlighter.unhighlight(),
            this.region.Hide(),
            p.prototype.MouseOut.call(this, t));
        }),
        (d.prototype.MouseOver = function (t) {
          p.prototype.MouseOver.call(this, t);
          var e = t.target;
          this.coord = [t.clientX, t.clientY];
          var o = i(this.getNode(e), 2),
            r = o[0],
            n = o[1];
          r &&
            (this.highlighter.unhighlight(),
            this.highlighter.highlight([r]),
            this.region.Update(n),
            this.region.Show(r, this.highlighter));
        }),
        (d.prototype.getNode = function (t) {
          for (var e = t; t && t !== this.node; ) {
            if (this.nodeQuery(t)) return [t, this.nodeAccess(t)];
            t = t.parentNode;
          }
          for (t = e; t; ) {
            if (this.nodeQuery(t)) return [t, this.nodeAccess(t)];
            var o = t.childNodes[0];
            t = o && "defs" === o.tagName ? t.childNodes[1] : o;
          }
          return [null, null];
        }),
        d);
    function d(t, e, o, r, n) {
      var i = p.call(this, t, e, o) || this;
      return (
        (i.document = t),
        (i.region = e),
        (i.node = o),
        (i.nodeQuery = r),
        (i.nodeAccess = n),
        i
      );
    }
    e.Hoverer = u;
    var f,
      y = (n(v, (f = u)), v);
    function v() {
      return (null !== f && f.apply(this, arguments)) || this;
    }
    e.ValueHoverer = y;
    var g,
      m = (n(b, (g = u)), b);
    function b() {
      return (null !== g && g.apply(this, arguments)) || this;
    }
    e.ContentHoverer = m;
    var x,
      _ = (n(w, (x = u)), w);
    function w(t, e, o) {
      var r =
        x.call(
          this,
          t,
          new s.DummyRegion(t),
          o,
          function (t) {
            return r.highlighter.isMactionNode(t);
          },
          function (t) {}
        ) || this;
      return (r.document = t), (r.node = o), r;
    }
    e.FlameHoverer = _;
  },
  function (t, e, o) {
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
              for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            })(t, e);
        }),
        function (t, e) {
          function o() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      a = o(0),
      s =
        ((i = a.AbstractExplorer),
        n(l, i),
        (l.prototype.Attach = function () {
          i.prototype.Attach.call(this), this.Start();
        }),
        (l.prototype.Detach = function () {
          this.Stop(), i.prototype.Detach.call(this);
        }),
        l);
    function l(t, e, o, r) {
      var n = i.call(this, t, null, o) || this;
      return (
        (n.document = t),
        (n.region = e),
        (n.node = o),
        (n.mml = r),
        (n.stoppable = !1),
        n
      );
    }
    e.AbstractTreeExplorer = s;
    var h,
      c =
        (n(p, (h = s)),
        (p.prototype.Start = function () {
          this.active ||
            ((this.active = !0), this.highlighter.highlightAll(this.node));
        }),
        (p.prototype.Stop = function () {
          this.active && this.highlighter.unhighlightAll(this.node),
            (this.active = !1);
        }),
        p);
    function p() {
      return (null !== h && h.apply(this, arguments)) || this;
    }
    e.FlameColorer = c;
    var u,
      d =
        (n(f, (u = s)),
        (f.prototype.Start = function () {
          if (!this.active) {
            this.active = !0;
            var t = sre.SpeechGeneratorFactory.generator("Color");
            this.node.hasAttribute("hasforegroundcolor") ||
              (t.generateSpeech(this.node, this.mml),
              this.node.setAttribute("hasforegroundcolor", "true")),
              this.highlighter.colorizeAll(this.node);
          }
        }),
        (f.prototype.Stop = function () {
          this.active && this.highlighter.uncolorizeAll(this.node),
            (this.active = !1);
        }),
        f);
    function f() {
      return (null !== u && u.apply(this, arguments)) || this;
    }
    e.TreeColorer = d;
  },
  function (t, e, o) {
    "use strict";
    o(9);
    o(3);
    var r = o(4);
    MathJax.startup &&
      MathJax.startup.extendHandler(function (t) {
        return (0, r.ExplorerHandler)(t);
      });
  },
  function (t, e, o) {
    "use strict";
    var r = o(3),
      n = p(o(4)),
      i = p(o(0)),
      a = p(o(5)),
      s = p(o(6)),
      l = p(o(2)),
      h = p(o(7)),
      c = p(o(1));
    function p(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return (e.default = t), e;
    }
    (0, r.combineWithMathJax)({
      _: {
        a11y: {
          explorer_ts: n,
          explorer: {
            Explorer: i,
            KeyExplorer: a,
            MouseExplorer: s,
            Region: l,
            TreeExplorer: h,
          },
          sre: c,
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
      (e.EnrichedMathItemMixin =
        MathJax._.a11y["semantic-enrich"].EnrichedMathItemMixin),
      (e.EnrichedMathDocumentMixin =
        MathJax._.a11y["semantic-enrich"].EnrichedMathDocumentMixin),
      (e.EnrichHandler = MathJax._.a11y["semantic-enrich"].EnrichHandler);
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
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SerializedMmlVisitor =
        MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor);
  },
  function (t, e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MJContextMenu = MathJax._.ui.menu.MJContextMenu.MJContextMenu);
  },
  function (t, e, o) {
    "use strict";
    var h =
      (this && this.__values) ||
      function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          r = 0;
        if (o) return o.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r =
      (Object.defineProperty(n.prototype, "cssText", {
        get: function () {
          return this.getStyleString();
        },
        enumerable: !0,
        configurable: !0,
      }),
      (n.prototype.addStyles = function (t) {
        var e, o;
        if (t)
          try {
            for (
              var r = h(Object.keys(t)), n = r.next();
              !n.done;
              n = r.next()
            ) {
              var i = n.value;
              this.styles[i] || (this.styles[i] = {}),
                Object.assign(this.styles[i], t[i]);
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
      }),
      (n.prototype.removeStyles = function () {
        for (var e, t, o = [], r = 0; r < arguments.length; r++)
          o[r] = arguments[r];
        try {
          for (var n = h(o), i = n.next(); !i.done; i = n.next()) {
            var a = i.value;
            delete this.styles[a];
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (t = n.return) && t.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (n.prototype.clear = function () {
        this.styles = {};
      }),
      (n.prototype.getStyleString = function () {
        var e,
          t,
          o = Object.keys(this.styles),
          r = new Array(o.length),
          n = 0;
        try {
          for (var i = h(o), a = i.next(); !a.done; a = i.next()) {
            var s = a.value;
            r[n++] =
              s + " {\n" + this.getStyleDefString(this.styles[s]) + "\n}";
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            a && !a.done && (t = i.return) && t.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return r.join("\n\n");
      }),
      (n.prototype.getStyleDefString = function (t) {
        var e,
          o,
          r = Object.keys(t),
          n = new Array(r.length),
          i = 0;
        try {
          for (var a = h(r), s = a.next(); !s.done; s = a.next()) {
            var l = s.value;
            n[i++] = "  " + l + ": " + t[l] + ";";
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            s && !s.done && (o = a.return) && o.call(a);
          } finally {
            if (e) throw e.error;
          }
        }
        return n.join("\n");
      }),
      n);
    function n(t) {
      void 0 === t && (t = null), (this.styles = {}), this.addStyles(t);
    }
    e.CssStyles = r;
  },
]);
