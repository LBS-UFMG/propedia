(function(q, ga) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = q.document ? ga(q, !0) : function(q) {
        if (!q.document) throw Error("jQuery requires a window with a document");
        return ga(q)
    } : ga(q)
})("undefined" !== typeof window ? window : this, function(q, ga) {
    function Da(a) {
        var b = "length" in a && a.length,
            c = d.type(a);
        return "function" === c || d.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }

    function Ea(a, b, c) {
        if (d.isFunction(b)) return d.grep(a, function(a,
            d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return d.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" === typeof b) {
            if (Zb.test(b)) return d.filter(b, a, c);
            b = d.filter(b, a)
        }
        return d.grep(a, function(a) {
            return 0 <= d.inArray(a, b) !== c
        })
    }

    function Ya(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function $b(a) {
        var b = Za[a] = {};
        d.each(a.match(K) || [], function(a, d) {
            b[d] = !0
        });
        return b
    }

    function $a() {
        n.addEventListener ? (n.removeEventListener("DOMContentLoaded", D, !1), q.removeEventListener("load", D, !1)) : (n.detachEvent("onreadystatechange",
            D), q.detachEvent("onload", D))
    }

    function D() {
        if (n.addEventListener || "load" === event.type || "complete" === n.readyState) $a(), d.ready()
    }

    function ab(a, b, c) {
        if (void 0 === c && 1 === a.nodeType)
            if (c = "data-" + b.replace(ac, "-$1").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : bc.test(c) ? d.parseJSON(c) : c
                } catch (e) {}
                d.data(a, b, c)
            } else c = void 0;
        return c
    }

    function Fa(a) {
        for (var b in a)
            if (("data" !== b || !d.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function bb(a, b, c, e) {
        if (d.acceptData(a)) {
            var f = d.expando,
                g = a.nodeType,
                h = g ? d.cache : a,
                k = g ? a[f] : a[f] && f;
            if (k && h[k] && (e || h[k].data) || void 0 !== c || "string" !== typeof b) {
                k || (k = g ? a[f] = R.pop() || d.guid++ : f);
                h[k] || (h[k] = g ? {} : {
                    toJSON: d.noop
                });
                if ("object" === typeof b || "function" === typeof b) e ? h[k] = d.extend(h[k], b) : h[k].data = d.extend(h[k].data, b);
                a = h[k];
                e || (a.data || (a.data = {}), a = a.data);
                void 0 !== c && (a[d.camelCase(b)] = c);
                "string" === typeof b ? (c = a[b], null == c && (c = a[d.camelCase(b)])) : c = a;
                return c
            }
        }
    }

    function cb(a, b, c) {
        if (d.acceptData(a)) {
            var e,
                f, g = a.nodeType,
                h = g ? d.cache : a,
                k = g ? a[d.expando] : d.expando;
            if (h[k]) {
                if (b && (e = c ? h[k] : h[k].data)) {
                    d.isArray(b) ? b = b.concat(d.map(b, d.camelCase)) : b in e ? b = [b] : (b = d.camelCase(b), b = b in e ? [b] : b.split(" "));
                    for (f = b.length; f--;) delete e[b[f]];
                    if (c ? !Fa(e) : !d.isEmptyObject(e)) return
                }
                if (!c && (delete h[k].data, !Fa(h[k]))) return;
                g ? d.cleanData([a], !0) : p.deleteExpando || h != h.window ? delete h[k] : h[k] = null
            }
        }
    }

    function V() {
        return !0
    }

    function W() {
        return !1
    }

    function db() {
        try {
            return n.activeElement
        } catch (a) {}
    }

    function eb(a) {
        var b =
            fb.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }

    function w(a, b) {
        var c, e, f = 0,
            g = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!g)
            for (g = [], c = a.childNodes || a; null != (e = c[f]); f++) !b || d.nodeName(e, b) ? g.push(e) : d.merge(g, w(e, b));
        return void 0 === b || b && d.nodeName(a, b) ? d.merge([a], g) : g
    }

    function cc(a) {
        Ga.test(a.type) && (a.defaultChecked = a.checked)
    }

    function gb(a, b) {
        return d.nodeName(a, "table") && d.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function hb(a) {
        a.type = (null !== d.find.attr(a, "type")) + "/" + a.type;
        return a
    }

    function ib(a) {
        var b = dc.exec(a.type);
        b ? a.type = b[1] : a.removeAttribute("type");
        return a
    }

    function Ha(a, b) {
        for (var c, e = 0; null != (c = a[e]); e++) d._data(c, "globalEval", !b || d._data(b[e], "globalEval"))
    }

    function jb(a, b) {
        if (1 === b.nodeType && d.hasData(a)) {
            var c,
                e, f;
            e = d._data(a);
            var g = d._data(b, e),
                h = e.events;
            if (h)
                for (c in delete g.handle, g.events = {}, h)
                    for (e = 0, f = h[c].length; e < f; e++) d.event.add(b, c, h[c][e]);
            g.data && (g.data = d.extend({}, g.data))
        }
    }

    function kb(a, b) {
        var c, e = d(b.createElement(a)).appendTo(b.body),
            f = q.getDefaultComputedStyle && (c = q.getDefaultComputedStyle(e[0])) ? c.display : d.css(e[0], "display");
        e.detach();
        return f
    }

    function pa(a) {
        var b = n,
            c = lb[a];
        c || (c = kb(a, b), "none" !== c && c || (ha = (ha || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = (ha[0].contentWindow || ha[0].contentDocument).document, b.write(), b.close(), c = kb(a, b), ha.detach()), lb[a] = c);
        return c
    }

    function mb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    if (c) delete this.get;
                    else return (this.get = b).apply(this, arguments)
            }
        }
    }

    function nb(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, f = ob.length; f--;)
            if (b = ob[f] + c, b in a) return b;
        return d
    }

    function pb(a, b) {
        for (var c, e, f, g = [], h = 0, k = a.length; h < k; h++) e = a[h], e.style && (g[h] = d._data(e, "olddisplay"), c = e.style.display,
            b ? (g[h] || "none" !== c || (e.style.display = ""), "" === e.style.display && ia(e) && (g[h] = d._data(e, "olddisplay", pa(e.nodeName)))) : (f = ia(e), (c && "none" !== c || !f) && d._data(e, "olddisplay", f ? c : d.css(e, "display"))));
        for (h = 0; h < k; h++) e = a[h], !e.style || b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? g[h] || "" : "none");
        return a
    }

    function qb(a, b, c) {
        return (a = ec.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function rb(a, b, c, e, f) {
        b = c === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var g = 0; 4 > b; b += 2) "margin" ===
            c && (g += d.css(a, c + M[b], !0, f)), e ? ("content" === c && (g -= d.css(a, "padding" + M[b], !0, f)), "margin" !== c && (g -= d.css(a, "border" + M[b] + "Width", !0, f))) : (g += d.css(a, "padding" + M[b], !0, f), "padding" !== c && (g += d.css(a, "border" + M[b] + "Width", !0, f)));
        return g
    }

    function sb(a, b, c) {
        var e = !0,
            f = "width" === b ? a.offsetWidth : a.offsetHeight,
            g = X(a),
            h = p.boxSizing && "border-box" === d.css(a, "boxSizing", !1, g);
        if (0 >= f || null == f) {
            f = F(a, b, g);
            if (0 > f || null == f) f = a.style[b];
            if (qa.test(f)) return f;
            e = h && (p.boxSizingReliable() || f === a.style[b]);
            f = parseFloat(f) ||
                0
        }
        return f + rb(a, b, c || (h ? "border" : "content"), e, g) + "px"
    }

    function B(a, b, c, d, f) {
        return new B.prototype.init(a, b, c, d, f)
    }

    function tb() {
        setTimeout(function() {
            Y = void 0
        });
        return Y = d.now()
    }

    function ra(a, b) {
        var c, d = {
                height: a
            },
            f = 0;
        for (b = b ? 1 : 0; 4 > f; f += 2 - b) c = M[f], d["margin" + c] = d["padding" + c] = a;
        b && (d.opacity = d.width = a);
        return d
    }

    function ub(a, b, c) {
        for (var d, f = (ja[b] || []).concat(ja["*"]), g = 0, h = f.length; g < h; g++)
            if (d = f[g].call(c, b, a)) return d
    }

    function fc(a, b) {
        var c, e, f, g, h;
        for (c in a)
            if (e = d.camelCase(c), f = b[e], g = a[c],
                d.isArray(g) && (f = g[1], g = a[c] = g[0]), c !== e && (a[e] = g, delete a[c]), (h = d.cssHooks[e]) && "expand" in h)
                for (c in g = h.expand(g), delete a[e], g) c in a || (a[c] = g[c], b[c] = f);
            else b[e] = f
    }

    function vb(a, b, c) {
        var e, f = 0,
            g = ca.length,
            h = d.Deferred().always(function() {
                delete k.elem
            }),
            k = function() {
                if (e) return !1;
                for (var b = Y || tb(), b = Math.max(0, l.startTime + l.duration - b), c = 1 - (b / l.duration || 0), d = 0, f = l.tweens.length; d < f; d++) l.tweens[d].run(c);
                h.notifyWith(a, [l, c, b]);
                if (1 > c && f) return b;
                h.resolveWith(a, [l]);
                return !1
            },
            l = h.promise({
                elem: a,
                props: d.extend({}, b),
                opts: d.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Y || tb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var e = d.Tween(a, l.opts, b, c, l.opts.specialEasing[b] || l.opts.easing);
                    l.tweens.push(e);
                    return e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? l.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) l.tweens[c].run(1);
                    b ? h.resolveWith(a, [l, b]) : h.rejectWith(a, [l, b]);
                    return this
                }
            });
        c = l.props;
        for (fc(c, l.opts.specialEasing); f < g; f++)
            if (b = ca[f].call(l, a, c, l.opts)) return b;
        d.map(c, ub, l);
        d.isFunction(l.opts.start) && l.opts.start.call(a, l);
        d.fx.timer(d.extend(k, {
            elem: a,
            anim: l,
            queue: l.opts.queue
        }));
        return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function wb(a) {
        return function(b, c) {
            "string" !== typeof b && (c = b, b = "*");
            var e, f = 0,
                g = b.toLowerCase().match(K) || [];
            if (d.isFunction(c))
                for (; e = g[f++];) "+" === e.charAt(0) ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
        }
    }

    function xb(a, b, c, e) {
        function f(k) {
            var l;
            g[k] = !0;
            d.each(a[k] || [], function(a, d) {
                var k = d(b, c, e);
                if ("string" === typeof k && !h && !g[k]) return b.dataTypes.unshift(k), f(k), !1;
                if (h) return !(l = k)
            });
            return l
        }
        var g = {},
            h = a === Ia;
        return f(b.dataTypes[0]) || !g["*"] && f("*")
    }

    function Ja(a, b) {
        var c, e, f = d.ajaxSettings.flatOptions || {};
        for (e in b) void 0 !== b[e] && ((f[e] ? a : c || (c = {}))[e] = b[e]);
        c && d.extend(!0, a, c);
        return a
    }

    function Ka(a, b, c, e) {
        var f;
        if (d.isArray(b)) d.each(b, function(b, d) {
            c || gc.test(a) ? e(a, d) : Ka(a + "[" + ("object" === typeof d ? b : "") + "]", d, c, e)
        });
        else if (c ||
            "object" !== d.type(b)) e(a, b);
        else
            for (f in b) Ka(a + "[" + f + "]", b[f], c, e)
    }

    function yb() {
        try {
            return new q.XMLHttpRequest
        } catch (a) {}
    }

    function zb(a) {
        return d.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var R = [],
        N = R.slice,
        Ab = R.concat,
        La = R.push,
        Bb = R.indexOf,
        sa = {},
        hc = sa.toString,
        S = sa.hasOwnProperty,
        p = {},
        d = function(a, b) {
            return new d.fn.init(a, b)
        },
        ic = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        jc = /^-ms-/,
        kc = /-([\da-z])/gi,
        lc = function(a, b) {
            return b.toUpperCase()
        };
    d.fn = d.prototype = {
        jquery: "1.11.3",
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return N.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : N.call(this)
        },
        pushStack: function(a) {
            a = d.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a, b) {
            return d.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(d.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(N.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: La,
        sort: R.sort,
        splice: R.splice
    };
    d.extend = d.fn.extend = function() {
        var a, b, c, e, f, g = arguments[0] || {},
            h = 1,
            k = arguments.length,
            l = !1;
        "boolean" === typeof g && (l = g, g = arguments[h] || {}, h++);
        "object" === typeof g || d.isFunction(g) || (g = {});
        h === k && (g = this, h--);
        for (; h < k; h++)
            if (null != (f = arguments[h]))
                for (e in f) a = g[e], c = f[e], g !== c && (l && c && (d.isPlainObject(c) ||
                    (b = d.isArray(c))) ? (b ? (b = !1, a = a && d.isArray(a) ? a : []) : a = a && d.isPlainObject(a) ? a : {}, g[e] = d.extend(l, a, c)) : void 0 !== c && (g[e] = c));
        return g
    };
    d.extend({
        expando: "jQuery" + ("1.11.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === d.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === d.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !d.isArray(a) && 0 <= a - parseFloat(a) + 1
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== d.type(a) || a.nodeType || d.isWindow(a)) return !1;
            try {
                if (a.constructor && !S.call(a, "constructor") && !S.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (p.ownLast)
                for (b in a) return S.call(a, b);
            for (b in a);
            return void 0 === b || S.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? sa[hc.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            a && d.trim(a) && (q.execScript || function(a) {
                q.eval.call(q,
                    a)
            })(a)
        },
        camelCase: function(a) {
            return a.replace(jc, "ms-").replace(kc, lc)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, f = 0,
                g = a.length;
            d = Da(a);
            if (c)
                if (d)
                    for (; f < g && (d = b.apply(a[f], c), !1 !== d); f++);
                else
                    for (f in a) {
                        if (d = b.apply(a[f], c), !1 === d) break
                    } else if (d)
                        for (; f < g && (d = b.call(a[f], f, a[f]), !1 !== d); f++);
                    else
                        for (f in a)
                            if (d = b.call(a[f], f, a[f]), !1 === d) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ic, "")
        },
        makeArray: function(a,
            b) {
            var c = b || [];
            null != a && (Da(Object(a)) ? d.merge(c, "string" === typeof a ? [a] : a) : La.call(c, a));
            return c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (Bb) return Bb.call(b, a, c);
                d = b.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, f = a.length; d < c;) a[f++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[f++] = b[d++];
            a.length = f;
            return a
        },
        grep: function(a, b, c) {
            for (var d = [], f = 0, g = a.length, h = !c; f < g; f++) c = !b(a[f], f), c !== h && d.push(a[f]);
            return d
        },
        map: function(a,
            b, c) {
            var d, f = 0,
                g = a.length,
                h = [];
            if (Da(a))
                for (; f < g; f++) d = b(a[f], f, c), null != d && h.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && h.push(d);
            return Ab.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e;
            "string" === typeof b && (e = a[b], b = a, a = e);
            if (d.isFunction(a)) return c = N.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(N.call(arguments)))
            }, e.guid = a.guid = a.guid || d.guid++, e
        },
        now: function() {
            return +new Date
        },
        support: p
    });
    d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(a, b) {
            sa["[object " + b + "]"] = b.toLowerCase()
        });
    var fa = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, k;
            (b ? b.ownerDocument || b : E) !== C && la(b);
            b = b || C;
            c = c || [];
            h = b.nodeType;
            if ("string" !== typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && T) {
                if (11 !== h && (e = ra.exec(a)))
                    if (g = e[1])
                        if (9 === h)
                            if ((f = b.getElementById(g)) && f.parentNode) {
                                if (f.id === g) return c.push(f), c
                            } else return c;
                else {
                    if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && L(b, f) && f.id === g) return c.push(f), c
                } else {
                    if (e[2]) return da.apply(c,
                        b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && u.getElementsByClassName) return da.apply(c, b.getElementsByClassName(g)), c
                }
                if (u.qsa && (!A || !A.test(a))) {
                    f = e = x;
                    g = b;
                    k = 1 !== h && a;
                    if (1 === h && "object" !== b.nodeName.toLowerCase()) {
                        h = ua(a);
                        (e = b.getAttribute("id")) ? f = e.replace(sa, "\\$&"): b.setAttribute("id", f);
                        f = "[id='" + f + "'] ";
                        for (g = h.length; g--;) h[g] = f + p(h[g]);
                        g = ca.test(a) && t(b.parentNode) || b;
                        k = h.join(",")
                    }
                    if (k) try {
                        return da.apply(c, g.querySelectorAll(k)), c
                    } catch (l) {} finally {
                        e || b.removeAttribute("id")
                    }
                }
            }
            return Db(a.replace(O,
                "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                b.push(c + " ") > s.cacheLength && delete a[b.shift()];
                return a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            a[x] = !0;
            return a
        }

        function f(a) {
            var b = C.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) s.attrHandle[c[d]] = b
        }

        function h(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function k(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function l(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function r(a) {
            return d(function(b) {
                b = +b;
                return d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function t(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function m() {}

        function p(a) {
            for (var b =
                    0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = R++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, k, Ma = [I, f];
                if (g)
                    for (; b = b[d];) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                k = b[x] || (b[x] = {});
                                if ((h = k[d]) && h[0] === I && h[1] === f) return Ma[2] = h[2];
                                k[d] = Ma;
                                if (Ma[2] = a(b, c, g)) return !0
                            }
            }
        }

        function q(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b,
                            c, d)) return !1;
                return !0
            } : a[0]
        }

        function w(a, b, c, d, e) {
            for (var f, g = [], h = 0, k = a.length, l = null != b; h < k; h++)
                if (f = a[h])
                    if (!c || c(f, d, e)) g.push(f), l && b.push(h);
            return g
        }

        function Na(a, c, f, g, h, k) {
            g && !g[x] && (g = Na(g));
            h && !h[x] && (h = Na(h, k));
            return d(function(d, e, k, l) {
                var m, r, t = [],
                    p = [],
                    s = e.length,
                    z;
                if (!(z = d)) {
                    z = c || "*";
                    for (var n = k.nodeType ? [k] : k, Cb = [], q = 0, y = n.length; q < y; q++) b(z, n[q], Cb);
                    z = Cb
                }
                z = !a || !d && c ? z : w(z, t, a, k, l);
                n = f ? h || (d ? a : s || g) ? [] : e : z;
                f && f(z, n, k, l);
                if (g)
                    for (m = w(n, p), g(m, [], k, l), k = m.length; k--;)
                        if (r = m[k]) n[p[k]] = !(z[p[k]] = r);
                if (d) {
                    if (h || a) {
                        if (h) {
                            m = [];
                            for (k = n.length; k--;)(r = n[k]) && m.push(z[k] = r);
                            h(null, n = [], m, l)
                        }
                        for (k = n.length; k--;)(r = n[k]) && -1 < (m = h ? ma(d, r) : t[k]) && (d[m] = !(e[m] = r))
                    }
                } else n = w(n === e ? n.splice(s, n.length) : n), h ? h(null, e, n, l) : da.apply(e, n)
            })
        }

        function B(a) {
            var b, c, d, e = a.length,
                f = s.relative[a[0].type];
            c = f || s.relative[" "];
            for (var g = f ? 1 : 0, h = n(function(a) {
                    return a === b
                }, c, !0), k = n(function(a) {
                    return -1 < ma(b, a)
                }, c, !0), l = [function(a, c, d) {
                    a = !f && (d || c !== D) || ((b = c).nodeType ? h(a, c, d) : k(a, c, d));
                    b = null;
                    return a
                }]; g <
                e; g++)
                if (c = s.relative[a[g].type]) l = [n(q(l), c)];
                else {
                    c = s.filter[a[g].type].apply(null, a[g].matches);
                    if (c[x]) {
                        for (d = ++g; d < e && !s.relative[a[d].type]; d++);
                        return Na(1 < g && q(l), 1 < g && p(a.slice(0, g - 1).concat({
                            value: " " === a[g - 2].type ? "*" : ""
                        })).replace(O, "$1"), c, g < d && B(a.slice(g, d)), d < e && B(a = a.slice(d)), d < e && p(a))
                    }
                    l.push(c)
                }
            return q(l)
        }

        function H(a, c) {
            var f = 0 < c.length,
                g = 0 < a.length,
                h = function(d, e, h, k, l) {
                    var m, r, t, p = 0,
                        n = "0",
                        z = d && [],
                        ka = [],
                        q = D,
                        y = d || g && s.find.TAG("*", l),
                        va = I += null == q ? 1 : Math.random() || .1,
                        v = y.length;
                    for (l && (D = e !== C && e); n !== v && null != (m = y[n]); n++) {
                        if (g && m) {
                            for (r = 0; t = a[r++];)
                                if (t(m, e, h)) {
                                    k.push(m);
                                    break
                                }
                            l && (I = va)
                        }
                        f && ((m = !t && m) && p--, d && z.push(m))
                    }
                    p += n;
                    if (f && n !== p) {
                        for (r = 0; t = c[r++];) t(z, ka, e, h);
                        if (d) {
                            if (0 < p)
                                for (; n--;) z[n] || ka[n] || (ka[n] = aa.call(k));
                            ka = w(ka)
                        }
                        da.apply(k, ka);
                        l && !d && 0 < ka.length && 1 < p + c.length && b.uniqueSort(k)
                    }
                    l && (I = va, D = q);
                    return z
                };
            return f ? d(h) : h
        }
        var J, u, s, K, va, ua, Oa, Db, D, ea, ta, la, C, G, T, A, v, ya, L, x = "sizzle" + 1 * new Date,
            E = a.document,
            I = 0,
            R = 0,
            N = c(),
            P = c(),
            Q = c(),
            M = function(a, b) {
                a === b && (ta = !0);
                return 0
            },
            X = {}.hasOwnProperty,
            F = [],
            aa = F.pop,
            ba = F.push,
            da = F.push,
            U = F.slice,
            ma = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            Y = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)[\\x20\\t\\r\\n\\f]*\\]",
            S = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            Y + ")*)|.*)\\)|)",
            fa = /[\x20\t\r\n\f]+/g,
            O = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            ga = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ha = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            ia = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            ja = new RegExp(S),
            na = new RegExp("^" + W + "$"),
            V = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + Y),
                PSEUDO: new RegExp("^" + S),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            wa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ca = /[+~]/,
            sa = /'|\\/g,
            Z = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            $ = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            },
            oa = function() {
                la()
            };
        try {
            da.apply(F = U.call(E.childNodes), E.childNodes), F[E.childNodes.length].nodeType
        } catch (xa) {
            da = {
                apply: F.length ? function(a, b) {
                    ba.apply(a, U.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        u = b.support = {};
        va = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        la = b.setDocument = function(a) {
            var b = a ? a.ownerDocument || a :
                E;
            if (b === C || 9 !== b.nodeType || !b.documentElement) return C;
            C = b;
            G = b.documentElement;
            (a = b.defaultView) && a !== a.top && (a.addEventListener ? a.addEventListener("unload", oa, !1) : a.attachEvent && a.attachEvent("onunload", oa));
            T = !va(b);
            u.attributes = f(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            u.getElementsByTagName = f(function(a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            u.getElementsByClassName = wa.test(b.getElementsByClassName);
            u.getById = f(function(a) {
                G.appendChild(a).id =
                    x;
                return !b.getElementsByName || !b.getElementsByName(x).length
            });
            u.getById ? (s.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && T) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, s.filter.ID = function(a) {
                var b = a.replace(Z, $);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete s.find.ID, s.filter.ID = function(a) {
                var b = a.replace(Z, $);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            });
            s.find.TAG = u.getElementsByTagName ?
                function(a, b) {
                    if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
                    if (u.qsa) return b.querySelectorAll(a)
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                };
            s.find.CLASS = u.getElementsByClassName && function(a, b) {
                if (T) return b.getElementsByClassName(a)
            };
            v = [];
            A = [];
            if (u.qsa = wa.test(b.querySelectorAll)) f(function(a) {
                G.appendChild(a).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\f]' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || A.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" + x + "-]").length || A.push("~=");
                a.querySelectorAll(":checked").length || A.push(":checked");
                a.querySelectorAll("a#" + x + "+*").length || A.push(".#.+[+~]")
            }), f(function(a) {
                var c =
                    b.createElement("input");
                c.setAttribute("type", "hidden");
                a.appendChild(c).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && A.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || A.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                A.push(",.*:")
            });
            (u.matchesSelector = wa.test(ya = G.matches || G.webkitMatchesSelector || G.mozMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && f(function(a) {
                u.disconnectedMatch = ya.call(a, "div");
                ya.call(a, "[s!='']:x");
                v.push("!=", S)
            });
            A = A.length && new RegExp(A.join("|"));
            v = v.length && new RegExp(v.join("|"));
            L = (a = wa.test(G.compareDocumentPosition)) || wa.test(G.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !!(d && 1 === d.nodeType && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            };
            M = a ? function(a, c) {
                if (a === c) return ta = !0, 0;
                var d = !a.compareDocumentPosition - !c.compareDocumentPosition;
                if (d) return d;
                d = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1;
                return d & 1 || !u.sortDetached && c.compareDocumentPosition(a) === d ? a === b || a.ownerDocument === E && L(E, a) ? -1 : c === b || c.ownerDocument === E && L(E, c) ? 1 : ea ? ma(ea, a) - ma(ea, c) : 0 : d & 4 ? -1 : 1
            } : function(a, c) {
                if (a === c) return ta = !0, 0;
                var d, e = 0;
                d = a.parentNode;
                var f = c.parentNode,
                    g = [a],
                    k = [c];
                if (!d || !f) return a === b ? -1 : c === b ? 1 : d ? -1 : f ? 1 : ea ? ma(ea, a) - ma(ea, c) : 0;
                if (d === f) return h(a, c);
                for (d = a; d = d.parentNode;) g.unshift(d);
                for (d = c; d = d.parentNode;) k.unshift(d);
                for (; g[e] === k[e];) e++;
                return e ? h(g[e], k[e]) : g[e] === E ? -1 : k[e] === E ? 1 : 0
            };
            return b
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            (a.ownerDocument || a) !== C && la(a);
            c = c.replace(ia, "='$1']");
            if (!(!u.matchesSelector || !T || v && v.test(c) || A && A.test(c))) try {
                var d = ya.call(a, c);
                if (d || u.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return 0 < b(c, C, null, [a]).length
        };
        b.contains = function(a, b) {
            (a.ownerDocument || a) !== C && la(a);
            return L(a, b)
        };
        b.attr = function(a,
            b) {
            (a.ownerDocument || a) !== C && la(a);
            var c = s.attrHandle[b.toLowerCase()],
                c = c && X.call(s.attrHandle, b.toLowerCase()) ? c(a, b, !T) : void 0;
            return void 0 !== c ? c : u.attributes || !T ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            ta = !u.detectDuplicates;
            ea = !u.sortStable && a.slice(0);
            a.sort(M);
            if (ta) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            ea = null;
            return a
        };
        K = b.getText = function(a) {
            var b, c = "",
                d = 0;
            b = a.nodeType;
            if (!b)
                for (; b = a[d++];) c += K(b);
            else if (1 === b || 9 === b || 11 === b) {
                if ("string" === typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += K(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        };
        s = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] =
                        a[1].replace(Z, $);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(Z, $);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    if (V.CHILD.test(a[0])) return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : c && ja.test(c) && (b = ua(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0,
                        b), a[2] = c.slice(0, b));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(Z, $).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = N[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && N(a, function(a) {
                        return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        e = b.attr(e,
                            a);
                        if (null == e) return "!=" === c;
                        if (!c) return !0;
                        e += "";
                        return "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? -1 < (" " + e.replace(fa, " ") + " ").indexOf(d) : "|=" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, k) {
                        var l, m, r, t, p;
                        c = f !== g ? "nextSibling" : "previousSibling";
                        var n =
                            b.parentNode,
                            z = h && b.nodeName.toLowerCase();
                        k = !k && !h;
                        if (n) {
                            if (f) {
                                for (; c;) {
                                    for (m = b; m = m[c];)
                                        if (h ? m.nodeName.toLowerCase() === z : 1 === m.nodeType) return !1;
                                    p = c = "only" === a && !p && "nextSibling"
                                }
                                return !0
                            }
                            p = [g ? n.firstChild : n.lastChild];
                            if (g && k)
                                for (k = n[x] || (n[x] = {}), l = k[a] || [], t = l[0] === I && l[1], r = l[0] === I && l[2], m = t && n.childNodes[t]; m = ++t && m && m[c] || (r = t = 0) || p.pop();) {
                                    if (1 === m.nodeType && ++r && m === b) {
                                        k[a] = [I, t, r];
                                        break
                                    }
                                } else if (k && (l = (b[x] || (b[x] = {}))[a]) && l[0] === I) r = l[1];
                                else
                                    for (;
                                        (m = ++t && m && m[c] || (r = t = 0) || p.pop()) &&
                                        ((h ? m.nodeName.toLowerCase() !== z : 1 !== m.nodeType) || !++r || (k && ((m[x] || (m[x] = {}))[a] = [I, r]), m !== b)););
                            r -= e;
                            return r === d || 0 === r % d && 0 <= r / d
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var f, g = s.pseudos[a] || s.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return g[x] ? g(c) : 1 < g.length ? (f = [a, a, "", c], s.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = g(a, c), f = e.length; f--;) d = ma(a, e[f]), a[d] = !(b[d] = e[f])
                    }) : function(a) {
                        return g(a, 0, f)
                    }) : g
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        f = Oa(a.replace(O,
                            "$1"));
                    return f[x] ? d(function(a, b, c, d) {
                        d = f(a, null, d, []);
                        for (var e = a.length; e--;)
                            if (c = d[e]) a[e] = !(b[e] = c)
                    }) : function(a, d, e) {
                        b[0] = a;
                        f(b, null, e, c);
                        b[0] = null;
                        return !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: d(function(a) {
                    a = a.replace(Z, $);
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || K(b)).indexOf(a)
                    }
                }),
                lang: d(function(a) {
                    na.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(Z, $).toLowerCase();
                    return function(b) {
                        var c;
                        do
                            if (c = T ? b.lang : b.getAttribute("xml:lang") ||
                                b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === G
                },
                focus: function(a) {
                    return a === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" ===
                        b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !s.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() &&
                        "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: r(function() {
                    return [0]
                }),
                last: r(function(a, b) {
                    return [b - 1]
                }),
                eq: r(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: r(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: r(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: r(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: r(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        s.pseudos.nth = s.pseudos.eq;
        for (J in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) s.pseudos[J] = k(J);
        for (J in {
                submit: !0,
                reset: !0
            }) s.pseudos[J] = l(J);
        m.prototype = s.filters = s.pseudos;
        s.setFilters = new m;
        ua = b.tokenize = function(a, c) {
            var d, e, f, g, h, k, l;
            if (h = P[a + " "]) return c ? 0 : h.slice(0);
            h = a;
            k = [];
            for (l = s.preFilter; h;) {
                if (!d || (e = ga.exec(h))) e && (h = h.slice(e[0].length) || h), k.push(f = []);
                d = !1;
                if (e = ha.exec(h)) d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(O, " ")
                }), h = h.slice(d.length);
                for (g in s.filter) !(e = V[g].exec(h)) || l[g] && !(e = l[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : P(a, k).slice(0)
        };
        Oa = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = Q[a + " "];
            if (!f) {
                b || (b = ua(a));
                for (c = b.length; c--;) f = B(b[c]), f[x] ? d.push(f) : e.push(f);
                f = Q(a, H(e, d));
                f.selector = a
            }
            return f
        };
        Db = b.select = function(a, b, c, d) {
            var e, f, g, h, k = "function" === typeof a && a,
                l = !d && ua(a = k.selector || a);
            c = c || [];
            if (1 === l.length) {
                f = l[0] = l[0].slice(0);
                if (2 < f.length && "ID" === (g = f[0]).type && u.getById && 9 === b.nodeType && T && s.relative[f[1].type]) {
                    b = (s.find.ID(g.matches[0].replace(Z,
                        $), b) || [])[0];
                    if (!b) return c;
                    k && (b = b.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (e = V.needsContext.test(a) ? 0 : f.length; e--;) {
                    g = f[e];
                    if (s.relative[h = g.type]) break;
                    if (h = s.find[h])
                        if (d = h(g.matches[0].replace(Z, $), ca.test(f[0].type) && t(b.parentNode) || b)) {
                            f.splice(e, 1);
                            a = d.length && p(f);
                            if (!a) return da.apply(c, d), c;
                            break
                        }
                }
            }(k || Oa(a, l))(d, b, !T, c, ca.test(a) && t(b.parentNode) || b);
            return c
        };
        u.sortStable = x.split("").sort(M).join("") === x;
        u.detectDuplicates = !!ta;
        la();
        u.sortDetached = f(function(a) {
            return a.compareDocumentPosition(C.createElement("div")) &
                1
        });
        f(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        u.attributes && f(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || g("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        });
        f(function(a) {
            return null == a.getAttribute("disabled")
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            function(a, b, c) {
                var d;
                if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            });
        return b
    }(q);
    d.find = fa;
    d.expr = fa.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.unique = fa.uniqueSort;
    d.text = fa.getText;
    d.isXMLDoc = fa.isXML;
    d.contains = fa.contains;
    var Eb = d.expr.match.needsContext,
        Fb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Zb = /^.[^:#\[\.,]*$/;
    d.filter = function(a, b, c) {
        var e = b[0];
        c && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === e.nodeType ? d.find.matchesSelector(e, a) ? [e] : [] : d.find.matches(a, d.grep(b,
            function(a) {
                return 1 === a.nodeType
            }))
    };
    d.fn.extend({
        find: function(a) {
            var b, c = [],
                e = this,
                f = e.length;
            if ("string" !== typeof a) return this.pushStack(d(a).filter(function() {
                for (b = 0; b < f; b++)
                    if (d.contains(e[b], this)) return !0
            }));
            for (b = 0; b < f; b++) d.find(a, e[b], c);
            c = this.pushStack(1 < f ? d.unique(c) : c);
            c.selector = this.selector ? this.selector + " " + a : a;
            return c
        },
        filter: function(a) {
            return this.pushStack(Ea(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(Ea(this, a || [], !0))
        },
        is: function(a) {
            return !!Ea(this, "string" ===
                typeof a && Eb.test(a) ? d(a) : a || [], !1).length
        }
    });
    var na, n = q.document,
        mc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(a, b) {
        var c, e;
        if (!a) return this;
        if ("string" === typeof a) {
            c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : mc.exec(a);
            if (!c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof d ? b[0] : b, d.merge(this, d.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : n, !0)), Fb.test(c[1]) && d.isPlainObject(b))
                    for (c in b)
                        if (d.isFunction(this[c])) this[c](b[c]);
                        else this.attr(c, b[c])
            } else {
                if ((e = n.getElementById(c[2])) && e.parentNode) {
                    if (e.id !== c[2]) return na.find(a);
                    this.length = 1;
                    this[0] = e
                }
                this.context = n;
                this.selector = a
            }
            return this
        }
        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
        if (d.isFunction(a)) return "undefined" !== typeof na.ready ? na.ready(a) : a(d);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return d.makeArray(a, this)
    }).prototype = d.fn;
    na = d(n);
    var nc = /^(?:parents|prev(?:Until|All))/,
        oc = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    d.extend({
        dir: function(a, b, c) {
            var e = [];
            for (a = a[b]; a && 9 !== a.nodeType && (void 0 === c || 1 !== a.nodeType || !d(a).is(c));) 1 === a.nodeType && e.push(a), a = a[b];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    d.fn.extend({
        has: function(a) {
            var b, c = d(a, this),
                e = c.length;
            return this.filter(function() {
                for (b = 0; b < e; b++)
                    if (d.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, e = 0, f = this.length, g = [], h = Eb.test(a) || "string" !== typeof a ? d(a, b || this.context) :
                    0; e < f; e++)
                for (c = this[e]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (h ? -1 < h.index(c) : 1 === c.nodeType && d.find.matchesSelector(c, a))) {
                        g.push(c);
                        break
                    }
            return this.pushStack(1 < g.length ? d.unique(g) : g)
        },
        index: function(a) {
            return a ? "string" === typeof a ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(d.unique(d.merge(this.get(), d(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    d.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return d.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return d.dir(a, "parentNode", c)
        },
        next: function(a) {
            return Ya(a, "nextSibling")
        },
        prev: function(a) {
            return Ya(a, "previousSibling")
        },
        nextAll: function(a) {
            return d.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return d.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return d.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return d.dir(a, "previousSibling",
                c)
        },
        siblings: function(a) {
            return d.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return d.sibling(a.firstChild)
        },
        contents: function(a) {
            return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.merge([], a.childNodes)
        }
    }, function(a, b) {
        d.fn[a] = function(c, e) {
            var f = d.map(this, b, c);
            "Until" !== a.slice(-5) && (e = c);
            e && "string" === typeof e && (f = d.filter(e, f));
            1 < this.length && (oc[a] || (f = d.unique(f)), nc.test(a) && (f = f.reverse()));
            return this.pushStack(f)
        }
    });
    var K = /\S+/g,
        Za = {};
    d.Callbacks =
        function(a) {
            a = "string" === typeof a ? Za[a] || $b(a) : d.extend({}, a);
            var b, c, e, f, g, h, k = [],
                l = !a.once && [],
                r = function(d) {
                    c = a.memory && d;
                    e = !0;
                    g = h || 0;
                    h = 0;
                    f = k.length;
                    for (b = !0; k && g < f; g++)
                        if (!1 === k[g].apply(d[0], d[1]) && a.stopOnFalse) {
                            c = !1;
                            break
                        }
                    b = !1;
                    k && (l ? l.length && r(l.shift()) : c ? k = [] : t.disable())
                },
                t = {
                    add: function() {
                        if (k) {
                            var e = k.length;
                            (function y(b) {
                                d.each(b, function(b, c) {
                                    var e = d.type(c);
                                    "function" === e ? a.unique && t.has(c) || k.push(c) : c && c.length && "string" !== e && y(c)
                                })
                            })(arguments);
                            b ? f = k.length : c && (h = e, r(c))
                        }
                        return this
                    },
                    remove: function() {
                        k && d.each(arguments, function(a, c) {
                            for (var e; - 1 < (e = d.inArray(c, k, e));) k.splice(e, 1), b && (e <= f && f--, e <= g && g--)
                        });
                        return this
                    },
                    has: function(a) {
                        return a ? -1 < d.inArray(a, k) : !(!k || !k.length)
                    },
                    empty: function() {
                        k = [];
                        f = 0;
                        return this
                    },
                    disable: function() {
                        k = l = c = void 0;
                        return this
                    },
                    disabled: function() {
                        return !k
                    },
                    lock: function() {
                        l = void 0;
                        c || t.disable();
                        return this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(a, c) {
                        !k || e && !l || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? l.push(c) : r(c));
                        return this
                    },
                    fire: function() {
                        t.fireWith(this,
                            arguments);
                        return this
                    },
                    fired: function() {
                        return !!e
                    }
                };
            return t
        };
    d.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                c = "pending",
                e = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        f.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var a = arguments;
                        return d.Deferred(function(c) {
                            d.each(b, function(b, l) {
                                var r = d.isFunction(a[b]) && a[b];
                                f[l[1]](function() {
                                    var a =
                                        r && r.apply(this, arguments);
                                    if (a && d.isFunction(a.promise)) a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
                                    else c[l[0] + "With"](this === e ? c.promise() : this, r ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? d.extend(a, e) : e
                    }
                },
                f = {};
            e.pipe = e.then;
            d.each(b, function(a, d) {
                var k = d[2],
                    l = d[3];
                e[d[1]] = k.add;
                l && k.add(function() {
                    c = l
                }, b[a ^ 1][2].disable, b[2][2].lock);
                f[d[0]] = function() {
                    f[d[0] + "With"](this === f ? e : this, arguments);
                    return this
                };
                f[d[0] + "With"] = k.fireWith
            });
            e.promise(f);
            a && a.call(f, f);
            return f
        },
        when: function(a) {
            var b = 0,
                c = N.call(arguments),
                e = c.length,
                f = 1 !== e || a && d.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : d.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? N.call(arguments) : d;
                        c === k ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                k, l, r;
            if (1 < e)
                for (k = Array(e), l = Array(e), r = Array(e); b < e; b++) c[b] && d.isFunction(c[b].promise) ? c[b].promise().done(h(b, r, c)).fail(g.reject).progress(h(b, l, k)) : --f;
            f || g.resolveWith(r, c);
            return g.promise()
        }
    });
    var oa;
    d.fn.ready =
        function(a) {
            d.ready.promise().done(a);
            return this
        };
    d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? d.readyWait++ : d.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--d.readyWait : !d.isReady) {
                if (!n.body) return setTimeout(d.ready);
                d.isReady = !0;
                !0 !== a && 0 < --d.readyWait || (oa.resolveWith(n, [d]), d.fn.triggerHandler && (d(n).triggerHandler("ready"), d(n).off("ready")))
            }
        }
    });
    d.ready.promise = function(a) {
        if (!oa)
            if (oa = d.Deferred(), "complete" === n.readyState) setTimeout(d.ready);
            else if (n.addEventListener) n.addEventListener("DOMContentLoaded",
            D, !1), q.addEventListener("load", D, !1);
        else {
            n.attachEvent("onreadystatechange", D);
            q.attachEvent("onload", D);
            var b = !1;
            try {
                b = null == q.frameElement && n.documentElement
            } catch (c) {}
            b && b.doScroll && function f() {
                if (!d.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (a) {
                        return setTimeout(f, 50)
                    }
                    $a();
                    d.ready()
                }
            }()
        }
        return oa.promise(a)
    };
    for (var pc in d(p)) break;
    p.ownLast = "0" !== pc;
    p.inlineBlockNeedsLayout = !1;
    d(function() {
        var a, b, c;
        (b = n.getElementsByTagName("body")[0]) && b.style && (a = n.createElement("div"), c = n.createElement("div"),
            c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", b.appendChild(c).appendChild(a), "undefined" !== typeof a.style.zoom && (a.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", p.inlineBlockNeedsLayout = a = 3 === a.offsetWidth) && (b.style.zoom = 1), b.removeChild(c))
    });
    (function() {
        var a = n.createElement("div");
        if (null == p.deleteExpando) {
            p.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                p.deleteExpando = !1
            }
        }
    })();
    d.acceptData = function(a) {
        var b = d.noData[(a.nodeName +
                " ").toLowerCase()],
            c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    };
    var bc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ac = /([A-Z])/g;
    d.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
            return !!a && !Fa(a)
        },
        data: function(a, b, c) {
            return bb(a, b, c)
        },
        removeData: function(a, b) {
            return cb(a, b)
        },
        _data: function(a, b, c) {
            return bb(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return cb(a,
                b, !0)
        }
    });
    d.fn.extend({
        data: function(a, b) {
            var c, e, f, g = this[0],
                h = g && g.attributes;
            if (void 0 === a) {
                if (this.length && (f = d.data(g), 1 === g.nodeType && !d._data(g, "parsedAttrs"))) {
                    for (c = h.length; c--;) h[c] && (e = h[c].name, 0 === e.indexOf("data-") && (e = d.camelCase(e.slice(5)), ab(g, e, f[e])));
                    d._data(g, "parsedAttrs", !0)
                }
                return f
            }
            return "object" === typeof a ? this.each(function() {
                d.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                d.data(this, a, b)
            }) : g ? ab(g, a, d.data(g, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                d.removeData(this,
                    a)
            })
        }
    });
    d.extend({
        queue: function(a, b, c) {
            var e;
            if (a) return b = (b || "fx") + "queue", e = d._data(a, b), c && (!e || d.isArray(c) ? e = d._data(a, b, d.makeArray(c)) : e.push(c)), e || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = d.queue(a, b),
                e = c.length,
                f = c.shift(),
                g = d._queueHooks(a, b),
                h = function() {
                    d.dequeue(a, b)
                };
            "inprogress" === f && (f = c.shift(), e--);
            f && ("fx" === b && c.unshift("inprogress"), delete g.stop, f.call(a, h, g));
            !e && g && g.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return d._data(a, c) || d._data(a, c, {
                empty: d.Callbacks("once memory").add(function() {
                    d._removeData(a,
                        b + "queue");
                    d._removeData(a, c)
                })
            })
        }
    });
    d.fn.extend({
        queue: function(a, b) {
            var c = 2;
            "string" !== typeof a && (b = a, a = "fx", c--);
            return arguments.length < c ? d.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = d.queue(this, a, b);
                d._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && d.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                d.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, e = 1,
                f = d.Deferred(),
                g = this,
                h = this.length,
                k = function() {
                    --e ||
                        f.resolveWith(g, [g])
                };
            "string" !== typeof a && (b = a, a = void 0);
            for (a = a || "fx"; h--;)(c = d._data(g[h], a + "queueHooks")) && c.empty && (e++, c.empty.add(k));
            k();
            return f.promise(b)
        }
    });
    var xa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        M = ["Top", "Right", "Bottom", "Left"],
        ia = function(a, b) {
            a = b || a;
            return "none" === d.css(a, "display") || !d.contains(a.ownerDocument, a)
        },
        aa = d.access = function(a, b, c, e, f, g, h) {
            var k = 0,
                l = a.length,
                r = null == c;
            if ("object" === d.type(c))
                for (k in f = !0, c) d.access(a, b, k, c[k], !0, g, h);
            else if (void 0 !== e && (f = !0, d.isFunction(e) || (h = !0), r && (h ? (b.call(a, e), b = null) : (r = b, b = function(a, b, c) {
                    return r.call(d(a), c)
                })), b))
                for (; k < l; k++) b(a[k], c, h ? e : e.call(a[k], k, b(a[k], c)));
            return f ? a : r ? b.call(a) : l ? b(a[0], c) : g
        },
        Ga = /^(?:checkbox|radio)$/i;
    (function() {
        var a = n.createElement("input"),
            b = n.createElement("div"),
            c = n.createDocumentFragment();
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        p.leadingWhitespace = 3 === b.firstChild.nodeType;
        p.tbody = !b.getElementsByTagName("tbody").length;
        p.htmlSerialize = !!b.getElementsByTagName("link").length;
        p.html5Clone = "<:nav></:nav>" !== n.createElement("nav").cloneNode(!0).outerHTML;
        a.type = "checkbox";
        a.checked = !0;
        c.appendChild(a);
        p.appendChecked = a.checked;
        b.innerHTML = "<textarea>x</textarea>";
        p.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
        c.appendChild(b);
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        p.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked;
        p.noCloneEvent = !0;
        b.attachEvent && (b.attachEvent("onclick", function() {
            p.noCloneEvent = !1
        }), b.cloneNode(!0).click());
        if (null == p.deleteExpando) {
            p.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                p.deleteExpando = !1
            }
        }
    })();
    (function() {
        var a, b, c = n.createElement("div");
        for (a in {
                submit: !0,
                change: !0,
                focusin: !0
            }) b = "on" + a, (p[a + "Bubbles"] = b in q) || (c.setAttribute(b, "t"), p[a + "Bubbles"] = !1 === c.attributes[b].expando)
    })();
    var Pa = /^(?:input|select|textarea)$/i,
        qc = /^key/,
        rc = /^(?:mouse|pointer|contextmenu)|click/,
        Gb = /^(?:focusinfocus|focusoutblur)$/,
        Hb = /^([^.]*)(?:\.(.+)|)$/;
    d.event = {
        global: {},
        add: function(a,
            b, c, e, f) {
            var g, h, k, l, r, p, m, n, q;
            if (k = d._data(a)) {
                c.handler && (l = c, c = l.handler, f = l.selector);
                c.guid || (c.guid = d.guid++);
                (h = k.events) || (h = k.events = {});
                (r = k.handle) || (r = k.handle = function(a) {
                    return "undefined" === typeof d || a && d.event.triggered === a.type ? void 0 : d.event.dispatch.apply(r.elem, arguments)
                }, r.elem = a);
                b = (b || "").match(K) || [""];
                for (k = b.length; k--;) g = Hb.exec(b[k]) || [], n = p = g[1], q = (g[2] || "").split(".").sort(), n && (g = d.event.special[n] || {}, n = (f ? g.delegateType : g.bindType) || n, g = d.event.special[n] || {}, p = d.extend({
                    type: n,
                    origType: p,
                    data: e,
                    handler: c,
                    guid: c.guid,
                    selector: f,
                    needsContext: f && d.expr.match.needsContext.test(f),
                    namespace: q.join(".")
                }, l), (m = h[n]) || (m = h[n] = [], m.delegateCount = 0, g.setup && !1 !== g.setup.call(a, e, q, r) || (a.addEventListener ? a.addEventListener(n, r, !1) : a.attachEvent && a.attachEvent("on" + n, r))), g.add && (g.add.call(a, p), p.handler.guid || (p.handler.guid = c.guid)), f ? m.splice(m.delegateCount++, 0, p) : m.push(p), d.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, e, f) {
            var g, h, k, l, r, n, m, p, q, w, B, F = d.hasData(a) && d._data(a);
            if (F && (n = F.events)) {
                b = (b || "").match(K) || [""];
                for (r = b.length; r--;)
                    if (k = Hb.exec(b[r]) || [], q = B = k[1], w = (k[2] || "").split(".").sort(), q) {
                        m = d.event.special[q] || {};
                        q = (e ? m.delegateType : m.bindType) || q;
                        p = n[q] || [];
                        k = k[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (l = g = p.length; g--;) h = p[g], !f && B !== h.origType || c && c.guid !== h.guid || k && !k.test(h.namespace) || e && e !== h.selector && ("**" !== e || !h.selector) || (p.splice(g, 1), h.selector && p.delegateCount--, m.remove && m.remove.call(a, h));
                        l && !p.length && (m.teardown &&
                            !1 !== m.teardown.call(a, w, F.handle) || d.removeEvent(a, q, F.handle), delete n[q])
                    } else
                        for (q in n) d.event.remove(a, q + b[r], c, e, !0);
                d.isEmptyObject(n) && (delete F.handle, d._removeData(a, "events"))
            }
        },
        trigger: function(a, b, c, e) {
            var f, g, h, k, l, r, p = [c || n],
                m = S.call(a, "type") ? a.type : a;
            l = S.call(a, "namespace") ? a.namespace.split(".") : [];
            h = f = c = c || n;
            if (3 !== c.nodeType && 8 !== c.nodeType && !Gb.test(m + d.event.triggered) && (0 <= m.indexOf(".") && (l = m.split("."), m = l.shift(), l.sort()), g = 0 > m.indexOf(":") && "on" + m, a = a[d.expando] ? a : new d.Event(m,
                    "object" === typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = l.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : d.makeArray(b, [a]), l = d.event.special[m] || {}, e || !l.trigger || !1 !== l.trigger.apply(c, b))) {
                if (!e && !l.noBubble && !d.isWindow(c)) {
                    k = l.delegateType || m;
                    Gb.test(k + m) || (h = h.parentNode);
                    for (; h; h = h.parentNode) p.push(h), f = h;
                    f === (c.ownerDocument || n) && p.push(f.defaultView || f.parentWindow || q)
                }
                for (r = 0;
                    (h = p[r++]) &&
                    !a.isPropagationStopped();) a.type = 1 < r ? k : l.bindType || m, (f = (d._data(h, "events") || {})[a.type] && d._data(h, "handle")) && f.apply(h, b), (f = g && h[g]) && f.apply && d.acceptData(h) && (a.result = f.apply(h, b), !1 === a.result && a.preventDefault());
                a.type = m;
                if (!(e || a.isDefaultPrevented() || l._default && !1 !== l._default.apply(p.pop(), b)) && d.acceptData(c) && g && c[m] && !d.isWindow(c)) {
                    (f = c[g]) && (c[g] = null);
                    d.event.triggered = m;
                    try {
                        c[m]()
                    } catch (z) {}
                    d.event.triggered = void 0;
                    f && (c[g] = f)
                }
                return a.result
            }
        },
        dispatch: function(a) {
            a = d.event.fix(a);
            var b, c, e, f, g = [],
                h = N.call(arguments);
            b = (d._data(this, "events") || {})[a.type] || [];
            var k = d.event.special[a.type] || {};
            h[0] = a;
            a.delegateTarget = this;
            if (!k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                g = d.event.handlers.call(this, a, b);
                for (b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, f = 0;
                        (c = e.handlers[f++]) && !a.isImmediatePropagationStopped();)
                        if (!a.namespace_re || a.namespace_re.test(c.namespace)) a.handleObj = c, a.data = c.data, c = ((d.event.special[c.origType] || {}).handle || c.handler).apply(e.elem,
                            h), void 0 !== c && !1 === (a.result = c) && (a.preventDefault(), a.stopPropagation());
                k.postDispatch && k.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, b) {
            var c, e, f, g, h = [],
                k = b.delegateCount,
                l = a.target;
            if (k && l.nodeType && (!a.button || "click" !== a.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== a.type)) {
                        f = [];
                        for (g = 0; g < k; g++) e = b[g], c = e.selector + " ", void 0 === f[c] && (f[c] = e.needsContext ? 0 <= d(c, this).index(l) : d.find(c, this, null, [l]).length), f[c] && f.push(e);
                        f.length &&
                            h.push({
                                elem: l,
                                handlers: f
                            })
                    }
            k < b.length && h.push({
                elem: this,
                handlers: b.slice(k)
            });
            return h
        },
        fix: function(a) {
            if (a[d.expando]) return a;
            var b, c, e;
            b = a.type;
            var f = a,
                g = this.fixHooks[b];
            g || (this.fixHooks[b] = g = rc.test(b) ? this.mouseHooks : qc.test(b) ? this.keyHooks : {});
            e = g.props ? this.props.concat(g.props) : this.props;
            a = new d.Event(f);
            for (b = e.length; b--;) c = e[b], a[c] = f[c];
            a.target || (a.target = f.srcElement || n);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey = !!a.metaKey;
            return g.filter ? g.filter(a, f) :
                a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, f = b.button,
                    g = b.fromElement;
                null == a.pageX && null !=
                    b.clientX && (c = a.target.ownerDocument || n, d = c.documentElement, c = c.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0));
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g);
                a.which || void 0 === f || (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0);
                return a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === db() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (d.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(a) {
                    return d.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, e) {
            a = d.extend(new d.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? d.event.trigger(a, null, b) : d.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    d.removeEvent = n.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    d.Event = function(a, b) {
        if (!(this instanceof d.Event)) return new d.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented &&
            !1 === a.returnValue ? V : W) : this.type = a;
        b && d.extend(this, b);
        this.timeStamp = a && a.timeStamp || d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {
        isDefaultPrevented: W,
        isPropagationStopped: W,
        isImmediatePropagationStopped: W,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = V;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = V;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a =
                this.originalEvent;
            this.isImmediatePropagationStopped = V;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        d.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var e, f = a.relatedTarget,
                    g = a.handleObj;
                if (!f || f !== this && !d.contains(this, f)) a.type = g.origType, e = g.handler.apply(this, arguments), a.type = b;
                return e
            }
        }
    });
    p.submitBubbles || (d.event.special.submit = {
        setup: function() {
            if (d.nodeName(this, "form")) return !1;
            d.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = d.nodeName(a, "input") || d.nodeName(a, "button") ? a.form : void 0) && !d._data(a, "submitBubbles") && (d.event.add(a, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), d._data(a, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && d.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (d.nodeName(this,
                    "form")) return !1;
            d.event.remove(this, "._submit")
        }
    });
    p.changeBubbles || (d.event.special.change = {
        setup: function() {
            if (Pa.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) d.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), d.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1);
                    d.event.simulate("change", this, a, !0)
                });
                return !1
            }
            d.event.add(this, "beforeactivate._change", function(a) {
                a =
                    a.target;
                Pa.test(a.nodeName) && !d._data(a, "changeBubbles") && (d.event.add(a, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || d.event.simulate("change", this.parentNode, a, !0)
                }), d._data(a, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            d.event.remove(this, "._change");
            return !Pa.test(this.nodeName)
        }
    });
    p.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            d.event.simulate(b, a.target, d.event.fix(a), !0)
        };
        d.event.special[b] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    f = d._data(e, b);
                f || e.addEventListener(a, c, !0);
                d._data(e, b, (f || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    f = d._data(e, b) - 1;
                f ? d._data(e, b, f) : (e.removeEventListener(a, c, !0), d._removeData(e, b))
            }
        }
    });
    d.fn.extend({
        on: function(a, b, c, e, f) {
            var g, h;
            if ("object" === typeof a) {
                "string" !== typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g,
                    b, c, a[g], f);
                return this
            }
            null == c && null == e ? (e = b, c = b = void 0) : null == e && ("string" === typeof b ? (e = c, c = void 0) : (e = c, c = b, b = void 0));
            if (!1 === e) e = W;
            else if (!e) return this;
            1 === f && (h = e, e = function(a) {
                d().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = d.guid++));
            return this.each(function() {
                d.event.add(this, a, e, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var e;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, d(a.delegateTarget).off(e.namespace ? e.origType + "." +
                e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" === typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b) c = b, b = void 0;
            !1 === c && (c = W);
            return this.each(function() {
                d.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                d.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return d.event.trigger(a, b, c, !0)
        }
    });
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        sc = / jQuery\d+="(?:null|\d+)"/g,
        Ib = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        Qa = /^\s+/,
        Jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Kb = /<([\w:]+)/,
        Lb = /<tbody/i,
        tc = /<|&#?\w+;/,
        uc = /<(?:script|style|link)/i,
        vc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mb = /^$|\/(?:java|ecma)script/i,
        dc = /^true\/(.*)/,
        wc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        H = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>",
                "</object>"
            ],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: p.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ra = eb(n).appendChild(n.createElement("div"));
    H.optgroup = H.option;
    H.tbody = H.tfoot = H.colgroup = H.caption = H.thead;
    H.th = H.td;
    d.extend({
        clone: function(a, b, c) {
            var e, f, g, h, k, l = d.contains(a.ownerDocument, a);
            p.html5Clone || d.isXMLDoc(a) || !Ib.test("<" +
                a.nodeName + ">") ? g = a.cloneNode(!0) : (Ra.innerHTML = a.outerHTML, Ra.removeChild(g = Ra.firstChild));
            if (!(p.noCloneEvent && p.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a)))
                for (e = w(g), k = w(a), h = 0; null != (f = k[h]); ++h)
                    if (e[h]) {
                        var r = e[h],
                            n = void 0,
                            m = void 0,
                            q = void 0;
                        if (1 === r.nodeType) {
                            n = r.nodeName.toLowerCase();
                            if (!p.noCloneEvent && r[d.expando]) {
                                q = d._data(r);
                                for (m in q.events) d.removeEvent(r, m, q.handle);
                                r.removeAttribute(d.expando)
                            }
                            if ("script" === n && r.text !== f.text) hb(r).text = f.text, ib(r);
                            else if ("object" ===
                                n) r.parentNode && (r.outerHTML = f.outerHTML), p.html5Clone && f.innerHTML && !d.trim(r.innerHTML) && (r.innerHTML = f.innerHTML);
                            else if ("input" === n && Ga.test(f.type)) r.defaultChecked = r.checked = f.checked, r.value !== f.value && (r.value = f.value);
                            else if ("option" === n) r.defaultSelected = r.selected = f.defaultSelected;
                            else if ("input" === n || "textarea" === n) r.defaultValue = f.defaultValue
                        }
                    }
            if (b)
                if (c)
                    for (k = k || w(a), e = e || w(g), h = 0; null != (f = k[h]); h++) jb(f, e[h]);
                else jb(a, g);
            e = w(g, "script");
            0 < e.length && Ha(e, !l && w(a, "script"));
            return g
        },
        buildFragment: function(a, b, c, e) {
            for (var f, g, h, k, l, r, n = a.length, m = eb(b), q = [], y = 0; y < n; y++)
                if ((g = a[y]) || 0 === g)
                    if ("object" === d.type(g)) d.merge(q, g.nodeType ? [g] : g);
                    else if (tc.test(g)) {
                h = h || m.appendChild(b.createElement("div"));
                k = (Kb.exec(g) || ["", ""])[1].toLowerCase();
                r = H[k] || H._default;
                h.innerHTML = r[1] + g.replace(Jb, "<$1></$2>") + r[2];
                for (f = r[0]; f--;) h = h.lastChild;
                !p.leadingWhitespace && Qa.test(g) && q.push(b.createTextNode(Qa.exec(g)[0]));
                if (!p.tbody)
                    for (f = (g = "table" !== k || Lb.test(g) ? "<table>" !== r[1] || Lb.test(g) ?
                            0 : h : h.firstChild) && g.childNodes.length; f--;) d.nodeName(l = g.childNodes[f], "tbody") && !l.childNodes.length && g.removeChild(l);
                d.merge(q, h.childNodes);
                for (h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else q.push(b.createTextNode(g));
            h && m.removeChild(h);
            p.appendChecked || d.grep(w(q, "input"), cc);
            for (y = 0; g = q[y++];)
                if (!e || -1 === d.inArray(g, e))
                    if (a = d.contains(g.ownerDocument, g), h = w(m.appendChild(g), "script"), a && Ha(h), c)
                        for (f = 0; g = h[f++];) Mb.test(g.type || "") && c.push(g);
            return m
        },
        cleanData: function(a,
            b) {
            for (var c, e, f, g, h = 0, k = d.expando, l = d.cache, r = p.deleteExpando, n = d.event.special; null != (c = a[h]); h++)
                if (b || d.acceptData(c))
                    if (g = (f = c[k]) && l[f]) {
                        if (g.events)
                            for (e in g.events) n[e] ? d.event.remove(c, e) : d.removeEvent(c, e, g.handle);
                        l[f] && (delete l[f], r ? delete c[k] : "undefined" !== typeof c.removeAttribute ? c.removeAttribute(k) : c[k] = null, R.push(f))
                    }
        }
    });
    d.fn.extend({
        text: function(a) {
            return aa(this, function(a) {
                    return void 0 === a ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(a))
                },
                null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || gb(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = gb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
                function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
        },
        remove: function(a, b) {
            for (var c, e = a ? d.filter(a, this) : this, f = 0; null != (c = e[f]); f++) b || 1 !== c.nodeType || d.cleanData(w(c)), c.parentNode && (b && d.contains(c.ownerDocument, c) && Ha(w(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && d.cleanData(w(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && d.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return d.clone(this, a, b)
            })
        },
        html: function(a) {
            return aa(this, function(a) {
                var c = this[0] || {},
                    e = 0,
                    f = this.length;
                if (void 0 === a) return 1 === c.nodeType ? c.innerHTML.replace(sc, "") : void 0;
                if (!("string" !== typeof a || uc.test(a) || !p.htmlSerialize && Ib.test(a) || !p.leadingWhitespace && Qa.test(a) || H[(Kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Jb, "<$1></$2>");
                    try {
                        for (; e < f; e++) c = this[e] || {}, 1 === c.nodeType && (d.cleanData(w(c, !1)), c.innerHTML =
                            a);
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            this.domManip(arguments, function(b) {
                a = this.parentNode;
                d.cleanData(w(this));
                a && a.replaceChild(b, this)
            });
            return a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = Ab.apply([], a);
            var c, e, f, g, h = 0,
                k = this.length,
                l = this,
                r = k - 1,
                n = a[0],
                m = d.isFunction(n);
            if (m || 1 < k && "string" === typeof n && !p.checkClone && vc.test(n)) return this.each(function(c) {
                var d =
                    l.eq(c);
                m && (a[0] = n.call(this, c, d.html()));
                d.domManip(a, b)
            });
            if (k && (g = d.buildFragment(a, this[0].ownerDocument, !1, this), c = g.firstChild, 1 === g.childNodes.length && (g = c), c)) {
                f = d.map(w(g, "script"), hb);
                for (e = f.length; h < k; h++) c = g, h !== r && (c = d.clone(c, !0, !0), e && d.merge(f, w(c, "script"))), b.call(this[h], c, h);
                if (e)
                    for (g = f[f.length - 1].ownerDocument, d.map(f, ib), h = 0; h < e; h++) c = f[h], Mb.test(c.type || "") && !d._data(c, "globalEval") && d.contains(g, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval((c.text || c.textContent ||
                        c.innerHTML || "").replace(wc, "")));
                g = c = null
            }
            return this
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        d.fn[a] = function(a) {
            for (var e = 0, f = [], g = d(a), h = g.length - 1; e <= h; e++) a = e === h ? this : this.clone(!0), d(g[e])[b](a), La.apply(f, a.get());
            return this.pushStack(f)
        }
    });
    var ha, lb = {};
    (function() {
        var a;
        p.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            if ((c = n.getElementsByTagName("body")[0]) && c.style) return b = n.createElement("div"),
                d = n.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), "undefined" !== typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(n.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a
        }
    })();
    var Nb = /^margin/,
        qa = new RegExp("^(" + xa + ")(?!px)[a-z%]+$", "i"),
        X, F,
        xc = /^(top|right|bottom|left)$/;
    q.getComputedStyle ? (X = function(a) {
            return a.ownerDocument.defaultView.opener ? a.ownerDocument.defaultView.getComputedStyle(a, null) : q.getComputedStyle(a, null)
        }, F = function(a, b, c) {
            var e, f, g = a.style;
            f = (c = c || X(a)) ? c.getPropertyValue(b) || c[b] : void 0;
            c && ("" !== f || d.contains(a.ownerDocument, a) || (f = d.style(a, b)), qa.test(f) && Nb.test(b) && (a = g.width, b = g.minWidth, e = g.maxWidth, g.minWidth = g.maxWidth = g.width = f, f = c.width, g.width = a, g.minWidth = b, g.maxWidth = e));
            return void 0 === f ? f : f + ""
        }) :
        n.documentElement.currentStyle && (X = function(a) {
            return a.currentStyle
        }, F = function(a, b, c) {
            var d, f, g, h = a.style;
            g = (c = c || X(a)) ? c[b] : void 0;
            null == g && h && h[b] && (g = h[b]);
            if (qa.test(g) && !xc.test(b)) {
                c = h.left;
                if (f = (d = a.runtimeStyle) && d.left) d.left = a.currentStyle.left;
                h.left = "fontSize" === b ? "1em" : g;
                g = h.pixelLeft + "px";
                h.left = c;
                f && (d.left = f)
            }
            return void 0 === g ? g : g + "" || "auto"
        });
    (function() {
        function a() {
            var a, b, c, d;
            if ((b = n.getElementsByTagName("body")[0]) && b.style) {
                a = n.createElement("div");
                c = n.createElement("div");
                c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                b.appendChild(c).appendChild(a);
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                e = f = !1;
                h = !0;
                q.getComputedStyle && (e = "1%" !== (q.getComputedStyle(a, null) || {}).top, f = "4px" === (q.getComputedStyle(a, null) || {
                        width: "4px"
                    }).width, d = a.appendChild(n.createElement("div")), d.style.cssText = a.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", d.style.marginRight = d.style.width = "0", a.style.width = "1px", h = !parseFloat((q.getComputedStyle(d, null) || {}).marginRight), a.removeChild(d));
                a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                d = a.getElementsByTagName("td");
                d[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                if (g = 0 === d[0].offsetHeight) d[0].style.display = "", d[1].style.display = "none", g = 0 === d[0].offsetHeight;
                b.removeChild(c)
            }
        }
        var b, c, e, f, g, h;
        b = n.createElement("div");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        if (c = (c = b.getElementsByTagName("a")[0]) && c.style) c.cssText = "float:left;opacity:.5", p.opacity = "0.5" === c.opacity, p.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === b.style.backgroundClip, p.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, d.extend(p, {
            reliableHiddenOffsets: function() {
                null ==
                    g && a();
                return g
            },
            boxSizingReliable: function() {
                null == f && a();
                return f
            },
            pixelPosition: function() {
                null == e && a();
                return e
            },
            reliableMarginRight: function() {
                null == h && a();
                return h
            }
        })
    })();
    d.swap = function(a, b, c, d) {
        var f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        c = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return c
    };
    var Sa = /alpha\([^)]*\)/i,
        yc = /opacity\s*=\s*([^)]*)/,
        zc = /^(none|table(?!-c[ea]).+)/,
        ec = new RegExp("^(" + xa + ")(.*)$", "i"),
        Ac = new RegExp("^([+-])=(" + xa + ")", "i"),
        Bc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ob = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ob = ["Webkit", "O", "Moz", "ms"];
    d.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = F(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": p.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, k = d.camelCase(b),
                    l = a.style;
                b =
                    d.cssProps[k] || (d.cssProps[k] = nb(l, k));
                h = d.cssHooks[b] || d.cssHooks[k];
                if (void 0 !== c) {
                    if (g = typeof c, "string" === g && (f = Ac.exec(c)) && (c = (f[1] + 1) * f[2] + parseFloat(d.css(a, b)), g = "number"), null != c && c === c && ("number" !== g || d.cssNumber[k] || (c += "px"), p.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (l[b] = "inherit"), !(h && "set" in h) || void 0 !== (c = h.set(a, c, e)))) try {
                        l[b] = c
                    } catch (n) {}
                } else return h && "get" in h && void 0 !== (f = h.get(a, !1, e)) ? f : l[b]
            }
        },
        css: function(a, b, c, e) {
            var f, g;
            g = d.camelCase(b);
            b = d.cssProps[g] ||
                (d.cssProps[g] = nb(a.style, g));
            (g = d.cssHooks[b] || d.cssHooks[g]) && "get" in g && (f = g.get(a, !0, c));
            void 0 === f && (f = F(a, b, e));
            "normal" === f && b in Ob && (f = Ob[b]);
            return "" === c || c ? (a = parseFloat(f), !0 === c || d.isNumeric(a) ? a || 0 : f) : f
        }
    });
    d.each(["height", "width"], function(a, b) {
        d.cssHooks[b] = {
            get: function(a, e, f) {
                if (e) return zc.test(d.css(a, "display")) && 0 === a.offsetWidth ? d.swap(a, Bc, function() {
                    return sb(a, b, f)
                }) : sb(a, b, f)
            },
            set: function(a, e, f) {
                var g = f && X(a);
                return qb(a, e, f ? rb(a, b, f, p.boxSizing && "border-box" === d.css(a,
                    "boxSizing", !1, g), g) : 0)
            }
        }
    });
    p.opacity || (d.cssHooks.opacity = {
        get: function(a, b) {
            return yc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                e = a.currentStyle,
                f = d.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                g = e && e.filter || c.filter || "";
            c.zoom = 1;
            if ((1 <= b || "" === b) && "" === d.trim(g.replace(Sa, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || e && !e.filter)) return;
            c.filter = Sa.test(g) ? g.replace(Sa, f) : g + " " + f
        }
    });
    d.cssHooks.marginRight = mb(p.reliableMarginRight, function(a, b) {
        if (b) return d.swap(a, {
            display: "inline-block"
        }, F, [a, "marginRight"])
    });
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        d.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0,
                    f = {};
                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++) f[a + M[d] + b] = c[d] || c[d - 2] || c[0];
                return f
            }
        };
        Nb.test(a) || (d.cssHooks[a + b].set = qb)
    });
    d.fn.extend({
        css: function(a, b) {
            return aa(this, function(a, b, f) {
                var g, h = {},
                    k = 0;
                if (d.isArray(b)) {
                    f = X(a);
                    for (g = b.length; k < g; k++) h[b[k]] =
                        d.css(a, b[k], !1, f);
                    return h
                }
                return void 0 !== f ? d.style(a, b, f) : d.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return pb(this, !0)
        },
        hide: function() {
            return pb(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ia(this) ? d(this).show() : d(this).hide()
            })
        }
    });
    d.Tween = B;
    B.prototype = {
        constructor: B,
        init: function(a, b, c, e, f, g) {
            this.elem = a;
            this.prop = c;
            this.easing = f || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (d.cssNumber[c] ?
                "" : "px")
        },
        cur: function() {
            var a = B.propHooks[this.prop];
            return a && a.get ? a.get(this) : B.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = B.propHooks[this.prop];
            this.pos = this.options.duration ? b = d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : B.propHooks._default.set(this);
            return this
        }
    };
    B.prototype.init.prototype = B.prototype;
    B.propHooks = {
        _default: {
            get: function(a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = d.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            },
            set: function(a) {
                if (d.fx.step[a.prop]) d.fx.step[a.prop](a);
                else a.elem.style && (null != a.elem.style[d.cssProps[a.prop]] || d.cssHooks[a.prop]) ? d.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    d.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    d.fx = B.prototype.init;
    d.fx.step = {};
    var Y, za, Cc = /^(?:toggle|show|hide)$/,
        Pb = new RegExp("^(?:([+-])=|)(" + xa + ")([a-z%]*)$", "i"),
        Dc = /queueHooks$/,
        ca = [function(a, b, c) {
            var e, f, g, h, k, l, n = this,
                q = {},
                m = a.style,
                z = a.nodeType && ia(a),
                y = d._data(a, "fxshow");
            c.queue || (h = d._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, k = h.empty.fire, h.empty.fire = function() {
                h.unqueued || k()
            }), h.unqueued++, n.always(function() {
                n.always(function() {
                    h.unqueued--;
                    d.queue(a, "fx").length ||
                        h.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], l = d.css(a, "display"), f = "none" === l ? d._data(a, "olddisplay") || pa(a.nodeName) : l, "inline" === f && "none" === d.css(a, "float") && (p.inlineBlockNeedsLayout && "inline" !== pa(a.nodeName) ? m.zoom = 1 : m.display = "inline-block"));
            c.overflow && (m.overflow = "hidden", p.shrinkWrapBlocks() || n.always(function() {
                m.overflow = c.overflow[0];
                m.overflowX = c.overflow[1];
                m.overflowY = c.overflow[2]
            }));
            for (e in b)
                if (f = b[e], Cc.exec(f)) {
                    delete b[e];
                    g = g || "toggle" === f;
                    if (f === (z ? "hide" : "show"))
                        if ("show" === f && y && void 0 !== y[e]) z = !0;
                        else continue;
                    q[e] = y && y[e] || d.style(a, e)
                } else l = void 0;
            if (d.isEmptyObject(q)) "inline" === ("none" === l ? pa(a.nodeName) : l) && (m.display = l);
            else
                for (e in y ? "hidden" in y && (z = y.hidden) : y = d._data(a, "fxshow", {}), g && (y.hidden = !z), z ? d(a).show() : n.done(function() {
                        d(a).hide()
                    }), n.done(function() {
                        var b;
                        d._removeData(a, "fxshow");
                        for (b in q) d.style(a, b, q[b])
                    }), q) b = ub(z ? y[e] : 0, e, n), e in y || (y[e] = b.start, z && (b.end = b.start, b.start = "width" ===
                    e || "height" === e ? 1 : 0))
        }],
        ja = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    e = c.cur(),
                    f = Pb.exec(b),
                    g = f && f[3] || (d.cssNumber[a] ? "" : "px"),
                    h = (d.cssNumber[a] || "px" !== g && +e) && Pb.exec(d.css(c.elem, a)),
                    k = 1,
                    l = 20;
                if (h && h[3] !== g) {
                    g = g || h[3];
                    f = f || [];
                    h = +e || 1;
                    do k = k || ".5", h /= k, d.style(c.elem, a, h + g); while (k !== (k = c.cur() / e) && 1 !== k && --l)
                }
                f && (h = c.start = +h || +e || 0, c.unit = g, c.end = f[1] ? h + (f[1] + 1) * f[2] : +f[2]);
                return c
            }]
        };
    d.Animation = d.extend(vb, {
        tweener: function(a, b) {
            d.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c,
                    e = 0, f = a.length; e < f; e++) c = a[e], ja[c] = ja[c] || [], ja[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? ca.unshift(a) : ca.push(a)
        }
    });
    d.speed = function(a, b, c) {
        var e = a && "object" === typeof a ? d.extend({}, a) : {
            complete: c || !c && b || d.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !d.isFunction(b) && b
        };
        e.duration = d.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            d.isFunction(e.old) &&
                e.old.call(this);
            e.queue && d.dequeue(this, e.queue)
        };
        return e
    };
    d.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(ia).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, e) {
            var f = d.isEmptyObject(a),
                g = d.speed(b, c, e);
            b = function() {
                var b = vb(this, d.extend({}, a), g);
                (f || d._data(this, "finish")) && b.stop(!0)
            };
            b.finish = b;
            return f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        },
        stop: function(a, b, c) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            "string" !== typeof a && (c = b,
                b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b = !0,
                    g = null != a && a + "queueHooks",
                    h = d.timers,
                    k = d._data(this);
                if (g) k[g] && k[g].stop && e(k[g]);
                else
                    for (g in k) k[g] && k[g].stop && Dc.test(g) && e(k[g]);
                for (g = h.length; g--;) h[g].elem !== this || null != a && h[g].queue !== a || (h[g].anim.stop(c), b = !1, h.splice(g, 1));
                !b && c || d.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var b, c = d._data(this),
                    e = c[a + "queue"];
                b = c[a + "queueHooks"];
                var f = d.timers,
                    g = e ? e.length :
                    0;
                c.finish = !0;
                d.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) e[b] && e[b].finish && e[b].finish.call(this);
                delete c.finish
            })
        }
    });
    d.each(["toggle", "show", "hide"], function(a, b) {
        var c = d.fn[b];
        d.fn[b] = function(a, d, g) {
            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(ra(b, !0), a, d, g)
        }
    });
    d.each({
        slideDown: ra("show"),
        slideUp: ra("hide"),
        slideToggle: ra("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        d.fn[a] = function(a, d, f) {
            return this.animate(b, a, d, f)
        }
    });
    d.timers = [];
    d.fx.tick = function() {
        var a, b = d.timers,
            c = 0;
        for (Y = d.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || d.fx.stop();
        Y = void 0
    };
    d.fx.timer = function(a) {
        d.timers.push(a);
        a() ? d.fx.start() : d.timers.pop()
    };
    d.fx.interval = 13;
    d.fx.start = function() {
        za || (za = setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.stop = function() {
        clearInterval(za);
        za = null
    };
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fn.delay = function(a, b) {
        a = d.fx ? d.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function(b, d) {
            var f = setTimeout(b, a);
            d.stop = function() {
                clearTimeout(f)
            }
        })
    };
    (function() {
        var a, b, c, d, f;
        b = n.createElement("div");
        b.setAttribute("className", "t");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        d = b.getElementsByTagName("a")[0];
        c = n.createElement("select");
        f = c.appendChild(n.createElement("option"));
        a = b.getElementsByTagName("input")[0];
        d.style.cssText = "top:1px";
        p.getSetAttribute = "t" !== b.className;
        p.style = /top/.test(d.getAttribute("style"));
        p.hrefNormalized = "/a" === d.getAttribute("href");
        p.checkOn = !!a.value;
        p.optSelected = f.selected;
        p.enctype = !!n.createElement("form").enctype;
        c.disabled = !0;
        p.optDisabled = !f.disabled;
        a = n.createElement("input");
        a.setAttribute("value", "");
        p.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        p.radioValue = "t" === a.value
    })();
    var Ec = /\r/g;
    d.fn.extend({
        val: function(a) {
            var b, c, e, f = this[0];
            if (arguments.length) return e =
                d.isFunction(a), this.each(function(c) {
                    1 === this.nodeType && (c = e ? a.call(this, c, d(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : d.isArray(c) && (c = d.map(c, function(a) {
                        return null == a ? "" : a + ""
                    })), b = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
                });
            if (f) {
                if ((b = d.valHooks[f.type] || d.valHooks[f.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(f, "value"))) return c;
                c = f.value;
                return "string" === typeof c ? c.replace(Ec, "") : null ==
                    c ? "" : c
            }
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = d.find.attr(a, "value");
                    return null != b ? b : d.trim(d.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, e = a.selectedIndex, f = (a = "select-one" === a.type || 0 > e) ? null : [], g = a ? e + 1 : c.length, h = 0 > e ? g : a ? e : 0; h < g; h++)
                        if (b = c[h], !(!b.selected && h !== e || (p.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && d.nodeName(b.parentNode, "optgroup"))) {
                            b = d(b).val();
                            if (a) return b;
                            f.push(b)
                        }
                    return f
                },
                set: function(a, b) {
                    for (var c, e, f = a.options,
                            g = d.makeArray(b), h = f.length; h--;)
                        if (e = f[h], 0 <= d.inArray(d.valHooks.option.get(e), g)) try {
                            e.selected = c = !0
                        } catch (k) {
                            e.scrollHeight
                        } else e.selected = !1;
                    c || (a.selectedIndex = -1);
                    return f
                }
            }
        }
    });
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(a, b) {
                if (d.isArray(b)) return a.checked = 0 <= d.inArray(d(a).val(), b)
            }
        };
        p.checkOn || (d.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var O, Qb, P = d.expr.attrHandle,
        Ta = /^(?:checked|selected)$/i,
        ba = p.getSetAttribute,
        Aa = p.input;
    d.fn.extend({
        attr: function(a, b) {
            return aa(this, d.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                d.removeAttr(this, a)
            })
        }
    });
    d.extend({
        attr: function(a, b, c) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                if ("undefined" === typeof a.getAttribute) return d.prop(a, b, c);
                1 === g && d.isXMLDoc(a) || (b = b.toLowerCase(), e = d.attrHooks[b] || (d.expr.match.bool.test(b) ? Qb : O));
                if (void 0 !== c)
                    if (null === c) d.removeAttr(a, b);
                    else {
                        if (e && "set" in e && void 0 !== (f = e.set(a, c, b))) return f;
                        a.setAttribute(b,
                            c + "");
                        return c
                    }
                else {
                    if (e && "get" in e && null !== (f = e.get(a, b))) return f;
                    f = d.find.attr(a, b);
                    return null == f ? void 0 : f
                }
            }
        },
        removeAttr: function(a, b) {
            var c, e, f = 0,
                g = b && b.match(K);
            if (g && 1 === a.nodeType)
                for (; c = g[f++];) e = d.propFix[c] || c, d.expr.match.bool.test(c) ? Aa && ba || !Ta.test(c) ? a[e] = !1 : a[d.camelCase("default-" + c)] = a[e] = !1 : d.attr(a, c, ""), a.removeAttribute(ba ? c : e)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!p.radioValue && "radio" === b && d.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        }
    });
    Qb = {
        set: function(a, b, c) {
            !1 === b ? d.removeAttr(a, c) : Aa && ba || !Ta.test(c) ? a.setAttribute(!ba && d.propFix[c] || c, c) : a[d.camelCase("default-" + c)] = a[c] = !0;
            return c
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = P[b] || d.find.attr;
        P[b] = Aa && ba || !Ta.test(b) ? function(a, b, d) {
            var h, k;
            d || (k = P[b], P[b] = h, h = null != c(a, b, d) ? b.toLowerCase() : null, P[b] = k);
            return h
        } : function(a, b, c) {
            if (!c) return a[d.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Aa && ba || (d.attrHooks.value = {
        set: function(a, b, c) {
            if (d.nodeName(a,
                    "input")) a.defaultValue = b;
            else return O && O.set(a, b, c)
        }
    });
    ba || (O = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c));
            d.value = b += "";
            if ("value" === c || b === a.getAttribute(c)) return b
        }
    }, P.id = P.name = P.coords = function(a, b, c) {
        var d;
        if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, d.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            if (c && c.specified) return c.value
        },
        set: O.set
    }, d.attrHooks.contenteditable = {
        set: function(a, b,
            c) {
            O.set(a, "" === b ? !1 : b, c)
        }
    }, d.each(["width", "height"], function(a, b) {
        d.attrHooks[b] = {
            set: function(a, d) {
                if ("" === d) return a.setAttribute(b, "auto"), d
            }
        }
    }));
    p.style || (d.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Fc = /^(?:input|select|textarea|button|object)$/i,
        Gc = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(a, b) {
            return aa(this, d.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            a = d.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] =
                        void 0, delete this[a]
                } catch (b) {}
            })
        }
    });
    d.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var e, f, g;
            g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                if (g = 1 !== g || !d.isXMLDoc(a)) b = d.propFix[b] || b, f = d.propHooks[b];
                return void 0 !== c ? f && "set" in f && void 0 !== (e = f.set(a, c, b)) ? e : a[b] = c : f && "get" in f && null !== (e = f.get(a, b)) ? e : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = d.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Fc.test(a.nodeName) || Gc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    p.hrefNormalized ||
        d.each(["href", "src"], function(a, b) {
            d.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        });
    p.optSelected || (d.propHooks.selected = {
        get: function(a) {
            if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        d.propFix[this.toLowerCase()] = this
    });
    p.enctype || (d.propFix.enctype = "encoding");
    var Ua = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(a) {
            var b,
                c, e, f, g, h = 0,
                k = this.length;
            b = "string" === typeof a && a;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).addClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(K) || []; h < k; h++)
                    if (c = this[h], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ua, " ") : " ")) {
                        for (g = 0; f = b[g++];) 0 > e.indexOf(" " + f + " ") && (e += f + " ");
                        e = d.trim(e);
                        c.className !== e && (c.className = e)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, e, f, g, h = 0,
                k = this.length;
            b = 0 === arguments.length || "string" === typeof a && a;
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).removeClass(a.call(this,
                    b, this.className))
            });
            if (b)
                for (b = (a || "").match(K) || []; h < k; h++)
                    if (c = this[h], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ua, " ") : "")) {
                        for (g = 0; f = b[g++];)
                            for (; 0 <= e.indexOf(" " + f + " ");) e = e.replace(" " + f + " ", " ");
                        e = a ? d.trim(e) : "";
                        c.className !== e && (c.className = e)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : d.isFunction(a) ? this.each(function(c) {
                    d(this).toggleClass(a.call(this, c, this.className, b), b)
                }) :
                this.each(function() {
                    if ("string" === c)
                        for (var b, f = 0, g = d(this), h = a.match(K) || []; b = h[f++];) g.hasClass(b) ? g.removeClass(b) : g.addClass(b);
                    else if ("undefined" === c || "boolean" === c) this.className && d._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : d._data(this, "__className__") || ""
                })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; b < c; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Ua, " ").indexOf(a)) return !0;
            return !1
        }
    });
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(a, b) {
            d.fn[b] = function(a, d) {
                return 0 < arguments.length ? this.on(b, null, a, d) : this.trigger(b)
            }
        });
    d.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Va = d.now(),
        Wa = /\?/,
        Hc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    d.parseJSON = function(a) {
        if (q.JSON && q.JSON.parse) return q.JSON.parse(a + "");
        var b, c = null,
            e = d.trim(a + "");
        return e && !d.trim(e.replace(Hc, function(a, d, e, k) {
            b && d && (c = 0);
            if (0 === c) return a;
            b = e || d;
            c += !k - !e;
            return ""
        })) ? Function("return " + e)() : d.error("Invalid JSON: " + a)
    };
    d.parseXML = function(a) {
        var b, c;
        if (!a || "string" !== typeof a) return null;
        try {
            q.DOMParser ? (c = new DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
        } catch (e) {
            b = void 0
        }
        b && b.documentElement &&
            !b.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + a);
        return b
    };
    var U, Q, Ic = /#.*$/,
        Rb = /([?&])_=[^&]*/,
        Jc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Kc = /^(?:GET|HEAD)$/,
        Lc = /^\/\//,
        Sb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Tb = {},
        Ia = {},
        Ub = "*/".concat("*");
    try {
        Q = location.href
    } catch (Sc) {
        Q = n.createElement("a"), Q.href = "", Q = Q.href
    }
    U = Sb.exec(Q.toLowerCase()) || [];
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Q,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(U[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ja(Ja(a,
                d.ajaxSettings), b) : Ja(d.ajaxSettings, a)
        },
        ajaxPrefilter: wb(Tb),
        ajaxTransport: wb(Ia),
        ajax: function(a, b) {
            function c(a, b, c, e) {
                var f, p, t, u;
                u = b;
                if (2 !== J) {
                    J = 2;
                    k && clearTimeout(k);
                    n = void 0;
                    h = e || "";
                    s.readyState = 0 < a ? 4 : 0;
                    e = 200 <= a && 300 > a || 304 === a;
                    if (c) {
                        t = m;
                        for (var C = s, G, H, A, v, D = t.contents, L = t.dataTypes;
                            "*" === L[0];) L.shift(), void 0 === H && (H = t.mimeType || C.getResponseHeader("Content-Type"));
                        if (H)
                            for (v in D)
                                if (D[v] && D[v].test(H)) {
                                    L.unshift(v);
                                    break
                                }
                        if (L[0] in c) A = L[0];
                        else {
                            for (v in c) {
                                if (!L[0] || t.converters[v + " " + L[0]]) {
                                    A =
                                        v;
                                    break
                                }
                                G || (G = v)
                            }
                            A = A || G
                        }
                        A ? (A !== L[0] && L.unshift(A), t = c[A]) : t = void 0
                    }
                    a: {
                        c = m;G = t;H = s;A = e;
                        var x, E, I, C = {},
                            D = c.dataTypes.slice();
                        if (D[1])
                            for (E in c.converters) C[E.toLowerCase()] = c.converters[E];
                        for (v = D.shift(); v;)
                            if (c.responseFields[v] && (H[c.responseFields[v]] = G), !I && A && c.dataFilter && (G = c.dataFilter(G, c.dataType)), I = v, v = D.shift())
                                if ("*" === v) v = I;
                                else if ("*" !== I && I !== v) {
                            E = C[I + " " + v] || C["* " + v];
                            if (!E)
                                for (x in C)
                                    if (t = x.split(" "), t[1] === v && (E = C[I + " " + t[0]] || C["* " + t[0]])) {
                                        !0 === E ? E = C[x] : !0 !== C[x] && (v = t[0], D.unshift(t[1]));
                                        break
                                    }
                            if (!0 !== E)
                                if (E && c["throws"]) G = E(G);
                                else try {
                                    G = E(G)
                                } catch (K) {
                                    t = {
                                        state: "parsererror",
                                        error: E ? K : "No conversion from " + I + " to " + v
                                    };
                                    break a
                                }
                        }
                        t = {
                            state: "success",
                            data: G
                        }
                    }
                    if (e) m.ifModified && ((u = s.getResponseHeader("Last-Modified")) && (d.lastModified[g] = u), (u = s.getResponseHeader("etag")) && (d.etag[g] = u)), 204 === a || "HEAD" === m.type ? u = "nocontent" : 304 === a ? u = "notmodified" : (u = t.state, f = t.data, p = t.error, e = !p);
                    else if (p = u, a || !u) u = "error", 0 > a && (a = 0);
                    s.status = a;
                    s.statusText = (b || u) + "";
                    e ? w.resolveWith(q, [f, u, s]) : w.rejectWith(q, [s, u, p]);
                    s.statusCode(B);
                    B = void 0;
                    l && y.trigger(e ? "ajaxSuccess" : "ajaxError", [s, m, e ? f : p]);
                    F.fireWith(q, [s, u]);
                    l && (y.trigger("ajaxComplete", [s, m]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var e, f, g, h, k, l, n, p, m = d.ajaxSetup({}, b),
                q = m.context || m,
                y = m.context && (q.nodeType || q.jquery) ? d(q) : d.event,
                w = d.Deferred(),
                F = d.Callbacks("once memory"),
                B = m.statusCode || {},
                H = {},
                D = {},
                J = 0,
                u = "canceled",
                s = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === J) {
                            if (!p)
                                for (p = {}; b =
                                    Jc.exec(h);) p[b[1].toLowerCase()] = b[2];
                            b = p[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === J ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        J || (a = D[c] = D[c] || a, H[a] = b);
                        return this
                    },
                    overrideMimeType: function(a) {
                        J || (m.mimeType = a);
                        return this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > J)
                                for (b in a) B[b] = [B[b], a[b]];
                            else s.always(a[s.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || u;
                        n && n.abort(a);
                        c(0, a);
                        return this
                    }
                };
            w.promise(s).complete = F.add;
            s.success = s.done;
            s.error = s.fail;
            m.url = ((a || m.url || Q) + "").replace(Ic, "").replace(Lc, U[1] + "//");
            m.type = b.method || b.type || m.method || m.type;
            m.dataTypes = d.trim(m.dataType || "*").toLowerCase().match(K) || [""];
            null == m.crossDomain && (e = Sb.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === U[1] && e[2] === U[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (U[3] || ("http:" === U[1] ? "80" : "443"))));
            m.data && m.processData && "string" !== typeof m.data && (m.data = d.param(m.data, m.traditional));
            xb(Tb, m, b, s);
            if (2 === J) return s;
            (l = d.event && m.global) &&
            0 === d.active++ && d.event.trigger("ajaxStart");
            m.type = m.type.toUpperCase();
            m.hasContent = !Kc.test(m.type);
            g = m.url;
            m.hasContent || (m.data && (g = m.url += (Wa.test(g) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Rb.test(g) ? g.replace(Rb, "$1_=" + Va++) : g + (Wa.test(g) ? "&" : "?") + "_=" + Va++));
            m.ifModified && (d.lastModified[g] && s.setRequestHeader("If-Modified-Since", d.lastModified[g]), d.etag[g] && s.setRequestHeader("If-None-Match", d.etag[g]));
            (m.data && m.hasContent && !1 !== m.contentType || b.contentType) && s.setRequestHeader("Content-Type",
                m.contentType);
            s.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ub + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) s.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (!1 === m.beforeSend.call(q, s, m) || 2 === J)) return s.abort();
            u = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) s[f](m[f]);
            if (n = xb(Ia, m, b, s)) {
                s.readyState = 1;
                l && y.trigger("ajaxSend", [s, m]);
                m.async && 0 < m.timeout && (k = setTimeout(function() {
                    s.abort("timeout")
                }, m.timeout));
                try {
                    J = 1, n.send(H, c)
                } catch (M) {
                    if (2 > J) c(-1, M);
                    else throw M;
                }
            } else c(-1, "No Transport");
            return s
        },
        getJSON: function(a, b, c) {
            return d.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return d.get(a, void 0, b, "script")
        }
    });
    d.each(["get", "post"], function(a, b) {
        d[b] = function(a, e, f, g) {
            d.isFunction(e) && (g = g || f, f = e, e = void 0);
            return d.ajax({
                url: a,
                type: b,
                dataType: g,
                data: e,
                success: f
            })
        }
    });
    d._evalUrl = function(a) {
        return d.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    d.fn.extend({
        wrapAll: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).wrapAll(a.call(this,
                    b))
            });
            if (this[0]) {
                var b = d(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return d.isFunction(a) ? this.each(function(b) {
                d(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = d(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = d.isFunction(a);
            return this.each(function(c) {
                d(this).wrapAll(b ?
                    a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    d.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !p.reliableHiddenOffsets() && "none" === (a.style && a.style.display || d.css(a, "display"))
    };
    d.expr.filters.visible = function(a) {
        return !d.expr.filters.hidden(a)
    };
    var Mc = /%20/g,
        gc = /\[\]$/,
        Vb = /\r?\n/g,
        Nc = /^(?:submit|button|image|reset|file)$/i,
        Oc = /^(?:input|select|textarea|keygen)/i;
    d.param =
        function(a, b) {
            var c, e = [],
                f = function(a, b) {
                    b = d.isFunction(b) ? b() : null == b ? "" : b;
                    e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            void 0 === b && (b = d.ajaxSettings && d.ajaxSettings.traditional);
            if (d.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a, function() {
                f(this.name, this.value)
            });
            else
                for (c in a) Ka(c, a[c], b, f);
            return e.join("&").replace(Mc, "+")
        };
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = d.prop(this, "elements");
                return a ? d.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !d(this).is(":disabled") && Oc.test(this.nodeName) && !Nc.test(a) && (this.checked || !Ga.test(a))
            }).map(function(a, b) {
                var c = d(this).val();
                return null == c ? null : d.isArray(c) ? d.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Vb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Vb, "\r\n")
                }
            }).get()
        }
    });
    d.ajaxSettings.xhr = void 0 !== q.ActiveXObject ? function() {
        var a;
        if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                yb())) a: {
            try {
                a = new q.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {}
            a = void 0
        }
        return a
    } : yb;
    var Pc = 0,
        Ba = {},
        Ca = d.ajaxSettings.xhr();
    q.attachEvent && q.attachEvent("onunload", function() {
        for (var a in Ba) Ba[a](void 0, !0)
    });
    p.cors = !!Ca && "withCredentials" in Ca;
    (Ca = p.ajax = !!Ca) && d.ajaxTransport(function(a) {
        if (!a.crossDomain || p.cors) {
            var b;
            return {
                send: function(c, e) {
                    var f, g = a.xhr(),
                        h = ++Pc;
                    g.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields)
                        for (f in a.xhrFields) g[f] = a.xhrFields[f];
                    a.mimeType &&
                        g.overrideMimeType && g.overrideMimeType(a.mimeType);
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (f in c) void 0 !== c[f] && g.setRequestHeader(f, c[f] + "");
                    g.send(a.hasContent && a.data || null);
                    b = function(c, f) {
                        var n, p, m;
                        if (b && (f || 4 === g.readyState))
                            if (delete Ba[h], b = void 0, g.onreadystatechange = d.noop, f) 4 !== g.readyState && g.abort();
                            else {
                                m = {};
                                n = g.status;
                                "string" === typeof g.responseText && (m.text = g.responseText);
                                try {
                                    p = g.statusText
                                } catch (q) {
                                    p = ""
                                }
                                n || !a.isLocal || a.crossDomain ? 1223 ===
                                    n && (n = 204) : n = m.text ? 200 : 404
                            }
                        m && e(n, p, m, g.getAllResponseHeaders())
                    };
                    a.async ? 4 === g.readyState ? setTimeout(b) : g.onreadystatechange = Ba[h] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                d.globalEval(a);
                return a
            }
        }
    });
    d.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET",
            a.global = !1)
    });
    d.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = n.head || d("head")[0] || n.documentElement;
            return {
                send: function(d, f) {
                    b = n.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) {
                        if (c || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success")
                    };
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    if (b) b.onload(void 0, !0)
                }
            }
        }
    });
    var Wb = [],
        Xa = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Wb.pop() || d.expando + "_" + Va++;
            this[a] = !0;
            return a
        }
    });
    d.ajaxPrefilter("json jsonp", function(a, b, c) {
        var e, f, g, h = !1 !== a.jsonp && (Xa.test(a.url) ? "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Xa.test(a.data) && "data");
        if (h || "jsonp" === a.dataTypes[0]) return e = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(Xa,
            "$1" + e) : !1 !== a.jsonp && (a.url += (Wa.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
            g || d.error(e + " was not called");
            return g[0]
        }, a.dataTypes[0] = "json", f = q[e], q[e] = function() {
            g = arguments
        }, c.always(function() {
            q[e] = f;
            a[e] && (a.jsonpCallback = b.jsonpCallback, Wb.push(e));
            g && d.isFunction(f) && f(g[0]);
            g = f = void 0
        }), "script"
    });
    d.parseHTML = function(a, b, c) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || n;
        var e = Fb.exec(a);
        c = !c && [];
        if (e) return [b.createElement(e[1])];
        e = d.buildFragment([a], b, c);
        c && c.length && d(c).remove();
        return d.merge([], e.childNodes)
    };
    var Xb = d.fn.load;
    d.fn.load = function(a, b, c) {
        if ("string" !== typeof a && Xb) return Xb.apply(this, arguments);
        var e, f, g, h = this,
            k = a.indexOf(" ");
        0 <= k && (e = d.trim(a.slice(k, a.length)), a = a.slice(0, k));
        d.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (g = "POST");
        0 < h.length && d.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            h.html(e ? d("<div>").append(d.parseHTML(a)).find(e) : a)
        }).complete(c && function(a,
            b) {
            h.each(c, f || [a.responseText, b, a])
        });
        return this
    };
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        d.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    d.expr.filters.animated = function(a) {
        return d.grep(d.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Yb = q.document.documentElement;
    d.offset = {
        setOffset: function(a, b, c) {
            var e, f, g, h = d.css(a, "position"),
                k = d(a),
                l = {};
            "static" === h && (a.style.position = "relative");
            g = k.offset();
            f = d.css(a, "top");
            e = d.css(a, "left");
            ("absolute" ===
                h || "fixed" === h) && -1 < d.inArray("auto", [f, e]) ? (e = k.position(), f = e.top, e = e.left) : (f = parseFloat(f) || 0, e = parseFloat(e) || 0);
            d.isFunction(b) && (b = b.call(a, c, g));
            null != b.top && (l.top = b.top - g.top + f);
            null != b.left && (l.left = b.left - g.left + e);
            "using" in b ? b.using.call(a, l) : k.css(l)
        }
    };
    d.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                d.offset.setOffset(this, a, b)
            });
            var b, c, e = {
                    top: 0,
                    left: 0
                },
                f = (c = this[0]) && c.ownerDocument;
            if (f) {
                b = f.documentElement;
                if (!d.contains(b, c)) return e;
                "undefined" !== typeof c.getBoundingClientRect && (e = c.getBoundingClientRect());
                c = zb(f);
                return {
                    top: e.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: e.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    e = this[0];
                "fixed" === d.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), d.nodeName(a[0], "html") || (c = a.offset()), c.top += d.css(a[0], "borderTopWidth", !0), c.left += d.css(a[0], "borderLeftWidth", !0));
                return {
                    top: b.top -
                        c.top - d.css(e, "marginTop", !0),
                    left: b.left - c.left - d.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Yb; a && !d.nodeName(a, "html") && "static" === d.css(a, "position");) a = a.offsetParent;
                return a || Yb
            })
        }
    });
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        d.fn[a] = function(e) {
            return aa(this, function(a, e, h) {
                var k = zb(a);
                if (void 0 === h) return k ? b in k ? k[b] : k.document.documentElement[e] : a[e];
                k ? k.scrollTo(c ? d(k).scrollLeft() :
                    h, c ? h : d(k).scrollTop()) : a[e] = h
            }, a, e, arguments.length, null)
        }
    });
    d.each(["top", "left"], function(a, b) {
        d.cssHooks[b] = mb(p.pixelPosition, function(a, e) {
            if (e) return e = F(a, b), qa.test(e) ? d(a).position()[b] + "px" : e
        })
    });
    d.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        d.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, e) {
            d.fn[e] = function(e, g) {
                var h = arguments.length && (c || "boolean" !== typeof e),
                    k = c || (!0 === e || !0 === g ? "margin" : "border");
                return aa(this, function(b, c, e) {
                    return d.isWindow(b) ? b.document.documentElement["client" +
                        a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === e ? d.css(b, c, k) : d.style(b, c, e, k)
                }, b, h ? e : void 0, h, null)
            }
        })
    });
    d.fn.size = function() {
        return this.length
    };
    d.fn.andSelf = d.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var Qc = q.jQuery,
        Rc = q.$;
    d.noConflict = function(a) {
        q.$ === d && (q.$ = Rc);
        a && q.jQuery === d && (q.jQuery = Qc);
        return d
    };
    "undefined" === typeof ga && (q.jQuery = q.$ = d);
    return d
});
(function(l, u) {
    u(l.MMTF = l.MMTF || {})
})(this, function(l) {
    function u(a, b, c) {
        for (var f = 0, d = c.length; f < d; f++) {
            var e = c.charCodeAt(f);
            if (128 > e) a.setUint8(b++, e >>> 0 & 127 | 0);
            else if (2048 > e) a.setUint8(b++, e >>> 6 & 31 | 192), a.setUint8(b++, e >>> 0 & 63 | 128);
            else if (65536 > e) a.setUint8(b++, e >>> 12 & 15 | 224), a.setUint8(b++, e >>> 6 & 63 | 128), a.setUint8(b++, e >>> 0 & 63 | 128);
            else if (1114112 > e) a.setUint8(b++, e >>> 18 & 7 | 240), a.setUint8(b++, e >>> 12 & 63 | 128), a.setUint8(b++, e >>> 6 & 63 | 128), a.setUint8(b++, e >>> 0 & 63 | 128);
            else throw Error("bad codepoint " +
                e);
        }
    }

    function I(a) {
        for (var b = 0, c = 0, f = a.length; c < f; c++) {
            var d = a.charCodeAt(c);
            if (128 > d) b += 1;
            else if (2048 > d) b += 2;
            else if (65536 > d) b += 3;
            else if (1114112 > d) b += 4;
            else throw Error("bad codepoint " + d);
        }
        return b
    }

    function z(a, b, c) {
        var f = typeof a;
        if ("string" === f) {
            var d = I(a);
            if (32 > d) return b.setUint8(c, d | 160), u(b, c + 1, a), 1 + d;
            if (256 > d) return b.setUint8(c, 217), b.setUint8(c + 1, d), u(b, c + 2, a), 2 + d;
            if (65536 > d) return b.setUint8(c, 218), b.setUint16(c + 1, d), u(b, c + 3, a), 3 + d;
            if (4294967296 > d) return b.setUint8(c, 219), b.setUint32(c +
                1, d), u(b, c + 5, a), 5 + d
        }
        if (a instanceof Uint8Array) {
            var d = a.byteLength,
                e = new Uint8Array(b.buffer);
            if (256 > d) return b.setUint8(c, 196), b.setUint8(c + 1, d), e.set(a, c + 2), 2 + d;
            if (65536 > d) return b.setUint8(c, 197), b.setUint16(c + 1, d), e.set(a, c + 3), 3 + d;
            if (4294967296 > d) return b.setUint8(c, 198), b.setUint32(c + 1, d), e.set(a, c + 5), 5 + d
        }
        if ("number" === f) {
            if (!isFinite(a)) throw Error("Number not finite: " + a);
            if (Math.floor(a) !== a) return b.setUint8(c, 203), b.setFloat64(c + 1, a), 9;
            if (0 <= a) {
                if (128 > a) return b.setUint8(c, a), 1;
                if (256 > a) return b.setUint8(c,
                    204), b.setUint8(c + 1, a), 2;
                if (65536 > a) return b.setUint8(c, 205), b.setUint16(c + 1, a), 3;
                if (4294967296 > a) return b.setUint8(c, 206), b.setUint32(c + 1, a), 5;
                throw Error("Number too big 0x" + a.toString(16));
            }
            if (-32 <= a) return b.setInt8(c, a), 1;
            if (-128 <= a) return b.setUint8(c, 208), b.setInt8(c + 1, a), 2;
            if (-32768 <= a) return b.setUint8(c, 209), b.setInt16(c + 1, a), 3;
            if (-2147483648 <= a) return b.setUint8(c, 210), b.setInt32(c + 1, a), 5;
            throw Error("Number too small -0x" + (-a).toString(16).substr(1));
        }
        if (null === a) return b.setUint8(c, 192),
            1;
        if ("boolean" === f) return b.setUint8(c, a ? 195 : 194), 1;
        if ("object" === f) {
            f = 0;
            if (e = Array.isArray(a)) d = a.length;
            else var g = Object.keys(a),
                d = g.length;
            16 > d ? (b.setUint8(c, d | (e ? 144 : 128)), f = 1) : 65536 > d ? (b.setUint8(c, e ? 220 : 222), b.setUint16(c + 1, d), f = 3) : 4294967296 > d && (b.setUint8(c, e ? 221 : 223), b.setUint32(c + 1, d), f = 5);
            if (e)
                for (e = 0; e < d; e++) f += z(a[e], b, c + f);
            else
                for (e = 0; e < d; e++) var h = g[e],
                    f = f + z(h, b, c + f),
                    f = f + z(a[h], b, c + f);
            return f
        }
        throw Error("Unknown type " + f);
    }

    function A(a) {
        var b = typeof a;
        if ("string" === b) {
            var c = I(a);
            if (32 > c) return 1 + c;
            if (256 > c) return 2 + c;
            if (65536 > c) return 3 + c;
            if (4294967296 > c) return 5 + c
        }
        if (a instanceof Uint8Array) {
            c = a.byteLength;
            if (256 > c) return 2 + c;
            if (65536 > c) return 3 + c;
            if (4294967296 > c) return 5 + c
        }
        if ("number" === b) {
            if (Math.floor(a) !== a) return 9;
            if (0 <= a) {
                if (128 > a) return 1;
                if (256 > a) return 2;
                if (65536 > a) return 3;
                if (4294967296 > a) return 5;
                throw Error("Number too big 0x" + a.toString(16));
            }
            if (-32 <= a) return 1;
            if (-128 <= a) return 2;
            if (-32768 <= a) return 3;
            if (-2147483648 <= a) return 5;
            throw Error("Number too small -0x" +
                a.toString(16).substr(1));
        }
        if ("boolean" === b || null === a) return 1;
        if ("object" === b) {
            b = 0;
            if (Array.isArray(a))
                for (var c = a.length, f = 0; f < c; f++) b += A(a[f]);
            else
                for (var d = Object.keys(a), c = d.length, f = 0; f < c; f++) var e = d[f],
                    b = b + (A(e) + A(a[e]));
            if (16 > c) return 1 + b;
            if (65536 > c) return 3 + b;
            if (4294967296 > c) return 5 + b;
            throw Error("Array or object too long 0x" + c.toString(16));
        }
        throw Error("Unknown type " + b);
    }

    function J(a) {
        var b = new ArrayBuffer(A(a)),
            c = new DataView(b);
        z(a, c, 0);
        return new Uint8Array(b)
    }

    function m(a, b, c) {
        return b ?
            new a(b.buffer, b.byteOffset, b.byteLength / (c || 1)) : void 0
    }

    function B(a, b) {
        var c = a.length / 2;
        b || (b = new Int16Array(c));
        for (var f = 0, d = 0; f < c; ++f, d += 2) b[f] = a[d] << 8 ^ a[d + 1] << 0;
        return b
    }

    function p(a, b) {
        var c = a.length / 4;
        b || (b = new Int32Array(c));
        for (var f = 0, d = 0; f < c; ++f, d += 4) b[f] = a[d] << 24 ^ a[d + 1] << 16 ^ a[d + 2] << 8 ^ a[d + 3] << 0;
        return b
    }

    function q(a, b) {
        var c = a.length;
        b || (b = new Uint8Array(4 * c));
        for (var f = m(DataView, b), d = 0; d < c; ++d) f.setInt32(4 * d, a[d]);
        return m(Uint8Array, b)
    }

    function w(a, b, c) {
        var f = a.length;
        b = 1 / b;
        c || (c = new Float32Array(f));
        for (var d = 0; d < f; ++d) c[d] = a[d] * b;
        return c
    }

    function K(a, b, c) {
        var f = a.length;
        c || (c = new Int32Array(f));
        for (var d = 0; d < f; ++d) c[d] = Math.round(a[d] * b);
        return c
    }

    function C(a, b) {
        var c, f;
        if (!b) {
            var d = 0;
            c = 0;
            for (f = a.length; c < f; c += 2) d += a[c + 1];
            b = new a.constructor(d)
        }
        c = d = 0;
        for (f = a.length; c < f; c += 2)
            for (var e = a[c], g = a[c + 1], h = 0; h < g; ++h) b[d] = e, ++d;
        return b
    }

    function E(a) {
        if (0 === a.length) return new Int32Array;
        var b, c, f = 2;
        b = 1;
        for (c = a.length; b < c; ++b) a[b - 1] !== a[b] && (f += 2);
        var f = new Int32Array(f),
            d = 0,
            e = 1;
        b = 1;
        for (c = a.length; b <
            c; ++b) a[b - 1] !== a[b] ? (f[d] = a[b - 1], f[d + 1] = e, e = 1, d += 2) : ++e;
        f[d] = a[a.length - 1];
        f[d + 1] = e;
        return f
    }

    function N(a, b) {
        var c = a.length;
        b || (b = new a.constructor(c));
        c && (b[0] = a[0]);
        for (var f = 1; f < c; ++f) b[f] = a[f] + b[f - 1];
        return b
    }

    function O(a, b) {
        var c = a.length;
        b || (b = new a.constructor(c));
        b[0] = a[0];
        for (var f = 1; f < c; ++f) b[f] = a[f] - a[f - 1];
        return b
    }

    function x(a, b) {
        var c = a instanceof Int8Array ? 127 : 32767,
            f = -c - 1,
            d = a.length,
            e, g;
        if (!b) {
            for (e = g = 0; e < d; ++e) a[e] < c && a[e] > f && ++g;
            b = new Int32Array(g)
        }
        for (g = e = 0; e < d;) {
            for (var h = 0; a[e] ===
                c || a[e] === f;) h += a[e], ++e;
            h += a[e];
            ++e;
            b[g] = h;
            ++g
        }
        return b
    }

    function $(a) {
        var b = m(DataView, a),
            c = b.getInt32(0),
            b = b.getInt32(4),
            f = a.subarray(8, 12);
        a = a.subarray(12);
        return [c, a, b, f]
    }

    function r(a, b, c, f) {
        var d = new ArrayBuffer(12 + f.byteLength),
            e = new Uint8Array(d),
            d = new DataView(d);
        d.setInt32(0, a);
        d.setInt32(4, b);
        c && e.set(c, 8);
        e.set(f, 12);
        return e
    }

    function P(a) {
        var b = a.length;
        a = m(Uint8Array, a);
        return r(2, b, void 0, a)
    }

    function Q(a) {
        var b = a.length;
        a = q(a);
        return r(4, b, void 0, a)
    }

    function R(a, b) {
        var c = a.length / b,
            f = q([b]),
            d = m(Uint8Array, a);
        return r(5, c, f, d)
    }

    function S(a) {
        var b = a.length;
        a = q(E(a));
        return r(6, b, void 0, a)
    }

    function D(a) {
        var b = a.length;
        a = q(E(O(a)));
        return r(8, b, void 0, a)
    }

    function aa(a, b) {
        var c = a.length,
            f = q([b]),
            d = q(E(K(a, b)));
        return r(9, c, f, d)
    }

    function v(a, b) {
        var c = a.length,
            f = q([b]),
            d, e = O(K(a, b), void 0),
            g, h = e.length;
        for (g = d = 0; g < h; ++g) {
            var k = e[g];
            0 === k ? ++d : d = 32767 === k || -32768 === k ? d + 2 : 0 < k ? d + Math.ceil(k / 32767) : d + Math.ceil(k / -32768)
        }
        d = new Int16Array(d);
        var F = 0;
        for (g = 0; g < h; ++g) {
            k = e[g];
            if (0 <= k)
                for (; 32767 <=
                    k;) d[F] = 32767, ++F, k -= 32767;
            else
                for (; - 32768 >= k;) d[F] = -32768, ++F, k -= -32768;
            d[F] = k;
            ++F
        }
        e = void 0;
        g = d.length;
        e || (e = new Uint8Array(2 * g));
        h = m(DataView, e);
        for (k = 0; k < g; ++k) h.setInt16(2 * k, d[k]);
        d = m(Uint8Array, e);
        return r(10, c, f, d)
    }

    function T(a) {
        var b = {};
        U.forEach(function(c) {
            void 0 !== a[c] && (b[c] = a[c])
        });
        a.bondAtomList && (b.bondAtomList = Q(a.bondAtomList));
        a.bondOrderList && (b.bondOrderList = P(a.bondOrderList));
        b.xCoordList = v(a.xCoordList, 1E3);
        b.yCoordList = v(a.yCoordList, 1E3);
        b.zCoordList = v(a.zCoordList, 1E3);
        a.bFactorList &&
            (b.bFactorList = v(a.bFactorList, 100));
        a.atomIdList && (b.atomIdList = D(a.atomIdList));
        a.altLocList && (b.altLocList = S(a.altLocList));
        a.occupancyList && (b.occupancyList = aa(a.occupancyList, 100));
        b.groupIdList = D(a.groupIdList);
        b.groupTypeList = Q(a.groupTypeList);
        a.secStructList && (b.secStructList = P(a.secStructList, 1));
        a.insCodeList && (b.insCodeList = S(a.insCodeList));
        a.sequenceIndexList && (b.sequenceIndexList = D(a.sequenceIndexList));
        b.chainIdList = R(a.chainIdList, 4);
        a.chainNameList && (b.chainNameList = R(a.chainNameList,
            4));
        return b
    }

    function V(a) {
        function b(a) {
            for (var b = {}, c = 0; c < a; c++) {
                var d = e();
                b[d] = e()
            }
            return b
        }

        function c(b) {
            var c = a.subarray(g, g + b);
            g += b;
            return c
        }

        function f(b) {
            var c = a.subarray(g, g + b);
            g += b;
            if (65535 < b) {
                b = [];
                for (var d = 0; d < c.length; d += 65535) b.push(String.fromCharCode.apply(null, c.subarray(d, d + 65535)));
                return b.join("")
            }
            return String.fromCharCode.apply(null, c)
        }

        function d(a) {
            for (var b = Array(a), c = 0; c < a; c++) b[c] = e();
            return b
        }

        function e() {
            var e = a[g];
            if (0 === (e & 128)) return g++, e;
            if (128 === (e & 240)) return g++,
                b(e & 15);
            if (144 === (e & 240)) return g++, d(e & 15);
            if (160 === (e & 224)) return g++, f(e & 31);
            if (224 === (e & 224)) return e = h.getInt8(g), g++, e;
            switch (e) {
                case 192:
                    return g++, null;
                case 194:
                    return g++, !1;
                case 195:
                    return g++, !0;
                case 196:
                    return e = h.getUint8(g + 1), g += 2, c(e);
                case 197:
                    return e = h.getUint16(g + 1), g += 3, c(e);
                case 198:
                    return e = h.getUint32(g + 1), g += 5, c(e);
                case 202:
                    return e = h.getFloat32(g + 1), g += 5, e;
                case 203:
                    return e = h.getFloat64(g + 1), g += 9, e;
                case 204:
                    return e = a[g + 1], g += 2, e;
                case 205:
                    return e = h.getUint16(g + 1), g += 3, e;
                case 206:
                    return e =
                        h.getUint32(g + 1), g += 5, e;
                case 208:
                    return e = h.getInt8(g + 1), g += 2, e;
                case 209:
                    return e = h.getInt16(g + 1), g += 3, e;
                case 210:
                    return e = h.getInt32(g + 1), g += 5, e;
                case 217:
                    return e = h.getUint8(g + 1), g += 2, f(e);
                case 218:
                    return e = h.getUint16(g + 1), g += 3, f(e);
                case 219:
                    return e = h.getUint32(g + 1), g += 5, f(e);
                case 220:
                    return e = h.getUint16(g + 1), g += 3, d(e);
                case 221:
                    return e = h.getUint32(g + 1), g += 5, d(e);
                case 222:
                    return e = h.getUint16(g + 1), g += 3, b(e);
                case 223:
                    return e = h.getUint32(g + 1), g += 5, b(e)
            }
            throw Error("Unknown type 0x" + e.toString(16));
        }
        var g = 0,
            h = new DataView(a.buffer);
        return e()
    }

    function ba(a, b, c, f) {
        switch (a) {
            case 1:
                f = void 0;
                c = b.length;
                f || (f = new Float32Array(c / 4));
                a = m(DataView, f);
                b = m(DataView, b);
                var d = 0,
                    e = 0;
                for (c /= 4; d < c; ++d, e += 4) a.setFloat32(e, b.getFloat32(e), !0);
                return f;
            case 2:
                return m(Int8Array, b);
            case 3:
                return B(b);
            case 4:
                return p(b);
            case 5:
                return m(Uint8Array, b);
            case 6:
                return C(p(b), new Uint8Array(c));
            case 7:
                return C(p(b));
            case 8:
                return f = p(b), N(C(f), void 0);
            case 9:
                return a = p(b), f = p(f)[0], w(C(a, m(Int32Array, void 0, 4)), f, void 0);
            case 10:
                return a = B(b), f = p(f)[0], a = x(a, m(Int32Array, void 0, 4)), b = m(Float32Array, a, 4), w(N(a, m(Int32Array, b, 4)), f, b);
            case 11:
                return w(B(b), p(f)[0]);
            case 12:
                return a = B(b), f = p(f)[0], w(x(a, m(Int32Array, void 0, 4)), f, void 0);
            case 13:
                return a = m(Int8Array, b), f = p(f)[0], w(x(a, m(Int32Array, void 0, 4)), f, void 0);
            case 14:
                return x(B(b));
            case 15:
                return x(m(Int8Array, b))
        }
    }

    function W(a, b) {
        b = b || {};
        var c = b.ignoreFields,
            f = {};
        ca.forEach(function(b) {
            var e = c ? -1 !== c.indexOf(b) : !1,
                g = a[b];
            e || void 0 === g || (f[b] = g instanceof Uint8Array ?
                ba.apply(null, $(g)) : g)
        });
        return f
    }

    function X(a) {
        return String.fromCharCode.apply(null, a).replace(/\0/g, "")
    }

    function Y(a, b) {
        a instanceof ArrayBuffer && (a = new Uint8Array(a));
        var c;
        c = a instanceof Uint8Array ? V(a) : a;
        return W(c, b)
    }

    function Z(a, b, c, f) {
        var d = new XMLHttpRequest;
        d.addEventListener("load", function() {
            try {
                var a = Y(d.response);
                c(a)
            } catch (b) {
                f(b)
            }
        }, !0);
        d.addEventListener("error", f, !0);
        d.responseType = "arraybuffer";
        d.open("GET", b + a.toUpperCase());
        d.send()
    }
    var U = "mmtfVersion mmtfProducer unitCell spaceGroup structureId title depositionDate releaseDate experimentalMethods resolution rFree rWork bioAssemblyList ncsOperatorList entityList groupList numBonds numAtoms numGroups numChains numModels groupsPerChain chainsPerModel".split(" "),
        ca = U.concat("xCoordList yCoordList zCoordList groupIdList groupTypeList chainIdList bFactorList atomIdList altLocList occupancyList secStructList insCodeList sequenceIndexList chainNameList bondAtomList bondOrderList".split(" "));
    l.encode = function(a) {
        return J(T(a))
    };
    l.decode = Y;
    l.traverse = function(a, b, c) {
        c = c || {};
        c = c.firstModelOnly;
        var f = b.onModel,
            d = b.onChain,
            e = b.onGroup,
            g = b.onAtom;
        b = b.onBond;
        var h = 0,
            k = 0,
            m = 0,
            l = 0,
            p = 0,
            q = -1,
            r = a.chainNameList,
            u = a.secStructList,
            B = a.insCodeList,
            w = a.sequenceIndexList,
            x = a.atomIdList,
            z = a.bFactorList,
            A = a.altLocList,
            C = a.occupancyList,
            v = a.bondAtomList,
            E = a.bondOrderList,
            D, I, L, n, s;
        D = 0;
        for (I = a.chainsPerModel.length; D < I && !(c && 0 < h); ++D) {
            var G = a.chainsPerModel[h];
            f && f({
                chainCount: G,
                modelIndex: h
            });
            for (p = 0; p < G; ++p) {
                var H = a.groupsPerChain[k];
                d && (L = X(a.chainIdList.subarray(4 * k, 4 * k + 4)), n = null, r && (n = X(r.subarray(4 * k, 4 * k + 4))), d({
                    groupCount: H,
                    chainIndex: k,
                    modelIndex: h,
                    chainId: L,
                    chainName: n
                }));
                for (L = 0; L < H; ++L) {
                    var t = a.groupList[a.groupTypeList[m]],
                        M = t.atomNameList.length;
                    if (e) {
                        n = null;
                        u && (n = u[m]);
                        s = null;
                        a.insCodeList && (s = String.fromCharCode(B[m]));
                        var y = null;
                        w && (y = w[m]);
                        e({
                            atomCount: M,
                            groupIndex: m,
                            chainIndex: k,
                            modelIndex: h,
                            groupId: a.groupIdList[m],
                            groupType: a.groupTypeList[m],
                            groupName: t.groupName,
                            singleLetterCode: t.singleLetterCode,
                            chemCompType: t.chemCompType,
                            secStruct: n,
                            insCode: s,
                            sequenceIndex: y
                        })
                    }
                    for (n = 0; n < M; ++n) {
                        if (g) {
                            s = null;
                            x && (s = x[l]);
                            y = null;
                            z && (y = z[l]);
                            var J = null;
                            A && (J = String.fromCharCode(A[l]));
                            var K = null;
                            C && (K = C[l]);
                            g({
                                atomIndex: l,
                                groupIndex: m,
                                chainIndex: k,
                                modelIndex: h,
                                atomId: s,
                                element: t.elementList[n],
                                atomName: t.atomNameList[n],
                                formalCharge: t.formalChargeList[n],
                                xCoord: a.xCoordList[l],
                                yCoord: a.yCoordList[l],
                                zCoord: a.zCoordList[l],
                                bFactor: y,
                                altLoc: J,
                                occupancy: K
                            })
                        }
                        l += 1
                    }
                    if (b)
                        for (y = t.bondAtomList, n = 0, s = t.bondOrderList.length; n < s; ++n) b({
                            atomIndex1: l - M + y[2 * n],
                            atomIndex2: l - M + y[2 * n + 1],
                            bondOrder: t.bondOrderList[n]
                        });
                    m += 1
                }
                k += 1
            }
            p = q + 1;
            q = l - 1;
            if (b && v)
                for (n = 0, s = v.length; n < s; n += 2) G = v[n], H = v[n + 1], (G >= p && G <= q || H >= p && H <= q) && b({
                    atomIndex1: G,
                    atomIndex2: H,
                    bondOrder: E ? E[n / 2] : null
                });
            h += 1
        }
    };
    l.fetch = function(a, b, c) {
        Z(a,
            "http://mmtf.rcsb.org/v1.0/full/", b, c)
    };
    l.fetchReduced = function(a, b, c) {
        Z(a, "http://mmtf.rcsb.org/v1.0/reduced/", b, c)
    };
    l.version = "v1.0.0";
    l.fetchUrl = "http://mmtf.rcsb.org/v1.0/full/";
    l.fetchReducedUrl = "http://mmtf.rcsb.org/v1.0/reduced/";
    l.encodeMsgpack = J;
    l.encodeMmtf = T;
    l.decodeMsgpack = V;
    l.decodeMmtf = W;
    Object.defineProperty(l, "__esModule", {
        value: !0
    })
});
(function(P) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = P() : "function" === typeof define && define.amd ? define("pako", [], P) : ("undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : this).pako = P()
})(function() {
    return function p(u, c, F) {
        function x(g, m) {
            if (!c[g]) {
                if (!u[g]) {
                    var h = "function" == typeof require && require;
                    if (!m && h) return h(g, !0);
                    if (f) return f(g, !0);
                    h = Error("Cannot find module '" + g + "'");
                    throw h.code = "MODULE_NOT_FOUND", h;
                }
                h = c[g] = {
                    exports: {}
                };
                u[g][0].call(h.exports, function(h) {
                    var f = u[g][1][h];
                    return x(f ? f : h)
                }, h, h.exports, p, u, c, F)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, h = 0; h < F.length; h++) x(F[h]);
        return x
    }({
        1: [function(p, u, c) {
            p = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
            c.assign = function(f) {
                for (var h = Array.prototype.slice.call(arguments, 1); h.length;) {
                    var g = h.shift();
                    if (g) {
                        if ("object" !== typeof g) throw new TypeError(g + "must be non-object");
                        for (var m in g) g.hasOwnProperty(m) &&
                            (f[m] = g[m])
                    }
                }
                return f
            };
            c.shrinkBuf = function(f, h) {
                if (f.length === h) return f;
                if (f.subarray) return f.subarray(0, h);
                f.length = h;
                return f
            };
            var F = {
                    arraySet: function(f, h, g, m, c) {
                        if (h.subarray && f.subarray) f.set(h.subarray(g, g + m), c);
                        else
                            for (var B = 0; B < m; B++) f[c + B] = h[g + B]
                    },
                    flattenChunks: function(f) {
                        var h, g, m, c, B;
                        h = m = 0;
                        for (g = f.length; h < g; h++) m += f[h].length;
                        B = new Uint8Array(m);
                        h = m = 0;
                        for (g = f.length; h < g; h++) c = f[h], B.set(c, m), m += c.length;
                        return B
                    }
                },
                x = {
                    arraySet: function(f, h, g, m, c) {
                        for (var B = 0; B < m; B++) f[c + B] = h[g + B]
                    },
                    flattenChunks: function(f) {
                        return [].concat.apply([], f)
                    }
                };
            c.setTyped = function(f) {
                f ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, F)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, x))
            };
            c.setTyped(p)
        }, {}],
        2: [function(p, u, c) {
            function F(g, m) {
                if (65537 > m && (g.subarray && h || !g.subarray && f)) return String.fromCharCode.apply(null, x.shrinkBuf(g, m));
                for (var E = "", c = 0; c < m; c++) E += String.fromCharCode(g[c]);
                return E
            }
            var x = p("./common"),
                f = !0,
                h = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (g) {
                f = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (m) {
                h = !1
            }
            var y = new x.Buf8(256);
            for (p = 0; 256 > p; p++) y[p] = 252 <= p ? 6 : 248 <= p ? 5 : 240 <= p ? 4 : 224 <= p ? 3 : 192 <= p ? 2 : 1;
            y[254] = y[254] = 1;
            c.string2buf = function(h) {
                var g, f, m, t, C, c = h.length,
                    b = 0;
                for (t = 0; t < c; t++) f = h.charCodeAt(t), 55296 === (f & 64512) && t + 1 < c && (m = h.charCodeAt(t + 1), 56320 === (m & 64512) && (f = 65536 + (f - 55296 << 10) + (m - 56320), t++)), b += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4;
                g = new x.Buf8(b);
                for (t = C = 0; C < b; t++) f = h.charCodeAt(t), 55296 === (f & 64512) && t + 1 < c && (m = h.charCodeAt(t + 1),
                    56320 === (m & 64512) && (f = 65536 + (f - 55296 << 10) + (m - 56320), t++)), 128 > f ? g[C++] = f : (2048 > f ? g[C++] = 192 | f >>> 6 : (65536 > f ? g[C++] = 224 | f >>> 12 : (g[C++] = 240 | f >>> 18, g[C++] = 128 | f >>> 12 & 63), g[C++] = 128 | f >>> 6 & 63), g[C++] = 128 | f & 63);
                return g
            };
            c.buf2binstring = function(f) {
                return F(f, f.length)
            };
            c.binstring2buf = function(f) {
                for (var g = new x.Buf8(f.length), h = 0, m = g.length; h < m; h++) g[h] = f.charCodeAt(h);
                return g
            };
            c.buf2string = function(f, g) {
                var h, m, t, c, s = g || f.length,
                    b = Array(2 * s);
                for (h = m = 0; h < s;)
                    if (t = f[h++], 128 > t) b[m++] = t;
                    else if (c = y[t], 4 <
                    c) b[m++] = 65533, h += c - 1;
                else {
                    for (t &= 2 === c ? 31 : 3 === c ? 15 : 7; 1 < c && h < s;) t = t << 6 | f[h++] & 63, c--;
                    1 < c ? b[m++] = 65533 : 65536 > t ? b[m++] = t : (t -= 65536, b[m++] = 55296 | t >> 10 & 1023, b[m++] = 56320 | t & 1023)
                }
                return F(b, m)
            };
            c.utf8border = function(f, h) {
                var g;
                h = h || f.length;
                h > f.length && (h = f.length);
                for (g = h - 1; 0 <= g && 128 === (f[g] & 192);) g--;
                return 0 > g || 0 === g ? h : g + y[f[g]] > h ? g : h
            }
        }, {
            "./common": 1
        }],
        3: [function(p, u, c) {
            u.exports = function(c, p, f, h) {
                var g = c & 65535 | 0;
                c = c >>> 16 & 65535 | 0;
                for (var m = 0; 0 !== f;) {
                    m = 2E3 < f ? 2E3 : f;
                    f -= m;
                    do g = g + p[h++] | 0, c = c + g | 0; while (--m);
                    g %= 65521;
                    c %= 65521
                }
                return g | c << 16 | 0
            }
        }, {}],
        4: [function(p, u, c) {
            u.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        }, {}],
        5: [function(p, u, c) {
            var F = function() {
                for (var c,
                        f = [], h = 0; 256 > h; h++) {
                    c = h;
                    for (var g = 0; 8 > g; g++) c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
                    f[h] = c
                }
                return f
            }();
            u.exports = function(c, f, h, g) {
                h = g + h;
                for (c ^= -1; g < h; g++) c = c >>> 8 ^ F[(c ^ f[g]) & 255];
                return c ^ -1
            }
        }, {}],
        6: [function(p, u, c) {
            u.exports = function() {
                this.os = this.xflags = this.time = this.text = 0;
                this.extra = null;
                this.extra_len = 0;
                this.comment = this.name = "";
                this.hcrc = 0;
                this.done = !1
            }
        }, {}],
        7: [function(p, u, c) {
            u.exports = function(c, p) {
                var f, h, g, m, y, B, u, E, M, t, C, s, b, D, a, K, L, v, q, k, n, d, e, A;
                f = c.state;
                h = c.next_in;
                e = c.input;
                g = h + (c.avail_in -
                    5);
                m = c.next_out;
                A = c.output;
                y = m - (p - c.avail_out);
                B = m + (c.avail_out - 257);
                u = f.dmax;
                E = f.wsize;
                M = f.whave;
                t = f.wnext;
                C = f.window;
                s = f.hold;
                b = f.bits;
                D = f.lencode;
                a = f.distcode;
                K = (1 << f.lenbits) - 1;
                L = (1 << f.distbits) - 1;
                a: do b: for (15 > b && (s += e[h++] << b, b += 8, s += e[h++] << b, b += 8), v = D[s & K];;) {
                        q = v >>> 24;
                        s >>>= q;
                        b -= q;
                        q = v >>> 16 & 255;
                        if (0 === q) A[m++] = v & 65535;
                        else if (q & 16) {
                            k = v & 65535;
                            if (q &= 15) b < q && (s += e[h++] << b, b += 8), k += s & (1 << q) - 1, s >>>= q, b -= q;
                            15 > b && (s += e[h++] << b, b += 8, s += e[h++] << b, b += 8);
                            v = a[s & L];
                            c: for (;;) {
                                q = v >>> 24;
                                s >>>= q;
                                b -= q;
                                q = v >>> 16 &
                                    255;
                                if (q & 16) {
                                    v &= 65535;
                                    q &= 15;
                                    b < q && (s += e[h++] << b, b += 8, b < q && (s += e[h++] << b, b += 8));
                                    v += s & (1 << q) - 1;
                                    if (v > u) {
                                        c.msg = "invalid distance too far back";
                                        f.mode = 30;
                                        break a
                                    }
                                    s >>>= q;
                                    b -= q;
                                    q = m - y;
                                    if (v > q) {
                                        q = v - q;
                                        if (q > M && f.sane) {
                                            c.msg = "invalid distance too far back";
                                            f.mode = 30;
                                            break a
                                        }
                                        n = 0;
                                        d = C;
                                        if (0 === t) {
                                            if (n += E - q, q < k) {
                                                k -= q;
                                                do A[m++] = C[n++]; while (--q);
                                                n = m - v;
                                                d = A
                                            }
                                        } else if (t < q) {
                                            if (n += E + t - q, q -= t, q < k) {
                                                k -= q;
                                                do A[m++] = C[n++]; while (--q);
                                                n = 0;
                                                if (t < k) {
                                                    q = t;
                                                    k -= q;
                                                    do A[m++] = C[n++]; while (--q);
                                                    n = m - v;
                                                    d = A
                                                }
                                            }
                                        } else if (n += t - q, q < k) {
                                            k -= q;
                                            do A[m++] =
                                                C[n++]; while (--q);
                                            n = m - v;
                                            d = A
                                        }
                                        for (; 2 < k;) A[m++] = d[n++], A[m++] = d[n++], A[m++] = d[n++], k -= 3;
                                        k && (A[m++] = d[n++], 1 < k && (A[m++] = d[n++]))
                                    } else {
                                        n = m - v;
                                        do A[m++] = A[n++], A[m++] = A[n++], A[m++] = A[n++], k -= 3; while (2 < k);
                                        k && (A[m++] = A[n++], 1 < k && (A[m++] = A[n++]))
                                    }
                                } else if (0 === (q & 64)) {
                                    v = a[(v & 65535) + (s & (1 << q) - 1)];
                                    continue c
                                } else {
                                    c.msg = "invalid distance code";
                                    f.mode = 30;
                                    break a
                                }
                                break
                            }
                        } else if (0 === (q & 64)) {
                            v = D[(v & 65535) + (s & (1 << q) - 1)];
                            continue b
                        } else {
                            q & 32 ? f.mode = 12 : (c.msg = "invalid literal/length code", f.mode = 30);
                            break a
                        }
                        break
                    }
                    while (h <
                        g && m < B);
                    k = b >> 3;
                h -= k;
                b -= k << 3;
                c.next_in = h;
                c.next_out = m;
                c.avail_in = h < g ? 5 + (g - h) : 5 - (h - g);
                c.avail_out = m < B ? 257 + (B - m) : 257 - (m - B);
                f.hold = s & (1 << b) - 1;
                f.bits = b
            }
        }, {}],
        8: [function(p, u, c) {
            function F(b) {
                return (b >>> 24 & 255) + (b >>> 8 & 65280) + ((b & 65280) << 8) + ((b & 255) << 24)
            }

            function x() {
                this.mode = 0;
                this.last = !1;
                this.wrap = 0;
                this.havedict = !1;
                this.total = this.check = this.dmax = this.flags = 0;
                this.head = null;
                this.wnext = this.whave = this.wsize = this.wbits = 0;
                this.window = null;
                this.extra = this.offset = this.length = this.bits = this.hold = 0;
                this.distcode =
                    this.lencode = null;
                this.have = this.ndist = this.nlen = this.ncode = this.distbits = this.lenbits = 0;
                this.next = null;
                this.lens = new y.Buf16(320);
                this.work = new y.Buf16(288);
                this.distdyn = this.lendyn = null;
                this.was = this.back = this.sane = 0
            }

            function f(b) {
                var c;
                if (!b || !b.state) return -2;
                c = b.state;
                b.total_in = b.total_out = c.total = 0;
                b.msg = "";
                c.wrap && (b.adler = c.wrap & 1);
                c.mode = 1;
                c.last = 0;
                c.havedict = 0;
                c.dmax = 32768;
                c.head = null;
                c.hold = 0;
                c.bits = 0;
                c.lencode = c.lendyn = new y.Buf32(852);
                c.distcode = c.distdyn = new y.Buf32(592);
                c.sane = 1;
                c.back = -1;
                return 0
            }

            function h(b) {
                var c;
                if (!b || !b.state) return -2;
                c = b.state;
                c.wsize = 0;
                c.whave = 0;
                c.wnext = 0;
                return f(b)
            }

            function g(b, c) {
                var a, f;
                if (!b || !b.state) return -2;
                f = b.state;
                0 > c ? (a = 0, c = -c) : (a = (c >> 4) + 1, 48 > c && (c &= 15));
                if (c && (8 > c || 15 < c)) return -2;
                null !== f.window && f.wbits !== c && (f.window = null);
                f.wrap = a;
                f.wbits = c;
                return h(b)
            }

            function m(b, c) {
                var a;
                if (!b) return -2;
                a = new x;
                b.state = a;
                a.window = null;
                a = g(b, c);
                0 !== a && (b.state = null);
                return a
            }
            var y = p("../utils/common"),
                B = p("./adler32"),
                I = p("./crc32"),
                E = p("./inffast"),
                M =
                p("./inftrees"),
                t = !0,
                C, s;
            c.inflateReset = h;
            c.inflateReset2 = g;
            c.inflateResetKeep = f;
            c.inflateInit = function(b) {
                return m(b, 15)
            };
            c.inflateInit2 = m;
            c.inflate = function(b, c) {
                var a, f, h, g, m, k, n, d, e, p, z, l, r, u;
                l = 0;
                var w, G, x, N, J, H = new y.Buf8(4),
                    R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!b || !b.state || !b.output || !b.input && 0 !== b.avail_in) return -2;
                a = b.state;
                12 === a.mode && (a.mode = 13);
                m = b.next_out;
                h = b.output;
                n = b.avail_out;
                g = b.next_in;
                f = b.input;
                k = b.avail_in;
                d = a.hold;
                e = a.bits;
                p = k;
                z = n;
                J = 0;
                a: for (;;) switch (a.mode) {
                    case 1:
                        if (0 ===
                            a.wrap) {
                            a.mode = 13;
                            break
                        }
                        for (; 16 > e;) {
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        if (a.wrap & 2 && 35615 === d) {
                            a.check = 0;
                            H[0] = d & 255;
                            H[1] = d >>> 8 & 255;
                            a.check = I(a.check, H, 2, 0);
                            e = d = 0;
                            a.mode = 2;
                            break
                        }
                        a.flags = 0;
                        a.head && (a.head.done = !1);
                        if (!(a.wrap & 1) || (((d & 255) << 8) + (d >> 8)) % 31) {
                            b.msg = "incorrect header check";
                            a.mode = 30;
                            break
                        }
                        if (8 !== (d & 15)) {
                            b.msg = "unknown compression method";
                            a.mode = 30;
                            break
                        }
                        d >>>= 4;
                        e -= 4;
                        r = (d & 15) + 8;
                        if (0 === a.wbits) a.wbits = r;
                        else if (r > a.wbits) {
                            b.msg = "invalid window size";
                            a.mode = 30;
                            break
                        }
                        a.dmax = 1 << r;
                        b.adler =
                            a.check = 1;
                        a.mode = d & 512 ? 10 : 12;
                        e = d = 0;
                        break;
                    case 2:
                        for (; 16 > e;) {
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        a.flags = d;
                        if (8 !== (a.flags & 255)) {
                            b.msg = "unknown compression method";
                            a.mode = 30;
                            break
                        }
                        if (a.flags & 57344) {
                            b.msg = "unknown header flags set";
                            a.mode = 30;
                            break
                        }
                        a.head && (a.head.text = d >> 8 & 1);
                        a.flags & 512 && (H[0] = d & 255, H[1] = d >>> 8 & 255, a.check = I(a.check, H, 2, 0));
                        e = d = 0;
                        a.mode = 3;
                    case 3:
                        for (; 32 > e;) {
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        a.head && (a.head.time = d);
                        a.flags & 512 && (H[0] = d & 255, H[1] = d >>> 8 & 255, H[2] = d >>> 16 & 255, H[3] =
                            d >>> 24 & 255, a.check = I(a.check, H, 4, 0));
                        e = d = 0;
                        a.mode = 4;
                    case 4:
                        for (; 16 > e;) {
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        a.head && (a.head.xflags = d & 255, a.head.os = d >> 8);
                        a.flags & 512 && (H[0] = d & 255, H[1] = d >>> 8 & 255, a.check = I(a.check, H, 2, 0));
                        e = d = 0;
                        a.mode = 5;
                    case 5:
                        if (a.flags & 1024) {
                            for (; 16 > e;) {
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            a.length = d;
                            a.head && (a.head.extra_len = d);
                            a.flags & 512 && (H[0] = d & 255, H[1] = d >>> 8 & 255, a.check = I(a.check, H, 2, 0));
                            e = d = 0
                        } else a.head && (a.head.extra = null);
                        a.mode = 6;
                    case 6:
                        if (a.flags & 1024 && (l = a.length,
                                l > k && (l = k), l && (a.head && (r = a.head.extra_len - a.length, a.head.extra || (a.head.extra = Array(a.head.extra_len)), y.arraySet(a.head.extra, f, g, l, r)), a.flags & 512 && (a.check = I(a.check, f, l, g)), k -= l, g += l, a.length -= l), a.length)) break a;
                        a.length = 0;
                        a.mode = 7;
                    case 7:
                        if (a.flags & 2048) {
                            if (0 === k) break a;
                            l = 0;
                            do r = f[g + l++], a.head && r && 65536 > a.length && (a.head.name += String.fromCharCode(r)); while (r && l < k);
                            a.flags & 512 && (a.check = I(a.check, f, l, g));
                            k -= l;
                            g += l;
                            if (r) break a
                        } else a.head && (a.head.name = null);
                        a.length = 0;
                        a.mode = 8;
                    case 8:
                        if (a.flags &
                            4096) {
                            if (0 === k) break a;
                            l = 0;
                            do r = f[g + l++], a.head && r && 65536 > a.length && (a.head.comment += String.fromCharCode(r)); while (r && l < k);
                            a.flags & 512 && (a.check = I(a.check, f, l, g));
                            k -= l;
                            g += l;
                            if (r) break a
                        } else a.head && (a.head.comment = null);
                        a.mode = 9;
                    case 9:
                        if (a.flags & 512) {
                            for (; 16 > e;) {
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            if (d !== (a.check & 65535)) {
                                b.msg = "header crc mismatch";
                                a.mode = 30;
                                break
                            }
                            e = d = 0
                        }
                        a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0);
                        b.adler = a.check = 0;
                        a.mode = 12;
                        break;
                    case 10:
                        for (; 32 > e;) {
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        b.adler = a.check = F(d);
                        e = d = 0;
                        a.mode = 11;
                    case 11:
                        if (0 === a.havedict) return b.next_out = m, b.avail_out = n, b.next_in = g, b.avail_in = k, a.hold = d, a.bits = e, 2;
                        b.adler = a.check = 1;
                        a.mode = 12;
                    case 12:
                        if (5 === c || 6 === c) break a;
                    case 13:
                        if (a.last) {
                            d >>>= e & 7;
                            e -= e & 7;
                            a.mode = 27;
                            break
                        }
                        for (; 3 > e;) {
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        a.last = d & 1;
                        d >>>= 1;
                        e -= 1;
                        switch (d & 3) {
                            case 0:
                                a.mode = 14;
                                break;
                            case 1:
                                l = a;
                                if (t) {
                                    r = void 0;
                                    C = new y.Buf32(512);
                                    s = new y.Buf32(32);
                                    for (r = 0; 144 > r;) l.lens[r++] = 8;
                                    for (; 256 > r;) l.lens[r++] = 9;
                                    for (; 280 >
                                        r;) l.lens[r++] = 7;
                                    for (; 288 > r;) l.lens[r++] = 8;
                                    M(1, l.lens, 0, 288, C, 0, l.work, {
                                        bits: 9
                                    });
                                    for (r = 0; 32 > r;) l.lens[r++] = 5;
                                    M(2, l.lens, 0, 32, s, 0, l.work, {
                                        bits: 5
                                    });
                                    t = !1
                                }
                                l.lencode = C;
                                l.lenbits = 9;
                                l.distcode = s;
                                l.distbits = 5;
                                a.mode = 20;
                                if (6 === c) {
                                    d >>>= 2;
                                    e -= 2;
                                    break a
                                }
                                break;
                            case 2:
                                a.mode = 17;
                                break;
                            case 3:
                                b.msg = "invalid block type", a.mode = 30
                        }
                        d >>>= 2;
                        e -= 2;
                        break;
                    case 14:
                        d >>>= e & 7;
                        for (e -= e & 7; 32 > e;) {
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        if ((d & 65535) !== (d >>> 16 ^ 65535)) {
                            b.msg = "invalid stored block lengths";
                            a.mode = 30;
                            break
                        }
                        a.length = d &
                            65535;
                        e = d = 0;
                        a.mode = 15;
                        if (6 === c) break a;
                    case 15:
                        a.mode = 16;
                    case 16:
                        if (l = a.length) {
                            l > k && (l = k);
                            l > n && (l = n);
                            if (0 === l) break a;
                            y.arraySet(h, f, g, l, m);
                            k -= l;
                            g += l;
                            n -= l;
                            m += l;
                            a.length -= l;
                            break
                        }
                        a.mode = 12;
                        break;
                    case 17:
                        for (; 14 > e;) {
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        a.nlen = (d & 31) + 257;
                        d >>>= 5;
                        e -= 5;
                        a.ndist = (d & 31) + 1;
                        d >>>= 5;
                        e -= 5;
                        a.ncode = (d & 15) + 4;
                        d >>>= 4;
                        e -= 4;
                        if (286 < a.nlen || 30 < a.ndist) {
                            b.msg = "too many length or distance symbols";
                            a.mode = 30;
                            break
                        }
                        a.have = 0;
                        a.mode = 18;
                    case 18:
                        for (; a.have < a.ncode;) {
                            for (; 3 > e;) {
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            a.lens[R[a.have++]] = d & 7;
                            d >>>= 3;
                            e -= 3
                        }
                        for (; 19 > a.have;) a.lens[R[a.have++]] = 0;
                        a.lencode = a.lendyn;
                        a.lenbits = 7;
                        l = {
                            bits: a.lenbits
                        };
                        J = M(0, a.lens, 0, 19, a.lencode, 0, a.work, l);
                        a.lenbits = l.bits;
                        if (J) {
                            b.msg = "invalid code lengths set";
                            a.mode = 30;
                            break
                        }
                        a.have = 0;
                        a.mode = 19;
                    case 19:
                        for (; a.have < a.nlen + a.ndist;) {
                            for (;;) {
                                l = a.lencode[d & (1 << a.lenbits) - 1];
                                w = l >>> 24;
                                G = l >>> 16 & 255;
                                x = l & 65535;
                                if (w <= e) break;
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            if (16 > x) d >>>= w, e -= w, a.lens[a.have++] = x;
                            else {
                                if (16 === x) {
                                    for (l = w +
                                        2; e < l;) {
                                        if (0 === k) break a;
                                        k--;
                                        d += f[g++] << e;
                                        e += 8
                                    }
                                    d >>>= w;
                                    e -= w;
                                    if (0 === a.have) {
                                        b.msg = "invalid bit length repeat";
                                        a.mode = 30;
                                        break
                                    }
                                    r = a.lens[a.have - 1];
                                    l = 3 + (d & 3);
                                    d >>>= 2;
                                    e -= 2
                                } else if (17 === x) {
                                    for (l = w + 3; e < l;) {
                                        if (0 === k) break a;
                                        k--;
                                        d += f[g++] << e;
                                        e += 8
                                    }
                                    d >>>= w;
                                    e -= w;
                                    r = 0;
                                    l = 3 + (d & 7);
                                    d >>>= 3;
                                    e -= 3
                                } else {
                                    for (l = w + 7; e < l;) {
                                        if (0 === k) break a;
                                        k--;
                                        d += f[g++] << e;
                                        e += 8
                                    }
                                    d >>>= w;
                                    e -= w;
                                    r = 0;
                                    l = 11 + (d & 127);
                                    d >>>= 7;
                                    e -= 7
                                }
                                if (a.have + l > a.nlen + a.ndist) {
                                    b.msg = "invalid bit length repeat";
                                    a.mode = 30;
                                    break
                                }
                                for (; l--;) a.lens[a.have++] = r
                            }
                        }
                        if (30 === a.mode) break;
                        if (0 === a.lens[256]) {
                            b.msg = "invalid code -- missing end-of-block";
                            a.mode = 30;
                            break
                        }
                        a.lenbits = 9;
                        l = {
                            bits: a.lenbits
                        };
                        J = M(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, l);
                        a.lenbits = l.bits;
                        if (J) {
                            b.msg = "invalid literal/lengths set";
                            a.mode = 30;
                            break
                        }
                        a.distbits = 6;
                        a.distcode = a.distdyn;
                        l = {
                            bits: a.distbits
                        };
                        J = M(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, l);
                        a.distbits = l.bits;
                        if (J) {
                            b.msg = "invalid distances set";
                            a.mode = 30;
                            break
                        }
                        a.mode = 20;
                        if (6 === c) break a;
                    case 20:
                        a.mode = 21;
                    case 21:
                        if (6 <= k && 258 <= n) {
                            b.next_out = m;
                            b.avail_out =
                                n;
                            b.next_in = g;
                            b.avail_in = k;
                            a.hold = d;
                            a.bits = e;
                            E(b, z);
                            m = b.next_out;
                            h = b.output;
                            n = b.avail_out;
                            g = b.next_in;
                            f = b.input;
                            k = b.avail_in;
                            d = a.hold;
                            e = a.bits;
                            12 === a.mode && (a.back = -1);
                            break
                        }
                        for (a.back = 0;;) {
                            l = a.lencode[d & (1 << a.lenbits) - 1];
                            w = l >>> 24;
                            G = l >>> 16 & 255;
                            x = l & 65535;
                            if (w <= e) break;
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        if (G && 0 === (G & 240)) {
                            r = w;
                            u = G;
                            for (N = x;;) {
                                l = a.lencode[N + ((d & (1 << r + u) - 1) >> r)];
                                w = l >>> 24;
                                G = l >>> 16 & 255;
                                x = l & 65535;
                                if (r + w <= e) break;
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            d >>>= r;
                            e -= r;
                            a.back += r
                        }
                        d >>>= w;
                        e -= w;
                        a.back += w;
                        a.length = x;
                        if (0 === G) {
                            a.mode = 26;
                            break
                        }
                        if (G & 32) {
                            a.back = -1;
                            a.mode = 12;
                            break
                        }
                        if (G & 64) {
                            b.msg = "invalid literal/length code";
                            a.mode = 30;
                            break
                        }
                        a.extra = G & 15;
                        a.mode = 22;
                    case 22:
                        if (a.extra) {
                            for (l = a.extra; e < l;) {
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            a.length += d & (1 << a.extra) - 1;
                            d >>>= a.extra;
                            e -= a.extra;
                            a.back += a.extra
                        }
                        a.was = a.length;
                        a.mode = 23;
                    case 23:
                        for (;;) {
                            l = a.distcode[d & (1 << a.distbits) - 1];
                            w = l >>> 24;
                            G = l >>> 16 & 255;
                            x = l & 65535;
                            if (w <= e) break;
                            if (0 === k) break a;
                            k--;
                            d += f[g++] << e;
                            e += 8
                        }
                        if (0 === (G & 240)) {
                            r = w;
                            u = G;
                            for (N =
                                x;;) {
                                l = a.distcode[N + ((d & (1 << r + u) - 1) >> r)];
                                w = l >>> 24;
                                G = l >>> 16 & 255;
                                x = l & 65535;
                                if (r + w <= e) break;
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            d >>>= r;
                            e -= r;
                            a.back += r
                        }
                        d >>>= w;
                        e -= w;
                        a.back += w;
                        if (G & 64) {
                            b.msg = "invalid distance code";
                            a.mode = 30;
                            break
                        }
                        a.offset = x;
                        a.extra = G & 15;
                        a.mode = 24;
                    case 24:
                        if (a.extra) {
                            for (l = a.extra; e < l;) {
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            a.offset += d & (1 << a.extra) - 1;
                            d >>>= a.extra;
                            e -= a.extra;
                            a.back += a.extra
                        }
                        if (a.offset > a.dmax) {
                            b.msg = "invalid distance too far back";
                            a.mode = 30;
                            break
                        }
                        a.mode = 25;
                    case 25:
                        if (0 ===
                            n) break a;
                        l = z - n;
                        if (a.offset > l) {
                            l = a.offset - l;
                            if (l > a.whave && a.sane) {
                                b.msg = "invalid distance too far back";
                                a.mode = 30;
                                break
                            }
                            l > a.wnext ? (l -= a.wnext, r = a.wsize - l) : r = a.wnext - l;
                            l > a.length && (l = a.length);
                            u = a.window
                        } else u = h, r = m - a.offset, l = a.length;
                        l > n && (l = n);
                        n -= l;
                        a.length -= l;
                        do h[m++] = u[r++]; while (--l);
                        0 === a.length && (a.mode = 21);
                        break;
                    case 26:
                        if (0 === n) break a;
                        h[m++] = a.length;
                        n--;
                        a.mode = 21;
                        break;
                    case 27:
                        if (a.wrap) {
                            for (; 32 > e;) {
                                if (0 === k) break a;
                                k--;
                                d |= f[g++] << e;
                                e += 8
                            }
                            z -= n;
                            b.total_out += z;
                            a.total += z;
                            z && (b.adler = a.check =
                                a.flags ? I(a.check, h, z, m - z) : B(a.check, h, z, m - z));
                            z = n;
                            if ((a.flags ? d : F(d)) !== a.check) {
                                b.msg = "incorrect data check";
                                a.mode = 30;
                                break
                            }
                            e = d = 0
                        }
                        a.mode = 28;
                    case 28:
                        if (a.wrap && a.flags) {
                            for (; 32 > e;) {
                                if (0 === k) break a;
                                k--;
                                d += f[g++] << e;
                                e += 8
                            }
                            if (d !== (a.total & 4294967295)) {
                                b.msg = "incorrect length check";
                                a.mode = 30;
                                break
                            }
                            e = d = 0
                        }
                        a.mode = 29;
                    case 29:
                        J = 1;
                        break a;
                    case 30:
                        J = -3;
                        break a;
                    case 31:
                        return -4;
                    default:
                        return -2
                }
                b.next_out = m;
                b.avail_out = n;
                b.next_in = g;
                b.avail_in = k;
                a.hold = d;
                a.bits = e;
                if (a.wsize || z !== b.avail_out && 30 > a.mode && (27 >
                        a.mode || 4 !== c)) f = b.output, g = b.next_out, m = z - b.avail_out, n = b.state, null === n.window && (n.wsize = 1 << n.wbits, n.wnext = 0, n.whave = 0, n.window = new y.Buf8(n.wsize)), m >= n.wsize ? (y.arraySet(n.window, f, g - n.wsize, n.wsize, 0), n.wnext = 0, n.whave = n.wsize) : (k = n.wsize - n.wnext, k > m && (k = m), y.arraySet(n.window, f, g - m, k, n.wnext), (m -= k) ? (y.arraySet(n.window, f, g - m, m, 0), n.wnext = m, n.whave = n.wsize) : (n.wnext += k, n.wnext === n.wsize && (n.wnext = 0), n.whave < n.wsize && (n.whave += k)));
                p -= b.avail_in;
                z -= b.avail_out;
                b.total_in += p;
                b.total_out += z;
                a.total +=
                    z;
                a.wrap && z && (b.adler = a.check = a.flags ? I(a.check, h, z, b.next_out - z) : B(a.check, h, z, b.next_out - z));
                b.data_type = a.bits + (a.last ? 64 : 0) + (12 === a.mode ? 128 : 0) + (20 === a.mode || 15 === a.mode ? 256 : 0);
                (0 === p && 0 === z || 4 === c) && 0 === J && (J = -5);
                return J
            };
            c.inflateEnd = function(b) {
                if (!b || !b.state) return -2;
                var c = b.state;
                c.window && (c.window = null);
                b.state = null;
                return 0
            };
            c.inflateGetHeader = function(b, c) {
                var a;
                if (!b || !b.state) return -2;
                a = b.state;
                if (0 === (a.wrap & 2)) return -2;
                a.head = c;
                c.done = !1;
                return 0
            };
            c.inflateInfo = "pako inflate (from Nodeca project)"
        }, {
            "../utils/common": 1,
            "./adler32": 3,
            "./crc32": 5,
            "./inffast": 7,
            "./inftrees": 9
        }],
        9: [function(p, u, c) {
            var F = p("../utils/common"),
                x = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                f = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                h = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                g = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25,
                    25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64
                ];
            u.exports = function(c, p, u, I, E, M, t, C) {
                for (var s = C.bits, b = 0, D = 0, a = 0, K = 0, L = 0, v = 0, q = 0, k = 0, n = 0, d = 0, e, A, z = null, l = 0, r, O = new F.Buf16(16), v = new F.Buf16(16), w = null, G = 0, Q, N, J, b = 0; 15 >= b; b++) O[b] = 0;
                for (D = 0; D < I; D++) O[p[u + D]]++;
                L = s;
                for (K = 15; 1 <= K && 0 === O[K]; K--);
                L > K && (L = K);
                if (0 === K) return E[M++] = 20971520, E[M++] = 20971520, C.bits = 1, 0;
                for (a = 1; a < K && 0 === O[a]; a++);
                L < a && (L = a);
                for (b = k = 1; 15 >= b; b++)
                    if (k <<= 1, k -= O[b], 0 > k) return -1;
                if (0 < k && (0 === c || 1 !== K)) return -1;
                v[1] = 0;
                for (b = 1; 15 > b; b++) v[b + 1] = v[b] +
                    O[b];
                for (D = 0; D < I; D++) 0 !== p[u + D] && (t[v[p[u + D]]++] = D);
                0 === c ? (z = w = t, r = 19) : 1 === c ? (z = x, l -= 257, w = f, G -= 257, r = 256) : (z = h, w = g, r = -1);
                D = d = 0;
                b = a;
                s = M;
                v = L;
                q = 0;
                A = -1;
                n = 1 << L;
                I = n - 1;
                if (1 === c && 852 < n || 2 === c && 592 < n) return 1;
                for (var H = 0;;) {
                    H++;
                    Q = b - q;
                    t[D] < r ? (N = 0, J = t[D]) : t[D] > r ? (N = w[G + t[D]], J = z[l + t[D]]) : (N = 96, J = 0);
                    k = 1 << b - q;
                    a = e = 1 << v;
                    do e -= k, E[s + (d >> q) + e] = Q << 24 | N << 16 | J | 0; while (0 !== e);
                    for (k = 1 << b - 1; d & k;) k >>= 1;
                    0 !== k ? (d &= k - 1, d += k) : d = 0;
                    D++;
                    if (0 === --O[b]) {
                        if (b === K) break;
                        b = p[u + t[D]]
                    }
                    if (b > L && (d & I) !== A) {
                        0 === q && (q = L);
                        s += a;
                        v = b - q;
                        for (k =
                            1 << v; v + q < K;) {
                            k -= O[v + q];
                            if (0 >= k) break;
                            v++;
                            k <<= 1
                        }
                        n += 1 << v;
                        if (1 === c && 852 < n || 2 === c && 592 < n) return 1;
                        A = d & I;
                        E[A] = L << 24 | v << 16 | s - M | 0
                    }
                }
                0 !== d && (E[s + d] = b - q << 24 | 4194304);
                C.bits = L;
                return 0
            }
        }, {
            "../utils/common": 1
        }],
        10: [function(p, u, c) {
            u.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        }, {}],
        11: [function(p, u, c) {
            u.exports = function() {
                this.input = null;
                this.total_in = this.avail_in = this.next_in =
                    0;
                this.output = null;
                this.total_out = this.avail_out = this.next_out = 0;
                this.msg = "";
                this.state = null;
                this.data_type = 2;
                this.adler = 0
            }
        }, {}],
        "/lib/inflate.js": [function(p, u, c) {
            function F(c, f) {
                var g = new E(f);
                g.push(c, !0);
                if (g.err) throw g.msg;
                return g.result
            }
            var x = p("./zlib/inflate.js"),
                f = p("./utils/common"),
                h = p("./utils/strings"),
                g = p("./zlib/constants"),
                m = p("./zlib/messages"),
                y = p("./zlib/zstream"),
                B = p("./zlib/gzheader"),
                I = Object.prototype.toString,
                E = function(c) {
                    var h = this.options = f.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, c || {});
                    h.raw && 0 <= h.windowBits && 16 > h.windowBits && (h.windowBits = -h.windowBits, 0 === h.windowBits && (h.windowBits = -15));
                    !(0 <= h.windowBits && 16 > h.windowBits) || c && c.windowBits || (h.windowBits += 32);
                    15 < h.windowBits && 48 > h.windowBits && 0 === (h.windowBits & 15) && (h.windowBits |= 15);
                    this.err = 0;
                    this.msg = "";
                    this.ended = !1;
                    this.chunks = [];
                    this.strm = new y;
                    this.strm.avail_out = 0;
                    c = x.inflateInit2(this.strm, h.windowBits);
                    if (c !== g.Z_OK) throw Error(m[c]);
                    this.header = new B;
                    x.inflateGetHeader(this.strm, this.header)
                };
            E.prototype.push =
                function(c, m) {
                    var p = this.strm,
                        s = this.options.chunkSize,
                        b, u, a, y, B;
                    if (this.ended) return !1;
                    u = m === ~~m ? m : !0 === m ? g.Z_FINISH : g.Z_NO_FLUSH;
                    "string" === typeof c ? p.input = h.binstring2buf(c) : "[object ArrayBuffer]" === I.call(c) ? p.input = new Uint8Array(c) : p.input = c;
                    p.next_in = 0;
                    p.avail_in = p.input.length;
                    do {
                        0 === p.avail_out && (p.output = new f.Buf8(s), p.next_out = 0, p.avail_out = s);
                        b = x.inflate(p, g.Z_NO_FLUSH);
                        if (b !== g.Z_STREAM_END && b !== g.Z_OK) return this.onEnd(b), this.ended = !0, !1;
                        if (p.next_out && (0 === p.avail_out || b === g.Z_STREAM_END ||
                                0 === p.avail_in && (u === g.Z_FINISH || u === g.Z_SYNC_FLUSH)))
                            if ("string" === this.options.to) a = h.utf8border(p.output, p.next_out), y = p.next_out - a, B = h.buf2string(p.output, a), p.next_out = y, p.avail_out = s - y, y && f.arraySet(p.output, p.output, a, y, 0), this.onData(B);
                            else this.onData(f.shrinkBuf(p.output, p.next_out))
                    } while (0 < p.avail_in && b !== g.Z_STREAM_END);
                    b === g.Z_STREAM_END && (u = g.Z_FINISH);
                    if (u === g.Z_FINISH) return b = x.inflateEnd(this.strm), this.onEnd(b), this.ended = !0, b === g.Z_OK;
                    u === g.Z_SYNC_FLUSH && (this.onEnd(g.Z_OK),
                        p.avail_out = 0);
                    return !0
                };
            E.prototype.onData = function(c) {
                this.chunks.push(c)
            };
            E.prototype.onEnd = function(c) {
                c === g.Z_OK && (this.result = "string" === this.options.to ? this.chunks.join("") : f.flattenChunks(this.chunks));
                this.chunks = [];
                this.err = c;
                this.msg = this.strm.msg
            };
            c.Inflate = E;
            c.inflate = F;
            c.inflateRaw = function(c, f) {
                f = f || {};
                f.raw = !0;
                return F(c, f)
            };
            c.ungzip = F
        }, {
            "./utils/common": 1,
            "./utils/strings": 2,
            "./zlib/constants": 4,
            "./zlib/gzheader": 6,
            "./zlib/inflate.js": 8,
            "./zlib/messages": 10,
            "./zlib/zstream": 11
        }]
    }, {}, [])("/lib/inflate.js")
});
$3Dmol = function(b) {
    return b.$3Dmol || {}
}(window);
$.get("http://3dmol.csb.pitt.edu/track/report.cgi");
String.prototype.startsWith || (String.prototype.startsWith = function(b) {
    return 0 === this.lastIndexOf(b, 0)
});
String.prototype.endsWith || (String.prototype.endsWith = function(b) {
    return -1 !== this.indexOf(b, this.length - b.length)
});
$.ajaxTransport("+binary", function(b, c, d) {
    if (window.FormData && (b.dataType && "binary" == b.dataType || b.data && (window.ArrayBuffer && b.data instanceof ArrayBuffer || window.Blob && b.data instanceof Blob))) return {
        send: function(c, d) {
            var w = new XMLHttpRequest,
                t = b.url,
                x = b.type,
                q = b.async || !0,
                D = b.responseType || "blob",
                y = b.data || null,
                z = b.username || null,
                m = b.password || null;
            w.addEventListener("load", function() {
                var c = {};
                c[b.dataType] = w.response;
                d(w.status, w.statusText, c, w.getAllResponseHeaders())
            });
            w.open(x, t, q, z, m);
            for (var e in c) w.setRequestHeader(e,
                c[e]);
            w.responseType = D;
            w.send(y)
        },
        abort: function() {
            d.abort()
        }
    }
});
$3Dmol.createViewer = function(b, c) {
    "string" === $.type(b) && (b = $("#" + b));
    if (b) {
        c = c || {};
        try {
            return new $3Dmol.GLViewer(b, c)
        } catch (d) {
            throw "error creating viewer: " + d;
        }
    }
};
$3Dmol.viewers = {};
$3Dmol.download = function(b, c, d, h) {
    var f = "",
        w = "",
        t = c.addModel();
    if ("mmtf:" === b.substr(0, 5)) {
        w = d && d.pdbUri ? d.pdbUri : "https://mmtf.rcsb.org/v1.0/full/";
        b = b.substr(5).toUpperCase();
        var x = w + b;
        d && "undefined" === typeof d.noComputeSecondaryStructure && (d.noComputeSecondaryStructure = !0);
        $.ajax({
            url: x,
            type: "GET",
            dataType: "binary",
            responseType: "arraybuffer",
            processData: !1
        }).done(function(b, f, y) {
            t.addMolData(b, "mmtf", d);
            c.zoomTo();
            c.render();
            h && h(t)
        }).fail(function(b, c) {
            console.log(c)
        })
    } else {
        if ("pdb:" === b.substr(0,
                4)) {
            f = "mmtf";
            d && d.format && (f = d.format);
            d && "undefined" === typeof d.noComputeSecondaryStructure && (d.noComputeSecondaryStructure = !0);
            b = b.substr(4).toUpperCase();
            if (!b.match(/^[1-9][A-Za-z0-9]{3}$/)) {
                alert("Wrong PDB ID");
                return
            }
            "mmtf" == f ? (mmtfUri = d && d.mmtfUri ? d.mmtfUri : "https://mmtf.rcsb.org/v1.0/full/", x = mmtfUri + b.toUpperCase()) : (w = d && d.pdbUri ? d.pdbUri : "https://files.rcsb.org/view/", x = w + b + "." + f)
        } else if ("cid:" == b.substr(0, 4)) {
            f = "sdf";
            b = b.substr(4);
            if (!b.match(/^[0-9]+$/)) {
                alert("Wrong Compound ID");
                return
            }
            x = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + b + "/SDF?record_type=3d"
        }
        b = function(b) {
            t.addMolData(b, f, d);
            c.zoomTo();
            c.render();
            h && h(t)
        };
        "mmtf" == f ? $.ajax({
            url: x,
            type: "GET",
            dataType: "binary",
            responseType: "arraybuffer",
            processData: !1
        }).done(b).fail(function(b, c) {
            console.log(c)
        }) : $.get(x, b).fail(function(b) {
            console.log("fetch of " + x + " failed: " + b.statusText)
        })
    }
    return t
};
$3Dmol.SurfaceType = {
    VDW: 1,
    MS: 2,
    SAS: 3,
    SES: 4
};
$3Dmol.mergeGeos = function(b, c) {
    var d = c.geometry;
    void 0 !== d && b.geometryGroups.push(d.geometryGroups[0])
};
$3Dmol.multiLineString = function(b) {
    return b.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "")
};
$3Dmol.syncSurface = !1;
if (0 <= window.navigator.userAgent.indexOf("MSIE ") || 0 <= window.navigator.userAgent.indexOf("Trident/")) $3Dmol.syncSurface = !0;
$3Dmol.specStringToObject = function(b) {
    if ("object" === typeof b || "undefined" === typeof b || null == b) return b;
    b = b.replace(/%7E/, "~");
    var c = function(b) {
            return $.isNumeric(b) ? Math.floor(parseFloat(b)) == parseInt(b) ? parseFloat(b) : 0 <= b.indexOf(".") ? parseFloat(b) : parseInt(b) : "true" === b ? !0 : "false" === b ? !1 : b
        },
        d = {};
    if ("all" === b) return d;
    b = b.split(";");
    for (var h = 0; h < b.length; h++) {
        var f = b[h].split(":"),
            w = f[0],
            t = {};
        if (f = f[1])
            if (f = f.replace(/~/g, "="), -1 !== f.indexOf("="))
                for (var f = f.split(","), x = 0; x < f.length; x++) {
                    var q =
                        f[x].split("=", 2);
                    t[q[0]] = c(q[1])
                } else t = -1 !== f.indexOf(",") ? f.split(",") : c(f);
        d[w] = t
    }
    return d
};
$3Dmol.getExtent = function(b, c) {
    var d, h, f, w, t, x, q, D, y, z, m = !c;
    d = h = f = 9999;
    w = t = x = -9999;
    q = D = y = z = 0;
    if (0 === b.length) return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    for (var e = 0; e < b.length; e++) {
        var l = b[e];
        if ("undefined" !== typeof l && isFinite(l.x) && isFinite(l.y) && isFinite(l.z) && (z++, q += l.x, D += l.y, y += l.z, d = d < l.x ? d : l.x, h = h < l.y ? h : l.y, f = f < l.z ? f : l.z, w = w > l.x ? w : l.x, t = t > l.y ? t : l.y, x = x > l.z ? x : l.z, l.symmetries && m))
            for (var u = 0; u < l.symmetries.length; u++) z++, q += l.symmetries[u].x, D += l.symmetries[u].y, y += l.symmetries[u].z, d = d < l.symmetries[u].x ?
                d : l.symmetries[u].x, h = h < l.symmetries[u].y ? h : l.symmetries[u].y, f = f < l.symmetries[u].z ? f : l.symmetries[u].z, w = w > l.symmetries[u].x ? w : l.symmetries[u].x, t = t > l.symmetries[u].y ? t : l.symmetries[u].y, x = x > l.symmetries[u].z ? x : l.symmetries[u].z
    }
    return [
        [d, h, f],
        [w, t, x],
        [q / z, D / z, y / z]
    ]
};
$3Dmol.getAtomProperty = function(b, c) {
    var d = null;
    b.properties && "undefined" != typeof b.properties[c] ? d = b.properties[c] : "undefined" != typeof b[c] && (d = b[c]);
    return d
};
$3Dmol.getPropertyRange = function(b, c) {
    for (var d = Number.POSITIVE_INFINITY, h = Number.NEGATIVE_INFINITY, f = 0, w = b.length; f < w; f++) {
        var t = $3Dmol.getAtomProperty(b[f], c);
        null != t && (t < d && (d = t), t > h && (h = t))
    }
    isFinite(d) || isFinite(h) ? isFinite(d) ? isFinite(h) || (h = d) : d = h : d = h = 0;
    return [d, h]
};
"function" === typeof define && define.amd && define("$3Dmol", $3Dmol);
var $3Dmol = $3Dmol || {};
$3Dmol.Math = {
    clamp: function(b, c, d) {
        return Math.min(Math.max(b, c), d)
    },
    degToRad: function() {
        var b = Math.PI / 180;
        return function(c) {
            return c * b
        }
    }()
};
$3Dmol.Quaternion = function(b, c, d, h) {
    this.x = b || 0;
    this.y = c || 0;
    this.z = d || 0;
    this.w = void 0 !== h ? h : 1
};
$3Dmol.Quaternion.prototype = {
    constructor: $3Dmol.Quaternion,
    set: function(b, c, d, h) {
        this.x = b;
        this.y = c;
        this.z = d;
        this.w = h;
        return this
    },
    copy: function(b) {
        this.x = b.x;
        this.y = b.y;
        this.z = b.z;
        this.w = b.w;
        return this
    },
    conjugate: function() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this
    },
    inverse: function() {
        return this.conjugate().normalize()
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    normalize: function() {
        var b = this.length();
        0 === b ? (this.z = this.y = this.x = 0, this.w = 1) :
            (b = 1 / b, this.x *= b, this.y *= b, this.z *= b, this.w *= b);
        return this
    },
    multiply: function(b) {
        return this.multiplyQuaternions(this, b)
    },
    multiplyQuaternions: function(b, c) {
        var d = b.x,
            h = b.y,
            f = b.z,
            w = b.w,
            t = c.x,
            x = c.y,
            q = c.z,
            D = c.w;
        this.x = d * D + w * t + h * q - f * x;
        this.y = h * D + w * x + f * t - d * q;
        this.z = f * D + w * q + d * x - h * t;
        this.w = w * D - d * t - h * x - f * q
    }
};
$3Dmol.Vector2 = function(b, c) {
    this.x = b || 0;
    this.y = c || 0
};
$3Dmol.Vector2.prototype = {
    constructor: $3Dmol.Vector2,
    set: function(b, c) {
        this.x = b;
        this.y = c;
        return this
    },
    subVectors: function(b, c) {
        this.x = b.x - c.x;
        this.y = b.y - c.y;
        return this
    },
    copy: function(b) {
        this.x = b.x;
        this.y = b.y;
        return this
    },
    clone: function() {
        return new $3Dmol.Vector2(this.x, this.y)
    }
};
$3Dmol.Vector3 = function(b, c, d) {
    this.x = b || 0;
    this.y = c || 0;
    this.z = d || 0
};
$3Dmol.Vector3.prototype = {
    constructor: $3Dmol.Vector3,
    set: function(b, c, d) {
        this.x = b;
        this.y = c;
        this.z = d;
        return this
    },
    copy: function(b) {
        this.x = b.x;
        this.y = b.y;
        this.z = b.z;
        return this
    },
    add: function(b) {
        this.x += b.x;
        this.y += b.y;
        this.z += b.z;
        return this
    },
    addVectors: function(b, c) {
        this.x = b.x + c.x;
        this.y = b.y + c.y;
        this.z = b.z + c.z;
        return this
    },
    sub: function(b) {
        this.x -= b.x;
        this.y -= b.y;
        this.z -= b.z;
        return this
    },
    subVectors: function(b, c) {
        this.x = b.x - c.x;
        this.y = b.y - c.y;
        this.z = b.z - c.z;
        return this
    },
    multiplyScalar: function(b) {
        this.x *=
            b;
        this.y *= b;
        this.z *= b;
        return this
    },
    divideScalar: function(b) {
        0 !== b ? (this.x /= b, this.y /= b, this.z /= b) : this.z = this.y = this.x = 0;
        return this
    },
    max: function(b) {
        this.x = Math.max(this.x, b.x);
        this.y = Math.max(this.y, b.y);
        this.z = Math.max(this.z, b.z);
        return this
    },
    min: function(b) {
        this.x = Math.min(this.x, b.x);
        this.y = Math.min(this.y, b.y);
        this.z = Math.min(this.z, b.z);
        return this
    },
    distanceTo: function(b) {
        return Math.sqrt(this.distanceToSquared(b))
    },
    distanceToSquared: function(b) {
        var c = this.x - b.x,
            d = this.y - b.y;
        b = this.z - b.z;
        return c * c + d * d + b * b
    },
    applyMatrix4: function(b) {
        var c = this.x,
            d = this.y,
            h = this.z;
        b = b.elements;
        this.x = b[0] * c + b[4] * d + b[8] * h + b[12];
        this.y = b[1] * c + b[5] * d + b[9] * h + b[13];
        this.z = b[2] * c + b[6] * d + b[10] * h + b[14];
        return this
    },
    applyProjection: function(b) {
        var c = this.x,
            d = this.y,
            h = this.z;
        b = b.elements;
        var f = b[3] * c + b[7] * d + b[11] * h + b[15];
        this.x = (b[0] * c + b[4] * d + b[8] * h + b[12]) / f;
        this.y = (b[1] * c + b[5] * d + b[9] * h + b[13]) / f;
        this.z = (b[2] * c + b[6] * d + b[10] * h + b[14]) / f;
        return this
    },
    applyQuaternion: function(b) {
        var c = this.x,
            d = this.y,
            h = this.z,
            f = b.x,
            w = b.y,
            t = b.z,
            x, q, D;
        x = 2 * (d * t - h * w);
        q = 2 * (h * f - c * t);
        D = 2 * (c * w - d * f);
        this.x = c + b.w * x + (q * t - D * w);
        this.y = d + b.w * q + (D * f - x * t);
        this.z = h + b.w * D + (x * w - q * f);
        return this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(b) {
        return this.x * b.x + this.y * b.y + this.z * b.z
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    cross: function(b) {
        var c = this.x,
            d = this.y,
            h = this.z;
        this.x = d * b.z - h * b.y;
        this.y = h * b.x - c * b.z;
        this.z = c * b.y - d * b.x;
        return this
    },
    crossVectors: function(b, c) {
        this.x = b.y * c.z - b.z * c.y;
        this.y = b.z * c.x - b.x * c.z;
        this.z = b.x * c.y - b.y * c.x;
        return this
    },
    getPositionFromMatrix: function(b) {
        this.x = b.elements[12];
        this.y = b.elements[13];
        this.z = b.elements[14];
        return this
    },
    setEulerFromRotationMatrix: function(b, c) {
        var d = b.elements,
            h = d[0],
            f = d[4],
            w = d[8],
            t = d[5],
            x = d[9],
            q = d[6],
            d = d[10];
        void 0 === c || "XYZ" === c ? (this.y = Math.asin($3Dmol.Math.clamp(w, -1, 1)), .99999 > Math.abs(w) ? (this.x =
            Math.atan2(-x, d), this.z = Math.atan2(-f, h)) : (this.x = Math.atan2(q, t), this.z = 0)) : console.error("Error with vector's setEulerFromRotationMatrix: Unknown order: " + c);
        return this
    },
    rotateAboutVector: function(b, c) {
        b.normalize();
        var d = Math.cos(c),
            h = Math.sin(c),
            f = this.clone().multiplyScalar(d),
            h = b.clone().cross(this).multiplyScalar(h),
            d = b.clone().multiplyScalar(b.clone().dot(this)).multiplyScalar(1 - d),
            f = f.add(h).add(d);
        this.x = f.x;
        this.y = f.y;
        this.z = f.z;
        return this
    },
    clone: function() {
        return new $3Dmol.Vector3(this.x,
            this.y, this.z)
    }
};
$3Dmol.Matrix3 = function(b, c, d, h, f, w, t, x, q) {
    this.elements = new Float32Array(9);
    this.set(void 0 !== b ? b : 1, c || 0, d || 0, h || 0, void 0 !== f ? f : 1, w || 0, t || 0, x || 0, void 0 !== q ? q : 1)
};
$3Dmol.Matrix3.prototype = {
    constructor: $3Dmol.Matrix3,
    set: function(b, c, d, h, f, w, t, x, q) {
        var D = this.elements;
        D[0] = b;
        D[3] = c;
        D[6] = d;
        D[1] = h;
        D[4] = f;
        D[7] = w;
        D[2] = t;
        D[5] = x;
        D[8] = q;
        return this
    },
    identity: function() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this
    },
    copy: function(b) {
        b = b.elements;
        this.set(b[0], b[3], b[6], b[1], b[4], b[7], b[2], b[5], b[8])
    },
    multiplyScalar: function(b) {
        var c = this.elements;
        c[0] *= b;
        c[3] *= b;
        c[6] *= b;
        c[1] *= b;
        c[4] *= b;
        c[7] *= b;
        c[2] *= b;
        c[5] *= b;
        c[8] *= b;
        return this
    },
    getInverse: function(b, c) {
        var d = b.elements,
            h = this.elements;
        h[0] = d[10] * d[5] - d[6] * d[9];
        h[1] = -d[10] * d[1] + d[2] * d[9];
        h[2] = d[6] * d[1] - d[2] * d[5];
        h[3] = -d[10] * d[4] + d[6] * d[8];
        h[4] = d[10] * d[0] - d[2] * d[8];
        h[5] = -d[6] * d[0] + d[2] * d[4];
        h[6] = d[9] * d[4] - d[5] * d[8];
        h[7] = -d[9] * d[0] + d[1] * d[8];
        h[8] = d[5] * d[0] - d[1] * d[4];
        d = d[0] * h[0] + d[1] * h[3] + d[2] * h[6];
        if (0 === d) {
            if (c) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this
        }
        this.multiplyScalar(1 / d);
        return this
    },
    getDeterminant: function() {
        var b = this.elements;
        return b[0] * b[4] * b[8] + b[1] * b[5] * b[6] + b[2] * b[3] * b[7] - b[2] * b[4] * b[6] - b[1] * b[3] * b[8] - b[0] * b[5] * b[7]
    },
    transpose: function() {
        var b, c = this.elements;
        b = c[1];
        c[1] = c[3];
        c[3] = b;
        b = c[2];
        c[2] = c[6];
        c[6] = b;
        b = c[5];
        c[5] = c[7];
        c[7] = b;
        return this
    },
    clone: function() {
        var b = this.elements;
        return new $3Dmol.Matrix3(b[0], b[3], b[6], b[1], b[4], b[7], b[2], b[5], b[8])
    }
};
$3Dmol.Matrix4 = function(b, c, d, h, f, w, t, x, q, D, y, z, m, e, l, u) {
    if ("undefined" === typeof c && "undefined" !== typeof b) this.elements = new Float32Array(b);
    else {
        var E = this.elements = new Float32Array(16);
        E[0] = void 0 !== b ? b : 1;
        E[4] = c || 0;
        E[8] = d || 0;
        E[12] = h || 0;
        E[1] = f || 0;
        E[5] = void 0 !== w ? w : 1;
        E[9] = t || 0;
        E[13] = x || 0;
        E[2] = q || 0;
        E[6] = D || 0;
        E[10] = void 0 !== y ? y : 1;
        E[14] = z || 0;
        E[3] = m || 0;
        E[7] = e || 0;
        E[11] = l || 0;
        E[15] = void 0 !== u ? u : 1
    }
};
$3Dmol.Matrix4.prototype = {
    constructor: $3Dmol.Matrix4,
    set: function(b, c, d, h, f, w, t, x, q, D, y, z, m, e, l, u) {
        var E = this.elements;
        E[0] = b;
        E[4] = c;
        E[8] = d;
        E[12] = h;
        E[1] = f;
        E[5] = w;
        E[9] = t;
        E[13] = x;
        E[2] = q;
        E[6] = D;
        E[10] = y;
        E[14] = z;
        E[3] = m;
        E[7] = e;
        E[11] = l;
        E[15] = u;
        return this
    },
    identity: function() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    copy: function(b) {
        b = b.elements;
        this.set(b[0], b[4], b[8], b[12], b[1], b[5], b[9], b[13], b[2], b[6], b[10], b[14], b[3], b[7], b[11], b[15]);
        return this
    },
    matrix3FromTopLeft: function() {
        var b = this.elements;
        return new $3Dmol.Matrix3(b[0], b[4], b[8], b[1], b[5], b[9], b[2], b[6], b[10])
    },
    setRotationFromEuler: function(b, c) {
        var d = this.elements,
            h = b.x,
            f = b.y,
            w = b.z,
            t = Math.cos(h),
            h = Math.sin(h),
            x = Math.cos(f),
            f = Math.sin(f),
            q = Math.cos(w),
            w = Math.sin(w);
        if (void 0 === c || "XYZ" === c) {
            var D = t * q,
                y = t * w,
                z = h * q,
                m = h * w;
            d[0] = x * q;
            d[4] = -x * w;
            d[8] = f;
            d[1] = y + z * f;
            d[5] = D - m * f;
            d[9] = -h * x;
            d[2] = m - D * f;
            d[6] = z + y * f;
            d[10] = t * x
        } else console.error("Error with matrix4 setRotationFromEuler. Order: " + c);
        return this
    },
    setRotationFromQuaternion: function(b) {
        var c =
            this.elements,
            d = b.x,
            h = b.y,
            f = b.z,
            w = b.w,
            t = d + d,
            x = h + h,
            q = f + f;
        b = d * t;
        var D = d * x,
            d = d * q,
            y = h * x,
            h = h * q,
            f = f * q,
            t = w * t,
            x = w * x,
            w = w * q;
        c[0] = 1 - (y + f);
        c[4] = D - w;
        c[8] = d + x;
        c[1] = D + w;
        c[5] = 1 - (b + f);
        c[9] = h - t;
        c[2] = d - x;
        c[6] = h + t;
        c[10] = 1 - (b + y);
        return this
    },
    lookAt: function() {
        var b = new $3Dmol.Vector3,
            c = new $3Dmol.Vector3,
            d = new $3Dmol.Vector3;
        return function(h, f, w) {
            var t = this.elements;
            d.subVectors(h, f).normalize();
            0 === d.length() && (d.z = 1);
            b.crossVectors(w, d).normalize();
            0 === b.length() && (d.x += 1E-4, b.crossVectors(w, d).normalize());
            c.crossVectors(d,
                b);
            t[0] = b.x;
            t[4] = c.x;
            t[8] = d.x;
            t[1] = b.y;
            t[5] = c.y;
            t[9] = d.y;
            t[2] = b.z;
            t[6] = c.z;
            t[10] = d.z;
            return this
        }
    }(),
    multiplyMatrices: function(b, c) {
        var d = b.elements,
            h = c.elements,
            f = this.elements,
            w = d[0],
            t = d[4],
            x = d[8],
            q = d[12],
            D = d[1],
            y = d[5],
            z = d[9],
            m = d[13],
            e = d[2],
            l = d[6],
            u = d[10],
            E = d[14],
            N = d[3],
            s = d[7],
            g = d[11],
            d = d[15],
            M = h[0],
            p = h[4],
            B = h[8],
            A = h[12],
            K = h[1],
            I = h[5],
            H = h[9],
            F = h[13],
            P = h[2],
            C = h[6],
            L = h[10],
            O = h[14],
            Q = h[3],
            J = h[7],
            R = h[11],
            h = h[15];
        f[0] = w * M + t * K + x * P + q * Q;
        f[4] = w * p + t * I + x * C + q * J;
        f[8] = w * B + t * H + x * L + q * R;
        f[12] = w * A + t * F + x * O + q * h;
        f[1] =
            D * M + y * K + z * P + m * Q;
        f[5] = D * p + y * I + z * C + m * J;
        f[9] = D * B + y * H + z * L + m * R;
        f[13] = D * A + y * F + z * O + m * h;
        f[2] = e * M + l * K + u * P + E * Q;
        f[6] = e * p + l * I + u * C + E * J;
        f[10] = e * B + l * H + u * L + E * R;
        f[14] = e * A + l * F + u * O + E * h;
        f[3] = N * M + s * K + g * P + d * Q;
        f[7] = N * p + s * I + g * C + d * J;
        f[11] = N * B + s * H + g * L + d * R;
        f[15] = N * A + s * F + g * O + d * h;
        return this
    },
    multiplyScalar: function(b) {
        var c = this.elements;
        c[0] *= b;
        c[4] *= b;
        c[8] *= b;
        c[12] *= b;
        c[1] *= b;
        c[5] *= b;
        c[9] *= b;
        c[13] *= b;
        c[2] *= b;
        c[6] *= b;
        c[10] *= b;
        c[14] *= b;
        c[3] *= b;
        c[7] *= b;
        c[11] *= b;
        c[15] *= b;
        return this
    },
    makeTranslation: function(b, c, d) {
        this.set(1,
            0, 0, b, 0, 1, 0, c, 0, 0, 1, d, 0, 0, 0, 1);
        return this
    },
    transpose: function() {
        var b = this.elements,
            c;
        c = b[1];
        b[1] = b[4];
        b[4] = c;
        c = b[2];
        b[2] = b[8];
        b[8] = c;
        c = b[6];
        b[6] = b[9];
        b[9] = c;
        c = b[3];
        b[3] = b[12];
        b[12] = c;
        c = b[7];
        b[7] = b[13];
        b[13] = c;
        c = b[11];
        b[11] = b[14];
        b[14] = c;
        return this
    },
    getPosition: function() {
        var b = new $3Dmol.Vector3;
        return function() {
            console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.");
            var c = this.elements;
            return b.set(c[12], c[13], c[14])
        }
    }(),
    setPosition: function(b) {
        var c =
            this.elements;
        c[12] = b.x;
        c[13] = b.y;
        c[14] = b.z;
        return this
    },
    getInverse: function(b, c) {
        var d = this.elements,
            h = b.elements,
            f = h[0],
            w = h[4],
            t = h[8],
            x = h[12],
            q = h[1],
            D = h[5],
            y = h[9],
            z = h[13],
            m = h[2],
            e = h[6],
            l = h[10],
            u = h[14],
            E = h[3],
            N = h[7],
            s = h[11],
            g = h[15];
        d[0] = y * u * N - z * l * N + z * e * s - D * u * s - y * e * g + D * l * g;
        d[4] = x * l * N - t * u * N - x * e * s + w * u * s + t * e * g - w * l * g;
        d[8] = t * z * N - x * y * N + x * D * s - w * z * s - t * D * g + w * y * g;
        d[12] = x * y * e - t * z * e - x * D * l + w * z * l + t * D * u - w * y * u;
        d[1] = z * l * E - y * u * E - z * m * s + q * u * s + y * m * g - q * l * g;
        d[5] = t * u * E - x * l * E + x * m * s - f * u * s - t * m * g + f * l * g;
        d[9] = x * y * E - t * z * E - x * q *
            s + f * z * s + t * q * g - f * y * g;
        d[13] = t * z * m - x * y * m + x * q * l - f * z * l - t * q * u + f * y * u;
        d[2] = D * u * E - z * e * E + z * m * N - q * u * N - D * m * g + q * e * g;
        d[6] = x * e * E - w * u * E - x * m * N + f * u * N + w * m * g - f * e * g;
        d[10] = w * z * E - x * D * E + x * q * N - f * z * N - w * q * g + f * D * g;
        d[14] = x * D * m - w * z * m - x * q * e + f * z * e + w * q * u - f * D * u;
        d[3] = y * e * E - D * l * E - y * m * N + q * l * N + D * m * s - q * e * s;
        d[7] = w * l * E - t * e * E + t * m * N - f * l * N - w * m * s + f * e * s;
        d[11] = t * D * E - w * y * E - t * q * N + f * y * N + w * q * s - f * D * s;
        d[15] = w * y * m - t * D * m + t * q * e - f * y * e - w * q * l + f * D * l;
        d = h[0] * d[0] + h[1] * d[4] + h[2] * d[8] + h[3] * d[12];
        if (0 === d) {
            if (c) throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
            console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
            this.identity();
            return this
        }
        this.multiplyScalar(1 / d);
        return this
    },
    isReflected: function() {
        return 0 > this.matrix3FromTopLeft().getDeterminant()
    },
    compose: function() {
        var b = new $3Dmol.Matrix4,
            c = new $3Dmol.Matrix4;
        return function(d, h, f) {
            var w = this.elements;
            b.identity();
            b.setRotationFromQuaternion(h);
            c.makeScale(f.x, f.y, f.z);
            this.multiplyMatrices(b, c);
            w[12] = d.x;
            w[13] = d.y;
            w[14] = d.z;
            return this
        }
    }(),
    decompose: function() {
        var b = new $3Dmol.Vector3,
            c = new $3Dmol.Vector3,
            d = new $3Dmol.Vector3,
            h = new $3Dmol.Matrix4;
        return function(f, w, t) {
            var x = this.elements;
            b.set(x[0], x[1], x[2]);
            c.set(x[4], x[5], x[6]);
            d.set(x[8], x[9], x[10]);
            f = f instanceof $3Dmol.Vector3 ? f : new $3Dmol.Vector3;
            w = w instanceof $3Dmol.Quaternion ? w : new $3Dmol.Quaternion;
            t = t instanceof $3Dmol.Vector3 ? t : new $3Dmol.Vector3;
            t.x = b.length();
            t.y = c.length();
            t.z = d.length();
            f.x = x[12];
            f.y = x[13];
            f.z = x[14];
            h.copy(this);
            h.elements[0] /= t.x;
            h.elements[1] /= t.x;
            h.elements[2] /= t.x;
            h.elements[4] /= t.y;
            h.elements[5] /=
                t.y;
            h.elements[6] /= t.y;
            h.elements[8] /= t.z;
            h.elements[9] /= t.z;
            h.elements[10] /= t.z;
            w.setFromRotationMatrix(h);
            return [f, w, t]
        }
    }(),
    scale: function(b) {
        var c = this.elements,
            d = b.x,
            h = b.y;
        b = b.z;
        c[0] *= d;
        c[4] *= h;
        c[8] *= b;
        c[1] *= d;
        c[5] *= h;
        c[9] *= b;
        c[2] *= d;
        c[6] *= h;
        c[10] *= b;
        c[3] *= d;
        c[7] *= h;
        c[11] *= b;
        return this
    },
    getMaxScaleOnAxis: function() {
        var b = this.elements;
        return Math.sqrt(Math.max(b[0] * b[0] + b[1] * b[1] + b[2] * b[2], Math.max(b[4] * b[4] + b[5] * b[5] + b[6] * b[6], b[8] * b[8] + b[9] * b[9] + b[10] * b[10])))
    },
    makeFrustum: function(b, c, d, h,
        f, w) {
        var t = this.elements;
        t[0] = 2 * f / (c - b);
        t[4] = 0;
        t[8] = (c + b) / (c - b);
        t[12] = 0;
        t[1] = 0;
        t[5] = 2 * f / (h - d);
        t[9] = (h + d) / (h - d);
        t[13] = 0;
        t[2] = 0;
        t[6] = 0;
        t[10] = -(w + f) / (w - f);
        t[14] = -2 * w * f / (w - f);
        t[3] = 0;
        t[7] = 0;
        t[11] = -1;
        t[15] = 0;
        return this
    },
    makePerspective: function(b, c, d, h) {
        b = d * Math.tan($3Dmol.Math.degToRad(.5 * b));
        var f = -b;
        return this.makeFrustum(f * c, b * c, f, b, d, h)
    },
    makeOrthographic: function(b, c, d, h, f, w) {
        var t = this.elements,
            x = 1 / (c - b),
            q = 1 / (d - h),
            D = 1 / (w - f);
        t[0] = 2 * x;
        t[4] = 0;
        t[8] = 0;
        t[12] = -((c + b) * x);
        t[1] = 0;
        t[5] = 2 * q;
        t[9] = 0;
        t[13] = -((d +
            h) * q);
        t[2] = 0;
        t[6] = 0;
        t[10] = -2 * D;
        t[14] = -((w + f) * D);
        t[3] = 0;
        t[7] = 0;
        t[11] = 0;
        t[15] = 1;
        return this
    },
    isEqual: function(b) {
        b = b.elements;
        var c = this.elements;
        return c[0] == b[0] && c[4] == b[4] && c[8] == b[8] && c[12] == b[12] && c[1] == b[1] && c[5] == b[5] && c[9] == b[9] && c[13] == b[13] && c[2] == b[2] && c[6] == b[6] && c[10] == b[10] && c[14] == b[14] && c[3] == b[3] && c[7] == b[7] && c[11] == b[11] && c[15] == b[15] ? !0 : !1
    },
    clone: function() {
        var b = this.elements;
        return new $3Dmol.Matrix4(b[0], b[4], b[8], b[12], b[1], b[5], b[9], b[13], b[2], b[6], b[10], b[14], b[3], b[7], b[11],
            b[15])
    },
    isIdentity: function() {
        var b = this.elements;
        return 1 == b[0] && 0 == b[4] && 0 == b[8] && 0 == b[12] && 0 == b[1] && 1 == b[5] && 0 == b[9] && 0 == b[13] && 0 == b[2] && 0 == b[6] && 1 == b[10] && 0 == b[14] && 0 == b[3] && 0 == b[7] && 0 == b[11] && 1 == b[15] ? !0 : !1
    }
};
$3Dmol.Ray = function(b, c) {
    this.origin = void 0 !== b ? b : new $3Dmol.Vector3;
    this.direction = void 0 !== c ? c : new $3Dmol.Vector3
};
$3Dmol.Ray.prototype = {
    constructor: $3Dmol.Ray,
    set: function(b, c) {
        this.origin.copy(b);
        this.direction.copy(c);
        return this
    },
    copy: function(b) {
        this.origin.copy(b.origin);
        this.direction.copy(b.direction);
        return this
    },
    at: function(b, c) {
        return (c || new $3Dmol.Vector3).copy(this.direction).multiplyScalar(b).add(this.origin)
    },
    recast: function() {
        var b = new $3Dmol.Vector3;
        return function(c) {
            this.origin.copy(this.at(c, b));
            return this
        }
    }(),
    closestPointToPoint: function(b, c) {
        var d = c || new $3Dmol.Vector3;
        d.subVectors(b, this.origin);
        var h = d.dot(this.direction);
        return d.copy(this.direction).multiplyScalar(h).add(this.origin)
    },
    distanceToPoint: function(b) {
        var c = new $3Dmol.Vector3;
        return function(b) {
            var h = c.subVectors(b, this.origin).dot(this.direction);
            c.copy(this.direction).multiplyScalar(h).add(this.origin);
            return c.distanceTo(b)
        }
    }(),
    isIntersectionCylinder: function() {},
    isIntersectionSphere: function(b) {
        return this.distanceToPoint(b.center) <= b.radius
    },
    isIntersectionPlane: function(b) {
        return 0 !== b.normal.dot(this.direction) || 0 === b.distanceToPoint(this.origin) ?
            !0 : !1
    },
    distanceToPlane: function(b) {
        var c = b.normal.dot(this.direction);
        if (0 === c) {
            if (0 === b.distanceToPoint(this.origin)) return 0
        } else return -(this.origin.dot(b.normal) + b.constant) / c
    },
    intersectPlane: function(b, c) {
        var d = this.distanceToPlane(b);
        return void 0 === d ? void 0 : this.at(d, c)
    },
    applyMatrix4: function(b) {
        this.direction.add(this.origin).applyMatrix4(b);
        this.origin.applyMatrix4(b);
        this.direction.sub(this.origin);
        return this
    },
    equals: function(b) {
        return b.origin.equals(this.origin) && b.direction.equals(this.direction)
    },
    clone: function() {
        return (new $3Dmol.Ray).copy(this)
    }
};
$3Dmol.Sphere = function(b, c) {
    this.center = void 0 !== b ? b : new $3Dmol.Vector3;
    this.radius = void 0 !== c ? c : 0
};
$3Dmol.Sphere.prototype = {
    constructor: $3Dmol.Sphere,
    set: function(b, c) {
        this.center.copy(b);
        this.radius = c;
        return this
    },
    copy: function(b) {
        this.center.copy(b.center);
        this.radius = b.radius;
        return this
    },
    applyMatrix4: function(b) {
        this.center.applyMatrix4(b);
        this.radius *= b.getMaxScaleOnAxis();
        return this
    },
    translate: function(b) {
        this.center.add(b);
        return this
    },
    equals: function(b) {
        return b.center.equals(this.center) && b.radius === this.radius
    },
    clone: function() {
        return (new $3Dmol.Sphere).copy(this)
    }
};
$3Dmol.Cylinder = function(b, c, d) {
    this.c1 = void 0 !== b ? b : new $3Dmol.Vector3;
    this.c2 = void 0 !== c ? c : new $3Dmol.Vector3;
    this.direction = (new $3Dmol.Vector3).subVectors(this.c2, this.c1).normalize();
    this.radius = void 0 !== d ? d : 0
};
$3Dmol.Cylinder.prototype = {
    constructor: $3Dmol.Cylinder,
    copy: function(b) {
        this.c1.copy(b.c1);
        this.c2.copy(b.c2);
        this.direction.copy(b.direction);
        this.radius = b.radius;
        return this
    },
    lengthSq: function() {
        var b = new $3Dmol.Vector3;
        return function() {
            return b.subVectors(this.c2, this.c1).lengthSq()
        }
    }(),
    applyMatrix4: function(b) {
        this.direction.add(this.c1).applyMatrix4(b);
        this.c1.applyMatrix4(b);
        this.c2.applyMatrix4(b);
        this.direction.sub(this.c1).normalize();
        this.radius *= b.getMaxScaleOnAxis();
        return this
    }
};
$3Dmol.Triangle = function(b, c, d) {
    this.a = void 0 !== b ? b : new $3Dmol.Vector3;
    this.b = void 0 !== c ? c : new $3Dmol.Vector3;
    this.c = void 0 !== d ? d : new $3Dmol.Vector3
};
$3Dmol.Triangle.prototype = {
    constructor: $3Dmol.Triangle,
    copy: function(b) {
        this.a.copy(b.a);
        this.b.copy(b.b);
        this.c.copy(b.c);
        return this
    },
    applyMatrix4: function(b) {
        this.a.applyMatrix4(b);
        this.b.applyMatrix4(b);
        this.c.applyMatrix4(b);
        return this
    },
    getNormal: function() {
        var b = new $3Dmol.Vector3;
        return function() {
            var c = this.a.clone();
            c.sub(this.b);
            b.subVectors(this.c, this.b);
            c.cross(b);
            c.normalize();
            return c
        }
    }()
};
$3Dmol.EventDispatcher = function() {
    var b = {};
    this.addEventListener = function(c, d) {
        void 0 === b[c] && (b[c] = []); - 1 === b[c].indexOf(d) && b[c].push(d)
    };
    this.removeEventListener = function(c, d) {
        var h = b[c].indexOf(d); - 1 !== h && b[c].splice(h, 1)
    };
    this.dispatchEvent = function(c) {
        var d = b[c.type];
        if (void 0 !== d) {
            c.target = this;
            for (var h = 0, f = d.length; h < f; h++) d[h].call(this, c)
        }
    }
};
$3Dmol.Color = function(b) {
    return 1 < arguments.length ? (this.r = arguments[0] || 0, this.g = arguments[1] || 0, this.b = arguments[2] || 0, this) : this.set(b)
};
$3Dmol.Color.prototype = {
    constructor: $3Dmol.Color,
    r: 0,
    g: 0,
    b: 0,
    set: function(b) {
        if (b instanceof $3Dmol.Color) return b.clone();
        "number" === typeof b ? this.setHex(b) : "object" === typeof b && "r" in b && "g" in b && "b" in b && (this.r = b.r, this.g = b.g, this.b = b.b)
    },
    setHex: function(b) {
        b = Math.floor(b);
        this.r = (b >> 16 & 255) / 255;
        this.g = (b >> 8 & 255) / 255;
        this.b = (b & 255) / 255;
        return this
    },
    getHex: function() {
        var b = Math.round(255 * this.r),
            c = Math.round(255 * this.g),
            d = Math.round(255 * this.b);
        return b << 16 | c << 8 | d
    },
    clone: function() {
        return new $3Dmol.Color(this.r,
            this.g, this.b)
    },
    copy: function(b) {
        this.r = b.r;
        this.g = b.g;
        this.b = b.b;
        return this
    },
    scaled: function() {
        var b = {};
        b.r = Math.round(255 * this.r);
        b.g = Math.round(255 * this.g);
        b.b = Math.round(255 * this.b);
        b.a = 1;
        return b
    }
};
$3Dmol.Object3D = function() {
    this.id = $3Dmol.Object3DIDCount++;
    this.name = "";
    this.parent = void 0;
    this.children = [];
    this.position = new $3Dmol.Vector3;
    this.rotation = new $3Dmol.Vector3;
    this.matrix = new $3Dmol.Matrix4;
    this.matrixWorld = new $3Dmol.Matrix4;
    this.quaternion = new $3Dmol.Quaternion;
    this.eulerOrder = "XYZ";
    this.up = new $3Dmol.Vector3(0, 1, 0);
    this.scale = new $3Dmol.Vector3(1, 1, 1);
    this.rotationAutoUpdate = this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
    this.useQuaternion = !1;
    this.visible = !0
};
$3Dmol.Object3D.prototype = {
    constructor: $3Dmol.Object3D,
    lookAt: function(b) {
        this.matrix.lookAt(b, this.position, this.up);
        this.rotationAutoUpdate && (!0 === this.useQuaternion ? this.quaternion.copy(this.matrix.decompose()[1]) : this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder))
    },
    add: function(b) {
        if (b === this) console.error("Can't add $3Dmol.Object3D to itself");
        else {
            b.parent = this;
            this.children.push(b);
            for (var c = this; void 0 !== c.parent;) c = c.parent;
            void 0 !== c && c instanceof $3Dmol.Scene && c.__addObject(b)
        }
    },
    remove: function(b) {
        var c = this.children.indexOf(b);
        if (-1 !== c) {
            b.parent = void 0;
            this.children.splice(c, 1);
            for (c = this; void 0 !== c.parent;) c = c.parent;
            void 0 !== c && c instanceof $3Dmol.Scene && c.__removeObject(b)
        }
    },
    updateMatrix: function() {
        this.matrix.setPosition(this.position);
        !1 === this.useQuaternion ? this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder) : this.matrix.setRotationFromQuaternion(this.quaternion);
        1 === this.scale.x && 1 === this.scale.y && 1 === this.scale.z || this.matrix.scale(this.scale);
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(b) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === b) void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        this.matrixWorldNeedsUpdate = !1;
        for (b = 0; b < this.children.length; b++) this.children[b].updateMatrixWorld(!0)
    },
    clone: function(b) {
        void 0 === b && (b = new $3Dmol.Object3D);
        b.name = this.name;
        b.up.copy(this.up);
        b.position.copy(this.position);
        b.rotation.copy(this.rotation);
        b.eulerOrder = this.eulerOrder;
        b.scale.copy(this.scale);
        b.rotationAutoUpdate = this.rotationAutoUpdate;
        b.matrix.copy(this.matrix);
        b.matrixWorld.copy(this.matrixWorld);
        b.quaternion.copy(this.quaternion);
        b.matrixAutoUpdate = this.matrixAutoUpdate;
        b.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
        b.useQuaternion = this.useQuaternion;
        b.visible = this.visible;
        for (var c = 0; c < this.children.length; c++) b.add(this.children[c].clone());
        return b
    },
    setVisible: function(b) {
        this.visible = b;
        for (var c = 0; c < this.children.length; c++) this.children[c].setVisible(b)
    }
};
$3Dmol.Object3DIDCount = 0;
$3Dmol.Geometry = function() {
    var b = function(b) {
        this.id = b || 0;
        this.lineArray = this.radiusArray = this.faceArray = this.normalArray = this.colorArray = this.vertexArray = null;
        this.lineidx = this.faceidx = this.vertices = 0
    };
    b.prototype.getNumVertices = function() {
        return this.vertices
    };
    b.prototype.getVertices = function() {
        return this.vertexArray
    };
    b.prototype.getCentroid = function() {
        for (var b = new $3Dmol.Vector3, c, d, t, x = 0; x < this.vertices; ++x) c = 3 * x, d = this.vertexArray[c], t = this.vertexArray[c + 1], c = this.vertexArray[c + 2], b.x += d, b.y +=
            t, b.z += c;
        b.divideScalar(this.vertices);
        return b
    };
    b.prototype.setNormals = function() {
        var b = this.faceArray,
            c = this.vertexArray,
            d = this.normalArray;
        if (this.vertices && this.faceidx)
            for (var t, x, q, D, y, z, m = 0; m < b.length / 3; ++m) t = 3 * b[3 * m], x = 3 * b[3 * m + 1], q = 3 * b[3 * m + 2], D = new $3Dmol.Vector3(c[t], c[t + 1], c[t + 2]), y = new $3Dmol.Vector3(c[x], c[x + 1], c[x + 2]), z = new $3Dmol.Vector3(c[q], c[q + 1], c[q + 2]), D.subVectors(D, y), z.subVectors(z, y), z.cross(D), D = z, D.normalize(), d[t] += D.x, d[x] += D.x, d[q] += D.x, d[t + 1] += D.y, d[x + 1] += D.y, d[q + 1] +=
                D.y, d[t + 2] += D.z, d[x + 2] += D.z, d[q + 2] += D.z
    };
    b.prototype.setLineIndices = function() {
        if (this.faceidx) {
            var b = this.faceArray,
                c = this.lineArray = new Uint16Array(2 * this.faceidx);
            this.lineidx = 2 * this.faceidx;
            for (var d = 0; d < this.faceidx / 3; ++d) {
                var t = 3 * d,
                    x = 2 * t,
                    q = b[t],
                    D = b[t + 1],
                    t = b[t + 2];
                c[x] = q;
                c[x + 1] = D;
                c[x + 2] = q;
                c[x + 3] = t;
                c[x + 4] = D;
                c[x + 5] = t
            }
        }
    };
    b.prototype.truncateArrayBuffers = function(b, c) {
        b = !0 === b ? !0 : !1;
        var d = this.colorArray,
            t = this.normalArray,
            x = this.faceArray,
            q = this.lineArray,
            D = this.radiusArray;
        this.vertexArray = this.vertexArray.subarray(0,
            3 * this.vertices);
        this.colorArray = d.subarray(0, 3 * this.vertices);
        b ? (this.normalArray = t.subarray(0, 3 * this.vertices), this.faceArray = x.subarray(0, this.faceidx), this.lineArray = 0 < this.lineidx ? q.subarray(0, this.lineidx) : new Uint16Array(0)) : (this.normalArray = new Float32Array(0), this.faceArray = new Uint16Array(0), this.lineArray = new Uint16Array(0));
        D && (this.radiusArray = D.subarray(0, this.vertices));
        c && (this.normalArray && (this.normalArray = new Float32Array(this.normalArray)), this.faceArray && (this.faceArray = new Uint16Array(this.faceArray)),
            this.lineArray && (this.lineArray = new Uint16Array(this.lineArray)), this.vertexArray && (this.vertexArray = new Float32Array(this.vertexArray)), this.colorArray && (this.colorArray = new Float32Array(this.colorArray)), this.radiusArray && (this.radiusArray = new Float32Array(this.radiusArray)));
        this.__inittedArrays = !0
    };
    var c = function(c) {
            var d = new b(c.geometryGroups.length);
            c.geometryGroups.push(d);
            c.groups = c.geometryGroups.length;
            d.vertexArray = new Float32Array(196605);
            d.colorArray = new Float32Array(196605);
            c.mesh &&
                (d.normalArray = new Float32Array(196605), d.faceArray = new Uint16Array(393210), d.lineArray = new Uint16Array(393210));
            c.radii && (d.radiusArray = new Float32Array(65535));
            d.useOffset = c.offset;
            return d
        },
        d = function(b, c, d) {
            $3Dmol.EventDispatcher.call(this);
            this.id = $3Dmol.GeometryIDCount++;
            this.name = "";
            this.hasTangents = !1;
            this.dynamic = !0;
            this.mesh = !0 === b ? !0 : !1;
            this.radii = c || !1;
            this.offset = d || !1;
            this.buffersNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1;
            this.geometryGroups = [];
            this.groups = 0
        };
    d.prototype = {
        constructor: d,
        updateGeoGroup: function(b) {
            var d = 0 < this.groups ? this.geometryGroups[this.groups - 1] : null;
            if (!d || d.vertices + (b || 0) > d.vertexArray.length / 3) d = c(this);
            return d
        },
        addGeoGroup: function() {
            return c(this)
        },
        setUpNormals: function(b) {
            b = b || !1;
            for (var c = 0; c < this.groups; c++) this.geometryGroups[c].setNormals(b)
        },
        setUpWireframe: function() {
            for (var b = 0; b < this.groups; b++) this.geometryGroups[b].setLineIndices()
        },
        initTypedArrays: function() {
            for (var b = 0; b <
                this.groups; b++) {
                var c = this.geometryGroups[b];
                !0 !== c.__inittedArrays && c.truncateArrayBuffers(this.mesh, !1)
            }
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    };
    return d
}();
Object.defineProperty($3Dmol.Geometry.prototype, "vertices", {
    get: function() {
        for (var b = 0, c = 0; c < this.groups; c++) b += this.geometryGroups[c].vertices;
        return b
    }
});
$3Dmol.GeometryIDCount = 0;
$3Dmol.Raycaster = function() {
    var b = function(b, c, e, d) {
            this.ray = new $3Dmol.Ray(b, c);
            0 < this.ray.direction.lengthSq() && this.ray.direction.normalize();
            this.near = d || 0;
            this.far = e || Infinity
        },
        c = new $3Dmol.Sphere,
        d = new $3Dmol.Cylinder,
        h = new $3Dmol.Triangle,
        f = new $3Dmol.Vector3,
        w = new $3Dmol.Vector3,
        t = new $3Dmol.Vector3,
        x = new $3Dmol.Vector3;
    new $3Dmol.Ray;
    new $3Dmol.Vector3;
    var q = new $3Dmol.Vector3;
    new $3Dmol.Matrix4;
    var D = function(b, c) {
            return b.distance - c.distance
        },
        y = function(b) {
            return Math.min(Math.max(b, -1),
                1)
        };
    b.prototype.precision = 1E-4;
    b.prototype.linePrecision = .2;
    b.prototype.set = function(b, c) {
        this.ray.set(b, c)
    };
    b.prototype.intersectObjects = function(b, m) {
        for (var e = [], l = 0, u = m.length; l < u; l++) a: {
            var E = b,
                N = m[l],
                s = e;q.getPositionFromMatrix(E.matrixWorld);
            if (void 0 !== N.intersectionShape) {
                var g = N.intersectionShape,
                    M = this.linePrecision,
                    M = M * E.matrixWorld.getMaxScaleOnAxis(),
                    M = M * M;
                if (void 0 !== N.boundingSphere && N.boundingSphere instanceof $3Dmol.Sphere && (c.copy(N.boundingSphere), c.applyMatrix4(E.matrixWorld), !this.ray.isIntersectionSphere(c))) break a;
                for (var p = void 0, B = void 0, A = void 0, K = void 0, I = void 0, H = A = void 0, F = void 0, P = void 0, C = void 0, L = C = A = K = void 0, p = 0, B = g.triangle.length; p < B; p++) g.triangle[p] instanceof $3Dmol.Triangle && (h.copy(g.triangle[p]), h.applyMatrix4(E.matrixWorld), A = h.getNormal(), K = this.ray.direction.dot(A), 0 <= K || (f.subVectors(h.a, this.ray.origin), H = A.dot(f) / K, 0 > H || (w.copy(this.ray.direction).multiplyScalar(H).add(this.ray.origin), w.sub(h.a), t.copy(h.b).sub(h.a), x.copy(h.c).sub(h.a), K = t.dot(x),
                    P = t.lengthSq(), A = x.lengthSq(), A = (P * w.dot(x) - K * w.dot(t)) / (P * A - K * K), 0 > A || 1 < A || (K = (w.dot(t) - A * K) / P, 0 > K || 1 < K || 1 < K + A || s.push({
                        clickable: N,
                        distance: H
                    })))));
                p = 0;
                for (B = g.cylinder.length; p < B; p++) g.cylinder[p] instanceof $3Dmol.Cylinder && (d.copy(g.cylinder[p]), d.applyMatrix4(E.matrixWorld), f.subVectors(d.c1, this.ray.origin), I = f.dot(d.direction), A = f.dot(this.ray.direction), K = y(this.ray.direction.dot(d.direction)), P = 1 - K * K, 0 !== P && (C = (K * A - I) / P, L = (A - K * I) / P, w.copy(d.direction).multiplyScalar(C).add(d.c1), t.copy(this.ray.direction).multiplyScalar(L).add(this.ray.origin),
                    F = x.subVectors(w, t).lengthSq(), C = d.radius * d.radius, F <= C && (C = (K * I - A) * (K * I - A) - P * (f.lengthSq() - I * I - C), A = 0 >= C ? H = Math.sqrt(F) : H = (A - K * I - Math.sqrt(C)) / P, K = K * A - I, 0 > K || K * K > d.lengthSq() || 0 > A || s.push({
                        clickable: N,
                        distance: H
                    }))));
                p = 0;
                for (B = g.line.length; p < B; p += 2) w.copy(g.line[p]), w.applyMatrix4(E.matrixWorld), t.copy(g.line[p + 1]), t.applyMatrix4(E.matrixWorld), x.subVectors(t, w), H = x.lengthSq(), x.normalize(), f.subVectors(w, this.ray.origin), I = f.dot(x), A = f.dot(this.ray.direction), K = y(this.ray.direction.dot(x)), P = 1 -
                    K * K, 0 !== P && (C = (K * A - I) / P, L = (A - K * I) / P, w.add(x.multiplyScalar(C)), t.copy(this.ray.direction).multiplyScalar(L).add(this.ray.origin), F = x.subVectors(t, w).lengthSq(), F < M && C * C < H && s.push({
                        clickable: N,
                        distance: L
                    }));
                p = 0;
                for (B = g.sphere.length; p < B; p++)
                    if (g.sphere[p] instanceof $3Dmol.Sphere && (c.copy(g.sphere[p]), c.applyMatrix4(E.matrixWorld), this.ray.isIntersectionSphere(c))) {
                        w.subVectors(c.center, this.ray.origin);
                        E = w.dot(this.ray.direction);
                        C = E * E - (w.lengthSq() - c.radius * c.radius);
                        if (0 > E) break a;
                        H = 0 >= C ? E : E - Math.sqrt(C);
                        s.push({
                            clickable: N,
                            distance: H
                        });
                        break a
                    }
            }
        }
        e.sort(D);
        return e
    };
    return b
}();
$3Dmol.Projector = function() {
    new $3Dmol.Matrix4;
    var b = new $3Dmol.Matrix4;
    this.projectVector = function(c, d) {
        d.matrixWorldInverse.getInverse(d.matrixWorld);
        b.multiplyMatrices(d.projectionMatrix, d.matrixWorldInverse);
        return c.applyProjection(b)
    };
    this.unprojectVector = function(c, d) {
        d.projectionMatrixInverse.getInverse(d.projectionMatrix);
        b.multiplyMatrices(d.matrixWorld, d.projectionMatrixInverse);
        return c.applyProjection(b)
    }
};
$3Dmol.Camera = function(b, c, d, h, f) {
    $3Dmol.Object3D.call(this);
    this.fov = void 0 !== b ? b : 50;
    this.aspect = void 0 !== c ? c : 1;
    this.near = void 0 !== d ? d : .1;
    this.far = void 0 !== h ? h : 2E3;
    this.projectionMatrix = new $3Dmol.Matrix4;
    this.projectionMatrixInverse = new $3Dmol.Matrix4;
    this.matrixWorldInverse = new $3Dmol.Matrix4;
    this.right = this.position.z * Math.tan(Math.PI / 180 * b);
    this.left = -this.right;
    this.top = this.right / this.aspect;
    this.bottom = -this.top;
    this.ortho = !!f;
    this.updateProjectionMatrix()
};
$3Dmol.Camera.prototype = Object.create($3Dmol.Object3D.prototype);
$3Dmol.Camera.prototype.lookAt = function(b) {
    this.matrix.lookAt(this.position, b, this.up);
    this.rotationAutoUpdate && (!1 === this.useQuaternion ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose()[1]))
};
$3Dmol.Camera.prototype.updateProjectionMatrix = function() {
    this.ortho ? this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far) : this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far);
    this.projectionMatrixInverse.getInverse(this.projectionMatrix)
};
$3Dmol.SpritePlugin = function() {
    function b(b, c) {
        return b.z !== c.z ? c.z - b.z : c.id - b.id
    }
    var c, d, h, f, w, t, x, q, D, y;
    this.init = function(b) {
        c = b.context;
        d = b;
        h = b.getPrecision();
        f = new Float32Array(16);
        w = new Uint16Array(6);
        b = 0;
        f[b++] = -1;
        f[b++] = -1;
        f[b++] = 0;
        f[b++] = 0;
        f[b++] = 1;
        f[b++] = -1;
        f[b++] = 1;
        f[b++] = 0;
        f[b++] = 1;
        f[b++] = 1;
        f[b++] = 1;
        f[b++] = 1;
        f[b++] = -1;
        f[b++] = 1;
        f[b++] = 0;
        f[b++] = 1;
        b = 0;
        w[b++] = 0;
        w[b++] = 1;
        w[b++] = 2;
        w[b++] = 0;
        w[b++] = 2;
        w[b++] = 3;
        t = c.createBuffer();
        x = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, t);
        c.bufferData(c.ARRAY_BUFFER,
            f, c.STATIC_DRAW);
        c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, x);
        c.bufferData(c.ELEMENT_ARRAY_BUFFER, w, c.STATIC_DRAW);
        b = $3Dmol.ShaderLib.sprite;
        var m = h,
            e = c.createProgram(),
            l = c.createShader(c.FRAGMENT_SHADER),
            u = c.createShader(c.VERTEX_SHADER),
            m = "precision " + m + " float;\n";
        c.shaderSource(l, m + b.fragmentShader);
        c.shaderSource(u, m + b.vertexShader);
        c.compileShader(l);
        c.compileShader(u);
        c.getShaderParameter(l, c.COMPILE_STATUS) && c.getShaderParameter(u, c.COMPILE_STATUS) ? (c.attachShader(e, l), c.attachShader(e, u), c.linkProgram(e),
            c.getProgramParameter(e, c.LINK_STATUS) || console.error("Could not initialize shader"), b = e) : (console.error(c.getShaderInfoLog(l)), console.error("could not initialize shader"), b = null);
        q = b;
        D = {};
        y = {};
        D.position = c.getAttribLocation(q, "position");
        D.uv = c.getAttribLocation(q, "uv");
        y.uvOffset = c.getUniformLocation(q, "uvOffset");
        y.uvScale = c.getUniformLocation(q, "uvScale");
        y.rotation = c.getUniformLocation(q, "rotation");
        y.scale = c.getUniformLocation(q, "scale");
        y.alignment = c.getUniformLocation(q, "alignment");
        y.color =
            c.getUniformLocation(q, "color");
        y.map = c.getUniformLocation(q, "map");
        y.opacity = c.getUniformLocation(q, "opacity");
        y.useScreenCoordinates = c.getUniformLocation(q, "useScreenCoordinates");
        y.screenPosition = c.getUniformLocation(q, "screenPosition");
        y.modelViewMatrix = c.getUniformLocation(q, "modelViewMatrix");
        y.projectionMatrix = c.getUniformLocation(q, "projectionMatrix");
        y.fogType = c.getUniformLocation(q, "fogType");
        y.fogDensity = c.getUniformLocation(q, "fogDensity");
        y.fogNear = c.getUniformLocation(q, "fogNear");
        y.fogFar =
            c.getUniformLocation(q, "fogFar");
        y.fogColor = c.getUniformLocation(q, "fogColor");
        y.alphaTest = c.getUniformLocation(q, "alphaTest")
    };
    this.render = function(z, m, e, l) {
        var u = z.__webglSprites,
            E = u.length;
        if (E) {
            var f = D,
                s = y,
                g = .5 * e,
                M = .5 * l;
            c.useProgram(q);
            c.enableVertexAttribArray(f.position);
            c.enableVertexAttribArray(f.uv);
            c.disable(c.CULL_FACE);
            c.enable(c.BLEND);
            c.bindBuffer(c.ARRAY_BUFFER, t);
            c.vertexAttribPointer(f.position, 2, c.FLOAT, !1, 16, 0);
            c.vertexAttribPointer(f.uv, 2, c.FLOAT, !1, 16, 8);
            c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,
                x);
            c.uniformMatrix4fv(s.projectionMatrix, !1, m.projectionMatrix.elements);
            c.activeTexture(c.TEXTURE0);
            c.uniform1i(s.map, 0);
            var p = f = 0;
            (f = z.fog) ? (c.uniform3f(s.fogColor, f.color.r, f.color.g, f.color.b), c.uniform1f(s.fogNear, f.near), c.uniform1f(s.fogFar, f.far), c.uniform1i(s.fogType, 1), p = f = 1) : (c.uniform1i(s.fogType, 0), p = f = 0);
            var B, A, h, I = [];
            for (B = 0; B < E; B++) A = u[B], h = A.material, A.visible && 0 !== h.opacity && (h.useScreenCoordinates ? A.z = -A.position.z : (A._modelViewMatrix.multiplyMatrices(m.matrixWorldInverse, A.matrixWorld),
                A.z = -A._modelViewMatrix.elements[14]));
            u.sort(b);
            for (B = 0; B < E; B++) A = u[B], h = A.material, A.visible && 0 !== h.opacity && h.map && h.map.image && h.map.image.width && (c.uniform1f(s.alphaTest, h.alphaTest), m = h.map.image.height, I[0] = h.map.image.width * d.devicePixelRatio / e, I[1] = m * d.devicePixelRatio / l, !0 === h.useScreenCoordinates ? (c.uniform1i(s.useScreenCoordinates, 1), c.uniform3f(s.screenPosition, (A.position.x * d.devicePixelRatio - g) / g, (M - A.position.y * d.devicePixelRatio) / M, Math.max(0, Math.min(1, A.position.z)))) : (c.uniform1i(s.useScreenCoordinates,
                    0), c.uniformMatrix4fv(s.modelViewMatrix, !1, A._modelViewMatrix.elements)), m = z.fog && h.fog ? p : 0, f !== m && (c.uniform1i(s.fogType, m), f = m), m = 1 / (h.scaleByViewport ? l : 1), I[0] = I[0] * m * A.scale.x, I[1] = I[1] * m * A.scale.y, c.uniform2f(s.uvScale, h.uvScale.x, h.uvScale.y), c.uniform2f(s.uvOffset, h.uvOffset.x, h.uvOffset.y), c.uniform2f(s.alignment, h.alignment.x, h.alignment.y), c.uniform1f(s.opacity, h.opacity), c.uniform3f(s.color, h.color.r, h.color.g, h.color.b), c.uniform1f(s.rotation, A.rotation), c.uniform2fv(s.scale, I), d.setDepthTest(h.depthTest),
                d.setDepthWrite(h.depthWrite), d.setTexture(h.map, 0), c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0));
            c.enable(c.CULL_FACE)
        }
    }
};
$3Dmol.Light = function(b, c) {
    $3Dmol.Object3D.call(this);
    this.color = new $3Dmol.Color(b);
    this.position = new $3Dmol.Vector3(0, 1, 0);
    this.target = new $3Dmol.Object3D;
    this.intensity = void 0 !== c ? c : 1;
    this.onlyShadow = this.castShadow = !1
};
$3Dmol.Light.prototype = Object.create($3Dmol.Object3D.prototype);
$3Dmol.Material = function() {
    $3Dmol.EventDispatcher.call(this);
    this.id = $3Dmol.MaterialIdCount++;
    this.name = "";
    this.side = $3Dmol.FrontSide;
    this.opacity = 1;
    this.transparent = !1;
    this.stencilTest = this.depthWrite = this.depthTest = !0;
    this.polygonOffset = !1;
    this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.needsUpdate = this.visible = !0
};
$3Dmol.Material.prototype.setValues = function(b) {
    if (void 0 !== b)
        for (var c in b) {
            var d = b[c];
            if (void 0 === d) console.warn("$3Dmol.Material: '" + c + "' parameter is undefined.");
            else if (c in this) {
                var h = this[c];
                h instanceof $3Dmol.Color && d instanceof $3Dmol.Color ? h.copy(d) : h instanceof $3Dmol.Color ? h.set(d) : h instanceof $3Dmol.Vector3 && d instanceof $3Dmol.Vector3 ? h.copy(d) : this[c] = d
            }
        }
};
$3Dmol.Material.prototype.clone = function(b) {
    void 0 === b && (b = new $3Dmol.Material);
    b.name = this.name;
    b.side = this.side;
    b.opacity = this.opacity;
    b.transparent = this.transparent;
    b.depthTest = this.depthTest;
    b.depthWrite = this.depthWrite;
    b.stencilTest = this.stencilTest;
    b.polygonOffset = this.polygonOffset;
    b.polygonOffsetFactor = this.polygonOffsetFactor;
    b.polygonOffsetUnits = this.polygonOffsetUnits;
    b.alphaTest = this.alphaTest;
    b.overdraw = this.overdraw;
    b.visible = this.visible;
    return b
};
$3Dmol.Material.prototype.dispose = function() {
    this.dispatchEvent({
        type: "dispose"
    })
};
$3Dmol.MaterialIdCount = 0;
$3Dmol.LineBasicMaterial = function(b) {
    $3Dmol.Material.call(this);
    this.color = new $3Dmol.Color(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.vertexColors = !1;
    this.fog = !0;
    this.shaderID = "basic";
    this.setValues(b)
};
$3Dmol.LineBasicMaterial.prototype = Object.create($3Dmol.Material.prototype);
$3Dmol.LineBasicMaterial.prototype.clone = function() {
    var b = new $3Dmol.LineBasicMaterial;
    $3Dmol.Material.prototype.clone.call(this, b);
    b.color.copy(this.color);
    return b
};
$3Dmol.MeshLambertMaterial = function(b) {
    $3Dmol.Material.call(this);
    this.color = new $3Dmol.Color(16777215);
    this.ambient = new $3Dmol.Color(1048575);
    this.emissive = new $3Dmol.Color(0);
    this.wrapAround = !1;
    this.wrapRGB = new $3Dmol.Vector3(1, 1, 1);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.shading = $3Dmol.SmoothShading;
    this.shaderID = "lambert";
    this.vertexColors = $3Dmol.NoColors;
    this.skinning = !1;
    this.setValues(b)
};
$3Dmol.MeshLambertMaterial.prototype = Object.create($3Dmol.Material.prototype);
$3Dmol.MeshLambertMaterial.prototype.clone = function(b) {
    "undefined" === typeof b && (b = new $3Dmol.MeshLambertMaterial);
    $3Dmol.Material.prototype.clone.call(this, b);
    b.color.copy(this.color);
    b.ambient.copy(this.ambient);
    b.emissive.copy(this.emissive);
    b.wrapAround = this.wrapAround;
    b.wrapRGB.copy(this.wrapRGB);
    b.map = this.map;
    b.lightMap = this.lightMap;
    b.specularMap = this.specularMap;
    b.envMap = this.envMap;
    b.combine = this.combine;
    b.reflectivity = this.reflectivity;
    b.refractionRatio = this.refractionRatio;
    b.fog = this.fog;
    b.shading = this.shading;
    b.shaderID = this.shaderID;
    b.vertexColors = this.vertexColors;
    b.skinning = this.skinning;
    b.morphTargets = this.morphTargets;
    b.morphNormals = this.morphNormals;
    return b
};
$3Dmol.MeshDoubleLambertMaterial = function(b) {
    $3Dmol.MeshLambertMaterial.call(this, b);
    this.shaderID = "lambertdouble";
    this.side = $3Dmol.DoubleSide
};
$3Dmol.MeshDoubleLambertMaterial.prototype = Object.create($3Dmol.MeshLambertMaterial.prototype);
$3Dmol.MeshDoubleLambertMaterial.prototype.clone = function() {
    var b = new $3Dmol.MeshDoubleLambertMaterial;
    $3Dmol.MeshLambertMaterial.prototype.clone.call(this, b);
    return b
};
$3Dmol.MeshOutlineMaterial = function(b) {
    $3Dmol.Material.call(this);
    b = b || {};
    this.fog = !0;
    this.shaderID = "outline";
    this.wireframe = !1;
    this.outlineColor = b.color || new $3Dmol.Color(0, 0, 0);
    this.outlineWidth = b.width || .1;
    this.outlinePushback = b.pushback || 1
};
$3Dmol.MeshOutlineMaterial.prototype = Object.create($3Dmol.Material.prototype);
$3Dmol.MeshOutlineMaterial.prototype.clone = function(b) {
    "undefined" === typeof b && (b = new $3Dmol.MeshOutlineMaterial);
    $3Dmol.Material.prototype.clone.call(this, b);
    b.fog = this.fog;
    b.shaderID = this.shaderID;
    b.wireframe = this.wireframe;
    return b
};
$3Dmol.ImposterMaterial = function(b) {
    $3Dmol.Material.call(this);
    this.color = new $3Dmol.Color(16777215);
    this.ambient = new $3Dmol.Color(1048575);
    this.emissive = new $3Dmol.Color(0);
    this.imposter = !0;
    this.wrapAround = !1;
    this.wrapRGB = new $3Dmol.Vector3(1, 1, 1);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.shading = $3Dmol.SmoothShading;
    this.shaderID =
        null;
    this.vertexColors = $3Dmol.NoColors;
    this.skinning = !1;
    this.setValues(b)
};
$3Dmol.ImposterMaterial.prototype = Object.create($3Dmol.Material.prototype);
$3Dmol.ImposterMaterial.prototype.clone = function() {
    var b = new $3Dmol.ImposterMaterial;
    $3Dmol.Material.prototype.clone.call(this, b);
    b.color.copy(this.color);
    b.ambient.copy(this.ambient);
    b.emissive.copy(this.emissive);
    b.wrapAround = this.wrapAround;
    b.wrapRGB.copy(this.wrapRGB);
    b.map = this.map;
    b.lightMap = this.lightMap;
    b.specularMap = this.specularMap;
    b.envMap = this.envMap;
    b.combine = this.combine;
    b.reflectivity = this.reflectivity;
    b.refractionRatio = this.refractionRatio;
    b.fog = this.fog;
    b.shading = this.shading;
    b.shaderID =
        this.shaderID;
    b.vertexColors = this.vertexColors;
    b.skinning = this.skinning;
    b.morphTargets = this.morphTargets;
    b.morphNormals = this.morphNormals;
    return b
};
$3Dmol.SphereImposterMaterial = function(b) {
    $3Dmol.ImposterMaterial.call(this);
    this.shaderID = "sphereimposter";
    this.setValues(b)
};
$3Dmol.SphereImposterMaterial.prototype = Object.create($3Dmol.ImposterMaterial.prototype);
$3Dmol.SphereImposterMaterial.prototype.clone = function() {
    var b = new $3Dmol.SphereImposterMaterial;
    $3Dmol.ImposterMaterial.prototype.clone.call(this, b);
    return b
};
$3Dmol.SphereImposterOutlineMaterial = function(b) {
    $3Dmol.ImposterMaterial.call(this);
    b = b || {};
    this.shaderID = "sphereimposteroutline";
    this.outlineColor = b.color || new $3Dmol.Color(0, 0, 0);
    this.outlineWidth = b.width || .1;
    this.outlinePushback = b.pushback || 1;
    this.setValues(b)
};
$3Dmol.SphereImposterOutlineMaterial.prototype = Object.create($3Dmol.ImposterMaterial.prototype);
$3Dmol.SphereImposterOutlineMaterial.prototype.clone = function() {
    var b = new $3Dmol.SphereImposterOutlineMaterial;
    $3Dmol.ImposterMaterial.prototype.clone.call(this, b);
    b.outlineColor = this.outlineColor;
    b.outlineWidth = this.outlineWidth;
    b.outlinePushback = this.outlinePushback;
    return b
};
$3Dmol.StickImposterMaterial = function(b) {
    $3Dmol.ImposterMaterial.call(this);
    this.shaderID = "stickimposter";
    this.setValues(b)
};
$3Dmol.StickImposterMaterial.prototype = Object.create($3Dmol.ImposterMaterial.prototype);
$3Dmol.StickImposterMaterial.prototype.clone = function() {
    var b = new $3Dmol.StickImposterOutlineMaterial;
    $3Dmol.ImposterMaterial.prototype.clone.call(this, b);
    return b
};
$3Dmol.StickImposterOutlineMaterial = function(b) {
    $3Dmol.ImposterMaterial.call(this);
    b = b || {};
    this.shaderID = "stickimposteroutline";
    this.outlineColor = b.color || new $3Dmol.Color(0, 0, 0);
    this.outlineWidth = b.width || .1;
    this.outlinePushback = b.pushback || 1;
    this.setValues(b)
};
$3Dmol.StickImposterOutlineMaterial.prototype = Object.create($3Dmol.ImposterMaterial.prototype);
$3Dmol.StickImposterOutlineMaterial.prototype.clone = function() {
    var b = new $3Dmol.StickImposterOutlineMaterial;
    $3Dmol.ImposterMaterial.prototype.clone.call(this, b);
    b.outlineColor = this.outlineColor;
    b.outlineWidth = this.outlineWidth;
    b.outlinePushback = this.outlinePushback;
    return b
};
$3Dmol.InstancedMaterial = function(b) {
    $3Dmol.Material.call(this);
    this.color = new $3Dmol.Color(16777215);
    this.ambient = new $3Dmol.Color(1048575);
    this.emissive = new $3Dmol.Color(0);
    this.wrapAround = !1;
    this.wrapRGB = new $3Dmol.Vector3(1, 1, 1);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.shading = $3Dmol.SmoothShading;
    this.shaderID = "instanced";
    this.vertexColors = $3Dmol.NoColors;
    this.skinning = !1;
    this.sphere = null;
    this.setValues(b)
};
$3Dmol.InstancedMaterial.prototype = Object.create($3Dmol.Material.prototype);
$3Dmol.InstancedMaterial.prototype.clone = function() {
    var b = new $3Dmol.InstancedMaterial;
    $3Dmol.Material.prototype.clone.call(this, b);
    b.color.copy(this.color);
    b.ambient.copy(this.ambient);
    b.emissive.copy(this.emissive);
    b.wrapAround = this.wrapAround;
    b.wrapRGB.copy(this.wrapRGB);
    b.map = this.map;
    b.lightMap = this.lightMap;
    b.specularMap = this.specularMap;
    b.envMap = this.envMap;
    b.combine = this.combine;
    b.reflectivity = this.reflectivity;
    b.refractionRatio = this.refractionRatio;
    b.fog = this.fog;
    b.shading = this.shading;
    b.shaderID =
        this.shaderID;
    b.vertexColors = this.vertexColors;
    b.skinning = this.skinning;
    b.morphTargets = this.morphTargets;
    b.morphNormals = this.morphNormals;
    b.sphere = this.sphere;
    return b
};
$3Dmol.SpriteMaterial = function(b) {
    $3Dmol.Material.call(this);
    this.color = new $3Dmol.Color(16777215);
    this.map = new $3Dmol.Texture;
    this.useScreenCoordinates = !0;
    this.depthTest = !this.useScreenCoordinates;
    this.sizeAttenuation = !this.useScreenCoordinates;
    this.scaleByViewPort = !this.sizeAttenuation;
    this.alignment = $3Dmol.SpriteAlignment.center.clone();
    this.fog = !1;
    this.uvOffset = new $3Dmol.Vector2(0, 0);
    this.uvScale = new $3Dmol.Vector2(1, 1);
    this.setValues(b);
    b = b || {};
    void 0 === b.depthTest && (this.depthTest = !this.useScreenCoordinates);
    void 0 === b.sizeAttenuation && (this.sizeAttenuation = !this.useScreenCoordinates);
    void 0 === b.scaleByViewPort && (this.scaleByViewPort = !this.sizeAttenuation)
};
$3Dmol.SpriteMaterial.prototype = Object.create($3Dmol.Material.prototype);
$3Dmol.SpriteMaterial.prototype.clone = function() {
    var b = new $3Dmol.SpriteMaterial;
    $3Dmol.Material.prototype.clone.call(this, b);
    b.color.copy(this.color);
    b.map = this.map;
    b.useScreenCoordinates = useScreenCoordinates;
    b.sizeAttenuation = this.sizeAttenuation;
    b.scaleByViewport = this.scaleByViewPort;
    b.alignment.copy(this.alignment);
    b.uvOffset.copy(this.uvOffset);
    return b
};
$3Dmol.SpriteAlignment = {};
$3Dmol.SpriteAlignment.topLeft = new $3Dmol.Vector2(1, -1);
$3Dmol.SpriteAlignment.topCenter = new $3Dmol.Vector2(0, -1);
$3Dmol.SpriteAlignment.topRight = new $3Dmol.Vector2(-1, -1);
$3Dmol.SpriteAlignment.centerLeft = new $3Dmol.Vector2(1, 0);
$3Dmol.SpriteAlignment.center = new $3Dmol.Vector2(0, 0);
$3Dmol.SpriteAlignment.centerRight = new $3Dmol.Vector2(-1, 0);
$3Dmol.SpriteAlignment.bottomLeft = new $3Dmol.Vector2(1, 1);
$3Dmol.SpriteAlignment.bottomCenter = new $3Dmol.Vector2(0, 1);
$3Dmol.SpriteAlignment.bottomRight = new $3Dmol.Vector2(-1, 1);
$3Dmol.Texture = function(b) {
    $3Dmol.EventDispatcher.call(this);
    this.id = $3Dmol.TextureIdCount++;
    this.name = "";
    this.image = b;
    this.mipmaps = [];
    this.mapping = new $3Dmol.UVMapping;
    this.wrapT = this.wrapS = $3Dmol.ClampToEdgeWrapping;
    this.magFilter = $3Dmol.LinearFilter;
    this.minFilter = $3Dmol.LinearMipMapLinearFilter;
    this.anisotropy = 1;
    this.format = $3Dmol.RGBAFormat;
    this.type = $3Dmol.UnsignedByteType;
    this.offset = new $3Dmol.Vector2(0, 0);
    this.repeat = new $3Dmol.Vector2(1, 1);
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.needsUpdate = !1;
    this.onUpdate = null
};
$3Dmol.Texture.prototype = {
    constructor: $3Dmol.Texture,
    clone: function(b) {
        void 0 === b && (b = new $3Dmol.Texture);
        b.image = this.image;
        b.mipmaps = this.mipmaps.slice(0);
        b.mapping = this.mapping;
        b.wrapS = this.wrapS;
        b.wrapT = this.wrapT;
        b.magFilter = this.magFilter;
        b.minFilter = this.minFilter;
        b.anisotropy = this.anisotropy;
        b.format = this.format;
        b.type = this.type;
        b.offset.copy(this.offset);
        b.repeat.copy(this.repeat);
        b.generateMipmaps = this.generateMipmaps;
        b.premultiplyAlpha = this.premultiplyAlpha;
        b.flipY = this.flipY;
        b.unpackAlignment =
            this.unpackAlignment;
        return b
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
$3Dmol.TextureIdCount = 0;
$3Dmol.FrontSide = 0;
$3Dmol.BackSide = 1;
$3Dmol.DoubleSide = 2;
$3Dmol.NoShading = 0;
$3Dmol.FlatShading = 1;
$3Dmol.SmoothShading = 2;
$3Dmol.NoColors = 0;
$3Dmol.FaceColors = 1;
$3Dmol.VertexColors = 2;
$3Dmol.MultiplyOperation = 0;
$3Dmol.MixOperation = 1;
$3Dmol.AddOperation = 2;
$3Dmol.UVMapping = function() {};
$3Dmol.ClampToEdgeWrapping = 1001;
$3Dmol.LinearFilter = 1006;
$3Dmol.LinearMipMapLinearFilter = 1008;
$3Dmol.UnsignedByteType = 1009;
$3Dmol.RGBAFormat = 1021;
$3Dmol.Line = function(b, c, d) {
    $3Dmol.Object3D.call(this);
    this.geometry = b;
    this.material = void 0 !== c ? c : new $3Dmol.LineBasicMaterial({
        color: 16777215 * Math.random()
    });
    this.type = void 0 !== d ? d : $3Dmol.LineStrip
};
$3Dmol.LineStrip = 0;
$3Dmol.LinePieces = 1;
$3Dmol.Line.prototype = Object.create($3Dmol.Object3D.prototype);
$3Dmol.Line.prototype.clone = function(b) {
    void 0 === b && (b = new $3Dmol.Line(this.geometry, this.material, this.type));
    $3Dmol.Object3D.prototype.clone.call(this, b);
    return b
};
$3Dmol.Mesh = function(b, c) {
    $3Dmol.Object3D.call(this);
    this.geometry = b;
    this.material = void 0 !== c ? c : new $3Dmol.MeshBasicMaterial({
        color: 16777215 * Math.random(),
        wireframe: !0
    })
};
$3Dmol.Mesh.prototype = Object.create($3Dmol.Object3D.prototype);
$3Dmol.Mesh.prototype.clone = function(b) {
    void 0 === b && (b = new $3Dmol.Mesh(this.geometry, this.material));
    $3Dmol.Object3D.prototype.clone.call(this, b);
    return b
};
$3Dmol.Sprite = function(b) {
    $3Dmol.Object3D.call(this);
    this.material = void 0 !== b ? b : new $3Dmol.SpriteMaterial;
    this.rotation3d = this.rotation;
    this.rotation = 0
};
$3Dmol.Sprite.prototype = Object.create($3Dmol.Object3D.prototype);
$3Dmol.Sprite.prototype.updateMatrix = function() {
    this.matrix.setPosition(this.position);
    this.rotation3d.set(0, 0, this.rotation);
    this.matrix.setRotationFromEuler(this.rotation3d);
    1 === this.scale.x && 1 === this.scale.y || this.matrix.scale(this.scale);
    this.matrixWorldNeedsUpdate = !0
};
$3Dmol.Sprite.prototype.clone = function(b) {
    void 0 === b && (b = new $3Dmol.Sprite(this.material));
    $3Dmol.Object3D.prototype.clone.call(this, b);
    return b
};
$3Dmol.Renderer = function(b) {
    function c(b) {
        V[b] || (G.enableVertexAttribArray(b), V[b] = !0)
    }

    function d(b, c) {
        var e;
        "fragment" === b ? e = G.createShader(G.FRAGMENT_SHADER) : "vertex" === b && (e = G.createShader(G.VERTEX_SHADER));
        G.shaderSource(e, c);
        G.compileShader(e);
        return G.getShaderParameter(e, G.COMPILE_STATUS) ? e : (console.error(G.getShaderInfoLog(e)), console.error("could not initialize shader"), null)
    }

    function h(b, c, e, d, m, F, l, C) {
        var p, q, y;
        c ? (q = b.length - 1, C = c = -1) : (q = 0, c = b.length, C = 1);
        for (var z = q; z !== c; z += C)
            if (p = b[z],
                p.render && (q = p.object, y = p.buffer, p = p[e])) {
                l && g.setBlending(!0);
                g.setDepthTest(p.depthTest);
                g.setDepthWrite(p.depthWrite);
                var t = p.polygonOffset;
                null !== t && (t ? G.enable(G.POLYGON_OFFSET_FILL) : G.disable(G.POLYGON_OFFSET_FILL));
                t = q._modelViewMatrix.isReflected();
                g.setMaterialFaces(p, t);
                g.renderBuffer(d, m, F, p, y, q);
                if (s || p.outline) "sphereimposter" == p.shaderID ? g.renderBuffer(d, m, F, E, y, q) : "stickimposter" == p.shaderID ? g.renderBuffer(d, m, F, N, y, q) : p.wireframe || "basic" === p.shaderID || 0 === p.opacity || g.renderBuffer(d,
                    m, F, u, y, q)
            }
    }

    function f(b) {
        return 0 === (b & b - 1)
    }

    function w(b) {
        return b === $3Dmol.UnsignedByteType ? G.UNSIGNED_BYTE : b === $3Dmol.RGBAFormat ? G.RGBA : 0
    }
    b = b || {};
    var t = void 0 !== b.canvas ? b.canvas : document.createElement("canvas"),
        x = void 0 !== b.precision ? b.precision : "highp",
        q = void 0 !== b.alpha ? b.alpha : !0,
        D = void 0 !== b.premultipliedAlpha ? b.premultipliedAlpha : !0,
        y = void 0 !== b.antialias ? b.antialias : !1,
        z = void 0 !== b.stencil ? b.stencil : !0,
        m = void 0 !== b.preserveDrawingBuffer ? b.preserveDrawingBuffer : !1,
        e = void 0 !== b.clearColor ?
        new $3Dmol.Color(b.clearColor) : new $3Dmol.Color(0),
        l = void 0 !== b.clearAlpha ? b.clearAlpha : 0,
        u = new $3Dmol.MeshOutlineMaterial(b.outline),
        E = new $3Dmol.SphereImposterOutlineMaterial(b.outline),
        N = new $3Dmol.StickImposterOutlineMaterial(b.outline),
        s = !!b.outline;
    this.domElement = t;
    this.context = null;
    this.devicePixelRatio = void 0 !== b.devicePixelRatio ? b.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1;
    this.autoUpdateScene = this.autoUpdateObjects = this.sortObjects = this.autoClearStencil = this.autoClearDepth =
        this.autoClearColor = this.autoClear = !0;
    this.renderPluginsPost = [];
    this.info = {
        memory: {
            programs: 0,
            geometries: 0,
            textures: 0
        },
        render: {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
        }
    };
    var g = this,
        M = [],
        p = 0,
        B = null,
        A = -1,
        K = null,
        I = null,
        H = 0,
        F = -1,
        P = -1,
        C = -1,
        L = -1,
        O = null,
        Q = 0,
        J = 0,
        R = 0,
        S = 0,
        V = {},
        Z = new $3Dmol.Matrix4,
        W = new $3Dmol.Vector3,
        Y = new $3Dmol.Vector3,
        X = !0,
        U = [],
        T = [],
        G;
    try {
        if (!(G = t.getContext("experimental-webgl", {
                alpha: q,
                premultipliedAlpha: D,
                antialias: y,
                stencil: z,
                preserveDrawingBuffer: m
            })) && !(G = t.getContext("webgl", {
                alpha: q,
                premultipliedAlpha: D,
                antialias: y,
                stencil: z,
                preserveDrawingBuffer: m
            }))) throw "Error creating WebGL context.";
    } catch (ba) {
        console.error(ba)
    }
    G.clearColor(0, 0, 0, 1);
    G.clearDepth(1);
    G.clearStencil(0);
    G.enable(G.DEPTH_TEST);
    G.depthFunc(G.LEQUAL);
    G.frontFace(G.CCW);
    G.cullFace(G.BACK);
    G.enable(G.CULL_FACE);
    G.enable(G.BLEND);
    G.blendEquation(G.FUNC_ADD);
    G.blendFunc(G.SRC_ALPHA, G.ONE_MINUS_SRC_ALPHA);
    G.clearColor(e.r, e.g, e.b, l);
    this.context = G;
    var aa = G.getExtension("ANGLE_instanced_arrays"),
        ga = G.getExtension("EXT_frag_depth");
    this.supportedExtensions = function() {
        return {
            supportsAIA: Boolean(aa),
            supportsImposters: Boolean(ga)
        }
    };
    this.getContext = function() {
        return G
    };
    this.getPrecision = function() {
        return x
    };
    this.setClearColorHex = function(b, c) {
        e.setHex(b);
        l = c;
        G.clearColor(e.r, e.g, e.b, l)
    };
    this.enableOutline = function(b) {
        u = new $3Dmol.MeshOutlineMaterial(b);
        E = new $3Dmol.SphereImposterOutlineMaterial(b);
        N = new $3Dmol.StickImposterOutlineMaterial(b);
        s = !0
    };
    this.disableOutline = function() {
        s = !1
    };
    this.setSize = function(b, c) {
        Q = t.width = b * this.devicePixelRatio;
        J = t.height = c * this.devicePixelRatio;
        t.style.width = b + "px";
        t.style.height = c + "px";
        G.viewport(0, 0, G.drawingBufferWidth, G.drawingBufferHeight)
    };
    this.clear = function(b, c, e) {
        var g = 0;
        if (void 0 === b || b) g |= G.COLOR_BUFFER_BIT;
        if (void 0 === c || c) g |= G.DEPTH_BUFFER_BIT;
        if (void 0 === e || e) g |= G.STENCIL_BUFFER_BIT;
        G.clear(g)
    };
    this.clearTarget = function(b, c, e) {
        this.clear(b, c, e)
    };
    this.setMaterialFaces = function(b, c) {
        var e = b.side === $3Dmol.DoubleSide,
            g = b.side === $3Dmol.BackSide,
            g = c ? !g : g;
        F !== e && (e ? G.disable(G.CULL_FACE) : G.enable(G.CULL_FACE),
            F = e);
        P !== g && (g ? G.frontFace(G.CW) : G.frontFace(G.CCW), P = g)
    };
    this.setDepthTest = function(b) {
        C !== b && (b ? G.enable(G.DEPTH_TEST) : G.disable(G.DEPTH_TEST), C = b)
    };
    this.setDepthWrite = function(b) {
        L !== b && (G.depthMask(b), L = b)
    };
    this.setBlending = function(b) {
        b ? (G.enable(G.BLEND), G.blendEquationSeparate(G.FUNC_ADD, G.FUNC_ADD), G.blendFuncSeparate(G.SRC_ALPHA, G.ONE_MINUS_SRC_ALPHA, G.ONE, G.ONE_MINUS_SRC_ALPHA)) : G.disable(G.BLEND)
    };
    this.addPostPlugin = function(b) {
        b.init(this);
        this.renderPluginsPost.push(b)
    };
    var pa = function(b) {
            b =
                b.target;
            b.removeEventListener("dispose", pa);
            b.__webglInit = void 0;
            void 0 !== b.__webglVertexBuffer && G.deleteBuffer(b.__webglVertexBuffer);
            void 0 !== b.__webglColorBuffer && G.deleteBuffer(b.__webglColorBuffer);
            if (void 0 !== b.geometryGroups)
                for (var c = 0, e = b.groups; c < e; c++) {
                    var d = b.geometryGroups[c];
                    void 0 !== d.__webglVertexBuffer && G.deleteBuffer(d.__webglVertexBuffer);
                    void 0 !== d.__webglColorBuffer && G.deleteBuffer(d.__webglColorBuffer);
                    void 0 !== d.__webglNormalBuffer && G.deleteBuffer(d.__webglNormalBuffer);
                    void 0 !==
                        d.__webglFaceBuffer && G.deleteBuffer(d.__webglFaceBuffer);
                    void 0 !== d.__webglLineBuffer && G.deleteBuffer(d.__webglLineBuffer)
                }
            g.info.memory.geometries--
        },
        va = function(b) {
            b = b.target;
            b.removeEventListener("dispose", va);
            b.image && b.image.__webglTextureCube ? G.deleteTexture(b.image.__webglTextureCube) : b.__webglInit && (b.__webglInit = !1, G.deleteTexture(b.__webglTexture));
            g.info.memory.textures--
        },
        da = function(b) {
            b = b.target;
            b.removeEventListener("dispose", da);
            ia(b)
        },
        ia = function(b) {
            var c = b.program;
            if (void 0 !== c) {
                b.program =
                    void 0;
                var e, d, m = !1;
                b = 0;
                for (e = M.length; b < e; b++)
                    if (d = M[b], d.program === c) {
                        d.usedTimes--;
                        0 === d.usedTimes && (m = !0);
                        break
                    }
                if (!0 === m) {
                    m = [];
                    b = 0;
                    for (e = M.length; b < e; b++) d = M[b], d.program !== c && m.push(d);
                    M = m;
                    G.deleteProgram(c);
                    g.info.memory.programs--
                }
            }
        };
    this.initMaterial = function(b, c, e, m) {
        b.addEventListener("dispose", da);
        if (c = b.shaderID) c = $3Dmol.ShaderLib[c], b.vertexShader = c.vertexShader, b.fragmentShader = c.fragmentShader, b.uniforms = $3Dmol.ShaderUtils.clone(c.uniforms);
        var F;
        a: {
            var l = b.fragmentShader;m = b.vertexShader;
            e = b.uniforms;
            var u = {
                    wireframe: b.wireframe,
                    fragdepth: b.imposter
                },
                C, s;c = [];c.push(l);c.push(m);
            for (C in u) c.push(C),
            c.push(u[C]);c = c.join();C = 0;
            for (s = M.length; C < s; C++) {
                var q = M[C];
                if (q.code === c) {
                    q.usedTimes++;
                    F = q.program;
                    break a
                }
            }
            C = G.createProgram();q = "precision " + x + " float;";s = "" + q;u = [u.fragdepth ? "#extension GL_EXT_frag_depth: enable" : "", u.wireframe ? "#define WIREFRAME 1" : "", q].join("\n");l = d("fragment", u + l);m = d("vertex", s + m);G.attachShader(C, m);G.attachShader(C, l);G.linkProgram(C);G.getProgramParameter(C,
                G.LINK_STATUS) || console.error("Could not initialize shader");C.uniforms = {};C.attributes = {};m = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix"];
            for (F in e) m.push(F);
            for (F = 0; F < m.length; F++) e = m[F],
            C.uniforms[e] = G.getUniformLocation(C, e);m = "position normal color lineDistance offset radius".split(" ");
            for (F = 0; F < m.length; F++) e = m[F],
            C.attributes[e] = G.getAttribLocation(C, e);C.id = p++;M.push({
                program: C,
                code: c,
                usedTimes: 1
            });g.info.memory.programs = M.length;F = C
        }
        b.program = F
    };
    this.renderBuffer =
        function(b, e, d, m, F, l) {
            if (m.visible) {
                var C;
                m.needsUpdate && (m.program && ia(m), g.initMaterial(m, e, d, l), m.needsUpdate = !1);
                var u = !1,
                    p = m.program,
                    s = p.uniforms;
                C = m.uniforms;
                p != B && (G.useProgram(p), B = p, u = !0);
                m.id != A && (A = m.id, u = !0);
                b != I && (I = b, u = !0);
                G.uniformMatrix4fv(s.projectionMatrix, !1, b.projectionMatrix.elements);
                G.uniformMatrix4fv(s.modelViewMatrix, !1, l._modelViewMatrix.elements);
                G.uniformMatrix3fv(s.normalMatrix, !1, l._normalMatrix.elements);
                if (u) {
                    C.fogColor.value = d.color;
                    C.fogNear.value = d.near;
                    C.fogFar.value =
                        d.far;
                    if (m.shaderID.startsWith("lambert") || "instanced" === m.shaderID || m.shaderID.endsWith("imposter")) {
                        G.uniformMatrix4fv(s.viewMatrix, !1, b.matrixWorldInverse.elements);
                        if (X) {
                            var q, y, E = 0,
                                z = 0,
                                t = 0;
                            b = 0;
                            for (d = e.length; b < d; b++)
                                if (u = e[b], q = u.color, y = u.intensity, u instanceof $3Dmol.Light && (E++, Y.getPositionFromMatrix(u.matrixWorld), W.getPositionFromMatrix(u.target.matrixWorld), Y.sub(W), Y.normalize(), 0 !== Y.x || 0 !== Y.y || 0 !== Y.z)) T[t] = Y.x, T[t + 1] = Y.y, T[t + 2] = Y.z, U[t] = q.r * y, U[t + 1] = q.g * y, U[t + 2] = q.b * y, t += 3, z++;
                            X = !1
                        }
                        C.directionalLightColor.value = U;
                        C.directionalLightDirection.value = T
                    } else m.shaderID.endsWith("outline") ? (C.outlineColor.value = m.outlineColor, C.outlineWidth.value = m.outlineWidth, C.outlinePushback.value = m.outlinePushback) : "sphereimposter" === m.shaderID && (G.uniformMatrix4fv(s.viewMatrix, !1, b.matrixWorldInverse.elements), G.uniformMatrix3fv(s.normalMatrix, !1, l._normalMatrix.elements), C.directionalLightColor.value = U, C.directionalLightDirection.value = T);
                    C.opacity.value = m.opacity;
                    for (var f in C) s[f] && (e =
                        C[f].type, b = C[f].value, d = s[f], "f" === e ? G.uniform1f(d, b) : "fv" === e ? G.uniform3fv(d, b) : "c" === e ? G.uniform3f(d, b.r, b.g, b.b) : "f4" === e && G.uniform4f(d, b[0], b[1], b[2], b[3]))
                }
                C = p.attributes;
                s = !1;
                p = 16777215 * F.id + 2 * p.id + (m.wireframe ? 1 : 0);
                p !== K && (K = p, s = !0);
                if (s) {
                    for (var L in V) V[L] && (G.disableVertexAttribArray(L), V[L] = !1);
                    0 <= C.position && (G.bindBuffer(G.ARRAY_BUFFER, F.__webglVertexBuffer), c(C.position), G.vertexAttribPointer(C.position, 3, G.FLOAT, !1, 0, 0));
                    0 <= C.color && (G.bindBuffer(G.ARRAY_BUFFER, F.__webglColorBuffer),
                        c(C.color), G.vertexAttribPointer(C.color, 3, G.FLOAT, !1, 0, 0));
                    0 <= C.normal && (G.bindBuffer(G.ARRAY_BUFFER, F.__webglNormalBuffer), c(C.normal), G.vertexAttribPointer(C.normal, 3, G.FLOAT, !1, 0, 0));
                    0 <= C.offset && (G.bindBuffer(G.ARRAY_BUFFER, F.__webglOffsetBuffer), c(C.offset), G.vertexAttribPointer(C.offset, 3, G.FLOAT, !1, 0, 0));
                    0 <= C.radius && (G.bindBuffer(G.ARRAY_BUFFER, F.__webglRadiusBuffer), c(C.radius), G.vertexAttribPointer(C.radius, 1, G.FLOAT, !1, 0, 0))
                }
                var x;
                l instanceof $3Dmol.Mesh ? ("instanced" === m.shaderID ? (x =
                        m.sphere.geometryGroups[0], s && (G.bindBuffer(G.ARRAY_BUFFER, F.__webglVertexBuffer), G.bufferData(G.ARRAY_BUFFER, x.vertexArray, G.STATIC_DRAW), G.bindBuffer(G.ARRAY_BUFFER, F.__webglNormalBuffer), G.bufferData(G.ARRAY_BUFFER, x.normalArray, G.STATIC_DRAW), G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, F.__webglFaceBuffer), G.bufferData(G.ELEMENT_ARRAY_BUFFER, x.faceArray, G.STATIC_DRAW)), x = x.faceidx, aa.vertexAttribDivisorANGLE(C.offset, 1), aa.vertexAttribDivisorANGLE(C.radius, 1), aa.vertexAttribDivisorANGLE(C.color, 1), aa.drawElementsInstancedANGLE(G.TRIANGLES,
                            x, G.UNSIGNED_SHORT, 0, F.radiusArray.length), aa.vertexAttribDivisorANGLE(C.offset, 0), aa.vertexAttribDivisorANGLE(C.radius, 0), aa.vertexAttribDivisorANGLE(C.color, 0)) : m.wireframe ? (l = F.lineidx, m = m.wireframeLinewidth, m !== O && (G.lineWidth(m), O = m), s && G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, F.__webglLineBuffer), G.drawElements(G.LINES, l, G.UNSIGNED_SHORT, 0)) : (x = F.faceidx, s && G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, F.__webglFaceBuffer), G.drawElements(G.TRIANGLES, x, G.UNSIGNED_SHORT, 0)), g.info.render.calls++, g.info.render.vertices +=
                    x, g.info.render.faces += x / 3) : l instanceof $3Dmol.Line && (l = F.vertices, F = m.linewidth, F !== O && (G.lineWidth(F), O = F), G.drawArrays(G.LINES, 0, l), g.info.render.calls++)
            }
        };
    this.render = function(b, c, e) {
        if (!1 === c instanceof $3Dmol.Camera) console.error("$3Dmol.Renderer.render: camera is not an instance of $3Dmol.Camera.");
        else {
            var d, m, l, u, p = b.__lights,
                s = b.fog;
            A = -1;
            X = !0;
            this.autoUpdateScene && b.updateMatrixWorld();
            void 0 === c.parent && c.updateMatrixWorld();
            c.matrixWorldInverse.getInverse(c.matrixWorld);
            Z.multiplyMatrices(c.projectionMatrix,
                c.matrixWorldInverse);
            this.autoUpdateObjects && this.initWebGLObjects(b);
            g.info.render.calls = 0;
            g.info.render.vertices = 0;
            g.info.render.faces = 0;
            g.info.render.points = 0;
            R = Q;
            S = J;
            (this.autoClear || e) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
            u = b.__webglObjects;
            e = 0;
            for (d = u.length; e < d; e++)
                if (m = u[e], l = m.object, m.render = !1, l.visible) {
                    l._modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, l.matrixWorld);
                    l._normalMatrix.getInverse(l._modelViewMatrix);
                    l._normalMatrix.transpose();
                    l = m;
                    var q = l.object.material;
                    q.transparent ? (l.opaque = null, l.transparent = q, q.wireframe || (q = q.clone(), q.opacity = 0, l.blank = q)) : (l.opaque = q, l.transparent = null);
                    m.render = !0
                }
            this.setBlending(!1);
            h(b.__webglObjects, !0, "opaque", c, p, s, !1, null);
            h(b.__webglObjects, !0, "blank", c, p, s, !0, null);
            h(b.__webglObjects, !1, "transparent", c, p, s, !0, null);
            p = this.renderPluginsPost;
            K = -1;
            I = B = null;
            P = A = F = C = L = -1;
            if (p.length)
                for (s = 0, e = p.length; s < e; s++) X = !0, p[s].render(b, c, R, S), K = -1, I = B = null, P = A = F = C = L = -1;
            this.setDepthTest(!0);
            this.setDepthWrite(!0)
        }
    };
    this.initWebGLObjects = function(b) {
        b.__webglObjects || (b.__webglObjects = [], b.__webglObjectsImmediate = [], b.__webglSprites = [], b.__webglFlares = []);
        if (b.__objectsAdded.length) {
            for (; b.__objectsAdded.length;) {
                var c = b.__objectsAdded[0],
                    e = b,
                    d = void 0,
                    m = void 0,
                    F = void 0,
                    l = void 0;
                if (!c.__webglInit && (c.__webglInit = !0, c._modelViewMatrix = new $3Dmol.Matrix4, c._normalMatrix = new $3Dmol.Matrix3, void 0 !== c.geometry && void 0 === c.geometry.__webglInit && (c.geometry.__webglInit = !0, c.geometry.addEventListener("dispose", pa)),
                        c instanceof $3Dmol.Mesh || c instanceof $3Dmol.Line))
                    for (F = c.geometry, d = 0, m = F.geometryGroups.length; d < m; d++) l = F.geometryGroups[d], l.id = H++, l.__webglVertexBuffer || (c instanceof $3Dmol.Mesh ? (l.radiusArray && (l.__webglRadiusBuffer = G.createBuffer()), l.useOffset && (l.__webglOffsetBuffer = G.createBuffer()), l.__webglVertexBuffer = G.createBuffer(), l.__webglNormalBuffer = G.createBuffer(), l.__webglColorBuffer = G.createBuffer(), l.__webglFaceBuffer = G.createBuffer(), l.__webglLineBuffer = G.createBuffer(), g.info.memory.geometries++,
                        F.elementsNeedUpdate = !0, F.normalsNeedUpdate = !0) : c instanceof $3Dmol.Line && (l.__webglVertexBuffer = G.createBuffer(), l.__webglColorBuffer = G.createBuffer(), g.info.memory.geometries++), F.verticesNeedUpdate = !0, F.colorsNeedUpdate = !0);
                if (!c.__webglActive) {
                    if (c instanceof $3Dmol.Mesh || c instanceof $3Dmol.Line)
                        for (F = c.geometry, d = 0, m = F.geometryGroups.length; d < m; d++) l = F.geometryGroups[d], e.__webglObjects.push({
                            buffer: l,
                            object: c,
                            opaque: null,
                            transparent: null
                        });
                    else c instanceof $3Dmol.Sprite && e.__webglSprites.push(c);
                    c.__webglActive = !0
                }
                b.__objectsAdded.splice(0, 1)
            }
            K = -1
        }
        for (; b.__objectsRemoved.length;) {
            c = b.__objectsRemoved[0];
            e = b;
            if (c instanceof $3Dmol.Mesh || c instanceof $3Dmol.Line)
                for (e = e.__webglObjects, d = c, m = e.length - 1; 0 <= m; --m) e[m].object === d && e.splice(m, 1);
            else if (c instanceof $3Dmol.Sprite)
                for (e = e.__webglSprites, d = c, m = e.length - 1; 0 <= m; --m) e[m] === d && e.splice(m, 1);
            c.__webglActive = !1;
            b.__objectsRemoved.splice(0, 1)
        }
        c = 0;
        for (e = b.__webglObjects.length; c < e; c++)
            if (m = b.__webglObjects[c].object, d = m.geometry, l = void 0,
                m instanceof $3Dmol.Mesh || m instanceof $3Dmol.Line) {
                m = 0;
                for (F = d.geometryGroups.length; m < F; m++)
                    if (l = d.geometryGroups[m], d.verticesNeedUpdate || d.elementsNeedUpdate || d.colorsNeedUpdate || d.normalsNeedUpdate) {
                        var C = G.STATIC_DRAW,
                            u = l.vertexArray,
                            p = l.colorArray;
                        void 0 !== l.__webglOffsetBuffer ? G.bindBuffer(G.ARRAY_BUFFER, l.__webglOffsetBuffer) : G.bindBuffer(G.ARRAY_BUFFER, l.__webglVertexBuffer);
                        G.bufferData(G.ARRAY_BUFFER, u, C);
                        G.bindBuffer(G.ARRAY_BUFFER, l.__webglColorBuffer);
                        G.bufferData(G.ARRAY_BUFFER, p,
                            C);
                        l.normalArray && void 0 !== l.__webglNormalBuffer && (u = l.normalArray, G.bindBuffer(G.ARRAY_BUFFER, l.__webglNormalBuffer), G.bufferData(G.ARRAY_BUFFER, u, C));
                        l.radiusArray && void 0 !== l.__webglRadiusBuffer && (G.bindBuffer(G.ARRAY_BUFFER, l.__webglRadiusBuffer), G.bufferData(G.ARRAY_BUFFER, l.radiusArray, C));
                        l.faceArray && void 0 !== l.__webglFaceBuffer && (u = l.faceArray, G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, l.__webglFaceBuffer), G.bufferData(G.ELEMENT_ARRAY_BUFFER, u, C));
                        l.lineArray && void 0 !== l.__webglLineBuffer && (u = l.lineArray,
                            G.bindBuffer(G.ELEMENT_ARRAY_BUFFER, l.__webglLineBuffer), G.bufferData(G.ELEMENT_ARRAY_BUFFER, u, C))
                    }
                d.verticesNeedUpdate = !1;
                d.elementsNeedUpdate = !1;
                d.normalsNeedUpdate = !1;
                d.colorsNeedUpdate = !1;
                d.buffersNeedUpdate = !1
            }
    };
    this.setTexture = function(b, c) {
        if (b.needsUpdate) {
            b.__webglInit || (b.__webglInit = !0, b.addEventListener("dispose", va), b.__webglTexture = G.createTexture(), g.info.memory.textures++);
            G.activeTexture(G.TEXTURE0 + c);
            G.bindTexture(G.TEXTURE_2D, b.__webglTexture);
            G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,
                b.flipY);
            G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha);
            G.pixelStorei(G.UNPACK_ALIGNMENT, b.unpackAlignment);
            var e = b.image,
                e = f(e.width) && f(e.height),
                d = w(b.format),
                m = w(b.type),
                F = G.TEXTURE_2D;
            e ? (G.texParameteri(F, G.TEXTURE_WRAP_S, w(b.wrapS)), G.texParameteri(F, G.TEXTURE_WRAP_T, w(b.wrapT)), G.texParameteri(F, G.TEXTURE_MAG_FILTER, w(b.magFilter)), G.texParameteri(F, G.TEXTURE_MIN_FILTER, w(b.minFilter))) : (G.texParameteri(F, G.TEXTURE_WRAP_S, G.CLAMP_TO_EDGE), G.texParameteri(F, G.TEXTURE_WRAP_T,
                G.CLAMP_TO_EDGE), G.texParameteri(F, G.TEXTURE_MAG_FILTER, G.LINEAR), G.texParameteri(F, G.TEXTURE_MIN_FILTER, G.LINEAR));
            var l = b.mipmaps;
            if (0 < l.length && e) {
                for (var C = 0, u = l.length; C < u; C++) F = l[C], G.texImage2D(G.TEXTURE_2D, C, d, d, m, F);
                b.generateMipmaps = !1
            } else G.texImage2D(G.TEXTURE_2D, 0, d, d, m, b.image);
            b.generateMipmaps && e && G.generateMipmap(G.TEXTURE_2D);
            b.needsUpdate = !1;
            if (b.onUpdate) b.onUpdate()
        } else G.activeTexture(G.TEXTURE0 + c), G.bindTexture(G.TEXTURE_2D, b.__webglTexture)
    };
    this.addPostPlugin(new $3Dmol.SpritePlugin)
};
$3Dmol.Scene = function() {
    $3Dmol.Object3D.call(this);
    this.overrideMaterial = this.fog = null;
    this.matrixAutoUpdate = !1;
    this.__objects = [];
    this.__lights = [];
    this.__objectsAdded = [];
    this.__objectsRemoved = []
};
$3Dmol.Scene.prototype = Object.create($3Dmol.Object3D.prototype);
$3Dmol.Scene.prototype.__addObject = function(b) {
    b instanceof $3Dmol.Light ? (-1 === this.__lights.indexOf(b) && this.__lights.push(b), b.target && void 0 === b.target.parent && this.add(b.target)) : -1 === this.__objects.indexOf(b) && (this.__objects.push(b), this.__objectsAdded.push(b), -1 !== this.__objectsRemoved.indexOf(b) && this.__objectsRemoved.splice(c, 1));
    for (var c = 0; c < b.children.length; c++) this.__addObject(b.children[c])
};
$3Dmol.Scene.prototype.__removeObject = function(b) {
    var c;
    b instanceof $3Dmol.Light ? (c = this.__lights.indexOf(b), -1 !== c && this.__lights.splice(c, 1)) : (c = this.__objects.indexOf(b), -1 !== c && (this.__objects.splice(c, 1), this.__objectsRemoved.push(b), -1 !== this.__objectsAdded.indexOf(b) && this.__objectsAdded.splice(c, 1)));
    for (c = 0; c < b.children.length; c++) this.__removeObject(b.children[c])
};
$3Dmol.Fog = function(b, c, d) {
    this.name = "";
    this.color = new $3Dmol.Color(b);
    this.near = void 0 !== c ? c : 1;
    this.far = void 0 !== d ? d : 1E3
};
$3Dmol.Fog.prototype.clone = function() {
    return new $3Dmol.Fog(this.color.getHex(), this.near, this.far)
};
$3Dmol.ShaderUtils = {
    clone: function(b) {
        var c, d = {};
        for (c in b) {
            d[c] = {};
            d[c].type = b[c].type;
            var h = b[c].value;
            h instanceof $3Dmol.Color ? d[c].value = h.clone() : "number" === typeof h ? d[c].value = h : h instanceof Array ? d[c].value = [] : console.error("Error copying shader uniforms from ShaderLib: unknown type for uniform")
        }
        return d
    },
    stickimposterFragmentShader: "uniform float opacity;\nuniform mat4 projectionMatrix;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vLight;\nvarying vec3 vColor;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\nvoid main() {\n    vec3 color = abs(vColor);\n    vec3 pos = cposition;\n    vec3 p = pos;\n    vec3 v = normalize(pos);\n    vec3 pa = p1;\n    vec3 va = normalize(p2-p1);\n    vec3 tmp1 = v-(dot(v,va)*va);\n    vec3 deltap = p-pa;\n    float A = dot(tmp1,tmp1);\n    if(A == 0.0) discard;\n    vec3 tmp2 = deltap-(dot(deltap,va)*va);\n    float B = 2.0*dot(tmp1, tmp2);\n    float C = dot(tmp2,tmp2)-r*r;\n    float det = (B*B) - (4.0*A*C);\n    if(det < 0.0) discard;\n    float sqrtDet = sqrt(det);\n    float posT = (-B+sqrtDet)/(2.0*A);\n    float negT = (-B-sqrtDet)/(2.0*A);\n    float intersectionT = min(posT,negT);\n    vec3 qi = p+v*intersectionT;\n    float dotp1 = dot(va,qi-p1);\n    float dotp2 = dot(va,qi-p2);\n    vec3 norm;\n    if( dotp1 < 0.0 || dotp2 > 0.0) {\n       vec3 cp;\n       if( dotp1 < 0.0) {        cp = p1;\n       } else {\n          cp = p2;\n       }\n       vec3 diff = p-cp;\n       A = dot(v,v);\n       B = dot(diff,v)*2.0;\n       C = dot(diff,diff)-r*r;\n       det = (B*B) - (4.0*C);\n       if(det < 0.0) discard;\n       sqrtDet = sqrt(det);\n       posT = (-B+sqrtDet)/(2.0);\n       negT = (-B-sqrtDet)/(2.0);\n       float t = min(posT,negT);\n       qi = p+v*t;\n       norm = normalize(qi-cp);\n    } else {\n       norm = normalize(qi-(dotp1*va + p1));\n    }\n    vec4 clipPos = projectionMatrix * vec4(qi, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    float depth = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    gl_FragDepthEXT = depth;"
};
$3Dmol.ShaderLib = {
    basic: {
        fragmentShader: "uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nattribute vec3 position;\nattribute vec3 color;\nvarying vec3 vColor;\nvoid main() {\n    vColor = color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            }
        }
    },
    sphereimposter: {
        fragmentShader: "uniform mat4 viewMatrix;\nuniform float opacity;\nuniform mat4 projectionMatrix;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform float uDepth;\nuniform vec3 directionalLightColor[ 1 ];\nvarying vec3 vColor;\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 vLight;\nvarying vec3 center;\nvoid main() {\n    float lensqr = dot(mapping,mapping);\n    float rsqr = rval*rval;\n    if(lensqr > rsqr)\n       discard;\n    float z = sqrt(rsqr-lensqr);\n    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z);\n    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    vec3 norm = normalize(vec3(mapping.x,mapping.y,z));\n    float dotProduct = dot( norm, vLight );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vec3 vLight = directionalLightColor[ 0 ] * directionalLightWeighting;\n    gl_FragColor = vec4(vLight*vColor, opacity*opacity );\n    float fogFactor = smoothstep( fogNear, fogFar, gl_FragDepthEXT/gl_FragCoord.w );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvarying vec2 mapping;\nvarying vec3 vColor;\nvarying float rval;\nvarying vec3 vLight;\nvarying vec3 center;\nvoid main() {\n    vColor = color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    center = mvPosition.xyz;\n    vec4 projPosition = projectionMatrix * mvPosition;\n    vec4 adjust = projectionMatrix* vec4(normal,0.0); adjust.z = 0.0; adjust.w = 0.0;\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vLight = normalize( lDirection.xyz );\n    mapping = normal.xy;\n    rval = abs(normal.x);\n    gl_Position = projPosition+adjust;\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            },
            directionalLightColor: {
                type: "fv",
                value: []
            },
            directionalLightDirection: {
                type: "fv",
                value: []
            }
        }
    },
    lambert: {
        fragmentShader: "uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vLightFront;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n    #ifndef WIREFRAME\n    gl_FragColor.xyz *= vLightFront;\n    #endif\n    gl_FragColor = gl_FragColor * vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvarying vec3 vColor;\nvarying vec3 vLightFront;\nvoid main() {\n    vColor = color;\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vLightFront = vec3( 0.0 );\n    transformedNormal = normalize( transformedNormal );\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n    gl_Position = projectionMatrix * mvPosition;\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            },
            directionalLightColor: {
                type: "fv",
                value: []
            },
            directionalLightDirection: {
                type: "fv",
                value: []
            }
        }
    },
    instanced: {
        fragmentShader: "uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vLightFront;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n    #ifndef WIREFRAME\n    gl_FragColor.xyz *= vLightFront;\n    #endif\n    gl_FragColor = gl_FragColor * vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 offset;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\nvarying vec3 vColor;\nvarying vec3 vLightFront;\nvoid main() {\n    vColor = color;\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position * radius + offset, 1.0 );\n    vLightFront = vec3( 0.0 );\n    transformedNormal = normalize( transformedNormal );\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n    gl_Position = projectionMatrix * mvPosition;\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            },
            directionalLightColor: {
                type: "fv",
                value: []
            },
            directionalLightDirection: {
                type: "fv",
                value: []
            }
        }
    },
    outline: {
        fragmentShader: "uniform float opacity;\nuniform vec3 outlineColor;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvoid main() {\n    gl_FragColor = vec4( outlineColor, 1 );\n}",
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float outlineWidth;\nuniform float outlinePushback;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvoid main() {\n    vec4 norm = modelViewMatrix*vec4(normalize(normal),0.0);\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    mvPosition.xy += norm.xy*outlineWidth;\n    gl_Position = projectionMatrix * mvPosition;\n    mvPosition.z -= outlinePushback;\n    vec4 pushpos = projectionMatrix*mvPosition;\n    gl_Position.z = gl_Position.w*pushpos.z/pushpos.w;\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            outlineColor: {
                type: "c",
                value: new $3Dmol.Color(0, 0, 0)
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            },
            outlineWidth: {
                type: "f",
                value: .1
            },
            outlinePushback: {
                type: "f",
                value: 1
            }
        }
    },
    sphereimposteroutline: {
        fragmentShader: "uniform float opacity;\nuniform vec3 outlineColor;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform mat4 projectionMatrix;\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 center;\nuniform float outlinePushback;\nvoid main() {\n    float lensqr = dot(mapping,mapping);\n    float rsqr = rval*rval;\n    if(lensqr > rsqr)\n       discard;\n    float z = sqrt(rsqr-lensqr);\n    vec3 cameraPos = center+ vec3(mapping.x,mapping.y,z-outlinePushback);\n    vec4 clipPos = projectionMatrix * vec4(cameraPos, 1.0);\n    float ndcDepth = clipPos.z / clipPos.w;\n    gl_FragDepthEXT = ((gl_DepthRange.diff * ndcDepth) + gl_DepthRange.near + gl_DepthRange.far) / 2.0;\n    gl_FragColor = vec4(outlineColor, 1 );\n}",
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float outlineWidth;\nuniform float outlinePushback;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvarying vec2 mapping;\nvarying float rval;\nvarying vec3 center;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    center = mvPosition.xyz;\n    vec4 projPosition = projectionMatrix * mvPosition;\n    vec2 norm = normal.xy + vec2(sign(normal.x)*outlineWidth,sign(normal.y)*outlineWidth);\n    vec4 adjust = projectionMatrix* vec4(norm,normal.z,0.0); adjust.z = 0.0; adjust.w = 0.0;\n    mapping = norm.xy;\n    rval = abs(norm.x);\n    gl_Position = projPosition+adjust;\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            outlineColor: {
                type: "c",
                value: new $3Dmol.Color(0, 0, 0)
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            },
            outlineWidth: {
                type: "f",
                value: .1
            },
            outlinePushback: {
                type: "f",
                value: 1
            }
        }
    },
    stickimposter: {
        fragmentShader: [$3Dmol.ShaderUtils.stickimposterFragmentShader, "    float dotProduct = dot( norm, vLight );\n    vec3 light = vec3( max( dotProduct, 0.0 ) );\n    gl_FragColor = vec4(light*color, opacity*opacity );\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}"].join("\n"),
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\nvarying vec3 vColor;\nvarying vec3 vLight;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\nvoid main() {\n    vColor = color; vColor.z = abs(vColor.z);\n    r = abs(radius);\n    vec4 to = modelViewMatrix*vec4(normal, 1.0);\n    vec4 pt = modelViewMatrix*vec4(position, 1.0);\n    vec4 mvPosition = pt;\n    p1 = pt.xyz; p2 = to.xyz;\n    vec3 norm = to.xyz-pt.xyz;\n    float mult = 1.1;\n    if(length(p1) > length(p2)) {\n       mvPosition = to;\n    }\n    vec3 n = normalize(mvPosition.xyz);\n    if(color.z >= 0.0) {\n       vec3 pnorm = normalize(p1);\n       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);\n       mvPosition.xyz = p1+t*pnorm;\n    } else {\n       vec3 pnorm = normalize(p2);\n       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);\n       mvPosition.xyz = p2+t*pnorm;\n       mult *= -1.0;\n    }\n    vec3 cr = normalize(cross(mvPosition.xyz,norm))*radius;\n    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*radius;\n    mvPosition.xy +=  mult*(cr + doublecr).xy;\n    cposition = mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vLight = normalize( lDirection.xyz )*directionalLightColor[0];\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            },
            directionalLightColor: {
                type: "fv",
                value: []
            },
            directionalLightDirection: {
                type: "fv",
                value: []
            }
        }
    },
    stickimposteroutline: {
        fragmentShader: $3Dmol.ShaderUtils.stickimposterFragmentShader + "gl_FragColor = vec4(color,1.0);}",
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nuniform vec3 outlineColor;\nuniform float outlineWidth;\nuniform float outlinePushback;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute float radius;\nvarying vec3 vColor;\nvarying vec3 vLight;\nvarying vec3 cposition;\nvarying vec3 p1;\nvarying vec3 p2;\nvarying float r;\nvoid main() {\n    vColor = outlineColor;\n    float rad = radius+sign(radius)*outlineWidth;\n    r = abs(rad);\n    vec4 to = modelViewMatrix*vec4(normal, 1.0);\n    vec4 pt = modelViewMatrix*vec4(position, 1.0);\n    to.xyz += normalize(to.xyz)*outlinePushback;\n    pt.xyz += normalize(pt.xyz)*outlinePushback;\n    vec4 mvPosition = pt;\n    p1 = pt.xyz; p2 = to.xyz;\n    vec3 norm = to.xyz-pt.xyz;\n    float mult = 1.1;\n    if(length(p1) > length(p2)) {\n       mvPosition = to;\n    }\n    vec3 n = normalize(mvPosition.xyz);\n    if(color.z >= 0.0) {\n       vec3 pnorm = normalize(p1);\n       float t = dot(mvPosition.xyz-p1,n)/dot(pnorm,n);\n       mvPosition.xyz = p1+t*pnorm;\n    } else {\n       vec3 pnorm = normalize(p2);\n       float t = dot(mvPosition.xyz-p2,n)/dot(pnorm,n);\n       mvPosition.xyz = p2+t*pnorm;\n       mult *= -1.0;\n    }\n    vec3 cr = normalize(cross(mvPosition.xyz,norm))*rad;\n    vec3 doublecr = normalize(cross(mvPosition.xyz,cr))*rad;\n    mvPosition.xy +=  mult*(cr + doublecr).xy;\n    cposition = mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n    vLight = vec3(1.0,1.0,1.0);\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            },
            outlineColor: {
                type: "c",
                value: new $3Dmol.Color(0, 0, 0)
            },
            outlineWidth: {
                type: "f",
                value: .1
            },
            outlinePushback: {
                type: "f",
                value: 1
            }
        }
    },
    lambertdouble: {
        fragmentShader: "uniform mat4 viewMatrix;\nuniform float opacity;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec3 vLightFront;\nvarying vec3 vLightBack;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\n    #ifndef WIREFRAME\n    if ( gl_FrontFacing )\n       gl_FragColor.xyz *= vLightFront;\n    else\n       gl_FragColor.xyz *= vLightBack;\n    #endif\n    gl_FragColor = gl_FragColor * vec4( vColor, opacity );\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}",
        vertexShader: "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 directionalLightColor[ 1 ];\nuniform vec3 directionalLightDirection[ 1 ];\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nvarying vec3 vColor;\nvarying vec3 vLightFront;\nvarying vec3 vLightBack;\nvoid main() {\n    vColor = color;\n    vec3 objectNormal = normal;\n    vec3 transformedNormal = normalMatrix * objectNormal;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vLightFront = vec3( 0.0 );\n    vLightBack = vec3( 0.0 );\n    transformedNormal = normalize( transformedNormal );\n    vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\n    vec3 dirVector = normalize( lDirection.xyz );\n    float dotProduct = dot( transformedNormal, dirVector );\n    vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n    vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n    vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;\n    vLightBack += directionalLightColor[ 0 ] * directionalLightWeightingBack;\n    gl_Position = projectionMatrix * mvPosition;\n}",
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            },
            fogColor: {
                type: "c",
                value: new $3Dmol.Color(1, 1, 1)
            },
            fogNear: {
                type: "f",
                value: 1
            },
            fogFar: {
                type: "f",
                value: 2E3
            },
            directionalLightColor: {
                type: "fv",
                value: []
            },
            directionalLightDirection: {
                type: "fv",
                value: []
            }
        }
    },
    sprite: {
        fragmentShader: "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\n    vec4 texture = texture2D(map, vUV);\n    if (texture.a < alphaTest) discard;\n    gl_FragColor = vec4(color * texture.xyz, texture.a * opacity);\n    if (fogType > 0) {\n        float depth = gl_FragCoord.z / gl_FragCoord.w;\n        float fogFactor = 0.0;\n        if (fogType == 1) {\n            fogFactor = smoothstep(fogNear, fogFar, depth);\n        }\n        else {\n            const float LOG2 = 1.442695;\n            float fogFactor = exp2(- fogDensity * fogDensity * depth * depth * LOG2);\n            fogFactor = 1.0 - clamp(fogFactor, 0.0, 1.0);\n        }\n        gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);\n    }\n}",
        vertexShader: "uniform int useScreenCoordinates;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\n    vUV = uvOffset + uv * uvScale;\n    vec2 alignedPosition = position + alignment;\n    vec2 rotatedPosition;\n    rotatedPosition.x = ( cos(rotation) * alignedPosition.x - sin(rotation) * alignedPosition.y ) * scale.x;\n    rotatedPosition.y = ( sin(rotation) * alignedPosition.x + cos(rotation) * alignedPosition.y ) * scale.y;\n    vec4 finalPosition;\n    if(useScreenCoordinates != 0) {\n        finalPosition = vec4(screenPosition.xy + rotatedPosition, screenPosition.z, 1.0);\n    }\n    else {\n        finalPosition = projectionMatrix * modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); finalPosition /= finalPosition.w;\n        finalPosition.xy += rotatedPosition; \n    }\n    gl_Position = finalPosition;\n}",
        uniforms: {}
    }
};
"undefined" === typeof console && (console = {
    log: function() {}
});
$3Dmol.ProteinSurface = function() {
    var b = 0,
        c = 0,
        d = 0,
        h = 2,
        f = 0,
        w = 0,
        t = 0,
        x = 0,
        q = null,
        D = null,
        y = null,
        z = 0,
        m = 0,
        e = 0,
        l = 0,
        u = 0,
        E = 0,
        N = {
            H: 1.2,
            Li: 1.82,
            Na: 2.27,
            K: 2.75,
            C: 1.7,
            N: 1.55,
            O: 1.52,
            F: 1.47,
            P: 1.8,
            S: 1.8,
            CL: 1.75,
            BR: 1.85,
            SE: 1.9,
            ZN: 1.39,
            CU: 1.4,
            NI: 1.63,
            X: 2
        },
        s = function(b) {
            return b.elem && "undefined" != typeof N[b.elem] ? b.elem : "X"
        },
        g = {},
        M = {},
        p, B, A = [new Int32Array([1, 0, 0]), new Int32Array([-1, 0, 0]), new Int32Array([0, 1, 0]), new Int32Array([0, -1, 0]), new Int32Array([0, 0, 1]), new Int32Array([0, 0, -1]), new Int32Array([1, 1, 0]), new Int32Array([1, -1, 0]), new Int32Array([-1, 1, 0]), new Int32Array([-1, -1, 0]), new Int32Array([1, 0, 1]), new Int32Array([1, 0, -1]), new Int32Array([-1, 0, 1]), new Int32Array([-1, 0, -1]), new Int32Array([0, 1, 1]), new Int32Array([0, 1, -1]), new Int32Array([0, -1, 1]), new Int32Array([0, -1, -1]), new Int32Array([1, 1, 1]), new Int32Array([1, 1, -1]), new Int32Array([1, -1, 1]), new Int32Array([-1, 1, 1]), new Int32Array([1, -1, -1]), new Int32Array([-1, -1, 1]), new Int32Array([-1, 1, -1]), new Int32Array([-1, -1, -1])];
    this.getFacesAndVertices = function(e) {
        var m = {},
            F, g;
        F = 0;
        for (g = e.length; F < g; F++) m[e[F]] = !0;
        e = B;
        F = 0;
        for (g = e.length; F < g; F++) e[F].x = e[F].x / h - b, e[F].y = e[F].y / h - c, e[F].z = e[F].z / h - d;
        var l = [];
        F = 0;
        for (g = p.length; F < g; F += 3) {
            var u = p[F],
                s = p[F + 1],
                t = p[F + 2],
                E = e[s].atomid,
                z = e[t].atomid,
                f = e[u].atomid;
            E < f && (f = E);
            z < f && (f = z);
            m[f] && u !== s && s !== t && u !== t && (l.push(u), l.push(s), l.push(t))
        }
        y = D = q = null;
        return {
            vertices: e,
            faces: l
        }
    };
    this.initparm = function(g, s, F) {
        1E6 < F && (h = 1);
        F = 1 / h * 5.5;
        z = g[0][0];
        l = g[1][0];
        m = g[0][1];
        u = g[1][1];
        e = g[0][2];
        E = g[1][2];
        s ? (z -= 1.4 + F, m -= 1.4 + F, e -= 1.4 + F,
            l += 1.4 + F, u += 1.4 + F, E += 1.4 + F) : (z -= F, m -= F, e -= F, l += F, u += F, E += F);
        z = Math.floor(z * h) / h;
        m = Math.floor(m * h) / h;
        e = Math.floor(e * h) / h;
        l = Math.ceil(l * h) / h;
        u = Math.ceil(u * h) / h;
        E = Math.ceil(E * h) / h;
        b = -z;
        c = -m;
        d = -e;
        t = Math.ceil(h * (l - z)) + 1;
        w = Math.ceil(h * (u - m)) + 1;
        f = Math.ceil(h * (E - e)) + 1;
        this.boundingatom(s);
        x = 1.4 * h;
        q = new Uint8Array(t * w * f);
        D = new Float64Array(t * w * f);
        y = new Int32Array(t * w * f)
    };
    this.boundingatom = function(b) {
        var c = [],
            e, d;
        flagradius = b;
        for (var m in N)
            if (N.hasOwnProperty(m))
                for (d = N[m], c[m] = b ? (d + 1.4) * h + .5 : d * h + .5, d = c[m] *
                    c[m], M[m] = Math.floor(c[m]) + 1, g[m] = new Int32Array(M[m] * M[m]), j = indx = 0; j < M[m]; j++)
                    for (k = 0; k < M[m]; k++) e = j * j + k * k, e > d ? g[m][indx] = -1 : (e = Math.sqrt(d - e), g[m][indx] = Math.floor(e)), indx++
    };
    this.fillvoxels = function(b, c) {
        var e, d;
        e = 0;
        for (d = q.length; e < d; e++) q[e] = 0, D[e] = -1, y[e] = -1;
        for (e in c) d = b[c[e]], void 0 !== d && this.fillAtom(d, b);
        e = 0;
        for (d = q.length; e < d; e++) q[e] & 1 && (q[e] |= 2)
    };
    this.fillAtom = function(e, m) {
        var l, u, C, p, E, z, B, A, x, N, D, K, Y, X, U, T, G;
        l = Math.floor(.5 + h * (e.x + b));
        u = Math.floor(.5 + h * (e.y + c));
        C = Math.floor(.5 +
            h * (e.z + d));
        var ba = s(e),
            aa = 0,
            ga = w * f;
        N = 0;
        for (G = M[ba]; N < G; N++)
            for (D = 0; D < G; D++) {
                if (-1 != g[ba][aa])
                    for (X = -1; 2 > X; X++)
                        for (U = -1; 2 > U; U++)
                            for (T = -1; 2 > T; T++)
                                if (0 !== X && 0 !== U && 0 !== T)
                                    for (B = X * N, x = T * D, K = 0; K <= g[ba][aa]; K++) A = K * U, p = l + B, E = u + A, Y = C + x, 0 > p || 0 > E || 0 > Y || p >= t || E >= w || Y >= f || (Y = p * ga + E * f + Y, q[Y] & 1 ? (z = m[y[Y]], z.serial != e.serial && (p = l + B - Math.floor(.5 + h * (z.x + b)), E = u + A - Math.floor(.5 + h * (z.y + c)), z = C + x - Math.floor(.5 + h * (z.z + d)), B * B + A * A + x * x < p * p + E * E + z * z && (y[Y] = e.serial))) : (q[Y] |= 1, y[Y] = e.serial));
                aa++
            }
    };
    this.fillvoxelswaals =
        function(b, c) {
            var e, d;
            e = 0;
            for (d = q.length; e < d; e++) q[e] &= -3;
            for (e in c) d = b[c[e]], void 0 !== d && this.fillAtomWaals(d, b)
        };
    this.fillAtomWaals = function(e, m) {
        var l, u, C, p, E, z, B = 0,
            A, x, N, D, K, Y, X, U, T, G, ba;
        l = Math.floor(.5 + h * (e.x + b));
        u = Math.floor(.5 + h * (e.y + c));
        C = Math.floor(.5 + h * (e.z + d));
        var aa = s(e),
            ga = w * f;
        K = 0;
        for (ba = M[aa]; K < ba; K++)
            for (Y = 0; Y < ba; Y++) {
                if (-1 != g[aa][B])
                    for (U = -1; 2 > U; U++)
                        for (T = -1; 2 > T; T++)
                            for (G = -1; 2 > G; G++)
                                if (0 !== U && 0 !== T && 0 !== G)
                                    for (A = U * K, N = G * Y, X = 0; X <= g[aa][B]; X++) x = X * T, p = l + A, E = u + x, D = C + N, 0 > p || 0 > E || 0 > D ||
                                        p >= t || E >= w || D >= f || (D = p * ga + E * f + D, q[D] & 2 ? (z = m[y[D]], z.serial != e.serial && (p = l + A - Math.floor(.5 + h * (z.x + b)), E = u + x - Math.floor(.5 + h * (z.y + c)), z = C + N - Math.floor(.5 + h * (z.z + d)), A * A + x * x + N * N < p * p + E * E + z * z && (y[D] = e.serial))) : (q[D] |= 2, y[D] = e.serial));
                B++
            }
    };
    this.buildboundary = function() {
        var b = w * f;
        for (i = 0; i < t; i++)
            for (j = 0; j < f; j++)
                for (k = 0; k < w; k++) {
                    var c = i * b + k * f + j;
                    if (q[c] & 1)
                        for (var e = 0; 26 > e;) {
                            var d = i + A[e][0],
                                m = j + A[e][2],
                                g = k + A[e][1];
                            if (-1 < d && d < t && -1 < g && g < w && -1 < m && m < f && !(q[d * b + g * f + m] & 1)) {
                                q[c] |= 4;
                                break
                            } else e++
                        }
                }
    };
    var K = function(b,
        c, e) {
        var d = new Int32Array(b * c * e * 3);
        this.set = function(b, m, g, l) {
            b = 3 * ((b * c + m) * e + g);
            d[b] = l.ix;
            d[b + 1] = l.iy;
            d[b + 2] = l.iz
        };
        this.get = function(b, m, g) {
            b = 3 * ((b * c + m) * e + g);
            return {
                ix: d[b],
                iy: d[b + 1],
                iz: d[b + 2]
            }
        }
    };
    this.fastdistancemap = function() {
        var b, c, e, d = new K(t, w, f),
            m = w * f,
            g = x * x,
            l = [];
        e = [];
        var u;
        for (b = 0; b < t; b++)
            for (c = 0; c < w; c++)
                for (e = 0; e < f; e++)
                    if (u = b * m + c * f + e, q[u] &= -3, q[u] & 1 && q[u] & 4) {
                        var p = {
                            ix: b,
                            iy: c,
                            iz: e
                        };
                        d.set(b, c, e, p);
                        l.push(p);
                        D[u] = 0;
                        q[u] |= 2;
                        q[u] &= -5
                    }
        do
            for (e = this.fastoneshell(l, d), l = [], b = 0, c = e.length; b < c; b++) u =
                m * e[b].ix + f * e[b].iy + e[b].iz, q[u] &= -5, D[u] <= 1.0404 * g && l.push({
                    ix: e[b].ix,
                    iy: e[b].iy,
                    iz: e[b].iz
                }); while (0 !== l.length);
        b = h - .5;
        0 > b && (b = 0);
        g -= .5 / (.1 + b);
        for (b = 0; b < t; b++)
            for (c = 0; c < w; c++)
                for (e = 0; e < f; e++) u = b * m + c * f + e, q[u] &= -5, q[u] & 1 && (!(q[u] & 2) || q[u] & 2 && D[u] >= g) && (q[u] |= 4)
    };
    this.fastoneshell = function(b, c) {
        var e, d, m, g, l, u, p, s, z, E, y, B = [];
        if (0 === b.length) return B;
        tnv = {
            ix: -1,
            iy: -1,
            iz: -1
        };
        var x = w * f;
        p = 0;
        for (z = b.length; p < z; p++)
            for (e = b[p].ix, d = b[p].iy, m = b[p].iz, E = c.get(e, d, m), s = 0; 6 > s; s++) tnv.ix = e + A[s][0], tnv.iy = d +
                A[s][1], tnv.iz = m + A[s][2], tnv.ix < t && -1 < tnv.ix && tnv.iy < w && -1 < tnv.iy && tnv.iz < f && -1 < tnv.iz && (y = tnv.ix * x + f * tnv.iy + tnv.iz, q[y] & 1 && !(q[y] & 2) ? (c.set(tnv.ix, tnv.iy, m + A[s][2], E), g = tnv.ix - E.ix, l = tnv.iy - E.iy, u = tnv.iz - E.iz, g = g * g + l * l + u * u, D[y] = g, q[y] |= 2, q[y] |= 4, B.push({
                    ix: tnv.ix,
                    iy: tnv.iy,
                    iz: tnv.iz
                })) : q[y] & 1 && q[y] & 2 && (g = tnv.ix - E.ix, l = tnv.iy - E.iy, u = tnv.iz - E.iz, g = g * g + l * l + u * u, g < D[y] && (c.set(tnv.ix, tnv.iy, tnv.iz, E), D[y] = g, q[y] & 4 || (q[y] |= 4, B.push({
                    ix: tnv.ix,
                    iy: tnv.iy,
                    iz: tnv.iz
                })))));
        p = 0;
        for (z = b.length; p < z; p++)
            for (e =
                b[p].ix, d = b[p].iy, m = b[p].iz, E = c.get(e, d, m), s = 6; 18 > s; s++) tnv.ix = e + A[s][0], tnv.iy = d + A[s][1], tnv.iz = m + A[s][2], tnv.ix < t && -1 < tnv.ix && tnv.iy < w && -1 < tnv.iy && tnv.iz < f && -1 < tnv.iz && (y = tnv.ix * x + f * tnv.iy + tnv.iz, q[y] & 1 && !(q[y] & 2) ? (c.set(tnv.ix, tnv.iy, m + A[s][2], E), g = tnv.ix - E.ix, l = tnv.iy - E.iy, u = tnv.iz - E.iz, g = g * g + l * l + u * u, D[y] = g, q[y] |= 2, q[y] |= 4, B.push({
                ix: tnv.ix,
                iy: tnv.iy,
                iz: tnv.iz
            })) : q[y] & 1 && q[y] & 2 && (g = tnv.ix - E.ix, l = tnv.iy - E.iy, u = tnv.iz - E.iz, g = g * g + l * l + u * u, g < D[y] && (c.set(tnv.ix, tnv.iy, tnv.iz, E), D[y] = g, q[y] & 4 || (q[y] |=
                4, B.push({
                    ix: tnv.ix,
                    iy: tnv.iy,
                    iz: tnv.iz
                })))));
        p = 0;
        for (z = b.length; p < z; p++)
            for (e = b[p].ix, d = b[p].iy, m = b[p].iz, E = c.get(e, d, m), s = 18; 26 > s; s++) tnv.ix = e + A[s][0], tnv.iy = d + A[s][1], tnv.iz = m + A[s][2], tnv.ix < t && -1 < tnv.ix && tnv.iy < w && -1 < tnv.iy && tnv.iz < f && -1 < tnv.iz && (y = tnv.ix * x + f * tnv.iy + tnv.iz, q[y] & 1 && !(q[y] & 2) ? (c.set(tnv.ix, tnv.iy, m + A[s][2], E), g = tnv.ix - E.ix, l = tnv.iy - E.iy, u = tnv.iz - E.iz, g = g * g + l * l + u * u, D[y] = g, q[y] |= 2, q[y] |= 4, B.push({
                ix: tnv.ix,
                iy: tnv.iy,
                iz: tnv.iz
            })) : q[y] & 1 && q[y] & 2 && (g = tnv.ix - E.ix, l = tnv.iy - E.iy, u = tnv.iz -
                E.iz, g = g * g + l * l + u * u, g < D[y] && (c.set(tnv.ix, tnv.iy, tnv.iz, E), D[y] = g, q[y] & 4 || (q[y] |= 4, B.push({
                    ix: tnv.ix,
                    iy: tnv.iy,
                    iz: tnv.iz
                })))));
        return B
    };
    this.marchingcubeinit = function(b) {
        for (var c = 0, e = q.length; c < e; c++) 1 == b ? q[c] &= -5 : 4 == b ? (q[c] &= -3, q[c] & 4 && (q[c] |= 2), q[c] &= -5) : 2 == b ? q[c] & 4 && q[c] & 2 ? q[c] &= -5 : q[c] & 4 && !(q[c] & 2) && (q[c] |= 2) : 3 == b && (q[c] &= -5)
    };
    this.marchingcube = function(b) {
        this.marchingcubeinit(b);
        B = [];
        p = [];
        $3Dmol.MarchingCube.march(q, B, p, {
            smooth: 1,
            nX: t,
            nY: w,
            nZ: f
        });
        b = w * f;
        for (var c = 0, e = B.length; c < e; c++) B[c].atomid =
            y[B[c].x * b + f * B[c].y + B[c].z];
        $3Dmol.MarchingCube.laplacianSmooth(1, B, p)
    }
};
$(document).ready(function() {
    void 0 !== $(".viewer_3Dmoljs")[0] && ($3Dmol.autoinit = !0);
    if ($3Dmol.autoinit) {
        $3Dmol.viewers = {};
        var b = 0;
        $(".viewer_3Dmoljs").each(function() {
            var c = $(this),
                d = null;
            "static" == c.css("position") && c.css("position", "relative");
            var h = "function" === typeof window[c.data("callback")] ? window[c.data("callback")] : null,
                f = null;
            c.data("pdb") ? (d = "http://files.rcsb.org/view/" + c.data("pdb") + ".pdb", f = "pdb") : c.data("cid") ? (f = "sdf", d = "http://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/" + c.data("cid") +
                "/SDF?record_type=3d") : c.data("href") && (d = c.data("href"));
            var w = {};
            c.data("options") && (w = $3Dmol.specStringToObject(c.data("options")));
            var t = $3Dmol.CC.color(c.data("backgroundcolor")),
                x = {
                    line: {}
                };
            c.data("style") && (x = $3Dmol.specStringToObject(c.data("style")));
            var q = {};
            c.data("select") && (q = $3Dmol.specStringToObject(c.data("select")));
            var D = [],
                y = [],
                z = [],
                m = c.data(),
                e = /style(.+)/,
                l = /surface(.*)/,
                u = /labelres(.*)/,
                E = [],
                N;
            for (N in m) m.hasOwnProperty(N) && E.push(N);
            E.sort();
            for (var s = 0; s < E.length; s++) {
                N = E[s];
                var g = e.exec(N);
                if (g) {
                    var g = "select" + g[1],
                        g = $3Dmol.specStringToObject(m[g]),
                        M = $3Dmol.specStringToObject(m[N]);
                    D.push([g, M])
                }
                if (g = l.exec(N)) g = "select" + g[1], g = $3Dmol.specStringToObject(m[g]), M = $3Dmol.specStringToObject(m[N]), y.push([g, M]);
                if (g = u.exec(N)) g = "select" + g[1], g = $3Dmol.specStringToObject(m[g]), M = $3Dmol.specStringToObject(m[N]), z.push([g, M])
            }
            var p = function(b) {
                    b.setStyle(q, x);
                    for (var c = 0; c < D.length; c++) {
                        var e = D[c][0] || {},
                            d = D[c][1] || {
                                line: {}
                            };
                        b.setStyle(e, d)
                    }
                    for (c = 0; c < y.length; c++) e = y[c][0] || {}, d = y[c][1] || {}, b.addSurface($3Dmol.SurfaceType.VDW, d, e, e);
                    for (c = 0; c < z.length; c++) e = z[c][0] || {}, d = z[c][1] || {}, b.addResLabels(e, d);
                    b.zoomTo();
                    b.render()
                },
                B = null;
            try {
                B = $3Dmol.viewers[this.id || b++] = $3Dmol.createViewer(c, {
                    defaultcolors: $3Dmol.rasmolElementColors
                }), B.setBackgroundColor(t)
            } catch (A) {
                window.location = "http://get.webgl.org"
            }
            d ? ((f = c.data("type") || c.data("datatype") || f) || (f = d.substr(d.lastIndexOf(".") + 1)), $.get(d, function(b) {
                B.addModel(b, f, w);
                p(B);
                h && h(B)
            }, "text")) : (c.data("element") && (d = $("#" +
                c.data("element")).val() || "", f = c.data("type") || c.data("datatype"), f || (console.log("Warning: No type specified for embedded viewer with moldata from " + c.data("element") + "\n assuming type 'pdb'"), f = "pdb"), B.addModel(d, f, w)), p(B), h && h(B))
        })
    }
});
(function() {
    $3Dmol.elementColors.greenCarbon.C = 65280;
    $3Dmol.elementColors.cyanCarbon.C = 65535;
    $3Dmol.elementColors.magentaCarbon.C = 16711935;
    $3Dmol.elementColors.yellowCarbon.C = 16776960;
    $3Dmol.elementColors.whiteCarbon.C = 16777215;
    $3Dmol.elementColors.orangeCarbon.C = 16737792;
    $3Dmol.elementColors.purpleCarbon.C = 8388736;
    $3Dmol.elementColors.blueCarbon.C = 255
});
$3Dmol.CC = {
    cache: {
        0: new $3Dmol.Color(0)
    },
    color: function color_(c) {
        if (!c) return this.cache[0];
        if ("undefined" !== typeof this.cache[c]) return this.cache[c];
        if (c && c.constructor === Array) return c.map(color_, this);
        c = this.getHex(c);
        if ("number" === typeof c) {
            var d = new $3Dmol.Color(c);
            return this.cache[c] = d
        }
        return c
    },
    colorTab: {
        white: 16777215,
        silver: 12632256,
        gray: 8421504,
        grey: 8421504,
        black: 0,
        red: 16711680,
        maroon: 8388608,
        yellow: 16776960,
        orange: 16737792,
        olive: 8421376,
        lime: 65280,
        green: 32768,
        aqua: 65535,
        cyan: 65535,
        teal: 32896,
        blue: 255,
        navy: 128,
        fuchsia: 16711935,
        magenta: 16711935,
        purple: 8388736
    },
    getHex: function(b) {
        return isNaN(parseInt(b)) ? "string" === typeof b ? (b = b.trim(), 4 == b.length && "#" == b[0] && (b = "#" + b[1] + b[1] + b[2] + b[2] + b[3] + b[3]), 7 == b.length && "#" == b[0] ? parseInt(b.substring(1), 16) : this.colorTab[b.toLowerCase()] || 0) : b : parseInt(b)
    }
};
$3Dmol.CC = $3Dmol.CC;
$3Dmol.CC.color = $3Dmol.CC.color;
$3Dmol.ssColors = $3Dmol.ssColors || {};
$3Dmol.ssColors.pyMol = {
    h: 16711680,
    s: 16776960,
    c: 65280
};
$3Dmol.ssColors.Jmol = {
    h: 16711808,
    s: 16762880,
    c: 16777215
};
$3Dmol.elementColors = $3Dmol.elementColors || {};
$3Dmol.elementColors.defaultColor = 16716947;
$3Dmol.elementColors.Jmol = {
    H: 16777215,
    He: 14286847,
    HE: 14286847,
    Li: 13402367,
    LI: 13402367,
    B: 16758197,
    C: 9474192,
    N: 3166456,
    O: 16715021,
    F: 9494608,
    Na: 11230450,
    NA: 11230450,
    Mg: 9109248,
    MG: 9109248,
    Al: 12560038,
    AL: 12560038,
    Si: 1578E4,
    SI: 1578E4,
    P: 16744448,
    S: 16777008,
    Cl: 2093087,
    CL: 2093087,
    Ca: 4062976,
    CA: 4062976,
    Ti: 12567239,
    TI: 12567239,
    Cr: 9083335,
    CR: 9083335,
    Mn: 10255047,
    MN: 10255047,
    Fe: 14706227,
    FE: 14706227,
    Ni: 5296208,
    NI: 5296208,
    Cu: 13140019,
    CU: 13140019,
    Zn: 8224944,
    ZN: 8224944,
    Br: 10889513,
    BR: 10889513,
    Ag: 12632256,
    AG: 12632256,
    I: 9699476,
    Ba: 51456,
    BA: 51456,
    Au: 16765219,
    AU: 16765219
};
$3Dmol.elementColors.rasmol = {
    H: 16777215,
    He: 16761035,
    HE: 16761035,
    Li: 11674146,
    LI: 11674146,
    B: 65280,
    C: 13158600,
    N: 9408511,
    O: 15728640,
    F: 14329120,
    Na: 255,
    NA: 255,
    Mg: 2263842,
    MG: 2263842,
    Al: 8421520,
    AL: 8421520,
    Si: 14329120,
    SI: 14329120,
    P: 16753920,
    S: 16762930,
    Cl: 65280,
    CL: 65280,
    Ca: 8421520,
    CA: 8421520,
    Ti: 8421520,
    TI: 8421520,
    Cr: 8421520,
    CR: 8421520,
    Mn: 8421520,
    MN: 8421520,
    Fe: 16753920,
    FE: 16753920,
    Ni: 10824234,
    NI: 10824234,
    Cu: 10824234,
    CU: 10824234,
    Zn: 10824234,
    ZN: 10824234,
    Br: 10824234,
    BR: 10824234,
    Ag: 8421520,
    AG: 8421520,
    I: 10494192,
    Ba: 16753920,
    BA: 16753920,
    Au: 14329120,
    AU: 14329120
};
$3Dmol.elementColors.defaultColors = $3Dmol.elementColors.rasmol;
$3Dmol.elementColors.greenCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.greenCarbon.C = 65280;
$3Dmol.elementColors.cyanCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.cyanCarbon.C = 65535;
$3Dmol.elementColors.magentaCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.magentaCarbon.C = 16711935;
$3Dmol.elementColors.yellowCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.yellowCarbon.C = 16776960;
$3Dmol.elementColors.whiteCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.whiteCarbon.C = 16777215;
$3Dmol.elementColors.orangeCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.orangeCarbon.C = 16737792;
$3Dmol.elementColors.purpleCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.purpleCarbon.C = 8388736;
$3Dmol.elementColors.blueCarbon = $.extend({}, $3Dmol.elementColors.defaultColors);
$3Dmol.elementColors.blueCarbon.C = 255;
$3Dmol.residues = {};
$3Dmol.residues.amino = {
    Ala: 13158600,
    Arg: 1334015,
    Asn: 56540,
    Asp: 15075850,
    Cys: 15132160,
    Gln: 56540,
    Glu: 15075850,
    Gly: 15461355,
    His: 8553170,
    Ile: 1016335,
    Leu: 1016335,
    Lys: 1334015,
    Met: 15132160,
    Phe: 3289770,
    Pro: 14456450,
    Ser: 16422400,
    Thr: 16422400,
    Trp: 11819700,
    Tyr: 3289770,
    Val: 1016335,
    Asx: 16738740,
    Glx: 16738740,
    other: 12492910
};
$3Dmol.residues.shapely = {
    Ala: 9240460,
    Arg: 124,
    Asn: 16743536,
    Asp: 10485826,
    Cys: 16777072,
    Gln: 16731212,
    Glu: 6684672,
    Gly: 16777215,
    His: 7368959,
    Ile: 19456,
    Leu: 4546117,
    Lys: 4671416,
    Met: 12099650,
    Phe: 5459026,
    Pro: 5395026,
    Ser: 16740418,
    Thr: 12078080,
    Trp: 5195264,
    Tyr: 9203788,
    Val: 16747775,
    Asx: 16711935,
    Glx: 16711935,
    other: 16711935
};
$3Dmol.residues.nucleic = {
    A: 10526975,
    G: 16740464,
    I: 8454143,
    C: 16747595,
    T: 10551200,
    U: 16744576
};
$3Dmol.chains = {};
$3Dmol.chains.atom = {
    A: 12636415,
    B: 11599792,
    C: 16761032,
    D: 16777088,
    E: 16761087,
    F: 11596016,
    G: 16765040,
    H: 15761536,
    I: 16113331,
    J: 49151,
    K: 13458524,
    L: 6737322,
    M: 10145074,
    N: 15631086,
    O: 52945,
    P: 65407,
    Q: 3978097,
    R: 139,
    S: 12433259,
    T: 25600,
    U: 8388608,
    V: 8421376,
    W: 8388736,
    X: 32896,
    Y: 12092939,
    Z: 11674146
};
$3Dmol.chains.hetatm = {
    A: 9478351,
    B: 8441752,
    C: 13602992,
    D: 13619056,
    E: 13603023,
    F: 8437952,
    G: 13607008,
    H: 12603504,
    I: 12955267,
    J: 42959,
    K: 11881548,
    L: 5682578,
    M: 9090346,
    N: 12481214,
    O: 46753,
    P: 53103,
    Q: 3447649,
    R: 187,
    S: 10854235,
    T: 37888,
    U: 11534336,
    V: 11579392,
    W: 11534512,
    X: 45232,
    Y: 15250963,
    Z: 12726834
};
$3Dmol.builtinColorSchemes = {
    ssPyMol: {
        prop: "ss",
        map: $3Dmol.ssColors.pyMol
    },
    ssJmol: {
        prop: "ss",
        map: $3Dmol.ssColors.Jmol
    },
    Jmol: {
        prop: "elem",
        map: $3Dmol.elementColors.Jmol
    },
    "default": {
        prop: "elem",
        map: $3Dmol.elementColors.defaultColors
    },
    greenCarbon: {
        prop: "elem",
        map: $3Dmol.elementColors.greenCarbon
    },
    cyanCarbon: {
        prop: "elem",
        map: $3Dmol.elementColors.cyanCarbon
    },
    magentaCarbon: {
        prop: "elem",
        map: $3Dmol.elementColors.magentaCarbon
    },
    yellowCarbon: {
        prop: "elem",
        map: $3Dmol.elementColors.yellowCarbon
    },
    whiteCarbon: {
        prop: "elem",
        map: $3Dmol.elementColors.whiteCarbon
    },
    orangeCarbon: {
        prop: "elem",
        map: $3Dmol.elementColors.orangeCarbon
    },
    purpleCarbon: {
        prop: "elem",
        map: $3Dmol.elementColors.purpleCarbon
    },
    blueCarbon: {
        prop: "elem",
        map: $3Dmol.elementColors.blueCarbon
    },
    amino: {
        prop: "resAmino",
        map: $3Dmol.residues.amino
    },
    shapely: {
        prop: "resShapely",
        map: $3Dmol.residues.shapely
    },
    nucleic: {
        prop: "resNucleic",
        map: $3Dmol.residues.nucleic
    },
    chain: {
        prop: "chain",
        map: $3Dmol.chains.atom
    },
    chainHetatm: {
        prop: "chain",
        map: $3Dmol.chains.hetatm
    }
};
$3Dmol.getColorFromStyle = function(b, c) {
    var d = c.colorscheme;
    "undefined" != typeof $3Dmol.builtinColorSchemes[d] && (d = $3Dmol.builtinColorSchemes[d]);
    var h = b.color;
    "undefined" != typeof c.color && "spectrum" != c.color && (h = c.color);
    if ("undefined" != typeof d)
        if ("undefined" != typeof $3Dmol.builtinColorSchemes[d]) "undefined" != typeof d[b[d.prop]] && (h = d.map[b[d.prop]]);
        else if ("undefined" != typeof $3Dmol.elementColors[d]) d = $3Dmol.elementColors[d], "undefined" != typeof d[b[d.prop]] && (h = d.map[b[d.prop]]);
    else if ("undefined" !=
        typeof d[b[d.prop]]) h = d.map[b[d.prop]];
    else if ("undefined" != typeof d.prop && "undefined" != typeof d.gradient) {
        var f = d.prop,
            w = d.gradient;
        "undefined" != typeof $3Dmol.Gradient.builtinGradients[w] && (w = new $3Dmol.Gradient.builtinGradients[w](d.min, d.max, d.mid));
        d = w.range() || [-1, 1];
        f = $3Dmol.getAtomProperty(b, f);
        null != f && (h = w.valueToHex(f, d))
    } else "undefined" != typeof d.prop && "undefined" != typeof d.map ? (f = d.prop, f = $3Dmol.getAtomProperty(b, f), "undefined" != typeof d.map[f] && (h = d.map[f])) : "undefined" != typeof c.colorscheme[b.elem] ?
        h = c.colorscheme[b.elem] : console.log("Could not interpret colorscheme " + d);
    else "undefined" != typeof c.colorfunc && (h = c.colorfunc(b));
    return $3Dmol.CC.color(h)
};
$3Dmol = $3Dmol || {};
$3Dmol.drawCartoon = function() {
    var b = function(b, c) {
            var d = [],
                u = b,
                u = [];
            u.push(b[0]);
            var y, q, s, g, z, p;
            y = 1;
            for (q = b.length - 1; y < q; y++) g = b[y], z = b[y + 1], g.smoothen ? u.push(new $3Dmol.Vector3((g.x + z.x) / 2, (g.y + z.y) / 2, (g.z + z.z) / 2)) : u.push(g);
            u.push(b[b.length - 1]);
            y = -1;
            for (q = u.length; y <= q - 3; y++)
                if (s = u[-1 === y ? 0 : y], g = u[y + 1], z = u[y + 2], p = u[y === q - 3 ? q - 1 : y + 3], s = (new $3Dmol.Vector3).subVectors(z, s).multiplyScalar(.5), p = (new $3Dmol.Vector3).subVectors(p, g).multiplyScalar(.5), !z.skip)
                    for (var t = 0; t < c; t++) {
                        var f = 1 / c * t,
                            f = new $3Dmol.Vector3(g.x +
                                f * s.x + f * f * (-3 * g.x + 3 * z.x - 2 * s.x - p.x) + f * f * f * (2 * g.x - 2 * z.x + s.x + p.x), g.y + f * s.y + f * f * (-3 * g.y + 3 * z.y - 2 * s.y - p.y) + f * f * f * (2 * g.y - 2 * z.y + s.y + p.y), g.z + f * s.z + f * f * (-3 * g.z + 3 * z.z - 2 * s.z - p.z) + f * f * f * (2 * g.z - 2 * z.z + s.z + p.z)),
                            x = Math.floor((d.length + 2) / c);
                        void 0 !== b[x] && void 0 !== b[x].atom && (f.atom = b[x].atom);
                        d.push(f)
                    }
                d.push(u[u.length - 1]);
            return d
        },
        c = function(b, c, d, u, y, z) {
            var s, g, q, p;
            y = 0;
            for (z = c.length; y < z; y++) {
                p = Math.round(y * (u.length - 1) / z);
                q = $3Dmol.CC.color(u[p]);
                geoGroup = b.updateGeoGroup(2);
                var t = geoGroup.vertexArray,
                    f = geoGroup.colorArray;
                p = geoGroup.faceArray;
                s = geoGroup.vertices;
                g = 3 * s;
                t[g] = c[y].x;
                t[g + 1] = c[y].y;
                t[g + 2] = c[y].z;
                t[g + 3] = d[y].x;
                t[g + 4] = d[y].y;
                t[g + 5] = d[y].z;
                for (t = 0; 6 > t; ++t) f[g + 3 * t] = q.r, f[g + 1 + 3 * t] = q.g, f[g + 2 + 3 * t] = q.b;
                0 < y && (s = [s, s + 1, s - 1, s - 2], g = geoGroup.faceidx, p[g] = s[0], p[g + 1] = s[1], p[g + 2] = s[3], p[g + 3] = s[1], p[g + 4] = s[2], p[g + 5] = s[3], geoGroup.faceidx += 6);
                geoGroup.vertices += 2
            }
        },
        d = function(c, e, d, u, y) {
            0 !== e.length && (y = void 0 === y ? 5 : y, u = new $3Dmol.Geometry, b(e, y), e = new $3Dmol.LineBasicMaterial({
                linewidth: d
            }), e.vertexColors = !0, e = new $3Dmol.Line(u,
                e), e.type = $3Dmol.LineStrip, c.add(e))
        },
        h = function(d, e, l, u, y, z, s) {
            s && "default" !== s || (s = "rectangle");
            if ("edged" === s) {
                var g;
                if (!(2 > e.length)) {
                    var q;
                    q = e[0];
                    e = e[e.length - 1];
                    g = u || axisDIV;
                    q = b(q, g);
                    e = b(e, g);
                    if (y) {
                        g = [];
                        var p, t, f, x, h;
                        s = [
                            [0, 2, -6, -8],
                            [-4, -2, 6, 4],
                            [7, -1, -5, 3],
                            [-3, 5, 1, -7]
                        ];
                        var D, F, w, C, L, O, Q, J, R;
                        O = 0;
                        for (Q = q.length; O < Q; O++) {
                            w = Math.round(O * (l.length - 1) / Q);
                            w = $3Dmol.CC.color(l[w]);
                            g.push(t = q[O]);
                            g.push(t);
                            g.push(f = e[O]);
                            g.push(f);
                            O < Q - 1 && (p = q[O + 1].clone().sub(q[O]), p = e[O].clone().sub(q[O]).cross(p).normalize().multiplyScalar(y));
                            g.push(x = q[O].clone().add(p));
                            g.push(x);
                            g.push(h = e[O].clone().add(p));
                            g.push(h);
                            void 0 !== t.atom && (C = t.atom);
                            z = d.updateGeoGroup(8);
                            J = z.vertexArray;
                            R = z.colorArray;
                            u = z.faceArray;
                            D = z.vertices;
                            F = 3 * D;
                            J[F] = t.x;
                            J[F + 1] = t.y;
                            J[F + 2] = t.z;
                            J[F + 3] = t.x;
                            J[F + 4] = t.y;
                            J[F + 5] = t.z;
                            J[F + 6] = f.x;
                            J[F + 7] = f.y;
                            J[F + 8] = f.z;
                            J[F + 9] = f.x;
                            J[F + 10] = f.y;
                            J[F + 11] = f.z;
                            J[F + 12] = x.x;
                            J[F + 13] = x.y;
                            J[F + 14] = x.z;
                            J[F + 15] = x.x;
                            J[F + 16] = x.y;
                            J[F + 17] = x.z;
                            J[F + 18] = h.x;
                            J[F + 19] = h.y;
                            J[F + 20] = h.z;
                            J[F + 21] = h.x;
                            J[F + 22] = h.y;
                            J[F + 23] = h.z;
                            for (J = 0; 8 > J; ++J) R[F + 3 * J] = w.r, R[F +
                                1 + 3 * J] = w.g, R[F + 2 + 3 * J] = w.b;
                            if (0 < O)
                                for (F = void 0 !== L && void 0 !== C && L.serial !== C.serial, J = 0; 4 > J; J++)
                                    if (R = [D + s[J][0], D + s[J][1], D + s[J][2], D + s[J][3]], f = z.faceidx, u[f] = R[0], u[f + 1] = R[1], u[f + 2] = R[3], u[f + 3] = R[1], u[f + 4] = R[2], u[f + 5] = R[3], z.faceidx += 6, C.clickable || L.clickable) {
                                        h = g[R[3]].clone();
                                        f = g[R[0]].clone();
                                        var S = g[R[2]].clone();
                                        x = g[R[1]].clone();
                                        h.atom = g[R[3]].atom || null;
                                        S.atom = g[R[2]].atom || null;
                                        f.atom = g[R[0]].atom || null;
                                        x.atom = g[R[1]].atom || null;
                                        if (F) {
                                            var V = h.clone().add(f).multiplyScalar(.5),
                                                Z = S.clone().add(x).multiplyScalar(.5),
                                                W = h.clone().add(x).multiplyScalar(.5);
                                            0 === J % 2 ? (L.clickable && (R = new $3Dmol.Triangle(V, W, h), t = new $3Dmol.Triangle(Z, S, W), h = new $3Dmol.Triangle(W, S, h), L.intersectionShape.triangle.push(R), L.intersectionShape.triangle.push(t), L.intersectionShape.triangle.push(h)), C.clickable && (R = new $3Dmol.Triangle(f, x, W), t = new $3Dmol.Triangle(x, Z, W), h = new $3Dmol.Triangle(f, W, V), C.intersectionShape.triangle.push(R), C.intersectionShape.triangle.push(t), C.intersectionShape.triangle.push(h))) : (C.clickable && (R = new $3Dmol.Triangle(V,
                                                W, h), t = new $3Dmol.Triangle(Z, S, W), h = new $3Dmol.Triangle(W, S, h), C.intersectionShape.triangle.push(R), C.intersectionShape.triangle.push(t), C.intersectionShape.triangle.push(h)), L.clickable && (R = new $3Dmol.Triangle(f, x, W), t = new $3Dmol.Triangle(x, Z, W), h = new $3Dmol.Triangle(f, W, V), L.intersectionShape.triangle.push(R), L.intersectionShape.triangle.push(t), L.intersectionShape.triangle.push(h)))
                                        } else C.clickable && (R = new $3Dmol.Triangle(f, x, h), t = new $3Dmol.Triangle(x, S, h), C.intersectionShape.triangle.push(R),
                                            C.intersectionShape.triangle.push(t))
                                    }
                            z.vertices += 8;
                            L = C
                        }
                        l = g.length - 8;
                        z = d.updateGeoGroup(8);
                        J = z.vertexArray;
                        R = z.colorArray;
                        u = z.faceArray;
                        D = z.vertices;
                        F = 3 * D;
                        f = z.faceidx;
                        for (O = 0; 4 > O; O++) g.push(g[2 * O]), g.push(g[l + 2 * O]), y = g[2 * O], d = g[l + 2 * O], J[F + 6 * O] = y.x, J[F + 1 + 6 * O] = y.y, J[F + 2 + 6 * O] = y.z, J[F + 3 + 6 * O] = d.x, J[F + 4 + 6 * O] = d.y, J[F + 5 + 6 * O] = d.z, R[F + 6 * O] = w.r, R[F + 1 + 6 * O] = w.g, R[F + 2 + 6 * O] = w.b, R[F + 3 + 6 * O] = w.r, R[F + 4 + 6 * O] = w.g, R[F + 5 + 6 * O] = w.b;
                        R = [D, D + 2, D + 6, D + 4];
                        t = [D + 1, D + 5, D + 7, D + 3];
                        u[f] = R[0];
                        u[f + 1] = R[1];
                        u[f + 2] = R[3];
                        u[f + 3] = R[1];
                        u[f + 4] =
                            R[2];
                        u[f + 5] = R[3];
                        u[f + 6] = t[0];
                        u[f + 7] = t[1];
                        u[f + 8] = t[3];
                        u[f + 9] = t[1];
                        u[f + 10] = t[2];
                        u[f + 11] = t[3];
                        z.faceidx += 12;
                        z.vertices += 8
                    } else c(d, q, e, l, g, z)
                }
            } else if ("rectangle" === s || "oval" === s || "parabola" === s)
                if (w = s, C = e.length, !(2 > C || 2 > e[0].length)) {
                    u = u || axisDIV;
                    for (L = 0; L < C; L++) e[L] = b(e[L], u);
                    p = e[0].length;
                    if (y) {
                        z = [];
                        u = [];
                        s = [];
                        for (J = 0; J < C; J++) z.push(.25 + 1.5 * Math.sqrt((C - 1) * J - Math.pow(J, 2)) / (C - 1)), u.push(.5), s.push(2 * (Math.pow(J / C, 2) - J / C) + .6);
                        Q = [];
                        for (J = 0; J < 2 * C - 1; J++) Q[J] = [J, J + 1, J + 1 - 2 * C, J - 2 * C];
                        Q[2 * C - 1] = [J, J + 1 - 2 * C,
                            J + 1 - 4 * C, J - 2 * C
                        ];
                        d = d.updateGeoGroup(2 * C * p);
                        for (L = 0; L < p; L++) {
                            J = Math.round(L * (l.length - 1) / p);
                            t = $3Dmol.CC.color(l[J]);
                            F = g;
                            R = O;
                            g = [];
                            O = [];
                            f = [];
                            void 0 !== e[0][L].atom && (D = e[0][L].atom, "oval" === w ? q = z : "rectangle" === w ? q = u : "parabola" === w && (q = s));
                            q || (q = u);
                            for (J = 0; J < C; J++) x = L < p - 1 ? e[J][L + 1].clone().sub(e[J][L]) : e[J][L - 1].clone().sub(e[J][L]).negate(), h = J < C - 1 ? e[J + 1][L].clone().sub(e[J][L]) : e[J - 1][L].clone().sub(e[J][L]).negate(), f[J] = h.cross(x).normalize().multiplyScalar(y * q[J]);
                            for (J = 0; J < C; J++) g[J] = e[J][L].clone().add(f[J].clone().negate());
                            for (J = 0; J < C; J++) O[J] = e[J][L].clone().add(f[J]);
                            S = d.vertexArray;
                            V = d.colorArray;
                            x = d.faceArray;
                            f = d.vertices;
                            h = 3 * f;
                            for (J = 0; J < C; J++) S[h + 3 * J + 0] = g[J].x, S[h + 3 * J + 1] = g[J].y, S[h + 3 * J + 2] = g[J].z;
                            for (J = 0; J < C; J++) S[h + 3 * J + 0 + 3 * C] = O[C - 1 - J].x, S[h + 3 * J + 1 + 3 * C] = O[C - 1 - J].y, S[h + 3 * J + 2 + 3 * C] = O[C - 1 - J].z;
                            for (J = 0; J < 2 * C; ++J) V[h + 3 * J + 0] = t.r, V[h + 3 * J + 1] = t.g, V[h + 3 * J + 2] = t.b;
                            if (0 < L) {
                                for (J = 0; J < 2 * C; J++) h = [f + Q[J][0], f + Q[J][1], f + Q[J][2], f + Q[J][3]], t = d.faceidx, x[t] = h[0], x[t + 1] = h[1], x[t + 2] = h[3], x[t + 3] = h[1], x[t + 4] = h[2], x[t + 5] = h[3], d.faceidx +=
                                    6;
                                if (D.clickable)
                                    for (J in t = [], t.push(new $3Dmol.Triangle(F[0], g[0], g[C - 1])), t.push(new $3Dmol.Triangle(F[0], g[C - 1], F[C - 1])), t.push(new $3Dmol.Triangle(F[C - 1], g[C - 1], O[C - 1])), t.push(new $3Dmol.Triangle(F[C - 1], O[C - 1], R[C - 1])), t.push(new $3Dmol.Triangle(O[0], R[0], R[C - 1])), t.push(new $3Dmol.Triangle(O[C - 1], O[0], R[C - 1])), t.push(new $3Dmol.Triangle(g[0], F[0], R[0])), t.push(new $3Dmol.Triangle(O[0], g[0], R[0])), t) D.intersectionShape.triangle.push(t[J])
                            }
                            d.vertices += 2 * C
                        }
                        x = d.faceArray;
                        f = d.vertices;
                        for (L = 0; L <
                            C - 1; L++) h = [L, L + 1, 2 * C - 2 - L, 2 * C - 1 - L], t = d.faceidx, x[t] = h[0], x[t + 1] = h[1], x[t + 2] = h[3], x[t + 3] = h[1], x[t + 4] = h[2], x[t + 5] = h[3], d.faceidx += 6;
                        for (L = 0; L < C - 1; L++) h = [f - 1 - L, f - 2 - L, f - 2 * C + L + 1, f - 2 * C + L], t = d.faceidx, x[t] = h[0], x[t + 1] = h[1], x[t + 2] = h[3], x[t + 3] = h[1], x[t + 4] = h[2], x[t + 5] = h[3], d.faceidx += 6
                    } else c(d, e[0], e[C - 1], l, u, z)
                }
        },
        f = function(b, c) {
            if (b && c && b.chain === c.chain) {
                if (b.reschain === c.reschain && (b.resi === c.resi || b.resi === c.resi - 1)) return !0;
                if (b.resi < c.resi) {
                    var d = b.x - c.x,
                        u = b.y - c.y,
                        y = b.z - c.z;
                    if (16 > d * d + u * u + y * y) return !0
                }
            }
            return !1
        },
        w = function(b, c, d, u, y) {
            null != c && 0 != c.vertices && (y && (c.initTypedArrays(), c.setUpNormals()), y = new $3Dmol.MeshDoubleLambertMaterial, y.vertexColors = $3Dmol.FaceColors, "number" === typeof d && 0 <= d && 1 > d && (y.transparent = !0, y.opacity = d), y.outline = u, c = new $3Dmol.Mesh(c, y), b.add(c))
        },
        t = {
            C: !0,
            CA: !0,
            O: !0,
            P: !0,
            OP2: !0,
            O2P: !0,
            "O5'": !0,
            "O3'": !0,
            "C5'": !0,
            "C2'": !0,
            "O5*": !0,
            "O3*": !0,
            "C5*": !0,
            "C2*": !0,
            N1: !0,
            N3: !0
        },
        x = {
            DA: !0,
            DG: !0,
            A: !0,
            G: !0
        },
        q = {
            DT: !0,
            DC: !0,
            U: !0,
            C: !0,
            T: !0
        },
        D = {
            DA: !0,
            DG: !0,
            A: !0,
            G: !0,
            DT: !0,
            DC: !0,
            U: !0,
            C: !0,
            T: !0
        },
        y = function(b, c, l, u, y, N, s) {
            N = N || 5;
            s = s || 5;
            var g, M, p, B, A, K, I, H, F, P, C, L, O, Q, J, R, S = new $3Dmol.Geometry(!0),
                V = new $3Dmol.Geometry(!0),
                Z = [],
                W = [],
                Y = 1,
                X = !1;
            for (H = 0; H < N; H++) W[H] = [];
            var U = g = !1;
            H = 0;
            var T = [];
            for (H in c) {
                B = c[H];
                if ("C" === B.elem && "CA" === B.atom) {
                    var G = f(p, B);
                    G && "s" === B.ss ? g = !0 : g && (p && M && p.style.cartoon.arrows && M.style.cartoon.arrows && (p.ss = "arrow end", M.ss = "arrow start"), g = !1);
                    G && "h" === p.ss ? (!U && B.style.cartoon.tubes && (B.ss = "tube start"), U = !0) : U && "tube start" !== p.ss && (M && M.style.cartoon.tubes && (M.ss =
                        "tube end"), U = !1);
                    M = p;
                    p = B
                }
                B && B.atom in t && T.push(B)
            }
            c = function() {
                for (var c = 0; !I && c < N; c++) d(b, W[c], 1, Z, s, Y);
                u && 0 < W[0].length && h(V, W, Z, s, I, Y, W.style);
                W = [];
                for (c = 0; c < N; c++) W[c] = [];
                Z = [];
                w(b, V, Y, X, !0);
                w(b, S, Y, X, !1);
                V = new $3Dmol.Geometry(!0);
                S = new $3Dmol.Geometry(!0)
            };
            p = void 0;
            for (M = 0; M < T.length; M++)
                if (B = T[M], H = B.resn.trim(), U = H in D, Y = 1, g = B.style.cartoon, p && p.style.cartoon && (Y = p.style.cartoon.opacity), p && p.style.cartoon && p.style.cartoon.outline && (X = p.style.cartoon.outline), !p || !p.style.cartoon || B.style.cartoon &&
                    p.style.cartoon.opacity == B.style.cartoon.opacity || c(), "trace" === g.style) !B.hetflag && ("C" === B.elem && "CA" === B.atom || U && "P" === B.atom) && (K = l && "spectrum" === g.color ? l.valueToHex(B.resi, l.range()) : $3Dmol.getColorFromStyle(B, g).getHex(), I = $.isNumeric(g.thickness) ? g.thickness : .4, f(p, B) && (K == A ? (A = $3Dmol.CC.color(K), $3Dmol.GLDraw.drawCylinder(S, p, B, I, A, 2, 2)) : (g = (new $3Dmol.Vector3).addVectors(p, B).multiplyScalar(.5), A = $3Dmol.CC.color(A), H = $3Dmol.CC.color(K), $3Dmol.GLDraw.drawCylinder(S, p, g, I, A, 2, 0), $3Dmol.GLDraw.drawCylinder(S,
                    g, B, I, H, 0, 2))), p = B, A = K);
                else {
                    if (B && "C" === B.elem && "CA" === B.atom || U && ("P" === B.atom || 0 == B.atom.indexOf("O5"))) {
                        if (R)
                            if ("tube end" === B.ss) R = !1, H = new $3Dmol.Vector3(B.x, B.y, B.z), $3Dmol.GLDraw.drawCylinder(S, J, H, 2, $3Dmol.CC.color(A), 1, 1), B.ss = "h";
                            else continue;
                        if (p && (!f(p, B) || "tube start" === p.ss)) {
                            "tube start" === p.ss && (R = !0, J = new $3Dmol.Vector3(p.x, p.y, p.z), p.ss = "h");
                            Q && (H = L ? (new $3Dmol.Vector3).addVectors(p, L).multiplyScalar(.5) : new $3Dmol.Vector3(p.x, p.y, p.z), $3Dmol.GLDraw.drawCylinder(S, H, Q, .4, $3Dmol.CC.color(Q.color),
                                0, 2), H = z(W, N, !y, L, O, C, p, T, M), Z.push(K), H && Z.push(K), Q = H = null);
                            for (H = 0; !I && H < N; H++) d(b, W[H], 1, Z, s, Y);
                            u && 0 < W[0].length && h(V, W, Z, s, I, Y, W.style);
                            W = [];
                            for (H = 0; H < N; H++) W[H] = [];
                            Z = []
                        }
                        if (void 0 === p || p.rescode != B.rescode || p.resi != B.resi) Q && (H = (new $3Dmol.Vector3).addVectors(p, B).multiplyScalar(.5), p = H.clone().sub(Q).multiplyScalar(.02), H.add(p), $3Dmol.GLDraw.drawCylinder(S, H, Q, .4, $3Dmol.CC.color(Q.color), 0, 2), Q = H = null), K = l && "spectrum" === g.color ? l.valueToHex(B.resi, l.range()) : $3Dmol.getColorFromStyle(B, g).getHex(),
                            Z.push(K), I = $.isNumeric(g.thickness) ? g.thickness : .4, p = B, F = new $3Dmol.Vector3(p.x, p.y, p.z), F.resi = p.resi, A = K;
                        !0 !== B.clickable || void 0 !== B.intersectionShape && void 0 !== B.intersectionShape.triangle || (B.intersectionShape = {
                            sphere: null,
                            cylinder: [],
                            line: [],
                            triangle: []
                        })
                    } else if (p && "C" === p.elem && "CA" === p.atom && "O" === B.atom || U && "P" === p.atom && ("OP2" === B.atom || "O2P" === B.atom) || U && 0 == p.atom.indexOf("O5") && 0 == B.atom.indexOf("C5")) {
                        if (P = new $3Dmol.Vector3(B.x, B.y, B.z), P.resi = B.resi, "OP2" === B.atom || "O2P" === B.atom) O =
                            new $3Dmol.Vector3(B.x, B.y, B.z)
                    } else if (U && 0 == B.atom.indexOf("O3")) L = new $3Dmol.Vector3(B.x, B.y, B.z);
                    else if ("N1" === B.atom && H in x || "N3" === B.atom && H in q) Q = new $3Dmol.Vector3(B.x, B.y, B.z), Q.color = $3Dmol.getColorFromStyle(B, g).getHex();
                    P && F && P.resi === F.resi && (H = z(W, N, !y, F, P, C, p, T, M), C = P, P = F = null, Z.push(K), H && Z.push(K))
                }
            Q && (H = L ? (new $3Dmol.Vector3).addVectors(p, L).multiplyScalar(.5) : new $3Dmol.Vector3(p.x, p.y, p.z), $3Dmol.GLDraw.drawCylinder(S, H, Q, .4, $3Dmol.CC.color(Q.color), 0, 2), H = z(W, N, !y, L, O, C, p,
                T, M), Z.push(K), H && Z.push(K));
            c()
        },
        z = function(b, c, d, u, y, t, s, g, z) {
            var p;
            if (u && y && s) {
                var q = y.sub(u);
                q.normalize();
                var f = g[z];
                for (z += 1; z < g.length && (f = g[z], f.atom != s.atom); z++);
                f = f ? new $3Dmol.Vector3(f.x, f.y, f.z) : new $3Dmol.Vector3(0, 0, 0);
                f.sub(u);
                "arrow start" === s.ss && (z = f.clone().multiplyScalar(.3).cross(y), u.add(z), z = f.clone().cross(q).normalize(), q.rotateAboutVector(z, .43));
                s.style.cartoon.ribbon ? z = s.style.cartoon.thickness || .4 : s.style.cartoon.width ? z = s.style.cartoon.width : "c" === s.ss ? z = "P" === s.atom ?
                    .8 : .5 : "arrow start" === s.ss ? (z = 1.3, p = !0) : z = "arrow end" === s.ss ? .5 : "h" === s.ss && s.style.cartoon.tubes || "tube start" === s.ss ? .5 : 1.3;
                null != t && 0 > q.dot(t) && q.negate();
                q.multiplyScalar(z);
                for (z = 0; z < c; z++) t = -1 + 2 * z / (c - 1), t = new $3Dmol.Vector3(u.x + t * q.x, u.y + t * q.y, u.z + t * q.z), t.atom = s, d && "s" === s.ss && (t.smoothen = !0), b[z].push(t);
                if (p)
                    for (q.multiplyScalar(2), z = 0; z < c; z++) t = -1 + 2 * z / (c - 1), t = new $3Dmol.Vector3(u.x + t * q.x, u.y + t * q.y, u.z + t * q.z), t.atom = s, t.smoothen = !1, t.skip = !0, b[z].push(t);
                c = s.style.cartoon.style || "default";
                b.style ? b.style != c && (console.log("Warning: a cartoon chain's strand-style is ambiguous"), b.style = "default") : b.style = c;
                if ("arrow start" === s.ss || "arrow end" === s.ss) s.ss = "s";
                return p
            }
        };
    return function(b, c, d, u) {
        u = parseInt(5 * parseFloat(u)) || 5;
        y(b, c, d, !0, !1, u, u)
    }
}();
$3Dmol = $3Dmol || {};
$3Dmol.GLDraw = function() {
    var b = {},
        c = function() {
            var b = new $3Dmol.Vector3;
            return function(c) {
                b.set(c[0], c[1], c[2]);
                var d = b.x,
                    f = b.y,
                    y = b.z,
                    z = Math.sqrt(d * d + f * f);
                1E-4 > z ? (c = 0, z = 1) : (c = -d / z, z = f / z);
                f = -c * d + z * f;
                d = Math.sqrt(f * f + y * y);
                1E-4 > d ? (y = 0, f = 1) : (y /= d, f /= d);
                d = new Float32Array(9);
                d[0] = z;
                d[1] = c;
                d[2] = 0;
                d[3] = -c * f;
                d[4] = z * f;
                d[5] = y;
                d[6] = c * y;
                d[7] = -z * y;
                d[8] = f;
                return d
            }
        }(),
        d = function() {
            var b = [],
                c = Math.pow(2, 4),
                d, f = Math.pow(2, 2),
                y = c / f,
                z;
            b[0] = new $3Dmol.Vector3(-1, 0, 0);
            b[y] = new $3Dmol.Vector3(0, 0, 1);
            b[2 * y] = new $3Dmol.Vector3(1,
                0, 0);
            b[3 * y] = new $3Dmol.Vector3(0, 0, -1);
            for (d = 3; 4 >= d; d++) {
                f = Math.pow(2, d - 1);
                y = c / f;
                for (z = 0; z < f - 1; z++) b[y / 2 + z * y] = b[z * y].clone().add(b[(z + 1) * y]).normalize();
                z = f - 1;
                b[y / 2 + z * y] = b[z * y].clone().add(b[0]).normalize()
            }
            return b
        }(),
        h = {
            cache: {},
            getVerticesForRadius: function(b, c, f) {
                if (void 0 !== typeof this.chache && void 0 !== this.cache[b] && void 0 !== this.cache[b][c + f]) return this.cache[b][c + f];
                new $3Dmol.Vector3(0, 1, 0);
                for (var h = d.length, y = [], z = [], m, e = 0; e < h; e++) y.push(d[e].clone().multiplyScalar(b)), y.push(d[e].clone().multiplyScalar(b)),
                    m = d[e].clone().normalize(), z.push(m), z.push(m);
                var e = [],
                    l = 2 * Math.PI,
                    u = Math.PI,
                    E, w, s = !1,
                    g = !1;
                for (w = 0; 10 >= w; w++) {
                    var s = 0 === w || 10 === w ? !0 : !1,
                        g = 5 === w ? !0 : !1,
                        M = [],
                        p = [];
                    for (E = 0; E <= h; E++)
                        if (g) {
                            var B = E < h ? 2 * E : 0;
                            p.push(B + 1);
                            M.push(B)
                        } else {
                            m = E / h;
                            var A = w / 10;
                            s && 0 !== E ? s && M.push(y.length - 1) : E < h ? (B = new $3Dmol.Vector3, B.x = -b * Math.cos(0 + m * l) * Math.sin(0 + A * u), B.y = 1 == c ? 0 : b * Math.cos(0 + A * u), B.z = b * Math.sin(0 + m * l) * Math.sin(0 + A * u), 1E-5 > Math.abs(B.x) && (B.x = 0), 1E-5 > Math.abs(B.y) && (B.y = 0), 1E-5 > Math.abs(B.z) && (B.z = 0), m = 1 === c ? new $3Dmol.Vector3(0,
                                Math.cos(0 + A * u), 0) : new $3Dmol.Vector3(B.x, B.y, B.z), m.normalize(), y.push(B), z.push(m), M.push(y.length - 1)) : M.push(y.length - h)
                        }
                    g && e.push(p);
                    e.push(M)
                }
                h = {
                    vertices: y,
                    normals: z,
                    verticesRows: e,
                    w: h,
                    h: 10
                };
                this.cache[b] = {};
                return this.cache[b][c + f] = h
            }
        };
    this.caps = {
        NONE: 0,
        FLAT: 1,
        ROUND: 2
    };
    var f = 0;
    b.drawCylinder = function(b, d, q, w, y, z, m) {
        if (d && q) {
            f++;
            var e = z || m;
            y = y || {
                r: 0,
                g: 0,
                b: 0
            };
            var l = [q.x, q.y, q.z];
            l[0] -= d.x;
            l[1] -= d.y;
            l[2] -= d.z;
            var l = c(l),
                u = h.getVerticesForRadius(w, m, "to");
            w = u.w;
            var E = u.h,
                N = e ? E * w + 2 : 2 * w;
            b = b.updateGeoGroup(N);
            var s = u.vertices,
                g = u.normals,
                u = u.verticesRows,
                M = u[E / 2],
                p = u[E / 2 + 1],
                B = b.vertices,
                A, K, I, H, F, P, C = b.vertexArray,
                L = b.normalArray,
                O = b.colorArray,
                Q = b.faceArray;
            for (I = 0; I < w; ++I) K = 2 * I, H = l[0] * s[K].x + l[3] * s[K].y + l[6] * s[K].z, F = l[1] * s[K].x + l[4] * s[K].y + l[7] * s[K].z, P = l[5] * s[K].y + l[8] * s[K].z, A = 3 * (B + K), K = b.faceidx, C[A] = H + d.x, C[A + 1] = F + d.y, C[A + 2] = P + d.z, C[A + 3] = H + q.x, C[A + 4] = F + q.y, C[A + 5] = P + q.z, L[A] = H, L[A + 3] = H, L[A + 1] = F, L[A + 4] = F, L[A + 2] = P, L[A + 5] = P, O[A] = y.r, O[A + 3] = y.r, O[A + 1] = y.g, O[A + 4] = y.g, O[A + 2] = y.b, O[A + 5] = y.b, Q[K] = p[I] + B,
                Q[K + 1] = p[I + 1] + B, Q[K + 2] = M[I] + B, Q[K + 3] = M[I] + B, Q[K + 4] = p[I + 1] + B, Q[K + 5] = M[I + 1] + B, b.faceidx += 6;
            if (e) {
                z = z ? E + 1 : E / 2 + 1;
                var J, R, S, V, Z, W, Y, X, U, T, G, ba, aa;
                for (F = m ? 0 : E / 2; F < z; F++)
                    if (F !== E / 2) {
                        var ga = F <= E / 2 ? q : d;
                        for (H = 0; H < w; H++) K = b.faceidx, m = u[F][H + 1], I = 3 * (m + B), e = u[F][H], P = 3 * (e + B), M = u[F + 1][H], A = 3 * (M + B), p = u[F + 1][H + 1], aa = 3 * (p + B), J = l[0] * s[m].x + l[3] * s[m].y + l[6] * s[m].z, R = l[0] * s[e].x + l[3] * s[e].y + l[6] * s[e].z, S = l[0] * s[M].x + l[3] * s[M].y + l[6] * s[M].z, V = l[0] * s[p].x + l[3] * s[p].y + l[6] * s[p].z, Z = l[1] * s[m].x + l[4] * s[m].y + l[7] * s[m].z, W =
                            l[1] * s[e].x + l[4] * s[e].y + l[7] * s[e].z, Y = l[1] * s[M].x + l[4] * s[M].y + l[7] * s[M].z, X = l[1] * s[p].x + l[4] * s[p].y + l[7] * s[p].z, U = l[5] * s[m].y + l[8] * s[m].z, T = l[5] * s[e].y + l[8] * s[e].z, G = l[5] * s[M].y + l[8] * s[M].z, ba = l[5] * s[p].y + l[8] * s[p].z, C[I] = J + ga.x, C[P] = R + ga.x, C[A] = S + ga.x, C[aa] = V + ga.x, C[I + 1] = Z + ga.y, C[P + 1] = W + ga.y, C[A + 1] = Y + ga.y, C[aa + 1] = X + ga.y, C[I + 2] = U + ga.z, C[P + 2] = T + ga.z, C[A + 2] = G + ga.z, C[aa + 2] = ba + ga.z, O[I] = y.r, O[P] = y.r, O[A] = y.r, O[aa] = y.r, O[I + 1] = y.g, O[P + 1] = y.g, O[A + 1] = y.g, O[aa + 1] = y.g, O[I + 2] = y.b, O[P + 2] = y.b, O[A + 2] = y.b, O[aa +
                                2] = y.b, J = l[0] * g[m].x + l[3] * g[m].y + l[6] * g[m].z, R = l[0] * g[e].x + l[3] * g[e].y + l[6] * g[e].z, S = l[0] * g[M].x + l[3] * g[M].y + l[6] * g[M].z, V = l[0] * g[p].x + l[3] * g[p].y + l[6] * g[p].z, Z = l[1] * g[m].x + l[4] * g[m].y + l[7] * g[m].z, W = l[1] * g[e].x + l[4] * g[e].y + l[7] * g[e].z, Y = l[1] * g[M].x + l[4] * g[M].y + l[7] * g[M].z, X = l[1] * g[p].x + l[4] * g[p].y + l[7] * g[p].z, U = l[5] * g[m].y + l[8] * g[m].z, T = l[5] * g[e].y + l[8] * g[e].z, G = l[5] * g[M].y + l[8] * g[M].z, ba = l[5] * g[p].y + l[8] * g[p].z, 0 === F ? (L[I] = J, L[A] = S, L[aa] = V, L[I + 1] = Z, L[A + 1] = Y, L[aa + 1] = X, L[I + 2] = U, L[A + 2] = G, L[aa + 2] = ba,
                                Q[K] = m + B, Q[K + 1] = M + B, Q[K + 2] = p + B, b.faceidx += 3) : F === z - 1 ? (L[I] = J, L[P] = R, L[A] = S, L[I + 1] = Z, L[P + 1] = W, L[A + 1] = Y, L[I + 2] = U, L[P + 2] = T, L[A + 2] = G, Q[K] = m + B, Q[K + 1] = e + B, Q[K + 2] = M + B, b.faceidx += 3) : (L[I] = J, L[P] = R, L[aa] = V, L[I + 1] = Z, L[P + 1] = W, L[aa + 1] = X, L[I + 2] = U, L[P + 2] = T, L[aa + 2] = ba, L[P] = R, L[A] = S, L[aa] = V, L[P + 1] = W, L[A + 1] = Y, L[aa + 1] = X, L[P + 2] = T, L[A + 2] = G, L[aa + 2] = ba, Q[K] = m + B, Q[K + 1] = e + B, Q[K + 2] = p + B, Q[K + 3] = e + B, Q[K + 4] = M + B, Q[K + 5] = p + B, b.faceidx += 6)
                    }
            }
            b.vertices += N
        }
    };
    b.drawCone = function(b, f, q, h, y) {
        if (f && q) {
            y = y || {
                r: 0,
                g: 0,
                b: 0
            };
            var z = [q.x, q.y,
                q.z
            ];
            z.x -= f.x;
            z.y -= f.y;
            z.z -= f.z;
            var m = c(z),
                e = d.length;
            b = b.updateGeoGroup(e + 2);
            var l = b.vertices,
                u, E, w, s = b.vertexArray,
                g = b.normalArray,
                M = b.colorArray,
                p = b.faceArray;
            u = 3 * l;
            z = (new $3Dmol.Vector3(z[0], z[1], z[2])).normalize();
            s[u] = f.x;
            s[u + 1] = f.y;
            s[u + 2] = f.z;
            g[u] = -z.x;
            g[u + 1] = -z.y;
            g[u + 2] = -z.z;
            M[u] = y.r;
            M[u + 1] = y.g;
            M[u + 2] = y.b;
            s[u + 3] = q.x;
            s[u + 4] = q.y;
            s[u + 5] = q.z;
            g[u + 3] = z.x;
            g[u + 4] = z.y;
            g[u + 5] = z.z;
            M[u + 3] = y.r;
            M[u + 4] = y.g;
            M[u + 5] = y.b;
            u += 6;
            for (q = 0; q < e; ++q) w = d[q].clone(), w.multiplyScalar(h), z = m[0] * w.x + m[3] * w.y + m[6] * w.z, E =
                m[1] * w.x + m[4] * w.y + m[7] * w.z, w = m[5] * w.y + m[8] * w.z, s[u] = z + f.x, s[u + 1] = E + f.y, s[u + 2] = w + f.z, g[u] = z, g[u + 1] = E, g[u + 2] = w, M[u] = y.r, M[u + 1] = y.g, M[u + 2] = y.b, u += 3;
            b.vertices += e + 2;
            f = b.faceidx;
            for (q = 0; q < e; q++) h = l + 2 + q, y = l + 2 + (q + 1) % e, p[f] = h, p[f + 1] = y, p[f + 2] = l, f += 3, p[f] = h, p[f + 1] = y, p[f + 2] = l + 1, f += 3;
            b.faceidx += 6 * e
        }
    };
    var w = {
        cache: {},
        getVerticesForRadius: function(b) {
            if ("undefined" !== typeof this.cache[b]) return this.cache[b];
            var c = {
                    vertices: [],
                    verticesRows: [],
                    normals: []
                },
                d = 16,
                f = 10;
            1 > b && (d = 10, f = 8);
            var y = 2 * Math.PI,
                z = Math.PI,
                m, e;
            for (e = 0; e <= f; e++) {
                var l = [];
                for (m = 0; m <= d; m++) {
                    var u = m / d,
                        h = e / f,
                        w = {};
                    w.x = -b * Math.cos(0 + u * y) * Math.sin(0 + h * z);
                    w.y = b * Math.cos(0 + h * z);
                    w.z = b * Math.sin(0 + u * y) * Math.sin(0 + h * z);
                    u = new $3Dmol.Vector3(w.x, w.y, w.z);
                    u.normalize();
                    c.vertices.push(w);
                    c.normals.push(u);
                    l.push(c.vertices.length - 1)
                }
                c.verticesRows.push(l)
            }
            return this.cache[b] = c
        }
    };
    b.drawSphere = function(b, c, d, f) {
        new $3Dmol.Vector3(c.x, c.y, c.z);
        var y = w.getVerticesForRadius(d),
            z = y.vertices,
            m = y.normals;
        b = b.updateGeoGroup(z.length);
        for (var e = b.vertices, l = b.vertexArray,
                u = b.colorArray, h = b.faceArray, N = b.lineArray, s = b.normalArray, g = 0, M = z.length; g < M; ++g) {
            var p = 3 * (e + g),
                B = z[g];
            l[p] = B.x + c.x;
            l[p + 1] = B.y + c.y;
            l[p + 2] = B.z + c.z;
            u[p] = f.r;
            u[p + 1] = f.g;
            u[p + 2] = f.b
        }
        b.vertices += z.length;
        y = y.verticesRows;
        l = y.length - 1;
        for (f = 0; f < l; f++)
            for (u = y[f].length - 1, c = 0; c < u; c++) {
                var g = b.faceidx,
                    M = b.lineidx,
                    p = y[f][c + 1] + e,
                    B = 3 * p,
                    A = y[f][c] + e,
                    K = 3 * A,
                    I = y[f + 1][c] + e,
                    H = 3 * I,
                    F = y[f + 1][c + 1] + e,
                    P = 3 * F,
                    C = m[p - e],
                    L = m[A - e],
                    O = m[I - e],
                    Q = m[F - e];
                Math.abs(z[p - e].y) === d ? (s[B] = C.x, s[H] = O.x, s[P] = Q.x, s[B + 1] = C.y, s[H + 1] = O.y, s[P + 1] =
                    Q.y, s[B + 2] = C.z, s[H + 2] = O.z, s[P + 2] = Q.z, h[g] = p, h[g + 1] = I, h[g + 2] = F, N[M] = p, N[M + 1] = I, N[M + 2] = p, N[M + 3] = F, N[M + 4] = I, N[M + 5] = F, b.faceidx += 3, b.lineidx += 6) : Math.abs(z[I - e].y) === d ? (s[B] = C.x, s[K] = L.x, s[H] = O.x, s[B + 1] = C.y, s[K + 1] = L.y, s[H + 1] = O.y, s[B + 2] = C.z, s[K + 2] = L.z, s[H + 2] = O.z, h[g] = p, h[g + 1] = A, h[g + 2] = I, N[M] = p, N[M + 1] = A, N[M + 2] = p, N[M + 3] = I, N[M + 4] = A, N[M + 5] = I, b.faceidx += 3, b.lineidx += 6) : (s[B] = C.x, s[K] = L.x, s[P] = Q.x, s[B + 1] = C.y, s[K + 1] = L.y, s[P + 1] = Q.y, s[B + 2] = C.z, s[K + 2] = L.z, s[P + 2] = Q.z, s[K] = L.x, s[H] = O.x, s[P] = Q.x, s[K + 1] = L.y, s[H + 1] =
                    O.y, s[P + 1] = Q.y, s[K + 2] = L.z, s[H + 2] = O.z, s[P + 2] = Q.z, h[g] = p, h[g + 1] = A, h[g + 2] = F, h[g + 3] = A, h[g + 4] = I, h[g + 5] = F, N[M] = p, N[M + 1] = A, N[M + 2] = p, N[M + 3] = F, N[M + 4] = A, N[M + 5] = I, N[M + 6] = I, N[M + 7] = F, b.faceidx += 6, b.lineidx += 8)
            }
    };
    return b
}();
$3Dmol = $3Dmol || {};
$3Dmol.GLModel = function() {
    function b(w, t) {
        var x = [],
            q = [],
            D = !1,
            y = null,
            z = null,
            m = null,
            e = {},
            l = new $3Dmol.Matrix4,
            u = !0,
            E = $3Dmol.elementColors.defaultColor,
            N = t ? t : $3Dmol.elementColors.defaultColors,
            s = function(b, c) {
                var e = 1.5;
                "undefined" != typeof c.radius ? e = c.radius : d[b.elem] && (e = d[b.elem]);
                "undefined" != typeof c.scale && (e *= c.scale);
                return e
            },
            g = function(b, c, d) {
                var e = new $3Dmol.Vector3(b.x, b.y, b.z),
                    g = (new $3Dmol.Vector3(c.x, c.y, c.z)).clone(),
                    l = null;
                g.sub(e);
                1 === b.bonds.length ? 1 === c.bonds.length ? (l = g.clone(), 1E-4 <
                    Math.abs(l.x) ? l.y += 1 : l.x += 1) : (d = (d + 1) % c.bonds.length, b = c.bonds[d], b = x[b], b = new $3Dmol.Vector3(b.x, b.y, b.z), b = b.clone(), b.sub(e), l = b.clone(), l.cross(g)) : (d = (d + 1) % b.bonds.length, b = b.bonds[d], b = x[b], b = new $3Dmol.Vector3(b.x, b.y, b.z), b = b.clone(), b.sub(e), l = b.clone(), l.cross(g));
                .01 > l.lengthSq() && (l = g.clone(), 1E-4 < Math.abs(l.x) ? l.y += 1 : l.x += 1);
                l.cross(g);
                l.normalize();
                return l
            },
            M = function(b, c, d, e, g, l) {
                b[d] = e.x;
                b[d + 1] = e.y;
                b[d + 2] = e.z;
                c[d] = l.r;
                c[d + 1] = l.g;
                c[d + 2] = l.b;
                b[d + 3] = g.x;
                b[d + 4] = g.y;
                b[d + 5] = g.z;
                c[d + 3] =
                    l.r;
                c[d + 4] = l.g;
                c[d + 5] = l.b
            },
            p = function(b, c) {
                if (b.style.sphere) {
                    var d = b.style.sphere;
                    if (!d.hidden) {
                        var e = $3Dmol.getColorFromStyle(b, d),
                            d = s(b, d);
                        if ((!0 === b.clickable || b.hoverable) && void 0 !== b.intersectionShape) {
                            var g = new $3Dmol.Vector3(b.x, b.y, b.z);
                            b.intersectionShape.sphere.push(new $3Dmol.Sphere(g, d))
                        }
                        $3Dmol.GLDraw.drawSphere(c, b, d, e)
                    }
                }
            },
            B = function(b, c) {
                if (b.style.sphere) {
                    var d = b.style.sphere;
                    if (!d.hidden) {
                        var e = s(b, d),
                            g = $3Dmol.getColorFromStyle(b, d),
                            d = c.updateGeoGroup(1),
                            l = d.vertices,
                            m = 3 * l,
                            f = d.vertexArray,
                            u = d.colorArray,
                            y = d.radiusArray;
                        f[m] = b.x;
                        f[m + 1] = b.y;
                        f[m + 2] = b.z;
                        u = d.colorArray;
                        u[m] = g.r;
                        u[m + 1] = g.g;
                        u[m + 2] = g.b;
                        y[l] = e;
                        !0 !== b.clickable && !b.hoverable || void 0 === b.intersectionShape || (g = new $3Dmol.Vector3(b.x, b.y, b.z), b.intersectionShape.sphere.push(new $3Dmol.Sphere(g, e)));
                        d.vertices += 1
                    }
                }
            },
            A = function(b, c, d, e) {
                b = b.updateGeoGroup(4);
                for (var g = b.vertices, l = 3 * g, m = b.vertexArray, f = b.colorArray, u = 0; 4 > u; u++) m[l + 3 * u] = c.x, m[l + 3 * u + 1] = c.y, m[l + 3 * u + 2] = c.z;
                c = b.normalArray;
                f = b.colorArray;
                for (u = 0; 4 > u; u++) f[l + 3 * u] = e.r,
                    f[l + 3 * u + 1] = e.g, f[l + 3 * u + 2] = e.b;
                c[l + 0] = -d;
                c[l + 1] = d;
                c[l + 2] = 0;
                c[l + 3] = -d;
                c[l + 4] = -d;
                c[l + 5] = 0;
                c[l + 6] = d;
                c[l + 7] = -d;
                c[l + 8] = 0;
                c[l + 9] = d;
                c[l + 10] = d;
                c[l + 11] = 0;
                b.vertices += 4;
                d = b.faceArray;
                e = b.faceidx;
                d[e + 0] = g;
                d[e + 1] = g + 1;
                d[e + 2] = g + 2;
                d[e + 3] = g + 2;
                d[e + 4] = g + 3;
                d[e + 5] = g;
                b.faceidx += 6
            },
            K = function(b, c) {
                if (b.style.sphere) {
                    var d = b.style.sphere;
                    if (!d.hidden) {
                        var e = s(b, d),
                            d = $3Dmol.getColorFromStyle(b, d);
                        if ((!0 === b.clickable || b.hoverable) && void 0 !== b.intersectionShape) {
                            var g = new $3Dmol.Vector3(b.x, b.y, b.z);
                            b.intersectionShape.sphere.push(new $3Dmol.Sphere(g,
                                e))
                        }
                        A(c, b, e, d)
                    }
                }
            },
            I = function(b, c, d, e, g, l, m) {
                b = b.updateGeoGroup(4);
                l = b.vertices;
                m = b.vertexArray;
                var f = b.colorArray,
                    u = b.radiusArray,
                    y = b.normalArray,
                    z = g.r,
                    p = g.g;
                g = g.b;
                for (var s = 3 * l, q = 0; 4 > q; q++) {
                    m[s] = c.x;
                    y[s] = d.x;
                    f[s] = z;
                    s++;
                    m[s] = c.y;
                    y[s] = d.y;
                    f[s] = p;
                    s++;
                    m[s] = c.z;
                    y[s] = d.z;
                    if (2 > q) f[s] = g;
                    else {
                        var h = s,
                            t = -g;
                        0 == t && (t = -1E-4);
                        f[h] = t
                    }
                    s++
                }
                b.vertices += 4;
                u[l] = -e;
                u[l + 1] = e;
                u[l + 2] = -e;
                u[l + 3] = e;
                c = b.faceArray;
                d = b.faceidx;
                c[d + 0] = l;
                c[d + 1] = l + 1;
                c[d + 2] = l + 2;
                c[d + 3] = l + 2;
                c[d + 4] = l + 3;
                c[d + 5] = l;
                b.faceidx += 6
            };
        this.getCrystData = function() {
            return e.cryst ?
                e.cryst : null
        };
        this.getSymmetries = function() {
            "undefined" == typeof e.symmetries && (e.symmetries = [l]);
            return e.symmetries
        };
        this.setSymmetries = function(b) {
            e.symmetries = "undefined" == typeof b ? [l] : b
        };
        this.getID = function() {
            return w
        };
        this.getFrames = function() {
            return q
        };
        this.setFrame = function(b) {
            0 != q.length && (x = 0 <= b && b < q.length ? q[b] : q[q.length - 1], y = null)
        };
        this.addFrame = function(b) {
            q.push(b)
        };
        this.vibrate = function(b, c) {
            c = c || 1;
            b = b || 10;
            b--;
            for (var d = 1; d <= b; d++) {
                for (var e = [], g = 0; g < x.length; g++) {
                    var l = new $3Dmol.Vector3($3Dmol.getAtomProperty(x[g],
                            "dx"), $3Dmol.getAtomProperty(x[g], "dy"), $3Dmol.getAtomProperty(x[g], "dz")),
                        m = new $3Dmol.Vector3(x[g].x, x[g].y, x[g].z);
                    l.multiplyScalar(d * c / b);
                    m.add(l);
                    var l = {},
                        f;
                    for (f in x[g]) l[f] = x[g][f];
                    l.x = m.x;
                    l.y = m.y;
                    l.z = m.z;
                    e.push(l)
                }
                q.push(e)
            }
            q.unshift(x)
        };
        this.setAtomDefaults = function(b) {
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                e && (e.style = e.style || c, e.color = e.color || N[e.elem] || E, e.model = w, e.clickable || e.hoverable) && (e.intersectionShape = {
                    sphere: [],
                    cylinder: [],
                    line: [],
                    triangle: []
                })
            }
        };
        this.addMolData = function(b,
            c, d) {
            d = d || {};
            b = $3Dmol.GLModel.parseMolData(b, c, d);
            u = !d.duplicateAssemblyAtoms;
            (c = b.modelData) && (e = Array.isArray(c) ? c[0] : c);
            if (0 == q.length) {
                for (c = 0; c < b.length; c++) 0 != b[c].length && q.push(b[c]);
                q[0] && (x = q[0])
            } else if (d.frames)
                for (c = 0; c < b.length; c++) q.push(b[c]);
            else
                for (c = 0; c < b.length; c++) this.addAtoms(b[c]);
            for (c = 0; c < q.length; c++) this.setAtomDefaults(q[c], w);
            d.vibrate && d.vibrate.frames && d.vibrate.amplitude && this.vibrate(d.vibrate.frames, d.vibrate.amplitude)
        };
        this.setDontDuplicateAtoms = function(b) {
            u =
                b
        };
        this.setModelData = function(b) {
            e = b
        };
        this.atomIsSelected = function(b, c) {
            if ("undefined" === typeof c) return !0;
            var d = !!c.invert,
                e = !0,
                g;
            for (g in c)
                if ("predicate" === g) {
                    if (!c.predicate(b)) {
                        e = !1;
                        break
                    }
                } else if ("properties" == g && b[g])
                for (var l in c.properties) {
                    if ("undefined" === typeof b.properties[l]) {
                        e = !1;
                        break
                    }
                    if (b.properties[l] != c.properties[l]) {
                        e = !1;
                        break
                    }
                } else if (c.hasOwnProperty(g) && "props" != g && "invert" != g && "model" != g && "byres" != g && "expand" != g && "within" != g) {
                    if ("undefined" === typeof b[g]) {
                        e = !1;
                        break
                    }
                    var m = !1;
                    if ("bonds" === g) {
                        if (m = c[g], m != b.bonds.length) {
                            e = !1;
                            break
                        }
                    } else if ($.isArray(c[g])) {
                        for (var f = c[g], u = 0; u < f.length; u++)
                            if (b[g] == f[u]) {
                                m = !0;
                                break
                            }
                        if (!m) {
                            e = !1;
                            break
                        }
                    } else if (m = c[g], b[g] != m) {
                        e = !1;
                        break
                    }
                }
            return d ? !e : e
        };
        this.selectedAtoms = function(b, c) {
            var d = [];
            b = b || {};
            c || (c = x);
            for (var e = c.length, g = 0; g < e; g++) {
                var l = c[g];
                l && this.atomIsSelected(l, b) && d.push(l)
            }
            if (b.hasOwnProperty("expand")) {
                var m;
                m = parseFloat(b.expand);
                if (0 >= m) m = d;
                else {
                    g = $3Dmol.getExtent(d);
                    l = [
                        [],
                        [],
                        []
                    ];
                    for (e = 0; 3 > e; e++) l[0][e] = g[0][e] - m,
                        l[1][e] = g[1][e] + m, l[2][e] = g[2][e];
                    m = [];
                    for (e = 0; e < x.length; e++) {
                        var f = x[e].x,
                            u = x[e].y,
                            y = x[e].z;
                        f >= l[0][0] && f <= l[1][0] && u >= l[0][1] && u <= l[1][1] && y >= l[0][2] && y <= l[1][2] && (f >= g[0][0] && f <= g[1][0] && u >= g[0][1] && u <= g[1][1] && y >= g[0][2] && y <= g[1][2] || m.push(x[e]))
                    }
                }
                f = d.length;
                for (g = 0; g < m.length; g++)
                    for (var z = 0; z < f; z++) l = H(m[g], d[z]), e = Math.pow(b.expand, 2), l < e && 0 < l && d.push(m[g])
            }
            if (b.hasOwnProperty("within") && b.within.hasOwnProperty("sel") && b.within.hasOwnProperty("distance")) {
                f = this.selectedAtoms(b.within.sel,
                    x);
                m = {};
                for (g = 0; g < f.length; g++)
                    for (z = 0; z < d.length; z++) l = H(f[g], d[z]), e = Math.pow(parseFloat(b.within.distance), 2), l < e && 0 < l && (m[z] = 1);
                g = [];
                if (b.within.invert)
                    for (z = 0; z < d.length; z++) m[z] || g.push(d[z]);
                else
                    for (z in m) g.push(d[z]);
                d = g
            }
            if (b.hasOwnProperty("byres"))
                for (e = {}, m = [], f = [], g = 0; g < d.length; g++)
                    if (l = d[g], u = l.chain, y = l.resi, void 0 === e[u] && (e[u] = {}), l.hasOwnProperty("resi") && void 0 === e[u][y])
                        for (e[u][y] = !0, f.push(l); 0 < f.length;)
                            if (l = f.pop(), u = l.chain, y = l.resi, void 0 === m[l.index])
                                for (m[l.index] = !0,
                                    z = 0; z < l.bonds.length; z++) {
                                    var s = x[l.bonds[z]];
                                    void 0 === m[s.index] && s.hasOwnProperty("resi") && s.chain == u && s.resi == y && (f.push(s), d.push(s))
                                }
                            return d
        };
        var H = function(b, c) {
            var d = c.y - b.y,
                e = c.z - b.z;
            return Math.pow(c.x - b.x, 2) + Math.pow(d, 2) + Math.pow(e, 2)
        };
        this.addAtoms = function(b) {
            y = null;
            var d = x.length,
                e = [],
                g;
            for (g = 0; g < b.length; g++) "undefined" == typeof b[g].index && (b[g].index = g), "undefined" == typeof b[g].serial && (b[g].serial = g), e[b[g].index] = d + g;
            for (g = 0; g < b.length; g++) {
                var d = b[g],
                    l = e[d.index],
                    m = $.extend(!1, {}, d);
                m.index = l;
                m.bonds = [];
                m.bondOrder = [];
                m.model = w;
                m.style = m.style || c;
                "undefined" == typeof m.color && (m.color = N[m.elem] || E);
                for (var l = d.bonds ? d.bonds.length : 0, f = 0; f < l; f++) {
                    var u = e[d.bonds[f]];
                    "undefined" != typeof u && (m.bonds.push(u), m.bondOrder.push(d.bondOrder ? d.bondOrder[f] : 1))
                }
                x.push(m)
            }
        };
        this.removeAtoms = function(b) {
            y = null;
            var c = [],
                d;
            for (d = 0; d < b.length; d++) c[b[d].index] = !0;
            b = [];
            for (d = 0; d < x.length; d++) {
                var e = x[d];
                c[e.index] || b.push(e)
            }
            x = [];
            this.addAtoms(b)
        };
        this.setStyle = function(b, c, d) {
            "undefined" ===
            typeof c && "undefined" == typeof d && (c = b, b = {});
            for (var e in b) - 1 === h.indexOf(e) && console.log("Unknown selector " + e);
            for (e in c) - 1 === f.indexOf(e) && console.log("Unknown style " + e);
            var g = !1,
                l = function(l) {
                    for (var f = m.selectedAtoms(b, l), u = 0; u < l.length; u++) l[u] && (l[u].capDrawn = !1);
                    for (u = 0; u < f.length; u++) {
                        g = !0;
                        if (f[u].clickable || f[u].hoverable) f[u].intersectionShape = {
                            sphere: [],
                            cylinder: [],
                            line: [],
                            triangle: []
                        };
                        d || (f[u].style = {});
                        for (e in c)
                            if (c.hasOwnProperty(e)) {
                                f[u].style[e] = f[u].style[e] || {};
                                for (var y in c[e]) f[u].style[e][y] =
                                    c[e][y]
                            }
                    }
                },
                m = this;
            l(x);
            for (var u = 0; u < q.length; u++) l(q[u]);
            g && (y = null)
        };
        this.setClickable = function(b, c, d) {
            for (var e in b) - 1 === h.indexOf(e) && console.log("Unknown selector " + e);
            c = !!c;
            if (d && "function" != typeof d) console.log("Callback is not a function");
            else {
                e = this.selectedAtoms(b, x);
                var g = e.length;
                for (b = 0; b < g; b++) e[b].intersectionShape = {
                    sphere: [],
                    cylinder: [],
                    line: [],
                    triangle: []
                }, e[b].clickable = c, d && (e[b].callback = d);
                0 < g && (y = null)
            }
        };
        this.setHoverable = function(b, c, d, e) {
            for (var g in b) - 1 === h.indexOf(g) &&
                console.log("Unknown selector " + g);
            c = !!c;
            if (d && "function" != typeof d) console.log("Hover_callback is not a function");
            else if (e && "function" != typeof e) console.log("Unhover_callback is not a function");
            else {
                g = this.selectedAtoms(b, x);
                var l = g.length;
                for (b = 0; b < l; b++) g[b].intersectionShape = {
                    sphere: [],
                    cylinder: [],
                    line: [],
                    triangle: []
                }, g[b].hoverable = c, d && (g[b].hover_callback = d), e && (g[b].unhover_callback = e);
                0 < l && (y = null)
            }
        };
        this.setColorByElement = function(b, c) {
            var d;
            if (d = null !== y) d = m, d = c && d ? JSON.stringify(c) ==
                JSON.stringify(d) : c == d;
            if (!d) {
                m = c;
                var e = this.selectedAtoms(b, e);
                0 < e.length && (y = null);
                for (d = 0; d < e.length; d++) {
                    var g = e[d];
                    "undefined" !== typeof c[g.elem] && (g.color = c[g.elem])
                }
            }
        };
        this.setColorByProperty = function(b, c, d, e) {
            var g, l = this.selectedAtoms(b, l);
            m = null;
            0 < l.length && (y = null);
            "undefined" != typeof $3Dmol.Gradient.builtinGradients[d] && (d = new $3Dmol.Gradient.builtinGradients[d]);
            e || (e = d.range());
            e || (e = $3Dmol.getPropertyRange(l, c));
            for (b = 0; b < l.length; b++) g = l[b], null != $3Dmol.getAtomProperty(g, c) && (g.color =
                d.valueToHex(parseFloat(g.properties[c]), e))
        };
        this.setColorByFunction = function(b, c) {
            var d = this.selectedAtoms(b, d);
            m = null;
            0 < d.length && (y = null);
            for (i = 0; i < d.length; i++) a = d[i], a.color = c(a)
        };
        this.toCDObject = function(b) {
            var c = {
                a: [],
                b: []
            };
            b && (c.s = []);
            for (var d = 0; d < x.length; d++) {
                var e = {},
                    g = x[d];
                e.x = g.x;
                e.y = g.y;
                e.z = g.z;
                "C" != g.elem && (e.l = g.elem);
                if (b) {
                    for (var l = 0; l < c.s.length && JSON.stringify(g.style) !== JSON.stringify(c.s[l]);) l++;
                    l === c.s.length && c.s.push(g.style);
                    0 !== l && (e.s = l)
                }
                c.a.push(e);
                for (e = 0; e < g.bonds.length; e++) {
                    var l =
                        d,
                        m = g.bonds[e];
                    l >= m || (l = {
                        b: l,
                        e: m
                    }, m = g.bondOrder[e], 1 != m && (l.o = m), c.b.push(l))
                }
            }
            return c
        };
        this.globj = function(b, c) {
            if (null === y) {
                var d = x,
                    l = c,
                    l = l || {},
                    m = new $3Dmol.Object3D,
                    f = [],
                    q = {},
                    h = {},
                    t = p,
                    E = null,
                    w = null;
                l.supportsImposters ? (t = K, E = new $3Dmol.Geometry(!0), E.imposter = !0, w = new $3Dmol.Geometry(!0, !0), w.imposter = !0, w.sphereGeometry = E, w.drawnCaps = {}) : (l.supportsAIA ? (t = B, E = new $3Dmol.Geometry(!1, !0, !0), E.instanced = !0) : E = new $3Dmol.Geometry(!0), w = new $3Dmol.Geometry(!0));
                var N, H, X, U, T = {},
                    G = [Number.POSITIVE_INFINITY,
                        Number.NEGATIVE_INFINITY
                    ];
                N = 0;
                for (X = d.length; N < X; N++) {
                    var ba = d[N];
                    if (ba && ba.style) {
                        (ba.clickable || ba.hoverable) && void 0 === ba.intersectionShape && (ba.intersectionShape = {
                            sphere: [],
                            cylinder: [],
                            line: [],
                            triangle: []
                        });
                        U = {
                            line: void 0,
                            cross: void 0,
                            stick: void 0,
                            sphere: void 0
                        };
                        for (H in U) U[H] = ba.style[H] ? ba.style[H].opacity ? parseFloat(ba.style[H].opacity) : 1 : void 0, T[H] ? void 0 != U[H] && T[H] != U[H] && (console.log("Warning: " + H + " opacity is ambiguous"), T[H] = 1) : T[H] = U[H];
                        t(ba, E);
                        var aa = ba,
                            ga = h;
                        if (aa.style.cross) {
                            var pa =
                                aa.style.cross;
                            if (!pa.hidden) {
                                var va = pa.linewidth || 1;
                                ga[va] || (ga[va] = new $3Dmol.Geometry);
                                var da = ga[va].updateGeoGroup(6),
                                    ia = s(aa, pa),
                                    Ba = [
                                        [ia, 0, 0],
                                        [-ia, 0, 0],
                                        [0, ia, 0],
                                        [0, -ia, 0],
                                        [0, 0, ia],
                                        [0, 0, -ia]
                                    ],
                                    la = aa.clickable || aa.hoverable;
                                la && void 0 === aa.intersectionShape && (aa.intersectionShape = {
                                    sphere: [],
                                    cylinder: [],
                                    line: []
                                });
                                for (var Ca = $3Dmol.getColorFromStyle(aa, pa), oa = da.vertexArray, Za = da.colorArray, ra = 0; 6 > ra; ra++) {
                                    var Ia = 3 * da.vertices;
                                    da.vertices++;
                                    oa[Ia] = aa.x + Ba[ra][0];
                                    oa[Ia + 1] = aa.y + Ba[ra][1];
                                    oa[Ia + 2] = aa.z +
                                        Ba[ra][2];
                                    Za[Ia] = Ca.r;
                                    Za[Ia + 1] = Ca.g;
                                    Za[Ia + 2] = Ca.b;
                                    if (la) {
                                        var Ra = new $3Dmol.Vector3(Ba[ra][0], Ba[ra][1], Ba[ra][2]);
                                        Ra.multiplyScalar(.1);
                                        Ra.set(Ra.x + aa.x, Ra.y + aa.y, Ra.z + aa.z);
                                        aa.intersectionShape.line.push(Ra)
                                    }
                                }
                            }
                        }
                        var ea = ba,
                            Wa = d,
                            Na = q;
                        if (ea.style.line) {
                            var Ja = ea.style.line;
                            if (!Ja.hidden) {
                                var Oa = Ja.linewidth || 1;
                                Na[Oa] || (Na[Oa] = new $3Dmol.Geometry);
                                for (var ma = Na[Oa].updateGeoGroup(6 * ea.bonds.length), ja = ma.vertexArray, na = ma.colorArray, Ha = 0; Ha < ea.bonds.length; Ha++) {
                                    var Sa = Wa[ea.bonds[Ha]];
                                    if (Sa.style.line &&
                                        !(ea.serial >= Sa.serial)) {
                                        var Ea = new $3Dmol.Vector3(ea.x, ea.y, ea.z),
                                            Pa = new $3Dmol.Vector3(Sa.x, Sa.y, Sa.z),
                                            ab = Ea.clone().add(Pa).multiplyScalar(.5),
                                            lb = !1;
                                        if (ea.clickable || ea.hoverable) void 0 === ea.intersectionShape && (ea.intersectionShape = {
                                            sphere: [],
                                            cylinder: [],
                                            line: [],
                                            triangle: []
                                        }), ea.intersectionShape.line.push(Ea), ea.intersectionShape.line.push(Pa);
                                        var xa = $3Dmol.getColorFromStyle(ea, ea.style.line),
                                            Ta = $3Dmol.getColorFromStyle(Sa, Sa.style.line);
                                        if (ea.bondStyles && ea.bondStyles[Ha]) {
                                            var $a = ea.bondStyles[Ha];
                                            if (!$a.iswire) continue;
                                            $a.radius && (bondR = $a.radius);
                                            $a.singleBond && (lb = !0);
                                            "undefined" != typeof $a.color1 && (xa = $3Dmol.CC.color($a.color1));
                                            "undefined" != typeof $a.color2 && (Ta = $3Dmol.CC.color($a.color2))
                                        }
                                        var sa = 3 * ma.vertices;
                                        if (1 < ea.bondOrder[Ha] && 4 > ea.bondOrder[Ha] && !lb) {
                                            var eb = g(ea, Sa, Ha),
                                                Qa = Pa.clone();
                                            Qa.sub(Ea);
                                            if (2 == ea.bondOrder[Ha])
                                                if (eb.multiplyScalar(.1), p1a = Ea.clone(), p1a.add(eb), p1b = Ea.clone(), p1b.sub(eb), p2a = p1a.clone(), p2a.add(Qa), p2b = p1b.clone(), p2b.add(Qa), xa == Ta) ma.vertices += 4, M(ja, na,
                                                    sa, p1a, p2a, xa), M(ja, na, sa + 6, p1b, p2b, xa);
                                                else {
                                                    ma.vertices += 8;
                                                    Qa.multiplyScalar(.5);
                                                    var bb = p1a.clone();
                                                    bb.add(Qa);
                                                    var cb = p1b.clone();
                                                    cb.add(Qa);
                                                    M(ja, na, sa, p1a, bb, xa);
                                                    M(ja, na, sa + 6, bb, p2a, Ta);
                                                    M(ja, na, sa + 12, p1b, cb, xa);
                                                    M(ja, na, sa + 18, cb, p2b, Ta)
                                                }
                                            else 3 == ea.bondOrder[Ha] && (eb.multiplyScalar(.1), p1a = Ea.clone(), p1a.add(eb), p1b = Ea.clone(), p1b.sub(eb), p2a = p1a.clone(), p2a.add(Qa), p2b = p1b.clone(), p2b.add(Qa), xa == Ta ? (ma.vertices += 6, M(ja, na, sa, Ea, Pa, xa), M(ja, na, sa + 6, p1a, p2a, xa), M(ja, na, sa + 12, p1b, p2b, xa)) : (ma.vertices +=
                                                12, Qa.multiplyScalar(.5), bb = p1a.clone(), bb.add(Qa), cb = p1b.clone(), cb.add(Qa), M(ja, na, sa, Ea, ab, xa), M(ja, na, sa + 6, ab, Pa, Ta), M(ja, na, sa + 12, p1a, bb, xa), M(ja, na, sa + 18, bb, p2a, Ta), M(ja, na, sa + 24, p1b, cb, xa), M(ja, na, sa + 30, cb, p2b, Ta)))
                                        } else xa == Ta ? (ma.vertices += 2, M(ja, na, sa, Ea, Pa, xa)) : (ma.vertices += 4, M(ja, na, sa, Ea, ab, xa), M(ja, na, sa + 6, ab, Pa, Ta))
                                    }
                                }
                            }
                        }
                        var ca = ba,
                            Fb = d,
                            ka = w;
                        if (ca.style.stick) {
                            var mb = ca.style.stick;
                            if (!mb.hidden) {
                                var hb = mb.radius || .25,
                                    Da = hb,
                                    zb = mb.singleBonds || !1,
                                    ib = 0,
                                    jb = 0,
                                    ta = $3Dmol.getColorFromStyle(ca,
                                        mb),
                                    ua = void 0,
                                    Ka = void 0;
                                !ca.capDrawn && 4 > ca.bonds.length && (ib = 2);
                                var qa = $3Dmol.GLDraw.drawCylinder;
                                ka.imposter && (qa = I);
                                for (var wa = 0; wa < ca.bonds.length; wa++) {
                                    var ha = Fb[ca.bonds[wa]];
                                    if (ca.serial < ha.serial) {
                                        var Ab = ha.style;
                                        if (Ab.stick) {
                                            var Ua = $3Dmol.getColorFromStyle(ha, Ab.stick),
                                                Da = hb,
                                                db = zb;
                                            if (ca.bondStyles && ca.bondStyles[wa]) {
                                                var La = ca.bondStyles[wa];
                                                if (La.iswire) continue;
                                                La.radius && (Da = La.radius);
                                                La.singleBond && (db = !0);
                                                "undefined" != typeof La.color1 && (ta = $3Dmol.CC.color(La.color1));
                                                "undefined" != typeof La.color2 &&
                                                    (Ua = $3Dmol.CC.color(La.color2))
                                            }
                                            var ya = new $3Dmol.Vector3(ca.x, ca.y, ca.z),
                                                Ma = new $3Dmol.Vector3(ha.x, ha.y, ha.z);
                                            if (1 === ca.bondOrder[wa] || db) {
                                                if (!ha.capDrawn && 4 > ha.bonds.length && (jb = 2), ta != Ua ? (ua = (new $3Dmol.Vector3).addVectors(ya, Ma).multiplyScalar(.5), qa(ka, ya, ua, Da, ta, ib, 0), qa(ka, ua, Ma, Da, Ua, 0, jb)) : qa(ka, ya, Ma, Da, ta, ib, jb), ca.clickable || ha.clickable) {
                                                    ua = (new $3Dmol.Vector3).addVectors(ya, Ma).multiplyScalar(.5);
                                                    if (ca.clickable || ca.hoverable) {
                                                        var Gb = new $3Dmol.Cylinder(ya, ua, Da),
                                                            Hb = new $3Dmol.Sphere(ya,
                                                                Da);
                                                        ca.intersectionShape.cylinder.push(Gb);
                                                        ca.intersectionShape.sphere.push(Hb)
                                                    }
                                                    if (ha.clickable || ha.hoverable) {
                                                        var Ib = new $3Dmol.Cylinder(Ma, ua, Da),
                                                            Jb = new $3Dmol.Sphere(Ma, Da);
                                                        ha.intersectionShape.cylinder.push(Ib);
                                                        ha.intersectionShape.sphere.push(Jb)
                                                    }
                                                }
                                            } else if (1 < ca.bondOrder[wa]) {
                                                var Xa = 0,
                                                    Ya = 0;
                                                Da != hb && (Ya = Xa = 2);
                                                var fb = Ma.clone(),
                                                    Va = null;
                                                fb.sub(ya);
                                                var fa, za, Aa, Fa, Ga, Va = g(ca, ha, wa);
                                                if (2 == ca.bondOrder[wa]) {
                                                    if (fa = Da / 2.5, Va = g(ca, ha, wa), Va.multiplyScalar(1.5 * fa), za = ya.clone(), za.add(Va), Aa = ya.clone(),
                                                        Aa.sub(Va), Fa = za.clone(), Fa.add(fb), Ga = Aa.clone(), Ga.add(fb), ta != Ua ? (ua = (new $3Dmol.Vector3).addVectors(za, Fa).multiplyScalar(.5), Ka = (new $3Dmol.Vector3).addVectors(Aa, Ga).multiplyScalar(.5), qa(ka, za, ua, fa, ta, Xa, 0), qa(ka, ua, Fa, fa, Ua, 0, Ya), qa(ka, Aa, Ka, fa, ta, Xa, 0), qa(ka, Ka, Ga, fa, Ua, 0, Ya)) : (qa(ka, za, Fa, fa, ta, Xa, Ya), qa(ka, Aa, Ga, fa, ta, Xa, Ya)), ca.clickable || ha.clickable) {
                                                        ua = (new $3Dmol.Vector3).addVectors(za, Fa).multiplyScalar(.5);
                                                        Ka = (new $3Dmol.Vector3).addVectors(Aa, Ga).multiplyScalar(.5);
                                                        if (ca.clickable ||
                                                            ca.hoverable) {
                                                            var qb = new $3Dmol.Cylinder(za, ua, fa),
                                                                rb = new $3Dmol.Cylinder(Aa, Ka, fa);
                                                            ca.intersectionShape.cylinder.push(qb);
                                                            ca.intersectionShape.cylinder.push(rb)
                                                        }
                                                        if (ha.clickable || ha.hoverable) {
                                                            var sb = new $3Dmol.Cylinder(Fa, ua, fa),
                                                                tb = new $3Dmol.Cylinder(Ga, Ka, fa);
                                                            ha.intersectionShape.cylinder.push(sb);
                                                            ha.intersectionShape.cylinder.push(tb)
                                                        }
                                                    }
                                                } else if (3 == ca.bondOrder[wa] && (fa = Da / 4, Va.cross(fb), Va.normalize(), Va.multiplyScalar(3 * fa), za = ya.clone(), za.add(Va), Aa = ya.clone(), Aa.sub(Va), Fa = za.clone(), Fa.add(fb),
                                                        Ga = Aa.clone(), Ga.add(fb), ta != Ua ? (ua = (new $3Dmol.Vector3).addVectors(za, Fa).multiplyScalar(.5), Ka = (new $3Dmol.Vector3).addVectors(Aa, Ga).multiplyScalar(.5), mp3 = (new $3Dmol.Vector3).addVectors(ya, Ma).multiplyScalar(.5), qa(ka, za, ua, fa, ta, Xa, 0), qa(ka, ua, Fa, fa, Ua, 0, Ya), qa(ka, ya, mp3, fa, ta, ib, 0), qa(ka, mp3, Ma, fa, Ua, 0, jb), qa(ka, Aa, Ka, fa, ta, Xa, 0), qa(ka, Ka, Ga, fa, Ua, 0, Ya)) : (qa(ka, za, Fa, fa, ta, Xa, Ya), qa(ka, ya, Ma, fa, ta, ib, jb), qa(ka, Aa, Ga, fa, ta, Xa, Ya)), ca.clickable || ha.clickable)) {
                                                    ua = (new $3Dmol.Vector3).addVectors(za,
                                                        Fa).multiplyScalar(.5);
                                                    Ka = (new $3Dmol.Vector3).addVectors(Aa, Ga).multiplyScalar(.5);
                                                    mp3 = (new $3Dmol.Vector3).addVectors(ya, Ma).multiplyScalar(.5);
                                                    if (ca.clickable || ca.hoverable) {
                                                        var qb = new $3Dmol.Cylinder(za.clone(), ua.clone(), fa),
                                                            rb = new $3Dmol.Cylinder(Aa.clone(), Ka.clone(), fa),
                                                            Kb = new $3Dmol.Cylinder(ya.clone(), mp3.clone(), fa);
                                                        ca.intersectionShape.cylinder.push(qb);
                                                        ca.intersectionShape.cylinder.push(rb);
                                                        ca.intersectionShape.cylinder.push(Kb)
                                                    }
                                                    if (ha.clickable || ha.hoverable) {
                                                        var sb = new $3Dmol.Cylinder(Fa.clone(),
                                                                ua.clone(), fa),
                                                            tb = new $3Dmol.Cylinder(Ga.clone(), Ka.clone(), fa),
                                                            Lb = new $3Dmol.Cylinder(Ma.clone(), mp3.clone(), fa);
                                                        ha.intersectionShape.cylinder.push(sb);
                                                        ha.intersectionShape.cylinder.push(tb);
                                                        ha.intersectionShape.cylinder.push(Lb)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                for (var ub = !1, vb = 0, Bb = !1, wa = 0; wa < ca.bonds.length; wa++) db = zb, ca.bondStyles && ca.bondStyles[wa] && (La = ca.bondStyles[wa], La.singleBond && (db = !0), La.radius && La.radius != hb && (Bb = !0)), (db || 1 == ca.bondOrder[wa]) && vb++;
                                Bb ? 0 < vb && (ub = !0) : 0 == vb && 0 < ca.bonds.length && (ub = !0);
                                ub && (Da =
                                    hb, ka.imposter ? A(ka.sphereGeometry, ca, Da, ta) : $3Dmol.GLDraw.drawSphere(ka, ca, Da, ta))
                            }
                        }
                        "undefined" === typeof ba.style.cartoon || ba.style.cartoon.hidden || ("spectrum" !== ba.style.cartoon.color || "number" !== typeof ba.resi || ba.hetflag || (ba.resi < G[0] && (G[0] = ba.resi), ba.resi > G[1] && (G[1] = ba.resi)), f.push(ba))
                    }
                }
                if (0 < f.length) {
                    var Cb = null;
                    G[0] < G[1] && (Cb = new $3Dmol.Gradient.Sinebow(G[1], G[0]));
                    $3Dmol.drawCartoon(m, f, Cb)
                }
                if (E && 0 < E.vertices) {
                    E.initTypedArrays();
                    var gb = null;
                    if (E.imposter) gb = new $3Dmol.SphereImposterMaterial({
                        ambient: 0,
                        vertexColors: !0,
                        reflectivity: 0
                    });
                    else if (E.instanced) {
                        var kb = new $3Dmol.Geometry(!0);
                        $3Dmol.GLDraw.drawSphere(kb, {
                            x: 0,
                            y: 0,
                            z: 0
                        }, 1, new $3Dmol.Color(.5, .5, .5));
                        kb.initTypedArrays();
                        gb = new $3Dmol.InstancedMaterial({
                            sphereMaterial: new $3Dmol.MeshLambertMaterial({
                                ambient: 0,
                                vertexColors: !0,
                                reflectivity: 0
                            }),
                            sphere: kb
                        })
                    } else gb = new $3Dmol.MeshLambertMaterial({
                        ambient: 0,
                        vertexColors: !0,
                        reflectivity: 0
                    });
                    1 > T.sphere && 0 <= T.sphere && (gb.transparent = !0, gb.opacity = T.sphere);
                    kb = new $3Dmol.Mesh(E, gb);
                    m.add(kb)
                }
                if (0 <
                    w.vertices) {
                    if (w.imposter) {
                        var Mb = new $3Dmol.StickImposterMaterial({
                            ambient: 0,
                            vertexColors: !0,
                            reflectivity: 0
                        });
                        w.initTypedArrays();
                        var Db = new $3Dmol.Mesh(w, Mb)
                    } else {
                        var nb = new $3Dmol.MeshLambertMaterial({
                            vertexColors: !0,
                            ambient: 0,
                            reflectivity: 0
                        });
                        1 > T.stick && 0 <= T.stick && (nb.transparent = !0, nb.opacity = T.stick);
                        w.initTypedArrays();
                        nb.wireframe && w.setUpWireframe();
                        Db = new $3Dmol.Mesh(w, nb)
                    }
                    m.add(Db)
                }
                for (N in q)
                    if (q.hasOwnProperty(N)) {
                        var wb = N,
                            xb = new $3Dmol.LineBasicMaterial({
                                linewidth: wb,
                                vertexColors: !0
                            });
                        1 > T.line && 0 <= T.line && (xb.transparent = !0, xb.opacity = T.line);
                        q[N].initTypedArrays();
                        var Nb = new $3Dmol.Line(q[N], xb, $3Dmol.LinePieces);
                        m.add(Nb)
                    }
                for (N in h)
                    if (h.hasOwnProperty(N)) {
                        var wb = N,
                            yb = new $3Dmol.LineBasicMaterial({
                                linewidth: wb,
                                vertexColors: !0
                            });
                        1 > T.cross && 0 <= T.cross && (yb.transparent = !0, yb.opacity = T.cross);
                        h[N].initTypedArrays();
                        var Ob = new $3Dmol.Line(h[N], yb, $3Dmol.LinePieces);
                        m.add(Ob)
                    }
                if (u && e.symmetries && 0 < e.symmetries.length) {
                    var Eb = new $3Dmol.Object3D,
                        ob;
                    for (ob = 0; ob < e.symmetries.length; ob++) {
                        var pb =
                            new $3Dmol.Object3D,
                            pb = m.clone();
                        pb.matrix.copy(e.symmetries[ob]);
                        pb.matrixAutoUpdate = !1;
                        Eb.add(pb)
                    }
                    y = Eb
                } else y = m;
                z && (b.remove(z), z = null);
                z = y.clone();
                D && (z.setVisible(!1), y.setVisible(!1));
                b.add(z)
            }
        };
        this.removegl = function(b) {
            z && (void 0 !== z.geometry && z.geometry.dispose(), void 0 !== z.material && z.material.dispose(), b.remove(z), z = null);
            y = null
        };
        this.hide = function() {
            D = !0;
            z && z.setVisible(!1);
            y && y.setVisible(!1)
        };
        this.show = function() {
            D = !1;
            z && z.setVisible(!0);
            y && y.setVisible(!0)
        };
        this.addResLabels = function(b,
            c, d) {
            var e = this.selectedAtoms(b, e);
            b = {};
            for (var g = 0; g < e.length; g++) {
                var l = e[g],
                    m = l.chain,
                    f = l.resn + "" + l.resi;
                b[m] || (b[m] = {});
                b[m][f] || (b[m][f] = []);
                b[m][f].push(l)
            }
            d = $.extend(!0, {}, d);
            for (m in b)
                if (b.hasOwnProperty(m)) {
                    var u = b[m];
                    for (f in u)
                        if (u.hasOwnProperty(f)) {
                            for (var e = u[f], y = new $3Dmol.Vector3(0, 0, 0), g = 0; g < e.length; g++) l = e[g], y.x += l.x, y.y += l.y, y.z += l.z;
                            y.divideScalar(e.length);
                            d.position = y;
                            c.addLabel(f, d)
                        }
                }
        };
        this.setCoordinates = function(c, d) {
            d = d || "";
            if (!c) return [];
            if (/\.gz$/.test(d)) {
                d = d.replace(/\.gz$/,
                    "");
                try {
                    c = pako.inflate(c, {
                        to: "string"
                    })
                } catch (e) {
                    console.log(e)
                }
            }
            if ("mdcrd" == d || "inpcrd" == d || "pdb" == d) {
                q = [];
                for (var g = x.length, l = b.parseCrd(c, d), m = 0; m < l.length;) {
                    var f = [];
                    for (i = 0; i < g; i++) f[i] = x[i];
                    for (i = 0; i < g; i++) f[i].x = l[m++], f[i].y = l[m++], f[i].z = l[m++];
                    q.push(f)
                }
                x = q[0];
                return q
            }
            return []
        }
    }
    var c = {
            line: {}
        },
        d = {
            H: 1.2,
            Li: 1.82,
            LI: 1.82,
            Na: 2.27,
            NA: 2.27,
            K: 2.75,
            C: 1.7,
            N: 1.55,
            O: 1.52,
            F: 1.47,
            P: 1.8,
            S: 1.8,
            CL: 1.75,
            Cl: 1.75,
            BR: 1.85,
            Br: 1.85,
            SE: 1.9,
            Se: 1.9,
            ZN: 1.39,
            Zn: 1.39,
            CU: 1.4,
            Cu: 1.4,
            NI: 1.63,
            Ni: 1.63
        },
        h = "resn x y z color surfaceColor elem hetflag chain resi icode rescode serial atom bonds ss singleBonds bondOrder properties b pdbline clickable callback invert".split(" ").concat("model bonds predicate invert byres expand within".split(" ")),
        f = "line cross stick sphere cartoon colorfunc".split(" ");
    b.parseCrd = function(b, c) {
        var d = [],
            f = 0;
        if ("pdb" == c)
            for (var h = b.indexOf("\nATOM"); - 1 != h;) {
                for (;
                    "\nATOM" == b.slice(h, h + 5) || "\nHETATM" == b.slice(h, h + 7);) d[f++] = parseFloat(b.slice(h + 31, h + 39)), d[f++] = parseFloat(b.slice(h + 39, h + 47)), d[f++] = parseFloat(b.slice(h + 47, h + 55)), h = b.indexOf("\n", h + 54), "\nTER" == b.slice(h, h + 4) && (h = b.indexOf("\n", h + 5));
                h = b.indexOf("\nATOM", h)
            } else {
                var y = 8,
                    h = b.indexOf("\n");
                b = b.slice(h + 1);
                "inpcrd" == c && (h = b.indexOf("\n"), b = b.slice(h +
                    1), y = 12);
                for (h = 0; h < b.length - y;) "\n" == b[h] && h++, "\n" != b[h] && (d[f] = parseFloat(b.slice(h, h + y)), h += y, f++)
            }
        return d
    };
    b.parseMolData = function(b, c, d) {
        c = c || "";
        if (!b) return [];
        if (/\.gz$/.test(c)) {
            c = c.replace(/\.gz$/, "");
            try {
                b = pako.inflate(b, {
                    to: "string"
                })
            } catch (f) {
                console.log(f)
            }
        }
        "undefined" == typeof $3Dmol.Parsers[c] && (c = c.split(".").pop(), "undefined" == typeof $3Dmol.Parsers[c] && (console.log("Unknown format: " + c), c = b.match(/^@<TRIPOS>MOLECULE/gm) ? "mol2" : b.match(/^HETATM/gm) || b.match(/^ATOM/gm) ? "pdb" : b.match(/^.*\n.*\n.\s*(\d+)\s+(\d+)/gm) ?
            "sdf" : b.match(/^%VERSION\s+\VERSION_STAMP/gm) ? "prmtop" : "xyz", console.log("Best guess: " + c)));
        return (0, $3Dmol.Parsers[c])(b, d)
    };
    b.setAtomDefaults = function(b, d) {
        for (var f = 0; f < b.length; f++) {
            var h = b[f];
            h && (h.style = h.style || c, h.color = h.color || ElementColors[h.elem] || defaultColor, h.model = d, h.clickable || h.hoverable) && (h.intersectionShape = {
                sphere: [],
                cylinder: [],
                line: [],
                triangle: []
            })
        }
    };
    return b
}();
$3Dmol.GLShape = function() {
    function b(b) {
        b = b || {};
        $3Dmol.ShapeIDCount++;
        this.boundingSphere = new $3Dmol.Sphere;
        this.intersectionShape = {
            sphere: [],
            cylinder: [],
            line: [],
            triangle: []
        };
        h(this, b);
        var w = [],
            t = null,
            x = null,
            q = new $3Dmol.Geometry(!0),
            D = new $3Dmol.Geometry(!0);
        this.updateStyle = function(c) {
            for (var d in c) b[d] = c[d];
            h(this, b)
        };
        this.addCustom = function(b) {
            b.vertexArr = b.vertexArr || [];
            b.faceArr = b.faceArr || [];
            b.normalArr = b.normalArr || [];
            c(this, q, b)
        };
        this.addSphere = function(b) {
            b.center = b.center || {
                x: 0,
                y: 0,
                z: 0
            };
            b.radius = b.radius ? $3Dmol.Math.clamp(b.radius, 0, Infinity) : 1.5;
            b.color = $3Dmol.CC.color(b.color);
            this.intersectionShape.sphere.push(new $3Dmol.Sphere(b.center, b.radius));
            $3Dmol.GLDraw.drawSphere(q, b.center, b.radius, b.color);
            w.push({
                centroid: new $3Dmol.Vector3(b.center.x, b.center.y, b.center.z)
            });
            b = q.updateGeoGroup(0);
            d(this.boundingSphere, w, b.vertexArray)
        };
        this.addCylinder = function(b) {
            b.start = b.start || {};
            b.end = b.end || {};
            var c = new $3Dmol.Vector3(b.start.x || 0, b.start.y || 0, b.start.z || 0),
                m = new $3Dmol.Vector3(b.end.x,
                    b.end.y || 0, b.end.z || 0);
            "undefined" == typeof m.x && (m.x = 3);
            var e = b.radius || .1,
                l = $3Dmol.CC.color(b.color);
            this.intersectionShape.cylinder.push(new $3Dmol.Cylinder(c, m, e));
            $3Dmol.GLDraw.drawCylinder(q, c, m, e, l, b.fromCap, b.toCap);
            b = new $3Dmol.Vector3;
            w.push({
                centroid: b.addVectors(c, m).multiplyScalar(.5)
            });
            c = q.updateGeoGroup(0);
            d(this.boundingSphere, w, c.vertexArray)
        };
        this.addLine = function(b) {
            b.start = b.start || {};
            b.end = b.end || {};
            var c = new $3Dmol.Vector3(b.start.x || 0, b.start.y || 0, b.start.z || 0),
                d = new $3Dmol.Vector3(b.end.x,
                    b.end.y || 0, b.end.z || 0);
            "undefined" == typeof d.x && (d.x = 3);
            b = q.updateGeoGroup(2);
            var e = b.vertices,
                l = 3 * e,
                f = b.vertexArray;
            f[l] = c.x;
            f[l + 1] = c.y;
            f[l + 2] = c.z;
            f[l + 3] = d.x;
            f[l + 4] = d.y;
            f[l + 5] = d.z;
            b.vertices += 2;
            c = b.lineArray;
            d = b.lineidx;
            c[d] = e;
            c[d + 1] = e + 1;
            b.lineidx += 2
        };
        this.addArrow = function(b) {
            b.start = b.start || {};
            b.end = b.end || {};
            b.start = new $3Dmol.Vector3(b.start.x || 0, b.start.y || 0, b.start.z || 0);
            if (b.dir instanceof $3Dmol.Vector3 && b.length instanceof number) {
                var c = b.dir.clone().multiplyScalar(b.length).add(start);
                b.end = c
            } else b.end = new $3Dmol.Vector3(b.end.x, b.end.y || 0, b.end.z || 0), "undefined" == typeof b.end.x && (b.end.x = 3);
            b.radius = b.radius || .1;
            b.radiusRatio = b.radiusRatio || 1.618034;
            b.mid = 0 < b.mid && 1 > b.mid ? b.mid : .618034;
            var m = b.start,
                e = b.end,
                l = b.radius,
                f = b.radiusRatio,
                h = b.mid;
            if (m && e) {
                var c = q.updateGeoGroup(51),
                    t = e.clone();
                t.sub(m).multiplyScalar(h);
                var s = m.clone().add(t),
                    h = t.clone().negate();
                this.intersectionShape.cylinder.push(new $3Dmol.Cylinder(m.clone(), s.clone(), l));
                this.intersectionShape.sphere.push(new $3Dmol.Sphere(m.clone(),
                    l));
                var g = [];
                g[0] = t.clone();
                1E-4 < Math.abs(g[0].x) ? g[0].y += 1 : g[0].x += 1;
                g[0].cross(t);
                g[0].normalize();
                g[0] = g[0];
                g[4] = g[0].clone();
                g[4].crossVectors(g[0], t);
                g[4].normalize();
                g[8] = g[0].clone().negate();
                g[12] = g[4].clone().negate();
                g[2] = g[0].clone().add(g[4]).normalize();
                g[6] = g[4].clone().add(g[8]).normalize();
                g[10] = g[8].clone().add(g[12]).normalize();
                g[14] = g[12].clone().add(g[0]).normalize();
                g[1] = g[0].clone().add(g[2]).normalize();
                g[3] = g[2].clone().add(g[4]).normalize();
                g[5] = g[4].clone().add(g[6]).normalize();
                g[7] = g[6].clone().add(g[8]).normalize();
                g[9] = g[8].clone().add(g[10]).normalize();
                g[11] = g[10].clone().add(g[12]).normalize();
                g[13] = g[12].clone().add(g[14]).normalize();
                g[15] = g[14].clone().add(g[0]).normalize();
                var x = c.vertices,
                    p = c.vertexArray,
                    B = c.faceArray,
                    A = c.normalArray,
                    D = c.lineArray,
                    I, H, F;
                H = 0;
                for (F = g.length; H < F; ++H) {
                    I = 3 * (x + 3 * H);
                    var P = g[H].clone().multiplyScalar(l).add(m),
                        C = g[H].clone().multiplyScalar(l).add(s),
                        L = g[H].clone().multiplyScalar(l * f).add(s);
                    p[I] = P.x;
                    p[I + 1] = P.y;
                    p[I + 2] = P.z;
                    p[I + 3] = C.x;
                    p[I +
                        4] = C.y;
                    p[I + 5] = C.z;
                    p[I + 6] = L.x;
                    p[I + 7] = L.y;
                    p[I + 8] = L.z;
                    0 < H && (I = new $3Dmol.Vector3(p[I - 3], p[I - 2], p[I - 1]), P = e.clone(), C = s.clone(), L = new $3Dmol.Vector3(L.x, L.y, L.z), this.intersectionShape.triangle.push(new $3Dmol.Triangle(L, P, I)), this.intersectionShape.triangle.push(new $3Dmol.Triangle(I.clone(), C, L.clone())))
                }
                c.vertices += 48;
                I = 3 * c.vertices;
                p[I] = m.x;
                p[I + 1] = m.y;
                p[I + 2] = m.z;
                p[I + 3] = s.x;
                p[I + 4] = s.y;
                p[I + 5] = s.z;
                p[I + 6] = e.x;
                p[I + 7] = e.y;
                p[I + 8] = e.z;
                c.vertices += 3;
                var O, Q, J, R, S, V, Z, W, Y = c.vertices - 3,
                    X = c.vertices - 2,
                    U = c.vertices -
                    1,
                    T = 3 * Y,
                    G = 3 * X,
                    ba = 3 * U;
                H = 0;
                for (F = g.length - 1; H < F; ++H) O = x + 3 * H, m = c.faceidx, e = c.lineidx, l = O, I = 3 * l, f = O + 1, P = 3 * f, s = O + 2, C = 3 * s, p = O + 4, Q = 3 * p, L = O + 5, J = 3 * L, O += 3, R = 3 * O, S = V = g[H], Z = W = g[H + 1], A[I] = S.x, A[P] = V.x, A[R] = W.x, A[I + 1] = S.y, A[P + 1] = V.y, A[R + 1] = W.y, A[I + 2] = S.z, A[P + 2] = V.z, A[R + 2] = W.z, A[P] = V.x, A[Q] = Z.x, A[R] = W.x, A[P + 1] = V.y, A[Q + 1] = Z.y, A[R + 1] = W.y, A[P + 2] = V.z, A[Q + 2] = Z.z, A[R + 2] = W.z, A[C] = V.x, A[J] = Z.x, A[C + 1] = V.y, A[J + 1] = Z.y, A[C + 2] = V.z, A[J + 2] = Z.z, B[m] = l, B[m + 1] = f, B[m + 2] = O, B[m + 3] = f, B[m + 4] = p, B[m + 5] = O, B[m + 6] = l, B[m + 7] = O, B[m + 8] = Y, B[m +
                    9] = s, B[m + 10] = X, B[m + 11] = L, B[m + 12] = s, B[m + 13] = U, B[m + 14] = L, D[e] = l, D[e + 1] = f, D[e + 2] = l, D[e + 3] = O, D[e + 4] = p, D[e + 5] = O, D[e + 6] = l, D[e + 7] = O, D[e + 8] = s, D[e + 9] = f, D[e + 10] = s, D[e + 11] = L, D[e + 12] = p, D[e + 13] = L, D[e + 14] = s, D[e + 15] = U, D[e + 16] = s, D[e + 17] = L, D[e + 18] = U, D[e + 19] = L, c.faceidx += 15, c.lineidx += 20;
                x = [x + 45, x + 46, x + 1, x, x + 47, x + 2];
                m = c.faceidx;
                e = c.lineidx;
                l = x[0];
                I = 3 * l;
                f = x[1];
                P = 3 * f;
                s = x[4];
                C = 3 * s;
                p = x[2];
                Q = 3 * p;
                L = x[5];
                J = 3 * L;
                O = x[3];
                R = 3 * O;
                S = V = g[15];
                Z = W = g[0];
                A[I] = S.x;
                A[P] = V.x;
                A[R] = W.x;
                A[I + 1] = S.y;
                A[P + 1] = V.y;
                A[R + 1] = W.y;
                A[I + 2] = S.z;
                A[P + 2] = V.z;
                A[R + 2] = W.z;
                A[P] = V.x;
                A[Q] = Z.x;
                A[R] = W.x;
                A[P + 1] = V.y;
                A[Q + 1] = Z.y;
                A[R + 1] = W.y;
                A[P + 2] = V.z;
                A[Q + 2] = Z.z;
                A[R + 2] = W.z;
                A[C] = V.x;
                A[J] = Z.x;
                A[C + 1] = V.y;
                A[J + 1] = Z.y;
                A[C + 2] = V.z;
                A[J + 2] = Z.z;
                t.normalize();
                h.normalize();
                A[T] = h.x;
                A[G] = A[ba] = t.x;
                A[T + 1] = h.y;
                A[G + 1] = A[ba + 1] = t.y;
                A[T + 2] = h.z;
                A[G + 2] = A[ba + 2] = t.z;
                B[m] = l;
                B[m + 1] = f;
                B[m + 2] = O;
                B[m + 3] = f;
                B[m + 4] = p;
                B[m + 5] = O;
                B[m + 6] = l;
                B[m + 7] = O;
                B[m + 8] = Y;
                B[m + 9] = s;
                B[m + 10] = X;
                B[m + 11] = L;
                B[m + 12] = s;
                B[m + 13] = U;
                B[m + 14] = L;
                D[e] = l;
                D[e + 1] = f;
                D[e + 2] = l;
                D[e + 3] = O;
                D[e + 4] = p;
                D[e + 5] = O;
                D[e + 6] = l;
                D[e + 7] = O;
                D[e + 8] = s;
                D[e + 9] =
                    f;
                D[e + 10] = s;
                D[e + 11] = L;
                D[e + 12] = p;
                D[e + 13] = L;
                D[e + 14] = s;
                D[e + 15] = U;
                D[e + 16] = s;
                D[e + 17] = L;
                D[e + 18] = U;
                D[e + 19] = L;
                c.faceidx += 15;
                c.lineidx += 20
            }
            c = new $3Dmol.Vector3;
            w.push({
                centroid: c.addVectors(b.start, b.end).multiplyScalar(.5)
            });
            b = q.updateGeoGroup(0);
            d(this.boundingSphere, w, b.vertexArray)
        };
        this.addIsosurface = function(b, d, m) {
            var e = void 0 !== d.isoval && "number" === typeof d.isoval ? d.isoval : 0,
                l = d.voxel ? !0 : !1,
                f = void 0 === d.smoothness ? 1 : d.smoothness,
                h = b.size.x,
                t = b.size.y,
                s = b.size.z,
                g = new Int16Array(h * t * s),
                x = b.data,
                p, w;
            p = 0;
            for (w = g.length; p < w; ++p) g[p] = -1;
            g = new Uint8Array(h * t * s);
            p = 0;
            for (w = x.length; p < w; ++p) 0 < (0 <= e ? x[p] - e : e - x[p]) && (g[p] |= 2);
            e = [];
            x = [];
            $3Dmol.MarchingCube.march(g, e, x, {
                fulltable: !0,
                voxel: l,
                unitCube: b.unit,
                origin: b.origin,
                matrix: b.matrix,
                nX: h,
                nY: t,
                nZ: s
            });
            !l && 0 < f && $3Dmol.MarchingCube.laplacianSmooth(f, e, x);
            l = [];
            f = [];
            h = [];
            if (void 0 !== d.selectedRegion) {
                t = d.selectedRegion[0];
                s = d.selectedRegion[0];
                g = d.selectedRegion[0];
                w = d.selectedRegion[0];
                var D = d.selectedRegion[0],
                    K = d.selectedRegion[0];
                for (p = 0; p < d.selectedRegion.length; p++) d.selectedRegion[p].x >
                    t.x ? t = d.selectedRegion[p] : d.selectedRegion[p].x < w.x && (w = d.selectedRegion[p]), d.selectedRegion[p].y > s.y ? s = d.selectedRegion[p] : d.selectedRegion[p].y < D.y && (D = d.selectedRegion[p]), d.selectedRegion[p].z > g.z ? g = d.selectedRegion[p] : d.selectedRegion[p].z < K.z && (K = d.selectedRegion[p]);
                p = d.radius;
                t.x += p;
                w.x -= p;
                D.y -= p;
                s.y += p;
                K.z -= p;
                g.z += p;
                for (p = 0; p < e.length; p++) {
                    var I;
                    if (I = e[p].x > w.x && e[p].x < t.x && e[p].y > D.y && e[p].y < s.y && e[p].z > K.z && e[p].z < g.z) a: {
                        I = e[p];
                        for (var H = d.selectedRegion, F = d.radius, P = 0; P < H.length; P++) {
                            var C =
                                H[P],
                                L = I;
                            if (Math.sqrt(Math.pow(C.x - L.x, 2) + Math.pow(C.y - L.y, 2) + Math.pow(C.z - L.z, 2)) <= F) {
                                I = !0;
                                break a
                            }
                        }
                        I = !1
                    }
                    I ? (l.push(f.length), f.push(e[p])) : l.push(-1)
                }
                for (p = 0; p + 2 < x.length; p += 3) - 1 !== l[x[p]] && -1 !== l[x[p + 1]] && -1 !== l[x[p + 2]] && (h.push(x[p] - (x[p] - l[x[p]])), h.push(x[p + 1] - (x[p + 1] - l[x[p + 1]])), h.push(x[p + 2] - (x[p + 2] - l[x[p + 2]])));
                e = f;
                x = h
            }
            c(this, q, {
                vertexArr: e,
                faceArr: x,
                normalArr: [],
                clickable: d.clickable,
                hoverable: d.hoverable
            });
            this.updateStyle(d);
            p = new $3Dmol.Vector3(b.origin.x, b.origin.y, b.origin.z);
            x = new $3Dmol.Vector3(b.size.x *
                b.unit.x, b.size.y * b.unit.y, b.size.z * b.unit.z);
            b = new $3Dmol.Vector3(0, 0, 0);
            d = p.clone();
            x = p.clone().add(x);
            for (p = 0; p < e.length; p++) b.add(e[p]), d.max(e[p]), x.min(e[p]);
            b.divideScalar(e.length);
            p = b.distanceTo(x);
            d = b.distanceTo(d);
            this.boundingSphere.center = b;
            this.boundingSphere.radius = Math.max(p, d);
            console.log(e.length);
            "function" == typeof m && m()
        };
        this.addVolumetricData = function(b, c, d) {
            b = new $3Dmol.VolumeData(b, c);
            this.addIsosurface(b, d)
        };
        this.globj = function(b) {
            x && (b.remove(x), x = null);
            if (!this.hidden) {
                var c =
                    q.updateGeoGroup(0);
                0 < c.vertices && c.truncateArrayBuffers(!0, !0);
                q.initTypedArrays();
                if ("undefined" != typeof this.color) {
                    (c = this.color) || $3Dmol.CC.color(c);
                    q.colorsNeedUpdate = !0;
                    var d, e, l;
                    c.constructor !== Array && (d = c.r, e = c.g, l = c.b);
                    for (var f in q.geometryGroups)
                        for (var h = q.geometryGroups[f], w = h.colorArray, s = 0, h = h.vertices; s < h; ++s) c.constructor === Array && (l = c[s], d = l.r, e = l.g, l = l.b), w[3 * s] = d, w[3 * s + 1] = e, w[3 * s + 2] = l
                }
                t = new $3Dmol.Object3D;
                d = null;
                d = this.side == $3Dmol.DoubleSide ? new $3Dmol.MeshDoubleLambertMaterial({
                    wireframe: this.wireframe,
                    side: this.side,
                    transparent: 1 > this.opacity ? !0 : !1,
                    opacity: this.opacity,
                    wireframeLinewidth: this.linewidth
                }) : new $3Dmol.MeshLambertMaterial({
                    wireframe: this.wireframe,
                    side: this.side,
                    transparent: 1 > this.opacity ? !0 : !1,
                    opacity: this.opacity,
                    wireframeLinewidth: this.linewidth
                });
                d = new $3Dmol.Mesh(q, d);
                t.add(d);
                d = new $3Dmol.LineBasicMaterial({
                    linewidth: this.linewidth,
                    color: this.color
                });
                d = new $3Dmol.Line(D, d, $3Dmol.LinePieces);
                t.add(d);
                x = t.clone();
                b.add(x)
            }
        };
        this.removegl = function(b) {
            x && (void 0 !== x.geometry && x.geometry.dispose(),
                void 0 !== x.material && x.material.dispose(), b.remove(x), x = null);
            t = null
        }
    }
    var c = function(b, c, h) {
            var x = h.faceArr;
            0 !== h.vertexArr.length && 0 !== x.length || console.warn("Error adding custom shape component: No vertices and/or face indices supplied!");
            x = h.color;
            "undefined" == typeof x && (x = b.color);
            for (var x = $3Dmol.CC.color(x), q = $3Dmol.splitMesh(h), D = 0, y = q.length; D < y; D++) {
                var z = b,
                    m = c,
                    e = q[D],
                    l = q[D].colorArr ? q[D].colorArr : x,
                    u = h.clickable,
                    E = m.addGeoGroup(),
                    N = e.vertexArr,
                    s = e.normalArr,
                    e = e.faceArr;
                E.vertices = N.length;
                E.faceidx = e.length;
                var g = void 0,
                    M = void 0,
                    p = void 0,
                    B = void 0,
                    A = M = void 0,
                    K = void 0,
                    I = E.vertexArray,
                    p = E.colorArray;
                if (l.constructor !== Array) var H = l.r,
                    F = l.g,
                    B = l.b;
                A = 0;
                for (K = E.vertices; A < K; ++A) g = 3 * A, M = N[A], I[g] = M.x, I[g + 1] = M.y, I[g + 2] = M.z, l.constructor === Array && (M = l[A], H = M.r, F = M.g, B = M.b), p[g] = H, p[g + 1] = F, p[g + 2] = B;
                if (u)
                    for (A = 0, K = E.faceidx / 3; A < K; ++A) {
                        var g = 3 * A,
                            p = e[g],
                            B = e[g + 1],
                            M = e[g + 2],
                            g = new $3Dmol.Vector3,
                            l = new $3Dmol.Vector3,
                            P = new $3Dmol.Vector3;
                        z.intersectionShape.triangle.push(new $3Dmol.Triangle(g.copy(N[p]),
                            l.copy(N[B]), P.copy(N[M])))
                    }
                if (u) {
                    A = new $3Dmol.Vector3(0, 0, 0);
                    for (F = K = 0; F < m.geometryGroups.length; F++) A.add(m.geometryGroups[F].getCentroid()), K++;
                    A.divideScalar(K);
                    d(z.boundingSphere, {
                        centroid: A
                    }, I)
                }
                E.faceArray = new Uint16Array(e);
                E.truncateArrayBuffers(!0, !0);
                if (s.length < E.vertices) E.setNormals();
                else
                    for (z = E.normalArray = new Float32Array(3 * E.vertices), m = void 0, A = 0, K = E.vertices; A < K; ++A) g = 3 * A, m = s[A], z[g] = m.x, z[g + 1] = m.y, z[g + 2] = m.z;
                E.setLineIndices();
                E.lineidx = E.lineArray.length
            }
        },
        d = function(b, c, d) {
            b.center.set(0,
                0, 0);
            var h, q;
            if (0 < c.length) {
                h = 0;
                for (q = c.length; h < q; ++h) b.center.add(c[h].centroid);
                b.center.divideScalar(c.length)
            }
            c = b.radius * b.radius;
            h = 0;
            for (q = d.length / 3; h < q; h++) {
                var D = b.center.distanceToSquared({
                    x: d[3 * h],
                    y: d[3 * h + 1],
                    z: d[3 * h + 2]
                });
                c = Math.max(c, D)
            }
            b.radius = Math.sqrt(c)
        },
        h = function(b, c) {
            "undefined" != typeof c.color && (b.color = c.color || new $3Dmol.Color, c.color instanceof $3Dmol.Color || (b.color = $3Dmol.CC.color(c.color)));
            b.wireframe = c.wireframe ? !0 : !1;
            b.opacity = c.alpha ? $3Dmol.Math.clamp(c.alpha, 0, 1) : 1;
            "undefined" != typeof c.opacity && (b.opacity = $3Dmol.Math.clamp(c.opacity, 0, 1));
            b.side = void 0 !== c.side ? c.side : $3Dmol.DoubleSide;
            b.linewidth = "undefined" == typeof c.linewidth ? 1 : c.linewidth;
            b.clickable = c.clickable ? !0 : !1;
            b.callback = "function" === typeof c.callback ? c.callback : null;
            b.hoverable = c.hoverable ? !0 : !1;
            b.hover_callback = "function" === typeof c.hover_callback ? c.hover_callback : null;
            b.unhover_callback = "function" === typeof c.unhover_callback ? c.unhover_callback : null;
            b.hidden = c.hidden
        };
    Object.defineProperty(b.prototype,
        "position", {
            get: function() {
                return this.boundingSphere.center
            }
        });
    Object.defineProperty(b.prototype, "x", {
        get: function() {
            return this.boundingSphere.center.x
        }
    });
    Object.defineProperty(b.prototype, "y", {
        get: function() {
            return this.boundingSphere.center.y
        }
    });
    Object.defineProperty(b.prototype, "z", {
        get: function() {
            return this.boundingSphere.center.z
        }
    });
    return b
}();
$3Dmol.ShapeIDCount = 0;
$3Dmol.splitMesh = function(b) {
    if (64E3 > b.vertexArr.length) return [b];
    var c = [{
        vertexArr: [],
        normalArr: [],
        faceArr: []
    }];
    b.colorArr && (c.colorArr = []);
    for (var d = [], h = [], f = 0, w = b.faceArr, t = 0, x = w.length; t < x; t += 3) {
        for (var q = c[f], D = 0; 3 > D; D++) {
            var y = w[t + D];
            d[y] !== f && (d[y] = f, h[y] = q.vertexArr.length, q.vertexArr.push(b.vertexArr[y]), b.normalArr && b.normalArr[y] && q.normalArr.push(b.normalArr[y]), b.colorArr && b.colorArr[y] && q.colorArr.push(b.colorArr[y]));
            q.faceArr.push(h[y])
        }
        64E3 <= q.vertexArr.length && (c.push({
            vertexArr: [],
            normalArr: [],
            faceArr: []
        }), b.colorArr && (c.colorArr = []), f++)
    }
    return c
};
$3Dmol.GLViewer = function() {
    return function(b, c) {
        function d(b) {
            var c = [];
            "undefined" === typeof b && (b = {});
            var d = [],
                g;
            if ("undefined" === typeof b.model)
                for (g = 0; g < e.length; g++) e[g] && d.push(e[g]);
            else d = b.model, $.isArray(d) || (d = [d]);
            for (g = 0; g < d.length; g++) c = c.concat(d[g].selectedAtoms(b));
            return c
        }

        function h(b, c, d, g, l) {
            var m = [];
            if ("undefined" === typeof c.model)
                for (f = 0; f < e.length; f++) e[f] && m.push(e[f]);
            else m = c.model, $.isArray(m) || (m = [m]);
            for (var f = 0; f < m.length; f++)
                if (m[f]) m[f][b](c, d, g, l)
        }

        function f(b) {
            var c =
                new $3Dmol.MeshLambertMaterial;
            c.vertexColors = $3Dmol.VertexColors;
            for (var d in b) "color" !== d && "map" !== d && b.hasOwnProperty(d) && (c[d] = b[d]);
            void 0 !== b.opacity && (c.transparent = 1 === b.opacity ? !1 : !0);
            return c
        }
        c = c || {};
        var w = c.callback,
            t = c.defaultcolors;
        t || (t = $3Dmol.elementColors.defaultColors);
        var x = c.nomouse,
            q = 0;
        void 0 != typeof c.backgroundColor && (q = $3Dmol.CC.color(c.backgroundColor).getHex());
        var D = 0;
        void 0 != typeof c.camerax && (D = parseFloat(c.camerax));
        var y = this,
            z = b,
            m = null,
            e = [],
            l = {},
            u = [],
            E = [],
            N = [],
            s = [],
            g = [],
            M = null,
            p = z.width(),
            B = z.height(),
            A = p / B,
            K = [],
            I = new $3Dmol.Renderer({
                antialias: !0,
                preserveDrawingBuffer: !0,
                premultipliedAlpha: !1
            });
        I.domElement.style.width = "100%";
        I.domElement.style.height = "100%";
        I.domElement.style.padding = "0";
        I.domElement.style.position = "absolute";
        I.domElement.style.top = "0px";
        I.domElement.style.left = "0px";
        I.domElement.style.zIndex = "0";
        var H = new $3Dmol.Camera(20, A, 1, 800, c.orthographic);
        H.position = new $3Dmol.Vector3(D, 0, 150);
        var F = new $3Dmol.Vector3;
        H.lookAt(F);
        var P = new $3Dmol.Raycaster(new $3Dmol.Vector3(0,
                0, 0), new $3Dmol.Vector3(0, 0, 0)),
            C = new $3Dmol.Projector,
            L = new $3Dmol.Vector3(0, 0, 0),
            O = null,
            Q = null,
            J = null,
            R = -50,
            S = 50,
            V = new $3Dmol.Quaternion(0, 0, 0, 1),
            Z = new $3Dmol.Quaternion(0, 0, 0, 1),
            W = !1,
            Y = !1,
            X = 0,
            U = 0,
            T = 0,
            G = 0,
            ba = 0,
            aa = 0,
            ga = 0,
            pa = function() {
                var b = 0;
                for (i in l) l.hasOwnProperty(i) && i > b && (b = i);
                return b + 1
            },
            va = function() {
                var b = H.position.z - Q.position.z;
                1 > b && (b = 1);
                H.near = b + R;
                1 > H.near && (H.near = 1);
                H.far = b + S;
                H.near + 1 > H.far && (H.far = H.near + 1);
                H.fov = 20;
                H.right = b * Math.tan(Math.PI / 180 * 20);
                H.left = -H.right;
                H.top = H.right /
                    A;
                H.bottom = -H.top;
                H.updateProjectionMatrix();
                O.fog.near = H.near + .4 * (H.far - H.near);
                O.fog.far = H.far
            },
            da = function(b) {
                if (O && (va(), I.render(O, H), !b && 0 < K.length)) {
                    b = y.getView();
                    for (var c = 0; c < K.length; c++) K[c].setView(b, !0)
                }
            };
        (function() {
            O = new $3Dmol.Scene;
            O.fog = new $3Dmol.Fog(q, 100, 200);
            J = new $3Dmol.Object3D;
            Q = new $3Dmol.Object3D;
            Q.useQuaternion = !0;
            Q.quaternion = new $3Dmol.Quaternion(0, 0, 0, 1);
            Q.add(J);
            O.add(Q);
            var b = new $3Dmol.Light(16777215);
            b.position = (new $3Dmol.Vector3(.2, .2, 1)).normalize();
            b.intensity =
                1;
            O.add(b)
        })();
        I.setClearColorHex(q, 1);
        O.fog.color = $3Dmol.CC.color(q);
        var ia = function(b, c, d) {
                console.log("continue");
                L.set(b, c, -1);
                C.unprojectVector(L, H);
                L.sub(H.position).normalize();
                P.set(H.position, L);
                b = [];
                b = P.intersectObjects(J, g);
                void 0 === b[0] && (M.unhover_callback(M, y, d, z), M = null);
                void 0 !== b[0] && b[0].clickable !== M && (M.unhover_callback(M, y, d, z), M = null)
            },
            Ba = function(b) {
                var c = b.originalEvent.targetTouches[0].pageX - b.originalEvent.targetTouches[1].pageX;
                b = b.originalEvent.targetTouches[0].pageY - b.originalEvent.targetTouches[1].pageY;
                return Math.sqrt(c * c + b * b)
            },
            la = function(b) {
                var c = b.pageX,
                    d = b.pageY;
                b.originalEvent.targetTouches && b.originalEvent.targetTouches[0] ? (c = b.originalEvent.targetTouches[0].pageX, d = b.originalEvent.targetTouches[0].pageY) : b.originalEvent.changedTouches && b.originalEvent.changedTouches[0] && (c = b.originalEvent.changedTouches[0].pageX, d = b.originalEvent.changedTouches[0].pageY);
                return [c, d]
            },
            Ca = function(b, c) {
                var d = b / p,
                    e = c / B,
                    g = Q.quaternion,
                    l = new $3Dmol.Vector3(0, 0, Q.position.z);
                C.projectVector(l, H);
                l.x += 2 * d;
                l.y -=
                    2 * e;
                C.unprojectVector(l, H);
                l.z = 0;
                l.applyQuaternion(g);
                return l
            };
        $("body").bind("mouseup touchend", function(b) {
            if (Y && O) {
                var c = la(b),
                    d = c[0],
                    c = c[1];
                if (d == X && c == U) {
                    var e = $("canvas", z).offset(),
                        d = (d - e.left) / p * 2 - 1,
                        c = 2 * -((c - e.top) / B) + 1;
                    0 != s.length && (L.set(d, c, -1), C.unprojectVector(L, H), L.sub(H.position).normalize(), P.set(H.position, L), d = [], d = P.intersectObjects(J, s), d.length && (d = d[0].clickable, void 0 !== d.callback && "function" === typeof d.callback && d.callback(d, y, b, z)))
                }
            }
            Y = !1
        });
        var oa, Za = this._handleMouseDown =
            function(b) {
                b.preventDefault();
                if (O) {
                    var c = la(b),
                        d = c[0],
                        c = c[1];
                    void 0 !== d && (Y = !0, oa = b.which, X = d, U = c, T = 0, b.originalEvent.targetTouches && 2 == b.originalEvent.targetTouches.length && (T = Ba(b)), V = Q.quaternion, ba = Q.position.z, G = J.position.clone(), aa = R, ga = S)
                }
            },
            ra = this._handleMouseScroll = function(b) {
                b.preventDefault();
                if (O) {
                    var c = .85 * (150 - Q.position.z),
                        d = 1;
                    b.originalEvent.ctrlKey && (d = -1);
                    b.originalEvent.detail ? Q.position.z += d * c * b.originalEvent.detail / 10 : b.originalEvent.wheelDelta && (Q.position.z -= d * c * b.originalEvent.wheelDelta /
                        400);
                    150 < Q.position.z && (Q.position.z = 149.85);
                    da()
                }
            },
            Ia, Ra = this._handleMouseMove = function(b) {
                clearTimeout(Ia);
                var c = $("canvas", z).offset(),
                    d = (la(b)[0] - c.left) / p * 2 - 1,
                    e = 2 * -((la(b)[1] - c.top) / B) + 1;
                null !== M && ia(d, e, b);
                Ia = setTimeout(function() {
                        if (0 != g.length) {
                            L.set(d, e, -1);
                            C.unprojectVector(L, H);
                            L.sub(H.position).normalize();
                            P.set(H.position, L);
                            var c = [],
                                c = P.intersectObjects(J, g);
                            c.length ? (M = c = c[0].clickable, void 0 !== c.hover_callback && "function" === typeof c.hover_callback && c.hover_callback(c, y, b, z)) : M = null
                        }
                    },
                    500);
                p = z.width();
                B = z.height();
                b.preventDefault();
                if (O && Y) {
                    var c = 0,
                        l = la(b),
                        m = l[0],
                        f = l[1];
                    if (void 0 !== m) {
                        var l = (m - X) / p,
                            u = (f - U) / B;
                        0 != T && b.originalEvent.targetTouches && 2 == b.originalEvent.targetTouches.length ? (u = Ba(b), c = 2, u = 2 * (u - T) / (p + B), console.log("pinch " + T + " dy " + u)) : b.originalEvent.targetTouches && 3 == b.originalEvent.targetTouches.length && (c = 1);
                        var h = Math.sqrt(l * l + u * u);
                        3 == c || 3 == oa && b.ctrlKey ? (R = aa + 100 * l, S = ga + 100 * u) : 2 == c || 3 == oa || b.shiftKey ? (c = .85 * (150 - Q.position.z), 80 > c && (c = 80), Q.position.z = ba + u * c, 150 <
                            Q.position.z && (Q.position.z = 149.85)) : 1 == c || 2 == oa || b.ctrlKey ? (c = Ca(m - X, f - U), J.position.addVectors(G, c)) : 0 !== c && 1 != oa || 0 === h || (c = Math.sin(h * Math.PI) / h, Z.x = Math.cos(h * Math.PI), Z.y = 0, Z.z = c * l, Z.w = -c * u, Q.quaternion = new $3Dmol.Quaternion(1, 0, 0, 0), Q.quaternion.multiply(Z), Q.quaternion.multiply(V));
                        da()
                    }
                }
            },
            ea = function(b) {
                z = b;
                p = z.width();
                B = z.height();
                A = p / B;
                I.setSize(p, B);
                z.append(I.domElement);
                m = $(I.domElement);
                x || (m.bind("mousedown touchstart", Za), m.bind("DOMMouseScroll mousewheel", ra), m.bind("mousemove touchmove",
                    Ra), m.bind("contextmenu", function(b) {
                    b.preventDefault()
                }))
            };
        ea(z);
        this.setContainer = function(b) {
            "string" === $.type(b) && (b = $("#" + b));
            b || (b = z);
            ea(b);
            return this
        };
        this.setBackgroundColor = function(b, c) {
            if ("undefined" == typeof c) c = 1;
            else if (0 > c || 1 < c) c = 1;
            var d = $3Dmol.CC.color(b);
            O.fog.color = d;
            q = d.getHex();
            I.setClearColorHex(d.getHex(), c);
            da();
            return this
        };
        this.setProjection = function(b) {
            H.ortho = "orthographic" === b;
            va()
        };
        this.setViewStyle = function(b) {
            if ("outline" === b.style) {
                var c = {};
                b.color && (c.color = $3Dmol.CC.color(b.color));
                b.width && (c.width = b.width);
                I.enableOutline(c)
            } else I.disableOutline();
            return this
        };
        c.style && this.setViewStyle(c);
        this.setWidth = function(b) {
            p = b || p;
            I.setSize(p, B);
            return this
        };
        this.setHeight = function(b) {
            B = b || B;
            I.setSize(p, B);
            return this
        };
        this.resize = function() {
            p = z.width();
            B = z.height();
            A = p / B;
            I.setSize(p, B);
            H.aspect = A;
            H.updateProjectionMatrix();
            da();
            return this
        };
        $(window).resize(this.resize);
        this.getModel = function(b) {
            b = b || e.length - 1;
            return e[b]
        };
        var Wa = 0;
        this.rotate = function(b, c, d) {
            d = void 0 !== d ? d : 0;
            "undefined" ===
            typeof c && (c = "y");
            var e = 0,
                g = 0,
                l = 0,
                m = Math.PI * b / 180;
            b = Math.sin(m / 2);
            m = Math.cos(m / 2);
            "x" == c && (e = b);
            "y" == c && (g = b);
            "z" == c && (l = b);
            b = (new $3Dmol.Quaternion(e, g, l, m)).normalize();
            if (0 < d) {
                e = Q.quaternion;
                c = (b.x - e.x) / (d / 20);
                g = (b.y - e.y) / (d / 20);
                l = (b.z - e.z) / (d / 20);
                b = (b.w - e.w) / (d / 20);
                for (var m = e, f = Array(d / 20), e = 0; e < f.length; e++) m = (new $3Dmol.Quaternion(m.x + c, m.y + g, m.z + l, m.w + b)).normalize(), f[e] = m;
                setInterval(function() {
                    Ja === f.length ? (inc_done = !0, da(), Wa = 0) : (Q.quaternion.multiply(f[Wa]), Wa += 1, da())
                }, 20);
                return this
            }
            Q.quaternion.multiply(b);
            da();
            return this
        };
        this.getView = function() {
            if (!J) return [0, 0, 0, 0, 0, 0, 0, 1];
            var b = J.position,
                c = Q.quaternion;
            return [b.x, b.y, b.z, Q.position.z, c.x, c.y, c.z, c.w]
        };
        this.setView = function(b, c) {
            if (void 0 === b || !(b instanceof Array || 8 !== b.length) || !J || !Q) return this;
            J.position.x = b[0];
            J.position.y = b[1];
            J.position.z = b[2];
            Q.position.z = b[3];
            Q.quaternion.x = b[4];
            Q.quaternion.y = b[5];
            Q.quaternion.z = b[6];
            Q.quaternion.w = b[7];
            "undefined" != typeof b[8] && (Q.position.x = b[8], Q.position.y = b[9]);
            da(c);
            return this
        };
        this.render = function(b) {
            var c =
                new Date;
            s.splice(0, s.length);
            g.splice(0, g.length);
            var d, m;
            d = 0;
            for (m = e.length; d < m; d++) {
                var f = e[d];
                if (f) {
                    var h = f.selectedAtoms({
                            clickable: !0
                        }),
                        f = f.selectedAtoms({
                            hoverable: !0
                        });
                    Array.prototype.push.apply(g, f);
                    Array.prototype.push.apply(s, h)
                }
            }
            d = 0;
            for (m = u.length; d < m; d++)(h = u[d]) && h.clickable && s.push(h), h && h.hoverable && g.push(h);
            d = this.getView();
            h = I.supportedExtensions();
            for (m = 0; m < e.length; m++) e[m] && e[m].globj(J, h);
            for (m = 0; m < u.length; m++) u[m] && u[m].globj(J, h);
            for (m in l)
                if (l.hasOwnProperty(m))
                    for (f = l[m],
                        h = 0; h < f.length; h++)
                        if (f.hasOwnProperty(h)) {
                            var p = f[h].geo;
                            if (!f[h].finished) {
                                p.verticesNeedUpdate = !0;
                                p.elementsNeedUpdate = !0;
                                p.normalsNeedUpdate = !0;
                                p.colorsNeedUpdate = !0;
                                p.buffersNeedUpdate = !0;
                                p.boundingSphere = null;
                                f[h].done && (f[h].finished = !0);
                                f[h].lastGL && J.remove(f[h].lastGL);
                                var q = null,
                                    q = f[h].mat instanceof $3Dmol.LineBasicMaterial ? new $3Dmol.Line(p, f[h].mat) : new $3Dmol.Mesh(p, f[h].mat);
                                q.visible = f[h].mat.transparent && 0 == f[h].mat.opacity ? !1 : !0;
                                if (1 < f[h].symmetries.length || 1 == f[h].symmetries.length &&
                                    !f[h].symmetries[h].isIdentity()) {
                                    for (var z = new $3Dmol.Object3D, p = 0; p < f[h].symmetries.length; p++) {
                                        var t = q.clone();
                                        t.matrix = f[h].symmetries[p];
                                        t.matrixAutoUpdate = !1;
                                        z.add(t)
                                    }
                                    f[h].lastGL = z;
                                    J.add(z)
                                } else f[h].lastGL = q, J.add(q)
                            }
                        }
            this.setView(d);
            d = new Date;
            "function" === typeof b && (b(), console.log("render time: " + (d - c)));
            return this
        };
        this.selectedAtoms = function(b) {
            return d(b)
        };
        this.pdbData = function(b) {
            b = d(b);
            for (var c = "", e = 0, g = b.length; e < g; ++e) c += b[e].pdbline + "\n";
            return c
        };
        var Na = 0;
        this.zoom = function(b,
            c) {
            c = void 0 !== c ? c : 0;
            var d = (150 - Q.position.z) / (b || 2);
            if (0 < c) {
                for (var e = Q.position.z, d = (150 - d - e) / (c / 20), g = Array(c / 20), l = 0; l < g.length; l++) e += d, g[l] = e;
                var m = !1;
                setInterval(function() {
                    m ? (clearInterval(), Na = 0) : Na === g.length ? (m = !0, da()) : (Q.position.z = g[Na], da(), Na += 1)
                }, 20);
                return this
            }
            Q.position.z = 150 - d;
            da();
            return this
        };
        var Ja = 0;
        this.translate = function(b, c, d) {
            d = void 0 !== d ? d : 0;
            b /= p;
            var e = c / B,
                g = new $3Dmol.Vector3(0, 0, -150);
            c = F.clone();
            C.projectVector(g, H);
            g.x -= b;
            g.y -= e;
            C.unprojectVector(g, H);
            g.z = 0;
            F.add(g);
            b = c;
            if (0 < d) {
                c = new $3Dmol.Vector3((F.x - c.x) / (d / 20), (F.y - c.y) / (d / 20), 0);
                var l = !1,
                    m = Array(d / 20);
                for (d = 0; d < m.length; d++) b = new $3Dmol.Vector3(b.x + c.x, b.y + c.y, b.z), m[d] = b;
                d = function() {
                    Ja === m.length ? (l = !0, da(), Ja = 0) : (F.add(m[Ja]), H.lookAt(F), Ja += 1, da())
                };
                l ? (clearInterval(), Ja = 0) : setInterval(d, 20);
                return this
            }
            H.lookAt(F);
            da();
            return this
        };
        var Oa = 0;
        this.center = function(b, c) {
            c = void 0 !== c ? c : 0;
            var e, g;
            b = b || {};
            var l = d(b),
                m = $3Dmol.getExtent(l);
            //$.isEmptyObject(b) ? ($.each(u, function(b, c) {
            1 ? ($.each(b, function(b, c) {
                if (c && c.boundingSphere &&
                    c.boundingSphere.center) var d = c.boundingSphere.center;
                var e = c.boundingSphere.radius;
                0 < e ? (l.push(new $3Dmol.Vector3(d.x + e, d.y, d.z)), l.push(new $3Dmol.Vector3(d.x - e, d.y, d.z)), l.push(new $3Dmol.Vector3(d.x, d.y + e, d.z)), l.push(new $3Dmol.Vector3(d.x, d.y - e, d.z)), l.push(new $3Dmol.Vector3(d.x, d.y, d.z + e)), l.push(new $3Dmol.Vector3(d.x, d.y, d.z - e))) : l.push(d)
            }), m = $3Dmol.getExtent(l), e = l, g = m) : (e = d({}), g = $3Dmol.getExtent(e));
            e = new $3Dmol.Vector3(m[2][0], m[2][1], m[2][2]);
            var f = g[1][0] - g[0][0],
                h = g[1][1] - g[0][1];
            g = g[1][2] - g[0][2];
            f = Math.sqrt(f * f + h * h + g * g);
            5 > f && (f = 5);
            R = -f / 1.9;
            S = f / 2;
            f = m[1][0] - m[0][0];
            h = m[1][1] - m[0][1];
            g = m[1][2] - m[0][2];
            f = Math.sqrt(f * f + h * h + g * g);
            5 > f && (f = 5);
            f = 25;
            for (m = 0; m < l.length; m++) l[m] && (h = e.distanceToSquared(l[m]), h > f && (f = h));
            f = 2 * Math.sqrt(f);
            if (0 < c) {
                m = J.position;
                g = e.clone().multiplyScalar(-1);
                var p = Array(c / 20);
                e = m;
                f = (g.x - m.x) / (c / 20);
                h = (g.y - m.y) / (c / 20);
                g = (g.z - m.z) / (c / 20);
                for (var s = !1, m = 0; m < p.length; m++) e = new $3Dmol.Vector3(e.x + f, e.y + h, e.z + g), p[m] = e;
                e = function() {
                    Oa === p.length ? s = !0 : (console.log(p[0]),
                        J.position = p[Oa], Oa += 1);
                    da()
                };
                s ? (clearInterval(), Oa = 0) : setInterval(e, 20);
                return this
            }
            J.position = e.clone().multiplyScalar(-1);
            da();
            return this
        };
        var ma = 0,
            ja = 0;
        this.zoomTo = function(b, c) {
            c = void 0 !== c ? c : 0;
            var e, g;
            b = b || {};
            var l = d(b),
                m = $3Dmol.getExtent(l);
            $.isEmptyObject(b) ? ($.each(u, function(b, c) {
                if (c && c.boundingSphere && c.boundingSphere.center) var d = c.boundingSphere.center;
                var e = c.boundingSphere.radius;
                0 < e ? (l.push(new $3Dmol.Vector3(d.x + e, d.y, d.z)), l.push(new $3Dmol.Vector3(d.x - e, d.y, d.z)), l.push(new $3Dmol.Vector3(d.x,
                    d.y + e, d.z)), l.push(new $3Dmol.Vector3(d.x, d.y - e, d.z)), l.push(new $3Dmol.Vector3(d.x, d.y, d.z + e)), l.push(new $3Dmol.Vector3(d.x, d.y, d.z - e))) : l.push(d)
            }), m = $3Dmol.getExtent(l), e = l, g = m) : (e = d({}), g = $3Dmol.getExtent(e));
            e = new $3Dmol.Vector3(m[2][0], m[2][1], m[2][2]);
            var f = g[1][0] - g[0][0],
                h = g[1][1] - g[0][1];
            g = g[1][2] - g[0][2];
            f = Math.sqrt(f * f + h * h + g * g);
            5 > f && (f = 5);
            R = -f / 1.9;
            S = f / 2;
            f = m[1][0] - m[0][0];
            h = m[1][1] - m[0][1];
            g = m[1][2] - m[0][2];
            f = Math.sqrt(f * f + h * h + g * g);
            5 > f && (f = 5);
            f = 25;
            for (m = 0; m < l.length; m++) l[m] && (h = e.distanceToSquared(l[m]),
                h > f && (f = h));
            f = 2 * Math.sqrt(f);
            if (0 < c) {
                var m = Q.position.z,
                    p = -(.5 * f / Math.tan(Math.PI / 180 * H.fov / 2) - 150),
                    s = J.position,
                    q = e.clone().multiplyScalar(-1),
                    z = Array(c / 20),
                    t = Array(c / 20);
                e = m;
                f = s;
                h = (q.x - s.x) / (c / 20);
                g = (q.y - s.y) / (c / 20);
                for (var s = (q.z - s.z) / (c / 20), p = (p - m) / (c / 20), y = !1, x = !1, m = 0; m < z.length; m++) f = new $3Dmol.Vector3(f.x + h, f.y + g, f.z + s), z[m] = f;
                for (m = 0; m < t.length; m++) e += p, t[m] = e;
                e = function() {
                    y || (ja === t.length ? y = !0 : (Q.position.z = t[ja], ja += 1), da());
                    x || (ma === z.length ? x = !0 : (console.log(z[0]), J.position = z[ma], ma +=
                        1), da())
                };
                y && x ? (clearInterval(), ja = ma = 0) : setInterval(e, 20);
                return this
            }
            J.position = e.clone().multiplyScalar(-1);
            Q.position.z = -(.5 * f / Math.tan(Math.PI / 180 * H.fov / 2) - 150);
            da();
            return this
        };
        this.setSlab = function(b, c) {
            R = b;
            S = c
        };
        this.getSlab = function(b) {
            return {
                near: R,
                far: S
            }
        };
        this.addLabel = function(b, c, e) {
            c = c || {};
            e && (e = $3Dmol.getExtent(d(e)), c.position = {
                x: e[2][0],
                y: e[2][1],
                z: e[2][2]
            });
            b = new $3Dmol.Label(b, c);
            b.setContext();
            J.add(b.sprite);
            c.fixed && N.push(E.length);
            E.push(b);
            da();
            return b
        };
        this.addResLabels =
            function(b, c) {
                h("addResLabels", b, this, c);
                return this
            };
        this.removeLabel = function(b) {
            for (var c = 0; c < E.length; c++)
                if (E[c] == b) {
                    E.splice(c, 1);
                    b.dispose();
                    J.remove(b.sprite);
                    break
                }
            return this
        };
        this.removeAllLabels = function() {
            for (var b = 0; b < E.length; b++) J.remove(E[b].sprite);
            E.splice(0, E.length);
            return this
        };
        this.setLabelStyle = function(b, c) {
            J.remove(b.sprite);
            b.dispose();
            b.stylespec = c;
            b.setContext();
            J.add(b.sprite);
            da();
            return b
        };
        this.setLabelText = function(b, c) {
            J.remove(b.sprite);
            b.dispose();
            b.text = c;
            b.setContext();
            J.add(b.sprite);
            da();
            return b
        };
        this.addShape = function(b) {
            b = b || {};
            b = new $3Dmol.GLShape(b);
            b.shapePosition = u.length;
            u.push(b);
            return b
        };
        this.removeShape = function(b) {
            if (!b) return this;
            b.removegl(J);
            for (delete u[b.shapePosition]; 0 < u.length && "undefined" === typeof u[u.length - 1];) u.pop();
            return this
        };
        this.removeAllShapes = function() {
            for (var b = 0; b < u.length; b++) u[b].removegl(J);
            u.splice(0, u.length);
            return this
        };
        this.addSphere = function(b) {
            b = b || {};
            var c = new $3Dmol.GLShape(b);
            c.shapePosition = u.length;
            c.addSphere(b);
            u.push(c);
            return c
        };
        this.addArrow = function(b) {
            b = b || {};
            var c = new $3Dmol.GLShape(b);
            c.shapePosition = u.length;
            c.addArrow(b);
            u.push(c);
            return c
        };
        this.addCylinder = function(b) {
            b = b || {};
            var c = new $3Dmol.GLShape(b);
            c.shapePosition = u.length;
            c.addCylinder(b);
            u.push(c);
            return c
        };
        this.addLine = function(b) {
            b = b || {};
            b.wireframe = !0;
            var c = new $3Dmol.GLShape(b);
            c.shapePosition = u.length;
            if (b.dashed) {
                b.dashLength = b.dashLength || .5;
                b.gapLength = b.gapLength || .5;
                b.start = b.start || {};
                b.end = b.end || {};
                var d = new $3Dmol.Vector3(b.start.x ||
                        0, b.start.y || 0, b.start.z || 0),
                    e = new $3Dmol.Vector3(b.end.x, b.end.y || 0, b.end.z || 0),
                    g = new $3Dmol.Vector3,
                    l = new $3Dmol.Vector3,
                    m = new $3Dmol.Vector3,
                    f, h, p = d.clone(),
                    s = 0;
                g.subVectors(e, d);
                f = g.length();
                g.normalize();
                l = g.clone();
                m = g.clone();
                l.multiplyScalar(b.dashLength);
                m.multiplyScalar(b.gapLength);
                g = l.length();
                for (h = m.length(); s < f;) {
                    if (s + g > f) {
                        b.start = d;
                        b.end = e;
                        c.addLine(b);
                        break
                    }
                    p.addVectors(d, l);
                    b.start = d;
                    b.end = p;
                    c.addLine(b);
                    d = p.clone();
                    s += g;
                    p.addVectors(d, m);
                    d = p.clone();
                    s += h
                }
            } else c.addLine(b);
            u.push(c);
            return c
        };
        this.addUnitCell = function(b) {
            var c = new $3Dmol.GLShape({
                wireframe: !0
            });
            c.shapePosition = u.length;
            var d = b.getCrystData();
            if (d) {
                b = d.a;
                var e = d.b,
                    g = d.c,
                    l = d.alpha,
                    m = d.beta,
                    d = d.gamma,
                    l = l * Math.PI / 180,
                    m = m * Math.PI / 180,
                    d = d * Math.PI / 180,
                    f;
                f = Math.cos(m);
                l = (Math.cos(l) - Math.cos(m) * Math.cos(d)) / Math.sin(d);
                m = Math.sqrt(Math.max(0, 1 - f * f - l * l));
                b = new $3Dmol.Matrix4(b, e * Math.cos(d), g * f, 0, 0, e * Math.sin(d), g * l, 0, 0, 0, g * m, 0, 0, 0, 0, 1);
                e = [new $3Dmol.Vector3(0, 0, 0), new $3Dmol.Vector3(1, 0, 0), new $3Dmol.Vector3(0, 1, 0),
                    new $3Dmol.Vector3(0, 0, 1), new $3Dmol.Vector3(1, 1, 0), new $3Dmol.Vector3(0, 1, 1), new $3Dmol.Vector3(1, 0, 1), new $3Dmol.Vector3(1, 1, 1)
                ];
                for (g = 0; g < e.length; g++) e[g] = e[g].applyMatrix4(b);
                c.addLine({
                    start: e[0],
                    end: e[1]
                });
                c.addLine({
                    start: e[0],
                    end: e[2]
                });
                c.addLine({
                    start: e[1],
                    end: e[4]
                });
                c.addLine({
                    start: e[2],
                    end: e[4]
                });
                c.addLine({
                    start: e[0],
                    end: e[3]
                });
                c.addLine({
                    start: e[3],
                    end: e[5]
                });
                c.addLine({
                    start: e[2],
                    end: e[5]
                });
                c.addLine({
                    start: e[1],
                    end: e[6]
                });
                c.addLine({
                    start: e[4],
                    end: e[7]
                });
                c.addLine({
                    start: e[6],
                    end: e[7]
                });
                c.addLine({
                    start: e[3],
                    end: e[6]
                });
                c.addLine({
                    start: e[5],
                    end: e[7]
                })
            }
            u.push(c);
            return c
        };
        this.addCustom = function(b) {
            b = b || {};
            var c = new $3Dmol.GLShape(b);
            c.shapePosition = u.length;
            c.addCustom(b);
            u.push(c);
            return c
        };
        this.addVolumetricData = function(b, c, d) {
            d = d || {};
            var e = new $3Dmol.GLShape(d);
            e.shapePosition = u.length;
            e.addVolumetricData(b, c, d);
            u.push(e);
            return e
        };
        this.addIsosurface = function(b, c, d) {
            c = c || {};
            var e = new $3Dmol.GLShape(c);
            e.shapePosition = u.length;
            e.addIsosurface(b, c, d);
            u.push(e);
            return e
        };
        this.setFrame =
            function(b) {
                for (var c = 0; c < e.length; c++) e[c].setFrame(b);
                return this
            };
        this.getFrames = function() {
            for (var b = 0, c = 0; c < e.length; c++) e[c].getFrames().length > b && (b = e[c].getFrames().length);
            return b
        };
        this.animate = function(b) {
            W = !0;
            var c = 100,
                d = "forward",
                e = 0;
            b = b || {};
            b.interval && (c = b.interval);
            b.loop && (d = b.loop);
            b.reps && (e = b.reps);
            var g = this.getFrames(),
                l = this,
                m = 0,
                f = 1,
                h = 0,
                u = g * e,
                p = setInterval(function() {
                    var b = d;
                    "forward" == b ? (l.setFrame(m), m = (m + f) % g) : "backward" == b ? (l.setFrame(g - 1 - m), m = (m + f) % g) : (l.setFrame(m), m +=
                        f, f *= 0 == m % (g - 1) ? -1 : 1);
                    l.render();
                    ++h != u && l.isAnimated() || clearInterval(p)
                }, c);
            return this
        };
        this.stopAnimate = function() {
            W = !1;
            return this
        };
        this.isAnimated = function() {
            return W
        };
        this.addModel = function(b, c, d) {
            var g = new $3Dmol.GLModel(e.length, t);
            g.addMolData(b, c, d);
            e.push(g);
            return g
        };
        this.addModels = function(b, c, d) {
            d = d || {};
            d.multimodel = !0;
            d.frames = !0;
            b = $3Dmol.GLModel.parseMolData(b, c, d);
            for (c = 0; c < b.length; c++) {
                var g = new $3Dmol.GLModel(e.length, t);
                g.setAtomDefaults(b[c]);
                g.addFrame(b[c]);
                g.setFrame(0);
                b.modelData && g.setModelData(b.modelData[c]);
                g.setDontDuplicateAtoms(!d.duplicateAssemblyAtoms);
                e.push(g)
            }
            return e
        };
        this.addModelsAsFrames = function(b, c, d) {
            d = d || {};
            d.multimodel = !0;
            d.frames = !0;
            var g = new $3Dmol.GLModel(e.length, t);
            g.addMolData(b, c, d);
            e.push(g);
            return g
        };
        this.addAsOneMolecule = function(b, c, d) {
            d = d || {};
            d.multimodel = !0;
            d.onemol = !0;
            var g = new $3Dmol.GLModel(e.length, t);
            g.addMolData(b, c, d);
            e.push(g);
            return g
        };
        this.removeModel = function(b) {
            if (b) {
                b.removegl(J);
                for (delete e[b.getID()]; 0 < e.length &&
                    "undefined" === typeof e[e.length - 1];) e.pop();
                return this
            }
        };
        this.removeAllModels = function() {
            for (var b = 0; b < e.length; b++) e[b].removegl(J);
            e.splice(0, e.length);
            return this
        };
        this.exportJSON = function(b, c) {
            var d = {};
            d.m = void 0 === c ? e.map(function(c) {
                return c.toCDObject(b)
            }) : [model[c].toCDObject()];
            return JSON.stringify(d)
        };
        this.createModelFrom = function(b, c) {
            for (var d = new $3Dmol.GLModel(e.length, t), g = 0; g < e.length; g++)
                if (e[g]) {
                    var l = e[g].selectedAtoms(b);
                    d.addAtoms(l);
                    c && e[g].removeAtoms(l)
                }
            e.push(d);
            return d
        };
        this.setStyle = function(b, c) {
            "undefined" === typeof c && (c = b, b = {});
            h("setStyle", b, c, !1);
            return this
        };
        this.addStyle = function(b, c) {
            "undefined" === typeof c && (c = b, b = {});
            h("setStyle", b, c, !0);
            return this
        };
        this.setClickable = function(b, c, d) {
            h("setClickable", b, c, d);
            return this
        };
        this.setHoverable = function(b, c, d, e) {
            h("setHoverable", b, c, d, e);
            return this
        };
        this.vibrate = function(b, c) {
            h("vibrate", b, c);
            return this
        };
        this.setColorByProperty = function(b, c, d, e) {
            h("setColorByProperty", b, c, d, e);
            return this
        };
        this.setColorByElement =
            function(b, c) {
                h("setColorByElement", b, c);
                return this
            };
        var na = function(b, c) {
                for (var d = [], e = 0; e < b.length; e++) {
                    var g = b[e];
                    "undefined" != typeof g && (g.x < c[0][0] || g.x > c[1][0] || g.y < c[0][1] || g.y > c[1][1] || g.z < c[0][2] || g.z > c[1][2] || d.push(g))
                }
                return d
            },
            Ha = function(b) {
                return (b[1][0] - b[0][0]) * (b[1][1] - b[0][1]) * (b[1][2] - b[0][2])
            },
            Sa = function(b, c, d) {
                for (var e = [], g = {}, l = 0, m = c.length; l < m; l++) g[c[l].index] = l;
                var f = function(b) {
                        for (var c = [], d = 0, e = b.length; d < e; d++) b[d].index in g && c.push(g[b[d].index]);
                        return c
                    },
                    h = function(b) {
                        var c = [];
                        c[0] = [b[0][0], b[0][1], b[0][2]];
                        c[1] = [b[1][0], b[1][1], b[1][2]];
                        return c
                    },
                    u = function(b) {
                        if (64E3 > Ha(b)) return [b];
                        var c = b[1][0] - b[0][0],
                            d = b[1][1] - b[0][1],
                            e = b[1][2] - b[0][2],
                            d = c > d && c > e ? 0 : d > c && d > e ? 1 : 2,
                            e = h(b),
                            c = h(b);
                        b = (b[1][d] - b[0][d]) / 2 + b[0][d];
                        e[1][d] = b;
                        c[0][d] = b;
                        b = u(e);
                        c = u(c);
                        return b.concat(c)
                    };
                b = u(b);
                l = 0;
                for (m = b.length; l < m; l++) {
                    var p = h(b[l]);
                    p[0][0] -= 6;
                    p[0][1] -= 6;
                    p[0][2] -= 6;
                    p[1][0] += 6;
                    p[1][1] += 6;
                    p[1][2] += 6;
                    var p = na(c, p),
                        s = na(d, b[l]);
                    e.push({
                        extent: b[l],
                        atoms: f(p),
                        toshow: f(s)
                    })
                }
                return e
            },
            Ea = function(b,
                c, d) {
                for (var e = new $3Dmol.Geometry(!0), g = e.updateGeoGroup(0), l = [], m = 0, f = b.length; m < f; m++) {
                    var h = b[m];
                    h && ("undefined" != typeof h.surfaceColor ? l[m] = h.surfaceColor : h.color && (l[m] = $3Dmol.CC.color(h.color)))
                }
                var u = g.vertexArray,
                    h = c.vertices,
                    m, f;
                m = 0;
                for (f = h.length; m < f; m++) b = 3 * g.vertices, u[b] = h[m].x, u[b + 1] = h[m].y, u[b + 2] = h[m].z, g.vertices++;
                u = g.colorArray;
                if (d.voldata && d.volscheme) {
                    var l = d.volscheme,
                        p = d.voldata,
                        s = l.range() || [-1, 1];
                    m = 0;
                    for (f = h.length; m < f; m++) {
                        b = p.getVal(h[m].x, h[m].y, h[m].z);
                        var q = $3Dmol.CC.color(l.valueToHex(b,
                            s));
                        b = 3 * m;
                        u[b] = q.r;
                        u[b + 1] = q.g;
                        u[b + 2] = q.b
                    }
                } else if (0 < l.length)
                    for (m = 0, f = h.length; m < f; m++) p = h[m].atomid, b = 3 * m, u[b] = l[p].r, u[b + 1] = l[p].g, u[b + 2] = l[p].b;
                c = c.faces;
                g.faceidx = c.length;
                e.initTypedArrays();
                var h = g.vertexArray,
                    u = g.normalArray,
                    z;
                m = 0;
                for (f = c.length; m < f; m += 3) l = c[m + 1], p = c[m + 2], b = 3 * c[m], l *= 3, p *= 3, s = new $3Dmol.Vector3(h[b], h[b + 1], h[b + 2]), q = new $3Dmol.Vector3(h[l], h[l + 1], h[l + 2]), z = new $3Dmol.Vector3(h[p], h[p + 1], h[p + 2]), z.subVectors(z, q), s.subVectors(s, q), z.cross(s), s = z, s.normalize(), u[b] += s.x, u[l] +=
                    s.x, u[p] += s.x, u[b + 1] += s.y, u[l + 1] += s.y, u[p + 1] += s.y, u[b + 2] += s.z, u[l + 2] += s.z, u[p + 2] += s.z;
                g.faceArray = new Uint16Array(c);
                d = new $3Dmol.Mesh(e, d);
                d.doubleSided = !0;
                return d
            };
        this.addMesh = function(b) {
            b = {
                geo: b.geometry,
                mat: b.material,
                done: !0,
                finished: !1
            };
            var c = pa();
            l[c] = b;
            return c
        };
        var Pa = function(b) {
                var c = [];
                $.each(b, function(b, d) {
                    c[b] = $.extend({}, d)
                });
                return c
            },
            ab = {
                VDW: $3Dmol.SurfaceType.VDW,
                MS: $3Dmol.SurfaceType.MS,
                SAS: $3Dmol.SurfaceType.SAS,
                SES: $3Dmol.SurfaceType.SES
            };
        this.addSurface = function(b, c, g, m,
            h) {
            "string" == typeof b ? void 0 !== ab[b] ? b = ab[b] : console.log("Surface type : " + b + " is not recognized") : void 0 === b && console.log("Surface type : " + b + " is not recognized");
            var u = null,
                p = null;
            g = Pa(d(g));
            var u = m ? Pa(d(m)) : g,
                s = !1;
            for (m = 0; m < e.length; m++)
                if (e[m]) {
                    var q = e[m].getSymmetries();
                    if (1 < q.length || 1 == q.length && !q[0].isIdentity()) {
                        s = !0;
                        break
                    }
                }
            var z = function(e, g, l) {
                p = h ? Pa(d(h)) : l;
                var m, f = $3Dmol.getExtent(l, !0),
                    u, s;
                c.map && c.map.prop && (u = c.map.prop, s = c.map.scheme || c.map.gradient || new $3Dmol.Gradient.RWB, (m =
                    s.range()) || (m = $3Dmol.getPropertyRange(l, u)), c.colorscheme = {
                    prop: u,
                    gradient: s
                });
                u = 0;
                for (s = g.length; u < s; u++) m = g[u], m.surfaceColor = $3Dmol.getColorFromStyle(m, c);
                var q = Ha(f),
                    z = Sa(f, g, l);
                if (p && p.length && 0 < p.length) {
                    var x = $3Dmol.getExtent(p, !0);
                    z.sort(function(b, c) {
                        var d = function(b, c) {
                                var d = b.extent,
                                    e = d[1][1] - d[0][1],
                                    g = d[1][2] - d[0][2],
                                    d = d[1][0] - d[0][0] - c[2][0],
                                    e = e - c[2][1],
                                    g = g - c[2][2];
                                return d * d + e * e + g * g
                            },
                            e = d(b, x),
                            d = d(c, x);
                        return e - d
                    })
                }
                var E = [];
                u = 0;
                for (s = g.length; u < s; u++) m = g[u], E[u] = {
                    x: m.x,
                    y: m.y,
                    z: m.z,
                    serial: u,
                    elem: m.elem
                };
                if ($3Dmol.syncSurface) setTimeout(function db(c) {
                    if (!(c >= z.length)) {
                        var d;
                        d = b;
                        var l = z[c].extent,
                            m = z[c].atoms,
                            f = z[c].toshow,
                            u = new $3Dmol.ProteinSurface;
                        u.initparm(l, 1 === d ? !1 : !0, q);
                        u.fillvoxels(E, m);
                        u.buildboundary();
                        if (d == $3Dmol.SurfaceType.SES || d == $3Dmol.SurfaceType.MS) u.fastdistancemap(), u.boundingatom(!1), u.fillvoxelswaals(E, m);
                        u.marchingcube(d);
                        d = u.getFacesAndVertices(f);
                        d = Ea(g, d, t);
                        $3Dmol.mergeGeos(e.geo, d);
                        y.render();
                        setTimeout(db, 1, c + 1)
                    }
                }, 1, 0);
                else {
                    l = [];
                    0 > b && (b = 0);
                    u = 0;
                    for (s = 4; u <
                        s; u++) f = new Worker($3Dmol.SurfaceWorker), l.push(f), f.postMessage({
                        type: -1,
                        atoms: E,
                        volume: q
                    });
                    var w = 0,
                        f = function(b) {
                            b = $3Dmol.splitMesh({
                                vertexArr: b.data.vertices,
                                faceArr: b.data.faces
                            });
                            for (var c = 0, d = b.length; c < d; c++) {
                                var l = Ea(g, {
                                    vertices: b[c].vertexArr,
                                    faces: b[c].faceArr
                                }, t);
                                $3Dmol.mergeGeos(e.geo, l);
                                y.render()
                            }
                            w++;
                            w == z.length && (e.done = !0)
                        };
                    s = function(b) {
                        console.log(b.message + " (" + b.filename + ":" + b.lineno + ")")
                    };
                    for (u = 0; u < z.length; u++) m = l[u % l.length], m.onmessage = f, m.onerror = s, m.postMessage({
                        type: b,
                        expandedExtent: z[u].extent,
                        extendedAtoms: z[u].atoms,
                        atomsToShow: z[u].toshow
                    })
                }
            };
            c = c || {};
            var t = f(c),
                q = [];
            if (s) {
                var s = {},
                    x = {};
                for (m = 0; m < e.length; m++) s[m] = [], x[m] = [];
                for (m = 0; m < u.length; m++) s[u[m].model].push(u[m]);
                for (m = 0; m < g.length; m++) x[g[m].model].push(g[m]);
                for (m = 0; m < e.length; m++) 0 < x[m].length && (q.push({
                    geo: new $3Dmol.Geometry(!0),
                    mat: t,
                    done: !1,
                    finished: !1,
                    symmetries: e[m].getSymmetries()
                }), z(q[m], s[m], x[m]))
            } else q.push({
                geo: new $3Dmol.Geometry(!0),
                mat: t,
                done: !1,
                finished: !1,
                symmetries: [new $3Dmol.Matrix4]
            }), z(q[q.length - 1],
                u, g);
            u = pa();
            l[u] = q;
            return u
        };
        this.setSurfaceMaterialStyle = function(b, c) {
            if (l[b])
                for (var d = l[b], e = 0; e < d.length; e++) d[e].mat = f(c), d[e].mat.side = $3Dmol.FrontSide, c.color && (d[e].mat.color = c.color, d[e].geo.colorsNeedUpdate = !0), d[e].finished = !1;
            return this
        };
        this.removeSurface = function(b) {
            for (var c = l[b], d = 0; d < c.length; d++) c[d] && c[d].lastGL && (void 0 !== c[d].geo && c[d].geo.dispose(), void 0 !== c[d].mat && c[d].mat.dispose(), J.remove(c[d].lastGL));
            delete l[b];
            da();
            return this
        };
        this.removeAllSurfaces = function() {
            for (n in l)
                if (l.hasOwnProperty(n)) {
                    for (var b =
                            l[n], c = 0; c < b.length; c++) b[c] && b[c].lastGL && (void 0 !== b[c].geo && b[c].geo.dispose(), void 0 !== b[c].mat && b[c].mat.dispose(), J.remove(b[c].lastGL));
                    delete l[n]
                }
            da();
            return this
        };
        this.jmolMoveTo = function() {
            var b = J.position,
                b = "center { " + -b.x + " " + -b.y + " " + -b.z + " }; ",
                c = Q.quaternion;
            return b += "moveto .5 quaternion { " + c.x + " " + c.y + " " + c.z + " " + c.w + " };"
        };
        this.clear = function() {
            this.removeAllSurfaces();
            this.removeAllModels();
            this.removeAllLabels();
            this.removeAllShapes();
            da();
            return this
        };
        this.mapAtomProperties =
            function(b, c) {
                c = c || {};
                var g = d(c);
                if ("function" == typeof b)
                    for (var l = 0, m = g.length; l < m; l++) {
                        var f = g[l];
                        b(f)
                    } else
                        for (l = 0, m = g.length; l < m; l++)
                            for (var f = g[l], u = 0, h = b.length; u < h; u++) {
                                var p = b[u];
                                if (p.props)
                                    for (var s in p.props)
                                        if (p.props.hasOwnProperty(s)) {
                                            var q;
                                            a: {
                                                q = f;
                                                var z = p;
                                                "undefined" === typeof z && (z = {});
                                                var t = [],
                                                    y = void 0;
                                                if ("undefined" === typeof z.model)
                                                    for (y = 0; y < e.length; y++) e[y] && t.push(e[y]);
                                                else t = z.model,
                                                $.isArray(t) || (t = [t]);
                                                for (y = 0; y < t.length; y++)
                                                    if (t[y].atomIsSelected(q, z)) {
                                                        q = !0;
                                                        break a
                                                    }
                                                q = !1
                                            }
                                            q &&
                                                (f.properties || (f.properties = {}), f.properties[s] = p.props[s])
                                        }
                            }
                return this
            };
        this.linkViewer = function(b) {
            K.push(b);
            return this
        };
        try {
            "function" === typeof w && w(this)
        } catch (lb) {
            console.log("error with glviewer callback: " + lb)
        }
    }
}();
$3Dmol.glmolViewer = $3Dmol.GLViewer;
$3Dmol = $3Dmol || {};
$3Dmol.Gradient = function(b, c) {};
$3Dmol.Gradient.valueToHex = function(b, c) {};
$3Dmol.Gradient.range = function() {};
$3Dmol.Gradient.RWB = function(b, c, d) {
    "undefined" == typeof c && $.isArray(b) && 2 <= b.length && (c = b[1], b = b[0]);
    this.valueToHex = function(h, f) {
        var w, t;
        h *= 1;
        f ? (w = f[0], t = f[1]) : (w = b, t = c);
        if (void 0 === h) return 16777215;
        t > w ? (h < w && (h = w), h > t && (h = t)) : (h > w && (h = w), h < t && (h = t));
        var x = (t + w) / 2;
        "undefined" != typeof f[2] ? x = f[2] : "undefined" != typeof d && (x = d);
        if (w < t) return h <= x ? (w = Math.floor(255 * Math.sqrt((h - w) / (x - w))), w = 16711680 + 256 * w + w) : (w = Math.floor(255 * Math.sqrt(1 - (h - x) / (t - x))), w = 65536 * w + 256 * w + 255), w;
        if (w > t) return h <= x ? (w = Math.floor(255 *
            Math.sqrt(1 - (h - x) / (t - x))), w = 65536 * w + 256 * w + 255) : (w = Math.floor(255 * Math.sqrt((h - w) / (x - w))), w = 16711680 + 256 * w + w), w
    };
    this.range = function() {
        return "undefined" != typeof b && "undefined" != typeof c ? [b, c] : null
    }
};
$3Dmol.Gradient.ROYGB = function(b, c) {
    "undefined" == typeof c && $.isArray(b) && 2 <= b.length && (c = b[1], b = b[0]);
    this.valueToHex = function(d, h) {
        var f, w;
        d *= 1;
        h ? (f = h[0], w = h[1]) : (f = b, w = c);
        if ("undefined" == typeof d) return 16777215;
        w > f ? (d < f && (d = f), d > w && (d = w)) : (d > f && (d = f), d < w && (d = w));
        var t = (f + w) / 2,
            x = (f + t) / 2,
            q = (t + w) / 2;
        if (f < w) return d < x ? (f = Math.floor(255 * Math.sqrt((d - f) / (x - f))), f = 256 * f + 16711680) : d < t ? (f = Math.floor(255 * Math.sqrt(1 - (d - x) / (t - x))), f = 65536 * f + 65280) : d < q ? (f = Math.floor(255 * Math.sqrt((d - t) / (q - t))), f = 65280 + 1 * f) :
            (f = Math.floor(255 * Math.sqrt(1 - (d - q) / (w - q))), f = 256 * f + 255), f;
        if (w < f) return d < x ? (f = Math.floor(255 * Math.sqrt(1 - (d - q) / (w - q))), f = 256 * f + 255) : d < t ? (f = Math.floor(255 * Math.sqrt((d - t) / (q - t))), f = 65280 + 1 * f) : d < q ? (f = Math.floor(255 * Math.sqrt(1 - (d - x) / (t - x))), f = 65536 * f + 65280) : (f = Math.floor(255 * Math.sqrt((d - f) / (x - f))), f = 256 * f + 16711680), f
    };
    this.range = function() {
        return "undefined" != typeof b && "undefined" != typeof c ? [b, c] : null
    }
};
$3Dmol.Gradient.Sinebow = function(b, c) {
    var d = 1;
    "undefined" == typeof c && $.isArray(b) && 2 <= b.length && (c = b[1], b = b[0]);
    c < b && (d = -1, b *= -1, c *= -1);
    this.valueToHex = function(h, f) {
        var w, t;
        h *= d;
        f ? (w = f[0], t = f[1]) : (w = b, t = c);
        if ("undefined" == typeof h) return 16777215;
        t > w ? (h < w && (h = w), h > t && (h = t)) : (h > w && (h = w), h < t && (h = t));
        var x = (h - w) / (t - w) * 5 / 6 + .5;
        w = Math.sin(Math.PI * x);
        w *= 255 * w;
        t = Math.sin(Math.PI * (x + 1 / 3));
        t *= 255 * t;
        x = Math.sin(Math.PI * (x + 2 / 3));
        return 65536 * Math.floor(w) + 256 * Math.floor(255 * x * x) + 1 * Math.floor(t)
    };
    this.range = function() {
        return "undefined" !=
            typeof b && "undefined" != typeof c ? [b, c] : null
    }
};
$3Dmol.Gradient.builtinGradients = {
    rwb: $3Dmol.Gradient.RWB,
    roygb: $3Dmol.Gradient.ROYGB,
    sinebow: $3Dmol.Gradient.Sinebow
};
$3Dmol.LabelCount = 0;
$3Dmol.Label = function(b, c) {
    this.id = $3Dmol.LabelCount++;
    this.stylespec = c || {};
    this.canvas = document.createElement("canvas");
    this.canvas.width = 134;
    this.canvas.height = 35;
    this.context = this.canvas.getContext("2d");
    this.sprite = new $3Dmol.Sprite;
    this.text = b
};
$3Dmol.Label.prototype = {
    constructor: $3Dmol.Label,
    getStyle: function() {
        return this.stylespec
    },
    setContext: function() {
        var b = function(b, d, h) {
            "undefined" != typeof b && (h = b instanceof $3Dmol.Color ? b.scaled() : $3Dmol.CC.color(b).scaled());
            "undefined" != typeof d && (h.a = parseFloat(d));
            return h
        };
        return function() {
            var c = this.stylespec,
                d = "undefined" == typeof c.useScreen ? !1 : c.useScreen,
                h = c.showBackground;
            if ("0" === h || "false" === h) h = !1;
            "undefined" == typeof h && (h = !0);
            var f = c.font ? c.font : "sans-serif",
                w = parseInt(c.fontSize) ?
                parseInt(c.fontSize) : 18,
                t = b(c.fontColor, c.fontOpacity, {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 1
                }),
                x = c.padding ? c.padding : 4,
                q = c.borderThickness ? c.borderThickness : 0,
                D = b(c.backgroundColor, c.backgroundOpacity, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                }),
                y = b(c.borderColor, c.borderOpacity, D),
                z = c.position ? c.position : {
                    x: -10,
                    y: 1,
                    z: 1
                },
                m = void 0 !== c.inFront ? c.inFront : !0;
            if ("false" === m || "0" === m) m = !1;
            var e = c.alignment || $3Dmol.SpriteAlignment.topLeft,
                l = "";
            c.bold && (l = "bold ");
            this.context.font = l + w + "px  " + f;
            var u = this.context.measureText(this.text).width;
            h ||
                (q = 0);
            var E = u + 2.5 * q + 2 * x,
                N = 1.25 * w + 2 * q + 2 * x;
            if (c.backgroundImage) {
                var l = c.backgroundImage,
                    s = c.backgroundWidth ? c.backgroundWidth : l.width,
                    g = c.backgroundHeight ? c.backgroundHeight : l.height;
                s > E && (E = s);
                g > N && (N = g)
            }
            this.canvas.width = E;
            this.canvas.height = N;
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            l = "";
            c.bold && (l = "bold ");
            this.context.font = l + w + "px  " + f;
            this.context.fillStyle = "rgba(" + D.r + "," + D.g + "," + D.b + "," + D.a + ")";
            this.context.strokeStyle = "rgba(" + y.r + "," + y.g + "," + y.b + "," + y.a + ")";
            this.context.lineWidth =
                q;
            h && (h = this.context, D = f = q, E -= 2 * q, N -= 2 * q, y = 0 < q, h.beginPath(), h.moveTo(f + 6, D), h.lineTo(f + E - 6, D), h.quadraticCurveTo(f + E, D, f + E, D + 6), h.lineTo(f + E, D + N - 6), h.quadraticCurveTo(f + E, D + N, f + E - 6, D + N), h.lineTo(f + 6, D + N), h.quadraticCurveTo(f, D + N, f, D + N - 6), h.lineTo(f, D + 6), h.quadraticCurveTo(f, D, f + 6, D), h.closePath(), h.fill(), y && h.stroke());
            c.backgroundImage && (l = c.backgroundImage, s = c.backgroundWidth ? c.backgroundWidth : l.width, g = c.backgroundHeight ? c.backgroundHeight : l.height, this.context.drawImage(l, 0, 0, s, g));
            this.context.fillStyle =
                "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
            this.context.fillText(this.text, q + x, w + q + x, u);
            c = new $3Dmol.Texture(this.canvas);
            c.needsUpdate = !0;
            this.sprite.material = new $3Dmol.SpriteMaterial({
                map: c,
                useScreenCoordinates: d,
                alignment: e,
                depthTest: !m
            });
            this.sprite.scale.set(1, 1, 1);
            this.sprite.position.set(z.x, z.y, z.z)
        }
    }(),
    dispose: function() {
        void 0 !== this.sprite.material.map && this.sprite.material.map.dispose();
        void 0 !== this.sprite.material && this.sprite.material.dispose()
    }
};
$3Dmol = $3Dmol || {};
$3Dmol.MarchingCubeInitializer = function() {
    var b = {
            march: function(b, t, x, q) {
                var D = !!q.fulltable,
                    y = q.hasOwnProperty("origin") && q.origin.hasOwnProperty("x") ? q.origin : {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    z = !!q.voxel,
                    m = q.matrix,
                    e = q.nX || 0,
                    l = q.nY || 0,
                    u = q.nZ || 0,
                    E = q.scale || 1,
                    N = null,
                    N = q.unitCube ? q.unitCube : {
                        x: E,
                        y: E,
                        z: E
                    },
                    s = new Int32Array(e * l * u);
                q = 0;
                for (E = s.length; q < E; ++q) s[q] = -1;
                var E = function(b, c, d, e, g, f) {
                        var h = {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            p = g;
                        e & 1 << g || !(e & 1 << f) || (p = f);
                        p & 1 && d++;
                        p & 2 && c++;
                        p & 4 && b++;
                        m ? (h = new $3Dmol.Vector3(b, c, d), h = h.applyMatrix4(m), h = {
                            x: h.x,
                            y: h.y,
                            z: h.z
                        }) : (h.x = y.x + N.x * b, h.y = y.y + N.y * c, h.z = y.z + N.z * d);
                        b = (l * b + c) * u + d;
                        if (z) return t.push(h), t.length - 1;
                        0 > s[b] && (s[b] = t.length, t.push(h));
                        return s[b]
                    },
                    g = new Int32Array(12),
                    M = D ? h : c,
                    D = D ? f : d;
                for (q = 0; q < e - 1; ++q)
                    for (var p = 0; p < l - 1; ++p)
                        for (var B = 0; B < u - 1; ++B) {
                            for (var A = 0, K = 0; 8 > K; ++K) A |= !!(b[(l * (q + ((K & 4) >> 2)) + p + ((K & 2) >> 1)) * u + B + (K & 1)] & 2) << K;
                            if (0 !== A && 255 !== A) {
                                var I = M[A];
                                if (0 !== I)
                                    for (K = D[A], I & 1 && (g[0] = E(q, p, B, A, 0, 1)), I & 2 && (g[1] = E(q, p, B, A, 1, 3)), I & 4 && (g[2] = E(q, p, B, A, 3, 2)), I & 8 && (g[3] = E(q, p, B, A, 2, 0)), I & 16 &&
                                        (g[4] = E(q, p, B, A, 4, 5)), I & 32 && (g[5] = E(q, p, B, A, 5, 7)), I & 64 && (g[6] = E(q, p, B, A, 7, 6)), I & 128 && (g[7] = E(q, p, B, A, 6, 4)), I & 256 && (g[8] = E(q, p, B, A, 0, 4)), I & 512 && (g[9] = E(q, p, B, A, 1, 5)), I & 1024 && (g[10] = E(q, p, B, A, 3, 7)), I & 2048 && (g[11] = E(q, p, B, A, 2, 6)), A = 0; A < K.length; A += 3) {
                                        var I = g[K[A]],
                                            H = g[K[A + 1]],
                                            F = g[K[A + 2]];
                                        z && 3 <= A && (t.push(t[I]), I = t.length - 1, t.push(t[H]), H = t.length - 1, t.push(t[F]), F = t.length - 1);
                                        x.push(I);
                                        x.push(H);
                                        x.push(F)
                                    }
                            }
                        }
            },
            laplacianSmooth: function(b, c, d) {
                var f = Array(c.length),
                    h, y, z, m;
                h = 0;
                for (y = c.length; h < y; h++) f[h] = {
                    x: 0,
                    y: 0,
                    z: 0
                };
                var e = Array(20),
                    l;
                for (h = 0; 20 > h; h++) e[h] = Array(c.length);
                h = 0;
                for (y = c.length; h < y; h++) e[0][h] = 0;
                h = 0;
                for (y = d.length / 3; h < y; h++) {
                    var u = 3 * h,
                        E = 3 * h + 1,
                        N = 3 * h + 2;
                    l = !0;
                    z = 0;
                    for (m = e[0][d[u]]; z < m; z++)
                        if (d[E] == e[z + 1][d[u]]) {
                            l = !1;
                            break
                        }
                    l && (e[0][d[u]]++, e[e[0][d[u]]][d[u]] = d[E]);
                    l = !0;
                    z = 0;
                    for (m = e[0][d[u]]; z < m; z++)
                        if (d[N] == e[z + 1][d[u]]) {
                            l = !1;
                            break
                        }
                    l && (e[0][d[u]]++, e[e[0][d[u]]][d[u]] = d[N]);
                    l = !0;
                    z = 0;
                    for (m = e[0][d[E]]; z < m; z++)
                        if (d[u] == e[z + 1][d[E]]) {
                            l = !1;
                            break
                        }
                    l && (e[0][d[E]]++, e[e[0][d[E]]][d[E]] = d[u]);
                    l = !0;
                    z = 0;
                    for (m = e[0][d[E]]; z < m; z++)
                        if (d[N] == e[z + 1][d[E]]) {
                            l = !1;
                            break
                        }
                    l && (e[0][d[E]]++, e[e[0][d[E]]][d[E]] = d[N]);
                    l = !0;
                    for (z = 0; z < e[0][d[N]]; z++)
                        if (d[u] == e[z + 1][d[N]]) {
                            l = !1;
                            break
                        }
                    l && (e[0][d[N]]++, e[e[0][d[N]]][d[N]] = d[u]);
                    l = !0;
                    z = 0;
                    for (m = e[0][d[N]]; z < m; z++)
                        if (d[E] == e[z + 1][d[N]]) {
                            l = !1;
                            break
                        }
                    l && (e[0][d[N]]++, e[e[0][d[N]]][d[N]] = d[E])
                }
                for (d = 0; d < b; d++) {
                    h = 0;
                    for (y = c.length; h < y; h++)
                        if (3 > e[0][h]) f[h].x = c[h].x, f[h].y = c[h].y, f[h].z = c[h].z;
                        else if (3 == e[0][h] || 4 == e[0][h]) {
                        f[h].x = 0;
                        f[h].y = 0;
                        z = f[h].z = 0;
                        for (m = e[0][h]; z < m; z++) f[h].x +=
                            c[e[z + 1][h]].x, f[h].y += c[e[z + 1][h]].y, f[h].z += c[e[z + 1][h]].z;
                        f[h].x += .5 * c[h].x;
                        f[h].y += .5 * c[h].y;
                        f[h].z += .5 * c[h].z;
                        f[h].x /= .5 + e[0][h];
                        f[h].y /= .5 + e[0][h];
                        f[h].z /= .5 + e[0][h]
                    } else {
                        f[h].x = 0;
                        f[h].y = 0;
                        z = f[h].z = 0;
                        for (m = e[0][h]; z < m; z++) f[h].x += c[e[z + 1][h]].x, f[h].y += c[e[z + 1][h]].y, f[h].z += c[e[z + 1][h]].z;
                        f[h].x += 1 * c[h].x;
                        f[h].y += 1 * c[h].y;
                        f[h].z += 1 * c[h].z;
                        f[h].x /= 1 + e[0][h];
                        f[h].y /= 1 + e[0][h];
                        f[h].z /= 1 + e[0][h]
                    }
                    h = 0;
                    for (y = c.length; h < y; h++) c[h].x = f[h].x, c[h].y = f[h].y, c[h].z = f[h].z
                }
            },
            edgeTable: [0, 0, 0, 0, 0, 0, 0, 2816,
                0, 0, 0, 1792, 0, 3328, 3584, 3840, 0, 0, 0, 138, 0, 21, 0, 134, 0, 0, 0, 652, 0, 2067, 3865, 3600, 0, 0, 0, 42, 0, 0, 0, 294, 0, 0, 21, 28, 0, 3875, 1049, 3360, 0, 168, 162, 170, 0, 645, 2475, 2210, 0, 687, 293, 172, 4010, 3747, 3497, 3232, 0, 0, 0, 0, 0, 69, 0, 900, 0, 0, 0, 1792, 138, 131, 1608, 1920, 0, 81, 0, 2074, 84, 85, 84, 86, 0, 81, 0, 3676, 330, 1105, 1881, 1616, 0, 0, 0, 42, 0, 69, 0, 502, 0, 0, 21, 3580, 138, 2035, 1273, 1520, 2816, 104, 2337, 106, 840, 581, 367, 102, 2816, 3695, 3429, 3180, 1898, 1635, 1385, 1120, 0, 0, 0, 0, 0, 0, 0, 3910, 0, 0, 69, 588, 42, 2083, 41, 2880, 0, 0, 0, 1722, 0, 2293, 4095, 3830, 0, 255, 757, 764,
                2538, 2291, 3065, 2800, 0, 0, 81, 338, 0, 3925, 1119, 3414, 84, 855, 85, 340, 2130, 2899, 89, 2384, 1792, 712, 194, 1162, 4036, 3781, 3535, 3270, 708, 719, 197, 204, 3018, 2755, 2505, 2240, 0, 0, 0, 0, 168, 420, 168, 1958, 162, 162, 676, 2988, 170, 163, 680, 928, 3328, 3096, 3328, 3642, 52, 53, 1855, 1590, 2340, 2111, 2869, 2620, 298, 51, 825, 560, 3584, 3584, 3090, 3482, 1668, 1941, 1183, 1430, 146, 2975, 2069, 2460, 154, 915, 153, 400, 3840, 3592, 3329, 3082, 1796, 1541, 1295, 1030, 2818, 2575, 2309, 2060, 778, 515, 265, 0
            ]
        },
        c = new Uint32Array(b.edgeTable),
        d = b.triTable = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [11,
                9, 8
            ],
            [],
            [],
            [],
            [8, 10, 9],
            [],
            [10, 8, 11],
            [9, 11, 10],
            [8, 10, 9, 8, 11, 10],
            [],
            [],
            [],
            [1, 7, 3],
            [],
            [4, 2, 0],
            [],
            [2, 1, 7],
            [],
            [],
            [],
            [2, 7, 3, 2, 9, 7],
            [],
            [1, 4, 11, 1, 0, 4],
            [3, 8, 0, 11, 9, 4, 11, 10, 9],
            [4, 11, 9, 11, 10, 9],
            [],
            [],
            [],
            [5, 3, 1],
            [],
            [],
            [],
            [2, 5, 8, 2, 1, 5],
            [],
            [],
            [2, 4, 0],
            [3, 2, 4],
            [],
            [0, 9, 1, 8, 10, 5, 8, 11, 10],
            [3, 4, 0, 3, 10, 4],
            [5, 8, 10, 8, 11, 10],
            [],
            [3, 5, 7],
            [7, 1, 5],
            [1, 7, 3, 1, 5, 7],
            [],
            [9, 2, 0, 9, 7, 2],
            [0, 3, 8, 1, 7, 11, 1, 5, 7],
            [11, 1, 7, 1, 5, 7],
            [],
            [9, 1, 0, 5, 3, 2, 5, 7, 3],
            [8, 2, 5, 8, 0, 2],
            [2, 5, 3, 5, 7, 3],
            [3, 9, 1, 3, 8, 9, 7, 11, 10, 7, 10, 5],
            [9, 1, 0, 10, 7, 11, 10, 5, 7],
            [3, 8, 0, 7,
                10, 5, 7, 11, 10
            ],
            [11, 5, 7, 11, 10, 5],
            [],
            [],
            [],
            [],
            [],
            [0, 6, 2],
            [],
            [7, 2, 9, 7, 9, 8],
            [],
            [],
            [],
            [8, 10, 9],
            [7, 1, 3],
            [7, 1, 0],
            [6, 9, 3, 6, 10, 9],
            [7, 10, 8, 10, 9, 8],
            [],
            [6, 0, 4],
            [],
            [11, 1, 4, 11, 3, 1],
            [2, 4, 6],
            [2, 0, 4, 2, 4, 6],
            [2, 4, 6],
            [1, 4, 2, 4, 6, 2],
            [],
            [6, 0, 4],
            [],
            [2, 11, 3, 6, 9, 4, 6, 10, 9],
            [8, 6, 1, 8, 1, 3],
            [10, 0, 6, 0, 4, 6],
            [8, 0, 3, 9, 6, 10, 9, 4, 6],
            [10, 4, 6, 10, 9, 4],
            [],
            [],
            [],
            [5, 3, 1],
            [],
            [0, 6, 2],
            [],
            [7, 4, 8, 5, 2, 1, 5, 6, 2],
            [],
            [],
            [2, 4, 0],
            [7, 4, 8, 2, 11, 3, 10, 5, 6],
            [7, 1, 3],
            [5, 6, 10, 0, 9, 1, 8, 7, 4],
            [5, 6, 10, 7, 0, 3, 7, 4, 0],
            [10, 5, 6, 4, 8, 7],
            [9, 11, 8],
            [3, 5, 6],
            [0, 5, 11, 0, 11, 8],
            [6, 3,
                5, 3, 1, 5
            ],
            [3, 9, 6, 3, 8, 9],
            [9, 6, 0, 6, 2, 0],
            [0, 3, 8, 2, 5, 6, 2, 1, 5],
            [1, 6, 2, 1, 5, 6],
            [9, 11, 8],
            [1, 0, 9, 6, 10, 5, 11, 3, 2],
            [6, 10, 5, 2, 8, 0, 2, 11, 8],
            [3, 2, 11, 10, 5, 6],
            [10, 5, 6, 9, 3, 8, 9, 1, 3],
            [0, 9, 1, 5, 6, 10],
            [8, 0, 3, 10, 5, 6],
            [10, 5, 6],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [1, 10, 2, 9, 11, 6, 9, 8, 11],
            [],
            [],
            [6, 0, 2],
            [3, 6, 9, 3, 2, 6],
            [3, 5, 1],
            [0, 5, 1, 0, 11, 5],
            [0, 3, 5],
            [6, 9, 11, 9, 8, 11],
            [],
            [],
            [],
            [4, 5, 9, 7, 1, 10, 7, 3, 1],
            [],
            [11, 6, 7, 2, 4, 5, 2, 0, 4],
            [11, 6, 7, 8, 0, 3, 1, 10, 2, 9, 4, 5],
            [6, 7, 11, 1, 10, 2, 9, 4, 5],
            [],
            [4, 1, 0, 4, 5, 1, 6, 7, 3, 6, 3, 2],
            [9, 4, 5, 0, 6, 7, 0, 2, 6],
            [4, 5, 9, 6, 3, 2, 6, 7, 3],
            [6, 7, 11, 5,
                3, 8, 5, 1, 3
            ],
            [6, 7, 11, 4, 1, 0, 4, 5, 1],
            [4, 5, 9, 3, 8, 0, 11, 6, 7],
            [9, 4, 5, 7, 11, 6],
            [],
            [],
            [0, 6, 4],
            [8, 6, 4, 8, 1, 6],
            [],
            [0, 10, 2, 0, 9, 10, 4, 8, 11, 4, 11, 6],
            [10, 2, 1, 6, 0, 3, 6, 4, 0],
            [10, 2, 1, 11, 4, 8, 11, 6, 4],
            [4, 2, 6],
            [1, 0, 9, 2, 4, 8, 2, 6, 4],
            [2, 4, 0, 2, 6, 4],
            [8, 2, 4, 2, 6, 4],
            [11, 4, 1, 11, 6, 4],
            [0, 9, 1, 4, 11, 6, 4, 8, 11],
            [3, 6, 0, 6, 4, 0],
            [8, 6, 4, 8, 11, 6],
            [10, 8, 9],
            [6, 3, 9, 6, 7, 3],
            [6, 7, 1],
            [10, 7, 1, 7, 3, 1],
            [7, 11, 6, 8, 10, 2, 8, 9, 10],
            [11, 6, 7, 10, 0, 9, 10, 2, 0],
            [2, 1, 10, 7, 11, 6, 8, 0, 3],
            [1, 10, 2, 6, 7, 11],
            [7, 2, 6, 7, 9, 2],
            [1, 0, 9, 3, 6, 7, 3, 2, 6],
            [7, 0, 6, 0, 2, 6],
            [2, 7, 3, 2, 6, 7],
            [7, 11, 6, 3, 9, 1,
                3, 8, 9
            ],
            [9, 1, 0, 11, 6, 7],
            [0, 3, 8, 11, 6, 7],
            [11, 6, 7],
            [],
            [],
            [],
            [],
            [5, 3, 7],
            [8, 5, 2, 8, 7, 5],
            [5, 3, 7],
            [1, 10, 2, 5, 8, 7, 5, 9, 8],
            [1, 7, 5],
            [1, 7, 5],
            [9, 2, 7, 9, 7, 5],
            [11, 3, 2, 8, 5, 9, 8, 7, 5],
            [1, 3, 7, 1, 7, 5],
            [0, 7, 1, 7, 5, 1],
            [9, 3, 5, 3, 7, 5],
            [9, 7, 5, 9, 8, 7],
            [8, 10, 11],
            [3, 4, 10, 3, 10, 11],
            [8, 10, 11],
            [5, 9, 4, 1, 11, 3, 1, 10, 11],
            [2, 4, 5],
            [5, 2, 4, 2, 0, 4],
            [0, 3, 8, 5, 9, 4, 10, 2, 1],
            [2, 1, 10, 9, 4, 5],
            [2, 8, 5, 2, 11, 8],
            [3, 2, 11, 1, 4, 5, 1, 0, 4],
            [9, 4, 5, 8, 2, 11, 8, 0, 2],
            [11, 3, 2, 9, 4, 5],
            [8, 5, 3, 5, 1, 3],
            [5, 0, 4, 5, 1, 0],
            [3, 8, 0, 4, 5, 9],
            [9, 4, 5],
            [11, 9, 10],
            [11, 9, 10],
            [1, 11, 4, 1, 10, 11],
            [8, 7, 4, 11,
                1, 10, 11, 3, 1
            ],
            [2, 7, 9, 2, 9, 10],
            [4, 8, 7, 0, 10, 2, 0, 9, 10],
            [2, 1, 10, 0, 7, 4, 0, 3, 7],
            [10, 2, 1, 8, 7, 4],
            [1, 7, 4],
            [3, 2, 11, 4, 8, 7, 9, 1, 0],
            [11, 4, 2, 4, 0, 2],
            [2, 11, 3, 7, 4, 8],
            [4, 1, 7, 1, 3, 7],
            [1, 0, 9, 8, 7, 4],
            [3, 4, 0, 3, 7, 4],
            [8, 7, 4],
            [8, 9, 10, 8, 10, 11],
            [3, 9, 11, 9, 10, 11],
            [0, 10, 8, 10, 11, 8],
            [10, 3, 1, 10, 11, 3],
            [2, 8, 10, 8, 9, 10],
            [9, 2, 0, 9, 10, 2],
            [8, 0, 3, 1, 10, 2],
            [10, 2, 1],
            [1, 11, 9, 11, 8, 9],
            [11, 3, 2, 0, 9, 1],
            [11, 0, 2, 11, 8, 0],
            [11, 3, 2],
            [8, 1, 3, 8, 9, 1],
            [9, 1, 0],
            [8, 0, 3],
            []
        ],
        h = [0, 265, 515, 778, 2060, 2309, 2575, 2822, 1030, 1295, 1541, 1804, 3082, 3331, 3593, 3840, 400, 153, 915, 666,
            2460, 2197, 2975, 2710, 1430, 1183, 1941, 1692, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 2620, 2869, 2111, 2358, 1590, 1855, 1077, 1340, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 2988, 2725, 2479, 2214, 1958, 1711, 1445, 1196, 4010, 3747, 3497, 3232, 2240, 2505, 2755, 3018, 204, 453, 719, 966, 3270, 3535, 3781, 4044, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 348, 85, 863, 598, 3414, 3167, 3925, 3676, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 764, 1013, 255, 502, 3830, 4095, 3317, 3580, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 876, 613, 367, 102, 3942, 3695, 3429, 3180, 1898, 1635,
            1385, 1120, 1120, 1385, 1635, 1898, 3180, 3429, 3695, 3942, 102, 367, 613, 876, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 3580, 3317, 4095, 3830, 502, 255, 1013, 764, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 3676, 3925, 3167, 3414, 598, 863, 85, 348, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 4044, 3781, 3535, 3270, 966, 719, 453, 204, 3018, 2755, 2505, 2240, 3232, 3497, 3747, 4010, 1196, 1445, 1711, 1958, 2214, 2479, 2725, 2988, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 1340, 1077, 1855, 1590, 2358, 2111, 2869, 2620, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 1692, 1941, 1183, 1430,
            2710, 2975, 2197, 2460, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 1804, 1541, 1295, 1030, 2822, 2575, 2309, 2060, 778, 515, 265, 0
        ],
        f = [
            [],
            [8, 3, 0],
            [9, 0, 1],
            [8, 3, 1, 8, 1, 9],
            [11, 2, 3],
            [11, 2, 0, 11, 0, 8],
            [11, 2, 3, 0, 1, 9],
            [2, 1, 11, 1, 9, 11, 11, 9, 8],
            [10, 1, 2],
            [8, 3, 0, 1, 2, 10],
            [9, 0, 2, 9, 2, 10],
            [3, 2, 8, 2, 10, 8, 8, 10, 9],
            [10, 1, 3, 10, 3, 11],
            [1, 0, 10, 0, 8, 10, 10, 8, 11],
            [0, 3, 9, 3, 11, 9, 9, 11, 10],
            [8, 10, 9, 8, 11, 10],
            [8, 4, 7],
            [3, 0, 4, 3, 4, 7],
            [1, 9, 0, 8, 4, 7],
            [9, 4, 1, 4, 7, 1, 1, 7, 3],
            [2, 3, 11, 7, 8, 4],
            [7, 11, 4, 11, 2, 4, 4, 2, 0],
            [3, 11, 2, 4, 7, 8, 9, 0, 1],
            [2, 7, 11, 2, 1, 7, 1, 4, 7, 1, 9, 4],
            [10, 1, 2,
                8, 4, 7
            ],
            [2, 10, 1, 0, 4, 7, 0, 7, 3],
            [4, 7, 8, 0, 2, 10, 0, 10, 9],
            [2, 7, 3, 2, 9, 7, 7, 9, 4, 2, 10, 9],
            [8, 4, 7, 11, 10, 1, 11, 1, 3],
            [11, 4, 7, 1, 4, 11, 1, 11, 10, 1, 0, 4],
            [3, 8, 0, 7, 11, 4, 11, 9, 4, 11, 10, 9],
            [7, 11, 4, 4, 11, 9, 11, 10, 9],
            [9, 5, 4],
            [3, 0, 8, 4, 9, 5],
            [5, 4, 0, 5, 0, 1],
            [4, 8, 5, 8, 3, 5, 5, 3, 1],
            [11, 2, 3, 9, 5, 4],
            [9, 5, 4, 8, 11, 2, 8, 2, 0],
            [3, 11, 2, 1, 5, 4, 1, 4, 0],
            [8, 5, 4, 2, 5, 8, 2, 8, 11, 2, 1, 5],
            [2, 10, 1, 9, 5, 4],
            [0, 8, 3, 5, 4, 9, 10, 1, 2],
            [10, 5, 2, 5, 4, 2, 2, 4, 0],
            [3, 4, 8, 3, 2, 4, 2, 5, 4, 2, 10, 5],
            [5, 4, 9, 1, 3, 11, 1, 11, 10],
            [0, 9, 1, 4, 8, 5, 8, 10, 5, 8, 11, 10],
            [3, 4, 0, 3, 10, 4, 4, 10, 5, 3, 11, 10],
            [4, 8, 5, 5, 8,
                10, 8, 11, 10
            ],
            [9, 5, 7, 9, 7, 8],
            [0, 9, 3, 9, 5, 3, 3, 5, 7],
            [8, 0, 7, 0, 1, 7, 7, 1, 5],
            [1, 7, 3, 1, 5, 7],
            [11, 2, 3, 8, 9, 5, 8, 5, 7],
            [9, 2, 0, 9, 7, 2, 2, 7, 11, 9, 5, 7],
            [0, 3, 8, 2, 1, 11, 1, 7, 11, 1, 5, 7],
            [2, 1, 11, 11, 1, 7, 1, 5, 7],
            [1, 2, 10, 5, 7, 8, 5, 8, 9],
            [9, 1, 0, 10, 5, 2, 5, 3, 2, 5, 7, 3],
            [5, 2, 10, 8, 2, 5, 8, 5, 7, 8, 0, 2],
            [10, 5, 2, 2, 5, 3, 5, 7, 3],
            [3, 9, 1, 3, 8, 9, 7, 11, 10, 7, 10, 5],
            [9, 1, 0, 10, 7, 11, 10, 5, 7],
            [3, 8, 0, 7, 10, 5, 7, 11, 10],
            [11, 5, 7, 11, 10, 5],
            [11, 7, 6],
            [0, 8, 3, 11, 7, 6],
            [9, 0, 1, 11, 7, 6],
            [7, 6, 11, 3, 1, 9, 3, 9, 8],
            [2, 3, 7, 2, 7, 6],
            [8, 7, 0, 7, 6, 0, 0, 6, 2],
            [1, 9, 0, 3, 7, 6, 3, 6, 2],
            [7, 6, 2, 7, 2, 9, 2, 1, 9, 7,
                9, 8
            ],
            [1, 2, 10, 6, 11, 7],
            [2, 10, 1, 7, 6, 11, 8, 3, 0],
            [11, 7, 6, 10, 9, 0, 10, 0, 2],
            [7, 6, 11, 3, 2, 8, 8, 2, 10, 8, 10, 9],
            [6, 10, 7, 10, 1, 7, 7, 1, 3],
            [6, 10, 1, 6, 1, 7, 7, 1, 0, 7, 0, 8],
            [9, 0, 3, 6, 9, 3, 6, 10, 9, 6, 3, 7],
            [6, 10, 7, 7, 10, 8, 10, 9, 8],
            [8, 4, 6, 8, 6, 11],
            [11, 3, 6, 3, 0, 6, 6, 0, 4],
            [0, 1, 9, 4, 6, 11, 4, 11, 8],
            [1, 9, 4, 11, 1, 4, 11, 3, 1, 11, 4, 6],
            [3, 8, 2, 8, 4, 2, 2, 4, 6],
            [2, 0, 4, 2, 4, 6],
            [1, 9, 0, 3, 8, 2, 2, 8, 4, 2, 4, 6],
            [9, 4, 1, 1, 4, 2, 4, 6, 2],
            [10, 1, 2, 11, 8, 4, 11, 4, 6],
            [10, 1, 2, 11, 3, 6, 6, 3, 0, 6, 0, 4],
            [0, 2, 10, 0, 10, 9, 4, 11, 8, 4, 6, 11],
            [2, 11, 3, 6, 9, 4, 6, 10, 9],
            [8, 4, 6, 8, 6, 1, 6, 10, 1, 8, 1, 3],
            [1, 0, 10, 10,
                0, 6, 0, 4, 6
            ],
            [8, 0, 3, 9, 6, 10, 9, 4, 6],
            [10, 4, 6, 10, 9, 4],
            [9, 5, 4, 7, 6, 11],
            [4, 9, 5, 3, 0, 8, 11, 7, 6],
            [6, 11, 7, 4, 0, 1, 4, 1, 5],
            [6, 11, 7, 4, 8, 5, 5, 8, 3, 5, 3, 1],
            [4, 9, 5, 6, 2, 3, 6, 3, 7],
            [9, 5, 4, 8, 7, 0, 0, 7, 6, 0, 6, 2],
            [4, 0, 1, 4, 1, 5, 6, 3, 7, 6, 2, 3],
            [7, 4, 8, 5, 2, 1, 5, 6, 2],
            [6, 11, 7, 1, 2, 10, 9, 5, 4],
            [11, 7, 6, 8, 3, 0, 1, 2, 10, 9, 5, 4],
            [11, 7, 6, 10, 5, 2, 2, 5, 4, 2, 4, 0],
            [7, 4, 8, 2, 11, 3, 10, 5, 6],
            [4, 9, 5, 6, 10, 7, 7, 10, 1, 7, 1, 3],
            [5, 6, 10, 0, 9, 1, 8, 7, 4],
            [5, 6, 10, 7, 0, 3, 7, 4, 0],
            [10, 5, 6, 4, 8, 7],
            [5, 6, 9, 6, 11, 9, 9, 11, 8],
            [0, 9, 5, 0, 5, 3, 3, 5, 6, 3, 6, 11],
            [0, 1, 5, 0, 5, 11, 5, 6, 11, 0, 11, 8],
            [11, 3, 6, 6, 3, 5,
                3, 1, 5
            ],
            [9, 5, 6, 3, 9, 6, 3, 8, 9, 3, 6, 2],
            [5, 6, 9, 9, 6, 0, 6, 2, 0],
            [0, 3, 8, 2, 5, 6, 2, 1, 5],
            [1, 6, 2, 1, 5, 6],
            [1, 2, 10, 5, 6, 9, 9, 6, 11, 9, 11, 8],
            [1, 0, 9, 6, 10, 5, 11, 3, 2],
            [6, 10, 5, 2, 8, 0, 2, 11, 8],
            [3, 2, 11, 10, 5, 6],
            [10, 5, 6, 9, 3, 8, 9, 1, 3],
            [0, 9, 1, 5, 6, 10],
            [8, 0, 3, 10, 5, 6],
            [10, 5, 6],
            [10, 6, 5],
            [8, 3, 0, 10, 6, 5],
            [0, 1, 9, 5, 10, 6],
            [10, 6, 5, 9, 8, 3, 9, 3, 1],
            [3, 11, 2, 10, 6, 5],
            [6, 5, 10, 2, 0, 8, 2, 8, 11],
            [1, 9, 0, 6, 5, 10, 11, 2, 3],
            [1, 10, 2, 5, 9, 6, 9, 11, 6, 9, 8, 11],
            [1, 2, 6, 1, 6, 5],
            [0, 8, 3, 2, 6, 5, 2, 5, 1],
            [5, 9, 6, 9, 0, 6, 6, 0, 2],
            [9, 6, 5, 3, 6, 9, 3, 9, 8, 3, 2, 6],
            [11, 6, 3, 6, 5, 3, 3, 5, 1],
            [0, 5, 1, 0, 11, 5, 5,
                11, 6, 0, 8, 11
            ],
            [0, 5, 9, 0, 3, 5, 3, 6, 5, 3, 11, 6],
            [5, 9, 6, 6, 9, 11, 9, 8, 11],
            [10, 6, 5, 4, 7, 8],
            [5, 10, 6, 7, 3, 0, 7, 0, 4],
            [5, 10, 6, 0, 1, 9, 8, 4, 7],
            [4, 5, 9, 6, 7, 10, 7, 1, 10, 7, 3, 1],
            [7, 8, 4, 2, 3, 11, 10, 6, 5],
            [11, 6, 7, 10, 2, 5, 2, 4, 5, 2, 0, 4],
            [11, 6, 7, 8, 0, 3, 1, 10, 2, 9, 4, 5],
            [6, 7, 11, 1, 10, 2, 9, 4, 5],
            [7, 8, 4, 5, 1, 2, 5, 2, 6],
            [4, 1, 0, 4, 5, 1, 6, 7, 3, 6, 3, 2],
            [9, 4, 5, 8, 0, 7, 0, 6, 7, 0, 2, 6],
            [4, 5, 9, 6, 3, 2, 6, 7, 3],
            [6, 7, 11, 4, 5, 8, 5, 3, 8, 5, 1, 3],
            [6, 7, 11, 4, 1, 0, 4, 5, 1],
            [4, 5, 9, 3, 8, 0, 11, 6, 7],
            [9, 4, 5, 7, 11, 6],
            [10, 6, 4, 10, 4, 9],
            [8, 3, 0, 9, 10, 6, 9, 6, 4],
            [1, 10, 0, 10, 6, 0, 0, 6, 4],
            [8, 6, 4, 8, 1, 6, 6, 1, 10,
                8, 3, 1
            ],
            [2, 3, 11, 6, 4, 9, 6, 9, 10],
            [0, 10, 2, 0, 9, 10, 4, 8, 11, 4, 11, 6],
            [10, 2, 1, 11, 6, 3, 6, 0, 3, 6, 4, 0],
            [10, 2, 1, 11, 4, 8, 11, 6, 4],
            [9, 1, 4, 1, 2, 4, 4, 2, 6],
            [1, 0, 9, 3, 2, 8, 2, 4, 8, 2, 6, 4],
            [2, 4, 0, 2, 6, 4],
            [3, 2, 8, 8, 2, 4, 2, 6, 4],
            [1, 4, 9, 11, 4, 1, 11, 1, 3, 11, 6, 4],
            [0, 9, 1, 4, 11, 6, 4, 8, 11],
            [11, 6, 3, 3, 6, 0, 6, 4, 0],
            [8, 6, 4, 8, 11, 6],
            [6, 7, 10, 7, 8, 10, 10, 8, 9],
            [9, 3, 0, 6, 3, 9, 6, 9, 10, 6, 7, 3],
            [6, 1, 10, 6, 7, 1, 7, 0, 1, 7, 8, 0],
            [6, 7, 10, 10, 7, 1, 7, 3, 1],
            [7, 11, 6, 3, 8, 2, 8, 10, 2, 8, 9, 10],
            [11, 6, 7, 10, 0, 9, 10, 2, 0],
            [2, 1, 10, 7, 11, 6, 8, 0, 3],
            [1, 10, 2, 6, 7, 11],
            [7, 2, 6, 7, 9, 2, 2, 9, 1, 7, 8, 9],
            [1, 0, 9, 3,
                6, 7, 3, 2, 6
            ],
            [8, 0, 7, 7, 0, 6, 0, 2, 6],
            [2, 7, 3, 2, 6, 7],
            [7, 11, 6, 3, 9, 1, 3, 8, 9],
            [9, 1, 0, 11, 6, 7],
            [0, 3, 8, 11, 6, 7],
            [11, 6, 7],
            [11, 7, 5, 11, 5, 10],
            [3, 0, 8, 7, 5, 10, 7, 10, 11],
            [9, 0, 1, 10, 11, 7, 10, 7, 5],
            [3, 1, 9, 3, 9, 8, 7, 10, 11, 7, 5, 10],
            [10, 2, 5, 2, 3, 5, 5, 3, 7],
            [5, 10, 2, 8, 5, 2, 8, 7, 5, 8, 2, 0],
            [9, 0, 1, 10, 2, 5, 5, 2, 3, 5, 3, 7],
            [1, 10, 2, 5, 8, 7, 5, 9, 8],
            [2, 11, 1, 11, 7, 1, 1, 7, 5],
            [0, 8, 3, 2, 11, 1, 1, 11, 7, 1, 7, 5],
            [9, 0, 2, 9, 2, 7, 2, 11, 7, 9, 7, 5],
            [11, 3, 2, 8, 5, 9, 8, 7, 5],
            [1, 3, 7, 1, 7, 5],
            [8, 7, 0, 0, 7, 1, 7, 5, 1],
            [0, 3, 9, 9, 3, 5, 3, 7, 5],
            [9, 7, 5, 9, 8, 7],
            [4, 5, 8, 5, 10, 8, 8, 10, 11],
            [3, 0, 4, 3, 4, 10, 4, 5, 10,
                3, 10, 11
            ],
            [0, 1, 9, 4, 5, 8, 8, 5, 10, 8, 10, 11],
            [5, 9, 4, 1, 11, 3, 1, 10, 11],
            [3, 8, 4, 3, 4, 2, 2, 4, 5, 2, 5, 10],
            [10, 2, 5, 5, 2, 4, 2, 0, 4],
            [0, 3, 8, 5, 9, 4, 10, 2, 1],
            [2, 1, 10, 9, 4, 5],
            [8, 4, 5, 2, 8, 5, 2, 11, 8, 2, 5, 1],
            [3, 2, 11, 1, 4, 5, 1, 0, 4],
            [9, 4, 5, 8, 2, 11, 8, 0, 2],
            [11, 3, 2, 9, 4, 5],
            [4, 5, 8, 8, 5, 3, 5, 1, 3],
            [5, 0, 4, 5, 1, 0],
            [3, 8, 0, 4, 5, 9],
            [9, 4, 5],
            [7, 4, 11, 4, 9, 11, 11, 9, 10],
            [3, 0, 8, 7, 4, 11, 11, 4, 9, 11, 9, 10],
            [11, 7, 4, 1, 11, 4, 1, 10, 11, 1, 4, 0],
            [8, 7, 4, 11, 1, 10, 11, 3, 1],
            [2, 3, 7, 2, 7, 9, 7, 4, 9, 2, 9, 10],
            [4, 8, 7, 0, 10, 2, 0, 9, 10],
            [2, 1, 10, 0, 7, 4, 0, 3, 7],
            [10, 2, 1, 8, 7, 4],
            [2, 11, 7, 2, 7, 1, 1, 7, 4, 1, 4,
                9
            ],
            [3, 2, 11, 4, 8, 7, 9, 1, 0],
            [7, 4, 11, 11, 4, 2, 4, 0, 2],
            [2, 11, 3, 7, 4, 8],
            [9, 1, 4, 4, 1, 7, 1, 3, 7],
            [1, 0, 9, 8, 7, 4],
            [3, 4, 0, 3, 7, 4],
            [8, 7, 4],
            [8, 9, 10, 8, 10, 11],
            [0, 9, 3, 3, 9, 11, 9, 10, 11],
            [1, 10, 0, 0, 10, 8, 10, 11, 8],
            [10, 3, 1, 10, 11, 3],
            [3, 8, 2, 2, 8, 10, 8, 9, 10],
            [9, 2, 0, 9, 10, 2],
            [8, 0, 3, 1, 10, 2],
            [10, 2, 1],
            [2, 11, 1, 1, 11, 9, 11, 8, 9],
            [11, 3, 2, 0, 9, 1],
            [11, 0, 2, 11, 8, 0],
            [11, 3, 2],
            [8, 1, 3, 8, 9, 1],
            [9, 1, 0],
            [8, 0, 3],
            []
        ];
    return b
};
$3Dmol.MarchingCube = $3Dmol.MarchingCubeInitializer();
$3Dmol.Parsers = function() {
    var b = {},
        c = function(b) {
            for (var c = 0, d = b.length; c < d; c++) b[c].index || (b[c].index = c);
            for (var d = {}, e = 0; e < b.length; e++) {
                var c = b[e],
                    l = Math.floor(c.x / 4.95),
                    f = Math.floor(c.y / 4.95),
                    h = Math.floor(c.z / 4.95);
                d[l] || (d[l] = {});
                d[l][f] || (d[l][f] = {});
                d[l][f][h] || (d[l][f][h] = []);
                d[l][f][h].push(c)
            }
            b = [{
                x: 0,
                y: 0,
                z: 1
            }, {
                x: 0,
                y: 1,
                z: -1
            }, {
                x: 0,
                y: 1,
                z: 0
            }, {
                x: 0,
                y: 1,
                z: 1
            }, {
                x: 1,
                y: -1,
                z: -1
            }, {
                x: 1,
                y: -1,
                z: 0
            }, {
                x: 1,
                y: -1,
                z: 1
            }, {
                x: 1,
                y: 0,
                z: -1
            }, {
                x: 1,
                y: 0,
                z: 0
            }, {
                x: 1,
                y: 0,
                z: 1
            }, {
                x: 1,
                y: 1,
                z: -1
            }, {
                x: 1,
                y: 1,
                z: 0
            }, {
                x: 1,
                y: 1,
                z: 1
            }];
            for (l in d)
                for (f in l =
                    parseInt(l), d[l])
                    for (h in f = parseInt(f), d[l][f]) {
                        h = parseInt(h);
                        e = d[l][f][h];
                        for (c = 0; c < e.length; c++)
                            for (var q = e[c], s = c + 1; s < e.length; s++) {
                                var g = e[s];
                                t(q, g) && -1 == q.bonds.indexOf(g.index) && (q.bonds.push(g.index), q.bondOrder.push(1), g.bonds.push(q.index), g.bondOrder.push(1))
                            }
                        for (c = 0; c < b.length; c++)
                            if (s = b[c], d[l + s.x] && d[l + s.x][f + s.y] && d[l + s.x][f + s.y][h + s.z])
                                for (q = e, s = d[l + s.x][f + s.y][h + s.z], g = 0; g < q.length; g++)
                                    for (var x = q[g], p = 0; p < s.length; p++) {
                                        var w = s[p];
                                        t(x, w) && -1 == x.bonds.indexOf(w.index) && (x.bonds.push(w.index),
                                            x.bondOrder.push(1), w.bonds.push(x.index), w.bondOrder.push(1))
                                    }
                    }
        },
        d = function(b) {
            var d = [],
                f = [],
                e, l;
            e = 0;
            for (l = b.length; e < l; e++) {
                var h = b[e];
                h.index = e;
                h.hetflag ? f.push(h) : d.push(h)
            }
            c(f);
            d.sort(function(b, c) {
                return b.chain != c.chain ? b.chain < c.chain ? -1 : 1 : b.resi - c.resi
            });
            var f = b = -1,
                q;
            e = 0;
            for (l = d.length; e < l; e++) {
                h = d[e];
                h.resi !== b && (b = h.resi, q || f++, q = !1);
                h.reschain = f;
                for (var x = e + 1; x < d.length; x++) {
                    var s = d[x];
                    if (s.chain != h.chain) break;
                    if (1 < s.resi - h.resi) break;
                    t(h, s) && (-1 === h.bonds.indexOf(s.index) && (h.bonds.push(s.index),
                        h.bondOrder.push(1), s.bonds.push(h.index), s.bondOrder.push(1)), h.resi !== s.resi && (q = !0))
                }
            }
        },
        h = function(b) {
            var c = [],
                d, e;
            d = 0;
            for (e = b.length; d < e; d++) {
                b[d].index = d;
                var l = b[d];
                l.hetflag || "N" !== l.atom && "O" !== l.atom || (c.push(l), l.hbondOther = null, l.hbondDistanceSq = Number.POSITIVE_INFINITY)
            }
            c.sort(function(b, c) {
                return b.z - c.z
            });
            d = 0;
            for (e = c.length; d < e; d++)
                for (l = c[d], b = d + 1; b < e; b++) {
                    var f = c[b],
                        h = f.z - l.z;
                    if (3.2 < h) break;
                    if (f.atom != l.atom) {
                        var q = Math.abs(f.y - l.y);
                        if (!(3.2 < q)) {
                            var s = Math.abs(f.x - l.x);
                            3.2 < s || (h = s *
                                s + q * q + h * h, 10.24 < h || f.chain == l.chain && 4 > Math.abs(f.resi - l.resi) || (h < l.hbondDistanceSq && (l.hbondOther = f, l.hbondDistanceSq = h), h < f.hbondDistanceSq && (f.hbondOther = l, f.hbondDistanceSq = h)))
                        }
                    }
                }
        },
        f = function(b) {
            h(b);
            var c = {},
                d, e, l, f, q;
            d = 0;
            for (e = b.length; d < e; d++) f = b[d], "undefined" === typeof c[f.chain] && (c[f.chain] = []), isFinite(f.hbondDistanceSq) && (q = f.hbondOther, "undefined" === typeof c[q.chain] && (c[q.chain] = []), 4 === Math.abs(q.resi - f.resi) && (c[f.chain][f.resi] = "h"));
            for (l in c)
                for (d = 1; d < c[l].length - 1; d++) e = c[l][d -
                    1
                ], f = c[l][d + 1], q = c[l][d], "h" == e && e == f && q != e && (c[l][d] = e);
            d = 0;
            for (e = b.length; d < e; d++) f = b[d], isFinite(f.hbondDistanceSq) && "h" != c[f.chain][f.resi] && "h" != f.ss && (c[f.chain][f.resi] = "maybesheet");
            d = 0;
            for (e = b.length; d < e; d++)
                if (f = b[d], isFinite(f.hbondDistanceSq) && "maybesheet" == c[f.chain][f.resi]) {
                    q = f.hbondOther;
                    var t = c[q.chain][q.resi];
                    if ("maybesheet" == t || "s" == t) c[f.chain][f.resi] = "s", c[q.chain][q.resi] = "s"
                }
            for (l in c) {
                for (d = 1; d < c[l].length - 1; d++) e = c[l][d - 1], f = c[l][d + 1], q = c[l][d], "s" == e && e == f && q != e && (c[l][d] =
                    e);
                for (d = 0; d < c[l].length; d++) q = c[l][d], "h" != q && "s" != q || c[l][d - 1] == q || c[l][d + 1] == q || delete c[l][d]
            }
            d = 0;
            for (e = b.length; d < e; d++) f = b[d], q = c[f.chain][f.resi], "undefined" != typeof q && "maybesheet" != q && (f.ss = q, c[f.chain][f.resi - 1] != q && (f.ssbegin = !0), c[f.chain][f.resi + 1] != q && (f.ssend = !0))
        };
    b.vasp = b.VASP = function(b, c) {
        var d = [
                []
            ],
            e, f, h, q, t = b.replace(/^\s+/, "").split(/[\n\r]/);
        if (3 > t.length) return d;
        if (t[1].match(/\d+/)) e = parseFloat(t[1]);
        else return console.log("Warning: second line of the vasp structure file must be a number"),
            d;
        if (0 > e) return console.log("Warning: Vasp implementation for negative lattice lengths is not yet available"), d;
        f = new Float32Array(t[2].replace(/^\s+/, "").split(/\s+/));
        h = new Float32Array(t[3].replace(/^\s+/, "").split(/\s+/));
        q = new Float32Array(t[4].replace(/^\s+/, "").split(/\s+/));
        var s = t[5].replace(/\s+/, "").replace(/\s+$/, "").split(/\s+/),
            g = new Int16Array(t[6].replace(/^\s+/, "").split(/\s+/)),
            x = t[7].replace(/\s+/, "");
        if (x.match(/C/)) x = "cartesian";
        else if (x.match(/D/)) x = "direct";
        else return console.log("Warning: Unknown vasp mode in POSCAR file: mode must be either C(artesian) or D(irect)"),
            d;
        if (s.length != g.length) return console.log("Warning: declaration of atomary species wrong:"), console.log(s), console.log(g), d;
        t.splice(0, 8);
        for (var p = 0, w = 0, A = s.length; w < A; w++) {
            for (var D = s[w], I = 0, H = g[w]; I < H; I++) {
                var F = new Float32Array(t[p + I].replace(/^\s+/, "").split(/\s+/));
                atom = {};
                atom.elem = D;
                "cartesian" == x ? (atom.x = e * F[0], atom.y = e * F[1], atom.z = e * F[2]) : (atom.x = e * (F[0] * f[0] + F[1] * h[0] + F[2] * q[0]), atom.y = e * (F[0] * f[1] + F[1] * h[1] + F[2] * q[1]), atom.z = e * (F[0] * f[2] + F[1] * h[2] + F[2] * q[2]));
                atom.bonds = [];
                d[0].push(atom)
            }
            p +=
                g[w]
        }
        return d
    };
    b.cube = b.CUBE = function(b, d) {
        var f = [
                []
            ],
            e = b.replace(/^\s+/, "").split(/\n\r|\r+/);
        if (6 > e.length) return f;
        for (var l = e[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "), h = Math.abs(parseFloat(l[0])), l = e[3].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "), l = 0 < parseFloat(l[0]) ? .529177 : 1, e = e.splice(6, h), h = f[f.length - 1].length, q = h + e.length, t = h; t < q; ++t) {
            var s = {};
            s.serial = t;
            var g = e[t - h].replace(/^\s+/, "").replace(/\s+/g, " ").split(" ");
            6 == g[0] ? s.elem = "C" : 1 == g[0] ? s.elem = "H" : 8 == g[0] ? s.elem =
                "O" : 17 == g[0] && (s.elem = "Cl");
            s.x = parseFloat(g[2]) * l;
            s.y = parseFloat(g[3]) * l;
            s.z = parseFloat(g[4]) * l;
            s.hetflag = !0;
            s.bonds = [];
            s.bondOrder = [];
            s.properties = {};
            f[f.length - 1].push(s)
        }
        for (t = 0; t < f.length; t++) c(f[t]);
        return f
    };
    b.xyz = b.XYZ = function(b, d) {
        for (var f = [
                []
            ], e = b.split(/\r?\n|\r/); 0 < e.length && !(3 > e.length);) {
            var l = parseInt(e[0]);
            if (isNaN(l) || 0 >= l) break;
            if (e.length < l + 2) break;
            for (var h = 2, q = f[f.length - 1].length, l = q + l; q < l; q++) {
                var t = e[h++].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
                    s = {};
                s.serial = q;
                var g = t[0];
                s.atom = s.elem = g[0].toUpperCase() + g.substr(1).toLowerCase();
                s.x = parseFloat(t[1]);
                s.y = parseFloat(t[2]);
                s.z = parseFloat(t[3]);
                s.hetflag = !0;
                s.bonds = [];
                s.bondOrder = [];
                s.properties = {};
                f[f.length - 1][q] = s;
                7 <= t.length && (s.dx = parseFloat(t[4]), s.dy = parseFloat(t[5]), s.dz = parseFloat(t[6]))
            }
            if (d.multimodel) f.push([]), e.splice(0, h);
            else break
        }
        for (q = 0; q < f.length; q++) c(f[q]);
        if (d.onemol)
            for (e = f, f = [], f.push(e[0]), q = 1; q < e.length; q++)
                for (h = f[0].length, l = 0; l < e[q].length; l++) {
                    t = e[q][l];
                    for (s = 0; s < t.bonds.length; s++) t.bonds[s] +=
                        h;
                    t.index = f[0].length;
                    t.serial = f[0].length;
                    f[0].push(t)
                }
        return f
    };
    b.sdf = b.SDF = function(b, c) {
        var d = [
                []
            ],
            e = !1;
        "undefined" !== typeof c.keepH && (e = !c.keepH);
        for (var f = b.split(/\r?\n|\r/); 0 < f.length && !(4 > f.length);) {
            var h = parseInt(f[3].substr(0, 3));
            if (isNaN(h) || 0 >= h) break;
            var q = parseInt(f[3].substr(3, 3)),
                t = 4;
            if (f.length < 4 + h + q) break;
            for (var s = [], g = d[d.length - 1].length, x = g + h, p, h = g; h < x; h++, t++) {
                p = f[t];
                var w = {},
                    A = p.substr(31, 3).replace(/ /g, "");
                w.atom = w.elem = A[0].toUpperCase() + A.substr(1).toLowerCase();
                "H" ==
                w.elem && e || (w.serial = h, s[h] = d[d.length - 1].length, w.x = parseFloat(p.substr(0, 10)), w.y = parseFloat(p.substr(10, 10)), w.z = parseFloat(p.substr(20, 10)), w.hetflag = !0, w.bonds = [], w.bondOrder = [], w.properties = {}, w.index = d[d.length - 1].length, d[d.length - 1].push(w))
            }
            for (h = 0; h < q; h++, t++) p = f[t], x = s[parseInt(p.substr(0, 3)) - 1 + g], w = s[parseInt(p.substr(3, 3)) - 1 + g], p = parseInt(p.substr(6, 3)), "undefined" != typeof x && "undefined" != typeof w && (d[d.length - 1][x].bonds.push(w), d[d.length - 1][x].bondOrder.push(p), d[d.length - 1][w].bonds.push(x),
                d[d.length - 1][w].bondOrder.push(p));
            if (c.multimodel) {
                for (c.onemol || d.push([]);
                    "$$$$" != f[t];) t++;
                f.splice(0, ++t)
            } else break
        }
        return d
    };
    b.cdjson = b.json = function(b, c) {
        var d = [
            []
        ];
        "string" === typeof b && (b = JSON.parse(b));
        for (var e = b.m, f = e[0].a, h = e[0].b, q = e[0].s, t = void 0 !== c && void 0 !== c.parseStyle ? c.parseStyle : void 0 !== q, e = d[d.length - 1].length, s = 0; s < f.length; s++) {
            var g = f[s],
                x = {};
            x.id = g.i;
            x.x = g.x;
            x.y = g.y;
            x.z = g.z || 0;
            x.bonds = [];
            x.bondOrder = [];
            var p = g.l || "C";
            x.elem = p[0].toUpperCase() + p.substr(1).toLowerCase();
            x.serial = d[d.length - 1].length;
            t && (x.style = q[g.s || 0]);
            d[d.length - 1].push(x)
        }
        for (s = 0; s < h.length; s++) t = h[s], f = t.b + e, q = t.e + e, t = t.o || 1, g = d[d.length - 1][f], x = d[d.length - 1][q], g.bonds.push(q), g.bondOrder.push(t), x.bonds.push(f), x.bondOrder.push(t);
        return d
    };
    b.mcif = b.cif = function(b, d) {
        function h(b, c) {
            for (var d = [], e = 0, g = 0; g < b.length;) {
                for (; b.substr(g, c.length) !== c && g < b.length;) {
                    if ("'" === b[g])
                        for (g++; g < b.length && "'" !== b[g];) g++;
                    else if ('"' === b[g])
                        for (g++; g < b.length && '"' !== b[g];) g++;
                    g++
                }
                d.push(b.substr(e, g - e));
                e = g += c.length
            }
            return d
        }
        for (var e = [], l = !d.doAssembly, u = !d.duplicateAssemblyAtoms, q = e.modelData = [], t = b.split(/\r?\n|\r/), s = [], g = !1, w = 0; w < t.length; w++) {
            var p = t[w].split("#")[0];
            g ? ";" === p[0] && (g = !1) : ";" === p[0] && (g = !0);
            if (g || "" !== p) {
                if (!g && (p = p.trim(), "_" === p[0])) {
                    var B = p.split(/\s/)[0].indexOf("."); - 1 < B && (p[B] = "_", p = p.substr(0, B) + "_" + p.substr(B + 1))
                }
                s.push(p)
            }
        }
        for (w = 0; w < s.length;) {
            t = function(b) {
                var c = b.match("-");
                b = b.replace(/[-xyz]/g, "");
                b = b.split("/");
                var d;
                d = void 0 === b[1] ? 1 : parseInt(b[1]);
                return ("" ===
                    b[0] ? 1 : parseInt(b[0])) / d * (c ? -1 : 1)
            };
            for (B = function(b, c, d) {
                    return {
                        x: H[0][0] * b + H[0][1] * c + H[0][2] * d,
                        y: H[1][0] * b + H[1][1] * c + H[1][2] * d,
                        z: H[2][0] * b + H[2][1] * c + H[2][2] * d
                    }
                }; !s[w].startsWith("data_") || "data_global" === s[w];) w++;
            w++;
            for (g = {}; w < s.length && !s[w].startsWith("data_");)
                if (void 0 === s[w][0]) w++;
                else if ("_" === s[w][0]) {
                var A = s[w].split(/\s/)[0].toLowerCase(),
                    p = g[A] = g[A] || [],
                    D = s[w].substr(s[w].indexOf(A) + A.length);
                if ("" === D)
                    if (w++, ";" === s[w][0]) {
                        D = s[w].substr(1);
                        for (w++;
                            ";" !== s[w];) D = D + "\n" + s[w], w++;
                        p.push(D)
                    } else p.push(s[w]);
                else p.push(D.trim());
                w++
            } else if ("loop_" === s[w].substr(0, 5)) {
                w++;
                for (D = [];
                    "" === s[w] || "_" === s[w][0];) "" !== s[w] && (A = s[w].split(/\s/)[0].toLowerCase(), p = g[A] = g[A] || [], D.push(p)), w++;
                for (A = 0; w < s.length && "_" !== s[w][0] && !s[w].startsWith("loop_") && !s[w].startsWith("data_");) {
                    for (var p = h(s[w], " "), I = 0; I < p.length; I++) "" !== p[I] && (D[A].push(p[I]), A = (A + 1) % D.length);
                    w++
                }
            } else w++;
            q.push({
                symmetries: []
            });
            e.push([]);
            var D = void 0 !== g._atom_site_id ? g._atom_site_id.length : g._atom_site_label.length,
                H;
            if (void 0 !== g._cell_length_a) {
                var p =
                    parseFloat(g._cell_length_a),
                    A = parseFloat(g._cell_length_b),
                    I = parseFloat(g._cell_length_c),
                    F = parseFloat(g._cell_angle_alpha) || 90,
                    P = parseFloat(g._cell_angle_beta) || 90,
                    C = parseFloat(g._cell_angle_gamma) || 90,
                    L = P * Math.PI / 180,
                    O = C * Math.PI / 180,
                    Q = Math.cos(F * Math.PI / 180),
                    L = Math.cos(L),
                    J = Math.cos(O),
                    O = Math.sin(O);
                H = [
                    [p, A * J, I * L],
                    [0, A * O, I * (Q - L * J) / O],
                    [0, 0, I * Math.sqrt(1 - Q * Q - L * L - J * J + 2 * Q * L * J) / O]
                ];
                q[q.length - 1].cryst = {
                    a: p,
                    b: A,
                    c: I,
                    alpha: F,
                    beta: P,
                    gamma: C
                }
            }
            for (p = 0; p < D; p++)
                if (void 0 === g._atom_site_group_pdb || "TER" !== g._atom_site_group_pdb[p]) A = {}, void 0 !== g._atom_site_cartn_x ? (A.x = parseFloat(g._atom_site_cartn_x[p]), A.y = parseFloat(g._atom_site_cartn_y[p]), A.z = parseFloat(g._atom_site_cartn_z[p])) : (I = B(parseFloat(g._atom_site_fract_x[p]), parseFloat(g._atom_site_fract_y[p]), parseFloat(g._atom_site_fract_z[p])), A.x = I.x, A.y = I.y, A.z = I.z), A.chain = g._atom_site_auth_asym_id ? g._atom_site_auth_asym_id[p] : void 0, A.resi = g._atom_site_auth_seq_id ? parseInt(g._atom_site_auth_seq_id[p]) : void 0, A.resn = g._atom_site_auth_comp_id ? g._atom_site_auth_comp_id[p].trim() :
                    void 0, A.atom = g._atom_site_auth_atom_id ? g._atom_site_auth_atom_id[p].replace(/"/gm, "") : void 0, A.hetflag = !g._atom_site_group_pdb || "HETA" === g._atom_site_group_pdb[p] || "HETATM" === g._atom_site_group_pdb[p], I = g._atom_site_type_symbol[p], A.elem = I[0].toUpperCase() + I.substr(1).toLowerCase(), A.bonds = [], A.ss = "c", A.serial = p, A.bondOrder = [], A.properties = {}, e[e.length - 1].push(A);
            if (void 0 !== g._pdbx_struct_oper_list_id && !l) {
                for (p = 0; p < g._pdbx_struct_oper_list_id.length; p++) {
                    var B = parseFloat(g["_pdbx_struct_oper_list_matrix[1][1]"][p]),
                        D = parseFloat(g["_pdbx_struct_oper_list_matrix[1][2]"][p]),
                        A = parseFloat(g["_pdbx_struct_oper_list_matrix[1][3]"][p]),
                        I = parseFloat(g["_pdbx_struct_oper_list_vector[1]"][p]),
                        F = parseFloat(g["_pdbx_struct_oper_list_matrix[2][1]"][p]),
                        P = parseFloat(g["_pdbx_struct_oper_list_matrix[2][2]"][p]),
                        C = parseFloat(g["_pdbx_struct_oper_list_matrix[2][3]"][p]),
                        Q = parseFloat(g["_pdbx_struct_oper_list_vector[2]"][p]),
                        O = parseFloat(g["_pdbx_struct_oper_list_matrix[3][1]"][p]),
                        L = parseFloat(g["_pdbx_struct_oper_list_matrix[3][2]"][p]),
                        J = parseFloat(g["_pdbx_struct_oper_list_matrix[3][3]"][p]),
                        R = parseFloat(g["_pdbx_struct_oper_list_vector[3]"][p]),
                        B = new $3Dmol.Matrix4(B, D, A, I, F, P, C, Q, O, L, J, R);
                    q[q.length - 1].symmetries.push(B)
                }
                for (p = 0; p < e.length; p++) x(q[q.length - 1].symmetries, u, e[p])
            }
            if (void 0 !== g._symmetry_equiv_pos_as_xyz)
                for (p = 0; p < g._symmetry_equiv_pos_as_xyz.length; p++) {
                    D = g._symmetry_equiv_pos_as_xyz[p].replace(/["' ]/g, "").split(",").map(function(b) {
                        return b.replace(/-/g, "+-")
                    });
                    B = new $3Dmol.Matrix4(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 1);
                    for (A = 0; 3 > A; A++)
                        for (I = D[A].split("+"), F = 0; F < I.length; F++) P = I[F], "" !== P && (C = t(P), P.match("x") ? B.elements[A + 0] = C : P.match("y") ? B.elements[A + 4] = C : P.match("z") ? B.elements[A + 8] = C : B.elements[A + 12] = C);
                    D = new $3Dmol.Matrix4(H[0][0], H[0][1], H[0][2], 0, H[1][0], H[1][1], H[1][2], 0, H[2][0], H[2][1], H[2][2], 0);
                    A = (new $3Dmol.Matrix4).getInverse(D, !0);
                    B = (new $3Dmol.Matrix4).multiplyMatrices(B, A);
                    B = (new $3Dmol.Matrix4).multiplyMatrices(D, B);
                    q[q.length - 1].symmetries.push(B)
                }
        }
        for (p = 0; p < e.length; p++) c(e[p]), f(e[p]),
            x(q[p].symmetries, u, e[p]);
        return e
    };
    b.mol2 = b.MOL2 = function(b, c) {
        var d = [
                []
            ],
            e = !1;
        "undefined" !== typeof c.keepH && (e = !c.keepH);
        for (var f = b.substr(h, b.length).split(/\r?\n|\r/); 0 < f.length;) {
            var h = b.search(/@<TRIPOS>MOLECULE/),
                q = b.search(/@<TRIPOS>ATOM/);
            if (-1 == h || -1 == q) break;
            var h = [],
                t = f[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
                s = parseInt(t[0]),
                q = 0;
            1 < t.length && (q = parseInt(t[1]));
            var g = 4,
                w;
            for (w = 3; w < f.length; w++)
                if ("@<TRIPOS>ATOM" == f[w]) {
                    g = w + 1;
                    break
                }
            w = d[d.length - 1].length;
            for (s = w + s; w < s; w++) {
                var t =
                    f[g++],
                    t = t.replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
                    p = {},
                    x = t[5].split(".")[0];
                p.atom = p.elem = x[0].toUpperCase() + x.substr(1).toLowerCase();
                if ("H" != p.elem || !e) {
                    var x = d[d.length - 1].length,
                        A = parseInt(t[0]);
                    p.serial = A;
                    p.x = parseFloat(t[2]);
                    p.y = parseFloat(t[3]);
                    p.z = parseFloat(t[4]);
                    p.atom = t[5];
                    t = parseFloat(t[8]);
                    p.index = x;
                    p.bonds = [];
                    p.bondOrder = [];
                    p.properties = {
                        charge: t,
                        partialCharge: t
                    };
                    h[A] = x;
                    d[d.length - 1].push(p)
                }
            }
            for (w = !1; g < f.length;)
                if ("@<TRIPOS>BOND" == f[g++]) {
                    w = !0;
                    break
                }
            if (w && q)
                for (w = 0; w < q; w++) t =
                    f[g++], t = t.replace(/^\s+/, "").replace(/\s+/g, " ").split(" "), s = parseInt(t[1]), fromAtom = d[d.length - 1][h[s]], p = parseInt(t[2]), toAtom = d[d.length - 1][h[p]], t = parseInt(t[3]), isNaN(t) && (t = 1), void 0 !== fromAtom && void 0 !== toAtom && (fromAtom.bonds.push(h[p]), fromAtom.bondOrder.push(t), toAtom.bonds.push(h[s]), toAtom.bondOrder.push(t));
            if (c.multimodel) c.onemol || d.push([]), f.splice(0, g), b = f.join("\n");
            else break
        }
        return d
    };
    var w = {
            H: .37,
            He: .32,
            Li: 1.34,
            Be: .9,
            B: .82,
            C: .77,
            N: .75,
            O: .73,
            F: .71,
            Ne: .69,
            Na: 1.54,
            Mg: 1.3,
            Al: 1.18,
            Si: 1.11,
            P: 1.06,
            S: 1.02,
            Cl: .99,
            Ar: .97,
            K: 1.96,
            Ca: 1.74,
            Sc: 1.44,
            Ti: 1.56,
            V: 1.25,
            Mn: 1.39,
            Fe: 1.25,
            Co: 1.26,
            Ni: 1.21,
            Cu: 1.38,
            Zn: 1.31,
            Ga: 1.26,
            Ge: 1.22,
            Se: 1.16,
            Br: 1.14,
            Kr: 1.1,
            Rb: 2.11,
            Sr: 1.92,
            Y: 1.62,
            Zr: 1.48,
            Nb: 1.37,
            Mo: 1.45,
            Tc: 1.56,
            Ru: 1.26,
            Rh: 1.35,
            Pd: 1.31,
            Ag: 1.53,
            Cd: 1.48,
            In: 1.44,
            Sn: 1.41,
            Sb: 1.38,
            Te: 1.35,
            I: 1.33,
            Xe: 1.3,
            Cs: 2.25,
            Ba: 1.98,
            Lu: 1.6,
            Hf: 1.5,
            Ta: 1.38,
            W: 1.46,
            Re: 1.59,
            Os: 1.44,
            Ir: 1.37,
            Pt: 1.28,
            Au: 1.44,
            Hg: 1.49,
            Tl: 1.48,
            Pb: 1.47,
            Bi: 1.46,
            Rn: 1.45
        },
        t = function(b, c) {
            var d = (w[b.elem] || 1.6) + (w[c.elem] || 1.6),
                d = d + .25,
                d = d * d,
                e = b.x -
                c.x,
                e = e * e;
            if (e > d) return !1;
            var f = b.y - c.y,
                f = f * f;
            if (f > d) return !1;
            var h = b.z - c.z,
                h = h * h;
            if (h > d) return !1;
            e = e + f + h;
            return isNaN(e) ? !1 : .5 > e ? !1 : e > d ? !1 : b.altLoc != c.altLoc && " " != b.altLoc && " " != c.altLoc ? !1 : !0
        },
        x = function(b, c, d) {
            var e = d.length,
                f = e,
                h, q;
            if (!c)
                for (c = 0; c < b.length; c++) {
                    if (!b[c].isIdentity()) {
                        var t = new $3Dmol.Vector3;
                        for (q = 0; q < e; q++) {
                            var s = [];
                            for (h = 0; h < d[q].bonds.length; h++) s.push(d[q].bonds[h] + f);
                            t.set(d[q].x, d[q].y, d[q].z);
                            t.applyMatrix4(b[c]);
                            h = {};
                            for (var g in d[q]) h[g] = d[q][g];
                            h.x = t.x;
                            h.y = t.y;
                            h.z =
                                t.z;
                            h.bonds = s;
                            d.push(h)
                        }
                        f = d.length
                    }
                } else if (1 < b.length)
                    for (c = 0; c < d.length; c++) {
                        e = [];
                        for (h = 0; h < b.length; h++) b[h].isIdentity() || (f = new $3Dmol.Vector3, f.set(d[c].x, d[c].y, d[c].z), f.applyMatrix4(b[h]), e.push(f));
                        d[c].symmetries = e
                    }
        };
    b.pdb = b.PDB = b.pdbqt = b.PDBQT = function(b, c) {
        var h = [],
            e = {};
        h.modelData = [];
        for (var l = b.split(/\r?\n|\r/); 0 < l.length;) {
            for (var q = l, l = e, t = [], D = !c.keepH, s = !!c.noSecondaryStructure, g = !c.noComputeSecondaryStructure, M = !c.doAssembly, p = !c.duplicateAssemblyAtoms, B = c.altLoc ? c.altLoc : "A",
                    A = {
                        symmetries: []
                    }, K = void 0, I = [], H = [], F = void 0, P = void 0, C = void 0, L = {}, F = 0; F < q.length; F++) {
                var C = q[F].replace(/^\s*/, ""),
                    O = C.substr(0, 6);
                if (0 == O.indexOf("END")) {
                    I = q.slice(F + 1);
                    if ("END" == O)
                        for (var Q in l) l.hasOwnProperty(Q) && delete l[Q];
                    break
                } else if ("ATOM  " == O || "HETATM" == O) {
                    var J, R, S, V, Z, W, Y, X, U, T;
                    T = C.substr(16, 1);
                    if (" " == T || T == B || "*" == B) U = parseInt(C.substr(6, 5)), K = C.substr(12, 4).replace(/ /g, ""), J = C.substr(17, 3).replace(/ /g, ""), R = C.substr(21, 1), S = parseInt(C.substr(22, 4)), V = C.substr(26, 1), Z = parseFloat(C.substr(30,
                        8)), W = parseFloat(C.substr(38, 8)), Y = parseFloat(C.substr(46, 8)), P = parseFloat(C.substr(60, 8)), X = C.substr(76, 2).replace(/ /g, ""), "" === X || "undefined" === typeof w[X] ? (X = C.substr(12, 2).replace(/ /g, ""), 0 < X.length && "H" == X[0] && "Hg" != X && (X = "H"), 1 < X.length && (X = X[0].toUpperCase() + X.substr(1).toLowerCase(), "undefined" === typeof w[X] ? X = X[0] : "A" == C[0] && "Ca" == X && (X = "C"))) : X = X[0].toUpperCase() + X.substr(1).toLowerCase(), "H" == X && D || (O = "H" == O[0] ? !0 : !1, H[U] = t.length, t.push({
                        resn: J,
                        x: Z,
                        y: W,
                        z: Y,
                        elem: X,
                        hetflag: O,
                        altLoc: T,
                        chain: R,
                        resi: S,
                        icode: V,
                        rescode: S + (" " != V ? "^" + V : ""),
                        serial: U,
                        atom: K,
                        bonds: [],
                        ss: "c",
                        bondOrder: [],
                        properties: {},
                        b: P,
                        pdbline: C
                    }))
                } else if ("SHEET " == O) {
                    P = C.substr(21, 1);
                    K = parseInt(C.substr(22, 4));
                    C.substr(32, 1);
                    C = parseInt(C.substr(33, 4));
                    P in l || (l[P] = {});
                    l[P][K] = "s1";
                    for (K += 1; K < C; K++) l[P][K] = "s";
                    l[P][C] = "s2"
                } else if ("CONECT" == O)
                    for (P = parseInt(C.substr(6, 5)), K = H[P], J = t[K], P = 0; 4 > P; P++) {
                        if (R = parseInt(C.substr([11, 16, 21, 26][P], 5)), R = H[R], S = t[R], void 0 !== J && void 0 !== S)
                            if (L[[K, R]])
                                for (L[[K, R]] += 1, S = 0; S < J.bonds.length; S++) J.bonds[S] ==
                                    R && (V = L[[K, R]], J.bondOrder[S] = 4 <= V ? 1 : V);
                            else if (L[[K, R]] = 1, 0 == J.bonds.length || J.bonds[J.bonds.length - 1] != R) J.bonds.push(R), J.bondOrder.push(1)
                    } else if ("HELIX " == O) {
                        P = C.substr(19, 1);
                        K = parseInt(C.substr(21, 4));
                        C.substr(31, 1);
                        C = parseInt(C.substr(33, 4));
                        P in l || (l[P] = {});
                        l[P][K] = "h1";
                        for (K += 1; K < C; K++) l[P][K] = "h";
                        l[P][C] = "h2"
                    } else if (M || "REMARK" != O || "BIOMT" != C.substr(13, 5)) "CRYST1" == O ? (K = parseFloat(C.substr(7, 8)), P = parseFloat(C.substr(16, 8)), J = parseFloat(C.substr(25, 8)), R = parseFloat(C.substr(34, 6)), S =
                    parseFloat(C.substr(41, 6)), C = parseFloat(C.substr(48, 6)), A.cryst = {
                        a: K,
                        b: P,
                        c: J,
                        alpha: R,
                        beta: S,
                        gamma: C
                    }) : "ANISOU" == O && (U = parseInt(C.substr(6, 5)), P = t[H[U]]) && (C = C.substr(30).trim().split(/\s+/), C = {
                    u11: parseInt(C[0]),
                    u22: parseInt(C[1]),
                    u33: parseInt(C[2]),
                    u12: parseInt(C[3]),
                    u13: parseInt(C[4]),
                    u23: parseInt(C[5])
                }, P.uMat = C);
                else {
                    K = new $3Dmol.Matrix4;
                    for (P = 1; 3 >= P; P++)
                        if (C = q[F].replace(/^\s*/, ""), parseInt(C.substr(18, 1)) == P) K.elements[P - 1] = parseFloat(C.substr(23, 10)), K.elements[P - 1 + 4] = parseFloat(C.substr(33,
                            10)), K.elements[P - 1 + 8] = parseFloat(C.substr(43, 10)), K.elements[P - 1 + 12] = parseFloat(C.substr(53)), F++;
                        else
                            for (;
                                "BIOMT" == C.substr(13, 5);) F++, C = q[F].replace(/^\s*/, "");
                    K.elements[3] = 0;
                    K.elements[7] = 0;
                    K.elements[11] = 0;
                    K.elements[15] = 1;
                    A.symmetries.push(K);
                    F--
                }
            }(new Date).getTime();
            d(t);
            M || x(A.symmetries, p, t);
            g && !s && ((new Date).getTime(), f(t));
            (new Date).getTime();
            a: {
                F = l;q = void 0;
                for (q in F) {
                    F = !1;
                    break a
                }
                F = !0
            }
            if (!F)
                for (F = 0; F < t.length; F++) K = t[F], void 0 !== K && K.chain in l && K.resi in l[K.chain] && (q = l[K.chain][K.resi],
                    K.ss = q[0], 1 < q.length && ("1" == q[1] ? K.ssbegin = !0 : "2" == q[1] && (K.ssend = !0)));
            pdbinfo = [t, A, I];
            t = pdbinfo[0];
            A = pdbinfo[1];
            l = pdbinfo[2];
            if (0 != t.length) {
                if (c.multimodel && c.onemol && 0 < h.length)
                    for (A = h[0].length, I = 0; I < t.length; I++) {
                        F = t[I];
                        F.index = I;
                        for (q = 0; q < F.bonds.length; q++) F.bonds[q] += A;
                        h[0].push(F)
                    } else h.modelData.push(A), h.push(t);
                if (!c.multimodel) break
            }
        }
        return h
    };
    b.pqr = b.PQR = function(b, c) {
        var h = [
                []
            ],
            e, l = !c.noSecondaryStructure;
        h.modelData = [{
            symmetries: []
        }];
        var q = [],
            t = b.split(/\r?\n|\r/),
            w, s;
        for (w = 0; w <
            t.length; w++)
            if (s = t[w].replace(/^\s*/, ""), e = s.substr(0, 6), 0 == e.indexOf("END"))
                if (c.multimodel) c.onemol || h.push([]);
                else break;
        else if ("ATOM  " == e || "HETATM" == e) {
            var g = parseInt(s.substr(6, 5));
            e = s.substr(12, 4).replace(/ /g, "");
            var x = s.substr(17, 3),
                p = s.substr(21, 1),
                B = parseInt(s.substr(22, 4)),
                A = s.substr(30).trim().split(/\s+/),
                D = parseFloat(A[0]),
                I = parseFloat(A[1]),
                H = parseFloat(A[2]),
                F = parseFloat(A[3]),
                A = parseFloat(A[4]),
                P = e[0];
            1 < e.length && e[1].toUpperCase() != e[1] && (P = e.substr(0, 2));
            hetflag = "H" == s[0] ? !0 :
                !1;
            q[g] = h[h.length - 1].length;
            h[h.length - 1].push({
                resn: x,
                x: D,
                y: I,
                z: H,
                elem: P,
                hetflag: hetflag,
                chain: p,
                resi: B,
                serial: g,
                atom: e,
                bonds: [],
                ss: "c",
                bondOrder: [],
                properties: {
                    charge: F,
                    partialCharge: F,
                    radius: A
                },
                pdbline: s
            })
        } else if ("CONECT" == e)
            for (e = parseInt(s.substr(6, 5)), g = h[h.length - 1][q[e]], e = 0; 4 > e; e++) x = parseInt(s.substr([11, 16, 21, 26][e], 5)), p = h[h.length - 1][q[x]], void 0 !== g && void 0 !== p && (g.bonds.push(q[x]), g.bondOrder.push(1));
        for (w = 0; w < h.length; w++) d(h[w]), l && f(h[w]);
        return h
    };
    var q = function(b) {
            return String.fromCharCode.apply(null,
                b).replace(/\0/g, "")
        },
        D = function(b) {
            return 2 == b ? "h" : 3 == b ? "s" : "c"
        };
    b.mmtf = b.MMTF = function(b, c) {
        var d = !c.keepH,
            e = c.altLoc ? c.altLoc : "A",
            h = !!c.noSecondaryStructure,
            t = !c.noComputeSecondaryStructure,
            w = !c.doAssembly,
            N = !c.duplicateAssemblyAtoms,
            s = c.assemblyIndex ? c.assemblyIndex : 0,
            g = MMTF.decode(b),
            M = [
                []
            ],
            p = M.modelData = [],
            B = 0,
            A = 0,
            K = 0,
            I = 0,
            H = g.secStructList,
            F = g.insCodeList,
            P = g.bFactorList,
            C = g.altLocList,
            L = g.occupancyList,
            O = g.bondAtomList,
            Q = g.bondOrderList,
            J = g.numModels;
        if (0 == J) return M;
        c.multimodel || (J = 1);
        var R,
            S, V, Z, W = [];
        if (!w && g.bioAssemblyList && 0 < g.bioAssemblyList.length)
            for (Z = g.bioAssemblyList[s].transformList, s = 0, R = Z.length; s < R; s++) {
                var Y = new $3Dmol.Matrix4(Z[s].matrix);
                Y.transpose();
                W.push(Y)
            }
        for (Z = Y = 0; Z < J; Z++) {
            var X = g.chainsPerModel[Z],
                U = M[M.length - 1],
                T = [];
            p.push({
                symmetries: W
            });
            for (s = 0; s < X; ++s) {
                var G = g.groupsPerChain[A],
                    ba = q(g.chainIdList.subarray(4 * A, 4 * A + 4));
                g.chainNameList && (ba = q(g.chainNameList.subarray(4 * A, 4 * A + 4)));
                var aa = K,
                    ga = "";
                for (R = 0; R < G; ++R) {
                    var pa = g.groupList[g.groupTypeList[K]];
                    V = pa.atomNameList.length;
                    var va = 0,
                        da = !1,
                        ia = !1;
                    if (H) {
                        va = H[K];
                        S = D(va);
                        if (0 == K || S != ga) da = !0;
                        var ga = S,
                            Ba = K + 1;
                        if (Ba >= H.length || D(H[Ba] != S)) ia = !0
                    }
                    g.insCodeList && String.fromCharCode(F[K]);
                    var la = g.groupIdList[K],
                        Ca = pa.groupName,
                        Ba = I;
                    for (S = 0; S < V; ++S) {
                        var oa = pa.elementList[S];
                        if (!d || "H" != oa) {
                            var Za = "";
                            P && (Za = P[I]);
                            var ra = "";
                            C && C[I] && (ra = String.fromCharCode(C[I]));
                            var Ia = "";
                            L && (Ia = L[I]);
                            if ("" == ra || ra == e || "*" == e) {
                                var Ra = g.atomIdList[I],
                                    ea = pa.atomNameList[S],
                                    Wa = 0;
                                pa.atomChargeList && (Wa = pa.atomChargeList[S]);
                                var Na = g.xCoordList[I],
                                    Ja =
                                    g.yCoordList[I],
                                    Oa = g.zCoordList[I];
                                T[I] = U.length;
                                U.push({
                                    resn: Ca,
                                    x: Na,
                                    y: Ja,
                                    z: Oa,
                                    elem: oa,
                                    hetflag: 0 > va,
                                    chain: ba,
                                    resi: la,
                                    icode: ra,
                                    rescode: la + (" " != ra ? "^" + ra : ""),
                                    serial: Ra,
                                    altLoc: ra,
                                    index: I,
                                    atom: ea,
                                    bonds: [],
                                    ss: D(va),
                                    ssbegin: da,
                                    ssend: ia,
                                    bondOrder: [],
                                    properties: {
                                        charge: Wa,
                                        occupancy: Ia
                                    },
                                    b: Za
                                })
                            }
                        }
                        I += 1
                    }
                    va = pa.bondAtomList;
                    S = 0;
                    for (V = pa.bondOrderList.length; S < V; ++S) ia = Ba + va[2 * S], la = Ba + va[2 * S + 1], da = pa.bondOrderList[S], ia = T[ia], la = T[la], Ca = U[ia], oa = U[la], Ca && oa && (Ca.bonds.push(la), Ca.bondOrder.push(da), oa.bonds.push(ia),
                        oa.bondOrder.push(da));
                    K += 1
                }
                K = aa;
                for (R = 0; R < G; ++R) K += 1;
                A += 1
            }
            if (O)
                for (S = Y, V = O.length; S < V; S += 2) {
                    ia = O[S];
                    la = O[S + 1];
                    da = Q ? Q[S / 2] : 1;
                    if (ia >= I) {
                        Y = S;
                        break
                    }
                    ia = T[ia];
                    la = T[la];
                    Ca = U[ia];
                    oa = U[la];
                    Ca && oa && (Ca.bonds.push(la), Ca.bondOrder.push(da), oa.bonds.push(ia), oa.bondOrder.push(da))
                }
            c.multimodel && (c.onemol || M.push([]));
            if (!w)
                for (R = 0; R < M.length; R++) x(p[B].symmetries, N, M[R]);
            B += 1
        }
        t && !h && f(M);
        return M
    };
    b.prmtop = b.PRMTOP = function(b, c) {
        function d(b) {
            var c = q.indexOf(t.filter(function(c) {
                return c.includes(b)
            })[0]);
            if (Number.isInteger(c) &&
                0 < c) {
                for (; !q[c].includes("FORMAT");) c++;
                return c
            }
            return -1
        }

        function e(b) {
            var c = q[b].match(/\((\d*)\S*/),
                d = q[b].match(/[a-zA-Z](\d*)\)\s*/);
            null == d && (d = q[b].match(/[a-zA-Z](\d*)\.\d*\)\s*/));
            return [c[1], d[1]]
        }
        var f = [],
            h = 0,
            q = b.split(/\r?\n|\r/);
        if (0 < q.length && q[0].includes("VERSION")) {
            var t = q.filter(function(b) {
                    return b.includes("POINTERS") || b.includes("ATOM_NAME") || b.includes("CHARGE") || b.includes("RADII") || b.includes("BONDS_INC_HYDROGEN") || b.includes("BONDS_WITHOUT_HYDROGEN")
                }),
                s = d("POINTERS");
            if (-1 ==
                s) return [];
            var g = e(s),
                w = parseInt(q[s + 1].slice(0, g[1]));
            if (isNaN(w) || 0 >= w) return [];
            s = d("ATOM_NAME");
            if (-1 == s) return [];
            var g = e(s),
                p = g[0];
            for (i = 0; i < w / g[0]; i++) {
                i == parseInt(w / g[0]) && (p = w % g[0]);
                for (j = 0; j < p; j++) {
                    var x = {};
                    x.serial = h;
                    x.x = 0;
                    x.y = 0;
                    x.z = 0;
                    x.atom = q[s + 1].slice(g[1] * j, g[1] * (j + 1));
                    x.elem = q[s + 1].slice(g[1] * j, g[1] * j + 1);
                    x.properties = {
                        charge: "",
                        radii: ""
                    };
                    x.bonds = [];
                    x.bondOrder = [];
                    f.push(x);
                    h++
                }
                s++
            }
            s = d("CHARGE");
            if (-1 != s)
                for (g = e(s), h = 0, p = g[0], i = 0; i < w / g[0]; i++) {
                    i == parseInt(w / g[0]) && (p = w % g[0]);
                    for (j = 0; j <
                        p; j++) f[h].properties.charge = q[s + 1].slice(g[1] * j, g[1] * (j + 1)), h++;
                    s++
                }
            s = d("RADII");
            if (-1 != s)
                for (g = e(s), h = 0, p = g[0], i = 0; i < w / g[0]; i++) {
                    i == parseInt(w / g[0]) && (p = w % g[0]);
                    for (j = 0; j < p; j++) f[h].properties.radii = q[s + 1].slice(g[1] * j, g[1] * (j + 1)), h++;
                    s++
                }
            s = d("BONDS_WITHOUT_HYDROGEN");
            if (-1 != s) {
                var g = e(s),
                    h = 0,
                    p = g[0],
                    A;
                for (i = 0; i < w / g[0]; i++) {
                    i == parseInt(w / g[0]) && (p = w % g[0]);
                    for (j = 0; j < p; j++) 0 == h % 3 && (A = parseInt(q[s + 1].slice(g[1] * j, g[1] * (j + 1)) / 3 + 1)), 1 == h % 3 && f[A].bonds.push(parseInt(q[s + 1].slice(g[1] * j, g[1] * (j + 1)) / 3 + 1)),
                        h++;
                    s++
                }
            }
            s = d("BONDS_INC_HYDROGEN");
            if (-1 != s)
                for (g = e(s), h = 0, p = g[0], i = 0; i < w / g[0]; i++) {
                    i == parseInt(w / g[0]) && (p = w % g[0]);
                    for (j = 0; j < p; j++) 0 == h % 3 && (A = parseInt(q[s + 1].slice(g[1] * j, g[1] * (j + 1)) / 3 + 1)), 1 == h % 3 && f[A].bonds.push(parseInt(q[s + 1].slice(g[1] * j, g[1] * (j + 1)) / 3 + 1)), h++;
                    s++
                }
        } else return [];
        return [f]
    };
    b.gro = b.GRO = function(b, d) {
        for (var f = [], e = b.split(/\r?\n|\r/); 0 < e.length && !(3 > e.length);) {
            var h = parseInt(e[1]);
            if (isNaN(h) || 0 >= h) break;
            if (e.length < h + 3) break;
            f.push([]);
            for (var q = 2, t = f[f.length - 1].length, h = t +
                    h; t < h; t++) {
                var w = e[q++],
                    s = {};
                s.serial = t;
                s.atom = w.slice(10, 15).trim();
                97 <= s.atom.charCodeAt(1) && 122 >= s.atom.charCodeAt(1) ? s.elem = s.atom.slice(0, 2) : s.elem = s.atom[0];
                s.x = parseFloat(w.slice(20, 28));
                s.y = parseFloat(w.slice(28, 36));
                s.z = parseFloat(w.slice(36, 44));
                s.resi = w.slice(5, 10);
                s.bonds = [];
                s.bondOrder = [];
                s.properties = {};
                44 < w.length && (s.dx = parseFloat(w.slice(44, 52)), s.dy = parseFloat(w.slice(52, 60)), s.dz = parseFloat(w.slice(60, 68)));
                f[f.length - 1][t] = s
            }
            e.splice(0, ++q)
        }
        for (t = 0; t < f.length; t++) c(f[t]);
        return f
    };
    return b
}();
$3Dmol = $3Dmol || {};
$3Dmol.partialCharges = {
    "ALA:N": -.15,
    "ALA:CA": .1,
    "ALA:CB": 0,
    "ALA:C": .6,
    "ALA:O": -.55,
    "ARG:N": -.15,
    "ARG:CA": .1,
    "ARG:CB": 0,
    "ARG:CG": 0,
    "ARG:CD": .1,
    "ARG:NE": -.1,
    "ARG:CZ": .5,
    "ARG:NH1": .25,
    "ARG:NH2": .25,
    "ARG:C": .6,
    "ARG:O": -.55,
    "ASN:N": -.15,
    "ASN:CA": .1,
    "ASN:CB": 0,
    "ASN:CG": .55,
    "ASN:OD1": -.55,
    "ASN:ND2": 0,
    "ASN:C": .6,
    "ASN:O": -.55,
    "ASP:N": -.15,
    "ASP:CA": .1,
    "ASP:CB": 0,
    "ASP:CG": .14,
    "ASP:OD1": -.57,
    "ASP:OD2": -.57,
    "ASP:C": .6,
    "ASP:O": -.55,
    "CYS:N": -.15,
    "CYS:CA": .1,
    "CYS:CB": .19,
    "CYS:SG": -.19,
    "CYS:C": .6,
    "CYS:O": -.55,
    "GLN:N": -.15,
    "GLN:CA": .1,
    "GLN:CB": 0,
    "GLN:CG": 0,
    "GLN:CD": .55,
    "GLN:OE1": -.55,
    "GLN:NE2": 0,
    "GLN:C": .6,
    "GLN:O": -.55,
    "GLU:N": -.15,
    "GLU:CA": .1,
    "GLU:CB": 0,
    "GLU:CG": 0,
    "GLU:CD": .14,
    "GLU:OE1": -.57,
    "GLU:OE2": -.57,
    "GLU:C": .6,
    "GLU:O": -.55,
    "GLY:N": -.15,
    "GLY:CA": .1,
    "GLY:C": .6,
    "GLY:O": -.55,
    "HIS:N": -.15,
    "HIS:CA": .1,
    "HIS:CB": 0,
    "HIS:CG": .1,
    "HIS:ND1": -.1,
    "HIS:CD2": .1,
    "HIS:NE2": -.4,
    "HIS:CE1": .3,
    "HIS:C": .6,
    "HIS:O": -.55,
    "ILE:N": -.15,
    "ILE:CA": .1,
    "ILE:CB": 0,
    "ILE:CG2": 0,
    "ILE:CG1": 0,
    "ILE:CD": 0,
    "ILE:C": .6,
    "ILE:O": -.55,
    "LEU:N": -.15,
    "LEU:CA": .1,
    "LEU:CB": 0,
    "LEU:CG": 0,
    "LEU:CD1": 0,
    "LEU:CD2": 0,
    "LEU:C": .6,
    "LEU:O": -.55,
    "LYS:N": -.15,
    "LYS:CA": .1,
    "LYS:CB": 0,
    "LYS:CG": 0,
    "LYS:CD": 0,
    "LYS:CE": .25,
    "LYS:NZ": .75,
    "LYS:C": .6,
    "LYS:O": -.55,
    "MET:N": -.15,
    "MET:CA": .1,
    "MET:CB": 0,
    "MET:CG": .06,
    "MET:SD": -.12,
    "MET:CE": .06,
    "MET:C": .6,
    "MET:O": -.55,
    "PHE:N": -.15,
    "PHE:CA": .1,
    "PHE:CB": 0,
    "PHE:CG": 0,
    "PHE:CD1": 0,
    "PHE:CD2": 0,
    "PHE:CE1": 0,
    "PHE:CE2": 0,
    "PHE:CZ": 0,
    "PHE:C": .6,
    "PHE:O": -.55,
    "PRO:N": -.25,
    "PRO:CD": .1,
    "PRO:CA": .1,
    "PRO:CB": 0,
    "PRO:CG": 0,
    "PRO:C": .6,
    "PRO:O": -.55,
    "SER:N": -.15,
    "SER:CA": .1,
    "SER:CB": .25,
    "SER:OG": -.25,
    "SER:C": .6,
    "SER:O": -.55,
    "THR:N": -.15,
    "THR:CA": .1,
    "THR:CB": .25,
    "THR:OG1": -.25,
    "THR:CG2": 0,
    "THR:C": .6,
    "THR:O": -.55,
    "TRP:N": -.15,
    "TRP:CA": .1,
    "TRP:CB": 0,
    "TRP:CG": -.03,
    "TRP:CD2": .1,
    "TRP:CE2": -.04,
    "TRP:CE3": -.03,
    "TRP:CD1": .06,
    "TRP:NE1": -.06,
    "TRP:CZ2": 0,
    "TRP:CZ3": 0,
    "TRP:CH2": 0,
    "TRP:C": .6,
    "TRP:O": -.55,
    "TYR:N": -.15,
    "TYR:CA": .1,
    "TYR:CB": 0,
    "TYR:CG": 0,
    "TYR:CD1": 0,
    "TYR:CE1": 0,
    "TYR:CD2": 0,
    "TYR:CE2": 0,
    "TYR:CZ": .25,
    "TYR:OH": -.25,
    "TYR:C": .6,
    "TYR:O": -.55,
    "VAL:N": -.15,
    "VAL:CA": .1,
    "VAL:CB": 0,
    "VAL:CG1": 0,
    "VAL:CG2": 0,
    "VAL:C": .6,
    "VAL:O": -.55
};
$3Dmol.applyPartialCharges = function(b, c) {
    c && "undefined" !== typeof b.partialCharge || b.resn && b.atom && (b.properties.partialCharge = $3Dmol.partialCharges[b.resn + ":" + b.atom])
};
(function() {});
$3Dmol.VolumeData = function(b, c, d) {
    this.unit = {
        x: 1,
        y: 1,
        z: 1
    };
    this.origin = {
        x: 0,
        y: 0,
        z: 0
    };
    this.size = {
        x: 0,
        y: 0,
        z: 0
    };
    this.data = new Float32Array([]);
    this.matrix = null;
    c = c.toLowerCase();
    if (/\.gz$/.test(c)) {
        c = c.replace(/\.gz$/, "");
        try {
            b = pako.inflate(b)
        } catch (h) {
            console.log(h)
        }
    }
    if (this[c]) this[c](b);
    if (d) {
        if (d.negate)
            for (b = 0, c = this.data.length; b < c; b++) this.data[b] = -this.data[b];
        if (d.normalize) {
            var f = 0;
            b = 0;
            for (c = this.data.length; b < c; b++) f += this.data[b];
            d = f / this.data.length;
            console.log("computed mean: " + d);
            b = f = 0;
            for (c = this.data.length; b < c; b++) var w = this.data[b] - d,
                f = f + w * w;
            f /= this.data.length;
            console.log("Computed variance: " + f);
            b = 0;
            for (c = this.data.length; b < c; b++) this.data[b] = (this.data[b] - d) / f
        }
    }
};
$3Dmol.VolumeData.prototype.getVal = function(b, c, d) {
    b -= this.origin.x;
    c -= this.origin.y;
    d -= this.origin.z;
    b /= this.unit.x;
    c /= this.unit.y;
    d /= this.unit.z;
    b = Math.round(b);
    c = Math.round(c);
    d = Math.round(d);
    return 0 > b || b >= this.size.x || 0 > c || c >= this.size.y || 0 > d || d >= this.size.z ? 0 : this.data[b * this.size.y * this.size.z + c * this.size.z + d]
};
$3Dmol.VolumeData.prototype.getCoordinates = function(b) {
    var c = b / (this.size.y * this.size.z),
        d = b % (this.size.y * this.size.z);
    b %= this.size.z;
    c *= this.unit.x;
    d *= this.unit.y;
    b *= this.unit.z;
    c += this.origin.x;
    d += this.origin.y;
    b += this.origin.z;
    return {
        x: c,
        y: d,
        z: b
    }
};
$3Dmol.VolumeData.prototype.vasp = function(b) {
    var c = b.replace(/^\s+/, "").split(/[\n\r]/),
        d = $3Dmol.Parsers.vasp(b)[0].length;
    if (0 == d) console.log("No good formating of CHG or CHGCAR file, not atomic information provided in the file."), this.data = [];
    else {
        var h = parseFloat(c[1]),
            f;
        f = c[2].replace(/^\s+/, "").split(/\s+/);
        b = (new $3Dmol.Vector3(parseFloat(f[0]), parseFloat(f[1]), parseFloat(f[2]))).multiplyScalar(1.889725992 * h);
        f = c[3].replace(/^\s+/, "").split(/\s+/);
        var w = (new $3Dmol.Vector3(parseFloat(f[0]),
            parseFloat(f[1]), parseFloat(f[2]))).multiplyScalar(1.889725992 * h);
        f = c[4].replace(/^\s+/, "").split(/\s+/);
        f = (new $3Dmol.Vector3(parseFloat(f[0]), parseFloat(f[1]), parseFloat(f[2]))).multiplyScalar(1.889725992 * h);
        h = b.x * (w.y * f.z - f.y * w.z) - w.x * (b.y * f.z - f.y * b.z) + f.x * (b.y * w.z - w.y * b.z);
        h = Math.abs(h) / Math.pow(1.889725992, 3);
        h = 1 / h;
        c.splice(0, 8 + d + 1);
        var t = c[0].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
            d = Math.abs(t[0]),
            x = Math.abs(t[1]),
            t = Math.abs(t[2]),
            q = this.origin = new $3Dmol.Vector3(0, 0, 0);
        this.size = {
            x: d,
            y: x,
            z: t
        };
        this.unit = new $3Dmol.Vector3(b.x, w.y, f.z);
        b = b.multiplyScalar(1 / (1.889725992 * d));
        w = w.multiplyScalar(1 / (1.889725992 * x));
        f = f.multiplyScalar(1 / (1.889725992 * t));
        if (0 != b.y || 0 != b.z || 0 != w.x || 0 != w.z || 0 != f.x || 0 != f.y) this.matrix = new $3Dmol.Matrix4(b.x, w.x, f.x, 0, b.y, w.y, f.y, 0, b.z, w.z, f.z, 0, 0, 0, 0, 1), this.matrix = this.matrix.multiplyMatrices(this.matrix, (new $3Dmol.Matrix4).makeTranslation(q.x, q.y, q.z)), this.origin = new $3Dmol.Vector3(0, 0, 0), this.unit = new $3Dmol.Vector3(1, 1, 1);
        c.splice(0, 1);
        c = c.join(" ");
        c = c.replace(/^\s+/, "");
        c = c.split(/[\s\r]+/);
        c.splice(d * x * t + 1);
        c = new Float32Array(c);
        for (b = 0; b < c.length; b++) c[b] = c[b] * h * .036749309;
        this.data = c
    }
};
$3Dmol.VolumeData.prototype.cube = function(b) {
    b = b.replace(/^\s+/, "").split(/[\n\r]+/);
    if (!(6 > b.length)) {
        var c = b[2].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
            d = parseFloat(c[0]),
            h = Math.abs(d),
            f = this.origin = new $3Dmol.Vector3(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3])),
            c = b[3].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
            w = 0 < c[0] ? .529177 : 1;
        f.multiplyScalar(w);
        var t = Math.abs(c[0]),
            x = (new $3Dmol.Vector3(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3]))).multiplyScalar(w),
            c = b[4].replace(/^\s+/,
                "").replace(/\s+/g, " ").split(" "),
            q = Math.abs(c[0]),
            D = (new $3Dmol.Vector3(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3]))).multiplyScalar(w),
            c = b[5].replace(/^\s+/, "").replace(/\s+/g, " ").split(" "),
            y = Math.abs(c[0]),
            c = (new $3Dmol.Vector3(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3]))).multiplyScalar(w);
        this.size = {
            x: t,
            y: q,
            z: y
        };
        this.unit = new $3Dmol.Vector3(x.x, D.y, c.z);
        if (0 != x.y || 0 != x.z || 0 != D.x || 0 != D.z || 0 != c.x || 0 != c.y) this.matrix = new $3Dmol.Matrix4(x.x, D.x, c.x, 0, x.y, D.y, c.y, 0, x.z, D.z, c.z, 0,
            0, 0, 0, 1), this.matrix = this.matrix.multiplyMatrices(this.matrix, (new $3Dmol.Matrix4).makeTranslation(f.x, f.y, f.z)), this.origin = new $3Dmol.Vector3(0, 0, 0), this.unit = new $3Dmol.Vector3(1, 1, 1);
        f = 6;
        0 > d && f++;
        b = b.splice(h + f).join(" ");
        b = b.replace(/^\s+/, "");
        b = b.split(/[\s\r]+/);
        this.data = new Float32Array(b)
    }
};
$3Dmol.VolumeData.prototype.ccp4 = function(b) {
    var c, d, h, f, w, t, x, q, D, y, z, m, e, l, u, E, N, s, g, M, p, B, A, K, I;
    b = new Int8Array(b);
    B = new Int32Array(b.buffer, 0, 56);
    var H = new Float32Array(b.buffer, 0, 56);
    d = new DataView(b.buffer);
    String.fromCharCode(d.getUint8(208), d.getUint8(209), d.getUint8(210), d.getUint8(211));
    c = [d.getUint8(212), d.getUint8(213)];
    if (17 === c[0] && 17 === c[1])
        for (c = b.byteLength, f = 0; f < c; f += 4) d.setFloat32(f, d.getFloat32(f), !0);
    d = B[0];
    c = B[1];
    h = B[2];
    f = B[4];
    w = B[5];
    t = B[6];
    x = B[7];
    q = B[8];
    D = B[9];
    y = H[10];
    z = H[11];
    m = H[12];
    e = H[13];
    l = H[14];
    u = H[15];
    E = B[16];
    N = B[17];
    s = B[18];
    g = H[19];
    M = H[20];
    p = H[21];
    B = B[23];
    A = H[49];
    K = H[50];
    I = H[51];
    console.log("Map has min,mean,average,rmsddv: " + g + "," + M + "," + p + "," + H[54]);
    H = [y, 0, 0];
    z = [z * Math.cos(Math.PI / 180 * u), z * Math.sin(Math.PI / 180 * u), 0];
    e = [m * Math.cos(Math.PI / 180 * l), m * (Math.cos(Math.PI / 180 * e) - Math.cos(Math.PI / 180 * u) * Math.cos(Math.PI / 180 * l)) / Math.sin(Math.PI / 180 * u), 0];
    e[2] = Math.sqrt(m * m * Math.sin(Math.PI / 180 * l) * Math.sin(Math.PI / 180 * l) - e[1] * e[1]);
    H = [0, H, z, e];
    x = [0, x, q, D];
    E = [0, E, N, s];
    this.matrix =
        new $3Dmol.Matrix4;
    this.matrix.set(H[E[1]][0] / x[E[1]], H[E[2]][0] / x[E[2]], H[E[3]][0] / x[E[3]], 0, H[E[1]][1] / x[E[1]], H[E[2]][1] / x[E[2]], H[E[3]][1] / x[E[3]], 0, H[E[1]][2] / x[E[1]], H[E[2]][2] / x[E[2]], H[E[3]][2] / x[E[3]], 0, 0, 0, 0, 1);
    this.matrix = this.matrix.multiplyMatrices(this.matrix, (new $3Dmol.Matrix4).makeTranslation(f + A, w + K, t + I));
    this.origin = new $3Dmol.Vector3(0, 0, 0);
    this.unit = new $3Dmol.Vector3(1, 1, 1);
    this.size = {
        x: d,
        y: c,
        z: h
    };
    b = new Float32Array(b.buffer, 1024 + B);
    this.data = new Float32Array(d * c * h);
    for (f = 0; f <
        d; f++)
        for (w = 0; w < c; w++)
            for (t = 0; t < h; t++) this.data[(f * c + w) * h + t] = b[(t * c + w) * d + f]
};
$3Dmol.workerString = function() {
    self.onmessage = function(b) {
        b = b.data;
        var c = b.type;
        if (0 > c) self.atomData = b.atoms, self.volume = b.volume, self.ps = new ProteinSurface;
        else {
            var d = self.ps;
            d.initparm(b.expandedExtent, 1 == c ? !1 : !0, self.volume);
            d.fillvoxels(self.atomData, b.extendedAtoms);
            d.buildboundary();
            if (4 === c || 2 === c) d.fastdistancemap(), d.boundingatom(!1), d.fillvoxelswaals(self.atomData, b.extendedAtoms);
            d.marchingcube(c);
            b = d.getFacesAndVertices(b.atomsToShow);
            self.postMessage(b)
        }
    }
}.toString().replace(/(^.*?\{|\}$)/g,
    "");
$3Dmol.workerString += "; var ProteinSurface=" + $3Dmol.ProteinSurface.toString().replace(/\$3Dmol.MarchingCube./g, "MarchingCube.");
$3Dmol.workerString += ",MarchingCube=(" + $3Dmol.MarchingCubeInitializer.toString() + ")();";
$3Dmol.SurfaceWorker = window.URL.createObjectURL(new Blob([$3Dmol.workerString], {
    type: "text/javascript"
}));
$3Dmol.workerString = $3Dmol.workerString;
$3Dmol.SurfaceWorker = $3Dmol.SurfaceWorker;