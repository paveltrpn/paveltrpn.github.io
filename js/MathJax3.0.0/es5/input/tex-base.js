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
    a((a.s = 26));
})([
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
      n =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        },
      a =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      o,
      l,
      s = r(3),
      c = r(33);
    function p(t, e) {
      var r, n;
      try {
        for (var a = u(Object.keys(e)), i = a.next(); !i.done; i = a.next()) {
          var o = i.value,
            s = e[o];
          "texClass" === o
            ? ((t.texClass = s), t.setProperty(o, s))
            : "movablelimits" === o
            ? (t.setProperty("movablelimits", s),
              (t.isKind("mo") || t.isKind("mstyle")) &&
                t.attributes.set("movablelimits", s))
            : "inferred" === o ||
              (l.has(o) ? t.setProperty(o, s) : t.attributes.set(o, s));
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          i && !i.done && (n = a.return) && n.call(a);
        } finally {
          if (r) throw r.error;
        }
      }
    }
    function f(t, e, r) {
      (t.childNodes[e] = r) && (r.parent = t);
    }
    function h(t, e) {
      return t.isKind(e);
    }
    (o = i = i || {}),
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
      (o.createEntity = function (t) {
        return String.fromCharCode(parseInt(t, 16));
      }),
      (o.getChildren = function (t) {
        return t.childNodes;
      }),
      (o.getText = function (t) {
        return t.getText();
      }),
      (o.appendChildren = function (t, e) {
        var r, n;
        try {
          for (var a = u(e), i = a.next(); !i.done; i = a.next()) {
            var o = i.value;
            t.appendChild(o);
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            i && !i.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
      }),
      (o.setAttribute = function (t, e, r) {
        t.attributes.set(e, r);
      }),
      (o.setProperty = function (t, e, r) {
        t.setProperty(e, r);
      }),
      (o.setProperties = p),
      (o.getProperty = function (t, e) {
        return t.getProperty(e);
      }),
      (o.getAttribute = function (t, e) {
        return t.attributes.get(e);
      }),
      (o.removeProperties = function (t) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        t.removeProperty.apply(t, a(e));
      }),
      (o.getChildAt = function (t, e) {
        return t.childNodes[e];
      }),
      (o.setChild = f),
      (o.copyChildren = function (t, e) {
        for (var r = t.childNodes, n = 0; n < r.length; n++) f(e, n, r[n]);
      }),
      (o.copyAttributes = function (t, e) {
        (e.attributes = t.attributes), p(e, t.getAllProperties());
      }),
      (o.isType = h),
      (o.isEmbellished = function (t) {
        return t.isEmbellished;
      }),
      (o.getTexClass = function (t) {
        return t.texClass;
      }),
      (o.getCoreMO = function (t) {
        return t.coreMO();
      }),
      (o.isNode = function (t) {
        return (
          t instanceof s.AbstractMmlNode || t instanceof s.AbstractMmlEmptyNode
        );
      }),
      (o.isInferred = function (t) {
        return t.isInferred;
      }),
      (o.getForm = function (t) {
        var e, r;
        if (!h(t, "mo")) return null;
        var n = t,
          a = n.getForms();
        try {
          for (var i = u(a), o = i.next(); !o.done; o = i.next()) {
            var s = o.value,
              l = c.MmlMo.OPTABLE[s][n.getText()];
            if (l) return l;
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (r = i.return) && r.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return null;
      }),
      (e.default = i);
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n =
      ((o.processString = function (t, e) {
        for (var r = t.split(o.pattern), n = 1, a = r.length; n < a; n += 2) {
          var i = r[n].charAt(0);
          "0" <= i && i <= "9"
            ? ((r[n] = e[parseInt(r[n], 10) - 1]),
              "number" == typeof r[n] && (r[n] = r[n].toString()))
            : "{" === i &&
              ("0" <= (i = r[n].substr(1)) && i <= "9"
                ? ((r[n] =
                    e[parseInt(r[n].substr(1, r[n].length - 2), 10) - 1]),
                  "number" == typeof r[n] && (r[n] = r[n].toString()))
                : r[n].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/) &&
                  (r[n] = "%" + r[n])),
            null == r[n] && (r[n] = "???");
        }
        return r.join("");
      }),
      (o.pattern =
        /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g),
      o);
    function o(t, e) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      (this.id = t), (this.message = o.processString(e, r));
    }
    e.default = n;
  },
  function (t, e, r) {
    "use strict";
    var n,
      a,
      i,
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
      c =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (a = n = e.MapHandler || (e.MapHandler = {})),
      (i = new Map()),
      (a.register = function (t) {
        i.set(t.name, t);
      }),
      (a.getMap = function (t) {
        return i.get(t);
      }),
      (e.ExtensionMaps = {
        NEW_MACRO: "new-Macro",
        NEW_DELIMITER: "new-Delimiter",
        NEW_COMMAND: "new-Command",
        NEW_ENVIRONMENT: "new-Environment",
      });
    var s =
      ((o.prototype.add = function (t) {
        var e = n.getMap(t);
        e
          ? this._configuration.push(e)
          : this.warn("Configuration " + t + " not found! Omitted.");
      }),
      (o.prototype.parse = function (t) {
        var e, r;
        try {
          for (
            var n = u(this._configuration), a = n.next();
            !a.done;
            a = n.next()
          ) {
            var i = a.value.parse(t);
            if (i) return i;
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
        var o = c(t, 2),
          s = o[0],
          l = o[1];
        this._fallback(s, l);
      }),
      (o.prototype.lookup = function (t) {
        var e = this.applicable(t);
        return e ? e.lookup(t) : null;
      }),
      (o.prototype.contains = function (t) {
        return !!this.applicable(t);
      }),
      (o.prototype.toString = function () {
        return this._configuration
          .map(function (t) {
            return t.name;
          })
          .join(", ");
      }),
      (o.prototype.applicable = function (t) {
        var e, r;
        try {
          for (
            var n = u(this._configuration), a = n.next();
            !a.done;
            a = n.next()
          ) {
            var i = a.value;
            if (i.contains(t)) return i;
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
      (o.prototype.retrieve = function (e) {
        return this._configuration.find(function (t) {
          return t.name === e;
        });
      }),
      (o.prototype.warn = function (t) {
        console.log("TexParser Warning: " + t);
      }),
      o);
    function o(t, e) {
      var r, n;
      (this._fallback = e), (this._configuration = []);
      try {
        for (var a = u(t), i = a.next(); !i.done; i = a.next()) {
          var o = i.value;
          this.add(o);
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          i && !i.done && (n = a.return) && n.call(a);
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
            var n = u(this.map.values()), a = n.next();
            !a.done;
            a = n.next()
          ) {
            var i = a.value.retrieve(t);
            if (i) return i;
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
          var n = u(Object.keys(t.handler)), a = n.next();
          !a.done;
          a = n.next()
        ) {
          var i = a.value,
            o = new s(t.handler[i] || [], t.fallback[i]);
          this.set(i, o);
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
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        },
      a =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(s(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var l = r(6),
      f = r(19),
      u = r(1),
      n =
        (Object.defineProperty(i.prototype, "options", {
          get: function () {
            return this.configuration.options;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, "itemFactory", {
          get: function () {
            return this.configuration.itemFactory;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, "tags", {
          get: function () {
            return this.configuration.tags;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, "string", {
          get: function () {
            return this._string;
          },
          set: function (t) {
            this._string = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (i.prototype.parse = function (t, e) {
          return this.configuration.handlers.get(t).parse(e);
        }),
        (i.prototype.lookup = function (t, e) {
          return this.configuration.handlers.get(t).lookup(e);
        }),
        (i.prototype.contains = function (t, e) {
          return this.configuration.handlers.get(t).contains(e);
        }),
        (i.prototype.toString = function () {
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
              var i = a.value;
              r += i + ": " + this.configuration.handlers.get(i) + "\n";
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
        (i.prototype.Parse = function () {
          for (var t, e; this.i < this.string.length; )
            55296 <= (e = (t = this.string.charAt(this.i++)).charCodeAt(0)) &&
              e < 56320 &&
              (t += this.string.charAt(this.i++)),
              this.parse("character", [this, t]);
        }),
        (i.prototype.Push = function (t) {
          this.stack.Push(t);
        }),
        (i.prototype.PushAll = function (t) {
          var e, r;
          try {
            for (var n = p(t), a = n.next(); !a.done; a = n.next()) {
              var i = a.value;
              this.stack.Push(i);
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
        (i.prototype.mml = function () {
          if (!this.stack.Top().isKind("mml")) return null;
          var t = this.stack.Top().First;
          return this.configuration.popParser(), t;
        }),
        (i.prototype.convertDelimiter = function (t) {
          var e = this.lookup("delimiter", t);
          return e ? e.char : null;
        }),
        (i.prototype.nextIsSpace = function () {
          return this.string.charAt(this.i).match(/\s/);
        }),
        (i.prototype.GetNext = function () {
          for (; this.nextIsSpace(); ) this.i++;
          return this.string.charAt(this.i);
        }),
        (i.prototype.GetCS = function () {
          var t = this.string.slice(this.i).match(/^([a-z]+|.) ?/i);
          return t ? ((this.i += t[1].length), t[1]) : (this.i++, " ");
        }),
        (i.prototype.GetArgument = function (t, e) {
          switch (this.GetNext()) {
            case "":
              if (!e)
                throw new u.default(
                  "MissingArgFor",
                  "Missing argument for %1",
                  this.currentCS
                );
              return null;
            case "}":
              if (!e)
                throw new u.default(
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
              throw new u.default("MissingCloseBrace", "Missing close brace");
          }
          return this.string.charAt(this.i++);
        }),
        (i.prototype.GetBrackets = function (t, e) {
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
                  throw new u.default(
                    "ExtraCloseLooking",
                    "Extra close brace while looking for %1",
                    "']'"
                  );
                break;
              case "]":
                if (0 === n) return this.string.slice(r, this.i - 1);
            }
          throw new u.default(
            "MissingCloseBracket",
            "Could not find closing ']' for argument to %1",
            this.currentCS
          );
        }),
        (i.prototype.GetDelimiter = function (t, e) {
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
          throw new u.default(
            "MissingOrUnrecognizedDelim",
            "Missing or unrecognized delimiter for %1",
            this.currentCS
          );
        }),
        (i.prototype.GetDimen = function (t) {
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
            var i = s(l.default.matchDimen(e, !0), 3),
              o = ((n = i[0]), (a = i[1]), i[2]);
            if (n) return (this.i += o), n + a;
          }
          throw new u.default(
            "MissingDimOrUnits",
            "Missing dimension or its units for %1",
            this.currentCS
          );
        }),
        (i.prototype.GetUpTo = function (t, e) {
          for (; this.nextIsSpace(); ) this.i++;
          for (var r = this.i, n = 0; this.i < this.string.length; ) {
            var a = this.i,
              i = this.string.charAt(this.i++);
            switch (i) {
              case "\\":
                i += this.GetCS();
                break;
              case "{":
                n++;
                break;
              case "}":
                if (0 === n)
                  throw new u.default(
                    "ExtraCloseLooking",
                    "Extra close brace while looking for %1",
                    e
                  );
                n--;
            }
            if (0 === n && i === e) return this.string.slice(r, a);
          }
          throw new u.default(
            "TokenNotFoundForCommand",
            "Could not find %1 for %2",
            e,
            this.currentCS
          );
        }),
        (i.prototype.ParseArg = function (t) {
          return new i(
            this.GetArgument(t),
            this.stack.env,
            this.configuration
          ).mml();
        }),
        (i.prototype.ParseUpTo = function (t, e) {
          return new i(
            this.GetUpTo(t, e),
            this.stack.env,
            this.configuration
          ).mml();
        }),
        (i.prototype.GetDelimiterArg = function (t) {
          var e = l.default.trimSpaces(this.GetArgument(t));
          if ("" === e) return null;
          if (this.contains("delimiter", e)) return e;
          throw new u.default(
            "MissingOrUnrecognizedDelim",
            "Missing or unrecognized delimiter for %1",
            this.currentCS
          );
        }),
        (i.prototype.GetStar = function () {
          var t = "*" === this.GetNext();
          return t && this.i++, t;
        }),
        (i.prototype.create = function (t) {
          for (var e, r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n];
          return (e = this.configuration.nodeFactory).create.apply(
            e,
            a([t], r)
          );
        }),
        i);
    function i(t, e, r) {
      var n, a;
      (this._string = t),
        (this.configuration = r),
        (this.macroCount = 0),
        (this.i = 0),
        (this.currentCS = "");
      var i,
        o = e.hasOwnProperty("isInner"),
        s = e.isInner;
      if ((delete e.isInner, e)) {
        i = {};
        try {
          for (var l = p(Object.keys(e)), u = l.next(); !u.done; u = l.next()) {
            var c = u.value;
            i[c] = e[c];
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            u && !u.done && (a = l.return) && a.call(l);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      this.configuration.pushParser(this),
        (this.stack = new f.default(this.itemFactory, i, !o || s)),
        this.Parse(),
        this.Push(this.itemFactory.create("stop"));
    }
    e.default = n;
  },
  function (t, e, r) {
    "use strict";
    var u =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
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
    var n,
      a,
      o,
      i,
      s,
      l,
      p,
      f = r(3),
      h = r(0),
      d = r(5),
      m = r(1),
      y = r(4);
    function g(t, e) {
      void 0 === e && (e = !1);
      var r = t.match(e ? p : l);
      return r ? [r[1].replace(/,/, "."), r[4], r[0].length] : [null, null, 0];
    }
    function v(t, e, r) {
      ("{" !== e && "}" !== e) || (e = "\\" + e);
      var n = "{\\bigg" + r + " " + e + "}",
        a = "{\\big" + r + " " + e + "}";
      return new d.default("\\mathchoice" + n + a + a + a, {}, t).mml();
    }
    function b(t, e, r) {
      e = e.replace(/^\s+/, y.entities.nbsp).replace(/\s+$/, y.entities.nbsp);
      var n = t.create("text", e);
      return t.create("node", "mtext", [], r, n);
    }
    function T(t, e, r) {
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
    function S(t, e) {
      for (; 0 < e; ) (t = t.trim().slice(1, -1)), e--;
      return t.trim();
    }
    function P(t, e) {
      for (
        var r = t.length, n = 0, a = "", i = 0, o = 0, s = !0, l = !1;
        i < r;

      ) {
        var u = t[i++];
        switch (u) {
          case " ":
            break;
          case "{":
            s ? o++ : ((l = !1), n < o && (o = n)), n++;
            break;
          case "}":
            n && n--, (s || l) && (o--, (l = !0)), (s = !1);
            break;
          default:
            if (!n && -1 !== e.indexOf(u))
              return [l ? "true" : S(a, o), u, t.slice(i)];
            l = s = !1;
        }
        a += u;
      }
      if (n)
        throw new m.default(
          "ExtraOpenMissingClose",
          "Extra open brace or missing close brace"
        );
      return [l ? "true" : S(a, o), "", t.slice(i)];
    }
    r(18),
      (a = n = n || {}),
      (o = {
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
      (i = "([-+]?([.,]\\d+|\\d+([.,]\\d*)?))"),
      (s = "(pt|em|ex|mu|px|mm|cm|in|pc)"),
      (l = RegExp("^\\s*" + i + "\\s*" + s + "\\s*$")),
      (p = RegExp("^\\s*" + i + "\\s*" + s + " ?")),
      (a.matchDimen = g),
      (a.dimen2em = function (t) {
        var e = u(g(t), 3),
          r = e[0],
          n = e[1],
          a = (e[2], parseFloat(r || "1")),
          i = o[n];
        return i ? i(a) : 0;
      }),
      (a.Em = function (t) {
        return Math.abs(t) < 6e-4
          ? "0em"
          : t.toFixed(3).replace(/\.?0+$/, "") + "em";
      }),
      (a.fenced = function (t, e, r, n, a) {
        void 0 === a && (a = "");
        var i,
          o = t.nodeFactory,
          s = o.create("node", "mrow", [], {
            open: e,
            close: n,
            texClass: f.TEXCLASS.INNER,
          });
        if (a)
          i = new d.default("\\" + a + "l" + e, t.parser.stack.env, t).mml();
        else {
          var l = o.create("text", e);
          i = o.create(
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
          (h.default.appendChildren(s, [i]),
          h.default.isType(r, "mrow") && h.default.isInferred(r)
            ? h.default.appendChildren(s, h.default.getChildren(r))
            : h.default.appendChildren(s, [r]),
          a)
        )
          i = new d.default("\\" + a + "r" + n, t.parser.stack.env, t).mml();
        else {
          var u = o.create("text", n);
          i = o.create(
            "node",
            "mo",
            [],
            {
              fence: !0,
              stretchy: !0,
              symmetric: !0,
              texClass: f.TEXCLASS.CLOSE,
            },
            u
          );
        }
        return h.default.appendChildren(s, [i]), s;
      }),
      (a.fixedFence = function (t, e, r, n) {
        var a = t.nodeFactory.create("node", "mrow", [], {
          open: e,
          close: n,
          texClass: f.TEXCLASS.ORD,
        });
        return (
          e && h.default.appendChildren(a, [v(t, e, "l")]),
          h.default.isType(r, "mrow")
            ? h.default.appendChildren(a, h.default.getChildren(r))
            : h.default.appendChildren(a, [r]),
          n && h.default.appendChildren(a, [v(t, n, "r")]),
          a
        );
      }),
      (a.mathPalette = v),
      (a.fixInitialMO = function (t, e) {
        for (var r = 0, n = e.length; r < n; r++) {
          var a = e[r];
          if (
            a &&
            !h.default.isType(a, "mspace") &&
            (!h.default.isType(a, "TeXAtom") ||
              (h.default.getChildren(a)[0] &&
                h.default.getChildren(h.default.getChildren(a)[0]).length))
          ) {
            if (h.default.isEmbellished(a)) {
              var i = t.nodeFactory.create("node", "mi");
              e.unshift(i);
            }
            break;
          }
        }
      }),
      (a.mi2mo = function (t, e) {
        var r = t.create("node", "mo");
        return (
          h.default.copyChildren(e, r),
          h.default.copyAttributes(e, r),
          h.default.setProperties(r, { lspace: "0", rspace: "0" }),
          h.default.removeProperties(r, "movesupsub"),
          r
        );
      }),
      (a.internalMath = function (t, e, r) {
        var n,
          a,
          i = t.stack.env.font ? { mathvariant: t.stack.env.font } : {},
          o = [],
          s = 0,
          l = 0,
          u = "",
          c = 0;
        if (e.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
          for (; s < e.length; )
            if ("$" === (n = e.charAt(s++)))
              "$" === u && 0 === c
                ? ((a = t.create("node", "TeXAtom", [
                    new d.default(e.slice(l, s - 1), {}, t.configuration).mml(),
                  ])),
                  o.push(a),
                  (u = ""),
                  (l = s))
                : "" === u &&
                  (l < s - 1 && o.push(b(t, e.slice(l, s - 1), i)),
                  (u = "$"),
                  (l = s));
            else if ("{" === n && "" !== u) c++;
            else if ("}" === n)
              if ("}" === u && 0 === c) {
                var p = new d.default(e.slice(l, s), {}, t.configuration).mml();
                (a = t.create("node", "TeXAtom", [p], i)),
                  o.push(a),
                  (u = ""),
                  (l = s);
              } else "" !== u && c && c--;
            else if ("\\" === n)
              if ("" === u && e.substr(s).match(/^(eq)?ref\s*\{/)) {
                var f = RegExp["$&"].length;
                l < s - 1 && o.push(b(t, e.slice(l, s - 1), i)),
                  (u = "}"),
                  (l = s - 1),
                  (s += f);
              } else
                "(" === (n = e.charAt(s++)) && "" === u
                  ? (l < s - 2 && o.push(b(t, e.slice(l, s - 2), i)),
                    (u = ")"),
                    (l = s))
                  : ")" === n && ")" === u && 0 === c
                  ? ((a = t.create("node", "TeXAtom", [
                      new d.default(
                        e.slice(l, s - 2),
                        {},
                        t.configuration
                      ).mml(),
                    ])),
                    o.push(a),
                    (u = ""),
                    (l = s))
                  : n.match(/[${}\\]/) &&
                    "" === u &&
                    (s--, (e = e.substr(0, s - 1) + e.substr(s)));
          if ("" !== u)
            throw new m.default(
              "MathNotTerminated",
              "Math not terminated in text box"
            );
        }
        return (
          l < e.length && o.push(b(t, e.slice(l), i)),
          null != r
            ? (o = [
                t.create("node", "mstyle", o, {
                  displaystyle: !1,
                  scriptlevel: r,
                }),
              ])
            : 1 < o.length && (o = [t.create("node", "mrow", o)]),
          o
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
        for (var n = "", a = "", i = 0; i < r.length; ) {
          var o = r.charAt(i++);
          if ("\\" === o) n += o + r.charAt(i++);
          else if ("#" === o)
            if ("#" === (o = r.charAt(i++))) n += o;
            else {
              if (!o.match(/[1-9]/) || parseInt(o, 10) > e.length)
                throw new m.default(
                  "IllegalMacroParam",
                  "Illegal macro parameter reference"
                );
              (a = T(t, T(t, a, n), e[parseInt(o, 10) - 1])), (n = "");
            }
          else n += o;
        }
        return T(t, a, n);
      }),
      (a.addArgs = T),
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
        var i = (function (t) {
          for (var e, r, n, a, i, o = {}, s = t; s; )
            (e = u(P(s, ["=", ","]), 3)),
              (a = e[0]),
              (n = e[1]),
              (s = e[2]),
              "=" === n
                ? ((r = u(P(s, [","]), 3)),
                  (i = r[0]),
                  (n = r[1]),
                  (s = r[2]),
                  (i = "false" === i || "true" === i ? JSON.parse(i) : i),
                  (o[a] = i))
                : a && (o[a] = !0);
          return o;
        })(t);
        if (e)
          try {
            for (
              var o = c(Object.keys(i)), s = o.next();
              !s.done;
              s = o.next()
            ) {
              var l = s.value;
              if (!e.hasOwnProperty(l)) {
                if (r)
                  throw new m.default(
                    "InvalidOption",
                    "Invalid optional argument: %1",
                    l
                  );
                delete i[l];
              }
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              s && !s.done && (a = o.return) && a.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
        return i;
      }),
      (e.default = n);
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
    var i = r(5),
      s = function (t, e) {
        void 0 === t && (t = "???"),
          void 0 === e && (e = ""),
          (this.tag = t),
          (this.id = e);
      };
    e.Label = s;
    var l = function (t, e, r, n, a, i, o, s) {
      void 0 === t && (t = ""),
        void 0 === e && (e = !1),
        void 0 === r && (r = !1),
        void 0 === n && (n = null),
        void 0 === a && (a = ""),
        void 0 === i && (i = ""),
        void 0 === o && (o = !1),
        void 0 === s && (s = ""),
        (this.env = t),
        (this.taggable = e),
        (this.defaultTags = r),
        (this.tag = n),
        (this.tagId = a),
        (this.tagFormat = i),
        (this.noTag = o),
        (this.labelId = s);
    };
    e.TagInfo = l;
    var u =
      ((c.prototype.start = function (t, e, r) {
        this.currentTag && this.stack.push(this.currentTag),
          (this.currentTag = new l(t, e, r));
      }),
      Object.defineProperty(c.prototype, "env", {
        get: function () {
          return this.currentTag.env;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (c.prototype.end = function () {
        this.history.push(this.currentTag),
          (this.currentTag = this.stack.pop());
      }),
      (c.prototype.tag = function (t, e) {
        (this.currentTag.tag = t),
          (this.currentTag.tagFormat = e ? t : this.formatTag(t)),
          (this.currentTag.noTag = !1);
      }),
      (c.prototype.notag = function () {
        this.tag("", !0), (this.currentTag.noTag = !0);
      }),
      Object.defineProperty(c.prototype, "noTag", {
        get: function () {
          return this.currentTag.noTag;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(c.prototype, "label", {
        get: function () {
          return this.currentTag.labelId;
        },
        set: function (t) {
          this.currentTag.labelId = t;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (c.prototype.formatUrl = function (t, e) {
        return e + "#" + encodeURIComponent(t);
      }),
      (c.prototype.formatTag = function (t) {
        return "(" + t + ")";
      }),
      (c.prototype.formatId = function (t) {
        return "mjx-eqn-" + t.replace(/\s/g, "_");
      }),
      (c.prototype.formatNumber = function (t) {
        return t.toString();
      }),
      (c.prototype.autoTag = function () {
        null == this.currentTag.tag &&
          (this.counter++, this.tag(this.formatNumber(this.counter), !1));
      }),
      (c.prototype.clearTag = function () {
        (this.label = ""), this.tag(null, !0), (this.currentTag.tagId = "");
      }),
      (c.prototype.getTag = function (t) {
        if ((void 0 === t && (t = !1), t))
          return this.autoTag(), this.makeTag();
        var e = this.currentTag;
        return e.taggable &&
          !e.noTag &&
          (e.defaultTags && this.autoTag(), e.tag)
          ? this.makeTag()
          : null;
      }),
      (c.prototype.resetTag = function () {
        (this.history = []),
          (this.redo = !1),
          (this.refUpdate = !1),
          this.clearTag();
      }),
      (c.prototype.reset = function (t) {
        void 0 === t && (t = 0),
          this.resetTag(),
          (this.counter = this.allCounter = t),
          (this.allLabels = {}),
          (this.allIds = {});
      }),
      (c.prototype.startEquation = function (t) {
        (this.labels = {}),
          (this.ids = {}),
          (this.counter = this.allCounter),
          (this.redo = !1);
        var e = t.inputData.recompile;
        e && ((this.refUpdate = !0), (this.counter = e.counter));
      }),
      (c.prototype.finishEquation = function (t) {
        this.redo &&
          (t.inputData.recompile = {
            state: t.state(),
            counter: this.allCounter,
          }),
          this.refUpdate || (this.allCounter = this.counter),
          Object.assign(this.allIds, this.ids),
          Object.assign(this.allLabels, this.labels);
      }),
      (c.prototype.finalize = function (t, e) {
        if (!e.display || this.currentTag.env || null == this.currentTag.tag)
          return t;
        var r = this.makeTag();
        return this.enTag(t, r);
      }),
      (c.prototype.makeId = function () {
        this.currentTag.tagId = this.formatId(
          (this.configuration.options.useLabelIds && this.label) ||
            this.currentTag.tag
        );
      }),
      (c.prototype.makeTag = function () {
        this.makeId(),
          this.label &&
            (this.labels[this.label] = new s(
              this.currentTag.tag,
              this.currentTag.tagId
            ));
        var t = new i.default(
          "\\text{" + this.currentTag.tagFormat + "}",
          {},
          this.configuration
        ).mml();
        return this.configuration.nodeFactory.create("node", "mtd", [t], {
          id: this.currentTag.tagId,
        });
      }),
      c);
    function c() {
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
    e.AbstractTags = u;
    var p,
      f =
        (a(h, (p = u)),
        (h.prototype.autoTag = function () {}),
        (h.prototype.getTag = function () {
          return this.currentTag.tag ? p.prototype.getTag.call(this) : null;
        }),
        h);
    function h() {
      return (null !== p && p.apply(this, arguments)) || this;
    }
    e.NoTags = f;
    var d,
      m,
      y,
      g,
      v =
        (a(b, (d = u)),
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
      return (null !== d && d.apply(this, arguments)) || this;
    }
    (e.AllTags = v),
      (m = e.TagsFactory || (e.TagsFactory = {})),
      (y = new Map([
        ["none", f],
        ["all", v],
      ])),
      (g = "none"),
      (m.OPTIONS = {
        tags: g,
        tagSide: "right",
        tagIndent: "0.8em",
        multlineWidth: "85%",
        useLabelIds: !0,
        ignoreDuplicateLabels: !1,
      }),
      (m.add = function (t, e) {
        y.set(t, e);
      }),
      (m.addTags = function (t) {
        var e, r;
        try {
          for (var n = o(Object.keys(t)), a = n.next(); !a.done; a = n.next()) {
            var i = a.value;
            m.add(i, t[i]);
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
        return new (y.get(t) || this.defaultTags)();
      }),
      (m.setDefault = function (t) {
        g = t;
      }),
      (m.getDefault = function () {
        return m.create(g);
      });
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
      d =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
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
            t = t.concat(d(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var y = r(23),
      i = r(2),
      o =
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
          var e = d(t, 2),
            r = e[0],
            n = e[1],
            a = this.parserFor(n),
            i = this.lookup(n);
          return a && i ? a(r, i) || !0 : null;
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
      (this._name = t), (this._parser = e), i.MapHandler.register(this);
    }
    e.AbstractSymbolMap = o;
    var u,
      c =
        (a(p, (u = o)),
        (p.prototype.contains = function (t) {
          return this._regExp.test(t);
        }),
        (p.prototype.lookup = function (t) {
          return this.contains(t) ? t : null;
        }),
        p);
    function p(t, e, r) {
      var n = u.call(this, t, e) || this;
      return (n._regExp = r), n;
    }
    e.RegExpMap = c;
    var f,
      h =
        (a(g, (f = o)),
        (g.prototype.lookup = function (t) {
          return this.map.get(t);
        }),
        (g.prototype.contains = function (t) {
          return this.map.has(t);
        }),
        (g.prototype.add = function (t, e) {
          this.map.set(t, e);
        }),
        g);
    function g() {
      var t = (null !== f && f.apply(this, arguments)) || this;
      return (t.map = new Map()), t;
    }
    e.AbstractParseMap = h;
    var v,
      b = (a(T, (v = h)), T);
    function T(t, e, r) {
      var n,
        a,
        i = v.call(this, t, e) || this;
      try {
        for (var o = m(Object.keys(r)), s = o.next(); !s.done; s = o.next()) {
          var l = s.value,
            u = r[l],
            c = d("string" == typeof u ? [u, null] : u, 2),
            p = c[0],
            f = c[1],
            h = new y.Symbol(l, p, f);
          i.add(l, h);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (a = o.return) && a.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return i;
    }
    e.CharacterMap = b;
    var S,
      P =
        (a(x, (S = b)),
        (x.prototype.parse = function (t) {
          var e = d(t, 2),
            r = e[0],
            n = e[1];
          return S.prototype.parse.call(this, [r, "\\" + n]);
        }),
        x);
    function x() {
      return (null !== S && S.apply(this, arguments)) || this;
    }
    e.DelimiterMap = P;
    var M,
      A =
        (a(O, (M = h)),
        (O.prototype.parserFor = function (t) {
          var e = this.lookup(t);
          return e ? e.func : null;
        }),
        (O.prototype.parse = function (t) {
          var e = d(t, 2),
            r = e[0],
            n = e[1],
            a = this.lookup(n),
            i = this.parserFor(n);
          return a && i
            ? i.apply(void 0, l([r, a.symbol], a.args)) || !0
            : null;
        }),
        O);
    function O(t, e, r) {
      var n,
        a,
        i = M.call(this, t, null) || this;
      try {
        for (var o = m(Object.keys(e)), s = o.next(); !s.done; s = o.next()) {
          var l = s.value,
            u = e[l],
            c = d("string" == typeof u ? [u] : u),
            p = c[0],
            f = c.slice(1),
            h = new y.Macro(l, r[p], f);
          i.add(l, h);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          s && !s.done && (a = o.return) && a.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return i;
    }
    e.MacroMap = A;
    var E,
      C =
        (a(w, (E = A)),
        (w.prototype.parse = function (t) {
          var e = d(t, 2),
            r = e[0],
            n = e[1],
            a = this.lookup(n),
            i = this.parserFor(n);
          if (!a || !i) return null;
          if ((["\\" + a.symbol].concat(a.args), !i)) return null;
          var o = r.currentCS;
          r.currentCS = "\\" + n;
          var s = i.apply(void 0, l([r, "\\" + a.symbol], a.args));
          return (r.currentCS = o), s || !0;
        }),
        w);
    function w() {
      return (null !== E && E.apply(this, arguments)) || this;
    }
    e.CommandMap = C;
    var k,
      _ =
        (a(I, (k = A)),
        (I.prototype.parse = function (t) {
          var e = d(t, 2),
            r = e[0],
            n = e[1],
            a = this.lookup(n),
            i = this.parserFor(n);
          return a && i ? (this.parser(r, a.symbol, i, a.args), !0) : null;
        }),
        I);
    function I(t, e, r, n) {
      var a = k.call(this, t, r, n) || this;
      return (a.parser = e), a;
    }
    e.EnvironmentMap = _;
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
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        },
      o =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(i(arguments[e]));
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
    var l = r(1),
      u =
        (Object.defineProperty(c.prototype, "nodes", {
          get: function () {
            return this._nodes;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.Push = function () {
          for (var t, e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
          (t = this._nodes).push.apply(t, o(e));
        }),
        (c.prototype.Pop = function () {
          return this._nodes.pop();
        }),
        Object.defineProperty(c.prototype, "First", {
          get: function () {
            return this._nodes[this.Size() - 1];
          },
          set: function (t) {
            this._nodes[this.Size() - 1] = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(c.prototype, "Last", {
          get: function () {
            return this._nodes[0];
          },
          set: function (t) {
            this._nodes[0] = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (c.prototype.Peek = function (t) {
          return null == t && (t = 1), this._nodes.slice(this.Size() - t);
        }),
        (c.prototype.Size = function () {
          return this._nodes.length;
        }),
        (c.prototype.Clear = function () {
          this._nodes = [];
        }),
        (c.prototype.toMml = function (t, e) {
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
        (c.prototype.create = function (t) {
          for (var e, r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n];
          return (e = this.factory.configuration.nodeFactory).create.apply(
            e,
            o([t], r)
          );
        }),
        c);
    function c(t) {
      this._nodes = t;
    }
    e.MmlStack = u;
    var p,
      f =
        (a(h, (p = u)),
        Object.defineProperty(h.prototype, "kind", {
          get: function () {
            return "base";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(h.prototype, "env", {
          get: function () {
            return this._env;
          },
          set: function (t) {
            this._env = t;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (h.prototype.getProperty = function (t) {
          return this._properties[t];
        }),
        (h.prototype.setProperty = function (t, e) {
          return (this._properties[t] = e), this;
        }),
        Object.defineProperty(h.prototype, "isOpen", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(h.prototype, "isClose", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(h.prototype, "isFinal", {
          get: function () {
            return !1;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (h.prototype.isKind = function (t) {
          return t === this.kind;
        }),
        (h.prototype.checkItem = function (t) {
          if (
            (t.isKind("over") &&
              this.isOpen &&
              (t.setProperty("num", this.toMml(!1)), this.Clear()),
            t.isKind("cell") && this.isOpen)
          ) {
            if (t.getProperty("linebreak")) return h.fail;
            throw new l.default("Misplaced", "Misplaced %1", t.getName());
          }
          if (t.isClose && this.getErrors(t.kind)) {
            var e = i(this.getErrors(t.kind), 2),
              r = e[0],
              n = e[1];
            throw new l.default(r, n, t.getName());
          }
          return t.isFinal ? (this.Push(t.First), h.fail) : h.success;
        }),
        (h.prototype.clearEnv = function () {
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
        (h.prototype.setProperties = function (t) {
          return Object.assign(this._properties, t), this;
        }),
        (h.prototype.getName = function () {
          return this.getProperty("name");
        }),
        (h.prototype.toString = function () {
          return this.kind + "[" + this.nodes.join("; ") + "]";
        }),
        (h.prototype.getErrors = function (t) {
          return (this.constructor.errors || {})[t] || h.errors[t];
        }),
        (h.fail = [null, !1]),
        (h.success = [null, !0]),
        (h.errors = {
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
        h);
    function h(t) {
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
    var g =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
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
    var v,
      n,
      a,
      i = r(13),
      o = r(2),
      I = r(7),
      s = r(10),
      b = r(2),
      T = r(35),
      l =
        ((u.create = function (t, e) {
          return (
            void 0 === e && (e = {}),
            new u(
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
        (u.empty = function () {
          return u.create("empty");
        }),
        (u.extension = function () {
          return (
            new s.MacroMap(o.ExtensionMaps.NEW_MACRO, {}, {}),
            new s.DelimiterMap(
              o.ExtensionMaps.NEW_DELIMITER,
              i.default.delimiter,
              {}
            ),
            new s.CommandMap(o.ExtensionMaps.NEW_COMMAND, {}, {}),
            new s.EnvironmentMap(
              o.ExtensionMaps.NEW_ENVIRONMENT,
              i.default.environment,
              {},
              {}
            ),
            u.create("extension", {
              handler: {
                character: [],
                delimiter: [o.ExtensionMaps.NEW_DELIMITER],
                macro: [
                  o.ExtensionMaps.NEW_DELIMITER,
                  o.ExtensionMaps.NEW_COMMAND,
                  o.ExtensionMaps.NEW_MACRO,
                ],
                environment: [o.ExtensionMaps.NEW_ENVIRONMENT],
              },
            })
          );
        }),
        (u.prototype.init = function (t) {
          this.initMethod.execute(t);
        }),
        (u.prototype.config = function (t, e) {
          var r, n, a, i;
          this.configMethod.execute(t, e);
          try {
            for (
              var o = _(this.preprocessors), s = o.next();
              !s.done;
              s = o.next()
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
              s && !s.done && (n = o.return) && n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          try {
            for (
              var u = _(this.postprocessors), c = u.next();
              !c.done;
              c = u.next()
            ) {
              var p = c.value;
              "function" == typeof p
                ? e.postFilters.add(p)
                : e.postFilters.add(p[0], p[1]);
            }
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              c && !c.done && (i = u.return) && i.call(u);
            } finally {
              if (a) throw a.error;
            }
          }
        }),
        (u.prototype.append = function (t) {
          var e,
            r,
            n,
            a,
            i,
            o,
            s,
            l,
            u,
            c,
            p,
            f,
            h = Object.keys(t.handler);
          try {
            for (var d = _(h), m = d.next(); !m.done; m = d.next()) {
              var y = m.value;
              try {
                for (
                  var g = ((n = void 0), _(t.handler[y])), v = g.next();
                  !v.done;
                  v = g.next()
                ) {
                  var b = v.value;
                  this.handler[y].unshift(b);
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  v && !v.done && (a = g.return) && a.call(g);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              m && !m.done && (r = d.return) && r.call(d);
            } finally {
              if (e) throw e.error;
            }
          }
          Object.assign(this.fallback, t.fallback),
            Object.assign(this.items, t.items),
            Object.assign(this.tags, t.tags),
            I.defaultOptions(this.options, t.options),
            Object.assign(this.nodes, t.nodes);
          try {
            for (
              var T = _(t.preprocessors), S = T.next();
              !S.done;
              S = T.next()
            ) {
              var P = S.value;
              this.preprocessors.push(P);
            }
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              S && !S.done && (o = T.return) && o.call(T);
            } finally {
              if (i) throw i.error;
            }
          }
          try {
            for (
              var x = _(t.postprocessors), M = x.next();
              !M.done;
              M = x.next()
            ) {
              var A = M.value;
              this.postprocessors.push(A);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              M && !M.done && (l = x.return) && l.call(x);
            } finally {
              if (s) throw s.error;
            }
          }
          try {
            for (var O = _(t.initMethod), E = O.next(); !E.done; E = O.next()) {
              var C = E.value;
              this.initMethod.add(C.item, C.priority);
            }
          } catch (t) {
            u = { error: t };
          } finally {
            try {
              E && !E.done && (c = O.return) && c.call(O);
            } finally {
              if (u) throw u.error;
            }
          }
          try {
            for (var w = _(t.configMethod), k = w.next(); !k.done; k = w.next())
              (C = k.value), this.configMethod.add(C.item, C.priority);
          } catch (t) {
            p = { error: t };
          } finally {
            try {
              k && !k.done && (f = w.return) && f.call(w);
            } finally {
              if (p) throw p.error;
            }
          }
        }),
        (u.prototype.register = function (t, e, r) {
          var n, a, i, o, s, l;
          void 0 === r && (r = {}), this.append(t), t.init(this);
          var u = e.parseOptions;
          (u.handlers = new b.SubHandlers(this)),
            u.nodeFactory.setCreators(t.nodes);
          try {
            for (
              var c = _(Object.keys(t.items)), p = c.next();
              !p.done;
              p = c.next()
            ) {
              var f = p.value;
              u.itemFactory.setNodeClass(f, t.items[f]);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              p && !p.done && (a = c.return) && a.call(c);
            } finally {
              if (n) throw n.error;
            }
          }
          I.defaultOptions(u.options, t.options),
            I.userOptions(u.options, r),
            t.config(this, e);
          try {
            for (
              var h = _(t.preprocessors), d = h.next();
              !d.done;
              d = h.next()
            ) {
              var m = d.value;
              Array.isArray(m)
                ? e.preFilters.add(m[0], m[1])
                : e.preFilters.add(m);
            }
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              d && !d.done && (o = h.return) && o.call(h);
            } finally {
              if (i) throw i.error;
            }
          }
          try {
            for (
              var y = _(t.postprocessors), g = y.next();
              !g.done;
              g = y.next()
            ) {
              var v = g.value;
              Array.isArray(v)
                ? e.postFilters.add(v[0], v[1])
                : e.postFilters.add(v);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              g && !g.done && (l = y.return) && l.call(y);
            } finally {
              if (s) throw s.error;
            }
          }
        }),
        u);
    function u(t, e, r, n, a, i, o, s, l, u, c) {
      void 0 === e && (e = {}),
        void 0 === r && (r = {}),
        void 0 === n && (n = {}),
        void 0 === a && (a = {}),
        void 0 === i && (i = {}),
        void 0 === o && (o = {}),
        void 0 === s && (s = []),
        void 0 === l && (l = []);
      var p = g(u, 2),
        f = p[0],
        h = p[1],
        d = g(c, 2),
        m = d[0],
        y = d[1];
      (this.name = t),
        (this.handler = e),
        (this.fallback = r),
        (this.items = n),
        (this.tags = a),
        (this.options = i),
        (this.nodes = o),
        (this.preprocessors = s),
        (this.postprocessors = l),
        (this.initMethod = new T.FunctionList()),
        (this.configMethod = new T.FunctionList()),
        f && this.initMethod.add(f, h || 0),
        m && this.configMethod.add(m, y || h || 0),
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
    var n =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        },
      o =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a,
      i,
      s = r(0),
      l = r(9),
      u = r(6);
    ((i = a = a || {}).variable = function (t, e) {
      var r = u.default.getFontDef(t),
        n = t.create("token", "mi", r, e);
      t.Push(n);
    }),
      (i.digit = function (t, e) {
        var r,
          n = t.configuration.options.digits,
          a = t.string.slice(t.i - 1).match(n),
          i = u.default.getFontDef(t);
        a
          ? ((r = t.create("token", "mn", i, a[0].replace(/[{}]/g, ""))),
            (t.i += a[0].length - 1))
          : (r = t.create("token", "mo", i, e)),
          t.Push(r);
      }),
      (i.controlSequence = function (t, e) {
        var r = t.GetCS();
        t.parse("macro", [t, r]);
      }),
      (i.mathchar0mi = function (t, e) {
        var r = e.attributes || { mathvariant: l.TexConstant.Variant.ITALIC },
          n = t.create("token", "mi", r, e.char);
        t.Push(n);
      }),
      (i.mathchar0mo = function (t, e) {
        var r = e.attributes || {};
        r.stretchy = !1;
        var n = t.create("token", "mo", r, e.char);
        s.default.setProperty(n, "fixStretchy", !0),
          t.configuration.addNode("fixStretchy", n),
          t.Push(n);
      }),
      (i.mathchar7 = function (t, e) {
        var r = e.attributes || { mathvariant: l.TexConstant.Variant.NORMAL };
        t.stack.env.font && (r.mathvariant = t.stack.env.font);
        var n = t.create("token", "mi", r, e.char);
        t.Push(n);
      }),
      (i.delimiter = function (t, e) {
        var r = e.attributes || {};
        r = Object.assign({ fence: !1, stretchy: !1 }, r);
        var n = t.create("token", "mo", r, e.char);
        t.Push(n);
      }),
      (i.environment = function (t, e, r, n) {
        var a = n[0],
          i = t.itemFactory.create("begin").setProperties({ name: e, end: a });
        (i = r.apply(void 0, o([t, i], n.slice(1)))), t.Push(i);
      }),
      (e.default = a);
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
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        },
      o =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(i(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s,
      l = r(2),
      u = r(4),
      c = r(3),
      p = r(1),
      f = r(6),
      h = r(0),
      d = r(11),
      m =
        ((s = d.BaseItem),
        a(y, s),
        Object.defineProperty(y.prototype, "kind", {
          get: function () {
            return "start";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(y.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (y.prototype.checkItem = function (t) {
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
        y);
    function y(t, e) {
      var r = s.call(this, t) || this;
      return (r.global = e), r;
    }
    e.StartItem = m;
    var g,
      v =
        ((g = d.BaseItem),
        a(b, g),
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
      return (null !== g && g.apply(this, arguments)) || this;
    }
    e.StopItem = v;
    var T,
      S =
        ((T = d.BaseItem),
        a(P, T),
        Object.defineProperty(P.prototype, "kind", {
          get: function () {
            return "open";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(P.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (P.prototype.checkItem = function (t) {
          if (t.isKind("close")) {
            var e = this.toMml(),
              r = this.create("node", "TeXAtom", [e]);
            return [[this.factory.create("mml", r)], !0];
          }
          return T.prototype.checkItem.call(this, t);
        }),
        (P.errors = Object.assign(Object.create(d.BaseItem.errors), {
          stop: [
            "ExtraOpenMissingClose",
            "Extra open brace or missing close brace",
          ],
        })),
        P);
    function P() {
      return (null !== T && T.apply(this, arguments)) || this;
    }
    e.OpenItem = S;
    var x,
      M =
        ((x = d.BaseItem),
        a(A, x),
        Object.defineProperty(A.prototype, "kind", {
          get: function () {
            return "close";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(A.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        A);
    function A() {
      return (null !== x && x.apply(this, arguments)) || this;
    }
    e.CloseItem = M;
    var O,
      E =
        ((O = d.BaseItem),
        a(C, O),
        Object.defineProperty(C.prototype, "kind", {
          get: function () {
            return "prime";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (C.prototype.checkItem = function (t) {
          var e = i(this.Peek(2), 2),
            r = e[0],
            n = e[1];
          return !h.default.isType(r, "msubsup") || h.default.isType(r, "msup")
            ? [[this.create("node", "msup", [r, n]), t], !0]
            : (h.default.setChild(r, r.sup, n), [[r, t], !0]);
        }),
        C);
    function C() {
      return (null !== O && O.apply(this, arguments)) || this;
    }
    e.PrimeItem = E;
    var w,
      k =
        ((w = d.BaseItem),
        a(_, w),
        Object.defineProperty(_.prototype, "kind", {
          get: function () {
            return "subsup";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (_.prototype.checkItem = function (t) {
          if (t.isKind("open") || t.isKind("left")) return d.BaseItem.success;
          var e = this.First,
            r = this.getProperty("position");
          if (t.isKind("mml")) {
            if (this.getProperty("primes"))
              if (2 !== r) h.default.setChild(e, 2, this.getProperty("primes"));
              else {
                h.default.setProperty(
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
              h.default.setChild(e, r, t.First),
              null != this.getProperty("movesupsub") &&
                h.default.setProperty(
                  e,
                  "movesupsub",
                  this.getProperty("movesupsub")
                ),
              [[this.factory.create("mml", e)], !0]
            );
          }
          if (w.prototype.checkItem.call(this, t)[1]) {
            var a = this.getErrors(["", "sub", "sup"][r]);
            throw new (p.default.bind.apply(
              p.default,
              o([void 0, a[0], a[1]], a.splice(2))
            ))();
          }
        }),
        (_.errors = Object.assign(Object.create(d.BaseItem.errors), {
          stop: ["MissingScript", "Missing superscript or subscript argument"],
          sup: ["MissingOpenForSup", "Missing open brace for superscript"],
          sub: ["MissingOpenForSub", "Missing open brace for subscript"],
        })),
        _);
    function _() {
      return (null !== w && w.apply(this, arguments)) || this;
    }
    e.SubsupItem = k;
    var I,
      N =
        ((I = d.BaseItem),
        a(L, I),
        Object.defineProperty(L.prototype, "kind", {
          get: function () {
            return "over";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(L.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (L.prototype.checkItem = function (t) {
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
                h.default.setAttribute(
                  e,
                  "linethickness",
                  this.getProperty("thickness")
                ),
              (this.getProperty("open") || this.getProperty("close")) &&
                (h.default.setProperty(e, "withDelims", !0),
                (e = f.default.fixedFence(
                  this.factory.configuration,
                  this.getProperty("open"),
                  e,
                  this.getProperty("close")
                ))),
              [[this.factory.create("mml", e), t], !0]
            );
          }
          return I.prototype.checkItem.call(this, t);
        }),
        (L.prototype.toString = function () {
          return (
            "over[" +
            this.getProperty("num") +
            " / " +
            this.nodes.join("; ") +
            "]"
          );
        }),
        L);
    function L(t) {
      var e = I.call(this, t) || this;
      return e.setProperty("name", "\\over"), e;
    }
    e.OverItem = N;
    var F,
      R =
        ((F = d.BaseItem),
        a(j, F),
        Object.defineProperty(j.prototype, "kind", {
          get: function () {
            return "left";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(j.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (j.prototype.checkItem = function (t) {
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
            : F.prototype.checkItem.call(this, t);
        }),
        (j.errors = Object.assign(Object.create(d.BaseItem.errors), {
          stop: ["ExtraLeftMissingRight", "Extra \\left or missing \\right"],
        })),
        j);
    function j(t) {
      var e = F.call(this, t) || this;
      return e.setProperty("delim", "("), e;
    }
    e.LeftItem = R;
    var B,
      D =
        ((B = d.BaseItem),
        a(X, B),
        Object.defineProperty(X.prototype, "kind", {
          get: function () {
            return "right";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(X.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        X);
    function X(t) {
      var e = B.call(this, t) || this;
      return e.setProperty("delim", ")"), e;
    }
    e.RightItem = D;
    var q,
      H =
        ((q = d.BaseItem),
        a(G, q),
        Object.defineProperty(G.prototype, "kind", {
          get: function () {
            return "begin";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(G.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (G.prototype.checkItem = function (t) {
          if (t.isKind("end")) {
            if (t.getName() !== this.getName())
              throw new p.default(
                "EnvBadEnd",
                "\\begin{%1} ended with \\end{%2}",
                this.getName(),
                t.getName()
              );
            return this.getProperty("end")
              ? d.BaseItem.fail
              : [[this.factory.create("mml", this.toMml())], !0];
          }
          if (t.isKind("stop"))
            throw new p.default(
              "EnvMissingEnd",
              "Missing \\end{%1}",
              this.getName()
            );
          return q.prototype.checkItem.call(this, t);
        }),
        G);
    function G() {
      return (null !== q && q.apply(this, arguments)) || this;
    }
    e.BeginItem = H;
    var U,
      V =
        ((U = d.BaseItem),
        a(J, U),
        Object.defineProperty(J.prototype, "kind", {
          get: function () {
            return "end";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(J.prototype, "isClose", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        J);
    function J() {
      return (null !== U && U.apply(this, arguments)) || this;
    }
    e.EndItem = V;
    var K,
      z =
        ((K = d.BaseItem),
        a($, K),
        Object.defineProperty($.prototype, "kind", {
          get: function () {
            return "style";
          },
          enumerable: !0,
          configurable: !0,
        }),
        ($.prototype.checkItem = function (t) {
          if (!t.isClose) return K.prototype.checkItem.call(this, t);
          var e = this.create(
            "node",
            "mstyle",
            this.nodes,
            this.getProperty("styles")
          );
          return [[this.factory.create("mml", e), t], !0];
        }),
        $);
    function $() {
      return (null !== K && K.apply(this, arguments)) || this;
    }
    e.StyleItem = z;
    var W,
      Y =
        ((W = d.BaseItem),
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
    e.PositionItem = Y;
    var Q,
      tt =
        ((Q = d.BaseItem),
        a(et, Q),
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
      return (null !== Q && Q.apply(this, arguments)) || this;
    }
    e.CellItem = tt;
    var rt,
      nt =
        ((rt = d.BaseItem),
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
    var it,
      ot =
        ((it = d.BaseItem),
        a(st, it),
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
            if (t.isOpen) return d.BaseItem.success;
            if (!t.isKind("fn")) {
              var r = t.First;
              if (!t.isKind("mml") || !r) return [[e, t], !0];
              if (
                (h.default.isType(r, "mstyle") &&
                  r.childNodes.length &&
                  h.default.isType(r.childNodes[0].childNodes[0], "mspace")) ||
                h.default.isType(r, "mspace")
              )
                return [[e, t], !0];
              h.default.isEmbellished(r) && (r = h.default.getCoreMO(r));
              var n = h.default.getForm(r);
              if (null != n && [0, 0, 1, 1, 0, 1, 1, 0, 0, 0][n[2]])
                return [[e, t], !0];
            }
            return [
              [
                e,
                this.create(
                  "token",
                  "mo",
                  { texClass: c.TEXCLASS.NONE },
                  u.entities.ApplyFunction
                ),
                t,
              ],
              !0,
            ];
          }
          return it.prototype.checkItem.apply(this, arguments);
        }),
        st);
    function st() {
      return (null !== it && it.apply(this, arguments)) || this;
    }
    e.FnItem = ot;
    var lt,
      ut =
        ((lt = d.BaseItem),
        a(ct, lt),
        Object.defineProperty(ct.prototype, "kind", {
          get: function () {
            return "not";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (ct.prototype.checkItem = function (t) {
          var e, r, n;
          if (t.isKind("open") || t.isKind("left")) return d.BaseItem.success;
          if (
            t.isKind("mml") &&
            (h.default.isType(t.First, "mo") ||
              h.default.isType(t.First, "mi") ||
              h.default.isType(t.First, "mtext")) &&
            ((e = t.First),
            1 === (r = h.default.getText(e)).length &&
              !h.default.getProperty(e, "movesupsub") &&
              1 === h.default.getChildren(e).length)
          )
            return (
              this.remap.contains(r)
                ? ((n = this.create("text", this.remap.lookup(r).char)),
                  h.default.setChild(e, 0, n))
                : ((n = this.create("text", "\u0338")),
                  h.default.appendChildren(e, [n])),
              [[t], !0]
            );
          n = this.create("text", "\u29f8");
          var a = this.create("node", "mtext", [], {}, n),
            i = this.create("node", "mpadded", [a], { width: 0 });
          return [
            [
              (e = this.create("node", "TeXAtom", [i], {
                texClass: c.TEXCLASS.REL,
              })),
              t,
            ],
            !0,
          ];
        }),
        ct);
    function ct() {
      var t = (null !== lt && lt.apply(this, arguments)) || this;
      return (t.remap = l.MapHandler.getMap("not_remap")), t;
    }
    e.NotItem = ut;
    var pt,
      ft =
        ((pt = d.BaseItem),
        a(ht, pt),
        Object.defineProperty(ht.prototype, "kind", {
          get: function () {
            return "dots";
          },
          enumerable: !0,
          configurable: !0,
        }),
        (ht.prototype.checkItem = function (t) {
          if (t.isKind("open") || t.isKind("left")) return d.BaseItem.success;
          var e = this.getProperty("ldots"),
            r = t.First;
          if (t.isKind("mml") && h.default.isEmbellished(r)) {
            var n = h.default.getTexClass(h.default.getCoreMO(r));
            (n !== c.TEXCLASS.BIN && n !== c.TEXCLASS.REL) ||
              (e = this.getProperty("cdots"));
          }
          return [[e, t], !0];
        }),
        ht);
    function ht() {
      return (null !== pt && pt.apply(this, arguments)) || this;
    }
    e.DotsItem = ft;
    var dt,
      mt =
        ((dt = d.BaseItem),
        a(yt, dt),
        Object.defineProperty(yt.prototype, "kind", {
          get: function () {
            return "array";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(yt.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (yt.prototype.checkItem = function (t) {
          if (!t.isClose || t.isKind("over"))
            return dt.prototype.checkItem.call(this, t);
          if (t.getProperty("isEntry"))
            return this.EndEntry(), this.clearEnv(), d.BaseItem.fail;
          if (t.getProperty("isCR"))
            return (
              this.EndEntry(), this.EndRow(), this.clearEnv(), d.BaseItem.fail
            );
          this.EndTable(), this.clearEnv();
          var e = this.arraydef.scriptlevel;
          delete this.arraydef.scriptlevel;
          var r = this.create("node", "mtable", this.table, this.arraydef);
          4 === this.frame.length
            ? h.default.setAttribute(
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
                h.default.setAttribute(r, "padding", 0)),
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
        (yt.prototype.EndEntry = function () {
          var t = this.create("node", "mtd", this.nodes);
          this.hfill.length &&
            (0 === this.hfill[0] &&
              h.default.setAttribute(t, "columnalign", "right"),
            this.hfill[this.hfill.length - 1] === this.Size() &&
              h.default.setAttribute(
                t,
                "columnalign",
                h.default.getAttribute(t, "columnalign") ? "center" : "left"
              )),
            this.row.push(t),
            this.Clear(),
            (this.hfill = []);
        }),
        (yt.prototype.EndRow = function () {
          var t;
          (t =
            this.getProperty("isNumbered") && 3 === this.row.length
              ? (this.row.unshift(this.row.pop()),
                this.create("node", "mlabeledtr", this.row))
              : this.create("node", "mtr", this.row)),
            this.table.push(t),
            (this.row = []);
        }),
        (yt.prototype.EndTable = function () {
          (this.Size() || this.row.length) && (this.EndEntry(), this.EndRow()),
            this.checkLines();
        }),
        (yt.prototype.checkLines = function () {
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
        yt);
    function yt() {
      var t = (null !== dt && dt.apply(this, arguments)) || this;
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
    var gt,
      vt =
        (a(bt, (gt = mt)),
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
          gt.prototype.EndTable.call(this),
            this.factory.configuration.tags.end();
        }),
        bt);
    function bt(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      var n = gt.call(this, t) || this;
      return n.factory.configuration.tags.start(e[0], e[2], e[1]), n;
    }
    e.EqnArrayItem = vt;
    var Tt,
      St =
        ((Tt = d.BaseItem),
        a(Pt, Tt),
        Object.defineProperty(Pt.prototype, "kind", {
          get: function () {
            return "equation";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(Pt.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (Pt.prototype.checkItem = function (t) {
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
          return Tt.prototype.checkItem.call(this, t);
        }),
        Pt);
    function Pt(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      var n = Tt.call(this, t) || this;
      return n.factory.configuration.tags.start("equation", !0, e[0]), n;
    }
    e.EquationItem = St;
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
        (this && this.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var a in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
              return t;
            }).apply(this, arguments);
        },
      u =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
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
    var o = r(29),
      c = r(7),
      p = r(16),
      f = r(17),
      s = r(0),
      h = r(5),
      d = r(1),
      m = r(20),
      y = r(8),
      g = r(12);
    r(24);
    var v,
      b =
        ((v = o.AbstractInputJax),
        a(T, v),
        (T.configure = function (t) {
          var e,
            r,
            n = g.Configuration.empty();
          try {
            for (var a = l(t), i = a.next(); !i.done; i = a.next()) {
              var o = i.value,
                s = g.ConfigurationHandler.get(o);
              s && n.append(s);
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
          return n.init(n), n;
        }),
        (T.tags = function (t, e) {
          y.TagsFactory.addTags(e.tags),
            y.TagsFactory.setDefault(t.options.tags),
            (t.tags = y.TagsFactory.getDefault()),
            (t.tags.configuration = t);
        }),
        (T.prototype.setMmlFactory = function (t) {
          v.prototype.setMmlFactory.call(this, t),
            this._parseOptions.nodeFactory.setMmlFactory(t);
        }),
        Object.defineProperty(T.prototype, "parseOptions", {
          get: function () {
            return this._parseOptions;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (T.prototype.compile = function (t, e) {
          this.parseOptions.clear(),
            this.executeFilters(this.preFilters, t, e, this.parseOptions);
          var r,
            n = t.display;
          (this.latex = t.math), this.parseOptions.tags.startEquation(t);
          try {
            r = new h.default(
              this.latex,
              { display: n, isInner: !1 },
              this.parseOptions
            ).mml();
          } catch (t) {
            if (!(t instanceof d.default)) throw t;
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
        (T.prototype.findMath = function (t) {
          return this.findTeX.findMath(t);
        }),
        (T.prototype.formatError = function (t) {
          var e = t.message.replace(/\n.*/, "");
          return this.parseOptions.nodeFactory.create(
            "error",
            e,
            t.id,
            this.latex
          );
        }),
        (T.NAME = "TeX"),
        (T.OPTIONS = i(i({}, o.AbstractInputJax.OPTIONS), {
          FindTeX: null,
          packages: ["base"],
          digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
          maxBuffer: 5120,
        })),
        T);
    function T(t) {
      void 0 === t && (t = {});
      var e = this,
        r = u(c.separateOptions(t, T.OPTIONS, p.FindTeX.OPTIONS), 3),
        n = r[0],
        a = r[1],
        i = r[2];
      (e = v.call(this, a) || this).findTeX =
        e.options.FindTeX || new p.FindTeX(i);
      var o = e.options.packages,
        s = (e.configuration = T.configure(o)),
        l = (e._parseOptions = new m.default(s, [
          e.options,
          y.TagsFactory.OPTIONS,
        ]));
      return (
        c.userOptions(l.options, n),
        s.config(s, e),
        T.tags(l, s),
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
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i,
      o = r(30),
      s = r(31),
      f = r(32),
      l =
        ((i = o.AbstractFindMath),
        a(u, i),
        (u.prototype.getPatterns = function () {
          var e = this,
            t = this.options,
            r = [],
            n = [],
            a = [];
          (this.end = {}), (this.env = this.sub = 0);
          var i = 1;
          t.inlineMath.forEach(function (t) {
            return e.addPattern(r, t, !1);
          }),
            t.displayMath.forEach(function (t) {
              return e.addPattern(r, t, !0);
            }),
            r.length && n.push(r.sort(s.sortLength).join("|")),
            t.processEnvironments &&
              (n.push("\\\\begin\\{([^}]*)\\}"), (this.env = i), i++),
            t.processEscapes && a.push("\\\\([\\\\$])"),
            t.processRefs && a.push("(\\\\(?:eq)?ref\\{[^}]*\\})"),
            a.length && (n.push("(" + a.join("|") + ")"), (this.sub = i)),
            (this.start = new RegExp(n.join("|"), "g")),
            (this.hasPatterns = 0 < n.length);
        }),
        (u.prototype.addPattern = function (t, e, r) {
          var n = p(e, 2),
            a = n[0],
            i = n[1];
          t.push(s.quotePattern(a)), (this.end[a] = [i, r, this.endPattern(i)]);
        }),
        (u.prototype.endPattern = function (t) {
          return new RegExp(
            s.quotePattern(t) + "|\\\\(?:[a-zA-Z]|.)|[{}]",
            "g"
          );
        }),
        (u.prototype.findEnd = function (t, e, r, n) {
          for (
            var a,
              i = p(n, 3),
              o = i[0],
              s = i[1],
              l = i[2],
              u = (l.lastIndex = r.index + r[0].length),
              c = 0;
            (a = l.exec(t));

          ) {
            if (a[0] === o && 0 === c)
              return f.protoItem(
                r[0],
                t.substr(u, a.index - u),
                a[0],
                e,
                r.index,
                a.index + a[0].length,
                s
              );
            "{" === a[0] ? c++ : "}" === a[0] && c && c--;
          }
          return null;
        }),
        (u.prototype.findMathInString = function (t, e, r) {
          var n, a;
          for (this.start.lastIndex = 0; (n = this.start.exec(r)); ) {
            if (void 0 !== n[this.env] && this.env) {
              var i = "\\end{" + n[this.env] + "}";
              (a = this.findEnd(r, e, n, [i, !0, this.endPattern(i)])) &&
                ((a.math = a.open + a.math + a.close), (a.open = a.close = ""));
            } else if (void 0 !== n[this.sub] && this.sub) {
              var o = n[this.sub];
              (i = n.index + n[this.sub].length),
                (a =
                  2 === o.length
                    ? f.protoItem("", o.substr(1), "", e, n.index, i)
                    : f.protoItem("", o, "", e, n.index, i, !1));
            } else a = this.findEnd(r, e, n, this.end[n[0]]);
            a && (t.push(a), (this.start.lastIndex = a.end.n));
          }
        }),
        (u.prototype.findMath = function (t) {
          var e = [];
          if (this.hasPatterns)
            for (var r = 0, n = t.length; r < n; r++)
              this.findMathInString(e, r, t[r]);
          return e;
        }),
        (u.OPTIONS = {
          inlineMath: [["\\(", "\\)"]],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
          processEscapes: !0,
          processEnvironments: !0,
          processRefs: !0,
        }),
        u);
    function u(t) {
      var e = i.call(this, t) || this;
      return e.getPatterns(), e;
    }
    e.FindTeX = l;
  },
  function (t, e, r) {
    "use strict";
    var h =
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
      d = r(3),
      m = r(0);
    !(function (t) {
      (t.cleanStretchy = function (t) {
        var e,
          r,
          n = t.data;
        try {
          for (
            var a = h(n.getList("fixStretchy")), i = a.next();
            !i.done;
            i = a.next()
          ) {
            var o = i.value;
            if (m.default.getProperty(o, "fixStretchy")) {
              var s = m.default.getForm(o);
              s &&
                s[3] &&
                s[3].stretchy &&
                m.default.setAttribute(o, "stretchy", !1);
              var l = o.parent;
              if (!(m.default.getTexClass(o) || (s && s[2]))) {
                var u = n.nodeFactory.create("node", "TeXAtom", [o]);
                l.replaceChild(u, o), u.inheritAttributesFrom(o);
              }
              m.default.removeProperties(o, "fixStretchy");
            }
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
      }),
        (t.cleanAttributes = function (t) {
          t.data.root.walkTree(function (t, e) {
            var r,
              n,
              a = t.attributes;
            try {
              for (
                var i = h(a.getExplicitNames()), o = i.next();
                !o.done;
                o = i.next()
              ) {
                var s = o.value;
                a.attributes[s] === t.attributes.getInherited(s) &&
                  delete a.attributes[s];
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i);
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
              var n = h(t.data.getList("mo")), a = n.next();
              !a.done;
              a = n.next()
            ) {
              var i = a.value;
              if (
                !i.getProperty("relationsCombined") &&
                i.parent &&
                (!i.parent || m.default.isType(i.parent, "mrow")) &&
                m.default.getTexClass(i) === d.TEXCLASS.REL
              ) {
                for (
                  var o = i.parent,
                    s = void 0,
                    l = o.childNodes,
                    u = l.indexOf(i) + 1,
                    c = m.default.getProperty(i, "variantForm");
                  u < l.length &&
                  (s = l[u]) &&
                  m.default.isType(s, "mo") &&
                  m.default.getTexClass(s) === d.TEXCLASS.REL;

                ) {
                  if (
                    c !== m.default.getProperty(s, "variantForm") ||
                    !f(i, s)
                  ) {
                    null == i.attributes.getExplicit("rspace") &&
                      m.default.setAttribute(i, "rspace", "0pt"),
                      null == s.attributes.getExplicit("lspace") &&
                        m.default.setAttribute(s, "lspace", "0pt");
                    break;
                  }
                  m.default.appendChildren(i, m.default.getChildren(s)),
                    p(["stretchy", "rspace"], i, s),
                    m.default.setProperties(i, s.getAllProperties()),
                    l.splice(u, 1),
                    (s.parent = null),
                    s.setProperty("relationsCombined", !0);
                }
                i.attributes.setInherited("form", i.getForms()[0]);
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
            var i = h(t.getList("m" + e + r)), o = i.next();
            !o.done;
            o = i.next()
          ) {
            var s = o.value,
              l = s.childNodes;
            if (!l[s[e]] || !l[s[r]]) {
              var u = s.parent,
                c = l[s[e]]
                  ? t.nodeFactory.create("node", "m" + e, [l[s.base], l[s[e]]])
                  : t.nodeFactory.create("node", "m" + r, [l[s.base], l[s[r]]]);
              m.default.copyAttributes(s, c),
                u ? u.replaceChild(c, s) : (t.root = c);
            }
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            o && !o.done && (a = i.return) && a.call(i);
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
            i = t.attributes,
            o = e.attributes,
            s = r(i, "lspace"),
            l = r(o, "rspace");
          if (s.length !== l.length) return !1;
          try {
            for (var u = h(s), c = u.next(); !c.done; c = u.next()) {
              var p = c.value;
              if (i.getExplicit(p) !== o.getExplicit(p)) return !1;
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              c && !c.done && (a = u.return) && a.call(u);
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
      r(4).add(
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
      p =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        },
      f =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(p(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var h = r(0),
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
            for (var a = c(r), i = a.next(); !i.done; i = a.next()) {
              var o = i.value;
              if (o) {
                var s = h.default.isNode(o)
                  ? this._factory.create("mml", o)
                  : o;
                s.global = this.global;
                var l = p(
                    this.stack.length ? this.Top().checkItem(s) : [null, !0],
                    2
                  ),
                  u = l[0];
                l[1] &&
                  (u
                    ? (this.Pop(), this.Push.apply(this, f(u)))
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
              i && !i.done && (t = a.return) && t.call(a);
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
  function (t, e, r) {
    "use strict";
    var n =
        (this && this.__read) ||
        function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            a,
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
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
    var i = r(21),
      o = r(2),
      s = r(22),
      u = r(7),
      c =
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
            for (var i = l(n), o = i.next(); !o.done; o = i.next()) {
              var s = o.value;
              this.inTree(s) && a.push(s);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (r = i.return) && r.call(i);
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
        (this.handlers = new o.SubHandlers(t)),
        (this.nodeFactory = new s.NodeFactory()),
        (this.nodeFactory.configuration = this).nodeFactory.setCreators(
          t.nodes
        ),
        (this.itemFactory = new i.default(t.items)),
        (this.itemFactory.configuration = this),
        u.defaultOptions.apply(void 0, a([this.options], e)),
        u.defaultOptions(this.options, t.options);
    }
    e.default = c;
  },
  function (t, e, r) {
    "use strict";
    var n,
      a,
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      s = r(11),
      l = r(34),
      u = ((o = s.BaseItem), i(c, o), c);
    function c() {
      return (null !== o && o.apply(this, arguments)) || this;
    }
    var p,
      f =
        ((p = l.AbstractFactory),
        i(h, p),
        (h.DefaultStackItems = (((a = {})[u.prototype.kind] = u), a)),
        h);
    function h() {
      var t = (null !== p && p.apply(this, arguments)) || this;
      return (t.defaultKind = "dummy"), (t.configuration = null), t;
    }
    e.default = f;
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
            i = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
              o.push(n.value);
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (a) throw a.error;
            }
          }
          return o;
        },
      a =
        (this && this.__spread) ||
        function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(n(arguments[e]));
          return t;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var p = r(0),
      i =
        ((o.prototype.setMmlFactory = function (t) {
          this.mmlFactory = t;
        }),
        (o.createNode = function (t, e, r, n, a) {
          void 0 === r && (r = []), void 0 === n && (n = {});
          var i = t.mmlFactory.create(e),
            o = i.arity;
          if (o === 1 / 0 || -1 === o)
            1 === r.length && r[0].isInferred
              ? i.setChildren(p.default.getChildren(r[0]))
              : i.setChildren(r);
          else {
            for (var s = [], l = 0, u = void 0; (u = r[l]); l++)
              if (u.isInferred) {
                var c = t.mmlFactory.create(
                  "mrow",
                  {},
                  p.default.getChildren(u)
                );
                p.default.copyAttributes(u, c), s.push(c);
              } else s.push(u);
            i.setChildren(s);
          }
          return a && i.appendChild(a), p.default.setProperties(i, n), i;
        }),
        (o.createToken = function (t, e, r, n) {
          void 0 === r && (r = {}), void 0 === n && (n = "");
          var a = t.create("text", n);
          return t.create("node", e, [], r, a);
        }),
        (o.createText = function (t, e) {
          return null == e ? null : t.mmlFactory.create("text").setText(e);
        }),
        (o.createError = function (t, e) {
          var r = t.create("text", e),
            n = t.create("node", "mtext", [], {}, r);
          return t.create("node", "merror", [n]);
        }),
        (o.prototype.set = function (t, e) {
          this.factory[t] = e;
        }),
        (o.prototype.setCreators = function (t) {
          for (var e in t) this.set(e, t[e]);
        }),
        (o.prototype.create = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e[r - 1] = arguments[r];
          var n = (this.factory[t] || this.factory.node).apply(
            void 0,
            a([this, e[0]], e.slice(1))
          );
          return this.configuration.addNode(e[0], n), n;
        }),
        (o.prototype.get = function (t) {
          return this.factory[t];
        }),
        o);
    function o() {
      (this.mmlFactory = null),
        (this.factory = {
          node: o.createNode,
          token: o.createToken,
          text: o.createText,
          error: o.createError,
        });
    }
    e.NodeFactory = i;
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
    var i =
      (Object.defineProperty(o.prototype, "symbol", {
        get: function () {
          return this._symbol;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "func", {
        get: function () {
          return this._func;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(o.prototype, "args", {
        get: function () {
          return this._args;
        },
        enumerable: !0,
        configurable: !0,
      }),
      o);
    function o(t, e, r) {
      void 0 === r && (r = []),
        (this._symbol = t),
        (this._func = e),
        (this._args = r);
    }
    e.Macro = i;
  },
  function (t, e, r) {
    "use strict";
    var n,
      a,
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
        });
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = r(12),
      s = r(2),
      l = r(1),
      u = r(0),
      c = r(10),
      p = r(14),
      f = r(8);
    function h(t, e) {
      var r = t.stack.env.font ? { mathvariant: t.stack.env.font } : {},
        n = s.MapHandler.getMap("remap").lookup(e),
        a = t.create("token", "mo", r, n ? n.char : e);
      u.default.setProperty(a, "fixStretchy", !0),
        t.configuration.addNode("fixStretchy", a),
        t.Push(a);
    }
    r(36),
      new c.CharacterMap("remap", null, {
        "-": "\u2212",
        "*": "\u2217",
        "`": "\u2018",
      }),
      (e.Other = h);
    var d,
      m = ((d = f.AbstractTags), i(y, d), y);
    function y() {
      return (null !== d && d.apply(this, arguments)) || this;
    }
    (e.BaseTags = m),
      (e.BaseConfiguration = o.Configuration.create("base", {
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
          character: h,
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
    var f =
      (this && this.__read) ||
      function (t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n,
          a,
          i = r.call(t),
          o = [];
        try {
          for (; (void 0 === e || 0 < e--) && !(n = i.next()).done; )
            o.push(n.value);
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (a) throw a.error;
          }
        }
        return o;
      };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var h = r(14),
      p = r(0),
      d = r(1),
      u = r(5),
      m = r(9),
      y = r(6),
      g = r(3),
      s = r(8),
      i = r(4);
    r(18), r(37), r(38);
    var a = {},
      c = {
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
    function o(t, e) {
      var r = t.stack.env,
        n = r.inRoot;
      r.inRoot = !0;
      var a = new u.default(e, r, t.configuration),
        i = a.mml(),
        o = a.stack.global;
      if (o.leftRoot || o.upRoot) {
        var s = {};
        o.leftRoot && (s.width = o.leftRoot),
          o.upRoot && ((s.voffset = o.upRoot), (s.height = o.upRoot)),
          (i = t.create("node", "mpadded", [i], s));
      }
      return (r.inRoot = n), i;
    }
    (a.Open = function (t, e) {
      t.Push(t.itemFactory.create("open"));
    }),
      (a.Close = function (t, e) {
        t.Push(t.itemFactory.create("close"));
      }),
      (a.Tilde = function (t, e) {
        t.Push(t.create("token", "mtext", {}, i.entities.nbsp));
      }),
      (a.Space = function (t, e) {}),
      (a.Superscript = function (t, e) {
        var r, n, a;
        t.GetNext().match(/\d/) &&
          (t.string =
            t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1));
        var i = t.stack.Top();
        i.isKind("prime")
          ? ((a = (r = f(i.Peek(2), 2))[0]), (n = r[1]), t.stack.Pop())
          : (a = (a = t.stack.Prev()) || t.create("token", "mi", {}, ""));
        var o = p.default.getProperty(a, "movesupsub"),
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
          throw new d.default(
            "DoubleExponent",
            "Double exponent: use braces to clarify"
          );
        (p.default.isType(a, "msubsup") && !p.default.isType(a, "msup")) ||
          (s = o
            ? ((p.default.isType(a, "munderover") &&
                !p.default.isType(a, "mover") &&
                !p.default.getChildAt(a, a.over)) ||
                (p.default.getProperty(a, "movablelimits") &&
                  p.default.isType(a, "mi") &&
                  (a = y.default.mi2mo(t, a)),
                (a = t.create("node", "munderover", [a], { movesupsub: !0 }))),
              a.over)
            : (a = t.create("node", "msubsup", [a])).sup),
          t.Push(
            t.itemFactory
              .create("subsup", a)
              .setProperties({ position: s, primes: n, movesupsub: o })
          );
      }),
      (a.Subscript = function (t, e) {
        var r, n, a;
        t.GetNext().match(/\d/) &&
          (t.string =
            t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1));
        var i = t.stack.Top();
        i.isKind("prime")
          ? ((a = (r = f(i.Peek(2), 2))[0]), (n = r[1]), t.stack.Pop())
          : (a = (a = t.stack.Prev()) || t.create("token", "mi", {}, ""));
        var o = p.default.getProperty(a, "movesupsub"),
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
          throw new d.default(
            "DoubleSubscripts",
            "Double subscripts: use braces to clarify"
          );
        (p.default.isType(a, "msubsup") && !p.default.isType(a, "msup")) ||
          (s = o
            ? ((p.default.isType(a, "munderover") &&
                !p.default.isType(a, "mover") &&
                !p.default.getChildAt(a, a.under)) ||
                (p.default.getProperty(a, "movablelimits") &&
                  p.default.isType(a, "mi") &&
                  (a = y.default.mi2mo(t, a)),
                (a = t.create("node", "munderover", [a], { movesupsub: !0 }))),
              a.under)
            : (a = t.create("node", "msubsup", [a])).sub),
          t.Push(
            t.itemFactory
              .create("subsup", a)
              .setProperties({ position: s, primes: n, movesupsub: o })
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
          throw new d.default(
            "DoubleExponentPrime",
            "Prime causes double exponent: use braces to clarify"
          );
        var n = "";
        for (
          t.i--;
          (n += i.entities.prime),
            t.i++,
            "'" === (e = t.GetNext()) || e === i.entities.rquote;

        );
        n = ["", "\u2032", "\u2033", "\u2034", "\u2057"][n.length] || n;
        var a = t.create("token", "mo", {}, n);
        t.Push(t.itemFactory.create("prime", r, a));
      }),
      (a.Comment = function (t, e) {
        for (; t.i < t.string.length && "\n" !== t.string.charAt(t.i); ) t.i++;
      }),
      (a.Hash = function (t, e) {
        throw new d.default(
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
          n = t.create("node", "TeXAtom", [], { texClass: g.TEXCLASS.CLOSE });
        if ((t.Push(n), !t.stack.Top().isKind("left")))
          throw new d.default(
            "MisplacedMiddle",
            "%1 must be within \\left and \\right",
            t.currentCS
          );
        (n = t.create("token", "mo", { stretchy: !0 }, r)),
          t.Push(n),
          (n = t.create("node", "TeXAtom", [], { texClass: g.TEXCLASS.OPEN })),
          t.Push(n);
      }),
      (a.NamedFn = function (t, e, r) {
        r = r || e.substr(1);
        var n = t.create("token", "mi", { texClass: g.TEXCLASS.OP }, r);
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
            texClass: g.TEXCLASS.OP,
          },
          r
        );
        t.Push(n);
      }),
      (a.Limits = function (t, e, r) {
        var n = t.stack.Prev(!0);
        if (
          !n ||
          (p.default.getTexClass(p.default.getCoreMO(n)) !== g.TEXCLASS.OP &&
            null == p.default.getProperty(n, "movesupsub"))
        )
          throw new d.default(
            "MisplacedLimits",
            "%1 is allowed only on operators",
            t.currentCS
          );
        var a,
          i = t.stack.Top();
        p.default.isType(n, "munderover") && !r
          ? ((a = t.create("node", "msubsup")),
            p.default.copyChildren(n, a),
            (n = i.Last = a))
          : p.default.isType(n, "msubsup") &&
            r &&
            ((a = t.create("node", "munderover")),
            p.default.copyChildren(n, a),
            (n = i.Last = a)),
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
        var a = new u.default(n, t.stack.env, t.configuration).mml();
        (a = r
          ? t.create("node", "mroot", [a, o(t, r)])
          : t.create("node", "msqrt", [a])),
          t.Push(a);
      }),
      (a.Root = function (t, e) {
        var r = t.GetUpTo(e, "\\of"),
          n = t.ParseArg(e),
          a = t.create("node", "mroot", [n, o(t, r)]);
        t.Push(a);
      }),
      (a.MoveRoot = function (t, e, r) {
        if (!t.stack.env.inRoot)
          throw new d.default(
            "MisplacedMoveRoot",
            "%1 can appear only within a root",
            t.currentCS
          );
        if (t.stack.global[r])
          throw new d.default(
            "MultipleMoveRoot",
            "Multiple use of %1",
            t.currentCS
          );
        var n = t.GetArgument(e);
        if (!n.match(/-?[0-9]+/))
          throw new d.default(
            "IntegerArg",
            "The argument to %1 must be an integer",
            t.currentCS
          );
        "-" !== (n = parseInt(n, 10) / 15 + "em").substr(0, 1) && (n = "+" + n),
          (t.stack.global[r] = n);
      }),
      (a.Accent = function (t, e, r, n) {
        var a = t.ParseArg(e),
          i = y.default.getFontDef(t);
        i.accent = !0;
        var o = p.default.createEntity(r),
          s = t.create("token", "mo", i, o);
        p.default.setAttribute(s, "stretchy", !!n);
        var l = p.default.isEmbellished(a) ? p.default.getCoreMO(a) : a;
        p.default.isType(l, "mo") &&
          p.default.setProperties(l, { movablelimits: !1 });
        var u = t.create("node", "munderover");
        p.default.setChild(u, 0, a),
          p.default.setChild(u, 1, null),
          p.default.setChild(u, 2, s);
        var c = t.create("node", "TeXAtom", [u]);
        t.Push(c);
      }),
      (a.UnderOver = function (t, e, r, n, a) {
        var i,
          o = t.ParseArg(e),
          s = p.default.getForm(o);
        ((s && s[3] && s[3].movablelimits) ||
          p.default.getProperty(o, "movablelimits")) &&
          p.default.setProperties(o, { movablelimits: !1 }),
          p.default.isType(o, "munderover") &&
            p.default.isEmbellished(o) &&
            (p.default.setProperties(p.default.getCoreMO(o), {
              lspace: 0,
              rspace: 0,
            }),
            (i = t.create("node", "mo", [], { rspace: 0 })),
            (o = t.create("node", "mrow", [i, o])));
        var l = t.create("node", "munderover", [o]),
          u = p.default.createEntity(r);
        (i = t.create("token", "mo", { stretchy: !0, accent: !a }, u)),
          p.default.setChild(l, "o" === e.charAt(1) ? l.over : l.under, i);
        var c = l;
        n &&
          (c = t.create("node", "TeXAtom", [l], {
            texClass: g.TEXCLASS.OP,
            movesupsub: !0,
          })),
          p.default.setProperty(c, "subsupOK", !0),
          t.Push(c);
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
          i,
          o = { texClass: r };
        if (r === g.TEXCLASS.OP) {
          o.movesupsub = o.movablelimits = !0;
          var s = t.GetArgument(e),
            l = s.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
          (a = l
            ? ((o.mathvariant = m.TexConstant.Variant.NORMAL),
              t.create("token", "mi", o, l[1]))
            : ((i = new u.default(s, t.stack.env, t.configuration).mml()),
              t.create("node", "TeXAtom", [i], o))),
            (n = t.itemFactory.create("fn", a));
        } else (i = t.ParseArg(e)), (n = t.create("node", "TeXAtom", [i], o));
        t.Push(n);
      }),
      (a.MmlToken = function (t, e) {
        var r,
          n = t.GetArgument(e),
          a = t.GetBrackets(e, "").replace(/^\s+/, ""),
          i = t.GetArgument(e),
          o = {};
        try {
          r = t.create("node", n);
        } catch (t) {
          r = null;
        }
        if (!r || !r.isToken)
          throw new d.default("NotMathMLToken", "%1 is not a token element", n);
        for (; "" !== a; ) {
          var s = a.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i);
          if (!s)
            throw new d.default(
              "InvalidMathMLAttr",
              "Invalid MathML attribute: %1",
              a
            );
          if (!r.attributes.hasDefault(s[1]) && !c[s[1]])
            throw new d.default(
              "UnknownAttrForElement",
              "%1 is not a recognized attribute for %2",
              s[1],
              n
            );
          var l = y.default.MmlFilterAttribute(
            t,
            s[1],
            s[2].replace(/^(['"])(.*)\1$/, "$2")
          );
          l &&
            ("true" === l.toLowerCase()
              ? (l = !0)
              : "false" === l.toLowerCase() && (l = !1),
            (o[s[1]] = l)),
            (a = a.substr(s[0].length));
        }
        var u = t.create("text", i);
        r.appendChild(u), p.default.setProperties(r, o), t.Push(r);
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
        var i = t.create("node", "TeXAtom", [a]);
        t.Push(i);
      }),
      (a.Smash = function (t, e) {
        var r = y.default.trimSpaces(t.GetBrackets(e, "")),
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
          t.itemFactory.create("position").setProperties({
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
          i = t.create("node", "mspace", [], {
            width: n,
            height: a,
            mathbackground: t.stack.env.color || "black",
          });
        r &&
          ((i = t.create("node", "mpadded", [i], { voffset: r })),
          r.match(/^\-/)
            ? (p.default.setAttribute(i, "height", r),
              p.default.setAttribute(i, "depth", "+" + r.substr(1)))
            : p.default.setAttribute(i, "height", "+" + r)),
          t.Push(i);
      }),
      (a.MakeBig = function (t, e, r, n) {
        var a = String((n *= 1.2 / 0.85)).replace(/(\.\d\d\d).+/, "$1") + "em",
          i = t.GetDelimiter(e, !0),
          o = t.create(
            "token",
            "mo",
            { minsize: a, maxsize: a, fence: !0, stretchy: !0, symmetric: !0 },
            i
          ),
          s = t.create("node", "TeXAtom", [o], { texClass: r });
        t.Push(s);
      }),
      (a.BuildRel = function (t, e) {
        var r = t.ParseUpTo(e, "\\over"),
          n = t.ParseArg(e),
          a = t.create("node", "munderover");
        p.default.setChild(a, 0, n),
          p.default.setChild(a, 1, null),
          p.default.setChild(a, 2, r);
        var i = t.create("node", "TeXAtom", [a], { texClass: g.TEXCLASS.REL });
        t.Push(i);
      }),
      (a.HBox = function (t, e, r) {
        t.PushAll(y.default.internalMath(t, t.GetArgument(e), r));
      }),
      (a.FBox = function (t, e) {
        var r = y.default.internalMath(t, t.GetArgument(e)),
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
          i = t.create("token", "mo", { stretchy: !1 }, n);
        t.Push(
          t.itemFactory.create("dots").setProperties({ ldots: a, cdots: i })
        );
      }),
      (a.Matrix = function (t, e, r, n, a, i, o, s, l, u) {
        var c = t.GetNext();
        if ("" === c)
          throw new d.default(
            "MissingArgFor",
            "Missing argument for %1",
            t.currentCS
          );
        "{" === c
          ? t.i++
          : ((t.string = c + "}" + t.string.slice(t.i + 1)), (t.i = 0));
        var p = t.itemFactory.create("array").setProperty("requireClose", !0);
        (p.arraydef = { rowspacing: o || "4pt", columnspacing: i || "1em" }),
          l && p.setProperty("isCases", !0),
          u && (p.setProperty("isNumbered", !0), (p.arraydef.side = u)),
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
            var r = t.string, n = 0, a = -1, i = t.i, o = r.length;
            i < o;

          ) {
            var s = r.charAt(i);
            if ("{" === s) n++, i++;
            else if ("}" === s)
              0 === n ? (o = 0) : (0 === --n && a < 0 && (a = i - t.i), i++);
            else {
              if ("&" === s && 0 === n)
                throw new d.default(
                  "ExtraAlignTab",
                  "Extra alignment tab in \\cases text"
                );
              "\\" === s
                ? r.substr(i).match(/^((\\cr)[^a-zA-Z]|\\\\)/)
                  ? (o = 0)
                  : (i += 2)
                : i++;
            }
          }
          var l = r.substr(t.i, i - t.i);
          if (
            !l.match(/^\s*\\text[^a-zA-Z]/) ||
            a !== l.replace(/\s+$/, "").length - 1
          ) {
            var u = y.default.internalMath(t, l, 0);
            t.PushAll(u), (t.i = i);
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
            a = f(y.default.matchDimen(n), 3),
            i = a[0],
            o = a[1];
          a[2];
          if (n && !i)
            throw new d.default(
              "BracketMustBeDimension",
              "Bracket argument to %1 must be a dimension",
              t.currentCS
            );
          r = i + o;
        }
        t.Push(
          t.itemFactory
            .create("cell")
            .setProperties({ isCR: !0, name: e, linebreak: !0 })
        );
        var s,
          l = t.stack.Top();
        if (l instanceof h.ArrayItem) {
          if (r && l.arraydef.rowspacing) {
            var u = l.arraydef.rowspacing.split(/ /);
            if (!l.getProperty("rowspacing")) {
              var c = y.default.dimen2em(u[0]);
              l.setProperty("rowspacing", c);
            }
            for (
              var p = l.getProperty("rowspacing");
              u.length < l.table.length;

            )
              u.push(y.default.Em(p));
            (u[l.table.length - 1] = y.default.Em(
              Math.max(0, p + y.default.dimen2em(r))
            )),
              (l.arraydef.rowspacing = u.join(" "));
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
        if (!(n instanceof h.ArrayItem) || n.Size())
          throw new d.default("Misplaced", "Misplaced %1", t.currentCS);
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
        if (!(r instanceof h.ArrayItem))
          throw new d.default(
            "UnsupportedHFill",
            "Unsupported use of %1",
            t.currentCS
          );
        r.hfill.push(r.Size());
      }),
      (a.BeginEnd = function (t, e) {
        var r = t.GetArgument(e);
        if (r.match(/\\/i))
          throw new d.default("InvalidEnv", "Invalid environment name '%1'", r);
        var n = t.configuration.handlers.get("environment").lookup(r);
        if (n && "\\end" === e) {
          if (!n.args[0]) {
            var a = t.itemFactory.create("end").setProperty("name", r);
            return void t.Push(a);
          }
          t.stack.env.closing = r;
        }
        if (++t.macroCount > t.configuration.options.maxMacros)
          throw new d.default(
            "MaxMacroSub2",
            "MathJax maximum substitution count exceeded; is there a recursive latex environment?"
          );
        t.parse("environment", [t, r]);
      }),
      (a.Array = function (t, e, r, n, a, i, o, s, l) {
        var u = ("c" + (a = a || t.GetArgument("\\begin{" + e.getName() + "}")))
          .replace(/[^clr|:]/g, "")
          .replace(/[^|:]([|:])+/g, "$1");
        a = (a = a
          .replace(/[^clr]/g, "")
          .split("")
          .join(" "))
          .replace(/l/g, "left")
          .replace(/r/g, "right")
          .replace(/c/g, "center");
        var c = t.itemFactory.create("array");
        return (
          (c.arraydef = {
            columnalign: a,
            columnspacing: i || "1em",
            rowspacing: o || "4pt",
          }),
          u.match(/[|:]/) &&
            (u.charAt(0).match(/[|:]/) &&
              (c.frame.push("left"), (c.dashed = ":" === u.charAt(0))),
            u.charAt(u.length - 1).match(/[|:]/) && c.frame.push("right"),
            (u = u.substr(1, u.length - 2)),
            (c.arraydef.columnlines = u
              .split("")
              .join(" ")
              .replace(/[^|: ]/g, "none")
              .replace(/\|/g, "solid")
              .replace(/:/g, "dashed"))),
          r && c.setProperty("open", t.convertDelimiter(r)),
          n && c.setProperty("close", t.convertDelimiter(n)),
          "D" === s
            ? (c.arraydef.displaystyle = !0)
            : s && (c.arraydef.displaystyle = !1),
          "S" === s && (c.arraydef.scriptlevel = 1),
          l && (c.arraydef.useHeight = !1),
          t.Push(e),
          c
        );
      }),
      (a.AlignedArray = function (t, e) {
        var r = t.GetBrackets("\\begin{" + e.getName() + "}"),
          n = a.Array(t, e);
        return y.default.setArrayAlign(n, r);
      }),
      (a.Equation = function (t, e, r) {
        return (
          t.Push(e),
          y.default.checkEqnEnv(t),
          t.itemFactory.create("equation", r).setProperty("name", e.getName())
        );
      }),
      (a.EqnArray = function (t, e, r, n, a, i) {
        t.Push(e),
          n && y.default.checkEqnEnv(t),
          (a = (a = a
            .replace(/[^clr]/g, "")
            .split("")
            .join(" "))
            .replace(/l/g, "left")
            .replace(/r/g, "right")
            .replace(/c/g, "center"));
        var o = t.itemFactory.create(
          "eqnarray",
          e.getName(),
          r,
          n,
          t.stack.global
        );
        return (
          (o.arraydef = {
            displaystyle: !0,
            columnalign: a,
            columnspacing: i || "1em",
            rowspacing: "3pt",
            side: t.options.tagSide,
            minlabelspacing: t.options.tagIndent,
          }),
          o
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
            throw new d.default("MultipleCommand", "Multiple %1", t.currentCS);
          if (
            ((t.tags.label = r),
            (t.tags.allLabels[r] || t.tags.labels[r]) &&
              !t.options.ignoreDuplicateLabels)
          )
            throw new d.default(
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
        var i = a.tag;
        r && (i = t.tags.formatTag(i));
        var o = t.create("node", "mrow", y.default.internalMath(t, i), {
          href: t.tags.formatUrl(a.id, t.options.baseURL),
          class: "MathJax_ref",
        });
        t.Push(o);
      }),
      (a.Macro = function (t, e, r, n, a) {
        if (n) {
          var i = [];
          if (null != a) {
            var o = t.GetBrackets(e);
            i.push(null == o ? a : o);
          }
          for (var s = i.length; s < n; s++) i.push(t.GetArgument(e));
          r = y.default.substituteArgs(t, i, r);
        }
        if (
          ((t.string = y.default.addArgs(t, r, t.string.slice(t.i))),
          (t.i = 0),
          ++t.macroCount > t.configuration.options.maxMacros)
        )
          throw new d.default(
            "MaxMacroSub1",
            "MathJax maximum macro substitution count exceeded; is there a recursive macro call?"
          );
      }),
      (a.MathChoice = function (t, e) {
        var r = t.ParseArg(e),
          n = t.ParseArg(e),
          a = t.ParseArg(e),
          i = t.ParseArg(e);
        t.Push(t.create("node", "mathchoice", [r, n, a, i]));
      }),
      (e.default = a);
  },
  function (t, e, r) {
    "use strict";
    r(27), (0, r(39).registerTeX)(["base"]);
  },
  function (t, e, r) {
    "use strict";
    var n = r(28),
      a = O(r(15)),
      i = O(r(12)),
      o = O(r(17)),
      s = O(r(16)),
      l = O(r(2)),
      u = O(r(22)),
      c = O(r(0)),
      p = O(r(13)),
      f = O(r(20)),
      h = O(r(6)),
      d = O(r(19)),
      m = O(r(11)),
      y = O(r(21)),
      g = O(r(23)),
      v = O(r(10)),
      b = O(r(8)),
      T = O(r(9)),
      S = O(r(1)),
      P = O(r(5)),
      x = O(r(24)),
      M = O(r(14)),
      A = O(r(25));
    function O(t) {
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
            Configuration: i,
            FilterUtil: o,
            FindTeX: s,
            MapHandler: l,
            NodeFactory: u,
            NodeUtil: c,
            ParseMethods: p,
            ParseOptions: f,
            ParseUtil: h,
            Stack: d,
            StackItem: m,
            StackItemFactory: y,
            Symbol: g,
            SymbolMap: v,
            Tags: b,
            TexConstants: T,
            TexError: S,
            TexParser: P,
            base: { BaseConfiguration: x, BaseItems: M, BaseMethods: A },
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
    var n = r(10),
      a = r(9),
      i = r(25),
      o = r(13),
      s = r(3);
    new n.RegExpMap("letter", o.default.variable, /[a-z]/i),
      new n.RegExpMap("digit", o.default.digit, /[0-9.,]/),
      new n.RegExpMap("command", o.default.controlSequence, /^\\/),
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
        i.default
      ),
      new n.CharacterMap("mathchar0mi", o.default.mathchar0mi, {
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
      new n.CharacterMap("mathchar0mo", o.default.mathchar0mo, {
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
      new n.CharacterMap("mathchar7", o.default.mathchar7, {
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
      new n.DelimiterMap("delimiter", o.default.delimiter, {
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
        i.default
      );
    new n.EnvironmentMap(
      "environment",
      o.default.environment,
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
      i.default
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
      r(4).add(
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
      r(4).add(
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
    var n = r(15),
      a = r(7);
  },
]);
