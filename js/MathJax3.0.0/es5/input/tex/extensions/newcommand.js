!(function (a) {
  var n = {};
  function r(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return a[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = a),
    (r.c = n),
    (r.d = function (e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          r.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 7));
})([
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.TexError.default);
  },
  function (e, t, a) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
            })(e, t);
        }),
        function (e, t) {
          function a() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((a.prototype = t.prototype), new a()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i,
      o = a(0),
      u = a(12),
      l =
        ((i = u.BaseItem),
        r(s, i),
        Object.defineProperty(s.prototype, "kind", {
          get: function () {
            return "beginEnv";
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(s.prototype, "isOpen", {
          get: function () {
            return !0;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (s.prototype.checkItem = function (e) {
          if (e.isKind("end")) {
            if (e.getName() !== this.getName())
              throw new o.default(
                "EnvBadEnd",
                "\\begin{%1} ended with \\end{%2}",
                this.getName(),
                e.getName()
              );
            return [[this.factory.create("mml", this.toMml())], !0];
          }
          if (e.isKind("stop"))
            throw new o.default(
              "EnvMissingEnd",
              "Missing \\end{%1}",
              this.getName()
            );
          return i.prototype.checkItem.call(this, e);
        }),
        s);
    function s() {
      return (null !== i && i.apply(this, arguments)) || this;
    }
    t.BeginEnvItem = l;
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MapHandler = MathJax._.input.tex.MapHandler.MapHandler),
      (t.ExtensionMaps = MathJax._.input.tex.MapHandler.ExtensionMaps),
      (t.SubHandler = MathJax._.input.tex.MapHandler.SubHandler),
      (t.SubHandlers = MathJax._.input.tex.MapHandler.SubHandlers);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = a(0),
      c = a(4),
      n = a(14),
      f = a(5),
      d = a(6),
      m = {
        NewCommand: function (e, t) {
          var a = f.default.trimSpaces(e.GetArgument(t)),
            n = e.GetBrackets(t),
            r = e.GetBrackets(t),
            i = e.GetArgument(t);
          if (
            ("\\" === a.charAt(0) && (a = a.substr(1)),
            !a.match(/^(.|[a-z]+)$/i))
          )
            throw new s.default(
              "IllegalControlSequenceName",
              "Illegal control sequence name for %1",
              t
            );
          if (n && !(n = f.default.trimSpaces(n)).match(/^[0-9]+$/))
            throw new s.default(
              "IllegalParamNumber",
              "Illegal number of parameters specified in %1",
              t
            );
          d.default.addMacro(e, a, m.Macro, [i, n, r]);
        },
        NewEnvironment: function (e, t) {
          var a = f.default.trimSpaces(e.GetArgument(t)),
            n = e.GetBrackets(t),
            r = e.GetBrackets(t),
            i = e.GetArgument(t),
            o = e.GetArgument(t);
          if (n && !(n = f.default.trimSpaces(n)).match(/^[0-9]+$/))
            throw new s.default(
              "IllegalParamNumber",
              "Illegal number of parameters specified in %1",
              t
            );
          d.default.addEnvironment(e, a, m.BeginEnv, [!0, i, o, n, r]);
        },
        MacroDef: function (e, t) {
          var a = d.default.GetCSname(e, t),
            n = d.default.GetTemplate(e, t, "\\" + a),
            r = e.GetArgument(t);
          n instanceof Array
            ? d.default.addMacro(e, a, m.MacroWithTemplate, [r].concat(n))
            : d.default.addMacro(e, a, m.Macro, [r, n]);
        },
        Let: function (e, t) {
          var a = d.default.GetCSname(e, t),
            n = e.GetNext();
          "=" === n && (e.i++, (n = e.GetNext()));
          var r = e.configuration.handlers;
          if ("\\" !== n) {
            e.i++;
            var i = r.get("delimiter").lookup(n);
            i
              ? d.default.addDelimiter(e, "\\" + a, i.char, i.attributes)
              : d.default.addMacro(e, a, m.Macro, [n]);
          } else {
            t = d.default.GetCSname(e, t);
            var o = r.get("delimiter").lookup("\\" + t);
            if (o)
              return void d.default.addDelimiter(
                e,
                "\\" + a,
                o.char,
                o.attributes
              );
            var u = r.get("macro").applicable(t);
            if (!u) return;
            if (u instanceof c.MacroMap) {
              var l = u.lookup(t);
              return void d.default.addMacro(e, a, l.func, l.args, l.symbol);
            }
            o = u.lookup(t);
            var s = d.default.disassembleSymbol(a, o);
            d.default.addMacro(
              e,
              a,
              function (e, t) {
                for (var a = [], n = 2; n < arguments.length; n++)
                  a[n - 2] = arguments[n];
                var r = d.default.assembleSymbol(a);
                return u.parser(e, r);
              },
              s
            );
          }
        },
        MacroWithTemplate: function (e, t, a, n) {
          for (var r = [], i = 4; i < arguments.length; i++)
            r[i - 4] = arguments[i];
          var o = parseInt(n, 10);
          if (o) {
            var u = [];
            if ((e.GetNext(), r[0] && !d.default.MatchParam(e, r[0])))
              throw new s.default(
                "MismatchUseDef",
                "Use of %1 doesn't match its definition",
                t
              );
            for (var l = 0; l < o; l++)
              u.push(d.default.GetParameter(e, t, r[l + 1]));
            a = f.default.substituteArgs(e, u, a);
          }
          if (
            ((e.string = f.default.addArgs(e, a, e.string.slice(e.i))),
            (e.i = 0),
            ++e.macroCount > e.configuration.options.maxMacros)
          )
            throw new s.default(
              "MaxMacroSub1",
              "MathJax maximum macro substitution count exceeded; is here a recursive macro call?"
            );
        },
        BeginEnv: function (e, t, a, n, r, i) {
          if (t.getProperty("end") && e.stack.env.closing === t.getName()) {
            delete e.stack.env.closing;
            var o = e.string.slice(e.i);
            return (
              (e.string = n),
              (e.i = 0),
              e.Parse(),
              (e.string = o),
              (e.i = 0),
              e.itemFactory.create("end").setProperty("name", t.getName())
            );
          }
          if (r) {
            var u = [];
            if (null != i) {
              var l = e.GetBrackets("\\begin{" + t.getName() + "}");
              u.push(null == l ? i : l);
            }
            for (var s = u.length; s < r; s++)
              u.push(e.GetArgument("\\begin{" + t.getName() + "}"));
            (a = f.default.substituteArgs(e, u, a)),
              (n = f.default.substituteArgs(e, [], n));
          }
          return (
            (e.string = f.default.addArgs(e, a, e.string.slice(e.i))),
            (e.i = 0),
            e.itemFactory.create("beginEnv").setProperty("name", t.getName())
          );
        },
      };
    (m.Macro = n.default.Macro), (t.default = m);
  },
  function (e, t, a) {
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
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.ParseUtil.default);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      r,
      i = a(5),
      l = a(0),
      o = a(15),
      u = a(2);
    function s(e, t) {
      return e.string.substr(e.i, t.length) !== t
        ? 0
        : t.match(/\\[a-z]+$/i) &&
          e.string.charAt(e.i + t.length).match(/[a-z]/i)
        ? 0
        : ((e.i += t.length), 1);
    }
    ((r = n = n || {}).disassembleSymbol = function (e, t) {
      var a = [e, t.char];
      if (t.attributes)
        for (var n in t.attributes) a.push(n), a.push(t.attributes[n]);
      return a;
    }),
      (r.assembleSymbol = function (e) {
        for (var t = e[0], a = e[1], n = {}, r = 2; r < e.length; r += 2)
          n[e[r]] = e[r + 1];
        return new o.Symbol(t, a, n);
      }),
      (r.GetCSname = function (e, t) {
        if ("\\" !== e.GetNext())
          throw new l.default(
            "MissingCS",
            "%1 must be followed by a control sequence",
            t
          );
        return i.default.trimSpaces(e.GetArgument(t)).substr(1);
      }),
      (r.GetTemplate = function (e, t, a) {
        for (
          var n = e.GetNext(), r = [], i = 0, o = e.i;
          e.i < e.string.length;

        ) {
          if ("#" === (n = e.GetNext())) {
            if (
              (o !== e.i && (r[i] = e.string.substr(o, e.i - o)),
              !(n = e.string.charAt(++e.i)).match(/^[1-9]$/))
            )
              throw new l.default(
                "CantUseHash2",
                "Illegal use of # in template for %1",
                a
              );
            if (parseInt(n) !== ++i)
              throw new l.default(
                "SequentialParam",
                "Parameters for %1 must be numbered sequentially",
                a
              );
            o = e.i + 1;
          } else if ("{" === n)
            return (
              o !== e.i && (r[i] = e.string.substr(o, e.i - o)),
              0 < r.length ? [i.toString()].concat(r) : i
            );
          e.i++;
        }
        throw new l.default(
          "MissingReplacementString",
          "Missing replacement string for definition of %1",
          t
        );
      }),
      (r.GetParameter = function (e, t, a) {
        if (null == a) return e.GetArgument(t);
        for (var n = e.i, r = 0, i = 0; e.i < e.string.length; ) {
          var o = e.string.charAt(e.i);
          if ("{" === o) e.i === n && (i = 1), e.GetArgument(t), (r = e.i - n);
          else {
            if (s(e, a)) return i && (n++, (r -= 2)), e.string.substr(n, r);
            if ("\\" === o) {
              e.i++, r++, (i = 0);
              var u = e.string.substr(e.i).match(/[a-z]+|./i);
              u && ((e.i += u[0].length), (r = e.i - n));
            } else e.i++, r++, (i = 0);
          }
        }
        throw new l.default("RunawayArgument", "Runaway argument for %1?", t);
      }),
      (r.MatchParam = s),
      (r.addDelimiter = function (e, t, a, n) {
        e.configuration.handlers
          .retrieve(u.ExtensionMaps.NEW_DELIMITER)
          .add(t, new o.Symbol(t, a, n));
      }),
      (r.addMacro = function (e, t, a, n, r) {
        void 0 === r && (r = ""),
          e.configuration.handlers
            .retrieve(u.ExtensionMaps.NEW_COMMAND)
            .add(t, new o.Macro(r || t, a, n));
      }),
      (r.addEnvironment = function (e, t, a, n) {
        e.configuration.handlers
          .retrieve(u.ExtensionMaps.NEW_ENVIRONMENT)
          .add(t, new o.Macro(t, a, n));
      }),
      (t.default = n);
  },
  function (e, t, a) {
    "use strict";
    a(8);
  },
  function (e, t, a) {
    "use strict";
    var n = a(9),
      r = l(a(10)),
      i = l(a(1)),
      o = l(a(3)),
      u = l(a(6));
    function l(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
      return (t.default = e), t;
    }
    (0, n.combineWithMathJax)({
      _: {
        input: {
          tex: {
            newcommand: {
              NewcommandConfiguration: r,
              NewcommandItems: i,
              NewcommandMethods: o,
              NewcommandUtil: u,
            },
          },
        },
      },
    });
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.combineConfig = MathJax._.components.global.combineConfig),
      (t.combineDefaults = MathJax._.components.global.combineDefaults),
      (t.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (t.MathJax = MathJax._.components.global.MathJax);
  },
  function (e, t, a) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = a(11),
      i = a(1),
      o = a(2);
    a(13);
    t.NewcommandConfiguration = r.Configuration.create("newcommand", {
      handler: { macro: ["Newcommand-macros"] },
      items: ((n = {}), (n[i.BeginEnvItem.prototype.kind] = i.BeginEnvItem), n),
      options: { maxMacros: 1e3 },
      init: function (e) {
        e.handler.macro.indexOf(o.ExtensionMaps.NEW_COMMAND) < 0 &&
          e.append(r.Configuration.extension());
      },
    });
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (t.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MmlStack = MathJax._.input.tex.StackItem.MmlStack),
      (t.BaseItem = MathJax._.input.tex.StackItem.BaseItem);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = a(3);
    new (a(4).CommandMap)(
      "Newcommand-macros",
      {
        newcommand: "NewCommand",
        renewcommand: "NewCommand",
        newenvironment: "NewEnvironment",
        renewenvironment: "NewEnvironment",
        def: "MacroDef",
        let: "Let",
      },
      n.default
    );
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.base.BaseMethods.default);
  },
  function (e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Symbol = MathJax._.input.tex.Symbol.Symbol),
      (t.Macro = MathJax._.input.tex.Symbol.Macro);
  },
]);
