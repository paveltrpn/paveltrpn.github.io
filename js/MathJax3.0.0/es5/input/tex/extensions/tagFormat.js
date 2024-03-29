!(function (o) {
  var e = {};
  function r(t) {
    if (e[t]) return e[t].exports;
    var n = (e[t] = { i: t, l: !1, exports: {} });
    return o[t].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = o),
    (r.c = e),
    (r.d = function (t, n, o) {
      r.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: o });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (n, t) {
      if ((1 & t && (n = r(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var e in n)
          r.d(
            o,
            e,
            function (t) {
              return n[t];
            }.bind(null, e)
          );
      return o;
    }),
    (r.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (r.p = ""),
    r((r.s = 0));
})([
  function (t, n, o) {
    "use strict";
    o(1);
  },
  function (t, n, o) {
    "use strict";
    var e = o(2),
      r = (function (t) {
        {
          if (t && t.__esModule) return t;
          var n = {};
          if (null != t)
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
          return (n.default = t), n;
        }
      })(o(3));
    (0, e.combineWithMathJax)({
      _: { input: { tex: { tag_format: { TagFormatConfiguration: r } } } },
    });
  },
  function (t, n, o) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.combineConfig = MathJax._.components.global.combineConfig),
      (n.combineDefaults = MathJax._.components.global.combineDefaults),
      (n.combineWithMathJax = MathJax._.components.global.combineWithMathJax),
      (n.MathJax = MathJax._.components.global.MathJax);
  },
  function (t, n, o) {
    "use strict";
    var e,
      u =
        (this && this.__extends) ||
        ((e = function (t, n) {
          return (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, n) {
                t.__proto__ = n;
              }) ||
            function (t, n) {
              for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o]);
            })(t, n);
        }),
        function (t, n) {
          function o() {
            this.constructor = t;
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o()));
        });
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = o(4),
      s = o(5),
      c = 0;
    function a(t, o) {
      var n,
        e = s.TagsFactory.create(o.parseOptions.options.tags).constructor,
        r =
          (u(a, (n = e)),
          (a.prototype.formatNumber = function (t) {
            return o.parseOptions.options.tagFormat.number(t);
          }),
          (a.prototype.formatTag = function (t) {
            return o.parseOptions.options.tagFormat.tag(t);
          }),
          (a.prototype.formatId = function (t) {
            return o.parseOptions.options.tagFormat.id(t);
          }),
          (a.prototype.formatUrl = function (t, n) {
            return o.parseOptions.options.tagFormat.url(t, n);
          }),
          a);
      function a() {
        return (null !== n && n.apply(this, arguments)) || this;
      }
      var i = "configTags-" + ++c;
      s.TagsFactory.add(i, r), (o.parseOptions.options.tags = i);
    }
    (n.tagFormatConfig = a),
      (n.TagformatConfiguration = r.Configuration.create("tagFormat", {
        config: a,
        options: {
          tagFormat: {
            number: function (t) {
              return t.toString();
            },
            tag: function (t) {
              return "(" + t + ")";
            },
            id: function (t) {
              return "mjx-eqn-" + t.replace(/\s/g, "_");
            },
            url: function (t, n) {
              return n + "#" + encodeURIComponent(t);
            },
          },
        },
      }));
  },
  function (t, n, o) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.Configuration = MathJax._.input.tex.Configuration.Configuration),
      (n.ConfigurationHandler =
        MathJax._.input.tex.Configuration.ConfigurationHandler);
  },
  function (t, n, o) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.Label = MathJax._.input.tex.Tags.Label),
      (n.TagInfo = MathJax._.input.tex.Tags.TagInfo),
      (n.AbstractTags = MathJax._.input.tex.Tags.AbstractTags),
      (n.NoTags = MathJax._.input.tex.Tags.NoTags),
      (n.AllTags = MathJax._.input.tex.Tags.AllTags),
      (n.TagsFactory = MathJax._.input.tex.Tags.TagsFactory);
  },
]);
