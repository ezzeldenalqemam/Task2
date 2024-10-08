var tippy = (function (t) {
  "use strict";
  t = t && t.hasOwnProperty("default") ? t.default : t;
  function e() {
    return (e =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }).apply(this, arguments);
  }
  var n = { passive: !0 };
  function r(t, e) {
    t.innerHTML = e;
  }
  function i(t) {
    return !(!t || !t._tippy || t._tippy.reference !== t);
  }
  function o(t, e) {
    return {}.hasOwnProperty.call(t, e);
  }
  function a(t) {
    return c(t)
      ? [t]
      : (function (t) {
          return s(t, "NodeList");
        })(t)
      ? y(t)
      : Array.isArray(t)
      ? t
      : y(document.querySelectorAll(t));
  }
  function p(t, e, n) {
    if (Array.isArray(t)) {
      var r = t[e];
      return null == r ? (Array.isArray(n) ? n[e] : n) : r;
    }
    return t;
  }
  function u(t, e) {
    return t && t.modifiers && t.modifiers[e];
  }
  function s(t, e) {
    var n = {}.toString.call(t);
    return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1;
  }
  function c(t) {
    return s(t, "Element");
  }
  function l(t) {
    return s(t, "MouseEvent");
  }
  function f(t, e) {
    return "function" == typeof t ? t.apply(void 0, e) : t;
  }
  function d(t, e, n, r) {
    t.filter(function (t) {
      return t.name === e;
    })[0][n] = r;
  }
  function v() {
    return document.createElement("div");
  }
  function m(t, e) {
    t.forEach(function (t) {
      t && (t.style.transitionDuration = e + "ms");
    });
  }
  function g(t, e) {
    t.forEach(function (t) {
      t && t.setAttribute("data-state", e);
    });
  }
  function h(t, e) {
    return 0 === e
      ? t
      : function (r) {
          clearTimeout(n),
            (n = setTimeout(function () {
              t(r);
            }, e));
        };
    var n;
  }
  function b(t, e, n) {
    t && t !== e && t.apply(void 0, n);
  }
  function y(t) {
    return [].slice.call(t);
  }
  function w(t, e) {
    for (; t; ) {
      if (e(t)) return t;
      t = t.parentElement;
    }
    return null;
  }
  function E(t, e) {
    return t.indexOf(e) > -1;
  }
  function A(t) {
    return t.split(/\s+/).filter(Boolean);
  }
  function T(t, e) {
    return void 0 !== t ? t : e;
  }
  function x(t) {
    return [].concat(t);
  }
  function C(t) {
    var e = x(t)[0];
    return (e && e.ownerDocument) || document;
  }
  function I(t, e) {
    -1 === t.indexOf(e) && t.push(e);
  }
  function O(t) {
    return "number" == typeof t ? t : parseFloat(t);
  }
  function D(t, e, n) {
    void 0 === e && (e = 5);
    var r = { top: 0, right: 0, bottom: 0, left: 0 };
    return Object.keys(r).reduce(function (r, i) {
      return (
        (r[i] = "number" == typeof e ? e : e[i]),
        t === i && (r[i] = "number" == typeof e ? e + n : e[t] + n),
        r
      );
    }, r);
  }
  var L = { isTouch: !1 },
    k = 0;
  function M() {
    L.isTouch ||
      ((L.isTouch = !0),
      window.performance && document.addEventListener("mousemove", S));
  }
  function S() {
    var t = performance.now();
    t - k < 20 &&
      ((L.isTouch = !1), document.removeEventListener("mousemove", S)),
      (k = t);
  }
  function P() {
    var t = document.activeElement;
    if (i(t)) {
      var e = t._tippy;
      t.blur && !e.state.isVisible && t.blur();
    }
  }
  var V = "undefined" != typeof window && "undefined" != typeof document,
    B = V ? navigator.userAgent : "",
    H = /MSIE |Trident\//.test(B),
    U = V && /iPhone|iPad|iPod/.test(navigator.platform);
  function N(t) {
    var e = t && U && L.isTouch;
    document.body.classList[e ? "add" : "remove"]("tippy-iOS");
  }
  var z = e(
      {
        allowHTML: !0,
        animation: "fade",
        appendTo: function () {
          return document.body;
        },
        aria: "describedby",
        arrow: !0,
        boundary: "scrollParent",
        content: "",
        delay: 0,
        distance: 10,
        duration: [300, 250],
        flip: !0,
        flipBehavior: "flip",
        flipOnUpdate: !1,
        hideOnClick: !0,
        ignoreAttributes: !1,
        inertia: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        lazy: !0,
        maxWidth: 350,
        multiple: !1,
        offset: 0,
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        role: "tooltip",
        showOnCreate: !1,
        theme: "",
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null,
        updateDuration: 0,
        zIndex: 9999,
      },
      { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 }
    ),
    R = Object.keys(z),
    q = [
      "arrow",
      "boundary",
      "distance",
      "flip",
      "flipBehavior",
      "flipOnUpdate",
      "offset",
      "placement",
      "popperOptions",
    ];
  function F(t) {
    var n = (t.plugins || []).reduce(function (e, n) {
      var r = n.name,
        i = n.defaultValue;
      return r && (e[r] = void 0 !== t[r] ? t[r] : i), e;
    }, {});
    return e({}, t, {}, n);
  }
  function j(t, n) {
    var r = e(
      {},
      n,
      { content: f(n.content, [t]) },
      n.ignoreAttributes
        ? {}
        : (function (t, n) {
            return (n ? Object.keys(F(e({}, z, { plugins: n }))) : R).reduce(
              function (e, n) {
                var r = (t.getAttribute("data-tippy-" + n) || "").trim();
                if (!r) return e;
                if ("content" === n) e[n] = r;
                else
                  try {
                    e[n] = JSON.parse(r);
                  } catch (t) {
                    e[n] = r;
                  }
                return e;
              },
              {}
            );
          })(t, n.plugins)
    );
    return r.interactive && (r.aria = null), r;
  }
  function _(t) {
    return t.split("-")[0];
  }
  function W(t) {
    t.setAttribute("data-inertia", "");
  }
  function X(t) {
    t.setAttribute("data-interactive", "");
  }
  function Y(t, e) {
    if (c(e.content)) r(t, ""), t.appendChild(e.content);
    else if ("function" != typeof e.content) {
      t[e.allowHTML ? "innerHTML" : "textContent"] = e.content;
    }
  }
  function J(t) {
    return {
      tooltip: t.querySelector(".tippy-tooltip"),
      content: t.querySelector(".tippy-content"),
      arrow:
        t.querySelector(".tippy-arrow") || t.querySelector(".tippy-svg-arrow"),
    };
  }
  function G(t) {
    var e = v();
    return (
      !0 === t
        ? (e.className = "tippy-arrow")
        : ((e.className = "tippy-svg-arrow"),
          c(t) ? e.appendChild(t) : r(e, t)),
      e
    );
  }
  function K(t, e) {
    var n = v();
    (n.className = "tippy-popper"),
      (n.style.position = "absolute"),
      (n.style.top = "0"),
      (n.style.left = "0");
    var r = v();
    (r.className = "tippy-tooltip"),
      (r.id = "tippy-" + t),
      r.setAttribute("data-state", "hidden"),
      r.setAttribute("tabindex", "-1"),
      $(r, "add", e.theme);
    var i = v();
    return (
      (i.className = "tippy-content"),
      i.setAttribute("data-state", "hidden"),
      e.interactive && X(r),
      e.arrow && (r.setAttribute("data-arrow", ""), r.appendChild(G(e.arrow))),
      e.inertia && W(r),
      Y(i, e),
      r.appendChild(i),
      n.appendChild(r),
      Q(n, e, e),
      n
    );
  }
  function Q(t, e, n) {
    var r,
      i = J(t),
      o = i.tooltip,
      a = i.content,
      p = i.arrow;
    (t.style.zIndex = "" + n.zIndex),
      o.setAttribute("data-animation", n.animation),
      (o.style.maxWidth = "number" == typeof (r = n.maxWidth) ? r + "px" : r),
      n.role ? o.setAttribute("role", n.role) : o.removeAttribute("role"),
      e.content !== n.content && Y(a, n),
      !e.arrow && n.arrow
        ? (o.appendChild(G(n.arrow)), o.setAttribute("data-arrow", ""))
        : e.arrow && !n.arrow
        ? (o.removeChild(p), o.removeAttribute("data-arrow"))
        : e.arrow !== n.arrow && (o.removeChild(p), o.appendChild(G(n.arrow))),
      !e.interactive && n.interactive
        ? X(o)
        : e.interactive &&
          !n.interactive &&
          (function (t) {
            t.removeAttribute("data-interactive");
          })(o),
      !e.inertia && n.inertia
        ? W(o)
        : e.inertia &&
          !n.inertia &&
          (function (t) {
            t.removeAttribute("data-inertia");
          })(o),
      e.theme !== n.theme && ($(o, "remove", e.theme), $(o, "add", n.theme));
  }
  function Z(t, e, n) {
    ["transitionend", "webkitTransitionEnd"].forEach(function (r) {
      t[e + "EventListener"](r, n);
    });
  }
  function $(t, e, n) {
    A(n).forEach(function (n) {
      t.classList[e](n + "-theme");
    });
  }
  var tt = 1,
    et = [],
    nt = [];
  function rt(r, i) {
    var a,
      s,
      c,
      v = j(r, e({}, z, {}, F(i)));
    if (!v.multiple && r._tippy) return null;
    var k,
      M,
      S,
      P,
      V,
      B = !1,
      U = !1,
      R = !1,
      W = 0,
      X = [],
      Y = h(Dt, v.interactiveDebounce),
      G = C(v.triggerTarget || r),
      $ = tt++,
      rt = K($, v),
      it = J(rt),
      ot = (V = v.plugins).filter(function (t, e) {
        return V.indexOf(t) === e;
      }),
      at = it.tooltip,
      pt = it.content,
      ut = [at, pt],
      st = {
        id: $,
        reference: r,
        popper: rt,
        popperChildren: it,
        popperInstance: null,
        props: v,
        state: {
          currentPlacement: null,
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1,
        },
        plugins: ot,
        clearDelayTimeouts: function () {
          clearTimeout(a), clearTimeout(s), cancelAnimationFrame(c);
        },
        setProps: function (t) {
          if (st.state.isDestroyed) return;
          gt("onBeforeUpdate", [st, t]), It();
          var n = st.props,
            i = j(r, e({}, st.props, {}, t, { ignoreAttributes: !0 }));
          (i.ignoreAttributes = T(t.ignoreAttributes, n.ignoreAttributes)),
            (st.props = i),
            Ct(),
            n.interactiveDebounce !== i.interactiveDebounce &&
              (yt(), (Y = h(Dt, i.interactiveDebounce)));
          Q(rt, n, i),
            (st.popperChildren = J(rt)),
            n.triggerTarget && !i.triggerTarget
              ? x(n.triggerTarget).forEach(function (t) {
                  t.removeAttribute("aria-expanded");
                })
              : i.triggerTarget && r.removeAttribute("aria-expanded");
          if ((bt(), st.popperInstance))
            if (
              q.some(function (e) {
                return o(t, e) && t[e] !== n[e];
              })
            ) {
              var a = st.popperInstance.reference;
              st.popperInstance.destroy(),
                St(),
                (st.popperInstance.reference = a),
                st.state.isVisible && st.popperInstance.enableEventListeners();
            } else st.popperInstance.update();
          gt("onAfterUpdate", [st, t]);
        },
        setContent: function (t) {
          st.setProps({ content: t });
        },
        show: function (t) {
          void 0 === t && (t = p(st.props.duration, 0, z.duration));
          var e = st.state.isVisible,
            n = st.state.isDestroyed,
            r = !st.state.isEnabled,
            i = L.isTouch && !st.props.touch;
          if (e || n || r || i) return;
          if (vt().hasAttribute("disabled")) return;
          st.popperInstance || St();
          if ((gt("onShow", [st], !1), !1 === st.props.onShow(st))) return;
          Et(),
            (rt.style.visibility = "visible"),
            (st.state.isVisible = !0),
            st.state.isMounted || m(ut.concat(rt), 0);
          (M = function () {
            st.state.isVisible &&
              (m([rt], st.props.updateDuration),
              m(ut, t),
              g(ut, "visible"),
              ht(),
              bt(),
              I(nt, st),
              N(!0),
              (st.state.isMounted = !0),
              gt("onMount", [st]),
              (function (t, e) {
                Tt(t, e);
              })(t, function () {
                (st.state.isShown = !0), gt("onShown", [st]);
              }));
          }),
            (function () {
              W = 0;
              var t,
                e = st.props.appendTo,
                n = vt();
              t =
                (st.props.interactive && e === z.appendTo) || "parent" === e
                  ? n.parentNode
                  : f(e, [n]);
              t.contains(rt) || t.appendChild(rt);
              d(st.popperInstance.modifiers, "flip", "enabled", st.props.flip),
                st.popperInstance.enableEventListeners(),
                st.popperInstance.update();
            })();
        },
        hide: function (t) {
          void 0 === t && (t = p(st.props.duration, 1, z.duration));
          var e = !st.state.isVisible && !B,
            n = st.state.isDestroyed,
            r = !st.state.isEnabled && !B;
          if (e || n || r) return;
          if ((gt("onHide", [st], !1), !1 === st.props.onHide(st) && !B))
            return;
          At(),
            (rt.style.visibility = "hidden"),
            (st.state.isVisible = !1),
            (st.state.isShown = !1),
            m(ut, t),
            g(ut, "hidden"),
            ht(),
            bt(),
            (function (t, e) {
              Tt(t, function () {
                !st.state.isVisible &&
                  rt.parentNode &&
                  rt.parentNode.contains(rt) &&
                  e();
              });
            })(t, function () {
              st.popperInstance.disableEventListeners(),
                (st.popperInstance.options.placement = st.props.placement),
                rt.parentNode.removeChild(rt),
                0 ===
                  (nt = nt.filter(function (t) {
                    return t !== st;
                  })).length && N(!1),
                (st.state.isMounted = !1),
                gt("onHidden", [st]);
            });
        },
        enable: function () {
          st.state.isEnabled = !0;
        },
        disable: function () {
          st.hide(), (st.state.isEnabled = !1);
        },
        destroy: function () {
          if (st.state.isDestroyed) return;
          (B = !0),
            st.clearDelayTimeouts(),
            st.hide(0),
            It(),
            delete r._tippy,
            st.popperInstance && st.popperInstance.destroy();
          (B = !1), (st.state.isDestroyed = !0), gt("onDestroy", [st]);
        },
      };
    (r._tippy = st), (rt._tippy = st);
    var ct = ot.map(function (t) {
        return t.fn(st);
      }),
      lt = r.hasAttribute("aria-expanded");
    return (
      Ct(),
      bt(),
      v.lazy || St(),
      gt("onCreate", [st]),
      v.showOnCreate && Vt(),
      rt.addEventListener("mouseenter", function () {
        st.props.interactive && st.state.isVisible && st.clearDelayTimeouts();
      }),
      rt.addEventListener("mouseleave", function (t) {
        st.props.interactive &&
          E(st.props.trigger, "mouseenter") &&
          (Y(t), G.addEventListener("mousemove", Y));
      }),
      st
    );
    function ft() {
      var t = st.props.touch;
      return Array.isArray(t) ? t : [t, 0];
    }
    function dt() {
      return "hold" === ft()[0];
    }
    function vt() {
      return P || r;
    }
    function mt(t) {
      return (st.state.isMounted && !st.state.isVisible) ||
        L.isTouch ||
        (k && "focus" === k.type)
        ? 0
        : p(st.props.delay, t ? 0 : 1, z.delay);
    }
    function gt(t, e, n) {
      var r;
      (void 0 === n && (n = !0),
      ct.forEach(function (n) {
        o(n, t) && n[t].apply(n, e);
      }),
      n) && (r = st.props)[t].apply(r, e);
    }
    function ht() {
      var t = st.props.aria;
      if (t) {
        var e = "aria-" + t,
          n = at.id;
        x(st.props.triggerTarget || r).forEach(function (t) {
          var r = t.getAttribute(e);
          if (st.state.isVisible) t.setAttribute(e, r ? r + " " + n : n);
          else {
            var i = r && r.replace(n, "").trim();
            i ? t.setAttribute(e, i) : t.removeAttribute(e);
          }
        });
      }
    }
    function bt() {
      lt ||
        x(st.props.triggerTarget || r).forEach(function (t) {
          st.props.interactive
            ? t.setAttribute(
                "aria-expanded",
                st.state.isVisible && t === vt() ? "true" : "false"
              )
            : t.removeAttribute("aria-expanded");
        });
    }
    function yt() {
      G.body.removeEventListener("mouseleave", Bt),
        G.removeEventListener("mousemove", Y),
        (et = et.filter(function (t) {
          return t !== Y;
        }));
    }
    function wt(t) {
      if (!st.props.interactive || !rt.contains(t.target)) {
        if (vt().contains(t.target)) {
          if (L.isTouch) return;
          if (st.state.isVisible && E(st.props.trigger, "click")) return;
        }
        !0 === st.props.hideOnClick &&
          ((U = !1),
          st.clearDelayTimeouts(),
          st.hide(),
          (R = !0),
          setTimeout(function () {
            R = !1;
          }),
          st.state.isMounted || At());
      }
    }
    function Et() {
      G.addEventListener("mousedown", wt, !0);
    }
    function At() {
      G.removeEventListener("mousedown", wt, !0);
    }
    function Tt(t, e) {
      function n(t) {
        t.target === at && (Z(at, "remove", n), e());
      }
      if (0 === t) return e();
      Z(at, "remove", S), Z(at, "add", n), (S = n);
    }
    function xt(t, e, n) {
      void 0 === n && (n = !1),
        x(st.props.triggerTarget || r).forEach(function (r) {
          r.addEventListener(t, e, n),
            X.push({ node: r, eventType: t, handler: e, options: n });
        });
    }
    function Ct() {
      dt() && (xt("touchstart", Ot, n), xt("touchend", Lt, n)),
        A(st.props.trigger).forEach(function (t) {
          if ("manual" !== t)
            switch ((xt(t, Ot), t)) {
              case "mouseenter":
                xt("mouseleave", Lt);
                break;
              case "focus":
                xt(H ? "focusout" : "blur", kt);
                break;
              case "focusin":
                xt("focusout", kt);
            }
        });
    }
    function It() {
      X.forEach(function (t) {
        var e = t.node,
          n = t.eventType,
          r = t.handler,
          i = t.options;
        e.removeEventListener(n, r, i);
      }),
        (X = []);
    }
    function Ot(t) {
      var e = !1;
      if (st.state.isEnabled && !Mt(t) && !R) {
        if (
          ((k = t),
          (P = t.currentTarget),
          bt(),
          !st.state.isVisible &&
            l(t) &&
            et.forEach(function (e) {
              return e(t);
            }),
          "click" !== t.type ||
            (E(st.props.trigger, "mouseenter") && !U) ||
            !1 === st.props.hideOnClick ||
            !st.state.isVisible)
        ) {
          var n = ft(),
            r = n[0],
            i = n[1];
          L.isTouch && "hold" === r && i
            ? (a = setTimeout(function () {
                Vt(t);
              }, i))
            : Vt(t);
        } else e = !0;
        "click" === t.type && (U = !e), e && Bt(t);
      }
    }
    function Dt(t) {
      var e = w(t.target, function (t) {
        return t === r || t === rt;
      });
      ("mousemove" === t.type && e) ||
        ((function (t, e) {
          var n = e.clientX,
            r = e.clientY;
          return t.every(function (t) {
            var e = t.popperRect,
              i = t.tooltipRect,
              o = t.interactiveBorder,
              a = Math.min(e.top, i.top),
              p = Math.max(e.right, i.right),
              u = Math.max(e.bottom, i.bottom),
              s = Math.min(e.left, i.left);
            return a - r > o || r - u > o || s - n > o || n - p > o;
          });
        })(
          y(rt.querySelectorAll(".tippy-popper"))
            .concat(rt)
            .map(function (t) {
              var e = t._tippy,
                n = e.popperChildren.tooltip,
                r = e.props.interactiveBorder;
              return {
                popperRect: t.getBoundingClientRect(),
                tooltipRect: n.getBoundingClientRect(),
                interactiveBorder: r,
              };
            }),
          t
        ) &&
          (yt(), Bt(t)));
    }
    function Lt(t) {
      if (!(Mt(t) || (E(st.props.trigger, "click") && U)))
        return st.props.interactive
          ? (G.body.addEventListener("mouseleave", Bt),
            G.addEventListener("mousemove", Y),
            I(et, Y),
            void Y(t))
          : void Bt(t);
    }
    function kt(t) {
      (E(st.props.trigger, "focusin") || t.target === vt()) &&
        ((st.props.interactive &&
          t.relatedTarget &&
          rt.contains(t.relatedTarget)) ||
          Bt(t));
    }
    function Mt(t) {
      var e = "ontouchstart" in window,
        n = E(t.type, "touch"),
        r = dt();
      return (e && L.isTouch && r && !n) || (L.isTouch && !r && n);
    }
    function St() {
      var n,
        i = st.props.popperOptions,
        o = st.popperChildren.arrow,
        a = u(i, "flip"),
        p = u(i, "preventOverflow");
      function s(t) {
        var e = st.state.currentPlacement;
        (st.state.currentPlacement = t.placement),
          st.props.flip &&
            !st.props.flipOnUpdate &&
            (t.flipped && (st.popperInstance.options.placement = t.placement),
            d(st.popperInstance.modifiers, "flip", "enabled", !1)),
          at.setAttribute("data-placement", t.placement),
          !1 !== t.attributes["x-out-of-boundaries"]
            ? at.setAttribute("data-out-of-boundaries", "")
            : at.removeAttribute("data-out-of-boundaries");
        var r = _(t.placement),
          i = E(["top", "bottom"], r),
          o = E(["bottom", "right"], r);
        (at.style.top = "0"),
          (at.style.left = "0"),
          (at.style[i ? "top" : "left"] = (o ? 1 : -1) * n + "px"),
          e && e !== t.placement && st.popperInstance.update();
      }
      var c = e({ eventsEnabled: !1, placement: st.props.placement }, i, {
        modifiers: e({}, i && i.modifiers, {
          tippyDistance: {
            enabled: !0,
            order: 0,
            fn: function (t) {
              n = (function (t, e) {
                var n = "string" == typeof e && E(e, "rem"),
                  r = t.documentElement;
                return r && n
                  ? parseFloat(getComputedStyle(r).fontSize || String(16)) *
                      O(e)
                  : O(e);
              })(G, st.props.distance);
              var e = _(t.placement),
                r = D(e, p && p.padding, n),
                i = D(e, a && a.padding, n),
                o = st.popperInstance.modifiers;
              return (
                d(o, "preventOverflow", "padding", r),
                d(o, "flip", "padding", i),
                t
              );
            },
          },
          preventOverflow: e({ boundariesElement: st.props.boundary }, p),
          flip: e(
            { enabled: st.props.flip, behavior: st.props.flipBehavior },
            a
          ),
          arrow: e({ element: o, enabled: !!o }, u(i, "arrow")),
          offset: e({ offset: st.props.offset }, u(i, "offset")),
        }),
        onCreate: function (t) {
          s(t), b(i && i.onCreate, c.onCreate, [t]), Pt();
        },
        onUpdate: function (t) {
          s(t), b(i && i.onUpdate, c.onUpdate, [t]), Pt();
        },
      });
      st.popperInstance = new t(r, rt, c);
    }
    function Pt() {
      0 === W
        ? (W++, st.popperInstance.update())
        : M && 1 === W && (W++, rt.offsetHeight, M());
    }
    function Vt(t) {
      st.clearDelayTimeouts(),
        st.popperInstance || St(),
        t && gt("onTrigger", [st, t]),
        Et();
      var e = mt(!0);
      e
        ? (a = setTimeout(function () {
            st.show();
          }, e))
        : st.show();
    }
    function Bt(t) {
      if (
        (st.clearDelayTimeouts(),
        gt("onUntrigger", [st, t]),
        st.state.isVisible)
      ) {
        if (
          !(
            E(st.props.trigger, "mouseenter") &&
            E(st.props.trigger, "click") &&
            E(["mouseleave", "mousemove"], t.type) &&
            U
          )
        ) {
          var e = mt(!1);
          e
            ? (s = setTimeout(function () {
                st.state.isVisible && st.hide();
              }, e))
            : (c = requestAnimationFrame(function () {
                st.hide();
              }));
        }
      } else At();
    }
  }
  function it(t, r, i) {
    void 0 === r && (r = {}),
      void 0 === i && (i = []),
      (i = z.plugins.concat(r.plugins || i)),
      document.addEventListener("touchstart", M, e({}, n, { capture: !0 })),
      window.addEventListener("blur", P);
    var o = e({}, r, { plugins: i }),
      p = a(t).reduce(function (t, e) {
        var n = e && rt(e, o);
        return n && t.push(n), t;
      }, []);
    return c(t) ? p[0] : p;
  }
  (it.version = "5.2.1"),
    (it.defaultProps = z),
    (it.setDefaultProps = function (t) {
      Object.keys(t).forEach(function (e) {
        z[e] = t[e];
      });
    }),
    (it.currentInput = L);
  var ot = { mouseover: "mouseenter", focusin: "focus", click: "click" };
  var at = {
    name: "animateFill",
    defaultValue: !1,
    fn: function (t) {
      var e = t.popperChildren,
        n = e.tooltip,
        r = e.content,
        i = t.props.animateFill
          ? (function () {
              var t = v();
              return (t.className = "tippy-backdrop"), g([t], "hidden"), t;
            })()
          : null;
      function o() {
        t.popperChildren.backdrop = i;
      }
      return {
        onCreate: function () {
          i &&
            (o(),
            n.insertBefore(i, n.firstElementChild),
            n.setAttribute("data-animatefill", ""),
            (n.style.overflow = "hidden"),
            t.setProps({ animation: "shift-away", arrow: !1 }));
        },
        onMount: function () {
          if (i) {
            var t = n.style.transitionDuration,
              e = Number(t.replace("ms", ""));
            (r.style.transitionDelay = Math.round(e / 10) + "ms"),
              (i.style.transitionDuration = t),
              g([i], "visible");
          }
        },
        onShow: function () {
          i && (i.style.transitionDuration = "0ms");
        },
        onHide: function () {
          i && g([i], "hidden");
        },
        onAfterUpdate: function () {
          o();
        },
      };
    },
  };
  var pt = {
    name: "followCursor",
    defaultValue: !1,
    fn: function (t) {
      var e,
        n = t.reference,
        r = t.popper,
        i = null,
        o = C(t.props.triggerTarget || n),
        a = null,
        p = !1,
        u = t.props;
      function s() {
        return "manual" === t.props.trigger.trim();
      }
      function c() {
        var e = !!s() || (null !== a && !(0 === a.clientX && 0 === a.clientY));
        return t.props.followCursor && e;
      }
      function f() {
        return (
          L.isTouch || ("initial" === t.props.followCursor && t.state.isVisible)
        );
      }
      function d() {
        t.popperInstance && i && (t.popperInstance.reference = i);
      }
      function v() {
        if (c() || t.props.placement !== u.placement) {
          var e = u.placement,
            n = e.split("-")[1];
          (p = !0),
            t.setProps({
              placement:
                c() && n ? e.replace(n, "start" === n ? "end" : "start") : e,
            }),
            (p = !1);
        }
      }
      function m() {
        t.popperInstance &&
          c() &&
          f() &&
          t.popperInstance.disableEventListeners();
      }
      function g() {
        c() ? o.addEventListener("mousemove", y) : d();
      }
      function h() {
        c() && y(e);
      }
      function b() {
        o.removeEventListener("mousemove", y);
      }
      function y(o) {
        var a = (e = o),
          p = a.clientX,
          u = a.clientY;
        if (t.popperInstance && t.state.currentPlacement) {
          var s = w(o.target, function (t) {
              return t === n;
            }),
            c = t.props.followCursor,
            l = "horizontal" === c,
            d = "vertical" === c,
            v = E(["top", "bottom"], _(t.state.currentPlacement)),
            m = (function (t, e) {
              var n = e ? t.offsetWidth : t.offsetHeight;
              return { size: n, x: e ? n : 0, y: e ? 0 : n };
            })(r, v),
            g = m.size,
            h = m.x,
            y = m.y;
          (!s && t.props.interactive) ||
            (null === i && (i = t.popperInstance.reference),
            (t.popperInstance.reference = {
              referenceNode: n,
              clientWidth: 0,
              clientHeight: 0,
              getBoundingClientRect: function () {
                var t = n.getBoundingClientRect();
                return {
                  width: v ? g : 0,
                  height: v ? 0 : g,
                  top: (l ? t.top : u) - y,
                  bottom: (l ? t.bottom : u) + y,
                  left: (d ? t.left : p) - h,
                  right: (d ? t.right : p) + h,
                };
              },
            }),
            t.popperInstance.update()),
            f() && b();
        }
      }
      return {
        onAfterUpdate: function (t, e) {
          var n;
          p ||
            ((n = e),
            Object.keys(n).forEach(function (t) {
              u[t] = T(n[t], u[t]);
            }),
            e.placement && v()),
            e.placement && m(),
            requestAnimationFrame(h);
        },
        onMount: function () {
          h(), m();
        },
        onShow: function () {
          s() && ((e = a = { clientX: 0, clientY: 0 }), v(), g());
        },
        onTrigger: function (t, n) {
          a ||
            (l(n) &&
              ((a = { clientX: n.clientX, clientY: n.clientY }), (e = n)),
            v(),
            g());
        },
        onUntrigger: function () {
          t.state.isVisible || (b(), (a = null));
        },
        onHidden: function () {
          b(), d(), (a = null);
        },
      };
    },
  };
  var ut = {
    name: "inlinePositioning",
    defaultValue: !1,
    fn: function (t) {
      var e = t.reference;
      function n() {
        return !!t.props.inlinePositioning;
      }
      return {
        onHidden: function () {
          n() && (t.popperInstance.reference = e);
        },
        onShow: function () {
          n() &&
            (t.popperInstance.reference = {
              referenceNode: e,
              clientWidth: 0,
              clientHeight: 0,
              getBoundingClientRect: function () {
                return (function (t, e, n) {
                  if (n.length < 2 || null === t) return e;
                  switch (t) {
                    case "top":
                    case "bottom":
                      var r = n[0],
                        i = n[n.length - 1],
                        o = "top" === t,
                        a = r.top,
                        p = i.bottom,
                        u = o ? r.left : i.left,
                        s = o ? r.right : i.right;
                      return {
                        top: a,
                        bottom: p,
                        left: u,
                        right: s,
                        width: s - u,
                        height: p - a,
                      };
                    case "left":
                    case "right":
                      var c = Math.min.apply(
                          Math,
                          n.map(function (t) {
                            return t.left;
                          })
                        ),
                        l = Math.max.apply(
                          Math,
                          n.map(function (t) {
                            return t.right;
                          })
                        ),
                        f = n.filter(function (e) {
                          return "left" === t ? e.left === c : e.right === l;
                        }),
                        d = f[0].top,
                        v = f[f.length - 1].bottom;
                      return {
                        top: d,
                        bottom: v,
                        left: c,
                        right: l,
                        width: l - c,
                        height: v - d,
                      };
                    default:
                      return e;
                  }
                })(
                  t.state.currentPlacement && _(t.state.currentPlacement),
                  e.getBoundingClientRect(),
                  y(e.getClientRects())
                );
              },
            });
        },
      };
    },
  };
  var st = {
    name: "sticky",
    defaultValue: !1,
    fn: function (t) {
      var e = t.reference,
        n = t.popper;
      function r(e) {
        return !0 === t.props.sticky || t.props.sticky === e;
      }
      var i = null,
        o = null;
      function a() {
        var p = r("reference")
            ? (t.popperInstance
                ? t.popperInstance.reference
                : e
              ).getBoundingClientRect()
            : null,
          u = r("popper") ? n.getBoundingClientRect() : null;
        ((p && ct(i, p)) || (u && ct(o, u))) && t.popperInstance.update(),
          (i = p),
          (o = u),
          t.state.isMounted && requestAnimationFrame(a);
      }
      return {
        onMount: function () {
          t.props.sticky && a();
        },
      };
    },
  };
  function ct(t, e) {
    return (
      !t ||
      !e ||
      t.top !== e.top ||
      t.right !== e.right ||
      t.bottom !== e.bottom ||
      t.left !== e.left
    );
  }
  return (
    V &&
      (function (t) {
        var e = document.createElement("style");
        (e.textContent = t), e.setAttribute("data-tippy-stylesheet", "");
        var n = document.head,
          r = document.querySelector("head>style,head>link");
        r ? n.insertBefore(e, r) : n.appendChild(e);
      })(
        ".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100vw - 10px);transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-property:transform}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;background-color:#333;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top]>.tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left]>.tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right]>.tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-interactive][data-state=visible]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{position:absolute;border-color:transparent;border-style:solid}.tippy-content{padding:5px 9px}"
      ),
    it.setDefaultProps({ plugins: [at, pt, ut, st] }),
    (it.createSingleton = function (t, n, r) {
      void 0 === n && (n = {}),
        void 0 === r && (r = []),
        (r = n.plugins || r),
        t.forEach(function (t) {
          t.disable();
        });
      var i,
        o,
        a = e({}, z, {}, n).aria,
        p = !1,
        u = t.map(function (t) {
          return t.reference;
        }),
        s = {
          fn: function (e) {
            function n(t) {
              if (i) {
                var n = "aria-" + i;
                t && !e.props.interactive
                  ? o.setAttribute(n, e.popperChildren.tooltip.id)
                  : o.removeAttribute(n);
              }
            }
            return {
              onAfterUpdate: function (t, n) {
                var r = n.aria;
                void 0 !== r &&
                  r !== a &&
                  (p
                    ? ((p = !0), e.setProps({ aria: null }), (p = !1))
                    : (a = r));
              },
              onDestroy: function () {
                t.forEach(function (t) {
                  t.enable();
                });
              },
              onMount: function () {
                n(!0);
              },
              onUntrigger: function () {
                n(!1);
              },
              onTrigger: function (r, p) {
                var s = p.currentTarget,
                  c = u.indexOf(s);
                s !== o &&
                  ((o = s),
                  (i = a),
                  e.state.isVisible && n(!0),
                  (e.popperInstance.reference = s),
                  e.setContent(t[c].props.content));
              },
            };
          },
        };
      return it(
        v(),
        e({}, n, { plugins: [s].concat(r), aria: null, triggerTarget: u })
      );
    }),
    (it.delegate = function (t, n, r) {
      void 0 === r && (r = []), (r = n.plugins || r);
      var i,
        o,
        a = [],
        p = [],
        u = n.target,
        s =
          ((i = ["target"]),
          (o = e({}, n)),
          i.forEach(function (t) {
            delete o[t];
          }),
          o),
        c = e({}, s, { plugins: r, trigger: "manual" }),
        l = e({}, s, { plugins: r, showOnCreate: !0 }),
        f = it(t, c);
      function d(t) {
        if (t.target) {
          var e = t.target.closest(u);
          if (e)
            if (
              E(
                e.getAttribute("data-tippy-trigger") || n.trigger || z.trigger,
                ot[t.type]
              )
            ) {
              var r = it(e, l);
              r && (p = p.concat(r));
            }
        }
      }
      function v(t, e, n, r) {
        void 0 === r && (r = !1),
          t.addEventListener(e, n, r),
          a.push({ node: t, eventType: e, handler: n, options: r });
      }
      return (
        x(f).forEach(function (t) {
          var e = t.destroy;
          (t.destroy = function (t) {
            void 0 === t && (t = !0),
              t &&
                p.forEach(function (t) {
                  t.destroy();
                }),
              (p = []),
              a.forEach(function (t) {
                var e = t.node,
                  n = t.eventType,
                  r = t.handler,
                  i = t.options;
                e.removeEventListener(n, r, i);
              }),
              (a = []),
              e();
          }),
            (function (t) {
              var e = t.reference;
              v(e, "mouseover", d), v(e, "focusin", d), v(e, "click", d);
            })(t);
        }),
        f
      );
    }),
    (it.hideAll = function (t) {
      var e = void 0 === t ? {} : t,
        n = e.exclude,
        r = e.duration;
      nt.forEach(function (t) {
        var e = !1;
        n && (e = i(n) ? t.reference === n : t.popper === n.popper),
          e || t.hide(r);
      });
    }),
    (it.roundArrow =
      '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>'),
    it
  );
})(Popper);
//# sourceMappingURL=tippy-bundle.iife.min.js.map
