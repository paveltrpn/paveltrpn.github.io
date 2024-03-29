!(function (r) {
  var a = {};
  function n(t) {
    if (a[t]) return a[t].exports;
    var e = (a[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = r),
    (n.c = a),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
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
    n((n.s = 0));
})([
  function (t, e, r) {
    "use strict";
    (0, r(1).loadLatest)();
  },
  function (t, e, r) {
    "use strict";
    var l =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            a = 0;
          if (r) return r.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && a >= t.length && (t = void 0),
                  { value: t && t[a++], done: !t }
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
          var a,
            n,
            o = r.call(t),
            i = [];
          try {
            for (; (void 0 === e || 0 < e--) && !(a = o.next()).done; )
              i.push(a.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return i;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = new Map([
        [
          "cdnjs.cloudflare.com",
          {
            api: "https://api.cdnjs.com/libraries/mathjax?fields=version",
            key: "version",
            base: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/",
          },
        ],
        [
          "rawcdn.githack.com",
          {
            api: "https://api.github.com/repos/mathjax/mathjax/releases/latest",
            key: "tag_name",
            base: "https://rawcdn.githack.com/mathjax/MathJax/",
          },
        ],
        [
          "gitcdn.xyz",
          {
            api: "https://api.github.com/repos/mathjax/mathjax/releases/latest",
            key: "tag_name",
            base: "https://gitcdn.xyz/mathjax/MathJax/",
          },
        ],
        [
          "cdn.statically.io",
          {
            api: "https://api.github.com/repos/mathjax/mathjax/releases/latest",
            key: "tag_name",
            base: "https://cdn.statically.io/gh/mathjax/MathJax/",
          },
        ],
        [
          "unpkg.com",
          {
            api: "https://api.github.com/repos/mathjax/mathjax/releases/latest",
            key: "tag_name",
            base: "https://unpkg.com/mathjax@",
          },
        ],
        [
          "cdn.jsdelivr.net",
          {
            api: "https://api.github.com/repos/mathjax/mathjax/releases/latest",
            key: "tag_name",
            base: "https://cdn.jsdelivr.net/npm/mathjax@",
          },
        ],
      ]),
      o = {
        api: "https://api.github.com/repos/mathjax/mathjax/releases",
        key: "tag_name",
      },
      n = 3,
      i = "mjx-latest-version",
      c = 6048e5,
      s = null;
    function d(t) {
      console && console.error && console.error("MathJax(latest.js): " + t);
    }
    function f(t, e) {
      void 0 === e && (e = null), t.parentNode.removeChild(t);
      var r = t.src,
        a = r.replace(/.*?\/latest\.js(\?|$)/, "");
      "" === a && ((a = "startup.js"), (r = r.replace(/\?$/, "") + "?" + a));
      var n = (r.match(/(\d+\.\d+\.\d+)(\/es\d+)?\/latest.js\?/) || [
          "",
          "",
        ])[1],
        o = (r.match(/(\/es\d+)\/latest.js\?/) || ["", ""])[1] || "";
      return { tag: t, src: r, id: t.id, version: n, dir: o, file: a, cdn: e };
    }
    function p(t) {
      var e, r;
      try {
        for (var a = l(u.keys()), n = a.next(); !n.done; n = a.next()) {
          var o = n.value,
            i = u.get(o),
            c = i.base,
            s = t.src;
          if (s && s.substr(0, c.length) === c && s.match(/\/latest\.js(\?|$)/))
            return f(t, i);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          n && !n.done && (r = a.return) && r.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
      return null;
    }
    function h(t, e) {
      var r = document.createElement("script");
      (r.type = "text/javascript"),
        (r.async = !0),
        (r.src = t),
        e && (r.id = e);
      var a =
        document.head ||
        document.getElementsByTagName("head")[0] ||
        document.body;
      a ? a.appendChild(r) : d("Can't find the document <head> element");
    }
    function m() {
      s
        ? h(s.src.replace(/\/latest\.js\?/, "/"), s.id)
        : d("Can't determine the URL for loading MathJax");
    }
    function y(t) {
      s.version && s.version !== t && (s.file = "latest.js?" + s.file),
        h(s.cdn.base + t + s.dir + "/" + s.file, s.id);
    }
    function v(t) {
      return (
        parseInt(t.split(/\./)[0]) === n &&
        !t.match(/-(beta|rc)/) &&
        ((function (t) {
          try {
            var e = t + " " + Date.now();
            localStorage.setItem(i, e);
          } catch (t) {}
        })(t),
        y(t),
        !0)
      );
    }
    function j(t, e, r) {
      var a = (function () {
        if (window.XMLHttpRequest) return new XMLHttpRequest();
        if (window.ActiveXObject) {
          try {
            return new window.ActiveXObject("Msxml2.XMLHTTP");
          } catch (t) {}
          try {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
          } catch (t) {}
        }
      })();
      a
        ? ((a.onreadystatechange = function () {
            4 === a.readyState &&
              (200 === a.status
                ? e(JSON.parse(a.responseText)) || r()
                : (d("Problem acquiring MathJax version: status = " + a.status),
                  r()));
          }),
          a.open("GET", t.api, !0),
          a.send(null))
        : (d("Can't create XMLHttpRequest object"), r());
    }
    function b() {
      j(
        s.cdn,
        function (t) {
          return (
            t instanceof Array && (t = t[0]),
            v(t[s.cdn.key]) ||
              j(
                o,
                function (t) {
                  var e, r;
                  if (t instanceof Array) {
                    try {
                      for (var a = l(t), n = a.next(); !n.done; n = a.next())
                        if (v(n.value[o.key])) return !0;
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        n && !n.done && (r = a.return) && r.call(a);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    return !1;
                  }
                },
                m
              ),
            !0
          );
        },
        m
      );
    }
    e.loadLatest = function () {
      if (
        (s = (function () {
          var e, t;
          if (document.currentScript) return f(document.currentScript);
          var r = document.getElementById("MathJax-script");
          if (r && "script" === r.nodeName.toLowerCase()) return p(r);
          var a = document.getElementsByTagName("script");
          try {
            for (
              var n = l(Array.from(a)), o = n.next();
              !o.done;
              o = n.next()
            ) {
              var i = p(o.value);
              if (i) return i;
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
          return null;
        })()) &&
        s.cdn
      ) {
        var t = (function () {
          try {
            var t = a(localStorage.getItem(i).split(/ /), 2),
              e = t[0],
              r = t[1];
            if (r && Date.now() - parseInt(r) < c) return e;
          } catch (t) {}
          return null;
        })();
        t ? y(t) : b();
      } else m();
    };
  },
]);
