//>>built
(function (e, j) {
    var i, l, c = function () {
    }, g = function (a) {
        for (var d in a)return 0;
        return 1
    }, h = {}.toString, b = function (a) {
        return"[object Function]" == h.call(a)
    }, f = function (a) {
        return"[object String]" == h.call(a)
    }, a = function (a) {
        return"[object Array]" == h.call(a)
    }, k = function (a, d) {
        if (a)for (var b = 0; b < a.length;)d(a[b++])
    }, d = function (a, d) {
        for (var b in d)a[b] = d[b];
        return a
    }, p = function (a, b) {
        return d(Error(a), {src: "dojoLoader", info: b})
    }, m = 1, n = function () {
        return"_" + m++
    }, o = function (a, d, b) {
        return wa(a, d, b, 0, o)
    }, r = this, q =
        r.document, v = q && q.createElement("DiV"), s = o.has = function (a) {
        return b(u[a]) ? u[a] = u[a](r, q, v) : u[a]
    }, u = s.cache = j.hasCache;
    s.add = function (a, d, b, k) {
        (void 0 === u[a] || k) && (u[a] = d);
        return b && s(a)
    };
    for (var t in e.has)s.add(t, e.has[t], 0, 1);
    o.async = 1;
    var y = new Function("return eval(arguments[0]);");
    o.eval = function (a, d) {
        return y(a + "\r\n////@ sourceURL=" + d)
    };
    var z = {}, I = o.signal = function (d, b) {
        var f = z[d];
        k(f && f.slice(0), function (d) {
            d.apply(null, a(b) ? b : [b])
        })
    }, J = o.on = function (a, d) {
        var b = z[a] || (z[a] = []);
        b.push(d);
        return{remove: function () {
            for (var a =
                0; a < b.length; a++)if (b[a] === d) {
                b.splice(a, 1);
                break
            }
        }}
    }, N = [], E = {}, S = [], Q = {}, B = o.map = {}, A = [], w = {}, x = "", K = {}, H = {}, C = {}, F = function (a) {
        var d, b, k, f;
        for (d in H)b = H[d], (k = d.match(/^url\:(.+)/)) ? K["url:" + xa(k[1], a)] = b : "*now" == d ? f = b : "*noref" != d && (k = aa(d, a), K[k.mid] = K["url:" + k.url] = b);
        f && f(ja(a));
        H = {}
    }, O = function (a) {
        return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (a) {
            return"\\" + a
        })
    }, D = function (a, d) {
        d.splice(0, d.length);
        for (var b in a)d.push([b, a[b], RegExp("^" + O(b) + "(/|$)"), b.length]);
        d.sort(function (a, d) {
            return d[3] - a[3]
        });
        return d
    }, L = function (a) {
        var b = a.name;
        b || (b = a, a = {name: b});
        a = d({main: "main"}, a);
        a.location = a.location ? a.location : b;
        if (a.packageMap)B[b] = a.packageMap;
        if (!a.main.indexOf("./"))a.main = a.main.substring(2);
        Q[b] = a
    }, T = [], G = function (a, b, c) {
        for (var m in a) {
            if ("waitSeconds" == m)o.waitms = 1E3 * (a[m] || 0);
            "cacheBust" == m && (x = a[m] ? f(a[m]) ? a[m] : (new Date).getTime() + "" : "");
            if ("baseUrl" == m || "combo" == m)o[m] = a[m];
            a[m] !== u && (o.rawConfig[m] = a[m], "has" != m && s.add("config-" + m, a[m], 0, b))
        }
        if (!o.baseUrl)o.baseUrl =
            "./";
        /\/$/.test(o.baseUrl) || (o.baseUrl += "/");
        for (m in a.has)s.add(m, a.has[m], 0, b);
        k(a.packages, L);
        for (l in a.packagePaths)k(a.packagePaths[l], function (a) {
            var b = l + "/" + a;
            f(a) && (a = {name: a});
            a.location = b;
            L(a)
        });
        D(d(B, a.map), A);
        k(A, function (a) {
            a[1] = D(a[1], []);
            if ("*" == a[0])A.star = a[1]
        });
        D(d(E, a.paths), S);
        k(a.aliases, function (a) {
            f(a[0]) && (a[0] = RegExp("^" + O(a[0]) + "$"));
            N.push(a)
        });
        if (b)T.push({config: a.config}); else for (m in a.config)b = W(m, c), b.config = d(b.config || {}, a.config[m]);
        if (a.cache)F(), H = a.cache,
            a.cache["*noref"] && F();
        I("config", [a, o.rawConfig])
    };
    s("dojo-cdn");
    var M = q.getElementsByTagName("script");
    i = 0;
    for (var X, P, Y, U; i < M.length;)if (X = M[i++], (Y = X.getAttribute("src")) && (U = Y.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))) {
        P = U[3] || "";
        j.baseUrl = j.baseUrl || P;
        (Y = X.getAttribute("data-dojo-config") || X.getAttribute("djConfig")) && (C = o.eval("({ " + Y + " })", "data-dojo-config"));
        break
    }
    o.rawConfig = {};
    G(j, 1);
    if (s("dojo-cdn"))(Q.dojo.location = P) && (P += "/"), Q.dijit.location = P + "../dijit/", Q.dojox.location = P + "../dojox/";
    G(e, 1);
    G(C, 1);
    var ba = function (a) {
            ka(function () {
                k(a.deps, ya)
            })
        }, wa = function (b, k, m, g, e) {
            var h;
            if (f(b)) {
                if ((h = W(b, g, !0)) && h.executed)return h.result;
                throw p("undefinedModule", b);
            }
            a(b) || (G(b, 0, g), b = k, k = m);
            if (a(b))if (b.length) {
                for (var m = "require*" + n(), l, i = [], r = 0; r < b.length;)l = b[r++], i.push(W(l, g));
                h = d(ca("", m, 0, ""), {injected: 2, deps: i, def: k || c, require: g ? g.require : o, gc: 1});
                w[h.mid] = h;
                ba(h);
                var u = $ && 0 != "sync";
                ka(function () {
                    la(h, u)
                });
                h.executed || V.push(h);
                da()
            } else k && k();
            return e
        }, ja = function (a) {
            if (!a)return o;
            var b = a.require;
            if (!b)b = function (d, k, f) {
                return wa(d, k, f, a, b)
            }, a.require = d(b, o), b.module = a, b.toUrl = function (b) {
                return xa(b, a)
            }, b.toAbsMid = function (b) {
                return ma(b, a)
            };
            return b
        }, V = [], ea = [], R = {}, La = function (a) {
            a.injected = 1;
            R[a.mid] = 1;
            a.url && (R[a.url] = a.pack || 1);
            za()
        }, ga = function (a) {
            a.injected = 2;
            delete R[a.mid];
            a.url && delete R[a.url];
            g(R) && fa()
        }, Ma = o.idle = function () {
            return!ea.length && g(R) && !V.length && !$
        }, na = function (a, b) {
            if (b)for (var d = 0; d < b.length; d++)if (b[d][2].test(a))return b[d];
            return 0
        }, Aa = function (a) {
            for (var b =
                [], d, k, a = a.replace(/\\/g, "/").split("/"); a.length;)d = a.shift(), ".." == d && b.length && ".." != k ? (b.pop(), k = b[b.length - 1]) : "." != d && b.push(k = d);
            return b.join("/")
        }, ca = function (a, b, d, k) {
            return{pid: a, mid: b, pack: d, url: k, executed: 0, def: 0}
        }, Ba = function (a, d, f, m, c, g, h, e) {
            var o, n, l, i;
            i = /^\./.test(a);
            if (/(^\/)|(\:)|(\.js$)/.test(a) || i && !d)return ca(0, a, 0, a);
            a = Aa(i ? d.mid + "/../" + a : a);
            if (/^\./.test(a))throw p("irrationalPath", a);
            d && (l = na(d.mid, g));
            (l = (l = l || g.star) && na(a, l[1])) && (a = l[1] + a.substring(l[3]));
            d = (U = a.match(/^([^\/]+)(\/(.+))?$/)) ?
                U[1] : "";
            (o = f[d]) ? a = d + "/" + (n = U[3] || o.main) : d = "";
            var r = 0;
            k(N, function (d) {
                var k = a.match(d[0]);
                k && 0 < k.length && (r = b(d[1]) ? a.replace(d[0], d[1]) : d[1])
            });
            if (r)return Ba(r, 0, f, m, c, g, h, e);
            if (f = m[a])return e ? ca(f.pid, f.mid, f.pack, f.url) : m[a];
            m = (l = na(a, h)) ? l[1] + a.substring(l[3]) : d ? o.location + "/" + n : s("config-tlmSiblingOfDojo") ? "../" + a : a;
            /(^\/)|(\:)/.test(m) || (m = c + m);
            return ca(d, a, o, Aa(m + ".js"))
        }, aa = function (a, b) {
            return Ba(a, b, Q, w, o.baseUrl, A, S)
        }, Ca = function (a, b, d) {
            return a.normalize ? a.normalize(b, function (a) {
                return ma(a,
                    d)
            }) : ma(b, d)
        }, Da = 0, W = function (a, b, d) {
            var k, f;
            (k = a.match(/^(.+?)\!(.*)$/)) ? (f = W(k[1], b, d), 5 === f.executed && !f.load && oa(f), f.load ? (k = Ca(f, k[2], b), a = f.mid + "!" + (f.dynamic ? ++Da + "!" : "") + k) : (k = k[2], a = f.mid + "!" + ++Da + "!waitingForPlugin"), a = {plugin: f, mid: a, req: ja(b), prid: k}) : a = aa(a, b);
            return w[a.mid] || !d && (w[a.mid] = a)
        }, ma = o.toAbsMid = function (a, b) {
            return aa(a, b).mid
        }, xa = o.toUrl = function (a, b) {
            var d = aa(a + "/x", b), k = d.url;
            return Ea(0 === d.pid ? a : k.substring(0, k.length - 5))
        }, Fa = {injected: 2, executed: 5, def: 3, result: 3},
        pa = function (a) {
            return w[a] = d({mid: a}, Fa)
        }, Na = pa("require"), Oa = pa("exports"), Pa = pa("module"), ha = {}, qa = 0, oa = function (a) {
            var b = a.result;
            a.dynamic = b.dynamic;
            a.normalize = b.normalize;
            a.load = b.load;
            return a
        }, Qa = function (a) {
            var b = {};
            k(a.loadQ, function (k) {
                var f = Ca(a, k.prid, k.req.module), m = a.dynamic ? k.mid.replace(/waitingForPlugin$/, f) : a.mid + "!" + f, f = d(d({}, k), {mid: m, prid: f, injected: 0});
                w[m] || Ga(w[m] = f);
                b[k.mid] = w[m];
                ga(k);
                delete w[k.mid]
            });
            a.loadQ = 0;
            var f = function (a) {
                for (var d = a.deps || [], k = 0; k < d.length; k++)(a =
                    b[d[k].mid]) && (d[k] = a)
            }, m;
            for (m in w)f(w[m]);
            k(V, f)
        }, ra = function (a) {
            o.trace("loader-finish-exec", [a.mid]);
            a.executed = 5;
            a.defOrder = qa++;
            a.loadQ && (oa(a), Qa(a));
            for (i = 0; i < V.length;)V[i] === a ? V.splice(i, 1) : i++;
            /^require\*/.test(a.mid) && delete w[a.mid]
        }, Ra = [], la = function (a, d) {
            if (4 === a.executed)return o.trace("loader-circular-dependency", [Ra.concat(a.mid).join("->")]), !a.def || d ? ha : a.cjs && a.cjs.exports;
            if (!a.executed) {
                if (!a.def)return ha;
                var k = a.mid, f = a.deps || [], m, c = [], g = 0;
                for (a.executed = 4; g < f.length;) {
                    m =
                        f[g++];
                    m = m === Na ? ja(a) : m === Oa ? a.cjs.exports : m === Pa ? a.cjs : la(m, d);
                    if (m === ha)return a.executed = 0, o.trace("loader-exec-module", ["abort", k]), ha;
                    c.push(m)
                }
                o.trace("loader-run-factory", [a.mid]);
                var k = a.def, h;
                if (s("config-dojo-loader-catches"))try {
                    h = b(k) ? k.apply(null, c) : k
                } catch (e) {
                    I("error", a.result = p("factoryThrew", [a, e]))
                } else h = b(k) ? k.apply(null, c) : k;
                a.result = void 0 === h && a.cjs ? a.cjs.exports : h;
                ra(a)
            }
            return a.result
        }, $ = 0, ka = function (a) {
            try {
                $++, a()
            } finally {
                $--
            }
            Ma() && I("idle", [])
        }, da = function () {
            $ || ka(function () {
                for (var a,
                         b, d = 0; d < V.length;)a = qa, b = V[d], la(b), a != qa ? d = 0 : d++
            })
        };
    void 0 === s("dojo-loader-eval-hint-url") && s.add("dojo-loader-eval-hint-url", 1);
    var Ea = function (a) {
        a += "";
        return a + (x ? (/\?/.test(a) ? "&" : "?") + x : "")
    }, Ga = function (a) {
        var b = a.plugin;
        5 === b.executed && !b.load && oa(b);
        var d = function (b) {
            a.result = b;
            ga(a);
            ra(a);
            da()
        };
        b.load ? b.load(a.prid, a.req, d) : b.loadQ ? b.loadQ.push(a) : (b.loadQ = [a], V.unshift(b), ya(b))
    }, Z = 0, sa = 0, ta = 0, Sa = function (a, b) {
        s("config-stripStrict") && (a = a.replace(/"use strict"/g, ""));
        ta = 1;
        if (s("config-dojo-loader-catches"))try {
            a ===
                Z ? Z.call(null) : o.eval(a, s("dojo-loader-eval-hint-url") ? b.url : b.mid)
        } catch (d) {
            I("error", p("evalModuleThrew", b))
        } else a === Z ? Z.call(null) : o.eval(a, s("dojo-loader-eval-hint-url") ? b.url : b.mid);
        ta = 0
    }, ya = function (a) {
        var b = a.mid, k = a.url;
        if (!a.executed && !a.injected && !(R[b] || a.url && (a.pack && R[a.url] === a.pack || 1 == R[a.url])))if (La(a), a.plugin)Ga(a); else {
            var f = function () {
                Ta(a);
                2 !== a.injected && (ga(a), d(a, Fa), o.trace("loader-define-nonmodule", [a.url]));
                da()
            };
            (Z = K[b] || K["url:" + a.url]) ? (o.trace("loader-inject", ["cache",
                a.mid, k]), Sa(Z, a), f()) : (o.trace("loader-inject", ["script", a.mid, k]), sa = a, o.injectUrl(Ea(k), f, a), sa = 0)
        }
    }, ua = function (a, k, f) {
        o.trace("loader-define-module", [a.mid, k]);
        if (2 === a.injected)return I("error", p("multipleDefine", a)), a;
        d(a, {deps: k, def: f, cjs: {id: a.mid, uri: a.url, exports: a.result = {}, setExports: function (b) {
            a.cjs.exports = b
        }, config: function () {
            return a.config
        }}});
        for (var m = 0; m < k.length; m++)k[m] = W(k[m], a);
        ga(a);
        if (!b(f) && !k.length)a.result = f, ra(a);
        return a
    }, Ta = function (a, b) {
        for (var d = [], f, m; ea.length;)m =
            ea.shift(), b && (m[0] = b.shift()), f = m[0] && W(m[0]) || a, d.push([f, m[1], m[2]]);
        F(a);
        k(d, function (a) {
            ba(ua.apply(null, a))
        })
    }, ia = 0, fa = c, za = c;
    fa = function () {
        ia && clearTimeout(ia);
        ia = 0
    };
    za = function () {
        fa();
        o.waitms && (ia = window.setTimeout(function () {
            fa();
            I("error", p("timeout", R))
        }, o.waitms))
    };
    s.add("ie-event-behavior", !!q.attachEvent && ("undefined" === typeof opera || "[object Opera]" != opera.toString()));
    var va = function (a, b, d, k) {
        if (s("ie-event-behavior"))return a.attachEvent(d, k), function () {
            a.detachEvent(d, k)
        };
        a.addEventListener(b,
            k, !1);
        return function () {
            a.removeEventListener(b, k, !1)
        }
    }, Ua = va(window, "load", "onload", function () {
        o.pageLoaded = 1;
        "complete" != q.readyState && (q.readyState = "complete");
        Ua()
    }), Ha = q.getElementsByTagName("script")[0], Va = Ha.parentNode;
    o.injectUrl = function (a, b, d) {
        var d = d.node = q.createElement("script"), k = va(d, "load", "onreadystatechange", function (a) {
            var a = a || window.event, d = a.target || a.srcElement;
            if ("load" === a.type || /complete|loaded/.test(d.readyState))k(), f(), b && b()
        }), f = va(d, "error", "onerror", function (b) {
            k();
            f();
            I("error", p("scriptError", [a, b]))
        });
        d.type = "text/javascript";
        d.charset = "utf-8";
        d.src = a;
        Va.insertBefore(d, Ha);
        return d
    };
    o.log = c;
    o.trace = c;
    var Ia = function (a, d, k) {
        var m = arguments.length, c = ["require", "exports", "module"], g = [0, a, d];
        1 == m ? g = [0, b(a) ? c : [], a] : 2 == m && f(a) ? g = [a, b(d) ? c : [], d] : 3 == m && (g = [a, d, k]);
        o.trace("loader-define", g.slice(0, 2));
        if ((m = g[0] && W(g[0])) && !R[m.mid])ba(ua(m, g[1], g[2])); else if (!s("ie-event-behavior") || ta)ea.push(g); else {
            m = m || sa;
            if (!m)for (a in R)if ((c = w[a]) && c.node && "interactive" ===
                c.node.readyState) {
                m = c;
                break
            }
            m ? (F(m), ba(ua(m, g[1], g[2]))) : I("error", p("ieDefineFailed", g[0]));
            da()
        }
    };
    Ia.amd = {vendor: "dojotoolkit.org"};
    d(d(o, j.loaderPatch), e.loaderPatch);
    J("error", function (a) {
        try {
            if (a instanceof Error)for (var b in a);
        } catch (d) {
        }
    });
    d(o, {uid: n, cache: K, packs: Q});
    if (!r.define) {
        r.define = Ia;
        r.require = o;
        k(T, function (a) {
            G(a)
        });
        var Ja = C.deps || e.deps || j.deps, Ka = C.callback || e.callback || j.callback;
        o.boot = Ja || Ka ? [Ja || [], Ka] : 0
    }
})(this.dojoConfig || this.djConfig || this.require || {}, {async: 0, hasCache: {"config-selectorEngine": "acme",
    "config-tlmSiblingOfDojo": 1, "dojo-built": 1, "dojo-loader": 1, dom: 1, "host-browser": 1}, packages: [
    {location: ".", name: "dojo"},
    {location: "../dijit", name: "dijit"},
    {location: "../dojox", name: "dojox"},
    {location: "../app", name: "app"}
]});
require({cache: {"dojo/i18n": function () {
    define("./_base/kernel,require,./has,./_base/array,./_base/config,./_base/lang,./_base/xhr,./json,module".split(","), function (e, j, i, l, c, g, h, b, f) {
        i.add("dojo-preload-i18n-Api", 1);
        var h = e.i18n = {}, a = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/, k = function (a, b, d, k) {
            for (var f = [d + k], b = b.split("-"), m = "", c = 0; c < b.length; c++)m += (m ? "-" : "") + b[c], (!a || a[m]) && f.push(d + m + "/" + k);
            return f
        }, d = {}, p = function (a, b, d) {
            d = d ? d.toLowerCase() : e.locale;
            a = a.replace(/\./g, "/");
            b = b.replace(/\./g,
                "/");
            return/root/i.test(d) ? a + "/nls/" + b : a + "/nls/" + d + "/" + b
        };
        e.getL10nName = function (a, b, d) {
            return f.id + "!" + p(a, b, d)
        };
        var m = function (a, b, f, m, c, p) {
            a([b], function (h) {
                var e = g.clone(h.root), o = k(!h._v1x && h, c, f, m);
                a(o, function () {
                    for (var a = 1; a < o.length; a++)e = g.mixin(g.clone(e), arguments[a]);
                    d[b + "/" + c] = e;
                    p()
                })
            })
        }, n = function (a) {
            var b = c.extraLocale || [], b = g.isArray(b) ? b : [b];
            b.push(a);
            return b
        }, o = function (k, f, c) {
            if (i("dojo-preload-i18n-Api")) {
                var p = k.split("*"), h = "preload" == p[1];
                h && (d[k] || (d[k] = 1, u(p[2], b.parse(p[3]),
                    1, f)), c(1));
                if (!(p = h))v && s.push([k, f, c]), p = v;
                if (p)return
            }
            var k = a.exec(k), o = k[1] + "/", r = k[5] || k[4], q = o + r, p = (k = k[5] && k[4]) || e.locale, j = q + "/" + p, k = k ? [p] : n(p), z = k.length, y = function () {
                --z || c(g.delegate(d[j]))
            };
            l.forEach(k, function (a) {
                var b = q + "/" + a;
                i("dojo-preload-i18n-Api") && t(b);
                d[b] ? y() : m(f, q, o, r, a, y)
            })
        };
        if (i("dojo-unit-tests"))var r = h.unitTests = [];
        i("dojo-preload-i18n-Api");
        var q = h.normalizeLocale = function (a) {
                a = a ? a.toLowerCase() : e.locale;
                return"root" == a ? "ROOT" : a
            }, v = 0, s = [], u = h._preloadLocalizations = function (a, b, k, f) {
                function m(a, b) {
                    f([a], b)
                }

                function c(a, b) {
                    for (var d = a.split("-"); d.length;) {
                        if (b(d.join("-")))return;
                        d.pop()
                    }
                    b("ROOT")
                }

                function g(k) {
                    k = q(k);
                    c(k, function (k) {
                        if (0 <= l.indexOf(b, k)) {
                            var f = a.replace(/\./g, "/") + "_" + k;
                            v++;
                            m(f, function (a) {
                                for (var b in a)d[j.toAbsMid(b) + "/" + k] = a[b];
                                for (--v; !v && s.length;)o.apply(null, s.shift())
                            });
                            return!0
                        }
                        return!1
                    })
                }

                f = f || j;
                g();
                l.forEach(e.config.extraLocale, g)
            }, t = function () {
            }, y = {}, z = new Function("__bundle", "__checkForLegacyModules", "__mid", "__amdValue", "var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},\t   require = function(){define.called = 1;};try{define.called = 0;eval(__bundle);if(define.called==1)return __amdValue;if((__checkForLegacyModules = __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),
            t = function (a) {
                for (var b, k = a.split("/"), f = e.global[k[0]], m = 1; f && m < k.length - 1; f = f[k[m++]]);
                f && ((b = f[k[m]]) || (b = f[k[m].replace(/-/g, "_")]), b && (d[a] = b));
                return b
            };
        h.getLocalization = function (a, b, d) {
            var k, a = p(a, b, d);
            o(a, j, function (a) {
                k = a
            });
            return k
        };
        i("dojo-unit-tests") && r.push(function (a) {
            a.register("tests.i18n.unit", function (a) {
                var b;
                b = z("{prop:1}", t, "nonsense", y);
                a.is({prop: 1}, b);
                a.is(void 0, b[1]);
                b = z("({prop:1})", t, "nonsense", y);
                a.is({prop: 1}, b);
                a.is(void 0, b[1]);
                b = z("{'prop-x':1}", t, "nonsense", y);
                a.is({"prop-x": 1}, b);
                a.is(void 0, b[1]);
                b = z("({'prop-x':1})", t, "nonsense", y);
                a.is({"prop-x": 1}, b);
                a.is(void 0, b[1]);
                b = z("define({'prop-x':1})", t, "nonsense", y);
                a.is(y, b);
                a.is({"prop-x": 1}, y.result);
                b = z("define('some/module', {'prop-x':1})", t, "nonsense", y);
                a.is(y, b);
                a.is({"prop-x": 1}, y.result);
                b = z("this is total nonsense and should throw an error", t, "nonsense", y);
                a.is(b instanceof Error, !0)
            })
        });
        return g.mixin(h, {dynamic: !0, normalize: function (a, b) {
            return/^\./.test(a) ? b(a) : a
        }, load: o, cache: d})
    })
}, "dojo/_base/kernel": function () {
    define(["../has",
        "./config", "require", "module"], function (e, j, i, l) {
        var c, g = {}, h = {}, b = {config: j, global: this, dijit: g, dojox: h}, g = {dojo: ["dojo", b], dijit: ["dijit", g], dojox: ["dojox", h]}, l = i.map && i.map[l.id.match(/[^\/]+/)[0]];
        for (c in l)g[c] ? g[c][0] = l[c] : g[c] = [l[c], {}];
        for (c in g)l = g[c], l[1]._scopeName = l[0], j.noGlobals || (this[l[0]] = l[1]);
        b.scopeMap = g;
        b.baseUrl = b.config.baseUrl = i.baseUrl;
        b.isAsync = i.async;
        b.locale = j.locale;
        l = "$Rev: 29801 $".match(/\d+/);
        b.version = {major: 1, minor: 8, patch: 1, flag: "", revision: l ? +l[0] : NaN, toString: function () {
            var a =
                b.version;
            return a.major + "." + a.minor + "." + a.patch + a.flag + " (" + a.revision + ")"
        }};
        Function("d", "d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(b);
        b.exit = function () {
        };
        "undefined" != typeof console || (console = {});
        for (var g = "assert,count,debug,dir,dirxml,error,group,groupEnd,info,profile,profileEnd,time,timeEnd,trace,warn,log".split(","), f, l = 0; f = g[l++];)console[f] || function () {
            var a = f + "";
            console[a] = "log"in console ? function () {
                var b = Array.apply({}, arguments);
                b.unshift(a +
                    ":");
                console.log(b.join(" "))
            } : function () {
            };
            console[a]._fake = !0
        }();
        e.add("dojo-debug-messages", !!j.isDebug);
        b.deprecated = b.experimental = function () {
        };
        if (e("dojo-debug-messages"))b.deprecated = function () {
        }, b.experimental = function () {
        };
        if (j.modulePaths) {
            b.deprecated("dojo.modulePaths", "use paths configuration");
            e = {};
            for (c in j.modulePaths)e[c.replace(/\./g, "/")] = j.modulePaths[c];
            i({paths: e})
        }
        b.moduleUrl = function (a, k) {
            b.deprecated("dojo.moduleUrl()", "use require.toUrl", "2.0");
            var d = null;
            a && (d = i.toUrl(a.replace(/\./g,
                "/") + (k ? "/" + k : "") + "/*.*").replace(/\/\*\.\*/, "") + (k ? "" : "/"));
            return d
        };
        b._hasResource = {};
        return b
    })
}, "dojo/has": function () {
    define(["require", "module"], function (e) {
        var j = e.has || function () {
        };
        j.add("dom-addeventlistener", !!document.addEventListener);
        j.add("touch", "ontouchstart"in document);
        j.add("device-width", screen.availWidth || innerWidth);
        e = document.createElement("form");
        j.add("dom-attributes-explicit", 0 == e.attributes.length);
        j.add("dom-attributes-specified-flag", 0 < e.attributes.length && 40 > e.attributes.length);
        j.clearElement = function (e) {
            e.innerHTML = "";
            return e
        };
        j.normalize = function (e, l) {
            var c = e.match(/[\?:]|[^:\?]*/g), g = 0, h = function (b) {
                var f = c[g++];
                if (":" == f)return 0;
                if ("?" == c[g++]) {
                    if (!b && j(f))return h();
                    h(!0);
                    return h(b)
                }
                return f || 0
            };
            return(e = h()) && l(e)
        };
        j.load = function (e, l, c) {
            e ? l([e], c) : c()
        };
        return j
    })
}, "dojo/_base/config": function () {
    define(["../has", "require"], function (e, j) {
        var i = {}, l = j.rawConfig, c;
        for (c in l)i[c] = l[c];
        return i
    })
}, "dojo/_base/array": function () {
    define(["./kernel", "../has", "./lang"],
        function (e, j, i) {
            function l(a) {
                return h[a] = new Function("item", "index", "array", a)
            }

            function c(a) {
                var b = !a;
                return function (d, f, m) {
                    var c = 0, g = d && d.length || 0, e;
                    g && "string" == typeof d && (d = d.split(""));
                    "string" == typeof f && (f = h[f] || l(f));
                    if (m)for (; c < g; ++c) {
                        if (e = !f.call(m, d[c], c, d), a ^ e)return!e
                    } else for (; c < g; ++c)if (e = !f(d[c], c, d), a ^ e)return!e;
                    return b
                }
            }

            function g(a) {
                var k = 1, d = 0, c = 0;
                a || (k = d = c = -1);
                return function (m, g, e, h) {
                    if (h && 0 < k)return f.lastIndexOf(m, g, e);
                    var h = m && m.length || 0, l = a ? h + c : d;
                    e === b ? e = a ? d : h + c : 0 > e ?
                        (e = h + e, 0 > e && (e = d)) : e = e >= h ? h + c : e;
                    for (h && "string" == typeof m && (m = m.split("")); e != l; e += k)if (m[e] == g)return e;
                    return-1
                }
            }

            var h = {}, b, f = {every: c(!1), some: c(!0), indexOf: g(!0), lastIndexOf: g(!1), forEach: function (a, b, d) {
                var f = 0, m = a && a.length || 0;
                m && "string" == typeof a && (a = a.split(""));
                "string" == typeof b && (b = h[b] || l(b));
                if (d)for (; f < m; ++f)b.call(d, a[f], f, a); else for (; f < m; ++f)b(a[f], f, a)
            }, map: function (a, b, d, f) {
                var m = 0, c = a && a.length || 0, f = new (f || Array)(c);
                c && "string" == typeof a && (a = a.split(""));
                "string" == typeof b &&
                (b = h[b] || l(b));
                if (d)for (; m < c; ++m)f[m] = b.call(d, a[m], m, a); else for (; m < c; ++m)f[m] = b(a[m], m, a);
                return f
            }, filter: function (a, b, d) {
                var f = 0, m = a && a.length || 0, c = [], g;
                m && "string" == typeof a && (a = a.split(""));
                "string" == typeof b && (b = h[b] || l(b));
                if (d)for (; f < m; ++f)g = a[f], b.call(d, g, f, a) && c.push(g); else for (; f < m; ++f)g = a[f], b(g, f, a) && c.push(g);
                return c
            }, clearCache: function () {
                h = {}
            }};
            i.mixin(e, f);
            return f
        })
}, "dojo/_base/lang": function () {
    define(["./kernel", "../has", "../sniff"], function (e, j) {
        j.add("bug-for-in-skips-shadowed",
            function () {
                for (var a in{toString: 1})return 0;
                return 1
            });
        var i = j("bug-for-in-skips-shadowed") ? "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split(".") : [], l = i.length, c = function (a, b, d) {
            var f, m = 0, c = e.global;
            if (!d)if (a.length) {
                f = a[m++];
                try {
                    d = e.scopeMap[f] && e.scopeMap[f][1]
                } catch (g) {
                }
                d = d || (f in c ? c[f] : b ? c[f] = {} : void 0)
            } else return c;
            for (; d && (f = a[m++]);)d = f in d ? d[f] : b ? d[f] = {} : void 0;
            return d
        }, g = Object.prototype.toString, h = function (a, b, d) {
            return(d || []).concat(Array.prototype.slice.call(a,
                b || 0))
        }, b = /\{([^\}]+)\}/g, f = {_extraNames: i, _mixin: function (a, b, d) {
            var f, m, c, g = {};
            for (f in b)if (m = b[f], !(f in a) || a[f] !== m && (!(f in g) || g[f] !== m))a[f] = d ? d(m) : m;
            if (j("bug-for-in-skips-shadowed") && b)for (c = 0; c < l; ++c)if (f = i[c], m = b[f], !(f in a) || a[f] !== m && (!(f in g) || g[f] !== m))a[f] = d ? d(m) : m;
            return a
        }, mixin: function (a, b) {
            a || (a = {});
            for (var d = 1, c = arguments.length; d < c; d++)f._mixin(a, arguments[d]);
            return a
        }, setObject: function (a, b, d) {
            var f = a.split("."), a = f.pop();
            return(d = c(f, !0, d)) && a ? d[a] = b : void 0
        }, getObject: function (a, b, d) {
            return c(a.split("."), b, d)
        }, exists: function (a, b) {
            return void 0 !== f.getObject(a, !1, b)
        }, isString: function (a) {
            return"string" == typeof a || a instanceof String
        }, isArray: function (a) {
            return a && (a instanceof Array || "array" == typeof a)
        }, isFunction: function (a) {
            return"[object Function]" === g.call(a)
        }, isObject: function (a) {
            return void 0 !== a && (null === a || "object" == typeof a || f.isArray(a) || f.isFunction(a))
        }, isArrayLike: function (a) {
            return a && void 0 !== a && !f.isString(a) && !f.isFunction(a) && !(a.tagName && "form" == a.tagName.toLowerCase()) &&
                (f.isArray(a) || isFinite(a.length))
        }, isAlien: function (a) {
            return a && !f.isFunction(a) && /\{\s*\[native code\]\s*\}/.test("" + a)
        }, extend: function (a, b) {
            for (var d = 1, c = arguments.length; d < c; d++)f._mixin(a.prototype, arguments[d]);
            return a
        }, _hitchArgs: function (a, b) {
            var d = f._toArray(arguments, 2), c = f.isString(b);
            return function () {
                var m = f._toArray(arguments), g = c ? (a || e.global)[b] : b;
                return g && g.apply(a || this, d.concat(m))
            }
        }, hitch: function (a, b) {
            if (2 < arguments.length)return f._hitchArgs.apply(e, arguments);
            b || (b = a, a =
                null);
            if (f.isString(b)) {
                a = a || e.global;
                if (!a[b])throw['lang.hitch: scope["', b, '"] is null (scope="', a, '")'].join("");
                return function () {
                    return a[b].apply(a, arguments || [])
                }
            }
            return!a ? b : function () {
                return b.apply(a, arguments || [])
            }
        }, delegate: function () {
            function a() {
            }

            return function (b, d) {
                a.prototype = b;
                var c = new a;
                a.prototype = null;
                d && f._mixin(c, d);
                return c
            }
        }(), _toArray: j("ie") ? function () {
            function a(a, b, f) {
                f = f || [];
                for (b = b || 0; b < a.length; b++)f.push(a[b]);
                return f
            }

            return function (b) {
                return(b.item ? a : h).apply(this,
                    arguments)
            }
        }() : h, partial: function (a) {
            return f.hitch.apply(e, [null].concat(f._toArray(arguments)))
        }, clone: function (a) {
            if (!a || "object" != typeof a || f.isFunction(a))return a;
            if (a.nodeType && "cloneNode"in a)return a.cloneNode(!0);
            if (a instanceof Date)return new Date(a.getTime());
            if (a instanceof RegExp)return RegExp(a);
            var b, d, c;
            if (f.isArray(a)) {
                b = [];
                for (d = 0, c = a.length; d < c; ++d)d in a && b.push(f.clone(a[d]))
            } else b = a.constructor ? new a.constructor : {};
            return f._mixin(b, a, f.clone)
        }, trim: String.prototype.trim ?
            function (a) {
                return a.trim()
            } : function (a) {
            return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }, replace: function (a, k, d) {
            return a.replace(d || b, f.isFunction(k) ? k : function (a, b) {
                return f.getObject(b, !1, k)
            })
        }};
        f.mixin(e, f);
        return f
    })
}, "dojo/sniff": function () {
    define(["./has"], function (e) {
        var j = navigator, i = j.userAgent, j = j.appVersion, l = parseFloat(j);
        e.add("air", 0 <= i.indexOf("AdobeAIR"));
        e.add("khtml", 0 <= j.indexOf("Konqueror") ? l : void 0);
        e.add("webkit", parseFloat(i.split("WebKit/")[1]) || void 0);
        e.add("chrome",
            parseFloat(i.split("Chrome/")[1]) || void 0);
        e.add("safari", 0 <= j.indexOf("Safari") && !e("chrome") ? parseFloat(j.split("Version/")[1]) : void 0);
        e.add("mac", 0 <= j.indexOf("Macintosh"));
        e.add("quirks", "BackCompat" == document.compatMode);
        e.add("ios", /iPhone|iPod|iPad/.test(i));
        e.add("android", parseFloat(i.split("Android ")[1]) || void 0);
        if (!e("webkit")) {
            0 <= i.indexOf("Opera") && e.add("opera", 9.8 <= l ? parseFloat(i.split("Version/")[1]) || l : l);
            0 <= i.indexOf("Gecko") && !e("khtml") && !e("webkit") && e.add("mozilla", l);
            e("mozilla") &&
            e.add("ff", parseFloat(i.split("Firefox/")[1] || i.split("Minefield/")[1]) || void 0);
            if (document.all && !e("opera"))i = parseFloat(j.split("MSIE ")[1]) || void 0, (j = document.documentMode) && 5 != j && Math.floor(i) != j && (i = j), e.add("ie", i);
            e.add("wii", "undefined" != typeof opera && opera.wiiremote)
        }
        return e
    })
}, "dojo/_base/xhr": function () {
    define("./kernel,./sniff,require,../io-query,../dom,../dom-form,./Deferred,./config,./json,./lang,./array,../on,../aspect,../request/watch,../request/xhr,../request/util".split(","),
        function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o) {
            e._xhrObj = n._create;
            var r = e.config;
            e.objectToQuery = l.objectToQuery;
            e.queryToObject = l.queryToObject;
            e.fieldToObject = g.fieldToObject;
            e.formToObject = g.toObject;
            e.formToQuery = g.toQuery;
            e.formToJson = g.toJson;
            e._blockAsync = !1;
            var q = e._contentHandlers = e.contentHandlers = {text: function (a) {
                return a.responseText
            }, json: function (a) {
                return f.fromJson(a.responseText || null)
            }, "json-comment-filtered": function (a) {
                var a = a.responseText, b = a.indexOf("/*"), d = a.lastIndexOf("*/");
                if (-1 == b || -1 == d)throw Error("JSON was not comment filtered");
                return f.fromJson(a.substring(b + 2, d))
            }, javascript: function (a) {
                return e.eval(a.responseText)
            }, xml: function (a) {
                var b = a.responseXML;
                if (j("ie") && (!b || !b.documentElement)) {
                    var d = function (a) {
                        return"MSXML" + a + ".DOMDocument"
                    }, d = ["Microsoft.XMLDOM", d(6), d(4), d(3), d(2)];
                    k.some(d, function (d) {
                        try {
                            var f = new ActiveXObject(d);
                            f.async = !1;
                            f.loadXML(a.responseText);
                            b = f
                        } catch (k) {
                            return!1
                        }
                        return!0
                    })
                }
                return b
            }, "json-comment-optional": function (a) {
                return a.responseText &&
                    /^[^{\[]*\/\*/.test(a.responseText) ? q["json-comment-filtered"](a) : q.json(a)
            }};
            e._ioSetArgs = function (b, d, f, k) {
                var m = {args: b, url: b.url}, p = null;
                if (b.form) {
                    var p = c.byId(b.form), o = p.getAttributeNode("action");
                    m.url = m.url || (o ? o.value : null);
                    p = g.toObject(p)
                }
                o = [
                    {}
                ];
                p && o.push(p);
                b.content && o.push(b.content);
                b.preventCache && o.push({"dojo.preventCache": (new Date).valueOf()});
                m.query = l.objectToQuery(a.mixin.apply(null, o));
                m.handleAs = b.handleAs || "text";
                var n = new h(function (a) {
                    a.canceled = !0;
                    d && d(a);
                    var b = a.ioArgs.error;
                    if (!b)b = Error("request cancelled"), b.dojoType = "cancel", a.ioArgs.error = b;
                    return b
                });
                n.addCallback(f);
                var i = b.load;
                i && a.isFunction(i) && n.addCallback(function (a) {
                    return i.call(b, a, m)
                });
                var u = b.error;
                u && a.isFunction(u) && n.addErrback(function (a) {
                    return u.call(b, a, m)
                });
                var q = b.handle;
                q && a.isFunction(q) && n.addBoth(function (a) {
                    return q.call(b, a, m)
                });
                n.addErrback(function (a) {
                    return k(a, n)
                });
                r.ioPublish && e.publish && !1 !== m.args.ioPublish && (n.addCallbacks(function (a) {
                        e.publish("/dojo/io/load", [n, a]);
                        return a
                    },
                    function (a) {
                        e.publish("/dojo/io/error", [n, a]);
                        return a
                    }), n.addBoth(function (a) {
                    e.publish("/dojo/io/done", [n, a]);
                    return a
                }));
                n.ioArgs = m;
                return n
            };
            var v = function (a) {
                a = q[a.ioArgs.handleAs](a.ioArgs.xhr);
                return void 0 === a ? null : a
            }, s = function (a) {
                return a
            }, u = function (a) {
                0 >= t && (t = 0, r.ioPublish && e.publish && (!a || a && !1 !== a.ioArgs.args.ioPublish) && e.publish("/dojo/io/stop"))
            }, t = 0;
            p.after(m, "_onAction", function () {
                t -= 1
            });
            p.after(m, "_onInFlight", u);
            e._ioCancelAll = m.cancelAll;
            e._ioNotifyStart = function (a) {
                r.ioPublish &&
                    e.publish && !1 !== a.ioArgs.args.ioPublish && (t || e.publish("/dojo/io/start"), t += 1, e.publish("/dojo/io/send", [a]))
            };
            e._ioWatch = function (b, d, f, k) {
                b.ioArgs.options = b.ioArgs.args;
                a.mixin(b, {response: b.ioArgs, isValid: function () {
                    return d(b)
                }, isReady: function () {
                    return f(b)
                }, handleResponse: function () {
                    return k(b)
                }});
                m(b);
                u(b)
            };
            e._ioAddQueryToUrl = function (a) {
                if (a.query.length)a.url += (-1 == a.url.indexOf("?") ? "?" : "&") + a.query, a.query = null
            };
            e.xhr = function (a, b, d) {
                var f, k = e._ioSetArgs(b, function () {
                        f && f.cancel()
                    }, v, s),
                    m = k.ioArgs;
                "postData"in b ? m.query = b.postData : "putData"in b ? m.query = b.putData : "rawBody"in b ? m.query = b.rawBody : (2 < arguments.length && !d || -1 === "POST|PUT".indexOf(a.toUpperCase())) && e._ioAddQueryToUrl(m);
                var c = {method: a, handleAs: "text", timeout: b.timeout, withCredentials: b.withCredentials, ioArgs: m};
                if ("undefined" !== typeof b.headers)c.headers = b.headers;
                if ("undefined" !== typeof b.contentType) {
                    if (!c.headers)c.headers = {};
                    c.headers["Content-Type"] = b.contentType
                }
                if ("undefined" !== typeof m.query)c.data = m.query;
                if ("undefined" !== typeof b.sync)c.sync = b.sync;
                e._ioNotifyStart(k);
                try {
                    f = n(m.url, c, !0)
                } catch (g) {
                    return k.cancel(), k
                }
                k.ioArgs.xhr = f.response.xhr;
                f.then(function () {
                    k.resolve(k)
                }).otherwise(function (a) {
                    m.error = a;
                    if (a.response)a.status = a.response.status, a.responseText = a.response.text, a.xhr = a.response.xhr;
                    k.reject(a)
                });
                return k
            };
            e.xhrGet = function (a) {
                return e.xhr("GET", a)
            };
            e.rawXhrPost = e.xhrPost = function (a) {
                return e.xhr("POST", a, !0)
            };
            e.rawXhrPut = e.xhrPut = function (a) {
                return e.xhr("PUT", a, !0)
            };
            e.xhrDelete = function (a) {
                return e.xhr("DELETE",
                    a)
            };
            e._isDocumentOk = function (a) {
                return o.checkStatus(a.status)
            };
            e._getText = function (a) {
                var b;
                e.xhrGet({url: a, sync: !0, load: function (a) {
                    b = a
                }});
                return b
            };
            a.mixin(e.xhr, {_xhrObj: e._xhrObj, fieldToObject: g.fieldToObject, formToObject: g.toObject, objectToQuery: l.objectToQuery, formToQuery: g.toQuery, formToJson: g.toJson, queryToObject: l.queryToObject, contentHandlers: q, _ioSetArgs: e._ioSetArgs, _ioCancelAll: e._ioCancelAll, _ioNotifyStart: e._ioNotifyStart, _ioWatch: e._ioWatch, _ioAddQueryToUrl: e._ioAddQueryToUrl, _isDocumentOk: e._isDocumentOk,
                _getText: e._getText, get: e.xhrGet, post: e.xhrPost, put: e.xhrPut, del: e.xhrDelete});
            return e.xhr
        })
}, "dojo/_base/sniff": function () {
    define(["./kernel", "./lang", "../sniff"], function (e, j, i) {
        e._name = "browser";
        j.mixin(e, {isBrowser: !0, isFF: i("ff"), isIE: i("ie"), isKhtml: i("khtml"), isWebKit: i("webkit"), isMozilla: i("mozilla"), isMoz: i("mozilla"), isOpera: i("opera"), isSafari: i("safari"), isChrome: i("chrome"), isMac: i("mac"), isIos: i("ios"), isAndroid: i("android"), isWii: i("wii"), isQuirks: i("quirks"), isAir: i("air")});
        e.locale =
            e.locale || (i("ie") ? navigator.userLanguage : navigator.language).toLowerCase();
        return i
    })
}, "dojo/io-query": function () {
    define(["./_base/lang"], function (e) {
        var j = {};
        return{objectToQuery: function (i) {
            var l = encodeURIComponent, c = [], g;
            for (g in i) {
                var h = i[g];
                if (h != j[g]) {
                    var b = l(g) + "=";
                    if (e.isArray(h))for (var f = 0, a = h.length; f < a; ++f)c.push(b + l(h[f])); else c.push(b + l(h))
                }
            }
            return c.join("&")
        }, queryToObject: function (i) {
            for (var l = decodeURIComponent, i = i.split("&"), c = {}, g, h, b = 0, f = i.length; b < f; ++b)if (h = i[b], h.length) {
                var a =
                    h.indexOf("=");
                0 > a ? (g = l(h), h = "") : (g = l(h.slice(0, a)), h = l(h.slice(a + 1)));
                "string" == typeof c[g] && (c[g] = [c[g]]);
                e.isArray(c[g]) ? c[g].push(h) : c[g] = h
            }
            return c
        }}
    })
}, "dojo/dom": function () {
    define(["./sniff", "./_base/lang", "./_base/window"], function (e, j, i) {
        if (7 >= e("ie"))try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (l) {
        }
        var c = {};
        c.byId = e("ie") ? function (c, e) {
            if ("string" != typeof c)return c;
            var b = e || i.doc, f = c && b.getElementById(c);
            if (f && (f.attributes.id.value == c || f.id == c))return f;
            b = b.all[c];
            if (!b ||
                b.nodeName)b = [b];
            for (var a = 0; f = b[a++];)if (f.attributes && f.attributes.id && f.attributes.id.value == c || f.id == c)return f
        } : function (c, e) {
            return("string" == typeof c ? (e || i.doc).getElementById(c) : c) || null
        };
        c.isDescendant = function (g, e) {
            try {
                g = c.byId(g);
                for (e = c.byId(e); g;) {
                    if (g == e)return!0;
                    g = g.parentNode
                }
            } catch (b) {
            }
            return!1
        };
        c.setSelectable = function (g, h) {
            g = c.byId(g);
            if (e("mozilla"))g.style.MozUserSelect = h ? "" : "none"; else if (e("khtml") || e("webkit"))g.style.KhtmlUserSelect = h ? "auto" : "none"; else if (e("ie"))for (var b =
                g.unselectable = h ? "" : "on", f = g.getElementsByTagName("*"), a = 0, k = f.length; a < k; ++a)f.item(a).unselectable = b
        };
        return c
    })
}, "dojo/_base/window": function () {
    define(["./kernel", "./lang", "../sniff"], function (e, j, i) {
        var l = {global: e.global, doc: this.document || null, body: function (c) {
            c = c || e.doc;
            return c.body || c.getElementsByTagName("body")[0]
        }, setContext: function (c, g) {
            e.global = l.global = c;
            e.doc = l.doc = g
        }, withGlobal: function (c, g, h, b) {
            var f = e.global;
            try {
                return e.global = l.global = c, l.withDoc.call(null, c.document, g, h, b)
            } finally {
                e.global =
                    l.global = f
            }
        }, withDoc: function (c, g, h, b) {
            var f = l.doc, a = i("quirks"), k = i("ie"), d, p, m;
            try {
                e.doc = l.doc = c;
                e.isQuirks = i.add("quirks", "BackCompat" == e.doc.compatMode, !0, !0);
                if (i("ie") && (m = c.parentWindow) && m.navigator)d = parseFloat(m.navigator.appVersion.split("MSIE ")[1]) || void 0, (p = c.documentMode) && 5 != p && Math.floor(d) != p && (d = p), e.isIE = i.add("ie", d, !0, !0);
                h && "string" == typeof g && (g = h[g]);
                return g.apply(h, b || [])
            } finally {
                e.doc = l.doc = f, e.isQuirks = i.add("quirks", a, !0, !0), e.isIE = i.add("ie", k, !0, !0)
            }
        }};
        j.mixin(e, l);
        return l
    })
}, "dojo/dom-form": function () {
    define(["./_base/lang", "./dom", "./io-query", "./json"], function (e, j, i, l) {
        var c = {fieldToObject: function (c) {
            var e = null;
            if (c = j.byId(c)) {
                var b = c.name, f = (c.type || "").toLowerCase();
                if (b && f && !c.disabled)if ("radio" == f || "checkbox" == f) {
                    if (c.checked)e = c.value
                } else if (c.multiple) {
                    e = [];
                    for (c = [c.firstChild]; c.length;)for (b = c.pop(); b; b = b.nextSibling)if (1 == b.nodeType && "option" == b.tagName.toLowerCase())b.selected && e.push(b.value); else {
                        b.nextSibling && c.push(b.nextSibling);
                        b.firstChild &&
                        c.push(b.firstChild);
                        break
                    }
                } else e = c.value
            }
            return e
        }, toObject: function (g) {
            for (var h = {}, g = j.byId(g).elements, b = 0, f = g.length; b < f; ++b) {
                var a = g[b], k = a.name, d = (a.type || "").toLowerCase();
                if (k && d && 0 > "file|submit|image|reset|button".indexOf(d) && !a.disabled) {
                    var p = h, m = k, a = c.fieldToObject(a);
                    if (null !== a) {
                        var n = p[m];
                        "string" == typeof n ? p[m] = [n, a] : e.isArray(n) ? n.push(a) : p[m] = a
                    }
                    if ("image" == d)h[k + ".x"] = h[k + ".y"] = h[k].x = h[k].y = 0
                }
            }
            return h
        }, toQuery: function (g) {
            return i.objectToQuery(c.toObject(g))
        }, toJson: function (g, e) {
            return l.stringify(c.toObject(g), null, e ? 4 : 0)
        }};
        return c
    })
}, "dojo/json": function () {
    define(["./has"], function (e) {
        var j = "undefined" != typeof JSON;
        e.add("json-parse", j);
        e.add("json-stringify", j && '{"a":1}' == JSON.stringify({a: 0}, function (e, c) {
            return c || 1
        }));
        if (e("json-stringify"))return JSON;
        var i = function (e) {
            return('"' + e.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
        };
        return{parse: e("json-parse") ? JSON.parse :
            function (e, c) {
                if (c && !/^([\s\[\{]*(?:"(?:\\.|[^"])+"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(e))throw new SyntaxError("Invalid characters in JSON");
                return eval("(" + e + ")")
            }, stringify: function (e, c, g) {
            function h(f, a, k) {
                c && (f = c(k, f));
                var d;
                d = typeof f;
                if ("number" == d)return isFinite(f) ? f + "" : "null";
                if ("boolean" == d)return f + "";
                if (null === f)return"null";
                if ("string" == typeof f)return i(f);
                if ("function" == d || "undefined" == d)return b;
                if ("function" == typeof f.toJSON)return h(f.toJSON(k),
                    a, k);
                if (f instanceof Date)return'"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function (a, b, d) {
                    a = f["getUTC" + b]() + (d ? 1 : 0);
                    return 10 > a ? "0" + a : a
                });
                if (f.valueOf() !== f)return h(f.valueOf(), a, k);
                var e = g ? a + g : "", m = g ? " " : "", n = g ? "\n" : "";
                if (f instanceof Array) {
                    for (var m = f.length, o = [], k = 0; k < m; k++)d = h(f[k], e, k), "string" != typeof d && (d = "null"), o.push(n + e + d);
                    return"[" + o.join(",") + n + a + "]"
                }
                o = [];
                for (k in f) {
                    var l;
                    if (f.hasOwnProperty(k)) {
                        if ("number" == typeof k)l = '"' + k + '"'; else if ("string" == typeof k)l = i(k); else continue;
                        d = h(f[k], e, k);
                        "string" == typeof d && o.push(n + e + l + ":" + m + d)
                    }
                }
                return"{" + o.join(",") + n + a + "}"
            }

            var b;
            "string" == typeof c && (g = c, c = null);
            return h(e, "", "")
        }}
    })
}, "dojo/_base/Deferred": function () {
    define("./kernel,../Deferred,../promise/Promise,../errors/CancelError,../has,./lang,../when".split(","), function (e, j, i, l, c, g, h) {
        var b = function () {
        }, f = Object.freeze || function () {
        }, a = e.Deferred = function (k) {
            function d(a) {
                if (h)throw Error("This deferred has already been resolved");
                m = a;
                h = !0;
                e()
            }

            function e() {
                for (var a; !a && q;) {
                    var d = q;
                    q = q.next;
                    if (a = d.progress == b)h = !1;
                    var f = o ? d.error : d.resolved;
                    c("config-useDeferredInstrumentation") && o && j.instrumentRejected && j.instrumentRejected(m, !!f);
                    if (f)try {
                        var k = f(m);
                        k && "function" === typeof k.then ? k.then(g.hitch(d.deferred, "resolve"), g.hitch(d.deferred, "reject"), g.hitch(d.deferred, "progress")) : (f = a && void 0 === k, a && !f && (o = k instanceof Error), d.deferred[f && o ? "reject" : "resolve"](f ? m : k))
                    } catch (p) {
                        d.deferred.reject(p)
                    } else o ? d.deferred.reject(m) : d.deferred.resolve(m)
                }
            }

            var m, h, o, r, q, v = this.promise = new i;
            this.resolve = this.callback = function (a) {
                this.fired = 0;
                this.results = [a, null];
                d(a)
            };
            this.reject = this.errback = function (a) {
                o = !0;
                this.fired = 1;
                c("config-useDeferredInstrumentation") && j.instrumentRejected && j.instrumentRejected(a, !!q);
                d(a);
                this.results = [null, a]
            };
            this.progress = function (a) {
                for (var b = q; b;) {
                    var d = b.progress;
                    d && d(a);
                    b = b.next
                }
            };
            this.addCallbacks = function (a, d) {
                this.then(a, d, b);
                return this
            };
            v.then = this.then = function (d, f, k) {
                var c = k == b ? this : new a(v.cancel), d = {resolved: d,
                    error: f, progress: k, deferred: c};
                q ? r = r.next = d : q = r = d;
                h && e();
                return c.promise
            };
            var s = this;
            v.cancel = this.cancel = function () {
                if (!h) {
                    var a = k && k(s);
                    if (!h)a instanceof Error || (a = new l(a)), a.log = !1, s.reject(a)
                }
            };
            f(v)
        };
        g.extend(a, {addCallback: function (a) {
            return this.addCallbacks(g.hitch.apply(e, arguments))
        }, addErrback: function (a) {
            return this.addCallbacks(null, g.hitch.apply(e, arguments))
        }, addBoth: function (a) {
            var b = g.hitch.apply(e, arguments);
            return this.addCallbacks(b, b)
        }, fired: -1});
        a.when = e.when = h;
        return a
    })
},
    "dojo/Deferred": function () {
        define("dojo/Deferred", ["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "./promise/instrumentation"], function (e, j, i, l, c) {
            var g = Object.freeze || function () {
            }, h = function (a, f, c, g, e) {
                2 === f && k.instrumentRejected && 0 === a.length && k.instrumentRejected(c, !1, g, e);
                for (e = 0; e < a.length; e++)b(a[e], f, c, g)
            }, b = function (b, c, m, g) {
                var e = b[c], h = b.deferred;
                if (e)try {
                    var l = e(m);
                    if (0 === c)"undefined" !== typeof l && a(h, c, l); else {
                        if (l && "function" === typeof l.then) {
                            b.cancel = l.cancel;
                            l.then(f(h,
                                1), f(h, 2), f(h, 0));
                            return
                        }
                        a(h, 1, l)
                    }
                } catch (i) {
                    a(h, 2, i)
                } else a(h, c, m);
                2 === c && k.instrumentRejected && k.instrumentRejected(m, !!e, g, h.promise)
            }, f = function (b, f) {
                return function (k) {
                    a(b, f, k)
                }
            }, a = function (a, b, f) {
                if (!a.isCanceled())switch (b) {
                    case 0:
                        a.progress(f);
                        break;
                    case 1:
                        a.resolve(f);
                        break;
                    case 2:
                        a.reject(f)
                }
            }, k = function (a) {
                var f = this.promise = new l, c = this, e, o, r, q = !1, j = [];
                Error.captureStackTrace && (Error.captureStackTrace(c, k), Error.captureStackTrace(f, k));
                this.isResolved = f.isResolved = function () {
                    return 1 ===
                        e
                };
                this.isRejected = f.isRejected = function () {
                    return 2 === e
                };
                this.isFulfilled = f.isFulfilled = function () {
                    return!!e
                };
                this.isCanceled = f.isCanceled = function () {
                    return q
                };
                this.progress = function (a, b) {
                    if (e) {
                        if (!0 === b)throw Error("This deferred has already been fulfilled.");
                        return f
                    }
                    h(j, 0, a, null, c);
                    return f
                };
                this.resolve = function (a, b) {
                    if (e) {
                        if (!0 === b)throw Error("This deferred has already been fulfilled.");
                        return f
                    }
                    h(j, e = 1, o = a, null, c);
                    j = null;
                    return f
                };
                var s = this.reject = function (a, b) {
                    if (e) {
                        if (!0 === b)throw Error("This deferred has already been fulfilled.");
                        return f
                    }
                    Error.captureStackTrace && Error.captureStackTrace(r = {}, s);
                    h(j, e = 2, o = a, r, c);
                    j = null;
                    return f
                };
                this.then = f.then = function (a, d, c) {
                    var m = [c, a, d];
                    m.cancel = f.cancel;
                    m.deferred = new k(function (a) {
                        return m.cancel && m.cancel(a)
                    });
                    e && !j ? b(m, e, o, r) : j.push(m);
                    return m.deferred.promise
                };
                this.cancel = f.cancel = function (b, f) {
                    if (e) {
                        if (!0 === f)throw Error("This deferred has already been fulfilled.");
                    } else {
                        if (a)var k = a(b), b = "undefined" === typeof k ? b : k;
                        q = !0;
                        if (e) {
                            if (2 === e && o === b)return b
                        } else return"undefined" === typeof b &&
                            (b = new i), s(b), b
                    }
                };
                g(f)
            };
            k.prototype.toString = function () {
                return"[object Deferred]"
            };
            c && c(k);
            return k
        })
    }, "dojo/errors/CancelError": function () {
        define(["./create"], function (e) {
            return e("CancelError", null, null, {dojoType: "cancel"})
        })
    }, "dojo/errors/create": function () {
        define(["../_base/lang"], function (e) {
            return function (j, i, l, c) {
                var l = l || Error, g = function (c) {
                    if (l === Error) {
                        Error.captureStackTrace && Error.captureStackTrace(this, g);
                        var b = Error.call(this, c), f;
                        for (f in b)b.hasOwnProperty(f) && (this[f] = b[f]);
                        this.message =
                            c;
                        this.stack = b.stack
                    } else l.apply(this, arguments);
                    i && i.apply(this, arguments)
                };
                g.prototype = e.delegate(l.prototype, c);
                g.prototype.name = j;
                return g.prototype.constructor = g
            }
        })
    }, "dojo/promise/Promise": function () {
        define(["../_base/lang"], function (e) {
            function j() {
                throw new TypeError("abstract");
            }

            return e.extend(function () {
            }, {then: function () {
                j()
            }, cancel: function () {
                j()
            }, isResolved: function () {
                j()
            }, isRejected: function () {
                j()
            }, isFulfilled: function () {
                j()
            }, isCanceled: function () {
                j()
            }, always: function (e) {
                return this.then(e,
                    e)
            }, otherwise: function (e) {
                return this.then(null, e)
            }, trace: function () {
                return this
            }, traceRejected: function () {
                return this
            }, toString: function () {
                return"[object Promise]"
            }})
        })
    }, "dojo/promise/instrumentation": function () {
        define(["./tracer", "../has", "../_base/lang", "../_base/array"], function (e, j, i, l) {
            function c(a, b) {
                b && b.stack && b.stack.split("\n").slice(1).join("\n").replace(/^\s+/, " ")
            }

            function g(a, b, f, k) {
                b || c(a, f, k)
            }

            function h(d, c, m, g) {
                c ? l.some(f, function (a, b) {
                    if (a.error === d)return f.splice(b, 1), !0
                }) : l.some(f,
                    function (a) {
                        return a.error === d
                    }) || f.push({error: d, rejection: m, deferred: g, timestamp: (new Date).getTime()});
                a || (a = setTimeout(b, k))
            }

            function b() {
                var d = (new Date).getTime(), g = d - k;
                f = l.filter(f, function (a) {
                    return a.timestamp < g ? (c(a.error, a.rejection, a.deferred), !1) : !0
                });
                f.length && (a = setTimeout(b, f[0].timestamp + k - d))
            }

            var f = [], a = !1, k = 1E3;
            return function (a) {
                var b = j("config-useDeferredInstrumentation");
                if (b) {
                    e.on("resolved", i.hitch(console, "log", "resolved"));
                    e.on("rejected", i.hitch(console, "log", "rejected"));
                    e.on("progress", i.hitch(console, "log", "progress"));
                    var f = [];
                    "string" === typeof b && (f = b.split(","), b = f.shift());
                    if ("report-rejections" === b)a.instrumentRejected = g; else if ("report-unhandled-rejections" === b || !0 === b || 1 === b)a.instrumentRejected = h, k = parseInt(f[0], 10) || k; else throw Error("Unsupported instrumentation usage <" + b + ">");
                }
            }
        })
    }, "dojo/promise/tracer": function () {
        define(["../_base/lang", "./Promise", "../Evented"], function (e, j, i) {
            function l(e) {
                setTimeout(function () {
                    g.apply(c, e)
                }, 0)
            }

            var c = new i, g = c.emit;
            c.emit = null;
            j.prototype.trace = function () {
                var c = e._toArray(arguments);
                this.then(function (b) {
                    l(["resolved", b].concat(c))
                }, function (b) {
                    l(["rejected", b].concat(c))
                }, function (b) {
                    l(["progress", b].concat(c))
                });
                return this
            };
            j.prototype.traceRejected = function () {
                var c = e._toArray(arguments);
                this.otherwise(function (b) {
                    l(["rejected", b].concat(c))
                });
                return this
            };
            return c
        })
    }, "dojo/Evented": function () {
        define("dojo/Evented", ["./aspect", "./on"], function (e, j) {
            function i() {
            }

            var l = e.after;
            i.prototype = {on: function (c, g) {
                return j.parse(this,
                    c, g, function (c, b) {
                        return l(c, "on" + b, g, !0)
                    })
            }, emit: function (c, g) {
                var e = [this];
                e.push.apply(e, arguments);
                return j.emit.apply(j, e)
            }};
            return i
        })
    }, "dojo/aspect": function () {
        define("dojo/aspect", [], function () {
            function e(b, f, a, k) {
                var d = b[f], c = "around" == f, m;
                if (c) {
                    var g = a(function () {
                        return d.advice(this, arguments)
                    });
                    m = {remove: function () {
                        m.cancelled = !0
                    }, advice: function (a, b) {
                        return m.cancelled ? d.advice(a, b) : g.apply(a, b)
                    }}
                } else m = {remove: function () {
                    var a = m.previous, d = m.next;
                    if (!d && !a)delete b[f]; else if (a ? a.next =
                        d : b[f] = d, d)d.previous = a
                }, id: l++, advice: a, receiveArguments: k};
                if (d && !c)if ("after" == f) {
                    for (a = d; a;)d = a, a = a.next;
                    d.next = m;
                    m.previous = d
                } else {
                    if ("before" == f)b[f] = m, m.next = d, d.previous = m
                } else b[f] = m;
                return m
            }

            function j(b) {
                return function (f, a, k, d) {
                    var c = f[a], m;
                    if (!c || c.target != f) {
                        f[a] = m = function () {
                            for (var a = l, b = arguments, d = m.before; d;)b = d.advice.apply(this, b) || b, d = d.next;
                            if (m.around)var f = m.around.advice(this, b);
                            for (d = m.after; d && d.id < a;) {
                                if (d.receiveArguments)var k = d.advice.apply(this, b), f = k === i ? f : k; else f =
                                    d.advice.call(this, f, b);
                                d = d.next
                            }
                            return f
                        };
                        if (c)m.around = {advice: function (a, b) {
                            return c.apply(a, b)
                        }};
                        m.target = f
                    }
                    f = e(m || c, b, k, d);
                    k = null;
                    return f
                }
            }

            var i, l = 0, c = j("after"), g = j("before"), h = j("around");
            return{before: g, around: h, after: c}
        })
    }, "dojo/on": function () {
        define(["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./has"], function (e, j, i) {
            function l(a, k, c, g, e) {
                if (g = k.match(/(.*):(.*)/))return k = g[2], g = g[1], b.selector(g, k).call(e, a, c);
                i("touch") && (f.test(k) && (c = y(c)), !i("event-orientationchange") &&
                    "orientationchange" == k && (k = "resize", a = window, c = y(c)));
                m && (c = m(c));
                if (a.addEventListener) {
                    var h = k in d, p = h ? d[k] : k;
                    a.addEventListener(p, c, h);
                    return{remove: function () {
                        a.removeEventListener(p, c, h)
                    }}
                }
                if (q && a.attachEvent)return q(a, "on" + k, c);
                throw Error("Target must be an event emitter");
            }

            function c() {
                this.cancelable = !1
            }

            function g() {
                this.bubbles = !1
            }

            var h = window.ScriptEngineMajorVersion;
            i.add("jscript", h && h() + ScriptEngineMinorVersion() / 10);
            i.add("event-orientationchange", i("touch") && !i("android"));
            i.add("event-stopimmediatepropagation",
                window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation);
            var b = function (a, d, f, k) {
                return"function" == typeof a.on && "function" != typeof d ? a.on(d, f) : b.parse(a, d, f, l, k, this)
            };
            b.pausable = function (a, d, f, k) {
                var c, a = b(a, d, function () {
                    if (!c)return f.apply(this, arguments)
                }, k);
                a.pause = function () {
                    c = !0
                };
                a.resume = function () {
                    c = !1
                };
                return a
            };
            b.once = function (a, d, f) {
                var k = b(a, d, function () {
                    k.remove();
                    return f.apply(this, arguments)
                });
                return k
            };
            b.parse = function (a, b, d, f, k, c) {
                if (b.call)return b.call(c,
                    a, d);
                if (-1 < b.indexOf(",")) {
                    for (var b = b.split(/\s*,\s*/), m = [], g = 0, e; e = b[g++];)m.push(f(a, e, d, k, c));
                    m.remove = function () {
                        for (var a = 0; a < m.length; a++)m[a].remove()
                    };
                    return m
                }
                return f(a, b, d, k, c)
            };
            var f = /^touch/;
            b.selector = function (a, d, f) {
                return function (k, c) {
                    function m(b) {
                        for (g = g && g.matches ? g : j.query; !g.matches(b, a, k);)if (b == k || !1 === f || !(b = b.parentNode) || 1 != b.nodeType)return;
                        return b
                    }

                    var g = "function" == typeof a ? {matches: a} : this, e = d.bubble;
                    return e ? b(k, e(m), c) : b(k, d, function (a) {
                        var b = m(a.target);
                        return b &&
                            c.call(b, a)
                    })
                }
            };
            var a = [].slice, k = b.emit = function (b, d, f) {
                var k = a.call(arguments, 2), m = "on" + d;
                if ("parentNode"in b) {
                    var e = k[0] = {}, h;
                    for (h in f)e[h] = f[h];
                    e.preventDefault = c;
                    e.stopPropagation = g;
                    e.target = b;
                    e.type = d;
                    f = e
                }
                do b[m] && b[m].apply(b, k); while (f && f.bubbles && (b = b.parentNode));
                return f && f.cancelable && f
            }, d = {};
            if (!i("event-stopimmediatepropagation"))var p = function () {
                this.modified = this.immediatelyStopped = !0
            }, m = function (a) {
                return function (b) {
                    if (!b.immediatelyStopped)return b.stopImmediatePropagation = p, a.apply(this,
                        arguments)
                }
            };
            if (i("dom-addeventlistener")) {
                d = {focusin: "focus", focusout: "blur"};
                if (i("opera"))d.keydown = "keypress";
                b.emit = function (a, d, f) {
                    if (a.dispatchEvent && document.createEvent) {
                        var c = a.ownerDocument.createEvent("HTMLEvents");
                        c.initEvent(d, !!f.bubbles, !!f.cancelable);
                        for (var m in f)m in c || (c[m] = f[m]);
                        return a.dispatchEvent(c) && c
                    }
                    return k.apply(b, arguments)
                }
            } else {
                b._fixEvent = function (a, b) {
                    if (!a)a = (b && (b.ownerDocument || b.document || b).parentWindow || window).event;
                    if (!a)return a;
                    n && a.type == n.type && (a =
                        n);
                    if (!a.target) {
                        a.target = a.srcElement;
                        a.currentTarget = b || a.srcElement;
                        if ("mouseover" == a.type)a.relatedTarget = a.fromElement;
                        if ("mouseout" == a.type)a.relatedTarget = a.toElement;
                        if (!a.stopPropagation)a.stopPropagation = v, a.preventDefault = s;
                        switch (a.type) {
                            case "keypress":
                                var d = "charCode"in a ? a.charCode : a.keyCode;
                                10 == d ? (d = 0, a.keyCode = 13) : 13 == d || 27 == d ? d = 0 : 3 == d && (d = 99);
                                a.charCode = d;
                                d = a;
                                d.keyChar = d.charCode ? String.fromCharCode(d.charCode) : "";
                                d.charOrCode = d.keyChar || d.keyCode
                        }
                    }
                    return a
                };
                var n, o = function (a) {
                    this.handle =
                        a
                };
                o.prototype.remove = function () {
                    delete _dojoIEListeners_[this.handle]
                };
                var r = function (a) {
                    return function (d) {
                        var d = b._fixEvent(d, this), f = a.call(this, d);
                        d.modified && (n || setTimeout(function () {
                            n = null
                        }), n = d);
                        return f
                    }
                }, q = function (a, b, d) {
                    d = r(d);
                    if (((a.ownerDocument ? a.ownerDocument.parentWindow : a.parentWindow || a.window || window) != top || 5.8 > i("jscript")) && !i("config-_allow_leaks")) {
                        "undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []);
                        var f = a[b];
                        if (!f || !f.listeners) {
                            var k = f, f = Function("event", "var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
                            f.listeners = [];
                            a[b] = f;
                            f.global = this;
                            k && f.listeners.push(_dojoIEListeners_.push(k) - 1)
                        }
                        f.listeners.push(a = f.global._dojoIEListeners_.push(d) - 1);
                        return new o(a)
                    }
                    return e.after(a, b, d, !0)
                }, v = function () {
                    this.cancelBubble = !0
                }, s = b._preventDefault = function () {
                    this.bubbledKeyCode = this.keyCode;
                    if (this.ctrlKey)try {
                        this.keyCode = 0
                    } catch (a) {
                    }
                    this.defaultPrevented = !0;
                    this.returnValue = !1
                }
            }
            if (i("touch"))var u = function () {
            }, t = window.orientation, y = function (a) {
                return function (b) {
                    var d = b.corrected;
                    if (!d) {
                        var f = b.type;
                        try {
                            delete b.type
                        } catch (k) {
                        }
                        b.type ?
                            (u.prototype = b, d = new u, d.preventDefault = function () {
                                b.preventDefault()
                            }, d.stopPropagation = function () {
                                b.stopPropagation()
                            }) : (d = b, d.type = f);
                        b.corrected = d;
                        if ("resize" == f) {
                            if (t == window.orientation)return null;
                            t = window.orientation;
                            d.type = "orientationchange";
                            return a.call(this, d)
                        }
                        if (!("rotation"in d))d.rotation = 0, d.scale = 1;
                        var f = d.changedTouches[0], c;
                        for (c in f)delete d[c], d[c] = f[c]
                    }
                    return a.call(this, d)
                }
            };
            return b
        })
    }, "dojo/when": function () {
        define(["./Deferred", "./promise/Promise"], function (e, j) {
            return function (i, l, c, g) {
                var h = i && "function" === typeof i.then, b = h && i instanceof j;
                if (h) {
                    if (!b)h = new e(i.cancel), i.then(h.resolve, h.reject, h.progress), i = h.promise
                } else return l ? l(i) : (new e).resolve(i);
                return l || c || g ? i.then(l, c, g) : i
            }
        })
    }, "dojo/_base/json": function () {
        define(["./kernel", "../json"], function (e, j) {
            e.fromJson = function (e) {
                return eval("(" + e + ")")
            };
            e._escapeString = j.stringify;
            e.toJsonIndentStr = "\t";
            e.toJson = function (i, l) {
                return j.stringify(i, function (c, g) {
                        if (g) {
                            var e = g.__json__ || g.json;
                            if ("function" == typeof e)return e.call(g)
                        }
                        return g
                    },
                    l && e.toJsonIndentStr)
            };
            return e
        })
    }, "dojo/request/watch": function () {
        define("./util,../errors/RequestTimeoutError,../errors/CancelError,../_base/array,../_base/window,../has!host-browser?dom-addeventlistener?:../on:".split(","), function (e, j, i, l, c, g) {
            function h() {
                for (var k = +new Date, d = 0, c; d < a.length && (c = a[d]); d++) {
                    var m = c.response, g = m.options;
                    if (c.isCanceled && c.isCanceled() || c.isValid && !c.isValid(m))a.splice(d--, 1), b._onAction && b._onAction(); else if (c.isReady && c.isReady(m))a.splice(d--, 1), c.handleResponse(m),
                        b._onAction && b._onAction(); else if (c.startTime && c.startTime + (g.timeout || 0) < k)a.splice(d--, 1), c.cancel(new j("Timeout exceeded", m)), b._onAction && b._onAction()
                }
                b._onInFlight && b._onInFlight(c);
                a.length || (clearInterval(f), f = null)
            }

            function b(b) {
                if (b.response.options.timeout)b.startTime = +new Date;
                b.isFulfilled() || (a.push(b), f || (f = setInterval(h, 50)), b.response.options.sync && h())
            }

            var f = null, a = [];
            b.cancelAll = function () {
                try {
                    l.forEach(a, function (a) {
                        try {
                            a.cancel(new i("All requests canceled."))
                        } catch (b) {
                        }
                    })
                } catch (b) {
                }
            };
            c && g && c.doc.attachEvent && g(c.global, "unload", function () {
                b.cancelAll()
            });
            return b
        })
    }, "dojo/request/util": function () {
        define("exports,../errors/RequestError,../errors/CancelError,../Deferred,../io-query,../_base/array,../_base/lang".split(","), function (e, j, i, l, c, g, h) {
            function b(a) {
                return f(a)
            }

            e.deepCopy = function (a, b) {
                for (var d in b) {
                    var f = a[d], c = b[d];
                    f !== c && (f && "object" === typeof f && c && "object" === typeof c ? e.deepCopy(f, c) : a[d] = c)
                }
                return a
            };
            e.deepCreate = function (a, b) {
                var b = b || {}, d = h.delegate(a), f, c;
                for (f in a)(c =
                    a[f]) && "object" === typeof c && (d[f] = e.deepCreate(c, b[f]));
                return e.deepCopy(d, b)
            };
            var f = Object.freeze || function (a) {
                return a
            };
            e.deferred = function (a, c, d, g, m, n) {
                var o = new l(function (b) {
                    c && c(o, a);
                    return!b || !(b instanceof j) && !(b instanceof i) ? new i("Request canceled", a) : b
                });
                o.response = a;
                o.isValid = d;
                o.isReady = g;
                o.handleResponse = m;
                d = o.then(b).otherwise(function (b) {
                    b.response = a;
                    throw b;
                });
                e.notify && d.then(h.hitch(e.notify, "emit", "load"), h.hitch(e.notify, "emit", "error"));
                g = d.then(function (a) {
                    return a.data ||
                        a.text
                });
                d = f(h.delegate(g, {response: d}));
                n && o.then(function (a) {
                    n.call(o, a)
                }, function (b) {
                    n.call(o, a, b)
                });
                o.promise = d;
                o.then = d.then;
                return o
            };
            e.addCommonMethods = function (a, b) {
                g.forEach(b || ["GET", "POST", "PUT", "DELETE"], function (b) {
                    a[("DELETE" === b ? "DEL" : b).toLowerCase()] = function (f, c) {
                        c = h.delegate(c || {});
                        c.method = b;
                        return a(f, c)
                    }
                })
            };
            e.parseArgs = function (a, b, d) {
                var f = b.data, m = b.query;
                if (f && !d && "object" === typeof f)b.data = c.objectToQuery(f);
                m ? ("object" === typeof m && (m = c.objectToQuery(m)), b.preventCache &&
                    (m += (m ? "&" : "") + "request.preventCache=" + +new Date)) : b.preventCache && (m = "request.preventCache=" + +new Date);
                a && m && (a += (~a.indexOf("?") ? "&" : "?") + m);
                return{url: a, options: b, getHeader: function () {
                    return null
                }}
            };
            e.checkStatus = function (a) {
                a = a || 0;
                return 200 <= a && 300 > a || 304 === a || 1223 === a || !a
            }
        })
    }, "dojo/errors/RequestError": function () {
        define(["./create"], function (e) {
            return e("RequestError", function (e, i) {
                this.response = i
            })
        })
    }, "dojo/errors/RequestTimeoutError": function () {
        define(["./create", "./RequestError"], function (e, j) {
            return e("RequestTimeoutError", null, j, {dojoType: "timeout"})
        })
    }, "dojo/request/xhr": function () {
        define(["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function (e, j, i, l, c) {
            function g(a, b) {
                var d = a.xhr;
                a.status = a.xhr.status;
                a.text = d.responseText;
                if ("xml" === a.options.handleAs)a.data = d.responseXML;
                if (!b)try {
                    i(a)
                } catch (f) {
                    b = f
                }
                b ? this.reject(b) : l.checkStatus(d.status) ? this.resolve(a) : (b = new e("Unable to load " + a.url + " status: " + d.status, a), this.reject(b))
            }

            function h(m, n, i) {
                var v = l.parseArgs(m,
                    l.deepCreate(p, n), c("native-formdata") && n && n.data && n.data instanceof FormData), m = v.url, n = v.options, s, u = l.deferred(v, k, b, f, g, function () {
                    s && s()
                }), t = v.xhr = h._create();
                if (!t)return u.cancel(new e("XHR was not created")), i ? u : u.promise;
                v.getHeader = function (a) {
                    return this.xhr.getResponseHeader(a)
                };
                a && (s = a(t, u, v));
                var y = n.data, z = !n.sync, I = n.method;
                try {
                    t.open(I, m, z, n.user || d, n.password || d);
                    if (n.withCredentials)t.withCredentials = n.withCredentials;
                    var J = n.headers, N;
                    if (J)for (var E in J)"content-type" === E.toLowerCase() ?
                        N = J[E] : J[E] && t.setRequestHeader(E, J[E]);
                    N && !1 !== N && t.setRequestHeader("Content-Type", N);
                    (!J || !("X-Requested-With"in J)) && t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    l.notify && l.notify.emit("send", v, u.promise.cancel);
                    t.send(y)
                } catch (S) {
                    u.reject(S)
                }
                j(u);
                t = null;
                return i ? u : u.promise
            }

            c.add("native-xhr", function () {
                return"undefined" !== typeof XMLHttpRequest
            });
            c.add("dojo-force-activex-xhr", function () {
                return c("activex") && !document.addEventListener && "file:" === window.location.protocol
            });
            c.add("native-xhr2",
                function () {
                    if (c("native-xhr")) {
                        var a = new XMLHttpRequest;
                        return"undefined" !== typeof a.addEventListener && ("undefined" === typeof opera || "undefined" !== typeof a.upload)
                    }
                });
            c.add("native-formdata", function () {
                return"function" === typeof FormData
            });
            var b, f, a, k;
            c("native-xhr2") ? (b = function () {
                return!this.isFulfilled()
            }, k = function (a, b) {
                b.xhr.abort()
            }, a = function (a, b, d) {
                function f() {
                    b.handleResponse(d)
                }

                function c(a) {
                    a = new e("Unable to load " + d.url + " status: " + a.target.status, d);
                    b.handleResponse(d, a)
                }

                function k(a) {
                    if (a.lengthComputable)d.loaded =
                        a.loaded, d.total = a.total, b.progress(d)
                }

                a.addEventListener("load", f, !1);
                a.addEventListener("error", c, !1);
                a.addEventListener("progress", k, !1);
                return function () {
                    a.removeEventListener("load", f, !1);
                    a.removeEventListener("error", c, !1);
                    a.removeEventListener("progress", k, !1)
                }
            }) : (b = function (a) {
                return a.xhr.readyState
            }, f = function (a) {
                return 4 === a.xhr.readyState
            }, k = function (a, b) {
                var d = b.xhr, f = typeof d.abort;
                ("function" === f || "object" === f || "unknown" === f) && d.abort()
            });
            var d, p = {data: null, query: null, sync: !1, method: "GET",
                headers: {"Content-Type": "application/x-www-form-urlencoded"}};
            h._create = function () {
                throw Error("XMLHTTP not available");
            };
            if (c("native-xhr") && !c("dojo-force-activex-xhr"))h._create = function () {
                return new XMLHttpRequest
            }; else if (c("activex"))try {
                new ActiveXObject("Msxml2.XMLHTTP"), h._create = function () {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }
            } catch (m) {
                try {
                    new ActiveXObject("Microsoft.XMLHTTP"), h._create = function () {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }
                } catch (n) {
                }
            }
            l.addCommonMethods(h);
            return h
        })
    },
    "dojo/request/handlers": function () {
        define(["../json", "../_base/kernel", "../_base/array", "../has"], function (e, j, i, l) {
            function c(f) {
                var a = b[f.options.handleAs];
                f.data = a ? a(f) : f.data || f.text;
                return f
            }

            l.add("activex", "undefined" !== typeof ActiveXObject);
            var g;
            if (l("activex")) {
                var h = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"];
                g = function (b) {
                    var a = b.data;
                    if (!a || !a.documentElement) {
                        var c = b.text;
                        i.some(h, function (b) {
                            try {
                                var f = new ActiveXObject(b);
                                f.async = !1;
                                f.loadXML(c);
                                a = f
                            } catch (m) {
                                return!1
                            }
                            return!0
                        })
                    }
                    return a
                }
            }
            var b = {javascript: function (b) {
                return j.eval(b.text || "")
            }, json: function (b) {
                return e.parse(b.text || null)
            }, xml: g};
            c.register = function (f, a) {
                b[f] = a
            };
            return c
        })
    }, "dojo/main": function () {
        define("./_base/kernel,./has,require,./sniff,./_base/lang,./_base/array,./_base/config,./ready,./_base/declare,./_base/connect,./_base/Deferred,./_base/json,./_base/Color,./has!dojo-firebug?./_firebug/firebug,./_base/browser,require".split(","), function (e, j, i, l, c, g, h, b) {
            h.isDebug && i(["./_firebug/firebug"]);
            var f = h.require;
            f && (f = g.map(c.isArray(f) ? f : [f], function (a) {
                return a.replace(/\./g, "/")
            }), e.isAsync ? i(f) : b(1, function () {
                i(f)
            }));
            return e
        })
    }, "dojo/ready": function () {
        define(["./_base/kernel", "./has", "require", "./domReady", "./_base/lang"], function (e, j, i, l, c) {
            var g = 0, h, b = [], f = 0, a = function () {
                if (g && !f && b.length) {
                    f = 1;
                    var d = b.shift();
                    try {
                        d()
                    } finally {
                        f = 0
                    }
                    f = 0;
                    b.length && h(a)
                }
            };
            i.on("idle", a);
            h = function () {
                i.idle() && a()
            };
            var j = e.ready = e.addOnLoad = function (a, f, k) {
                var g =
                    c._toArray(arguments);
                "number" != typeof a ? (k = f, f = a, a = 1E3) : g.shift();
                k = k ? c.hitch.apply(e, g) : function () {
                    f()
                };
                k.priority = a;
                for (g = 0; g < b.length && a >= b[g].priority; g++);
                b.splice(g, 0, k);
                h()
            }, k = e.config.addOnLoad;
            if (k)j[c.isArray(k) ? "apply" : "call"](e, k);
            l(function () {
                g = 1;
                e._postLoad = e.config.afterOnLoad = !0;
                b.length && h(a)
            });
            return j
        })
    }, "dojo/domReady": function () {
        define(["./has"], function (e) {
            function j(a) {
                h ? a(l) : b.push(a)
            }

            var i = this, l = document, c = {loaded: 1, complete: 1}, g = "string" != typeof l.readyState, h = !!c[l.readyState];
            if (g)l.readyState = "loading";
            if (!h) {
                var b = [], f = [], a = function (a) {
                    a = a || i.event;
                    if (!(h || "readystatechange" == a.type && !c[l.readyState])) {
                        h = 1;
                        if (g)l.readyState = "complete";
                        for (; b.length;)b.shift()(l)
                    }
                }, k = function (d, f) {
                    d.addEventListener(f, a, !1);
                    b.push(function () {
                        d.removeEventListener(f, a, !1)
                    })
                };
                if (!e("dom-addeventlistener")) {
                    var k = function (d, f) {
                        f = "on" + f;
                        d.attachEvent(f, a);
                        b.push(function () {
                            d.detachEvent(f, a)
                        })
                    }, d = l.createElement("div");
                    try {
                        d.doScroll && null === i.frameElement && f.push(function () {
                            try {
                                return d.doScroll("left"),
                                    1
                            } catch (a) {
                            }
                        })
                    } catch (p) {
                    }
                }
                k(l, "DOMContentLoaded");
                k(i, "load");
                "onreadystatechange"in l ? k(l, "readystatechange") : g || f.push(function () {
                    return c[l.readyState]
                });
                if (f.length) {
                    var m = function () {
                        if (!h) {
                            for (var b = f.length; b--;)if (f[b]()) {
                                a("poller");
                                return
                            }
                            setTimeout(m, 30)
                        }
                    };
                    m()
                }
            }
            j.load = function (a, b, d) {
                j(d)
            };
            return j
        })
    }, "dojo/_base/declare": function () {
        define(["./kernel", "../has", "./lang"], function (e, j, i) {
            function l(a, b) {
                throw Error("declare" + (b ? " " + b : "") + ": " + a);
            }

            function c(a, b, d) {
                var f, c, k, m, g, e, h, i = this._inherited =
                    this._inherited || {};
                "string" == typeof a && (f = a, a = b, b = d);
                d = 0;
                m = a.callee;
                (f = f || m.nom) || l("can't deduce a name to call inherited()", this.declaredClass);
                g = this.constructor._meta;
                k = g.bases;
                h = i.p;
                if (f != z) {
                    if (i.c !== m && (h = 0, e = k[0], g = e._meta, g.hidden[f] !== m)) {
                        (c = g.chains) && "string" == typeof c[f] && l("calling chained method with inherited: " + f, this.declaredClass);
                        do if (g = e._meta, c = e.prototype, g && (c[f] === m && c.hasOwnProperty(f) || g.hidden[f] === m))break; while (e = k[++h]);
                        h = e ? h : -1
                    }
                    if (e = k[++h])if (c = e.prototype, e._meta &&
                        c.hasOwnProperty(f))d = c[f]; else {
                        m = s[f];
                        do if (c = e.prototype, (d = c[f]) && (e._meta ? c.hasOwnProperty(f) : d !== m))break; while (e = k[++h])
                    }
                    d = e && d || s[f]
                } else {
                    if (i.c !== m && (h = 0, (g = k[0]._meta) && g.ctor !== m)) {
                        c = g.chains;
                        for ((!c || "manual" !== c.constructor) && l("calling chained constructor with inherited", this.declaredClass); (e = k[++h]) && !((g = e._meta) && g.ctor === m););
                        h = e ? h : -1
                    }
                    for (; (e = k[++h]) && !(d = (g = e._meta) ? g.ctor : e););
                    d = e && d
                }
                i.c = d;
                i.p = h;
                if (d)return!0 === b ? d : d.apply(this, b || a)
            }

            function g(a, b) {
                return"string" == typeof a ? this.__inherited(a,
                    b, !0) : this.__inherited(a, !0)
            }

            function h(a, b, d) {
                var f = this.getInherited(a, b);
                if (f)return f.apply(this, d || b || a)
            }

            function b(a) {
                for (var b = this.constructor._meta.bases, d = 0, f = b.length; d < f; ++d)if (b[d] === a)return!0;
                return this instanceof a
            }

            function f(a, b) {
                for (var d in b)d != z && b.hasOwnProperty(d) && (a[d] = b[d]);
                if (j("bug-for-in-skips-shadowed"))for (var f = i._extraNames, c = f.length; c;)d = f[--c], d != z && b.hasOwnProperty(d) && (a[d] = b[d])
            }

            function a(a) {
                q.safeMixin(this.prototype, a);
                return this
            }

            function k(a) {
                return q([this].concat(a))
            }

            function d(a, b) {
                return function () {
                    var w;
                    var d = arguments, f = d, c = d[0], k, m;
                    m = a.length;
                    var g;
                    if (!(this instanceof d.callee))return r(d);
                    if (b && (c && c.preamble || this.preamble)) {
                        g = Array(a.length);
                        g[0] = d;
                        for (k = 0; ;) {
                            if (c = d[0])(c = c.preamble) && (d = c.apply(this, d) || d);
                            c = a[k].prototype;
                            (c = c.hasOwnProperty("preamble") && c.preamble) && (d = c.apply(this, d) || d);
                            if (++k == m)break;
                            g[k] = d
                        }
                    }
                    for (k = m - 1; 0 <= k; --k)c = a[k], (w = (m = c._meta) ? m.ctor : c, c = w) && c.apply(this, g ? g[k] : d);
                    (c = this.postscript) && c.apply(this, f)
                }
            }

            function p(a, b) {
                return function () {
                    var d =
                        arguments, f = d, c = d[0];
                    if (!(this instanceof d.callee))return r(d);
                    if (b) {
                        if (c)(c = c.preamble) && (f = c.apply(this, f) || f);
                        (c = this.preamble) && c.apply(this, f)
                    }
                    a && a.apply(this, d);
                    (c = this.postscript) && c.apply(this, d)
                }
            }

            function m(a) {
                return function () {
                    var w;
                    var b = arguments, d = 0, f, c;
                    if (!(this instanceof b.callee))return r(b);
                    for (; f = a[d]; ++d)if (w = (c = f._meta) ? c.ctor : f, f = w) {
                        f.apply(this, b);
                        break
                    }
                    (f = this.postscript) && f.apply(this, b)
                }
            }

            function n(a, b, d) {
                return function () {
                    var f, c, k = 0, m = 1;
                    d && (k = b.length - 1, m = -1);
                    for (; f = b[k]; k +=
                        m)c = f._meta, (f = (c ? c.hidden : f.prototype)[a]) && f.apply(this, arguments)
                }
            }

            function o(a) {
                t.prototype = a.prototype;
                a = new t;
                t.prototype = null;
                return a
            }

            function r(a) {
                var b = a.callee, d = o(b);
                b.apply(d, a);
                return d
            }

            function q(e, h, j) {
                "string" != typeof e && (j = h, h = e, e = "");
                var j = j || {}, r, t, B, A, w, x, K, H = 1, C = h;
                if ("[object Array]" == u.call(h)) {
                    H = e;
                    B = [];
                    A = [
                        {cls: 0, refs: []}
                    ];
                    x = {};
                    for (var F = 1, O = h.length, D = 0, L, T, G, M; D < O; ++D) {
                        (L = h[D]) ? "[object Function]" != u.call(L) && l("mixin #" + D + " is not a callable constructor.", H) : l("mixin #" +
                            D + " is unknown. Did you use dojo.require to pull it in?", H);
                        T = L._meta ? L._meta.bases : [L];
                        G = 0;
                        for (L = T.length - 1; 0 <= L; --L) {
                            M = T[L].prototype;
                            if (!M.hasOwnProperty("declaredClass"))M.declaredClass = "uniqName_" + y++;
                            M = M.declaredClass;
                            x.hasOwnProperty(M) || (x[M] = {count: 0, refs: [], cls: T[L]}, ++F);
                            M = x[M];
                            G && G !== M && (M.refs.push(G), ++G.count);
                            G = M
                        }
                        ++G.count;
                        A[0].refs.push(G)
                    }
                    for (; A.length;) {
                        G = A.pop();
                        B.push(G.cls);
                        for (--F; t = G.refs, 1 == t.length;) {
                            G = t[0];
                            if (!G || --G.count) {
                                G = 0;
                                break
                            }
                            B.push(G.cls);
                            --F
                        }
                        if (G)for (D = 0, O = t.length; D <
                            O; ++D)G = t[D], --G.count || A.push(G)
                    }
                    F && l("can't build consistent linearization", H);
                    L = h[0];
                    B[0] = L ? L._meta && L === B[B.length - L._meta.bases.length] ? L._meta.bases.length : 1 : 0;
                    x = B;
                    B = x[0];
                    H = x.length - B;
                    h = x[H]
                } else x = [0], h ? "[object Function]" == u.call(h) ? (B = h._meta, x = x.concat(B ? B.bases : h)) : l("base class is not a callable constructor.", e) : null !== h && l("unknown base class. Did you use dojo.require to pull it in?", e);
                if (h)for (t = H - 1; ; --t) {
                    r = o(h);
                    if (!t)break;
                    B = x[t];
                    (B._meta ? f : v)(r, B.prototype);
                    A = new Function;
                    A.superclass =
                        h;
                    A.prototype = r;
                    h = r.constructor = A
                } else r = {};
                q.safeMixin(r, j);
                B = j.constructor;
                if (B !== s.constructor)B.nom = z, r.constructor = B;
                for (t = H - 1; t; --t)(B = x[t]._meta) && B.chains && (K = v(K || {}, B.chains));
                r["-chains-"] && (K = v(K || {}, r["-chains-"]));
                B = !K || !K.hasOwnProperty(z);
                x[0] = A = K && "manual" === K.constructor ? m(x) : 1 == x.length ? p(j.constructor, B) : d(x, B);
                A._meta = {bases: x, hidden: j, chains: K, parents: C, ctor: j.constructor};
                A.superclass = h && h.prototype;
                A.extend = a;
                A.createSubclass = k;
                A.prototype = r;
                r.constructor = A;
                r.getInherited =
                    g;
                r.isInstanceOf = b;
                r.inherited = I;
                r.__inherited = c;
                if (e)r.declaredClass = e, i.setObject(e, A);
                if (K)for (w in K)if (r[w] && "string" == typeof K[w] && w != z)B = r[w] = n(w, x, "after" === K[w]), B.nom = w;
                return A
            }

            var v = i.mixin, s = Object.prototype, u = s.toString, t = new Function, y = 0, z = "constructor", I = e.config.isDebug ? h : c;
            e.safeMixin = q.safeMixin = function (a, b) {
                var d, f;
                for (d in b)if (f = b[d], (f !== s[d] || !(d in s)) && d != z) {
                    if ("[object Function]" == u.call(f))f.nom = d;
                    a[d] = f
                }
                if (j("bug-for-in-skips-shadowed"))for (var c = i._extraNames, k = c.length; k;)if (d =
                    c[--k], f = b[d], (f !== s[d] || !(d in s)) && d != z) {
                    if ("[object Function]" == u.call(f))f.nom = d;
                    a[d] = f
                }
                return a
            };
            return e.declare = q
        })
    }, "dojo/_base/connect": function () {
        define("./kernel,../on,../topic,../aspect,./event,../mouse,./sniff,./lang,../keys".split(","), function (e, j, i, l, c, g, h, b) {
            function f(a, d, f, c, k) {
                c = b.hitch(f, c);
                if (!a || !a.addEventListener && !a.attachEvent)return l.after(a || e.global, d, c, !0);
                "string" == typeof d && "on" == d.substring(0, 2) && (d = d.substring(2));
                if (!a)a = e.global;
                if (!k)switch (d) {
                    case "keypress":
                        d =
                            m;
                        break;
                    case "mouseenter":
                        d = g.enter;
                        break;
                    case "mouseleave":
                        d = g.leave
                }
                return j(a, d, c, k)
            }

            function a(a) {
                a.keyChar = a.charCode ? String.fromCharCode(a.charCode) : "";
                a.charOrCode = a.keyChar || a.keyCode
            }

            h.add("events-keypress-typed", function () {
                var a = {charCode: 0};
                try {
                    a = document.createEvent("KeyboardEvent"), (a.initKeyboardEvent || a.initKeyEvent).call(a, "keypress", !0, !0, null, !1, !1, !1, !1, 9, 3)
                } catch (b) {
                }
                return 0 == a.charCode && !h("opera")
            });
            var k = {106: 42, 111: 47, 186: 59, 187: 43, 188: 44, 189: 45, 190: 46, 191: 47, 192: 96, 219: 91,
                220: 92, 221: 93, 222: 39, 229: 113}, d = h("mac") ? "metaKey" : "ctrlKey", p = function (d, f) {
                var c = b.mixin({}, d, f);
                a(c);
                c.preventDefault = function () {
                    d.preventDefault()
                };
                c.stopPropagation = function () {
                    d.stopPropagation()
                };
                return c
            }, m;
            m = h("events-keypress-typed") ? function (a, b) {
                var d = j(a, "keydown", function (a) {
                    var d = a.keyCode, f = 13 != d && 32 != d && (27 != d || !h("ie")) && (48 > d || 90 < d) && (96 > d || 111 < d) && (186 > d || 192 < d) && (219 > d || 222 < d) && 229 != d;
                    if (f || a.ctrlKey) {
                        f = f ? 0 : d;
                        if (a.ctrlKey) {
                            if (3 == d || 13 == d)return b.call(a.currentTarget, a);
                            f = 95 < f &&
                                106 > f ? f - 48 : !a.shiftKey && 65 <= f && 90 >= f ? f + 32 : k[f] || f
                        }
                        d = p(a, {type: "keypress", faux: !0, charCode: f});
                        b.call(a.currentTarget, d);
                        if (h("ie"))try {
                            a.keyCode = d.keyCode
                        } catch (c) {
                        }
                    }
                }), f = j(a, "keypress", function (a) {
                    var d = a.charCode, a = p(a, {charCode: 32 <= d ? d : 0, faux: !0});
                    return b.call(this, a)
                });
                return{remove: function () {
                    d.remove();
                    f.remove()
                }}
            } : h("opera") ? function (a, b) {
                return j(a, "keypress", function (a) {
                    var d = a.which;
                    3 == d && (d = 99);
                    d = 32 > d && !a.shiftKey ? 0 : d;
                    a.ctrlKey && !a.shiftKey && 65 <= d && 90 >= d && (d += 32);
                    return b.call(this, p(a,
                        {charCode: d}))
                })
            } : function (b, d) {
                return j(b, "keypress", function (b) {
                    a(b);
                    return d.call(this, b)
                })
            };
            var n = {_keypress: m, connect: function (a, b, d, c, k) {
                var m = arguments, g = [], e = 0;
                g.push("string" == typeof m[0] ? null : m[e++], m[e++]);
                var h = m[e + 1];
                g.push("string" == typeof h || "function" == typeof h ? m[e++] : null, m[e++]);
                for (h = m.length; e < h; e++)g.push(m[e]);
                return f.apply(this, g)
            }, disconnect: function (a) {
                a && a.remove()
            }, subscribe: function (a, d, f) {
                return i.subscribe(a, b.hitch(d, f))
            }, publish: function (a, b) {
                return i.publish.apply(i,
                    [a].concat(b))
            }, connectPublisher: function (a, b, d) {
                var f = function () {
                    n.publish(a, arguments)
                };
                return d ? n.connect(b, d, f) : n.connect(b, f)
            }, isCopyKey: function (a) {
                return a[d]
            }};
            n.unsubscribe = n.disconnect;
            b.mixin(e, n);
            return n
        })
    }, "dojo/topic": function () {
        define(["./Evented"], function (e) {
            var j = new e;
            return{publish: function (e, l) {
                return j.emit.apply(j, arguments)
            }, subscribe: function (e, l) {
                return j.on.apply(j, arguments)
            }}
        })
    }, "dojo/_base/event": function () {
        define(["./kernel", "../on", "../has", "../dom-geometry"], function (e, j, i, l) {
            if (j._fixEvent) {
                var c = j._fixEvent;
                j._fixEvent = function (g, b) {
                    (g = c(g, b)) && l.normalizeEvent(g);
                    return g
                }
            }
            var g = {fix: function (c, b) {
                return j._fixEvent ? j._fixEvent(c, b) : c
            }, stop: function (c) {
                i("dom-addeventlistener") || c && c.preventDefault ? (c.preventDefault(), c.stopPropagation()) : (c = c || window.event, c.cancelBubble = !0, j._preventDefault.call(c))
            }};
            e.fixEvent = g.fix;
            e.stopEvent = g.stop;
            return g
        })
    }, "dojo/dom-geometry": function () {
        define(["./sniff", "./_base/window", "./dom", "./dom-style"], function (e, j, i, l) {
            function c(a, b, d, f, c, g) {
                g = g || "px";
                a = a.style;
                if (!isNaN(b))a.left = b + g;
                if (!isNaN(d))a.top = d + g;
                if (0 <= f)a.width = f + g;
                if (0 <= c)a.height = c + g
            }

            function g(a) {
                return"button" == a.tagName.toLowerCase() || "input" == a.tagName.toLowerCase() && "button" == (a.getAttribute("type") || "").toLowerCase()
            }

            function h(a) {
                return"border-box" == b.boxModel || "table" == a.tagName.toLowerCase() || g(a)
            }

            var b = {boxModel: "content-box"};
            if (e("ie"))b.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box";
            b.getPadExtents = function (a, b) {
                var a = i.byId(a),
                    d = b || l.getComputedStyle(a), f = l.toPixelValue, c = f(a, d.paddingLeft), g = f(a, d.paddingTop), e = f(a, d.paddingRight), d = f(a, d.paddingBottom);
                return{l: c, t: g, r: e, b: d, w: c + e, h: g + d}
            };
            b.getBorderExtents = function (a, b) {
                var a = i.byId(a), d = l.toPixelValue, f = b || l.getComputedStyle(a), c = "none" != f.borderLeftStyle ? d(a, f.borderLeftWidth) : 0, g = "none" != f.borderTopStyle ? d(a, f.borderTopWidth) : 0, e = "none" != f.borderRightStyle ? d(a, f.borderRightWidth) : 0, d = "none" != f.borderBottomStyle ? d(a, f.borderBottomWidth) : 0;
                return{l: c, t: g, r: e, b: d, w: c +
                    e, h: g + d}
            };
            b.getPadBorderExtents = function (a, f) {
                var a = i.byId(a), d = f || l.getComputedStyle(a), c = b.getPadExtents(a, d), d = b.getBorderExtents(a, d);
                return{l: c.l + d.l, t: c.t + d.t, r: c.r + d.r, b: c.b + d.b, w: c.w + d.w, h: c.h + d.h}
            };
            b.getMarginExtents = function (a, b) {
                var a = i.byId(a), d = b || l.getComputedStyle(a), f = l.toPixelValue, c = f(a, d.marginLeft), g = f(a, d.marginTop), e = f(a, d.marginRight), d = f(a, d.marginBottom);
                return{l: c, t: g, r: e, b: d, w: c + e, h: g + d}
            };
            b.getMarginBox = function (a, f) {
                var a = i.byId(a), d = f || l.getComputedStyle(a), c = b.getMarginExtents(a,
                    d), m = a.offsetLeft - c.l, g = a.offsetTop - c.t, h = a.parentNode, j = l.toPixelValue;
                if (e("mozilla")) {
                    var q = parseFloat(d.left), d = parseFloat(d.top);
                    !isNaN(q) && !isNaN(d) ? (m = q, g = d) : h && h.style && (h = l.getComputedStyle(h), "visible" != h.overflow && (m += "none" != h.borderLeftStyle ? j(a, h.borderLeftWidth) : 0, g += "none" != h.borderTopStyle ? j(a, h.borderTopWidth) : 0))
                } else if ((e("opera") || 8 == e("ie") && !e("quirks")) && h)h = l.getComputedStyle(h), m -= "none" != h.borderLeftStyle ? j(a, h.borderLeftWidth) : 0, g -= "none" != h.borderTopStyle ? j(a, h.borderTopWidth) :
                    0;
                return{l: m, t: g, w: a.offsetWidth + c.w, h: a.offsetHeight + c.h}
            };
            b.getContentBox = function (a, f) {
                var a = i.byId(a), d = f || l.getComputedStyle(a), c = a.clientWidth, g = b.getPadExtents(a, d), h = b.getBorderExtents(a, d);
                c ? (d = a.clientHeight, h.w = h.h = 0) : (c = a.offsetWidth, d = a.offsetHeight);
                e("opera") && (g.l += h.l, g.t += h.t);
                return{l: g.l, t: g.t, w: c - g.w - h.w, h: d - g.h - h.h}
            };
            b.setContentSize = function (a, f, d) {
                var a = i.byId(a), g = f.w, f = f.h;
                h(a) && (d = b.getPadBorderExtents(a, d), 0 <= g && (g += d.w), 0 <= f && (f += d.h));
                c(a, NaN, NaN, g, f)
            };
            var f = {l: 0, t: 0,
                w: 0, h: 0};
            b.setMarginBox = function (a, k, d) {
                var a = i.byId(a), p = d || l.getComputedStyle(a), d = k.w, m = k.h, n = h(a) ? f : b.getPadBorderExtents(a, p), p = b.getMarginExtents(a, p);
                if (e("webkit") && g(a)) {
                    var j = a.style;
                    if (0 <= d && !j.width)j.width = "4px";
                    if (0 <= m && !j.height)j.height = "4px"
                }
                0 <= d && (d = Math.max(d - n.w - p.w, 0));
                0 <= m && (m = Math.max(m - n.h - p.h, 0));
                c(a, k.l, k.t, d, m)
            };
            b.isBodyLtr = function (a) {
                a = a || j.doc;
                return"ltr" == (j.body(a).dir || a.documentElement.dir || "ltr").toLowerCase()
            };
            b.docScroll = function (a) {
                var a = a || j.doc, f = j.doc.parentWindow ||
                    j.doc.defaultView;
                return"pageXOffset"in f ? {x: f.pageXOffset, y: f.pageYOffset} : (f = e("quirks") ? j.body(a) : a.documentElement) && {x: b.fixIeBiDiScrollLeft(f.scrollLeft || 0, a), y: f.scrollTop || 0}
            };
            if (e("ie"))b.getIeDocumentElementOffset = function (a) {
                a = a || j.doc;
                a = a.documentElement;
                if (8 > e("ie")) {
                    var b = a.getBoundingClientRect(), d = b.left, b = b.top;
                    7 > e("ie") && (d += a.clientLeft, b += a.clientTop);
                    return{x: 0 > d ? 0 : d, y: 0 > b ? 0 : b}
                }
                return{x: 0, y: 0}
            };
            b.fixIeBiDiScrollLeft = function (a, f) {
                var f = f || j.doc, d = e("ie");
                if (d && !b.isBodyLtr(f)) {
                    var c =
                        e("quirks"), g = c ? j.body(f) : f.documentElement, h = j.global;
                    6 == d && !c && h.frameElement && g.scrollHeight > g.clientHeight && (a += g.clientLeft);
                    return 8 > d || c ? a + g.clientWidth - g.scrollWidth : -a
                }
                return a
            };
            b.position = function (a, f) {
                var a = i.byId(a), d = j.body(a.ownerDocument), c = a.getBoundingClientRect(), c = {x: c.left, y: c.top, w: c.right - c.left, h: c.bottom - c.top};
                if (e("ie")) {
                    var g = b.getIeDocumentElementOffset(a.ownerDocument);
                    c.x -= g.x + (e("quirks") ? d.clientLeft + d.offsetLeft : 0);
                    c.y -= g.y + (e("quirks") ? d.clientTop + d.offsetTop : 0)
                }
                f &&
                (d = b.docScroll(a.ownerDocument), c.x += d.x, c.y += d.y);
                return c
            };
            b.getMarginSize = function (a, f) {
                var a = i.byId(a), d = b.getMarginExtents(a, f || l.getComputedStyle(a)), c = a.getBoundingClientRect();
                return{w: c.right - c.left + d.w, h: c.bottom - c.top + d.h}
            };
            b.normalizeEvent = function (a) {
                if (!("layerX"in a))a.layerX = a.offsetX, a.layerY = a.offsetY;
                if (!e("dom-addeventlistener")) {
                    var f = a.target, f = f && f.ownerDocument || document, d = e("quirks") ? f.body : f.documentElement, c = b.getIeDocumentElementOffset(f);
                    a.pageX = a.clientX + b.fixIeBiDiScrollLeft(d.scrollLeft ||
                        0, f) - c.x;
                    a.pageY = a.clientY + (d.scrollTop || 0) - c.y
                }
            };
            return b
        })
    }, "dojo/dom-style": function () {
        define(["./sniff", "./dom"], function (e, j) {
            function i(b, d, f) {
                d = d.toLowerCase();
                if (e("ie")) {
                    if ("auto" == f) {
                        if ("height" == d)return b.offsetHeight;
                        if ("width" == d)return b.offsetWidth
                    }
                    if ("fontweight" == d)switch (f) {
                        case 700:
                            return"bold";
                        default:
                            return"normal"
                    }
                }
                d in a || (a[d] = k.test(d));
                return a[d] ? g(b, f) : f
            }

            var l, c = {};
            l = e("webkit") ? function (a) {
                var b;
                if (1 == a.nodeType) {
                    var d = a.ownerDocument.defaultView;
                    b = d.getComputedStyle(a,
                        null);
                    if (!b && a.style)a.style.display = "", b = d.getComputedStyle(a, null)
                }
                return b || {}
            } : e("ie") && (9 > e("ie") || e("quirks")) ? function (a) {
                return 1 == a.nodeType && a.currentStyle ? a.currentStyle : {}
            } : function (a) {
                return 1 == a.nodeType ? a.ownerDocument.defaultView.getComputedStyle(a, null) : {}
            };
            c.getComputedStyle = l;
            var g;
            g = e("ie") ? function (a, b) {
                if (!b)return 0;
                if ("medium" == b)return 4;
                if (b.slice && "px" == b.slice(-2))return parseFloat(b);
                var d = a.style, f = a.runtimeStyle, c = d.left, k = f.left;
                f.left = a.currentStyle.left;
                try {
                    d.left =
                        b, b = d.pixelLeft
                } catch (g) {
                    b = 0
                }
                d.left = c;
                f.left = k;
                return b
            } : function (a, b) {
                return parseFloat(b) || 0
            };
            c.toPixelValue = g;
            var h = function (a, b) {
                try {
                    return a.filters.item("DXImageTransform.Microsoft.Alpha")
                } catch (d) {
                    return b ? {} : null
                }
            }, b = 9 > e("ie") || e("ie") && e("quirks") ? function (a) {
                try {
                    return h(a).Opacity / 100
                } catch (b) {
                    return 1
                }
            } : function (a) {
                return l(a).opacity
            }, f = 9 > e("ie") || e("ie") && e("quirks") ? function (a, b) {
                var d = 100 * b, c = 1 == b;
                a.style.zoom = c ? "" : 1;
                if (h(a))h(a, 1).Opacity = d; else {
                    if (c)return b;
                    a.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity=" +
                        d + ")"
                }
                h(a, 1).Enabled = !c;
                if ("tr" == a.tagName.toLowerCase())for (d = a.firstChild; d; d = d.nextSibling)"td" == d.tagName.toLowerCase() && f(d, b);
                return b
            } : function (a, b) {
                return a.style.opacity = b
            }, a = {left: !0, top: !0}, k = /margin|padding|width|height|max|min|offset/, d = e("ie") ? "styleFloat" : "cssFloat", p = {cssFloat: d, styleFloat: d, "float": d};
            c.get = function (a, d) {
                var f = j.byId(a), k = arguments.length;
                if (2 == k && "opacity" == d)return b(f);
                var d = p[d] || d, g = c.getComputedStyle(f);
                return 1 == k ? g : i(f, d, g[d] || f.style[d])
            };
            c.set = function (a, b, d) {
                var k = j.byId(a), g = arguments.length, e = "opacity" == b, b = p[b] || b;
                if (3 == g)return e ? f(k, d) : k.style[b] = d;
                for (var h in b)c.set(a, h, b[h]);
                return c.getComputedStyle(k)
            };
            return c
        })
    }, "dojo/mouse": function () {
        define(["./_base/kernel", "./on", "./has", "./dom", "./_base/window"], function (e, j, i, l, c) {
            function g(c, b) {
                var f = function (a, f) {
                    return j(a, c, function (d) {
                        if (b)return b(d, f);
                        if (!l.isDescendant(d.relatedTarget, a))return f.call(this, d)
                    })
                };
                f.bubble = function (a) {
                    return g(c, function (b, d) {
                        var f = a(b.target), c = b.relatedTarget;
                        if (f && f != (c && 1 == c.nodeType && a(c)))return d.call(f, b)
                    })
                };
                return f
            }

            i.add("dom-quirks", c.doc && "BackCompat" == c.doc.compatMode);
            i.add("events-mouseenter", c.doc && "onmouseenter"in c.doc.createElement("div"));
            i.add("events-mousewheel", c.doc && "onmousewheel"in c.doc);
            c = i("dom-quirks") && i("ie") || !i("dom-addeventlistener") ? {LEFT: 1, MIDDLE: 4, RIGHT: 2, isButton: function (c, b) {
                return c.button & b
            }, isLeft: function (c) {
                return c.button & 1
            }, isMiddle: function (c) {
                return c.button & 4
            }, isRight: function (c) {
                return c.button & 2
            }} : {LEFT: 0,
                MIDDLE: 1, RIGHT: 2, isButton: function (c, b) {
                    return c.button == b
                }, isLeft: function (c) {
                    return 0 == c.button
                }, isMiddle: function (c) {
                    return 1 == c.button
                }, isRight: function (c) {
                    return 2 == c.button
                }};
            e.mouseButtons = c;
            e = i("events-mousewheel") ? "mousewheel" : function (c, b) {
                return j(c, "DOMMouseScroll", function (f) {
                    f.wheelDelta = -f.detail;
                    b.call(this, f)
                })
            };
            return{_eventHandler: g, enter: g("mouseover"), leave: g("mouseout"), wheel: e, isLeft: c.isLeft, isMiddle: c.isMiddle, isRight: c.isRight}
        })
    }, "dojo/keys": function () {
        define(["./_base/kernel",
            "./sniff"], function (e, j) {
            return e.keys = {BACKSPACE: 8, TAB: 9, CLEAR: 12, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, META: j("webkit") ? 91 : 224, PAUSE: 19, CAPS_LOCK: 20, ESCAPE: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT_ARROW: 37, UP_ARROW: 38, RIGHT_ARROW: 39, DOWN_ARROW: 40, INSERT: 45, DELETE: 46, HELP: 47, LEFT_WINDOW: 91, RIGHT_WINDOW: 92, SELECT: 93, NUMPAD_0: 96, NUMPAD_1: 97, NUMPAD_2: 98, NUMPAD_3: 99, NUMPAD_4: 100, NUMPAD_5: 101, NUMPAD_6: 102, NUMPAD_7: 103, NUMPAD_8: 104, NUMPAD_9: 105, NUMPAD_MULTIPLY: 106, NUMPAD_PLUS: 107, NUMPAD_ENTER: 108,
                NUMPAD_MINUS: 109, NUMPAD_PERIOD: 110, NUMPAD_DIVIDE: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, F13: 124, F14: 125, F15: 126, NUM_LOCK: 144, SCROLL_LOCK: 145, UP_DPAD: 175, DOWN_DPAD: 176, LEFT_DPAD: 177, RIGHT_DPAD: 178, copyKey: j("mac") && !j("air") ? j("safari") ? 91 : 224 : 17}
        })
    }, "dojo/_base/Color": function () {
        define(["./kernel", "./lang", "./array", "./config"], function (e, j, i, l) {
            var c = e.Color = function (c) {
                c && this.setColor(c)
            };
            c.named = {black: [0, 0, 0], silver: [192, 192, 192], gray: [128,
                128, 128], white: [255, 255, 255], maroon: [128, 0, 0], red: [255, 0, 0], purple: [128, 0, 128], fuchsia: [255, 0, 255], green: [0, 128, 0], lime: [0, 255, 0], olive: [128, 128, 0], yellow: [255, 255, 0], navy: [0, 0, 128], blue: [0, 0, 255], teal: [0, 128, 128], aqua: [0, 255, 255], transparent: l.transparentColor || [0, 0, 0, 0]};
            j.extend(c, {r: 255, g: 255, b: 255, a: 1, _set: function (c, e, b, f) {
                this.r = c;
                this.g = e;
                this.b = b;
                this.a = f
            }, setColor: function (g) {
                j.isString(g) ? c.fromString(g, this) : j.isArray(g) ? c.fromArray(g, this) : (this._set(g.r, g.g, g.b, g.a), g instanceof c ||
                    this.sanitize());
                return this
            }, sanitize: function () {
                return this
            }, toRgb: function () {
                return[this.r, this.g, this.b]
            }, toRgba: function () {
                return[this.r, this.g, this.b, this.a]
            }, toHex: function () {
                return"#" + i.map(["r", "g", "b"],function (c) {
                    c = this[c].toString(16);
                    return 2 > c.length ? "0" + c : c
                }, this).join("")
            }, toCss: function (c) {
                var e = this.r + ", " + this.g + ", " + this.b;
                return(c ? "rgba(" + e + ", " + this.a : "rgb(" + e) + ")"
            }, toString: function () {
                return this.toCss(!0)
            }});
            c.blendColors = e.blendColors = function (g, e, b, f) {
                var a = f || new c;
                i.forEach(["r",
                    "g", "b", "a"], function (f) {
                    a[f] = g[f] + (e[f] - g[f]) * b;
                    "a" != f && (a[f] = Math.round(a[f]))
                });
                return a.sanitize()
            };
            c.fromRgb = e.colorFromRgb = function (g, e) {
                var b = g.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
                return b && c.fromArray(b[1].split(/\s*,\s*/), e)
            };
            c.fromHex = e.colorFromHex = function (g, e) {
                var b = e || new c, f = 4 == g.length ? 4 : 8, a = (1 << f) - 1, g = Number("0x" + g.substr(1));
                if (isNaN(g))return null;
                i.forEach(["b", "g", "r"], function (c) {
                    var d = g & a;
                    g >>= f;
                    b[c] = 4 == f ? 17 * d : d
                });
                b.a = 1;
                return b
            };
            c.fromArray = e.colorFromArray = function (g, e) {
                var b = e || new c;
                b._set(Number(g[0]), Number(g[1]), Number(g[2]), Number(g[3]));
                if (isNaN(b.a))b.a = 1;
                return b.sanitize()
            };
            c.fromString = e.colorFromString = function (g, e) {
                var b = c.named[g];
                return b && c.fromArray(b, e) || c.fromRgb(g, e) || c.fromHex(g, e)
            };
            return c
        })
    }, "dojo/_base/browser": function () {
        require.has && require.has.add("config-selectorEngine", "acme");
        define("../ready,./kernel,./connect,./unload,./window,./event,./html,./NodeList,../query,./xhr,./fx".split(","), function (e) {
            return e
        })
    }, "dojo/_base/unload": function () {
        define(["./kernel",
            "./lang", "../on"], function (e, j, i) {
            var l = window, c = {addOnWindowUnload: function (c, h) {
                if (!e.windowUnloaded)i(l, "unload", e.windowUnloaded = function () {
                });
                i(l, "unload", j.hitch(c, h))
            }, addOnUnload: function (c, e) {
                i(l, "beforeunload", j.hitch(c, e))
            }};
            e.addOnWindowUnload = c.addOnWindowUnload;
            e.addOnUnload = c.addOnUnload;
            return c
        })
    }, "dojo/_base/html": function () {
        define("./kernel,../dom,../dom-style,../dom-attr,../dom-prop,../dom-class,../dom-construct,../dom-geometry".split(","), function (e, j, i, l, c, g, h, b) {
            e.byId = j.byId;
            e.isDescendant = j.isDescendant;
            e.setSelectable = j.setSelectable;
            e.getAttr = l.get;
            e.setAttr = l.set;
            e.hasAttr = l.has;
            e.removeAttr = l.remove;
            e.getNodeProp = l.getNodeProp;
            e.attr = function (b, a, c) {
                return 2 == arguments.length ? l["string" == typeof a ? "get" : "set"](b, a) : l.set(b, a, c)
            };
            e.hasClass = g.contains;
            e.addClass = g.add;
            e.removeClass = g.remove;
            e.toggleClass = g.toggle;
            e.replaceClass = g.replace;
            e._toDom = e.toDom = h.toDom;
            e.place = h.place;
            e.create = h.create;
            e.empty = function (b) {
                h.empty(b)
            };
            e._destroyElement = e.destroy = function (b) {
                h.destroy(b)
            };
            e._getPadExtents = e.getPadExtents = b.getPadExtents;
            e._getBorderExtents = e.getBorderExtents = b.getBorderExtents;
            e._getPadBorderExtents = e.getPadBorderExtents = b.getPadBorderExtents;
            e._getMarginExtents = e.getMarginExtents = b.getMarginExtents;
            e._getMarginSize = e.getMarginSize = b.getMarginSize;
            e._getMarginBox = e.getMarginBox = b.getMarginBox;
            e.setMarginBox = b.setMarginBox;
            e._getContentBox = e.getContentBox = b.getContentBox;
            e.setContentSize = b.setContentSize;
            e._isBodyLtr = e.isBodyLtr = b.isBodyLtr;
            e._docScroll = e.docScroll =
                b.docScroll;
            e._getIeDocumentElementOffset = e.getIeDocumentElementOffset = b.getIeDocumentElementOffset;
            e._fixIeBiDiScrollLeft = e.fixIeBiDiScrollLeft = b.fixIeBiDiScrollLeft;
            e.position = b.position;
            e.marginBox = function (f, a) {
                return a ? b.setMarginBox(f, a) : b.getMarginBox(f)
            };
            e.contentBox = function (f, a) {
                return a ? b.setContentSize(f, a) : b.getContentBox(f)
            };
            e.coords = function (f, a) {
                e.deprecated("dojo.coords()", "Use dojo.position() or dojo.marginBox().");
                var f = j.byId(f), c = i.getComputedStyle(f), c = b.getMarginBox(f, c), d =
                    b.position(f, a);
                c.x = d.x;
                c.y = d.y;
                return c
            };
            e.getProp = c.get;
            e.setProp = c.set;
            e.prop = function (b, a, k) {
                return 2 == arguments.length ? c["string" == typeof a ? "get" : "set"](b, a) : c.set(b, a, k)
            };
            e.getStyle = i.get;
            e.setStyle = i.set;
            e.getComputedStyle = i.getComputedStyle;
            e.__toPixelValue = e.toPixelValue = i.toPixelValue;
            e.style = function (b, a, c) {
                switch (arguments.length) {
                    case 1:
                        return i.get(b);
                    case 2:
                        return i["string" == typeof a ? "get" : "set"](b, a)
                }
                return i.set(b, a, c)
            };
            return e
        })
    }, "dojo/dom-attr": function () {
        define("exports,./sniff,./_base/lang,./dom,./dom-style,./dom-prop".split(","),
            function (e, j, i, l, c, g) {
                function h(a, b) {
                    var d = a.getAttributeNode && a.getAttributeNode(b);
                    return d && d.specified
                }

                var b = {innerHTML: 1, className: 1, htmlFor: j("ie"), value: 1}, f = {classname: "class", htmlfor: "for", tabindex: "tabIndex", readonly: "readOnly"};
                e.has = function (a, c) {
                    var d = c.toLowerCase();
                    return b[g.names[d] || c] || h(l.byId(a), f[d] || c)
                };
                e.get = function (a, c) {
                    var a = l.byId(a), d = c.toLowerCase(), e = g.names[d] || c, m = a[e];
                    if (b[e] && "undefined" != typeof m || "href" != e && ("boolean" == typeof m || i.isFunction(m)))return m;
                    d = f[d] ||
                        c;
                    return h(a, d) ? a.getAttribute(d) : null
                };
                e.set = function (a, k, d) {
                    a = l.byId(a);
                    if (2 == arguments.length) {
                        for (var h in k)e.set(a, h, k[h]);
                        return a
                    }
                    h = k.toLowerCase();
                    var m = g.names[h] || k, j = b[m];
                    if ("style" == m && "string" != typeof d)return c.set(a, d), a;
                    if (j || "boolean" == typeof d || i.isFunction(d))return g.set(a, k, d);
                    a.setAttribute(f[h] || k, d);
                    return a
                };
                e.remove = function (a, b) {
                    l.byId(a).removeAttribute(f[b.toLowerCase()] || b)
                };
                e.getNodeProp = function (a, b) {
                    var a = l.byId(a), d = b.toLowerCase(), c = g.names[d] || b;
                    if (c in a && "href" !=
                        c)return a[c];
                    d = f[d] || b;
                    return h(a, d) ? a.getAttribute(d) : null
                }
            })
    }, "dojo/dom-prop": function () {
        define("exports,./_base/kernel,./sniff,./_base/lang,./dom,./dom-style,./dom-construct,./_base/connect".split(","), function (e, j, i, l, c, g, h, b) {
            var f = {}, a = 0, k = j._scopeName + "attrid";
            e.names = {"class": "className", "for": "htmlFor", tabindex: "tabIndex", readonly: "readOnly", colspan: "colSpan", frameborder: "frameBorder", rowspan: "rowSpan", valuetype: "valueType"};
            e.get = function (a, b) {
                var a = c.byId(a), f = b.toLowerCase();
                return a[e.names[f] ||
                    b]
            };
            e.set = function (d, j, m) {
                d = c.byId(d);
                if (2 == arguments.length && "string" != typeof j) {
                    for (var n in j)e.set(d, n, j[n]);
                    return d
                }
                n = j.toLowerCase();
                n = e.names[n] || j;
                if ("style" == n && "string" != typeof m)return g.set(d, m), d;
                if ("innerHTML" == n)return i("ie") && d.tagName.toLowerCase()in{col: 1, colgroup: 1, table: 1, tbody: 1, tfoot: 1, thead: 1, tr: 1, title: 1} ? (h.empty(d), d.appendChild(h.toDom(m, d.ownerDocument))) : d[n] = m, d;
                if (l.isFunction(m)) {
                    var o = d[k];
                    o || (o = a++, d[k] = o);
                    f[o] || (f[o] = {});
                    var r = f[o][n];
                    if (r)b.disconnect(r); else try {
                        delete d[n]
                    } catch (q) {
                    }
                    m ?
                        f[o][n] = b.connect(d, n, m) : d[n] = null;
                    return d
                }
                d[n] = m;
                return d
            }
        })
    }, "dojo/dom-construct": function () {
        define("exports,./_base/kernel,./sniff,./_base/window,./dom,./dom-attr,./on".split(","), function (e, j, i, l, c, g, h) {
            function b(a, b) {
                var d = b.parentNode;
                d && d.insertBefore(a, b)
            }

            var f = {option: ["select"], tbody: ["table"], thead: ["table"], tfoot: ["table"], tr: ["table", "tbody"], td: ["table", "tbody", "tr"], th: ["table", "thead", "tr"], legend: ["fieldset"], caption: ["table"], colgroup: ["table"], col: ["table", "colgroup"], li: ["ul"]},
                a = /<\s*([\w\:]+)/, k = {}, d = 0, p = "__" + j._scopeName + "ToDomId", m;
            for (m in f)if (f.hasOwnProperty(m))j = f[m], j.pre = "option" == m ? '<select multiple="multiple">' : "<" + j.join("><") + ">", j.post = "</" + j.reverse().join("></") + ">";
            var n = null, o;
            h(window, "unload", function () {
                n = null
            });
            e.toDom = function (b, c) {
                var c = c || l.doc, g = c[p];
                g || (c[p] = g = ++d + "", k[g] = c.createElement("div"));
                var b = b + "", e = b.match(a), m = e ? e[1].toLowerCase() : "", g = k[g];
                if (e && f[m]) {
                    e = f[m];
                    g.innerHTML = e.pre + b + e.post;
                    for (e = e.length; e; --e)g = g.firstChild
                } else g.innerHTML =
                    b;
                if (1 == g.childNodes.length)return g.removeChild(g.firstChild);
                for (m = c.createDocumentFragment(); e = g.firstChild;)m.appendChild(e);
                return m
            };
            e.place = function (a, d, f) {
                d = c.byId(d);
                "string" == typeof a && (a = /^\s*</.test(a) ? e.toDom(a, d.ownerDocument) : c.byId(a));
                if ("number" == typeof f) {
                    var g = d.childNodes;
                    !g.length || g.length <= f ? d.appendChild(a) : b(a, g[0 > f ? 0 : f])
                } else switch (f) {
                    case "before":
                        b(a, d);
                        break;
                    case "after":
                        f = a;
                        (g = d.parentNode) && (g.lastChild == d ? g.appendChild(f) : g.insertBefore(f, d.nextSibling));
                        break;
                    case "replace":
                        d.parentNode.replaceChild(a,
                            d);
                        break;
                    case "only":
                        e.empty(d);
                        d.appendChild(a);
                        break;
                    case "first":
                        if (d.firstChild) {
                            b(a, d.firstChild);
                            break
                        }
                    default:
                        d.appendChild(a)
                }
                return a
            };
            e.create = function (a, b, d, f) {
                var k = l.doc;
                if (d)d = c.byId(d), k = d.ownerDocument;
                "string" == typeof a && (a = k.createElement(a));
                b && g.set(a, b);
                d && e.place(a, d, f);
                return a
            };
            e.empty = i("ie") ? function (a) {
                for (var a = c.byId(a), b; b = a.lastChild;)e.destroy(b)
            } : function (a) {
                c.byId(a).innerHTML = ""
            };
            e.destroy = function (a) {
                a = c.byId(a);
                try {
                    var b = a.ownerDocument;
                    if (!n || o != b)n = b.createElement("div"),
                        o = b;
                    n.appendChild(a.parentNode ? a.parentNode.removeChild(a) : a);
                    n.innerHTML = ""
                } catch (d) {
                }
            }
        })
    }, "dojo/dom-class": function () {
        define(["./_base/lang", "./_base/array", "./dom"], function (e, j, i) {
            function l(b) {
                if ("string" == typeof b || b instanceof String) {
                    if (b && !g.test(b))return h[0] = b, h;
                    b = b.split(g);
                    b.length && !b[0] && b.shift();
                    b.length && !b[b.length - 1] && b.pop();
                    return b
                }
                return!b ? [] : j.filter(b, function (a) {
                    return a
                })
            }

            var c, g = /\s+/, h = [""], b = {};
            return c = {contains: function (b, a) {
                return 0 <= (" " + i.byId(b).className + " ").indexOf(" " +
                    a + " ")
            }, add: function (b, a) {
                var b = i.byId(b), a = l(a), c = b.className, d, c = c ? " " + c + " " : " ";
                d = c.length;
                for (var g = 0, e = a.length, h; g < e; ++g)(h = a[g]) && 0 > c.indexOf(" " + h + " ") && (c += h + " ");
                d < c.length && (b.className = c.substr(1, c.length - 2))
            }, remove: function (b, a) {
                var b = i.byId(b), c;
                if (void 0 !== a) {
                    a = l(a);
                    c = " " + b.className + " ";
                    for (var d = 0, g = a.length; d < g; ++d)c = c.replace(" " + a[d] + " ", " ");
                    c = e.trim(c)
                } else c = "";
                b.className != c && (b.className = c)
            }, replace: function (f, a, g) {
                f = i.byId(f);
                b.className = f.className;
                c.remove(b, g);
                c.add(b,
                    a);
                f.className !== b.className && (f.className = b.className)
            }, toggle: function (b, a, g) {
                b = i.byId(b);
                if (void 0 === g)for (var a = l(a), d = 0, e = a.length, m; d < e; ++d)m = a[d], c[c.contains(b, m) ? "remove" : "add"](b, m); else c[g ? "add" : "remove"](b, a);
                return g
            }}
        })
    }, "dojo/_base/NodeList": function () {
        define(["./kernel", "../query", "./array", "./html", "../NodeList-dom"], function (e, j, i) {
            var j = j.NodeList, l = j.prototype;
            l.connect = j._adaptAsForEach(function () {
                return e.connect.apply(this, arguments)
            });
            l.coords = j._adaptAsMap(e.coords);
            j.events =
                "blur,focus,change,click,error,keydown,keypress,keyup,load,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,submit".split(",");
            i.forEach(j.events, function (c) {
                var g = "on" + c;
                l[g] = function (c, b) {
                    return this.connect(g, c, b)
                }
            });
            return e.NodeList = j
        })
    }, "dojo/query": function () {
        define("./_base/kernel,./has,./dom,./on,./_base/array,./_base/lang,./selector/_loader,./selector/_loader!default".split(","), function (e, j, i, l, c, g, h, b) {
            function f(a, b) {
                var d = function (d, c) {
                    if ("string" == typeof c && (c = i.byId(c),
                        !c))return new b([]);
                    var f = "string" == typeof d ? a(d, c) : d ? d.orphan ? d : [d] : [];
                    return f.orphan ? f : new b(f)
                };
                d.matches = a.match || function (a, b, c) {
                    return 0 < d.filter([a], b, c).length
                };
                d.filter = a.filter || function (a, b, f) {
                    return d(b, f).filter(function (b) {
                        return-1 < c.indexOf(a, b)
                    })
                };
                if ("function" != typeof a)var f = a.search, a = function (a, b) {
                    return f(b || document, a)
                };
                return d
            }

            j.add("array-extensible", function () {
                return 1 == g.delegate([], {length: 1}).length && !j("bug-for-in-skips-shadowed")
            });
            var a = Array.prototype, k = a.slice,
                d = a.concat, p = c.forEach, m = function (a, b, d) {
                    b = [0].concat(k.call(b, 0));
                    d = d || e.global;
                    return function (c) {
                        b[0] = c;
                        return a.apply(d, b)
                    }
                }, n = function (a) {
                    var b = this instanceof o && j("array-extensible");
                    "number" == typeof a && (a = Array(a));
                    var d = a && "length"in a ? a : arguments;
                    if (b || !d.sort) {
                        for (var c = b ? this : [], f = c.length = d.length, e = 0; e < f; e++)c[e] = d[e];
                        if (b)return c;
                        d = c
                    }
                    g._mixin(d, r);
                    d._NodeListCtor = function (a) {
                        return o(a)
                    };
                    return d
                }, o = n, r = o.prototype = j("array-extensible") ? [] : {};
            o._wrap = r._wrap = function (a, b, d) {
                a = new (d ||
                    this._NodeListCtor || o)(a);
                return b ? a._stash(b) : a
            };
            o._adaptAsMap = function (a, b) {
                return function () {
                    return this.map(m(a, arguments, b))
                }
            };
            o._adaptAsForEach = function (a, b) {
                return function () {
                    this.forEach(m(a, arguments, b));
                    return this
                }
            };
            o._adaptAsFilter = function (a, b) {
                return function () {
                    return this.filter(m(a, arguments, b))
                }
            };
            o._adaptWithCondition = function (a, b, d) {
                return function () {
                    var c = arguments, f = m(a, c, d);
                    if (b.call(d || e.global, c))return this.map(f);
                    this.forEach(f);
                    return this
                }
            };
            p(["slice", "splice"], function (b) {
                var d =
                    a[b];
                r[b] = function () {
                    return this._wrap(d.apply(this, arguments), "slice" == b ? this : null)
                }
            });
            p(["indexOf", "lastIndexOf", "every", "some"], function (a) {
                var b = c[a];
                r[a] = function () {
                    return b.apply(e, [this].concat(k.call(arguments, 0)))
                }
            });
            g.extend(n, {constructor: o, _NodeListCtor: o, toString: function () {
                return this.join(",")
            }, _stash: function (a) {
                this._parent = a;
                return this
            }, on: function (a, b) {
                var d = this.map(function (d) {
                    return l(d, a, b)
                });
                d.remove = function () {
                    for (var a = 0; a < d.length; a++)d[a].remove()
                };
                return d
            }, end: function () {
                return this._parent ?
                    this._parent : new this._NodeListCtor(0)
            }, concat: function (a) {
                var b = k.call(this, 0), f = c.map(arguments, function (a) {
                    return k.call(a, 0)
                });
                return this._wrap(d.apply(b, f), this)
            }, map: function (a, b) {
                return this._wrap(c.map(this, a, b), this)
            }, forEach: function (a, b) {
                p(this, a, b);
                return this
            }, filter: function (a) {
                var b = arguments, d = this, f = 0;
                if ("string" == typeof a) {
                    d = q._filterResult(this, b[0]);
                    if (1 == b.length)return d._stash(this);
                    f = 1
                }
                return this._wrap(c.filter(d, b[f], b[f + 1]), this)
            }, instantiate: function (a, b) {
                var d = g.isFunction(a) ?
                    a : g.getObject(a), b = b || {};
                return this.forEach(function (a) {
                    new d(b, a)
                })
            }, at: function () {
                var a = new this._NodeListCtor(0);
                p(arguments, function (b) {
                    0 > b && (b = this.length + b);
                    this[b] && a.push(this[b])
                }, this);
                return a._stash(this)
            }});
            var q = f(b, n);
            e.query = f(b, function (a) {
                return n(a)
            });
            q.load = function (a, b, d) {
                h.load(a, b, function (a) {
                    d(f(a, n))
                })
            };
            e._filterQueryResult = q._filterResult = function (a, b, d) {
                return new n(q.filter(a, b, d))
            };
            e.NodeList = q.NodeList = n;
            return q
        })
    }, "dojo/selector/_loader": function () {
        define(["../has",
            "require"], function (e, j) {
            var i = document.createElement("div");
            e.add("dom-qsa2.1", !!i.querySelectorAll);
            e.add("dom-qsa3", function () {
                try {
                    return i.innerHTML = "<p class='TEST'></p>", 1 == i.querySelectorAll(".TEST:empty").length
                } catch (c) {
                }
            });
            var l;
            return{load: function (c, g, h) {
                var b = j, c = "default" == c ? e("config-selectorEngine") || "css3" : c, c = "css2" == c || "lite" == c ? "./lite" : "css2.1" == c ? e("dom-qsa2.1") ? "./lite" : "./acme" : "css3" == c ? e("dom-qsa3") ? "./lite" : "./acme" : "acme" == c ? "./acme" : (b = g) && c;
                if ("?" == c.charAt(c.length -
                    1))var c = c.substring(0, c.length - 1), f = !0;
                if (f && (e("dom-compliant-qsa") || l))return h(l);
                b([c], function (a) {
                    "./lite" != c && (l = a);
                    h(a)
                })
            }}
        })
    }, "dojo/selector/acme": function () {
        define(["../dom", "../sniff", "../_base/array", "../_base/lang", "../_base/window"], function (e, j, i, l, c) {
            var g = l.trim, h = i.forEach, b = "BackCompat" == c.doc.compatMode, f = !1, a = function () {
                return!0
            }, k = function (a) {
                for (var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", b = function (b, d) {
                        return g(a.slice(b, d))
                    }, d = [], c = -1, e = -1, k = -1, m = -1, h = -1, l = -1, i = -1,
                         j, n = "", p = "", o, q = 0, u = a.length, r = null, t = null, v = function () {
                        if (0 <= l)r.id = b(l, q).replace(/\\/g, ""), l = -1;
                        if (0 <= i) {
                            var a = i == q ? null : b(i, q);
                            r[0 > ">~+".indexOf(a) ? "tag" : "oper"] = a;
                            i = -1
                        }
                        0 <= h && (r.classes.push(b(h + 1, q).replace(/\\/g, "")), h = -1)
                    }; n = p, p = a.charAt(q), q < u; q++)if ("\\" != n)if (r || (o = q, r = {query: null, pseudos: [], attrs: [], classes: [], tag: null, oper: null, id: null, getTag: function () {
                    return f ? this.otag : this.tag
                }}, i = q), j)p == j && (j = null); else if ("'" == p || '"' == p)j = p; else if (0 <= c)if ("]" == p) {
                    t.attr ? t.matchFor = b(k || c + 1, q) :
                        t.attr = b(c + 1, q);
                    if ((c = t.matchFor) && ('"' == c.charAt(0) || "'" == c.charAt(0)))t.matchFor = c.slice(1, -1);
                    if (t.matchFor)t.matchFor = t.matchFor.replace(/\\/g, "");
                    r.attrs.push(t);
                    t = null;
                    c = k = -1
                } else {
                    if ("=" == p)k = 0 <= "|~^$*".indexOf(n) ? n : "", t.type = k + p, t.attr = b(c + 1, q - k.length), k = q + 1
                } else if (0 <= e) {
                    if (")" == p) {
                        if (0 <= m)t.value = b(e + 1, q);
                        m = e = -1
                    }
                } else if ("#" == p)v(), l = q + 1; else if ("." == p)v(), h = q; else if (":" == p)v(), m = q; else if ("[" == p)v(), c = q, t = {}; else if ("(" == p)0 <= m && (t = {name: b(m + 1, q), value: null}, r.pseudos.push(t)), e = q; else if (" " ==
                    p && n != p) {
                    v();
                    0 <= m && r.pseudos.push({name: b(m + 1, q)});
                    r.loops = r.pseudos.length || r.attrs.length || r.classes.length;
                    r.oquery = r.query = b(o, q);
                    r.otag = r.tag = r.oper ? null : r.tag || "*";
                    if (r.tag)r.tag = r.tag.toUpperCase();
                    if (d.length && d[d.length - 1].oper)r.infixOper = d.pop(), r.query = r.infixOper.query + " " + r.query;
                    d.push(r);
                    r = null
                }
                return d
            }, d = function (a, b) {
                return!a ? b : !b ? a : function () {
                    return a.apply(window, arguments) && b.apply(window, arguments)
                }
            }, p = function (a, b) {
                var d = b || [];
                a && d.push(a);
                return d
            }, m = function (a) {
                return 1 ==
                    a.nodeType
            }, n = function (a, b) {
                return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (f ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
            }, o = {"*=": function (a, b) {
                return function (d) {
                    return 0 <= n(d, a).indexOf(b)
                }
            }, "^=": function (a, b) {
                return function (d) {
                    return 0 == n(d, a).indexOf(b)
                }
            }, "$=": function (a, b) {
                return function (d) {
                    var d = " " + n(d, a), c = d.lastIndexOf(b);
                    return-1 < c && c == d.length - b.length
                }
            }, "~=": function (a, b) {
                var d = " " + b + " ";
                return function (b) {
                    return 0 <= (" " + n(b, a) + " ").indexOf(d)
                }
            },
                "|=": function (a, b) {
                    var d = b + "-";
                    return function (c) {
                        c = n(c, a);
                        return c == b || 0 == c.indexOf(d)
                    }
                }, "=": function (a, b) {
                    return function (d) {
                        return n(d, a) == b
                    }
                }}, r = "undefined" == typeof c.doc.firstChild.nextElementSibling, q = !r ? "nextElementSibling" : "nextSibling", v = !r ? "previousElementSibling" : "previousSibling", s = r ? m : a, u = function (a) {
                for (; a = a[v];)if (s(a))return!1;
                return!0
            }, t = function (a) {
                for (; a = a[q];)if (s(a))return!1;
                return!0
            }, y = function (a) {
                var b = a.parentNode, b = 7 != b.nodeType ? b : b.nextSibling, d = 0, c = b.children || b.childNodes,
                    f = a._i || a.getAttribute("_i") || -1, g = b._l || ("undefined" !== typeof b.getAttribute ? b.getAttribute("_l") : -1);
                if (!c)return-1;
                c = c.length;
                if (g == c && 0 <= f && 0 <= g)return f;
                j("ie") && "undefined" !== typeof b.setAttribute ? b.setAttribute("_l", c) : b._l = c;
                f = -1;
                for (b = b.firstElementChild || b.firstChild; b; b = b[q])if (s(b))j("ie") ? b.setAttribute("_i", ++d) : b._i = ++d, a === b && (f = d);
                return f
            }, z = function (a) {
                return!(y(a) % 2)
            }, I = function (a) {
                return y(a) % 2
            }, J = {checked: function () {
                return function (a) {
                    return!!("checked"in a ? a.checked : a.selected)
                }
            },
                disabled: function () {
                    return function (a) {
                        return a.disabled
                    }
                }, enabled: function () {
                    return function (a) {
                        return!a.disabled
                    }
                }, "first-child": function () {
                    return u
                }, "last-child": function () {
                    return t
                }, "only-child": function () {
                    return function (a) {
                        return u(a) && t(a)
                    }
                }, empty: function () {
                    return function (a) {
                        for (var b = a.childNodes, a = a.childNodes.length - 1; 0 <= a; a--) {
                            var d = b[a].nodeType;
                            if (1 === d || 3 == d)return!1
                        }
                        return!0
                    }
                }, contains: function (a, b) {
                    var d = b.charAt(0);
                    if ('"' == d || "'" == d)b = b.slice(1, -1);
                    return function (a) {
                        return 0 <=
                            a.innerHTML.indexOf(b)
                    }
                }, not: function (a, b) {
                    var d = k(b)[0], c = {el: 1};
                    if ("*" != d.tag)c.tag = 1;
                    if (!d.classes.length)c.classes = 1;
                    var f = E(d, c);
                    return function (a) {
                        return!f(a)
                    }
                }, "nth-child": function (a, b) {
                    var d = parseInt;
                    if ("odd" == b)return I;
                    if ("even" == b)return z;
                    if (-1 != b.indexOf("n")) {
                        var c = b.split("n", 2), f = c[0] ? "-" == c[0] ? -1 : d(c[0]) : 1, g = c[1] ? d(c[1]) : 0, e = 0, k = -1;
                        0 < f ? 0 > g ? g = g % f && f + g % f : 0 < g && (g >= f && (e = g - g % f), g %= f) : 0 > f && (f *= -1, 0 < g && (k = g, g %= f));
                        if (0 < f)return function (a) {
                            a = y(a);
                            return a >= e && (0 > k || a <= k) && a % f == g
                        };
                        b = g
                    }
                    var m =
                        d(b);
                    return function (a) {
                        return y(a) == m
                    }
                }}, N = j("ie") && (9 > j("ie") || j("quirks")) ? function (a) {
                var b = a.toLowerCase();
                "class" == b && (a = "className");
                return function (d) {
                    return f ? d.getAttribute(a) : d[a] || d[b]
                }
            } : function (a) {
                return function (b) {
                    return b && b.getAttribute && b.hasAttribute(a)
                }
            }, E = function (b, c) {
                if (!b)return a;
                var c = c || {}, g = null;
                "el"in c || (g = d(g, m));
                "tag"in c || "*" != b.tag && (g = d(g, function (a) {
                    return a && (f ? a.tagName : a.tagName.toUpperCase()) == b.getTag()
                }));
                "classes"in c || h(b.classes, function (a, b) {
                    var c = RegExp("(?:^|\\s)" +
                        a + "(?:\\s|$)");
                    g = d(g, function (a) {
                        return c.test(a.className)
                    });
                    g.count = b
                });
                "pseudos"in c || h(b.pseudos, function (a) {
                    var b = a.name;
                    J[b] && (g = d(g, J[b](b, a.value)))
                });
                "attrs"in c || h(b.attrs, function (a) {
                    var b, c = a.attr;
                    a.type && o[a.type] ? b = o[a.type](c, a.matchFor) : c.length && (b = N(c));
                    b && (g = d(g, b))
                });
                "id"in c || b.id && (g = d(g, function (a) {
                    return!!a && a.id == b.id
                }));
                g || "default"in c || (g = a);
                return g
            }, S = function (a) {
                return function (b, d, c) {
                    for (; b = b[q];)if (!r || m(b)) {
                        (!c || P(b, c)) && a(b) && d.push(b);
                        break
                    }
                    return d
                }
            }, Q = function (a) {
                return function (b, d, c) {
                    for (b = b[q]; b;) {
                        if (s(b)) {
                            if (c && !P(b, c))break;
                            a(b) && d.push(b)
                        }
                        b = b[q]
                    }
                    return d
                }
            }, B = function (b) {
                b = b || a;
                return function (a, d, c) {
                    for (var f = 0, g = a.children || a.childNodes; a = g[f++];)s(a) && (!c || P(a, c)) && b(a, f) && d.push(a);
                    return d
                }
            }, A = {}, w = function (d) {
                var f = A[d.query];
                if (f)return f;
                var g = d.infixOper, g = g ? g.oper : "", k = E(d, {el: 1}), m = "*" == d.tag, h = c.doc.getElementsByClassName;
                if (g) {
                    h = {el: 1};
                    if (m)h.tag = 1;
                    k = E(d, h);
                    "+" == g ? f = S(k) : "~" == g ? f = Q(k) : ">" == g && (f = B(k))
                } else if (d.id)k = !d.loops && m ? a : E(d, {el: 1, id: 1}), f = function (a, b) {
                    var c = e.byId(d.id, a.ownerDocument || a);
                    if (c && k(c)) {
                        if (9 == a.nodeType)return p(c, b);
                        for (var f = c.parentNode; f && !(f == a);)f = f.parentNode;
                        if (f)return p(c, b)
                    }
                }; else if (h && /\{\s*\[native code\]\s*\}/.test("" + h) && d.classes.length && !b)var k = E(d, {el: 1, classes: 1, id: 1}), l = d.classes.join(" "), f = function (a, b, d) {
                    for (var b = p(0, b), c, f = 0, g = a.getElementsByClassName(l); c = g[f++];)k(c, a) && P(c, d) && b.push(c);
                    return b
                }; else!m && !d.loops ? f = function (a, b, c) {
                    for (var b = p(0, b), f = 0, g = d.getTag(), g = g ? a.getElementsByTagName(g) : []; a =
                        g[f++];)P(a, c) && b.push(a);
                    return b
                } : (k = E(d, {el: 1, tag: 1, id: 1}), f = function (a, b, c) {
                    for (var b = p(0, b), f, g = 0, e = (f = d.getTag()) ? a.getElementsByTagName(f) : []; f = e[g++];)k(f, a) && P(f, c) && b.push(f);
                    return b
                });
                return A[d.query] = f
            }, x = {}, K = {}, H = function (a) {
                var b = k(g(a));
                if (1 == b.length) {
                    var d = w(b[0]);
                    return function (a) {
                        if (a = d(a, []))a.nozip = !0;
                        return a
                    }
                }
                return function (a) {
                    for (var a = p(a), d, c, f = b.length, g, e, k = 0; k < f; k++) {
                        e = [];
                        d = b[k];
                        c = a.length - 1;
                        if (0 < c)g = {}, e.nozip = !0;
                        c = w(d);
                        for (var m = 0; d = a[m]; m++)c(d, e, g);
                        if (!e.length)break;
                        a = e
                    }
                    return e
                }
            }, C = j("ie") ? "commentStrip" : "nozip", F = !!c.doc.querySelectorAll, O = /\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g, D = function (a, b, d, c) {
                return d ? (b ? b + " " : "") + d + (c ? " " + c : "") : a
            }, L = /([^[]*)([^\]]*])?/g, T = function (a, b, d) {
                return b.replace(O, D) + (d || "")
            }, G = function (a, d) {
                a = a.replace(L, T);
                if (F) {
                    var c = K[a];
                    if (c && !d)return c
                }
                if (c = x[a])return c;
                var c = a.charAt(0), f = -1 == a.indexOf(" ");
                0 <= a.indexOf("#") && f && (d = !0);
                if (F && !d && -1 == ">~+".indexOf(c) && (!j("ie") || -1 == a.indexOf(":")) && !(b && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") &&
                    -1 == a.indexOf(":checked") && -1 == a.indexOf("|=")) {
                    var g = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
                    return K[a] = function (b) {
                        try {
                            if (!(9 == b.nodeType || f))throw"";
                            var d = b.querySelectorAll(g);
                            d[C] = !0;
                            return d
                        } catch (c) {
                            return G(a, !0)(b)
                        }
                    }
                }
                var e = a.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);
                return x[a] = 2 > e.length ? H(a) : function (a) {
                    for (var b = 0, d = [], c; c = e[b++];)d = d.concat(H(c)(a));
                    return d
                }
            }, M = 0, X = j("ie") ? function (a) {
                return f ? a.getAttribute("_uid") || a.setAttribute("_uid", ++M) || M : a.uniqueID
            } :
                function (a) {
                    return a._uid || (a._uid = ++M)
                }, P = function (a, b) {
                if (!b)return 1;
                var d = X(a);
                return!b[d] ? b[d] = 1 : 0
            }, Y = function (a) {
                if (a && a.nozip)return a;
                var b = [];
                if (!a || !a.length)return b;
                a[0] && b.push(a[0]);
                if (2 > a.length)return b;
                M++;
                var d, c;
                if (j("ie") && f) {
                    var g = M + "";
                    a[0].setAttribute("_zipIdx", g);
                    for (d = 1; c = a[d]; d++)a[d].getAttribute("_zipIdx") != g && b.push(c), c.setAttribute("_zipIdx", g)
                } else if (j("ie") && a.commentStrip)try {
                    for (d = 1; c = a[d]; d++)m(c) && b.push(c)
                } catch (e) {
                } else {
                    a[0] && (a[0]._zipIdx = M);
                    for (d = 1; c = a[d]; d++)a[d]._zipIdx !=
                        M && b.push(c), c._zipIdx = M
                }
                return b
            }, U = function (a, b) {
                b = b || c.doc;
                f = "div" === (b.ownerDocument || b).createElement("div").tagName;
                var d = G(a)(b);
                return d && d.nozip ? d : Y(d)
            };
            U.filter = function (a, b, d) {
                for (var c = [], f = k(b), f = 1 == f.length && !/[^\w#\.]/.test(b) ? E(f[0]) : function (a) {
                    return-1 != i.indexOf(U(b, e.byId(d)), a)
                }, g = 0, m; m = a[g]; g++)f(m) && c.push(m);
                return c
            };
            return U
        })
    }, "dojo/NodeList-dom": function () {
        define("dojo/NodeList-dom", "./_base/kernel,./query,./_base/array,./_base/lang,./dom-class,./dom-construct,./dom-geometry,./dom-attr,./dom-style".split(","),
            function (e, j, i, l, c, g, h, b, f) {
                function a(a) {
                    return function (b, d, c) {
                        return 2 == arguments.length ? a["string" == typeof d ? "get" : "set"](b, d) : a.set(b, d, c)
                    }
                }

                var k = function (a) {
                    return 1 == a.length && "string" == typeof a[0]
                }, d = function (a) {
                    var b = a.parentNode;
                    b && b.removeChild(a)
                }, p = j.NodeList, m = p._adaptWithCondition, n = p._adaptAsForEach, o = p._adaptAsMap;
                l.extend(p, {_normalize: function (a, b) {
                    var d = !0 === a.parse;
                    if ("string" == typeof a.template)var c = a.templateFunc || e.string && e.string.substitute, a = c ? c(a.template, a) : a;
                    c = typeof a;
                    "string" == c || "number" == c ? (a = g.toDom(a, b && b.ownerDocument), a = 11 == a.nodeType ? l._toArray(a.childNodes) : [a]) : l.isArrayLike(a) ? l.isArray(a) || (a = l._toArray(a)) : a = [a];
                    if (d)a._runParse = !0;
                    return a
                }, _cloneNode: function (a) {
                    return a.cloneNode(!0)
                }, _place: function (a, b, d, c) {
                    if (!(1 != b.nodeType && "only" == d))for (var f, k = a.length, m = k - 1; 0 <= m; m--) {
                        var h = c ? this._cloneNode(a[m]) : a[m];
                        if (a._runParse && e.parser && e.parser.parse) {
                            f || (f = b.ownerDocument.createElement("div"));
                            f.appendChild(h);
                            e.parser.parse(f);
                            for (h = f.firstChild; f.firstChild;)f.removeChild(f.firstChild)
                        }
                        m ==
                            k - 1 ? g.place(h, b, d) : b.parentNode.insertBefore(h, b);
                        b = h
                    }
                }, position: o(h.position), attr: m(a(b), k), style: m(a(f), k), addClass: n(c.add), removeClass: n(c.remove), toggleClass: n(c.toggle), replaceClass: n(c.replace), empty: n(g.empty), removeAttr: n(b.remove), marginBox: o(h.getMarginBox), place: function (a, b) {
                    var d = j(a)[0];
                    return this.forEach(function (a) {
                        g.place(a, d, b)
                    })
                }, orphan: function (a) {
                    return(a ? j._filterResult(this, a) : this).forEach(d)
                }, adopt: function (a, b) {
                    return j(a).place(this[0], b)._stash(this)
                }, query: function (a) {
                    if (!a)return this;
                    var b = new p;
                    this.map(function (d) {
                        j(a, d).forEach(function (a) {
                            void 0 !== a && b.push(a)
                        })
                    });
                    return b._stash(this)
                }, filter: function (a) {
                    var b = arguments, d = this, c = 0;
                    if ("string" == typeof a) {
                        d = j._filterResult(this, b[0]);
                        if (1 == b.length)return d._stash(this);
                        c = 1
                    }
                    return this._wrap(i.filter(d, b[c], b[c + 1]), this)
                }, addContent: function (a, b) {
                    for (var a = this._normalize(a, this[0]), d = 0, c; c = this[d]; d++)this._place(a, c, b, 0 < d);
                    return this
                }});
                return p
            })
    }, "dojo/_base/fx": function () {
        define("./kernel,./config,./lang,../Evented,./Color,./connect,./sniff,../dom,../dom-style".split(","),
            function (e, j, i, l, c, g, h, b, f) {
                var a = i.mixin, k = {}, d = k._Line = function (a, b) {
                    this.start = a;
                    this.end = b
                };
                d.prototype.getValue = function (a) {
                    return(this.end - this.start) * a + this.start
                };
                var p = k.Animation = function (b) {
                    a(this, b);
                    if (i.isArray(this.curve))this.curve = new d(this.curve[0], this.curve[1])
                };
                p.prototype = new l;
                i.extend(p, {duration: 350, repeat: 0, rate: 20, _percent: 0, _startRepeatCount: 0, _getStep: function () {
                    var a = this._percent, b = this.easing;
                    return b ? b(a) : a
                }, _fire: function (a, b) {
                    var d = b || [];
                    if (this[a])if (j.debugAtAllCosts)this[a].apply(this,
                        d); else try {
                        this[a].apply(this, d)
                    } catch (c) {
                    }
                    return this
                }, play: function (a, b) {
                    this._delayTimer && this._clearTimer();
                    if (b)this._stopTimer(), this._active = this._paused = !1, this._percent = 0; else if (this._active && !this._paused)return this;
                    this._fire("beforeBegin", [this.node]);
                    var d = a || this.delay, c = i.hitch(this, "_play", b);
                    if (0 < d)return this._delayTimer = setTimeout(c, d), this;
                    c();
                    return this
                }, _play: function () {
                    this._delayTimer && this._clearTimer();
                    this._startTime = (new Date).valueOf();
                    this._paused && (this._startTime -=
                        this.duration * this._percent);
                    this._active = !0;
                    this._paused = !1;
                    var a = this.curve.getValue(this._getStep());
                    if (!this._percent) {
                        if (!this._startRepeatCount)this._startRepeatCount = this.repeat;
                        this._fire("onBegin", [a])
                    }
                    this._fire("onPlay", [a]);
                    this._cycle();
                    return this
                }, pause: function () {
                    this._delayTimer && this._clearTimer();
                    this._stopTimer();
                    if (!this._active)return this;
                    this._paused = !0;
                    this._fire("onPause", [this.curve.getValue(this._getStep())]);
                    return this
                }, gotoPercent: function (a, b) {
                    this._stopTimer();
                    this._active =
                        this._paused = !0;
                    this._percent = a;
                    b && this.play();
                    return this
                }, stop: function (a) {
                    this._delayTimer && this._clearTimer();
                    if (!this._timer)return this;
                    this._stopTimer();
                    if (a)this._percent = 1;
                    this._fire("onStop", [this.curve.getValue(this._getStep())]);
                    this._active = this._paused = !1;
                    return this
                }, status: function () {
                    return this._active ? this._paused ? "paused" : "playing" : "stopped"
                }, _cycle: function () {
                    if (this._active) {
                        var a = (new Date).valueOf(), a = 0 === this.duration ? 1 : (a - this._startTime) / this.duration;
                        1 <= a && (a = 1);
                        this._percent =
                            a;
                        this.easing && (a = this.easing(a));
                        this._fire("onAnimate", [this.curve.getValue(a)]);
                        if (1 > this._percent)this._startTimer(); else {
                            this._active = !1;
                            if (0 < this.repeat)this.repeat--, this.play(null, !0); else if (-1 == this.repeat)this.play(null, !0); else if (this._startRepeatCount)this.repeat = this._startRepeatCount, this._startRepeatCount = 0;
                            this._percent = 0;
                            this._fire("onEnd", [this.node]);
                            !this.repeat && this._stopTimer()
                        }
                    }
                    return this
                }, _clearTimer: function () {
                    clearTimeout(this._delayTimer);
                    delete this._delayTimer
                }});
                var m = 0, n = null, o = {run: function () {
                }};
                i.extend(p, {_startTimer: function () {
                    if (!this._timer)this._timer = g.connect(o, "run", this, "_cycle"), m++;
                    n || (n = setInterval(i.hitch(o, "run"), this.rate))
                }, _stopTimer: function () {
                    if (this._timer)g.disconnect(this._timer), this._timer = null, m--;
                    0 >= m && (clearInterval(n), n = null, m = 0)
                }});
                var r = h("ie") ? function (a) {
                    var b = a.style;
                    if (!b.width.length && "auto" == f.get(a, "width"))b.width = "auto"
                } : function () {
                };
                k._fade = function (d) {
                    d.node = b.byId(d.node);
                    var c = a({properties: {}}, d), d = c.properties.opacity =
                    {};
                    d.start = !("start"in c) ? function () {
                        return+f.get(c.node, "opacity") || 0
                    } : c.start;
                    d.end = c.end;
                    d = k.animateProperty(c);
                    g.connect(d, "beforeBegin", i.partial(r, c.node));
                    return d
                };
                k.fadeIn = function (b) {
                    return k._fade(a({end: 1}, b))
                };
                k.fadeOut = function (b) {
                    return k._fade(a({end: 0}, b))
                };
                k._defaultEasing = function (a) {
                    return 0.5 + Math.sin((a + 1.5) * Math.PI) / 2
                };
                var q = function (a) {
                    this._properties = a;
                    for (var b in a) {
                        var d = a[b];
                        if (d.start instanceof c)d.tempColor = new c
                    }
                };
                q.prototype.getValue = function (a) {
                    var b = {}, d;
                    for (d in this._properties) {
                        var f =
                            this._properties[d], g = f.start;
                        g instanceof c ? b[d] = c.blendColors(g, f.end, a, f.tempColor).toCss() : i.isArray(g) || (b[d] = (f.end - g) * a + g + ("opacity" != d ? f.units || "px" : 0))
                    }
                    return b
                };
                k.animateProperty = function (d) {
                    var k = d.node = b.byId(d.node);
                    if (!d.easing)d.easing = e._defaultEasing;
                    d = new p(d);
                    g.connect(d, "beforeBegin", d, function () {
                        var b = {}, d;
                        for (d in this.properties) {
                            if ("width" == d || "height" == d)this.node.display = "block";
                            var g = this.properties[d];
                            i.isFunction(g) && (g = g(k));
                            g = b[d] = a({}, i.isObject(g) ? g : {end: g});
                            if (i.isFunction(g.start))g.start =
                                g.start(k);
                            if (i.isFunction(g.end))g.end = g.end(k);
                            var e = 0 <= d.toLowerCase().indexOf("color"), m = function (a, b) {
                                var d = {height: a.offsetHeight, width: a.offsetWidth}[b];
                                if (void 0 !== d)return d;
                                d = f.get(a, b);
                                return"opacity" == b ? +d : e ? d : parseFloat(d)
                            };
                            if ("end"in g) {
                                if (!("start"in g))g.start = m(k, d)
                            } else g.end = m(k, d);
                            e ? (g.start = new c(g.start), g.end = new c(g.end)) : g.start = "opacity" == d ? +g.start : parseFloat(g.start)
                        }
                        this.curve = new q(b)
                    });
                    g.connect(d, "onAnimate", i.hitch(f, "set", d.node));
                    return d
                };
                k.anim = function (a, b, d, c, f, g) {
                    return k.animateProperty({node: a, duration: d || p.prototype.duration, properties: b, easing: c, onEnd: f}).play(g || 0)
                };
                a(e, k);
                e._Animation = p;
                return k
            })
    }, "dijit/layout/BorderContainer": function () {
        define("dojo/_base/array,dojo/cookie,dojo/_base/declare,dojo/dom-class,dojo/dom-construct,dojo/dom-geometry,dojo/dom-style,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/on,dojo/touch,../_WidgetBase,../_Widget,../_TemplatedMixin,./_LayoutWidget,./utils".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r) {
            var q =
                i("dijit.layout._Splitter", [m, n], {live: !0, templateString: '<div class="dijitSplitter" data-dojo-attach-event="onkeypress:_onKeyPress,press:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse" tabIndex="0" role="separator"><div class="dijitSplitterThumb"></div></div>', constructor: function () {
                    this._handlers = []
                }, postMixInProperties: function () {
                    this.inherited(arguments);
                    this.horizontal = /top|bottom/.test(this.region);
                    this._factor = /top|left/.test(this.region) ? 1 : -1;
                    this._cookieName = this.container.id + "_" +
                        this.region
                }, buildRendering: function () {
                    this.inherited(arguments);
                    l.add(this.domNode, "dijitSplitter" + (this.horizontal ? "H" : "V"));
                    if (this.container.persist) {
                        var a = j(this._cookieName);
                        a && (this.child.domNode.style[this.horizontal ? "height" : "width"] = a)
                    }
                }, _computeMaxSize: function () {
                    var a = this.horizontal ? "h" : "w", b = g.getMarginBox(this.child.domNode)[a], d = e.filter(this.container.getChildren(), function (a) {
                        return"center" == a.region
                    })[0], a = g.getMarginBox(d.domNode)[a];
                    return Math.min(this.child.maxSize, b + a)
                }, _startDrag: function (f) {
                    if (!this.cover)this.cover =
                        c.place("<div class=dijitSplitterCover></div>", this.child.domNode, "after");
                    l.add(this.cover, "dijitSplitterCoverActive");
                    this.fake && c.destroy(this.fake);
                    if (!(this._resize = this.live))(this.fake = this.domNode.cloneNode(!0)).removeAttribute("id"), l.add(this.domNode, "dijitSplitterShadow"), c.place(this.fake, this.domNode, "after");
                    l.add(this.domNode, "dijitSplitterActive dijitSplitter" + (this.horizontal ? "H" : "V") + "Active");
                    this.fake && l.remove(this.fake, "dijitSplitterHover dijitSplitter" + (this.horizontal ? "H" :
                        "V") + "Hover");
                    var e = this._factor, m = this.horizontal, h = m ? "pageY" : "pageX", i = f[h], j = this.domNode.style, p = g.getMarginBox(this.child.domNode)[m ? "h" : "w"], n = this._computeMaxSize(), o = this.child.minSize || 20, m = this.region, q = "top" == m || "bottom" == m ? "top" : "left", r = parseInt(j[q], 10), v = this._resize, A = a.hitch(this.container, "_layoutChildren", this.child.id), m = this.ownerDocument;
                    this._handlers = this._handlers.concat([k(m, d.move, this._drag = function (a, b) {
                        var d = a[h] - i, c = e * d + p, f = Math.max(Math.min(c, n), o);
                        (v || b) && A(f);
                        j[q] =
                            d + r + e * (f - c) + "px"
                    }), k(m, "dragstart", b.stop), k(this.ownerDocumentBody, "selectstart", b.stop), k(m, d.release, a.hitch(this, "_stopDrag"))]);
                    b.stop(f)
                }, _onMouse: function (a) {
                    a = "mouseover" == a.type || "mouseenter" == a.type;
                    l.toggle(this.domNode, "dijitSplitterHover", a);
                    l.toggle(this.domNode, "dijitSplitter" + (this.horizontal ? "H" : "V") + "Hover", a)
                }, _stopDrag: function (a) {
                    try {
                        this.cover && l.remove(this.cover, "dijitSplitterCoverActive"), this.fake && c.destroy(this.fake), l.remove(this.domNode, "dijitSplitterActive dijitSplitter" +
                            (this.horizontal ? "H" : "V") + "Active dijitSplitterShadow"), this._drag(a), this._drag(a, !0)
                    } finally {
                        this._cleanupHandlers(), delete this._drag
                    }
                    this.container.persist && j(this._cookieName, this.child.domNode.style[this.horizontal ? "height" : "width"], {expires: 365})
                }, _cleanupHandlers: function () {
                    for (var a; a = this._handlers.pop();)a.remove()
                }, _onKeyPress: function (a) {
                    this._resize = !0;
                    var d = this.horizontal, c = 1;
                    switch (a.charOrCode) {
                        case d ? f.UP_ARROW : f.LEFT_ARROW:
                            c *= -1;
                        case d ? f.DOWN_ARROW : f.RIGHT_ARROW:
                            break;
                        default:
                            return
                    }
                    d =
                        g.getMarginSize(this.child.domNode)[d ? "h" : "w"] + this._factor * c;
                    this.container._layoutChildren(this.child.id, Math.max(Math.min(d, this._computeMaxSize()), this.child.minSize));
                    b.stop(a)
                }, destroy: function () {
                    this._cleanupHandlers();
                    delete this.child;
                    delete this.container;
                    delete this.cover;
                    delete this.fake;
                    this.inherited(arguments)
                }}), v = i("dijit.layout._Gutter", [m, n], {templateString: '<div class="dijitGutter" role="presentation"></div>', postMixInProperties: function () {
                this.inherited(arguments);
                this.horizontal =
                    /top|bottom/.test(this.region)
            }, buildRendering: function () {
                this.inherited(arguments);
                l.add(this.domNode, "dijitGutter" + (this.horizontal ? "H" : "V"))
            }}), i = i("dijit.layout.BorderContainer", o, {design: "headline", gutters: !0, liveSplitters: !0, persist: !1, baseClass: "dijitBorderContainer", _splitterClass: q, postMixInProperties: function () {
                this.gutters || (this.baseClass += "NoGutter");
                this.inherited(arguments)
            }, startup: function () {
                this._started || (e.forEach(this.getChildren(), this._setupChild, this), this.inherited(arguments))
            },
                _setupChild: function (b) {
                    var d = b.region;
                    if (d) {
                        this.inherited(arguments);
                        l.add(b.domNode, this.baseClass + "Pane");
                        var f = this.isLeftToRight();
                        "leading" == d && (d = f ? "left" : "right");
                        "trailing" == d && (d = f ? "right" : "left");
                        if ("center" != d && (b.splitter || this.gutters) && !b._splitterWidget)f = b.splitter ? this._splitterClass : v, a.isString(f) && (f = a.getObject(f)), f = new f({id: b.id + "_splitter", container: this, child: b, region: d, live: this.liveSplitters}), f.isSplitter = !0, b._splitterWidget = f, c.place(f.domNode, b.domNode, "after"), f.startup();
                        b.region = d
                    }
                }, layout: function () {
                    this._layoutChildren()
                }, addChild: function (a, b) {
                    this.inherited(arguments);
                    this._started && this.layout()
                }, removeChild: function (a) {
                    var b = a.region, d = a._splitterWidget;
                    d && (d.destroy(), delete a._splitterWidget);
                    this.inherited(arguments);
                    this._started && this._layoutChildren();
                    l.remove(a.domNode, this.baseClass + "Pane");
                    h.set(a.domNode, {top: "auto", bottom: "auto", left: "auto", right: "auto", position: "static"});
                    h.set(a.domNode, "top" == b || "bottom" == b ? "width" : "height", "auto")
                }, getChildren: function () {
                    return e.filter(this.inherited(arguments),
                        function (a) {
                            return!a.isSplitter
                        })
                }, getSplitter: function (a) {
                    return e.filter(this.getChildren(), function (b) {
                        return b.region == a
                    })[0]._splitterWidget
                }, resize: function (a, b) {
                    if (!this.cs || !this.pe) {
                        var d = this.domNode;
                        this.cs = h.getComputedStyle(d);
                        this.pe = g.getPadExtents(d, this.cs);
                        this.pe.r = h.toPixelValue(d, this.cs.paddingRight);
                        this.pe.b = h.toPixelValue(d, this.cs.paddingBottom);
                        h.set(d, "padding", "0px")
                    }
                    this.inherited(arguments)
                }, _layoutChildren: function (a, b) {
                    if (this._borderBox && this._borderBox.h) {
                        var d =
                            e.map(this.getChildren(), function (a, b) {
                                return{pane: a, weight: ["center" == a.region ? Infinity : 0, a.layoutPriority, ("sidebar" == this.design ? 1 : -1) * (/top|bottom/.test(a.region) ? 1 : -1), b]}
                            }, this);
                        d.sort(function (a, b) {
                            for (var d = a.weight, c = b.weight, f = 0; f < d.length; f++)if (d[f] != c[f])return d[f] - c[f];
                            return 0
                        });
                        var c = [];
                        e.forEach(d, function (a) {
                            a = a.pane;
                            c.push(a);
                            a._splitterWidget && c.push(a._splitterWidget)
                        });
                        r.layoutChildren(this.domNode, {l: this.pe.l, t: this.pe.t, w: this._borderBox.w - this.pe.w, h: this._borderBox.h - this.pe.h},
                            c, a, b)
                    }
                }, destroyRecursive: function () {
                    e.forEach(this.getChildren(), function (a) {
                        var b = a._splitterWidget;
                        b && b.destroy();
                        delete a._splitterWidget
                    });
                    this.inherited(arguments)
                }});
            i.ChildWidgetProperties = {region: "", layoutPriority: 0, splitter: !1, minSize: 0, maxSize: Infinity};
            a.extend(p, i.ChildWidgetProperties);
            i._Splitter = q;
            i._Gutter = v;
            return i
        })
    }, "dojo/cookie": function () {
        define("dojo/cookie", ["./_base/kernel", "./regexp"], function (e, j) {
            e.cookie = function (e, l, c) {
                var g = document.cookie, h;
                if (1 == arguments.length)h =
                    (h = g.match(RegExp("(?:^|; )" + j.escapeString(e) + "=([^;]*)"))) ? decodeURIComponent(h[1]) : void 0; else {
                    c = c || {};
                    g = c.expires;
                    if ("number" == typeof g) {
                        var b = new Date;
                        b.setTime(b.getTime() + 864E5 * g);
                        g = c.expires = b
                    }
                    if (g && g.toUTCString)c.expires = g.toUTCString();
                    var l = encodeURIComponent(l), g = e + "=" + l, f;
                    for (f in c)g += "; " + f, b = c[f], !0 !== b && (g += "=" + b);
                    document.cookie = g
                }
                return h
            };
            e.cookie.isSupported = function () {
                if (!("cookieEnabled"in navigator))this("__djCookieTest__", "CookiesAllowed"), navigator.cookieEnabled = "CookiesAllowed" ==
                    this("__djCookieTest__"), navigator.cookieEnabled && this("__djCookieTest__", "", {expires: -1});
                return navigator.cookieEnabled
            };
            return e.cookie
        })
    }, "dojo/regexp": function () {
        define(["./_base/kernel", "./_base/lang"], function (e, j) {
            var i = {};
            j.setObject("dojo.regexp", i);
            i.escapeString = function (e, c) {
                return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (g) {
                    return c && -1 != c.indexOf(g) ? g : "\\" + g
                })
            };
            i.buildGroupRE = function (e, c, g) {
                if (!(e instanceof Array))return c(e);
                for (var h = [], b = 0; b < e.length; b++)h.push(c(e[b]));
                return i.group(h.join("|"), g)
            };
            i.group = function (e, c) {
                return"(" + (c ? "?:" : "") + e + ")"
            };
            return i
        })
    }, "dojo/touch": function () {
        define("./_base/kernel,./_base/lang,./aspect,./dom,./on,./has,./mouse,./ready,./_base/window".split(","), function (e, j, i, l, c, g, h, b, f) {
            function a(a) {
                return function (b, d) {
                    return c(b, a, d)
                }
            }

            var i = g("touch"), k = !1;
            g("ios") && (g = navigator.userAgent.match(/OS ([\d_]+)/) ? RegExp.$1 : "1", k = 5 > parseFloat(g.replace(/_/, ".").replace(/_/g, "")));
            var d, p;
            i && (b(function () {
                p = f.body();
                f.doc.addEventListener("touchstart",
                    function (a) {
                        var b = p;
                        p = a.target;
                        c.emit(b, "dojotouchout", {target: b, relatedTarget: p, bubbles: !0});
                        c.emit(p, "dojotouchover", {target: p, relatedTarget: b, bubbles: !0})
                    }, !0);
                c(f.doc, "touchmove", function (a) {
                    if ((a = f.doc.elementFromPoint(a.pageX - (k ? 0 : f.global.pageXOffset), a.pageY - (k ? 0 : f.global.pageYOffset))) && p !== a)c.emit(p, "dojotouchout", {target: p, relatedTarget: a, bubbles: !0}), c.emit(a, "dojotouchover", {target: a, relatedTarget: p, bubbles: !0}), p = a
                })
            }), d = function (a, b) {
                return c(f.doc, "touchmove", function (d) {
                    (a === f.doc ||
                        l.isDescendant(p, a)) && b.call(this, j.mixin({}, d, {target: p, touches: d.touches, preventDefault: function () {
                        d.preventDefault()
                    }, stopPropagation: function () {
                        d.stopPropagation()
                    }}))
                })
            });
            h = {press: a(i ? "touchstart" : "mousedown"), move: i ? d : a("mousemove"), release: a(i ? "touchend" : "mouseup"), cancel: i ? a("touchcancel") : h.leave, over: a(i ? "dojotouchover" : "mouseover"), out: a(i ? "dojotouchout" : "mouseout"), enter: h._eventHandler(i ? "dojotouchover" : "mouseover"), leave: h._eventHandler(i ? "dojotouchout" : "mouseout")};
            return e.touch = h
        })
    },
    "dijit/_WidgetBase": function () {
        define("require,dojo/_base/array,dojo/aspect,dojo/_base/config,dojo/_base/connect,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/dom-construct,dojo/dom-geometry,dojo/dom-style,dojo/has,dojo/_base/kernel,dojo/_base/lang,dojo/on,dojo/ready,dojo/Stateful,dojo/topic,dojo/_base/window,./Destroyable,./registry".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r, q, v, s, u, t) {
            function y(a) {
                return function (d) {
                    b[d ? "set" : "remove"](this.domNode, a, d);
                    this._set(a,
                        d)
                }
            }

            p.add("dijit-legacy-requires", !m.isAsync);
            p("dijit-legacy-requires") && r(0, function () {
                e(["dijit/_base/manager"])
            });
            var z = {};
            return g("dijit._WidgetBase", [q, u], {id: "", _setIdAttr: "domNode", lang: "", _setLangAttr: y("lang"), dir: "", _setDirAttr: y("dir"), textDir: "", "class": "", _setClassAttr: {node: "domNode", type: "class"}, style: "", title: "", tooltip: "", baseClass: "", srcNodeRef: null, domNode: null, containerNode: null, ownerDocument: null, _setOwnerDocumentAttr: function (a) {
                this._set("ownerDocument", a)
            }, attributeMap: {},
                _blankGif: l.blankGif || e.toUrl("dojo/resources/blank.gif"), postscript: function (a, b) {
                    this.create(a, b)
                }, create: function (a, b) {
                    this.srcNodeRef = h.byId(b);
                    this._connects = [];
                    this._supportingWidgets = [];
                    if (this.srcNodeRef && "string" == typeof this.srcNodeRef.id)this.id = this.srcNodeRef.id;
                    if (a)this.params = a, n.mixin(this, a);
                    this.postMixInProperties();
                    if (!this.id)this.id = t.getUniqueId(this.declaredClass.replace(/\./g, "_")), this.params && delete this.params.id;
                    this.ownerDocument = this.ownerDocument || (this.srcNodeRef ?
                        this.srcNodeRef.ownerDocument : s.doc);
                    this.ownerDocumentBody = s.body(this.ownerDocument);
                    t.add(this);
                    this.buildRendering();
                    var d;
                    if (this.domNode) {
                        this._applyAttributes();
                        var c = this.srcNodeRef;
                        c && c.parentNode && this.domNode !== c && (c.parentNode.replaceChild(this.domNode, c), d = !0);
                        this.domNode.setAttribute("widgetId", this.id)
                    }
                    this.postCreate();
                    d && delete this.srcNodeRef;
                    this._created = !0
                }, _applyAttributes: function () {
                    var a = this.constructor, b = a._setterAttrs;
                    if (!b) {
                        var b = a._setterAttrs = [], d;
                        for (d in this.attributeMap)b.push(d);
                        var a = a.prototype, c;
                        for (c in a)c in this.attributeMap || "_set" + c.replace(/^[a-z]|-[a-zA-Z]/g, function (a) {
                            return a.charAt(a.length - 1).toUpperCase()
                        }) + "Attr"in a && b.push(c)
                    }
                    var f = {}, g;
                    for (g in this.params || {})f[g] = this[g];
                    j.forEach(b, function (a) {
                        a in f || this[a] && this.set(a, this[a])
                    }, this);
                    for (g in f)this.set(g, f[g])
                }, postMixInProperties: function () {
                }, buildRendering: function () {
                    if (!this.domNode)this.domNode = this.srcNodeRef || this.ownerDocument.createElement("div");
                    if (this.baseClass) {
                        var a = this.baseClass.split(" ");
                        this.isLeftToRight() || (a = a.concat(j.map(a, function (a) {
                            return a + "Rtl"
                        })));
                        f.add(this.domNode, a)
                    }
                }, postCreate: function () {
                }, startup: function () {
                    if (!this._started)this._started = !0, j.forEach(this.getChildren(), function (a) {
                        if (!a._started && !a._destroyed && n.isFunction(a.startup))a.startup(), a._started = !0
                    })
                }, destroyRecursive: function (a) {
                    this._beingDestroyed = !0;
                    this.destroyDescendants(a);
                    this.destroy(a)
                }, destroy: function (a) {
                    function b(d) {
                        d.destroyRecursive ? d.destroyRecursive(a) : d.destroy && d.destroy(a)
                    }

                    this._beingDestroyed = !0;
                    this.uninitialize();
                    j.forEach(this._connects, n.hitch(this, "disconnect"));
                    j.forEach(this._supportingWidgets, b);
                    this.domNode && j.forEach(t.findWidgets(this.domNode, this.containerNode), b);
                    this.destroyRendering(a);
                    t.remove(this.id);
                    this._destroyed = !0
                }, destroyRendering: function (d) {
                    this.bgIframe && (this.bgIframe.destroy(d), delete this.bgIframe);
                    this.domNode && (d ? b.remove(this.domNode, "widgetId") : a.destroy(this.domNode), delete this.domNode);
                    this.srcNodeRef && (d || a.destroy(this.srcNodeRef), delete this.srcNodeRef)
                },
                destroyDescendants: function (a) {
                    j.forEach(this.getChildren(), function (b) {
                        b.destroyRecursive && b.destroyRecursive(a)
                    })
                }, uninitialize: function () {
                    return!1
                }, _setStyleAttr: function (a) {
                    var b = this.domNode;
                    n.isObject(a) ? d.set(b, a) : b.style.cssText = b.style.cssText ? b.style.cssText + ("; " + a) : a;
                    this._set("style", a)
                }, _attrToDom: function (a, d, c) {
                    c = 3 <= arguments.length ? c : this.attributeMap[a];
                    j.forEach(n.isArray(c) ? c : [c], function (c) {
                        var g = this[c.node || c || "domNode"];
                        switch (c.type || "attribute") {
                            case "attribute":
                                n.isFunction(d) &&
                                (d = n.hitch(this, d));
                                c = c.attribute ? c.attribute : /^on[A-Z][a-zA-Z]*$/.test(a) ? a.toLowerCase() : a;
                                g.tagName ? b.set(g, c, d) : g.set(c, d);
                                break;
                            case "innerText":
                                g.innerHTML = "";
                                g.appendChild(this.ownerDocument.createTextNode(d));
                                break;
                            case "innerHTML":
                                g.innerHTML = d;
                                break;
                            case "class":
                                f.replace(g, d, this[a])
                        }
                    }, this)
                }, get: function (a) {
                    var b = this._getAttrNames(a);
                    return this[b.g] ? this[b.g]() : this[a]
                }, set: function (a, b) {
                    if ("object" === typeof a) {
                        for (var d in a)this.set(d, a[d]);
                        return this
                    }
                    d = this._getAttrNames(a);
                    var c =
                        this[d.s];
                    if (n.isFunction(c))var f = c.apply(this, Array.prototype.slice.call(arguments, 1)); else {
                        var c = this.focusNode && !n.isFunction(this.focusNode) ? "focusNode" : "domNode", g = this[c].tagName, e;
                        if (!(e = z[g])) {
                            e = this[c];
                            var k = {}, m;
                            for (m in e)k[m.toLowerCase()] = !0;
                            e = z[g] = k
                        }
                        m = a in this.attributeMap ? this.attributeMap[a] : d.s in this ? this[d.s] : d.l in e && "function" != typeof b || /^aria-|^data-|^role$/.test(a) ? c : null;
                        null != m && this._attrToDom(a, b, m);
                        this._set(a, b)
                    }
                    return f || this
                }, _attrPairNames: {}, _getAttrNames: function (a) {
                    var b =
                        this._attrPairNames;
                    if (b[a])return b[a];
                    var d = a.replace(/^[a-z]|-[a-zA-Z]/g, function (a) {
                        return a.charAt(a.length - 1).toUpperCase()
                    });
                    return b[a] = {n: a + "Node", s: "_set" + d + "Attr", g: "_get" + d + "Attr", l: d.toLowerCase()}
                }, _set: function (a, b) {
                    var d = this[a];
                    this[a] = b;
                    this._created && b !== d && (this._watchCallbacks && this._watchCallbacks(a, d, b), this.emit("attrmodified-" + a, {detail: {prevValue: d, newValue: b}}))
                }, emit: function (a, b, d) {
                    b = b || {};
                    if (void 0 === b.bubbles)b.bubbles = !0;
                    if (void 0 === b.cancelable)b.cancelable = !0;
                    if (!b.detail)b.detail =
                    {};
                    b.detail.widget = this;
                    var c, f = this["on" + a];
                    f && (c = f.apply(this, d ? d : [b]));
                    this._started && !this._beingDestroyed && o.emit(this.domNode, a.toLowerCase(), b);
                    return c
                }, on: function (a, b) {
                    var d = this._onMap(a);
                    return d ? i.after(this, d, b, !0) : this.own(o(this.domNode, a, b))[0]
                }, _onMap: function (a) {
                    var b = this.constructor, d = b._onMap;
                    if (!d) {
                        var d = b._onMap = {}, c;
                        for (c in b.prototype)/^on/.test(c) && (d[c.replace(/^on/, "").toLowerCase()] = c)
                    }
                    return d["string" == typeof a && a.toLowerCase()]
                }, toString: function () {
                    return"[Widget " +
                        this.declaredClass + ", " + (this.id || "NO ID") + "]"
                }, getChildren: function () {
                    return this.containerNode ? t.findWidgets(this.containerNode) : []
                }, getParent: function () {
                    return t.getEnclosingWidget(this.domNode.parentNode)
                }, connect: function (a, b, d) {
                    return this.own(c.connect(a, b, this, d))[0]
                }, disconnect: function (a) {
                    a.remove()
                }, subscribe: function (a, b) {
                    return this.own(v.subscribe(a, n.hitch(this, b)))[0]
                }, unsubscribe: function (a) {
                    a.remove()
                }, isLeftToRight: function () {
                    return this.dir ? "ltr" == this.dir : k.isBodyLtr(this.ownerDocument)
                },
                isFocusable: function () {
                    return this.focus && "none" != d.get(this.domNode, "display")
                }, placeAt: function (b, d) {
                    var c = !b.tagName && t.byId(b);
                    c && c.addChild && (!d || "number" === typeof d) ? c.addChild(this, d) : (c = c ? c.containerNode && !/after|before|replace/.test(d || "") ? c.containerNode : c.domNode : h.byId(b, this.ownerDocument), a.place(this.domNode, c, d), !this._started && (this.getParent() || {})._started && this.startup());
                    return this
                }, getTextDir: function (a, b) {
                    return b
                }, applyTextDir: function () {
                }, defer: function (a, b) {
                    var d = setTimeout(n.hitch(this,
                        function () {
                            d = null;
                            this._destroyed || n.hitch(this, a)()
                        }), b || 0);
                    return{remove: function () {
                        d && (clearTimeout(d), d = null);
                        return null
                    }}
                }})
        })
    }, "dojo/Stateful": function () {
        define("dojo/Stateful", ["./_base/declare", "./_base/lang", "./_base/array", "dojo/when"], function (e, j, i, l) {
            return e("dojo.Stateful", null, {_attrPairNames: {}, _getAttrNames: function (c) {
                var g = this._attrPairNames;
                return g[c] ? g[c] : g[c] = {s: "_" + c + "Setter", g: "_" + c + "Getter"}
            }, postscript: function (c) {
                c && this.set(c)
            }, _get: function (c, g) {
                return"function" === typeof this[g.g] ? this[g.g]() : this[c]
            }, get: function (c) {
                return this._get(c, this._getAttrNames(c))
            }, set: function (c, g) {
                if ("object" === typeof c) {
                    for (var e in c)c.hasOwnProperty(e) && "_watchCallbacks" != e && this.set(e, c[e]);
                    return this
                }
                e = this._getAttrNames(c);
                var b = this._get(c, e);
                e = this[e.s];
                var f;
                "function" === typeof e ? f = e.apply(this, Array.prototype.slice.call(arguments, 1)) : this[c] = g;
                if (this._watchCallbacks) {
                    var a = this;
                    l(f, function () {
                        a._watchCallbacks(c, b, g)
                    })
                }
                return this
            }, _changeAttrValue: function (c, g) {
                var e =
                    this.get(c);
                this[c] = g;
                this._watchCallbacks && this._watchCallbacks(c, e, g);
                return this
            }, watch: function (c, g) {
                var e = this._watchCallbacks;
                if (!e)var b = this, e = this._watchCallbacks = function (a, d, c, f) {
                    var g = function (f) {
                        if (f)for (var f = f.slice(), g = 0, e = f.length; g < e; g++)f[g].call(b, a, d, c)
                    };
                    g(e["_" + a]);
                    f || g(e["*"])
                };
                !g && "function" === typeof c ? (g = c, c = "*") : c = "_" + c;
                var f = e[c];
                "object" !== typeof f && (f = e[c] = []);
                f.push(g);
                var a = {};
                a.unwatch = a.remove = function () {
                    var a = i.indexOf(f, g);
                    -1 < a && f.splice(a, 1)
                };
                return a
            }})
        })
    }, "dijit/Destroyable": function () {
        define(["dojo/_base/array",
            "dojo/aspect", "dojo/_base/declare"], function (e, j, i) {
            return i("dijit.Destroyable", null, {destroy: function () {
                this._destroyed = !0
            }, own: function () {
                e.forEach(arguments, function (e) {
                    var c = "destroyRecursive"in e ? "destroyRecursive" : "destroy"in e ? "destroy" : "remove", g = j.before(this, "destroy", function (g) {
                        e[c](g)
                    });
                    j.after(e, c, function () {
                        g.remove()
                    }, !0)
                }, this);
                return arguments
            }})
        })
    }, "dijit/registry": function () {
        define(["dojo/_base/array", "dojo/sniff", "dojo/_base/unload", "dojo/_base/window", "./main"], function (e, j, i, l, c) {
            var g = {}, h = {}, b = {length: 0, add: function (b) {
                if (h[b.id])throw Error("Tried to register widget with id==" + b.id + " but that id is already registered");
                h[b.id] = b;
                this.length++
            }, remove: function (b) {
                h[b] && (delete h[b], this.length--)
            }, byId: function (b) {
                return"string" == typeof b ? h[b] : b
            }, byNode: function (b) {
                return h[b.getAttribute("widgetId")]
            }, toArray: function () {
                var b = [], a;
                for (a in h)b.push(h[a]);
                return b
            }, getUniqueId: function (b) {
                var a;
                do a = b + "_" + (b in g ? ++g[b] : g[b] = 0); while (h[a]);
                return"dijit" == c._scopeName ?
                    a : c._scopeName + "_" + a
            }, findWidgets: function (b, a) {
                function c(b) {
                    for (b = b.firstChild; b; b = b.nextSibling)if (1 == b.nodeType) {
                        var f = b.getAttribute("widgetId");
                        f ? (f = h[f]) && d.push(f) : b !== a && c(b)
                    }
                }

                var d = [];
                c(b);
                return d
            }, _destroyAll: function () {
                c._curFocus = null;
                c._prevFocus = null;
                c._activeStack = [];
                e.forEach(b.findWidgets(l.body()), function (b) {
                    b._destroyed || (b.destroyRecursive ? b.destroyRecursive() : b.destroy && b.destroy())
                })
            }, getEnclosingWidget: function (b) {
                for (; b;) {
                    var a = b.getAttribute && b.getAttribute("widgetId");
                    if (a)return h[a];
                    b = b.parentNode
                }
                return null
            }, _hash: h};
            return c.registry = b
        })
    }, "dijit/main": function () {
        define(["dojo/_base/kernel"], function (e) {
            return e.dijit
        })
    }, "dijit/_Widget": function () {
        define("dojo/aspect,dojo/_base/config,dojo/_base/connect,dojo/_base/declare,dojo/has,dojo/_base/kernel,dojo/_base/lang,dojo/query,dojo/ready,./registry,./_WidgetBase,./_OnDijitClickMixin,./_FocusMixin,dojo/uacss,./hccss".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p) {
            function m() {
            }

            function n(a) {
                return function (b, d, c, f) {
                    return b && "string" == typeof d && b[d] == m ? b.on(d.substring(2).toLowerCase(), h.hitch(c, f)) : a.apply(i, arguments)
                }
            }

            e.around(i, "connect", n);
            g.connect && e.around(g, "connect", n);
            e = l("dijit._Widget", [k, d, p], {onClick: m, onDblClick: m, onKeyDown: m, onKeyPress: m, onKeyUp: m, onMouseDown: m, onMouseMove: m, onMouseOut: m, onMouseOver: m, onMouseLeave: m, onMouseEnter: m, onMouseUp: m, constructor: function (a) {
                this._toConnect = {};
                for (var b in a)this[b] === m && (this._toConnect[b.replace(/^on/, "").toLowerCase()] = a[b], delete a[b])
            }, postCreate: function () {
                this.inherited(arguments);
                for (var a in this._toConnect)this.on(a, this._toConnect[a]);
                delete this._toConnect
            }, on: function (a, b) {
                return this[this._onMap(a)] === m ? i.connect(this.domNode, a.toLowerCase(), this, b) : this.inherited(arguments)
            }, _setFocusedAttr: function (a) {
                this._focused = a;
                this._set("focused", a)
            }, setAttribute: function (a, b) {
                g.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
                this.set(a, b)
            }, attr: function (a, b) {
                if (j.isDebug) {
                    var d = arguments.callee._ach || (arguments.callee._ach =
                    {}), c = (arguments.callee.caller || "unknown caller").toString();
                    d[c] || (g.deprecated(this.declaredClass + "::attr() is deprecated. Use get() or set() instead, called from " + c, "", "2.0"), d[c] = !0)
                }
                return 2 <= arguments.length || "object" === typeof a ? this.set.apply(this, arguments) : this.get(a)
            }, getDescendants: function () {
                g.deprecated(this.declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
                return this.containerNode ? b("[widgetId]", this.containerNode).map(a.byNode) : []
            }, _onShow: function () {
                this.onShow()
            },
                onShow: function () {
                }, onHide: function () {
                }, onClose: function () {
                    return!0
                }});
            c("dijit-legacy-requires") && f(0, function () {
                require(["dijit/_base"])
            });
            return e
        })
    }, "dijit/_OnDijitClickMixin": function () {
        define("dojo/on,dojo/_base/array,dojo/keys,dojo/_base/declare,dojo/has,dojo/_base/unload,dojo/_base/window,./a11yclick".split(","), function (e, j, i, l, c, g, h, b) {
            e = l("dijit._OnDijitClickMixin", null, {connect: function (c, a, g) {
                return this.inherited(arguments, [c, "ondijitclick" == a ? b : a, g])
            }});
            e.a11yclick = b;
            return e
        })
    }, "dijit/a11yclick": function () {
        define("dojo/on,dojo/_base/array,dojo/keys,dojo/_base/declare,dojo/has,dojo/_base/unload,dojo/_base/window".split(","),
            function (e, j, i, l, c, g, h) {
                function b(a) {
                    return(a.keyCode === i.ENTER || a.keyCode === i.SPACE) && !a.ctrlKey && !a.shiftKey && !a.altKey && !a.metaKey
                }

                var f = null;
                c("dom-addeventlistener") ? h.doc.addEventListener("keydown", function (a) {
                    f = a.target
                }, !0) : function () {
                    var a = function (a) {
                        f = a.srcElement
                    };
                    h.doc.attachEvent("onkeydown", a);
                    g.addOnWindowUnload(function () {
                        h.doc.detachEvent("onkeydown", a)
                    })
                }();
                return function (a, g) {
                    if (/input|button/i.test(a.nodeName))return e(a, "click", g);
                    var d = [e(a, "keydown", function (a) {
                        if (b(a))f =
                            a.target, a.preventDefault()
                    }), e(a, "keyup", function (a) {
                        b(a) && a.target == f && (f = null, e.emit(a.target, "click", {cancelable: !0, bubbles: !0}))
                    }), e(a, "click", function (a) {
                        g.call(this, a)
                    })];
                    if (c("touch")) {
                        var h;
                        d.push(e(a, "touchend", function (a) {
                            var b = a.target;
                            h = setTimeout(function () {
                                h = null;
                                e.emit(b, "click", {cancelable: !0, bubbles: !0})
                            }, 600)
                        }), e(a, "click", function () {
                            h && clearTimeout(h)
                        }))
                    }
                    return{remove: function () {
                        j.forEach(d, function (a) {
                            a.remove()
                        });
                        h && (clearTimeout(h), h = null)
                    }}
                }
            })
    }, "dijit/_FocusMixin": function () {
        define(["./focus",
            "./_WidgetBase", "dojo/_base/declare", "dojo/_base/lang"], function (e, j, i, l) {
            l.extend(j, {focused: !1, onFocus: function () {
            }, onBlur: function () {
            }, _onFocus: function () {
                this.onFocus()
            }, _onBlur: function () {
                this.onBlur()
            }});
            return i("dijit._FocusMixin", null, {_focusManager: e})
        })
    }, "dijit/focus": function () {
        define("dojo/aspect,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-construct,dojo/Evented,dojo/_base/lang,dojo/on,dojo/ready,dojo/sniff,dojo/Stateful,dojo/_base/unload,dojo/_base/window,dojo/window,./a11y,./registry,./main".split(","),
            function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r) {
                var q = new (j([k, g], {curNode: null, activeStack: [], constructor: function () {
                    var a = h.hitch(this, function (a) {
                        i.isDescendant(this.curNode, a) && this.set("curNode", null);
                        i.isDescendant(this.prevNode, a) && this.set("prevNode", null)
                    });
                    e.before(c, "empty", a);
                    e.before(c, "destroy", a)
                }, registerIframe: function (a) {
                    return this.registerWin(a.contentWindow, a)
                }, registerWin: function (b, d) {
                    var c = this, f = function (b) {
                        c._justMouseDowned = !0;
                        setTimeout(function () {
                            c._justMouseDowned = !1
                        }, 0);
                        if (!a("ie") || !b || !(b.srcElement && null == b.srcElement.parentNode))c._onTouchNode(d || b.target || b.srcElement, "mouse")
                    }, g = a("ie") ? b.document.documentElement : b.document;
                    if (g) {
                        if (a("ie")) {
                            b.document.body.attachEvent("onmousedown", f);
                            var e = function (a) {
                                var b = a.srcElement.tagName.toLowerCase();
                                "#document" == b || "body" == b || (n.isTabNavigable(a.srcElement) ? c._onFocusNode(d || a.srcElement) : c._onTouchNode(d || a.srcElement))
                            };
                            g.attachEvent("onfocusin", e);
                            var k = function (a) {
                                c._onBlurNode(d || a.srcElement)
                            };
                            g.attachEvent("onfocusout",
                                k);
                            return{remove: function () {
                                b.document.detachEvent("onmousedown", f);
                                g.detachEvent("onfocusin", e);
                                g.detachEvent("onfocusout", k);
                                g = null
                            }}
                        }
                        g.body.addEventListener("mousedown", f, !0);
                        g.body.addEventListener("touchstart", f, !0);
                        var m = function (a) {
                            c._onFocusNode(d || a.target)
                        };
                        g.addEventListener("focus", m, !0);
                        var h = function (a) {
                            c._onBlurNode(d || a.target)
                        };
                        g.addEventListener("blur", h, !0);
                        return{remove: function () {
                            g.body.removeEventListener("mousedown", f, !0);
                            g.body.removeEventListener("touchstart", f, !0);
                            g.removeEventListener("focus",
                                m, !0);
                            g.removeEventListener("blur", h, !0);
                            g = null
                        }}
                    }
                }, _onBlurNode: function () {
                    this._clearFocusTimer && clearTimeout(this._clearFocusTimer);
                    this._clearFocusTimer = setTimeout(h.hitch(this, function () {
                        this.set("prevNode", this.curNode);
                        this.set("curNode", null)
                    }), 0);
                    if (!this._justMouseDowned)this._clearActiveWidgetsTimer && clearTimeout(this._clearActiveWidgetsTimer), this._clearActiveWidgetsTimer = setTimeout(h.hitch(this, function () {
                        delete this._clearActiveWidgetsTimer;
                        this._setStack([])
                    }), 0)
                }, _onTouchNode: function (a, b) {
                    this._clearActiveWidgetsTimer && (clearTimeout(this._clearActiveWidgetsTimer), delete this._clearActiveWidgetsTimer);
                    var d = [];
                    try {
                        for (; a;) {
                            var c = l.get(a, "dijitPopupParent");
                            if (c)a = o.byId(c).domNode; else if (a.tagName && "body" == a.tagName.toLowerCase()) {
                                if (a === p.body())break;
                                a = m.get(a.ownerDocument).frameElement
                            } else {
                                var f = a.getAttribute && a.getAttribute("widgetId"), g = f && o.byId(f);
                                g && !("mouse" == b && g.get("disabled")) && d.unshift(f);
                                a = a.parentNode
                            }
                        }
                    } catch (e) {
                    }
                    this._setStack(d, b)
                }, _onFocusNode: function (a) {
                    a &&
                        9 != a.nodeType && (this._clearFocusTimer && (clearTimeout(this._clearFocusTimer), delete this._clearFocusTimer), this._onTouchNode(a), a != this.curNode && (this.set("prevNode", this.curNode), this.set("curNode", a)))
                }, _setStack: function (a, b) {
                    var d = this.activeStack;
                    this.set("activeStack", a);
                    for (var c = 0; c < Math.min(d.length, a.length) && !(d[c] != a[c]); c++);
                    for (var f, g = d.length - 1; g >= c; g--)if (f = o.byId(d[g]))f._hasBeenBlurred = !0, f.set("focused", !1), f._focusManager == this && f._onBlur(b), this.emit("widget-blur", f, b);
                    for (g =
                             c; g < a.length; g++)if (f = o.byId(a[g]))f.set("focused", !0), f._focusManager == this && f._onFocus(b), this.emit("widget-focus", f, b)
                }, focus: function (a) {
                    if (a)try {
                        a.focus()
                    } catch (b) {
                    }
                }}));
                f(function () {
                    var b = q.registerWin(m.get(p.doc));
                    a("ie") && d.addOnWindowUnload(function () {
                        b && (b.remove(), b = null)
                    })
                });
                r.focus = function (a) {
                    q.focus(a)
                };
                for (var v in q)/^_/.test(v) || (r.focus[v] = "function" == typeof q[v] ? h.hitch(q, v) : q[v]);
                q.watch(function (a, b, d) {
                    r.focus[a] = d
                });
                return q
            })
    }, "dojo/window": function () {
        define("./_base/lang,./sniff,./_base/window,./dom,./dom-geometry,./dom-style".split(","),
            function (e, j, i, l, c, g) {
                var h = {getBox: function (b) {
                    var b = b || i.doc, f = "BackCompat" == b.compatMode ? i.body(b) : b.documentElement, a = c.docScroll(b);
                    if (j("touch"))var g = h.get(b), b = g.innerWidth || f.clientWidth, f = g.innerHeight || f.clientHeight; else b = f.clientWidth, f = f.clientHeight;
                    return{l: a.x, t: a.y, w: b, h: f}
                }, get: function (b) {
                    if (j("ie") && h !== document.parentWindow) {
                        b.parentWindow.execScript("document._parentWindow = window;", "Javascript");
                        var c = b._parentWindow;
                        b._parentWindow = null;
                        return c
                    }
                    return b.parentWindow || b.defaultView
                },
                    scrollIntoView: function (b, f) {
                        try {
                            var b = l.byId(b), a = b.ownerDocument || i.doc, e = i.body(a), d = a.documentElement || e.parentNode, h = j("ie"), m = j("webkit");
                            if ((!j("mozilla") && !h && !m && !j("opera") || b == e || b == d) && "undefined" != typeof b.scrollIntoView)b.scrollIntoView(!1); else {
                                var n = "BackCompat" == a.compatMode, o = 9 <= h && "frameElement"in b.ownerDocument.parentWindow ? 0 < d.clientHeight && 0 < d.clientWidth && (0 == e.clientHeight || 0 == e.clientWidth || e.clientHeight > d.clientHeight || e.clientWidth > d.clientWidth) ? d : e : n ? e : d, m = m ? e : o, r = o.clientWidth,
                                    q = o.clientHeight, v = !c.isBodyLtr(a), s = f || c.position(b), u = b.parentNode, a = function (a) {
                                        return 6 >= h || h && n ? !1 : "fixed" == g.get(a, "position").toLowerCase()
                                    };
                                if (!a(b))for (; u;) {
                                    u == e && (u = m);
                                    var t = c.position(u), y = a(u);
                                    if (u == m) {
                                        t.w = r;
                                        t.h = q;
                                        m == d && h && v && (t.x += m.offsetWidth - t.w);
                                        if (0 > t.x || !h)t.x = 0;
                                        if (0 > t.y || !h)t.y = 0
                                    } else {
                                        var z = c.getPadBorderExtents(u);
                                        t.w -= z.w;
                                        t.h -= z.h;
                                        t.x += z.l;
                                        t.y += z.t;
                                        var I = u.clientWidth, J = t.w - I;
                                        if (0 < I && 0 < J)t.w = I, t.x += v && (h || u.clientLeft > z.l) ? J : 0;
                                        I = u.clientHeight;
                                        J = t.h - I;
                                        if (0 < I && 0 < J)t.h = I
                                    }
                                    if (y) {
                                        if (0 >
                                            t.y)t.h += t.y, t.y = 0;
                                        if (0 > t.x)t.w += t.x, t.x = 0;
                                        if (t.y + t.h > q)t.h = q - t.y;
                                        if (t.x + t.w > r)t.w = r - t.x
                                    }
                                    var N = s.x - t.x, E = s.y - Math.max(t.y, 0), S = N + s.w - t.w, Q = E + s.h - t.h;
                                    if (0 < S * N) {
                                        var B = Math[0 > N ? "max" : "min"](N, S);
                                        if (v && (8 == h && !n || 9 <= h))B = -B;
                                        s.x += u.scrollLeft;
                                        u.scrollLeft += B;
                                        s.x -= u.scrollLeft
                                    }
                                    0 < Q * E && (s.y += u.scrollTop, u.scrollTop += Math[0 > E ? "max" : "min"](E, Q), s.y -= u.scrollTop);
                                    u = u != m && !y && u.parentNode
                                }
                            }
                        } catch (A) {
                            b.scrollIntoView(!1)
                        }
                    }};
                e.setObject("dojo.window", h);
                return h
            })
    }, "dijit/a11y": function () {
        define("dojo/_base/array,dojo/_base/config,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-style,dojo/sniff,./main".split(","),
            function (e, j, i, l, c, g, h, b) {
                var f = b._isElementShown = function (a) {
                    var b = g.get(a);
                    return"hidden" != b.visibility && "collapsed" != b.visibility && "none" != b.display && "hidden" != c.get(a, "type")
                };
                b.hasDefaultTabStop = function (a) {
                    switch (a.nodeName.toLowerCase()) {
                        case "a":
                            return c.has(a, "href");
                        case "area":
                        case "button":
                        case "input":
                        case "object":
                        case "select":
                        case "textarea":
                            return!0;
                        case "iframe":
                            var b;
                            try {
                                var f = a.contentDocument;
                                if ("designMode"in f && "on" == f.designMode)return!0;
                                b = f.body
                            } catch (g) {
                                try {
                                    b = a.contentWindow.document.body
                                } catch (e) {
                                    return!1
                                }
                            }
                            return b &&
                                ("true" == b.contentEditable || b.firstChild && "true" == b.firstChild.contentEditable);
                        default:
                            return"true" == a.contentEditable
                    }
                };
                var a = b.isTabNavigable = function (a) {
                    return c.get(a, "disabled") ? !1 : c.has(a, "tabIndex") ? 0 <= c.get(a, "tabIndex") : b.hasDefaultTabStop(a)
                };
                b._getTabNavigable = function (b) {
                    function d(a) {
                        return a && "input" == a.tagName.toLowerCase() && a.type && "radio" == a.type.toLowerCase() && a.name && a.name.toLowerCase()
                    }

                    var g, e, l, i, j, q, v = {}, s = function (b) {
                        for (b = b.firstChild; b; b = b.nextSibling)if (!(1 != b.nodeType ||
                            h("ie") && "HTML" !== b.scopeName || !f(b))) {
                            if (a(b)) {
                                var k = +c.get(b, "tabIndex");
                                if (!c.has(b, "tabIndex") || 0 == k)g || (g = b), e = b; else if (0 < k) {
                                    if (!l || k < i)i = k, l = b;
                                    if (!j || k >= q)q = k, j = b
                                }
                                k = d(b);
                                c.get(b, "checked") && k && (v[k] = b)
                            }
                            "SELECT" != b.nodeName.toUpperCase() && s(b)
                        }
                    };
                    f(b) && s(b);
                    return{first: v[d(g)] || g, last: v[d(e)] || e, lowest: v[d(l)] || l, highest: v[d(j)] || j}
                };
                b.getFirstInTabbingOrder = function (a, d) {
                    var c = b._getTabNavigable(l.byId(a, d));
                    return c.lowest ? c.lowest : c.first
                };
                b.getLastInTabbingOrder = function (a, d) {
                    var c = b._getTabNavigable(l.byId(a,
                        d));
                    return c.last ? c.last : c.highest
                };
                return{hasDefaultTabStop: b.hasDefaultTabStop, isTabNavigable: b.isTabNavigable, _getTabNavigable: b._getTabNavigable, getFirstInTabbingOrder: b.getFirstInTabbingOrder, getLastInTabbingOrder: b.getLastInTabbingOrder}
            })
    }, "dojo/uacss": function () {
        define(["./dom-geometry", "./_base/lang", "./ready", "./sniff", "./_base/window"], function (e, j, i, l, c) {
            var g = c.doc.documentElement, h = l("ie"), b = l("opera"), f = Math.floor, a = l("ff"), c = e.boxModel.replace(/-/, ""), h = {dj_ie: h, dj_ie6: 6 == f(h), dj_ie7: 7 ==
                f(h), dj_ie8: 8 == f(h), dj_ie9: 9 == f(h), dj_quirks: l("quirks"), dj_iequirks: h && l("quirks"), dj_opera: b, dj_khtml: l("khtml"), dj_webkit: l("webkit"), dj_safari: l("safari"), dj_chrome: l("chrome"), dj_gecko: l("mozilla"), dj_ff3: 3 == f(a)};
            h["dj_" + c] = !0;
            var k = "", d;
            for (d in h)h[d] && (k += d + " ");
            g.className = j.trim(g.className + " " + k);
            i(90, function () {
                if (!e.isBodyLtr()) {
                    var a = "dj_rtl dijitRtl " + k.replace(/ /g, "-rtl ");
                    g.className = j.trim(g.className + " " + a + "dj_rtl dijitRtl " + k.replace(/ /g, "-rtl "))
                }
            });
            return l
        })
    }, "dijit/hccss": function () {
        define(["dojo/dom-class",
            "dojo/hccss", "dojo/ready", "dojo/_base/window"], function (e, j, i, l) {
            i(90, function () {
                j("highcontrast") && e.add(l.body(), "dijit_a11y")
            });
            return j
        })
    }, "dojo/hccss": function () {
        define("require,./_base/config,./dom-class,./dom-construct,./dom-style,./has,./ready,./_base/window".split(","), function (e, j, i, l, c, g, h, b) {
            g.add("highcontrast", function () {
                var f = b.doc.createElement("div");
                f.style.cssText = "border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url(" + (j.blankGif ||
                    e.toUrl("./resources/blank.gif")) + ");";
                b.body().appendChild(f);
                var a = c.getComputedStyle(f), g = a.backgroundImage, a = a.borderTopColor == a.borderRightColor || g && ("none" == g || "url(invalid-url:)" == g);
                l.destroy(f);
                return a
            });
            h(90, function () {
                g("highcontrast") && i.add(b.body(), "dj_a11y")
            });
            return g
        })
    }, "dijit/_TemplatedMixin": function () {
        define("dojo/_base/lang,dojo/touch,./_WidgetBase,dojo/string,dojo/cache,dojo/_base/array,dojo/_base/declare,dojo/dom-construct,dojo/sniff,dojo/_base/unload".split(","), function (e, j, i, l, c, g, h, b, f, a) {
            var k = h("dijit._TemplatedMixin", null, {templateString: null, templatePath: null, _skipNodeCache: !1, _earlyTemplatedStartup: !1, constructor: function () {
                this._attachPoints = [];
                this._attachEvents = []
            }, _stringRepl: function (a) {
                var b = this.declaredClass, c = this;
                return l.substitute(a, this, function (a, d) {
                    "!" == d.charAt(0) && (a = e.getObject(d.substr(1), !1, c));
                    if ("undefined" == typeof a)throw Error(b + " template:" + d);
                    return null == a ? "" : "!" == d.charAt(0) ? a : a.toString().replace(/"/g, "&quot;")
                }, this)
            }, buildRendering: function () {
                if (!this.templateString)this.templateString =
                    c(this.templatePath, {sanitize: !0});
                var a = k.getCachedTemplate(this.templateString, this._skipNodeCache, this.ownerDocument), f;
                if (e.isString(a)) {
                    if (f = b.toDom(this._stringRepl(a), this.ownerDocument), 1 != f.nodeType)throw Error("Invalid template: " + a);
                } else f = a.cloneNode(!0);
                this.domNode = f;
                this.inherited(arguments);
                this._attachTemplateNodes(f, function (a, b) {
                    return a.getAttribute(b)
                });
                this._beforeFillContent();
                this._fillContent(this.srcNodeRef)
            }, _beforeFillContent: function () {
            }, _fillContent: function (a) {
                var b =
                    this.containerNode;
                if (a && b)for (; a.hasChildNodes();)b.appendChild(a.firstChild)
            }, _attachTemplateNodes: function (a, b) {
                for (var c = e.isArray(a) ? a : a.all || a.getElementsByTagName("*"), f = e.isArray(a) ? 0 : -1; 0 > f || c[f]; f++) {
                    var g = -1 == f ? a : c[f];
                    if (!this.widgetsInTemplate || !b(g, "dojoType") && !b(g, "data-dojo-type")) {
                        var k = b(g, "dojoAttachPoint") || b(g, "data-dojo-attach-point");
                        if (k)for (var h = k.split(/\s*,\s*/); k = h.shift();)e.isArray(this[k]) ? this[k].push(g) : this[k] = g, this._attachPoints.push(k);
                        if (k = b(g, "dojoAttachEvent") ||
                            b(g, "data-dojo-attach-event"))for (var h = k.split(/\s*,\s*/), l = e.trim; k = h.shift();)if (k) {
                            var i = null;
                            -1 != k.indexOf(":") ? (i = k.split(":"), k = l(i[0]), i = l(i[1])) : k = l(k);
                            i || (i = k);
                            this._attachEvents.push(this.connect(g, j[k] || k, i))
                        }
                    }
                }
            }, destroyRendering: function () {
                g.forEach(this._attachPoints, function (a) {
                    delete this[a]
                }, this);
                this._attachPoints = [];
                g.forEach(this._attachEvents, this.disconnect, this);
                this._attachEvents = [];
                this.inherited(arguments)
            }});
            k._templateCache = {};
            k.getCachedTemplate = function (a, c, f) {
                var g =
                    k._templateCache, e = a, h = g[e];
                if (h) {
                    try {
                        if (!h.ownerDocument || h.ownerDocument == (f || document))return h
                    } catch (i) {
                    }
                    b.destroy(h)
                }
                a = l.trim(a);
                if (c || a.match(/\$\{([^\}]+)\}/g))return g[e] = a;
                c = b.toDom(a, f);
                if (1 != c.nodeType)throw Error("Invalid template: " + a);
                return g[e] = c
            };
            f("ie") && a.addOnWindowUnload(function () {
                var a = k._templateCache, c;
                for (c in a) {
                    var f = a[c];
                    "object" == typeof f && b.destroy(f);
                    delete a[c]
                }
            });
            e.extend(i, {dojoAttachEvent: "", dojoAttachPoint: ""});
            return k
        })
    }, "dojo/string": function () {
        define(["./_base/kernel",
            "./_base/lang"], function (e, j) {
            var i = {};
            j.setObject("dojo.string", i);
            i.rep = function (e, c) {
                if (0 >= c || !e)return"";
                for (var g = []; ;) {
                    c & 1 && g.push(e);
                    if (!(c >>= 1))break;
                    e += e
                }
                return g.join("")
            };
            i.pad = function (e, c, g, h) {
                g || (g = "0");
                e = "" + e;
                c = i.rep(g, Math.ceil((c - e.length) / g.length));
                return h ? e + c : c + e
            };
            i.substitute = function (i, c, g, h) {
                h = h || e.global;
                g = g ? j.hitch(h, g) : function (b) {
                    return b
                };
                return i.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (b, f, a) {
                    b = j.getObject(f, !1, c);
                    a && (b = j.getObject(a, !1, h).call(h, b,
                        f));
                    return g(b, f).toString()
                })
            };
            i.trim = String.prototype.trim ? j.trim : function (e) {
                for (var e = e.replace(/^\s+/, ""), c = e.length - 1; 0 <= c; c--)if (/\S/.test(e.charAt(c))) {
                    e = e.substring(0, c + 1);
                    break
                }
                return e
            };
            return i
        })
    }, "dojo/cache": function () {
        define("dojo/cache", ["./_base/kernel", "./text"], function (e) {
            return e.cache
        })
    }, "dojo/text": function () {
        define(["./_base/kernel", "require", "./has", "./_base/xhr"], function (e, j, i, l) {
            var c;
            c = function (a, b, d) {
                l("GET", {url: a, sync: !!b, load: d, headers: e.config.textPluginHeaders ||
                {}})
            };
            var g = {}, h = function (a) {
                if (a) {
                    var a = a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, ""), b = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
                    b && (a = b[1])
                } else a = "";
                return a
            }, b = {}, f = {};
            e.cache = function (a, b, d) {
                var f;
                "string" == typeof a ? /\//.test(a) ? (f = a, d = b) : f = j.toUrl(a.replace(/\./g, "/") + (b ? "/" + b : "")) : (f = a + "", d = b);
                a = void 0 != d && "string" != typeof d ? d.value : d;
                d = d && d.sanitize;
                if ("string" == typeof a)return g[f] = a, d ? h(a) : a;
                if (null === a)return delete g[f], null;
                f in g || c(f, !0, function (a) {
                    g[f] =
                        a
                });
                return d ? h(g[f]) : g[f]
            };
            return{dynamic: !0, normalize: function (a, b) {
                var d = a.split("!"), c = d[0];
                return(/^\./.test(c) ? b(c) : c) + (d[1] ? "!" + d[1] : "")
            }, load: function (a, e, d) {
                var a = a.split("!"), i = 1 < a.length, m = a[0], l = e.toUrl(a[0]), a = "url:" + l, j = b, r = function (a) {
                    d(i ? h(a) : a)
                };
                m in g ? j = g[m] : a in e.cache ? j = e.cache[a] : l in g && (j = g[l]);
                if (j === b)if (f[l])f[l].push(r); else {
                    var q = f[l] = [r];
                    c(l, !e.async, function (a) {
                        g[m] = g[l] = a;
                        for (var b = 0; b < q.length;)q[b++](a);
                        delete f[l]
                    })
                } else r(j)
            }}
        })
    }, "dijit/layout/_LayoutWidget": function () {
        define("dojo/_base/lang,../_Widget,../_Container,../_Contained,../Viewport,dojo/_base/declare,dojo/dom-class,dojo/dom-geometry,dojo/dom-style".split(","),
            function (e, j, i, l, c, g, h, b, f) {
                return g("dijit.layout._LayoutWidget", [j, i, l], {baseClass: "dijitLayoutContainer", isLayoutContainer: !0, buildRendering: function () {
                    this.inherited(arguments);
                    h.add(this.domNode, "dijitContainer")
                }, startup: function () {
                    if (!this._started) {
                        this.inherited(arguments);
                        var a = this.getParent && this.getParent();
                        if (!a || !a.isLayoutContainer)this.resize(), this.own(c.on("resize", e.hitch(this, "resize")))
                    }
                }, resize: function (a, c) {
                    var d = this.domNode;
                    a && b.setMarginBox(d, a);
                    var g = c || {};
                    e.mixin(g, a ||
                    {});
                    if (!("h"in g) || !("w"in g))g = e.mixin(b.getMarginBox(d), g);
                    var m = f.getComputedStyle(d), h = b.getMarginExtents(d, m), i = b.getBorderExtents(d, m), g = this._borderBox = {w: g.w - (h.w + i.w), h: g.h - (h.h + i.h)}, h = b.getPadExtents(d, m);
                    this._contentBox = {l: f.toPixelValue(d, m.paddingLeft), t: f.toPixelValue(d, m.paddingTop), w: g.w - h.w, h: g.h - h.h};
                    this.layout()
                }, layout: function () {
                }, _setupChild: function (a) {
                    h.add(a.domNode, this.baseClass + "-child " + (a.baseClass ? this.baseClass + "-" + a.baseClass : ""))
                }, addChild: function (a, b) {
                    this.inherited(arguments);
                    this._started && this._setupChild(a)
                }, removeChild: function (a) {
                    h.remove(a.domNode, this.baseClass + "-child" + (a.baseClass ? " " + this.baseClass + "-" + a.baseClass : ""));
                    this.inherited(arguments)
                }})
            })
    }, "dijit/_Container": function () {
        define(["dojo/_base/array", "dojo/_base/declare", "dojo/dom-construct"], function (e, j, i) {
            return j("dijit._Container", null, {buildRendering: function () {
                this.inherited(arguments);
                if (!this.containerNode)this.containerNode = this.domNode
            }, addChild: function (e, c) {
                var g = this.containerNode;
                if (c && "number" == typeof c) {
                    var h = this.getChildren();
                    if (h && h.length >= c)g = h[c - 1].domNode, c = "after"
                }
                i.place(e.domNode, g, c);
                this._started && !e._started && e.startup()
            }, removeChild: function (e) {
                "number" == typeof e && (e = this.getChildren()[e]);
                if (e)(e = e.domNode) && e.parentNode && e.parentNode.removeChild(e)
            }, hasChildren: function () {
                return 0 < this.getChildren().length
            }, _getSiblingOfChild: function (i, c) {
                var g = this.getChildren(), h = e.indexOf(this.getChildren(), i);
                return g[h + c]
            }, getIndexOfChild: function (i) {
                return e.indexOf(this.getChildren(),
                    i)
            }})
        })
    }, "dijit/_Contained": function () {
        define(["dojo/_base/declare", "./registry"], function (e, j) {
            return e("dijit._Contained", null, {_getSibling: function (e) {
                var l = this.domNode;
                do l = l[e + "Sibling"]; while (l && 1 != l.nodeType);
                return l && j.byNode(l)
            }, getPreviousSibling: function () {
                return this._getSibling("previous")
            }, getNextSibling: function () {
                return this._getSibling("next")
            }, getIndexInParent: function () {
                var e = this.getParent();
                return!e || !e.getIndexOfChild ? -1 : e.getIndexOfChild(this)
            }})
        })
    }, "dijit/Viewport": function () {
        define("dojo/Evented,dojo/on,dojo/ready,dojo/sniff,dojo/_base/window,dojo/window".split(","),
            function (e, j, i, l, c, g) {
                var h = new e;
                i(200, function () {
                    var b = g.getBox();
                    h._rlh = j(c.global, "resize", function () {
                        var a = g.getBox();
                        b.h == a.h && b.w == a.w || (b = a, h.emit("resize"))
                    });
                    if (8 == l("ie")) {
                        var f = screen.deviceXDPI;
                        setInterval(function () {
                            if (screen.deviceXDPI != f)f = screen.deviceXDPI, h.emit("resize")
                        }, 500)
                    }
                });
                return h
            })
    }, "dijit/layout/utils": function () {
        define("dojo/_base/array,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/lang,../main".split(","), function (e, j, i, l, c, g) {
            function h(b, f) {
                var a = b.resize ?
                    b.resize(f) : i.setMarginBox(b.domNode, f);
                a ? c.mixin(b, a) : (c.mixin(b, i.getMarginBox(b.domNode)), c.mixin(b, f))
            }

            g = c.getObject("layout", !0, g);
            g.marginBox2contentBox = function (b, c) {
                var a = l.getComputedStyle(b), g = i.getMarginExtents(b, a), d = i.getPadBorderExtents(b, a);
                return{l: l.toPixelValue(b, a.paddingLeft), t: l.toPixelValue(b, a.paddingTop), w: c.w - (g.w + d.w), h: c.h - (g.h + d.h)}
            };
            g.layoutChildren = function (b, f, a, g, d) {
                f = c.mixin({}, f);
                j.add(b, "dijitLayoutContainer");
                a = e.filter(a,function (a) {
                    return"center" != a.region && "client" !=
                        a.layoutAlign
                }).concat(e.filter(a, function (a) {
                        return"center" == a.region || "client" == a.layoutAlign
                    }));
                e.forEach(a, function (a) {
                    var b = a.domNode, c = a.region || a.layoutAlign;
                    if (!c)throw Error("No region setting for " + a.id);
                    var e = b.style;
                    e.left = f.l + "px";
                    e.top = f.t + "px";
                    e.position = "absolute";
                    j.add(b, "dijitAlign" + (c.substring(0, 1).toUpperCase() + c.substring(1)));
                    b = {};
                    g && g == a.id && (b["top" == a.region || "bottom" == a.region ? "h" : "w"] = d);
                    "top" == c || "bottom" == c ? (b.w = f.w, h(a, b), f.h -= a.h, "top" == c ? f.t += a.h : e.top = f.t + f.h + "px") :
                        "left" == c || "right" == c ? (b.h = f.h, h(a, b), f.w -= a.w, "left" == c ? f.l += a.w : e.left = f.l + f.w + "px") : ("client" == c || "center" == c) && h(a, f)
                })
            };
            return{marginBox2contentBox: g.marginBox2contentBox, layoutChildren: g.layoutChildren}
        })
    }, "dijit/layout/ContentPane": function () {
        define("dojo/_base/kernel,dojo/_base/lang,../_Widget,../_Container,./_ContentPaneResizeMixin,dojo/string,dojo/html,dojo/i18n!../nls/loading,dojo/_base/array,dojo/_base/declare,dojo/_base/Deferred,dojo/dom,dojo/dom-attr,dojo/_base/xhr,dojo/i18n,dojo/when".split(","),
            function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o) {
                return a("dijit.layout.ContentPane", [i, l, c], {href: "", content: "", extractContent: !1, parseOnLoad: !0, parserScope: e._scopeName, preventCache: !1, preload: !1, refreshOnShow: !1, loadingMessage: "<span class='dijitContentPaneLoading'><span class='dijitInline dijitIconLoading'></span>${loadingState}</span>", errorMessage: "<span class='dijitContentPaneError'><span class='dijitInline dijitIconError'></span>${errorState}</span>", isLoaded: !1, baseClass: "dijitContentPane", ioArgs: {},
                    onLoadDeferred: null, _setTitleAttr: null, stopParser: !0, template: !1, create: function (a, b) {
                        if ((!a || !a.template) && b && !("href"in a) && !("content"in a)) {
                            for (var b = d.byId(b), c = b.ownerDocument.createDocumentFragment(); b.firstChild;)c.appendChild(b.firstChild);
                            a = j.delegate(a, {content: c})
                        }
                        this.inherited(arguments, [a, b])
                    }, postMixInProperties: function () {
                        this.inherited(arguments);
                        var a = n.getLocalization("dijit", "loading", this.lang);
                        this.loadingMessage = g.substitute(this.loadingMessage, a);
                        this.errorMessage = g.substitute(this.errorMessage,
                            a)
                    }, buildRendering: function () {
                        this.inherited(arguments);
                        if (!this.containerNode)this.containerNode = this.domNode;
                        this.domNode.title = "";
                        p.get(this.domNode, "role") || this.domNode.setAttribute("role", "group")
                    }, startup: function () {
                        this.inherited(arguments);
                        this._contentSetter && f.forEach(this._contentSetter.parseResults, function (a) {
                            if (!a._started && !a._destroyed && j.isFunction(a.startup))a.startup(), a._started = !0
                        }, this)
                    }, _startChildren: function () {
                        f.forEach(this.getChildren(), function (a) {
                            if (!a._started && !a._destroyed &&
                                j.isFunction(a.startup))a.startup(), a._started = !0
                        });
                        this._contentSetter && f.forEach(this._contentSetter.parseResults, function (a) {
                            if (!a._started && !a._destroyed && j.isFunction(a.startup))a.startup(), a._started = !0
                        }, this)
                    }, setHref: function (a) {
                        e.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
                        return this.set("href", a)
                    }, _setHrefAttr: function (a) {
                        this.cancel();
                        this.onLoadDeferred = new k(j.hitch(this, "cancel"));
                        this.onLoadDeferred.then(j.hitch(this, "onLoad"));
                        this._set("href", a);
                        this.preload || this._created && this._isShown() ? this._load() : this._hrefChanged = !0;
                        return this.onLoadDeferred
                    }, setContent: function (a) {
                        e.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
                        this.set("content", a)
                    }, _setContentAttr: function (a) {
                        this._set("href", "");
                        this.cancel();
                        this.onLoadDeferred = new k(j.hitch(this, "cancel"));
                        this._created && this.onLoadDeferred.then(j.hitch(this, "onLoad"));
                        this._setContent(a || "");
                        this._isDownloaded = !1;
                        return this.onLoadDeferred
                    }, _getContentAttr: function () {
                        return this.containerNode.innerHTML
                    }, cancel: function () {
                        this._xhrDfd && -1 == this._xhrDfd.fired && this._xhrDfd.cancel();
                        delete this._xhrDfd;
                        this.onLoadDeferred = null
                    }, destroy: function () {
                        this.cancel();
                        this.inherited(arguments)
                    }, destroyRecursive: function (a) {
                        this._beingDestroyed || this.inherited(arguments)
                    }, _onShow: function () {
                        this.inherited(arguments);
                        if (this.href && !this._xhrDfd && (!this.isLoaded || this._hrefChanged || this.refreshOnShow))return this.refresh()
                    },
                    refresh: function () {
                        this.cancel();
                        this.onLoadDeferred = new k(j.hitch(this, "cancel"));
                        this.onLoadDeferred.then(j.hitch(this, "onLoad"));
                        this._load();
                        return this.onLoadDeferred
                    }, _load: function () {
                        this._setContent(this.onDownloadStart(), !0);
                        var a = this, b = {preventCache: this.preventCache || this.refreshOnShow, url: this.href, handleAs: "text"};
                        j.isObject(this.ioArgs) && j.mixin(b, this.ioArgs);
                        var d = this._xhrDfd = (this.ioMethod || m.get)(b), c;
                        d.then(function (b) {
                            c = b;
                            try {
                                return a._isDownloaded = !0, a._setContent(b, !1)
                            } catch (d) {
                                a._onError("Content",
                                    d)
                            }
                        },function (b) {
                            d.canceled || a._onError("Download", b);
                            delete a._xhrDfd;
                            return b
                        }).then(function () {
                                a.onDownloadEnd();
                                delete a._xhrDfd;
                                return c
                            });
                        delete this._hrefChanged
                    }, _onLoadHandler: function (a) {
                        this._set("isLoaded", !0);
                        try {
                            this.onLoadDeferred.resolve(a)
                        } catch (b) {
                        }
                    }, _onUnloadHandler: function () {
                        this._set("isLoaded", !1);
                        try {
                            this.onUnload()
                        } catch (a) {
                        }
                    }, destroyDescendants: function (a) {
                        this.isLoaded && this._onUnloadHandler();
                        var b = this._contentSetter;
                        f.forEach(this.getChildren(), function (b) {
                            b.destroyRecursive ?
                                b.destroyRecursive(a) : b.destroy && b.destroy(a);
                            b._destroyed = !0
                        });
                        b && (f.forEach(b.parseResults, function (b) {
                            if (!b._destroyed)b.destroyRecursive ? b.destroyRecursive(a) : b.destroy && b.destroy(a), b._destroyed = !0
                        }), delete b.parseResults);
                        a || h._emptyNode(this.containerNode);
                        delete this._singleChild
                    }, _setContent: function (a, b) {
                        this.destroyDescendants();
                        var d = this._contentSetter;
                        if (!(d && d instanceof h._ContentSetter))d = this._contentSetter = new h._ContentSetter({node: this.containerNode, _onError: j.hitch(this, this._onError),
                            onContentError: j.hitch(this, function (a) {
                                a = this.onContentError(a);
                                try {
                                    this.containerNode.innerHTML = a
                                } catch (b) {
                                }
                            })});
                        var c = j.mixin({cleanContent: this.cleanContent, extractContent: this.extractContent, parseContent: !a.domNode && this.parseOnLoad, parserScope: this.parserScope, startup: !1, dir: this.dir, lang: this.lang, textDir: this.textDir}, this._contentSetterParams || {}), c = d.set(j.isObject(a) && a.domNode ? a.domNode : a, c), f = this;
                        return o(c && c.then ? c : d.parseDeferred, function () {
                            delete f._contentSetterParams;
                            b || (f._started &&
                                (f._startChildren(), f._scheduleLayout()), f._onLoadHandler(a))
                        })
                    }, _onError: function (a, b, d) {
                        this.onLoadDeferred.reject(b);
                        a = this["on" + a + "Error"].call(this, b);
                        d || a && this._setContent(a, !0)
                    }, onLoad: function () {
                    }, onUnload: function () {
                    }, onDownloadStart: function () {
                        return this.loadingMessage
                    }, onContentError: function () {
                    }, onDownloadError: function () {
                        return this.errorMessage
                    }, onDownloadEnd: function () {
                    }})
            })
    }, "dijit/layout/_ContentPaneResizeMixin": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/lang,dojo/query,dojo/sniff,../registry,../Viewport,./utils".split(","),
            function (e, j, i, l, c, g, h, b, f, a, k) {
                return j("dijit.layout._ContentPaneResizeMixin", null, {doLayout: !0, isLayoutContainer: !0, startup: function () {
                    if (!this._started) {
                        var b = this.getParent();
                        this._childOfLayoutWidget = b && b.isLayoutContainer;
                        this._needLayout = !this._childOfLayoutWidget;
                        this.inherited(arguments);
                        this._isShown() && this._onShow();
                        this._childOfLayoutWidget || this.own(a.on("resize", g.hitch(this, "resize")))
                    }
                }, _checkIfSingleChild: function () {
                    var a = [], b = !1;
                    h("> *", this.containerNode).some(function (c) {
                        var g =
                            f.byNode(c);
                        g && g.resize ? a.push(g) : c.offsetHeight && (b = !0)
                    });
                    this._singleChild = 1 == a.length && !b ? a[0] : null;
                    i.toggle(this.containerNode, this.baseClass + "SingleChild", !!this._singleChild)
                }, resize: function (a, b) {
                    this._resizeCalled = !0;
                    this._scheduleLayout(a, b)
                }, _scheduleLayout: function (a, b) {
                    this._isShown() ? this._layout(a, b) : (this._needLayout = !0, this._changeSize = a, this._resultSize = b)
                }, _layout: function (a, b) {
                    delete this._needLayout;
                    !this._wasShown && !1 !== this.open && this._onShow();
                    a && l.setMarginBox(this.domNode,
                        a);
                    var c = this.containerNode;
                    if (c === this.domNode) {
                        var f = b || {};
                        g.mixin(f, a || {});
                        if (!("h"in f) || !("w"in f))f = g.mixin(l.getMarginBox(c), f);
                        this._contentBox = k.marginBox2contentBox(c, f)
                    } else this._contentBox = l.getContentBox(c);
                    this._layoutChildren()
                }, _layoutChildren: function () {
                    this.doLayout && this._checkIfSingleChild();
                    if (this._singleChild && this._singleChild.resize) {
                        var a = this._contentBox || l.getContentBox(this.containerNode);
                        this._singleChild.resize({w: a.w, h: a.h})
                    } else e.forEach(this.getChildren(), function (a) {
                        a.resize &&
                        a.resize()
                    })
                }, _isShown: function () {
                    if (this._childOfLayoutWidget)return this._resizeCalled && "open"in this ? this.open : this._resizeCalled;
                    if ("open"in this)return this.open;
                    var a = this.domNode, b = this.domNode.parentNode;
                    return"none" != a.style.display && "hidden" != a.style.visibility && !i.contains(a, "dijitHidden") && b && b.style && "none" != b.style.display
                }, _onShow: function () {
                    this._wasShown = !0;
                    this._needLayout && this._layout(this._changeSize, this._resultSize);
                    this.inherited(arguments)
                }})
            })
    }, "dojo/html": function () {
        define("./_base/kernel,./_base/lang,./_base/array,./_base/declare,./dom,./dom-construct,./parser".split(","),
            function (e, j, i, l, c, g, h) {
                var b = {};
                j.setObject("dojo.html", b);
                var f = 0;
                b._secureForInnerHtml = function (a) {
                    return a.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "")
                };
                b._emptyNode = g.empty;
                b._setNodeContent = function (a, b) {
                    g.empty(a);
                    if (b)if ("string" == typeof b && (b = g.toDom(b, a.ownerDocument)), !b.nodeType && j.isArrayLike(b))for (var d = b.length, c = 0; c < b.length; c = d == b.length ? c + 1 : 0)g.place(b[c], a, "last"); else g.place(b, a, "last");
                    return a
                };
                b._ContentSetter = l("dojo.html._ContentSetter", null, {node: "",
                    content: "", id: "", cleanContent: !1, extractContent: !1, parseContent: !1, parserScope: e._scopeName, startup: !0, constructor: function (a, b) {
                        j.mixin(this, a || {});
                        b = this.node = c.byId(this.node || b);
                        if (!this.id)this.id = ["Setter", b ? b.id || b.tagName : "", f++].join("_")
                    }, set: function (a, b) {
                        if (void 0 !== a)this.content = a;
                        b && this._mixin(b);
                        this.onBegin();
                        this.setContent();
                        var d = this.onEnd();
                        return d && d.then ? d : this.node
                    }, setContent: function () {
                        var a = this.node;
                        if (!a)throw Error(this.declaredClass + ": setContent given no node");
                        try {
                            a = b._setNodeContent(a, this.content)
                        } catch (c) {
                            var d = this.onContentError(c);
                            try {
                                a.innerHTML = d
                            } catch (f) {
                            }
                        }
                        this.node = a
                    }, empty: function () {
                        this.parseDeferred && (this.parseDeferred.isResolved() || this.parseDeferred.cancel(), delete this.parseDeferred);
                        this.parseResults && this.parseResults.length && (i.forEach(this.parseResults, function (a) {
                            a.destroy && a.destroy()
                        }), delete this.parseResults);
                        b._emptyNode(this.node)
                    }, onBegin: function () {
                        var a = this.content;
                        if (j.isString(a) && (this.cleanContent && (a = b._secureForInnerHtml(a)),
                            this.extractContent)) {
                            var c = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
                            c && (a = c[1])
                        }
                        this.empty();
                        this.content = a;
                        return this.node
                    }, onEnd: function () {
                        this.parseContent && this._parse();
                        return this.node
                    }, tearDown: function () {
                        delete this.parseResults;
                        delete this.parseDeferred;
                        delete this.node;
                        delete this.content
                    }, onContentError: function (a) {
                        return"Error occurred setting content: " + a
                    }, onExecError: function (a) {
                        return"Error occurred executing scripts: " + a
                    }, _mixin: function (a) {
                        var b = {}, d;
                        for (d in a)d in b ||
                        (this[d] = a[d])
                    }, _parse: function () {
                        var a = this.node;
                        try {
                            var b = {};
                            i.forEach(["dir", "lang", "textDir"], function (a) {
                                this[a] && (b[a] = this[a])
                            }, this);
                            var d = this;
                            this.parseDeferred = h.parse({rootNode: a, noStart: !this.startup, inherited: b, scope: this.parserScope}).then(function (a) {
                                return d.parseResults = a
                            })
                        } catch (c) {
                            this._onError("Content", c, "Error parsing in _ContentSetter#" + this.id)
                        }
                    }, _onError: function (a, c, d) {
                        a = this["on" + a + "Error"].call(this, c);
                        d || a && b._setNodeContent(this.node, a, !0)
                    }});
                b.set = function (a, c, d) {
                    void 0 ==
                        c && (c = "");
                    return d ? (new b._ContentSetter(j.mixin(d, {content: c, node: a}))).set() : b._setNodeContent(a, c, !0)
                };
                return b
            })
    }, "dojo/parser": function () {
        define("require,./_base/kernel,./_base/lang,./_base/array,./_base/config,./_base/html,./_base/window,./_base/url,./_base/json,./aspect,./date/stamp,./Deferred,./has,./query,./on,./ready".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o) {
            function r(a) {
                var b = a._nameCaseMap, d = a.prototype;
                if (!b || b._extendCnt < v) {
                    var b = a._nameCaseMap = {}, c;
                    for (c in d)"_" !== c.charAt(0) &&
                    (b[c.toLowerCase()] = c);
                    b._extendCnt = v
                }
                return b
            }

            function q(a) {
                var b = a.join();
                if (!s[b]) {
                    for (var d = [], c = 0, f = a.length; c < f; c++) {
                        var g = a[c];
                        d[d.length] = s[g] = s[g] || i.getObject(g) || ~g.indexOf("/") && e(g)
                    }
                    a = d.shift();
                    s[b] = d.length ? a.createSubclass ? a.createSubclass(d) : a.extend.apply(a, d) : a
                }
                return s[b]
            }

            var v = 0;
            a.after(i, "extend", function () {
                v++
            }, !0);
            var s = {}, u = {_clearCache: function () {
                v++;
                s = {}
            }, _functionFromScript: function (a, b) {
                var d = "", c = "", f = a.getAttribute(b + "args") || a.getAttribute("args"), g = a.getAttribute("with"),
                    f = (f || "").split(/\s*,\s*/);
                g && g.length && l.forEach(g.split(/\s*,\s*/), function (a) {
                    d += "with(" + a + "){";
                    c += "}"
                });
                return new Function(f, d + a.innerHTML + c)
            }, instantiate: function (a, b, d) {
                var b = b || {}, d = d || {}, c = (d.scope || j._scopeName) + "Type", f = "data-" + (d.scope || j._scopeName) + "-", g = f + "type", e = f + "mixins", k = [];
                l.forEach(a, function (a) {
                    var d = c in b ? b[c] : a.getAttribute(g) || a.getAttribute(c);
                    if (d) {
                        var f = a.getAttribute(e), d = f ? [d].concat(f.split(/\s*,\s*/)) : [d];
                        k.push({node: a, types: d})
                    }
                });
                return this._instantiate(k, b,
                    d)
            }, _instantiate: function (a, b, d) {
                a = l.map(a, function (a) {
                    var c = a.ctor || q(a.types);
                    if (!c)throw Error("Unable to resolve constructor for: '" + a.types.join() + "'");
                    return this.construct(c, a.node, b, d, a.scripts, a.inherited)
                }, this);
                !b._started && !d.noStart && l.forEach(a, function (a) {
                    "function" === typeof a.startup && !a._started && a.startup()
                });
                return a
            }, construct: function (d, c, g, e, h, o) {
                var t;
                var q = d && d.prototype, e = e || {}, u = {};
                e.defaults && i.mixin(u, e.defaults);
                o && i.mixin(u, o);
                var v;
                p("dom-attributes-explicit") ? v = c.attributes :
                    p("dom-attributes-specified-flag") ? v = l.filter(c.attributes, function (a) {
                        return a.specified
                    }) : (o = (/^input$|^img$/i.test(c.nodeName) ? c : c.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, ""), v = l.map(o.split(/\s+/), function (a) {
                        var b = a.toLowerCase();
                        return{name: a, value: "LI" == c.nodeName && "value" == a || "enctype" == b ? c.getAttribute(b) : c.getAttributeNode(b).value}
                    }));
                var s = e.scope || j._scopeName, o = "data-" + s + "-", A = {};
                "dojo" !== s && (A[o + "props"] =
                    "data-dojo-props", A[o + "type"] = "data-dojo-type", A[o + "mixins"] = "data-dojo-mixins", A[s + "type"] = "dojoType", A[o + "id"] = "data-dojo-id");
                for (var s = 0, w, x = [], K, H; w = v[s++];) {
                    var C = w.name, F = C.toLowerCase();
                    w = w.value;
                    switch (A[F] || F) {
                        case "data-dojo-type":
                        case "dojotype":
                        case "data-dojo-mixins":
                            break;
                        case "data-dojo-props":
                            H = w;
                            break;
                        case "data-dojo-id":
                        case "jsid":
                            K = w;
                            break;
                        case "data-dojo-attach-point":
                        case "dojoattachpoint":
                            u.dojoAttachPoint = w;
                            break;
                        case "data-dojo-attach-event":
                        case "dojoattachevent":
                            u.dojoAttachEvent =
                                w;
                            break;
                        case "class":
                            u["class"] = c.className;
                            break;
                        case "style":
                            u.style = c.style && c.style.cssText;
                            break;
                        default:
                            if (C in q || (C = r(d)[F] || C), C in q)switch (typeof q[C]) {
                                case "string":
                                    u[C] = w;
                                    break;
                                case "number":
                                    u[C] = w.length ? Number(w) : NaN;
                                    break;
                                case "boolean":
                                    u[C] = "false" != w.toLowerCase();
                                    break;
                                case "function":
                                    u[C] = "" === w || -1 != w.search(/[^\w\.]+/i) ? new Function(w) : i.getObject(w, !1) || new Function(w);
                                    x.push(C);
                                    break;
                                default:
                                    F = q[C], u[C] = F && "length"in F ? w ? w.split(/\s*,\s*/) : [] : F instanceof Date ? "" == w ? new Date("") :
                                        "now" == w ? new Date : k.fromISOString(w) : F instanceof b ? j.baseUrl + w : f.fromJson(w)
                            } else u[C] = w
                    }
                }
                for (s = 0; s < x.length; s++)v = x[s].toLowerCase(), c.removeAttribute(v), c[v] = null;
                if (H)try {
                    H = f.fromJson.call(e.propsThis, "{" + H + "}"), i.mixin(u, H)
                } catch (O) {
                    throw Error(O.toString() + " in data-dojo-props='" + H + "'");
                }
                i.mixin(u, g);
                h || (h = d && (d._noScript || q._noScript) ? [] : m("> script[type^='dojo/']", c));
                g = [];
                e = [];
                H = [];
                x = [];
                if (h)for (s = 0; s < h.length; s++) {
                    var D = h[s];
                    c.removeChild(D);
                    v = D.getAttribute(o + "event") || D.getAttribute("event");
                    A = D.getAttribute(o + "prop");
                    C = D.getAttribute(o + "method");
                    F = D.getAttribute(o + "advice");
                    w = D.getAttribute("type");
                    D = this._functionFromScript(D, o);
                    v ? "dojo/connect" == w ? g.push({method: v, func: D}) : "dojo/on" == w ? x.push({event: v, func: D}) : u[v] = D : "dojo/aspect" == w ? g.push({method: C, advice: F, func: D}) : "dojo/watch" == w ? H.push({prop: A, func: D}) : e.push(D)
                }
                t = (h = d.markupFactory || q.markupFactory) ? h(u, c, d) : new d(u, c), d = t;
                K && i.setObject(K, d);
                for (s = 0; s < g.length; s++)a[g[s].advice || "after"](d, g[s].method, i.hitch(d, g[s].func), !0);
                for (s = 0; s < e.length; s++)e[s].call(d);
                for (s = 0; s < H.length; s++)d.watch(H[s].prop, H[s].func);
                for (s = 0; s < x.length; s++)n(d, x[s].event, x[s].func);
                return d
            }, scan: function (a, b) {
                function c(a) {
                    if (!a.inherited) {
                        a.inherited = {};
                        var b = a.node, d = c(a.parent), b = {dir: b.getAttribute("dir") || d.dir, lang: b.getAttribute("lang") || d.lang, textDir: b.getAttribute(o) || d.textDir}, f;
                        for (f in b)b[f] && (a.inherited[f] = b[f])
                    }
                    return a.inherited
                }

                var f = [], g = [], k = {}, m = (b.scope || j._scopeName) + "Type", h = "data-" + (b.scope || j._scopeName) + "-", i =
                    h + "type", o = h + "textdir", h = h + "mixins", n = a.firstChild, u = b.inherited;
                if (!u) {
                    var r = function (a, b) {
                        return a.getAttribute && a.getAttribute(b) || a.parentNode && r(a.parentNode, b)
                    }, u = {dir: r(a, "dir"), lang: r(a, "lang"), textDir: r(a, o)}, v;
                    for (v in u)u[v] || delete u[v]
                }
                for (var u = {inherited: u}, s, C; ;)if (n)if (1 != n.nodeType)n = n.nextSibling; else if (s && "script" == n.nodeName.toLowerCase())(F = n.getAttribute("type")) && /^dojo\/\w/i.test(F) && s.push(n), n = n.nextSibling; else if (C)n = n.nextSibling; else {
                    var F = n.getAttribute(i) || n.getAttribute(m);
                    v = n.firstChild;
                    if (!F && (!v || 3 == v.nodeType && !v.nextSibling))n = n.nextSibling; else {
                        C = null;
                        if (F) {
                            var O = n.getAttribute(h);
                            s = O ? [F].concat(O.split(/\s*,\s*/)) : [F];
                            try {
                                C = q(s)
                            } catch (D) {
                            }
                            C || l.forEach(s, function (a) {
                                ~a.indexOf("/") && !k[a] && (k[a] = !0, g[g.length] = a)
                            });
                            O = C && !C.prototype._noScript ? [] : null;
                            u = {types: s, ctor: C, parent: u, node: n, scripts: O};
                            u.inherited = c(u);
                            f.push(u)
                        } else u = {node: n, scripts: s, parent: u};
                        n = v;
                        s = O;
                        C = C && C.prototype.stopParser && !b.template
                    }
                } else {
                    if (!u || !u.node)break;
                    n = u.node.nextSibling;
                    C = !1;
                    u = u.parent;
                    s = u.scripts
                }
                var L = new d;
                g.length ? (p("dojo-debug-messages"), e(g, function () {
                    L.resolve(l.filter(f, function (a) {
                        if (!a.ctor)try {
                            a.ctor = q(a.types)
                        } catch (d) {
                        }
                        for (var c = a.parent; c && !c.types;)c = c.parent;
                        var f = a.ctor && a.ctor.prototype;
                        a.instantiateChildren = !(f && f.stopParser && !b.template);
                        a.instantiate = !c || c.instantiate && c.instantiateChildren;
                        return a.instantiate
                    }))
                })) : L.resolve(f);
                return L.promise
            }, _require: function (a) {
                var a = f.fromJson("{" + a.innerHTML + "}"), b = [], c = [], g = new d, k;
                for (k in a)b.push(k), c.push(a[k]);
                e(c, function () {
                    for (var a = 0; a < b.length; a++)i.setObject(b[a], arguments[a]);
                    g.resolve(arguments)
                });
                return g.promise
            }, _scanAmd: function (a) {
                var b = new d, c = b.promise;
                b.resolve(!0);
                var f = this;
                m("script[type='dojo/require']", a).forEach(function (a) {
                    c = c.then(function () {
                        return f._require(a)
                    });
                    a.parentNode.removeChild(a)
                });
                return c
            }, parse: function (a, b) {
                var d;
                !b && a && a.rootNode ? (b = a, d = b.rootNode) : a && i.isObject(a) && !("nodeType"in a) ? b = a : d = a;
                d = d ? g.byId(d) : h.body();
                var b = b || {}, c = b.template ? {template: !0} : {}, f = [], e =
                    this, k = this._scanAmd(d, b).then(function () {
                    return e.scan(d, b)
                }).then(function (a) {
                    return f = f.concat(e._instantiate(a, c, b))
                }).otherwise(function (a) {
                    throw a;
                });
                i.mixin(f, k);
                return f
            }};
            j.parser = u;
            c.parseOnLoad && o(100, u, "parse");
            return u
        })
    }, "dojo/_base/url": function () {
        define(["./kernel"], function (e) {
            var j = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/, i = /^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/, l = function () {
                for (var c = arguments, g = [c[0]], e = 1; e < c.length; e++)if (c[e]) {
                    var b =
                        new l(c[e] + ""), g = new l(g[0] + "");
                    if ("" == b.path && !b.scheme && !b.authority && !b.query) {
                        if (null != b.fragment)g.fragment = b.fragment;
                        b = g
                    } else if (!b.scheme && (b.scheme = g.scheme, !b.authority && (b.authority = g.authority, "/" != b.path.charAt(0)))) {
                        for (var g = (g.path.substring(0, g.path.lastIndexOf("/") + 1) + b.path).split("/"), f = 0; f < g.length; f++)"." == g[f] ? f == g.length - 1 ? g[f] = "" : (g.splice(f, 1), f--) : 0 < f && !(1 == f && "" == g[0]) && ".." == g[f] && ".." != g[f - 1] && (f == g.length - 1 ? (g.splice(f, 1), g[f - 1] = "") : (g.splice(f - 1, 2), f -= 2));
                        b.path = g.join("/")
                    }
                    g =
                        [];
                    b.scheme && g.push(b.scheme, ":");
                    b.authority && g.push("//", b.authority);
                    g.push(b.path);
                    b.query && g.push("?", b.query);
                    b.fragment && g.push("#", b.fragment)
                }
                this.uri = g.join("");
                c = this.uri.match(j);
                this.scheme = c[2] || (c[1] ? "" : null);
                this.authority = c[4] || (c[3] ? "" : null);
                this.path = c[5];
                this.query = c[7] || (c[6] ? "" : null);
                this.fragment = c[9] || (c[8] ? "" : null);
                if (null != this.authority)c = this.authority.match(i), this.user = c[3] || null, this.password = c[4] || null, this.host = c[6] || c[7], this.port = c[9] || null
            };
            l.prototype.toString =
                function () {
                    return this.uri
                };
            return e._Url = l
        })
    }, "dojo/date/stamp": function () {
        define(["../_base/lang", "../_base/array"], function (e, j) {
            var i = {};
            e.setObject("dojo.date.stamp", i);
            i.fromISOString = function (e, c) {
                if (!i._isoRegExp)i._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
                var g = i._isoRegExp.exec(e), h = null;
                if (g) {
                    g.shift();
                    g[1] && g[1]--;
                    g[6] && (g[6] *= 1E3);
                    c && (c = new Date(c), j.forEach(j.map("FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds".split(","),
                        function (a) {
                            return c["get" + a]()
                        }), function (a, b) {
                        g[b] = g[b] || a
                    }));
                    h = new Date(g[0] || 1970, g[1] || 0, g[2] || 1, g[3] || 0, g[4] || 0, g[5] || 0, g[6] || 0);
                    100 > g[0] && h.setFullYear(g[0] || 1970);
                    var b = 0, f = g[7] && g[7].charAt(0);
                    "Z" != f && (b = 60 * (g[8] || 0) + (Number(g[9]) || 0), "-" != f && (b *= -1));
                    f && (b -= h.getTimezoneOffset());
                    b && h.setTime(h.getTime() + 6E4 * b)
                }
                return h
            };
            i.toISOString = function (e, c) {
                var g = function (a) {
                    return 10 > a ? "0" + a : a
                }, c = c || {}, h = [], b = c.zulu ? "getUTC" : "get", f = "";
                "time" != c.selector && (f = e[b + "FullYear"](), f = ["0000".substr((f +
                    "").length) + f, g(e[b + "Month"]() + 1), g(e[b + "Date"]())].join("-"));
                h.push(f);
                if ("date" != c.selector) {
                    f = [g(e[b + "Hours"]()), g(e[b + "Minutes"]()), g(e[b + "Seconds"]())].join(":");
                    b = e[b + "Milliseconds"]();
                    c.milliseconds && (f += "." + (100 > b ? "0" : "") + g(b));
                    if (c.zulu)f += "Z"; else if ("time" != c.selector)var b = e.getTimezoneOffset(), a = Math.abs(b), f = f + ((0 < b ? "-" : "+") + g(Math.floor(a / 60)) + ":" + g(a % 60));
                    h.push(f)
                }
                return h.join("T")
            };
            return i
        })
    }, "dojox/layout/ExpandoPane": function () {
        define("dojo/_base/kernel,dojo/_base/lang,dojo/_base/declare,dojo/_base/array,dojo/_base/connect,dojo/_base/event,dojo/_base/fx,dojo/dom-style,dojo/dom-class,dojo/dom-geometry,dojo/text!./resources/ExpandoPane.html,dijit/layout/ContentPane,dijit/_TemplatedMixin,dijit/_Contained,dijit/_Container".split(","),
            function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n) {
                e.experimental("dojox.layout.ExpandoPane");
                return i("dojox.layout.ExpandoPane", [d, p, m, n], {attributeMap: j.delegate(d.prototype.attributeMap, {title: {node: "titleNode", type: "innerHTML"}}), templateString: k, easeOut: "dojo._DefaultEasing", easeIn: "dojo._DefaultEasing", duration: 420, startExpanded: !0, previewOpacity: 0.75, previewOnDblClick: !1, tabIndex: "0", _setTabIndexAttr: "iconNode", baseClass: "dijitExpandoPane", postCreate: function () {
                    this.inherited(arguments);
                    this._animConnects =
                        [];
                    this._isHorizontal = !0;
                    if (j.isString(this.easeOut))this.easeOut = j.getObject(this.easeOut);
                    if (j.isString(this.easeIn))this.easeIn = j.getObject(this.easeIn);
                    var a = "", d = !this.isLeftToRight();
                    if (this.region) {
                        switch (this.region) {
                            case "trailing":
                            case "right":
                                a = d ? "Left" : "Right";
                                this._needsPosition = "left";
                                break;
                            case "leading":
                            case "left":
                                a = d ? "Right" : "Left";
                                break;
                            case "top":
                                a = "Top";
                                break;
                            case "bottom":
                                this._needsPosition = "top", a = "Bottom"
                        }
                        f.add(this.domNode, "dojoxExpando" + a);
                        f.add(this.iconNode, "dojoxExpandoIcon" +
                            a);
                        this._isHorizontal = /top|bottom/.test(this.region)
                    }
                    b.set(this.domNode, {overflow: "hidden", padding: 0});
                    this.connect(this.domNode, "ondblclick", this.previewOnDblClick ? "preview" : "toggle");
                    this.iconNode.setAttribute("aria-controls", this.id);
                    this.previewOnDblClick && this.connect(this.getParent(), "_layoutChildren", j.hitch(this, function () {
                        this._isonlypreview = !1
                    }))
                }, _startupSizes: function () {
                    this._container = this.getParent();
                    this._closedSize = this._titleHeight = a.getMarginBox(this.titleWrapper).h;
                    if (this.splitter) {
                        var b =
                            this.id;
                        l.forEach(dijit.registry.toArray(), function (a) {
                            a && a.child && a.child.id == b && this.connect(a, "_stopDrag", "_afterResize")
                        }, this)
                    }
                    this._currentSize = a.getContentBox(this.domNode);
                    this._showSize = this._currentSize[this._isHorizontal ? "h" : "w"];
                    this._setupAnims();
                    this.startExpanded ? this._showing = !0 : (this._showing = !1, this._hideWrapper(), this._hideAnim.gotoPercent(99, !0));
                    this.domNode.setAttribute("aria-expanded", this._showing);
                    this._hasSizes = !0
                }, _afterResize: function () {
                    var b = this._currentSize;
                    this._currentSize =
                        a.getMarginBox(this.domNode);
                    var d = this._currentSize[this._isHorizontal ? "h" : "w"];
                    if (d > this._titleHeight) {
                        if (!this._showing)this._showing = !this._showing, this._showEnd();
                        this._showSize = d;
                        this._setupAnims()
                    } else this._showSize = b[this._isHorizontal ? "h" : "w"], this._showing = !1, this._hideWrapper(), this._hideAnim.gotoPercent(89, !0)
                }, _setupAnims: function () {
                    l.forEach(this._animConnects, c.disconnect);
                    var a = {node: this.domNode, duration: this.duration}, b = {}, d = this._showSize, f = this._closedSize, g = {}, e = this._isHorizontal ?
                        "height" : "width", k = this._needsPosition;
                    b[e] = {end: d};
                    g[e] = {end: f};
                    k && (b[k] = {end: function (a) {
                        return parseInt(a.style[k], 10) - d + f
                    }}, g[k] = {end: function (a) {
                        return parseInt(a.style[k], 10) + d - f
                    }});
                    this._showAnim = h.animateProperty(j.mixin(a, {easing: this.easeIn, properties: b}));
                    this._hideAnim = h.animateProperty(j.mixin(a, {easing: this.easeOut, properties: g}));
                    this._animConnects = [c.connect(this._showAnim, "onEnd", this, "_showEnd"), c.connect(this._hideAnim, "onEnd", this, "_hideEnd")]
                }, preview: function () {
                    if (!this._showing)this._isonlypreview = !this._isonlypreview;
                    this.toggle()
                }, toggle: function () {
                    this._showing ? (this._hideWrapper(), this._showAnim && this._showAnim.stop(), this._hideAnim.play()) : (this._hideAnim && this._hideAnim.stop(), this._showAnim.play());
                    this._showing = !this._showing;
                    this.domNode.setAttribute("aria-expanded", this._showing)
                }, _hideWrapper: function () {
                    f.add(this.domNode, "dojoxExpandoClosed");
                    b.set(this.cwrapper, {visibility: "hidden", opacity: "0", overflow: "hidden"})
                }, _showEnd: function () {
                    b.set(this.cwrapper, {opacity: 0, visibility: "visible"});
                    h.anim(this.cwrapper, {opacity: this._isonlypreview ? this.previewOpacity : 1}, 227);
                    f.remove(this.domNode, "dojoxExpandoClosed");
                    this._isonlypreview ? (this._previewShowing = !0, this.resize()) : setTimeout(j.hitch(this._container, "layout"), 15)
                }, _hideEnd: function () {
                    this._isonlypreview ? this._previewShowing = !1 : setTimeout(j.hitch(this._container, "layout"), 25);
                    this._isonlypreview = !1
                }, resize: function (d) {
                    this._hasSizes || this._startupSizes(d);
                    var c = a.getMarginBox(this.domNode);
                    this._contentBox = {w: d && "w"in d ? d.w : c.w, h: (d &&
                        "h"in d ? d.h : c.h) - this._titleHeight};
                    b.set(this.containerNode, "height", this._contentBox.h + "px");
                    d && a.setMarginBox(this.domNode, d);
                    this._layoutChildren();
                    this._setupAnims()
                }, _trap: function (a) {
                    g.stop(a)
                }})
            })
    }, "url:dojox/layout/resources/ExpandoPane.html": '<div class="dojoxExpandoPane">\n\t<div dojoAttachPoint="titleWrapper" class="dojoxExpandoTitle">\n\t\t<div class="dojoxExpandoIcon" dojoAttachPoint="iconNode" dojoAttachEvent="ondijitclick:toggle"><span class="a11yNode">X</span></div>\n\t\t<span class="dojoxExpandoTitleNode" dojoAttachPoint="titleNode">${title}</span>\n\t</div>\n\t<div class="dojoxExpandoWrapper" dojoAttachPoint="cwrapper" dojoAttachEvent="ondblclick:_trap">\n\t\t<div class="dojoxExpandoContent" dojoAttachPoint="containerNode"></div>\n\t</div>\n</div>\n',
    "dijit/form/Form": function () {
        define("dojo/_base/declare,dojo/dom-attr,dojo/_base/event,dojo/_base/kernel,dojo/sniff,../_Widget,../_TemplatedMixin,./_FormMixin,../layout/_ContentPaneResizeMixin".split(","), function (e, j, i, l, c, g, h, b, f) {
            return e("dijit.form.Form", [g, h, b, f], {name: "", action: "", method: "", encType: "", "accept-charset": "", accept: "", target: "", templateString: "<form data-dojo-attach-point='containerNode' data-dojo-attach-event='onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}></form>",
                postMixInProperties: function () {
                    this.nameAttrSetting = this.name ? "name='" + this.name + "'" : "";
                    this.inherited(arguments)
                }, execute: function () {
                }, onExecute: function () {
                }, _setEncTypeAttr: function (a) {
                    this.encType = a;
                    j.set(this.domNode, "encType", a);
                    if (c("ie"))this.domNode.encoding = a
                }, reset: function (a) {
                    var b = {returnValue: !0, preventDefault: function () {
                        this.returnValue = !1
                    }, stopPropagation: function () {
                    }, currentTarget: a ? a.target : this.domNode, target: a ? a.target : this.domNode};
                    !1 !== this.onReset(b) && b.returnValue && this.inherited(arguments,
                        [])
                }, onReset: function () {
                    return!0
                }, _onReset: function (a) {
                    this.reset(a);
                    i.stop(a);
                    return!1
                }, _onSubmit: function (a) {
                    var b = this.constructor.prototype;
                    if (this.execute != b.execute || this.onExecute != b.onExecute)l.deprecated("dijit.form.Form:execute()/onExecute() are deprecated. Use onSubmit() instead.", "", "2.0"), this.onExecute(), this.execute(this.getValues());
                    !1 === this.onSubmit(a) && i.stop(a)
                }, onSubmit: function () {
                    return this.isValid()
                }, submit: function () {
                    !1 !== this.onSubmit() && this.containerNode.submit()
                }})
        })
    },
    "dijit/form/_FormMixin": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/_base/kernel,dojo/_base/lang,dojo/on,dojo/window".split(","), function (e, j, i, l, c, g) {
            return j("dijit.form._FormMixin", null, {state: "", _getDescendantFormWidgets: function (c) {
                var b = [];
                e.forEach(c || this.getChildren(), function (c) {
                    "value"in c ? b.push(c) : b = b.concat(this._getDescendantFormWidgets(c.getChildren()))
                }, this);
                return b
            }, reset: function () {
                e.forEach(this._getDescendantFormWidgets(), function (c) {
                    c.reset && c.reset()
                })
            }, validate: function () {
                var c =
                    !1;
                return e.every(e.map(this._getDescendantFormWidgets(), function (b) {
                    b._hasBeenBlurred = !0;
                    var f = b.disabled || !b.validate || b.validate();
                    !f && !c && (g.scrollIntoView(b.containerNode || b.domNode), b.focus(), c = !0);
                    return f
                }), function (b) {
                    return b
                })
            }, setValues: function (c) {
                i.deprecated(this.declaredClass + "::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
                return this.set("value", c)
            }, _setValueAttr: function (c) {
                var b = {};
                e.forEach(this._getDescendantFormWidgets(), function (a) {
                    a.name && (b[a.name] ||
                        (b[a.name] = [])).push(a)
                });
                for (var f in b)if (b.hasOwnProperty(f)) {
                    var a = b[f], g = l.getObject(f, !1, c);
                    void 0 !== g && (l.isArray(g) || (g = [g]), "boolean" == typeof a[0].checked ? e.forEach(a, function (a) {
                        a.set("value", -1 != e.indexOf(g, a.value))
                    }) : a[0].multiple ? a[0].set("value", g) : e.forEach(a, function (a, b) {
                        a.set("value", g[b])
                    }))
                }
            }, getValues: function () {
                i.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
                return this.get("value")
            }, _getValueAttr: function () {
                var c = {};
                e.forEach(this._getDescendantFormWidgets(),
                    function (b) {
                        var f = b.name;
                        if (f && !b.disabled) {
                            var a = b.get("value");
                            "boolean" == typeof b.checked ? /Radio/.test(b.declaredClass) ? !1 !== a ? l.setObject(f, a, c) : (a = l.getObject(f, !1, c), void 0 === a && l.setObject(f, null, c)) : (b = l.getObject(f, !1, c), b || (b = [], l.setObject(f, b, c)), !1 !== a && b.push(a)) : (b = l.getObject(f, !1, c), "undefined" != typeof b ? l.isArray(b) ? b.push(a) : l.setObject(f, [b, a], c) : l.setObject(f, a, c))
                        }
                    });
                return c
            }, isValid: function () {
                return"" == this.state
            }, onValidStateChange: function () {
            }, _getState: function () {
                var c =
                    e.map(this._descendants, function (b) {
                        return b.get("state") || ""
                    });
                return 0 <= e.indexOf(c, "Error") ? "Error" : 0 <= e.indexOf(c, "Incomplete") ? "Incomplete" : ""
            }, disconnectChildren: function () {
            }, connectChildren: function (c) {
                this._descendants = this._getDescendantFormWidgets();
                e.forEach(this._descendants, function (b) {
                    b._started || b.startup()
                });
                c || this._onChildChange()
            }, _onChildChange: function (c) {
                (!c || "state" == c || "disabled" == c) && this._set("state", this._getState());
                if (!c || "value" == c || "disabled" == c || "checked" == c)this._onChangeDelayTimer &&
                    this._onChangeDelayTimer.remove(), this._onChangeDelayTimer = this.defer(function () {
                    delete this._onChangeDelayTimer;
                    this._set("value", this.get("value"))
                }, 10)
            }, startup: function () {
                this.inherited(arguments);
                this._descendants = this._getDescendantFormWidgets();
                this.value = this.get("value");
                this.state = this._getState();
                var g = this;
                this.own(c(this.containerNode, "attrmodified-state, attrmodified-disabled, attrmodified-value, attrmodified-checked", function (b) {
                    b.target != g.domNode && g._onChildChange(b.type.replace("attrmodified-",
                        ""))
                }));
                this.watch("state", function (b, c, a) {
                    this.onValidStateChange("" == a)
                })
            }, destroy: function () {
                this.inherited(arguments)
            }})
        })
    }, "dijit/form/TextBox": function () {
        define("dojo/_base/declare,dojo/dom-construct,dojo/dom-style,dojo/_base/kernel,dojo/_base/lang,dojo/sniff,./_FormValueWidget,./_TextBoxMixin,dojo/text!./templates/TextBox.html,../main".split(","), function (e, j, i, l, c, g, h, b, f, a) {
            e = e("dijit.form.TextBox", [h, b], {templateString: f, _singleNodeTemplate: '<input class="dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point="textbox,focusNode" autocomplete="off" type="${type}" ${!nameAttrSetting} />',
                _buttonInputDisabled: g("ie") ? "disabled" : "", baseClass: "dijitTextBox", postMixInProperties: function () {
                    var a = this.type.toLowerCase();
                    if (this.templateString && "input" == this.templateString.toLowerCase() || ("hidden" == a || "file" == a) && this.templateString == this.constructor.prototype.templateString)this.templateString = this._singleNodeTemplate;
                    this.inherited(arguments)
                }, postCreate: function () {
                    this.inherited(arguments);
                    9 > g("ie") && this.defer(function () {
                        try {
                            var a = i.getComputedStyle(this.domNode);
                            if (a) {
                                var b = a.fontFamily;
                                if (b) {
                                    var c = this.domNode.getElementsByTagName("INPUT");
                                    if (c)for (a = 0; a < c.length; a++)c[a].style.fontFamily = b
                                }
                            }
                        } catch (f) {
                        }
                    })
                }, _onInput: function (a) {
                    this.inherited(arguments);
                    this.intermediateChanges && this.defer(function () {
                        this._handleOnChange(this.get("value"), !1)
                    })
                }, _setPlaceHolderAttr: function (a) {
                    this._set("placeHolder", a);
                    if (!this._phspan)this._attachPoints.push("_phspan"), this._phspan = j.create("span", {onmousedown: function (a) {
                            a.preventDefault()
                        }, className: "dijitPlaceHolder dijitInputField"}, this.textbox,
                        "after");
                    this._phspan.innerHTML = "";
                    this._phspan.appendChild(this._phspan.ownerDocument.createTextNode(a));
                    this._updatePlaceHolder()
                }, _updatePlaceHolder: function () {
                    if (this._phspan)this._phspan.style.display = this.placeHolder && !this.focused && !this.textbox.value ? "" : "none"
                }, _setValueAttr: function (a, b, c) {
                    this.inherited(arguments);
                    this._updatePlaceHolder()
                }, getDisplayedValue: function () {
                    l.deprecated(this.declaredClass + "::getDisplayedValue() is deprecated. Use get('displayedValue') instead.", "", "2.0");
                    return this.get("displayedValue")
                },
                setDisplayedValue: function (a) {
                    l.deprecated(this.declaredClass + "::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.", "", "2.0");
                    this.set("displayedValue", a)
                }, _onBlur: function (a) {
                    if (!this.disabled && (this.inherited(arguments), this._updatePlaceHolder(), g("mozilla") && this.selectOnClick))this.textbox.selectionStart = this.textbox.selectionEnd = void 0
                }, _onFocus: function (a) {
                    !this.disabled && !this.readOnly && (this.inherited(arguments), this._updatePlaceHolder())
                }});
            if (g("ie"))e.prototype._isTextSelected =
                function () {
                    var a = this.ownerDocument.selection.createRange();
                    return a.parentElement() == this.textbox && 0 < a.text.length
                }, a._setSelectionRange = b._setSelectionRange = function (a, b, c) {
                a.createTextRange && (a = a.createTextRange(), a.collapse(!0), a.moveStart("character", -99999), a.moveStart("character", b), a.moveEnd("character", c - b), a.select())
            };
            return e
        })
    }, "dijit/form/_FormValueWidget": function () {
        define(["dojo/_base/declare", "dojo/sniff", "./_FormWidget", "./_FormValueMixin"], function (e, j, i, l) {
            return e("dijit.form._FormValueWidget",
                [i, l], {_layoutHackIE7: function () {
                    if (7 == j("ie"))for (var c = this.domNode, g = c.parentNode, e = c.firstChild || c, b = e.style.filter, f = this; g && 0 == g.clientHeight;)(function () {
                        var a = f.connect(g, "onscroll", function () {
                            f.disconnect(a);
                            e.style.filter = (new Date).getMilliseconds();
                            f.defer(function () {
                                e.style.filter = b
                            })
                        })
                    })(), g = g.parentNode
                }})
        })
    }, "dijit/form/_FormWidget": function () {
        define("dojo/_base/declare,dojo/has,dojo/_base/kernel,dojo/ready,../_Widget,../_CssStateMixin,../_TemplatedMixin,./_FormWidgetMixin".split(","),
            function (e, j, i, l, c, g, h, b) {
                j("dijit-legacy-requires") && l(0, function () {
                    require(["dijit/form/_FormValueWidget"])
                });
                return e("dijit.form._FormWidget", [c, h, g, b], {setDisabled: function (b) {
                    i.deprecated("setDisabled(" + b + ") is deprecated. Use set('disabled'," + b + ") instead.", "", "2.0");
                    this.set("disabled", b)
                }, setValue: function (b) {
                    i.deprecated("dijit.form._FormWidget:setValue(" + b + ") is deprecated.  Use set('value'," + b + ") instead.", "", "2.0");
                    this.set("value", b)
                }, getValue: function () {
                    i.deprecated(this.declaredClass +
                        "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
                    return this.get("value")
                }, postMixInProperties: function () {
                    this.nameAttrSetting = this.name ? 'name="' + this.name.replace(/"/g, "&quot;") + '"' : "";
                    this.inherited(arguments)
                }, _setTypeAttr: null})
            })
    }, "dijit/_CssStateMixin": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom,dojo/dom-class,dojo/has,dojo/_base/lang,dojo/on,dojo/ready,dojo/_base/window,./registry".split(","), function (e, j, i, l, c, g, h, b, f, a) {
            j = j("dijit._CssStateMixin", [], {cssStateNodes: {},
                hovering: !1, active: !1, _applyAttributes: function () {
                    this.inherited(arguments);
                    e.forEach("disabled,readOnly,checked,selected,focused,state,hovering,active,_opened".split(","), function (a) {
                        this.watch(a, g.hitch(this, "_setStateClass"))
                    }, this);
                    for (var a in this.cssStateNodes)this._trackMouseState(this[a], this.cssStateNodes[a]);
                    this._trackMouseState(this.domNode, this.baseClass);
                    this._setStateClass()
                }, _cssMouseEvent: function (a) {
                    if (!this.disabled)switch (a.type) {
                        case "mouseover":
                            this._set("hovering", !0);
                            this._set("active",
                                this._mouseDown);
                            break;
                        case "mouseout":
                            this._set("hovering", !1);
                            this._set("active", !1);
                            break;
                        case "mousedown":
                        case "touchstart":
                            this._set("active", !0);
                            break;
                        case "mouseup":
                        case "touchend":
                            this._set("active", !1)
                    }
                }, _setStateClass: function () {
                    function a(c) {
                        b = b.concat(e.map(b, function (a) {
                            return a + c
                        }), "dijit" + c)
                    }

                    var b = this.baseClass.split(" ");
                    this.isLeftToRight() || a("Rtl");
                    var c = "mixed" == this.checked ? "Mixed" : this.checked ? "Checked" : "";
                    this.checked && a(c);
                    this.state && a(this.state);
                    this.selected && a("Selected");
                    this._opened && a("Opened");
                    this.disabled ? a("Disabled") : this.readOnly ? a("ReadOnly") : this.active ? a("Active") : this.hovering && a("Hover");
                    this.focused && a("Focused");
                    var c = this.stateNode || this.domNode, f = {};
                    e.forEach(c.className.split(" "), function (a) {
                        f[a] = !0
                    });
                    "_stateClasses"in this && e.forEach(this._stateClasses, function (a) {
                        delete f[a]
                    });
                    e.forEach(b, function (a) {
                        f[a] = !0
                    });
                    var g = [], h;
                    for (h in f)g.push(h);
                    c.className = g.join(" ");
                    this._stateClasses = b
                }, _subnodeCssMouseEvent: function (a, b, c) {
                    function f(c) {
                        l.toggle(a,
                            b + "Active", c)
                    }

                    if (!this.disabled && !this.readOnly)switch (c.type) {
                        case "mouseover":
                            l.toggle(a, b + "Hover", !0);
                            break;
                        case "mouseout":
                            l.toggle(a, b + "Hover", !1);
                            f(!1);
                            break;
                        case "mousedown":
                        case "touchstart":
                            f(!0);
                            break;
                        case "mouseup":
                        case "touchend":
                            f(!1);
                            break;
                        case "focus":
                        case "focusin":
                            l.toggle(a, b + "Focused", !0);
                            break;
                        case "blur":
                        case "focusout":
                            l.toggle(a, b + "Focused", !1)
                    }
                }, _trackMouseState: function (a, b) {
                    a._cssState = b
                }});
            b(function () {
                function b(d) {
                    if (!i.isDescendant(d.relatedTarget, d.target))for (var c =
                        d.target; c && c != d.relatedTarget; c = c.parentNode)if (c._cssState) {
                        var f = a.getEnclosingWidget(c);
                        f && (c == f.domNode ? f._cssMouseEvent(d) : f._subnodeCssMouseEvent(c, c._cssState, d))
                    }
                }

                function d(a) {
                    a.target = a.srcElement;
                    b(a)
                }

                var g = f.body(), m = (c("touch") ? [] : ["mouseover", "mouseout"]).concat(["mousedown", "touchstart", "mouseup", "touchend"]);
                e.forEach(m, function (a) {
                    g.addEventListener ? g.addEventListener(a, b, !0) : g.attachEvent("on" + a, d)
                });
                h(g, "focusin, focusout", function (b) {
                    var d = b.target;
                    d._cssState && !d.getAttribute("widgetId") &&
                    a.getEnclosingWidget(d)._subnodeCssMouseEvent(d, d._cssState, b)
                })
            });
            return j
        })
    }, "dijit/form/_FormWidgetMixin": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/dom-style,dojo/_base/lang,dojo/mouse,dojo/sniff,dojo/window,../a11y".split(","), function (e, j, i, l, c, g, h, b, f) {
            return j("dijit.form._FormWidgetMixin", null, {name: "", alt: "", value: "", type: "text", tabIndex: "0", _setTabIndexAttr: "focusNode", disabled: !1, intermediateChanges: !1, scrollOnFocus: !0, _setIdAttr: "focusNode", _setDisabledAttr: function (a) {
                this._set("disabled",
                    a);
                i.set(this.focusNode, "disabled", a);
                this.valueNode && i.set(this.valueNode, "disabled", a);
                this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
                a ? (this._set("hovering", !1), this._set("active", !1), a = "tabIndex"in this.attributeMap ? this.attributeMap.tabIndex : "_setTabIndexAttr"in this ? this._setTabIndexAttr : "focusNode", e.forEach(c.isArray(a) ? a : [a], function (a) {
                    a = this[a];
                    h("webkit") || f.hasDefaultTabStop(a) ? a.setAttribute("tabIndex", "-1") : a.removeAttribute("tabIndex")
                }, this)) : "" != this.tabIndex && this.set("tabIndex",
                    this.tabIndex)
            }, _onFocus: function (a) {
                if ("mouse" == a && this.isFocusable())var c = this.connect(this.focusNode, "onfocus", function () {
                    this.disconnect(d);
                    this.disconnect(c)
                }), d = this.connect(this.ownerDocumentBody, "onmouseup", function () {
                    this.disconnect(d);
                    this.disconnect(c);
                    this.focused && this.focus()
                });
                this.scrollOnFocus && this.defer(function () {
                    b.scrollIntoView(this.domNode)
                });
                this.inherited(arguments)
            }, isFocusable: function () {
                return!this.disabled && this.focusNode && "none" != l.get(this.domNode, "display")
            }, focus: function () {
                if (!this.disabled &&
                    this.focusNode.focus)try {
                    this.focusNode.focus()
                } catch (a) {
                }
            }, compare: function (a, b) {
                return"number" == typeof a && "number" == typeof b ? isNaN(a) && isNaN(b) ? 0 : a - b : a > b ? 1 : a < b ? -1 : 0
            }, onChange: function () {
            }, _onChangeActive: !1, _handleOnChange: function (a, b) {
                if (void 0 == this._lastValueReported && (null === b || !this._onChangeActive))this._resetValue = this._lastValueReported = a;
                this._pendingOnChange = this._pendingOnChange || typeof a != typeof this._lastValueReported || 0 != this.compare(a, this._lastValueReported);
                if ((this.intermediateChanges ||
                    b || void 0 === b) && this._pendingOnChange)if (this._lastValueReported = a, this._pendingOnChange = !1, this._onChangeActive)this._onChangeHandle && this._onChangeHandle.remove(), this._onChangeHandle = this.defer(function () {
                    this._onChangeHandle = null;
                    this.onChange(a)
                })
            }, create: function () {
                this.inherited(arguments);
                this._onChangeActive = !0
            }, destroy: function () {
                this._onChangeHandle && (this._onChangeHandle.remove(), this.onChange(this._lastValueReported));
                this.inherited(arguments)
            }})
        })
    }, "dijit/form/_FormValueMixin": function () {
        define(["dojo/_base/declare",
            "dojo/dom-attr", "dojo/keys", "dojo/sniff", "./_FormWidgetMixin"], function (e, j, i, l, c) {
            return e("dijit.form._FormValueMixin", c, {readOnly: !1, _setReadOnlyAttr: function (c) {
                j.set(this.focusNode, "readOnly", c);
                this.focusNode.setAttribute("aria-readonly", c);
                this._set("readOnly", c)
            }, postCreate: function () {
                this.inherited(arguments);
                l("ie") && this.connect(this.focusNode || this.domNode, "onkeydown", this._onKeyDown);
                if (void 0 === this._resetValue)this._lastValueReported = this._resetValue = this.value
            }, _setValueAttr: function (c, e) {
                this._handleOnChange(c, e)
            }, _handleOnChange: function (c, e) {
                this._set("value", c);
                this.inherited(arguments)
            }, undo: function () {
                this._setValueAttr(this._lastValueReported, !1)
            }, reset: function () {
                this._hasBeenBlurred = !1;
                this._setValueAttr(this._resetValue, !0)
            }, _onKeyDown: function (c) {
                if (c.keyCode == i.ESCAPE && !c.ctrlKey && !c.altKey && !c.metaKey && (9 > l("ie") || l("ie") && l("quirks"))) {
                    c.preventDefault();
                    var e = c.srcElement, b = e.ownerDocument.createEventObject();
                    b.keyCode = i.ESCAPE;
                    b.shiftKey = c.shiftKey;
                    e.fireEvent("onkeypress",
                        b)
                }
            }})
        })
    }, "dijit/form/_TextBoxMixin": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/on,../main".split(","), function (e, j, i, l, c, g, h, b) {
            var f = j("dijit.form._TextBoxMixin", null, {trim: !1, uppercase: !1, lowercase: !1, propercase: !1, maxLength: "", selectOnClick: !1, placeHolder: "", _getValueAttr: function () {
                return this.parse(this.get("displayedValue"), this.constraints)
            }, _setValueAttr: function (a, b, d) {
                var c;
                void 0 !== a && (c = this.filter(a), "string" != typeof d &&
                    (d = null !== c && ("number" != typeof c || !isNaN(c)) ? this.filter(this.format(c, this.constraints)) : ""));
                if (null != d && ("number" != typeof d || !isNaN(d)) && this.textbox.value != d)this.textbox.value = d, this._set("displayedValue", this.get("displayedValue"));
                "auto" == this.textDir && this.applyTextDir(this.focusNode, d);
                this.inherited(arguments, [c, b])
            }, displayedValue: "", _getDisplayedValueAttr: function () {
                return this.filter(this.textbox.value)
            }, _setDisplayedValueAttr: function (a) {
                null == a ? a = "" : "string" != typeof a && (a = "" + a);
                this.textbox.value =
                    a;
                this._setValueAttr(this.get("value"), void 0);
                this._set("displayedValue", this.get("displayedValue"));
                "auto" == this.textDir && this.applyTextDir(this.focusNode, a)
            }, format: function (a) {
                return null == a ? "" : a.toString ? a.toString() : a
            }, parse: function (a) {
                return a
            }, _refreshState: function () {
            }, onInput: function () {
            }, __skipInputEvent: !1, _onInput: function (a) {
                "auto" == this.textDir && this.applyTextDir(this.focusNode, this.focusNode.value);
                this._processInput(a)
            }, _processInput: function () {
                this._refreshState();
                this._set("displayedValue",
                    this.get("displayedValue"))
            }, postCreate: function () {
                this.textbox.setAttribute("value", this.textbox.value);
                this.inherited(arguments);
                this.own(h(this.textbox, "keydown, keypress, paste, cut, input, compositionend", g.hitch(this, function (a) {
                    var b;
                    if ("keydown" == a.type) {
                        b = a.keyCode;
                        switch (b) {
                            case c.SHIFT:
                            case c.ALT:
                            case c.CTRL:
                            case c.META:
                            case c.CAPS_LOCK:
                            case c.NUM_LOCK:
                            case c.SCROLL_LOCK:
                                return
                        }
                        if (!a.ctrlKey && !a.metaKey && !a.altKey) {
                            switch (b) {
                                case c.NUMPAD_0:
                                case c.NUMPAD_1:
                                case c.NUMPAD_2:
                                case c.NUMPAD_3:
                                case c.NUMPAD_4:
                                case c.NUMPAD_5:
                                case c.NUMPAD_6:
                                case c.NUMPAD_7:
                                case c.NUMPAD_8:
                                case c.NUMPAD_9:
                                case c.NUMPAD_MULTIPLY:
                                case c.NUMPAD_PLUS:
                                case c.NUMPAD_ENTER:
                                case c.NUMPAD_MINUS:
                                case c.NUMPAD_PERIOD:
                                case c.NUMPAD_DIVIDE:
                                    return
                            }
                            if (65 <=
                                b && 90 >= b || 48 <= b && 57 >= b || b == c.SPACE)return;
                            b = !1;
                            for (var d in c)if (c[d] === a.keyCode) {
                                b = !0;
                                break
                            }
                            if (!b)return
                        }
                    }
                    (b = 32 <= a.charCode ? String.fromCharCode(a.charCode) : a.charCode) || (b = 65 <= a.keyCode && 90 >= a.keyCode || 48 <= a.keyCode && 57 >= a.keyCode || a.keyCode == c.SPACE ? String.fromCharCode(a.keyCode) : a.keyCode);
                    b || (b = 229);
                    if ("keypress" == a.type) {
                        if ("string" != typeof b)return;
                        if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b || "0" <= b && "9" >= b || " " === b)if (a.ctrlKey || a.metaKey || a.altKey)return
                    }
                    if ("input" == a.type) {
                        if (this.__skipInputEvent) {
                            this.__skipInputEvent = !1;
                            return
                        }
                    } else this.__skipInputEvent = !0;
                    var f = {faux: !0}, e;
                    for (e in a)"layerX" != e && "layerY" != e && (d = a[e], "function" != typeof d && "undefined" != typeof d && (f[e] = d));
                    g.mixin(f, {charOrCode: b, _wasConsumed: !1, preventDefault: function () {
                        f._wasConsumed = !0;
                        a.preventDefault()
                    }, stopPropagation: function () {
                        a.stopPropagation()
                    }});
                    !1 === this.onInput(f) && (f.preventDefault(), f.stopPropagation());
                    f._wasConsumed || this.defer(function () {
                        this._onInput(f)
                    })
                })))
            }, _blankValue: "", filter: function (a) {
                if (null === a)return this._blankValue;
                if ("string" != typeof a)return a;
                this.trim && (a = g.trim(a));
                this.uppercase && (a = a.toUpperCase());
                this.lowercase && (a = a.toLowerCase());
                this.propercase && (a = a.replace(/[^\s]+/g, function (a) {
                    return a.substring(0, 1).toUpperCase() + a.substring(1)
                }));
                return a
            }, _setBlurValue: function () {
                this._setValueAttr(this.get("value"), !0)
            }, _onBlur: function (a) {
                this.disabled || (this._setBlurValue(), this.inherited(arguments))
            }, _isTextSelected: function () {
                return this.textbox.selectionStart != this.textbox.selectionEnd
            }, _onFocus: function (a) {
                if (!this.disabled && !this.readOnly) {
                    if (this.selectOnClick && "mouse" == a)this._selectOnClickHandle = this.connect(this.domNode, "onmouseup", function () {
                        this.disconnect(this._selectOnClickHandle);
                        this._selectOnClickHandle = null;
                        this._isTextSelected() || f.selectInputText(this.textbox)
                    }), this.defer(function () {
                        if (this._selectOnClickHandle)this.disconnect(this._selectOnClickHandle), this._selectOnClickHandle = null
                    }, 500);
                    this.inherited(arguments);
                    this._refreshState()
                }
            }, reset: function () {
                this.textbox.value = "";
                this.inherited(arguments)
            },
                _setTextDirAttr: function (a) {
                    if (!this._created || this.textDir != a)this._set("textDir", a), this.applyTextDir(this.focusNode, this.focusNode.value)
                }});
            f._setSelectionRange = b._setSelectionRange = function (a, b, d) {
                a.setSelectionRange && a.setSelectionRange(b, d)
            };
            f.selectInputText = b.selectInputText = function (a, b, d) {
                a = i.byId(a);
                isNaN(b) && (b = 0);
                isNaN(d) && (d = a.value ? a.value.length : 0);
                try {
                    a.focus(), f._setSelectionRange(a, b, d)
                } catch (c) {
                }
            };
            return f
        })
    }, "url:dijit/form/templates/TextBox.html": '<div class="dijit dijitReset dijitInline dijitLeft" id="widget_${id}" role="presentation"\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class="dijitReset dijitInputInner" data-dojo-attach-point=\'textbox,focusNode\' autocomplete="off"\n\t\t\t${!nameAttrSetting} type=\'${type}\'\n\t/></div\n></div>\n',
    "dijit/form/Button": function () {
        define("require,dojo/_base/declare,dojo/dom-class,dojo/has,dojo/_base/kernel,dojo/_base/lang,dojo/ready,./_FormWidget,./_ButtonMixin,dojo/text!./templates/Button.html".split(","), function (e, j, i, l, c, g, h, b, f, a) {
            l("dijit-legacy-requires") && h(0, function () {
                e(["dijit/form/DropDownButton", "dijit/form/ComboButton", "dijit/form/ToggleButton"])
            });
            return j("dijit.form.Button", [b, f], {showLabel: !0, iconClass: "dijitNoIcon", _setIconClassAttr: {node: "iconNode", type: "class"}, baseClass: "dijitButton",
                templateString: a, _setValueAttr: "valueNode", _onClick: function (a) {
                    var b = this.inherited(arguments);
                    b && this.valueNode && (this.valueNode.click(), a.preventDefault(), a.stopPropagation());
                    return b
                }, _fillContent: function (a) {
                    if (a && (!this.params || !("label"in this.params)))if (a = g.trim(a.innerHTML))this.label = a
                }, _setShowLabelAttr: function (a) {
                    this.containerNode && i.toggle(this.containerNode, "dijitDisplayNone", !a);
                    this._set("showLabel", a)
                }, setLabel: function (a) {
                    c.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.",
                        "", "2.0");
                    this.set("label", a)
                }, _setLabelAttr: function (a) {
                    this.inherited(arguments);
                    if (!this.showLabel && !("title"in this.params))this.titleNode.title = g.trim(this.containerNode.innerText || this.containerNode.textContent || "")
                }})
        })
    }, "dijit/form/_ButtonMixin": function () {
        define(["dojo/_base/declare", "dojo/dom", "dojo/_base/event", "../registry"], function (e, j, i, l) {
            return e("dijit.form._ButtonMixin", null, {label: "", type: "button", _onClick: function (c) {
                if (this.disabled)return i.stop(c), !1;
                var g = !1 === this.onClick(c);
                if (!g && "submit" == this.type && !(this.valueNode || this.focusNode).form)for (var e = this.domNode; e.parentNode; e = e.parentNode) {
                    var b = l.byNode(e);
                    if (b && "function" == typeof b._onSubmit) {
                        b._onSubmit(c);
                        g = !0;
                        break
                    }
                }
                g && c.preventDefault();
                return!g
            }, postCreate: function () {
                this.inherited(arguments);
                j.setSelectable(this.focusNode, !1)
            }, onClick: function () {
                return!0
            }, _setLabelAttr: function (c) {
                this._set("label", c);
                (this.containerNode || this.focusNode).innerHTML = c
            }})
        })
    }, "url:dijit/form/templates/Button.html": '<span class="dijit dijitReset dijitInline" role="presentation"\n\t><span class="dijitReset dijitInline dijitButtonNode"\n\t\tdata-dojo-attach-event="ondijitclick:_onClick" role="presentation"\n\t\t><span class="dijitReset dijitStretch dijitButtonContents"\n\t\t\tdata-dojo-attach-point="titleNode,focusNode"\n\t\t\trole="button" aria-labelledby="${id}_label"\n\t\t\t><span class="dijitReset dijitInline dijitIcon" data-dojo-attach-point="iconNode"></span\n\t\t\t><span class="dijitReset dijitToggleButtonIconChar">&#x25CF;</span\n\t\t\t><span class="dijitReset dijitInline dijitButtonText"\n\t\t\t\tid="${id}_label"\n\t\t\t\tdata-dojo-attach-point="containerNode"\n\t\t\t></span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type="${type}" value="${value}" class="dijitOffScreen"\n\t\ttabIndex="-1" role="presentation" data-dojo-attach-point="valueNode"\n/></span>\n',
    "dijit/MenuBar": function () {
        define(["dojo/_base/declare", "dojo/_base/event", "dojo/keys", "./_MenuBase", "dojo/text!./templates/MenuBar.html"], function (e, j, i, l, c) {
            return e("dijit.MenuBar", l, {templateString: c, baseClass: "dijitMenuBar", _isMenuBar: !0, postCreate: function () {
                this.inherited(arguments);
                var c = this.isLeftToRight();
                this.connectKeyNavHandlers(c ? [i.LEFT_ARROW] : [i.RIGHT_ARROW], c ? [i.RIGHT_ARROW] : [i.LEFT_ARROW]);
                this._orient = ["below"]
            }, _moveToPopup: function (c) {
                if (this.focusedChild && this.focusedChild.popup && !this.focusedChild.disabled)this.onItemClick(this.focusedChild, c)
            }, focusChild: function (c) {
                var e = this.focusedChild, e = e && e.popup && e.popup.isShowingNow;
                this.inherited(arguments);
                e && c.popup && !c.disabled && this._openPopup(!0)
            }, _onKeyPress: function (c) {
                if (!c.ctrlKey && !c.altKey)switch (c.charOrCode) {
                    case i.DOWN_ARROW:
                        this._moveToPopup(c), j.stop(c)
                }
            }, onItemClick: function (c, e) {
                if (c.popup && c.popup.isShowingNow && ("keypress" !== e.type || e.keyCode !== i.DOWN_ARROW))c.popup.onCancel(); else this.inherited(arguments)
            }})
        })
    },
    "dijit/_MenuBase": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/_base/lang,dojo/mouse,dojo/on,dojo/window,./a11yclick,./popup,./registry,./_Widget,./_KeyNavContainer,./_TemplatedMixin".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n) {
            return j("dijit._MenuBase", [p, n, m], {parentMenu: null, popupDelay: 500, autoFocus: !1, postCreate: function () {
                var f = this, g = function (a) {
                    return c.contains(a, "dijitMenuItem")
                };
                this.own(b(this.containerNode, b.selector(g, h.enter),
                    function () {
                        f.onItemHover(d.byNode(this))
                    }), b(this.containerNode, b.selector(g, h.leave), function () {
                    f.onItemUnhover(d.byNode(this))
                }), b(this.containerNode, b.selector(g, a), function (a) {
                    f.onItemClick(d.byNode(this), a);
                    a.stopPropagation();
                    a.preventDefault()
                }));
                this.inherited(arguments)
            }, onExecute: function () {
            }, onCancel: function () {
            }, _moveToPopup: function (a) {
                if (this.focusedChild && this.focusedChild.popup && !this.focusedChild.disabled)this.onItemClick(this.focusedChild, a); else(a = this._getTopMenu()) && a._isMenuBar &&
                a.focusNext()
            }, _onPopupHover: function () {
                if (this.currentPopup && this.currentPopup._pendingClose_timer) {
                    var a = this.currentPopup.parentMenu;
                    a.focusedChild && a.focusedChild._setSelected(!1);
                    a.focusedChild = this.currentPopup.from_item;
                    a.focusedChild._setSelected(!0);
                    this._stopPendingCloseTimer(this.currentPopup)
                }
            }, onItemHover: function (a) {
                if (this.isActive && (this.focusChild(a), this.focusedChild.popup && !this.focusedChild.disabled && !this.hover_timer))this.hover_timer = this.defer("_openPopup", this.popupDelay);
                this.focusedChild && this.focusChild(a);
                this._hoveredChild = a;
                a._set("hovering", !0)
            }, _onChildBlur: function (a) {
                this._stopPopupTimer();
                a._setSelected(!1);
                var b = a.popup;
                if (b)this._stopPendingCloseTimer(b), b._pendingClose_timer = this.defer(function () {
                    b._pendingClose_timer = null;
                    if (b.parentMenu)b.parentMenu.currentPopup = null;
                    k.close(b)
                }, this.popupDelay)
            }, onItemUnhover: function (a) {
                this.isActive && this._stopPopupTimer();
                if (this._hoveredChild == a)this._hoveredChild = null;
                a._set("hovering", !1)
            }, _stopPopupTimer: function () {
                if (this.hover_timer)this.hover_timer =
                    this.hover_timer.remove()
            }, _stopPendingCloseTimer: function (a) {
                if (a._pendingClose_timer)a._pendingClose_timer = a._pendingClose_timer.remove()
            }, _stopFocusTimer: function () {
                if (this._focus_timer)this._focus_timer = this._focus_timer.remove()
            }, _getTopMenu: function () {
                for (var a = this; a.parentMenu; a = a.parentMenu);
                return a
            }, onItemClick: function (a, b) {
                "undefined" == typeof this.isShowingNow && this._markActive();
                this.focusChild(a);
                if (a.disabled)return!1;
                a.popup ? this._openPopup("keypress" == b.type) : (this.onExecute(), a._onClick ?
                    a._onClick(b) : a.onClick(b))
            }, _openPopup: function (a) {
                this._stopPopupTimer();
                var b = this.focusedChild;
                if (b) {
                    var d = b.popup;
                    if (!d.isShowingNow) {
                        this.currentPopup && (this._stopPendingCloseTimer(this.currentPopup), k.close(this.currentPopup));
                        d.parentMenu = this;
                        d.from_item = b;
                        var c = this;
                        k.open({parent: this, popup: d, around: b.domNode, orient: this._orient || ["after", "before"], onCancel: function () {
                            c.focusChild(b);
                            c._cleanUp();
                            b._setSelected(!0);
                            c.focusedChild = b
                        }, onExecute: g.hitch(this, "_cleanUp")});
                        this.currentPopup =
                            d;
                        d.connect(d.domNode, "onmouseenter", g.hitch(c, "_onPopupHover"))
                    }
                    if (a && d.focus)d._focus_timer = this.defer(g.hitch(d, function () {
                        this._focus_timer = null;
                        this.focus()
                    }))
                }
            }, _markActive: function () {
                this.isActive = !0;
                c.replace(this.domNode, "dijitMenuActive", "dijitMenuPassive")
            }, onOpen: function () {
                this.isShowingNow = !0;
                this._markActive()
            }, _markInactive: function () {
                this.isActive = !1;
                c.replace(this.domNode, "dijitMenuPassive", "dijitMenuActive")
            }, onClose: function () {
                this._stopFocusTimer();
                this._markInactive();
                this.isShowingNow = !1;
                this.parentMenu = null
            }, _closeChild: function () {
                this._stopPopupTimer();
                if (this.currentPopup)0 <= e.indexOf(this._focusManager.activeStack, this.id) && (l.set(this.focusedChild.focusNode, "tabIndex", this.tabIndex), this.focusedChild.focusNode.focus()), k.close(this.currentPopup), this.currentPopup = null;
                if (this.focusedChild)this.focusedChild._setSelected(!1), this.onItemUnhover(this.focusedChild), this.focusedChild = null
            }, _onItemFocus: function (a) {
                if (this._hoveredChild && this._hoveredChild != a)this.onItemUnhover(this._hoveredChild)
            },
                _onBlur: function () {
                    this._cleanUp();
                    this.inherited(arguments)
                }, _cleanUp: function () {
                    this._closeChild();
                    "undefined" == typeof this.isShowingNow && this._markInactive()
                }})
        })
    }, "dijit/popup": function () {
        define("dojo/_base/array,dojo/aspect,dojo/_base/connect,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-construct,dojo/dom-geometry,dojo/dom-style,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/on,dojo/sniff,./place,./BackgroundIframe,./main".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r) {
            function q() {
                this._popupWrapper &&
                (h.destroy(this._popupWrapper), delete this._popupWrapper)
            }

            l = l(null, {_stack: [], _beginZIndex: 1E3, _idGen: 1, _createWrapper: function (a) {
                var b = a._popupWrapper, d = a.domNode;
                if (!b)b = h.create("div", {"class": "dijitPopup", style: {display: "none"}, role: "presentation"}, a.ownerDocumentBody), b.appendChild(d), d = d.style, d.display = "", d.visibility = "", d.position = "", d.top = "0px", a._popupWrapper = b, j.after(a, "destroy", q, !0);
                return b
            }, moveOffScreen: function (a) {
                a = this._createWrapper(a);
                f.set(a, {visibility: "hidden", top: "-9999px",
                    display: ""})
            }, hide: function (a) {
                a = this._createWrapper(a);
                f.set(a, "display", "none")
            }, getTopPopup: function () {
                for (var a = this._stack, b = a.length - 1; 0 < b && a[b].parent === a[b - 1].widget; b--);
                return a[b]
            }, open: function (f) {
                for (var e = this._stack, h = f.popup, l = f.orient || ["below", "below-alt", "above", "above-alt"], j = f.parent ? f.parent.isLeftToRight() : b.isBodyLtr(h.ownerDocument), q = f.around, r = f.around && f.around.id ? f.around.id + "_dropdown" : "popup_" + this._idGen++; e.length && (!f.parent || !c.isDescendant(f.parent.domNode, e[e.length -
                    1].widget.domNode));)this.close(e[e.length - 1].widget);
                var J = this._createWrapper(h);
                g.set(J, {id: r, style: {zIndex: this._beginZIndex + e.length}, "class": "dijitPopup " + (h.baseClass || h["class"] || "").split(" ")[0] + "Popup", dijitPopupParent: f.parent ? f.parent.id : ""});
                if ((m("ie") || m("mozilla")) && !h.bgIframe)h.bgIframe = new o(J);
                l = q ? n.around(J, q, l, j, h.orient ? d.hitch(h, "orient") : null) : n.at(J, f, "R" == l ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], f.padding);
                J.style.display = "";
                J.style.visibility = "visible";
                h.domNode.style.visibility =
                    "visible";
                j = [];
                j.push(p(J, i._keypress, d.hitch(this, function (b) {
                    if (b.charOrCode == k.ESCAPE && f.onCancel)a.stop(b), f.onCancel(); else if (b.charOrCode === k.TAB && (a.stop(b), (b = this.getTopPopup()) && b.onCancel))b.onCancel()
                })));
                h.onCancel && f.onCancel && j.push(h.on("cancel", f.onCancel));
                j.push(h.on(h.onExecute ? "execute" : "change", d.hitch(this, function () {
                    var a = this.getTopPopup();
                    if (a && a.onExecute)a.onExecute()
                })));
                e.push({widget: h, parent: f.parent, onExecute: f.onExecute, onCancel: f.onCancel, onClose: f.onClose, handlers: j});
                if (h.onOpen)h.onOpen(l);
                return l
            }, close: function (a) {
                for (var b = this._stack; a && e.some(b, function (b) {
                    return b.widget == a
                }) || !a && b.length;) {
                    var d = b.pop(), c = d.widget, f = d.onClose;
                    if (c.onClose)c.onClose();
                    for (var g; g = d.handlers.pop();)g.remove();
                    c && c.domNode && this.hide(c);
                    f && f()
                }
            }});
            return r.popup = new l
        })
    }, "dijit/place": function () {
        define("dojo/_base/array,dojo/dom-geometry,dojo/dom-style,dojo/_base/kernel,dojo/_base/window,dojo/window,./main".split(","), function (e, j, i, l, c, g, h) {
            function b(b, a, h, d) {
                var i = g.getBox(b.ownerDocument);
                (!b.parentNode || "body" != ("" + b.parentNode.tagName).toLowerCase()) && c.body(b.ownerDocument).appendChild(b);
                var m = null;
                e.some(a, function (a) {
                    var c = a.corner, g = a.pos, e = 0, l = {w: {L: i.l + i.w - g.x, R: g.x - i.l, M: i.w}[c.charAt(1)], h: {T: i.t + i.h - g.y, B: g.y - i.t, M: i.h}[c.charAt(0)]}, n = b.style;
                    n.left = n.right = "auto";
                    h && (e = h(b, a.aroundCorner, c, l, d), e = "undefined" == typeof e ? 0 : e);
                    var t = b.style, y = t.display, z = t.visibility;
                    if ("none" == t.display)t.visibility = "hidden", t.display = "";
                    n = j.position(b);
                    t.display = y;
                    t.visibility = z;
                    y = {L: g.x,
                        R: g.x - n.w, M: Math.max(i.l, Math.min(i.l + i.w, g.x + (n.w >> 1)) - n.w)}[c.charAt(1)];
                    z = {T: g.y, B: g.y - n.h, M: Math.max(i.t, Math.min(i.t + i.h, g.y + (n.h >> 1)) - n.h)}[c.charAt(0)];
                    g = Math.max(i.l, y);
                    t = Math.max(i.t, z);
                    y = Math.min(i.l + i.w, y + n.w);
                    z = Math.min(i.t + i.h, z + n.h);
                    y -= g;
                    z -= t;
                    e += n.w - y + (n.h - z);
                    if (null == m || e < m.overflow)m = {corner: c, aroundCorner: a.aroundCorner, x: g, y: t, w: y, h: z, overflow: e, spaceAvailable: l};
                    return!e
                });
                m.overflow && h && h(b, m.aroundCorner, m.corner, m.spaceAvailable, d);
                var a = j.isBodyLtr(b.ownerDocument), l = b.style;
                l.top = m.y + "px";
                l[a ? "left" : "right"] = (a ? m.x : i.w - m.x - m.w) + "px";
                l[a ? "right" : "left"] = "auto";
                return m
            }

            return h.place = {at: function (c, a, g, d) {
                g = e.map(g, function (b) {
                    var c = {corner: b, pos: {x: a.x, y: a.y}};
                    d && (c.pos.x += "L" == b.charAt(1) ? d.x : -d.x, c.pos.y += "T" == b.charAt(0) ? d.y : -d.y);
                    return c
                });
                return b(c, g)
            }, around: function (c, a, g, d, h) {
                function m(a, b) {
                    I.push({aroundCorner: a, corner: b, pos: {x: {L: u, R: u + y, M: u + (y >> 1)}[a.charAt(1)], y: {T: t, B: t + z, M: t + (z >> 1)}[a.charAt(0)]}})
                }

                var n = "string" == typeof a || "offsetWidth"in a ? j.position(a,
                    !0) : a;
                if (a.parentNode)for (var o = "absolute" == i.getComputedStyle(a).position, a = a.parentNode; a && 1 == a.nodeType && "BODY" != a.nodeName;) {
                    var r = j.position(a, !0), q = i.getComputedStyle(a);
                    /relative|absolute/.test(q.position) && (o = !1);
                    if (!o && /hidden|auto|scroll/.test(q.overflow)) {
                        var v = Math.min(n.y + n.h, r.y + r.h), s = Math.min(n.x + n.w, r.x + r.w);
                        n.x = Math.max(n.x, r.x);
                        n.y = Math.max(n.y, r.y);
                        n.h = v - n.y;
                        n.w = s - n.x
                    }
                    "absolute" == q.position && (o = !0);
                    a = a.parentNode
                }
                var u = n.x, t = n.y, y = "w"in n ? n.w : n.w = n.width, z = "h"in n ? n.h : (l.deprecated("place.around: dijit/place.__Rectangle: { x:" +
                    u + ", y:" + t + ", height:" + n.height + ", width:" + y + " } has been deprecated.  Please use { x:" + u + ", y:" + t + ", h:" + n.height + ", w:" + y + " }", "", "2.0"), n.h = n.height), I = [];
                e.forEach(g, function (a) {
                    var b = d;
                    switch (a) {
                        case "above-centered":
                            m("TM", "BM");
                            break;
                        case "below-centered":
                            m("BM", "TM");
                            break;
                        case "after-centered":
                            b = !b;
                        case "before-centered":
                            m(b ? "ML" : "MR", b ? "MR" : "ML");
                            break;
                        case "after":
                            b = !b;
                        case "before":
                            m(b ? "TL" : "TR", b ? "TR" : "TL");
                            m(b ? "BL" : "BR", b ? "BR" : "BL");
                            break;
                        case "below-alt":
                            b = !b;
                        case "below":
                            m(b ? "BL" :
                                "BR", b ? "TL" : "TR");
                            m(b ? "BR" : "BL", b ? "TR" : "TL");
                            break;
                        case "above-alt":
                            b = !b;
                        case "above":
                            m(b ? "TL" : "TR", b ? "BL" : "BR");
                            m(b ? "TR" : "TL", b ? "BR" : "BL");
                            break;
                        default:
                            m(a.aroundCorner, a.corner)
                    }
                });
                c = b(c, I, h, {w: y, h: z});
                c.aroundNodePos = n;
                return c
            }}
        })
    }, "dijit/BackgroundIframe": function () {
        define("require,./main,dojo/_base/config,dojo/dom-construct,dojo/dom-style,dojo/_base/lang,dojo/on,dojo/sniff,dojo/_base/window".split(","), function (e, j, i, l, c, g, h, b, f) {
            var a = new function () {
                var a = [];
                this.pop = function () {
                    var d;
                    a.length ?
                        (d = a.pop(), d.style.display = "") : (9 > b("ie") ? (d = "<iframe src='" + (i.dojoBlankHtmlUrl || e.toUrl("dojo/resources/blank.html") || 'javascript:""') + "' role='presentation' style='position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity=\"0\");'>", d = f.doc.createElement(d)) : (d = l.create("iframe"), d.src = 'javascript:""', d.className = "dijitBackgroundIframe", d.setAttribute("role", "presentation"), c.set(d, "opacity", 0.1)), d.tabIndex = -1);
                    return d
                };
                this.push = function (b) {
                    b.style.display = "none";
                    a.push(b)
                }
            };
            j.BackgroundIframe = function (f) {
                if (!f.id)throw Error("no id");
                if (b("ie") || b("mozilla")) {
                    var d = this.iframe = a.pop();
                    f.appendChild(d);
                    7 > b("ie") || b("quirks") ? (this.resize(f), this._conn = h(f, "resize", g.hitch(this, function () {
                        this.resize(f)
                    }))) : c.set(d, {width: "100%", height: "100%"})
                }
            };
            g.extend(j.BackgroundIframe, {resize: function (a) {
                this.iframe && c.set(this.iframe, {width: a.offsetWidth + "px", height: a.offsetHeight + "px"})
            }, destroy: function () {
                if (this._conn)this._conn.remove(), this._conn = null;
                this.iframe && (a.push(this.iframe),
                    delete this.iframe)
            }});
            return j.BackgroundIframe
        })
    }, "dijit/_KeyNavContainer": function () {
        define("dojo/_base/kernel,./_Container,./_FocusMixin,dojo/_base/array,dojo/keys,dojo/_base/declare,dojo/_base/event,dojo/dom-attr,dojo/_base/lang".split(","), function (e, j, i, l, c, g, h, b, f) {
            return g("dijit._KeyNavContainer", [i, j], {tabIndex: "0", connectKeyNavHandlers: function (a, b) {
                var d = this._keyNavCodes = {}, g = f.hitch(this, "focusPrev"), e = f.hitch(this, "focusNext");
                l.forEach(a, function (a) {
                    d[a] = g
                });
                l.forEach(b, function (a) {
                    d[a] =
                        e
                });
                d[c.HOME] = f.hitch(this, "focusFirstChild");
                d[c.END] = f.hitch(this, "focusLastChild");
                this.connect(this.domNode, "onkeypress", "_onContainerKeypress");
                this.connect(this.domNode, "onfocus", "_onContainerFocus")
            }, startupKeyNavChildren: function () {
                e.deprecated("startupKeyNavChildren() call no longer needed", "", "2.0")
            }, startup: function () {
                this.inherited(arguments);
                l.forEach(this.getChildren(), f.hitch(this, "_startupChild"))
            }, addChild: function (a, b) {
                this.inherited(arguments);
                this._startupChild(a)
            }, focus: function () {
                this.focusFirstChild()
            },
                focusFirstChild: function () {
                    this.focusChild(this._getFirstFocusableChild())
                }, focusLastChild: function () {
                    this.focusChild(this._getLastFocusableChild())
                }, focusNext: function () {
                    this.focusChild(this._getNextFocusableChild(this.focusedChild, 1))
                }, focusPrev: function () {
                    this.focusChild(this._getNextFocusableChild(this.focusedChild, -1), !0)
                }, focusChild: function (a, b) {
                    a && (this.focusedChild && a !== this.focusedChild && this._onChildBlur(this.focusedChild), a.set("tabIndex", this.tabIndex), a.focus(b ? "end" : "start"), this._set("focusedChild",
                        a))
                }, _startupChild: function (a) {
                    a.set("tabIndex", "-1");
                    this.connect(a, "_onFocus", function () {
                        a.set("tabIndex", this.tabIndex)
                    });
                    this.connect(a, "_onBlur", function () {
                        a.set("tabIndex", "-1")
                    })
                }, _onContainerFocus: function (a) {
                    a.target !== this.domNode || this.focusedChild || (this.focusFirstChild(), b.set(this.domNode, "tabIndex", "-1"))
                }, _onBlur: function (a) {
                    this.tabIndex && b.set(this.domNode, "tabIndex", this.tabIndex);
                    this.focusedChild = null;
                    this.inherited(arguments)
                }, _onContainerKeypress: function (a) {
                    if (!a.ctrlKey && !a.altKey) {
                        var b = this._keyNavCodes[a.charOrCode];
                        b && (b(), h.stop(a))
                    }
                }, _onChildBlur: function () {
                }, _getFirstFocusableChild: function () {
                    return this._getNextFocusableChild(null, 1)
                }, _getLastFocusableChild: function () {
                    return this._getNextFocusableChild(null, -1)
                }, _getNextFocusableChild: function (a, b) {
                    a && (a = this._getSiblingOfChild(a, b));
                    for (var c = this.getChildren(), f = 0; f < c.length; f++) {
                        a || (a = c[0 < b ? 0 : c.length - 1]);
                        if (a.isFocusable())return a;
                        a = this._getSiblingOfChild(a, b)
                    }
                    return null
                }})
        })
    }, "url:dijit/templates/MenuBar.html": '<div class="dijitMenuBar dijitMenuPassive" data-dojo-attach-point="containerNode"  role="menubar" tabIndex="${tabIndex}" data-dojo-attach-event="onkeypress: _onKeyPress"></div>\n',
    "dijit/PopupMenuBarItem": function () {
        define(["dojo/_base/declare", "./PopupMenuItem", "./MenuBarItem"], function (e, j, i) {
            return e("dijit.PopupMenuBarItem", [j, i._MenuBarItemMixin], {})
        })
    }, "dijit/PopupMenuItem": function () {
        define("dojo/_base/declare,dojo/dom-style,dojo/query,./registry,./MenuItem,./hccss".split(","), function (e, j, i, l, c) {
            return e("dijit.PopupMenuItem", c, {_fillContent: function () {
                if (this.srcNodeRef) {
                    var c = i("*", this.srcNodeRef);
                    this.inherited(arguments, [c[0]]);
                    this.dropDownContainer = this.srcNodeRef
                }
            },
                startup: function () {
                    if (!this._started) {
                        this.inherited(arguments);
                        if (!this.popup) {
                            var c = i("[widgetId]", this.dropDownContainer)[0];
                            this.popup = l.byNode(c)
                        }
                        this.ownerDocumentBody.appendChild(this.popup.domNode);
                        this.popup.startup();
                        this.popup.domNode.style.display = "none";
                        this.arrowWrapper && j.set(this.arrowWrapper, "visibility", "");
                        this.focusNode.setAttribute("aria-haspopup", "true")
                    }
                }, destroyDescendants: function (c) {
                    this.popup && (this.popup._destroyed || this.popup.destroyRecursive(c), delete this.popup);
                    this.inherited(arguments)
                }})
        })
    },
    "dijit/MenuItem": function () {
        define("dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/_base/kernel,dojo/sniff,./_Widget,./_TemplatedMixin,./_Contained,./_CssStateMixin,dojo/text!./templates/MenuItem.html".split(","), function (e, j, i, l, c, g, h, b, f, a, k) {
            return e("dijit.MenuItem", [h, b, f, a], {templateString: k, baseClass: "dijitMenuItem", label: "", _setLabelAttr: function (a) {
                this.containerNode.innerHTML = a;
                this._set("label", a);
                "auto" === this.textDir && this.applyTextDir(this.focusNode, this.label)
            }, iconClass: "dijitNoIcon",
                _setIconClassAttr: {node: "iconNode", type: "class"}, accelKey: "", disabled: !1, _fillContent: function (a) {
                    a && !("label"in this.params) && this.set("label", a.innerHTML)
                }, buildRendering: function () {
                    this.inherited(arguments);
                    var a = this.id + "_text";
                    i.set(this.containerNode, "id", a);
                    this.accelKeyNode && (i.set(this.accelKeyNode, "id", this.id + "_accel"), a += " " + this.id + "_accel");
                    this.domNode.setAttribute("aria-labelledby", a);
                    j.setSelectable(this.domNode, !1)
                }, onClick: function () {
                }, focus: function () {
                    try {
                        8 == g("ie") && this.containerNode.focus(),
                            this.focusNode.focus()
                    } catch (a) {
                    }
                }, _onFocus: function () {
                    this._setSelected(!0);
                    this.getParent()._onItemFocus(this);
                    this.inherited(arguments)
                }, _setSelected: function (a) {
                    l.toggle(this.domNode, "dijitMenuItemSelected", a)
                }, setLabel: function (a) {
                    c.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
                    this.set("label", a)
                }, setDisabled: function (a) {
                    c.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
                    this.set("disabled", a)
                },
                _setDisabledAttr: function (a) {
                    this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
                    this._set("disabled", a)
                }, _setAccelKeyAttr: function (a) {
                    this.accelKeyNode.style.display = a ? "" : "none";
                    this.accelKeyNode.innerHTML = a;
                    i.set(this.containerNode, "colSpan", a ? "1" : "2");
                    this._set("accelKey", a)
                }, _setTextDirAttr: function (a) {
                    if (!this._created || this.textDir != a)this._set("textDir", a), this.applyTextDir(this.focusNode, this.label)
                }})
        })
    }, "url:dijit/templates/MenuItem.html": '<tr class="dijitReset dijitMenuItem" data-dojo-attach-point="focusNode" role="menuitem" tabIndex="-1">\n\t<td class="dijitReset dijitMenuItemIconCell" role="presentation">\n\t\t<img src="${_blankGif}" alt="" class="dijitIcon dijitMenuItemIcon" data-dojo-attach-point="iconNode"/>\n\t</td>\n\t<td class="dijitReset dijitMenuItemLabel" colspan="2" data-dojo-attach-point="containerNode"></td>\n\t<td class="dijitReset dijitMenuItemAccelKey" style="display: none" data-dojo-attach-point="accelKeyNode"></td>\n\t<td class="dijitReset dijitMenuArrowCell" role="presentation">\n\t\t<div data-dojo-attach-point="arrowWrapper" style="visibility: hidden">\n\t\t\t<img src="${_blankGif}" alt="" class="dijitMenuExpand"/>\n\t\t\t<span class="dijitMenuExpandA11y">+</span>\n\t\t</div>\n\t</td>\n</tr>\n',
    "dijit/MenuBarItem": function () {
        define(["dojo/_base/declare", "./MenuItem", "dojo/text!./templates/MenuBarItem.html"], function (e, j, i) {
            i = e("dijit._MenuBarItemMixin", null, {templateString: i, _setIconClassAttr: null});
            e = e("dijit.MenuBarItem", [j, i], {});
            e._MenuBarItemMixin = i;
            return e
        })
    }, "url:dijit/templates/MenuBarItem.html": '<div class="dijitReset dijitInline dijitMenuItem dijitMenuItemLabel" data-dojo-attach-point="focusNode"\n\t \trole="menuitem" tabIndex="-1">\n\t<span data-dojo-attach-point="containerNode"></span>\n</div>\n',
    "dijit/Menu": function () {
        define("require,dojo/_base/array,dojo/_base/declare,dojo/_base/event,dojo/dom,dojo/dom-attr,dojo/dom-geometry,dojo/dom-style,dojo/keys,dojo/_base/lang,dojo/on,dojo/sniff,dojo/_base/window,dojo/window,./popup,./DropDownMenu,dojo/ready".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r) {
            d("dijit-legacy-requires") && r(0, function () {
                e(["dijit/MenuItem", "dijit/PopupMenuItem", "dijit/CheckedMenuItem", "dijit/MenuSeparator"])
            });
            return i("dijit.Menu", o, {constructor: function () {
                this._bindings =
                    []
            }, targetNodeIds: [], selector: "", contextMenuForWindow: !1, leftClickToOpen: !1, refocus: !0, postCreate: function () {
                this.contextMenuForWindow ? this.bindDomNode(this.ownerDocumentBody) : j.forEach(this.targetNodeIds, this.bindDomNode, this);
                this.inherited(arguments)
            }, _iframeContentWindow: function (a) {
                return m.get(this._iframeContentDocument(a)) || this._iframeContentDocument(a).__parent__ || a.name && p.doc.frames[a.name] || null
            }, _iframeContentDocument: function (a) {
                return a.contentDocument || a.contentWindow && a.contentWindow.document ||
                    a.name && p.doc.frames[a.name] && p.doc.frames[a.name].document || null
            }, bindDomNode: function (b) {
                var b = c.byId(b, this.ownerDocument), d;
                if ("iframe" == b.tagName.toLowerCase()) {
                    var e = b, m = this._iframeContentWindow(e);
                    d = p.body(m.document)
                } else d = b == p.body(this.ownerDocument) ? this.ownerDocument.documentElement : b;
                var h = {node: b, iframe: e};
                g.set(b, "_dijitMenu" + this.id, this._bindings.push(h));
                var i = a.hitch(this, function (a) {
                    var b = this.selector, c = b ? function (a) {
                        return k.selector(b, a)
                    } : function (a) {
                        return a
                    }, d = this;
                    return[k(a,
                        c(this.leftClickToOpen ? "click" : "contextmenu"), function (a) {
                            l.stop(a);
                            d._scheduleOpen(this, e, {x: a.pageX, y: a.pageY})
                        }), k(a, c("keydown"), function (a) {
                        a.shiftKey && a.keyCode == f.F10 && (l.stop(a), d._scheduleOpen(this, e))
                    })]
                });
                h.connects = d ? i(d) : [];
                if (e)h.onloadHandler = a.hitch(this, function () {
                    var a = this._iframeContentWindow(e);
                    d = p.body(a.document);
                    h.connects = i(d)
                }), e.addEventListener ? e.addEventListener("load", h.onloadHandler, !1) : e.attachEvent("onload", h.onloadHandler)
            }, unBindDomNode: function (a) {
                var b;
                try {
                    b = c.byId(a,
                        this.ownerDocument)
                } catch (d) {
                    return
                }
                a = "_dijitMenu" + this.id;
                if (b && g.has(b, a)) {
                    for (var f = g.get(b, a) - 1, e = this._bindings[f], m; m = e.connects.pop();)m.remove();
                    (m = e.iframe) && (m.removeEventListener ? m.removeEventListener("load", e.onloadHandler, !1) : m.detachEvent("onload", e.onloadHandler));
                    g.remove(b, a);
                    delete this._bindings[f]
                }
            }, _scheduleOpen: function (a, b, c) {
                if (!this._openTimer)this._openTimer = this.defer(function () {
                    delete this._openTimer;
                    this._openMyself({target: a, iframe: b, coords: c})
                }, 1)
            }, _openMyself: function (a) {
                function f() {
                    j.refocus &&
                        o && o.focus();
                    n.close(j)
                }

                var g = a.target, e = a.iframe, a = a.coords;
                this.currentTarget = g;
                if (a) {
                    if (e) {
                        var g = h.position(e, !0), m = this._iframeContentWindow(e), m = h.docScroll(m.document), k = b.getComputedStyle(e), i = b.toPixelValue, l = (d("ie") && d("quirks") ? 0 : i(e, k.paddingLeft)) + (d("ie") && d("quirks") ? i(e, k.borderLeftWidth) : 0), e = (d("ie") && d("quirks") ? 0 : i(e, k.paddingTop)) + (d("ie") && d("quirks") ? i(e, k.borderTopWidth) : 0);
                        a.x += g.x + l - m.x;
                        a.y += g.y + e - m.y
                    }
                } else a = h.position(g, !0), a.x += 10, a.y += 10;
                var j = this, e = this._focusManager.get("prevNode"),
                    g = this._focusManager.get("curNode"), o = !g || c.isDescendant(g, this.domNode) ? e : g;
                n.open({popup: this, x: a.x, y: a.y, onExecute: f, onCancel: f, orient: this.isLeftToRight() ? "L" : "R"});
                this.focus();
                this._onBlur = function () {
                    this.inherited("_onBlur", arguments);
                    n.close(this)
                }
            }, destroy: function () {
                j.forEach(this._bindings, function (a) {
                    a && this.unBindDomNode(a.node)
                }, this);
                this.inherited(arguments)
            }})
        })
    }, "dijit/DropDownMenu": function () {
        define("dojo/_base/declare,dojo/_base/event,dojo/keys,dojo/text!./templates/Menu.html,./_OnDijitClickMixin,./_MenuBase".split(","),
            function (e, j, i, l, c, g) {
                return e("dijit.DropDownMenu", [g, c], {templateString: l, baseClass: "dijitMenu", postCreate: function () {
                    this.inherited(arguments);
                    var c = this.isLeftToRight();
                    this._openSubMenuKey = c ? i.RIGHT_ARROW : i.LEFT_ARROW;
                    this._closeSubMenuKey = c ? i.LEFT_ARROW : i.RIGHT_ARROW;
                    this.connectKeyNavHandlers([i.UP_ARROW], [i.DOWN_ARROW])
                }, _onKeyPress: function (c) {
                    if (!c.ctrlKey && !c.altKey)switch (c.charOrCode) {
                        case this._openSubMenuKey:
                            this._moveToPopup(c);
                            j.stop(c);
                            break;
                        case this._closeSubMenuKey:
                            if (this.parentMenu)if (this.parentMenu._isMenuBar)this.parentMenu.focusPrev();
                            else this.onCancel(!1); else j.stop(c)
                    }
                }})
            })
    }, "url:dijit/templates/Menu.html": '<table class="dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable" role="menu" tabIndex="${tabIndex}"\n\t   data-dojo-attach-event="onkeypress:_onKeyPress" cellspacing="0">\n\t<tbody class="dijitReset" data-dojo-attach-point="containerNode"></tbody>\n</table>\n', "dijit/Toolbar": function () {
        define("require,dojo/_base/declare,dojo/has,dojo/keys,dojo/ready,./_Widget,./_KeyNavContainer,./_TemplatedMixin".split(","), function (e, j, i, l, c, g, h, b) {
            i("dijit-legacy-requires") && c(0, function () {
                e(["dijit/ToolbarSeparator"])
            });
            return j("dijit.Toolbar", [g, b, h], {templateString: '<div class="dijit" role="toolbar" tabIndex="${tabIndex}" data-dojo-attach-point="containerNode"></div>', baseClass: "dijitToolbar", postCreate: function () {
                this.inherited(arguments);
                this.connectKeyNavHandlers(this.isLeftToRight() ? [l.LEFT_ARROW] : [l.RIGHT_ARROW], this.isLeftToRight() ? [l.RIGHT_ARROW] : [l.LEFT_ARROW])
            }})
        })
    }, "dijit/Dialog": function () {
        define("require,dojo/_base/array,dojo/_base/connect,dojo/_base/declare,dojo/_base/Deferred,dojo/dom,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/event,dojo/_base/fx,dojo/i18n,dojo/keys,dojo/_base/lang,dojo/on,dojo/ready,dojo/sniff,dojo/window,dojo/dnd/Moveable,dojo/dnd/TimedMoveable,./focus,./_base/manager,./_Widget,./_TemplatedMixin,./_CssStateMixin,./form/_FormMixin,./_DialogMixin,./DialogUnderlay,./layout/ContentPane,dojo/text!./templates/Dialog.html,./main,dojo/i18n!./nls/common".split(","),
            function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r, q, v, s, u, t, y, z, I, J, N, E, S, Q, B) {
                var t = l("dijit._DialogBase", [z, J, N, I], {templateString: Q, baseClass: "dijitDialog", cssStateNodes: {closeButtonNode: "dijitDialogCloseIcon"}, _setTitleAttr: [
                    {node: "titleNode", type: "innerHTML"},
                    {node: "titleBar", type: "attribute"}
                ], open: !1, duration: t.defaultDuration, refocus: !0, autofocus: !0, _firstFocusItem: null, _lastFocusItem: null, doLayout: !1, draggable: !0, _setDraggableAttr: function (a) {
                    this._set("draggable", a)
                }, "aria-describedby": "", maxRatio: 0.9,
                    postMixInProperties: function () {
                        var a = d.getLocalization("dijit", "common");
                        m.mixin(this, a);
                        this.inherited(arguments)
                    }, postCreate: function () {
                        f.set(this.domNode, {display: "none", position: "absolute"});
                        this.ownerDocumentBody.appendChild(this.domNode);
                        this.inherited(arguments);
                        this.connect(this, "onExecute", "hide");
                        this.connect(this, "onCancel", "hide");
                        this._modalconnects = []
                    }, onLoad: function () {
                        this._position();
                        this.autofocus && w.isTop(this) && (this._getFocusItems(this.domNode), u.focus(this._firstFocusItem));
                        this.inherited(arguments)
                    }, _endDrag: function () {
                        var a = b.position(this.domNode), c = q.getBox(this.ownerDocument);
                        a.y = Math.min(Math.max(a.y, 0), c.h - a.h);
                        a.x = Math.min(Math.max(a.x, 0), c.w - a.w);
                        this._relativePosition = a;
                        this._position()
                    }, _setup: function () {
                        var a = this.domNode;
                        this.titleBar && this.draggable ? (this._moveable = new (6 == r("ie") ? s : v)(a, {handle: this.titleBar}), this.connect(this._moveable, "onMoveStop", "_endDrag")) : h.add(a, "dijitDialogFixed");
                        this.underlayAttrs = {dialogId: this.id, "class": j.map(this["class"].split(/\s/),
                            function (a) {
                                return a + "_underlay"
                            }).join(" "), ownerDocument: this.ownerDocument}
                    }, _size: function () {
                        this._checkIfSingleChild();
                        if (this._singleChild) {
                            if ("undefined" != typeof this._singleChildOriginalStyle)this._singleChild.domNode.style.cssText = this._singleChildOriginalStyle, delete this._singleChildOriginalStyle
                        } else f.set(this.containerNode, {width: "auto", height: "auto"});
                        var a = b.position(this.domNode), c = q.getBox(this.ownerDocument);
                        c.w *= this.maxRatio;
                        c.h *= this.maxRatio;
                        if (a.w >= c.w || a.h >= c.h) {
                            var d = b.position(this.containerNode),
                                g = Math.min(a.w, c.w) - (a.w - d.w), a = Math.min(a.h, c.h) - (a.h - d.h);
                            if (this._singleChild && this._singleChild.resize) {
                                if ("undefined" == typeof this._singleChildOriginalStyle)this._singleChildOriginalStyle = this._singleChild.domNode.style.cssText;
                                this._singleChild.resize({w: g, h: a})
                            } else f.set(this.containerNode, {width: g + "px", height: a + "px", overflow: "auto", position: "relative"})
                        } else this._singleChild && this._singleChild.resize && this._singleChild.resize()
                    }, _position: function () {
                        if (!h.contains(this.ownerDocumentBody,
                            "dojoMove")) {
                            var a = this.domNode, c = q.getBox(this.ownerDocument), d = this._relativePosition, g = d ? null : b.position(a);
                            f.set(a, {left: Math.floor(c.l + (d ? d.x : (c.w - g.w) / 2)) + "px", top: Math.floor(c.t + (d ? d.y : (c.h - g.h) / 2)) + "px"})
                        }
                    }, _onKey: function (b) {
                        if (b.charOrCode) {
                            var c = b.target;
                            b.charOrCode === p.TAB && this._getFocusItems(this.domNode);
                            var d = this._firstFocusItem == this._lastFocusItem;
                            if (c == this._firstFocusItem && b.shiftKey && b.charOrCode === p.TAB)d || u.focus(this._lastFocusItem), a.stop(b); else if (c == this._lastFocusItem &&
                                b.charOrCode === p.TAB && !b.shiftKey)d || u.focus(this._firstFocusItem), a.stop(b); else {
                                for (; c;) {
                                    if (c == this.domNode || h.contains(c, "dijitPopup"))if (b.charOrCode == p.ESCAPE)this.onCancel(); else return;
                                    c = c.parentNode
                                }
                                if (b.charOrCode !== p.TAB)a.stop(b); else if (!r("opera"))try {
                                    this._firstFocusItem.focus()
                                } catch (f) {
                                }
                            }
                        }
                    }, show: function () {
                        if (!this.open) {
                            this._started || this.startup();
                            if (!this._alreadyInitialized)this._setup(), this._alreadyInitialized = !0;
                            this._fadeOutDeferred && this._fadeOutDeferred.cancel();
                            var a = q.get(this.ownerDocument);
                            this._modalconnects.push(n(a, "scroll", m.hitch(this, "resize")));
                            this._modalconnects.push(n(this.domNode, i._keypress, m.hitch(this, "_onKey")));
                            f.set(this.domNode, {opacity: 0, display: ""});
                            this._set("open", !0);
                            this._onShow();
                            this._size();
                            this._position();
                            var b;
                            this._fadeInDeferred = new c(m.hitch(this, function () {
                                b.stop();
                                delete this._fadeInDeferred
                            }));
                            b = k.fadeIn({node: this.domNode, duration: this.duration, beforeBegin: m.hitch(this, function () {
                                w.show(this, this.underlayAttrs)
                            }), onEnd: m.hitch(this, function () {
                                this.autofocus &&
                                    w.isTop(this) && (this._getFocusItems(this.domNode), u.focus(this._firstFocusItem));
                                this._fadeInDeferred.resolve(!0);
                                delete this._fadeInDeferred
                            })}).play();
                            return this._fadeInDeferred
                        }
                    }, hide: function () {
                        if (this._alreadyInitialized && this.open) {
                            this._fadeInDeferred && this._fadeInDeferred.cancel();
                            var a;
                            this._fadeOutDeferred = new c(m.hitch(this, function () {
                                a.stop();
                                delete this._fadeOutDeferred
                            }));
                            this._fadeOutDeferred.then(m.hitch(this, "onHide"));
                            a = k.fadeOut({node: this.domNode, duration: this.duration, onEnd: m.hitch(this,
                                function () {
                                    this.domNode.style.display = "none";
                                    w.hide(this);
                                    this._fadeOutDeferred.resolve(!0);
                                    delete this._fadeOutDeferred
                                })}).play();
                            if (this._scrollConnected)this._scrollConnected = !1;
                            for (var b; b = this._modalconnects.pop();)b.remove();
                            this._relativePosition && delete this._relativePosition;
                            this._set("open", !1);
                            return this._fadeOutDeferred
                        }
                    }, resize: function () {
                        "none" != this.domNode.style.display && (E._singleton && E._singleton.layout(), this._position(), this._size())
                    }, destroy: function () {
                        this._fadeInDeferred &&
                        this._fadeInDeferred.cancel();
                        this._fadeOutDeferred && this._fadeOutDeferred.cancel();
                        this._moveable && this._moveable.destroy();
                        for (var a; a = this._modalconnects.pop();)a.remove();
                        w.hide(this);
                        this.inherited(arguments)
                    }}), A = l("dijit.Dialog", [S, t], {});
                A._DialogBase = t;
                var w = A._DialogLevelManager = {_beginZIndex: 950, show: function (a, b) {
                    x[x.length - 1].focus = u.curNode;
                    var c = E._singleton;
                    !c || c._destroyed ? c = B._underlay = E._singleton = new E(b) : c.set(a.underlayAttrs);
                    var d = x[x.length - 1].dialog ? x[x.length - 1].zIndex + 2 :
                        A._DialogLevelManager._beginZIndex;
                    1 == x.length && c.show();
                    f.set(E._singleton.domNode, "zIndex", d - 1);
                    f.set(a.domNode, "zIndex", d);
                    x.push({dialog: a, underlayAttrs: b, zIndex: d})
                }, hide: function (a) {
                    if (x[x.length - 1].dialog == a) {
                        x.pop();
                        var b = x[x.length - 1];
                        E._singleton._destroyed || (1 == x.length ? E._singleton.hide() : (f.set(E._singleton.domNode, "zIndex", b.zIndex - 1), E._singleton.set(b.underlayAttrs)));
                        if (a.refocus) {
                            a = b.focus;
                            if (b.dialog && (!a || !g.isDescendant(a, b.dialog.domNode)))b.dialog._getFocusItems(b.dialog.domNode),
                                a = b.dialog._firstFocusItem;
                            if (a)try {
                                a.focus()
                            } catch (c) {
                            }
                        }
                    } else b = j.indexOf(j.map(x, function (a) {
                        return a.dialog
                    }), a), -1 != b && x.splice(b, 1)
                }, isTop: function (a) {
                    return x[x.length - 1].dialog == a
                }}, x = A._dialogStack = [
                    {dialog: null, focus: null, underlayAttrs: null}
                ];
                r("dijit-legacy-requires") && o(0, function () {
                    e(["dijit/TooltipDialog"])
                });
                return A
            })
    }, "dojo/dnd/Moveable": function () {
        define("../_base/array,../_base/declare,../_base/event,../_base/lang,../dom,../dom-class,../Evented,../on,../topic,../touch,./common,./Mover,../_base/window".split(","),
            function (e, j, i, l, c, g, h, b, f, a, k, d, p) {
                return j("dojo.dnd.Moveable", [h], {handle: "", delay: 0, skip: !1, constructor: function (f, g) {
                    this.node = c.byId(f);
                    g || (g = {});
                    this.handle = g.handle ? c.byId(g.handle) : null;
                    if (!this.handle)this.handle = this.node;
                    this.delay = 0 < g.delay ? g.delay : 0;
                    this.skip = g.skip;
                    this.mover = g.mover ? g.mover : d;
                    this.events = [b(this.handle, a.press, l.hitch(this, "onMouseDown")), b(this.handle, "dragstart", l.hitch(this, "onSelectStart")), b(this.handle, "selectstart", l.hitch(this, "onSelectStart"))]
                }, markupFactory: function (a, b, c) {
                    return new c(b, a)
                }, destroy: function () {
                    e.forEach(this.events, function (a) {
                        a.remove()
                    });
                    this.events = this.node = this.handle = null
                }, onMouseDown: function (c) {
                    if (!this.skip || !k.isFormElement(c)) {
                        if (this.delay)this.events.push(b(this.handle, a.move, l.hitch(this, "onMouseMove")), b(this.handle, a.release, l.hitch(this, "onMouseUp"))), this._lastX = c.pageX, this._lastY = c.pageY; else this.onDragDetected(c);
                        i.stop(c)
                    }
                }, onMouseMove: function (a) {
                    if (Math.abs(a.pageX - this._lastX) > this.delay || Math.abs(a.pageY - this._lastY) >
                        this.delay)this.onMouseUp(a), this.onDragDetected(a);
                    i.stop(a)
                }, onMouseUp: function (a) {
                    for (var b = 0; 2 > b; ++b)this.events.pop().remove();
                    i.stop(a)
                }, onSelectStart: function (a) {
                    (!this.skip || !k.isFormElement(a)) && i.stop(a)
                }, onDragDetected: function (a) {
                    new this.mover(this.node, a, this)
                }, onMoveStart: function (a) {
                    f.publish("/dnd/move/start", a);
                    g.add(p.body(), "dojoMove");
                    g.add(this.node, "dojoMoveItem")
                }, onMoveStop: function (a) {
                    f.publish("/dnd/move/stop", a);
                    g.remove(p.body(), "dojoMove");
                    g.remove(this.node, "dojoMoveItem")
                },
                    onFirstMove: function () {
                    }, onMove: function (a, b) {
                        this.onMoving(a, b);
                        var c = a.node.style;
                        c.left = b.l + "px";
                        c.top = b.t + "px";
                        this.onMoved(a, b)
                    }, onMoving: function () {
                    }, onMoved: function () {
                    }})
            })
    }, "dojo/dnd/common": function () {
        define(["../_base/connect", "../_base/kernel", "../_base/lang", "../dom"], function (e, j, i, l) {
            var c = {};
            c.getCopyKeyState = e.isCopyKey;
            c._uniqueId = 0;
            c.getUniqueId = function () {
                var g;
                do g = j._scopeName + "Unique" + ++c._uniqueId; while (l.byId(g));
                return g
            };
            c._empty = {};
            c.isFormElement = function (c) {
                c = c.target;
                if (3 == c.nodeType)c = c.parentNode;
                return 0 <= " button textarea input select option ".indexOf(" " + c.tagName.toLowerCase() + " ")
            };
            i.mixin(i.getObject("dojo.dnd", !0), c);
            return c
        })
    }, "dojo/dnd/Mover": function () {
        define("../_base/array,../_base/declare,../_base/event,../_base/lang,../sniff,../_base/window,../dom,../dom-geometry,../dom-style,../Evented,../on,../touch,./common,./autoscroll".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m) {
            return j("dojo.dnd.Mover", [a], {constructor: function (a, b, c) {
                this.node = h.byId(a);
                this.marginBox = {l: b.pageX, t: b.pageY};
                this.mouseButton = b.button;
                b = this.host = c;
                a = a.ownerDocument;
                this.events = [k(a, d.move, l.hitch(this, "onFirstMove")), k(a, d.move, l.hitch(this, "onMouseMove")), k(a, d.release, l.hitch(this, "onMouseUp")), k(a, "dragstart", i.stop), k(a.body, "selectstart", i.stop)];
                m.autoScrollStart(a);
                if (b && b.onMoveStart)b.onMoveStart(this)
            }, onMouseMove: function (a) {
                m.autoScroll(a);
                var b = this.marginBox;
                this.host.onMove(this, {l: b.l + a.pageX, t: b.t + a.pageY}, a);
                i.stop(a)
            }, onMouseUp: function (a) {
                (c("webkit") &&
                    c("mac") && 2 == this.mouseButton ? 0 == a.button : this.mouseButton == a.button) && this.destroy();
                i.stop(a)
            }, onFirstMove: function (a) {
                var c = this.node.style, d, e = this.host;
                switch (c.position) {
                    case "relative":
                    case "absolute":
                        d = Math.round(parseFloat(c.left)) || 0;
                        c = Math.round(parseFloat(c.top)) || 0;
                        break;
                    default:
                        c.position = "absolute";
                        c = b.getMarginBox(this.node);
                        d = g.doc.body;
                        var m = f.getComputedStyle(d), h = b.getMarginBox(d, m), m = b.getContentBox(d, m);
                        d = c.l - (m.l - h.l);
                        c = c.t - (m.t - h.t)
                }
                this.marginBox.l = d - this.marginBox.l;
                this.marginBox.t =
                    c - this.marginBox.t;
                if (e && e.onFirstMove)e.onFirstMove(this, a);
                this.events.shift().remove()
            }, destroy: function () {
                e.forEach(this.events, function (a) {
                    a.remove()
                });
                var a = this.host;
                if (a && a.onMoveStop)a.onMoveStop(this);
                this.events = this.node = this.host = null
            }})
        })
    }, "dojo/dnd/autoscroll": function () {
        define("../_base/lang,../sniff,../_base/window,../dom-geometry,../dom-style,../window".split(","), function (e, j, i, l, c, g) {
            var h = {};
            e.setObject("dojo.dnd.autoscroll", h);
            h.getViewport = g.getBox;
            h.V_TRIGGER_AUTOSCROLL = 32;
            h.H_TRIGGER_AUTOSCROLL = 32;
            h.V_AUTOSCROLL_VALUE = 16;
            h.H_AUTOSCROLL_VALUE = 16;
            var b, f = i.doc, a = Infinity, k = Infinity;
            h.autoScrollStart = function (c) {
                f = c;
                b = g.getBox(f);
                c = i.body(f).parentNode;
                a = Math.max(c.scrollHeight - b.h, 0);
                k = Math.max(c.scrollWidth - b.w, 0)
            };
            h.autoScroll = function (c) {
                var e = b || g.getBox(f), m = i.body(f).parentNode, l = 0, j = 0;
                c.clientX < h.H_TRIGGER_AUTOSCROLL ? l = -h.H_AUTOSCROLL_VALUE : c.clientX > e.w - h.H_TRIGGER_AUTOSCROLL && (l = Math.min(h.H_AUTOSCROLL_VALUE, k - m.scrollLeft));
                c.clientY < h.V_TRIGGER_AUTOSCROLL ?
                    j = -h.V_AUTOSCROLL_VALUE : c.clientY > e.h - h.V_TRIGGER_AUTOSCROLL && (j = Math.min(h.V_AUTOSCROLL_VALUE, a - m.scrollTop));
                window.scrollBy(l, j)
            };
            h._validNodes = {div: 1, p: 1, td: 1};
            h._validOverflow = {auto: 1, scroll: 1};
            h.autoScrollNodes = function (a) {
                for (var b, f, g, e, k, q, v = 0, s = 0, u = a.target; u;) {
                    if (1 == u.nodeType && u.tagName.toLowerCase()in h._validNodes) {
                        g = c.getComputedStyle(u);
                        e = g.overflow.toLowerCase()in h._validOverflow;
                        k = g.overflowX.toLowerCase()in h._validOverflow;
                        q = g.overflowY.toLowerCase()in h._validOverflow;
                        if (e ||
                            k || q)b = l.getContentBox(u, g), f = l.position(u, !0);
                        if (e || k) {
                            g = Math.min(h.H_TRIGGER_AUTOSCROLL, b.w / 2);
                            k = a.pageX - f.x;
                            if (j("webkit") || j("opera"))k += i.body().scrollLeft;
                            v = 0;
                            0 < k && k < b.w && (k < g ? v = -g : k > b.w - g && (v = g), u.scrollLeft += v)
                        }
                        if (e || q) {
                            e = Math.min(h.V_TRIGGER_AUTOSCROLL, b.h / 2);
                            q = a.pageY - f.y;
                            if (j("webkit") || j("opera"))q += i.body().scrollTop;
                            s = 0;
                            0 < q && q < b.h && (q < e ? s = -e : q > b.h - e && (s = e), u.scrollTop += s)
                        }
                        if (v || s)return
                    }
                    try {
                        u = u.parentNode
                    } catch (t) {
                        u = null
                    }
                }
                h.autoScroll(a)
            };
            return h
        })
    }, "dojo/dnd/TimedMoveable": function () {
        define(["../_base/declare",
            "./Moveable"], function (e, j) {
            var i = j.prototype.onMove;
            return e("dojo.dnd.TimedMoveable", j, {timeout: 40, constructor: function (e, c) {
                c || (c = {});
                if (c.timeout && "number" == typeof c.timeout && 0 <= c.timeout)this.timeout = c.timeout
            }, onMoveStop: function (e) {
                e._timer && (clearTimeout(e._timer), i.call(this, e, e._leftTop));
                j.prototype.onMoveStop.apply(this, arguments)
            }, onMove: function (e, c) {
                e._leftTop = c;
                if (!e._timer) {
                    var g = this;
                    e._timer = setTimeout(function () {
                        e._timer = null;
                        i.call(g, e, e._leftTop)
                    }, this.timeout)
                }
            }})
        })
    }, "dijit/_base/manager": function () {
        define(["dojo/_base/array",
            "dojo/_base/config", "dojo/_base/lang", "../registry", "../main"], function (e, j, i, l, c) {
            var g = {};
            e.forEach("byId,getUniqueId,findWidgets,_destroyAll,byNode,getEnclosingWidget".split(","), function (c) {
                g[c] = l[c]
            });
            i.mixin(g, {defaultDuration: j.defaultDuration || 200});
            i.mixin(c, g);
            return c
        })
    }, "dijit/_DialogMixin": function () {
        define(["dojo/_base/declare", "./a11y"], function (e, j) {
            return e("dijit._DialogMixin", null, {execute: function () {
            }, onCancel: function () {
            }, onExecute: function () {
            }, _onSubmit: function () {
                this.onExecute();
                this.execute(this.get("value"))
            }, _getFocusItems: function () {
                var e = j._getTabNavigable(this.containerNode);
                this._firstFocusItem = e.lowest || e.first || this.closeButtonNode || this.domNode;
                this._lastFocusItem = e.last || e.highest || this._firstFocusItem
            }})
        })
    }, "dijit/DialogUnderlay": function () {
        define("dojo/_base/declare,dojo/dom-attr,dojo/window,./_Widget,./_TemplatedMixin,./BackgroundIframe".split(","), function (e, j, i, l, c, g) {
            return e("dijit.DialogUnderlay", [l, c], {templateString: "<div class='dijitDialogUnderlayWrapper'><div class='dijitDialogUnderlay' data-dojo-attach-point='node'></div></div>",
                dialogId: "", "class": "", _setDialogIdAttr: function (c) {
                    j.set(this.node, "id", c + "_underlay");
                    this._set("dialogId", c)
                }, _setClassAttr: function (c) {
                    this.node.className = "dijitDialogUnderlay " + c;
                    this._set("class", c)
                }, postCreate: function () {
                    this.ownerDocumentBody.appendChild(this.domNode)
                }, layout: function () {
                    var c = this.node.style, b = this.domNode.style;
                    b.display = "none";
                    var f = i.getBox(this.ownerDocument);
                    b.top = f.t + "px";
                    b.left = f.l + "px";
                    c.width = f.w + "px";
                    c.height = f.h + "px";
                    b.display = "block"
                }, show: function () {
                    this.domNode.style.display =
                        "block";
                    this.layout();
                    this.bgIframe = new g(this.domNode)
                }, hide: function () {
                    this.bgIframe.destroy();
                    delete this.bgIframe;
                    this.domNode.style.display = "none"
                }})
        })
    }, "url:dijit/templates/Dialog.html": '<div class="dijitDialog" role="dialog" aria-labelledby="${id}_title">\n\t<div data-dojo-attach-point="titleBar" class="dijitDialogTitleBar">\n\t\t<span data-dojo-attach-point="titleNode" class="dijitDialogTitle" id="${id}_title"\n\t\t\t\trole="header" level="1"></span>\n\t\t<span data-dojo-attach-point="closeButtonNode" class="dijitDialogCloseIcon" data-dojo-attach-event="ondijitclick: onCancel" title="${buttonCancel}" role="button" tabIndex="-1">\n\t\t\t<span data-dojo-attach-point="closeText" class="closeText" title="${buttonCancel}">x</span>\n\t\t</span>\n\t</div>\n\t<div data-dojo-attach-point="containerNode" class="dijitDialogPaneContent"></div>\n</div>\n',
    "dijit/layout/TabContainer": function () {
        define(["dojo/_base/lang", "dojo/_base/declare", "./_TabContainerBase", "./TabController", "./ScrollingTabController"], function (e, j, i, l, c) {
            return j("dijit.layout.TabContainer", i, {useMenu: !0, useSlider: !0, controllerWidget: "", _makeController: function (c) {
                var h = this.baseClass + "-tabs" + (this.doLayout ? "" : " dijitTabNoLayout");
                return new ("string" == typeof this.controllerWidget ? e.getObject(this.controllerWidget) : this.controllerWidget)({id: this.id + "_tablist", ownerDocument: this.ownerDocument,
                    dir: this.dir, lang: this.lang, textDir: this.textDir, tabPosition: this.tabPosition, doLayout: this.doLayout, containerId: this.id, "class": h, nested: this.nested, useMenu: this.useMenu, useSlider: this.useSlider, tabStripClass: this.tabStrip ? this.baseClass + (this.tabStrip ? "" : "No") + "Strip" : null}, c)
            }, postMixInProperties: function () {
                this.inherited(arguments);
                if (!this.controllerWidget)this.controllerWidget = ("top" == this.tabPosition || "bottom" == this.tabPosition) && !this.nested ? c : l
            }})
        })
    }, "dijit/layout/_TabContainerBase": function () {
        define("dojo/text!./templates/TabContainer.html,./StackContainer,./utils,../_TemplatedMixin,dojo/_base/declare,dojo/dom-class,dojo/dom-geometry,dojo/dom-style".split(","),
            function (e, j, i, l, c, g, h, b) {
                return c("dijit.layout._TabContainerBase", [j, l], {tabPosition: "top", baseClass: "dijitTabContainer", tabStrip: !1, nested: !1, templateString: e, postMixInProperties: function () {
                    this.baseClass += this.tabPosition.charAt(0).toUpperCase() + this.tabPosition.substr(1).replace(/-.*/, "");
                    this.srcNodeRef && b.set(this.srcNodeRef, "visibility", "hidden");
                    this.inherited(arguments)
                }, buildRendering: function () {
                    this.inherited(arguments);
                    this.tablist = this._makeController(this.tablistNode);
                    this.doLayout ||
                    g.add(this.domNode, "dijitTabContainerNoLayout");
                    this.nested ? (g.add(this.domNode, "dijitTabContainerNested"), g.add(this.tablist.containerNode, "dijitTabContainerTabListNested"), g.add(this.tablistSpacer, "dijitTabContainerSpacerNested"), g.add(this.containerNode, "dijitTabPaneWrapperNested")) : g.add(this.domNode, "tabStrip-" + (this.tabStrip ? "enabled" : "disabled"))
                }, _setupChild: function (b) {
                    g.add(b.domNode, "dijitTabPane");
                    this.inherited(arguments)
                }, startup: function () {
                    this._started || (this.tablist.startup(), this.inherited(arguments))
                },
                    layout: function () {
                        if (this._contentBox && "undefined" != typeof this._contentBox.l) {
                            var b = this.selectedChildWidget;
                            if (this.doLayout) {
                                var a = this.tabPosition.replace(/-h/, "");
                                this.tablist.layoutAlign = a;
                                a = [this.tablist, {domNode: this.tablistSpacer, layoutAlign: a}, {domNode: this.containerNode, layoutAlign: "client"}];
                                i.layoutChildren(this.domNode, this._contentBox, a);
                                this._containerContentBox = i.marginBox2contentBox(this.containerNode, a[2]);
                                b && b.resize && b.resize(this._containerContentBox)
                            } else {
                                if (this.tablist.resize) {
                                    a =
                                        this.tablist.domNode.style;
                                    a.width = "0";
                                    var c = h.getContentBox(this.domNode).w;
                                    a.width = "";
                                    this.tablist.resize({w: c})
                                }
                                b && b.resize && b.resize()
                            }
                        }
                    }, destroy: function () {
                        this.tablist && this.tablist.destroy();
                        this.inherited(arguments)
                    }})
            })
    }, "url:dijit/layout/templates/TabContainer.html": '<div class="dijitTabContainer">\n\t<div class="dijitTabListWrapper" data-dojo-attach-point="tablistNode"></div>\n\t<div data-dojo-attach-point="tablistSpacer" class="dijitTabSpacer ${baseClass}-spacer"></div>\n\t<div class="dijitTabPaneWrapper ${baseClass}-container" data-dojo-attach-point="containerNode"></div>\n</div>\n',
    "dijit/layout/StackContainer": function () {
        define("dojo/_base/array,dojo/cookie,dojo/_base/declare,dojo/dom-class,dojo/has,dojo/_base/lang,dojo/ready,dojo/topic,../registry,../_WidgetBase,./_LayoutWidget,dojo/i18n!../nls/common".split(","), function (e, j, i, l, c, g, h, b, f, a, k) {
            c("dijit-legacy-requires") && h(0, function () {
                require(["dijit/layout/StackController"])
            });
            i = i("dijit.layout.StackContainer", k, {doLayout: !0, persist: !1, baseClass: "dijitStackContainer", buildRendering: function () {
                this.inherited(arguments);
                l.add(this.domNode, "dijitLayoutContainer");
                this.containerNode.setAttribute("role", "tabpanel")
            }, postCreate: function () {
                this.inherited(arguments);
                this.connect(this.domNode, "onkeypress", this._onKeyPress)
            }, startup: function () {
                if (!this._started) {
                    var a = this.getChildren();
                    e.forEach(a, this._setupChild, this);
                    this.persist ? this.selectedChildWidget = f.byId(j(this.id + "_selectedChild")) : e.some(a, function (a) {
                        if (a.selected)this.selectedChildWidget = a;
                        return a.selected
                    }, this);
                    var c = this.selectedChildWidget;
                    if (!c && a[0])c =
                        this.selectedChildWidget = a[0], c.selected = !0;
                    b.publish(this.id + "-startup", {children: a, selected: c});
                    this.inherited(arguments)
                }
            }, resize: function () {
                if (!this._hasBeenShown) {
                    this._hasBeenShown = !0;
                    var a = this.selectedChildWidget;
                    a && this._showChild(a)
                }
                this.inherited(arguments)
            }, _setupChild: function (a) {
                this.inherited(arguments);
                l.replace(a.domNode, "dijitHidden", "dijitVisible");
                a.domNode.title = ""
            }, addChild: function (a, c) {
                this.inherited(arguments);
                this._started && (b.publish(this.id + "-addChild", a, c), this.layout(),
                    this.selectedChildWidget || this.selectChild(a))
            }, removeChild: function (a) {
                this.inherited(arguments);
                this._started && b.publish(this.id + "-removeChild", a);
                if (!this._descendantsBeingDestroyed) {
                    if (this.selectedChildWidget === a && (this.selectedChildWidget = void 0, this._started)) {
                        var c = this.getChildren();
                        c.length && this.selectChild(c[0])
                    }
                    this._started && this.layout()
                }
            }, selectChild: function (a, c) {
                a = f.byId(a);
                if (this.selectedChildWidget != a) {
                    var g = this._transition(a, this.selectedChildWidget, c);
                    this._set("selectedChildWidget",
                        a);
                    b.publish(this.id + "-selectChild", a);
                    this.persist && j(this.id + "_selectedChild", this.selectedChildWidget.id)
                }
                return g
            }, _transition: function (a, b) {
                b && this._hideChild(b);
                var c = this._showChild(a);
                a.resize && (this.doLayout ? a.resize(this._containerContentBox || this._contentBox) : a.resize());
                return c
            }, _adjacent: function (a) {
                var b = this.getChildren(), c = e.indexOf(b, this.selectedChildWidget), c = c + (a ? 1 : b.length - 1);
                return b[c % b.length]
            }, forward: function () {
                return this.selectChild(this._adjacent(!0), !0)
            }, back: function () {
                return this.selectChild(this._adjacent(!1),
                    !0)
            }, _onKeyPress: function (a) {
                b.publish(this.id + "-containerKeyPress", {e: a, page: this})
            }, layout: function () {
                var a = this.selectedChildWidget;
                a && a.resize && (this.doLayout ? a.resize(this._containerContentBox || this._contentBox) : a.resize())
            }, _showChild: function (a) {
                var b = this.getChildren();
                a.isFirstChild = a == b[0];
                a.isLastChild = a == b[b.length - 1];
                a._set("selected", !0);
                l.replace(a.domNode, "dijitVisible", "dijitHidden");
                return a._onShow && a._onShow() || !0
            }, _hideChild: function (a) {
                a._set("selected", !1);
                l.replace(a.domNode,
                    "dijitHidden", "dijitVisible");
                a.onHide && a.onHide()
            }, closeChild: function (a) {
                a.onClose(this, a) && (this.removeChild(a), a.destroyRecursive())
            }, destroyDescendants: function (a) {
                this._descendantsBeingDestroyed = !0;
                this.selectedChildWidget = void 0;
                e.forEach(this.getChildren(), function (b) {
                    a || this.removeChild(b);
                    b.destroyRecursive(a)
                }, this);
                this._descendantsBeingDestroyed = !1
            }});
            i.ChildWidgetProperties = {selected: !1, disabled: !1, closable: !1, iconClass: "dijitNoIcon", showTitle: !0};
            g.extend(a, i.ChildWidgetProperties);
            return i
        })
    }, "dijit/layout/TabController": function () {
        define("dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/i18n,dojo/_base/lang,./StackController,../registry,../Menu,../MenuItem,dojo/text!./templates/_TabButton.html,dojo/i18n!../nls/common".split(","), function (e, j, i, l, c, g, h, b, f, a, k) {
            k = e("dijit.layout._TabButton", h.StackButton, {baseClass: "dijitTab", cssStateNodes: {closeNode: "dijitTabCloseButton"}, templateString: k, scrollOnFocus: !1, buildRendering: function () {
                this.inherited(arguments);
                j.setSelectable(this.containerNode,
                    !1)
            }, startup: function () {
                this.inherited(arguments);
                var a = this.domNode;
                this.defer(function () {
                    a.className = a.className
                }, 1)
            }, _setCloseButtonAttr: function (a) {
                this._set("closeButton", a);
                l.toggle(this.domNode, "dijitClosable", a);
                this.closeNode.style.display = a ? "" : "none";
                a && (a = c.getLocalization("dijit", "common"), this.closeNode && i.set(this.closeNode, "title", a.itemClose))
            }, _setDisabledAttr: function (a) {
                this.inherited(arguments);
                if (this.closeNode)if (a)i.remove(this.closeNode, "title"); else {
                    var b = c.getLocalization("dijit",
                        "common");
                    i.set(this.closeNode, "title", b.itemClose)
                }
            }, _setLabelAttr: function (a) {
                this.inherited(arguments);
                if (!this.showLabel && !this.params.title)this.iconNode.alt = g.trim(this.containerNode.innerText || this.containerNode.textContent || "")
            }});
            e = e("dijit.layout.TabController", h, {baseClass: "dijitTabController", templateString: "<div role='tablist' data-dojo-attach-event='onkeypress:onkeypress'></div>", tabPosition: "top", buttonWidget: k, buttonWidgetCloseClass: "dijitTabCloseButton", postCreate: function () {
                this.inherited(arguments);
                var d = new f({id: this.id + "_Menu", ownerDocument: this.ownerDocument, dir: this.dir, lang: this.lang, textDir: this.textDir, targetNodeIds: [this.domNode], selector: function (a) {
                    return l.contains(a, "dijitClosable") && !l.contains(a, "dijitTabDisabled")
                }});
                this.own(d);
                var g = c.getLocalization("dijit", "common"), e = this;
                d.addChild(new a({label: g.itemClose, ownerDocument: this.ownerDocument, dir: this.dir, lang: this.lang, textDir: this.textDir, onClick: function () {
                    var a = b.byNode(this.getParent().currentTarget);
                    e.onCloseButtonClick(a.page)
                }}))
            }});
            e.TabButton = k;
            return e
        })
    }, "dijit/layout/StackController": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom-class,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/on,../focus,../registry,../_Widget,../_TemplatedMixin,../_Container,../form/ToggleButton,dojo/i18n!../nls/common".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p) {
            p = j("dijit.layout._StackButton", p, {tabIndex: "-1", closeButton: !1, _aria_attr: "aria-selected", buildRendering: function (a) {
                this.inherited(arguments);
                (this.focusNode || this.domNode).setAttribute("role",
                    "tab")
            }});
            j = j("dijit.layout.StackController", [a, k, d], {baseClass: "dijitStackController", templateString: "<span role='tablist' data-dojo-attach-event='onkeypress'></span>", containerId: "", buttonWidget: p, buttonWidgetCloseClass: "dijitStackCloseButton", constructor: function () {
                this.pane2button = {}
            }, postCreate: function () {
                this.inherited(arguments);
                this.subscribe(this.containerId + "-startup", "onStartup");
                this.subscribe(this.containerId + "-addChild", "onAddChild");
                this.subscribe(this.containerId + "-removeChild", "onRemoveChild");
                this.subscribe(this.containerId + "-selectChild", "onSelectChild");
                this.subscribe(this.containerId + "-containerKeyPress", "onContainerKeyPress");
                this.connect(this.containerNode, "click", function (a) {
                    var b = f.getEnclosingWidget(a.target);
                    if (b != this.containerNode && !b.disabled && b.page)for (a = a.target; a !== this.containerNode; a = a.parentNode)if (i.contains(a, this.buttonWidgetCloseClass)) {
                        this.onCloseButtonClick(b.page);
                        break
                    } else if (a == b.domNode) {
                        this.onButtonClick(b.page);
                        break
                    }
                })
            }, onStartup: function (a) {
                e.forEach(a.children,
                    this.onAddChild, this);
                if (a.selected)this.onSelectChild(a.selected);
                var b = f.byId(this.containerId).containerNode, c = this.pane2button, a = {title: "label", showtitle: "showLabel", iconclass: "iconClass", closable: "closeButton", tooltip: "title", disabled: "disabled"}, d = function (a, d) {
                    return h(b, "attrmodified-" + a, function (a) {
                        var b = c[a.detail && a.detail.widget && a.detail.widget.id];
                        b && b.set(d, a.detail.newValue)
                    })
                }, g;
                for (g in a)this.own(d(g, a[g]))
            }, destroy: function () {
                for (var a in this.pane2button)this.onRemoveChild(f.byId(a));
                this.inherited(arguments)
            }, onAddChild: function (a, b) {
                var c = new (g.isString(this.buttonWidget) ? g.getObject(this.buttonWidget) : this.buttonWidget)({id: this.id + "_" + a.id, name: this.id + "_" + a.id, label: a.title, disabled: a.disabled, ownerDocument: this.ownerDocument, dir: a.dir, lang: a.lang, textDir: a.textDir, showLabel: a.showTitle, iconClass: a.iconClass, closeButton: a.closable, title: a.tooltip, page: a});
                this.addChild(c, b);
                this.pane2button[a.id] = c;
                a.controlButton = c;
                if (!this._currentChild)this.onSelectChild(a)
            }, onRemoveChild: function (a) {
                if (this._currentChild ===
                    a)this._currentChild = null;
                var b = this.pane2button[a.id];
                b && (this.removeChild(b), delete this.pane2button[a.id], b.destroy());
                delete a.controlButton
            }, onSelectChild: function (a) {
                if (a) {
                    if (this._currentChild) {
                        var b = this.pane2button[this._currentChild.id];
                        b.set("checked", !1);
                        b.focusNode.setAttribute("tabIndex", "-1")
                    }
                    b = this.pane2button[a.id];
                    b.set("checked", !0);
                    this._currentChild = a;
                    b.focusNode.setAttribute("tabIndex", "0");
                    f.byId(this.containerId).containerNode.setAttribute("aria-labelledby", b.id)
                }
            }, onButtonClick: function (a) {
                var c =
                    this.pane2button[a.id];
                b.focus(c.focusNode);
                this._currentChild && this._currentChild.id === a.id && c.set("checked", !0);
                f.byId(this.containerId).selectChild(a)
            }, onCloseButtonClick: function (a) {
                f.byId(this.containerId).closeChild(a);
                this._currentChild && (a = this.pane2button[this._currentChild.id]) && b.focus(a.focusNode || a.domNode)
            }, adjacent: function (a) {
                if (!this.isLeftToRight() && (!this.tabPosition || /top|bottom/.test(this.tabPosition)))a = !a;
                var b = this.getChildren(), c = e.indexOf(b, this.pane2button[this._currentChild.id]),
                    d = b[c], f;
                do c = (c + (a ? 1 : b.length - 1)) % b.length, f = b[c]; while (f.disabled && f != d);
                return f
            }, onkeypress: function (a) {
                if (!this.disabled && !a.altKey) {
                    var b = null;
                    if (a.ctrlKey || !a._djpage) {
                        switch (a.charOrCode) {
                            case c.LEFT_ARROW:
                            case c.UP_ARROW:
                                a._djpage || (b = !1);
                                break;
                            case c.PAGE_UP:
                                a.ctrlKey && (b = !1);
                                break;
                            case c.RIGHT_ARROW:
                            case c.DOWN_ARROW:
                                a._djpage || (b = !0);
                                break;
                            case c.PAGE_DOWN:
                                a.ctrlKey && (b = !0);
                                break;
                            case c.HOME:
                                for (var d = this.getChildren(), f = 0; f < d.length; f++) {
                                    var g = d[f];
                                    if (!g.disabled) {
                                        this.onButtonClick(g.page);
                                        break
                                    }
                                }
                                l.stop(a);
                                break;
                            case c.END:
                                d = this.getChildren();
                                for (f = d.length - 1; 0 <= f; f--)if (g = d[f], !g.disabled) {
                                    this.onButtonClick(g.page);
                                    break
                                }
                                l.stop(a);
                                break;
                            case c.DELETE:
                                if (this._currentChild.closable)this.onCloseButtonClick(this._currentChild);
                                l.stop(a);
                                break;
                            default:
                                if (a.ctrlKey)if (a.charOrCode === c.TAB)this.onButtonClick(this.adjacent(!a.shiftKey).page), l.stop(a); else if ("w" == a.charOrCode) {
                                    if (this._currentChild.closable)this.onCloseButtonClick(this._currentChild);
                                    l.stop(a)
                                }
                        }
                        null !== b && (this.onButtonClick(this.adjacent(b).page),
                            l.stop(a))
                    }
                }
            }, onContainerKeyPress: function (a) {
                a.e._djpage = a.page;
                this.onkeypress(a.e)
            }});
            j.StackButton = p;
            return j
        })
    }, "dijit/form/ToggleButton": function () {
        define(["dojo/_base/declare", "dojo/_base/kernel", "./Button", "./_ToggleButtonMixin"], function (e, j, i, l) {
            return e("dijit.form.ToggleButton", [i, l], {baseClass: "dijitToggleButton", setChecked: function (c) {
                j.deprecated("setChecked(" + c + ") is deprecated. Use set('checked'," + c + ") instead.", "", "2.0");
                this.set("checked", c)
            }})
        })
    }, "dijit/form/_ToggleButtonMixin": function () {
        define(["dojo/_base/declare",
            "dojo/dom-attr"], function (e, j) {
            return e("dijit.form._ToggleButtonMixin", null, {checked: !1, _aria_attr: "aria-pressed", _onClick: function (e) {
                var l = this.checked;
                this._set("checked", !l);
                var c = this.inherited(arguments);
                this.set("checked", c ? this.checked : l);
                return c
            }, _setCheckedAttr: function (e, l) {
                this._set("checked", e);
                j.set(this.focusNode || this.domNode, "checked", e);
                (this.focusNode || this.domNode).setAttribute(this._aria_attr, e ? "true" : "false");
                this._handleOnChange(e, l)
            }, reset: function () {
                this._hasBeenBlurred = !1;
                this.set("checked", this.params.checked || !1)
            }})
        })
    }, "url:dijit/layout/templates/_TabButton.html": '<div role="presentation" data-dojo-attach-point="titleNode,innerDiv,tabContent" class="dijitTabInner dijitTabContent">\n\t<img src="${_blankGif}" alt="" class="dijitIcon dijitTabButtonIcon" data-dojo-attach-point=\'iconNode\'/>\n\t<span data-dojo-attach-point=\'containerNode,focusNode\' class=\'tabLabel\'></span>\n\t<span class="dijitInline dijitTabCloseButton dijitTabCloseIcon" data-dojo-attach-point=\'closeNode\'\n\t\t  role="presentation">\n\t\t<span data-dojo-attach-point=\'closeText\' class=\'dijitTabCloseText\'>[x]</span\n\t\t\t\t></span>\n</div>\n',
    "dijit/layout/ScrollingTabController": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/fx,dojo/_base/lang,dojo/on,dojo/query,dojo/sniff,../registry,dojo/text!./templates/ScrollingTabController.html,dojo/text!./templates/_ScrollingTabControllerButton.html,./TabController,./utils,../_WidgetsInTemplateMixin,../Menu,../MenuItem,../form/Button,../_HasDropDown,dojo/NodeList-dom".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r, q, v, s) {
            d =
                j("dijit.layout.ScrollingTabController", [m, o], {baseClass: "dijitTabController dijitScrollingTabController", templateString: d, useMenu: !0, useSlider: !0, tabStripClass: "", widgetsInTemplate: !0, _minScroll: 5, _setClassAttr: {node: "containerNode", type: "class"}, buildRendering: function () {
                    this.inherited(arguments);
                    var a = this.domNode;
                    this.scrollNode = this.tablistWrapper;
                    this._initButtons();
                    if (!this.tabStripClass)this.tabStripClass = "dijitTabContainer" + this.tabPosition.charAt(0).toUpperCase() + this.tabPosition.substr(1).replace(/-.*/,
                        "") + "None", i.add(a, "tabStrip-disabled");
                    i.add(this.tablistWrapper, this.tabStripClass)
                }, onStartup: function () {
                    this.inherited(arguments);
                    c.set(this.domNode, "visibility", "");
                    this._postStartup = !0;
                    this.own(b(this.containerNode, "attrmodified-label, attrmodified-iconclass", h.hitch(this, function () {
                        this._dim && this.resize(this._dim)
                    })))
                }, onAddChild: function (a, b) {
                    this.inherited(arguments);
                    c.set(this.containerNode, "width", c.get(this.containerNode, "width") + 200 + "px")
                }, onRemoveChild: function (a, b) {
                    if (this._selectedTab ===
                        this.pane2button[a.id].domNode)this._selectedTab = null;
                    this.inherited(arguments)
                }, _initButtons: function () {
                    this._btnWidth = 0;
                    this._buttons = f("> .tabStripButton", this.domNode).filter(function (a) {
                        if (this.useMenu && a == this._menuBtn.domNode || this.useSlider && (a == this._rightBtn.domNode || a == this._leftBtn.domNode))return this._btnWidth += l.getMarginSize(a).w, !0;
                        c.set(a, "display", "none");
                        return!1
                    }, this)
                }, _getTabsWidth: function () {
                    var a = this.getChildren();
                    if (a.length) {
                        var b = a[this.isLeftToRight() ? 0 : a.length - 1].domNode,
                            a = a[this.isLeftToRight() ? a.length - 1 : 0].domNode;
                        return a.offsetLeft + a.offsetWidth - b.offsetLeft
                    }
                    return 0
                }, _enableBtn: function (a) {
                    var b = this._getTabsWidth(), a = a || c.get(this.scrollNode, "width");
                    return 0 < b && a < b
                }, resize: function (a) {
                    this._dim = a;
                    this.scrollNode.style.height = "auto";
                    var b = this._contentBox = n.marginBox2contentBox(this.domNode, {h: 0, w: a.w});
                    b.h = this.scrollNode.offsetHeight;
                    l.setContentSize(this.domNode, b);
                    this._buttons.style("display", this._enableBtn(this._contentBox.w) ? "" : "none");
                    this._leftBtn.layoutAlign =
                        "left";
                    this._rightBtn.layoutAlign = "right";
                    this._menuBtn.layoutAlign = this.isLeftToRight() ? "right" : "left";
                    n.layoutChildren(this.domNode, this._contentBox, [this._menuBtn, this._leftBtn, this._rightBtn, {domNode: this.scrollNode, layoutAlign: "client"}]);
                    if (this._selectedTab)this._anim && "playing" == this._anim.status() && this._anim.stop(), this.scrollNode.scrollLeft = this._convertToScrollLeft(this._getScrollForSelectedTab());
                    this._setButtonClass(this._getScroll());
                    this._postResize = !0;
                    return{h: this._contentBox.h,
                        w: a.w}
                }, _getScroll: function () {
                    return this.isLeftToRight() || 8 > a("ie") || a("ie") && a("quirks") || a("webkit") ? this.scrollNode.scrollLeft : c.get(this.containerNode, "width") - c.get(this.scrollNode, "width") + (8 <= a("ie") ? -1 : 1) * this.scrollNode.scrollLeft
                }, _convertToScrollLeft: function (b) {
                    if (this.isLeftToRight() || 8 > a("ie") || a("ie") && a("quirks") || a("webkit"))return b;
                    var d = c.get(this.containerNode, "width") - c.get(this.scrollNode, "width");
                    return(8 <= a("ie") ? -1 : 1) * (b - d)
                }, onSelectChild: function (a) {
                    var b = this.pane2button[a.id];
                    if (b && a) {
                        b = b.domNode;
                        if (b != this._selectedTab && (this._selectedTab = b, this._postResize)) {
                            var d = this._getScroll();
                            (d > b.offsetLeft || d + c.get(this.scrollNode, "width") < b.offsetLeft + c.get(b, "width")) && this.createSmoothScroll().play()
                        }
                        this.inherited(arguments)
                    }
                }, _getScrollBounds: function () {
                    var a = this.getChildren(), b = c.get(this.scrollNode, "width"), d = c.get(this.containerNode, "width") - b, f = this._getTabsWidth();
                    if (a.length && f > b)return{min: this.isLeftToRight() ? 0 : a[a.length - 1].domNode.offsetLeft, max: this.isLeftToRight() ?
                        a[a.length - 1].domNode.offsetLeft + a[a.length - 1].domNode.offsetWidth - b : d};
                    a = this.isLeftToRight() ? 0 : d;
                    return{min: a, max: a}
                }, _getScrollForSelectedTab: function () {
                    var a = this._selectedTab, b = c.get(this.scrollNode, "width"), d = this._getScrollBounds(), a = a.offsetLeft + c.get(a, "width") / 2 - b / 2;
                    return a = Math.min(Math.max(a, d.min), d.max)
                }, createSmoothScroll: function (a) {
                    if (0 < arguments.length)var b = this._getScrollBounds(), a = Math.min(Math.max(a, b.min), b.max); else a = this._getScrollForSelectedTab();
                    this._anim && "playing" ==
                        this._anim.status() && this._anim.stop();
                    var c = this, d = this.scrollNode, f = new g.Animation({beforeBegin: function () {
                        this.curve && delete this.curve;
                        var b = d.scrollLeft, e = c._convertToScrollLeft(a);
                        f.curve = new g._Line(b, e)
                    }, onAnimate: function (a) {
                        d.scrollLeft = a
                    }});
                    this._anim = f;
                    this._setButtonClass(a);
                    return f
                }, _getBtnNode: function (a) {
                    for (a = a.target; a && !i.contains(a, "tabStripButton");)a = a.parentNode;
                    return a
                }, doSlideRight: function (a) {
                    this.doSlide(1, this._getBtnNode(a))
                }, doSlideLeft: function (a) {
                    this.doSlide(-1,
                        this._getBtnNode(a))
                }, doSlide: function (a, b) {
                    if (!b || !i.contains(b, "dijitTabDisabled")) {
                        var d = 0.75 * c.get(this.scrollNode, "width") * a, d = this._getScroll() + d;
                        this._setButtonClass(d);
                        this.createSmoothScroll(d).play()
                    }
                }, _setButtonClass: function (a) {
                    var b = this._getScrollBounds();
                    this._leftBtn.set("disabled", a <= b.min);
                    this._rightBtn.set("disabled", a >= b.max)
                }});
            p = j("dijit.layout._ScrollingTabControllerButtonMixin", null, {baseClass: "dijitTab tabStripButton", templateString: p, tabIndex: "", isFocusable: function () {
                return!1
            }});
            j("dijit.layout._ScrollingTabControllerButton", [v, p]);
            j("dijit.layout._ScrollingTabControllerMenuButton", [v, s, p], {containerId: "", tabIndex: "-1", isLoaded: function () {
                return!1
            }, loadDropDown: function (a) {
                this.dropDown = new r({id: this.containerId + "_menu", ownerDocument: this.ownerDocument, dir: this.dir, lang: this.lang, textDir: this.textDir});
                var b = k.byId(this.containerId);
                e.forEach(b.getChildren(), function (a) {
                    this.dropDown.addChild(new q({id: a.id + "_stcMi", label: a.title, iconClass: a.iconClass, disabled: a.disabled,
                        ownerDocument: this.ownerDocument, dir: a.dir, lang: a.lang, textDir: a.textDir, onClick: function () {
                            b.selectChild(a)
                        }}))
                }, this);
                a()
            }, closeDropDown: function (a) {
                this.inherited(arguments);
                this.dropDown && (this.dropDown.destroyRecursive(), delete this.dropDown)
            }});
            return d
        })
    }, "url:dijit/layout/templates/ScrollingTabController.html": '<div class="dijitTabListContainer-${tabPosition}" style="visibility:hidden">\n\t<div data-dojo-type="dijit.layout._ScrollingTabControllerMenuButton"\n\t\t\tclass="tabStripButton-${tabPosition}"\n\t\t\tid="${id}_menuBtn"\n\t\t\tdata-dojo-props="containerId: \'${containerId}\', iconClass: \'dijitTabStripMenuIcon\',\n\t\t\t\t\tdropDownPosition: [\'below-alt\', \'above-alt\']"\n\t\t\tdata-dojo-attach-point="_menuBtn" showLabel="false" title="">&#9660;</div>\n\t<div data-dojo-type="dijit.layout._ScrollingTabControllerButton"\n\t\t\tclass="tabStripButton-${tabPosition}"\n\t\t\tid="${id}_leftBtn"\n\t\t\tdata-dojo-props="iconClass:\'dijitTabStripSlideLeftIcon\', showLabel:false, title:\'\'"\n\t\t\tdata-dojo-attach-point="_leftBtn" data-dojo-attach-event="onClick: doSlideLeft">&#9664;</div>\n\t<div data-dojo-type="dijit.layout._ScrollingTabControllerButton"\n\t\t\tclass="tabStripButton-${tabPosition}"\n\t\t\tid="${id}_rightBtn"\n\t\t\tdata-dojo-props="iconClass:\'dijitTabStripSlideRightIcon\', showLabel:false, title:\'\'"\n\t\t\tdata-dojo-attach-point="_rightBtn" data-dojo-attach-event="onClick: doSlideRight">&#9654;</div>\n\t<div class=\'dijitTabListWrapper\' data-dojo-attach-point=\'tablistWrapper\'>\n\t\t<div role=\'tablist\' data-dojo-attach-event=\'onkeypress:onkeypress\'\n\t\t\t\tdata-dojo-attach-point=\'containerNode\' class=\'nowrapTabStrip\'></div>\n\t</div>\n</div>',
    "url:dijit/layout/templates/_ScrollingTabControllerButton.html": '<div data-dojo-attach-event="onclick:_onClick" class="dijitTabInnerDiv dijitTabContent dijitButtonContents"  data-dojo-attach-point="focusNode">\n\t<img role="presentation" alt="" src="${_blankGif}" class="dijitTabStripIcon" data-dojo-attach-point="iconNode"/>\n\t<span data-dojo-attach-point="containerNode,titleNode" class="dijitButtonText"></span>\n</div>', "dijit/_WidgetsInTemplateMixin": function () {
        define(["dojo/_base/array", "dojo/_base/declare",
            "dojo/parser"], function (e, j, i) {
            return j("dijit._WidgetsInTemplateMixin", null, {_earlyTemplatedStartup: !1, widgetsInTemplate: !0, _beforeFillContent: function () {
                if (this.widgetsInTemplate) {
                    var e = this._startupWidgets = i.parse(this.domNode, {noStart: !this._earlyTemplatedStartup, template: !0, inherited: {dir: this.dir, lang: this.lang, textDir: this.textDir}, propsThis: this, scope: "dojo"});
                    if (!e.isFulfilled())throw Error(this.declaredClass + ": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
                    this._attachTemplateNodes(e, function (c, g) {
                        return c[g]
                    })
                }
            }, startup: function () {
                e.forEach(this._startupWidgets, function (e) {
                    e && !e._started && e.startup && e.startup()
                });
                this.inherited(arguments)
            }})
        })
    }, "dijit/_HasDropDown": function () {
        define("dojo/_base/declare,dojo/_base/Deferred,dojo/_base/event,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/has,dojo/keys,dojo/_base/lang,dojo/on,dojo/window,./registry,./focus,./popup,./_FocusMixin".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r) {
            return e("dijit._HasDropDown", r, {_buttonNode: null, _arrowWrapperNode: null, _popupStateNode: null, _aroundNode: null, dropDown: null, autoWidth: !0, forceWidth: !1, maxHeight: 0, dropDownPosition: ["below", "above"], _stopClickEvents: !0, _onDropDownMouseDown: function (a) {
                if (!this.disabled && !this.readOnly)a.preventDefault(), this._docHandler = this.connect(this.ownerDocument, "mouseup", "_onDropDownMouseUp"), this.toggleDropDown()
            }, _onDropDownMouseUp: function (a) {
                a && this._docHandler && this.disconnect(this._docHandler);
                var b = this.dropDown, c = !1;
                if (a && this._opened) {
                    var d = h.position(this._buttonNode, !0);
                    if (!(a.pageX >= d.x && a.pageX <= d.x + d.w) || !(a.pageY >= d.y && a.pageY <= d.y + d.h)) {
                        for (d = a.target; d && !c;)g.contains(d, "dijitPopup") ? c = !0 : d = d.parentNode;
                        if (c) {
                            d = a.target;
                            if (b.onItemClick) {
                                for (var e; d && !(e = m.byNode(d));)d = d.parentNode;
                                if (e && e.onClick && e.getParent)e.getParent().onItemClick(e, a)
                            }
                            return
                        }
                    }
                }
                if (this._opened) {
                    if (b.focus && !1 !== b.autoFocus)this._focusDropDownTimer = this.defer(function () {
                        b.focus();
                        delete this._focusDropDownTimer
                    })
                } else this.defer("focus");
                if (f("ios"))this._justGotMouseUp = !0, this.defer(function () {
                    this._justGotMouseUp = !1
                })
            }, _onDropDownClick: function (a) {
                f("touch") && !this._justGotMouseUp && (this._onDropDownMouseDown(a), this._onDropDownMouseUp(a));
                this._stopClickEvents && i.stop(a)
            }, buildRendering: function () {
                this.inherited(arguments);
                this._buttonNode = this._buttonNode || this.focusNode || this.domNode;
                this._popupStateNode = this._popupStateNode || this.focusNode || this._buttonNode;
                var a = {after: this.isLeftToRight() ? "Right" : "Left", before: this.isLeftToRight() ?
                    "Left" : "Right", above: "Up", below: "Down", left: "Left", right: "Right"}[this.dropDownPosition[0]] || this.dropDownPosition[0] || "Down";
                g.add(this._arrowWrapperNode || this._buttonNode, "dijit" + a + "ArrowButton")
            }, postCreate: function () {
                this.inherited(arguments);
                this.own(d(this._buttonNode, "mousedown", k.hitch(this, "_onDropDownMouseDown")), d(this._buttonNode, "click", k.hitch(this, "_onDropDownClick")), d(this.focusNode, "keydown", k.hitch(this, "_onKey")), d(this.focusNode, "keyup", k.hitch(this, "_onKeyUp")))
            }, destroy: function () {
                this.dropDown &&
                (this.dropDown._destroyed || this.dropDown.destroyRecursive(), delete this.dropDown);
                this.inherited(arguments)
            }, _onKey: function (b) {
                if (!this.disabled && !this.readOnly) {
                    var c = this.dropDown, d = b.target;
                    if (c && this._opened && c.handleKey && !1 === c.handleKey(b))i.stop(b); else if (c && this._opened && b.keyCode == a.ESCAPE)this.closeDropDown(), i.stop(b); else if (!this._opened && (b.keyCode == a.DOWN_ARROW || (b.keyCode == a.ENTER || b.keyCode == a.SPACE) && ("input" !== (d.tagName || "").toLowerCase() || d.type && "text" !== d.type.toLowerCase())))this._toggleOnKeyUp = !0, i.stop(b)
                }
            }, _onKeyUp: function () {
                if (this._toggleOnKeyUp) {
                    delete this._toggleOnKeyUp;
                    this.toggleDropDown();
                    var a = this.dropDown;
                    a && a.focus && this.defer(k.hitch(a, "focus"), 1)
                }
            }, _onBlur: function () {
                this.closeDropDown(n.curNode && this.dropDown && l.isDescendant(n.curNode, this.dropDown.domNode));
                this.inherited(arguments)
            }, isLoaded: function () {
                return!0
            }, loadDropDown: function (a) {
                a()
            }, loadAndOpenDropDown: function () {
                var a = new j, b = k.hitch(this, function () {
                    this.openDropDown();
                    a.resolve(this.dropDown)
                });
                this.isLoaded() ?
                    b() : this.loadDropDown(b);
                return a
            }, toggleDropDown: function () {
                !this.disabled && !this.readOnly && (this._opened ? this.closeDropDown() : this.loadAndOpenDropDown())
            }, openDropDown: function () {
                var a = this.dropDown, d = a.domNode, f = this._aroundNode || this.domNode, e = this;
                if (!this._preparedNode) {
                    this._preparedNode = !0;
                    if (d.style.width)this._explicitDDWidth = !0;
                    if (d.style.height)this._explicitDDHeight = !0
                }
                if (this.maxHeight || this.forceWidth || this.autoWidth) {
                    var m = {display: "", visibility: "hidden"};
                    if (!this._explicitDDWidth)m.width =
                        "";
                    if (!this._explicitDDHeight)m.height = "";
                    b.set(d, m);
                    m = this.maxHeight;
                    if (-1 == m)var m = p.getBox(this.ownerDocument), i = h.position(f, !1), m = Math.floor(Math.max(i.y, m.h - (i.y + i.h)));
                    o.moveOffScreen(a);
                    a.startup && !a._started && a.startup();
                    var i = h.getMarginSize(d), l = m && i.h > m;
                    b.set(d, {overflowX: "visible", overflowY: l ? "auto" : "visible"});
                    l ? (i.h = m, "w"in i && (i.w += 16)) : delete i.h;
                    this.forceWidth ? i.w = f.offsetWidth : this.autoWidth ? i.w = Math.max(i.w, f.offsetWidth) : delete i.w;
                    k.isFunction(a.resize) ? a.resize(i) : h.setMarginBox(d,
                        i)
                }
                a = o.open({parent: this, popup: a, around: f, orient: this.dropDownPosition, onExecute: function () {
                    e.closeDropDown(!0)
                }, onCancel: function () {
                    e.closeDropDown(!0)
                }, onClose: function () {
                    c.set(e._popupStateNode, "popupActive", !1);
                    g.remove(e._popupStateNode, "dijitHasDropDownOpen");
                    e._set("_opened", !1)
                }});
                c.set(this._popupStateNode, "popupActive", "true");
                g.add(this._popupStateNode, "dijitHasDropDownOpen");
                this._set("_opened", !0);
                this.domNode.setAttribute("aria-expanded", "true");
                return a
            }, closeDropDown: function (a) {
                this._focusDropDownTimer &&
                (this._focusDropDownTimer.remove(), delete this._focusDropDownTimer);
                if (this._opened)this.domNode.setAttribute("aria-expanded", "false"), a && this.focus(), o.close(this.dropDown), this._opened = !1
            }})
        })
    }, "dijit/form/RadioButton": function () {
        define(["dojo/_base/declare", "./CheckBox", "./_RadioButtonMixin"], function (e, j, i) {
            return e("dijit.form.RadioButton", [j, i], {baseClass: "dijitRadio"})
        })
    }, "dijit/form/CheckBox": function () {
        define("require,dojo/_base/declare,dojo/dom-attr,dojo/has,dojo/query,dojo/ready,./ToggleButton,./_CheckBoxMixin,dojo/text!./templates/CheckBox.html,dojo/NodeList-dom".split(","),
            function (e, j, i, l, c, g, h, b, f) {
                l("dijit-legacy-requires") && g(0, function () {
                    e(["dijit/form/RadioButton"])
                });
                return j("dijit.form.CheckBox", [h, b], {templateString: f, baseClass: "dijitCheckBox", _setValueAttr: function (a, b) {
                    "string" == typeof a && (this.inherited(arguments), a = !0);
                    this._created && this.set("checked", a, b)
                }, _getValueAttr: function () {
                    return this.checked ? this.value : !1
                }, _setIconClassAttr: null, postMixInProperties: function () {
                    this.inherited(arguments);
                    this.checkedAttrSetting = this.checked ? "checked" : ""
                }, _fillContent: function () {
                },
                    _onFocus: function () {
                        this.id && c("label[for='" + this.id + "']").addClass("dijitFocusedLabel");
                        this.inherited(arguments)
                    }, _onBlur: function () {
                        this.id && c("label[for='" + this.id + "']").removeClass("dijitFocusedLabel");
                        this.inherited(arguments)
                    }})
            })
    }, "dijit/form/_CheckBoxMixin": function () {
        define(["dojo/_base/declare", "dojo/dom-attr", "dojo/_base/event"], function (e, j, i) {
            return e("dijit.form._CheckBoxMixin", null, {type: "checkbox", value: "on", readOnly: !1, _aria_attr: "aria-checked", _setReadOnlyAttr: function (e) {
                this._set("readOnly",
                    e);
                j.set(this.focusNode, "readOnly", e);
                this.focusNode.setAttribute("aria-readonly", e)
            }, _setLabelAttr: void 0, _getSubmitValue: function (e) {
                return!e && 0 !== e ? "on" : e
            }, _setValueAttr: function (e) {
                e = this._getSubmitValue(e);
                this._set("value", e);
                j.set(this.focusNode, "value", e)
            }, reset: function () {
                this.inherited(arguments);
                this._set("value", this.params.value || "on");
                j.set(this.focusNode, "value", this.value)
            }, _onClick: function (e) {
                return this.readOnly ? (i.stop(e), !1) : this.inherited(arguments)
            }})
        })
    }, "url:dijit/form/templates/CheckBox.html": '<div class="dijit dijitReset dijitInline" role="presentation"\n\t><input\n\t \t${!nameAttrSetting} type="${type}" ${checkedAttrSetting}\n\t\tclass="dijitReset dijitCheckBoxInput"\n\t\tdata-dojo-attach-point="focusNode"\n\t \tdata-dojo-attach-event="onclick:_onClick"\n/></div>\n',
    "dijit/form/_RadioButtonMixin": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/_base/event,dojo/_base/lang,dojo/query,../registry".split(","), function (e, j, i, l, c, g, h) {
            return j("dijit.form._RadioButtonMixin", null, {type: "radio", _getRelatedWidgets: function () {
                var b = [];
                g("input[type=radio]", this.focusNode.form || this.ownerDocument).forEach(c.hitch(this, function (c) {
                    c.name == this.name && c.form == this.focusNode.form && (c = h.getEnclosingWidget(c)) && b.push(c)
                }));
                return b
            }, _setCheckedAttr: function (b) {
                this.inherited(arguments);
                this._created && b && e.forEach(this._getRelatedWidgets(), c.hitch(this, function (b) {
                    b != this && b.checked && b.set("checked", !1)
                }))
            }, _getSubmitValue: function (b) {
                return null === b ? "on" : b
            }, _onClick: function (b) {
                if (this.checked || this.disabled)return l.stop(b), !1;
                return this.readOnly ? (l.stop(b), e.forEach(this._getRelatedWidgets(), c.hitch(this, function (b) {
                    i.set(this.focusNode || this.domNode, "checked", b.checked)
                })), !1) : this.inherited(arguments)
            }})
        })
    }, "dijit/form/Select": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/dom-class,dojo/dom-geometry,dojo/_base/event,dojo/i18n,dojo/_base/lang,dojo/sniff,./_FormSelectWidget,../_HasDropDown,../Menu,../MenuItem,../MenuSeparator,../Tooltip,dojo/text!./templates/Select.html,dojo/i18n!./nls/validate".split(","),
            function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o) {
                var r = j("dijit.form._SelectMenu", d, {autoFocus: !0, buildRendering: function () {
                    this.inherited(arguments);
                    var a = this.menuTableNode = this.domNode, b = this.domNode = this.ownerDocument.createElement("div");
                    b.style.cssText = "overflow-x: hidden; overflow-y: scroll";
                    a.parentNode && a.parentNode.replaceChild(b, a);
                    l.remove(a, "dijitMenuTable");
                    b.className = a.className + " dijitSelectMenu";
                    a.className = "dijitReset dijitMenuTable";
                    a.setAttribute("role", "listbox");
                    b.setAttribute("role",
                        "presentation");
                    b.appendChild(a)
                }, postCreate: function () {
                    this.inherited(arguments);
                    this.connect(this.domNode, "onselectstart", g.stop)
                }, focus: function () {
                    var a = !1, c = this.parentWidget.value;
                    b.isArray(c) && (c = c[c.length - 1]);
                    c && e.forEach(this.parentWidget._getChildren(), function (b) {
                        b.option && c === b.option.value && (a = !0, this.focusChild(b, !1))
                    }, this);
                    a || this.inherited(arguments)
                }, resize: function (a) {
                    if (a && (c.setMarginBox(this.domNode, a), "w"in a))this.menuTableNode.style.width = "100%"
                }}), j = j("dijit.form.Select",
                    [a, k], {baseClass: "dijitSelect dijitValidationTextBox", templateString: o, _buttonInputDisabled: f("ie") ? "disabled" : "", required: !1, state: "", message: "", tooltipPosition: [], emptyLabel: "&#160;", _isLoaded: !1, _childrenLoaded: !1, _fillContent: function () {
                        this.inherited(arguments);
                        if (this.options.length && !this.value && this.srcNodeRef) {
                            var a = this.srcNodeRef.selectedIndex || 0;
                            this.value = this.options[0 <= a ? a : 0].value
                        }
                        this.dropDown = new r({id: this.id + "_menu", parentWidget: this});
                        l.add(this.dropDown.domNode, this.baseClass.replace(/\s+|$/g,
                            "Menu "))
                    }, _getMenuItemForOption: function (a) {
                        if (!a.value && !a.label)return new m({ownerDocument: this.ownerDocument});
                        var c = b.hitch(this, "_setValueAttr", a), a = new p({option: a, label: a.label || this.emptyLabel, onClick: c, ownerDocument: this.ownerDocument, dir: this.dir, disabled: a.disabled || !1});
                        a.focusNode.setAttribute("role", "option");
                        return a
                    }, _addOptionItem: function (a) {
                        this.dropDown && this.dropDown.addChild(this._getMenuItemForOption(a))
                    }, _getChildren: function () {
                        return!this.dropDown ? [] : this.dropDown.getChildren()
                    },
                        _loadChildren: function (a) {
                            !0 === a ? (this.dropDown && delete this.dropDown.focusedChild, this.options.length ? this.inherited(arguments) : (e.forEach(this._getChildren(), function (a) {
                                a.destroyRecursive()
                            }), this.dropDown.addChild(new p({ownerDocument: this.ownerDocument, label: this.emptyLabel})))) : this._updateSelection();
                            this._isLoaded = !1;
                            this._childrenLoaded = !0;
                            this._loadingStore || this._setValueAttr(this.value, !1)
                        }, _refreshState: function () {
                            this._started && this.validate(this.focused)
                        }, startup: function () {
                            this.inherited(arguments);
                            this._refreshState()
                        }, _setValueAttr: function (a) {
                            this.inherited(arguments);
                            i.set(this.valueNode, "value", this.get("value"));
                            this._refreshState()
                        }, _setDisabledAttr: function (a) {
                            this.inherited(arguments);
                            this._refreshState()
                        }, _setRequiredAttr: function (a) {
                            this._set("required", a);
                            this.focusNode.setAttribute("aria-required", a);
                            this._refreshState()
                        }, _setOptionsAttr: function (a) {
                            this._isLoaded = !1;
                            this._set("options", a)
                        }, _setDisplay: function (a) {
                            a = a || this.emptyLabel;
                            this.containerNode.innerHTML = '<span role="option" class="dijitReset dijitInline ' +
                                this.baseClass.replace(/\s+|$/g, "Label ") + '">' + a + "</span>"
                        }, validate: function (a) {
                            a = this.disabled || this.isValid(a);
                            this._set("state", a ? "" : this._hasBeenBlurred ? "Error" : "Incomplete");
                            this.focusNode.setAttribute("aria-invalid", a ? "false" : "true");
                            var b = a ? "" : this._missingMsg;
                            b && this.focused && this._hasBeenBlurred ? n.show(b, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : n.hide(this.domNode);
                            this._set("message", b);
                            return a
                        }, isValid: function () {
                            return!this.required || 0 === this.value || !/^\s*$/.test(this.value ||
                                "")
                        }, reset: function () {
                            this.inherited(arguments);
                            n.hide(this.domNode);
                            this._refreshState()
                        }, postMixInProperties: function () {
                            this.inherited(arguments);
                            this._missingMsg = h.getLocalization("dijit.form", "validate", this.lang).missingMessage
                        }, postCreate: function () {
                            this.inherited(arguments);
                            this.connect(this.domNode, "onselectstart", g.stop);
                            this.domNode.setAttribute("aria-expanded", "false");
                            9 > f("ie") && this.defer(function () {
                                try {
                                    var a = domStyle.getComputedStyle(this.domNode);
                                    if (a) {
                                        var b = a.fontFamily;
                                        if (b) {
                                            var c =
                                                this.domNode.getElementsByTagName("INPUT");
                                            if (c)for (a = 0; a < c.length; a++)c[a].style.fontFamily = b
                                        }
                                    }
                                } catch (d) {
                                }
                            })
                        }, _setStyleAttr: function (a) {
                            this.inherited(arguments);
                            l.toggle(this.domNode, this.baseClass.replace(/\s+|$/g, "FixedWidth "), !!this.domNode.style.width)
                        }, isLoaded: function () {
                            return this._isLoaded
                        }, loadDropDown: function (a) {
                            this._loadChildren(!0);
                            this._isLoaded = !0;
                            a()
                        }, closeDropDown: function () {
                            this.inherited(arguments);
                            if (this.dropDown && this.dropDown.menuTableNode)this.dropDown.menuTableNode.style.width =
                                ""
                        }, destroy: function (a) {
                            this.dropDown && !this.dropDown._destroyed && (this.dropDown.destroyRecursive(a), delete this.dropDown);
                            this.inherited(arguments)
                        }, _onFocus: function () {
                            this.validate(!0);
                            this.inherited(arguments)
                        }, _onBlur: function () {
                            n.hide(this.domNode);
                            this.inherited(arguments);
                            this.validate(!1)
                        }});
                j._Menu = r;
                return j
            })
    }, "dijit/form/_FormSelectWidget": function () {
        define("dojo/_base/array,dojo/_base/Deferred,dojo/aspect,dojo/data/util/sorter,dojo/_base/declare,dojo/dom,dojo/dom-class,dojo/_base/kernel,dojo/_base/lang,dojo/query,dojo/when,dojo/store/util/QueryResults,./_FormValueWidget".split(","),
            function (e, j, i, l, c, g, h, b, f, a, k, d, p) {
                return c("dijit.form._FormSelectWidget", p, {multiple: !1, options: null, store: null, query: null, queryOptions: null, labelAttr: "", onFetch: null, sortByLabel: !0, loadChildrenOnOpen: !1, onLoadDeferred: null, getOptions: function (a) {
                    var b = a, c = this.options || [], d = c.length;
                    if (void 0 === b)return c;
                    if (f.isArray(b))return e.map(b, "return this.getOptions(item);", this);
                    f.isObject(a) && (e.some(this.options, function (a, c) {
                        return a === b || a.value && a.value === b.value ? (b = c, !0) : !1
                    }) || (b = -1));
                    if ("string" == typeof b)for (a = 0; a < d; a++)if (c[a].value === b) {
                        b = a;
                        break
                    }
                    return"number" == typeof b && 0 <= b && b < d ? this.options[b] : null
                }, addOption: function (a) {
                    f.isArray(a) || (a = [a]);
                    e.forEach(a, function (a) {
                        a && f.isObject(a) && this.options.push(a)
                    }, this);
                    this._loadChildren()
                }, removeOption: function (a) {
                    f.isArray(a) || (a = [a]);
                    a = this.getOptions(a);
                    e.forEach(a, function (a) {
                        if (a)this.options = e.filter(this.options, function (b) {
                            return b.value !== a.value || b.label !== a.label
                        }), this._removeOptionItem(a)
                    }, this);
                    this._loadChildren()
                }, updateOption: function (a) {
                    f.isArray(a) ||
                    (a = [a]);
                    e.forEach(a, function (a) {
                        var b = this.getOptions(a), c;
                        if (b)for (c in a)b[c] = a[c]
                    }, this);
                    this._loadChildren()
                }, setStore: function (a, b, c) {
                    var g = this.store, c = c || {};
                    if (g !== a) {
                        for (var h; h = this._notifyConnections.pop();)h.remove();
                        if (!a.get && (f.mixin(a, {_oldAPI: !0, get: function (a) {
                            var b = new j;
                            this.fetchItemByIdentity({identity: a, onItem: function (a) {
                                b.resolve(a)
                            }, onError: function (a) {
                                b.reject(a)
                            }});
                            return b.promise
                        }, query: function (a, b) {
                            var c = new j(function () {
                                e.abort && e.abort()
                            });
                            c.total = new j;
                            var e = this.fetch(f.mixin({query: a,
                                onBegin: function (a) {
                                    c.total.resolve(a)
                                }, onComplete: function (a) {
                                    c.resolve(a)
                                }, onError: function (a) {
                                    c.reject(a)
                                }}, b));
                            return new d(c)
                        }}), a.getFeatures()["dojo.data.api.Notification"]))this._notifyConnections = [i.after(a, "onNew", f.hitch(this, "_onNewItem"), !0), i.after(a, "onDelete", f.hitch(this, "_onDeleteItem"), !0), i.after(a, "onSet", f.hitch(this, "_onSetItem"), !0)];
                        this._set("store", a)
                    }
                    this.options && this.options.length && this.removeOption(this.options);
                    this._queryRes && this._queryRes.close && this._queryRes.close();
                    c.query && (this._set("query", c.query), this._set("queryOptions", c.queryOptions));
                    if (a)this._loadingStore = !0, this.onLoadDeferred = new j, this._queryRes = a.query(this.query, this.queryOptions), k(this._queryRes, f.hitch(this, function (d) {
                        if (this.sortByLabel && !c.sort && d.length)if (d[0].getValue)d.sort(l.createSortFunction([
                            {attribute: a.getLabelAttributes(d[0])[0]}
                        ], a)); else {
                            var g = this.labelAttr;
                            d.sort(function (a, b) {
                                return a[g] > b[g] ? 1 : b[g] > a[g] ? -1 : 0
                            })
                        }
                        c.onFetch && (d = c.onFetch.call(this, d, c));
                        e.forEach(d, function (a) {
                                this._addOptionForItem(a)
                            },
                            this);
                        this._queryRes.observe && this._queryRes.observe(f.hitch(this, function (a, b, c) {
                            b == c ? this._onSetItem(a) : (-1 != b && this._onDeleteItem(a), -1 != c && this._onNewItem(a))
                        }), !0);
                        this._loadingStore = !1;
                        this.set("value", "_pendingValue"in this ? this._pendingValue : b);
                        delete this._pendingValue;
                        this.loadChildrenOnOpen ? this._pseudoLoadChildren(d) : this._loadChildren();
                        this.onLoadDeferred.resolve(!0);
                        this.onSetStore()
                    }), function (a) {
                        this.onLoadDeferred.reject(a)
                    });
                    return g
                }, _setValueAttr: function (a, b) {
                    this._onChangeActive ||
                    (b = null);
                    if (this._loadingStore)this._pendingValue = a; else {
                        var c = this.getOptions() || [];
                        f.isArray(a) || (a = [a]);
                        e.forEach(a, function (b, d) {
                            f.isObject(b) || (b += "");
                            "string" === typeof b && (a[d] = e.filter(c, function (a) {
                                return a.value === b
                            })[0] || {value: "", label: ""})
                        }, this);
                        a = e.filter(a, function (a) {
                            return a && a.value
                        });
                        if (!this.multiple && (!a[0] || !a[0].value) && c.length)a[0] = c[0];
                        e.forEach(c, function (b) {
                            b.selected = e.some(a, function (a) {
                                return a.value === b.value
                            })
                        });
                        var d = e.map(a, function (a) {
                            return a.value
                        }), g = e.map(a,
                            function (a) {
                                return a.label
                            });
                        "undefined" == typeof d || "undefined" == typeof d[0] || (this._setDisplay(this.multiple ? g : g[0]), this.inherited(arguments, [this.multiple ? d : d[0], b]), this._updateSelection())
                    }
                }, _getDisplayedValueAttr: function () {
                    var a = this.get("value");
                    f.isArray(a) || (a = [a]);
                    a = e.map(this.getOptions(a), function (a) {
                        return a && "label"in a ? a.label : a ? a.value : null
                    }, this);
                    return this.multiple ? a : a[0]
                }, _loadChildren: function () {
                    this._loadingStore || (e.forEach(this._getChildren(), function (a) {
                        a.destroyRecursive()
                    }),
                        e.forEach(this.options, this._addOptionItem, this), this._updateSelection())
                }, _updateSelection: function () {
                    this._set("value", this._getValueFromOpts());
                    var a = this.value;
                    f.isArray(a) || (a = [a]);
                    a && a[0] && e.forEach(this._getChildren(), function (b) {
                        var c = e.some(a, function (a) {
                            return b.option && a === b.option.value
                        });
                        h.toggle(b.domNode, this.baseClass.replace(/\s+|$/g, "SelectedOption "), c);
                        b.domNode.setAttribute("aria-selected", c ? "true" : "false")
                    }, this)
                }, _getValueFromOpts: function () {
                    var a = this.getOptions() || [];
                    if (!this.multiple &&
                        a.length) {
                        var b = e.filter(a, function (a) {
                            return a.selected
                        })[0];
                        if (b && b.value)return b.value;
                        a[0].selected = !0;
                        return a[0].value
                    }
                    return this.multiple ? e.map(e.filter(a, function (a) {
                        return a.selected
                    }), function (a) {
                        return a.value
                    }) || [] : ""
                }, _onNewItem: function (a, b) {
                    (!b || !b.parent) && this._addOptionForItem(a)
                }, _onDeleteItem: function (a) {
                    this.removeOption(this.store.getIdentity(a))
                }, _onSetItem: function (a) {
                    this.updateOption(this._getOptionObjForItem(a))
                }, _getOptionObjForItem: function (a) {
                    var b = this.store, c = this.labelAttr &&
                        this.labelAttr in a ? a[this.labelAttr] : b.getLabel(a);
                    return{value: c ? b.getIdentity(a) : null, label: c, item: a}
                }, _addOptionForItem: function (a) {
                    var b = this.store;
                    b.isItemLoaded && !b.isItemLoaded(a) ? b.loadItem({item: a, onItem: function (a) {
                        this._addOptionForItem(a)
                    }, scope: this}) : this.addOption(this._getOptionObjForItem(a))
                }, constructor: function (a) {
                    this._oValue = (a || {}).value || null;
                    this._notifyConnections = []
                }, buildRendering: function () {
                    this.inherited(arguments);
                    g.setSelectable(this.focusNode, !1)
                }, _fillContent: function () {
                    if (!this.options)this.options =
                        this.srcNodeRef ? a("> *", this.srcNodeRef).map(function (a) {
                            return"separator" === a.getAttribute("type") ? {value: "", label: "", selected: !1, disabled: !1} : {value: a.getAttribute("data-" + b._scopeName + "-value") || a.getAttribute("value"), label: "" + a.innerHTML, selected: a.getAttribute("selected") || !1, disabled: a.getAttribute("disabled") || !1}
                        }, this) : [];
                    this.value ? this.multiple && "string" == typeof this.value && this._set("value", this.value.split(",")) : this._set("value", this._getValueFromOpts())
                }, postCreate: function () {
                    this.inherited(arguments);
                    this.connect(this, "onChange", "_updateSelection");
                    var a = this.store;
                    if (a && (a.getIdentity || a.getFeatures()["dojo.data.api.Identity"]))this.store = null, this.setStore(a, this._oValue)
                }, startup: function () {
                    this._loadChildren();
                    this.inherited(arguments)
                }, destroy: function () {
                    for (var a; a = this._notifyConnections.pop();)a.remove();
                    this._queryRes && this._queryRes.close && this._queryRes.close();
                    this.inherited(arguments)
                }, _addOptionItem: function () {
                }, _removeOptionItem: function () {
                }, _setDisplay: function () {
                }, _getChildren: function () {
                    return[]
                },
                    _getSelectedOptionsAttr: function () {
                        return this.getOptions(this.get("value"))
                    }, _pseudoLoadChildren: function () {
                    }, onSetStore: function () {
                    }})
            })
    }, "dojo/data/util/sorter": function () {
        define(["../../_base/lang"], function (e) {
            var j = {};
            e.setObject("dojo.data.util.sorter", j);
            j.basicComparator = function (e, l) {
                var c = -1;
                null === e && (e = void 0);
                null === l && (l = void 0);
                if (e == l)c = 0; else if (e > l || null == e)c = 1;
                return c
            };
            j.createSortFunction = function (e, l) {
                function c(a, b, c, d) {
                    return function (f, e) {
                        var g = d.getValue(f, a), h = d.getValue(e,
                            a);
                        return b * c(g, h)
                    }
                }

                for (var g = [], h, b = l.comparatorMap, f = j.basicComparator, a = 0; a < e.length; a++) {
                    h = e[a];
                    var k = h.attribute;
                    if (k) {
                        h = h.descending ? -1 : 1;
                        var d = f;
                        b && ("string" !== typeof k && "toString"in k && (k = k.toString()), d = b[k] || f);
                        g.push(c(k, h, d, l))
                    }
                }
                return function (a, b) {
                    for (var c = 0; c < g.length;) {
                        var d = g[c++](a, b);
                        if (0 !== d)return d
                    }
                    return 0
                }
            };
            return j
        })
    }, "dojo/store/util/QueryResults": function () {
        define(["../../_base/array", "../../_base/lang", "../../_base/Deferred"], function (e, j, i) {
            var l = function (c) {
                function g(g) {
                    c[g] ||
                    (c[g] = function () {
                        var b = arguments;
                        return i.when(c, function (c) {
                            Array.prototype.unshift.call(b, c);
                            return l(e[g].apply(e, b))
                        })
                    })
                }

                if (!c)return c;
                c.then && (c = j.delegate(c));
                g("forEach");
                g("filter");
                g("map");
                if (!c.total)c.total = i.when(c, function (c) {
                    return c.length
                });
                return c
            };
            j.setObject("dojo.store.util.QueryResults", l);
            return l
        })
    }, "dijit/MenuSeparator": function () {
        define("dojo/_base/declare,dojo/dom,./_WidgetBase,./_TemplatedMixin,./_Contained,dojo/text!./templates/MenuSeparator.html".split(","), function (e, j, i, l, c, g) {
            return e("dijit.MenuSeparator", [i, l, c], {templateString: g, buildRendering: function () {
                this.inherited(arguments);
                j.setSelectable(this.domNode, !1)
            }, isFocusable: function () {
                return!1
            }})
        })
    }, "url:dijit/templates/MenuSeparator.html": '<tr class="dijitMenuSeparator">\n\t<td class="dijitMenuSeparatorIconCell">\n\t\t<div class="dijitMenuSeparatorTop"></div>\n\t\t<div class="dijitMenuSeparatorBottom"></div>\n\t</td>\n\t<td colspan="3" class="dijitMenuSeparatorLabelCell">\n\t\t<div class="dijitMenuSeparatorTop dijitMenuSeparatorLabel"></div>\n\t\t<div class="dijitMenuSeparatorBottom"></div>\n\t</td>\n</tr>',
    "dijit/Tooltip": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/_base/fx,dojo/dom,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/lang,dojo/mouse,dojo/on,dojo/sniff,./_base/manager,./place,./_Widget,./_TemplatedMixin,./BackgroundIframe,dojo/text!./templates/Tooltip.html,./main".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r, q) {
            var v = j("dijit._MasterTooltip", [m, n], {duration: d.defaultDuration, templateString: r, postCreate: function () {
                this.ownerDocumentBody.appendChild(this.domNode);
                this.bgIframe = new o(this.domNode);
                this.fadeIn = i.fadeIn({node: this.domNode, duration: this.duration, onEnd: b.hitch(this, "_onShow")});
                this.fadeOut = i.fadeOut({node: this.domNode, duration: this.duration, onEnd: b.hitch(this, "_onHide")})
            }, show: function (a, c, d, f, e) {
                if (!this.aroundNode || !(this.aroundNode === c && this.containerNode.innerHTML == a))if ("playing" == this.fadeOut.status())this._onDeck = arguments; else {
                    this.containerNode.innerHTML = a;
                    e && this.set("textDir", e);
                    this.containerNode.align = f ? "right" : "left";
                    var g = p.around(this.domNode,
                        c, d && d.length ? d : s.defaultPosition, !f, b.hitch(this, "orient")), k = g.aroundNodePos;
                    "M" == g.corner.charAt(0) && "M" == g.aroundCorner.charAt(0) ? (this.connectorNode.style.top = k.y + (k.h - this.connectorNode.offsetHeight >> 1) - g.y + "px", this.connectorNode.style.left = "") : "M" == g.corner.charAt(1) && "M" == g.aroundCorner.charAt(1) ? this.connectorNode.style.left = k.x + (k.w - this.connectorNode.offsetWidth >> 1) - g.x + "px" : (this.connectorNode.style.left = "", this.connectorNode.style.top = "");
                    h.set(this.domNode, "opacity", 0);
                    this.fadeIn.play();
                    this.isShowingNow = !0;
                    this.aroundNode = c
                }
            }, orient: function (a, b, c, d, f) {
                this.connectorNode.style.top = "";
                var e = d.h, d = d.w;
                a.className = "dijitTooltip " + {"MR-ML": "dijitTooltipRight", "ML-MR": "dijitTooltipLeft", "TM-BM": "dijitTooltipAbove", "BM-TM": "dijitTooltipBelow", "BL-TL": "dijitTooltipBelow dijitTooltipABLeft", "TL-BL": "dijitTooltipAbove dijitTooltipABLeft", "BR-TR": "dijitTooltipBelow dijitTooltipABRight", "TR-BR": "dijitTooltipAbove dijitTooltipABRight", "BR-BL": "dijitTooltipRight", "BL-BR": "dijitTooltipLeft"}[b +
                    "-" + c];
                this.domNode.style.width = "auto";
                var h = g.position(this.domNode);
                9 == k("ie") && (h.w += 2);
                var i = Math.min(Math.max(d, 1), h.w);
                g.setMarginBox(this.domNode, {w: i});
                "B" == c.charAt(0) && "B" == b.charAt(0) ? (a = g.position(a), b = this.connectorNode.offsetHeight, a.h > e ? (this.connectorNode.style.top = e - (f.h + b >> 1) + "px", this.connectorNode.style.bottom = "") : (this.connectorNode.style.bottom = Math.min(Math.max(f.h / 2 - b / 2, 0), a.h - b) + "px", this.connectorNode.style.top = "")) : (this.connectorNode.style.top = "", this.connectorNode.style.bottom =
                    "");
                return Math.max(0, h.w - d)
            }, _onShow: function () {
                if (k("ie"))this.domNode.style.filter = ""
            }, hide: function (a) {
                if (this._onDeck && this._onDeck[1] == a)this._onDeck = null; else if (this.aroundNode === a)this.fadeIn.stop(), this.isShowingNow = !1, this.aroundNode = null, this.fadeOut.play()
            }, _onHide: function () {
                this.domNode.style.cssText = "";
                this.containerNode.innerHTML = "";
                if (this._onDeck)this.show.apply(this, this._onDeck), this._onDeck = null
            }, _setAutoTextDir: function (a) {
                this.applyTextDir(a, k("ie") ? a.outerText : a.textContent);
                e.forEach(a.children, function (a) {
                    this._setAutoTextDir(a)
                }, this)
            }, _setTextDirAttr: function (a) {
                this._set("textDir", a);
                "auto" == a ? this._setAutoTextDir(this.containerNode) : this.containerNode.dir = this.textDir
            }});
            q.showTooltip = function (a, b, c, d, f) {
                c && (c = e.map(c, function (a) {
                    return{after: "after-centered", before: "before-centered"}[a] || a
                }));
                if (!s._masterTT)q._masterTT = s._masterTT = new v;
                return s._masterTT.show(a, b, c, d, f)
            };
            q.hideTooltip = function (a) {
                return s._masterTT && s._masterTT.hide(a)
            };
            var s = j("dijit.Tooltip",
                m, {label: "", showDelay: 400, connectId: [], position: [], selector: "", _setConnectIdAttr: function (c) {
                    e.forEach(this._connections || [], function (a) {
                        e.forEach(a, function (a) {
                            a.remove()
                        })
                    }, this);
                    this._connectIds = e.filter(b.isArrayLike(c) ? c : c ? [c] : [], function (a) {
                        return l.byId(a, this.ownerDocument)
                    }, this);
                    this._connections = e.map(this._connectIds, function (c) {
                        var c = l.byId(c, this.ownerDocument), d = this.selector, e = d ? function (b) {
                            return a.selector(d, b)
                        } : function (a) {
                            return a
                        }, g = this;
                        return[a(c, e(f.enter), function () {
                            g._onHover(this)
                        }),
                            a(c, e("focusin"), function () {
                                g._onHover(this)
                            }), a(c, e(f.leave), b.hitch(g, "_onUnHover")), a(c, e("focusout"), b.hitch(g, "_onUnHover"))]
                    }, this);
                    this._set("connectId", c)
                }, addTarget: function (a) {
                    a = a.id || a;
                    -1 == e.indexOf(this._connectIds, a) && this.set("connectId", this._connectIds.concat(a))
                }, removeTarget: function (a) {
                    a = e.indexOf(this._connectIds, a.id || a);
                    0 <= a && (this._connectIds.splice(a, 1), this.set("connectId", this._connectIds))
                }, buildRendering: function () {
                    this.inherited(arguments);
                    c.add(this.domNode, "dijitTooltipData")
                },
                    startup: function () {
                        this.inherited(arguments);
                        var a = this.connectId;
                        e.forEach(b.isArrayLike(a) ? a : [a], this.addTarget, this)
                    }, getContent: function () {
                        return this.label || this.domNode.innerHTML
                    }, _onHover: function (a) {
                        if (!this._showTimer)this._showTimer = this.defer(function () {
                            this.open(a)
                        }, this.showDelay)
                    }, _onUnHover: function () {
                        this._showTimer && (this._showTimer.remove(), delete this._showTimer);
                        this.close()
                    }, open: function (a) {
                        this._showTimer && (this._showTimer.remove(), delete this._showTimer);
                        var b = this.getContent(a);
                        if (b)s.show(b, a, this.position, !this.isLeftToRight(), this.textDir), this._connectNode = a, this.onShow(a, this.position)
                    }, close: function () {
                        this._connectNode && (s.hide(this._connectNode), delete this._connectNode, this.onHide());
                        this._showTimer && (this._showTimer.remove(), delete this._showTimer)
                    }, onShow: function () {
                    }, onHide: function () {
                    }, destroy: function () {
                        this.close();
                        e.forEach(this._connections || [], function (a) {
                            e.forEach(a, function (a) {
                                a.remove()
                            })
                        }, this);
                        this.inherited(arguments)
                    }});
            s._MasterTooltip = v;
            s.show =
                q.showTooltip;
            s.hide = q.hideTooltip;
            s.defaultPosition = ["after-centered", "before-centered"];
            return s
        })
    }, "url:dijit/templates/Tooltip.html": '<div class="dijitTooltip dijitTooltipLeft" id="dojoTooltip"\n\t><div class="dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point="containerNode" role=\'alert\'></div\n\t><div class="dijitTooltipConnector" data-dojo-attach-point="connectorNode"></div\n></div>\n', "url:dijit/form/templates/Select.html": '<table class="dijit dijitReset dijitInline dijitLeft"\n\tdata-dojo-attach-point="_buttonNode,tableNode,focusNode" cellspacing=\'0\' cellpadding=\'0\'\n\trole="listbox" aria-haspopup="true"\n\t><tbody role="presentation"><tr role="presentation"\n\t\t><td class="dijitReset dijitStretch dijitButtonContents" role="presentation"\n\t\t\t><div class="dijitReset dijitInputField dijitButtonText"  data-dojo-attach-point="containerNode,_popupStateNode" role="presentation"></div\n\t\t\t><div class="dijitReset dijitValidationContainer"\n\t\t\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t/></div\n\t\t\t><input type="hidden" ${!nameAttrSetting} data-dojo-attach-point="valueNode" value="${value}" aria-hidden="true"\n\t\t/></td\n\t\t><td class="dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer"\n\t\t\tdata-dojo-attach-point="titleNode" role="presentation"\n\t\t\t><input class="dijitReset dijitInputField dijitArrowButtonInner" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t\t${_buttonInputDisabled}\n\t\t/></td\n\t></tr></tbody\n></table>\n',
    "dijit/form/HorizontalSlider": function () {
        define("dojo/_base/array,dojo/_base/declare,dojo/dnd/move,dojo/_base/event,dojo/_base/fx,dojo/dom-geometry,dojo/dom-style,dojo/keys,dojo/_base/lang,dojo/sniff,dojo/dnd/Moveable,dojo/dnd/Mover,dojo/query,dojo/mouse,../registry,../focus,../typematic,./Button,./_FormValueWidget,../_Container,dojo/text!./templates/HorizontalSlider.html".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r, q, v, s, u) {
            var t = j("dijit.form._SliderMover", d, {onMouseMove: function (a) {
                var b =
                    this.widget, c = b._abspos;
                if (!c)c = b._abspos = g.position(b.sliderBarContainer, !0), b._setPixelValue_ = f.hitch(b, "_setPixelValue"), b._isReversed_ = b._isReversed();
                a = a[b._mousePixelCoord] - c[b._startingPixelCoord];
                b._setPixelValue_(b._isReversed_ ? c[b._pixelCount] - a : a, c[b._pixelCount], !1)
            }, destroy: function (a) {
                d.prototype.destroy.apply(this, arguments);
                var b = this.widget;
                b._abspos = null;
                b._setValueAttr(b.value, !0)
            }}), i = j("dijit.form.HorizontalSlider", [v, s], {templateString: u, value: 0, showButtons: !0, minimum: 0, maximum: 100,
                discreteValues: Infinity, pageIncrement: 2, clickSelect: !0, slideDuration: n.defaultDuration, _setIdAttr: "", baseClass: "dijitSlider", cssStateNodes: {incrementButton: "dijitSliderIncrementButton", decrementButton: "dijitSliderDecrementButton", focusNode: "dijitSliderThumb"}, _mousePixelCoord: "pageX", _pixelCount: "w", _startingPixelCoord: "x", _handleOffsetCoord: "left", _progressPixelSize: "width", _onKeyUp: function (a) {
                    !this.disabled && !this.readOnly && !a.altKey && !a.ctrlKey && !a.metaKey && this._setValueAttr(this.value, !0)
                },
                _onKeyPress: function (a) {
                    if (!this.disabled && !this.readOnly && !a.altKey && !a.ctrlKey && !a.metaKey) {
                        switch (a.charOrCode) {
                            case b.HOME:
                                this._setValueAttr(this.minimum, !1);
                                break;
                            case b.END:
                                this._setValueAttr(this.maximum, !1);
                                break;
                            case this._descending || this.isLeftToRight() ? b.RIGHT_ARROW : b.LEFT_ARROW:
                            case !1 === this._descending ? b.DOWN_ARROW : b.UP_ARROW:
                            case !1 === this._descending ? b.PAGE_DOWN : b.PAGE_UP:
                                this.increment(a);
                                break;
                            case this._descending || this.isLeftToRight() ? b.LEFT_ARROW : b.RIGHT_ARROW:
                            case !1 === this._descending ?
                                b.UP_ARROW : b.DOWN_ARROW:
                            case !1 === this._descending ? b.PAGE_UP : b.PAGE_DOWN:
                                this.decrement(a);
                                break;
                            default:
                                return
                        }
                        l.stop(a)
                    }
                }, _onHandleClick: function (b) {
                    !this.disabled && !this.readOnly && (a("ie") || o.focus(this.sliderHandle), l.stop(b))
                }, _isReversed: function () {
                    return!this.isLeftToRight()
                }, _onBarClick: function (a) {
                    if (!this.disabled && !this.readOnly && this.clickSelect) {
                        o.focus(this.sliderHandle);
                        l.stop(a);
                        var b = g.position(this.sliderBarContainer, !0), c = a[this._mousePixelCoord] - b[this._startingPixelCoord];
                        this._setPixelValue(this._isReversed() ?
                            b[this._pixelCount] - c : c, b[this._pixelCount], !0);
                        this._movable.onMouseDown(a)
                    }
                }, _setPixelValue: function (a, b, c) {
                    if (!this.disabled && !this.readOnly) {
                        var d = this.discreteValues;
                        if (1 >= d || Infinity == d)d = b;
                        d--;
                        a = Math.round(a / (b / d));
                        this._setValueAttr(Math.max(Math.min((this.maximum - this.minimum) * a / d + this.minimum, this.maximum), this.minimum), c)
                    }
                }, _setValueAttr: function (a, b) {
                    this._set("value", a);
                    this.valueNode.value = a;
                    this.focusNode.setAttribute("aria-valuenow", a);
                    this.inherited(arguments);
                    var d = (a - this.minimum) /
                        (this.maximum - this.minimum), f = !1 === this._descending ? this.remainingBar : this.progressBar, e = !1 === this._descending ? this.progressBar : this.remainingBar;
                    this._inProgressAnim && "stopped" != this._inProgressAnim.status && this._inProgressAnim.stop(!0);
                    if (b && 0 < this.slideDuration && f.style[this._progressPixelSize]) {
                        var g = this, h = {}, k = parseFloat(f.style[this._progressPixelSize]), i = this.slideDuration * (d - k / 100);
                        if (0 != i)0 > i && (i = 0 - i), h[this._progressPixelSize] = {start: k, end: 100 * d, units: "%"}, this._inProgressAnim = c.animateProperty({node: f,
                            duration: i, onAnimate: function (a) {
                                e.style[g._progressPixelSize] = 100 - parseFloat(a[g._progressPixelSize]) + "%"
                            }, onEnd: function () {
                                delete g._inProgressAnim
                            }, properties: h}), this._inProgressAnim.play()
                    } else f.style[this._progressPixelSize] = 100 * d + "%", e.style[this._progressPixelSize] = 100 * (1 - d) + "%"
                }, _bumpValue: function (a, b) {
                    if (!this.disabled && !this.readOnly) {
                        var c = h.getComputedStyle(this.sliderBarContainer), d = g.getContentBox(this.sliderBarContainer, c), c = this.discreteValues;
                        if (1 >= c || Infinity == c)c = d[this._pixelCount];
                        c--;
                        d = (this.value - this.minimum) * c / (this.maximum - this.minimum) + a;
                        0 > d && (d = 0);
                        d > c && (d = c);
                        d = d * (this.maximum - this.minimum) / c + this.minimum;
                        this._setValueAttr(d, b)
                    }
                }, _onClkBumper: function (a) {
                    !this.disabled && !this.readOnly && this.clickSelect && this._setValueAttr(a, !0)
                }, _onClkIncBumper: function () {
                    this._onClkBumper(!1 === this._descending ? this.minimum : this.maximum)
                }, _onClkDecBumper: function () {
                    this._onClkBumper(!1 === this._descending ? this.maximum : this.minimum)
                }, decrement: function (a) {
                    this._bumpValue(a.charOrCode ==
                        b.PAGE_DOWN ? -this.pageIncrement : -1)
                }, increment: function (a) {
                    this._bumpValue(a.charOrCode == b.PAGE_UP ? this.pageIncrement : 1)
                }, _mouseWheeled: function (a) {
                    l.stop(a);
                    this._bumpValue(0 > a.wheelDelta ? -1 : 1, !0)
                }, startup: function () {
                    this._started || (e.forEach(this.getChildren(), function (a) {
                        this[a.container] != this.containerNode && this[a.container].appendChild(a.domNode)
                    }, this), this.inherited(arguments))
                }, _typematicCallback: function (a, b, c) {
                    if (-1 == a)this._setValueAttr(this.value, !0); else this[b == (this._descending ? this.incrementButton :
                        this.decrementButton) ? "decrement" : "increment"](c)
                }, buildRendering: function () {
                    this.inherited(arguments);
                    if (this.showButtons)this.incrementButton.style.display = "", this.decrementButton.style.display = "";
                    var a = p('label[for="' + this.id + '"]');
                    if (a.length) {
                        if (!a[0].id)a[0].id = this.id + "_label";
                        this.focusNode.setAttribute("aria-labelledby", a[0].id)
                    }
                    this.focusNode.setAttribute("aria-valuemin", this.minimum);
                    this.focusNode.setAttribute("aria-valuemax", this.maximum)
                }, postCreate: function () {
                    this.inherited(arguments);
                    this.showButtons && this.own(r.addMouseListener(this.decrementButton, this, "_typematicCallback", 25, 500), r.addMouseListener(this.incrementButton, this, "_typematicCallback", 25, 500));
                    this.connect(this.domNode, m.wheel, "_mouseWheeled");
                    var a = j(t, {widget: this});
                    this._movable = new k(this.sliderHandle, {mover: a});
                    this._layoutHackIE7()
                }, destroy: function () {
                    this._movable.destroy();
                    this._inProgressAnim && "stopped" != this._inProgressAnim.status && this._inProgressAnim.stop(!0);
                    this.inherited(arguments)
                }});
            i._Mover = t;
            return i
        })
    },
    "dojo/dnd/move": function () {
        define("../_base/declare,../dom-geometry,../dom-style,./common,./Mover,./Moveable".split(","), function (e, j, i, l, c, g) {
            l = e("dojo.dnd.move.constrainedMoveable", g, {constraints: function () {
            }, within: !1, constructor: function (c, b) {
                b || (b = {});
                this.constraints = b.constraints;
                this.within = b.within
            }, onFirstMove: function (c) {
                var b = this.constraintBox = this.constraints.call(this, c);
                b.r = b.l + b.w;
                b.b = b.t + b.h;
                this.within && (c = j.getMarginSize(c.node), b.r -= c.w, b.b -= c.h)
            }, onMove: function (c, b) {
                var f = this.constraintBox,
                    a = c.node.style;
                this.onMoving(c, b);
                b.l = b.l < f.l ? f.l : f.r < b.l ? f.r : b.l;
                b.t = b.t < f.t ? f.t : f.b < b.t ? f.b : b.t;
                a.left = b.l + "px";
                a.top = b.t + "px";
                this.onMoved(c, b)
            }});
            c = e("dojo.dnd.move.boxConstrainedMoveable", l, {box: {}, constructor: function (c, b) {
                var f = b && b.box;
                this.constraints = function () {
                    return f
                }
            }});
            e = e("dojo.dnd.move.parentConstrainedMoveable", l, {area: "content", constructor: function (c, b) {
                var f = b && b.area;
                this.constraints = function () {
                    var a = this.node.parentNode, b = i.getComputedStyle(a), c = j.getMarginBox(a, b);
                    if ("margin" ==
                        f)return c;
                    var e = j.getMarginExtents(a, b);
                    c.l += e.l;
                    c.t += e.t;
                    c.w -= e.w;
                    c.h -= e.h;
                    if ("border" == f)return c;
                    e = j.getBorderExtents(a, b);
                    c.l += e.l;
                    c.t += e.t;
                    c.w -= e.w;
                    c.h -= e.h;
                    if ("padding" == f)return c;
                    e = j.getPadExtents(a, b);
                    c.l += e.l;
                    c.t += e.t;
                    c.w -= e.w;
                    c.h -= e.h;
                    return c
                }
            }});
            return{constrainedMoveable: l, boxConstrainedMoveable: c, parentConstrainedMoveable: e}
        })
    }, "dijit/typematic": function () {
        define("dojo/_base/array,dojo/_base/connect,dojo/_base/event,dojo/_base/kernel,dojo/_base/lang,dojo/on,dojo/sniff,./main".split(","),
            function (e, j, i, l, c, g, h, b) {
                var f = b.typematic = {_fireEventAndReload: function () {
                    this._timer = null;
                    this._callback(++this._count, this._node, this._evt);
                    this._currentTimeout = Math.max(0 > this._currentTimeout ? this._initialDelay : 1 < this._subsequentDelay ? this._subsequentDelay : Math.round(this._currentTimeout * this._subsequentDelay), this._minDelay);
                    this._timer = setTimeout(c.hitch(this, "_fireEventAndReload"), this._currentTimeout)
                }, trigger: function (a, b, d, f, e, g, h, i) {
                    if (e != this._obj) {
                        this.stop();
                        this._initialDelay = h || 500;
                        this._subsequentDelay = g || 0.9;
                        this._minDelay = i || 10;
                        this._obj = e;
                        this._node = d;
                        this._count = this._currentTimeout = -1;
                        this._callback = c.hitch(b, f);
                        this._evt = {faux: !0};
                        for (var l in a)"layerX" != l && "layerY" != l && (b = a[l], "function" != typeof b && "undefined" != typeof b && (this._evt[l] = b));
                        this._fireEventAndReload()
                    }
                }, stop: function () {
                    if (this._timer)clearTimeout(this._timer), this._timer = null;
                    if (this._obj)this._callback(-1, this._node, this._evt), this._obj = null
                }, addKeyListener: function (a, b, d, h, m, n, o) {
                    if (b.keyCode)b.charOrCode =
                        b.keyCode, l.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0"); else if (b.charCode)b.charOrCode = String.fromCharCode(b.charCode), l.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
                    var r = [g(a, j._keypress, c.hitch(this, function (c) {
                        c.charOrCode == b.charOrCode && (void 0 === b.ctrlKey || b.ctrlKey == c.ctrlKey) && (void 0 === b.altKey || b.altKey == c.altKey) && (void 0 === b.metaKey ||
                            b.metaKey == (c.metaKey || !1)) && (void 0 === b.shiftKey || b.shiftKey == c.shiftKey) ? (i.stop(c), f.trigger(c, d, a, h, b, m, n, o)) : f._obj == b && f.stop()
                    })), g(a, "keyup", c.hitch(this, function () {
                        f._obj == b && f.stop()
                    }))];
                    return{remove: function () {
                        e.forEach(r, function (a) {
                            a.remove()
                        })
                    }}
                }, addMouseListener: function (a, b, d, i, m, l) {
                    var j = [g(a, "mousedown", c.hitch(this, function (c) {
                        c.preventDefault();
                        f.trigger(c, b, a, d, a, i, m, l)
                    })), g(a, "mouseup", c.hitch(this, function (a) {
                        this._obj && a.preventDefault();
                        f.stop()
                    })), g(a, "mouseout", c.hitch(this,
                        function (a) {
                            this._obj && a.preventDefault();
                            f.stop()
                        })), g(a, "dblclick", c.hitch(this, function (e) {
                        e.preventDefault();
                        9 > h("ie") && (f.trigger(e, b, a, d, a, i, m, l), setTimeout(c.hitch(this, f.stop), 50))
                    }))];
                    return{remove: function () {
                        e.forEach(j, function (a) {
                            a.remove()
                        })
                    }}
                }, addListener: function (a, b, c, f, g, h, i, l) {
                    var j = [this.addKeyListener(b, c, f, g, h, i, l), this.addMouseListener(a, f, g, h, i, l)];
                    return{remove: function () {
                        e.forEach(j, function (a) {
                            a.remove()
                        })
                    }}
                }};
                return f
            })
    }, "url:dijit/form/templates/HorizontalSlider.html": '<table class="dijit dijitReset dijitSlider dijitSliderH" cellspacing="0" cellpadding="0" border="0" rules="none" data-dojo-attach-event="onkeypress:_onKeyPress,onkeyup:_onKeyUp"\n\trole="presentation"\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset" colspan="2"></td\n\t\t><td data-dojo-attach-point="topDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH"></td\n\t\t><td class="dijitReset" colspan="2"></td\n\t></tr\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t><div class="dijitSliderDecrementIconH" style="display:none" data-dojo-attach-point="decrementButton"><span class="dijitSliderButtonInner">-</span></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper" data-dojo-attach-event="press:_onClkDecBumper"></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><input data-dojo-attach-point="valueNode" type="hidden" ${!nameAttrSetting}\n\t\t\t/><div class="dijitReset dijitSliderBarContainerH" role="presentation" data-dojo-attach-point="sliderBarContainer"\n\t\t\t\t><div role="presentation" data-dojo-attach-point="progressBar" class="dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH" data-dojo-attach-event="press:_onBarClick"\n\t\t\t\t\t><div class="dijitSliderMoveable dijitSliderMoveableH"\n\t\t\t\t\t\t><div data-dojo-attach-point="sliderHandle,focusNode" class="dijitSliderImageHandle dijitSliderImageHandleH" data-dojo-attach-event="press:_onHandleClick" role="slider"></div\n\t\t\t\t\t></div\n\t\t\t\t></div\n\t\t\t\t><div role="presentation" data-dojo-attach-point="remainingBar" class="dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH" data-dojo-attach-event="press:_onBarClick"></div\n\t\t\t></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper" data-dojo-attach-event="press:_onClkIncBumper"></div\n\t\t></td\n\t\t><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t><div class="dijitSliderIncrementIconH" style="display:none" data-dojo-attach-point="incrementButton"><span class="dijitSliderButtonInner">+</span></div\n\t\t></td\n\t></tr\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset" colspan="2"></td\n\t\t><td data-dojo-attach-point="containerNode,bottomDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH"></td\n\t\t><td class="dijitReset" colspan="2"></td\n\t></tr\n></table>\n',
    "dijit/form/NumberTextBox": function () {
        define(["dojo/_base/declare", "dojo/_base/lang", "dojo/number", "./RangeBoundTextBox"], function (e, j, i, l) {
            var c = e("dijit.form.NumberTextBoxMixin", null, {pattern: i.regexp, value: NaN, editOptions: {pattern: "#.######"}, _formatter: i.format, postMixInProperties: function () {
                this.inherited(arguments);
                this._set("type", "text")
            }, _setConstraintsAttr: function (c) {
                var e = "number" == typeof c.places ? c.places : 0;
                e && e++;
                if ("number" != typeof c.max)c.max = 9 * Math.pow(10, 15 - e);
                if ("number" != typeof c.min)c.min =
                    -9 * Math.pow(10, 15 - e);
                this.inherited(arguments, [c]);
                this.focusNode && this.focusNode.value && !isNaN(this.value) && this.set("value", this.value)
            }, _onFocus: function () {
                if (!this.disabled) {
                    var c = this.get("value");
                    if ("number" == typeof c && !isNaN(c) && (c = this.format(c, this.constraints), void 0 !== c))this.textbox.value = c;
                    this.inherited(arguments)
                }
            }, format: function (c, e) {
                var b = "" + c;
                if ("number" != typeof c)return b;
                if (isNaN(c))return"";
                if (!("rangeCheck"in this && this.rangeCheck(c, e)) && !1 !== e.exponent && /\de[-+]?\d/i.test(b))return b;
                this.editOptions && this.focused && (e = j.mixin({}, e, this.editOptions));
                return this._formatter(c, e)
            }, _parser: i.parse, parse: function (c, e) {
                var b = this._parser(c, j.mixin({}, e, this.editOptions && this.focused ? this.editOptions : {}));
                this.editOptions && this.focused && isNaN(b) && (b = this._parser(c, e));
                return b
            }, _getDisplayedValueAttr: function () {
                var c = this.inherited(arguments);
                return isNaN(c) ? this.textbox.value : c
            }, filter: function (c) {
                return null == c || "" === c ? NaN : this.inherited(arguments)
            }, serialize: function (c, e) {
                return"number" != typeof c || isNaN(c) ? "" : this.inherited(arguments)
            }, _setBlurValue: function () {
                this._setValueAttr(j.hitch(j.mixin({}, this, {focused: !0}), "get")("value"), !0)
            }, _setValueAttr: function (c, e, b) {
                if (void 0 !== c && void 0 === b)if (b = "" + c, "number" == typeof c)if (isNaN(c))b = ""; else {
                    if ("rangeCheck"in this && this.rangeCheck(c, this.constraints) || !1 === this.constraints.exponent || !/\de[-+]?\d/i.test(b))b = void 0
                } else c ? c = void 0 : (b = "", c = NaN);
                this.inherited(arguments, [c, e, b])
            }, _getValueAttr: function () {
                var c = this.inherited(arguments);
                if (isNaN(c) && "" !== this.textbox.value) {
                    if (!1 !== this.constraints.exponent && /\de[-+]?\d/i.test(this.textbox.value) && RegExp("^" + i._realNumberRegexp(j.mixin({}, this.constraints)) + "$").test(this.textbox.value))return c = Number(this.textbox.value), isNaN(c) ? void 0 : c
                } else return c
            }, isValid: function (c) {
                if (!this.focused || this._isEmpty(this.textbox.value))return this.inherited(arguments);
                var e = this.get("value");
                return!isNaN(e) && this.rangeCheck(e, this.constraints) ? !1 !== this.constraints.exponent && /\de[-+]?\d/i.test(this.textbox.value) ?
                    !0 : this.inherited(arguments) : !1
            }}), e = e("dijit.form.NumberTextBox", [l, c], {baseClass: "dijitTextBox dijitNumberTextBox"});
            e.Mixin = c;
            return e
        })
    }, "dojo/number": function () {
        define(["./_base/lang", "./i18n", "./i18n!./cldr/nls/number", "./string", "./regexp"], function (e, j, i, l, c) {
            var g = {};
            e.setObject("dojo.number", g);
            g.format = function (b, c) {
                var c = e.mixin({}, c || {}), a = j.normalizeLocale(c.locale), a = j.getLocalization("dojo.cldr", "number", a);
                c.customs = a;
                a = c.pattern || a[(c.type || "decimal") + "Format"];
                return isNaN(b) ||
                    Infinity == Math.abs(b) ? null : g._applyPattern(b, a, c)
            };
            g._numberPatternRE = /[#0,]*[#0](?:\.0*#*)?/;
            g._applyPattern = function (b, c, a) {
                var a = a || {}, e = a.customs.group, d = a.customs.decimal, c = c.split(";"), h = c[0], c = c[0 > b ? 1 : 0] || "-" + h;
                if (-1 != c.indexOf("%"))b *= 100; else if (-1 != c.indexOf("\u2030"))b *= 1E3; else if (-1 != c.indexOf("\u00a4"))e = a.customs.currencyGroup || e, d = a.customs.currencyDecimal || d, c = c.replace(/\u00a4{1,3}/, function (b) {
                    return a[["symbol", "currency", "displayName"][b.length - 1]] || a.currency || ""
                }); else if (-1 !=
                    c.indexOf("E"))throw Error("exponential notation not supported");
                var i = g._numberPatternRE, h = h.match(i);
                if (!h)throw Error("unable to find a number expression in pattern: " + c);
                if (!1 === a.fractional)a.places = 0;
                return c.replace(i, g._formatAbsolute(b, h[0], {decimal: d, group: e, places: a.places, round: a.round}))
            };
            g.round = function (b, c, a) {
                a = 10 / (a || 10);
                return(a * +b).toFixed(c) / a
            };
            if (0 == (0.9).toFixed()) {
                var h = g.round;
                g.round = function (b, c, a) {
                    var e = Math.pow(10, -c || 0), d = Math.abs(b);
                    if (!b || d >= e || 5 > d * Math.pow(10, c + 1))e =
                        0;
                    return h(b, c, a) + (0 < b ? e : -e)
                }
            }
            g._formatAbsolute = function (b, c, a) {
                a = a || {};
                if (!0 === a.places)a.places = 0;
                if (Infinity === a.places)a.places = 6;
                var c = c.split("."), e = "string" == typeof a.places && a.places.indexOf(","), d = a.places;
                if (e)d = a.places.substring(e + 1); else if (!(0 <= d))d = (c[1] || []).length;
                0 > a.round || (b = g.round(b, d, a.round));
                var b = ("" + Math.abs(b)).split("."), h = b[1] || "";
                if (c[1] || a.places) {
                    if (e)a.places = a.places.substring(0, e);
                    e = void 0 !== a.places ? a.places : c[1] && c[1].lastIndexOf("0") + 1;
                    e > h.length && (b[1] = l.pad(h,
                        e, "0", !0));
                    d < h.length && (b[1] = h.substr(0, d))
                } else b[1] && b.pop();
                d = c[0].replace(",", "");
                e = d.indexOf("0");
                -1 != e && (e = d.length - e, e > b[0].length && (b[0] = l.pad(b[0], e)), -1 == d.indexOf("#") && (b[0] = b[0].substr(b[0].length - e)));
                var d = c[0].lastIndexOf(","), i, j;
                -1 != d && (i = c[0].length - d - 1, c = c[0].substr(0, d), d = c.lastIndexOf(","), -1 != d && (j = c.length - d - 1));
                c = [];
                for (d = b[0]; d;)e = d.length - i, c.push(0 < e ? d.substr(e) : d), d = 0 < e ? d.slice(0, e) : "", j && (i = j, delete j);
                b[0] = c.reverse().join(a.group || ",");
                return b.join(a.decimal || ".")
            };
            g.regexp = function (b) {
                return g._parseInfo(b).regexp
            };
            g._parseInfo = function (b) {
                var b = b || {}, f = j.normalizeLocale(b.locale), f = j.getLocalization("dojo.cldr", "number", f), a = b.pattern || f[(b.type || "decimal") + "Format"], e = f.group, d = f.decimal, h = 1;
                if (-1 != a.indexOf("%"))h /= 100; else if (-1 != a.indexOf("\u2030"))h /= 1E3; else {
                    var i = -1 != a.indexOf("\u00a4");
                    i && (e = f.currencyGroup || e, d = f.currencyDecimal || d)
                }
                f = a.split(";");
                1 == f.length && f.push("-" + f[0]);
                f = c.buildGroupRE(f, function (a) {
                        a = "(?:" + c.escapeString(a, ".") + ")";
                        return a.replace(g._numberPatternRE,
                            function (a) {
                                var c = {signed: !1, separator: b.strict ? e : [e, ""], fractional: b.fractional, decimal: d, exponent: !1}, a = a.split("."), f = b.places;
                                1 == a.length && 1 != h && (a[1] = "###");
                                if (1 == a.length || 0 === f)c.fractional = !1; else {
                                    void 0 === f && (f = b.pattern ? a[1].lastIndexOf("0") + 1 : Infinity);
                                    if (f && void 0 == b.fractional)c.fractional = !0;
                                    !b.places && f < a[1].length && (f += "," + a[1].length);
                                    c.places = f
                                }
                                a = a[0].split(",");
                                if (1 < a.length && (c.groupSize = a.pop().length, 1 < a.length))c.groupSize2 = a.pop().length;
                                return"(" + g._realNumberRegexp(c) + ")"
                            })
                    },
                    !0);
                i && (f = f.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g, function (a, d, f, e) {
                    a = c.escapeString(b[["symbol", "currency", "displayName"][f.length - 1]] || b.currency || "");
                    d = d ? "[\\s\\xa0]" : "";
                    e = e ? "[\\s\\xa0]" : "";
                    return!b.strict ? (d && (d += "*"), e && (e += "*"), "(?:" + d + a + e + ")?") : d + a + e
                }));
                return{regexp: f.replace(/[\xa0 ]/g, "[\\s\\xa0]"), group: e, decimal: d, factor: h}
            };
            g.parse = function (b, c) {
                var a = g._parseInfo(c), e = RegExp("^" + a.regexp + "$").exec(b);
                if (!e)return NaN;
                var d = e[1];
                if (!e[1]) {
                    if (!e[2])return NaN;
                    d = e[2];
                    a.factor *= -1
                }
                d = d.replace(RegExp("[" + a.group + "\\s\\xa0]", "g"), "").replace(a.decimal, ".");
                return d * a.factor
            };
            g._realNumberRegexp = function (b) {
                b = b || {};
                if (!("places"in b))b.places = Infinity;
                if ("string" != typeof b.decimal)b.decimal = ".";
                if (!("fractional"in b) || /^0/.test(b.places))b.fractional = [!0, !1];
                if (!("exponent"in b))b.exponent = [!0, !1];
                if (!("eSigned"in b))b.eSigned = [!0, !1];
                var f = g._integerRegexp(b), a = c.buildGroupRE(b.fractional, function (a) {
                    var c = "";
                    a && 0 !== b.places && (c = "\\" + b.decimal, c = Infinity == b.places ? "(?:" + c +
                        "\\d+)?" : c + ("\\d{" + b.places + "}"));
                    return c
                }, !0), e = c.buildGroupRE(b.exponent, function (a) {
                    return a ? "([eE]" + g._integerRegexp({signed: b.eSigned}) + ")" : ""
                }), f = f + a;
                a && (f = "(?:(?:" + f + ")|(?:" + a + "))");
                return f + e
            };
            g._integerRegexp = function (b) {
                b = b || {};
                if (!("signed"in b))b.signed = [!0, !1];
                if ("separator"in b) {
                    if (!("groupSize"in b))b.groupSize = 3
                } else b.separator = "";
                var f = c.buildGroupRE(b.signed, function (a) {
                    return a ? "[-+]" : ""
                }, !0), a = c.buildGroupRE(b.separator, function (a) {
                    if (!a)return"(?:\\d+)";
                    a = c.escapeString(a);
                    " " == a ? a = "\\s" : "\u00a0" == a && (a = "\\s\\xa0");
                    var d = b.groupSize, f = b.groupSize2;
                    return f ? (a = "(?:0|[1-9]\\d{0," + (f - 1) + "}(?:[" + a + "]\\d{" + f + "})*[" + a + "]\\d{" + d + "})", 0 < d - f ? "(?:" + a + "|(?:0|[1-9]\\d{0," + (d - 1) + "}))" : a) : "(?:0|[1-9]\\d{0," + (d - 1) + "}(?:[" + a + "]\\d{" + d + "})*)"
                }, !0);
                return f + a
            };
            return g
        })
    }, "dijit/form/RangeBoundTextBox": function () {
        define(["dojo/_base/declare", "dojo/i18n", "./MappedTextBox"], function (e, j, i) {
            return e("dijit.form.RangeBoundTextBox", i, {rangeMessage: "", rangeCheck: function (e, c) {
                return("min"in
                    c ? 0 <= this.compare(e, c.min) : !0) && ("max"in c ? 0 >= this.compare(e, c.max) : !0)
            }, isInRange: function () {
                return this.rangeCheck(this.get("value"), this.constraints)
            }, _isDefinitelyOutOfRange: function () {
                var e = this.get("value");
                if (null == e)return!1;
                var c = !1;
                if ("min"in this.constraints)c = this.constraints.min, c = 0 > this.compare(e, "number" == typeof c && 0 <= c && 0 != e ? 0 : c);
                if (!c && "max"in this.constraints)c = this.constraints.max, c = 0 < this.compare(e, "number" != typeof c || 0 < c ? c : 0);
                return c
            }, _isValidSubset: function () {
                return this.inherited(arguments) && !this._isDefinitelyOutOfRange()
            }, isValid: function (e) {
                return this.inherited(arguments) && (this._isEmpty(this.textbox.value) && !this.required || this.isInRange(e))
            }, getErrorMessage: function (e) {
                var c = this.get("value");
                return null != c && "" !== c && ("number" != typeof c || !isNaN(c)) && !this.isInRange(e) ? this.rangeMessage : this.inherited(arguments)
            }, postMixInProperties: function () {
                this.inherited(arguments);
                if (!this.rangeMessage)this.messages = j.getLocalization("dijit.form", "validate", this.lang), this.rangeMessage = this.messages.rangeMessage
            },
                _setConstraintsAttr: function (e) {
                    this.inherited(arguments);
                    this.focusNode && (void 0 !== this.constraints.min ? this.focusNode.setAttribute("aria-valuemin", this.constraints.min) : this.focusNode.removeAttribute("aria-valuemin"), void 0 !== this.constraints.max ? this.focusNode.setAttribute("aria-valuemax", this.constraints.max) : this.focusNode.removeAttribute("aria-valuemax"))
                }, _setValueAttr: function (e, c) {
                    this.focusNode.setAttribute("aria-valuenow", e);
                    this.inherited(arguments)
                }, applyTextDir: function () {
                }})
        })
    }, "dijit/form/MappedTextBox": function () {
        define(["dojo/_base/declare",
            "dojo/dom-construct", "./ValidationTextBox"], function (e, j, i) {
            return e("dijit.form.MappedTextBox", i, {postMixInProperties: function () {
                this.inherited(arguments);
                this.nameAttrSetting = ""
            }, _setNameAttr: null, serialize: function (e) {
                return e.toString ? e.toString() : ""
            }, toString: function () {
                var e = this.filter(this.get("value"));
                return null != e ? "string" == typeof e ? e : this.serialize(e, this.constraints) : ""
            }, validate: function () {
                this.valueNode.value = this.toString();
                return this.inherited(arguments)
            }, buildRendering: function () {
                this.inherited(arguments);
                this.valueNode = j.place("<input type='hidden'" + (this.name ? ' name="' + this.name.replace(/"/g, "&quot;") + '"' : "") + "/>", this.textbox, "after")
            }, reset: function () {
                this.valueNode.value = "";
                this.inherited(arguments)
            }})
        })
    }, "dijit/form/ValidationTextBox": function () {
        define("dojo/_base/declare,dojo/_base/kernel,dojo/i18n,./TextBox,../Tooltip,dojo/text!./templates/ValidationTextBox.html,dojo/i18n!./nls/validate".split(","), function (e, j, i, l, c, g) {
            var h;
            return h = e("dijit.form.ValidationTextBox", l, {templateString: g, required: !1,
                promptMessage: "", invalidMessage: "$_unset_$", missingMessage: "$_unset_$", message: "", constraints: {}, pattern: ".*", regExp: "", regExpGen: function () {
                }, state: "", tooltipPosition: [], _deprecateRegExp: function (b, c) {
                    c != h.prototype[b] && (j.deprecated("ValidationTextBox id=" + this.id + ", set('" + b + "', ...) is deprecated.  Use set('pattern', ...) instead.", "", "2.0"), this.set("pattern", c))
                }, _setRegExpGenAttr: function (b) {
                    this._deprecateRegExp("regExpGen", b);
                    this.regExpGen = this._getPatternAttr
                }, _setRegExpAttr: function (b) {
                    this._deprecateRegExp("regExp",
                        b)
                }, _setValueAttr: function () {
                    this.inherited(arguments);
                    this.validate(this.focused)
                }, validator: function (b, c) {
                    return RegExp("^(?:" + this._getPatternAttr(c) + ")" + (this.required ? "" : "?") + "$").test(b) && (!this.required || !this._isEmpty(b)) && (this._isEmpty(b) || void 0 !== this.parse(b, c))
                }, _isValidSubset: function () {
                    return 0 == this.textbox.value.search(this._partialre)
                }, isValid: function () {
                    return this.validator(this.textbox.value, this.constraints)
                }, _isEmpty: function (b) {
                    return(this.trim ? /^\s*$/ : /^$/).test(b)
                }, getErrorMessage: function () {
                    var b =
                        "$_unset_$" == this.invalidMessage ? this.messages.invalidMessage : !this.invalidMessage ? this.promptMessage : this.invalidMessage, c = "$_unset_$" == this.missingMessage ? this.messages.missingMessage : !this.missingMessage ? b : this.missingMessage;
                    return this.required && this._isEmpty(this.textbox.value) ? c : b
                }, getPromptMessage: function () {
                    return this.promptMessage
                }, _maskValidSubsetError: !0, validate: function (b) {
                    var c = "", a = this.disabled || this.isValid(b);
                    if (a)this._maskValidSubsetError = !0;
                    var e = this._isEmpty(this.textbox.value),
                        d = !a && b && this._isValidSubset();
                    this._set("state", a ? "" : ((!this._hasBeenBlurred || b) && e || d) && this._maskValidSubsetError ? "Incomplete" : "Error");
                    this.focusNode.setAttribute("aria-invalid", a ? "false" : "true");
                    "Error" == this.state ? (this._maskValidSubsetError = b && d, c = this.getErrorMessage(b)) : "Incomplete" == this.state ? (c = this.getPromptMessage(b), this._maskValidSubsetError = !this._hasBeenBlurred || b) : e && (c = this.getPromptMessage(b));
                    this.set("message", c);
                    return a
                }, displayMessage: function (b) {
                    b && this.focused ? c.show(b,
                        this.domNode, this.tooltipPosition, !this.isLeftToRight()) : c.hide(this.domNode)
                }, _refreshState: function () {
                    this._created && this.validate(this.focused);
                    this.inherited(arguments)
                }, constructor: function () {
                    this.constraints = {};
                    this.baseClass += " dijitValidationTextBox"
                }, startup: function () {
                    this.inherited(arguments);
                    this._refreshState()
                }, _setConstraintsAttr: function (b) {
                    if (!b.locale && this.lang)b.locale = this.lang;
                    this._set("constraints", b);
                    this._refreshState()
                }, _setPatternAttr: function (b) {
                    this._set("pattern", b)
                },
                _getPatternAttr: function (b) {
                    var c = this.pattern;
                    "function" == (typeof c).toLowerCase() && (c = this.pattern(b || this.constraints));
                    if (c != this._lastRegExp) {
                        var a = "";
                        this._lastRegExp = c;
                        ".*" != c && c.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g, function (b) {
                            switch (b.charAt(0)) {
                                case "{":
                                case "+":
                                case "?":
                                case "*":
                                case "^":
                                case "$":
                                case "|":
                                case "(":
                                    a += b;
                                    break;
                                case ")":
                                    a += "|$)";
                                    break;
                                default:
                                    a += "(?:" + b + "|$)"
                            }
                        });
                        try {
                            "".search(a)
                        } catch (e) {
                            a = this.pattern
                        }
                        this._partialre = "^(?:" + a + ")$"
                    }
                    return c
                }, postMixInProperties: function () {
                    this.inherited(arguments);
                    this.messages = i.getLocalization("dijit.form", "validate", this.lang);
                    this._setConstraintsAttr(this.constraints)
                }, _setDisabledAttr: function (b) {
                    this.inherited(arguments);
                    this._refreshState()
                }, _setRequiredAttr: function (b) {
                    this._set("required", b);
                    this.focusNode.setAttribute("aria-required", b);
                    this._refreshState()
                }, _setMessageAttr: function (b) {
                    this._set("message", b);
                    this.displayMessage(b)
                }, reset: function () {
                    this._maskValidSubsetError = !0;
                    this.inherited(arguments)
                }, _onBlur: function () {
                    this.displayMessage("");
                    this.inherited(arguments)
                }})
        })
    }, "url:dijit/form/templates/ValidationTextBox.html": '<div class="dijit dijitReset dijitInline dijitLeft"\n\tid="widget_${id}" role="presentation"\n\t><div class=\'dijitReset dijitValidationContainer\'\n\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t/></div\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class="dijitReset dijitInputInner" data-dojo-attach-point=\'textbox,focusNode\' autocomplete="off"\n\t\t\t${!nameAttrSetting} type=\'${type}\'\n\t/></div\n></div>\n',
    "dijit/form/NumberSpinner": function () {
        define(["dojo/_base/declare", "dojo/_base/event", "dojo/keys", "./_Spinner", "./NumberTextBox"], function (e, j, i, l, c) {
            return e("dijit.form.NumberSpinner", [l, c.Mixin], {adjust: function (c, e) {
                var b = this.constraints, f = isNaN(c), a = !isNaN(b.max), i = !isNaN(b.min);
                f && 0 != e && (c = 0 < e ? i ? b.min : a ? b.max : 0 : a ? this.constraints.max : i ? b.min : 0);
                var d = c + e;
                if (f || isNaN(d))return c;
                if (a && d > b.max)d = b.max;
                if (i && d < b.min)d = b.min;
                return d
            }, _onKeyPress: function (c) {
                if ((c.charOrCode == i.HOME || c.charOrCode ==
                    i.END) && !c.ctrlKey && !c.altKey && !c.metaKey && "undefined" != typeof this.get("value")) {
                    var e = this.constraints[c.charOrCode == i.HOME ? "min" : "max"];
                    "number" == typeof e && this._setValueAttr(e, !1);
                    j.stop(c)
                }
            }})
        })
    }, "dijit/form/_Spinner": function () {
        define("dojo/_base/declare,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/sniff,dojo/mouse,../typematic,./RangeBoundTextBox,dojo/text!./templates/Spinner.html,./_TextBoxMixin".split(","), function (e, j, i, l, c, g, h, b, f, a) {
            return e("dijit.form._Spinner", b, {defaultTimeout: 500,
                minimumTimeout: 10, timeoutChangeRate: 0.9, smallDelta: 1, largeDelta: 10, templateString: f, baseClass: "dijitTextBox dijitSpinner", cssStateNodes: {upArrowNode: "dijitUpArrowButton", downArrowNode: "dijitDownArrowButton"}, adjust: function (a) {
                    return a
                }, _arrowPressed: function (b, c, f) {
                    !this.disabled && !this.readOnly && (this._setValueAttr(this.adjust(this.get("value"), c * f), !1), a.selectInputText(this.textbox, this.textbox.value.length))
                }, _arrowReleased: function () {
                    this._wheelTimer = null
                }, _typematicCallback: function (a, b, c) {
                    var f =
                        this.smallDelta;
                    if (b == this.textbox)b = c.charOrCode, f = b == i.PAGE_UP || b == i.PAGE_DOWN ? this.largeDelta : this.smallDelta, b = b == i.UP_ARROW || b == i.PAGE_UP ? this.upArrowNode : this.downArrowNode;
                    -1 == a ? this._arrowReleased(b) : this._arrowPressed(b, b == this.upArrowNode ? 1 : -1, f)
                }, _wheelTimer: null, _mouseWheeled: function (a) {
                    j.stop(a);
                    var b = a.wheelDelta / 120;
                    Math.floor(b) != b && (b = 0 < a.wheelDelta ? 1 : -1);
                    a = a.detail ? -1 * a.detail : b;
                    if (0 !== a) {
                        var c = this[0 < a ? "upArrowNode" : "downArrowNode"];
                        this._arrowPressed(c, a, this.smallDelta);
                        this._wheelTimer &&
                        this._wheelTimer.remove();
                        this._wheelTimer = this.defer(function () {
                            this._arrowReleased(c)
                        }, 50)
                    }
                }, postCreate: function () {
                    this.inherited(arguments);
                    this.connect(this.domNode, g.wheel, "_mouseWheeled");
                    this.own(h.addListener(this.upArrowNode, this.textbox, {charOrCode: i.UP_ARROW, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), h.addListener(this.downArrowNode, this.textbox, {charOrCode: i.DOWN_ARROW, ctrlKey: !1, altKey: !1, shiftKey: !1,
                        metaKey: !1}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), h.addListener(this.upArrowNode, this.textbox, {charOrCode: i.PAGE_UP, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), h.addListener(this.downArrowNode, this.textbox, {charOrCode: i.PAGE_DOWN, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout))
                }})
        })
    },
    "url:dijit/form/templates/Spinner.html": '<div class="dijit dijitReset dijitInline dijitLeft"\n\tid="widget_${id}" role="presentation"\n\t><div class="dijitReset dijitButtonNode dijitSpinnerButtonContainer"\n\t\t><input class="dijitReset dijitInputField dijitSpinnerButtonInner" type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t/><div class="dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton"\n\t\t\tdata-dojo-attach-point="upArrowNode"\n\t\t\t><div class="dijitArrowButtonInner"\n\t\t\t\t><input class="dijitReset dijitInputField" value="&#9650; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t\t\t${_buttonInputDisabled}\n\t\t\t/></div\n\t\t></div\n\t\t><div class="dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton"\n\t\t\tdata-dojo-attach-point="downArrowNode"\n\t\t\t><div class="dijitArrowButtonInner"\n\t\t\t\t><input class="dijitReset dijitInputField" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t\t\t${_buttonInputDisabled}\n\t\t\t/></div\n\t\t></div\n\t></div\n\t><div class=\'dijitReset dijitValidationContainer\'\n\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t/></div\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class=\'dijitReset dijitInputInner\' data-dojo-attach-point="textbox,focusNode" type="${type}" data-dojo-attach-event="onkeypress:_onKeyPress"\n\t\t\trole="spinbutton" autocomplete="off" ${!nameAttrSetting}\n\t/></div\n></div>\n',
    "dojox/widget/ColorPicker": function () {
        define("dojo/_base/kernel,dojo/_base/declare,dojo/_base/lang,dojo/_base/array,dojo/_base/html,dojo/_base/connect,dojo/_base/sniff,dojo/_base/window,dojo/_base/event,dojo/dom,dojo/dom-class,dojo/keys,dojo/fx,dojo/dnd/move,dijit/registry,dijit/_base/focus,dijit/form/_FormWidget,dijit/typematic,dojox/color,dojo/i18n,dojo/i18n!./nls/ColorPicker,dojo/i18n!dojo/cldr/nls/number,dojo/text!./ColorPicker/ColorPicker.html".split(","), function (e, j, i, l, c, g, h, b, f, a, k, d, p, m, n, o, r, q, v, s, u, t, y) {
            e.experimental("dojox.widget.ColorPicker");
            return j("dojox.widget.ColorPicker", r, {showRgb: !0, showHsv: !0, showHex: !0, webSafe: !0, animatePoint: !0, slideDuration: 250, liveUpdate: !1, PICKER_HUE_H: 150, PICKER_SAT_VAL_H: 150, PICKER_SAT_VAL_W: 150, PICKER_HUE_SELECTOR_H: 8, PICKER_SAT_SELECTOR_H: 10, PICKER_SAT_SELECTOR_W: 10, value: "#ffffff", _underlay: e.moduleUrl("dojox.widget", "ColorPicker/images/underlay.png"), _hueUnderlay: e.moduleUrl("dojox.widget", "ColorPicker/images/hue.png"), _pickerPointer: e.moduleUrl("dojox.widget",
                "ColorPicker/images/pickerPointer.png"), _huePickerPointer: e.moduleUrl("dojox.widget", "ColorPicker/images/hueHandle.png"), _huePickerPointerAlly: e.moduleUrl("dojox.widget", "ColorPicker/images/hueHandleA11y.png"), templateString: y, postMixInProperties: function () {
                if (k.contains(b.body(), "dijit_a11y"))this._huePickerPointer = this._huePickerPointerAlly;
                this._uId = n.getUniqueId(this.id);
                i.mixin(this, s.getLocalization("dojox.widget", "ColorPicker"));
                i.mixin(this, s.getLocalization("dojo.cldr", "number"));
                this.inherited(arguments)
            },
                postCreate: function () {
                    this.inherited(arguments);
                    if (7 > h("ie"))this.colorUnderlay.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + this._underlay + "', sizingMethod='scale')", this.colorUnderlay.src = this._blankGif.toString();
                    if (!this.showRgb)this.rgbNode.style.visibility = "hidden";
                    if (!this.showHsv)this.hsvNode.style.visibility = "hidden";
                    if (!this.showHex)this.hexNode.style.visibility = "hidden";
                    if (!this.webSafe)this.safePreviewNode.style.visibility = "hidden"
                }, startup: function () {
                    if (!this._started)this._started = !0, this.set("value", this.value), this._mover = new m.boxConstrainedMoveable(this.cursorNode, {box: {t: -(this.PICKER_SAT_SELECTOR_H / 2), l: -(this.PICKER_SAT_SELECTOR_W / 2), w: this.PICKER_SAT_VAL_W, h: this.PICKER_SAT_VAL_H}}), this._hueMover = new m.boxConstrainedMoveable(this.hueCursorNode, {box: {t: -(this.PICKER_HUE_SELECTOR_H / 2), l: 0, w: 0, h: this.PICKER_HUE_H}}), this._subs = [], this._subs.push(g.subscribe("/dnd/move/stop", i.hitch(this, "_clearTimer"))), this._subs.push(g.subscribe("/dnd/move/start", i.hitch(this, "_setTimer"))),
                        this._keyListeners = [], this._connects.push(q.addKeyListener(this.hueCursorNode, {charOrCode: d.UP_ARROW, shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1}, this, i.hitch(this, this._updateHueCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.hueCursorNode, {charOrCode: d.DOWN_ARROW, shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1}, this, i.hitch(this, this._updateHueCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.cursorNode, {charOrCode: d.UP_ARROW, shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1}, this,
                        i.hitch(this, this._updateCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.cursorNode, {charOrCode: d.DOWN_ARROW, shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1}, this, i.hitch(this, this._updateCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.cursorNode, {charOrCode: d.LEFT_ARROW, shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1}, this, i.hitch(this, this._updateCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.cursorNode, {charOrCode: d.RIGHT_ARROW, shiftKey: !1, metaKey: !1, ctrlKey: !1,
                        altKey: !1}, this, i.hitch(this, this._updateCursorNode), 25, 25))
                }, _setValueAttr: function (a) {
                    this._started && this.setColor(a, !0)
                }, setColor: function (a, b) {
                    a = v.fromString(a);
                    this._updatePickerLocations(a);
                    this._updateColorInputs(a);
                    this._updateValue(a, b)
                }, _setTimer: function (b) {
                    if (b.node == this.cursorNode)o.focus(b.node), a.setSelectable(this.domNode, !1), this._timer = setInterval(i.hitch(this, "_updateColor"), 45)
                }, _clearTimer: function () {
                    if (this._timer)clearInterval(this._timer), this._timer = null, this.onChange(this.value),
                        a.setSelectable(this.domNode, !0)
                }, _setHue: function (a) {
                    c.style(this.colorUnderlay, "backgroundColor", v.fromHsv(a, 100, 100).toHex())
                }, _updateHueCursorNode: function (a, b, f) {
                    if (-1 !== a) {
                        var a = c.style(this.hueCursorNode, "top"), b = this.PICKER_HUE_SELECTOR_H / 2, a = a + b, e = !1;
                        f.charOrCode == d.UP_ARROW ? 0 < a && (a -= 1, e = !0) : f.charOrCode == d.DOWN_ARROW && a < this.PICKER_HUE_H && (a += 1, e = !0);
                        e && c.style(this.hueCursorNode, "top", a - b + "px")
                    } else this._updateColor(!0)
                }, _updateCursorNode: function (a, b, f) {
                    var b = this.PICKER_SAT_SELECTOR_H /
                        2, e = this.PICKER_SAT_SELECTOR_W / 2;
                    if (-1 !== a) {
                        var a = c.style(this.cursorNode, "top"), g = c.style(this.cursorNode, "left"), a = a + b, g = g + e, h = !1;
                        f.charOrCode == d.UP_ARROW ? 0 < a && (a -= 1, h = !0) : f.charOrCode == d.DOWN_ARROW ? a < this.PICKER_SAT_VAL_H && (a += 1, h = !0) : f.charOrCode == d.LEFT_ARROW ? 0 < g && (g -= 1, h = !0) : f.charOrCode == d.RIGHT_ARROW && g < this.PICKER_SAT_VAL_W && (g += 1, h = !0);
                        h && (g -= e, c.style(this.cursorNode, "top", a - b + "px"), c.style(this.cursorNode, "left", g + "px"))
                    } else this._updateColor(!0)
                }, _updateColor: function () {
                    var a = this.PICKER_HUE_SELECTOR_H /
                        2, b = this.PICKER_SAT_SELECTOR_H / 2, d = this.PICKER_SAT_SELECTOR_W / 2, a = c.style(this.hueCursorNode, "top") + a, b = c.style(this.cursorNode, "top") + b, d = c.style(this.cursorNode, "left") + d, a = Math.round(360 - 360 * (a / this.PICKER_HUE_H)), d = v.fromHsv(a, 100 * (d / this.PICKER_SAT_VAL_W), 100 - 100 * (b / this.PICKER_SAT_VAL_H));
                    this._updateColorInputs(d);
                    this._updateValue(d, !0);
                    a != this._hue && this._setHue(a)
                }, _colorInputChange: function (a) {
                    var b, c = !1;
                    switch (a.target) {
                        case this.hexCode:
                            b = v.fromString(a.target.value);
                            c = !0;
                            break;
                        case this.Rval:
                        case this.Gval:
                        case this.Bval:
                            b =
                                v.fromArray([this.Rval.value, this.Gval.value, this.Bval.value]);
                            c = !0;
                            break;
                        case this.Hval:
                        case this.Sval:
                        case this.Vval:
                            b = v.fromHsv(this.Hval.value, this.Sval.value, this.Vval.value), c = !0
                    }
                    c && (this._updatePickerLocations(b), this._updateColorInputs(b), this._updateValue(b, !0))
                }, _updateValue: function (a, b) {
                    var c = a.toHex();
                    this.value = this.valueNode.value = c;
                    if (b && (!this._timer || this.liveUpdate))this.onChange(c)
                }, _updatePickerLocations: function (a) {
                    var b = this.PICKER_HUE_SELECTOR_H / 2, d = this.PICKER_SAT_SELECTOR_H /
                        2, f = this.PICKER_SAT_SELECTOR_W / 2, a = a.toHsv(), b = Math.round(this.PICKER_HUE_H - a.h / 360 * this.PICKER_HUE_H) - b, f = Math.round(a.s / 100 * this.PICKER_SAT_VAL_W) - f, d = Math.round(this.PICKER_SAT_VAL_H - a.v / 100 * this.PICKER_SAT_VAL_H) - d;
                    this.animatePoint ? (p.slideTo({node: this.hueCursorNode, duration: this.slideDuration, top: b, left: 0}).play(), p.slideTo({node: this.cursorNode, duration: this.slideDuration, top: d, left: f}).play()) : (c.style(this.hueCursorNode, "top", b + "px"), c.style(this.cursorNode, {left: f + "px", top: d + "px"}));
                    a.h !=
                        this._hue && this._setHue(a.h)
                }, _updateColorInputs: function (a) {
                    var b = a.toHex();
                    if (this.showRgb)this.Rval.value = a.r, this.Gval.value = a.g, this.Bval.value = a.b;
                    if (this.showHsv)a = a.toHsv(), this.Hval.value = Math.round(a.h), this.Sval.value = Math.round(a.s), this.Vval.value = Math.round(a.v);
                    if (this.showHex)this.hexCode.value = b;
                    this.previewNode.style.backgroundColor = b;
                    if (this.webSafe)this.safePreviewNode.style.backgroundColor = b
                }, _setHuePoint: function (a) {
                    a = a.layerY - this.PICKER_HUE_SELECTOR_H / 2;
                    this.animatePoint ? p.slideTo({node: this.hueCursorNode,
                        duration: this.slideDuration, top: a, left: 0, onEnd: i.hitch(this, function () {
                            this._updateColor(!0);
                            o.focus(this.hueCursorNode)
                        })}).play() : (c.style(this.hueCursorNode, "top", a + "px"), this._updateColor(!1))
                }, _setPoint: function (a) {
                    var b = a.layerY - this.PICKER_SAT_SELECTOR_H / 2, d = a.layerX - this.PICKER_SAT_SELECTOR_W / 2;
                    a && o.focus(a.target);
                    this.animatePoint ? p.slideTo({node: this.cursorNode, duration: this.slideDuration, top: b, left: d, onEnd: i.hitch(this, function () {
                        this._updateColor(!0);
                        o.focus(this.cursorNode)
                    })}).play() :
                        (c.style(this.cursorNode, {left: d + "px", top: b + "px"}), this._updateColor(!1))
                }, _handleKey: function () {
                }, focus: function () {
                    this.focused || o.focus(this.focusNode)
                }, _stopDrag: function (a) {
                    f.stop(a)
                }, destroy: function () {
                    this.inherited(arguments);
                    l.forEach(this._subs, function (a) {
                        g.unsubscribe(a)
                    });
                    delete this._subs
                }})
        })
    }, "dojo/fx": function () {
        define("./_base/lang,./Evented,./_base/kernel,./_base/array,./_base/connect,./_base/fx,./dom,./dom-style,./dom-geometry,./ready,require".split(","), function (e, j, i, l, c, g, h, b, f, a, k) {
            i.isAsync || a(0, function () {
                k(["./fx/Toggler"])
            });
            var i = i.fx = {}, a = {_fire: function (a, b) {
                this[a] && this[a].apply(this, b || []);
                return this
            }}, d = function (a) {
                this._index = -1;
                this._animations = a || [];
                this._current = this._onAnimateCtx = this._onEndCtx = null;
                this.duration = 0;
                l.forEach(this._animations, function (a) {
                    this.duration += a.duration;
                    a.delay && (this.duration += a.delay)
                }, this)
            };
            d.prototype = new j;
            e.extend(d, {_onAnimate: function () {
                this._fire("onAnimate", arguments)
            }, _onEnd: function () {
                c.disconnect(this._onAnimateCtx);
                c.disconnect(this._onEndCtx);
                this._onAnimateCtx = this._onEndCtx = null;
                this._index + 1 == this._animations.length ? this._fire("onEnd") : (this._current = this._animations[++this._index], this._onAnimateCtx = c.connect(this._current, "onAnimate", this, "_onAnimate"), this._onEndCtx = c.connect(this._current, "onEnd", this, "_onEnd"), this._current.play(0, !0))
            }, play: function (a, b) {
                if (!this._current)this._current = this._animations[this._index = 0];
                if (!b && "playing" == this._current.status())return this;
                var d = c.connect(this._current,
                    "beforeBegin", this, function () {
                        this._fire("beforeBegin")
                    }), f = c.connect(this._current, "onBegin", this, function (a) {
                    this._fire("onBegin", arguments)
                }), e = c.connect(this._current, "onPlay", this, function (a) {
                    this._fire("onPlay", arguments);
                    c.disconnect(d);
                    c.disconnect(f);
                    c.disconnect(e)
                });
                this._onAnimateCtx && c.disconnect(this._onAnimateCtx);
                this._onAnimateCtx = c.connect(this._current, "onAnimate", this, "_onAnimate");
                this._onEndCtx && c.disconnect(this._onEndCtx);
                this._onEndCtx = c.connect(this._current, "onEnd", this,
                    "_onEnd");
                this._current.play.apply(this._current, arguments);
                return this
            }, pause: function () {
                if (this._current) {
                    var a = c.connect(this._current, "onPause", this, function (b) {
                        this._fire("onPause", arguments);
                        c.disconnect(a)
                    });
                    this._current.pause()
                }
                return this
            }, gotoPercent: function (a, b) {
                this.pause();
                var c = this.duration * a;
                this._current = null;
                l.some(this._animations, function (a) {
                    if (a.duration <= c)return this._current = a, !0;
                    c -= a.duration;
                    return!1
                });
                this._current && this._current.gotoPercent(c / this._current.duration, b);
                return this
            }, stop: function (a) {
                if (this._current) {
                    if (a) {
                        for (; this._index + 1 < this._animations.length; ++this._index)this._animations[this._index].stop(!0);
                        this._current = this._animations[this._index]
                    }
                    var b = c.connect(this._current, "onStop", this, function (a) {
                        this._fire("onStop", arguments);
                        c.disconnect(b)
                    });
                    this._current.stop()
                }
                return this
            }, status: function () {
                return this._current ? this._current.status() : "stopped"
            }, destroy: function () {
                this._onAnimateCtx && c.disconnect(this._onAnimateCtx);
                this._onEndCtx && c.disconnect(this._onEndCtx)
            }});
            e.extend(d, a);
            i.chain = function (a) {
                return new d(a)
            };
            var p = function (a) {
                this._animations = a || [];
                this._connects = [];
                this.duration = this._finished = 0;
                l.forEach(a, function (a) {
                    var b = a.duration;
                    a.delay && (b += a.delay);
                    if (this.duration < b)this.duration = b;
                    this._connects.push(c.connect(a, "onEnd", this, "_onEnd"))
                }, this);
                this._pseudoAnimation = new g.Animation({curve: [0, 1], duration: this.duration});
                var b = this;
                l.forEach("beforeBegin,onBegin,onPlay,onAnimate,onPause,onStop,onEnd".split(","), function (a) {
                    b._connects.push(c.connect(b._pseudoAnimation,
                        a, function () {
                            b._fire(a, arguments)
                        }))
                })
            };
            e.extend(p, {_doAction: function (a, b) {
                l.forEach(this._animations, function (c) {
                    c[a].apply(c, b)
                });
                return this
            }, _onEnd: function () {
                ++this._finished > this._animations.length && this._fire("onEnd")
            }, _call: function (a, b) {
                var c = this._pseudoAnimation;
                c[a].apply(c, b)
            }, play: function (a, b) {
                this._finished = 0;
                this._doAction("play", arguments);
                this._call("play", arguments);
                return this
            }, pause: function () {
                this._doAction("pause", arguments);
                this._call("pause", arguments);
                return this
            }, gotoPercent: function (a, b) {
                var c = this.duration * a;
                l.forEach(this._animations, function (a) {
                    a.gotoPercent(a.duration < c ? 1 : c / a.duration, b)
                });
                this._call("gotoPercent", arguments);
                return this
            }, stop: function (a) {
                this._doAction("stop", arguments);
                this._call("stop", arguments);
                return this
            }, status: function () {
                return this._pseudoAnimation.status()
            }, destroy: function () {
                l.forEach(this._connects, c.disconnect)
            }});
            e.extend(p, a);
            i.combine = function (a) {
                return new p(a)
            };
            i.wipeIn = function (a) {
                var d = a.node = h.byId(a.node), f = d.style, i, a = g.animateProperty(e.mixin({properties: {height: {start: function () {
                    i =
                        f.overflow;
                    f.overflow = "hidden";
                    if ("hidden" == f.visibility || "none" == f.display)return f.height = "1px", f.display = "", f.visibility = "", 1;
                    var a = b.get(d, "height");
                    return Math.max(a, 1)
                }, end: function () {
                    return d.scrollHeight
                }}}}, a)), k = function () {
                    f.height = "auto";
                    f.overflow = i
                };
                c.connect(a, "onStop", k);
                c.connect(a, "onEnd", k);
                return a
            };
            i.wipeOut = function (a) {
                var b = (a.node = h.byId(a.node)).style, d, a = g.animateProperty(e.mixin({properties: {height: {end: 1}}}, a));
                c.connect(a, "beforeBegin", function () {
                    d = b.overflow;
                    b.overflow =
                        "hidden";
                    b.display = ""
                });
                var f = function () {
                    b.overflow = d;
                    b.height = "auto";
                    b.display = "none"
                };
                c.connect(a, "onStop", f);
                c.connect(a, "onEnd", f);
                return a
            };
            i.slideTo = function (a) {
                var d = null, i = null, k = function (a) {
                    return function () {
                        var c = b.getComputedStyle(a), e = c.position;
                        d = "absolute" == e ? a.offsetTop : parseInt(c.top) || 0;
                        i = "absolute" == e ? a.offsetLeft : parseInt(c.left) || 0;
                        if ("absolute" != e && "relative" != e)c = f.position(a, !0), d = c.y, i = c.x, a.style.position = "absolute", a.style.top = d + "px", a.style.left = i + "px"
                    }
                }(a.node = h.byId(a.node));
                k();
                a = g.animateProperty(e.mixin({properties: {top: a.top || 0, left: a.left || 0}}, a));
                c.connect(a, "beforeBegin", a, k);
                return a
            };
            return i
        })
    }, "dijit/_base/focus": function () {
        define("dojo/_base/array,dojo/dom,dojo/_base/lang,dojo/topic,dojo/_base/window,../focus,../main".split(","), function (e, j, i, l, c, g, h) {
            g.focus = function (b) {
                if (b) {
                    var f = "node"in b ? b.node : b, a = b.bookmark, b = b.openedForWindow, e = a ? a.isCollapsed : !1;
                    if (f) {
                        var d = "iframe" == f.tagName.toLowerCase() ? f.contentWindow : f;
                        if (d && d.focus)try {
                            d.focus()
                        } catch (i) {
                        }
                        g._onFocusNode(f)
                    }
                    if (a &&
                        c.withGlobal(b || c.global, h.isCollapsed) && !e) {
                        b && b.focus();
                        try {
                            c.withGlobal(b || c.global, h.moveToBookmark, null, [a])
                        } catch (j) {
                        }
                    }
                }
            };
            g.watch("curNode", function (b, c, a) {
                h._curFocus = a;
                h._prevFocus = c;
                a && l.publish("focusNode", a)
            });
            g.watch("activeStack", function (b, c, a) {
                h._activeStack = a
            });
            g.on("widget-blur", function (b, c) {
                l.publish("widgetBlur", b, c)
            });
            g.on("widget-focus", function (b, c) {
                l.publish("widgetFocus", b, c)
            });
            i.mixin(h, {_curFocus: null, _prevFocus: null, isCollapsed: function () {
                return h.getBookmark().isCollapsed
            },
                getBookmark: function () {
                    var b, f, a = c.doc.selection, e = g.curNode;
                    if (c.global.getSelection) {
                        if (a = c.global.getSelection())if (a.isCollapsed) {
                            if (b = e ? e.tagName : "")if (b = b.toLowerCase(), "textarea" == b || "input" == b && (!e.type || "text" == e.type.toLowerCase()))return a = {start: e.selectionStart, end: e.selectionEnd, node: e, pRange: !0}, {isCollapsed: a.end <= a.start, mark: a};
                            b = {isCollapsed: !0};
                            if (a.rangeCount)b.mark = a.getRangeAt(0).cloneRange()
                        } else f = a.getRangeAt(0), b = {isCollapsed: !1, mark: f.cloneRange()}
                    } else if (a) {
                        b = e ? e.tagName :
                            "";
                        b = b.toLowerCase();
                        if (e && b && ("button" == b || "textarea" == b || "input" == b)) {
                            if (a.type && "none" == a.type.toLowerCase())return{isCollapsed: !0, mark: null};
                            f = a.createRange();
                            return{isCollapsed: f.text && f.text.length ? !1 : !0, mark: {range: f, pRange: !0}}
                        }
                        b = {};
                        try {
                            f = a.createRange(), b.isCollapsed = !("Text" == a.type ? f.htmlText.length : f.length)
                        } catch (d) {
                            return b.isCollapsed = !0, b
                        }
                        if ("CONTROL" == a.type.toUpperCase())if (f.length) {
                            b.mark = [];
                            a = 0;
                            for (e = f.length; a < e;)b.mark.push(f.item(a++))
                        } else b.isCollapsed = !0, b.mark = null; else b.mark =
                            f.getBookmark()
                    }
                    return b
                }, moveToBookmark: function (b) {
                    var f = c.doc;
                    if (b = b.mark)if (c.global.getSelection) {
                        if ((f = c.global.getSelection()) && f.removeAllRanges)b.pRange ? (f = b.node, f.selectionStart = b.start, f.selectionEnd = b.end) : (f.removeAllRanges(), f.addRange(b))
                    } else if (f.selection && b) {
                        var a;
                        b.pRange ? a = b.range : i.isArray(b) ? (a = f.body.createControlRange(), e.forEach(b, function (b) {
                            a.addElement(b)
                        })) : (a = f.body.createTextRange(), a.moveToBookmark(b));
                        a.select()
                    }
                }, getFocus: function (b, f) {
                    var a = !g.curNode || b && j.isDescendant(g.curNode,
                        b.domNode) ? h._prevFocus : g.curNode;
                    return{node: a, bookmark: a && a == g.curNode && c.withGlobal(f || c.global, h.getBookmark), openedForWindow: f}
                }, _activeStack: [], registerIframe: function (b) {
                    return g.registerIframe(b)
                }, unregisterIframe: function (b) {
                    b && b.remove()
                }, registerWin: function (b, c) {
                    return g.registerWin(b, c)
                }, unregisterWin: function (b) {
                    b && b.remove()
                }});
            return h
        })
    }, "dojox/color": function () {
        define(["./color/_base"], function (e) {
            return e
        })
    }, "dojox/color/_base": function () {
        define(["../main", "dojo/_base/lang", "dojo/_base/Color",
            "dojo/colors"], function (e, j, i, l) {
            e = j.getObject("color", !0, e);
            e.Color = i;
            e.blend = i.blendColors;
            e.fromRgb = i.fromRgb;
            e.fromHex = i.fromHex;
            e.fromArray = i.fromArray;
            e.fromString = i.fromString;
            e.greyscale = l.makeGrey;
            j.mixin(e, {fromCmy: function (c, e, h) {
                if (j.isArray(c))e = c[1], h = c[2], c = c[0]; else if (j.isObject(c))e = c.m, h = c.y, c = c.c;
                c /= 100;
                e /= 100;
                h /= 100;
                e = 1 - e;
                h = 1 - h;
                return new i({r: Math.round(255 * (1 - c)), g: Math.round(255 * e), b: Math.round(255 * h)})
            }, fromCmyk: function (c, e, h, b) {
                if (j.isArray(c))e = c[1], h = c[2], b = c[3], c = c[0];
                else if (j.isObject(c))e = c.m, h = c.y, b = c.b, c = c.c;
                c /= 100;
                e /= 100;
                h /= 100;
                b /= 100;
                c = 1 - Math.min(1, c * (1 - b) + b);
                e = 1 - Math.min(1, e * (1 - b) + b);
                h = 1 - Math.min(1, h * (1 - b) + b);
                return new i({r: Math.round(255 * c), g: Math.round(255 * e), b: Math.round(255 * h)})
            }, fromHsl: function (c, e, h) {
                if (j.isArray(c))e = c[1], h = c[2], c = c[0]; else if (j.isObject(c))e = c.s, h = c.l, c = c.h;
                e /= 100;
                for (h /= 100; 0 > c;)c += 360;
                for (; 360 <= c;)c -= 360;
                var b, f, a;
                120 > c ? (b = (120 - c) / 60, f = c / 60, a = 0) : 240 > c ? (b = 0, f = (240 - c) / 60, a = (c - 120) / 60) : (b = (c - 240) / 60, f = 0, a = (360 - c) / 60);
                b = 2 * e * Math.min(b,
                    1) + (1 - e);
                f = 2 * e * Math.min(f, 1) + (1 - e);
                a = 2 * e * Math.min(a, 1) + (1 - e);
                0.5 > h ? (b *= h, f *= h, a *= h) : (b = (1 - h) * b + 2 * h - 1, f = (1 - h) * f + 2 * h - 1, a = (1 - h) * a + 2 * h - 1);
                return new i({r: Math.round(255 * b), g: Math.round(255 * f), b: Math.round(255 * a)})
            }});
            e.fromHsv = function (c, e, h) {
                if (j.isArray(c))e = c[1], h = c[2], c = c[0]; else if (j.isObject(c))e = c.s, h = c.v, c = c.h;
                360 == c && (c = 0);
                var e = e / 100, h = h / 100, b, f, a;
                if (0 == e)b = h, a = h, f = h; else {
                    var k = c / 60, c = Math.floor(k), d = k - c, k = h * (1 - e), l = h * (1 - e * d), e = h * (1 - e * (1 - d));
                    switch (c) {
                        case 0:
                            b = h;
                            f = e;
                            a = k;
                            break;
                        case 1:
                            b = l;
                            f = h;
                            a = k;
                            break;
                        case 2:
                            b = k;
                            f = h;
                            a = e;
                            break;
                        case 3:
                            b = k;
                            f = l;
                            a = h;
                            break;
                        case 4:
                            b = e;
                            f = k;
                            a = h;
                            break;
                        case 5:
                            b = h, f = k, a = l
                    }
                }
                return new i({r: Math.round(255 * b), g: Math.round(255 * f), b: Math.round(255 * a)})
            };
            j.extend(i, {toCmy: function () {
                var c = 1 - this.g / 255, e = 1 - this.b / 255;
                return{c: Math.round(100 * (1 - this.r / 255)), m: Math.round(100 * c), y: Math.round(100 * e)}
            }, toCmyk: function () {
                var c, e, h, b = this.r / 255;
                e = this.g / 255;
                h = this.b / 255;
                c = Math.min(1 - b, 1 - e, 1 - h);
                e = (1 - e - c) / (1 - c);
                h = (1 - h - c) / (1 - c);
                return{c: Math.round(100 * ((1 - b - c) / (1 - c))), m: Math.round(100 *
                    e), y: Math.round(100 * h), b: Math.round(100 * c)}
            }, toHsl: function () {
                var c = this.r / 255, e = this.g / 255, h = this.b / 255, b = Math.min(c, h, e), f = Math.max(c, e, h), a = f - b, i = 0, d = 0, b = (b + f) / 2;
                0 < b && 1 > b && (d = a / (0.5 > b ? 2 * b : 2 - 2 * b));
                0 < a && (f == c && f != e && (i += (e - h) / a), f == e && f != h && (i += 2 + (h - c) / a), f == h && f != c && (i += 4 + (c - e) / a), i *= 60);
                return{h: i, s: Math.round(100 * d), l: Math.round(100 * b)}
            }, toHsv: function () {
                var c = this.r / 255, e = this.g / 255, h = this.b / 255, b = Math.min(c, h, e), f = Math.max(c, e, h), b = f - b, a = null, i = 0 == f ? 0 : b / f;
                0 == i ? a = 0 : (a = c == f ? 60 * (e - h) / b : e == f ? 120 +
                    60 * (h - c) / b : 240 + 60 * (c - e) / b, 0 > a && (a += 360));
                return{h: a, s: Math.round(100 * i), v: Math.round(100 * f)}
            }});
            return e
        })
    }, "dojox/main": function () {
        define(["dojo/_base/kernel"], function (e) {
            return e.dojox
        })
    }, "dojo/colors": function () {
        define("dojo/colors", ["./_base/kernel", "./_base/lang", "./_base/Color", "./_base/array"], function (e, j, i, l) {
            var c = {};
            j.setObject("dojo.colors", c);
            var g = function (b, c, a) {
                0 > a && ++a;
                1 < a && --a;
                var e = 6 * a;
                return 1 > e ? b + (c - b) * e : 1 > 2 * a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b
            };
            e.colorFromRgb = i.fromRgb = function (b, c) {
                var a = b.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);
                if (a) {
                    var e = a[2].split(/\s*,\s*/), d = e.length, a = a[1];
                    if ("rgb" == a && 3 == d || "rgba" == a && 4 == d) {
                        a = e[0];
                        return"%" == a.charAt(a.length - 1) ? (a = l.map(e, function (a) {
                            return 2.56 * parseFloat(a)
                        }), 4 == d && (a[3] = e[3]), i.fromArray(a, c)) : i.fromArray(e, c)
                    }
                    if ("hsl" == a && 3 == d || "hsla" == a && 4 == d) {
                        var a = (parseFloat(e[0]) % 360 + 360) % 360 / 360, h = parseFloat(e[1]) / 100, j = parseFloat(e[2]) / 100, h = 0.5 >= j ? j * (h + 1) : j + h - j * h, j = 2 * j - h, a = [256 * g(j, h, a + 1 / 3), 256 * g(j, h, a), 256 * g(j, h, a -
                            1 / 3), 1];
                        4 == d && (a[3] = e[3]);
                        return i.fromArray(a, c)
                    }
                }
                return null
            };
            var h = function (b, c, a) {
                b = Number(b);
                return isNaN(b) ? a : b < c ? c : b > a ? a : b
            };
            i.prototype.sanitize = function () {
                this.r = Math.round(h(this.r, 0, 255));
                this.g = Math.round(h(this.g, 0, 255));
                this.b = Math.round(h(this.b, 0, 255));
                this.a = h(this.a, 0, 1);
                return this
            };
            c.makeGrey = i.makeGrey = function (b, c) {
                return i.fromArray([b, b, b, c])
            };
            j.mixin(i.named, {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220],
                bisque: [255, 228, 196], blanchedalmond: [255, 235, 205], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218,
                    165, 32], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160,
                    122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25,
                    25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], oldlace: [253, 245, 230], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139,
                    69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], whitesmoke: [245, 245, 245], yellowgreen: [154, 205, 50]});
            return i
        })
    }, "url:dojox/widget/ColorPicker/ColorPicker.html": '<table class="dojoxColorPicker" dojoAttachEvent="onkeypress: _handleKey" cellpadding="0" cellspacing="0" role="presentation">\n\t<tr>\n\t\t<td valign="top" class="dojoxColorPickerRightPad">\n\t\t\t<div class="dojoxColorPickerBox">\n\t\t\t\t<\!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. --\>\n\t\t\t\t<img title="${saturationPickerTitle}" alt="${saturationPickerTitle}" class="dojoxColorPickerPoint" src="${_pickerPointer}" tabIndex="0" dojoAttachPoint="cursorNode" style="position: absolute; top: 0px; left: 0px;">\n\t\t\t\t<img role="presentation" alt="" dojoAttachPoint="colorUnderlay" dojoAttachEvent="onclick: _setPoint, onmousedown: _stopDrag" class="dojoxColorPickerUnderlay" src="${_underlay}" ondragstart="return false">\n\t\t\t</div>\n\t\t</td>\n\t\t<td valign="top" class="dojoxColorPickerRightPad">\n\t\t\t<div class="dojoxHuePicker">\n\t\t\t\t<\!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. --\>\n\t\t\t\t<img dojoAttachPoint="hueCursorNode" tabIndex="0" class="dojoxHuePickerPoint" title="${huePickerTitle}" alt="${huePickerTitle}" src="${_huePickerPointer}" style="position: absolute; top: 0px; left: 0px;">\n\t\t\t\t<div class="dojoxHuePickerUnderlay" dojoAttachPoint="hueNode">\n\t\t\t\t    <img role="presentation" alt="" dojoAttachEvent="onclick: _setHuePoint, onmousedown: _stopDrag" src="${_hueUnderlay}">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</td>\n\t\t<td valign="top">\n\t\t\t<table cellpadding="0" cellspacing="0" role="presentation">\n\t\t\t\t<tr>\n\t\t\t\t\t<td valign="top" class="dojoxColorPickerPreviewContainer">\n\t\t\t\t\t\t<table cellpadding="0" cellspacing="0" role="presentation">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td valign="top" class="dojoxColorPickerRightPad">\n\t\t\t\t\t\t\t\t\t<div dojoAttachPoint="previewNode" class="dojoxColorPickerPreview"></div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td valign="top">\n\t\t\t\t\t\t\t\t\t<div dojoAttachPoint="safePreviewNode" class="dojoxColorPickerWebSafePreview"></div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td valign="bottom">\n\t\t\t\t\t\t<table class="dojoxColorPickerOptional" cellpadding="0" cellspacing="0" role="presentation">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class="dijitInline dojoxColorPickerRgb" dojoAttachPoint="rgbNode">\n\t\t\t\t\t\t\t\t\t\t<table cellpadding="1" cellspacing="1" role="presentation">\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_r">${redLabel}</label></td><td><input id="${_uId}_r" dojoAttachPoint="Rval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_g">${greenLabel}</label></td><td><input id="${_uId}_g" dojoAttachPoint="Gval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_b">${blueLabel}</label></td><td><input id="${_uId}_b" dojoAttachPoint="Bval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class="dijitInline dojoxColorPickerHsv" dojoAttachPoint="hsvNode">\n\t\t\t\t\t\t\t\t\t\t<table cellpadding="1" cellspacing="1" role="presentation">\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_h">${hueLabel}</label></td><td><input id="${_uId}_h" dojoAttachPoint="Hval"size="1" dojoAttachEvent="onchange: _colorInputChange"> ${degLabel}</td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_s">${saturationLabel}</label></td><td><input id="${_uId}_s" dojoAttachPoint="Sval" size="1" dojoAttachEvent="onchange: _colorInputChange"> ${percentSign}</td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_v">${valueLabel}</label></td><td><input id="${_uId}_v" dojoAttachPoint="Vval" size="1" dojoAttachEvent="onchange: _colorInputChange"> ${percentSign}</td></tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="2">\n\t\t\t\t\t\t\t\t\t<div class="dojoxColorPickerHex" dojoAttachPoint="hexNode" aria-live="polite">\t\n\t\t\t\t\t\t\t\t\t\t<label for="${_uId}_hex">&nbsp;${hexLabel}&nbsp;</label><input id="${_uId}_hex" dojoAttachPoint="hexCode, focusNode, valueNode" size="6" class="dojoxColorPickerHexCode" dojoAttachEvent="onchange: _colorInputChange">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</td>\n\t</tr>\n</table>\n\n',
    "dijit/form/DropDownButton": function () {
        define("dojo/_base/declare,dojo/_base/lang,dojo/query,../registry,../popup,./Button,../_Container,../_HasDropDown,dojo/text!./templates/DropDownButton.html".split(","), function (e, j, i, l, c, g, h, b, f) {
            return e("dijit.form.DropDownButton", [g, h, b], {baseClass: "dijitDropDownButton", templateString: f, _fillContent: function () {
                if (this.srcNodeRef) {
                    var a = i("*", this.srcNodeRef);
                    this.inherited(arguments, [a[0]]);
                    this.dropDownContainer = this.srcNodeRef
                }
            }, startup: function () {
                if (!this._started) {
                    if (!this.dropDown &&
                        this.dropDownContainer) {
                        var a = i("[widgetId]", this.dropDownContainer)[0];
                        this.dropDown = l.byNode(a);
                        delete this.dropDownContainer
                    }
                    this.dropDown && c.hide(this.dropDown);
                    this.inherited(arguments)
                }
            }, isLoaded: function () {
                var a = this.dropDown;
                return!!a && (!a.href || a.isLoaded)
            }, loadDropDown: function (a) {
                var b = this.dropDown, c = b.on("load", j.hitch(this, function () {
                    c.remove();
                    a()
                }));
                b.refresh()
            }, isFocusable: function () {
                return this.inherited(arguments) && !this._mouseDown
            }})
        })
    }, "url:dijit/form/templates/DropDownButton.html": '<span class="dijit dijitReset dijitInline"\n\t><span class=\'dijitReset dijitInline dijitButtonNode\'\n\t\tdata-dojo-attach-event="ondijitclick:_onClick" data-dojo-attach-point="_buttonNode"\n\t\t><span class="dijitReset dijitStretch dijitButtonContents"\n\t\t\tdata-dojo-attach-point="focusNode,titleNode,_arrowWrapperNode"\n\t\t\trole="button" aria-haspopup="true" aria-labelledby="${id}_label"\n\t\t\t><span class="dijitReset dijitInline dijitIcon"\n\t\t\t\tdata-dojo-attach-point="iconNode"\n\t\t\t></span\n\t\t\t><span class="dijitReset dijitInline dijitButtonText"\n\t\t\t\tdata-dojo-attach-point="containerNode,_popupStateNode"\n\t\t\t\tid="${id}_label"\n\t\t\t></span\n\t\t\t><span class="dijitReset dijitInline dijitArrowButtonInner"></span\n\t\t\t><span class="dijitReset dijitInline dijitArrowButtonChar">&#9660;</span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type="${type}" value="${value}" class="dijitOffScreen" tabIndex="-1"\n\t\tdata-dojo-attach-point="valueNode"\n/></span>\n',
    "dijit/TooltipDialog": function () {
        define("dojo/_base/declare,dojo/dom-class,dojo/_base/event,dojo/keys,dojo/_base/lang,./focus,./layout/ContentPane,./_DialogMixin,./form/_FormMixin,./_TemplatedMixin,dojo/text!./templates/TooltipDialog.html,./main".split(","), function (e, j, i, l, c, g, h, b, f, a, k) {
            return e("dijit.TooltipDialog", [h, a, f, b], {title: "", doLayout: !1, autofocus: !0, baseClass: "dijitTooltipDialog", _firstFocusItem: null, _lastFocusItem: null, templateString: k, _setTitleAttr: function (a) {
                this.containerNode.title =
                    a;
                this._set("title", a)
            }, postCreate: function () {
                this.inherited(arguments);
                this.connect(this.containerNode, "onkeypress", "_onKey")
            }, orient: function (a, b, c) {
                a = {"MR-ML": "dijitTooltipRight", "ML-MR": "dijitTooltipLeft", "TM-BM": "dijitTooltipAbove", "BM-TM": "dijitTooltipBelow", "BL-TL": "dijitTooltipBelow dijitTooltipABLeft", "TL-BL": "dijitTooltipAbove dijitTooltipABLeft", "BR-TR": "dijitTooltipBelow dijitTooltipABRight", "TR-BR": "dijitTooltipAbove dijitTooltipABRight", "BR-BL": "dijitTooltipRight", "BL-BR": "dijitTooltipLeft"}[b +
                    "-" + c];
                j.replace(this.domNode, a, this._currentOrientClass || "");
                this._currentOrientClass = a
            }, focus: function () {
                this._getFocusItems(this.containerNode);
                g.focus(this._firstFocusItem)
            }, onOpen: function (a) {
                this.orient(this.domNode, a.aroundCorner, a.corner);
                var b = a.aroundNodePos;
                if ("M" == a.corner.charAt(0) && "M" == a.aroundCorner.charAt(0))this.connectorNode.style.top = b.y + (b.h - this.connectorNode.offsetHeight >> 1) - a.y + "px", this.connectorNode.style.left = ""; else if ("M" == a.corner.charAt(1) && "M" == a.aroundCorner.charAt(1))this.connectorNode.style.left =
                    b.x + (b.w - this.connectorNode.offsetWidth >> 1) - a.x + "px";
                this._onShow()
            }, onClose: function () {
                this.onHide()
            }, _onKey: function (a) {
                var b = a.target;
                a.charOrCode === l.TAB && this._getFocusItems(this.containerNode);
                var c = this._firstFocusItem == this._lastFocusItem;
                a.charOrCode == l.ESCAPE ? (this.defer("onCancel"), i.stop(a)) : b == this._firstFocusItem && a.shiftKey && a.charOrCode === l.TAB ? (c || g.focus(this._lastFocusItem), i.stop(a)) : b == this._lastFocusItem && a.charOrCode === l.TAB && !a.shiftKey ? (c || g.focus(this._firstFocusItem), i.stop(a)) :
                    a.charOrCode === l.TAB && a.stopPropagation()
            }})
        })
    }, "url:dijit/templates/TooltipDialog.html": '<div role="presentation" tabIndex="-1">\n\t<div class="dijitTooltipContainer" role="presentation">\n\t\t<div class ="dijitTooltipContents dijitTooltipFocusNode" data-dojo-attach-point="containerNode" role="dialog"></div>\n\t</div>\n\t<div class="dijitTooltipConnector" role="presentation" data-dojo-attach-point="connectorNode"></div>\n</div>\n', "*now": function (e) {
        e(['dojo/i18n!*preload*dojo/nls/dojo*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])
    }}});
// START OF dojobundle.js
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/FontChoice.js] */
//>>built
define("dijit/_editor/nls/FontChoice", {root: {fontSize: "Size", fontName: "Font", formatBlock: "Format", serif: "serif", "sans-serif": "sans-serif", monospace: "monospace", cursive: "cursive", fantasy: "fantasy", noFormat: "None", p: "Paragraph", h1: "Heading", h2: "Subheading", h3: "Sub-subheading", pre: "Pre-formatted", 1: "xx-small", 2: "x-small", 3: "small", 4: "medium", 5: "large", 6: "x-large", 7: "xx-large"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0,
    hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/FontChoice.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/LinkDialog.js] */
//>>built
define("dijit/_editor/nls/LinkDialog", {root: {createLinkTitle: "Link Properties", insertImageTitle: "Image Properties", url: "URL:", text: "Description:", target: "Target:", set: "Set", currentWindow: "Current Window", parentWindow: "Parent Window", topWindow: "Topmost Window", newWindow: "New Window"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/LinkDialog.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/commands.js] */
//>>built
define("dijit/_editor/nls/commands", {root: {bold: "Bold", copy: "Copy", cut: "Cut", "delete": "Delete", indent: "Indent", insertHorizontalRule: "Horizontal Rule", insertOrderedList: "Numbered List", insertUnorderedList: "Bullet List", italic: "Italic", justifyCenter: "Align Center", justifyFull: "Justify", justifyLeft: "Align Left", justifyRight: "Align Right", outdent: "Outdent", paste: "Paste", redo: "Redo", removeFormat: "Remove Format", selectAll: "Select All", strikethrough: "Strikethrough", subscript: "Subscript", superscript: "Superscript",
    underline: "Underline", undo: "Undo", unlink: "Remove Link", createLink: "Create Link", toggleDir: "Toggle Direction", insertImage: "Insert Image", insertTable: "Insert/Edit Table", toggleTableBorder: "Toggle Table Border", deleteTable: "Delete Table", tableProp: "Table Property", htmlToggle: "HTML Source", foreColor: "Foreground Color", hiliteColor: "Background Color", plainFormatBlock: "Paragraph Style", formatBlock: "Paragraph Style", fontSize: "Font Size", fontName: "Font Name", tabIndent: "Tab Indent", fullScreen: "Toggle Full Screen",
    viewSource: "View HTML Source", print: "Print", newPage: "New Page", systemShortcut: 'The "${0}" action is only available in your browser using a keyboard shortcut. Use ${1}.', ctrlKey: "ctrl+${0}", appleKey: "\u2318${0}"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/commands.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/de/FontChoice.js] */
//>>built
define("dijit/_editor/nls/de/FontChoice", {fontSize: "Gr\u00f6\u00dfe", fontName: "Schriftart", formatBlock: "Format", serif: "Serife", "sans-serif": "Serifenlos", monospace: "Monospaceschrift", cursive: "Kursiv", fantasy: "Fantasie", noFormat: "Keine Angabe", p: "Absatz", h1: "\u00dcberschrift", h2: "Unter\u00fcberschrift", h3: "Unterunter\u00fcberschrift", pre: "Vorformatiert", 1: "XXS", 2: "XS", 3: "S", 4: "M", 5: "L", 6: "XL", 7: "XXL"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/de/FontChoice.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/de/LinkDialog.js] */
//>>built
define("dijit/_editor/nls/de/LinkDialog", {createLinkTitle: "Linkeigenschaften", insertImageTitle: "Grafikeigenschaften", url: "URL:", text: "Beschreibung:", target: "Ziel:", set: "Festlegen", currentWindow: "Aktuelles Fenster", parentWindow: "\u00dcbergeordnetes Fenster", topWindow: "Aktives Fenster", newWindow: "Neues Fenster"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/de/LinkDialog.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/de/commands.js] */
//>>built
define("dijit/_editor/nls/de/commands", {bold: "Fett", copy: "Kopieren", cut: "Ausschneiden", "delete": "L\u00f6schen", indent: "Einr\u00fccken", insertHorizontalRule: "Horizontaler Strich", insertOrderedList: "Nummerierung", insertUnorderedList: "Aufz\u00e4hlungszeichen", italic: "Kursiv", justifyCenter: "Zentriert", justifyFull: "Blocksatz", justifyLeft: "Linksb\u00fcndig", justifyRight: "Rechtsb\u00fcndig", outdent: "Ausr\u00fccken", paste: "Einf\u00fcgen", redo: "Wiederholen", removeFormat: "Formatierung entfernen", selectAll: "Alles ausw\u00e4hlen",
    strikethrough: "Durchgestrichen", subscript: "Tiefgestellt", superscript: "Hochgestellt", underline: "Unterstrichen", undo: "R\u00fcckg\u00e4ngig", unlink: "Link entfernen", createLink: "Link erstellen", toggleDir: "Richtung wechseln", insertImage: "Grafik einf\u00fcgen", insertTable: "Tabelle einf\u00fcgen/bearbeiten", toggleTableBorder: "Tabellenumrandung ein-/ausschalten", deleteTable: "Tabelle l\u00f6schen", tableProp: "Tabelleneigenschaft", htmlToggle: "HTML-Quelltext", foreColor: "Vordergrundfarbe", hiliteColor: "Hintergrundfarbe",
    plainFormatBlock: "Absatzstil", formatBlock: "Absatzstil", fontSize: "Schriftgr\u00f6\u00dfe", fontName: "Schriftartname", tabIndent: "Registerkarteneinr\u00fcckung", fullScreen: "Gesamtanzeige", viewSource: "HTML-Quelle", print: "Drucken", newPage: "Neue Seite", systemShortcut: 'Die Aktion "${0}" ist im Browser nur \u00fcber einen Tastaturkurzbefehl verf\u00fcgbar. Verwenden Sie ${1}.', ctrlKey: "Strg+${0}", appleKey: "\u2318${0}"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/de/commands.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/ru/FontChoice.js] */
//>>built
define("dijit/_editor/nls/ru/FontChoice", {fontSize: "\u0420\u0430\u0437\u043c\u0435\u0440", fontName: "\u0428\u0440\u0438\u0444\u0442", formatBlock: "\u0424\u043e\u0440\u043c\u0430\u0442", serif: "\u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438", "sans-serif": "\u0431\u0435\u0437 \u0437\u0430\u0441\u0435\u0447\u0435\u043a", monospace: "\u043d\u0435\u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439", cursive: "\u043a\u0443\u0440\u0441\u0438\u0432", fantasy: "\u0430\u0440\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439",
    noFormat: "\u041d\u0435\u0442", p: "\u0410\u0431\u0437\u0430\u0446", h1: "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a", h2: "\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a", h3: "\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a", pre: "\u0417\u0430\u0440\u0430\u043d\u0435\u0435 \u043e\u0442\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439", 1: "\u0441\u0430\u043c\u044b\u0439 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439",
    2: "\u043e\u0447\u0435\u043d\u044c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439", 3: "\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439", 4: "\u0441\u0440\u0435\u0434\u043d\u0438\u0439", 5: "\u0431\u043e\u043b\u044c\u0448\u043e\u0439", 6: "\u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0439", 7: "\u0441\u0430\u043c\u044b\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/ru/FontChoice.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/ru/LinkDialog.js] */
//>>built
define("dijit/_editor/nls/ru/LinkDialog", {createLinkTitle: "\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u0441\u044b\u043b\u043a\u0438", insertImageTitle: "\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f", url: "URL:", text: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:", target: "\u0426\u0435\u043b\u0435\u0432\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442:", set: "\u0417\u0430\u0434\u0430\u0442\u044c", currentWindow: "\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u043e\u043a\u043d\u043e",
    parentWindow: "\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u043e\u043a\u043d\u043e", topWindow: "\u0412\u0435\u0440\u0445\u043d\u0435\u0435 \u043e\u043a\u043d\u043e", newWindow: "\u041d\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/ru/LinkDialog.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/ru/commands.js] */
//>>built
define("dijit/_editor/nls/ru/commands", {bold: "\u041f\u043e\u043b\u0443\u0436\u0438\u0440\u043d\u044b\u0439", copy: "\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c", cut: "\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c", "delete": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c", indent: "\u041e\u0442\u0441\u0442\u0443\u043f", insertHorizontalRule: "\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043a\u0430", insertOrderedList: "\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",
    insertUnorderedList: "\u0421\u043f\u0438\u0441\u043e\u043a \u0441 \u043c\u0430\u0440\u043a\u0435\u0440\u0430\u043c\u0438", italic: "\u041a\u0443\u0440\u0441\u0438\u0432", justifyCenter: "\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443", justifyFull: "\u041f\u043e \u0448\u0438\u0440\u0438\u043d\u0435", justifyLeft: "\u041f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e", justifyRight: "\u041f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e", outdent: "\u0412\u0442\u044f\u0436\u043a\u0430",
    paste: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c", redo: "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c", removeFormat: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442", selectAll: "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435", strikethrough: "\u041f\u0435\u0440\u0435\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435", subscript: "\u041d\u0438\u0436\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441", superscript: "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",
    underline: "\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435", undo: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c", unlink: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443", createLink: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443", toggleDir: "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435", insertImage: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
    insertTable: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443", toggleTableBorder: "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0430\u043c\u043a\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b", deleteTable: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443", tableProp: "\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",
    htmlToggle: "\u041a\u043e\u0434 HTML", foreColor: "\u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430", hiliteColor: "\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430", plainFormatBlock: "\u0421\u0442\u0438\u043b\u044c \u0430\u0431\u0437\u0430\u0446\u0430", formatBlock: "\u0421\u0442\u0438\u043b\u044c \u0430\u0431\u0437\u0430\u0446\u0430", fontSize: "\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430", fontName: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0448\u0440\u0438\u0444\u0442\u0430",
    tabIndent: "\u0422\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u044f", fullScreen: "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c", viewSource: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 HTML", print: "\u041f\u0435\u0447\u0430\u0442\u044c", newPage: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",
    systemShortcut: '\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 "${0}" \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0443\u0442\u0435\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448 ${1}.', ctrlKey: "ctrl+${0}", appleKey: "\u2318${0}"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/_editor/nls/ru/commands.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/ComboBox.js] */
//>>built
define("dijit/form/nls/ComboBox", {root: {previousMessage: "Previous choices", nextMessage: "More choices"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/ComboBox.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/Textarea.js] */
//>>built
define("dijit/form/nls/Textarea", {root: {iframeEditTitle: "edit area", iframeFocusTitle: "edit area frame"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/Textarea.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/de/ComboBox.js] */
//>>built
define("dijit/form/nls/de/ComboBox", {previousMessage: "Vorherige Auswahl", nextMessage: "Weitere Auswahlm\u00f6glichkeiten"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/de/ComboBox.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/de/Textarea.js] */
//>>built
define("dijit/form/nls/de/Textarea", {iframeEditTitle: "Editierbereich", iframeFocusTitle: "Rahmen f\u00fcr Editierbereich"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/de/Textarea.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/de/validate.js] */
//>>built
define("dijit/form/nls/de/validate", {invalidMessage: "Der eingegebene Wert ist ung\u00fcltig. ", missingMessage: "Dieser Wert ist erforderlich.", rangeMessage: "Dieser Wert liegt au\u00dferhalb des g\u00fcltigen Bereichs. "});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/de/validate.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/ru/ComboBox.js] */
//>>built
define("dijit/form/nls/ru/ComboBox", {previousMessage: "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b", nextMessage: "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/ru/ComboBox.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/ru/Textarea.js] */
//>>built
define("dijit/form/nls/ru/Textarea", {iframeEditTitle: "\u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f", iframeFocusTitle: "\u0444\u0440\u0435\u0439\u043c \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/ru/Textarea.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/ru/validate.js] */
//>>built
define("dijit/form/nls/ru/validate", {invalidMessage: "\u0423\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.", missingMessage: "\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.", rangeMessage: "\u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u043d\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/ru/validate.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/validate.js] */
//>>built
define("dijit/form/nls/validate", {root: {invalidMessage: "The value entered is not valid.", missingMessage: "This value is required.", rangeMessage: "This value is out of range."}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/form/nls/validate.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/common.js] */
//>>built
define("dijit/nls/common", {root: {buttonOk: "OK", buttonCancel: "Cancel", buttonSave: "Save", itemClose: "Close"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/common.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/de/common.js] */
//>>built
define("dijit/nls/de/common", {buttonOk: "OK", buttonCancel: "Abbrechen", buttonSave: "Speichern", itemClose: "Schlie\u00dfen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/de/common.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/de/loading.js] */
//>>built
define("dijit/nls/de/loading", {loadingState: "Wird geladen...", errorState: "Es ist ein Fehler aufgetreten."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/de/loading.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/loading.js] */
//>>built
define("dijit/nls/loading", {root: {loadingState: "Loading...", errorState: "Sorry, an error occurred"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/loading.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/ru/common.js] */
//>>built
define("dijit/nls/ru/common", {buttonOk: "OK", buttonCancel: "\u041e\u0442\u043c\u0435\u043d\u0430", buttonSave: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c", itemClose: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/ru/common.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/ru/loading.js] */
//>>built
define("dijit/nls/ru/loading", {loadingState: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...", errorState: "\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dijit/nls/ru/loading.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/buddhist.js] */
//>>built
define("dojo/cldr/nls/buddhist", {root: {"months-format-abbr": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-format-wide": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-standAlone-abbr": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-standAlone-wide": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "days-format-abbr": "1,2,3,4,5,6,7".split(","), "days-format-narrow": "1,2,3,4,5,6,7".split(","),
    "days-format-wide": "1,2,3,4,5,6,7".split(","), "days-standAlone-abbr": "1,2,3,4,5,6,7".split(","), "days-standAlone-narrow": "1,2,3,4,5,6,7".split(","), "days-standAlone-wide": "1,2,3,4,5,6,7".split(","), "quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-format-narrow": ["1", "2", "3", "4"], "quarters-format-wide": ["Q1", "Q2", "Q3", "Q4"], "quarters-standAlone-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-standAlone-narrow": ["1", "2", "3", "4"], "quarters-standAlone-wide": ["Q1", "Q2", "Q3", "Q4"], "dayPeriods-format-abbr-am": "AM",
    "dayPeriods-format-abbr-pm": "PM", "dayPeriods-format-narrow-am": "AM", "dayPeriods-format-narrow-pm": "PM", "dayPeriods-format-wide-am": "AM", "dayPeriods-format-wide-pm": "PM", eraNames: ["BE"], eraAbbr: ["BE"], eraNarrow: ["BE"], "dateFormat-full": "EEEE, G y MMMM dd", "dateFormat-long": "G y MMMM d", "dateFormat-medium": "G y MMM d", "dateFormat-short": "GGGGG yyyy-MM-dd", "timeFormat-full": "HH:mm:ss zzzz", "timeFormat-long": "HH:mm:ss z", "timeFormat-medium": "HH:mm:ss", "timeFormat-short": "HH:mm", dateTimeFormat: "{1} {0}",
    "dateFormatItem-d": "d", "dateFormatItem-Ed": "d E", "dateFormatItem-Gy": "G y", "dateFormatItem-h": "h a", "dateFormatItem-H": "HH", "dateFormatItem-hm": "h:mm a", "dateFormatItem-Hm": "HH:mm", "dateFormatItem-hms": "h:mm:ss a", "dateFormatItem-Hms": "HH:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "M-d", "dateFormatItem-MEd": "E, M-d", "dateFormatItem-MMM": "LLL", "dateFormatItem-MMMd": "MMM d", "dateFormatItem-MMMEd": "E MMM d", "dateFormatItem-ms": "mm:ss", "dateFormatItem-y": "G y", "dateFormatItem-yM": "GGGGG yyyy-MM",
    "dateFormatItem-yMd": "GGGGG yyyy-MM-dd", "dateFormatItem-yMEd": "E, GGGGG yyyy-MM-dd", "dateFormatItem-yMMM": "G y MMM", "dateFormatItem-yMMMd": "G y MMM d", "dateFormatItem-yMMMEd": "E, G y MMM d", "dateFormatItem-yQ": "GGGGG yyyy Q", "dateFormatItem-yQQQ": "G y QQQ", "dateTimeFormats-appendItem-Day": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}", "dateTimeFormats-appendItem-Era": "{0} {1}", "dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})",
    "dateTimeFormats-appendItem-Month": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Second": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Timezone": "{0} {1}", "dateTimeFormats-appendItem-Week": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Year": "{0} {1}"}, ar: !0, cs: !0, da: !0, de: !0, el: !0, en: !0, "en-gb": !0, es: !0, fi: !0, fr: !0, hu: !0, it: !0, ja: !0, ko: !0, nb: !0, nl: !0, pl: !0, pt: !0, "pt-pt": !0, ro: !0, ru: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-hant": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/buddhist.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/currency.js] */
//>>built
define("dojo/cldr/nls/currency", {root: {AUD_symbol: "AU$", CAD_symbol: "CA$", CNY_symbol: "CN\u00a5", EUR_symbol: "\u20ac", GBP_symbol: "\u00a3", HKD_symbol: "HK$", JPY_symbol: "JP\u00a5", USD_symbol: "US$"}, ar: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, en: !0, "en-au": !0, "en-ca": !0, es: !0, fi: !0, fr: !0, he: !0, hu: !0, it: !0, ja: !0, ko: !0, nb: !0, nl: !0, pl: !0, pt: !0, "pt-pt": !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-hant": !0, "zh-hk": !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/currency.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/buddhist.js] */
//>>built
define("dojo/cldr/nls/de/buddhist", {"dateFormat-full": "EEEE d. MMMM y G", "dateFormat-long": "d. MMMM y G", "dateFormat-medium": "d. MMM y G", "dateFormat-short": "d.M.yyyy", "dateFormatItem-d": "d", "dateFormatItem-Ed": "E d.", "dateFormatItem-Gy": "y G", "dateFormatItem-H": "HH 'Uhr'", "dateFormatItem-Hm": "HH:mm", "dateFormatItem-Hms": "HH:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "d.M.", "dateFormatItem-MEd": "E, d.M.", "dateFormatItem-MMd": "d.MM.", "dateFormatItem-MMdd": "dd.MM.", "dateFormatItem-MMM": "LLL",
    "dateFormatItem-MMMd": "d. MMM", "dateFormatItem-MMMEd": "E, d. MMM", "dateFormatItem-MMMMdd": "dd. MMMM", "dateFormatItem-ms": "mm:ss", "dateFormatItem-y": "y G", "dateFormatItem-yM": "M.y G", "dateFormatItem-yMd": "d.M.y G", "dateFormatItem-yMEd": "E, d.M.y G", "dateFormatItem-yMMM": "MMM y G", "dateFormatItem-yMMMd": "d. MMM y G", "dateFormatItem-yMMMEd": "E, d. MMM y G", "dateFormatItem-yQ": "Q y G", "dateFormatItem-yQQQ": "QQQ y G", "dateFormatItem-yyMM": "MM.y G", "dateFormatItem-yyMMdd": "dd.MM.y G", "dateFormatItem-yyMMM": "MMM y G",
    "dateFormatItem-yyQ": "Q y G", "dateFormatItem-yyQQQQ": "QQQQ y G", "dateFormatItem-yyyy": "y G", "dateFormatItem-yyyyMMMM": "MMMM y G", "days-format-abbr": "So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.".split(","), "days-format-wide": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","), "days-standAlone-abbr": "So,Mo,Di,Mi,Do,Fr,Sa".split(","), "days-standAlone-narrow": "S,M,D,M,D,F,S".split(","), "quarters-format-wide": ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], "dayPeriods-format-wide-am": "vorm.",
    "dayPeriods-format-wide-pm": "nachm.", "months-format-abbr": "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","), "months-format-wide": "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","), "months-standAlone-abbr": "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","), "months-standAlone-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(",")});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/buddhist.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/currency.js] */
//>>built
define("dojo/cldr/nls/de/currency", {AUD_displayName: "Australischer Dollar", CAD_displayName: "Kanadischer Dollar", CHF_displayName: "Schweizer Franken", CNY_displayName: "Renminbi Yuan", EUR_displayName: "Euro", GBP_displayName: "Pfund Sterling", HKD_displayName: "Hongkong-Dollar", JPY_displayName: "Japanische Yen", JPY_symbol: "\u00a5", USD_displayName: "US-Dollar", USD_symbol: "$"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/currency.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/gregorian.js] */
//>>built
define("dojo/cldr/nls/de/gregorian", {"months-format-abbr": "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","), "months-format-wide": "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","), "months-standAlone-abbr": "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","), "months-standAlone-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(","), "days-format-abbr": "So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.".split(","), "days-format-wide": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
    "days-standAlone-abbr": "So,Mo,Di,Mi,Do,Fr,Sa".split(","), "days-standAlone-narrow": "S,M,D,M,D,F,S".split(","), "quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-format-narrow": ["1", "2", "3", "4"], "quarters-format-wide": ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], "dayPeriods-format-wide-afternoon": "nachmittags", "dayPeriods-format-wide-am": "vorm.", "dayPeriods-format-wide-earlyMorning": "morgens", "dayPeriods-format-wide-evening": "abends", "dayPeriods-format-wide-morning": "vormittags", "dayPeriods-format-wide-night": "nachts",
    "dayPeriods-format-wide-noon": "Mittag", "dayPeriods-format-wide-pm": "nachm.", eraNames: ["v. Chr.", "n. Chr."], eraAbbr: ["v. Chr.", "n. Chr."], "dateFormat-full": "EEEE, d. MMMM y", "dateFormat-long": "d. MMMM y", "dateFormat-medium": "dd.MM.yyyy", "dateFormat-short": "dd.MM.yy", "timeFormat-full": "HH:mm:ss zzzz", "timeFormat-long": "HH:mm:ss z", "timeFormat-medium": "HH:mm:ss", "timeFormat-short": "HH:mm", "dateFormatItem-d": "d", "dateFormatItem-Ed": "E, d.", "dateFormatItem-H": "HH 'Uhr'", "dateFormatItem-hm": "h:mm a", "dateFormatItem-Hm": "HH:mm",
    "dateFormatItem-hms": "h:mm:ss a", "dateFormatItem-Hms": "HH:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "d.M.", "dateFormatItem-MEd": "E, d.M.", "dateFormatItem-MMd": "d.MM.", "dateFormatItem-MMdd": "dd.MM.", "dateFormatItem-MMM": "LLL", "dateFormatItem-MMMd": "d. MMM", "dateFormatItem-MMMEd": "E, d. MMM", "dateFormatItem-MMMMdd": "dd. MMMM", "dateFormatItem-MMMMEd": "E, d. MMMM", "dateFormatItem-ms": "mm:ss", "dateFormatItem-y": "y", "dateFormatItem-yM": "M.y", "dateFormatItem-yMd": "d.M.y", "dateFormatItem-yMEd": "E, d.M.y",
    "dateFormatItem-yMMM": "MMM y", "dateFormatItem-yMMMd": "d. MMM y", "dateFormatItem-yMMMEd": "E, d. MMM y", "dateFormatItem-yQ": "Q y", "dateFormatItem-yQQQ": "QQQ y", "dateFormatItem-yyMM": "MM.yy", "dateFormatItem-yyMMdd": "dd.MM.yy", "dateFormatItem-yyMMM": "MMM yy", "dateFormatItem-yyQ": "Q yy", "dateFormatItem-yyQQQQ": "QQQQ yy", "dateFormatItem-yyyy": "y", "dateFormatItem-yyyyMMMM": "MMMM y", "field-era": "Epoche", "field-year": "Jahr", "field-year-relative+-1": "Letztes Jahr", "field-year-relative+0": "Dieses Jahr", "field-year-relative+1": "N\u00e4chstes Jahr",
    "field-month": "Monat", "field-month-relative+-1": "Letzter Monat", "field-month-relative+0": "Dieser Monat", "field-month-relative+1": "N\u00e4chster Monat", "field-week": "Woche", "field-week-relative+-1": "Letzte Woche", "field-week-relative+0": "Diese Woche", "field-week-relative+1": "N\u00e4chste Woche", "field-day": "Tag", "field-day-relative+-2": "Vorgestern", "field-day-relative+-1": "Gestern", "field-day-relative+0": "Heute", "field-day-relative+1": "Morgen", "field-day-relative+2": "\u00dcbermorgen", "field-weekday": "Wochentag",
    "field-dayperiod": "Tagesh\u00e4lfte", "field-hour": "Stunde", "field-minute": "Minute", "field-second": "Sekunde", "field-zone": "Zone", "months-format-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(","), "months-standAlone-wide": "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","), "days-format-narrow": "S,M,D,M,D,F,S".split(","), "days-standAlone-wide": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","), "quarters-standAlone-wide": ["1. Quartal", "2. Quartal",
        "3. Quartal", "4. Quartal"], eraNarrow: ["v. Chr.", "n. Chr."]});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/gregorian.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/islamic.js] */
//>>built
define("dojo/cldr/nls/de/islamic", {"dateFormat-full": "EEEE d. MMMM y G", "dateFormat-long": "d. MMMM y G", "dateFormat-medium": "d. MMM y G", "dateFormat-short": "d.M.y G", "dateFormatItem-d": "d", "dateFormatItem-Ed": "E d.", "dateFormatItem-H": "HH 'Uhr'", "dateFormatItem-Hm": "HH:mm", "dateFormatItem-Hms": "HH:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "d.M.", "dateFormatItem-MEd": "E, d.M.", "dateFormatItem-MMd": "d.MM.", "dateFormatItem-MMdd": "dd.MM.", "dateFormatItem-MMM": "LLL", "dateFormatItem-MMMd": "d. MMM",
    "dateFormatItem-MMMEd": "E, d. MMM", "dateFormatItem-MMMMdd": "dd. MMMM", "dateFormatItem-ms": "mm:ss", "dateFormatItem-yyMM": "MM.y G", "dateFormatItem-yyMMdd": "dd.MM.y G", "dateFormatItem-yyMMM": "MMM y G", "dateFormatItem-yyQ": "Q y G", "dateFormatItem-yyQQQQ": "QQQQ y G", "dateFormatItem-yyyy": "y G", "dateFormatItem-yyyyM": "M.y G", "dateFormatItem-yyyyMd": "d.M.y G", "dateFormatItem-yyyyMEd": "E, d.M.y G", "dateFormatItem-yyyyMMM": "MMM y G", "dateFormatItem-yyyyMMMd": "d. MMM y G", "dateFormatItem-yyyyMMMEd": "E, d. MMM y G",
    "dateFormatItem-yyyyMMMM": "MMMM y G", "dateFormatItem-yyyyQ": "Q y G", "dateFormatItem-yyyyQQQ": "QQQ y G", "days-format-abbr": "So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.".split(","), "days-format-wide": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","), "days-standAlone-abbr": "So,Mo,Di,Mi,Do,Fr,Sa".split(","), "days-standAlone-narrow": "S,M,D,M,D,F,S".split(","), "quarters-format-wide": ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], "dayPeriods-format-wide-am": "vorm.", "dayPeriods-format-wide-pm": "nachm.",
    "dateFormatItem-yM": "M.y", "dateFormatItem-yMd": "d.M.y", "dateFormatItem-yMEd": "E, d.M.y", "dateFormatItem-yMMM": "MMM y", "dateFormatItem-yMMMd": "d. MMM y", "dateFormatItem-yMMMEd": "E, d. MMM y", "dateFormatItem-yQ": "Q y", "dateFormatItem-yQQQ": "QQQ y"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/islamic.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/number.js] */
//>>built
define("dojo/cldr/nls/de/number", {decimal: ",", group: ".", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0B", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", currencyFormat: "#,##0.00\u00a0\u00a4"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/de/number.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/gregorian.js] */
//>>built
define("dojo/cldr/nls/gregorian", {root: {"months-format-abbr": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-format-wide": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-standAlone-abbr": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-standAlone-wide": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "days-format-abbr": "1,2,3,4,5,6,7".split(","), "days-format-narrow": "1,2,3,4,5,6,7".split(","),
    "days-format-wide": "1,2,3,4,5,6,7".split(","), "days-standAlone-abbr": "1,2,3,4,5,6,7".split(","), "days-standAlone-narrow": "1,2,3,4,5,6,7".split(","), "days-standAlone-wide": "1,2,3,4,5,6,7".split(","), "quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-format-narrow": ["1", "2", "3", "4"], "quarters-format-wide": ["Q1", "Q2", "Q3", "Q4"], "quarters-standAlone-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-standAlone-narrow": ["1", "2", "3", "4"], "quarters-standAlone-wide": ["Q1", "Q2", "Q3", "Q4"], "dayPeriods-format-abbr-am": "AM",
    "dayPeriods-format-abbr-pm": "PM", "dayPeriods-format-narrow-am": "AM", "dayPeriods-format-narrow-pm": "PM", "dayPeriods-format-wide-am": "AM", "dayPeriods-format-wide-pm": "PM", eraNames: ["BCE", "CE"], eraAbbr: ["BCE", "CE"], eraNarrow: ["BCE", "CE"], "dateFormat-full": "EEEE, y MMMM dd", "dateFormat-long": "y MMMM d", "dateFormat-medium": "y MMM d", "dateFormat-short": "yyyy-MM-dd", "timeFormat-full": "HH:mm:ss zzzz", "timeFormat-long": "HH:mm:ss z", "timeFormat-medium": "HH:mm:ss", "timeFormat-short": "HH:mm", "dateTimeFormat-full": "{1} {0}",
    "dateTimeFormat-long": "{1} {0}", "dateTimeFormat-medium": "{1} {0}", "dateTimeFormat-short": "{1} {0}", "dateFormatItem-d": "d", "dateFormatItem-Ed": "d E", "dateFormatItem-h": "h a", "dateFormatItem-H": "HH", "dateFormatItem-hm": "h:mm a", "dateFormatItem-Hm": "HH:mm", "dateFormatItem-hms": "h:mm:ss a", "dateFormatItem-Hms": "HH:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "M-d", "dateFormatItem-MEd": "E, M-d", "dateFormatItem-MMM": "LLL", "dateFormatItem-MMMd": "MMM d", "dateFormatItem-MMMEd": "E MMM d", "dateFormatItem-ms": "mm:ss",
    "dateFormatItem-y": "y", "dateFormatItem-yM": "y-M", "dateFormatItem-yMd": "y-M-d", "dateFormatItem-yMEd": "E, y-M-d", "dateFormatItem-yMMM": "y MMM", "dateFormatItem-yMMMd": "y MMM d", "dateFormatItem-yMMMEd": "E, y MMM d", "dateFormatItem-yQ": "y Q", "dateFormatItem-yQQQ": "y QQQ", "dateTimeFormats-appendItem-Day": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}", "dateTimeFormats-appendItem-Era": "{0} {1}", "dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})",
    "dateTimeFormats-appendItem-Month": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Second": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Timezone": "{0} {1}", "dateTimeFormats-appendItem-Week": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Year": "{0} {1}", "field-era": "Era", "field-year": "Year", "field-month": "Month", "field-week": "Week", "field-day": "Day", "field-day-relative+-1": "Yesterday", "field-day-relative+0": "Today", "field-day-relative+1": "Tomorrow",
    "field-weekday": "Day of the Week", "field-dayperiod": "Dayperiod", "field-hour": "Hour", "field-minute": "Minute", "field-second": "Second", "field-zone": "Zone"}, ar: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, en: !0, "en-au": !0, "en-ca": !0, "en-gb": !0, es: !0, fi: !0, fr: !0, "fr-ch": !0, he: !0, hu: !0, it: !0, ja: !0, ko: !0, nb: !0, nl: !0, pl: !0, pt: !0, "pt-pt": !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-hant": !0, "zh-hk": !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/gregorian.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/hebrew.js] */
//>>built
define("dojo/cldr/nls/hebrew", {root: {"months-format-abbr": "Tishri,Heshvan,Kislev,Tevet,Shevat,Adar I,Adar,Nisan,Iyar,Sivan,Tamuz,Av,Elul".split(","), "months-format-abbr-leap": "Adar II", "months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12,13".split(","), "months-format-wide": "Tishri,Heshvan,Kislev,Tevet,Shevat,Adar I,Adar,Nisan,Iyar,Sivan,Tamuz,Av,Elul".split(","), "months-format-wide-leap": "Adar II", "months-standAlone-abbr": "Tishri,Heshvan,Kislev,Tevet,Shevat,Adar I,Adar,Nisan,Iyar,Sivan,Tamuz,Av,Elul".split(","),
    "months-standAlone-abbr-leap": "Adar II", "months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12,13".split(","), "months-standAlone-wide": "Tishri,Heshvan,Kislev,Tevet,Shevat,Adar I,Adar,Nisan,Iyar,Sivan,Tamuz,Av,Elul".split(","), "months-standAlone-wide-leap": "Adar II", "days-format-abbr": "1,2,3,4,5,6,7".split(","), "days-format-narrow": "1,2,3,4,5,6,7".split(","), "days-format-wide": "1,2,3,4,5,6,7".split(","), "days-standAlone-abbr": "1,2,3,4,5,6,7".split(","), "days-standAlone-narrow": "1,2,3,4,5,6,7".split(","),
    "days-standAlone-wide": "1,2,3,4,5,6,7".split(","), "quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-format-narrow": ["1", "2", "3", "4"], "quarters-format-wide": ["Q1", "Q2", "Q3", "Q4"], "quarters-standAlone-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-standAlone-narrow": ["1", "2", "3", "4"], "quarters-standAlone-wide": ["Q1", "Q2", "Q3", "Q4"], "dayPeriods-format-abbr-am": "AM", "dayPeriods-format-abbr-pm": "PM", "dayPeriods-format-narrow-am": "AM", "dayPeriods-format-narrow-pm": "PM", "dayPeriods-format-wide-am": "AM", "dayPeriods-format-wide-pm": "PM",
    eraNames: ["AM"], eraAbbr: ["AM"], eraNarrow: ["AM"], "dateFormat-full": "EEEE, y MMMM dd", "dateFormat-long": "y MMMM d", "dateFormat-medium": "y MMM d", "dateFormat-short": "yyyy-MM-dd", "timeFormat-full": "HH:mm:ss zzzz", "timeFormat-long": "HH:mm:ss z", "timeFormat-medium": "HH:mm:ss", "timeFormat-short": "HH:mm", "dateTimeFormat-full": "{1} {0}", "dateTimeFormat-long": "{1} {0}", "dateTimeFormat-medium": "{1} {0}", "dateTimeFormat-short": "{1} {0}", "dateFormatItem-d": "d", "dateFormatItem-Ed": "d E", "dateFormatItem-h": "h a",
    "dateFormatItem-H": "HH", "dateFormatItem-hm": "h:mm a", "dateFormatItem-Hm": "HH:mm", "dateFormatItem-hms": "h:mm:ss a", "dateFormatItem-Hms": "HH:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "M-d", "dateFormatItem-MEd": "E, M-d", "dateFormatItem-MMM": "LLL", "dateFormatItem-MMMd": "MMM d", "dateFormatItem-MMMEd": "E MMM d", "dateFormatItem-ms": "mm:ss", "dateFormatItem-y": "y", "dateFormatItem-yM": "y-M", "dateFormatItem-yMd": "y-M-d", "dateFormatItem-yMEd": "E, y-M-d", "dateFormatItem-yMMM": "y MMM", "dateFormatItem-yMMMd": "y MMM d",
    "dateFormatItem-yMMMEd": "E, y MMM d", "dateFormatItem-yQ": "y Q", "dateFormatItem-yQQQ": "y QQQ", "dateTimeFormats-appendItem-Day": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}", "dateTimeFormats-appendItem-Era": "{0} {1}", "dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Month": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Second": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Timezone": "{0} {1}",
    "dateTimeFormats-appendItem-Week": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Year": "{0} {1}"}, ar: !0, el: !0, fi: !0, fr: !0, he: !0, hu: !0, ja: !0, nl: !0, pl: !0, pt: !0, ro: !0, ru: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-hant": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/hebrew.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/islamic.js] */
//>>built
define("dojo/cldr/nls/islamic", {root: {"months-format-abbr": "Muh.,Saf.,Rab. I,Rab. II,Jum. I,Jum. II,Raj.,Sha.,Ram.,Shaw.,Dhu\u02bbl-Q.,Dhu\u02bbl-H.".split(","), "months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-format-wide": "Muharram,Safar,Rabi\u02bb I,Rabi\u02bb II,Jumada I,Jumada II,Rajab,Sha\u02bbban,Ramadan,Shawwal,Dhu\u02bbl-Qi\u02bbdah,Dhu\u02bbl-Hijjah".split(","), "months-standAlone-abbr": "Muh.,Saf.,Rab. I,Rab. II,Jum. I,Jum. II,Raj.,Sha.,Ram.,Shaw.,Dhu\u02bbl-Q.,Dhu\u02bbl-H.".split(","),
    "months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-standAlone-wide": "Muharram,Safar,Rabi\u02bb I,Rabi\u02bb II,Jumada I,Jumada II,Rajab,Sha\u02bbban,Ramadan,Shawwal,Dhu\u02bbl-Qi\u02bbdah,Dhu\u02bbl-Hijjah".split(","), "days-format-abbr": "1,2,3,4,5,6,7".split(","), "days-format-narrow": "1,2,3,4,5,6,7".split(","), "days-format-wide": "1,2,3,4,5,6,7".split(","), "days-standAlone-abbr": "1,2,3,4,5,6,7".split(","), "days-standAlone-narrow": "1,2,3,4,5,6,7".split(","), "days-standAlone-wide": "1,2,3,4,5,6,7".split(","),
    "quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-format-narrow": ["1", "2", "3", "4"], "quarters-format-wide": ["Q1", "Q2", "Q3", "Q4"], "quarters-standAlone-abbr": ["Q1", "Q2", "Q3", "Q4"], "quarters-standAlone-narrow": ["1", "2", "3", "4"], "quarters-standAlone-wide": ["Q1", "Q2", "Q3", "Q4"], "dayPeriods-format-abbr-am": "AM", "dayPeriods-format-abbr-pm": "PM", "dayPeriods-format-narrow-am": "AM", "dayPeriods-format-narrow-pm": "PM", "dayPeriods-format-wide-am": "AM", "dayPeriods-format-wide-pm": "PM", eraNames: ["AH"], eraAbbr: ["AH"],
    eraNarrow: ["AH"], "dateFormat-full": "EEEE, y MMMM dd", "dateFormat-long": "y MMMM d", "dateFormat-medium": "y MMM d", "dateFormat-short": "yyyy-MM-dd", "timeFormat-full": "HH:mm:ss zzzz", "timeFormat-long": "HH:mm:ss z", "timeFormat-medium": "HH:mm:ss", "timeFormat-short": "HH:mm", "dateTimeFormat-full": "{1} {0}", "dateTimeFormat-long": "{1} {0}", "dateTimeFormat-medium": "{1} {0}", "dateTimeFormat-short": "{1} {0}", "dateFormatItem-d": "d", "dateFormatItem-Ed": "d E", "dateFormatItem-h": "h a", "dateFormatItem-H": "HH", "dateFormatItem-hm": "h:mm a",
    "dateFormatItem-Hm": "HH:mm", "dateFormatItem-hms": "h:mm:ss a", "dateFormatItem-Hms": "HH:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "M-d", "dateFormatItem-MEd": "E, M-d", "dateFormatItem-MMM": "LLL", "dateFormatItem-MMMd": "MMM d", "dateFormatItem-MMMEd": "E MMM d", "dateFormatItem-ms": "mm:ss", "dateFormatItem-y": "y", "dateFormatItem-yM": "y-M", "dateFormatItem-yMd": "y-M-d", "dateFormatItem-yMEd": "E, y-M-d", "dateFormatItem-yMMM": "y MMM", "dateFormatItem-yMMMd": "y MMM d", "dateFormatItem-yMMMEd": "E, y MMM d",
    "dateFormatItem-yQ": "y Q", "dateFormatItem-yQQQ": "y QQQ", "dateTimeFormats-appendItem-Day": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}", "dateTimeFormats-appendItem-Era": "{0} {1}", "dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Month": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Second": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Timezone": "{0} {1}",
    "dateTimeFormats-appendItem-Week": "{0} ({2}: {1})", "dateTimeFormats-appendItem-Year": "{0} {1}"}, ar: !0, cs: !0, da: !0, de: !0, en: !0, "en-gb": !0, es: !0, fi: !0, fr: !0, he: !0, hu: !0, it: !0, ja: !0, nb: !0, nl: !0, pl: !0, pt: !0, "pt-pt": !0, ro: !0, ru: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-hant": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/islamic.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/number.js] */
//>>built
define("dojo/cldr/nls/number", {root: {decimal: ".", group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000T", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
    "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4\u00a0#,##0.00"}, ar: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, en: !0, "en-gb": !0, es: !0, fi: !0, fr: !0, "fr-ch": !0, he: !0, hu: !0, it: !0, ja: !0, ko: !0, nb: !0, nl: !0, pl: !0, pt: !0, "pt-pt": !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-hant": !0, "zh-hk": !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/number.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/buddhist.js] */
//>>built
define("dojo/cldr/nls/ru/buddhist", {"dateFormat-full": "EEEE, d MMMM y\u00a0'\u0433'. G", "dateFormat-long": "d MMMM y\u00a0'\u0433'. G", "dateFormat-medium": "dd.MM.yyyy G", "dateFormat-short": "dd.MM.yy G", "dateFormatItem-d": "d", "dateFormatItem-E": "ccc", "dateFormatItem-Ed": "E, d", "dateFormatItem-Gy": "y G", "dateFormatItem-H": "H", "dateFormatItem-Hm": "H:mm", "dateFormatItem-Hms": "H:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "dd.MM", "dateFormatItem-MEd": "E, dd.MM", "dateFormatItem-MMdd": "dd.MM", "dateFormatItem-MMM": "LLL",
    "dateFormatItem-MMMd": "d MMM", "dateFormatItem-MMMEd": "ccc, d MMM", "dateFormatItem-ms": "mm:ss", "dateFormatItem-y": "y G", "dateFormatItem-yM": "MM.y G", "dateFormatItem-yMd": "dd.MM.y G", "dateFormatItem-yMEd": "E, dd.MM.y G", "dateFormatItem-yMMM": "LLL y G", "dateFormatItem-yMMMd": "d MMM y G", "dateFormatItem-yMMMEd": "E, d MMM y G", "dateFormatItem-yQQQ": "QQQ y G", "dateFormatItem-yyMM": "MM.yy G", "dateFormatItem-yyMMM": "LLL yy G", "dateFormatItem-yyMMMEd": "E, d MMM yy G", "dateFormatItem-yyQ": "Q yy G", "dateFormatItem-yyyy": "y G",
    "dateFormatItem-yyyyLLLL": "LLLL y G", "dateFormatItem-yyyyMM": "MM.yyyy G", "dateFormatItem-yyyyMMMM": "LLLL y G", "dateFormatItem-yyyyQQQQ": "QQQQ y\u00a0'\u0433'. G", "days-format-abbr": "\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","), "days-format-narrow": "\u0412,\u041f\u043d,\u0412\u0442,\u0421,\u0427,\u041f,\u0421".split(","), "days-format-wide": "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
    "days-standAlone-abbr": "\u0412\u0441,\u041f\u043d,\u0412\u0442,\u0421\u0440,\u0427\u0442,\u041f\u0442,\u0421\u0431".split(","), "days-standAlone-narrow": "\u0412,\u041f,\u0412,\u0421,\u0427,\u041f,\u0421".split(","), "days-standAlone-wide": "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0412\u0442\u043e\u0440\u043d\u0438\u043a,\u0421\u0440\u0435\u0434\u0430,\u0427\u0435\u0442\u0432\u0435\u0440\u0433,\u041f\u044f\u0442\u043d\u0438\u0446\u0430,\u0421\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
    "quarters-format-abbr": ["1-\u0439 \u043a\u0432.", "2-\u0439 \u043a\u0432.", "3-\u0439 \u043a\u0432.", "4-\u0439 \u043a\u0432."], "quarters-format-wide": ["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"], "dayPeriods-format-abbr-am": "\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dayPeriods-format-abbr-pm": "\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
    "dayPeriods-format-narrow-am": "\u0434\u043f", "dayPeriods-format-narrow-pm": "\u043f\u043f", "dayPeriods-format-wide-am": "\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dayPeriods-format-wide-pm": "\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dateFormatItem-yQ": "QQQ y '\u0433'.", "timeFormat-full": "H:mm:ss zzzz", "timeFormat-long": "H:mm:ss z", "timeFormat-medium": "H:mm:ss", "timeFormat-short": "H:mm", "months-format-abbr": "\u044f\u043d\u0432.,\u0444\u0435\u0432\u0440.,\u043c\u0430\u0440\u0442\u0430,\u0430\u043f\u0440.,\u043c\u0430\u044f,\u0438\u044e\u043d\u044f,\u0438\u044e\u043b\u044f,\u0430\u0432\u0433.,\u0441\u0435\u043d\u0442.,\u043e\u043a\u0442.,\u043d\u043e\u044f\u0431.,\u0434\u0435\u043a.".split(","),
    "months-format-narrow": "\u042f,\u0424,\u041c,\u0410,\u041c,\u0418,\u0418,\u0410,\u0421,\u041e,\u041d,\u0414".split(","), "months-format-wide": "\u044f\u043d\u0432\u0430\u0440\u044f,\u0444\u0435\u0432\u0440\u0430\u043b\u044f,\u043c\u0430\u0440\u0442\u0430,\u0430\u043f\u0440\u0435\u043b\u044f,\u043c\u0430\u044f,\u0438\u044e\u043d\u044f,\u0438\u044e\u043b\u044f,\u0430\u0432\u0433\u0443\u0441\u0442\u0430,\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f,\u043e\u043a\u0442\u044f\u0431\u0440\u044f,\u043d\u043e\u044f\u0431\u0440\u044f,\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split(","),
    "months-standAlone-abbr": "\u042f\u043d\u0432.,\u0424\u0435\u0432\u0440.,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440.,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433.,\u0421\u0435\u043d\u0442.,\u041e\u043a\u0442.,\u041d\u043e\u044f\u0431.,\u0414\u0435\u043a.".split(","), "months-standAlone-narrow": "\u042f,\u0424,\u041c,\u0410,\u041c,\u0418,\u0418,\u0410,\u0421,\u041e,\u041d,\u0414".split(","), "months-standAlone-wide": "\u042f\u043d\u0432\u0430\u0440\u044c,\u0424\u0435\u0432\u0440\u0430\u043b\u044c,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440\u0435\u043b\u044c,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433\u0443\u0441\u0442,\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c,\u041e\u043a\u0442\u044f\u0431\u0440\u044c,\u041d\u043e\u044f\u0431\u0440\u044c,\u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(",")});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/buddhist.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/currency.js] */
//>>built
define("dojo/cldr/nls/ru/currency", {AUD_displayName: "\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440", CAD_displayName: "\u041a\u0430\u043d\u0430\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440", CHF_displayName: "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0444\u0440\u0430\u043d\u043a", CNY_displayName: "\u042e\u0430\u043d\u044c \u0420\u0435\u043d\u043c\u0438\u043d\u0431\u0438", EUR_displayName: "\u0415\u0432\u0440\u043e",
    GBP_displayName: "\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432", HKD_displayName: "\u0413\u043e\u043d\u043a\u043e\u043d\u0433\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440", JPY_displayName: "\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u0435\u043d\u0430", JPY_symbol: "\u00a5", USD_displayName: "\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410", USD_symbol: "$"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/currency.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/gregorian.js] */
//>>built
define("dojo/cldr/nls/ru/gregorian", {"months-format-abbr": "\u044f\u043d\u0432.,\u0444\u0435\u0432\u0440.,\u043c\u0430\u0440\u0442\u0430,\u0430\u043f\u0440.,\u043c\u0430\u044f,\u0438\u044e\u043d\u044f,\u0438\u044e\u043b\u044f,\u0430\u0432\u0433.,\u0441\u0435\u043d\u0442.,\u043e\u043a\u0442.,\u043d\u043e\u044f\u0431.,\u0434\u0435\u043a.".split(","), "months-format-narrow": "\u042f,\u0424,\u041c,\u0410,\u041c,\u0418,\u0418,\u0410,\u0421,\u041e,\u041d,\u0414".split(","), "months-format-wide": "\u044f\u043d\u0432\u0430\u0440\u044f,\u0444\u0435\u0432\u0440\u0430\u043b\u044f,\u043c\u0430\u0440\u0442\u0430,\u0430\u043f\u0440\u0435\u043b\u044f,\u043c\u0430\u044f,\u0438\u044e\u043d\u044f,\u0438\u044e\u043b\u044f,\u0430\u0432\u0433\u0443\u0441\u0442\u0430,\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f,\u043e\u043a\u0442\u044f\u0431\u0440\u044f,\u043d\u043e\u044f\u0431\u0440\u044f,\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split(","),
    "months-standAlone-abbr": "\u042f\u043d\u0432.,\u0424\u0435\u0432\u0440.,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440.,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433.,\u0421\u0435\u043d\u0442.,\u041e\u043a\u0442.,\u041d\u043e\u044f\u0431.,\u0414\u0435\u043a.".split(","), "months-standAlone-narrow": "\u042f,\u0424,\u041c,\u0410,\u041c,\u0418,\u0418,\u0410,\u0421,\u041e,\u041d,\u0414".split(","), "months-standAlone-wide": "\u042f\u043d\u0432\u0430\u0440\u044c,\u0424\u0435\u0432\u0440\u0430\u043b\u044c,\u041c\u0430\u0440\u0442,\u0410\u043f\u0440\u0435\u043b\u044c,\u041c\u0430\u0439,\u0418\u044e\u043d\u044c,\u0418\u044e\u043b\u044c,\u0410\u0432\u0433\u0443\u0441\u0442,\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c,\u041e\u043a\u0442\u044f\u0431\u0440\u044c,\u041d\u043e\u044f\u0431\u0440\u044c,\u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(","),
    "days-format-abbr": "\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","), "days-format-narrow": "\u0412,\u041f\u043d,\u0412\u0442,\u0421,\u0427,\u041f,\u0421".split(","), "days-format-wide": "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
    "days-standAlone-abbr": "\u0412\u0441,\u041f\u043d,\u0412\u0442,\u0421\u0440,\u0427\u0442,\u041f\u0442,\u0421\u0431".split(","), "days-standAlone-narrow": "\u0412,\u041f,\u0412,\u0421,\u0427,\u041f,\u0421".split(","), "days-standAlone-wide": "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0412\u0442\u043e\u0440\u043d\u0438\u043a,\u0421\u0440\u0435\u0434\u0430,\u0427\u0435\u0442\u0432\u0435\u0440\u0433,\u041f\u044f\u0442\u043d\u0438\u0446\u0430,\u0421\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
    "quarters-format-abbr": ["1-\u0439 \u043a\u0432.", "2-\u0439 \u043a\u0432.", "3-\u0439 \u043a\u0432.", "4-\u0439 \u043a\u0432."], "quarters-format-narrow": ["1", "2", "3", "4"], "quarters-format-wide": ["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"], "dayPeriods-format-abbr-am": "\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dayPeriods-format-abbr-pm": "\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
    "dayPeriods-format-narrow-am": "\u0434\u043f", "dayPeriods-format-narrow-pm": "\u043f\u043f", "dayPeriods-format-wide-am": "\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dayPeriods-format-wide-pm": "\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f", eraNames: ["\u0434\u043e \u043d.\u044d.", "\u043d.\u044d."], eraAbbr: ["\u0434\u043e \u043d.\u044d.", "\u043d.\u044d."], eraNarrow: ["\u0434\u043e \u043d.\u044d.", "\u043d.\u044d."], "dateFormat-full": "EEEE, d MMMM y\u00a0'\u0433'.",
    "dateFormat-long": "d MMMM y\u00a0'\u0433'.", "dateFormat-medium": "dd.MM.yyyy", "dateFormat-short": "dd.MM.yy", "timeFormat-full": "H:mm:ss zzzz", "timeFormat-long": "H:mm:ss z", "timeFormat-medium": "H:mm:ss", "timeFormat-short": "H:mm", "dateTimeFormat-full": "{1}, {0}", "dateTimeFormat-long": "{1}, {0}", "dateTimeFormat-medium": "{1}, {0}", "dateTimeFormat-short": "{1}, {0}", "dateFormatItem-d": "d", "dateFormatItem-E": "ccc", "dateFormatItem-Ed": "ccc, d", "dateFormatItem-H": "H", "dateFormatItem-Hm": "H:mm", "dateFormatItem-Hms": "H:mm:ss",
    "dateFormatItem-M": "L", "dateFormatItem-Md": "dd.MM", "dateFormatItem-MEd": "E, dd.MM", "dateFormatItem-MMdd": "dd.MM", "dateFormatItem-MMM": "LLL", "dateFormatItem-MMMd": "d MMM", "dateFormatItem-MMMEd": "ccc, d MMM", "dateFormatItem-ms": "mm:ss", "dateFormatItem-y": "y", "dateFormatItem-yM": "MM.y", "dateFormatItem-yMd": "dd.MM.y", "dateFormatItem-yMEd": "E, dd.MM.y", "dateFormatItem-yMMM": "LLL y", "dateFormatItem-yMMMd": "d MMM y\u00a0'\u0433'.", "dateFormatItem-yMMMEd": "E, d MMM y", "dateFormatItem-yQ": "QQQ y '\u0433'.",
    "dateFormatItem-yQQQ": "y QQQ", "dateFormatItem-yyMM": "MM.yy", "dateFormatItem-yyMMM": "LLL yy", "dateFormatItem-yyMMMEd": "E, d MMM yy", "dateFormatItem-yyQ": "Q yy", "dateFormatItem-yyyy": "y", "dateFormatItem-yyyyLLLL": "LLLL y", "dateFormatItem-yyyyMM": "MM.yyyy", "dateFormatItem-yyyyMMMM": "LLLL y", "dateFormatItem-yyyyQQQQ": "QQQQ y\u00a0'\u0433'.", "field-era": "\u042d\u0440\u0430", "field-year": "\u0413\u043e\u0434", "field-year-relative+-1": "\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u0433\u043e\u0434\u0443",
    "field-year-relative+0": "\u0412 \u044d\u0442\u043e\u043c \u0433\u043e\u0434\u0443", "field-year-relative+1": "\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0433\u043e\u0434\u0443", "field-month": "\u041c\u0435\u0441\u044f\u0446", "field-month-relative+-1": "\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435", "field-month-relative+0": "\u0412 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435", "field-month-relative+1": "\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043c\u0435\u0441\u044f\u0446\u0435",
    "field-week": "\u041d\u0435\u0434\u0435\u043b\u044f", "field-week-relative+-1": "\u041d\u0430 \u043f\u0440\u043e\u0448\u043b\u043e\u0439 \u043d\u0435\u0434\u0435\u043b\u0435", "field-week-relative+0": "\u041d\u0430 \u044d\u0442\u043e\u0439 \u043d\u0435\u0434\u0435\u043b\u0435", "field-week-relative+1": "\u041d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0435", "field-day": "\u0414\u0435\u043d\u044c", "field-day-relative+-2": "\u041f\u043e\u0437\u0430\u0432\u0447\u0435\u0440\u0430",
    "field-day-relative+-1": "\u0412\u0447\u0435\u0440\u0430", "field-day-relative+0": "\u0421\u0435\u0433\u043e\u0434\u043d\u044f", "field-day-relative+1": "\u0417\u0430\u0432\u0442\u0440\u0430", "field-day-relative+2": "\u041f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430", "field-weekday": "\u0414\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438", "field-dayperiod": "\u0414\u041f/\u041f\u041f", "field-hour": "\u0427\u0430\u0441", "field-minute": "\u041c\u0438\u043d\u0443\u0442\u0430", "field-second": "\u0421\u0435\u043a\u0443\u043d\u0434\u0430",
    "field-zone": "\u0427\u0430\u0441\u043e\u0432\u043e\u0439 \u043f\u043e\u044f\u0441", "quarters-standAlone-abbr": ["1-\u0439 \u043a\u0432.", "2-\u0439 \u043a\u0432.", "3-\u0439 \u043a\u0432.", "4-\u0439 \u043a\u0432."], "quarters-standAlone-wide": ["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/gregorian.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/hebrew.js] */
//>>built
define("dojo/cldr/nls/ru/hebrew", {"months-format-abbr": "\u0422\u0438\u0448\u0440\u0435\u0439,\u0425\u0435\u0448\u0432\u0430\u043d,\u041a\u0438\u0441\u043b\u0435\u0432,\u0422\u0435\u0432\u0435\u0442,\u0428\u0435\u0432\u0430\u0442,\u0410\u0434\u0430\u0440 I,\u0410\u0434\u0430\u0440,\u041d\u0438\u0441\u0430\u043d,\u0418\u044f\u0440,\u0421\u0438\u0432\u0430\u043d,\u0422\u0430\u043c\u043c\u0443\u0437,\u0410\u0432,\u042d\u043b\u0443\u043b".split(","), "months-format-abbr-leap": "\u0410\u0434\u0430\u0440 II",
    "months-format-wide": "\u0422\u0438\u0448\u0440\u0435\u0439,\u0425\u0435\u0448\u0432\u0430\u043d,\u041a\u0438\u0441\u043b\u0435\u0432,\u0422\u0435\u0432\u0435\u0442,\u0428\u0435\u0432\u0430\u0442,\u0410\u0434\u0430\u0440 I,\u0410\u0434\u0430\u0440,\u041d\u0438\u0441\u0430\u043d,\u0418\u044f\u0440,\u0421\u0438\u0432\u0430\u043d,\u0422\u0430\u043c\u043c\u0443\u0437,\u0410\u0432,\u042d\u043b\u0443\u043b".split(","), "months-format-wide-leap": "\u0410\u0434\u0430\u0440 II", "months-standAlone-abbr": "\u0422\u0438\u0448\u0440\u0435\u0439,\u0425\u0435\u0448\u0432\u0430\u043d,\u041a\u0438\u0441\u043b\u0435\u0432,\u0422\u0435\u0432\u0435\u0442,\u0428\u0435\u0432\u0430\u0442,\u0410\u0434\u0430\u0440 I,\u0410\u0434\u0430\u0440,\u041d\u0438\u0441\u0430\u043d,\u0418\u044f\u0440,\u0421\u0438\u0432\u0430\u043d,\u0422\u0430\u043c\u043c\u0443\u0437,\u0410\u0432,\u042d\u043b\u0443\u043b".split(","),
    "months-standAlone-abbr-leap": "\u0410\u0434\u0430\u0440 II", "months-standAlone-wide": "\u0422\u0438\u0448\u0440\u0435\u0439,\u0425\u0435\u0448\u0432\u0430\u043d,\u041a\u0438\u0441\u043b\u0435\u0432,\u0422\u0435\u0432\u0435\u0442,\u0428\u0435\u0432\u0430\u0442,\u0410\u0434\u0430\u0440 I,\u0410\u0434\u0430\u0440,\u041d\u0438\u0441\u0430\u043d,\u0418\u044f\u0440,\u0421\u0438\u0432\u0430\u043d,\u0422\u0430\u043c\u043c\u0443\u0437,\u0410\u0432,\u042d\u043b\u0443\u043b".split(","), "months-standAlone-wide-leap": "\u0410\u0434\u0430\u0440 II",
    "days-format-abbr": "\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","), "days-format-narrow": "\u0412,\u041f\u043d,\u0412\u0442,\u0421,\u0427,\u041f,\u0421".split(","), "days-format-wide": "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
    "days-standAlone-abbr": "\u0412\u0441,\u041f\u043d,\u0412\u0442,\u0421\u0440,\u0427\u0442,\u041f\u0442,\u0421\u0431".split(","), "days-standAlone-narrow": "\u0412,\u041f,\u0412,\u0421,\u0427,\u041f,\u0421".split(","), "days-standAlone-wide": "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0412\u0442\u043e\u0440\u043d\u0438\u043a,\u0421\u0440\u0435\u0434\u0430,\u0427\u0435\u0442\u0432\u0435\u0440\u0433,\u041f\u044f\u0442\u043d\u0438\u0446\u0430,\u0421\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
    "quarters-format-abbr": ["1-\u0439 \u043a\u0432.", "2-\u0439 \u043a\u0432.", "3-\u0439 \u043a\u0432.", "4-\u0439 \u043a\u0432."], "quarters-format-wide": ["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"], "dayPeriods-format-abbr-am": "\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dayPeriods-format-abbr-pm": "\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
    "dayPeriods-format-narrow-am": "\u0434\u043f", "dayPeriods-format-narrow-pm": "\u043f\u043f", "dayPeriods-format-wide-am": "\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dayPeriods-format-wide-pm": "\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dateFormat-full": "EEEE, d MMMM y\u00a0'\u0433'.", "dateFormat-long": "d MMMM y\u00a0'\u0433'.", "dateFormat-medium": "dd.MM.yyyy", "dateFormat-short": "dd.MM.yy", "dateFormatItem-Ed": "ccc, d", "dateFormatItem-H": "H", "dateFormatItem-Hm": "H:mm",
    "dateFormatItem-Hms": "H:mm:ss", "dateFormatItem-Md": "dd.MM", "dateFormatItem-MEd": "E, dd.MM", "dateFormatItem-MMMd": "d MMM", "dateFormatItem-MMMEd": "ccc, d MMM", "dateFormatItem-yM": "MM.y", "dateFormatItem-yMd": "dd.MM.y", "dateFormatItem-yMEd": "E, dd.MM.y", "dateFormatItem-yMMM": "LLL y", "dateFormatItem-yMMMd": "d MMM y\u00a0'\u0433'.", "dateFormatItem-yMMMEd": "E, d MMM y", "dateFormatItem-yQ": "QQQ y '\u0433'.", "timeFormat-full": "H:mm:ss zzzz", "timeFormat-long": "H:mm:ss z", "timeFormat-medium": "H:mm:ss", "timeFormat-short": "H:mm",
    "dateTimeFormat-full": "{1}, {0}", "dateTimeFormat-long": "{1}, {0}", "dateTimeFormat-medium": "{1}, {0}", "dateTimeFormat-short": "{1}, {0}"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/hebrew.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/islamic.js] */
//>>built
define("dojo/cldr/nls/ru/islamic", {"months-format-abbr": "\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c,\u0421\u0430\u0444\u0430\u0440,\u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c,\u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440,\u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c,\u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440,\u0420\u0430\u0434\u0436\u0430\u0431,\u0428\u0430\u0430\u0431\u0430\u043d,\u0420\u0430\u043c\u0430\u0434\u0430\u043d,\u0428\u0430\u0432\u0432\u0430\u043b\u044c,\u0417\u0443\u043b\u044c-\u041a\u0430\u0430\u0434\u0430,\u0417\u0443\u043b\u044c-\u0425\u0438\u0434\u0436\u0436\u0430".split(","),
    "months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","), "months-format-wide": "\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c,\u0421\u0430\u0444\u0430\u0440,\u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c,\u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440,\u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c,\u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440,\u0420\u0430\u0434\u0436\u0430\u0431,\u0428\u0430\u0430\u0431\u0430\u043d,\u0420\u0430\u043c\u0430\u0434\u0430\u043d,\u0428\u0430\u0432\u0432\u0430\u043b\u044c,\u0417\u0443\u043b\u044c-\u041a\u0430\u0430\u0434\u0430,\u0417\u0443\u043b\u044c-\u0425\u0438\u0434\u0436\u0436\u0430".split(","),
    "months-standAlone-abbr": "\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c,\u0421\u0430\u0444\u0430\u0440,\u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c,\u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440,\u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c,\u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440,\u0420\u0430\u0434\u0436\u0430\u0431,\u0428\u0430\u0430\u0431\u0430\u043d,\u0420\u0430\u043c\u0430\u0434\u0430\u043d,\u0428\u0430\u0432\u0432\u0430\u043b\u044c,\u0417\u0443\u043b\u044c-\u041a\u0430\u0430\u0434\u0430,\u0417\u0443\u043b\u044c-\u0425\u0438\u0434\u0436\u0436\u0430".split(","),
    "months-standAlone-wide": "\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c,\u0421\u0430\u0444\u0430\u0440,\u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c,\u0420\u0430\u0431\u0438-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440,\u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c,\u0414\u0436\u0443\u043c\u0430\u0434-\u0443\u043b\u044c-\u0430\u0445\u0438\u0440,\u0420\u0430\u0434\u0436\u0430\u0431,\u0428\u0430\u0430\u0431\u0430\u043d,\u0420\u0430\u043c\u0430\u0434\u0430\u043d,\u0428\u0430\u0432\u0432\u0430\u043b\u044c,\u0417\u0443\u043b\u044c-\u041a\u0430\u0430\u0434\u0430,\u0417\u0443\u043b\u044c-\u0425\u0438\u0434\u0436\u0436\u0430".split(","),
    "dateFormat-full": "EEEE, d MMMM y\u00a0'\u0433'. G", "dateFormat-long": "d MMMM y\u00a0'\u0433'. G", "dateFormat-medium": "dd.MM.yyyy G", "dateFormat-short": "dd.MM.yy G", "dateFormatItem-d": "d", "dateFormatItem-E": "ccc", "dateFormatItem-Ed": "E, d", "dateFormatItem-H": "H", "dateFormatItem-Hm": "H:mm", "dateFormatItem-Hms": "H:mm:ss", "dateFormatItem-M": "L", "dateFormatItem-Md": "dd.MM", "dateFormatItem-MEd": "E, dd.MM", "dateFormatItem-MMdd": "dd.MM", "dateFormatItem-MMM": "LLL", "dateFormatItem-MMMd": "d MMM", "dateFormatItem-MMMEd": "ccc, d MMM",
    "dateFormatItem-ms": "mm:ss", "dateFormatItem-yyMM": "MM.yy G", "dateFormatItem-yyMMM": "LLL yy G", "dateFormatItem-yyMMMEd": "E, d MMM yy G", "dateFormatItem-yyQ": "Q yy G", "dateFormatItem-yyyy": "y G", "dateFormatItem-yyyyLLLL": "LLLL y G", "dateFormatItem-yyyyM": "MM.y G", "dateFormatItem-yyyyMd": "dd.MM.y G", "dateFormatItem-yyyyMEd": "E, dd.MM.y G", "dateFormatItem-yyyyMM": "MM.yyyy G", "dateFormatItem-yyyyMMM": "LLL y G", "dateFormatItem-yyyyMMMd": "d MMM y G", "dateFormatItem-yyyyMMMEd": "E, d MMM y G", "dateFormatItem-yyyyMMMM": "LLLL y G",
    "dateFormatItem-yyyyQQQ": "QQQ y G", "dateFormatItem-yyyyQQQQ": "QQQQ y\u00a0'\u0433'. G", "days-format-abbr": "\u0432\u0441,\u043f\u043d,\u0432\u0442,\u0441\u0440,\u0447\u0442,\u043f\u0442,\u0441\u0431".split(","), "days-format-narrow": "\u0412,\u041f\u043d,\u0412\u0442,\u0421,\u0427,\u041f,\u0421".split(","), "days-format-wide": "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0432\u0442\u043e\u0440\u043d\u0438\u043a,\u0441\u0440\u0435\u0434\u0430,\u0447\u0435\u0442\u0432\u0435\u0440\u0433,\u043f\u044f\u0442\u043d\u0438\u0446\u0430,\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
    "days-standAlone-abbr": "\u0412\u0441,\u041f\u043d,\u0412\u0442,\u0421\u0440,\u0427\u0442,\u041f\u0442,\u0421\u0431".split(","), "days-standAlone-narrow": "\u0412,\u041f,\u0412,\u0421,\u0427,\u041f,\u0421".split(","), "days-standAlone-wide": "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435,\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a,\u0412\u0442\u043e\u0440\u043d\u0438\u043a,\u0421\u0440\u0435\u0434\u0430,\u0427\u0435\u0442\u0432\u0435\u0440\u0433,\u041f\u044f\u0442\u043d\u0438\u0446\u0430,\u0421\u0443\u0431\u0431\u043e\u0442\u0430".split(","),
    "quarters-format-abbr": ["1-\u0439 \u043a\u0432.", "2-\u0439 \u043a\u0432.", "3-\u0439 \u043a\u0432.", "4-\u0439 \u043a\u0432."], "quarters-format-wide": ["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b", "4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"], "dayPeriods-format-abbr-am": "\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dayPeriods-format-abbr-pm": "\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f",
    "dayPeriods-format-narrow-am": "\u0434\u043f", "dayPeriods-format-narrow-pm": "\u043f\u043f", "dayPeriods-format-wide-am": "\u0434\u043e \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dayPeriods-format-wide-pm": "\u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u0443\u0434\u043d\u044f", "dateFormatItem-yM": "MM.y", "dateFormatItem-yMd": "dd.MM.y", "dateFormatItem-yMEd": "E, dd.MM.y", "dateFormatItem-yMMM": "LLL y", "dateFormatItem-yMMMd": "d MMM y\u00a0'\u0433'.", "dateFormatItem-yMMMEd": "E, d MMM y", "dateFormatItem-yQ": "QQQ y '\u0433'.",
    "timeFormat-full": "H:mm:ss zzzz", "timeFormat-long": "H:mm:ss z", "timeFormat-medium": "H:mm:ss", "timeFormat-short": "H:mm", "dateTimeFormat-full": "{1}, {0}", "dateTimeFormat-long": "{1}, {0}", "dateTimeFormat-medium": "{1}, {0}", "dateTimeFormat-short": "{1}, {0}"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/islamic.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/number.js] */
//>>built
define("dojo/cldr/nls/ru/number", {decimal: ",", group: "\u00a0", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "\u043d\u0435 \u0447\u0438\u0441\u043b\u043e", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0\u0442\u0440\u043b\u043d", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", currencyFormat: "#,##0.00\u00a0\u00a4"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/cldr/nls/ru/number.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/colors.js] */
//>>built
define("dojo/nls/colors", {root: {aliceblue: "alice blue", antiquewhite: "antique white", aqua: "aqua", aquamarine: "aquamarine", azure: "azure", beige: "beige", bisque: "bisque", black: "black", blanchedalmond: "blanched almond", blue: "blue", blueviolet: "blue-violet", brown: "brown", burlywood: "burlywood", cadetblue: "cadet blue", chartreuse: "chartreuse", chocolate: "chocolate", coral: "coral", cornflowerblue: "cornflower blue", cornsilk: "cornsilk", crimson: "crimson", cyan: "cyan", darkblue: "dark blue", darkcyan: "dark cyan", darkgoldenrod: "dark goldenrod",
    darkgray: "dark gray", darkgreen: "dark green", darkgrey: "dark gray", darkkhaki: "dark khaki", darkmagenta: "dark magenta", darkolivegreen: "dark olive green", darkorange: "dark orange", darkorchid: "dark orchid", darkred: "dark red", darksalmon: "dark salmon", darkseagreen: "dark sea green", darkslateblue: "dark slate blue", darkslategray: "dark slate gray", darkslategrey: "dark slate gray", darkturquoise: "dark turquoise", darkviolet: "dark violet", deeppink: "deep pink", deepskyblue: "deep sky blue", dimgray: "dim gray", dimgrey: "dim gray",
    dodgerblue: "dodger blue", firebrick: "fire brick", floralwhite: "floral white", forestgreen: "forest green", fuchsia: "fuchsia", gainsboro: "gainsboro", ghostwhite: "ghost white", gold: "gold", goldenrod: "goldenrod", gray: "gray", green: "green", greenyellow: "green-yellow", grey: "gray", honeydew: "honeydew", hotpink: "hot pink", indianred: "indian red", indigo: "indigo", ivory: "ivory", khaki: "khaki", lavender: "lavender", lavenderblush: "lavender blush", lawngreen: "lawn green", lemonchiffon: "lemon chiffon", lightblue: "light blue", lightcoral: "light coral",
    lightcyan: "light cyan", lightgoldenrodyellow: "light goldenrod yellow", lightgray: "light gray", lightgreen: "light green", lightgrey: "light gray", lightpink: "light pink", lightsalmon: "light salmon", lightseagreen: "light sea green", lightskyblue: "light sky blue", lightslategray: "light slate gray", lightslategrey: "light slate gray", lightsteelblue: "light steel blue", lightyellow: "light yellow", lime: "lime", limegreen: "lime green", linen: "linen", magenta: "magenta", maroon: "maroon", mediumaquamarine: "medium aquamarine",
    mediumblue: "medium blue", mediumorchid: "medium orchid", mediumpurple: "medium purple", mediumseagreen: "medium sea green", mediumslateblue: "medium slate blue", mediumspringgreen: "medium spring green", mediumturquoise: "medium turquoise", mediumvioletred: "medium violet-red", midnightblue: "midnight blue", mintcream: "mint cream", mistyrose: "misty rose", moccasin: "moccasin", navajowhite: "navajo white", navy: "navy", oldlace: "old lace", olive: "olive", olivedrab: "olive drab", orange: "orange", orangered: "orange red", orchid: "orchid",
    palegoldenrod: "pale goldenrod", palegreen: "pale green", paleturquoise: "pale turquoise", palevioletred: "pale violet-red", papayawhip: "papaya whip", peachpuff: "peach puff", peru: "peru", pink: "pink", plum: "plum", powderblue: "powder blue", purple: "purple", red: "red", rosybrown: "rosy brown", royalblue: "royal blue", saddlebrown: "saddle brown", salmon: "salmon", sandybrown: "sandy brown", seagreen: "sea green", seashell: "seashell", sienna: "sienna", silver: "silver", skyblue: "sky blue", slateblue: "slate blue", slategray: "slate gray",
    slategrey: "slate gray", snow: "snow", springgreen: "spring green", steelblue: "steel blue", tan: "tan", teal: "teal", thistle: "thistle", tomato: "tomato", transparent: "transparent", turquoise: "turquoise", violet: "violet", wheat: "wheat", white: "white", whitesmoke: "white smoke", yellow: "yellow", yellowgreen: "yellow green"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/colors.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/de/colors.js] */
//>>built
define("dojo/nls/de/colors", {aliceblue: "Alice-blau", antiquewhite: "Antikwei\u00df", aqua: "Wasserblau", aquamarine: "Aquamarin", azure: "Azur", beige: "Beige", bisque: "Bisquit", black: "Schwarz", blanchedalmond: "Mandelwei\u00df", blue: "Blau", blueviolet: "Blauviolett", brown: "Braun", burlywood: "Burlywood", cadetblue: "Kadettenblau", chartreuse: "Helles Gelbgr\u00fcn", chocolate: "Schokoladenbraun", coral: "Koralle", cornflowerblue: "Kornblumenblau", cornsilk: "Kornseide", crimson: "Karmesinrot", cyan: "Zyan", darkblue: "Dunkelblau",
    darkcyan: "Dunkelzyan", darkgoldenrod: "Dunkelgoldgelb", darkgray: "Dunkelgrau", darkgreen: "Dunkelgr\u00fcn", darkgrey: "Dunkelgrau", darkkhaki: "Dunkelkhaki", darkmagenta: "Dunkelmagenta", darkolivegreen: "Dunkelolivgr\u00fcn", darkorange: "Dunkelorange", darkorchid: "Dunkelorchidee", darkred: "Dunkelrot", darksalmon: "Dunkellachs", darkseagreen: "Dunkles Meergr\u00fcn", darkslateblue: "Dunkelschieferblau", darkslategray: "Dunkelschiefergrau", darkslategrey: "Dunkelschiefergrau", darkturquoise: "Dunkelt\u00fcrkis", darkviolet: "Dunkelviolett",
    deeppink: "Tiefrosa", deepskyblue: "Dunkles Himmelblau", dimgray: "Blassgrau", dimgrey: "Blassgrau", dodgerblue: "Dodger-blau", firebrick: "Schamottestein", floralwhite: "Bl\u00fctenwei\u00df", forestgreen: "Forstgr\u00fcn", fuchsia: "Fuchsia", gainsboro: "Gainsboro", ghostwhite: "Geisterwei\u00df", gold: "Gold", goldenrod: "Goldgelb", gray: "Grau", green: "Gr\u00fcn", greenyellow: "Gr\u00fcngelb", grey: "Grau", honeydew: "Honigtau", hotpink: "Knallrosa", indianred: "Indischrot", indigo: "Indigoblau", ivory: "Elfenbein", khaki: "Khaki", lavender: "Lavendelblau",
    lavenderblush: "Lavendelhauch", lawngreen: "Grasgr\u00fcn", lemonchiffon: "Zitronenchiffon", lightblue: "Hellblau", lightcoral: "Hellkoralle", lightcyan: "Hellzyan", lightgoldenrodyellow: "Hellgoldgelb", lightgray: "Hellgrau", lightgreen: "Hellgr\u00fcn", lightgrey: "Hellgrau", lightpink: "Hellrosa", lightsalmon: "Helllachs", lightseagreen: "Helles Meergr\u00fcn", lightskyblue: "Helles Himmelblau", lightslategray: "Helles Schiefergrau", lightslategrey: "Helles Schiefergrau", lightsteelblue: "Helles Stahlblau", lightyellow: "Hellgelb",
    lime: "Limone", limegreen: "Limonengr\u00fcn", linen: "Leinen", magenta: "Magenta", maroon: "Kastanienbraun", mediumaquamarine: "Mittelaquamarin", mediumblue: "Mittelblau", mediumorchid: "Mittelorchidee", mediumpurple: "Mittelpurpur", mediumseagreen: "Mittelmeeresgr\u00fcn", mediumslateblue: "Mittelschieferblau ", mediumspringgreen: "Mittelfr\u00fchlingsgr\u00fcn", mediumturquoise: "Mittelt\u00fcrkis ", mediumvioletred: "Mittelviolettrot ", midnightblue: "Mitternachtblau", mintcream: "Mintcreme", mistyrose: "Blassrose", moccasin: "Mokassin",
    navajowhite: "Navajo-wei\u00df", navy: "Marineblau", oldlace: "Alte Spitze", olive: "Oliv", olivedrab: "Olivgrau", orange: "Orange", orangered: "Orangerot", orchid: "Orchidee", palegoldenrod: "Blassgoldgelb", palegreen: "Blassgr\u00fcn", paleturquoise: "Blasst\u00fcrkis", palevioletred: "Blassviolettrot ", papayawhip: "Papayacreme", peachpuff: "Pfirsich", peru: "Peru", pink: "Rosa", plum: "Pflaume", powderblue: "Pulverblau", purple: "Purpurrot", red: "Rot", rosybrown: "Rosigbraun", royalblue: "K\u00f6nigsblau", saddlebrown: "Sattelbraun", salmon: "Lachs",
    sandybrown: "Sandbraun", seagreen: "Meeresgr\u00fcn", seashell: "Muschelwei\u00df", sienna: "Sienna", silver: "Silbergrau", skyblue: "Himmelblau", slateblue: "Schieferblau", slategray: "Schiefergrau", slategrey: "Schiefergrau", snow: "Schneewei\u00df", springgreen: "Fr\u00fchlingsgr\u00fcn", steelblue: "Stahlblau", tan: "Hautfarben", teal: "Smaragdgr\u00fcn", thistle: "Distel", tomato: "Tomatenrot", transparent: "Transparent", turquoise: "T\u00fcrkis", violet: "Violett", wheat: "Weizen", white: "Wei\u00df", whitesmoke: "Rauchwei\u00df", yellow: "Gelb",
    yellowgreen: "Gelbgr\u00fcn"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/de/colors.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ROOT.js] */
//>>built
define("dojo/nls/dojo_ROOT", {"dijit/nls/loading": {loadingState: "Loading...", errorState: "Sorry, an error occurred"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Cancel", buttonSave: "Save", itemClose: "Close"}, "dijit/form/nls/validate": {invalidMessage: "The value entered is not valid.", missingMessage: "This value is required.", rangeMessage: "This value is out of range."}, "dojo/cldr/nls/number": {decimal: ".", group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030",
    infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000T", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4\u00a0#,##0.00"},
    "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Hue Selector", saturationPickerTitle: "Saturation Selector"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ROOT.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ar.js] */
//>>built
define("dojo/nls/dojo_ar", {"dijit/nls/loading": {loadingState: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644...", errorState: "\u0639\u0641\u0648\u0627\u060c \u062d\u062f\u062b \u062e\u0637\u0623"}, "dijit/nls/common": {buttonOk: "\u062d\u0633\u0646\u0627", buttonCancel: "\u0627\u0644\u063a\u0627\u0621", buttonSave: "\u062d\u0641\u0638", itemClose: "\u0627\u063a\u0644\u0627\u0642"}, "dijit/form/nls/validate": {invalidMessage: "\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u062a\u064a \u062a\u0645 \u0627\u062f\u062e\u0627\u0644\u0647\u0627 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629.",
    missingMessage: "\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0647\u0630\u0647 \u0627\u0644\u0642\u064a\u0645\u0629.", rangeMessage: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064a\u0645\u0629 \u0644\u064a\u0633 \u0628\u0627\u0644\u0645\u062f\u0649 \u0627\u0644\u0635\u062d\u064a\u062d."}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###;#,##0.###-", "decimalFormat-short": "000T",
    scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4\u00a0#,##0.00;\u00a4\u00a0#,##0.00-"}, "dojox/widget/nls/ColorPicker": {redLabel: "r",
    greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "\u0645\u062d\u062f\u062f \u062a\u062f\u0631\u062c \u0627\u0644\u0644\u0648\u0646", saturationPickerTitle: "\u0645\u062d\u062f\u062f \u062f\u0631\u062c\u0629 \u0627\u0644\u062a\u0634\u0628\u0639"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ar.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ca.js] */
//>>built
define("dojo/nls/dojo_ca", {"dijit/nls/loading": {loadingState: "S'est\u00e0 carregant...", errorState: "Ens sap greu. S'ha produ\u00eft un error."}, "dijit/nls/common": {buttonOk: "D'acord", buttonCancel: "Cancel\u00b7la", buttonSave: "Desa", itemClose: "Tanca"}, "dijit/form/nls/validate": {invalidMessage: "El valor introdu\u00eft no \u00e9s v\u00e0lid", missingMessage: "Aquest valor \u00e9s necessari", rangeMessage: "Aquest valor \u00e9s fora de l'interval"}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%",
    plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0B", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "v", greenLabel: "e", blueLabel: "b", hueLabel: "m", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Selector de mat\u00eds", saturationPickerTitle: "Selector de saturaci\u00f3"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ca.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_cs.js] */
//>>built
define("dojo/nls/dojo_cs", {"dijit/nls/loading": {loadingState: "Prob\u00edh\u00e1 na\u010d\u00edt\u00e1n\u00ed...", errorState: "Omlouv\u00e1me se, do\u0161lo k chyb\u011b"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Storno", buttonSave: "Ulo\u017eit", itemClose: "Zav\u0159\u00edt"}, "dijit/form/nls/validate": {invalidMessage: "Zadan\u00e1 hodnota nen\u00ed platn\u00e1.", missingMessage: "Tato hodnota je vy\u017eadov\u00e1na.", rangeMessage: "Tato hodnota je mimo rozsah."}, "dojo/cldr/nls/number": {decimal: ",",
    group: "\u00a0", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0bil'.'", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "\u010d", greenLabel: "z", blueLabel: "m", hueLabel: "o", saturationLabel: "n", valueLabel: "j", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Selektor odst\u00ednu", saturationPickerTitle: "Selektor sytosti"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_cs.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_da.js] */
//>>built
define("dojo/nls/dojo_da", {"dijit/nls/loading": {loadingState: "Indl\u00e6ser...", errorState: "Der er opst\u00e5et en fejl"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Annull\u00e9r", buttonSave: "Gem", itemClose: "Luk"}, "dijit/form/nls/validate": {invalidMessage: "Den angivne v\u00e6rdi er ugyldig.", missingMessage: "V\u00e6rdien er p\u00e5kr\u00e6vet.", rangeMessage: "V\u00e6rdien er uden for intervallet."}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ",", percentSign: "%", plusSign: "+", minusSign: "-",
    exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0bill", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "n", saturationLabel: "m", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "V\u00e6lg nuance", saturationPickerTitle: "V\u00e6lg m\u00e6tning"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_da.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_de.js] */
//>>built
define("dojo/nls/dojo_de", {"dijit/nls/loading": {loadingState: "Wird geladen...", errorState: "Es ist ein Fehler aufgetreten."}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Abbrechen", buttonSave: "Speichern", itemClose: "Schlie\u00dfen"}, "dijit/form/nls/validate": {invalidMessage: "Der eingegebene Wert ist ung\u00fcltig. ", missingMessage: "Dieser Wert ist erforderlich.", rangeMessage: "Dieser Wert liegt au\u00dferhalb des g\u00fcltigen Bereichs. "}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%",
    plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0B", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Farbtonauswahl", saturationPickerTitle: "S\u00e4ttigungsauswahl"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_de.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_el.js] */
//>>built
define("dojo/nls/dojo_el", {"dijit/nls/loading": {loadingState: "\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7...", errorState: "\u03a3\u03b1\u03c2 \u03b6\u03b7\u03c4\u03bf\u03cd\u03bc\u03b5 \u03c3\u03c5\u03b3\u03bd\u03ce\u03bc\u03b7, \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1"}, "dijit/nls/common": {buttonOk: "\u039f\u039a", buttonCancel: "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7", buttonSave: "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",
    itemClose: "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf"}, "dijit/form/nls/validate": {invalidMessage: "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c0\u03bf\u03c5 \u03ba\u03b1\u03c4\u03b1\u03c7\u03c9\u03c1\u03ae\u03c3\u03b1\u03c4\u03b5 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7.", missingMessage: "\u0397 \u03c4\u03b9\u03bc\u03ae \u03b1\u03c5\u03c4\u03ae \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03b1\u03c0\u03b1\u03c1\u03b1\u03af\u03c4\u03b7\u03c4\u03b1 \u03bd\u03b1 \u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af.",
    rangeMessage: "\u0397 \u03c4\u03b9\u03bc\u03ae \u03b1\u03c5\u03c4\u03ae \u03b4\u03b5\u03bd \u03b1\u03bd\u03ae\u03ba\u03b5\u03b9 \u03c3\u03c4\u03bf \u03b5\u03cd\u03c1\u03bf\u03c2 \u03ad\u03b3\u03ba\u03c5\u03c1\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd."}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ",", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "e", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0\u03c4\u03c1\u03b9\u03c2", scientificFormat: "#E0",
    percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "\u03ba", greenLabel: "\u03c0", blueLabel: "\u03bc",
    hueLabel: "\u03b1", saturationLabel: "\u03ba", valueLabel: "\u03c4", degLabel: "\u00b0", hexLabel: "16-\u03b1\u03b4\u03b9\u03ba\u03cc", huePickerTitle: "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b1\u03c0\u03cc\u03c7\u03c1\u03c9\u03c3\u03b7\u03c2", saturationPickerTitle: "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03ba\u03bf\u03c1\u03b5\u03c3\u03bc\u03bf\u03cd"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_el.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_en-gb.js] */
//>>built
define("dojo/nls/dojo_en-gb", {"dijit/nls/loading": {loadingState: "Loading...", errorState: "Sorry, an error occurred"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Cancel", buttonSave: "Save", itemClose: "Close"}, "dijit/form/nls/validate": {invalidMessage: "The value entered is not valid.", missingMessage: "This value is required.", rangeMessage: "This value is out of range."}, "dojo/cldr/nls/number": {decimal: ".", group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030",
    infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000T", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4#,##0.00"},
    "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Hue Selector", saturationPickerTitle: "Saturation Selector"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_en-gb.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_en-us.js] */
//>>built
define("dojo/nls/dojo_en-us", {"dijit/nls/loading": {loadingState: "Loading...", errorState: "Sorry, an error occurred"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Cancel", buttonSave: "Save", itemClose: "Close"}, "dijit/form/nls/validate": {invalidMessage: "The value entered is not valid.", missingMessage: "This value is required.", rangeMessage: "This value is out of range."}, "dojo/cldr/nls/number": {decimal: ".", group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030",
    infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000T", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4#,##0.00;(\u00a4#,##0.00)"},
    "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Hue Selector", saturationPickerTitle: "Saturation Selector"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_en-us.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_es-es.js] */
//>>built
define("dojo/nls/dojo_es-es", {"dijit/nls/loading": {loadingState: "Cargando...", errorState: "Lo siento, se ha producido un error"}, "dijit/nls/common": {buttonOk: "Aceptar", buttonCancel: "Cancelar", buttonSave: "Guardar", itemClose: "Cerrar"}, "dijit/form/nls/validate": {invalidMessage: "El valor especificado no es v\u00e1lido.", missingMessage: "Este valor es necesario.", rangeMessage: "Este valor est\u00e1 fuera del intervalo."}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%", plusSign: "+",
    minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0B", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "v", blueLabel: "a", hueLabel: "m", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Selector de tono", saturationPickerTitle: "Selector de saturaci\u00f3n"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_es-es.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_fi-fi.js] */
//>>built
define("dojo/nls/dojo_fi-fi", {"dijit/nls/loading": {loadingState: "Lataus on meneill\u00e4\u00e4n...", errorState: "On ilmennyt virhe."}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Peruuta", buttonSave: "Tallenna", itemClose: "Sulje"}, "dijit/form/nls/validate": {invalidMessage: "Annettu arvo ei kelpaa.", missingMessage: "T\u00e4m\u00e4 arvo on pakollinen.", rangeMessage: "T\u00e4m\u00e4 arvo on sallitun alueen ulkopuolella."}, "dojo/cldr/nls/number": {decimal: ",", group: "\u00a0", list: ";", percentSign: "%", plusSign: "+",
    minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "ep\u00e4luku", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0b", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "S\u00e4vyn valitsin", saturationPickerTitle: "Kyll\u00e4isyyden valitsin"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_fi-fi.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_fr-fr.js] */
//>>built
define("dojo/nls/dojo_fr-fr", {"dijit/nls/loading": {loadingState: "Chargement...", errorState: "Une erreur est survenue"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Annuler", buttonSave: "Enregistrer", itemClose: "Fermer"}, "dijit/form/nls/validate": {invalidMessage: "La valeur indiqu\u00e9e n'est pas correcte.", missingMessage: "Cette valeur est requise.", rangeMessage: "Cette valeur n'est pas comprise dans la plage autoris\u00e9e."}, "dojo/cldr/nls/number": {decimal: ",", group: "\u00a0", list: ";", percentSign: "%",
    plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0Bn", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "v", blueLabel: "b", hueLabel: "t", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "S\u00e9lecteur de teinte", saturationPickerTitle: "S\u00e9lecteur de saturation"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_fr-fr.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_he-il.js] */
//>>built
define("dojo/nls/dojo_he-il", {"dijit/nls/loading": {loadingState: "\u05d8\u05e2\u05d9\u05e0\u05d4...\u200f", errorState: "\u05d0\u05d9\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4"}, "dijit/nls/common": {buttonOk: "\u05d0\u05d9\u05e9\u05d5\u05e8", buttonCancel: "\u05d1\u05d9\u05d8\u05d5\u05dc", buttonSave: "\u05e9\u05de\u05d9\u05e8\u05d4", itemClose: "\u05e1\u05d2\u05d9\u05e8\u05d4"}, "dijit/form/nls/validate": {invalidMessage: "\u05d4\u05e2\u05e8\u05da \u05e9\u05e6\u05d5\u05d9\u05df \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9.",
    missingMessage: "\u05d6\u05d4\u05d5 \u05e2\u05e8\u05da \u05d3\u05e8\u05d5\u05e9.", rangeMessage: "\u05d4\u05e2\u05e8\u05da \u05de\u05d7\u05d5\u05e5 \u05dc\u05d8\u05d5\u05d5\u05d7."}, "dojo/cldr/nls/number": {decimal: ".", group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000T", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "\u05d0", greenLabel: "\u05d9", blueLabel: "\u05db", hueLabel: "\u05d2", saturationLabel: "\u05e8", valueLabel: "\u05e2", degLabel: "\u00b0", hexLabel: "\u05d4\u05e7\u05e1", huePickerTitle: "\u05d1\u05d5\u05e8\u05e8 \u05d2\u05d5\u05d5\u05df",
    saturationPickerTitle: "\u05d1\u05d5\u05e8\u05e8 \u05e8\u05d5\u05d5\u05d9\u05d4"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_he-il.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_hu.js] */
//>>built
define("dojo/nls/dojo_hu", {"dijit/nls/loading": {loadingState: "Bet\u00f6lt\u00e9s...", errorState: "Sajn\u00e1lom, hiba t\u00f6rt\u00e9nt"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "M\u00e9gse", buttonSave: "Ment\u00e9s", itemClose: "Bez\u00e1r\u00e1s"}, "dijit/form/nls/validate": {invalidMessage: "A megadott \u00e9rt\u00e9k \u00e9rv\u00e9nytelen.", missingMessage: "Meg kell adni egy \u00e9rt\u00e9ket.", rangeMessage: "Az \u00e9rt\u00e9k k\u00edv\u00fcl van a megengedett tartom\u00e1nyon."}, "dojo/cldr/nls/number": {decimal: ",",
    group: "\u00a0", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0b", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "\u00c1rnyalat kiv\u00e1laszt\u00f3", saturationPickerTitle: "Tel\u00edtetts\u00e9g kiv\u00e1laszt\u00f3"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_hu.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_it-it.js] */
//>>built
define("dojo/nls/dojo_it-it", {"dijit/nls/loading": {loadingState: "Caricamento in corso...", errorState: "Si \u00e8 verificato un errore"}, "dijit/nls/common": {buttonOk: "Ok", buttonCancel: "Annulla", buttonSave: "Salva", itemClose: "Chiudi"}, "dijit/form/nls/validate": {invalidMessage: "Il valore immesso non \u00e8 valido.", missingMessage: "Questo valore \u00e8 obbligatorio.", rangeMessage: "Questo valore \u00e8 fuori dall'intervallo consentito."}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%",
    plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0B", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "\u00a4\u00a0#,##0.00"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "v", blueLabel: "b", hueLabel: "t", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Selettore tonalit\u00e0", saturationPickerTitle: "Selettore saturazione"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_it-it.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ja-jp.js] */
//>>built
define("dojo/nls/dojo_ja-jp", {"dijit/nls/loading": {loadingState: "\u30ed\u30fc\u30c9\u4e2d...", errorState: "\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "\u30ad\u30e3\u30f3\u30bb\u30eb", buttonSave: "\u4fdd\u5b58", itemClose: "\u9589\u3058\u308b"}, "dijit/form/nls/validate": {invalidMessage: "\u5165\u529b\u3057\u305f\u5024\u306f\u7121\u52b9\u3067\u3059\u3002", missingMessage: "\u3053\u306e\u5024\u306f\u5fc5\u9808\u3067\u3059\u3002", rangeMessage: "\u3053\u306e\u5024\u306f\u7bc4\u56f2\u5916\u3067\u3059\u3002"},
    "dojo/cldr/nls/number": {decimal: ".", group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN\uff08\u975e\u6570\uff09", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u5146", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
        "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4#,##0.00"}, "dojox/widget/nls/ColorPicker": {redLabel: "R", greenLabel: "G", blueLabel: "B", hueLabel: "H", saturationLabel: "S", valueLabel: "V", degLabel: "\u00b0", hexLabel: "Hex", huePickerTitle: "\u8272\u8abf\u30bb\u30ec\u30af\u30bf\u30fc", saturationPickerTitle: "\u5f69\u5ea6\u30bb\u30ec\u30af\u30bf\u30fc"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ja-jp.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ko-kr.js] */
//>>built
define("dojo/nls/dojo_ko-kr", {"dijit/nls/loading": {loadingState: "\ub85c\ub4dc \uc911...", errorState: "\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."}, "dijit/nls/common": {buttonOk: "\ud655\uc778", buttonCancel: "\ucde8\uc18c", buttonSave: "\uc800\uc7a5", itemClose: "\ub2eb\uae30"}, "dijit/form/nls/validate": {invalidMessage: "\uc785\ub825\ub41c \uac12\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.", missingMessage: "\uc774 \uac12\uc740 \ud544\uc218\uc785\ub2c8\ub2e4.",
    rangeMessage: "\uc774 \uac12\uc740 \ubc94\uc704\ub97c \ubc97\uc5b4\ub0a9\ub2c8\ub2e4."}, "dojo/cldr/nls/number": {decimal: ".", group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\uc870", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0",
    "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4#,##0.00"}, "dojox/widget/nls/ColorPicker": {redLabel: "R", greenLabel: "G", blueLabel: "B", hueLabel: "H", saturationLabel: "S", valueLabel: "V", degLabel: "\u00b0", hexLabel: "16\uc9c4", huePickerTitle: "\uc0c9\uc0c1 \uc120\ud0dd\uc790", saturationPickerTitle: "\ucc44\ub3c4 \uc120\ud0dd\uc790"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ko-kr.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_nb.js] */
//>>built
define("dojo/nls/dojo_nb", {"dijit/nls/loading": {loadingState: "Laster inn...", errorState: "Det oppsto en feil"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Avbryt", buttonSave: "Lagre", itemClose: "Lukk"}, "dijit/form/nls/validate": {invalidMessage: "Den angitte verdien er ikke gyldig.", missingMessage: "Denne verdien er obligatorisk.", rangeMessage: "Denne verdien er utenfor gyldig omr\u00e5de."}, "dojo/cldr/nls/number": {decimal: ",", group: "\u00a0", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E",
    perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0bill", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "\u00a4\u00a0#,##0.00"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Nyansevelger", saturationPickerTitle: "Metningsvelger"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_nb.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_nl-nl.js] */
//>>built
define("dojo/nls/dojo_nl-nl", {"dijit/nls/loading": {loadingState: "Bezig met laden...", errorState: "Er is een fout opgetreden"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Annuleren", buttonSave: "Opslaan", itemClose: "Sluiten"}, "dijit/form/nls/validate": {invalidMessage: "De opgegeven waarde is ongeldig.", missingMessage: "Deze waarde is verplicht.", rangeMessage: "Deze waarde is niet toegestaan."}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E",
    perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0bilj", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "\u00a4\u00a0#,##0.00;\u00a4\u00a0#,##0.00-"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "t", saturationLabel: "i", valueLabel: "h", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Tint selecteren", saturationPickerTitle: "Intensiteit selecteren"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_nl-nl.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_pl.js] */
//>>built
define("dojo/nls/dojo_pl", {"dijit/nls/loading": {loadingState: "\u0141adowanie...", errorState: "Niestety, wyst\u0105pi\u0142 b\u0142\u0105d"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Anuluj", buttonSave: "Zapisz", itemClose: "Zamknij"}, "dijit/form/nls/validate": {invalidMessage: "Wprowadzona warto\u015b\u0107 jest nieprawid\u0142owa.", missingMessage: "Ta warto\u015b\u0107 jest wymagana.", rangeMessage: "Ta warto\u015b\u0107 jest spoza zakresu."}, "dojo/cldr/nls/number": {decimal: ",", group: "\u00a0", list: ";",
    percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0bln", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "g.", saturationLabel: "s", valueLabel: "jas.", degLabel: "\u00b0", hexLabel: "szesnastkowe", huePickerTitle: "Selektor barwy", saturationPickerTitle: "Selektor nasycenia"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_pl.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_pt-br.js] */
//>>built
define("dojo/nls/dojo_pt-br", {"dijit/nls/loading": {loadingState: "Carregando...", errorState: "Desculpe, ocorreu um erro"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Cancelar", buttonSave: "Salvar", itemClose: "Fechar"}, "dijit/form/nls/validate": {invalidMessage: "O valor inserido n\u00e3o \u00e9 v\u00e1lido.", missingMessage: "Este valor \u00e9 necess\u00e1rio.", rangeMessage: "Este valor est\u00e1 fora do intervalo. "}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%", plusSign: "+",
    minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0tri", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "\u00a4#,##0.00;(\u00a4#,##0.00)"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Seletor de Matiz", saturationPickerTitle: "Seletor de Satura\u00e7\u00e3o"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_pt-br.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_pt-pt.js] */
//>>built
define("dojo/nls/dojo_pt-pt", {"dijit/nls/loading": {loadingState: "A carregar...", errorState: "Lamentamos, mas ocorreu um erro"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Cancelar", buttonSave: "Guardar", itemClose: "Fechar"}, "dijit/form/nls/validate": {invalidMessage: "O valor introduzido n\u00e3o \u00e9 v\u00e1lido.", missingMessage: "Este valor \u00e9 requerido.", rangeMessage: "Este valor encontra-se fora do intervalo."}, "dojo/cldr/nls/number": {decimal: ",", group: "\u00a0", list: ";", percentSign: "%", plusSign: "+",
    minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0Bi", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "e", greenLabel: "v", blueLabel: "a", hueLabel: "t", saturationLabel: "s", valueLabel: "val", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Selector de tonalidade", saturationPickerTitle: "Selector de satura\u00e7\u00e3o"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_pt-pt.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ru.js] */
//>>built
define("dojo/nls/dojo_ru", {"dijit/nls/loading": {loadingState: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...", errorState: "\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "\u041e\u0442\u043c\u0435\u043d\u0430", buttonSave: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c", itemClose: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}, "dijit/form/nls/validate": {invalidMessage: "\u0423\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.",
    missingMessage: "\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.", rangeMessage: "\u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u043d\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430."}, "dojo/cldr/nls/number": {decimal: ",", group: "\u00a0", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "\u043d\u0435 \u0447\u0438\u0441\u043b\u043e",
    decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0\u0442\u0440\u043b\u043d", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"},
    "dojox/widget/nls/ColorPicker": {redLabel: "\u043a", greenLabel: "\u0437", blueLabel: "\u0441", hueLabel: "\u043e", saturationLabel: "\u043d", valueLabel: "\u0437", degLabel: "\u00b0", hexLabel: "\u0448\u0435\u0441\u0442", huePickerTitle: "\u0412\u044b\u0431\u043e\u0440 \u043e\u0442\u0442\u0435\u043d\u043a\u0430", saturationPickerTitle: "\u0412\u044b\u0431\u043e\u0440 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_ru.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_sk.js] */
//>>built
define("dojo/nls/dojo_sk", {"dijit/nls/loading": {loadingState: "Zav\u00e1dza sa...", errorState: "\u013dutujeme, ale vyskytla sa chyba"}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Zru\u0161i\u0165", buttonSave: "Ulo\u017ei\u0165", itemClose: "Zatvori\u0165"}, "dijit/form/nls/validate": {invalidMessage: "Zadan\u00e1 hodnota nie je platn\u00e1.", missingMessage: "T\u00e1to hodnota je povinn\u00e1.", rangeMessage: "T\u00e1to hodnota je mimo rozsah."}, "dojo/cldr/nls/number": {decimal: ",", group: "\u00a0", list: ",",
    percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0bil'.'", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "V\u00fdber odtie\u0148a", saturationPickerTitle: "V\u00fdber s\u00fdtosti"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_sk.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_sl.js] */
//>>built
define("dojo/nls/dojo_sl", {"dijit/nls/loading": {loadingState: "Nalaganje ...", errorState: "Oprostite, pri\u0161lo je do napake."}, "dijit/nls/common": {buttonOk: "V redu", buttonCancel: "Prekli\u010di", buttonSave: "Shrani", itemClose: "Zapri"}, "dijit/form/nls/validate": {invalidMessage: "Vnesena vrednost ni veljavna.", missingMessage: "Ta vrednost je zahtevana.", rangeMessage: "Ta vrednost je izven obmo\u010dja."}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "e",
    perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0bil'.'", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Izbirnik odtenka", saturationPickerTitle: "Izbirnik nasi\u010denosti"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_sl.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_sv.js] */
//>>built
define("dojo/nls/dojo_sv", {"dijit/nls/loading": {loadingState: "L\u00e4ser in...", errorState: "Det har intr\u00e4ffat ett fel."}, "dijit/nls/common": {buttonOk: "OK", buttonCancel: "Avbryt", buttonSave: "Spara", itemClose: "St\u00e4ng"}, "dijit/form/nls/validate": {invalidMessage: "Angivet v\u00e4rde \u00e4r inte giltigt.", missingMessage: "V\u00e4rdet kr\u00e4vs.", rangeMessage: "V\u00e4rdet ligger utanf\u00f6r intervallet."}, "dojo/cldr/nls/number": {decimal: ",", group: "\u00a0", list: ";", percentSign: "%", plusSign: "+",
    minusSign: "\u2212", exponential: "\u00d710^", perMille: "\u2030", infinity: "\u221e", nan: "\u00a4\u00a4\u00a4", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0trl", scientificFormat: "#E0", percentFormat: "#,##0\u00a0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "n", saturationLabel: "m", valueLabel: "k", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Nyans", saturationPickerTitle: "M\u00e4ttnad"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_sv.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_th.js] */
//>>built
define("dojo/nls/dojo_th", {"dijit/nls/loading": {loadingState: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...", errorState: "\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14"}, "dijit/nls/common": {buttonOk: "\u0e15\u0e01\u0e25\u0e07", buttonCancel: "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01", buttonSave: "\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01", itemClose: "\u0e1b\u0e34\u0e14"}, "dijit/form/nls/validate": {invalidMessage: "\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e1b\u0e49\u0e2d\u0e19\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",
    missingMessage: "\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e04\u0e48\u0e32\u0e19\u0e35\u0e49", rangeMessage: "\u0e04\u0e48\u0e32\u0e19\u0e35\u0e49\u0e40\u0e01\u0e34\u0e19\u0e0a\u0e48\u0e27\u0e07"}, "dojo/cldr/nls/number": {decimal: ".", group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0\u0e25'.'\u0e25'.'", scientificFormat: "#E0", percentFormat: "#,##0%",
    "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4#,##0.00;\u00a4-#,##0.00"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "\u0e01.", blueLabel: "b", hueLabel: "\u0e0a\u0e21.",
    saturationLabel: "\u0e27\u0e34.", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e35", saturationPickerTitle: "\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e2d\u0e34\u0e48\u0e21\u0e02\u0e2d\u0e07\u0e2a\u0e35"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_th.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_tr.js] */
//>>built
define("dojo/nls/dojo_tr", {"dijit/nls/loading": {loadingState: "Y\u00fckleniyor...", errorState: "\u00dczg\u00fcn\u00fcz, bir hata olu\u015ftu"}, "dijit/nls/common": {buttonOk: "Tamam", buttonCancel: "\u0130ptal", buttonSave: "Kaydet", itemClose: "Kapat"}, "dijit/form/nls/validate": {invalidMessage: "Girilen de\u011fer ge\u00e7ersiz.", missingMessage: "Bu de\u011fer gerekli.", rangeMessage: "Bu de\u011fer aral\u0131k d\u0131\u015f\u0131nda."}, "dojo/cldr/nls/number": {decimal: ",", group: ".", list: ";", percentSign: "%", plusSign: "+",
    minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u00a0T", scientificFormat: "#E0", percentFormat: "%#,##0", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": "\u00a0",
    currencyFormat: "#,##0.00\u00a0\u00a4"}, "dojox/widget/nls/ColorPicker": {redLabel: "k", greenLabel: "y", blueLabel: "m", hueLabel: "t", saturationLabel: "d", valueLabel: "d", degLabel: "\u00b0", hexLabel: "onalt\u0131l\u0131", huePickerTitle: "Ton Se\u00e7ici", saturationPickerTitle: "Doygunluk Se\u00e7ici"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_tr.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_zh-cn.js] */
//>>built
define("dojo/nls/dojo_zh-cn", {"dijit/nls/loading": {loadingState: "\u6b63\u5728\u52a0\u8f7d...", errorState: "\u5bf9\u4e0d\u8d77\uff0c\u53d1\u751f\u4e86\u9519\u8bef"}, "dijit/nls/common": {buttonOk: "\u786e\u5b9a", buttonCancel: "\u53d6\u6d88", buttonSave: "\u4fdd\u5b58", itemClose: "\u5173\u95ed"}, "dijit/form/nls/validate": {invalidMessage: "\u8f93\u5165\u7684\u503c\u65e0\u6548\u3002", missingMessage: "\u8be5\u503c\u662f\u5fc5\u9700\u7684\u3002", rangeMessage: "\u6b64\u503c\u8d85\u51fa\u8303\u56f4\u3002"}, "dojo/cldr/nls/number": {decimal: ".",
    group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "NaN", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u5146", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4#,##0.00"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "\u5341\u516d\u8fdb\u5236", huePickerTitle: "\u8272\u5f69\u9009\u62e9\u5668", saturationPickerTitle: "\u9971\u548c\u5ea6\u9009\u62e9\u5668"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_zh-cn.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_zh-tw.js] */
//>>built
define("dojo/nls/dojo_zh-tw", {"dijit/nls/loading": {loadingState: "\u8f09\u5165\u4e2d...", errorState: "\u62b1\u6b49\uff0c\u767c\u751f\u932f\u8aa4"}, "dijit/nls/common": {buttonOk: "\u78ba\u5b9a", buttonCancel: "\u53d6\u6d88", buttonSave: "\u5132\u5b58", itemClose: "\u95dc\u9589"}, "dijit/form/nls/validate": {invalidMessage: "\u8f38\u5165\u7684\u503c\u7121\u6548\u3002", missingMessage: "\u5fc5\u9808\u63d0\u4f9b\u6b64\u503c\u3002", rangeMessage: "\u6b64\u503c\u8d85\u51fa\u7bc4\u570d\u3002"}, "dojo/cldr/nls/number": {decimal: ".",
    group: ",", list: ";", percentSign: "%", plusSign: "+", minusSign: "-", exponential: "E", perMille: "\u2030", infinity: "\u221e", nan: "\u975e\u6578\u503c", decimalFormat: "#,##0.###", "decimalFormat-short": "000\u5146", scientificFormat: "#E0", percentFormat: "#,##0%", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-beforeCurrency-insertBetween": "\u00a0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
    "currencySpacing-afterCurrency-insertBetween": "\u00a0", currencyFormat: "\u00a4#,##0.00"}, "dojox/widget/nls/ColorPicker": {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "\u5341\u516d\u9032\u4f4d", huePickerTitle: "\u8272\u8abf\u9078\u53d6\u5143", saturationPickerTitle: "\u98fd\u548c\u5ea6\u9078\u53d6\u5143"}});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/dojo_zh-tw.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/ru/colors.js] */
//>>built
define("dojo/nls/ru/colors", {aliceblue: "\u0441\u0435\u0440\u043e-\u0433\u043e\u043b\u0443\u0431\u043e\u0439", antiquewhite: "\u0431\u0435\u043b\u044b\u0439 \u0430\u043d\u0442\u0438\u043a", aqua: "\u0437\u0435\u043b\u0435\u043d\u043e\u0432\u0430\u0442\u043e-\u0433\u043e\u043b\u0443\u0431\u043e\u0439", aquamarine: "\u0430\u043a\u0432\u0430\u043c\u0430\u0440\u0438\u043d", azure: "\u043b\u0430\u0437\u0443\u0440\u043d\u044b\u0439", beige: "\u0431\u0435\u0436\u0435\u0432\u044b\u0439", bisque: "\u0431\u0438\u0441\u043a\u0432\u0438\u0442\u043d\u044b\u0439",
    black: "\u0447\u0435\u0440\u043d\u044b\u0439", blanchedalmond: "\u0441\u0432\u0435\u0442\u043b\u043e-\u043c\u0438\u043d\u0434\u0430\u043b\u044c\u043d\u044b\u0439", blue: "\u0441\u0438\u043d\u0438\u0439", blueviolet: "\u0441\u0438\u043d\u0435-\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439", brown: "\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439", burlywood: "\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439", cadetblue: "\u0441\u0435\u0440\u043e-\u0441\u0438\u043d\u0438\u0439",
    chartreuse: "\u0436\u0435\u043b\u0442\u043e-\u0441\u0430\u043b\u0430\u0442\u043d\u044b\u0439", chocolate: "\u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u044b\u0439", coral: "\u043a\u043e\u0440\u0430\u043b\u043b\u043e\u0432\u044b\u0439", cornflowerblue: "\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u0441\u0438\u043d\u0438\u0439", cornsilk: "\u0448\u0435\u043b\u043a\u043e\u0432\u044b\u0439 \u043e\u0442\u0442\u0435\u043d\u043e\u043a", crimson: "\u043c\u0430\u043b\u0438\u043d\u043e\u0432\u044b\u0439",
    cyan: "\u0446\u0438\u0430\u043d", darkblue: "\u0442\u0435\u043c\u043d\u043e-\u0441\u0438\u043d\u0438\u0439", darkcyan: "\u0442\u0435\u043c\u043d\u044b\u0439 \u0446\u0438\u0430\u043d", darkgoldenrod: "\u0442\u0435\u043c\u043d\u043e-\u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u044b\u0439", darkgray: "\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439", darkgreen: "\u0442\u0435\u043c\u043d\u043e-\u0437\u0435\u043b\u0435\u043d\u044b\u0439", darkgrey: "\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439",
    darkkhaki: "\u0442\u0435\u043c\u043d\u044b\u0439 \u0445\u0430\u043a\u0438", darkmagenta: "\u0442\u0435\u043c\u043d\u043e-\u043f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439", darkolivegreen: "\u0442\u0435\u043c\u043d\u043e-\u043e\u043b\u0438\u0432\u043a\u043e\u0432\u044b\u0439", darkorange: "\u0442\u0435\u043c\u043d\u043e-\u043e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439", darkorchid: "\u0442\u0435\u043c\u043d\u044b\u0439 \u043e\u0440\u0441\u0435\u043b\u044c", darkred: "\u0442\u0435\u043c\u043d\u043e-\u043a\u0440\u0430\u0441\u043d\u044b\u0439",
    darksalmon: "\u0442\u0435\u043c\u043d\u043e-\u043b\u043e\u0441\u043e\u0441\u0435\u0432\u044b\u0439", darkseagreen: "\u0442\u0435\u043c\u043d\u044b\u0439 \u043c\u043e\u0440\u0441\u043a\u043e\u0439 \u0432\u043e\u043b\u043d\u044b", darkslateblue: "\u0442\u0435\u043c\u043d\u044b\u0439 \u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0438\u043d\u0438\u0439", darkslategray: "\u0442\u0435\u043c\u043d\u044b\u0439 \u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439",
    darkslategrey: "\u0442\u0435\u043c\u043d\u044b\u0439 \u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439", darkturquoise: "\u0442\u0435\u043c\u043d\u044b\u0439 \u0431\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439", darkviolet: "\u0442\u0435\u043c\u043d\u043e-\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439", deeppink: "\u0442\u0435\u043c\u043d\u043e-\u0440\u043e\u0437\u043e\u0432\u044b\u0439", deepskyblue: "\u0442\u0435\u043c\u043d\u044b\u0439 \u043d\u0435\u0431\u0435\u0441\u043d\u043e-\u0433\u043e\u043b\u0443\u0431\u043e\u0439",
    dimgray: "\u0442\u0443\u0441\u043a\u043b\u043e-\u0441\u0435\u0440\u044b\u0439", dimgrey: "\u0442\u0443\u0441\u043a\u043b\u043e-\u0441\u0435\u0440\u044b\u0439", dodgerblue: "\u0431\u043b\u0435\u0434\u043d\u043e-\u0441\u0438\u043d\u0438\u0439", firebrick: "\u043a\u0438\u0440\u043f\u0438\u0447\u043d\u044b\u0439", floralwhite: "\u0446\u0432\u0435\u0442\u043e\u0447\u043d\u043e-\u0431\u0435\u043b\u044b\u0439", forestgreen: "\u0437\u0435\u043b\u0435\u043d\u044b\u0439 \u043b\u0435\u0441\u043d\u043e\u0439", fuchsia: "\u0444\u0443\u043a\u0441\u0438\u043d",
    gainsboro: "\u0431\u043b\u0435\u0434\u043d\u043e-\u0441\u0435\u0440\u044b\u0439", ghostwhite: "\u043f\u0440\u0438\u0437\u0440\u0430\u0447\u043d\u043e-\u0431\u0435\u043b\u044b\u0439", gold: "\u0437\u043e\u043b\u043e\u0442\u043e\u0439", goldenrod: "\u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u044b\u0439", gray: "\u0441\u0435\u0440\u044b\u0439", green: "\u0437\u0435\u043b\u0435\u043d\u044b\u0439", greenyellow: "\u0437\u0435\u043b\u0435\u043d\u043e-\u0436\u0435\u043b\u0442\u044b\u0439", grey: "\u0441\u0435\u0440\u044b\u0439",
    honeydew: "\u043c\u0435\u0434\u043e\u0432\u044b\u0439", hotpink: "\u043a\u0440\u0430\u0441\u043d\u043e-\u0440\u043e\u0437\u043e\u0432\u044b\u0439", indianred: "\u0438\u043d\u0434\u0438\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0441\u043d\u044b\u0439", indigo: "\u0438\u043d\u0434\u0438\u0433\u043e", ivory: "\u0441\u043b\u043e\u043d\u043e\u0432\u043e\u0439 \u043a\u043e\u0441\u0442\u0438", khaki: "\u0445\u0430\u043a\u0438", lavender: "\u0431\u043b\u0435\u0434\u043d\u043e-\u043b\u0438\u043b\u043e\u0432\u044b\u0439",
    lavenderblush: "\u0440\u043e\u0437\u043e\u0432\u0430\u0442\u043e-\u043b\u0438\u043b\u043e\u0432\u044b\u0439", lawngreen: "\u0437\u0435\u043b\u0435\u043d\u0430\u044f \u043b\u0443\u0436\u0430\u0439\u043a\u0430", lemonchiffon: "\u0431\u043b\u0435\u0434\u043d\u043e-\u043b\u0438\u043c\u043e\u043d\u043d\u044b\u0439", lightblue: "\u0441\u0432\u0435\u0442\u043b\u043e-\u0441\u0438\u043d\u0438\u0439", lightcoral: "\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0430\u043b\u043b\u043e\u0432\u044b\u0439", lightcyan: "\u0441\u0432\u0435\u0442\u043b\u044b\u0439 \u0446\u0438\u0430\u043d",
    lightgoldenrodyellow: "\u0441\u0432\u0435\u0442\u043b\u043e-\u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u044b\u0439", lightgray: "\u0441\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439", lightgreen: "\u0441\u0432\u0435\u0442\u043b\u043e-\u0437\u0435\u043b\u0435\u043d\u044b\u0439", lightgrey: "\u0441\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439", lightpink: "\u0441\u0432\u0435\u0442\u043b\u043e-\u0440\u043e\u0437\u043e\u0432\u044b\u0439", lightsalmon: "\u0441\u0432\u0435\u0442\u043b\u043e-\u043b\u043e\u0441\u043e\u0441\u0435\u0432\u044b\u0439",
    lightseagreen: "\u0441\u0432\u0435\u0442\u043b\u044b\u0439 \u043c\u043e\u0440\u0441\u043a\u043e\u0439 \u0432\u043e\u043b\u043d\u044b", lightskyblue: "\u0441\u0432\u0435\u0442\u043b\u044b\u0439 \u043d\u0435\u0431\u0435\u0441\u043d\u043e-\u0433\u043e\u043b\u0443\u0431\u043e\u0439", lightslategray: "\u0441\u0432\u0435\u0442\u043b\u044b\u0439 \u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439", lightslategrey: "\u0441\u0432\u0435\u0442\u043b\u044b\u0439 \u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439",
    lightsteelblue: "\u0441\u0432\u0435\u0442\u043b\u044b\u0439 \u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439", lightyellow: "\u0441\u0432\u0435\u0442\u043b\u043e-\u0436\u0435\u043b\u0442\u044b\u0439", lime: "\u043b\u0430\u0439\u043c", limegreen: "\u0437\u0435\u043b\u0435\u043d\u044b\u0439 \u043b\u0430\u0439\u043c", linen: "\u0445\u043b\u043e\u043f\u043a\u043e\u0432\u044b\u0439", magenta: "\u043f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439", maroon: "\u0442\u0435\u043c\u043d\u043e-\u0431\u043e\u0440\u0434\u043e\u0432\u044b\u0439",
    mediumaquamarine: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u043a\u0432\u0430\u043c\u0430\u0440\u0438\u043d", mediumblue: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043d\u0438\u0439", mediumorchid: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0440\u0441\u0435\u043b\u044c", mediumpurple: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439",
    mediumseagreen: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u043e\u0440\u0441\u043a\u043e\u0439 \u0432\u043e\u043b\u043d\u044b", mediumslateblue: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0438\u043d\u0438\u0439", mediumspringgreen: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0435\u0441\u0435\u043d\u043d\u0435-\u0437\u0435\u043b\u0435\u043d\u044b\u0439",
    mediumturquoise: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439", mediumvioletred: "\u043d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u043a\u0440\u0430\u0441\u043d\u044b\u0439", midnightblue: "\u043f\u043e\u043b\u0443\u043d\u043e\u0447\u043d\u043e-\u0441\u0438\u043d\u0438\u0439", mintcream: "\u043c\u044f\u0442\u043d\u043e-\u043a\u0440\u0435\u043c\u043e\u0432\u044b\u0439",
    mistyrose: "\u0431\u043b\u0435\u043a\u043b\u043e-\u0440\u043e\u0437\u043e\u0432\u044b\u0439", moccasin: "\u043c\u043e\u043a\u0430\u0441\u0438\u043d", navajowhite: "\u0431\u0435\u043b\u044b\u0439 \u043d\u0430\u0432\u0430\u0445\u043e", navy: "\u0442\u0435\u043c\u043d\u043e-\u0441\u0438\u043d\u0438\u0439", oldlace: "\u043c\u0430\u0442\u043e\u0432\u043e-\u0431\u0435\u043b\u044b\u0439", olive: "\u043e\u043b\u0438\u0432\u043a\u043e\u0432\u044b\u0439", olivedrab: "\u0436\u0435\u043b\u0442\u043e\u0432\u0430\u0442\u043e-\u0441\u0435\u0440\u044b\u0439",
    orange: "\u043e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439", orangered: "\u043e\u0440\u0430\u043d\u0436\u0435\u0432\u043e-\u043a\u0440\u0430\u0441\u043d\u044b\u0439", orchid: "\u043e\u0440\u0441\u0435\u043b\u044c", palegoldenrod: "\u0431\u043b\u0435\u0434\u043d\u043e-\u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u044b\u0439", palegreen: "\u0431\u043b\u0435\u0434\u043d\u043e-\u0437\u0435\u043b\u0435\u043d\u044b\u0439", paleturquoise: "\u0431\u043b\u0435\u0434\u043d\u043e-\u0431\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439",
    palevioletred: "\u0431\u043b\u0435\u0434\u043d\u044b\u0439 \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e-\u043a\u0440\u0430\u0441\u043d\u044b\u0439", papayawhip: "\u0447\u0435\u0440\u0435\u043d\u043e\u043a \u043f\u0430\u043f\u0430\u0439\u0438", peachpuff: "\u043f\u0435\u0440\u0441\u0438\u043a\u043e\u0432\u044b\u0439", peru: "\u043f\u0435\u0440\u0443", pink: "\u0440\u043e\u0437\u043e\u0432\u044b\u0439", plum: "\u0441\u043b\u0438\u0432\u043e\u0432\u044b\u0439", powderblue: "\u043f\u043e\u0440\u043e\u0445\u043e\u0432\u043e\u0439",
    purple: "\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439", red: "\u043a\u0440\u0430\u0441\u043d\u044b\u0439", rosybrown: "\u0440\u043e\u0437\u043e\u0432\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439", royalblue: "\u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u043a\u0438\u0439 \u0433\u043e\u043b\u0443\u0431\u043e\u0439", saddlebrown: "\u043a\u043e\u0436\u0430\u043d\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439", salmon: "\u043b\u043e\u0441\u043e\u0441\u0435\u0432\u044b\u0439",
    sandybrown: "\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u043e-\u043f\u0435\u0441\u0447\u0430\u043d\u044b\u0439", seagreen: "\u043c\u043e\u0440\u0441\u043a\u043e\u0439 \u0432\u043e\u043b\u043d\u044b", seashell: "\u043c\u043e\u0440\u0441\u043a\u0430\u044f \u0440\u0430\u043a\u043e\u0432\u0438\u043d\u0430", sienna: "\u043e\u0445\u0440\u0430", silver: "\u0441\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u044b\u0439", skyblue: "\u043d\u0435\u0431\u0435\u0441\u043d\u043e-\u0433\u043e\u043b\u0443\u0431\u043e\u0439",
    slateblue: "\u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0438\u043d\u0438\u0439", slategray: "\u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439", slategrey: "\u0433\u0440\u0438\u0444\u0435\u043b\u044c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439", snow: "\u0431\u0435\u043b\u043e\u0441\u043d\u0435\u0436\u043d\u044b\u0439", springgreen: "\u0432\u0435\u0441\u0435\u043d\u043d\u0438\u0439 \u0437\u0435\u043b\u0435\u043d\u044b\u0439", steelblue: "\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439",
    tan: "\u0440\u044b\u0436\u0435\u0432\u0430\u0442\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439", teal: "\u0447\u0438\u0440\u043e\u043a", thistle: "\u0447\u0435\u0440\u0442\u043e\u043f\u043e\u043b\u043e\u0445", tomato: "\u043f\u043e\u043c\u0438\u0434\u043e\u0440", transparent: "\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439", turquoise: "\u0431\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439", violet: "\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439", wheat: "\u043f\u0448\u0435\u043d\u0438\u0446\u0430",
    white: "\u0431\u0435\u043b\u044b\u0439", whitesmoke: "\u0434\u044b\u043c\u0447\u0430\u0442\u043e-\u0431\u0435\u043b\u044b\u0439", yellow: "\u0436\u0435\u043b\u0442\u044b\u0439", yellowgreen: "\u0436\u0435\u043b\u0442\u043e-\u0437\u0435\u043b\u0435\u043d\u044b\u0439"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojo/nls/ru/colors.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/FeedEntryEditor.js] */
//>>built
define("dojox/atom/widget/nls/FeedEntryEditor", {root: {doNew: "[new]", edit: "[edit]", save: "[save]", cancel: "[cancel]"}, ar: !0, az: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, es: !0, fi: !0, fr: !0, he: !0, hu: !0, hr: !0, it: !0, ja: !0, kk: !0, ko: !0, nb: !0, nl: !0, pl: !0, "pt-pt": !0, pt: !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/FeedEntryEditor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/FeedEntryViewer.js] */
//>>built
define("dojox/atom/widget/nls/FeedEntryViewer", {root: {displayOptions: "[display options]", title: "Title", authors: "Authors", contributors: "Contributors", id: "ID", close: "[close]", updated: "Updated", summary: "Summary", content: "Content"}, ar: !0, az: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, es: !0, fi: !0, fr: !0, he: !0, hu: !0, hr: !0, it: !0, ja: !0, kk: !0, ko: !0, nb: !0, nl: !0, pl: !0, "pt-pt": !0, pt: !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/FeedEntryViewer.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/FeedViewerEntry.js] */
//>>built
define("dojox/atom/widget/nls/FeedViewerEntry", {root: {deleteButton: "[Delete]"}, ar: !0, az: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, es: !0, fi: !0, fr: !0, he: !0, hu: !0, hr: !0, it: !0, ja: !0, kk: !0, ko: !0, nb: !0, nl: !0, pl: !0, "pt-pt": !0, pt: !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/FeedViewerEntry.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/PeopleEditor.js] */
//>>built
define("dojox/atom/widget/nls/PeopleEditor", {root: {add: "Add", addAuthor: "Add Author", addContributor: "Add Contributor"}, ar: !0, az: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, es: !0, fi: !0, fr: !0, he: !0, hu: !0, hr: !0, it: !0, ja: !0, kk: !0, ko: !0, nb: !0, nl: !0, pl: !0, "pt-pt": !0, pt: !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/PeopleEditor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/de/FeedEntryEditor.js] */
//>>built
define("dojox/atom/widget/nls/de/FeedEntryEditor", {doNew: "[Neu]", edit: "[Bearbeiten]", save: "[Speichern]", cancel: "[Abbrechen]"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/de/FeedEntryEditor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/de/FeedEntryViewer.js] */
//>>built
define("dojox/atom/widget/nls/de/FeedEntryViewer", {displayOptions: "[Anzeigeoptionen]", title: "Titel", authors: "Autoren", contributors: "Mitwirkende", id: "ID", close: "[Schlie\u00dfen]", updated: "Aktualisiert", summary: "Zusammenfassung", content: "Inhalt"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/de/FeedEntryViewer.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/de/FeedViewerEntry.js] */
//>>built
define("dojox/atom/widget/nls/de/FeedViewerEntry", {deleteButton: "[L\u00f6schen]"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/de/FeedViewerEntry.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/de/PeopleEditor.js] */
//>>built
define("dojox/atom/widget/nls/de/PeopleEditor", {add: "Hinzuf\u00fcgen", addAuthor: "Autor hinzuf\u00fcgen", addContributor: "Mitwirkenden hinzuf\u00fcgen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/de/PeopleEditor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/ru/FeedEntryEditor.js] */
//>>built
define("dojox/atom/widget/nls/ru/FeedEntryEditor", {doNew: "[\u0441\u043e\u0437\u0434\u0430\u0442\u044c]", edit: "[\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c]", save: "[\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c]", cancel: "[\u043e\u0442\u043c\u0435\u043d\u0430]"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/ru/FeedEntryEditor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/ru/FeedEntryViewer.js] */
//>>built
define("dojox/atom/widget/nls/ru/FeedEntryViewer", {displayOptions: "[\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u043f\u0446\u0438\u0438]", title: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435", authors: "\u0410\u0432\u0442\u043e\u0440\u044b", contributors: "\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438", id: "\u0418\u0414", close: "[\u0437\u0430\u043a\u0440\u044b\u0442\u044c]", updated: "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e", summary: "\u0421\u0432\u043e\u0434\u043a\u0430",
    content: "\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/ru/FeedEntryViewer.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/ru/FeedViewerEntry.js] */
//>>built
define("dojox/atom/widget/nls/ru/FeedViewerEntry", {deleteButton: "[\u0423\u0434\u0430\u043b\u0438\u0442\u044c]"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/ru/FeedViewerEntry.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/ru/PeopleEditor.js] */
//>>built
define("dojox/atom/widget/nls/ru/PeopleEditor", {add: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c", addAuthor: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0430", addContributor: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/atom/widget/nls/ru/PeopleEditor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/calendar/nls/buttons.js] */
//>>built
define("dojox/calendar/nls/buttons", {root: {previousButton: "\u25c4", nextButton: "\u25ba", todayButton: "Today", dayButton: "Day", weekButton: "Week", fourDaysButton: "4 Days", monthButton: "Month"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/calendar/nls/buttons.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/calendar/nls/de/buttons.js] */
//>>built
define("dojox/calendar/nls/de/buttons", {previousButton: "\u25c4", nextButton: "\u25ba", todayButton: "Heute", dayButton: "Tag", weekButton: "Woche", fourDaysButton: "4 Tage", monthButton: "Monat"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/calendar/nls/de/buttons.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/calendar/nls/ru/buttons.js] */
//>>built
define("dojox/calendar/nls/ru/buttons", {previousButton: "\u25c4", nextButton: "\u25ba", todayButton: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f", dayButton: "\u0414\u0435\u043d\u044c", weekButton: "\u041d\u0435\u0434\u0435\u043b\u044f", fourDaysButton: "4 \u0434\u043d\u044f", monthButton: "\u041c\u0435\u0441\u044f\u0446"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/calendar/nls/ru/buttons.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/AutoSave.js] */
//>>built
define("dojox/editor/plugins/nls/AutoSave", {root: {saveLabel: "Save", saveSettingLabelOn: "Set Auto-Save Interval...", saveSettingLabelOff: "Turn off Auto-Save", saveSettingdialogTitle: "Auto-Save", saveSettingdialogDescription: "Specify Auto-Save interval", saveSettingdialogParamName: "Auto-Save Interval", saveSettingdialogParamLabel: "min", saveSettingdialogButtonOk: "Set Interval", saveSettingdialogButtonCancel: "Cancel", saveMessageSuccess: "Saved at ${0}", saveMessageFail: "Failed to save at ${0}"}, zh: !0, "zh-tw": !0,
    tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/AutoSave.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Blockquote.js] */
//>>built
define("dojox/editor/plugins/nls/Blockquote", {root: {blockquote: "Blockquote"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Blockquote.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Breadcrumb.js] */
//>>built
define("dojox/editor/plugins/nls/Breadcrumb", {root: {nodeActions: "${nodeName} Actions", selectContents: "Select contents", selectElement: "Select element", deleteElement: "Delete element", deleteContents: "Delete contents", moveStart: "Move cursor to start", moveEnd: "Move cursor to end"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Breadcrumb.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/CollapsibleToolbar.js] */
//>>built
define("dojox/editor/plugins/nls/CollapsibleToolbar", {root: {collapse: "Collapse Editor Toolbar", expand: "Expand Editor Toolbar"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/CollapsibleToolbar.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/FindReplace.js] */
//>>built
define("dojox/editor/plugins/nls/FindReplace", {root: {findLabel: "Find:", findTooltip: "Enter text to find", replaceLabel: "Replace with:", replaceTooltip: "Enter text to replace with", findReplace: "Find and Replace", matchCase: "Match case", matchCaseTooltip: "Match case", backwards: "Backwards", backwardsTooltip: "Search backwards for text", replaceAllButton: "Replace All", replaceAllButtonTooltip: "Replace all the text", findButton: "Find", findButtonTooltip: "Find the text", replaceButton: "Replace", replaceButtonTooltip: "Replace the text",
    replaceDialogText: "Replaced ${0} occurrences.", eofDialogText: "Last occurrence ${0}", eofDialogTextFind: "found", eofDialogTextReplace: "replaced"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/FindReplace.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/InsertAnchor.js] */
//>>built
define("dojox/editor/plugins/nls/InsertAnchor", {root: {insertAnchor: "Insert Anchor", title: "Anchor Properties", anchor: "Name:", text: "Description:", set: "Set", cancel: "Cancel"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/InsertAnchor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/InsertEntity.js] */
//>>built
define("dojox/editor/plugins/nls/InsertEntity", {root: {insertEntity: "Insert Symbol"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/InsertEntity.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/LocalImage.js] */
//>>built
define("dojox/editor/plugins/nls/LocalImage", {root: {insertImageTitle: "Insert Image", url: "Image", browse: "Browse...", text: "Description", set: "Insert", invalidMessage: "Invalid image file type", prePopuTextUrl: "Enter an image URL", prePopuTextBrowse: " or browse to a local file."}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/LocalImage.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/PageBreak.js] */
//>>built
define("dojox/editor/plugins/nls/PageBreak", {root: {pageBreak: "Page Break"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/PageBreak.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/PasteFromWord.js] */
//>>built
define("dojox/editor/plugins/nls/PasteFromWord", {root: {pasteFromWord: "Paste From Word", instructions: "Paste the content from Word into the text box below.  Once you are satisfied with the content to insert, press the paste button.  To abort inserting text, press the cancel button."}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/PasteFromWord.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Preview.js] */
//>>built
define("dojox/editor/plugins/nls/Preview", {root: {preview: "Preview"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Preview.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/SafePaste.js] */
//>>built
define("dojox/editor/plugins/nls/SafePaste", {root: {instructions: "Direct paste is disabled.  Please paste content in this dialog using the standard browser keyboard or menu paste controls.  Once you are satisfied with the content to insert, press the paste button.  To abort inserting content, press the cancel button."}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/SafePaste.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Save.js] */
//>>built
define("dojox/editor/plugins/nls/Save", {root: {save: "Save"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Save.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ShowBlockNodes.js] */
//>>built
define("dojox/editor/plugins/nls/ShowBlockNodes", {root: {showBlockNodes: "Show HTML Block Elements"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ShowBlockNodes.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Smiley.js] */
//>>built
define("dojox/editor/plugins/nls/Smiley", {root: {smiley: "Insert Emoticon", emoticonSmile: "smile", emoticonLaughing: "laughing", emoticonWink: "wink", emoticonGrin: "grin", emoticonCool: "cool", emoticonAngry: "angry", emoticonHalf: "half", emoticonEyebrow: "eyebrow", emoticonFrown: "frown", emoticonShy: "shy", emoticonGoofy: "goofy", emoticonOops: "oops", emoticonTongue: "tongue", emoticonIdea: "idea", emoticonYes: "yes", emoticonNo: "no", emoticonAngel: "angel", emoticonCrying: "crying", emoticonHappy: "happy"}, zh: !0, "zh-tw": !0, tr: !0,
    th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/Smiley.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/SpellCheck.js] */
//>>built
define("dojox/editor/plugins/nls/SpellCheck", {root: {widgetLabel: "Batch Spell Check", unfound: "Not found", skip: "Skip", skipAll: "Skip All", toDic: "Add to dictionary", suggestions: "Suggestions", replace: "Replace", replaceWith: "Replace with", replaceAll: "Replace All", cancel: "Cancel", msg: "No misspellings found", iSkip: "Skip this", iSkipAll: "Skip all like this", iMsg: "No spelling suggestions"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0,
    hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/SpellCheck.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/TableDialog.js] */
//>>built
define("dojox/editor/plugins/nls/TableDialog", {root: {insertTableTitle: "Insert Table", modifyTableTitle: "Modify Table", rows: "Rows:", columns: "Columns:", align: "Align:", cellPadding: "Cell Padding:", cellSpacing: "Cell Spacing:", tableWidth: "Table Width:", backgroundColor: "Background Color:", borderColor: "Border Color:", borderThickness: "Border Thickness:", percent: "percent", pixels: "pixels", "default": "default", left: "left", center: "center", right: "right", buttonSet: "Set", buttonInsert: "Insert", buttonCancel: "Cancel",
    selectTableLabel: "Select Table", insertTableRowBeforeLabel: "Add Row Before", insertTableRowAfterLabel: "Add Row After", insertTableColumnBeforeLabel: "Add Column Before", insertTableColumnAfterLabel: "Add Column After", deleteTableRowLabel: "Delete Row", deleteTableColumnLabel: "Delete Column"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/TableDialog.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/TextColor.js] */
//>>built
define("dojox/editor/plugins/nls/TextColor", {root: {setButtonText: "Set", cancelButtonText: "Cancel"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/TextColor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/AutoSave.js] */
//>>built
define("dojox/editor/plugins/nls/de/AutoSave", {saveLabel: "Speichern", saveSettingLabelOn: "Intervall f\u00fcr automatisches Speichern festlegen", saveSettingLabelOff: "Automatisches Speichern inaktivieren", saveSettingdialogTitle: "Automatisch speichern", saveSettingdialogDescription: "Intervall f\u00fcr automatisches Speichern angeben", saveSettingdialogParamName: "Intervall f\u00fcr automatisches Speichern", saveSettingdialogParamLabel: "Min.", saveSettingdialogButtonOk: "Intervall festlegen", saveSettingdialogButtonCancel: "Abbrechen",
    saveMessageSuccess: "Gespeichert um ${0}", saveMessageFail: "Konnte nicht um ${0} gespeichert werden"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/AutoSave.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Blockquote.js] */
//>>built
define("dojox/editor/plugins/nls/de/Blockquote", {blockquote: "Blockzitat"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Blockquote.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Breadcrumb.js] */
//>>built
define("dojox/editor/plugins/nls/de/Breadcrumb", {nodeActions: "Aktionen f\u00fcr ${nodeName}", selectContents: "Inhalt ausw\u00e4hlen", selectElement: "Element ausw\u00e4hlen", deleteElement: "Element l\u00f6schen", deleteContents: "Inhalt l\u00f6schen", moveStart: "Cursor an Anfang verschieben", moveEnd: "Cursor an Ende verschieben"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Breadcrumb.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/CollapsibleToolbar.js] */
//>>built
define("dojox/editor/plugins/nls/de/CollapsibleToolbar", {collapse: "Editor-Symbolleiste ausblenden", expand: "Editor-Symbolleiste einblenden"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/CollapsibleToolbar.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/FindReplace.js] */
//>>built
define("dojox/editor/plugins/nls/de/FindReplace", {findLabel: "Suchen:", findTooltip: "Text zum Suchen eingeben", replaceLabel: "Ersetzen durch:", replaceTooltip: "Text zum Ersetzen eingeben", findReplace: "Suchen und ersetzen", matchCase: "Gro\u00df- und Kleinschreibung abgleichen", matchCaseTooltip: "Gro\u00df- und Kleinschreibung abgleichen", backwards: "Zur\u00fcck", backwardsTooltip: "R\u00fcckw\u00e4rts nach Text suchen", replaceAllButton: "Global ersetzen", replaceAllButtonTooltip: "Gesamten Text ersetzen", findButton: "Suchen",
    findButtonTooltip: "Text suchen", replaceButton: "Ersetzen", replaceButtonTooltip: "Text ersetzen", replaceDialogText: "${0} Vorkommen ersetzt.", eofDialogText: "Letztes Vorkommen ${0}", eofDialogTextFind: "gefunden", eofDialogTextReplace: "ersetzt"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/FindReplace.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/InsertAnchor.js] */
//>>built
define("dojox/editor/plugins/nls/de/InsertAnchor", {insertAnchor: "Anker einf\u00fcgen", title: "Eigenschaften des Ankers", anchor: "Name:", text: "Beschreibung:", set: "Festlegen", cancel: "Abbrechen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/InsertAnchor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/InsertEntity.js] */
//>>built
define("dojox/editor/plugins/nls/de/InsertEntity", {insertEntity: "Symbol einf\u00fcgen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/InsertEntity.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/LocalImage.js] */
//>>built
define("dojox/editor/plugins/nls/de/LocalImage", {insertImageTitle: "Grafik einf\u00fcgen", url: "Grafik", browse: "Durchsuchen...", text: "Beschreibung", set: "Einf\u00fcgen", invalidMessage: "Ung\u00fcltiger Grafikdateityp", prePopuTextUrl: "Geben Sie eine g\u00fcltige Grafik-URL ein", prePopuTextBrowse: "oder bl\u00e4ttern Sie zu einer lokalen Datei."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/LocalImage.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/PageBreak.js] */
//>>built
define("dojox/editor/plugins/nls/de/PageBreak", {pageBreak: "Seitenumbruch"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/PageBreak.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/PasteFromWord.js] */
//>>built
define("dojox/editor/plugins/nls/de/PasteFromWord", {pasteFromWord: "Aus Word einf\u00fcgen", instructions: "F\u00fcgt den Inhalt aus Word in das Textfeld unten ein. Wenn Sie mit dem einzuf\u00fcgenden Inhalt zufrieden sind, klicken Sie auf die Schaltfl\u00e4che zum Einf\u00fcgen. Um das Einf\u00fcgen von Text abzubrechen, klicken Sie auf die Schaltfl\u00e4che zum Abbrechen. "});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/PasteFromWord.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Preview.js] */
//>>built
define("dojox/editor/plugins/nls/de/Preview", {preview: "Vorschau"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Preview.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/SafePaste.js] */
//>>built
define("dojox/editor/plugins/nls/de/SafePaste", {instructions: "Direktes Einf\u00fcgen ist inaktiviert. F\u00fcgen Sie Inhalt in diesem Dialog \u00fcber Tastaturbefehle oder Men\u00fceintr\u00e4ge f\u00fcr Einf\u00fcgeoperationen Ihres Standardbrowsers ein. Wenn Sie mit dem einzuf\u00fcgenden Inhalt zufrieden sind, klicken Sie auf die Schaltfl\u00e4che Einf\u00fcgen. Wenn Sie das Einf\u00fcgen des Inhalts abbrechen m\u00f6chten, klicken Sie auf die Schaltfl\u00e4che Abbrechen."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/SafePaste.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Save.js] */
//>>built
define("dojox/editor/plugins/nls/de/Save", {save: "Speichern"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Save.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/ShowBlockNodes.js] */
//>>built
define("dojox/editor/plugins/nls/de/ShowBlockNodes", {showBlockNodes: "HTML-Blockelemente anzeigen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/ShowBlockNodes.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Smiley.js] */
//>>built
define("dojox/editor/plugins/nls/de/Smiley", {smiley: "Emoticon einf\u00fcgen", emoticonSmile: "L\u00e4cheln", emoticonLaughing: "Lachen", emoticonWink: "Zwinkern", emoticonGrin: "Grinsen", emoticonCool: "Cool", emoticonAngry: "W\u00fctend", emoticonHalf: "Halbes L\u00e4cheln", emoticonEyebrow: "Augenbraue", emoticonFrown: "Stirnrunzeln", emoticonShy: "Sch\u00fcchtern", emoticonGoofy: "Albern", emoticonOops: "Hoppla", emoticonTongue: "Zunge", emoticonIdea: "Idee", emoticonYes: "Ja", emoticonNo: "Nein", emoticonAngel: "Engel", emoticonCrying: "Weinen",
    emoticonHappy: "Gl\u00fccklich"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/Smiley.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/SpellCheck.js] */
//>>built
define("dojox/editor/plugins/nls/de/SpellCheck", {widgetLabel: "Batchrechtschreibpr\u00fcfung", unfound: "Nicht gefunden", skip: "\u00dcberspringen", skipAll: "Alle \u00fcberspringen", toDic: "Zum W\u00f6rterbuch hinzuf\u00fcgen", suggestions: "Vorschl\u00e4ge", replace: "Ersetzen", replaceWith: "Ersetzen durch", replaceAll: "Global ersetzen", cancel: "Abbrechen", msg: "Keine Rechtschreibfehler gefunden", iSkip: "Diesen Fund \u00fcberspringen", iSkipAll: "Alle entsprechenden Funde \u00fcberspringen", iMsg: "Keine Rechtschreibvorschl\u00e4ge"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/SpellCheck.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/TableDialog.js] */
//>>built
define("dojox/editor/plugins/nls/de/TableDialog", {insertTableTitle: "Tabelle einf\u00fcgen", modifyTableTitle: "Tabelle \u00e4ndern", rows: "Zeilen:", columns: "Spalten:", align: "Ausrichten:", cellPadding: "Zellenrandbreite:", cellSpacing: "Zellenabstand:", tableWidth: "Tabellenbreite:", backgroundColor: "Hintergrundfarbe:", borderColor: "Umrandungsfarbe:", borderThickness: "Umrandungsst\u00e4rke:", percent: "Prozent", pixels: "Pixel", "default": "Standard", left: "Links", center: "Mitte", right: "Rechts", buttonSet: "Festlegen",
    buttonInsert: "Einf\u00fcgen", buttonCancel: "Abbrechen", selectTableLabel: "Tabelle ausw\u00e4hlen", insertTableRowBeforeLabel: "Zeile davor einf\u00fcgen", insertTableRowAfterLabel: "Zeile danach einf\u00fcgen", insertTableColumnBeforeLabel: "Spalte davor einf\u00fcgen", insertTableColumnAfterLabel: "Spalte danach einf\u00fcgen", deleteTableRowLabel: "Zeile l\u00f6schen", deleteTableColumnLabel: "Spalte l\u00f6schen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/TableDialog.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/TextColor.js] */
//>>built
define("dojox/editor/plugins/nls/de/TextColor", {setButtonText: "Festlegen", cancelButtonText: "Abbrechen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/TextColor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/latinEntities.js] */
//>>built
define("dojox/editor/plugins/nls/de/latinEntities", {iexcl: "Umgekehrtes Ausrufezeichen", cent: "Cent-Zeichen", pound: "Nummernzeichen", curren: "W\u00e4hrungssymbol", yen: "Yen-ZeichenNyuan-Zeichen", brvbar: "Unterbrochener Balken\nUnterbrochener vertikaler Balken", sect: "Abschnittszeichen", uml: "Trema\nLeerzeichen mit Trema", copy: "Copyrightzeichen", ordf: "Weibliches Ordinalzeichen", laquo: "Doppelte, winklige Anf\u00fchrungszeichen, die nach links weisenlinke franz\u00f6sische Anf\u00fchrungszeichen", not: "Nicht-Zeichen",
    shy: "Ver\u00e4nderlicher Silbentrennstrich\nbedingter Trennstrich", reg: "Registrierte Handelsmarke\nregistriertes Markenzeichen", macr: "Makron\nLeerzeichen mit Makron\n\u00dcberstrich\nQuerstrich \u00fcber dem Buchstaben", deg: "Gradzeichen", plusmn: "Plus-Minus-Zeichen\nPlus-oder-Minus-Zeichen", sup2: "Hochgestellte Zwei\nHoch 2\nzum Quadrat", sup3: "Hochgestellte Drei\nHoch 3\nKubik", acute: "Akut\nsLeerzeichen mit Akut", micro: "Micro-Zeichen", para: "Pilcrow-Zeichen (engl.)\nAbsatzzeichen", middot: "Multiplikationszeichen\nGeorgisches Komma\nGriechisches Multiplikationszeichen",
    cedil: "Cedilla\nLeerzeichen mit Cedilla", sup1: "Hochgestellte Eins\nHoch 1", ordm: "M\u00e4nnliches Ordinalzeichen", raquo: "Doppelte, winklige Anf\u00fchrungszeichen, die nach rechts weisen\nRechtes franz\u00f6sisches Anf\u00fchrungszeichen", frac14: "Bruch 1 durch 4\nEin Viertel", frac12: "Bruch 1 durch 2\nEinhalb", frac34: "Bruch 3 durch 4\nDreiviertel", iquest: "Umgekehrtes Fragezeichen\nFragezeichen auf dem Kopf", Agrave: "Gro\u00dfes A mit Gravis\nGro\u00dfbuchstabe A mit Gravis", Aacute: "Gro\u00dfbuchstabe A mit Akut",
    Acirc: "Gro\u00dfbuchstabe A mit Zirkumflex", Atilde: "Gro\u00dfbuchstabe A mit Tilde", Auml: "Gro\u00dfbuchstabe A mit Trema", Aring: "Gro\u00dfes A mit Ring dar\u00fcber\nLateinischer Gro\u00dfbuchstabe A mit Ring dar\u00fcber", AElig: "Gro\u00dfes AE\nLigatur aus Gro\u00dfbuchstaben A und E", Ccedil: "Gro\u00dfbuchstabe C mit Cedilla", Egrave: "Gro\u00dfbuchstabe E mit Gravis", Eacute: "Gro\u00dfbuchstabe E mit Akut", Ecirc: "Gro\u00dfbuchstabe E mit Zirkumflex", Euml: "Gro\u00dfbuchstabe E mit Trema", Igrave: "Gro\u00dfbuchstabe I mit Gravis",
    Iacute: "Gro\u00dfbuchstabe I mit Akut", Icirc: "Gro\u00dfbuchstabe I mit Zirkumflex", Iuml: "Gro\u00dfbuchstabe I mit Trema", ETH: "Gro\u00dfes ETH", Ntilde: "Gro\u00dfbuchstabe N mit Tilde", Ograve: "Gro\u00dfbuchstabe O mit Gravis", Oacute: "Gro\u00dfbuchstabe O mit Akut", Ocirc: "Gro\u00dfbuchstabe O mit Zirkumflex", Otilde: "Lateinischer Gro\u00dfbuchstabe O mit Tilde", Ouml: "Lateinischer Gro\u00dfbuchstabe O mit Trema", times: "Multiplikationszeichen", Oslash: "Gro\u00dfes O mit Schr\u00e4gstrich\nGro\u00dfer d\u00e4nisch-norwegischer Umlaut \u00f6",
    Ugrave: "Gro\u00dfbuchstabe U mit Gravis", Uacute: "Gro\u00dfbuchstabe U mit Akut", Ucirc: "Gro\u00dfbuchstabe U mit Zirkumflex", Uuml: "Gro\u00dfbuchstabe U mit Trema", Yacute: "Gro\u00dfbuchstabe Y mit Akut", THORN: "Gro\u00dfes THORN", szlig: "Scharfes s\nEsszett", agrave: "Kleines a mit Gravis\nKleinbuchstabe a mit Gravis", aacute: "Kleinbuchstabe a mit Aktut", acirc: "Kleinbuchstabe a mit Zirkumflex", atilde: "Kleinbuchstabe a mit Tilde", auml: "Kleinbuchstabe a mit Trema", aring: "Kleines a mit Ring dar\u00fcber\nKleinbuchstabe a mit Ring",
    aelig: "Kleines ae\nLigatur aus Kleinbuchstaben a und e", ccedil: "Kleinbuchstabe c mit Cedilla", egrave: "Kleinbuchstabe e mit Gravis", eacute: "Kleinbuchstabe e mit Aktut", ecirc: "Kleinbuchstabe e mit Zirkumflex", euml: "Kleinbuchstabe e mit Trema", igrave: "Kleinbuchstabe i mit Gravis", iacute: "Kleinbuchstabe i mit Aktut", icirc: "Kleinbuchstabe i mit Zirkumflex", iuml: "Kleinbuchstabe i mit Trema", eth: "Kleines eth", ntilde: "Kleinbuchstabe n mit Tilde", ograve: "Kleinbuchstabe o mit Gravis", oacute: "Kleinbuchstabe o mit Aktut",
    ocirc: "Kleinbuchstabe o mit Zirkumflex", otilde: "Kleinbuchstabe o mit Tilde", ouml: "Kleinbuchstabe o mit Gravis", divide: "Divisionszeichen", oslash: "Kleines o mit Schr\u00e4gstrich\nKleiner d\u00e4nisch-norwegischer Umlaut \u00f6", ugrave: "Kleinbuchstabe u mit Gravis", uacute: "Kleinbuchstabe u mit Aktut", ucirc: "Kleinbuchstabe u mit Zirkumflex", uuml: "Kleinbuchstabe u mit Trema", yacute: "Kleinbuchstabe y mit Aktut", thorn: "Kleines thorn", yuml: "Kleinbuchstabe y mit Trema", fnof: "Kleines mit Haken\nFunction\nFlorin",
    Alpha: "Griechischer Gro\u00dfbuchstabe Alpha", Beta: "Griechischer Gro\u00dfbuchstabe Beta", Gamma: "Griechischer Gro\u00dfbuchstabe Gamma", Delta: "Griechischer Gro\u00dfbuchstabe Delta", Epsilon: "Griechischer Gro\u00dfbuchstabe Epsilon", Zeta: "Griechischer Gro\u00dfbuchstabe Zeta", Eta: "Griechischer Gro\u00dfbuchstabe Eta", Theta: "Griechischer Gro\u00dfbuchstabe Theta", Iota: "Griechischer Gro\u00dfbuchstabe Iota", Kappa: "Griechischer Gro\u00dfbuchstabe Kappa", Lambda: "Griechischer Gro\u00dfbuchstabe Lambda",
    Mu: "Griechischer Gro\u00dfbuchstabe My", Nu: "Griechischer Gro\u00dfbuchstabe Ny", Xi: "Griechischer Gro\u00dfbuchstabe Xi", Omicron: "Griechischer Gro\u00dfbuchstabe Omicron", Pi: "Griechischer Gro\u00dfbuchstabe Pi", Rho: "Griechischer Gro\u00dfbuchstabe Rho", Sigma: "Griechischer Gro\u00dfbuchstabe Sigma", Tau: "Griechischer Gro\u00dfbuchstabe Tau", Upsilon: "Griechischer Gro\u00dfbuchstabe Upsilon", Phi: "Griechischer Gro\u00dfbuchstabe Phi", Chi: "Griechischer Gro\u00dfbuchstabe Chi", Psi: "Griechischer Gro\u00dfbuchstabe Psi",
    Omega: "Griechischer Gro\u00dfbuchstabe Omega", alpha: "Griechischer Kleinbuchstabe Alpha", beta: "Griechischer Kleinbuchstabe Beta", gamma: "Griechischer Kleinbuchstabe Gamma", delta: "Griechischer Kleinbuchstabe Delta", epsilon: "Griechischer Kleinbuchstabe Epsilon", zeta: "Griechischer Kleinbuchstabe Zeta", eta: "Griechischer Kleinbuchstabe Eta", theta: "Griechischer Kleinbuchstabe Theta", iota: "Griechischer Kleinbuchstabe Iota", kappa: "Griechischer Kleinbuchstabe Kappa", lambda: "Griechischer Kleinbuchstabe Lambda",
    mu: "Griechischer Kleinbuchstabe My", nu: "Griechischer Kleinbuchstabe Ny", xi: "Griechischer Kleinbuchstabe Xi", omicron: "Griechischer Kleinbuchstabe Omicron", pi: "Griechischer Kleinbuchstabe Pi", rho: "Griechischer Kleinbuchstabe Rho", sigmaf: "Griechischer Kleinbuchstabe Sigma am Wortende", sigma: "Griechischer Kleinbuchstabe Sigma", tau: "Griechischer Kleinbuchstabe Tau", upsilon: "Griechischer Kleinbuchstabe Upsilon", phi: "Griechischer Kleinbuchstabe Phi", chi: "Griechischer Kleinbuchstabe Chi", psi: "Griechischer Kleinbuchstabe Psi",
    omega: "Griechischer Kleinbuchstabe Omega", thetasym: "Griechischer Kleinbuchstabe Theta (Symbol)", upsih: "Griechisches Upsilon mit Haken", piv: "Griechisches Pi-Symbol", bull: "Rundes Aufz\u00e4hlungszeichen\nSchwarzer kleiner Kreis", hellip: "Auslassung\nDrei kleine Punkte", prime: "Prime\nMinuten\nFu\u00df", Prime: "Doppelter Prime\nSekunden\nZoll", oline: "Hochgestellter Querstrich\nLeerzeichen mit Oberstrich", frasl: "Schr\u00e4gstrich f\u00fcr Bruch", weierp: "Kleines p in Schreibschrift\nPotenz\nWeierstrass'sche Ellipsen-Funktion",
    image: "Gro\u00dfes I in Frakturschrift\nImagin\u00e4rteil", real: "Gro\u00dfes R in Frakturschrift\nRealteilsymbol", trade: "Markenzeichen", alefsym: "Alef-Symbol\nerste Transfinite Kardinalzahl", larr: "Linkspfeil", uarr: "Aufw\u00e4rtspfeil", rarr: "Rechtspfeil", darr: "Abw\u00e4rtspfeil", harr: "Links-Rechts-Pfeil", crarr: "Abw\u00e4rtspfeil, der nach links abknickt\nZeilenumbruch", lArr: "Doppelter Linkspfeil", uArr: "Doppelter Aufw\u00e4rtspfeil", rArr: "Doppelter Rechtspfeil", dArr: "Doppelter Abw\u00e4rtspfeil", hArr: "Doppelter Rechts-Links-Pfeil",
    forall: "F\u00fcr alle", part: "Partielle Differenzialgleichung", exist: "Es existiert", empty: "Leermenge\nNullmenge\nDurchmesser", nabla: "Nabla\nAbsteigende Differenz", isin: "Element von", notin: "Kein Element von", ni: "Enth\u00e4lt als Member", prod: "un\u00e4res Produkt\nProduktzeichen", sum: "un\u00e4re Summation", minus: "Minuszeichen", lowast: "Sternoperator", radic: "Quadratwurzel\nWurzelzeichen", prop: "proportional zu", infin: "Unendlich", ang: "Winkel", and: "Logisches Und\nKeil", or: "Logisches Oder\nv-f\u00f6rmig",
    cap: "Schnittpunkt\nH\u00fctchen", cup: "Vereinigungsmenge\nCup", "int": "Integral", there4: "Deshalb", sim: "Tilde (Operator)\nvariiert mit\n\u00e4hnlich wie", cong: "Etwa gleich mit", asymp: "Ungef\u00e4hr gleich mit\nasymptotisch", ne: "Nicht gleich mit", equiv: "Identisch mit", le: "Kleiner-gleich", ge: "Gr\u00f6\u00dfer-gleich", sub: "Teil von", sup: "Obermenge von", nsub: "Kein Teil von", sube: "Teilmenge oder gleich mit", supe: "Obermenge oder gleich mit", oplus: "Pluszeichen mit Kreis\ndirekte Summe", otimes: "Multiplikationszeichen mit Kreis\nVektorprodukt",
    perp: "Senkrecht\nSenkrecht zu\nLotrecht", sdot: "Punktoperator", lceil: "Linke Ecke oben\nAPL upstile", rceil: "Rechte Ecke oben", lfloor: "Linke Ecke unten\nAPL downstile", rfloor: "Rechte Ecke unten", lang: "Linke spitze Klammer", rang: "Rechte spitze Klammer", loz: "Raute", spades: "Schwarzes Pik (Kartenspiel)", clubs: "Schwarzes Kreuz (Kartenspiel)\nKleeblatt", hearts: "Schwarzes Herz (Kartenspiel)\nValentine", diams: "Schwarzes Karo (Kartenspiel)", OElig: "Ligatur aus Gro\u00dfbuchstaben O und E", oelig: "Ligatur aus Kleinbuchstaben o und e",
    Scaron: "Gro\u00dfbuchstabe S mit Caron", scaron: "Kleinbuchstabe s mit Caron", Yuml: "Gro\u00dfbuchstabe Y mit Trema", circ: "Zirkumflex, Akzent", tilde: "kleine Tilde", ensp: "Leerschritt von der Breite des Buchstaben n", emsp: "Leerschritt von der Breite des Buchstaben m", thinsp: "Schmaler Leerschritt", zwnj: "Nichtverbinder mit Nullbreite", zwj: "Verbinder mit Nullbreite", lrm: "Links-Rechts-Markierung", rlm: "Rechts-Links-Markierung", ndash: "Gedankenstrich von der L\u00e4nge des Buchstabens n", mdash: "Gedankenstrich von der L\u00e4nge des Buchstabens m",
    lsquo: "Linkes einfaches Anf\u00fchrungszeichen", rsquo: "Rechtes einfaches Anf\u00fchrungszeichen", sbquo: "Einfaches, gekr\u00fcmmtes Anf\u00fchrungszeichen unten", ldquo: "Linkes doppeltes Anf\u00fchrungszeichen", rdquo: "Rechtes doppeltes Anf\u00fchrungszeichen", bdquo: "Doppeltes, gekr\u00fcmmtes Anf\u00fchrungszeichen unten", dagger: "Kreuzzeichen", Dagger: "Doppelkreuzzeichen", permil: "Promillezeichen", lsaquo: "Einfaches linkes Anf\u00fchrungszeichen", rsaquo: "Einfaches rechtes Anf\u00fchrungszeichen", euro: "Euro-Zeichen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/de/latinEntities.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/latinEntities.js] */
//>>built
define("dojox/editor/plugins/nls/latinEntities", {root: {iexcl: "inverted exclamation mark", cent: "cent sign", pound: "pound sign", curren: "currency sign", yen: "yen sign\nyuan sign", brvbar: "broken bar\nbroken vertical bar", sect: "section sign", uml: "diaeresis\nspacing diaeresis", copy: "copyright sign", ordf: "feminine ordinal indicator", laquo: "left-pointing double angle quotation mark\nleft pointing guillemet", not: "not sign", shy: "soft hyphen\ndiscretionary hyphen", reg: "registered sign\nregistered trade mark sign",
    macr: "macron\nspacing macron\noverline\nAPL overbar", deg: "degree sign", plusmn: "plus-minus sign\nplus-or-minus sign", sup2: "superscript two\nsuperscript digit two\nsquared", sup3: "superscript three\nsuperscript digit three\ncubed", acute: "acute accent\nspacing acute", micro: "micro sign", para: "pilcrow sign\nparagraph sign", middot: "middle dot\nGeorgian comma\nGreek middle dot", cedil: "cedilla\nspacing cedilla", sup1: "superscript one\nsuperscript digit one", ordm: "masculine ordinal indicator", raquo: "right-pointing double angle quotation mark\nright pointing guillemet",
    frac14: "vulgar fraction one quarter\nfraction one quarter", frac12: "vulgar fraction one half\nfraction one half", frac34: "vulgar fraction three quarters\nfraction three quarters", iquest: "inverted question mark\nturned question mark", Agrave: "Latin capital letter A with grave\nLatin capital letter A grave", Aacute: "Latin capital letter A with acute", Acirc: "Latin capital letter A with circumflex", Atilde: "Latin capital letter A with tilde", Auml: "Latin capital letter A with diaeresis", Aring: "Latin capital letter A with ring above\nLatin capital letter A ring",
    AElig: "Latin capital letter AE\nLatin capital ligature AE", Ccedil: "Latin capital letter C with cedilla", Egrave: "Latin capital letter E with grave", Eacute: "Latin capital letter E with acute", Ecirc: "Latin capital letter E with circumflex", Euml: "Latin capital letter E with diaeresis", Igrave: "Latin capital letter I with grave", Iacute: "Latin capital letter I with acute", Icirc: "Latin capital letter I with circumflex", Iuml: "Latin capital letter I with diaeresis", ETH: "Latin capital letter ETH", Ntilde: "Latin capital letter N with tilde",
    Ograve: "Latin capital letter O with grave", Oacute: "Latin capital letter O with acute", Ocirc: "Latin capital letter O with circumflex", Otilde: "Latin capital letter O with tilde", Ouml: "Latin capital letter O with diaeresis", times: "multiplication sign", Oslash: "Latin capital letter O with stroke\nLatin capital letter O slash", Ugrave: "Latin capital letter U with grave", Uacute: "Latin capital letter U with acute", Ucirc: "Latin capital letter U with circumflex", Uuml: "Latin capital letter U with diaeresis",
    Yacute: "Latin capital letter Y with acute", THORN: "Latin capital letter THORN", szlig: "Latin small letter sharp s\ness-zed", agrave: "Latin small letter a with grave\nLatin small letter a grave", aacute: "Latin small letter a with acute", acirc: "Latin small letter a with circumflex", atilde: "Latin small letter a with tilde", auml: "Latin small letter a with diaeresis", aring: "Latin small letter a with ring above\nLatin small letter a ring", aelig: "Latin small letter ae\nLatin small ligature ae", ccedil: "Latin small letter c with cedilla",
    egrave: "Latin small letter e with grave", eacute: "Latin small letter e with acute", ecirc: "Latin small letter e with circumflex", euml: "Latin small letter e with diaeresis", igrave: "Latin small letter i with grave", iacute: "Latin small letter i with acute", icirc: "Latin small letter i with circumflex", iuml: "Latin small letter i with diaeresis", eth: "Latin small letter eth", ntilde: "Latin small letter n with tilde", ograve: "Latin small letter o with grave", oacute: "Latin small letter o with acute", ocirc: "Latin small letter o with circumflex",
    otilde: "Latin small letter o with tilde", ouml: "Latin small letter o with diaeresis", divide: "division sign", oslash: "Latin small letter o with stroke\nLatin small letter o slash", ugrave: "Latin small letter u with grave", uacute: "Latin small letter u with acute", ucirc: "Latin small letter u with circumflex", uuml: "Latin small letter u with diaeresis", yacute: "Latin small letter y with acute", thorn: "Latin small letter thorn", yuml: "Latin small letter y with diaeresis", fnof: "Latin small f with hook\nfunction\nflorin",
    Alpha: "Greek capital letter alpha", Beta: "Greek capital letter beta", Gamma: "Greek capital letter gamma", Delta: "Greek capital letter delta", Epsilon: "Greek capital letter epsilon", Zeta: "Greek capital letter zeta", Eta: "Greek capital letter eta", Theta: "Greek capital letter theta", Iota: "Greek capital letter iota", Kappa: "Greek capital letter kappa", Lambda: "Greek capital letter lambda", Mu: "Greek capital letter mu", Nu: "Greek capital letter nu", Xi: "Greek capital letter xi", Omicron: "Greek capital letter omicron",
    Pi: "Greek capital letter pi", Rho: "Greek capital letter rho", Sigma: "Greek capital letter sigma", Tau: "Greek capital letter tau", Upsilon: "Greek capital letter upsilon", Phi: "Greek capital letter phi", Chi: "Greek capital letter chi", Psi: "Greek capital letter psi", Omega: "Greek capital letter omega", alpha: "Greek small letter alpha", beta: "Greek small letter beta", gamma: "Greek small letter gamma", delta: "Greek small letter delta", epsilon: "Greek small letter epsilon", zeta: "Greek small letter zeta", eta: "Greek small letter eta",
    theta: "Greek small letter theta", iota: "Greek small letter iota", kappa: "Greek small letter kappa", lambda: "Greek small letter lambda", mu: "Greek small letter mu", nu: "Greek small letter nu", xi: "Greek small letter xi", omicron: "Greek small letter omicron", pi: "Greek small letter pi", rho: "Greek small letter rho", sigmaf: "Greek small letter final sigma", sigma: "Greek small letter sigma", tau: "Greek small letter tau", upsilon: "Greek small letter upsilon", phi: "Greek small letter phi", chi: "Greek small letter chi",
    psi: "Greek small letter psi", omega: "Greek small letter omega", thetasym: "Greek small letter theta symbol", upsih: "Greek upsilon with hook symbol", piv: "Greek pi symbol", bull: "bullet\nblack small circle", hellip: "horizontal ellipsis\nthree dot leader", prime: "prime\nminutes\nfeet", Prime: "double prime\nseconds\ninches", oline: "overline\nspacing overscore", frasl: "fraction slash", weierp: "script capital P\npower set\nWeierstrass p", image: "blackletter capital I\nimaginary part", real: "blackletter capital R\nreal part symbol",
    trade: "trade mark sign", alefsym: "alef symbol\nfirst transfinite cardinal", larr: "leftwards arrow", uarr: "upwards arrow", rarr: "rightwards arrow", darr: "downwards arrow", harr: "left right arrow", crarr: "downwards arrow with corner leftwards\ncarriage return", lArr: "leftwards double arrow", uArr: "upwards double arrow", rArr: "rightwards double arrow", dArr: "downwards double arrow", hArr: "left right double arrow", forall: "for all", part: "partial differential", exist: "there exists", empty: "empty set\nnull set\ndiameter",
    nabla: "nabla\nbackward difference", isin: "element of", notin: "not an element of", ni: "contains as member", prod: "n-ary product\nproduct sign", sum: "n-ary sumation", minus: "minus sign", lowast: "asterisk operator", radic: "square root\nradical sign", prop: "proportional to", infin: "infinity", ang: "angle", and: "logical and\nwedge", or: "logical or\nvee", cap: "intersection\ncap", cup: "union\ncup", "int": "integral", there4: "therefore", sim: "tilde operator\nvaries with\nsimilar to", cong: "approximately equal to", asymp: "almost equal to\nasymptotic to",
    ne: "not equal to", equiv: "identical to", le: "less-than or equal to", ge: "greater-than or equal to", sub: "subset of", sup: "superset of", nsub: "not a subset of", sube: "subset of or equal to", supe: "superset of or equal to", oplus: "circled plus\ndirect sum", otimes: "circled times\nvector product", perp: "up tack\northogonal to\nperpendicular", sdot: "dot operator", lceil: "left ceiling\nAPL upstile", rceil: "right ceiling", lfloor: "left floor\nAPL downstile", rfloor: "right floor", lang: "left-pointing angle bracket", rang: "right-pointing angle bracket",
    loz: "lozenge", spades: "black spade suit", clubs: "black club suit\nshamrock", hearts: "black heart suit\nvalentine", diams: "black diamond suit", OElig: "Latin capital ligature OE", oelig: "Latin small ligature oe", Scaron: "Latin capital letter S with caron", scaron: "Latin small letter s with caron", Yuml: "Latin capital letter Y with diaeresis", circ: "modifier letter circumflex accent", tilde: "small tilde", ensp: "en space", emsp: "em space", thinsp: "thin space", zwnj: "zero width non-joiner", zwj: "zero width joiner", lrm: "left-to-right mark",
    rlm: "right-to-left mark", ndash: "en dash", mdash: "em dash", lsquo: "left single quotation mark", rsquo: "right single quotation mark", sbquo: "single low-9 quotation mark", ldquo: "left double quotation mark", rdquo: "right double quotation mark", bdquo: "double low-9 quotation mark", dagger: "dagger", Dagger: "double dagger", permil: "per mille sign", lsaquo: "single left-pointing angle quotation mark", rsaquo: "single right-pointing angle quotation mark", euro: "euro sign"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0,
    ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/latinEntities.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/AutoSave.js] */
//>>built
define("dojox/editor/plugins/nls/ru/AutoSave", {saveLabel: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c", saveSettingLabelOn: "\u0417\u0430\u0434\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0430\u0432\u0442\u043e\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f...", saveSettingLabelOff: "\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435", saveSettingdialogTitle: "\u0410\u0432\u0442\u043e\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435",
    saveSettingdialogDescription: "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0430\u0432\u0442\u043e\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f", saveSettingdialogParamName: "\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0430\u0432\u0442\u043e\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f", saveSettingdialogParamLabel: "\u043c\u0438\u043d", saveSettingdialogButtonOk: "\u0417\u0430\u0434\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b",
    saveSettingdialogButtonCancel: "\u041e\u0442\u043c\u0435\u043d\u0430", saveMessageSuccess: "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e ${0}", saveMessageFail: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c ${0}"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/AutoSave.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Blockquote.js] */
//>>built
define("dojox/editor/plugins/nls/ru/Blockquote", {blockquote: "\u0411\u043b\u043e\u043a \u0446\u0438\u0442\u0430\u0442"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Blockquote.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Breadcrumb.js] */
//>>built
define("dojox/editor/plugins/nls/ru/Breadcrumb", {nodeActions: "${nodeName}: \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f", selectContents: "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435", selectElement: "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442", deleteElement: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442", deleteContents: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435",
    moveStart: "\u041f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u0443\u0440\u0441\u043e\u0440 \u0432 \u043d\u0430\u0447\u0430\u043b\u043e", moveEnd: "\u041f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u0443\u0440\u0441\u043e\u0440 \u0432 \u043a\u043e\u043d\u0435\u0446"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Breadcrumb.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/CollapsibleToolbar.js] */
//>>built
define("dojox/editor/plugins/nls/ru/CollapsibleToolbar", {collapse: "\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f", expand: "\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/CollapsibleToolbar.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/FindReplace.js] */
//>>built
define("dojox/editor/plugins/nls/ru/FindReplace", {findLabel: "\u041d\u0430\u0439\u0442\u0438:", findTooltip: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430", replaceLabel: "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430:", replaceTooltip: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u043d\u044b", findReplace: "\u041d\u0430\u0439\u0442\u0438 \u0438 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c",
    matchCase: "\u0421 \u0443\u0447\u0435\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430", matchCaseTooltip: "\u0421 \u0443\u0447\u0435\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430", backwards: "\u041d\u0430\u0437\u0430\u0434", backwardsTooltip: "\u041f\u043e\u0438\u0441\u043a \u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438", replaceAllButton: "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435",
    replaceAllButtonTooltip: "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0435\u0441\u044c \u0442\u0435\u043a\u0441\u0442", findButton: "\u041d\u0430\u0439\u0442\u0438", findButtonTooltip: "\u041d\u0430\u0439\u0442\u0438 \u0442\u0435\u043a\u0441\u0442", replaceButton: "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c", replaceButtonTooltip: "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442", replaceDialogText: "\u0417\u0430\u043c\u0435\u043d\u0435\u043d\u043e ${0} \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0439.",
    eofDialogText: "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 ${0}", eofDialogTextFind: "\u043d\u0430\u0439\u0434\u0435\u043d\u043e", eofDialogTextReplace: "\u0437\u0430\u043c\u0435\u043d\u0435\u043d\u043e"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/FindReplace.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/InsertAnchor.js] */
//>>built
define("dojox/editor/plugins/nls/ru/InsertAnchor", {insertAnchor: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0442\u043a\u0443", title: "\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043c\u0435\u0442\u043a\u0438", anchor: "\u0418\u043c\u044f:", text: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:", set: "\u0417\u0430\u0434\u0430\u0442\u044c", cancel: "\u041e\u0442\u043c\u0435\u043d\u0430"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/InsertAnchor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/InsertEntity.js] */
//>>built
define("dojox/editor/plugins/nls/ru/InsertEntity", {insertEntity: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/InsertEntity.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/LocalImage.js] */
//>>built
define("dojox/editor/plugins/nls/ru/LocalImage", {insertImageTitle: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435", url: "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435", browse: "\u041e\u0431\u0437\u043e\u0440...", text: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435", set: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c", invalidMessage: "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
    prePopuTextUrl: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f", prePopuTextBrowse: " \u0438\u043b\u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/LocalImage.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/PageBreak.js] */
//>>built
define("dojox/editor/plugins/nls/ru/PageBreak", {pageBreak: "\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/PageBreak.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/PasteFromWord.js] */
//>>built
define("dojox/editor/plugins/nls/ru/PasteFromWord", {pasteFromWord: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437 Word", instructions: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0438\u0437 Word \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435 \u043d\u0438\u0436\u0435.  \u041a\u043e\u0433\u0434\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c.  \u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u041e\u0442\u043c\u0435\u043d\u0430."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/PasteFromWord.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Preview.js] */
//>>built
define("dojox/editor/plugins/nls/ru/Preview", {preview: "\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Preview.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/SafePaste.js] */
//>>built
define("dojox/editor/plugins/nls/ru/SafePaste", {instructions: "\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u0430. \u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u044d\u0442\u043e \u043e\u043a\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438\u043b\u0438 \u043f\u0443\u043d\u043a\u0442\u043e\u0432 \u043c\u0435\u043d\u044e. \u041a\u043e\u0433\u0434\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c.  \u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u041e\u0442\u043c\u0435\u043d\u0430. "});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/SafePaste.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Save.js] */
//>>built
define("dojox/editor/plugins/nls/ru/Save", {save: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Save.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/ShowBlockNodes.js] */
//>>built
define("dojox/editor/plugins/nls/ru/ShowBlockNodes", {showBlockNodes: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0431\u043b\u043e\u043a\u0430 HTML"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/ShowBlockNodes.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Smiley.js] */
//>>built
define("dojox/editor/plugins/nls/ru/Smiley", {smiley: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u043e\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f", emoticonSmile: "\u0443\u043b\u044b\u0431\u043a\u0430", emoticonLaughing: "\u0441\u043c\u0435\u0445", emoticonWink: "\u043f\u043e\u0434\u043c\u0438\u0433\u0438\u0432\u0430\u043d\u0438\u0435", emoticonGrin: "\u0443\u0441\u043c\u0435\u0448\u043a\u0430", emoticonCool: "\u0437\u0434\u043e\u0440\u043e\u0432\u043e",
    emoticonAngry: "\u0437\u043b\u043e\u0441\u0442\u044c", emoticonHalf: "\u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430", emoticonEyebrow: "\u0443\u0434\u0438\u0432\u043b\u0435\u043d\u0438\u0435", emoticonFrown: "\u0445\u043c\u0443\u0440\u044b\u0439 \u0432\u0438\u0434", emoticonShy: "\u0437\u0430\u0441\u0442\u0435\u043d\u0447\u0438\u0432\u043e\u0441\u0442\u044c", emoticonGoofy: "\u0433\u043b\u0443\u043f\u044b\u0439", emoticonOops: "\u0443\u0443\u043f\u0441", emoticonTongue: "\u043d\u0430\u0441\u043c\u0435\u0448\u043a\u0430",
    emoticonIdea: "\u0435\u0441\u0442\u044c \u0438\u0434\u0435\u044f", emoticonYes: "\u0434\u0430", emoticonNo: "\u043d\u0435\u0442", emoticonAngel: "\u0430\u043d\u0433\u0435\u043b", emoticonCrying: "\u043f\u043b\u0430\u0447\u044c", emoticonHappy: "\u0441\u0447\u0430\u0441\u0442\u044c\u0435"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/Smiley.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/SpellCheck.js] */
//>>built
define("dojox/editor/plugins/nls/ru/SpellCheck", {widgetLabel: "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043e\u0440\u0444\u043e\u0433\u0440\u0430\u0444\u0438\u0438", unfound: "\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e", skip: "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c", skipAll: "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435", toDic: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043b\u043e\u0432\u0430\u0440\u044c",
    suggestions: "\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b", replace: "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c", replaceWith: "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430", replaceAll: "\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435", cancel: "\u041e\u0442\u043c\u0435\u043d\u0430", msg: "\u041e\u0448\u0438\u0431\u043e\u043a \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e", iSkip: "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u044d\u0442\u043e",
    iSkipAll: "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0445\u043e\u0436\u0438\u0435", iMsg: "\u041d\u0435\u0442 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/SpellCheck.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/TableDialog.js] */
//>>built
define("dojox/editor/plugins/nls/ru/TableDialog", {insertTableTitle: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443", modifyTableTitle: "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443", rows: "\u0421\u0442\u0440\u043e\u043a:", columns: "\u0421\u0442\u043e\u043b\u0431\u0446\u043e\u0432:", align: "\u0412\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c:", cellPadding: "\u041e\u0442\u0441\u0442\u0443\u043f \u0432\u043d\u0443\u0442\u0440\u0438 \u044f\u0447\u0435\u0435\u043a:",
    cellSpacing: "\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u044f\u0447\u0435\u0439\u043a\u0430\u043c\u0438:", tableWidth: "\u0428\u0438\u0440\u0438\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:", backgroundColor: "\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430:", borderColor: "\u0426\u0432\u0435\u0442 \u0440\u0430\u043c\u043a\u0438:", borderThickness: "\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u0440\u0430\u043c\u043a\u0438:", percent: "\u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432",
    pixels: "\u043f\u0438\u043a\u0441\u0435\u043b\u043e\u0432", "default": "\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e", left: "\u043f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e", center: "\u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443", right: "\u043f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e", buttonSet: "\u0417\u0430\u0434\u0430\u0442\u044c", buttonInsert: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c", buttonCancel: "\u041e\u0442\u043c\u0435\u043d\u0430",
    selectTableLabel: "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443", insertTableRowBeforeLabel: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u0435\u0440\u0435\u0434", insertTableRowAfterLabel: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0441\u043b\u0435", insertTableColumnBeforeLabel: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u043f\u0435\u0440\u0435\u0434",
    insertTableColumnAfterLabel: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u043f\u043e\u0441\u043b\u0435", deleteTableRowLabel: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443", deleteTableColumnLabel: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/TableDialog.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/TextColor.js] */
//>>built
define("dojox/editor/plugins/nls/ru/TextColor", {setButtonText: "\u0417\u0430\u0434\u0430\u0442\u044c", cancelButtonText: "\u041e\u0442\u043c\u0435\u043d\u0430"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/TextColor.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/latinEntities.js] */
//>>built
define("dojox/editor/plugins/nls/ru/latinEntities", {iexcl: "\u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0432\u043e\u0441\u043a\u043b\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u043d\u0430\u043a", cent: "\u0441\u0438\u043c\u0432\u043e\u043b \u0446\u0435\u043d\u0442\u0430", pound: "\u0441\u0438\u043c\u0432\u043e\u043b \u0444\u0443\u043d\u0442\u0430 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432", curren: "\u0441\u0438\u043c\u0432\u043e\u043b \u0434\u0435\u043d\u0435\u0436\u043d\u043e\u0439 \u0435\u0434\u0438\u043d\u0438\u0446\u044b",
    yen: "\u0441\u0438\u043c\u0432\u043e\u043b \u0438\u0435\u043d\u044b\n\u0441\u0438\u043c\u0432\u043e\u043b \u044e\u0430\u043d\u044f", brvbar: "\u043f\u0440\u0435\u0440\u044b\u0432\u0438\u0441\u0442\u0430\u044f \u0447\u0435\u0440\u0442\u0430\n\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u0435\u0440\u044b\u0432\u0438\u0441\u0442\u0430\u044f \u0447\u0435\u0440\u0442\u0430", sect: "\u0441\u0438\u043c\u0432\u043e\u043b \u0440\u0430\u0437\u0434\u0435\u043b\u0430", uml: "\u0442\u0440\u0435\u043c\u0430\n\u0442\u0440\u0435\u043c\u0430 \u0441 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c",
    copy: "\u0441\u0438\u043c\u0432\u043e\u043b \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0445 \u043f\u0440\u0430\u0432", ordf: "\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u0436\u0435\u043d\u0441\u043a\u043e\u0433\u043e \u0440\u043e\u0434\u0430", laquo: "\u043b\u0435\u0432\u044b\u0435 \u0434\u0432\u043e\u0439\u043d\u044b\u0439 \u0443\u0433\u043b\u043e\u0432\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438\n\u043b\u0435\u0432\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438",
    not: "\u0437\u043d\u0430\u043a \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f", shy: "\u043c\u044f\u0433\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\n\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441", reg: "\u0441\u0438\u043c\u0432\u043e\u043b \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\n\u0441\u0438\u043c\u0432\u043e\u043b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u043a\u0430",
    macr: "\u0437\u043d\u0430\u043a \u0434\u043e\u043b\u0433\u043e\u0442\u044b\n\u0437\u043d\u0430\u043a \u0434\u043e\u043b\u0433\u043e\u0442\u044b \u0441 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c\n\u0432\u0435\u0440\u0445\u043d\u044f\u044f \u0447\u0435\u0440\u0442\u0430\n\u043d\u0430\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435 APL", deg: "\u0441\u0438\u043c\u0432\u043e\u043b \u0433\u0440\u0430\u0434\u0443\u0441\u043e\u0432", plusmn: "\u0441\u0438\u043c\u0432\u043e\u043b \u043f\u043b\u044e\u0441-\u043c\u0438\u043d\u0443\u0441\n\u0441\u0438\u043c\u0432\u043e\u043b \u043f\u043b\u044e\u0441\u0430 \u0438\u043b\u0438 \u043c\u0438\u043d\u0443\u0441\u0430",
    sup2: "\u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u0434\u0432\u0430\n\u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u0441 \u0446\u0438\u0444\u0440\u043e\u0439 \u0434\u0432\u0430\n\u0432\u043e\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043a\u0432\u0430\u0434\u0440\u0430\u0442", sup3: "\u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0440\u0438\n\u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u0441 \u0446\u0438\u0444\u0440\u043e\u0439 \u0442\u0440\u0438\n\u0432\u043e\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043a\u0443\u0431",
    acute: "\u0437\u043d\u0430\u043a \u0430\u043a\u0443\u0442\n\u0430\u043a\u0443\u0442 \u0441 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c", micro: "\u0437\u043d\u0430\u043a \u043c\u0438\u043a\u0440\u043e", para: "\u0441\u0438\u043c\u0432\u043e\u043b \u0430\u0431\u0437\u0430\u0446\u0430\n\u0441\u0438\u043c\u0432\u043e\u043b \u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u0430", middot: "\u0441\u0440\u0435\u0434\u043d\u044f\u044f \u0442\u043e\u0447\u043a\u0430\n\u0437\u0430\u043f\u044f\u0442\u0430\u044f \u0432 \u0433\u0440\u0443\u0437\u0438\u043d\u0441\u043a\u043e\u043c\n\u0441\u0440\u0435\u0434\u043d\u044f\u044f \u0442\u043e\u0447\u043a\u0430 \u0432 \u0433\u0440\u0435\u0447\u0435\u0441\u043a\u043e\u043c",
    cedil: "\u0441\u0435\u0434\u0438\u043b\u044c\n\u0441\u0435\u0434\u0438\u043b\u044c \u0441 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c", sup1: "\u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u043e\u0434\u0438\u043d\n\u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u0441 \u0446\u0438\u0444\u0440\u043e\u0439 \u043e\u0434\u0438\u043d", ordm: "\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u043c\u0443\u0436\u0441\u043a\u043e\u0433\u043e \u0440\u043e\u0434\u0430",
    raquo: "\u043f\u0440\u0430\u0432\u0430\u044f \u0434\u0432\u043e\u0439\u043d\u0430\u044f \u0443\u0433\u043b\u043e\u0432\u0430\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430\n\u043f\u0440\u0430\u0432\u0430\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430", frac14: "\u0434\u0440\u043e\u0431\u044c \u043e\u0434\u043d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0430\u044f\n\u043e\u0434\u043d\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044c", frac12: "\u0434\u0440\u043e\u0431\u044c \u043e\u0434\u043d\u0430 \u0432\u0442\u043e\u0440\u0430\u044f\n\u043e\u0434\u043d\u0430 \u0432\u0442\u043e\u0440\u0430\u044f",
    frac34: "\u0434\u0440\u043e\u0431\u044c \u0442\u0440\u0438 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0438\n\u0442\u0440\u0438 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0438", iquest: "\u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0437\u043d\u0430\u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430\n\u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u044b\u0439 \u0437\u043d\u0430\u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430", Agrave: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 A \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c",
    Aacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 A \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", Acirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 A \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c", Atilde: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 A \u0441 \u0442\u0438\u043b\u044c\u0434\u043e\u0439",
    Auml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 A \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", Aring: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 A \u0441 \u043a\u0440\u0443\u0436\u043a\u043e\u043c \u0441\u0432\u0435\u0440\u0445\u0443\n\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 A \u0441 \u043a\u0440\u0443\u0436\u043a\u043e\u043c",
    AElig: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 AE\n\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u043b\u0438\u0433\u0430\u0442\u0443\u0440\u0430 AE", Ccedil: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 C \u0441 \u0441\u0435\u0434\u0438\u043b\u044c\u044e",
    Egrave: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 E \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c", Eacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 E \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", Ecirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 E \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c",
    Euml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 E \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", Igrave: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 I \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c", Iacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 I \u0441 \u0430\u043a\u0443\u0442\u043e\u043c",
    Icirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 I \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c", Iuml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 I \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", ETH: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 ETH",
    Ntilde: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 N \u0441 \u0442\u0438\u043b\u044c\u0434\u043e\u0439", Ograve: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 O \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c", Oacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 O \u0441 \u0430\u043a\u0443\u0442\u043e\u043c",
    Ocirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 O \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c", Otilde: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 O \u0441 \u0442\u0438\u043b\u044c\u0434\u043e\u0439", Ouml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 O \u0441 \u0442\u0440\u0435\u043c\u043e\u0439",
    times: "\u0437\u043d\u0430\u043a \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u044f", Oslash: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 O \u043f\u0435\u0440\u0435\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u0430\u044f\n\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 O \u0441 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0435\u0440\u0442\u043e\u0439",
    Ugrave: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 U \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c", Uacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 U \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", Ucirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 U \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c",
    Uuml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 U \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", Yacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 Y \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", THORN: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 THORN",
    szlig: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0437\u0430\u043e\u0441\u0442\u0440\u0435\u043d\u043d\u0430\u044f s\n\u044d\u0441\u0446\u044d\u0442", agrave: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 a \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c\n\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f a \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c",
    aacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 a \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", acirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 a \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c", atilde: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 a \u0441 \u0442\u0438\u043b\u044c\u0434\u043e\u0439",
    auml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 a \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", aring: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 a \u0441 \u043a\u0440\u0443\u0436\u043a\u043e\u043c \u0441\u0432\u0435\u0440\u0445\u0443\n\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f a \u0441 \u043a\u0440\u0443\u0436\u043a\u043e\u043c",
    aelig: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 ae\n\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u043b\u0438\u0433\u0430\u0442\u0443\u0440\u0430 ae", ccedil: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 c \u0441 \u0441\u0435\u0434\u0438\u043b\u044c\u044e", egrave: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 e \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c",
    eacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 e \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", ecirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 e \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c", euml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 e \u0441 \u0442\u0440\u0435\u043c\u043e\u0439",
    igrave: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 i \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c", iacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 i \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", icirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 i \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c",
    iuml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 i \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", eth: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 eth", ntilde: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 n \u0441 \u0442\u0438\u043b\u044c\u0434\u043e\u0439",
    ograve: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 o \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c", oacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 o \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", ocirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 o \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c",
    otilde: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 o \u0441 \u0442\u0438\u043b\u044c\u0434\u043e\u0439", ouml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 o \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", divide: "\u0437\u043d\u0430\u043a \u0434\u0435\u043b\u0435\u043d\u0438\u044f", oslash: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 o \u043f\u0435\u0440\u0435\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u0430\u044f\n\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 o \u0441 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0435\u0440\u0442\u043e\u0439",
    ugrave: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 u \u0441 \u0433\u0440\u0430\u0432\u0438\u0441\u043e\u043c", uacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 u \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", ucirc: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 u \u0441 \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441\u043e\u043c",
    uuml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 u \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", yacute: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 y \u0441 \u0430\u043a\u0443\u0442\u043e\u043c", thorn: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 thorn",
    yuml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 y \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", fnof: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 f \u0441 \u0445\u0432\u043e\u0441\u0442\u0438\u043a\u043e\u043c\n\u0444\u0443\u043d\u043a\u0446\u0438\u044f\n\u0444\u043b\u043e\u0440\u0438\u043d", Alpha: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0430\u043b\u044c\u0444\u0430",
    Beta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0431\u0435\u0442\u0430", Gamma: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0433\u0430\u043c\u043c\u0430", Delta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0434\u0435\u043b\u044c\u0442\u0430",
    Epsilon: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u044d\u043f\u0441\u0438\u043b\u043e\u043d", Zeta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0434\u0437\u0435\u0442\u0430", Eta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u044d\u0442\u0430",
    Theta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0442\u0435\u0442\u0430", Iota: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0439\u043e\u0442\u0430", Kappa: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043a\u0430\u043f\u043f\u0430",
    Lambda: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043b\u044f\u043c\u0431\u0434\u0430", Mu: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043c\u044e", Nu: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043d\u044e",
    Xi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043a\u0441\u0438", Omicron: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043e\u043c\u0438\u043a\u0440\u043e\u043d", Pi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043f\u0438",
    Rho: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0440\u043e", Sigma: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0441\u0438\u0433\u043c\u0430", Tau: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0442\u0430\u0443",
    Upsilon: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0438\u043f\u0441\u0438\u043b\u043e\u043d", Phi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0444\u0438", Chi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0445\u0438",
    Psi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043f\u0441\u0438", Omega: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043e\u043c\u0435\u0433\u0430", alpha: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0430\u043b\u044c\u0444\u0430",
    beta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0431\u0435\u0442\u0430", gamma: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0433\u0430\u043c\u043c\u0430", delta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0434\u0435\u043b\u044c\u0442\u0430",
    epsilon: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u044d\u043f\u0441\u0438\u043b\u043e\u043d", zeta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0434\u0437\u0435\u0442\u0430", eta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u044d\u0442\u0430",
    theta: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0442\u0435\u0442\u0430", iota: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0439\u043e\u0442\u0430", kappa: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043a\u0430\u043f\u043f\u0430",
    lambda: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043b\u044f\u043c\u0431\u0434\u0430", mu: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043c\u044e", nu: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043d\u044e", xi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0445\u0438",
    omicron: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043e\u043c\u0438\u043a\u0440\u043e\u043d", pi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043f\u0438", rho: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0440\u043e", sigmaf: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u043a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0441\u0438\u0433\u043c\u0430",
    sigma: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0441\u0438\u0433\u043c\u0430", tau: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0442\u0430\u0443", upsilon: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0438\u043f\u0441\u0438\u043b\u043e\u043d",
    phi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0444\u0438", chi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0445\u0438", psi: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043f\u0441\u0438", omega: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043e\u043c\u0435\u0433\u0430",
    thetasym: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u0442\u0430", upsih: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043f\u0441\u0438\u043b\u043e\u043d \u0441 \u0445\u0432\u043e\u0441\u0442\u0438\u043a\u043e\u043c", piv: "\u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u0438", bull: "\u043c\u0430\u0440\u043a\u0435\u0440 \u0441\u043f\u0438\u0441\u043a\u0430\n\u0447\u0435\u0440\u043d\u044b\u0439 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439 \u043a\u0440\u0443\u0436\u043e\u043a",
    hellip: "\u043c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u0435\n\u0442\u0440\u0438 \u0442\u043e\u0447\u043a\u0438", prime: "\u0448\u0442\u0440\u0438\u0445\n\u043c\u0438\u043d\u0443\u0442\u044b\n\u0444\u0443\u0442\u044b", Prime: "\u0434\u0432\u043e\u0439\u043d\u043e\u0439 \u0448\u0442\u0440\u0438\u0445\n\u0441\u0435\u043a\u0443\u043d\u0434\u044b\n\u0434\u044e\u0439\u043c\u044b", oline: "\u0432\u0435\u0440\u0445\u043d\u044f\u044f \u0447\u0435\u0440\u0442\u0430\n\u043d\u0430\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u043c",
    frasl: "\u043a\u043e\u0441\u0430\u044f \u0447\u0435\u0440\u0442\u0430", weierp: "\u0440\u0443\u043a\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f P\n\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e\u0435 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\n\u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0412\u0435\u0439\u0435\u0440\u0448\u0442\u0440\u0430\u0441\u0441\u0430", image: "\u0447\u0435\u0440\u043d\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f I\n\u043c\u043d\u0438\u043c\u0430\u044f \u0447\u0430\u0441\u0442\u044c",
    real: "\u0447\u0435\u0440\u043d\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f R\n\u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c", trade: "\u0441\u0438\u043c\u0432\u043e\u043b \u0442\u043e\u0432\u0430\u0440\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u043a\u0430", alefsym: "\u0431\u0443\u043a\u0432\u0430 \u0410\u043b\u0435\u0444\n\u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",
    larr: "\u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043b\u0435\u0432\u043e", uarr: "\u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u0432\u0435\u0440\u0445", rarr: "\u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043f\u0440\u0430\u0432\u043e", darr: "\u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437", harr: "\u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043b\u0435\u0432\u043e-\u0432\u043f\u0440\u0430\u0432\u043e", crarr: "\u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437 \u0441 \u0443\u0433\u043b\u043e\u043c \u0432\u043f\u0440\u0430\u0432\u043e\n\u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043a\u0430\u0440\u0435\u0442\u043a\u0438",
    lArr: "\u0434\u0432\u043e\u0439\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043b\u0435\u0432\u043e", uArr: "\u0434\u0432\u043e\u0439\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u0432\u0435\u0440\u0445", rArr: "\u0434\u0432\u043e\u0439\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043f\u0440\u0430\u0432\u043e", dArr: "\u0434\u0432\u043e\u0439\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437", hArr: "\u0434\u0432\u043e\u0439\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043b\u0435\u0432\u043e-\u0432\u043f\u0440\u0430\u0432\u043e",
    forall: "\u0434\u043b\u044f \u0432\u0441\u0435\u0445", part: "\u0447\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0430\u043b", exist: "\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442", empty: "\u043f\u0443\u0441\u0442\u043e\u0439 \u043d\u0430\u0431\u043e\u0440\n\u043f\u0443\u0441\u0442\u043e\u0435 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\n\u0434\u0438\u0430\u043c\u0435\u0442\u0440", nabla: "\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043d\u0430\u0431\u043b\u0430\n\u0440\u0430\u0437\u043d\u043e\u0441\u0442\u043d\u043e\u0435 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043d\u0430\u0437\u0430\u0434",
    isin: "\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c", notin: "\u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c", ni: "\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430", prod: "n-\u0430\u0440\u043d\u043e\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435\n\u0441\u0438\u043c\u0432\u043e\u043b \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f",
    sum: "n-\u0430\u0440\u043d\u043e\u0435 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435", minus: "\u0437\u043d\u0430\u043a \u043c\u0438\u043d\u0443\u0441\u0430", lowast: "\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u0430", radic: "\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439 \u043a\u043e\u0440\u0435\u043d\u044c\n\u0437\u043d\u0430\u043a \u043a\u043e\u0440\u043d\u044f", prop: "\u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e",
    infin: "\u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u044c", ang: "\u0443\u0433\u043e\u043b", and: "\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418\n\u043a\u043b\u0438\u043d \u0432\u0432\u0435\u0440\u0445", or: "\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418\u041b\u0418\n\u043a\u043b\u0438\u043d \u0432\u043d\u0438\u0437", cap: "\u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435\n\u0448\u0430\u043f\u043e\u0447\u043a\u0430",
    cup: "\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\n\u0447\u0430\u0448\u0435\u0447\u043a\u0430", "int": "\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b", there4: "\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e", sim: "\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0442\u0438\u043b\u044c\u0434\u0430\n\u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0441\n\u043f\u043e\u0434\u043e\u0431\u043d\u043e", cong: "\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0440\u0430\u0432\u043d\u043e",
    asymp: "\u043f\u043e\u0447\u0442\u0438 \u0440\u0430\u0432\u043d\u043e\n\u0430\u0441\u0438\u043c\u043f\u0442\u043e\u0442\u0438\u0447\u043d\u043e", ne: "\u043d\u0435 \u0440\u0430\u0432\u043d\u043e", equiv: "\u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u043e", le: "\u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e", ge: "\u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e", sub: "\u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e",
    sup: "\u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f", nsub: "\u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c", sube: "\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u0438\u043b\u0438 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e", supe: "\u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0438\u043b\u0438 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e",
    oplus: "\u043f\u043b\u044e\u0441 \u0432 \u043a\u0440\u0443\u0433\u0435\n\u043f\u0440\u044f\u043c\u0430\u044f \u0441\u0443\u043c\u043c\u0430", otimes: "\u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 \u043a\u0440\u0443\u0433\u0435\n\u0432\u0435\u043a\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435", perp: "\u043f\u0435\u0440\u0435\u0432\u0435\u0440\u043d\u0443\u0442\u044b\u0439 \u0433\u0432\u043e\u0437\u0434\u044c\n\u043e\u0440\u0442\u043e\u0433\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u043a\n\u043f\u0435\u0440\u043f\u0435\u043d\u0434\u0438\u043a\u0443\u043b\u044f\u0440\u043d\u043e",
    sdot: "\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0442\u043e\u0447\u043a\u0430", lceil: "\u043b\u0435\u0432\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0432\u0432\u0435\u0440\u0445\nAPL upstile", rceil: "\u043f\u0440\u0430\u0432\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0432\u0432\u0435\u0440\u0445", lfloor: "\u043b\u0435\u0432\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0432\u043d\u0438\u0437\nAPL downstile",
    rfloor: "\u043f\u0440\u0430\u0432\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0432\u043d\u0438\u0437", lang: "\u043b\u0435\u0432\u0430\u044f \u0443\u0433\u043b\u043e\u0432\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430", rang: "\u043f\u0440\u0430\u0432\u0430\u044f \u0443\u0433\u043b\u043e\u0432\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430", loz: "\u0440\u043e\u043c\u0431", spades: "\u043f\u0438\u043a\u0438", clubs: "\u043a\u0440\u0435\u0441\u0442\u0438\n\u0442\u0440\u0438\u043b\u0438\u0441\u0442\u043d\u0438\u043a",
    hearts: "\u0447\u0435\u0440\u0432\u044b\n\u0432\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u043a\u0430", diams: "\u0431\u0443\u0431\u043d\u044b", OElig: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u043b\u0438\u0433\u0430\u0442\u0443\u0440\u0430 OE", oelig: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u043b\u0438\u0433\u0430\u0442\u0443\u0440\u0430 oe", Scaron: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 S \u0441 \u0433\u0430\u043b\u043e\u0447\u043a\u043e\u0439",
    scaron: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u043e\u0447\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 s \u0441 \u0433\u0430\u043b\u043e\u0447\u043a\u043e\u0439", Yuml: "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 Y \u0441 \u0442\u0440\u0435\u043c\u043e\u0439", circ: "\u043d\u0430\u0434\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0437\u043d\u0430\u043a \u0446\u0438\u0440\u043a\u0443\u043c\u0444\u043b\u0435\u043a\u0441",
    tilde: "\u043c\u0430\u043b\u0430\u044f \u0442\u0438\u043b\u044c\u0434\u0430", ensp: "\u043f\u0440\u043e\u0431\u0435\u043b \u0434\u043b\u0438\u043d\u044b N", emsp: "\u043f\u0440\u043e\u0431\u0435\u043b \u0434\u043b\u0438\u043d\u044b M", thinsp: "\u0443\u0437\u043a\u0438\u0439 \u043f\u0440\u043e\u0431\u0435\u043b", zwnj: "\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u043d\u0443\u043b\u0435\u0432\u043e\u0439 \u0448\u0438\u0440\u0438\u043d\u044b", zwj: "\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c \u043d\u0443\u043b\u0435\u0432\u043e\u0439 \u0448\u0438\u0440\u0438\u043d\u044b",
    lrm: "\u0437\u043d\u0430\u043a \u0441\u043b\u0435\u0432\u0430-\u043d\u0430\u043f\u0440\u0430\u0432\u043e", rlm: "\u0437\u043d\u0430\u043a \u0441\u043f\u0440\u0430\u0432\u0430-\u043d\u0430\u043b\u0435\u0432\u043e", ndash: "\u0442\u0438\u0440\u0435 \u0434\u043b\u0438\u043d\u044b N", mdash: "\u0442\u0438\u0440\u0435 \u0434\u043b\u0438\u043d\u044b M", lsquo: "\u043b\u0435\u0432\u0430\u044f \u043e\u0434\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430", rsquo: "\u043f\u0440\u0430\u0432\u0430\u044f \u043e\u0434\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430",
    sbquo: "\u043e\u0434\u0438\u043d\u043e\u0447\u043d\u0430\u044f \u043d\u0438\u0436\u043d\u044f\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430", ldquo: "\u043b\u0435\u0432\u0430\u044f \u0434\u0432\u043e\u0439\u043d\u0430\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430", rdquo: "\u043f\u0440\u0430\u0432\u0430\u044f \u0434\u0432\u043e\u0439\u043d\u0430\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430", bdquo: "\u0434\u0432\u043e\u0439\u043d\u0430\u044f \u043d\u0438\u0436\u043d\u044f\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430",
    dagger: "\u043a\u0440\u0435\u0441\u0442", Dagger: "\u0434\u0432\u043e\u0439\u043d\u043e\u0439 \u043a\u0440\u0435\u0441\u0442", permil: "\u0437\u043d\u0430\u043a \u043f\u0440\u043e\u043c\u0438\u043b\u043b\u0435", lsaquo: "\u043e\u0434\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043b\u0435\u0432\u0430\u044f \u0443\u0433\u043b\u043e\u0432\u0430\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430", rsaquo: "\u043e\u0434\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043f\u0440\u0430\u0432\u0430\u044f \u0443\u0433\u043b\u043e\u0432\u0430\u044f \u043a\u0430\u0432\u044b\u0447\u043a\u0430",
    euro: "\u0441\u0438\u043c\u0432\u043e\u043b \u0435\u0432\u0440\u043e"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/editor/plugins/nls/ru/latinEntities.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/CheckedMultiSelect.js] */
//>>built
define("dojox/form/nls/CheckedMultiSelect", {root: {invalidMessage: "At least one item must be selected.", multiSelectLabelText: "{num} item(s) selected"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/CheckedMultiSelect.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/PasswordValidator.js] */
//>>built
define("dojox/form/nls/PasswordValidator", {root: {nomatchMessage: "Passwords do not match.", badPasswordMessage: "Invalid Password."}, ar: !0, az: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, es: !0, fi: !0, fr: !0, he: !0, hu: !0, hr: !0, it: !0, ja: !0, kk: !0, ko: !0, nb: !0, nl: !0, pl: !0, "pt-pt": !0, pt: !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/PasswordValidator.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/Uploader.js] */
//>>built
define("dojox/form/nls/Uploader", {root: {label: "Select Files..."}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/Uploader.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/de/CheckedMultiSelect.js] */
//>>built
define("dojox/form/nls/de/CheckedMultiSelect", {invalidMessage: "Es muss mindestens ein Eintrag ausgew\u00e4hlt werden.", multiSelectLabelText: "{num} Eintrag/Eintr\u00e4ge ausgew\u00e4hlt"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/de/CheckedMultiSelect.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/de/PasswordValidator.js] */
//>>built
define("dojox/form/nls/de/PasswordValidator", {nomatchMessage: "Die Kennw\u00f6rter stimmen nicht \u00fcberein.", badPasswordMessage: "Ung\u00fcltiges Kennwort."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/de/PasswordValidator.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/de/Uploader.js] */
//>>built
define("dojox/form/nls/de/Uploader", {label: "Dateien ausw\u00e4hlen..."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/de/Uploader.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/ru/CheckedMultiSelect.js] */
//>>built
define("dojox/form/nls/ru/CheckedMultiSelect", {invalidMessage: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u044d\u043b\u0435\u043c\u0435\u043d\u0442.", multiSelectLabelText: "\u0412\u044b\u0431\u0440\u0430\u043d\u043e: {num}"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/ru/CheckedMultiSelect.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/ru/PasswordValidator.js] */
//>>built
define("dojox/form/nls/ru/PasswordValidator", {nomatchMessage: "\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442.", badPasswordMessage: "\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/ru/PasswordValidator.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/ru/Uploader.js] */
//>>built
define("dojox/form/nls/ru/Uploader", {label: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b..."});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/form/nls/ru/Uploader.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/EnhancedGrid.js] */
//>>built
define("dojox/grid/enhanced/nls/EnhancedGrid", {root: {singleSort: "Single Sort", nestedSort: "Nested Sort", ascending: "Click to sort Ascending", descending: "Click to sort Descending", sortingState: "${0} - ${1}", unsorted: "Do not sort this column", indirectSelectionRadio: "Row ${0}, single selection, radio box", indirectSelectionCheckBox: "Row ${0}, multiple selection, check box", selectAll: "Select all"}, ar: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, es: !0, fi: !0, fr: !0, he: !0, hr: !0, hu: !0, hr: !0, it: !0, ja: !0, kk: !0, ko: !0, nb: !0,
    nl: !0, pl: !0, pt: !0, "pt-pt": !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/EnhancedGrid.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/Filter.js] */
//>>built
define("dojox/grid/enhanced/nls/Filter", {root: {clearFilterDialogTitle: "Clear Filter", filterDefDialogTitle: "Filter", ruleTitleTemplate: "Rule ${0}", conditionEqual: "equal", conditionNotEqual: "does not equal", conditionLess: "is less than", conditionLessEqual: "less than or equal", conditionLarger: "is greater than", conditionLargerEqual: "greater than or equal", conditionContains: "contains", conditionIs: "is", conditionStartsWith: "starts with", conditionEndWith: "ends with", conditionNotContain: "does not contain", conditionIsNot: "is not",
    conditionNotStartWith: "does not start with", conditionNotEndWith: "does not end with", conditionBefore: "before", conditionAfter: "after", conditionRange: "range", conditionIsEmpty: "is empty", all: "all", any: "any", relationAll: "all rules", waiRelAll: "Match all of the following rules:", relationAny: "any rules", waiRelAny: "Match any of the following rules:", relationMsgFront: "Match:", relationMsgTail: "", and: "and", or: "or", addRuleButton: "Add Rule", waiAddRuleButton: "Add a new rule", removeRuleButton: "Remove Rule", waiRemoveRuleButtonTemplate: "Remove rule ${0}",
    cancelButton: "Cancel", waiCancelButton: "Cancel this dialog", clearButton: "Clear", waiClearButton: "Clear the filter", filterButton: "Filter", waiFilterButton: "Submit the filter", columnSelectLabel: "Column", waiColumnSelectTemplate: "Column for rule ${0}", conditionSelectLabel: "Condition", waiConditionSelectTemplate: "Condition for rule ${0}", valueBoxLabel: "Value", waiValueBoxTemplate: "Enter value to filter for rule ${0}", rangeTo: "to", rangeTemplate: "from ${0} to ${1}", statusTipHeaderColumn: "Column", statusTipHeaderCondition: "Rules",
    statusTipTitle: "Filter Bar", statusTipMsg: "Click the filter bar here to filter on values in ${0}.", anycolumn: "any column", statusTipTitleNoFilter: "Filter Bar", statusTipTitleHasFilter: "Filter", statusTipRelAny: "Match any rules.", statusTipRelAll: "Match all rules.", defaultItemsName: "items", filterBarMsgHasFilterTemplate: "${0} of ${1} ${2} shown.", filterBarMsgNoFilterTemplate: "No filter applied", filterBarDefButton: "Define filter", waiFilterBarDefButton: "Filter the table", a11yFilterBarDefButton: "Filter...",
    filterBarClearButton: "Clear filter", waiFilterBarClearButton: "Clear the filter", closeFilterBarBtn: "Close filter bar", clearFilterMsg: "This will remove the filter and show all available records.", anyColumnOption: "Any Column", trueLabel: "True", falseLabel: "False"}, ar: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, es: !0, fi: !0, fr: !0, he: !0, hr: !0, hu: !0, hr: !0, it: !0, ja: !0, kk: !0, ko: !0, nb: !0, nl: !0, pl: !0, pt: !0, "pt-pt": !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/Filter.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/Pagination.js] */
//>>built
define("dojox/grid/enhanced/nls/Pagination", {root: {descTemplate: "${2} - ${3} of ${1} ${0}", firstTip: "First Page", lastTip: "Last Page", nextTip: "Next Page", prevTip: "Previous Page", itemTitle: "items", singularItemTitle: "item", pageStepLabelTemplate: "Page ${0}", pageSizeLabelTemplate: "${0} items per page", allItemsLabelTemplate: "All items", gotoButtonTitle: "Go to a specific page", dialogTitle: "Go to Page", dialogIndication: "Specify the page number", pageCountIndication: " (${0} pages)", dialogConfirm: "Go", dialogCancel: "Cancel",
    all: "All"}, ar: !0, ca: !0, cs: !0, da: !0, de: !0, el: !0, es: !0, fi: !0, fr: !0, he: !0, hr: !0, hu: !0, hr: !0, it: !0, ja: !0, kk: !0, ko: !0, nb: !0, nl: !0, pl: !0, pt: !0, "pt-pt": !0, ro: !0, ru: !0, sk: !0, sl: !0, sv: !0, th: !0, tr: !0, zh: !0, "zh-tw": !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/Pagination.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/de/EnhancedGrid.js] */
//>>built
define("dojox/grid/enhanced/nls/de/EnhancedGrid", {singleSort: "Einfache Sortierung", nestedSort: "Verschachtelte Sortierung", ascending: "F\u00fcr aufsteigende Sortierung hier klicken", descending: "F\u00fcr absteigende Sortierung hier klicken", sortingState: "${0} - ${1}", unsorted: "Diese Spalte nicht sortieren", indirectSelectionRadio: "Zeile ${0}, Einzelauswahl, Optionsfeld", indirectSelectionCheckBox: "Zeile ${0}, Mehrfachauswahl, Kontrollk\u00e4stchen", selectAll: "Alles ausw\u00e4hlen"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/de/EnhancedGrid.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/de/Filter.js] */
//>>built
define("dojox/grid/enhanced/nls/de/Filter", {clearFilterDialogTitle: "Filter l\u00f6schen", filterDefDialogTitle: "Filter", ruleTitleTemplate: "Regel ${0}", conditionEqual: "gleich", conditionNotEqual: "ist nicht gleich", conditionLess: "ist kleiner als", conditionLessEqual: "kleiner-gleich", conditionLarger: "ist gr\u00f6\u00dfer als", conditionLargerEqual: "gr\u00f6\u00dfer-gleich", conditionContains: "enth\u00e4lt", conditionIs: "ist", conditionStartsWith: "beginnt mit", conditionEndWith: "endet mit", conditionNotContain: "enth\u00e4lt nicht",
    conditionIsNot: "ist nicht", conditionNotStartWith: "beginnt nicht mit", conditionNotEndWith: "endet nicht mit", conditionBefore: "vor", conditionAfter: "nach", conditionRange: "Bereich", conditionIsEmpty: "ist leer", all: "alle", any: "beliebig", relationAll: "Alle Regeln", waiRelAll: "\u00dcbereinstimmung mit allen folgenden Regeln:", relationAny: "Beliebige Regeln", waiRelAny: "\u00dcbereinstimmung mit einer beliebigen der folgenden Regeln:", relationMsgFront: "\u00dcbereinstimmung:", relationMsgTail: "", and: "und", or: "oder",
    addRuleButton: "Regel hinzuf\u00fcgen", waiAddRuleButton: "Neue Regel hinzuf\u00fcgen", removeRuleButton: "Regel entfernen", waiRemoveRuleButtonTemplate: "Regel ${0} entfernen", cancelButton: "Abbrechen", waiCancelButton: "Dialog abbrechen", clearButton: "Abw\u00e4hlen", waiClearButton: "Filter abw\u00e4hlen", filterButton: "Filter", waiFilterButton: "Filter \u00fcbergeben", columnSelectLabel: "Spalte", waiColumnSelectTemplate: "Spalte f\u00fcr Regel ${0}", conditionSelectLabel: "Bedingung", waiConditionSelectTemplate: "Bedingung f\u00fcr Regel ${0}",
    valueBoxLabel: "Wert", waiValueBoxTemplate: "Filterwert f\u00fcr Regel ${0} eingeben", rangeTo: "bis", rangeTemplate: "von ${0} bis ${1}", statusTipHeaderColumn: "Spalte", statusTipHeaderCondition: "Regeln", statusTipTitle: "Filterleiste", statusTipMsg: "Kicken Sie auf die Filterleiste, um nach Werten in ${0} zu filtern.", anycolumn: "Beliebige Spalte", statusTipTitleNoFilter: "Filterleiste", statusTipTitleHasFilter: "Filter", statusTipRelAny: "Beliebige Regeln abgleichen.", statusTipRelAll: "Alle Regel abgleichen.", defaultItemsName: "Eintr\u00e4ge",
    filterBarMsgHasFilterTemplate: "${0} von ${1} ${2} angezeigt.", filterBarMsgNoFilterTemplate: "Kein Filter angewendet", filterBarDefButton: "Filter definieren", waiFilterBarDefButton: "Tabelle filtern", a11yFilterBarDefButton: "Filter...", filterBarClearButton: "Filter l\u00f6schen", waiFilterBarClearButton: "Filter abw\u00e4hlen", closeFilterBarBtn: "Filterleiste schlie\u00dfen", clearFilterMsg: "Diese Aktion entfernt den Filter und zeigt alle verf\u00fcgbaren Datens\u00e4tze an.", anyColumnOption: "Beliebige Spalte",
    trueLabel: "Wahr", falseLabel: "Falsch"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/de/Filter.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/de/Pagination.js] */
//>>built
define("dojox/grid/enhanced/nls/de/Pagination", {descTemplate: "${2} - ${3} von ${1} ${0}", firstTip: "Erste Seite", lastTip: "Letzte Seite", nextTip: "N\u00e4chste Seite", prevTip: "Vorherige Seite", itemTitle: "Eintr\u00e4ge", singularItemTitle: "Eintrag", pageStepLabelTemplate: "Seite ${0}", pageSizeLabelTemplate: "${0} Eintr\u00e4ge pro Seite", allItemsLabelTemplate: "Alle Eintr\u00e4ge", gotoButtonTitle: "Wechsel zu einer bestimmten Seite", dialogTitle: "Wechseln zur Seite", dialogIndication: "Seitennummer angeben", pageCountIndication: " (${0} Seiten)",
    dialogConfirm: "Start", dialogCancel: "Abbrechen", all: "Alle"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/de/Pagination.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/ru/EnhancedGrid.js] */
//>>built
define("dojox/grid/enhanced/nls/ru/EnhancedGrid", {singleSort: "\u041e\u0434\u043d\u043e\u043a\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430", nestedSort: "\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u0430\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430", ascending: "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e", descending: "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",
    sortingState: "${0} - ${1}", unsorted: "\u041d\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u0442\u043e\u043b\u0431\u0435\u0446", indirectSelectionRadio: "\u0421\u0442\u0440\u043e\u043a\u0430 ${0}, \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440, \u0440\u0430\u0434\u0438\u043e\u043a\u043d\u043e\u043f\u043a\u0430", indirectSelectionCheckBox: "\u0421\u0442\u0440\u043e\u043a\u0430 ${0}, \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0431\u043e\u0440, \u0444\u043b\u0430\u0436\u043e\u043a",
    selectAll: "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/ru/EnhancedGrid.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/ru/Filter.js] */
//>>built
define("dojox/grid/enhanced/nls/ru/Filter", {clearFilterDialogTitle: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440", filterDefDialogTitle: "\u0424\u0438\u043b\u044c\u0442\u0440", ruleTitleTemplate: "\u041f\u0440\u0430\u0432\u0438\u043b\u043e ${0}", conditionEqual: "\u0440\u0430\u0432\u043d\u043e", conditionNotEqual: "\u043d\u0435 \u0440\u0430\u0432\u043d\u043e", conditionLess: "\u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c", conditionLessEqual: "\u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c",
    conditionLarger: "\u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c", conditionLargerEqual: "\u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c", conditionContains: "\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442", conditionIs: "-", conditionStartsWith: "\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441", conditionEndWith: "\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f", conditionNotContain: "\u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442",
    conditionIsNot: "\u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442", conditionNotStartWith: "\u043d\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441", conditionNotEndWith: "\u043d\u0435 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f", conditionBefore: "\u0434\u043e", conditionAfter: "\u043f\u043e\u0441\u043b\u0435", conditionRange: "\u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d", conditionIsEmpty: "\u043f\u0443\u0441\u0442",
    all: "\u0432\u0441\u0435", any: "\u043b\u044e\u0431\u043e\u0435", relationAll: "\u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430", waiRelAll: "\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0441\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c:", relationAny: "\u043b\u044e\u0431\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430", waiRelAny: "\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043b\u044e\u0431\u043e\u043c\u0443 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043f\u0440\u0430\u0432\u0438\u043b:",
    relationMsgFront: "\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435:", relationMsgTail: "", and: "\u0438", or: "\u0438\u043b\u0438", addRuleButton: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e", waiAddRuleButton: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e", removeRuleButton: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e",
    waiRemoveRuleButtonTemplate: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e ${0}", cancelButton: "\u041e\u0442\u043c\u0435\u043d\u0430", waiCancelButton: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0434\u0438\u0430\u043b\u043e\u0433", clearButton: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c", waiClearButton: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440", filterButton: "\u0424\u0438\u043b\u044c\u0442\u0440",
    waiFilterButton: "\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440", columnSelectLabel: "\u0421\u0442\u043e\u043b\u0431\u0435\u0446", waiColumnSelectTemplate: "\u0421\u0442\u043e\u043b\u0431\u0435\u0446 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ${0}", conditionSelectLabel: "\u0423\u0441\u043b\u043e\u0432\u0438\u0435", waiConditionSelectTemplate: "\u0423\u0441\u043b\u043e\u0432\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ${0}", valueBoxLabel: "\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435",
    waiValueBoxTemplate: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0444\u0438\u043b\u044c\u0442\u0440 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ${0}", rangeTo: "\u043a", rangeTemplate: "\u043e\u0442 ${0} \u0434\u043e ${1}", statusTipHeaderColumn: "\u0421\u0442\u043e\u043b\u0431\u0435\u0446", statusTipHeaderCondition: "\u041f\u0440\u0430\u0432\u0438\u043b\u0430", statusTipTitle: "\u041f\u0430\u043d\u0435\u043b\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432",
    statusTipMsg: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u0432 ${0}.", anycolumn: "\u043b\u044e\u0431\u043e\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446", statusTipTitleNoFilter: "\u041f\u0430\u043d\u0435\u043b\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432",
    statusTipTitleHasFilter: "\u0424\u0438\u043b\u044c\u0442\u0440", statusTipRelAny: "\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043b\u044e\u0431\u043e\u043c\u0443 \u0438\u0437 \u043f\u0440\u0430\u0432\u0438\u043b.", statusTipRelAll: "\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0432\u0441\u0435\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c.", defaultItemsName: "\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432", filterBarMsgHasFilterTemplate: "\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u043e ${0} \u0438\u0437 ${1} ${2}.",
    filterBarMsgNoFilterTemplate: "\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f", filterBarDefButton: "\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440", waiFilterBarDefButton: "\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443", a11yFilterBarDefButton: "\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c...",
    filterBarClearButton: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440", waiFilterBarClearButton: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440", closeFilterBarBtn: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432", clearFilterMsg: "\u042d\u0442\u0430 \u043e\u043f\u0446\u0438\u044f \u0443\u0434\u0430\u043b\u0438\u0442 \u0444\u0438\u043b\u044c\u0442\u0440 \u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0432\u0441\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438.",
    anyColumnOption: "\u041b\u044e\u0431\u043e\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446", trueLabel: "\u0418\u0441\u0442\u0438\u043d\u0430", falseLabel: "\u041b\u043e\u0436\u044c"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/ru/Filter.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/ru/Pagination.js] */
//>>built
define("dojox/grid/enhanced/nls/ru/Pagination", {descTemplate: "${2} - ${3} \u0438\u0437 ${1} ${0}", firstTip: "\u041f\u0435\u0440\u0432\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430", lastTip: "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430", nextTip: "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430", prevTip: "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",
    itemTitle: "\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432", singularItemTitle: "\u044d\u043b\u0435\u043c\u0435\u043d\u0442", pageStepLabelTemplate: "\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ${0}", pageSizeLabelTemplate: "${0} \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435", allItemsLabelTemplate: "\u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b", gotoButtonTitle: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",
    dialogTitle: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443", dialogIndication: "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b", pageCountIndication: " (${0} \u0441\u0442\u0440\u0430\u043d\u0438\u0446)", dialogConfirm: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438", dialogCancel: "\u041e\u0442\u043c\u0435\u043d\u0430", all: "\u0412\u0441\u0435"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/grid/enhanced/nls/ru/Pagination.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/ColorPicker.js] */
//>>built
define("dojox/widget/nls/ColorPicker", {root: {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Hue Selector", saturationPickerTitle: "Saturation Selector"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/ColorPicker.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/FilePicker.js] */
//>>built
define("dojox/widget/nls/FilePicker", {root: {name: "Name", path: "Path", size: "Size (in bytes)"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/FilePicker.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/Wizard.js] */
//>>built
define("dojox/widget/nls/Wizard", {root: {next: "Next", previous: "Previous", done: "Done"}, zh: !0, "zh-tw": !0, tr: !0, th: !0, sv: !0, sl: !0, sk: !0, ru: !0, ro: !0, pt: !0, "pt-pt": !0, pl: !0, nl: !0, nb: !0, ko: !0, kk: !0, ja: !0, it: !0, hu: !0, hr: !0, he: !0, fr: !0, fi: !0, es: !0, el: !0, de: !0, da: !0, cs: !0, ca: !0, az: !0, ar: !0});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/Wizard.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/de/ColorPicker.js] */
//>>built
define("dojox/widget/nls/de/ColorPicker", {redLabel: "r", greenLabel: "g", blueLabel: "b", hueLabel: "h", saturationLabel: "s", valueLabel: "v", degLabel: "\u00b0", hexLabel: "hex", huePickerTitle: "Farbtonauswahl", saturationPickerTitle: "S\u00e4ttigungsauswahl"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/de/ColorPicker.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/de/FilePicker.js] */
//>>built
define("dojox/widget/nls/de/FilePicker", {name: "Name", path: "Pfad", size: "Gr\u00f6\u00dfe (in Byte)"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/de/FilePicker.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/de/Wizard.js] */
//>>built
define("dojox/widget/nls/de/Wizard", {next: "Weiter", previous: "Zur\u00fcck", done: "Fertig"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/de/Wizard.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/ru/ColorPicker.js] */
//>>built
define("dojox/widget/nls/ru/ColorPicker", {redLabel: "\u043a", greenLabel: "\u0437", blueLabel: "\u0441", hueLabel: "\u043e", saturationLabel: "\u043d", valueLabel: "\u0437", degLabel: "\u00b0", hexLabel: "\u0448\u0435\u0441\u0442", huePickerTitle: "\u0412\u044b\u0431\u043e\u0440 \u043e\u0442\u0442\u0435\u043d\u043a\u0430", saturationPickerTitle: "\u0412\u044b\u0431\u043e\u0440 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u0438"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/ru/ColorPicker.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/ru/FilePicker.js] */
//>>built
define("dojox/widget/nls/ru/FilePicker", {name: "\u0418\u043c\u044f", path: "\u041f\u0443\u0442\u044c", size: "\u0420\u0430\u0437\u043c\u0435\u0440 (\u0431\u0430\u0439\u0442)"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/ru/FilePicker.js] */
/* START OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/ru/Wizard.js] */
//>>built
define("dojox/widget/nls/ru/Wizard", {next: "\u0414\u0430\u043b\u0435\u0435", previous: "\u041d\u0430\u0437\u0430\u0434", done: "\u0413\u043e\u0442\u043e\u0432\u043e"});
/* END OF NLS BUNDLE ENTRY [dojo-deps/dist/dojox/widget/nls/ru/Wizard.js] */

// END OF dojobundle.js

(function () {
    var e = this.require;
    e({cache: {}});
    !e.async && e(["dojo"]);
    e.boot && e.apply(null, e.boot)
})();