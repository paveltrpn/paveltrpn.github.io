!(function (n) {
  var r = {};
  function o(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = n),
    (o.c = r),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
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
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
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
    o((o.s = 7));
})([
  function (t, e, n) {
    "use strict";
    var u =
        (this && this.__assign) ||
        function () {
          return (u =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
      r =
        (this && this.__read) ||
        function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      s =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(r(arguments[e]));
          return t;
        },
      l =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
          if (n) return n.call(t);
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
    function o(t, e, n) {
      var r, o;
      void 0 === e && (e = {}),
        void 0 === n && (n = []),
        (this.kind = t),
        (this.attributes = u({}, e)),
        (this.children = s(n));
      try {
        for (var i = l(this.children), a = i.next(); !a.done; a = i.next())
          a.value.parent = this;
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          a && !a.done && (o = i.return) && o.call(i);
        } finally {
          if (r) throw r.error;
        }
      }
      this.styles = null;
    }
    e.LiteElement = o;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(0),
      o =
        (Object.defineProperty(i.prototype, "kind", {
          get: function () {
            return "#document";
          },
          enumerable: !0,
          configurable: !0,
        }),
        i);
    function i() {
      this.root = new r.LiteElement("html", {}, [
        (this.head = new r.LiteElement("head")),
        (this.body = new r.LiteElement("body")),
      ]);
    }
    e.LiteDocument = o;
  },
  function (t, e, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
      (Object.defineProperty(a.prototype, "kind", {
        get: function () {
          return "#text";
        },
        enumerable: !0,
        configurable: !0,
      }),
      a);
    function a(t) {
      void 0 === t && (t = ""), (this.value = t);
    }
    e.LiteText = i;
    var u,
      s =
        (o(l, (u = i)),
        Object.defineProperty(l.prototype, "kind", {
          get: function () {
            return "#comment";
          },
          enumerable: !0,
          configurable: !0,
        }),
        l);
    function l() {
      return (null !== u && u.apply(this, arguments)) || this;
    }
    e.LiteComment = s;
  },
  function (t, e, n) {
    "use strict";
    var c =
        (this && this.__read) ||
        function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      s =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
          if (n) return n.call(t);
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
    var l,
      r,
      p = n(11),
      f = n(0),
      o = n(2);
    ((r = l = e.PATTERNS || (e.PATTERNS = {})).TAGNAME = "[a-z][^\\s\\n>]*"),
      (r.ATTNAME = "[a-z][^\\s\\n>=]*"),
      (r.VALUE = "(?:'[^']*'|\"[^\"]*\"|[^\\s\\n]+)"),
      (r.VALUESPLIT = "(?:'([^']*)'|\"([^\"]*)\"|([^\\s\\n]+))"),
      (r.SPACE = "(?:\\s|\\n)+"),
      (r.OPTIONALSPACE = "(?:\\s|\\n)*"),
      (r.ATTRIBUTE =
        r.ATTNAME +
        "(?:" +
        r.OPTIONALSPACE +
        "=" +
        r.OPTIONALSPACE +
        r.VALUE +
        ")?"),
      (r.ATTRIBUTESPLIT =
        "(" +
        r.ATTNAME +
        ")(?:" +
        r.OPTIONALSPACE +
        "=" +
        r.OPTIONALSPACE +
        r.VALUESPLIT +
        ")?"),
      (r.TAG =
        "(<(?:" +
        r.TAGNAME +
        "(?:" +
        r.SPACE +
        r.ATTRIBUTE +
        ")*" +
        r.OPTIONALSPACE +
        "/?|/" +
        r.TAGNAME +
        "|!--[^]*?--|![^]*?)(?:>|$))"),
      (r.tag = new RegExp(r.TAG, "i")),
      (r.attr = new RegExp(r.ATTRIBUTE, "i")),
      (r.attrsplit = new RegExp(r.ATTRIBUTESPLIT, "i"));
    var i =
      ((a.prototype.parseFromString = function (t, e, n) {
        void 0 === e && (e = "text/html"), void 0 === n && (n = null);
        for (
          var r = n.createDocument(),
            o = n.body(r),
            i = t.replace(/<\?.*?\?>/g, "").split(l.tag);
          i.length;

        ) {
          var a = i.shift(),
            u = i.shift();
          a && this.addText(n, o, a),
            u &&
              ">" === u.charAt(u.length - 1) &&
              ("!" === u.charAt(1)
                ? this.addComment(n, o, u)
                : (o =
                    "/" === u.charAt(1)
                      ? this.closeTag(n, o, u)
                      : this.openTag(n, o, u, i)));
        }
        return this.checkDocument(n, r), r;
      }),
      (a.prototype.addText = function (t, e, n) {
        return (n = p.translate(n)), t.append(e, t.text(n));
      }),
      (a.prototype.addComment = function (t, e, n) {
        return t.append(e, new o.LiteComment(n));
      }),
      (a.prototype.closeTag = function (t, e, n) {
        for (
          var r = n.slice(2, n.length - 1).toLowerCase();
          t.parent(e) && t.kind(e) !== r;

        )
          e = t.parent(e);
        return t.parent(e);
      }),
      (a.prototype.openTag = function (t, e, n, r) {
        var o = this.constructor.PCDATA,
          i = this.constructor.SELF_CLOSING,
          a = n.match(/<(.*?)[\s\n>]/)[1].toLowerCase(),
          u = t.node(a),
          s = n.replace(/^<.*?[\s\n>]/, "").split(l.attrsplit);
        return (
          (s.pop().match(/>$/) || s.length < 5) &&
            (this.addAttributes(t, u, s),
            t.append(e, u),
            i[a] || (o[a] ? this.handlePCDATA(t, u, a, r) : (e = u))),
          e
        );
      }),
      (a.prototype.addAttributes = function (t, e, n) {
        for (var r = this.constructor.CDATA_ATTR; n.length; ) {
          var o = c(n.splice(0, 5), 5),
            i = (o[0], o[1]),
            a = o[2],
            u = o[3],
            s = o[4],
            l = a || u || s || "";
          r[i] || (l = p.translate(l)), t.setAttribute(e, i, l);
        }
      }),
      (a.prototype.handlePCDATA = function (t, e, n, r) {
        for (var o = [], i = "</" + n + ">", a = ""; r.length && a !== i; )
          o.push(a), o.push(r.shift()), (a = r.shift());
        t.append(e, t.text(o.join("")));
      }),
      (a.prototype.checkDocument = function (t, e) {
        var n,
          r,
          o = this.getOnlyChild(t, t.body(e));
        if (o)
          switch (t.kind(o)) {
            case "html":
              try {
                for (
                  var i = s(o.children), a = i.next();
                  !a.done;
                  a = i.next()
                ) {
                  var u = a.value;
                  switch (t.kind(u)) {
                    case "head":
                      e.head = u;
                      break;
                    case "body":
                      e.body = u;
                  }
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  a && !a.done && (r = i.return) && r.call(i);
                } finally {
                  if (n) throw n.error;
                }
              }
              (e.root = o),
                t.remove(o),
                t.parent(e.body) !== o && t.append(o, e.body),
                t.parent(e.head) !== o && t.insert(e.head, e.body);
              break;
            case "head":
              e.head = t.replace(o, e.head);
              break;
            case "body":
              e.body = t.replace(o, e.body);
          }
      }),
      (a.prototype.getOnlyChild = function (t, e) {
        var n,
          r,
          o = null;
        try {
          for (
            var i = s(t.childNodes(e)), a = i.next();
            !a.done;
            a = i.next()
          ) {
            var u = a.value;
            if (u instanceof f.LiteElement) {
              if (o) return null;
              o = u;
            }
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            a && !a.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }),
      (a.prototype.serialize = function (t, e) {
        var n = this,
          r = this.constructor.SELF_CLOSING,
          o = this.constructor.CDATA_ATTR,
          i = t.kind(e),
          a = t
            .allAttributes(e)
            .map(function (t) {
              return (
                t.name +
                '="' +
                (o[t.name] ? t.value : n.protectAttribute(t.value)) +
                '"'
              );
            })
            .join(" ");
        return (
          "<" +
          i +
          (a ? " " + a : "") +
          ">" +
          (r[i] ? "" : t.innerHTML(e) + "</" + i + ">")
        );
      }),
      (a.prototype.serializeInner = function (n, t) {
        var r = this;
        return this.constructor.PCDATA.hasOwnProperty(t.kind)
          ? n
              .childNodes(t)
              .map(function (t) {
                return n.value(t);
              })
              .join("")
          : n
              .childNodes(t)
              .map(function (t) {
                var e = n.kind(t);
                return "#text" === e
                  ? r.protectHTML(n.value(t))
                  : "#comment" === e
                  ? n.value(t)
                  : r.serialize(n, t);
              })
              .join("");
      }),
      (a.prototype.protectAttribute = function (t) {
        return (
          "string" != typeof t && (t = String(t)), t.replace(/"/g, "&quot;")
        );
      }),
      (a.prototype.protectHTML = function (t) {
        return t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }),
      (a.SELF_CLOSING = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        menuitem: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }),
      (a.PCDATA = {
        option: !0,
        textarea: !0,
        fieldset: !0,
        title: !0,
        style: !0,
        script: !0,
      }),
      (a.CDATA_ATTR = {
        style: !0,
        datafld: !0,
        datasrc: !0,
        href: !0,
        src: !0,
        longdesc: !0,
        usemap: !0,
        cite: !0,
        datetime: !0,
        action: !0,
        axis: !0,
        profile: !0,
        content: !0,
        scheme: !0,
      }),
      a);
    function a() {}
    e.LiteParser = i;
  },
  function (t, e, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      i =
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
      c =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
          if (n) return n.call(t);
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
      a =
        (this && this.__read) ||
        function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      u =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(a(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      l = n(10),
      p = n(1),
      f = n(0),
      d = n(2),
      h = n(5),
      y = n(3),
      v = n(12),
      b = n(13),
      m =
        ((s = l.AbstractDOMAdaptor),
        o(_, s),
        (_.prototype.parse = function (t, e) {
          return this.parser.parseFromString(t, e, this);
        }),
        (_.prototype.create = function (t, e) {
          return void 0 === e && (e = null), new f.LiteElement(t);
        }),
        (_.prototype.text = function (t) {
          return new d.LiteText(t);
        }),
        (_.prototype.comment = function (t) {
          return new d.LiteComment(t);
        }),
        (_.prototype.createDocument = function () {
          return new p.LiteDocument();
        }),
        (_.prototype.head = function (t) {
          return t.head;
        }),
        (_.prototype.body = function (t) {
          return t.body;
        }),
        (_.prototype.root = function (t) {
          return t.root;
        }),
        (_.prototype.tags = function (t, e, n) {
          void 0 === n && (n = null);
          var r = [],
            o = [];
          if (n) return o;
          for (var i = t; i; ) {
            var a = i.kind;
            "#text" !== a &&
              "#comment" !== a &&
              ((i = i),
              a === e && o.push(i),
              i.children.length && (r = i.children.concat(r))),
              (i = r.shift());
          }
          return o;
        }),
        (_.prototype.elementById = function (t, e) {
          for (var n = [], r = t; r; ) {
            if ("#text" !== r.kind && "#comment" !== r.kind) {
              if ((r = r).attributes.id === e) return r;
              r.children.length && (n = r.children.concat(n));
            }
            r = n.shift();
          }
          return null;
        }),
        (_.prototype.elementsByClass = function (t, e) {
          for (var n = [], r = t; r; )
            "#text" !== r.kind &&
              "#comment" !== r.kind &&
              (((r = r).attributes.class || "").split(/ /).find(e),
              r.children.length && (n = r.children.concat(n))),
              (r = n.shift());
          return [];
        }),
        (_.prototype.getElements = function (t, e) {
          var n,
            r,
            o = [],
            i = this.body(this.document);
          try {
            for (var a = c(t), u = a.next(); !u.done; u = a.next()) {
              var s = u.value;
              if ("string" == typeof s)
                if ("#" === s.charAt(0)) {
                  var l = this.elementById(i, s.slice(1));
                  l && o.push(l);
                } else
                  "." === s.charAt(0)
                    ? (o = o.concat(this.elementsByClass(i, s.slice(1))))
                    : s.match(/^[-a-z][-a-z0-9]*$/i) &&
                      (o = o.concat(this.tags(i, s)));
              else
                Array.isArray(s)
                  ? (o = o.concat(s))
                  : s instanceof this.window.NodeList ||
                    s instanceof this.window.HTMLCollection
                  ? (o = o.concat(s.nodes))
                  : o.push(s);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              u && !u.done && (r = a.return) && r.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        }),
        (_.prototype.parent = function (t) {
          return t.parent;
        }),
        (_.prototype.childIndex = function (e) {
          return e.parent
            ? e.parent.children.findIndex(function (t) {
                return t === e;
              })
            : -1;
        }),
        (_.prototype.append = function (t, e) {
          return (
            e.parent && this.remove(e), t.children.push(e), (e.parent = t), e
          );
        }),
        (_.prototype.insert = function (t, e) {
          if ((t.parent && this.remove(t), e && e.parent)) {
            var n = this.childIndex(e);
            e.parent.children.splice(n, 0, t), (t.parent = e.parent);
          }
        }),
        (_.prototype.remove = function (t) {
          var e = this.childIndex(t);
          return 0 <= e && t.parent.children.splice(e, 1), (t.parent = null), t;
        }),
        (_.prototype.replace = function (t, e) {
          var n = this.childIndex(e);
          return 0 <= n && (e.parent.children[n] = t), e;
        }),
        (_.prototype.clone = function (t) {
          var n = this,
            r = new f.LiteElement(t.kind);
          return (
            (r.attributes = i({}, t.attributes)),
            (r.children = t.children.map(function (t) {
              if ("#text" === t.kind) return new d.LiteText(t.value);
              if ("#comment" === t.kind) return new d.LiteComment(t.value);
              var e = n.clone(t);
              return (e.parent = r), e;
            })),
            r
          );
        }),
        (_.prototype.split = function (t, e) {
          var n = new d.LiteText(t.value.slice(e));
          return (
            (t.value = t.value.slice(0, e)),
            t.parent.children.splice(this.childIndex(t) + 1, 0, n),
            (n.parent = t.parent),
            n
          );
        }),
        (_.prototype.next = function (t) {
          var e = t.parent;
          if (e) {
            var n = this.childIndex(t) + 1;
            return 0 <= n && n < e.children.length ? e.children[n] : null;
          }
        }),
        (_.prototype.previous = function (t) {
          var e = t.parent;
          if (e) {
            var n = this.childIndex(t) - 1;
            return 0 <= n ? e.children[n] : null;
          }
        }),
        (_.prototype.firstChild = function (t) {
          return t.children[0];
        }),
        (_.prototype.lastChild = function (t) {
          return t.children[t.children.length - 1];
        }),
        (_.prototype.childNodes = function (t) {
          return u(t.children);
        }),
        (_.prototype.childNode = function (t, e) {
          return t.children[e];
        }),
        (_.prototype.kind = function (t) {
          return t.kind;
        }),
        (_.prototype.value = function (t) {
          return "#text" === t.kind ? t.value : "";
        }),
        (_.prototype.textContent = function (t) {
          var n = this;
          return t.children.reduce(function (t, e) {
            return (
              t +
              ("#text" === e.kind
                ? e.value
                : "#comment" === e.kind
                ? ""
                : n.textContent(e))
            );
          }, "");
        }),
        (_.prototype.innerHTML = function (t) {
          return this.parser.serializeInner(this, t);
        }),
        (_.prototype.outerHTML = function (t) {
          return this.parser.serialize(this, t);
        }),
        (_.prototype.setAttribute = function (t, e, n, r) {
          void 0 === r && (r = null),
            "string" != typeof n && (n = String(n)),
            r && (e = r.replace(/.*\//, "") + ":" + e),
            (t.attributes[e] = n),
            "style" === e && (t.styles = null);
        }),
        (_.prototype.getAttribute = function (t, e) {
          return t.attributes[e];
        }),
        (_.prototype.removeAttribute = function (t, e) {
          delete t.attributes[e];
        }),
        (_.prototype.hasAttribute = function (t, e) {
          return t.attributes.hasOwnProperty(e);
        }),
        (_.prototype.allAttributes = function (t) {
          var e,
            n,
            r = t.attributes,
            o = [];
          try {
            for (
              var i = c(Object.keys(r)), a = i.next();
              !a.done;
              a = i.next()
            ) {
              var u = a.value;
              o.push({ name: u, value: r[u] });
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (n = i.return) && n.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return o;
        }),
        (_.prototype.addClass = function (t, e) {
          var n = (t.attributes.class || "").split(/ /);
          n.find(function (t) {
            return t === e;
          }) || (n.push(e), (t.attributes.class = n.join(" ")));
        }),
        (_.prototype.removeClass = function (t, e) {
          var n = (t.attributes.class || "").split(/ /),
            r = n.findIndex(function (t) {
              return t === e;
            });
          0 <= r && (n.splice(r, 1), (t.attributes.class = n.join(" ")));
        }),
        (_.prototype.hasClass = function (t, e) {
          return !!(t.attributes.class || "").split(/ /).find(function (t) {
            return t === e;
          });
        }),
        (_.prototype.setStyle = function (t, e, n) {
          t.styles || (t.styles = new v.Styles(this.getAttribute(t, "style"))),
            t.styles.set(e, n),
            (t.attributes.style = t.styles.cssText);
        }),
        (_.prototype.getStyle = function (t, e) {
          if (!t.styles) {
            var n = this.getAttribute(t, "style");
            if (!n) return "";
            t.styles = new v.Styles(n);
          }
          return t.styles.get(e);
        }),
        (_.prototype.allStyles = function (t) {
          return this.getAttribute(t, "style");
        }),
        (_.prototype.fontSize = function (t) {
          return this.options.fontSize;
        }),
        (_.prototype.nodeSize = function (t, e, n) {
          return (
            void 0 === e && (e = 1),
            void 0 === n && (n = null),
            [0.6 * this.textContent(t).length, 0]
          );
        }),
        (_.prototype.nodeBBox = function (t) {
          return { left: 0, right: 0, top: 0, bottom: 0 };
        }),
        (_.OPTIONS = { fontSize: 16 }),
        _);
    function _(t) {
      void 0 === t && (t = null);
      var e = s.call(this) || this,
        n = e.constructor;
      return (
        (e.options = b.userOptions(b.defaultOptions({}, n.OPTIONS), t)),
        (e.parser = new y.LiteParser()),
        (e.window = new h.LiteWindow()),
        e
      );
    }
    (e.LiteAdaptor = m),
      (e.liteAdaptor = function (t) {
        return void 0 === t && (t = null), new m(t);
      });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    function r() {
      (this.DOMParser = u.LiteParser),
        (this.NodeList = a.LiteList),
        (this.HTMLCollection = a.LiteList),
        (this.HTMLElement = o.LiteElement),
        (this.DocumentFragment = a.LiteList),
        (this.Document = i.LiteDocument),
        (this.document = new i.LiteDocument());
    }
    var o = n(0),
      i = n(1),
      a = n(6),
      u = n(3);
    e.LiteWindow = r;
  },
  function (t, e, n) {
    "use strict";
    var r =
        (this && this.__read) ||
        function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var r,
            o,
            i = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
              a.push(r.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      o =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(r(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
      ((a.prototype.append = function (t) {
        this.nodes.push(t);
      }),
      (a.prototype[Symbol.iterator] = function () {
        var t = 0;
        return {
          next: function () {
            return t === this.nodes.length
              ? { value: null, done: !0 }
              : { value: this.nodes[t++], done: !1 };
          },
        };
      }),
      a);
    function a(t) {
      (this.nodes = []), (this.nodes = o(t));
    }
    e.LiteList = i;
  },
  function (t, e, n) {
    "use strict";
    n(8);
    var r = n(4);
    MathJax.startup &&
      (MathJax.startup.registerConstructor("liteAdaptor", r.liteAdaptor),
      MathJax.startup.useAdaptor("liteAdaptor", !0));
  },
  function (t, e, n) {
    "use strict";
    var r = n(9),
      o = p(n(4)),
      i = p(n(1)),
      a = p(n(0)),
      u = p(n(6)),
      s = p(n(3)),
      l = p(n(2)),
      c = p(n(5));
    function p(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return (e.default = t), e;
    }
    (0, r.combineWithMathJax)({
      _: {
        adaptors: {
          liteAdaptor: o,
          lite: {
            Document: i,
            Element: a,
            List: u,
            Parser: s,
            Text: l,
            Window: c,
          },
        },
      },
    });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.combineConfig = MathJax._.components.global.combineConfig),
      (e.combineDefaults = MathJax._.components.global.combineDefaults),
      (e.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (e.MathJax = MathJax._.components.global.MathJax);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractDOMAdaptor = MathJax._.core.DOMAdaptor.AbstractDOMAdaptor);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.options = MathJax._.util.Entities.options),
      (e.entities = MathJax._.util.Entities.entities),
      (e.add = MathJax._.util.Entities.add),
      (e.remove = MathJax._.util.Entities.remove),
      (e.translate = MathJax._.util.Entities.translate),
      (e.numeric = MathJax._.util.Entities.numeric);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Styles = MathJax._.util.Styles.Styles);
  },
  function (t, e, n) {
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
]);
