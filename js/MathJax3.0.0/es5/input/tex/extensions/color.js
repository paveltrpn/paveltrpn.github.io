!(function (o) {
  var r = {};
  function n(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return o[e].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
  }
  (n.m = o),
    (n.c = r),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 2));
})([
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = o(8),
      d = o(9);
    function c(e) {
      var t = "+" + e,
        o = e.replace(/^.*?([a-z]*)$/, "$1");
      return {
        width: "+" + 2 * parseFloat(t) + o,
        height: t,
        depth: t,
        lspace: e,
      };
    }
    (t.ColorMethods = {}),
      (t.ColorMethods.Color = function (e, t) {
        var o = e.GetBrackets(t, ""),
          r = e.GetArgument(t),
          n = e.options.color.model.getColor(o, r),
          a = e.itemFactory
            .create("style")
            .setProperties({ styles: { mathcolor: n } });
        (e.stack.env.color = n), e.Push(a);
      }),
      (t.ColorMethods.TextColor = function (e, t) {
        var o = e.GetBrackets(t, ""),
          r = e.GetArgument(t),
          n = e.options.color.model.getColor(o, r),
          a = e.stack.env.color;
        e.stack.env.color = n;
        var l = e.ParseArg(t);
        a ? (e.stack.env.color = a) : delete e.stack.env.color;
        var i = e.create("node", "mstyle", [l], { mathcolor: n });
        e.Push(i);
      }),
      (t.ColorMethods.DefineColor = function (e, t) {
        var o = e.GetArgument(t),
          r = e.GetArgument(t),
          n = e.GetArgument(t);
        e.options.color.model.defineColor(r, o, n);
      }),
      (t.ColorMethods.ColorBox = function (e, t) {
        var o = e.GetArgument(t),
          r = d.default.internalMath(e, e.GetArgument(t)),
          n = e.options.color,
          a = n.model,
          l = e.create("node", "mpadded", r, {
            mathbackground: a.getColor("named", o),
          });
        u.default.setProperties(l, c(n.padding)), e.Push(l);
      }),
      (t.ColorMethods.FColorBox = function (e, t) {
        var o = e.GetArgument(t),
          r = e.GetArgument(t),
          n = d.default.internalMath(e, e.GetArgument(t)),
          a = e.options.color,
          l = a.model,
          i = e.create("node", "mpadded", n, {
            mathbackground: l.getColor("named", r),
            style:
              "border: " + a.borderWidth + " solid " + l.getColor("named", o),
          });
        u.default.setProperties(i, c(a.padding)), e.Push(i);
      });
  },
  function (e, t, o) {
    "use strict";
    var c =
      (this && this.__values) ||
      function (e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          o = t && e[t],
          r = 0;
        if (o) return o.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = o(10),
      r = o(11),
      n = new Map(),
      a =
        ((l.prototype.normalizeColor = function (e, t) {
          if (!e || "named" === e) return t;
          if (n.has(e)) return n.get(e)(t);
          throw new s.default(
            "UndefinedColorModel",
            "Color model '%1' not defined",
            e
          );
        }),
        (l.prototype.getColor = function (e, t) {
          return e && "named" !== e
            ? this.normalizeColor(e, t)
            : this.getColorByName(t);
        }),
        (l.prototype.getColorByName = function (e) {
          return this.userColors.has(e)
            ? this.userColors.get(e)
            : r.COLORS.has(e)
            ? r.COLORS.get(e)
            : e;
        }),
        (l.prototype.defineColor = function (e, t, o) {
          var r = this.normalizeColor(e, o);
          this.userColors.set(t, r);
        }),
        l);
    function l() {
      this.userColors = new Map();
    }
    (t.ColorModel = a),
      n.set("rgb", function (e) {
        var t,
          o,
          r = e.trim().split(/\s*,\s*/),
          n = "#";
        if (3 !== r.length)
          throw new s.default(
            "ModelArg1",
            "Color values for the %1 model require 3 numbers",
            "rgb"
          );
        try {
          for (var a = c(r), l = a.next(); !l.done; l = a.next()) {
            var i = l.value;
            if (!i.match(/^(\d+(\.\d*)?|\.\d+)$/))
              throw new s.default(
                "InvalidDecimalNumber",
                "Invalid decimal number"
              );
            var u = parseFloat(i);
            if (u < 0 || 1 < u)
              throw new s.default(
                "ModelArg2",
                "Color values for the %1 model must be between %2 and %3",
                "rgb",
                "0",
                "1"
              );
            var d = Math.floor(255 * u).toString(16);
            d.length < 2 && (d = "0" + d), (n += d);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            l && !l.done && (o = a.return) && o.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        return n;
      }),
      n.set("RGB", function (e) {
        var t,
          o,
          r = e.trim().split(/\s*,\s*/),
          n = "#";
        if (3 !== r.length)
          throw new s.default(
            "ModelArg1",
            "Color values for the %1 model require 3 numbers",
            "RGB"
          );
        try {
          for (var a = c(r), l = a.next(); !l.done; l = a.next()) {
            var i = l.value;
            if (!i.match(/^\d+$/))
              throw new s.default("InvalidNumber", "Invalid number");
            var u = parseInt(i);
            if (255 < u)
              throw new s.default(
                "ModelArg2",
                "Color values for the %1 model must be between %2 and %3",
                "RGB",
                "0",
                "255"
              );
            var d = u.toString(16);
            d.length < 2 && (d = "0" + d), (n += d);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            l && !l.done && (o = a.return) && o.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        return n;
      }),
      n.set("gray", function (e) {
        if (!e.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/))
          throw new s.default("InvalidDecimalNumber", "Invalid decimal number");
        var t = parseFloat(e);
        if (t < 0 || 1 < t)
          throw new s.default(
            "ModelArg2",
            "Color values for the %1 model must be between %2 and %3",
            "gray",
            "0",
            "1"
          );
        var o = Math.floor(255 * t).toString(16);
        return o.length < 2 && (o = "0" + o), "#" + o + o + o;
      });
  },
  function (e, t, o) {
    "use strict";
    o(3);
  },
  function (e, t, o) {
    "use strict";
    var r = o(4),
      n = i(o(5)),
      a = i(o(0)),
      l = i(o(1));
    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return (t.default = e), t;
    }
    (0, r.combineWithMathJax)({
      _: {
        input: {
          tex: {
            color: { ColorConfiguration: n, ColorMethods: a, ColorUtil: l },
          },
        },
      },
    });
  },
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.combineConfig = MathJax._.components.global.combineConfig),
      (t.combineDefaults = MathJax._.components.global.combineDefaults),
      (t.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (t.MathJax = MathJax._.components.global.MathJax);
  },
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = o(6),
      n = o(7),
      a = o(0),
      l = o(1);
    new r.CommandMap(
      "color",
      {
        color: "Color",
        textcolor: "TextColor",
        definecolor: "DefineColor",
        colorbox: "ColorBox",
        fcolorbox: "FColorBox",
      },
      a.ColorMethods
    );
    t.ColorConfiguration = n.Configuration.create("color", {
      handler: { macro: ["color"] },
      options: { color: { padding: "5px", borderWidth: "2px" } },
      config: function (e, t) {
        t.parseOptions.options.color.model = new l.ColorModel();
      },
    });
  },
  function (e, t, o) {
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
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (t.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.NodeUtil.default);
  },
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.ParseUtil.default);
  },
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = MathJax._.input.tex.TexError.default);
  },
  function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.COLORS = new Map([
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
]);
